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
darkMode: 'class',
theme: {
extend: {
colors: {
jci: {
blue: '#0097D7',
black: '#130F2D',
navy: '#1F4789',
teal: '#57BCBC',
yellow: '#EFC40F',
white: '#FFFFFF',
}
},
fontFamily: {
sans: ['Inter', 'Cairo', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
},
animation: {
'fade-in': 'fadeIn 1s ease-out',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-in-right': 'slideInRight 0.8s ease-out',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'ken-burns': 'kenBurns 20s ease-out infinite alternate',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideInRight: {
'0%': { opacity: '0', transform: 'translateX(20px)' },
'100%': { opacity: '1', transform: 'translateX(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
kenBurns: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar interaction logic
        const navbar = document.getElementById('navbar');
        const navContainer = document.getElementById('nav-container');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled state
                navContainer.classList.add('glass-dark', 'bg-black/80', 'border', 'border-white/10');
                navContainer.classList.remove('h-14');
                navContainer.classList.add('h-16', 'shadow-xl');
            } else {
                // Top state
                navContainer.classList.remove('glass-dark', 'bg-black/80', 'border', 'border-white/10', 'h-16', 'shadow-xl');
                navContainer.classList.add('h-14');
            }
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if inside a revealed element
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; 
                            const increment = target / (duration / 16); 
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                            counter.classList.remove('counter'); // run once
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Horizontal Scroll Buttons
        const reelsContainer = document.getElementById('reels-container');
        document.getElementById('scroll-left').addEventListener('click', () => {
            reelsContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });
        document.getElementById('scroll-right').addEventListener('click', () => {
            reelsContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });

        // Parallax Effect on Mouse Move for Hero
        const heroSection = document.getElementById('home');
        const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delayed');

        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            floatingElements.forEach((el, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });

        // Reset transform on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            floatingElements.forEach(el => {
                el.style.transform = '';
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-14 items-center justify-between transition-all duration-300 rounded-2xl px-4" id="nav-container">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-jci-blue rounded flex items-center justify-center text-white font-bold text-lg group-hover:bg-jci-navy transition-colors shadow-lg shadow-jci-blue/30">
                        J
                    </div>
<div className="flex flex-col leading-none">
<span className="font-bold text-base tracking-tight text-white mix-blend-difference">JCI NABEUL</span>
<span className="text-[10px] text-white/80 font-semibold tracking-wide mix-blend-difference">TUNISIA</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
<a className="text-sm font-medium text-white px-4 py-1.5 rounded-full hover:bg-white/20 transition-all" href="#home">Home</a>
<a className="text-sm font-medium text-white px-4 py-1.5 rounded-full hover:bg-white/20 transition-all" href="#about">About</a>
<a className="text-sm font-medium text-white px-4 py-1.5 rounded-full hover:bg-white/20 transition-all" href="#projects">Projects</a>
<a className="text-sm font-medium text-white px-4 py-1.5 rounded-full hover:bg-white/20 transition-all" href="#events">Events</a>
</div>
<div className="hidden md:flex items-center gap-4">

<div className="flex items-center gap-1 cursor-pointer group text-white mix-blend-difference">
<span className="text-sm font-semibold group-hover:text-jci-blue transition-colors">EN</span>
<iconify-icon className="group-hover:text-jci-blue transition-colors" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>

<a className="bg-white text-jci-blue hover:bg-jci-blue hover:text-white text-sm font-semibold py-2 px-5 rounded-full transition-all shadow-lg hover:shadow-jci-blue/40 flex items-center gap-2" href="#join">
<span>Join Us</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-white mix-blend-difference">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="hero-section relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0 bg-jci-black">

<div className="absolute inset-0 opacity-40 animate-ken-burns">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-jci-black/60 via-jci-black/20 to-jci-black/90"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-jci-blue/20 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-jci-blue/30 rounded-full blur-3xl animate-float opacity-40"></div>

<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-jci-yellow/20 rounded-full blur-3xl animate-float-delayed opacity-40"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.1s'}}>
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jci-teal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-jci-teal"></span>
</div>
<span className="text-xs font-semibold text-white tracking-widest uppercase">Global Leadership Network</span>
</div>

<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
                Lead The <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-jci-blue via-white to-jci-teal relative">
                    Future
                    
<svg className="absolute w-full h-4 -bottom-2 left-0 text-jci-blue opacity-80" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span>
                Today
            </h1>

<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-slide-up opacity-0" style={{animationDelay: '0.5s'}}>
                We are a collective of active citizens in Nabeul, dedicated to creating sustainable impact through leadership, entrepreneurship, and community action.
            </p>

<div className="flex flex-col sm:flex-row gap-5 items-center animate-slide-up opacity-0" style={{animationDelay: '0.7s'}}>
<a className="group relative px-8 py-4 bg-jci-blue rounded-full text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-jci-blue/40" href="#join">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        Get Started
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold"></iconify-icon>
</span>
</a>
<a className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-white font-semibold transition-all hover:bg-white/10 hover:border-white/30 flex items-center gap-3" href="#about">
<div className="w-8 h-8 rounded-full bg-white text-jci-black flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
</div>
<span>Watch Film</span>
</a>
</div>
</div>

<div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block animate-float opacity-0 animate-slide-up" style={{animationDelay: '1s'}}>
<div className="glass-dark p-4 rounded-2xl border border-white/10 max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-jci-yellow/20 text-jci-yellow flex items-center justify-center">
<iconify-icon icon="solar:cup-star-bold"></iconify-icon>
</div>
<span className="text-white font-bold text-sm">Best Project</span>
</div>
<p className="text-xs text-gray-400">Awarded for sustainable community impact in 2023.</p>
</div>
</div>
<div className="absolute bottom-32 right-10 hidden xl:block animate-float-delayed opacity-0 animate-slide-up" style={{animationDelay: '1.2s'}}>
<div className="glass-dark p-4 rounded-2xl border border-white/10 max-w-[200px]">
<div className="flex -space-x-3 mb-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-jci-black" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-jci-black" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-jci-black" src="https://i.pravatar.cc/100?img=3"/>
<div className="w-8 h-8 rounded-full border-2 border-jci-black bg-jci-blue text-white flex items-center justify-center text-xs font-bold">+120</div>
</div>
<p className="text-xs text-gray-400 font-medium">Active members making a difference.</p>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group" href="#stats">
<span className="text-[10px] uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 group-hover:h-16 transition-all duration-300"></div>
</a>
</section>

<section className="relative z-30 bg-white py-20 -mt-10 rounded-t-[3rem]" id="stats">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

<div className="reveal group text-center p-6 hover-card rounded-2xl bg-white border border-transparent hover:border-gray-100">
<div className="relative w-16 h-16 mx-auto mb-4">
<div className="absolute inset-0 bg-jci-blue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-jci-blue text-5xl relative z-10 group-hover:-translate-y-1 transition-transform" icon="solar:rocket-2-bold-duotone"></iconify-icon>
</div>
<h3 className="text-4xl font-bold text-jci-black mb-1 flex justify-center items-center gap-1">
<span className="counter" data-target="45">0</span>
<span className="text-2xl text-jci-blue">+</span>
</h3>
<p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Impact Projects</p>
</div>

<div className="reveal group text-center p-6 hover-card rounded-2xl bg-white border border-transparent hover:border-gray-100" style={{transitionDelay: '0.1s'}}>
<div className="relative w-16 h-16 mx-auto mb-4">
<div className="absolute inset-0 bg-jci-yellow/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-jci-yellow text-5xl relative z-10 group-hover:-translate-y-1 transition-transform" icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
</div>
<h3 className="text-4xl font-bold text-jci-black mb-1">
<span className="counter" data-target="120">0</span>
</h3>
<p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Active Members</p>
</div>

<div className="reveal group text-center p-6 hover-card rounded-2xl bg-white border border-transparent hover:border-gray-100" style={{transitionDelay: '0.2s'}}>
<div className="relative w-16 h-16 mx-auto mb-4">
<div className="absolute inset-0 bg-jci-teal/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-jci-teal text-5xl relative z-10 group-hover:-translate-y-1 transition-transform" icon="solar:diploma-verified-bold-duotone"></iconify-icon>
</div>
<h3 className="text-4xl font-bold text-jci-black mb-1 flex justify-center items-center gap-1">
<span className="counter" data-target="80">0</span>
<span className="text-2xl text-jci-teal">+</span>
</h3>
<p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Trainings</p>
</div>

<div className="reveal group text-center p-6 hover-card rounded-2xl bg-white border border-transparent hover:border-gray-100" style={{transitionDelay: '0.3s'}}>
<div className="relative w-16 h-16 mx-auto mb-4">
<div className="absolute inset-0 bg-jci-navy/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-jci-navy text-5xl relative z-10 group-hover:-translate-y-1 transition-transform" icon="solar:cup-first-bold-duotone"></iconify-icon>
</div>
<h3 className="text-4xl font-bold text-jci-black mb-1">
<span className="counter" data-target="12">0</span>
</h3>
<p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Awards Won</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 overflow-hidden relative" id="about">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-jci-blue/5 to-jci-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal space-y-8">
<div>
<span className="text-jci-blue font-bold tracking-widest text-xs uppercase mb-2 block">Our Mission</span>
<h2 className="text-4xl lg:text-5xl font-bold text-jci-black tracking-tight leading-tight">
                            Developing Leaders for a <br/>
<span className="text-gradient">Changing World</span>
</h2>
</div>
<p className="text-gray-600 leading-relaxed text-lg">
                        Junior Chamber International Nabeul is more than an organization; it's a movement. Part of a global network of over 200,000 young active citizens, we provide the tools, network, and opportunities to create positive change.
                    </p>
<div className="space-y-4">

<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-default">
<div className="w-10 h-10 rounded-full bg-jci-blue/10 text-jci-blue flex items-center justify-center mt-1 group-hover:bg-jci-blue group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hand-up-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-jci-black text-lg group-hover:text-jci-blue transition-colors">Individual Development</h4>
<p className="text-sm text-gray-500 mt-1">Unlock your potential through world-class training and practical leadership roles.</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-default">
<div className="w-10 h-10 rounded-full bg-jci-yellow/10 text-jci-yellow flex items-center justify-center mt-1 group-hover:bg-jci-yellow group-hover:text-white transition-colors">
<iconify-icon icon="solar:city-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-jci-black text-lg group-hover:text-jci-yellow transition-colors">Community Impact</h4>
<p className="text-sm text-gray-500 mt-1">Analyze community needs and execute sustainable projects that matter.</p>
</div>
</div>
</div>
</div>

<div className="reveal relative lg:h-[600px] flex items-center justify-center">
<div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-lg">
<div className="space-y-4 pt-12">
<img alt="Team" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
<iconify-icon className="text-jci-blue text-4xl mb-3" icon="solar:global-bold"></iconify-icon>
<h5 className="font-bold text-xl">100+</h5>
<p className="text-xs text-gray-500">Countries in Network</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-jci-blue p-6 rounded-2xl shadow-xl text-white hover:-translate-y-2 transition-transform duration-500">
<iconify-icon className="text-white/80 text-4xl mb-3" icon="solar:calendar-bold"></iconify-icon>
<h5 className="font-bold text-xl">Since 1980</h5>
<p className="text-xs text-blue-100">Legacy of Impact</p>
</div>
<img alt="Meeting" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-jci-black text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#1F4789 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end relative z-20">
<div className="reveal">
<span className="text-jci-blue font-bold tracking-widest text-xs uppercase mb-2 block">Portfolio</span>
<h2 className="text-4xl font-bold tracking-tight">Impact in Motion</h2>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-jci-black transition-all active:scale-95" id="scroll-left">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-jci-black transition-all active:scale-95" id="scroll-right">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory no-scrollbar max-w-[1920px] mx-auto relative z-20 pl-[max(1.5rem,calc((100vw-80rem)/2))]" id="reels-container">

<div className="min-w-[320px] md:min-w-[400px] h-[550px] bg-gray-800 rounded-3xl relative overflow-hidden group snap-center cursor-pointer border border-white/10 hover:border-jci-blue/50 transition-colors">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>

<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-3 group-hover:bg-jci-blue transition-colors duration-300">
<iconify-icon className="text-white animate-pulse" icon="solar:videocamera-record-bold" width="20"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-3 py-1 bg-jci-yellow text-jci-black text-xs font-bold rounded-full mb-3">COMMUNITY</span>
<h3 className="text-3xl font-bold leading-tight mb-3">Beach Cleanup</h3>
<p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Mobilizing over 200 volunteers to restore Nabeul's coastline beauty.</p>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] h-[550px] bg-gray-800 rounded-3xl relative overflow-hidden group snap-center cursor-pointer border border-white/10 hover:border-jci-blue/50 transition-colors">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-3 py-1 bg-jci-teal text-white text-xs font-bold rounded-full mb-3">BUSINESS</span>
<h3 className="text-3xl font-bold leading-tight mb-3">Startup Pitch</h3>
<p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Young entrepreneurs showcasing innovative solutions for funding.</p>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] h-[550px] bg-gray-800 rounded-3xl relative overflow-hidden group snap-center cursor-pointer border border-white/10 hover:border-jci-blue/50 transition-colors">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-3 py-1 bg-jci-blue text-white text-xs font-bold rounded-full mb-3">TRAINING</span>
<h3 className="text-3xl font-bold leading-tight mb-3">Debate League</h3>
<p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Enhancing public speaking and critical thinking skills.</p>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] h-[550px] bg-gray-800 rounded-3xl relative overflow-hidden group snap-center cursor-pointer border border-white/10 hover:border-jci-blue/50 transition-colors">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-3 py-1 bg-white text-jci-black text-xs font-bold rounded-full mb-3">NETWORKING</span>
<h3 className="text-3xl font-bold leading-tight mb-3">Annual Gala</h3>
<p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Celebrating our achievements and partnerships in style.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3 space-y-8">
<div className="reveal">
<span className="text-jci-blue font-bold tracking-widest text-xs uppercase mb-2 block">Calendar</span>
<h2 className="text-3xl font-bold text-jci-black tracking-tight">Upcoming Events</h2>
</div>

<div className="reveal bg-gradient-to-br from-jci-blue to-jci-navy rounded-3xl p-8 text-white shadow-2xl shadow-jci-blue/30 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="relative z-10">
<span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-lg mb-6 inline-block border border-white/10">NEXT BIG EVENT</span>
<h3 className="text-2xl font-bold mb-2">Nabeul Enterprise Forum</h3>
<p className="text-white/80 text-sm mb-8">Connecting local businesses with young talent.</p>
<div className="grid grid-cols-4 gap-3 text-center mb-8">
<div className="bg-black/20 backdrop-blur-md rounded-xl p-2 border border-white/5">
<span className="block text-2xl font-bold">14</span>
<span className="text-[10px] uppercase opacity-70">Days</span>
</div>
<div className="bg-black/20 backdrop-blur-md rounded-xl p-2 border border-white/5">
<span className="block text-2xl font-bold">06</span>
<span className="text-[10px] uppercase opacity-70">Hrs</span>
</div>
<div className="bg-black/20 backdrop-blur-md rounded-xl p-2 border border-white/5">
<span className="block text-2xl font-bold">45</span>
<span className="text-[10px] uppercase opacity-70">Min</span>
</div>
<div className="bg-black/20 backdrop-blur-md rounded-xl p-2 border border-white/5">
<span className="block text-2xl font-bold">12</span>
<span className="text-[10px] uppercase opacity-70">Sec</span>
</div>
</div>
<button className="w-full bg-white text-jci-blue font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                Register Now
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-4">
<div className="reveal hover-card flex gap-5 group cursor-pointer bg-white border border-gray-100 rounded-2xl p-4 items-center">
<div className="bg-gray-50 rounded-xl w-14 h-14 flex flex-col items-center justify-center text-jci-black group-hover:bg-jci-blue group-hover:text-white transition-colors duration-300">
<span className="text-[10px] font-bold uppercase">OCT</span>
<span className="text-xl font-bold leading-none">25</span>
</div>
<div className="flex-1">
<h4 className="text-jci-black group-hover:text-jci-blue transition-colors font-bold text-lg">Public Speaking 101</h4>
<div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Technopark</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 14:00</span>
</div>
</div>
<div className="text-gray-300 group-hover:text-jci-blue transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3">
<div className="reveal flex justify-between items-end mb-8">
<div>
<span className="text-jci-blue font-bold tracking-widest text-xs uppercase mb-2 block">Latest Work</span>
<h2 className="text-3xl font-bold text-jci-black tracking-tight">Featured Projects</h2>
</div>
<a className="group text-sm font-semibold text-gray-500 hover:text-jci-blue transition-colors flex items-center gap-1" href="#">
                            View All <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="reveal group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
<img alt="Green Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-[10px] font-bold bg-jci-teal text-white px-2 py-1 rounded mb-3 inline-block">ENVIRONMENT</span>
<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-jci-teal transition-colors">Green City Initiative</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
<p className="text-sm text-gray-300 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Planting 1000 trees in urban areas to combat pollution.</p>
</div>
</div>
</div>

<div className="reveal group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
<img alt="Business Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-[10px] font-bold bg-jci-blue text-white px-2 py-1 rounded mb-3 inline-block">ENTREPRENEURSHIP</span>
<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-jci-blue transition-colors">StartUp Academy</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
<p className="text-sm text-gray-300 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Mentorship program for young innovators.</p>
</div>
</div>
</div>

<div className="reveal md:col-span-2 group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
<img alt="Social Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-[10px] font-bold bg-jci-yellow text-jci-black px-2 py-1 rounded mb-3 inline-block">COMMUNITY</span>
<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-jci-yellow transition-colors">Health Caravan 2024</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
<p className="text-sm text-gray-300 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Bringing medical aid to rural zones.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-jci-blue relative overflow-hidden flex items-center justify-center" id="join">

<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite] blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_1s_infinite] blur-2xl"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 reveal tracking-tight">Ready to Lead?</h2>
<p className="text-blue-50 text-xl mb-12 max-w-2xl mx-auto reveal font-light leading-relaxed">
                Join a community of doers. Develop your skills, expand your network, and make a real impact in Nabeul and beyond.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal">
