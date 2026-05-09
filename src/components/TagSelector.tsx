import type { SelectOption } from '../types'

interface Props {
  label: string
  options: SelectOption[]
  value: string
  onChange: (v: string) => void
}

export default function TagSelector({ label, options, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-primary mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              value === opt.value
                ? 'bg-accent text-white'
                : 'bg-surface text-secondary border border-border'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
