import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-6 w-full z-50">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-white" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="font-medium tracking-tight text-xl text-white">TaskAI</span>
</div>
<div className="hidden md:flex items-center p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
<a className="px-5 py-2 rounded-full bg-white text-neutral-950 text-base font-normal transition-colors shadow-sm" href="#home">Home</a>
<a className="px-5 py-2 rounded-full text-neutral-300 hover:text-white text-base font-extralight transition-colors flex items-center gap-1" href="#features">
                    Features 
                    <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="px-5 py-2 rounded-full text-neutral-300 hover:text-white text-base font-extralight transition-colors" href="#updates">Updates</a>
<a className="px-5 py-2 rounded-full text-neutral-300 hover:text-white text-base font-extralight transition-colors" href="#about">About Us</a>
</div>
<div>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-neutral-950 font-normal text-base hover:bg-neutral-200 transition-colors shadow-sm" href="#contact">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-24 border-b border-neutral-900" id="home">

<div className="absolute inset-0 z-0 bg-[#050505]">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent 0%, transparent 2%, rgba(255,255,255,0.08) 2.5%, transparent 3%)', backgroundSize: '5% 100%'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.3)_0%,transparent_70%)] mix-blend-screen"></div>

<div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay"></div>

<div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-neutral-950 to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center mt-12">
<h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-[5.5rem] font-normal tracking-tight text-white mb-8 leading-[1.1]">
                Designed for Teams That<br/>Think Ahead
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-extralight leading-relaxed">
                A modern project management experience built to remove<br className="hidden md:block"/>friction and boost momentum
            </p>
<a className="group inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 rounded-full bg-neutral-950/50 backdrop-blur-md border border-neutral-700 hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300" href="#contact">
<span className="text-base font-normal text-white">Get Started</span>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-950 group-hover:scale-105 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-900 bg-neutral-900/5" id="about">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">About Us.</h2>
</div>
<div className="md:w-2/3">
<p className="text-base md:text-lg text-neutral-400 font-extralight leading-relaxed mb-8">
                    Founded with a singular vision to revolutionize the digital infrastructure in Saudi Arabia, SDF brings world-class software engineering directly to the heart of the Kingdom. We are a boutique collective of passionate technologists, principal architects, and digital strategists relentlessly dedicated to delivering uncompromising quality and scalable innovation.
                </p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800/50">
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-1">50+</div>
<div className="text-sm text-neutral-500 font-extralight">Enterprise Clients</div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-1">100%</div>
<div className="text-sm text-neutral-500 font-extralight">Local Compliance</div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-1">10+</div>
<div className="text-sm text-neutral-500 font-extralight">Years Experience</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-b border-neutral-900" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Our Services</h2>
<p className="text-neutral-400 text-base md:text-lg font-extralight max-w-2xl mx-auto">Enterprise-grade solutions built on modern technology stacks, designed to scale seamlessly with your ambitions.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-purple-500/30 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="server" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-3">Custom ERP</h3>
<p className="text-base text-neutral-400 font-extralight leading-relaxed">
                    Streamline complex operations with bespoke Enterprise Resource Planning systems designed specifically for your workflows, ensuring complete control, transparency, and unbounded scalability.
                </p>
</div>

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-purple-500/30 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-3">AI Solutions</h3>
<p className="text-base text-neutral-400 font-extralight leading-relaxed">
                    Leverage predictive analytics and advanced machine learning models to unlock hidden operational efficiencies, automate complex workflows, and drive precise, data-backed decisions.
                </p>
</div>

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-purple-500/30 transition-colors">
<i className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-3">Cloud Migration</h3>
<p className="text-base text-neutral-400 font-extralight leading-relaxed">
                    Seamlessly transition to modern, resilient cloud environments. We architect for continuous high availability with an uncompromising emphasis on security and local data compliance.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-900 bg-neutral-900/5" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Previous Work</h2>
