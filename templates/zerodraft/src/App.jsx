import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            window.__inViewIO.unobserve(entry.target);
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



  // Initialize Lucide icons
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

  // Mobile menu toggle
  const toggleBtn = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      const expanded = !isHidden;
      toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      iconMenu.classList.toggle('hidden', expanded);
      iconClose.classList.toggle('hidden', !expanded);
    });
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<header className="relative z-20 border-b border-gray-100" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4 sm:py-6">
<div className="flex items-center gap-3">
<a className="text-2xl text-gray-900 tracking-tight font-manrope font-medium" href="#">ZeroDraft</a>
</div>
<nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-600">
<a className="hover:text-gray-900 transition-colors font-sans" href="#how-it-works">How It Works</a>
<a className="hover:text-gray-900 transition-colors font-sans" href="#why-us">Why Us</a>
<a className="hover:text-gray-900 transition-colors font-sans" href="#case-study">Case Study</a>
<a className="hover:text-gray-900 transition-colors font-sans" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-gray-900/20 hover:bg-black transition-colors font-sans" href="#contact">Book Free Assessment</a>
<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50" id="mobileToggle" style={{}}>
<svg fill="none" height="24" id="iconMenu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="hidden" fill="none" height="24" id="iconClose" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
<div className="md:hidden hidden border-t border-gray-100" id="mobileMenu" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-1">
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-sans" href="#how-it-works">How It Works</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-sans" href="#why-us">Why Us</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-sans" href="#case-study">Case Study</a>
<a className="block px-2 py-3 text-sm text-gray-700 hover:text-gray-900 font-sans" href="#faq">FAQ</a>
<div className="pt-3">
<a className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white font-sans" href="#contact">Book Free Assessment</a>
</div>
</div>
</div>
</header>

<main className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute left-0 bottom-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
</div>
<div className="sm:px-6 lg:px-8 sm:pt-24 lg:pt-32 sm:pb-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs text-emerald-700 font-medium mb-6 font-sans" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        Trusted by Enterprise Finance Teams
      </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 font-manrope font-medium" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both'}}>
        Claim millions in SR&amp;ED<br/>faster than ever.
      </h1>
<p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>
        Audit-ready claims. White-glove service. Trusted by enterprise finance teams.
      </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animation: 'fadeSlideIn 1s ease-out 0.4s both'}}>
<a className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black transition-all shadow-xl shadow-gray-900/20 group font-sans" href="#contact">
          Book my free assessment
          <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-gray-700 px-6 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition font-sans" href="#case-study">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          See how we did it
        </a>
</div>

<div className="mt-16 p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl max-w-3xl mx-auto" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="flex items-center gap-1 text-amber-500 mb-1">
<svg fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm font-medium text-gray-900 font-sans">Highest success rate in the industry</p>
</div>
</div>
<div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
<div className="text-center sm:text-left">
<p className="text-2xl text-gray-900 tracking-tight font-manrope font-medium">$500K+</p>
<p className="text-sm text-gray-600 font-sans">Average claim recovered</p>
</div>
<div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
<div className="text-center sm:text-left">
<p className="text-2xl text-gray-900 tracking-tight font-manrope font-medium">&lt;2 hours</p>
<p className="text-sm text-gray-600 font-sans">Your time invested</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-16 sm:py-24 bg-white border-t border-gray-100" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 animate-on-scroll animate font-manrope font-medium" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
        SR&amp;ED in two hours, not eighty.
      </h2>
<p className="mt-6 text-lg text-gray-600 animate-on-scroll animate font-sans" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
        ZeroDraft helps Canadian enterprises unlock millions in non-dilutive funding without bottlenecks, wasted time, or compliance risk that normally come with filing.
      </p>
<p className="mt-4 text-base text-gray-600 animate-on-scroll animate font-sans" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
        Every claim is produced faster, more accurately, and fully audit-ready. Our licensed CPAs and engineers review every submission, maintaining one of the highest success rates in the industry.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-sans">Save weeks of effort</h3>
