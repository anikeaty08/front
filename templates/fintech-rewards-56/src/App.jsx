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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const revealElements = document.querySelectorAll('.reveal');
            
            // Set initial state
            revealElements.forEach(el => {
                el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-[cubic-bezier(0.16,1,0.3,1)]');
            });

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        // Optional: unobserve after reveal to run only once
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px" 
            });

            revealElements.forEach(el => revealObserver.observe(el));

            // Navbar background opacity on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('border-white/10');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('border-white/10');
                    navbar.classList.add('border-transparent');
                }
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
      

<nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-white/10 transition-transform duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="relative z-10" href="#">
<img alt="CRED" className="h-10 w-auto hover:opacity-80 transition-opacity" src="https://web-images.credcdn.in/v2/_next/assets/icons/logo.png"/>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-white/80 hover:text-white uppercase letter-spacing-wide transition-colors" href="#">credit score check</a>
<a className="text-sm font-medium text-white/80 hover:text-white uppercase letter-spacing-wide transition-colors" href="#">CRED pay</a>
</div>
<button className="md:hidden text-white hover:text-white/70 transition-colors z-10">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/hero-desktop-poster.jpg?tr=q-95"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-12 reveal">
<h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-[112px] leading-[1.05] tracking-tight mb-8">
                pay credit card bill. <br className="hidden md:block"/> earn rewards.
            </h1>
<p className="font-medium text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                celebrate your responsible financial behavior with a reward for every payment you make.
            </p>
<button className="bg-white text-black font-semibold text-sm md:text-base uppercase letter-spacing-wider px-10 py-5 rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300">
                Download CRED
            </button>
</div>
</section>

<section className="relative w-full py-32 md:py-48 bg-black flex flex-col items-center border-t border-white/5">
<div className="absolute inset-0 z-0">
<img alt="App Interface" className="w-full h-full object-cover opacity-30 mix-blend-screen" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/phone-ticker-desktop-poster-final.jpg?tr=q-95"/>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>
<div className="relative z-10 text-center max-w-3xl mx-auto px-6 reveal">
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tight leading-tight mb-8">
                we feel your earnings deserve more.
            </h2>
<p className="text-white/70 font-medium text-lg md:text-xl leading-relaxed">
                join CRED to get curated rewards and privileges for paying your credit card bills on time.
            </p>
</div>
</section>

<section className="relative min-h-screen flex items-center px-6 md:px-24 py-32 overflow-hidden border-t border-white/5">
<div className="absolute inset-0 z-0 group">
<img alt="Rewards" className="w-full h-full object-cover object-right-top transition-transform duration-1000 hover:scale-105" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rewards-desktop-poster.jpg?tr=q-95"/>
<div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-1/2"></div>
</div>
<div className="relative z-10 w-full max-w-2xl reveal">
<h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8">
                feel special <br/> more often.
            </h2>
<p className="text-white/80 font-medium text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
                exclusive rewards for paying your bills. experience the thrill of winning every time you clear your dues.
            </p>
<button className="bg-white text-black font-semibold text-sm uppercase letter-spacing-wider px-10 py-5 rounded-full hover:bg-gray-200 transition-colors shadow-lg">
                Explore rewards
            </button>
</div>
</section>

<section className="relative min-h-screen flex items-center px-6 md:px-24 py-32 overflow-hidden border-t border-white/5 justify-start md:justify-end text-left md:text-right">
<div className="absolute inset-0 z-0">
<img alt="Money management" className="w-full h-full object-cover object-left-top transition-transform duration-1000 hover:scale-105" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/ccbp-fold-poster.jpg?tr=q-95"/>
<div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
<div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent w-full md:w-1/2 right-0 hidden md:block"></div>
</div>
<div className="relative z-10 w-full max-w-2xl reveal">
<h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8">
                we take your money matters seriously.
            </h2>
<p className="text-white/80 font-medium text-lg md:text-xl mb-12 leading-relaxed max-w-lg md:ml-auto">
                so that you don't have to. never miss a due date with reminders and help us manage your expenses.
            </p>
<button className="bg-white text-black font-semibold text-sm uppercase letter-spacing-wider px-10 py-5 rounded-full hover:bg-gray-200 transition-colors shadow-lg">
                Experience the upgrade
            </button>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-20 bg-black border-t border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#111] rounded-full blur-[120px] opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
<div className="flex-1 space-y-10 reveal">
<h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
                    security first. <br/> and second.
                </h2>
<p className="text-white/70 font-medium text-lg md:text-xl leading-relaxed max-w-lg">
                    what's yours remains only yours. there's no room for mistakes because we didn't leave any.
                </p>
<button className="bg-transparent border border-white/30 text-white font-semibold text-sm uppercase letter-spacing-wider px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    Become a member
                </button>
</div>
<div className="flex-1 w-full flex justify-center lg:justify-end reveal" style={{transitionDelay: '200ms'}}>
<img alt="Bank-grade Security" className="w-full max-w-md drop-shadow-2xl hover:-translate-y-4 transition-transform duration-700 ease-out" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#131313] border-y border-white/10">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 reveal">
<div className="text-center group cursor-default">
<div className="flex items-center gap-3 justify-center mb-4 transition-transform group-hover:scale-105 duration-300">
<span className="text-5xl md:text-7xl font-display font-semibold tracking-tight">4.8</span>
<iconify-icon className="text-white opacity-90" icon="solar:star-linear" width="48"></iconify-icon>
</div>
<p className="text-white/60 font-medium text-sm letter-spacing-wider uppercase">App Store</p>
</div>
<div className="hidden md:block w-px h-24 bg-white/10"></div>
<div className="text-center group cursor-default">
<div className="flex items-center gap-3 justify-center mb-4 transition-transform group-hover:scale-105 duration-300">
<span className="text-5xl md:text-7xl font-display font-semibold tracking-tight">4.7</span>
<iconify-icon className="text-white opacity-90" icon="solar:star-linear" width="48"></iconify-icon>
</div>
<p className="text-white/60 font-medium text-sm letter-spacing-wider uppercase">Play Store</p>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 px-6 md:px-20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 reveal">

<div className="lg:col-span-4 space-y-8">
<img alt="CRED Logo" className="h-14 opacity-90" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png"/>
<div className="pt-4">
<img alt="Download QR" className="w-28 rounded-xl border border-white/10 p-2 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/qr-final.png"/>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="space-y-6">
<h4 className="font-medium text-sm letter-spacing-wider text-white uppercase opacity-90">Products</h4>
<ul className="space-y-4 text-white/50 text-sm font-medium">
<li><a className="hover:text-white transition-colors block" href="#">CRED pay</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Credit Score Check</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-medium text-sm letter-spacing-wider text-white uppercase opacity-90">CRED</h4>
<ul className="space-y-4 text-white/50 text-sm font-medium">
<li><a className="hover:text-white transition-colors block" href="#">About</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Security</a></li>
</ul>
</div>
<div className="space-y-6 col-span-2 md:col-span-1">
<h4 className="font-medium text-sm letter-spacing-wider text-white uppercase opacity-90">Policy</h4>
<ul className="space-y-4 text-white/50 text-sm font-medium">
<li><a className="hover:text-white transition-colors block" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors block" href="#">Returns &amp; Refunds</a></li>
</ul>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs font-medium reveal" style={{transitionDelay: '200ms'}}>
<p>copyright © 2024 Dreamplug Technologies Pvt Ltd.</p>
<div className="flex gap-6">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="22"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
