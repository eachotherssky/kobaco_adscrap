// scripts/fix-path.cjs
/*
 * Next.js( output:"export" ) 결과물을
 *   out/               → out/kobaco_adscrap/
 * 로 100% 이동시키는 크로스-플랫폼 스크립트
 * - Node v16 이상 필요 (fs.cp, fs.rm 사용)
 * - CommonJS(.cjs) 파일이라 "type": "module" 유무와 무관
 */

const fs   = require("fs");
const fsp  = fs.promises;
const path = require("path");

const ROOT   = "out";
const TARGET = path.join(ROOT, "kobaco_adscrap");

(async () => {
  /* 1) 목표 폴더 생성 */
  await fsp.mkdir(TARGET, { recursive: true });

  /* 2) out/ 안에 남아 있는 모든 항목 이동 */
  for (const entry of await fsp.readdir(ROOT)) {
    if (entry === "kobaco_adscrap") continue;          // 이미 이동된 폴더 건너뜀

    const src  = path.join(ROOT, entry);
    const dest = path.join(TARGET, entry);

    try {
      await fsp.rename(src, dest);                     // 빠른 경로(대부분 성공)
      console.log("» moved  :", entry);
    } catch {
      // rename 실패(Cross-device, 기존 파일 존재 등) → 복사 후 삭제
      await fsp.cp(src, dest, { recursive: true });
      await fsp.rm(src, { recursive: true, force: true });
      console.log("» copied :", entry);
    }
  }

  /* 3) .nojekyll 생성(존재해도 덮어쓰기) */
  await fsp.writeFile(path.join(TARGET, ".nojekyll"), "");
  console.log("✅  all files are under out/kobaco_adscrap/");
})();