<button className="group w-full sm:w-auto bg-white text-jci-blue font-bold py-5 px-12 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
<span>Become a Member</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:user-plus-bold"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold py-5 px-12 rounded-full hover:bg-white hover:text-jci-blue transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
<span>Partner With Us</span>
<iconify-icon icon="solar:handshake-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-jci-black text-white pt-24 pb-12 border-t border-white/5 font-light relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-jci-blue/20 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="space-y-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-jci-blue rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-jci-blue/20">J</div>
<div className="flex flex-col leading-none">
<span className="font-bold text-xl tracking-tight">JCI NABEUL</span>
<span className="text-[10px] text-gray-400 font-semibold tracking-wide">TUNISIA</span>
</div>
</div>
<p className="text-sm text-gray-400 leading-relaxed">
                        Empowering young people to create positive change since 1980.
                    </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-jci-blue hover:border-jci-blue hover:text-white transition-all text-gray-400 hover:scale-110" href="#">
<iconify-icon icon="brandico:facebook" width="18"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all text-gray-400 hover:scale-110" href="#">
<iconify-icon icon="brandico:instagram" width="18"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all text-gray-400 hover:scale-110" href="#">
<iconify-icon icon="brandico:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-8 text-white text-lg">Explore</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li><a className="hover:text-jci-blue transition-colors flex items-center gap-2 group" href="#"><span className="w-1.5 h-1.5 bg-jci-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</a></li>
<li><a className="hover:text-jci-blue transition-colors flex items-center gap-2 group" href="#"><span className="w-1.5 h-1.5 bg-jci-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Projects</a></li>
<li><a className="hover:text-jci-blue transition-colors flex items-center gap-2 group" href="#"><span className="w-1.5 h-1.5 bg-jci-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Events</a></li>
<li><a className="hover:text-jci-blue transition-colors flex items-center gap-2 group" href="#"><span className="w-1.5 h-1.5 bg-jci-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Board Members</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-8 text-white text-lg">Contact</h4>
<ul className="space-y-6 text-sm text-gray-400">
<li className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors">
<iconify-icon className="text-jci-blue mt-1 text-lg group-hover:scale-110 transition-transform" icon="solar:map-point-bold"></iconify-icon>
<span>Nabeul Center, 8000<br/>Nabeul, Tunisia</span>
</li>
<li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
<iconify-icon className="text-jci-blue text-lg group-hover:scale-110 transition-transform" icon="solar:letter-bold"></iconify-icon>
<span>contact@jcinabeul.org</span>
</li>
<li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
<iconify-icon className="text-jci-blue text-lg group-hover:scale-110 transition-transform" icon="solar:phone-bold"></iconify-icon>
<span>+216 72 000 000</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-8 text-white text-lg">Stay Updated</h4>
<form className="space-y-4 relative">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-jci-blue focus:bg-white/10 transition-all placeholder:text-gray-600" placeholder="Enter your email" type="email"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<iconify-icon className="text-gray-500" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-jci-blue hover:bg-jci-teal text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-jci-blue/20">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
<p>© 2024 JCI Nabeul. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
