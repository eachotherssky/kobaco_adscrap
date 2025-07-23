"use client"

interface CleanInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "url" | "email"
  required?: boolean
  maxLength?: number
  className?: string
}

export function CleanInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  maxLength,
  className = "",
}: CleanInputProps) {
  return (
    <div className={`cmp-input-simple space-y-2 ${className}`}>
      <label className="block text-body font-medium text-primary">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="input-simple"
      />
      {maxLength && (
        <div className="text-right text-metadata">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
}

interface CleanTextareaProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
  maxLength?: number
  className?: string
}

export function CleanTextarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  maxLength = 300,
  className = "",
}: CleanTextareaProps) {
  return (
    <div className={`cmp-input-simple space-y-2 ${className}`}>
      <label className="block text-body font-medium text-primary">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className="input-simple resize-none"
      />
      <div className="text-right text-metadata">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}