<p className="text-base md:text-lg text-neutral-400 font-extralight max-w-xl">Transformative digital architectures delivered for industry leaders across the MENA region.</p>
</div>
<a className="inline-flex items-center gap-2 text-base text-purple-400 hover:text-purple-300 transition-colors font-normal" href="#contact">
                    View full portfolio
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl border border-neutral-800 bg-neutral-950 p-2 overflow-hidden hover:border-neutral-700 transition-colors duration-300">
<div className="aspect-video w-full rounded-xl bg-neutral-900 overflow-hidden relative mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<i className="w-12 h-12 text-neutral-700" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 rounded-md bg-neutral-900 text-sm text-neutral-400 border border-neutral-800 font-extralight">FinTech</span>
<span className="px-2 py-1 rounded-md bg-neutral-900 text-sm text-neutral-400 border border-neutral-800 font-extralight">SAMA Compliant</span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2 group-hover:text-purple-400 transition-colors">Next-Gen Payment Gateway</h3>
<p className="text-base text-neutral-400 font-extralight leading-relaxed">Complete architectural overhaul for a leading Saudi financial institution, securely processing over 1M+ transactions daily.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-neutral-800 bg-neutral-950 p-2 overflow-hidden hover:border-neutral-700 transition-colors duration-300">
<div className="aspect-video w-full rounded-xl bg-neutral-900 overflow-hidden relative mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<i className="w-12 h-12 text-neutral-700" data-lucide="box" strokeWidth="1.5"></i>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 rounded-md bg-neutral-900 text-sm text-neutral-400 border border-neutral-800 font-extralight">Logistics</span>
<span className="px-2 py-1 rounded-md bg-neutral-900 text-sm text-neutral-400 border border-neutral-800 font-extralight">AI Integration</span>
</div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2 group-hover:text-purple-400 transition-colors">Automated Fleet Management</h3>
<p className="text-base text-neutral-400 font-extralight leading-relaxed">An AI-powered routing engine that reduced operational costs by 24% for the region's largest delivery network.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-900" id="reviews">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-16 text-center">Trusted by Leaders</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 flex flex-col">
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 font-extralight leading-relaxed mb-8 flex-grow">"Their intimate understanding of the local market combined with absolute global technical standards made them the perfect technology partner for our Vision 2030 initiative."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-sm font-normal">AR</div>
<div>
<div className="text-base font-normal text-white">Ahmed Al-Rashid</div>
<div className="text-sm text-neutral-500 font-extralight">CTO, Enterprise Logistics</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 flex flex-col">
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 font-extralight leading-relaxed mb-8 flex-grow">"Migrating our monolithic systems to a microservices architecture was flawless. SDF delivered on time, under budget, and with exceptional clarity."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-sm font-normal">SM</div>
<div>
<div className="text-base font-normal text-white">Sarah Mansour</div>
<div className="text-sm text-neutral-500 font-extralight">VP of Engineering, FinBank</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 flex flex-col">
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 font-extralight leading-relaxed mb-8 flex-grow">"The custom ERP solution revolutionized our supply chain. Their attention to PDPL compliance gave us the absolute confidence we needed."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 text-sm font-normal">FA</div>
<div>
<div className="text-base font-normal text-white">Faisal Al-Amri</div>
<div className="text-sm text-neutral-500 font-extralight">Operations Director, RetailCo</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-900 bg-neutral-900/5" id="why-ksa">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Engineered for the Kingdom.</h2>
<p className="text-neutral-400 text-base md:text-lg mb-6 font-extralight leading-relaxed">
                    Deeply rooted in Saudi Arabia, we possess an intimate understanding of the unique regulatory landscape and market dynamics. We navigate local data sovereignty laws and compliance frameworks with absolute precision.
                </p>
<p className="text-neutral-400 text-base md:text-lg mb-8 font-extralight leading-relaxed">
                    We don't merely write code; we architect resilient digital ecosystems tailored for the specific nuances of the MENA market, ensuring your technology infrastructure is a catalyst for monumental growth.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-neutral-300 font-extralight">
<i className="w-5 h-5 text-purple-400" data-lucide="shield-check" strokeWidth="1.5"></i>
                        PDPL &amp; Local Data Sovereignty Compliance
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-300 font-extralight">
<i className="w-5 h-5 text-purple-400" data-lucide="building" strokeWidth="1.5"></i>
                        Deep Cultural &amp; Market Alignment
                    </li>
<li className="flex items-center gap-3 text-base text-neutral-300 font-extralight">
<i className="w-5 h-5 text-purple-400" data-lucide="pie-chart" strokeWidth="1.5"></i>
                        Scalable Infrastructure for Rapid Expansion
                    </li>
</ul>
</div>
<div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl border border-neutral-800 bg-white/[0.02] backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_50%)] transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
<div className="flex justify-between items-start w-full relative z-10 border-b border-neutral-800/50 pb-4 mb-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<i className="w-5 h-5 text-neutral-500" data-lucide="code" strokeWidth="1.5"></i>
</div>
<div className="space-y-4 w-full relative z-10 mt-auto">
<div className="h-1.5 w-3/4 bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-neutral-800 rounded-full"></div>
<div className="h-1.5 w-5/6 bg-neutral-800 rounded-full"></div>
<div className="pt-6 space-y-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
<div className="h-1.5 w-1/3 bg-purple-500/30 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse delay-75"></div>
<div className="h-1.5 w-2/5 bg-purple-500/30 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-b border-neutral-900" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Ready to Transform?</h2>
<p className="text-base md:text-lg text-neutral-400 font-extralight mb-10 leading-relaxed">
                    Schedule a high-level consultation with our principal architects to outline your digital roadmap and discover how we can accelerate your enterprise objectives.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-neutral-500 font-normal mb-1">Direct Inquiries</div>
<div className="text-base text-white font-extralight">hello@taskai.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-400" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-neutral-500 font-normal mb-1">Headquarters</div>
<div className="text-base text-white font-extralight">KAFD, Riyadh, Saudi Arabia</div>
</div>
</div>
</div>
</div>
<div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-neutral-800">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm text-neutral-500 font-normal pl-1">First Name</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-600 font-extralight" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm text-neutral-500 font-normal pl-1">Last Name</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-600 font-extralight" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm text-neutral-500 font-normal pl-1">Work Email</label>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-600 font-extralight" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm text-neutral-500 font-normal pl-1">Project Details</label>
<textarea className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-base text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder:text-neutral-600 font-extralight resize-none" placeholder="Briefly describe your requirements..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-neutral-950 font-normal text-base hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] mt-4" type="submit">
                        Send Message
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="py-8 text-center bg-[#050505]">
<div className="flex items-center justify-center gap-2 mb-4">
<i className="w-4 h-4 text-neutral-500" data-lucide="aperture" strokeWidth="1.5"></i>
<span className="font-medium tracking-tight text-base text-neutral-500">TaskAI</span>
</div>
<div className="flex items-center justify-center gap-6 mb-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i></a>
</div>
<p className="text-sm text-neutral-600 font-extralight">
            © 2024 TaskAI Solutions. Designed for the Future.
        </p>
</footer>


    </>
  );
}
