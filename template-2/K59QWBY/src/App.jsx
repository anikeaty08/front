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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

(function () {
  function enhanceModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;

    // Ensure modal centers content
    modal.classList.add('items-center', 'justify-center');

    // Grow the container width to match the reference
    const shell = modal.querySelector('.w-full.max-w-5xl');
    if (shell) {
      shell.classList.remove('max-w-5xl');
      shell.classList.add('max-w-7xl', 'w-[92vw]', 'sm:w-[90vw]');
    }

    // Thicker border and stronger shadow on the frame
    const frame = modal.querySelector('.rounded-2xl.overflow-hidden');
    if (frame) {
      frame.classList.add('ring-2', 'ring-white/20', 'shadow-2xl', 'bg-black');
    }
  }

  // Apply on load and when the video thumb is tapped
  document.addEventListener('DOMContentLoaded', () => {
    enhanceModal();
    const openBtn = document.getElementById('openVideo');
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        // Re-apply in case DOM changed or classes were reset
        enhanceModal();
      }, { passive: true });
    }
  });
})();

}

{

    (function () {
      const wrap = document.getElementById('tst-cards');
      const avatars = document.querySelectorAll('#tst-avatars [data-target]');
      const nameEl = document.getElementById('tst-name');

      function setActive(id, shouldScroll = false) {
        // Avatars
        avatars.forEach(btn => {
          const isActive = btn.dataset.target === id;
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
          btn.classList.toggle('ring-2', isActive);
          btn.classList.toggle('ring-orange-500', isActive);
          btn.classList.toggle('ring-1', !isActive);
          btn.classList.toggle('ring-white/10', !isActive);
        });

        // Cards
        wrap.querySelectorAll('[data-id]').forEach(card => {
          const active = card.dataset.id === id;
          card.classList.toggle('border-l-2', active);
          card.classList.toggle('border-orange-500', active);
          card.classList.toggle('opacity-60', !active);
          card.classList.toggle('opacity-100', active);
          if (active && shouldScroll) {
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }
        });

        // Label
        const activeCard = wrap.querySelector('[data-id="' + id + '"]');
        if (activeCard) {
          const person = activeCard.querySelector('.font-medium')?.textContent || '';
          nameEl.textContent = person.toUpperCase();
        }
      }

      avatars.forEach(btn => {
        btn.addEventListener('click', () => setActive(btn.dataset.target, true));
        btn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActive(btn.dataset.target, true);
          }
        });
      });

      // Initialize without scrolling the page
      setActive(document.querySelector('#tst-avatars [aria-selected="true"]')?.dataset.target || 'erwin', false);

      // Icons
      if (window.lucide) lucide.createIcons();
    })();
  
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[700px] saturate-50 hue-rotate-15"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<header className="bg-black w-full mt-5">
<nav className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center">
<a className="text-4xl font-semibold tracking-tight" href="#">Cosmo</a>
</div>

<div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 text-base items-center">

<a className="group relative inline-flex items-center hover:text-white whitespace-nowrap text-base text-white/80 pt-2 pr-1 pb-2 pl-1" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Home</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Home</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative inline-flex items-center hover:text-white whitespace-nowrap text-base text-white/80 py-2 px-1" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Resources</span>
<span className="block absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">Resources</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative inline-flex items-center hover:text-white whitespace-nowrap text-base text-white/80 py-2 px-1" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Pricing</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Pricing</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative inline-flex items-center hover:text-white whitespace-nowrap text-base text-white/80 py-2 px-1" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">FAQ</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">FAQ</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
</div>

<div className="flex gap-3 space-x-3 items-center">
<a className="group relative hidden sm:inline-flex items-center hover:text-white whitespace-nowrap text-base text-white/80 pt-2 pr-2 pb-2 pl-2" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Log in</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Log in</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative inline-flex items--white/90 text-base font-medium text-black bg-white ring-black/10 ring-1 rounded-md pt-2 pr-4 pb-2 pl-4 hover:scale-95 transition-transform duration-300 ease-out" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Get Started</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Get Started</span>
</span>
</a>
</div>
</div>
</nav>
</header>

<main className="relative">
<section className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-12 gap-6 relative">

<aside className="hidden md:block md:col-span-3 font-medium pt-16">
<ul className="text-base text-white/70 space-y-0">
<li className=""><a className="hover:text-white transition-colors" href="#">Buttons</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Components</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Transitions</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Animations</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Loaders</a></li>
</ul>
<ul className="text-base text-white/70 mt-8 space-y-0">
<li className=""><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Tools</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">References</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Tutorials</a></li>
</ul>
</aside>

