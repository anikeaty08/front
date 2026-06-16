import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // -------------------------
        // GSAP ANIMATION LOGIC
        // -------------------------
        
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // 1. Helper function to split text for masked reveal
        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = ''; // Clear original text
            
            words.forEach(word => {
                // Create wrapper (mask)
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                
                // Create inner span (translating element)
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0'; // Add non-breaking space
                
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }

        // 2. Apply Split Logic to targeted elements
        const revealElements = document.querySelectorAll('.reveal-text');
        
        revealElements.forEach(element => {
            splitTextForReveal(element);
            
            // Get the inner words we just created
            const innerWords = element.querySelectorAll('.word-inner');
            
            // Create the animation
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation starts when top of text hits 85% of viewport height
                    toggleActions: "play none none reverse" // Re-plays if you scroll back up
                }
            });
        });

        // 3. Parallax Background Animation
        gsap.to("#hero-bg", {
            yPercent: 30, // Move the image down by 30% of its height
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true // Smoothly scrubs the animation based on scroll position
            }
        });

        // -------------------------
        // EXISTING SLIDER LOGIC
        // -------------------------
        const container = document.getElementById('testimonial-container');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if(container && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: container.clientWidth * 0.7, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -(container.clientWidth * 0.7), behavior: 'smooth' });
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
<div className="flex items-center gap-2">
<iconify-icon height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase" style={{}}>Serene</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight bg-stone-900/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<a className="hover:opacity-70 transition" href="#" style={{}}>Philosophy</a>
<a className="hover:opacity-70 transition" href="#" style={{}}>Clinic</a>
<a className="hover:opacity-70 transition" href="#" style={{}}>Apothecary</a>
<a className="hover:opacity-70 transition" href="#" style={{}}>Journal</a>
</div>
<button className="bg-white text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-200 transition" style={{}}>
            Member Login
        </button>
</nav>

<header className="relative w-full h-screen min-h-[800px] overflow-hidden" id="hero-section">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Woman relaxing" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter brightness-[0.75] will-change-transform" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6489cc1-a452-4e39-acc1-4f45e9db3f5b_3840w.webp"/>
</div>
<div className="flex flex-col md:px-12 md:pb-24 text-white pr-6 pb-12 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end z-10">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div className="">
<div className="flex items-center gap-2 mb-6 opacity-80">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase" style={{}}>New York • London • Tokyo</span>
</div>

<h1 className="reveal-text leading-[1.05] md:text-7xl text-5xl tracking-tighter mb-6 font-light" style={{}}>Reclaiming silence in a noisy world.</h1>
</div>
<div className="flex flex-col items-start lg:items-end justify-end gap-8">
<p className="text-lg md:text-xl font-light leading-relaxed max-w-md text-left lg:text-right opacity-90" style={{}}>
                        We merge ancient botanical wisdom with modern metabolic science to restore your body's innate rhythm.
                    </p>
