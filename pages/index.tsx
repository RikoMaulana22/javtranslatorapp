import { useState } from 'react';
import { translations } from '../lib/data';
import { Translation } from '../types/Translation';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Translation | null>(null);

  const handleTranslate = () => {
    const found = translations.find(
      (t) => t["Bahasa Indonesia"].toLowerCase() === input.toLowerCase()
    );
    setResult(found || null);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
       // ganti sesuai nama file kamu
    >
      {/* Optional overlay agar teks tetap mudah dibaca */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Konten di atas background */}
      <div className="relative z-10 w-full max-w-3xl bg-white/80 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="font-javanese text-4xl md:text-5xl font-bold leading-tight">
            ꦠꦿꦤ꧀ꦱꦠꦼꦧꦃꦱꦗꦮ
          </h1>
          <hr className="border-t-2 border-yellow-600 w-56 mx-auto my-2" />
          <p className="text-sm text-gray-600">Translate Bahasa Jawa</p>
        </div>

        {/* Input and Button */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="masukan kata"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-400 rounded w-full"
          />
          <button
            onClick={handleTranslate}
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded shadow"
          >
            Translate
          </button>
        </div>

        {/* Result */}
        <div className="bg-white p-4 rounded shadow text-left">
          {result ? (
            <>
              <h2 className="font-semibold text-lg mb-2">ꦲꦱꦶꦭ꧀ ꦠꦺꦂꦗꦺꦩꦲꦤ꧀ | Hasil Terjemahan</h2>
              <p><strong>Ngoko:</strong> {result.Ngoko || '-'}</p>
              <p><strong>Krama:</strong> {result.Krama || '-'}</p>
              <p><strong>Krama Inggil:</strong> {result["Krama Inggil"] || '-'}</p>
            </>
          ) : (
            input && <p className="text-red-500">Kata tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
