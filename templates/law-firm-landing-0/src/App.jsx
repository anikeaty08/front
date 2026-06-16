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
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
50: '#fbf8f6',
100: '#f5f0eb',
200: '#e8ded4',
300: '#d5c2b0',
400: '#bf9e85',
500: '#ac8160',
600: '#9d6d51',
700: '#835745',
800: '#6d483c',
900: '#583b33',
950: '#2e1e1a',
}
},
backgroundImage: {
'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23e8ded4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
}
}
}
}



        function showPage(pageId) {
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('fade-in'); 
            });

            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                void target.offsetWidth; // Trigger reflow
                target.classList.add('fade-in');
            }
            
            window.scrollTo(0, 0);

            // Update Nav State
            const isDark = pageId === 'attorneys'; 
            // In a real app we might toggle nav text colors based on bg, 
            // but here we keep nav simple
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#" onclick="showPage('home')">
<div className="w-10 h-10 bg-stone-950 text-white flex items-center justify-center rounded-sm group-hover:bg-brand-700 transition-colors duration-300 shadow-sm">
<span className="font-serif text-lg tracking-tighter italic">A</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight uppercase leading-none">AHSLegals</span>
<span className="text-[10px] text-stone-500 uppercase tracking-widest leading-none mt-1 group-hover:text-brand-600 transition-colors">Advocates &amp; Counsel</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<button className="nav-link text-xs font-medium uppercase tracking-widest text-stone-950 hover:text-brand-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all" onclick="showPage('home')">Home</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-brand-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all" onclick="showPage('practice')">Practice</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-brand-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all" onclick="showPage('attorneys')">Team</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-brand-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-brand-700 hover:after:w-full after:transition-all" onclick="showPage('cases')">Cases</button>
</div>

<div className="hidden md:flex">
<button className="bg-stone-950 hover:bg-brand-700 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-sm transition-all shadow-lg shadow-stone-900/10 hover:shadow-brand-700/20 flex items-center gap-2 group" onclick="showPage('contact')">
<span>Consultation</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<button className="md:hidden text-stone-950" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-100 p-6 flex-col gap-6 shadow-xl animate-fade-in-down" id="mobile-menu">
<button className="text-left text-sm font-medium uppercase tracking-widest text-stone-950" onclick="showPage('home'); toggleMobileMenu()">Home</button>
<button className="text-left text-sm font-medium uppercase tracking-widest text-stone-500" onclick="showPage('practice'); toggleMobileMenu()">Practice Areas</button>
<button className="text-left text-sm font-medium uppercase tracking-widest text-stone-500" onclick="showPage('attorneys'); toggleMobileMenu()">Attorneys</button>
<button className="text-left text-sm font-medium uppercase tracking-widest text-stone-500" onclick="showPage('cases'); toggleMobileMenu()">Case Studies</button>
<button className="text-left text-sm font-medium uppercase tracking-widest text-brand-700" onclick="showPage('contact'); toggleMobileMenu()">Contact Us</button>
</div>
</nav>

<main className="flex-grow pt-20" id="main-content">

<section className="page-section fade-in" id="home">

<div className="relative w-full h-[85vh] flex items-center parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&amp'}}>
<div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
<span className="h-px w-12 bg-white/60"></span>
<span className="text-white/80 text-xs font-semibold uppercase tracking-[0.2em]">Est. 2008 — Islamabad</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] mb-8 tracking-tight opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                            Integrity in <br/>
<span className="italic font-light text-brand-200">Every Verdict.</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl leading-relaxed mb-10 opacity-0 animate-[fadeIn_0.5s_ease-out_0.6s_forwards]">
                            Navigating the complexities of Pakistani jurisprudence with precision. From constitutional petitions to corporate mergers, we define the standard of legal excellence.
                        </p>
<div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
<button className="bg-brand-600 text-white border border-brand-600 px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-brand-700 transition-colors shadow-lg shadow-brand-900/20" onclick="showPage('contact')">
                                Request Counsel
                            </button>
<button className="bg-transparent backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors" onclick="showPage('practice')">
                                Explore Expertise
                            </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>

<div className="bg-stone-900 border-b border-stone-800 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-stone-500 uppercase tracking-widest mb-8">Trusted Council For</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-stone-300 font-serif text-xl"><iconify-icon icon="solar:buildings-linear"></iconify-icon> IndusCorp</div>
<div className="flex items-center gap-2 text-stone-300 font-serif text-xl"><iconify-icon icon="solar:globe-linear"></iconify-icon> GlobalTextile</div>
<div className="flex items-center gap-2 text-stone-300 font-serif text-xl"><iconify-icon icon="solar:shield-star-linear"></iconify-icon> SafeBank</div>
<div className="flex items-center gap-2 text-stone-300 font-serif text-xl"><iconify-icon icon="solar:city-linear"></iconify-icon> MetroDev</div>
</div>
</div>
</div>

