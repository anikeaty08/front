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
      

<header bis_size='{"x":0,"y":2335,"w":1424,"h":80,"abs_x":360,"abs_y":2367}' className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div bis_size='{"x":72,"y":2335,"w":1280,"h":80,"abs_x":432,"abs_y":2367}' className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_size='{"x":96,"y":2365,"w":224,"h":20,"abs_x":456,"abs_y":2397}' className="flex items-center gap-8">


<nav bis_size='{"x":96,"y":2365,"w":224,"h":20,"abs_x":456,"abs_y":2397}' className="hidden md:flex items-center gap-6">
<a bis_size='{"x":96,"y":2365,"w":35,"h":20,"abs_x":456,"abs_y":2397}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#o-nas">O nas</a>
<a bis_size='{"x":156,"y":2365,"w":40,"h":20,"abs_x":516,"abs_y":2397}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#oferta">Oferta</a>
<a bis_size='{"x":221,"y":2365,"w":26,"h":20,"abs_x":581,"abs_y":2397}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
<a bis_size='{"x":271,"y":2365,"w":49,"h":20,"abs_x":631,"abs_y":2397}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#kontakt">Kontakt</a>
</nav>
</div>
<div bis_size='{"x":971,"y":2355,"w":356,"h":40,"abs_x":1331,"abs_y":2387}' className="flex items-center gap-6">

<div bis_size='{"x":971,"y":2359,"w":183,"h":32,"abs_x":1331,"abs_y":2391}' className="hidden lg:flex flex-col items-end text-xs">
<span bis_size='{"x":1064,"y":2359,"w":90,"h":16,"abs_x":1424,"abs_y":2391}' className="font-medium text-gray-900">+48 453 300 418</span>
<span bis_size='{"x":971,"y":2375,"w":183,"h":16,"abs_x":1331,"abs_y":2407}' className="text-gray-400">Pomorskie &amp; Zachodniopomorskie</span>
</div>

<a bis_size='{"x":1178,"y":2355,"w":149,"h":40,"abs_x":1538,"abs_y":2387}' className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all shadow-sm" href="#wycena">
                    Darmowy Pomiar
                </a>
</div>
</div>
</header>
<main bis_size='{"x":0,"y":80,"w":1424,"h":4681,"abs_x":360,"abs_y":112}' className="">

<section bis_size='{"x":0,"y":80,"w":1424,"h":1141,"abs_x":360,"abs_y":112}' className="overflow-hidden bg-white pt-24 pb-32 relative">
<div bis_size='{"x":0,"y":80,"w":1424,"h":1141,"abs_x":360,"abs_y":112}' className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-gray-50/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":72,"y":176,"w":1280,"h":917,"abs_x":432,"abs_y":208}' className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div bis_size='{"x":515,"y":176,"w":392,"h":29,"abs_x":875,"abs_y":208}' className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-medium mb-8">
<iconify-icon bis_size='{"x":528,"y":185,"w":12,"h":12,"abs_x":888,"abs_y":217}' icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Działamy na terenie woj. Pomorskiego i Zachodniopomorskiego
                </div>
<h1 bis_size='{"x":264,"y":237,"w":896,"h":216,"abs_x":624,"abs_y":269}' className="md:text-6xl lg:text-7xl leading-tight text-5xl font-semibold text-gray-900 tracking-tight max-w-4xl mb-6">
                    Ciepło które się opłaca. <br bis_size='{"x":1071,"y":225,"w":0,"h":96,"abs_x":1431,"abs_y":257}'/>
<span bis_size='{"x":285,"y":297,"w":665,"h":96,"abs_x":645,"abs_y":329}' className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Profesjonalna izolacja</span> pianą PUR
                </h1>
<h2 bis_size='{"x":376,"y":477,"w":672,"h":56,"abs_x":736,"abs_y":509}' className="text-lg md:text-xl font-normal text-gray-500 max-w-2xl mb-10">
                    Działamy lokalnie: Bytów, Słupsk, Kościerzyna, Lębork, Szczecin, Police, Sławno, Ustka. Szybki montaż, trwała skuteczność i mniejsze rachunki.
                </h2>
<a bis_size='{"x":584,"y":573,"w":255,"h":56,"abs_x":944,"abs_y":605}' className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#wycena">
                    Zamów Bezpłatną Wycenę
                </a>

