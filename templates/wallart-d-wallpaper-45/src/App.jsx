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
      

<nav bis_size='{"x":0,"y":1400,"w":1048,"h":64,"abs_x":480,"abs_y":1442}' className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/50 transition-all duration-300">
<div bis_size='{"x":0,"y":1400,"w":1048,"h":64,"abs_x":480,"abs_y":1442}' className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_label="style" bis_size='{"x":24,"y":1410,"w":120,"h":44,"abs_x":504,"abs_y":1452}' className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fd8208f-4108-485f-b1b2-69c2855a997d_320w.png)] bg-cover bg-center gap-x-2 gap-y-2 items-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fd8208f-4108-485f-b1b2-69c2855a997d_320w.png\')'}}>
<div bis_label="style" bis_size='{"x":44,"y":1410,"w":80,"h":44,"abs_x":524,"abs_y":1452}' className="flex bg-center text-white bg-gray-900 w-20 h-11 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13c74361-8fc9-4f2b-a6dd-c573151344b5_800w.png)] max-w-xs max-h-full bg-cover rounded-lg mr-5 ml-5 items-center justify-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13c74361-8fc9-4f2b-a6dd-c573151344b5_800w.png\')'}}>
<svg bis_size='{"x":75,"y":1423,"w":18,"h":18,"abs_x":555,"abs_y":1465}' className="w-[18px] h-[18px]" data-icon-set="lucide" data-lucide="layers" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":76,"y":1425,"w":15,"h":14,"abs_x":556,"abs_y":1467}' className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":76,"y":1425,"w":15,"h":7,"abs_x":556,"abs_y":1467}' d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path bis_size='{"x":76,"y":1432,"w":15,"h":3,"abs_x":556,"abs_y":1474}' d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path bis_size='{"x":76,"y":1436,"w":15,"h":3,"abs_x":556,"abs_y":1478}' d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
</div>
<div bis_size='{"x":393,"y":1422,"w":221,"h":20,"abs_x":873,"abs_y":1464}' className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a bis_size='{"x":393,"y":1422,"w":38,"h":20,"abs_x":873,"abs_y":1464}' className="hover:text-gray-900 transition-colors" href="#about">O nas</a>
<a bis_size='{"x":464,"y":1422,"w":67,"h":20,"abs_x":944,"abs_y":1464}' className="hover:text-gray-900 transition-colors" href="#gallery">Realizacje</a>
<a bis_size='{"x":564,"y":1422,"w":51,"h":20,"abs_x":1044,"abs_y":1464}' className="hover:text-gray-900 transition-colors" href="#contact">Kontakt</a>
</div>
<a bis_size='{"x":865,"y":1416,"w":158,"h":32,"abs_x":1345,"abs_y":1458}' className="hidden md:flex items-center gap-2 hover:bg-black transition-all hover:shadow-md transform hover:-translate-y-0.5 text-xs font-medium text-white bg-gray-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="/#contact">
<span bis_size='{"x":881,"y":1424,"w":104,"h":16,"abs_x":1361,"abs_y":1466}' className="">Darmowa Wycena</span>
<iconify-icon bis_size='{"x":994,"y":1425,"w":14,"h":14,"abs_x":1474,"abs_y":1467}' icon="lucide:arrow-right" width="14"></iconify-icon>
</a>

<button bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}' className="md:hidden text-gray-500">
<iconify-icon bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}' icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1048,"h":752,"abs_x":480,"abs_y":42}' className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div bis_size='{"x":0,"y":0,"w":1048,"h":752,"abs_x":480,"abs_y":42}' className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>

