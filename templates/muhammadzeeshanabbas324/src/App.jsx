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
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B49020',
},
neutral: {
850: '#1f1f1f',
900: '#111111',
925: '#0a0a0a',
950: '#050505',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'wiggle': 'wiggle 1s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
wiggle: {
'0%, 100%': { transform: 'rotate(-3deg)' },
'50%': { transform: 'rotate(3deg)' },
}
}
}
}
}



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

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-neutral-950/90', 'shadow-lg');
                nav.classList.remove('bg-neutral-950/70');
            } else {
                nav.classList.remove('bg-neutral-950/90', 'shadow-lg');
                nav.classList.add('bg-neutral-950/70');
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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-xs rounded-lg group-hover:bg-gold-400 transition-colors">M</div>
<span className="text-lg font-semibold tracking-tighter text-white group-hover:text-gold-400 transition-colors duration-300 font-display">
                    MZA AGENCY
                </span>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-neutral-400">
<a className="hover:text-gold-400 transition-colors" href="#home">Home</a>
<a className="hover:text-gold-400 transition-colors" href="#about">About</a>
<a className="hover:text-gold-400 transition-colors" href="#services">Services</a>
<a className="hover:text-gold-400 transition-colors" href="#portfolio">Work</a>
<a className="hover:text-gold-400 transition-colors" href="#contact">Contact</a>
<a className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-full hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300" href="#contact">
                    Get Quote
                </a>
</div>

<button className="lg:hidden text-white hover:text-gold-400 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] animate-blob"></div>
<div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[30%] w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="reveal active inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/5 text-gold-400 text-xs font-medium uppercase tracking-wider mb-8 hover:bg-gold-400/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
</span>
                Accepting New Clients
            </div>
<h1 className="reveal active stagger-1 font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-8">
                MZA <span className="text-neutral-700">AGENCY</span>
</h1>
<p className="reveal active stagger-2 text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                We are a digital powerhouse crafting immersive web experiences, high-performance e-commerce systems, and strategic brand identities.
            </p>
<div className="reveal active stagger-3 flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="group relative px-8 py-4 bg-gold-400 text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto" href="#contact">
<div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
<span className="relative flex items-center justify-center gap-2">
                        Start Project <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</span>
</a>
<a className="px-8 py-4 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="reveal">
<h3 className="text-3xl font-display font-medium text-white mb-1">500+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Projects</p>
</div>
<div className="reveal stagger-1">
<h3 className="text-3xl font-display font-medium text-white mb-1">98%</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Success Rate</p>
</div>
<div className="reveal stagger-2">
<h3 className="text-3xl font-display font-medium text-white mb-1">24/7</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Support</p>
</div>
<div className="reveal stagger-3">
<h3 className="text-3xl font-display font-medium text-white mb-1">Global</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Client Base</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
<div>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-4">Our Expertise</h2>
<p className="text-neutral-500 max-w-md text-lg font-light">Comprehensive digital services designed for growth and impact.</p>
</div>
<div className="h-[1px] flex-1 bg-white/10 mx-8 hidden md:block mb-4"></div>
<a className="text-gold-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium" href="#contact">
                    Discuss Requirements <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal hover-card p-10 rounded-2xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-gold-400/10"></div>
<div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify" data-icon="lucide:layout-template" data-width="28"></span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-4">Web Design &amp; UI/UX</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Bespoke digital environments tailored to your brand's narrative. We focus on conversion-driven layouts.
                    </p>
</div>

<div className="reveal stagger-1 hover-card p-10 rounded-2xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-blue-500/10"></div>
<div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="28"></span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-4">E-Commerce &amp; Shopify</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        High-converting stores with seamless checkout experiences. Custom Shopify solutions.
                    </p>
</div>

<div className="reveal stagger-2 hover-card p-10 rounded-2xl bg-neutral-900/50 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-purple-500/10"></div>
<div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<span className="iconify" data-icon="lucide:fingerprint" data-width="28"></span>
</div>
<h3 className="text-xl font-display font-medium text-white mb-4">Branding &amp; Identity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Strategic visual identities that separate you from the noise. Logo design and typography systems.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-neutral-900/20" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-16 text-center">Selected Works</h2>
<div className="space-y-32">

<div className="reveal group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-neutral-800">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-6">
<div className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Finance</div>
<h3 className="text-3xl font-display font-medium text-white">Vanguard Capital</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                            A complete rebranding and digital overhaul for a leading venture capital firm. We focused on trust.
                        </p>
<div className="flex gap-3 pt-4">
<span className="px-3 py-1 bg-white/5 text-neutral-400 text-xs rounded-full border border-white/5">UI/UX</span>
<span className="px-3 py-1 bg-white/5 text-neutral-400 text-xs rounded-full border border-white/5">React</span>
</div>
</div>
</div>

<div className="reveal group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="lg:order-2 relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-neutral-800">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="lg:order-1 space-y-6 lg:text-right">
<div className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2 flex lg:justify-end">E-Commerce</div>
<h3 className="text-3xl font-display font-medium text-white">Noir Apparel</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                            A high-end streetwear Shopify store designed for drop-culture.
                        </p>
<div className="flex gap-3 pt-4 lg:justify-end">
<span className="px-3 py-1 bg-white/5 text-neutral-400 text-xs rounded-full border border-white/5">Shopify</span>
<span className="px-3 py-1 bg-white/5 text-neutral-400 text-xs rounded-full border border-white/5">Liquid</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal text-3xl md:text-5xl font-display font-semibold text-white tracking-tight mb-8">
                Precision. Luxury. <span className="text-gold-400">Performance.</span>
</h2>
<p className="reveal stagger-1 text-lg text-neutral-400 font-light leading-relaxed mb-12">
                At MZA Agency, we don't just build websites; we craft digital legacies. Our approach is rooted in a deep understanding of luxury aesthetics.
            </p>
<div className="reveal stagger-2 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
<div className="p-6 rounded-xl bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors">
<span className="iconify text-gold-400 mb-4" data-icon="lucide:zap" data-width="24"></span>
<h4 className="text-white font-medium mb-2">Fast Turnaround</h4>
<p className="text-sm text-neutral-500">Rapid deployment without compromising quality.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors">
<span className="iconify text-gold-400 mb-4" data-icon="lucide:shield-check" data-width="24"></span>
<h4 className="text-white font-medium mb-2">Transparent Policies</h4>
<p className="text-sm text-neutral-500">Clear billing. 40% retention on cancellation.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900 border border-white/5 hover:border-gold-400/30 transition-colors">
<span className="iconify text-gold-400 mb-4" data-icon="lucide:globe" data-width="24"></span>
<h4 className="text-white font-medium mb-2">Global Standards</h4>
<p className="text-sm text-neutral-500">International quality code and design standards.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-neutral-925 relative overflow-hidden" id="contact">
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gold-400/5 to-transparent"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-6">Let's Build Something Great</h2>
<p className="reveal stagger-1 text-neutral-400 mb-12 font-light text-lg">
                Ready to elevate your digital presence? Reach out directly via email or WhatsApp.
            </p>
<div className="reveal stagger-2 space-y-4">
<div className="p-8 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-gold-400/30 transition-all duration-300 group">
<span className="block text-xs text-gold-400 uppercase tracking-widest mb-3">Email Us</span>
<a className="text-xl md:text-3xl font-medium text-white group-hover:text-gold-400 transition-colors break-all" href="mailto:muhammadzeeshanabbas324@gmail.com">
                        muhammadzeeshanabbas324@gmail.com
                    </a>
</div>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all w-full md:w-auto" href="mailto:muhammadzeeshanabbas324@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                        Send Email
                    </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20bd5a] transition-all w-full md:w-auto" href="https://wa.me/923185201248" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                        Chat on WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-neutral-950 text-center">
<div className="flex flex-col items-center gap-6">
<a className="text-xl font-bold tracking-tighter text-white font-display" href="#">MZA AGENCY</a>
<p className="text-neutral-600 text-xs tracking-wide">
                © 2024 MZA Agency. All Rights Reserved.
            </p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">

<a className="group relative flex items-center justify-center w-14 h-14 bg-neutral-800 text-white rounded-full border border-white/10 shadow-lg hover:bg-gold-400 hover:text-black hover:scale-110 transition-all duration-300" href="mailto:muhammadzeeshanabbas324@gmail.com">

<span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl flex items-center gap-2">
                Send Email
                
<div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white rotate-45"></div>
</span>
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</a>

<a className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300" href="https://wa.me/923185201248" target="_blank">

<span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

<span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl flex items-center gap-2">
                Chat on WhatsApp
                
<div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white rotate-45"></div>
</span>

<span className="iconify relative z-10" data-icon="lucide:message-circle" data-width="26"></span>

<span className="absolute top-0 right-0 z-20 w-3.5 h-3.5 bg-red-500 border-2 border-neutral-900 rounded-full"></span>
</a>
</div>



    </>
  );
}
