import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Scroll Animations
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

            // Parallax Effect
            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                if (!heroBg) return;
                const scrollPosition = window.scrollY;
                if (scrollPosition < window.innerHeight) {
                    heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                }
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Pipeline Animation
            const pipelineContainer = document.querySelector('.pipeline-container');
            const pipelineBlocks = document.querySelectorAll('.pipeline-block');
            const pipelineArrows = document.querySelectorAll('.pipeline-arrow');
            let hasAnimated = false;
            const pipelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        pipelineBlocks.forEach((block, index) => {
                            setTimeout(() => block.classList.add('revealed'), index * 200);
                        });
                        pipelineArrows.forEach((arrow, index) => {
                            setTimeout(() => arrow.classList.add('revealed'), (index * 200) + 150);
                        });
                        pipelineObserver.unobserve(entry.target);
                    }
                });
            }, { root: null, rootMargin: '0px', threshold: 0.2 });
            if (pipelineContainer) pipelineObserver.observe(pipelineContainer);

            // ==========================================
            // Entry Cards — Drag to Scroll
            // ==========================================
            const track = document.querySelector('.entry-cards-track');
            const cards = document.querySelectorAll('.entry-card');
            const dots = document.querySelectorAll('.entry-dot');
            
            if (track && cards.length) {
                let isDragging = false;
                let startX = 0;
                let scrollStart = 0;
                let hasMoved = false;

                // Mouse drag
                track.addEventListener('mousedown', (e) => {
                    isDragging = true;
                    hasMoved = false;
                    startX = e.pageX;
                    scrollStart = track.scrollLeft;
                    track.classList.add('is-dragging');
                    e.preventDefault();
                });

                window.addEventListener('mousemove', (e) => {
                    if (!isDragging) return;
                    const dx = e.pageX - startX;
                    if (Math.abs(dx) > 3) hasMoved = true;
                    track.scrollLeft = scrollStart - dx;
                });

                window.addEventListener('mouseup', () => {
                    if (!isDragging) return;
                    isDragging = false;
                    track.classList.remove('is-dragging');
                    // Snap to nearest card after drag
                    if (hasMoved) snapToNearest();
                });

                // Snap logic
                function snapToNearest() {
                    const trackRect = track.getBoundingClientRect();
                    const trackPadding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
                    let closest = 0;
                    let closestDist = Infinity;
                    
                    cards.forEach((card, i) => {
                        const cardRect = card.getBoundingClientRect();
                        const dist = Math.abs(cardRect.left - trackRect.left - trackPadding);
                        if (dist < closestDist) {
                            closestDist = dist;
                            closest = i;
                        }
                    });

                    scrollToCard(closest);
                }

                function scrollToCard(index) {
                    const card = cards[index];
                    if (!card) return;
                    const trackPadding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
                    const targetScroll = card.offsetLeft - trackPadding;
                    track.scrollTo({ left: targetScroll, behavior: 'smooth' });
                    updateDots(index);
                }

                function updateDots(activeIndex) {
                    dots.forEach((dot, i) => {
                        if (i === activeIndex) {
                            dot.classList.add('active');
                            dot.style.width = '24px';
                            dot.style.backgroundColor = '#1c1917';
                        } else {
                            dot.classList.remove('active');
                            dot.style.width = '8px';
                            dot.style.backgroundColor = '#d6d3d1';
                        }
                    });
                }

                // Dot clicks
                dots.forEach((dot) => {
                    dot.addEventListener('click', () => {
                        const index = parseInt(dot.dataset.index);
                        scrollToCard(index);
                    });
                });

                // Update dots on scroll (debounced)
                let scrollTimeout;
                track.addEventListener('scroll', () => {
                    if (isDragging) return;
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        const trackRect = track.getBoundingClientRect();
                        const trackPadding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
                        let closest = 0;
                        let closestDist = Infinity;
                        cards.forEach((card, i) => {
                            const cardRect = card.getBoundingClientRect();
                            const dist = Math.abs(cardRect.left - trackRect.left - trackPadding);
                            if (dist < closestDist) {
                                closestDist = dist;
                                closest = i;
                            }
                        });
                        updateDots(closest);
                    }, 50);
                });

                // Prevent link clicks after drag
                track.addEventListener('click', (e) => {
                    if (hasMoved) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }, true);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen mix-blend-screen saturate-0 z-[5] pointer-events-none absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>

