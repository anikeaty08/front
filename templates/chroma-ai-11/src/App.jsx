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



      // Icon init with 1.5 stroke width
      function updateIcons() {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }

      const screens = {
        'onboarding': document.getElementById('screen-onboarding'),
        'home': document.getElementById('screen-home'),
        'train-intro': document.getElementById('screen-train-intro'),
        'training': document.getElementById('screen-training'),
        'templates': document.getElementById('screen-templates'),
        'fusion': document.getElementById('screen-fusion'),
        'generating': document.getElementById('screen-generating'),
        'results': document.getElementById('screen-results')
      };
      const header = document.getElementById('appHeader');
      const bottomNav = document.getElementById('bottomNav');

      function showScreen(name) {
        for (const key in screens) {
          screens[key].classList.add('hidden');
        }
        screens[name].classList.remove('hidden');

        // Toggle header and bottom nav for app sections
        const showChrome = name !== 'onboarding';
        header.classList.toggle('hidden', !showChrome);
        bottomNav.classList.toggle('hidden', !showChrome);

        updateIcons();
        if (name === 'training' || name === 'generating') {
          // no-op: simulated indeterminate
        }
      }

      function goHome() {
        showScreen('home');
      }

      // Training flow
      const trainFiles = document.getElementById('trainFiles');
      const trainCount = document.getElementById('trainCount');
      trainFiles?.addEventListener('change', () => {
        const count = trainFiles.files.length;
        trainCount.textContent = count ? count + ' photo(s) selected' : '';
        if (count >= 1) {
          showScreen('training');
          setTimeout(() => showScreen('templates'), 2200);
        }
      });

      // Template preview sheet
      const templateSheet = document.getElementById('templateSheet');
      const templateTitle = document.getElementById('templateTitle');
      function openTemplate(name) {
        templateTitle.textContent = name;
        templateSheet.classList.remove('hidden');
        updateIcons();
      }
      function closeTemplate() {
        templateSheet.classList.add('hidden');
      }
      function startGeneration() {
        templateSheet.classList.add('hidden');
        showScreen('generating');
        setTimeout(() => showScreen('results'), 1800);
      }

      // Fusion Flow
      const fusionIntro = document.getElementById('fusionIntro');
      const fusionProgress = document.getElementById('fusionProgress');

      function openFusionIntro() {
        showScreen('fusion');
        fusionIntro.classList.remove('hidden');
        updateIcons();
      }
      function startFusionWizard() {
        fusionIntro.classList.add('hidden');
        // Start at step 1
        setFusionStep(1);
      }

      function setFusionStep(n) {
        const steps = [1,2,3,4,5];
        steps.forEach(s => {
          document.getElementById('fusion-step-' + s).classList.toggle('hidden', s !== n);
        });
        fusionProgress.style.width = (n * 20) + '%';
      }

      // Step 1 -> 2 (Photo A)
      const fusionAInput = document.getElementById('fusionAInput');
      const fusionAPreview = document.getElementById('fusionAPreview');
      const fusionAImg = document.getElementById('fusionAImg');
      const fusionAImg2 = document.getElementById('fusionAImg2');

      fusionAInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          const url = URL.createObjectURL(file);
          fusionAImg.src = url;
          fusionAImg2.src = url;
          fusionAPreview.classList.remove('hidden');
          setTimeout(() => setFusionStep(2), 600);
        }
      });

      function confirmPersonA() {
        setFusionStep(3);
      }

      // Step 3 -> 4 (Photo B)
      const fusionBInput = document.getElementById('fusionBInput');
      const fusionBPreview = document.getElementById('fusionBPreview');
      const fusionBImg = document.getElementById('fusionBImg');
      const fusionBImg2 = document.getElementById('fusionBImg2');

      fusionBInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          const url = URL.createObjectURL(file);
          fusionBImg.src = url;
          fusionBImg2.src = url;
          fusionBPreview.classList.remove('hidden');
          setTimeout(() => setFusionStep(4), 600);
        }
      });

      function confirmPersonB() {
        setFusionStep(5);
      }

      function startFusion() {
        showScreen('generating');
        setTimeout(() => showScreen('results'), 2200);
      }

      // Paywall
      const paywall = document.getElementById('paywall');
      const paywallTitle = document.getElementById('paywall-title');
      function openPaywall(feature) {
        paywallTitle.textContent = feature + ' — Go Pro';
        paywall.classList.remove('hidden');
        paywall.classList.add('flex');
        updateIcons();
      }
      function closePaywall() {
        paywall.classList.add('hidden');
        paywall.classList.remove('flex');
      }

      // Start state
      showScreen('onboarding');
      updateIcons();
    
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
      
