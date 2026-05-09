export interface FunctionConfig {
  id: string
  name: string
  description: string
  category: 'text' | 'photo' | 'pro'
  inputs: InputField[]
  defaultRatio: string
  canCustomizeRatio: boolean
  ratioOptions?: string[]
  estimatedSeconds: number
  requiresImage: boolean
  promptTemplate: string
}

export interface InputField {
  key: string
  type: 'text' | 'textarea' | 'photo' | 'select'
  label: string
  placeholder: string
  required: boolean
  options?: SelectOption[]
}

export interface SelectOption {
  value: string
  label: string
}

export interface GenerationResult {
  id: string
  functionId: string
  functionName: string
  imageUrl: string
  inputs: Record<string, string>
  createdAt: number
}
