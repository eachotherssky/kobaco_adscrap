"use client"

interface GlassInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "url" | "email"
  required?: boolean
  maxLength?: number
  className?: string
}

export function GlassInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  maxLength,
  className = "",
}: GlassInputProps) {
  return (
    <div className={`cmp-input space-y-2 ${className}`}>
      <label className="block font-sans text-sm font-semibold text-gray-800">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full px-4 py-4 glass-effect text-gray-800 font-sans text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
      {maxLength && (
        <div className="text-right text-xs text-gray-500 font-sans">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
}

interface GlassTextareaProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
  maxLength?: number
  className?: string
}

export function GlassTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  maxLength = 200,
  className = "",
}: GlassTextareaProps) {
  return (
    <div className={`cmp-input space-y-2 ${className}`}>
      <label className="block font-sans text-sm font-semibold text-gray-800">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="w-full px-4 py-4 glass-effect text-gray-800 font-sans text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
      />
      <div className="text-right text-xs text-gray-500 font-sans">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}
