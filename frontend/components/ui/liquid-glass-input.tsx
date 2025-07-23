"use client"

interface LiquidGlassInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "url" | "email"
  required?: boolean
  maxLength?: number
  className?: string
}

export function LiquidGlassInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  maxLength,
  className = "",
}: LiquidGlassInputProps) {
  return (
    <div className={`cmp-input-glass space-y-3 ${className}`}>
      <label className="block text-body font-interface font-semibold text-black">
        {label}
        {required && <span className="text-system-blue ml-2">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="glass-input"
      />
      {maxLength && (
        <div className="text-right text-metadata">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
}

interface LiquidGlassTextareaProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
  maxLength?: number
  className?: string
}

export function LiquidGlassTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
  maxLength = 400,
  className = "",
}: LiquidGlassTextareaProps) {
  return (
    <div className={`cmp-input-glass space-y-3 ${className}`}>
      <label className="block text-body font-interface font-semibold text-black">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="glass-input resize-none"
      />
      <div className="text-right text-metadata">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}