<div className="w-full min-h-screen flex items-center justify-center">

<div className="relative w-full max-w-sm h-[100dvh] bg-[#0c0c0c] rounded-[28px] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_80px_rgba(0,0,0,0.6)]">

<div className="absolute top-0 inset-x-0 h-6 pointer-events-none bg-gradient-to-b from-black/40 to-transparent z-30"></div>

<header className="hidden px-5 pt-4 pb-3 flex items-center justify-between" id="appHeader">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#121212] ring-1 ring-white/10">
<span className="text-[11px] tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>CA</span>
</div>
<span className="text-[16pt] font-medium text-white/90 tracking-tight" style={{letterSpacing: '-0.02em'}}>Chroma AI</span>
</div>
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white/70" data-lucide="bell"></i>
</button>
</header>

<main className="h-full w-full relative">

<section className="absolute inset-0 flex flex-col" id="screen-onboarding">
<div className="flex-1 snap-x snap-mandatory overflow-x-auto flex">

<div className="relative w-full shrink-0 snap-center">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-smiling-woman-7984/720p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
<div className="absolute bottom-20 left-5 right-5">
<h1 className="text-white tracking-tight font-semibold text-[34pt] leading-[1.05] drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)]" style={{letterSpacing: '-0.02em'}}>
                    Your Personal AI Photographer.
                  </h1>
</div>
</div>

<div className="relative w-full shrink-0 snap-center">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-astronaut-in-the-city-6265/720p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
<div className="absolute bottom-20 left-5 right-5">
<h2 className="text-white tracking-tight font-semibold text-[34pt] leading-[1.05]" style={{letterSpacing: '-0.02em'}}>
                    Become Anyone, Anywhere.
                  </h2>
</div>
</div>

<div className="relative w-full shrink-0 snap-center">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-paint-swirls-8847/720p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
<div className="absolute bottom-28 left-5 right-5">
<h3 className="text-white tracking-tight font-semibold text-[34pt] leading-[1.05]" style={{letterSpacing: '-0.02em'}}>
                    The Future of Creativity.
                  </h3>
</div>
<div className="absolute bottom-8 left-5 right-5">
<button className="w-full active:scale-[0.99] transition shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(255,120,0,0.25)] rounded-xl p-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF8C00]" onclick="goHome()">
<div className="w-full rounded-[10px] py-3.5 text-center text-white text-[16pt] font-medium tracking-tight" style={{letterSpacing: '-0.01em', background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02))', backdropFilter: 'blur(8px)'}}>
                      Get Started
                    </div>
</button>
</div>
</div>
</div>

<div className="absolute bottom-2 inset-x-0 flex justify-center gap-2">
<div className="h-1 w-6 rounded-full bg-white/40"></div>
<div className="h-1 w-6 rounded-full bg-white/20"></div>
<div className="h-1 w-6 rounded-full bg-white/20"></div>
</div>
</section>

<section className="hidden absolute inset-0 overflow-y-auto" id="screen-home">
<div className="px-5 pt-4 pb-6">