<div bis_size='{"x":200,"y":709,"w":1024,"h":384,"abs_x":560,"abs_y":741}' className="md:h-96 overflow-hidden flex bg-gray-100 w-full h-64 max-w-5xl border-gray-200 border rounded-3xl mt-20 relative shadow-sm items-center justify-center">
<svg bis_size='{"x":694,"y":883,"w":36,"h":36,"abs_x":1054,"abs_y":915}' className="w-[36px] h-[36px]" data-icon-replaced="true" data-icon-set="solar" data-solar="gallery-linear" height="36" strokeWidth="2" style={{strokeWidth: '1.5', width: '36px', height: '36px', color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":697,"y":886,"w":30,"h":30,"abs_x":1057,"abs_y":918}' className="" fill="none" stroke="currentColor" strokeWidth="1.5"><path bis_size='{"x":697,"y":886,"w":30,"h":30,"abs_x":1057,"abs_y":918}' className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><circle bis_size='{"x":715,"y":892,"w":6,"h":6,"abs_x":1075,"abs_y":924}' className="" cx="16" cy="8" r="2"></circle><path bis_size='{"x":697,"y":899,"w":28,"h":12,"abs_x":1057,"abs_y":931}' d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" strokeLinecap="round"></path></g></svg>
<span bis_size='{"x":1073,"y":1053,"w":134,"h":24,"abs_x":1433,"abs_y":1085}' className="text-xs text-gray-400 bg-white/80 rounded pt-1 pr-2 pb-1 pl-2 absolute right-4 bottom-4 backdrop-blur-sm">Wizualizacja poddasza</span>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1221,"w":1424,"h":692,"abs_x":360,"abs_y":1253}' className="py-24 bg-gray-50" id="o-nas">
<div bis_size='{"x":72,"y":1317,"w":1280,"h":500,"abs_x":432,"abs_y":1349}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":96,"y":1317,"w":672,"h":172,"abs_x":456,"abs_y":1349}' className="max-w-2xl mb-16">
<h2 bis_size='{"x":96,"y":1317,"w":672,"h":108,"abs_x":456,"abs_y":1349}' className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Wybierając naszą firmę, stawiasz na nowoczesne i sprawdzone rozwiązanie, jakim jest izolacja pianą PUR.</h2>
<p bis_size='{"x":96,"y":1441,"w":672,"h":48,"abs_x":456,"abs_y":1473}' className="text-base font-normal text-gray-500">Tworzymy szczelną barierę, która obniża Twoje rachunki i zapewnia komfort w Twoim domu przez cały rok.</p>
</div>
<div bis_size='{"x":96,"y":1553,"w":1232,"h":264,"abs_x":456,"abs_y":1585}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":96,"y":1553,"w":290,"h":264,"abs_x":456,"abs_y":1585}' className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div bis_size='{"x":129,"y":1586,"w":48,"h":48,"abs_x":489,"abs_y":1618}' className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon bis_size='{"x":141,"y":1598,"w":24,"h":24,"abs_x":501,"abs_y":1630}' className="text-2xl" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":129,"y":1658,"w":224,"h":28,"abs_x":489,"abs_y":1690}' className="text-lg font-medium tracking-tight text-gray-900 mb-2">Ciepło które się opłaca</h3>
<p bis_size='{"x":129,"y":1694,"w":224,"h":68,"abs_x":489,"abs_y":1726}' className="text-sm font-normal text-gray-500 leading-relaxed">Obniż koszty ogrzewania i popraw efektywność energetyczną domu z każdym sezonem grzewczym.</p>
</div>

<div bis_size='{"x":410,"y":1553,"w":290,"h":264,"abs_x":770,"abs_y":1585}' className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div bis_size='{"x":443,"y":1586,"w":48,"h":48,"abs_x":803,"abs_y":1618}' className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon bis_size='{"x":455,"y":1598,"w":24,"h":24,"abs_x":815,"abs_y":1630}' className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":443,"y":1658,"w":224,"h":28,"abs_x":803,"abs_y":1690}' className="text-lg font-medium tracking-tight text-gray-900 mb-2">Szczelność na lata</h3>
<p bis_size='{"x":443,"y":1694,"w":224,"h":68,"abs_x":803,"abs_y":1726}' className="text-sm font-normal text-gray-500 leading-relaxed">Piana PUR tworzy bezszwową warstwę bez mostków termicznych, docierając we wszystkie szczeliny.</p>
</div>

<div bis_size='{"x":724,"y":1553,"w":290,"h":264,"abs_x":1084,"abs_y":1585}' className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div bis_size='{"x":757,"y":1586,"w":48,"h":48,"abs_x":1117,"abs_y":1618}' className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon bis_size='{"x":769,"y":1598,"w":24,"h":24,"abs_x":1129,"abs_y":1630}' className="text-2xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":757,"y":1658,"w":224,"h":28,"abs_x":1117,"abs_y":1690}' className="text-lg font-medium tracking-tight text-gray-900 mb-2">Ekspresowa realizacja</h3>
<p bis_size='{"x":757,"y":1694,"w":224,"h":91,"abs_x":1117,"abs_y":1726}' className="text-sm font-normal text-gray-500 leading-relaxed">Pracujemy szybko i sprawnie – większość izolacji domów wykonujemy w ciągu zaledwie jednego dnia.</p>
</div>

