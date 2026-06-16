import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up').forEach((elem) => {
                observer.observe(elem);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="text-xl font-semibold tracking-tighter text-emerald-950 uppercase" href="#">
                        Heaven.
                    </a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-stone-500 hover:text-emerald-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-emerald-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-stone-500 hover:text-emerald-900 transition-colors" href="#testimonials">Testimonials</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-emerald-900 transition-colors" href="tel:8059076773">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        (805) 907-6773
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-900 rounded-full hover:bg-emerald-800 transition-all active:scale-95" href="#contact">
                        Get a Quote
                    </a>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl fade-up pt-8 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-800 text-xs font-medium mb-6 border border-emerald-200/50">
<iconify-icon height="14" icon="solar:leaf-linear" width="14"></iconify-icon>
                            Premium Landscape Design
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-stone-950 leading-[1.1] mb-6">
                            Create a slice of heaven in your backyard.
                        </h1>
<p className="text-base sm:text-lg text-stone-600 mb-8 font-light leading-relaxed max-w-lg">
                            Professional landscaping services transforming ordinary outdoor spaces into extraordinary living environments.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-emerald-900 rounded-full hover:bg-emerald-800 transition-all active:scale-95 shadow-sm shadow-emerald-900/20" href="tel:8059076773">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
                                (805) 907-6773
                            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-all active:scale-95" href="#services">
                                Explore Services
                            </a>
</div>
<div className="mt-10 flex items-center gap-4 text-xs sm:text-sm text-stone-500 font-medium">
<div className="flex -space-x-2">
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-stone-50" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-stone-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-stone-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span>Trusted by 500+ locals</span>
</div>
</div>
<div className="relative lg:ml-auto fade-up delay-200 mt-4 lg:mt-0 pb-8 sm:pb-0">

<div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden relative">
<img alt="Beautiful modern landscaping" className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eece2863-f0b2-4932-bee9-f489925f98c0_1600w.png"/>
<div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none"></div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 w-[85%] sm:w-auto sm:left-[-3rem] sm:bottom-12 bg-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 flex items-start gap-4 animate-[bounce_4s_infinite]">
<div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800">
<iconify-icon height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-stone-900">5.0 Rating</p>
<p className="text-xs text-stone-500 font-medium">100+ Reviews</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 fade-up">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Everything your landscape needs</h2>
<p className="text-stone-500 text-base font-light">From initial design to ongoing maintenance, we offer a comprehensive suite of services to keep your property looking its absolute best.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors duration-300 fade-up">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-800 transition-all duration-300">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Landscape Design</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Custom 3D designs tailored to your specific aesthetic preferences and environmental conditions.</p>
</div>

<div className="group p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors duration-300 fade-up delay-100">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-800 transition-all duration-300">
<iconify-icon height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Hardscaping</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Patios, walkways, retaining walls, and outdoor living areas built with premium materials.</p>
</div>

<div className="group p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors duration-300 fade-up delay-200">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-800 transition-all duration-300">
<iconify-icon height="24" icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Lawn Maintenance</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Regular mowing, edging, fertilization, and weed control to keep your turf lush and healthy.</p>
</div>

<div className="group p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-colors duration-300 fade-up delay-300">
<div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-800 mb-6 group-hover:bg-emerald-800 group-hover:text-white group-hover:border-emerald-800 transition-all duration-300">
<iconify-icon height="24" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900 mb-2">Irrigation Systems</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Smart sprinkler installation and repair to ensure efficient water usage and optimal plant health.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-emerald-50 relative overflow-hidden" id="process">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-emerald-900/50 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 fade-up">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Our Simple Process</h2>
<p className="text-emerald-200/80 text-base font-light">We've streamlined our workflow to ensure a smooth, stress-free experience from the first call to the final reveal.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-emerald-800/0 via-emerald-700 to-emerald-800/0"></div>

<div className="relative fade-up text-center">
<div className="w-16 h-16 mx-auto bg-emerald-900 border border-emerald-700/50 rounded-2xl flex items-center justify-center text-xl font-medium text-emerald-300 mb-6 shadow-xl relative z-10">
                            1
                        </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Consultation &amp; Quote</h3>