<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#121212] ring-1 ring-white/10">
<span className="text-[11px] tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>CA</span>
</div>
<span className="text-[16pt] font-medium text-white/90 tracking-tight" style={{letterSpacing: '-0.02em'}}>Chroma AI</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white/70" data-lucide="wand-2"></i>
</button>
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white/70" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0f0f0f]">
<video autoplay="" className="w-full h-44 object-cover opacity-80" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-people-smiling-7982/720p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-tr from-[#101010] via-transparent to-transparent"></div>
<div className="absolute inset-0 p-4 flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] opacity-90"></div>
<span className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Create Your AI Model</span>
</div>
<div className="flex items-end justify-between">
<p className="text-white/80 text-[16pt]">
                      Upload your photos to unlock your personal AI studio.
                    </p>
<button className="ml-3 shrink-0 rounded-lg px-4 py-2 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="showScreen('train-intro')">
                      Start
                    </button>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between mb-2">
<h4 className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Explore Photo Packs</h4>
<button className="text-white/70 text-[16pt] hover:text-white transition" onclick="showScreen('templates')">See all</button>
</div>
<div className="flex overflow-x-auto gap-3 pb-2">

<div className="min-w-[240px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212] hover:ring-white/20 transition">
<img alt="LinkedIn Headshots" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight" style={{letterSpacing: '-0.01em'}}>LinkedIn Headshots</span>
<i className="w-5 h-5 text-white/70" data-lucide="badge-check"></i>
</div>
<button className="mt-2 w-full rounded-lg px-3 py-2 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('templates')">
                        Try
                      </button>
</div>
</div>
<div className="min-w-[240px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212] hover:ring-white/20 transition">
<img alt="AI Selfies" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight" style={{letterSpacing: '-0.01em'}}>AI Selfies</span>
<i className="w-5 h-5 text-white/70" data-lucide="sparkles"></i>
</div>
<button className="mt-2 w-full rounded-lg px-3 py-2 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('templates')">
                        Try
                      </button>
</div>
</div>
<div className="min-w-[240px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212] hover:ring-white/20 transition">
<img alt="Vintage Film" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1526178610407-3e7e85f825b8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight" style={{letterSpacing: '-0.01em'}}>Vintage Film</span>
<i className="w-5 h-5 text-white/70" data-lucide="film"></i>
</div>
<button className="mt-2 w-full rounded-lg px-3 py-2 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('templates')">
                        Try
                      </button>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] opacity-90 animate-pulse [animation-duration:2.5s]">
