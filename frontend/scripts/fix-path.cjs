// scripts/fix-path.cjs                ← 확장자 .cjs
const fs   = require("fs");
const fsp  = fs.promises;
const path = require("path");

const ROOT   = "out";
const TARGET = path.join(ROOT, "kobaco_adscrap");

(async () => {
  // 1) 대상 폴더가 없으면 생성
  await fsp.mkdir(TARGET, { recursive: true });

  // 2) out/ 안의 모든 항목을 순회
  const entries = await fsp.readdir(ROOT);
  for (const entry of entries) {
    if (entry === "kobaco_adscrap") continue;          // 이미 이동된 폴더는 건너뜀
    const src  = path.join(ROOT, entry);
    const dest = path.join(TARGET, entry);

    // 3) 폴더든 파일이든 일단 이동, 실패하면 복사 후 삭제(윈도우 권한 이슈 대비)
    await fsp.rename(src, dest).catch(async () => {
      await fsp.cp(src, dest, { recursive: true });
      await fsp.rm(src, { recursive: true, force: true });
    });
  }

  // 4) GitHub Pages 가 _next 폴더를 무시하지 않도록
  await fsp.writeFile(path.join(TARGET, ".nojekyll"), "");

  console.log("✅  export files moved → out/kobaco_adscrap/");
})();
