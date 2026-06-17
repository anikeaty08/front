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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Blur & Sticky behavior
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('py-4', 'py-0'); // Add tighter padding if desired
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });

        // Intersection Observer for Fade-up animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });

        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        
        // Only run cursor logic on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            });

            // Add hover effect for interactive elements globally
            const interactiveElements = document.querySelectorAll('a, button, input, .group.cursor-pointer');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.width = '48px';
                    cursor.style.height = '48px';
                    cursor.style.backgroundColor = 'transparent';
                    cursor.style.border = '2px solid var(--yellow)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.width = '16px';
                    cursor.style.height = '16px';
                    cursor.style.backgroundColor = 'var(--yellow)';
                    cursor.style.border = 'none';
                });
            });
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
      
<div className="hidden md:block" id="custom-cursor"></div>

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-gray-100" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="font-display text-4xl tracking-tight flex items-center gap-1 group" href="#">
                JK FITNESS<span className="text-[#FFDD00] group-hover:animate-bounce">.</span>
</a>
<div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
<a className="hover:text-[#0D0D0D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFDD00] after:transition-all" href="#">Home</a>
<a className="hover:text-[#0D0D0D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFDD00] after:transition-all" href="#features">Service</a>
<a className="hover:text-[#0D0D0D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFDD00] after:transition-all" href="#programs">Goals</a>
<a className="hover:text-[#0D0D0D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFDD00] after:transition-all" href="#classes">Class Schedule</a>
<a className="hover:text-[#0D0D0D] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#FFDD00] after:transition-all" href="#contact">Contact</a>
</div>
<button className="bg-[#FFDD00] text-[#0D0D0D] font-semibold px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-yellow-400 transition-colors text-sm">
                Join Now
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-[95vh] flex flex-col justify-between bg-[#0D0D0D] text-white overflow-hidden">

<div className="absolute inset-0 bg-gym-3 opacity-60"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center w-full">

<div className="flex justify-between items-start w-full mb-12 md:mb-24 fade-up">

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-[#0D0D0D] flex items-center justify-center"><i className="w-5 h-5 text-gray-300" data-lucide="user"></i></div>
<div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#0D0D0D] flex items-center justify-center"><i className="w-5 h-5 text-gray-200" data-lucide="user"></i></div>
<div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#0D0D0D] flex items-center justify-center"><i className="w-5 h-5 text-gray-100" data-lucide="user"></i></div>
</div>
<div>
<p className="font-display text-2xl tracking-tight leading-none">500+</p>
<p className="text-xs text-gray-400 font-medium">Happy Customers</p>
</div>
</div>

<div className="text-right flex flex-col items-end gap-3 hidden md:flex">
<div>
<p className="font-display text-3xl tracking-tight leading-none">250+</p>
<p className="text-xs text-gray-400 font-medium">Expert Trainers</p>
</div>
</div>
</div>

<div className="text-center w-full fade-up delay-100">
<p className="font-body italic text-[#FFDD00] text-xl md:text-2xl mb-4 font-medium">JK Fitness Academia</p>
<h1 className="font-display text-[5rem] md:text-[9rem] leading-[0.85] tracking-tight uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                    STAY FIT<br/>NOT STILL
                </h1>
<p className="text-gray-400 max-w-lg mx-auto text-base md:text-lg mb-8 font-medium">
                    Nossa meta é o seu resultado! Join our premium facility designed to elevate your workouts and achieve your specific goals.
                </p>
<button className="bg-[#FFDD00] text-[#0D0D0D] font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 group hover:scale-105 transition-all text-base">
                    Start Your Journey
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#0D0D0D] border-t border-b border-gray-800 py-3 overflow-hidden marquee-container z-20">
<div className="animate-marquee flex gap-8 items-center text-[#FFDD00] font-display text-xl tracking-wider uppercase">

<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> EXPERT TRAINERS</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> DIVERSE CLASS OPTIONS</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> FLEXIBLE MEMBERSHIP</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> SAFE &amp; CLEAN</span>

<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> EXPERT TRAINERS</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> DIVERSE CLASS OPTIONS</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> FLEXIBLE MEMBERSHIP</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> SAFE &amp; CLEAN</span>

<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> EXPERT TRAINERS</span>
<span className="flex items-center gap-4"><i className="w-5 h-5" data-lucide="zap"></i> DIVERSE CLASS OPTIONS</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-up">
<div className="max-w-2xl">
<h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none mb-4 uppercase text-[#0D0D0D]">
                        Features at<br/>JK Fitness Academia
                    </h2>
<p className="text-gray-500 font-medium">
                        We offer top-notch amenities, cutting-edge equipment, and expert trainers to enhance your workout and achieve your goals.
                    </p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#FFDD00] hover:text-[#FFDD00] transition-colors group">
<i className="w-5 h-5 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-[#FFDD00] text-[#0D0D0D] flex items-center justify-center hover:bg-yellow-400 transition-colors group">
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0D0D0D] text-white p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#FFDD00] fade-up">
<div className="w-14 h-14 rounded-full border border-[#FFDD00] flex items-center justify-center mb-8 text-[#FFDD00]">
<i className="w-6 h-6" data-lucide="monitor-play"></i>
</div>
<h3 className="font-display text-3xl tracking-tight mb-3">Class</h3>
<p className="text-gray-400 text-sm font-medium mb-12">
                        Our amenities ensure you get the most out of your workouts and enjoy a superior gym experience.
                    </p>
<div className="flex justify-end">
<button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#FFDD00] group-hover:bg-[#FFDD00] group-hover:text-black transition-all">
<i className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-[#0D0D0D] text-white p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#FFDD00] fade-up delay-100">
<div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center mb-8 text-gray-300 group-hover:border-[#FFDD00] group-hover:text-[#FFDD00] transition-colors">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<h3 className="font-display text-3xl tracking-tight mb-3">Club</h3>
<p className="text-gray-400 text-sm font-medium mb-12">
                        Our gym features cutting-edge fitness equipment designed to elevate your workouts to the next level.
                    </p>
<div className="flex justify-end">
<button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#FFDD00] group-hover:bg-[#FFDD00] group-hover:text-black transition-all">
<i className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-[#0D0D0D] text-white p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#FFDD00] fade-up delay-200">
<div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center mb-8 text-gray-300 group-hover:border-[#FFDD00] group-hover:text-[#FFDD00] transition-colors">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<h3 className="font-display text-3xl tracking-tight mb-3">Timetable</h3>
<p className="text-gray-400 text-sm font-medium mb-12">
                        Searching for a class that suits your schedule? We offer a variety of time options to fit your needs.
                    </p>
<div className="flex justify-between items-center mt-auto">
<button className="bg-[#FFDD00] text-[#0D0D0D] px-4 py-2 rounded-full font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity">Find Out More</button>
<button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#FFDD00] group-hover:bg-[#FFDD00] group-hover:text-black transition-all">
<i className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 fade-up">
<h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none uppercase max-w-lg">
                    Explore Our Wide<br/>Range of Programs
                </h2>
<p className="text-gray-500 font-medium max-w-md text-sm md:text-base">
                    Explore our wide range of programs designed to cater to all fitness levels and preferences. From strength training to yoga, each program is crafted to help you meet your specific goals.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-auto md:mt-12 fade-up">
<div className="absolute inset-0 bg-gym-1 transition-transform duration-700 group-hover:scale-105"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-white font-display text-2xl tracking-tight mb-1 group-hover:text-[#FFDD00] transition-colors">Personal Trainer</h4>
<p className="text-gray-300 text-xs font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock"></i> Monday - Wednesday
                        </p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-auto md:mb-12 fade-up delay-100">
<div className="absolute inset-0 bg-gym-2 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-white font-display text-2xl tracking-tight mb-1 group-hover:text-[#FFDD00] transition-colors">Outdoor Classes</h4>
<p className="text-gray-300 text-xs font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock"></i> Tuesday - Thursday
                        </p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-auto md:mt-12 fade-up delay-200">
<div className="absolute inset-0 bg-gym-1 transition-transform duration-700 group-hover:scale-105" style={{background: 'linear-gradient(135deg, #2a2a2a 0%, #111 100%)'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-white font-display text-2xl tracking-tight mb-1 group-hover:text-[#FFDD00] transition-colors">Digital Coaching</h4>
<p className="text-gray-300 text-xs font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock"></i> Friday - Saturday
                        </p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-auto md:mb-12 fade-up delay-300">
<div className="absolute inset-0 bg-gym-3 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-white font-display text-2xl tracking-tight mb-1 group-hover:text-[#FFDD00] transition-colors">Group Training</h4>
<p className="text-gray-300 text-xs font-medium flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock"></i> Sunday - Monday
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="bg-[#0D0D0D] rounded-3xl p-8 md:p-12 relative overflow-hidden group fade-up">

<div className="absolute right-0 bottom-0 w-64 h-64 bg-gym-2 rounded-tl-full opacity-30 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-[#FFDD00] rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,221,0,0.3)]">
<i className="w-6 h-6 text-black fill-black" data-lucide="star"></i>
</div>
<h3 className="font-display text-4xl tracking-tight text-white mb-6 uppercase">Success Stories</h3>
<p className="text-gray-400 font-medium text-sm md:text-base mb-12 italic border-l-2 border-[#FFDD00] pl-4">
                        "I reached my fitness goals faster than ever with tailored workouts. The expert trainers keep me on track, even during sessions. Absolutely love this facility and how it enhances my experience."
                    </p>
<div className="mt-auto pt-8 border-t border-gray-800 flex justify-between items-end">
<div>
<h5 className="text-white font-display text-2xl tracking-tight">Kende Attila</h5>
<p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Happy Member</p>
</div>
<div className="flex gap-1 text-[#FFDD00]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="fade-up delay-100">
<h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none uppercase mb-10 text-[#0D0D0D]">
                    Best Training<br/>Plan For You
                </h2>
<div className="flex flex-col gap-4">

<div className="bg-[#0D0D0D] rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-[#FFDD00]/30 shadow-lg relative overflow-hidden group hover:border-[#FFDD00] transition-colors">
<div className="absolute top-0 right-0 bg-[#FFDD00] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
<div className="bg-[#FFDD00] text-black font-semibold px-6 py-3 rounded-full text-sm shrink-0 shadow-[0_0_20px_rgba(255,221,0,0.2)]">
                            R$179/Month
                        </div>
<div className="text-left md:text-right">
<h4 className="text-white font-display text-2xl tracking-tight mb-1">Premium Plan</h4>
<p className="text-gray-400 text-xs font-medium max-w-[250px] ml-auto">The premium package designed for dedicated fitness enthusiasts seeking the highest level.</p>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-gray-100 hover:border-gray-300 transition-colors group">
<div className="text-[#0D0D0D] font-semibold px-6 py-3 text-sm shrink-0 group-hover:text-[#FFDD00] transition-colors">
                            R$119/Month
                        </div>
<div className="text-left md:text-right">
<h4 className="text-[#0D0D0D] font-display text-2xl tracking-tight mb-1">Elite Plan</h4>
<p className="text-gray-500 text-xs font-medium max-w-[250px] ml-auto">The elite plan for passionate fitness lovers, offering top-tier resources.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-gray-100 hover:border-gray-300 transition-colors">
<div className="text-gray-500 font-semibold px-6 py-3 text-sm shrink-0">
                            Free
                        </div>
<div className="text-left md:text-right">
<h4 className="text-[#0D0D0D] font-display text-2xl tracking-tight mb-1">Basic Plan</h4>
<p className="text-gray-500 text-xs font-medium max-w-[250px] ml-auto">Essential gym access, perfect for beginners or a simple routine.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="classes">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="flex flex-col justify-between fade-up">
<div>
<h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none uppercase mb-6 text-[#0D0D0D]">Our Classes</h2>
<p className="text-gray-500 font-medium text-sm md:text-base mb-10 max-w-md">
                        Our classes cater to all ages and preferences. You and your child can safely enjoy the facilities together. Programs welcome everyone, making fitness a family affair.
                    </p>
</div>

<div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-8 group">
<div className="absolute inset-0 bg-gym-1 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="bg-[#0D0D0D] p-8 rounded-2xl border-l-4 border-[#FFDD00]">
<h4 className="text-white font-display text-3xl tracking-tight uppercase leading-snug">
                        Credit and<br/>personalize<br/>your <span className="text-[#FFDD00]">workout</span>
</h4>
</div>
</div>

<div className="flex flex-col gap-12 fade-up delay-100">

<div className="flex flex-col gap-4">
<div className="border-b border-gray-300 pb-4 group cursor-pointer flex justify-between items-center hover:border-[#0D0D0D] transition-colors">
<span className="font-display text-3xl tracking-tight uppercase text-gray-400 group-hover:text-[#0D0D0D] transition-colors">Men</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-[#0D0D0D] transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="border-b border-[#0D0D0D] pb-4 group cursor-pointer flex justify-between items-center">
<span className="font-display text-3xl tracking-tight uppercase text-[#0D0D0D]">Women</span>
<i className="w-6 h-6 text-[#0D0D0D]" data-lucide="arrow-up-right"></i>
</div>
<div className="border-b border-gray-300 pb-4 group cursor-pointer flex justify-between items-center hover:border-[#0D0D0D] transition-colors">
<span className="font-display text-3xl tracking-tight uppercase text-gray-400 group-hover:text-[#0D0D0D] transition-colors">Kids</span>
<i className="w-6 h-6 text-gray-400 group-hover:text-[#0D0D0D] transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="bg-[#0D0D0D] p-6 rounded-2xl flex items-center justify-between border border-gray-800 hover:border-[#FFDD00]/50 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-600 border border-gray-500 flex items-center justify-center overflow-hidden">

<i className="w-6 h-6 text-gray-300" data-lucide="user"></i>
</div>
<div>
<h5 className="text-white font-display text-xl tracking-tight tracking-wider">Bruno Barbosa</h5>
<p className="text-gray-400 text-xs font-medium">CREF 3476-G/Al</p>
</div>
</div>
<button className="bg-[#FFDD00] text-[#0D0D0D] font-semibold px-6 py-2 rounded-full text-xs hover:bg-yellow-400 transition-colors">
                        See Profile
                    </button>
</div>
<div className="flex items-end justify-between mt-auto">
<h2 className="font-display text-5xl tracking-tight leading-none uppercase text-[#0D0D0D] max-w-[200px]">
                        Training Experience
                    </h2>
<i className="w-10 h-10 text-gray-300" data-lucide="arrow-up-right"></i>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="h-40 rounded-2xl bg-gym-2 overflow-hidden group">
<div className="w-full h-full bg-black/30 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="h-40 rounded-2xl bg-gym-3 overflow-hidden group">
<div className="w-full h-full bg-black/30 group-hover:bg-black/10 transition-colors"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFDD00] py-24 relative overflow-hidden text-center">

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xMCAxMGgxMHYxMEgxMHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 fade-up">
<h2 className="font-display text-6xl md:text-8xl tracking-tight leading-none uppercase text-[#0D0D0D] mb-6">
                Lets Join<br/>Community
            </h2>
<p className="text-[#0D0D0D] font-medium text-lg md:text-xl mb-10 opacity-80">
                You are not alone, many have joined JK Fitness
            </p>
<form className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto bg-white p-2 rounded-full shadow-xl">
<input className="flex-1 bg-transparent px-6 py-3 outline-none text-[#0D0D0D] font-medium placeholder:text-gray-400 text-sm" placeholder="Your Email Address..." required="" type="email"/>
<button className="bg-[#0D0D0D] text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group" type="submit">
                    Join Now
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFDD00]" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>

<footer className="bg-[#0D0D0D] text-white py-12 border-t border-gray-900" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="font-display text-3xl tracking-tight flex items-center gap-1 group" href="#">
                JK FITNESS<span className="text-[#FFDD00]">.</span>
</a>
<p className="text-gray-500 text-xs font-medium text-center md:text-left">
                Copyright © 2024 JK FITNESS ACADEMIA. All Rights Reserved.<br/>
                SEG à SEX: 5h às 22h | SÁB: 7h às 12h
            </p>
<div className="flex items-center gap-6">
<a className="text-sm font-display tracking-wider uppercase hover:text-[#FFDD00] transition-colors" href="#">Instagram</a>
<a className="text-sm font-display tracking-wider uppercase hover:text-[#FFDD00] transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