<p className="text-sm text-emerald-200/70 leading-relaxed font-light">We visit your property, discuss your vision, and provide a transparent, detailed estimate for the project.</p>
</div>

<div className="relative fade-up delay-100 text-center">
<div className="w-16 h-16 mx-auto bg-emerald-900 border border-emerald-700/50 rounded-2xl flex items-center justify-center text-xl font-medium text-emerald-300 mb-6 shadow-xl relative z-10">
                            2
                        </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Design &amp; Planning</h3>
<p className="text-sm text-emerald-200/70 leading-relaxed font-light">Our team creates detailed layouts and selects the perfect materials and flora for your specific environment.</p>
</div>

<div className="relative fade-up delay-200 text-center">
<div className="w-16 h-16 mx-auto bg-emerald-900 border border-emerald-700/50 rounded-2xl flex items-center justify-center text-xl font-medium text-emerald-300 mb-6 shadow-xl relative z-10">
                            3
                        </div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Installation</h3>
<p className="text-sm text-emerald-200/70 leading-relaxed font-light">Our expert crew brings the vision to life with precision, respect for your property, and timely execution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 fade-up">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Loved by homeowners</h2>
<p className="text-stone-500 text-base font-light">Don't just take our word for it. Read what our clients have to say about their new outdoor spaces.</p>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="solar:star-bold" width="20"></iconify-icon>
<span className="ml-2 text-sm font-medium text-stone-900">5.0 Average</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 bg-white rounded-3xl border border-stone-200/60 shadow-sm fade-up">
<div className="mb-6 text-emerald-800/20">
<iconify-icon height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-8 font-light">"Heaven Landscaping completely transformed our backyard. They turned a muddy, unusable slope into a beautiful terraced garden with a stunning patio. Professional, clean, and incredible attention to detail."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-sm font-medium text-stone-500 border border-stone-200">SJ</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-stone-900">Sarah Jenkins</h4>
<p className="text-xs text-stone-500 font-medium">Full Backyard Renovation</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-3xl border border-stone-200/60 shadow-sm fade-up delay-100">
<div className="mb-6 text-emerald-800/20">
<iconify-icon height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-8 font-light">"We hired them for regular maintenance and a smart irrigation system install. Our lawn has never looked greener. The crew is always on time, polite, and they clearly care about their work."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-sm font-medium text-stone-500 border border-stone-200">MR</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-stone-900">Michael Rodriguez</h4>
<p className="text-xs text-stone-500 font-medium">Maintenance &amp; Irrigation</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-3xl border border-stone-200/60 shadow-sm fade-up delay-200">
<div className="mb-6 text-emerald-800/20">
<iconify-icon height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-8 font-light">"From the initial 3D design to the final plant going into the ground, the process was seamless. They listened to our ideas and elevated them. Highly recommend their design services."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-sm font-medium text-stone-500 border border-stone-200">EP</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-stone-900">Emily &amp; Paul</h4>
<p className="text-xs text-stone-500 font-medium">Custom Landscape Design</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-stone-200/50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium mb-8 border border-stone-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for new projects
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-stone-900 mb-6">Ready to create your heaven?</h2>
<p className="text-lg text-stone-500 mb-10 font-light max-w-2xl mx-auto">Call us today for a free consultation. Let's discuss your ideas and build an outdoor space you'll love for years to come.</p>
<div className="flex flex-col items-center gap-6">
<a className="group flex items-center gap-4 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-stone-900/10" href="tel:8059076773">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-stone-300 uppercase tracking-wider mb-0.5">Call us directly</div>
<div className="text-xl font-semibold tracking-tight">(805) 907-6773</div>
</div>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-stone-50 py-12 border-t border-stone-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-emerald-950 uppercase">Heaven.</span>
</div>
<p className="text-xs text-stone-500 font-medium">© 2024 Heaven Landscaping. All rights reserved.</p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-emerald-800 transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-emerald-800 transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
