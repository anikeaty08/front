import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":2,"w":1293,"h":65,"abs_x":480,"abs_y":45}' className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
<div bis_size='{"x":6,"y":2,"w":1280,"h":64,"abs_x":486,"abs_y":45}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":38,"y":2,"w":1216,"h":64,"abs_x":518,"abs_y":45}' className="flex justify-between items-center h-16">

<div bis_size='{"x":38,"y":18,"w":168,"h":32,"abs_x":518,"abs_y":61}' className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span bis_size='{"x":38,"y":18,"w":39,"h":32,"abs_x":518,"abs_y":61}' className="text-2xl font-semibold tracking-tighter text-[#114232]">AH.</span>
<div bis_size='{"x":89,"y":20,"w":117,"h":28,"abs_x":569,"abs_y":63}' className="hidden sm:flex flex-col ml-1 border-l-2 border-[#c9a961] pl-2">
<span bis_size='{"x":99,"y":20,"w":107,"h":12,"abs_x":579,"abs_y":63}' className="text-xs font-medium text-[#114232] leading-none">Asrama Haji</span>
<span bis_size='{"x":99,"y":36,"w":107,"h":12,"abs_x":579,"abs_y":79}' className="text-xs text-gray-500 leading-none mt-1">Republik Indonesia</span>
</div>
</div>

<div bis_size='{"x":496,"y":24,"w":326,"h":20,"abs_x":976,"abs_y":67}' className="hidden md:flex items-center space-x-8">
<a bis_size='{"x":496,"y":24,"w":55,"h":20,"abs_x":976,"abs_y":67}' className="text-sm font-medium text-[#114232] transition-colors" href="#">Beranda</a>
<a bis_size='{"x":584,"y":24,"w":53,"h":20,"abs_x":1064,"abs_y":67}' className="text-sm font-normal text-gray-500 hover:text-[#114232] transition-colors" href="#">Fasilitas</a>
<a bis_size='{"x":669,"y":24,"w":60,"h":20,"abs_x":1149,"abs_y":67}' className="text-sm font-normal text-gray-500 hover:text-[#114232] transition-colors" href="#">Prosedur</a>
<a bis_size='{"x":761,"y":24,"w":61,"h":20,"abs_x":1241,"abs_y":67}' className="text-sm font-normal text-gray-500 hover:text-[#114232] transition-colors" href="#">Informasi</a>
</div>

<div bis_size='{"x":1112,"y":16,"w":141,"h":36,"abs_x":1592,"abs_y":59}' className="flex items-center space-x-4">
<button bis_size='{"x":1112,"y":24,"w":44,"h":20,"abs_x":1592,"abs_y":67}' className="hidden sm:block text-sm font-medium text-[#114232] hover:text-[#c9a961] transition-colors">Masuk</button>
<button bis_size='{"x":1173,"y":16,"w":81,"h":36,"abs_x":1653,"abs_y":59}' className="hover:bg-[#b89851] transition-all text-sm font-medium text-white bg-[#c9a961] rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm">
                        Daftar
                    </button>