<button className="w-full rounded-[22px] p-4 bg-[#0f0f0f] flex items-center gap-3 ring-1 ring-white/10 hover:ring-white/20 transition" onclick="openFusionIntro()">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-[#151515] flex items-center justify-center ring-1 ring-white/10">
<div className="relative">
<i className="w-5 h-5 text-white/80" data-lucide="user"></i>
<i className="w-5 h-5 text-white/50 absolute -right-2 -bottom-2" data-lucide="user"></i>
</div>
</div>
</div>
<div className="flex-1 text-left">
<div className="flex items-center gap-2">
<span className="text-[16pt] font-medium tracking-tight" style={{letterSpacing: '-0.01em'}}>Photo Fusion ✨</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/10">Beta</span>
</div>
<p className="text-white/70 text-[16pt]">
                        Combine people from different photos into one seamless memory.
                      </p>
</div>
<i className="w-5 h-5 text-white/70" data-lucide="chevron-right"></i>
</button>
</div>
<p className="mt-2 text-xs text-white/50">Our next‑generation feature is in early access.</p>
</div>
</div>
</section>

<section className="hidden absolute inset-0 overflow-y-auto" id="screen-train-intro">
<div className="px-5 pt-4 pb-6">
<div className="flex items-center gap-3 mb-4">
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('home')">
<i className="w-5 h-5 text-white/70" data-lucide="chevron-left"></i>
</button>
<h2 className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Create Your AI Model</h2>
</div>
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[16pt] font-medium tracking-tight mb-3" style={{letterSpacing: '-0.01em'}}>Upload Guidelines</h3>
<ul className="space-y-2">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-[16pt] text-white/80">10–20 selfies, varied angles and expressions</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-300" data-lucide="sun"></i>
<span className="text-[16pt] text-white/80">Good lighting, minimal filters</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-white/70" data-lucide="glasses"></i>
<span className="text-[16pt] text-white/80">No sunglasses or heavy obstructions</span>
</li>
</ul>
<div className="mt-4">
<input accept="image/*" className="hidden" id="trainFiles" multiple="" type="file"/>
<button className="w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="document.getElementById('trainFiles').click()">
                    Upload Photos
                  </button>
<p className="mt-2 text-sm text-white/60" id="trainCount"></p>
</div>
</div>
</div>
</section>

<section className="hidden absolute inset-0" id="screen-training">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,255,0.16),transparent_50%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.12),transparent_50%)]"></div>
</div>
<div className="relative h-full w-full flex flex-col items-center justify-center p-6">
<div className="w-20 h-20 rounded-full bg-[#121212] ring-1 ring-white/10 flex items-center justify-center animate-pulse">
<i className="w-8 h-8 text-white/80" data-lucide="brain"></i>
</div>
<p className="mt-5 text-center text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Teaching our AI your unique look…</p>
<p className="mt-2 text-center text-white/70 text-[16pt] max-w-[20ch]">
                This may take a few minutes. Feel free to close the app, we'll notify you when it's ready!
              </p>
<div className="mt-6 w-full px-6">
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] animate-pulse"></div>
</div>
</div>
<button className="mt-6 text-white/70 text-sm underline decoration-white/20 underline-offset-4 hover:text-white" onclick="setTimeout(()=&gt;showScreen('templates'),1200)">
                Continue exploring
              </button>
</div>
</section>

<section className="hidden absolute inset-0 overflow-y-auto" id="screen-templates">
<div className="px-5 pt-4 pb-6">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('home')">
<i className="w-5 h-5 text-white/70" data-lucide="chevron-left"></i>
</button>
<h2 className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Chroma AI Studio</h2>
</div>
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20">
<i className="w-5 h-5 text-white/70" data-lucide="search"></i>
</button>
</div>
<div className="flex gap-2 overflow-x-auto pb-3">
<button className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] text-[16pt] font-medium tracking-tight">For You</button>
<button className="px-3 py-1.5 rounded-full bg-[#151515] ring-1 ring-white/10 text-[16pt] hover:ring-white/20">Professional</button>
<button className="px-3 py-1.5 rounded-full bg-[#151515] ring-1 ring-white/10 text-[16pt] hover:ring-white/20">Social</button>
<button className="px-3 py-1.5 rounded-full bg-[#151515] ring-1 ring-white/10 text-[16pt] hover:ring-white/20">Fantasy</button>
<button className="px-3 py-1.5 rounded-full bg-[#151515] ring-1 ring-white/10 text-[16pt] hover:ring-white/20">Travel</button>
</div>
<div className="grid grid-cols-2 gap-3 mt-2">

<div className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212]">
<img alt="Studio Portraits" className="h-40 w-full object-cover group-hover:opacity-90 transition" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight">Studio Portraits</span>
<button className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 text-[16pt] font-medium tracking-tight" onclick="openTemplate('Studio Portraits')">Preview</button>
</div>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212]">
<img alt="Street Aesthetic" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight">Street Aesthetic</span>
<button className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 text-[16pt] font-medium tracking-tight" onclick="openTemplate('Street Aesthetic')">Preview</button>
</div>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212]">
<img alt="Travel Postcards" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight">Travel Postcards</span>
<button className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 text-[16pt] font-medium tracking-tight" onclick="openTemplate('Travel Postcards')">Preview</button>
</div>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#121212]">
<img alt="Fantasy Realms" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center justify-between">
<span className="text-[16pt] font-medium tracking-tight">Fantasy Realms</span>
<button className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 text-[16pt] font-medium tracking-tight" onclick="openTemplate('Fantasy Realms')">Preview</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end" id="templateSheet">
<div className="w-full rounded-t-2xl bg-[#0f0f0f] ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<h4 className="text-[22pt] font-semibold tracking-tight" id="templateTitle" style={{letterSpacing: '-0.02em'}}>Pack</h4>
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10" onclick="closeTemplate()">
<i className="w-5 h-5 text-white/70" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<img alt="sample" className="h-20 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="sample" className="h-20 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="sample" className="h-20 w-full object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="startGeneration()">
                  Generate Photos
                </button>
