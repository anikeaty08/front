import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Fraunces', 'serif'],
},
colors: {
stone: {
50: '#FBFBF9',
100: '#F5F5F2',
200: '#EBEBE6',
300: '#DCDCD4',
800: '#2C2A26',
900: '#1A1916',
},
burnt: {
500: '#C2410C',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
fontSize: {
'10xl': '10rem',
},
animation: {
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



        // Reveal Animations using IntersectionObserver
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Find the parent container or the element itself that has the reveal-img class
                        // In our CSS: .reveal-active .reveal-img
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select elements to reveal. We target the containers of the images.
            // For the About image:
            const aboutImgContainer = document.querySelector('.reveal-img')?.parentElement;
            if (aboutImgContainer) {
                aboutImgContainer.classList.add('reveal-wrapper'); // Helper class if needed
                observer.observe(aboutImgContainer);
            }
            
            // Add fade-in up animation for text elements
            const fadeElements = document.querySelectorAll('section h2, section p, .card');
            fadeElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            });

            const textObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            fadeElements.forEach(el => textObserver.observe(el));
        });

        // Simple Smooth Scroll for Anchor Links (Nav)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
<a className="font-serif text-3xl font-bold tracking-tighter" href="javascript:showPage('home')">loaf.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:opacity-60 transition-opacity" href="#about">About</a>
<a className="hover:opacity-60 transition-opacity" href="#expeditions">Expeditions</a>
<a className="hover:opacity-60 transition-opacity" href="#bakers">The Bakers</a>
<a className="hover:opacity-60 transition-opacity" href="#journal">Journal</a>
<button className="border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                Shop
            </button>
</div>
<button className="md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="page-transition" id="page-home">

<header className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-stone-900 text-stone-50">
<div className="absolute inset-0 opacity-60">
<img alt="Cyclist in mist" className="w-full h-full object-cover grayscale brightness-75 scale-110" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 px-6 pt-32 h-full flex flex-col justify-center">
<div className="max-w-7xl mx-auto w-full">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-md">
                        Est. 2024 — Worldwide
                    </span>
<h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter mix-blend-overlay opacity-90">
                        THE LOAF
                    </h1>
<div className="flex flex-col md:flex-row md:items-end justify-between mt-8 border-t border-white/20 pt-8">
<p className="max-w-xl text-xl md:text-2xl font-light text-stone-300 leading-relaxed">
                            A global community of endurance athletes, creatives, and bread breakers. We suffer together, we rise together.
                        </p>
<div className="mt-8 md:mt-0 flex gap-4">
<button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors flex items-center gap-2">
<span>Join the Movement</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="relative z-20 bg-stone-900 border-t border-white/10 py-3 overflow-hidden whitespace-nowrap">
<div className="animate-marquee inline-block text-xs font-mono uppercase tracking-widest text-stone-400">
                    Trust the Process — Heat and Time — Respect the Grains — Elevation Gain — Type 2 Fun — Community First — No Shortcuts — Trust the Process — Heat and Time — Respect the Grains — Elevation Gain — Type 2 Fun — Community First — No Shortcuts —
                </div>
</div>
</header>
<main className="relative bg-stone-50">

<section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 sticky top-32">
<h2 className="font-serif text-5xl tracking-tighter text-stone-900 mb-6">
                            The Mindset.
                        </h2>
<div className="h-1 w-24 bg-stone-900 mb-8"></div>
<p className="text-sm font-medium uppercase tracking-widest text-stone-400">
                            Philosophy 01
                        </p>
</div>
<div className="md:col-span-8 space-y-12">
<p className="text-3xl md:text-5xl font-light leading-tight text-stone-800">
                            "Loaf" isn't just about bread. It's about <span className="font-serif italic text-stone-500">patience</span>. It's the understanding that the best things in life—whether a 200km gravel ride, a marathon, or a sourdough starter—require time, tension, and heat.
                        </p>
<div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-stone-200">
<div>
<iconify-icon className="text-4xl mb-4 text-stone-900" icon="solar:flame-linear"></iconify-icon>
<h3 className="font-serif text-xl mb-2">Heat</h3>
<p className="text-stone-600 font-light">Growth only happens under pressure. We seek out the difficult environments.</p>
</div>
<div>
<iconify-icon className="text-4xl mb-4 text-stone-900" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="font-serif text-xl mb-2">Time</h3>
<p className="text-stone-600 font-light">No shortcuts. We put in the miles, the hours, and the work when no one is watching.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 bg-stone-100/50" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 reveal-img">
<img alt="The Process" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-stone-900 text-stone-50 p-6 rounded-xl hidden md:block">
<div className="text-4xl font-serif mb-1">2,400+</div>
<div className="text-xs uppercase tracking-widest text-stone-400">Members Worldwide</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<span className="text-stone-500 text-xs font-medium uppercase tracking-widest block mb-4">Our Story</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-stone-900 mb-6">Born from the grind.</h2>
</div>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
<p>
                                    The Loaf began as a simple observation: the most fulfilling moments often come after the longest efforts. We are a collective of runners, cyclists, and creators who believe in the beauty of the slow process.
                                </p>
<p>
                                    In a world obsessed with instant gratification, we choose the long way round. We build gear, curate expeditions, and bake bread, all with the same meticulous attention to detail. Whether it's sourcing the perfect grain or mapping a route through the Alps, we don't rush the rise.
                                </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-3 text-stone-900 font-medium hover:opacity-70 transition-opacity group" href="#">
