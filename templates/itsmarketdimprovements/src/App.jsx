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
brand: {
50: '#fdf8f6',
100: '#f2e8e5',
200: '#eaddd7',
300: '#e0cec7',
400: '#d2bab0',
500: '#A67C52', // Primary Gold/Brown
600: '#966C42',
700: '#8a5e3a',
800: '#3E2723', // Dark Brown
900: '#2d1b18',
}
},
animation: {
'blob': 'blob 7s infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed z-50 glass-nav transition-all duration-300 w-full border-slate-100/10 border-b top-0">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">Marketd<span className="text-brand-500">.</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-200 gap-x-8 gap-y-8 items-center">
<a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-sm hover:-translate-y-0.5" href="#features">What we do</a>
<a className="inline-flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-sm hover:-translate-y-0.5 text-sm font-medium text-white bg-white/5 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-sm" href="#pricing" onclick="event.preventDefault(); Array.from(document.querySelectorAll('h2')).find(el =&gt; el.textContent.includes('Real Results with Real Companies'))?.closest('section')?.scrollIntoView({ behavior: 'smooth' });">Testimonials</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-sm hover:-translate-y-0.5" href="#calculator">Calculator</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-sm hover:-translate-y-0.5" href="#faq">FAQ</a>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="hidden md:inline-flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-sm hover:-translate-y-0.5 text-sm font-medium text-white bg-white/5 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-sm" href="https://strategy.conquergrowth.io/gogetmarketing/">Book a call</a>
<a className="btn-shine hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-500/20 text-sm font-medium text-white bg-brand-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="https://app.conquergrowth.io/">Log in</a>
</div>
</div>
</nav>

<header className="md:pt-40 md:pb-32 overflow-hidden mesh-gradient pt-40 pb-32 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col lg:flex-row lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 lg:text-left text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Live 24/7 Availability</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">We generate <span className="text-slate-400 line-through decoration-red-500 decoration-4">leads</span> <span className="box-decoration-clone text-brand-700 bg-brand-500/15 rounded-lg pr-3 pl-3">booked jobs</span> for Tradies in the UK</h1>
<p className="md:text-xl lg:mx-0 leading-relaxed text-lg font-normal text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">Stop losing revenue every month by wasting your money away on unreliable marketers or third party websites that just burn and throw away your profit.</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="btn-shine sm:w-auto hover:bg-brand-700 shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium text-white bg-brand-500 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#contact">Book a call</a>
<a className="sm:w-auto hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-medium text-slate-700 bg-white w-full border-brand-500 border-4 rounded-full pt-4 pr-8 pb-4 pl-8" href="https://drive.google.com/file/d/1_DHJJYzo-tLPHZPAwUkTEsxLIkly-IR8/view?usp=sharing">
<svg className="w-5 h-5 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="fill-brand-500 stroke-white" cx="12" cy="12" r="10"></circle>
<path className="fill-white stroke-white" d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
</svg>
                            See How It Works
                        </a>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 border-white border-2 rounded-full" src="https://i.ibb.co/HLb5kLH2/Screenshot-2025-12-19-at-11-02-45.png"/>
<img alt="User" className="w-8 h-8 border-white border-2 rounded-full" src="https://i.ibb.co/hJ7nSnVw/Screenshot-2025-12-19-at-11-00-20.png"/>
<img alt="User" className="w-8 h-8 border-white border-2 rounded-full" src="https://i.ibb.co/0jb89fmc/Screenshot-2025-12-19-at-11-03-35.png"/>
</div>
<p className="">Trusted by <span className="font-semibold text-slate-900">20+ businesses</span></p>
</div>
</div>

<div className="lg:w-1/2 w-full relative">

<div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="-bottom-10 -left-10 filter animate-blob animation-delay-2000 bg-amber-100 opacity-30 mix-blend-multiply w-72 h-72 rounded-full absolute blur-3xl"></div>

<div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">

<div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">Live Dashboard</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6 space-y-4">

<div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="flex-1">
<div className="flex mb-1 items-center justify-between">
<h4 className="text-sm font-medium text-slate-900" style={{}}>New Lead Received</h4>
<span className="text-xs text-slate-400">Just now</span>
</div>
<p className="text-xs text-slate-500 mb-2">New lead had enquired!</p>
<div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
<p className="text-xs italic text-slate-600" style={{}}>"Hey Sarah, It's Emily from AG Design &amp; Build, just saw your enquiry about transforming your bathroom. What is it you're looking to get done?</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="font-medium text-slate-900 text-sm">Appointment Confirmed</h4>
<span className="text-xs text-slate-400">2m ago</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-50 text-brand-700">
                                            Booking Added
                                        </span>
<span className="text-xs text-slate-500" style={{}}>Glenn A. • Tomorrow 10:00 AM</span>
</div>
</div>
</div>
</div>

<div className="flex gap-3 animate-bounce-slow text-white bg-slate-900 rounded-lg pt-3 pr-4 pb-3 pl-4 absolute right-4 bottom-4 shadow-lg gap-x-3 gap-y-3 items-center">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<div className="text-xs font-medium">Revenue Made: <span className="text-green-400">£14,900</span></div>
</div>
</div>
</div>
</div>

<div className="border-slate-200/60 border-t mt-24 pt-12">
<div className="max-w-4xl mx-auto text-center space-y-4">
<h3 className="text-base font-semibold text-slate-900">This is ideal for, but not limited to, Kitchen, Bathroom and Landscaping companies</h3>
<p className="leading-relaxed text-sm text-slate-500">We service various services in the Home Improvement industry like Garden Rooms, Windows &amp; Doors, Roofing &amp; more. However those that are maintenance based like Plumbing or Waste Removal. We look for a minimum average order value of £5,000.

</p>
</div>
</div>
</div>
</header>
<section className="border-y overflow-hidden bg-white border-slate-100 pt-12 pb-12">
<style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite; /* Changed to 40s */
            }
            .mask-gradient {
                mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
        </style>
<div className="max-w-7xl mx-auto px-6 mb-10 text-center">
<p className="uppercase text-sm font-semibold text-slate-500 tracking-wide">Trusted by UK Industry leaders</p>
</div>

<div className="relative w-full max-w-[100vw] overflow-hidden mask-gradient mb-16">
<div className="flex w-max items-center gap-24 animate-marquee hover:[animation-play-state:paused] py-2">

<div className="flex gap-24 shrink-0 gap-x-24 gap-y-24 items-center">
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/pvd1CYtj/Screenshot-2026-01-17-at-13-17-45.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/YBJBLJCZ/Gemini-Generated-Image-knldjeknldjeknld.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/nsjDFKvq/Gemini-Generated-Image-72du7t72du7t72du.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/7JZ6pLr2/Gemini-Generated-Image-7xnr9h7xnr9h7xnr.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/YBtqRFjP/Gemini-Generated-Image-a82um7a82um7a82u.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/7dGJGCWS/Gemini-Generated-Image-qfsi0pqfsi0pqfsi.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/7tM6gFd5/Gemini-Generated-Image-sk4625sk4625sk46.png"/>
<img alt="Partner Logo" className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110" src="https://i.ibb.co/Rk33v5nr/Gemini-Generated-Image-yn56edyn56edyn56.png"/>
</div>

<div className="flex items-center gap-24 shrink-0">
</div>
</div>
</div>

<div className="overflow-hidden mask-gradient w-full max-w-[100vw] relative">
<div className="flex gap-24 animate-marquee hover:[animation-play-state:paused] w-max pt-2 pb-2 gap-x-24 gap-y-24 items-center">

<div className="flex gap-24 shrink-0 gap-x-24 gap-y-24 items-center">
<img alt="Meta Partner Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/qYwCqrvD/Meta-Logo.png"/>
<img alt="Trustpilot Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/9kMM5Ctf/Trustpilot-Logo.jpg"/>
<img alt="Google Reviews Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/XrhctH6d/Google-Review-Logo.png"/>
<img alt="Meta Partner Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/qYwCqrvD/Meta-Logo.png"/>
<img alt="Trustpilot Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/9kMM5Ctf/Trustpilot-Logo.jpg"/>
<img alt="Google Reviews Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/XrhctH6d/Google-Review-Logo.png"/>
<img alt="Meta Partner Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/qYwCqrvD/Meta-Logo.png"/>
<img alt="Trustpilot Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/9kMM5Ctf/Trustpilot-Logo.jpg"/>
<img alt="Google Reviews Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/XrhctH6d/Google-Review-Logo.png"/>
<img alt="Meta Partner Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/qYwCqrvD/Meta-Logo.png"/>
<img alt="Trustpilot Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/9kMM5Ctf/Trustpilot-Logo.jpg"/>
<img alt="Google Reviews Logo" className="hover:opacity-100 transition-all duration-300 hover:scale-110 opacity-90 w-auto h-20 object-contain" src="https://i.ibb.co/XrhctH6d/Google-Review-Logo.png"/>
</div>

</div>
</div>
</section><section className="bg-slate-50 border-slate-200 border-b pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Loved by industry leaders</h2>
<p className="leading-relaxed text-lg font-normal text-slate-500" style={{}}>Join over 20+ businesses who have automated their growth and reclaimed their time.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">

<div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"Always there to assist when needed and very friendly and easy to talk to Will do anything they can to help your business progress further by working together with clear communication and great ideas"</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="James Mitchell" className="w-10 h-10 object-cover ring-white ring-2 rounded-full shadow-sm" role="button" src="https://i.ibb.co/LzHVmHZS/Screenshot-2026-01-17-at-13-24-20.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900">Tony Abbinett</div>
<div className="text-xs text-slate-500">Director, Mitchell Plumbing</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"Adam and Glenn have delivered exactly what they said they would. They told me that the beginning can be slow but within the first month I have taken an extra 19k in sales and quoted over 88k. I am now at the point where I need help."</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="Luke Guest" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.ibb.co/xthxBbVM/Screenshot-2025-12-19-at-11-03-18.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900">Luke Guest</div>
<div className="text-xs text-slate-500">Owner, Guest Bathrooms</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"Where do i start.... in good way!! Adam and Glen are like my personal assistants when it comes to marketing. They work around the clock, no joke. We could ask a question anytime of the day and they answer.

Their app an AI bot are next level I didn't no I needed it in my life. It filters out any rubbish leads and get alot less time wasters. We also know exactly how much are leads cost with monthly updates. We are now down to averaging £8 per lead.

In January alone we secured £62,745 worth of jobs!

I was skeptical at first as I have never paid for marketing but I don't think I will not use Adam and Glen now. Amazing team!"</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="Mark Turner" className="w-10 h-10 object-cover ring-white ring-2 rounded-full shadow-sm" src="https://i.ibb.co/TM9R3jV8/Screenshot-2025-12-19-at-10-59-49.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900" style={{}}>Mark Turner</div>
<div className="text-xs text-slate-500">Owner, Airborne Bathroom Services LTD</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"I’ve been working with conquer growth for nearly 3 weeks and I can’t believe the amount of work they have generated for me , they’ve transformed my business, wish I’d have found them years ago"</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="Mike Ralph" className="w-10 h-10 object-cover ring-white ring-2 rounded-full shadow-sm" src="https://i.ibb.co/hJ7nSnVw/Screenshot-2025-12-19-at-11-00-20.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900" style={{}}>Mike Ralph</div>
<div className="text-xs text-slate-500">Owner, M Ralph Plumbing LTD</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"Since joining Conquer Growth the experience
Has been fantastic &amp; so helpful in Driving our
Company forward. The commitment they give you on a Daily basis is incredible. So please to be working.   together." </p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="Michael Ross" className="w-10 h-10 object-cover ring-white ring-2 rounded-full shadow-sm" src="https://i.ibb.co/R4NhV9Sj/Screenshot-2025-12-19-at-11-01-41.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900" style={{}}>Brendan Bardon</div>
<div className="text-xs text-slate-500">Director, BMB Contractors</div>
</div>
</div>
</div>

<div className="flex flex-col hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 group bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
<div className="flex gap-1 mb-4 text-brand-500">
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow leading-relaxed font-normal text-slate-600 mb-6">"We have been working with Adam &amp; Glenn for the last 5 month or so and have to say they are absolutely brilliant to work with they are very professional and helpful, anytime we need help with anything they are very quick to respond and help us. The app is amazing and makes the appointment booking and keeping on top of customers queries so much easier. Would highly recommend these lads to everyone."</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<img alt="Vikki" className="w-10 h-10 object-cover ring-white ring-2 rounded-full shadow-sm" src="https://i.ibb.co/Y7TM1Nr7/Screenshot-2025-12-19-at-11-02-08.png"/>
<div className="">
<div className="text-sm font-semibold text-slate-900" style={{}}>Vikki</div>
<div className="text-xs text-slate-500">Director, GLM Driveways</div>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="btn-shine group inline-flex items-center justify-center gap-2 shadow-brand-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:shadow-brand-500/40 text-sm font-medium text-white bg-brand-500 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/#">
                Become a Marketd Partner
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">You focus working ON your business<br className=""/>We focus working IN your business</h2>
<p className="text-lg text-slate-500">Control your entire business from one app</p>
<div className="mt-8 flex justify-center">
</div><h3 className="text-3xl font-semibold text-[#3E2723] tracking-tight">How it works, no fluff just what you need to grow</h3>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-8 justify-center">

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-phone w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Instant Call Handling</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">Never let a call go to voicemail. Our AI sales assistant Sarah answers naturally, understands context, and sets appointments for you.</p>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-all rounded-lg bg-[#A67C52] hover:bg-[#966C42] shadow-sm hover:shadow-md hover:-translate-y-0.5" href="https://drive.google.com/file/d/1JCd9ZZre8zA9T1v98E0OKOLPTZlPKDr4/view?usp=sharing" target="_blank">
<svg className="lucide lucide-play-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                Watch how she works
            </a>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-calendar-check w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Bespoke Growth System</h3>
<p className="leading-relaxed text-base text-slate-500">No missed appointments or quotes and simply track leads, performance and where the team is. Our Growth System is an all-in-one mobile app that simply holds everything in your business. <a className="block w-fit mt-6 px-5 py-2.5 text-sm font-medium text-white bg-[#A67C52] rounded-lg shadow-sm transition-all hover:bg-[#966C42] hover:shadow-md hover:-translate-y-0.5" href="https://strategy.conquergrowth.io/gogetmarketing/">Find out more</a></p>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-message-square w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Never miss a lead again.</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">Every new lead is contacted within minutes, even when you’re on site or it is out of hours. Speed ensures you beat your competition</p>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-brand-100 transition-colors">
<svg className="lucide lucide-zap w-4 h-4 text-brand-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-sm font-medium text-slate-700">Instant &lt; 60s Response</span>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-brand-100 transition-colors">
<svg className="lucide lucide-clock w-4 h-4 text-brand-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-sm font-medium text-slate-700">24/7 Round-the-clock Cover</span>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-brand-100 transition-colors">
<svg className="lucide lucide-shield-check w-4 h-4 text-brand-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-slate-700">100% Lead Capture Rate</span>
</div>
</div>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-star w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Successful Ad Strategies </h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">Have successful Facebook and Instagram ad strategies that have been proven to work through 20+ other Home Improvement companies</p>
<div className="flex items-center gap-2 text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors cursor-pointer">
<span className="cursor-pointer" onclick="window.location.href='https://strategy.conquergrowth.io/gogetmarketing/'" role="button">Learn about this</span>
<svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Performance Analytics</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">See exactly how much revenue you generate. Track call volumes, appointments and conversion rates in a simple real-time dashboard.</p>
<div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-brand-500 w-3/4"></div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-500">
<span className="">Monthly Goal</span>
<span className="text-brand-600">75% Achieved</span>
</div>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-users w-6 h-6 text-slate-600 group-hover:text-brand-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Sales &amp; System Consulting</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">
        Weekly calls to ensure the system is used properly as the business grows. We help you qualify better, move faster, and remove bottlenecks as volume increases.
        
        <span className="block mt-6 space-y-3">
<span className="flex items-center gap-3 p-3 rounded-lg border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-brand-600 shadow-sm">
<svg className="lucide lucide-user-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
</span>
<span className="text-sm font-medium text-slate-700">Lead Qualification</span>
</span>
<span className="flex items-center gap-3 p-3 rounded-lg border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-brand-600 shadow-sm">
<svg className="lucide lucide-settings-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</span>
<span className="text-sm font-medium text-slate-700">System Optimization</span>
</span>
<span className="flex items-center gap-3 p-3 rounded-lg border border-slate-200/60 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-brand-600 shadow-sm">
<svg className="lucide lucide-trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</span>
<span className="text-sm font-medium text-slate-700">Revenue Growth</span>
</span>
</span>
</p>
<div className="flex items-center -space-x-3">
</div>
</div>

<div className="group custom-card-hover hover:border-brand-200 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-thumbs-up group-hover:text-brand-600 transition-colors w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="airplay" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(150, 108, 66)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><path d="m12 15 5 6H7Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Bi-Weekly Strategy Calls</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">To get the best results we need to go over what happened over the last 2 weeks and what we need to double down on and improve on for the next 2 weeks.</p>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg w-fit border border-slate-100 group-hover:border-brand-100 transition-colors">
<div className="flex items-end gap-1 h-6 pt-1">
<div className="w-1.5 h-2 bg-slate-200 rounded-[1px]"></div>
<div className="w-1.5 h-3 bg-brand-300 rounded-[1px]"></div>
<div className="w-1.5 h-4 bg-brand-500 rounded-[1px]"></div>
<div className="w-1.5 h-full bg-brand-700 rounded-[1px]"></div>
</div>
<div className="flex flex-col justify-center gap-0.5">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 leading-none">Status</span>
<span className="text-xs font-semibold text-slate-700 leading-none">Strategy Improving</span>
</div>
</div>
</div>

<div className="group custom-card-hover hover:border-brand-200 md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] bg-white w-full border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors">
<svg className="lucide lucide-receipt group-hover:text-brand-600 transition-colors w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(150, 108, 66)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">40 Appointments in 90 Days</h3>
<p className="leading-relaxed text-base text-slate-500 mb-8">We guarantee 40 appointments in 90 days or we give you your money back and £1,000 on top. Simple.</p>
<div className="relative overflow-hidden rounded-xl border border-brand-100 bg-brand-50/50 p-4 transition-all group-hover:bg-brand-50 group-hover:shadow-sm group-hover:shadow-brand-500/10">
<div className="flex items-center gap-3 relative z-10">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-brand-100 shadow-sm text-brand-600">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6a22 22 0 0 1-2 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6a22 22 0 0 1-2-12 11.5 11.5 0 0 1 11-4 11.5 11.5 0 0 1 11 4z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-[11px] uppercase tracking-wider font-semibold text-brand-600">Money Back Guarantee</div>
<div className="text-sm font-semibold text-slate-900">100% Refund + £1,000</div>
</div>
</div>

<div className="absolute -bottom-2 -right-2 opacity-[0.07] rotate-[-15deg] pointer-events-none text-brand-700">
<svg fill="currentColor" height="64" stroke="none" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<div className="absolute top-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="h-1.5 w-1.5 rounded-full bg-brand-400"></div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="btn-shine group inline-flex items-center justify-center gap-2 shadow-brand-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:shadow-brand-500/40 text-sm font-medium text-white bg-brand-500 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://strategy.conquergrowth.io/gogetmarketing/">
            Book a call
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24" id="calculator">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-100">Reality Check</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Yes, you are losing money.
                    </h2>
<p className="leading-relaxed text-lg text-slate-500 mb-8">40% of calls to Home Improvement businesses go unanswered. Every missed call is a potential customer going to your competitor.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700">Lost revenue from missed appointments</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700">Time wasted on tyre kickers</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-700" style={{}}>Poorly maintained marketing systems &amp; processes</span>
</li>
</ul>
<a className="hover:text-brand-700 flex items-center gap-2 group font-medium text-brand-600" href="https://lp.conquergrowth.io/roi-calculator">
                        Calculate your exact loss
                        <svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
<div className="flex border-slate-100 border-b mb-8 pb-8 items-center justify-between">
<div className="">
<p className="text-sm text-slate-400 font-medium uppercase tracking-wide">Missed Calls / Week</p>
<div className="text-3xl font-semibold text-slate-900 mt-1 flex items-center gap-4">
                                10
                                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Avg</span>
</div>
</div>
<div className="h-10 w-px bg-slate-100"></div>
<div className="">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide" style={{}}>Avg job price</p>
<div className="flex gap-4 text-3xl font-semibold text-slate-900 mt-1 gap-x-4 gap-y-4 items-center">£6,000</div>
</div>
</div>
<div className="space-y-6">
<div className="flex justify-between items-end">
<span className="text-slate-600 font-medium">Monthly Loss</span>
<span className="text-2xl font-bold text-slate-900">£60,000</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-300 h-2 rounded-full" style={{width: '38%'}}></div>
</div>
<div className="flex pt-4 items-end justify-between">
<span className="text-slate-600 font-medium">Yearly Loss</span>
<span className="text-4xl font-bold text-red-500">£720,000</span>
</div>
<div className="w-full bg-red-100 rounded-full h-3">
<div className="bg-red-500 h-3 rounded-full shadow-lg shadow-red-500/30" style={{width: '75%'}}></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 text-center">
<p className="text-sm text-slate-500 mb-4">Reclaim this revenue starting today.</p>
<button className="hover:bg-[#966C42] transition-colors btn-shine cursor-pointer font-medium text-white bg-[#A67C52] w-full rounded-lg pt-3 pb-3" onclick="window.location.href='https://strategy.conquergrowth.io/gogetmarketing/'" role="button">
    Stop The Bleeding
</button>
</div>
</div>
</div>
</div>
</section><section className="bg-white border-slate-200 border-b pt-24 pb-24" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-4" style={{}}>Real Results with Real Companies</h2>
<p className="leading-relaxed text-lg text-slate-500">See how businesses like yours are automating their growth. Explore our library of success stories.</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<a className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0" href="https://youtube.com/shorts/kxHqt58_PI4?si=HNacYmynjs5FP9d_" target="_blank">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://youtube.com/shorts/kxHqt58_PI4?si=z2ciqBk_ESA1cV_7'" role="button">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/M52QrQX8/Screenshot-2026-01-17-at-14-03-03.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
<svg className="text-white ml-0.5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</a>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        2:14
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2" style={{}}>Scrambling for jobs to Fully booked out</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">"You made me feel confident the whole way through"</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">LG</div>
<div className="text-xs">
<div className="font-medium text-slate-900">Luke Guest</div>
<div className="text-slate-400">Guest Bathrooms</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
<a className="z-10 flex items-center justify-center w-full h-full absolute top-0 right-0 bottom-0 left-0" href="https://youtube.com/shorts/xcolRM-9ySM?si=MBklEBjg2VYWA43p" target="_blank">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 w-full h-full">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/BHB9bXQF/Screenshot-2025-12-10-at-12-18-28.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
<svg className="text-white ml-0.5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</a>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        3:45
                    </div>
</div>
<div className="flex flex-col flex-1 pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Both now fully off the tools</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">"We've been able to move forward to the next stage"</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">PS</div>
<div className="text-xs">
<div className="font-medium text-slate-900">Paul Smith</div>
<div className="text-slate-400" style={{}}>Daniel James Bathrooms</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
<a className="z-10 flex items-center justify-center w-full h-full absolute top-0 right-0 bottom-0 left-0" href="https://youtube.com/shorts/DmTCq-yxiJM?si=ccRzTdmPQ6HlhB7N" target="_blank">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/Z61X0FSc/Screenshot-2025-12-05-at-13-49-40.png"/>
<div 20="" 30="" 40="" backdrop-blur-md="" bg-white="" border="" border-white="" className="absolute &lt;div class=" duration-300="" flex="" group-hover:bg-white="" group-hover:scale-110="" h-12="" items-center="" justify-center="" relative="" rounded-full="" shadow-xl"="" transition-all="" w-12="" z-10="">
<svg className="text-white ml-0.5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</a>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        1:58
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Highest Annual Revenue Ever since working with us
</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">"My wife told me not to do it... within the first 2 weeks the diary was filled with appointments"</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">MR</div>
<div className="text-xs">
<div className="font-medium text-slate-900">Mike Ralph</div>
<div className="text-slate-400">M Ralph Plumbing &amp; Heating</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
<a className="z-10 flex items-center justify-center w-full h-full absolute top-0 right-0 bottom-0 left-0" href="https://youtu.be/hECCC883R9I?si=x2402Dp-dxl2wegg" target="_blank">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/zzJ4Fyj/Screenshot-2025-12-05-at-16-09-42.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="relative w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
<svg className="text-white ml-0.5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</a>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        2:45
                    </div>
</div>
<div className="flex flex-col flex-1 pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Skeptical to closing £36,000 in January</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">"I didnt have a lot of monmey set aside for advertising, I didnt want to do it but I needed to as word of mouth just wasnt enough for me to get to where I wanted to"</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">MT</div>
<div className="text-xs">
<div className="font-medium text-slate-900">Mark Turner</div>
<div className="text-slate-400">Airborne Bathrooms</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
<a className="z-10 flex items-center justify-center w-full h-full absolute top-0 right-0 bottom-0 left-0" href="https://youtu.be/s46EepU5kFc?si=UybmhqIRKym3MRlL" target="_blank">
<img alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 overflow-hidden">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
<svg className="text-white ml-0.5" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</a>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        4:10
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2" style={{}}>£60,000+ closed in Landscaping work</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">"It's been flawless since day 1"</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">O</div>
<div className="text-xs">
<div className="font-medium text-slate-900" style={{}}>Ollie</div>
<div className="text-slate-400" style={{}}>Owner</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center bg-zinc-900/90 backdrop-blur-sm flex-col gap-4 z-20 group cursor-pointer transition-all duration-300">
<div className="w-20 h-20 rounded-full bg-zinc-200 flex items-end justify-center overflow-hidden border-4 border-white/10 shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
<svg className="w-16 h-16 text-black -mb-2 opacity-90" fill="currentColor" stroke="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
<span className="text-white font-semibold text-lg tracking-tight drop-shadow-lg group-hover:text-zinc-200 transition-colors">Could this be you?</span>
</div>
<div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-semibold text-white tracking-wide">
                        1:32
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex gap-0.5 mb-3 text-brand-500">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2" style={{}}>This could be you...</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">Click the 'Book a Call' button and get in touch with us today! Stop waiting for the "right moment". Take action today to be one step closer to your goals.</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-400 bg-slate-100 w-8 h-8 border-slate-200 border rounded-full items-center justify-center">?</div>
<div className="text-xs">
<div className="font-medium text-slate-900">You</div>
<div className="text-slate-400">Owner</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 border-slate-100 border-t mt-20 pt-10 gap-x-8 gap-y-8 items-center">
<div className="">
<h4 className="text-base font-semibold text-slate-900 mb-2">Not sure where to start?</h4>
<p className="text-slate-500 text-sm">Book a free strategy call and we'll walk you through our success stories relevant to your industry.</p>
</div>
<div className="flex justify-start md:justify-end">
<a className="btn-shine group inline-flex items-center gap-2 shadow-brand-500/25 hover:bg-brand-600 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 font-medium text-white bg-brand-500 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="https://strategy.conquergrowth.io/gogetmarketing/">Book a call</a>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white border-slate-200 border-b pt-24 pb-24 relative" id="faq">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-50 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5">
<div className="sticky top-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-6">
                        Support
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Everything you need to know regarding the service
                    </h2>
<p className="leading-relaxed text-lg text-slate-500 mb-8">We know that you see marketing companies all the time and don't know who to trust. So here's the answers to your questions.</p>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="flex items-center gap-4 mb-4">
<div className="flex -space-x-3">
<img alt="Support" className="w-10 h-10 border-white border-2 ring-slate-100 ring-1 rounded-full" src="https://i.ibb.co/7tM6gFd5/Gemini-Generated-Image-sk4625sk4625sk46.png"/>
<img alt="Support" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://i.ibb.co/pvd1CYtj/Screenshot-2026-01-17-at-13-17-45.png"/>
<img alt="Support" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 bg-brand-100 flex items-center justify-center text-xs font-medium text-brand-700" src="https://i.ibb.co/7dGJGCWS/Gemini-Generated-Image-qfsi0pqfsi0pqfsi.png"/>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Still have questions?</p>
<p className="text-xs text-slate-500">Chat with our team directly.</p>
</div>
</div>
<button className="hover:border-brand-300 hover:text-brand-600 transition-all flex gap-2 group text-sm font-medium text-slate-700 bg-white w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://strategy.conquergrowth.io/gogetmarketing/'">Book a call</button>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-4">

<details className="group bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200/50 open:shadow-lg open:shadow-slate-200/20 rounded-xl transition-all duration-300">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium text-slate-900">How quickly can we get set up?</span>
<span className="bg-white group-open:bg-brand-500 group-open:text-white border border-slate-200 group-open:border-brand-500 rounded-full p-2 transition-all duration-300">
<svg className="transition-transform duration-300 group-open:rotate-45 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(71, 85, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg>
</span>
</summary><div className="px-6 pb-6 text-slate-500 leading-relaxed animate-fade-in-up">
                        Typically we get set up within 5-7 days after we have all the content from you / meet you to film content at your showroom / location. We just need to understand your services, pricing rough estimates, and service area to build a knowledge base and then we are ready to go!
                    </div>
</details>

<details className="group bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200/50 open:shadow-lg open:shadow-slate-200/20 rounded-xl transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-slate-900">Who do you work with?</span>
<span className="bg-white group-open:bg-brand-500 group-open:text-white border border-slate-200 group-open:border-brand-500 rounded-full p-2 transition-all duration-300">
<svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed animate-fade-in-up">
                        We only work with companies who have a team in place, can handle volume and have a clear vison for growth. We find these companies are at £40,000 per month. We work with various services however we dont work with anything maintenance based like plumbing or waste removal.
                    </div>
</details>

<details className="group bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200/50 open:shadow-lg open:shadow-slate-200/20 rounded-xl transition-all duration-300">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium text-slate-900">Whats the price?</span>
<span className="bg-white group-open:bg-brand-500 group-open:text-white border border-slate-200 group-open:border-brand-500 rounded-full p-2 transition-all duration-300">
<svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed animate-fade-in-up">
                        There is no set price. Just like you have to go to appointments to see what the customer needs, we need to have a call to see what you need and we create a strategy plan together and price everything that way.
                    </div>
</details>

<details className="group bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200/50 open:shadow-lg open:shadow-slate-200/20 rounded-xl transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-slate-900">Is there a long-term contract?</span>
<span className="bg-white group-open:bg-brand-500 group-open:text-white border border-slate-200 group-open:border-brand-500 rounded-full p-2 transition-all duration-300">
<svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed animate-fade-in-up">
                        We operate on a rolling monthly basis because we believe the results should keep you with us, not a piece of paper. You can pause or cancel your subscription with 30 days notice.
                    </div>
</details>

<details className="group bg-slate-50 open:bg-white open:ring-1 open:ring-slate-200/50 open:shadow-lg open:shadow-slate-200/20 rounded-xl transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-lg font-medium text-slate-900">What makes you qualified?</span>
<span className="bg-white group-open:bg-brand-500 group-open:text-white border border-slate-200 group-open:border-brand-500 rounded-full p-2 transition-all duration-300">
<svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed animate-fade-in-up">
                        We generated £2.4 Million in 2025 alone in the Home Improvement space. If you're not open to being coached and are not able to be held accountable. With growth comes discomfort and we will do everything in our power to ensure that you get at least 40 appointments in 90 days.
                    </div>
</details>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Get in touch</h2>
<p className="text-lg text-slate-500 max-w-2xl mr-auto ml-auto" style={{}}>Connect with us on our social platforms for the latest updates, news, and partner results.</p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6">

<a className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="#">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://www.facebook.com/profile.php?id=61555977946007'" role="button"></div>
<div className="z-10 flex flex-col cursor-pointer text-center relative items-center" onclick="window.location.href='https://www.facebook.com/p/Conquer-Growth-61555977946007/';window.location.href='https://www.facebook.com/p/Conquer-Growth-61555977946007/'" role="button">
<div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-blue-600">
<svg className="lucide lucide-facebook" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Facebook</h3>
<p className="text-sm text-slate-500 mb-4 cursor-pointer" onclick="window.location.href='https://www.facebook.com/profile.php?id=61555977946007'" role="button">Join our community and stay updated with daily posts.</p>
<span className="inline-flex items-center group-hover:text-blue-700 text-sm font-medium text-blue-600">
                        Follow Page <svg className="ml-1 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="#">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col text-center relative items-center cursor-pointer" onclick="window.location.href='https://www.instagram.com/theconquergrowth/'" role="button">
<div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-pink-600">
<svg className="lucide lucide-instagram" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Instagram</h3>
<p className="text-sm text-slate-500 mb-4">See behind the scenes and our latest visual stories.</p>
<span className="inline-flex items-center group-hover:text-pink-700 text-sm font-medium text-pink-600 cursor-pointer" onclick="window.location.href='https://www.instagram.com/theconquergrowth/'" role="button">
                        Follow Us <svg className="ml-1 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-sky-600">
<svg className="lucide lucide-linkedin" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">LinkedIn</h3>
<p className="text-slate-500 text-sm mb-4">Connect for professional updates and company news.</p>
<span className="inline-flex items-center group-hover:text-sky-700 text-sm font-medium text-sky-600 cursor-pointer" onclick="window.location.href='/linkedin.com/company/its-conquer-growth/'" role="button">
                        Connect <svg className="ml-1 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>
</div>
</div>
</section>
    </>
  );
}
