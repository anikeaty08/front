import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Custom Cursor Logic
            const cursor = document.getElementById('custom-cursor');
            const interactiveElements = document.querySelectorAll('.interactive-el, a, button, input, textarea, label');

            // Move cursor
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            // Hover effects for cursor
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            // 2. Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger slightly later for visual weight
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Find child elements to animate
                        const animateElements = entry.target.querySelectorAll('.clip-reveal, .slide-up-hard, .scale-in');
                        
                        animateElements.forEach(el => el.classList.add('revealed'));
                        
                        // If the section itself has an animation class
                        if (entry.target.classList.contains('clip-reveal') || 
                            entry.target.classList.contains('slide-up-hard') ||
                            entry.target.classList.contains('scale-in')) {
                             entry.target.classList.add('revealed');
                        }

                        // Stop observing once revealed for static brutalism
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-section').forEach(section => {
                observer.observe(section);
            });

            // Initial load trigger for above-the-fold
            setTimeout(() => {
                const firstSection = document.querySelectorAll('.js-section')[0];
                if(firstSection) {
                    firstSection.querySelectorAll('.clip-reveal, .slide-up-hard, .scale-in').forEach(el => el.classList.add('revealed'));
                }
            }, 100);

            // 3. Smooth Scroll for Anchor Links (Vanilla JS)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const target = targetId === '#top' ? document.body : document.querySelector(targetId);
                    if(target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
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
      

<div className="hidden md:block" id="custom-cursor"></div>

<aside className="fixed bottom-0 left-0 w-full md:w-20 md:h-screen bg-zinc-50 border-t-2 md:border-t-0 md:border-r-2 border-zinc-950 z-50 flex md:flex-col justify-between items-center py-4 md:py-8 px-6 md:px-0 interactive-el">
<a className="hidden md:flex flex-col items-center gap-2 group" href="#">
<iconify-icon className="text-2xl group-hover:rotate-180 transition-transform duration-700" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mt-4 group-hover:tracking-[0.3em] transition-all duration-300">Singapore</span>
</a>
<div className="text-xl font-semibold tracking-tighter uppercase md:[writing-mode:vertical-lr] md:rotate-180">
            Flint<span className="text-zinc-400">Battery</span>
</div>
<button className="flex flex-col gap-1.5 p-2 group interactive-el">
<span className="w-6 h-0.5 bg-zinc-950 block group-hover:w-8 transition-all"></span>
<span className="w-6 h-0.5 bg-zinc-950 block group-hover:w-4 transition-all"></span>
</button>
</aside>

<main className="md:ml-20 min-h-screen flex flex-col">

<section className="relative min-h-[90vh] flex flex-col justify-between border-b-2 border-zinc-950 pb-12 pt-12 md:pt-24 js-section">

<div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 slide-up-hard">
<div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest">
<span className="w-2 h-2 bg-zinc-950 rounded-full animate-pulse"></span>
                    Legal Execution Unit
                </div>
<div className="flex items-center gap-8 border-2 border-zinc-950 rounded-full px-6 py-2">
<a className="text-sm font-medium hover:text-zinc-500 transition-colors interactive-el" href="tel:+6564384330">+65 6438 4330</a>
<div className="w-0.5 h-4 bg-zinc-950"></div>
<a className="text-sm font-medium hover:text-zinc-500 transition-colors interactive-el" href="mailto:admin@flintbattery.com">admin@flintbattery.com</a>
</div>
</div>

<div className="px-6 md:px-12 mt-20 md:mt-0 flex flex-col z-10 relative">
<h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-semibold uppercase tracking-tighter text-zinc-950 clip-reveal d-1 mix-blend-difference">
                    Cross-Border
                </h1>
<div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 mt-4 md:mt-0">
<h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-semibold uppercase tracking-tighter text-zinc-950 clip-reveal d-2 mix-blend-difference">
                        Execution.
                    </h1>
<p className="max-w-xs text-sm md:text-base font-medium tracking-tight text-zinc-600 uppercase mb-4 slide-up-hard d-3">
                        Partner-led Singapore legal advice for mid-market companies, founders, and investors operating without borders.
                    </p>
</div>
</div>

<div className="absolute top-1/4 right-0 w-3/4 md:w-1/2 h-1/2 md:h-[60%] overflow-hidden z-0 scale-in pointer-events-none">
<img alt="Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-24 border-y-2 border-zinc-950 py-4 bg-zinc-950 text-zinc-50 marquee-container interactive-el">
<div className="marquee-content text-2xl md:text-4xl font-semibold uppercase tracking-tighter">
<span className="mx-8">Structure Deals</span> <span className="mx-8">•</span>
<span className="mx-8">Navigate Regulation</span> <span className="mx-8">•</span>
<span className="mx-8">Execute Across Jurisdictions</span> <span className="mx-8">•</span>
<span className="mx-8">Structure Deals</span> <span className="mx-8">•</span>
<span className="mx-8">Navigate Regulation</span> <span className="mx-8">•</span>
<span className="mx-8">Execute Across Jurisdictions</span> <span className="mx-8">•</span>
</div>
</div>
</section>

<section className="border-b-2 border-zinc-950 js-section">
<div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-zinc-950">

<div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-12 bg-zinc-100">
<div className="slide-up-hard">
<iconify-icon className="text-4xl mb-6" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase leading-none mb-6">
                            Built For<br/>Complexity
                        </h2>
<p className="text-base font-medium tracking-tight text-zinc-600">
                            If your legal needs involve more than one jurisdiction, we’re built for that. No layered teams. Just direct, partner-led execution.
                        </p>
</div>

<div className="mt-24 self-start relative flex items-center justify-center slide-up-hard d-2">
<svg className="w-32 h-32 rotate-slow" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[0.65rem] font-medium uppercase tracking-widest fill-zinc-950">
<textpath href="#circlePath">
                                    Mid-Market • Startups • Investors • In-House •
                                </textpath>
</text>
</svg>
<iconify-icon className="absolute text-2xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-zinc-950 [&amp;&gt;*:nth-child(n+3)]:border-t-2 [&amp;&gt;*:nth-child(n+3)]:border-zinc-950">

<div className="p-8 md:p-12 hover-invert group flex flex-col justify-between min-h-[300px] js-section interactive-el">
<div className="flex justify-between items-start slide-up-hard">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm">01</span>
<iconify-icon className="text-4xl group-hover:scale-110 transition-transform" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-12 slide-up-hard d-1">
<h3 className="text-3xl font-semibold tracking-tighter uppercase mb-4 leading-none">Cross-Border<br/>Transactions</h3>
<p className="text-sm font-medium tracking-tight opacity-70 group-hover:opacity-100">Structure and execute deals across jurisdictions with clarity and speed.</p>
</div>
</div>

<div className="p-8 md:p-12 hover-invert group flex flex-col justify-between min-h-[300px] js-section interactive-el">
<div className="flex justify-between items-start slide-up-hard">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm">02</span>
<iconify-icon className="text-4xl group-hover:scale-110 transition-transform" icon="solar:hand-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-12 slide-up-hard d-1">
<h3 className="text-3xl font-semibold tracking-tighter uppercase mb-4 leading-none">M&amp;A and<br/>Investments</h3>
<p className="text-sm font-medium tracking-tight opacity-70 group-hover:opacity-100">Support acquisitions, exits, and capital deployment with deal-focused advice.</p>
</div>
</div>

<div className="p-8 md:p-12 hover-invert group flex flex-col justify-between min-h-[300px] js-section interactive-el">
<div className="flex justify-between items-start slide-up-hard">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm">03</span>
<iconify-icon className="text-4xl group-hover:scale-110 transition-transform" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-12 slide-up-hard d-1">
<h3 className="text-3xl font-semibold tracking-tighter uppercase mb-4 leading-none">Regulatory &amp;<br/>Compliance</h3>
<p className="text-sm font-medium tracking-tight opacity-70 group-hover:opacity-100">Navigate international regulatory frameworks without slowing down operations.</p>
</div>
</div>

<div className="p-8 md:p-12 hover-invert group flex flex-col justify-between min-h-[300px] js-section interactive-el">
<div className="flex justify-between items-start slide-up-hard">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm">04</span>
<iconify-icon className="text-4xl group-hover:scale-110 transition-transform" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-12 slide-up-hard d-1">
<h3 className="text-3xl font-semibold tracking-tighter uppercase mb-4 leading-none">Tech, Media &amp;<br/>Telecoms</h3>
<p className="text-sm font-medium tracking-tight opacity-70 group-hover:opacity-100">Advise on IP, data, licensing, and emerging technology issues.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b-2 border-zinc-950 relative overflow-hidden bg-zinc-950 text-zinc-50 js-section">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-6 md:p-12 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800">
<h2 className="text-[6vw] md:text-[4vw] font-semibold tracking-tighter uppercase leading-none mb-16 clip-reveal">
                        The Edge.
                    </h2>
<ul className="flex flex-col gap-8 w-full">
<li className="group cursor-pointer interactive-el slide-up-hard">
<div className="flex items-center gap-6 border-b border-zinc-800 pb-4">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-50 transition-colors">01</span>
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-300">Partner-Led</h3>
</div>
</li>
<li className="group cursor-pointer interactive-el slide-up-hard d-1">
<div className="flex items-center gap-6 border-b border-zinc-800 pb-4">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-50 transition-colors">02</span>
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-300">Cross-Border Capable</h3>
</div>
</li>
<li className="group cursor-pointer interactive-el slide-up-hard d-2">
<div className="flex items-center gap-6 border-b border-zinc-800 pb-4">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-50 transition-colors">03</span>
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-300">Singapore Advantage</h3>
</div>
</li>
<li className="group cursor-pointer interactive-el slide-up-hard d-3">
<div className="flex items-center gap-6 pb-4">
<span className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-50 transition-colors">04</span>
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-300">Commercial Mindset</h3>
</div>
</li>
</ul>
</div>

<div className="h-[50vh] lg:h-auto w-full relative overflow-hidden scale-in">
<img alt="Desk" className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 hover:opacity-100 transition-all duration-1000" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2112&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none">
<iconify-icon className="text-[15vw] text-zinc-50" icon="solar:scale-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="p-6 md:p-12 lg:p-24 border-b-2 border-zinc-950 bg-zinc-200 js-section">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="flex-1 slide-up-hard">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase leading-none mb-8">
                        Initiate<br/>Matter.
                    </h2>
<p className="text-xl font-medium tracking-tight text-zinc-600 max-w-md">
                        Don't leave complex execution to chance. Direct access to experienced counsel.
                    </p>
</div>

<form className="flex-1 w-full flex flex-col gap-6 slide-up-hard d-1" onsubmit="event.preventDefault();">
<div className="relative group interactive-el">
<input className="w-full bg-transparent border-b-2 border-zinc-950 px-0 py-4 text-2xl md:text-3xl font-semibold uppercase tracking-tighter text-zinc-950 placeholder-zinc-400 outline-none focus:border-zinc-950 transition-all peer" placeholder="NAME" required="" type="text"/>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-zinc-950 peer-focus:w-full transition-all duration-500"></div>
</div>
<div className="relative group interactive-el">
<input className="w-full bg-transparent border-b-2 border-zinc-950 px-0 py-4 text-2xl md:text-3xl font-semibold uppercase tracking-tighter text-zinc-950 placeholder-zinc-400 outline-none focus:border-zinc-950 transition-all peer" placeholder="EMAIL" required="" type="email"/>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-zinc-950 peer-focus:w-full transition-all duration-500"></div>
</div>
<div className="relative group mt-4 interactive-el">
<textarea className="w-full bg-transparent border-b-2 border-zinc-950 px-0 py-4 text-xl md:text-2xl font-semibold uppercase tracking-tighter text-zinc-950 placeholder-zinc-400 outline-none focus:border-zinc-950 transition-all resize-none peer" placeholder="BRIEF DETAILS" required="" rows="1"></textarea>
<div className="absolute bottom-0 left-0 w-0 h-1 bg-zinc-950 peer-focus:w-full transition-all duration-500"></div>
</div>

<label className="flex items-center gap-4 cursor-pointer group interactive-el mt-6 w-max">
<div className="relative w-12 h-6 border-2 border-zinc-950 rounded-full transition-colors bg-zinc-50">
<input className="peer sr-only" type="checkbox"/>
<div className="absolute top-0.5 left-0.5 w-4 h-4 bg-zinc-950 rounded-full transition-transform peer-checked:translate-x-6"></div>
</div>
<span className="text-sm font-semibold uppercase tracking-widest text-zinc-950">Multi-Jurisdictional</span>
</label>
<button className="mt-8 bg-zinc-950 text-zinc-50 px-8 py-6 text-xl md:text-2xl font-semibold uppercase tracking-tighter hover:bg-zinc-800 transition-colors duration-300 flex justify-between items-center interactive-el group w-full" type="submit">
                        Submit
                        <iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-zinc-50 js-section flex flex-col">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-zinc-950 border-b-2 border-zinc-950">

<div className="p-8 md:p-12 hover-invert transition-colors slide-up-hard flex flex-col gap-6 interactive-el">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm w-max">Entity 01</span>
<div>
<h4 className="text-xl font-semibold uppercase tracking-tighter mb-2">Flint &amp; Battery LLC</h4>
<p className="text-sm font-medium tracking-tight opacity-80 uppercase leading-relaxed">
                            Singapore Law Practice licensed under the LSRA.
                        </p>
</div>
</div>

<div className="p-8 md:p-12 hover-invert transition-colors slide-up-hard d-1 flex flex-col gap-6 interactive-el">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm w-max">Direct</span>
<div>
<h4 className="text-xl font-semibold uppercase tracking-tighter mb-2">Winston Wong</h4>
<p className="text-sm font-medium tracking-tight opacity-80 uppercase leading-relaxed mb-4">
                            Notary Public, Commissioner for Oaths.
                        </p>
<a className="block text-sm font-medium uppercase tracking-tight hover:underline" href="tel:+6590091081">+65 9009 1081</a>
</div>
</div>

<div className="p-8 md:p-12 hover-invert transition-colors slide-up-hard d-2 flex flex-col gap-6 interactive-el">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm w-max">Entity 02</span>
<div>
<h4 className="text-xl font-semibold uppercase tracking-tighter mb-2">Source Code Escrow</h4>
<p className="text-sm font-medium tracking-tight opacity-80 uppercase leading-relaxed mb-4">
                            Flint &amp; Battery Asia Pte Ltd.
                        </p>
<a className="block text-sm font-medium uppercase tracking-tight hover:underline break-all" href="mailto:admin@flintbattery.com">admin@flintbattery.com</a>
</div>
</div>

<div className="p-8 md:p-12 hover-invert transition-colors slide-up-hard d-3 flex flex-col gap-6 interactive-el">
<span className="text-xs font-semibold uppercase tracking-widest border border-current px-2 py-1 rounded-sm w-max">Location</span>
<div>
<h4 className="text-xl font-semibold uppercase tracking-tighter mb-2">HQ</h4>
<p className="text-sm font-medium tracking-tight opacity-80 uppercase leading-relaxed">
                            300 Beach Road,<br/>
                            The Concourse, #32-07,<br/>
                            Singapore 199555
                        </p>
</div>
</div>
</div>

<div className="w-full overflow-hidden p-6 md:p-12 pb-24 md:pb-12 bg-zinc-950 text-zinc-50 flex flex-col justify-end slide-up-hard">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-zinc-800 pb-8">
<p className="text-xs font-medium uppercase tracking-widest">© 2024 All Rights Reserved.</p>
<a className="text-xs font-medium uppercase tracking-widest flex items-center gap-2 hover:text-zinc-400 interactive-el" href="#top">
                        Back to Top <iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</a>
</div>
<h1 className="text-[15vw] leading-[0.75] font-semibold uppercase tracking-tighter w-full text-center mix-blend-exclusion">
                    FLINT<span className="text-zinc-600">BATTERY</span>
</h1>
</div>
</footer>
</main>



    </>
  );
}