<div bis_label="style" bis_size='{"x":0,"y":0,"w":1048,"h":752,"abs_x":480,"abs_y":42}' className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>
<div bis_size='{"x":140,"y":192,"w":768,"h":432,"abs_x":620,"abs_y":234}' className="max-w-3xl mx-auto text-center">
<div bis_size='{"x":396,"y":192,"w":254,"h":26,"abs_x":876,"abs_y":234}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
<span bis_size='{"x":409,"y":201,"w":8,"h":8,"abs_x":889,"abs_y":243}' className="relative flex h-2 w-2">
<span bis_size='{"x":409,"y":201,"w":8,"h":8,"abs_x":889,"abs_y":243}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span bis_size='{"x":409,"y":201,"w":8,"h":8,"abs_x":889,"abs_y":243}' className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span bis_size='{"x":425,"y":197,"w":213,"h":16,"abs_x":905,"abs_y":239}' className="text-[11px] font-medium text-gray-600 uppercase tracking-wide">Dostępne terminy na ten miesiąc</span>
</div>
<h1 bis_size='{"x":140,"y":242,"w":768,"h":120,"abs_x":620,"abs_y":284}' className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Perfekcyjne ściany.<br bis_size='{"x":788,"y":236,"w":0,"h":72,"abs_x":1268,"abs_y":278}'/>
<span bis_size='{"x":221,"y":296,"w":605,"h":72,"abs_x":701,"abs_y":338}' className="text-gray-400">Montaż tapet w Łodzi.</span>
</h1>
<p bis_size='{"x":236,"y":386,"w":576,"h":87,"abs_x":716,"abs_y":428}' className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
                Specjalizujemy się w profesjonalnym kładzeniu tapet, fototapet i okładzin ściennych. Przekształcamy wnętrza z chirurgiczną precyzją, dbając o każdy milimetr wzoru.
            </p>
<div bis_size='{"x":140,"y":514,"w":768,"h":45,"abs_x":620,"abs_y":556}' className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a bis_size='{"x":294,"y":515,"w":259,"h":44,"abs_x":774,"abs_y":557}' className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition-all shadow-lg shadow-gray-200 flex items-center justify-center gap-2" href="#contact">
<iconify-icon bis_size='{"x":326,"y":529,"w":16,"h":16,"abs_x":806,"abs_y":571}' icon="lucide:ruler" width="16"></iconify-icon>
                    Zamów darmową wycenę
                </a>
<a bis_size='{"x":570,"y":514,"w":183,"h":45,"abs_x":1050,"abs_y":556}' className="sm:w-auto hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-gray-700 bg-white w-full border-gray-200 border rounded-lg pt-3 pr-8 pb-3 pl-8" href="#gallery">
                    Zobacz realizacje
                </a>
</div>
<div bis_size='{"x":140,"y":608,"w":768,"h":16,"abs_x":620,"abs_y":650}' className="mt-12 flex items-center justify-center gap-8 text-gray-400 grayscale opacity-60">