<div bis_size='{"x":1038,"y":1553,"w":290,"h":264,"abs_x":1398,"abs_y":1585}' className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div bis_size='{"x":1071,"y":1586,"w":48,"h":48,"abs_x":1431,"abs_y":1618}' className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon bis_size='{"x":1083,"y":1598,"w":24,"h":24,"abs_x":1443,"abs_y":1630}' className="text-2xl" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":1071,"y":1658,"w":224,"h":28,"abs_x":1431,"abs_y":1690}' className="text-lg font-medium tracking-tight text-gray-900 mb-2">Komfort cieplny</h3>
<p bis_size='{"x":1071,"y":1694,"w":224,"h":68,"abs_x":1431,"abs_y":1726}' className="text-sm font-normal text-gray-500 leading-relaxed">Skuteczna ochrona przed wilgocią, stratami ciepła i rewelacyjne tłumienie uciążliwego hałasu.</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1914,"w":1424,"h":1194,"abs_x":360,"abs_y":1946}' className="bg-white pt-24 pb-24" id="oferta">
<div bis_size='{"x":72,"y":2010,"w":1280,"h":1002,"abs_x":432,"abs_y":2042}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":328,"y":2010,"w":768,"h":160,"abs_x":688,"abs_y":2042}' className="text-center max-w-3xl mx-auto mb-16">
<h2 bis_size='{"x":328,"y":2010,"w":768,"h":72,"abs_x":688,"abs_y":2042}' className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Profesjonalne izolacje natryskowe dopasowane do Twoich potrzeb</h2>
<p bis_size='{"x":328,"y":2098,"w":768,"h":72,"abs_x":688,"abs_y":2130}' className="text-base font-normal text-gray-500">Oferujemy profesjonalne usługi izolacji natryskowej pianą poliuretanową (PUR), dopasowane do różnych potrzeb i typów budynków. W naszej ofercie znajdziesz dwa główne rodzaje piany: otwartokomórkową oraz zamkniętokomórkową.</p>
</div>
<div bis_size='{"x":96,"y":2234,"w":1232,"h":425,"abs_x":456,"abs_y":2266}' className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

<div bis_size='{"x":96,"y":2234,"w":600,"h":425,"abs_x":456,"abs_y":2266}' className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
<div bis_size='{"x":145,"y":2282,"w":502,"h":40,"abs_x":505,"abs_y":2314}' className="flex gap-4 mb-6 gap-x-4 gap-y-4 items-center">
<div bis_size='{"x":145,"y":2282,"w":40,"h":40,"abs_x":505,"abs_y":2314}' className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-emerald-500 shadow-sm">
<iconify-icon bis_size='{"x":155,"y":2292,"w":20,"h":20,"abs_x":515,"abs_y":2324}' className="text-xl" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":201,"y":2286,"w":270,"h":32,"abs_x":561,"abs_y":2318}' className="text-2xl font-semibold tracking-tight text-gray-900">Piana Otwartokomórkowa</h3>
</div>
<p bis_size='{"x":145,"y":2346,"w":502,"h":68,"abs_x":505,"abs_y":2378}' className="text-sm font-normal text-gray-500 mb-8 leading-relaxed">
                            To lekkie i elastyczne rozwiązanie, idealne do izolacji wewnętrznych. Doskonale sprawdza się w ocieplaniu poddaszy, ścian działowych oraz stropów. Piana „oddycha”.
                        </p>
<ul bis_size='{"x":145,"y":2447,"w":502,"h":164,"abs_x":505,"abs_y":2479}' className="space-y-4">
<li bis_size='{"x":145,"y":2447,"w":502,"h":20,"abs_x":505,"abs_y":2479}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":145,"y":2449,"w":18,"h":18,"abs_x":505,"abs_y":2481}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":175,"y":2447,"w":196,"h":20,"abs_x":535,"abs_y":2479}' className="text-sm font-normal text-gray-700">bardzo dobra izolacja termiczna</span>
</li>
<li bis_size='{"x":145,"y":2483,"w":502,"h":20,"abs_x":505,"abs_y":2515}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":145,"y":2485,"w":18,"h":18,"abs_x":505,"abs_y":2517}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":175,"y":2483,"w":306,"h":20,"abs_x":535,"abs_y":2515}' className="text-sm font-normal text-gray-700">świetne właściwości akustyczne (tłumienie hałasu)</span>
</li>
<li bis_size='{"x":145,"y":2519,"w":502,"h":20,"abs_x":505,"abs_y":2551}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":145,"y":2521,"w":18,"h":18,"abs_x":505,"abs_y":2553}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":175,"y":2519,"w":357,"h":20,"abs_x":535,"abs_y":2551}' className="text-sm font-normal text-gray-700">dokładne wypełnienie szczelin i trudno dostępnych miejsc</span>
</li>
<li bis_size='{"x":145,"y":2555,"w":502,"h":20,"abs_x":505,"abs_y":2587}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":145,"y":2557,"w":18,"h":18,"abs_x":505,"abs_y":2589}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":175,"y":2555,"w":346,"h":20,"abs_x":535,"abs_y":2587}' className="text-sm font-normal text-gray-700">paroprzepuszczalność – pozwala budynkowi „oddychać”</span>
</li>
<li bis_size='{"x":145,"y":2591,"w":502,"h":20,"abs_x":505,"abs_y":2623}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":145,"y":2593,"w":18,"h":18,"abs_x":505,"abs_y":2625}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":175,"y":2591,"w":199,"h":20,"abs_x":535,"abs_y":2623}' className="text-sm font-normal text-gray-700">lekkość – nie obciąża konstrukcji</span>
</li>
</ul>
</div>

