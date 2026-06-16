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
orange: '#F95A2C',     // Primary Action
peach: '#FFF2EB',      // Warmth
brown: '#3E2723',      // Deep Text (No black)
cream: '#FAFAF9',      // Background
surface: '#FFFFFF',    // Cards
border: '#E7E5E4'
}
},
fontFamily: {
display: ['Clash Display', 'sans-serif'],     // UT Boldnose Proxy
sans: ['Plus Jakarta Sans', 'sans-serif'],    // Liga Sans Proxy
body: ['General Sans', 'sans-serif'],         // Nohemo Proxy
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(62, 39, 35, 0.04)',
'hover': '0 20px 40px -4px rgba(62, 39, 35, 0.08)',
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



        // Scroll Reveal Logic using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Tab Switching Logic
        function switchTab(tabName) {
            // Reset Buttons
            const buttons = document.querySelectorAll('button[id^="tab-"]');
            buttons.forEach(btn => {
                btn.className = 'px-6 py-2.5 rounded-full text-sm font-medium text-brand-brown/60 hover:text-brand-brown transition-all duration-300';
            });

            // Activate Button
            const activeBtn = document.getElementById(`tab-${tabName}`);
            activeBtn.className = 'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-brand-orange text-white shadow-sm';

            // Hide all content
            const contents = document.querySelectorAll('div[id^="content-"]');
            contents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('grid'); // remove grid display
            });

            // Show active content
            const activeContent = document.getElementById(`content-${tabName}`);
            activeContent.classList.remove('hidden');
            activeContent.classList.add('grid');
            
            // Re-trigger animation for the new content
            activeContent.classList.remove('reveal-on-scroll', 'is-visible');
            void activeContent.offsetWidth; // trigger reflow
            activeContent.classList.add('reveal-on-scroll', 'is-visible');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-brand-orange hover:opacity-80 transition-opacity" href="#">

<svg fill="currentColor" height="40" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4C17.5 4 16 4.5 15 5.5L13 7.5C13 7.5 11.5 6 9.5 6C7.5 6 6 7.5 6 9.5V12.5C6 13.5 6.5 14.5 7.5 15L9.5 16C10.5 16.5 11 17.5 11 18.5V21H17V15.5C17 14.5 17.5 13.5 18.5 13L20 12.25V6.5C20 5.11929 18.8807 4 17.5 4H19Z" fill="currentColor"></path>
<path d="M5 14L3 13V9C3 7 4.5 5.5 6 5V7C5.5 7 5 7.5 5 8V14Z" fill="currentColor" fillOpacity="0.5"></path>
</svg>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="text-brand-brown/70 hover:text-brand-brown transition-colors" href="#">Personal</a>
<a className="text-brand-brown/70 hover:text-brand-brown transition-colors" href="#">Business</a>
<a className="px-5 py-2.5 bg-brand-brown text-white rounded-full hover:bg-opacity-90 transition-all shadow-soft" href="#">Login</a>
</div>

<button className="md:hidden text-brand-brown">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="horse-bg"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<h1 className="text-5xl md:text-7xl font-semibold text-brand-brown leading-[1.1] mb-8">
                Your money shouldn’t<br/>
<span className="text-brand-orange">slow you down.</span>
</h1>
<p className="subhead text-xl md:text-2xl text-brand-brown/70 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                A bank designed to move with you — simply, securely, intelligently.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white rounded-full font-medium text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group" href="#">
                    Open an account
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-brand-brown font-medium hover:text-brand-orange transition-colors" href="#how-it-works">
                    See how it works
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none"></div>
</header>

<section className="py-24 bg-brand-cream relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-4">Start moving in minutes.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft card-interaction border border-brand-brown/5 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-brand-peach rounded-2xl flex items-center justify-center text-brand-orange mb-6">
<iconify-icon icon="lucide:scan-face" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-brown mb-2">Verify your identity</h3>
<p className="text-brand-brown/60 leading-relaxed">Securely confirm who you are using your phone. No branch visits.</p>
</div>

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft card-interaction border border-brand-brown/5 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-brand-peach rounded-2xl flex items-center justify-center text-brand-orange mb-6">
<iconify-icon icon="lucide:sliders-horizontal" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-brown mb-2">Set your preferences</h3>
<p className="text-brand-brown/60 leading-relaxed">Choose limits, notifications, and savings goals that fit your life.</p>
</div>

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft card-interaction border border-brand-brown/5 reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-brand-peach rounded-2xl flex items-center justify-center text-brand-orange mb-6">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-brown mb-2">You’re ready to go</h3>
<p className="text-brand-brown/60 leading-relaxed">Your virtual card is active instantly. Physical card arrives in 48h.</p>
</div>
</div>
<div className="mt-12 text-center reveal-on-scroll">
<a className="inline-flex items-center text-brand-orange font-medium hover:opacity-80 transition-opacity" href="#">
                    Get started
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-8">Designed for how you live and work.</h2>

