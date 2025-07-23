"use client"

interface InputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "url" | "email"
  required?: boolean
  maxLength?: number
  className?: string
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  maxLength,
  className = "",
}: InputProps) {
  return (
    <div className={`cmp-input space-y-2 ${className}`}>
      <label className="block font-sans text-sm font-medium text-[#222]">
        {label}
        {required && <span className="text-[#FF3B30] ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full px-4 py-3 border border-[#E5E5E5] bg-white text-[#222] font-sans text-base placeholder-[#999] focus:outline-none focus:border-[#FF3B30] transition-colors"
      />
      {maxLength && (
        <div className="text-right text-xs text-[#999] font-sans">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
}

interface TextareaProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
  maxLength?: number
  className?: string
}

export function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  maxLength = 200,
  className = "",
}: TextareaProps) {
  return (
    <div className={`cmp-input space-y-2 ${className}`}>
      <label className="block font-sans text-sm font-medium text-[#222]">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="w-full px-4 py-3 border border-[#E5E5E5] bg-white text-[#222] font-sans text-base placeholder-[#999] focus:outline-none focus:border-[#FF3B30] transition-colors resize-none"
      />
      <div className="text-right text-xs text-[#999] font-sans">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}