<div bis_size='{"x":728,"y":2234,"w":600,"h":425,"abs_x":1088,"abs_y":2266}' className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
<div bis_size='{"x":777,"y":2282,"w":502,"h":40,"abs_x":1137,"abs_y":2314}' className="flex items-center gap-4 mb-6">
<div bis_size='{"x":777,"y":2282,"w":40,"h":40,"abs_x":1137,"abs_y":2314}' className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-emerald-500 shadow-sm">
<iconify-icon bis_size='{"x":787,"y":2292,"w":20,"h":20,"abs_x":1147,"abs_y":2324}' className="text-xl" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 bis_size='{"x":833,"y":2286,"w":296,"h":32,"abs_x":1193,"abs_y":2318}' className="text-2xl font-semibold tracking-tight text-gray-900">Piana Zamkniętokomórkowa</h3>
</div>
<p bis_size='{"x":777,"y":2346,"w":502,"h":68,"abs_x":1137,"abs_y":2378}' className="text-sm font-normal text-gray-500 mb-8 leading-relaxed">
                            To bardziej zaawansowane i wytrzymałe rozwiązanie, stosowane zarówno wewnątrz, jak i na zewnątrz budynków. Charakteryzuje się wysoką gęstością i odpornością na czynniki zewnętrzne.
                        </p>
<ul bis_size='{"x":777,"y":2447,"w":502,"h":164,"abs_x":1137,"abs_y":2479}' className="space-y-4">
<li bis_size='{"x":777,"y":2447,"w":502,"h":20,"abs_x":1137,"abs_y":2479}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":777,"y":2449,"w":18,"h":18,"abs_x":1137,"abs_y":2481}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":807,"y":2447,"w":233,"h":20,"abs_x":1167,"abs_y":2479}' className="text-sm font-normal text-gray-700">bardzo wysoka izolacyjność termiczna</span>
</li>
<li bis_size='{"x":777,"y":2483,"w":502,"h":20,"abs_x":1137,"abs_y":2515}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":777,"y":2485,"w":18,"h":18,"abs_x":1137,"abs_y":2517}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":807,"y":2483,"w":231,"h":20,"abs_x":1167,"abs_y":2515}' className="text-sm font-normal text-gray-700">odporność na wilgoć i działanie wody</span>
</li>
<li bis_size='{"x":777,"y":2519,"w":502,"h":20,"abs_x":1137,"abs_y":2551}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":777,"y":2521,"w":18,"h":18,"abs_x":1137,"abs_y":2553}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":807,"y":2519,"w":222,"h":20,"abs_x":1167,"abs_y":2551}' className="text-sm font-normal text-gray-700">dodatkowe usztywnienie konstrukcji</span>
</li>
<li bis_size='{"x":777,"y":2555,"w":502,"h":20,"abs_x":1137,"abs_y":2587}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":777,"y":2557,"w":18,"h":18,"abs_x":1137,"abs_y":2589}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":807,"y":2555,"w":315,"h":20,"abs_x":1167,"abs_y":2587}' className="text-sm font-normal text-gray-700">zastosowanie na dachach, fundamentach i ścianach</span>
</li>
<li bis_size='{"x":777,"y":2591,"w":502,"h":20,"abs_x":1137,"abs_y":2623}' className="flex items-start gap-3">
<iconify-icon bis_size='{"x":777,"y":2593,"w":18,"h":18,"abs_x":1137,"abs_y":2625}' className="text-emerald-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":807,"y":2591,"w":125,"h":20,"abs_x":1167,"abs_y":2623}' className="text-sm font-normal text-gray-700">funkcja hydroizolacji</span>
</li>
</ul>
</div>
</div>
<div bis_size='{"x":96,"y":2723,"w":1232,"h":289,"abs_x":456,"abs_y":2755}' className="text-center bg-gray-900 text-white rounded-3xl p-10 md:p-14 border border-gray-800 shadow-lg">
<h3 bis_size='{"x":153,"y":2780,"w":1118,"h":36,"abs_x":513,"abs_y":2812}' className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Dobierzemy najlepsze rozwiązanie dla Ciebie</h3>
<p bis_size='{"x":376,"y":2832,"w":672,"h":48,"abs_x":736,"abs_y":2864}' className="text-base font-normal text-gray-400 max-w-2xl mx-auto mb-8">Każdy projekt traktujemy indywidualnie. Doradzimy, który rodzaj piany będzie najlepszy w Twoim przypadku, aby zapewnić maksymalną efektywność i trwałość izolacji.</p>
<a bis_size='{"x":604,"y":2912,"w":216,"h":44,"abs_x":964,"abs_y":2944}' className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-all" href="#kontakt">
                        Skonsultuj się z Ekspertem
                    </a>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3109,"w":1424,"h":253,"abs_x":360,"abs_y":3141}' className="py-16 bg-gray-50 border-y border-gray-100">
