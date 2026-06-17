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
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
vehem: {
dark: '#7A0000',
base: '#C10019',
light: '#FF2A4A',
}
},
backgroundImage: {
'gradient-vehem': 'linear-gradient(to right, #7A0000, #C10019, #FF2A4A)',
}
}
}
}



        // Icons
        lucide.createIcons();

        // Mobile Hero Background Fade
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].style.opacity = '0';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = '
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
      

<nav className="fixed z-50 w-full top-0 px-6 py-5 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]">
<a className="text-xl font-bold tracking-tighter text-white font-display" href="#">VEHEM</a>
<button className="text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transform translate-x-full transition-transform duration-500 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="x"></i>
</button>
<a className="text-3xl font-display font-medium text-white hover:text-[#C10019] transition-colors" href="#home" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">HOME</a>
<a className="text-3xl font-display font-medium text-white hover:text-[#C10019] transition-colors" href="#about" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">ABOUT</a>
<a className="text-3xl font-display font-medium text-white hover:text-[#C10019] transition-colors" href="#members" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">MEMBERS</a>
<a className="text-3xl font-display font-medium text-white hover:text-[#C10019] transition-colors" href="#contact" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">CONTACT</a>
</div>

<header className="relative w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0" id="hero-slider">
<img className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-[2000ms] hero-slide" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
<img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[2000ms] hero-slide" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79982252-fe72-4a84-8058-abc650167e27_800w.jpg" style={{}}/>
<img className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[2000ms] hero-slide" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/226d084d-56c6-4eeb-b2e4-586b3cef9058_800w.jpg" style={{}}/>
<div className="bg-gradient-to-b from-black/40 via-transparent to-black z-10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-20 flex flex-col items-center px-6 text-center">

<div className="relative w-64 h-64 mb-6 flex items-center justify-center">
<img alt="VEHEM" className="opacity-100 mix-blend-luminosity w-full h-full object-contain relative drop-shadow-2xl translate-y-16 scale-150 perspective-dramatic" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3f4e401-ed89-45f0-9607-528d87ad6225_800w.png" style={{}}/>
</div>
<h1 className="text-sm font-medium tracking-[0.5em] text-white/80 uppercase mb-8">Sound. Fury. Vehem.</h1>
<a className="animate-bounce p-3 border border-white/20 rounded-full backdrop-blur-sm bg-black/30" href="#about">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="arrow-down"></i>
</a>
</div>
</header>

<section className="px-6 py-20 border-t border-white/10 bg-black" id="about">
<h2 className="text-3xl font-display font-semibold text-white leading-none mb-6">
            CRAFTED IN<br/><span className="text-[#C10019]">CHAOS.</span>
</h2>
<p className="text-neutral-400 font-light text-lg leading-relaxed mb-6">
            Vehem is a six-member collective built on emotion and raw expression. We blend heavy rhythms with atmospheric depth to create a sound that stays with you.
        </p>
<div className="h-[1px] w-full bg-gradient-to-r from-[#C10019] to-transparent opacity-50"></div>
</section>

<section className="py-20 bg-neutral-950 border-t border-white/5 overflow-hidden" id="members">
<div className="px-6 mb-8 flex justify-between items-end">
<div>
<h2 className="text-3xl font-display font-semibold text-white">THE BAND</h2>
<p className="text-neutral-500 text-sm mt-1">Swipe to explore</p>
</div>
<i className="w-5 h-5 text-[#C10019] animate-pulse" data-lucide="move-right"></i>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 w-full no-scrollbar cursor-grab active:cursor-grabbing">

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22bbb504-d7bd-4290-866e-75714a3d075a_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">KINSHUK</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Bassist</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">The low-end heartbeat. Anchoring the sound with depth, power, and rhythmic control.</p>
</div>
</div>

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/758b6f10-8370-49a3-bb30-72f22c902921_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">PRAYAS</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Vocalist</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">Bringing soul and power. His voice moves from warm lows to expressive highs, capturing the story.</p>
</div>
</div>

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91c37221-582d-4aba-8561-3ba99ecfcf4a_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">SUYASH</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Vocalist</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">Adding range and texture. Strengthening harmonies and dynamic transitions with emotional depth.</p>
</div>
</div>

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a736304-526a-4465-b551-b971504409c8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">RUDRA</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Keys</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">The sonic designer. Creating mood and atmosphere that adds cinematic depth to every song.</p>
</div>
</div>

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dec3f6f8-c5ce-48bd-98b5-8f3f6663f1a0_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">VAIBHAV</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Guitar</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">The melodic edge. Combining technical skill with emotional finesse in every riff and solo.</p>
</div>
</div>

<div className="min-w-[85vw] snap-center relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-black/50">
<div className="h-[400px] w-full relative">
<img className="w-full h-full object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0864c8c-c865-48bd-af0d-0f34f02eb4cb_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-3xl font-display font-bold text-white">KRISH</h3>
<p className="text-[#FF2A4A] text-xs font-bold tracking-widest uppercase mt-1">Drums</p>
</div>
</div>
<div className="p-6">
<p className="text-neutral-400 text-sm leading-relaxed">The rhythmic engine. Driving the pulse and building energy with dynamic precision.</p>
</div>
</div>

<div className="min-w-[20px] snap-center"></div>
</div>
</section>

<section className="px-6 py-24 bg-black relative" id="contact">
<h2 className="text-4xl font-display font-semibold text-white mb-2">REACH US</h2>
<p className="text-neutral-500 mb-10">Booking &amp; Inquiries.</p>

<form action="#" className="space-y-6" method="POST">
<div className="space-y-1">
<label className="text-xs font-bold text-[#FF2A4A] uppercase tracking-widest">Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C10019] transition-colors" name="name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-[#FF2A4A] uppercase tracking-widest">Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C10019] transition-colors" name="email" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-[#FF2A4A] uppercase tracking-widest">Message</label>
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C10019] transition-colors resize-none" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#C10019] hover:text-white transition-all duration-300" type="submit">
                Send Message
            </button>
</form>

<div className="mt-16 flex justify-center gap-8">


<a className="text-neutral-400 hover:text-[#C10019] transition-colors transform hover:scale-110" href="https://instagram.com/vehemband" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="instagram"></i>
</a>

<a className="text-neutral-400 hover:text-[#C10019] transition-colors transform hover:scale-110" href="https://youtube.com/@vehemband" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="youtube"></i>
</a>

<a className="text-neutral-400 hover:text-[#C10019] transition-colors transform hover:scale-110" href="https://twitter.com/vehemband" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="twitter"></i>
</a>

<a className="text-neutral-400 hover:text-[#C10019] transition-colors transform hover:scale-110" href="https://spotify.com" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="music-2"></i>
</a>
</div>
<p className="text-center text-neutral-600 text-xs mt-10">© 2024 VEHEM. All Rights Reserved.</p>
</section>


    </>
  );
}
