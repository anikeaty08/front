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



/* Animation on Scroll */
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
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="video-background-container top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.03]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="64" id="grid" patternunits="userSpaceOnUse" width="64">
<path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
</div>

<header className="sticky z-[100] [animation:fadeSlideIn_0.8s_ease-out_0s_both] bg-neutral-950/70 w-full border-white/5 top-0 backdrop-blur-xl">
<nav className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pt-5 pr-4 pb-5 pl-4 items-center justify-between">
<a className="flex items-center gap-3" href="#">
</a>
<div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-300gap-x-8 gap-y-8">
<a className="hover:text-blue-500 transition-colors font-medium text-white" href="#how-to-join">How to Join</a><a className="hover:text-blue-500 transition-colors font-medium text-white" href="#pricing">Pricing</a><a className="hover:text-blue-500 transition-colors font-medium text-white" href="#faq">FAQ</a>
<a className="hover:text-blue-500 transition-colors font-medium text-white" href="#footer">Follow</a>
</div>
<div className="flex items-center gap-3">
</div>
</nav>
</header>

<main className="z-10 relative">
<section className="lg:px-8 lg:pb-8 sm:px-6 sm:pb-8 text-left max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-center">

<div className="mx-auto w-fit mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate float-box">
<div className="inline-flex gap-2 border-gradient text-xs text-neutral-300 bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center" style={{borderRadius: '9999px'}}>
<span className="inline-flex items-center justify-center text-white bg-blue-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shimmer-badge">
      Coming Soon
    </span>
<span className="font-medium">Live Trading!</span>
</div>
</div>
<style>
/* This makes the whole box float up and down */
@keyframes slowFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.float-box {
  animation: slowFloat 3s ease-in-out infinite;
}

