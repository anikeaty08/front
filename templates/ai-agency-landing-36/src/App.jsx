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



        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            const isOpen = content.classList.contains('open');

            document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        function toggleService(element) {
            const serviceIndex = element.getAttribute('data-service');
            
            document.querySelectorAll('.service-item').forEach(item => {
                item.classList.remove('active');
                const number = item.querySelector('.service-number, span:first-child');
                const title = item.querySelector('.service-title');
                const arrow = item.querySelector('.service-arrow');
                if (number) number.classList.remove('text-indigo-400');
                if (number) number.classList.add('text-gray-400');
                if (title) title.classList.remove('text-indigo-950');
                if (title) title.classList.add('text-gray-600');
                if (arrow) arrow.classList.remove('opacity-100');
                if (arrow) arrow.classList.add('opacity-0');
            });
            
            element.classList.add('active');
            const activeNumber = element.querySelector('span:first-child');
            const activeTitle = element.querySelector('.service-title');
            const activeArrow = element.querySelector('.service-arrow');
            if (activeNumber) {
                activeNumber.classList.remove('text-gray-400');
                activeNumber.classList.add('text-indigo-400');
            }
            if (activeTitle) {
                activeTitle.classList.remove('text-gray-600');
                activeTitle.classList.add('text-indigo-950');
            }
            if (activeArrow) {
                activeArrow.classList.remove('opacity-0');
                activeArrow.classList.add('opacity-100');
            }
            
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.add('hidden');
            });
            const targetCard = document.querySelector(`.service-card[data-card="${serviceIndex}"]`);
            if (targetCard) {
                targetCard.classList.remove('hidden');
            }
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
      

<div className="w-full bg-slate-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-3">
<span className="text-sm text-gray-500 font-normal">Home</span>
</div>
</div>

<nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" style={{color: 'white', fontSize: '14px'}} width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">Aitherx</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition" href="#about">About</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition" href="#features">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center px-5 py-2.5 bg-indigo-950 text-white text-sm font-medium rounded-full hover:bg-indigo-900 transition" href="#cta">
                Book a free call
            </a>
<button className="md:hidden" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{color: '#374151', fontSize: '24px'}} width="24"></iconify-icon>
</button>
</div>
<div className="md:hidden hidden px-6 pb-4 space-y-3" id="mobileMenu">
<a className="block text-sm font-medium text-gray-700" href="#">Home</a>
<a className="block text-sm font-medium text-gray-500" href="#about">About</a>
<a className="block text-sm font-medium text-gray-500" href="#features">Services</a>
<a className="block text-sm font-medium text-gray-500" href="#pricing">Pricing</a>
<a className="block text-sm font-medium text-gray-500" href="#faq">FAQ</a>
<a className="inline-flex items-center px-5 py-2.5 bg-indigo-950 text-white text-sm font-medium rounded-full" href="#cta">Book a free call</a>
</div>
</nav>

