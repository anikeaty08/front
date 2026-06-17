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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="text-2xl font-manrope font-bold tracking-tighter text-white">
                    DC<span className="text-lime-accent">technolabs</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-lime-accent transition-colors" href="#">About</a>
<a className="text-sm font-medium text-gray-300 hover:text-lime-accent transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-gray-300 hover:text-lime-accent transition-colors" href="#">Technologies</a>
<a className="text-sm font-medium text-gray-300 hover:text-lime-accent transition-colors" href="#">Industries</a>
<a className="text-sm font-medium text-gray-300 hover:text-lime-accent transition-colors" href="#">Blog</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-lime-accent/30 text-lime-accent text-sm font-medium hover:bg-lime-accent hover:text-black transition-all duration-300 group" href="#">
                    Get Proposal
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="lg:hidden text-white text-2xl p-2">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 hero-glow border-b border-white/5">
<div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">

<div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Top Rated Agency</span>
</div>

<h1 className="font-manrope font-semibold text-4xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                Ready to get started? Take your business to the next level with <span className="text-lime-accent">DCtechnolabs</span>.
            </h1>

<p className="font-inter font-light text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                We craft digital experiences that drive growth. From strategy to execution, we are your partners in digital transformation.
            </p>

<div className="w-full max-w-xl bg-[#121212] p-2 pl-6 rounded-full border border-white/10 focus-within:border-lime-accent/50 transition-colors flex flex-col sm:flex-row items-center gap-2 shadow-2xl shadow-black/50">
<input className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none h-10 font-light" placeholder="Enter your website URL" type="text"/>
<button className="w-full sm:w-auto px-8 py-3 bg-lime-accent hover:bg-[#bce61b] text-black font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                    Send me a proposal
                    <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20 pt-10 border-t border-white/5 w-full max-w-4xl">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-3xl md:text-4xl font-manrope font-bold text-white mb-1">10+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Years Experience</span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-3xl md:text-4xl font-manrope font-bold text-white mb-1">500+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Projects Done</span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-3xl md:text-4xl font-manrope font-bold text-white mb-1">100%</span>
<span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Client Satisfaction</span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-3xl md:text-4xl font-manrope font-bold text-white mb-1">50+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Expert Team</span>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-white/5 bg-[#080808] overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<p className="text-center text-sm text-gray-500 mb-8 font-light">Trusted by innovative companies worldwide</p>
<div className="flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 gap-8 flex-wrap lg:flex-nowrap justify-center">

<span className="text-xl font-bold font-manrope text-white">Google</span>
<span className="text-xl font-bold font-manrope text-white">Microsoft</span>
<span className="text-xl font-bold font-manrope text-white">Shopify</span>
<span className="text-xl font-bold font-manrope text-white">Amazon</span>
<span className="text-xl font-bold font-manrope text-white">Slack</span>
<span className="text-xl font-bold font-manrope text-white">Hubspot</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]">
<div className="max-w-[1200px] mx-auto">
<div className="mb-16">
<span className="text-lime-accent text-sm font-medium tracking-wide uppercase mb-3 block">Our Capabilities</span>
<h2 className="text-3xl md:text-5xl font-manrope font-semibold text-white leading-tight">
                    Solutions tailored for <br/>
<span className="text-gray-500">business growth</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-[#0F0F0F] rounded-2xl p-8 border border-white/5 hover:border-lime-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(204,243,35,0.1)]">
<div className="absolute top-8 right-8 text-lime-accent opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-6 pr-12 group-hover:text-lime-accent transition-colors">My website isn't getting enough traffic</h3>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
<p className="text-gray-400 font-light leading-relaxed mb-8">
                        Without consistent site traffic, you're missing out on valuable visitors, leads, and revenue. Our custom SEO strategies are designed to boost your visibility.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-lime-accent transition-colors" href="#">
                        Explore SEO Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#0F0F0F] rounded-2xl p-8 border border-white/5 hover:border-lime-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(204,243,35,0.1)]">
<div className="absolute top-8 right-8 text-lime-accent opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:dollar-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-6 pr-12 group-hover:text-lime-accent transition-colors">My CPL from digital ad campaigns is too high</h3>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
<p className="text-gray-400 font-light leading-relaxed mb-8">
                        Wasting budget on ineffective ads? Our PPC experts optimize your bidding strategy and targeting to maximize ROI and lower costs.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-lime-accent transition-colors" href="#">
                        Explore PPC Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#0F0F0F] rounded-2xl p-8 border border-white/5 hover:border-lime-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(204,243,35,0.1)]">
<div className="absolute top-8 right-8 text-lime-accent opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:magnet-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-6 pr-12 group-hover:text-lime-accent transition-colors">My website isn't generating enough leads</h3>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
<p className="text-gray-400 font-light leading-relaxed mb-8">
                        Struggling to fill your pipeline? We implement conversion rate optimization and targeted lead generation campaigns to bring in qualified prospects.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-lime-accent transition-colors" href="#">
                        Explore Lead Gen Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#0F0F0F] rounded-2xl p-8 border border-white/5 hover:border-lime-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(204,243,35,0.1)]">
<div className="absolute top-8 right-8 text-lime-accent opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:link-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-manrope font-medium text-white mb-6 pr-12 group-hover:text-lime-accent transition-colors">My marketing and sales data is disconnected</h3>
<div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
<p className="text-gray-400 font-light leading-relaxed mb-8">
                        Unify your data silos. We integrate CRM and marketing platforms to provide a single source of truth for your customer journey.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-lime-accent transition-colors" href="#">
                        Explore Integration Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808] border-t border-white/5">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-manrope font-semibold text-white mb-2">Industries We Excel In</h2>
