import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-y-8', 'scale-95');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-target').forEach(el => {
                observer.observe(el);
            });

            // Navbar Blur on Scroll
            const navbar = document.getElementById('navbar');
            const navBg = navbar.querySelector('div');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navBg.classList.add('opacity-100');
                    navBg.classList.remove('opacity-0');
                    navbar.classList.add('py-0');
                } else {
                    navBg.classList.remove('opacity-100');
                    navBg.classList.add('opacity-0');
                    navbar.classList.remove('py-0');
                }
            });

            // Trigger initial scroll check
            window.dispatchEvent(new Event('scroll'));

            // Subtle Parallax effect on hero background
            const parallaxBg = document.getElementById('parallax-bg');
            if(parallaxBg) {
                window.addEventListener('mousemove', (e) => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 20;
                    const y = (e.clientY / window.innerHeight - 0.5) * 20;
                    parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
                });
            }

            // Reviews Carousel Controls
            const carousel = document.getElementById('reviews-carousel');
            const prevBtn = document.getElementById('prev-review');
            const nextBtn = document.getElementById('next-review');

            if (carousel && prevBtn && nextBtn) {
                // Approximate width of card + gap
                const scrollAmount = 444; 
                
                prevBtn.addEventListener('click', () => {
                    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
                
                nextBtn.addEventListener('click', () => {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-50 bg-noise"></div>

<nav className="fixed top-0 inset-x-0 z-40 transition-all duration-500" id="navbar">
<div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xl border-b border-white/5 transition-opacity duration-500"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-display font-medium tracking-tighter text-white uppercase flex items-center gap-2 group" href="#">
                TIPI
                <span className="text-xs font-body font-light text-neutral-500 tracking-normal normal-case group-hover:text-neutral-300 transition-colors">Plumbing Inc.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#reviews">Reviews</a>
</div>
<a className="group relative px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300 overflow-hidden" href="tel:6139831386">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative z-10 text-sm text-white font-medium flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    (613) 983-1386
                </span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 -z-10" id="parallax-bg">
<div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen" style={{animation: 'pulse-slow 8s infinite alternate'}}></div>
<div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-cyan-900/10 blur-[150px] mix-blend-screen" style={{animation: 'pulse-slow 12s infinite alternate-reverse'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
</div>
<div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center z-10">
<div className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 opacity-100 translate-y-0 scale-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">Open 24 Hours in Ottawa, ON</span>
</div>
<h1 className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white mb-6 leading-[1.1] opacity-100 translate-y-0 scale-100">
                Mastery in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">Every Detail.</span>
</h1>
<p className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 max-w-2xl text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed opacity-100 translate-y-0 scale-100">
                Tipi Plumbing Inc. brings uncompromising quality and precision to residential and commercial plumbing. From emergency repairs to complex underground rough-ins, our expert team delivers.
            </p>
<div className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 flex flex-col sm:flex-row items-center gap-4 opacity-100 translate-y-0 scale-100">
<a className="group relative px-8 py-4 rounded-full bg-white text-neutral-950 font-medium text-sm overflow-hidden transition-transform hover:scale-[1.02] duration-300" href="tel:6139831386">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                        Request Service
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 rounded-full bg-transparent text-white font-medium text-sm hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 flex items-center gap-2" href="#reviews">
<div className="flex items-center gap-0.5 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="14"></iconify-icon>
</div>
<span>4.5/5 (13 Reviews)</span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs tracking-widest uppercase text-neutral-500">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<section className="relative py-32 px-6 lg:px-12 bg-neutral-950/50 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] mb-20 md:w-2/3">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">Engineered solutions for complex plumbing needs.</h2>
<p className="text-lg text-neutral-400">Roch and his specialized crew handle everything from immediate emergency mitigations to full-scale infrastructure replacement with surgical precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[100ms] group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-cyan-400" icon="solar:droplet-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Emergency Repairs</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Available 24 hours a day for rapid response to critical leaks and system failures, minimizing damage and restoring functionality.</p>
</div>
</div>

<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-neutral-300" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Underground &amp; Main Drains</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Extensive experience in complex underground jobs, including replacing old cast iron main drains, stacks, and venting systems.</p>
</div>
</div>

<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[300ms] group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-neutral-300" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Complete Rough-ins</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Flawless execution of new supply lines and rough-ins for renovations and new constructions, ensuring code compliance and longevity.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 lg:px-12 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-2xl rounded-full"></div>
<div className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-900 to-black group-hover:scale-105 transition-transform duration-1000 ease-out"></div>
<div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000 ease-out group-hover:scale-105 opacity-50">
<iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=1292%20Dussere%20St,%20Ottawa,%20ON&amp;t=m&amp;z=14&amp;output=embed" style={{border: '0', filter: 'invert(100%) hue-rotate(180deg) contrast(85%) brightness(90%)'}} width="100%"></iframe>
</div>
<div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Based in Ottawa</p>
<p className="text-xs text-neutral-400">1292 Dussere St, Gloucester, ON</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-8">
                    Built on trust. <br/>
                    Defined by quality.
                </h2>
<div className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 space-y-6 text-base text-neutral-400 leading-relaxed">
<p>
                        Led by Roch, our team is known throughout Ottawa as the most trustworthy in the business. We don't just fix pipes; we engineer peace of mind. Every project, from a simple bathroom fix to a comprehensive basement infrastructure overhaul, receives the same level of meticulous attention.
                    </p>
<p>
                        Communication is at our core. We diagnose issues thoroughly, explain the necessary steps clearly, and execute with high-quality craftsmanship. Fair pricing and punctuality are not just promises—they are the standard we operate by every single day.
                    </p>
</div>
<div className="reveal-target transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-white/10">
<div>
<p className="text-3xl font-display text-white mb-1">24/7</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Availability</p>
</div>
<div>
<p className="text-3xl font-display text-white mb-1">100%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Commitment</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 lg:px-12 bg-neutral-950/50 border-t border-white/5 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-2/3">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">Client experiences.</h2>
<p className="text-lg text-neutral-400">Don't just take our word for it. Hear from the Ottawa homeowners who trust us with their properties.</p>
</div>
<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 flex items-center gap-6 shrink-0">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
<div className="text-4xl font-display font-medium text-white">4.5</div>
<div>
<div className="flex items-center gap-0.5 text-yellow-500 mb-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-neutral-400">Based on 13 verified reviews</p>
</div>
</div>

<div className="hidden md:flex items-center gap-2">
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group" id="prev-review">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group" id="next-review">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="reveal-target opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 -mx-6 px-6 lg:-mx-12 lg:px-12 flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory" id="reviews-carousel">

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "We hired Roch and his crew for a pretty big underground job replacing the old cast iron main drain/stack/rough-ins in our basement as well as many of the vents and supply lines throughout the house. He was able to complete the work in a timely manner..."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center text-sm font-medium text-white">MF</div>
<div>
<p className="text-sm font-medium text-white">Michael Fedak</p>
<p className="text-xs text-neutral-500">Local Guide · 2 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 mb-6">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "I called him in to give me a quote for the job. He came to look at the site and told me that replacing the leaking pipe would cost $350. I felt that price was too high, so I declined and told him I needed some time to think about it. Then..."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-sm font-medium text-white">PS</div>
<div>
<p className="text-sm font-medium text-white">Phil S.</p>
<p className="text-xs text-neutral-500">Local Guide · 2 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Roch and his team are the best and most trustworthy in the business! We couldn't be happier with their service. They replaced the piping in our home quickly, arrived right on time, and did a quality job. I would absolutely recommend them to anyone in need of plumbing work!"
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center text-sm font-medium text-white">TB</div>
<div>
<p className="text-sm font-medium text-white">Thuy Bui</p>
<p className="text-xs text-neutral-500">6 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Thank you Tipi Plumbing for our beautiful bathroom!! We hired Tipi Plumbing for our recent bathroom renovation project. We had a very good experience with this company from start to finish. The communication was always easy, prompt and our..."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-900 to-teal-900 flex items-center justify-center text-sm font-medium text-white">JM</div>
<div>
<p className="text-sm font-medium text-white">Julie Michelle</p>
<p className="text-xs text-neutral-500">11 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "I had a great experience with Tipi Plumbing. They were prompt, professional, and got the job done quickly. The plumber was friendly and took the time to explain what needed to be done. The pricing was fair, and there were no hidden fees. I’ll definitely be reaching out to them for any future plumbing needs. Highly recommend!"
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-900 to-orange-900 flex items-center justify-center text-sm font-medium text-white">CB</div>
<div>
<p className="text-sm font-medium text-white">Cynthia Brunet</p>
<p className="text-xs text-neutral-500">11 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "I posted on Reddit around 7pm on a Thursday night looking for a plumber last minute for my mother in laws toilet as it wasn't filling back up with water. We needed someone to come that night. He responded within 10 minutes the name of his..."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-900 to-blue-900 flex items-center justify-center text-sm font-medium text-white">CT</div>
<div>
<p className="text-sm font-medium text-white">Cheyenne Thibault</p>
<p className="text-xs text-neutral-500">Local Guide · 10 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Outstanding service, was able to come in even on a long weekend and was quick and clear to communicate. He was able to pass on preventative information to prevent my leaks from happening again. Great pricing. Would recommend to anybody looking for an experienced plumber."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-900 to-red-900 flex items-center justify-center text-sm font-medium text-white">CY</div>
<div>
<p className="text-sm font-medium text-white">Claire Yam</p>
<p className="text-xs text-neutral-500">10 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Hired Tipi Plumbing on a commercial project of ours and they were great to deal with. Very knowledgeable staff, great service and fair prices. Would recommend to a friend."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-900 to-purple-900 flex items-center justify-center text-sm font-medium text-white">JR</div>
<div>
<p className="text-sm font-medium text-white">Jessica Robitaille</p>
<p className="text-xs text-neutral-500">11 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Roch services are incredibly fair, honest and hark working. Definetly recommend to anyone who is looking for plumbing services. 5/5."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center text-sm font-medium text-white">DB</div>
<div>
<p className="text-sm font-medium text-white">Daniel Bujold</p>
<p className="text-xs text-neutral-500">7 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Amazing. Came in 15 minutes on a Sunday to help us with a burst pipe. Professional and efficient. Thanks so much!"
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-900 to-emerald-900 flex items-center justify-center text-sm font-medium text-white">TG</div>
<div>
<p className="text-sm font-medium text-white">The TTG Guy</p>
<p className="text-xs text-neutral-500">Local Guide · 9 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 text-yellow-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Fast and professional. Thank you Tipi plumbing"
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-900 to-purple-900 flex items-center justify-center text-sm font-medium text-white">SP</div>
<div>
<p className="text-sm font-medium text-white">Stefan Petrescu</p>
<p className="text-xs text-neutral-500">Local Guide · 7 months ago</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[420px] p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full">
<div className="flex items-center gap-0.5 mb-6">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-white/20" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-8 flex-grow">
                        "Three stars because they are very expensive."
                    </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center text-sm font-medium text-white">FN</div>
<div>
<p className="text-sm font-medium text-white">First Name</p>
<p className="text-xs text-neutral-500">6 months ago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 lg:px-12 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 -z-10"></div>
<div className="max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-10 md:p-20 text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-cyan-500/20 blur-[100px] rounded-full -z-10"></div>
<h2 className="reveal-target opacity-0 translate-y-8 transition-all duration-700 text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
                Ready to resolve your plumbing issues?
            </h2>
<p className="reveal-target opacity-0 translate-y-8 transition-all duration-700 delay-100 text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                Our experts are available 24/7. Contact us today for thorough, high-quality service at fair prices.
            </p>
<a className="reveal-target opacity-0 translate-y-8 transition-all duration-700 delay-200 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="tel:6139831386">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                (613) 983-1386
            </a>
</div>
</section>

<footer className="relative pt-20 pb-10 px-6 lg:px-12 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div className="space-y-4">
<a className="text-2xl font-display font-medium tracking-tighter text-white uppercase block mb-6" href="#">
                    TIPI
                </a>
<p className="text-sm text-neutral-500 max-w-xs">
                    Elevating the standard of plumbing in Ottawa with precision, reliability, and unparalleled craftsmanship.
                </p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-6">Contact</h4>
<a className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group" href="tel:6139831386">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:phone-linear" width="18"></iconify-icon>
                    (613) 983-1386
                </a>
<div className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>1292 Dussere St,<br/>Ottawa, ON K1C 1P2</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
                    Open 24 hours
                </div>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-6">Navigation</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Client Reviews</a></li>
<li><a className="hover:text-white transition-colors" href="#">Get Directions</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 Tipi Plumbing Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
