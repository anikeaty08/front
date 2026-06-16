import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Letter-by-letter Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const splitTargets = document.querySelectorAll('.split-text');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            splitTargets.forEach(el => {
                // Prepare text but don't animate yet
                wrapLetters(el);
                observer.observe(el);
            });

            function wrapLetters(el) {
                const text = el.innerText;
                el.innerHTML = '';
                const words = text.split(' ');
                
                words.forEach((word, wordIndex) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.whiteSpace = 'nowrap';
                    wordSpan.style.marginRight = '0.25em'; 
                    
                    [...word].forEach((char, charIndex) => {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'letter-animate';
                        wordSpan.appendChild(span);
                    });
                    
                    el.appendChild(wordSpan);
                });
            }

            function animateElement(el) {
                const letters = el.querySelectorAll('.letter-animate');
                letters.forEach((letter, index) => {
                    letter.style.
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="glow-blob -top-[20%] -left-[10%]"></div>
<div className="glow-blob top-[40%] right-[10%] w-[500px] h-[500px] opacity-60"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 glass-nav rounded-full px-2 py-2">
<div className="flex items-center justify-between pl-4 pr-2">
<a className="font-display font-semibold text-lg tracking-tight text-white flex items-center gap-2.5" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-900/40">
<iconify-icon icon="lucide:command" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-sm">WEBFLOW<span className="text-zinc-500">MASTERY</span></span>
</a>
<div className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-zinc-800/50" href="#curriculum">Curriculum</a>
<a className="hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-zinc-800/50" href="#instructor">Mentor</a>
<a className="hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-zinc-800/50" href="#testimonials">Reviews</a>
</div>
<a className="text-white text-xs font-medium bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group" href="#pricing">
                Get Access
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 z-10">
<div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-[10px] font-semibold uppercase tracking-widest">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
                    Live Masterclass
                </div>
<h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1] split-text">
                    Design interfaces that feel inevitable.
                </h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed split-text font-light">
                    Join the exclusive live workshop on building high-converting, aesthetic systems. Stop guessing, start designing with intent.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 overflow-hidden" href="#pricing">
<span className="relative z-10">Reserve My Spot</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
</a>
<div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">JP</div>
<div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-600 flex items-center justify-center text-[10px] text-zinc-200">MK</div>
</div>
<span className="text-xs text-zinc-400"><span className="text-white font-medium">400+</span> joined</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] flex items-center justify-center order-1 lg:order-2">
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-[100px]"></div>
<div className="relative w-full aspect-square max-w-md">

<div className="absolute top-10 left-0 w-3/4 glass-panel rounded-2xl p-6 z-20 transform hover:-translate-y-2 transition-transform duration-700">
<div className="flex justify-between items-center mb-6">
<div className="h-8 w-8 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:layers" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-zinc-600 tracking-widest">STRUCTURE_V1</span>
</div>
<div className="space-y-3 opacity-60">
<div className="h-1.5 w-1/3 bg-zinc-600 rounded-full"></div>
<div className="h-1.5 w-full bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-zinc-700 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-12 right-0 w-3/4 glass-panel rounded-2xl p-6 z-30 transform translate-y-4 hover:translate-y-2 transition-transform duration-700 delay-100 border-red-500/20 shadow-[0_20px_50px_-20px_rgba(220,38,38,0.2)]">
<div className="flex justify-between items-center mb-6">
<div className="h-8 w-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-inner"></div>
<div className="space-y-2 flex-1">
<div className="h-1.5 w-full bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 px-6 z-10">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">Stop staring at a blank canvas</h2>
<p className="text-zinc-500 mt-3 text-sm font-light">Most designers waste hours moving pixels around. There is a better way.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-3xl p-8 border border-zinc-800/60 bg-zinc-900/10 opacity-70 hover:opacity-100 transition-all duration-500">
<div className="absolute top-8 right-8 text-zinc-600">
<iconify-icon icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl text-zinc-400 mb-4">The Guesswork</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-500 font-light">
<span className="mt-1 block h-1 w-1 rounded-full bg-zinc-700"></span>
                            Randomly picking colors that don't match.
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-light">
<span className="mt-1 block h-1 w-1 rounded-full bg-zinc-700"></span>
                            Layouts break when viewed on mobile.
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-light">
<span className="mt-1 block h-1 w-1 rounded-full bg-zinc-700"></span>
                            Endless revisions because it "doesn't feel right".
                        </li>
</ul>
</div>

<div className="group relative rounded-3xl p-8 border border-red-500/20 bg-gradient-to-b from-red-900/10 to-transparent shadow-[0_0_60px_-20px_rgba(220,38,38,0.1)] transition-all duration-500 hover:scale-[1.01]">
<div className="absolute top-8 right-8 text-red-500">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl text-white mb-4">The System</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                            Pre-built rules for spacing and type.
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                            Layouts that adapt automatically to any screen.
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:check" width="14"></iconify-icon>
                            Confident decisions backed by design theory.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 border-t border-zinc-900/50" id="instructor">
<div className="max-w-5xl mx-auto">
<div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border-zinc-800">

<div className="relative group shrink-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/50 transition-colors duration-500 shadow-2xl">
<img alt="Instructor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full text-[10px] font-medium text-white tracking-wide whitespace-nowrap">
                        Your Mentor
                    </div>
</div>

<div className="flex-1 text-center md:text-left">
<h2 className="font-display text-2xl font-semibold text-white mb-2">Taught by Alex Rivera</h2>
<p className="text-red-400 text-xs font-medium uppercase tracking-widest mb-6">Senior Product Designer</p>
<p className="text-zinc-400 text-sm leading-relaxed font-light mb-8 max-w-lg mx-auto md:mx-0">
                        I've spent the last decade designing for high-growth startups like Stripe and Linear. I realized most tutorials teach tools, not <em>thinking</em>. I created this masterclass to show you exactly how I work, from blank canvas to shipped product.
                    </p>
<div className="grid grid-cols-3 gap-6 border-t border-zinc-800 pt-6">
<div>
<div className="text-2xl font-display font-semibold text-white">10+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Years Exp</div>
</div>
<div>
<div className="text-2xl font-display font-semibold text-white">50k+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Students</div>
</div>
<div>
<div className="text-2xl font-display font-semibold text-white">4.9</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Rating</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10" id="curriculum">
<div className="max-w-6xl mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
                    What you will master
                </h2>
<p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                    A complete breakdown of the modern web design process, from typography to technical handoff.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover-card-effect group relative cursor-default">
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
<iconify-icon className="text-red-500" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" icon="lucide:pen-tool" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">Systematic Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                        Learn to build design systems that scale. Move away from ad-hoc decisions to predictable, reusable component libraries.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-card-effect group relative cursor-default">
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
<iconify-icon className="text-red-500" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" icon="lucide:layout-grid" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">Advanced Layouts</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                        Master CSS Grid and Flexbox mental models. Create complex, responsive layouts that break the standard column mold.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-card-effect group relative cursor-default">
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
<iconify-icon className="text-red-500" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" icon="lucide:sparkles" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">Micro-interactions</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                        Add polish with subtle animations. Understand the physics of motion to make your interfaces feel alive and responsive.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 bg-zinc-900/20 border-y border-zinc-900 backdrop-blur-sm" id="testimonials">
<div className="max-w-6xl mx-auto">
<h2 className="font-display text-3xl font-semibold text-center text-white mb-16 tracking-tight">Designers finding their flow</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid glass-panel p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-200 text-xs font-bold">JD</div>
<div>
<div className="text-sm text-white font-medium">James D.</div>
<div className="text-xs text-zinc-500">Freelancer</div>
</div>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed">"Honestly, I was stuck copying templates for years. This course finally clicked the logic of layout for me. My rates doubled last month."</p>
</div>

<div className="break-inside-avoid glass-panel p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-200 text-xs font-bold">SM</div>
<div>
<div className="text-sm text-white font-medium">Sarah M.</div>
<div className="text-xs text-zinc-500">Frontend Dev</div>
</div>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed">"I'm a developer who hated CSS. The 'Systematic Design' module changed everything. Now I actually enjoy styling my apps. Highly recommend."</p>
</div>

<div className="break-inside-avoid glass-panel p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-200 text-xs font-bold">LK</div>
<div>
<div className="text-sm text-white font-medium">Liam K.</div>
<div className="text-xs text-zinc-500">Agency Owner</div>
</div>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed">"Sent my whole junior design team to this webinar. The ROI was instant. The quality of our deliverables has never been higher."</p>
</div>

<div className="break-inside-avoid glass-panel p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-200 text-xs font-bold">EP</div>
<div>
<div className="text-sm text-white font-medium">Elena P.</div>
<div className="text-xs text-zinc-500">Student</div>
</div>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed">"The best investment I made for my portfolio. The micro-interactions section is pure gold. 10/10."</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 z-10" id="pricing">
<div className="max-w-5xl mx-auto w-full">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Choose your tier</h2>
<p className="text-zinc-400 text-sm">Secure your spot for the upcoming cohort.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full hover:border-zinc-700 transition-all duration-300">
<div className="mb-6">
<h3 className="text-base font-medium text-zinc-400 uppercase tracking-wider mb-2">Live Access</h3>
<div className="flex items-baseline gap-1">
<span className="font-display text-4xl font-semibold text-white">₹9,500</span>
<span className="text-zinc-500 text-sm">/ seat</span>
</div>
<p className="text-zinc-500 text-sm mt-4 font-light">Perfect for designers wanting to audit the course and learn at their own pace.</p>
</div>
<div className="w-full h-px bg-zinc-800/50 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle" width="16"></iconify-icon>
                            Access to live webinar sessions
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle" width="16"></iconify-icon>
                            Course recordings (Lifetime)
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-600" icon="lucide:check-circle" width="16"></iconify-icon>
                            Basic component library
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-white text-sm font-medium transition-all">
                        Select Standard
                    </button>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full relative overflow-hidden border-red-500/30 shadow-[0_0_50px_-20px_rgba(220,38,38,0.15)] group">
<div className="absolute top-0 right-0 p-6">
<div className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            Most Popular
                        </div>
</div>
<div className="mb-6">
<h3 className="text-base font-medium text-red-400 uppercase tracking-wider mb-2">Mentorship</h3>
<div className="flex items-baseline gap-1">
<span className="font-display text-4xl font-semibold text-white">₹30,000</span>
<span className="text-zinc-500 text-sm">/ seat</span>
</div>
<p className="text-zinc-400 text-sm mt-4 font-light">Direct feedback and code reviews to ensure you master every concept.</p>
</div>
<div className="w-full h-px bg-zinc-800/50 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-red-500" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="font-medium">Everything in Live Access</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500/70" icon="lucide:check-circle" width="16"></iconify-icon>
                            1-on-1 Portfolio Review
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500/70" icon="lucide:check-circle" width="16"></iconify-icon>
                            Private Discord Community
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-red-500/70" icon="lucide:check-circle" width="16"></iconify-icon>
                            Commercial Project License
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
                        Join Mentorship
                        <iconify-icon className="opacity-70" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 text-center">
<div className="inline-flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
<span>Secure payment via Stripe. 14-day money-back guarantee.</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 z-10 max-w-3xl mx-auto">
<h2 className="font-display text-2xl text-white mb-10 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="details-animated group glass-panel rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-zinc-300 font-medium text-sm list-none select-none hover:text-white transition-colors">
                    Do I need to know how to code?
                    <iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-zinc-500" icon="lucide:plus" width="16"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed">
                    Not strictly. We focus on the design logic and systems. However, knowing basic HTML/CSS helps you understand <em>why</em> the designs work, which we cover in the "Layouts" module.
                </div>
</details>
<details className="details-animated group glass-panel rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-zinc-300 font-medium text-sm list-none select-none hover:text-white transition-colors">
                    Is this for beginners?
                    <iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-zinc-500" icon="lucide:plus" width="16"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed">
                    It is beginner-friendly but moves fast. We skip the "what is a pixel" stuff and jump straight into building professional-grade systems. If you are brand new, you will learn the right habits from day one.
                </div>
</details>
<details className="details-animated group glass-panel rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-zinc-300 font-medium text-sm list-none select-none hover:text-white transition-colors">
                    What if I miss the live session?
                    <iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-zinc-500" icon="lucide:plus" width="16"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed">
                    No worries. All sessions are recorded in 4K and uploaded to your student dashboard within 2 hours, so you can watch them anytime, forever.
                </div>
</details>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-20 pb-10 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="font-display font-semibold text-lg tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-white text-[10px] font-bold">W</div>
                        WEBFLOW<span className="text-zinc-600">MASTERY</span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Empowering the next generation of digital designers with systems thinking and code.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-red-400 transition-colors" href="#">Curriculum</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Workshops</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-red-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Design Kit</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-red-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-red-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-light">© 2024 Webflow Mastery Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