<p className="text-gray-400 font-light">Specialized solutions for diverse market sectors.</p>
</div>
<a className="text-sm text-lime-accent hover:text-white transition-colors flex items-center gap-2" href="#">
                    View all industries
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Healthcare</span>
</div>
<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:book-2-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Education</span>
</div>
<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Fintech</span>
</div>
<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:city-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Real Estate</span>
</div>
<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:shop-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Retail</span>
</div>
<div className="bg-[#121212] aspect-square rounded-xl p-5 flex flex-col justify-between border border-white/5 hover:border-lime-accent/30 hover:bg-[#181818] transition-all group cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 group-hover:text-lime-accent transition-colors" icon="solar:box-linear"></iconify-icon>
<span className="text-sm font-medium text-white">Logistics</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]">
<div className="max-w-[1200px] mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-manrope font-semibold text-white mb-4">Core Technologies</h2>
<p className="text-gray-400 font-light max-w-2xl mx-auto">We leverage the latest frameworks and platforms to build robust, scalable solutions.</p>
</div>
<div className="max-w-[1000px] mx-auto">
<div className="flex flex-wrap justify-center gap-4 md:gap-6">
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> React JS
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> Node JS
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> Python
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> Laravel
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> WordPress
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> Shopify
                </div>
<div className="px-6 py-3 rounded-full border border-white/10 bg-[#121212] text-gray-300 font-medium text-sm flex items-center gap-2 hover:border-lime-accent/50 hover:text-white transition-all">
<iconify-icon className="text-lime-accent" icon="solar:code-circle-linear"></iconify-icon> AWS
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
<div className="w-[500px] h-[300px] bg-lime-accent/5 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto bg-[#101010] rounded-[30px] p-8 md:p-16 text-center border border-white/5 relative z-10">
<h2 className="text-3xl md:text-5xl font-manrope font-semibold text-white mb-6">Let's build something amazing</h2>
<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Ready to transform your digital presence? Schedule a consultation with our experts today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-lime-accent hover:bg-[#bce61b] text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2" href="#">
                    Start a Project
                    <iconify-icon className="text-lg" icon="solar:rocket-linear"></iconify-icon>
</a>
<a className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2" href="#">
                    Contact Sales
                    <iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#030303] border-t border-white/5 pt-20 pb-10 px-6">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="text-2xl font-manrope font-bold tracking-tighter text-white">
                        DC<span className="text-lime-accent">technolabs</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed font-light">
                        DC Technolabs is a premier digital agency specializing in web development, design, and digital marketing solutions.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-lime-accent hover:bg-[#1a1a1a] transition-all" href="#">
<iconify-icon icon="solar:brands-linkedin"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-lime-accent hover:bg-[#1a1a1a] transition-all" href="#">
<iconify-icon icon="solar:brands-twitter-sq"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-lime-accent hover:bg-[#1a1a1a] transition-all" href="#">
<iconify-icon icon="solar:brands-instagram-sq"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-lime-accent transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-lime-accent transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">Mobile Apps</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">UI/UX Design</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">Digital Marketing</a></li>
<li><a className="hover:text-lime-accent transition-colors" href="#">SEO Optimization</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-accent mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>123 Tech Street, Silicon Valley, CA, USA</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lime-accent" icon="solar:phone-linear"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lime-accent" icon="solar:letter-linear"></iconify-icon>
<span>hello@dctechnolabs.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
<p>© 2024 DC Technolabs. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