</div>
</div>



<section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Modern workspace" className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bfc43d3-5c2c-4219-9c53-453b45574567_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<nav className="flex md:px-12 z-10 w-full pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2 reveal-item delay-100 reveal-active">
<iconify-icon height="30" icon="solar:tornado-small-outline" style={{color: 'rgb(242, 240, 235)'}} width="30"></iconify-icon>
<span className="text-[1.65rem] font-light text-white tracking-tighter font-dm-sans">Contextual</span>
</div>
<div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
<a className="hover:text-white transition-colors tracking-tighter reveal-item delay-200 reveal-active" href="#how-it-works">How
                    It Works</a>
<a className="hover:text-white transition-colors reveal-item delay-300 tracking-tighter reveal-active" href="#approach">Approach</a>
<a className="hover:text-white transition-colors tracking-tighter reveal-item delay-400 reveal-active" href="#explore">Offerings</a>
<a className="hover:text-white transition-colors tracking-tighter reveal-item delay-500 reveal-active" href="https://substack.com/@maxpochuev" target="_blank">Writing</a>
</div>
<div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70 md:flex reveal-item delay-500 reveal-active">
<span className="tracking-tighter normal-case text-sm">London, UK</span>
<a className="group flex items-center gap-1 text-white hover:opacity-80 tracking-tighter normal-case text-sm" href="#explore">
                    Explore Fit
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<button className="md:hidden text-white reveal-item">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
<div className="flex h-[calc(100vh-100px)] flex-col md:px-12 md:pb-20 z-10 pr-6 pb-12 pl-6 relative justify-end">
<div className="mb-auto flex w-full justify-between pt-12 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300 reveal-active">
<span className="uppercase tracking-tighter">// For B2B service providers where the expertise that wins clients doesn't scale</span>
<span className="tracking-tighter">©2026</span>
</div>
<div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">
<h1 className="leading-[1.1] md:max-w-2xl lg:max-w-3xl md:text-6xl lg:text-7xl text-4xl font-light text-white tracking-tighter font-dm-sans reveal-item delay-100 reveal-active">
                    Your best people know what it takes to find and win the right clients –
                    <span className="text-white/60 font-dm-sans font-light tracking-tighter">but that expertise doesn't scale.</span>
</h1>
<div className="flex max-w-md flex-col gap-8 reveal-item delay-300 reveal-active">
<p className="text-xl leading-relaxed text-white/80 tracking-tighter">
                        We capture your knowledge and strategy, then build systems that apply it to your whole market
                        without losing the quality.
                    </p>
<a className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm text-stone-900 transition-all hover:bg-white hover:shadow-lg hover:scale-105 tracking-tighter" href="#explore">
                        See how this works
                        <iconify-icon className="text-lg transition-transform group-hover:rotate-45" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>



<section className="md:px-12 md:py-32 text-stone-800 bg-[#EAE8E2] w-full pt-20 pr-6 pb-20 pl-6 relative" id="approach">
<div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-24 reveal-item reveal-active">
<div className="flex uppercase text-xs font-medium text-stone-500 tracking-widest items-center justify-between">
<span className="tracking-tighter">// The challenge we solve</span>
<button className="rounded-full border border-stone-400/30 p-2 hover:bg-stone-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 gap-x-y-16 gap-y-16">
<div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100 reveal-active gap-x-4 gap-y-4">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
<img alt="Strategic thinking" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a535e75-6379-437d-8b87-ed2c1f5cf2e2_1600w.png"/>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter">[01] Domain expertise</span>
<span className="tracking-tighter">Encoded</span>
</div>
</div>
<div className="flex flex-col lg:col-span-8 gap-x-20 gap-y-20">
<p className="leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15] reveal-item delay-200 reveal-active text-3xl font-light text-stone-900 tracking-tighter font-dm-sans">
                    Your best people know what it takes to find the right clients and win them. But that judgment takes
                    hours to apply, can't be handed to generic AI, and
                    <span className="text-stone-400">walks out the door when people leave.</span>
