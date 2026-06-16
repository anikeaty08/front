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
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
medical: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9', // Primary Brand
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
},
slate: {
850: '#151f32', // Deep footer bg
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'draw': 'draw 1.5s ease-out forwards',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
draw: {
'0%': { strokeDasharray: '0, 1000' },
'100%': { strokeDasharray: '1000, 0' },
}
}
}
}
}



        // Intersection Observer for Reveals
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('bg-white/90');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('bg-white/90');
            }
        });

        // Case Carousel Logic
        const carousel = document.getElementById('caseCarousel');
        const prevBtn = document.getElementById('prevCase');
        const nextBtn = document.getElementById('nextCase');

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 400, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -400, behavior: 'smooth' });
        });

        // FAQ Toggle
        function toggleAccordion(button) {
            const item = button.parentElement;
            const content = button.nextElementSibling;
            
            // Close other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle current
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-500 to-medical-600 flex items-center justify-center text-white shadow-lg shadow-medical-500/20 group-hover:scale-105 transition-transform duration-300">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<span className="font-display font-bold text-xl tracking-tight text-slate-900">Pulse<span className="text-medical-500">.</span></span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors nav-link" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors nav-link" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors nav-link" href="#cases">Case Studies</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors nav-link" href="#tech">Technology</a>
<a className="text-sm font-medium text-slate-600 hover:text-medical-600 transition-colors nav-link" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-slate-900/20 group" href="#contact">
<span>Book Free Discovery Call</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>

<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">

<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-medical-100/40 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left pt-10 lg:pt-0">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-medical-100 shadow-sm mb-8 reveal">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-medical-500"></span>
</span>
<span className="text-xs font-semibold text-medical-800 tracking-wide uppercase">Leading Healthcare Development Agency</span>
</div>
<h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1] reveal delay-100">
                    Software that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-medical-400">Saves Lives</span>.
                </h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed reveal delay-200">
                    We engineer HIPAA-compliant platforms, patient portals, and telehealth solutions. Trusted by hospitals and startups to deliver secure, scalable innovation.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start reveal delay-300">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-medical-600 text-white font-semibold text-sm hover:bg-medical-700 transition-all shadow-xl shadow-medical-500/20 hover:scale-[1.02] flex items-center justify-center gap-2" href="#contact">
                        Start Your Project
                        <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#cases">
                        View Case Studies
                    </a>
</div>
</div>

<div className="relative hidden lg:block reveal delay-400">
<div className="relative w-full h-[600px] animate-float">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[340px] bg-white rounded-2xl shadow-2xl shadow-medical-900/10 border border-slate-100 overflow-hidden z-20">
<div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="p-6 grid gap-4">
<div className="flex gap-4">
<div className="w-1/3 h-32 bg-medical-50 rounded-lg animate-pulse"></div>
<div className="w-2/3 h-32 bg-slate-50 rounded-lg"></div>
</div>
<div className="h-8 bg-slate-50 rounded w-3/4"></div>
<div className="h-8 bg-slate-50 rounded w-1/2"></div>
<div className="flex justify-between items-center pt-4">
<div className="h-10 w-10 rounded-full bg-medical-100"></div>
<div className="h-8 w-24 bg-medical-600 rounded-md"></div>
</div>
</div>
</div>

<div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 z-30 flex items-center justify-center animate-bounce duration-[3000ms]">
<span className="iconify text-medical-500" data-icon="lucide:heart-pulse" data-width="40"></span>
</div>
<div className="absolute bottom-32 left-0 w-48 h-16 bg-white rounded-xl shadow-lg border border-slate-100 z-30 flex items-center gap-3 px-4">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<div className="text-[10px] text-slate-400 font-bold uppercase">Status</div>
<div className="text-xs font-bold text-slate-800">HIPAA Compliant</div>
</div>
</div>
</div>
</div>
</div>

<a className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-medical-600 transition-colors animate-bounce" href="#clients">
<span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
</section>

<section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative" id="clients">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-8 text-center reveal">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500">Trusted by Healthcare Innovators</p>
</div>
<div className="flex overflow-hidden group">
<div className="flex animate-scroll gap-16 min-w-full items-center justify-center px-8 group-hover:[animation-play-state:paused]">

<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:cross"></span><span className="font-display font-bold text-xl">MediCare</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:dna"></span><span className="font-display font-bold text-xl">Genomics</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:heart"></span><span className="font-display font-bold text-xl">CardioTech</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:pill"></span><span className="font-display font-bold text-xl">PharmaLab</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:stethoscope"></span><span className="font-display font-bold text-xl">DocConnect</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:activity"></span><span className="font-display font-bold text-xl">VitalFlow</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:shield-check"></span><span className="font-display font-bold text-xl">SecureHealth</span></div>

