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



        // Language Toggler
        function setLang(lang) {
            const input = document.getElementById('prompt-input');
            
            if (lang === 'tr') {
                document.body.classList.add('lang-tr');
                
                // Update language buttons
                document.getElementById('btn-tr').classList.add('bg-white/10', 'text-white');
                document.getElementById('btn-tr').classList.remove('text-zinc-400');
                document.getElementById('btn-en').classList.remove('bg-white/10', 'text-white');
                document.getElementById('btn-en').classList.add('text-zinc-400');
                
                // Update placeholder
                input.placeholder = "Mars'ta neon bir takım elbiseyle pazarlama stratejilerini tartışırken hayal edin...";
            } else {
                document.body.classList.remove('lang-tr');
                
                // Update language buttons
                document.getElementById('btn-en').classList.add('bg-white/10', 'text-white');
                document.getElementById('btn-en').classList.remove('text-zinc-400');
                document.getElementById('btn-tr').classList.remove('bg-white/10', 'text-white');
                document.getElementById('btn-tr').classList.add('text-zinc-400');
                
                // Update placeholder
                input.placeholder = "Imagine yourself walking on Mars in a neon suit discussing marketing strategies...";
            }
        }

        // Style Tab Switching Logic
        function setActiveTab(element) {
            const tabs = document.querySelectorAll('.prompt-tab');
            tabs.forEach(tab => {
                tab.classList.remove('bg-white/10', 'text-white', 'border-white/10');
                tab.classList.add('text-zinc-400', 'border-transparent');
            });
            element.classList.remove('text-zinc-400', 'border-transparent');
            element.classList.add('bg-white/10', 'text-white', 'border-white/10');
        }
    
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
      

<div className="fixed inset-0 bg-grid-pattern z-[-2]"></div>
<div className="fixed inset-0 bg-zinc-950/80 z-[-1]"></div>
<div className="glow-effect"></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    PRMPT.
                </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">
<span className="text-en">Features</span><span className="text-tr">Özellikler</span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="text-en">Showcase</span><span className="text-tr">Vitrin</span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="text-en">Pricing</span><span className="text-tr">Fiyatlandırma</span>
</a>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex p-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mr-2">
<button className="px-3 py-1 rounded-full bg-white/10 text-white transition-colors" id="btn-en" onclick="setLang('en')">EN</button>
<button className="px-3 py-1 rounded-full text-zinc-400 hover:text-white transition-colors" id="btn-tr" onclick="setLang('tr')">TR</button>
</div>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block" href="#">
<span className="text-en">Log in</span><span className="text-tr">Giriş Yap</span>
</a>
<button className="h-9 px-4 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
<span className="text-en">Start Creating</span><span className="text-tr">Oluşturmaya Başla</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-300 mb-8">
<span className="flex h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
<span className="text-en">AI Video Generation Engine is Live</span>
<span className="text-tr">Yapay Zeka Video Motoru Yayında</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6 max-w-4xl mx-auto">
<span className="text-en">Redefine your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">personal brand</span> with impossible videos.</span>
<span className="text-tr">İmkansız videolarla <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">kişisel markanızı</span> yeniden tanımlayın.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mx-auto mb-12">
<span className="text-en">Describe your vision. Our AI generates mind-bending, non-standard videos that make your digital presence unforgettable. Stand out, go viral, build authority.</span>
<span className="text-tr">Vizyonunuzu anlatın. Yapay zekamız, dijital varlığınızı unutulmaz kılan akıl almaz, sıra dışı videolar oluşturur. Öne çıkın, viral olun, otorite kurun.</span>
</p>

<div className="max-w-3xl mx-auto relative group">

