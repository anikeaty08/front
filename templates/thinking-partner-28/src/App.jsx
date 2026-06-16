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
<iconify-icon className="text-xl transition-transform group-hover:rotate-90 duration-700 text-[#b90560]" icon="solar:asterisk-linear"></iconify-icon>
<span className="text-lg tracking-tight font-medium text-[#1A1E29]">Thinking Partner</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-normal text-[#636C80]">
<a className="transition-colors hover:text-[#b90560]" href="#about">About</a>
<a className="transition-colors hover:text-[#b90560]" href="#who">Who I Work With</a>
<a className="transition-colors hover:text-[#b90560]" href="#approach">Approach</a>
<a className="transition-colors hover:text-[#b90560]" href="#writing">Writing</a>
</div>
<a className="px-5 py-2.5 bg-white border border-[#EBEBEF] text-[#1A1E29] text-xs font-medium rounded-full hover:border-[#C25871]/30 hover:bg-[#F6F6F8] transition-all shadow-sm" href="#contact">
            Let's Talk
        </a>
</nav>

<header className="md:px-12 md:pt-24 md:pb-40 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
<div className="w-full lg:w-3/5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C25871]/20 bg-white/50 mb-8">
<iconify-icon className="text-sm text-[#b90560]" icon="solar:sparkles-linear"></iconify-icon>
<span className="text-xs font-medium text-[#b90560]">Clear the air, find your focus</span>
</div>
<h1 className="text-5xl md:text-7xl text-[#1A1E29] leading-[1.05] tracking-tight font-medium mb-8">
                    Your Thinking Partner <br/>
<span className="font-['Newsreader',serif] italic font-light text-[#636C80]">in a World of Noise.</span>
</h1>
<p className="text-lg md:text-xl text-[#636C80] leading-relaxed max-w-xl font-light mb-12">
                    No agendas. No formulas. Just clarity, space, and honest thinking. A safe place to sit down, take a breath, and finally hear yourself.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 text-[#F6F6F8] rounded-full hover:bg-[#4E202F] transition-all text-sm font-medium text-center shadow-md shadow-[#652A3D]/10 bg-[#b90560]" href="#contact">
                        Ready to Connect
                    </a>
<a className="px-8 py-4 bg-white border border-[#EBEBEF] text-[#1A1E29] rounded-full hover:bg-white/60 transition-all text-sm font-medium text-center shadow-sm" href="#about">
                        Explore the Offer
                    </a>
</div>
</div>

<div className="w-full lg:w-2/5 relative">

<div className="absolute -inset-4 bg-gradient-to-tr from-[#EBEBEF] to-[#C25871]/10 rounded-[2.5rem] blur-xl opacity-60 -z-10"></div>
<img alt="Therapist and Thinking Partner" className="w-full aspect-[4/5] object-cover rounded-[2rem] border border-[#EBEBEF] shadow-xl shadow-[#1A1E29]/5" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>

<div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-[#EBEBEF] to-transparent rounded-full blur-3xl -z-20 opacity-50 pointer-events-none transform -translate-x-1/2"></div>
</header>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-5 relative">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block text-[#b90560]">About the Space</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1E29] tracking-tight font-medium leading-tight sticky top-24">
                        Why work with a <br/>
<span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Thinking Partner?</span>
</h2>
</div>
<div className="md:col-span-7 space-y-8 text-lg text-[#636C80] font-light leading-relaxed">
<p className="">
                        Most spaces demand something from you—a decision, a performance, an outcome. A Thinking Partnership is different. It is a dedicated environment designed solely for your reflection, structured to untangle complexity without pressure.
                    </p>
<p className="">
                        I provide the structure, the psychological safety, and the focused attention necessary for you to process your thoughts aloud. It’s not about me telling you what to do; it’s about creating a quiet enough room for your own intelligence to surface.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F6F6F8]" id="who">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="md:text-4xl text-3xl font-medium text-[#1A1E29] tracking-tight mb-6">Who I Work With</h2>
<p className="text-[#636C80] font-light">
                    I collaborate with individuals who need a high-quality sounding board. No matter the context, the core need is the same: clarity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-colors duration-500 group">
<div className="w-14 h-14 bg-[#F6F6F8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#652A3D] group-hover:text-white transition-colors duration-500 text-[#1A1E29]">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-3">Leaders &amp; High-Pressure Professionals</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm">
                        For those carrying heavy cognitive loads. A space to strategically deconstruct challenges, test ideas, and find grounding before making high-stakes decisions.
                    </p>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-colors duration-500 group">
<div className="w-14 h-14 bg-[#F6F6F8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C25871] group-hover:text-white transition-colors duration-500 text-[#1A1E29]">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-3">Women in <br/>Transition</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm">
                        Navigating career shifts, identity changes, or returning to work. We rebuild narrative, clear out societal noise, and map out a path that feels authentic and yours.
                    </p>
</div>

<div className="bg-white p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-colors duration-500 group">
<div className="w-14 h-14 bg-[#F6F6F8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1A1E29] group-hover:text-white transition-colors duration-500 text-[#1A1E29]">
<iconify-icon className="text-2xl" icon="solar:infinity-linear"></iconify-icon>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-3">Neurodiverse Thinkers <span className="text-xs font-normal text-[#636C80] block mt-1">(ADHD/AuDHD)</span></h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm">
                        A structurally supportive environment tailored to how your brain works. No forced neurotypical frameworks—just calm pacing, visual mapping, and gentle accountability.
                    </p>
</div>
</div>

<div className="mt-24 max-w-4xl mx-auto relative">
<h3 className="text-center text-xs font-medium tracking-widest uppercase text-[#b90560] mb-8">Client Experiences</h3>
<div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-[#EBEBEF] px-8 py-12 md:p-16">
<div className="flex transition-transform duration-700 ease-in-out" id="testimonial-slider">

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<iconify-icon className="text-4xl text-[#C25871]/20 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-2xl md:text-3xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                                "Having a dedicated space to just think out loud without feeling rushed or judged has been transformative. The cognitive load I was carrying as a founder is finally manageable."
                            </p>
<div className="mt-auto">
<p className="text-[#1A1E29] font-medium text-sm tracking-tight">Sarah J.</p>
<p className="text-[#636C80] text-xs font-light mt-1">Tech Startup Founder</p>
</div>
</div>

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<iconify-icon className="text-4xl text-[#C25871]/20 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-2xl md:text-3xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                                "I didn't need another strategy framework. I needed someone to help me hear my own intuition again. This space provided exactly that—quiet, structured clarity."
                            </p>
<div className="mt-auto">
<p className="text-[#1A1E29] font-medium text-sm tracking-tight">Marcus T.</p>
<p className="text-[#636C80] text-xs font-light mt-1">Director of Operations</p>
</div>
</div>

<div className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
<iconify-icon className="text-4xl text-[#C25871]/20 mb-6" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-2xl md:text-3xl text-[#1A1E29] font-['Newsreader',serif] italic font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                                "As an AuDHD professional, finding a thinking partner who adapts to my processing style rather than forcing me into a neurotypical mold was an absolute breath of fresh air."
                            </p>
<div className="mt-auto">
<p className="text-[#1A1E29] font-medium text-sm tracking-tight">Elena R.</p>
<p className="text-[#636C80] text-xs font-light mt-1">Creative Director</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-6 mt-8">
<button className="w-10 h-10 rounded-full border border-[#EBEBEF] bg-white text-[#1A1E29] flex items-center justify-center hover:border-[#C25871]/30 hover:text-[#b90560] transition-colors focus:outline-none" id="prev-slide">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2" id="slider-dots">
<button className="w-2 h-2 rounded-full bg-[#b90560] transition-colors focus:outline-none" data-index="0"></button>
<button className="w-2 h-2 rounded-full bg-[#D4D6DC] hover:bg-[#C25871]/50 transition-colors focus:outline-none" data-index="1"></button>
<button className="w-2 h-2 rounded-full bg-[#D4D6DC] hover:bg-[#C25871]/50 transition-colors focus:outline-none" data-index="2"></button>
</div>
<button className="w-10 h-10 rounded-full border border-[#EBEBEF] bg-white text-[#1A1E29] flex items-center justify-center hover:border-[#C25871]/30 hover:text-[#b90560] transition-colors focus:outline-none" id="next-slide">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
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
                            A Grounded Approach to <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Growth</span>
</h2>
<p className="text-[#636C80] font-light text-lg">
                            We don't do toxic positivity or aggressive goal-setting. We work with reality, respecting your unique pace and cognitive style.
                        </p>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">Clarity over chaos</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Breaking down overwhelming webs of thought into linear, actionable pieces.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">Structure without rigidity</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Flexible frameworks that adapt to your energy levels and daily reality.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#F6F6F8] border border-[#EBEBEF] flex items-center justify-center shrink-0">
<iconify-icon className="text-xs text-[#b90560]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#1A1E29] font-medium tracking-tight">A radically safe space</h4>
<p className="text-[#636C80] text-sm font-light mt-1">Zero judgment. You are free to unmask, stim, pause, or change your mind.</p>
</div>
</li>
</ul>
</div>

<div className="bg-[#F6F6F8] p-10 md:p-16 rounded-[3rem] border border-[#EBEBEF] relative">

<iconify-icon className="absolute top-8 right-8 text-[#C25871]/20 text-4xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-xs font-medium text-[#636C80] tracking-widest uppercase mb-10 text-center">Where my clients come from</h4>
<div className="grid grid-cols-2 gap-x-8 gap-y-12 items-center justify-items-center opacity-60 grayscale">

<div className="flex items-center gap-2 text-[#1A1E29] font-medium tracking-tight text-lg">
<iconify-icon icon="solar:buildings-linear"></iconify-icon> Tech Startups
                        </div>
<div className="flex items-center gap-2 text-[#1A1E29] font-medium tracking-tight text-lg">
<iconify-icon icon="solar:library-linear"></iconify-icon> Academia
                        </div>
<div className="flex items-center gap-2 text-[#1A1E29] font-medium tracking-tight text-lg">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon> Agencies
                        </div>
<div className="flex items-center gap-2 text-[#1A1E29] font-medium tracking-tight text-lg">
<iconify-icon icon="solar:palette-linear"></iconify-icon> Creatives
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F6F6F8]" id="writing">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="">
<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1A1E29] tracking-tight font-medium mb-4">
                        Recent <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">Writing</span>
</h2>
<p className="text-[#636C80] font-light text-lg max-w-xl">
                        Reflections on cognitive load, decision-making, and the quiet power of unstructured thought.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1E29] hover:text-[#C25871] transition-colors border-b border-[#EBEBEF] hover:border-[#C25871]/30 pb-1" href="#">
                    View all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<a className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full" href="#">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Reflection</span>
<span className="text-xs font-light text-[#8E93A1]">Oct 12, 2023</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">The Myth of the Quick Decision</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        Why high-stakes choices rarely benefit from artificial urgency, and how to build a buffer for genuine deliberation.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Read piece <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full" href="#">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Methodology</span>
<span className="text-xs font-light text-[#8E93A1]">Sep 28, 2023</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">Unmasking in the Workplace</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        For neurodiverse professionals, the cognitive cost of masking is steep. Here is how to begin setting structural boundaries.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Read piece <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EBEBEF] hover:border-[#C25871]/30 transition-all duration-500 group flex flex-col h-full" href="#">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium tracking-widest uppercase text-[#b90560]">Case Study</span>
<span className="text-xs font-light text-[#8E93A1]">Sep 15, 2023</span>
</div>
<h3 className="text-xl text-[#1A1E29] tracking-tight font-medium mb-4 group-hover:text-[#652A3D] transition-colors">Untangling the Founder's Web</h3>
<p className="text-[#636C80] font-light leading-relaxed text-sm mb-8 flex-grow">
                        When everything is a priority, nothing is. A look at breaking down overwhelming operational webs into actionable clarity.
                    </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#1A1E29] group-hover:text-[#C25871] transition-colors">
                        Read piece <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 text-white bg-[#0f173a]" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<h2 className="text-3xl md:text-5xl text-white tracking-tight font-medium mb-6">
                        Ready to <span className="font-['Newsreader',serif] italic font-light text-[#b90560]">clear the air?</span>
</h2>
<p className="text-[#8E93A1] font-light text-lg mb-12 max-w-md">
                        Whether you know exactly what you want to untangle, or you just know you need space to figure it out—reach out. There’s no pressure to have it all perfectly articulated.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">Name</p>
<p className="text-sm font-medium">Elena Rostova</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">Email</p>
<a className="text-sm font-medium hover:text-[#C25871] transition-colors" href="mailto:hello@thinkingpartner.com">hello@thinkingpartner.com</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C25871] group-hover:text-white transition-colors text-[#b90560]">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#8E93A1] uppercase tracking-widest mb-1">Network</p>
<a className="text-sm font-medium hover:text-[#C25871] transition-colors" href="#">Connect on LinkedIn</a>
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
<textarea className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#C25871] transition-colors font-light text-sm resize-none" id="message" placeholder="(Bullet points or messy thoughts are perfectly fine)" rows="3"></textarea>
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
<iconify-icon className="text-sm text-[#b90560]" icon="solar:asterisk-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Thinking Partner</span>
</div>
<p className="text-xs text-[#8E93A1] font-light">
                © 2024 Thinking Partner. Space to reflect.
            </p>
</div>
</footer>



    </>
  );
}