<div className="inline-flex bg-brand-cream p-1.5 rounded-full border border-brand-brown/5">
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-brand-orange text-white shadow-sm" id="tab-personal" onclick="switchTab('personal')">
                        Personal
                    </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-brand-brown/60 hover:text-brand-brown transition-all duration-300" id="tab-business" onclick="switchTab('business')">
                        Business
                    </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-brand-brown/60 hover:text-brand-brown transition-all duration-300" id="tab-sme" onclick="switchTab('sme')">
                        SMEs
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll" id="content-personal">

<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors cursor-default group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:send" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Pay &amp; transfer</h4>
<p className="text-sm text-brand-brown/60">Instant movement to any local bank.</p>
</div>

<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors cursor-default group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:pie-chart" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Track spending</h4>
<p className="text-sm text-brand-brown/60">Visualize where your money goes.</p>
</div>

<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors cursor-default group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:piggy-bank" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Save automatically</h4>
<p className="text-sm text-brand-brown/60">Round up purchases to your savings.</p>
</div>

<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors cursor-default group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:life-buoy" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Get help anytime</h4>
<p className="text-sm text-brand-brown/60">Support that actually responds.</p>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="content-business">
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:briefcase" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Payroll simplified</h4>
<p className="text-sm text-brand-brown/60">Batch payments in one click.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:receipt" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Expense management</h4>
<p className="text-sm text-brand-brown/60">Issue cards to your team.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:globe" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">International</h4>
<p className="text-sm text-brand-brown/60">Low fees on FX transfers.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:file-text" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Invoicing</h4>
<p className="text-sm text-brand-brown/60">Create and send directly.</p>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="content-sme">
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:rocket" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Growth Capital</h4>
<p className="text-sm text-brand-brown/60">Quick access to funding.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:users" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Advisory</h4>
<p className="text-sm text-brand-brown/60">Dedicated business experts.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:terminal-square" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">POS Solutions</h4>
<p className="text-sm text-brand-brown/60">Modern payment terminals.</p>
</div>
<div className="p-6 bg-brand-cream rounded-[20px] hover:bg-brand-peach/30 transition-colors group">
<iconify-icon className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300" icon="lucide:shield-check" width="28"></iconify-icon>
<h4 className="font-medium text-lg text-brand-brown mb-2">Risk Protection</h4>
<p className="text-sm text-brand-brown/60">Comprehensive insurance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-cream">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-brown">Why people stay with<br/>Banque Populaire.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft border border-brand-brown/5 flex flex-col justify-between reveal-on-scroll">
<p className="text-xl text-brand-brown/90 leading-relaxed mb-8">“Everything is clear. Nothing feels complicated anymore. It just works.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">

<div className="w-full h-full bg-brand-peach flex items-center justify-center text-brand-brown/50 text-xs font-bold">SM</div>
</div>
<div>
<p className="text-sm font-medium text-brand-brown">Sarah M.</p>
<p className="text-xs text-brand-brown/50">Freelance Designer</p>
</div>
</div>
</div>

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft border border-brand-brown/5 flex flex-col justify-between reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<p className="text-xl text-brand-brown/90 leading-relaxed mb-8">“The app moves as fast as I do. Transfers are instant, and I never have to guess fees.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-brand-peach flex items-center justify-center text-brand-brown/50 text-xs font-bold">AK</div>
</div>
<div>
<p className="text-sm font-medium text-brand-brown">Amine K.</p>
<p className="text-xs text-brand-brown/50">Small Business Owner</p>
</div>
</div>
</div>

