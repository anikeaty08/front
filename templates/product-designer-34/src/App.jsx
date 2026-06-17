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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        const projectData = {
            'chronos': {
                title: 'Chronos Dashboard',
                subtitle: 'A unified financial operating system',
                tags: ['Fintech', 'System', 'React'],
                role: 'Lead Designer',
                timeline: '6 Months',
                team: 'Design Team of 3',
                description: `
                    <p>Chronos started as a fragmented set of internal tools. The goal was to unify these disparate systems into a cohesive dashboard that allows financial analysts to monitor real-time market data without cognitive overload.</p>
                    <p>I led the creation of a new design system, "Orbit", which standardized components across the platform. We focused heavily on data density—allowing power users to see more information at a glance while maintaining readability through careful typography and spacing choices.</p>
                    <p>The result was a 40% reduction in time-to-action for key workflows and a significantly reduced learning curve for new analysts joining the team.</p>
                `,
                visualClass: 'bg-neutral-900' // Placeholder for visual logic
            },
            'vortex': {
                title: 'Vortex Mobile',
                subtitle: 'Next-gen e-commerce experience',
                tags: ['iOS', 'Mobile', 'Commerce'],
                role: 'Product Designer',
                timeline: '3 Months',
                team: 'Solo Project',
                description: `
                    <p>Vortex is a concept application exploring the future of mobile commerce. Moving away from traditional grid layouts, this project experiments with spatial navigation and gesture-based interactions.</p>
                    <p>The challenge was to make browsing feel like exploration. I utilized framer motion and extensive prototyping to fine-tune the "feel" of the swipe gestures. The card-based interface allows users to stack and compare items intuitively.</p>
                    <p>Key focus areas included haptic feedback patterns and fluid transitions that maintain context as the user drills down into product details.</p>
                `,
                visualClass: 'bg-neutral-900'
            },
            'typescale': {
                title: 'Type Scale Tool',
                subtitle: 'Harmonious typography for developers',
                tags: ['Tooling', 'Open Source', 'Web'],
                role: 'Creator',
                timeline: '2 Weeks',
                team: 'Solo',
                description: `
                    <p>Typography is often the hardest part of setting up a new web project. I built Type Scale to help developers and designers visualize modular scales in real-time within the browser.</p>
                    <p>The tool allows users to select a base size and a ratio (like Perfect Fifth or Golden Ratio) to generate a full set of heading and body sizes. It automatically exports Tailwind config files and CSS variables.</p>
                    <p>Since its release, it has been starred over 500 times on GitHub and helps thousands of developers maintain vertical rhythm in their projects.</p>
                `,
                visualClass: 'bg-neutral-900'
            },
            'stack': {
                title: 'Stack Analytics',
                subtitle: 'B2B SaaS Data Visualization',
                tags: ['SaaS', 'Data Viz', 'B2B'],
                role: 'UI Engineer',
                timeline: '4 Months',
                team: '2 Engineers, 1 PM',
                description: `
                    <p>Stack Analytics helps SaaS companies understand their churn metrics. The problem with existing tools was their complexity; they showed too much data without context.</p>
                    <p>My role involved simplifying the visualization layer. We moved from complex tables to interactive charts that allow users to "drill down" into cohorts. I implemented a color-coding system that highlights anomalies automatically.</p>
                    <p>We built the front-end in Next.js, ensuring that the heavy data lifting didn't compromise the UI responsiveness.</p>
                `,
                visualClass: 'bg-neutral-900'
            }
        };

        function openModal(projectId) {
            const modal = document.getElementById('project-modal');
            const data = projectData[projectId];
            
            if (!data) return;

            // Update Content
            document.getElementById('modal-title').innerText = data.title;
            document.getElementById('modal-subtitle').innerText = data.subtitle;
            document.getElementById('modal-role').innerText = data.role;
            document.getElementById('modal-timeline').innerText = data.timeline;
            document.getElementById('modal-team').innerText = data.team;
            document.getElementById('modal-description').innerHTML = data.description;

            // Update Tags
            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = '';
            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'text-neutral-500';
                span.innerText = tag;
                tagsContainer.appendChild(span);
            });

            // Clone the visual from the card to the modal
            // Note: This relies on the card having specific structure in DOM relative to the click. 
            // Since we pass ID, let's grab the element by searching the DOM for the click trigger's visual.
            // Simplified: We will just clear the visual area. In a real app, we'd load a high-res image.
            const visualContainer = document.getElementById('modal-visual');
            visualContainer.innerHTML = ''; 
            
            // Create a simple abstract representation based on the project ID to keep it consistent
            // This re-creates the "Art" in the modal header
            if(projectId === 'chronos') {
                visualContainer.innerHTML = `<div class="w-full max-w-md aspect-video bg-neutral-900 rounded-lg border border-neutral-800 shadow-2xl flex flex-col overflow-hidden relative"><div class="absolute inset-0 bg-neutral-800/20"></div><div class="h-10 border-b border-neutral-800 flex items-center px-4 gap-2 relative z-10 bg-neutral-900"><div class="w-3 h-3 rounded-full bg-red-500/20"></div><div class="w-3 h-3 rounded-full bg-yellow-500/20"></div><div class="w-3 h-3 rounded-full bg-green-500/20"></div></div><div class="p-8 flex gap-4 relative z-10"><div class="w-1/4 h-32 bg-neutral-800/50 rounded-md"></div><div class="flex-1 space-y-4"><div class="h-4 w-3/4 bg-neutral-800 rounded"></div><div class="h-24 w-full bg-neutral-800/30 rounded border border-neutral-800 border-dashed"></div></div></div></div>`;
            } else if (projectId === 'vortex') {
                visualContainer.innerHTML = `<div class="w-64 h-full bg-neutral-900 rounded-t-2xl border-x border-t border-neutral-800 shadow-2xl flex flex-col items-center pt-8 relative"><div class="w-16 h-1 bg-neutral-800 rounded-full mb-6"></div><div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center justify-center"><i data-lucide="layers" class="text-white/40 w-8 h-8"></i></div><div class="w-full px-6 space-y-3"><div class="h-3 w-2/3 bg-neutral-800 rounded-full mx-auto"></div><div class="h-3 w-1/2 bg-neutral-800 rounded-full mx-auto"></div></div></div>`;
                lucide.createIcons();
            } else if (projectId === 'typescale') {
                visualContainer.innerHTML = `<div class="relative w-64 h-64 rounded-full border border-white/10 flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-white/5 scale-125"></div><div class="w-40 h-40 bg-neutral-950 rounded-full border border-neutral-700 flex items-center justify-center shadow-2xl"><span class="text-5xl font-bold text-white tracking-tighter">Aa</span></div></div>`;
            } else if (projectId === 'stack') {
                visualContainer.innerHTML = `<div class="w-full max-w-md h-48 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl p-6 relative"><div class="flex items-center justify-between mb-6"><div class="h-3 w-20 bg-neutral-800 rounded-full"></div><div class="h-8 w-24 bg-white/5 rounded-md"></div></div><div class="flex items-end gap-3 h-24"><div class="w-1/5 h-full bg-neutral-800/30 rounded-t"></div><div class="w-1/5 h-3/4 bg-neutral-800/50 rounded-t"></div><div class="w-1/5 h-1/2 bg-neutral-800/30 rounded-t"></div><div class="w-1/5 h-full bg-white/10 rounded-t border-t border-x border-white/5"></div><div class="w-1/5 h-2/3 bg-neutral-800/30 rounded-t"></div></div></div>`;
            }

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }

        function closeModal() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg hover:text-neutral-200 transition-colors" href="#">
                AM.
            </a>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<button className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" onclick="window.location.href='mailto:hello@alexmoreau.design'">
