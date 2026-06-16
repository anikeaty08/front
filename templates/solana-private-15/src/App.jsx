import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  // Simple router logic using visibility toggling
  function showChat() {
    const landing = document.getElementById('landing-view');
    const chat = document.getElementById('chat-view');
    
    // Fade out landing
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.classList.add('hidden');
        chat.classList.remove('hidden');
        // Trigger reflow
        void chat.offsetWidth;
        chat.style.opacity = '1';
    }, 500);
  }

  function hideChat() {
    const landing = document.getElementById('landing-view');
    const chat = document.getElementById('chat-view');
    
    chat.style.opacity = '0';
    
    setTimeout(() => {
        chat.classList.add('hidden');
        landing.classList.remove('hidden');
        void landing.offsetWidth;
        landing.style.opacity = '1';
    }, 500);
  }

  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  if (mobileBtn && mobileMenu && closeMobile) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.remove('hidden');
      setTimeout(() => lucide.createIcons(), 10);
    });
    closeMobile.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
    });
  }

  // Initialize icons
  lucide.createIcons();
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" style={{}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>
<style className="">
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


<div className="h-full overflow-y-auto w-full transition-opacity duration-500" id="landing-view">
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">

<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="w-auto h-12" src="https://i.ibb.co/ZRc2kt2R/logotype.png"/>
</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#features">Features</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#pricing">Access</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#faq">Support</a>
<div className="relative inline-block group text-xs rounded-full">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer" onclick="showChat()">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Connect Wallet</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            Menu
          </button>
</nav>

<section className="z-10 sm:pt-20 md:pt-64 md:pb-32 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto">
            Chat directly, wallet to wallet.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
            Limited makes it effortless to message any address on Solana. No email, no sign-ups, fully encrypted—a private tool for the on-chain world.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center" onclick="showChat()">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Start Chat</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Launch App</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
<button className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" onclick="showChat()">
              View demo
            </button>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-24 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Seen on</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
</div>
</section>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl md:text-5xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-geist tracking-tighter" style={{}}>Your chats, fully encrypted and always yours.</h2>
<p className="mt-4 text-base text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Limited keeps your conversations private, connects you directly to any wallet, and secures your data—without leaks or tracking.</p>
<div className="flex [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll mt-6 gap-x-3 gap-y-3 items-center">
<button className="inline-flex items-center gap-2 hover:bg-emerald-300 transition text-sm font-medium text-black bg-emerald-400 rounded-lg pt-2 pr-4 pb-2 pl-4 font-geist" onclick="showChat()">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Launch App
              </button>
</div>
</div>
<div className="[animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll relative">
<img alt="Gallery preview" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0ec50b9-39d2-4e60-9d17-f3928794a5c3_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">What you get</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" style={{}}>Features built for on-chain life</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Total privacy, instant delivery, and wallet-based identity. Everything just works—so you can focus on the deal.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative">
<img alt="Live Albums" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5badae71-a5f7-4201-aee1-3b316e682fb0_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">NEW</span>
<span className="text-xs text-white/60 font-geist">Direct Chat</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-geist tracking-tighter" style={{}}>Messages that stay private</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Start a chat with any Solana address. Messages are encrypted end-to-end, visible only to you and the recipient.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" onclick="showChat()">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Find wallets
              </button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-black bg-emerald-400 rounded-lg px-4 py-2 hover:bg-emerald-300 transition font-geist" onclick="showChat()">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Start a Chat
              </button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                Private by default
              </h3>
<span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Message only the wallets you trust. No ads, no public feeds, no spam.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Privacy UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65113ce9-a580-4434-aa12-2253604447d9_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight flex items-center gap-2 font-geist">
                Zero Metadata
              </h3>
<span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/15 px-2 py-0.5 text-[11px] font-medium text-sky-200 font-geist">E2EE</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Limited strips metadata and protects anonymity—no IP logging or location tracking.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Quality comparison" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1ea7f91-6fdb-4ff8-ad33-2990e77b1b48_800w.webp"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Spam Filtering
              <span className="ml-2 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/15 px-2 py-0.5 text-[11px] font-medium text-purple-200 font-geist">PRO</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Limited filters spam and verifies on-chain reputation automatically.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Curation UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57cac1f5-e6a1-4abb-b269-708e893cfb51_800w.jpg"/>
</div>
</div>
</div>