<p className="text-gray-600 font-sans">Your team spends less than 2 hours on a claim that can yield $500K+ in tax credits.</p>
</div>
<div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 animate-on-scroll animate" style={{animation: '1s ease-out 0.5s 1 normal both running fadeSlideIn'}}>
<div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-sans">Accuracy you can trust</h3>
<p className="text-gray-600 font-sans">Every claim is validated by our licensed CPAs to ensure it's audit-ready.</p>
</div>
<div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 animate-on-scroll animate" style={{animation: '1s ease-out 0.6s 1 normal both running fadeSlideIn'}}>
<div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight font-sans">No bloated 15%+ fees</h3>
<p className="text-gray-600 font-sans">We don't charge inflated 15%+ commissions like traditional SR&amp;ED consultants.</p>
</div>
</div>

<div className="mt-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.7s both'}}>
<h3 className="text-2xl sm:text-3xl text-gray-900 mb-6 tracking-tight font-manrope font-medium">Built for Canadian innovators</h3>
<p className="text-lg text-gray-600 mb-8 font-sans">If you're a Canadian business that:</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="text-emerald-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<p className="text-gray-700 font-sans">Has salaried technical staff</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="text-emerald-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<p className="text-gray-700 font-sans">Develops new products, software, or IP</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="text-emerald-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<p className="text-gray-700 font-sans">Is incorporated and pays taxes in Canada</p>
</div>
</div>
<p className="mt-6 text-base text-gray-600 italic font-sans">Then you likely qualify, even if you've never applied before.</p>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden" id="why-us">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute right-0 bottom-0 h-[800px] w-[800px] rounded-full bg-emerald-500/10 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight animate-on-scroll animate font-manrope font-medium" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
        Why ZeroDraft is the fastest path to SR&amp;ED success
      </h2>
<p className="mt-6 text-lg text-gray-300 animate-on-scroll animate font-sans" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
        When your SR&amp;ED process runs the way it should, everything moves faster.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
<div className="animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m5 9 7 7 7-7"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-semibold mb-2 font-sans">Scale with confidence</h3>
<p className="text-gray-300 font-sans" style={{}}>You hire without hesitation and stop guessing when funding will land.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-semibold mb-2 font-sans">Filing becomes a formality</h3>
<p className="text-gray-300 font-sans" style={{}}>Not an annual disruption that pulls your team away from innovation.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-semibold mb-2 font-sans">Avoid costly risks</h3>
<p className="text-gray-300 font-sans" style={{}}>When it doesn't work, you risk CRA audits and potential blacklisting from the program.</p>
</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="aspect-video bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center">
<svg className="text-white opacity-50" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
</div>
</div>
<div className="text-center animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<a className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all shadow-xl font-sans" href="#contact" style={{}}>
        Book my free assessment
        <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="case-study" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-emerald-100" style={{}}>
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 font-medium mb-6 font-sans">
<svg className="text-emerald-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
          Success Story
        </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 mb-6 animate-on-scroll animate font-manrope font-medium" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
          How SearchEye recovered $190,000 after a rejection
        </h2>
<div className="space-y-6 text-lg text-gray-700 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<p className="font-sans">When SearchEye's initial SR&amp;ED claim was outright rejected, it triggered a full CRA audit.</p>
<p className="font-medium text-gray-900 font-sans">Weeks of stress, 30+ hours of document requests, and a major operational distraction.</p>
<p className="font-sans">We stepped in, rebuilt their claim from the ground up, and got them approved with <span className="font-semibold text-emerald-700 font-sans">$190,000</span> with less than five hours of work from their team.</p>
</div>
<div className="mt-10 grid grid-cols-3 gap-6 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="bg-white rounded-2xl p-6 border border-gray-200" style={{}}>
<p className="text-3xl text-gray-900 tracking-tight font-manrope font-medium">$190K</p>
<p className="text-sm text-gray-600 mt-1 font-sans">Recovered</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-200" style={{}}>
<p className="text-3xl text-gray-900 tracking-tight font-manrope font-medium">&lt;5h</p>
<p className="text-sm text-gray-600 mt-1 font-sans">Client time</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-200" style={{}}>
<p className="text-3xl text-gray-900 tracking-tight font-manrope font-medium">100%</p>
<p className="text-sm text-gray-600 mt-1 font-sans">Approved</p>
</div>
</div>
<div className="mt-8 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<a className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition font-sans" href="#contact">
            See how we did it
            <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gray-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 animate-on-scroll animate font-manrope font-medium" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
        Transparent. Efficient. Proven.
      </h2>
<p className="mt-6 text-lg text-gray-600 animate-on-scroll animate font-sans" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
        We built the most cost-effective SR&amp;ED process in the industry, powered by automation and CPA oversight. No inflated commissions, and no hidden costs. Just faster, audit-ready claims.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white rounded-2xl p-8 border border-gray-200 relative animate-on-scroll animate" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>
