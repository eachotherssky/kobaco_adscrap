/* components/ui/input.tsx */
"use client"

import {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type Ref,
} from "react";
import clsx from "clsx";

/* ────────────────────────────────── */
/* 1) <Input>                         */
/* ────────────────────────────────── */

/* ▲ InputHTMLAttributes 에서 중복되는 두 필드를 제외(Omit) */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label: string;
  value: string;                       /* 필수 string 으로 고정 */
  onChange: (value: string) => void;
  variant?: "outline";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      type = "text",
      required = false,
      maxLength,
      className = "",
      variant = "outline",
      ...rest
    },
    ref: Ref<HTMLInputElement>,
  ) => (
    <div className={clsx("cmp-input space-y-2", className)}>
      <label className="block font-sans text-sm font-medium text-[#222]">
        {label}
        {required && <span className="text-[#FF3B30] ml-1">*</span>}
      </label>

      <input
        ref={ref}
        type={type}
        value={value}                               /* ✅ string 값 */
        onChange={(e) => onChange(e.target.value)}  /* ✅ 이벤트 변환 */
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className={clsx(
          "w-full px-4 py-3 border bg-white text-[#222] font-sans text-base",
          "placeholder-[#999] focus:outline-none transition-colors",
          variant === "outline"
            ? "border-[#E5E5E5] focus:border-[#FF3B30]"
            : "",
        )}
        {...rest}
      />

      {maxLength && (
        <div className="text-right text-xs text-[#999] font-sans">
          {value.length}/{maxLength}                 {/* ✅ value 는 항상 string */}
        </div>
      )}
    </div>
  ),
);
Input.displayName = "Input";

/* ────────────────────────────────── */
/* 2) <Textarea>                      */
/* ────────────────────────────────── */

/* ▲ 중복 값 제거(Omit) + value 타입 string 고정 */
export interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
  > {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      rows = 4,
      maxLength = 200,
      className = "",
      ...rest
    },
    ref: Ref<HTMLTextAreaElement>,
  ) => (
    <div className={clsx("cmp-input space-y-2", className)}>
      <label className="block font-sans text-sm font-medium text-[#222]">
        {label}
      </label>

      <textarea
        ref={ref}
        value={value}                               /* string 확정 */
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={clsx(
          "w-full px-4 py-3 border bg-white text-[#222] font-sans text-base",
          "placeholder-[#999] focus:outline-none transition-colors resize-none",
          "border-[#E5E5E5] focus:border-[#FF3B30]",
        )}
        {...rest}
      />

      <div className="text-right text-xs text-[#999] font-sans">
        {value.length}/{maxLength}
      </div>
    </div>
  ),
);
Textarea.displayName = "Textarea";