<div className="overflow-hidden bg-white/5 border-white/10 border rounded-2xl relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Lightning fast sync
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Send messages in milliseconds with direct Solana node connection.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Speed UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07790607-7723-4ad4-a2f9-0c434f5a1dbb_800w.webp"/>
</div>
</div>
</div>

<div className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2 font-geist">
              Seamless negotiation
            </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Perfect for OTC deals, NFT trades, and private coordination.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Collaboration UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_800w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal font-geist">Pricing</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter" style={{}}>Simple, fair access</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
            Start free. Upgrade to Limited+ for higher limits, permanent history, and priority routing.
          </p>
</div>

<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(56,189,248,0.14) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Popular</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Free</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="text-4xl sm:text-5xl text-white font-geist tracking-tighter" style={{}}>$0</p>
<span className="text-white/70 text-sm mb-1 font-geist">/ forever</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">
                Everything to start chatting on Solana immediately.
              </p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">100 Daily Msgs</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Standard Speed</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Wallet Login</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Spam Filter</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Encrypted History</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition font-geist cursor-pointer" onclick="showChat()">
              Connect Wallet
              <svg className="lucide lucide-arrow-up-right w-4.5 h-4.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% -10%, rgba(168,85,247,0.16) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Recommended</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl text-white font-medium tracking-tight font-geist">Limited+</h3>
<div className="mt-3 flex flex-col items-center justify-center gap-1">
<p className="text-3xl sm:text-4xl text-white font-geist tracking-tighter" style={{}}>1,000,000 $LMTD</p>
<span className="text-white/70 text-sm mb-1 font-geist">held in wallet</span>
</div>
<div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                  Available after launch on pump.fun
              </div>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Unlimited Msgs</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Priority Nodes</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Permanent History</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Wallet Search</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Group Chats</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-black text-sm font-medium hover:from-emerald-300 hover:to-sky-300 transition font-geist cursor-pointer" onclick="showChat()">
              Coming Soon
              <svg className="lucide lucide-rocket w-4.5 h-4.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative" id="faq">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-3xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Support</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter" style={{}}>Answers to common questions</h2>
<p className="mt-3 text-base text-white/70 font-geist">Can't find what you're looking for? Email us at support@lmtd.fun.</p>
</div>
<div className="mt-10 max-w-3xl mx-auto space-y-3 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<details className="group sm:p-5 bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">How private is Limited?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Chats are end-to-end encrypted. Only the wallet owner can decrypt messages, and we do not store private keys.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">Is it really just a wallet?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Yes. No email or phone required. Just sign a message to prove ownership of your address.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">How do I get Limited+?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Limited+ is exclusive to $LMTD token holders. You must hold 1,000,000 $LMTD in your wallet. The token will be available after our launch on pump.fun.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="text-sm sm:text-base font-medium font-geist">When is the launch?</div>
<span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-open:rotate-45">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="sr-only font-geist">Toggle</span>
</span>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">We are finalizing security audits. Follow our socials for the official pump.fun launch announcement.</p>
</details>
</div>
<div className="mt-8 text-center [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist" onclick="showChat()">
            Contact support
          </button>
</div>
</div>
</section>

<footer className="xl:mt-0 border-white/10 border-t mt-10 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="/">
<img alt="Limited" className="h-6 w-auto" src="https://i.ibb.co/ZRc2kt2R/logotype.png"/>
</a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">Limited is a secure, private way to message on Solana—wallet to wallet, no noise. Encrypted, anonymous, and built for crypto natives.</p>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 font-geist" onclick="showChat()">
                Start Chat
              </button>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#features">Features</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Access</a></li>
<li><a className="hover:text-white font-geist" href="#faq">Support</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">About</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Terms</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Limited Labs. All rights reserved.</p>
</div>
</div>
</footer>
</div>

<div className="hidden h-full flex overflow-hidden font-geist opacity-0 transition-opacity duration-500" id="chat-view">

<aside className="w-full md:w-80 border-r border-white/10 bg-black flex flex-col h-full md:relative absolute z-20">

<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500"></div>
<span className="font-medium text-sm">0x8a...4b2</span>
</div>
<div className="flex items-center gap-2">
<button className="text-white/50 hover:text-white transition" title="New Chat">
<svg className="lucide lucide-square-pen" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path></svg>
</button>
<button className="text-white/50 hover:text-white transition md:hidden" onclick="hideChat()">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="p-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-2.5 text-white/30" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 placeholder:text-white/30" placeholder="Search address..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">

