import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
        });

        // Scroll Reveal Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Hero Carousel Logic
        const slides = document.querySelectorAll('.slide');
        
        let currentSlide = 0;
        let slideInterval;

        function changeSlide(index) {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('inactive');
            
            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;

            // Add active class to new
            slides[currentSlide].classList.remove('inactive');
            slides[currentSlide].classList.add('active');
        }

        // Start Auto Slide
        slideInterval = setInterval(() => changeSlide(currentSlide + 1), 6000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">WestCor Energy</span>
</a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-500">
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="hover:text-blue-600 transition-colors" href="#process">Our Process</a>
<a className="hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="hover:text-blue-600 transition-colors" href="#partners">Partners</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-slate-900 text-xs font-bold hover:text-blue-600 items-center gap-2" href="tel:2818652526">
<i className="w-3 h-3" data-lucide="phone"></i> (281) 865-2526
                </a>
<a className="hidden md:flex px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 items-center gap-2" href="mailto:info@westcorenergy.com">
                    Get a Quote
                </a>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative w-full h-screen overflow-hidden bg-slate-900" id="home">

<div className="absolute inset-0 w-full h-full" id="hero-slider">

<div className="slide active absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90 z-10"></div>
<img alt="Corporate Building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="slide inactive absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90 z-10"></div>
<img alt="Office Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
<div className="reveal max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span id="slide-tag">Energy Procurement Experts</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[1.05] mb-8 transition-all duration-500" id="slide-title">
                    WestCor<br/>Energy.
                </h1>
<p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-500" id="slide-desc">
                    Your partner in business energy decisions. Empowering companies with cost-effective, tailored solutions.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-white/5" href="mailto:info@westcorenergy.com">
                        Get Started
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-bold hover:bg-white/20 transition-all duration-300" href="#process">
                        How it Works
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our Workflow</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">How We Can Help You.</h2>
<p className="text-slate-500 mt-4 max-w-2xl text-lg font-light">A simple three-step process to secure the best rates for your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal md:col-span-2 bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors"></div>
<div className="relative z-10">
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="file-text"></i>
</div>
<span className="text-6xl font-bold text-slate-100">01</span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-3">Let WestCor Energy Quote You</h3>
<p className="text-slate-500 leading-relaxed max-w-lg">Give our team a call at <strong className="text-slate-800">(281) 865-2526</strong>, or simply email a copy of your latest electricity bill to <a className="text-blue-600 hover:underline" href="mailto:info@westcorenergy.com">info@westcorenergy.com</a>.</p>
<p className="text-slate-500 leading-relaxed mt-4">We’ll take care of everything—reviewing your usage, comparing trusted suppliers, and finding the best possible deal for your business.</p>
</div>
</div>

<div className="reveal md:row-span-2 bg-slate-900 p-10 rounded-3xl border border-slate-800 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
<i className="w-7 h-7" data-lucide="trending-up"></i>
</div>
<span className="text-6xl font-bold text-slate-700">03</span>
</div>
<h3 className="text-2xl font-bold mb-3">Enjoy Fantastic Savings</h3>
<p className="text-slate-400 leading-relaxed text-sm">Once you’ve selected and moved to the right deal for you, you can sit back, relax and enjoy the savings.</p>
</div>
<div className="mt-8">
<div className="text-lg font-medium text-blue-300 mb-2">We track your renewals</div>
<p className="text-slate-400 text-xs leading-relaxed">
                                We’ll also let you know when your renewal date is due, so you can always make sure you’re on the most competitive deal, making sure you never go out of contract.
                            </p>
</div>
</div>
</div>

<div className="reveal reveal-delay-1 bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group md:row-span-1">
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6">
<i className="w-7 h-7" data-lucide="check-circle-2"></i>
</div>
<span className="text-6xl font-bold text-slate-100">02</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Choose Your Best Offer</h3>
<p className="text-sm text-slate-500 leading-relaxed">Once you know which options are available to you, simply choose the one that’s right for your business. Our experienced Customer Service Representatives will guide you through all the steps.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our Mission</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Empowering businesses with tailored energy solutions.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                    At Westcor Energy, we act as experts in energy procurement. We help companies of all sizes navigate complex markets, secure the best rates, and drive sustainability while reducing costs.
                </p>
<div className="grid grid-cols-2 gap-8 mb-8 border-t border-slate-100 pt-8">
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
<div className="text-sm text-slate-500">Tailored Solutions</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">Texas</div>
<div className="text-sm text-slate-500">Based &amp; Focused</div>
</div>
</div>
<a className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors" href="#contact">
                    Start Saving Today <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="reveal reveal-delay-2 relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
<img alt="Data Analysis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-900/10"></div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
<div className="absolute top-10 -right-10 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="partners">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-16 reveal">
<span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our Network</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Who We Work With</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto font-light">We provide the best rates from all of Texas’ leading energy suppliers.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 reveal reveal-delay-1">
<div className="p-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
<span className="text-lg font-bold text-slate-400">Leading Supplier 1</span>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
<span className="text-lg font-bold text-slate-400">Leading Supplier 2</span>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
<span className="text-lg font-bold text-slate-400">Leading Supplier 3</span>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
<span className="text-lg font-bold text-slate-400">Leading Supplier 4</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 mb-2 text-center reveal">F.A.Q</h2>
<p className="text-slate-500 text-center mb-12 text-sm reveal">Common questions regarding energy procurement.</p>
<div className="space-y-4">
<details className="reveal group bg-slate-50 p-5 rounded-xl border border-slate-100 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900 select-none">
                        How does WestCor Energy get paid?
                        <span className="transition group-open:rotate-45 text-blue-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        We work directly with suppliers to secure rates. Our service helps you navigate the complex market without direct upfront costs to your business for the procurement analysis.
                    </div>
</details>
<details className="reveal reveal-delay-1 group bg-slate-50 p-5 rounded-xl border border-slate-100 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900 select-none">
                        Can you help with contract renewals?
                        <span className="transition group-open:rotate-45 text-blue-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        Absolutely. We track your renewal dates and proactively reach out to ensure you never roll onto a variable rate and always maintain the most competitive contract.
                    </div>
</details>
<details className="reveal reveal-delay-2 group bg-slate-50 p-5 rounded-xl border border-slate-100 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-900 select-none">
                        What information do I need to provide?
                        <span className="transition group-open:rotate-45 text-blue-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        Simply email a copy of your latest electricity bill to info@westcorenergy.com. That is all we need to start the analysis.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-24 pb-12 text-white border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-12 mb-24 items-center border-b border-white/10 pb-24">
<div className="reveal">
<h2 className="text-4xl font-bold mb-4">Ready to lower your costs?</h2>
<p className="text-slate-400">Contact us today for a free consultation and take the first step towards a better energy contract.</p>
</div>
<div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 justify-end">
<a className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 text-center" href="mailto:info@westcorenergy.com">
                        Email Us
                    </a>
<a className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors text-center" href="tel:2818652526">
                        Call (281) 865-2526
                    </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-bold tracking-tight text-white">WestCor</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed">
                        Westcor Energy, LLC.<br/>
                        Empowering businesses with cost-effective energy solutions.
                    </p>
</div>

<div>
<h4 className="font-bold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#process">Process</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Support</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Contact</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
<a className="hover:text-white transition-colors" href="mailto:info@westcorenergy.com">info@westcorenergy.com</a>
</p>
<p className="text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="tel:2818652526">(281) 865-2526</a>
</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-slate-500 font-medium">
<p>© 2025 Westcor Energy, LLC. All Rights Reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
