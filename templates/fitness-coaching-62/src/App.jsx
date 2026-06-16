import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Reveal Animations using Intersection Observer
    document.addEventListener("DOMContentLoaded", () => {
      // Setup scroll reveals
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

      // Initial Hero Animations (delayed slightly for load effect)
      setTimeout(() => {
        document.querySelectorAll('.hero-reveal').forEach(el => {
          el.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
          el.classList.add('opacity-100', 'translate-y-0', 'blur-0');
        });
      }, 100);

      // Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const iconMenu = document.getElementById('menu-icon');
      const iconClose = document.getElementById('close-icon');

      let isMenuOpen = false;

      menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
          iconMenu.classList.add('hidden');
          iconClose.classList.remove('hidden');
          document.body.style.overflow = 'hidden'; // prevent scrolling
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          iconMenu.classList.remove('hidden');
          iconClose.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-cover bg-center w-full h-screen pointer-events-none" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f934586-4789-4792-826e-1853be92e6aa_3840w.jpg\')', animation: 'scrollBlur linear both', animationTimeline: 'scroll()', animationRange: '0 800px'}}>
</div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-neutral-950/40 backdrop-blur-xl">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity" href="/">
<div className="flex flex-col justify-center">
<span className="leading-none text-xl font-medium text-red-500 tracking-tight mb-1">thejonitaj</span>
<span className="text-xs font-semibold tracking-widest text-red-600 leading-none flex items-center justify-center gap-1">
<span className="w-4 h-[1px] bg-red-600 rounded-full"></span>
              GYM
              <span className="w-4 h-[1px] bg-red-600 rounded-full"></span>
</span>
<span className="flex gap-0.5 justify-center mt-1">
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-neutral-50 transition-colors tracking-wide" href="/programs">Transformations</a>
<a className="text-sm font-normal text-neutral-400 hover:text-neutral-50 transition-colors tracking-wide" href="/coaches">Coaches</a>
<a className="text-sm font-normal text-neutral-400 hover:text-neutral-50 transition-colors tracking-wide" href="/support">Support</a>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-100 hover:bg-white/10 hover:border-white/20 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            Start Training
          </button>
</nav>

<button className="lg:hidden inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear" id="menu-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg hidden" icon="solar:close-circle-linear" id="close-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-16 inset-x-0 h-[calc(100vh-4rem)] bg-neutral-950/95 backdrop-blur-2xl border-t border-white/5 flex-col px-6 py-8" id="mobile-menu">
<nav className="flex flex-col gap-6">
<a className="text-2xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="/programs">Programs</a>
<a className="text-2xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="/coaches">Coaches</a>
<a className="text-2xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="/method">Method</a>
<a className="text-2xl font-normal tracking-tight text-neutral-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<div className="h-px bg-white/5 w-full my-4"></div>
<button className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-white text-base font-medium text-neutral-950 transition-all hover:bg-neutral-200">
          Start Training
        </button>
</nav>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-end pb-24 pt-32 z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
<div className="hero-reveal transition-all duration-1000 ease-out opacity-100 translate-y-0 blur-0">
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
              Fit.<br/>Strong.<br/><span className="text-red-500">Confident.</span>
</h1>
</div>
<div className="hero-reveal transition-all duration-1000 ease-out delay-200 flex flex-col items-start lg:pb-4 opacity-100 translate-y-0 blur-0">
<div className="flex items-center gap-4 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
<iconify-icon className="text-neutral-100 text-sm" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-100 tracking-wide">4.9</span>
<span className="text-xs font-normal text-neutral-500">rating</span>
</div>
<div className="w-px h-4 bg-neutral-800 hidden sm:block"></div>
<span className="text-sm font-normal text-neutral-400 hidden sm:block">Over 3,000+ clients transformed</span>
</div>
<p className="text-lg sm:text-xl font-normal text-neutral-400 leading-relaxed max-w-lg mb-10">
              Take the leap today to get in the best shape of your life. My mission is to support you on your fitness and mental journey to create long-lasting change.
            </p>
<div className="flex flex-wrap items-center gap-6 border-t border-neutral-800/50 pt-8 w-full">
<button className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white text-sm font-medium text-neutral-950 transition-all hover:bg-neutral-200 hover:scale-[0.98]">
                Apply now
                <iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm font-normal text-neutral-200 hover:bg-neutral-800/80 transition-all backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                See the method
              </button>
</div>
<p className="text-xs font-normal text-neutral-600 mt-6 tracking-wide">Join today for 1:1 weight loss and nutrition coaching.</p>
</div>
</div>
</div>
</section>

<section className="relative z-20 border-t border-neutral-800/50 bg-neutral-950 py-24 lg:py-32">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="scroll-reveal transition-all duration-1000 ease-out text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Transformations</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">Transform like my clients</h2>
<p className="leading-relaxed text-lg font-normal text-neutral-400">Real results with real people. I have helped thousands of people achieve amazing results from all different starting points. Some people want to lose 10 pounds, some want to lose 100.</p>
</div>
<div className="scroll-reveal transition-all duration-1000 ease-out delay-200 mt-16 relative group">
<div className="overflow-hidden rounded-3xl border border-neutral-800/60 bg-neutral-900/20">
<img alt="Athletes training" className="aspect-video transition-transform duration-1000 group-hover:scale-105 hover:mix-blend-normal hover:opacity-100 opacity-80 mix-blend-luminosity w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eead6d8a-2b3a-4cf8-86bc-dd6c1256e028_3840w.png"/><div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
</div>
<div className="flex justify-center mt-10">
<button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-white hover:bg-neutral-800 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              Apply Now
            </button>
</div>
</div>
</div>
</section>

<section className="relative z-20 border-t border-neutral-800/50 bg-neutral-950 py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="scroll-reveal opacity-0 translate-y-8 blur-sm transition-all duration-1000 ease-out text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:dumbbell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Custom Plan</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">Elite Training Protocol</h2>
<p className="text-lg font-normal text-neutral-400 leading-relaxed">My coaching is custom built for you. My team includes Certified Personal Trainers, Sports Nutritionists, and Physical Therapists to get you the specialized support you need.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="scroll-reveal opacity-0 translate-y-8 blur-sm transition-all duration-1000 ease-out delay-100 group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="w-12 h-12 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 mb-6 group-hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-xl text-neutral-200" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">Workout Tutorials</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Whether you have a gym or not, watch me demonstrate exercises at every level.</p>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 blur-sm transition-all duration-1000 ease-out delay-200 group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="w-12 h-12 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 mb-6 group-hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-xl text-neutral-200" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">1:1 Coach Support</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Direct, one-on-one communication with your dedicated coach whenever you need it.</p>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 blur-sm transition-all duration-1000 ease-out delay-300 group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="w-12 h-12 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 mb-6 group-hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-xl text-neutral-200" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">Accountability Groups</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Join a community of driven individuals looking to achieve their fitness goals.</p>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 blur-sm transition-all duration-1000 ease-out delay-400 group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="w-12 h-12 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 mb-6 group-hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-xl text-neutral-200" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">Personalized Nutrition</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Every client gets a nutrition plan customized exactly for their lifestyle.</p>
</div>
</div>
</div>
</section>


<section className="lg:py-32 overflow-hidden bg-neutral-950 z-20 border-neutral-800/50 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="scroll-reveal transition-all duration-1000 ease-out">
<h2 className="sm:text-5xl text-4xl font-medium text-white tracking-tight mb-6">Meet your Coach</h2>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-10">With years of experience in the fitness industry, I've had the privilege of teaching a variety of fitness classes and competing in fitness competitions. Over time, I discovered my true passion for boxing, where I've found my niche in helping others get fit, strong, and confident through boxing training. I've taught at numerous clubs, and I'm proud to be a certified Thump Boxing Instructor, bringing the energy, skills, and dedication of boxing to every class. Whether you're a beginner or looking to level up your fitness, I'm here to help you punch your way to success!</p>
<div className="flex flex-col gap-4">

<div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50">
<iconify-icon className="text-neutral-200" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-200 mb-1">Instant food logging</h4>
<p className="text-sm font-normal text-neutral-500">Simply talk out loud and the app searches the database for you seamlessly.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50">
<iconify-icon className="text-neutral-200" icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-200 mb-1">Video guided workouts</h4>
<p className="text-sm font-normal text-neutral-500">Follow along without the guesswork with precise video demonstrations.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-colors">
<div className="mt-1 flex-shrink-0 w-10 h-10 inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50">
<iconify-icon className="text-neutral-200" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-neutral-200 mb-1">Log progress</h4>
<p className="text-sm font-normal text-neutral-500">Integrate your smart scale, wearables, and Apple Health for perfect tracking.</p>
</div>
</div>
</div>
</div>

<div className="relative scroll-reveal transition-all duration-1000 ease-out delay-200">
<div className="relative overflow-hidden rounded-[2rem] border border-neutral-800/60 bg-neutral-900 aspect-[4/5] lg:aspect-square">
<img alt="Focused athlete" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10a44c44-ef78-4c36-aa57-e016e3ef9a39_1600w.jpg"/>
<div className="bg-gradient-to-tr from-neutral-950/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
</div>

<div className="absolute top-8 left-8 inline-flex items-center gap-2.5 rounded-xl border border-neutral-700/60 bg-black/50 backdrop-blur-md px-4 py-2.5 shadow-2xl">
<iconify-icon className="text-neutral-300" icon="solar:speedometer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-normal text-neutral-200">Readiness 87%</span>
</div>
<div className="absolute bottom-8 left-8 flex flex-col gap-3">
<div className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-700/60 bg-black/50 backdrop-blur-md px-4 py-2.5 shadow-2xl">
<iconify-icon className="text-neutral-300" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-normal text-neutral-200">Weight -12 lbs</span>
</div>
<div className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-700/60 bg-black/50 backdrop-blur-md px-4 py-2.5 shadow-2xl">
<iconify-icon className="text-neutral-300" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-normal text-neutral-200">ORM +35 lbs</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-neutral-950 z-20 border-neutral-800/50 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 scroll-reveal transition-all duration-1000 ease-out">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-3">Join the family today</h2>
<p className="text-lg font-normal text-neutral-400">We are excited for you to begin your transformation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="scroll-reveal transition-all duration-1000 ease-out delay-100 h-full rounded-[2rem] border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 shrink-0">
<iconify-icon className="text-neutral-200 text-lg" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-neutral-100">Complete the form</h3>
<p className="text-xs font-normal text-neutral-500 mt-1 uppercase tracking-widest">Step 1</p>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Periodized compound lifts
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                RPE-based progression
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                3–4 days/week
              </li>
</ul>
<button className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-sm font-medium text-neutral-950 transition-all hover:bg-neutral-200 mt-auto">
              Apply Now
            </button>
</div>

<div className="scroll-reveal transition-all duration-1000 ease-out delay-200 h-full rounded-[2rem] border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 shrink-0">
<iconify-icon className="text-neutral-200 text-lg" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-neutral-100">Consultation</h3>
<p className="text-xs font-normal text-neutral-500 mt-1 uppercase tracking-widest">Step 2</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Volume &amp; intensity planning
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Isolation precision
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Goal mapping
              </li>
</ul>
</div>

<div className="scroll-reveal transition-all duration-1000 ease-out delay-300 h-full rounded-[2rem] border border-neutral-800 bg-neutral-900/30 p-8 hover:bg-neutral-800/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 shrink-0">
<iconify-icon className="text-neutral-200 text-lg" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100">You are all set</h3>
<p className="text-xs font-normal text-neutral-500 mt-1 uppercase tracking-widest">Step 3</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                App credentials sent
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Onboarding complete
              </li>
<li className="flex items-center gap-3 text-sm font-normal text-neutral-400">
<iconify-icon className="text-neutral-500 shrink-0 text-base" icon="solar:check-circle-linear"></iconify-icon>
                Start your journey
              </li>
</ul>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-20 border-t border-neutral-800/50 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2 max-w-sm">
<a className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity mb-6" href="#">
<div className="flex flex-col justify-center">
<span className="text-xl font-medium tracking-tight text-red-500 leading-none mb-1">thejonitaj</span>
<span className="text-xs font-semibold tracking-widest text-red-600 leading-none flex items-center justify-center gap-1">
<span className="w-4 h-[1px] bg-red-600 rounded-full"></span>
                GYM
                <span className="w-4 h-[1px] bg-red-600 rounded-full"></span>
</span>
<span className="flex gap-0.5 justify-center mt-1">
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="text-red-600" fill="currentColor" height="8" stroke="none" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</span>
</div>
</a>
<p className="text-sm font-normal text-neutral-400 mb-6 leading-relaxed">Join the thejonitaj GYM family today for life-changing, science-based fitness and nutrition coaching.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full sm:flex-1 rounded-full bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-sm font-normal text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]" placeholder="Email address" type="email"/>
<button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 shrink-0" type="submit">
              Subscribe
            </button>
</form>
<p className="text-xs font-normal text-neutral-600 mt-3 tracking-wide">Unsubscribe anytime. No spam.</p>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Meet our Coaches</a></li>
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Client Transformations</a></li>
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Training Method</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-neutral-800/50 pt-8">
<p className="text-xs font-normal text-neutral-600 tracking-wide">© 2025 thejonitaj GYM. All rights reserved.</p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<a className="text-xs font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Terms</a>
<a className="text-xs font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Privacy</a>
<a className="text-xs font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">Cookies</a>
<a className="inline-flex items-center gap-2 text-xs font-normal text-neutral-500 hover:text-white transition-colors tracking-wide" href="#">
            Status
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