<div className="md:col-span-9 relative pt-16 pb-28">
<h1 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[84px] leading-[0.95] font-medium tracking-tight pr-20">Make websites no one forgets.<br className="hidden sm:block" /></h1>

<div className="flex gap-3 mt-16 mb-20 items-center">
<a className="group relative inline-flex items--white/90 hover:scale-95 transition-transform duration-300 ease-out text-base font-medium text-black bg-white ring-black/10 ring-1 rounded-md pt-4 pr-6 pb-4 pl-6" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Become a member</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Become a member</span>
</span>
</a>
<a className="group relative inline-flex items-center gap-3 hover:bg-white/15 text-base font-medium text-white bg-white/10 ring-white/10 ring-1 rounded-md pt-4 pr-6 pb-4 pl-6 hover:scale-95 transition-transform duration-300 ease-out" href="#">
<div className="flex -space-x-1">
<img alt="" className="w-6 h-6 object-cover ring-white/50 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ae65266e-7508-4549-a134-cec94e06768b_320w.jpg" style={{}} />
<img alt="" className="ring-white/60 ring-1 w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e3ced54a-95a5-4606-ba42-b3a2c82d4cd0_800w.jpg" />
</div>
<div className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">About us</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">About us</span>
</div>
</a>
</div>

<p className="text-[15px] leading-7 text-base font-medium text-white/80 max-w-lg pr-10">Cosmo came from constantly digging through old projects wondering, "How did I build that again?" It is our personal toolbox, packed with components, techniques, tricks and tutorials—and it will keep growing.<span className="hidden max-w-7xl w-[92vw] sm:w-[90vw] ring-2 ring-white/20 shadow-2xl flex items-center justify-center"></span></p>
</div>
</div>
</section>
</main><section className="relative pt-20 pb-024">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] font-medium tracking-tight">The platform we wanted for ourselves, created for you.<br className="hidden sm:block" /></h2>
<p className="text-base font-medium text-white/70 mt-4 mr-40 ml-40">Created by two award-winning creative developers, our vault unlocks the techniques, components, code, and tools behind our work—ready for you to build, customize, and make your own.</p>
</div>
<div className="max-w-7xl mx-auto mt-10 px-6">
<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 overflow-hidden">
<div className="grid md:grid-cols-12 gap-0">

<aside className="md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<div className="flex flex-col h-full">
<div className="sm:px-5 sm:py-5 flex pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<span className="text-xl font-semibold tracking-tight">Cosmo</span>
</div>
<nav className="px-2 sm:px-3 py-2 space-y-1">
<a className="group flex items-center gap-3 text-white bg-white/10 ring-white/10 ring-1 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg className="lucide lucide-library w-4 h-4" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="text-base font-medium">The Vault</span>
</a>
<a className="group flex items-center gap-3 hover:text-white hover:bg-white/5 transition text-white/80 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg className="lucide lucide-video w-4 h-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
<span className="text-base font-medium">Videos</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 transition" href="#">
<svg className="lucide lucide-asterisk w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="text-base font-medium">Cosmo Basics</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 transition" href="#">
<svg className="lucide lucide-folder-closed w-4 h-4" data-lucide="folder-closed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-base font-medium">Icons</span>
<span className="ml-auto inline-flex items-center rounded px-1.5 py0.5 text-[10px] font-medium tracking-wide bg-white/10 ring-1 ring-white/10 text-white/80">NEW</span>
</a>
</nav>
<div className="sm:px-5 border-white/10 border-0 mt-auto pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Profile avatar" className="ring-2 ring-black/60 w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6f7da34-abcb-49e3-a841-d4e62f21981c_320w.jpg" />
<div className="">
<p className="text-base font-medium">Alex Doe</p>
</div>
</div>
<button className="hover:bg-white/5 ring-white/10 ring-0 rounded-md pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>
</div>
</aside>

<div className="md:col-span-9 sm:p-5 pt-4 pr-4 pb-4 pl-4">

<div className="flex items-center">
<div className="sm:w-[360px] md:w-[285px] relative w-full ml-auto">
<svg className="lucide lucide-search w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
<input className="placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm bg-white/5 w-full ring-white/10 ring-1 rounded-md pt-2.5 pr-14 pb-2.5 pl-9" placeholder="Search" type="text" />
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-medium text-white/60 bg-white/5 ring-1 ring-white/10 rounded px-1.5 py-1">⌘K</span>
</div>
</div>

