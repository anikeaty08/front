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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Email Form Handler
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const button = this.querySelector('button');
            const successMessage = document.getElementById('success-message');
            
            // Simulation of API call/Sheet saving
            const originalText = button.innerText;
            button.innerText = 'Processing...';
            button.disabled = true;

            setTimeout(() => {
                // Success State
                emailInput.value = '';
                button.style.display = 'none';
                emailInput.style.display = 'none';
                successMessage.classList.remove('hidden');
                
                // Reset after 5 seconds (optional)
                setTimeout(() => {
                   // Logic to reset form if needed, or keep success state
                }, 5000);
            }, 1500);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-600/10 rounded-full blur-[100px] animate-pulse-glow delay-200"></div>
</div>

<nav className="relative z-50 w-full pt-8 pb-4 px-6 md:px-12 flex justify-center md:justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-3">

<svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="logo_gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#22d3ee"></stop> 
<stop offset="100%" stop-color="#4f46e5"></stop> 
</lineargradient>
</defs>

<path d="M38 14.5C35.5 10 30.5 7 24 7C14.6112 7 7 14.6112 7 24C7 33.3888 14.6112 41 24 41C30.5 41 35.5 38 38 33.5" stroke="url(#logo_gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>

<circle cx="39" cy="40" fill="url(#logo_gradient)" r="3.5"></circle>
</svg>
<span className="text-2xl font-semibold tracking-tight text-white hidden md:block">CryptoX</span>
</div>
<div className="hidden md:flex items-center gap-4">
<span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400">
                Coming Soon
            </span>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-20 max-w-7xl mx-auto w-full">

<section className="text-center w-full max-w-4xl mt-12 md:mt-20 relative">

<div className="absolute top-0 left-4 md:left-[-50px] animate-float opacity-50 hidden md:block">
<div className="p-4 rounded-2xl glass-card text-cyan-400">
<svg className="lucide lucide-bitcoin w-8 h-8" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</div>
</div>
<div className="absolute bottom-20 right-4 md:right-[-50px] animate-float-delayed opacity-50 hidden md:block">
<div className="p-4 rounded-2xl glass-card text-violet-500">
<svg className="lucide lucide-layers w-8 h-8" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
<div className="absolute top-20 right-10 opacity-30 animate-float hidden lg:block">
<div className="p-3 rounded-xl glass-card text-fuchsia-400">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>

<div className="space-y-6 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    Beta Access Opening Soon
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.1]">
                    CryptoX <br/>
<span className="text-gradient">The Future of DeFi</span>
</h1>
<p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Something powerful is coming. Experience decentralized finance with zero limits, AI-driven security, and instant global settlements. Stay tuned.
                </p>
</div>

<div className="mt-12 w-full max-w-md mx-auto animate-fade-in delay-100">
<p className="text-zinc-300 mb-3 font-medium text-lg">Get Early Access When We Launch</p>
<form className="relative group" id="signup-form">
<div className="flex flex-col sm:flex-row gap-3">
<input className="w-full bg-zinc-900/80 border border-zinc-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-zinc-600 text-lg" placeholder="Enter your email address" required="" type="email"/>
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] whitespace-nowrap text-lg" type="submit">
                            Join Waitlist
                        </button>
</div>
<div className="hidden mt-3 text-cyan-400 text-base font-medium flex items-center justify-center gap-2" id="success-message">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Thank you! You’re on the list.
                    </div>
</form>
</div>
</section>

<section className="mt-32 w-full animate-fade-in delay-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Ultra-Fast Transactions</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Experience lightning-speed processing powered by our proprietary high-frequency engine.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6 text-violet-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Layer-2 Security Shield</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Military-grade encryption and automated smart contract auditing keep your assets safe.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-globe-2 w-6 h-6 text-fuchsia-400" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Zero-Fee Global Transfers</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Send value anywhere in the world instantly without losing money to gas fees.</p>
</div>
</div>
</section>

<section className="mt-32 w-full max-w-3xl text-center animate-fade-in delay-300">
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">About The Project</h2>
<p className="text-xl text-zinc-400 leading-relaxed">
                CryptoX is a next-generation blockchain platform built for speed, security, and global scalability. Powered by AI automation and advanced encryption, CryptoX makes crypto easy, safe, and accessible for everyone. We are redefining the boundaries of what DeFi can achieve.
            </p>
</section>

<section className="mt-24 mb-12 animate-fade-in delay-300">
<div className="flex flex-wrap justify-center gap-6">
<a className="p-4 rounded-full glass-card hover:bg-white/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all" href="#">
<svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span className="sr-only">X (Twitter)</span>
</a>
<a className="p-4 rounded-full glass-card hover:bg-white/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all" href="#">
<svg className="lucide lucide-send w-6 h-6" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="sr-only">Telegram</span>
</a>
<a className="p-4 rounded-full glass-card hover:bg-white/10 hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all" href="#">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="sr-only">Discord</span>
</a>
<a className="p-4 rounded-full glass-card hover:bg-white/10 hover:text-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="sr-only">Instagram</span>
</a>
</div>
</section>

<div className="mt-8">
<button className="flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Notify Me on WhatsApp
            </button>
</div>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-auto relative z-10 bg-black/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-6"></div>
<p className="text-zinc-500 text-sm">© 2025 CryptoX. All Rights Reserved.</p>
</div>
</footer>


    </>
  );
}