<div bis_size='{"x":72,"y":3173,"w":1280,"h":124,"abs_x":432,"abs_y":3205}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":96,"y":3173,"w":1232,"h":20,"abs_x":456,"abs_y":3205}' className="text-center mb-10">
<h2 bis_size='{"x":96,"y":3173,"w":1232,"h":20,"abs_x":456,"abs_y":3205}' className="text-sm font-medium text-gray-500 uppercase tracking-widest">Gwarancja Jakości i Dokumentacja</h2>
</div>
<div bis_size='{"x":96,"y":3233,"w":1232,"h":64,"abs_x":456,"abs_y":3265}' className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div bis_size='{"x":319,"y":3233,"w":54,"h":64,"abs_x":679,"abs_y":3265}' className="flex flex-col items-center gap-3 group cursor-pointer">
<iconify-icon bis_size='{"x":328,"y":3233,"w":36,"h":36,"abs_x":688,"abs_y":3265}' className="text-4xl text-gray-400 group-hover:text-emerald-500 transition-colors" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":319,"y":3281,"w":54,"h":16,"abs_x":679,"abs_y":3313}' className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Atest PZH</span>
</div>
<div bis_size='{"x":470,"y":3233,"w":124,"h":64,"abs_x":830,"abs_y":3265}' className="flex flex-col items-center gap-3 group cursor-pointer">
<iconify-icon bis_size='{"x":514,"y":3233,"w":36,"h":36,"abs_x":874,"abs_y":3265}' className="text-4xl text-gray-400 group-hover:text-emerald-500 transition-colors" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":470,"y":3281,"w":124,"h":16,"abs_x":830,"abs_y":3313}' className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Karta Techniczna Piany</span>
</div>
<div bis_size='{"x":690,"y":3233,"w":124,"h":64,"abs_x":1050,"abs_y":3265}' className="flex flex-col items-center gap-3 group cursor-pointer">
<iconify-icon bis_size='{"x":734,"y":3233,"w":36,"h":36,"abs_x":1094,"abs_y":3265}' className="text-4xl text-gray-400 group-hover:text-emerald-500 transition-colors" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":690,"y":3281,"w":124,"h":16,"abs_x":1050,"abs_y":3313}' className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Gwarancja Wykonawcy</span>
</div>
<div bis_size='{"x":910,"y":3233,"w":193,"h":64,"abs_x":1270,"abs_y":3265}' className="flex flex-col items-center gap-3 group cursor-pointer">
<iconify-icon bis_size='{"x":989,"y":3233,"w":36,"h":36,"abs_x":1349,"abs_y":3265}' className="text-4xl text-gray-400 group-hover:text-emerald-500 transition-colors" icon="solar:notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":910,"y":3281,"w":193,"h":16,"abs_x":1270,"abs_y":3313}' className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Deklaracja Właściwości Użytkowych</span>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3362,"w":1424,"h":1158,"abs_x":360,"abs_y":3394}' className="py-24 bg-white" id="faq">
<div bis_size='{"x":328,"y":3458,"w":768,"h":966,"abs_x":688,"abs_y":3490}' className="max-w-3xl mx-auto px-6">
<h2 bis_size='{"x":352,"y":3458,"w":720,"h":36,"abs_x":712,"abs_y":3490}' className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">FAQ – Najczęściej zadawane pytania</h2>
<div bis_size='{"x":352,"y":3542,"w":720,"h":882,"abs_x":712,"abs_y":3574}' className="space-y-4">

<details bis_size='{"x":352,"y":3542,"w":720,"h":165,"abs_x":712,"abs_y":3574}' className="group border border-gray-100 bg-gray-50 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary bis_size='{"x":353,"y":3543,"w":718,"h":72,"abs_x":713,"abs_y":3575}' className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 p-6">
<span bis_size='{"x":377,"y":3567,"w":373,"h":24,"abs_x":737,"abs_y":3599}'>Czy piana PUR jest w 100% bezpieczna dla zdrowia?</span>
<span bis_size='{"x":1031,"y":3567,"w":16,"h":24,"abs_x":1391,"abs_y":3599}' className="transition group-open:rotate-180">
<iconify-icon bis_size='{"x":1031,"y":3572,"w":16,"h":16,"abs_x":1391,"abs_y":3604}' icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div bis_size='{"x":353,"y":3615,"w":718,"h":92,"abs_x":713,"abs_y":3647}' className="text-sm text-gray-500 px-6 pb-6 font-normal leading-relaxed">
                            Tak. Piana poliuretanowa (PUR) po całkowitym utwardzeniu jest materiałem w pełni obojętnym chemicznie. Nie pyli, nie wydziela szkodliwych substancji i jest bezpieczna dla alergików. Posiada wszystkie niezbędne atesty PZH dopuszczające do stosowania w budownictwie mieszkaniowym.
                        </div>
</details>