<div bis_size='{"x":320,"y":608,"w":67,"h":16,"abs_x":800,"abs_y":650}' className="flex items-center gap-2 text-xs">
<iconify-icon bis_size='{"x":320,"y":609,"w":14,"h":14,"abs_x":800,"abs_y":651}' icon="lucide:check-circle" width="14"></iconify-icon>
<span bis_size='{"x":342,"y":608,"w":45,"h":16,"abs_x":822,"abs_y":650}'>Vescom</span>
</div>
<div bis_size='{"x":420,"y":608,"w":69,"h":16,"abs_x":900,"abs_y":650}' className="flex items-center gap-2 text-xs">
<iconify-icon bis_size='{"x":420,"y":609,"w":14,"h":14,"abs_x":900,"abs_y":651}' icon="lucide:check-circle" width="14"></iconify-icon>
<span bis_size='{"x":442,"y":608,"w":47,"h":16,"abs_x":922,"abs_y":650}'>Glamora</span>
</div>
<div bis_size='{"x":521,"y":608,"w":84,"h":16,"abs_x":1001,"abs_y":650}' className="flex items-center gap-2 text-xs">
<iconify-icon bis_size='{"x":521,"y":609,"w":14,"h":14,"abs_x":1001,"abs_y":651}' icon="lucide:check-circle" width="14"></iconify-icon>
<span bis_size='{"x":543,"y":608,"w":62,"h":16,"abs_x":1023,"abs_y":650}' className="">Cole &amp; Son</span>
</div>
<div bis_size='{"x":638,"y":608,"w":88,"h":16,"abs_x":1118,"abs_y":650}' className="flex items-center gap-2 text-xs">
<iconify-icon bis_size='{"x":638,"y":609,"w":14,"h":14,"abs_x":1118,"abs_y":651}' icon="lucide:check-circle" width="14"></iconify-icon>
<span bis_size='{"x":660,"y":608,"w":66,"h":16,"abs_x":1140,"abs_y":650}'>Wonderwall</span>
</div>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":752,"w":1048,"h":746,"abs_x":480,"abs_y":794}' className="py-20 bg-gray-50 border-y border-gray-200" id="about">
<div bis_size='{"x":0,"y":832,"w":1048,"h":585,"abs_x":480,"abs_y":874}' className="max-w-6xl mx-auto px-6">
<div bis_size='{"x":24,"y":832,"w":1000,"h":585,"abs_x":504,"abs_y":874}' className="flex flex-col md:flex-row gap-16 items-start">
<div bis_size='{"x":24,"y":832,"w":468,"h":425,"abs_x":504,"abs_y":874}' className="md:w-1/2">
<h2 bis_size='{"x":24,"y":832,"w":468,"h":64,"abs_x":504,"abs_y":874}' className="text-2xl font-medium tracking-tight text-gray-900 mb-6">Nie tylko klejenie.<br bis_size='{"x":215,"y":834,"w":0,"h":28,"abs_x":695,"abs_y":876}'/>To rzemiosło.</h2>
<p bis_size='{"x":24,"y":920,"w":468,"h":68,"abs_x":504,"abs_y":962}' className="text-sm text-gray-500 mb-6 leading-relaxed">
                        Tapetowanie to sztuka detalu. Źle położona tapeta potrafi zepsuć efekt najdroższego remontu. My gwarantujemy idealne spasowanie wzoru, brak widocznych łączeń i czystość w miejscu pracy.
                    </p>
<p bis_size='{"x":24,"y":1013,"w":468,"h":45,"abs_x":504,"abs_y":1055}' className="text-sm text-gray-500 mb-8 leading-relaxed">
                        Działamy na terenie Łodzi, Zgierza, Pabianic i okolic. Obsługujemy zarówno mieszkania prywatne, jak i biura czy hotele.
                    </p>
<ul bis_size='{"x":24,"y":1090,"w":468,"h":168,"abs_x":504,"abs_y":1132}' className="space-y-4">
<li bis_size='{"x":24,"y":1090,"w":468,"h":40,"abs_x":504,"abs_y":1132}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":1092,"w":24,"h":24,"abs_x":504,"abs_y":1134}' className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 mt-0.5 shadow-sm">
<iconify-icon bis_size='{"x":30,"y":1098,"w":12,"h":12,"abs_x":510,"abs_y":1140}' icon="lucide:scissors" width="12"></iconify-icon>
</div>
<div bis_size='{"x":60,"y":1090,"w":312,"h":40,"abs_x":540,"abs_y":1132}'>
<h3 bis_size='{"x":60,"y":1090,"w":312,"h":20,"abs_x":540,"abs_y":1132}' className="text-sm font-medium text-gray-900">Precyzyjne docinanie</h3>
<p bis_size='{"x":60,"y":1114,"w":312,"h":16,"abs_x":540,"abs_y":1156}' className="text-xs text-gray-500 mt-1">Idealne krawędzie przy sufitach, listwach i gniazdkach.</p>
</div>
</li>
<li bis_size='{"x":24,"y":1146,"w":468,"h":56,"abs_x":504,"abs_y":1188}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":1148,"w":21,"h":24,"abs_x":504,"abs_y":1190}' className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 mt-0.5 shadow-sm">
<iconify-icon bis_size='{"x":28,"y":1154,"w":12,"h":12,"abs_x":508,"abs_y":1196}' icon="lucide:droplets" width="12"></iconify-icon>
</div>
<div bis_size='{"x":57,"y":1146,"w":434,"h":56,"abs_x":537,"abs_y":1188}'>
<h3 bis_size='{"x":57,"y":1146,"w":434,"h":20,"abs_x":537,"abs_y":1188}' className="text-sm font-medium text-gray-900">Dobór chemii</h3>
<p bis_size='{"x":57,"y":1170,"w":434,"h":32,"abs_x":537,"abs_y":1212}' className="text-xs text-gray-500 mt-1">Używamy profesjonalnych klejów dopasowanych do rodzaju podłoża i gramatury tapety.</p>
</div>
</li>
<li bis_size='{"x":24,"y":1218,"w":468,"h":40,"abs_x":504,"abs_y":1260}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":1220,"w":24,"h":24,"abs_x":504,"abs_y":1262}' className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 mt-0.5 shadow-sm">
<iconify-icon bis_size='{"x":30,"y":1226,"w":12,"h":12,"abs_x":510,"abs_y":1268}' icon="lucide:shield-check" width="12"></iconify-icon>
</div>
<div bis_size='{"x":60,"y":1218,"w":359,"h":40,"abs_x":540,"abs_y":1260}'>
<h3 bis_size='{"x":60,"y":1218,"w":359,"h":20,"abs_x":540,"abs_y":1260}' className="text-sm font-medium text-gray-900">Gwarancja czystości</h3>
<p bis_size='{"x":60,"y":1242,"w":359,"h":16,"abs_x":540,"abs_y":1284}' className="text-xs text-gray-500 mt-1">Zostawiamy porządek po zakończonej pracy. Zero plam z kleju.</p>
</div>
</li>
</ul>
</div>
<div bis_size='{"x":556,"y":832,"w":468,"h":585,"abs_x":1036,"abs_y":874}' className="md:w-1/2 relative">
<div bis_size='{"x":550,"y":828,"w":478,"h":593,"abs_x":1030,"abs_y":870}' className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-200 border border-gray-200 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">

