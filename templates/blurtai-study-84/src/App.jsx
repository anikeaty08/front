import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intersection Observer for reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for floating elements
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    document.querySelectorAll('.parallax-slow').forEach(el => {
                        el.style.transform = `translateY(${scrolled * 0.1}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Smooth hover effect for cards
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

        // Fill-in-the-blank interaction simulation
        document.querySelectorAll('.fill-blank:not(.filled)').forEach(blank => {
            blank.addEventListener('click', () => {
                blank.classList.add('filled');
                blank.textContent = 'genetically';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="blob absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl float-animation"></div>
<div className="blob absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-3xl float-delayed"></div>
<div className="blob absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 blur-3xl float-animation" style={{animationDelay: '-3s'}}></div>
</div>

<nav className="nav-glass fixed top-0 left-0 right-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">B</span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">BlurtAI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#subjects">Subjects</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">Sign in</button>
<button className="btn-primary px-4 py-2 rounded-xl text-white text-sm font-medium">
                        Start free
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto">
<div className="reveal-up inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-sm text-gray-600">Built for UK students · GCSE &amp; A-Level</span>
</div>
<h1 className="reveal-up stagger-1 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                    Revision that<br/>
<span className="text-gradient">actually teaches</span>
</h1>
<p className="reveal-up stagger-2 text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop memorising content you'll forget. BlurtAI guides you through concepts, tests your understanding as you learn, and adapts when you struggle.
                </p>
<div className="reveal-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="btn-primary px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-2 w-full sm:w-auto justify-center">
<span>Start revising free</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="btn-secondary px-8 py-4 rounded-2xl text-gray-700 font-medium flex items-center gap-2 w-full sm:w-auto justify-center">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>Watch demo</span>
</button>
</div>
<p className="reveal-up stagger-4 text-sm text-gray-500 mt-6">
                    No card required · Works with AQA, Edexcel, OCR, WJEC
                </p>
</div>

<div className="reveal-scale mt-16 relative">
<div className="glass-card-dark p-4 sm:p-6 max-w-4xl mx-auto">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<span className="text-xs text-gray-400 ml-2">Biology · Cell Division</span>
</div>
<div className="bg-gray-900/50 rounded-xl p-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-gray-300 leading-relaxed">
<span className="text-white font-medium">Mitosis</span> is the process of cell division that produces two 
                                    <span className="highlight-yellow text-white">genetically identical</span> daughter cells. 
                                    It happens in stages: <span className="highlight-green text-white">prophase, metaphase, anaphase, and telophase</span>.
                                </p>
<div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
<p className="text-sm text-gray-400 mb-2">Quick check:</p>
<p className="text-gray-300">
                                        Mitosis produces <span className="fill-blank filled">two</span> daughter cells that are 
                                        <span className="fill-blank">___________</span> identical.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute -right-4 top-1/4 glass-card px-4 py-3 float-delayed">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-gray-700">Explains concepts first</span>
</div>
</div>
<div className="hidden lg:block absolute -left-4 bottom-1/4 glass-card px-4 py-3 float-animation">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-gray-700">Tests during learning</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 relative">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Sound familiar?
                </h2>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="reveal-up stagger-1 glass-card p-6 card-hover">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-orange-500" icon="solar:confounded-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-gray-700 leading-relaxed">
                                "I <span className="font-medium">felt confident</span> revising, but then the exam came and my mind went blank."
                            </p>
</div>
</div>
</div>
<div className="reveal-up stagger-2 glass-card p-6 card-hover">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-500" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-gray-700 leading-relaxed">
                                "I spent <span className="font-medium">hours making flashcards</span>, but I still couldn't answer exam questions properly."
                            </p>
</div>
</div>
</div>
<div className="reveal-up stagger-3 glass-card p-6 card-hover">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-purple-500" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-gray-700 leading-relaxed">
                                "I don't even know <span className="font-medium">what I don't understand</span> until it's too late."
                            </p>
</div>
</div>
</div>
<div className="reveal-up stagger-4 glass-card p-6 card-hover">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-500" icon="solar:sleeping-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-gray-700 leading-relaxed">
                                "Reading notes over and over <span className="font-medium">doesn't stick</span>. But what else am I supposed to do?"
                            </p>
</div>
</div>
</div>
</div>
<div className="reveal-up text-center mt-12">
<p className="text-xl text-gray-700">
                    The problem isn't how hard you work.<br/>
<span className="text-gradient font-medium">It's how most revision tools work.</span>
</p>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    A different kind of revision
                </h2>
<p className="reveal-up stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
                    BlurtAI doesn't just test what you know. It teaches what you don't.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="reveal-up glass-card p-6 border-red-200/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="font-medium text-gray-900">Flashcard apps</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Test recall without teaching</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">You make the cards (time drain)</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">No exam-style practice</span>
</li>
</ul>
</div>

<div className="reveal-up stagger-1 glass-card p-6 border-orange-200/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-500" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="font-medium text-gray-900">Quiz generators</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Only test at the end</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Wrong? Too bad, move on</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">No understanding of why</span>
</li>
</ul>
</div>

<div className="reveal-up stagger-2 glass-card p-6 border-green-200/50 ring-2 ring-green-200/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="font-medium text-gray-900">BlurtAI</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium">Teaches concepts step-by-step</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium">Tests understanding as you learn</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium">Adapts when you struggle</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    How BlurtAI teaches
                </h2>
<p className="reveal-up stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
                    Every lesson follows a proven learning flow — explain, test, adapt, repeat.
                </p>
</div>

<div className="reveal-up mb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-sm font-semibold text-indigo-600">1</span>
<span className="text-sm font-medium text-indigo-600">Guided lessons</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                            Concepts explained clearly
                        </h3>
<p className="text-gray-600 leading-relaxed mb-6">
                            Every topic starts with a clear, step-by-step explanation. Key terms are highlighted. Complex ideas are broken down. You understand before you're tested.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Plain language explanations</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Key terms highlighted</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Bite-sized chunks</span>
</li>
</ul>
</div>
<div className="glass-card-dark p-6 float-animation">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs text-gray-400">Chemistry · Atomic Structure</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<p className="text-gray-300 text-sm leading-relaxed">
                                    An <span className="text-white font-medium highlight-yellow">atom</span> is the smallest particle of an element that can exist. 
                                    Atoms contain three types of subatomic particles:
                                </p>
</div>
<div className="pl-9 space-y-2">
<div className="flex items-center gap-2 text-sm">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="text-gray-300"><span className="text-white font-medium">Protons</span> — positive charge</span>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="text-gray-300"><span className="text-white font-medium">Neutrons</span> — no charge</span>
</div>
<div className="flex items-center gap-2 text-sm">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="text-gray-300"><span className="text-white font-medium">Electrons</span> — negative charge</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-up mb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 glass-card-dark p-6 float-delayed">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<span className="text-xs text-gray-400">Testing understanding...</span>
</div>
<div className="space-y-4">
<p className="text-gray-300 text-sm leading-relaxed">
                                Complete the sentence:
                            </p>
<div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
<p className="text-gray-300 text-sm leading-relaxed">
                                    Protons have a <span className="fill-blank filled">positive</span> charge and are found in the 
                                    <span className="fill-blank">___________</span> of the atom.
                                </p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors">nucleus</button>
<button className="px-3 py-1.5 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors">shell</button>
<button className="px-3 py-1.5 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors">orbit</button>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-sm font-semibold text-purple-600">2</span>
<span className="text-sm font-medium text-purple-600">Inline testing</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                            Test as you learn
                        </h3>
<p className="text-gray-600 leading-relaxed mb-6">
                            Key concepts turn into fill-in-the-blank questions. You're tested on what you just learned, while it's fresh. Immediate feedback tells you if you've got it.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Active recall built-in</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Instant feedback</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Hints when you're stuck</span>
</li>
</ul>
</div>
</div>
</div>

<div className="reveal-up mb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm font-semibold text-green-600">3</span>
<span className="text-sm font-medium text-green-600">Adaptive learning</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                            Adapts to your mistakes
                        </h3>
<p className="text-gray-600 leading-relaxed mb-6">
                            Get something wrong? BlurtAI doesn't just mark it red. It explains why, offers a hint, and comes back to it later. The lesson adapts to what you actually need.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Targeted re-teaching</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Spaced repetition on weak areas</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Progress tracking</span>
</li>
</ul>
</div>
<div className="glass-card-dark p-6 float-animation">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<span className="text-xs text-gray-400">Adapting lesson...</span>
</div>
<div className="space-y-4">
<div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<p className="text-red-300 text-sm">Not quite — electrons are in the shells, not the nucleus.</p>
</div>
</div>
</div>
<div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
<div className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<p className="text-indigo-300 text-sm">Hint: The nucleus contains protons and neutrons. Electrons orbit around it in shells.</p>
</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
<iconify-icon className="text-gray-400" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-gray-400">This concept will be revisited in 3 questions</span>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-up">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 glass-card p-6 float-delayed">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-gray-500">Exam-style question · 6 marks</span>
<span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium">4/6 marks</span>
</div>
<div className="space-y-4">
<p className="text-gray-700 text-sm font-medium">
                                Describe the structure of an atom. [6 marks]
                            </p>
<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
<p className="text-gray-600 text-sm leading-relaxed">
<span className="bg-green-100 px-1 rounded">An atom has a nucleus in the centre</span> which contains 
                                    <span className="bg-green-100 px-1 rounded">protons and neutrons</span>. 
                                    <span className="bg-green-100 px-1 rounded">Electrons orbit the nucleus in shells</span>. 
                                    <span className="bg-green-100 px-1 rounded">Protons are positive, electrons are negative</span>.
                                </p>
</div>
<div className="space-y-2">
<p className="text-sm font-medium text-gray-700">Examiner feedback:</p>
<div className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-gray-600">Correctly described nucleus location</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-gray-600">Identified particles in nucleus</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-gray-600">Missing: relative masses of particles</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs text-gray-600">Missing: neutrons have no charge</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-sm font-semibold text-amber-600">4</span>
<span className="text-sm font-medium text-amber-600">Exam practice</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                            Real examiner feedback
                        </h3>
<p className="text-gray-600 leading-relaxed mb-6">
                            Practice exam-style questions and get feedback based on actual mark schemes. See exactly what you got, what you missed, and how to improve.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Based on real mark schemes</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Point-by-point breakdown</span>
</li>
<li className="flex items-center gap-3 text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm">Clear improvement guidance</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="subjects">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    All your subjects, one place
                </h2>
<p className="reveal-up stagger-1 text-lg text-gray-600 max-w-2xl mx-auto">
                    Built for UK exams. Supporting all major boards.
                </p>
</div>
<div className="reveal-up flex flex-wrap justify-center gap-3 mb-12">
<span className="glass-card px-4 py-2 text-sm font-medium text-gray-700">AQA</span>
<span className="glass-card px-4 py-2 text-sm font-medium text-gray-700">Edexcel</span>
<span className="glass-card px-4 py-2 text-sm font-medium text-gray-700">OCR</span>
<span className="glass-card px-4 py-2 text-sm font-medium text-gray-700">WJEC</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal-up glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">Biology</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-1 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:atom-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">Chemistry</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-2 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:magnet-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">Physics</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-3 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">Maths</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-1 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:book-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">English</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-2 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:globe-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">Geography</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-3 glass-card p-5 card-hover">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-900 mb-1">History</h4>
<p className="text-sm text-gray-500">GCSE &amp; A-Level</p>
</div>
<div className="reveal-up stagger-4 glass-card p-5 card-hover border-dashed border-2 border-gray-200 bg-transparent">
<div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
<iconify-icon className="text-gray-400" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h4 className="font-medium text-gray-700 mb-1">More subjects</h4>
<p className="text-sm text-gray-500">Coming soon</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<div className="reveal-up glass-card p-8 sm:p-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-500" icon="solar:cards-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-indigo-600">Smart flashcards</span>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                            Flashcards that write themselves
                        </h3>
<p className="text-gray-600 leading-relaxed">
                            BlurtAI automatically generates flashcards from your lessons. Review key terms, definitions, and facts with spaced repetition — without spending hours making cards.
                        </p>
</div>
<div className="relative">
<div className="glass-card-dark p-5 rotate-[-3deg] absolute top-4 left-4 w-full opacity-60">
<p className="text-gray-400 text-sm">What is the function of mitochondria?</p>
</div>
<div className="glass-card-dark p-5 relative z-10">
<p className="text-gray-400 text-sm mb-3">What is the function of mitochondria?</p>
<div className="border-t border-gray-700 pt-3">
<p className="text-gray-200 text-sm">The mitochondria is the site of aerobic respiration, producing ATP (energy) for the cell.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Students love it
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="reveal-up glass-card p-6 card-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-700 leading-relaxed mb-4">
                        "Finally something that actually teaches me instead of just testing. I went from a 5 to an 8 in Chemistry."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-medium text-sm">S</div>
<div>
<p className="text-sm font-medium text-gray-900">Sophie T.</p>
<p className="text-xs text-gray-500">Year 11, GCSE Student</p>
</div>
</div>
</div>
<div className="reveal-up stagger-1 glass-card p-6 card-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-700 leading-relaxed mb-4">
                        "The exam feedback is incredible. It's like having a teacher mark your work instantly."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-medium text-sm">J</div>
<div>
<p className="text-sm font-medium text-gray-900">James M.</p>
<p className="text-xs text-gray-500">Year 13, A-Level Student</p>
</div>
</div>
</div>
<div className="reveal-up stagger-2 glass-card p-6 card-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-700 leading-relaxed mb-4">
                        "My daughter actually enjoys revising now. The way it adapts when she gets things wrong is so helpful."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-medium text-sm">R</div>
<div>
<p className="text-sm font-medium text-gray-900">Rachel P.</p>
<p className="text-xs text-gray-500">Parent</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal-up text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Questions &amp; answers
                </h2>
</div>
<div className="space-y-4">
<div className="reveal-up glass-card overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Is BlurtAI free to use?</span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            Yes! You can start using BlurtAI completely free with no card required. We offer a generous free tier that gives you full access to lessons and features. Premium plans are available for students who want unlimited access.
                        </div>
</details>
</div>
<div className="reveal-up stagger-1 glass-card overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">What exam boards do you support?</span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            BlurtAI supports all major UK exam boards including AQA, Edexcel, OCR, and WJEC. Our content is aligned with current specifications and mark schemes.
                        </div>
</details>
</div>
<div className="reveal-up stagger-2 glass-card overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">How is this different from ChatGPT?</span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            ChatGPT is a general-purpose AI that can hallucinate and doesn't understand exam requirements. BlurtAI is purpose-built for UK students with structured lessons, real mark scheme feedback, and adaptive learning that responds to your mistakes.
                        </div>
</details>
</div>
<div className="reveal-up stagger-3 glass-card overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">Can I use this for university study?</span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            Absolutely. While we're primarily designed for GCSE and A-Level students, BlurtAI supports undergraduate study and can be customised for any subject. You can also create lessons from your own notes.
                        </div>
</details>
</div>
<div className="reveal-up stagger-4 glass-card overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium text-gray-900">How do the smart flashcards work?</span>
<iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            As you complete lessons, BlurtAI automatically identifies key terms and concepts and turns them into flashcards. These cards use spaced repetition to help you remember what you've learned, focusing on areas where you need more practice.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="reveal-up glass-card p-8 sm:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                        Ready to actually learn?
                    </h2>
<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Start revising with AI that teaches, tests, and adapts — all in one place. Free to start, no card required.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="btn-primary px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-2 justify-center">
<span>Start revising free</span>
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex flex-wrap justify-center gap-6 mt-8">
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>No card required</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>GCSE &amp; A-Level ready</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>All exam boards</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
<div className="max-w-7xl mx-auto">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">B</span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">BlurtAI</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        AI-powered revision that actually teaches. Built for UK students.
                    </p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#features">Features</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#subjects">Subjects</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Study guides</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200/50">
<p className="text-sm text-gray-500">© 2024 BlurtAI. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<iconify-icon icon="solar:tiktok-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
