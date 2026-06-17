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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-purple-900/20 rounded-full blur-3xl mix-blend-screen opacity-30 animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-orange-900/10 rounded-full blur-3xl mix-blend-screen opacity-30"></div>
<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[40rem] h-[40rem] bg-pink-900/10 rounded-full blur-[100px] opacity-20"></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2 animate-sequence-1" href="#">
<div className="w-6 h-6 rounded-md instagram-gradient-bg flex items-center justify-center text-xs text-white shadow-lg">E</div>
                Eventcare
            </a>
<nav className="hidden md:flex items-center gap-8 animate-sequence-1">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Company</a>
</nav>
<div className="flex items-center gap-4 animate-sequence-1">
<button className="hidden md:flex text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</button>
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all backdrop-blur-md">Contact us</button>
</div>
</div>
</header>

<section className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 w-full min-h-screen max-w-7xl mx-auto pt-20">
<div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] animate-sequence-2">
<span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">EVENTCARE</span>
</h1>
<h2 className="md:text-3xl lg:text-4xl leading-snug animate-sequence-3 text-2xl font-medium tracking-tight max-w-3xl pb-1">
<span className="instagram-gradient-text">AI-First OS dedicated to venues that care about their time, clients, team and revenues.</span>
</h2>
<p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed animate-sequence-4">
                Our AI doesn't replace the human touch; it amplifies it. We give venue teams their time back, clients peace of mind, and everyone involved the care they deserve.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-sequence-4 w-full sm:w-auto">
<button className="group relative px-8 py-3.5 rounded-full instagram-gradient-bg text-white font-medium text-base shadow-[0_0_20px_rgba(225,48,108,0.3)] hover:shadow-[0_0_30px_rgba(225,48,108,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 w-full sm:w-auto overflow-hidden">
<div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
<span className="relative flex items-center justify-center gap-2">
                        Discover
                        <iconify-icon height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
</div>
</div>
<div className="absolute bottom-12 animate-sequence-4 opacity-50">
<div className="flex flex-col items-center gap-2">
<span className="text-xs font-medium tracking-widest uppercase text-gray-600">Scroll to explore</span>
<iconify-icon className="text-gray-600 animate-bounce" height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>
</section>

<div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 pb-32">

<section>
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">The Industry Reality</h2>
<p className="text-lg text-gray-400">Venues aren't looking for "optimization" in cold tech-speak. They want support in a high-stakes, relationship-driven world.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-400 group-hover:text-pink-500 transition-colors" icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Human-Centric</h3>
<p className="text-sm text-gray-500 leading-relaxed">Traditional businesses not ready for cold tech-speak. Venues live or die by word-of-mouth.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-400 group-hover:text-pink-500 transition-colors" icon="lucide:heart-handshake" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">High Stakes</h3>
<p className="text-sm text-gray-500 leading-relaxed">Weddings and milestone celebrations are emotional. There is no room for error.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-400 group-hover:text-pink-500 transition-colors" icon="lucide:network" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Complex Ecosystem</h3>
<p className="text-sm text-gray-500 leading-relaxed">Managing multiple stakeholders simultaneously: staff, clients, caterers, vendors, and guests.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-400 group-hover:text-pink-500 transition-colors" icon="lucide:life-buoy" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Need for Support</h3>
<p className="text-sm text-gray-500 leading-relaxed">People are overwhelmed. They aren't seeking efficiency tools; they are seeking genuine help.</p>
</div>
</div>
</section>