<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:cross"></span><span className="font-display font-bold text-xl">MediCare</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:dna"></span><span className="font-display font-bold text-xl">Genomics</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:heart"></span><span className="font-display font-bold text-xl">CardioTech</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:pill"></span><span className="font-display font-bold text-xl">PharmaLab</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:stethoscope"></span><span className="font-display font-bold text-xl">DocConnect</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:activity"></span><span className="font-display font-bold text-xl">VitalFlow</span></div>
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"><span className="iconify text-3xl" data-icon="lucide:shield-check"></span><span className="font-display font-bold text-xl">SecureHealth</span></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16 reveal">
<h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">Delivering What Healthcare <br/> Software Demands</h2>
<p className="text-slate-600 text-lg">We don't just write code. We build robust, compliant ecosystems that healthcare providers and patients rely on every single day.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-100">
<div className="w-12 h-12 rounded-full bg-medical-50 flex items-center justify-center mb-6 group-hover:bg-medical-500 transition-colors">
<span className="iconify text-medical-600 group-hover:text-white transition-colors" data-icon="lucide:lock" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3">HIPAA Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Security is our baseline. Every line of code is written with data privacy and regulatory standards in mind.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-200">
<div className="w-12 h-12 rounded-full bg-medical-50 flex items-center justify-center mb-6 group-hover:bg-medical-500 transition-colors">
<span className="iconify text-medical-600 group-hover:text-white transition-colors" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3">User Experience</h3>
<p className="text-sm text-slate-500 leading-relaxed">Intuitive interfaces designed for tired clinicians and patients, reducing friction and training time.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-300">
<div className="w-12 h-12 rounded-full bg-medical-50 flex items-center justify-center mb-6 group-hover:bg-medical-500 transition-colors">
<span className="iconify text-medical-600 group-hover:text-white transition-colors" data-icon="lucide:workflow" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3">Interoperability</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamless integration with existing EHRs via FHIR and HL7 standards to unify patient data.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-400">
<div className="w-12 h-12 rounded-full bg-medical-50 flex items-center justify-center mb-6 group-hover:bg-medical-500 transition-colors">
<span className="iconify text-medical-600 group-hover:text-white transition-colors" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3">Scalable Architecture</h3>
<p className="text-sm text-slate-500 leading-relaxed">Cloud-native solutions built to handle millions of records without compromising speed or reliability.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div className="max-w-2xl">
<span className="text-medical-600 font-bold text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
<h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">End-to-End Healthcare<br/>Development</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-medical-600 font-semibold hover:text-medical-700 transition-colors group mt-4 md:mt-0" href="#contact">
                    See All Services 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:monitor-smartphone" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Telehealth Platforms</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Custom video conferencing tools with integrated scheduling, payments, and electronic prescribing.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More <span className="block max-w-0 group-hover/link:max-w-full transition-all duration-500 h-0.5 bg-medical-600"></span>
</a>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal delay-100">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:file-text" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">EHR/EMR Systems</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Modernizing legacy records or building custom electronic health record systems from the ground up.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More
                    </a>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal delay-200">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:smartphone" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Patient Portals (mHealth)</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Mobile apps that empower patients to track vitals, book appointments, and view lab results.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More
                    </a>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal delay-300">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:brain-circuit" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">AI Diagnostics Integration</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Implementing machine learning models to assist in imaging analysis and predictive analytics.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More
                    </a>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal delay-400">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:link" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">IoT &amp; Wearables</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Connecting medical devices to cloud infrastructure for real-time patient monitoring.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More
                    </a>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-medical-200 hover:shadow-lg transition-all duration-300 group reveal delay-500">
<span className="iconify text-medical-500 mb-6" data-icon="lucide:shield" data-width="40"></span>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cybersecurity Audits</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Penetration testing and architecture reviews to ensure absolute data sovereignty.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-medical-600 transition-colors group/link" href="#">
                        Learn More
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="cases">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal">
<div>
<h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
<p className="text-slate-600">Transforming innovative concepts into clinical reality.</p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all hover:scale-110" id="prevCase">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg" id="nextCase">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
<div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-80rem)/2)] pb-12 snap-x snap-mandatory" id="caseCarousel">