<div className="bg-white py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="text-4xl md:text-5xl font-serif text-stone-950 mb-8 leading-tight tracking-tight">The intersection of <span className="italic text-brand-700">Law</span> and <span className="italic text-brand-700">Strategy</span>.</h2>
<div className="w-20 h-1 bg-brand-500 mb-8"></div>
<p className="text-stone-500 font-light leading-relaxed mb-6">
                                The legal landscape in Pakistan is evolving. Traditional approaches no longer suffice in a world driven by rapid regulatory changes and global economic integration.
                            </p>
<p className="text-stone-500 font-light leading-relaxed">
                                AHSLegals was founded on a simple premise: to provide world-class legal representation combined with deep local insight. Whether it's a high-stakes Supreme Court appeal or a complex cross-border transaction, our approach is meticulous, ethical, and relentlessly focused on the client's objective.
                            </p>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-stone-900 hover:text-brand-700 transition-colors pb-1 border-b border-stone-200 hover:border-brand-700" href="#" onclick="showPage('attorneys')">
                                    Meet the Partners <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

<div className="p-8 bg-brand-50 rounded-sm border border-brand-100/50 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300">
<iconify-icon className="text-brand-700 text-4xl mb-4" icon="solar:scale-linear"></iconify-icon>
<h3 className="text-lg font-serif text-stone-900 mb-2">Litigation Prowess</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Unmatched track record in Civil, Criminal, and Constitutional courts across Punjab and Sindh.</p>
</div>

<div className="p-8 bg-brand-50 rounded-sm border border-brand-100/50 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 sm:mt-8">
<iconify-icon className="text-brand-700 text-4xl mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="text-lg font-serif text-stone-900 mb-2">Corporate Advisory</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Strategic counsel for mergers, SECP compliance, taxation, and intellectual property.</p>
</div>

<div className="p-8 bg-brand-50 rounded-sm border border-brand-100/50 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300">
<iconify-icon className="text-brand-700 text-4xl mb-4" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-lg font-serif text-stone-900 mb-2">Dispute Resolution</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Certified arbitrators and mediators providing cost-effective alternatives to litigation.</p>
</div>

<div className="p-8 bg-brand-50 rounded-sm border border-brand-100/50 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300 sm:mt-8">
<iconify-icon className="text-brand-700 text-4xl mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-lg font-serif text-stone-900 mb-2">Family &amp; Inheritance</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Sensitive handling of personal matters ensuring privacy and fair distribution under Islamic Law.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative py-40 parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&amp'}}>
<div className="absolute inset-0 bg-stone-950/80"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-brand-500 text-5xl mb-8 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif text-white leading-tight italic tracking-tight">
                        "Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it, wherever found, against the wrong."
                    </h2>
<div className="mt-8 flex justify-center items-center gap-4">
<div className="h-px w-12 bg-brand-500"></div>
<span className="text-stone-300 text-sm font-medium uppercase tracking-widest">Founding Philosophy</span>
<div className="h-px w-12 bg-brand-500"></div>
</div>
</div>
</div>

<div className="bg-brand-50 py-24 border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Areas of Focus</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-950 mt-3 tracking-tight">Comprehensive Legal Solutions</h2>
</div>
<button className="text-sm font-semibold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-brand-700 hover:border-brand-700 transition-colors" onclick="showPage('practice')">
                            View All Services
                        </button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden h-96 rounded-sm cursor-pointer" onclick="showPage('practice')">
<img alt="Corporate" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-1 bg-brand-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<h3 className="text-2xl font-serif text-white mb-2">Corporate Law</h3>
<p className="text-stone-300 text-sm font-light line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Mergers, Acquisitions, SECP Regulations, and Contractual Disputes.</p>
</div>
</div>

<div className="group relative overflow-hidden h-96 rounded-sm cursor-pointer" onclick="showPage('practice')">
<img alt="Litigation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-1 bg-brand-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<h3 className="text-2xl font-serif text-white mb-2">Civil Litigation</h3>
<p className="text-stone-300 text-sm font-light line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">Property disputes, Damages, Recovery suits, and Appeals.</p>
</div>
</div>

