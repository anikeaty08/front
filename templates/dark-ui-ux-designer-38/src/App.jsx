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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
bg: {
main: '#0B0D10',
surface1: '#111318',
surface2: '#161A20',
},
text: {
primary: '#EDEFF2',
secondary: '#A1A6B0',
muted: '#6E7380',
},
accent: {
DEFAULT: '#4DFF2A', // Electric Green
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-0.04em',
tighter: '-0.02em',
widest: '0.04em', // For system text
},
fontSize: {
'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // ~72px
'heading-l': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // ~32px
'heading-m': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // ~24px
'body-l': ['1.125rem', { lineHeight: '1.6' }], // ~18px
'body-m': ['1rem', { lineHeight: '1.6' }], // ~16px
'system': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.04em' }], // ~13px
}
}
}
}



        function switchMode(mode) {
            // Update Navigation
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active-nav');
                el.classList.remove('text-text-primary');
                el.classList.add('text-text-secondary');
            });
            const activeNav = document.getElementById(`nav-${mode}`);
            activeNav.classList.add('active-nav');
            activeNav.classList.add('text-text-primary');
            activeNav.classList.remove('text-text-secondary');

            // Switch Content
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
                el.classList.remove('fade-in'); // Reset animation
            });
            
            const activeSection = document.getElementById(`page-${mode}`);
            activeSection.classList.remove('hidden');
            activeSection.classList.add('block');
            
            // Trigger reflow to restart animation
            void activeSection.offsetWidth;
            activeSection.classList.add('fade-in');

            // Scroll to top
            window.scrollTo(0, 0);
        }

        function switchTab(tabId) {
            // Update Tabs
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('tab-active');
                el.classList.remove('text-text-primary');
                el.classList.add('text-text-secondary');
            });
            const activeTab = document.getElementById(`tab-${tabId}`);
            activeTab.classList.add('tab-active');
            activeTab.classList.add('text-text-primary');
            activeTab.classList.remove('text-text-secondary');

            // Hide all tab content
            const contentContainer = document.getElementById('project-content');
            Array.from(contentContainer.children).forEach(child => {
                child.classList.add('hidden');
            });

            // Show selected
            const activeContent = document.getElementById(`content-${tabId}`);
            activeContent.classList.remove('hidden');
            
            // Add slight fade effect
            activeContent.classList.add('fade-in');
            setTimeout(() => activeContent.classList.remove('fade-in'), 400);
        }

        // Project loading simulation (just resets tabs for now)
        function loadProject(id) {
            switchTab('overview');
            // In a real app, this would load data based on ID
            // Here just visual feedback
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    
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
      

<header className="fixed top-0 left-0 w-full z-50 bg-bg-main/95 backdrop-blur-sm pt-8 pb-4">
<div className="max-w-[1320px] mx-auto px-6 md:px-20 text-center">
<nav className="flex justify-center space-x-8 md:space-x-12 mb-3">
<button className="nav-item hover:text-text-primary transition-colors text-body-m font-normal active-nav text-text-primary" id="nav-overview" onclick="switchMode('overview')" style={{}}>Overview</button>
<button className="nav-item text-text-secondary hover:text-text-primary transition-colors text-body-m font-normal" id="nav-projects" onclick="switchMode('projects')" style={{}}>Projects</button>
<button className="nav-item hover:text-text-primary transition-colors text-body-m font-normal text-text-secondary" id="nav-thinking" onclick="switchMode('thinking')" style={{}}>Thinking</button>
<button className="nav-item text-text-secondary hover:text-text-primary transition-colors text-body-m font-normal" id="nav-about" onclick="switchMode('about')" style={{}}>About</button>
<button className="nav-item text-text-secondary hover:text-text-primary transition-colors text-body-m font-normal" id="nav-contact" onclick="switchMode('contact')" style={{}}>Contact</button>
</nav>
<div className="text-system text-text-muted font-mono uppercase tracking-widest" style={{}}>
                Sara Temima Kayman — UI/UX Designer
            </div>
</div>
</header>

<main className="flex-grow md:px-20 w-full max-w-[1320px] mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative">

<section className="page-section block fade-in" id="page-overview">
<div className="grid grid-cols-12 gap-6 min-h-[60vh] items-center">
<div className="col-span-12 lg:col-span-10">
<h1 className="text-hero text-text-primary font-bold mb-6 font-space-grotesk" style={{}}>“Simplicity is the ultimate sophistication.”</h1>
<div className="flex items-center gap-2 mb-16">
<span className="w-1 h-1 bg-accent rounded-full"></span>
<p className="text-accent text-body-m font-medium" style={{}}>Leonardo da Vinci</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<h2 className="text-heading-l text-text-primary font-bold mb-2 font-space-grotesk" style={{}}>Hi, I’m Sara Temima Kayman</h2>
</div>
<div className="md:col-span-7">
<p className="text-body-l text-text-secondary font-normal mb-6">I’m a UI/UX designer focused on deep UX research and uncovering root problems. I work carefully and methodically, paying close attention to patterns, decisions, and human behavior, and turn complexity into clear, usable systems.</p>
<p className="text-body-l text-text-secondary font-normal mb-12" style={{}}>AI tools are a core part of my everyday workflow. I use them to support research, explore ideas, and refine solutions - while keeping human judgment at the center.</p>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<button className="group flex items-center gap-2 text-text-primary hover:text-accent transition-colors" onclick="switchMode('projects')">
<span className="text-body-m" style={{}}>View Projects</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors" onclick="switchMode('thinking')">
<span className="text-body-m" style={{}}>Read My Thinking</span>
</button>
<button className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors" onclick="switchMode('contact')">
<span className="text-body-m" style={{}}>Contact Me</span>
</button>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-24 pt-8 border-t border-bg-surface2 flex justify-between items-center text-system font-mono text-text-muted">
<span style={{}}>Last updated: 2026</span>
<div className="flex gap-6">
<a className="hover:text-accent transition-colors" href="#" style={{}}>LinkedIn</a>
<a className="hover:text-accent transition-colors" href="#" style={{}}>Behance</a>
<a className="hover:text-accent transition-colors" href="#" style={{}}>Email</a>
</div>
</footer>
</section>

<section className="page-section hidden" id="page-projects">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 space-y-2">
<div className="text-system font-mono text-text-muted mb-8 tracking-widest" style={{}}>SELECTED WORK</div>
<button className="w-full text-left py-4 group flex items-center justify-between" onclick="loadProject(0)">
<span className="text-heading-m text-text-primary group-hover:text-accent transition-colors font-bold font-space-grotesk" style={{}}>Government System Redesign</span>
<iconify-icon className="text-accent opacity-100" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left py-4 border-t border-bg-surface2 group flex items-center justify-between" onclick="loadProject(1)">
<span className="text-body-l font-normal text-text-secondary group-hover:text-text-primary transition-colors" style={{}}>WhatsApp AI Assistant</span>
</button>
<button className="w-full text-left py-4 border-t border-bg-surface2 group flex items-center justify-between" onclick="loadProject(2)">
<span className="text-body-l font-normal text-text-secondary group-hover:text-text-primary transition-colors" style={{}}>Community Platform UX</span>
</button>
</div>

<div className="lg:col-span-8 fade-in">
<div className="flex items-baseline gap-4 mb-2">
<span className="text-accent text-body-m font-medium" style={{}}>01</span>
<h2 className="text-heading-l text-text-primary font-bold font-space-grotesk" style={{}}>Government System Redesign</h2>
</div>
<p className="text-body-l text-text-secondary mb-10 max-w-2xl" style={{}}>
                        Redesigning a complex government interface to reduce confusion, cognitive load, and user anxiety.
                    </p>

<div className="flex gap-8 border-b border-bg-surface2 mb-10">
<button className="tab-btn tab-active pb-4 text-body-m" id="tab-overview" onclick="switchTab('overview')" style={{}}>Overview</button>
<button className="tab-btn pb-4 text-body-m text-text-secondary hover:text-text-primary transition-colors" id="tab-ux" onclick="switchTab('ux')" style={{}}>UX Research</button>
<button className="tab-btn pb-4 text-body-m text-text-secondary hover:text-text-primary transition-colors" id="tab-ui" onclick="switchTab('ui')" style={{}}>Interface</button>
<button className="tab-btn pb-4 text-body-m text-text-secondary hover:text-text-primary transition-colors" id="tab-outcome" onclick="switchTab('outcome')" style={{}}>Outcome</button>
<button className="tab-btn pb-4 text-body-m text-text-secondary hover:text-text-primary transition-colors" id="tab-casestudy" onclick="switchTab('casestudy')" style={{}}>Case Study</button>
</div>

<div className="min-h-[300px]" id="project-content">

<div className="space-y-6 animate-fade" id="content-overview">
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<span className="block text-system font-mono text-text-muted mb-2" style={{}}>ROLE</span>
<span className="text-body-m text-text-primary" style={{}}>Lead UX Designer</span>
</div>
<div>
<span className="block text-system font-mono text-text-muted mb-2" style={{}}>TIMELINE</span>
<span className="text-body-m text-text-primary" style={{}}>8 Weeks</span>
</div>
</div>
<p className="text-body-l text-text-secondary" style={{}}>
                                The legacy system suffered from 15 years of feature bloat, resulting in a 40% error rate on form submissions. The context required high accessibility standards and zero margin for error regarding legal data.
                            </p>
</div>
<div className="hidden space-y-6" id="content-ux">
<p className="text-body-l text-text-secondary" style={{}}>
                                We conducted 25 user interviews with citizens aged 18-75. The core insight: users didn't understand *why* data was needed, causing trust issues. We restructured the user flow to explain "why" before asking "what".
                            </p>
<ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
<li style={{}}>Reduced form steps by 30%</li>
<li style={{}}>Introduced progressive disclosure</li>
<li style={{}}>Added inline validation logic</li>
</ul>
</div>
<div className="hidden space-y-6" id="content-ui">
<div className="bg-bg-surface1 p-8 rounded-sm">
<p className="text-center text-text-muted italic" style={{}}>Dark mode UI preview placeholder</p>
</div>
<p className="text-body-l text-text-secondary" style={{}}>
                                Visual hierarchy was established using scale rather than color. We stripped back all non-essential borders to focus purely on the data entry points.
                            </p>
</div>
<div className="hidden space-y-6" id="content-outcome">
<h3 className="text-heading-m text-text-primary font-bold font-space-grotesk" style={{}}>Results</h3>
<div className="grid grid-cols-3 gap-6">
<div>
<span className="block text-3xl text-accent mb-1 font-bold font-space-grotesk" style={{}}>-40%</span>
<span className="text-system font-mono text-text-muted" style={{}}>ERROR RATE</span>
</div>
<div>
<span className="block text-3xl text-text-primary mb-1 font-bold font-space-grotesk" style={{}}>2.5x</span>
<span className="text-system font-mono text-text-muted" style={{}}>FASTER COMPLETION</span>
</div>
</div>
</div>
<div className="hidden" id="content-casestudy">
<div className="bg-bg-surface1 p-8 md:p-12 text-center">
<iconify-icon className="text-text-muted mb-6" icon="solar:document-text-linear" width="48"></iconify-icon>
<h3 className="text-heading-m text-text-primary mb-4 font-bold font-space-grotesk" style={{}}>Read Full Documentation</h3>
<p className="text-body-l text-text-secondary mb-8 max-w-lg mx-auto" style={{}}>
                                    This case study is presented in a detailed, light-mode format for clarity and readability. It includes full research artifacts and raw data.
                                </p>
<a className="inline-flex items-center gap-3 text-accent border border-accent/20 hover:bg-accent/10 px-6 py-3 transition-all rounded-sm" href="#">
<span className="font-medium" style={{}}>Open Full Case Study (External)</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-thinking">
<div className="max-w-4xl mx-auto">
<div className="mb-24">
<h1 className="text-hero text-text-primary leading-tight font-bold font-space-grotesk" style={{}}>
                        UX is about decisions,
                        <span className="text-text-muted font-bold font-space-grotesk" style={{}}>not screens.</span>
</h1>
</div>
<div className="space-y-24">

<article className="group cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<span className="text-system font-mono text-accent tracking-widest" style={{}}>MODE: THINKING</span>
<span className="text-system font-mono text-text-muted" style={{}}>01</span>
</div>
<h2 className="text-heading-l text-text-primary mb-6 group-hover:text-accent transition-colors font-bold font-space-grotesk" style={{}}>How I approach complex systems</h2>
<p className="text-body-l text-text-secondary max-w-2xl leading-relaxed" style={{}}>
                            Complexity isn't eliminated; it's displaced. When we make a screen "simple" by hiding everything, we often transfer the complexity to the user's memory. My approach is to map the system model first, ensuring the underlying logic matches the user's mental model before a single pixel is drawn.
                        </p>
</article>

<article className="group cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<span className="text-system font-mono text-text-muted tracking-widest" style={{}}>MODE: THINKING</span>
<span className="text-system font-mono text-text-muted" style={{}}>02</span>
</div>
<h2 className="text-heading-l text-text-primary mb-6 group-hover:text-accent transition-colors font-bold font-space-grotesk" style={{}}>Why clarity builds trust</h2>
<p className="text-body-l text-text-secondary max-w-2xl leading-relaxed" style={{}}>
                            In financial and government interfaces, ambiguity is perceived as risk. Clear labeling, predictable patterns, and transparent system status aren't just usability heuristics—they are the foundation of trust between the human and the machine.
                        </p>
</article>

<article className="group cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<span className="text-system font-mono text-text-muted tracking-widest" style={{}}>MODE: THINKING</span>
<span className="text-system font-mono text-text-muted" style={{}}>03</span>
</div>
<h2 className="text-heading-l text-text-primary mb-6 group-hover:text-accent transition-colors font-bold font-space-grotesk" style={{}}>Working with AI responsibly</h2>
<p className="text-body-l text-text-secondary max-w-2xl leading-relaxed" style={{}}>
                            AI is a tool for leverage, not replacement. I use LLMs to challenge my biases in research analysis and to generate edge-case scenarios I might miss. The goal is to enhance human judgment, not abdicate it.
                        </p>
</article>
</div>
</div>
</section>

<section className="page-section hidden" id="page-about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-6">
<h1 className="text-hero text-text-primary mb-12 font-bold font-space-grotesk" style={{}}>Hi, I’m Sara.</h1>
<div className="space-y-8 text-body-l text-text-secondary">
<p style={{}}>
                            I’m a UI/UX designer focused on understanding how people think and designing systems that feel clear, calm, and trustworthy.
                        </p>
<p style={{}}>
                            I don't believe in design for the sake of visuals. I work with complex products, utilizing research-driven methodologies to ensure every decision has a "why" behind it.
                        </p>
<p style={{}}>
                            My workflow is modern and efficient, integrating AI-assisted workflows to speed up discovery so I can spend more time on the nuances of interaction.
                        </p>
</div>
<div className="mt-12">
<span className="block text-system font-mono text-text-muted mb-4 tracking-widest" style={{}}>SKILLS &amp; TOOLS</span>
<div className="flex flex-wrap gap-x-6 gap-y-3 text-body-m text-text-primary">
<span style={{}}>UX Research</span>
<span className="text-text-muted" style={{}}>/</span>
<span style={{}}>Product Thinking</span>
<span className="text-text-muted" style={{}}>/</span>
<span style={{}}>Design Systems</span>
<span className="text-text-muted" style={{}}>/</span>
<span style={{}}>Figma</span>
<span className="text-text-muted" style={{}}>/</span>
<span className="text-accent" style={{}}>AI Integration</span>
</div>
</div>
<div className="mt-16 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="text-system font-mono text-text-primary tracking-widest uppercase" style={{}}>Open to roles</span>
</div>
</div>
<div className="md:col-span-5 md:col-start-8">
<div className="relative w-full aspect-square max-w-[400px] mx-auto">

<div className="w-full h-full rounded-full bg-bg-surface1 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">

<div className="absolute inset-0 bg-gradient-to-tr from-bg-surface2 to-bg-surface1 flex items-center justify-center">
<iconify-icon className="text-text-muted opacity-20" icon="solar:user-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-contact">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<h1 className="text-hero text-text-primary mb-8 font-bold font-space-grotesk" style={{}}>Let’s talk.</h1>
<p className="text-body-l text-text-secondary mb-12" style={{}}>
                        Currently available for freelance projects and full-time roles.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:sara@example.com">
<div className="w-12 h-12 bg-bg-surface1 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-main transition-colors">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<span className="text-heading-m text-text-primary font-bold font-space-grotesk" style={{}}>Email Me</span>
</a>
<a className="flex items-center gap-4 group" href="#">
<div className="w-12 h-12 bg-bg-surface1 rounded-full flex items-center justify-center text-text-secondary group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
<iconify-icon icon="brandico:linkedin" width="20"></iconify-icon>
</div>
<span className="text-heading-m text-text-primary font-bold font-space-grotesk" style={{}}>LinkedIn</span>
</a>
</div>
<div className="mt-20 pt-8 border-t border-bg-surface2 text-system font-mono text-text-muted">
<p style={{}}>sara.temima@design.com</p>
<p className="mt-2" style={{}}>Location: Israel</p>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7 pt-4">
<form className="space-y-8">
<div>
<label className="block text-system font-mono text-text-muted mb-2 uppercase tracking-widest" style={{}}>Name</label>
<input className="input-reset text-body-l" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-system font-mono text-text-muted mb-2 uppercase tracking-widest" style={{}}>Email</label>
<input className="input-reset text-body-l" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-system font-mono text-text-muted mb-2 uppercase tracking-widest" style={{}}>Message</label>
<textarea className="input-reset text-body-l resize-none" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="mt-8 text-body-l text-accent hover:text-white transition-colors flex items-center gap-3" style={{}} type="submit">
                            Send Message
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>



    </>
  );
}
