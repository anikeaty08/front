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
brand: {
navy: '#0B2545',
teal: '#00A9A5',
dark: '#051b36',
light: '#F8FAFC'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
arabic: ['Cairo', 'sans-serif'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // RTL / Language Toggle Logic
        let isRTL = false;
        function toggleLanguage() {
            isRTL = !isRTL;
            const html = document.documentElement;
            const langLabel = document.getElementById('lang-label');
            
            if (isRTL) {
                html.setAttribute('dir', 'rtl');
                html.setAttribute('lang', 'ar');
                langLabel.textContent = "English";
                // Add slight font size adj for Arabic legibility
                document.body.classList.add('text-lg'); 
                document.body.classList.remove('text-base');
            } else {
                html.setAttribute('dir', 'ltr');
                html.setAttribute('lang', 'en');
                langLabel.textContent = "العربية";
                document.body.classList.remove('text-lg');
            }
        }

        // Simple Tab Filter for Expertise
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.industry-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Style Active State
                filterBtns.forEach(b => {
                    b.classList.remove('bg-brand-navy', 'text-white');
                    b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
                });
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
                btn.classList.add('bg-brand-navy', 'text-white');

                const filterValue = btn.getAttribute('data-filter');
                
                cards.forEach(card => {
                    if (filterValue === 'all' || card.classList.contains('filter-' + filterValue)) {
                        card.style.display = 'block';
                        // Add simple animation
                        card.animate([
                            { opacity: 0, transform: 'scale(0.95)' },
                            { opacity: 1, transform: 'scale(1)' }
                        ], { duration: 300, fill: 'forwards' });
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Show Cookie Banner after delay
        setTimeout(() => {
            document.getElementById('cookie-banner').style.transform = 'translateY(0)';
        }, 2000);

        // Mobile Menu Toggle
        const toggleBtn = document.querySelector('[data-collapse-toggle]');
        const navbarMenu = document.getElementById('navbar-sticky');
        
        toggleBtn.addEventListener('click', () => {
            navbarMenu.classList.toggle('hidden');
            const icon = toggleBtn.querySelector('iconify-icon');
            if(!navbarMenu.classList.contains('hidden')){
                 icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                 icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        });

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section > div').forEach(section => {
            section.classList.add('opacity-0'); // Initial state handled by JS to prevent FOUC issues without JS
            section.style.opacity = '0';
            observer.observe(section);
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
      

<nav className="fixed w-full z-50 top-0 start-0 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 px-6 lg:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="self-center text-xl font-semibold whitespace-nowrap text-brand-navy tracking-tight group-hover:opacity-80 transition-opacity">Apptology FZE</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">

<button className="text-sm font-medium text-slate-500 hover:text-brand-navy transition-colors flex items-center gap-1" onclick="toggleLanguage()">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
<span id="lang-label">العربية</span>
</button>
<a className="hidden md:inline-flex text-white bg-brand-navy hover:bg-brand-dark focus:ring-4 focus:outline-none focus:ring-brand-navy/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all" href="#contact">
                    Get Pricing
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#expertise">Expertise</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#process">Process</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#testimonials">Testimonials</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-teal/20">
<span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                        Available for new projects
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        We build mobile apps that scale, and web experiences that <span className="text-brand-teal">convert</span>.
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        End-to-end mobile, web, and custom software development with fast delivery and a transparent process. From MVP to Enterprise.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-brand-teal rounded-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition-all shadow-lg shadow-teal-500/20 group" onclick="document.getElementById('contact').scrollIntoView()">
                            Request a Free Demo
                            <iconify-icon className="ms-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-brand-navy focus:ring-4 focus:ring-slate-100 transition-all">
                            Download Case Study
                        </button>
</div>

<div className="flex items-center gap-2 text-sm text-slate-500">
<div className="flex -space-x-3 rtl:space-x-reverse">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] overflow-hidden">
<img alt="User" src="https://ui-avatars.com/api/?name=John+Doe&amp;background=0D8ABC&amp;color=fff"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] overflow-hidden">
<img alt="User" src="https://ui-avatars.com/api/?name=Jane+Smith&amp;background=random"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+2k</div>
</div>
<p>Trusted by founders worldwide</p>
</div>
</div>

<div className="relative lg:h-full flex items-center justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-brand-teal/20 to-brand-navy/5 rounded-full blur-3xl -z-10 opacity-60"></div>

<div className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-xl w-full max-w-md transform transition hover:scale-[1.01] duration-500">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900">Get a Quote</h3>
<span className="text-xs text-brand-teal bg-teal-50 px-2 py-1 rounded font-medium">Fast Response</span>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly.');">
<div>
<label className="block mb-1 text-sm font-medium text-slate-700" htmlFor="hero-email">Work Email</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-teal focus:border-brand-teal block w-full ps-10 p-2.5" id="hero-email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block mb-1 text-sm font-medium text-slate-700" htmlFor="hero-size">Company Size</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<select className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-teal focus:border-brand-teal block w-full ps-10 p-2.5 appearance-none" id="hero-size">
<option>1-10 employees</option>
<option>11-50 employees</option>
<option>50+ employees</option>
</select>
</div>
</div>
<button className="w-full text-white bg-brand-navy hover:bg-brand-dark focus:ring-4 focus:ring-brand-navy/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors" type="submit">
                                Start Your Project
                            </button>
<p className="text-xs text-center text-slate-500 mt-2">No credit card required. Free consultation.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Powering innovations in 15+ Countries</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-sans tracking-tighter text-slate-800">ACME<span className="text-brand-teal">CORP</span></span>
<span className="text-xl font-semibold font-sans tracking-tight text-slate-800 flex items-center gap-1"><iconify-icon className="text-brand-navy" icon="solar:bolt-circle-bold"></iconify-icon> BoltShift</span>
<span className="text-xl font-bold font-sans tracking-tight text-slate-800">K-Hole</span>
<span className="text-xl font-semibold font-sans tracking-tight text-slate-800">Nietzsche</span>
<span className="text-xl font-bold font-sans tracking-tighter text-slate-800">V<span className="text-brand-teal">R</span>tex</span>
<span className="text-xl font-semibold font-sans tracking-tight text-slate-800">GlobalBank</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-100">
<div className="text-center">
<h4 className="text-3xl font-bold text-brand-navy">50+</h4>
<p className="text-sm text-slate-500 mt-1">Apps Shipped</p>
</div>
<div className="text-center">
<h4 className="text-3xl font-bold text-brand-navy">12 Weeks</h4>
<p className="text-sm text-slate-500 mt-1">Avg. Launch Time</p>
</div>
<div className="text-center">
<h4 className="text-3xl font-bold text-brand-navy">75 NPS</h4>
<p className="text-sm text-slate-500 mt-1">Client Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Why businesses struggle with software development</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-slate-600">Lack of transparency and missed deadlines.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-slate-600">Spaghetti code that is impossible to scale.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-slate-600">Disconnect between design and engineering.</span>
</li>
</ul>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 end-0 w-24 h-24 bg-brand-teal/10 rounded-bl-full -mr-4 -mt-4"></div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-navy mb-4">The Apptology Approach</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-teal mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-slate-700 font-medium">Agile methodology with weekly sprints.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-teal mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-slate-700 font-medium">Clean, modular architecture ready for growth.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-teal mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-slate-700 font-medium">Integrated Design &amp; Dev teams.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Comprehensive Development Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Mobile App Development</h3>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">Native iOS, Android, and Cross-platform solutions using Flutter &amp; React Native.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors" href="#">
                        Learn more <iconify-icon className="ms-1 rtl:rotate-180" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Web Development</h3>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">High-performance web apps, PWAs, and enterprise dashboards built with React &amp; Next.js.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors" href="#">
                        Learn more <iconify-icon className="ms-1 rtl:rotate-180" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-teal shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Backend &amp; Cloud</h3>
<p className="text-slate-600 mb-4 text-sm leading-relaxed">Secure, scalable server-side architectures on AWS and Azure with Node.js and Python.</p>
<a className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors" href="#">
                        Learn more <iconify-icon className="ms-1 rtl:rotate-180" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="expertise">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Industries We Serve</h2>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="filter-btn active px-4 py-2 rounded-full text-sm font-medium bg-brand-navy text-white transition-all" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-brand-teal hover:text-brand-teal transition-all" data-filter="fintech">Fintech</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-brand-teal hover:text-brand-teal transition-all" data-filter="healthcare">Healthcare</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-brand-teal hover:text-brand-teal transition-all" data-filter="ecommerce">E-commerce</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="industry-grid">
<div className="industry-card filter-fintech bg-white p-6 rounded-xl border border-slate-200">
<iconify-icon className="text-brand-teal mb-4" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900">Digital Banking</h4>
<p className="text-xs text-slate-500 mt-2">Secure payment gateways and wallet apps.</p>
</div>
<div className="industry-card filter-healthcare bg-white p-6 rounded-xl border border-slate-200">
<iconify-icon className="text-brand-teal mb-4" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900">Telemedicine</h4>
<p className="text-xs text-slate-500 mt-2">HIPAA compliant patient portals.</p>
</div>
<div className="industry-card filter-ecommerce bg-white p-6 rounded-xl border border-slate-200">
<iconify-icon className="text-brand-teal mb-4" icon="solar:cart-large-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900">Marketplaces</h4>
<p className="text-xs text-slate-500 mt-2">High-traffic multi-vendor platforms.</p>
</div>
<div className="industry-card filter-fintech bg-white p-6 rounded-xl border border-slate-200">
<iconify-icon className="text-brand-teal mb-4" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-slate-900">Trading Bots</h4>
<p className="text-xs text-slate-500 mt-2">Real-time algorithmic trading tools.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-navy text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">Success Stories</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">Recent work that made an impact</h2>
</div>
<button className="text-sm font-medium border-b border-brand-teal text-brand-teal hover:text-white transition-colors pb-1">View all case studies</button>
</div>

<div className="flex flex-col lg:flex-row gap-8">

<div className="lg:w-2/3 bg-brand-dark/50 rounded-2xl overflow-hidden border border-white/10 group relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<div className="h-64 lg:h-96 bg-slate-700 w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 start-0 p-8 z-20">
<span className="bg-brand-teal/20 text-brand-teal text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">Fintech</span>
<h3 className="text-2xl font-semibold mb-2">PayFlow: 200% User Growth in 3 Months</h3>
<p className="text-slate-300 text-sm max-w-lg mb-4">We re-engineered the mobile experience to reduce friction, resulting in a massive uptick in daily active users.</p>
<a className="text-white font-medium text-sm hover:underline" href="#">Read Case Study</a>
</div>
</div>

<div className="lg:w-1/3 bg-brand-dark/50 rounded-2xl overflow-hidden border border-white/10 group relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="h-64 lg:h-96 bg-slate-600 w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 start-0 p-8 z-20">
<span className="bg-brand-teal/20 text-brand-teal text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">E-commerce</span>
<h3 className="text-xl font-semibold mb-2">ShopSwift App</h3>
<p className="text-slate-300 text-sm mb-4">An AR-enabled shopping experience.</p>
<a className="text-white font-medium text-sm hover:underline" href="#">Read Case Study</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">How We Work</h2>
<p className="text-slate-500 mt-4">Transparent, agile, and efficient.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
<div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">1</div>
<h4 className="font-semibold text-slate-900 mb-2">Discovery</h4>
<p className="text-xs text-slate-500">Requirements gathering &amp; tech strategy.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
<div className="w-10 h-10 bg-white border-2 border-brand-navy text-brand-navy rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">2</div>
<h4 className="font-semibold text-slate-900 mb-2">Design</h4>
<p className="text-xs text-slate-500">UI/UX prototyping &amp; user flows.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
<div className="w-10 h-10 bg-white border-2 border-brand-navy text-brand-navy rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">3</div>
<h4 className="font-semibold text-slate-900 mb-2">Development</h4>
<p className="text-xs text-slate-500">Agile sprints &amp; QA testing.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
<div className="w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">4</div>
<h4 className="font-semibold text-slate-900 mb-2">Launch</h4>
<p className="text-xs text-slate-500">Deployment &amp; post-launch support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Client Feedback</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Apptology FZE transformed our vague idea into a robust, market-ready application. Their attention to detail is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Sarah" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=random"/>
</div>
<div>
<h5 className="text-sm font-bold text-slate-900">Sarah Jenkins</h5>
<p className="text-xs text-slate-500">CTO, FinStart</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"The team works fast, but never breaks things. The code quality was praised by our internal audit team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Ahmed" src="https://ui-avatars.com/api/?name=Ahmed+K&amp;background=random"/>
</div>
<div>
<h5 className="text-sm font-bold text-slate-900">Ahmed Khan</h5>
<p className="text-xs text-slate-500">Product Lead, SouqTech</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Professional, direct, and excellent communication throughout the project lifecycle. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="Mike" src="https://ui-avatars.com/api/?name=Mike+R&amp;background=random"/>
</div>
<div>
<h5 className="text-sm font-bold text-slate-900">Mike Ross</h5>
<p className="text-xs text-slate-500">Founder, Logistics.io</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800">
                        How long does it take to build an MVP?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-3 text-sm leading-relaxed">Typically 8-12 weeks, depending on complexity. We focus on core features first to get you to market fast.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800">
                        Do you provide post-launch support?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-3 text-sm leading-relaxed">Yes, we offer flexible maintenance packages to ensure your app stays secure, updated, and bug-free.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer border border-transparent hover:border-slate-200 transition-all open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800">
                        Do you work with startups?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-3 text-sm leading-relaxed">Absolutely. We specialize in helping startups scale from idea to Series A with robust technology.</p>
</details>
</div>
</div>
</section>

<section className="py-20 bg-brand-navy text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
<div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

<div className="bg-brand-dark p-10 md:w-2/5 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-semibold mb-4 text-white">Let's talk business</h3>
<p className="text-slate-400 text-sm mb-8">Fill out the form and we'll get back to you within 48 hours.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-teal" icon="solar:letter-linear"></iconify-icon>
                                hello@apptology.ae
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-teal" icon="solar:phone-calling-linear"></iconify-icon>
                                +971 4 123 4567
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-teal" icon="solar:map-point-linear"></iconify-icon>
                                Dubai Silicon Oasis, UAE
                            </div>
</div>
</div>
<div className="mt-10 flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="24"></iconify-icon></a>
</div>
</div>

<div className="bg-white p-10 md:w-3/5 text-slate-900">
<form className="space-y-6" id="contact-form" onsubmit="event.preventDefault(); document.getElementById('success-modal').classList.remove('hidden');">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-teal outline-none transition-all">
<option>Mobile App Development</option>
<option>Web Development</option>
<option>Custom Software</option>
<option>Other</option>
</select>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-brand-teal custom-checkbox appearance-none" id="consent" required="" type="checkbox"/>
</div>
<label className="ms-2 text-xs font-medium text-slate-500" htmlFor="consent">I agree to the <a className="text-brand-teal hover:underline" href="#">privacy policy</a> and processing of my data.</label>
</div>

<input name="honeypot" style={{display: 'none'}} type="text"/>
<button className="w-full bg-brand-navy hover:bg-brand-dark text-white font-medium rounded-lg px-5 py-3 text-center transition-all flex justify-center items-center gap-2 group" type="submit">
                            Send Request
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-lg font-bold text-brand-navy tracking-tight">Apptology FZE</span>
<p className="text-xs text-slate-500 mt-1">Building digital future.</p>
</div>
<div className="flex gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-brand-teal" href="#">Services</a>
<a className="hover:text-brand-teal" href="#">Case Studies</a>
<a className="hover:text-brand-teal" href="#">Privacy</a>
<a className="hover:text-brand-teal" href="#">Terms</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-400">
                © 2023 Apptology FZE. All rights reserved.
            </div>
</div>
</footer>

<a aria-label="Contact Us" className="fixed bottom-6 end-6 bg-brand-teal text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all z-40 group" href="#contact">
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</a>

<div className="fixed bottom-0 start-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-50 transform translate-y-full transition-transform duration-500" id="cookie-banner">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-600">We use analytics to improve performance. Accept to continue.</p>
<div className="flex gap-3">
<button className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900" onclick="document.getElementById('cookie-banner').style.transform='translateY(100%)'">Decline</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-brand-navy rounded hover:bg-brand-dark" onclick="document.getElementById('cookie-banner').style.transform='translateY(100%)'">Accept</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 z-[60] hidden flex items-center justify-center p-4 backdrop-blur-sm" id="success-modal">
<div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in-up">
<div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
<p className="text-slate-600 text-sm mb-6">Thanks, we received your request. We will get back to you within 48 hours.</p>
<button className="w-full bg-brand-navy text-white font-medium py-2.5 rounded-lg hover:bg-brand-dark transition-colors" onclick="document.getElementById('success-modal').classList.add('hidden')">Close</button>
</div>
</div>



    </>
  );
}
