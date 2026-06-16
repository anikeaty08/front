import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
950: '#030712',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



            (function () {
              const root = document.getElementById('pricing');
              if (!root) return;

              let state = { plan: 'pro', billing: 'monthly' };

              const plans = {
                starter: {
                  name: 'Starter',
                  tagline: 'Great for small teams launching their first projects.',
                  priceMonthly: 29,
                  priceAnnual: 290,
                  cta: { label: 'Get Started', href: '#join' },
                  features: ['5 ACTIVE PROJECTS', '10GB STORAGE', 'COMMUNITY SUPPORT', 'FULL VERSION CONTROL']
                },
                pro: {
                  name: 'Pro',
                  tagline: 'Built for growing teams and professional workflows.',
                  priceMonthly: 99,
                  priceAnnual: 990,
                  cta: { label: 'Upgrade to Pro', href: '#join' },
                  features: ['UNLIMITED PROJECTS', '100GB STORAGE', 'PRIORITY EMAIL & CHAT', 'ANALYTICS DASHBOARD', 'ROLES & PERMISSIONS']
                },
                enterprise: {
                  name: 'Enterprise',
                  tagline: 'Custom, secure, and ready for scale.',
                  priceMonthly: null,
                  priceAnnual: null,
                  cta: { label: 'Contact Sales', href: '#contact' },
                  features: ['UNLIMITED PROJECTS', 'DEDICATED SUCCESS MANAGER', 'SSO & SAML', 'CUSTOM SECURITY', 'SLA SUPPORT']
                }
              };

              const els = {
                tabs: root.querySelectorAll('.billing-tab'),
                planButtons: root.querySelectorAll('.plan-select-btn'),
                planName: root.querySelector('#planName'),
                planPrice: root.querySelector('#planPrice'),
                planPriceSuffix: root.querySelector('#planPriceSuffix'),
                planTagline: root.querySelector('#planTagline'),
                featureList: root.querySelector('#featureList'),
                ctaBtn: root.querySelector('#ctaBtn'),
                savePill: root.querySelector('#savePill')
              };

              const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-white mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg>';

              function render() {
                const cfg = plans[state.plan];
                els.planName.textContent = cfg.name;
                els.planTagline.textContent = cfg.tagline.toUpperCase();
                const price = (state.billing === 'monthly') ? cfg.priceMonthly : cfg.priceAnnual;
                
                if (price === null) {
                    els.planPrice.textContent = 'Custom';
                    els.planPriceSuffix.textContent = '';
                } else {
                    els.planPrice.textContent = `$${price.toLocaleString()}`;
                    els.planPriceSuffix.textContent = state.billing === 'monthly' ? '/mo' : '/yr';
                }

                els.ctaBtn.textContent = cfg.cta.label;
                els.featureList.innerHTML = cfg.features.map(f => `<li class="flex items-start gap-3">${checkSVG}<span>${f}</span></li>`).join('');
                els.savePill.style.display = (state.billing === 'annual' && price !== null) ? 'inline-flex' : 'none';

                els.planButtons.forEach(btn => {
                  const isActive = btn.getAttribute('data-plan-select') === state.plan;
                  btn.classList.toggle('bg-white/[0.04]', isActive);
                  btn.classList.toggle('border-white/20', isActive);
                  btn.classList.toggle('border-white/10', !isActive);
                  
                  const icon = btn.querySelector('span');
                  if(icon) {
                      icon.classList.toggle('text-white', isActive);
                      icon.classList.toggle('bg-white/10', isActive);
                      icon.classList.toggle('text-neutral-400', !isActive);
                      icon.classList.toggle('bg-white/5', !isActive);
                  }
                });

                els.tabs.forEach(tab => {
                  const active = tab.getAttribute('data-billing') === state.billing;
                  tab.classList.toggle('text-white', active);
                  tab.classList.toggle('bg-white/[0.08]', active);
                  tab.classList.toggle('ring-white/20', active);
                  tab.classList.toggle('text-neutral-400', !active);
                });
              }

              els.planButtons.forEach(btn => btn.addEventListener('click', () => { state.plan = btn.getAttribute('data-plan-select'); render(); }));
              els.tabs.forEach(tab => tab.addEventListener('click', () => { state.billing = tab.getAttribute('data-billing'); render(); }));
              render();
            })();
            


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden lg:block w-[280px] h-full relative flex-shrink-0 overflow-hidden border-r border-neutral-100 bg-neutral-950">
<div className="absolute inset-0 z-0">
<img alt="texture" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-neutral-950/0 via-neutral-950/20 to-neutral-950 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="absolute top-8 left-8 z-20 text-white">
<span className="text-xs font-medium tracking-widest uppercase opacity-80">Novaxenia</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-full z-10 flex items-end justify-center pb-10 pointer-events-none">
<h1 className="text-vertical text-9xl leading-none font-medium tracking-tighter select-none whitespace-nowrap text-white/10">
                ©2025-NOVA
            </h1>