<div className="group relative overflow-hidden h-96 rounded-sm cursor-pointer" onclick="showPage('practice')">
<img alt="Tax" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/50 transition-colors"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-1 bg-brand-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
<h3 className="text-2xl font-serif text-white mb-2">Taxation &amp; Customs</h3>
<p className="text-stone-300 text-sm font-light line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">FBR Tribunals, Income Tax References, and Sales Tax Audits.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Our Methodology</span>
<h2 className="text-3xl md:text-5xl font-serif text-stone-950 mt-3 mb-8 tracking-tight">From Consultation to <br/>Resolution.</h2>
<p className="text-stone-500 font-light mb-10 leading-relaxed">
                                We believe in transparency and strategy. Every case begins with a thorough analysis of the facts and applicable law, ensuring no surprises in the courtroom.
                            </p>
<div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-stone-200">

<div className="relative pl-12">
<div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-stone-100 border border-stone-200 text-brand-700 flex items-center justify-center text-xs font-bold font-serif z-10">1</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Case Assessment</h4>
<p className="text-sm text-stone-500">Initial review of documents and legal standing to determine viability.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-stone-100 border border-stone-200 text-brand-700 flex items-center justify-center text-xs font-bold font-serif z-10">2</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Strategic Planning</h4>
<p className="text-sm text-stone-500">Formulating a bespoke legal strategy tailored to specific outcomes.</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-stone-100 border border-stone-200 text-brand-700 flex items-center justify-center text-xs font-bold font-serif z-10">3</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Representation</h4>
<p className="text-sm text-stone-500">Aggressive advocacy in court or skilled negotiation in boardrooms.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[500px] bg-stone-100 rounded-sm overflow-hidden">

<img alt="Office" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl max-w-xs border-l-4 border-brand-600">
<div className="text-4xl font-serif text-stone-900 mb-1">98%</div>
<div className="text-xs text-stone-500 uppercase tracking-widest">Client Retention Rate</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-950 py-24 relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ac8160\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Ready to secure your legal standing?</h2>
<p className="text-stone-400 font-light mb-10 max-w-xl mx-auto">
                        Schedule a confidential consultation with our senior counsel. We review cases within 24 hours.
                    </p>
<button className="bg-white text-stone-950 px-10 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-brand-50 transition-colors" onclick="showPage('contact')">
                        Book Appointment
                    </button>
</div>
</div>
</section>

<section className="page-section hidden fade-in bg-white min-h-screen" id="practice">
<div className="bg-brand-50/50 py-24 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-6xl font-serif text-stone-950 mb-6 tracking-tight">Our Expertise</h1>
<p className="text-stone-500 max-w-2xl font-light text-lg">Comprehensive legal solutions tailored for individuals and corporations under Pakistani Jurisprudence.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Corporate &amp; Commercial</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Company registration (SECP), mergers &amp; acquisitions, contract drafting, and dispute resolution for domestic and international businesses.
                        </p>
</div>

<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:judge-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Civil Litigation</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Representation in Civil Courts, High Courts, and Supreme Court for property disputes, damages, and specific performance suits.
                        </p>
</div>

<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Family Law</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Expert handling of Khula, Divorce, Child Custody (Guardian Courts), Maintenance, and Inheritance matters under Islamic Law.
                        </p>
</div>

<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Taxation &amp; Customs</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Representation before FBR Tribunals and High Courts regarding Income Tax, Sales Tax, Customs duties, and audits.
                        </p>
</div>

<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:siren-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Criminal Defense</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Bail matters, trials, and appeals. Expertise in NAB cases, FIA Cybercrime, and White Collar crimes.
                        </p>
</div>

<div className="group p-8 rounded-sm border border-stone-100 hover:border-brand-200 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-sm bg-stone-100 text-stone-900 group-hover:bg-brand-700 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Real Estate &amp; Property</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                            Drafting sale deeds, lease agreements, title verification, stay orders, and illegal dispossession cases.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="attorneys">
<div className="relative bg-stone-950 py-32 parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&amp'}}>
<div className="absolute inset-0 bg-stone-950/80"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">The Legal Team</h1>
<p className="text-stone-400 max-w-2xl mx-auto font-light text-lg">
                        Distinguished advocates of the Supreme Court and High Courts of Pakistan.
                    </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-24 bg-white">
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/5] bg-stone-200 rounded-sm mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-stone-300"></div> 
<img alt="Lawyer" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1">
<span className="text-stone-900 text-xs font-bold uppercase tracking-widest">Founding Partner</span>
</div>
</div>
<h3 className="text-2xl font-serif text-stone-900">Ahmed H. Shah</h3>
<p className="text-brand-700 text-xs font-semibold uppercase tracking-wide mt-1 mb-4">Advocate Supreme Court</p>
<p className="text-sm text-stone-500 font-light mb-6 border-l border-stone-200 pl-4">
                            25+ years in Constitutional and Criminal Law. Former Deputy Attorney General.
                        </p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-stone-200 rounded-sm mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-stone-300"></div>
