import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
amu: {
green: '#1B5E3B',
darkgreen: '#14462C',
gold: '#C5A028',
cream: '#F9F9F7',
surface: '#FFFFFF'
}
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Inter', 'sans-serif'],
},
transitionDuration: {
'2000': '2000ms',
},
animation: {
'ken-burns': 'kenBurns 20s ease-out infinite alternate',
'breathe': 'breathe 3s ease-in-out infinite',
},
keyframes: {
kenBurns: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.15)' },
},
breathe: {
'0%, 100%': { boxShadow: '0 0 0 0 rgba(27, 94, 59, 0)', transform: 'scale(1)' },
'50%': { boxShadow: '0 0 0 6px rgba(27, 94, 59, 0.15)', transform: 'scale(1.01)' },
}
}
}
}
}



        lucide.createIcons();

        // Reveal on Scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();

        // Toggle Discovery Options in Section 1
        function toggleDiscovery() {
            const container = document.getElementById('discovery-options');
            const icon = document.getElementById('discovery-icon');
            
            if (container.classList.contains('max-h-0')) {
                // Open
                container.classList.remove('max-h-0', 'opacity-0');
                container.classList.add('max-h-60', 'opacity-100');
                icon.classList.add('rotate-90');
                // Remove the translate group hover effect while open so it points down
                icon.classList.remove('group-hover:translate-x-1');
            } else {
                // Close
                container.classList.add('max-h-0', 'opacity-0');
                container.classList.remove('max-h-60', 'opacity-100');
                icon.classList.remove('rotate-90');
                icon.classList.add('group-hover:translate-x-1');
            }
        }

        // Chart Animation Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            // Increased threshold so it triggers when user scrolls further down
            threshold: 0.6 
        };

        const chartSection = document.getElementById('cost-section');
        const costDisplay = document.getElementById('cost-display');
        const costRing = document.getElementById('cost-ring');

        // Animation target values - Start at 0, land at 23515
        const startValue = 0; 
        const endValue = 23515;
        const duration = 2000; 

        const animateValue = (start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Ease out quart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                
                const current = Math.floor(start + (end - start) * easeProgress);
                costDisplay.innerHTML = '$' + current.toLocaleString();
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger SVG Stroke Animation (to ~42% remaining)
                    costRing.style.strokeDashoffset = '164'; 
                    // Trigger Number Count
                    animateValue(startValue, endValue, duration);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(chartSection);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-amu-green text-white text-xs font-medium py-2 px-4 sm:px-8 relative z-50">
<div className="max-w-7xl mx-auto flex justify-end space-x-6 tracking-wide opacity-90">
<a className="hover:text-amu-gold transition-colors" href="#">Search</a>
<a className="hover:text-amu-gold transition-colors" href="#">Visit</a>
<a className="hover:text-amu-gold transition-colors" href="#">Apply</a>
<a className="hover:text-amu-gold transition-colors" href="#">Donate</a>
</div>
</div>

<nav className="bg-white border-b border-stone-100 sticky top-0 z-40 bg-opacity-95 backdrop-blur-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between">

<a className="block w-32 md:w-48 hover:opacity-80 transition-opacity" href="#">
<img alt="Ave Maria University Logo" className="w-full h-auto" src="https://cdn.prod.website-files.com/6375326e346f27444ae6d852/64a749096fcf89afcd7b830e_ave-official-logo-1.svg"/>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-amu-green transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-amu-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">Academics</a>
<a className="hover:text-amu-green transition-colors" href="#">Admissions</a>
<a className="text-amu-green font-semibold hover:text-amu-gold transition-colors" href="#">Apply Now</a>
</div>
<button className="md:hidden text-stone-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto mt-6 md:mt-8 h-[500px] md:h-[60vh] min-h-[450px] flex items-center overflow-hidden group shadow-2xl shadow-stone-200">

<div className="absolute inset-0 z-0">
<img alt="Happy graduates throwing caps" className="w-full h-full object-cover animate-ken-burns" src="https://cdn.prod.website-files.com/6375326e346f27444ae6d852/663656322edba0a7ef15645b_grad-caps-2024-crop.webp"/>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center px-4 sm:px-8">
<div className="absolute left-0 top-1/2 -translate-y-1/2 wipe-in ml-4 lg:ml-0">
<div className="bg-stone-900/50 backdrop-blur-md rounded-[2.5rem] py-12 pr-12 pl-4 sm:pl-8 lg:pl-32 shadow-2xl border border-white/10">
<div className="max-w-xl text-reveal-delay">
<h1 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
                            WHAT WILL AMU <br/><span className="italic text-amu-gold">ACTUALLY</span> COST?
                        </h1>
<p className="text-white/90 text-sm md:text-base font-light tracking-wide max-w-md border-l-2 border-amu-gold pl-4">
                            Discover hidden scholarship opportunities.
                        </p>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 bg-white" id="cost-section">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="reveal pt-4">
<span className="text-amu-green text-xs font-bold tracking-[0.2em] uppercase mb-6 block flex items-center gap-2">
<span className="w-8 h-[1px] bg-amu-green"></span> Invest In Your Future
                    </span>
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-tight mb-8">
                        The Sticker Price is <span className="italic text-stone-500 relative">Not
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-amu-gold/40" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span> The Story
                    </h2>
<div className="prose prose-lg prose-stone text-stone-600 leading-relaxed mb-8">
<p className="mb-6">
                            Most families see the tuition number and assume it's out of reach. But at AMU, <strong>98% of students receive financial aid.</strong>
</p>
<p>
                            We look at the whole person—your location, your grades, your service, and your faith—to find every dollar available to you.
                        </p>
</div>

<div className="relative inline-block w-full sm:w-auto">
<button className="w-full sm:w-auto group flex items-center justify-between sm:justify-start gap-3 bg-amu-green text-white px-8 py-4 rounded-lg font-semibold tracking-tight text-sm md:text-base shadow-lg animate-breathe focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amu-green" onclick="toggleDiscovery()">
<span>Discover Scholarship Opportunities</span>
<i className="w-5 h-5" data-lucide="arrow-right" id="discovery-icon"></i>
</button>

<div className="w-full max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-2 mt-2" id="discovery-options">

<a className="block w-full px-6 py-3 bg-stone-50 border border-stone-200 rounded-lg hover:bg-amu-cream hover:border-amu-gold/30 transition-all group" href="https://apply.avemaria.edu/register/?id=6b786fbb-6330-4e33-9814-896030a14c0e">
<div className="flex items-center justify-between">
<span className="font-serif text-stone-900 text-base">I haven't applied yet</span>
<i className="w-4 h-4 text-stone-400 group-hover:text-amu-gold" data-lucide="chevron-right"></i>
</div>
</a>
<a className="block w-full px-6 py-3 bg-stone-50 border border-stone-200 rounded-lg hover:bg-amu-cream hover:border-amu-gold/30 transition-all group" href="https://apply.avemaria.edu/register/?id=9801e8d0-6f1c-40f4-979c-943dff64dda3">
<div className="flex items-center justify-between">
<span className="font-serif text-stone-900 text-base">I've already applied</span>
<i className="w-4 h-4 text-stone-400 group-hover:text-amu-gold" data-lucide="chevron-right"></i>
</div>
</a>
</div>
</div>
</div>

<div className="bg-amu-cream rounded-2xl p-8 lg:p-12 border border-stone-100 shadow-lg shadow-stone-200/50 flex flex-col items-center justify-center relative overflow-hidden reveal delay-200 hover-lift">
<div className="relative w-64 h-64 mb-6 group cursor-default">

<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="45" stroke="#E5E7EB" strokeWidth="4"></circle>

<circle className="transition-all duration-[2000ms] ease-out group-hover:stroke-[6]" cx="50" cy="50" fill="none" id="cost-ring" r="45" stroke="#C5A028" stroke-dasharray="283" stroke-dashoffset="283" strokeLinecap="round" strokeWidth="4"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">AVG. ANNUAL COST</span>

<span className="font-serif text-4xl text-amu-green tracking-tight font-medium tabular-nums" id="cost-display">$0</span>
</div>
</div>

<div className="flex justify-center gap-8 text-xs font-medium uppercase tracking-wider">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-stone-200 rounded-full"></div>
<span className="text-stone-500">Scholarships &amp; Aid</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-amu-gold rounded-full animate-pulse"></div>
<span className="text-stone-900">Your Investment</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-amu-cream border-t border-stone-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<div className="text-center mb-16 reveal">
<span className="text-amu-green text-xs font-bold tracking-[0.2em] uppercase mb-4 block">MULTIPLE CRITERIA</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Four Things That Affect Your Aid</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover-lift group reveal delay-100">
<div className="w-12 h-12 bg-amu-green/10 rounded-full flex items-center justify-center mb-6 text-amu-green group-hover:bg-amu-green group-hover:text-white transition-all duration-500 group-hover:scale-110">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 tracking-tight">Where You Live</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        State, diocese, parish, and regional awards you may not know exist.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover-lift group reveal delay-200">
<div className="w-12 h-12 bg-amu-green/10 rounded-full flex items-center justify-center mb-6 text-amu-green group-hover:bg-amu-green group-hover:text-white transition-all duration-500 group-hover:scale-110">
<i className="w-6 h-6" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 tracking-tight">Academic Merit</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        GPA and test scores unlock more than just merit aid opportunities.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover-lift group reveal delay-300">
<div className="w-12 h-12 bg-amu-green/10 rounded-full flex items-center justify-center mb-6 text-amu-green group-hover:bg-amu-green group-hover:text-white transition-all duration-500 group-hover:scale-110">
<i className="w-6 h-6" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 tracking-tight">Athletics</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Competitive athletes may qualify for additional performance support.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover-lift group reveal delay-400">
<div className="w-12 h-12 bg-amu-green/10 rounded-full flex items-center justify-center mb-6 text-amu-green group-hover:bg-amu-green group-hover:text-white transition-all duration-500 group-hover:scale-110">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3 tracking-tight">Your Unique Story</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Heritage, faith background, community service, career interests, and life experiences.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="flex flex-col h-full justify-between p-1 reveal">
<div className="relative">
<i className="w-8 h-8 text-amu-gold/20 fill-current mb-4" data-lucide="quote"></i>
<p className="text-lg font-serif text-stone-800 leading-relaxed italic mb-8 relative z-10">
                            "When we saw the sticker price, we almost didn't apply. The scholarship calculator showed us that between the Catholic High School award and a regional grant, AMU was actually cheaper than our state school."
                        </p>
</div>
<div className="flex items-center gap-4 group">
<img alt="Mark D." className="w-12 h-12 rounded-full object-cover border border-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-stone-900 text-sm">Mark D.</p>
<p className="text-stone-500 text-xs uppercase tracking-wide">Class of '26 Parent</p>
</div>
</div>
</div>

<div className="flex flex-col h-full justify-between p-1 lg:border-l lg:border-stone-100 lg:pl-12 reveal delay-100">
<div className="relative">
<i className="w-8 h-8 text-amu-gold/20 fill-current mb-4" data-lucide="quote"></i>
<p className="text-lg font-serif text-stone-800 leading-relaxed italic mb-8 relative z-10">
                            "I didn't think my service work would count for much financially. Turns out, the community service scholarship was the piece that made it possible for me to say yes to AMU."
                        </p>
</div>
<div className="flex items-center gap-4 group">
<img alt="James" className="w-12 h-12 rounded-full object-cover border border-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-stone-900 text-sm">James R.</p>
<p className="text-stone-500 text-xs uppercase tracking-wide">Incoming Freshman</p>
</div>
</div>
</div>

<div className="flex flex-col h-full justify-between p-1 lg:border-l lg:border-stone-100 lg:pl-12 reveal delay-200">
<div className="relative">
<i className="w-8 h-8 text-amu-green/20 fill-current mb-4" data-lucide="quote"></i>
<p className="text-lg font-serif text-stone-800 leading-relaxed italic mb-8 relative z-10">
                            "My favorite part of this job is showing a family that the 'impossible' number on paper isn't real. We have funds specifically designed to bridge the gap for families committed to a faithful education."
                        </p>
</div>
<div className="flex items-center gap-4 group">
<img alt="Elena Martinez" className="w-12 h-12 rounded-full object-cover border border-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-stone-900 text-sm">Elena Martinez</p>
<p className="text-stone-500 text-xs uppercase tracking-wide">Director of Financial Aid</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200">
<div className="max-w-4xl mx-auto px-4 sm:px-8 text-center reveal">
<span className="text-amu-green text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Find Your Hidden Opportunities</span>
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-tight mb-6">
                Most Families Leave Money on the Table
            </h2>

<p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                Select the option below that best describes you to find what you qualify for—no commitment required.
            </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">

<a className="cool-hover group relative flex flex-col items-start p-8 bg-white border border-stone-200 rounded-xl text-left overflow-hidden z-10" href="https://apply.avemaria.edu/register/?id=6b786fbb-6330-4e33-9814-896030a14c0e">
<div className="relative z-10 w-full">
<div className="flex justify-between items-start w-full">
<span className="text-sm font-semibold text-amu-green mb-1 block">New to AMU?</span>
<div className="text-stone-400 group-hover:text-amu-green transform group-hover:translate-x-1 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<span className="font-serif text-xl text-stone-900 font-medium tracking-tight block mb-2">I haven't applied yet</span>
<p className="text-xs text-stone-500 group-hover:text-stone-700 transition-colors">Find out what you could qualify for.</p>
</div>
</a>

<a className="cool-hover group relative flex flex-col items-start p-8 bg-white border border-stone-200 rounded-xl text-left overflow-hidden z-10" href="https://apply.avemaria.edu/register/?id=9801e8d0-6f1c-40f4-979c-943dff64dda3">
<div className="relative z-10 w-full">
<div className="flex justify-between items-start w-full">
<span className="text-sm font-semibold text-amu-gold mb-1 block">Welcome back!</span>
<div className="text-stone-400 group-hover:text-amu-gold transform group-hover:translate-x-1 transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<span className="font-serif text-xl text-stone-900 font-medium tracking-tight block mb-2">I've already applied</span>
<p className="text-xs text-stone-500 group-hover:text-stone-700 transition-colors">Explore a variety of opportunities.</p>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-amu-green text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="block w-40 mb-6 hover:opacity-80 transition-opacity" href="#">
<img alt="Ave Maria University Logo" className="w-full h-auto brightness-0 invert" src="https://cdn.prod.website-files.com/6375326e346f27444ae6d852/64a749096fcf89afcd7b830e_ave-official-logo-1.svg"/>
</a>
<p className="text-white/60 text-sm leading-relaxed">
                        A Catholic liberal arts university dedicated to the formation of joyful, intentional followers of Jesus Christ.
                    </p>
</div>

<div>
<h4 className="font-serif text-lg mb-4 text-amu-gold">Admissions</h4>
<ul className="space-y-2 text-sm text-white/80">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Apply Now</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Visit Campus</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Financial Aid</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Request Info</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-4 text-amu-gold">Academics</h4>
<ul className="space-y-2 text-sm text-white/80">
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Majors &amp; Minors</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Study Abroad</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Honors Program</a></li>
<li><a className="hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">Faculty</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-4 text-amu-gold">Contact</h4>
<ul className="space-y-2 text-sm text-white/80">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-1 opacity-60" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>5050 Ave Maria Blvd.<br/>Ave Maria, FL 34142</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 opacity-60" data-lucide="phone" strokeWidth="1.5"></i>
<span>(239) 280-2500</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
<p>© 2024 Ave Maria University. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Consumer Information</a>
<a className="hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
