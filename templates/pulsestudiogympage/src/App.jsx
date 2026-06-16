import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // 1. General Reveal Animation
            const revealElements = document.querySelectorAll('.reveal');
            
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            revealElements.forEach(element => revealObserver.observe(element));

            // 2. Number Counter Animation
            const statsSection = document.getElementById('stats-section');
            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;

            const animateValue = (obj, start, end, duration) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            };

            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        counters.forEach(counter => {
                            const target = parseInt(counter.getAttribute('data-target'));
                            animateValue(counter, 0, target, 2000); // 2 second duration
                        });
                    }
                });
            }, {
                threshold: 0.5
            });

            if(statsSection) {
                statsObserver.observe(statsSection);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 reveal active">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:activity" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-semibold tracking-tight text-lg uppercase">Pulse<span className="text-neutral-500">Studio</span></span>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors reveal active delay-100" href="#booking">
                Frisco, TX
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse"></div>
</a>
<a className="bg-white text-black text-sm font-medium py-2 px-4 rounded hover:bg-neutral-200 transition-all reveal active delay-200" href="#booking">
                Book Intro
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

<div className="absolute inset-0 z-0">
<img alt="High intensity training" className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-medium tracking-wide mb-8 uppercase">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
                    Frisco, Texas
                </div>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-tight mb-6">
                Train With Purpose.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Get Real Results.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Private and small-group training built for busy professionals who want accountability, not excuses.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black text-sm font-semibold py-4 px-8 rounded transition-all transform hover:-translate-y-1 text-center shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]" href="#booking">
                    Book a Free Intro
                </a>
<a className="group w-full sm:w-auto bg-transparent border border-white/20 hover:border-white text-white text-sm font-medium py-4 px-8 rounded transition-all hover:bg-white/5 text-center flex items-center justify-center gap-2" href="#programs">
                    View Programs
                    <iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 overflow-hidden rounded-lg reveal">

<div className="bg-neutral-900/50 p-10 md:p-16 relative group transition-colors duration-500 hover:bg-neutral-900">
<div className="absolute top-0 left-0 w-full h-1 bg-lime-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-8 flex items-center gap-3">
<span className="text-lime-400">THIS IS FOR YOU</span> IF...
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-lime-400">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">You want structured training</h4>
<p className="text-sm text-neutral-400 mt-1">No guesswork. Every rep is programmed for your specific physiology.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-lime-400">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">You value coaching and accountability</h4>
<p className="text-sm text-neutral-400 mt-1">You need someone in your corner pushing you past your comfort zone.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-lime-400">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">You’re serious about results</h4>
<p className="text-sm text-neutral-400 mt-1">You are ready to invest time, effort, and resources into your health.</p>
</div>
</li>
</ul>
</div>

<div className="bg-neutral-950 p-10 md:p-16 relative transition-colors duration-500 hover:bg-neutral-900/80">
<h3 className="text-2xl font-semibold text-neutral-400 tracking-tight mb-8 flex items-center gap-3">
<span className="text-neutral-600">THIS IS NOT FOR YOU</span> IF...
                    </h3>
<ul className="space-y-6 opacity-60">
<li className="flex items-start gap-4 grayscale">
<div className="mt-1 text-neutral-500">
<iconify-icon icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-neutral-300 font-medium">You want the cheapest option</h4>
<p className="text-sm text-neutral-500 mt-1">We are a premium service. If price is the only factor, we aren't a fit.</p>
</div>
</li>
<li className="flex items-start gap-4 grayscale">
<div className="mt-1 text-neutral-500">
<iconify-icon icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-neutral-300 font-medium">You avoid hard work</h4>
<p className="text-sm text-neutral-500 mt-1">Results require sweat. If you want a magic pill, look elsewhere.</p>
</div>
</li>
<li className="flex items-start gap-4 grayscale">
<div className="mt-1 text-neutral-500">
<iconify-icon icon="lucide:x-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-neutral-300 font-medium">You’re not ready to commit</h4>
<p className="text-sm text-neutral-500 mt-1">Inconsistency kills progress. We work with committed individuals.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Elite Programming</h2>
<p className="text-neutral-400 max-w-xl text-lg">Choose the vehicle for your transformation. No hidden fees, just pure value.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="card-hover reveal bg-neutral-900 border border-white/5 rounded-xl p-8 hover:border-lime-500/30 flex flex-col group">
<div className="mb-6 p-3 bg-neutral-800 w-fit rounded-lg text-white group-hover:text-lime-400 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Small Group Training</h3>
<p className="text-neutral-400 text-sm mb-8 h-10">High energy environment with personalized attention in a team setting.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> 3x Sessions / Week
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> High Energy Atmosphere
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Most Affordable Entry
                        </li>
