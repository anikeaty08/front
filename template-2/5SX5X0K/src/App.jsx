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



  (function () {
    const data = [
      {
        name: "Brenda C.",
        role: "Director of Marketing",
        quote:
          "This studio elevated our product from functional to unforgettable. Clear process, tasteful decisions, and real business impact.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60",
      },
      {
        name: "Clarence B.",
        role: "Head of Product",
        quote:
          "We shipped faster and smarter. Their systems thinking and craftsmanship helped us align the brand and product into one story.",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60",
      },
      {
        name: "Amelia R.",
        role: "Founder & CEO",
        quote:
          "From kickoff to launch, the team was proactive and detail‑obsessed. Our conversion and NPS both climbed after the redesign.",
        avatar: "https://images.unsplash.com/photo-1541534401786-2077eed87a5f?auto=format&fit=crop&w=640&q=60",
      },
    ];

    const $ = (s) => document.querySelector(s);
    const avatar = $("#t-avatar");
    const quote = $("#t-quote");
    const author = $("#t-author");
    const nextAvatar = $("#t-next-avatar");
    const nextName = $("#t-next-name");
    const dots = () => Array.from(document.querySelectorAll(".t-dot"));

    let i = 0;

    function render() {
      const cur = data[i];
      const nxt = data[(i + 1) % data.length];

      avatar.src = cur.avatar;
      quote.textContent = cur.quote;
      author.textContent = `— ${cur.name}, ${cur.role}`;
      nextAvatar.src = nxt.avatar;
      nextName.textContent = nxt.name;

      dots().forEach((d, idx) => {
        d.className = "t-dot " + (idx === i ? "h-1.5 w-6 rounded-full bg-zinc-900" : "h-1.5 w-1.5 rounded-full bg-zinc-300");
      });

      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }

    $("#t-prev")?.addEventListener("click", () => {
      i = (i - 1 + data.length) % data.length;
      render();
    });
    $("#t-next")?.addEventListener("click", () => {
      i = (i + 1) % data.length;
      render();
    });
    document.querySelectorAll(".t-dot").forEach((el) =>
      el.addEventListener("click", () => {
        i = Number(el.getAttribute("data-dot")) || 0;
        render();
      })
    );

    render();
  })();



  (function () {
    const form = document.getElementById("nl-form");
    const input = document.getElementById("nl-email");
    const msg = document.getElementById("nl-msg");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (input?.value || "").trim();
      if (!email) return;
      msg.textContent = "Thanks—check your inbox for a confirmation.";
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
      form.reset();
    });
  })();



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      
<main className="max-w-7xl sm:px-6 mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">

<section className="relative isolate overflow-hidden ring-1 ring-white/10 min-h-[78vh] sm:min-h-[78vh] md:min-h-[78vh] rounded-3xl">

<img alt="Abstract 3D render" className="absolute inset-0 h-full w-full object-cover" src="/assets/587704f8-5e00-4904-b740-9c240e358d12_3840w.jpg" style={{}} />

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-900/10 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-950/20"></div>

<nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 pt-6">

<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-black/10 text-zinc-900 bg-white rounded-full shadow-sm">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(24, 24, 27)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</span>
<span className="text-base font-medium tracking-tight font-geist">AURA</span>
</a>

<ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
<li className=""><a className="hover:text-white transition-colors font-medium font-geist" href="#">Portfolio</a></li>
<li className=""><a className="hover:text-white transition-colors font-medium font-geist" href="#">About</a></li>
<li className=""><a className="hover:text-white transition-colors font-medium font-geist" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors font-medium font-geist" href="#">Process</a></li>
<li className=""><a className="hover:text-white transition-colors font-medium font-geist" href="#">Contact</a></li>
</ul>

<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition" href="#">
<span className="font-geist">Let's Talk</span>
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/70 backdrop-blur ring-1 ring-white/10">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 sm:px-8 sm:pt-14 lg:pt-20 pt-10 pr-5 pb-28 pl-5">

<div className="lg:col-span-7">
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-light tracking-tight font-geist" style={{}}>Design That<br className="hidden sm:block" /><span className="italic font-instrument-serif" style={{}}>Inspires Actions</span></h1>
</div>

<div className="mt-8 lg:mt-0 lg:col-span-5 lg:pl-8">
<p className="max-w-md text-base leading-relaxed text-white/80 font-geist">
              Transform your vision into powerful digital experiences. We create purposeful design solutions that connect with your audience and drive meaningful results.
            </p>

<div className="mt-6">
<div className="inline-flex overflow-hidden rounded-full shadow-lg ring-1 ring-white/10 backdrop-blur">
<a className="px-5 py-3 text-sm font-medium bg-zinc-900/90 hover:bg-zinc-900 text-white transition font-geist" href="#">
                  View Work
                </a>
