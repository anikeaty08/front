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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
primary: '#FFF9E6',   // Cream
secondary: '#5C4B51', // Mocha/Purple Grey
accent: '#000000',    // Black
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
fontSize: {
xs: '0.8rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed w-full z-50 bg-[#FFF9E6]/90 backdrop-blur-md border-b border-[#5C4B51]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<a className="flex items-center gap-2 group" href="#">

<svg className="text-brand-accent" fill="none" height="40" viewbox="0 0 100 100" width="40" xmlns="http://www.w3.org/2000/svg">

<path d="M10 70 C 10 70, 45 80, 50 70 C 55 80, 90 70, 90 70 L 90 55 C 90 55, 55 65, 50 55 C 45 65, 10 55, 10 55 Z" fill="#FFF9E6" stroke="#000000" strokeLinejoin="round" strokeWidth="4"></path>

<path d="M50 55 L 50 20" stroke="#000000" strokeLinecap="round" strokeWidth="4"></path>
<path d="M50 55 L 25 30" stroke="#000000" strokeLinecap="round" strokeWidth="4"></path>
<path d="M50 55 L 75 30" stroke="#000000" strokeLinecap="round" strokeWidth="4"></path>
<path d="M50 55 L 15 45" stroke="#000000" strokeLinecap="round" strokeWidth="4"></path>
<path d="M50 55 L 85 45" stroke="#000000" strokeLinecap="round" strokeWidth="4"></path>

<path d="M30 55 A 20 20 0 0 1 70 55" fill="#FFF9E6" stroke="#000000" strokeWidth="4"></path>
</svg>
<span className="text-brand-secondary text-xl font-semibold tracking-tight font-serif">SunriseWithEnoh</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors" href="#blog">Blog</a>
<a className="px-5 py-2.5 rounded-lg bg-brand-accent text-white text-sm font-medium hover:bg-gray-800 transition-colors" href="#contact">Contact</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-brand-secondary hover:text-brand-accent">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">

<img alt="African Creatives" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FFF9E6] opacity-90 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-white via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h1 className="md:text-7xl text-brand-secondary leading-[1.1] text-5xl font-semibold tracking-tight font-serif mb-6">
                Infrastructure for the<br/>
<span className="text-brand-accent">African Creative Renaissance</span>
</h1>
<p className="mt-6 max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed">
                Discover. Professionalize. Monetize African stories.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-brand-accent hover:bg-gray-800 transition-all shadow-sm" href="#join">
                    Join Us Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-secondary text-base font-medium rounded-lg text-brand-secondary bg-transparent hover:bg-brand-secondary/5 transition-all" href="#partner">
                    Partner With Us
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
<img alt="Creative Workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-primary rounded-full z-[-1]"></div>
</div>
<div className="">
<h2 className="font-serif text-4xl font-semibold text-brand-secondary mb-6">Who We Are</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        SunriseWithEnoh began as a book club focused on African literature and evolved into a multi-layered creative ecosystem. We equip African writers, artists, and multipotentialites with tools, mentorship, and opportunities to thrive globally.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-gray-700">Authenticity &amp; Cultural Integrity</span>
</li>
<li className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-gray-700">Inclusivity &amp; Empowerment</span>
</li>
<li className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-gray-700">Global Opportunity Pipeline</span>
</li>
</ul>
<a className="text-brand-secondary font-medium hover:text-brand-accent inline-flex items-center gap-2 group" href="#about-page">
                        Read our full story
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-serif text-4xl font-semibold text-brand-secondary mb-4">What We Offer</h2>
<p className="text-gray-600">Professional tools and ecosystems for creative excellence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6 text-brand-secondary">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-brand-secondary mb-3">Community</h3>
<p className="text-gray-600 leading-relaxed">
                        A collaborative environment of 95+ multipotentialites building original intellectual property and supporting one another.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6 text-brand-secondary">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-brand-secondary mb-3">Agency</h3>
<p className="text-gray-600 leading-relaxed">
                        Talent management, manuscript polishing, editing, proofreading, and brand storytelling for creatives and corporate clients.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6 text-brand-secondary">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<h3 className="font-serif text-2xl font-semibold text-brand-secondary mb-3">Media</h3>
<p className="text-gray-600 leading-relaxed">
                        Anthologies, podcasts, digital storytelling, and global showcasing of African voices.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-50 transition-all" href="#services-page">
                    Explore Our Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-brand-secondary rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Why Choose Us</h2>
