import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Add soft navbar shadow on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel transition-all duration-300 border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="text-3xl font-bold tracking-tight text-blue-600 transition-colors group-hover:text-blue-700">Akracore</span>
<div className="relative w-6 h-6 ml-0.5 logo-pin">

<div className="absolute inset-0 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center overflow-hidden">
<div className="w-full h-1/3 bg-rose-500 absolute top-0"></div>
<div className="w-full h-1/3 bg-amber-400 absolute top-1/3"></div>
<div className="w-full h-1/3 bg-emerald-500 absolute bottom-0"></div>

<svg className="w-2.5 h-2.5 relative z-10" fill="black" viewbox="0 0 24 24">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>

<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#process">Process</a>
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#about">About Us</a>
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-base font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="bg-blue-600 text-white text-base font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0" href="#">
                    Book a Call
                </a>
</div>

<button className="md:hidden text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-up opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-medium text-slate-600">Bridging the UK &amp; Ghana</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1] animate-fade-up opacity-0 animate-delay-100">
                Scale your team with elite <br/>
<span className="text-blue-600">talent in Ghana.</span>
</h1>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 animate-delay-200">
                Akracore connects UK SMEs with highly skilled, English-speaking professionals in Accra. Reduce overheads without compromising on quality or culture.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animate-delay-300">
<button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                    Start Your Pilot
                </button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
<i className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="play-circle"></i>
                    How it Works
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl animate-fade-up opacity-0 animate-delay-300">
<div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xl shadow-blue-900/5">
<div className="bg-slate-50 rounded-xl border border-slate-100 aspect-[16/9] overflow-hidden relative flex items-center justify-center">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="w-3/4 h-3/4 grid grid-cols-2 gap-6 relative z-10">

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4 transform translate-y-8 opacity-90">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">SA</div>
<div>
<div className="h-3 w-32 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-20 bg-slate-100 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-5/6 bg-slate-50 rounded"></div>
</div>
<div className="mt-auto flex gap-2">
<span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-md font-medium">Available</span>
<span className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded-md font-medium">Senior Dev</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between transform -translate-y-4">
<div className="flex justify-between items-start">
<div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<span className="text-emerald-600 font-medium text-sm">+45%</span>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900">£42k</div>
<div className="text-sm text-slate-400">Annual Savings</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by forward-thinking UK Companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-32 bg-slate-200 rounded"></div>
<div className="h-8 w-28 bg-slate-200 rounded"></div>
<div className="h-8 w-36 bg-slate-200 rounded"></div>
<div className="h-8 w-24 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-slate-200 rounded"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Why outsourcing to Ghana makes perfect sense.</h2>
<p className="text-slate-500 text-xl">We combine the cost advantages of offshoring with the cultural and time-zone alignment of nearshoring.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">GMT Time Zone</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Ghana operates on GMT, meaning zero time difference with the UK. Real-time collaboration without the late-night calls.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="languages"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Native English</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        As an official language, English proficiency is native-level. Communication is seamless, nuanced, and culturally aligned with your UK team.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">60% Cost Efficiency</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Access senior-level talent for the price of junior UK hires. Reduce operational overheads while maintaining premium output quality.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Roles we fill instantly</h2>
<p className="text-slate-500 text-lg">From customer support to complex software engineering, Akracore sources the top 1% of talent in Accra.</p>
</div>
<a className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2 group" href="#">
                    View all roles <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group cursor-pointer reveal">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white rounded-lg shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="headphones"></i>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Customer Support</h3>
