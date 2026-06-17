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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
electric: {
400: '#60A5FA',
500: '#3B82F6',
600: '#2563EB',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    (function () {
                        const root = document.getElementById('pricing');
                        if (!root) return;

                        const state = { plan: 'starter', billing: 'monthly' };

                        const plans = {
                            starter: {
                                name: 'Starter',
                                tagline: 'FOR SMALL TEAMS LAUNCHING WORKFLOWS',
                                priceMonthly: 29,
                                priceAnnual: 290,
                                cta: { label: 'Start Building', href: '#join' },
                                features: [
                                    'Up to 5 active projects',
                                    '1,000 automation runs/mo',
                                    'Standard integrations',
                                    '7-day run history',
                                    'Community support'
                                ]
                            },
                            pro: {
                                name: 'Pro',
                                tagline: 'FOR GROWING TEAMS AND PRODUCTION',
                                priceMonthly: 99,
                                priceAnnual: 990,
                                cta: { label: 'Upgrade to Pro', href: '#join' },
                                features: [
                                    'Unlimited projects',
                                    '50,000 automation runs/mo',
                                    'Premium integrations (Salesforce, etc)',
                                    '90-day run history',
                                    'Priority email support',
                                    'Custom webhooks'
                                ]
                            },
                            enterprise: {
                                name: 'Enterprise',
                                tagline: 'CUSTOM SECURE INFRASTRUCTURE',
                                priceMonthly: null,
                                priceAnnual: null,
                                cta: { label: 'Contact Sales', href: '#contact' },
                                features: [
                                    'Unlimited automation runs',
                                    'Dedicated Success Manager',
                                    'SSO & Advanced RBAC',
                                    'Custom data residency',
                                    'VPC Peering',
                                    '24/7 Premium Support SLA'
                                ]
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
                            ctaBtn: root.querySelector('#ctaBtn')
                        };

                        const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-electric-400 mt-0.5 shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>';

                        function formatPrice(v) { return (typeof v === 'number') ? `$${v}` : 'Custom'; }

                        function setSelectedPlanButton() {
                            els.planButtons.forEach(btn => {
                                const isActive = btn.getAttribute('data-plan-select') === state.plan;
                                btn.classList.toggle('bg-white/5', isActive);
                                btn.classList.toggle('border-white/20', isActive);
                                btn.classList.toggle('border-transparent', !isActive);
                                
                                const iconContainer = btn.querySelector('span');
                                iconContainer.classList.toggle('border-white/10', isActive);
                                iconContainer.classList.toggle('border-transparent', !isActive);
                                iconContainer.classList.toggle('text-white', isActive);
                                iconContainer.classList.toggle('text-gray-500', !isActive);
                            });
                        }

                        function setBillingTabs() {
                            els.tabs.forEach(tab => {
                                const active = tab.getAttribute('data-billing') === state.billing;
                                tab.classList.toggle('text-white', active);
                                tab.classList.toggle('bg-white/10', active);
                                tab.classList.toggle('text-gray-400', !active);
                                tab.classList.toggle('hover:text-white', !active);
                            });
                        }

                        function render() {
                            const cfg = plans[state.plan];
                            els.planName.textContent = cfg.name;
                            els.planTagline.textContent = cfg.tagline;

                            const price = (state.billing === 'monthly') ? cfg.priceMonthly : cfg.priceAnnual;
                            els.planPrice.textContent = formatPrice(price);
                            els.planPriceSuffix.textContent = (typeof price === 'number') ? (state.billing === 'monthly' ? '/month' : '/yr') : '';

                            els.ctaBtn.textContent = cfg.cta.label;
                            els.ctaBtn.setAttribute('href', cfg.cta.href);

                            els.featureList.innerHTML = cfg.features.map(f => `<li class="flex items-start gap-3">${checkSVG}<span class="font-light">${f}</span></li>`).join('');

                            setSelectedPlanButton();
                            setBillingTabs();
                        }

                        els.planButtons.forEach(btn => {
                            btn.addEventListener('click', () => { state.plan = btn.getAttribute('data-plan-select'); render(); });
                        });

                        els.tabs.forEach(tab => {
                            tab.addEventListener('click', () => { state.billing = tab.getAttribute('data-billing'); render(); });
                        });

                        render();
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
      

<nav className="fixed top-0 w-full z-50 bg-[#030305]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tight text-white">Loopra</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#customers">Customers</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#docs">Docs</a>
</div>
<div className="flex items-center">
<a className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-colors" href="#">
                    Launch App
                </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center">
<div className="hero-rays"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Automate workflows<br/>like never before
                </h1>
<p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                    Less friction. More flow. Loopra turns complex manual processes into intelligent, self-healing automation loops that scale with your code.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">

<a className="group transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)] text-base font-medium text-white bg-electric-600 rounded-full py-3 px-8 relative overflow-hidden flex items-center justify-center min-w-[180px]" href="#pricing">
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-[1px] opacity-100 mask-linear">
<div className="h-full w-full bg-electric-600 rounded-full"></div>
</div>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-500 to-electric-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                            Start Building
                            <svg className="transition-transform group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>

<a className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-base font-medium text-white transition-colors flex items-center justify-center min-w-[180px]" href="#docs">
                        View Documentation
                    </a>
</div>
</div>

<div className="relative z-10 w-full max-w-6xl mx-auto mt-24 rounded-2xl border border-white/10 bg-[#0A0A0C] shadow-[0_0_100px_rgba(37,99,235,0.1)] overflow-hidden">

<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#121215]">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-gray-400 font-medium">
<span className="w-2 h-2 rounded-full bg-electric-500"></span>
                        Prod / nexus.ai / builder
                    </div>
<div className="flex items-center gap-4 text-gray-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>

<div className="flex h-[600px] bg-[#0A0A0C]">

<div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight">Loopra</span>
</div>
<div className="relative mb-6">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-9 pr-3 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-white/20" placeholder="Search workflows..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-gray-400 border border-white/5">⌘K</div>
</div>
<div className="text-[11px] font-medium tracking-widest text-gray-500 uppercase mb-3 px-2">Workspace</div>
<div className="space-y-1 mb-8">
<div className="px-2 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors">Overview</div>
<div className="px-2 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors flex justify-between items-center">
                                Inbox <span className="bg-white/10 text-gray-300 text-[10px] px-1.5 py-0.5 rounded-full">4</span>
</div>
</div>
<div className="text-[11px] font-medium tracking-widest text-gray-500 uppercase mb-3 px-2">Automation</div>
<div className="space-y-1">
<div className="px-2 py-2 text-base text-white bg-white/5 border border-white/5 rounded-lg cursor-pointer flex items-center gap-2">
<div className="w-1 h-4 bg-electric-500 rounded-full"></div> Workflows
                            </div>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:24px_24px]">

<div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-[#0A0A0C]/80 backdrop-blur-sm">
<div className="flex items-center gap-4 text-base text-gray-400">
<span>Workflows</span>
<span>/</span>
<span className="text-white font-medium">Customer Onboarding v2</span>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-colors flex items-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    Test run
                                </button>
<button className="px-4 py-1.5 rounded-md bg-electric-500 hover:bg-electric-400 text-sm font-medium text-white transition-colors">
                                    Deploy
                                </button>
</div>
</div>

<div className="absolute inset-0 pt-14 p-8 flex items-center justify-center">

<div className="absolute left-[10%] top-[40%] w-64 bg-[#121215] border border-white/10 rounded-xl p-4 shadow-xl">
<div className="text-[10px] font-medium tracking-widest text-electric-400 uppercase mb-2">Trigger</div>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
<svg className="text-gray-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="font-medium text-base">New Sign Up</div>
</div>
<div className="text-sm text-gray-500">Listens for users via API</div>
</div>

<svg className="absolute left-[calc(10%+16rem)] top-[45%] w-32 h-20 pointer-events-none" style={{overflow: 'visible'}}>
<path d="M0 0 C 60 0, 60 40, 120 40" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="120" cy="40" fill="#3B82F6" r="4"></circle>
</svg>

<div className="absolute left-[45%] top-[50%] w-72 bg-[#121215] border border-electric-500/50 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden z-10">
<div className="p-4 border-b border-white/5">
<div className="flex justify-between items-start mb-2">
<div className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">Action</div>
<svg className="text-gray-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-electric-500/20 flex items-center justify-center">
<svg className="text-electric-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="font-medium text-base text-white">Send email</div>
</div>
</div>
<div className="p-4 bg-white/[0.02]">
<div className="text-xs text-gray-500 mb-1">Subject</div>
<div className="text-sm text-gray-300 bg-white/5 px-2 py-1.5 rounded border border-white/5">Welcome to Loopra — let's automa...</div>
</div>
</div>

<div className="absolute right-0 top-14 bottom-0 w-80 bg-[#0A0A0C] border-l border-white/5 p-4 hidden lg:block">
<div className="text-base font-medium text-white mb-1">Send email</div>
<div className="text-sm text-gray-500 mb-6">Node • Action</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 to-transparent pointer-events-none"></div>
<div className="text-[10px] font-medium tracking-widest text-electric-400 uppercase mb-2 flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                                        AI Assistant
                                    </div>
<div className="text-sm text-gray-300 mb-3">Describe changes and I'll update this node.</div>
<div className="bg-black/50 border border-white/10 rounded-md p-2 relative h-20">
<span className="text-gray-600 text-sm">e.g. Make the subject more friendly...</span>
<button className="absolute bottom-2 right-2 px-3 py-1 bg-electric-500 text-white text-[11px] font-medium rounded hover:bg-electric-400 transition-colors">Apply</button>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div className="text-[10px] font-medium tracking-widest text-gray-500 uppercase">Config</div>
<span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">Valid</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:mx-auto bg-gradient-to-br from-white/5 via-transparent to-white/5 max-w-7xl rounded-[2rem] mt-24 mx-4 mb-24 p-8 md:p-12 relative border border-white/5" id="features" style={{'--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05))'}}>
<div className="flex flex-col relative">

<div className="flex flex-col gap-10 w-full">

<div className="flex items-center gap-6">
<span className="text-sm font-mono text-electric-400 tracking-widest">01</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-sm tracking-widest text-gray-500">Why Loopra</span>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.05]">
                                Focus you feel.
                                <span className="block text-gray-500 font-medium tracking-tight">
                                    Progress you can verify.
                                </span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
                                A modern productivity infrastructure designed for focus, clarity, and long-term team efficiency.
                            </p>
</div>

<button className="group flex items-center gap-2 px-6 py-3 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/5 transition whitespace-nowrap">
<span>Explore Features</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-12 gap-6">

<div className="group flex flex-col overflow-hidden hover:border-electric-500/30 transition-all duration-500 md:col-span-1 bg-[#050508] border-white/5 border rounded-[2rem] p-8 relative justify-between">
<style>
                            @keyframes orbit-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                            @keyframes breathe-glow { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); } 50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(59, 130, 246, 0.3); } }
                            @keyframes ripple-expand { 0% { transform: scale(0.8); opacity: 0.6; border-width: 1px; } 100% { transform: scale(2.5); opacity: 0; border-width: 0px; } }
                            @keyframes dot-handoff { 0%, 100% { opacity: 0.3; r: 2px; fill: #60A5FA; } 50% { opacity: 1; r: 3.5px; fill: #3B82F6; } }
                        </style>
<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<div className="absolute inset-0 bg-gradient-to-b from-electric-500/10 to-transparent opacity-50 rounded-full blur-3xl transform scale-75"></div>
<div className="absolute w-16 h-16 rounded-full border border-electric-400/30 z-0" style={{animation: 'ripple-expand 4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<svg className="w-full h-full text-electric-500/20 z-10" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g style={{transformOrigin: '100px 100px', animation: 'orbit-slow 12s linear infinite'}}>
<circle className="opacity-30" cx="100" cy="100" r="80" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1.5"></circle>
<circle className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" cx="100" cy="20" fill="#60A5FA" r="3"></circle>
<circle className="opacity-60" cx="180" cy="100" fill="#3B82F6" r="2.5"></circle>
<circle className="opacity-60" cx="20" cy="100" fill="#3B82F6" r="2.5"></circle>
</g>
<circle className="opacity-40" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="100" cy="50" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '0s'}}></circle>
<circle cx="150" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '1s'}}></circle>
<circle cx="100" cy="150" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '2s'}}></circle>
<circle cx="50" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '3s'}}></circle>
</svg>
<div className="absolute flex items-center justify-center w-16 h-16 bg-[#15151A] rounded-full border border-white/10 z-20" style={{animation: 'breathe-glow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-electric-500/10 rounded-full blur-sm"></div>
<svg className="text-gray-100 relative z-10" fill="currentColor" height="28" stroke="none" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Smart Task Automation</h3>
<p className="leading-relaxed text-lg font-light text-gray-400">
                                Eliminate busywork and ensure projects move forward with intelligent task dependencies and automated agents.
                            </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-electric-500/30 transition-all duration-500 bg-[#050508] border-white/5 border rounded-[2rem] p-8 relative justify-between">
<style>
                            @keyframes flowData { 0% { stroke-dashoffset: 120; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
                            @keyframes breatheDiamond { 0%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 30px rgba(59,130,246,0.3); border-color: rgba(59,130,246,0.3); } 50% { transform: rotate(45deg) scale(1.05); box-shadow: 0 0 50px rgba(59,130,246,0.5); border-color: rgba(59,130,246,0.6); } }
                            @keyframes orbitSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        </style>
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-electric-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-electric-500/20 transition-colors duration-700"></div>
<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<svg className="absolute inset-0 w-full h-full" fill="none" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 200">
<defs>
<lineargradient id="flowGradientLeft" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="flowGradientRight" x1="100%" x2="0%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="text-white/10" d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1.5"></path>
<path className="text-white/10" d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M50 100 L120 100 L150 70" stroke="url(#flowGradientLeft)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
<path d="M350 100 L280 100 L250 130" stroke="url(#flowGradientRight)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '1.5s'}}></path>
<g transform="translate(50 100) rotate(45)">
<rect className="group-hover:stroke-electric-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
<g transform="translate(350 100) rotate(45)">
<rect className="group-hover:stroke-electric-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
</svg>
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-electric-600 blur-[40px] opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="w-24 h-24 border border-electric-500/30 bg-gradient-to-br from-electric-900/30 to-blue-900/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] z-10 relative overflow-hidden" style={{animation: 'breatheDiamond 4s ease-in-out infinite'}}>
<div className="w-12 h-12 border border-electric-400/50 rounded-lg flex items-center justify-center bg-electric-500/5 relative z-20">
<div className="w-1.5 h-1.5 bg-electric-400 rounded-full shadow-[0_0_10px_#60A5FA]"></div>
</div>
<div className="absolute inset-0 z-10 opacity-30" style={{animation: 'orbitSpin 8s linear infinite'}}>
<div className="w-full h-full rounded-2xl border-t border-r border-electric-400/40"></div>
</div>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white group-hover:text-blue-50 transition-colors duration-300 font-medium tracking-tight mb-2">Seamless App Integration</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Connect Loopra with your existing stack, centralizing data and communication in one place for total visibility.
                            </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-electric-500/30 transition-all duration-500 bg-[#050508] border-white/5 border rounded-[2rem] p-8 relative justify-between">
<style>
                            @keyframes shimmer-lock { 0%, 100% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); } 50% { opacity: 0.8; border-color: rgba(255,255,255,0.25); transform: scale(1.05); } }
                            @keyframes active-pulse { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); transform: scale(1); border-color: rgba(255,255,255,0.1); } 50% { box-shadow: 0 0 35px rgba(59, 130, 246, 0.6); transform: scale(1.02); border-color: rgba(59, 130, 246, 0.5); } }
                            @keyframes scan-sweep { 0% { transform: translateY(-150%) rotate(15deg); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(250%) rotate(15deg); opacity: 0; } }
                            @keyframes progress-spin { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 25; } }
                        </style>
<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-electric-600/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '0s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '1s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="relative w-20 h-20 rounded-2xl bg-electric-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10 border border-white/10 ring-4 ring-[#08080A]" style={{animation: 'active-pulse 3s ease-in-out infinite'}}>
<div className="absolute inset-0 overflow-hidden rounded-2xl">
<div className="w-full h-1/3 bg-gradient-to-b from-white/0 via-white/20 to-white/0 absolute top-0 left-0" style={{animation: 'scan-sweep 3s ease-in-out infinite'}}></div>
</div>
<svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewbox="0 0 36 36">
<path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="2" style={{animation: 'progress-spin 1.5s ease-out forwards'}}></path>
</svg>
<svg className="relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<div className="absolute -bottom-3 bg-[#08080A] text-white border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono tracking-wider font-semibold">LIVE</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '2s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '3s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Real-Time Project Tracking</h3>
<p className="leading-relaxed text-lg font-light text-gray-400">
                                Monitor project health in real-time, ensuring transparency, accountability, and speed across all teams.
                            </p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden hover:border-electric-500/30 transition-all duration-500 bg-[#050508] border-white/5 border rounded-[2rem] p-8 relative justify-between">
<style>
                            @keyframes drift-vertical-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
                            @keyframes drift-vertical-reverse { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(8px); } }
                            @keyframes signal-flow { 0% { stroke-dashoffset: 20; opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.6; } }
                            @keyframes signal-pulse { 0%, 100% { stroke-width: 1; opacity: 0.2; } 50% { stroke-width: 1.5; opacity: 0.8; stroke: #60A5FA; } }
                            @keyframes node-activate { 0%, 90%, 100% { fill: white; r: 3px; filter: none; } 92% { fill: #3B82F6; r: 4.5px; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); } 95% { fill: #60A5FA; r: 4px; } }
                        </style>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:16px_16px]"></div>
<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<svg className="w-full h-full text-white/10" fill="none" viewbox="0 0 200 200">
<line stroke="currentColor" strokeWidth="1.5" x1="100" x2="100" y1="20" y2="180"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'signal-flow 3s linear infinite'}} x1="60" x2="60" y1="20" y2="180"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'signal-flow 4s linear infinite reverse'}} x1="140" x2="140" y1="20" y2="180"></line>
<g style={{animation: 'drift-vertical-slow 7s ease-in-out infinite'}}>
<path d="M60 80 C 80 80, 80 100, 100 100" stroke="currentColor" strokeWidth="1.5" style={{animation: 'signal-pulse 5s ease-in-out infinite 0s'}}></path>
<circle cx="60" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0.5s'}}></circle>
</g>
<g style={{animation: 'drift-vertical-reverse 8s ease-in-out infinite 1s'}}>
<path d="M100 60 C 120 60, 120 80, 140 80" stroke="currentColor" strokeWidth="1.5" style={{animation: 'signal-pulse 5s ease-in-out infinite 2.5s'}}></path>
<circle cx="140" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 3s'}}></circle>
</g>
<g style={{animation: 'drift-vertical-slow 6s ease-in-out infinite 2s'}}>
<path d="M100 120 C 80 120, 80 140, 60 140" stroke="currentColor" strokeWidth="1.5" style={{animation: 'signal-pulse 5s ease-in-out infinite 1.5s'}}></path>
<circle cx="60" cy="140" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 5.5s'}}></circle>
</g>
<circle cx="100" cy="60" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0s'}}></circle>
<circle cx="100" cy="100" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 2s'}}></circle>
<circle cx="100" cy="150" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 4s'}}></circle>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-2xl text-white group-hover:text-blue-50 transition-colors duration-300 font-medium tracking-tight mb-2">Enterprise Scalability</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Loopra grows with you, effortlessly handling millions of tasks without missing a beat.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6 relative" id="customers">
<div className="border border-white/5 bg-[#050508] p-8 md:p-12 rounded-[2rem]">
<div className="mb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll gap-6 items-start">
<div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/10 bg-white/5">
<span className="text-sm font-mono tracking-widest text-electric-400">02</span>
<span className="h-3 w-px bg-white/20"></span>
<span className="text-xs uppercase tracking-widest text-gray-400">Testimonials</span>
</span>
</div>
<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.05]">
                                Loved by developers,
                                <span className="text-gray-500 font-medium tracking-tight block">trusted by teams</span>
