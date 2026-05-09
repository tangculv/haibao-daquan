interface Props {
  options: string[]
  value: string
  onChange: (v: string) => void
}

export default function RatioSelector({ options, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-primary mb-2">画面比例</label>
      <div className="flex gap-2">
        {options.map(ratio => (
          <button
            key={ratio}
            onClick={() => onChange(ratio)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              value === ratio
                ? 'bg-accent text-white'
                : 'bg-surface text-secondary border border-border'
            }`}
          >
            {ratio}
          </button>
        ))}
      </div>
    </div>
  )
}