<img alt="Lawyer" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1">
<span className="text-stone-900 text-xs font-bold uppercase tracking-widest">Partner</span>
</div>
</div>
<h3 className="text-2xl font-serif text-stone-900">Fatima Z. Khan</h3>
<p className="text-brand-700 text-xs font-semibold uppercase tracking-wide mt-1 mb-4">Advocate High Court</p>
<p className="text-sm text-stone-500 font-light mb-6 border-l border-stone-200 pl-4">
                            Specializes in Corporate Law, Banking, and Intellectual Property Rights. LLM from UK.
                        </p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-stone-200 rounded-sm mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-stone-300"></div>
<img alt="Lawyer" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1">
<span className="text-stone-900 text-xs font-bold uppercase tracking-widest">Associate</span>
</div>
</div>
<h3 className="text-2xl font-serif text-stone-900">Bilal R. Malik</h3>
<p className="text-brand-700 text-xs font-semibold uppercase tracking-wide mt-1 mb-4">Advocate High Court</p>
<p className="text-sm text-stone-500 font-light mb-6 border-l border-stone-200 pl-4">
                            Focuses on Civil Litigation, Rent Laws, and Family disputes across Punjab.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in bg-white min-h-screen" id="cases">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-stone-200 pb-8">
<div>
<span className="text-brand-700 text-xs font-bold uppercase tracking-widest">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-950 mt-3 mb-4 tracking-tight">Recent Case Studies</h2>
</div>
</div>
<div className="space-y-6">

<div className="group border border-stone-200 p-8 hover:border-brand-300 transition-colors cursor-pointer bg-white hover:shadow-xl hover:shadow-stone-200/50 rounded-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="md:w-1/4">
<span className="px-2 py-1 bg-stone-100 text-xs font-medium text-stone-600 uppercase tracking-widest rounded-sm">Supreme Court</span>
<div className="text-sm text-brand-700 mt-3 font-semibold">Constitutional Law</div>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-brand-800 transition-colors">Landmark Judgment on Property Rights</h3>
<p className="text-stone-500 font-light leading-relaxed">Successfully represented a consortium of developers in a high-profile case regarding land acquisition regulations in Islamabad Zone IV. The judgment established a new precedent for fair compensation mechanisms under the Land Acquisition Act.</p>
</div>
<div className="md:w-1/4 flex justify-end items-center">
<span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-brand-700 mr-2">Read Case</span>
<iconify-icon className="text-stone-400 group-hover:text-brand-700 transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group border border-stone-200 p-8 hover:border-brand-300 transition-colors cursor-pointer bg-white hover:shadow-xl hover:shadow-stone-200/50 rounded-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="md:w-1/4">
<span className="px-2 py-1 bg-stone-100 text-xs font-medium text-stone-600 uppercase tracking-widest rounded-sm">Corporate</span>
<div className="text-sm text-brand-700 mt-3 font-semibold">Mergers &amp; Acquisitions</div>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-brand-800 transition-colors">Textile Industry Merger ($50M)</h3>
<p className="text-stone-500 font-light leading-relaxed">Lead advisory counsel for a merger between two leading textile exporters in Faisalabad. Scope included comprehensive due diligence, Competition Commission of Pakistan (CCP) clearance, and SECP regulatory compliance.</p>
</div>
<div className="md:w-1/4 flex justify-end items-center">
<span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-brand-700 mr-2">Read Case</span>
<iconify-icon className="text-stone-400 group-hover:text-brand-700 transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group border border-stone-200 p-8 hover:border-brand-300 transition-colors cursor-pointer bg-white hover:shadow-xl hover:shadow-stone-200/50 rounded-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="md:w-1/4">
<span className="px-2 py-1 bg-stone-100 text-xs font-medium text-stone-600 uppercase tracking-widest rounded-sm">High Court</span>
<div className="text-sm text-brand-700 mt-3 font-semibold">Taxation</div>
</div>
<div className="md:w-1/2">
<h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-brand-800 transition-colors">FBR Audit Defense</h3>
<p className="text-stone-500 font-light leading-relaxed">Represented a multinational FMCG company against an arbitrary tax demand of PKR 200 Million. Secured a stay order initially and achieved a favorable final ruling by proving calculation errors in the audit report.</p>
</div>
<div className="md:w-1/4 flex justify-end items-center">
<span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-brand-700 mr-2">Read Case</span>
<iconify-icon className="text-stone-400 group-hover:text-brand-700 transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="contact">
<div className="grid md:grid-cols-2 min-h-screen">
<div className="bg-stone-950 text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 left-0 p-12 opacity-10">
<iconify-icon icon="solar:plain-linear" width="200"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight relative z-10">Let's discuss your case.</h2>
<p className="text-stone-400 mb-16 font-light max-w-md relative z-10 leading-relaxed">
                        Our team is available for consultations in Islamabad, Lahore, and Karachi. All communications are strictly confidential.
                    </p>
