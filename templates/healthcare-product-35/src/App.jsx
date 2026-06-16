import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#2ba0b0', // Teal/Cyan
dark: '#228592',
light: '#eafcfd',
},
charcoal: {
DEFAULT: '#1f2121', // Primary Text
muted: '#627077', // Secondary Text
},
cream: '#fcfcf9', // Background
surface: '#f5f5f5', // Secondary BG
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
spacing: {
'128': '32rem',
},
transitionTimingFunction: {
'snappy': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



        // Iconify
        lucide.createIcons();

        // Simple Routing Logic
        function navigateTo(view) {
            const homeView = document.getElementById('view-home');
            const projectView = document.getElementById('view-project');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (view === 'project') {
                homeView.classList.add('fade-out');
                setTimeout(() => {
                    homeView.classList.add('hidden');
                    homeView.classList.remove('fade-out');
                    
                    projectView.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        projectView.classList.remove('opacity-0');
                    }, 50);
                }, 300);
            } else {
                projectView.classList.add('opacity-0');
                setTimeout(() => {
                    projectView.classList.add('hidden');
                    
                    homeView.classList.remove('hidden');
                    homeView.classList.remove('opacity-0'); // ensure it's visible
                }, 300);
            }
        }

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        
        // Hide menu on link click
        menu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 sm:h-20">

<button className="flex-shrink-0 flex items-center gap-3 group focus:outline-none" onclick="navigateTo('home')">
<div className="w-8 h-8 bg-charcoal text-white rounded-lg flex items-center justify-center font-semibold tracking-tighter text-sm group-hover:bg-brand transition-colors">
                        JD
                    </div>
<span className="hidden sm:block font-medium tracking-tight text-sm">John Doe</span>
</button>

<div className="hidden md:flex items-center space-x-8">
<button className="text-sm font-medium text-charcoal-muted hover:text-brand transition-colors duration-200" onclick="navigateTo('home')">Work</button>
<a className="text-sm font-medium text-charcoal-muted hover:text-brand transition-colors duration-200" href="mailto:hello@johndoe.com">Contact</a>
<a className="bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand transition-colors duration-200 ease-snappy" href="#contact-footer">Let's Talk</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-charcoal hover:text-brand transition-colors" id="mobile-menu-btn">
<i data-lucide="menu" height="24" width="24"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<button className="block w-full text-left px-3 py-3 text-base font-medium text-charcoal hover:bg-brand-light hover:text-brand rounded-md" onclick="navigateTo('home')">Work</button>
<a className="block w-full text-center mt-4 bg-brand text-white px-4 py-3 rounded-lg text-base font-medium" href="#contact-footer">Get in Touch</a>
</div>
</div>
</nav>

<div className="pt-16 sm:pt-20" id="main-container">

<div className="view-transition" id="view-home">

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand/20 text-brand text-xs font-mono mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                                Available for new collaborations
                            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal tracking-tight leading-[1.1] mb-6">
                                Designing Healthcare <br/>
<span className="text-charcoal-muted">Experiences That Matter.</span>
</h1>
<p className="text-lg text-charcoal-muted max-w-xl leading-relaxed mb-8 font-normal">
                                I bridge the gap between complex medical data and human-centric design. Senior Product Designer crafting clarity for patients and clinicians.
                            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-brand hover:bg-brand-dark transition-all duration-200 ease-snappy shadow-sm hover:shadow-md" href="#work">
                                    View Case Studies
                                </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-gray-200 text-sm font-medium rounded-lg text-charcoal bg-white hover:border-brand hover:text-brand transition-all duration-200 ease-snappy" href="#contact-footer">
                                    Contact Me
                                </a>
</div>
</div>

<div className="lg:col-span-5 relative mt-12 lg:mt-0">
<div className="relative w-full aspect-square md:aspect-[4/3] bg-surface rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

<div className="absolute inset-0 p-6 flex flex-col gap-4 opacity-90">

<div className="h-8 w-full flex items-center justify-between border-b border-gray-200 pb-4">
<div className="w-1/3 h-2 bg-gray-200 rounded-full"></div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="w-6 h-6 rounded-full bg-brand/20"></div>
</div>
</div>

<div className="flex-1 flex gap-4">

