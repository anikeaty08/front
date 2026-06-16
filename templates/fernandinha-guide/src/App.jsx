import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Smooth Scroll & Reveal Animation via Intersection Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
            });

            // Sticky Navbar Style Change on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.remove('shadow-sm');
                }
            });

            // Simple Parallax Effect
            const parallaxImages = document.querySelectorAll('.parallax-bg');
            window.addEventListener('scroll', () => {
                let scrollY = window.scrollY;
                parallaxImages.forEach(img => {
                    let speed = img.getAttribute('data-speed') || 0.3;
                    img.style.transform = `translateY(${scrollY * speed}px) scale(1.05)`;
                });
            });

            // FAQ Accordion Logic
            const faqToggles = document.querySelectorAll('.faq-toggle');
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    const icon = toggle.querySelector('.icon');
                    
                    // Close others (optional, comment out to allow multiple open)
                    document.querySelectorAll('.accordion-content').forEach(c => {
                        if (c !== content && c.classList.contains('open')) {
                            c.classList.remove('open');
                            c.previousElementSibling.querySelector('.icon').style.transform = 'rotate(0deg)';
                        }
                    });

                    content.classList.toggle('open');
                    if (content.classList.contains('open')) {
                        icon.style.transform = 'rotate(45deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });

            // Interactive Before/After Slider Logic
            const container = document.getElementById('ba-container');
            const beforeImg = document.getElementById('ba-before');
            const handleLine = document.getElementById('ba-handle-line');
            let isDragging = false;

            const updateSlider = (clientX) => {
                const rect = container.getBoundingClientRect();
                // Calculate percentage relative to container width
                let percentage = ((clientX - rect.left) / rect.width) * 100;
                
                // Constrain between 0 and 100
                percentage = Math.max(0, Math.min(percentage, 100));
                
                // Update visuals
                handleLine.style.left = `${percentage}%`;
                beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            };

            // Mouse Events
            container.addEventListener('mousedown', (e) => {
                isDragging = true;
                updateSlider(e.clientX);
            });
            window.addEventListener('mouseup', () => {
                isDragging = false;
            });
            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                updateSlider(e.clientX);
            });

            // Touch Events
            container.addEventListener('touchstart', (e) => {
                isDragging = true;
                updateSlider(e.touches[0].clientX);
            });
            window.addEventListener('touchend', () => {
                isDragging = false;
            });
            window.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                // Prevent scrolling while dragging slider
                e.preventDefault(); 
                updateSlider(e.touches[0].clientX);
            }, { passive: false });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/20" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="font-serif text-2xl tracking-tight text-gray-900" href="#">Fernandinha</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg font-light text-gray-600 hover:text-black transition-colors" href="#transformation">Story</a>
<a className="text-lg font-light text-gray-600 hover:text-black transition-colors" href="#system">System</a>
<a className="text-lg font-light text-gray-600 hover:text-black transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-6">
<a className="text-gray-600 hover:text-black transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hidden md:inline-flex px-6 py-2.5 bg-[#1a1a1a] text-white text-lg font-light rounded-full hover:bg-[#333] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" href="#offer">
                    Get the Guide
                </a>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#e8e3d9]">

<div className="absolute inset-0 w-full h-full">
<img alt="Fernandinha fitness" className="object-top page-load-blur parallax-bg opacity-90 w-full h-full object-cover" data-speed="0.5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/846ddac7-f416-4115-a7f4-0841af56678a_3840w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
<span className="block text-white/90 font-light tracking-[0.2em] uppercase text-sm mb-6 reveal delay-100">The Transformation</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-8 reveal delay-200">
                15kg Down in <br className="hidden md:block"/>2 Months
            </h1>
<p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto reveal delay-300">
                The exact system I used to transform my body, build sustainable habits, and regain my confidence.
            </p>
<div className="reveal delay-400">
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-lg font-normal rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 group" href="#offer">
                    Get the Full Guide
                    <i className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>

