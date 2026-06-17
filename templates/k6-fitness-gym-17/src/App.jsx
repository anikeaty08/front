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



  // Simple SPA Router Logic
  function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('page-transition');
    });
    
    // Show target page
    const target = document.getElementById(pageId);
    if(target) {
      target.classList.remove('hidden');
      target.classList.add('page-transition');
      window.scrollTo(0,0);
      
      // Update Active State in Nav
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-white/60');
        if(link.getAttribute('data-page') === pageId) {
          link.classList.add('text-white');
          link.classList.remove('text-white/60');
        }
      });

      // Re-trigger animations
      setTimeout(() => {
        window.initInViewAnimations();
      }, 100);
    }
  }

  // Animation Observer
  (function () {
    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    }
    window.initInViewAnimations = function () {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.remove("animate"); // reset
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => {
      initInViewAnimations();
      navigateTo('home'); // Default load
      lucide.createIcons();
    });
  })();



    function toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    }
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);
  
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
      <div className="bg-center -z-20 w-full h-3/4 bg-cover absolute top-0" data-alpha-mask="80" style={{backgroundImage: 'url("https://www.k6fitness.in/wp-content/uploads/2024/04/Back-01-scaled.jpg?w=800&amp', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed -z-10 bg-neutral-950/80 top-0 right-0 bottom-0 left-0"></div>
<style className="">
  @keyframes scrollBlur {
    0% { filter: blur(0px) brightness(1); transform: scale(1); }
    100% { filter: blur(20px) brightness(0.4); transform: scale(1.05); }
  }
  @keyframes fadeSlideIn {
    0% { opacity: 0; transform: translateY(20px); filter: blur(5px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
  }
  @keyframes pageFadeIn {
    0% { opacity: 0; filter: blur(10px); }
    100% { opacity: 1; filter: blur(0px); }
  }
  .page-transition {
    animation: pageFadeIn 0.5s ease-out forwards;
  }
  .animate-on-scroll { opacity: 0; }
  .animate-on-scroll.animate { animation: fadeSlideIn 0.8s ease-out forwards; }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { bg: #171717; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #444; }
</style>


<header className="z-50 fixed bg-neutral-950/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center justify-center" href="javascript:navigateTo('home')">
<img alt="K6 Fitness" className="h-8 w-auto" src="https://www.k6fitness.in/wp-content/uploads/2024/03/Site-logo-180-x-60-px-1.svg" style={{}}/>
</a>

<nav className="hidden lg:flex items-center gap-8">
<button className="nav-link hover:text-white transition text-sm font-medium font-geist text-white" data-page="home" onclick="navigateTo('home')">Home</button>
<button className="nav-link hover:text-white transition text-sm font-medium text-white/60 font-geist" data-page="about" onclick="navigateTo('about')">About</button>
<button className="nav-link hover:text-white transition text-sm font-medium text-white/60 font-geist" data-page="training" onclick="navigateTo('training')">Training</button>
<button className="nav-link hover:text-white transition text-sm font-medium text-white/60 font-geist" data-page="contact" onclick="navigateTo('contact')">Contact</button>
<a className="inline-flex gap-2 transition hover:bg-[#b00600] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-xs font-medium text-white font-geist bg-[#D90700] border-[#D90700] border rounded-full py-2 px-4 items-center" href="https://wa.me/919796563646">
          Join Now
        </a>
</nav>

<button className="lg:hidden inline-flex hover:bg-white/10 text-white rounded-md pt-2 pr-2 pb-2 pl-2 items-center justify-center" id="mobile-menu-button">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden bg-neutral-950 w-full border-white/10 border-t absolute" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<button className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md" onclick="navigateTo('home'); toggleMobileMenu()">Home</button>
<button className="block hover:bg-white/5 text-base font-medium text-white/70 text-left w-full rounded-md pt-3 pr-3 pb-3 pl-3" onclick="navigateTo('about'); toggleMobileMenu()">About</button>
<button className="block hover:bg-white/5 text-base font-medium text-white/70 text-left w-full rounded-md pt-3 pr-3 pb-3 pl-3" onclick="navigateTo('training'); toggleMobileMenu()">Training</button>
<button className="block w-full text-left px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 rounded-md" onclick="navigateTo('contact'); toggleMobileMenu()">Contact</button>
</div>
</div>

</header>

<div className="page-section pt-16 page-transition" id="home">

<section className="flex min-h-[90vh] -translate-x-3 z-20 relative scale-90 items-end">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="order-1 animate-on-scroll">
<h1 className="leading-[0.95] uppercase sm:text-7xl lg:text-8xl xl:text-8xl text-3xl font-semibold tracking-tighter font-geist">Unleash <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Potential.</span><br/><span className="text-[#D90700]">Transform</span> Lifestyle.</h1>
</div>

<div className="order-2 lg:order-2 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="flex gap-3 text-xs text-white/70 mb-6 items-center">
<div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur border border-white/10">
<svg className="lucide lucide-star w-3 h-3 text-[#D90700] fill-[#D90700]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium text-white/90 font-geist">4.9 Rating</span>
</div>
<div className="hidden md:block w-px h-4 bg-white/20"></div>
<span className="hidden md:inline font-normal font-geist">Karaikudi's Premier Fitness Destination</span>
</div>
<p className="sm:text-xl leading-relaxed text-lg text-white/80 font-geist mb-8">Fuel your fire, achieve your desires. Equip yourself with modern equipment and expert guidance. Step into a new world and start your fitness journey today.</p>
<div className="border-t border-white/10 pt-6 mb-6">
<div className="flex flex-wrap gap-4 items-center">
<a className="group relative inline-flex items-center gap-2 bg-[#D90700] hover:bg-[#b00600] text-white px-6 py-3 rounded-full transition-all active:scale-95" href="javascript:navigateTo('contact')">
<span className="font-medium font-geist text-sm">Start Training</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex gap-2 hover:bg-white/10 transition-all text-sm font-medium text-white/90 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="javascript:navigateTo('training')">
                View Programs
              </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative bg-neutral-950/50 backdrop-blur-sm py-20">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto px-6">
<div className="text-center max-w-3xl mr-auto ml-auto mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 text-[10px] uppercase text-[#D90700] tracking-widest font-geist bg-[#D90700]/10 border-[#D90700]/20 border rounded-full px-3 py-1 mb-4">
          Why K6 Fitness
        </span>
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist">Kickstart Your Potential</h2>
<p className="leading-relaxed text-white/70 font-geist mt-4">We provide everything you need to succeed. From expert nutrition advice to world-class equipment.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-[#D90700]/50 group-hover:bg-[#D90700]/10 transition-colors text-white group-hover:text-[#D90700]">
<svg className="lucide lucide-salad w-6 h-6" data-lucide="salad" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 21h10"></path><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"></path><path d="m13 12 4-4"></path><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></path></svg>
</div>
<h3 className="font-medium tracking-tight font-geist mt-4 text-xl">Balanced Diet</h3>
<p className="text-sm text-white/60 font-geist mt-2">Customized nutrition plans customized to fuel your body and transformation.</p>
</div>

<div className="group hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-[#D90700]/50 group-hover:bg-[#D90700]/10 transition-colors text-white group-hover:text-[#D90700]">
<svg className="lucide lucide-dumbbell w-6 h-6" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<h3 className="font-medium tracking-tight font-geist mt-4 text-xl">Workouts</h3>
<p className="text-sm text-white/60 font-geist mt-2">Diverse training programs including Strength Training and Cardio.</p>
</div>

<div className="group hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-[#D90700]/50 group-hover:bg-[#D90700]/10 transition-colors text-white group-hover:text-[#D90700]">
<svg className="lucide lucide-pill w-6 h-6" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
</div>
<h3 className="font-medium tracking-tight font-geist mt-4 text-xl">Supplementation</h3>
<p className="text-sm text-white/60 font-geist mt-2">Professional advice on supplements to maximize your gains.</p>
</div>

<div className="group hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl p-6 backdrop-blur animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-[#D90700]/50 group-hover:bg-[#D90700]/10 transition-colors text-white group-hover:text-[#D90700]">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-medium tracking-tight font-geist mt-4 text-xl">Train with Experts</h3>
<p className="text-sm text-white/60 font-geist mt-2">Certified personal trainers dedicated to your specific goals.</p>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative py-24 bg-neutral-900/30">
<div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold font-geist tracking-tight mb-6">Ready to make a change?</h2>
<p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">Join the K6 community today. Whether you are a beginner or a pro, we have a spot for you.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-colors" onclick="navigateTo('contact')">Contact Us</button>
<button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors" onclick="navigateTo('training')">Explore Plans</button>
</div>
</div>
</section>
</div>

<div className="page-section hidden pt-24 min-h-screen" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-16 animate-on-scroll">
<span className="text-[#D90700] font-medium tracking-widest uppercase text-xs mb-3 block">Since 2018</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 font-geist uppercase">Welcome to <span className="text-[#D90700]">K6</span> Fitness Club</h1>
<p className="text-xl text-white/60 max-w-2xl mx-auto">Established in Karaikudi, K6 Fitness is one of the top gyms in Tamil Nadu, offering a spacious, luxurious environment for serious fitness enthusiasts.</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 lg:p-12 mb-24 animate-on-scroll backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Karthigeyan Krishnan" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://www.k6fitness.in/wp-content/uploads/2024/04/KK-gym-founder-scaled.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<div className="bg-[#D90700] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 uppercase tracking-wide">Head Coach</div>
<h3 className="text-2xl font-bold font-geist">Karthigeyan Krishnan</h3>
<p className="text-white/70 text-sm">Founder &amp; Mr. Tamilnadu Physique</p>
</div>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-geist mb-6">Built on Passion &amp; Experience.</h2>
<div className="space-y-6 text-white/70 leading-relaxed font-geist text-lg">
<p>
               is the Founder &amp; Head Coach of K6 Fitness Club. He is a man who loves two things: fitness &amp; business. Safe to say he has combined both his passions pretty well.
            </p>
<p>
              With over <span className="text-white border-b border-[#D90700]">10 years of experience</span> working with clients to achieve their fitness &amp; weight loss goals, he brings unparalleled expertise. He has won many state-level medals all over Tamil Nadu, including the prestigious  title.
            </p>
<p>
              He is energetic, engaged, and dedicated to motivating you through every single training session.
            </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
<div>
<div className="text-3xl font-bold text-white font-geist mb-1">2018</div>
<div className="text-xs uppercase tracking-wider text-white/40">Established</div>
</div>
<div>
<div className="text-3xl font-bold text-white font-geist mb-1">State</div>
<div className="text-xs uppercase tracking-wider text-white/40">Medalist</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">

<div className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors animate-on-scroll">
<div className="w-12 h-12 rounded-xl bg-[#D90700]/20 flex items-center justify-center text-[#D90700] mb-6 border border-[#D90700]/20">
<svg className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold font-geist mb-4">Our Mission</h3>
<p className="text-white/60 leading-relaxed">
           At , our mission is to empower individuals of all fitness levels to lead healthier, happier lives. We strive to provide a supportive environment and top-notch resources to inspire our members to reach their wellness goals.
         </p>
</div>

<div className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-xl bg-[#D90700]/20 flex items-center justify-center text-[#D90700] mb-6 border border-[#D90700]/20">
<svg className="lucide lucide-telescope w-6 h-6" data-lucide="telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path><path d="m13.56 11.747 4.332-.924"></path><path d="m16 21-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path><path d="m6.158 8.633 1.114 4.456"></path><path d="m8 21 3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold font-geist mb-4">Our Vision</h3>
<p className="text-white/60 leading-relaxed">
           To become the ultimate destination for fitness enthusiasts, where innovation, community, and personal growth converge. We aim to continuously evolve, offering cutting-edge programs and facilities that foster lasting transformations.
         </p>
</div>
</div>

<div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 mb-24 animate-on-scroll relative">
<img className="w-full h-full object-cover" src="https://www.k6fitness.in/wp-content/uploads/2024/03/Website-blog-banner-1024x576.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl">
<h3 className="text-3xl font-semibold font-geist mb-2">Extraordinary Experiences</h3>
<p className="text-white/70">Our extraordinary approach combines cutting-edge facilities, expert guidance, and a vibrant community, ensuring every visit exceeds your expectations.</p>
</div>
</div>

<div className="mb-24 animate-on-scroll">
<div className="text-center mb-12">
<p className="text-[#D90700] font-medium tracking-widest uppercase text-xs mb-3">Why Choose Us</p>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight font-geist uppercase">Build Your Best Body</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.k6fitness.in/wp-content/uploads/2024/03/1-1.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.k6fitness.in/wp-content/uploads/2024/03/2-1.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.k6fitness.in/wp-content/uploads/2024/03/3-1.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.k6fitness.in/wp-content/uploads/2024/03/4-1.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://www.k6fitness.in/wp-content/uploads/2024/03/5.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pt-24 min-h-screen" id="training">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<p className="text-[#D90700] font-medium tracking-widest uppercase text-xs mb-4">Our Programs</p>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 font-geist">Forged in Iron.</h1>
<p className="text-xl text-white/60 max-w-2xl mx-auto">Explore our diverse range of training programs designed to push your limits.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

<div className="group rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden backdrop-blur hover:bg-neutral-800/50 transition-all animate-on-scroll">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-white">Strength Training</h3>
<svg className="lucide lucide-dumbbell text-[#D90700]" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<p className="text-white/60 mb-6 leading-relaxed">Build muscle, increase power, and transform your physique with our comprehensive weight lifting protocols. Includes compound movements and isolation exercises.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hypertrophy Focus</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Powerlifting Zones</li>
</ul>
</div>
</div>

<div className="group rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden backdrop-blur hover:bg-neutral-800/50 transition-all animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1606335543042-57c525922933?w=3840&amp;q=80" style={{}}/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-white">Cardio &amp; HIIT</h3>
<svg className="lucide lucide-activity text-[#D90700]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="text-white/60 mb-6 leading-relaxed">Boost your endurance and burn calories efficiently. Our High-Intensity Interval Training sessions are designed to keep your heart rate up.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Treadmills &amp; Ellipticals</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Circuit Training</li>
</ul>
</div>
</div>

<div className="group rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden backdrop-blur hover:bg-neutral-800/50 transition-all animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1606335543042-57c525922933?w=3840&amp;q=80" style={{}}/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-white">Boxing</h3>
<svg className="lucide lucide-swords text-[#D90700]" data-lucide="swords" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" x2="19" y1="19" y2="13"></line><line x1="16" x2="20" y1="16" y2="20"></line><line x1="19" x2="21" y1="21" y2="19"></line><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline><line x1="5" x2="9" y1="14" y2="18"></line><line x1="7" x2="4" y1="17" y2="20"></line><line x1="3" x2="5" y1="19" y2="21"></line></svg>
</div>
<p className="text-white/60 mb-6 leading-relaxed">Learn self-defense and improve agility. Our boxing area is equipped with heavy bags and speed bags for a complete combat workout.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Technique Drills</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sparring Sessions</li>
</ul>
</div>
</div>

<div className="group rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden backdrop-blur hover:bg-neutral-800/50 transition-all animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-white">Personal Training</h3>
<svg className="lucide lucide-user-check text-[#D90700]" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-white/60 mb-6 leading-relaxed">Get 1-on-1 attention with a dedicated coach who will design a plan specifically for your body type and goals.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom Diet Plan</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check w-4 h-4 text-[#D90700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Progress Tracking</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pt-24 min-h-screen" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 animate-on-scroll">

<div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-8 font-geist">Get in Touch</h1>
<p className="text-xl text-white/60 mb-12">Have questions about memberships or training? Visit us or drop a message.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#D90700]">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
<p className="text-white/60">Mudiyarasan Salai Rd, Near Prabhu Dental,Ananda Nagar, Karaikudi, Tamil Nadu 630002</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#D90700]">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
<p className="text-white/60">+91 97965 63646</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#D90700]">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Email</h3>
<p className="text-white/60">info@k6fitness.in</p>
</div>
</div>
</div>
<div className="mt-12">
<h4 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#D90700] hover:border-[#D90700] transition-colors" href="https://www.instagram.com/k6_fitness/" target="_blank"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#D90700] hover:border-[#D90700] transition-colors" href="https://www.facebook.com/K6fitnessclub/" target="_blank"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#D90700] hover:border-[#D90700] transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>

<div className="bg-neutral-900/50 backdrop-blur border border-white/10 rounded-3xl p-8 lg:p-10">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-white/70">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D90700] transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/70">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D90700] transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/70">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D90700] transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/70">Goal</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D90700] transition-colors">
<option className="bg-neutral-900">Weight Loss</option>
<option className="bg-neutral-900">Muscle Gain</option>
<option className="bg-neutral-900">General Fitness</option>
<option className="bg-neutral-900">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-white/70">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D90700] transition-colors" placeholder="Tell us about yourself..." rows="4"></textarea>
</div>
<button className="w-full bg-[#D90700] hover:bg-[#b00600] text-white font-medium py-4 rounded-lg transition-all active:scale-[0.98]" type="button">Send Message</button>
</form>
</div>
</div>
</div>
</div>

<footer className="relative z-20 border-white/10 border-t bg-neutral-950">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="col-span-1 lg:col-span-2">
<a className="inline-flex items-center justify-center" href="#">
<img alt="K6 Fitness" className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" src="https://www.k6fitness.in/wp-content/uploads/2024/03/Site-logo-180-x-60-px-1.svg" style={{}}/>
</a>
<p className="text-sm text-white/60 font-geist mt-4 max-w-xs">Dedicated to your fitness success. With top-notch equipment and expert guidance, we're your partner in achieving your goals.</p>
</div>

<div>
<p className="text-xs uppercase tracking-widest text-white/50 font-geist mb-4">Quick Links</p>
<ul className="space-y-2">
<li><button className="hover:text-[#D90700] transition text-sm text-white/70 font-geist" onclick="navigateTo('home')">Home</button></li>
<li><button className="hover:text-[#D90700] transition text-sm text-white/70 font-geist" onclick="navigateTo('about')">About Us</button></li>
</ul>
</div>

<div>
<p className="text-xs uppercase tracking-widest text-white/50 font-geist mb-4">Contact</p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-white/70 font-geist">
<svg className="lucide lucide-map-pin w-4 h-4 text-[#D90700] mt-0.5 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mudiyarasan Salai Rd, Karaikudi
            </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<svg className="lucide lucide-mail w-4 h-4 text-[#D90700]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-white" href="mailto:info@k6fitness.in">info@k6fitness.in</a>
</li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© 2024 K6 Fitness. All rights reserved.</p>
<p className="text-xs text-white/30 font-geist">Designed by AristosTech</p>
</div>
</div>
</footer>

    </>
  );
}