</h2>
<p className="mt-6 text-xl text-gray-400 max-w-2xl font-light">
                                Real results from real teams — faster deployments, cleaner handoffs, and a smoother path from idea to shipped product.
                            </p>
</div>
<div className="lg:col-span-3 lg:justify-end flex flex-col sm:flex-row gap-4 sm:items-center">
<a className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/5 transition whitespace-nowrap min-w-[160px]" href="#demo">
<span>See More</span>
</a>
</div>
</div>
</div>
<div className="mt-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="rounded-2xl border border-white/5 bg-[#0A0A0C] p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex items-start justify-between mb-8">
<span className="text-5xl text-white/20 leading-none font-medium tracking-tight">"</span>
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
<img alt="Client photo" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
                                “As an automation engineer, reliability is everything. Loopra’s infrastructure and self-healing nodes have saved us countless hours of debugging.”
                            </p>
<div>
<p className="text-sm text-gray-500 mb-1">Lead Engineer</p>
<p className="text-base text-white font-medium">G. Alexander</p>
</div>
</article>

<article className="rounded-2xl border border-electric-500/30 bg-gradient-to-b from-electric-900/20 to-[#0A0A0C] p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-electric-500/5 blur-xl"></div>
<div className="relative z-10 flex items-start justify-between mb-8">
<span className="text-5xl text-electric-400/30 leading-none font-medium tracking-tight">"</span>
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 ring-2 ring-electric-500/20">
<img alt="Client photo" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="relative z-10 text-white text-xl leading-relaxed font-light mb-8">
                                “Loopra was exactly what our startup needed. We built our entire backend automation layer in days, not months — critical for early market entry.”
                            </p>
<div className="relative z-10">
<p className="text-sm text-electric-400/80 mb-1">CTO, Nexus</p>
<p className="text-base text-white font-medium">J. Amander</p>
</div>
</article>

<article className="rounded-2xl border border-white/5 bg-[#0A0A0C] p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="flex items-start justify-between mb-8">
<span className="text-5xl text-white/20 leading-none font-medium tracking-tight">"</span>
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
<img alt="Client photo" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
                                “The perfect balance of complex capabilities and simple UX. If you want high-impact results without maintaining custom scripts, this is it.”
                            </p>
<div>
<p className="text-sm text-gray-500 mb-1">VP Operations</p>
<p className="text-base text-white font-medium">A. Levine</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6 relative [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="pricing">
<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050508] p-8 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

<div className="flex flex-col">
<div className="flex items-center gap-6 mb-8">
<span className="text-sm font-mono text-electric-400 tracking-widest">03</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-sm tracking-widest text-gray-500">Pricing</span>
</div>
<h2 className="text-4xl sm:text-5xl text-white font-medium tracking-tight leading-[1.1]">
                            Simple pricing<br/>
<span className="text-gray-500">that grows with you</span>
</h2>
<p className="mt-6 text-xl text-gray-400 font-light max-w-md">
                            Pick a plan today and switch anytime. Clear value across Starter, Pro, and Enterprise.
                        </p>

<div className="mt-8 mb-10">
<div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-white/5">
<button className="billing-tab px-6 py-2 text-sm font-medium rounded-full bg-white/10 text-white transition-colors" data-billing="monthly">Monthly</button>
<button className="billing-tab px-6 py-2 text-sm font-medium rounded-full text-gray-400 hover:text-white transition-colors" data-billing="annual">Annually</button>
</div>
</div>

<div className="space-y-4 max-w-md">
<button className="plan-select-btn group w-full text-left p-5 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-between transition-colors" data-plan-select="starter">
<div>
<p className="text-xl text-white font-medium tracking-tight">Starter</p>
<p className="text-sm text-gray-400 mt-1">Launch fast, learn faster.</p>
</div>
<span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="plan-select-btn group w-full text-left p-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 flex items-center justify-between transition-colors" data-plan-select="pro">
<div>
<p className="text-xl text-white font-medium tracking-tight">Pro</p>
<p className="text-sm text-gray-400 mt-1">Grow with confidence.</p>
</div>
<span className="w-10 h-10 rounded-full border border-transparent flex items-center justify-center text-gray-500 group-hover:border-white/10 group-hover:text-white transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="plan-select-btn group w-full text-left p-5 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 flex items-center justify-between transition-colors" data-plan-select="enterprise">
<div>
<p className="text-xl text-white font-medium tracking-tight">Enterprise</p>
<p className="text-sm text-gray-400 mt-1">Tailored for scale.</p>
</div>
<span className="w-10 h-10 rounded-full border border-transparent flex items-center justify-center text-gray-500 group-hover:border-white/10 group-hover:text-white transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 relative flex flex-col">
<div className="absolute top-0 right-0 w-[200px] h-[200px] bg-electric-600/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="mb-8">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2" id="planName">Starter</h3>
<div className="flex items-end gap-2">
<span className="text-6xl text-white font-medium tracking-tight leading-none" id="planPrice">$29</span>
<span className="text-gray-500 text-lg mb-1" id="planPriceSuffix">/month</span>
</div>
</div>
<div className="flex-1">
<p className="text-xs tracking-widest text-electric-400 uppercase font-medium mb-6" id="planTagline">FOR SMALL TEAMS</p>
<ul className="space-y-4 text-base text-gray-300" id="featureList">

</ul>
</div>
<div className="mt-10">

<a className="w-full text-base font-medium text-white bg-electric-600 hover:bg-electric-500 rounded-full py-4 px-8 flex items-center justify-center transition-colors" href="#join" id="ctaBtn">
                                Get Started
                            </a>
<p className="text-sm text-gray-500 text-center mt-4">No credit card required for Starter.</p>
</div>
</div>
</div>

</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030305] pt-20 pb-10 px-6 mt-20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<span className="text-2xl font-medium tracking-tight text-white mb-6 block">Loopra</span>
<p className="text-base text-gray-400 font-light mb-6">
                        Automate workflows like never before. Intelligent, self-healing, scalable.
                    </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6">Product</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Features</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Integrations</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Pricing</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-white mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Documentation</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">API Reference</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Community</a></li>
<li><a className="text-base text-gray-400 hover:text-white font-light transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-base font-medium text-white mb-6">Stay updated</h4>
<p className="text-base text-gray-400 font-light mb-4">Subscribe to our newsletter for product updates.</p>
<form className="flex items-center border border-white/10 rounded-full p-1 bg-white/5 focus-within:border-white/30 transition-colors">
<input className="flex-1 bg-transparent placeholder:text-gray-600 text-white text-base px-4 focus:outline-none" placeholder="Enter your email" type="email"/>
<button className="p-2 rounded-full bg-electric-600 text-white hover:bg-electric-500 transition-colors" type="submit">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500 font-light">© 2025 Loopra Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-light text-gray-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
