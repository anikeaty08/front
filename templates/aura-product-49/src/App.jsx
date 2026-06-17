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
colors: {
aura: {
gold: '#bf9358',
cream: '#F9F6EE',
dark: '#1a1a1a',
}
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Inter', 'sans-serif'],
},
transitionTimingFunction: {
'logo-ease': 'cubic-bezier(0.65, 0, 0.35, 1)',
}
}
}
}



        // 1. Initialize Icons
        lucide.createIcons();

        // 2. Elements
        const introVideo = document.getElementById('intro-video');
        const introOverlay = document.getElementById('intro-overlay');
        const animatingLogo = document.getElementById('animating-logo');
        const header = document.getElementById('main-header');
        const finalHeaderLogo = document.getElementById('final-header-logo');

        // 3. Intro Sequence Logic
        function playIntroSequence() {
            // Wait for video end
            introVideo.onended = () => {
                // Short "beat" on the last frame (200ms)
                setTimeout(() => {
                    // Step 1: Reveal the Overlay Logo (Visual Match)
                    animatingLogo.style.opacity = '1';

                    // Step 2: Fade out the Video Background (Reveal Page Bg)
                    // The intro-overlay fades to opacity 0, revealing the page bg behind
                    introOverlay.style.opacity = '0';
                    introOverlay.style.pointerEvents = 'none';

                    // Step 3: Animate Logo to Header (after slight paint delay)
                    setTimeout(() => {
                        animatingLogo.classList.add('to-header');
                    }, 50);

                    // Step 4: When Animation hits Header (~1.2s later)
                    setTimeout(() => {
                        // Hide the moving logo
                        animatingLogo.style.opacity = '0';
                        
                        // Show the real header logo
                        finalHeaderLogo.style.opacity = '1';

                        // Trigger the Header Background Sweep (Gold -> Cream)
                        header.classList.add('swept');

                    }, 1250); // Matches transition duration + buffer

                }, 200); // 0.2s pause on last frame
            };

            // Fallback if autoplay fails
            setTimeout(() => {
                if(introVideo.paused && introVideo.currentTime === 0) {
                    introOverlay.style.display = 'none';
                    header.classList.add('swept');
                    finalHeaderLogo.style.opacity = '1';
                }
            }, 4000);
        }

        // Start
        playIntroSequence();

        // 4. Hero Scroll Logic
        const heroSection = document.getElementById('hero-section');
        const heroVideo = document.getElementById('hero-video');
        const text1 = document.getElementById('text-1');
        const text2 = document.getElementById('text-2');
        const text3 = document.getElementById('text-3');
        const scrollIndicator = document.getElementById('scroll-indicator');

        function updateHeroScroll() {
            if (!heroSection) return;
            const rect = heroSection.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));

            if (heroVideo.duration) heroVideo.currentTime = heroVideo.duration * progress;

            if(progress > 0.05) scrollIndicator.style.opacity = 0;
            else scrollIndicator.style.opacity = 1;

            if (progress < 0.25) {
                text1.style.opacity = 1; text1.style.transform = 'translateY(0)';
                text2.style.opacity = 0; text2.style.transform = 'translateY(20px)';
                text3.style.opacity = 0; text3.style.pointerEvents = 'none';
            } else if (progress < 0.65) {
                text1.style.opacity = 0; text1.style.transform = 'translateY(-20px)';
                text2.style.opacity = 1; text2.style.transform = 'translateY(0)';
                text3.style.opacity = 0; text3.style.transform = 'translateY(20px)'; text3.style.pointerEvents = 'none';
            } else {
                text1.style.opacity = 0; text2.style.opacity = 0; text2.style.transform = 'translateY(-20px)';
                text3.style.opacity = 1; text3.style.transform = 'translateY(0)'; text3.style.pointerEvents = 'auto';
            }
        }

        window.addEventListener('scroll', () => requestAnimationFrame(updateHeroScroll));
        updateHeroScroll();
    
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
      