/* This makes the white light slide across the blue badge */
@keyframes shimmerEffect {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.shimmer-badge {
  position: relative;
  overflow: hidden;
}
.shimmer-badge::after {
  content: "";
  position: absolute;
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmerEffect 2s infinite;
}
</style>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-left max-w-7xl items-center justify-center">
<h1 className="sm:text-5xl md:text-6xl lg:text-8xl text-4xl font-medium text-white tracking-tighter text-center max-w-7xl mr-auto ml-auto">Shah Zaib Trader</h1><h1 className="sm:text-5xl md:text-6xl lg:text-8xl text-4xl font-extrabold text-blue-500 tracking-tighter text-center max-w-7xl mr-auto ml-auto">Private Discord</h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 text-center max-w-2xl mt-6 mr-auto ml-auto">Our community focuses on a disciplined, structured, and drama-free approach to trading. Master your ability to read price action while becoming the best version of yourself.</p>

<div className="flex flex-col sm:flex-row text-center max-w-xl mt-8 mr-auto ml-auto gap-x-3 gap-y-3 items-center justify-center">
<button className="sm:w-auto inline-flex hover:-translate-y-0.5 transition-all cursor-pointer text-sm font-bold text-neutral-900 text-center bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] gap-x-2 gap-y-2 items-center justify-center" onclick="document.querySelector('footer').previousElementSibling.scrollIntoView({ behavior: 'smooth' });window.location.href='#pricing'" role="button" style={{borderRadius: '9999px'}}>Join the community</button>
<button className="sm:w-auto inline-flex border-gradient hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer text-sm font-semibold text-white/80 bg-white/5 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='#footer'" role="button" style={{borderRadius: '9999px'}}>Follow me</button>
</div>
</div>
</section>




<section className="sm:px-6 lg:px-8 lg:pt-1 lg:pb-1 max-w-7xl mr-auto ml-auto pt-2 pr-4 pb-2 pl-4 relative" id="how-to-join">
<div className="border-gradient sm:p-10 bg-neutral-900/40 rounded-3xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur" style={{borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tighter">How to get Discord access?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative gap-x-6 gap-y-6">

<div className="border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 1</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Get Access</h3>
<p className="leading-relaxed text-sm text-neutral-400">Create a Discord account first, then click the 'Get Access' button to start the process.</p>
</div>

<div className="border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 2</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Payment</h3>
<p className="leading-relaxed text-sm text-neutral-400">Fill in and select your payment method info.</p>
</div>

<div className="border-gradient rounded-2xl p-6 relative bg-white/5 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 3</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Check Email</h3>
<p className="leading-relaxed text-sm text-neutral-400">Access will be sent to your email.</p>
</div>

<div className="border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate bg-white/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-neutral-950 text-xs font-semibold text-white tracking-tight">STEP 4</div>
<div className="mb-4 mt-2 p-3 bg-white/5 w-fit rounded-lg text-white">
<svg className="lucide lucide-rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Review</h3>
<p className="leading-relaxed text-sm text-neutral-400">Once you're in, open the Discord app and select our server to join the conversation.</p>
</div>
</div>
</div>
</section>


<section className="sm:px-6 lg:pt-8 lg:pb-8 lg:pl-8 lg:pr-8 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4" id="pricing">
<div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tighter">Join the community!</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">



<div className="flex flex-col border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-x-6 gap-y-x-6">
<h3 className="text-lg font-medium text-white">WhatsApp Community Access</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Signal Followers</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-white tracking-tight">$0</span>
<span className="text-neutral-500">/free</span>
</div>
<ul className="flex-1 mb-8 space-y-3">
<li className="flex gap-2 text-sm text-neutral-300 gap-x-2 gap-y-2 items-center"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline className="" points="20 6 9 17 4 12"></polyline></svg> Daily Gold Signals</li><li className="flex gap-2 text-sm text-neutral-300 gap-x-2 gap-y-2 items-center"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Market Analysis and News Updates</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 24/7 Support and Guidance</li>
</ul>
<button className="hover:bg-white/10 transition-colors cursor-pointer text-sm font-semibold text-white bg-white/5 w-full border-white/20 border rounded-full pt-3 pb-3" onclick="window.location.href='https://chat.whatsapp.com/GGfrE2K4Yoq6hxFjfna8NY?mode=wwc'" role="button">Get Access</button>
</div><div className="flex flex-col border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate ring-blue-500/50 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="-top-4 -translate-x-1/2 text-xs font-semibold text-white bg-blue-500 rounded-full pt-1 pr-3 pb-1 pl-3 absolute left-1/2">Coming Soon</div>
<h3 className="text-lg font-medium text-white">Discord Full Access</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Disciplined Traders</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-white tracking-tight">$10</span>
<span className="text-neutral-500">/month</span>
</div>
<ul className="flex-1 mb-8 space-y-3">
<li className="flex text-sm text-white gap-x-2 gap-y-2 items-center"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline className="" points="20 6 9 17 4 12"></polyline></svg> Live Trading Streams</li>
<li className="flex text-sm text-white gap-x-2 gap-y-2 items-center"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline className="" points="20 6 9 17 4 12"></polyline></svg> Market Reviews and Trade Breakdowns</li>
<li className="flex text-sm text-white gap-x-2 gap-y-2 items-center"><svg className="text-blue-400 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Risk / Trade management</li>
</ul>
<button className="hover:bg-neutral-200 transition-colors cursor-pointer text-sm font-semibold text-neutral-950 bg-white w-full rounded-full pt-3 pb-3" onclick="window.location.href='https://whop.com/checkout/plan_J0ubegw9TFMV5'" role="button">Get Access</button>
</div><div className="flex flex-col border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate bg-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-x-6 gap-y-x-6">
<h3 className="text-lg font-medium text-white">Private 1-on-1 Mentorship</h3>
<p className="text-sm text-neutral-400 mt-1">Best for: Beginners</p>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-white tracking-tight">$50</span>
<span className="text-neutral-500">/month</span>
</div>
<ul className="flex-1 mb-8 space-y-3">
<li className="flex gap-2 text-sm text-neutral-300 gap-x-2 gap-y-2 items-center"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline className="" points="20 6 9 17 4 12"></polyline></svg> 20-Week Intensive Mentorship
</li><li className="flex gap-2 text-sm text-neutral-300 gap-x-2 gap-y-2 items-center"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 60 Sessions | 3x Weekly
</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="text-blue-500 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Daily Assignments</li>
</ul>
<button className="hover:bg-white/10 transition-colors cursor-pointer text-sm font-semibold text-white bg-white/5 w-full border-white/20 border rounded-full pt-3 pb-3" onclick="window.location.href='https://www.facebook.com/shahzaibxtrader'" role="button">Get Access</button>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 lg:pt-8 lg:pb-8 max-w-4xl mr-auto ml-auto pt-4 pr-4 pb-1 pl-4" id="faq">
<div className="text-center mb-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl font-semibold text-white tracking-tighter">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate gap-x-8 gap-y-8">
<div className="space-y-2">
<h4 className="font-semibold text-white">I purchased access, now what?</h4>
<p className="leading-relaxed text-sm text-neutral-400">After purchase, you will receive access to your product via the email used at checkout. You can also access your product by going to your Whop account.</p>
</div><div className="space-y-2">
<h4 className="font-semibold text-white">Can I copy your trades?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Do not copy Shah Zaib's trades. The goal of the livestreams is to help you learn how to read price action. Any trades taken on your account is 100% your responsibility.</p>
</div><div className="space-y-2">
<h4 className="font-semibold text-white">Do you show your trade entries?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Yes. You will see Shah Zaib's trade entries in real-time.</p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-white">Do you only trade in Crypto?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Yes. Shah Zaib only trades in Crypto.</p>
</div><div className="space-y-2">
<h4 className="font-semibold text-white">Are the livestreams recorded?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Yes. Livestreams are recorded and kept up the entire week. You can re-watch them at any time.</p>
</div><div className="space-y-2">
<h4 className="font-semibold text-white">Do you offer refunds?</h4>
<p className="leading-relaxed text-sm text-neutral-400">No, Shah Zaib does not offer refunds. All sales are final.</p>
</div>
</div>
</section>


<footer className="sm:px-6 lg:px-8 max-w-7xl mt-10 mr-auto ml-auto pr-4 pb-8 pl-4" id="footer">
<div className="flex flex-col md:flex-row gap-x-8 gap-y-8 items-center justify-between">
<div className="text-center md:text-left">
<span className="text-lg font-semibold text-white">Shah Zaib Trader</span>
<p className="text-xs text-neutral-500">© 2026 All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.youtube.com/@shahzaibxtrader" target="_blank" title="YouTube">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:youtube-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z" fill="currentColor"></path></svg>
</a>
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.facebook.com/shahzaibxtrader" target="_blank" title="Facebook">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:facebook-box-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.599c0-.784.218-1.319 1.342-1.319h1.434V5.857a19 19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1z" fill="currentColor"></path></svg>
</a>
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.instagram.com/shahzaibxtrader" target="_blank" title="Instagram">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:instagram-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" fill="currentColor"></path></svg>
</a>
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.snapchat.com/@shahzaibxtrader" target="_blank" title="Snapchat">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:snapchat-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M11.872 21.765c-1.19 0-1.984-.562-2.693-1.057c-.504-.357-.976-.696-1.533-.79a4.6 4.6 0 0 0-.803-.066c-.472 0-.847.071-1.114.125c-.17.03-.312.058-.424.058c-.116 0-.263-.032-.32-.228c-.05-.16-.081-.312-.112-.459c-.08-.37-.147-.597-.286-.62c-1.489-.227-2.38-.57-2.554-.976c-.014-.044-.031-.09-.031-.125c-.01-.124.08-.227.205-.25c1.181-.195 2.242-.824 3.138-1.858c.696-.803 1.035-1.579 1.066-1.663c0-.01.009-.01.009-.01q.256-.527.102-.895c-.192-.46-.825-.656-1.257-.79c-.111-.03-.205-.066-.285-.093c-.37-.147-.986-.46-.905-.892c.058-.312.472-.535.811-.535q.141-.002.24.05c.38.173.723.262 1.017.262c.366 0 .54-.138.584-.182a25 25 0 0 0-.035-.593c-.09-1.365-.192-3.059.24-4.03c1.298-2.907 4.053-3.14 4.869-3.14L12.157 3h.05c.815 0 3.57.227 4.868 3.139c.437.971.33 2.67.24 4.03l-.009.067c-.008.182-.022.356-.03.535c.044.035.204.169.534.173c.286-.008.598-.102.954-.263a.8.8 0 0 1 .312-.066c.125 0 .25.03.357.066h.009c.299.112.495.321.495.54c.009.205-.152.517-.914.825c-.08.03-.174.067-.285.093c-.424.13-1.057.335-1.258.79c-.111.24-.067.548.103.896c0 .008.009.008.009.008c.049.125 1.337 3.05 4.204 3.527a.246.246 0 0 1 .205.25q.001.067-.031.129c-.174.41-1.057.744-2.555.976c-.138.022-.205.25-.285.62a7 7 0 0 1-.111.459c-.045.147-.139.227-.3.227h-.021a2.2 2.2 0 0 1-.424-.049a5.3 5.3 0 0 0-1.115-.116a5 5 0 0 0-.802.067c-.553.09-1.03.433-1.534.79c-.718.49-1.516 1.052-2.697 1.052z" fill="currentColor"></path></svg>
</a>
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.tiktok.com/@shahzaibxtrader" target="_blank" title="TikTok">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:tiktok-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755" fill="currentColor"></path></svg>
</a>
<a className="text-white hover:text-white transition-all hover:-translate-y-1" href="https://www.x.com/shahzaibxtrader" target="_blank" title="X">
<svg aria-hidden="true" className="iconify iconify--ri" data-icon="ri:twitter-x-fill" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path className="" d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z" fill="currentColor"></path></svg>
</a>
</div>
</div></footer>
</main>
    </>
  );
}