</p>
<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
<div className="flex flex-col gap-4 reveal-item delay-300 reveal-active">
<div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-transparent">
<img alt="Team collaboration" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be82125-c24e-4854-bb6d-72b4371036fb_1600w.png"/>
</div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter">[02] Knowledge systems</span>
<span className="tracking-tighter">Built</span>
</div>
</div>
<div className="flex flex-col pt-4 pb-4 justify-between">
<div className="space-y-6 reveal-item delay-400 reveal-active">
<p className="leading-relaxed text-lg text-stone-600 tracking-tighter">
                                If the knowledge that makes your company unique lives in a few people's heads, we help
                                you scale it across your full market.
                            </p>
<p className="leading-relaxed text-lg text-stone-600 tracking-tighter">
                                Working with your team, we encode that expertise into knowledge systems and structured
                                datasets that capture how your best people actually think. Then we build workflows that
                                apply it to engaging new accounts.
                            </p>
</div>
<div className="mt-12 flex items-end justify-between border-t border-stone-300/50 pt-12 reveal-item delay-500 reveal-active">
<div className="flex gap-12">
<div>
<span className="text-4xl text-stone-900 font-dm-sans font-light tracking-tighter">Encoded</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter">Expertise</p>
</div>
<div>
<span className="text-4xl text-stone-900 font-dm-sans font-light tracking-tighter">Judgment</span>
<p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter">That scales</p>
</div>
</div>
<a className="rounded-full border border-stone-400/30 p-3 hover:bg-stone-200 transition-colors" href="#how-it-works">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]" id="how-it-works">
<div className="mx-auto max-w-7xl">
<div className="mb-16 md:mb-20">
<h2 className="text-4xl font-light tracking-tighter text-white md:text-6xl font-dm-sans">How It Works</h2>
</div>
<div className="pipeline-section mb-20 md:mb-24">
<div className="w-full h-px bg-stone-700/50 mb-8"></div>
<div className="pipeline-container">
<div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-4 md:gap-3 relative">
<div className="pipeline-block opacity-0 translate-y-5 relative z-10 flex-1" data-index="0">
<div className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 md:p-5 h-full transition-all duration-300 hover:bg-stone-800 hover:border-stone-600">
<span className="text-xs font-mono text-stone-500 mb-3 block">01</span>
<p className="text-sm md:text-base text-stone-300 leading-relaxed">We learn your business
                                    development and where it's stuck</p>
</div>
</div>
<div className="hidden md:flex items-center justify-center px-1 pipeline-arrow opacity-0 self-center" data-index="0">
<svg className="text-stone-600" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M9 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="pipeline-block opacity-0 translate-y-5 relative z-10 flex-1" data-index="1">
<div className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 md:p-5 h-full transition-all duration-300 hover:bg-stone-800 hover:border-stone-600">
<span className="text-xs font-mono text-stone-500 mb-3 block">02</span>
<p className="text-sm md:text-base text-stone-300 leading-relaxed">We capture what makes you
                                    unique</p>
</div>
</div>
<div className="hidden md:flex items-center justify-center px-1 pipeline-arrow opacity-0 self-center" data-index="1">
<svg className="text-stone-600" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M9 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="pipeline-block opacity-0 translate-y-5 relative z-10 flex-1" data-index="2">
<div className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 md:p-5 h-full transition-all duration-300 hover:bg-stone-800 hover:border-stone-600">
<span className="text-xs font-mono text-stone-500 mb-3 block">03</span>
<p className="text-sm md:text-base text-stone-300 leading-relaxed">We build workflows around
                                    it</p>
</div>
</div>
<div className="hidden md:flex items-center justify-center px-1 pipeline-arrow opacity-0 self-center" data-index="2">
<svg className="text-stone-600" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M9 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="pipeline-block opacity-0 translate-y-5 relative z-10 flex-1" data-index="3">
<div className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 md:p-5 h-full transition-all duration-300 hover:bg-stone-800 hover:border-stone-600">
<span className="text-xs font-mono text-stone-500 mb-3 block">04</span>
<p className="text-sm md:text-base text-stone-300 leading-relaxed">You focus on what moves
                                    the needle</p>
</div>
</div>
<div className="hidden md:flex items-center justify-center px-1 pipeline-arrow opacity-0 self-center" data-index="3">
<svg className="text-stone-600" fill="none" height="20" viewbox="0 0 24 24" width="20">
<path d="M9 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="pipeline-block opacity-0 translate-y-5 relative z-10 flex-1" data-index="4">
<div className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 md:p-5 h-full transition-all duration-300 hover:bg-stone-800 hover:border-stone-600">
<span className="text-xs font-mono text-stone-500 mb-3 block">05</span>
<p className="text-sm md:text-base text-stone-300 leading-relaxed">It gets smarter over time
                                </p>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-stone-700/50 mt-8"></div>