<button className="w-full text-left p-2 rounded-lg bg-white/10 hover:bg-white/10 transition flex items-center gap-3 group">
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="text-sm font-medium truncate">alex.sol</span>
<span className="text-[10px] text-white/40">2m</span>
</div>
<p className="text-xs text-white/60 truncate">Sent the transaction hash.</p>
</div>
</button>

<button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition flex items-center gap-3 group">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-medium text-xs">0x</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="text-sm font-medium truncate">0x71...9a</span>
<span className="text-[10px] text-white/40">1h</span>
</div>
<p className="text-xs text-white/40 truncate">Are you interested in the listing?</p>
</div>
</button>
<button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition flex items-center gap-3 group">
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46e6b3f0-588b-48b7-bf03-113640abac90_320w.webp"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="text-sm font-medium truncate text-white/60">dao-treasury.sol</span>
<span className="text-[10px] text-white/40">1d</span>
</div>
<p className="text-xs text-white/40 truncate">Proposal signed.</p>
</div>
</button>
</div>

<div className="p-4 border-t border-white/10 mt-auto">
<button className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition" onclick="hideChat()">
<svg className="lucide lucide-log-out" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
        Disconnect &amp; Back Home
      </button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-neutral-900/20 h-full relative">

<header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-black/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="md:hidden mr-1">
<button className="text-white/70" onclick="alert('Sidebar toggle would go here')">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
<span className="font-semibold text-sm">alex.sol</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20 font-medium">Online</span>
</div>
<div className="flex items-center gap-4">
<button className="text-white/40 hover:text-white transition">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</button>
<button className="text-white/40 hover:text-white transition">
<svg className="lucide lucide-info" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">

<div className="flex justify-center">
<span className="text-[10px] font-medium text-white/30 uppercase tracking-widest">Today</span>
</div>

<div className="flex gap-3 max-w-[85%]">
<img alt="User" className="w-8 h-8 rounded-full object-cover mt-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<div className="space-y-1">
<div className="bg-white/10 border border-white/5 px-4 py-2.5 rounded-2xl rounded-bl-none text-sm text-white/90 leading-relaxed">
                    Hey! Saw your offer on Tensor. Is it still available?
                </div>
<div className="text-[10px] text-white/30 ml-1">10:42 AM</div>
</div>
</div>

<div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
<div className="space-y-1">
<div className="bg-emerald-500 text-black px-4 py-2.5 rounded-2xl rounded-br-none text-sm font-medium leading-relaxed">
                    Yeah it is. I can do 45 SOL if we do it direct.
                </div>
<div className="text-[10px] text-white/30 mr-1 text-right">10:45 AM</div>
</div>
</div>

<div className="flex gap-3 max-w-[85%]">
<img alt="User" className="w-8 h-8 rounded-full object-cover mt-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c48395a-230d-4e2a-a017-84d6e79485f6_320w.webp"/>
<div className="space-y-1">
<div className="bg-white/10 border border-white/5 px-4 py-2.5 rounded-2xl rounded-bl-none text-sm text-white/90 leading-relaxed">
                    Sounds fair. Let me move some funds.
                </div>
<div className="bg-white/10 border border-white/5 px-4 py-2.5 rounded-2xl rounded-bl-none text-sm text-white/90 leading-relaxed">
                   What's your wallet?
                </div>
<div className="text-[10px] text-white/30 ml-1">10:46 AM</div>
</div>
</div>

<div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
<div className="space-y-1">
<div className="bg-emerald-500 text-black px-4 py-2.5 rounded-2xl rounded-br-none text-sm font-medium leading-relaxed font-mono">
                    8xrt...9j2k
                </div>
<div className="bg-emerald-500 text-black px-4 py-2.5 rounded-2xl rounded-br-none text-sm font-medium leading-relaxed">
                    Sent the transaction hash.
                </div>
<div className="text-[10px] text-white/30 mr-1 text-right">Just now <span className="ml-1 text-emerald-400">✓✓</span></div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-black">
<div className="flex items-end gap-2 bg-white/5 border border-white/10 rounded-xl p-2 focus-within:border-white/20 transition-colors">
<button className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/30 resize-none py-2 max-h-32" placeholder="Message..." rows="1"></textarea>
<button className="p-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition">
<svg className="lucide lucide-arrow-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
<p className="text-[10px] text-center text-white/20 mt-2">Messages are end-to-end encrypted.</p>
</div>
</main>
</div>



    </>
  );
}