<button className="group flex items-center gap-3 bg-white text-stone-950 pl-6 pr-2 py-2 rounded-full transition hover:bg-stone-200">
<span className="text-sm font-medium" style={{}}>Begin assessment</span>
<div className="w-8 h-8 bg-stone-950 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
<div className="max-w-7xl mx-auto w-full flex justify-between text-xs font-medium uppercase tracking-widest opacity-50 mt-12 border-t border-white/20 pt-6">
<span className="" style={{}}>Integrated Health Systems</span>
<span className="">2026 Serene Wellness</span>
</div>
</div>
</header>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex justify-between items-baseline mb-12 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest" style={{}}>/ 01 Our Philosophy</span>
<span className="text-xs text-stone-400 font-mono" style={{}}>[ 01 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 relative group overflow-hidden rounded-2xl h-[500px]">
<img alt="Portrait" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d52fd1be-07f8-4dcd-ade8-996c23619599_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
<p className="text-white text-lg font-light leading-snug" style={{}}>"The most comprehensive approach to longevity I've ever experienced."</p>
<div className="flex items-center gap-1 text-[#D4E8B0] mt-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-white text-sm font-medium ml-1" style={{}}>Verified Member</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between h-full gap-8">
<div className="">

<h2 className="reveal-text text-3xl tracking-tight text-stone-900 leading-tight mb-8 font-light" style={{}}>" Wellness is not a destination, but a daily practice of balance, clarity, and intentional living. "</h2>
<p className="text-stone-500 text-base leading-relaxed" style={{}}>Our clinical approach moves beyond symptom management to address root-cause vitality.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex-1 flex flex-col justify-end relative overflow-hidden group">
<img alt="Interior" className="absolute inset-0 w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cf3e4f7-c5af-4cfc-b1aa-e6f42add03ab_1600w.webp"/>
</div>
<div className="flex items-center justify-between">
<p className="text-stone-500 text-sm max-w-[200px]" style={{}}>12k+ Global Members</p>
<button className="bg-stone-900 text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
<span className="text-xs font-medium" style={{}}>Explore Methodology</span>
<div className="bg-white text-black rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-[#2C3E35] rounded-2xl p-8 flex flex-col justify-between min-h-[500px] relative overflow-hidden text-[#D4E8B0]">

<div className="absolute top-0 right-0 p-8 opacity-10 text-white">
<iconify-icon height="120" icon="solar:graph-new-linear" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#D4E8B0] rounded-full animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-wide" style={{}}>Community Impact</span>
</div>
<div>
<h3 className="text-6xl tracking-tighter text-white mb-2 font-light" style={{}}>94%</h3>
<p className="text-[#D4E8B0] text-sm opacity-80 mb-8" style={{}}>Of members report improved sleep quality within 14 days.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white" style={{}}>Cortisol Reduction</span>
<div className="absolute left-0 top-0 h-full bg-[#D4E8B0]/20 w-[82%]"></div>
</div>
<span className="text-sm font-medium text-white" style={{}}>82%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-full bg-white/10 h-10 rounded-full overflow-hidden flex items-center px-4 relative">
<span className="relative z-10 text-xs font-medium text-white" style={{}}>Metabolic Flexibility</span>
<div className="absolute left-0 top-0 h-full bg-[#D4E8B0]/20 w-[65%]"></div>
</div>
<span className="text-sm font-medium text-white" style={{}}>65%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-stone-200 bg-white py-12 relative flex items-center justify-center" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<style>
        @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
            animation: scroll-loop 40s linear infinite;
        }
        .animate-scroll-infinite:hover {
            animation-play-state: paused;
        }
    </style>
<div className="flex w-max animate-scroll-infinite items-center">

<div className="flex items-center gap-20 px-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out">
<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:spacex" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:uber" width="56"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="" height="64" icon="simple-icons:bitwig" style={{color: 'rgb(41, 37, 36)'}} width="64"></iconify-icon>
<iconify-icon className="" height="56" icon="simple-icons:agora" style={{color: 'rgb(41, 37, 36)'}} width="56"></iconify-icon>
<iconify-icon className="" height="56" icon="simple-icons:aboutdotme" style={{color: 'rgb(41, 37, 36)'}} width="56"></iconify-icon>
<iconify-icon className="" height="56" icon="simple-icons:99designs" style={{color: 'rgb(41, 37, 36)'}} width="56"></iconify-icon>
</div>