<details bis_size='{"x":352,"y":3724,"w":720,"h":165,"abs_x":712,"abs_y":3756}' className="group border border-gray-100 bg-gray-50 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary bis_size='{"x":353,"y":3724,"w":718,"h":72,"abs_x":713,"abs_y":3756}' className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 p-6">
<span bis_size='{"x":377,"y":3748,"w":384,"h":24,"abs_x":737,"abs_y":3780}' className="">Jak długo trwa ocieplenie standardowego poddasza?</span>
<span bis_size='{"x":1031,"y":3748,"w":16,"h":24,"abs_x":1391,"abs_y":3780}' className="transition group-open:rotate-180">
<iconify-icon bis_size='{"x":1031,"y":3754,"w":16,"h":16,"abs_x":1391,"abs_y":3786}' icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div bis_size='{"x":353,"y":3796,"w":718,"h":92,"abs_x":713,"abs_y":3828}' className="text-sm text-gray-500 px-6 pb-6 font-normal leading-relaxed">
                            Ogromną zaletą izolacji natryskowych jest czas aplikacji. Ocieplenie standardowego poddasza w domu jednorodzinnym (ok. 100-150 m2) zazwyczaj realizujemy w przeciągu zaledwie jednego dnia roboczego. To ogromna oszczędność czasu w porównaniu z tradycyjnymi metodami.
                        </div>
</details>

<details bis_size='{"x":352,"y":3905,"w":720,"h":73,"abs_x":712,"abs_y":3937}' className="group border border-gray-100 bg-gray-50 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary bis_size='{"x":353,"y":3906,"w":718,"h":72,"abs_x":713,"abs_y":3938}' className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 p-6">
<span bis_size='{"x":377,"y":3930,"w":393,"h":24,"abs_x":737,"abs_y":3962}' className="">Czy piana z czasem opada lub traci swoje właściwości?</span>
<span bis_size='{"x":1031,"y":3930,"w":16,"h":24,"abs_x":1391,"abs_y":3962}' className="transition group-open:rotate-180">
<iconify-icon bis_size='{"x":1031,"y":3933,"w":16,"h":16,"abs_x":1391,"abs_y":3965}' icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div bis_size='{"x":0,"y":2335,"w":0,"h":0,"abs_x":360,"abs_y":2367}' className="text-sm text-gray-500 px-6 pb-6 font-normal leading-relaxed">
                            Nie. Jedną z największych zalet piany PUR jest jej stabilność wymiarowa i właściwość mocnego wiązania z podłożem. W przeciwieństwie do innych materiałów, piana nie osiada, nie przesuwa się i zachowuje swoje właściwości termoizolacyjne przez cały okres użytkowania budynku.
                        </div>
</details>

<details bis_size='{"x":352,"y":3995,"w":720,"h":429,"abs_x":712,"abs_y":4027}' className="group border border-emerald-100 bg-emerald-50/30 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary bis_size='{"x":353,"y":3995,"w":718,"h":72,"abs_x":713,"abs_y":4027}' className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-900 p-6">
<span bis_size='{"x":377,"y":4019,"w":336,"h":24,"abs_x":737,"abs_y":4051}' className="text-emerald-700">Jak wygląda realizacja z nami? (Krok po kroku)</span>
<span bis_size='{"x":1031,"y":4019,"w":16,"h":24,"abs_x":1391,"abs_y":4051}' className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon bis_size='{"x":1031,"y":4025,"w":16,"h":16,"abs_x":1391,"abs_y":4057}' icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div bis_size='{"x":353,"y":4067,"w":718,"h":356,"abs_x":713,"abs_y":4099}' className="leading-relaxed text-sm font-normal text-gray-600 pr-6 pb-6 pl-6">
                            Nasza współpraca jest prosta i w pełni przejrzysta:
                            <div bis_size='{"x":377,"y":4114,"w":670,"h":285,"abs_x":737,"abs_y":4146}' className="mt-6 space-y-4">