</div>
</aside>

<main className="flex-1 flex flex-col relative h-full overflow-y-auto scroll-smooth bg-white">

<nav className="w-full px-6 md:px-12 py-6 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-transparent transition-all duration-300">
<div className="lg:hidden mr-auto font-medium uppercase tracking-widest text-xs">Novaxenia</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider" href="#">Projects</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider" href="#">About</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider" href="#">Contact</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider" href="#pricing">Pricing</a>
</div>
<div>
<button className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium px-4 py-2 rounded-full transition-all border border-neutral-200/50">
<span>Book a call</span>
<svg className="lucide lucide-phone w-3 h-3 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
</div>
</nav>

<div className="flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full pt-20 pb-24">
<div className="flex items-center gap-2 mb-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-500">Available for work</span>
</div>
<div className="flex items-center gap-4 mb-8">
<div className="h-12 w-32 rounded-full overflow-hidden relative shadow-sm ring-1 ring-neutral-200 group">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10">
<span className="text-white font-medium text-xs tracking-tight">NOVA</span>
</div>
</div>
<div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mb-12">
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-neutral-900">
                    You Bring The Idea.
                </h1>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-neutral-300 mt-2 lg:pl-32">
                    We'll Bring It To Life!
                </h1>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
<button className="group relative bg-neutral-900 hover:bg-neutral-800 text-white pl-6 pr-4 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
<span className="text-sm font-medium">Start a project</span>
<span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 text-white stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<p className="text-base text-neutral-500 max-w-md leading-relaxed">
                    We create thoughtful designs that not only look beautiful but also connect with your audience.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-7 h-7 rounded-full border-2 border-white bg-neutral-200"></div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-neutral-300"></div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-neutral-400"></div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-500 gap-0.5">
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide mt-0.5">Rated 4.9 by 500+ clients</span>
</div>
</div>
</div>

