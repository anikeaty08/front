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
cream: '#FFFDF9',
mint: '#2EE6A6',
lemon: '#FFD84D',
dark: '#111111',
muted: '#6B7280',
border: '#E5E7EB',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'marquee': 'marquee 25s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-cream/80 border-b border-gray-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-dark rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<span className="font-display font-semibold text-lg tracking-tight">LinkSpace</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#use-cases">Use Cases</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-muted transition-colors" href="#">Login</a>
<a className="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-dark/10" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-mint/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lemon/20 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl animate-fade-in-up">
<h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
                    One link for <br/>
<span className="relative inline-block">
                        everything
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-mint -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
                    you are.
                </h1>
<p className="text-lg text-muted mb-8 leading-relaxed max-w-md">
                    Connect your audiences to all of your content with just one link. Highly customizable, analytics-driven, and built for growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-mint text-dark px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1FD695] transition-all transform hover:-translate-y-1 shadow-xl shadow-mint/30 flex items-center justify-center gap-2" href="#">
                        Claim your link
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="px-8 py-4 rounded-full font-medium text-base border border-gray-200 hover:border-gray-400 hover:bg-white transition-all flex items-center justify-center gap-2" href="#">
                        View Demo
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-muted">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-cream"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-cream"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-cream"></div>
</div>
<span>Trusted by 50,000+ creators</span>
</div>
</div>

<div className="relative h-[600px] flex items-center justify-center lg:justify-end reveal">

<div className="absolute top-10 left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 animate-float">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-lg text-green-600">
<span className="iconify" data-icon="lucide:dollar-sign"></span>
</div>
<div>
<p className="text-xs text-muted font-medium">Revenue</p>
<p className="text-sm font-bold">$1,240.50</p>
</div>
</div>
</div>
<div className="absolute bottom-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 animate-float-delayed">
<div className="flex items-center gap-3">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600">
<span className="iconify" data-icon="lucide:trending-up"></span>
</div>
<div>
<p className="text-xs text-muted font-medium">Clicks</p>
<p className="text-sm font-bold">+128%</p>
</div>
</div>
</div>

<div className="relative w-[300px] h-[580px] bg-dark rounded-[3rem] border-8 border-dark shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-xl z-20"></div>

<div className="w-full h-full bg-cream pt-12 px-6 flex flex-col items-center overflow-hidden">
<div className="w-20 h-20 bg-gray-200 rounded-full mb-4 mt-4"></div>
<div className="w-32 h-4 bg-gray-200 rounded-full mb-2"></div>
<div className="w-24 h-3 bg-gray-100 rounded-full mb-8"></div>

<div className="w-full space-y-3">
<div className="w-full h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-between px-4 shadow-sm">
<div className="w-6 h-6 bg-red-100 rounded-md"></div>
<div className="w-20 h-2 bg-gray-100 rounded-full"></div>
</div>
<div className="w-full h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-between px-4 shadow-sm">
<div className="w-6 h-6 bg-blue-100 rounded-md"></div>
<div className="w-24 h-2 bg-gray-100 rounded-full"></div>
</div>
<div className="w-full h-14 bg-mint rounded-xl flex items-center justify-center shadow-md">
<span className="font-semibold text-dark text-sm">Subscribe</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center text-mint group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h3 className="font-display font-bold text-3xl tracking-tight">2.5M+</h3>
<p className="text-sm text-muted font-medium">Daily Active Users</p>
</div>
</div>

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-lemon/30 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:link" data-width="24"></span>
</div>
<div>
<h3 className="font-display font-bold text-3xl tracking-tight">100M+</h3>
<p className="text-sm text-muted font-medium">Links Created</p>
</div>
</div>

<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:globe" data-width="24"></span>
</div>
<div>
<h3 className="font-display font-bold text-3xl tracking-tight">140+</h3>
<p className="text-sm text-muted font-medium">Countries Supported</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative bg-white rounded-[2rem] p-8 border border-gray-200 shadow-2xl reveal">

