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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        const emailBtn = document.getElementById('emailBtn');
        const toast = document.getElementById('copiedToast');
        const email = 'jeremi@barkson.design';

        emailBtn?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(email);
            toast.classList.remove('hidden');
            emailBtn.querySelector('[data-lucide]')?.remove();
            emailBtn.insertAdjacentHTML('afterbegin', '<i data-lucide="check" class="h-4 w-4"></i>');
            lucide.createIcons();
            setTimeout(() => {
              toast.classList.add('hidden');
              const icon = emailBtn.querySelector('[data-lucide="check"]');
              if (icon) {
                icon.outerHTML = '<i data-lucide="copy" class="h-4 w-4"></i>';
                lucide.createIcons();
              }
            }, 1800);
          } catch (e) {
            alert('Copy failed. Email: ' + email);
          }
        });
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="aNQ1HJcO2IvNyDCGls8J"></div>

</div></div>


<aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
<div className="flex flex-col gap-2 bg-white/5 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl items-center">
<button className="group grid place-items-center hover:text-white hover:bg-white/10 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='/home'" role="button">
<svg className="lucide lucide-home w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono" style={{}}>Home</span>
</button>
<button className="group grid place-items-center hover:text-white hover:bg-white/10 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='/work'" role="button">
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono" style={{}}>Work</span>
</button>
<button className="group grid place-items-center hover:text-white hover:bg-white/10 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='/about'" role="button">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="absolute left-12 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-xs text-white font-geist-mono bg-neutral-900 opacity-0 rounded pt-1 pr-2 pb-1 pl-2" style={{}}>About</span>
</button>
<button className="group grid place-items-center hover:text-white hover:bg-white/10 transition relative cursor-pointer text-neutral-400 w-10 h-10 rounded-full" onclick="window.location.href='/contact'" role="button">
<svg className="lucide lucide-mail w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono" style={{}}>Contact</span>
</button>
</div>
</aside>

<main className="relative z-10">
<header className="sm:px-8 cursor-pointer pr-6 pl-6" onclick="window.location.href='/contact';window.location.href='/service';window.location.href='/about';window.location.href='/work';window.location.href='/home'" role="button">
<div className="sm:pt-28 md:pt-36 max-w-6xl mr-auto ml-auto pt-20">

<div className="relative mb-16">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

<div className="lg:max-w-2xl">
<p className="text-base font-medium text-white/70 font-geist-mono mb-4" style={{}}>Hi, I'm Jeremi Barkson</p>
<h1 className="text-[52px] sm:text-[88px] md:text-[112px] lg:text-[120px] font-extrabold tracking-tight leading-[0.9] uppercase text-neutral-200" style={{fontFamily: '\'Clash Display\', system-ui, -apple-system, sans-serif'}}>
<span className="block" style={{}}>Creative</span>
<span className="block" style={{}}>Front-end</span>
<span className="block" style={{}}>Designer</span>
</h1>
</div>