<section className="w-full bg-neutral-50/50 border-t border-neutral-100 relative py-24 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 bg-white border border-neutral-200 shadow-sm rounded-full pl-1.5 pr-3 py-1 mb-6">
<div className="bg-violet-50 text-violet-600 p-0.5 rounded-full">
<svg className="lucide lucide-trending-up w-3 h-3 stroke-[2]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-[10px] font-semibold text-neutral-600 uppercase tracking-wider">Growth Stats</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">Impact by the numbers</h2>
<p className="text-neutral-500 max-w-lg mx-auto text-base">We don't just design; we drive results. Here is the impact we have created for our partners globally.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100/50 hover:border-neutral-200 transition-all flex flex-col items-center text-center animate-float-slow">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
<svg className="lucide lucide-clock w-5 h-5 text-orange-600 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-4xl font-medium tracking-tighter text-neutral-900 mb-2">10k+</span>
<span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">Hours Saved</span>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-neutral-100/50 hover:border-neutral-200 transition-all flex flex-col items-center text-center md:-translate-y-6 animate-float-medium z-10 relative">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
<svg className="lucide lucide-folder-check w-5 h-5 text-blue-600 stroke-[1.5]" data-lucide="folder-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path><path d="m9 13 2 2 4-4"></path></svg>
</div>
<span className="text-4xl font-medium tracking-tighter text-neutral-900 mb-2">200+</span>
<span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">Projects Launched</span>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100/50 hover:border-neutral-200 transition-all flex flex-col items-center text-center animate-float-fast">
<div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-6">
<svg className="lucide lucide-users w-5 h-5 text-green-600 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-4xl font-medium tracking-tighter text-neutral-900 mb-2">98%</span>
<span className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">Client Retention</span>
</div>
</div>
<div className="flex items-center gap-4 mb-10 opacity-60">
<div className="h-px bg-neutral-200 flex-1"></div>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Trusted by Industry Leaders</span>
<div className="h-px bg-neutral-200 flex-1"></div>
</div>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
<div className="flex items-center gap-2 group cursor-default select-none">
<div className="w-4 h-4 bg-neutral-900 rounded-sm transform rotate-45 group-hover:bg-blue-600 transition-colors"></div>
<span className="text-base font-semibold tracking-tight text-neutral-900">ACME</span>
</div>
<div className="flex items-center gap-2 group cursor-default select-none">
<svg className="lucide lucide-triangle w-4 h-4 text-neutral-900 fill-current group-hover:text-emerald-600 transition-colors" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<span className="text-base font-semibold tracking-tight text-neutral-900">VERTEXT</span>
</div>
<div className="flex items-center gap-2 group cursor-default select-none">
<svg className="lucide lucide-circle w-4 h-4 text-neutral-900 group-hover:text-purple-600 transition-colors stroke-[2.5]" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-base font-semibold tracking-tight text-neutral-900">SPHERE</span>
</div>
<div className="flex items-center gap-2 group cursor-default select-none">
<svg className="lucide lucide-box w-4 h-4 text-neutral-900 group-hover:text-orange-600 transition-colors stroke-[2.5]" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-base font-semibold tracking-tight text-neutral-900">BOLD</span>
</div>
<div className="flex items-center gap-2 group cursor-default select-none">
<svg className="lucide lucide-droplet w-4 h-4 text-neutral-900 group-hover:text-cyan-600 transition-colors fill-current" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<span className="text-base font-semibold tracking-tight text-neutral-900">FLUID</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">

<div className="flex flex-col justify-between">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-900 leading-[1.05] mb-12">
                            We deal with the biggest problems you hate
                        </h2>
<div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-lg mt-auto">
<div className="flex items-center gap-4 mb-5">
<img alt="Miles Penn" className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-neutral-900 text-sm tracking-tight">Miles Penn</h4>
<div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5">
<span>Founder at </span>
<span className="bg-[#F26522] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm flex items-center justify-center leading-none h-4 w-4">Y</span>
<span>(S14)</span>
</div>
</div>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                                Incredible deal and awesome service. We've been using them for a while and just doubled our capacity, because they're reliable, good, and easy to work with, with no need to manage someone.
                            </p>
</div>
</div>

<div className="bg-neutral-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
<ul className="space-y-0 relative z-10">
<li className="flex items-start gap-5 py-6 border-b border-white/10">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">Forget about <span className="text-white font-medium">unreliable freelancers</span></span>
</li>
<li className="flex items-start gap-5 py-6 border-b border-white/10">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">No more <span className="text-white font-medium">slow expensive agencies</span></span>
</li>
<li className="flex items-start gap-5 py-6 border-b border-white/10">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">Stop <span className="text-white font-medium">dealing with hiring &amp; management hassle</span></span>
</li>
<li className="flex items-start gap-5 py-6 border-b border-white/10">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">Say bye to <span className="text-white font-medium">hidden fees</span></span>
</li>
<li className="flex items-start gap-5 py-6 border-b border-white/10">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">Skip <span className="text-white font-medium">endless portfolio and CV scrolling</span></span>
</li>
<li className="flex items-start gap-5 py-6">
<svg className="lucide lucide-circle-arrow-right w-5 h-5 text-white flex-shrink-0 mt-1 fill-white/10" data-lucide="circle-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
<span className="text-lg text-neutral-400">Done with <span className="text-white font-medium">automated support with no real help</span></span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 px-4 md:px-0">
<div>
<div className="text-6xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-4">70%</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-[200px]">lower cost vs freelancers, agencies, and in-house teams</p>
</div>
<div>
<div className="text-6xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-4">40%</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-[200px]">faster turnaround on every update</p>
</div>
<div>
<div className="text-6xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-4">60%</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-[220px]">fewer revisions — powered by AI and senior-level talent</p>
</div>
</div>

