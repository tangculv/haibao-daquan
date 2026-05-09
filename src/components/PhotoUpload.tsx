import { useRef, useState } from 'react'

interface Props {
  label: string
  placeholder: string
  value: File | null
  onChange: (file: File | null) => void
}

export default function PhotoUpload({ label, placeholder, value: _value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string>('')

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange(file)
      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }

  const handleClear = () => {
    onChange(null)
    setPreview('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-primary mb-2">{label}</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleSelect}
        className="hidden"
      />

      {preview ? (
        <div className="relative inline-block">
          <img src={preview} alt="preview" className="w-40 h-40 object-cover rounded-2xl" />
          <button
            onClick={handleClear}
            className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full text-xs flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full h-40 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-secondary hover:border-accent transition-colors"
        >
          <span className="text-3xl mb-2">📸</span>
          <span className="text-sm">{placeholder || '点击上传照片'}</span>
        </button>
      )}
    </div>
  )
}
