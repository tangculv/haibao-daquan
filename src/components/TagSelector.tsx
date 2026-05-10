import type { SelectOption } from '../types'

interface Props {
  label: string
  options: SelectOption[]
  value: string
  onChange: (v: string) => void
}

export default function TagSelector({ label, options, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
              value === opt.value
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-surface text-secondary border border-border-subtle hover:border-border hover:text-primary'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