<div className="flex gap-20 hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-out opacity-30 pr-10 pl-10 grayscale gap-x-20 gap-y-20 items-center">
<iconify-icon className="" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="" height="56" icon="simple-icons:spacex" width="56"></iconify-icon>
<iconify-icon className="" height="56" icon="simple-icons:uber" width="56"></iconify-icon>
<iconify-icon className="" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="" height="64" icon="simple-icons:allegro" style={{color: 'rgb(41, 37, 36)'}} width="64"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:stripe" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:linear" width="56"></iconify-icon>
<iconify-icon height="56" icon="simple-icons:vercel" width="56"></iconify-icon>
</div>
</div>
</div>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#2C3E35] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon height="400" icon="solar:dna-linear" width="400"></iconify-icon>
</div>
<div className="flex justify-between items-baseline mb-12 border-b border-white/10 pb-4 relative z-10">
<span className="text-xs text-[#D4E8B0]/60 uppercase tracking-widest">/ 02 Clinical Care</span>
<span className="text-xs text-[#D4E8B0]/60 font-mono">[ 02 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

<div className="flex flex-col justify-between order-2 lg:order-1 gap-12">
<div className="">
<div className="flex items-start justify-between gap-6">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white mb-8 max-w-md font-light">
                            Precision medicine for the modern human.
                        </h2>
<div className="border border-[#D4E8B0]/20 rounded-full p-2 hidden lg:block shrink-0">
<iconify-icon className="text-[#D4E8B0]" height="24" icon="solar:dna-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Biomarker Analysis</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Hormone Optimization</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Gut Microbiome</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Peptide Therapy</span>
<span className="px-4 py-2 rounded-full border border-[#D4E8B0]/20 text-xs font-medium text-[#D4E8B0] hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition cursor-pointer">Tele-Health</span>
</div>
</div>
<div className="bg-[#23322b] border border-white/5 rounded-2xl p-6 flex gap-6 items-center">
<img alt="Doctor" className="w-20 h-20 rounded-xl object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/801bd63e-8f7f-44cc-af22-fe89e783cb33_320w.webp"/>
<div className="">
<h4 className="text-lg font-medium text-white">Dr. Julian Vance, MD</h4>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-white/50">Chief Medical Officer</span>
</div>
<p className="text-sm text-white/70 max-w-xs mb-4">"We don't just treat symptoms; we engineer your biology for resilience."</p>
<button className="bg-[#D4E8B0] text-[#2C3E35] pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium w-max hover:bg-white transition">
                            Consultation
                            <div className="bg-[#2C3E35] text-[#D4E8B0] rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] group order-1 lg:order-2">
<img alt="Healthy Food" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98495472-aacd-4d19-bf19-cd2454d9e387_1600w.webp"/>

<div className="absolute top-6 right-6 bg-[#1A2621]/90 backdrop-blur-md p-5 rounded-2xl shadow-xl w-72 border border-white/10">
<div className="flex justify-between items-end mb-4 border-b border-white/10 pb-2">
<div className="">
<span className="text-[10px] uppercase text-[#D4E8B0]/60 font-bold tracking-wider">Active Metabolism</span>
<div className="text-2xl tracking-tight font-light text-white">2,450 <span className="text-xs text-white/40 font-normal">kcal</span></div>
</div>
<div className="text-right">
<span className="text-[10px] uppercase text-[#D4E8B0]/60 font-bold tracking-wider">Index</span>
<div className="text-2xl tracking-tight font-light text-white">98 <span className="text-xs text-white/40 font-normal">opt</span></div>
</div>
</div>
<div className="flex justify-between gap-1 h-10 items-end">
<div className="h-[40%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[60%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[50%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[80%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[70%] w-2 bg-[#D4E8B0] rounded-full shadow-[0_0_10px_rgba(212,232,176,0.5)]"></div>
<div className="h-[90%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[75%] w-2 bg-white/10 rounded-full"></div>
<div className="h-[100%] w-2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-stone-50 max-w-[1600px] border-stone-100 border rounded-[40px] mt-12 mr-auto mb-12 ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex justify-between items-baseline mb-16">
<div className="">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4" style={{}}>/ 03 Programs</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 max-w-lg font-light" style={{}}>
                    Personalized protocols for every body.
                 </h2>
</div>
<div className="hidden lg:block">
<p className="text-sm text-stone-500 max-w-xs text-right" style={{}}>Data-driven health plans designed by world-class specialists.</p>
<span className="text-xs text-stone-400 font-mono block text-right mt-2" style={{}}>[ 03 ]</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative rounded-3xl overflow-hidden h-[700px]">
<img alt="Yoga" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec2179d5-e4f7-4e85-86d0-d004ca187d61_1600w.webp"/>

<div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
<div className="flex justify-between items-start mb-4">
<div className="">
<p className="text-xs text-stone-500 uppercase font-medium" style={{}}>Metabolic Reset Program</p>
<h3 className="text-3xl tracking-tight text-stone-900 font-light" style={{}}>$299<span className="text-sm text-stone-400 font-light" style={{}}>/mo</span></h3>
</div>
<div className="bg-stone-900 text-white text-[10px] uppercase font-bold tracking-wide px-3 py-1.5 rounded" style={{}}>
                            Most Popular
                        </div>
</div>
<div className="w-full h-1 bg-stone-100 rounded-full mb-4 overflow-hidden">
<div className="w-[70%] bg-[#2C3E35] h-full"></div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-medium">
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span style={{}}>Daily Coaching</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span style={{}}>Meal Plans</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#2C3E35]" icon="solar:check-circle-linear"></iconify-icon>
<span style={{}}>Lab Work</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="group p-8 rounded-2xl bg-white shadow-sm border border-stone-100 transition cursor-pointer">
<div className="flex items-start gap-6">
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs font-mono text-stone-500" style={{}}>01</div>
<div className="flex-1">
<h3 className="text-2xl tracking-tight text-stone-900 mb-3 font-light" style={{}}>Foundations Weight Loss</h3>
<p className="text-stone-500 text-base font-light leading-relaxed mb-6" style={{}}>
                                A GLP-1 supported program that combines medication with behavioral coaching to ensure sustainable, long-term weight management.
                            </p>
<div className="flex items-center justify-between">
<button className="bg-[#2C3E35] text-white pl-5 pr-2 py-2 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
<span className="text-xs font-medium" style={{}}>View Eligibility</span>
<div className="bg-white/20 text-white rounded-full p-1">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</button>
<div className="flex items-center gap-1 text-[#2C3E35] text-sm font-medium">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-stone-600 text-xs" style={{}}>2k+ enrolled</span>
</div>
</div>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600" style={{}}>02</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{}}>Cognitive Performance</h3>
<p className="text-sm text-stone-400 mt-1" style={{}}>Nootropic protocols for focus and clarity.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600" style={{}}>03</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{}}>Hormonal Balance</h3>
<p className="text-sm text-stone-400 mt-1" style={{}}>TRT and HRT therapies for vitality.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl hover:bg-white border border-transparent hover:border-stone-100 transition cursor-pointer">
<div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition">
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-xs font-mono text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600" style={{}}>04</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900" style={{}}>Longevity Protocol</h3>
<p className="text-sm text-stone-400 mt-1" style={{}}>Cellular repair and anti-aging support.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="flex justify-between items-baseline mb-8 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest" style={{}}>/ 04 Apothecary</span>
<span className="text-xs text-stone-400 font-mono" style={{}}>[ 04 ]</span>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-4xl tracking-tight text-stone-900 max-w-lg font-light" style={{}}>
                Daily rituals crafted to restore your natural rhythm.
            </h2>
<div className="flex gap-2">
<button className="px-4 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium" style={{}}>All</button>
<button className="px-4 py-1.5 border border-stone-200 text-stone-600 rounded-full text-xs font-medium hover:border-stone-400 transition" style={{}}>Topicals</button>
<button className="px-4 py-1.5 border border-stone-200 text-stone-600 rounded-full text-xs font-medium hover:border-stone-400 transition" style={{}}>Ingestibles</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 overflow-hidden group flex flex-col bg-stone-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e87981b4-9f1d-4525-86d0-b75c15667294_1600w.webp)] bg-cover bg-center rounded-3xl pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="relative z-10">
<span className="px-3 py-1 bg-white/80 backdrop-blur text-stone-900 text-[10px] font-bold uppercase tracking-wider rounded border border-stone-200" style={{}}>Best Seller</span>
<h3 className="text-4xl text-stone-900 mt-6 mb-2 font-light" style={{}}>Dawn Serum</h3>
<p className="text-stone-500 max-w-sm" style={{}}>Antioxidant-rich morning defense to awaken your skin's natural barrier.</p>
</div>
<div className="flex group-hover:translate-y-8 transition duration-700 absolute top-0 right-0 bottom-0 left-0 translate-y-12 items-center justify-center">