<div className="sm:mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="3D Morphing Button Animation" href="#">
<div className="aspect-video relative">
<img alt="3D morphing button cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a451e501-3e59-49a9-89c0-52acdbaae49a_800w.jpg" />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">3D Morphing Button Animation</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Liquid Loading Transitions" href="#">
<div className="aspect-video relative">
<img alt="Liquid loading cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58be6ce7-035f-46d6-9f95-cf56eada0b13_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Liquid Loading Transitions</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Glassmorphism Card Stack" href="#">
<div className="aspect-video relative">
<img alt="Glassmorphism stack cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41309524-e7f0-4633-8deb-552def21161e_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Glassmorphism Card Stack</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Particle Text Reveal Effect" href="#">
<div className="aspect-video relative">
<img alt="Particle text cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6ed96465-db7e-45ef-bcf4-47673299512c_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Particle Text Reveal Effect</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Magnetic Hover Interactions" href="#">
<div className="aspect-video relative">
<img alt="Magnetic hover cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="/assets/6bf698eb-55e4-461f-ac18-812dfa973ea2_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Magnetic Hover Interactions</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Scrolling Parallax Gallery" href="#">
<div className="aspect-video relative">
<img alt="Parallax gallery cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5162c07d-8a65-4a42-9a8c-c48dbea36297_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Scrolling Parallax Gallery</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Neural Network Visualization" href="#">
<div className="aspect-video relative">
<img alt="Neural network cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="/assets/ad0632f1-3d17-420f-a5c3-a480aa924a86_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 px-2">Neural Network Visualization</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Geometric Shape Morphing" href="#">
<div className="aspect-video relative">
<img alt="Shape morphing cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac2177b6-afbc-450f-9d6e-cc93fdcd0ce4_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 mx-2">Geometric Shape Morphing</p>
</div>
</a>

<a className="group overflow-hidden hover:bg-white/[0.06] transition ring-white/10 ring-1 rounded-md" data-title="Holographic Menu System" href="#">
<div className="aspect-video relative">
<img alt="Holographic menu cover" className="group-hover:opacity-100 transition opacity-90 w-full h-full object-cover rounded-xl pt-2 pr-2 pb-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d4348471-331e-4e7d-9163-ae2c2919b61c_800w.jpg" style={{}} />
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<p className="text-sm font-medium text-white/90 px-2">Holographic Menu System</p>
</div>
</a>
</div>
</div>
</div>
</div>
</div><section className="relative pt-24 pb-16">
<div className="max-w-max mr-auto ml-auto pr-6 pl-6">
<div className="text-center">
<h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] font-medium tracking-tight mr-70 ml-70 pr-80 pb-5 pl-80">With Cosmo, creative developers can push ideas further—working faster, smarter, and better.</h2>
<div className="mt-8">
<div className="inline-flex items-center gap-2 text-sm text-white/70">
<span className="">Trusted by:</span>
</div>

<div className="flex gap-2 overflow-x-auto mt-4 pt-2 pb-2 items-center justify-center" id="tst-avatars">
<button aria-selected="true" className="relative shrink-0 rounded-full p-0.5 ring-2 ring-orange-500 transition focus:outline-none" data-target="erwin" type="button">
<img alt="Erwin Luijendijk" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-orange/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4db3fcdf-68df-4153-be81-882b81b56d63_320w.jpg" />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="chris" type="button">
<img alt="Chris Evans" className="sm:h-10 sm:w-10 ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b27ed2ba-6ad0-4646-9927-e07d6be54834_800w.jpg" />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="jesper" type="button">
<img alt="Jesper Landberg" className="sm:h-10 sm:w-10 ring-2 ring-black/60 w-9 h-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80aff1f9-dccb-4b5d-8dc6-89e37c211930_320w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="jordan" type="button">
<img alt="Jordan Gilroy" className="sm:h-10 sm:w-10 w-9 h-9 object-cover ring-black/60 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/622fbc3c-5896-4f6c-a4ba-809a830e1143_800w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="bimo" type="button">
<img alt="Bimo Tri" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d8b3453-1c7a-431d-a7ed-285559dc1b97_800w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="dylan" type="button">
<img alt="Dylan Brouwer" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_800w.jpg" />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="nicola" type="button">
<img alt="Nicola Romei" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="maya" type="button">
<img alt="Maya Chen" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_320w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="alex" type="button">
<img alt="Alex Rodriguez" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70017958-96b8-4232-9284-4e0056cd67cf_800w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="sarah" type="button">
<img alt="Sarah Johnson" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="/assets/1ef2b9e6-728c-4b89-845c-b9052fb25ec8_320w.jpg" style={{}} />
</button>
<button aria-selected="false" className="relative shrink-0 rounded-full p-0.5 ring-1 ring-white/10 hover:ring-white/30 transition focus:outline-none" data-target="marcus" type="button">
<img alt="Marcus Thompson" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8faa49c4-f5c4-4886-a0ff-a43519822f5b_320w.jpg" style={{}} />
</button>
</div>

