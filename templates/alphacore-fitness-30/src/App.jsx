import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
white: '#FFFFFF',
offwhite: '#F5F5F0',
charcoal: '#111111',
lime: '#C8FF00',
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Barlow Condensed', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('border-gray-100');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('border-gray-100');
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
<span className="font-display font-bold text-2xl tracking-tighter uppercase">AlphaCore</span>
<i className="w-5 h-5 text-lime fill-lime" data-lucide="zap"></i>
</div>

<nav className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium uppercase tracking-wide hover:text-lime transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-lime transition-colors" href="#features">Features</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-lime transition-colors" href="#process">Process</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-lime transition-colors" href="#team">Team</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-lime transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center">
<a className="bg-charcoal text-lime font-display font-bold text-lg px-6 py-2 uppercase tracking-wide hover:bg-lime hover:text-charcoal transition-all duration-300 rounded-none" href="#join">
                        Get Started
                    </a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-charcoal hover:text-lime focus:outline-none" id="mobile-menu-btn">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full left-0" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
<a className="block px-3 py-3 text-lg font-display font-bold uppercase hover:bg-offwhite hover:text-lime border-l-4 border-transparent hover:border-lime" href="#programs">Programs</a>
<a className="block px-3 py-3 text-lg font-display font-bold uppercase hover:bg-offwhite hover:text-lime border-l-4 border-transparent hover:border-lime" href="#features">Features</a>
<a className="block px-3 py-3 text-lg font-display font-bold uppercase hover:bg-offwhite hover:text-lime border-l-4 border-transparent hover:border-lime" href="#process">Process</a>
<a className="block px-3 py-3 text-lg font-display font-bold uppercase hover:bg-offwhite hover:text-lime border-l-4 border-transparent hover:border-lime" href="#team">Team</a>
<a className="block mt-4 text-center bg-charcoal text-lime font-display font-bold text-lg px-6 py-3 uppercase rounded-none" href="#join">Get Started</a>
</div>
</div>
</header>

<section className="relative pt-20 lg:pt-0 min-h-screen flex items-center bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
<div className="flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-0">

<div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-0 lg:pr-12 z-10">
<h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter text-charcoal mb-6">
                        TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-gray-600">FITNESS JOURNEY</span> WITH EXPERT GUIDANCE
                    </h1>
<p className="text-lg lg:text-xl text-gray-600 font-normal leading-relaxed mb-10 max-w-lg">
                        Unlock your potential with personalized training programs designed by experienced coaches. Achieve your fitness goals faster and more effectively.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-lime text-charcoal border border-lime font-display font-bold text-xl px-8 py-3 uppercase tracking-wide hover:bg-charcoal hover:text-lime hover:border-charcoal transition-all duration-300 rounded-none text-center" href="#join">
                            Join Us
                        </a>
<a className="bg-transparent text-charcoal border border-charcoal font-display font-bold text-xl px-8 py-3 uppercase tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 rounded-none text-center" href="#about">
                            About Us
                        </a>
</div>
</div>

<div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 lg:hidden"></div>
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden lg:block w-32"></div>
<img alt="Athlete training" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0566cf96-424b-41d9-882e-d247c3ffd02d_1600w.png"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-lime"></div>
</section>

<section className="py-24 bg-offwhite" id="programs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-2 block">Programs</span>
<h2 className="font-display font-bold text-4xl lg:text-5xl text-charcoal uppercase tracking-tight mb-4">Our Training Programs</h2>
<p className="text-gray-600 text-lg max-w-2xl">Our training programs are designed to empower individuals at all skill levels. We have the right program for you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-charcoal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Strength Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal">Strength Training</h3>
<p className="text-gray-600 mb-6 flex-grow leading-relaxed">Transform your body with targeted strength programs to build muscle and achieve results faster.</p>
<a className="text-charcoal font-bold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-lime transition-colors" href="#">
                            See More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group bg-white border border-charcoal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="HIIT Cardio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=1469&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal">HIIT Cardio</h3>
<p className="text-gray-600 mb-6 flex-grow leading-relaxed">Boost your endurance and burn calories efficiently with high-intensity interval training sessions.</p>
<a className="text-charcoal font-bold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-lime transition-colors" href="#">
                            See More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group bg-white border border-charcoal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-none flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Mobility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=1426&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-display font-bold text-2xl uppercase mb-3 text-charcoal">Flexibility &amp; Mobility</h3>
<p className="text-gray-600 mb-6 flex-grow leading-relaxed">Improve flexibility, balance, and recovery with structured mobility training for peak performance.</p>
<a className="text-charcoal font-bold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:text-lime transition-colors" href="#">
                            See More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-block border border-charcoal text-charcoal px-8 py-3 font-display font-bold text-lg uppercase tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 rounded-none" href="#">
                    See All Programs →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-2 block">Features</span>
