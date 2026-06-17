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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#8624FF',
50: '#F4EBFF',
100: '#E9D7FF',
900: '#3D008A',
},
accent: {
DEFAULT: '#BBFF66',
50: '#F5FFEB',
},
ui: {
bg: '#FFFFFF',
bgAlt: '#FAFAFB',
text: '#090A0B',
muted: '#60646C',
border: '#EAEBEE',
surface: '#FFFFFF'
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
'premium': '0 20px 40px -10px rgba(134, 36, 255, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.1)',
'float': '0 20px 40px -10px rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.1)',
'glow': '0 0 40px -10px var(--tw-shadow-color)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 20s linear infinite',
'typing': 'typing 1.4s infinite ease-in-out both',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
typing: {
'0%, 80%, 100%': { transform: 'scale(0)', opacity: '0.5' },
'40%': { transform: 'scale(1)', opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });
            
            document.querySelectorAll('.reveal-group, .timeline-seq').forEach((el) => {
                observer.observe(el);
            });
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
      

<nav className="fixed top-0 w-full bg-ui-bg/80 backdrop-blur-xl border-b border-ui-border z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-6 h-6 bg-brand rounded-md flex items-center justify-center text-white shadow-glow shadow-brand/20 group-hover:scale-105 transition-transform">
<iconify-icon className="text-sm" icon="solar:bolt-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-ui-text">ALRIS</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-normal text-ui-muted hover:text-brand transition-colors" href="#product">Product</a>
<a className="text-sm font-normal text-ui-muted hover:text-brand transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-normal text-ui-muted hover:text-brand transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-normal text-ui-muted hover:text-brand transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center space-x-5">
<a className="hidden md:block text-sm font-normal text-ui-muted hover:text-ui-text transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-brand text-white px-4 py-1.5 rounded-full hover:bg-brand-900 transition-all shadow-subtle hover:-translate-y-0.5" href="#">Book Demo</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center border-b border-ui-border">
<div className="absolute inset-0 bg-dots opacity-[0.3] z-0"></div>
<div className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full reveal-group">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div className="max-w-2xl relative z-20">
<div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand/20 rounded-full px-3 py-1 mb-8">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
</span>
<span className="text-xs font-medium text-brand">Alris Engine v2.0 is live</span>
</div>
<h1 className="text-5xl lg:text-7xl leading-[1.05] text-gradient font-medium tracking-tighter bg-gradient-to-br from-ui-text via-ui-text to-brand mb-6 pb-2">Omnichannel AI for Customer Teams</h1>
<p className="text-lg text-ui-muted mb-10 leading-relaxed max-w-lg font-normal">
                        One autonomous agent to handle calls, emails, SMS, and CRM updates. Scale your operations beautifully without scaling headcount.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto bg-brand text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-900 transition-all hover:-translate-y-0.5 shadow-premium flex items-center justify-center gap-2 group">
                            Start Building Free
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-md aspect-square bg-white/60 backdrop-blur-xl border border-ui-border rounded-[2rem] shadow-float p-8 z-10 group">
<div className="absolute top-4 left-6 right-6 flex items-center justify-between opacity-50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-ui-border"></div>
<div className="w-2.5 h-2.5 rounded-full bg-ui-border"></div>
<div className="w-2.5 h-2.5 rounded-full bg-ui-border"></div>
</div>
<div className="text-xs font-medium text-brand tracking-tight">Active Context Graph</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-ui-text rounded-[1.25rem] flex items-center justify-center shadow-glow shadow-brand/20 z-20 hover:bg-brand transition-colors duration-500">
<iconify-icon className="text-accent text-3xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">
<div className="absolute top-12 left-2 bg-white/90 backdrop-blur-md border border-ui-border p-3 rounded-2xl shadow-float flex items-center gap-3 transform -rotate-2 animate-float">
<div className="w-8 h-8 rounded-xl bg-brand-50 flex items-center justify-center text-brand">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pr-3">
<div className="text-xs font-medium text-ui-text">Inbound Call</div>
<div className="text-[10px] text-ui-muted mt-0.5">Live transcribing...</div>
</div>
</div>
<div className="absolute top-32 right-[-1rem] bg-white/90 backdrop-blur-md border border-ui-border p-3 rounded-2xl shadow-float flex items-center gap-3 transform rotate-3 animate-float-delayed">
<div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pr-3">
<div className="text-xs font-medium text-ui-text">SMS Follow-up</div>
<div className="text-[10px] text-brand font-medium mt-0.5">Drafted</div>
</div>
</div>
<div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-ui-border p-3 rounded-2xl shadow-float flex items-center gap-3 transform translate-y-4 animate-float">
<div className="w-8 h-8 rounded-xl bg-ui-bgAlt flex items-center justify-center text-ui-text">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pr-3">
<div className="text-xs font-medium text-ui-text">Salesforce Sync</div>
<div className="text-[10px] text-ui-muted mt-0.5">Context saved</div>
</div>
</div>
</div>
<svg className="absolute inset-0 w-full h-full z-0 opacity-[0.15]">
<circle className="animate-spin-slow" cx="50%" cy="50%" fill="none" r="35%" stroke="#8624FF" stroke-dasharray="2 4" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-ui-bgAlt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center reveal-group">
<span className="text-xs font-medium tracking-widest text-brand uppercase mb-4 block">The Fragmentation Trap</span>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-6 text-ui-text">Jumping between tools is breaking your customer experience.</h2>
<p className="text-ui-muted text-lg font-normal leading-relaxed">Agents spend 30% of their day moving data. Manual handoffs fall through the cracks. Your team deserves a fluid workflow.</p>
</div>
</div>
</section>

<section className="py-32 relative bg-ui-bg border-y border-ui-border" id="solutions">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16 reveal-group">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4 text-ui-text">One agent. Every channel.</h2>
<p className="text-ui-muted text-lg font-normal">Natively integrated across touchpoints, maintaining perfect context everywhere.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal-group">
<div className="md:col-span-2 group bg-ui-bgAlt rounded-3xl p-8 ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-brand/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center text-white mb-8 shadow-glow shadow-brand/20">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-ui-text">Ultra-Low Latency Voice</h3>
<p className="text-sm text-ui-muted font-normal leading-relaxed max-w-md mb-8">Human-like voice conversations with instant sentiment analysis, background noise filtering, and mid-sentence interruption handling.</p>
</div>
</div>
<div className="group bg-ui-text text-ui-surface rounded-3xl p-8 ring-1 ring-inset ring-black hover:-translate-y-1 transition-all duration-300">
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent mb-8">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Email Auto-Routing</h3>
<p className="text-sm text-ui-muted text-gray-400 font-normal leading-relaxed">Intelligent auto-drafting and instant intent classification before the agent opens the inbox.</p>
</div>
</div>
<div className="group bg-ui-bgAlt rounded-3xl p-8 ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand mb-8">
<iconify-icon className="text-xl" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-ui-text">SMS &amp; Chat</h3>
<p className="text-sm text-ui-muted font-normal leading-relaxed">Instant multi-lingual replies and seamless context carry-over.</p>
</div>
<div className="md:col-span-2 group bg-ui-bgAlt rounded-3xl p-8 ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-all duration-300 flex items-center justify-between">
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-ui-text mb-6">
<iconify-icon className="text-xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-ui-text">Bi-directional CRM Sync</h3>
<p className="text-sm text-ui-muted font-normal leading-relaxed">Push notes, update deal stages, and map custom fields automatically across Salesforce and HubSpot.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ui-text relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center reveal-group relative z-10">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4 text-white">See Alris in action</h2>
<p className="text-ui-muted text-gray-400 font-normal text-lg mb-12">Watch how a complex support ticket is resolved entirely autonomously.</p>
<div className="relative w-full max-w-5xl mx-auto aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-inset ring-white/10 group cursor-pointer">

<div className="absolute inset-0 bg-brand/5 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center ring-1 ring-inset ring-white/20 group-hover:bg-brand transition-colors duration-300">
<iconify-icon className="text-white text-2xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ui-bg border-b border-ui-border">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 max-w-xl mx-auto reveal-group">
<h2 className="text-3xl font-medium tracking-tighter mb-4 text-ui-text">Real-time resolution.</h2>
<p className="text-ui-muted font-normal text-lg">A seamless handoff from voice to SMS, while keeping your CRM updated.</p>
</div>
<div className="bg-ui-surface rounded-3xl shadow-float ring-1 ring-inset ring-ui-border overflow-hidden">
<div className="bg-ui-bgAlt px-6 py-4 border-b border-ui-border flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-ui-border"></div>
<div className="w-3 h-3 rounded-full bg-ui-border"></div>
<div className="w-3 h-3 rounded-full bg-ui-border"></div>
</div>
<div className="text-[10px] font-medium text-ui-muted uppercase tracking-widest bg-white px-3 py-1 rounded-full ring-1 ring-inset ring-ui-border">Live Flow</div>
<div className="w-12"></div>
</div>
<div className="p-6 lg:p-10 space-y-6 bg-[#FAFAFB] timeline-seq relative">
<div className="flex items-center justify-center gap-2 text-xs font-medium text-ui-muted mb-6">
<iconify-icon className="text-brand" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon> Voice call connected
                    </div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white ring-1 ring-inset ring-ui-border flex-shrink-0 flex items-center justify-center text-ui-muted text-xs font-medium">C</div>
<div className="bg-white ring-1 ring-inset ring-ui-border rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-ui-text font-normal max-w-[80%] leading-relaxed">
                            I need to update my shipping address for order #4920 before it goes out.
                        </div>
</div>
<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-white text-xs font-medium shadow-subtle">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-brand text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-normal max-w-[80%] leading-relaxed">
                            I found order #4920. To verify, what is the postal code of the original address?
                        </div>
</div>
<div className="relative py-4">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-dashed border-ui-border"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-ui-surface px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-medium text-ui-muted ring-1 ring-inset ring-ui-border">
                                Verification Complete
                            </span>
</div>
</div>
<div className="flex items-center gap-3 bg-white p-3.5 rounded-xl ring-1 ring-inset ring-ui-border text-sm">
<div className="w-8 h-8 rounded-lg bg-ui-bgAlt flex items-center justify-center text-ui-text">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 font-normal text-ui-text text-xs lg:text-sm">
<span className="font-medium">Shopify Sync:</span> Address updated successfully.
                        </div>
<iconify-icon className="text-accent text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-ui-text flex-shrink-0 flex items-center justify-center text-white text-xs font-medium">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-ui-text text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-normal max-w-[80%] leading-relaxed">
                            The address is updated. I just sent an SMS confirmation to your phone. Have a great day!
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="why-it-matters">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center reveal-group">
<div>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-6 text-ui-text">Elevate the standard of your support.</h2>
<p className="text-ui-muted text-lg font-normal leading-relaxed mb-8">Customers expect instant, accurate, and personalized responses. Alris removes the friction of scale, letting you deliver premium experiences without expanding your headcount.</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand flex-shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-1">Zero Wait Times</h4>
<p className="text-sm text-ui-muted font-normal leading-relaxed">Scale infinite parallel lines of support during peak hours. No more hold music.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand flex-shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-1">Perfect Accuracy</h4>
<p className="text-sm text-ui-muted font-normal leading-relaxed">By reading directly from your truth sources, Alris eliminates human error in data entry.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand flex-shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-1">Empower Human Agents</h4>
<p className="text-sm text-ui-muted font-normal leading-relaxed">Let AI handle the repetitive inquiries, freeing your team for high-value relationship building.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ui-bgAlt border-y border-ui-border">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 reveal-group">
<div className="text-center px-4">
<div className="text-4xl lg:text-6xl font-medium tracking-tighter text-ui-text mb-2">2.4M</div>
<div className="text-xs text-ui-muted font-medium uppercase tracking-widest mt-3">Interactions</div>
</div>
<div className="text-center px-4">
<div className="text-4xl lg:text-6xl font-medium tracking-tighter text-ui-text mb-2">99.9%</div>
<div className="text-xs text-ui-muted font-medium uppercase tracking-widest mt-3">Uptime SLA</div>
</div>
<div className="text-center px-4">
<div className="text-4xl lg:text-6xl font-medium tracking-tighter text-ui-text mb-2">800<span className="text-2xl text-ui-muted">ms</span></div>
<div className="text-xs text-ui-muted font-medium uppercase tracking-widest mt-3">Voice Latency</div>
</div>
<div className="text-center px-4">
<div className="text-4xl lg:text-6xl font-medium tracking-tighter text-ui-text mb-2">40+</div>
<div className="text-xs text-ui-muted font-medium uppercase tracking-widest mt-3">Integrations</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="industries">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 items-start reveal-group">
<div className="lg:col-span-5 lg:sticky lg:top-32">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4 text-ui-text">Built for complex operations.</h2>
<p className="text-ui-muted text-lg font-normal leading-relaxed mb-8">Whether you are tracking parcels or handling sensitive financial data, Alris adapts securely to your domain.</p>
</div>
<div className="lg:col-span-7 space-y-6">
<div className="p-8 bg-ui-bgAlt rounded-3xl ring-1 ring-inset ring-ui-border flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:ring-brand/30 transition-all">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-subtle ring-1 ring-inset ring-ui-border group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-ui-text" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-2">E-Commerce &amp; Retail</h4>
<p className="text-sm text-ui-muted font-normal">Automate WISMO (Where is my order), returns processing, and inventory checks seamlessly.</p>
</div>
</div>
<div className="p-8 bg-ui-bgAlt rounded-3xl ring-1 ring-inset ring-ui-border flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:ring-brand/30 transition-all">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-subtle ring-1 ring-inset ring-ui-border group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-ui-text" icon="solar:hospital-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-2">Healthcare</h4>
<p className="text-sm text-ui-muted font-normal">HIPAA-compliant scheduling, prescription refills, and patient triage via voice and secure SMS.</p>
</div>
</div>
<div className="p-8 bg-ui-bgAlt rounded-3xl ring-1 ring-inset ring-ui-border flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:ring-brand/30 transition-all">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-subtle ring-1 ring-inset ring-ui-border group-hover:scale-105 transition-transform">
<iconify-icon className="text-2xl text-ui-text" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-2">Financial Services</h4>
<p className="text-sm text-ui-muted font-normal">Secure balance inquiries, fraud alerts, and basic account maintenance with strict identity verification.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ui-bgAlt border-t border-ui-border" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 reveal-group">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4 text-ui-text">Deploy in minutes.</h2>
<p className="text-ui-muted font-normal text-lg">No complex coding or long implementation cycles.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative reveal-group">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-ui-border z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white ring-1 ring-inset ring-ui-border flex items-center justify-center text-sm font-medium text-ui-text mb-6 shadow-subtle">1</div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-3">Connect your stack</h4>
<p className="text-sm text-ui-muted font-normal">Link Zendesk, Salesforce, or your custom APIs via OAuth in one click.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white ring-1 ring-inset ring-ui-border flex items-center justify-center text-sm font-medium text-ui-text mb-6 shadow-subtle">2</div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-3">Upload knowledge</h4>
<p className="text-sm text-ui-muted font-normal">Drop in your PDFs, help center links, or past transcripts to train the model securely.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-sm font-medium mb-6 shadow-glow shadow-brand/20">3</div>
<h4 className="text-lg font-medium text-ui-text tracking-tight mb-3">Go live</h4>
<p className="text-sm text-ui-muted font-normal">Provision a phone number and email address instantly to start handling requests.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 max-w-xl mx-auto reveal-group">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-4 text-ui-text">Transparent scaling.</h2>
<p className="text-ui-muted font-normal text-lg">Everything you need to automate operations, beautifully packaged.</p>
</div>
<div className="max-w-md mx-auto relative reveal-group">
<div className="absolute inset-0 bg-brand/5 blur-[60px] -z-10 rounded-full scale-110"></div>
<div className="bg-white rounded-[2rem] ring-1 ring-inset ring-ui-border p-8 lg:p-10 shadow-float relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 h-1 bg-brand"></div>
<div className="mb-8">
<h3 className="text-xl font-medium text-ui-text mb-2 tracking-tight">Growth Plan</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tighter text-ui-text">$249</span>
<span className="text-sm text-ui-muted font-normal">/mo</span>
</div>
<p className="text-sm text-ui-muted mt-3 font-normal">Includes 5,000 unified interactions.</p>
</div>
<div className="space-y-4 mb-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-ui-text text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-ui-muted font-normal">Omnichannel (Voice, SMS, Email)</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ui-text text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-ui-muted font-normal">Native CRM Integrations</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ui-text text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-ui-muted font-normal">Unlimited knowledge uploads</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ui-text text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-ui-muted font-normal">Custom voice cloning</span>
</div>
</div>
<button className="w-full bg-ui-text text-white py-3 rounded-xl text-sm font-medium hover:bg-black transition-all">
                        Start 14-Day Free Trial
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-ui-bgAlt border-t border-ui-border" id="blog">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between mb-16 reveal-group">
<h2 className="text-3xl font-medium tracking-tighter text-ui-text">Latest Resources.</h2>
<a className="text-sm font-medium text-brand flex items-center gap-1 hover:underline" href="#">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal-group">
<a className="group block" href="#">
<div className="aspect-[16/10] bg-ui-border rounded-2xl mb-5 overflow-hidden ring-1 ring-inset ring-black/5 relative">
<div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="text-xs text-brand font-medium mb-2 uppercase tracking-widest">Case Study</div>
<h3 className="text-lg font-medium text-ui-text tracking-tight mb-2 group-hover:text-brand transition-colors">How ACME Corp automated 80% of support</h3>
<p className="text-sm text-ui-muted font-normal line-clamp-2">A deep dive into deploying omnichannel agents during peak holiday seasons without breaking sweat.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[16/10] bg-ui-border rounded-2xl mb-5 overflow-hidden ring-1 ring-inset ring-black/5 relative">
<div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="text-xs text-brand font-medium mb-2 uppercase tracking-widest">Engineering</div>
<h3 className="text-lg font-medium text-ui-text tracking-tight mb-2 group-hover:text-brand transition-colors">Achieving sub-800ms Voice Latency</h3>
<p className="text-sm text-ui-muted font-normal line-clamp-2">The architecture behind human-like conversational speed and interruption handling.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[16/10] bg-ui-border rounded-2xl mb-5 overflow-hidden ring-1 ring-inset ring-black/5 relative">
<div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="text-xs text-brand font-medium mb-2 uppercase tracking-widest">Guide</div>
<h3 className="text-lg font-medium text-ui-text tracking-tight mb-2 group-hover:text-brand transition-colors">Best practices for prompt design</h3>
<p className="text-sm text-ui-muted font-normal line-clamp-2">How to structure your knowledge base and instructions for maximum accuracy.</p>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-ui-border">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-2xl font-medium tracking-tighter text-center mb-16 text-ui-text">Frequently asked questions</h2>
<div className="space-y-3 reveal-group">
<details className="group bg-ui-bgAlt ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-colors rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-ui-text text-sm font-medium select-none tracking-tight">
                        How long does it take to deploy Alris?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-ui-muted group-hover:text-brand transition-colors text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-ui-muted font-normal leading-relaxed pt-1">
                        Most customers are up and running within 24 hours. Integrating your CRM and uploading your knowledge base takes minutes. Custom voice cloning may require an additional day.
                    </div>
</details>
<details className="group bg-ui-bgAlt ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-colors rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-ui-text text-sm font-medium select-none tracking-tight">
                        Can it transfer calls to human agents?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-ui-muted group-hover:text-brand transition-colors text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-ui-muted font-normal leading-relaxed pt-1">
                        Yes. Alris monitors sentiment in real-time. If it detects a complex edge case, or if the user asks for a human, it performs a warm transfer with full context.
                    </div>
</details>
<details className="group bg-ui-bgAlt ring-1 ring-inset ring-ui-border hover:ring-brand/30 transition-colors rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-ui-text text-sm font-medium select-none tracking-tight">
                        Is my data used to train other models?
                        <span className="transition group-open:rotate-180">
<iconify-icon className="text-ui-muted group-hover:text-brand transition-colors text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-ui-muted font-normal leading-relaxed pt-1">
                        Absolutely not. We are SOC2 Type II compliant. Your data is siloed, encrypted, and is never used to train foundational models shared with other customers.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-ui-bg pt-20 pb-10 border-t border-ui-border">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-brand rounded flex items-center justify-center text-white">
<iconify-icon className="text-[10px]" icon="solar:bolt-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tighter text-ui-text block">ALRIS</span>
</div>
<p className="text-sm text-ui-muted font-normal max-w-xs mb-6 leading-relaxed">
                        The omnichannel AI platform that unifies voice, text, and CRM for sophisticated teams.
                    </p>
<div className="flex items-center gap-4 text-ui-muted">
<a className="hover:text-brand transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:minimalistic-twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-brand transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-ui-text mb-4">Product</h4>
<ul className="space-y-3 text-sm text-ui-muted font-normal">
<li><a className="hover:text-brand transition-colors" href="#">Voice AI</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Email Automation</a></li>
<li><a className="hover:text-brand transition-colors" href="#">SMS &amp; Chat</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-ui-text mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-ui-muted font-normal">
<li><a className="hover:text-brand transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-ui-text mb-4">Company</h4>
<ul className="space-y-3 text-sm text-ui-muted font-normal">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Security</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-ui-border flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-ui-muted font-normal">
                    © 2024 Alris Inc. All rights reserved.
                </p>
<div className="flex items-center gap-2 text-xs text-ui-muted font-medium">
<span className="w-2 h-2 rounded-full bg-accent shadow-glow shadow-accent/50 animate-pulse"></span> All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