<div className="mt-2 flex justify-center">
<span className="text-[11px] font-medium tracking-wide text-white/80 bg-white/5 ring-1 ring-white/10 rounded px-2 py-1" id="tst-name">ERWIN LUIJENDIJK</span>
</div>
</div>
</div>

<div className="mt-10 relative">
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" id="tst-cards">

<article className="snap-start sm:w-[520px] lg:w-[560px] shrink-0 bg-white/[0.08] ring-1 ring-white/10 sm:p-6 opacity-100 w-[88vw] border-orange-500 rounded-md border- pt-5 pr-5 pb-5 pl-5 border-l-2" data-id="erwin">
<p className="text-[15px] leading-7 text-white">The Cosmo Vault is a must‑have for freelancers and agencies. It saves a tremendous amount of time, delivers exceptional quality, and enhances creativity in your projects.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="ring-2 ring-black/60 w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4db3fcdf-68df-4153-be81-882b81b56d63_320w.jpg" />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Erwin Luijendijk</p>
<p className="text-white/50">Cut The Code</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="chris">
<p className="text-[15px] leading-7 text-white/90">If you don't know GSAP, it can be tricky to translate abstract animation concepts to real-world scenarios. Dennis and Ilja have come to the rescue with this treasure-trove of useful techniques. There's something for everyone here, grab-and-go snippets or code as a jumping off point. This gets my official GSAP stamp of approval.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b27ed2ba-6ad0-4646-9927-e07d6be54834_800w.jpg" />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Chris Evans</p>
<p className="text-white/50">Developer Education · GSAP</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="jesper">
<p className="text-[15px] leading-7 text-white/90">Cosmo Supply is a gem for clever and well‑thought‑out solutions for animations and components. Even I came across a few neat tricks I hadn't seen before. Both beginners and seasoned pros will find it incredibly useful. Stamp of approval and I'll be coming back to it!</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80aff1f9-dccb-4b5d-8dc6-89e37c211930_320w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Jesper Landberg</p>
<p className="text-white/50">Creative Developer</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="jordan">
<p className="text-[15px] leading-7 text-white/90">The creative developer's cheat code. Cosmo is a one‑stop shop, offering everything from snippets to advanced interactions that elevate projects to the next level. Easy to implement and adapt into something unique.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/622fbc3c-5896-4f6c-a4ba-809a830e1143_800w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Jordan Gilroy</p>
<p className="text-white/50">Web Designer</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="bimo">
<p className="text-[15px] leading-7 text-white/90">Flawless UI—detailed, easy to implement, and straight‑up reliable. The code is clean, well‑explained, and ready to drop in without a hitch. Built by pros, and I'm using this on most of my projects. Cosmo is the real deal.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d8b3453-1c7a-431d-a7ed-285559dc1b97_800w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Bimo Tri</p>
<p className="text-white/50">Webflow Developer</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="dylan">
<p className="text-[15px] leading-7 text-white/90">My go‑to resource for the best cloneables and code snippets. It saves time and elevates my workflow. The scaling system is a game‑changer—exactly what I was missing and now my fluid scaling solution for every project.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_800w.jpg" />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Dylan Brouwer</p>
<p className="text-white/50">Digital Designer & No‑Code Dev</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="nicola">
<p className="text-[15px] leading-7 text-white/90">High‑quality resources with intuitive guides, making the process of designing standout websites faster and easier. Helps creatives achieve better results in less time.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Nicola Romei</p>
<p className="text-white/50">Digital Designer</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="maya">
<p className="text-[15px] leading-7 text-white/90">Cosmo has completely transformed how I approach web development. The components are production-ready and the documentation is crystal clear. It's like having a senior developer on your team guiding every decision.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_320w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Maya Chen</p>
<p className="text-white/50">Frontend Engineer · Stripe</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="alex">
<p className="text-[15px] leading-7 text-white/90">The attention to detail in every component is incredible. From micro-interactions to accessibility considerations, Cosmo sets the bar high. It's become an essential part of our design system.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70017958-96b8-4232-9284-4e0056cd67cf_800w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Alex Rodriguez</p>
<p className="text-white/50">Lead Designer · Figma</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-md bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="sarah">
<p className="text-[15px] leading-7 text-white/90">What I love most about Cosmo is how it bridges the gap between design and development. The components feel natural to work with and the code quality is exceptional. It's saved our team countless hours.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="/assets/1ef2b9e6-728c-4b89-845c-b9052fb25ec8_320w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Sarah Johnson</p>
<p className="text-white/50">Product Designer · Vercel</p>
</div>
</div>
</article>

