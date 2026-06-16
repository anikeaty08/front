import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // 1. Column Animation Init (adapted for white mask)
        const colGrid = document.getElementById('column-grid');
        const numCols = window.innerWidth < 768 ? 4 : 6;
        for (let i = 0; i < numCols; i++) {
            const col = document.createElement('div');
            col.className = 'relative h-full w-full';
            const mask = document.createElement('div');
            mask.className = 'col-reveal-mask';
            // Stagger animation
            mask.style.animationDelay = `${i * 0.1}s`;
            col.appendChild(mask);
            colGrid.appendChild(col);
        }

        // 2. Text Reveal
        const heroTitle = document.getElementById('hero-title');
        
        function splitText(element) {
            const text = element.innerHTML;
            element.innerHTML = '';
            element.style.opacity = 1;
            
            const lines = text.split('<br>');
            let charIndexGlobal = 0;
            
            lines.forEach((line) => {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'block';
                
                const words = line.split(' ');
                words.forEach((word) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word-wrapper mr-[0.2em]';
                    for(let char of word) {
                        const charSpan = document.createElement('span');
                        charSpan.className = 'char-wrapper';
                        const charInner = document.createElement('span');
                        charInner.className = 'char-slide';
                        charInner.textContent = char;
                        charInner.style.animationDelay = `${1.2 + (charIndexGlobal * 0.03)}s`;
                        charSpan.appendChild(charInner);
                        wordSpan.appendChild(charSpan);
                        charIndexGlobal++;
                    }
                    lineDiv.appendChild(wordSpan);
                });
                element.appendChild(lineDiv);
            });
        }

        document.fonts.ready.then(() => {
            splitText(heroTitle);
        });

        // 3. Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

        // 4. Ambient Mouse Glow
        const light = document.getElementById('ambient-glow');
        let mouseX = 0, mouseY = 0;
        let lightX = 0, lightY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateLight() {
            lightX += (mouseX - lightX) * 0.1;
            lightY += (mouseY - lightY) * 0.1;
            light.style.left = `${lightX}px`;
            light.style.top = `${lightY}px`;
            requestAnimationFrame(animateLight);
        }
        animateLight();
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) {
                nav.classList.add('bg-blue-600/90', 'backdrop-blur-md', 'shadow-lg');
            } else {
                nav.classList.remove('bg-blue-600/90', 'backdrop-blur-md', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="ambient-glow"></div>

<div className="fixed inset-0 z-[100] grid grid-cols-6 pointer-events-none" id="column-grid"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<i className="w-6 h-6 text-white fill-white group-hover:text-yellow-300 transition-colors" data-lucide="zap"></i>
<span className="font-display text-xl font-bold tracking-tight text-white uppercase italic">Vergae<span className="text-blue-200">Campus</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium uppercase tracking-widest text-blue-100 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium uppercase tracking-widest text-blue-100 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium uppercase tracking-widest text-blue-100 hover:text-white transition-colors" href="#trainers">Mentors</a>
</div>
<button className="hidden md:block">
<i className="w-6 h-6 text-white" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-[100svh] pt-20 overflow-hidden flex flex-col justify-between">

<div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 z-0"></div>

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0"></div>

<div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 h-full flex-grow pt-10 lg:pt-0">

<div className="lg:col-span-7 flex flex-col justify-center pb-20 lg:pb-0">
<div className="mb-4 overflow-hidden">
<p className="text-yellow-300 font-bold tracking-widest uppercase text-sm animate-[fadeIn_1s_ease-out_0.5s_both]">
                        Elite Training Academy
                    </p>
</div>
<h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] font-display font-semibold uppercase tracking-tighter text-white mb-8 mix-blend-overlay lg:mix-blend-normal" id="hero-title">
                    Unleash<br/>Your Inner<br/>Genius
                </h1>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-4 reveal-text delay-700">
<button className="bg-white text-blue-900 px-10 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-950 transition-colors shadow-xl shadow-blue-900/20 btn-hover-effect">
                        Start Here
                    </button>
<div className="flex items-center gap-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-gray-200"></div>
<div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-gray-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-gray-400"></div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1 text-yellow-300">
<span className="font-bold text-lg">4.9</span>
<i className="w-4 h-4 fill-yellow-300 stroke-none" data-lucide="star"></i>
</div>
<span className="text-blue-100 text-xs font-medium">From 2k+ Students</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-full flex items-end justify-center lg:justify-end pointer-events-none">
<img alt="Female Athlete Student" className="hero-img-mask relative z-10 w-full h-[60vh] lg:h-[85vh] object-cover object-top lg:scale-125 lg:translate-y-10 lg:-translate-x-10 filter contrast-110 saturate-100" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/4 right-0 lg:-right-8 z-20 glass-panel p-4 rounded-xl shadow-lg animate-[bounce_3s_infinite] hidden md:block">
<div className="text-center">
<span className="block text-3xl font-display font-bold text-white">4.8</span>
<div className="flex justify-center my-1">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<span className="text-[10px] uppercase tracking-wider text-blue-100">High Performers</span>
</div>
</div>
</div>
</div>

<div className="relative z-20 w-full border-t border-white/20 glass-panel">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="font-display text-3xl md:text-4xl uppercase font-semibold text-white mb-2 tracking-tight">
                        Redefining What <br/><span className="text-blue-200">Growth Feels Like</span>
</h3>
<div className="h-1 w-20 bg-yellow-400 mt-4"></div>
</div>
<div className="flex flex-col gap-4">
<p className="text-blue-50 text-sm leading-relaxed max-w-md">
                        We help ambitious individuals build sustainable high-performance habits through personalized academic programs, expert coaching, and a supportive campus community.
                    </p>
<div className="text-right md:text-left">
<span className="font-display text-2xl font-bold text-white">10K+</span>
<span className="text-xs uppercase tracking-widest text-blue-200 ml-2">Active Members</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-blue-950 py-6 border-y border-white/10 overflow-hidden">
<div className="marquee-container w-full relative">
<div className="marquee-content flex gap-16 items-center w-max opacity-60">
<span className="font-display text-xl uppercase tracking-widest text-white">Stanford</span>
<span className="font-display text-xl uppercase tracking-widest text-white">MIT Sloan</span>
<span className="font-display text-xl uppercase tracking-widest text-white">Harvard Business</span>
<span className="font-display text-xl uppercase tracking-widest text-white">Wharton</span>
<span className="font-display text-xl uppercase tracking-widest text-white">INSEAD</span>
<span className="font-display text-xl uppercase tracking-widest text-white">LBS</span>

<span className="font-display text-xl uppercase tracking-widest text-white">Stanford</span>
<span className="font-display text-xl uppercase tracking-widest text-white">MIT Sloan</span>
<span className="font-display text-xl uppercase tracking-widest text-white">Harvard Business</span>
<span className="font-display text-xl uppercase tracking-widest text-white">Wharton</span>
<span className="font-display text-xl uppercase tracking-widest text-white">INSEAD</span>
<span className="font-display text-xl uppercase tracking-widest text-white">LBS</span>
</div>
</div>
</section>

<section className="py-24 bg-white text-blue-950 relative" id="programs">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-text">
<div>
<span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Curriculum</span>
<h2 className="font-display text-5xl md:text-6xl font-semibold uppercase tracking-tight text-blue-900">
                        Built for<br/>Speed &amp; Impact
                    </h2>
</div>
<p className="text-slate-500 max-w-xs text-sm mt-6 md:mt-0 leading-relaxed">
                    Modules designed to accelerate your cognitive capabilities and leadership presence.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden bg-slate-50 rounded-lg p-8 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 reveal-text">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-blue-600" data-lucide="brain"></i>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-6 h-6 text-blue-600 group-hover:text-white stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="font-display text-2xl font-semibold mb-3 text-blue-900">Cognitive Velocity</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Enhance decision-making speed under pressure through proprietary mental drills.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800" href="#">
                        Explore Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative overflow-hidden bg-blue-600 rounded-lg p-8 border border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 reveal-text delay-100">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-white" data-lucide="activity"></i>
</div>
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<i className="w-6 h-6 text-white group-hover:text-blue-600 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="font-display text-2xl font-semibold mb-3 text-white">Performance Analytics</h3>
<p className="text-sm text-blue-100 mb-6 leading-relaxed">Real-time feedback loops on your leadership style and impact metrics.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-200" href="#">
                        Explore Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative overflow-hidden bg-slate-50 rounded-lg p-8 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 reveal-text delay-200">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-blue-600" data-lucide="users"></i>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-6 h-6 text-blue-600 group-hover:text-white stroke-[1.5]" data-lucide="shield"></i>
</div>
<h3 className="font-display text-2xl font-semibold mb-3 text-blue-900">Resilience Training</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Forge an unbreakable mindset capable of navigating market volatility.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800" href="#">
                        Explore Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-text">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-10 bg-yellow-400"></span>
<span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">The Vergae Method</span>
</div>
<h2 className="font-display text-5xl md:text-6xl font-semibold uppercase tracking-tight mb-8 leading-[0.9]">
                    Push Past<br/><span className="text-slate-500">Your Limits.</span>
</h2>
<p className="text-slate-300 font-light text-lg leading-relaxed mb-10 max-w-md">
                    We don't do lectures. We do simulations. Our campus is a testing ground for the real world, utilizing stress-inoculation techniques derived from elite sports psychology.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-blue-500 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-display text-xl uppercase mb-1">Assessment</h4>
<p className="text-xs text-slate-400">Identify your cognitive bottlenecks.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-6 h-6 text-blue-500 shrink-0 mt-1" data-lucide="check-circle-2"></i>
<div>
<h4 className="font-display text-xl uppercase mb-1">Calibration</h4>
<p className="text-xs text-slate-400">Customized roadmap for skill acquisition.</p>
</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-blue-600 p-6 rounded-2xl reveal-text delay-100">
<h3 className="font-display text-4xl mb-1">94%</h3>
<p className="text-blue-200 text-xs uppercase tracking-widest">Placement Rate</p>
</div>
<div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 reveal-text delay-200">
<img alt="Mentor" className="w-10 h-10 rounded-full mb-3 border-2 border-slate-600" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-slate-400 text-xs italic">"Vergae changed my trajectory entirely."</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 reveal-text delay-300">
<i className="w-8 h-8 text-blue-500 mb-3" data-lucide="globe"></i>
<h3 className="font-display text-2xl mb-1">Global</h3>
<p className="text-slate-500 text-xs uppercase tracking-widest">Alumni Network</p>
</div>
<div className="bg-yellow-400 text-blue-950 p-6 rounded-2xl reveal-text delay-400">
<h3 className="font-display text-4xl mb-1">Top 1%</h3>
<p className="text-blue-900/60 text-xs uppercase tracking-widest">Ranked Program</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-blue-950 border-t border-blue-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<i className="w-6 h-6 text-yellow-400 fill-yellow-400" data-lucide="zap"></i>
<span className="font-display text-xl font-bold tracking-tight text-white uppercase italic">Vergae<span className="text-blue-400">Campus</span></span>
</a>
<p className="text-blue-200/60 text-sm max-w-sm mb-8 leading-relaxed">
                        Redefining the boundaries of academic and physical potential. Join the cohort of future leaders.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Programs</h4>
<ul className="space-y-4">
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Leadership</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Cognitive Science</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Physical Mastery</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Corporate Retreats</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Mentors</a></li>
<li><a className="text-sm text-blue-200/60 hover:text-yellow-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] text-blue-200/40 uppercase tracking-widest">© 2024 VergaeCampus Inc. All Rights Reserved.</span>
<div className="flex gap-6">
<a className="text-[10px] text-blue-200/40 hover:text-white uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[10px] text-blue-200/40 hover:text-white uppercase tracking-widest" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