<span className="border-b border-stone-900 pb-1">Read full story</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-50 py-24 px-6" id="expeditions">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-stone-400 text-xs font-medium uppercase tracking-widest block mb-4">Expeditions</span>
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter">Choose your suffering.</h2>
</div>
<a className="text-stone-300 hover:text-white transition-colors border-b border-stone-700 pb-1 flex items-center gap-2" href="#">
                            View Full Calendar
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer block">
<div className="aspect-[3/4] overflow-hidden mb-6 relative bg-stone-800">
<img alt="Mountains" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-burnt-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Open
                                </div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest mb-1">Elevation: 2400m</div>
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest">Distance: 160km</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-stone-800 pt-5">
<div>
<h3 className="font-serif text-2xl mb-1 text-stone-200 group-hover:text-white transition-colors">The Alpine Rise</h3>
<p className="text-stone-500 text-sm">Chamonix, France</p>
</div>
<span className="text-stone-500 text-sm font-mono">AUG 2024</span>
</div>
</div>

<div className="group cursor-pointer block">
<div className="aspect-[3/4] overflow-hidden mb-6 relative bg-stone-800">
<img alt="Desert" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 border border-stone-600 text-stone-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Waitlist
                                </div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest mb-1">Temp: 42°C</div>
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest">Gravel: 90%</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-stone-800 pt-5">
<div>
<h3 className="font-serif text-2xl mb-1 text-stone-200 group-hover:text-white transition-colors">High Desert Heat</h3>
<p className="text-stone-500 text-sm">Moab, Utah</p>
</div>
<span className="text-stone-500 text-sm font-mono">OCT 2024</span>
</div>
</div>

<div className="group cursor-pointer block">
<div className="aspect-[3/4] overflow-hidden mb-6 relative bg-stone-800">
<img alt="Forest" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 border border-stone-600 text-stone-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Full
                                </div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest mb-1">Humidity: 95%</div>
<div className="text-xs font-mono text-stone-300 uppercase tracking-widest">River Crossings: 12</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-stone-800 pt-5">
<div>
<h3 className="font-serif text-2xl mb-1 text-stone-200 group-hover:text-white transition-colors">Rainforest Run</h3>
<p className="text-stone-500 text-sm">Vancouver Island, BC</p>
</div>
<span className="text-stone-500 text-sm font-mono">NOV 2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 text-stone-900" id="journal">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<h2 className="font-serif text-5xl md:text-6xl tracking-tighter mb-8">Notes from the Field.</h2>
<p className="text-stone-600 font-light mb-8 max-w-sm">
                                Recipes for recovery, route planning for the impossible, and interviews with those who endure.
                            </p>
<button className="hidden lg:inline-flex border border-stone-300 px-6 py-3 rounded-full hover:bg-stone-900 hover:text-white transition-colors items-center gap-2">
                                Read the Journal
                            </button>
</div>

<div className="lg:col-span-8">
<div className="flex flex-col">

<a className="group border-b border-stone-200 py-8 hover:bg-stone-100 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3">
<span className="text-xs font-medium uppercase tracking-widest text-burnt-500">Nutrition</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="text-xs text-stone-400">5 min read</span>
</div>
<span className="text-stone-400 font-mono text-xs">OCT 12</span>
</div>
<h3 className="font-serif text-3xl group-hover:translate-x-2 transition-transform duration-300">
                                        Sourdough as Fuel: Why Slow Carbs Last Longer
                                    </h3>
</a>

<a className="group border-b border-stone-200 py-8 hover:bg-stone-100 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3">
<span className="text-xs font-medium uppercase tracking-widest text-burnt-500">Training</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="text-xs text-stone-400">8 min read</span>
</div>
<span className="text-stone-400 font-mono text-xs">SEP 28</span>
</div>
<h3 className="font-serif text-3xl group-hover:translate-x-2 transition-transform duration-300">
                                        Type 2 Fun: The Psychology of Voluntary Suffering
                                    </h3>
</a>

<a className="group border-b border-stone-200 py-8 hover:bg-stone-100 transition-colors px-4 -mx-4 rounded-xl" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3">
<span className="text-xs font-medium uppercase tracking-widest text-burnt-500">Gear</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span className="text-xs text-stone-400">4 min read</span>
</div>
<span className="text-stone-400 font-mono text-xs">SEP 15</span>
</div>
<h3 className="font-serif text-3xl group-hover:translate-x-2 transition-transform duration-300">
                                        Pack Light, Eat Heavy: The Ultralight Kitchen Setup
                                    </h3>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-24 px-6 border-t border-stone-800">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
<div className="space-y-6">
<a className="font-serif text-3xl text-white font-bold tracking-tighter block" href="#">loaf.</a>
<p className="text-sm leading-relaxed max-w-xs">
                                Forging a community through heat, time, and miles. Based in Portland, OR.
                            </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Our Manifesto</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Bakery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Expeditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Social</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Strava Club</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Stay Hungry</h4>
<form className="flex flex-col gap-3">
<input className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-stone-500 text-white placeholder-stone-500 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-stone-900 font-medium px-4 py-3 rounded-lg text-sm hover:bg-stone-200 transition-colors">
                                    Subscribe
                                </button>
</form>
</div>
</div>

<div className="border-t border-stone-800 pt-12 text-center md:text-left">
<h2 className="font-serif text-[12vw] leading-none text-stone-800 select-none tracking-tighter opacity-50 hover:opacity-100 transition-opacity duration-700">
                            TRUST THE PROCESS
                        </h2>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-12 text-xs font-mono uppercase tracking-widest text-stone-600 gap-4">
<p>© 2024 The Loaf. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-400" href="#">Privacy</a>
<a className="hover:text-stone-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
