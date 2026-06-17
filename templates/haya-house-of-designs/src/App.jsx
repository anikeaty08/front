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
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
50: '#fffbf0',
100: '#fff4cce',
200: '#ffe699',
300: '#ffd666',
400: '#ffc333',
500: '#eab308',
600: '#ca8a04',
700: '#a16207',
800: '#854d0e',
900: '#713f12',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Horizontal Scroll Buttons
        const scrollContainer = document.getElementById('servicesContainer');
        const leftBtn = document.getElementById('scrollLeftBtn');
        const rightBtn = document.getElementById('scrollRightBtn');

        if(leftBtn && rightBtn && scrollContainer) {
            leftBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -340, behavior: 'smooth' });
            });
            rightBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: 340, behavior: 'smooth' });
            });
        }

        // Simple 3D Tilt Effect Logic for Desktop
        const cards = document.querySelectorAll('.card-tilt');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max -5deg to 5deg
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });

        // Intersection Observer for fade-in animations on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        // Apply to sections
        document.querySelectorAll('section > div').forEach(div => {
            div.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
            observer.observe(div);
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
      

<nav :className="scrolled ? 'bg-white/80 border-zinc-200/50 shadow-sm' : 'bg-transparent border-transparent'" @scroll.window="scrolled = (window.pageYOffset &gt; 20)" className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 border-b bg-transparent border-transparent" x-data="{ scrolled: false, mobileOpen: false }">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="z-50 text-lg font-medium text-zinc-900 tracking-[0.2em] font-serif relative" href="/#">HAYA<span className="text-gold-600" style={{}}></span></a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-800 uppercase">
<a className="hover:text-gold-600 transition-colors font-geist bg-white/30 backdrop-blur-sm px-2 py-1 rounded-md" href="#services">Services</a>
<a className="hover:text-gold-600 transition-colors font-geist bg-white/30 backdrop-blur-sm px-2 py-1 rounded-md" href="#gallery">Gallery</a>
<a className="hover:text-gold-600 transition-colors font-geist bg-white/30 backdrop-blur-sm px-2 py-1 rounded-md" href="#testimonials">Love</a>
<a className="px-5 py-2 glass-btn rounded-full text-zinc-900 hover:text-gold-700 font-geist" href="#contact">Book Now</a>
</div>

<button @click="mobileOpen = !mobileOpen" className="md:hidden z-50 text-zinc-900 focus:outline-none bg-white/30 backdrop-blur-sm p-1 rounded-md">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24" x-show="!mobileOpen"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:x" strokeWidth="1.5" style={{display: 'none'}} width="24" x-show="mobileOpen"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-zinc-900/95 z-40 flex flex-col items-center justify-center gap-8 text-white backdrop-blur-xl" style={{display: 'none'}} x-show="mobileOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-x-0" x-transition:enter-start="opacity-0 translate-x-full" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-x-full" x-transition:leave-start="opacity-100 translate-x-0">
<a @click="mobileOpen = false" className="text-2xl font-playfair font-medium" href="#services" style={{}}>Services</a>
<a @click="mobileOpen = false" className="text-2xl font-playfair font-medium" href="#gallery" style={{}}>Gallery</a>
<a @click="mobileOpen = false" className="text-2xl text-gold-400 font-playfair font-medium" href="#contact" style={{}}>Book Now</a>
</div>
</nav>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Detailed Mehendi Art" className="w-full h-full object-cover object-center animate-fade-in scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/517d64a0-0f0f-4a71-aac3-1d6ab9d5cc99_3840w.png"/>
<div className="absolute inset-0 bg-white/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 transition-all duration-700" x-data="{ shown: false }" x-init="setTimeout(() =&gt; shown = true, 100)">
<div :className="shown ? 'opacity-100 translate-y-0' : ''" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-900/10 bg-white/70 backdrop-blur-md mb-6 shadow-sm opacity-0 translate-y-4 transition-all duration-700 delay-300">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-900 font-geist">Now Accepting Bookings for 2024</span>
</div>
<h1 :className="shown ? 'opacity-100 translate-y-0' : ''" className="text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-[0.9] tracking-tight mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-500 drop-shadow-md font-playfair font-medium" style={{textShadow: '0 2px 20px rgba(255,255,255,0.8)'}}>
                Artistry in 
                <span className="text-gold-600 shimmer-text font-playfair font-medium" style={{textShadow: 'none'}}>Every Stroke</span>
</h1>
<p :className="shown ? 'opacity-100 translate-y-0' : ''" className="text-sm md:text-base text-zinc-900 font-medium max-w-lg mx-auto mb-10 leading-relaxed opacity-0 translate-y-8 transition-all duration-700 delay-700 font-geist drop-shadow-sm bg-white/30 backdrop-blur-[2px] p-4 rounded-xl">
                HAYA.IN creates bespoke henna experiences for weddings, festivals, and luxury events. Elevate your celebration with intricate designs and premium service.
            </p>
<div :className="shown ? 'opacity-100 translate-y-0' : ''" className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-900">
<a className="group relative px-8 py-3.5 bg-zinc-900 text-white rounded-full overflow-hidden shadow-lg hover:shadow-gold-500/20 transition-all" href="#contact">
<span className="relative z-10 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 font-geist">
                        Book Appointment
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
<a className="glass-btn px-8 py-3.5 rounded-full text-zinc-900 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 border-zinc-300 bg-white/70 font-geist" href="https://wa.me/">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
                    WhatsApp
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80 text-zinc-900 transition-all duration-700 bg-white/30 p-2 rounded-full backdrop-blur-sm">
<iconify-icon icon="lucide:arrow-down" width="20"></iconify-icon>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700 opacity-0 translate-y-8"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between transition-all duration-700 opacity-0 translate-y-8">
<div>
<h2 className="text-3xl md:text-4xl text-zinc-900 mb-2 font-playfair font-medium" style={{}}>Our Services</h2>
<p className="text-zinc-500 text-sm font-geist">Curated experiences for every occasion.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors" id="scrollLeftBtn">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="p-2 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors" id="scrollRightBtn">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 snap-x snap-mandatory pb-12 pt-4 transition-all duration-700 opacity-0 translate-y-8" id="servicesContainer">

<div className="min-w-[300px] md:min-w-[340px] snap-center group perspective-1000">
<div className="relative bg-white border border-zinc-100 rounded-2xl p-1 h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-tilt" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="h-1/2 w-full overflow-hidden rounded-t-xl bg-zinc-100 relative group">

<img alt="Bridal Mehendi" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd6a9805-b0fc-4861-b1a1-df0fdfd4cc21_800w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wider uppercase font-geist z-10">Premium</div>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div className="">
<div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4">
<iconify-icon icon="lucide:crown" width="18"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-zinc-900 mb-2 font-geist">Bridal Mehendi</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-geist">Intricate, full-hands and feet designs telling your unique love story.</p>
</div>
<div className="flex items-center text-gold-600 text-xs font-medium gap-1 group-hover:gap-2 transition-all cursor-pointer font-geist">
                            View Packages <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative bg-white border border-zinc-100 rounded-2xl p-1 h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-tilt" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="h-1/2 w-full overflow-hidden rounded-t-xl bg-zinc-100 relative">

<img alt="Digital Invites" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1740511365551-3c8130ef2a62?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div className="">
<div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4">
<iconify-icon icon="lucide:smartphone" width="18"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-zinc-900 mb-2 font-geist">Digital Invitations</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-geist">Bespoke video and card invites matching your Henna theme.</p>
</div>
<div className="flex items-center text-gold-600 text-xs font-medium gap-1 group-hover:gap-2 transition-all cursor-pointer font-geist">
                            Learn More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative bg-white border border-zinc-100 rounded-2xl p-1 h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-tilt" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'}}>
<div className="h-1/2 w-full overflow-hidden rounded-t-xl bg-zinc-100 relative">

<img alt="Event Hosting" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1745573674357-1d6e917927cf?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div className="">
<div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4">
<iconify-icon icon="lucide:party-popper" width="18"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-zinc-900 mb-2 font-geist">Event Hosting</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-geist">Engaging hosts for Sangeet, Mehendi parties, and intimate gatherings.</p>
</div>
<div className="flex items-center text-gold-600 text-xs font-medium gap-1 group-hover:gap-2 transition-all cursor-pointer font-geist">
                            Check Availability <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative bg-white border border-zinc-100 rounded-2xl p-1 h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-tilt">
<div className="h-1/2 w-full overflow-hidden rounded-t-xl bg-zinc-100 relative">

<img alt="Gift Hampers" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div>
<div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4">
<iconify-icon icon="lucide:gift" width="18"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-zinc-900 mb-2 font-geist">Gift Hampers</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-geist">Customized return gifts and bridal hampers curated with luxury products.</p>
</div>
<div className="flex items-center text-gold-600 text-xs font-medium gap-1 group-hover:gap-2 transition-all cursor-pointer font-geist">
                            View Catalog <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative bg-white border border-zinc-100 rounded-2xl p-1 h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-tilt">
<div className="h-1/2 w-full overflow-hidden rounded-t-xl bg-zinc-100 relative">

<img alt="Guest Mehendi" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75e3d0c1-12c0-4895-a2c8-70341c8d4d20_800w.jpg"/>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div>
<div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-4">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-zinc-900 mb-2 font-geist">Guest Mehendi</h3>
<p className="text-zinc-500 text-xs leading-relaxed font-geist">Hourly packages for guests at weddings, festivals and parties.</p>
</div>
<div className="flex items-center text-gold-600 text-xs font-medium gap-1 group-hover:gap-2 transition-all cursor-pointer font-geist">
                            Book Artists <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/50" id="gallery">
<div className="max-w-7xl mx-auto px-6 transition-all duration-700 opacity-0 translate-y-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-[10px] font-bold tracking-[0.2em] text-gold-600 uppercase mb-3 block font-geist">Portfolio</span>
<h2 className="text-3xl md:text-5xl text-zinc-900 mb-4 tracking-tight font-playfair font-medium" style={{}}>The Masterpiece Collection</h2>
<p className="text-zinc-500 font-light text-sm font-geist">Explore our diverse range of traditional and modern designs.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">

<img alt="Detail" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c50a3302-a595-4ba7-8d72-b2985dca5bc8_800w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<h4 className="font-serif text-xl font-geist">Royal Bridal</h4>
<p className="text-xs opacity-80 font-geist">Full Arm Design</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer">

<img alt="Feet" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad435918-7517-43d2-ae0a-599a7eba0bb6_800w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer">

<img alt="Minimal" className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter blur-[1.5px] group-hover:blur-0 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa1fb0b0-8186-4737-9832-4e0a36290b73_800w.jpg"/>
<div className="absolute top-3 right-3 text-white drop-shadow-md">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 text-white flex items-center justify-center p-8 text-center">
<div className="z-10">
<h3 className="text-2xl mb-2 text-gold-300 font-playfair font-medium" style={{}}>Intricate &amp; Modern</h3>
<p className="text-xs text-zinc-400 mb-4 max-w-xs mx-auto font-geist">Blending traditional Indian motifs with contemporary Arabic flows.</p>
<button className="text-xs uppercase tracking-widest border-b border-gold-500 pb-1 hover:text-gold-400 font-geist">View Full Gallery</button>
</div>
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" style={{}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 relative overflow-hidden border-t border-zinc-100" id="testimonials" x-data="{ 
            active: 2, 
            items: [
                { id: 1, text: 'Haya transformed my bridal vision into reality. The intricacy was beyond anything I expected, and the color was so rich!', author: 'Priya Sharma', role: 'Bride, Mumbai' },
                { id: 2, text: 'Professional, punctual, and incredibly talented. She handled our sangeet party of 50 guests flawlessly with her team.', author: 'Anjali Verma', role: 'Wedding Planner' },
                { id: 3, text: 'The organic henna she uses smells divine and the stain lasted for 3 weeks. Absolutely premium service!', author: 'Sarah Jenkins', role: 'Client' },
                { id: 4, text: 'Simply the best in the city. Her speed without compromising on detail is mesmerizing to watch.', author: 'Fatima Khan', role: 'Engagement' },
                { id: 5, text: 'I booked her for my sister\'s wedding and everyone asked about the artist. Highly recommended!', author: 'Riya Patel', role: 'Sister of Bride' },
                { id: 6, text: 'Unique designs that blend modern and traditional perfectly. She is a true artist.', author: 'Meera Reddy', role: 'Client' }
            ],
            timer: null,
            init() {
                this.startAutoScroll();
            },
            startAutoScroll() {
                this.timer = setInterval(() =&gt; {
                    this.active = (this.active + 1) % this.items.length;
                }, 4000); 
            },
            stopAutoScroll() {
                clearInterval(this.timer);
            }
        }">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10 transition-all duration-700 opacity-0 translate-y-8">
<span className="text-[10px] font-bold tracking-[0.2em] text-gold-600 uppercase mb-3 block font-geist">Love Notes</span>
<h2 className="text-3xl md:text-5xl text-zinc-900 tracking-tight font-playfair font-medium" style={{}}>Cherished Moments</h2>
</div>

<div @mouseenter="stopAutoScroll()" @mouseleave="startAutoScroll()" className="relative w-full overflow-hidden h-[400px] flex items-center transition-all duration-700 opacity-0 translate-y-8">

<div :style={{'transform: 'translateX(calc(-50% - \' + (active * 416) + \'px + 208px))\''}} className="flex absolute left-1/2 transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)">
<template :key="item.id" x-htmlFor="(item, index) in items">

<div :class="active === index 
                            ? 'scale-110 opacity-100 z-30 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-gold-400/20' 
                            : 'scale-95 opacity-90 z-10 hover:opacity-100 hover:scale-100 shadow-sm border border-zinc-100/80 grayscale-0'" @click="active = index" className="w-[24rem] h-[280px] shrink-0 mx-4 rounded-2xl bg-white p-8 flex flex-col justify-between testimonial-card relative cursor-pointer">

<div :className="active === index ? 'scale-100' : 'scale-0'" className="absolute -top-4 -left-2 w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-500">
<iconify-icon icon="lucide:quote" width="18"></iconify-icon>
</div>

<div className="relative">
<div className="flex gap-1 mb-4 text-gold-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-zinc-700 text-lg leading-relaxed font-playfair italic font-medium" x-text="'&quot;' + item.text + '&quot;'"></p>
</div>

<div className="flex items-center gap-3 mt-6 border-t border-zinc-100 pt-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 text-sm font-bold uppercase font-geist shadow-inner" x-text="item.author.charAt(0)"></div>
<div>
<h4 className="text-zinc-900 font-bold text-sm font-geist" x-text="item.author"></h4>
<p className="text-gold-600 text-[10px] uppercase tracking-wider font-geist" x-text="item.role"></p>
</div>
</div>
</div>
</template>
</div>

<div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-zinc-50/80 to-transparent z-30 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-zinc-50/80 to-transparent z-30 pointer-events-none"></div>
</div>

<div className="flex justify-center gap-2 mt-8 z-30 relative">
<template :key="index" x-htmlFor="(item, index) in items">
<button :className="active === index ? 'w-8 bg-gold-500' : 'w-2 bg-zinc-300 hover:bg-zinc-400'" @click="active = index" className="h-1.5 rounded-full transition-all duration-300"></button>
</template>
</div>
</section>

<section className="bg-zinc-900 text-white pt-24 pb-12 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-0 translate-y-8"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 transition-all duration-700 opacity-0 translate-y-8">
<div>
<h2 className="text-4xl md:text-5xl mb-6 font-playfair font-medium" style={{}}>Let's Create Magic</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md font-geist">
                    Ready to book your session or have questions about our services? 
                    Fill out the form or reach out directly on WhatsApp.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="text-gold-500" icon="lucide:phone" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-geist">Phone</p>
<p className="text-sm font-geist">+91 98765 43210</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="text-gold-500" icon="lucide:mail" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wider font-geist">Email</p>
<p className="text-sm font-geist">hello@haya.in</p>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-400 ml-2 font-geist">Name</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder-zinc-600" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-400 ml-2 font-geist">Date</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all text-zinc-300" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-400 ml-2 font-geist">Service Type</label>
<select className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all text-zinc-300 appearance-none">
<option className="font-geist">Bridal Mehendi</option>
<option className="font-geist">Guest/Party Mehendi</option>
<option className="font-geist">Digital Invite</option>
<option className="font-geist">Gift Hamper</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-400 ml-2 font-geist">Message</label>
<textarea className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder-zinc-600" placeholder="Tell us about your event..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-gold-900/20 transform hover:-translate-y-0.5 mt-2 font-geist" type="button">
                        Send Inquiry
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-700 opacity-0 translate-y-8">
<p className="font-geist">© 2024 HAYA.IN. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms</a>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 md:hidden z-40 flex flex-col gap-3">
<a className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center animate-bounce" href="https://wa.me/">
<iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
</a>
</div>



    </>
  );
}
