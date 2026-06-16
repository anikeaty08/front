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
display: ['Inter Tight', 'sans-serif'],
},
colors: {
navy: '#0A1F44',
financeBlue: '#0047AB',
teal: '#19B6A8',
slate: '#2C2C2C',
softGray: '#F5F7FA',
borderGray: '#CCD1D8',
},
letterSpacing: {
tightest: '-0.04em',
},
boxShadow: {
'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
'hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0.1, 0.2, 1) forwards',
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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-display font-bold text-2xl tracking-tighter text-navy flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-navy to-teal rounded-lg"></div>
                CAPITAL C GRP
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate/80">
<a className="hover:text-teal transition-colors" href="#">Products</a>
<a className="hover:text-teal transition-colors" href="#">How it Works</a>
<a className="hover:text-teal transition-colors" href="#">Industries</a>
<a className="px-5 py-2.5 rounded-[10px] bg-navy text-white hover:bg-financeBlue transition-colors" href="#">Sign In</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 animate-fade-in-up">
<h1 className="font-display font-semibold text-5xl lg:text-7xl leading-[1.1] tracking-tighter text-navy mb-6">
                    Fast, Secure Funding Powered by Modern Fintech Intelligence
                </h1>
<p className="text-lg lg:text-xl text-slate/80 leading-relaxed mb-10 max-w-lg font-normal">
                    Capital C GRP helps businesses access transparent, reliable funding through a secure, automated decision process—powered by Ocrolus document verification.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<button className="bg-teal hover:bg-[#159A8E] text-white px-8 py-4 rounded-[10px] font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-teal/20">
                        Start Your Application
                    </button>
<button className="bg-transparent border border-navy text-navy hover:bg-navy/5 px-8 py-4 rounded-[10px] font-medium transition-all">
                        How Funding Works
                    </button>
</div>

<div className="flex flex-wrap gap-6 text-sm text-slate/70 font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-teal" data-lucide="shield-check"></i>
<span>Secure intake</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-teal" data-lucide="zap"></i>
<span>Fast pre-approval</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-teal" data-lucide="briefcase"></i>
<span>Multi-industry coverage</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<div className="absolute -right-4 top-4 w-full h-full bg-teal/5 rounded-2xl rotate-3 scale-95 blur-sm -z-10"></div>

<div className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative group">

<div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Fintech Dashboard Analytics" className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-20">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-navy uppercase tracking-wide">Approval Status</span>
<span className="flex items-center gap-1 text-xs font-bold text-teal">
<i className="w-3 h-3" data-lucide="check-circle-2"></i> Verified
                            </span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-teal w-full h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate/50 mb-8 tracking-wide">Trusted by growing businesses across the globe</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">

<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 bg-slate rounded-sm"></div>NEXUS</div>
<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 border border-slate rounded-full"></div>VENTURE</div>
<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 bg-slate rotate-45"></div>STRATA</div>
<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 bg-slate rounded-full"></div>ALTA</div>
<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 border-b-2 border-slate"></div>HORIZON</div>
<div className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest"><div className="w-3 h-3 bg-slate/50"></div>QUARTZ</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-softGray/50 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-b from-teal/5 to-transparent rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-12 rounded-xl border border-gray-100 shadow-soft hover-lift group">
<div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="font-display font-semibold text-2xl tracking-tight text-navy mb-4">Speed &amp; Efficiency</h3>
<p className="text-slate/70 leading-relaxed">Your documents are processed through automated verification for rapid pre-approval.</p>
</div>

<div className="bg-white p-12 rounded-xl border border-gray-100 shadow-soft hover-lift group">
<div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="font-display font-semibold text-2xl tracking-tight text-navy mb-4">Multi-Industry Support</h3>
<p className="text-slate/70 leading-relaxed">Our funding solutions adapt to the real-world needs of retail, e-commerce, construction, and more.</p>
</div>

<div className="bg-white p-12 rounded-xl border border-gray-100 shadow-soft hover-lift group">
<div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-8 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="lock"></i>
</div>
<h3 className="font-display font-semibold text-2xl tracking-tight text-navy mb-4">Financial-Grade Security</h3>
<p className="text-slate/70 leading-relaxed">Bank-level encryption and secure digital workflows keep your information protected.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-display font-semibold text-4xl tracking-tighter text-navy mb-4">Simple, Transparent Funding</h2>
<p className="text-lg text-slate/70">From application to approval in four streamlined steps.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-5 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold text-lg mb-6 shadow-lg shadow-navy/20">1</div>
<h3 className="font-display font-semibold text-xl text-navy mb-3">Apply Online</h3>
<p className="text-sm text-slate/70 leading-relaxed">Submit basic business details to get the process started.</p>
</div>

<div className="relative bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-display font-semibold text-lg mb-6 shadow-lg shadow-teal/20">2</div>
<h3 className="font-display font-semibold text-xl text-navy mb-3">Upload Documents</h3>
<p className="text-sm text-slate/70 leading-relaxed">Securely upload files through our Ocrolus-powered intake.</p>
</div>

<div className="relative bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-display font-semibold text-lg mb-6 shadow-lg shadow-teal/20">3</div>
<h3 className="font-display font-semibold text-xl text-navy mb-3">Insights</h3>
<p className="text-sm text-slate/70 leading-relaxed">Automated analysis delivers fast clarity on your approval status.</p>
</div>

<div className="relative bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-display font-semibold text-lg mb-6 shadow-lg shadow-teal/20">4</div>
<h3 className="font-display font-semibold text-xl text-navy mb-3">Funding Options</h3>
<p className="text-sm text-slate/70 leading-relaxed">Explore products matched specifically to your business needs.</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-teal hover:bg-[#159A8E] text-white px-8 py-4 rounded-[10px] font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-teal/20">
                        Start Your Application
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-softGray">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="landmark"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Term Loans</h3>
<p className="text-sm text-slate/70 leading-relaxed">Predictable, fixed-rate financing built for major business investments.</p>
</div>

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="wallet"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Working Capital</h3>
<p className="text-sm text-slate/70 leading-relaxed">Short-term capital for operational stability and unexpected expenses.</p>
</div>

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="credit-card"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Lines of Credit</h3>
<p className="text-sm text-slate/70 leading-relaxed">Draw funds as needed with flexible, recurring access.</p>
</div>

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="truck"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Equipment Financing</h3>
<p className="text-sm text-slate/70 leading-relaxed">Acquire or upgrade essential equipment without large upfront costs.</p>
</div>

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="arrow-right-left"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Bridge Funding</h3>
<p className="text-sm text-slate/70 leading-relaxed">Short-term capital to support transitions or project phases.</p>
</div>

<div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-teal/30 transition-colors shadow-sm group">
<i className="w-8 h-8 text-navy mb-6 stroke-[1.5]" data-lucide="trending-up"></i>
<h3 className="font-display font-semibold text-xl text-navy mb-2">Expansion Funding</h3>
<p className="text-sm text-slate/70 leading-relaxed">Scale locations, staff, or production capacity with growth-focused financing.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-teal font-medium hover:text-navy transition-colors" href="#">
                    View All Products <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="font-display font-semibold text-4xl tracking-tighter text-navy mb-4">Industries We Support</h2>
<p className="text-lg text-slate/70">We understand the unique cash flow cycles of diverse sectors.</p>
</div>
<a className="inline-flex items-center gap-2 text-teal font-medium hover:text-navy transition-colors mb-2" href="#">
                    Explore All Industries <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="Retail Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">Retail &amp; Hospitality</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Inventory and renovation financing.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="E-Commerce Warehouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">E-Commerce</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Scaling digital ad spend and stock.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="Professional Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">Professional Services</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Payroll and operational expansion.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="Medical Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">Healthcare</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Equipment upgrades and practice acquisition.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="Construction Site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">Construction &amp; Trades</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Project materials and bridge funding.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden h-64 hover-lift cursor-pointer">
<div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors z-10"></div>
<img alt="Greenhouse/Agriculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 z-20">
<span className="text-white font-display font-semibold text-xl tracking-tight">Cannabis &amp; Agtech</span>
<p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Specialized compliance and growth capital.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-softGray overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="bg-white p-12 rounded-xl shadow-soft relative">
<div className="absolute -top-6 -left-4 font-serif text-8xl text-teal/20">“</div>
<blockquote className="relative z-10">
<p className="text-xl lg:text-2xl font-medium text-navy leading-relaxed mb-8">
                            Capital C GRP delivered funding options faster than any lender we’ve worked with. The process was straightforward, secure, and transparent.
                        </p>
<footer className="flex items-center gap-4">
<img alt="Sarah Jenkins" className="w-12 h-12 rounded-full object-cover shadow-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<div className="font-semibold text-navy">Sarah Jenkins</div>
<div className="text-sm text-slate/50">CFO, Retail Solutions Inc.</div>
</div>
</footer>
</blockquote>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="text-center sm:text-left">
<div className="text-4xl font-display font-bold text-teal mb-2">12+</div>
<div className="text-sm text-slate/60 font-medium">Industries Supported</div>
</div>
<div className="text-center sm:text-left">
<div className="text-4xl font-display font-bold text-teal mb-2">92%</div>
<div className="text-sm text-slate/60 font-medium">Applicant Satisfaction</div>
</div>
<div className="text-center sm:text-left">
<div className="text-4xl font-display font-bold text-teal mb-2">10k+</div>
<div className="text-sm text-slate/60 font-medium">Documents Verified</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-semibold text-3xl tracking-tight text-navy mb-6">Who We Are</h2>
<p className="text-lg text-slate/70 leading-relaxed mb-8">
                        Capital C GRP blends financial expertise with modern fintech automation to deliver transparent, secure, and fast funding experiences. We are building the future of commercial lending infrastructure.
                    </p>
<a className="inline-flex items-center gap-2 text-teal font-medium hover:text-navy transition-colors" href="#">
                        Learn More About Us <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
<img alt="Modern Headquarters" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<div className="font-semibold text-lg">Global Headquarters</div>
<div className="text-sm opacity-80">New York, NY</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-navy relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<img alt="Background Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
<h2 className="font-display font-semibold text-4xl lg:text-5xl tracking-tighter mb-6">
                Ready to Move Your Business Forward?
            </h2>
<p className="text-lg lg:text-xl text-white/80 mb-10 font-normal">
                Start your application today and get fast, reliable pre-approval insights.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-teal hover:bg-[#159A8E] text-white px-8 py-4 rounded-[10px] font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20">
                    Start Your Application
                </button>
<button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-[10px] font-medium transition-all">
                    Speak to an Advisor
                </button>
</div>
</div>
</section>

<footer className="bg-navy border-t border-white/10 py-12 text-white/60 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-display font-bold text-xl text-white tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-teal rounded-md"></div>
                CAPITAL C GRP
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div>© 2023 Capital C GRP. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