<div className="flex flex-wrap items-center gap-2 mb-3 justify-center">
<button className="prompt-tab px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors hover:bg-white/10" onclick="setActiveTab(this)">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-en">Cinematic</span><span className="text-tr">Sinematik</span>
</button>
<button className="prompt-tab px-3 py-1.5 rounded-full text-zinc-400 border border-transparent hover:border-white/5 hover:bg-white/5 text-xs font-medium flex items-center gap-1.5 transition-colors" onclick="setActiveTab(this)">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-en">3D Render</span><span className="text-tr">3D Çizim</span>
</button>
<button className="prompt-tab px-3 py-1.5 rounded-full text-zinc-400 border border-transparent hover:border-white/5 hover:bg-white/5 text-xs font-medium flex items-center gap-1.5 transition-colors" onclick="setActiveTab(this)">
<iconify-icon icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-en">Surreal</span><span className="text-tr">Sürreal</span>
</button>
<button className="prompt-tab px-3 py-1.5 rounded-full text-zinc-400 border border-transparent hover:border-white/5 hover:bg-white/5 text-xs font-medium flex items-center gap-1.5 transition-colors" onclick="setActiveTab(this)">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-en">Anime</span><span className="text-tr">Anime</span>
</button>
</div>

<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 mt-10"></div>
<div className="relative flex items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl">
<div className="pl-4 pr-2 text-zinc-500 flex items-center">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="flex-1 bg-transparent text-zinc-100 text-sm md:text-base px-2 py-3 focus:outline-none placeholder:text-zinc-600 font-normal" id="prompt-input" placeholder="Imagine yourself walking on Mars in a neon suit discussing marketing strategies..." type="text"/>
<button className="bg-white text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap">
<span className="text-en">Generate</span><span className="text-tr">Oluştur</span>
<iconify-icon icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl aspect-video flex items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="relative z-10 h-20 w-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-white ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
<div className="text-left">
<div className="text-sm font-semibold tracking-tight text-white mb-1">
<span className="text-en">Marketing Strategies on Mars</span>
<span className="text-tr">Mars'ta Pazarlama Stratejileri</span>
</div>
<div className="text-xs text-zinc-400">
<span className="text-en">Prompted by @alex_brand</span>
<span className="text-tr">@alex_brand tarafından oluşturuldu</span>
</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-sm" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-sm" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-zinc-950/50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
<span className="text-en">Break the algorithm.</span>
<span className="text-tr">Algoritmayı kırın.</span>
</h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">
<span className="text-en">Standard talking-head videos are dead. Capture attention with visually stunning, AI-generated narratives tailored exactly to your personal brand.</span>
<span className="text-tr">Standart konuşan kafa videoları artık öldü. Kişisel markanıza tam olarak uyarlanmış, yapay zeka tarafından oluşturulan çarpıcı anlatımlarla dikkatleri üzerinize çekin.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-fuchsia-400" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">
<span className="text-en">Hyper-Personalized</span>
<span className="text-tr">Ultra Kişiselleştirilmiş</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
<span className="text-en">Train our AI on your likeness and voice. Every impossible scenario still feels authentically you, increasing brand recall.</span>
<span className="text-tr">Yapay zekamızı kendi benzerliğiniz ve sesinizle eğitin. Her imkansız senaryo hala tamamen size ait hissettirerek marka bilinirliğini artırır.</span>
</p>
</div>

<div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6 relative z-10">
<iconify-icon className="text-2xl text-cyan-400" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2 relative z-10">
<span className="text-en">Unmatched Retention</span>
<span className="text-tr">Eşsiz İzlenme Süresi</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">
<span className="text-en">Surreal visuals keep viewers hooked longer. Higher watch times mean the algorithm pushes your content to millions.</span>
<span className="text-tr">Gerçeküstü görseller izleyicileri daha uzun süre bağlı tutar. Daha yüksek izlenme süreleri, algoritmanın içeriğinizi milyonlara ulaştırması demektir.</span>
</p>
</div>

<div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">
<span className="text-en">Zero Production Cost</span>
<span className="text-tr">Sıfır Üretim Maliyeti</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
<span className="text-en">Skip the studios, cameras, and locations. Type a prompt and get studio-quality, cinematic videos in minutes.</span>
<span className="text-tr">Stüdyoları, kameraları ve mekanları es geçin. Bir komut yazın ve dakikalar içinde stüdyo kalitesinde, sinematik videolar elde edin.</span>
</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-lg font-semibold tracking-tighter text-zinc-500">PRMPT.</span>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
<span className="text-en">Privacy</span><span className="text-tr">Gizlilik</span>
</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
<span className="text-en">Terms</span><span className="text-tr">Şartlar</span>
</a>
</div>
</div>
</footer>



    </>
  );
}
