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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-reverse': 'marqueeReverse 40s linear infinite',
'float': 'float 8s ease-in-out infinite',
'draw': 'draw 0.6s ease-in-out forwards',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
marqueeReverse: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(0%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
draw: {
'0%': { strokeDasharray: 100, strokeDashoffset: 100 },
'100%': { strokeDasharray: 100, strokeDashoffset: 0 },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Generate Waveform Bars
        const waveform = document.getElementById('waveform');
        for (let i = 0; i < 40; i++) {
            const div = document.createElement('div');
            const height = Math.floor(Math.random() * 80) + 20;
            div.className = 'bar w-1 bg-stone-800 rounded-full';
            div.style.height = `${height}%`;
            div.style.animationDelay = `-${Math.random()}s`;
            waveform.appendChild(div);
        }

        // Audio Toggle
        function toggleAudio(btn) {
            const icon = btn.querySelector('iconify-icon');
            const waveform = document.getElementById('waveform');
            const isPlaying = icon.getAttribute('icon').includes('pause');
            
            if (isPlaying) {
                icon.setAttribute('icon', 'solar:play-bold');
                waveform.classList.remove('playing');
            } else {
                icon.setAttribute('icon', 'solar:pause-bold');
                waveform.classList.add('playing');
            }
        }

        // Spotlight
        function updateSpotlight(e) {
            const cards = document.getElementsByClassName('spotlight-card');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        }

        // Accordion
        function toggleAccordion(btn) {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(acc => acc.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        }

        // Modal
        const modal = document.getElementById('booking-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');
        const formView = document.getElementById('form-view');
        const thankYouView = document.getElementById('thank-you-view');
        const planLabel = document.getElementById('plan-label');
        const submitBtn = document.getElementById('submit-btn');
        const loader = submitBtn.querySelector('.loader');

        function openBooking(planName) {
            planLabel.textContent = planName;
            formView.classList.remove('hidden', 'opacity-0', 'translate-y-4');
            thankYouView.classList.add('hidden');
            thankYouView.classList.remove('animate-draw');
            modal.classList.remove('hidden');
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            backdrop.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                loader.classList.add('hidden');
                submitBtn.disabled = false;
            }, 500);
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            loader.classList.remove('hidden');
            submitBtn.disabled = true;
            setTimeout(() => {
                formView.style.opacity = '0';
                formView.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    formView.classList.add('hidden');
                    thankYouView.classList.remove('hidden');
                    void thankYouView.offsetWidth; 
                    thankYouView.style.opacity = '1';
                    setTimeout(() => { thankYouView.classList.add('animate-draw'); }, 100);
                }, 400);
            }, 1200);
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
      
<div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply bg-grain"></div>

<nav className="fixed w-full z-40 top-0 left-0">
<div className="glass-panel flex transition-all duration-500 hover:shadow-md max-w-6xl rounded-full mt-4 mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between">
<a className="text-xl font-serif tracking-tight font-medium text-stone-900 uppercase relative group" href="#">
                Nur.
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#methodology">Method</a>
<a className="hover:text-stone-900 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-stone-900 transition-colors" href="#plans">Plans</a>
<a className="hover:text-stone-900 transition-colors" href="#library">Library</a>
</div>
<button className="group relative overflow-hidden rounded-full bg-stone-900 text-stone-50 px-6 py-2.5 text-xs font-medium transition-transform active:scale-95" onclick="openBooking('General Inquiry')">
<span className="relative z-10 flex items-center gap-2">
                    Book Session
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-stone-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="opacity-30 z-0 absolute inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-stone-200 to-stone-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 text-center max-w-3xl px-6">
<div className="reveal-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 mb-6 tracking-wide hover:bg-white transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
</span>
                Waitlist Open for Fall 2024
            </div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-stone-900 mb-6 tracking-tight font-medium">
<span className="block reveal-text delay-100">Refining the heart</span>
<span className="block reveal-text delay-200 text-stone-500 italic">through sacred recitation.</span>
</h1>
<p className="reveal-text delay-300 text-stone-500 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Master Tajweed with personalized 1-on-1 guidance. A gentle, modest environment designed for spiritual growth and technical excellence.
            </p>