<div className="relative w-full rounded-[2.5rem] overflow-hidden bg-neutral-50 min-h-[500px] flex items-center">
<div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 h-full z-0">
<img alt="landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&amp;w=2834&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent"></div>
</div>
<div className="relative z-10 p-10 md:p-20 max-w-3xl">
<h3 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[1] mb-10">
                            Get matched with <span className="text-neutral-300">copywriters</span> now, without headache
                        </h3>
<div className="bg-white p-2 pl-6 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col sm:flex-row gap-2 max-w-md w-full">
<input className="flex-1 bg-transparent outline-none text-sm text-neutral-900 placeholder:text-neutral-400 py-3 sm:py-0" placeholder="Email address" type="email"/>
<button className="bg-neutral-950 hover:bg-neutral-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                                Get started
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-100 rounded-full px-3 py-1 mb-6">
<svg className="lucide lucide-settings-2 w-3 h-3 text-neutral-500 stroke-[1.5]" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
<span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">Services</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-900 mb-4">Our AI-Driven Services</h2>
<p className="text-lg text-neutral-500 max-w-xl">Leverage AI features that boost performance to your business.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 bg-neutral-50/50 rounded-3xl p-8 border border-neutral-100 hover:border-neutral-200 transition-all flex flex-col justify-between h-[420px] relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="relative w-full h-full flex items-center justify-center -mt-10">
<div className="relative w-48 h-48">
<div className="absolute top-0 left-4 w-14 h-14 bg-white rounded-xl shadow-lg border border-neutral-100 flex items-center justify-center z-20">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-neutral-900 stroke-[1.5]" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="absolute top-14 left-16 w-16 h-16 border-t border-r border-dashed border-neutral-300 rounded-tr-3xl"></div>
<div className="absolute top-12 left-28 w-3 h-3 bg-neutral-300 rounded-full z-10 shadow-sm ring-2 ring-white"></div>
<div className="absolute top-24 left-24 w-12 h-12 border-b border-l border-dashed border-neutral-300 rounded-bl-3xl"></div>
<div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg border border-neutral-100 flex items-center justify-center z-20">
<svg className="lucide lucide-layers w-7 h-7 text-neutral-900 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-neutral-900 mb-2">AI Strategy Consulting</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Expert guidance to implement AI solutions that drive growth.</p>
</div>
</div>

<div className="lg:col-span-2 bg-neutral-50/50 rounded-3xl p-8 border border-neutral-100 hover:border-neutral-200 transition-all flex flex-col justify-between h-[420px] relative overflow-hidden group">
<div className="relative w-full h-full bg-white rounded-2xl mb-6 p-8 flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
<div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-neutral-100 p-2 relative">
<div className="bg-neutral-50 rounded-md p-4 mb-2 border border-neutral-100 min-h-[80px]">
<div className="h-1.5 w-3/4 bg-neutral-200 rounded-full mb-2"></div>
<div className="h-1.5 w-1/2 bg-neutral-200 rounded-full"></div>
</div>
<div className="bg-white rounded-md border border-neutral-100 shadow-lg absolute top-12 left-4 right-4 z-20 p-1 flex flex-col gap-0.5">
<div className="px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded cursor-pointer transition-colors">Continue writing</div>
<div className="px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded cursor-pointer transition-colors">Fix spelling</div>
<div className="px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded cursor-pointer transition-colors">Explain in detail</div>
</div>
</div>
<div className="absolute top-8 right-10 bg-neutral-900 text-white px-4 py-2 rounded-full shadow-lg text-xs font-medium z-30 hover:scale-105 transition-transform cursor-default">Generate</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-neutral-900 mb-2">Content Generation</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-lg">Seamless content creation solutions generating captivating, high-quality content aligned with your brand.</p>
</div>
</div>