<div className="min-w-[320px] md:min-w-[500px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Doctor Tablet" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-medical-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Telehealth</span>
<h3 className="text-white text-xl font-bold">Virtual Care Connect</h3>
</div>
</div>
<div className="p-8">
<div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Client</p>
<p className="text-slate-900 font-semibold">National Health</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Impact</p>
<p className="text-medical-600 font-semibold">40% Wait Reduction</p>
</div>
</div>
<p className="text-slate-600 text-sm mb-6">Designed a unified virtual waiting room and triage system handling 50k+ monthly consultations.</p>
<a className="text-medical-600 font-semibold text-sm hover:text-medical-700" href="#">View Case Study →</a>
</div>
</div>

<div className="min-w-[320px] md:min-w-[500px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Data Dashboard" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Analytics</span>
<h3 className="text-white text-xl font-bold">Predictive Patient Flow</h3>
</div>
</div>
<div className="p-8">
<div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Client</p>
<p className="text-slate-900 font-semibold">Metro General</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Impact</p>
<p className="text-medical-600 font-semibold">$2M Saved Annually</p>
</div>
</div>
<p className="text-slate-600 text-sm mb-6">Built an AI-driven dashboard to forecast ER admissions and optimize staff allocation.</p>
<a className="text-medical-600 font-semibold text-sm hover:text-medical-700" href="#">View Case Study →</a>
</div>
</div>