<div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm font-sans">1</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2 font-sans">15-min call</h3>
<p className="text-gray-600 font-sans">You tell us about your business on a quick discovery call</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-200 relative animate-on-scroll animate" style={{animation: '1s ease-out 0.4s 1 normal both running fadeSlideIn'}}>
<div className="absolute -top-4 left-8 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm font-sans">2</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2 font-sans">Expert documentation</h3>
<p className="text-gray-600 font-sans">Our platform + CPA experts provide audit-ready documentation</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-200 relative animate-on-scroll animate" style={{animation: '1s ease-out 0.5s 1 normal both running fadeSlideIn'}}>
<div className="absolute -top-4 left-8 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm font-sans">3</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2 font-sans">You submit</h3>
<p className="text-gray-600 font-sans">Review and submit your claim with confidence</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-gray-200 relative animate-on-scroll animate" style={{animation: '1s ease-out 0.6s 1 normal both running fadeSlideIn'}}>
<div className="absolute -top-4 left-8 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm font-sans">✓</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2 font-sans">5-day guarantee</h3>
<p className="text-gray-600 font-sans">From intake to filing in just 5 days</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 font-manrope font-medium">What our clients say</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 animate-on-scroll animate" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="flex items-center gap-1 text-amber-500 mb-4">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-gray-700 mb-6 font-sans">"We used to spend 40+ hours writing grants. With ZeroDraft, we got $120K back in 6 days—with barely any time invested."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
<div>
<p className="font-semibold text-gray-900 font-sans">Jason T.</p>
<p className="text-sm text-gray-600 font-sans">CEO of AgriCore</p>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 animate-on-scroll animate" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>
<div className="flex items-center gap-1 text-amber-500 mb-4">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-gray-700 mb-6 font-sans">"I thought we wouldn't qualify. Turns out we were eligible for three different programs. The process was smoother than I imagined."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
<div>
<p className="font-semibold text-gray-900 font-sans">Priya N.</p>
<p className="text-sm text-gray-600 font-sans">CTO of a Cannabis Tech Startup</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gray-50" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 font-manrope font-medium">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">How much can I get?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">$500K+ depending on your business and scope of R&amp;D.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">Do I need technical documentation?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">No. Our engineers will extract the details needed to submit a compliant claim.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">What if I've already applied in the past?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">We'll review your past claims and may be able to find missed opportunities.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">Is my information secure?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">Yes. We use bank-level encryption and secure data storage protocols to protect your financial and technical data.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">Who has access to my data?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">Only our vetted CPAs. We never outsource to unauthorized third parties.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">Is your documentation audit-proof?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">Yes. Every claim is prepared with CRA guidelines in mind and reviewed by licensed professionals.</p>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 p-6 [&amp;[open]]:ring-2 [&amp;[open]]:ring-gray-900" style={{}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<h3 className="text-lg font-semibold text-gray-900 font-sans">Have your claims ever been rejected?</h3>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-sans">We maintain a high success rate. If there's an issue, we'll revise and resubmit at no cost to you.</p>
</details>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-blue-500/20 blur-3xl"></div>
<div className="absolute right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-emerald-500/20 blur-3xl"></div>
</div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 font-manrope font-medium">
      It's your money.<br/>Don't leave it on the table.
    </h2>
<p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans" style={{}}>
      Reduce filing time by more than 95 percent, improve compliance, and recover millions in non-dilutive funding without tying up your team for months.
    </p>
<a className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all shadow-2xl font-sans" href="#" style={{}}>
      Book my free consultation now
      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="bg-gray-900 text-white border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<h3 className="text-2xl mb-4 tracking-tight font-manrope font-medium">ZeroDraft</h3>
<p className="text-gray-400 text-sm max-w-md font-sans">The fastest, most cost-effective path to SR&amp;ED success. Trusted by Canadian enterprises.</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm font-sans">Product</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition font-sans" href="#">How It Works</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Pricing</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm font-sans">Company</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition font-sans" href="#">About</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Contact</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400 font-sans">© 2024 ZeroDraft. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition font-sans" href="#">Terms</a>
<a className="hover:text-white transition font-sans" href="#">Privacy</a>
<a className="hover:text-white transition font-sans" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