<div className="lg:col-span-2 bg-neutral-50/50 rounded-3xl p-8 border border-neutral-100 hover:border-neutral-200 transition-all flex flex-col justify-between h-[420px] relative overflow-hidden group">
<div className="relative w-full h-full flex flex-col items-center justify-center px-4 -mt-6">
<div className="w-full max-w-lg space-y-4">
<div className="flex items-end justify-end gap-2 translate-x-4">
<div className="bg-white border border-neutral-100 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm text-xs text-neutral-600 max-w-[240px]">Set up a Zoom call with Emily at 10:00 AM on Wednesday.</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 border border-white shadow-sm"><svg className="lucide lucide-user w-3.5 h-3.5 text-white stroke-[2]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex items-end justify-start gap-2 -translate-x-4">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center flex-shrink-0 shadow-sm"><svg className="lucide lucide-sparkles w-3.5 h-3.5 text-neutral-900 fill-neutral-900" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></div>
<div className="bg-neutral-100 border border-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3 text-xs text-neutral-600 max-w-[240px] shadow-sm">Zoom call set for 10:00 AM Wednesday. <span className="underline decoration-neutral-300 decoration-1 underline-offset-2 hover:text-neutral-900 cursor-pointer">View</span></div>
</div>
<div className="mt-6 mx-auto w-full max-w-sm">
<div className="bg-white border border-neutral-100 rounded-full h-10 flex items-center px-4 shadow-sm">
<div className="w-0.5 h-4 bg-neutral-400 animate-pulse mr-3"></div>
<span className="text-neutral-300 text-xs font-light">Type a message...</span>
</div>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-neutral-900 mb-2">AI-Powered Chatbots</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-lg">Advanced cognitive chatbots to elevate customer support and automate operations.</p>
</div>
</div>

<div className="lg:col-span-1 bg-neutral-50/50 rounded-3xl p-8 border border-neutral-100 hover:border-neutral-200 transition-all flex flex-col justify-between h-[420px] relative overflow-hidden group">
<div className="relative w-full h-full flex items-center justify-center -mt-8">
<div className="relative w-48 h-48 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-neutral-100 flex items-center justify-center z-20 relative">
<svg className="lucide lucide-layers-2 w-8 h-8 text-neutral-900 stroke-[1.5]" data-lucide="layers-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"></path><path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"></path></svg>
</div>
<div className="absolute top-2 left-2 w-10 h-10 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center animate-float-slow">
<svg className="lucide lucide-bot w-4 h-4 text-neutral-500 stroke-[1.5]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="absolute top-6 -right-2 w-9 h-9 bg-white rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center animate-float-medium">
<svg className="lucide lucide-github w-4 h-4 text-neutral-500 stroke-[1.5]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div className="absolute bottom-6 left-0 w-10 h-10 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center animate-float-fast">
<svg className="lucide lucide-gamepad-2 w-5 h-5 text-neutral-500 stroke-[1.5]" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<div className="absolute bottom-2 right-4 w-9 h-9 bg-white rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center animate-float-medium">
<svg className="lucide lucide-hard-drive w-4 h-4 text-neutral-500 stroke-[1.5]" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-neutral-900 mb-2">Automated Workflows</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Automate workflows to streamline tasks and save time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white relative border-t border-neutral-100">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex flex-col gap-12">
<div className="flex flex-col items-start justify-center min-h-[300px] mb-8 lg:mb-0">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 leading-[0.95] mb-6">
                            How We Bring  <span className="text-neutral-400">Ideas To Life</span>
</h2>
<p className="text-base text-neutral-500 mb-8 max-w-sm leading-relaxed">
                            Our process is a collaborative journey—designed to transform your vision into a stunning digital experience.
                        </p>
