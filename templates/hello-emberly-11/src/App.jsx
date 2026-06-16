import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Simple intersection observer for fade-in elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">

<div className="absolute -top-[20%] left-[20%] w-[60%] h-[60%] bg-amber-600/10 rounded-full blur-[120px] animate-breathe"></div>

<div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-blue-950/20 rounded-full blur-[100px]"></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.15]" style={{maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}>
<defs>
<pattern height="40" id="constellation" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<circle className="text-amber-500/50" cx="1" cy="1" fill="currentColor" r="1"></circle>
</pattern>
</defs>
<rect fill="url(#constellation)" height="100%" width="100%"></rect>
</svg>
</div>

<header className="fixed top-0 z-50 w-full backdrop-blur-md border-b border-white/5 bg-[#0B0E14]/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-transform duration-500">
<svg className="text-[#0B0E14]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 4v2"></path><path d="M12 18v2"></path><path d="M4 12h2"></path><path d="M18 12h2"></path><path d="M20 6l-1.5 1.5"></path><path d="M14.5 11.5L6 20"></path><path d="M20 18l-1.5-1.5"></path><path d="M6 6l1.5 1.5"></path></svg>
</div>
<span className="font-medium tracking-tight text-white text-lg">Hello Emberly</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-amber-100 transition-colors" href="#philosophy">Philosophy</a>
<a className="text-sm font-medium text-slate-400 hover:text-amber-100 transition-colors" href="#memories">The Village</a>
<a className="text-sm font-medium text-slate-400 hover:text-amber-100 transition-colors" href="#stories">Stories</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#0B0E14] transition-all bg-amber-100 rounded-full hover:bg-white hover:scale-105 focus:outline-none ring-1 ring-amber-200/50 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]" href="#conversation">
                Begin a conversation
            </a>

<button className="md:hidden text-slate-300">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mb-8 animate-float">
<span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs font-medium text-amber-200 tracking-wide uppercase">Connecting Generations</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                You are never alone <br/>
<span className="text-gradient-gold italic font-serif">in a village.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                A gentle companion for connection, memory, and purpose. Weaving stories into a living legacy that lights the way for those you love.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-full transition-all shadow-[0_0_30px_-10px_rgba(217,119,6,0.5)] flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
                    Begin a conversation
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<i className="w-5 h-5 text-amber-400" data-lucide="play-circle"></i>
                    Watch our story
                </button>
</div>
</div>

<div className="absolute top-1/2 left-10 w-64 h-64 bg-amber-900/20 rounded-full blur-[80px] -z-10 animate-drift"></div>
<div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] -z-10 animate-drift delay-200"></div>
</section>

<section className="relative py-20 px-6" id="memories">
<div className="max-w-6xl mx-auto">

<div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden border border-white/10 bg-[#0F1218] shadow-2xl group">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E14]/50 to-[#0B0E14] z-10"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-80 transition-transform duration-[10s] group-hover:scale-105">

<div className="absolute w-32 h-32 rounded-full bg-amber-500/10 blur-xl flex items-center justify-center z-20 animate-breathe">
<div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-500/30 flex items-center justify-center">
<i className="w-8 h-8 text-amber-200" data-lucide="sun"></i>
</div>
</div>


<div className="absolute top-[30%] left-[30%] animate-float delay-100">
<div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center backdrop-blur-md">
<i className="w-5 h-5 text-blue-200/70" data-lucide="image"></i>
</div>
<div className="absolute top-full mt-2 w-32 text-center">
<span className="text-xs text-slate-400 tracking-wide">The Summer House</span>
</div>
</div>

<div className="absolute bottom-[40%] right-[25%] animate-float delay-200">
<div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-400/20 flex items-center justify-center backdrop-blur-md">
<i className="w-6 h-6 text-rose-200/70" data-lucide="music"></i>
</div>
<div className="absolute top-full mt-2 w-32 text-center">
<span className="text-xs text-slate-400 tracking-wide">Lullabies</span>
</div>
</div>

<div className="absolute top-[20%] right-[40%] animate-float delay-300">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center backdrop-blur-md">
<i className="w-4 h-4 text-emerald-200/70" data-lucide="feather"></i>
</div>
</div>

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-white/10" style={{maskImage: 'radial-gradient(circle, white, transparent)'}}>
<line stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="30%"></line>
<line stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="75%" y1="50%" y2="60%"></line>
<line stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="60%" y1="50%" y2="20%"></line>
</svg>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-30 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Your Digital Village</h3>
<p className="text-slate-400 text-sm mt-2 max-w-md">A private sanctuary where memories are preserved, connections are strengthened, and your story lights up the dark.</p>
</div>
<div className="flex gap-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-[#0B0E14] bg-slate-700 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-[#0B0E14] bg-amber-700 flex items-center justify-center text-xs text-white">MA</div>
<div className="w-10 h-10 rounded-full border-2 border-[#0B0E14] bg-indigo-700 flex items-center justify-center text-xs text-white">RK</div>
</div>
<div className="h-10 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center text-xs text-white">
                            + 12 Family Members
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Living Legacy</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Stories shouldn't fade. We help you capture the voice, the laughter, and the wisdom that defines who you are, creating a timeless archive for future generations.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Emotional Dignity</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Designed with profound respect for the human experience. A safe space free from noise, focused entirely on what matters most: dignity and connection.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Community Warmth</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        "You are never alone in a village." Invite family, friends, and caregivers into a private circle of support, updates, and shared joy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-12 tracking-tight text-center">Memories made of light</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative aspect-square rounded-full overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[#0F1218] rounded-full border border-white/10 group-hover:border-amber-500/50 transition-colors duration-500"></div>
<div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-900/40 via-amber-600/20 to-transparent blur-xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm font-medium text-amber-100 tracking-wide">1964</span>
</div>
</div>

<div className="relative aspect-square rounded-full overflow-hidden group cursor-pointer lg:mt-12">
<div className="absolute inset-0 bg-[#0F1218] rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500"></div>
<div className="absolute inset-4 rounded-full bg-gradient-to-bl from-blue-900/40 via-indigo-600/20 to-transparent blur-xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm font-medium text-blue-100 tracking-wide">The Lake</span>
</div>
</div>

<div className="relative aspect-square rounded-full overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[#0F1218] rounded-full border border-white/10 group-hover:border-rose-500/50 transition-colors duration-500"></div>
<div className="absolute inset-4 rounded-full bg-gradient-to-t from-rose-900/40 via-pink-600/20 to-transparent blur-xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm font-medium text-rose-100 tracking-wide">Letters</span>
</div>
</div>

<div className="relative aspect-square rounded-full overflow-hidden group cursor-pointer lg:mt-12">
<div className="absolute inset-0 bg-[#0F1218] rounded-full border border-white/10 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
<div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-900/40 via-teal-600/20 to-transparent blur-xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-sm font-medium text-emerald-100 tracking-wide">Sunday</span>
</div>
</div>
</div>
<p className="text-center text-slate-500 text-sm mt-12">Every memory is a star in your constellation.</p>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-2xl font-medium text-slate-200">Village Voices</h2>
</div>
<div className="relative overflow-hidden w-full">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0E14] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0E14] to-transparent z-10"></div>
<div className="flex gap-6 w-max animate-[marquee-ltr_60s_linear_infinite] hover:[animation-play-state:paused]">