<div className="space-y-10 relative z-10">
<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-brand-500 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-brand-500 uppercase tracking-widest mb-2 font-bold">Islamabad (Head Office)</div>
<p className="text-sm text-stone-300 font-light">Office 204, Beverly Centre,<br/>Blue Area, Islamabad</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-brand-500 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-brand-500 uppercase tracking-widest mb-2 font-bold">Contact</div>
<p className="text-sm text-stone-300 font-light">+92 51 222 3333</p>
<p className="text-sm text-stone-300 font-light">consult@ahslegals.pk</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-12 md:p-24 flex flex-col justify-center">
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase text-stone-500 tracking-widest">First Name</label>
<input className="custom-input w-full bg-transparent border-b border-stone-200 p-3 text-sm text-stone-900 transition-all placeholder:text-stone-300" placeholder="Ali" type="text"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase text-stone-500 tracking-widest">Last Name</label>
<input className="custom-input w-full bg-transparent border-b border-stone-200 p-3 text-sm text-stone-900 transition-all placeholder:text-stone-300" placeholder="Khan" type="text"/>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase text-stone-500 tracking-widest">Email Address</label>
<input className="custom-input w-full bg-transparent border-b border-stone-200 p-3 text-sm text-stone-900 transition-all placeholder:text-stone-300" placeholder="ali@example.com" type="email"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase text-stone-500 tracking-widest">Case Type</label>
<div className="relative">
<select className="custom-input w-full bg-transparent border-b border-stone-200 p-3 text-sm text-stone-900 appearance-none cursor-pointer rounded-none">
<option>Corporate Law</option>
<option>Civil Litigation</option>
<option>Criminal Defense</option>
<option>Family Law</option>
<option>Property/Real Estate</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase text-stone-500 tracking-widest">Message</label>
<textarea className="custom-input w-full bg-transparent border-b border-stone-200 p-3 text-sm text-stone-900 transition-all placeholder:text-stone-300 resize-none" placeholder="Briefly describe your legal matter..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold uppercase tracking-widest py-4 rounded-sm text-xs transition-colors shadow-xl shadow-brand-700/20" type="button">
                                Submit Inquiry
                            </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-8" href="#">
<div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center rounded-sm text-sm font-serif italic">A</div>
<span className="font-bold text-stone-900 tracking-tight uppercase">AHSLegals</span>
</a>
<p className="text-xs text-stone-500 leading-relaxed mb-8 pr-4">
                        A premier law firm committed to providing exceptional legal representation across Pakistan. Justice, Integrity, Excellence.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 transition-all" href="#"><iconify-icon icon="solar:brand-facebook-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-6">Practice Areas</h4>
<ul className="space-y-4 text-xs text-stone-500 font-medium">
<li><a className="hover:text-brand-700 transition-colors" href="#">Corporate &amp; Commercial</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Civil Litigation</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Criminal Defense</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Family Law</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Taxation</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-6">Firm</h4>
<ul className="space-y-4 text-xs text-stone-500 font-medium">
<li><a className="hover:text-brand-700 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Attorneys</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-700 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-6">Locations</h4>
<ul className="space-y-4 text-xs text-stone-500 font-medium">
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5 text-brand-600" icon="solar:map-point-linear"></iconify-icon>
<span>Blue Area, Islamabad</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5 text-brand-600" icon="solar:map-point-linear"></iconify-icon>
<span>Gulberg III, Lahore</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5 text-brand-600" icon="solar:map-point-linear"></iconify-icon>
<span>Clifton, Karachi</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400 uppercase tracking-wider">© 2024 AHSLegals. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-stone-400 uppercase tracking-wider">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