<div bis_size='{"x":377,"y":4114,"w":670,"h":24,"abs_x":737,"abs_y":4146}' className="flex gap-4">
<div bis_size='{"x":377,"y":4114,"w":24,"h":24,"abs_x":737,"abs_y":4146}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">1</div>
<p bis_size='{"x":417,"y":4114,"w":527,"h":24,"abs_x":777,"abs_y":4146}' className=""><strong bis_size='{"x":417,"y":4116,"w":141,"h":18,"abs_x":777,"abs_y":4148}' className="font-medium text-gray-900">Bezpłatna konsultacja:</strong> Kontaktujesz się z nami, a my odpowiadamy na Twoje pytania.</p>
</div>
<div bis_size='{"x":377,"y":4154,"w":670,"h":45,"abs_x":737,"abs_y":4186}' className="flex gap-4">
<div bis_size='{"x":377,"y":4154,"w":24,"h":24,"abs_x":737,"abs_y":4186}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">2</div>
<p bis_size='{"x":417,"y":4154,"w":630,"h":45,"abs_x":777,"abs_y":4186}' className=""><strong bis_size='{"x":417,"y":4156,"w":161,"h":18,"abs_x":777,"abs_y":4188}' className="font-medium text-gray-900">Darmowy pomiar i audyt:</strong> Przyjeżdżamy na miejsce inwestycji, dokonujemy pomiarów i oceniamy stan techniczny.</p>
</div>
<div bis_size='{"x":377,"y":4216,"w":670,"h":24,"abs_x":737,"abs_y":4248}' className="flex gap-4">
<div bis_size='{"x":377,"y":4216,"w":24,"h":24,"abs_x":737,"abs_y":4248}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">3</div>
<p bis_size='{"x":417,"y":4216,"w":579,"h":24,"abs_x":777,"abs_y":4248}' className=""><strong bis_size='{"x":417,"y":4218,"w":108,"h":18,"abs_x":777,"abs_y":4250}' className="font-medium text-gray-900">Dobór materiału:</strong> Wspólnie decydujemy o rodzaju piany (otwarto- lub zamkniętokomórkowa).</p>
</div>
<div bis_size='{"x":377,"y":4256,"w":670,"h":24,"abs_x":737,"abs_y":4288}' className="flex gap-4">
<div bis_size='{"x":377,"y":4256,"w":24,"h":24,"abs_x":737,"abs_y":4288}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">4</div>
<p bis_size='{"x":417,"y":4256,"w":447,"h":24,"abs_x":777,"abs_y":4288}' className=""><strong bis_size='{"x":417,"y":4258,"w":123,"h":18,"abs_x":777,"abs_y":4290}' className="font-medium text-gray-900">Przejrzysta wycena:</strong> Otrzymujesz dokładny kosztorys bez ukrytych opłat.</p>
</div>
<div bis_size='{"x":377,"y":4296,"w":670,"h":24,"abs_x":737,"abs_y":4328}' className="flex gap-4">
<div bis_size='{"x":377,"y":4296,"w":24,"h":24,"abs_x":737,"abs_y":4328}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">5</div>
<p bis_size='{"x":417,"y":4296,"w":403,"h":24,"abs_x":777,"abs_y":4328}' className=""><strong bis_size='{"x":417,"y":4298,"w":115,"h":18,"abs_x":777,"abs_y":4330}' className="font-medium text-gray-900">Ustalenie terminu:</strong> Wybieramy dogodny dla Ciebie czas realizacji.</p>
</div>
<div bis_size='{"x":377,"y":4336,"w":670,"h":24,"abs_x":737,"abs_y":4368}' className="flex gap-4">
<div bis_size='{"x":377,"y":4336,"w":24,"h":24,"abs_x":737,"abs_y":4368}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">6</div>
<p bis_size='{"x":417,"y":4336,"w":610,"h":24,"abs_x":777,"abs_y":4368}' className=""><strong bis_size='{"x":417,"y":4338,"w":106,"h":18,"abs_x":777,"abs_y":4370}' className="font-medium text-gray-900">Szybka aplikacja:</strong> Nasza ekipa zjawia się z profesjonalnym sprzętem i precyzyjnie wykonuje natrysk.</p>
</div>
<div bis_size='{"x":377,"y":4376,"w":670,"h":24,"abs_x":737,"abs_y":4408}' className="flex gap-4">
<div bis_size='{"x":377,"y":4376,"w":24,"h":24,"abs_x":737,"abs_y":4408}' className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold shrink-0">7</div>
<p bis_size='{"x":417,"y":4376,"w":567,"h":24,"abs_x":777,"abs_y":4408}' className=""><strong bis_size='{"x":417,"y":4378,"w":48,"h":18,"abs_x":777,"abs_y":4410}' className="font-medium text-gray-900">Odbiór:</strong> Protokół odbioru przekazanie Deklaracji aplikatora (według norm EN 14315-2:2013)</p>
</div>
</div>
</div>
</details>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4520,"w":1424,"h":241,"abs_x":360,"abs_y":4552}' className="py-12 bg-white">
<div bis_size='{"x":72,"y":4568,"w":1280,"h":145,"abs_x":432,"abs_y":4600}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":96,"y":4568,"w":1232,"h":145,"abs_x":456,"abs_y":4600}' className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
<div bis_size='{"x":1107,"y":4488,"w":300,"h":305,"abs_x":1467,"abs_y":4520}' className="absolute -right-20 -bottom-20 opacity-5">
<iconify-icon bis_size='{"x":1107,"y":4488,"w":300,"h":300,"abs_x":1467,"abs_y":4520}' className="text-[300px]" icon="solar:map-bold-duotone" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div bis_size='{"x":145,"y":4617,"w":48,"h":48,"abs_x":505,"abs_y":4649}' className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm shrink-0 z-10">
<iconify-icon bis_size='{"x":157,"y":4629,"w":24,"h":24,"abs_x":517,"abs_y":4661}' className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div bis_size='{"x":225,"y":4618,"w":1054,"h":45,"abs_x":585,"abs_y":4650}' className="z-10">
<p bis_size='{"x":225,"y":4618,"w":1054,"h":45,"abs_x":585,"abs_y":4650}' className="text-sm font-normal text-gray-500 leading-relaxed">
                            Działamy kompleksowo na terenie województwa <strong bis_size='{"x":528,"y":4620,"w":83,"h":18,"abs_x":888,"abs_y":4652}' className="font-medium text-gray-900">Pomorskiego</strong> i <strong bis_size='{"x":622,"y":4620,"w":151,"h":18,"abs_x":982,"abs_y":4652}' className="font-medium text-gray-900">Zachodniopomorskiego</strong>. Nasi specjaliści są dostępni m.in. w lokalizacjach: <strong bis_size='{"x":225,"y":4620,"w":1031,"h":41,"abs_x":585,"abs_y":4652}' className="font-medium text-gray-900">Bytów, Słupsk, Kościerzyna, Lębork, Szczecin, Police, Sławno, Ustka</strong>. Dojedziemy we wskazane przez Ciebie miejsce.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":4762,"w":1424,"h":389,"abs_x":360,"abs_y":4794}' className="bg-gray-950 pt-20 pb-10 text-white border-t border-gray-900" id="kontakt">
