import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize AOS Animations
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
            easing: 'ease-out-cubic',
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
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
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps

                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current) + "+";
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
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 cursor-pointer">
<span className="text-2xl font-bold tracking-tight text-white">APEX<span className="text-lime-400">.</span>FIT</span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-white hover:text-lime-400 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors" href="#services">Programs</a>
<a className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors" href="#trainers">Trainers</a>
<a className="text-sm font-medium text-slate-300 hover:text-lime-400 transition-colors" href="#pricing">Membership</a>
</div>
</div>

<div className="hidden md:block">
<a className="bg-lime-400 text-slate-950 hover:bg-lime-300 px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(163,230,53,0.4)]" href="#contact">
                        Join Now
                    </a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden glass-panel border-t border-slate-800" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<a className="text-white block px-3 py-2 rounded-md text-base font-medium" href="#home">Home</a>
<a className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium" href="#about">About</a>
<a className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium" href="#services">Programs</a>
<a className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium" href="#pricing">Pricing</a>
<a className="text-lime-400 block px-3 py-2 rounded-md text-base font-medium" href="#contact">Join Now</a>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-10"></div>
<div className="absolute inset-0 bg-black/40 z-10"></div>
<img alt="Gym Background" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
<div data-aos="fade-up" data-aos-duration="1000">
<span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-lime-400/30 text-lime-400 text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm">
                    PREMIUM FITNESS EXPERIENCE
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
                    TRANSFORM YOUR <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500 neon-text">BODY &amp; LIFE</span>
</h1>
<p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-10">
                    Modern Equipment • Expert Trainers • Personalized Plans. <br className="hidden md:block"/>
                    Join the elite community dedicated to peak performance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-lime-400 text-slate-950 text-sm font-semibold rounded-full hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2 group" href="#contact">
                        Join Now 
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#services">
<span className="iconify" data-icon="lucide:play-circle"></span>
                        Book Free Trial
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
<span className="iconify text-slate-500" data-icon="lucide:chevrons-down" data-width="32"></span>
</div>
</section>

<section className="relative z-20 -mt-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-2xl text-center hover:bg-slate-800/50 transition-colors">
<h3 className="text-3xl md:text-4xl font-bold text-lime-400 counter" data-target="500">0</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Active Members</p>
</div>

<div className="glass-panel p-6 rounded-2xl text-center hover:bg-slate-800/50 transition-colors">
<h3 className="text-3xl md:text-4xl font-bold text-lime-400 counter" data-target="20">0</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Expert Trainers</p>
</div>

<div className="glass-panel p-6 rounded-2xl text-center hover:bg-slate-800/50 transition-colors">
<h3 className="text-3xl md:text-4xl font-bold text-lime-400 counter" data-target="50">0</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Programs</p>
</div>

<div className="glass-panel p-6 rounded-2xl text-center hover:bg-slate-800/50 transition-colors">
<h3 className="text-3xl md:text-4xl font-bold text-lime-400 counter" data-target="100">0</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">% Results</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/3 h-full bg-lime-400/5 blur-[120px]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div data-aos="fade-right">
<h2 className="text-xs font-bold text-lime-400 tracking-widest uppercase mb-2">Who We Are</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        We Are More Than <br/> Just A <span className="text-lime-400">Gym.</span>
</h3>
<p className="text-slate-400 text-base leading-relaxed mb-6 font-light">
                        At Apex Fit, we combine state-of-the-art technology with world-class coaching to help you achieve the impossible. Our mission is to create a sanctuary for those who refuse to settle for average.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<span className="p-1 rounded-full bg-lime-400/10 text-lime-400">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</span>
