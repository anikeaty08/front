import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#1B2A4A',
gold: '#C8973E',
'gold-light': '#DNB469',
offwhite: '#F8F6F2',
charcoal: '#2D2D2D',
slate: '#E8EDF2'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
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



{
"@context": "https://schema.org",
"@type": "FinancialService",
"name": "Buckingham Retirement Services",
"founder": "John Buckingham",
"description": "Retirement planning consultancy specializing in coordinating legal, tax, and investment plans.",
"telephone": "+1-630-260-9159",
"email": "jkabuck@comcast.net",
"address": {
"@type": "PostalAddress",
"addressRegion": "TX",
"addressCountry": "US"
},
"priceRange": "$$"
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.remove('bg-white/95');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-navy text-gold flex items-center justify-center rounded-sm">
<span className="font-serif text-xl font-bold">B</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-navy font-semibold text-lg tracking-tight leading-none group-hover:text-gold transition-colors">BUCKINGHAM</span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-1">Retirement Services</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-navy transition-colors text-sm font-medium text-gray-600" href="#problem">The Problem</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#testimonials">Stories</a>
<a className="px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-sm hover:bg-gold transition-colors duration-300 shadow-sm" href="#contact">
                        Free Review
                    </a>
</nav>

<button aria-label="Open Menu" className="md:hidden text-navy p-2" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6" id="mobile-menu">
<button aria-label="Close Menu" className="absolute top-6 right-6 text-navy" id="close-menu-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-xl font-serif text-navy border-b border-gray-100 pb-4 mobile-link" href="#problem">The Problem</a>
<a className="text-xl font-serif text-navy border-b border-gray-100 pb-4 mobile-link" href="#services">Services</a>
<a className="text-xl font-serif text-navy border-b border-gray-100 pb-4 mobile-link" href="#process">Process</a>
<a className="text-xl font-serif text-navy border-b border-gray-100 pb-4 mobile-link" href="#testimonials">Stories</a>
<a className="text-xl font-serif text-gold font-semibold mobile-link" href="#contact">Schedule Review</a>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mx-auto text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-medium tracking-wide uppercase mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                    30+ Years of Banking Experience
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight tracking-tight mb-6">
                    Your Lawyer, Tax Preparer, and Broker Should Be Working Together. <span className="text-gold italic font-serif">Are They?</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
                    Most people don't "Plan to fail" — But some of us "Fail to plan." We coordinate your entire financial picture so you can retire with confidence.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gold text-white font-medium text-sm tracking-wide rounded-sm hover:bg-white hover:text-navy transition-all duration-300 shadow-lg shadow-gold/20" href="#contact">
                        Schedule Your Free Retirement Review
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-medium text-sm tracking-wide rounded-sm hover:border-white transition-all duration-300" href="#problem">
                        How We Are Different
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="problem">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">The Core Issue</h2>
<h3 className="text-3xl md:text-4xl font-serif text-navy mb-6 tracking-tight">The Question Nobody Asks</h3>
<div className="prose prose-lg text-gray-600 mb-8">
<p className="mb-4">
                            Most retirees have a lawyer, a tax preparer, and an investment broker. But here is the critical problem: <strong>they have never met.</strong>
</p>
<p>
                            They operate in silos. Your broker creates gains that your tax preparer has to mitigate, while your lawyer drafts documents that might not reflect your current assets.
                        </p>
<p className="text-navy font-medium italic border-l-4 border-gold pl-4 py-1 bg-offwhite">
                            John's specialty is reviewing existing plans and making sure these three pillars—Legal, Tax, and Investment—are actually working together.
                        </p>
</div>
</div>

<div className="relative reveal delay-100">
<div className="bg-offwhite rounded-xl p-8 border border-gray-100 shadow-sm">
<h4 className="font-serif text-xl text-navy mb-6 text-center">Do You Have a Real Plan?</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold mt-1 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span className="text-gray-700 text-sm">Do you have a current Will, Trust, and Durable Power of Attorney?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold mt-1 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span className="text-gray-700 text-sm">Have you taken steps to reduce your future Income Tax Liability?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold mt-1 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span className="text-gray-700 text-sm">Should your 401(k) or IRA still be invested in the Stock Market?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold mt-1 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span className="text-gray-700 text-sm">Do you know the exact date you can retire safely?</span>
</li>
</ul>
</div>

<div className="hidden lg:flex justify-center mt-8 gap-4 opacity-50">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-navy flex items-center justify-center text-navy"><iconify-icon icon="solar:scale-linear" width="20"></iconify-icon></div>
<span className="text-xs mt-2 font-medium uppercase">Legal</span>
</div>
<div className="w-8 h-px bg-navy self-center"></div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white shadow-lg z-10 scale-110"><iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon></div>
<span className="text-xs mt-2 font-bold uppercase text-navy">Plan</span>
</div>
<div className="w-8 h-px bg-navy self-center"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-navy flex items-center justify-center text-navy"><iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon></div>
<span className="text-xs mt-2 font-medium uppercase">Money</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-offwhite" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">What We Do</h2>
<h3 className="text-3xl md:text-4xl font-serif text-navy tracking-tight">Comprehensive Retirement Solutions</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Comprehensive Review</h4>
<p className="text-sm text-gray-600 leading-relaxed">Detailed review of your wills, trusts, tax reduction plans, and current retirement strategies.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-75">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Plan Verification</h4>
<p className="text-sm text-gray-600 leading-relaxed">Ensuring your current formal plans actually reflect your current wants and wishes.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-100">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Gap Analysis</h4>
<p className="text-sm text-gray-600 leading-relaxed">Identifying and adding missing elements to strengthen your overall retirement architecture.</p>
</div>

<div className="bg-navy p-8 rounded-sm shadow-lg transform md:-translate-y-2 reveal delay-150 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-gold opacity-10 rounded-full blur-2xl"></div>
<div className="w-12 h-12 bg-white/10 text-gold rounded-sm flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-white mb-3">Income Replacement</h4>
<p className="text-sm text-gray-300 leading-relaxed">Calculating the actual dollar amount of monthly lifetime income so you know exactly when to retire.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-200 relative border border-gold/20">
<div className="absolute top-4 right-4 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">Flat Fee</div>
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Tax Preparation</h4>
<p className="text-sm text-gray-600 leading-relaxed">Professional income tax preparation for a flat fee of $99.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-300">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">401(k) &amp; IRA Review</h4>
<p className="text-sm text-gray-600 leading-relaxed">Evaluating whether your accounts should remain exposed to stock market risks.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-300">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:safe-square-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Safe Placement</h4>
<p className="text-sm text-gray-600 leading-relaxed">Moving retirement money into safer, interest-bearing vehicles to protect your principal.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-300">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Estate Coordination</h4>
<p className="text-sm text-gray-600 leading-relaxed">Reviewing Will, Trust, and Durable Power of Attorney to ensure alignment with financial goals.</p>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group reveal delay-300">
<div className="w-12 h-12 bg-navy/5 text-navy rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors">
<iconify-icon height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h4 className="font-serif text-lg font-semibold text-navy mb-3">Social Security &amp; Medicare</h4>
<p className="text-sm text-gray-600 leading-relaxed">Full onboarding support for the transition into Social Security and Medicare.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-navy text-white relative overflow-hidden" id="process">
<div className="absolute inset-0 bg-gradient-to-b from-navy to-[#152039]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-16 reveal">
<h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">How It Works</h2>
<h3 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">Our 4-Step Methodology</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/20 z-0"></div>

<div className="relative z-10 reveal">
<div className="w-24 h-24 bg-navy border border-gold text-gold rounded-full flex items-center justify-center text-3xl font-serif mb-6 mx-auto md:mx-0 shadow-lg shadow-black/20">1</div>
<h4 className="text-xl font-serif font-medium mb-2">Review</h4>
<p className="text-sm text-gray-400">Examine wills, trusts, tax plans, and retirement strategies.</p>
</div>

<div className="relative z-10 reveal delay-100">
<div className="w-24 h-24 bg-navy border border-gray-600 text-white rounded-full flex items-center justify-center text-3xl font-serif mb-6 mx-auto md:mx-0">2</div>
<h4 className="text-xl font-serif font-medium mb-2">Verify</h4>
<p className="text-sm text-gray-400">Confirm formal plans actually reflect your wishes.</p>
</div>

<div className="relative z-10 reveal delay-200">
<div className="w-24 h-24 bg-navy border border-gray-600 text-white rounded-full flex items-center justify-center text-3xl font-serif mb-6 mx-auto md:mx-0">3</div>
<h4 className="text-xl font-serif font-medium mb-2">Update</h4>
<p className="text-sm text-gray-400">Fill in any gaps or missing elements in your planning.</p>
</div>

<div className="relative z-10 reveal delay-300">
<div className="w-24 h-24 bg-gold text-white rounded-full flex items-center justify-center text-3xl font-serif mb-6 mx-auto md:mx-0 shadow-lg shadow-gold/30">4</div>
<h4 className="text-xl font-serif font-medium mb-2 text-gold">Plan Income</h4>
<p className="text-sm text-gray-400">Calculate your exact monthly lifetime income.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-offwhite rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-200 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 text-gold font-bold uppercase text-xs tracking-widest mb-4">
<iconify-icon icon="solar:star-linear"></iconify-icon> Signature Offering
                        </div>
<h2 className="text-3xl md:text-5xl font-serif text-navy mb-6 leading-tight">The "Golden Goose" Plan</h2>
<p className="text-lg text-gray-600 mb-6">
                            Most retirees worry about one thing: running out of money.
                        </p>
<p className="text-gray-600 mb-8 leading-relaxed">
                            Our signature approach calculates exactly how much you can spend each year from your IRA/401K savings without depleting the principal. This gives you the confidence to enjoy your retirement, knowing the "Golden Goose" (your principal) remains intact while you enjoy the "Eggs" (the interest).
                        </p>
<a className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors" href="#contact">
                            Get your calculation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">

<div className="bg-white p-8 shadow-xl rounded-sm border border-gray-100 max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-xs text-gray-500 uppercase">Projected Spend</p>
<p className="text-3xl font-serif text-navy">$4,800<span className="text-sm text-gray-400 font-sans">/mo</span></p>
</div>
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-navy w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span>Principal Safety</span>
<span>High</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-100">
<p className="text-sm text-gray-600 italic">"Now I know how much I can spend each year and never worry."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate/30" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-navy">Client Stories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all reveal">
<iconify-icon className="text-gold mb-4" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-gray-600 mb-6 italic leading-relaxed">"He reviewed my Trust and suggested some changes for my Lawyer to make regarding Tax implications... Now my accounts are safe from Stock Market fluctuations and earn annual Interest without the risk. We have made enough interest together over the years to comfortably retire."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-serif font-bold">M</div>
<div>
<p className="text-sm font-bold text-navy">Mimi B.</p>
<p className="text-xs text-gray-500">Retirement Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all reveal delay-100">
<iconify-icon className="text-gold mb-4" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-gray-600 mb-6 italic leading-relaxed">"I was contemplating retiring, but wasn't sure if I had saved enough. John showed me the Golden Goose/Egg plan, and turns out I can retire on my IRA/401K Savings. Now I know how much I can spend each year and never worry about running out."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-serif font-bold">C</div>
<div>
<p className="text-sm font-bold text-navy">Chris M.</p>
<p className="text-xs text-gray-500">Retirement Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all reveal">
<iconify-icon className="text-gold mb-4" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-gray-600 mb-6 italic leading-relaxed">"I attended John's Estate Planning dinner seminar 14 years ago, and I've been a client ever since. He prepares my taxes, protects my Retirement Accounts and guided me through the Social Security/Medicare onboarding process."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-serif font-bold">C</div>
<div>
<p className="text-sm font-bold text-navy">Cheryl W.</p>
<p className="text-xs text-gray-500">14-Year Client</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all reveal delay-100">
<iconify-icon className="text-gold mb-4" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-gray-600 mb-6 italic leading-relaxed">"He upgraded my old Retirement account which has now doubled in value. I'm very happy about that!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-serif font-bold">C</div>
<div>
<p className="text-sm font-bold text-navy">Colleen B.</p>
<p className="text-xs text-gray-500">Retirement Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 reveal">
<div className="aspect-[3/4] bg-gray-100 rounded-sm relative overflow-hidden">

<div className="absolute inset-0 bg-navy flex items-center justify-center">
<span className="text-white opacity-20 text-9xl font-serif">JB</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-navy/90 to-transparent">
<p className="text-white font-serif text-xl">John Buckingham</p>
<p className="text-gold text-sm">Owner &amp; Consultant</p>
</div>
</div>
</div>
<div className="w-full md:w-2/3 reveal delay-100">
<h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">About John</h2>
<h3 className="text-3xl md:text-4xl font-serif text-navy mb-6">More Than Just Numbers</h3>
<div className="prose prose-lg text-gray-600">
<p>
                            With over 30 years of banking and financial experience, John Buckingham brings a unique perspective to retirement planning. He doesn't just look at the spreadsheet; he looks at the life behind it.
                        </p>
<p>
                            John's holistic approach encompasses savings, health insurance, Medicare, housing decisions, part-time work, hobbies, and—most importantly—helping you figure out "what to do next."
                        </p>
<p className="">
                            At Buckingham Retirement Services, you are not dealing with a faceless corporation or a call center. You are working with John and Patti—real people who pick up the phone and care about your future.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-navy relative" id="contact">

<div className="absolute top-0 left-0 w-full bg-gold/90 text-navy py-2 text-center text-xs md:text-sm font-semibold px-4">
            Have you moved your retirement money into an interest-bearing account yet? Ask us how.
        </div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal text-white">
<h2 className="text-3xl md:text-4xl font-serif mb-6">Don't Wait. Your Retirement Plan Deserves a Second Opinion.</h2>
<p className="text-gray-300 mb-8 text-lg font-light">
                        Schedule a no-obligation review. We'll look at your legal, tax, and investment plans to ensure they are working together.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Call John</p>
<a className="text-xl font-serif hover:text-gold transition-colors" href="tel:6302609159">630-260-9159</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Call Patti</p>
<a className="text-xl font-serif hover:text-gold transition-colors" href="tel:7736567184">773-656-7184</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
<a className="text-xl font-serif hover:text-gold transition-colors" href="mailto:jkabuck@comcast.net">jkabuck@comcast.net</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-sm p-8 shadow-2xl reveal delay-100">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for your interest. In a production environment, this would send an email to jkabuck@comcast.net');">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:bg-white transition-colors" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:bg-white transition-colors" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:bg-white transition-colors" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:bg-white transition-colors" id="message" placeholder="Tell us about your retirement situation..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-gold text-white font-medium text-sm tracking-wide rounded-sm hover:bg-navy transition-colors duration-300" type="submit">
                            Request Free Consultation
                        </button>
<p className="text-xs text-center text-gray-400 mt-4">Your information is kept strictly confidential.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="text-white border-white/10 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="">
<h4 className="text-lg font-semibold font-serif mb-1 text-navy">Buckingham Retirement Services</h4>
<p className="text-sm text-gray-400">Planning for a retirement that lasts.</p>
</div>
<div className="flex gap-4">

<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors text-white" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors text-white" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-white/10 mt-8 pt-8 text-center md:text-left text-xs text-gray-500 flex flex-col md:flex-row justify-between">
<p className="">© 2026 Buckingham Retirement Services. All rights reserved.</p>
<p className="mt-2 md:mt-0">Texas | 630-260-9159</p>
</div>
</div>
</footer>



    </>
  );
}