</div>
<div className="relative z-10 flex justify-between items-end">
<div className="text-2xl text-stone-900 font-light" style={{}}>$85</div>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:scale-110 transition shadow-sm">
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-1 bg-[#E8F0D6] rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-[#2C3E35] rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:sun-2-linear" width="32"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-[#2C3E35]" style={{}}>Solar Energy</h4>
<p className="text-xs text-[#2C3E35]/70 mt-1" style={{}}>Focus &amp; Clarity Blend</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-[#2C3E35]/10 pt-4">
<span className="font-medium text-[#2C3E35]" style={{}}>$45</span>
<span className="text-[10px] uppercase tracking-wide text-[#2C3E35]/60" style={{}}>60 Caps</span>
</div>
</div>

<div className="md:col-span-1 bg-white border border-stone-200 rounded-3xl p-6 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-4">
<iconify-icon icon="solar:moon-stars-linear" width="32"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900" style={{}}>Lunar Rest</h4>
<p className="text-xs text-stone-500 mt-1" style={{}}>Deep Sleep Support</p>
</div>
<div className="mt-4 flex justify-between items-center border-t border-stone-100 pt-4">
<span className="font-medium text-stone-900" style={{}}>$45</span>
<span className="text-[10px] uppercase tracking-wide text-stone-400" style={{}}>60 Caps</span>
</div>
</div>

<div className="md:col-span-2 bg-[#2C3E35] rounded-3xl p-8 flex items-center justify-between text-white relative overflow-hidden group">
<div className="relative z-10 max-w-[60%]">
<h4 className="text-2xl mb-2 font-light" style={{}}>The Starter Kit</h4>
<p className="text-sm text-white/60 mb-6" style={{}}>Complete protocol for beginners. Includes AM/PM formulations.</p>
<button className="text-xs font-medium border-b border-white pb-0.5 hover:text-[#D4E8B0] hover:border-[#D4E8B0] transition" style={{}}>Shop Collection</button>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition duration-500">
<span className="text-lg font-medium" style={{}}>$120</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto">
<div className="bg-[#2C3E35] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
<div className="flex justify-between items-start mb-12 relative z-10">
<div className="">
<span className="text-xs text-white/50 uppercase tracking-widest block mb-4" style={{}}>/ 05 Testimonials</span>
<h2 className="text-3xl md:text-5xl tracking-tight max-w-lg leading-tight font-light" style={{}}>
                        Stories from our community.
                    </h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2C3E35] transition duration-300" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#2C3E35] transition duration-300" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-4 snap-x hide-scrollbar scroll-smooth" id="testimonial-container">

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#23322b] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="User" className="w-full h-full object-cover rounded-2xl lg:rounded-none lg:rounded-l-3xl opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fba47e77-83f6-4793-8497-3ada589e2f9a_800w.jpg"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#D4E8B0]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light" style={{}}>
                                 "Being part of the metabolic reset program shifted my perspective entirely. It's not about restriction, it's about deep nourishment."
                             </blockquote>
<div className="flex items-center gap-4">
<div>
<div className="font-medium text-lg text-[#D4E8B0]" style={{}}>Savannah Watson</div>
<div className="text-xs uppercase tracking-wider opacity-60" style={{}}>Architect, London</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#23322b] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="User" className="lg:rounded-none lg:rounded-l-3xl opacity-90 w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7977c000-ef3e-47cb-8975-a36e84609b59_800w.webp"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#D4E8B0]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light" style={{}}>
                                 "The Nootropic protocols gave me a clarity I haven't felt in years. The brain fog lifted within the first week of the regimen."
                             </blockquote>
<div className="flex items-center gap-4">
<div className="">
<div className="font-medium text-lg text-[#D4E8B0]" style={{}}>Marcus Chen</div>
<div className="text-xs uppercase tracking-wider opacity-60" style={{}}>Software Engineer, SF</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[100%] md:min-w-[80%] lg:min-w-[70%] snap-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#23322b] rounded-3xl p-6 lg:p-0 overflow-hidden">
<div className="lg:col-span-4 h-64 lg:h-auto relative">
<img alt="User" className="lg:rounded-none lg:rounded-l-3xl opacity-90 w-full h-full object-cover rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dab93e0a-ecb6-458e-9f0d-b757ddd7056f_800w.webp"/>
</div>
<div className="lg:col-span-8 flex flex-col justify-center lg:py-12 lg:pr-12">
<iconify-icon className="mb-6 opacity-30 text-[#D4E8B0]" height="40" icon="solar:quote-up-bold" width="40"></iconify-icon>
<blockquote className="text-xl md:text-3xl leading-snug tracking-tight mb-8 font-light" style={{}}>
                                 "I was skeptical about telehealth, but the level of personalization in the bloodwork analysis was superior to my local clinic."
                             </blockquote>
<div className="flex items-center gap-4">
<div className="">
<div className="font-medium text-lg text-[#D4E8B0]" style={{}}>Elena Rodriguez</div>
<div className="text-xs uppercase tracking-wider opacity-60" style={{}}>Chef, Madrid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto border-b border-stone-200">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs text-stone-400 uppercase tracking-widest block mb-4" style={{}}>/ 06 FAQ</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-12 font-light" style={{}}>
                    Common Inquiries
                </h2>
<div className="mb-12">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] uppercase font-bold text-stone-400" style={{}}>Membership Capacity</span>
<span className="text-[10px] font-bold text-stone-400" style={{}}>92% Full</span>
</div>
<div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#2C3E35] w-[92%] h-full"></div>
</div>
</div>
<button className="bg-stone-900 text-white pl-6 pr-2 py-3 rounded-full flex items-center gap-4 hover:bg-stone-800 transition w-full md:w-auto justify-between md:justify-start">
<span className="text-sm font-medium" style={{}}>Apply for Membership</span>
<div className="bg-white text-black rounded-full p-1.5">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="lg:col-span-8 space-y-6">

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light" style={{}}>Do you accept insurance?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light" style={{}}>What does the initial assessment involve?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-stone-400 leading-relaxed max-w-2xl" style={{}}>
                        Our 75-minute intake includes a comprehensive review of your medical history, metabolic panel analysis, lifestyle audit, and goal setting with a functional medicine practitioner.
                    </p>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light" style={{}}>Are products vegan and cruelty-free?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="border-b border-stone-200 pb-6">