<span className="text-sm text-slate-300">Biomechanical Analysis &amp; Tracking</span>
</li>
<li className="flex items-center gap-3">
<span className="p-1 rounded-full bg-lime-400/10 text-lime-400">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</span>
<span className="text-sm text-slate-300">Nutrition &amp; Recovery Lounge</span>
</li>
<li className="flex items-center gap-3">
<span className="p-1 rounded-full bg-lime-400/10 text-lime-400">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</span>
<span className="text-sm text-slate-300">Private Training Studios</span>
</li>
</ul>
<a className="text-white text-sm font-medium border-b border-lime-400 pb-1 hover:text-lime-400 transition-colors inline-flex items-center gap-2" href="#contact">
                        Learn More About Us <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="relative" data-aos="fade-left">
<div className="absolute inset-0 bg-lime-400 rounded-2xl rotate-3 opacity-20 blur-sm"></div>
<img alt="About Gym" className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[500px] w-full border border-slate-800" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
<div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center text-slate-950">
<span className="iconify" data-icon="lucide:trophy" data-width="24"></span>
</div>
<div>
<p className="text-sm font-bold text-white">Best Gym 2024</p>
<p className="text-xs text-slate-400">Fitness Awards</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="text-xs font-bold text-lime-400 tracking-widest uppercase mb-2">Our Programs</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Push Your Limits</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="0">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:dumbbell"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:biceps-flexed" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Strength Training</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Build muscle mass and increase strength with our specialized equipment and free weights area.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:activity"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Cardio &amp; Endurance</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Boost your heart health and stamina with advanced treadmills, rowers, and stair masters.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:sparkles"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:flower-2" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Yoga &amp; Mobility</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Enhance flexibility and mental focus in our serene, sound-proofed studio space.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:flame"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:swords" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">CrossFit</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">High-intensity functional movements performed at high intensity for total conditioning.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="400">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:user"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:user-check" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Personal Training</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">1-on-1 coaching customized to your specific body type, goals, and schedule.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group relative bg-slate-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800 neon-box overflow-hidden" data-aos="fade-up" data-aos-delay="500">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-lime-400 w-24 h-24" data-icon="lucide:music"></span>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
<span className="iconify" data-icon="lucide:music-2" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-white mb-3">Zumba &amp; Dance</h4>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">Fun, energetic dance workouts that burn calories while moving to the beat.</p>
<a className="inline-flex items-center text-xs font-bold text-white group-hover:text-lime-400 transition-colors uppercase tracking-wide" href="#">
                        Read More <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="text-xs font-bold text-lime-400 tracking-widest uppercase mb-2">Membership</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Invest In Yourself</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-lime-400/50 transition-all duration-300" data-aos="fade-right">
<h4 className="text-xl font-semibold text-white">Basic</h4>
<div className="my-4">
<span className="text-4xl font-bold text-white">$49</span><span className="text-slate-400 text-sm">/mo</span>
</div>
<p className="text-xs text-slate-400 mb-6">Perfect for beginners starting their journey.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Gym Access (Off-peak)</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Cardio Zone</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Locker Room</li>
<li className="text-sm text-slate-500 flex items-center gap-2"><span className="iconify" data-icon="lucide:x-circle"></span> No Trainer Access</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-600 text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors">Choose Plan</button>
</div>

<div className="relative glass-panel bg-slate-900/80 rounded-3xl p-8 border border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.15)] transform scale-105 z-10" data-aos="zoom-in">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lime-400 text-slate-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h4 className="text-xl font-semibold text-white">Standard</h4>
<div className="my-4">
<span className="text-4xl font-bold text-white">$89</span><span className="text-slate-400 text-sm">/mo</span>
</div>
<p className="text-xs text-slate-400 mb-6">Full access for serious fitness enthusiasts.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> 24/7 Gym Access</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> All Group Classes</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Sauna &amp; Spa</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Free Diet Plan</li>
</ul>
<button className="w-full py-3 rounded-xl bg-lime-400 text-slate-950 font-bold text-sm hover:bg-lime-300 transition-colors shadow-lg">Join Now</button>
</div>

