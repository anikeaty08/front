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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/05 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<span className="text-white text-lg font-medium tracking-tight">Aura</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#testimonials">Stories</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<a className="bg-white text-black hover:bg-slate-200 transition-colors px-4 py-2 rounded-full text-xs font-semibold tracking-wide" href="#">
                    Download
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative">
<div className="max-w-4xl mx-auto text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs text-purple-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span>Version 2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Connect instantly. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Totally secure.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Experience crystal clear voice calls and end-to-end encryption. 
                Aura keeps your conversations private and your team in sync.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="flex items-center gap-3 bg-[#111] border border-white/10 hover:border-white/30 hover:bg-[#161616] text-white px-5 py-3 rounded-xl transition-all w-48 justify-center group" href="#">
<iconify-icon className="text-slate-300 group-hover:text-white transition-colors" icon="solar:apple-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] text-slate-400 leading-none mb-1">Download on the</div>
<div className="text-sm font-medium leading-none">App Store</div>
</div>
</a>
<a className="flex items-center gap-3 bg-[#111] border border-white/10 hover:border-white/30 hover:bg-[#161616] text-white px-5 py-3 rounded-xl transition-all w-48 justify-center group" href="#">
<iconify-icon className="text-slate-300 group-hover:text-white transition-colors" icon="solar:play-linear" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] text-slate-400 leading-none mb-1">Get it on</div>
<div className="text-sm font-medium leading-none">Google Play</div>
</div>
</a>
</div>

<div className="relative w-full max-w-sm mx-auto animate-float">

<div className="relative rounded-[2.5rem] border-[8px] border-[#1a1a1a] bg-[#050505] overflow-hidden shadow-2xl shadow-purple-900/20 aspect-[9/19]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1a1a1a] rounded-b-xl z-20"></div>

<div className="h-full w-full bg-[#050505] relative flex flex-col">

<div className="pt-12 pb-4 px-6 border-b border-white/5 flex justify-between items-center">
<h3 className="text-white font-medium text-lg tracking-tight">Chats</h3>
<div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</div>
</div>

<div className="flex-1 p-4 space-y-4">

<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-white truncate">Design Team</div>
<div className="text-[10px] text-slate-500">10:42 AM</div>
</div>
<div className="text-xs text-slate-400 truncate">Sarah: Updated the fig files 📁</div>
</div>
<div className="h-2 w-2 rounded-full bg-purple-500"></div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">JM</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-white truncate">James Miller</div>
<div className="text-[10px] text-slate-500">Yesterday</div>
</div>
<div className="text-xs text-slate-500 truncate">Can we jump on a quick call?</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">AL</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-white truncate">Anna Lee</div>
<div className="text-[10px] text-slate-500">Tue</div>
</div>
<div className="text-xs text-slate-500 truncate">The encrypted key is sent.</div>
</div>
</div>
</div>

<div className="mt-auto border-t border-white/5 p-4 flex justify-around text-slate-500">
<iconify-icon className="text-white" icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Powerful features, simple design</h2>
<p className="text-slate-400 text-lg">Everything you need to communicate effectively without the noise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass p-8 rounded-2xl group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">End-to-End Encryption</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Your messages are encrypted on your device and can only be read by the recipient. 
                    No one else can read your data, not even us.
                </p>
</div>

<div className="glass p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Group Chats</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Create groups for your team, family, or friends. Manage permissions, share updates, 
                    and keep everyone in the loop effortlessly.
                </p>
</div>

<div className="glass p-8 rounded-2xl group hover:border-pink-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Crystal Clear Voice</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    High-fidelity voice and video calls that feel like you're in the same room. 
                    Optimized for low-bandwidth connections.
                </p>
</div>

<div className="glass p-8 rounded-2xl group hover:border-emerald-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:file-send-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Unlimited File Sharing</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Send photos, videos, and documents of any size without compression. 
                    Your media stays original quality, always.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">Loved by thousands</h2>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar">

<div className="min-w-[85vw] md:min-w-[400px] snap-center glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-purple-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">"Finally, a chat app that respects my privacy without looking like it was built in the 90s. The design is absolutely stunning."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-slate-500">Product Designer</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-purple-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">"We switched our entire agency to Aura. The file sharing capabilities alone are worth the download. Super fast."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"></div>
<div>
<div className="text-sm font-medium text-white">Marcus Chen</div>
<div className="text-xs text-slate-500">Creative Director</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-purple-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 leading-relaxed mb-6">"Voice quality is exceptional even on mobile data. It's become my go-to app for calling international clients."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Freelancer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-2xl mx-auto" id="faq">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Frequently asked questions</h2>
<div className="space-y-3">

<details className="group rounded-xl bg-[#080808] border border-white/10 open:bg-[#111] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-slate-200 select-none">
                    Is Aura free to use?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    Yes, Aura is completely free for personal use. We offer a premium plan for businesses that require advanced administrative controls.
                </div>
</details>

<details className="group rounded-xl bg-[#080808] border border-white/10 open:bg-[#111] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-slate-200 select-none">
                    How secure is the encryption?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    We use state-of-the-art AES-256 encryption. Your private keys are stored only on your device, ensuring true end-to-end security.
                </div>
</details>

<details className="group rounded-xl bg-[#080808] border border-white/10 open:bg-[#111] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-slate-200 select-none">
                    Can I use it on multiple devices?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    Yes, you can link up to 4 devices to your account. Your message history syncs securely across all linked devices.
                </div>
</details>

<details className="group rounded-xl bg-[#080808] border border-white/10 open:bg-[#111] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-slate-200 select-none">
                    Is there a file size limit?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    You can send files up to 2GB in size for free. Premium users can send files up to 10GB.
                </div>
</details>

<details className="group rounded-xl bg-[#080808] border border-white/10 open:bg-[#111] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-slate-200 select-none">
                    Does it support video calls?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed">
                    Absolutely. Aura supports HD video calls for one-on-one conversations and groups of up to 32 people.
                </div>
</details>
</div>
</section>

<footer className="border-t border-white/10 bg-[#030303] pt-20 pb-12 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
</div>
<span className="text-white text-lg font-medium tracking-tight">Aura</span>
</a>
<p className="text-sm text-slate-400 mb-8 max-w-sm">
                        Stay up to date with the latest features and security updates from the Aura team.
                    </p>
<form className="flex gap-2 max-w-xs">
<input className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-purple-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                            Subscribe
                        </button>
</form>
</div>

<div className="md:col-span-2 md:col-start-7">
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Aura Technologies Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