<button className="bg-neutral-900 hover:bg-neutral-800 text-white pl-6 pr-4 py-3 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg transition-all group">
<span>Schedule a call</span>
<span className="bg-white/20 rounded-full p-0.5 group-hover:bg-white/30 transition-colors">
<svg className="lucide lucide-chevron-right w-3 h-3 stroke-[2]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
</div>
<div className="bg-neutral-950 text-white p-10 md:p-12 rounded-[2rem] flex flex-col justify-between h-[420px] shadow-2xl relative group hover:-translate-y-1 transition-transform duration-500">
<span className="text-6xl font-light tracking-tighter text-white/90">01 </span>
<div className="flex items-center gap-6 w-full my-auto">
<div className="h-px bg-neutral-800 flex-1 group-hover:bg-neutral-700 transition-colors"></div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Discover</h3>
</div>
<p className="text-base text-neutral-400 leading-relaxed max-w-sm">We dive deep into your brand, audience, and goals to lay a strong strategic foundation.</p>
</div>
<div className="bg-neutral-50 text-neutral-900 p-10 md:p-12 rounded-[2rem] flex flex-col justify-between h-[420px] border border-neutral-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-500">
<span className="text-6xl font-light tracking-tighter text-neutral-300">03 </span>
<div className="flex items-center gap-6 w-full my-auto">
<div className="h-px bg-neutral-200 flex-1 group-hover:bg-neutral-300 transition-colors"></div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Develop</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed max-w-sm">We bring designs to life through clean, responsive, and high-performance development.</p>
</div>
</div>
<div className="flex flex-col gap-12 lg:pt-32">
<div className="bg-neutral-50 text-neutral-900 p-10 md:p-12 rounded-[2rem] flex flex-col justify-between h-[420px] border border-neutral-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-500">
<span className="text-6xl font-light tracking-tighter text-neutral-300">02 </span>
<div className="flex items-center gap-6 w-full my-auto">
<div className="h-px bg-neutral-200 flex-1 group-hover:bg-neutral-300 transition-colors"></div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Design</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed max-w-sm">We create bold, cohesive visuals that reflect your identity and vision with clarity.</p>
</div>
<div className="bg-neutral-50 text-neutral-900 p-10 md:p-12 rounded-[2rem] flex flex-col justify-between h-[420px] border border-neutral-200/60 shadow-sm relative group hover:-translate-y-1 transition-transform duration-500">
<span className="text-6xl font-light tracking-tighter text-neutral-300">04 </span>
<div className="flex items-center gap-6 w-full my-auto">
<div className="h-px bg-neutral-200 flex-1 group-hover:bg-neutral-300 transition-colors"></div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Deliver</h3>
</div>
<p className="text-base text-neutral-500 leading-relaxed max-w-sm">We refine, test, and launch with precision, supporting you post-launch with optimization.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 py-24 animate-on-scroll z-10 max-w-7xl mx-auto relative" id="pricing">
<div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10 bg-neutral-950 backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
<div className="p-10 flex flex-col">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Simple pricing <span className="block text-neutral-500">that grows with you</span></h2>
<p className="mt-4 text-base text-neutral-400 max-w-lg">Pick a plan today and switch anytime. Clear value across Starter, Pro, and Enterprise.</p>
<div className="mt-8">
<div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.05] p-1 ring-1 ring-white/10">
<button className="billing-tab px-3 py-1.5 text-[10px] font-semibold rounded-lg uppercase tracking-wide text-white ring-1 ring-white/20 bg-white/[0.08] transition" data-billing="monthly">Monthly</button>
<button className="billing-tab px-3 py-1.5 text-[10px] font-semibold rounded-lg uppercase tracking-wide text-neutral-400 hover:text-white transition" data-billing="annual">Annually</button>
</div>
</div>
<div className="mt-10 space-y-2">
<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-xl ring-0 p-5 items-center justify-between border border-white/10" data-plan-select="starter">
<div>
<p className="text-white text-lg tracking-tight font-medium">Starter</p>
<p className="text-xs tracking-wide text-neutral-400 mt-1 uppercase">Launch fast, learn faster.</p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-400 group-hover:bg-white/10 transition"><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-xl ring-0 p-5 items-center justify-between border bg-white/[0.04] border-white/20" data-plan-select="pro">
<div>
<p className="text-white text-lg tracking-tight font-medium">Pro</p>
<p className="text-xs tracking-wide text-neutral-400 mt-1 uppercase">Grow with confidence.</p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-1 ring-white/10 text-white group-hover:bg-white/10 transition bg-white/10"><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
<button className="plan-select-btn group hover:bg-white/[0.07] transition flex text-left bg-gradient-to-br from-white/10 to-white/0 w-full rounded-xl ring-0 p-5 items-center justify-between border border-white/10" data-plan-select="enterprise">
<div>
<p className="text-white text-lg tracking-tight font-medium">Enterprise</p>
<p className="text-xs tracking-wide text-neutral-400 mt-1 uppercase">Tailored for scale &amp; security.</p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-400 group-hover:bg-white/10 transition"><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
</div>
</div>
<div className="flex flex-col p-8 bg-gradient-to-br from-white/0 via-white/[0.02] to-white/0 m-6 rounded-2xl relative border border-white/5 gap-6">
<div className="flex items-center justify-between">
<h3 className="text-2xl text-white font-medium tracking-tight" id="planName">Pro</h3>
<span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-green-400 uppercase" id="savePill" style={{display: 'none'}}>Save 20%</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tighter" id="planPrice">$99</span>
<span className="text-neutral-400 text-sm" id="planPriceSuffix">/mo</span>
</div>
<p className="text-xs tracking-wide text-neutral-400 uppercase" id="planTagline">BUILT FOR GROWING TEAMS AND PROFESSIONAL WORKFLOWS.</p>
<div className="bg-white/[0.03] rounded-xl p-6 border border-white/5">
<ul className="space-y-3 text-sm text-neutral-300" id="featureList"><li className="flex items-start gap-3"><svg className="lucide lucide-check text-white mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>UNLIMITED PROJECTS</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check text-white mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>100GB STORAGE</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check text-white mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>PRIORITY EMAIL &amp; CHAT</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check text-white mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>ANALYTICS DASHBOARD</span></li><li className="flex items-start gap-3"><svg className="lucide lucide-check text-white mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span>ROLES &amp; PERMISSIONS</span></li></ul>
<div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-500 text-center">
                                Have special requirements? <a className="underline hover:text-white transition-colors" href="#">Talk to sales</a>.
                            </div>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white text-neutral-900 hover:bg-neutral-200 h-11 px-5 text-sm font-medium transition-all" href="#join" id="ctaBtn">Upgrade to Pro</a>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 md:px-12 bg-neutral-50/50 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-3 mb-6">
