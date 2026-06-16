import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchSegment(segment) {
            // Animasyonlar için ufak bir bekleme ve sınıf değişimi eklenebilir. Şu an direkt display değiştiriyor.
            const pages = ['aday', 'aile', 'kurum'];
            pages.forEach(p => {
                const el = document.getElementById('page-' + p);
                if(p === segment) {
                    el.classList.remove('hidden');
                    el.classList.add('block');
                } else {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });

            const body = document.getElementById('main-body');
            const footer = document.getElementById('main-footer');
            const bar = document.getElementById('segment-bar');

            // Universe Renk Temaları Update
            if(segment === 'aday') { 
                body.className = 'bg-[#FAF6F1] text-zinc-800 antialiased selection:bg-[#4A7C59]/20 transition-colors duration-700 font-sans'; 
                footer.className = 'bg-zinc-900 text-zinc-400 py-16 border-t border-white/5 transition-colors duration-500'; 
                bar.className = 'w-full bg-[#FAF6F1]/80 backdrop-blur-md border-b border-zinc-200/50 text-zinc-500 text-xs font-medium relative z-50 transition-colors duration-500';
            }
            if(segment === 'aile') { 
                body.className = 'bg-[#FAFAFA] text-zinc-800 antialiased selection:bg-[#C17B54]/20 transition-colors duration-700 font-sans'; 
                footer.className = 'bg-zinc-900 text-zinc-400 py-16 border-t border-white/5 transition-colors duration-500'; 
                bar.className = 'w-full bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50 text-zinc-500 text-xs font-medium relative z-50 transition-colors duration-500';
            }
            if(segment === 'kurum'){ 
                body.className = 'bg-slate-900 text-slate-200 antialiased selection:bg-[#C4A35A]/20 transition-colors duration-700 font-sans'; 
                footer.className = 'bg-slate-950 text-slate-400 py-16 border-t border-white/5 transition-colors duration-500'; 
                bar.className = 'w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-400 text-xs font-medium relative z-50 transition-colors duration-500';
            }

            // Tab Stilleri
            const tabs = ['aday', 'aile', 'kurum'];
            const activeColors = {'aday': 'border-[#4A7C59] text-zinc-900', 'aile': 'border-[#C17B54] text-zinc-900', 'kurum': 'border-[#C4A35A] text-white'};
            const inactiveColors = {'aday': 'border-transparent hover:text-zinc-800', 'aile': 'border-transparent hover:text-zinc-800', 'kurum': 'border-transparent hover:text-slate-300'};
            
            tabs.forEach(t => {
                const el = document.getElementById('tab-' + t);
                // Kurum sekmesinde navbar dark moda geçtiği için tab renklerini de ona göre ayarlıyoruz.
                if(segment === 'kurum' && t !== segment) {
                    el.className = 'h-full flex items-center border-b-[1.5px] transition-all duration-300 border-transparent text-slate-400 hover:text-white';
                } else {
                    el.className = 'h-full flex items-center border-b-[1.5px] transition-all duration-300 ' + (t === segment ? activeColors[segment] : inactiveColors[t]);
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-[#FAF6F1]/80 backdrop-blur-md border-b border-zinc-200/50 text-zinc-500 text-xs font-medium relative z-50 transition-colors duration-500" id="segment-bar">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-10 flex items-center justify-between">
<div className="flex items-center space-x-6 h-full">
<button className="h-full flex items-center border-b-[1.5px] border-[#4A7C59] text-zinc-900 transition-all duration-300" id="tab-aday" onclick="switchSegment('aday')">Öğrenci &amp; Aday</button>
<button className="h-full flex items-center border-b-[1.5px] border-transparent hover:text-zinc-800 transition-all duration-300" id="tab-aile" onclick="switchSegment('aile')">Ebeveyn</button>
<button className="h-full flex items-center border-b-[1.5px] border-transparent hover:text-zinc-800 transition-all duration-300" id="tab-kurum" onclick="switchSegment('kurum')">Kurumsal</button>
</div>
<div className="hidden md:flex items-center gap-2 text-zinc-400 tracking-tight">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Bilimsel Altyapılı Değerlendirme</span>
</div>
</div>
</div>

<div className="block transition-opacity duration-500" id="page-aday">

<nav className="sticky top-0 z-40 w-full bg-[#FAF6F1]/70 backdrop-blur-xl border-b border-zinc-200/50 transition-all">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<iconify-icon className="text-2xl text-[#4A7C59] group-hover:rotate-12 transition-transform duration-500" icon="solar:infinity-bold-duotone"></iconify-icon>
<div className="flex flex-col leading-none tracking-tighter text-zinc-900 font-semibold text-sm">
<span>Kendimi</span>
<span className="text-zinc-500 font-medium">Keşfediyorum</span>
</div>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors duration-300" href="#nasil">Nasıl Çalışır</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#alanlar">Alanlar</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Blog</a>
</div>
<button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-2">
<span>Keşfe Başla</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="relative w-full min-h-[85vh] flex items-center overflow-hidden py-20">

<div className="absolute right-0 top-0 w-full h-full z-0 opacity-40 pointer-events-none" style={{background: 'radial-gradient(circle at 80% 20%, rgba(127, 176, 105, 0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.05) 0%, transparent 40%)'}}></div>
<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-[#4A7C59] animate-pulse"></span>
                        Senin Haritan, Senin Yolun
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                        30 özelliğin,<br/> yüzlerce bağlantı,<br/> tek bir <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A7C59] to-[#7FB069]">harita.</span>
</h1>
<h2 className="text-xl md:text-2xl font-normal tracking-tight text-zinc-500 leading-snug mb-8 max-w-xl">
                        Kişiliğinden yeteneklerine, değerlerinden ilgi alanlarına — seni sen yapan her şeyi bir araya getiriyoruz.
                    </h2>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A7C59] text-white rounded-full font-medium text-sm hover:bg-[#3A6347] hover:shadow-[0_8px_24px_rgba(74,124,89,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                            Ücretsiz Keşfe Başla
                        </button>
<button className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-zinc-700 rounded-full font-medium text-sm border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300 shadow-sm">
                            Örnek Raporu İncele
                        </button>
</div>
</div>

<div className="flex-1 w-full relative h-[400px] lg:h-[500px] perspective-1000 hidden md:block">
<div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 flex flex-col gap-6 transform hover:rotate-1 hover:scale-[1.02] transition-all duration-700">
<div className="flex justify-between items-center border-b border-zinc-100 pb-4">
<div className="w-1/3 h-2 bg-zinc-200 rounded-full"></div>
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:menu-dots-bold"></iconify-icon></div>
</div>
<div className="flex-1 flex gap-4">
<div className="w-1/3 h-full bg-gradient-to-b from-[#4A7C59]/10 to-transparent rounded-2xl border border-[#4A7C59]/20 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#4A7C59]/20 backdrop-blur-md rounded-t-2xl"></div>
</div>
<div className="flex-1 flex flex-col gap-4">
<div className="w-full h-1/2 bg-white rounded-2xl shadow-sm border border-zinc-100 p-4 flex flex-col justify-end">
<div className="w-1/2 h-2 bg-zinc-100 rounded-full mb-2"></div>
<div className="w-3/4 h-2 bg-zinc-200 rounded-full"></div>
</div>
<div className="w-full h-1/2 bg-gradient-to-br from-[#7FB069]/10 to-transparent rounded-2xl border border-[#7FB069]/20 p-4"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="nasil">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-zinc-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex items-center justify-center group">

<div className="w-2/3 h-2/3 border border-zinc-100 rounded-2xl relative bg-zinc-50/50 shadow-inner overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#4A7C59]/20 to-transparent rounded-full blur-2xl"></div>
<div className="absolute bottom-4 left-4 right-4 h-1/3 bg-white/60 backdrop-blur-md border border-white rounded-xl p-4 flex gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100"></div>
<div className="flex-1 flex flex-col gap-2 justify-center">
<div className="w-1/2 h-1.5 bg-zinc-200 rounded-full"></div>
<div className="w-1/3 h-1.5 bg-zinc-200 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#FAF6F1] border border-zinc-200 flex items-center justify-center mb-6 text-[#4A7C59]">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.15]">Sen bir kutuya sığmazsın.</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 mb-8 leading-relaxed">Sadece ne istediğini değil, neden istediğini de anlamak için 30 farklı özelliğine bakıyoruz.</h2>
<p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed">
                            Kişiliğin, ilgi alanların, değerlerin, yeteneklerin — hepsi ayrı bir hikâye anlatıyor. Biz bunları birlikte okuyoruz. Çünkü sen çok boyutlusun ve potansiyelin tek bir testin sınırlarına sığmayacak kadar değerli.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white/50 border-y border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
<span className="text-xs font-semibold tracking-widest uppercase text-[#4A7C59] mb-4 block">Bilimsel Temel</span>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.15]">30 özellik. 7 bilimsel yapı.</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 mb-16 leading-relaxed max-w-2xl mx-auto">Kişiliğinden yeteneklerine, değerlerinden duygusal zekâna — seni tanımak için derinlere iniyoruz.</h2>
<div className="flex flex-wrap justify-center gap-4 md:gap-6">

<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-[#4A7C59] mb-4">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">Kişilik</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-[#7FB069] mb-4">
<iconify-icon className="text-2xl" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">İlgi Alanları</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-[#D4A574] mb-4">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">Değerler</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 mb-4">
<iconify-icon className="text-2xl" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">Bilişsel</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-[#4A7C59] mb-4">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700 text-center leading-tight">Karar Güveni</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 mb-4">
<iconify-icon className="text-2xl" icon="solar:emoji-funny-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">Dyg. Zeka</span>
</div>
<div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 w-36 cursor-default">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-[#D4A574] mb-4">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-700">Adaptasyon</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #2D2D2D 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
<div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-zinc-100 flex items-center justify-center mb-10 transform rotate-12">
<iconify-icon className="text-4xl text-[#4A7C59]" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">Tek tek değil, birlikte anlamlı.</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 mb-10 leading-relaxed">Özelliklerinin arasındaki yüzlerce bağlantı, seni daha net görünür kılıyor.</h2>
<div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-white/60 text-sm md:text-base font-light text-zinc-700 leading-relaxed text-left md:text-center">
<span className="font-medium text-zinc-900">Analitik düşünmen</span> güçlü olabilir ama onu gerçekten güçlü yapan, <span className="font-medium text-[#4A7C59]">sosyal zekânla</span> birleşmesi. Yaratıcılığın yüksek olabilir ama onu anlamlı kılan, hangi değerlerle beslendiği. Bu kombinasyon, yalnızca sana ait eşsiz bir formül.
                </div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200/50" id="alanlar">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-2xl">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-4 leading-[1.1]">8 ana alan. 32 yol.</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 leading-snug">Profilin, seni 634 program arasından en doğru yöne odaklıyor.</h2>
</div>
<button className="shrink-0 text-sm font-medium text-[#4A7C59] hover:text-zinc-900 transition-colors flex items-center gap-1 group">
                        Tüm alanları gör
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4A7C59]/5 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-6 text-[#4A7C59] border border-zinc-100 group-hover:bg-[#4A7C59] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-2">Sağlık Bilimleri</h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed">İnsan hayatına dokunan, şifa odaklı kariyer yolları.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7FB069]/5 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-6 text-[#7FB069] border border-zinc-100 group-hover:bg-[#7FB069] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-2">Mühendislik</h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed">Sistemleri anlayan, tasarım ve inşa odaklı alanlar.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4A574]/5 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-6 text-[#D4A574] border border-zinc-100 group-hover:bg-[#D4A574] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-2">Sosyal Bilimler</h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed">Toplumu, kültürü ve insan davranışını inceleyen yollar.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-300/10 to-transparent rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-6 text-zinc-600 border border-zinc-100 group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:palette-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-2">Sanat &amp; Tasarım</h3>
<p className="text-xs font-light text-zinc-500 leading-relaxed">Yaratıcılığın ve estetiğin form bulduğu disiplinler.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">Raporunla derinleş.</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 mb-10 leading-snug max-w-2xl mx-auto">60-70 sayfalık, sana özel bir rehber. Güçlü yanlarından kariyer yoluna, rol modellerden kişisel tavsiyelere.</h2>

<div className="flex justify-center items-center gap-0 md:gap-4 mb-16 relative perspective-1000 h-[300px]">
<div className="absolute md:relative w-48 md:w-56 aspect-[3/4] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-200/60 transform -rotate-12 md:-rotate-6 -translate-x-16 md:translate-x-0 translate-y-4 opacity-80 backdrop-blur-md"></div>
<div className="absolute md:relative w-56 md:w-64 aspect-[3/4] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.08)] border border-white z-10 flex flex-col p-6">
<div className="w-1/3 h-1.5 bg-[#4A7C59] rounded-full mb-6"></div>
<div className="w-full h-16 bg-zinc-50 rounded-lg mb-4 border border-zinc-100"></div>
<div className="w-3/4 h-1.5 bg-zinc-200 rounded-full mb-3"></div>
<div className="w-1/2 h-1.5 bg-zinc-200 rounded-full mb-3"></div>
<div className="w-2/3 h-1.5 bg-zinc-200 rounded-full"></div>
</div>
<div className="absolute md:relative w-48 md:w-56 aspect-[3/4] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-zinc-200/60 transform rotate-12 md:rotate-6 translate-x-16 md:translate-x-0 translate-y-4 opacity-80 backdrop-blur-md"></div>
</div>
<div className="flex flex-col items-center">
<button className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-4">
                        Tam Raporunu Al
                    </button>
<span className="text-xs font-light text-zinc-400">Tek seferlik ödeme. Sınırsız erişim.</span>
</div>
</div>
</section>
</div>

<div className="hidden transition-opacity duration-500 bg-[#FAFAFA]" id="page-aile">
<nav className="sticky top-0 z-40 w-full bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-zinc-200/50 transition-all">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<iconify-icon className="text-2xl text-[#C17B54] group-hover:rotate-12 transition-transform duration-500" icon="solar:infinity-bold-duotone"></iconify-icon>
<div className="flex flex-col leading-none tracking-tighter text-zinc-900 font-semibold text-sm">
<span>Kendimi</span>
<span className="text-zinc-500 font-medium">Keşfediyorum</span>
</div>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Nasıl Yardımcı Olur</a>
<a className="hover:text-zinc-900 transition-colors duration-300" href="#">Örnek Rapor</a>
</div>
<button className="bg-[#C17B54] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#A8673F] hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2">
                    Çocuğunuz İçin Başlayın
                </button>
</div>
</nav>
<section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
<div className="max-w-3xl mx-auto text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm text-xs font-medium text-zinc-600 mb-8">
<iconify-icon className="text-[#C17B54] text-base" icon="solar:shield-user-linear"></iconify-icon>
                    Ebeveyn Rehberliği
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                    Çocuğunuz için <br/> en iyisini istemeniz <span className="text-[#C17B54]">çok doğal.</span>
</h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-zinc-500 leading-snug mb-8">
                    Doğru yönlendirme, doğru zamanlama, doğru bilgi — birlikte bulacağız.
                </h2>
<p className="text-sm md:text-base font-light text-zinc-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                    Her ebeveyn aynı soruyu sorar: "Çocuğum doğru tercihi yapabilecek mi?" Bu soru, sevginizin bir parçası. Biz bunu somut bir rehberliğe dönüştürmek için buradayız.
                </p>
</div>

<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h1 className="text-2xl md:text-4xl font-semibold tracking-tighter text-zinc-900 mb-3">Geleceğe yatırım.</h1>
<h2 className="text-sm md:text-base font-normal tracking-tight text-zinc-500">Bir özel ders ücreti. Yıllar boyu sürecek rehberlik.</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Bireysel Paket</h3>
<p className="text-xs text-zinc-500 font-light mb-8 flex-1">Çocuğunuzun 60 sayfalık özel raporu ve temel aile bilgilendirme notu.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-600 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> 60+ Sayfa Kişisel Rapor</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Temel Aile Özeti</li>
</ul>
<button className="w-full py-3 bg-zinc-50 border border-zinc-200 text-zinc-800 rounded-xl font-medium text-sm hover:bg-zinc-100 transition-colors">Seç</button>
</div>
<div className="bg-[#C17B54]/5 p-8 rounded-3xl border border-[#C17B54]/20 shadow-sm relative flex flex-col transform md:-translate-y-2">
<div className="absolute -top-3 left-8 bg-[#C17B54] text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm">En Kapsamlı</div>
<h3 className="text-xl font-semibold text-[#C17B54] mb-2 mt-2">Aile Paketi</h3>
<p className="text-xs text-zinc-600 font-light mb-8 flex-1">Çocuğunuzun raporu ve size özel 15 sayfalık derinlemesine iletişim rehberi.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-700 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#C17B54]" icon="solar:check-circle-bold"></iconify-icon> 60+ Sayfa Kişisel Rapor</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#C17B54]" icon="solar:check-circle-bold"></iconify-icon> 15 Sayfa Ebeveyn Rehberi</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#C17B54]" icon="solar:check-circle-bold"></iconify-icon> İletişim Stratejileri</li>
</ul>
<button className="w-full py-3 bg-[#C17B54] text-white rounded-xl font-medium text-sm hover:bg-[#A8673F] shadow-[0_4px_12px_rgba(193,123,84,0.2)] hover:-translate-y-0.5 transition-all duration-300">Paketi İnceleyin</button>
</div>
</div>
</div>
</section>
</div>

<div className="hidden transition-opacity duration-500 bg-slate-900 min-h-screen" id="page-kurum">
<nav className="sticky top-0 z-40 w-full bg-slate-900/80 backdrop-blur-xl border-b border-white/5 transition-all">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<iconify-icon className="text-2xl text-[#C4A35A] group-hover:rotate-12 transition-transform duration-500" icon="solar:infinity-bold-duotone"></iconify-icon>
<div className="flex flex-col leading-none tracking-tighter text-white font-semibold text-sm">
<span>Kendimi</span>
<span className="text-slate-400 font-medium">Keşfediyorum</span>
</div>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors duration-300" href="#">Çözüm</a>
<a className="hover:text-white transition-colors duration-300" href="#">Altyapı</a>
<a className="hover:text-white transition-colors duration-300" href="#">Referanslar</a>
</div>
<button className="bg-[#C4A35A] text-slate-900 px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#E0BF73] hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(196,163,90,0.2)] flex items-center gap-2">
                    Demo Talep Edin
                </button>
</div>
</nav>
<section className="py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C4A35A]/10 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-white relative z-10">
<div className="max-w-3xl mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 mb-8">
                        Okullar &amp; Kurumlar İçin
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] mb-6">
                        Öğrencileriniz kendilerini ne kadar tanıyor?
                    </h1>
<h2 className="text-lg md:text-xl font-normal tracking-tight text-slate-400 leading-snug mb-8">
                        Bilimsel temelli, ölçeklenebilir kariyer değerlendirme sistemi.
                    </h2>
<p className="text-sm md:text-base font-light text-slate-300 leading-relaxed mb-10 max-w-2xl">
                        Her yıl yüzlerce öğrenciniz tercih yapıyor. Biz, öğrencilerinizin 30 farklı özelliğini ölçen ve her biri için kişiselleştirilmiş rehberlik sağlayan, kurumunuza entegre bir sistem sunuyoruz. Sonuç: ölçülebilir, kanıta dayalı rehberlik kararları.
                    </p>
<button className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium text-sm hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                        Sistemi Keşfedin
                    </button>
</div>

<div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 md:p-16 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#C4A35A]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h1 className="text-2xl md:text-4xl font-semibold tracking-tighter mb-4 text-white">Arkasında 57 akademik çalışma var.</h1>
<h2 className="text-sm md:text-base font-normal text-slate-400 mb-12">Uluslararası geçerliliği kanıtlanmış yapılar. Kültüre uyarlanmış uygulama.</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-700/50 pt-12">
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#C4A35A] mb-2 tracking-tighter">7</div>
<div className="text-xs md:text-sm font-medium text-slate-400">Bilimsel Yapı</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#C4A35A] mb-2 tracking-tighter">30</div>
<div className="text-xs md:text-sm font-medium text-slate-400">Ölçülen Özellik</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#C4A35A] mb-2 tracking-tighter">57</div>
<div className="text-xs md:text-sm font-medium text-slate-400">Akademik Çalışma</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-[#C4A35A] mb-2 tracking-tighter">500K<span className="text-3xl">+</span></div>
<div className="text-xs md:text-sm font-medium text-slate-400">Katılımcı Verisi</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-white/5 transition-colors duration-500" id="main-footer">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-4 md:col-span-2 pr-0 md:pr-12">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-2xl" icon="solar:infinity-bold-duotone"></iconify-icon>
<div className="flex flex-col leading-none tracking-tighter font-semibold text-sm">
<span>Kendimi</span>
<span className="text-zinc-500">Keşfediyorum</span>
</div>
</div>
<p className="text-xs text-zinc-500 font-light mt-2 max-w-sm">
                    Kişiliğinden yeteneklerine, değerlerinden ilgi alanlarına kadar seni tanımak ve doğru yöne rehberlik etmek için bilimsel verileri kullanıyoruz.
                </p>
<div className="flex gap-4 mt-4">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2">Çözümler</h4>
<a className="text-xs font-light hover:text-white transition-colors" href="#">Öğrenci &amp; Aday</a>
<a className="text-xs font-light hover:text-white transition-colors" href="#">Ebeveyn</a>
<a className="text-xs font-light hover:text-white transition-colors" href="#">Kurumsal</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2">Yasal</h4>
<a className="text-xs font-light hover:text-white transition-colors" href="#">Gizlilik Politikası</a>
<a className="text-xs font-light hover:text-white transition-colors" href="#">Kullanım Koşulları</a>
<a className="text-xs font-light hover:text-white transition-colors" href="#">KVKK Aydınlatma Metni</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-[11px] font-light text-zinc-500">© 2026 Üniversiteler.net iştirakidir. Tüm hakları saklıdır.</span>
<span className="text-[11px] font-medium text-zinc-600 tracking-wider">TÜRKİYE</span>
</div>
</footer>


    </>
  );
}