<section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 p-8 md:p-16">
<div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-orange-900/10 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Why "Care" Is The Perfect Bridge</h2>
<p className="text-lg text-gray-400">EventCare positions AI as a helpful assistant, not a replacement. We bridge the gap between efficiency and hospitality.</p>
<div className="pt-4 space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full instagram-gradient-bg flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">We care about venue owners</h4>
<p className="text-sm text-gray-500">Giving them time back for what matters.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full instagram-gradient-bg flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">We care about event planners</h4>
<p className="text-sm text-gray-500">Reducing their stress and anxiety instantly.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full instagram-gradient-bg flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">We care about guests</h4>
<p className="text-sm text-gray-500">Ensuring smooth, memorable experiences.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full instagram-gradient-bg flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">We care about the ecosystem</h4>
<p className="text-sm text-gray-500">Partners, vendors, and staff all aligned.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] rounded-xl bg-black/20 border border-white/5 p-8 flex flex-col justify-center gap-6">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-600/20 blur-3xl rounded-full"></div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs">AI</div>
<p className="text-sm text-gray-300">"I've drafted responses for your 3 pending wedding inquiries."</p>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm ml-8">
<div className="w-10 h-10 rounded-full bg-pink-900/50 border border-pink-500/30 flex items-center justify-center text-xs text-pink-200">You</div>
<p className="text-sm text-gray-300">"Thanks! Sent. Now I can focus on the tasting with Sarah."</p>
</div>
<div className="mt-4 text-center">
<span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 text-xs font-medium text-pink-300">
                            Technology that serves people, not replaces them
                        </span>
</div>
</div>
</div>
</section>

<section className="text-center py-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
                The Emotional Intelligence
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-6 rounded-xl bg-gray-900/50 border border-white/5">
<p className="text-lg font-medium text-white">"We understand your world"</p>
</div>
<div className="p-6 rounded-xl bg-gray-900/50 border border-white/5">
<p className="text-lg font-medium text-white">"Here to help, not disrupt"</p>
</div>
<div className="p-6 rounded-xl bg-gray-900/50 border border-white/5">
<p className="text-lg font-medium text-white">"Technology serving people"</p>
</div>
<div className="p-6 rounded-xl bg-gray-900/50 border border-white/5">
<p className="text-lg font-medium text-white">"Connection over code"</p>
</div>
</div>
</section>

<section>
<div className="mb-12 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Brand Positioning</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">AI that cares</span>
<span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">Technology with heart</span>
<span className="px-4 py-1.5 rounded-full border-pink-500/20 bg-pink-500/10 text-sm text-pink-300">Where AI meets hospitality</span>
<span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">Care at scale</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-3">
<iconify-icon className="text-pink-500 mb-2" icon="lucide:clock" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white">Care for your time</h3>
<p className="text-sm text-gray-400">Automation that frees you up.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-orange-500 mb-2" icon="lucide:message-circle" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white">Care for your clients</h3>
<p className="text-sm text-gray-400">Instant, personalized responses.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-pink-600 mb-2" icon="lucide:trending-up" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white">Care for your business</h3>
<p className="text-sm text-gray-400">More bookings, happier customers.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-purple-500 mb-2" icon="lucide:smile" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white">Care for peace of mind</h3>
<p className="text-sm text-gray-400">Less stress, more success.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10 text-center">Why This Beats "Tech-Forward" Names</h2>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50">
<div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 bg-white/5">
<div className="p-6 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">Tech Names (EventFlow, etc)</div>
<div className="p-6 text-center text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-b from-white/5 to-transparent">EventCare</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
<div className="p-6 text-sm text-gray-400">Appeals to early adopters</div>
<div className="p-6 text-sm font-medium text-white bg-gradient-to-r from-transparent to-pink-500/5">Appeals to the mainstream market</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
<div className="p-6 text-sm text-gray-400">Sounds like software</div>
<div className="p-6 text-sm font-medium text-white bg-gradient-to-r from-transparent to-pink-500/5">Sounds like a partner</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
<div className="p-6 text-sm text-gray-400">Emphasizes efficiency</div>
<div className="p-6 text-sm font-medium text-white bg-gradient-to-r from-transparent to-pink-500/5">Emphasizes outcomes</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
<div className="p-6 text-sm text-gray-400">"Will this replace me?"</div>
<div className="p-6 text-sm font-medium text-white bg-gradient-to-r from-transparent to-pink-500/5">"This will help me"</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 group hover:bg-white/[0.02] transition-colors">
<div className="p-6 text-sm text-gray-400">Rational</div>
<div className="p-6 text-sm font-medium text-white bg-gradient-to-r from-transparent to-pink-500/5">Emotional + Rational</div>
</div>
</div>
</section>

<section className="py-20 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Start caring today.</h2>
<div className="flex justify-center gap-4">
<button className="px-8 py-3 rounded-full instagram-gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity">
                    Get Started
                </button>
<button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all">
                    Talk to us
                </button>
</div>
</section>
</div>

    </>
  );
}