</div>
</div>
</section>

<section className="hidden absolute inset-0 overflow-hidden" id="screen-fusion">

<div className="px-5 pt-4 pb-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('home')">
<i className="w-5 h-5 text-white/70" data-lucide="chevron-left"></i>
</button>
<h2 className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Photo Fusion</h2>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-28 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-[8%] bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] transition-all" id="fusionProgress"></div>
</div>
</div>
</div>

<div className="px-5 pb-6 h-[calc(100%-64px)] overflow-y-auto">

<div className="block" id="fusion-step-1">
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[22pt] font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.02em'}}>Upload Photo A</h3>
<p className="text-[16pt] text-white/70 mb-4">Choose the first photo.</p>
<input accept="image/*" className="hidden" id="fusionAInput" type="file"/>
<button className="w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20" onclick="document.getElementById('fusionAInput').click()">
                    Select Photo A
                  </button>
<div className="mt-3 hidden" id="fusionAPreview">
<img className="w-full h-56 object-cover rounded-lg ring-1 ring-white/10" id="fusionAImg"/>
</div>
</div>
</div>

<div className="hidden" id="fusion-step-2">
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[22pt] font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.02em'}}>Select Person A</h3>
<p className="text-[16pt] text-white/70 mb-3">Tap to confirm the highlighted subject.</p>
<div className="relative">
<img className="w-full h-64 object-cover rounded-lg ring-1 ring-white/10" id="fusionAImg2"/>
<div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.2)'}}></div>
<div className="absolute inset-0 rounded-lg" style={{maskImage: 'radial-gradient(ellipse at 50% 60%, black 40%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 60%, black 40%, transparent 60%)', background: 'radial-gradient(ellipse at 50% 60%, rgba(255,0,255,0.15), transparent 60%), radial-gradient(ellipse at 60% 50%, rgba(255,140,0,0.12), transparent 60%)'}}></div>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="confirmPersonA()">
                    Confirm Person A
                  </button>
</div>
</div>

<div className="hidden" id="fusion-step-3">
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[22pt] font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.02em'}}>Upload Photo B</h3>
<p className="text-[16pt] text-white/70 mb-4">Choose the second photo.</p>
<input accept="image/*" className="hidden" id="fusionBInput" type="file"/>
<button className="w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20" onclick="document.getElementById('fusionBInput').click()">
                    Select Photo B
                  </button>
<div className="mt-3 hidden" id="fusionBPreview">
<img className="w-full h-56 object-cover rounded-lg ring-1 ring-white/10" id="fusionBImg"/>
</div>
</div>
</div>

<div className="hidden" id="fusion-step-4">
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[22pt] font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.02em'}}>Select Person B</h3>
<p className="text-[16pt] text-white/70 mb-3">Tap to confirm the highlighted subject.</p>
<div className="relative">
<img className="w-full h-64 object-cover rounded-lg ring-1 ring-white/10" id="fusionBImg2"/>
<div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.2)'}}></div>
<div className="absolute inset-0 rounded-lg" style={{maskImage: 'radial-gradient(ellipse at 50% 60%, black 40%, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 60%, black 40%, transparent 60%)', background: 'radial-gradient(ellipse at 50% 60%, rgba(255,0,255,0.15), transparent 60%), radial-gradient(ellipse at 40% 50%, rgba(255,140,0,0.12), transparent 60%)'}}></div>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="confirmPersonB()">
                    Confirm Person B
                  </button>
