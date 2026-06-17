import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 1. Text Animation: Vertical clip slide down letter by letter
        document.querySelectorAll('.reveal-title').forEach(element => {
            const text = element.innerHTML;
            // Using a simple regex to wrap letters but preserve HTML tags if simple
            // For complex HTML this needs a parser, but for this title it's fine.
            // We'll just process text nodes.
            const splitText = (node) => {
                if(node.nodeType === 3) { // Text node
                    const content = node.textContent;
                    const wrapped = content.split('').map((char, i) => {
                        if(char === '\n') return '<br>';
                        if(char.trim() === '') return ' ';
                        return `<span style="animation-delay: ${i * 0.03}s">${char}</span>`;
                    }).join('');
                    const span = document.createElement('span');
                    span.className = "reveal-text";
                    span.innerHTML = wrapped;
                    node.replaceWith(span);
                } else if(node.nodeType === 1 && node.tagName !== 'BR') {
                   Array.from(node.childNodes).forEach(splitText);
                }
            };
            splitText(element);
        });

        // 2. Observer for Scroll Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // 3. Flashlight Effect
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.flashlight-card, .flashlight-border').forEach(card => {
                const rect = card.parentElement.getBoundingClientRect(); // Get parent relative pos
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
        
        // For specific cards inside sections, we might need to adjust relative to the card itself
        document.querySelectorAll('.group\\/section').forEach(section => {
            section.addEventListener('mousemove', (e) => {
                const card = section.querySelector('.flashlight-card');
                const border = section.querySelector('.flashlight-border');
                if(card && border) {
                     const rect = card.getBoundingClientRect();
                     const x = e.clientX - rect.left;
                     const y = e.clientY - rect.top;
                     card.style.setProperty('--x', `${x}px`);
                     card.style.setProperty('--y', `${y}px`);
                     border.style.setProperty('--x', `${x}px`);
                     border.style.setProperty('--y', `${y}px`);
                }
            });
        });


        // 4. Content Switching Logic (Slide 3)
        const cards = [
            document.getElementById('card-1'),
            document.getElementById('card-2'),
            document.getElementById('card-3')
        ];
        let activeIndex = 0;

        function updateCards() {
            cards.forEach((card, index) => {
                card.className = 'card-item w-full h-64 bg-neutral-800/90 rounded-2xl border border-white/5 p-6 flex flex-col justify-between shadow-xl'; // reset base
                
                // Calculate position relative to active
                let diff = (index - activeIndex + cards.length) % cards.length;
                
                if (diff === 0) {
                    card.classList.add('active');
                } else if (diff === 1) {
                    card.classList.add('next');
                } else {
                    card.classList.add('prev');
                }
            });

            // Update dots
            const dots = document.querySelectorAll('.dot-indicator');
            dots.forEach((dot, i) => {
                if(i === activeIndex) {
                    dot.classList.remove('bg-white/20');
                    dot.classList.add('bg-white');
                } else {
                    dot.classList.add('bg-white/20');
                    dot.classList.remove('bg-white');
                }
            });
        }

        document.getElementById('next-btn').addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % cards.length;
            updateCards();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + cards.length) % cards.length;
            updateCards();
        });

        // Auto rotate cards
        setInterval(() => {
            // activeIndex = (activeIndex + 1) % cards.length;
            // updateCards();
        }, 4000); // Optional auto rotation
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      


<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="1">

<div className="absolute inset-0 flex pointer-events-none z-0 opacity-20">
<div className="bg-clip-col flex-1 bg-neutral-900 border-r border-white/5 delay-[0ms]"></div>
<div className="bg-clip-col flex-1 bg-neutral-900 border-r border-white/5 delay-[50ms]"></div>
<div className="bg-clip-col flex-1 bg-neutral-900 border-r border-white/5 delay-[100ms]"></div>
<div className="bg-clip-col flex-1 bg-neutral-900 border-r border-white/5 delay-[150ms]"></div>
<div className="bg-clip-col flex-1 bg-neutral-900 border-r border-white/5 delay-[200ms]"></div>
</div>

<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 flashlight-card backdrop-blur-xl transition-all duration-700 hover:border-white/20">

<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="z-10 flex justify-between items-start">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">A</div>
<span className="text-xs font-medium tracking-wide text-neutral-400">ATAFLEX</span>
</div>
<span className="text-xs font-mono text-neutral-500">01/08</span>
</div>
<div className="z-10 space-y-6">
<h1 className="text-4xl font-light tracking-tight text-white leading-[1.1] reveal-title">

                     Digital<br/>Excellence<br/>Redefined.
                 </h1>
<p className="text-sm text-neutral-400 font-light leading-relaxed anim-element delay-300">
                     Comprehensive digital strategies tailored for growth. Transform your presence with Ataflex Solutions.
                 </p>
</div>
<div className="z-10 flex items-center gap-3 anim-element delay-500">
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 font-medium">Swipe to explore</span>
</div>

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="2">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">

