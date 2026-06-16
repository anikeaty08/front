import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    function selectDay(btn) {
      document.querySelectorAll('.day-btn').forEach(b => {
        b.classList.remove('bg-gold', 'text-black');
        b.classList.add('bg-soft', 'text-gray-400');
      });
      btn.classList.remove('bg-soft', 'text-gray-400');
      btn.classList.add('bg-gold', 'text-black');
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Animate stat numbers on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-card, .card-hover').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<a className="condensed font-extrabold tracking-tighter text-2xl" href="#">
<span className="text-gold">IRON</span><span className="text-white">PEAK</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link condensed font-semibold text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="nav-link condensed font-semibold text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors" href="#stats">Results</a>
<a className="nav-link condensed font-semibold text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors" href="#coaches">Coaches</a>
<a className="nav-link condensed font-semibold text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-black condensed tracking-wider uppercase" href="#pricing">Join Now</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 noise-overlay bg-dark">

<div className="absolute inset-0 diagonal-stripe opacity-60"></div>
<div className="absolute top-20 right-0 w-1/2 h-full opacity-10" style={{background: 'radial-gradient(ellipse at right, #FF6B00 0%, transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10" style={{background: 'radial-gradient(ellipse at left, #F5C518 0%, transparent 60%)'}}></div>

<div className="absolute top-1/4 left-0 w-full h-px opacity-10" style={{background: 'linear-gradient(90deg, transparent, #F5C518, transparent)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
<div className="flex-1">

<div className="inline-flex items-center gap-2 bg-soft rounded-full px-4 py-2 mb-6 border border-gray-700">
<span className="live-dot w-2 h-2 rounded-full bg-neon-o inline-block"></span>
<span className="text-xs font-medium text-gray-400 condensed tracking-widest uppercase">247 members training now</span>
</div>
<h1 className="condensed font-extrabold leading-none tracking-tighter mb-4">
<span className="block hero-number text-white opacity-10 absolute -left-4 top-0 select-none" style={{fontSize: 'clamp(8rem, 25vw, 20rem)', lineHeight: '0.85', zIndex: '-1'}}>01</span>
<span className="block text-gold text-glow-gold" style={{fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', letterSpacing: '0.3em', fontWeight: '600'}}>PUSH YOUR</span>
<span className="block section-title text-white">ABSOLUTE</span>
<span className="block section-title" style={{color: '#FF6B00', textShadow: '0 0 40px rgba(255,107,0,0.5)'}}>LIMIT.</span>
</h1>
<p className="text-gray-400 font-medium max-w-md mb-8 leading-relaxed" style={{fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'}}>
            Elite-level training programs designed to transform your body, sharpen your mind, and dominate every single day. No excuses. Only results.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-primary px-8 py-4 rounded-xl text-base font-bold text-black condensed tracking-widest uppercase inline-flex items-center gap-2 justify-center" href="#pricing">
<iconify-icon icon="solar:bolt-bold" style={{fontSize: '1.2rem'}}></iconify-icon>
              Start Training
            </a>
<a className="px-8 py-4 rounded-xl text-base font-semibold text-white condensed tracking-widest uppercase inline-flex items-center gap-2 justify-center border" href="#programs" style={{borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)'}}>
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
              View Programs
            </a>
</div>

<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
<div>
<div className="condensed font-extrabold text-gold tracking-tight" style={{fontSize: 'clamp(1.5rem, 3vw, 2.2rem)'}}>12K+</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-1">Members</div>
</div>
<div>
<div className="condensed font-extrabold text-white tracking-tight" style={{fontSize: 'clamp(1.5rem, 3vw, 2.2rem)'}}>98%</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-1">Satisfaction</div>
</div>
<div>
<div className="condensed font-extrabold tracking-tight" style={{fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#FF6B00'}}>6×</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-1">Faster Results</div>
</div>
</div>
</div>

<div className="w-full lg:w-96 relative">
<div className="bg-mid rounded-2xl border overflow-hidden relative" style={{borderColor: 'rgba(245,197,24,0.15)'}}>

<div className="bg-soft px-5 py-4 flex items-center justify-between border-b" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<span className="condensed font-semibold text-sm tracking-wider uppercase text-gray-400">Today's Workout</span>
<span className="text-xs font-medium px-2 py-1 rounded-full" style={{background: 'rgba(245,197,24,0.15)', color: '#F5C518'}}>HIIT • DAY 14</span>
</div>
<div className="p-5">

<div className="space-y-3 mb-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(255,107,0,0.15)'}}>
<iconify-icon icon="solar:dumbbell-linear" style={{color: '#FF6B00', fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-white">Barbell Squat</div>
<div className="progress-bar mt-1.5" style={{width: '80%'}}></div>
</div>
<span className="text-xs font-semibold text-gold condensed">5×5</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(245,197,24,0.12)'}}>
<iconify-icon icon="solar:running-round-linear" style={{color: '#F5C518', fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-white">Sprint Intervals</div>
<div className="progress-bar mt-1.5" style={{width: '60%'}}></div>
</div>
<span className="text-xs font-semibold text-gold condensed">8×30s</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(255,107,0,0.12)'}}>
<iconify-icon icon="solar:body-linear" style={{color: '#FF6B00', fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-white">Bench Press</div>
<div className="progress-bar mt-1.5" style={{width: '45%'}}></div>
</div>
<span className="text-xs font-semibold text-gold condensed">4×8</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-soft">
<iconify-icon icon="solar:lock-linear" style={{color: '#9A9A9F', fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-500">Deadlift Complex</div>
<div className="h-1 rounded mt-1.5 bg-soft" style={{width: '30%'}}></div>
</div>
<span className="text-xs font-semibold text-gray-600 condensed">Locked</span>
</div>
</div>

<div className="mb-5 p-3 rounded-xl" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)'}}>
<div className="flex justify-between mb-2">
<span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Intensity Level</span>
<span className="text-xs font-bold text-gold condensed">BEAST MODE</span>
</div>
<input className="w-full cursor-pointer" max="100" min="0" type="range" value="85"/>
<div className="flex justify-between mt-1">
<span className="text-xs text-gray-600">Easy</span>
<span className="text-xs text-gray-600">Max</span>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl" style={{background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.12)'}}>
<div className="relative w-14 h-14 flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 56 56">
<circle cx="28" cy="28" fill="none" r="22" stroke="rgba(245,197,24,0.1)" strokeWidth="5"></circle>
<circle cx="28" cy="28" fill="none" r="22" stroke="#F5C518" stroke-dasharray="138.2" stroke-dashoffset="30" strokeLinecap="round" strokeWidth="5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="condensed font-extrabold text-gold text-xs">78%</span>
</div>
</div>
<div>
<div className="condensed font-extrabold text-white text-lg">842 <span className="text-gold">kcal</span></div>
<div className="text-xs text-gray-500 font-medium">of 1,080 goal burned</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-neon-o rounded-xl px-3 py-2 glow-orange">
<div className="condensed font-extrabold text-white text-xs tracking-wider uppercase">🔥 On Fire</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
<span className="text-xs tracking-widest uppercase font-medium text-gray-500 condensed">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" style={{color: '#F5C518', fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</section>

<div className="bg-gold py-3 overflow-hidden relative z-10">
<div className="ticker-wrap">
<div className="ticker-content condensed font-bold text-sm tracking-widest uppercase text-black">
<span className="mx-6">💪 Strength Training</span>
<span className="mx-6">⚡ HIIT Circuits</span>
<span className="mx-6">🏃 Cardio Blast</span>
<span className="mx-6">🔥 Fat Burn</span>
<span className="mx-6">🏋️ Olympic Lifting</span>
<span className="mx-6">🧠 Mental Toughness</span>
<span className="mx-6">💥 Power Training</span>
<span className="mx-6">🥊 Combat Fitness</span>
<span className="mx-6">💪 Strength Training</span>
<span className="mx-6">⚡ HIIT Circuits</span>
<span className="mx-6">🏃 Cardio Blast</span>
<span className="mx-6">🔥 Fat Burn</span>
<span className="mx-6">🏋️ Olympic Lifting</span>
<span className="mx-6">🧠 Mental Toughness</span>
<span className="mx-6">💥 Power Training</span>
<span className="mx-6">🥊 Combat Fitness</span>
</div>
</div>
</div>

<section className="py-24 bg-dark relative" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<div className="section-line w-12 mb-4"></div>
<p className="condensed font-semibold tracking-widest uppercase text-gray-500 text-sm mb-2">Training Programs</p>
<h2 className="condensed font-extrabold tracking-tight text-white medium-title">Built to Break<br/><span className="text-gold">Your Records.</span></h2>
</div>
<a className="text-sm font-semibold text-gray-400 hover:text-gold transition-colors flex items-center gap-1 condensed tracking-wider uppercase" href="#">
          View All <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-hover bg-mid rounded-2xl overflow-hidden border" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="h-2" style={{background: 'linear-gradient(90deg, #FF6B00, #F5C518)'}}></div>
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: 'rgba(255,107,0,0.15)'}}>
<iconify-icon icon="solar:fire-bold" style={{color: '#FF6B00', fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed tracking-wider uppercase" style={{background: 'rgba(255,107,0,0.1)', color: '#FF6B00'}}>Advanced</span>
</div>
<h3 className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '1.5rem'}}>BEAST MODE</h3>
<p className="text-gray-500 text-xs font-medium mb-4 leading-relaxed">12-week hypertrophy program designed for maximum muscle gain and raw strength development.</p>
<div className="flex gap-4 mb-5">
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">12</div>
<div className="text-xs text-gray-600">Weeks</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">5×</div>
<div className="text-xs text-gray-600">Per Week</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">75+</div>
<div className="text-xs text-gray-600">Exercises</div>
</div>
</div>
<a className="w-full btn-primary py-3 rounded-xl text-sm font-bold text-black condensed tracking-wider uppercase flex items-center justify-center gap-2" href="#">
              Start Program <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="card-hover rounded-2xl overflow-hidden relative" style={{background: 'linear-gradient(135deg, rgba(245,197,24,0.1), rgba(255,107,0,0.05))', border: '1px solid rgba(245,197,24,0.3)'}}>
<div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full condensed tracking-wider uppercase">Popular</div>
<div className="h-2 bg-gold"></div>
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: 'rgba(245,197,24,0.15)'}}>
<iconify-icon icon="solar:bolt-bold" style={{color: '#F5C518', fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed tracking-wider uppercase" style={{background: 'rgba(245,197,24,0.1)', color: '#F5C518'}}>Intermediate</span>
</div>
<h3 className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '1.5rem'}}>SHRED X</h3>
<p className="text-gray-400 text-xs font-medium mb-4 leading-relaxed">8-week fat-shredding HIIT program combining metabolic conditioning and strength circuits for elite results.</p>
<div className="flex gap-4 mb-5">
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">8</div>
<div className="text-xs text-gray-600">Weeks</div>
</div>
<div className="w-px bg-gray-700"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">4×</div>
<div className="text-xs text-gray-600">Per Week</div>
</div>
<div className="w-px bg-gray-700"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">50+</div>
<div className="text-xs text-gray-600">Exercises</div>
</div>
</div>
<a className="btn-primary w-full py-3 rounded-xl text-sm font-bold text-black condensed tracking-wider uppercase flex items-center justify-center gap-2" href="#">
              Start Program <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="card-hover bg-mid rounded-2xl overflow-hidden border" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="h-2" style={{background: 'linear-gradient(90deg, #E8FF00, #F5C518)'}}></div>
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: 'rgba(232,255,0,0.1)'}}>
<iconify-icon icon="solar:running-round-linear" style={{color: '#E8FF00', fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed tracking-wider uppercase" style={{background: 'rgba(232,255,0,0.08)', color: '#E8FF00'}}>Beginner</span>
</div>
<h3 className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '1.5rem'}}>IGNITE</h3>
<p className="text-gray-500 text-xs font-medium mb-4 leading-relaxed">6-week foundational program for beginners. Build explosive athleticism from the ground up.</p>
<div className="flex gap-4 mb-5">
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">6</div>
<div className="text-xs text-gray-600">Weeks</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">3×</div>
<div className="text-xs text-gray-600">Per Week</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-gold text-lg">35+</div>
<div className="text-xs text-gray-600">Exercises</div>
</div>
</div>
<a className="w-full py-3 rounded-xl text-sm font-bold condensed tracking-wider uppercase flex items-center justify-center gap-2 border border-gray-700 text-gray-300 hover:border-gold hover:text-gold transition-colors" href="#">
              Start Program <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mid relative overflow-hidden" id="stats">
<div className="absolute inset-0 diagonal-stripe opacity-40"></div>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), transparent)'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="section-line w-12 mx-auto mb-4"></div>
<p className="condensed font-semibold tracking-widest uppercase text-gray-500 text-sm mb-3">Real Results</p>
<h2 className="condensed font-extrabold tracking-tight medium-title">Numbers Don't<br/><span style={{color: '#FF6B00'}}>Lie.</span></h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="stat-card text-center p-6 bg-dark rounded-2xl border" style={{borderColor: 'rgba(255,255,255,0.06)', cursor: 'default'}}>
<div className="condensed font-extrabold text-gold tracking-tight mb-1" style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)'}}>12,847</div>
<div className="text-xs uppercase tracking-widest font-medium text-gray-500 condensed">Active Members</div>
<div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium" style={{color: '#E8FF00'}}>
<iconify-icon icon="solar:arrow-up-linear" style={{strokeWidth: '1.5', fontSize: '0.8rem'}}></iconify-icon>
            +24% this month
          </div>
</div>
<div className="stat-card text-center p-6 bg-dark rounded-2xl border" style={{borderColor: 'rgba(255,255,255,0.06)', cursor: 'default'}}>
<div className="condensed font-extrabold tracking-tight mb-1" style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#FF6B00'}}>94M+</div>
<div className="text-xs uppercase tracking-widest font-medium text-gray-500 condensed">Calories Burned</div>
<div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium" style={{color: '#E8FF00'}}>
<iconify-icon icon="solar:arrow-up-linear" style={{strokeWidth: '1.5', fontSize: '0.8rem'}}></iconify-icon>
            +38% this month
          </div>
</div>
<div className="stat-card text-center p-6 bg-dark rounded-2xl border" style={{borderColor: 'rgba(255,255,255,0.06)', cursor: 'default'}}>
<div className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)'}}>4.97</div>
<div className="text-xs uppercase tracking-widest font-medium text-gray-500 condensed">Average Rating</div>
<div className="mt-3 flex items-center justify-center gap-1">
<iconify-icon icon="solar:star-bold" style={{color: '#F5C518', fontSize: '0.8rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#F5C518', fontSize: '0.8rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#F5C518', fontSize: '0.8rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#F5C518', fontSize: '0.8rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#F5C518', fontSize: '0.8rem'}}></iconify-icon>
</div>
</div>
<div className="stat-card text-center p-6 bg-dark rounded-2xl border" style={{borderColor: 'rgba(255,255,255,0.06)', cursor: 'default'}}>
<div className="condensed font-extrabold text-gold tracking-tight mb-1" style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)'}}>6×</div>
<div className="text-xs uppercase tracking-widest font-medium text-gray-500 condensed">Faster Results</div>
<div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium" style={{color: '#E8FF00'}}>
            vs. avg gym program
          </div>
</div>
</div>

<div className="mt-12 p-6 bg-dark rounded-2xl border" style={{borderColor: 'rgba(245,197,24,0.15)'}}>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-1">
<h3 className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '1.4rem'}}>Member Transformation Rate</h3>
<p className="text-xs text-gray-500 font-medium">Percentage of members hitting their goals within 90 days</p>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-semibold condensed tracking-wider mb-2">
<span className="text-gray-400 uppercase">Progress</span>
<span className="text-gold">87% hit goals</span>
</div>
<div className="h-3 bg-soft rounded-full overflow-hidden">
<div className="h-full rounded-full" style={{width: '87%', background: 'linear-gradient(90deg, #F5C518, #FF6B00)'}}></div>
</div>
<div className="flex justify-between text-xs text-gray-600 mt-1.5">
<span>0%</span>
<span>100%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark" id="coaches">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="section-line w-12 mb-4"></div>
<p className="condensed font-semibold tracking-widest uppercase text-gray-500 text-sm mb-2">Our Coaches</p>
<h2 className="condensed font-extrabold tracking-tight medium-title">Trained by<br/><span className="text-gold">The Best.</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="card-hover group relative bg-mid rounded-2xl overflow-hidden border" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="h-48 flex items-center justify-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(245,197,24,0.08))'}}>
<div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{background: 'rgba(255,107,0,0.2)', border: '2px solid rgba(255,107,0,0.4)'}}>
              🏋️
            </div>
<div className="absolute bottom-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)'}}></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.2rem'}}>MARCUS STEEL</h3>
<div className="w-2 h-2 rounded-full bg-neon-o live-dot"></div>
</div>
<p className="text-xs font-semibold uppercase tracking-widest" style={{color: '#FF6B00'}}>Strength &amp; Power</p>
<p className="text-gray-500 text-xs mt-2 leading-relaxed">Former Olympic lifter with 15 years of coaching elite athletes worldwide.</p>
<div className="flex gap-3 mt-4">
<div className="text-center">
<div className="condensed font-bold text-white text-sm">850+</div>
<div className="text-xs text-gray-600">Clients</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">15yr</div>
<div className="text-xs text-gray-600">Experience</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">4.9★</div>
<div className="text-xs text-gray-600">Rating</div>
</div>
</div>
</div>
</div>

<div className="card-hover group relative bg-mid rounded-2xl overflow-hidden border" style={{borderColor: 'rgba(245,197,24,0.2)'}}>
<div className="h-48 flex items-center justify-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(245,197,24,0.15), rgba(232,255,0,0.05))'}}>
<div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{background: 'rgba(245,197,24,0.2)', border: '2px solid rgba(245,197,24,0.4)'}}>
              ⚡
            </div>
<div className="absolute top-3 right-3 bg-gold text-black text-xs font-bold px-2 py-0.5 rounded-full condensed">HEAD COACH</div>
<div className="absolute bottom-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #F5C518, transparent)'}}></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.2rem'}}>JADE PHOENIX</h3>
<div className="w-2 h-2 rounded-full bg-neon-o live-dot"></div>
</div>
<p className="text-xs font-semibold uppercase tracking-widest text-gold">HIIT &amp; Conditioning</p>
<p className="text-gray-500 text-xs mt-2 leading-relaxed">World-class HIIT specialist and metabolic performance expert. 3× national champion.</p>
<div className="flex gap-3 mt-4">
<div className="text-center">
<div className="condensed font-bold text-white text-sm">1200+</div>
<div className="text-xs text-gray-600">Clients</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">12yr</div>
<div className="text-xs text-gray-600">Experience</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">5.0★</div>
<div className="text-xs text-gray-600">Rating</div>
</div>
</div>
</div>
</div>

<div className="card-hover group relative bg-mid rounded-2xl overflow-hidden border" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="h-48 flex items-center justify-center relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(232,255,0,0.1), rgba(245,197,24,0.05))'}}>
<div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{background: 'rgba(232,255,0,0.15)', border: '2px solid rgba(232,255,0,0.3)'}}>
              🥊
            </div>
<div className="absolute bottom-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, #E8FF00, transparent)'}}></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.2rem'}}>DEX VALOR</h3>
<div className="w-2 h-2 rounded-full" style={{background: '#9A9A9F'}}></div>
</div>
<p className="text-xs font-semibold uppercase tracking-widest" style={{color: '#E8FF00'}}>Combat &amp; Agility</p>
<p className="text-gray-500 text-xs mt-2 leading-relaxed">Ex-MMA fighter turned performance coach. Specializes in agility, explosiveness and combat fitness.</p>
<div className="flex gap-3 mt-4">
<div className="text-center">
<div className="condensed font-bold text-white text-sm">600+</div>
<div className="text-xs text-gray-600">Clients</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">9yr</div>
<div className="text-xs text-gray-600">Experience</div>
</div>
<div className="w-px bg-gray-800"></div>
<div className="text-center">
<div className="condensed font-bold text-white text-sm">4.8★</div>
<div className="text-xs text-gray-600">Rating</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mid relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<div className="section-line w-12 mb-4"></div>
<p className="condensed font-semibold tracking-widest uppercase text-gray-500 text-sm mb-2">Weekly Schedule</p>
<h2 className="condensed font-extrabold tracking-tight medium-title">Every Day Is<br/><span style={{color: '#FF6B00'}}>Game Day.</span></h2>
</div>

<div className="flex gap-2 flex-wrap">
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-gold text-black" onclick="selectDay(this)">MON</button>
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-soft text-gray-400 hover:text-white transition-colors" onclick="selectDay(this)">TUE</button>
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-soft text-gray-400 hover:text-white transition-colors" onclick="selectDay(this)">WED</button>
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-soft text-gray-400 hover:text-white transition-colors" onclick="selectDay(this)">THU</button>
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-soft text-gray-400 hover:text-white transition-colors" onclick="selectDay(this)">FRI</button>
<button className="day-btn px-3 py-2 rounded-lg text-xs font-bold condensed tracking-wider uppercase bg-soft text-gray-400 hover:text-white transition-colors" onclick="selectDay(this)">SAT</button>
</div>
</div>
<div className="space-y-3">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-dark rounded-xl border hover:border-gold transition-colors cursor-pointer" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="w-20 text-center">
<div className="condensed font-bold text-gold text-sm">06:00</div>
<div className="text-xs text-gray-600">60 min</div>
</div>
<div className="w-px h-10 bg-gray-800 hidden sm:block"></div>
<div className="flex-1">
<div className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.1rem'}}>Morning HIIT Blast</div>
<div className="text-xs text-gray-500 mt-0.5">with Coach Jade Phoenix</div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-gray-500 font-medium">
<span className="text-gold font-bold">12</span>/20 spots
            </div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed" style={{background: 'rgba(255,107,0,0.12)', color: '#FF6B00'}}>Filling Fast</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-dark rounded-xl border hover:border-gold transition-colors cursor-pointer" style={{borderColor: 'rgba(245,197,24,0.2)'}}>
<div className="w-20 text-center">
<div className="condensed font-bold text-gold text-sm">08:30</div>
<div className="text-xs text-gray-600">90 min</div>
</div>
<div className="w-px h-10 bg-gray-700 hidden sm:block"></div>
<div className="flex-1">
<div className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.1rem'}}>Power Lifting Fundamentals</div>
<div className="text-xs text-gray-500 mt-0.5">with Coach Marcus Steel</div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-gray-500 font-medium">
<span className="text-gold font-bold">5</span>/15 spots
            </div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed" style={{background: 'rgba(245,197,24,0.1)', color: '#F5C518'}}>Open</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-dark rounded-xl border hover:border-gold transition-colors cursor-pointer" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="w-20 text-center">
<div className="condensed font-bold text-gold text-sm">12:00</div>
<div className="text-xs text-gray-600">45 min</div>
</div>
<div className="w-px h-10 bg-gray-800 hidden sm:block"></div>
<div className="flex-1">
<div className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.1rem'}}>Lunchtime Circuit</div>
<div className="text-xs text-gray-500 mt-0.5">with Coach Dex Valor</div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-gray-500 font-medium">
<span className="font-bold" style={{color: '#FF6B00'}}>20</span>/20 spots
            </div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed" style={{background: 'rgba(255,50,50,0.1)', color: '#ff5555'}}>Full</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-dark rounded-xl border hover:border-gold transition-colors cursor-pointer" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="w-20 text-center">
<div className="condensed font-bold text-gold text-sm">18:00</div>
<div className="text-xs text-gray-600">75 min</div>
</div>
<div className="w-px h-10 bg-gray-800 hidden sm:block"></div>
<div className="flex-1">
<div className="condensed font-extrabold text-white tracking-tight" style={{fontSize: '1.1rem'}}>Beast Mode Evening Session</div>
<div className="text-xs text-gray-500 mt-0.5">with Coach Marcus Steel</div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-gray-500 font-medium">
<span className="text-gold font-bold">8</span>/25 spots
            </div>
<span className="text-xs font-semibold px-2 py-1 rounded-full condensed" style={{background: 'rgba(245,197,24,0.1)', color: '#F5C518'}}>Open</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="section-line w-12 mx-auto mb-4"></div>
<p className="condensed font-semibold tracking-widest uppercase text-gray-500 text-sm mb-3">Membership Plans</p>
<h2 className="condensed font-extrabold tracking-tight medium-title">Invest in Your<br/><span className="text-gold">Strongest Self.</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="plan-card bg-mid rounded-2xl p-6 border transition-all" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<p className="condensed font-bold uppercase tracking-widest text-gray-500 text-xs mb-3">Starter</p>
<div className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '2.5rem'}}>$39<span className="text-base font-semibold text-gray-500">/mo</span></div>
<p className="text-xs text-gray-500 mb-6">Perfect for getting started</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#F5C518', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
              Gym floor access
            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#F5C518', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
              5 group classes/month
            </li>
<li className="flex items-center gap-2 text-sm text-gray-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#F5C518', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
              App access
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#555', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
<span className="line-through">Personal coaching</span>
</li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#555', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
<span className="line-through">Nutrition plan</span>
</li>
</ul>
<a className="w-full py-3 rounded-xl text-sm font-bold condensed tracking-wider uppercase flex items-center justify-center border border-gray-700 text-gray-300 hover:border-gold hover:text-gold transition-colors" href="#">
            Get Started
          </a>
</div>

<div className="plan-card relative bg-mid rounded-2xl p-6 border glow-gold" style={{borderColor: 'rgba(245,197,24,0.4)', transform: 'scale(1.03)'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-primary px-4 py-1 rounded-full text-xs font-bold text-black condensed tracking-widest uppercase">Most Popular</div>
<p className="condensed font-bold uppercase tracking-widest text-gold text-xs mb-3">Elite</p>
<div className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '2.5rem'}}>$89<span className="text-base font-semibold text-gray-500">/mo</span></div>
<p className="text-xs text-gray-500 mb-6">For serious athletes</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#F5C518', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Unlimited gym access
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#F5C518', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Unlimited group classes
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#F5C518', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Full app + programs
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#F5C518', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              2× monthly coaching
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#555', strokeWidth: '1.5', flexShrink: '0'}}></iconify-icon>
<span className="line-through">Custom nutrition plan</span>
</li>
</ul>
<a className="w-full btn-primary py-3 rounded-xl text-sm font-bold text-black condensed tracking-wider uppercase flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:bolt-bold" style={{fontSize: '1rem'}}></iconify-icon>
            Join Elite
          </a>
</div>

<div className="plan-card bg-mid rounded-2xl p-6 border transition-all" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<p className="condensed font-bold uppercase tracking-widest text-gray-500 text-xs mb-3">Ultimate</p>
<div className="condensed font-extrabold text-white tracking-tight mb-1" style={{fontSize: '2.5rem'}}>$149<span className="text-base font-semibold text-gray-500">/mo</span></div>
<p className="text-xs text-gray-500 mb-6">Maximum transformation</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#FF6B00', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Everything in Elite
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#FF6B00', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Weekly 1:1 coaching
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#FF6B00', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Custom nutrition plan
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#FF6B00', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Recovery &amp; mobility
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#FF6B00', fontSize: '1rem', flexShrink: '0'}}></iconify-icon>
              Priority class booking
            </li>
</ul>
<a className="w-full py-3 rounded-xl text-sm font-bold condensed tracking-wider uppercase flex items-center justify-center transition-all" href="#" style={{background: 'rgba(255,107,0,0.12)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.3)'}}>
            Go Ultimate
          </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" style={{background: '#111113'}}>
<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), transparent)'}}></div>
<div className="diagonal-stripe absolute inset-0 opacity-30"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="condensed font-extrabold tracking-tight mb-4" style={{fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: '1'}}>
<span className="text-white">DON'T WAIT.</span><br/>
<span className="text-gold text-glow-gold">DOMINATE</span><br/>
<span className="text-white">NOW.</span>
</div>
<p className="text-gray-400 font-medium max-w-lg mx-auto mb-10 leading-relaxed">Every day you delay is a day your competition is getting stronger. Join 12,000+ members already transforming their lives at IRONPEAK.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
<a className="btn-primary px-10 py-4 rounded-xl text-base font-bold text-black condensed tracking-widest uppercase inline-flex items-center gap-2" href="#pricing">
<iconify-icon icon="solar:bolt-bold" style={{fontSize: '1.2rem'}}></iconify-icon>
          Claim Your Spot
        </a>
