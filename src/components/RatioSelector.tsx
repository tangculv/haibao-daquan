interface Props {
  options: string[]
  value: string
  onChange: (v: string) => void
}

const ratioVisual: Record<string, string> = {
  '1:1': 'w-4 h-4',
  '3:4': 'w-3 h-4',
  '4:3': 'w-4 h-3',
  '9:16': 'w-2.5 h-4',
  '16:9': 'w-4 h-2.5',
  '2:1': 'w-4 h-2',
  '16:10': 'w-4 h-2.5',
}

export default function RatioSelector({ options, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary mb-2">画面比例</label>
      <div className="flex gap-2">
        {options.map(ratio => (
          <button
            key={ratio}
            onClick={() => onChange(ratio)}
            className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl text-xs transition-all duration-300 ${
              value === ratio
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-surface text-secondary border border-border-subtle hover:border-border hover:text-primary'
            }`}
          >
            <div className={`${ratioVisual[ratio] || 'w-4 h-4'} rounded-sm ${value === ratio ? 'border border-white/60' : 'border border-secondary/30'}`} />
            <span>{ratio}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