<h2 className="font-display font-bold text-4xl lg:text-5xl text-charcoal uppercase tracking-tight mb-4">Our Features</h2>
<p className="text-gray-600 text-lg mb-12">Our coaching programs are designed to take you from where you are to where you want to be.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="group">
<i className="w-8 h-8 text-lime mb-4" data-lucide="clipboard-list"></i>
<h3 className="font-display font-bold text-xl uppercase mb-2 text-charcoal">Personalized Assessment</h3>
<p className="text-gray-600 leading-relaxed text-sm">We begin with a thorough assessment to understand your fitness level and goals.</p>
</div>

<div className="group">
<i className="w-8 h-8 text-lime mb-4" data-lucide="pen-tool"></i>
<h3 className="font-display font-bold text-xl uppercase mb-2 text-charcoal">Tailored Plan</h3>
<p className="text-gray-600 leading-relaxed text-sm">Your coach creates a workout and nutrition plan built around your lifestyle and goals.</p>
</div>

<div className="group">
<i className="w-8 h-8 text-lime mb-4" data-lucide="dumbbell"></i>
<h3 className="font-display font-bold text-xl uppercase mb-2 text-charcoal">Hands-On Training</h3>
<p className="text-gray-600 leading-relaxed text-sm">Get expert coaching with real-time feedback and form correction every session.</p>
</div>

<div className="group">
<i className="w-8 h-8 text-lime mb-4" data-lucide="trending-up"></i>
<h3 className="font-display font-bold text-xl uppercase mb-2 text-charcoal">Continuous Progress</h3>
<p className="text-gray-600 leading-relaxed text-sm">We track your results and adjust your plan to keep you progressing consistently.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-12">
<a className="bg-lime text-charcoal border border-lime font-display font-bold text-lg px-8 py-3 uppercase tracking-wide hover:bg-charcoal hover:text-lime hover:border-charcoal transition-all duration-300 rounded-none text-center" href="#join">
                            Join Us
                        </a>
<a className="bg-transparent text-charcoal border border-charcoal font-display font-bold text-lg px-8 py-3 uppercase tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 rounded-none text-center" href="#about">
                            About Us
                        </a>
</div>
</div>

<div className="h-full min-h-[500px] relative">
<img alt="Gym Interior" className="w-full h-full object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=1469&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-4 -right-4 w-full h-full border border-charcoal -z-10 hidden sm:block"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal text-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-2 block">Process</span>
<h2 className="font-display font-bold text-4xl lg:text-5xl uppercase tracking-tight mb-4 text-white">How It Works</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">Use a 4-step program to guide you from registration to success. Follow these simple steps to achieve your fitness goals.</p>
</div>
<div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 space-y-12">
<div className="flex gap-6">
<div className="font-display font-bold text-4xl text-lime shrink-0">01</div>
<div>
<h3 className="font-display font-bold text-2xl uppercase mb-2">Initial Assessment</h3>
<p className="text-gray-400 leading-relaxed">We begin with a comprehensive fitness evaluation to understand your level, set your goals, and find the right approach.</p>
</div>
</div>
<div className="flex gap-6">
<div className="font-display font-bold text-4xl text-lime shrink-0">02</div>
<div>
<h3 className="font-display font-bold text-2xl uppercase mb-2">Customized Workout Plan</h3>
<p className="text-gray-400 leading-relaxed">Your dedicated coach designs a personalized plan tailored to your fitness level, schedule, and specific goals.</p>
</div>
</div>
<div className="flex gap-6">
<div className="font-display font-bold text-4xl text-lime shrink-0">03</div>
<div>
<h3 className="font-display font-bold text-2xl uppercase mb-2">Guided Training Sessions</h3>
<p className="text-gray-400 leading-relaxed">Train with expert coaches who provide real-time guidance, motivation, and corrections to maximize every session.</p>
</div>
</div>
<div className="flex gap-6">
<div className="font-display font-bold text-4xl text-lime shrink-0">04</div>
<div>
<h3 className="font-display font-bold text-2xl uppercase mb-2">Progress Tracking</h3>
<p className="text-gray-400 leading-relaxed">We continuously monitor your progress, adjust your program, and celebrate milestones along the way.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[600px] relative group">
<img alt="Coach explaining" className="w-full h-full object-cover rounded-none grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-offwhite" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-2 block">Team</span>
<h2 className="font-display font-bold text-4xl lg:text-5xl text-charcoal uppercase tracking-tight mb-4">Join Our Team</h2>
<p className="text-gray-600 text-lg max-w-xl">Meet our dedicated coaches and learn about our expert team who guide you every step of the way.</p>
</div>
<div className="flex gap-4">
<a className="bg-lime text-charcoal border border-lime font-display font-bold text-lg px-6 py-2 uppercase tracking-wide hover:bg-charcoal hover:text-lime hover:border-charcoal transition-all duration-300 rounded-none" href="#join">
                        Join
                    </a>
<a className="bg-transparent text-charcoal border border-charcoal font-display font-bold text-lg px-6 py-2 uppercase tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 rounded-none" href="#about">
                        About Us
                    </a>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 snap-x-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">

