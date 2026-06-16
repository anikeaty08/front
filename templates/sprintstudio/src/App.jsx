import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: { extend: {} },
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { transform: `rotateX(${value}deg)` };
if (value !== 0) rotateXUtilities[`.-rotate-x-${value}`] = { transform: `rotateX(-${value}deg)` };
rotateYUtilities[`.rotate-y-${value}`] = { transform: `rotateY(${value}deg)` };
if (value !== 0) rotateYUtilities[`.-rotate-y-${value}`] = { transform: `rotateY(-${value}deg)` };
rotateZUtilities[`.rotate-z-${value}`] = { transform: `rotateZ(${value}deg)` };
if (value !== 0) rotateZUtilities[`.-rotate-z-${value}`] = { transform: `rotateZ(-${value}deg)` };
});
addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ...rotateZUtilities });
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                (function() {
                    const container = document.getElementById('card-grid-container');
                    if(!container) return;
                    const cards = container.querySelectorAll('.card-item');
                    let activeCard = null;
                    
                    cards.forEach((card) => {
                        card.addEventListener('click', function(e) {
                            e.stopPropagation();
                            if (activeCard === card) { resetCards(); return; }
                            cards.forEach((c) => {
                                c.style.filter = 'blur(4px) grayscale(0.6)';
                                c.style.opacity = '0.5';
                                c.style.transform = c.style.transform.replace(/scale\([^\)]+\)/, '') + ' scale(0.9)';
                                c.style.zIndex = '0';
                            });
                            card.style.filter = 'none';
                            card.style.opacity = '1';
                            card.style.transform = 'translate(0, -10px) rotate(0deg) scale(1.15)';
                            card.style.zIndex = '50';
                            activeCard = card;
                        });
                    });
                    
                    document.addEventListener('click', function(e) {
                        if (activeCard && !container.contains(e.target)) resetCards();
                    });
                    
                    function resetCards() {
                        cards.forEach((c) => {
                            c.style.filter = '';
                            c.style.opacity = '';
                            c.setAttribute('style', c.getAttribute('style') || ''); 
                            c.style.zIndex = '';
                        });
                        activeCard = null;
                    }
                })();
                


        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex-shrink-0 flex items-center gap-2 text-xl font-medium tracking-tight text-slate-900" href="#">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
                    SprintStudio
                </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div>
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-base font-normal text-white bg-slate-900 border-transparent border rounded-lg py-2 px-4" href="#pricing">Start Membership</a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-24 overflow-hidden pt-32 pb-16 relative">

<div className="absolute inset-0 bg-slate-50/30 pointer-events-none -z-20"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute bottom-20 left-[-100px] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-orange-400/10 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4 relative z-10">

<div className="max-w-4xl text-left relative">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight mb-6 leading-tight">Unlimited Design. <br className="hidden sm:block"/>One Simple Monthly Rate.</h1>
<p className="text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">Get high-quality branding, web, and marketing design delivered in days, not weeks. No contracts. No hiring headaches.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center hover:bg-slate-800 transition-all text-white bg-slate-900 rounded-lg py-3.5 px-8 text-lg font-normal shadow-sm" href="#pricing">
                        Start Your Membership
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-lg font-normal text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm" href="#portfolio">
                        View Portfolio
                    </a>
</div>
<p className="text-sm text-slate-400 font-normal mb-20 flex items-center justify-start gap-1.5">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                    Cancel anytime. 48-hour average turnaround.
                </p>

<div className="absolute top-0 right-[-10%] lg:right-[-20%] xl:right-[-30%] hidden md:block animate-float z-20" style={{-Rot: '-6deg'}}>
<div className="relative bg-[#4878FF] text-white px-5 py-2.5 rounded-full text-lg font-normal shadow-[0_8px_30px_rgba(72,120,255,0.3)] flex items-center gap-2">
                        designer <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
<div className="absolute -bottom-1.5 left-5 w-4 h-4 bg-[#4878FF] rounded-sm transform rotate-45 -z-10"></div>
</div>
</div>
<div className="absolute top-40 right-[10%] lg:right-0 xl:right-[-10%] hidden md:block animate-float z-20" style={{-Rot: '5deg', animationDelay: '1.5s'}}>
<div className="relative bg-[#F47F37] text-white px-5 py-2.5 rounded-full text-lg font-normal shadow-[0_8px_30px_rgba(244,127,55,0.3)] flex items-center gap-2">
                        artist <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
<div className="absolute -bottom-1.5 right-6 w-4 h-4 bg-[#F47F37] rounded-sm transform rotate-45 -z-10"></div>
</div>
</div>
</div>

<div className="md:py-10 w-full pt-8 pb-12 relative">
<div className="max-w-7xl mx-auto relative text-center">

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10" id="card-grid-container">

