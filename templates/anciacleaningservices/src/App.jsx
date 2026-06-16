import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
ancia: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9', // Brand Primary
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
},
dark: {
900: '#0f172a',
800: '#1e293b',
}
},
animation: {
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}



        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // Mobile Menu Logic
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('menu-hidden')) {
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
            } else {
                menu.classList.add('menu-hidden');
                menu.classList.remove('menu-visible');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 rounded bg-ancia-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="18" icon="solar:sparkle-linear" width="18"></iconify-icon>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap text-slate-900 tracking-tight">Ancia<span className="text-slate-400 font-normal">Cleaning</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-600 hover:text-ancia-600 transition-colors" href="#services">Services</a>
<a className="text-slate-600 hover:text-ancia-600 transition-colors" href="#process">Process</a>
<a className="text-slate-600 hover:text-ancia-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
<a className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#contact">
                    Get a Quote
                </a>
</div>

<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none" onclick="toggleMenu()" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="menu-hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden" id="mobile-menu">
<ul className="flex flex-col p-6 font-medium space-y-4">
<li><a className="block py-2 text-slate-900 border-b border-slate-50" href="#services" onclick="toggleMenu()">Services</a></li>
<li><a className="block py-2 text-slate-900 border-b border-slate-50" href="#process" onclick="toggleMenu()">Process</a></li>
<li><a className="block py-3 mt-2 text-center text-white bg-ancia-600 rounded-lg" href="#contact" onclick="toggleMenu()">Get a Quote</a></li>
</ul>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-ancia-100/40 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8 animate-fade-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ancia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-ancia-500"></span>
</span>
                Now accepting new commercial clients
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
                The new standard for <br className="hidden md:block"/>
<span className="text-ancia-600">pristine spaces.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up" style={{animationDelay: '0.2s'}}>
                Ancia Cleaning delivers hospital-grade hygiene with hospitality-level service. We transform offices, homes, and commercial spaces into immaculate environments.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#contact">
                    Book a Service
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#services">
                    View Services
                </a>
</div>

<div className="mt-16 relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 animate-fade-up" style={{animationDelay: '0.4s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img alt="Pristine Office Space" className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20 text-left">
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg inline-block">
<p className="text-sm font-medium text-slate-900">Commercial &amp; Office</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tighter mb-4">Our Expertise</h2>
<p className="text-slate-500 text-lg max-w-xl font-light">Comprehensive cleaning solutions tailored to your specific environment and schedule.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-ancia-600 hover:text-ancia-700 transition-colors">
                    See full service list <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bento-card group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-slate-200 h-80 reveal">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="120" icon="solar:buildings-2-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-lg bg-ancia-50 text-ancia-600 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Commercial Cleaning</h3>
<p className="text-slate-500 font-light max-w-md">Daily and weekly maintenance for offices, retail spaces, and corporate buildings. We work after-hours to ensure zero disruption to your business.</p>
</div>
</div>
</div>

<div className="bento-card group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-slate-200 h-80 reveal delay-100">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Residential</h3>
<p className="text-slate-500 font-light">Detailed home cleaning, from regular housekeeping to one-off deep cleans.</p>
</div>
</div>
</div>

<div className="bento-card group relative overflow-hidden rounded-2xl bg-slate-900 p-8 shadow-sm border border-slate-800 h-80 reveal">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">End of Lease</h3>
<p className="text-slate-400 font-light">Bond-back guarantee cleaning. We cover everything from carpets to windows.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bento-card group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-slate-200 h-80 reveal delay-100">
<img alt="Cleaning Tools" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1527694224012-be005121af9f?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between max-w-md">
<div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:water-drop-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Specialized Services</h3>
<p className="text-slate-500 font-light">Carpet steam cleaning, high-rise window washing, and post-construction debris removal.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ancia-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Get In Touch</h2>
<p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
                        Ready for a spotless environment? Reach out to Ancia today. We'll get back to you within 24 hours to discuss your needs.
                    </p>
<div className="space-y-6">

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
<p className="text-lg font-medium">Unnamed Road, Accra, Ghana</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
<p className="text-lg font-medium">+233 20 338 6612</p>
</div>
</div>
</div>
</div>
<div className="reveal delay-100">
<form className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ancia-500 focus:ring-1 focus:ring-ancia-500 transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ancia-500 focus:ring-1 focus:ring-ancia-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ancia-500 focus:ring-1 focus:ring-ancia-500 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300">Service Type</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ancia-500 focus:ring-1 focus:ring-ancia-500 transition-colors appearance-none">
<option className="bg-slate-800">Commercial Cleaning</option>
<option className="bg-slate-800">Residential Cleaning</option>
<option className="bg-slate-800">Move In/Out</option>
<option className="bg-slate-800">Specialized Service</option>
</select>
<div className="absolute right-4 top-3.5 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-300">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ancia-500 focus:ring-1 focus:ring-ancia-500 transition-colors" placeholder="Tell us about your space..." rows="4"></textarea>
</div>
<button className="w-full bg-ancia-600 hover:bg-ancia-500 text-white font-medium py-3.5 rounded-lg transition-all shadow-lg hover:shadow-ancia-500/25 mt-2" type="button">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-ancia-600 text-white flex items-center justify-center">
<iconify-icon height="14" icon="solar:sparkle-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Ancia Cleaning</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Setting the standard for hygiene and service excellence in the cleaning industry.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-ancia-600 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">Residential</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">End of Lease</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">Deep Cleaning</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-ancia-600 transition-colors" href="#services">About Us</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-ancia-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-ancia-600 transition-colors" href="#">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-ancia-600 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-ancia-600 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">© 2024 Ancia Cleaning Services. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<span>Designed with care</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
