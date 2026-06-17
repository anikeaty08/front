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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-main flex items-center justify-center text-white text-xs font-bold">V</div>
                VIRELLO LABS
            </a>
<a className="hidden md:inline-flex bg-white/10 hover:bg-white/15 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors border border-white/10 items-center gap-2" href="#booking">
                Get a Free Growth Plan
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-slate-950 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#EB3D62] rounded-full blur-[120px] opacity-15 -z-10 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto relative px-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB3D62] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB3D62]"></span>
</span>
<span className="tracking-wide">Accepting New Clients for Q4</span>
</div>

<h1 className="md:text-8xl leading-[1.05] text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter mb-8">
                Stop Chasing Leads.<br/>
<span className="text-slate-600">Let Them Come to You.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                We build the automated systems (Ads + Web Pages) that fill your schedule with paying clients. No tech skills required.
            </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<a className="group relative overflow-hidden bg-white text-slate-950 font-semibold text-sm py-3.5 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2" href="#booking">
<span className="relative z-10 flex items-center gap-2">
                        Get A Free Growth Plan
                        <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent translate-x-[-100%] group-hover:animate-shine opacity-50 w-full h-full"></div>
</a>
<a className="text-slate-400 hover:text-white text-sm font-medium py-3 px-8 transition-colors flex items-center gap-2 border border-transparent hover:border-white/10 rounded-full" href="#results">
                    View Results
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</a>
</div>

<div className="relative mx-auto max-w-3xl">

<div className="absolute -inset-1 bg-gradient-to-r from-[#EB3D62] to-purple-600 rounded-2xl blur opacity-20"></div>
<div className="relative glass bg-slate-950/80 rounded-2xl p-8 border border-white/10">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#EB3D62]/50 to-emerald-500/50 -translate-y-1/2 -z-10"></div>

<div className="flex flex-col items-center gap-4 relative bg-slate-950 px-4 py-2 rounded-xl border border-transparent hover:border-white/5 transition-colors">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 border border-white/5 shadow-lg group">
<iconify-icon icon="solar:user-linear" width="26"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-sm text-white font-medium mb-0.5">Your Customer</span>
<span className="block text-[10px] text-slate-500 uppercase tracking-widest">Searching</span>
</div>
</div>

<div className="md:hidden">
<iconify-icon className="text-slate-600" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="flex flex-col items-center gap-4 relative bg-slate-950 px-4 py-2 rounded-xl border border-transparent hover:border-[#EB3D62]/20 transition-colors">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#EB3D62]/10 to-[#EB3D62]/5 flex items-center justify-center text-[#EB3D62] border border-[#EB3D62]/30 shadow-[0_0_20px_-5px_rgba(235,61,98,0.3)] relative">
<div className="absolute inset-0 bg-[#EB3D62] blur-xl opacity-20"></div>
<iconify-icon className="relative z-10" icon="solar:target-linear" width="26"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-sm text-white font-medium mb-0.5">Targeted Ad</span>
<span className="block text-[10px] text-[#EB3D62] uppercase tracking-widest">Connected</span>
</div>
</div>