</ul>
<a className="w-full block text-center border border-white/10 hover:bg-white hover:text-black text-white py-3 rounded text-sm font-medium transition-colors" href="#booking">Inquire Now</a>
</div>

<div className="card-hover reveal delay-100 bg-neutral-900 border border-lime-500/50 rounded-xl p-8 relative shadow-[0_0_30px_rgba(132,204,22,0.1)] flex flex-col transform md:-translate-y-4 group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-500 text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                        Most Popular
                    </div>
<div className="mb-6 p-3 bg-lime-500 w-fit rounded-lg text-black">
<iconify-icon icon="lucide:dumbbell" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">1-on-1 Personal Training</h3>
<p className="text-neutral-400 text-sm mb-8 h-10">The gold standard. 100% focus on you, your mechanics, and your goals.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-lime-400" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Fully Customized Plan
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-lime-400" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Nutrition Guidance
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-lime-400" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Maximum Accountability
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-lime-400" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Biometrics Tracking
                        </li>
</ul>
<a className="w-full block text-center bg-lime-400 hover:bg-lime-500 text-black py-3 rounded text-sm font-semibold transition-colors shadow-lg shadow-lime-500/20" href="#booking">Inquire Now</a>
</div>

<div className="card-hover reveal delay-200 bg-neutral-900 border border-white/5 rounded-xl p-8 hover:border-lime-500/30 flex flex-col group">
<div className="mb-6 p-3 bg-neutral-800 w-fit rounded-lg text-white group-hover:text-lime-400 transition-colors">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Hybrid Coaching</h3>
<p className="text-neutral-400 text-sm mb-8 h-10">Best of both worlds. Train with us in-person and follow our app at home.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> In-Person + Remote
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> Flexible Schedule
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-lime-500" icon="lucide:check" strokeWidth="1.5"></iconify-icon> App Access 24/7
                        </li>
</ul>
<a className="w-full block text-center border border-white/10 hover:bg-white hover:text-black text-white py-3 rounded text-sm font-medium transition-colors" href="#booking">Inquire Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="stats-section">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12 reveal">
<div className="text-center md:text-left">
<p className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tighter tabular-nums">
<span className="counter" data-target="200">0</span>+
                    </p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Clients Trained</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tighter tabular-nums">
<span className="counter" data-target="5000">0</span>+
                    </p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Sessions Coached</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tighter tabular-nums">
<span className="counter" data-target="100">0</span>%
                    </p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Commitment</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl md:text-5xl font-semibold text-lime-400 mb-2 tracking-tighter">Frisco</p>
<p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Texas Based</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 bg-neutral-950 p-8 rounded-lg relative card-hover border border-transparent hover:border-white/5">
<div className="text-lime-500 mb-6">
<iconify-icon icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6 text-sm">"I've joined five gyms in Frisco over the last decade. I quit all of them within 3 months. Pulse is different. The accountability here is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold text-white">MK</div>
<div>
<p className="text-white text-sm font-semibold">Michael K.</p>
<p className="text-neutral-500 text-xs">Executive</p>
</div>
</div>
</div>

