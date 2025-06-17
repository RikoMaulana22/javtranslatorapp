'use client'

import { useState } from 'react'
import { translateSentence } from '@/lib/translate'

export default function TranslatorBox() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [targetLang, setTargetLang] = useState<'Ngoko' | 'Krama' | 'Krama Inggil'>('Ngoko')

  const handleTranslate = () => {
    const result = translateSentence(input, targetLang)
    setOutput(result)
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 space-y-4 p-4 bg-gray-400 rounded-xl shadow-lg ">
      <select
        className="select text-black font-bold bg-blue-300 select-bordered border-1 w-full rounded-lg p-2"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value as any)}
      >
        <option value="Ngoko">Ngoko</option>
        <option value="Krama">Krama</option>
        <option value="Krama Inggil">Krama Inggil</option>
      </select>

      <textarea
        className=" textarea  text-gray-500 bg-blue-200  textarea-bordered border-2 border-blue-200 w-full h-32 rounded-lg p-2"
        placeholder="Tulis kalimat Bahasa Indonesia..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button className="btn bg-yellow-200 text-orange-800 w-full font-bold border-1 rounded-lg p-2" onClick={handleTranslate}>
        Translate
      </button>

      <textarea
        className="textarea  bg-gray-400 textarea-bordered w-full h-32 rounded-lg p-2"
        placeholder="Hasil terjemahan..."
        value={output}
        readOnly
      ></textarea>
    </div>
  )
}