<article className="snap-start w-[88vw] sm:w-[520px] lg:w-[560px] shrink-0 rounded-2xl bg-white/[0.08] ring-1 ring-white/10 p-5 sm:p-6 opacity-60" data-id="marcus">
<p className="text-[15px] leading-7 text-white/90">As someone who works with multiple frameworks, I appreciate how well-structured and adaptable these components are. Cosmo has become my go-to resource for building sophisticated user interfaces quickly.</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-black/60" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8faa49c4-f5c4-4886-a0ff-a43519822f5b_320w.jpg" style={{}} />
<div className="text-xs uppercase tracking-wide">
<p className="text-white/80 font-medium">Marcus Thompson</p>
<p className="text-white/50">Full-Stack Developer · GitHub</p>
</div>
</div>
</article>
</div>
</div>

</div>
</section><section className="relative pt-24 pb-16">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] font-medium tracking-tight">The toolkit powering award-winning websites.</h2>
</div>
<div className="max-w-screen-2xl mt-10 mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-12 gap-4">

<article className="md:col-span-6 overflow-hidden relative ring-white/10 ring-1 rounded-2xl">
<div className="relative z-10 pt-6 pr-6 pb-6 pl-6">
<h3 className="text-[22px] sm:text-[24px] font-medium tracking-tight">Ready‑to‑use Components</h3>
<p className="text-base font-medium text-white/70 mt-2">Let’s be honest—having to rebuild a slider (or any core component) from scratch every time is a pain. That’s why we’ve set up clean, customizable structures built with best practices, so you can skip the tedious setup and get right to the fun part.</p>
</div>
<div className="px-0 pb-0 relative z-10">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Component gallery preview" className="absolute inset-0 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a94f0892-d87e-4173-ba0b-b5a019b0ca3f_1600w.jpg" style={{}} />
</div>
</div>
</article>

<article className="md:col-span-6 overflow-hidden relative max-h-none ring-white/10 ring-1 rounded-2xl h-full flex flex-col">
<div className="flex-none max-h-none pt-6 pr-6 pb-6 pl-6">
<h3 className="text-[22px] sm:text-[24px] font-medium tracking-tight">Learn by Doing</h3>
<p className="text-base font-medium text-white/70 mt-2">Shortcuts get things moving, but they don’t build mastery. We give you the knowledge to design with intention—so your work doesn’t just move, it stands out.
</p>
</div>
<div className="pt-0 pr-0 pb-0 pl-0 flex-1 flex">
<div className="relative overflow-hidden flex-1 min-h-0">
<img alt="Video tutorial preview" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0b6e651c-02e3-4ca1-807b-56aad9651ad9_1600w.jpg" style={{}} /><button className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black flex items-center justify-center ring-1 ring-black/10">
<svg className="lucide lucide-play w-6 h-6" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</article>

<article className="md:col-span-3 overflow-hidden bg-white/[0.05] ring-white/10 ring-1 rounded-2xl">
<div className="pt-0 pr-0 pb-0 pl-0">

<div className="relative overflow-hidden border-0">
<div className="overflow-hidden bg-black/80 border-neutral-900 border">
<div className="sm:h-80 text-black bg-white/90 w-full h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfcf269d-f613-4bf5-bbcf-fb727a177e78_800w.jpg)] max-w-full max-h-none bg-cover pt-4 pr-4 pb-4 pl-4"></div>
<div className="bg-black items-center">
</div>
</div>
</div>

<h3 className="text-[28px] sm:text-[32px] text-lg font-medium tracking-tight mt-6 mr-4 ml-4">Cosmo Basics</h3>
<p className="text-base font-medium text-white/70 mt-2 mr-4 ml-4">Great websites aren’t about flashy effects, they’re built on solid foundations. Master the core techniques every award-worthy project relies on.</p>
</div>
</article>