<div className="min-w-[320px] md:min-w-[500px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
<div className="h-64 bg-slate-200 relative overflow-hidden">
<img alt="Mobile App" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1584036561566-b452744e4950?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">mHealth</span>
<h3 className="text-white text-xl font-bold">Diabetes Tracker</h3>
</div>
</div>
<div className="p-8">
<div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Client</p>
<p className="text-slate-900 font-semibold">DiaCare Startup</p>
</div>
<div>
<p className="text-xs text-slate-400 uppercase font-bold">Impact</p>
<p className="text-medical-600 font-semibold">100k+ Active Users</p>
</div>
</div>
<p className="text-slate-600 text-sm mb-6">Developed a Bluetooth-enabled app syncing with glucose monitors for real-time tracking.</p>
<a className="text-medical-600 font-semibold text-sm hover:text-medical-700" href="#">View Case Study →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-medical-600 font-bold text-sm uppercase tracking-wider mb-2 block">Our Methodology</span>
<h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">From Consultation to <br/>Clinical Deployment</h2>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block"></div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-24 reveal group">
<div className="md:text-right">
<h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">01. Discovery &amp; Compliance</h3>
<p className="text-slate-500 text-sm max-w-sm ml-auto leading-relaxed">We map out your clinical workflows and identify regulatory requirements (HIPAA, GDPR) before a single line of code is written.</p>
</div>
<div className="relative flex justify-center md:justify-start">
<div className="absolute left-1/2 md:left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-medical-500 ring-4 ring-white shadow-lg hidden md:block"></div>
<div className="w-16 h-16 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-600 md:ml-12 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:search" data-width="28"></span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-24 reveal group">
<div className="md:order-2">
<h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">02. Architecture &amp; Design</h3>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">We architect secure, scalable cloud infrastructure and design interfaces that prioritize clinical usability and accessibility.</p>
</div>
<div className="md:order-1 relative flex justify-center md:justify-end">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white hidden md:block group-hover:bg-medical-500 transition-colors"></div>
<div className="w-16 h-16 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-600 md:mr-12 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:pen-tool" data-width="28"></span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center mb-24 reveal group">
<div className="md:text-right">
<h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">03. Development &amp; QA</h3>
<p className="text-slate-500 text-sm max-w-sm ml-auto leading-relaxed">Agile sprints with rigorous testing protocols. We ensure data integrity and system stability under high load.</p>
</div>
<div className="relative flex justify-center md:justify-start">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white hidden md:block group-hover:bg-medical-500 transition-colors"></div>
<div className="w-16 h-16 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-600 md:ml-12 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:code-2" data-width="28"></span>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center reveal group">
<div className="md:order-2">
<h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-medical-600 transition-colors">04. Launch &amp; Maintenance</h3>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">Smooth deployment with zero downtime. Ongoing 24/7 support to ensure your software evolves with healthcare standards.</p>
</div>
<div className="md:order-1 relative flex justify-center md:justify-end">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white hidden md:block group-hover:bg-medical-500 transition-colors"></div>
<div className="w-16 h-16 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-600 md:mr-12 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:rocket" data-width="28"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="tech">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Technology Stack</h2>
<p className="text-slate-600">Built on modern, secure, and scalable foundations.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-100 reveal delay-100">
<h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="iconify text-medical-500" data-icon="lucide:layout" data-width="18"></span> Frontend
                    </h4>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:react" data-width="20"></span> React / Next.js
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:vue" data-width="20"></span> Vue.js
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:tailwindcss-icon" data-width="20"></span> Tailwind CSS
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 reveal delay-200">
<h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="iconify text-medical-500" data-icon="lucide:server" data-width="18"></span> Backend
                    </h4>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:python" data-width="20"></span> Python (Django/Flask)
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:nodejs-icon" data-width="20"></span> Node.js
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify" data-icon="logos:postgresql" data-width="20"></span> PostgreSQL
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 reveal delay-300">
<h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="iconify text-medical-500" data-icon="lucide:shield-check" data-width="18"></span> Healthcare Standards
                    </h4>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify text-orange-500" data-icon="lucide:flame" data-width="20"></span> FHIR / HL7
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify text-blue-600" data-icon="lucide:image" data-width="20"></span> DICOM
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600 hover:text-medical-600 transition-colors cursor-default">
<span className="iconify text-slate-700" data-icon="lucide:lock" data-width="20"></span> HIPAA / GDPR
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-bold text-slate-900 mb-12 text-center reveal">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="accordion-item border border-slate-100 rounded-xl overflow-hidden reveal">
<button className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none" onclick="toggleAccordion(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base">Are your solutions HIPAA compliant?</span>
<span className="iconify accordion-icon text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="accordion-content bg-slate-50">
<div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                            Absolutely. HIPAA compliance is our baseline. We implement strict encryption (at rest and in transit), access controls, and audit logs to ensure your software meets all federal regulations for PHI protection.
                        </div>
</div>
</div>

<div className="accordion-item border border-slate-100 rounded-xl overflow-hidden reveal delay-100">
<button className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none" onclick="toggleAccordion(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base">Can you integrate with Epic, Cerner, or other EHRs?</span>
<span className="iconify accordion-icon text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="accordion-content bg-slate-50">
<div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                            Yes. We specialize in interoperability using HL7 v2/v3 and FHIR standards. We have extensive experience connecting custom applications with major EHR providers like Epic, Cerner, Allscripts, and Athenahealth.
                        </div>
</div>
</div>

<div className="accordion-item border border-slate-100 rounded-xl overflow-hidden reveal delay-200">
<button className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none" onclick="toggleAccordion(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base">How long does it take to build a custom healthcare app?</span>
<span className="iconify accordion-icon text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="accordion-content bg-slate-50">
<div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                            Timelines vary based on complexity. A typical MVP (Minimum Viable Product) takes 3-4 months, while enterprise-scale systems may take 6-12 months. We provide detailed roadmaps during our initial discovery phase.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900" id="contact">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Innovate <br/>Healthcare?</h2>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">Schedule a free 30-minute consultation with our lead healthcare architect. We'll discuss your vision, compliance needs, and technical strategy.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300">
<span className="w-6 h-6 rounded-full bg-medical-500/20 flex items-center justify-center text-medical-400"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
<span>NDA-protected conversation</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="w-6 h-6 rounded-full bg-medical-500/20 flex items-center justify-center text-medical-400"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
<span>Expert technical feasibility assessment</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<span className="w-6 h-6 rounded-full bg-medical-500/20 flex items-center justify-center text-medical-400"><span className="iconify" data-icon="lucide:check" data-width="14"></span></span>
<span>Rough timeline &amp; budget estimation</span>
</li>
</ul>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl reveal delay-100">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-2">First Name</label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-2">Last Name</label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-2">Work Email</label>
<input className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all" placeholder="jane@hospital.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-2">Project Type</label>
<select className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500 transition-all appearance-none">
<option>EHR/EMR Integration</option>
<option>Telehealth Platform</option>
<option>Mobile Patient App</option>
<option>Compliance Audit</option>
</select>
</div>
<button className="w-full py-4 rounded-xl bg-medical-500 text-white font-bold text-sm hover:bg-medical-400 transition-all shadow-lg shadow-medical-500/25 flex items-center justify-center gap-2 group mt-2">
                            Request Consultation
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-850 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-medical-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
</div>
<span className="font-display font-bold text-xl text-white">Pulse<span className="text-medical-500">.</span></span>
</a>
<p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                        Building the future of digital health. Secure, compliant, and user-centric software solutions for forward-thinking providers.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-bold text-white mb-6 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-medical-400 transition-colors" href="#">Telehealth</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">EHR Integration</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Mobile Health</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Data Analytics</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-medical-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-medical-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-medical-400 transition-colors" href="#">BAA Agreement</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2024 Pulse Health Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">System Status: Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