<div className="reveal delay-200 bg-neutral-950 p-8 rounded-lg relative card-hover border border-transparent hover:border-white/5">
<div className="text-lime-500 mb-6">
<iconify-icon icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6 text-sm">"Coach Alex doesn't let you settle for mediocrity. I’ve dropped 15% body fat, but more importantly, I have my energy back for my kids."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold text-white">SJ</div>
<div>
<p className="text-white text-sm font-semibold">Sarah J.</p>
<p className="text-neutral-500 text-xs">Attorney</p>
</div>
</div>
</div>

<div className="reveal delay-300 bg-neutral-950 p-8 rounded-lg relative card-hover border border-transparent hover:border-white/5">
<div className="text-lime-500 mb-6">
<iconify-icon icon="lucide:quote" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6 text-sm">"The investment is worth every penny. If you are tired of guessing what to do in the gym, just sign up. Real professional training."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold text-white">DR</div>
<div>
<p className="text-white text-sm font-semibold">David R.</p>
<p className="text-neutral-500 text-xs">Business Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 relative reveal">
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 relative group">
<img alt="Coach Alex Ramirez" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-white text-xl font-semibold tracking-tight">Coach Alex Ramirez</p>
<p className="text-lime-400 text-sm font-medium">Head Trainer &amp; Founder</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 reveal delay-100">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Built on Experience.<br/>Focused on Longevity.</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        I founded Pulse Performance Studio because I was tired of seeing people waste years in the gym with zero results. Fitness isn't about killing yourself for an hour; it's about structured, sustainable progression.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/5 flex items-center justify-center text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors duration-300">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-200 text-sm">Certified Personal Trainer</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/5 flex items-center justify-center text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors duration-300">
<iconify-icon icon="lucide:history" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-200 text-sm">10+ Years Industry Experience</span>
</li>
<li className="flex items-center gap-3 group">
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/5 flex items-center justify-center text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-colors duration-300">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-200 text-sm">Focus on Sustainable Results</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-lime-500 text-neutral-950 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 p-32 bg-lime-400 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                Your First Session Is Free.<br/>Your Results Aren’t.
            </h2>
<p className="text-neutral-800 text-lg font-medium mb-10 max-w-2xl mx-auto">
                We only accept a limited number of new clients each month to maintain quality. Claim your spot before the roster fills up.
            </p>
<a className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded text-sm font-semibold hover:bg-neutral-800 transition-all hover:scale-105 shadow-xl" href="#booking">
                Book Free Intro Session
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<p className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-700 flex items-center justify-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Limited spots available this month
            </p>
</div>
</section>

<section className="py-24 bg-neutral-950" id="booking">
<div className="max-w-xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Apply for Membership</h2>
<p className="text-neutral-400 text-sm">Fill out the form below to schedule your free intro. Serious inquiries only.</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors placeholder-neutral-600 focus:bg-neutral-900/80" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors placeholder-neutral-600 focus:bg-neutral-900/80" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Phone Number</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors placeholder-neutral-600 focus:bg-neutral-900/80" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Primary Goal</label>
<select className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors appearance-none cursor-pointer focus:bg-neutral-900/80">
<option>Lose Weight &amp; Tone Up</option>
<option>Build Muscle &amp; Strength</option>
<option>Improve Athletic Performance</option>
<option>General Health &amp; Longevity</option>
</select>
<div className="absolute right-4 bottom-3.5 text-neutral-500 pointer-events-none">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 rounded transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group shadow-lg hover:shadow-lime-500/20" type="submit">
                    Apply Now
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</section>
<footer className="py-12 bg-black border-t border-white/5 text-center reveal">
<div className="flex items-center justify-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity">
<iconify-icon className="text-white text-lg" icon="lucide:activity" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-semibold tracking-tight uppercase text-sm">Pulse<span className="text-neutral-500">Studio</span></span>
</div>
<p className="text-neutral-600 text-xs">
            © 2024 Pulse Performance Studio. Frisco, Texas. All Rights Reserved.
        </p>
</footer>



    </>
  );
}