<div className="md:hidden">
<iconify-icon className="text-slate-600" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="flex flex-col items-center gap-4 relative bg-slate-950 px-4 py-2 rounded-xl border border-transparent hover:border-emerald-500/20 transition-colors">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] relative">
<div className="absolute inset-0 bg-emerald-500 blur-xl opacity-20"></div>
<iconify-icon className="relative z-10" icon="solar:phone-calling-linear" width="26"></iconify-icon>
</div>
<div className="text-center">
<span className="block text-sm text-white font-medium mb-0.5">Phone Rings</span>
<span className="block text-[10px] text-emerald-500 uppercase tracking-widest">Revenue</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 border-t border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-medium">From "Quiet" to "Fully Booked"</h2>
<p className="text-slate-400 font-light text-lg">See why plumbers, consultants, and local shops trust Virello Labs.</p>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="glass min-w-[300px] md:min-w-[400px] p-8 rounded-2xl flex-shrink-0 snap-center relative group hover:border-[#EB3D62]/30 transition-colors">
<div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center text-[#EB3D62]">
<iconify-icon icon="solar:quote-up-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic mb-6">"Before Virello, I was relying on word of mouth. Now I have to turn down jobs because my calendar is completely full. The system just works."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="text-white text-sm font-medium">Mike S.</p>
<p className="text-slate-500 text-xs">Master Plumber</p>
</div>
</div>
</div>

<div className="glass min-w-[300px] md:min-w-[400px] p-8 rounded-2xl flex-shrink-0 snap-center relative group hover:border-[#EB3D62]/30 transition-colors">
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic mb-6">"They don't use confusing marketing jargon. They just told me what they'd do, they did it, and the phone started ringing. Simple as that."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="text-white text-sm font-medium">Sarah Jenkins</p>
<p className="text-slate-500 text-xs">Boutique Owner</p>
</div>
</div>
</div>

<div className="glass min-w-[300px] md:min-w-[400px] p-8 rounded-2xl flex-shrink-0 snap-center relative group hover:border-[#EB3D62]/30 transition-colors">
<div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic mb-6">"I wasted thousands on other agencies. Virello's landing page setup converted 3x better in the first week. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="text-white text-sm font-medium">David Ross</p>
<p className="text-slate-500 text-xs">HVAC Specialist</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="results">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-6">
<iconify-icon icon="solar:graph-new-linear"></iconify-icon>
                        Verified Results
                    </div>
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-6 font-semibold">The Lab Report</h2>
<p className="text-slate-400 text-lg font-light mb-8 leading-relaxed">
                        Real numbers. Real revenue. See exactly how we engineered growth for businesses just like yours.
                    </p>
<div className="space-y-6">
<div className="border-l-2 border-[#EB3D62] pl-6">
<p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Company</p>
<p className="text-white text-lg">Metro Plumbing Co.</p>
</div>
<div className="border-l-2 border-[#EC5A4D] pl-6">
<p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Result</p>
<p className="text-3xl text-white font-semibold">+40% <span className="text-slate-400 text-xl font-light">Booked Jobs in 30 Days</span></p>
</div>
</div>
<a className="inline-flex items-center gap-2 mt-10 text-[#EC5A4D] hover:text-[#EB3D62] transition-colors font-medium border-b border-[#EC5A4D]/30 pb-0.5 hover:border-[#EB3D62]" href="#">
                        See More Results
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:w-1/2 w-full">
<div className="glass-high rounded-3xl p-2 md:p-4 border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-main opacity-5 blur-3xl"></div>
<div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5">

<div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-around px-8 opacity-30">
<div className="w-8 bg-[#EB3D62] h-[20%] rounded-t-sm"></div>
<div className="w-8 bg-[#EB3D62] h-[35%] rounded-t-sm"></div>
<div className="w-8 bg-[#EB3D62] h-[45%] rounded-t-sm"></div>
<div className="w-8 bg-[#EB3D62] h-[60%] rounded-t-sm"></div>
<div className="w-8 bg-[#EB3D62] h-[90%] rounded-t-sm shadow-[0_0_20px_rgba(235,61,98,0.5)]"></div>
</div>
<div className="z-10 bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-semibold">The Growth Formula</h2>
<p className="text-slate-400 font-light">You don't need a hundred different services. You just need the ones that work. We combine these powerful tools to get your phone ringing.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl border border-white/5 hover:border-[#EB3D62]/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Google Ads Services</h3>
<p className="text-sm text-[#EC5A4D] font-mono mb-4">Est. A$1,500/month</p>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                        Be the first name they see when they search "emergency repair" or "shop near me." We ensure you show up exactly when customers are ready to buy.
                    </p>
<div className="flex items-start gap-2 text-xs text-slate-300 border-t border-white/5 pt-4">
<iconify-icon className="text-blue-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Capture customers who need help right now.
                    </div>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 hover:border-[#EB3D62]/40 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Social Ads</h3>
<p className="text-sm text-slate-500 mb-4">Facebook &amp; Instagram</p>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                        We put your business in front of local customers where they spend their time. We create ads that stop the scroll and make them want to book you.
                    </p>
<div className="flex items-start gap-2 text-xs text-slate-300 border-t border-white/5 pt-4">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Find people before they find your competitors.
                    </div>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 hover:border-[#EB3D62]/40 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#EB3D62]/10 text-[#EB3D62] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#EB3D62]/20">
<iconify-icon icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">High-Converting Pages</h3>
<p className="text-sm text-slate-500 mb-4">Sales-Focused Design</p>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                        Forget expensive, complicated websites. We build focused sites designed to do one thing: convince visitors to call you or fill out a form.
                    </p>
<div className="flex items-start gap-2 text-xs text-slate-300 border-t border-white/5 pt-4">
<iconify-icon className="text-[#EB3D62] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Your 24/7 salesperson that never sleeps.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-semibold">How We Work <span className="text-slate-600 font-semibold">(The Virello Method)</span></h2>
<p className="text-slate-400 font-light">We handle the heavy lifting. You handle the new clients.</p>
</div>
<div className="relative">

<div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#EB3D62] to-slate-800 md:left-1/2"></div>

<div className="relative flex md:justify-end mb-12 group">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#EB3D62] z-10 group-hover:scale-125 transition-transform"></div>
<div className="ml-16 md:ml-0 md:mr-16 md:w-[40%] text-left md:text-right">
<span className="text-[#EB3D62] font-mono text-sm mb-1 block">01.</span>
<h3 className="text-xl font-medium text-white mb-2">The Diagnosis</h3>
<p className="text-slate-400 font-light text-sm">We chat about your business. Who do you want to reach? What is your most profitable service? We don't guess; we ask.</p>
</div>
</div>

<div className="relative flex md:justify-start mb-12 group">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#EB3D62] z-10 group-hover:scale-125 transition-transform"></div>
<div className="ml-16 md:ml-16 md:w-[40%]">
<span className="text-[#EB3D62] font-mono text-sm mb-1 block">02.</span>
<h3 className="text-xl font-medium text-white mb-2">The Blueprint</h3>
<p className="text-slate-400 font-light text-sm">Our team designs your custom landing page and ad strategy. We write the words that sell and choose the images that work.</p>
</div>
</div>

<div className="relative flex md:justify-end mb-12 group">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#EB3D62] z-10 group-hover:scale-125 transition-transform"></div>
<div className="ml-16 md:ml-0 md:mr-16 md:w-[40%] text-left md:text-right">
<span className="text-[#EB3D62] font-mono text-sm mb-1 block">03.</span>
<h3 className="text-xl font-medium text-white mb-2">The Launch</h3>
<p className="text-slate-400 font-light text-sm">We flip the switch. Your ads go live to the right people in your local area.</p>
</div>
</div>

<div className="relative flex md:justify-start mb-12 group">
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#EB3D62] z-10 group-hover:scale-125 transition-transform"></div>
<div className="ml-16 md:ml-16 md:w-[40%]">
<span className="text-[#EB3D62] font-mono text-sm mb-1 block">04.</span>
<h3 className="text-xl font-medium text-white mb-2">The Optimization</h3>
<p className="text-slate-400 font-light text-sm">We test daily, fix fast, and scale what works.</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="bg-white text-slate-900 hover:bg-slate-200 font-medium text-sm py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2" href="#booking">
                    Start Your Process Today
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 font-semibold">Why Virello Labs?</h2>
<p className="text-slate-400 font-light">Most agencies overcomplicate things to charge you more. We keep it simple to make you more.</p>
</div>
<div className="overflow-x-auto">
<div className="min-w-[600px] w-full">
<div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-white/10 text-sm font-medium tracking-wide uppercase text-slate-500">
<div>Criteria</div>
<div className="text-center">The Other Guys</div>
<div className="text-center text-[#EC5A4D]">Virello Labs</div>
</div>

<div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors rounded-lg px-2">
<div className="text-white font-medium">Communication</div>
<div className="text-center text-slate-400 text-sm">Confusing jargon &amp; tech-speak</div>
<div className="text-center text-white text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Plain English
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors rounded-lg px-2">
<div className="text-white font-medium">Metrics</div>
<div className="text-center text-slate-400 text-sm">Focuses on "Likes" and "Clicks"</div>
<div className="text-center text-white text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Phones Ringing
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors rounded-lg px-2">
<div className="text-white font-medium">Commitment</div>
<div className="text-center text-slate-400 text-sm">Long contracts lock you in</div>
<div className="text-center text-white text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Flexible terms
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors rounded-lg px-2">
<div className="text-white font-medium">Speed</div>
<div className="text-center text-slate-400 text-sm">Weeks or months</div>
<div className="text-center text-white text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Live in days
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 py-6 items-center hover:bg-white/[0.02] transition-colors rounded-lg px-2">
<div className="text-white font-medium">Transparency</div>
<div className="text-center text-slate-400 text-sm">Mystery budget allocation</div>
<div className="text-center text-white text-sm flex items-center justify-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                            Total Transparency
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="booking">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EC5A4D] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/2">
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-semibold">Let’s Fill Your Calendar</h2>
<p className="text-slate-400 text-lg font-light mb-8">
                    Jump on a quick, no-pressure call with a specialist. We’ll look at your business and tell you exactly how many new leads you could be getting next month.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<div className="w-6 h-6 rounded-full bg-[#EB3D62]/20 flex items-center justify-center text-[#EB3D62]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="font-light">No technical knowledge needed.</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-6 h-6 rounded-full bg-[#EB3D62]/20 flex items-center justify-center text-[#EB3D62]">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="font-light">Get a clear roadmap in 20 minutes.</span>
</li>
</ul>
<div className="glass p-6 rounded-2xl border border-white/10 max-w-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">

<iconify-icon className="text-slate-500" height="100%" icon="solar:user-circle-linear" width="100%"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Book a Strategy Call</p>
<p className="text-slate-500 text-xs">Usually 15-20 min</p>
</div>
</div>
<div className="text-slate-400 text-sm font-light">
                        "We promise no hard selling. Just a friendly chat to see if we're a good fit."
                    </div>
</div>
</div>

<div className="lg:w-1/2">
<div className="glass-high p-8 rounded-3xl border border-white/10">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">First Name</label>
<input className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#EB3D62] transition-colors placeholder-slate-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#EB3D62] transition-colors placeholder-slate-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#EB3D62] transition-colors placeholder-slate-700" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Website (Optional)</label>
<input className="w-full bg-transparent border-b border-slate-700 text-white py-2 focus:outline-none focus:border-[#EB3D62] transition-colors placeholder-slate-700" placeholder="www.company.com" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-gradient-main text-white font-medium py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(235,61,98,0.5)] transition-all flex items-center justify-center gap-2" type="submit">
                                Confirm Booking
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-slate-600 text-xs mt-4">No payment required for consultation.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl text-white tracking-tight mb-12 text-center font-semibold">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group glass rounded-xl overflow-hidden border border-white/5 open:bg-white/5 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">Do I need to be good with computers?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light leading-relaxed">
                        Not at all. We handle all the tech, design, and setup. You just need to answer your phone.
                    </div>
</details>

<details className="group glass rounded-xl overflow-hidden border border-white/5 open:bg-white/5 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">How fast will I see results?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light leading-relaxed">
                        While long-term channels like SEO take months, paid ads can begin producing leads within days. Most clients see early traction within 48–72 hours, with stronger results as campaigns are refined.
                    </div>
</details>

<details className="group glass rounded-xl overflow-hidden border border-white/5 open:bg-white/5 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-white font-medium">Is this only for big businesses?</span>
<iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light leading-relaxed">
                        No! We specialize in small to mid-sized businesses, specifically trade services and local shops.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/10 relative bg-slate-950">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
<div>
<a className="text-2xl tracking-tighter text-white flex items-center gap-2 mb-6 font-semibold" href="#">
<div className="w-8 h-8 rounded-md bg-gradient-main flex items-center justify-center text-white text-sm font-bold">V</div>
                    VIRELLO LABS
                </a>
<h3 className="text-white font-medium mb-4">We’re new to the name—but not to the work.</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6 max-w-md">
                    Virello Labs was built by seasoned digital marketers who wanted a better way to grow service businesses—without bloated agency fees or unnecessary complexity. We design and run data-driven growth systems that generate real leads and scale with your business.
                </p>
<div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-widest">
                    Developed in the lab
                    <span className="w-1 h-1 bg-[#EB3D62] rounded-full"></span>
                    Designed for scale
                </div>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="grid grid-cols-2 gap-12 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-slate-400 font-light">
<li><a className="hover:text-[#EB3D62] transition-colors" href="#">Google Ads</a></li>
<li><a className="hover:text-[#EB3D62] transition-colors" href="#">Social Growth</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-slate-400 font-light">
<li><a className="hover:text-[#EB3D62] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#EB3D62] transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
</div>
<div className="mt-12 text-slate-600 text-xs">
                    © 2023 Virello Labs. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