</div>
<div className="flex flex-col w-full">
<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-100">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">01</span>
<span className="font-medium tracking-tight text-white">We map the gaps</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                            Where are the blocks in your customer journey? The leaks in your pipeline? The constraints
                            on your BD capacity? We start by identifying where systematised workflows would make the
                            biggest difference.</p>
</div>
</div>
<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-200">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">02</span>
<span className="font-medium tracking-tight text-white">We capture your strategic knowledge</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                            How do your best people actually think about accounts? What signals matter? What determines
                            which offering to lead with? We capture that judgment through discovery sessions focused on
                            the gaps that matter most.</p>
</div>
</div>
<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-300">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">03</span>
<span className="font-medium tracking-tight text-white">We build around it</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                            Knowledge systems that encode your team's expertise. Workflows that apply it to research
                            accounts, select the right angle, and generate outreach that reflects your thinking, not
                            generic AI patterns.</p>
</div>
</div>
<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-400">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">04</span>
<span className="font-medium tracking-tight text-white">You focus on where your expertise adds real value</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                            By making strategic proactive growth operational, you can finally focus time on what
                            actually moves the needle: building relationships and sharpening your strategy.</p>
</div>
</div>
<div className="group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item delay-500">
<div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
<span className="font-mono text-stone-600">05</span>
<span className="font-medium tracking-tight text-white">It evolves</span>
</div>
<div className="basis-2/3">
<p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                            New angle resonates? New offering launches? Team member brings insight? That learning gets
                            built into the system. It compounds over time rather than degrading.</p>
</div>
</div>
<div className="group flex flex-col gap-4 rounded-lg bg-stone-800/50 px-4 py-6 transition-all hover:bg-stone-800 md:flex-row md:items-center md:gap-12 md:-mx-4 mt-8 reveal-item delay-500">
<div className="flex basis-1/3 items-center gap-8 text-sm md:text-base">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-300">
<iconify-icon className="text-sm" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white">Bespoke systems and workflows.</span>
</div>
<div className="basis-2/3">
<p className="text-stone-400 leading-relaxed text-base">We don't whitelabel software or tools. We
                            build knowledge systems and workflows around your specific strategy and offerings.</p>
</div>
</div>
</div>
</div>
</section>



<section className="md:px-12 md:py-32 text-stone-900 bg-[#EAE8E2] w-full pt-24 pr-6 pb-24 pl-6 relative overflow-hidden">
<div className="absolute inset-0 w-full h-full pointer-events-none select-none">
<div className="mx-auto max-w-7xl h-full border-x border-stone-300/40 relative">
<div className="absolute inset-y-0 left-1/2 w-px bg-stone-300/40 hidden md:block lg:hidden -ml-px"></div>
<div className="absolute inset-y-0 left-1/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
<div className="absolute inset-y-0 left-2/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
</div>
</div>
<div className="z-10 w-full relative">
<div className="mb-20 flex flex-col items-center text-center max-w-7xl mx-auto reveal-item">
<h2 className="max-w-4xl text-4xl font-light tracking-tighter text-stone-900 md:text-6xl font-dm-sans">
                    Sound <span className="text-stone-400">familiar?</span>
</h2>
</div>
<div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-6 md:-mx-12 px-6 md:px-12 reveal-item delay-200">
<div className="flex w-max animate-scroll-cards gap-6 py-4">

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:scale-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We know exactly
                                what good outreach looks like — we just
                                <span className="font-medium text-stone-900">can't do that for every account.</span>"</p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Quality doesn't scale. You're forced to choose between
                                precision for a few accounts or generic outreach for many.</p>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:user-minus-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"Every time
                                someone leaves, we lose months of training — and the
                                <span className="font-medium text-stone-900">domain understanding that made them effective.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Ramping up to fully understand your agency landscape takes
                                6+ months of your time. Then they leave, and it resets.</p>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We end up
                                sending 'we do X, Y, Z — let's chat' because
                                <span className="font-medium text-stone-900">making expertise relevant to each account takes too long.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Senior BD time consumed by upstream research instead of
                                the conversations where their expertise matters most.</p>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We've tried the
                                tools — they can mention a LinkedIn post, but they
                                <span className="font-medium text-stone-900">can't determine which of our offerings matters for each account.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Generic AI personalisation works from the outside in. Your
                                diagnostic judgment requires something built from the inside out.</p>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"When I hand
                                this to junior team members, the
                                <span className="font-medium text-stone-900">quality drops</span> — they can't replicate the
                                pattern recognition."</p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">You can hand off the task, but not the judgment. Junior
                                team members execute — they can't replicate the thinking behind it.</p>
