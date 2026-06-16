import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Dark Mode Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        toggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });

        // Parallax Effect
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            document.documentElement.style.setProperty('--cursor-x', `${x * 100}%`);
            document.documentElement.style.setProperty('--cursor-y', `${y * 100}%`);
        });

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxBg = document.querySelectorAll('#parallax-bg > div');
            
            parallaxBg.forEach(bg => {
                const speed = bg.getAttribute('data-speed');
                if (speed !== "0") {
                    bg.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="parallax-bg">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-200/40 dark:bg-pink-900/10 rounded-full blur-[120px] transition-colors duration-500" data-speed="0.05" style={{transform: 'translateY(0px)'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-200/40 dark:bg-pink-800/10 rounded-full blur-[100px] transition-colors duration-500" data-speed="0.08" style={{transform: 'translateY(0px)'}}></div>
<div className="absolute inset-0 bg-grid z-[1]" data-speed="0"></div>
</div>

<nav className="fixed dark:border-white/5 dark:bg-black/60 transition-all duration-300 bg-white/70 w-full z-50 border-neutral-200 border-b top-0 backdrop-blur-xl">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="dark:text-white flex items-center gap-2 text-xl font-semibold text-neutral-900 tracking-tighter" href="#">
<div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
    AURA
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
<a className="hover:text-black dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-black dark:hover:text-white transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-black dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors focus:outline-none" id="theme-toggle">
<iconify-icon className="block dark:hidden" icon="lucide:sun" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="lucide:moon" width="20"></iconify-icon>
</button>
<a className="hidden sm:block text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors" href="#">
                    Get Early Access
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 flex flex-col min-h-screen z-10 pt-48 pr-6 pb-32 pl-6 relative items-center justify-center" id="hero">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-[-1]">
<div className="absolute inset-0 border border-pink-500/20 rounded-full sonar-ring"></div>
<div className="absolute inset-0 border border-pink-500/20 rounded-full sonar-ring"></div>
<div className="absolute inset-0 border border-pink-500/20 rounded-full sonar-ring"></div>
</div>
<div className="reveal text-center max-w-4xl mx-auto space-y-8 active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-4 shadow-sm dark:shadow-none">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 dark:text-pink-200/80 tracking-wide uppercase">v2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-white dark:to-white/40">
            Silence the noise.<br/>Amplify the <span className="text-pink-600 dark:text-pink-500">signal.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Aura strips away the clutter of modern chat apps. No stories, no algorithm, no distractions. Just you and
            the people who matter most.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group relative px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-medium overflow-hidden shadow-lg shadow-neutral-500/20 dark:shadow-none">
<span className="relative z-10 flex items-center gap-2">
                        Download for iOS 
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-neutral-700 dark:bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="px-8 py-3 rounded-full font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    Watch the film
                </button>
</div>
</div>

<div className="reveal mt-20 relative w-full max-w-3xl mx-auto active">
<div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-2 shadow-2xl shadow-neutral-200 dark:shadow-pink-900/20 transition-colors duration-300">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent">
</div>
<div className="bg-neutral-50 dark:bg-black rounded-2xl overflow-hidden aspect-[16/10] relative border border-neutral-100 dark:border-white/5">

<div className="absolute top-0 w-full h-12 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between px-6 bg-white/50 dark:bg-white/5 backdrop-blur-md z-20">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-medium text-neutral-500">Aura — Private</div>
<iconify-icon className="text-neutral-500" icon="lucide:panel-right"></iconify-icon>
</div>

<div className="absolute bottom-0 w-full p-8 space-y-4">
<div className="flex gap-4 items-end">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-white/5">
</div>
<div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 p-4 rounded-2xl rounded-bl-none max-w-sm text-sm text-neutral-600 dark:text-neutral-300 shadow-sm">
                            Have you seen the new design system? It's incredibly clean.
                        </div>
</div>
<div className="flex gap-4 items-end flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-500/20 border border-pink-200 dark:border-pink-500/50 flex items-center justify-center text-pink-600 dark:text-pink-500 text-xs font-bold">
                            A</div>
<div className="bg-pink-600 p-4 rounded-2xl rounded-br-none max-w-sm text-sm text-white shadow-lg shadow-pink-600/20 dark:shadow-pink-900/20">
                            Just updated. The focus mode is exactly what I needed.
                        </div>
</div>
<div className="flex gap-4 items-end">
<div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-white/5">
</div>
<div className="flex gap-1">
<div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-700 rounded-full animate-bounce"></div>
<div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-700 rounded-full animate-bounce delay-75">
</div>
<div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-700 rounded-full animate-bounce delay-150">
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal mt-24 w-full max-w-5xl mx-auto">
<p className="text-center text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
            Trusted by teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale transition-all duration-300">
<iconify-icon className="hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:text-white text-black" height="36" icon="simple-icons:vercel" width="96"></iconify-icon>
<iconify-icon className="hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:text-white text-black" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:text-white text-black" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
<iconify-icon className="hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:text-white text-black" height="36" icon="simple-icons:notion" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-6xl mx-auto">
<div className="reveal mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-white">Designed for <span className="text-pink-600 dark:text-pink-500">flow state.</span></h2>
<p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-xl">We removed the unessential so you can focus on the conversation, not the interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden hover:border-pink-500/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-pink-500" icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<span className="text-xs font-mono text-pink-600 dark:text-pink-500 mb-4">01</span>
<div>
<h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Instant Sync</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Real-time message delivery with zero latency. Built on the edge for speed that feels like thought.</p>
</div>
<div className="mt-8 h-32 rounded-xl bg-gradient-to-br from-neutral-200/50 to-transparent dark:from-neutral-800/50 border border-neutral-200 dark:border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(236,72,153,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
</div>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden hover:border-pink-500/20 transition-all duration-500 delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-pink-500" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<span className="text-xs font-mono text-pink-600 dark:text-pink-500 mb-4">02</span>
<div>
<h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">E2E Encryption</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Your conversations are yours alone. Default encryption ensures not even we can read your messages.</p>
</div>
<div className="mt-8 flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce"></div>
<div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
<iconify-icon className="text-neutral-400 dark:text-neutral-600" icon="lucide:lock"></iconify-icon>
<div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
<div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce delay-75"></div>
</div>
</div>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden hover:border-pink-500/20 transition-all duration-500 delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-pink-500" icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<span className="text-xs font-mono text-pink-600 dark:text-pink-500 mb-4">03</span>
<div>
<h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">AI Summaries</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Catch up in seconds. Aura intelligently summarizes long threads so you never miss the context.</p>
</div>
<div className="mt-8 space-y-2">
<div className="h-2 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
<div className="h-2 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
<div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200 dark:border-white/5 relative z-10" id="testimonials">
<div className="max-w-6xl mx-auto">
<div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">Loved by <span className="text-pink-600 dark:text-pink-500">minimalists.</span></h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-white">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-white">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="reveal flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 p-8 rounded-3xl snap-start">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-6">"Finally, a chat app that doesn't feel like a casino. It's calm, fast, and beautiful."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
<div>
<div className="text-sm font-semibold text-neutral-900 dark:text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Product Designer @ Stripe</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 p-8 rounded-3xl snap-start">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-6">"The attention to detail is staggering. The way messages pop in feels organic."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<div>
<div className="text-sm font-semibold text-neutral-900 dark:text-white">Mark Chen</div>
<div className="text-xs text-neutral-500">Founder @ Vercel</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-white/5 p-8 rounded-3xl snap-start">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-6">"Aura brought sanity back to my team's communication. No more noise."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500"></div>
<div>
<div className="text-sm font-semibold text-neutral-900 dark:text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">CTO @ Startup</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="reveal text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-neutral-900 dark:text-white">Simple pricing.</h2>
<p className="text-neutral-500 dark:text-neutral-400">Start for free, upgrade for power.</p>

<div className="mt-8 inline-flex items-center bg-neutral-100 dark:bg-white/5 rounded-full p-1 border border-neutral-200 dark:border-white/10">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all">Yearly <span className="text-pink-600 dark:text-pink-500 text-[10px] ml-1">-20%</span></button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal p-8 rounded-3xl border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-neutral-900/20 backdrop-blur-sm flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-medium mb-2 text-neutral-900 dark:text-white">Personal</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-neutral-900 dark:text-white">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">For individuals keeping in touch with close friends.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-neutral-400 dark:text-neutral-500" icon="lucide:check"></iconify-icon> Unlimited messages
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-neutral-400 dark:text-neutral-500" icon="lucide:check"></iconify-icon> 1GB Storage
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-neutral-400 dark:text-neutral-500" icon="lucide:check"></iconify-icon> Mobile App
                        </li>
</ul>
<button className="dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors dark:text-white text-sm font-medium text-neutral-900 w-full border-neutral-200 border rounded-xl pt-3 pb-3">Get Started</button>
</div>

<div className="reveal relative p-8 rounded-3xl border border-pink-500/30 bg-white dark:bg-neutral-900/60 backdrop-blur-sm flex flex-col shadow-[0_0_40px_-10px_rgba(236,72,153,0.15)] dark:shadow-[0_0_40px_-10px_rgba(236,72,153,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 dark:bg-pink-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest text-white shadow-lg shadow-pink-500/40">Most Popular</div>
<div className="mb-8">
<h3 className="text-xl font-medium mb-2 text-neutral-900 dark:text-white">Pro</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-neutral-900 dark:text-white">$12</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">For power users who need clarity and focus.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-pink-600 dark:text-pink-500" icon="lucide:check"></iconify-icon> Everything in Personal
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-pink-600 dark:text-pink-500" icon="lucide:check"></iconify-icon> AI Summaries
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<iconify-icon className="text-pink-600 dark:text-pink-500" icon="lucide:check"></iconify-icon> Unlimited Storage
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition-colors font-medium text-sm text-white shadow-lg shadow-pink-900/20">Subscribe Now</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/5 pt-20 pb-10 bg-neutral-50 dark:bg-black relative z-10 transition-colors duration-300" id="footer">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-neutral-900 dark:text-white flex items-center gap-2 mb-6" href="#">
<div className="w-2 h-2 rounded-full bg-pink-500"></div>
                        AURA
                    </a>
<p className="text-sm text-neutral-500">Communication reimagined for the modern era.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-pink-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-pink-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-pink-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-pink-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-pink-500 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200 dark:border-white/5 gap-4">
<p className="text-xs text-neutral-500 dark:text-neutral-600">© 2024 Aura Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