<div className="flex items-center justify-center" id="intro-overlay">
<video autoplay="" className="w-full h-full object-cover" id="intro-video" muted="" playsinline="">
<source src="https://res.cloudinary.com/di6c7avjy/video/upload/v1766497425/ACE-1_syfesk.webm" type="video/webm"/>
</video>
</div>


<div className="h-16 w-auto flex items-center justify-center" id="animating-logo">

<img alt="AURA" className="h-full w-auto object-contain mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd05e88a-8243-4b63-9e68-efe23b355697_320w.webp"/>
</div>


<header className="fixed top-0 w-full z-50 h-20 bg-aura-gold transition-colors duration-300" id="main-header">
<div id="header-bg"></div>
<div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">

<nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-800">
<a className="hover:text-aura-gold transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-aura-gold transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-aura-gold transition-colors" href="#faq">FAQ</a>
</nav>
<button className="md:hidden text-gray-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>


<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-auto flex items-center justify-center">
<img alt="AURA" className="h-full w-auto object-contain mix-blend-multiply opacity-90 cursor-pointer" id="final-header-logo" onclick="window.scrollTo(0,0)" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd05e88a-8243-4b63-9e68-efe23b355697_320w.webp"/>
</div>

<div className="hidden md:block w-[100px]"></div>
</div>
</header>
<main>