<div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-lime-400/50 transition-all duration-300" data-aos="fade-left">
<h4 className="text-xl font-semibold text-white">Premium</h4>
<div className="my-4">
<span className="text-4xl font-bold text-white">$149</span><span className="text-slate-400 text-sm">/mo</span>
</div>
<p className="text-xs text-slate-400 mb-6">VIP treatment with personal attention.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> All Standard Features</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> 4 Personal Training Sessions</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Massage Therapy</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><span className="iconify text-lime-400" data-icon="lucide:check-circle-2"></span> Private Locker</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-600 text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors">Choose Plan</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="trainers">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
<div>
<h2 className="text-xs font-bold text-lime-400 tracking-widest uppercase mb-2">Our Team</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">World Class Coaches</h3>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-left"></span>
</button>
<button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group text-center" data-aos="fade-up" data-aos-delay="0">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-1 border-2 border-slate-700 group-hover:border-lime-400 transition-colors">
<img alt="Trainer" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-bold text-white">Alex Drago</h4>
<p className="text-xs text-lime-400 uppercase tracking-widest mb-2">Strength Coach</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
<span className="iconify text-slate-400 hover:text-white cursor-pointer" data-icon="lucide:instagram"></span>
<span className="iconify text-slate-400 hover:text-white cursor-pointer" data-icon="lucide:twitter"></span>
</div>
</div>

<div className="group text-center" data-aos="fade-up" data-aos-delay="100">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-1 border-2 border-slate-700 group-hover:border-lime-400 transition-colors">
<img alt="Trainer" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-bold text-white">Sarah Jenks</h4>
<p className="text-xs text-lime-400 uppercase tracking-widest mb-2">CrossFit Expert</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
<span className="iconify text-slate-400 hover:text-white cursor-pointer" data-icon="lucide:instagram"></span>
</div>
</div>

<div className="group text-center" data-aos="fade-up" data-aos-delay="200">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-1 border-2 border-slate-700 group-hover:border-lime-400 transition-colors">
<img alt="Trainer" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-bold text-white">Mike Ross</h4>
<p className="text-xs text-lime-400 uppercase tracking-widest mb-2">Bodybuilding</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
<span className="iconify text-slate-400 hover:text-white cursor-pointer" data-icon="lucide:facebook"></span>
</div>
</div>

<div className="group text-center" data-aos="fade-up" data-aos-delay="300">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-1 border-2 border-slate-700 group-hover:border-lime-400 transition-colors">
<img alt="Trainer" className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h4 className="text-lg font-bold text-white">Emma Stone</h4>
<p className="text-xs text-lime-400 uppercase tracking-widest mb-2">Yoga &amp; Pilate</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
<span className="iconify text-slate-400 hover:text-white cursor-pointer" data-icon="lucide:instagram"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16" data-aos="fade-up">
<h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Results &amp; Atmosphere</h3>
</div>
<div className="columns-1 md:columns-3 gap-4 space-y-4">
<div className="break-inside-avoid relative group rounded-xl overflow-hidden" data-aos="fade-up">
<img className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-lime-400 font-bold">Free Weights Zone</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<img className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-lime-400 font-bold">Transformation</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<img className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-lime-400 font-bold">Cardio</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-xl overflow-hidden" data-aos="fade-up">
<img className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-lime-400 font-bold">Community</span>
</div>
</div>
<div className="break-inside-avoid relative group rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<img className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-lime-400 font-bold">Equipment</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-center text-3xl font-bold text-white mb-12" data-aos="fade-up">Member Stories</h2>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center" data-aos="fade-right">
<div className="flex text-lime-400 mb-4">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I've trained at many gyms, but the vibe here is unmatched. The equipment is premium, and the trainers genuinely care about your progress. Lost 10kg in 3 months!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<h5 className="text-white font-bold text-sm">James Carter</h5>
<p className="text-xs text-slate-500">Member since 2022</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center" data-aos="fade-up">
<div className="flex text-lime-400 mb-4">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The Zumba classes are the highlight of my week. High energy, great music, and I burn tons of calories without feeling like I'm working out. Highly recommend!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<h5 className="text-white font-bold text-sm">Sophia Martinez</h5>
<p className="text-xs text-slate-500">Member since 2023</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-8 rounded-2xl snap-center" data-aos="fade-left">
<div className="flex text-lime-400 mb-4">
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
<span className="iconify" data-icon="lucide:star"></span>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Cleanest gym in the city. The staff is professional and the personal training plan helped me recover from an injury and get stronger than ever."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/85.jpg"/>
</div>
<div>
<h5 className="text-white font-bold text-sm">David Kim</h5>
<p className="text-xs text-slate-500">Member since 2021</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div data-aos="fade-right">
<h2 className="text-xs font-bold text-lime-400 tracking-widest uppercase mb-2">Get In Touch</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Start Your Transformation</h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-900 rounded-lg text-lime-400 border border-slate-800">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<h5 className="text-white font-semibold mb-1">Visit Us</h5>
<p className="text-slate-400 text-sm">123 Fitness Blvd, High Street<br/>Premium District, City 54000</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-900 rounded-lg text-lime-400 border border-slate-800">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span>
</div>
<div>
<h5 className="text-white font-semibold mb-1">Call Us</h5>
<p className="text-slate-400 text-sm">+1 (555) 123-4567<br/>Mon-Sat: 6am - 10pm</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-900 rounded-lg text-lime-400 border border-slate-800">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<div>
<h5 className="text-white font-semibold mb-1">Email Us</h5>
<p className="text-slate-400 text-sm">join@apexfit.com<br/>support@apexfit.com</p>
</div>
</div>
</div>