<div className="flex justify-between items-center cursor-pointer group">
<h3 className="text-xl text-stone-500 group-hover:text-stone-900 transition font-light" style={{}}>Can I pause my membership?</h3>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C3E35] text-white px-6 py-24 md:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="text-2xl tracking-tight mb-8 font-light" style={{}}>Harmony for your whole self.</h2>
<button className="bg-[#D4E8B0] text-[#2C3E35] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-white transition">
<span className="text-sm font-medium" style={{}}>Book Consultation</span>
<div className="bg-[#2C3E35] text-[#D4E8B0] rounded-full p-1.5">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
<div className="grid grid-cols-2 lg:col-span-3 gap-8 text-[10px] uppercase tracking-widest text-[#D4E8B0]/60">
<div className="space-y-8">
<div className="">
<span className="block mb-4 text-[#D4E8B0]" style={{}}>Clinic Hours</span>
<div className="text-white normal-case text-sm font-light" style={{}}>08:00 AM - 08:00 PM EST</div>
</div>
<div>
<span className="block mb-4 text-[#D4E8B0]" style={{}}>Contact</span>
<div className="text-white normal-case text-sm font-light block" style={{}}>(+1) 415 789 3456</div>
<div className="text-white normal-case text-sm font-light block" style={{}}>care@serenewellness.com</div>
</div>
</div>
<div className="space-y-8">
<div>
<span className="block mb-4 text-[#D4E8B0]" style={{}}>Locations</span>
<div className="text-white normal-case text-sm font-light mb-4" style={{}}>
                            42 Westbrook Lane, NYC
                        </div>