<a className="px-3 py-3 bg-zinc-800/80 hover:bg-zinc-800 text-white transition flex items-center justify-center" href="#">
<svg className="lucide lucide-arrow-up-right h-5 w-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="absolute right-4 sm:right-6 bottom-24 sm:bottom-20 z-10">
<div className="w-[19rem] max-w-[85vw] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg p-4">
<div className="flex items-start gap-3">
<img alt="Plan thumbnail" className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c5c4482c-ccfd-46fd-8c20-f4e79ea0d5b3_320w.jpg" style={{}} />
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-sm font-medium tracking-tight text-white/90 font-geist">Limited Time</p>
<p className="text-sm text-white/60 font-geist">Brand Package</p>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="">
<p className="text-sm font-medium text-white/90 font-geist">Complete Identity</p>
<p className="text-xs text-white/70 font-geist">From $2,500 <span className="text-emerald-300 font-geist">Save 25%</span></p>
</div>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/70 hover:bg-zinc-900 ring-1 ring-white/10 text-white" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="mt-2 text-[11px] text-white/60 font-geist">*Available until April 30th</p>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 sm:px-8 pb-5">
<div className="flex items-end justify-between">
<span className="text-xs text-white/50 font-geist">©2025</span>
<div className="flex-1 flex justify-center">
<div className="flex items-center gap-2 text-white/70">
<span className="inline-flex h-2 w-2 rounded-full bg-white/70"></span>
<span className="text-xs font-geist">Explore More</span>
</div>
</div>
<div className="pointer-events-auto flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/70 ring-1 ring-white/10 hover:bg-zinc-900/90" href="#">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/70 ring-1 ring-white/10 hover:bg-zinc-900/90" href="#">
<svg className="lucide lucide-dribbble h-4 w-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/70 ring-1 ring-white/10 hover:bg-zinc-900/90" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</section>
</main><section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-16 text-zinc-900">
<div className="flex items-center justify-between mb-6">
<p className="text-xs tracking-widest text-zinc-500 font-geist uppercase">Trusted by teams worldwide</p>
<span className="hidden sm:inline text-xs text-zinc-400 font-geist">Since 2018</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
<a className="flex items-center justify-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-3 shadow-sm hover:shadow transition" href="#">
<svg className="lucide lucide-cloud h-4 w-4 text-zinc-700" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-sm font-medium text-zinc-700 font-geist">CloudWatch</span>
</a>
<a className="flex items-center justify-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-3 shadow-sm hover:shadow transition" href="#">
<svg className="lucide lucide-zap h-4 w-4 text-zinc-700" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-zinc-700 font-geist">Boltshift</span>
</a>
<a className="flex items-center justify-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-3 shadow-sm hover:shadow transition" href="#">
<svg className="lucide lucide-chef-hat h-4 w-4 text-zinc-700" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
<span className="text-sm font-medium text-zinc-700 font-geist">Epicurious</span>
</a>
<a className="flex items-center justify-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-3 shadow-sm hover:shadow transition" href="#">
<svg className="lucide lucide-sun h-4 w-4 text-zinc-700" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-sm font-medium text-zinc-700 font-geist">Nietzsche</span>
</a>
<a className="flex items-center justify-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-3 shadow-sm hover:shadow transition" href="#">
<svg className="lucide lucide-circle-ellipsis h-4 w-4 text-zinc-700" data-lucide="circle-ellipsis" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg>
<span className="text-sm font-medium text-zinc-700 font-geist">Quotient</span>
</a>
</div>
</section><section className="max-w-7xl sm:px-6 sm:py-14 lg:py-20 text-zinc-900 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="mb-6 sm:mb-10">
<p className="text-[11px] sm:text-xs tracking-widest text-zinc-500 font-geist uppercase">(02) Our Story</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
<div className="md:col-span-12">
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-light font-geist">
        Beyond Aesthetics — We Design What Moves Business.
      </h2>
</div>

