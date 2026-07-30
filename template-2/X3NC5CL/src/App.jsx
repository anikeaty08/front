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
            'inter': ['Inter', 'sans-serif'], 
            'bebas': ['"Bebas Neue"', 'cursive'] 
          },
          animation: {
            'fade-in': 'fadeIn 0.6s ease-out forwards',
            'slide-up': 'slideUp 0.8s ease-out forwards',
            'glow': 'glow 2s ease-in-out infinite alternate'
          }
        } 
      } 
    }
  


    lucide.createIcons();

    const pricingMap = {
      monthly: [285, 495, 895],
      annual: [2565, 4455, 8055]
    };

    const prices = document.querySelectorAll('.price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const buttons = document.querySelectorAll('#billingToggle button');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('bg-white', 'text-black');
          b.classList.add('text-white/70');
        });
        
        btn.classList.add('bg-white', 'text-black');
        btn.classList.remove('text-white/70');
        
        const plan = btn.dataset.plan;
        
        prices.forEach((price, idx) => {
          price.textContent = '$' + pricingMap[plan][idx];
        });

        annualPrices.forEach((annualPrice, idx) => {
          if (plan === 'annual') {
            annualPrice.classList.remove('hidden');
            annualPrice.textContent = '$' + pricingMap[plan][idx] + ' billed annually';
          } else {
            annualPrice.classList.add('hidden');
          }
        });
      });
    });

    // Staggered animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
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
      

<div className="fixed inset-0 opacity-30">
<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
</div>

<header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6 opacity-0 animate-fade-in" style={{animationPlayState: `running`}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-md flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-black" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div className="text-2xl font-bebas tracking-tight select-none">VESPER</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white/70 transition-colors" href="#">Collections</a>
<a className="hover:text-white/70 transition-colors" href="#">About</a>
<a className="hover:text-white/70 transition-colors" href="#">Contact</a>
</nav>
<button className="flex items-center gap-2 group md:hidden">
<span className="text-sm font-medium">Menu</span>
<svg className="lucide lucide-menu w-5 h-5 group-hover:text-white/70 transition-colors" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</header>

<section className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12 mt-12">
<div className="opacity-0 animate-fade-in" style={{animationDelay: `0.2s`, animationPlayState: `running`}}>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas tracking-tight mb-4">PRICING</h1>
<p className="text-sm font-light tracking-[0.2em] uppercase text-gray-400 mb-2">Curated Fashion Experience</p>
<div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-12"></div>
</div>

<div className="opacity-0 animate-fade-in" style={{animationDelay: `0.4s`, animationPlayState: `running`}}>
<div className="flex items-center gap-1 p-1 rounded-full glass-effect border border-white/10 mb-16" id="billingToggle">
<button className="relative px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium bg-white text-black" data-plan="monthly">
          Monthly
        </button>
<button className="px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium text-white/70 hover:text-white" data-plan="annual">
          Annual
          <span className="ml-2 text-xs bg-gradient-to-r from-purple-400 to-pink-400 text-white px-2 py-1 rounded-full">Save 25%</span>
</button>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="opacity-0 animate-slide-up gradient-border rounded-2xl p-8 hover:scale-105 transition-all duration-300 group" style={{animationDelay: `0.6s`, animationPlayState: `running`}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-star w-5 h-5 text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Essential</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">Perfect for fashion newcomers seeking curated basics and timeless pieces to build their wardrobe foundation.</p>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-light price" data-tier="0">$285</span>
<span className="text-gray-400 text-sm">per month</span>
</div>
<p className="text-xs text-gray-500 annual-price hidden" data-tier="0">$2,565 billed annually</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">3-5 curated pieces monthly</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Personal styling consultation</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Free exchanges & returns</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Seasonal trend reports</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 font-medium group-hover:border-white/40">
          Get Started
        </button>
</div>

<div className="opacity-0 animate-slide-up gradient-border rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden" style={{animationDelay: `0.8s`, animationPlayState: `running`}}>
<div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-bl-xl">
          POPULAR
        </div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
<svg className="lucide lucide-crown w-5 h-5 text-white" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Premium</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">For style enthusiasts who want access to designer pieces and exclusive collections with personalized styling.</p>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-light price" data-tier="1">$495</span>
<span className="text-gray-400 text-sm">per month</span>
</div>
<p className="text-xs text-gray-500 annual-price hidden" data-tier="1">$4,455 billed annually</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">6-8 premium pieces monthly</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Dedicated personal stylist</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Designer brand access</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Virtual styling sessions</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Priority customer support</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium">
          Get Started
        </button>
</div>

<div className="opacity-0 animate-slide-up gradient-border rounded-2xl p-8 hover:scale-105 transition-all duration-300 group" style={{animationDelay: `1s`, animationPlayState: `running`}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
<svg className="lucide lucide-gem w-5 h-5 text-white" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Luxury</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-8">The ultimate fashion experience with haute couture access, personal shopping, and white-glove service.</p>
<div className="mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-5xl font-light price" data-tier="2">$895</span>
<span className="text-gray-400 text-sm">per month</span>
</div>
<p className="text-xs text-gray-500 annual-price hidden" data-tier="2">$8,055 billed annually</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">10+ luxury pieces monthly</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Celebrity stylist team</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Haute couture access</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Personal shopping service</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Event styling & wardrobe</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">24/7 concierge support</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition-all duration-300 font-medium">
          Get Started
        </button>
</div>
</div>
</section>

<section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 mb-24">
<div className="opacity-0 animate-fade-in" style={{animationDelay: `1.2s`}}>
<h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="glass-effect rounded-xl p-6 border border-white/10">
<h3 className="font-medium mb-2">Can I switch plans anytime?</h3>
<p className="text-gray-400 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
</div>
<div className="glass-effect rounded-xl p-6 border border-white/10">
<h3 className="font-medium mb-2">What if I don't like the items?</h3>
<p className="text-gray-400 text-sm">We offer free returns and exchanges on all items. Our stylists learn from your feedback to improve future selections.</p>
</div>
<div className="glass-effect rounded-xl p-6 border border-white/10">
<h3 className="font-medium mb-2">How does the styling process work?</h3>
<p className="text-gray-400 text-sm">After subscribing, you'll complete a style profile. Our stylists curate pieces based on your preferences, lifestyle, and budget.</p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 text-center px-6 lg:px-12 pb-12">
<div className="opacity-0 animate-fade-in" style={{animationDelay: `1.4s`}}>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
<p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Transparent pricing with no hidden fees. Cancel anytime. All prices include styling services, premium packaging, and free shipping. Experience luxury fashion curation tailored to your unique style.
      </p>
</div>
</footer>



    </>
  );
}