<section className="relative h-[350vh] bg-black" id="hero-section">
<div className="sticky top-0 w-full h-screen overflow-hidden">
<video className="w-full h-full object-cover" id="hero-video" muted="" playsinline="" preload="auto">
<source src="https://res.cloudinary.com/di6c7avjy/video/upload/v1766497506/4315081432e8c2bbe7e3da4b71567c0b_1766494313_sr9tkk.webm" type="video/webm"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20 pointer-events-none">
<div className="absolute transition-opacity duration-700 opacity-1 transform translate-y-0" id="text-1">
<h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-tight leading-tight">Fresh plant milk<br/>in minutes.</h1>
</div>
<div className="absolute transition-opacity duration-700 opacity-0 transform translate-y-5" id="text-2">
<h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-tight leading-tight">8-in-1 programs.<br/>One touch.</h1>
</div>
<div className="absolute transition-opacity duration-700 opacity-0 flex flex-col items-center w-full pointer-events-none" id="text-3">
<h1 className="font-serif text-4xl md:text-6xl text-white font-medium tracking-tight leading-tight mb-8">Healthy, creamy,<br/>everyday.</h1>
<div className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full max-w-sm sm:max-w-none justify-center">
<button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">Order Now</button>
<button className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-[#1ebc57] transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
<i className="w-5 h-5" data-lucide="message-circle"></i> WhatsApp
                            </button>
</div>
<p className="mt-4 text-xs font-medium text-white/80 uppercase tracking-widest">Cash on Delivery Available</p>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce" id="scroll-indicator">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto -mt-10 relative z-30" id="benefits">
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-aura-cream rounded-full flex items-center justify-center text-aura-gold mb-5">
<i className="w-6 h-6" data-lucide="layout-grid"></i>
</div>
<h3 className="font-serif text-xl font-medium mb-3">8-in-1 Modes</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">Almond, Oat, Soy, Cashew, Juice, Boil, Warm &amp; Clean. Just press and go.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-aura-cream rounded-full flex items-center justify-center text-aura-gold mb-5">
<i className="w-6 h-6" data-lucide="sprout"></i>
</div>
<h3 className="font-serif text-xl font-medium mb-3">Healthy &amp; Fresh</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">Control your ingredients. No gums, oils, or preservatives found in store-bought milk.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-aura-cream rounded-full flex items-center justify-center text-aura-gold mb-5">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-xl font-medium mb-3">Easy Cleaning</h3>
<p className="text-gray-500 font-light text-sm leading-relaxed">Self-cleaning high-temp cycle takes just minutes. No mess, no hassle.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative bg-aura-cream rounded-2xl p-8 flex items-center justify-center">
<img alt="AURA Machine" className="w-full h-auto object-contain mix-blend-multiply max-h-[400px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 border border-gray-100">
<span className="text-xl">🇹🇿</span>
<span className="text-xs font-bold uppercase tracking-wider text-gray-800">Tanzania Edition</span>
</div>
</div>
<div>
<span className="text-aura-gold font-bold tracking-widest text-xs uppercase mb-2 block">Made for Tanzania</span>
<h2 className="font-serif text-4xl font-medium tracking-tight text-gray-900 mb-6">Designed for your home.</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 bg-green-50 p-1.5 rounded-full text-green-600 h-fit">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Saves Money</h4>
<p className="text-gray-500 font-light text-sm mt-1">Buy raw nuts/oats in bulk locally. Much cheaper than carton milk.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 bg-green-50 p-1.5 rounded-full text-green-600 h-fit">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-gray-900">Lactose-Free &amp; Family Friendly</h4>
<p className="text-gray-500 font-light text-sm mt-1">Perfect for kids and lactose-intolerant family members.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-aura-cream" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl font-medium tracking-tight mb-2">Pure milk in 3 steps.</h2>
<p className="text-gray-500 font-light text-sm">No soaking required for most recipes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 text-center relative">
<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200 -z-10"></div>
<div className="bg-white md:bg-transparent p-6 rounded-xl md:p-0">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 relative z-10">
<span className="font-serif text-2xl text-aura-gold">1</span>
</div>
<h3 className="font-medium text-lg mb-2">Add Ingredients</h3>
<p className="text-sm text-gray-500 font-light">Pour water and your choice of nuts, oats, or seeds.</p>
</div>
<div className="bg-white md:bg-transparent p-6 rounded-xl md:p-0">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 relative z-10">
<span className="font-serif text-2xl text-aura-gold">2</span>
</div>
<h3 className="font-medium text-lg mb-2">Select Mode</h3>
<p className="text-sm text-gray-500 font-light">Choose from 8 presets on the touch panel.</p>
</div>
<div className="bg-white md:bg-transparent p-6 rounded-xl md:p-0">
<div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 relative z-10">
<span className="font-serif text-2xl text-aura-gold">3</span>
</div>
<h3 className="font-medium text-lg mb-2">Enjoy</h3>
<p className="text-sm text-gray-500 font-light">Ready in minutes. Auto-clean when done.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-aura-cream" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="font-serif text-3xl font-medium tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-3">
<details className="group bg-white rounded-lg shadow-sm border border-gray-100/50">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none">
<span className="font-medium text-gray-800 text-sm">Is it hard to clean?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-5 pb-5 text-gray-500 font-light text-sm">AURA features a dedicated High-Temp Cleaning mode. Just add water and a drop of soap.</div>
</details>
<details className="group bg-white rounded-lg shadow-sm border border-gray-100/50">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none">
<span className="font-medium text-gray-800 text-sm">Delivery &amp; Payment?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-5 pb-5 text-gray-500 font-light text-sm">We offer Free Delivery within Tanzania. Cash on Delivery is available.</div>
</details>
<details className="group bg-white rounded-lg shadow-sm border border-gray-100/50">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none">
<span className="font-medium text-gray-800 text-sm">Is there a warranty?</span>
<span className="transition group-open:rotate-180"><i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-5 pb-5 text-gray-500 font-light text-sm">Yes, 1-year comprehensive warranty included.</div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-white text-center px-6" id="order">
<div className="max-w-2xl mx-auto">
<img alt="AURA Logo" className="h-16 w-auto mx-auto mb-8 mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8">Start making fresh<br/>plant milk today.</h2>
<button className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-transform hover:scale-105 shadow-xl w-full sm:w-auto">Order Now</button>
</div>
</section>
</main>
<footer className="bg-gray-50 py-12 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
<p>© 2024 AURA Tanzania.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-600" href="#">Privacy</a>
<a className="hover:text-gray-600" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