<span>Contact</span>
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

<section className="mb-32">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Crafting digital interfaces that feel <span className="bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent">effortless.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
                    I'm Alex, a product designer focused on building comprehensive design systems and intuitive user experiences for complex technical tools.
                </p>
<div className="flex items-center gap-6 mt-10">
<a className="text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity text-sm font-medium" href="#work">View Selected Work</a>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="dribbble"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</section>

<section className="mb-32" id="work">
<div className="flex items-end justify-between mb-12 border-b border-neutral-800 pb-4">
<h2 className="text-xl text-white font-medium tracking-tight">Selected Projects</h2>
<span className="text-xs font-mono text-neutral-500">2023 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="openModal('chronos')">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden mb-5 transition-all duration-500 group-hover:border-neutral-600">
<div className="absolute inset-0 bg-neutral-800/30 group-hover:bg-neutral-800/0 transition-colors duration-500"></div>

<div className="absolute inset-8 bg-neutral-950 rounded-lg border border-neutral-800 shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
<div className="h-8 border-b border-neutral-800 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="flex-1 p-6 flex gap-4">
<div className="w-1/4 h-full bg-neutral-900 rounded-md"></div>
<div className="flex-1 space-y-3">
<div className="h-4 w-3/4 bg-neutral-800 rounded"></div>
<div className="h-20 w-full bg-neutral-900 rounded border border-neutral-800 border-dashed"></div>
<div className="flex gap-2">
<div className="h-8 w-full bg-neutral-800 rounded"></div>
<div className="h-8 w-1/3 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:underline decoration-neutral-700 underline-offset-4 decoration-1">Chronos Dashboard</h3>
<p className="text-sm text-neutral-500">Fintech, Design System, React</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openModal('vortex')">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden mb-5 transition-all duration-500 group-hover:border-neutral-600">
<div className="absolute inset-0 bg-neutral-800/30 group-hover:bg-neutral-800/0 transition-colors duration-500"></div>
<div className="absolute inset-x-12 bottom-0 top-12 bg-neutral-950 rounded-t-xl border-x border-t border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 flex flex-col p-6 items-center">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 flex items-center justify-center">
<i className="text-white/40 w-6 h-6" data-lucide="layers"></i>
</div>
<div className="w-full space-y-3">
<div className="h-2 w-1/2 bg-neutral-800 mx-auto rounded-full"></div>
<div className="h-2 w-1/3 bg-neutral-800 mx-auto rounded-full"></div>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 w-full">
<div className="h-16 bg-neutral-900 border border-neutral-800 rounded-lg"></div>
<div className="h-16 bg-neutral-900 border border-neutral-800 rounded-lg"></div>
<div className="h-16 bg-neutral-900 border border-neutral-800 rounded-lg"></div>
<div className="h-16 bg-neutral-900 border border-neutral-800 rounded-lg"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:underline decoration-neutral-700 underline-offset-4 decoration-1">Vortex Mobile</h3>
<p className="text-sm text-neutral-500">iOS, E-commerce, Prototyping</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openModal('typescale')">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden mb-5 transition-all duration-500 group-hover:border-neutral-600">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/10 opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-48 h-48 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="absolute inset-0 rounded-full border border-white/5 scale-125"></div>
<div className="w-32 h-32 bg-neutral-950 rounded-full border border-neutral-700 flex items-center justify-center shadow-xl">
<span className="text-2xl font-bold text-white tracking-tighter">Aa</span>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:underline decoration-neutral-700 underline-offset-4 decoration-1">Type Scale Tool</h3>
<p className="text-sm text-neutral-500">Developer Tool, Open Source</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openModal('stack')">
<div className="relative aspect-[4/3] bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden mb-5 transition-all duration-500 group-hover:border-neutral-600">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl p-4 transition-all duration-500 group-hover:-translate-y-[55%]">
<div className="flex items-center justify-between mb-4">
<div className="h-2 w-12 bg-neutral-800 rounded-full"></div>
<div className="h-6 w-16 bg-white/10 rounded-md"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-neutral-800/50 rounded-full"></div>
<div className="h-2 w-full bg-neutral-800/50 rounded-full"></div>
<div className="h-2 w-2/3 bg-neutral-800/50 rounded-full"></div>
</div>
<div className="mt-6 flex gap-2">
<div className="h-20 flex-1 bg-neutral-900 border border-neutral-800 rounded-md"></div>
<div className="h-20 flex-1 bg-neutral-900 border border-neutral-800 rounded-md"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 w-3/4 h-3/4 bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl p-4 opacity-50 scale-95 transition-all duration-500 group-hover:translate-y-[10%] group-hover:opacity-100 group-hover:scale-100 group-hover:bg-neutral-950 group-hover:border-neutral-600">
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="h-2 w-20 bg-neutral-700 rounded-full"></div>
</div>
<div className="h-32 bg-gradient-to-b from-neutral-800 to-transparent rounded opacity-50"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1 group-hover:underline decoration-neutral-700 underline-offset-4 decoration-1">Stack Analytics</h3>
<p className="text-sm text-neutral-500">B2B SaaS, Data Visualization</p>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32" id="process">
<div className="mb-12 border-b border-neutral-800 pb-4">
<h2 className="text-xl text-white font-medium tracking-tight">Design Philosophy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-white font-medium text-base">Detail Oriented</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                        I believe the magic lies in the details. Micro-interactions and pixel-perfect implementation create the difference between good and great.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<h3 className="text-white font-medium text-base">System Thinking</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                        Designs should scale. I build robust component libraries and guidelines that ensure consistency across growing products.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-white font-medium text-base">User Centric</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                        Data-driven decisions backed by user research. I iterate fast based on real feedback to solve actual problems.
                    </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24" id="about">
