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



    const state = { step: 1, url: "", email: "", link: "" };

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const loadingOverlay = document.getElementById('loadingOverlay');

    const urlInput = document.getElementById('url');
    const urlError = document.getElementById('urlError');
    const startBtn = document.getElementById('startBtn');

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailBtn = document.getElementById('emailBtn');

    const finalLinkEl = document.getElementById('finalLink');
    const copyBtn = document.getElementById('copyBtn');
    const copiedHint = document.getElementById('copiedHint');
    const openLink = document.getElementById('openLink');

    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const progressBar = document.getElementById('progressBar');

    const loadingTitle = document.getElementById('loadingTitle');
    const loadingDesc = document.getElementById('loadingDesc');

    function refreshIcons() {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }

    function validateUrl(value) {
      try {
        const u = new URL(value);
        return u.protocol === 'http:' || u.protocol === 'https:';
      } catch {
        return false;
      }
    }

    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function setStep(n) {
      state.step = n;
      step1.classList.toggle('hidden', n !== 1);
      step2.classList.toggle('hidden', n !== 2);
      step3.classList.toggle('hidden', n !== 3);
      loadingOverlay.classList.add('hidden');

      if (n === 1) {
        title.textContent = 'Şirketinin AI botunu ücretsiz hazırla';
        subtitle.textContent = 'Başlamak için web sitenizin adresini girin, gerisini biz halledelim.';
        progressBar.style.width = '33%';
      }
      if (n === 2) {
        title.textContent = 'Neredeyse bitti';
        subtitle.textContent = 'Botunuza erişmek için e‑posta adresinizi girin.';
        progressBar.style.width = '66%';
      }
      if (n === 3) {
        title.textContent = 'Hazır 🎉';
        subtitle.textContent = 'Botunuza aşağıdaki tek bağlantıdan ulaşabilirsiniz.';
        progressBar.style.width = '100%';
      }
      refreshIcons();
    }

    function showLoading(kind) {
      loadingOverlay.classList.remove('hidden');
      if (kind === 'crawl') {
        loadingTitle.textContent = 'Hazırlanıyor...';
        loadingDesc.textContent = 'İçerik taranıyor, yapılandırmalar oluşturuluyor.';
      } else if (kind === 'provision') {
        loadingTitle.textContent = 'Son adım...';
        loadingDesc.textContent = 'Erişim bağlantınız oluşturuluyor.';
      }
      refreshIcons();
    }

    function simulateDelay(ms) {
      return new Promise(res => setTimeout(res, ms));
    }

    function generateLink(base) {
      const slug = Math.random().toString(36).slice(2, 8);
      const host = 'https://bot.example.app';
      const safeBase = base.replace(/^https?:\/\//, '').replace(/\/$/, '');
      return `${host}/launch/${slug}?site=${encodeURIComponent(safeBase)}`;
    }

    startBtn.addEventListener('click', async () => {
      const val = urlInput.value.trim();
      if (!validateUrl(val)) {
        urlError.classList.remove('hidden');
        urlInput.classList.add('ring-2','ring-rose-400/40','border-rose-400/30');
        return;
      }
      urlError.classList.add('hidden');
      urlInput.classList.remove('ring-2','ring-rose-400/40','border-rose-400/30');
      state.url = val;
      showLoading('crawl');
      await simulateDelay(1000 + Math.random()*1000);
      setStep(2);
      emailInput.focus();
    });

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        startBtn.click();
      }
    });

    emailBtn.addEventListener('click', async () => {
      const val = emailInput.value.trim();
      if (!validateEmail(val)) {
        emailError.classList.remove('hidden');
        emailInput.classList.add('ring-2','ring-rose-400/40','border-rose-400/30');
        return;
      }
      emailError.classList.add('hidden');
      emailInput.classList.remove('ring-2','ring-rose-400/40','border-rose-400/30');
      state.email = val;

      showLoading('provision');
      await simulateDelay(1000 + Math.random()*1000);

      state.link = generateLink(state.url);
      finalLinkEl.textContent = state.link;
      openLink.href = state.link;
      setStep(3);
    });

    emailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        emailBtn.click();
      }
    });

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(state.link);
        copiedHint.classList.remove('hidden');
        copyBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i> Kopyalandı';
        refreshIcons();
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> Kopyala';
          copiedHint.classList.add('hidden');
          refreshIcons();
        }, 1500);
      } catch (e) {}
    });

    document.addEventListener('DOMContentLoaded', () => {
      setStep(1);
      refreshIcons();
    });
  
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
      

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(13,110,253,0.25), rgba(13,110,253,0.10) 60%, transparent 70%)'}}></div>
<div className="absolute -bottom-48 -right-24 w-[680px] h-[680px] rounded-full blur-3xl opacity-35" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(13,110,253,0.20), rgba(13,110,253,0.08) 60%, transparent 70%)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[540px] h-[540px] rounded-full blur-3xl opacity-35" style={{background: 'radial-gradient(55% 55% at 50% 50%, rgba(13,110,253,0.22), rgba(13,110,253,0.08) 60%, transparent 75%)'}}></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.5) 1px, transparent 1px)', backgroundSize: '36px 36px', maskImage: 'radial-gradient(circle at 50% 30%, black 0%, rgba(0,0,0,0.65) 45%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 0%, rgba(0,0,0,0.65) 45%, transparent 70%)'}}></div>
</div>
<main className="relative z-10 flex-1 flex items-center justify-center px-6">
<div className="relative w-full max-w-xl">
<div className="absolute inset-0 -z-10 flex items-center justify-center">
<div className="w-[520px] h-[520px] rounded-full border border-[#0d6efd]/20 animate-[spin_18s_linear_infinite]" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(13,110,253,0.06), transparent 60%)'}}></div>
</div>
<div className="relative rounded-2xl border border-neutral-200 bg-white backdrop-blur-md shadow-2xl overflow-hidden">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
<div className="h-1 w-full bg-neutral-100">
<div className="h-1 bg-[#0d6efd] transition-all duration-700 ease-out" id="progressBar" style={{width: '33%'}}></div>
</div>
<div className="p-6 sm:p-8 text-center">
<div className="mb-6">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight" id="title">Şirketinin AI botunu ücretsiz hazırla</h1>
<p className="mt-2 text-sm sm:text-base text-neutral-600" id="subtitle">Başlamak için web sitenizin adresini girin, gerisini biz halledelim.</p>
</div>

