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
},
colors: {
brand: {
50: '#f0f9fb',
100: '#d9f0f6',
500: '#0e7490', // Cyan-700 approx
800: '#155e75',
900: '#164e63',
950: '#083344',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'blob': 'blob 7s infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-900 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
<iconify-icon icon="lucide:car-front" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">Awash</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-brand-900 hover:text-brand-700 transition-colors" href="#">Home</a>
<a className="hover:text-brand-900 transition-colors" href="#services">Our Services</a>
<a className="hover:text-brand-900 transition-colors" href="#specialty">Specialty Services</a>
<a className="hover:text-brand-900 transition-colors" href="#cafe">Awash Cafe</a>
<a className="hover:text-brand-900 transition-colors" href="#contact">Contact Us</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Car Detailing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 mt-16">
<div className="reveal active max-w-2xl p-8 md:p-12 rounded-2xl glass-panel shadow-2xl shadow-black/20 border-l-4 border-l-brand-500 overflow-hidden group">

<div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000 ease-out group-hover:left-[200%]"></div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6 text-glow">
                    Awash: Premium <br/>
                    Car Care &amp; Cafe.
                </h1>
<p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed font-light">
                    The finest detailing and a relaxing cafe, all in one place. Experience the difference of true artisan care.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-3.5 rounded-lg bg-brand-800 hover:bg-brand-700 text-white text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 flex items-center gap-2">
                        Book Now <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold backdrop-blur-sm border border-white/20 transition-all">
                        View Services
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="lucide:chevron-down" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 bg-white relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Why Choose Awash</h2>
<p className="text-slate-500 text-lg">Quality control, expert detailing, and an unmatched experience while you wait.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon icon="lucide:award" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Unmatched Quality</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        We use only premium products and techniques to ensure your vehicle receives the treatment it deserves. Satisfaction guaranteed on every wash.
                    </p>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon icon="lucide:users" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Artisans</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Our technicians are trained professionals who treat every car as a canvas. Certified in paint correction and ceramic coating application.
                    </p>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
<iconify-icon icon="lucide:coffee" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-6 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:armchair" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Luxury &amp; Comfort</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Why wait in a plastic chair? Enjoy our fully stocked cafe, high-speed WiFi, and comfortable lounge while we work our magic.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="cafe">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative h-[400px] lg:h-auto overflow-hidden group">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img alt="Cafe Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2894&amp;auto=format&amp;fit=crop"/>
</div>

<div className="p-12 lg:p-16 flex flex-col justify-center relative">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-6 border border-orange-100 uppercase tracking-wider">
<iconify-icon icon="lucide:coffee" width="12"></iconify-icon> Now Serving
                            </div>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Relax in Our Cafe</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Enter a roast information wids char pentisation with venous cars, and relismss wiking trens and experience. Our Cafe prevas commov-reading and tamfests. Enjoy artisan coffee and pastries.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 rounded-lg bg-brand-900 hover:bg-brand-800 text-white font-medium transition-all shadow-lg shadow-brand-900/20 hover:-translate-y-0.5">
                                    View Menu
                                </button>
<div className="flex items-center gap-4 px-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+12</div>
</img></img></div>
<div className="text-sm text-slate-500">
<span className="font-bold text-slate-900">4.9</span> rating
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 relative pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-white" icon="lucide:car-front" width="24"></iconify-icon>
<span className="text-2xl font-bold text-white tracking-tight">Awash</span>
</a>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Redefining car care with premium detailing services and an exclusive cafe experience.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Our Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Exterior Detail</a></li>
<li><a className="hover:text-white transition-colors" href="#">Interior Deep Clean</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ceramic Coating</a></li>
<li><a className="hover:text-white transition-colors" href="#">Paint Protection</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="lucide:mail"></iconify-icon>
<span>hello@awash.com</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="lucide:phone"></iconify-icon>
<span>(072) 835-5783</span>
</li>
<li className="flex items-center gap-3 items-start">
<iconify-icon className="text-brand-500 mt-0.5" icon="lucide:map-pin"></iconify-icon>
<span>2338 Mariobone St,<br/>Mans, TX 70308</span>
</li>
</ul>
<button className="mt-6 w-full py-2.5 rounded border border-brand-500/50 text-brand-400 text-xs font-semibold hover:bg-brand-900/50 hover:border-brand-500 transition-all">
                        Get Directions
                    </button>
</div>

<div className="h-48 rounded-xl overflow-hidden relative bg-slate-800 border border-white/10 group">

<img alt="Map Location" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1748&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-8 h-8 rounded-full bg-brand-500 shadow-[0_0_20px_rgba(14,116,144,0.6)] animate-pulse flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Awash Car Care + Cafe. All rights reserved.</p>
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
