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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // --- Initial Hero Load Animation ---
            const heroTl = gsap.timeline();
            
            // Text clip reveal
            heroTl.to(".hero-title-line", {
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.2
            });

            // Fade up elements
            heroTl.to(".hero-elem", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.8");

            // Background subtle scale
            gsap.to(".hero-bg", {
                scale: 1,
                duration: 3,
                ease: "power2.out"
            });

            // --- Hero Scroll Parallax (Compress effect) ---
            gsap.to("#hero", {
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: "20%",
                opacity: 0,
                ease: "none"
            });

            // --- Navbar Blur/Shrink on Scroll ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.style.borderBottom = "1px solid rgba(17,17,17,0.05)";
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.style.borderBottom = "none";
                }
            });

            // --- Fade Up Elements on Scroll ---
            gsap.utils.toArray('.fade-up').forEach(element => {
                gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            // --- Horizontal Scroll Section ---
            let horizontalTrack = document.querySelector('.horizontal-track');
            if (horizontalTrack) {
                let sections = gsap.utils.toArray(horizontalTrack.children);
                
                // Calculate total movement needed based on container width minus viewport width
                function getScrollAmount() {
                    let trackWidth = horizontalTrack.scrollWidth;
                    return -(trackWidth - window.innerWidth);
                }

                const tween = gsap.to(sections, {
                    x: getScrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#academics-scroll",
                        start: "top top",
                        end: () => `+=${getScrollAmount() * -1}`, // Pin duration based on scroll length
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        // Anticipate pin to prevent layout jumps
                        anticipatePin: 1
                    }
                });
            }

            // --- Parallax Gallery ---
            gsap.to(".parallax-down", {
                scrollTrigger: {
                    trigger: "#gallery",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: 100,
                ease: "none"
            });

            gsap.to(".parallax-up", {
                scrollTrigger: {
                    trigger: "#gallery",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -100,
                ease: "none"
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading font-semibold text-xl tracking-tight flex items-center gap-2 text-[#111111]" href="#">
<div className="w-6 h-6 rounded-full bg-[#F26A21]"></div>
                LOVEDALE
            </a>
<div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#111111]/70">
<a className="hover:text-[#111111] transition-colors" href="#about">About</a>
<a className="hover:text-[#111111] transition-colors" href="#academics">Academics</a>
<a className="hover:text-[#111111] transition-colors" href="#admissions">Admissions</a>
<a className="hover:text-[#111111] transition-colors" href="#campus">Campus</a>
</div>
<button className="bg-[#111111] text-[#FAFAFA] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#F26A21] transition-colors flex items-center gap-2">
                Apply Now
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#111111] text-[#FAFAFA]" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Students" className="w-full h-full object-cover opacity-50 hero-bg scale-110 object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#111111]/30 via-transparent to-[#111111]"></div>
</div>

<div className="absolute top-[20%] left-[15%] w-[30vw] h-[30vw] max-w-md max-h-md bg-[#F26A21] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] max-w-lg max-h-lg bg-[#F4B400] rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mt-20">
<div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-8 opacity-0 hero-elem translate-y-4">
<span className="w-2 h-2 rounded-full bg-[#F4B400] animate-ping"></span>
<span className="text-xs font-medium tracking-wide uppercase">Admissions Open 2024-25</span>
</div>
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter leading-[1.1] clip-text mb-6">
<div className="overflow-hidden"><span className="block translate-y-[120%] hero-title-line">Shaping Bright</span></div>
<div className="overflow-hidden"><span className="block translate-y-[120%] hero-title-line text-[#F26A21]">Futures.</span></div>
</h1>
<p className="font-body text-lg md:text-xl text-[#FAFAFA]/70 max-w-2xl mx-auto opacity-0 hero-elem translate-y-4 font-light">
                Where young minds grow into tomorrow's leaders through innovative learning, empathy, and global perspective.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 hero-elem translate-y-4">
<button className="w-full sm:w-auto bg-[#FAFAFA] text-[#111111] px-8 py-4 rounded-full font-medium hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                    Explore Campus
                    <iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-[#FAFAFA]/20 px-8 py-4 rounded-full font-medium hover:bg-[#FAFAFA]/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
                    Watch Story
                    <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hero-elem">
<span className="text-xs uppercase tracking-widest text-[#FAFAFA]/50">Scroll to explore</span>
<div className="w-px h-12 bg-gradient-to-b from-[#FAFAFA]/50 to-transparent"></div>
</div>
</section>

<div className="relative z-20 bg-[#FAFAFA] rounded-t-[2.5rem] lg:rounded-t-[4rem] -mt-8 pt-8 shadow-[0_-20px_50px_rgba(17,17,17,0.5)]">

<div className="w-full overflow-hidden border-b border-[#111111]/5 py-4 bg-white flex items-center">
<div className="flex whitespace-nowrap animate-ticker w-max">
<div className="flex items-center gap-8 px-4 text-sm font-medium text-[#111111]/60 uppercase tracking-widest">
<span>★ Upcoming Event: Annual Science Fair (Oct 15)</span>
<span>★ Admissions Open for Early Years Program</span>
<span>★ New Campus Facility Inauguration</span>
<span>★ Board Results 2023: 100% Pass Rate</span>

<span>★ Upcoming Event: Annual Science Fair (Oct 15)</span>
<span>★ Admissions Open for Early Years Program</span>
<span>★ New Campus Facility Inauguration</span>
<span>★ Board Results 2023: 100% Pass Rate</span>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-[#111111] fade-up">
                        A legacy of excellence, <br/>
<span className="text-[#111111]/40">built for the future.</span>
</h2>
<p className="text-lg text-[#111111]/60 font-light leading-relaxed mb-8 fade-up">
                        At Lovedale, we don't just teach curriculum; we shape character. Founded on the principle of holistic development, our campus is a sanctuary where curiosity is nurtured and potential is realized.
                    </p>
<a className="inline-flex items-center gap-2 font-medium text-[#F26A21] hover:gap-4 transition-all fade-up" href="#">
                        Read our story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-8 rounded-3xl border border-[#111111]/5 shadow-sm fade-up flex flex-col justify-between aspect-square">
<iconify-icon className="text-[#F26A21]" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<div>
<div className="font-heading text-4xl font-semibold tracking-tight text-[#111111]">2,500+</div>
<div className="text-sm text-[#111111]/50 font-medium mt-1">Students Enrolled</div>
</div>
</div>
<div className="bg-[#111111] text-[#FAFAFA] p-8 rounded-3xl border border-white/5 shadow-sm fade-up flex flex-col justify-between aspect-square mt-8">
<iconify-icon className="text-[#F4B400]" icon="solar:diploma-linear" width="32"></iconify-icon>
<div>
<div className="font-heading text-4xl font-semibold tracking-tight">100%</div>
<div className="text-sm text-[#FAFAFA]/50 font-medium mt-1">Board Result</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-[#111111]/5 shadow-sm fade-up flex flex-col justify-between aspect-square -mt-8">
<iconify-icon className="text-[#2E7D32]" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<div>
<div className="font-heading text-4xl font-semibold tracking-tight text-[#111111]">15 Acres</div>
<div className="text-sm text-[#111111]/50 font-medium mt-1">Lush Green Campus</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-[#111111]/5 shadow-sm fade-up flex flex-col justify-between aspect-square">
<iconify-icon className="text-[#E53935]" icon="solar:library-linear" width="32"></iconify-icon>
<div>
<div className="font-heading text-4xl font-semibold tracking-tight text-[#111111]">25+</div>
<div className="text-sm text-[#111111]/50 font-medium mt-1">Years of Legacy</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] text-[#FAFAFA] overflow-hidden" id="academics-scroll">
<div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight">Academic Journey</h2>
<p className="text-[#FAFAFA]/50 mt-4 max-w-md">A progressive curriculum tailored for every stage of development.</p>
</div>

<div className="flex w-[300vw] lg:w-[200vw] h-[60vh] min-h-[500px] horizontal-track border-t border-white/10">

<div className="w-screen lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-16 border-r border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#F26A21]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-full max-w-md">
<div className="text-[#F26A21] text-xs font-semibold tracking-widest uppercase mb-4">Ages 3-5</div>
<h3 className="font-heading text-4xl font-semibold tracking-tight mb-4">Early Years</h3>
<p className="text-[#FAFAFA]/60 font-light mb-8">Play-based learning focusing on motor skills, social interaction, and foundational cognitive development.</p>
<ul className="space-y-3 text-sm text-[#FAFAFA]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F26A21]" icon="solar:check-circle-linear"></iconify-icon> Montessori Methods</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F26A21]" icon="solar:check-circle-linear"></iconify-icon> Sensorial Activities</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F26A21]" icon="solar:check-circle-linear"></iconify-icon> Phonics &amp; Numeracy</li>
</ul>
</div>
<div className="absolute bottom-10 right-10 text-[10rem] font-heading font-semibold text-white/[0.02] leading-none pointer-events-none">01</div>
</div>

<div className="w-screen lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-16 border-r border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#F4B400]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-full max-w-md">
<div className="text-[#F4B400] text-xs font-semibold tracking-widest uppercase mb-4">Grades 1-5</div>
<h3 className="font-heading text-4xl font-semibold tracking-tight mb-4">Primary School</h3>
<p className="text-[#FAFAFA]/60 font-light mb-8">Building a strong academic core while encouraging curiosity, critical thinking, and artistic expression.</p>
<ul className="space-y-3 text-sm text-[#FAFAFA]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F4B400]" icon="solar:check-circle-linear"></iconify-icon> Inquiry-based Learning</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F4B400]" icon="solar:check-circle-linear"></iconify-icon> STEM Integration</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F4B400]" icon="solar:check-circle-linear"></iconify-icon> Language Arts</li>
</ul>
</div>
<div className="absolute bottom-10 right-10 text-[10rem] font-heading font-semibold text-white/[0.02] leading-none pointer-events-none">02</div>
</div>

<div className="w-screen lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-16 border-r border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-full max-w-md">
<div className="text-[#2E7D32] text-xs font-semibold tracking-widest uppercase mb-4">Grades 6-10</div>
<h3 className="font-heading text-4xl font-semibold tracking-tight mb-4">Middle &amp; High School</h3>
<p className="text-[#FAFAFA]/60 font-light mb-8">Rigorous academic preparation, leadership opportunities, and specialized board exam readiness.</p>
<ul className="space-y-3 text-sm text-[#FAFAFA]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#2E7D32]" icon="solar:check-circle-linear"></iconify-icon> Advanced Laboratories</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#2E7D32]" icon="solar:check-circle-linear"></iconify-icon> Career Counseling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#2E7D32]" icon="solar:check-circle-linear"></iconify-icon> Global Perspectives</li>
</ul>
</div>
<div className="absolute bottom-10 right-10 text-[10rem] font-heading font-semibold text-white/[0.02] leading-none pointer-events-none">03</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="notices">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 fade-up">
<div className="flex items-center justify-between mb-8">
<h2 className="font-heading text-3xl font-semibold tracking-tight text-[#111111]">Notice Board</h2>
<a className="text-sm font-medium text-[#F26A21] hover:underline" href="#">View All</a>
</div>
<div className="flex flex-col gap-4">

<a className="group block bg-white p-5 rounded-2xl border border-[#111111]/5 hover:border-[#111111]/20 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]" href="#">
<div className="flex items-start gap-4">
<div className="bg-[#FAFAFA] text-[#111111]/50 px-3 py-2 rounded-lg text-center min-w-[60px]">
<div className="text-xs font-semibold uppercase">Oct</div>
<div className="font-heading text-xl font-semibold leading-none mt-1">12</div>
</div>
<div>
<h4 className="font-medium text-[#111111] group-hover:text-[#F26A21] transition-colors line-clamp-2">Revised Timetable for Mid-Term Examinations 2024</h4>
<div className="flex items-center gap-2 mt-2 text-xs text-[#111111]/50 font-medium">
<iconify-icon icon="solar:document-linear"></iconify-icon> Circular
                                        </div>
</div>
</div>
</a>

<a className="group block bg-white p-5 rounded-2xl border border-[#111111]/5 hover:border-[#111111]/20 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]" href="#">
<div className="flex items-start gap-4">
<div className="bg-[#FAFAFA] text-[#111111]/50 px-3 py-2 rounded-lg text-center min-w-[60px]">
<div className="text-xs font-semibold uppercase">Oct</div>
<div className="font-heading text-xl font-semibold leading-none mt-1">08</div>
</div>
<div>
<h4 className="font-medium text-[#111111] group-hover:text-[#F26A21] transition-colors line-clamp-2">Parent-Teacher Meeting Schedule for High School</h4>
<div className="flex items-center gap-2 mt-2 text-xs text-[#111111]/50 font-medium">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Academic
                                        </div>
</div>
</div>
</a>

<a className="group block bg-white p-5 rounded-2xl border border-[#111111]/5 hover:border-[#111111]/20 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]" href="#">
<div className="flex items-start gap-4">
<div className="bg-[#FAFAFA] text-[#111111]/50 px-3 py-2 rounded-lg text-center min-w-[60px]">
<div className="text-xs font-semibold uppercase">Sep</div>
<div className="font-heading text-xl font-semibold leading-none mt-1">25</div>
</div>
<div>
<h4 className="font-medium text-[#111111] group-hover:text-[#F26A21] transition-colors line-clamp-2">Transport Route Updates for Winter Schedule</h4>
<div className="flex items-center gap-2 mt-2 text-xs text-[#111111]/50 font-medium">
<iconify-icon icon="solar:bus-linear"></iconify-icon> Transport
                                        </div>
</div>
</div>
</a>
</div>
</div>

<div className="lg:col-span-7 fade-up">
<div className="relative h-full bg-[#111111] rounded-[2rem] overflow-hidden flex flex-col justify-end p-10 min-h-[400px] group">

<img alt="Campus Life" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent"></div>
<div className="relative z-10 text-[#FAFAFA]">
<div className="inline-flex items-center gap-2 bg-[#F26A21] text-white px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-4">
                                    Admissions 24-25
                                </div>
<h3 className="font-heading text-4xl font-semibold tracking-tight mb-4">Begin Your Journey <br/>With Lovedale.</h3>
<p className="text-[#FAFAFA]/70 max-w-md font-light mb-8">We are now accepting applications for the upcoming academic year. Limited seats available.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#FAFAFA] text-[#111111] px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors">Apply Online</button>
<button className="glass-dark text-[#FAFAFA] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">Fee Structure</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mb-4">Campus Life</h2>
<p className="text-[#111111]/60">A glimpse into the vibrant ecosystem at Lovedale.</p>
</div>

<div className="flex gap-4 px-4 h-[600px] justify-center overflow-hidden rotate-[-2deg] scale-110">

<div className="flex flex-col gap-4 w-1/3 md:w-1/4 parallax-down">
<img alt="Student" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Library" className="rounded-2xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Art" className="rounded-2xl w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="flex flex-col gap-4 w-1/3 md:w-1/4 parallax-up -translate-y-24">
<img alt="Classroom" className="rounded-2xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Tech" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Sports" className="rounded-2xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>

<div className="hidden md:flex flex-col gap-4 w-1/4 parallax-down">
<img alt="Group" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Campus" className="rounded-2xl w-full h-80 object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Student" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</section>

<footer className="bg-[#111111] text-[#FAFAFA] pt-24 pb-8 rounded-t-[3rem] -mt-10 relative z-30">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-24 fade-up">
<h2 className="font-heading text-[12vw] md:text-[8vw] font-semibold tracking-tighter leading-none text-[#FAFAFA]/10 hover:text-[#FAFAFA] transition-colors duration-500 cursor-default">
                        CONNECT
                    </h2>
<div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
<a className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-8 py-4 rounded-full font-medium hover:bg-[#F26A21] hover:text-white transition-all group" href="mailto:admissions@lovedale.edu">
                            admissions@lovedale.edu
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors" href="tel:+1234567890">
                            +1 (234) 567-890
                        </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
<div>
<div className="font-heading font-semibold text-lg tracking-tight flex items-center gap-2 mb-6">
<div className="w-4 h-4 rounded-full bg-[#F26A21]"></div>
                            LOVEDALE
                        </div>
<p className="text-sm text-[#FAFAFA]/50 font-light leading-relaxed">Empowering minds, shaping futures. A premier international institution committed to excellence.</p>
</div>
<div>
<h4 className="font-medium mb-6 text-[#FAFAFA]/50 text-xs uppercase tracking-widest">Quick Links</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#F26A21] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Admissions Process</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Academic Calendar</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-[#FAFAFA]/50 text-xs uppercase tracking-widest">Resources</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Student Portal</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Parent Portal</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Download Syllabus</a></li>
<li><a className="hover:text-[#F26A21] transition-colors" href="#">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-[#FAFAFA]/50 text-xs uppercase tracking-widest">Address</h4>
<p className="text-sm text-[#FAFAFA]/70 font-light leading-relaxed mb-4">
                            123 Education Boulevard,<br/>
                            Knowledge City, KC 10020
                        </p>
<a className="text-sm text-[#F26A21] hover:underline flex items-center gap-1" href="#">
                            View on Map <iconify-icon icon="solar:map-point-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAFAFA]/40 font-light">
<p>© 2024 Lovedale International School. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#2E7D32] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</a>



    </>
  );
}
