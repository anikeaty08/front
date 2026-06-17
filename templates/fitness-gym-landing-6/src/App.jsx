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



        // Initialize AOS Animations
        AOS.init({
            once: true,
            offset: 50,
            duration: 600,
            easing: 'ease-out-cubic',
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const observerOptions = {
            root: null,
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 1500; 
                    const increment = target / (duration / 16); 

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            observer.observe(counter);
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
      

<div className="fixed top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent_70%)] pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 cursor-pointer flex items-center gap-2 group">
<div className="w-7 h-7 rounded-sm overflow-hidden flex items-center justify-center bg-slate-900 border border-white/10">
<img alt="Maa Kali Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kali_by_Raja_Ravi_Varma.jpg/320px-Kali_by_Raja_Ravi_Varma.jpg"/>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors">apex<span className="text-cyan-400">.</span>fit</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#services">Programs</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">Membership</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#contact">Login</a>
<a className="bg-white text-slate-950 hover:bg-slate-200 px-4 py-2 rounded-full text-xs font-semibold transition-all" href="#pricing">
                        Join Now
                    </a>
</div>

<div className="flex md:hidden">
<button className="text-slate-400 hover:text-white focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="20"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-slate-950 border-b border-white/5" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1">
<a className="block px-3 py-2 text-sm font-medium text-white" href="#home">Home</a>
<a className="block px-3 py-2 text-sm font-medium text-slate-400" href="#about">About</a>
<a className="block px-3 py-2 text-sm font-medium text-slate-400" href="#services">Programs</a>
<a className="block px-3 py-2 text-sm font-medium text-slate-400" href="#pricing">Pricing</a>
<a className="block px-3 py-2 text-sm font-medium text-cyan-400" href="#contact">Join Now</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0 bg-slate-950">
<div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdib3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGwyNC0yNHY0bC0yMCAyMHYtNHptMC0xMmwyNC0yNHY0bC0yMCAyMHYtNHptMC0xMmwyNC0yNHY0bC0yMCAyMHYtNHptLTI0IDM2bDI0LTI0djRsLTIwIDIwdi00em0wLTEybDI0LTI0djRsLTIwIDIwdi00em0wLTEybDI0LTI0djRsLTIwIDIwdi00eiIgZmlsbD0iIzFlMjliYiIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div data-aos="fade-right" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
<span className="iconify text-cyan-400" data-icon="solar:bolt-linear" data-width="14"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-300">Next-Gen Performance</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.05]">
                        Redefine Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600">Human Potential</span>
</h1>
<p className="text-sm sm:text-base text-slate-400 max-w-md font-light mb-10 leading-relaxed">
                        Precision training, biomechanics analysis, and elite recovery protocols. Join a community dedicated to absolute peak performance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-cyan-400 text-slate-950 text-xs font-semibold rounded-full hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]" href="#pricing">
                            Start Membership
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/50 border border-white/10 text-white text-xs font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#about">
                            Explore Facility
                        </a>
</div>

<div className="mt-12 flex items-center gap-6 pt-8 border-t border-white/5">
<div className="flex -space-x-3">
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-slate-950 grayscale object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-slate-950 grayscale object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Member" className="w-8 h-8 rounded-full border-2 border-slate-950 grayscale object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] text-white font-semibold">+2k</div>
</div>
<div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                            Elite Athletes <br/><span className="text-slate-300">Joined this year</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">

<div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-slate-900">
<img alt="Training" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-4 lg:-left-12 glass-card p-5 rounded-xl z-20 w-64 animate-float">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Output</span>
<span className="iconify text-cyan-400" data-icon="solar:graph-up-linear" data-width="14"></span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-3xl font-semibold text-white tracking-tight">842</span>
<span className="text-xs text-slate-500 mb-1">kcal</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[75%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
</div>
<div className="mt-3 flex justify-between text-[10px] text-slate-500 font-medium">
<span>Zone 4</span>
<span className="text-cyan-400">+12% vs last</span>
</div>
</div>

<div className="absolute top-12 -right-4 lg:-right-8 glass-card p-4 rounded-xl z-20 w-48 animate-float-delayed">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<span className="iconify animate-pulse" data-icon="solar:heart-pulse-linear" data-width="16"></span>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5 font-medium">Peak HR</p>
<p className="text-lg font-semibold text-white tracking-tight">184 <span className="text-[10px] text-slate-500 font-normal">bpm</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 px-6 pt-12 pb-24 border-b border-white/5 bg-slate-950">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-xl text-center hover:border-cyan-500/30 transition-colors group">
<h3 className="text-2xl md:text-3xl font-semibold text-white counter tracking-tight" data-target="500">0</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 group-hover:text-cyan-400 transition-colors">Members</p>
</div>

<div className="glass-card p-6 rounded-xl text-center hover:border-cyan-500/30 transition-colors group">
<h3 className="text-2xl md:text-3xl font-semibold text-white counter tracking-tight" data-target="20">0</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 group-hover:text-cyan-400 transition-colors">Coaches</p>
</div>

<div className="glass-card p-6 rounded-xl text-center hover:border-cyan-500/30 transition-colors group">
<h3 className="text-2xl md:text-3xl font-semibold text-white counter tracking-tight" data-target="50">0</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 group-hover:text-cyan-400 transition-colors">Programs</p>
</div>

<div className="glass-card p-6 rounded-xl text-center hover:border-cyan-500/30 transition-colors group">
<h3 className="text-2xl md:text-3xl font-semibold text-white counter tracking-tight" data-target="100">0</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 group-hover:text-cyan-400 transition-colors">Results</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div data-aos="fade-right">
<h2 className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3">Our Philosophy</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight leading-tight">
                        Engineered for the <br/> <span className="text-slate-400">obsessed.</span>
</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                        apex.fit isn't just a gym; it's a high-performance laboratory. We combine biomechanical analysis with traditional strength training to help you break plateaus you didn't know existed.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<span className="mt-0.5 text-cyan-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="18"></span>
</span>
<div>
<h4 className="text-sm font-medium text-white">Data-Driven Training</h4>
<p className="text-xs text-slate-500 mt-1">Real-time tracking of every lift and movement.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 text-cyan-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="18"></span>
</span>
<div>
<h4 className="text-sm font-medium text-white">Recovery Lounge</h4>
<p className="text-xs text-slate-500 mt-1">Cryotherapy, sauna, and massage protocols.</p>
</div>
</div>
</div>
<a className="inline-flex items-center text-xs font-medium text-white hover:text-cyan-400 transition-colors border-b border-white/20 pb-0.5 hover:border-cyan-400" href="#contact">
                        Explore Methodology <span className="iconify ml-2" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="relative" data-aos="fade-left">
<div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Gym Interior" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950">
<span className="iconify" data-icon="lucide:trophy" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Top Rated 2024</p>
<p className="text-[10px] text-slate-400">Performance Index</p>
</div>
</div>
<span className="text-lg font-semibold text-white">9.8</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-y border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
<div>
<h2 className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2">Programs</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Curated Disciplines</h3>
</div>
<p className="text-sm text-slate-500 max-w-xs mt-4 md:mt-0">Choose a path designed to maximize your specific physiological outputs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="0">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:dumbbell" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Hypertrophy</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">Scientific muscle growth using progressive overload and volume tracking.</p>
</div>

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="100">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Endurance</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">VO2 Max optimization through interval training and sustained output sessions.</p>
</div>

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="200">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:flower-2" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Mobility &amp; Flow</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">Injury prevention and range-of-motion enhancement for longevity.</p>
</div>

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="300">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:swords" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Functional Fit</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">High-intensity functional movements for real-world strength application.</p>
</div>

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="400">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">1:1 Coaching</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">Bespoke programming tailored to your unique anatomical structure.</p>
</div>

<div className="group relative bg-slate-900/30 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 border border-white/5 hover:border-cyan-500/30" data-aos="fade-up" data-aos-delay="500">
<div className="flex justify-between items-start mb-8">
<div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:music-2" data-width="20"></span>
</div>
<span className="iconify text-slate-700 group-hover:text-slate-500 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Rhythm Cycle</h4>
<p className="text-xs text-slate-400 leading-relaxed mb-4">Immersive cycling experiences synchronized with high-BPM audio.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2">Membership</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple Pricing</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="rounded-2xl p-8 border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all" data-aos="fade-right">
<h4 className="text-sm font-medium text-slate-400">Entry</h4>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">$49</span><span className="text-slate-500 text-xs">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Off-peak Access</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Cardio Zone</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-600" data-icon="lucide:check" data-width="14"></span> Lockers</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-xs hover:bg-white hover:text-black transition-colors">Select Plan</button>
</div>

<div className="relative rounded-2xl p-8 border border-cyan-500/30 bg-slate-900/60 shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)] z-10" data-aos="zoom-in">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-slate-950 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">Popular</div>
<h4 className="text-sm font-medium text-cyan-400">Pro</h4>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-white">$89</span><span className="text-slate-500 text-xs">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> 24/7 Access</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> All Group Classes</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> Sauna &amp; Spa</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> Basic Nutrition Guide</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-xs hover:bg-cyan-300 transition-colors">Start Trial</button>
</div>

<div className="rounded-2xl p-8 border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all" data-aos="fade-left">
<h4 className="text-sm font-medium text-slate-400">Elite</h4>
<div className="mt-4 mb-6">
<span className="text-3xl font-semibold text-white">$149</span><span className="text-slate-500 text-xs">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> All Pro Features</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> 4x Personal Training</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-cyan-400" data-icon="lucide:check" data-width="14"></span> Recovery Suite</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-xs hover:bg-white hover:text-black transition-colors">Select Plan</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="trainers">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2">Team</h2>
<h3 className="text-3xl font-semibold text-white">Expert Coaches</h3>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors" href="#">
                    View all <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="group" data-aos="fade-up" data-aos-delay="0">
<div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-slate-800">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-semibold text-white">Alex Drago</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">Strength</p>
</div>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>

<div className="group" data-aos="fade-up" data-aos-delay="100">
<div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-slate-800">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-semibold text-white">Sarah Jenks</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">CrossFit</p>
</div>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>

<div className="group" data-aos="fade-up" data-aos-delay="200">
<div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-slate-800">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534343973662-41f22841604a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-semibold text-white">Mike Ross</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">Physique</p>
</div>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
</div>
</div>

<div className="group" data-aos="fade-up" data-aos-delay="300">
<div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-slate-800">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="text-sm font-semibold text-white">Emma Stone</h4>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">Mobility</p>
</div>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-12" data-aos="fade-up">
<h3 className="text-3xl font-semibold text-white tracking-tight">The Atmosphere</h3>
</div>
<div className="columns-1 md:columns-3 gap-4 space-y-4">
<div className="break-inside-avoid relative group rounded-lg overflow-hidden" data-aos="fade-up">
<img className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-xs font-medium">Free Weights</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<img className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid relative group rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<img className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-xs font-medium">Cardio Deck</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-lg overflow-hidden" data-aos="fade-up">
<img className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid relative group rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<img className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-xs font-medium">Functional Area</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-white mb-12" data-aos="fade-up">Member Stories</h2>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">

<div className="min-w-[320px] bg-slate-900/30 border border-white/5 p-6 rounded-xl snap-center" data-aos="fade-right">
<div className="flex text-cyan-400 mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The facility is impeccable. The attention to detail in the equipment selection and the knowledge of the staff sets this place apart."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://randomuser.me/api/portraits/men/45.jpg"/>
</div>
<div>
<h5 className="text-white font-medium text-xs">James Carter</h5>
<p className="text-[10px] text-slate-500">Member since 2022</p>
</div>
</div>
</div>

<div className="min-w-[320px] bg-slate-900/30 border border-white/5 p-6 rounded-xl snap-center" data-aos="fade-up">
<div className="flex text-cyan-400 mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I appreciate the data-driven approach. Seeing my progress visualized keeps me motivated unlike any other gym I've been to."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://randomuser.me/api/portraits/women/68.jpg"/>
</div>
<div>
<h5 className="text-white font-medium text-xs">Sophia Martinez</h5>
<p className="text-[10px] text-slate-500">Member since 2023</p>
</div>
</div>
</div>

<div className="min-w-[320px] bg-slate-900/30 border border-white/5 p-6 rounded-xl snap-center" data-aos="fade-left">
<div className="flex text-cyan-400 mb-4 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Clean, modern, and professional. The 24/7 access fits perfectly with my erratic work schedule. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://randomuser.me/api/portraits/men/22.jpg"/>
</div>
<div>
<h5 className="text-white font-medium text-xs">David Kim</h5>
<p className="text-[10px] text-slate-500">Member since 2021</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div data-aos="fade-right">
<h2 className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2">Contact</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight">Begin Your Journey</h3>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="p-2 bg-slate-900 rounded-md text-slate-400 group-hover:text-cyan-400 border border-white/5 transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-1">HQ</h5>
<p className="text-slate-500 text-xs">123 Fitness Blvd, Innovation District<br/>Metropolis, NY 10012</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-2 bg-slate-900 rounded-md text-slate-400 group-hover:text-cyan-400 border border-white/5 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-1">Email</h5>
<p className="text-slate-500 text-xs">membership@apex.fit</p>
</div>
</div>
</div>

<div className="flex gap-4 mt-12">
<a className="w-8 h-8 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
</div>
</div>

<div className="glass-card p-8 rounded-2xl" data-aos="fade-left">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">First Name</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm placeholder-slate-700" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Last Name</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm placeholder-slate-700" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Email</label>
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm placeholder-slate-700" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Focus</label>
<div className="relative">
<select className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-sm appearance-none">
<option>Hypertrophy</option>
<option>Endurance</option>
<option>General Fitness</option>
<option>Personal Training</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<button className="w-full bg-cyan-400 text-slate-950 font-semibold text-sm py-3 rounded-lg hover:bg-cyan-300 transition-colors mt-2" type="button">Request Access</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-sm overflow-hidden flex items-center justify-center bg-slate-900 border border-white/10">
<img alt="Maa Kali Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kali_by_Raja_Ravi_Varma.jpg/320px-Kali_by_Raja_Ravi_Varma.jpg"/>
</div>
                        apex<span className="text-cyan-400">.</span>fit
                    </span>
<p className="text-slate-600 text-xs mt-4 leading-relaxed">Optimization for the modern athlete. <br/>Design your body, engineer your life.</p>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">Explore</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">Resources</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-4 uppercase tracking-wider">Stay Updated</h5>
<div className="flex">
<input className="bg-slate-900/50 text-white text-xs px-3 py-2 rounded-l-md focus:outline-none w-full border border-white/5 border-r-0 placeholder-slate-700" placeholder="Email address" type="email"/>
<button className="bg-cyan-400 text-slate-950 px-3 py-2 rounded-r-md font-bold text-xs hover:bg-cyan-300 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-700 text-[10px]">© 2024 apex.fit. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-slate-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