<div className="md:col-span-3 lg:col-span-3">
<div className="flex items-end gap-4">
<span className="text-5xl sm:text-6xl lg:text-7xl font-light font-geist">4.9</span>
<div className="flex items-center gap-1 pb-2">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-zinc-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-2 text-[11px] tracking-widest text-zinc-500 uppercase font-geist">Client Satisfaction</p>
<div className="mt-4 flex items-center">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover -ml-0" src="/assets/8b9d7665-a3f8-48a3-8deb-4423535e171b_320w.jpg" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover -ml-2" src="/assets/d25806e7-e515-4a9a-9bca-93661e9d7d47_320w.jpg" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover -ml-2" src="/assets/ef094a8a-d614-4d62-a462-2ce2617e5b34_320w.jpg" style={{}} />
<span className="inline-flex h-8 w-8 -ml-2 items-center justify-center rounded-full bg-zinc-900 text-white text-xs font-medium ring-2 ring-white font-geist">24+</span>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6">
<div className="grid grid-cols-2 gap-4 sm:gap-5">
<div className="rounded-2xl bg-white ring-1 ring-zinc-200 shadow-sm overflow-hidden">
<img alt="Studio workspace" className="w-full h-48 sm:h-64 md:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52d50fcb-fee3-48b0-b5ee-5fc7a80e3a6a_800w.jpg" style={{}} />
</div>
<div className="rounded-2xl bg-white ring-1 ring-zinc-200 shadow-sm overflow-hidden">
<img alt="Project moodboard" className="w-full h-48 sm:h-64 md:h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b843110-95f3-4116-a9d7-8e36fd56889b_800w.jpg" style={{}} />
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-3">
<p className="text-sm leading-relaxed text-zinc-600 font-geist">
        We’re a product design studio focused on outcomes—strategy to ship. Lean teams, clear process, and measurable impact across brand and product.
      </p>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-3 ring-1 ring-zinc-900/10 hover:bg-black transition font-geist text-sm" href="#">
          Discover More
          <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section><section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-zinc-900">
<div className="flex items-end justify-between mb-6 sm:mb-10">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-zinc-500 font-geist uppercase">(02) Services</p>
<h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light font-geist">Capabilities that move the needle.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-2 text-sm text-zinc-700 hover:shadow font-geist" href="#">
      View All
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
<a className="group rounded-2xl bg-white ring-1 ring-zinc-200 p-6 shadow-sm hover:-translate-y-0.5 hover:shadow transition" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
<svg className="lucide lucide-palette h-4 w-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
<h4 className="text-lg tracking-tight font-medium font-geist">Brand & Identity</h4>
</div>
<p className="mt-3 text-sm text-zinc-600 font-geist">Strategy-led systems, logos, and visual languages that scale.</p>
<span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-700 font-geist">
        Explore
        <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="group rounded-2xl bg-white ring-1 ring-zinc-200 p-6 shadow-sm hover:-translate-y-0.5 hover:shadow transition" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
<svg className="lucide lucide-layout h-4 w-4" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</span>
<h4 className="text-lg tracking-tight font-medium font-geist">Product Design</h4>
</div>
<p className="mt-3 text-sm text-zinc-600 font-geist">Web and mobile experiences built for clarity, speed, and delight.</p>
<span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-700 font-geist">
        Explore
        <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="group rounded-2xl bg-white ring-1 ring-zinc-200 p-6 shadow-sm hover:-translate-y-0.5 hover:shadow transition" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<h4 className="text-lg tracking-tight font-medium font-geist">Motion & Launch</h4>
</div>
<p className="mt-3 text-sm text-zinc-600 font-geist">Narratives, micro‑interactions, and launch assets that convert.</p>
<span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-700 font-geist">
        Explore
        <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</section><section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-zinc-900">
<div className="flex items-end justify-between mb-6 sm:mb-10">
<div>
<p className="text-[11px] sm:text-xs tracking-widest text-zinc-500 font-geist uppercase">(03) Selected Work</p>
<h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light font-geist">A few projects we’re proud of.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-4 py-2 text-sm text-zinc-700 hover:shadow font-geist" href="#">
      View Portfolio
      <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
<a className="group relative overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-white shadow-sm" href="#">
<img alt="Dashboard project" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52795d68-87e9-4475-b17f-167769668b81_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">SaaS • Product</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Cloud Analytics</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-white shadow-sm" href="#">
<img alt="Dev tools" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/4d50bfcc-af2b-4668-b115-0a03f8ff1b7b_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Platform • Website</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Boltshift Launch</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-white shadow-sm" href="#">
<img alt="Minimal brand" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a47e3716-4ead-4fb3-9c48-59eaaf43dc29_800w.jpg" style={{}} />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Identity • Campaign</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Quotient Rebrand</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-zinc-900">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</a>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-zinc-200 px-5 py-3 text-sm text-zinc-700 hover:shadow font-geist" href="#">
      View All Work
      <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</section><section className="max-w-7xl sm:px-6 py-2 text-zinc-900 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-zinc-200 bg-gradient-to-br from-zinc-50 to-white">
<div className="relative px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
<div className="flex items-end justify-between mb-8">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-zinc-500 font-geist uppercase">(04) Testimonials</p>
<h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light font-geist">Voices from the teams we partner with.</h3>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