<div className="w-16 hidden sm:flex flex-col gap-3 pt-2">
<div className="w-8 h-8 rounded-md bg-gray-200"></div>
<div className="w-8 h-8 rounded-md bg-white border border-gray-100"></div>
<div className="w-8 h-8 rounded-md bg-white border border-gray-100"></div>
</div>

<div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-4">
<div className="flex justify-between items-end">
<div className="w-1/2 h-4 bg-gray-100 rounded-full"></div>
<div className="w-1/4 h-8 bg-brand/10 rounded-md"></div>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 mt-2">
<div className="w-full bg-brand/10 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-brand/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-brand/40 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-brand/30 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-brand rounded-t-sm h-[90%]"></div>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="h-16 bg-surface rounded-lg"></div>
<div className="h-16 bg-surface rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-charcoal">7+</span>
<span className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mt-1">Years Experience</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-charcoal">20+</span>
<span className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mt-1">Products Shipped</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-charcoal">50M+</span>
<span className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mt-1">Users Impacted</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-charcoal">100%</span>
<span className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mt-1">Commitment</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight mb-2">Featured Work</h2>
<p className="text-charcoal-muted text-sm max-w-md">Selected projects focusing on clinical workflows and patient care.</p>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer flex flex-col h-full" onclick="navigateTo('project')">
<div className="card-hover relative bg-white rounded-xl border border-gray-100 overflow-hidden mb-5">
<div className="aspect-[4/3] bg-surface relative overflow-hidden">

<div className="absolute inset-8 bg-white rounded-t-lg shadow-sm border border-gray-100 flex flex-col transition-transform duration-500 group-hover:scale-105 origin-top">
<div className="h-8 border-b border-gray-50 flex items-center px-3 gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="p-4 grid grid-cols-3 gap-2">
<div className="col-span-2 h-20 bg-brand/5 rounded"></div>
<div className="h-20 bg-gray-50 rounded"></div>
<div className="col-span-3 h-32 bg-gray-50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-gray-100 text-charcoal-muted uppercase tracking-wider">Clinical OS</span>
<span className="text-xs font-mono text-brand flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 40% Efficiency
                                </span>
</div>
<h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-brand transition-colors">MediFlow Dashboard</h3>
<p className="text-sm text-charcoal-muted leading-relaxed">Redesigning the electronic health record interface to reduce physician burnout and cognitive load.</p>
</article>

<article className="group cursor-pointer flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
<div className="card-hover relative bg-white rounded-xl border border-gray-100 overflow-hidden mb-5">
<div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center">

<div className="w-32 h-56 bg-white rounded-[2rem] border-4 border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-105 relative overflow-hidden">
<div className="absolute top-0 w-full h-6 bg-gray-100 flex justify-center pt-1"><div className="w-12 h-3 bg-gray-800 rounded-full"></div></div>
<div className="mt-8 px-3 space-y-2">
<div className="w-8 h-8 rounded-full bg-brand mb-4"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded"></div>
<div className="mt-4 p-2 bg-brand/10 rounded-lg">
<div className="h-8 w-full bg-brand/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-gray-100 text-charcoal-muted uppercase tracking-wider">Mobile Health</span>
<span className="text-xs font-mono text-brand flex items-center gap-1">
<i className="w-3 h-3" data-lucide="star"></i> 4.9 Rating
                                </span>
</div>
<h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-brand transition-colors">Pulse Patient App</h3>
<p className="text-sm text-charcoal-muted leading-relaxed">A remote monitoring companion app connecting post-op patients with their care teams.</p>
</article>

<article className="group cursor-pointer flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
<div className="card-hover relative bg-white rounded-xl border border-gray-100 overflow-hidden mb-5">
<div className="aspect-[4/3] bg-surface relative overflow-hidden p-8 flex items-center justify-center">