<div bis_size='{"x":72,"y":4842,"w":1280,"h":268,"abs_x":432,"abs_y":4874}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":96,"y":4842,"w":1232,"h":220,"abs_x":456,"abs_y":4874}' className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-16">

<div bis_size='{"x":96,"y":4842,"w":378,"h":156,"abs_x":456,"abs_y":4874}' className="">
<a bis_size='{"x":96,"y":4842,"w":378,"h":32,"abs_x":456,"abs_y":4874}' className="font-semibold tracking-tighter text-2xl text-white flex items-center gap-2 mb-4" href="#">
<div bis_size='{"x":96,"y":4842,"w":32,"h":32,"abs_x":456,"abs_y":4874}' className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white text-sm">FP</div>
                        FAMPUR
                    </a>
<p bis_size='{"x":96,"y":4890,"w":378,"h":40,"abs_x":456,"abs_y":4922}' className="text-sm font-normal text-gray-400">
                        Profesjonalna Izolacja.<br bis_size='{"x":232,"y":4891,"w":0,"h":18,"abs_x":592,"abs_y":4923}'/> 
                        Nowoczesne ocieplanie pianą PUR dla Twojego komfortu.
                    </p>
</div>

<div bis_size='{"x":523,"y":4842,"w":378,"h":156,"abs_x":883,"abs_y":4874}' className="">
<h4 bis_size='{"x":523,"y":4842,"w":378,"h":20,"abs_x":883,"abs_y":4874}' className="text-sm font-medium tracking-tight mb-6">Dane firmy &amp; Kontakt</h4>
<ul bis_size='{"x":523,"y":4886,"w":378,"h":112,"abs_x":883,"abs_y":4918}' className="space-y-4 text-sm font-normal text-gray-400">
<li bis_size='{"x":523,"y":4886,"w":378,"h":40,"abs_x":883,"abs_y":4918}' className="flex gap-x-3 gap-y-3 items-start">Ul. Wichrowe Wzgórze 22 
77-100 Mądrzechowo</li>
<li bis_size='{"x":523,"y":4942,"w":378,"h":20,"abs_x":883,"abs_y":4974}' className="flex items-center gap-3">
<iconify-icon bis_size='{"x":523,"y":4945,"w":14,"h":14,"abs_x":883,"abs_y":4977}' className="text-gray-500" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            +48 453 300 418
                        </li>
<li bis_size='{"x":523,"y":4978,"w":378,"h":20,"abs_x":883,"abs_y":5010}' className="flex items-center gap-3">
<iconify-icon bis_size='{"x":523,"y":4981,"w":14,"h":14,"abs_x":883,"abs_y":5013}' className="text-gray-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            biuro@fampur.pl
                        </li>
</ul>
</div>

<div bis_size='{"x":949,"y":4842,"w":378,"h":156,"abs_x":1309,"abs_y":4874}' className="">
<h4 bis_size='{"x":949,"y":4842,"w":378,"h":20,"abs_x":1309,"abs_y":4874}' className="text-sm font-medium tracking-tight mb-6">Social Media</h4>
<a bis_size='{"x":949,"y":4886,"w":220,"h":40,"abs_x":1309,"abs_y":4918}' className="inline-flex items-center gap-2 text-sm font-normal text-gray-400 hover:text-white transition-colors" href="https://www.facebook.com/fampur" rel="noopener noreferrer" target="_blank">
<div bis_size='{"x":949,"y":4886,"w":40,"h":40,"abs_x":1309,"abs_y":4918}' className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">

<svg bis_size='{"x":959,"y":4896,"w":20,"h":20,"abs_x":1319,"abs_y":4928}' className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":965,"y":4898,"w":9,"h":16,"abs_x":1325,"abs_y":4930}' d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
                        Obserwuj nas na Facebooku
                    </a>
</div>
</div>
<div bis_size='{"x":96,"y":5063,"w":1232,"h":48,"abs_x":456,"abs_y":5095}' className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-normal text-gray-500">
<p bis_size='{"x":96,"y":5095,"w":249,"h":16,"abs_x":456,"abs_y":5127}'>© 2024 FAM-PUR. Wszelkie prawa zastrzeżone.</p>
<div bis_size='{"x":1148,"y":5095,"w":179,"h":16,"abs_x":1508,"abs_y":5127}' className="flex gap-4 mt-4 md:mt-0">
<a bis_size='{"x":1148,"y":5095,"w":107,"h":16,"abs_x":1508,"abs_y":5127}' className="hover:text-gray-300 transition-colors" href="#">Polityka prywatności</a>
<a bis_size='{"x":1272,"y":5095,"w":56,"h":16,"abs_x":1632,"abs_y":5127}' className="hover:text-gray-300 transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