<section className="relative overflow-hidden">
<div className="absolute inset-0 hero-gradient"></div>
<div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
<iconify-icon icon="solar:star-shine-linear" style={{color: '#6366f1', fontSize: '16px'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Helped over 100+ businesses</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-indigo-950 leading-tight max-w-3xl mx-auto mb-6">
                AI-Powered Growth for Modern Businesses Scale
            </h1>
<p className="text-base sm:text-lg text-gray-500 font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                We help startups and enterprises automate workflows, gain insights, and develop AI-driven products using advanced machine learning.
            </p>
<div className="flex flex-wrap items-center justify-center gap-4 mb-16">
<a className="inline-flex items-center px-6 py-3 bg-indigo-950 text-white text-sm font-medium rounded-full hover:bg-indigo-900 transition shadow-lg shadow-indigo-950/20" href="#cta">
                    Book a free call
                </a>
<a className="inline-flex items-center px-6 py-3 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition" href="#features">
                    How we work
                </a>
</div>
<div className="max-w-lg mx-auto">
<div className="relative">
<div className="absolute -inset-4 glass-glow rounded-3xl blur-2xl opacity-60"></div>
<div className="relative chat-card rounded-2xl border border-white/60 shadow-xl shadow-gray-200/50 p-5 text-left">
<div className="space-y-4 mb-5">
<div className="flex items-start gap-3 justify-end">
<div className="bg-gray-100 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
<p className="text-xs text-gray-700 leading-relaxed">My company doesn't have an in-house technical team. Can we still implement AI solutions?</p>
</div>
<div className="w-7 h-7 rounded-full bg-indigo-950 flex-shrink-0 flex items-center justify-center">
<span className="text-white text-xs font-medium">U</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" style={{color: 'white', fontSize: '12px'}} width="12"></iconify-icon>
</div>
<div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 max-w-xs border border-gray-100 shadow-sm">
<p className="text-xs text-gray-700 leading-relaxed">Absolutely. Our AI solutions are designed for non-technical teams. We handle the setup, training, and ongoing support.</p>
</div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="bg-gray-100 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
<p className="text-xs text-gray-700 leading-relaxed">So what does the onboarding process look like?</p>
</div>
<div className="w-7 h-7 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center">
<span className="text-white text-xs font-medium">S</span>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-4">
<div className="flex items-center gap-2 mb-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
<span className="text-xs font-medium text-gray-600">GPT 4.5</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '12px'}} width="12"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Ask anything...</span>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon icon="solar:add-circle-linear" style={{color: '#9ca3af', fontSize: '16px'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mt-3">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-100 transition">
<iconify-icon icon="solar:gallery-linear" style={{color: '#9ca3af', fontSize: '12px'}} width="12"></iconify-icon>
                                    Add photos &amp; files
                                </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-100 transition">
<iconify-icon icon="solar:star-shine-linear" style={{color: '#9ca3af', fontSize: '12px'}} width="12"></iconify-icon>
                                    Create custom workflows
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-gray-400 font-medium mb-8">Trusted by teams building</p>
<div className="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-800 rounded-lg"></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Notion</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 rounded-full"></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Startup</span>
</div>
<div className="flex items-center gap-2">
<div className="w-0 h-0" style={{borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '20px solid #1f2937'}}></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Vercel</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 rounded"></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Slack</span>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-gray-800 rounded-full"></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Discord</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 rounded-lg"></div>
<span className="text-base font-semibold text-gray-800 tracking-tight">Figma</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100" id="identity">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Our Identity</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 leading-tight max-w-xl">
                        Your Partner in AI <span className="text-gray-400">Solutions</span>
</h2>
<p className="text-base text-gray-500 max-w-md leading-relaxed">
                        We are an AI agency helping businesses adopt smart solutions with clarity and measurable results—minus the complexity.
                    </p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden">
<div className="identity-banner-bg absolute inset-0"></div>
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
<div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/3 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl"></div>
</div>
<div className="relative px-6 sm:px-10 pt-10 pb-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/60">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-1">1,500+</div>
<div className="text-sm text-gray-500">Teams</div>
</div>
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/60">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-1">40%</div>
<div className="text-sm text-gray-500">Faster deployment</div>
</div>
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/60">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-1">99.9%</div>
<div className="text-sm text-gray-500">Uptime</div>
</div>
</div>
<div className="overflow-hidden">
<div className="flex marquee-track w-max gap-3">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Real-Time Insights</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:user-heart-linear" style={{color: '#9333ea', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Personalized Experiences</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Automation</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:rocket-2-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Faster Innovation</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:tag-price-linear" style={{color: '#d97706', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Cost Effective</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#e11d48', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Virtual Assistance</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#0284c7', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Enterprise Security</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Real-Time Insights</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:user-heart-linear" style={{color: '#9333ea', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Personalized Experiences</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Automation</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:rocket-2-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Faster Innovation</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:tag-price-linear" style={{color: '#d97706', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Cost Effective</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#e11d48', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Virtual Assistance</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#0284c7', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Enterprise Security</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-gray-100" id="ai-services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:widget-2-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">AI Services</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 leading-tight mb-4">
                        AI Solutions for Real Business <span className="text-indigo-400">Challenges</span>
</h2>
<p className="text-base text-gray-500 leading-relaxed mb-10 lg:hidden">
                        We help businesses implement AI with clarity and confidence—focusing on automation, intelligence, and measurable outcomes, not hype.
                    </p>

<div className="space-y-0">
<div className="service-item border-t border-gray-200 py-5 px-4 rounded-lg" data-service="0" onclick="toggleService(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm text-gray-400 font-normal">(01)</span>
<span className="service-title text-base font-medium text-gray-600 transition-colors">AI Strategy &amp; Consulting</span>
</div>
<div className="service-arrow opacity-0 transition-opacity">
<iconify-icon icon="solar:arrow-right-linear" style={{color: '#6366f1', fontSize: '18px'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="service-item active border-t border-gray-200 py-5 px-4 rounded-lg" data-service="1" onclick="toggleService(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm text-indigo-400 font-normal service-number">(02)</span>
<span className="service-title text-base font-medium text-indigo-950 transition-colors">AI Automation &amp; Workflow</span>
</div>
<div className="service-arrow opacity-100 transition-opacity">
<iconify-icon icon="solar:arrow-right-linear" style={{color: '#6366f1', fontSize: '18px'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="service-item border-t border-gray-200 py-5 px-4 rounded-lg" data-service="2" onclick="toggleService(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm text-gray-400 font-normal">(03)</span>
<span className="service-title text-base font-medium text-gray-600 transition-colors">AI Agents &amp; Chatbots</span>
</div>
<div className="service-arrow opacity-0 transition-opacity">
<iconify-icon icon="solar:arrow-right-linear" style={{color: '#6366f1', fontSize: '18px'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="service-item border-t border-b border-gray-200 py-5 px-4 rounded-lg" data-service="3" onclick="toggleService(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm text-gray-400 font-normal">(04)</span>
<span className="service-title text-base font-medium text-gray-600 transition-colors">AI Analytics &amp; Decision Insights</span>
</div>
<div className="service-arrow opacity-0 transition-opacity">
<iconify-icon icon="solar:arrow-right-linear" style={{color: '#6366f1', fontSize: '18px'}} width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-start">
<p className="text-base text-gray-500 leading-relaxed mb-8 hidden lg:block">
                        We help businesses implement AI with clarity and confidence—focusing on automation, intelligence, and measurable outcomes, not hype.
                    </p>

<div id="serviceCards">

<div className="service-card hidden" data-card="0">
<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="grid sm:grid-cols-2">
<div className="p-6">
<div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: '#6366f1', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-5">We assess your operations and build a clear AI strategy aligned with your goals.</p>
<div className="space-y-2.5 mb-6">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">AI Readiness Assessment</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Roadmap Development</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">ROI Projections</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Technology Selection</span>
</div>
</div>
<a className="text-sm font-medium text-indigo-950 underline underline-offset-4 hover:text-indigo-700 transition" href="#cta">Book a free call</a>
</div>
<div className="h-full min-h-[220px] relative">
<img alt="Strategy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>

<div className="service-card" data-card="1">
<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="grid sm:grid-cols-2">
<div className="p-6">
<div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#9333ea', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-5">We identify how AI can enhance your business. Through audits and workflow analysis, we turn AI opportunities into actionable strategies.</p>
<div className="space-y-2.5 mb-6">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Fast AI Deployment</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">No-Code Friendly</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Seamless Integrations</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Scalable Architecture</span>
</div>
</div>
<a className="text-sm font-medium text-indigo-950 underline underline-offset-4 hover:text-indigo-700 transition" href="#cta">Book a free call</a>
</div>
<div className="h-full min-h-[220px] relative">
<img alt="Automation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>

<div className="service-card hidden" data-card="2">
<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="grid sm:grid-cols-2">
<div className="p-6">
<div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-5">Intelligent conversational agents that handle support, sales, and workflows around the clock.</p>
<div className="space-y-2.5 mb-6">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">24/7 Customer Support</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Multi-language Support</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Custom Training Data</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">CRM Integration</span>
</div>
</div>
<a className="text-sm font-medium text-indigo-950 underline underline-offset-4 hover:text-indigo-700 transition" href="#cta">Book a free call</a>
</div>
<div className="h-full min-h-[220px] relative">
<img alt="Chatbots" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>

<div className="service-card hidden" data-card="3">
<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
<div className="grid sm:grid-cols-2">
<div className="p-6">
<div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#d97706', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-5">Transform raw data into actionable intelligence with predictive models and real-time dashboards.</p>
<div className="space-y-2.5 mb-6">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Predictive Modeling</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Real-Time Dashboards</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Anomaly Detection</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs text-gray-600">Automated Reporting</span>
</div>
</div>
<a className="text-sm font-medium text-indigo-950 underline underline-offset-4 hover:text-indigo-700 transition" href="#cta">Book a free call</a>
</div>
<div className="h-full min-h-[220px] relative">
<img alt="Analytics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100" id="process">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:settings-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">How we work</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-4 leading-tight">
                    A Simple, Proven Process to<br className="hidden sm:block"/> Build AI <span className="italic text-indigo-400 font-medium">That Works</span>
</h2>
<p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                    We follow a structured yet flexible process to ensure every AI solution is aligned with your goals, easy to adopt, and built for long-term success.
                </p>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6">
<span className="text-sm font-semibold text-indigo-600 mb-3 block">01</span>
<h3 className="text-lg font-semibold tracking-tight text-indigo-950 mb-3">Discover &amp; Assess</h3>
<p className="text-sm text-gray-500 leading-relaxed">We analyze your business, workflows, and data to identify high-impact AI opportunities and quick wins.</p>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6">
<span className="text-sm font-semibold text-indigo-600 mb-3 block">02</span>
<h3 className="text-lg font-semibold tracking-tight text-indigo-950 mb-3">Design &amp; Strategize</h3>
<p className="text-sm text-gray-500 leading-relaxed">We create a clear AI roadmap, define use cases, and design solutions tailored to your needs.</p>
</div>
</div>

<div className="relative">
<div className="process-card-gradient rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden relative min-h-[380px]">

<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/60">Streamlined Processes</span>
<span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/60">Accelerated Development</span>
<span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/60">Budget-Friendly Solutions</span>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="text-center">
<div className="inline-flex items-center gap-2 mb-1">
<div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" style={{color: '#1e1b4b', fontSize: '16px'}} width="16"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">Aitherx</span>
</div>
</div>
</div>

<div className="mt-auto">
<p className="text-sm text-white/90 leading-relaxed text-center">We're a chill AI agency that helps businesses get on board with smart solutions easily and confidently—no hassle at all.</p>
</div>

<div className="absolute inset-0 opacity-20 pointer-events-none">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6">
<span className="text-sm font-semibold text-indigo-600 mb-3 block">03</span>
<h3 className="text-lg font-semibold tracking-tight text-indigo-950 mb-3">Build &amp; Deploy</h3>
<p className="text-sm text-gray-500 leading-relaxed">Our team develops, tests, and deploys production-ready AI systems with seamless integration.</p>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6">
<span className="text-sm font-semibold text-indigo-600 mb-3 block">04</span>
<h3 className="text-lg font-semibold tracking-tight text-indigo-950 mb-3">Optimize &amp; Scale</h3>
<p className="text-sm text-gray-500 leading-relaxed">We continuously monitor performance, improve accuracy, and scale AI as your business grows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">About us</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-6 leading-tight">
                        We're building the future of intelligent automation
                    </h2>
<p className="text-base text-gray-500 leading-relaxed mb-6">
                        Founded in 2022, Aitherx was born from a simple belief: every business deserves access to powerful AI, regardless of technical expertise. We bridge the gap between cutting-edge machine learning and real-world business challenges.
                    </p>
<p className="text-base text-gray-500 leading-relaxed mb-8">
                        Our team of AI researchers, engineers, and strategists works closely with each client to design solutions that are not just technically impressive — but genuinely transformative for day-to-day operations.
                    </p>
<div className="grid grid-cols-3 gap-6">
<div>
<div className="text-2xl font-semibold tracking-tight text-indigo-950">100+</div>
<div className="text-sm text-gray-500 mt-1">Projects delivered</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-indigo-950">40+</div>
<div className="text-sm text-gray-500 mt-1">Team members</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-indigo-950">98%</div>
<div className="text-sm text-gray-500 mt-1">Client retention</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 glass-glow rounded-3xl blur-2xl opacity-40"></div>
<div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:target-linear" style={{color: '#6366f1', fontSize: '20px'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Mission-Driven</h4>
<p className="text-sm text-gray-500 leading-relaxed">Democratizing AI so every business can thrive in the age of intelligence.</p>
</div>
</div>
<div className="border-t border-gray-100"></div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#9333ea', fontSize: '20px'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Privacy First</h4>
<p className="text-sm text-gray-500 leading-relaxed">Your data stays yours. We build with enterprise-grade security at every layer.</p>
</div>
</div>
<div className="border-t border-gray-100"></div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:hand-shake-linear" style={{color: '#d97706', fontSize: '20px'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Partner Mindset</h4>
<p className="text-sm text-gray-500 leading-relaxed">We don't just deliver projects — we become an extension of your team.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:widget-2-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Our Services</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-4">
                    Everything you need to scale with AI
                </h2>
<p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                    From strategy to deployment, we provide end-to-end AI solutions that drive measurable business outcomes.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition">
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: '#6366f1', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">AI Strategy &amp; Consulting</h3>
<p className="text-sm text-gray-500 leading-relaxed">We assess your operations, identify AI opportunities, and build a roadmap that aligns with your business goals.</p>
</div>
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-purple-100 transition">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#9333ea', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Custom Chatbots &amp; Assistants</h3>
<p className="text-sm text-gray-500 leading-relaxed">Build intelligent conversational agents that handle support, sales, and internal workflows 24/7.</p>
</div>
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#059669', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
<p className="text-sm text-gray-500 leading-relaxed">Leverage your data with ML models that forecast trends, detect anomalies, and power smarter decisions.</p>
</div>
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-amber-100 transition">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#d97706', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Process Automation</h3>
<p className="text-sm text-gray-500 leading-relaxed">Automate repetitive tasks and complex workflows with AI-powered systems that learn and adapt.</p>
</div>
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition">
<iconify-icon icon="solar:code-square-linear" style={{color: '#e11d48', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Custom AI Development</h3>
<p className="text-sm text-gray-500 leading-relaxed">End-to-end development of custom ML models, fine-tuned LLMs, and AI-native applications.</p>
</div>
<div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-50 transition-all duration-300">
<div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition">
<iconify-icon icon="solar:server-linear" style={{color: '#0284c7', fontSize: '22px'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">AI Infrastructure &amp; MLOps</h3>
<p className="text-sm text-gray-500 leading-relaxed">Scalable infrastructure setup, model monitoring, CI/CD pipelines, and production-grade deployments.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-gray-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:tag-price-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Simple pricing</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-4">
                    Plans that grow with you
                </h2>
<p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                    Transparent pricing with no hidden fees. Choose the plan that fits your needs, upgrade anytime.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
<div className="mb-6">
<h3 className="text-base font-semibold text-gray-900 mb-1">Starter</h3>
<p className="text-sm text-gray-500">Perfect for exploring AI capabilities</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-indigo-950">$2,499</span>
<span className="text-sm text-gray-500">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            1 AI project per month
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Basic chatbot setup
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Email support
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Monthly performance reports
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#d1d5db', fontSize: '18px'}} width="18"></iconify-icon>
                            Custom model training
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-5 py-3 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition" href="#cta">
                        Get started
                    </a>
</div>
<div className="pricing-popular rounded-2xl p-7 flex flex-col relative overflow-hidden shadow-xl shadow-indigo-950/20">
<div className="absolute top-4 right-4">
<span className="text-xs font-medium text-indigo-200 bg-indigo-900/50 px-3 py-1 rounded-full">Most popular</span>
</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-1">Professional</h3>
<p className="text-sm text-indigo-300">For teams ready to scale with AI</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">$5,999</span>
<span className="text-sm text-indigo-300">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a5b4fc', fontSize: '18px'}} width="18"></iconify-icon>
                            3 AI projects per month
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a5b4fc', fontSize: '18px'}} width="18"></iconify-icon>
                            Advanced chatbot + voice agents
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a5b4fc', fontSize: '18px'}} width="18"></iconify-icon>
                            Priority Slack support
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a5b4fc', fontSize: '18px'}} width="18"></iconify-icon>
                            Custom model fine-tuning
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a5b4fc', fontSize: '18px'}} width="18"></iconify-icon>
                            Weekly strategy calls
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-5 py-3 bg-white text-indigo-950 text-sm font-medium rounded-full hover:bg-indigo-50 transition" href="#cta">
                        Get started
                    </a>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
<div className="mb-6">
<h3 className="text-base font-semibold text-gray-900 mb-1">Enterprise</h3>
<p className="text-sm text-gray-500">For organizations with complex needs</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-indigo-950">Custom</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Unlimited AI projects
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Dedicated AI team
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            24/7 priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            Custom infrastructure
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '18px'}} width="18"></iconify-icon>
                            SLA &amp; compliance support
                        </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-5 py-3 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition" href="#cta">
                        Contact sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:question-circle-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">FAQ</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-indigo-950 mb-4">
                    Frequently asked questions
                </h2>
<p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                    Everything you need to know about working with us. Can't find what you're looking for? Reach out directly.
                </p>
</div>
<div className="space-y-3">
<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-gray-900">How long does it take to implement an AI solution?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '18px', transition: 'transform 0.3s'}} width="18"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5">
<p className="text-sm text-gray-500 leading-relaxed">Most projects take 4–8 weeks from kickoff to deployment. Simpler automations like chatbots can be live in as little as 2 weeks, while complex custom models may take 10–12 weeks. We'll give you a clear timeline during our initial consultation.</p>
</div>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-gray-900">Do we need technical expertise on our team?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '18px', transition: 'transform 0.3s'}} width="18"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5">
<p className="text-sm text-gray-500 leading-relaxed">Not at all. Our solutions are designed for non-technical teams. We handle all the technical heavy lifting — from development and deployment to maintenance. We also provide training so your team can confidently use and manage the tools we build.</p>
</div>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-gray-900">What industries do you specialize in?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '18px', transition: 'transform 0.3s'}} width="18"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5">
<p className="text-sm text-gray-500 leading-relaxed">We work across industries including SaaS, e-commerce, fintech, healthcare, and professional services. Our approach is problem-first — we adapt our AI expertise to your specific domain challenges rather than applying a one-size-fits-all solution.</p>
</div>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-gray-900">How is my data handled and protected?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '18px', transition: 'transform 0.3s'}} width="18"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5">
<p className="text-sm text-gray-500 leading-relaxed">Data security is our top priority. All data is encrypted in transit and at rest. We follow SOC 2 compliance standards and can sign NDAs and BAAs as needed. We never use your data to train models for other clients.</p>
</div>
</div>
<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-gray-900">Can I cancel or change my plan at any time?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', fontSize: '18px', transition: 'transform 0.3s'}} width="18"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5">
<p className="text-sm text-gray-500 leading-relaxed">Yes. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel at any time. We believe in earning your business every month through results, not lock-in.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-gray-100 relative overflow-hidden" id="cta">
<div className="absolute inset-0 cta-gradient"></div>
<div className="relative max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
<iconify-icon icon="solar:rocket-2-linear" style={{color: '#6366f1', fontSize: '14px'}} width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Get started today</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-indigo-950 mb-6 leading-tight">
                Ready to transform your business with AI?
            </h2>
<p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed mb-10">
                Book a free 30-minute strategy call with our team. We'll analyze your workflows and show you exactly how AI can drive results.
            </p>
<div className="flex flex-wrap items-center justify-center gap-4 mb-12">
<a className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-950 text-white text-sm font-medium rounded-full hover:bg-indigo-900 transition shadow-lg shadow-indigo-950/20" href="#">
<iconify-icon icon="solar:phone-calling-linear" style={{color: 'white', fontSize: '16px'}} width="16"></iconify-icon>
                    Book a free call
                </a>
<a className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition" href="#">
<iconify-icon icon="solar:letter-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
                    Send us an email
                </a>
</div>
<div className="flex items-center justify-center gap-6 text-sm text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '16px'}} width="16"></iconify-icon>
<span>No commitment</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '16px'}} width="16"></iconify-icon>
<span>Free consultation</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#059669', fontSize: '16px'}} width="16"></iconify-icon>
<span>Response in 24h</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" style={{color: 'white', fontSize: '14px'}} width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">Aitherx</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-4">AI-powered growth for modern businesses. From strategy to deployment.</p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition" href="#">
<iconify-icon icon="solar:chat-round-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition" href="#">
<iconify-icon icon="solar:global-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition" href="#">
<iconify-icon icon="solar:letter-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#about">About</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Careers</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Blog</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#features">AI Consulting</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#features">Custom Chatbots</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#features">Predictive Analytics</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#features">Automation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Terms of Service</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">Cookie Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-700 transition" href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-400">© 2025 Aitherx. All rights reserved.</p>
<p className="text-sm text-gray-400">Built with intelligence.</p>
</div>
</div>
</footer>


    </>
  );
}