</div>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":1293,"h":634,"abs_x":480,"abs_y":43}' className="relative pt-32 pb-48 lg:pt-40 lg:pb-56 bg-gradient-to-br from-[#0a2e20] via-[#114232] to-[#164a39] overflow-hidden">

<div bis_size='{"x":0,"y":0,"w":1293,"h":634,"abs_x":480,"abs_y":43}' className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#c9a961 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div bis_label="style" bis_size='{"x":0,"y":0,"w":1293,"h":634,"abs_x":480,"abs_y":43}' className="bg-center bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(17, 66, 50, 0.95), rgba(17, 66, 50, 0.4)), url(\'https: //images.unsplash.com/photo-1565552643952-277a94d93547?auto=format&amp'}}></div>
<div bis_size='{"x":198,"y":160,"w":896,"h":250,"abs_x":678,"abs_y":203}' className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
<div bis_size='{"x":530,"y":160,"w":231,"h":26,"abs_x":1010,"abs_y":203}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm">
<iconify-icon bis_size='{"x":543,"y":167,"w":12,"h":12,"abs_x":1023,"abs_y":210}' icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":563,"y":165,"w":185,"h":16,"abs_x":1043,"abs_y":208}' className="">Portal Resmi Pelayanan Terpadu</span>
</div>
<h1 bis_size='{"x":230,"y":210,"w":832,"h":120,"abs_x":710,"abs_y":253}' className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight mb-6">
                Layanan Pemesanan Fasilitas <br bis_size='{"x":1046,"y":203,"w":0,"h":72,"abs_x":1526,"abs_y":246}'/> <span bis_size='{"x":361,"y":263,"w":327,"h":72,"abs_x":841,"abs_y":306}' className="text-[#c9a961]">Asrama Haji</span> Terpadu
            </h1>
<p bis_size='{"x":310,"y":354,"w":672,"h":56,"abs_x":790,"abs_y":397}' className="text-base sm:text-lg text-white/80 font-normal max-w-2xl mx-auto leading-relaxed">
                Akses mudah, transparan, dan terpercaya untuk pemesanan kamar, gedung aula, dan fasilitas manasik di seluruh embarkasi Asrama Haji Indonesia.
            </p>
</div>
</section>

<section bis_size='{"x":70,"y":522,"w":1152,"h":169,"abs_x":550,"abs_y":565}' className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 z-20 mb-24">
<div bis_size='{"x":102,"y":522,"w":1088,"h":169,"abs_x":582,"abs_y":565}' className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-2">

<div bis_size='{"x":111,"y":531,"w":1070,"h":57,"abs_x":591,"abs_y":574}' className="flex items-center gap-2 p-2 border-b border-gray-50 overflow-x-auto hide-scrollbar">
<button bis_size='{"x":119,"y":539,"w":192,"h":40,"abs_x":599,"abs_y":582}' className="flex items-center gap-2 bg-gray-50 text-[#114232] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
<iconify-icon bis_size='{"x":139,"y":550,"w":18,"h":18,"abs_x":619,"abs_y":593}' className="text-lg" icon="solar:bed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Kamar Penginapan
                </button>
<button bis_size='{"x":319,"y":539,"w":160,"h":40,"abs_x":799,"abs_y":582}' className="flex items-center gap-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-5 py-2.5 rounded-xl text-sm font-normal transition-colors whitespace-nowrap">
<iconify-icon bis_size='{"x":339,"y":550,"w":18,"h":18,"abs_x":819,"abs_y":593}' className="text-lg" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Gedung / Aula
                </button>
<button bis_size='{"x":488,"y":539,"w":178,"h":40,"abs_x":968,"abs_y":582}' className="flex items-center gap-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-5 py-2.5 rounded-xl text-sm font-normal transition-colors whitespace-nowrap">
<iconify-icon bis_size='{"x":508,"y":550,"w":18,"h":18,"abs_x":988,"abs_y":593}' className="text-lg" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Fasilitas Manasik
                </button>
</div>

<div bis_size='{"x":111,"y":588,"w":1070,"h":94,"abs_x":591,"abs_y":631}' className="flex flex-col lg:flex-row gap-3 p-3">

<div bis_size='{"x":123,"y":600,"w":296,"h":70,"abs_x":603,"abs_y":643}' className="flex-1 flex items-center gap-4 p-3.5 rounded-xl border border-gray-200 hover:border-[#c9a961]/50 focus-within:border-[#c9a961] focus-within:ring-2 focus-within:ring-[#c9a961]/10 transition-all bg-white cursor-text">
<div bis_size='{"x":138,"y":615,"w":40,"h":40,"abs_x":618,"abs_y":658}' className="w-10 h-10 rounded-lg bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon bis_size='{"x":148,"y":625,"w":20,"h":20,"abs_x":628,"abs_y":668}' className="text-[#c9a961] text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div bis_size='{"x":194,"y":616,"w":210,"h":38,"abs_x":674,"abs_y":659}' className="flex flex-col w-full">
<label bis_size='{"x":194,"y":616,"w":210,"h":16,"abs_x":674,"abs_y":659}' className="text-xs text-gray-500 font-normal mb-0.5">Lokasi Asrama</label>
<input bis_size='{"x":194,"y":634,"w":210,"h":20,"abs_x":674,"abs_y":677}' className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none placeholder:font-normal placeholder:text-gray-400" placeholder="Pilih kota atau embarkasi..." type="text"/>
</div>
</div>

<div bis_size='{"x":431,"y":600,"w":296,"h":70,"abs_x":911,"abs_y":643}' className="flex-1 flex items-center gap-4 p-3.5 rounded-xl border border-gray-200 hover:border-[#c9a961]/50 focus-within:border-[#c9a961] focus-within:ring-2 focus-within:ring-[#c9a961]/10 transition-all bg-white cursor-text">
<div bis_size='{"x":446,"y":615,"w":40,"h":40,"abs_x":926,"abs_y":658}' className="w-10 h-10 rounded-lg bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon bis_size='{"x":456,"y":625,"w":20,"h":20,"abs_x":936,"abs_y":668}' className="text-[#c9a961] text-xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div bis_size='{"x":502,"y":616,"w":210,"h":38,"abs_x":982,"abs_y":659}' className="flex flex-col w-full">
<label bis_size='{"x":502,"y":616,"w":210,"h":16,"abs_x":982,"abs_y":659}' className="text-xs text-gray-500 font-normal mb-0.5">Check-in &amp; Check-out</label>
<input bis_size='{"x":502,"y":634,"w":210,"h":20,"abs_x":982,"abs_y":677}' className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none placeholder:font-normal placeholder:text-gray-400" placeholder="Tambah tanggal" type="text"/>
</div>
</div>

<div bis_size='{"x":740,"y":600,"w":296,"h":70,"abs_x":1220,"abs_y":643}' className="flex-1 flex items-center gap-4 p-3.5 rounded-xl border border-gray-200 hover:border-[#c9a961]/50 focus-within:border-[#c9a961] focus-within:ring-2 focus-within:ring-[#c9a961]/10 transition-all bg-white cursor-text">
<div bis_size='{"x":755,"y":615,"w":40,"h":40,"abs_x":1235,"abs_y":658}' className="w-10 h-10 rounded-lg bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon bis_size='{"x":765,"y":625,"w":20,"h":20,"abs_x":1245,"abs_y":668}' className="text-[#c9a961] text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div bis_size='{"x":811,"y":616,"w":210,"h":38,"abs_x":1291,"abs_y":659}' className="flex flex-col w-full">
<label bis_size='{"x":811,"y":616,"w":210,"h":16,"abs_x":1291,"abs_y":659}' className="text-xs text-gray-500 font-normal mb-0.5">Tamu &amp; Kamar</label>
<input bis_size='{"x":811,"y":634,"w":210,"h":20,"abs_x":1291,"abs_y":677}' className="w-full text-sm font-medium text-gray-900 bg-transparent outline-none placeholder:font-normal placeholder:text-gray-400" placeholder="1 Tamu, 1 Kamar" type="text"/>
</div>
</div>

<button bis_size='{"x":1048,"y":600,"w":121,"h":70,"abs_x":1528,"abs_y":643}' className="hover:bg-[#b89851] lg:py-0 transition-colors flex gap-2 shadow-[#c9a961]/20 font-medium text-white bg-[#c9a961] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-md gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon bis_size='{"x":1080,"y":626,"w":18,"h":18,"abs_x":1560,"abs_y":669}' className="text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Cari
                </button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":787,"w":1293,"h":686,"abs_x":480,"abs_y":830}' className="py-16 bg-gray-50">
<div bis_size='{"x":6,"y":851,"w":1280,"h":558,"abs_x":486,"abs_y":894}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":38,"y":851,"w":1216,"h":92,"abs_x":518,"abs_y":894}' className="text-center mb-16">
<h2 bis_size='{"x":38,"y":851,"w":1216,"h":36,"abs_x":518,"abs_y":894}' className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Fasilitas &amp; Layanan Kami</h2>
<p bis_size='{"x":310,"y":903,"w":672,"h":40,"abs_x":790,"abs_y":946}' className="text-sm text-gray-500 max-w-2xl mx-auto font-normal">Menyediakan berbagai sarana prasarana standar pelayanan minimum untuk mendukung kegiatan umat dengan kualitas terbaik dan terjaga.</p>
</div>
<div bis_size='{"x":38,"y":1007,"w":1216,"h":402,"abs_x":518,"abs_y":1050}' className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div bis_size='{"x":38,"y":1007,"w":384,"h":402,"abs_x":518,"abs_y":1050}' className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
<div bis_size='{"x":39,"y":1008,"w":382,"h":192,"abs_x":519,"abs_y":1051}' className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
<div bis_size='{"x":39,"y":1008,"w":382,"h":192,"abs_x":519,"abs_y":1051}' className="absolute inset-0 bg-[#114232]/5 group-hover:bg-[#114232]/0 transition-colors"></div>
<iconify-icon bis_size='{"x":200,"y":1074,"w":60,"h":60,"abs_x":680,"abs_y":1117}' className="text-6xl text-gray-300" icon="solar:bed-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<div bis_size='{"x":39,"y":1200,"w":382,"h":208,"abs_x":519,"abs_y":1243}' className="p-6">
<div bis_size='{"x":63,"y":1224,"w":334,"h":28,"abs_x":543,"abs_y":1267}' className="flex justify-between items-start mb-4">
<h3 bis_size='{"x":63,"y":1224,"w":162,"h":28,"abs_x":543,"abs_y":1267}' className="text-lg font-medium text-gray-900">Kamar Penginapan</h3>
</div>
<p bis_size='{"x":63,"y":1268,"w":334,"h":68,"abs_x":543,"abs_y":1311}' className="text-sm text-gray-500 font-normal mb-6 leading-relaxed">Fasilitas kamar yang bersih, nyaman, dan representatif. Tersedia berbagai tipe kamar untuk perorangan maupun rombongan.</p>
<a bis_size='{"x":63,"y":1362,"w":92,"h":20,"abs_x":543,"abs_y":1405}' className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a961] hover:text-[#b89851] transition-colors" href="#">
                            Lihat Detail
                            <iconify-icon bis_size='{"x":141,"y":1365,"w":14,"h":14,"abs_x":621,"abs_y":1408}' icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div bis_size='{"x":454,"y":1007,"w":384,"h":402,"abs_x":934,"abs_y":1050}' className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
<div bis_size='{"x":455,"y":1008,"w":382,"h":192,"abs_x":935,"abs_y":1051}' className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
<div bis_size='{"x":455,"y":1008,"w":382,"h":192,"abs_x":935,"abs_y":1051}' className="absolute inset-0 bg-[#114232]/5 group-hover:bg-[#114232]/0 transition-colors"></div>
<iconify-icon bis_size='{"x":616,"y":1074,"w":60,"h":60,"abs_x":1096,"abs_y":1117}' className="text-6xl text-gray-300" icon="solar:buildings-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<div bis_size='{"x":455,"y":1200,"w":382,"h":208,"abs_x":935,"abs_y":1243}' className="p-6">
<div bis_size='{"x":479,"y":1224,"w":334,"h":28,"abs_x":959,"abs_y":1267}' className="flex justify-between items-start mb-4">
<h3 bis_size='{"x":479,"y":1224,"w":226,"h":28,"abs_x":959,"abs_y":1267}' className="text-lg font-medium text-gray-900">Gedung Serbaguna &amp; Aula</h3>
</div>
<p bis_size='{"x":479,"y":1268,"w":334,"h":68,"abs_x":959,"abs_y":1311}' className="text-sm text-gray-500 font-normal mb-6 leading-relaxed">Ruangan luas dengan fasilitas audio visual lengkap. Cocok untuk seminar, rapat kerja, pernikahan, atau acara besar lainnya.</p>
<a bis_size='{"x":479,"y":1362,"w":92,"h":20,"abs_x":959,"abs_y":1405}' className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a961] hover:text-[#b89851] transition-colors" href="#">
                            Lihat Detail
                            <iconify-icon bis_size='{"x":557,"y":1365,"w":14,"h":14,"abs_x":1037,"abs_y":1408}' icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div bis_size='{"x":870,"y":1007,"w":384,"h":402,"abs_x":1350,"abs_y":1050}' className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
<div bis_size='{"x":871,"y":1008,"w":382,"h":192,"abs_x":1351,"abs_y":1051}' className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
<div bis_size='{"x":871,"y":1008,"w":382,"h":192,"abs_x":1351,"abs_y":1051}' className="absolute inset-0 bg-[#114232]/5 group-hover:bg-[#114232]/0 transition-colors"></div>
<iconify-icon bis_size='{"x":1032,"y":1074,"w":60,"h":60,"abs_x":1512,"abs_y":1117}' className="text-6xl text-gray-300" icon="solar:book-bookmark-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<div bis_size='{"x":871,"y":1200,"w":382,"h":208,"abs_x":1351,"abs_y":1243}' className="p-6">
<div bis_size='{"x":895,"y":1224,"w":334,"h":28,"abs_x":1375,"abs_y":1267}' className="flex justify-between items-start mb-4">
<h3 bis_size='{"x":895,"y":1224,"w":223,"h":28,"abs_x":1375,"abs_y":1267}' className="text-lg font-medium text-gray-900">Fasilitas Manasik Terpadu</h3>
</div>
<p bis_size='{"x":895,"y":1268,"w":334,"h":68,"abs_x":1375,"abs_y":1311}' className="text-sm text-gray-500 font-normal mb-6 leading-relaxed">Area simulasi ibadah haji dan umrah yang dirancang menyerupai kondisi asli, dilengkapi dengan miniatur Ka'bah dan lintasan Sa'i.</p>
<a bis_size='{"x":895,"y":1362,"w":92,"h":20,"abs_x":1375,"abs_y":1405}' className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a961] hover:text-[#b89851] transition-colors" href="#">
                            Lihat Detail
                            <iconify-icon bis_size='{"x":973,"y":1365,"w":14,"h":14,"abs_x":1453,"abs_y":1408}' icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1473,"w":1293,"h":496,"abs_x":480,"abs_y":1516}' className="py-24 bg-white border-y border-gray-100">
<div bis_size='{"x":6,"y":1570,"w":1280,"h":302,"abs_x":486,"abs_y":1613}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":38,"y":1570,"w":1216,"h":72,"abs_x":518,"abs_y":1613}' className="text-center mb-16">
<h2 bis_size='{"x":38,"y":1570,"w":1216,"h":36,"abs_x":518,"abs_y":1613}' className="text-3xl font-medium tracking-tight text-[#114232] mb-4">Mengapa Memilih Layanan Kami?</h2>
<p bis_size='{"x":38,"y":1622,"w":1216,"h":20,"abs_x":518,"abs_y":1665}' className="text-sm text-gray-500 font-normal">Layanan resmi yang dikelola secara profesional untuk kenyamanan Anda.</p>
</div>
<div bis_size='{"x":38,"y":1706,"w":1216,"h":166,"abs_x":518,"abs_y":1749}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div bis_size='{"x":38,"y":1706,"w":274,"h":166,"abs_x":518,"abs_y":1749}' className="flex flex-col items-center text-center">
<div bis_size='{"x":147,"y":1706,"w":56,"h":56,"abs_x":627,"abs_y":1749}' className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 flex items-center justify-center mb-5 border border-[#c9a961]/20">
<iconify-icon bis_size='{"x":163,"y":1722,"w":24,"h":24,"abs_x":643,"abs_y":1765}' className="text-2xl text-[#c9a961]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 bis_size='{"x":99,"y":1782,"w":151,"h":24,"abs_x":579,"abs_y":1825}' className="text-base font-medium text-gray-900 mb-2">Resmi &amp; Terpercaya</h4>
<p bis_size='{"x":38,"y":1814,"w":274,"h":58,"abs_x":518,"abs_y":1857}' className="text-xs text-gray-500 font-normal leading-relaxed">Dikelola langsung di bawah pengawasan kementerian terkait, menjamin legalitas dan keamanan.</p>
</div>
<div bis_size='{"x":352,"y":1706,"w":274,"h":166,"abs_x":832,"abs_y":1749}' className="flex flex-col items-center text-center">
<div bis_size='{"x":461,"y":1706,"w":56,"h":56,"abs_x":941,"abs_y":1749}' className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 flex items-center justify-center mb-5 border border-[#c9a961]/20">
<iconify-icon bis_size='{"x":477,"y":1722,"w":24,"h":24,"abs_x":957,"abs_y":1765}' className="text-2xl text-[#c9a961]" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 bis_size='{"x":426,"y":1782,"w":125,"h":24,"abs_x":906,"abs_y":1825}' className="text-base font-medium text-gray-900 mb-2">Tarif Transparan</h4>
<p bis_size='{"x":352,"y":1814,"w":274,"h":58,"abs_x":832,"abs_y":1857}' className="text-xs text-gray-500 font-normal leading-relaxed">Penerimaan Negara Bukan Pajak (PNBP) dengan tarif resmi yang ditetapkan oleh regulasi pemerintah.</p>
</div>
<div bis_size='{"x":666,"y":1706,"w":274,"h":166,"abs_x":1146,"abs_y":1749}' className="flex flex-col items-center text-center">
<div bis_size='{"x":775,"y":1706,"w":56,"h":56,"abs_x":1255,"abs_y":1749}' className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 flex items-center justify-center mb-5 border border-[#c9a961]/20">
<iconify-icon bis_size='{"x":791,"y":1722,"w":24,"h":24,"abs_x":1271,"abs_y":1765}' className="text-2xl text-[#c9a961]" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 bis_size='{"x":742,"y":1782,"w":121,"h":24,"abs_x":1222,"abs_y":1825}' className="text-base font-medium text-gray-900 mb-2">Lokasi Strategis</h4>
<p bis_size='{"x":666,"y":1814,"w":274,"h":58,"abs_x":1146,"abs_y":1857}' className="text-xs text-gray-500 font-normal leading-relaxed">Tersebar di berbagai provinsi di Indonesia, umumnya dekat dengan fasilitas publik dan bandara.</p>
</div>
<div bis_size='{"x":980,"y":1706,"w":274,"h":166,"abs_x":1460,"abs_y":1749}' className="flex flex-col items-center text-center">
<div bis_size='{"x":1089,"y":1706,"w":56,"h":56,"abs_x":1569,"abs_y":1749}' className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 flex items-center justify-center mb-5 border border-[#c9a961]/20">
<iconify-icon bis_size='{"x":1105,"y":1722,"w":24,"h":24,"abs_x":1585,"abs_y":1765}' className="text-2xl text-[#c9a961]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 bis_size='{"x":1066,"y":1782,"w":102,"h":24,"abs_x":1546,"abs_y":1825}' className="text-base font-medium text-gray-900 mb-2">Proses Cepat</h4>
<p bis_size='{"x":980,"y":1814,"w":274,"h":58,"abs_x":1460,"abs_y":1857}' className="text-xs text-gray-500 font-normal leading-relaxed">Sistem pemesanan online terintegrasi memudahkan Anda mengecek ketersediaan dan melakukan reservasi.</p>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":1969,"w":1293,"h":370,"abs_x":480,"abs_y":2012}' className="bg-[#c9a961] border-gray-200 border-t pt-16 pb-8">
<div bis_size='{"x":6,"y":2034,"w":1280,"h":273,"abs_x":486,"abs_y":2077}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":38,"y":2034,"w":1216,"h":168,"abs_x":518,"abs_y":2077}' className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div bis_size='{"x":38,"y":2034,"w":268,"h":168,"abs_x":518,"abs_y":2077}' className="md:col-span-1">
<div bis_size='{"x":38,"y":2034,"w":268,"h":28,"abs_x":518,"abs_y":2077}' className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<span bis_size='{"x":38,"y":2034,"w":32,"h":28,"abs_x":518,"abs_y":2077}' className="text-xl font-semibold tracking-tighter text-[#114232]">AH.</span>
</div>
<p bis_size='{"x":38,"y":2078,"w":268,"h":78,"abs_x":518,"abs_y":2121}' className="leading-relaxed text-xs font-normal text-white mb-6">
                        Sistem Informasi Pelayanan Fasilitas Asrama Haji Terpadu. Memudahkan masyarakat dalam mengakses fasilitas negara secara transparan dan akuntabel.
                    </p>
</div>
<div bis_size='{"x":354,"y":2034,"w":268,"h":168,"abs_x":834,"abs_y":2077}' className="">
<h4 bis_size='{"x":354,"y":2034,"w":268,"h":20,"abs_x":834,"abs_y":2077}' className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Layanan</h4>
<ul bis_size='{"x":354,"y":2070,"w":268,"h":132,"abs_x":834,"abs_y":2113}' className="space-y-3">
<li bis_size='{"x":354,"y":2070,"w":268,"h":24,"abs_x":834,"abs_y":2113}' className=""><a bis_size='{"x":354,"y":2076,"w":106,"h":14,"abs_x":834,"abs_y":2119}' className="hover:text-opacity-80 transition-colors text-xs text-white" href="#">Pemesanan Kamar</a></li>
<li bis_size='{"x":354,"y":2106,"w":268,"h":24,"abs_x":834,"abs_y":2149}' className=""><a bis_size='{"x":354,"y":2112,"w":115,"h":14,"abs_x":834,"abs_y":2155}' className="hover:text-opacity-80 transition-colors text-xs text-white" href="#">Sewa Gedung / Aula</a></li>
<li bis_size='{"x":354,"y":2142,"w":268,"h":24,"abs_x":834,"abs_y":2185}' className=""><a bis_size='{"x":354,"y":2148,"w":96,"h":14,"abs_x":834,"abs_y":2191}' className="hover:text-[#c9a961] transition-colors text-xs text-gray-500 hover:text-opacity-80 text-white" href="#">Fasilitas Manasik</a></li>
<li bis_size='{"x":354,"y":2178,"w":268,"h":24,"abs_x":834,"abs_y":2221}' className=""><a bis_size='{"x":354,"y":2184,"w":99,"h":14,"abs_x":834,"abs_y":2227}' className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors -multi hover:text-opacity-80 text-white" href="#">Cek Ketersediaan</a></li>
</ul>
</div>
<div bis_size='{"x":670,"y":2034,"w":268,"h":168,"abs_x":1150,"abs_y":2077}' className="">
<h4 bis_size='{"x":670,"y":2034,"w":268,"h":20,"abs_x":1150,"abs_y":2077}' className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Informasi</h4>
<ul bis_size='{"x":670,"y":2070,"w":268,"h":132,"abs_x":1150,"abs_y":2113}' className="space-y-3">
<li bis_size='{"x":670,"y":2070,"w":268,"h":24,"abs_x":1150,"abs_y":2113}' className=""><a bis_size='{"x":670,"y":2076,"w":120,"h":14,"abs_x":1150,"abs_y":2119}' className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors hover:text-opacity-80 text-white" href="#">Prosedur Pemesanan</a></li>
<li bis_size='{"x":670,"y":2106,"w":268,"h":24,"abs_x":1150,"abs_y":2149}' className=""><a bis_size='{"x":670,"y":2112,"w":107,"h":14,"abs_x":1150,"abs_y":2155}' className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors hover:text-opacity-80 text-white" href="#">Daftar Tarif (PNBP)</a></li>
<li bis_size='{"x":670,"y":2142,"w":268,"h":24,"abs_x":1150,"abs_y":2185}' className=""><a bis_size='{"x":670,"y":2148,"w":108,"h":14,"abs_x":1150,"abs_y":2191}' className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors hover:text-opacity-80 text-white" href="#">Syarat &amp; Ketentuan</a></li>
<li bis_size='{"x":670,"y":2178,"w":268,"h":24,"abs_x":1150,"abs_y":2221}' className=""><a bis_size='{"x":670,"y":2184,"w":23,"h":14,"abs_x":1150,"abs_y":2227}' className="text-xs text-gray-500 hover:text-[#c9a961] transition-colors hover:text-opacity-80 text-white" href="#">FAQ</a></li>
</ul>
</div>
<div bis_size='{"x":986,"y":2034,"w":268,"h":168,"abs_x":1466,"abs_y":2077}' className="">
<h4 bis_size='{"x":986,"y":2034,"w":268,"h":20,"abs_x":1466,"abs_y":2077}' className="text-sm font-medium text-gray-900 tracking-tight mb-4">Bantuan</h4>
<ul bis_size='{"x":986,"y":2070,"w":268,"h":95,"abs_x":1466,"abs_y":2113}' className="space-y-3">
<li bis_size='{"x":986,"y":2070,"w":268,"h":16,"abs_x":1466,"abs_y":2113}' className="flex text-xs text-white gap-x-2 gap-y-2 items-center">
<iconify-icon bis_size='{"x":986,"y":2072,"w":12,"h":12,"abs_x":1466,"abs_y":2115}' className="" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":1006,"y":2070,"w":131,"h":16,"abs_x":1486,"abs_y":2113}' className="">1500-XXX (Call Center)</span>
</li>
<li bis_size='{"x":986,"y":2098,"w":268,"h":16,"abs_x":1466,"abs_y":2141}' className="flex text-xs text-white gap-x-2 gap-y-2 items-center">
<iconify-icon bis_size='{"x":986,"y":2100,"w":12,"h":12,"abs_x":1466,"abs_y":2143}' icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":1006,"y":2098,"w":84,"h":16,"abs_x":1486,"abs_y":2141}' className="">info@haji.go.id</span>
</li>
<li bis_size='{"x":986,"y":2126,"w":268,"h":39,"abs_x":1466,"abs_y":2169}' className="flex text-xs text-white mt-2 gap-x-2 gap-y-2 items-start">
<iconify-icon bis_size='{"x":986,"y":2128,"w":12,"h":12,"abs_x":1466,"abs_y":2171}' className="mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":1006,"y":2126,"w":248,"h":39,"abs_x":1486,"abs_y":2169}' className="leading-relaxed">Gedung Kementerian, Jl. Lapangan Banteng Barat No.3-4, Jakarta Pusat</span>
</li>
</ul>
</div>
</div>
<div bis_size='{"x":38,"y":2250,"w":1216,"h":57,"abs_x":518,"abs_y":2293}' className="flex flex-col md:flex-row border-gray-200 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p bis_size='{"x":38,"y":2287,"w":338,"h":16,"abs_x":518,"abs_y":2330}' className="text-xs font-normal text-white">
                    © 2023 Asrama Haji. Hak Cipta Dilindungi Undang-Undang.
                </p>
<div bis_size='{"x":1110,"y":2283,"w":144,"h":24,"abs_x":1590,"abs_y":2326}' className="flex space-x-4 items-center">
<a bis_size='{"x":1110,"y":2283,"w":37,"h":24,"abs_x":1590,"abs_y":2326}' className="text-white hover:text-opacity-80 transition-colors" href="#">
<span bis_size='{"x":1110,"y":2289,"w":37,"h":14,"abs_x":1590,"abs_y":2332}' className="text-xs font-normal">Privasi</span>
</a>
<span bis_size='{"x":1163,"y":2287,"w":3,"h":16,"abs_x":1643,"abs_y":2330}' className="text-white text-xs">|</span>
<a bis_size='{"x":1183,"y":2283,"w":70,"h":24,"abs_x":1663,"abs_y":2326}' className="text-white hover:text-opacity-80 transition-colors" href="#">
<span bis_size='{"x":1183,"y":2289,"w":70,"h":14,"abs_x":1663,"abs_y":2332}' className="text-xs font-normal">Aksesibilitas</span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
