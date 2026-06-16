import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Navbar shrink on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-2', 'shadow-sm', 'bg-white/90');
                    navbar.classList.remove('py-4', 'bg-[#FAFAFA]/80', 'border-transparent');
                } else {
                    navbar.classList.add('py-4', 'bg-[#FAFAFA]/80', 'border-transparent');
                    navbar.classList.remove('py-2', 'shadow-sm', 'bg-white/90');
                }
            });

            // Hero Animations
            const heroTl = gsap.timeline();
            
            heroTl.from(".hero-text > *", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            heroTl.from(".hero-img-container", {
                clipPath: "inset(10% 10% 10% 10% round 2rem)",
                opacity: 0,
                duration: 1.2,
                ease: "power3.inOut"
            }, "-=0.6");

            heroTl.to(".hero-img", {
                scale: 1,
                duration: 1.2,
                ease: "power3.out"
            }, "-=1.2");

            // Floating Shapes Animation
            gsap.to(".shape-1", { y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(".shape-2", { y: 30, x: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
            gsap.to(".shape-3", { y: -20, x: -30, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });

            // Image Reveal Mask (About Section)
            gsap.utils.toArray('.image-reveal').forEach(container => {
                gsap.set(container, { clipPath: 'inset(100% 0 0 0)' });
                gsap.to(container, {
                    clipPath: 'inset(0% 0 0 0)',
                    duration: 1,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                    }
                });
            });

            // Generic Fade Up
            gsap.utils.toArray('.fade-up').forEach(element => {
                gsap.from(element, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                    }
                });
            });

            // Staggered Program Cards
            gsap.from(".program-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#programs",
                    start: "top 75%",
                }
            });

            // Animated Counters
            gsap.utils.toArray('.counter').forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".stats-section",
                        start: "top 80%",
                    },
                    onUpdate: function() {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                    }
                });
            });

            // Image Parallax slightly on scroll
            gsap.utils.toArray('.gallery-grid img').forEach(img => {
                gsap.to(img, {
                    yPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="text-xl tracking-tighter font-semibold flex items-center gap-2" href="#" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F26A21] to-[#F4B400] flex items-center justify-center text-white text-sm">L</div>
                LOVEDALE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#F26A21] transition-colors" href="#about">About</a>
<a className="hover:text-[#F26A21] transition-colors" href="#programs">Programs</a>
<a className="hover:text-[#F26A21] transition-colors" href="#campus">Campus</a>
<a className="hover:text-[#F26A21] transition-colors" href="#admissions">Admissions</a>
</div>
<div className="hidden md:block">
<a className="px-5 py-2.5 rounded-full text-sm font-medium text-[#F26A21] border border-[#F26A21]/30 hover:bg-[#F26A21]/5 hover:border-[#F26A21] transition-all duration-300" href="#admissions">
                    Apply Now
                </a>
</div>
<button className="md:hidden text-gray-600 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

<div className="shape-1 absolute top-1/4 right-1/4 w-96 h-96 bg-[#F26A21]/5 rounded-full blur-3xl -z-10"></div>
<div className="shape-2 absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#F4B400]/5 rounded-full blur-3xl -z-10"></div>
<div className="shape-3 absolute top-1/3 left-1/4 w-72 h-72 bg-[#2E7D32]/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="hero-text max-w-xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#F26A21] text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-[#F26A21] animate-pulse"></span>
                    Admissions Open for 2024
                </div>
<h1 className="text-5xl lg:text-7xl tracking-tight font-semibold leading-[1.1] mb-6 text-gray-900" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                    Shaping Bright <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26A21] to-[#F4B400]">Futures</span>
</h1>
<p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                    Lovedale International School provides a nurturing environment where students grow academically, socially, and creatively to become global citizens.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-6 py-3.5 rounded-full bg-[#F26A21] text-white text-sm font-medium hover:bg-[#d95a1a] transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-2 group" href="#admissions">
                        Apply Now
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-6 py-3.5 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-2" href="#contact">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                        Book a Tour
                    </a>
</div>
</div>
<div className="relative hero-img-container h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
<img alt="Students on campus" className="hero-img absolute inset-0 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-2 gap-4 relative">
<div className="space-y-4 pt-12">
<div className="image-reveal rounded-2xl overflow-hidden h-64 shadow-sm">
<img alt="Classroom" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="image-reveal rounded-2xl overflow-hidden h-48 shadow-sm">
<img alt="Learning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-4">
<div className="image-reveal rounded-2xl overflow-hidden h-56 shadow-sm">
<img alt="Students" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 fade-up">
<div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center text-[#E53935] mb-4">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Our Mission</h4>
<p className="text-sm text-gray-600">To inspire lifelong learning and cultivate compassionate, principled leaders.</p>
</div>
</div>
</div>
<div className="max-w-lg fade-up">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>A Legacy of Excellence in Education</h2>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                    At Lovedale, we believe in a holistic approach to education. Our curriculum is designed to challenge students intellectually while supporting their emotional and social development.
                </p>
<p className="text-base text-gray-600 mb-8 leading-relaxed">
                    With a state-of-the-art campus, dedicated faculty, and a diverse student body, we create a vibrant community where every child is known, valued, and inspired to reach their full potential.
                </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
<div>
<div className="text-2xl font-semibold text-[#F26A21] mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>25+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-2xl font-semibold text-[#F4B400] mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>100%</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">University Placement</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>Our Educational Programs</h2>
<p className="text-base text-gray-600">Tailored learning journeys designed for every stage of your child's development.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="program-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-[#F26A21]/10 flex items-center justify-center text-[#F26A21] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:toy-horse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>Pre-Primary</h3>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">Fostering curiosity and a love for learning through play-based and interactive activities.</p>
<a className="text-sm font-medium text-[#F26A21] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="program-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-[#2E7D32]/10 flex items-center justify-center text-[#2E7D32] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:backpack-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>Primary</h3>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">Building a strong foundation in core subjects while encouraging creative expression.</p>
<a className="text-sm font-medium text-[#2E7D32] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="program-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 flex items-center justify-center text-[#F4B400] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>Middle School</h3>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">Developing critical thinking and independent study skills during transitional years.</p>
<a className="text-sm font-medium text-[#F4B400] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="program-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>High School</h3>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">Rigorous academics and college preparation to equip students for global universities.</p>
<a className="text-sm font-medium text-[#E53935] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4 fade-up sticky top-32">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>Why Choose Lovedale</h2>
<p className="text-base text-gray-600 mb-8">We provide more than just education; we provide an environment that shapes character.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#222222] border-b border-[#222222] pb-1 hover:text-[#F26A21] hover:border-[#F26A21] transition-colors" href="#campus">
                        Explore our campus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">

<div className="fade-up group">
<div className="mb-4 text-gray-400 group-hover:text-[#F26A21] transition-colors">
<iconify-icon className="text-3xl" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Global Learning</h4>
<p className="text-sm text-gray-600">International curriculum framework preparing students for a connected world.</p>
</div>

<div className="fade-up group" style={{transitionDelay: '100ms'}}>
<div className="mb-4 text-gray-400 group-hover:text-[#F4B400] transition-colors">
<iconify-icon className="text-3xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Experienced Teachers</h4>
<p className="text-sm text-gray-600">Highly qualified educators dedicated to personalized student success.</p>
</div>

<div className="fade-up group" style={{transitionDelay: '200ms'}}>
<div className="mb-4 text-gray-400 group-hover:text-[#2E7D32] transition-colors">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Safe Campus</h4>
<p className="text-sm text-gray-600">Secure, monitored, and nurturing physical environment for peace of mind.</p>
</div>

<div className="fade-up group" style={{transitionDelay: '300ms'}}>
<div className="mb-4 text-gray-400 group-hover:text-[#E53935] transition-colors">
<iconify-icon className="text-3xl" icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Holistic Education</h4>
<p className="text-sm text-gray-600">Focus on arts, sports, and character building alongside academics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="campus">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end fade-up">
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>Campus Life</h2>
<p className="text-base text-gray-600">A glimpse into our vibrant daily activities.</p>
</div>
<div className="hidden sm:block">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 gallery-grid">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group h-[400px]">
<img alt="Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden group h-[192px]">
<img alt="Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden group h-[192px]">
<img alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden group h-[192px]">
<img alt="Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-20 bg-[#222222] text-white stats-section">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-800">
<div className="fade-up">
<div className="text-4xl lg:text-5xl font-semibold mb-2 text-[#F26A21] flex justify-center items-baseline" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="counter" data-target="1500">0</span>+
                </div>
<div className="text-sm text-gray-400 font-medium tracking-wide">Students</div>
</div>
<div className="fade-up">
<div className="text-4xl lg:text-5xl font-semibold mb-2 text-[#F4B400] flex justify-center items-baseline" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="counter" data-target="120">0</span>+
                </div>
<div className="text-sm text-gray-400 font-medium tracking-wide">Teachers</div>
</div>
<div className="fade-up">
<div className="text-4xl lg:text-5xl font-semibold mb-2 text-[#2E7D32] flex justify-center items-baseline" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="counter" data-target="50">0</span>+
                </div>
<div className="text-sm text-gray-400 font-medium tracking-wide">Awards</div>
</div>
<div className="fade-up">
<div className="text-4xl lg:text-5xl font-semibold mb-2 text-[#E53935] flex justify-center items-baseline" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<span className="counter" data-target="25">0</span>
</div>
<div className="text-sm text-gray-400 font-medium tracking-wide">Years Excellence</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>What Parents Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 fade-up">
<div className="flex gap-1 text-[#F4B400] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"The transformation in our daughter has been incredible. The teachers are genuinely invested in her success, not just academically but personally."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Parent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>Sarah Jenkins</div>
<div className="text-xs text-gray-500">Parent of Grade 5 student</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 fade-up" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-[#F4B400] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"Lovedale's facilities are top-notch. The focus on holistic education ensures my son gets a well-rounded experience. Highly recommend to any parent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Parent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>Michael Chang</div>
<div className="text-xs text-gray-500">Parent of High School student</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 fade-up" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-[#F4B400] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">"A safe and nurturing environment. My kids look forward to going to school every day. The communication from the administration is also excellent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Parent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>Elena Rodriguez</div>
<div className="text-xs text-gray-500">Parent of Grade 2 student</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="admissions">
<div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white p-12 lg:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#F26A21]/20 rounded-full blur-3xl -z-0"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4B400]/20 rounded-full blur-3xl -z-0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-5xl tracking-tight font-semibold mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>Start Your Child's Journey Today</h2>
<p className="text-base text-gray-300 mb-10 font-light">Join the Lovedale community and give your child the foundation they need to succeed in a rapidly changing world. Admissions are currently open.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F26A21] text-white text-sm font-medium hover:bg-[#d95a1a] transition-all hover:-translate-y-1 shadow-lg shadow-[#F26A21]/25">
                        Apply Now Online
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all">
                        Contact Admissions
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="text-xl tracking-tighter font-semibold flex items-center gap-2 mb-6" href="#" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F26A21] to-[#F4B400] flex items-center justify-center text-white text-sm">L</div>
                        LOVEDALE
                    </a>
<p className="text-sm text-gray-500 max-w-xs mb-6">Empowering minds, building character, and shaping the global leaders of tomorrow through holistic education.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#F26A21] hover:bg-[#F26A21]/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#F26A21] hover:bg-[#F26A21]/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#F26A21] hover:bg-[#F26A21]/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="font-semibold mb-4 text-sm" style={{fontFamily: '\'Poppins\', sans-serif'}}>Quick Links</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#F26A21] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Curriculum</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Campus Life</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold mb-4 text-sm" style={{fontFamily: '\'Poppins\', sans-serif'}}>Admissions</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#F26A21] transition-colors" href="#">How to Apply</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Fee Structure</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Scholarships</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Book a Tour</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold mb-4 text-sm" style={{fontFamily: '\'Poppins\', sans-serif'}}>Contact</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>123 Education Blvd, Knowledge City, 10001</span>
</li>
<li className="flex gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex gap-2">
<iconify-icon className="shrink-0 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<span>admissions@lovedale.edu</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2024 Lovedale International School. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