<div className="w-[400px] p-6 rounded-2xl bg-[#0F1218] border border-white/5">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"It felt like holding a hand across the distance. Emberly helped my mother tell stories I had never heard before."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="text-xs text-slate-400">Sarah J.</span>
</div>
</div>

<div className="w-[400px] p-6 rounded-2xl bg-[#0F1218] border border-white/5">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"A dignified way to keep our family connected. The interface is so gentle and easy to use."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="text-xs text-slate-400">Michael R.</span>
</div>
</div>

<div className="w-[400px] p-6 rounded-2xl bg-[#0F1218] border border-white/5">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"More than an app, it's a feeling of belonging. The village concept really resonates with us."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="text-xs text-slate-400">Elena D.</span>
</div>
</div>

<div className="w-[400px] p-6 rounded-2xl bg-[#0F1218] border border-white/5">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"It felt like holding a hand across the distance. Emberly helped my mother tell stories I had never heard before."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="text-xs text-slate-400">Sarah J.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Questions about the Village</h2>
<p className="text-slate-400 mb-10 text-sm">Everything you need to know about getting started.</p>
<div className="space-y-4">
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 group hover:border-amber-500/20 transition-colors">
<h3 className="text-lg font-medium text-slate-200 mb-2">How does the village work?</h3>
<p className="text-slate-400 text-sm leading-relaxed">The village is a private, secure space. You invite close family and friends to join. Once connected, everyone can share memories, photos, and updates in a calm, distraction-free environment.</p>
</div>
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 group hover:border-amber-500/20 transition-colors">
<h3 className="text-lg font-medium text-slate-200 mb-2">Is my data private?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Absolutely. Dignity and privacy are our core values. Your memories are encrypted and shared only with the people you explicitly invite to your village.</p>
</div>
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 group hover:border-amber-500/20 transition-colors">
<h3 className="text-lg font-medium text-slate-200 mb-2">Can I use it for legacy storytelling?</h3>
<p className="text-slate-400 text-sm leading-relaxed">Yes. Emberly is designed to help record and preserve oral histories, written letters, and cherished photos, organizing them into a beautiful timeline for future generations.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#0B0E14]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center">
<svg className="text-[#0B0E14]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 4v2"></path><path d="M12 18v2"></path><path d="M4 12h2"></path><path d="M18 12h2"></path><path d="M20 6l-1.5 1.5"></path><path d="M14.5 11.5L6 20"></path><path d="M20 18l-1.5-1.5"></path><path d="M6 6l1.5 1.5"></path></svg>
</div>
<span className="font-medium text-white">Hello Emberly</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Building digital villages where no one is forgotten. A place for memory, connection, and the quiet dignity of a life well-lived.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">The Village</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-amber-200 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-amber-200 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Community Guidelines</a></li>
<li><a className="hover:text-amber-200 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2025 Hello Emberly. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" data-lucide="instagram"></i>
<i className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" data-lucide="twitter"></i>
<i className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