<img alt="Tapetowanie ściany" bis_size='{"x":551,"y":829,"w":476,"h":591,"abs_x":1031,"abs_y":871}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":532,"y":1321,"w":200,"h":120,"abs_x":1012,"abs_y":1363}' className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 max-w-[200px]">
<p bis_size='{"x":548,"y":1338,"w":166,"h":64,"abs_x":1028,"abs_y":1380}' className="text-xs font-medium text-gray-900">"Efekt przeszedł moje oczekiwania. Ściana wygląda jak jeden wielki obraz."</p>
<p bis_size='{"x":548,"y":1410,"w":166,"h":15,"abs_x":1028,"abs_y":1452}' className="text-[10px] text-gray-400 mt-2">— Anna K., Łódź Widzew</p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1498,"w":1048,"h":585,"abs_x":480,"abs_y":1540}' className="bg-white pt-20 pb-20" id="gallery" onclick="window.location.href='/gallery'" role="button">
<div bis_size='{"x":0,"y":1578,"w":1048,"h":425,"abs_x":480,"abs_y":1620}' className="max-w-6xl mx-auto px-6">
<div bis_size='{"x":24,"y":1578,"w":1000,"h":60,"abs_x":504,"abs_y":1620}' className="flex justify-between items-end mb-12">
<div bis_size='{"x":24,"y":1578,"w":325,"h":60,"abs_x":504,"abs_y":1620}' className="">
<h2 bis_size='{"x":24,"y":1578,"w":325,"h":32,"abs_x":504,"abs_y":1620}' className="text-2xl font-medium tracking-tight text-gray-900">Wybrane realizacje</h2>
<p bis_size='{"x":24,"y":1618,"w":325,"h":20,"abs_x":504,"abs_y":1660}' className="mt-2 text-sm text-gray-500">Zobacz jak zmieniamy wnętrza naszych klientów.</p>
</div>
<a bis_size='{"x":882,"y":1618,"w":141,"h":20,"abs_x":1362,"abs_y":1660}' className="hidden md:flex items-center gap-2 hover:text-gray-600 transition-colors text-sm text-gray-900" href="https://facebook.com/tapetastudiolodz">Zobacz Facebook</a>
</div>
<div bis_size='{"x":24,"y":1686,"w":1000,"h":317,"abs_x":504,"abs_y":1728}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":1686,"w":317,"h":317,"abs_x":504,"abs_y":1728}' className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer">
<img alt="Realizacja 1" bis_size='{"x":24,"y":1687,"w":315,"h":315,"abs_x":504,"abs_y":1729}' className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div bis_label="style" bis_size='{"x":24,"y":1687,"w":315,"h":315,"abs_x":504,"abs_y":1729}' className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94fb5aa7-69ac-4509-a52c-c50f4b60ea37_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94fb5aa7-69ac-4509-a52c-c50f4b60ea37_800w.jpg\')'}}></div>
<div bis_size='{"x":40,"y":1960,"w":96,"h":26,"abs_x":520,"abs_y":2002}' className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span bis_size='{"x":40,"y":1964,"w":96,"h":23,"abs_x":520,"abs_y":2006}' className="inline-block px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-medium text-gray-900">Tapeta winylowa</span>
</div>
</div>

