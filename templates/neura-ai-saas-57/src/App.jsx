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



        // Mouse Follower Blob Logic
        const blob = document.getElementById("cursor-blob");
        
        // Linear interpolation for smooth movement
        let mouseX = 0;
        let mouseY = 0;
        let blobX = 0;
        let blobY = 0;
        
        document.addEventListener("mousemove", (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function animateBlob() {
            // Smooth delay effect
            blobX += (mouseX - blobX) * 0.08;
            blobY += (mouseY - blobY) * 0.08;

            blob.style.left = `${blobX}px`;
            blob.style.top = `${blobY}px`;

            requestAnimationFrame(animateBlob);
        }

        animateBlob();

        // Scroll Reveal Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar blur effect enhance on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80');
                navbar.classList.remove('bg-black/50');
            } else {
                navbar.classList.remove('bg-black/80');
                navbar.classList.add('bg-black/50');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-[400px] h-[400px] hidden md:block opacity-70" id="cursor-blob"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 bg-grid opacity-10"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-700" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-purple-200 transition-colors">NEURA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors relative group" href="#ozellikler">
                    Özellikler
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#cozumler">
                    Çözümler
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#entegrasyon">
                    Entegrasyon
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#fiyatlandirma">
                    Fiyatlandırma
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Giriş Yap</a>
<a className="btn-glow group relative px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-100 transition-all overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]" href="#">
<span className="relative z-10 flex items-center gap-1">
                        Başlayın 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 md:pt-52 md:pb-36 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 text-center relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-900/10 text-purple-300 text-xs font-medium mb-8 fade-in-up hover:border-purple-500/40 hover:bg-purple-900/20 transition-all cursor-default" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                NEURA 2.0 Yayında — Yenilikleri Keşfet
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 fade-in-up leading-[1.1]" style={{animationDelay: '0.2s'}}>
                Yapay Zeka ile <br/>
<span className="text-gradient-anim relative">
                    Sınırları Zorlayın.
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></span>
</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up" style={{animationDelay: '0.3s'}}>
                Verilerinizi anlamlı içgörülere dönüştürün. NEURA, işletmeniz için özelleştirilebilir, ölçeklenebilir ve güvenli yapay zeka çözümleri sunar.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up" style={{animationDelay: '0.4s'}}>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-xl shadow-white/5">
                    Ücretsiz Dene
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="group h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-sm">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:play-bold" width="10"></iconify-icon>
</div>
                    Demoyu İzle
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl fade-in-up perspective-1000" style={{animationDelay: '0.6s'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-700">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 w-64 h-5 rounded-full bg-white/5 text-[10px] flex items-center px-3 text-neutral-600 font-mono">neura.ai/dashboard/analytics</div>
</div>
<div className="p-1 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 space-y-4">
<div className="flex items-center justify-between">
<div className="h-6 w-24 bg-white/5 rounded animate-pulse"></div>
<div className="h-6 w-6 rounded bg-white/5"></div>
</div>
<div className="space-y-2 pt-2">
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-3/4 bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
</div>
<div className="pt-4">
<div className="h-32 rounded-lg border border-dashed border-white/10 flex flex-col items-center justify-center text-neutral-600 gap-2 bg-white/[0.01]">
<iconify-icon className="text-neutral-500" icon="solar:chart-2-linear" width="24"></iconify-icon>
<span className="text-xs">Veri Analizi Grafiği</span>
</div>
</div>
</div>

<div className="col-span-2 bg-gradient-to-b from-white/[0.03] to-transparent rounded-lg border border-white/5 p-4 flex flex-col justify-between h-64 md:h-80">
<div className="space-y-4">
<div className="flex gap-3 reveal active">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/30">
<iconify-icon icon="solar:stars-bold"></iconify-icon>
</div>
<div className="flex-1 bg-white/5 p-3 rounded-2xl rounded-tl-none text-sm text-neutral-300 border border-white/5">
                                        Son çeyrek satış verilerini analiz ettim. Büyüme oranı <span className="text-green-400 font-medium">%145</span> artış gösteriyor. Tahmini gelir projeksiyonu oluşturmamı ister misiniz?
                                    </div>
</div>
<div className="flex gap-3 flex-row-reverse reveal active" style={{transitionDelay: '0.2s'}}>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:user-bold"></iconify-icon>
</div>
<div className="flex-1 bg-blue-600/10 border border-blue-500/20 p-3 rounded-2xl rounded-tr-none text-sm text-blue-100">
                                        Evet, lütfen gelecek ay için 3 farklı senaryo hazırla.
                                    </div>
</div>
<div className="flex gap-3 reveal active" style={{transitionDelay: '0.4s'}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/30">
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mx-0.5" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>
<div className="mt-4 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-purple-400 transition-colors">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon>
</div>
<input className="w-full bg-black border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-neutral-600" placeholder="Yapay zekaya bir soru sorun..." type="text"/>
<button className="absolute right-2 top-1.5 p-1.5 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm z-10 relative">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8 reveal">Dünyanın önde gelen şirketleri tarafından güveniliyor</p>
<div className="relative w-full overflow-hidden reveal">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex whitespace-nowrap infinite-scroll w-[200%] hover:[animation-play-state:paused]">
<div className="flex items-center gap-20 mx-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:atom-bold"></iconify-icon> ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:box-bold"></iconify-icon> VERTEX</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:connection-bold"></iconify-icon> NEXUS</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:earth-bold"></iconify-icon> ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:fire-bold"></iconify-icon> QUANTUM</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:ghost-bold"></iconify-icon> SYNTH</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:headphones-round-bold"></iconify-icon> ECHO</span>
</div>
<div className="flex items-center gap-20 mx-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:atom-bold"></iconify-icon> ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:box-bold"></iconify-icon> VERTEX</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:connection-bold"></iconify-icon> NEXUS</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:earth-bold"></iconify-icon> ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:fire-bold"></iconify-icon> QUANTUM</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:ghost-bold"></iconify-icon> SYNTH</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:headphones-round-bold"></iconify-icon> ECHO</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="ozellikler">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Her Şey İçin Tek Zeka.</h2>
<p className="text-neutral-400 text-lg">Karmaşık veri setlerini saniyeler içinde analiz edin, doğal dil işleme ile müşteri deneyimini iyileştirin.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card md:col-span-2 rounded-3xl p-8 md:p-10 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Nöral Ağ İşleme</h3>
<p className="text-neutral-400 max-w-md">Kendi kendine öğrenen algoritmalarımız, verilerinizdeki desenleri insan gözünün göremeyeceği hassasiyette tespit eder.</p>
<div className="mt-8 h-48 w-full border border-white/5 bg-black/40 rounded-lg overflow-hidden relative group-hover:border-purple-500/20 transition-colors">

<div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-1.5 h-12 bg-purple-500/50 rounded-full animate-pulse"></div>
<div className="w-1.5 h-24 bg-purple-500/80 rounded-full animate-pulse animation-delay-2000"></div>
<div className="w-1.5 h-16 bg-purple-500/60 rounded-full animate-pulse"></div>
<div className="w-1.5 h-32 bg-purple-500 rounded-full animate-pulse animation-delay-4000 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
<div className="w-1.5 h-20 bg-purple-500/70 rounded-full animate-pulse"></div>
<div className="w-1.5 h-10 bg-purple-500/40 rounded-full animate-pulse animation-delay-2000"></div>
</div>
</div>
</div>
</div>

<div className="glass-card md:row-span-2 rounded-3xl p-8 md:p-10 relative overflow-hidden group reveal" style={{transitionDelay: '0.1s'}}>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent group-hover:from-blue-900/20 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Kurumsal Güvenlik</h3>
<p className="text-neutral-400 mb-8">Uçtan uca şifreleme ve GDPR uyumlu veri işleme protokolleri ile verileriniz her zaman güvende.</p>
<ul className="space-y-5 text-sm text-neutral-300">
<li className="flex items-center gap-3 group/item">
<iconify-icon className="text-blue-500/50 group-hover/item:text-blue-400 transition-colors" icon="solar:check-circle-bold"></iconify-icon>
                            SOC2 Tip II Sertifikalı
                        </li>
<li className="flex items-center gap-3 group/item">
<iconify-icon className="text-blue-500/50 group-hover/item:text-blue-400 transition-colors" icon="solar:check-circle-bold"></iconify-icon>
                            256-bit Şifreleme
                        </li>
<li className="flex items-center gap-3 group/item">
<iconify-icon className="text-blue-500/50 group-hover/item:text-blue-400 transition-colors" icon="solar:check-circle-bold"></iconify-icon>
                            Özel Bulut Dağıtımı
                        </li>
<li className="flex items-center gap-3 group/item">
<iconify-icon className="text-blue-500/50 group-hover/item:text-blue-400 transition-colors" icon="solar:check-circle-bold"></iconify-icon>
                            7/24 Tehdit İzleme
                        </li>
</ul>
<div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
</div>

<div className="glass-card rounded-3xl p-8 relative group reveal" style={{transitionDelay: '0.2s'}}>
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400">Gelecekteki trendleri %98 doğrulukla tahmin edin.</p>
</div>

<div className="glass-card rounded-3xl p-8 relative group reveal" style={{transitionDelay: '0.3s'}}>
<div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon className="text-neutral-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-300 mb-4 group-hover:bg-orange-500/20 transition-colors">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">API First</h3>
<p className="text-sm text-neutral-400">Geliştirici dostu API ile dakikalar içinde entegrasyon.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden" id="entegrasyon">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                    Geliştiriciler İçin Tasarlandı.<br/>
<span className="text-neutral-500">Karmaşıklıktan Uzak.</span>
</h2>
<p className="text-neutral-400 text-lg mb-8">
                    Tek bir API çağrısı ile dünyanın en gelişmiş dil modellerine erişin. SDK'larımız Python, Node.js, Go ve daha fazlasını destekler.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 mt-1 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">1</div>
<div>
<h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">API Anahtarınızı Alın</h4>
<p className="text-sm text-neutral-500 mt-1">Dashboard üzerinden saniyeler içinde anahtar oluşturun.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 mt-1 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">2</div>
<div>
<h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">SDK'yı Yükleyin</h4>
<p className="text-sm text-neutral-500 mt-1">Favori paket yöneticinizi kullanarak kütüphaneyi projenize ekleyin.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 mt-1 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 shrink-0 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">3</div>
<div>
<h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">Sorgulamaya Başlayın</h4>
<p className="text-sm text-neutral-500 mt-1">Veri gönderin ve anında zeki yanıtlar alın.</p>
</div>
</div>
</div>
</div>

<div className="relative group reveal" style={{transitionDelay: '0.2s'}}>
<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative rounded-xl bg-[#0F0F0F] border border-white/10 p-6 font-mono text-sm overflow-hidden shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 hover:bg-red-500/50 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500/50 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 hover:bg-green-500/50 transition-colors"></div>
</div>
<span className="text-xs text-neutral-500">main.py</span>
</div>
<div className="text-neutral-300 leading-relaxed group-hover:text-white transition-colors duration-500">
<p><span className="text-purple-400">import</span> neura</p>
<p className="mb-4"><span className="text-purple-400">from</span> neura.models <span className="text-purple-400">import</span> Completion</p>
<p><span className="text-neutral-500 italic"># İstemciyi başlat</span></p>
<p className="mb-4">client = neura.Client(api_key=<span className="text-green-400">"nk_live_..."</span>)</p>
<p><span className="text-neutral-500 italic"># Analiz oluştur</span></p>
<p>response = client.analyze({</p>
<p className="pl-4">source: <span className="text-green-400">"customer_data_v2"</span>,</p>
<p className="pl-4">model: <span className="text-green-400">"neura-xl-002"</span>,</p>
<p className="pl-4">parameters: { <span className="text-orange-400">temperature</span>: <span className="text-blue-400">0.7</span> }</p>
<p>})</p>
<p className="mt-4"><span className="text-purple-400">print</span>(response.choices[<span className="text-blue-400">0</span>].text)</p>
<div className="w-2 h-4 bg-purple-500/50 inline-block animate-pulse ml-1 align-middle"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5 reveal">
<div className="group cursor-default">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">10M+</h3>
<p className="text-sm text-neutral-500">İşlenen Veri (Günlük)</p>
</div>
<div className="group cursor-default">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">99.9%</h3>
<p className="text-sm text-neutral-500">Sistem Uptime</p>
</div>
<div className="group cursor-default">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">500+</h3>
<p className="text-sm text-neutral-500">Kurumsal Müşteri</p>
</div>
<div className="group cursor-default">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">0.2s</h3>
<p className="text-sm text-neutral-500">Ortalama Yanıt Süresi</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Müşteri Deneyimleri</h2>
<p className="text-neutral-400">Teknoloji liderleri NEURA hakkında ne düşünüyor?</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors text-white">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors text-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#050505] border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"NEURA'yı entegre ettikten sonra müşteri destek ekibimizin verimliliği %200 arttı. Yapay zeka yanıtları inanılmaz derecede doğal ve isabetli."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10"></div>
<div>
<h5 className="text-white text-sm font-medium">Ahmet Yılmaz</h5>
<p className="text-neutral-500 text-xs">CTO, TechFlow</p>
</div>
</div>
</div>

<div className="bg-[#050505] border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 reveal" style={{transitionDelay: '0.1s'}}>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Veri analitiği süreçlerimizi tamamen değiştirdi. Eskiden haftalar süren raporlamalar şimdi dakikalar içinde hazır. Şirket için bir devrim."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-600 border border-white/10"></div>
<div>
<h5 className="text-white text-sm font-medium">Elif Demir</h5>
<p className="text-neutral-500 text-xs">VP of Data, FinBase</p>
</div>
</div>
</div>

<div className="bg-[#050505] border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 reveal" style={{transitionDelay: '0.2s'}}>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"API dokümantasyonu gördüğüm en iyilerden biri. Entegrasyonu yarım gün içinde tamamladık ve hemen sonuç almaya başladık."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-700 to-purple-600 border border-white/10"></div>
<div>
<h5 className="text-white text-sm font-medium">Caner Öztürk</h5>
<p className="text-neutral-500 text-xs">Lead Developer, SoftApp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="fiyatlandirma">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Şeffaf Fiyatlandırma</h2>
<p className="text-neutral-400">İhtiyacınıza göre ölçeklenen planlar.</p>

<div className="flex items-center justify-center mt-8 gap-4">
<span className="text-sm text-white">Aylık</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-800 transition-all duration-300 left-0" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</input></div>
<span className="text-sm text-neutral-400">Yıllık <span className="text-green-400 text-xs ml-1">(%20 İndirim)</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all duration-300 reveal hover:bg-neutral-900/30">
<h3 className="text-lg font-medium text-white mb-2">Başlangıç</h3>
<p className="text-sm text-neutral-500 mb-6">Bireysel projeler ve testler için.</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">$0</span>
<span className="text-neutral-500 ml-2">/ay</span>
</div>
<button className="w-full py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors mb-8">
                        Ücretsiz Başla
                    </button>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            5.000 Token/ay
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Temel Modeller
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Topluluk Desteği
                        </li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-purple-500/50 bg-[#0a0a0a] relative shadow-2xl shadow-purple-900/20 transform md:-translate-y-4 reveal transition-transform duration-500 hover:scale-105" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 rounded-3xl bg-purple-500/5 pulsing-dot opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide shadow-lg shadow-purple-500/40">
                        EN POPÜLER
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-500 mb-6">Büyüyen startup'lar ve ekipler için.</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">$49</span>
<span className="text-neutral-500 ml-2">/ay</span>
</div>
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors mb-8 shadow-lg shadow-white/10 btn-glow">
                        Hemen Yükselt
                    </button>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            2.000.000 Token/ay
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Gelişmiş Modeller (GPT-4 vb.)
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Öncelikli E-posta Desteği
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Analitik Paneli
                        </li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-black hover:border-white/20 transition-all duration-300 reveal hover:bg-neutral-900/30" style={{transitionDelay: '0.2s'}}>
<h3 className="text-lg font-medium text-white mb-2">Kurumsal</h3>
<p className="text-sm text-neutral-500 mb-6">Büyük ölçekli operasyonlar için.</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-bold text-white">Özel</span>
</div>
<button className="w-full py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors mb-8">
                        İletişime Geç
                    </button>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Sınırsız Token
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Özel Model Eğitimi (Fine-tuning)
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Özel Hesap Yöneticisi
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            SLA Garantisi
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden reveal">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Geleceği Beklemeyin,<br/>İnşa Edin.</h2>
<p className="text-xl text-neutral-400 mb-10">Bugün NEURA ile yapay zeka dönüşümünüzü başlatın.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all transform shadow-xl shadow-white/5 btn-glow">
                    Hemen Başla
                </button>
<button className="h-14 px-8 rounded-full border border-white/10 bg-black text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all">
                    Satış Ekibiyle Görüş
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8 text-sm relative z-10 reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:infinity-bold" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">NEURA</span>
</div>
<p className="text-neutral-500 max-w-xs mb-6">
                        Yapay zeka teknolojileri ile işletmelerin potansiyelini açığa çıkarıyoruz. İstanbul merkezli teknoloji şirketi.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors hover:scale-110 transform duration-200" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Ürün</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Özellikler</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Entegrasyonlar</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Fiyatlandırma</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Dokümantasyon</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Şirket</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Kariyer</a> <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded ml-1 animate-pulse">İşe Alıyoruz</span></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Yasal</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-purple-400 transition-colors" href="#">Gizlilik Politikası</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Kullanım Şartları</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Çerez Politikası</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">KVKK</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600">© 2023 NEURA Teknoloji A.Ş. Tüm hakları saklıdır.</p>
<div className="flex items-center gap-2 text-neutral-600 text-xs">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Tüm sistemler çalışıyor
                </div>
</div>
</div>
</footer>


    </>
  );
}