<article className="md:col-span-6 rounded-2xl bg-white/[0.05] ring-1 ring-white/10 overflow-hidden">
<div className="p-6">
<h3 className="text-[28px] sm:text-[32px] text-lg font-medium tracking-tight mt-6">Code Snippets</h3>
<p className="mt-2 text-base font-medium text-white/70">Grab‑and‑go snippets that solve common UI tasks. Drop them in and ship faster.</p>
<div className="mt-4 rounded-lg bg-black ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="inline-flex items-center gap-2 text-xs font-medium text-white/80">
<svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="">JavaScript</span>
</div>
<button className="inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white" id="copySnippetJs">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
<span className="">Copy</span>
</button>
</div>
<pre className="text-[12px] leading-6 overflow-auto text-white/90 pt-4 pr-4 pb-4 pl-4"><code className="">// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(link ={">"} {"{"}
  link.onclick = e ={">"} {"{"}
    const id = link.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {"{"}
      e.preventDefault();
      el.scrollIntoView({"{"} behavior: 'smooth', block: 'start' {"}"});
      history.pushState(null, '', id);
    {"}"}
  {"}"};
{"}"});</code></pre>
</div>
</div>
</article>

<article className="md:col-span-3 rounded-2xl bg-white/[0.05] ring-1 ring-white/10 overflow-hidden">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-2 items-center">
<h3 className="text-[28px] sm:text-[32px] text-lg font-medium tracking-tight mt-6">Cosmo Icons</h3>
<span className="text-[10px] ring-1 ring-white/10 font-medium text-white/80 tracking-wide bg-orange-500/95 rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">NEW</span>
</div>
<p className="mt-2 text-base font-medium text-white/70">Clean, scalable icons ready to copy or download in seconds.</p>
<div className="grid grid-cols-5 gap-2 mt-8">
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-wand-2 w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] flex ring-white/10 ring-1 items-center justify-center">
<svg className="lucide lucide-palette w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] flex ring-white/10 ring-1 items-center justify-center">
<svg className="lucide lucide-phone lucide-palette w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-camera w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="13"></circle></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-scan-eye w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="12"></circle><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-heart w-[20px] h-[20px] text-orange-400" data-icon-replaced="true" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-star w-[20px] h-[20px] text-orange-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield w-[20px] h-[20px] text-orange-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-zap w-[20px] h-[20px] text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-moon w-[20px] h-[20px] text-orange-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-sun w-[20px] h-[20px] text-orange-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-gift w-[20px] h-[20px] text-orange-400" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18"></rect><path></path><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-target w-[20px] h-[20px] text-orange-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-compass w-[20px] h-[20px] text-orange-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-flame w-[20px] h-[20px] text-orange-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-feather w-[20px] h-[20px] text-orange-400" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-diamond w-[20px] h-[20px] text-orange-400" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-crown w-[20px] h-[20px] text-orange-400" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-gem w-[20px] h-[20px] text-orange-400" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-infinity w-[20px] h-[20px] text-orange-400" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-hexagon w-[20px] h-[20px] text-orange-400" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-scan-eye lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="scan-eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="12"></circle><path></path></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-bell-dot lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="bell-dot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="18" cy="8"></circle></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-link lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="link" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-infinity w-[20px] h-[20px] text-orange-400" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-hexagon w-[20px] h-[20px] text-orange-400" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-scan-eye lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="scan-eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="12"></circle><path></path></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-bell-dot lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="bell-dot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="18" cy="8"></circle></svg>
</div><div className="aspect-square rounded-lg bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-link lucide-hexagon w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="link" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
</article>

<div className="md:col-span-12 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 px-6 py-5 text-center">
<p className="text-base font-medium text-white/60">More features are coming soon…</p>
</div>
</div>
</div>
</section>
<section className="relative pt-24 pb-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] font-medium tracking-tight">A single plan, always improving.
</h2>
<p className="text-base font-medium text-white/70 mt-4 mr-20 ml-20">Gain full access to our resource vault and connect in Slack with a community of creatives sharing ideas, feedback, and inspiration. Join today and secure your price for as long as you’re with us—no surprise increases, ever.</p>
</div>
<div className="max-w-7xl mt-10 mr-auto ml-auto pr-6 pl-6">
<div className="grid gap-5 md:grid-cols-3">

<article className="ring-1 ring-black/10 sm:p-8 flex flex-col text-black bg-white rounded-md pt-6 pr-6 pb-6 pl-6 hover:scale-95 transition-transform duration-300 ease-out">

<div className="flex-none">
<h3 className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">Member</h3>
</div>

<div className="flex-none mt-4">
<p className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">$25<span className="text-[15px] font-medium text-black/60">/month</span></p>
<p className="text-[11px] font-medium text-black/60 tracking-wide text-center mt-1">$75 BILLED QUARTERLY</p>
</div>