<div className="mb-8">
<label className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 block">Theme Color</label>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full bg-dark ring-2 ring-offset-2 ring-dark transform hover:scale-110 transition-transform"></button>
<button className="w-10 h-10 rounded-full bg-mint hover:ring-2 hover:ring-offset-2 hover:ring-mint transform hover:scale-110 transition-transform"></button>
<button className="w-10 h-10 rounded-full bg-lemon hover:ring-2 hover:ring-offset-2 hover:ring-lemon transform hover:scale-110 transition-transform"></button>
<button className="w-10 h-10 rounded-full bg-purple-500 hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 transform hover:scale-110 transition-transform"></button>
<div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-muted hover:border-dark hover:text-dark cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-center gap-4 transform transition-all hover:scale-[1.02]">
<div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center text-2xl">😎</div>
<div className="flex-1">
<div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
<div className="h-3 bg-gray-200 rounded w-1/2"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-semibold uppercase tracking-wider mb-6">
                    Design &amp; Branding
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Make it unmistakably <br/> yours.
                </h2>
<p className="text-lg text-muted mb-8 leading-relaxed">
                    Customizing your link page is as easy as choosing your favorite color. No coding required. Pick a theme, upload your logo, and match your brand instantly.
                </p>
<a className="text-dark font-semibold border-b-2 border-mint hover:bg-mint/10 transition-colors pb-0.5 inline-flex items-center gap-1" href="#">
                    Explore themes <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lemon/20 text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-6">
                    Deep Insights
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Analyze traffic like <br/> a pro.
                </h2>
<p className="text-lg text-muted mb-8 leading-relaxed">
                    Get detailed insights into who is clicking what. Track CTR, geographic location, and device types to optimize your content strategy.
                </p>
<button className="bg-dark text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
                    View Dashboard
                </button>
</div>

<div className="relative reveal">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl transform rotate-3 -z-10"></div>
<div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-sm text-muted">Total Views</p>
<h3 className="text-3xl font-display font-bold">142,093</h3>
</div>
<div className="flex gap-1">
<span className="w-8 h-1 bg-gray-200 rounded-full"></span>
<span className="w-8 h-1 bg-dark rounded-full"></span>
</div>
</div>

<div className="flex items-end justify-between gap-2 h-40">
<div className="w-full bg-gray-100 rounded-t-lg h-[40%] group relative hover:bg-mint transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-lg h-[60%] group relative hover:bg-mint transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-lg h-[30%] group relative hover:bg-mint transition-colors"></div>
<div className="w-full bg-dark rounded-t-lg h-[85%] relative shadow-lg">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                                Peak Traffic
                            </div>
</div>
<div className="w-full bg-gray-100 rounded-t-lg h-[50%] group relative hover:bg-mint transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-lg h-[75%] group relative hover:bg-mint transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-lg h-[45%] group relative hover:bg-mint transition-colors"></div>
</div>
<div className="flex justify-between mt-4 text-xs text-muted font-mono">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="font-display text-4xl font-semibold tracking-tight mb-4">Everything you need to grow</h2>
<p className="text-muted text-lg">Powerful features built for creators, businesses, and everyone in between.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:link-2"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Unlimited Links</h3>
<p className="text-sm text-muted">Add as many links as you want. We don't cap your creativity.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Sell Products</h3>
<p className="text-sm text-muted">Integrate Shopify or Gumroad directly into your bio page.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:mail"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Newsletter Sub</h3>
<p className="text-sm text-muted">Collect emails directly. Syncs with Mailchimp and ConvertKit.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:qr-code"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Custom QR Codes</h3>
<p className="text-sm text-muted">Generate unique QR codes to share your link in the physical world.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:lock"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Sensitive Content</h3>
<p className="text-sm text-muted">Gate content with age restrictions or password protection.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:zap"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Fast Loading</h3>
<p className="text-sm text-muted">Optimized for speed. Your page loads instantly, everywhere.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:video"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Video Embeds</h3>
<p className="text-sm text-muted">Embed YouTube, TikTok, or Vimeo videos directly inline.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-mint/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-dark mb-4 group-hover:bg-mint group-hover:text-dark transition-colors">
<span className="iconify" data-icon="lucide:calendar"></span>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Scheduling</h3>
<p className="text-sm text-muted">Schedule links to appear or disappear at specific times.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center reveal">
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">