</div>
</div>

<div className="hidden" id="fusion-step-5">
<div className="rounded-2xl bg-[#111] ring-1 ring-white/10 p-4">
<h3 className="text-[22pt] font-semibold tracking-tight mb-2" style={{letterSpacing: '-0.02em'}}>Describe the Scene</h3>
<p className="text-[16pt] text-white/70 mb-3">Be creative! Example: “Two friends in superhero costumes on a city rooftop.”</p>
<div className="rounded-xl bg-[#0f0f0f] ring-1 ring-white/10 p-3">
<textarea className="w-full bg-transparent outline-none text-[16pt] placeholder:text-white/40" id="fusionPrompt" placeholder="A man and a woman laughing on a park bench in autumn" rows="3"></textarea>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="startFusion()">
                    Generate
                  </button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-black/70 backdrop-blur-sm flex items-end" id="fusionIntro">
<div className="w-full rounded-t-2xl bg-[#0f0f0f] ring-1 ring-white/10 p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-[#151515] flex items-center justify-center ring-1 ring-white/10" style={{filter: 'drop-shadow(0 0 10px rgba(255,140,0,0.35))'}}>
<i className="w-5 h-5 text-white/80" data-lucide="beaker"></i>
</div>
<div className="flex-1">
<h4 className="text-[22pt] font-semibold tracking-tight mb-1" style={{letterSpacing: '-0.02em'}}>Welcome to the Lab!</h4>
<p className="text-[16pt] text-white/70">You're trying an experimental feature. Photo Fusion uses advanced AI to merge people, but results can sometimes be unpredictable. Let's create some magic!</p>
</div>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]" onclick="startFusionWizard()">
                  I Understand, Let's Go
                </button>
</div>
</div>
</section>

<section className="hidden absolute inset-0" id="screen-generating">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,255,0.16),transparent_50%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.12),transparent_50%)]"></div>
</div>
<div className="relative h-full w-full flex flex-col items-center justify-center p-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF00FF] to-transparent animate-pulse"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8C00] to-transparent animate-pulse [animation-delay:200ms]"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF00FF] to-transparent animate-pulse [animation-delay:400ms]"></div>
</div>
<p className="mt-5 text-center text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Synthesizing your images…</p>
<p className="mt-2 text-center text-white/70 text-[16pt]">This should only take a moment.</p>
<div className="mt-6 w-full px-6">
<div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="hidden absolute inset-0 overflow-y-auto" id="screen-results">
<div className="px-5 pt-4 pb-28">
<div className="flex items-center gap-3 mb-3">
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10 hover:ring-white/20" onclick="showScreen('home')">
<i className="w-5 h-5 text-white/70" data-lucide="chevron-left"></i>
</button>
<h2 className="text-[22pt] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Your Results</h2>
</div>

<div className="relative">
<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
<div className="relative min-w-full snap-center">
<img className="w-full h-[420px] object-cover rounded-2xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded bg-black/50 ring-1 ring-white/10">Chroma AI</div>
</div>
<div className="relative min-w-full snap-center">
<img className="w-full h-[420px] object-cover rounded-2xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded bg-black/50 ring-1 ring-white/10">Chroma AI</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3">
<button className="rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 flex items-center justify-center gap-2">
<i className="w-5 h-5 text-white/80" data-lucide="save"></i>
                  Save
                </button>
<button className="rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-[#1a1a1a] ring-1 ring-white/10 hover:ring-white/20 flex items-center justify-center gap-2">
<i className="w-5 h-5 text-white/80" data-lucide="share-2"></i>
                  Share
                </button>
</div>