<p className="text-sm text-slate-500">Omnichannel support, CX agents, and success managers.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group cursor-pointer reveal">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white rounded-lg shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="code-2"></i>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Software Dev</h3>
<p className="text-sm text-slate-500">Frontend, Backend, QA, and Full-stack engineers.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group cursor-pointer reveal">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white rounded-lg shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="bar-chart-3"></i>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Accounting</h3>
<p className="text-sm text-slate-500">Bookkeeping, payroll processing, and financial analysis.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group cursor-pointer reveal">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white rounded-lg shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="pen-tool"></i>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Creative &amp; Admin</h3>
<p className="text-sm text-slate-500">Virtual assistants, graphic design, and content entry.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="process">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">We handle the heavy lifting.</h2>
<p className="text-slate-400 text-xl mb-10">Our end-to-end management platform ensures your team is productive from day one.</p>
<div className="space-y-8">

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors">1</div>
<div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Sourcing &amp; Vetting</h3>
<p className="text-slate-400 leading-relaxed">We scour Accra for top talent, conducting rigorous technical and cultural assessments.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-medium group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-colors">2</div>
<div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">Onboarding &amp; Compliance</h3>
<p className="text-slate-400 leading-relaxed">We handle contracts, payroll, benefits, and local compliance so you don't have to.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-medium group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors">3</div>
<div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">Ongoing Management</h3>
<p className="text-slate-400 leading-relaxed">Dedicated success managers ensure your remote team remains motivated and aligned.</p>
</div>
</div>
</div>
</div>

<div className="relative reveal">
<div className="bg-slate-800 rounded-2xl border border-slate-700 p-2 shadow-2xl">
<div className="bg-slate-900 rounded-xl aspect-square overflow-hidden relative flex flex-col p-8">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="h-2 w-20 bg-slate-800 rounded-full"></div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="check"></i>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-700 rounded mb-2"></div>
<div className="h-1.5 w-16 bg-slate-800 rounded"></div>
</div>
<div className="text-xs text-blue-400 font-medium">Vetted</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 opacity-70">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="user-plus"></i>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-700 rounded mb-2"></div>
<div className="h-1.5 w-16 bg-slate-800 rounded"></div>
</div>
<div className="text-xs text-slate-500 font-medium">Pending</div>
</div>
<div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">Team Velocity</span>
<span className="text-xs text-blue-400">+12%</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg max-w-[200px] animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-bold">New Placement</span>
</div>
<p className="text-xs text-slate-500">Senior React Developer assigned to Project Alpha.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50 relative overflow-hidden" id="pricing">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Transparent, simple pricing.</h2>
<p className="text-slate-500 text-xl mb-10">No hidden recruitment fees. You pay a flat monthly rate that includes salary, benefits, office space, and hardware.</p>
<div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 max-w-lg mx-auto transform transition-all hover:scale-[1.02]">
<div className="flex items-center justify-center gap-2 mb-2">
<span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Most Popular</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Dedicated Staffing</h3>
<div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">£1,500<span className="text-xl text-slate-400 font-medium tracking-normal">/mo</span></div>
<p className="text-slate-500 text-sm mb-8">Starting price for junior roles</p>
<ul className="text-left space-y-4 mb-8 text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Full-time dedicated employee</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Hardware (MacBook/Dell) included</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>High-speed fibre internet workspace</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>HR &amp; Payroll management</span>
</li>
</ul>
<button className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                    Get a Quote
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/30 reveal">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to expand your team?</h2>
<p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Book a 15-minute discovery call to discuss your requirements. No commitment required.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                            Book Discovery Call
                        </button>
<button className="w-full sm:w-auto bg-transparent border border-blue-400 text-white px-8 py-3.5 rounded-full font-medium text-lg hover:bg-blue-700 hover:border-blue-700 transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-1 mb-6" href="#">
<span className="text-2xl font-bold tracking-tight text-slate-900">Akracore</span>
<div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Premium outsourcing solutions connecting UK businesses with exceptional talent in Ghana.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Software Engineering</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Customer Support</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Virtual Assistants</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Data Entry</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Locations</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-blue-600" data-lucide="map-pin"></i>
<span>London, UK<br/><span className="text-xs text-slate-400">HQ</span></span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-blue-600" data-lucide="map-pin"></i>
<span>Accra, Ghana<br/><span className="text-xs text-slate-400">Operations Center</span></span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2024 Akracore Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
