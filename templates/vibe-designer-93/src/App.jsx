import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function openMobileMenu() {
      const overlay = document.getElementById('mobile-menu-overlay');
      const panel = document.getElementById('mobile-menu-panel');
      
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => {
        panel.classList.remove('translate-x-full');
      }, 10);
    }

    function closeMobileMenu() {
      const overlay = document.getElementById('mobile-menu-overlay');
      const panel = document.getElementById('mobile-menu-panel');
      
      panel.classList.add('translate-x-full');
      document.body.style.overflow = '';
      
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 300);
    }

    document.getElementById('mobile-menu-btn').addEventListener('click', openMobileMenu);
    document.getElementById('mobile-menu-close').addEventListener('click', closeMobileMenu);

    // Close menu when clicking on links
    document.querySelectorAll('#mobile-menu-panel nav a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  


      document.addEventListener('DOMContentLoaded', function () {
        try { lucide.createIcons(); } catch (e) { console.log('Lucide icons init failed'); }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full -z-10 h-[880px] blur-3xl bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e8f8a18-3a4d-4b1b-9b05-db364b6430e6_3840w.jpg")'}}></div>

<header className="sm:px-6 md:px-10 w-full max-w-7xl mt-10 mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="cursor-pointer text-lg font-semibold tracking-tight" onclick="window.location.href='/home'" role="button" style={{fontFamily: '\'Playfair Display\', serif'}}>VIBE</span>
</div>
<nav className="hidden md:flex gap-6 text-sm text-neutral-700 items-center">
<a className="hover:text-black transition-colors font-medium" href="/work">Work</a>
<a className="hover:text-black transition-colors font-medium" href="/about">About</a>
<a className="hover:text-black transition-colors font-medium" href="/contact">Contact</a>
</nav>
<div className="flex gap-3 items-center">
<a className="hidden md:inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 rounded-full pr-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="/contact">
        Book a vibe session
      </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition" id="mobile-menu-btn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="mobile-menu-overlay">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeMobileMenu()"></div>
<div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300" id="mobile-menu-panel">
<div className="flex items-center justify-between p-6 border-b border-neutral-200">
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>VIBE</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 text-neutral-900 hover:bg-neutral-100 transition" id="mobile-menu-close">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col p-6">
<a className="flex items-center gap-3 py-4 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-100" href="/work">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
          Work
        </a>
<a className="flex items-center gap-3 py-4 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-100" href="/about">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          About
        </a>
<a className="flex items-center gap-3 py-4 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-100" href="/contact">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Contact
        </a>
<div className="mt-8">
<a className="w-full inline-flex items-center justify-center gap-2 h-12 text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-full px-6 shadow-lg" href="/contact">
<svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
            Book a vibe session
          </a>
</div>
<div className="mt-8 pt-6 border-t border-neutral-200">
<p className="text-sm font-medium text-neutral-900 mb-3">Follow the vibes</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</nav>
</div>
</div>

</header>

<section className="relative sm:px-6 md:px-10 w-full max-w-7xl mt-12 mr-auto mb-16 ml-auto pr-4 pl-4">
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-4xl font-medium text-black tracking-tighter max-w-4xl" style={{fontFamily: '\'Playfair Display\', serif'}}>I design moods<img alt="Mood thumbnail" className="inline-block align-middle sm:h-12 sm:w-20 md:h-16 md:w-28 w-14 h-10 object-cover rounded-xl mr-2 ml-2 shadow-[0_2px_10px_rgba(0,0,0,0.12)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22088bb8-d417-4e6a-9056-75d1a270d105_320w.jpg" style={{}}/> that move people - <span className="whitespace-nowrap">for brands,</span> products, and spaces.</h1>
<p className="sm:text-2xl text-base text-black max-w-3xl mt-4">
        Vibe-forward art direction and identity systems that translate feeling into form. From concept and mood to launch and motion—crafted end-to-end.
      </p>
<div className="flex flex-wrap gap-2.5 mt-8">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 13 3 3 8-8"></path><path d="M7 21h10"></path><path d="M12 17V3"></path></svg>
          Art Direction
        </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0"></path></svg>
          Identity Systems
        </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<svg className="lucide lucide-heart w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
          Moodboards
        </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect className="" height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
          Web &amp; Motion
        </span>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-base font-medium text-white bg-neutral-900 h-12 rounded-full pr-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="/work">
          See selected work
        </a>
<a className="inline-flex items-center justify-center hover:bg-neutral-100 transition text-base font-medium text-neutral-900 bg-white h-12 border-neutral-200 border rounded-full pr-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="/contact">
          Get in touch
        </a>
</div>
</section>

<section className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-10 mb-20 mx-auto p-6" id="work">
<div className="relative pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-40"></div>
</div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
<div className="flex flex-col justify-between">
<div className="">
<span className="text-sm text-neutral-500">Selected work</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 font-medium tracking-tighter" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Identities and moods that shift perception.
            </h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm">Art Direction</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0"></path></svg>
<span className="text-sm">Identity</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-sm">Web &amp; Motion</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Across industries and mediums</p>
<p className="text-sm text-neutral-600 mt-1 max-w-sm">
              From music and hospitality to SaaS and retail—tailored vibes that resonate with the audience they’re made for.
            </p>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 max-w-sm rounded-full mt-4 pr-4 pl-4" href="/contact">
              Request full case studies
              <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<article className="overflow-hidden aspect-[3/4] bg-center cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f64b936b-e5e9-46d9-9f25-4fef3057fab5_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl relative" onclick="window.location.href='/work-neon'" role="button">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 13 3 3 8-8"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">Identity</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Neon Ritual</p>
</div>
</article>
<article className="overflow-hidden aspect-[3/4] bg-center cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a39f3cd9-468a-419b-8a30-601984f324af_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl relative" onclick="window.location.href='/work-neon'" role="button">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur">
<svg className="lucide lucide-wallet-minimal w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="wallet-minimal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 14h.01"></path><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">Web</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Soft Minimal</p>
</div>
</article>
<article className="overflow-hidden aspect-[1/1] bg-center cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c583f692-ace5-4a72-833d-a76bfd85eb32_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl relative" onclick="window.location.href='/work-neon'" role="button">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur">
<svg className="lucide lucide-glasses w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="glasses" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="15" r="4"></circle><circle cx="18" cy="15" r="4"></circle><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"></path><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"></path><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">Campaign</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Desert Bloom</p>
</div>
</article>
<article className="overflow-hidden aspect-[1/1] bg-center cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d19751ed-27e2-4304-97d1-b97ea00d4854_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl relative" onclick="window.location.href='/work-neon'" role="button">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-1.5 py-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center text-xs text-white/90 bg-black/30 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur">Motion</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight">Nocturne</p>
</div>
</article>
</div>
</div>
</section>

<section className="relative sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
<div className="relative rounded-3xl bg-neutral-950 ring-1 ring-neutral-800 p-2 sm:p-3">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-24 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-40"></div>
<div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 relative">

<aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-b from-emerald-500 to-emerald-600 ring-1 ring-emerald-300 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
</div>
<span className="text-white text-sm font-medium tracking-tight">Vibe Studio</span>
</div>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-neutral-800 transition text-neutral-300 ring-1 ring-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path></svg>
</button>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57ff8f09-a1ef-4c2d-a129-c6e65a08af58_320w.jpg"/>
<div>
<p className="text-white text-sm font-medium tracking-tight">Sarah Mitchell</p>
<p className="text-neutral-400 text-xs">Creative Director</p>
</div>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 bg-neutral-900 ring-1 ring-neutral-800 rounded-xl px-3 py-2">
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" placeholder="Search projects..." type="text"/>
</div>
</div>
<div className="mt-6">
<p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Navigation</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
              Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-100 bg-neutral-800 ring-1 ring-neutral-700" href="#">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 2 7l10 5 10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
              Creative Suite
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
              Brand Archive
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              Style Tools
            </a>
</nav>
</div>
<div className="mt-6">
<p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Recent Projects</p>
<ul className="space-y-1 text-sm">
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">Brand identity for wellness startup</li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">Motion graphics for tech launch</li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">Restaurant concept visual identity</li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">Fashion campaign art direction</li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition">SaaS platform design system</li>
</ul>
</div>
<div className="mt-auto pt-4">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4">
<div className="absolute inset-x-0 -top-6 h-14 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
<p className="text-sm text-white font-medium tracking-tight">Collaborate with Team</p>
<p className="text-xs text-neutral-400 mt-1">Share projects and get feedback from your creative team</p>
<div className="flex items-center gap-2 mt-3">
<img alt="" className="w-6 h-6 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa45d691-5e28-4ddb-8f86-2fe1444c0306_320w.jpg"/>
<img alt="" className="w-6 h-6 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/548251c7-a97a-4c25-8e2d-79f4498b49e0_320w.jpg"/>
<img alt="" className="ring-1 ring-neutral-700 w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1798060b-f297-4981-a4f3-745854800fb8_320w.jpg"/>
<button className="ml-auto inline-flex items-center gap-2 text-xs text-neutral-900 bg-emerald-400 hover:bg-emerald-300 transition rounded-full px-3 py-1.5 ring-1 ring-emerald-300">
                Invite designers
                
              </button>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-6 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute left-10 top-8 w-1 h-1 rounded-full bg-white/20"></div>
<div className="absolute left-1/3 top-14 w-1 h-1 rounded-full bg-white/30"></div>
<div className="absolute right-16 top-10 w-1 h-1 rounded-full bg-white/20"></div>
<div className="absolute right-1/4 top-1/3 w-1 h-1 rounded-full bg-white/30"></div>
<div className="absolute left-1/4 bottom-12 w-1 h-1 rounded-full bg-white/20"></div>
</div>
<header className="flex items-start justify-between">
<div className="">
<h2 className="text-xl sm:text-2xl text-white font-medium tracking-tight">Creative Mood Generator</h2>
<p className="text-sm text-neutral-400 mt-1">Transform your brand vision into compelling visual narratives and design systems</p>
</div>
<div className="inline-flex items-center gap-2">
<button className="w-8 h-8 rounded-lg ring-1 ring-neutral-800 hover:bg-neutral-800 text-neutral-300 inline-flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</header>
<div className="mt-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4 sm:p-6 relative">
<div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-300 bg-neutral-800/70 rounded-full px-3 py-1 ring-1 ring-neutral-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Creative Brief
            </span>
<div className="inline-flex items-center gap-2">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-full ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 inline-flex items-center justify-center rounded-full ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-4 max-w-xl ml-auto">
<div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3">
              Create a sophisticated brand identity for a luxury wellness retreat. The mood should evoke tranquility, premium quality, and natural harmony. Think earthy tones, minimal typography, organic shapes, and zen-like aesthetics that appeal to mindful consumers.
            </div>
</div>

<div className="mt-8 flex items-end justify-center gap-4">
<div className="relative -rotate-6">
<div className="w-44 h-32 rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/389452fb-7d5a-4d11-81be-91823501615d_800w.jpg"/>
</div>
</div>
<div className="relative z-10">
<div className="w-52 h-36 rounded-xl overflow-hidden ring-1 ring-emerald-300 shadow-[0_0_0_2px_rgba(16,185,129,0.35)]">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/380849b5-ffd2-425b-99bd-f17d70bf7dbc_800w.webp"/>
</div>
</div>
<div className="relative rotate-6">
<div className="w-44 h-32 rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3690225-7765-4298-a988-97f56cce1613_800w.webp"/>
</div>
</div>
</div>

<div className="mt-6 max-w-xl">
<div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3">
              Perfect! I've generated three mood directions for your luxury wellness retreat. The concepts blend natural textures with sophisticated minimalism, featuring warm earth tones, clean typography, and organic elements that convey premium tranquility.
            </div>
</div>

<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-900/30 rounded-full px-3 py-1 ring-1 ring-emerald-700">Brand Identity
              <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
</span>
<span className="inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-900/30 rounded-full px-3 py-1 ring-1 ring-emerald-700">Style Guide
              <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="14" x="3" y="3"></rect><path d="M7 7h6"></path><path d="M7 11h6"></path></svg>
</span>
</div>
</div>

<div className="mt-4 flex items-end gap-3">
<div className="flex-1 rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 px-3 py-2">
<div className="flex items-center gap-2">
<button className="inline-flex hover:text-emerald-400 transition text-neutral-400 w-8 h-8 items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<input className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" placeholder="Describe your brand vision..." type="text"/>
</div>
</div>
<button className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition ring-1 ring-emerald-400 inline-flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
</button>
</div>
<p className="mt-2 text-[11px] text-neutral-500">Vibe Studio generates personalized creative concepts. Collaborate with confidence knowing your ideas are secure.</p>
</main>

<aside className="lg:col-span-3 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 flex flex-col">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-xs text-emerald-200 bg-emerald-900/40 rounded-full px-3 py-1 ring-1 ring-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Creative Suite Pro
          </span>
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
</button>
</div>
<div className="mt-4 flex items-center gap-6">
<button className="relative text-sm text-white">
<span>ASSETS</span>
<span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></span>
</button>
<button className="text-sm text-neutral-500">EXPORTS</button>
</div>
<div className="mt-6">
<div className="flex items-center gap-2 mb-2">
<p className="text-sm text-neutral-300 font-medium tracking-tight">Active Projects</p>
<span className="inline-flex items-center text-[11px] text-black bg-emerald-400 rounded-full px-2 py-0.5 ring-1 ring-emerald-300">Live</span>
</div>
<div className="space-y-2">

<label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
<span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
<div className="flex-1">
<p className="text-sm text-neutral-200">Tech Startup Rebrand</p>
</div>
</label>

<div className="p-3 rounded-xl ring-1 ring-emerald-700 bg-emerald-900/20">
<label className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="relative w-4 h-4 rounded-md ring-1 ring-emerald-600 bg-emerald-500/20">
<span className="absolute inset-0.5 rounded-[3px] bg-emerald-400"></span>
</span>
<p className="text-sm text-neutral-200">Wellness Retreat Brand</p>
</div>
<svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</label>
<ul className="mt-3 space-y-2 text-sm text-neutral-400 pl-7 list-disc">
<li>Logo concepts and variations</li>
<li className="">Color palette and typography system</li>
</ul>
</div>

<label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
<span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
<div className="flex-1">
<p className="text-sm text-neutral-200">Fashion Campaign</p>
</div>
</label>
</div>
</div>
<div className="mt-6">
<p className="text-sm text-neutral-300 font-medium tracking-tight">Design Tools</p>
<div className="mt-3 space-y-3">

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="4" width="18" x="3" y="3"></rect><path d="M7.5 7.5h9v9h-9z"></path></svg>
<div className="">
<p className="text-sm text-neutral-200">Adobe Creative Suite</p>
<p className="text-xs text-neutral-500">Full design toolkit with cloud sync</p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-emerald-900/30 ring-1 ring-emerald-600">
<span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-emerald-400"></span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="m12 1 2.35 2.35L17 1h5v5l-2.35 2.35L22 11v2l-2.35 2.35L22 18v5h-5l-2.35-2.35L12 23l-2.35-2.35L7 23H2v-5l2.35-2.35L2 13v-2l2.35-2.35L2 6V1h5l2.35 2.35z"></path></svg>
<div className="">
<p className="text-sm text-neutral-200">Figma</p>
<p className="text-xs text-neutral-500">Collaborative design and prototyping</p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-emerald-900/30 ring-1 ring-emerald-600">
<span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-emerald-400"></span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline className="" points="14,2 14,8 20,8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
<div className="">
<p className="text-sm text-neutral-200">Notion</p>
<p className="text-xs text-neutral-500">Project documentation and brand guidelines</p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-neutral-800 ring-1 ring-neutral-700">
<span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-neutral-500"></span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 mt-12 pt-16 px-4" id="services">
<div className="grid grid-cols-1 gap-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div>
<p className="text-sm text-neutral-600">Packages</p>
<h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 font-medium tracking-tighter" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Choose the flow that fits your project
            </h3>
<p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch]">
              Clear scopes and sprint-based delivery. Momentum without guesswork.
            </p>
</div>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition text-sm font-medium text-white bg-neutral-900 ring-neutral-800 ring-1 rounded-xl pt-3 pr-6 pb-3 pl-6" href="/contact">
            Get a tailored quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Vibe Sprint</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
<svg className="lucide lucide-fast-forward w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="fast-forward" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>
                Fast
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">$8k</span>
<span className="text-neutral-600 text-sm">per week</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Rapid direction, palette, type, and initial boards.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Two mood directions + validation
              </li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Palette &amp; type stack
              </li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 bg-neutral-100 w-full border-neutral-200 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="/contact">
              Start a Vibe Sprint
            </a>
</div>
<div className="relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 shadow-lg shadow-emerald-100/50">
<div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-emerald-600 text-white text-xs font-medium px-3 py-1 ring-2 ring-white">Most popular</div>
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Identity + Vibe</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs text-emerald-800">
<svg className="lucide lucide-layers w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="layers" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(6, 95, 70)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                Depth
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">$22k</span>
<span className="text-neutral-600 text-sm">3-week sprint</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Complete identity with mood system, guides, and web starters.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Logo suite, palette, type, and usage
              </li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Motion + sound guidelines
              </li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:bg-emerald-700 transition text-sm font-medium text-white bg-emerald-600 w-full ring-emerald-600 ring-1 rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="/contact">
              Book Identity + Vibe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Embedded Creative</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
<svg className="lucide lucide-play w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Embedded
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-medium tracking-tighter">$3.5k</span>
<span className="text-neutral-600 text-sm">per day</span>
</div>
<p className="text-sm text-neutral-600 mt-2">Hands-on execution across art direction, design, and motion.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Roadmaps, standups, async updates
              </li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority iteration
              </li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm font-medium text-neutral-900 bg-neutral-100 w-full border-neutral-200 border rounded-xl mt-8 pt-3 pr-4 pb-3 pl-4" href="/contact">
              Discuss Embedded
            </a>
</div>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              What’s included
            </div>
<p className="">Weekly demos, shared boards, and delivery-ready files on every engagement.</p>
</div>
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Flexible scope
            </div>
<p>Scale up or pause between sprints—built for momentum and clarity.</p>
</div>
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Custom vibes
            </div>
<p className="">Have a unique brief? I’ll tailor deliverables and cadence to your goals.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 ring-1 ring-neutral-800 p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -left-24 top-1/3 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-40"></div>
<div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
<svg className="text-indigo-500" fill="none" height="14" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 19L2 5h18L11 19z"></path></svg>
          About
        </div>
<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>
          My journey in creating memorable brand experiences.
        </h2>
<div className="mt-10 relative">
<img alt="Design workspace" className="w-full object-cover rounded-3xl ring-neutral-800 ring-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb872d35-322c-47ad-bfae-95429c023789_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent"></div>
</div>
</div>
<div className="lg:col-span-1">
<div className="relative pl-8">
<div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>
<div className="absolute left-0 top-6 h-24 w-px bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></div>
<div className="relative mb-10">
<span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
<p className="text-[11px] uppercase text-neutral-400 tracking-[0.2em]">2024-2025</p>
<p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Started as a graphic designer at boutique agencies</p>
</div>
<div className="relative mb-10">
<span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
<p className="text-[11px] uppercase text-neutral-400 tracking-[0.2em]">2024-2025</p>
<p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Art direction for music and lifestyle brands</p>
</div>
<div className="relative mb-10">
<span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
<p className="text-[11px] uppercase text-neutral-400 tracking-[0.2em]">2024-2025</p>
<p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Founded Vibe Studio, developed methodology</p>
</div>
<div className="relative mb-10">
<span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
<p className="text-[11px] uppercase text-neutral-400 tracking-[0.2em]">2024</p>
<p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Expanded into motion and interactive experiences</p>
</div>
<div className="relative">
<span className="absolute -left-3 top-3 h-px w-3 bg-neutral-700"></span>
<p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">2025</p>
<p className="mt-1 text-white text-base sm:text-lg font-medium tracking-tight">Building the future of mood-driven design systems</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto mt-10 mb-24 pt-12 px-8 pb-10" id="contact">
<div className="relative bg-neutral-50">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b border-neutral-200 pb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path></svg>
<h3 className="text-2xl sm:text-3xl text-neutral-900 font-medium tracking-tighter" style={{fontFamily: '\'Playfair Display\',serif'}}>Vibe</h3>
</div>
<p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
              Let’s turn your feeling into a system your team can ship with. Send a note—responses within 24 hours.
            </p>
</div>
<div className="">
<h4 className="text-neutral-900 font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition" href="#work">Work</a></li>
<li><a className="hover:text-emerald-600 transition" href="#vibes">Vibe Stack</a></li>
</ul>
</div>
<div className="">
<h4 className="text-neutral-900 font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition" href="mailto:hello@vibestudio.xyz">hello@vibestudio.xyz</a></li>
<li className=""><a className="hover:text-emerald-600 transition" href="tel:+1-555-VIBE-01">+1 555 VIBE 01</a></li>
</ul>
</div>
</div>
<div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 ring-1 ring-emerald-200 text-xs text-emerald-800 bg-emerald-100 rounded-full px-3 py-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Now booking Q4 2025
              </div>
<h4 className="text-xl sm:text-2xl text-neutral-900 font-medium tracking-tighter" style={{fontFamily: '\'Playfair Display\',serif'}}>Ready to find the vibe?</h4>
<ul className="text-sm text-neutral-700 space-y-3">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Senior, hands-on direction
                </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Weekly boards and demos
                </li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 hover:text-emerald-600 transition text-neutral-700" href="mailto:hello@vibestudio.xyz">
<svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
                  hello@vibestudio.xyz
                </a>
<span className="text-neutral-400 hidden sm:inline">•</span>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition" href="tel:+1-555-VIBE-01">
<svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  Schedule a call
                </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2">Name</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="Your name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2">Email</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-2">Company</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="Company name" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2">Budget</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5">
<option className="bg-white" value="8-15k">$8k–$15k</option>
<option className="bg-white" value="15-30k">$15k–$30k</option>
<option className="bg-white" value="30k+">$30k+</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-2">Timeline</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5">
<option className="bg-white" value="asap">ASAP</option>
<option className="bg-white" value="1-2m">1–2 months</option>
<option className="bg-white" value="3m+">3+ months</option>
</select>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2">Focus</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5">
<option className="bg-white">Identity + Vibe</option>
<option className="bg-white">Art Direction</option>
<option className="bg-white">Web &amp; Motion</option>
<option className="bg-white">Campaign</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 mb-2">Project details</label>
<textarea className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="What are you building? Goals, scope, links…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<p className="text-xs text-neutral-600">I’ll reply within 24 hours with next steps.</p>
<button className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-white bg-emerald-500 rounded-xl px-4 py-2.5 items-center" type="submit">
<svg className="w-4 h-4" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Send inquiry
                </button>
</div>
</form>
</div>
</div>
<div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 border-t border-neutral-200 mt-8 pt-6 justify-between">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
<p className="text-neutral-500 text-sm">© 2025 Vibe Studio. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500 text-sm">
<span>Remote-first • Global</span>
<span className="hidden sm:inline text-neutral-300">•</span>
<span>Working across timezones</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg>
</a>
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
