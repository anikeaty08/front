import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const slider = document.getElementById('testimonial-slider');
            const prevBtn = document.getElementById('prev-slide');
            const nextBtn = document.getElementById('next-slide');
            const dots = document.querySelectorAll('#slider-dots button');
            let currentIndex = 0;
            const totalSlides = 3;

            function updateSlider() {
                // Move slider
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.remove('bg-[#D4D6DC]', 'hover:bg-[#C25871]/50');
                        dot.classList.add('bg-[#b90560]');
                    } else {
                        dot.classList.add('bg-[#D4D6DC]', 'hover:bg-[#C25871]/50');
                        dot.classList.remove('bg-[#b90560]');
                    }
                });
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.getAttribute('data-index'));
                    updateSlider();
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full px-6 py-8 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-xl transition-transform group-hover:rotate-90 duration-700 text-[#b90560]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-lg tracking-tight font-medium text-[#1A1E29]">Romi Schultz</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-normal text-[#636C80]">
<a className="transition-colors hover:text-[#b90560]" href="#about">About</a>
<a className="transition-colors hover:text-[#b90560]" href="#links">Resources</a>
<a className="transition-colors hover:text-[#b90560]" href="#approach">Approach</a>
</div>
<a className="px-5 py-2.5 bg-white border border-[#EBEBEF] text-[#1A1E29] text-xs font-medium rounded-full hover:border-[#C25871]/30 hover:bg-[#F6F6F8] transition-all shadow-sm" href="https://calendly.com/romischultz/30min" target="_blank">
            Book Session
        </a>
</nav>

<header className="md:px-12 md:pt-24 md:pb-40 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
<div className="w-full lg:w-3/5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C25871]/20 bg-white/50 mb-8">
<iconify-icon className="text-sm text-[#b90560]" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-medium text-[#b90560]">Neuro LifeCoach • Life by Design</span>
</div>
<h1 className="text-5xl md:text-7xl text-[#1A1E29] leading-[1.05] tracking-tight font-medium mb-8">
                    Rise, heal &amp; realign with <br/>
<span className="font-['Newsreader',serif] italic font-light text-[#636C80]">who you were created to be.</span>
</h1>
<p className="text-lg md:text-xl text-[#636C80] leading-relaxed max-w-xl font-light mb-12">
                    Rooted in faith, aligned with purpose. I help you untangle the noise so you can intentionally design a life that truly fits your neuro-identity.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 text-[#F6F6F8] rounded-full hover:bg-[#4E202F] transition-all text-sm font-medium text-center shadow-md shadow-[#652A3D]/10 bg-[#b90560]" href="#links">
                        Explore Resources
                    </a>
<a className="px-8 py-4 bg-white border border-[#EBEBEF] text-[#1A1E29] rounded-full hover:bg-white/60 transition-all text-sm font-medium text-center shadow-sm flex items-center justify-center gap-2" href="https://calendly.com/romischultz/30min" target="_blank">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Free Purpose Session
                    </a>
</div>
</div>

<div className="w-full lg:w-2/5 relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-[#EBEBEF] to-[#C25871]/10 rounded-[2.5rem] blur-xl opacity-60 -z-10"></div>
<img alt="Romi Schultz - Neuro LifeCoach" className="w-full aspect-[4/5] object-cover object-top rounded-[2rem] border border-[#EBEBEF] shadow-xl shadow-[#1A1E29]/5" src="https://ugc.production.linktr.ee/4f6396dc-5753-486e-9e01-a5c6f4c2d7a7_WhatsApp-Image-2025-08-04-at-17.42.13-a9058f06.jpeg"/>
</div>
</div>

<div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-[#EBEBEF] to-transparent rounded-full blur-3xl -z-20 opacity-50 pointer-events-none transform -translate-x-1/2"></div>
</header>

<section className="py-24 md:py-32 bg-white" id="links">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="">
<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1E29] tracking-tight font-medium mb-4">
                        Featured <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Resources</span>
</h2>
<p className="text-[#636C80] font-light text-lg max-w-xl">
                        Everything you need to start your journey of healing, focus, and purposeful design.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<a className="bg-[#F6F6F8] p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1" href="https://calendly.com/romischultz/30min" target="_blank">
<div className="flex items-center justify-between mb-6 text-[#1A1E29]">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#EBEBEF] group-hover:bg-[#C25871] group-hover:text-white group-hover:border-[#C25871] transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Consultation</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">Book your free purpose session</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        A 30-minute dedicated call to discuss where you are, where you want to be, and how we can map out a path that feels authentic.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Schedule now <iconify-icon className="transform group-hover:translate-x-1 -group-hover:translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="bg-[#F6F6F8] p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1" href="https://drive.google.com/file/d/1MTCNmkC-aRwkfTeNP1jcd4DXbhUgCPp6/view?usp=sharing" target="_blank">
<div className="flex items-center justify-between mb-6 text-[#1A1E29]">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#EBEBEF] group-hover:bg-[#C25871] group-hover:text-white group-hover:border-[#C25871] transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Free Guide</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">Reset &amp; Refocus Journal</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        Download my guided journal via Google Drive. Designed specifically to help you clear mental clutter and center your thoughts.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Access resource <iconify-icon className="transform group-hover:translate-x-1 -group-hover:translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="bg-[#F6F6F8] p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1" href="https://www.instagram.com/rise.with.romi?igsh=dHkyeng1MnF5dWxk" target="_blank">
<div className="flex items-center justify-between mb-6 text-[#1A1E29]">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#EBEBEF] group-hover:bg-[#C25871] group-hover:text-white group-hover:border-[#C25871] transition-all duration-500">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Community</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">@rise.with.romi</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        Join the Instagram community for daily insights, encouragement, and practical steps toward a faith-rooted, purpose-driven life.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Follow along <iconify-icon className="transform group-hover:translate-x-1 -group-hover:translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F6F6F8]" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-5 relative">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block text-[#b90560]">My Philosophy</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1E29] tracking-tight font-medium leading-tight sticky top-24">
                        Healing through <br/>
<span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Faith &amp; Science.</span>
</h2>
</div>
<div className="md:col-span-7 space-y-8 text-lg text-[#636C80] font-light leading-relaxed">
<p className="">
                        We are complex beings living in a noisy world. True transformation requires more than just willpower; it requires an approach that honors how your brain naturally works while staying deeply rooted in the faith that grounds you.
                    </p>
<p className="">
                        As a Neuro LifeCoach, my goal is not to force you into rigid, one-size-fits-all frameworks. Instead, we work together to untangle your thoughts, clear out the societal expectations, and consciously design a life that aligns perfectly with who you were created to be.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white overflow-hidden" id="approach">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-10">
<div className="">
<h2 className="text-3xl md:text-4xl text-[#1A1E29] tracking-tight font-medium mb-6">
                            Life by <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Design</span>
</h2>
<p className="text-[#636C80] font-light text-lg">
                            We don't do toxic positivity. We work with reality, respecting your unique pace, neuro-diversity, and spiritual journey.
                        </p>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">Rooted in Faith</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Grounding our sessions and strategies in enduring spiritual truths and purpose.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">Neuro-focused Clarity</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Breaking down overwhelming mental loads into structured, manageable pathways.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">Authentic Realignment</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Shedding the 'shoulds' to step fully into the life and calling meant for you.</p>
</div>
</li>
</ul>
</div>

<div className="bg-[#F6F6F8] p-8 md:p-12 rounded-[3rem] border border-[#EBEBEF] relative">
<iconify-icon className="absolute top-8 right-8 text-[#C25871]/20 text-4xl" icon="solar:hearts-linear"></iconify-icon>
<h4 className="text-xs font-medium text-[#636C80] tracking-widest uppercase mb-10 text-center">Transformations</h4>
<div className="relative overflow-hidden">
<div className="flex transition-transform duration-700 ease-in-out" id="testimonial-slider">

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<p className="text-xl md:text-2xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-sm mx-auto">
                                    "Having a dedicated coach to help me untangle my thoughts without judgment has been absolutely transformative."
                                </p>
</div>

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<p className="text-xl md:text-2xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-sm mx-auto">
                                    "Romi's approach finally helped me align my faith with my daily actions. I feel clear, focused, and truly purposeful."
                                </p>
</div>

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<p className="text-xl md:text-2xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-sm mx-auto">
                                    "The blend of neuro-focused strategy and deep spiritual grounding gave me the exact tools I needed to redesign my life."
                                </p>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-6 mt-4">
<button className="w-8 h-8 rounded-full border border-[#D4D6DC] bg-white text-[#1A1E29] flex items-center justify-center hover:border-[#C25871]/30 hover:text-[#b90560] transition-colors focus:outline-none" id="prev-slide">
<iconify-icon className="text-sm" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2" id="slider-dots">
<button className="w-2 h-2 rounded-full bg-[#b90560] transition-colors focus:outline-none" data-index="0"></button>
<button className="w-2 h-2 rounded-full bg-[#D4D6DC] hover:bg-[#C25871]/50 transition-colors focus:outline-none" data-index="1"></button>
<button className="w-2 h-2 rounded-full bg-[#D4D6DC] hover:bg-[#C25871]/50 transition-colors focus:outline-none" data-index="2"></button>
</div>
<button className="w-8 h-8 rounded-full border border-[#D4D6DC] bg-white text-[#1A1E29] flex items-center justify-center hover:border-[#C25871]/30 hover:text-[#b90560] transition-colors focus:outline-none" id="next-slide">
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 text-white bg-[#0f173a]" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<h2 className="text-3xl md:text-5xl text-white tracking-tight font-medium mb-6">
                        Ready to <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">take the first step?</span>
</h2>
<p className="text-[#8E93A1] font-light text-lg mb-12 max-w-md">
                        Whether you know exactly what you want to work on, or you just know you need space to figure it out—reach out. You don't have to have it all perfectly articulated.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">Name</p>
<p className="text-sm font-medium">Romi Schultz</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">Email</p>
<a className="text-sm font-medium hover:text-[#C25871] transition-colors" href="mailto:romischultz@gmail.com">romischultz@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">WhatsApp</p>
<a className="text-sm font-medium hover:text-[#C25871] transition-colors" href="#">Connect on WhatsApp</a>
</div>
</div>
</div>
</div>

<div className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
<form className="space-y-8">
<div className="">
<label className="block text-xs font-medium text-[#8E93A1] tracking-widest uppercase mb-2" htmlFor="name">Your Name</label>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#C25871] transition-colors font-light text-sm" id="name" placeholder="How should I address you?" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-[#8E93A1] tracking-widest uppercase mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#C25871] transition-colors font-light text-sm" id="email" placeholder="Where can I reach you?" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#8E93A1] tracking-widest uppercase mb-2" htmlFor="message">What's on your mind?</label>
<textarea className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#C25871] transition-colors font-light text-sm resize-none" id="message" placeholder="(Messy thoughts are perfectly fine)" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-white text-[#1A1E29] rounded-xl hover:bg-[#EBEBEF] transition-all text-sm font-medium" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/10 bg-[#0f173a]">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-sm text-[#b90560]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Romi Schultz</span>
</div>
<p className="text-xs text-[#8E93A1] font-light">
                © 2024 Romi Schultz. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