<div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-100 p-4 transition-transform duration-500 group-hover:scale-105">
<div className="flex justify-between items-center mb-4">
<div className="w-6 h-6 rounded border border-gray-200"></div>
<div className="w-20 h-2 bg-gray-100 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-gray-50 rounded"></div>
<div className="h-2 w-full bg-gray-50 rounded"></div>
<div className="h-2 w-2/3 bg-gray-50 rounded"></div>
<div className="h-20 w-full bg-brand/5 rounded border border-brand/10 mt-2 flex items-center justify-center">
<div className="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-gray-100 text-charcoal-muted uppercase tracking-wider">Telehealth</span>
<span className="text-xs font-mono text-brand flex items-center gap-1">
<i className="w-3 h-3" data-lucide="zap"></i> 2x Speed
                                </span>
</div>
<h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-brand transition-colors">TeleDoc Connect</h3>
<p className="text-sm text-charcoal-muted leading-relaxed">Streamlining the video consultation workflow for low-bandwidth rural healthcare centers.</p>
</article>
</div>
</div>
</section>
</div>

<div className="hidden view-transition opacity-0" id="view-project">

<section className="pt-20 pb-16 bg-cream border-b border-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="inline-flex items-center gap-2 text-sm text-charcoal-muted hover:text-brand transition-colors mb-8 group" onclick="navigateTo('home')">
<i className="w-4 h-4 transition-transform group-hover:-translate-x-1" data-lucide="arrow-left"></i> Back to Work
                    </button>
<div className="flex flex-col gap-6">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-brand-light border border-brand/20 text-brand text-xs font-mono font-medium">SaaS</span>
<span className="px-2 py-1 rounded bg-surface border border-gray-200 text-charcoal-muted text-xs font-mono font-medium">2023</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-charcoal tracking-tight">MediFlow Dashboard</h1>
<p className="text-xl text-charcoal-muted leading-relaxed max-w-2xl">
                            A comprehensive redesign of a legacy Electronic Health Record (EHR) system to reduce clinician cognitive load and improve patient safety.
                        </p>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mb-2">Role</h4>
<p className="text-sm font-medium text-charcoal">Lead Product Designer</p>
</div>
<div>
<h4 className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mb-2">Team</h4>
<p className="text-sm font-medium text-charcoal">2 PMs, 4 Engineers</p>
</div>
<div>
<h4 className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mb-2">Timeline</h4>
<p className="text-sm font-medium text-charcoal">8 Months</p>
</div>
<div>
<h4 className="text-xs font-mono uppercase tracking-wide text-charcoal-muted mb-2">Outcome</h4>
<p className="text-sm font-medium text-brand">30% Faster Charting</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-lg font-semibold text-charcoal sticky top-24">The Challenge</h3>
</div>
<div className="md:col-span-8 space-y-6 text-charcoal-muted leading-relaxed">
<p>
                                Clinicians spend nearly 50% of their day documenting in EHRs, leading to significant burnout. The existing MediFlow interface was built over 15 years ago, suffering from feature bloat, inconsistent navigation, and poor data hierarchy.
                            </p>
<p>
                                Our goal was to modernize the interface without disrupting established workflows, ensuring that critical patient data was always accessible at a glance.
                            </p>
<div className="bg-surface p-6 rounded-xl border border-gray-100 mt-6">
<h4 className="text-sm font-semibold text-charcoal mb-3">Key Pain Points</h4>
<ul className="space-y-3">
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
                                        Excessive clicks to reach common medication orders.
                                    </li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
                                        Alert fatigue caused by unprioritized notifications.
                                    </li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
                                        Slow loading times on mobile rounding devices.
                                    </li>
</ul>
</div>
</div>
</div>

<div className="bg-surface rounded-xl overflow-hidden border border-gray-100 shadow-sm">
<div className="aspect-video relative bg-gray-50 flex items-center justify-center">