<div className="bg-brand-surface p-8 rounded-[24px] shadow-soft border border-brand-brown/5 flex flex-col justify-between reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<p className="text-xl text-brand-brown/90 leading-relaxed mb-8">“Finally, a bank that feels human. The support team actually solves problems.”</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-brand-peach flex items-center justify-center text-brand-brown/50 text-xs font-bold">LN</div>
</div>
<div>
<p className="text-sm font-medium text-brand-brown">Lina N.</p>
<p className="text-xs text-brand-brown/50">Architect</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-y border-brand-brown/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
<div className="md:w-1/2 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-brown mb-4">Help that moves at your speed.</h2>
<p className="subhead text-xl text-brand-brown/60 mb-10">Smart when it’s simple. Human when it matters.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center text-brand-orange mt-1 shrink-0">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-brand-brown">24/7 intelligent assistance</h4>
<p className="text-sm text-brand-brown/60 mt-1">Get immediate answers to common questions.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center text-brand-orange mt-1 shrink-0">
<iconify-icon icon="lucide:user-check" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-brand-brown">Instant human handoff</h4>
<p className="text-sm text-brand-brown/60 mt-1">Connect with a real person in one tap.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center text-brand-orange mt-1 shrink-0">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-brand-brown">Clear answers, no scripts</h4>
<p className="text-sm text-brand-brown/60 mt-1">We solve the problem, not just read the policy.</p>
</div>
</div>
</div>
</div>
<div className="md:w-5/12 reveal-on-scroll">

<div className="aspect-square rounded-[32px] bg-gradient-to-br from-brand-peach to-brand-cream relative overflow-hidden flex items-center justify-center">
<div className="absolute w-64 h-64 bg-white/40 rounded-full blur-2xl"></div>
<div className="relative z-10 bg-white p-6 rounded-2xl shadow-soft max-w-[260px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-semibold text-brand-brown/40 uppercase tracking-wide">Support</span>
</div>
<p className="text-brand-brown font-medium text-lg">"We've unlocked your card for international travel. Safe travels!"</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-cream text-center">
<div className="max-w-2xl mx-auto px-6 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold text-brand-brown mb-4">Open an account today.</h2>
<p className="text-lg text-brand-brown/60 mb-10">No paperwork. No branch visit. Just flow.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 bg-brand-orange text-white rounded-full font-medium text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    Get started
                </button>
<button className="w-full sm:w-auto px-10 py-4 bg-white text-brand-brown border border-brand-brown/10 rounded-full font-medium hover:bg-brand-brown/5 transition-colors">
                    Talk to us
                </button>
</div>
</div>
</section>

<footer className="bg-brand-brown/[0.02] border-t border-brand-brown/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h5 className="font-semibold text-brand-brown mb-4 text-sm tracking-wide">Personal Banking</h5>
<ul className="space-y-3 text-sm text-brand-brown/60">
<li><a className="hover:text-brand-brown transition-colors" href="#">Accounts</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Cards</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Savings</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Loans</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-brand-brown mb-4 text-sm tracking-wide">Business &amp; SMEs</h5>
<ul className="space-y-3 text-sm text-brand-brown/60">
<li><a className="hover:text-brand-brown transition-colors" href="#">Business Accounts</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Invoicing</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Funding</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Terminals</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-brand-brown mb-4 text-sm tracking-wide">Support</h5>
<ul className="space-y-3 text-sm text-brand-brown/60">
<li><a className="hover:text-brand-brown transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Lost Card</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Fraud Prevention</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-brand-brown mb-4 text-sm tracking-wide">About BCP</h5>
<ul className="space-y-3 text-sm text-brand-brown/60">
<li><a className="hover:text-brand-brown transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Press</a></li>
<li><a className="hover:text-brand-brown transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
</div>
<div className="border-t border-brand-brown/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

<div className="text-brand-brown font-display font-bold tracking-tight text-xl">
                    BANQUE POPULAIRE
                </div>
<div className="flex items-center gap-6 text-xs text-brand-brown/40">
<a className="hover:text-brand-brown transition-colors" href="#">Language</a>
<a className="hover:text-brand-brown transition-colors" href="#">Accessibility</a>
<a className="hover:text-brand-brown transition-colors" href="#">Security</a>
<a className="hover:text-brand-brown transition-colors" href="#">Legal</a>
</div>
</div>
<div className="text-center mt-8 text-[10px] text-brand-brown/30">
                © 2023 Groupe Banque Populaire. All rights reserved. Reimagined by foorm.
            </div>
</div>
</footer>


    </>
  );
}