<div className="flex-none text-center mt-6">
<div className="inline-flex items-center gap-2 bg-black/5 ring-1 ring-black/10 rounded-md p-1">
<button className="text-sm font-medium px-3 py-1.5 rounded bg-white ring-1 ring-black/10">Quarterly</button>
<button className="text-sm font-medium px-3 py-1.5 rounded text-black/70 hover:text-black hover:bg-white/60 transition">Annually</button>
</div>
<p className="text-[11px] font-medium tracking-wide text-black/60 mt-2">Save 20% on an annual plan</p>
</div>

<div className="flex-1 mt-6 flex items-start">
<p className="text-[15px] leading-7 font-medium text-black/80 text-center">One simple plan with full access to the Vault. Pay quarterly or save with the yearly option.</p>
</div>

<div className="flex-none mt-6 sm:mt-8">
<button className="inline-flex text-base font-medium text-white bg-black w-full ring-black/10 ring-1 rounded-md pt-3.5 pb-3.5 items-center justify-center">Become a Cosmo Member</button>
</div>
</article>

<article className="rounded-md bg-orange-500 text-black ring-1 ring-black/10 p-6 sm:p-8 flex flex-col relative hover:scale-95 transition-transform duration-300 ease-out">


<div className="flex-none">
<h3 className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">Lifetime</h3>
</div>

<div className="flex-none mt-3">
<p className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">$599</p>
<p className="text-[11px] font-medium text-black/70 tracking-wide text-center mt-1">LIFETIME PLAN</p>
</div>

<div className="flex-none mt-6">
<div className="inline-flex ring-black/10 ring-1 text-sm font-medium text-center bg-black/10 w-full rounded-md pt-3 pr-3 pb-3 pl-3 items-center justify-center">
          Limited availability
        </div>
<p className="text-[11px] font-medium text-black/70 tracking-wide text-center mt-2">Next price tier: $750</p>
</div>

<div className="flex-1 mt-6 flex items-start">
<p className="text-[15px] leading-7 inline-flex items-start gap-2 font-medium text-black/80 text-center">As a bonus, we'll send you a copy of this website including animations.</p>
</div>

<div className="flex-none mt-6 sm:mt-8">
<button className="inline-flex text-base font-medium text-white bg-black w-full ring-black/10 ring-1 rounded-md pt-3.5 pb-3.5 items-center justify-center">
          Become a Lifetime Member™
        </button>
</div>
</article>

<article className="bg-white/[0.05] ring-1 ring-white/10 sm:p-8 flex flex-col text-white rounded-md pt-6 pr-6 pb-6 pl-6 hover:scale-95 transition-transform duration-300 ease-out">

<div className="flex-none">
<h3 className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">Team</h3>
</div>

<div className="flex-none mt-4">
<p className="text-[28px] sm:text-[32px] font-medium tracking-tight text-center">$20<span className="text-[15px] font-medium text-white/60">/month per user</span></p>
<p className="text-[11px] font-medium text-white/50 tracking-wide text-center mt-1">$60 BILLED QUARTERLY / MEMBER (MIN 2)</p>
</div>

<div className="flex-none text-center mt-6">
<div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-md p-1">
<button className="text-sm font-medium px-3 py-1.5 rounded bg-white/10 ring-1 ring-white/10">Quarterly</button>
<button className="text-sm font-medium px-3 py-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition">Annually</button>
</div>
<p className="text-[11px] font-medium tracking-wide text-white/60 mt-2">Save 20% on an annual plan</p>
</div>

<div className="flex-1 mt-6 flex items-start">
<p className="text-[15px] leading-7 font-medium text-white/80 text-center">Bring your team and benefit from a discounted price per member.</p>
</div>

<div className="flex-none mt-6 sm:mt-8">
<button className="w-full inline-flex justify-center items-center text-base font-medium bg-white text-black ring-1 ring-white/10 rounded-md py-3.5">
          Start with your team
        </button>
</div>
</article>
</div>

<div className="sm:mt-16 text-center max-w-3xl mt-14 mr-auto ml-auto px-20">
<h3 className="text-[22px] sm:text-[24px] font-medium tracking-tight">Student discounts, we’ve lived that life too.</h3>
<p className="text-base font-medium text-white/70 mt-3 pr-20 pl-20">Show us your student ID in an email, and we’ll hook you up with a deal for full Osmo access.</p>
</div>
</div>
</section>
<section className="relative border-white/10 border-t pt-24 pb-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] font-medium tracking-tight">Take the next
      step—sign up and open the vault of possibilities.
    </h2>
