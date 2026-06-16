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
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800/40 bg-neutral-950/60 backdrop-blur-xl transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<span className="text-base font-medium tracking-tighter text-neutral-100">WEBSITE</span>
<span className="text-base font-medium tracking-tighter text-neutral-500 group-hover:text-neutral-400 transition-colors">DEVELOPERS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-neutral-100 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-100 transition-colors" href="#work">Work</a>
<a className="hover:text-neutral-100 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-full hover:bg-white transition-colors hover:scale-105 active:scale-95 duration-300" href="#contact">
                    Start a project
                </a>
<button className="md:hidden text-neutral-400 hover:text-neutral-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern mask-radial opacity-30 pointer-events-none animate-grid"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none animate-blob"></div>
<div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-neutral-700/10 blur-[80px] rounded-full pointer-events-none animate-blob animation-delay-2000"></div>
<div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-neutral-600/10 blur-[90px] rounded-full pointer-events-none animate-blob animation-delay-4000"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800/60 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new clients
            </div>
<h1 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[100ms] text-5xl md:text-7xl font-medium tracking-tight text-neutral-100 mb-6 max-w-4xl mx-auto leading-tight">
                Website developers for local <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">legends.</span>
</h1>
<p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[200ms] text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We design and build high-performance websites specifically for cafes, restaurants, and clinics. Turn local searches into actual foot traffic.
            </p>
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[300ms] flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-full hover:bg-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group" href="#work">
                    View our work
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" href="#contact">
                    Book a consultation
                </a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 border-t border-neutral-900 relative" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-100 mb-4">Tailored for your niche</h2>
<p className="text-base text-neutral-400 max-w-xl">We understand the unique needs of local businesses. We don't do templates; we build solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[100ms] group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 hover:border-neutral-700/80 hover:bg-neutral-900/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-neutral-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-100 mb-2 tracking-tight">Cafes &amp; Coffee Shops</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Showcase your menu, atmosphere, and location. Integrated loyalty sign-ups and online ordering capabilities.</p>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[200ms] group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 hover:border-neutral-700/80 hover:bg-neutral-900/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-neutral-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-100 mb-2 tracking-tight">Restaurants</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Mouth-watering galleries, seamless table reservation integrations, and SEO optimized for local dining searches.</p>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[300ms] group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 hover:border-neutral-700/80 hover:bg-neutral-900/50 transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-neutral-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-100 mb-2 tracking-tight">Clinics &amp; Wellness</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Professional, trust-building design. Easy online appointment booking and secure patient information handling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-100 mb-4">Selected Work</h2>
<p className="text-base text-neutral-400 max-w-xl">Recent projects we've launched for local businesses.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors group" href="#">
                    View archive <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[100ms] group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-900 border border-neutral-800/60 mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 to-neutral-950 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:scale-105 transition-transform duration-700 ease-out">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-medium text-neutral-100 mb-1 tracking-tight">The Artisan Roastery</h3>
<p className="text-sm text-neutral-500">Cafe • E-commerce Integration</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-950 group-hover:border-transparent transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[300ms] group cursor-pointer md:mt-16">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-900 border border-neutral-800/60 mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-neutral-800/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:scale-105 transition-transform duration-700 ease-out">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-medium text-neutral-100 mb-1 tracking-tight">Oakwood Dental</h3>
<p className="text-sm text-neutral-500">Clinic • Booking System</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-950 group-hover:border-transparent transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900 bg-neutral-950/50 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-neutral-800/10 blur-[100px] rounded-full pointer-events-none animate-blob"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h2 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out text-3xl md:text-5xl font-medium tracking-tight text-neutral-100 mb-8 max-w-3xl mx-auto">
                No jargon. No hidden fees. <br/>Just websites that work.
            </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16 text-sm text-neutral-400 font-medium">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[100ms] flex items-center gap-3 hover:text-neutral-100 transition-colors cursor-default">
<iconify-icon className="text-neutral-100" icon="solar:bolt-linear" width="20"></iconify-icon>
                    Lightning Fast Load Times
                </div>
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[200ms] flex items-center gap-3 hover:text-neutral-100 transition-colors cursor-default">
<iconify-icon className="text-neutral-100" icon="solar:smartphone-linear" width="20"></iconify-icon>
                    Flawless Mobile Experience
                </div>
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[300ms] flex items-center gap-3 hover:text-neutral-100 transition-colors cursor-default">
<iconify-icon className="text-neutral-100" icon="solar:magnifer-linear" width="20"></iconify-icon>
                    Local SEO Optimized
                </div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/20 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out text-4xl md:text-5xl font-medium tracking-tight text-neutral-100 mb-6">Ready to upgrade your local presence?</h2>
<p className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[100ms] text-lg text-neutral-400 mb-10 font-light">Drop us a message. We'll get back to you within 24 hours with a free consultation and project estimate.</p>
<form className="scroll-reveal opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[200ms] flex flex-col gap-4 max-w-md mx-auto text-left">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900 transition-colors" placeholder="hello@yourbusiness.com" type="email"/>
<button className="group w-full px-6 py-3 text-sm font-medium text-neutral-950 bg-neutral-100 rounded-xl hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2" type="button">
                    Send inquiry
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-10 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center gap-1 group" href="#">
<span className="text-sm font-medium tracking-tighter text-neutral-100">WEBSITE</span>
<span className="text-sm font-medium tracking-tighter text-neutral-500 group-hover:text-neutral-400 transition-colors">DEVELOPERS</span>
</a>
<p className="text-xs font-medium text-neutral-600">
                © 2024 Website Developers. All rights reserved.
            </p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-neutral-100 transition-colors hover:scale-110 duration-300" href="#"><iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="hover:text-neutral-100 transition-colors hover:scale-110 duration-300" href="#"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
