import TranslatorBox from '@/components/TranslatorBox';

export default function Home() {
  // Objek style untuk background
  const mainStyle = {
    // Referensi gambar dari folder public. Cukup gunakan '/nama-file.jpg'
    backgroundImage: `url('/wayang_kulit.jpg')`,
    backgroundSize: 'cover',       // Agar gambar menutupi seluruh area
    backgroundPosition: 'center',  // Agar gambar terpusat
    backgroundRepeat: 'no-repeat', // Agar gambar tidak berulang
  };

  return (
    // Terapkan style ke elemen <main> dan hapus bg-blue-100
    <main style={mainStyle} className="relative min-h-screen w-full p-4">
      {/* OPSIONAL TAPI SANGAT DIREKOMENDASIKAN: Tambahkan overlay 
        agar teks lebih mudah dibaca di atas gambar.
      */}
      <div className="absolute inset-0 bg-blue-100 opacity-75 z-0" />

      {/* Konten Anda sekarang harus memiliki z-index agar berada di atas overlay */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-8 text-primary">
          ꦠꦿꦤ꧀ꦱꦠꦼꦧꦃꦱꦗꦮ
        </h1>
        <h1 className="text-2xl  text-center text-orange-800 mb-8 text-primary">
          Java Translator Engine
        </h1>
        <TranslatorBox />
      </div>
    </main>
  );
}