<div bis_size='{"x":365,"y":1686,"w":317,"h":317,"abs_x":845,"abs_y":1728}' className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer">
<img alt="Realizacja 2" bis_size='{"x":366,"y":1687,"w":315,"h":315,"abs_x":846,"abs_y":1729}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_label="style" bis_size='{"x":366,"y":1687,"w":315,"h":315,"abs_x":846,"abs_y":1729}' className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2a14c41-7651-462d-bf6e-2306ee94d54e_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2a14c41-7651-462d-bf6e-2306ee94d54e_800w.jpg\')'}}></div>
<div bis_size='{"x":382,"y":1960,"w":112,"h":26,"abs_x":862,"abs_y":2002}' className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span bis_size='{"x":382,"y":1964,"w":112,"h":23,"abs_x":862,"abs_y":2006}' className="inline-block px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-medium text-gray-900">Fototapeta sypialnia</span>
</div>
</div>

<div bis_size='{"x":706,"y":1686,"w":317,"h":317,"abs_x":1186,"abs_y":1728}' className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer">
<img alt="Realizacja 3" bis_size='{"x":707,"y":1687,"w":315,"h":315,"abs_x":1187,"abs_y":1729}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div bis_label="style" bis_size='{"x":707,"y":1687,"w":315,"h":315,"abs_x":1187,"abs_y":1729}' className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b6b2ec4-553e-40b3-a675-53090cb508a8_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b6b2ec4-553e-40b3-a675-53090cb508a8_800w.jpg\')'}}></div>
<div bis_size='{"x":723,"y":1960,"w":118,"h":26,"abs_x":1203,"abs_y":2002}' className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span bis_size='{"x":723,"y":1964,"w":118,"h":23,"abs_x":1203,"abs_y":2006}' className="inline-block px-2 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-medium text-gray-900">Biuro - Łódź Centrum</span>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2083,"w":1048,"h":729,"abs_x":480,"abs_y":2125}' className="bg-gray-50 border-gray-200 border-t pt-24 pb-24" id="contact" onclick="window.location.href='/contact'" role="button">
<div bis_size='{"x":76,"y":2180,"w":896,"h":536,"abs_x":556,"abs_y":2222}' className="max-w-4xl mx-auto px-6">
<div bis_size='{"x":100,"y":2180,"w":848,"h":536,"abs_x":580,"abs_y":2222}' className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 overflow-hidden">
<div bis_size='{"x":100,"y":2181,"w":846,"h":535,"abs_x":580,"abs_y":2223}' className="grid md:grid-cols-2">