<div>
<h2 className="text-xl text-white font-medium tracking-tight mb-6">About Me</h2>
<div className="space-y-6 text-neutral-400 text-base leading-relaxed">
<p>
                        I started my journey as a developer, which gives me a unique perspective on design feasibility and technical constraints. Over the last 5 years, I've transitioned into Product Design, working with early-stage startups to Series B companies.
                    </p>
<p>
                        Currently, I'm obsessed with the intersection of AI and interface design, exploring how we can make complex generative models feel accessible and human.
                    </p>
<p>
                        When I'm not in Figma, I'm usually taking photos or tinkering with mechanical keyboards.
                    </p>
</div>
</div>
<div>
<h2 className="text-xl text-white font-medium tracking-tight mb-6">Experience</h2>
<div className="space-y-4">

<div className="group flex items-center justify-between p-4 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">
                                S.
                            </div>
<div>
<h4 className="text-white text-sm font-medium">Stripe (Contract)</h4>
<p className="text-xs text-neutral-500">Senior Product Designer</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-mono">2022 — Present</span>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold tracking-tighter text-xs border border-neutral-700">
                                L.
                            </div>
<div>
<h4 className="text-white text-sm font-medium">Linear</h4>
<p className="text-xs text-neutral-500">Product Designer</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-mono">2020 — 2022</span>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold tracking-tighter text-xs border border-neutral-700">
                                V.
                            </div>
