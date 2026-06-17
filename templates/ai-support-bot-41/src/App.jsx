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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const AIClone = {
  currentPlan: {},
  
  init() {
    this.setupScrollObserver();
    this.setupNavObserver();
    this.setupModalListeners();
    this.setupSmoothScroll();
  },

  setupScrollObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-4');
          e.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  setupNavObserver() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-white/10');
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-white/10');
        nav.classList.add('border-transparent');
      }
    });
  },

  toggleFaq(btn) {
    const answer = btn.querySelector('.faq-a');
    const icon = btn.querySelector('.faq-toggle');
    const isOpen = !answer.classList.contains('max-h-0');

    if (!isOpen) {
      answer.classList.remove('max-h-0', 'opacity-0');
      answer.classList.add('max-h-[400px]', 'opacity-100', 'pt-4');
      icon.classList.add('-rotate-180');
    } else {
      answer.classList.add('max-h-0', 'opacity-0');
      answer.classList.remove('max-h-[400px]', 'opacity-100', 'pt-4');
      icon.classList.remove('-rotate-180');
    }
  },

  openModal(name, desc, price) {
    this.currentPlan = { name, desc, price };
    document.getElementById('modal-plan-name').textContent = name;
    document.getElementById('modal-plan-desc').textContent = desc;
    document.getElementById('modal-plan-price').textContent = price;
    
    ['f-first', 'f-email'].forEach(id => {
      const el = document.getElementById(id);
      if(el) { el.value = ''; el.style.borderColor = ''; }
    });
    
    const modalContent = document.getElementById('modal-content');
    if(modalContent.querySelector('.success-screen')) {
       location.reload(); 
    }

    const modal = document.getElementById('modal');
    const box = document.getElementById('modal-box');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    box.classList.remove('translate-y-8', 'scale-95');
    box.classList.add('translate-y-0', 'scale-100');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const modal = document.getElementById('modal');
    const box = document.getElementById('modal-box');
    modal.classList.add('opacity-0', 'pointer-events-none');
    box.classList.remove('translate-y-0', 'scale-100');
    box.classList.add('translate-y-8', 'scale-95');
    document.body.style.overflow = '';
  },

  setupModalListeners() {
    document.getElementById('modal-close-btn').addEventListener('click', () => this.closeModal());
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') this.closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeModal();
    });
    document.getElementById('modal-submit-btn').addEventListener('click', () => this.submitOrder());
  },

  submitOrder() {
    const first = document.getElementById('f-first').value.trim();
    const email = document.getElementById('f-email').value.trim();
    let hasError = false;

    ['f-first', 'f-email'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = '#ff3b30';
        hasError = true;
      } else {
        el.style.borderColor = '';
      }
    });

    if (hasError) return;

    document.getElementById('modal-content').innerHTML = `
      <div class="text-center py-6 success-screen">
        <div class="w-14 h-14 rounded-full bg-[#FF8A00]/10 flex items-center justify-center text-[#FF8A00] text-2xl mx-auto mb-6 border border-[#FF8A00]/20">
          <iconify-icon icon="solar:check-circle-bold" stroke-width="1.5"></iconify-icon>
        </div>
        <div class="text-2xl text-[#f5f5f7] tracking-tighter font-semibold mb-2">Order Confirmed</div>
        <div class="text-sm text-[#86868b] leading-relaxed max-w-sm mx-auto mb-8">
          Thanks ${first}. We've received your request for the <span class="text-[#FF8A00] font-medium">${this.currentPlan.name}</span>.<br><br>
          We'll send next steps to <span class="text-[#f5f5f7]">${email}</span> shortly.
        </div>
        <button onclick="AIClone.closeModal()" class="w-full bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,138,0,0.15)] text-[#FFE885] rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_30px_rgba(255,138,0,0.25)]">
          Done
        </button>
      </div>
    `;

    const notif = document.getElementById('notif');
    notif.classList.remove('translate-y-32');
    setTimeout(() => notif.classList.add('translate-y-32'), 4000);
  },

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => AIClone.init());

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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 translate-y-32 bg-[#1d1d1f]/90 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 text-xs text-[#f5f5f7] z-[1000] transition-transform duration-500 shadow-2xl whitespace-nowrap font-medium" id="notif">
  Order received — <span className="text-[#FF8A00]">check your email</span> for next steps
</div>

<div className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-xl flex items-center justify-center p-5 opacity-0 pointer-events-none transition-opacity duration-500" id="modal">
<div className="w-full max-w-md bg-[#111111] border border-[#FF8A00]/20 rounded-[28px] p-8 relative transform translate-y-8 scale-95 transition-all duration-500 shadow-[0_0_50px_rgba(255,138,0,0.1)]" id="modal-box">
<button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#86868b] text-lg hover:bg-[#FF8A00]/20 hover:text-[#FF8A00] transition-colors" id="modal-close-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div id="modal-content">
<div className="text-3xl text-[#f5f5f7] tracking-tighter font-semibold mb-1">Get started.</div>
<div className="text-sm text-[#86868b] mb-6 leading-relaxed">Fill in your details and we'll be in touch.</div>
<div className="bg-[#FF8A00]/5 border border-[#FF8A00]/10 rounded-2xl p-4 mb-6 flex justify-between items-center backdrop-blur-md">
<div>
<div className="text-sm font-semibold text-[#FF8A00] mb-0.5 tracking-tight" id="modal-plan-name">Professional</div>
<div className="text-xs text-[#86868b]" id="modal-plan-desc">All 4 channels · $1,500/mo retainer</div>
</div>
<div className="text-xl text-[#f5f5f7] tracking-tighter font-semibold" id="modal-plan-price">$3,500</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
<div>
<label className="block text-xs font-medium text-[#86868b] mb-1.5">First name</label>
<input className="w-full bg-[#000000]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#515154] outline-none transition-colors focus:border-[#FF8A00]/50 focus:bg-[#000000]/80" id="f-first" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#86868b] mb-1.5">Last name</label>
<input className="w-full bg-[#000000]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#515154] outline-none transition-colors focus:border-[#FF8A00]/50 focus:bg-[#000000]/80" id="f-last" placeholder="Smith" type="text"/>
</div>
</div>
<div className="mb-3">
<label className="block text-xs font-medium text-[#86868b] mb-1.5">Work email</label>
<input className="w-full bg-[#000000]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#515154] outline-none transition-colors focus:border-[#FF8A00]/50 focus:bg-[#000000]/80" id="f-email" placeholder="jane@company.com" type="email"/>
</div>
<div className="mb-3">
<label className="block text-xs font-medium text-[#86868b] mb-1.5">Company website</label>
<input className="w-full bg-[#000000]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#515154] outline-none transition-colors focus:border-[#FF8A00]/50 focus:bg-[#000000]/80" id="f-url" placeholder="https://yoursite.com" type="url"/>
</div>
<div className="mb-6 relative hidden" id="f-company-container">
<input id="f-company" type="text" value="Skipped"/>
</div>
<button className="w-full bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,138,0,0.15)] text-[#FFE885] rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_30px_rgba(255,138,0,0.25)] flex items-center justify-center gap-2" id="modal-submit-btn">
        Confirm &amp; Pay <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-[10px] text-[#86868b] text-center mt-4 tracking-wide font-medium uppercase">
        Secure checkout · 14-day guarantee
      </div>
</div>
</div>
</div>

<nav className="fixed top-0 inset-x-0 z-[100] px-6 md:px-[5%] h-16 flex items-center justify-between border-b border-transparent transition-all duration-300" id="nav">
<a className="flex items-center gap-2 text-base font-semibold tracking-tighter text-[#f5f5f7] hover:opacity-80 transition-opacity" href="#">
<iconify-icon className="text-[#FF8A00] text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
    AI Clone
  </a>
<div className="hidden md:flex gap-8 items-center bg-[#111111]/50 backdrop-blur-md border border-white/5 rounded-full px-6 py-2">
<a className="text-xs font-medium text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#how">Process</a>
<a className="text-xs font-medium text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:block">
<a className="bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_15px_rgba(255,138,0,0.1)] text-[#FFE885] px-5 py-2 rounded-full text-xs font-semibold hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_20px_rgba(255,138,0,0.2)] transition-all duration-300" href="#pricing">
      Get started
    </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden px-6 md:px-[5%]" id="hero">
<div className="absolute w-[800px] h-[800px] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.2]" style={{background: 'radial-gradient(circle, #FF8A00 0%, transparent 60%)'}}></div>
<div className="max-w-[1000px] mx-auto w-full relative z-10 text-center flex flex-col items-center">
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 bg-[#FF8A00]/10 border border-[#FF8A00]/20 rounded-full py-1.5 px-4 text-xs font-medium text-[#FF8A00] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,138,0,0.1)]">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] animate-pulse"></div>
      Now accepting new clients
    </div>
<h1 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-75 text-5xl md:text-7xl lg:text-[88px] tracking-tighter text-[#f5f5f7] mb-6 font-semibold leading-[1.05]">
      Your AI support bot.<br/><span className="text-[#86868b]">Live tomorrow.</span>
</h1>
<p className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-150 text-base md:text-lg text-[#86868b] max-w-[560px] mb-10 font-medium leading-relaxed">
      We build and deploy intelligent customer support agents for SaaS. Handles 70% of tickets automatically across Web, WhatsApp, and Social.
    </p>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200 flex flex-wrap gap-4 items-center justify-center">
<a className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,138,0,0.15)] text-[#FFE885] px-8 py-3.5 rounded-full text-sm font-semibold hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_30px_rgba(255,138,0,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" href="#pricing">
        See pricing
      </a>
<a className="inline-flex items-center gap-2 text-[#f5f5f7] bg-white/5 border border-white/10 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 hover:text-[#FF8A00] transition-colors" href="#how">
        How it works
      </a>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 flex flex-wrap justify-center gap-8 md:gap-16 mt-20 pt-10 border-t border-white/5 w-full max-w-3xl">
<div className="text-center group">
<div className="text-4xl text-[#f5f5f7] tracking-tighter font-semibold mb-1 group-hover:text-[#FF8A00] transition-colors">70<span className="text-[#86868b] group-hover:text-[#FF8A00]/70 transition-colors">%</span></div>
<div className="text-xs text-[#86868b] font-medium">Tickets automated</div>
</div>
<div className="text-center group">
<div className="text-4xl text-[#f5f5f7] tracking-tighter font-semibold mb-1 group-hover:text-[#FF8A00] transition-colors">24<span className="text-2xl text-[#86868b] group-hover:text-[#FF8A00]/70 transition-colors">h</span></div>
<div className="text-xs text-[#86868b] font-medium">To deployment</div>
</div>
<div className="text-center group">
<div className="text-4xl text-[#f5f5f7] tracking-tighter font-semibold mb-1 group-hover:text-[#FF8A00] transition-colors">4</div>
<div className="text-xs text-[#86868b] font-medium">Native channels</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 px-6 md:px-[5%] border-y border-white/5" id="problem">
<div className="max-w-[1100px] mx-auto text-center md:text-left flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-[#f5f5f7] tracking-tighter mb-5 leading-[1.1] font-semibold">
        Your team answers the same questions. <span className="text-[#86868b]">Every day.</span>
</h2>
<p className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 text-base text-[#86868b] leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
        It doesn't scale. Your best people are wasting hours on repetitive queries while potential leads walk away during off-hours.
      </p>
</div>
<div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 bg-[#111111] p-8 rounded-[24px] border border-white/5 hover:border-[#FF8A00]/30 transition-colors group">
<div className="text-4xl text-[#FF8A00] tracking-tighter font-semibold mb-3">65%</div>
<div className="text-sm font-medium text-[#f5f5f7] mb-2 group-hover:text-[#FF8A00] transition-colors">Identical FAQs</div>
<div className="text-xs text-[#86868b] leading-relaxed">Your team manually answers pricing and feature questions daily.</div>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200 bg-[#111111] p-8 rounded-[24px] border border-white/5 hover:border-[#FF8A00]/30 transition-colors group">
<div className="text-4xl text-[#FF8A00] tracking-tighter font-semibold mb-3">56%</div>
<div className="text-sm font-medium text-[#f5f5f7] mb-2 group-hover:text-[#FF8A00] transition-colors">Lost after hours</div>
<div className="text-xs text-[#86868b] leading-relaxed">Nights and weekends are dead zones. Churned users are the invisible cost.</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-[5%]" id="services">
<div className="max-w-[1100px] mx-auto">
<div className="text-center mb-16">
<h2 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-[#f5f5f7] tracking-tighter mb-5 leading-[1.1] font-semibold">
        One bot.<br/><span className="text-[#86868b]">Four distinct jobs.</span>
</h2>
<p className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 text-base text-[#86868b] max-w-xl mx-auto leading-relaxed">
        We build, deploy, and maintain a complete AI ecosystem for your specific product. Fully managed, zero maintenance.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:border-[#FF8A00]/20 group">
<div className="w-10 h-10 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center text-lg mb-6 group-hover:bg-[#FF8A00] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-base font-semibold text-[#f5f5f7] mb-2 tracking-tight">FAQ Resolution</div>
<div className="text-sm text-[#86868b] leading-relaxed mb-6">Trained on your docs and support history. Answers instantly, 24/7.</div>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:border-[#FF8A00]/20 group">
<div className="w-10 h-10 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center text-lg mb-6 group-hover:bg-[#FF8A00] group-hover:text-white transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-base font-semibold text-[#f5f5f7] mb-2 tracking-tight">Lead Qualification</div>
<div className="text-sm text-[#86868b] leading-relaxed mb-6">Asks the right questions and logs every lead directly into your CRM.</div>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200 bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:border-[#FF8A00]/20 group">
<div className="w-10 h-10 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center text-lg mb-6 group-hover:bg-[#FF8A00] group-hover:text-white transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-base font-semibold text-[#f5f5f7] mb-2 tracking-tight">Demo Booking</div>
<div className="text-sm text-[#86868b] leading-relaxed mb-6">Shows available time slots and sends your Calendly links natively.</div>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 bg-[#0a0a0a] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:border-[#FF8A00]/20 group">
<div className="w-10 h-10 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center text-lg mb-6 group-hover:bg-[#FF8A00] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-base font-semibold text-[#f5f5f7] mb-2 tracking-tight">Smart Escalation</div>
<div className="text-sm text-[#86868b] leading-relaxed mb-6">Troubleshoots first, escalates to human team only when strictly necessary.</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-[5%] border-t border-white/5 relative overflow-hidden" id="how">
<div className="absolute inset-0 bg-[#050505] -z-10"></div>
<div className="max-w-[1100px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5f7] tracking-tighter mb-6 leading-[1.1] font-semibold">
          From kick-off to live.<br/><span className="text-[#86868b]">In 24 hours.</span>
</h2>
<p className="text-base text-[#86868b] mb-10 leading-relaxed max-w-md">
          No long discovery calls. No 6-week projects. We have a streamlined process designed for speed and precision.
        </p>
<div className="flex flex-col gap-6 relative">
<div className="absolute top-4 bottom-4 left-[15px] w-px bg-white/10"></div>
<div className="flex gap-6 relative z-10 hover:translate-x-1 transition-transform cursor-default">
<div className="w-8 h-8 rounded-full bg-[#111111] border border-[#FF8A00]/30 text-[#FF8A00] flex items-center justify-center text-xs font-semibold shrink-0">1</div>
<div>
<div className="text-sm font-semibold text-[#f5f5f7] mb-1">Product Audit</div>
<div className="text-xs text-[#86868b]">We review your docs, FAQs, and support history.</div>
</div>
</div>
<div className="flex gap-6 relative z-10 hover:translate-x-1 transition-transform cursor-default">
<div className="w-8 h-8 rounded-full bg-[#111111] border border-[#FF8A00]/30 text-[#FF8A00] flex items-center justify-center text-xs font-semibold shrink-0">2</div>
<div>
<div className="text-sm font-semibold text-[#f5f5f7] mb-1">AI Training</div>
<div className="text-xs text-[#86868b]">System prompting, knowledge base loading, intent routing.</div>
</div>
</div>
<div className="flex gap-6 relative z-10 hover:translate-x-1 transition-transform cursor-default">
<div className="w-8 h-8 rounded-full bg-[#111111] border border-[#FF8A00]/30 text-[#FF8A00] flex items-center justify-center text-xs font-semibold shrink-0">3</div>
<div>
<div className="text-sm font-semibold text-[#f5f5f7] mb-1">Go Live</div>
<div className="text-xs text-[#86868b]">Widget deploys in minutes. WhatsApp &amp; Social follow.</div>
</div>
</div>
</div>
</div>

<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200 bg-[#0a0a0a] border border-white/10 rounded-[20px] overflow-hidden shadow-[0_0_30px_rgba(255,138,0,0.05)]">
<div className="bg-[#111111] px-4 py-3 flex gap-2 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-6 text-xs text-[#86868b] leading-loose" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div><span className="text-[#515154]">// Configuration complete</span></div>
<div className="mt-2"><span className="text-[#ff7b72]">const</span> bot = <span className="text-[#ff7b72]">new</span> AICloneBot({</div>
<div className="pl-4"><span className="text-[#79c0ff]">company</span>: <span className="text-[#a5d6ff]">"YourSaaS"</span>,</div>
<div className="pl-4"><span className="text-[#79c0ff]">channels</span>: [<span className="text-[#a5d6ff]">"web"</span>, <span className="text-[#a5d6ff]">"whatsapp"</span>],</div>
<div className="pl-4"><span className="text-[#79c0ff]">crm</span>: <span className="text-[#a5d6ff]">"hubspot"</span>,</div>
<div className="pl-4"><span className="text-[#79c0ff]">escalation</span>: <span className="text-[#a5d6ff]">"zendesk"</span></div>
<div>});</div>
<div className="mt-4"><span className="text-[#d2a8ff]">await</span> bot.deploy();</div>
<div className="mt-2"><span className="text-[#FF8A00]">✓ Deployed successfully.</span> Ticket volume reducing...</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-[5%] relative border-t border-white/5" id="pricing">
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-[#f5f5f7] tracking-tighter mb-5 leading-[1.1] font-semibold">
        Simple pricing.<br/><span className="text-[#86868b]">No surprises.</span>
</h2>
<p className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 text-base text-[#86868b] max-w-xl mx-auto leading-relaxed">
        Setup fee covers build. Monthly retainer covers updates and monitoring.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">

<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out bg-[#050505] border border-white/10 rounded-[32px] p-10 flex flex-col h-full hover:border-[#FF8A00]/30 transition-colors">
<div className="text-sm font-semibold text-[#f5f5f7] mb-4">Starter</div>
<div className="flex items-start tracking-tighter mb-2 font-semibold">
<span className="text-5xl text-[#f5f5f7]">$1,500</span>
</div>
<div className="text-sm text-[#86868b] mb-1">setup fee</div>
<div className="text-xs font-medium text-[#f5f5f7] mb-8">+ $800 / month</div>
<ul className="flex flex-col gap-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#86868b]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Website chat widget</li>
<li className="flex items-start gap-3 text-sm text-[#86868b]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> FAQ answering</li>
<li className="flex items-start gap-3 text-sm text-[#86868b]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Lead capture</li>
</ul>
<button className="w-full text-center py-3.5 rounded-full text-sm font-medium transition-all bg-white/5 text-[#f5f5f7] hover:bg-white/10 hover:text-[#FF8A00]" onclick="AIClone.openModal('Starter', 'Website only · $800/mo', '$1,500')">
          Select Starter
        </button>
</div>

<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 bg-[#1d1d1f] border border-[#FF8A00]/20 rounded-[32px] p-10 flex flex-col h-full relative shadow-[0_0_40px_rgba(255,138,0,0.1)] md:scale-105">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF8A00] text-[#000000] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
<div className="text-sm font-semibold text-[#f5f5f7] mb-4">Professional</div>
<div className="flex items-start tracking-tighter mb-2 font-semibold">
<span className="text-5xl text-[#f5f5f7]">$3,500</span>
</div>
<div className="text-sm text-[#86868b] mb-1">setup fee</div>
<div className="text-xs font-medium text-[#f5f5f7] mb-8">+ $1,500 / month</div>
<ul className="flex flex-col gap-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-[#f5f5f7]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon> All 4 channels (Web, WA, IG, FB)</li>
<li className="flex items-start gap-3 text-sm text-[#f5f5f7]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon> Deep CRM Integration</li>
<li className="flex items-start gap-3 text-sm text-[#f5f5f7]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon> Escalation routing</li>
<li className="flex items-start gap-3 text-sm text-[#f5f5f7]"><iconify-icon className="text-[#FF8A00] text-lg shrink-0" icon="solar:check-circle-bold"></iconify-icon> Dedicated success manager</li>
</ul>
<button className="w-full bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,138,0,0.15)] text-[#FFE885] rounded-full py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_30px_rgba(255,138,0,0.25)] text-center" onclick="AIClone.openModal('Professional', 'All channels · $1,500/mo', '$3,500')">
          Select Professional
        </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-[5%] bg-[#050505] border-t border-white/5" id="faq">
<div className="max-w-[700px] mx-auto">
<div className="text-center mb-16">
<h2 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out text-4xl md:text-5xl text-[#f5f5f7] tracking-tighter mb-5 leading-[1.1] font-semibold">
        Questions.
      </h2>
</div>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 flex flex-col" id="faq-list">
<div className="faq-item border-b border-white/10 py-5 cursor-pointer group" onclick="AIClone.toggleFaq(this)">
<div className="text-base font-medium text-[#f5f5f7] flex justify-between items-center gap-4 group-hover:text-[#FF8A00] transition-colors">
          How long does it really take to go live?
          <iconify-icon className="faq-toggle text-[#86868b] group-hover:text-[#FF8A00] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-a text-sm text-[#86868b] leading-relaxed max-h-0 overflow-hidden transition-all duration-300 opacity-0">
          The website widget goes live within 24 hours of receiving your info. Adding WhatsApp and Social adds 24–48 hours for API verification.
        </div>
</div>
<div className="faq-item border-b border-white/10 py-5 cursor-pointer group" onclick="AIClone.toggleFaq(this)">
<div className="text-base font-medium text-[#f5f5f7] flex justify-between items-center gap-4 group-hover:text-[#FF8A00] transition-colors">
          Will the bot hallucinate or say wrong things?
          <iconify-icon className="faq-toggle text-[#86868b] group-hover:text-[#FF8A00] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-a text-sm text-[#86868b] leading-relaxed max-h-0 overflow-hidden transition-all duration-300 opacity-0">
          No. We strictly configure the agent to only reference the provided knowledge base. If it doesn't know the answer, it escalates to a human.
        </div>
</div>
<div className="faq-item border-b border-white/10 py-5 cursor-pointer group" onclick="AIClone.toggleFaq(this)">
<div className="text-base font-medium text-[#f5f5f7] flex justify-between items-center gap-4 group-hover:text-[#FF8A00] transition-colors">
          Do I need developers to set this up?
          <iconify-icon className="faq-toggle text-[#86868b] group-hover:text-[#FF8A00] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-a text-sm text-[#86868b] leading-relaxed max-h-0 overflow-hidden transition-all duration-300 opacity-0">
          Not at all. We handle the entire backend, API connections, and logic. You only need to paste a simple 2-line code snippet on your website.
        </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-[5%] text-center border-t border-white/5 relative overflow-hidden" id="cta">
<div className="absolute w-full h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.1]" style={{background: 'radial-gradient(ellipse, #FF8A00 0%, transparent 70%)'}}></div>
<div className="max-w-[700px] mx-auto relative z-10">
<h2 className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out text-5xl md:text-7xl text-[#f5f5f7] tracking-tighter mb-6 leading-[1.05] font-semibold">
      Ready to scale?
    </h2>
<p className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-100 text-lg text-[#86868b] mb-10 leading-relaxed max-w-md mx-auto">
      Stop losing leads to slow support. Get your custom AI agent live by tomorrow.
    </p>
<div className="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200 flex justify-center">
<button className="bg-gradient-to-r from-[#FFB800]/10 to-[#FF8A00]/10 backdrop-blur-md border border-[#FFB800]/30 shadow-[0_0_20px_rgba(255,138,0,0.15)] text-[#FFE885] px-8 py-3.5 rounded-full text-sm font-semibold hover:from-[#FFB800]/20 hover:to-[#FF8A00]/20 hover:shadow-[0_0_30px_rgba(255,138,0,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" onclick="AIClone.openModal('Professional', 'All channels', '$3,500')">
        Get started today
      </button>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-[5%] border-t border-white/5 bg-[#000000]">
<div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tighter text-[#f5f5f7]">
<iconify-icon className="text-[#FF8A00] text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
      AI Clone
    </div>
<div className="flex gap-6">
<a className="text-xs text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#services">Services</a>
<a className="text-xs text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#pricing">Pricing</a>
<a className="text-xs text-[#86868b] hover:text-[#FF8A00] transition-colors" href="mailto:hello@aiclone.io">Contact</a>
</div>
<div className="flex gap-4 items-center">
<a aria-label="Twitter" className="text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#">
<iconify-icon className="text-lg" icon="ri:twitter-x-line"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#">
<iconify-icon className="text-lg" icon="ri:linkedin-line"></iconify-icon>
</a>
<a aria-label="Instagram" className="text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#">
<iconify-icon className="text-lg" icon="ri:instagram-line"></iconify-icon>
</a>
<a aria-label="GitHub" className="text-[#86868b] hover:text-[#FF8A00] transition-colors" href="#">
<iconify-icon className="text-lg" icon="ri:github-line"></iconify-icon>
</a>
</div>
<div className="text-xs text-[#515154]">© 2026 AI Clone.</div>
</div>
</footer>


    </>
  );
}