<a className="px-10 py-4 rounded-xl text-base font-semibold text-white condensed tracking-widest uppercase inline-flex items-center gap-2 border" href="tel:+18005550100" style={{borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)'}}>
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5', fontSize: '1.1rem'}}></iconify-icon>
          Call Us Now
        </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#F5C518', strokeWidth: '1.5'}}></iconify-icon>
          No commitment required
        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:refresh-linear" style={{color: '#F5C518', strokeWidth: '1.5'}}></iconify-icon>
          Cancel anytime
        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:medal-linear" style={{color: '#F5C518', strokeWidth: '1.5'}}></iconify-icon>
          30-day money back guarantee
        </div>
</div>
</div>
</section>

<footer className="bg-mid border-t py-12" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-10 mb-10">
<div className="col-span-1">
<div className="condensed font-extrabold tracking-tighter text-2xl mb-3">
<span className="text-gold">IRON</span><span className="text-white">PEAK</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-4">Elite training facilities built for athletes who refuse to settle. Open 7 days a week, 5am–11pm.</p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-lg bg-soft flex items-center justify-center hover:bg-gold group transition-colors" href="#">
<iconify-icon className="group-hover:text-black" icon="solar:instagram-linear" style={{color: '#9A9A9F', strokeWidth: '1.5', fontSize: '0.9rem'}}></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg bg-soft flex items-center justify-center hover:bg-gold group transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" style={{color: '#9A9A9F', strokeWidth: '1.5', fontSize: '0.9rem'}}></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg bg-soft flex items-center justify-center hover:bg-gold group transition-colors" href="#">
<iconify-icon icon="solar:youtube-linear" style={{color: '#9A9A9F', strokeWidth: '1.5', fontSize: '0.9rem'}}></iconify-icon>
</a>
</div>
</div>
<div>
<p className="condensed font-semibold uppercase tracking-widest text-xs text-gray-400 mb-4">Programs</p>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Beast Mode</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Shred X</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Ignite</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Combat Fit</a></li>
</ul>
</div>
<div>
<p className="condensed font-semibold uppercase tracking-widest text-xs text-gray-400 mb-4">Company</p>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Our Coaches</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-gray-500 hover:text-gold transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<p className="condensed font-semibold uppercase tracking-widest text-xs text-gray-400 mb-4">Contact</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5', color: '#F5C518'}}></iconify-icon>
              123 Iron St, Peak City
            </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5', color: '#F5C518'}}></iconify-icon>
              +1 (800) 555-0100
            </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5', color: '#F5C518'}}></iconify-icon>
              hello@ironpeak.com
            </li>
</ul>
</div>
</div>
<div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<p className="text-xs text-gray-600">© 2025 IRONPEAK. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-gray-600 hover:text-gray-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-600 hover:text-gray-400 transition-colors" href="#">Terms</a>
<a className="text-xs text-gray-600 hover:text-gray-400 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