<div className="bg-white border border-neutral-200 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
<img alt="Google" className="w-3.5 h-3.5" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
<span className="text-[10px] font-semibold text-neutral-700">4.9</span>
</div>
<div className="bg-white border border-neutral-200 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
<svg className="lucide lucide-star w-3.5 h-3.5 text-green-500 fill-current stroke-green-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[10px] font-semibold text-neutral-700">4.8</span>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-900 mb-8">Trusted by 4,000+ companies</h2>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale mix-blend-multiply select-none">
<span className="font-bold text-xl font-serif">GENESIS</span>
<span className="font-bold text-xl">udemy</span>
<span className="font-bold text-xl tracking-tighter">EY</span>
<div className="flex items-center gap-1"><div className="w-5 h-5 bg-neutral-800 rounded"></div><span className="font-bold text-lg">PandaDoc</span></div>
<div className="flex items-center gap-1"><div className="w-5 h-5 bg-orange-600 rounded"></div><span className="font-bold text-lg">Combinator</span></div>
<span className="font-bold text-xl font-serif italic">CocaCola</span>
<span className="font-bold text-xl font-serif">Disney</span>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Ng Yi Ying" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Ng Yi Ying</h4>
<p className="text-xs text-neutral-500">Founder at <span className="text-neutral-900 font-medium">AllSome</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">We are subscribing Pro and have only good words for the awesome works! Fast matching, outstanding communication, quality works and cost saving! We highly recommend Novaxenia and enjoy peace of mind!</p>
</div>
<div className="break-inside-avoid relative group rounded-[2rem] overflow-hidden aspect-[3/4] shadow-md border border-neutral-900">
<img alt="Maxime" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
<div className="absolute top-6 left-6 flex items-center gap-3 z-10">
<img alt="Avatar" className="w-10 h-10 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-sm text-white tracking-tight">Maxime Allouch</h4>
<p className="text-xs text-white/80">Co-Founder at <span className="text-white">Vera Health</span></p>
</div>
</div>
<button className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:scale-105 transition-transform z-10 group-hover:bg-white/30">
<svg className="lucide lucide-play w-5 h-5 text-white fill-current ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Max Ahrens" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Max Ahrens</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CEO at <span className="text-neutral-900 font-medium">Maihem</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">They've done some really great yet cost effective design work for us. At first, we've been sceptical, but once we started using Novaxenia the only thing we were annoyed about is that we hadn't started sooner.</p>
</div>

