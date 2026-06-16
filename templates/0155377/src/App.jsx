import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[1200px] h-[628px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">

<img alt="Hotel" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-br from-[#00bfff66] via-[#1e90ffbb] to-[#254f7dcc] z-10"></div>

<div className="absolute top-12 left-12 flex flex-col items-center z-20">
<div className="bg-[#12bf3c] border-4 border-white shadow-lg rounded-full w-40 h-40 flex flex-col items-center justify-center">
<span className="text-white text-center font-extrabold text-lg leading-tight tracking-tighter drop-shadow-lg" style={{fontFamily: 'Poppins, Arial, sans-serif'}}>
          Mobil<br/>Uygulamada<br/>Geçerli
        </span>
</div>
</div>

<div className="absolute top-12 right-16 z-20">
<div className="bg-white/90 rounded-xl px-8 py-3 shadow-md border border-black/10">
<span className="text-[#FF3300] font-black text-3xl tracking-tight" style={{fontFamily: 'Poppins, Arial, sans-serif'}}>
          16-19 Haziran'a Özel
        </span>
</div>
</div>

<div className="flex flex-col items-center justify-center h-full w-full z-30 relative">
<div className="bg-gradient-to-r from-[#FF9600] to-[#FF4D00] px-12 py-4 rounded-2xl shadow-2xl mb-8">
<h1 className="text-white text-center font-extrabold text-6xl md:text-7xl leading-tight tracking-tight drop-shadow-lg" style={{fontFamily: 'Poppins, Arial, sans-serif'}}>
          Otel'de <span className="text-yellow-300 drop-shadow-lg"> %25 İNDİRİM! </span>
</h1>
</div>
<div className="mt-4">
<span className="inline-block bg-[#12bf3c] rounded-lg px-6 py-2 text-white font-bold text-2xl drop-shadow-md" style={{fontFamily: 'Poppins, Arial, sans-serif'}}>
          KOD: HOTEL25
        </span>
</div>
<div className="mt-6 text-center text-white/90 font-medium text-xl max-w-2xl drop-shadow" style={{fontFamily: 'Poppins, Arial, sans-serif'}}>
        Fırsatı kaçırma! Otel rezervasyonlarında yalnızca bu tarihler arasında geçerlidir. Mobil uygulamada kullan.
      </div>
</div>
</div>

    </>
  );
}