<div className="space-y-4" id="step1">
<label className="sr-only" htmlFor="url">Web sitesi URL</label>
<div className="group relative w-full">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<svg className="lucide lucide-globe-2 w-5 h-5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<input className="placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd]/40 focus:border-[#0d6efd]/50 transition-all text-base bg-white w-full border-neutral-200 border rounded-xl pt-4 pr-4 pb-4 pl-12" data-element-id="aura-emfz5o3rg" id="url" inputmode="url" placeholder="https://ornek.com" style={{fontFamily: 'Inter, ui-sans-serif'}} type="url"/>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d6efd] text-white hover:bg-[#0b5ed7] active:bg-[#0a58ca] transition-colors px-4 py-3 text-sm font-medium" id="startBtn" style={{fontFamily: 'Inter, ui-sans-serif'}}>
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                Hazırla
              </button>
</div>
<p className="text-sm text-rose-600 hidden" id="urlError">Lütfen geçerli bir URL girin.</p>
</div>

<div className="hidden space-y-4" id="step2">
<label className="block text-sm text-neutral-600">Botunuza erişmek için e‑posta adresinizi girin</label>
<div className="group relative w-full">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="w-full rounded-xl bg-white border border-neutral-200 pl-12 pr-4 py-4 text-base placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd]/40 focus:border-[#0d6efd]/50 transition-all" id="email" inputmode="email" placeholder="ornek@eposta.com" style={{fontFamily: 'Inter, ui-sans-serif'}} type="email"/>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d6efd] text-white hover:bg-[#0b5ed7] active:bg-[#0a58ca] transition-colors px-4 py-3 text-sm font-medium" id="emailBtn" style={{fontFamily: 'Inter, ui-sans-serif'}}>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Devam
              </button>
</div>
<p className="text-sm text-rose-600 hidden" id="emailError">Lütfen geçerli bir e‑posta adresi girin.</p>
</div>

<div className="hidden space-y-4" id="step3">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1">
<svg className="lucide lucide-sparkles w-4 h-4 text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs text-emerald-700">Botunuz hazır</span>
</div>
<div className="mt-2">
<label className="block text-sm text-neutral-600 mb-2">Erişim linkiniz</label>
<div className="flex items-stretch gap-2">
<div className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 overflow-hidden">
<p className="truncate text-sm text-neutral-800" id="finalLink">https://bot.example.app/xxxxxxxx</p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-200/60 transition-colors px-4 py-3 text-sm" id="copyBtn" style={{fontFamily: 'Inter, ui-sans-serif'}}>
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                  Kopyala
                </button>
</div>
<p className="mt-2 text-xs text-neutral-500 hidden" id="copiedHint">Link panoya kopyalandı.</p>
</div>
<div className="pt-4 mt-2 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#" id="openLink" rel="noopener" target="_blank">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                Linki yeni sekmede aç
              </a>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
<div className="px-6 py-4 flex items-center justify-between text-xs text-neutral-600 hidden"></div>
<div className="hidden absolute inset-0 z-20 bg-white/80 backdrop-blur-sm" id="loadingOverlay">
<div className="w-full h-full flex items-center justify-center p-8">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-10 h-10 rounded-full border-2 border-neutral-200"></div>
<div className="absolute inset-0 grid place-items-center">
<svg className="lucide lucide-loader-2 w-5 h-5 text-[#0d6efd] animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900" id="loadingTitle">Hazırlanıyor...</p>
<p className="text-xs text-neutral-600 mt-1" id="loadingDesc">İçerikler taranıyor, bileşenler oluşturuluyor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="relative z-10 py-6 px-6">
<div className="mx-auto max-w-7xl text-center text-xs text-neutral-600">
      © 2025 AI Builder
    </div>
</footer>


    </>
  );
}