<section className="py-32 px-6 max-w-7xl mx-auto" id="transformation">
<div className="text-center mb-20 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-6">From Struggling to Strong</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                I was overweight. Low confidence. No energy. Two months later, everything changed.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden ba-slider-container group w-full rounded-[2rem] relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]" id="ba-container">

<img alt="After Transformation" className="select-none pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ee796ca-9950-4900-8ebf-0d3c4934d3d5_1600w.jpg"/>

<img alt="Before Transformation" className="select-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="ba-before" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0b3a7da-8206-4bd1-b00b-9898cd238997_1600w.jpg" style={{clipPath: 'inset(0px 40.9247% 0px 0px)'}}/>

<div className="absolute inset-y-0 left-[50%] w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 pointer-events-none" id="ba-handle-line" style={{left: '59.0753%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-gray-900" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-light z-10 pointer-events-none">Before</div>
<div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md text-black px-4 py-1.5 rounded-full text-sm font-light z-10 pointer-events-none">After</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal delay-100 border border-gray-100 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-[#f5f2eb] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#c5bba4]" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-2">15kg</h3>
<p className="text-lg text-gray-500 font-light">Total weight lost</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal delay-200 border border-gray-100 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-[#f5f2eb] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#c5bba4]" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl tracking-tight mb-2">60 Days</h3>
<p className="text-lg text-gray-500 font-light">Transformation time</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal delay-300 border border-gray-100 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-[#f5f2eb] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#c5bba4]" data-lucide="ban" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-2">No Extremes</h3>
<p className="text-lg text-gray-500 font-light">Enjoyable nutrition</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal delay-400 border border-gray-100 hover:-translate-y-1 transition-transform duration-500">
<div className="w-12 h-12 bg-[#f5f2eb] rounded-full flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#c5bba4]" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-2">Sustainable</h3>
<p className="text-lg text-gray-500 font-light">Real daily routine</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 reveal">
<span className="text-[#c5bba4] text-sm tracking-[0.15em] uppercase mb-4 block">Behind the Journey</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-8 leading-tight">How I Lost 15kg in <br/>Just 60 Days</h2>
<div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
<p className="">
                        For years, I cycled through restrictive diets and exhausting workout plans that I could never stick to. I was frustrated, constantly tired, and felt disconnected from my own body.
                    </p>
<p>
                        The mistake was thinking I needed to suffer to see results. I realized that to change my body permanently, I needed a system built on consistency, not restriction.
                    </p>
<p>
                        I spent months refining a simple, elegant approach to nutrition and movement. No starved nights. No endless cardio. Just a structured, step-by-step framework that actually works. Now, I'm sharing the exact blueprint so you can do the same.
                    </p>
</div>
</div>
<div className="order-1 lg:order-2 relative reveal">
<div className="aspect-[3/4] overflow-hidden rounded-[2rem] relative">
<img alt="Fernandinha Lifestyle" className="parallax-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/418d6d6b-c06b-4661-92cc-8a27ed47beef_1600w.jpg"/>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f5f2eb] rounded-full -z-10 blur-3xl opacity-60"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAF8]" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-6">The Exact System I Used</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    Everything you need to transform, packaged into one beautiful, easy-to-follow guide.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal delay-100 group">
<div className="w-14 h-14 bg-[#fcfbfa] border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f5f2eb] transition-colors">
<i className="w-6 h-6 text-gray-900" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Fat Loss Nutrition</h3>
<p className="text-lg text-gray-500 font-light">A simple, non-restrictive approach to eating that fuels your body and burns fat without counting every calorie.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal delay-200 group">
<div className="w-14 h-14 bg-[#fcfbfa] border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f5f2eb] transition-colors">
<i className="w-6 h-6 text-gray-900" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Weekly Routine</h3>
<p className="text-lg text-gray-500 font-light">Efficient, structured workouts designed to sculpt and strengthen, adaptable for home or gym environments.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal delay-300 group">
<div className="w-14 h-14 bg-[#fcfbfa] border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f5f2eb] transition-colors">
<i className="w-6 h-6 text-gray-900" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Daily Habits</h3>
<p className="text-lg text-gray-500 font-light">A printable checklist to keep you accountable and build the micro-habits that guarantee long-term success.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal delay-100 group">
<div className="w-14 h-14 bg-[#fcfbfa] border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f5f2eb] transition-colors">
<i className="w-6 h-6 text-gray-900" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Mindset System</h3>
<p className="text-lg text-gray-500 font-light">Strategies to overcome emotional eating, stay motivated on hard days, and completely shift your identity.</p>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 reveal delay-200 group lg:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="w-14 h-14 bg-[#fcfbfa] border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#f5f2eb] transition-colors">
<i className="w-6 h-6 text-gray-900" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-serif text-2xl tracking-tight mb-3">Progress Tracking Method</h3>
<p className="text-lg text-gray-500 font-light">Learn how to measure progress beyond just the scale. Track measurements, energy levels, and strength gains effectively.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-6">Real Transformation</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    The framework works if you do.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="relative rounded-[2rem] overflow-hidden group reveal delay-100 aspect-[4/3] md:aspect-auto">
<img alt="Result" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6715da63-7ce3-400b-a1ef-85057a5e07ad_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-2xl text-white tracking-tight font-serif mb-2">"I showed up everyday even when i felt weak."</p>
<p className="text-lg font-light text-white/80">- Fernandinha Jr</p>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden group reveal delay-200 aspect-[4/3] md:aspect-auto">
<img alt="Result" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79046022-f5f0-49ad-9958-ba281d1a0091_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<p className="text-2xl text-white tracking-tight font-serif mb-2">"I respected my body enough to change my habits."</p>
<p className="text-lg font-light text-white/80">- Fernandinha Jr</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAF8] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="relative reveal order-2 lg:order-1">

<div className="relative w-full aspect-[3/4] max-w-md mx-auto">
<div className="absolute inset-0 bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center p-10 z-10">
<h4 className="font-serif text-3xl text-center tracking-tight mb-2">The Transformation<br/>Guide</h4>
<p className="text-sm font-light text-gray-400 uppercase tracking-widest mb-10">By Fernandinha</p>
<div className="w-full space-y-4">
<div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
<div className="h-2 bg-gray-100 rounded-full w-full"></div>
<div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
</div>
</div>

<div className="absolute inset-0 bg-[#e8e3d9] rounded-[2rem] translate-x-6 translate-y-6 -z-10 rotate-3 transition-transform duration-700 hover:rotate-6"></div>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-8">Everything I used to drop 15kg, step by step.</h2>
<p className="text-xl text-gray-600 font-light mb-10">
                    A beautifully designed digital program you can access instantly on your phone or laptop. No fluff, just the actionable framework.
                </p>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-xl text-gray-700 font-light">
<div className="w-8 h-8 rounded-full bg-[#f5f2eb] flex items-center justify-center text-[#c5bba4]">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                        Simple routines
                    </li>
<li className="flex items-center gap-4 text-xl text-gray-700 font-light">
<div className="w-8 h-8 rounded-full bg-[#f5f2eb] flex items-center justify-center text-[#c5bba4]">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                        Food strategy
                    </li>
<li className="flex items-center gap-4 text-xl text-gray-700 font-light">
<div className="w-8 h-8 rounded-full bg-[#f5f2eb] flex items-center justify-center text-[#c5bba4]">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                        Mindset system
                    </li>
<li className="flex items-center gap-4 text-xl text-gray-700 font-light">
<div className="w-8 h-8 rounded-full bg-[#f5f2eb] flex items-center justify-center text-[#c5bba4]">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                        Weekly structure
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="offer">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f5f2eb] blur-[120px] rounded-full opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-gray-900 mb-6">Start Your Transformation Today</h2>
<p className="text-xl text-gray-600 font-light">Instant access to the complete digital guide.</p>
</div>
<div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 reveal delay-200 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f5f2eb] to-transparent opacity-50"></div>
<div className="text-center border-b border-gray-100 pb-10 mb-10">
<h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">Fernandinha Transformation Guide</h3>
<div className="flex items-baseline justify-center gap-2">
<span className="text-5xl tracking-tight font-serif">$11.99</span>
<span className="line-through text-lg font-light text-gray-400">$49.99</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<ul className="space-y-5">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5bba4] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-gray-600 font-light">Full Digital Program</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5bba4] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-gray-600 font-light">Nutrition Plan &amp; Rules</span>
</li>
</ul>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5bba4] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-gray-600 font-light">Workout Structure</span>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-[#c5bba4] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-gray-600 font-light">Habit Framework Checklist</span>
</li>
</ul>
</div>
<button className="w-full py-5 bg-[#1a1a1a] text-white text-xl font-light rounded-2xl hover:bg-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,187,164,0.4)] flex items-center justify-center gap-3 group">
<i className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" data-lucide="lock" strokeWidth="1.5"></i>
                    Get Instant Access
                </button>
