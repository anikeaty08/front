import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        $(document).ready(function() {
            // Header Scroll Logic (Hide Down, Show Up)
            let lastScrollTop = 0;
            const header = $('#main-header');
            const delta = 5;
            const navbarHeight = header.outerHeight();

            $(window).scroll(function(event){
                const st = $(this).scrollTop();
                
                // Make sure they scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;
                
                // If they scrolled down and are past the navbar, add class .hidden-nav.
                if (st > lastScrollTop && st > navbarHeight){
                    // Scroll Down
                    header.css('transform', 'translateY(-100%)');
                } else {
                    // Scroll Up
                    header.css('transform', 'translateY(0)');
                }
                
                lastScrollTop = st;
            });

            // Intersection Observer for Reveal Animations
            const revealElements = document.querySelectorAll('.reveal');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mix-blend-difference text-white py-6 px-6 md:px-12" id="main-header">
<div className="flex justify-between items-center max-w-[1920px] mx-auto">
<a className="text-lg tracking-tighter font-semibold uppercase" href="#">Alex.UX</a>
<nav className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:opacity-70 transition-opacity" href="#about">Philosophy</a>
<a className="hover:opacity-70 transition-opacity" href="#services">Expertise</a>
<a className="hover:opacity-70 transition-opacity" href="#work">Selected Work</a>
<a className="hover:opacity-70 transition-opacity" href="#contact">Connect</a>
</nav>
<button className="md:hidden">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative w-full h-[560px] overflow-hidden reveal active">

<img alt="Immersive Abstract" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20"></div>

<div className="absolute inset-0 flex items-center justify-center px-6 text-center">
<h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl leading-tight">
                Crafting digital clarity <br/> in a chaotic world.
            </h1>
</div>
</section>

<section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12" id="about">
<div className="max-w-5xl mx-auto">
<div className="reveal">
<p className="text-2xl md:text-4xl lg:text-5xl leading-[1.2] font-medium text-slate-900 tracking-tight">
                    I am a product designer focused on 
                    <span className="text-indigo-600">systemic impact</span>. 
                    Merging aesthetics with logic 
                    <img alt="Abstract shape" className="inline-block h-10 w-16 md:h-14 md:w-24 rounded-full object-cover mx-2 align-middle grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                    to build intuitive interfaces for 
                    complex data environments. 
                    <img alt="Geometry" className="inline-block h-10 w-10 md:h-14 md:w-14 rounded-full object-cover mx-2 align-middle grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                    My goal is to reduce cognitive load and spark joy in every pixel.
                </p>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 md:px-12" id="services">
<div className="max-w-[1920px] mx-auto">
<div className="mb-16 reveal">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Core Capabilities</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-y-24">

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:layout-grid" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Application Architecture</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Scalable design systems for complex web applications, ensuring consistency across all touchpoints.
                    </p>
</div>

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:monitor" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Web Experience</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Immersive front-end design that balances performance with high-fidelity visual storytelling.
                    </p>
</div>

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:database" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Backend Interaction</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Admin panels and CMS interfaces designed for efficiency, speed, and error reduction.
                    </p>
</div>

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:bar-chart-2" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Data Visualization</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Turning raw metrics into actionable insights through clear, beautiful dashboard compositions.
                    </p>
</div>

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:layers" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Brand Identity</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Visual languages that communicate values instantly through typography, color, and spacing.
                    </p>
</div>

<div className="group reveal">
<div className="mb-6 text-indigo-600">
<iconify-icon height="40" icon="lucide:smartphone" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Mobile Systems</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-sm">
                        Native iOS and Android patterns adapted for seamless on-the-go user experiences.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 overflow-hidden" id="work">
<div className="px-6 md:px-12 mb-12 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Recent Selection</h2>
</div>
<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory reveal">

<div className="flex-none w-[85vw] md:w-[700px] snap-center cursor-pointer group">
<div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-100">
<img alt="Fintech App" className="w-full h-full object-cover transform scale-125 transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-6">
<h3 className="text-xl font-semibold tracking-tight">Nova Fintech</h3>
<p className="text-slate-500 text-sm mt-1">Mobile Application Design</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[700px] snap-center cursor-pointer group">
<div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-100">
<img alt="Analytics Dashboard" className="w-full h-full object-cover transform scale-125 transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<h3 className="text-xl font-semibold tracking-tight">Orbit Analytics</h3>
<p className="text-slate-500 text-sm mt-1">SaaS Dashboard &amp; Design System</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[700px] snap-center cursor-pointer group">
<div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-100">
<img alt="E-commerce" className="w-full h-full object-cover transform scale-125 transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<h3 className="text-xl font-semibold tracking-tight">Lumina Fashion</h3>
<p className="text-slate-500 text-sm mt-1">E-commerce Experience</p>
</div>
</div>

<div className="flex-none w-[85vw] md:w-[700px] snap-center cursor-pointer group">
<div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-100">
<img alt="Architecture Firm" className="w-full h-full object-cover transform scale-125 transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<h3 className="text-xl font-semibold tracking-tight">Arkitect</h3>
<p className="text-slate-500 text-sm mt-1">Corporate Identity &amp; Web</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="px-6 md:px-12 mb-12 reveal">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Trusted By</span>
</div>

<div className="mb-6 relative w-full overflow-hidden">
<div className="marquee-container-left flex gap-12 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-semibold tracking-tighter">VERCEL</span>
<span className="text-2xl font-semibold tracking-tighter">STRIPE</span>
<span className="text-2xl font-semibold tracking-tighter">LINEAR</span>
<span className="text-2xl font-semibold tracking-tighter">FIGMA</span>
<span className="text-2xl font-semibold tracking-tighter">NOTION</span>
<span className="text-2xl font-semibold tracking-tighter">FRAMER</span>
<span className="text-2xl font-semibold tracking-tighter">RAYCAST</span>
<span className="text-2xl font-semibold tracking-tighter">AIRBNB</span>

<span className="text-2xl font-semibold tracking-tighter">VERCEL</span>
<span className="text-2xl font-semibold tracking-tighter">STRIPE</span>
<span className="text-2xl font-semibold tracking-tighter">LINEAR</span>
<span className="text-2xl font-semibold tracking-tighter">FIGMA</span>
<span className="text-2xl font-semibold tracking-tighter">NOTION</span>
<span className="text-2xl font-semibold tracking-tighter">FRAMER</span>
<span className="text-2xl font-semibold tracking-tighter">RAYCAST</span>
<span className="text-2xl font-semibold tracking-tighter">AIRBNB</span>
</div>
</div>

<div className="relative w-full overflow-hidden">
<div className="marquee-container-right flex gap-12 md:gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-semibold tracking-tighter">SPOTIFY</span>
<span className="text-2xl font-semibold tracking-tighter">SHOPIFY</span>
<span className="text-2xl font-semibold tracking-tighter">INTERCOM</span>
<span className="text-2xl font-semibold tracking-tighter">LOOM</span>
<span className="text-2xl font-semibold tracking-tighter">SLACK</span>
<span className="text-2xl font-semibold tracking-tighter">DOORDASH</span>
<span className="text-2xl font-semibold tracking-tighter">UBER</span>
<span className="text-2xl font-semibold tracking-tighter">TESLA</span>

<span className="text-2xl font-semibold tracking-tighter">SPOTIFY</span>
<span className="text-2xl font-semibold tracking-tighter">SHOPIFY</span>
<span className="text-2xl font-semibold tracking-tighter">INTERCOM</span>
<span className="text-2xl font-semibold tracking-tighter">LOOM</span>
<span className="text-2xl font-semibold tracking-tighter">SLACK</span>
<span className="text-2xl font-semibold tracking-tighter">DOORDASH</span>
<span className="text-2xl font-semibold tracking-tighter">UBER</span>
<span className="text-2xl font-semibold tracking-tighter">TESLA</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="max-w-[1920px] mx-auto">
<div className="mb-16 reveal">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Feedback</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-slate-50 p-8 reveal">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-14 h-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<iconify-icon className="text-slate-300" icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed text-slate-600">
                        "The design system Alex built transformed our development speed. A true master of layout and logic."
                    </p>
</div>

<div className="bg-slate-50 p-8 reveal">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-14 h-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<iconify-icon className="text-slate-300" icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed text-slate-600">
                        "Minimalism that doesn't feel empty. Every pixel serves a distinct purpose."
                    </p>
</div>

<div className="bg-slate-50 p-8 reveal">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-14 h-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<iconify-icon className="text-slate-300" icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed text-slate-600">
                        "Incredible attention to detail on the dashboard analytics. Data never looked so good."
                    </p>
</div>

<div className="bg-slate-50 p-8 reveal">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-14 h-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<iconify-icon className="text-slate-300" icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed text-slate-600">
                        "We needed a complete overhaul. Alex delivered a world-class experience in record time."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white reveal" id="contact">
<div className="max-w-[1920px] mx-auto flex flex-col items-start">
<p className="text-slate-400 font-medium mb-4">Have an idea?</p>
<a className="group relative inline-block cursor-pointer" href="mailto:hello@alexux.com">
<span className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                    Let's Build.
                </span>
<iconify-icon className="text-4xl md:text-7xl lg:text-8xl inline-block ml-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</a>
<div className="mt-12 text-slate-400 font-mono text-xs">
                Based in San Francisco. Available Globally.
            </div>
</div>
</section>



    </>
  );
}