<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Rakesh" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Rakesh Goyal</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CEO at <span className="text-neutral-900 font-medium">Velt</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Love Novaxenia - When we started out we got all our design and landing page work done from them. They are fast and high quality!</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Ben Warren" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Ben Warren</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CTO at <span className="text-neutral-900 font-medium">Snowpilot</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">We used Novaxenia for our logo design and have received lots of unprompted compliments. Highly recommended!</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Erick" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Erick Enriquez</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CEO at <span className="text-neutral-900 font-medium">InQuery</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Novaxenia really quickly matched me to a designer for what I thought would be a short engagement but who we ended up keeping around for a full month. She was awesome to work with and highly responsive.</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Ivan" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Ivan Tsybaev</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CEO at <span className="text-neutral-900 font-medium">Careerist</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Amazing service for such a good price! Especially with this offer. We've been their customers for some time now and are happy. They are reliable and hassle-free to work with.</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Sander" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Sander Andersen</h4>
<p className="text-xs text-neutral-500">Co-founder at <span className="text-neutral-900 font-medium">Entirebody</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">What I love about Novaxenia is that we can collaborate with a really good designer. And the only thing that might make us cancel the subscription is hiring an in-house team.</p>
</div>

<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Nik" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Nik Kotov</h4>
<p className="text-xs text-neutral-500">Founder &amp; CEO at <span className="text-neutral-900 font-medium">Atomized</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Recently engaged Novaxenia for a side project I'm working on. Saw results literally on day 1. Overall, very impressed and will definitely continue to use their services for my graphic design needs!</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Kathryn" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Kathryn C.</h4>
<p className="text-xs text-neutral-500">Founder at <span className="text-neutral-900 font-medium">Anja Health</span></p>
</div>
</div>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden group/video cursor-pointer">
<img alt="Video Thumb" className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
<svg className="lucide lucide-play w-5 h-5 text-white fill-current ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="Tal Feld" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">Tal Feld</h4>
<p className="text-xs text-neutral-500">Co-Founder &amp; CEO at <span className="text-neutral-900 font-medium">Echo</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">We did the 1 to 1 plan, exceeded our expectations. Amazing support. Highly recommend.</p>
</div>
<div className="break-inside-avoid bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<img alt="David" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-base text-neutral-900 tracking-tight">David Head</h4>
<p className="text-xs text-neutral-500">Founder &amp; CEO at <span className="text-neutral-900 font-medium">Sixty</span></p>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-normal">Only a week into using Novaxenia and they already have an entire brand identity done that my team and I are super happy with. Normally they say you can't get speed, quality, and cost all together but somehow Novaxenia's pulled it off here.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-t border-neutral-100" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">Frequently asked questions</h2>
<p className="text-base text-neutral-500">Everything you need to know about the product and billing.</p>
</div>
<div className="space-y-0">
<details className="group py-6 border-b border-neutral-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-neutral-900 text-lg hover:text-neutral-600 transition-colors">
<span>How fast will I receive my designs?</span>
<span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"><svg className="lucide lucide-plus w-5 h-5 text-neutral-400 stroke-[1.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div className="mt-4 text-neutral-500 leading-relaxed text-sm pr-12"><p>On average, most requests are completed in just two days or less. Complex requests are broken down into milestones.</p></div>
</details>
<details className="group py-6 border-b border-neutral-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-neutral-900 text-lg hover:text-neutral-600 transition-colors">
<span>Is there a limit to requests?</span>
<span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"><svg className="lucide lucide-plus w-5 h-5 text-neutral-400 stroke-[1.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div className="mt-4 text-neutral-500 leading-relaxed text-sm pr-12"><p>Once subscribed, you can add unlimited requests to your queue, delivered one by one.</p></div>
</details>
<details className="group py-6 border-b border-neutral-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-neutral-900 text-lg hover:text-neutral-600 transition-colors">
<span>Can I pause my subscription?</span>
<span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"><svg className="lucide lucide-plus w-5 h-5 text-neutral-400 stroke-[1.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div className="mt-4 text-neutral-500 leading-relaxed text-sm pr-12"><p>Yes, pause anytime and return when needed. No hidden fees.</p></div>
</details>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<div className="bg-neutral-950 rounded-[2.5rem] px-6 py-20 md:py-24 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none -mt-40"></div>
<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8 leading-[0.95]">Let's build something  <span className="text-neutral-500">extraordinary.</span></h2>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group bg-white text-neutral-900 h-12 px-8 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#pricing">
<span>See our plans</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="h-12 px-8 rounded-full font-medium text-sm text-white border border-neutral-800 hover:bg-white/5 transition-colors">Book a demo</button>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
