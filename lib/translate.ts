// lib/translator.ts

import { translations } from './data'

export function translateSentence(
  input: string,
  target: keyof typeof translations[0]
): string {
  const words = input.toLowerCase().split(' ')
  const translatedWords = words.map(word => {
    const found = translations.find(item =>
      item["Bahasa Indonesia"].toLowerCase() === word
    )
    return found?.[target] || word
  })

  return translatedWords.join(' ')
}
