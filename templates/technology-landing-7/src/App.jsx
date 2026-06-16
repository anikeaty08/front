import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            // Text Clip Slide Down Animation
            const titleContainer = document.getElementById('hero-title');
            if (titleContainer) {
                const htmlContent = titleContainer.innerHTML;
                titleContainer.innerHTML = '';
                
                // Keep <br> tags while animating text
                const parts = htmlContent.split(/(<br>)/i);
                let charIndex = 0;

                parts.forEach(part => {
                    if (part.toLowerCase() === '<br>') {
                        titleContainer.appendChild(document.createElement('br'));
                    } else {
                        // Clean text and split to chars
                        const text = part.trim();
                        if(text.length === 0) return;
                        
                        // We wrap words first to keep them together, then chars
                        const words = text.split(' ');
                        words.forEach((word, wordIdx) => {
                            const wordSpan = document.createElement('span');
                            wordSpan.className = 'inline-block whitespace-nowrap';
                            
                            word.split('').forEach(char => {
                                const wrap = document.createElement('span');
                                wrap.className = 'inline-block overflow-hidden align-bottom px-[0.02em] pb-[0.1em] -mb-[0.1em]';
                                const inner = document.createElement('span');
                                inner.className = 'inline-block opacity-0';
                                inner.style.animation = `slideDownFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${charIndex * 0.04}s forwards`;
                                inner.innerText = char;
                                wrap.appendChild(inner);
                                wordSpan.appendChild(wrap);
                                charIndex++;
                            });
                            
                            titleContainer.appendChild(wordSpan);
                            if (wordIdx < words.length - 1) {
                                const space = document.createTextNode(' ');
                                titleContainer.appendChild(space);
                            }
                        });
                    }
                });
            }

            // Intersection Observer for other hero elements
            const module = document.getElementById('hero-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    


        (function() {
            const module = document.getElementById('features-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    


        (function() {
            const module = document.getElementById('audience-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    


        (function() {
            const module = document.getElementById('capabilities-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    


        (function() {
            // Intersection Observer
            const module = document.getElementById('accordion-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

            // Accordion Logic
            const items = module.querySelectorAll('.accordion-item');
            items.forEach(item => {
                const header = item.querySelector('div:first-child');
                header.addEventListener('click', () => {
                    const isActive = item.getAttribute('data-active') === 'true';
                    const content = item.querySelector('.accordion-content');
                    const iconWrap = item.querySelector('.icon-wrap');
                    const icon = iconWrap.querySelector('iconify-icon');

                    if (isActive) {
                        // Close it
                        item.setAttribute('data-active', 'false');
                        item.classList.remove('bg-neutral-50/50');
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        iconWrap.className = 'w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-colors icon-wrap';
                        icon.setAttribute('icon', 'solar:add-circle-bold-duotone');
                    } else {
                        // Close all others
                        items.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.setAttribute('data-active', 'false');
                                otherItem.classList.remove('bg-neutral-50/50');
                                const otherContent = otherItem.querySelector('.accordion-content');
                                const otherIconWrap = otherItem.querySelector('.icon-wrap');
                                const otherIcon = otherIconWrap.querySelector('iconify-icon');
                                otherContent.style.maxHeight = '0px';
                                otherContent.style.opacity = '0';
                                otherIconWrap.className = 'w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-colors icon-wrap';
                                otherIcon.setAttribute('icon', 'solar:add-circle-bold-duotone');
                            }
                        });
                        // Open this one
                        item.setAttribute('data-active', 'true');
                        item.classList.add('bg-neutral-50/50');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                        iconWrap.className = 'w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors icon-wrap';
                        icon.setAttribute('icon', 'solar:close-circle-bold-duotone');
                    }
                });
            });
        })();
    


        (function() {
            const module = document.getElementById('testimonials-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    


        (function() {
            const module = document.getElementById('cta-card-module');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            module.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="container mx-auto px-6 py-6 flex items-center justify-between" id="nav-module">
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 text-neutral-900" href="#">
<iconify-icon className="text-2xl" icon="solar:round-transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
            AURADYN
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Platform</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Resources</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Company</a>
<a className="flex items-center gap-1 hover:text-neutral-900 transition-colors" href="#">
                More <iconify-icon className="text-lg" icon="solar:alt-arrow-down-bold-duotone"></iconify-icon>
</a>
</div>

<a className="relative group rounded-full px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium overflow-hidden isolate inline-flex items-center justify-center transition-transform hover:scale-[1.02]" href="#">
<span className="relative z-10">Get Started</span>

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.8)_360deg)] animate-[spin_2.5s_linear_infinite]"></div>
</div>

<div className="absolute inset-[1px] bg-neutral-900 rounded-full z-0 pointer-events-none"></div>
</a>
</nav>

<section className="container mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center" id="hero-module">
<div className="max-w-xl">
<span className="reveal-item inline-flex items-center gap-2 bg-neutral-200/50 hover:bg-neutral-200 transition-colors px-3 py-1.5 rounded-full text-xs font-medium mb-8 cursor-pointer text-neutral-600">
<iconify-icon className="text-base" icon="solar:bell-bing-bold-duotone"></iconify-icon> Introducing DataFlow 2.0
            </span>

<h1 className="font-geist text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-neutral-900" id="hero-title">
                Synchronize<br/>Your Workflow
            </h1>
<p className="reveal-item text-base text-neutral-500 mb-8 leading-relaxed max-w-md" style={{transitionDelay: '0.3s'}}>
                Empower your teams with real-time data orchestration. Eliminate silos, automate pipelines, and scale your operations seamlessly.
            </p>
<div className="reveal-item flex flex-wrap items-center gap-4" style={{transitionDelay: '0.4s'}}>
<a className="relative group rounded-full px-6 py-3 bg-indigo-600 text-white text-sm font-medium overflow-hidden isolate inline-flex items-center gap-2" href="#">
<span className="relative z-10 flex items-center gap-2">Deploy Now <iconify-icon className="text-lg" icon="solar:rocket-bold-duotone"></iconify-icon></span>
<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.6)_360deg)] animate-[spin_2.5s_linear_infinite]"></div>
</div>
<div className="absolute inset-[1px] bg-indigo-600 rounded-full z-0 pointer-events-none transition-colors group-hover:bg-indigo-700"></div>
</a>
<a className="px-6 py-3 rounded-full font-medium text-sm text-neutral-600 hover:text-neutral-900 transition-colors inline-flex items-center gap-2 bg-neutral-200/40 hover:bg-neutral-200/80" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-bold-duotone"></iconify-icon> Watch Demo
                </a>
</div>
</div>
<div className="reveal-item relative h-[500px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60 flex items-center justify-center p-8" style={{transitionDelay: '0.2s'}}>

<div className="w-full h-full relative bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden flex flex-col">
<div className="h-12 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="p-6 flex-1 flex flex-col gap-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
<div className="h-24 bg-indigo-50/80 rounded-xl border border-indigo-100 w-3/4 animate-pulse"></div>
<div className="flex gap-4">
<div className="h-32 bg-emerald-50/80 rounded-xl border border-emerald-100 flex-1"></div>
<div className="h-32 bg-amber-50/80 rounded-xl border border-amber-100 w-1/3"></div>
</div>
<div className="h-16 bg-rose-50/80 rounded-xl border border-rose-100 w-full mt-auto"></div>
</div>
</div>

<div className="absolute top-16 -left-4 bg-white/90 backdrop-blur border border-neutral-200 text-neutral-800 px-4 py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
<iconify-icon className="text-emerald-500 text-base" icon="solar:shield-check-bold-duotone"></iconify-icon> 99.9% Uptime
            </div>
<div className="absolute bottom-24 -right-4 bg-white/90 backdrop-blur border border-neutral-200 text-neutral-800 px-4 py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
<iconify-icon className="text-amber-500 text-base" icon="solar:bolt-bold-duotone"></iconify-icon> Real-time Sync
            </div>
</div>
</section>


<section className="border-y border-neutral-200/60 bg-white py-12 overflow-hidden" id="marquee-module">
<div className="container mx-auto px-6 text-center mb-8">
<p className="text-sm font-medium text-neutral-500">
                Empowering <span className="text-neutral-900">4,200+</span> forward-thinking enterprises globally.
            </p>
</div>

<div className="relative flex overflow-hidden mask-edges w-full max-w-6xl mx-auto">
<div className="flex w-max animate-marquee items-center gap-16 md:gap-24 pl-16 md:pl-24">

<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:square-academic-bold-duotone"></iconify-icon> Vertex
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:layers-bold-duotone"></iconify-icon> Stratos
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:chart-square-bold-duotone"></iconify-icon> Nexus
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:widget-5-bold-duotone"></iconify-icon> Optima
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:shield-network-bold-duotone"></iconify-icon> Aegis
                </div>

<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:square-academic-bold-duotone"></iconify-icon> Vertex
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:layers-bold-duotone"></iconify-icon> Stratos
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:chart-square-bold-duotone"></iconify-icon> Nexus
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:widget-5-bold-duotone"></iconify-icon> Optima
                </div>
<div className="flex items-center gap-2 font-medium text-lg tracking-tight text-neutral-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:shield-network-bold-duotone"></iconify-icon> Aegis
                </div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-24 space-y-6" id="features-module">

<div className="reveal-item bg-indigo-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center overflow-hidden border border-indigo-100">
<div className="flex-1">
<span className="inline-block bg-white text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-indigo-100 shadow-sm">
<iconify-icon className="align-middle mr-1" icon="solar:server-square-bold-duotone"></iconify-icon> Infrastructure
                </span>
<h2 className="font-geist text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6 max-w-2xl text-neutral-900">
                    Built for scale, designed for simplicity and speed
                </h2>
<p className="text-sm text-neutral-600 mb-8 max-w-lg">
                    Our unified architecture handles petabytes of data while keeping your dashboard responsive and your queries instantaneous.
                </p>
<a className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors inline-block" href="#">
                    Explore Architecture
                </a>
</div>
<div className="flex gap-4 w-full lg:w-auto h-[350px]">
<div className="w-1/2 rounded-2xl bg-white border border-neutral-200/60 shadow-sm p-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<iconify-icon className="text-4xl text-indigo-500 mb-4" icon="solar:graph-up-bold-duotone"></iconify-icon>
<div className="space-y-2 relative z-10">
<div className="h-2 bg-neutral-200 rounded w-full"></div>
<div className="h-2 bg-neutral-200 rounded w-5/6"></div>
<div className="h-2 bg-neutral-200 rounded w-4/6"></div>
</div>
</div>
<div className="w-1/2 rounded-2xl bg-neutral-900 shadow-sm p-4 relative overflow-hidden text-white flex flex-col justify-end">
<iconify-icon className="text-4xl text-emerald-400 absolute top-4 left-4" icon="solar:database-bold-duotone"></iconify-icon>
<div className="relative z-10">
<p className="text-2xl font-medium font-geist tracking-tight">1.2M+</p>
<p className="text-xs text-neutral-400">Queries per second</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="reveal-item bg-neutral-900 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[450px] relative overflow-hidden" style={{transitionDelay: '0.1s'}}>
<h3 className="font-geist text-2xl md:text-3xl text-white font-medium tracking-tight leading-snug max-w-sm z-10">
                    Security is not an afterthought, it's our foundation
                </h3>
<div className="mt-8 relative h-[200px] w-full rounded-2xl overflow-hidden z-10 bg-neutral-800 border border-neutral-700 p-6 flex flex-col gap-3">
<div className="flex items-center justify-between border-b border-neutral-700 pb-3">
<span className="text-sm font-medium text-neutral-300"><iconify-icon className="mr-2 text-indigo-400 align-middle" icon="solar:lock-password-bold-duotone"></iconify-icon> E2E Encryption</span>
<div className="w-8 h-4 bg-emerald-500/20 rounded-full flex items-center px-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div></div>
</div>
<div className="flex items-center justify-between border-b border-neutral-700 pb-3">
<span className="text-sm font-medium text-neutral-300"><iconify-icon className="mr-2 text-amber-400 align-middle" icon="solar:user-id-bold-duotone"></iconify-icon> RBAC Controls</span>
<div className="w-8 h-4 bg-emerald-500/20 rounded-full flex items-center px-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-300"><iconify-icon className="mr-2 text-rose-400 align-middle" icon="solar:radar-bold-duotone"></iconify-icon> Anomaly Detection</span>
<div className="w-8 h-4 bg-emerald-500/20 rounded-full flex items-center px-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent z-0 pointer-events-none"></div>
</div>

<div className="reveal-item bg-white border border-neutral-200/60 shadow-sm rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[450px]" style={{transitionDelay: '0.2s'}}>
<div>
<span className="inline-block bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium mb-6">
<iconify-icon className="align-middle mr-1" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon> Community
                    </span>
<h2 className="font-geist text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-4 text-neutral-900">
                        Join an ecosystem of innovators
                    </h2>
<p className="text-sm text-neutral-500 max-w-sm">
                        Connect with developers and data engineers building the next generation of applications.
                    </p>
</div>
<div className="flex items-center justify-between mt-8 pt-8 border-t border-neutral-100">
<a className="text-neutral-900 font-medium text-sm hover:text-indigo-600 transition-colors inline-flex items-center gap-1" href="#">
                        View Forum <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-xs z-30">MR</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 font-medium text-xs z-20">AL</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-amber-700 font-medium text-xs z-10">JS</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-neutral-500 font-medium text-xs z-0">+</div>
</div>
</div>
</div>
</div>
</section>


<section className="container mx-auto px-6 py-24 max-w-5xl" id="audience-module">
<div className="text-center mb-24">
<span className="reveal-item inline-block bg-neutral-200/50 text-neutral-600 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<iconify-icon className="align-middle mr-1" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon> Who is it for
            </span>
<h2 className="reveal-item font-geist text-3xl md:text-5xl font-medium tracking-tight mb-4 text-neutral-900" style={{transitionDelay: '0.1s'}}>Built for modern teams</h2>
<p className="reveal-item text-sm text-neutral-500 max-w-xl mx-auto" style={{transitionDelay: '0.2s'}}>
                Designed to bridge the gap between engineering, data science, and business operations.
            </p>
</div>
<div className="space-y-20 md:space-y-28">

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="reveal-item w-full md:w-1/2 flex justify-start">
<div className="w-full aspect-square md:w-80 md:h-80 bg-indigo-50 rounded-3xl shadow-sm border border-indigo-100 flex items-center justify-center text-indigo-300 relative overflow-hidden">
<iconify-icon className="text-7xl absolute opacity-20 -bottom-4 -left-4" icon="solar:code-square-bold-duotone"></iconify-icon>
<iconify-icon className="text-5xl text-indigo-500" icon="solar:programming-bold-duotone"></iconify-icon>
</div>
</div>
<div className="reveal-item w-full md:w-1/2 text-center md:text-left" style={{transitionDelay: '0.2s'}}>
<h3 className="font-geist text-2xl font-medium tracking-tight mb-3 text-neutral-900">Software Engineers</h3>
<p className="text-sm text-neutral-500">Spend less time dealing with connection pools and state management. Our APIs are designed to be intuitive, fully typed, and deeply integrated into your CI/CD pipelines.</p>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 border-t border-neutral-200/60 pt-20">
<div className="reveal-item w-full md:w-1/2 flex justify-start md:justify-end">
<div className="w-full aspect-square md:w-80 md:h-80 bg-emerald-50 rounded-3xl shadow-sm border border-emerald-100 flex items-center justify-center text-emerald-300 relative overflow-hidden">
<iconify-icon className="text-7xl absolute opacity-20 -top-4 -right-4" icon="solar:chart-square-bold-duotone"></iconify-icon>
<iconify-icon className="text-5xl text-emerald-500" icon="solar:database-bold-duotone"></iconify-icon>
</div>
</div>
<div className="reveal-item w-full md:w-1/2 text-center md:text-left" style={{transitionDelay: '0.2s'}}>
<h3 className="font-geist text-2xl font-medium tracking-tight mb-3 text-neutral-900">Data Scientists</h3>
<p className="text-sm text-neutral-500">Access clean, normalized data instantly. Hook directly into our querying engine from your Jupyter notebooks and accelerate your model training processes.</p>
</div>
</div>
</div>
</section>


<section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start" id="capabilities-module">
<div className="space-y-6">
<span className="reveal-item inline-block bg-neutral-200/50 text-neutral-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
<iconify-icon className="align-middle mr-1" icon="solar:tuning-square-2-bold-duotone"></iconify-icon> Core Capabilities
            </span>
<div className="flex flex-col gap-4 max-w-md">
<div className="reveal-item bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-sm flex items-center gap-4" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl">
<iconify-icon icon="solar:cpu-bolt-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-1">Compute Engine</h4>
<p className="text-xs text-neutral-500">Auto-scaling processing power.</p>
</div>
</div>
<div className="reveal-item bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-sm flex items-center gap-4" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
<iconify-icon icon="solar:link-circle-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-1">API Integrations</h4>
<p className="text-xs text-neutral-500">Connect to 200+ services instantly.</p>
</div>
</div>
<div className="reveal-item bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-sm flex items-center gap-4" style={{transitionDelay: '0.3s'}}>
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl">
<iconify-icon icon="solar:chart-line-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-1">Live Analytics</h4>
<p className="text-xs text-neutral-500">Custom dashboards and alerts.</p>
</div>
</div>
</div>
</div>
<div className="lg:pt-12">
<h2 className="reveal-item font-geist text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-12 max-w-xl text-neutral-900">
                A unified framework designed to streamline your entire tech stack
            </h2>
<div className="space-y-0">

<div className="reveal-item border-t border-neutral-200 py-6 group" style={{transitionDelay: '0.2s'}}>
<div className="flex gap-6">
<span className="text-sm font-geist text-neutral-400 font-medium group-hover:text-indigo-500 transition-colors mt-1">01</span>
<div>
<h3 className="font-geist text-lg font-medium tracking-tight mb-2 text-neutral-900">Zero-Config Deployment</h3>
<p className="text-sm text-neutral-500 max-w-md">Push your code and we handle the rest. Automated provisioning, load balancing, and SSL certification built-in.</p>
</div>
</div>
</div>

<div className="reveal-item border-t border-neutral-200 py-6 group" style={{transitionDelay: '0.3s'}}>
<div className="flex gap-6">
<span className="text-sm font-geist text-neutral-400 font-medium group-hover:text-indigo-500 transition-colors mt-1">02</span>
<div>
<h3 className="font-geist text-lg font-medium tracking-tight mb-2 text-neutral-900">Global Edge Network</h3>
<p className="text-sm text-neutral-500 max-w-md">Serve your applications closest to your users with our distributed edge locations across 40+ regions.</p>
</div>
</div>
</div>

<div className="reveal-item border-t border-neutral-200 py-6 group" style={{transitionDelay: '0.4s'}}>
<div className="flex gap-6">
<span className="text-sm font-geist text-neutral-400 font-medium group-hover:text-indigo-500 transition-colors mt-1">03</span>
<div>
<h3 className="font-geist text-lg font-medium tracking-tight mb-2 text-neutral-900">Observability Suite</h3>
<p className="text-sm text-neutral-500 max-w-md">Deep insights into performance bottlenecks, tracing, and logging to keep your systems running optimally.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="container mx-auto px-6 py-24 max-w-4xl" id="accordion-module">
<span className="reveal-item inline-block bg-neutral-200/50 text-neutral-600 px-3 py-1.5 rounded-full text-xs font-medium mb-12">
<iconify-icon className="align-middle mr-1" icon="solar:box-minimalistic-bold-duotone"></iconify-icon> Solutions
        </span>
<div className="space-y-0 border-t border-neutral-200">

<div className="reveal-item accordion-item border-b border-neutral-200 py-6 flex flex-col cursor-pointer group -mx-4 px-4 rounded-xl hover:bg-neutral-50 transition-colors" data-active="false">
<div className="flex items-center justify-between">
<h3 className="font-geist text-xl md:text-2xl font-medium tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">Enterprise Data Warehousing</h3>
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-colors icon-wrap">
<iconify-icon className="text-xl" icon="solar:add-circle-bold-duotone"></iconify-icon>
</div>
</div>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out opacity-0">
<p className="text-sm text-neutral-500 pr-12 max-w-2xl mt-4 mb-2">Centralize your organizational knowledge with our scalable warehousing solutions. Optimize query performance and reduce storage costs while maintaining instant access to historical data.</p>
</div>
</div>

<div className="reveal-item accordion-item border-b border-neutral-200 py-6 flex flex-col cursor-pointer group -mx-4 px-4 rounded-xl bg-neutral-50/50" data-active="true" style={{transitionDelay: '0.1s'}}>
<div className="flex items-center justify-between">
<h3 className="font-geist text-xl md:text-2xl font-medium tracking-tight text-neutral-900">Real-time Stream Processing</h3>
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors icon-wrap">
<iconify-icon className="text-xl" icon="solar:close-circle-bold-duotone"></iconify-icon>
</div>
</div>
<div className="accordion-content overflow-hidden max-h-[500px] transition-all duration-300 ease-in-out opacity-100">
<p className="text-sm text-neutral-500 pr-12 max-w-2xl mt-4 mb-2">Process millions of events per second with sub-millisecond latency. Build responsive applications that react to state changes instantly, from financial trading platforms to IoT sensor networks.</p>
</div>
</div>

<div className="reveal-item accordion-item border-b border-neutral-200 py-6 flex flex-col cursor-pointer group -mx-4 px-4 rounded-xl hover:bg-neutral-50 transition-colors" data-active="false" style={{transitionDelay: '0.2s'}}>
<div className="flex items-center justify-between">
<h3 className="font-geist text-xl md:text-2xl font-medium tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors">Machine Learning Pipelines</h3>
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-colors icon-wrap">
<iconify-icon className="text-xl" icon="solar:add-circle-bold-duotone"></iconify-icon>
</div>
</div>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out opacity-0">
<p className="text-sm text-neutral-500 pr-12 max-w-2xl mt-4 mb-2">Automate your model training and deployment cycles. Our integrated tools support popular frameworks, making it easier to go from notebook prototyping to production API endpoints.</p>
</div>
</div>
</div>
</section>


<section className="container mx-auto px-6 py-24 text-center border-t border-neutral-200/60" id="testimonials-module">
<span className="reveal-item inline-block bg-neutral-200/50 text-neutral-600 px-3 py-1.5 rounded-full text-xs font-medium mb-8">
<iconify-icon className="align-middle mr-1" icon="solar:chat-round-like-bold-duotone"></iconify-icon> Customer Stories
        </span>
<div className="reveal-item flex justify-center gap-1 mb-6 text-amber-400" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-xl" icon="solar:star-bold-duotone"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold-duotone"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold-duotone"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold-duotone"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold-duotone"></iconify-icon>
</div>
<h2 className="reveal-item font-geist text-xl md:text-2xl font-medium tracking-tight leading-snug max-w-3xl mx-auto mb-16 text-neutral-900" style={{transitionDelay: '0.2s'}}>
            "Migrating to Auradyn was a game-changer. Our query resolution times dropped by 70%, and the engineering team spends less time managing infrastructure and more time shipping features."
        </h2>
<div className="reveal-item flex flex-col items-center justify-center gap-4" style={{transitionDelay: '0.3s'}}>
<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-sm mb-2">SJ</div>
<div className="text-center">
<p className="text-sm font-medium text-neutral-900">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">CTO at TechFlow</p>
</div>
</div>
</section>


<section className="container mx-auto px-6 py-12" id="cta-card-module">
<div className="reveal-item relative w-full rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 min-h-[400px] flex items-center p-6 md:p-12 shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

<div className="relative z-10 bg-white rounded-3xl p-8 md:p-10 max-w-md shadow-xl border border-neutral-200 ml-auto mr-auto md:mr-0 md:ml-auto w-full">
<span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
<iconify-icon className="align-middle mr-1" icon="solar:calendar-date-bold-duotone"></iconify-icon> Upcoming Webinar
                </span>
<h2 className="font-geist text-2xl font-medium tracking-tight leading-tight mb-4 text-neutral-900">Mastering Data Architecture</h2>
<div className="space-y-1 mb-8">
<p className="text-sm font-medium text-neutral-900">October 15, 2024 • 10:00 AM PST</p>
<p className="text-xs text-neutral-500">Online Interactive Session</p>
</div>
<p className="text-sm text-neutral-600 mb-8 leading-relaxed">
                    Join our core engineering team to discover how to architect scalable, resilient data pipelines that can handle petabyte-scale workloads.
                </p>
<a className="relative group rounded-full px-5 py-3 bg-neutral-900 text-white text-sm font-medium overflow-hidden isolate flex items-center justify-between w-full transition-transform hover:scale-[1.02]" href="#">
<span className="relative z-10">Reserve your spot</span>
<iconify-icon className="relative z-10 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.8)_360deg)] animate-[spin_2.5s_linear_infinite]"></div>
</div>

<div className="absolute inset-[1px] bg-neutral-900 rounded-full z-0 pointer-events-none"></div>
</a>
</div>

<div className="absolute top-1/2 left-12 -translate-y-1/2 hidden md:block">
<h2 className="font-geist text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">Ready to build?</h2>
<p className="text-neutral-400 text-sm max-w-sm">Start for free today, no credit card required. Experience the power of unified data.</p>
</div>
</div>
</section>


<footer className="bg-neutral-50 border-t border-neutral-200 mt-12 pt-16 pb-8" id="footer-module">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-1 space-y-4">
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 text-neutral-900 mb-6" href="#">
<iconify-icon className="text-2xl" icon="solar:round-transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon>
                        AURADYN
                    </a>
<p className="text-xs text-neutral-500 max-w-xs">Building the foundation for the next generation of data-driven applications.</p>
</div>
<div className="col-span-1 space-y-3">
<h4 className="font-medium text-neutral-900 mb-4 text-sm font-geist">Product</h4>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Features</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Integrations</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Pricing</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Changelog</a>
</div>
<div className="col-span-1 space-y-3">
<h4 className="font-medium text-neutral-900 mb-4 text-sm font-geist">Company</h4>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">About Us</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Careers</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Blog</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors text-xs" href="#">Contact</a>
</div>
<div className="col-span-2 lg:col-span-2 space-y-3">
<h4 className="font-medium text-neutral-900 mb-4 text-sm font-geist">Subscribe to updates</h4>
<div className="flex flex-col sm:flex-row gap-2">
<input className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-shadow" placeholder="Enter your email" type="email"/>
<button className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between border-t border-neutral-200/80 pt-6 gap-4">
<p className="text-xs text-neutral-400">© 2024 Aura Dynamics. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-bold"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-bold"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-bold"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
