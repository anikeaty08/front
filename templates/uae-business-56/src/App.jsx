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
DEFAULT: '#3FA7A5', // The main teal from the text
dark: '#2A7A78',
light: '#E0F2F1',
},
teal: {
900: '#114B4C', // Footer dark
800: '#1B6A6D',
400: '#3FA7A5',
},
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Syne', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        function navigateTo(pageId) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) section.style.display = 'none';
                }, 400); 
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-nav');
                link.classList.remove('text-brand');
                link.classList.add('text-slate-500');
            });
            
            const target = document.getElementById(pageId);
            if (target) {
                target.style.display = 'block';
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
                window.scrollTo(0, 0);
            }

            // Update active state in nav
            const navLinks = document.querySelectorAll(`button[onclick="navigateTo('${pageId}')"]`);
            navLinks.forEach(link => {
                if(link.classList.contains('nav-link')) {
                    link.classList.add('active-nav');
                    link.classList.remove('text-slate-500');
                }
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<button className="text-lg font-semibold tracking-tighter uppercase font-display group text-slate-900" onclick="navigateTo('home')">
                Groundwork<span className="text-brand text-xs align-top ml-1 opacity-100 transition-colors">UAE</span>
</button>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-500">
<button className="hover:text-brand transition-colors nav-link active-nav" onclick="navigateTo('home')">Start</button>
<button className="hover:text-brand transition-colors nav-link" onclick="navigateTo('process')">Process &amp; Structures</button>
<button className="hover:text-brand transition-colors nav-link" onclick="navigateTo('pricing')">Pricing</button>
<button className="hover:text-brand transition-colors nav-link" onclick="navigateTo('contact')">Contact &amp; FAQ</button>
<button className="bg-slate-900 hover:bg-brand text-white px-5 py-2.5 rounded-sm transition-all duration-300 font-semibold shadow-lg shadow-slate-200 hover:shadow-brand/20" onclick="navigateTo('contact')">Cost Calculator</button>
</div>

<button className="md:hidden text-slate-900" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 hidden flex-col items-center justify-center space-y-8 text-2xl font-display uppercase tracking-widest text-slate-900" id="mobile-menu">
<button className="hover:text-brand" onclick="navigateTo('home'); toggleMobileMenu()">Start</button>
<button className="hover:text-brand" onclick="navigateTo('process'); toggleMobileMenu()">Process</button>
<button className="hover:text-brand" onclick="navigateTo('pricing'); toggleMobileMenu()">Pricing</button>
<button className="hover:text-brand" onclick="navigateTo('contact'); toggleMobileMenu()">Contact</button>
<button className="absolute top-8 right-8 text-slate-900" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:x" data-width="32"></span>
</button>
</div>
</nav>

<main className="page-section active min-h-screen bg-white" id="home">

<section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">

<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-brand-light/40 blur-3xl opacity-60"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-50 blur-3xl opacity-60"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center w-full mt-10">
<div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-1.5 rounded-full mb-8 shadow-sm opacity-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
<span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Official Partner: Federal Tax Authority</span>
</div>
<p className="text-slate-900 font-medium mb-4 text-lg md:text-xl opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    From setup to growth,
                </p>
<h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8 text-brand opacity-0 animate-slide-up" style={{animationDelay: '0.3s'}}>
                    We don't just help <br className="hidden md:block"/>
                    start, we help you <span className="text-brand-dark/80">scale.</span>
</h1>
<p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-0 animate-slide-up font-medium" style={{animationDelay: '0.4s'}}>
                    Most UAE Business Setup Agencies Tell You the Cost. <span className="text-brand-dark font-bold">We Tell You What It Actually Costs.</span> Zero hidden fees. Set up in 15-20 days.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{animationDelay: '0.6s'}}>
<button className="bg-brand text-white px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-brand-dark transition-all duration-300 w-full md:w-auto rounded-sm shadow-xl shadow-brand/20" onclick="navigateTo('pricing')">
                        View Cost Breakdown
                    </button>
<button className="border border-slate-200 bg-white text-slate-800 px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-slate-50 hover:border-slate-300 transition-colors duration-300 w-full md:w-auto rounded-sm flex items-center justify-center gap-2" onclick="navigateTo('contact')">
<span>Have a glimpse of our creative side</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>

<div className="grid grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto mt-20 border-t border-slate-100 pt-10 opacity-0 animate-slide-up" style={{animationDelay: '0.8s'}}>
<div>
<h3 className="font-display text-3xl md:text-5xl font-bold text-slate-900">1,600+</h3>
<p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-2 font-semibold">Companies Setup</p>
</div>
<div>
<h3 className="font-display text-3xl md:text-5xl font-bold text-slate-900">98%</h3>
<p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-2 font-semibold">Bank Success</p>
</div>
<div>
<h3 className="font-display text-3xl md:text-5xl font-bold text-slate-900">15 Days</h3>
<p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-2 font-semibold">Avg Turnaround</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-2xl">
<h2 className="font-display text-3xl md:text-4xl uppercase font-bold tracking-tight mb-4 text-slate-900">Confused by your research?</h2>
<p className="text-slate-500 font-medium">You've been researching for weeks. One agency quotes AED 5,000. Another says AED 50,000. Who's lying?</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-red-500" data-icon="lucide:alert-circle" data-width="24"></span>
</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Hidden Fees</h3>
<p className="text-sm text-slate-500 leading-relaxed">Costs appear after you sign: bank fees, office rent, visa deposits. That "cheap" setup balloons quickly.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-red-500" data-icon="lucide:landmark" data-width="24"></span>
</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Bank Rejections</h3>
<p className="text-sm text-slate-500 leading-relaxed">Opening a bank account feels like a black box. Choose the wrong activity or structure, and you get rejected.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-red-500" data-icon="lucide:files" data-width="24"></span>
</div>
<h3 className="text-lg font-bold mb-3 text-slate-900">Compliance Traps</h3>
<p className="text-sm text-slate-500 leading-relaxed">Skip proper tax registration with the FTA? You're non-compliant from day one and facing fines.</p>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-200 text-center">
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8">Official Partnerships Ensuring Compliance</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-50 grayscale">
<div className="text-sm font-display font-bold uppercase tracking-widest border border-slate-200 text-slate-700 px-6 py-3 bg-white">Federal Tax Authority</div>
<div className="text-sm font-display font-bold uppercase tracking-widest border border-slate-200 text-slate-700 px-6 py-3 bg-white">Government of Dubai</div>
<div className="text-sm font-display font-bold uppercase tracking-widest border border-slate-200 text-slate-700 px-6 py-3 bg-white">Ministry of Finance</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section min-h-screen bg-white pt-32 pb-20" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12">

<div className="mb-24">
<h1 className="font-display text-4xl md:text-5xl uppercase font-bold tracking-tighter mb-6 text-brand">Your Setup Journey</h1>
<p className="text-slate-500 mb-16 max-w-2xl text-lg">We don't just sell licenses. We build compliant corporate structures. Here is the 15-20 day roadmap.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-brand/50 via-brand/20 to-transparent"></div>
<div className="relative pt-8 group">
<div className="w-4 h-4 bg-brand rounded-full absolute top-[20px] left-0 md:-top-2 md:left-0 shadow-[0_0_0_4px_rgba(63,167,165,0.2)]"></div>
<span className="text-xs font-mono text-brand font-bold mb-2 block pl-8 md:pl-0">Step 01</span>
<h3 className="text-xl font-display font-bold text-slate-900 mb-3 pl-8 md:pl-0">Structure Consultation</h3>
<p className="text-sm text-slate-500 pl-8 md:pl-0 leading-relaxed">We diagnose your business model. Mainland vs Free Zone? We decide based on your market access needs, not what's easiest to sell.</p>
</div>
<div className="relative pt-8 group">
<div className="w-4 h-4 bg-slate-200 rounded-full absolute top-[20px] left-0 md:-top-2 md:left-0 group-hover:bg-brand transition-colors"></div>
<span className="text-xs font-mono text-slate-400 mb-2 block pl-8 md:pl-0">Step 02</span>
<h3 className="text-xl font-display font-bold text-slate-900 mb-3 pl-8 md:pl-0">Transparent Setup</h3>
<p className="text-sm text-slate-500 pl-8 md:pl-0 leading-relaxed">Days 1-12. License issuance, visa processing, and office agreements. You see every invoice before you commit. Zero surprises.</p>
</div>
<div className="relative pt-8 group">
<div className="w-4 h-4 bg-slate-200 rounded-full absolute top-[20px] left-0 md:-top-2 md:left-0 group-hover:bg-brand transition-colors"></div>
<span className="text-xs font-mono text-slate-400 mb-2 block pl-8 md:pl-0">Step 03</span>
<h3 className="text-xl font-display font-bold text-slate-900 mb-3 pl-8 md:pl-0">Bank &amp; Tax</h3>
<p className="text-sm text-slate-500 pl-8 md:pl-0 leading-relaxed">Days 13-20. We handle bank applications (98% success) and FTA corporate tax registration. You aren't abandoned after the license arrives.</p>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-sm">
<div className="mb-12">
<h2 className="font-display text-3xl uppercase font-bold tracking-tight mb-4 text-slate-900">Mainland, Free Zone, or Offshore?</h2>
<p className="text-slate-500">90% of entrepreneurs we consult initially choose the wrong structure. We fix this first.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="space-y-6">
<div className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-display font-bold text-lg">M</span>
<h3 className="text-xl font-bold text-slate-900">Mainland</h3>
</div>
<div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Best For: Trading, Retail, Local B2B</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> Full UAE Market Access</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> Unlimited Scope</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> Operate in 7 Emirates</li>
<li className="flex items-start gap-3 text-sm text-slate-400"><span className="iconify text-red-400 mt-0.5" data-icon="lucide:x"></span> Higher Setup Cost</li>
</ul>
</div>

<div className="space-y-6 lg:border-l lg:border-slate-200 lg:pl-8">
<div className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-display font-bold text-lg">F</span>
<h3 className="text-xl font-bold text-brand">Free Zone</h3>
</div>
<div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Best For: Digital, Consulting, Intl.</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> 100% Foreign Ownership</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> 0% Corp Tax (Qualifying)</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> Simplified Setup</li>
<li className="flex items-start gap-3 text-sm text-slate-400"><span className="iconify text-red-400 mt-0.5" data-icon="lucide:x"></span> Designated Area Only</li>
</ul>
</div>

<div className="space-y-6 lg:border-l lg:border-slate-200 lg:pl-8">
<div className="flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-display font-bold text-lg">O</span>
<h3 className="text-xl font-bold text-slate-900">Offshore</h3>
</div>
<div className="text-xs font-mono text-slate-400 uppercase tracking-wide">Best For: Holding, Assets</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> Maximum Privacy</li>
<li className="flex items-start gap-3 text-sm text-slate-600"><span className="iconify text-brand mt-0.5" data-icon="lucide:check"></span> No UAE Tax</li>
<li className="flex items-start gap-3 text-sm text-slate-400"><span className="iconify text-red-400 mt-0.5" data-icon="lucide:x"></span> No Business in UAE</li>
<li className="flex items-start gap-3 text-sm text-slate-400"><span className="iconify text-red-400 mt-0.5" data-icon="lucide:x"></span> Difficult Banking</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<main className="page-section min-h-screen bg-white pt-32 pb-20" id="pricing">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h1 className="font-display text-4xl uppercase font-bold tracking-tighter mb-4 text-slate-900">Transparent Pricing</h1>
<p className="text-slate-500">No fine print. No hidden fees. Competitors like Shuraa or Virtuzone charge 20-30% more for less transparency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">

<div className="border border-slate-200 bg-white p-8 relative rounded-sm shadow-sm hover:shadow-lg transition-all duration-300">
<h3 className="font-display text-2xl font-bold uppercase mb-2 text-slate-900">Starter</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm text-slate-500">AED</span>
<span className="text-4xl font-bold text-slate-900 tracking-tighter">14,500</span>
</div>
<p className="text-xs text-slate-500 mb-6">Renewal: AED 8,500/yr</p>
<p className="text-sm text-slate-600 mb-8 h-10">Perfect for freelancers and solo entrepreneurs.</p>
<button className="w-full py-3 border border-slate-300 text-xs font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-colors mb-8 rounded-sm" onclick="navigateTo('contact')">Select Starter</button>
<ul className="space-y-3">
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Free Zone Formation</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> 1 Investor Visa</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Virtual Office</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Basic PRO Services</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Bank Support</li>
</ul>
</div>

<div className="border-2 border-brand bg-white p-8 relative transform md:-translate-y-4 shadow-xl shadow-brand/10 rounded-sm">
<div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-sm">Popular</div>
<h3 className="font-display text-2xl font-bold uppercase mb-2 text-brand">Growth</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm text-brand-dark">AED</span>
<span className="text-4xl font-bold text-slate-900 tracking-tighter">28,500</span>
</div>
<p className="text-xs text-slate-500 mb-6">Renewal: AED 15,000/yr</p>
<p className="text-sm text-slate-600 mb-8 h-10">For small teams and growing businesses requiring flexibility.</p>
<button className="w-full py-3 bg-brand text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors mb-8 rounded-sm shadow-md" onclick="navigateTo('contact')">Select Growth</button>
<ul className="space-y-3">
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Mainland OR Free Zone</li>
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> 2 Investor/Employee Visas</li>
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Virtual Office / Co-working</li>
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> License + Govt Fees Included</li>
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Priority Bank Support (98%)</li>
<li className="text-sm text-slate-700 font-medium flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> VAT &amp; Tax Registration</li>
</ul>
</div>

<div className="border border-slate-200 bg-white p-8 relative rounded-sm shadow-sm hover:shadow-lg transition-all duration-300">
<h3 className="font-display text-2xl font-bold uppercase mb-2 text-slate-900">Premium</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm text-slate-500">AED</span>
<span className="text-4xl font-bold text-slate-900 tracking-tighter">45,000</span>
</div>
<p className="text-xs text-slate-500 mb-6">Renewal: AED 25,000/yr</p>
<p className="text-sm text-slate-600 mb-8 h-10">Established businesses requiring physical presence and scale.</p>
<button className="w-full py-3 border border-slate-300 text-xs font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-colors mb-8 rounded-sm" onclick="navigateTo('contact')">Select Premium</button>
<ul className="space-y-3">
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Full Mainland Setup</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> 3 Visas (Full Processing)</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Physical Office (12 Mos)</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Guaranteed Bank Opening</li>
<li className="text-sm text-slate-600 flex gap-3"><span className="iconify text-brand" data-icon="lucide:check"></span> Tax Optimization Consult</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden">
<div className="bg-slate-50 p-8 md:p-12">
<h3 className="font-display text-xl uppercase font-bold mb-6 text-slate-900">Included (Plain English)</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="text-xs font-mono text-brand uppercase mb-2 font-bold">Legal Setup</h4>
<ul className="space-y-1 text-sm text-slate-600">
<li>• Trade Name Reservation</li>
<li>• MOA &amp; Share Certificates</li>
<li>• Final Trade License</li>
<li>• All Govt Processing Fees</li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono text-brand uppercase mb-2 font-bold">Bank &amp; Tax</h4>
<ul className="space-y-1 text-sm text-slate-600">
<li>• Bank Pre-qualification</li>
<li>• Meeting Coordination</li>
<li>• Corporate Tax Registration</li>
<li>• VAT Registration</li>
</ul>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-12 relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-display text-xl uppercase font-bold mb-6 text-slate-900">What's NOT Included</h3>
<p className="text-sm text-slate-500 mb-4">We believe in radical transparency. These are third-party costs:</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Emirates ID Fees (AED 370/person)</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Medical Fitness Test (AED 300-500)</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Dependent Visa Fees</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Bank Minimum Deposit</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<main className="page-section min-h-screen footer-gradient pt-32 pb-12 text-white" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

<div className="lg:col-span-4 space-y-10">
<div>
<h1 className="font-display text-4xl uppercase font-bold tracking-tighter mb-4 text-white">Contact</h1>
<p className="text-teal-100 font-light text-lg">Zero Risk. Zero Pressure. Zero Obligation. We'll tell you if you're choosing the wrong structure.</p>
</div>
<div className="p-6 bg-white/10 border border-white/20 rounded-sm backdrop-blur-sm">
<h3 className="text-lg font-display font-bold text-white mb-2">Our Guarantee</h3>
<p className="text-sm text-teal-50">We refund our service fee if we can't open your bank account. 98% success rate.</p>
</div>
<div className="space-y-6">
<div>
<h3 className="text-xs font-mono text-teal-200 uppercase tracking-wide mb-2">WhatsApp</h3>
<p className="text-xl text-white font-medium">+971 558004424</p>
<p className="text-xl text-white font-medium">+971 43931364</p>
</div>
<div>
<h3 className="text-xs font-mono text-teal-200 uppercase tracking-wide mb-2">Email</h3>
<a className="text-xl hover:text-teal-200 transition-colors" href="mailto:info@groundwork.ae">info@groundwork.ae</a>
</div>
<div>
<h3 className="text-xs font-mono text-teal-200 uppercase tracking-wide mb-2">Office</h3>
<p className="text-sm text-teal-50 leading-relaxed">
                                613 The Metropolis Tower,<br/>
                                Business Bay, Dubai, UAE
                            </p>
</div>
</div>
</div>

<div className="lg:col-span-8">
<form className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-teal-200">Name</label>
<input className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-teal-200/50 focus:outline-none focus:border-white transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-teal-200">Phone / WhatsApp</label>
<input className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-teal-200/50 focus:outline-none focus:border-white transition-colors" placeholder="+971 ..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-teal-200">Business Activity</label>
<input className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-teal-200/50 focus:outline-none focus:border-white transition-colors" placeholder="e.g. Consulting, E-commerce" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-teal-200">Interested In</label>
<select className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none">
<option className="bg-teal-900 text-white">Free Consultation</option>
<option className="bg-teal-900 text-white">Starter Package</option>
<option className="bg-teal-900 text-white">Growth Package</option>
<option className="bg-teal-900 text-white">Premium Package</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wide text-teal-200">Questions / Details</label>
<textarea className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-teal-200/50 focus:outline-none focus:border-white transition-colors resize-none" placeholder="I'm unsure if I need Mainland or Free Zone..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="bg-white text-teal-900 px-10 py-4 text-sm font-bold uppercase tracking-wide hover:bg-teal-50 transition-colors w-full md:w-auto rounded-sm shadow-lg" type="button">
                                Book Free Consultation
                            </button>
<p className="text-[10px] text-teal-200 mt-4">* No sales pitch. Just structure advice.</p>
</div>
</form>
</div>
</div>

<div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<h2 className="font-display text-2xl uppercase font-bold mb-6 text-white">Business</h2>
<p className="text-teal-100 text-sm mb-4">We are committed to providing the best setup experience in the UAE.</p>
</div>
<div className="flex gap-12">
<div className="space-y-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-teal-200">Services</h4>
<ul className="space-y-2 text-sm text-teal-50">
<li><a className="hover:text-white transition-colors" href="#">Mainland Company</a></li>
<li><a className="hover:text-white transition-colors" href="#">Freezone Company</a></li>
<li><a className="hover:text-white transition-colors" href="#">Offshore Company</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-teal-200">Resources</h4>
<ul className="space-y-2 text-sm text-teal-50">
<li><a className="hover:text-white transition-colors" href="#">Cost Calculator</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-teal-200/60">
<div className="flex flex-col">
<span className="font-display font-bold text-lg text-white mb-2">Groundwork<span className="text-teal-300">UAE</span></span>
<span>© 2026 Groundwork LLC. All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<span>Partner: Federal Tax Authority</span>
<span className="hidden md:inline">|</span>
<span>Government of Dubai</span>
</div>
</div>
</div>
</main>


    </>
  );
}
