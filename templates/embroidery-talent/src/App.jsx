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



        function toggleModal() {
            const modal = document.getElementById('authModal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.children[1].classList.remove('scale-95');
                    modal.children[1].classList.add('scale-100');
                }, 10);
            } else {
                modal.children[1].classList.remove('scale-100');
                modal.children[1].classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 200);
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
      

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-6" id="authModal">
<div className="modal-overlay absolute inset-0" onclick="toggleModal()"></div>
<div className="bg-white rounded-[2rem] w-full max-w-md p-8 relative z-10 custom-shadow border border-slate-100 scale-95 transition-transform">
<button className="absolute top-6 right-6 text-slate-400 hover:text-black" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-8">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Welcome to StitchLink</h3>
<p className="text-sm text-slate-500 font-light">Join the premium embroidery network today.</p>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3.5 rounded-2xl font-medium text-sm hover:bg-slate-800 transition-all">
                    Continue with Google
                </button>
<button className="w-full border border-slate-200 py-3.5 rounded-2xl font-medium text-sm hover:bg-slate-50 transition-all">
                    Use Email Address
                </button>
</div>
<p className="mt-8 text-xs text-center text-slate-400">By continuing, you agree to our Terms of Service.</p>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter" href="#">
                STITCH<span className="text-slate-400 font-light">LINK</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-black transition-colors" href="#talent">Find Designers</a>
<a className="hover:text-black transition-colors" href="#roles">For Merchants</a>
<a className="hover:text-black transition-colors" href="#footer">Portfolio Hub</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium px-4 py-2 hover:text-slate-600 transition-colors" onclick="toggleModal()">Login</button>
<button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" onclick="toggleModal()">Join Platform</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 hero-gradient">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">New: Verified Merchant Badges</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-950 leading-[1.1] mb-8">
                The thread that connects <br/> <span className="text-slate-400">artistry to enterprise.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light">
                Premium network connecting world-class embroidery designers with high-volume merchants and traders.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-medium text-base shadow-xl shadow-slate-200 hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2" onclick="window.location.href='#roles'">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    I'm a Designer
                </button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium text-base hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" onclick="window.location.href='#roles'">
<iconify-icon icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    I'm a Vepari
                </button>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-12">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight">2.4k+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Designers</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight">850+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Veparis</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight">12k+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Assignments</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight">98%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Success Rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="roles">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

<div className="space-y-8 p-8 rounded-3xl bg-[#fdfdfd] border border-slate-100 custom-shadow">
<div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight">For Designers</h3>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Showcase your intricate patterns, manage your creative workflow, and get hired by premium textile merchants who value your craft.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Smart Portfolio Builder
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Secure Payment Escrow
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Global Market Reach
                    </li>
</ul>
<button className="text-sm font-semibold flex items-center gap-2 group" onclick="toggleModal()">
                    Create Designer Profile 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="space-y-8 p-8 rounded-3xl bg-[#fdfdfd] border border-slate-100 custom-shadow">
<div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight">For Merchants</h3>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Discover verified talent, browse trending embroidery catalogues, and hire designers for exclusive collections with complete contract safety.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Direct Negotiation Tools
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Bulk Order Management
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Copyright Protection
                    </li>
</ul>
<button className="text-sm font-semibold flex items-center gap-2 group" onclick="toggleModal()">
                    Register as Vepari 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="talent">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-950">Curated Talent</h2>
<p className="text-base text-slate-500 font-light">Explore recent works from top-rated embroidery masters.</p>
</div>
<button className="text-sm font-medium border-b-2 border-slate-900 pb-1" onclick="toggleModal()">View Full Directory</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden custom-shadow">
<div className="h-64 bg-slate-100 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Zardosi Expert</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-semibold tracking-tight">Arjun Mehta</h4>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<p className="text-sm text-slate-500 font-light mb-6">Specializing in traditional bridal wear and intricate gold-thread work.</p>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-3 py-1 bg-slate-50 rounded-lg text-slate-600">From ₹12,000/design</span>
<button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-black hover:text-white transition-all" onclick="toggleModal()">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden custom-shadow">
<div className="h-64 bg-slate-200 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Modern Chikankari</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-semibold tracking-tight">Sana Qureshi</h4>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">5.0</span>
</div>
</div>
<p className="text-sm text-slate-500 font-light mb-6">Expert in hand-crafted shadows and fusion ethnic embroidery styles.</p>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-3 py-1 bg-slate-50 rounded-lg text-slate-600">From ₹8,500/design</span>
<button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-black hover:text-white transition-all" onclick="toggleModal()">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden custom-shadow">
<div className="h-64 bg-slate-300 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Machine Lace</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-semibold tracking-tight">Rajesh Fabrics</h4>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">4.8</span>
</div>
</div>
<p className="text-sm text-slate-500 font-light mb-6">High-volume machine embroidery for retail chain distributions.</p>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold px-3 py-1 bg-slate-50 rounded-lg text-slate-600">By Project Quote</span>
<button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-black hover:text-white transition-all" onclick="toggleModal()">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto bg-slate-950 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Ready to expand your business?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-light">Join the most trusted ecosystem for the embroidery and textile industry today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-slate-100 transition-all" onclick="toggleModal()">Sign Up Free</button>
<button className="bg-transparent text-white border border-white/20 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/5 transition-all" onclick="toggleModal()">Contact Sales</button>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-[#fafafa] border-t border-slate-100" id="footer">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
<div className="max-w-xs">
<div className="text-xl font-semibold tracking-tighter mb-4">
                    STITCH<span className="text-slate-400 font-light">LINK</span>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                    A dedicated platform empowering embroidery designers and cloth merchants to collaborate and create value together.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">Platform</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-black" href="#talent">Talent Feed</a></li>
<li><a className="hover:text-black" href="#">Job Boards</a></li>
<li><a className="hover:text-black" href="#">Verification</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">Company</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-black" href="#">About Us</a></li>
<li><a className="hover:text-black" href="#">Pricing</a></li>
<li><a className="hover:text-black" href="#">Success Stories</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-black" href="#">Help Center</a></li>
<li><a className="hover:text-black" href="#">Legal</a></li>
<li><a className="hover:text-black" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-slate-400">© 2024 StitchLink Hub. All rights reserved.</div>
<div className="flex items-center gap-6">
<iconify-icon className="text-slate-400 hover:text-black cursor-pointer" icon="solar:share-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-black cursor-pointer" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-black cursor-pointer" icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
</div>
</footer>


    </>
  );
}