<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-12 z-10">
<span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Trusted By</span>
<span className="text-xs font-mono text-neutral-500">02/08</span>
</div>
<div className="z-10 flex-1 flex flex-col justify-center gap-8">
<h2 className="text-2xl font-light tracking-tight text-white anim-element">Powering the<br/><span className="text-neutral-500">Industry Leaders</span></h2>

<div className="marquee-container w-full overflow-hidden relative h-32 flex flex-col justify-center gap-4 anim-element delay-100">

<div className="flex gap-8 marquee-content w-max">

<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon><span className="font-semibold tracking-tighter">ACME</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:triangle" width="24"></iconify-icon><span className="font-semibold tracking-tighter">VERTEX</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:circle" width="24"></iconify-icon><span className="font-semibold tracking-tighter">SPHERE</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:box" width="24"></iconify-icon><span className="font-semibold tracking-tighter">CUBE</span></div>

<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon><span className="font-semibold tracking-tighter">ACME</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:triangle" width="24"></iconify-icon><span className="font-semibold tracking-tighter">VERTEX</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:circle" width="24"></iconify-icon><span className="font-semibold tracking-tighter">SPHERE</span></div>
<div className="flex items-center gap-2 text-neutral-400"><iconify-icon icon="lucide:box" width="24"></iconify-icon><span className="font-semibold tracking-tighter">CUBE</span></div>
</div>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed anim-element delay-200">
                    Startups and Fortune 500 companies alike trust Ataflex to deliver scalable, high-performance digital solutions.
                </p>
</div>
<div className="z-10 pt-4 border-t border-white/5 anim-element delay-300">
<div className="flex items-center gap-2">
<img alt="Afzal" className="w-6 h-6 rounded-full grayscale opacity-70" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Afzal"/>
<span className="text-xs text-neutral-400">Afzal Pansuvi</span>
</div>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="3">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-8 z-10">
<span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Our Process</span>
<span className="text-xs font-mono text-neutral-500">03/08</span>
</div>

<div className="flex-1 relative card-stack flex items-center justify-center anim-element delay-100">

<div className="card-item active w-full h-64 bg-neutral-800/90 rounded-2xl border border-white/5 p-6 flex flex-col justify-between shadow-xl" id="card-1">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Discovery</h3>
<p className="text-xs text-neutral-400 leading-relaxed">We deep dive into your business model, analyzing market trends to find the perfect strategy.</p>
</div>
</div>

<div className="card-item next w-full h-64 bg-neutral-800/90 rounded-2xl border border-white/5 p-6 flex flex-col justify-between shadow-xl" id="card-2">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Development</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Clean, scalable code tailored to your needs. We build robust systems that last.</p>
</div>
</div>

<div className="card-item prev w-full h-64 bg-neutral-800/90 rounded-2xl border border-white/5 p-6 flex flex-col justify-between shadow-xl" id="card-3">
<div className="h-10 w-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Launch</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Seamless deployment and post-launch support to ensure your growth continues.</p>
</div>
</div>
</div>

<div className="mt-8 flex justify-between items-center z-10 anim-element delay-200">
<button className="p-3 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-white" id="prev-btn">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="flex gap-1.5">
<div className="h-1 w-1 rounded-full bg-white dot-indicator"></div>
<div className="h-1 w-1 rounded-full bg-white/20 dot-indicator"></div>
<div className="h-1 w-1 rounded-full bg-white/20 dot-indicator"></div>
</div>
<button className="p-3 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-white" id="next-btn">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="4">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-auto z-10">
<span className="text-xs text-neutral-500 font-mono">STEP 01</span>
<span className="text-xs font-mono text-neutral-500">04/08</span>
</div>
<div className="z-10 flex flex-col gap-6 my-auto">
<div className="h-12 w-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-2 anim-element">
<iconify-icon className="text-indigo-400" icon="lucide:compass" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-white anim-element delay-100">Strategic<br/>Discovery</h2>
<div className="h-px w-12 bg-indigo-500 anim-element delay-200"></div>
<p className="text-sm text-neutral-400 font-light leading-relaxed anim-element delay-300">
                    Before we write a single line of code, we analyze your goals. We map out the user journey to ensure every interaction adds value.
                </p>
<ul className="text-xs text-neutral-500 space-y-2 anim-element delay-400">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Market Analysis</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> Competitor Research</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check"></iconify-icon> User Personas</li>
</ul>
</div>
<div className="mt-auto pt-6 z-10">
<p className="text-[10px] uppercase tracking-widest text-neutral-600">Ataflex Solutions</p>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="5">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-auto z-10">
<span className="text-xs text-neutral-500 font-mono">STEP 02</span>
<span className="text-xs font-mono text-neutral-500">05/08</span>
</div>
<div className="z-10 flex flex-col gap-6 my-auto">
<div className="h-12 w-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-2 anim-element">
<iconify-icon className="text-purple-400" icon="lucide:palette" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-white anim-element delay-100">Custom<br/>Design</h2>
<div className="h-px w-12 bg-purple-500 anim-element delay-200"></div>
<p className="text-sm text-neutral-400 font-light leading-relaxed anim-element delay-300">
                    We craft interfaces that are not just beautiful, but functional. Minimalist aesthetics meet maximum usability.
                </p>