<div className="text-center mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm font-light">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Secure, encrypted checkout
                </div>
</div>
</div>
</section>

<section className="bg-[#FAFAF8] pt-32 pb-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-center text-gray-900 mb-16 reveal">Frequently Asked Questions</h2>
<div className="space-y-4 reveal delay-100">

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
<button className="w-full px-8 py-6 text-left flex justify-between items-center faq-toggle group">
<span className="font-serif text-xl tracking-tight text-gray-900 group-hover:text-[#c5bba4] transition-colors">Is this beginner friendly?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-8 pb-6 text-lg text-gray-600 font-light">
                            Absolutely. The guide is designed to meet you where you are. The routines and nutrition principles are simple to understand and implement, regardless of your past experience.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
<button className="w-full px-8 py-6 text-left flex justify-between items-center faq-toggle group">
<span className="font-serif text-xl tracking-tight text-gray-900 group-hover:text-[#c5bba4] transition-colors">Do I need a gym?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-8 pb-6 text-lg text-gray-600 font-light">
                            No. While gym options are provided, the core framework includes highly effective home routines that require minimal to no equipment.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
<button className="flex faq-toggle group text-left w-full pt-6 pr-8 pb-6 pl-8 items-center justify-between">
<span className="group-hover:text-[#c5bba4] transition-colors text-xl text-gray-900 tracking-tight font-serif">How fast will I see results?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-8 pb-6 text-lg text-gray-600 font-light">
                            Many start feeling more energetic and lighter within the first week. Visible physical changes typically become prominent between weeks 2 and 4 when staying consistent with the system.
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
<button className="w-full px-8 py-6 text-left flex justify-between items-center faq-toggle group">
<span className="font-serif text-xl tracking-tight text-gray-900 group-hover:text-[#c5bba4] transition-colors">Is the guide downloadable?</span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="accordion-content">
<div className="accordion-inner px-8 pb-6 text-lg text-gray-600 font-light">
                            Yes, immediately after purchase you will receive a secure link to download the high-quality PDF guide, which you can save on all your devices.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 bg-black overflow-hidden flex items-center justify-center text-center">

<div className="absolute inset-0 w-full h-full">
<img alt="Final CTA background" className="w-full h-full object-cover opacity-40 parallax-bg scale-105" data-speed="0.2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 reveal">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight text-white mb-10 leading-tight">
                You are one decision away from your transformation.
            </h2>
<a className="inline-flex items-center justify-center px-12 py-5 bg-white text-black text-xl font-normal rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500" href="#offer">
                Start Now
            </a>
</div>
</section>

<footer className="bg-black text-white/50 py-10 border-t border-white/10 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
<p className="font-serif text-2xl text-white tracking-tight mb-6">Fernandinha</p>
<div className="flex gap-6 mb-8">
<a className="hover:text-white transition-colors text-sm font-light" href="#">Instagram</a>
<a className="hover:text-white transition-colors text-sm font-light" href="#">Contact</a>
<a className="hover:text-white transition-colors text-sm font-light" href="#">Terms</a>
</div>
<p className="text-xs font-light tracking-wide">© 2024 Fernandinha Junior. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