<div>
<h4 className="text-white text-sm font-medium">Vercel</h4>
<p className="text-xs text-neutral-500">UI Engineer</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-mono">2018 — 2020</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-neutral-800">
<h3 className="text-sm font-medium text-white mb-4">Stack</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400">Figma</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400">React</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400">Tailwind CSS</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400">Next.js</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400">Spline</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 pt-12 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="text-sm text-neutral-600">
<p>© 2024 Alex Moreau. All Rights Reserved.</p>
<p className="mt-1 text-xs">Built with Tailwind &amp; Love.</p>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="mailto:hello@alexmoreau.design">
<i className="w-4 h-4" data-lucide="mail"></i> Email
                </a>
<a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i> Twitter
                </a>
<a className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn
                </a>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 hidden" id="project-modal">

<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md" onclick="closeModal()"></div>

<div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col" id="modal-content">

<button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700 text-white transition-colors border border-neutral-700/50" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>

<div className="h-64 sm:h-80 w-full bg-neutral-950 border-b border-neutral-800 relative flex items-center justify-center overflow-hidden">
<div className="w-full h-full flex items-center justify-center p-8" id="modal-visual">

</div>
</div>

<div className="p-8 sm:p-10">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
<div>
<div className="flex gap-3 mb-4 text-xs font-mono text-neutral-500 uppercase tracking-wider" id="modal-tags">

</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2" id="modal-title">Project Title</h2>
<p className="text-neutral-400 text-lg" id="modal-subtitle">Subtitle goes here</p>
</div>
<a className="shrink-0 inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors" href="#">
                        Open Project <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="md:col-span-2 space-y-6 text-neutral-400 leading-relaxed text-base" id="modal-description">

</div>
<div className="space-y-8">
<div>
<h4 className="text-white font-medium mb-3 text-sm">Role</h4>
<p className="text-sm text-neutral-400" id="modal-role">Lead Product Designer</p>
</div>
<div>
<h4 className="text-white font-medium mb-3 text-sm">Timeline</h4>
<p className="text-sm text-neutral-400" id="modal-timeline">Q3 2023 - Q4 2023</p>
</div>
<div>
<h4 className="text-white font-medium mb-3 text-sm">Team</h4>
<p className="text-sm text-neutral-400" id="modal-team">2 Designers, 4 Engineers, 1 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
