import type { FunctionConfig } from '../types'

export function buildPrompt(
  config: FunctionConfig,
  userInputs: Record<string, string>,
  ratio?: string
): string {
  let prompt = config.promptTemplate

  for (const input of config.inputs) {
    if (input.type === 'photo') continue
    const value = userInputs[input.key] || ''
    prompt = prompt.replaceAll(`{{${input.key}}}`, value)
  }

  const finalRatio = ratio || config.defaultRatio
  prompt = prompt.replaceAll('{{ratio}}', finalRatio)

  return prompt
}

const RATIO_TO_SIZE: Record<string, string> = {
  '1:1': '1024x1024',
  '3:4': '1024x1536',
  '4:3': '1536x1024',
  '9:16': '1024x1792',
  '16:9': '1792x1024',
  '2:1': '2048x1024',
  '16:10': '1792x1120',
}

export function ratioToSize(ratio: string): string {
  return RATIO_TO_SIZE[ratio] || '1024x1024'
}
