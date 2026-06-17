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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
slate: {
850: '#151f32', // Custom dark
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white/90');
                navbar.classList.remove('bg-white/80');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white/90');
                navbar.classList.add('bg-white/80');
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all content
            document.querySelectorAll('.service-content').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected content
            const selectedContent = document.getElementById(tabId);
            selectedContent.classList.remove('hidden');
            selectedContent.classList.add('animate-fade-in');

            // Reset buttons
            document.querySelectorAll('.service-tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'shadow-sm', 'border-slate-200', 'text-primary-600', 'ring-1', 'ring-primary-500/20');
                btn.classList.add('text-slate-600', 'hover:bg-white', 'border-transparent');
                
                // Reset icons
                const icon = btn.querySelector('iconify-icon');
                if(icon) {
                    icon.classList.remove('opacity-100');
                    icon.classList.add('opacity-0', 'group-hover:opacity-100');
                }
            });

            // Highlight active button
            const activeBtn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
            activeBtn.classList.remove('text-slate-600', 'hover:bg-white', 'border-transparent');
            activeBtn.classList.add('bg-white', 'shadow-sm', 'border-slate-200', 'text-primary-600', 'ring-1', 'ring-primary-500/20');
            
            // Show icon on active
            const activeIcon = activeBtn.querySelector('iconify-icon');
            activeIcon.classList.remove('opacity-0', 'group-hover:opacity-100');
            activeIcon.classList.add('opacity-100');
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-bold text-xl tracking-tight text-slate-900">MedXrc</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#testimonials">Testimonials</a>
<a className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#contact">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-4 flex flex-col space-y-4" id="mobile-menu">
<a className="text-base font-medium text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg" href="#services">Services</a>
<a className="text-base font-medium text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg" href="#process">Process</a>
<a className="text-base font-medium text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg" href="#testimonials">Testimonials</a>
<a className="text-base font-medium text-primary-600 px-4 py-2 bg-primary-50 rounded-lg" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-blue-100/40 blur-3xl rounded-full opacity-70"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8 animate-fade-in">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
<span>Trusted by 2500+ Researchers Worldwide</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 text-balance animate-slide-up" style={{animationDelay: '0.1s'}}>
                Elevating Research,<br/>
<span className="text-slate-500">Ensuring Excellence.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 text-balance animate-slide-up" style={{animationDelay: '0.2s'}}>
                We empower medical professionals and institutions with high-quality research assistance, publication support, and statistical analysis. Accuracy, compliance, and impact guaranteed.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2" href="#contact">
                    Start Your Project
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">10k+</div>
<div className="text-sm text-slate-500 mt-1 font-medium">Clients Served</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">2500+</div>
<div className="text-sm text-slate-500 mt-1 font-medium">Papers Published</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">95%</div>
<div className="text-sm text-slate-500 mt-1 font-medium">Satisfaction Rate</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">15+</div>
<div className="text-sm text-slate-500 mt-1 font-medium">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-white/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-wider">Trusted by professionals publishing in</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-serif text-slate-800">Springer</span>
<span className="text-xl font-bold font-serif text-slate-800">ELSEVIER</span>
<span className="text-xl font-bold font-serif text-slate-800">SAGE</span>
<span className="text-xl font-bold font-serif text-slate-800">JAMA</span>
<span className="text-xl font-bold font-serif text-slate-800">Oxford Academic</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-100 hover:bg-blue-50/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">30+ Research Experts</h3>
<p className="text-slate-600 leading-relaxed text-sm">Dedicated professionals including board-certified physicians and PhDs guiding your research from hypothesis to publication.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-green-100 hover:bg-green-50/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Free Plagiarism Check</h3>
<p className="text-slate-600 leading-relaxed text-sm">We ensure 100% originality and credibility with advanced detection tools for every manuscript we handle.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-purple-100 hover:bg-purple-50/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Expert Assistance</h3>
<p className="text-slate-600 leading-relaxed text-sm">Round-the-clock support for your queries. We work across time zones to meet your deadlines.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Solutions</h2>
<p className="text-lg text-slate-600 max-w-2xl">End-to-end support for your medical research journey, from initial concept to high-impact publication.</p>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<div className="w-full lg:w-1/3 flex flex-col space-y-2" id="service-tabs">
<button className="service-tab-btn active text-left px-6 py-4 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group bg-white shadow-sm border border-slate-200 text-primary-600 ring-1 ring-primary-500/20" onclick="switchTab('pub-support')">
<span>Publication Support</span>
<iconify-icon className="opacity-100" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="service-tab-btn text-left px-6 py-4 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-slate-200" onclick="switchTab('editing')">
<span>Editing &amp; Translation</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="service-tab-btn text-left px-6 py-4 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-slate-200" onclick="switchTab('research')">
<span>Research Services</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="service-tab-btn text-left px-6 py-4 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-slate-200" onclick="switchTab('stats')">
<span>Statistical Analysis</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="service-tab-btn text-left px-6 py-4 rounded-xl text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-slate-200" onclick="switchTab('edu')">
<span>Educational Content</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full lg:w-2/3">