<div className="flex gap-4 mt-12">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-lime-400 hover:text-black transition-all" href="#">
<span className="iconify" data-icon="lucide:facebook"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-lime-400 hover:text-black transition-all" href="#">
<span className="iconify" data-icon="lucide:instagram"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-lime-400 hover:text-black transition-all" href="#">
<span className="iconify" data-icon="lucide:youtube"></span>
</a>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl" data-aos="fade-left">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-400 mb-2">First Name</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-slate-600 text-sm" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 mb-2">Last Name</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-slate-600 text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 mb-2">Email</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-slate-600 text-sm" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 mb-2">Phone</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors placeholder-slate-600 text-sm" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 mb-2">Goal</label>
<select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors text-sm">
<option>Weight Loss</option>
<option>Muscle Gain</option>
<option>General Fitness</option>
<option>Personal Training</option>
</select>
</div>
<button className="w-full bg-lime-400 text-slate-950 font-bold py-4 rounded-lg hover:bg-lime-300 transition-colors shadow-lg" type="button">Submit Request</button>
</form>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.492557553556!2d74.2917!3d31.4556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI3JzIwLjIiTiA3NMKwMTcnMzAuMSJF!5e0!3m2!1sen!2s!4v1633000000000!5m2!1sen!2s" style={{border: '0', filter: 'grayscale(100%) invert(90%)'}} width="100%"></iframe>
</div>
</section>

<footer className="bg-black border-t border-slate-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-bold tracking-tight text-white">APEX<span className="text-lime-400">.</span>FIT</span>
<p className="text-slate-500 text-sm mt-4">Premium fitness solutions for those who demand excellence. Join the revolution today.</p>
</div>
<div>
<h5 className="text-white font-semibold mb-4">Quick Links</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Trainers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4">Programs</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Weight Loss</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Body Building</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">CrossFit</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Yoga</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4">Newsletter</h5>
<div className="flex">
<input className="bg-slate-900 text-white text-sm px-4 py-2 rounded-l-lg focus:outline-none w-full border border-slate-800 border-r-0" placeholder="Your email" type="email"/>
<button className="bg-lime-400 text-slate-950 px-4 py-2 rounded-r-lg font-bold hover:bg-lime-300 transition-colors">GO</button>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Apex Fitness. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-white" href="#">
<span className="iconify" data-height="28" data-icon="lucide:message-circle" data-width="28"></span>
</a>



    </>
  );
}
