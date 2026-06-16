import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple counter animation
        const counters = document.querySelectorAll('.counter');
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const increment = target / (duration / 16);
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current) + "+";
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + "+";
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 nav-blur animate-enter">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-heading text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1" href="#">
                Elite<span className="text-green-600">Callab</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-green-600 transition-colors" href="#home">Home</a>
<a className="hover:text-green-600 transition-colors" href="#about">About</a>
<a className="hover:text-green-600 transition-colors" href="#brands-creators">Services</a>
<a className="hover:text-green-600 transition-colors" href="#login">Login</a>
<a className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20" href="#contact">Contact Us</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center items-center pt-24 px-6 relative overflow-hidden" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl text-center space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-xs font-semibold text-green-700 animate-enter uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                Connecting Brands with the Right Creators
            </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 animate-enter delay-100 leading-[1.15]">
                Grow Your Brand with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-green-400">Powerful Influencer Marketing</span>
</h1>
<p className="text-lg md:text-xl font-normal text-slate-500 max-w-2xl mx-auto animate-enter delay-200 leading-relaxed">
                EliteCallab ek trusted influencer marketing agency hai jo brands ko 350+ verified creators ke saath connect karti hai — India se le kar international level tak.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300 pt-6">
<a className="w-full sm:w-auto px-8 py-3.5 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-600/25 flex items-center justify-center gap-2 group" href="#contact">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#login">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                    Join as Creator
                </a>
</div>
</div>
</section>

<section className="py-12 px-6 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="p-4 animate-enter delay-100">
<h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 counter" data-target="350">350+</h3>
<p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Creators Network</p>
</div>
<div className="p-4 animate-enter delay-200">
<h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 counter" data-target="200">200+</h3>
<p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Successful Deals Completed</p>
</div>
<div className="p-4 animate-enter delay-300">
<h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 counter" data-target="50">50+</h3>
<p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">International Collaborations</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 animate-enter">
<span className="text-green-600 font-semibold tracking-wide uppercase text-sm">About EliteCallab</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    Results-driven marketing. Real Impact.
                </h2>
<p className="text-slate-600 leading-relaxed text-lg">
                    EliteCallab ek results-driven influencer marketing agency hai jo brands aur creators ke beech perfect collaboration banati hai. Hum sirf promotion nahi, real impact create karte hain.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-slate-800 font-medium">Trusted &amp; Verified Creators</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-slate-800 font-medium">ROI-Focused Campaigns</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-slate-800 font-medium">Fast &amp; Transparent Process</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:globe-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="text-slate-800 font-medium">Indian + International Reach</span>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-3xl relative animate-enter delay-200 bg-gradient-to-br from-green-50 to-white border-green-100">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl -z-10"></div>
<div className="grid gap-6">
<div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:users-group-two-rounded-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Brand + Creator</h4>
<p className="text-xs text-slate-500">Seamless Connection</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 translate-x-4">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:graph-up-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Campaign Analytics</h4>
<p className="text-xs text-slate-500">Real-time Growth</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="brands-creators">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors group animate-enter delay-100">
<div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">For Brands</h3>
<p className="text-slate-500 text-sm mb-6">Result: More reach, more engagement, more sales 🚀</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-green-600 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                        Influencer Campaign Planning
                    </li>
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-green-600 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                        Instagram Reels &amp; Story Promotions
                    </li>
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-green-600 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                        Product Reviews &amp; Brand Awareness
                    </li>
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-green-600 mt-1" icon="solar:check-circle-linear"></iconify-icon>
                        International Influencer Deals
                    </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-green-600 transition-colors" href="#contact">
                    Hire Creators 
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all group animate-enter delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">For Creators</h3>
<p className="text-slate-400 text-sm mb-6">Grow your influence. Earn with confidence.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-300">
<iconify-icon className="text-green-400 mt-1" icon="solar:star-linear"></iconify-icon>
                        Paid Brand Collaborations
                    </li>
<li className="flex items-start gap-3 text-slate-300">
<iconify-icon className="text-green-400 mt-1" icon="solar:star-linear"></iconify-icon>
                        National &amp; International Deals
                    </li>
<li className="flex items-start gap-3 text-slate-300">
<iconify-icon className="text-green-400 mt-1" icon="solar:star-linear"></iconify-icon>
                        No Fake Promises
                    </li>
<li className="flex items-start gap-3 text-slate-300">
<iconify-icon className="text-green-400 mt-1" icon="solar:star-linear"></iconify-icon>
                        Long-term Brand Relationships
                    </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-white group-hover:text-green-400 transition-colors" href="#login">
                    Join Network
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6" id="login">
<div className="max-w-md mx-auto">
<div className="text-center mb-10 animate-enter">
<h2 className="text-3xl font-bold text-slate-900 mb-2">Login to EliteCallab</h2>
<div className="flex justify-center gap-4 mt-6 bg-slate-100 p-1 rounded-full">
<button className="flex-1 py-2 px-6 rounded-full bg-white text-slate-900 font-medium text-sm shadow-sm transition-all">Brand</button>
<button className="flex-1 py-2 px-6 rounded-full text-slate-500 hover:text-slate-900 font-medium text-sm transition-all">Creator</button>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl animate-enter delay-200 border-t-4 border-t-green-600 shadow-xl">
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide ml-1">Email / Username</label>
<div className="flex items-center px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all">
<iconify-icon className="text-slate-400 mr-3" icon="solar:user-linear"></iconify-icon>
<input className="input-reset w-full text-sm text-slate-900 placeholder-slate-400" placeholder="name@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide ml-1">Password</label>
<a className="text-xs text-green-600 hover:underline" href="#">Forgot Password?</a>
</div>
<div className="flex items-center px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all">
<iconify-icon className="text-slate-400 mr-3" icon="solar:lock-password-linear"></iconify-icon>
<input className="input-reset w-full text-sm text-slate-900 placeholder-slate-400" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full py-3.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all text-sm tracking-tight shadow-lg shadow-green-600/20 active:scale-95" type="button">
                        Login
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">

<div className="max-w-lg space-y-8 animate-enter">
<div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Work Together!</h2>
<p className="text-slate-400 text-lg">
                        Have a brand? Are you a creator?<br/>
                        We’re just one message away 👇
                    </p>
</div>
<div className="space-y-6">
<a className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="mailto:elitecallab@gmail.com">
<div className="w-12 h-12 rounded-full bg-slate-800 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email Us</p>
<span className="text-xl font-medium tracking-tight text-white">elitecallab@gmail.com</span>
</div>
</a>
<a className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="https://instagram.com/elitecallab.official" target="_blank">
<div className="w-12 h-12 rounded-full bg-slate-800 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Follow Us</p>
<span className="text-xl font-medium tracking-tight text-white">elitecallab.official</span>
</div>
</a>
</div>
</div>

<div className="w-full max-w-md bg-white text-slate-900 p-8 rounded-3xl animate-enter delay-200 shadow-2xl shadow-black/20">
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 ml-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="Enter your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 ml-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 ml-1">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all text-sm mt-2 shadow-lg shadow-green-600/25 group flex justify-center items-center gap-2" type="button">
                        Send Message
                        <iconify-icon className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-20 mt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-6">
<p>© 2026 EliteCallab. All Rights Reserved.</p>
<div className="flex gap-8 font-medium">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#login">Login</a>
<a className="hover:text-white transition-colors" href="#contact">Contact Us</a>
</div>
</div>
</section>


    </>
  );
}