<div className="lg:col-span-4">
<div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-white">
<img alt="Client portrait" className="w-full h-full object-cover" id="t-avatar" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg" />
</div>
<p className="mt-4 text-[11px] tracking-widest text-zinc-500 uppercase font-geist">Testimonial</p>
<div className="mt-6 flex items-center gap-3">
<button aria-label="Previous testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 shadow-sm hover:bg-zinc-50 transition" id="t-prev">
<svg className="lucide lucide-arrow-left h-4 w-4 text-zinc-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white ring-1 ring-black/10 shadow-sm hover:bg-black transition" id="t-next">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-8 relative">
<div className="text-zinc-900">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 ring-1 ring-zinc-200">
<svg className="lucide lucide-quote h-4 w-4 text-zinc-700" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
<p className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight font-geist" id="t-quote">This studio elevated our product from functional to unforgettable. Clear process, tasteful decisions, and real business impact.</p>
<p className="mt-6 text-sm text-zinc-600 font-geist" id="t-author">— Brenda C., Director of Marketing</p>
</div>

<div className="absolute right-0 -bottom-2 sm:bottom-0">
<div className="flex items-center gap-3 p-2 rounded-2xl bg-white ring-1 ring-zinc-200 shadow-sm">
<img alt="Next client" className="h-14 w-20 object-cover rounded-xl" id="t-next-avatar" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60" />
<div className="pr-2">
<p className="text-[11px] tracking-widest text-zinc-500 uppercase font-geist">Next Slide →</p>
<p className="mt-1 text-xs text-zinc-700 font-geist" id="t-next-name">Clarence B.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center gap-2">
<button className="t-dot h-1.5 w-6 rounded-full bg-zinc-900" data-dot="0"></button>
<button className="t-dot h-1.5 w-1.5 rounded-full bg-zinc-300" data-dot="1"></button>
<button className="t-dot h-1.5 w-1.5 rounded-full bg-zinc-300" data-dot="2"></button>
</div>
</div>
</div>
</section><section className="max-w-7xl sm:px-6 mt-4 mr-auto mb-4 ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-zinc-900 text-white ring-1 ring-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="relative px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-white/70 font-geist uppercase">Let’s build something</p>
<h4 className="mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-light font-geist">Have a project in mind? We’re ready when you are.</h4>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-5 py-3 ring-1 ring-white/10 hover:bg-zinc-100 transition font-geist text-sm" href="#">
            Start a Project
            <svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-800 text-white px-5 py-3 ring-1 ring-white/10 hover:bg-zinc-700 transition font-geist text-sm" href="#">
            Book a Call
            <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section><footer className="sm:mt-10">
<section className="max-w-7xl sm:px-6 sm:pt-16 mr-auto mb-8 ml-auto pt-12 pr-4 pl-4 pb-8">
<div className="relative overflow-hidden ring-1 ring-white/10 text-white bg-zinc-950 rounded-3xl mb-8">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="relative sm:px-10 lg:px-14 lg:py-16 pt-12 pr-6 pb-12 pl-6">

<div className="flex flex-col lg:flex-row items-start justify-between gap-10">
<div className="max-w-md">
<a className="inline-flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center ring-1 ring-white/10 text-zinc-900 bg-white rounded-full shadow-sm">
<svg className="lucide lucide-circle h-4 w-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-base font-medium tracking-tight font-geist">AURA</span>
</a>
<p className="mt-4 text-sm text-white/70 leading-relaxed font-geist">
              We design brands and products that move people to act. Strategy, systems, and craft—delivered with clarity.
            </p>
<form className="mt-6 flex items-center gap-2" id="nl-form">
<div className="flex-1">
<label className="sr-only" htmlFor="nl-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-white/50 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" id="nl-email" placeholder="Your email" required type="email" />
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-zinc-100 transition font-geist" type="submit">
                Subscribe
                <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
<p className="mt-2 text-xs text-white/60 font-geist" id="nl-msg">Monthly updates. No spam.</p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">Work</p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li><a className="hover:text-white" href="#">Case Studies</a></li>
<li className=""><a className="hover:text-white" href="#">Awards</a></li>
<li className=""><a className="hover:text-white" href="#">Clients</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">Services</p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li><a className="hover:text-white" href="#">Brand & Identity</a></li>
<li className=""><a className="hover:text-white" href="#">Product Design</a></li>
<li><a className="hover:text-white" href="#">Motion & Launch</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li><a className="hover:text-white" href="#">Newsletter</a></li>
<li className=""><a className="hover:text-white" href="#">Playbook</a></li>
<li className=""><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/60 font-geist">© 2025 AURA Studio. All rights reserved.</p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-instagram h-4 w-4 text-white/80" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-white/80" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-linkedin h-4 w-4 text-white/80" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</section>
</footer>




    </>
  );
}