<svg className="w-full h-full text-gray-300" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div className="absolute -bottom-6 -right-6 bg-lemon px-6 py-4 rounded-xl shadow-lg">
<div className="flex gap-1 text-dark">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
</div>
</div>
<div>
<span className="iconify text-mint mb-6" data-icon="lucide:quote" data-width="48"></span>
<h3 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8">
                    "LinkSpace completely transformed how I share my content. My click-through rate doubled in the first month."
                </h3>
<div>
<p className="font-bold text-lg">Sarah Jenkins</p>
<p className="text-muted">Digital Creator &amp; Youtuber</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-4xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-muted text-lg">Choose the plan that fits your needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow reveal">
<h3 className="font-display text-xl font-semibold mb-2">Starter</h3>
<div className="text-3xl font-bold mb-6">$0 <span className="text-sm font-normal text-muted">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Unlimited Links
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Basic Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Standard Themes
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors">Get Started</button>
</div>

<div className="bg-dark text-white p-8 rounded-2xl border border-dark shadow-2xl relative transform md:-translate-y-4 reveal">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mint text-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Most Popular
                    </div>
<h3 className="font-display text-xl font-semibold mb-2 text-mint">Pro</h3>
<div className="text-3xl font-bold mb-6">$9 <span className="text-sm font-normal text-gray-400">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-mint" data-icon="lucide:check"></span> Everything in Starter
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-mint" data-icon="lucide:check"></span> Custom Backgrounds
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-mint" data-icon="lucide:check"></span> Remove Branding
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-mint" data-icon="lucide:check"></span> Advanced Analytics
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-mint text-dark font-bold hover:bg-[#1FD695] transition-all transform hover:scale-[1.02]">Try Pro Free</button>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow reveal">
<h3 className="font-display text-xl font-semibold mb-2">Agency</h3>
<div className="text-3xl font-bold mb-6">$29 <span className="text-sm font-normal text-muted">/month</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Everything in Pro
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Multiple Accounts
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-muted">
<span className="iconify text-green-500" data-icon="lucide:check"></span> API Access
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-cream p-6 rounded-xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg">
                        Can I use my own domain?
                        <span className="iconify transform transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="text-muted mt-4 leading-relaxed">Yes! On the Pro and Agency plans, you can connect your own custom domain to your LinkSpace page.</p>
</details>
<details className="group bg-cream p-6 rounded-xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg">
                        Is there a free trial for Pro?
                        <span className="iconify transform transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="text-muted mt-4 leading-relaxed">Absolutely. You can try all Pro features for 14 days, no credit card required.</p>
</details>
<details className="group bg-cream p-6 rounded-xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-lg">
                        Can I track where my clicks come from?
                        <span className="iconify transform transition-transform group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="text-muted mt-4 leading-relaxed">Yes, our analytics dashboard provides geographic data, referrer sources, and device types.</p>
</details>
</div>
</div>
</section>

<footer className="bg-dark text-white pt-20 pb-10 overflow-hidden">

<div className="w-full overflow-hidden mb-16 opacity-30">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-6xl font-display font-bold px-8">CONNECT EVERYTHING</span>
<span className="text-6xl font-display font-bold px-8">GROW YOUR AUDIENCE</span>
<span className="text-6xl font-display font-bold px-8">OWN YOUR TRAFFIC</span>
<span className="text-6xl font-display font-bold px-8">CONNECT EVERYTHING</span>
<span className="text-6xl font-display font-bold px-8">GROW YOUR AUDIENCE</span>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-dark">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<span className="font-display font-semibold text-lg tracking-tight">LinkSpace</span>
</div>
<p className="text-gray-400 max-w-sm mb-6">The only link you'll ever need. Connect your audience to all of your content with just one link.</p>
</div>
<div>
<h4 className="font-bold mb-4">Platform</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-mint transition-colors" href="#">Features</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-mint transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Company</h4>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-mint transition-colors" href="#">About</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-mint transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<p>© 2024 LinkSpace Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