<div bis_size='{"x":100,"y":2181,"w":423,"h":535,"abs_x":580,"abs_y":2223}' className="p-8 md:p-10">
<div bis_size='{"x":140,"y":2221,"w":343,"h":76,"abs_x":620,"abs_y":2263}' className="mb-8">
<h2 bis_size='{"x":140,"y":2221,"w":343,"h":28,"abs_x":620,"abs_y":2263}' className="text-xl font-medium tracking-tight text-gray-900">Zamów darmową wycenę</h2>
<p bis_size='{"x":140,"y":2257,"w":343,"h":40,"abs_x":620,"abs_y":2299}' className="mt-2 text-sm text-gray-500">Wypełnij formularz. Oddzwonimy w ciągu 24h z szacunkowym kosztem i dostępnym terminem.</p>
</div>
<form bis_size='{"x":140,"y":2329,"w":343,"h":347,"abs_x":620,"abs_y":2371}' className="space-y-5">
<div bis_size='{"x":140,"y":2329,"w":343,"h":68,"abs_x":620,"abs_y":2371}' className="space-y-1">
<label bis_size='{"x":140,"y":2335,"w":87,"h":15,"abs_x":620,"abs_y":2377}' className="text-xs font-medium text-gray-700" htmlFor="name">Imię i nazwisko</label>
<input bis_size='{"x":140,"y":2357,"w":343,"h":40,"abs_x":620,"abs_y":2399}' className="w-full text-sm rounded-lg border-gray-200 bg-gray-50/50 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 py-2.5 px-3 placeholder:text-gray-400 text-gray-900 transition-all outline-none" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div bis_size='{"x":140,"y":2417,"w":343,"h":68,"abs_x":620,"abs_y":2459}' className="grid grid-cols-2 gap-4">
<div bis_size='{"x":140,"y":2417,"w":163,"h":68,"abs_x":620,"abs_y":2459}' className="space-y-1">
<label bis_size='{"x":140,"y":2423,"w":42,"h":15,"abs_x":620,"abs_y":2465}' className="text-xs font-medium text-gray-700" htmlFor="phone">Telefon</label>
<input bis_size='{"x":140,"y":2445,"w":163,"h":40,"abs_x":620,"abs_y":2487}' className="w-full text-sm rounded-lg border-gray-200 bg-gray-50/50 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 py-2.5 px-3 placeholder:text-gray-400 text-gray-900 transition-all outline-none" id="phone" placeholder="123 456 789" type="tel"/>
</div>
<div bis_size='{"x":320,"y":2417,"w":163,"h":68,"abs_x":800,"abs_y":2459}' className="space-y-1">
<label bis_size='{"x":320,"y":2423,"w":105,"h":15,"abs_x":800,"abs_y":2465}' className="text-xs font-medium text-gray-700" htmlFor="area">Powierzchnia (m²)</label>
<input bis_size='{"x":320,"y":2445,"w":163,"h":40,"abs_x":800,"abs_y":2487}' className="w-full text-sm rounded-lg border-gray-200 bg-gray-50/50 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 py-2.5 px-3 placeholder:text-gray-400 text-gray-900 transition-all outline-none" id="area" placeholder="np. 15" type="number"/>
</div>
</div>
<div bis_size='{"x":140,"y":2505,"w":343,"h":68,"abs_x":620,"abs_y":2547}' className="space-y-1">
<label bis_size='{"x":140,"y":2511,"w":76,"h":15,"abs_x":620,"abs_y":2553}' className="text-xs font-medium text-gray-700" htmlFor="type">Rodzaj usługi</label>
<div bis_size='{"x":140,"y":2533,"w":343,"h":40,"abs_x":620,"abs_y":2575}' className="relative">
<select bis_size='{"x":140,"y":2533,"w":343,"h":40,"abs_x":620,"abs_y":2575}' className="w-full text-sm rounded-lg border-gray-200 bg-gray-50/50 shadow-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 py-2.5 px-3 text-gray-900 transition-all outline-none appearance-none cursor-pointer" id="type">
<option bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}'>Tapetowanie standardowe</option>
<option bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}'>Montaż fototapety</option>
<option bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}'>Usuwanie starej tapety</option>
<option bis_size='{"x":0,"y":1400,"w":0,"h":0,"abs_x":480,"abs_y":1442}'>Inne / Nie wiem</option>
</select>
<div bis_size='{"x":458,"y":2533,"w":14,"h":40,"abs_x":938,"abs_y":2575}' className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon bis_size='{"x":458,"y":2546,"w":14,"h":14,"abs_x":938,"abs_y":2588}' icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div bis_size='{"x":140,"y":2593,"w":343,"h":48,"abs_x":620,"abs_y":2635}' className="pt-2">
<button bis_size='{"x":140,"y":2601,"w":343,"h":40,"abs_x":620,"abs_y":2643}' className="w-full bg-gray-900 hover:bg-black text-white py-2.5 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2" type="button">
<span bis_size='{"x":246,"y":2611,"w":109,"h":20,"abs_x":726,"abs_y":2653}'>Wyślij zapytanie</span>
<iconify-icon bis_size='{"x":364,"y":2614,"w":14,"h":14,"abs_x":844,"abs_y":2656}' icon="lucide:send" width="14"></iconify-icon>
</button>
</div>
<p bis_size='{"x":140,"y":2661,"w":343,"h":15,"abs_x":620,"abs_y":2703}' className="text-[10px] text-gray-400 text-center">
                                Twoje dane są bezpieczne. Nie wysyłamy spamu.
                            </p>
