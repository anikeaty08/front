import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve after revealing
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors duration-500">
<span className="iconify text-green-600 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" data-height="20" data-icon="lucide:sprout" data-width="20"></span>
</div>
                GreenSprout
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300" href="#why-us">Why Us</a>
<a className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 transform hover:-translate-y-0.5" href="#contact">Get Quote</a>
</div>

<button className="md:hidden text-slate-900 p-2 hover:bg-slate-50 rounded-md transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="reveal active inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm text-slate-600 text-xs font-medium mb-8 hover:border-green-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Now accepting new clients in Plano
            </div>

<h1 className="reveal active delay-100 text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Professional Lawn Care <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">You Can Trust.</span>
</h1>

<p className="reveal active delay-200 text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Weekly mowing, edging, trimming, and seasonal cleanup for busy homeowners. We make your yard the envy of the neighborhood.
            </p>

<div className="reveal active delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:-translate-y-1 flex items-center justify-center gap-2 group" href="#contact">
                    Get a Free Quote
                    <span className="iconify group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 flex items-center justify-center gap-2" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                    Call Now
                </a>
</div>
</div>

<div className="reveal active delay-500 max-w-5xl mx-auto mt-20 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
<img alt="Beautiful manicured lawn in Texas" className="w-full h-64 md:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out-expo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a35c243f-9766-486f-bfc3-ff2dcbafb135_1600w.webp"/>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg hidden md:block">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-600">
<span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Status</p>
<p className="text-sm font-semibold text-slate-900">Schedule Open</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Complete Garden Care</h2>
<p className="text-slate-500 max-w-lg mx-auto">Everything you need to keep your property looking pristine year-round, delivered with consistency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal group p-6 rounded-2xl border border-slate-100 bg-white hover:border-green-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out-expo hover:-translate-y-2 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-3 transition-all duration-500">
<span className="iconify" data-icon="lucide:scissors" data-strokeWidth="1.5" data-width="22"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-green-700 transition-colors">Mowing &amp; Edging</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Precision cutting and clean edging along driveways and walkways for a sharp look.</p>
</div>
</div>

<div className="reveal delay-100 group p-6 rounded-2xl border border-slate-100 bg-white hover:border-green-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out-expo hover:-translate-y-2 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-3 transition-all duration-500">
<span className="iconify" data-icon="lucide:align-justify" data-strokeWidth="1.5" data-width="22"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-green-700 transition-colors">Hedge Trimming</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Keeping your bushes, shrubs, and hedges neatly shaped and healthy.</p>
</div>
</div>

<div className="reveal delay-200 group p-6 rounded-2xl border border-slate-100 bg-white hover:border-green-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out-expo hover:-translate-y-2 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-3 transition-all duration-500">
<span className="iconify" data-icon="lucide:wind" data-strokeWidth="1.5" data-width="22"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-green-700 transition-colors">Seasonal Cleanup</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Leaf removal and debris clearing to prepare your lawn for changing seasons.</p>
</div>
</div>

<div className="reveal delay-300 group p-6 rounded-2xl border border-slate-100 bg-white hover:border-green-100/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out-expo hover:-translate-y-2 cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-3 transition-all duration-500">
<span className="iconify" data-icon="lucide:flower-2" data-strokeWidth="1.5" data-width="22"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-green-700 transition-colors">Mulching &amp; Care</h3>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Fresh mulch installation and flower bed maintenance to suppress weeds.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50" id="why-us">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="reveal text-3xl font-semibold text-slate-900 tracking-tight mb-8">Why Plano Homeowners <br/> Choose GreenSprout</h2>
<div className="space-y-8">

<div className="reveal delay-100 flex gap-5 group">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 group-hover:border-green-200 transition-all duration-300">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Locally Owned &amp; Operated</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">We aren't a franchise. We live in Plano and care about our community's appearance.</p>
</div>
</div>

<div className="reveal delay-200 flex gap-5 group">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 group-hover:border-green-200 transition-all duration-300">
<span className="iconify" data-icon="lucide:calendar-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Reliable Weekly Schedules</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">You'll know exactly when we're coming. We show up on time, every time.</p>
</div>
</div>

<div className="reveal delay-300 flex gap-5 group">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 group-hover:border-green-200 transition-all duration-300">
<span className="iconify" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 text-lg">Affordable Pricing</h4>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Transparent quotes with no hidden fees. Professional care that fits your budget.</p>
</div>
</div>
</div>
</div>
<div className="reveal order-1 md:order-2 relative h-full min-h-[400px]">

<div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-3xl transform rotate-3 scale-95 opacity-50 transition-transform duration-700 hover:rotate-6"></div>
<img alt="Worker mowing lawn" className="relative rounded-3xl shadow-2xl border border-white h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<h2 className="reveal text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">Loved by Locals</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
<div className="flex gap-0.5 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">"GreenSprout transformed our yard. Super reliable and affordable! I finally have my weekends back."</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-medium text-slate-600 text-xs">SM</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah M.</div>
<div className="text-xs text-slate-400">Homeowner, Plano</div>
</div>
</div>
</div>

<div className="reveal delay-100 p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
<div className="flex gap-0.5 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">"The best lawn service we have used in Texas. They pay attention to detail and actually close the gate when they leave!"</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-medium text-slate-600 text-xs">JD</div>
<div>
<div className="text-sm font-medium text-slate-900">James D.</div>
<div className="text-xs text-slate-400">Homeowner, Plano</div>
</div>
</div>
</div>

<div className="reveal delay-200 p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
<div className="flex gap-0.5 text-yellow-400 mb-6">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-8 leading-relaxed text-sm">"Very professional team. They did a massive spring cleanup for us and the price was very fair."</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-medium text-slate-600 text-xs">MR</div>
<div>
<div className="text-sm font-medium text-slate-900">Mike R.</div>
<div className="text-xs text-slate-400">Homeowner, Richardson</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="reveal max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute -right-20 -top-20 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 relative z-10">Ready for a better lawn?</h2>
<p className="text-slate-300 mb-10 max-w-lg mx-auto relative z-10 text-lg">Join your neighbors in Plano who trust GreenSprout for their lawn maintenance.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<a className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10" href="#contact">Request Free Quote</a>
<a className="px-8 py-3.5 bg-transparent border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                    (555) 123-4567
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10 reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Get Your Free Quote</h2>
<p className="text-sm text-slate-500 mt-2">Fill out the form below and we will get back to you within 24 hours.</p>
</div>
<form className="reveal delay-100 bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 space-y-6">
<div className="space-y-1">
<label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all duration-300 text-slate-900 placeholder-slate-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all duration-300 text-slate-900 placeholder-slate-400" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all duration-300 text-slate-900 placeholder-slate-400" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all duration-300 text-slate-900 placeholder-slate-400 resize-none" id="message" placeholder="I need weekly mowing and hedge trimming..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group" type="button">
                    Send Request
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
<p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<span className="iconify text-green-600" data-icon="lucide:sprout" data-width="20"></span>
                    GreenSprout
                </a>
<p className="text-sm text-slate-500">Plano, Texas</p>
<p className="text-sm text-slate-500">Serving Plano &amp; surrounding areas</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110 duration-300" href="#">
<span className="iconify" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110 duration-300" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110 duration-300" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
<div className="text-center md:text-right">
<a className="text-lg font-medium text-slate-900 block mb-1 hover:text-green-600 transition-colors" href="tel:5551234567">(555) 123-4567</a>
<p className="text-xs text-slate-400">© 2023 GreenSprout Lawn &amp; Garden.</p>
</div>
</div>
</footer>



    </>
  );
}