<div className="w-[80%] h-[80%] bg-white rounded shadow-lg border border-gray-200 flex flex-col">
<div className="h-10 border-b border-gray-100 flex items-center px-4 justify-between bg-gray-50">
<div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
<div className="w-1/3 h-2 bg-gray-200 rounded"></div>
</div>
<div className="flex-1 flex">
<div className="w-16 border-r border-gray-100 bg-gray-50 flex flex-col items-center py-4 gap-4">
<div className="w-8 h-8 rounded bg-brand text-white flex items-center justify-center"><i className="w-4 h-4" data-lucide="layout-grid"></i></div>
<div className="w-8 h-8 rounded text-gray-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="users"></i></div>
<div className="w-8 h-8 rounded text-gray-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="calendar"></i></div>
</div>
<div className="flex-1 p-6 grid grid-cols-12 gap-6">
<div className="col-span-8 space-y-4">
<div className="h-32 rounded-lg bg-surface border border-gray-100 p-4">
<div className="w-32 h-4 bg-gray-200 rounded mb-4"></div>
<div className="w-full h-12 bg-brand/10 rounded flex items-end pb-2 px-2 gap-2">
<div className="w-1/6 h-6 bg-brand/40"></div>
<div className="w-1/6 h-8 bg-brand/60"></div>
<div className="w-1/6 h-4 bg-brand/30"></div>
<div className="w-1/6 h-10 bg-brand"></div>
</div>
</div>
<div className="h-48 rounded-lg bg-surface border border-gray-100"></div>
</div>
<div className="col-span-4 space-y-4">
<div className="h-full rounded-lg bg-surface border border-gray-100"></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-gray-100 bg-white">
<p className="text-xs text-charcoal-muted text-center font-mono">Figure 1.0: The redesigned clinician dashboard with modular widgets.</p>
</div>
</div>

<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-lg font-semibold text-charcoal sticky top-24">The Solution</h3>
</div>
<div className="md:col-span-8 space-y-6 text-charcoal-muted leading-relaxed">
<p>
                                We moved from a page-based architecture to a modular "widget" system. This allows doctors to customize their dashboard based on their specialty (e.g., Cardiology vs. Pediatrics).
                            </p>
<h4 className="text-charcoal font-medium mt-4">Smart Defaults</h4>
<p>
                                Utilizing historical data, the system now pre-populates common order sets for specific diagnoses, requiring only a review and sign-off rather than manual entry from scratch.
                            </p>
<h4 className="text-charcoal font-medium mt-4">Design System</h4>
<p>
                                I established "Vitality," a new design system based on atomic principles, ensuring high contrast for accessibility and consistent touch targets for tablet users.
                             </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100">
<div className="p-6 bg-brand-light rounded-xl border border-brand/10 text-center">
<div className="text-3xl font-bold text-brand mb-1">30%</div>
<div className="text-xs font-mono uppercase tracking-wide text-brand-dark">Time Saved</div>
</div>
<div className="p-6 bg-surface rounded-xl border border-gray-100 text-center">
<div className="text-3xl font-bold text-charcoal mb-1">4.5/5</div>
<div className="text-xs font-mono uppercase tracking-wide text-charcoal-muted">SUS Score</div>
</div>
<div className="p-6 bg-surface rounded-xl border border-gray-100 text-center">
<div className="text-3xl font-bold text-charcoal mb-1">Zero</div>
<div className="text-xs font-mono uppercase tracking-wide text-charcoal-muted">Critical Errors</div>
</div>
</div>
</div>
</section>
</div>
</div>

<section className="py-24 bg-charcoal text-white relative overflow-hidden" id="contact-footer">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Let's build something meaningful.</h2>
<p className="text-gray-400 mb-10 max-w-xl mx-auto">Open for collaborations on healthcare, wellness, and data-heavy products.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="space-y-4">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" id="email" name="email" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none" id="message" name="message" placeholder="Tell me about your project..." rows="3"></textarea>
</div>
</div>
<button className="w-full py-3 px-6 rounded-lg bg-brand hover:bg-brand-dark text-white font-medium shadow-lg hover:shadow-brand/25 transition-all duration-200 ease-snappy" type="button">
                    Start a Conversation
                </button>
</form>
<div className="mt-12 flex justify-center gap-6">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i data-lucide="linkedin" height="20" width="20"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i data-lucide="twitter" height="20" width="20"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i data-lucide="dribbble" height="20" width="20"></i></a>
</div>
</div>
</section>

<footer className="bg-cream border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-charcoal text-white rounded flex items-center justify-center font-bold text-xs">JD</div>
<span className="text-xs text-charcoal-muted">© 2023 John Doe.</span>
</div>
<p className="text-xs text-charcoal-muted flex items-center gap-1">
                    Designed with <i className="text-brand fill-brand" data-lucide="heart" height="10" width="10"></i> in SF
                </p>
</div>
</div>
</footer>



    </>
  );
}