<div className="service-content glass-card p-8 rounded-2xl" id="pub-support">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
<iconify-icon icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Publication Support Services</h3>
<p className="text-slate-500 text-sm mt-1">From drafting to submission, we handle the rigorous details.</p>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Original research article drafting</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Journal selection &amp; submission strategy</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Critical review before submission</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Rebuttal letter drafting</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Plagiarism check &amp; reduction</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Figure and table preparation</li>
</ul>
</div>

<div className="service-content hidden glass-card p-8 rounded-2xl" id="editing">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Editing &amp; Translation</h3>
<p className="text-slate-500 text-sm mt-1">Polishing your work for clarity, impact, and scientific accuracy.</p>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Language polishing for scientific clarity</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Translation of manuscripts &amp; proposals</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Reference formatting (AMA, APA, Vancouver)</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Professional document editing (CVs, SOPs)</li>
</ul>
</div>

<div className="service-content hidden glass-card p-8 rounded-2xl" id="research">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
<iconify-icon icon="solar:microscope-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Research Services</h3>
<p className="text-slate-500 text-sm mt-1">Foundational support from hypothesis to protocol design.</p>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Research idea conceptualization</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Clinical trial protocol design &amp; registration</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Literature review &amp; gap analysis</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Grant proposal writing</li>
</ul>
</div>

<div className="service-content hidden glass-card p-8 rounded-2xl" id="stats">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Statistical Analysis</h3>
<p className="text-slate-500 text-sm mt-1">Turning complex data into meaningful, publishable results.</p>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Statistical analysis plan development</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Advanced modeling &amp; hypothesis testing</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Scientific data visualization</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Interpretation for clinical context</li>
</ul>
</div>

<div className="service-content hidden glass-card p-8 rounded-2xl" id="edu">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
<iconify-icon icon="solar:book-bookmark-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Educational Content</h3>
<p className="text-slate-500 text-sm mt-1">Resources for healthcare professionals and researchers.</p>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>CME content development</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Research methodology workshops</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Evidence-based training resources</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-primary-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Public health education campaigns</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold text-slate-900 mb-16">How We Work</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="relative bg-white p-6">
<div className="w-24 h-24 mx-auto bg-white border-4 border-primary-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<div className="text-3xl font-bold text-primary-600">01</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Inquiry &amp; Analysis</h3>
<p className="text-slate-500 text-sm">You submit your requirements. Our experts analyze the scope and feasibility.</p>
</div>

<div className="relative bg-white p-6">
<div className="w-24 h-24 mx-auto bg-white border-4 border-primary-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<div className="text-3xl font-bold text-primary-600">02</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Execution</h3>
<p className="text-slate-500 text-sm">Our medical writers and statisticians work on your project with regular updates.</p>
</div>