<div className="grid grid-cols-2 gap-2 mt-2 anim-element delay-400">
<div className="h-16 bg-neutral-800 rounded border border-white/5"></div>
<div className="h-16 bg-neutral-800/50 rounded border border-white/5"></div>
<div className="h-16 bg-neutral-800/50 rounded border border-white/5"></div>
<div className="h-16 bg-neutral-800 rounded border border-white/5"></div>
</div>
</div>
<div className="mt-auto pt-6 z-10">
<p className="text-[10px] uppercase tracking-widest text-neutral-600">Ataflex Solutions</p>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="6">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-auto z-10">
<span className="text-xs text-neutral-500 font-mono">STEP 03</span>
<span className="text-xs font-mono text-neutral-500">06/08</span>
</div>
<div className="z-10 flex flex-col gap-6 my-auto">
<div className="h-12 w-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-2 anim-element">
<iconify-icon className="text-emerald-400" icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-white anim-element delay-100">Robust<br/>Engineering</h2>
<div className="h-px w-12 bg-emerald-500 anim-element delay-200"></div>
<p className="text-sm text-neutral-400 font-light leading-relaxed anim-element delay-300">
                    Modern tech stacks ensuring speed, security, and scalability. We build digital assets that grow with you.
                </p>
<div className="flex gap-2 flex-wrap anim-element delay-400">
<span className="px-2 py-1 text-[10px] border border-white/10 rounded bg-white/5 text-neutral-300">Next.js</span>
<span className="px-2 py-1 text-[10px] border border-white/10 rounded bg-white/5 text-neutral-300">Tailwind</span>
<span className="px-2 py-1 text-[10px] border border-white/10 rounded bg-white/5 text-neutral-300">Node</span>
<span className="px-2 py-1 text-[10px] border border-white/10 rounded bg-white/5 text-neutral-300">Supabase</span>
</div>
</div>
<div className="mt-auto pt-6 z-10">
<p className="text-[10px] uppercase tracking-widest text-neutral-600">Ataflex Solutions</p>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="7">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-center mb-10 z-10">
<span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Feedback</span>
<span className="text-xs font-mono text-neutral-500">07/08</span>
</div>
<div className="z-10 flex-1 overflow-hidden relative">

<div className="absolute inset-x-0 top-0 bottom-0 marquee-container overflow-hidden">
<div className="flex flex-col gap-4 marquee-content h-max" style={{animationDirection: 'normal', animationDuration: '30s'}}>

<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<p className="text-xs text-neutral-300 italic mb-3">"Ataflex transformed our online presence completely. The design is sleek and the performance is unmatched."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
<span className="text-[10px] font-medium text-neutral-500">Sarah J., CEO</span>
</div>
</div>

<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<p className="text-xs text-neutral-300 italic mb-3">"Incredible attention to detail. The team, led by Afzal, truly understands modern web needs."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
<span className="text-[10px] font-medium text-neutral-500">Mike R., Founder</span>
</div>
</div>

<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<p className="text-xs text-neutral-300 italic mb-3">"ROI increased by 200% after the redesign. Highly recommended services."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
<span className="text-[10px] font-medium text-neutral-500">Elena T., Marketing</span>
</div>
</div>

<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<p className="text-xs text-neutral-300 italic mb-3">"Ataflex transformed our online presence completely. The design is sleek and the performance is unmatched."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-700 rounded-full"></div>
<span className="text-[10px] font-medium text-neutral-500">Sarah J., CEO</span>
</div>
</div>
</div>
</div>
</div>
<div className="z-10 pt-6 mt-4 border-t border-white/5">
<div className="flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-500 border border-black"></div>
</div>
<span className="text-[10px] text-neutral-500">100+ Happy Clients</span>
</div>
</div>
</div>
</section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 group/section" data-index="8">
<div className="relative w-full max-w-sm aspect-[3/4] bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center items-center text-center p-8 flashlight-card backdrop-blur-md">
<div className="absolute inset-[1px] rounded-3xl flashlight-border pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 z-10">
<span className="text-xs font-mono text-neutral-500">08/08</span>
</div>
<div className="z-10 space-y-8">
<div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-full text-indigo-400 anim-element">
<iconify-icon icon="lucide:zap" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-light tracking-tight text-white anim-element delay-100">Ready to<br/>Scale Up?</h2>
<p className="text-sm text-neutral-400 anim-element delay-200">
                    Let's build something extraordinary together. Contact us today to start your digital transformation.
                </p>

<a className="relative inline-flex group btn-beam anim-element delay-300" href="#">
<div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
<div className="border-beam"></div>
<button className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-black font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        Get Started
                        <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</a>
</div>
<div className="absolute bottom-8 z-10">
<p className="text-xs text-neutral-600">Afzal Pansuvi © 2023</p>
<p className="text-[10px] text-neutral-700 mt-1">ataflexsolutions.com</p>
</div>
</div>
</section>


    </>
  );
}