<div className="lg:mt-8">
<div className="inline-flex items-center gap-3 text-[11px] uppercase font-semibold text-white/70 font-geist-mono px-4 py-2 rounded-full border border-white/10 bg-white/5">
<div className="bg-green-400 w-2 h-2 rounded-full"></div>
<span className="font-geist-mono" style={{}}>Available for projects</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-5 border-[#ffffff]/10 border rounded-none">
<div className="relative overflow-hidden bg-white/5 border-0 rounded-none">
<img alt="Portrait of Jeremi" className="lg:h-[520px] w-full h-[420px] object-cover rounded-none" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91a94fe5-e05d-40b6-8d2c-022e83376db1_1600w.jpg" style={{}}/>



</div>
</div>

<div className="lg:col-span-7">
<div className="h-full flex flex-col justify-between">

<div className="">
<div className="mb-8">
<div className="flex items-center gap-3 mb-6">
<svg className="h-4 w-4 text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 mb-8 font-geist-mono" style={{}}>I design and build beautiful, high-performing digital products.  I craft user interfaces with clean design systems and bring them to life with code, creating fast, responsive, and immersive experiences for startups, agencies, and creative teams.</p>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="space-y-2">
<h3 className="text-sm font-medium text-white/90 font-geist-mono" style={{}}>Specialties</h3>
<ul className="text-sm text-white/70 space-y-1">
<li className="font-geist-mono" style={{}}>• UI/UX Design</li>
<li className="font-geist-mono" style={{}}>• Front-End Development</li>
<li className="font-geist-mono" style={{}}>• Design Systems &amp; Prototyping</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-sm font-medium text-white/90 font-geist-mono" style={{}}>Industries</h3>
<ul className="text-sm text-white/70 space-y-1">
<li className="font-geist-mono" style={{}}>• SaaS &amp; Tech Startups</li>
<li className="font-geist-mono" style={{}}>• Creative Agencies</li>
<li className="font-geist-mono" style={{}}>• Enterprise Solutions</li>
</ul>
</div>
</div>
</div>
</div>

<div className="">
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="button font-geist-mono" href="#work" style={{padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '400', color: 'rgb(244, 240, 255)', textAlign: 'center', position: 'relative', cursor: 'pointer', textDecoration: 'none', display: 'inline-block', marginTop: '1rem'}}>
<div className="button-border" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', borderRadius: '0.5rem', zIndex: '-1'}}>
<div style={{content: '\'\'', position: 'absolute', borderRadius: '0.5rem', padding: '1px', inset: '0', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.24) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', pointerEvents: 'none'}}>
</div>
</div>
<div style={{content: '\'\'', display: 'block', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%', borderRadius: '0.5rem', background: 'linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24)', boxShadow: 'inset 0 0 12px rgba(151, 200, 255, 0.44)', zIndex: '-1'}}>
</div>
<div onmouseout="this.style.opacity='0'" onmouseover="this.style.opacity='1'" style={{content: '""', display: 'block', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'linear-gradient(rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24)', boxShadow: 'rgba(151, 200, 255, 0.44) 0px 0px 12px inset', borderRadius: '0.5rem', opacity: '0', zIndex: '-1'}}></div>
  View full portfolio
</a>
<a className="button font-geist-mono inline-flex items-center justify-center" href="#work" style={{padding: '1rem 2rem', borderRadius: '0.5rem', fontSize: '1rem', fontWeight: '400', color: 'rgb(255, 255, 255)', textAlign: 'center', position: 'relative', cursor: 'pointer', textDecoration: 'none', display: 'inline-block', marginTop: '1rem', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
<div className="button-border" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', borderRadius: '0.5rem', zIndex: '-1'}}>
<div style={{content: '\'\'', position: 'absolute', borderRadius: '0.5rem', padding: '1px', inset: '0', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.1) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.15), rgba(184, 238, 255, 0.15))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', pointerEvents: 'none'}}>
</div>
</div>
<div onmouseout="this.style.opacity='0'" onmouseover="this.style.opacity='1'" style={{content: '""', display: 'block', position: 'absolute', left: '0px', top: '0px', height: '100%', width: '100%', borderRadius: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', opacity: '0', zIndex: '-1'}}></div>
  View portfolio
</a>
</div>

<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-white/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-message-square w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="message-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="font-geist-mono" style={{}}>Response within 24h</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="sm:px-8 pr-6 pl-6">
<div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono" style={{}}>Services</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{}}>Capabilities</h2>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 font-geist-mono" style={{}}>Design, identity, development, and growth — crafted as polished, cohesive experiences.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative overflow-hidden sm:p-8 hover:bg-white/10 transition-all duration-500 flex flex-col bg-white/5 h-[600px] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">

<div className="relative">

<div className="bg-neutral-900/90 w-full h-64 sm:h-72 border-white/20 border rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

<div className="absolute left-0 right-0 top-0 bg-white/15 h-8 border-white/20 rounded-t-xl border-b backdrop-blur-sm">
<div className="absolute left-4 top-2.5 flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400/90 shadow-sm"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-sm"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-sm"></span>
</div>
<div className="absolute left-1/2 top-2.5 -translate-x-1/2">
<div className="h-2 w-16 rounded-full bg-white/20"></div>
</div>
<div className="absolute right-4 top-2.5">
<div className="h-2 w-8 rounded-full bg-white/15"></div>
</div>
</div>

<div className="absolute inset-4 top-12 rounded-lg">

<div className="mb-4 pb-3 border-b border-white/10">
<div className="flex items-center justify-between mb-2">
<div className="h-3 w-20 rounded-full bg-blue-400/40"></div>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-white/20"></div>
</div>
</div>
<div className="h-2 w-32 rounded-full bg-white/15 mb-1"></div>
<div className="h-2 w-24 rounded-full bg-white/10"></div>
</div>

<div className="grid grid-cols-3 gap-3 mb-4">
<div className="space-y-2">
<div className="bg-white/10 w-full h-16 border-white/15 border rounded-lg"></div>
<div className="h-2 w-full rounded-full bg-white/15"></div>
<div className="h-1 w-3/4 rounded-full bg-white/10"></div>
</div>
<div className="space-y-2">
<div className="bg-white/10 w-full h-16 border-white/15 border rounded-lg"></div>
<div className="h-2 w-full rounded-full bg-white/15"></div>
<div className="h-1 w-2/3 rounded-full bg-white/10"></div>
</div>
<div className="space-y-2">
<div className="h-16 w-full rounded-lg bg-white/10 border border-white/15"></div>
<div className="h-2 w-full rounded-full bg-white/15"></div>
<div className="h-1 w-4/5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="flex gap-3 mt-4">
<div className="flex-1 space-y-2">
<div className="h-12 w-full rounded-lg bg-white/5 border border-white/10"></div>
<div className="flex gap-2">
<div className="h-1.5 w-8 rounded-full bg-emerald-400/30"></div>
<div className="h-1.5 w-12 rounded-full bg-white/15"></div>
</div>
</div>
<div className="w-16 space-y-2">
<div className="h-6 w-full rounded bg-emerald-400/20"></div>
<div className="h-4 w-full rounded bg-white/10"></div>
<div className="h-2 w-full rounded bg-white/10"></div>
</div>
</div>

</div>
</div>
</div>

<div className="relative flex-1 flex flex-col justify-end mt-6">
<div className="inline-flex gap-2 bg-blue-400/10 border-blue-400/20 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 items-center w-fit">
<svg className="lucide lucide-paintbrush text-blue-400" data-icon-replaced="true" data-lucide="paintbrush" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
<span className="text-xs font-medium text-blue-400 font-geist-mono" style={{}}>Design</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 group-hover:text-blue-300 transition-colors" style={{}}>UX/UI Design</h3>
<p className="text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl font-geist-mono" style={{}}>Creating intuitive and aesthetically pleasing user interfaces that offer a frictionless experience. We combine creativity with usability to design experiences users love.</p>
</div>
</div>

<div className="group relative overflow-hidden sm:p-8 hover:bg-white/10 transition-all duration-500 flex flex-col bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 h-[600px]">

<div className="relative">

<div className="w-full h-72">

<div className="group relative overflow-hidden h-full border-white/10 border rounded-xl">
<div className="bg-neutral-900/50 h-2/3 pt-8 pr-10 pb-8 pl-10">
<div className="grid grid-cols-6 gap-4 h-full">
<div className="rounded bg-violet-500 shadow-lg"></div>
<div className="rounded bg-fuchsia-500 shadow-lg"></div>
<div className="rounded bg-emerald-500 shadow-lg"></div>
<div className="rounded bg-orange-500 shadow-lg"></div>
<div className="rounded bg-cyan-500 shadow-lg"></div>
<div className="rounded bg-rose-500 shadow-lg"></div>
</div>

</div>
<div className="pt-2 pr-4 pb-4 pl-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist" style={{}}>Vibrant Core</h3>
<p className="text-sm text-slate-400 mb-3 font-geist" style={{}}>High-contrast vibrant system</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist" style={{}}>AA/AAA Ready</span>
<button className="text-xs text-violet-300 hover:text-violet-200 font-geist" style={{}}>Use Palette</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex-1 flex flex-col justify-end mt-6">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 w-fit">
<svg className="lucide lucide-paintbrush text-blue-400" data-icon-replaced="true" data-lucide="paintbrush" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
<span className="text-xs font-medium text-blue-400 font-geist-mono" style={{}}>brand</span>
</div>
<h3 className="md:text-3xl group-hover:text-blue-300 transition-colors text-2xl font-semibold text-white tracking-tight mb-3" style={{}}>Branding and Identity</h3>
<p className="text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl font-geist-mono" style={{}}>Creating cohesive brand systems with carefully crafted color palettes, typography, and visual elements that resonate with your audience.</p>
</div>
</div>

<div className="group relative overflow-hidden sm:p-8 hover:bg-white/10 transition-all duration-500 flex flex-col bg-white/5 h-[600px] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">

<div className="relative overflow-hidden bg-neutral-950/90 w-full border-white/20 border rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-sm">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/15 bg-white/5">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/90 shadow-sm"></span>
<span className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-sm"></span>
<span className="h-3 w-3 rounded-full bg-green-500/90 shadow-sm"></span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-white/50 font-geist-mono" style={{}}>index.html</span>
<div className="h-2 w-2 rounded-full bg-emerald-400/60"></div>
</div>
</div>

<pre className="text-[13px] leading-relaxed text-white/80 font-geist-mono pt-4 pr-4 pb-4 pl-4" style={{whiteSpace: 'pre-wrap'}}><span className="text-emerald-400" style={{}}>&lt;!doctype html&gt;</span>
<span className="text-blue-400" style={{}}>&lt;html&gt;</span>
  <span className="text-blue-400" style={{}}>&lt;head&gt;</span>
    <span className="text-purple-400" style={{}}>&lt;meta</span> <span className="text-emerald-400" style={{}}>charset</span>=<span className="text-amber-300" style={{}}>"utf-8"</span><span className="text-purple-400" style={{}}>&gt;</span>
    <span className="text-purple-400" style={{}}>&lt;title&gt;</span><span className="text-white" style={{}}>Your Project</span><span className="text-purple-400" style={{}}>&lt;/title&gt;</span>
    <span className="text-purple-400" style={{}}>&lt;link</span> <span className="text-emerald-400" style={{}}>rel</span>=<span className="text-amber-300" style={{}}>"stylesheet"</span> <span className="text-emerald-400" style={{}}>href</span>=<span className="text-amber-300" style={{}}>"style.css"</span><span className="text-purple-400" style={{}}>&gt;</span>
  <span className="text-blue-400" style={{}}>&lt;/head&gt;</span>
  <span className="text-blue-400" style={{}}>&lt;body&gt;</span>
    <span className="text-emerald-400" style={{}}>&lt;script</span> <span className="text-emerald-400" style={{}}>src</span>=<span className="text-amber-300" style={{}}>"app.js"</span><span className="text-emerald-400" style={{}}>&gt;&lt;/script&gt;</span>
  <span className="text-blue-400" style={{}}>&lt;/body&gt;</span>
<span className="text-blue-400" style={{}}>&lt;/html&gt;</span></pre>

<div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400 font-geist-mono" style={{}}>Ready</span>
</div>
<span className="text-xs text-white/40 font-geist-mono" style={{}}>UTF-8</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-end mt-6">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 w-fit">
<svg className="text-purple-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m16 18 6-6-6-6"></path>
<path d="m8 6-6 6 6 6"></path>
</svg>
<span className="text-xs font-medium text-purple-400 font-geist-mono" style={{}}>Code</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 group-hover:text-purple-300 transition-colors" style={{}}>Web Development</h3>
<p className="text-white/70 leading-relaxed font-geist-mono" style={{}}>Beautiful, performant websites tailored to your brand. We build seamless user experiences that engage visitors and turn them into loyal customers.</p>
</div>
</div>

<div className="group relative overflow-hidden sm:p-8 hover:bg-white/10 transition-all duration-500 flex flex-col bg-white/5 h-[600px] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">

<div className="relative overflow-hidden bg-neutral-950/90 w-full border-white/20 border rounded-xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-sm">


<div className="p-4">
<div className="mb-4">
<h3 className="text-sm font-medium text-white/90 mb-1 font-geist-mono" style={{}}>Website Traffic Analytics</h3>
<p className="text-xs text-white/60 font-geist-mono" style={{}}>Last 7 days performance overview</p>
</div>

<div className="relative h-48 mb-4">
<svg className="text-white/80" height="100%" viewbox="0 0 400 190" width="100%">

<defs>
<pattern height="38" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 38" fill="none" opacity="0.1" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>

<g className="text-xs font-geist-mono" fill="currentColor" opacity="0.5">
<text style={{}} text-anchor="end" x="15" y="25">5k</text>
<text style={{}} text-anchor="end" x="15" y="63">4k</text>
<text style={{}} text-anchor="end" x="15" y="101">3k</text>
<text style={{}} text-anchor="end" x="15" y="139">2k</text>
<text style={{}} text-anchor="end" x="15" y="177">1k</text>
</g>

<defs>
</defs>

<path d="M30 140 L70 120 L110 100 L150 85 L190 95 L230 70 L270 60 L310 45 L350 55 L390 40" fill="none" opacity="0.9" stroke="#10b981" strokeWidth="2.5"></path>
<path d="M30 140 L70 120 L110 100 L150 85 L190 95 L230 70 L270 60 L310 45 L350 55 L390 40 L390 190 L30 190 Z" fill="url(#areaGradient)"></path>

<path d="M30 160 L70 145 L110 135 L150 125 L190 130 L230 115 L270 110 L310 95 L350 105 L390 90" fill="none" opacity="0.7" stroke="#3b82f6" strokeWidth="2"></path>
<path d="M30 160 L70 145 L110 135 L150 125 L190 130 L230 115 L270 110 L310 95 L350 105 L390 90 L390 190 L30 190 Z" fill="url(#areaGradient2)"></path>

<circle cx="390" cy="40" fill="#10b981" opacity="0.9" r="3"></circle>
<circle cx="350" cy="55" fill="#10b981" opacity="0.7" r="2.5"></circle>
<circle cx="310" cy="45" fill="#10b981" opacity="0.7" r="2.5"></circle>

<g className="text-xs font-geist-mono" fill="currentColor" opacity="0.5">
<text style={{}} text-anchor="middle" x="70" y="185">Mon</text>
<text style={{}} text-anchor="middle" x="110" y="185">Tue</text>
<text style={{}} text-anchor="middle" x="150" y="185">Wed</text>
<text style={{}} text-anchor="middle" x="190" y="185">Thu</text>
<text className="" style={{}} text-anchor="middle" x="230" y="185">Fri</text>
<text style={{}} text-anchor="middle" x="270" y="185">Sat</text>
<text style={{}} text-anchor="middle" x="310" y="185">Sun</text>
</g>
</svg>
</div>

<div className="grid grid-cols-3 gap-3 mb-4">
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-white/60 font-geist-mono" style={{}}>Visitors</span>
</div>
<p className="text-sm font-medium text-white font-geist-mono" style={{}}>4,829</p>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-xs text-white/60 font-geist-mono" style={{}}>Page Views</span>
</div>
<p className="text-sm font-medium text-white font-geist-mono" style={{}}>12,456</p>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="text-xs text-white/60 font-geist-mono" style={{}}>Bounce Rate</span>
</div>
<p className="text-sm font-medium text-white font-geist-mono" style={{}}>32.1%</p>
</div>
</div>
</div>

</div>
<div className="flex-1 flex flex-col justify-end mt-6">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 w-fit">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 12l4-4 4 4 6-6"></path>
</svg>
<span className="text-xs font-medium text-emerald-400 font-geist-mono" style={{}}>Analytics</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors" style={{}}>Data &amp; Analytics</h3>
<p className="text-white/70 leading-relaxed font-geist-mono" style={{}}>Transform data into actionable insights with custom dashboards, tracking implementations, and performance analytics that drive growth.</p>
</div>
</div>
</div>
</div><div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono" style={{}}>Services</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{}}>What I do</h2>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 mb-8 font-geist-mono" style={{}}>From initial concept to final deployment, I provide comprehensive design and development services tailored to your needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative hover:bg-white/10 transition-all duration-500 overflow-hidden bg-white/5 border-white/10 border rounded-2xl">

<div className="relative overflow-hidden bg-neutral-900/90 h-80 border-white/10 border rounded-xl">

<div className="pointer-events-none absolute right-2 top-12 bg-gradient-to-br from-white/5 to-transparent invisible w-[68%] h-[68%] border-white/5 border rounded-xl rotate-[8deg]" style={{boxShadow: '0 20px 80px rgba(0,0,0,0.4)'}}></div>

<div className="relative z-10 mx-auto mt-6 w-[88%] h-[76%] rounded-xl bg-neutral-950 border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">

<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<p className="text-xs text-white/60 font-geist-mono" style={{}}>Strategy Board</p>
</div>

<div className="px-5 pt-4">
<div className="space-y-3">
<div className="h-2 w-8 rounded-full bg-emerald-400/60"></div>
<div className="h-2 w-32 rounded-full bg-white/20"></div>
<div className="h-10 w-full rounded-lg border border-white/10 bg-white/5 flex items-center px-3">
<div className="w-6 h-2 rounded-full" style={{background: 'linear-gradient(90deg, #FF6A1A 0%, #FF8A3A 100%)'}}></div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="h-12 rounded-lg bg-white/5 border border-white/10"></div>
<div className="h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/20"></div>
<div className="h-12 rounded-lg bg-white/5 border border-white/10"></div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-6 text-emerald-400 opacity-90">
</div>
</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-center justify-between">
<span className="text-lg font-semibold text-emerald-400 tracking-tight font-geist-mono" style={{}}>01</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3" style={{}}>Strategy &amp; Research</h3>
<p className="text-white/60 leading-relaxed font-geist-mono text-sm" style={{}}>I start by understanding your goals, researching your market, and crafting a strategic foundation for success.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden">

<div className="relative overflow-hidden bg-neutral-900/90 h-80 border-white/10 border rounded-xl">


<div className="relative z-10 bg-neutral-950 w-[88%] h-[76%] border-white/15 border rounded-xl mt-6 mr-auto ml-auto shadow-[0_32px_80px_rgba(0,0,0,0.7)]">

<div className="flex border-white/5 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<p className="text-xs text-white/60 font-geist-mono" style={{}}>Design System</p>
</div>

<div className="px-5 pt-4">
<div className="space-y-4">

<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full" style={{background: 'linear-gradient(135deg, #FF6A1A 0%, #FF8A3A 100%)'}}></div>
<div className="w-4 h-4 rounded-full bg-emerald-400"></div>
<div className="w-4 h-4 rounded-full bg-blue-400"></div>
<div className="w-4 h-4 rounded-full bg-white/20"></div>
</div>

<div className="space-y-3">
<div className="h-8 w-24 rounded-lg" style={{background: 'linear-gradient(90deg, #FF6A1A 0%, #FF8A3A 100%)'}}></div>
<div className="h-6 w-full rounded-lg bg-white/10"></div>
<div className="flex gap-2">
<div className="h-4 w-16 rounded-full bg-white/20"></div>
<div className="h-4 w-12 rounded-full bg-emerald-400/30"></div>
</div>
</div>
</div>
</div>

<div className="absolute right-5 bottom-5 text-blue-400 opacity-90">
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-blue-400 text-lg font-semibold tracking-tight font-geist-mono" style={{}}>02</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3" style={{}}>Design &amp; Prototyping</h3>
<p className="text-white/60 leading-relaxed font-geist-mono text-sm" style={{}}>Creating beautiful, functional designs with interactive prototypes that bring your vision to life.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden">

<div className="relative h-80 rounded-xl bg-neutral-900/90 border border-white/10 overflow-hidden">


<div className="relative z-10 bg-neutral-950 w-[88%] h-[76%] border-white/15 border rounded-xl mt-6 mr-auto ml-auto shadow-[0_32px_80px_rgba(0,0,0,0.7)]">

<div className="flex border-white/5 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<p className="text-xs text-white/60 font-geist-mono" style={{}}>development.js</p>
</div>

<div className="px-5 pt-4 space-y-3">
<div className="flex items-center gap-2">
<span className="text-xs text-emerald-400 font-geist-mono" style={{}}>const</span>
<div className="h-2 w-16 rounded-full bg-blue-400/60"></div>
<div className="h-2 w-8 rounded-full bg-white/30"></div>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-4 rounded-full bg-purple-400/60"></div>
<div className="h-2 w-20 rounded-full bg-white/20"></div>
</div>
<div className="pl-4 space-y-2">
<div className="h-8 w-full rounded-lg bg-gradient-to-r from-emerald-400/10 to-blue-400/10 border border-emerald-400/20"></div>
<div className="flex gap-3">
<div className="h-2 w-12 rounded-full" style={{background: 'linear-gradient(90deg, #FF6A1A 0%, #FF8A3A 100%)'}}></div>
<div className="h-2 w-6 rounded-full bg-emerald-400/60"></div>
</div>
</div>

<div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400 font-geist-mono" style={{}}>Build successful</span>
</div>
</div>

<div className="absolute right-4 bottom-6 text-purple-400 opacity-90">
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-purple-400 text-lg font-semibold tracking-tight font-geist-mono" style={{}}>03</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3" style={{}}>Development &amp; Launch</h3>
<p className="text-white/60 leading-relaxed font-geist-mono text-sm" style={{}}>Building high-performance, responsive experiences with clean code and seamless deployment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8" id="work">
<div className="mx-auto max-w-6xl py-16 md:py-24">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono" style={{}}>Selected Work</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{}}>Recent Projects</h2>
<p className="text-lg text-neutral-300 max-w-2xl font-geist-mono" style={{}}>A collection of my latest design and development work for clients across various industries.</p>
</div>
<div className="space-y-8">

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs text-white/50 font-geist-mono" style={{}}>2024</span>
<div className="h-1 w-1 rounded-full bg-white/30"></div>
<span className="text-xs text-white/50 font-geist-mono" style={{}}>Web App</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors" style={{}}>SaaS Dashboard</h3>
<p className="text-neutral-400 mb-6 leading-relaxed font-geist-mono" style={{}}>A comprehensive dashboard design for a fintech startup, featuring real-time analytics, user management, and financial insights with a focus on data visualization.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>React</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>TypeScript</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Figma</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>D3.js</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-indigo-300 transition-colors font-geist-mono" href="#" style={{}}>
                  View Case Study
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="SaaS Dashboard" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
<div className="order-2">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs text-white/50 font-geist-mono" style={{}}>2024</span>
<div className="h-1 w-1 rounded-full bg-white/30"></div>
<span className="text-xs text-white/50 font-geist-mono" style={{}}>E-commerce</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors" style={{}}>Fashion E-commerce</h3>
<p className="text-neutral-400 mb-6 leading-relaxed font-geist-mono" style={{}}>A modern e-commerce platform for a luxury fashion brand, featuring advanced filtering, AR try-on capabilities, and a seamless checkout experience.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Next.js</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Shopify</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Framer Motion</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Stripe</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-emerald-300 transition-colors font-geist-mono" href="#" style={{}}>
                  View Case Study
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="order-1">
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="Fashion E-commerce" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs text-white/50 font-geist-mono" style={{}}>2023</span>
<div className="h-1 w-1 rounded-full bg-white/30"></div>
<span className="text-xs text-white/50 font-geist-mono" style={{}}>Mobile App</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors" style={{}}>Fitness Tracking App</h3>
<p className="text-neutral-400 mb-6 leading-relaxed font-geist-mono" style={{}}>A comprehensive fitness tracking mobile app with workout planning, progress analytics, and social features to keep users motivated and engaged.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>React Native</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Firebase</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Chart.js</span>
<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full font-geist-mono" style={{}}>Push Notifications</span>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-300 transition-colors font-geist-mono" href="#" style={{}}>
                  View Case Study
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="Fitness App" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all font-geist-mono" href="#" style={{}}>
              View All Projects
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="sm:px-8 pr-6 pl-6">
<div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono">About</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Behind the pixels</h2>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 max-w-2xl font-geist-mono">Designer, developer, and digital craftsperson with a passion for creating exceptional user experiences.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-7">
<div className="space-y-6 text-neutral-300 leading-relaxed mb-8">
<p className="font-geist-mono">I'm a creative frontend designer with over 6 years of experience crafting digital experiences that bridge the gap between design and technology. My journey started in graphic design, but I quickly fell in love with the dynamic nature of web development.</p>
<p className="font-geist-mono">Based in San Francisco, I work with startups, agencies, and established companies to create products that not only look beautiful but perform exceptionally. I believe in clean code, sustainable design systems, and user-centered approaches.</p>
<p className="font-geist-mono">When I'm not designing or coding, you'll find me exploring the city's coffee scene, hiking in Marin County, or contributing to open-source projects.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h4 className="text-sm font-medium text-white/90 mb-4 font-geist-mono">Design Tools</h4>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              Figma
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              Sketch
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              Adobe Creative Suite
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              Framer
            </li>
</ul>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h4 className="text-sm font-medium text-white/90 mb-4 font-geist-mono">Development</h4>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
              React / Next.js
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              TypeScript
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
              Tailwind CSS
            </li>
<li className="font-geist-mono flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              Node.js
            </li>
</ul>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="space-y-8">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h3 className="text-lg font-medium text-white mb-6 font-geist-mono">Experience</h3>
<div className="space-y-6">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-white font-geist-mono">Senior Frontend Designer</h4>
<p className="text-sm text-neutral-400 font-geist-mono">Stripe</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2022-Present</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-white font-geist-mono">UI/UX Designer</h4>
<p className="text-sm text-neutral-400 font-geist-mono">Linear</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2020-2022</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-white font-geist-mono">Frontend Developer</h4>
<p className="text-sm text-neutral-400 font-geist-mono">Vercel</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2018-2020</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h3 className="text-lg font-medium text-white mb-6 font-geist-mono">Recognition</h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 border border-white/10">
<div className="">
<h4 className="text-sm font-medium text-white font-geist-mono">Awwwards SOTD</h4>
<p className="text-xs text-neutral-400 font-geist-mono">Best UI Design</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2024</span>
</div>
<div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 border border-white/10">
<div>
<h4 className="text-sm font-medium text-white font-geist-mono">CSS Design Awards</h4>
<p className="text-xs text-neutral-400 font-geist-mono">Innovation Design</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2023</span>
</div>
<div className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 border border-white/10">
<div>
<h4 className="text-sm font-medium text-white font-geist-mono">Dribbble Top Shot</h4>
<p className="text-xs text-neutral-400 font-geist-mono">Popular Design</p>
</div>
<span className="text-xs text-white/50 font-geist-mono">2023</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
<h3 className="text-lg font-medium text-white mb-6 font-geist-mono">Certifications</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-sm text-neutral-300 font-geist-mono">Webflow Expert Certification</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-sm text-neutral-300 font-geist-mono">Google UX Design Professional</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="text-sm text-neutral-300 font-geist-mono">AWS Cloud Practitioner</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 pr-6 pl-6">
<div className="md:py-24 max-w-6xl mr-auto ml-auto pt-16 pb-16">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest font-geist-mono" style={{}}>Testimonials</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 lg:col-span-3">
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 relative h-[420px] rounded-2xl overflow-hidden border border-white/10" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '22px 22px'}}>

<div className="absolute inset-y-0 left-0 w-px bg-white/10"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/10"></div>
<div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-white/10"></div>

<div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">

<div className="relative flex md:justify-end items-center justify-center">
<div className="relative md:h-[320px] w-full h-[300px] max-w-[520px]">

<div className="absolute left-4 md:left-2 top-12 md:top-10 w-[64%] md:w-[54%] h-[78%] rotate-[-8deg] rounded-2xl border border-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] overflow-hidden bg-neutral-800/70">
<div className="absolute left-4 top-4 h-7 w-7 rounded-lg bg-white/80 border border-white/70 grid place-items-center text-neutral-900">
<svg className="lucide lucide-quote w-3.5 h-3.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="absolute left-4 bottom-4 text-white/70 font-semibold tracking-tight text-[32px] md:text-[38px] font-geist" style={{}}>“</div>
</div>

<div className="absolute left-10 md:left-8 top-10 md:top-8 w-[70%] md:w-[60%] h-[82%] rotate-[-3deg] rounded-2xl border border-white/10 shadow-[0_50px_140px_rgba(0,0,0,0.6)] overflow-hidden bg-neutral-700/80">
<div className="absolute left-4 top-4 h-7 w-7 rounded-lg bg-white/80 border border-white/70 grid place-items-center text-neutral-900">
<svg className="lucide lucide-quote w-3.5 h-3.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="absolute left-4 bottom-4 text-white/70 font-semibold tracking-tight text-[36px] md:text-[42px] font-geist" style={{}}>”</div>
</div>

<div className="absolute left-16 md:left-14 top-6 md:top-4 w-[78%] md:w-[66%] h-[84%] rounded-2xl pointer-events-none" style={{filter: 'blur(42px)', background: 'radial-gradient(140px 180px at 35% 55%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(200px 220px at 80% 60%, rgba(255,255,255,0.25), transparent 65%)'}}></div>

<div className="absolute left-16 md:left-14 top-6 md:top-4 w-[78%] md:w-[66%] h-[84%] rotate-[2deg] rounded-2xl bg-white/90 shadow-[0_60px_160px_rgba(0,0,0,0.7)] border border-white/80 overflow-hidden">

<div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(250,250,250,0.6) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.95) 100%)'}}></div>

<div className="absolute left-4 top-4 h-8 w-8 rounded-lg bg-white/85 border border-white/80 grid place-items-center text-neutral-900">
<svg className="lucide lucide-quote w-4 h-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>

<div className="absolute left-4 right-4 top-14">
<p className="md:text-base leading-relaxed text-xs text-neutral-900 font-geist-mono" style={{}}>“Working with Jeremi was a game‑changer. He translated our vision into a polished product and delivered beyond expectations — fast, reliable, and detail‑obsessed.”</p>
</div>

<div className="absolute left-4 bottom-5 flex items-center gap-3">
<div className="grid place-items-center font-semibold text-neutral-900 font-geist bg-neutral-900/10 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c16a8c2-83a8-42a0-87bc-c96f7b50bcfa_320w.jpg)] bg-cover border-neutral-900/10 border rounded-full" style={{}}>JA</div>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-neutral-900 leading-none font-geist" style={{}}>Jordan Avery</span>
<span className="text-xs text-neutral-500 leading-none mt-1 font-geist-mono" style={{}}>Head of Product, Acme Co.</span>
</div>
</div>

<div className="absolute right-4 bottom-6 flex items-center gap-1">
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(252, 211, 77)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[13px] font-medium text-neutral-700 ml-1 font-geist-mono" style={{}}>5.0</span>
</div>
</div>
</div>
</div>

<div className="relative flex items-center md:items-center">
<div className="px-6 md:px-10 lg:px-14">
<h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 md:mb-5 max-w-[16ch]" style={{}}>Trusted by Industry Leaders</h3>
<p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md font-geist-mono mb-6" style={{}}>Join 50+ satisfied clients who've transformed their digital presence with exceptional design and development.</p>
<a className="button" href="#work" style={{padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '400', color: '#f4f0ff', textAlign: 'center', position: 'relative', cursor: 'pointer', textDecoration: 'none', display: 'inline-block', marginTop: '1rem'}}>View all review<div className="button-border" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', borderRadius: '0.5rem', zIndex: '-1'}}>
<div style={{content: '\'\'', position: 'absolute', borderRadius: '0.5rem', padding: '1px', inset: '0', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.24) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', pointerEvents: 'none'}}>
</div>
</div><div style={{content: '\'\'', display: 'block', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%', borderRadius: '0.5rem', background: 'linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24)', boxShadow: 'inset 0 0 12px rgba(151, 200, 255, 0.44)', zIndex: '-1'}}>
</div><div onmouseout="this.style.opacity='0'" onmouseover="this.style.opacity='1'" style={{content: '\'\'', display: 'block', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24)', boxShadow: 'inset 0 0 12px rgba(151, 200, 255, 0.44)', borderRadius: '0.5rem', opacity: '0', zIndex: '-1', transition: 'all 0.3s ease-in'}}></div></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="px-6 sm:px-8">
<div className="mx-auto max-w-6xl py-10 md:py-16">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<span className="font-geist-mono" style={{}}>Available for freelance — Q4</span>
</div>
<nav className="flex items-center gap-4 text-sm text-neutral-400">
<a className="hover:text-white transition font-geist-mono" href="#" style={{}}>Twitter</a>
<a className="hover:text-white transition font-geist-mono" href="#" style={{}}>Dribbble</a>
<a className="hover:text-white transition font-geist-mono" href="#" style={{}}>GitHub</a>
</nav>
</div>
</div>
</footer>
</main>




    </>
  );
}