<div className="reveal-text delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group relative px-8 py-3.5 bg-stone-900 text-white rounded-full text-sm font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-stone-200 hover:-translate-y-0.5" onclick="openBooking('Discovery Call')">
<span className="flex items-center gap-2 z-10 relative">
                        Start Your Journey
                        <iconify-icon className="animate-pulse" icon="solar:stars-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-medium px-6 py-3 transition-colors group" onclick="document.getElementById('library').scrollIntoView()">
<span className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 transition-colors">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</span>
                    Listen to Recitation
                </button>
</div>
</div>
</header>

<div className="w-full bg-stone-900 py-3 overflow-hidden whitespace-nowrap border-y border-stone-800">
<div className="inline-flex animate-marquee items-center gap-8">
<span className="text-stone-400 text-xs tracking-[0.2em] uppercase flex items-center gap-8">
                Tajweed <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Tarteel <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Makharij <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Sifat <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Ihsan <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Discipline <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Preservation <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Tajweed <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Tarteel <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Makharij <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Sifat <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Ihsan <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Discipline <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                Preservation <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
</span>
</div>
</div>

<section className="py-24 px-6 bg-white" id="methodology">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-8">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight">The Talaqqi Method</h2>
<p className="text-stone-500 leading-relaxed text-sm md:text-base">
                        Our instruction follows the traditional method of oral transmission (Talaqqi), where the student recites to the teacher, and the teacher corrects the student. This ensures the preservation of the Quran as it was revealed.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-900 shrink-0 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">1</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Observation</h3>
<p className="text-xs text-stone-500 leading-relaxed">The teacher demonstrates the correct articulation point and manner of the letter.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-900 shrink-0 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">2</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Repetition</h3>
<p className="text-xs text-stone-500 leading-relaxed">The student repeats under close supervision until the sound is mastered.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-900 shrink-0 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">3</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Application</h3>
<p className="text-xs text-stone-500 leading-relaxed">Rules are applied in continuous recitation (Wasl) to ensure flow and rhythm.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 relative">
<div className="aspect-square rounded-2xl overflow-hidden border border-stone-100 relative bg-stone-50">
<div className="absolute inset-0 bg-stone-100 animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center text-stone-300">
<iconify-icon className="text-6xl opacity-20" icon="solar:book-linear"></iconify-icon>
</div>

<div className="absolute top-8 right-8 w-24 h-24 border border-stone-200 rounded-full opacity-50"></div>
<div className="absolute bottom-12 left-12 w-32 h-32 border border-stone-200 rounded-full opacity-50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-y border-stone-200/50" id="curriculum">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-2 block">Core Syllabus</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3 font-medium tracking-tight">Rules of Articulation</h2>
</div>
<button className="hover:text-stone-900 flex gap-2 md:mt-0 group text-sm font-medium text-stone-600 mt-4 gap-x-2 gap-y-2 items-center" onclick="openBooking('Curriculum Inquiry')">
                    View Full Syllabus
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card relative bg-white rounded-2xl p-8 border border-stone-100 overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1" style={{'--mouse-x': '365.00533866882324px', '--mouse-y': '1703.0907592773438px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-stone-700 text-2xl" icon="solar:soundwave-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Makharij</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Understanding the precise origin of sound for every Arabic letter.</p>
<div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
<div className="w-0 h-full bg-stone-900 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
</div>
</div>