<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="0" style={{transform: 'rotate(-8deg) translateY(20px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="1" style={{transform: 'rotate(-3deg) translateY(30px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="2" style={{transform: 'rotate(3deg) translateY(10px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative" data-card-index="3" style={{transform: 'rotate(0deg) translateY(-5px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="4" style={{transform: 'rotate(-2deg) translateY(15px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="card-item relative aspect-[3/4] group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" data-card-index="5" style={{transform: 'rotate(6deg) translateY(25px)'}}>
<div className="overflow-hidden hover:ring-white/40 ring-slate-200/50 ring-1 rounded-2xl absolute inset-0 shadow-lg bg-white/50 backdrop-blur-sm">
<img alt="Design mock" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="bg-white py-24 border-t border-slate-100 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-4">Simple. Fast. Scalable.</h2>
<p className="text-xl text-slate-500">A seamless process designed to keep your projects moving without friction.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-base font-medium text-slate-900 mb-6">1</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">Submit Requests</h3>
<p className="text-base text-slate-500 leading-relaxed">Add as many design tasks as you want to your queue.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-base font-medium text-slate-900 mb-6">2</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">We Design</h3>
<p className="text-base text-slate-500 leading-relaxed">Our senior designers get to work immediately.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-base font-medium text-slate-900 mb-6">3</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">You Review &amp; Approve</h3>
<p className="text-base text-slate-500 leading-relaxed">Unlimited revisions until it’s absolutely perfect.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-base font-medium text-white mb-6">4</div>
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">Scale Up or Pause</h3>
<p className="text-base text-slate-500 leading-relaxed">Upgrade, downgrade, or pause anytime.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-32 relative overflow-hidden border-y border-slate-100" id="services">

<div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-slate-200/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50"></div>
<div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-slate-200/50 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center z-10 relative">
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-6">Design for Every Stage of Growth</h2>
<div className="flex flex-wrap justify-center gap-3 mb-8">
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Landing Pages</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Webflow / Framer Design</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">SaaS UI &amp; Dashboards</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Social Media Graphics</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Ad Creatives</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Pitch Decks</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Email Templates</span>
<span className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-base font-medium text-slate-700">Brand Identity Systems</span>
</div>
<p className="text-lg text-slate-500 font-medium">If it can be designed digitally, it’s included.</p>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-6">Why Not Hire In-House?</h2>
<p className="text-xl text-slate-500 mb-8 leading-relaxed">Finding, vetting, and retaining top senior designers is time-consuming and expensive. SprintStudio gives you instant access to a full stack of design skills for a fraction of the cost.</p>
<p className="text-2xl font-normal tracking-tight text-slate-900 py-6 border-l-2 border-slate-900 pl-6 bg-slate-50/50 rounded-r-xl">
                        Save up to 65% compared to full-time hiring.
                    </p>
</div>
<div className="relative">
<div className="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-2"></div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 relative shadow-lg">
<div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wider">Traditional Hiring</p>
<p className="uppercase text-sm font-medium text-slate-900 tracking-wider text-right flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="pen-tool"></i> SprintStudio</p>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start text-base">
<span className="text-slate-500 flex items-center gap-2"><i className="w-5 h-5 text-slate-300" data-lucide="x-circle"></i> $90K+ salary</span>
<span className="font-medium text-slate-900 flex items-center gap-2"><i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Flat monthly fee</span>
</div>
<div className="flex justify-between items-start text-base">
<span className="text-slate-500 flex items-center gap-2"><i className="w-5 h-5 text-slate-300" data-lucide="x-circle"></i> Benefits &amp; onboarding</span>
<span className="font-medium text-slate-900 flex items-center gap-2"><i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Immediate start</span>
</div>
<div className="flex justify-between items-start text-base">
<span className="text-slate-500 flex items-center gap-2"><i className="w-5 h-5 text-slate-300" data-lucide="x-circle"></i> Long hiring cycle</span>
<span className="font-medium text-slate-900 flex items-center gap-2"><i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Multiple skill sets</span>
</div>
<div className="flex justify-between items-start text-base">
<span className="text-slate-500 flex items-center gap-2"><i className="w-5 h-5 text-slate-300" data-lucide="x-circle"></i> Limited skill range</span>
<span className="font-medium text-slate-900 flex items-center gap-2"><i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Pause anytime</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-4">Portfolio Highlights</h2>
<p className="text-xl text-slate-500">A glimpse into the quality of work you can expect.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="SaaS Dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">SaaS Dashboard</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Ecommerce Landing Page" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">Ecommerce Landing Page</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Fintech Rebrand" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">Fintech Rebrand</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Healthcare UI" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">Healthcare UI</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="AI Startup Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">AI Startup Website</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200 relative">
<img alt="Mobile App Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<p className="text-base font-normal text-slate-900">Mobile App Design</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-4">Trusted by Fast-Moving Teams</h2>
<p className="text-xl text-slate-500">Hear from founders and marketing leaders who scaled with us.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-slate-900 mb-6">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">“SprintStudio feels like an in-house team without the overhead. We launched three product pages in one week.”</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-100 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">AL</div>
<div>
<p className="text-base font-normal text-slate-900">Alex L.</p>
<p className="text-sm text-slate-500">Head of Growth, SaaS Startup</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-slate-900 mb-6">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">“The quality of design is consistently top-tier. Being able to pause the subscription when things slow down is a game changer for our runway.”</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-100 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">SM</div>
<div>
<p className="text-base font-normal text-slate-900">Sarah M.</p>
<p className="text-sm text-slate-500">Founder, E-commerce Brand</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-slate-900 mb-6">
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
<i className="w-4 h-4 fill-slate-900 text-slate-900" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-8">“We completely revamped our brand identity and pitch deck in under a month. Fast, professional, and zero hiring friction.”</p>
</div>
<div className="flex items-center gap-3 border-t border-slate-100 pt-6">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">DJ</div>
<div>
<p className="text-base font-normal text-slate-900">David J.</p>
<p className="text-sm text-slate-500">Marketing Director, Fintech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-32 border-t border-slate-200 relative" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-normal text-slate-900 tracking-tight mb-4">Straightforward Pricing</h2>
<p className="text-xl text-slate-500">Pause or cancel anytime. No hidden fees.</p>
</div>
<div className="max-w-5xl mx-auto mb-12">

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">

<div className="md:w-5/12 lg:p-10 border-b md:border-b-0 md:border-r flex flex-col bg-slate-50/50 border-slate-200 p-8 justify-center">
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-6">Membership Benefits</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="text-slate-900 mt-0.5 flex-shrink-0 w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-normal text-slate-600">Unlimited requests &amp; revisions</span>
</li>
<li className="flex items-start gap-3">
<i className="text-slate-900 mt-0.5 flex-shrink-0 w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-normal text-slate-600">Senior designers only</span>
</li>
<li className="flex items-start gap-3">
<i className="text-slate-900 mt-0.5 flex-shrink-0 w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-normal text-slate-600">Pause or cancel anytime</span>
</li>
<li className="flex gap-3 items-start">
<i className="text-slate-900 mt-0.5 flex-shrink-0 w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-normal text-slate-600">Figma source files included</span>
</li>
<li className="flex items-start gap-3">
<i className="text-slate-900 mt-0.5 flex-shrink-0 w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-normal text-slate-600">Easy Slack communication</span>
</li>
</ul>
</div>

<div className="md:w-7/12 p-8 lg:p-10 bg-white flex flex-col justify-center">
<div className="mb-8">
<h3 className="text-xl font-normal text-slate-900 tracking-tight mb-2">Choose your pace</h3>
<p className="text-base text-slate-500">Scale up or down as your needs change.</p>
</div>
<div className="space-y-4">

<div className="border border-slate-200 bg-slate-50/30 rounded-xl p-5 hover:border-slate-300 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="block text-lg font-normal text-slate-900">Starter</span>
<span className="block text-2xl font-normal text-slate-900 tracking-tight">$3,495<span className="text-base text-slate-500 font-normal">/mo</span></span>
</div>
<div className="flex gap-4 text-sm text-slate-500 font-medium">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="layers"></i> One active request</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> 48-hour turnaround</span>
</div>
</div>

<div className="relative z-10">
<div className="bg-violet-50/50 border border-violet-500 rounded-xl p-5 relative shadow-[0_0_20px_rgba(139,92,246,0.15)] ring-1 ring-violet-500 ring-offset-0 cursor-pointer">
<div className="absolute -top-3 right-4 bg-violet-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Most Popular</div>
<div className="flex items-center justify-between mb-2">
<span className="block text-lg font-normal text-slate-900">Growth</span>
<span className="block text-2xl font-normal text-slate-900 tracking-tight">$5,995<span className="text-base text-violet-600/70 font-normal">/mo</span></span>
</div>
<div className="flex gap-4 text-sm text-violet-700/80 font-medium">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="layers"></i> Two active requests</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="zap"></i> Priority delivery</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-10 text-white shadow-xl border border-slate-800">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-normal mb-2 tracking-tight">Scale</h3>
<p className="text-slate-400 text-base max-w-md">For teams that need a dedicated squad, custom workflows, or specialized motion design capabilities.</p>
</div>
<div className="flex flex-col items-start md:items-end gap-3">
<span className="text-2xl font-normal tracking-tight text-white">Custom</span>
<div className="flex gap-3 text-sm text-slate-300 font-medium">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="users"></i> Dedicated team</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="wand-2"></i> UI + motion design</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all text-white bg-slate-900 rounded-lg py-3 px-8 text-lg font-normal shadow-sm" href="#pricing">
                    Start Your Membership
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-8">

<div className="max-w-md">
<div className="flex items-center gap-2 text-xl font-normal tracking-tight text-slate-900 mb-2">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
                        SprintStudio
                    </div>
<p className="text-base text-slate-500 font-normal">Unlimited design for fast-moving teams.</p>
</div>

<div className="flex flex-col md:items-end gap-3">
<a className="text-base font-normal text-slate-900 hover:text-slate-600 transition-colors" href="#">hello@sprintstudio.com</a>
<div className="flex items-center gap-4 text-sm font-medium text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