<div className="mt-4 grid grid-cols-1 gap-3">
<button className="rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 flex items-center justify-between" onclick="openPaywall('Remove Watermark')">
<span>Remove Watermark</span>
<span className="px-2 py-0.5 text-xs rounded bg-black/30 ring-1 ring-white/10">PRO</span>
</button>
<button className="rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 flex items-center justify-between" onclick="openPaywall('Upscale to 4K')">
<span>✨ Upscale to 4K</span>
<span className="px-2 py-0.5 text-xs rounded bg-black/30 ring-1 ring-white/10">PRO</span>
</button>
<button className="rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 flex items-center justify-between" onclick="openPaywall('Create Video')">
<span>🎬 Create Video</span>
<span className="px-2 py-0.5 text-xs rounded bg-black/30 ring-1 ring-white/10">PRO</span>
</button>
</div>
</div>
</section>

<div className="hidden absolute inset-0 bg-black/70 backdrop-blur-sm z-40 items-end" id="paywall">
<div className="w-full rounded-t-2xl bg-[#0f0f0f] ring-1 ring-white/10 p-5">
<div className="flex items-start justify-between">
<div>
<h4 className="text-[22pt] font-semibold tracking-tight" id="paywall-title" style={{letterSpacing: '-0.02em'}}>Go Pro</h4>
<p className="text-[16pt] text-white/70">Unlock premium quality and creative superpowers.</p>
</div>
<button className="p-2 rounded-md bg-[#121212] ring-1 ring-white/10" onclick="closePaywall()">
<i className="w-5 h-5 text-white/70" data-lucide="x"></i>
</button>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-[16pt]"><i className="w-5 h-5 text-white/80" data-lucide="sparkles"></i> 4K Upscales</li>
<li className="flex items-center gap-2 text-[16pt]"><i className="w-5 h-5 text-white/80" data-lucide="wand-2"></i> Faster Generations</li>
<li className="flex items-center gap-2 text-[16pt]"><i className="w-5 h-5 text-white/80" data-lucide="badge-check"></i> No Watermarks</li>
</ul>
<div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-[#0b0b0b] ring-1 ring-white/10">
<div>
<div className="text-[16pt] font-medium tracking-tight">Chroma AI Pro</div>
<div className="text-sm text-white/60">Unlimited creativity</div>
</div>
<div className="text-right">
<div className="text-[16pt] font-medium tracking-tight">$7.99</div>
<div className="text-sm text-white/60">per month</div>
</div>
</div>
<button className="mt-4 w-full rounded-xl px-4 py-3 text-[16pt] font-medium tracking-tight bg-gradient-to-r from-[#FF00FF] to-[#FF8C00] hover:brightness-110 active:scale-[0.99]">
                Continue
              </button>
</div>
</div>
</main>

<nav className="hidden absolute bottom-0 inset-x-0 h-16 bg-[#0f0f0f] ring-1 ring-white/10 flex items-center justify-around" id="bottomNav">
<button className="flex flex-col items-center text-xs text-white/70 hover:text-white transition" onclick="showScreen('home')">
<i className="w-5 h-5 mb-1" data-lucide="home"></i>
            Home
          </button>
<button className="flex flex-col items-center text-xs text-white/70 hover:text-white transition" onclick="showScreen('templates')">
<i className="w-5 h-5 mb-1" data-lucide="image"></i>
            Packs
          </button>
<button className="flex flex-col items-center text-xs text-white transition" onclick="openFusionIntro()" style={{filter: 'drop-shadow(0 0 10px rgba(255,140,0,0.35))'}}>
<i className="w-5 h-5 mb-1" data-lucide="beaker"></i>
            Fusion
          </button>
<button className="flex flex-col items-center text-xs text-white/70 hover:text-white transition" onclick="showScreen('train-intro')">
<i className="w-5 h-5 mb-1" data-lucide="user-plus"></i>
            Model
          </button>
</nav>
</div>
</div>


    </>
  );
}