<div className="text-white normal-case text-sm font-light" style={{}}>
                            18 Kensington High St, London
                        </div>
</div>
<div className="pt-8">
<span className="block mb-4 text-[#D4E8B0]" style={{}}>Connect</span>
<div className="flex gap-2">
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#D4E8B0]/20 text-white hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition" href="#">
<iconify-icon icon="simple-icons:instagram"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#D4E8B0]/20 text-white hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded border border-[#D4E8B0]/20 text-white hover:bg-[#D4E8B0] hover:text-[#2C3E35] transition" href="#">
<iconify-icon icon="simple-icons:linkedin"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-[#D4E8B0]/20 flex flex-col md:flex-row justify-between text-[10px] text-[#D4E8B0]/60 tracking-wider uppercase">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition" href="#" style={{}}>Philosophy</a>
<a className="hover:text-white transition" href="#" style={{}}>Science</a>
<a className="hover:text-white transition" href="#" style={{}}>Shop</a>
</div>
<div className="flex gap-6">
<span style={{}}>© 2024 Serene Wellness Co.</span>
<a className="hover:text-white transition" href="#" style={{}}>Privacy</a>
<a className="hover:text-white transition" href="#" style={{}}>Terms</a>
</div>
</div>
</footer>


    </>
  );
}