</form>
</div>

<div bis_size='{"x":524,"y":2181,"w":423,"h":535,"abs_x":1004,"abs_y":2223}' className="bg-gray-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-between">
<div bis_size='{"x":564,"y":2221,"w":342,"h":222,"abs_x":1044,"abs_y":2263}' className="">
<h3 bis_size='{"x":564,"y":2221,"w":342,"h":20,"abs_x":1044,"abs_y":2263}' className="text-sm font-medium text-gray-900 mb-4">Kontakt bezpośredni</h3>
<div bis_size='{"x":564,"y":2257,"w":342,"h":186,"abs_x":1044,"abs_y":2299}' className="space-y-4">
<div bis_size='{"x":564,"y":2257,"w":342,"h":58,"abs_x":1044,"abs_y":2299}' className="flex items-start gap-3">
<div bis_size='{"x":564,"y":2257,"w":32,"h":32,"abs_x":1044,"abs_y":2299}' className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
<iconify-icon bis_size='{"x":573,"y":2266,"w":14,"h":14,"abs_x":1053,"abs_y":2308}' icon="lucide:phone" width="14"></iconify-icon>
</div>
<div bis_size='{"x":608,"y":2257,"w":121,"h":58,"abs_x":1088,"abs_y":2299}' className="">
<p bis_size='{"x":608,"y":2257,"w":121,"h":16,"abs_x":1088,"abs_y":2299}' className="text-xs text-gray-400 uppercase tracking-wide font-medium">Zadzwoń do nas</p>
<a bis_size='{"x":608,"y":2277,"w":113,"h":16,"abs_x":1088,"abs_y":2319}' className="hover:text-gray-600 transition-colors text-sm font-medium text-gray-900" href="/tel:+48789591658">+48 789 591 658</a>
<p bis_size='{"x":608,"y":2299,"w":121,"h":16,"abs_x":1088,"abs_y":2341}' className="text-xs text-gray-400 mt-0.5">Pon - Pt, 8:00 - 18:00</p>
</div>
</div>
<div bis_size='{"x":564,"y":2331,"w":342,"h":40,"abs_x":1044,"abs_y":2373}' className="flex items-start gap-3">
<div bis_size='{"x":564,"y":2331,"w":32,"h":32,"abs_x":1044,"abs_y":2373}' className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
<iconify-icon bis_size='{"x":573,"y":2340,"w":14,"h":14,"abs_x":1053,"abs_y":2382}' icon="lucide:mail" width="14"></iconify-icon>
</div>
<div bis_size='{"x":608,"y":2331,"w":139,"h":40,"abs_x":1088,"abs_y":2373}' className="">
<p bis_size='{"x":608,"y":2331,"w":139,"h":16,"abs_x":1088,"abs_y":2373}' className="text-xs text-gray-400 uppercase tracking-wide font-medium">Napisz maila</p>
<a bis_size='{"x":608,"y":2351,"w":139,"h":16,"abs_x":1088,"abs_y":2393}' className="hover:text-gray-600 transition-colors text-sm font-medium text-gray-900" href="/mailto:info@tapetastudio.pl">info@tapetastudio.pl</a>
</div>
</div>
<div bis_size='{"x":564,"y":2387,"w":342,"h":56,"abs_x":1044,"abs_y":2429}' className="flex items-start gap-3">
<div bis_size='{"x":564,"y":2387,"w":32,"h":32,"abs_x":1044,"abs_y":2429}' className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
<iconify-icon bis_size='{"x":573,"y":2396,"w":14,"h":14,"abs_x":1053,"abs_y":2438}' icon="lucide:map-pin" width="14"></iconify-icon>
</div>
<div bis_size='{"x":608,"y":2387,"w":298,"h":56,"abs_x":1088,"abs_y":2429}' className="">
<p bis_size='{"x":608,"y":2387,"w":298,"h":16,"abs_x":1088,"abs_y":2429}' className="text-xs text-gray-400 uppercase tracking-wide font-medium">Obszar działania</p>
<p bis_size='{"x":608,"y":2403,"w":298,"h":40,"abs_x":1088,"abs_y":2445}' className="text-sm text-gray-900">Łódź, Zgierz, Pabianice, Aleksandrów Łódzki i okolice do 30km.</p>
</div>
</div>
</div>
</div>
<div bis_size='{"x":564,"y":2571,"w":342,"h":105,"abs_x":1044,"abs_y":2613}' className="mt-8 pt-8 border-t border-gray-200">
<div bis_size='{"x":564,"y":2603,"w":342,"h":72,"abs_x":1044,"abs_y":2645}' className="bg-blue-50 border border-blue-100 rounded-lg p-4">
<div bis_size='{"x":581,"y":2620,"w":308,"h":39,"abs_x":1061,"abs_y":2662}' className="flex gap-3">
<iconify-icon bis_size='{"x":581,"y":2622,"w":16,"h":37,"abs_x":1061,"abs_y":2664}' className="text-blue-500 mt-0.5" icon="lucide:info" width="16"></iconify-icon>
<p bis_size='{"x":609,"y":2620,"w":280,"h":39,"abs_x":1089,"abs_y":2662}' className="text-xs text-blue-800 leading-relaxed">
                                        Dojazd na terenie Łodzi jest wliczony w cenę usługi przy zamówieniach powyżej 20m².
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":2813,"w":1048,"h":105,"abs_x":480,"abs_y":2855}' className="bg-white border-t border-gray-200 pt-12 pb-8">
<div bis_size='{"x":0,"y":2862,"w":1048,"h":24,"abs_x":480,"abs_y":2904}' className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div bis_size='{"x":24,"y":2862,"w":117,"h":24,"abs_x":504,"abs_y":2904}' className="flex items-center gap-2">
<div bis_size='{"x":24,"y":2862,"w":24,"h":24,"abs_x":504,"abs_y":2904}' className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-gray-500">
<iconify-icon bis_size='{"x":29,"y":2867,"w":14,"h":14,"abs_x":509,"abs_y":2909}' icon="lucide:layers" width="14"></iconify-icon>
</div>
<span bis_size='{"x":56,"y":2864,"w":85,"h":20,"abs_x":536,"abs_y":2906}' className="text-sm font-medium text-gray-900">WallArt Łódź</span>
</div>
<p bis_size='{"x":372,"y":2866,"w":369,"h":16,"abs_x":852,"abs_y":2908}' className="text-xs text-gray-400">
                © 2023 WallArt Usługi Remontowe. Wszelkie prawa zastrzeżone.
            </p>
<div bis_size='{"x":971,"y":2862,"w":52,"h":24,"abs_x":1451,"abs_y":2904}' className="flex gap-4">
<a bis_size='{"x":971,"y":2862,"w":18,"h":24,"abs_x":1451,"abs_y":2904}' className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon bis_size='{"x":971,"y":2862,"w":18,"h":18,"abs_x":1451,"abs_y":2904}' icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a bis_size='{"x":1005,"y":2862,"w":18,"h":24,"abs_x":1485,"abs_y":2904}' className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon bis_size='{"x":1005,"y":2862,"w":18,"h":18,"abs_x":1485,"abs_y":2904}' icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
