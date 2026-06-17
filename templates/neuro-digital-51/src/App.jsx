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



tailwind.config = {
theme: {
extend: {
colors: {
depth: {
base: '#08090A',
surface: '#121214',
highlight: '#1C1C1F',
glass: 'rgba(255, 255, 255, 0.03)',
},
neuro: {
blue: '#60A5FA',
gold: '#D97706',
emerald: '#34D399',
text: '#E4E4E7',
muted: '#A1A1AA'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'liquid': 'liquid 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan-line': 'scan 2s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
liquid: {
'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();

        // Improved Overlay Logic
        function openOverlay(type) {
            const backdrop = document.getElementById('overlay-backdrop');
            const slideOver = document.getElementById('slide-over');
            const title = document.getElementById('overlay-title');
            
            // Hide all, show target
            document.querySelectorAll('.overlay-section').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(`overlay-content-${type}`) || document.getElementById('overlay-content-connect');
            target.classList.remove('hidden');
            
            // Title mapping (Fallback if needed)
            const titles = { 'connect': 'İletişim Kanalı', 'methodology': 'Metodoloji' };
            title.innerText = titles[type] || 'İletişim';

            backdrop.classList.remove('pointer-events-none', 'opacity-0');
            slideOver.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeOverlay() {
            const backdrop = document.getElementById('overlay-backdrop');
            const slideOver = document.getElementById('slide-over');
            
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            slideOver.classList.add('translate-x-full');
            document.body.style.overflow = ''; // Restore scrolling
        }

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if(el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Improved Analyzer Simulation
        function startAnalysis() {
            const urlInput = document.getElementById('url-input');
            if(!urlInput.value) {
                urlInput.classList.add('animate-pulse', 'border-red-500');
                setTimeout(() => urlInput.classList.remove('animate-pulse', 'border-red-500'), 1000);
                return;
            }

            const stepInput = document.getElementById('step-input');
            const stepProcessing = document.getElementById('step-processing');
            const stepResult = document.getElementById('step-result');
            const consoleText = document.getElementById('console-text');
            const scanLine = document.getElementById('scan-line');

            stepInput.style.opacity = '0';
            setTimeout(() => {
                stepInput.classList.add('hidden');
                stepProcessing.classList.remove('hidden');
                scanLine.classList.remove('hidden');
                scanLine.classList.add('animate-scan-line');
            }, 300);

            const steps = [
                { text: "DNS ÇÖZÜMLENİYOR...", delay: 500 },
                { text: "DOM YAPISI TARANIYOR...", delay: 1500 },
                { text: "FOTO-RESEPTÖR SİMÜLASYONU...", delay: 2500 },
                { text: "BİLİŞSEL YÜK HESAPLANIYOR...", delay: 3500 }
            ];

            let totalDelay = 0;
            steps.forEach(step => {
                setTimeout(() => {
                    consoleText.innerText = step.text;
                }, totalDelay);
                totalDelay += step.delay / 2 + 500;
            });

            setTimeout(() => {
                stepProcessing.classList.add('opacity-0');
                setTimeout(() => {
                    stepProcessing.classList.add('hidden');
                    scanLine.classList.add('hidden');
                    stepResult.classList.remove('hidden');
                    setTimeout(() => {
                        stepResult.classList.remove('opacity-0', 'translate-y-4');
                    }, 50);
                }, 500);
            }, 4500);
        }

        // Custom Keyframes for Tailwind (Injected via JS config above, but needed for specific custom animations here if dynamic)
        
    
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
      

<div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neuro-blue/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neuro-gold/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMTQwIDBoMS41TDAgNDAuNXoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20 pointer-events-none z-0 mask-image-gradient"></div>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md sm:top-6 sm:bottom-auto transition-all duration-300">
<div className="glass-island rounded-full px-1 py-1.5 flex items-center justify-between mx-4">
<button className="p-2.5 rounded-full hover:bg-white/5 transition-colors group relative" onclick="scrollToSection('hero')">
<i className="w-5 h-5 text-neuro-muted group-hover:text-white transition-colors" data-lucide="brain-circuit"></i>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-depth-highlight border border-white/5 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Vizyon</span>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="p-2.5 rounded-full hover:bg-white/5 transition-colors group relative" onclick="scrollToSection('methodology')">
<i className="w-5 h-5 text-neuro-muted group-hover:text-white transition-colors" data-lucide="grid-2x2"></i>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-depth-highlight border border-white/5 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Metodoloji</span>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="p-2.5 rounded-full hover:bg-white/5 transition-colors group relative" onclick="scrollToSection('projects')">
<i className="w-5 h-5 text-neuro-muted group-hover:text-white transition-colors" data-lucide="folder-git-2"></i>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-depth-highlight border border-white/5 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Projeler</span>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<button className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 group" onclick="openOverlay('connect')">
<span className="text-xs font-medium tracking-wide text-white">İletişim</span>
<i className="w-3 h-3 text-neuro-gold group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<main className="relative z-10 w-full flex flex-col items-center pt-24 pb-32" id="main-container">

<section className="w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center relative mb-40 min-h-[80vh]" id="hero">
<div className="mb-12 opacity-70 hover:opacity-100 transition-opacity cursor-default">
<span className="font-mono text-[10px] tracking-[0.3em] text-neuro-muted uppercase border border-white/10 px-3 py-1 rounded-full">v2.4 Sistem Aktif</span>
</div>
<div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-12 group cursor-pointer perspective-1000" id="liquid-sphere">
<div className="absolute inset-0 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
<div className="absolute inset-0 w-full h-full mercury-sphere animate-liquid hover:scale-105 duration-700 ease-out z-10"></div>
<div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow opacity-20 scale-125 pointer-events-none"></div>
</div>
<h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white mb-8 text-glow leading-[1] z-20">
                Dijital <br/>
<span className="italic text-neuro-muted font-light">Bilinç</span> Arayüzü
            </h1>
<p className="font-sans text-sm sm:text-base text-neuro-muted max-w-lg leading-relaxed mb-10 font-light z-20">
                Markanızın dijital varlığını, insan psikolojisi ve ileri teknoloji mimarisiyle birleştirerek yaşayan bir organizmaya dönüştürüyorum.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center z-20">
<button className="group relative px-8 py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]" onclick="scrollToSection('analyzer')">
<span className="relative font-medium text-sm tracking-wide group-hover:mr-2 transition-all">Sistem Analizi</span>
<i className="w-0 h-4 inline-block transition-all group-hover:w-4 group-hover:opacity-100 opacity-0 -ml-2 group-hover:ml-0" data-lucide="arrow-down"></i>
</button>
</div>
</section>

<section className="w-full max-w-4xl px-6 relative mb-40 scroll-mt-32" id="analyzer">
<div className="flex items-center gap-4 mb-6 px-2">
<div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
<h2 className="font-mono text-xs text-neuro-muted tracking-widest uppercase">01 /// Veri Toplama</h2>
<div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
</div>
<div className="glass-panel rounded-2xl p-1 overflow-hidden relative shadow-2xl">
<div className="bg-depth-surface/50 border-b border-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neuro-emerald animate-pulse"></div>
<span className="text-[10px] font-mono text-neuro-muted tracking-wider">NETWORK_IDLE</span>
</div>
<div className="flex gap-3">
<div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neuro-blue/50 w-[30%] animate-pulse"></div>
</div>
</div>
</div>
<div className="p-6 sm:p-12 relative min-h-[300px] flex flex-col justify-center">
<div className="absolute top-0 left-0 w-full h-[2px] bg-neuro-blue/50 shadow-[0_0_15px_rgba(96,165,250,0.6)] hidden z-0" id="scan-line"></div>
<div className="relative z-10 transition-all duration-500" id="step-input">
<h3 className="font-serif text-3xl text-white mb-3">Nöro-Denetim Başlat</h3>
<p className="font-sans text-sm text-neuro-muted mb-8 font-light max-w-lg">Mevcut yapınızın bilişsel yükünü ve dönüşüm potansiyelini yapay zeka destekli motorumuzla test edin.</p>
<div className="relative group max-w-lg">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neuro-blue to-neuro-gold rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<input className="relative w-full bg-depth-base border border-white/10 rounded-lg py-4 px-5 text-white placeholder-neuro-muted/30 focus:outline-none focus:bg-depth-surface transition-all font-mono text-sm" id="url-input" placeholder="https://sirketiniz.com" type="text"/>
<button className="absolute right-2 top-2 bottom-2 bg-white/5 hover:bg-white/10 text-white rounded px-4 transition-all border border-white/5" onclick="startAnalysis()">
<span className="text-xs font-medium tracking-wide">Analiz Et</span>
</button>
</div>
</div>
<div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-depth-surface/95 backdrop-blur-md z-20" id="step-processing">
<div className="font-mono text-xs text-neuro-blue mb-4" id="console-text">BAĞLANTI_KURULUYOR...</div>
<div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neuro-blue animate-[loading_2s_ease-in-out_infinite] w-full origin-left transform scale-x-0"></div>
</div>
</div>
<div className="hidden transition-all duration-500 opacity-0 transform translate-y-4" id="step-result">
<div className="flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-1">
<h4 className="text-lg font-serif text-white mb-2">Ön Rapor Hazır</h4>
<p className="text-sm text-neuro-muted font-light leading-relaxed mb-4">
                                    Hero bölümünde görsel hiyerarşi zayıflığı tespit edildi. Foveal odaklanma süresi ortalamanın altında (0.4s).
                                </p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] rounded uppercase tracking-wider">Yüksek Bilişsel Yük</span>
<span className="px-2 py-1 bg-neuro-gold/10 border border-neuro-gold/20 text-neuro-gold text-[10px] rounded uppercase tracking-wider">Düşük Güven</span>
</div>
</div>
<div className="w-full sm:w-48 bg-black/40 border border-white/10 rounded p-4 text-center">
<span className="block text-[10px] text-neuro-muted uppercase mb-1">Potansiyel Kayıp</span>
<span className="text-2xl font-mono text-white">%34</span>
<div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[34%]"></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/10">
<button className="text-xs text-white hover:text-neuro-blue transition-colors flex items-center gap-2">
                                Tam raporu talep et <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl px-6 mb-40 scroll-mt-32" id="methodology">
<div className="flex items-center gap-4 mb-12 px-2 justify-center">
<div className="h-[1px] w-12 bg-white/20"></div>
<h2 className="font-mono text-xs text-neuro-muted tracking-widest uppercase">02 /// Metodoloji Üçlemesi</h2>
<div className="h-[1px] w-12 bg-white/20"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-6 rounded-xl hover-card group md:col-span-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-24 h-24 text-white -rotate-12 card-icon transition-transform duration-500" data-lucide="scan-eye"></i>
</div>
<div className="relative z-10 mt-8">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 text-neuro-blue">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Biyometrik Tasarım</h3>
<p className="text-sm text-neuro-muted font-light leading-relaxed max-w-md">
                            Tahmine dayalı tasarım devri bitti. Göz izleme simülasyonları ve ısı haritaları kullanarak, kullanıcının bilinçdışı dikkatini yönetiyoruz. Tasarım kararları estetik değil, veri odaklıdır.
                        </p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-card group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 text-neuro-gold">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Milisaniye Mühendisliği</h3>
<p className="text-sm text-neuro-muted font-light leading-relaxed">
                            Web Vitals optimizasyonu. 100ms altı tepki süreleri. Hız, kullanıcı beyninde güven olarak kodlanır.
                        </p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-card group relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 text-neuro-emerald">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-serif text-white mb-2">Psikolojik Tetikleyiciler</h3>
<p className="text-sm text-neuro-muted font-light leading-relaxed">
                            Cialdini'nin ikna prensipleri ve Fogg Davranış Modeli'nin arayüz elementlerine entegrasyonu.
                        </p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-card group md:col-span-2 relative overflow-hidden flex items-center">
<div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-lg font-serif text-white mb-1">Teknoloji Yığını</h3>
<p className="text-xs text-neuro-muted">Modern web'in en güçlü silahları.</p>
</div>
<div className="flex gap-4 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
<i className="w-6 h-6 text-white" data-lucide="box" title="Next.js"></i>
<i className="w-6 h-6 text-white" data-lucide="database" title="Sanity"></i>
<i className="w-6 h-6 text-sky-400" data-lucide="wind" title="Tailwind"></i>
<i className="w-6 h-6 text-white" data-lucide="framer" title="Framer Motion"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-4xl px-6 mb-32 scroll-mt-32" id="projects">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="font-mono text-xs text-neuro-muted tracking-widest uppercase">03 /// Seçilmiş Vaka Analizleri</h2>
<span className="text-[10px] text-neuro-muted/50 font-mono">DİZİN: 2023-2024</span>
</div>
<div className="flex flex-col gap-2">

<div className="group relative p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-neuro-blue">01</span>
<div>
<h3 className="text-lg font-serif text-white group-hover:translate-x-2 transition-transform duration-300">FinTech Dashboard</h3>
<p className="text-xs text-neuro-muted group-hover:text-white/70 transition-colors">Bilişsel Yük Azaltma &amp; Veri Görselleştirme</p>
</div>
</div>
<div className="text-right hidden sm:block">
<span className="block text-xs text-white font-medium">+%145</span>
<span className="text-[10px] text-neuro-muted uppercase">Etkileşim Artışı</span>
</div>
<i className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-neuro-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
</div>

<div className="group relative p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-neuro-gold">02</span>
<div>
<h3 className="text-lg font-serif text-white group-hover:translate-x-2 transition-transform duration-300">E-Ticaret Mimarisi</h3>
<p className="text-xs text-neuro-muted group-hover:text-white/70 transition-colors">Headless Shopify &amp; Nöro-UX</p>
</div>
</div>
<div className="text-right hidden sm:block">
<span className="block text-xs text-white font-medium">0.8s</span>
<span className="text-[10px] text-neuro-muted uppercase">Sayfa Yükleme</span>
</div>
<i className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-neuro-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
</div>

<div className="group relative p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-neuro-emerald">03</span>
<div>
<h3 className="text-lg font-serif text-white group-hover:translate-x-2 transition-transform duration-300">SaaS Onboarding</h3>
<p className="text-xs text-neuro-muted group-hover:text-white/70 transition-colors">Oyunlaştırma &amp; Kullanıcı Tutma</p>
</div>
</div>
<div className="text-right hidden sm:block">
<span className="block text-xs text-white font-medium">%22</span>
<span className="text-[10px] text-neuro-muted uppercase">Dönüşüm Artışı</span>
</div>
<i className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-neuro-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
</div>
</div>
</section>

<footer className="w-full max-w-5xl px-6 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity pb-24 sm:pb-12">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-white/10 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
<span className="text-[10px] font-mono text-neuro-muted uppercase tracking-widest">Sistem Operasyonel</span>
</div>
<p className="text-[10px] text-neuro-muted font-sans">
                © 2024 Orkun Onuk. Nöro-Dijital Mimar. <span className="opacity-30">İstanbul / Remote</span>
</p>
</footer>
</main>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-500" id="overlay-backdrop" onclick="closeOverlay()"></div>
<aside className="fixed top-0 right-0 h-full w-full sm:w-[500px] z-[70] transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" id="slide-over">
<div className="h-full w-full bg-[#0c0c0e] border-l border-white/10 flex flex-col shadow-2xl relative">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="h-20 border-b border-white/5 flex items-center justify-between px-8 relative z-10">
<span className="font-serif text-xl text-white" id="overlay-title">İletişim</span>
<button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neuro-muted hover:text-white hover:rotate-90 transition-all duration-300" onclick="closeOverlay()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-8 relative z-10">
<div className="hidden overlay-section h-full flex flex-col" id="overlay-content-connect">
<div className="flex-1">
<h3 className="text-xs font-mono text-neuro-gold mb-8 tracking-widest">/// BAĞLANTI_PROTOKOLÜ</h3>
<p className="text-xl font-serif text-white leading-relaxed mb-8">
                            Sıradan bir web sitesi değil, markanız için yaşayan bir dijital sinir sistemi inşa etmek istiyorsanız konuşalım.
                        </p>
<div className="space-y-4 mb-12">
<a className="group flex items-center justify-between p-5 bg-white/5 border border-white/5 hover:border-neuro-gold/50 rounded-lg transition-all hover:bg-white/[0.07]" href="#">
<div className="flex items-center gap-4">
<i className="text-neuro-muted group-hover:text-white transition-colors w-5 h-5" data-lucide="mail"></i>
<span className="text-sm text-white">orkun@neuro-platform.com</span>
</div>
<i className="w-4 h-4 text-neuro-muted group-hover:text-neuro-gold -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between p-5 bg-white/5 border border-white/5 hover:border-neuro-blue/50 rounded-lg transition-all hover:bg-white/[0.07]" href="#">
<div className="flex items-center gap-4">
<i className="text-neuro-muted group-hover:text-white transition-colors w-5 h-5" data-lucide="linkedin"></i>
<span className="text-sm text-white">/in/orkunonuk</span>
</div>
<i className="w-4 h-4 text-neuro-muted group-hover:text-neuro-blue -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="text-[10px] text-neuro-muted font-mono border-t border-white/10 pt-6">
                        ORTALAMA YANIT SÜRESİ: <span className="text-white">2.4 SAAT</span><br/>
                        ZAMAN DİLİMİ: GMT+3
                    </div>
</div>
</div>
</div>
</aside>


    </>
  );
}
