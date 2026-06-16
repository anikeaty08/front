import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const floatingNav = document.getElementById('floating-nav');
      const aboutSection = document.getElementById('about-section');
      
      window.addEventListener('scroll', () => {
        if (!aboutSection) return;

        // Check if we scrolled past the About section
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If About section top is above the viewport (meaning we scrolled past it/it is currently visible at top)
        // Adjust logic: "After scrolling under the 'O mě' section"
        if (aboutPosition < 0) {
           floatingNav.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
        } else {
           floatingNav.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="md:h-[600px] overflow-hidden flex w-full h-[500px] pt-4 pr-4 pb-40 pl-4 relative items-center justify-center">
<div className="custom-pattern opacity-90 pt-1 pb-1 absolute top-0 right-0 bottom-1 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#05057e]/50 to-transparent pointer-events-none"></div>
<div className="md:pr-8 md:pl-8 md:pt-8 bg-[#FAFAF9] w-full max-w-3xl z-10 border-stone-200 border rounded-[2rem] pt-36 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="flex flex-col gap-0">
<div className="flex items-center gap-3 text-[#05057e] mb-2">
<iconify-icon className="" height="24" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
<span className="uppercase text-sm font-semibold tracking-widest">
              Portfolio 2025-2027
            </span>
</div>
<h1 className="md:text-7xl leading-[0.9] text-5xl font-semibold text-[#05057e] tracking-tight">
            Ahoj!
            <br/>
            Já jsem Filip,
          </h1>
<p className="md:text-2xl leading-relaxed text-xl text-stone-600 max-w-xl">
            Student KISKu, absolvent žurnalistiky a mediálních studií, kterého
            zajímá především design ve všech jeho podobách...a mimo jiné taky
            AI. Proto jsem se rozhodl toto portfolio vytvořit v AI webdesign
            nástroji Aura.build a Figmě.
          </p>
<div className="flex gap-4 mt-4">
<a className="hover:bg-[#040460] transition-colors flex items-center gap-2 text-lg font-medium text-[#F0E6C0] bg-[#05057e] rounded-full pt-3 pr-6 pb-3 pl-6" href="#semesters">
              Prohlédnout portfolio
              <iconify-icon className="" height="20" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<main className="md:p-8 -mt-12 z-20 w-full max-w-[1600px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative">

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 scroll-mt-24" id="semesters">

<a className="group relative flex flex-col h-[420px] pt-8 cursor-pointer" href="#sem1-section">
<div className="absolute top-0 left-0 w-40 h-10 bg-[#FF4522] rounded-t-2xl z-0 folder-tab group-hover:bg-[#ff5e3a] transition-colors border-t border-l border-r border-stone-900/10"></div>
<div className="absolute top-4 left-2 right-2 bottom-0 bg-white rounded-t-lg z-10 border border-stone-200 folder-paper transition-transform duration-500 flex flex-col p-6 shadow-sm">
<div className="flex justify-between items-start opacity-50">
<div className="w-12 h-12 border border-stone-300 rounded-full"></div>
<div className="h-12 w-[2px] bg-stone-200"></div>
</div>
<div className="mt-auto space-y-2">
<div className="h-2 w-full bg-stone-100 rounded"></div>
<div className="h-2 w-2/3 bg-stone-100 rounded"></div>
</div>
</div>
<div className="z-20 flex flex-col group-hover:translate-y-1 folder-transition group-hover:shadow-2xl bg-[#FF4522] w-full h-full border-stone-900/5 border rounded-b-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-xl justify-between">
<div className="aspect-square flex overflow-hidden w-full pt-6 pr-6 pb-6 pl-6 items-center justify-center"><svg className="w-full h-full object-contain drop-shadow-sm" fill="none" height="1639" viewbox="0 0 1272 1639" width="1272" xmlns="http://www.w3.org/2000/svg"><path d="M1051.07 119.064C1053.83 119.065 1056.07 121.303 1056.07 124.064V1593.54C1056.07 1618.39 1035.92 1638.54 1011.07 1638.54H45.418C20.5654 1638.54 0.418374 1618.39 0.417969 1593.54V164.064C0.417969 139.212 20.5652 119.064 45.418 119.064H1051.07ZM528.242 1551.89C508.859 1551.89 493.146 1566.23 493.146 1583.91C493.146 1601.6 508.859 1615.94 528.242 1615.94C547.625 1615.94 563.338 1601.6 563.339 1583.91C563.339 1566.23 547.625 1551.89 528.242 1551.89ZM67.3525 191.899C64.5913 191.899 62.3527 194.138 62.3525 196.899V1528.06C62.3529 1530.82 64.5914 1533.06 67.3525 1533.06H989.132C991.893 1533.06 994.131 1530.82 994.132 1528.06V845.512L1056.07 789.681V586.316L994.132 642.146V196.899C994.132 194.138 991.893 191.9 989.132 191.899H67.3525ZM994.132 845.512L994.131 845.513V642.147L994.132 642.146V845.512Z" fill="#E6E0D4"></path><rect fill="#E6E0D4" height="776.076" transform="rotate(-132.033 638.834 1099.81)" width="53.6771" x="638.834" y="1099.81"></rect><path d="M1228.32 568.434L1192.38 528.564L1231.42 493.371C1233.47 491.522 1236.63 491.686 1238.48 493.737L1267.72 526.179C1269.57 528.23 1269.41 531.391 1267.36 533.24L1228.32 568.434Z" fill="#E6E0D4"></path><path d="M575.065 1125.79C571.022 1127.01 567.388 1122.97 569.013 1119.08L589.072 1071L624.96 1110.82L575.065 1125.79Z" fill="#E6E0D4"></path><rect className="" fill="url(#paint0_linear_46_56)" fillOpacity="0.33" height="1639" width="1271"></rect><defs><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_46_56" x1="865" x2="-2.30064" y1="462" y2="716.409"><stop stop-color="#FF4522" stop-opacity="0"></stop><stop offset="1" stop-color="#FF4522"></stop></lineargradient></defs></svg></div>
<div className="mt-4">
<div className="flex text-[#E6E0D4] mb-1 items-center justify-between">
<span className="uppercase text-xs font-semibold tracking-widest opacity-80">
                  2025
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-[#E6E0D4] tracking-tight">
                1. semestr
              </h2>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[420px] pt-8 cursor-pointer" href="#sem2-section">
<div className="absolute top-0 left-0 w-40 h-10 bg-[#E6E0D4] rounded-t-2xl z-0 folder-tab group-hover:bg-[#ebe6dc] transition-colors border-t border-l border-r border-stone-900/10"></div>
<div className="absolute top-4 left-2 right-2 bottom-0 bg-white rounded-t-lg z-10 border border-stone-200 folder-paper transition-transform duration-500 flex flex-col p-6 shadow-sm">
<div className="grid grid-cols-2 gap-2 opacity-30">
<div className="aspect-square bg-stone-900 rounded-sm"></div>
<div className="aspect-square border border-stone-900 rounded-sm"></div>
</div>
</div>
<div className="relative z-20 bg-[#E6E0D4] w-full h-full rounded-b-[1.5rem] rounded-tr-[1.5rem] rounded-tl-md p-6 flex flex-col justify-between shadow-xl group-hover:translate-y-1 folder-transition border border-stone-900/5">
<div className="w-full aspect-square flex items-center justify-center p-6 overflow-hidden"><svg className="object-contain drop-shadow-sm w-[1600px] h-[1200px]" data-icon-replaced="true" fill="none" height="1200" strokeWidth="2" style={{color: 'rgb(28, 25, 23)', width: '1600px', height: '1200px'}} viewbox="0 0 1600 1200" width="1600" xmlns="http://www.w3.org/2000/svg"><mask fill="white" id="path-1-inside-1_49_75"><rect height="355" rx="5" width="755" x="168" y="207"></rect></mask><rect fill="#05057E" height="355" mask="url(#path-1-inside-1_49_75)" rx="5" stroke="#05057E" strokeLinejoin="round" stroke-miterlimit="2.9238" strokeWidth="72" width="755" x="168" y="207"></rect><mask fill="white" id="path-2-inside-2_49_75"><rect height="865" rx="5" width="409" x="1024" y="207"></rect></mask><rect height="865" mask="url(#path-2-inside-2_49_75)" rx="5" stroke="#05057E" strokeLinejoin="round" stroke-miterlimit="2.9238" strokeWidth="72" width="409" x="1024" y="207"></rect><mask fill="white" id="path-3-inside-3_49_75"><rect height="404" rx="5" width="755" x="168" y="668"></rect></mask><rect height="404" mask="url(#path-3-inside-3_49_75)" rx="5" stroke="#05057E" strokeLinejoin="round" stroke-miterlimit="2.9238" strokeWidth="72" width="755" x="168" y="668"></rect><mask fill="white" id="path-4-inside-4_49_75"><rect height="163" rx="5" width="755" x="168" y="909"></rect></mask><rect height="163" mask="url(#path-4-inside-4_49_75)" rx="5" stroke="#05057E" strokeLinejoin="round" stroke-miterlimit="2.9238" strokeWidth="72" width="755" x="168" y="909"></rect><path d="M1595 0C1597.76 1.03081e-05 1600 2.23858 1600 5V1155C1600 1179.85 1579.85 1200 1555 1200H45C20.1472 1200 9.66515e-07 1179.85 0 1155V45C1.54642e-05 20.1472 20.1472 0 45 0H1595ZM54 124C51.2386 124 49 126.239 49 129V1146C49 1148.76 51.2386 1151 54 1151H1546C1548.76 1151 1551 1148.76 1551 1146V129C1551 126.239 1548.76 124 1546 124H54ZM1366 34C1351.09 34 1339 46.0883 1339 61C1339 75.9117 1351.09 88 1366 88C1380.91 88 1393 75.9117 1393 61C1393 46.0883 1380.91 34 1366 34ZM1445 34C1430.09 34 1418 46.0883 1418 61C1418 75.9117 1430.09 88 1445 88C1459.91 88 1472 75.9117 1472 61C1472 46.0883 1459.91 34 1445 34ZM1524 34C1509.09 34 1497 46.0883 1497 61C1497 75.9117 1509.09 88 1524 88C1538.91 88 1551 75.9117 1551 61C1551 46.0883 1538.91 34 1524 34Z" fill="#05057E"></path><rect className="" fill="url(#paint0_linear_49_75)" fillOpacity="0.33" height="1200" width="1600"></rect><defs><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_49_75" x1="1449.5" x2="632.07" y1="144" y2="598.392"><stop stop-color="#E6E0D4" stop-opacity="0"></stop><stop offset="1" stop-color="#E6E0D4"></stop></lineargradient></defs></svg></div>
<div className="mt-4 absolute bottom-5 left-6 right-6">
<div className="flex text-[#05057E] mb-1 items-center justify-between">
<span className="uppercase text-xs font-semibold tracking-widest opacity-60">
                  2026
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-[#05057E] tracking-tight">
                2. semestr
              </h2>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[420px] pt-8 cursor-pointer" href="#sem3-section">
<div className="absolute top-0 left-0 w-40 h-10 bg-[#05057e] rounded-t-2xl z-0 folder-tab group-hover:bg-[#080890] transition-colors border-t border-l border-r border-stone-900/10"></div>
<div className="absolute top-4 left-2 right-2 bottom-0 bg-[#f7d2a1] rounded-t-lg z-10 border border-stone-200 folder-paper transition-transform duration-500 flex flex-col p-6 shadow-sm">
<div className="w-full h-full border-2 border-dashed border-[#05057e]/20 rounded flex items-center justify-center">
<span className="text-[#05057e] font-mono text-xs">HTML/CSS</span>
</div>
</div>
<div className="flex flex-col group-hover:translate-y-1 folder-transition bg-[#05057e] w-full h-full z-20 border-stone-900/5 border rounded-b-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative shadow-xl justify-between">

<div className="w-full aspect-square flex items-center justify-center p-6 overflow-hidden"><svg className="w-[1575px] h-[1349px] object-contain drop-shadow-sm" data-icon-replaced="true" fill="none" height="1349" strokeWidth="2" style={{width: '1575px', height: '1349px', color: 'rgb(28, 25, 23)'}} viewbox="0 0 1575 1349" width="1575" xmlns="http://www.w3.org/2000/svg"><path d="M1283 20C1283 8.95429 1291.95 0 1303 0H1483V1200H1283V20Z" fill="#F0E6C0"></path><path d="M20 1324C8.9543 1324 0 1315.05 0 1304L0 1254C0 1251.24 2.23858 1249 5 1249H1570C1572.76 1249 1575 1251.24 1575 1254V1304C1575 1315.05 1566.05 1324 1555 1324H20Z" fill="#F0E6C0"></path><path d="M987 220C987 208.954 995.954 200 1007 200H1187V1200H987V220Z" fill="#F0E6C0"></path><path d="M687 420C687 408.954 695.954 400 707 400H887V1200H687V420Z" fill="#F0E6C0"></path><path d="M87 820C87 808.954 95.9543 800 107 800H287V1200H87V820Z" fill="#F0E6C0"></path><path d="M387 620C387 608.954 395.954 600 407 600H587V1200H387V620Z" fill="#F0E6C0"></path><rect className="" fill="url(#paint0_linear_49_137)" fillOpacity="0.33" height="1349" width="1575"></rect><defs><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_49_137" x1="1310.28" x2="323.822" y1="175.061" y2="558.81"><stop stop-color="#05057E" stop-opacity="0"></stop><stop offset="1" stop-color="#05057E"></stop></lineargradient></defs></svg></div>
<div className="mt-4">
<div className="flex text-[#F0E6C0] mb-1 items-center justify-between">
<span className="uppercase text-xs font-semibold tracking-widest opacity-80">
                  2026
                </span>
<iconify-icon className="group-hover:opacity-100 transition-opacity duration-300 opacity-0" height="20" icon="solar:arrow-right-up-linear" style={{color: 'rgb(240, 230, 192)'}} width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-[#F0E6C0] tracking-tight">
                3. semestr
              </h2>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[420px] pt-8 cursor-pointer" href="#sem4-section">
<div className="absolute top-0 left-0 w-40 h-10 bg-[#F0E6C0] rounded-t-2xl z-0 folder-tab group-hover:bg-[#f5ebc5] transition-colors border-t border-l border-r border-stone-900/10"></div>
<div className="absolute top-4 left-2 right-2 bottom-0 bg-stone-50 rounded-t-lg z-10 border border-stone-200 folder-paper transition-transform duration-500 flex flex-col p-6 shadow-sm">
<div className="space-y-3">
<div className="w-full h-1 bg-stone-200"></div>
<div className="w-full h-1 bg-stone-200"></div>
<div className="w-full h-1 bg-stone-200"></div>
<div className="w-1/2 h-1 bg-stone-200"></div>
</div>
</div>
<div className="z-20 flex flex-col group-hover:translate-y-1 folder-transition bg-[#F0E6C0] w-full h-full border-stone-900/5 border rounded-b-[1.5rem] p-6 relative shadow-xl justify-between">

<div className="w-full aspect-square flex items-center justify-center p-6 overflow-hidden"><svg className="w-full h-full object-contain drop-shadow-sm" fill="none" height="1703" viewbox="0 0 1066 1703" width="1066" xmlns="http://www.w3.org/2000/svg"><path d="M1061 0C1063.76 0 1066 2.23858 1066 5V1395C1066 1419.85 1045.85 1440 1021 1440H45C20.1472 1440 0 1419.85 0 1395V45C0 20.1472 20.1472 0 45 0H1061ZM321 542C318.239 542 316 544.239 316 547V622C316 624.761 318.239 627 321 627H741C743.761 627 746 624.761 746 622V547C746 544.239 743.761 542 741 542H321ZM190 277C187.239 277 185 279.239 185 282V480C185 482.761 187.239 485 190 485H876C878.761 485 881 482.761 881 480V282C881 279.239 878.761 277 876 277H190Z" fill="#FF4522"></path><path d="M121 870C121 845.147 141.147 825 166 825H281V1435H121V870Z" fill="#FF4522"></path><path d="M281 1697.5C281 1702.01 275.492 1704.22 272.379 1700.95L201 1626L129.621 1700.95C126.508 1704.22 121 1702.01 121 1697.5V1489H281V1697.5ZM281 1437.33V1440H121V1437.33L201 1301L281 1437.33Z" fill="#FF4522"></path><path className="" d="M0 0H1066V1703H0V0Z" fill="url(#paint0_linear_57_193)" fillOpacity="0.33"></path><defs><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_57_193" x1="988.5" x2="48.2451" y1="97.9999" y2="183.005"><stop stop-color="#F0E6C0" stop-opacity="0"></stop><stop offset="1" stop-color="#F0E6C0"></stop></lineargradient></defs></svg></div>
<div className="mt-1 mb-1 absolute bottom-5 left-6 right-6">
<div className="flex text-[#FF4522] mb-1 items-center justify-between">
<span className="uppercase text-xs font-semibold tracking-widest opacity-60">
                  2027
                </span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-[#FF4522] tracking-tight">
                4. semestr
              </h2>
</div>
</div>
</a>
</div>

<section className="mt-24 mb-24 max-w-2xl mx-auto text-center px-4 relative scroll-mt-24" id="about-section">
<h2 className="text-4xl font-semibold text-[#05057e] tracking-tight mb-8">
          O mě
        </h2>
<div className="space-y-6 text-xl text-stone-600 leading-relaxed">
<p className="" style={{}}>
            Mám za sebou bakaláře na Mediálních studiích a žurnalistice, který
            mi dal mnoho zkušeností a tou nejlepší byl semestr strávený v
            redakci Českého rozhlasu Brno. A ještě před nástupem na KISK jsem si
            udělal „výučňák“ z Truhlařiny, ke které mě to už nějakou dobu táhlo.
            Byla to dobrá zkušenost, truhlařina mě baví a chci se jí věnovat i
            dál. A zároveň zkrácené studium na učilišti bylo zajímavým
            propíchnutím sociální bubliny. A teď jsem tady a chci se pokusit
            proniknout co nejvíc zejména do hlubin designu:D
          </p>
<p className="">
            A co dělám když nestuduju? Vyřezávám si ze dřeva, vedu tábory pro
            děti a scházím se s lidmi co mám rád. A taky moc rád cestuju,
            nejradši tam kde je to trochu jiné než u nás a né tak turistické.
            Třeba na Balkán, do Moldavska nebo Gruzie. Cestování totiž přináší
            nejen spoustu zážitků a zkušeností, ale vděčnost za to, jak je doma
            dobře.
          </p>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="sem1-section">
<div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl overflow-hidden relative">

<div className="absolute top-0 left-0 right-0 h-3 bg-[#FF4522]"></div>
<div className="md:p-16 pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-stone-100 pb-12">
<div className="w-20 h-20 bg-[#FF4522] rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-white">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="tablet" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(230, 224, 212)'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
</div>
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
                  1. semestr
                </h2>
<p className="leading-relaxed text-xl text-stone-600 max-w-2xl" style={{}}>
                  První semestr jak to tak bývá, je plný nových věcí. Neměl jsem
                  základy z bakalářského studia KISKu a tak jsem postupně
                  objevoval co všechno tento obor obsahuje. Taky přístup
                  vyučujících a celé katedry byl pro mě změnou, a to rozhodně
                  pozitivní. A vlastně obecně i návrat na VŠ po krátké pauze byl
                  trochu nový. Dozvěděl jsem se spoustu zajímavých a důležitých
                  věcí. A zároveň, díky svému nadšení, jsem to trošku přepálil s
                  množstvím předmětů.
                </p>
</div>
</div>
<div className="columns-1 md:columns-2 gap-4 space-y-4">

<details className="break-inside-avoid group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex cursor-pointer select-none pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="font-semibold text-stone-800">
                    Informační vědy
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4523]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Nejdřív jsem si říkal z jakého pohledu bude o informacích řeč.
                  Do teď jsem vnímal informace díky bakalářskému studiu hlavně z
                  novinářského pohledu. A pak se přede mnou objevila široká
                  paleta Informačních věd. Luciano Floridi a filosofie
                  informace, informační chudoba, digitální humanitní vědy a
                  další mi rozšířili obzory a tak nějak pomyslně usadili do
                  celého oboru. Highlightem předmětu byli workshopy a
                  participativní učebnice, díky tomu jsme se mohli netradičním
                  způsobem dozvědět něco víc a zároveň se trochu připravit na
                  zkoušku. Já jsem se přidal k tématu informační války, jelikož
                  jsem měl pocit, že je mi ze všech témat nejblíž. A bylo skvělá
                  volba. I díky tomu to byl skvělý úvod do studia, který
                  rozšířil obzory a myslím, že nabídl vědomosti, které se budou
                  hodit.
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Design informačních služeb, rozhraní a interakcí
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Vzhledem k tomu, že designová profilace je na KISKu „mým
                  favoritem“, toto byl můj nejoblíbenější povinný předmět
                  semestru. Každá hodina stála za to, člověk nejen získal
                  teoretické znalosti o tomu jak probíhá výzkum, jaké jsou směry
                  designu a jak do toho dnes zasahuje AI , ale taky díky ruzným
                  aktivitám byla možnost si některé designové věci sám
                  vyzkoušet. Předmět moje nadšení pro design jen posílil a
                  doufám, že se skrze další předměty naučím víc. Závěrečný úkol
                  v podobě anotovaného portfolia, byl zajímavý, nicméně jsem
                  nejdřív nevěděl jak ho uchopit. Jakmile jsem vybral téma –
                  městské tepelné ostrovy, už jsem tomu začal přicházet na
                  kloub. S portfoliem jsem ale nebyl úplně spokojený, chtěl jsem
                  totiž stihnout předtermín, a nepřišlo mě nedotažené. O to
                  větší překvapení tak pro mě bylo nadšení Romana Sellnera
                  Novotného z něj:D
                  <a className="p-5 pt-0 text-stone-800 leading-relaxed text-[#FF4523]" href="https://drive.google.com/file/d/1d16yO7RKnOs9dj_OsUwNGyFw0bCFSCS-/view?usp=sharing" target="_blank">
                    Na anot. portfolio se můžete podívat zde.
                  </a>
</div>
</details>

<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Literatura, knihovní procesy a trh
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Tohoto předmětu jsem se zpočátku trochu obával. Nebo spíš jsem
                  nevěděl, co od něj čekat, protože knihovnictví, je mi ze všech
                  čtyř profilací asi nejvzdálenější. A tak jsem se snažil najít
                  si k němu cestu. A našel jsem ji na samotném konci. To, co mě
                  nejvíc oslovilo a něco předalo, byla ediční část, resp. práce
                  na ediční výzvě. U ní jsem se si našel k předmětu cestu a
                  začal lépe chápat i věci probírané předtím. I když mě to do
                  této sféry netáhne, ediční výzva byl dobrý úkol a cenná
                  zkušenost s prací v týmu. A celkově mě přišlo, že pokud bych
                  se chtěl ediční/nakladatelské činnosti věnovat, toto byla
                  dobrá průprava.
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Seminář k diplomové práci I: Východiska a metodologie
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  První seminář k diplomce, který projde všechno a zároveň to jen tak neprolítne? To mi na bakaláři trošku chybělo, ale
                  tady jsem to dostal. Každá profilace, typy výzkumů, jak nad tím vším přemýšlet a praktické tipy – to vše bylo fajn. A
                  taky to, že jsou přednášky nahrávané se ještě při práci na diplomce může hodit. Ale ze samotné diplomky mám obavy.
                  Bakalářka byla asi nejhorší část studia, ale věřím, že práce na diplomce může být může být jiné (lepší) kafe. No a na
                  závěr to nejzajímavější – portfolio. Myslím, že to je výborná věc, díky které člověk neodchází s prázdnou, ohlédne se za
                  studiem a třeba se to může hodit i mimo školu, nějak kariérně. A navíc, koho to baví, tak si může vyhrát taky s formou
                  portfolia a udělat si ho přesně podle obrazu svého. Hledal jsem v čem bych ho udělal a pak jsem našel nový a zatím ještě
                  né moc známý AI nástroj Aura. Build a řekl jsem si že, to zkusím s ním. Přece jen se AI stává velkou součástí i ISK.
                  Těžko říct k čemu všemu mi portfolio může být, ale prozatím mě práce na něm opravdu bavila.
                </div>
</details>

<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex cursor-pointer select-none pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="font-semibold text-stone-800">
                    Around the World with Academic Libraries
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Tento předmět se mi hodnotí těžko, jelikož akademické knihovny nejsou tím tématem, které bych si vybral, kdyby byl předmět volitelný. Na druhou stranu obdivuji tu práci, která zatím je – domlouvání hostů z různých částí světa na synchronní online přednášky. Nakonec musím říct, že jsem se dozvěděl nové věci o fungování akademických knihoven, o které bych se jinak asi nezajímal. Navíc díky zahraničním hostům to bylo zajímavější. Nejvíce mě zaujala přednáška Harrieho van der Meer, o roli knihoven při nástupu AI, o tom, jak by měli ohledně AI vzdělávat nejen akademickou obec. To bylo zajímavé í díky pohledu na nějakou edukační a morální povinnost knihoven potažmo univerzit být v tomto smyslu součástí vývoje AI. Takže jsem moc rád, že mi tento předmět i přes moji skepsi předal zajímavé informace a myšlenky. I tak si ale myslím, že povinný předmět v angličtině by měl být na téma, které spojuje všechny profilace nebo je mimo ně ale svým tématem bude zajímavý a prospěšný pro většinu studentů.
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Od UČO k IČO: Úvod do podnikání
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Toto je předmět, který se přímo netýká našeho oboru, a vlastně
                  asi žádného na této fakultě, ale myslím, že by o něm měli
                  vědět všichni, kteří přemýšlí o tom, že by možná nechtěli být
                  zaměstnanci ale živnostníci. Skvělý výběr hostů z různých
                  oboru na volné noze a na různá témata a aspekty podnikání.
                  Myslím, že jsem se dozvěděl spoustu věcí a pomohlo mi to
                  srovnat si různé priority a obecně pohled na to co bych rád po
                  studiu dělal.
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Nástroje a metody datové analytiky
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  S analytickými nástroji jsem neměl žádné zkušenosti. Excel nepočítám, jelikož jsem v něm nikdy předtím databáze ani
                  neprohlížel. Takže to pro mě, hlavně ze začátku, bylo náročné zorientovat se ve všech pojmech funkcích a nových
                  programech. Ale postupně jsem se do toho dostal a myslím, že mi tento předmět dal dostatečný základ do analytických
                  nástrojů a jak takovou analýzu dělat. Musím říct, že takové hodně prakticky zaměřené předměty mám hodně rád a myslím, že by jich mělo být víc. Průběžné úkoly, které člověka krok po kroku učí různé oblasti a nakonec závěrečný úkol, ve kterém se zužitkují znalosti nabyté z dílčích úkolů i celého semestru..určitě by bylo skvělé mít podobně praktický, na nástroje orientovaný předmět i z designové profilace. Bohužel to vypadá že příště už nebude vyučovaný ani tento předmět…Ale to se tak úplně nepatří. Za datového analytika bych se nepovažoval, ale myslím, že právě díky tomuhle předmětu bych se do této oblasti při dalším vzdělávání mohl ponořit. A kdo ví člověk to může využít i mimo kariéru. Hlavně díky závěrečnému úkolu v Power BI, který mě sice docela potrápil, ale naučil ještě jednou tolik co celý semestr. 
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Elements of AI
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Kurz Elements of AI hodnotím pozitivně a jsem rád, že jsem si ho prošel. Líbilo se mi, jak dokázal
                  vysvětlit teoretické základy umělé inteligence, a bavilo mě i zpracování jednotlivých úkolů, které teorii hezky
                  doplňovaly a pomáhaly látku lépe pochopit. Trochu mě překvapilo, že byl vlastně trošku matematický, i když to k tomu samozřejmě patří. Je super že vznikla spolupráce napříč organizacemi, která to umožnila. Byla to pro mě přínosná zkušenost, zvlášť v dnešní době kdy je AI všude a to i snad v každém předmětu na KISKu. Když už jsem u AI a KISKu, tenhle semestr jsem se o i s AI naučil opravdu hodně. Ovládat různorodé nástroje, jak se jí ptát na jakých základech funguje, různé tipy jak ji nastavit.. je toho dost a je to potřebné, už teď se mi to hodí. Jo a možná zkusím i navazující kurz Building AI.
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF4522]/30" name="sem1-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Digitální hry - analýza a design
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#FF4522]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  Game design já zajímavá disciplína v rámci designu, a tak mě tento předmět zaujal, a to i díky vyučujícímu hernímu
                  vývojáři Zdeňku Záhorovi. Bohužel jsem to tenhle semestr přepálil s množstvím předmětů, a tak jsem kvůli tomu tento
                  předmět upozadil. A musím přiznat, že jsem si tak z něj určitě neodnesl maximum. Páteří předmětu je týmový projekt v
                  podobě designování prototypu hry, který týmy postupně průběhu semestru na playtest hodinách testují a dál vyvíjejí. A to je asi to hlavní, co jsem si z toho odnesl – to jak funguje herní vývoj, jak je to běh na dlouhou trať a náročné
                  balancovat různé aspekty hry. A taky je to skvělý typ projektu na trénování sám sebe pro práci v týmu. Tady člověk musí hledat a dělat hodně kompromisů, protože sto lidí – sto chutí, a taky proto, že každý vývoj má svoje limity. V tomhle je to hodně cenná zkušenost, práce, kde člověk musí vysvětlovat, argumentovat, ustupovat neustále měnit a vymýšlet něco nového, neupnout se k jedné konkrétní představě a nechat ego někde vzadu. Super zkušenost, které se vyrovná…já nevím…maximálně vydání vlastní hry:D
                </div>
</details>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="sem2-section">
<div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl overflow-hidden relative">
<div className="absolute top-0 left-0 right-0 h-3 bg-[#E6E0D4]"></div>
<div className="p-8 md:p-16">
<div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-stone-100 pb-12">
<div className="flex shrink-0 text-[#05057e] bg-[#E6E0D4] w-20 h-20 rounded-2xl shadow-lg items-center justify-center">
<svg className="w-[46px] h-[46px]" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="web-line" height="46" strokeWidth="2" style={{width: '46px', height: '46px', color: 'rgb(5, 5, 126)'}} viewbox="0 0 24 24" width="46" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path className="" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2" fill="currentColor"></path></g></svg>
</div>
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
                  2. semestr
                </h2>
<p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
                  Prohloubení znalostí v oblasti výzkumu a první větší projekty.
                  Důraz na metodologii a sběr dat.
                </p>
</div>
</div>
<div className="columns-1 md:columns-2 gap-4 space-y-4">
<details className="break-inside-avoid group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-stone-400" name="sem2-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Informační chování
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-stone-900" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  To se teprv uvidí...
                </div>
</details>
<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-stone-400" name="sem2-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Učící se společnost
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-stone-900" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  To se teprv uvidí...
                </div>
</details>

<details className="group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-stone-400" name="sem2-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Seminář k diplomové práci II: Struktura projektu
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-stone-900" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  To se teprv uvidí...
                </div>
</details>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="sem3-section">
<div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl overflow-hidden relative">
<div className="absolute top-0 left-0 right-0 h-3 bg-[#05057e]"></div>
<div className="p-8 md:p-16">
<div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-stone-100 pb-12">
<div className="w-20 h-20 bg-[#05057e] rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-[#f7d2a1]">
<svg className="w-[40px] h-[40px]" data-icon-replaced="true" data-icon-set="solar" data-solar="chart-2-outline" height="40" strokeWidth="2" style={{width: '40px', height: '40px', color: 'rgb(240, 230, 192)'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M18.955 1.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v13.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152V3.955c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043zm-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v13c0 .493.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.003.002l.007.003c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997V4c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042M11.955 4.25h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v10.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.432 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152V6.955c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.132 1.573l.003-.001l-.003 12.355l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997V7c0-.493.002-.787.03-.997a.7.7 0 0 1 .042-.177zm0 12.354l.003-12.355l.003-.002l.007-.003a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03s.787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997v10c0 .493-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03s-.787-.002-.997-.03a.7.7 0 0 1-.177-.042zM4.955 8.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v6.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04s.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47s.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-6.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04s-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043zm-1.13 1.572l-.002.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v6c0 .493.002.787.03.997a.7.7 0 0 0 .042.177v.002l.004.002l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.002-.004l.003-.006a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-6c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042" fill="currentColor" fill-rule="evenodd"></path><path d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</div>
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
                  3. semestr
                </h2>
<p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
                  Technické dovednosti a kódování. Zaměření na frontendové
                  technologie a přístupnost webu.
                </p>
</div>
</div>
<div className="columns-1 md:columns-2 gap-4 space-y-4">
<details className="break-inside-avoid group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#05057e]/30" name="sem3-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Seminář k diplomové práci III: Tvorba textu
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-[#05057e]" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  To se teprv uvidí...
                </div>
</details>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="sem4-section">
<div className="bg-white rounded-[2.5rem] border border-stone-200 shadow-xl overflow-hidden relative">
<div className="absolute top-0 left-0 right-0 h-3 bg-[#F0E6C0]"></div>
<div className="p-8 md:p-16">
<div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-stone-100 pb-12">
<div className="w-20 h-20 bg-[#F0E6C0] rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-stone-900">
<svg className="w-[40px] h-[40px]" data-icon-replaced="true" data-icon-set="solar" data-solar="book-bookmark-minimalistic-outline" height="40" strokeWidth="2" style={{width: '40px', height: '40px', color: 'rgb(255, 69, 34)'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M9.945 1.25h4.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M6.25 2.96c-.392.105-.645.253-.841.449c-.277.277-.457.665-.556 1.4C4.752 5.562 4.75 6.564 4.75 8v7.926c.352-.246.75-.434 1.177-.548q.155-.042.323-.067zm1.5-.183V15.25h11.5V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103h-4c-.908 0-1.642 0-2.25.027m11.5 13.973h-5.5v2.808c0 .111 0 .27-.02.406a.94.94 0 0 1-.445.683a.96.96 0 0 1-.783.072c-.13-.04-.272-.109-.378-.159l-.025-.012L11 20.026l-1.1.522l-.024.012c-.106.05-.248.118-.378.159a.96.96 0 0 1-.783-.072a.94.94 0 0 1-.444-.683c-.021-.136-.021-.295-.021-.406V16.75h-.352c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422c.015.354.039.665.076.943c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.083-.615.099-1.395.102-2.441m-9.5 0v2.21l.75-.357l.008-.004a1.1 1.1 0 0 1 .492-.13a1.1 1.1 0 0 1 .5.134l.75.356V16.75z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
                  4. semestr
                </h2>
<p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
                  Závěrečné projekty, pokročilé techniky a příprava na
                  diplomovou práci. Experimentální design.
                </p>
</div>
</div>
<div className="columns-1 md:columns-2 gap-4 space-y-4">
<details className="break-inside-avoid group bg-stone-50 border border-stone-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#d4c8a0]" name="sem4-subjects">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-semibold text-stone-800">
                    Seminář k diplomové práci IV: Finalizace textu
                  </span>
<iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-45 group-open:text-stone-900" icon="solar:add-circle-linear" width="24"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  To se teprv uvidí...
                </div>
</details>
</div>
</div>
</div>
</section>
</main>

<footer className="max-w-[1600px] mx-auto w-full py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm font-medium border-t border-stone-200 mt-12">
<p className="">© 2026 Filip Portfolio. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-900 transition-colors" href="https://www.instagram.com/filip__ziky/">Instagram</a>
</div>
</footer>

<div className="fixed bottom-8 left-8 z-50 transition-all duration-500 transform translate-y-32 opacity-0 pointer-events-none" id="floating-nav">
<div className="group relative">

<div className="absolute -inset-0.5 bg-gradient-to-r from-[#f7d2a1] to-white rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300">
</div>

<a className="flex items-center gap-3 hover:bg-[#040460] transition-all hover:scale-105 active:scale-95 text-[#F0E6C0] bg-[#05057e] rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-2xl" href="#top">
<span className="font-medium">Zpět na úvod</span>

<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="round-alt-arrow-up-linear" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(240, 230, 192)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path d="m15 13.5l-3-3l-3 3" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</a>
</div>
</div>



    </>
  );
}