<div className="spotlight-card relative bg-white rounded-2xl p-8 border border-stone-100 overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1" style={{'--mouse-x': '365.00533866882324px', '--mouse-y': '1455.2437744140625px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-stone-700 text-2xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Sifat</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Characteristics that distinguish letters sharing the same exit point.</p>
<div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
<div className="w-0 h-full bg-stone-900 group-hover:w-full transition-all duration-700 ease-out delay-75"></div>
</div>
</div>
</div>

<div className="spotlight-card relative bg-white rounded-2xl p-8 border border-stone-100 overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1" style={{'--mouse-x': '365.00533866882324px', '--mouse-y': '1184.6476821899414px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-stone-700 text-2xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Ahkam</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">Nun Sakinah, Madd, and the detailed laws of recitation flow.</p>
<div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
<div className="w-0 h-full bg-stone-900 group-hover:w-full transition-all duration-700 ease-out delay-150"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="plans">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight text-center mb-16">Membership Plans</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-stone-100 bg-stone-50 hover:border-stone-300 transition-all">
<div className="mb-4">
<h3 className="text-lg font-medium text-stone-900">Foundations</h3>
<p className="text-sm text-stone-500 mt-1">For beginners</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-serif text-stone-900">$45</span>
<span className="text-xs text-stone-500">/ session</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            30-min 1-on-1 session
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Makharij correction
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            Homework assignments
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors" onclick="openBooking('Foundations Plan')">Select Plan</button>
</div>

<div className="p-8 rounded-3xl bg-stone-900 text-white relative transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 right-0 bg-stone-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl text-stone-300">Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium">Dedication</h3>
<p className="text-sm text-stone-400 mt-1">Serious students</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-serif">$150</span>
<span className="text-xs text-stone-400">/ month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-stone-50" icon="solar:check-circle-bold"></iconify-icon>
                            4 hours of 1-on-1 monthly
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-stone-50" icon="solar:check-circle-bold"></iconify-icon>
                            Personalized curriculum
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300">
<iconify-icon className="text-stone-50" icon="solar:check-circle-bold"></iconify-icon>
                            Direct WhatsApp access
                        </li>
</ul>
<button className="hover:bg-stone-200 transition-colors text-sm font-medium text-stone-900 bg-white w-full rounded-xl pt-3 pb-3" onclick="openBooking('Dedication Plan')">Get Started</button>
</div>

<div className="p-8 rounded-3xl border border-stone-100 bg-stone-50 hover:border-stone-300 transition-all">
<div className="mb-4">
<h3 className="text-lg font-medium text-stone-900">Ijaza Track</h3>
<p className="text-sm text-stone-500 mt-1">Mastery level</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-serif text-stone-900">$200</span>
<span className="text-xs text-stone-500">/ month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            Intensive Sanad preparation
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            Advanced theory (Matn)
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon>
                            Flexible scheduling
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors" onclick="openBooking('Ijaza Plan')">Apply Now</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="library">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<span className="text-xs uppercase tracking-widest text-stone-400 mb-2 block">Audio Library</span>
<h2 className="font-serif text-3xl text-stone-900 font-medium">Correction Recordings</h2>
</div>
<div className="glass-panel rounded-3xl p-6 md:p-8 shadow-sm border border-white/60 transition-transform hover:scale-[1.01] duration-500">
<div className="flex flex-col md:flex-row items-center gap-6">
<button className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-stone-300" onclick="toggleAudio(this)">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</button>
<div className="flex-1 w-full">
<div className="flex justify-between items-center mb-3">
<div>
<h4 className="text-sm font-semibold text-stone-900">Surah Al-Fatiha <span className="text-stone-400 font-normal mx-2">|</span> <span className="text-xs font-normal text-stone-500">Practice Mode</span></h4>
</div>
<span className="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-1 rounded-md">01:42</span>
</div>

<div className="h-10 flex items-end gap-1 w-full justify-between opacity-50" id="waveform"><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '80%', animationDelay: '-0.0420438s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '99%', animationDelay: '-0.71455s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '34%', animationDelay: '-0.857895s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '27%', animationDelay: '-0.888527s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '97%', animationDelay: '-0.961895s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '64%', animationDelay: '-0.718868s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '73%', animationDelay: '-0.362496s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '50%', animationDelay: '-0.461251s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '72%', animationDelay: '-0.511251s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '79%', animationDelay: '-0.818729s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '42%', animationDelay: '-0.195114s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '27%', animationDelay: '-0.544297s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '80%', animationDelay: '-0.539099s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '81%', animationDelay: '-0.895245s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '76%', animationDelay: '-0.557228s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '23%', animationDelay: '-0.274095s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '46%', animationDelay: '-0.487745s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '88%', animationDelay: '-0.353248s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '36%', animationDelay: '-0.241462s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '74%', animationDelay: '-0.376375s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '93%', animationDelay: '-0.651944s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '99%', animationDelay: '-0.499109s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '52%', animationDelay: '-0.657187s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '77%', animationDelay: '-0.789821s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '85%', animationDelay: '-0.459233s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '64%', animationDelay: '-0.572961s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '50%', animationDelay: '-0.472156s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '61%', animationDelay: '-0.498406s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '66%', animationDelay: '-0.0745195s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '41%', animationDelay: '-0.503804s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '90%', animationDelay: '-0.806937s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '79%', animationDelay: '-0.849651s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '93%', animationDelay: '-0.31405s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '49%', animationDelay: '-0.00947631s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '64%', animationDelay: '-0.389647s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '98%', animationDelay: '-0.26238s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '76%', animationDelay: '-0.806801s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '98%', animationDelay: '-0.502189s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '75%', animationDelay: '-0.885011s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '96%', animationDelay: '-0.738487s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '84%', animationDelay: '-0.607411s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '92%', animationDelay: '-0.241188s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '23%', animationDelay: '-0.620229s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '95%', animationDelay: '-0.0411537s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '51%', animationDelay: '-0.0346773s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '32%', animationDelay: '-0.77613s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '49%', animationDelay: '-0.00840251s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '73%', animationDelay: '-0.644409s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '53%', animationDelay: '-0.203912s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '21%', animationDelay: '-0.174064s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '39%', animationDelay: '-0.262934s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '50%', animationDelay: '-0.214868s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '89%', animationDelay: '-0.277996s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '41%', animationDelay: '-0.908946s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '87%', animationDelay: '-0.161064s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '82%', animationDelay: '-0.937874s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '69%', animationDelay: '-0.987675s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '50%', animationDelay: '-0.98316s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '31%', animationDelay: '-0.194827s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '90%', animationDelay: '-0.617724s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '36%', animationDelay: '-0.244258s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '20%', animationDelay: '-0.80432s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '73%', animationDelay: '-0.311357s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '63%', animationDelay: '-0.636334s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '26%', animationDelay: '-0.391465s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '22%', animationDelay: '-0.715322s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '29%', animationDelay: '-0.348323s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '75%', animationDelay: '-0.454837s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '65%', animationDelay: '-0.286333s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '50%', animationDelay: '-0.240494s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '95%', animationDelay: '-0.119368s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '47%', animationDelay: '-0.579501s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '52%', animationDelay: '-0.0174357s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '45%', animationDelay: '-0.278303s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '39%', animationDelay: '-0.248201s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '21%', animationDelay: '-0.948658s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '35%', animationDelay: '-0.0891541s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '27%', animationDelay: '-0.768369s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '27%', animationDelay: '-0.923735s'}}></div><div className="bar w-1 bg-stone-800 rounded-full" style={{height: '86%', animationDelay: '-0.832607s'}}></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<h2 className="font-serif text-3xl text-center text-stone-900 mb-12 font-medium">Student Reflections</h2>
<div className="relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex animate-marquee gap-6 px-6">

<div className="w-[350px] shrink-0 bg-stone-50 p-6 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-stone-400 mb-3">
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed mb-4">"I never realized how much I was missing in my pronunciation until I started here. The teacher is incredibly patient."</p>
<span className="text-xs font-bold text-stone-900">Sarah A.</span>
</div>
<div className="w-[350px] shrink-0 bg-stone-50 p-6 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-stone-400 mb-3">
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed mb-4">"The structured approach to Makharij changed my prayer completely. Highly recommended for beginners."</p>
<span className="text-xs font-bold text-stone-900">Omar K.</span>
</div>
<div className="w-[350px] shrink-0 bg-stone-50 p-6 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-stone-400 mb-3">
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed mb-4">"A spiritually uplifting environment. It's not just about rules, it's about connecting with the words."</p>
<span className="text-xs font-bold text-stone-900">Amina Z.</span>
</div>
<div className="w-[350px] shrink-0 bg-stone-50 p-6 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-stone-400 mb-3">
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-stone-800" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 leading-relaxed mb-4">"The flexibility of scheduling allowed me to balance my studies with work. JazakAllah Khair."</p>
<span className="text-xs font-bold text-stone-900">Yusuf M.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-200" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl text-center text-stone-900 mb-12 font-medium">Common Questions</h2>
<div className="space-y-4">
<div className="accordion-item border border-stone-200 rounded-xl overflow-hidden bg-white">
<button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-stone-900">Is this suitable for absolute beginners?</span>
<iconify-icon className="accordion-icon text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white">
<div className="px-6 py-4 text-sm text-stone-500 leading-relaxed border-t border-stone-100">
                            Yes, we have a specialized "Foundations" track designed specifically for those who are just starting their journey with the Arabic alphabet and pronunciation.
                        </div>
</div>
</div>
<div className="accordion-item border border-stone-200 rounded-xl overflow-hidden bg-white">
<button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-stone-900">How are the classes conducted?</span>
<iconify-icon className="accordion-icon text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white">
<div className="px-6 py-4 text-sm text-stone-500 leading-relaxed border-t border-stone-100">
                            All classes are held via Zoom with high-quality audio. We ensure a segregated, private environment for female students with female instructors.
                        </div>
</div>
</div>
<div className="accordion-item border border-stone-200 rounded-xl overflow-hidden bg-white">
<button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-stone-900">Do you offer Ijaza certification?</span>
<iconify-icon className="accordion-icon text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content bg-white">
<div className="px-6 py-4 text-sm text-stone-500 leading-relaxed border-t border-stone-100">
                            Yes, for advanced students who complete the recitation of the entire Quran with mastery, we offer a connected chain (Sanad) of transmission.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-serif text-2xl text-stone-200 tracking-tight block mb-4">Nur.</span>
<p className="text-sm text-stone-500 max-w-xs">Dedicated to the preservation of the Holy Quran through traditional methods of instruction.</p>
</div>
<div>
<h4 className="text-stone-200 text-sm font-semibold mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Methodology</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Instructors</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-200 text-sm font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase tracking-widest opacity-50">© 2024 Nur Studies.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear"></iconify-icon></a>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-[100] hidden" id="booking-modal" role="dialog">
<div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity opacity-0 duration-500" id="modal-backdrop"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl transform scale-95 opacity-0 transition-all duration-500 overflow-hidden relative" id="modal-content">
<button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition-all z-20" onclick="closeModal()">
<iconify-icon className="text-lg" icon="solar:close-linear"></iconify-icon>
</button>
<div className="p-8 md:p-10 transition-all duration-500" id="form-view">
<div className="mb-8">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border border-stone-200 px-2 py-1 rounded-md inline-block mb-3" id="plan-label">Selected Plan</span>
<h2 className="text-3xl font-serif text-stone-900">Complete Request</h2>
<p className="text-sm text-stone-500 mt-2">Secure your slot for the upcoming semester.</p>
</div>
<form className="space-y-5" onsubmit="handleFormSubmit(event)">
<div className="group">
<label className="block text-xs font-semibold text-stone-700 mb-1.5 ml-1">Full Name</label>
<input className="input-animated w-full bg-stone-50 border border-stone-200 rounded-xl py-3.5 px-4 text-sm text-stone-900 placeholder-stone-400 outline-none focus:border-stone-500 focus:bg-white" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-semibold text-stone-700 mb-1.5 ml-1">Email Address</label>
<input className="input-animated w-full bg-stone-50 border border-stone-200 rounded-xl py-3.5 px-4 text-sm text-stone-900 placeholder-stone-400 outline-none focus:border-stone-500 focus:bg-white" placeholder="sister@example.com" required="" type="email"/>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-6 hover:bg-stone-800 transition-all shadow-lg hover:shadow-stone-300 transform active:scale-[0.98] flex justify-center items-center gap-2 relative overflow-hidden group" id="submit-btn" type="submit">
<span className="relative z-10 flex items-center gap-2 btn-text">
                                Confirm &amp; Request
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="loader hidden absolute inset-0 flex items-center justify-center bg-stone-900 z-20">
<iconify-icon className="animate-spin text-2xl" icon="solar:spinner-linear"></iconify-icon>
</div>
</button>
</form>
</div>
<div className="hidden absolute inset-0 bg-stone-50 p-8 md:p-12 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-700" id="thank-you-view">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 relative animate-float">
<div className="absolute inset-0 rounded-full border border-stone-100"></div>
<svg className="w-12 h-12 text-stone-900" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="path-check stroke-current" d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h2 className="text-3xl font-serif text-stone-900 mb-3 tracking-tight">Request Received</h2>
<p className="text-sm text-stone-500 max-w-xs mx-auto mb-8 leading-relaxed">Jazak'Allah Khair. Your details have been securely transmitted. An instructor will contact you shortly.</p>
<button className="group px-6 py-2 rounded-full border border-stone-200 bg-white text-xs font-semibold uppercase tracking-widest text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-all hover:shadow-md" onclick="closeModal()">
                        Return to Home
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