</div>
</div>

<div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:routing-2-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"Whether to lead
                                with our brand strategy practice or our innovation programme
                                <span className="font-medium text-stone-900">depends on what we uncover about each account.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">The right angle depends on what you uncover about each
                                account — and that diagnosis can't be templated.</p>
</div>
</div>

<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:scale-linear" width="16"></iconify-icon></div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We know exactly
                                what good outreach looks like — we just
                                <span className="font-medium text-stone-900">can't do that for every account.</span>"</p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Quality doesn't scale. You're forced to choose between
                                precision for a few accounts or generic outreach for many.</p>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:user-minus-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"Every time
                                someone leaves, we lose months of training — and the
                                <span className="font-medium text-stone-900">domain understanding that made them effective.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Ramping up to fully understand your agency landscape takes
                                6+ months of your time. Then they leave, and it resets.</p>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We end up
                                sending 'we do X, Y, Z — let's chat' because
                                <span className="font-medium text-stone-900">making expertise relevant to each account takes too long.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Senior BD time consumed by upstream research instead of
                                the conversations where their expertise matters most.</p>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:settings-linear" width="16"></iconify-icon></div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"We've tried the
                                tools — they can mention a LinkedIn post, but they
                                <span className="font-medium text-stone-900">can't determine which of our offerings matters for each account.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">Generic AI personalisation works from the outside in. Your
                                diagnostic judgment requires something built from the inside out.</p>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon></div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"When I hand
                                this to junior team members, the
                                <span className="font-medium text-stone-900">quality drops</span> — they can't replicate the
                                pattern recognition."</p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">You can hand off the task, but not the judgment. Junior
                                team members execute — they can't replicate the thinking behind it.</p>
</div>
</div>
<div aria-hidden="true" className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
<div>
<div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
<iconify-icon height="16" icon="solar:routing-2-linear" width="16"></iconify-icon></div>
<p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">"Whether to lead
                                with our brand strategy practice or our innovation programme
                                <span className="font-medium text-stone-900">depends on what we uncover about each account.</span>"
                            </p>
</div>
<div className="pt-6 border-t border-stone-100">
<p className="text-sm text-stone-500">The right angle depends on what you uncover about each
                                account — and that diagnosis can't be templated.</p>
</div>
</div>
</div>
</div>
<div className="mt-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] reveal-item delay-500 max-w-7xl mx-auto">
<div className="flex w-max animate-scroll items-center gap-12 py-2">
<div className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono">
<span>Quality at scale</span><span className="text-stone-300/40">•</span>
<span>Expertise that stays</span><span className="text-stone-300/40">•</span>
<span>Right angle, every account</span><span className="text-stone-300/40">•</span>
<span>Accounts that actually fit</span><span className="text-stone-300/40">•</span>
<span>Senior time freed</span><span className="text-stone-300/40">•</span>
<span>Junior handoff that works</span><span className="text-stone-300/40">•</span>
</div>
<div aria-hidden="true" className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono">
<span>Quality at scale</span><span className="text-stone-300/40">•</span>
<span>Expertise that stays</span><span className="text-stone-300/40">•</span>
<span>Right angle, every account</span><span className="text-stone-300/40">•</span>
<span>Accounts that actually fit</span><span className="text-stone-300/40">•</span>
<span>Senior time freed</span><span className="text-stone-300/40">•</span>
<span>Junior handoff that works</span><span className="text-stone-300/40">•</span>
</div>
</div>
</div>
</div>
</section>



<section className="md:px-12 md:py-32 text-stone-800 bg-[#F5F4F0] w-full pt-24 pr-6 pb-24 pl-6 relative" id="explore">

<div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-20 reveal-item">
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
<span className="tracking-tighter">// Where does this apply?</span>
<span className="tracking-tighter">02</span>
</div>
</div>
<div className="max-w-7xl mx-auto">