<p className="text-white/80 text-lg mb-8 leading-relaxed">
                            We bridge the gap between emerging African talent and global media opportunities through a unique blend of community and professional service.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-brand-primary mt-1" data-lucide="star"></i>
<span className="font-medium text-white/90">Strong Creative Community</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-brand-primary mt-1" data-lucide="zap"></i>
<span className="font-medium text-white/90">Professional Services</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-brand-primary mt-1" data-lucide="heart"></i>
<span className="font-medium text-white/90">Cultural Authenticity</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-brand-primary mt-1" data-lucide="globe"></i>
<span className="font-medium text-white/90">Global Opportunities</span>
</div>
</div>
</div>

<div className="hidden lg:block relative">
<div className="grid grid-cols-2 gap-4 opacity-90">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<div className="text-3xl font-serif text-brand-primary mb-1">95+</div>
<div className="text-sm text-white/70">Active Members</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8">
<div className="text-3xl font-serif text-brand-primary mb-1">20+</div>
<div className="text-sm text-white/70">Projects Launched</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-accent opacity-20 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-brand-primary">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold uppercase tracking-wider mb-4">Latest Initiative</span>
<h2 className="font-serif text-4xl font-semibold text-brand-secondary mb-4">SWE Book Drive</h2>
<p className="max-w-2xl mx-auto text-gray-700 text-lg mb-8">
                We collect books from individuals and partners and redistribute them to schools, libraries, and readers in need across the region.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-secondary text-white font-medium hover:bg-brand-accent transition-colors" href="#book-drive">
                Support the Book Drive
                <i className="ml-2 w-5 h-5" data-lucide="book-open"></i>
</a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-serif text-3xl font-semibold text-brand-secondary mb-12 text-center">Community Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
<div className="mb-4 text-brand-secondary">
<i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-gray-700 mb-6 italic">"SunriseWithEnoh provided the professional support I needed to take my manuscript from a draft to a polished work ready for publishing."</p>
<div className="font-medium text-brand-secondary">— Sarah A., Author</div>
</div>

<div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
<div className="mb-4 text-brand-secondary">
<i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-gray-700 mb-6 italic">"A space that truly respects African storytelling. I've found mentors and collaborators who understand my context."</p>
<div className="font-medium text-brand-secondary">— David O., Poet</div>
</div>

<div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
<div className="mb-4 text-brand-secondary">
<i className="w-8 h-8 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-gray-700 mb-6 italic">"The growth I've experienced here is unmatched. It's not just a club, it's an accelerator for creative careers."</p>
<div className="font-medium text-brand-secondary">— Nneka I., Artist</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="font-serif text-5xl font-semibold text-brand-secondary mb-6 tracking-tight">Be Part of the <br/>Creative Renaissance</h2>
<p className="text-xl text-gray-500 mb-10">Join a network of vetted creatives and start building today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-accent text-white font-medium hover:bg-gray-800 transition-shadow shadow-lg shadow-brand-accent/20" href="#join">
                    Join the Community
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-100 text-brand-secondary font-medium hover:bg-gray-200 transition-colors" href="#partner">
                    Partner With Us
                </a>
</div>
</div>
</section>

<footer className="bg-brand-secondary text-white pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 70 C 10 70, 45 80, 50 70 C 55 80, 90 70, 90 70 L 90 55 C 90 55, 55 65, 50 55 C 45 65, 10 55, 10 55 Z" fill="transparent" stroke="#FFF9E6" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M50 55 L 50 20" stroke="#FFF9E6" strokeLinecap="round" strokeWidth="6"></path>
<path d="M50 55 L 25 30" stroke="#FFF9E6" strokeLinecap="round" strokeWidth="6"></path>
<path d="M50 55 L 75 30" stroke="#FFF9E6" strokeLinecap="round" strokeWidth="6"></path>
<path d="M30 55 A 20 20 0 0 1 70 55" fill="transparent" stroke="#FFF9E6" strokeWidth="6"></path>
</svg>
<span className="font-serif text-xl font-bold">SunriseWithEnoh</span>
</div>
<p className="text-white/70 text-sm leading-relaxed">
                        Building the infrastructure for African storytelling. Discover, professionalize, and monetize your talent.
                    </p>
</div>

<div>
<h4 className="font-semibold mb-4 text-brand-primary">Explore</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 text-brand-primary">Contact</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Partnership Inquiries</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community Membership</a></li>
<li><a className="hover:text-white transition-colors" href="#">Media Requests</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 text-brand-primary">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-white/50">© 2026 SunriseWithEnoh. All Rights Reserved.</p>
<div className="flex gap-6 text-sm text-white/50">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