<div className="relative bg-white p-6">
<div className="w-24 h-24 mx-auto bg-white border-4 border-primary-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<div className="text-3xl font-bold text-primary-600">03</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Delivery &amp; Support</h3>
<p className="text-slate-500 text-sm">We deliver the final report and provide post-delivery support for revisions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">What Researchers Say</h2>
<p className="text-slate-500 mt-2">Feedback from our global community of medical professionals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"Exceptional experience. The manuscript was professionally prepared, aligned with journal standards, and well-received by reviewers."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">ET</div>
<div>
<div className="text-sm font-semibold text-slate-900">Dr. Emily Thompson</div>
<div className="text-xs text-slate-500">USA</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"The peer review support from MedXrc was high quality and on time. It directly contributed to my paper’s acceptance."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">MJ</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mary Jane</div>
<div className="text-xs text-slate-500">Chemical Analyst, Saudi Arabia</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"Their biostatistics team simplified my raw data and turned it into publishable results. Impressive!"</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">IB</div>
<div>
<div className="text-sm font-semibold text-slate-900">Ivan Brown</div>
<div className="text-xs text-slate-500">Graduate Student</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"From research design to regulatory writing, MedXrc is our trusted CRO partner."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">KG</div>
<div>
<div className="text-sm font-semibold text-slate-900">Klaus Gunnarsdottir</div>
<div className="text-xs text-slate-500">Pharma VP, Geneva</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"After repeated rejections, MedXrc helped me rewrite my manuscript and finally get published."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">HC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Harry Clarke</div>
<div className="text-xs text-slate-500">Researcher, UK</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
<div>
<div className="flex text-amber-400 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed">"Their grant writing services were top-class, aligning perfectly with our mission."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">RD</div>
<div>
<div className="text-sm font-semibold text-slate-900">Rick Davidson</div>
<div className="text-xs text-slate-500">Grant Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        What kind of documents do you edit?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-600 text-sm mt-3 leading-relaxed">
                        We handle research manuscripts, case reports, systematic reviews, grant proposals, presentations, posters, and various regulatory/clinical documents (CSRs, CTDs, SAPs).
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Do you guarantee publication?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-600 text-sm mt-3 leading-relaxed">
                        Publication depends on research quality and journal criteria. While we cannot ethically guarantee acceptance, our Premium Editing and Pre-submission Peer Review services significantly improve your acceptance chances.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        Do you outsource your writers?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-600 text-sm mt-3 leading-relaxed">
                        No. We work hands-on with our in-house team of certified medical writers and experts to ensure 100% project satisfaction and confidentiality.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        How do I get started?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-600 text-sm mt-3 leading-relaxed">
                        Choose your service pack (Publication, Editing, Research, etc.) and submit an inquiry through our contact form or email. Our team will analyze your needs and provide a quote.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to publish high-impact research?</h2>
<p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Join thousands of medical professionals who trust MedXrc for their research and publication needs.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-100 transition-colors" href="#contact">
                    Request a Quote
                </a>
<a className="px-8 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors" href="mailto:info@medxrc.com">
                    Email Us
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-primary-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:health-linear"></iconify-icon>
</div>
<span className="font-bold text-lg">MedXrc</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Empowering medical professionals with high-quality research assistance and publication support.
                    </p>
<div className="space-y-2">
<a className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600" href="mailto:info@medxrc.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon> info@medxrc.com
                        </a>
<a className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600" href="tel:+447956950181">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +44 7956 950181
                        </a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">Publication Support</a></li>
<li><a className="hover:text-primary-600" href="#">Editing &amp; Translation</a></li>
<li><a className="hover:text-primary-600" href="#">Research Services</a></li>
<li><a className="hover:text-primary-600" href="#">Statistical Analysis</a></li>
<li><a className="hover:text-primary-600" href="#">Educational Content</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">About Us</a></li>
<li><a className="hover:text-primary-600" href="#">Blogs</a></li>
<li><a className="hover:text-primary-600" href="#">Refund Policy</a></li>
<li><a className="hover:text-primary-600" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Location</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        4 Roydfield Street<br/>
                        Huddersfield, United Kingdom<br/>
                        HD2 1AQ
                    </p>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 MedXrc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:globe-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