<div className="mb-16 flex items-end justify-between reveal-item">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-stone-900 font-dm-sans max-w-3xl">
                    Most companies we work with face one of these situations.
                </h2>
<p className="hidden md:block text-sm text-stone-400 tracking-tighter ml-8 whitespace-nowrap pb-1">Drag to
                    explore →</p>
</div>

<div className="entry-cards-viewport relative reveal-item delay-100">

<div className="entry-cards-track flex gap-8 overflow-x-auto pb-6 -mx-6 px-6 md:-mx-12 md:px-12">

<div className="entry-card flex-shrink-0 w-[340px] md:w-[420px] group relative rounded-xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-lg">
<div className="mb-8">
<span className="inline-block px-3 py-1 rounded-full bg-stone-900 text-xs font-medium uppercase tracking-widest text-white mb-6">
                                Offering selection
                            </span>
<h3 className="text-2xl md:text-3xl font-light tracking-tighter text-stone-900 font-dm-sans mb-4">
                                "Which offering should we lead with?"
                            </h3>
</div>
<div className="space-y-4 mb-10">
<p className="text-stone-600 leading-relaxed">
                                You have multiple services. The right one to lead with depends on what you uncover about
                                each account's situation. That diagnosis takes hours per account — and generic tools
                                can't replicate it.
                            </p>
<p className="text-stone-600 leading-relaxed">
                                We systematise that diagnostic judgment so it runs across hundreds of accounts without
                                losing the quality.
                            </p>
</div>
<div className="pt-8 border-t border-stone-100">
<p className="text-sm text-stone-400 mb-6">This applies if you:</p>
<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Have multiple distinct offerings or service lines</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Need to determine which to lead with per account</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Currently send generic "we do X, Y, Z" messaging</span>
</li>
</ul>
<a className="group/btn inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-3 transition-all" href="mailto:max@contextual.partners">
                                Discover if this is right for you
                                <iconify-icon className="transition-transform group-hover/btn:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="entry-card flex-shrink-0 w-[340px] md:w-[420px] group relative rounded-xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-lg">
<div className="mb-8">
<span className="inline-block px-3 py-1 rounded-full bg-stone-900 text-xs font-medium uppercase tracking-widest text-white mb-6">
                                Relevance construction
                            </span>
<h3 className="text-2xl md:text-3xl font-light tracking-tighter text-stone-900 font-dm-sans mb-4">
                                "Why does what we do matter to <em className="not-italic text-stone-400">you</em>?"
                            </h3>
</div>
<div className="space-y-4 mb-10">
<p className="text-stone-600 leading-relaxed">
                                Your expertise applies across diverse sectors — but making it relevant to each specific
                                prospect requires diagnostic judgment that lives in your best people's heads. Prospects
                                don't naturally recognise they need what you do.
                            </p>
<p className="text-stone-600 leading-relaxed">
                                We encode that diagnostic logic so each account receives outreach that demonstrates
                                understanding, not just awareness.
                            </p>
</div>
<div className="pt-8 border-t border-stone-100">
<p className="text-sm text-stone-400 mb-6">This applies if you:</p>
<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Have deep expertise applied across diverse, unrelated sectors</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Prospects don't self-identify as needing your services</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Junior BD can't replicate the quality of senior outreach</span>
</li>
</ul>
<a className="group/btn inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-3 transition-all" href="mailto:max@contextual.partners">
                                Discover if this is right for you
                                <iconify-icon className="transition-transform group-hover/btn:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="entry-card flex-shrink-0 w-[340px] md:w-[420px] group relative rounded-xl border border-stone-200/80 bg-white p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-lg">
<div className="mb-8">
<span className="inline-block px-3 py-1 rounded-full bg-stone-900 text-xs font-medium uppercase tracking-widest text-white mb-6">
                                Qualification complexity
                            </span>
<h3 className="text-2xl md:text-3xl font-light tracking-tighter text-stone-900 font-dm-sans mb-4">
                                "Which accounts actually fit?"
                            </h3>
</div>
<div className="space-y-4 mb-10">
<p className="text-stone-600 leading-relaxed">
                                Your qualification criteria require domain expertise beyond firmographics. "Any company
                                in industry X" doesn't describe your ideal client. Finding accounts that genuinely fit
                                takes hours of research.
                            </p>