<div className="mt-6 flex items-center justify-center gap-3 text-white/70">
<div className="flex -space-x-1.5">
<img alt="" className="w-7 h-7 object-cover ring-black/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f84e0ac4-082e-4160-8877-3043e2a8b63a_320w.jpg" />
<img alt="" className="ring-black/20 ring-1 w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/23e61e53-b267-4d21-89e3-92c0a91a1cd2_320w.jpg" />
<img alt="" className="w-7 h-7 object-cover ring-black/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be34e0e0-bfda-49c7-b231-b353206dd7a2_320w.jpg" />
</div>
<span className="text-sm font-medium">5000+ active members</span>
</div>
<div className="mt-8">
<a className="group relative inline-flex items--white/90 hover:scale-95 transition-transform duration-300 ease-out text-base font-medium text-black bg-white ring-black/10 ring-1 rounded-md pt-4 pr-6 pb-4 pl-6" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Become a member</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Become a member</span>
</span>
</a>
</div>
</div>
<span aria-hidden="true" className="pointer-events-none select-none absolute inset-x-0 -bottom-6 text-white/[0.03] text-[22vw] leading-none font-medium tracking-tight text-center">Cosmo</span>
</section>
<footer className="relative border-white/10 border-t">
<div className="max-w-7xl mx-auto px-6 py-14">
<div className="grid gap-10 md:grid-cols-12">

<div className="md:col-span-3">
<p className="text-[11px] font-medium tracking-wide text-white/50 uppercase">Sitemap</p>
<ul className="mt-4 space-y-2">
<li className=""><a className="text-base font-medium text-white hover:underline" href="#">Home</a></li>
<li className=""><a className="text-base font-medium text-white/80 hover:text-white" href="#">Pricing</a></li>
<li><a className="group inline-flex items-center gap-1 text-base font-medium text-white/80 hover:text-white" href="#">
              Resources
              <span className="text-[10px] font-medium text-white/50 group-hover:text-white/70 ml-0.5">110</span>
</a></li>
<li><a className="text-base font-medium text-white/80 hover:text-white" href="#">Log In
            </a></li>
<li className=""><a className="text-base font-medium text-white/80 hover:text-white" href="#">Sign Up</a></li>
</ul>
</div>

<div className="md:col-span-3">
<p className="text-[11px] font-medium tracking-wide text-white/50 uppercase">Company</p>
<ul className="mt-4 space-y-2">
<li className=""><a className="text-base font-medium text-white/80 hover:text-white" href="#">Licensing</a></li>
<li><a className="text-base font-medium text-white/80 hover:text-white" href="#">Terms & Conditions</a></li>
<li><a className="text-base font-medium text-white/80 hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="text-base font-medium text-white/80 hover:text-white" href="#">Cookie Policy</a></li>
</ul>
</div>

<div className="md:col-span-3">
<p className="text-[11px] font-medium tracking-wide text-white/50 uppercase">Contact</p>
<ul className="mt-4 space-y-2">
<li className=""><a className="text-base font-medium text-white/80 hover:text-white" href="#">FAQ</a></li>
<li className=""><a className="text-base font-medium text-white/80 hover:text-white" href="#">Support</a></li>
</ul>
</div>

<div className="md:col-span-3">
<p className="text-[11px] font-medium tracking-wide text-white/50 uppercase">Newsletter</p>
<p className="mt-3 text-base font-medium text-white/70">You read this far, might as well sign up.</p>
<form className="mt-5 flex items-center gap-3">
<input className="flex-1 bg-transparent text-sm font-medium placeholder-white/50 text-white focus:outline-none border-b border-white/20 focus:border-white/40 py-2" placeholder="First name" type="text" />
<input className="flex-[1.4] placeholder-white/50 focus:outline-none focus:border-white/40 text-sm font-medium text-white bg-transparent border-white/20 border-b pt-2 pb-2" placeholder="john.doe@cosmo.create" type="email" />
<button className="shrink-0 inline-flex items-center justify-center text-sm font-medium text-white bg-white/10 hover:bg-white/15 ring-1 ring-white/10 rounded-md px-4 py-2" type="submit">
            Sign up
          </button>
</form>
</div>
</div>
<div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium tracking-wide text-white/60">
<span className="">©2025 COSMO SUPPLY B.V. ALL RIGHTS RESERVED.</span>
<nav className="inline-flex items-center gap-4">
<a className="hover:text-white" href="#">LINKEDIN</a>
<a className="hover:text-white" href="#">INSTAGRAM</a>
<a className="hover:text-white" href="#">X/TWITTER</a>
</nav>
<span className="whitespace-nowrap">IMAGINED BY KREATIV MEDIA</span>
</div>
</div>
</footer>
</section>
    </>
  );
}