<div className="min-w-[280px] snap-center bg-white border border-charcoal group">
<div className="h-[320px] overflow-hidden">
<img alt="Coach 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=1374&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 border-t border-charcoal">
<h3 className="font-display font-bold text-xl uppercase text-charcoal">James Carter</h3>
<p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Head Coach</p>
</div>
</div>

<div className="min-w-[280px] snap-center bg-white border border-charcoal group">
<div className="h-[320px] overflow-hidden">
<img alt="Coach 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57fce766-4625-436b-ab1e-09c692b9881e_800w.jpg"/>
</div>
<div className="p-4 border-t border-charcoal">
<h3 className="font-display font-bold text-xl uppercase text-charcoal">Sarah Jenkins</h3>
<p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Strength Specialist</p>
</div>
</div>

<div className="min-w-[280px] snap-center bg-white border border-charcoal group">
<div className="h-[320px] overflow-hidden">
<img alt="Coach 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59222c55-edfd-4207-acc7-7f783c646056_800w.png"/>
</div>
<div className="p-4 border-t border-charcoal">
<h3 className="font-display font-bold text-xl uppercase text-charcoal">Mike Ross</h3>
<p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Nutrition Coach</p>
</div>
</div>

<div className="min-w-[280px] snap-center bg-white border border-charcoal group">
<div className="h-[320px] overflow-hidden">
<img alt="Coach 4" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d9f660e-0e9f-47a9-9835-c44687880627_800w.jpg"/>
</div>
<div className="p-4 border-t border-charcoal">
<h3 className="font-display font-bold text-xl uppercase text-charcoal">Elena Rodriquez</h3>
<p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Cardio Expert</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="grid grid-cols-2 gap-4 h-full">
<img alt="Client 1" className="w-full h-64 lg:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="w-full h-64 lg:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 mt-8 lg:mt-12" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=1374&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col justify-center">
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-2 block">Stories</span>
<h2 className="font-display font-bold text-4xl text-charcoal uppercase tracking-tight mb-12">Success Stories</h2>
<div className="space-y-10">
<div className="relative pl-8 border-l-2 border-lime">
<p className="text-lg italic text-gray-700 mb-4 leading-relaxed">"I used to dread working out. Now it's the best part of my day. The coaches here are incredibly motivating and knowledgeable."</p>
<p className="font-display font-bold uppercase text-charcoal">— Marcus T., Software Engineer</p>
</div>
<div className="relative pl-8 border-l-2 border-gray-200">
<p className="text-lg italic text-gray-700 mb-4 leading-relaxed">"In just 10 weeks, I dropped 18 pounds and finally hit my goal weight. The support and guidance were next level."</p>
<p className="font-display font-bold uppercase text-charcoal">— Jennifer L., Nurse Practitioner</p>
</div>
<div className="relative pl-8 border-l-2 border-gray-200">
<p className="text-lg italic text-gray-700 mb-4 leading-relaxed">"These workouts are tough but tailored exactly to what I need. I feel stronger and more confident in my everyday life."</p>
<p className="font-display font-bold uppercase text-charcoal">— David K., Marketing Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-charcoal relative overflow-hidden text-center">

<div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
<div className="absolute top-0 right-1/4 w-px h-full bg-white/5"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4">
<span className="text-xs font-bold tracking-[0.2em] text-lime uppercase mb-4 block">Join</span>
<h2 className="font-display font-extrabold text-5xl sm:text-7xl text-white uppercase tracking-tighter mb-6">Start Now</h2>
<p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-10">Our training program is designed to guide you from registration to success. Take the first step today toward the best version of yourself.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<a className="bg-lime text-charcoal border border-lime font-display font-bold text-xl px-12 py-4 uppercase tracking-wide hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300 rounded-none w-full sm:w-auto" href="#join">
                    Join Us
                </a>
<a className="bg-transparent text-white border border-white font-display font-bold text-xl px-12 py-4 uppercase tracking-wide hover:bg-white hover:text-charcoal transition-all duration-300 rounded-none w-full sm:w-auto" href="#about">
                    About Us
                </a>
</div>
</div>
</section>

<footer className="bg-charcoal border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">

<div className="flex items-center gap-2 mb-8 md:mb-0">
<span className="font-display font-bold text-3xl tracking-tighter uppercase text-white">AlphaCore</span>
<i className="w-6 h-6 text-lime fill-lime" data-lucide="zap"></i>
</div>

<div className="flex flex-wrap justify-center gap-8">
<a className="text-gray-400 hover:text-lime uppercase text-sm font-semibold tracking-wide transition-colors" href="#programs">Programs</a>
<a className="text-gray-400 hover:text-lime uppercase text-sm font-semibold tracking-wide transition-colors" href="#features">Features</a>
<a className="text-gray-400 hover:text-lime uppercase text-sm font-semibold tracking-wide transition-colors" href="#process">Process</a>
<a className="text-gray-400 hover:text-lime uppercase text-sm font-semibold tracking-wide transition-colors" href="#team">Team</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-xs">© 2023 AlphaCore Training. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