<p className="text-stone-600 leading-relaxed">
                                We encode that qualification logic so it surfaces the right accounts across your full
                                addressable market.
                            </p>
</div>
<div className="pt-8 border-t border-stone-100">
<p className="text-sm text-stone-400 mb-6">This applies if you:</p>
<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Have specialist positioning with complex criteria</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Can't find qualified accounts through standard filters</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Spend hours per account on manual qualification</span>
</li>
</ul>
<a className="group/btn inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-3 transition-all" href="mailto:max@contextual.partners">
                                Discover if this is right for you
                                <iconify-icon className="transition-transform group-hover/btn:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8 entry-dots">
<button aria-label="Card 1" className="entry-dot active w-6 h-2 rounded-full bg-stone-900 transition-all" data-index="0"></button>
<button aria-label="Card 2" className="entry-dot w-2 h-2 rounded-full bg-stone-300 transition-all" data-index="1"></button>
<button aria-label="Card 3" className="entry-dot w-2 h-2 rounded-full bg-stone-300 transition-all" data-index="2"></button>
</div>
</div>
</div>
</section>



<section className="relative w-full bg-[#050505] pt-32 pb-12 overflow-hidden text-[#F2F0EB]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-stone-800/20 blur-[100px] rounded-full pointer-events-none select-none">
</div>
<div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px] rounded-full pointer-events-none select-none">
</div>
<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-32 flex flex-col items-center text-center reveal-item">
<div className="mb-10 relative group">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-stone-700 to-stone-900 opacity-40 blur transition duration-500 group-hover:opacity-100">
</div>
<div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-800 bg-[#0A0A0A] shadow-2xl">
<iconify-icon className="text-white" height="28" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</div>
</div>
<h2 className="mb-6 max-w-3xl font-dm-sans text-5xl font-light tracking-tighter text-white md:text-6xl">Want
                    to explore this?</h2>
<p className="mb-10 max-w-lg text-lg text-stone-400 font-light leading-relaxed">If this sounds like your
                    situation, let's have a conversation about whether there's a fit worth exploring. No pitch, no
                    pressure.</p>
<div className="flex flex-col items-center gap-4 sm:flex-row">
<a className="group relative flex items-center gap-2 rounded-full bg-[#F2F0EB] px-12 py-4 text-sm font-medium text-stone-950 transition-all hover:bg-white hover:scale-105" href="mailto:max@contextual.partners">
<span>Start a conversation</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-stone-800/60 pt-16 reveal-item delay-200">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
<div className="flex flex-col justify-between lg:col-span-5">
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="font-dm-sans text-2xl font-light tracking-tighter text-white">Contextual Partners</span>
</div>
<p className="max-w-xs text-sm font-normal leading-relaxed text-stone-500">GTM consultancy for
                                specialist B2B providers — encoding domain expertise into systems that scale without
                                losing quality.</p>
</div>
<div className="mt-8 flex gap-5 md:mt-12">
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="https://www.linkedin.com/company/contextual-partners" target="_blank">
<iconify-icon height="18" icon="mdi:linkedin" width="18"></iconify-icon>
</a>
<a className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white" href="mailto:max@contextual.partners">
<iconify-icon height="18" icon="mdi:email-outline" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="hidden lg:col-span-2 lg:block"></div>
<div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-12">
<div>
<h3 className="mb-6 text-sm font-medium tracking-tight text-white">Explore</h3>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="#approach">Approach</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#how-it-works">How It
                                        Works</a></li>
<li><a className="transition-colors hover:text-stone-300" href="#explore">Offerings</a></li>
</ul>
</div>
<div>
<h3 className="mb-6 text-sm font-medium tracking-tight text-white">Connect</h3>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="transition-colors hover:text-stone-300" href="https://www.linkedin.com/company/contextual-partners" target="_blank">LinkedIn</a></li>
<li><a className="transition-colors hover:text-stone-300" href="https://substack.com/@maxpochuev" target="_blank">Substack</a></li>
<li><a className="transition-colors hover:text-stone-300" href="mailto:max@contextual.partners">Email</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-stone-800/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<span>© 2026 Contextual Partners. London, UK.</span>
<span>GTM consultancy delivered through AI workflows.</span>
</div>
</div>
</div>
</section>





    </>
  );
}
