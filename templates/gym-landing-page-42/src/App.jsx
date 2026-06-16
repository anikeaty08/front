import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple script for mobile menu toggle
        const btn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const menu = document.getElementById('navbar-sticky');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tighter text-white">SOLEUS<span className="text-lime-400">GYM</span></span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-lime-400 rounded-full hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/20 transition-all duration-300" href="#contact">
                    Join Now
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg md:hidden hover:bg-neutral-800 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-neutral-800 rounded-lg bg-neutral-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-neutral-400 hover:text-lime-400 md:p-0 transition-colors" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-neutral-400 hover:text-lime-400 md:p-0 transition-colors" href="#facilities">Facilities</a></li>
<li><a className="block py-2 px-3 text-neutral-400 hover:text-lime-400 md:p-0 transition-colors" href="#pricing">Membership</a></li>
<li><a className="block py-2 px-3 text-neutral-400 hover:text-lime-400 md:p-0 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                Now Open in Prafulla Kanan
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium uppercase tracking-tight leading-none mb-6">
                Transform Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">Body &amp; Mind</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                Join Soleus Gym – where discipline meets results. Experience premium equipment, expert guidance, and a community built on strength.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-lime-400 rounded-full hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]" href="tel:09007119119">
<iconify-icon className="mr-2" icon="lucide:phone" width="20"></iconify-icon> Call Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm rounded-full hover:bg-neutral-800 transition-all hover:border-lime-400/50" href="#pricing">
                    View Plans
                </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-400 font-medium">
<div className="flex text-lime-400">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star-half" width="16"></iconify-icon>
</div>
<span>4.5 Rating on Google</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight uppercase">
                        More Than Just <span className="text-lime-400">Iron</span>
</h2>
<p className="text-neutral-400 leading-relaxed">
                        At Soleus Gym, we believe that fitness is not just about lifting weights—it's about elevating your lifestyle. Located in the heart of Kolkata, our facility is designed to provide a motivating atmosphere for everyone, from beginners to elite athletes.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-lime-400/10 text-lime-400">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-300">Certified Trainers with personalized guidance.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-lime-400/10 text-lime-400">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-300">Supportive community that pushes you further.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-lime-400/10 text-lime-400">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-neutral-300">Modern equipment for strength, cardio, and functional training.</span>
</li>
</ul>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<img alt="Gym Interior" className="relative w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="facilities">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight uppercase mb-4">World Class <span className="text-lime-400">Facilities</span></h2>
<p className="text-neutral-400 max-w-xl mx-auto">Everything you need to sculpt your physique and improve your endurance under one roof.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:dumbbell" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Strength Zone</h3>
<p className="text-sm text-neutral-500">Free weights, squat racks, and advanced isolation machines.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Cardio Suite</h3>
<p className="text-sm text-neutral-500">Treadmills, ellipticals, and cycles to boost your endurance.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Personal Training</h3>
<p className="text-sm text-neutral-500">1-on-1 coaching customized to your specific body goals.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Hygiene &amp; Safe</h3>
<p className="text-sm text-neutral-500">Sanitized environment with well-maintained equipment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight uppercase">Inside <span className="text-lime-400">The Grind</span></h2>
<p className="text-neutral-500 text-sm mt-4 md:mt-0">Follow us on Instagram for daily motivation.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
<img alt="Gym Floor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-wide border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">Strength Area</span>
</div>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Weights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Cardio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl">
<img alt="Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight uppercase mb-4">Membership <span className="text-lime-400">Plans</span></h2>
<p className="text-neutral-400">Flexible options designed for your commitment level.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative flex flex-col p-8 bg-neutral-900/30 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Quarterly</h3>
<p className="text-3xl font-semibold text-white tracking-tight mb-6">₹4,200<span className="text-sm text-neutral-500 font-normal">/3mo</span></p>
<p className="text-sm text-neutral-400 mb-8">Commit to a season of change. Great for beginners.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> Full Gym Access</li>
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> General Training</li>
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> Locker Facility</li>
</ul>
<a className="w-full py-3 rounded-lg border border-neutral-700 text-white font-medium text-center hover:bg-neutral-800 transition" href="#contact">Inquire Now</a>
</div>

<div className="relative flex flex-col p-8 bg-neutral-900 border border-lime-400/30 rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.05)] transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-lime-400 text-black text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
<h3 className="text-lg font-medium text-lime-400 mb-2">Monthly</h3>
<div className="flex items-baseline gap-1 mb-6">
<p className="text-4xl font-semibold text-white tracking-tight">₹1,500</p>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8">Start your journey today with no long-term lock-in.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-white gap-3"><iconify-icon className="text-lime-400" icon="lucide:check-circle"></iconify-icon> Full Gym Access</li>
<li className="flex items-center text-sm text-white gap-3"><iconify-icon className="text-lime-400" icon="lucide:check-circle"></iconify-icon> Cardio &amp; Strength</li>
<li className="flex items-center text-sm text-white gap-3"><iconify-icon className="text-lime-400" icon="lucide:check-circle"></iconify-icon> Free Diet Consultation</li>
</ul>
<a className="w-full py-3 rounded-lg bg-lime-400 text-black font-semibold text-center hover:bg-lime-300 transition shadow-[0_0_15px_rgba(163,230,53,0.4)]" href="tel:09007119119">Choose Plan</a>
</div>

<div className="relative flex flex-col p-8 bg-neutral-900/30 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Annual</h3>
<p className="text-3xl font-semibold text-white tracking-tight mb-6">₹12,000<span className="text-sm text-neutral-500 font-normal">/yr</span></p>
<p className="text-sm text-neutral-400 mb-8">Maximum savings for the truly dedicated athlete.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> All Access Pass</li>
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> Priority Support</li>
<li className="flex items-center text-sm text-neutral-300 gap-3"><iconify-icon className="text-lime-400" icon="lucide:check"></iconify-icon> 2 Free PT Sessions</li>
</ul>
<a className="w-full py-3 rounded-lg border border-neutral-700 text-white font-medium text-center hover:bg-neutral-800 transition" href="#contact">Inquire Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight uppercase text-center mb-16">Member <span className="text-lime-400">Stories</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
<div className="flex text-lime-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Excellent gym in Kestopur area. The equipment is top notch and the trainers are very helpful. Best decision I made for my health."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium">R</div>
<div>
<h4 className="text-white text-sm font-medium">Rahul D.</h4>
<p className="text-xs text-neutral-500">Member since 2022</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
<div className="flex text-lime-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Great atmosphere. It's clean, the crowd is decent, and the pricing is unbeatable for the facilities provided. Love the cardio section."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium">S</div>
<div>
<h4 className="text-white text-sm font-medium">Sneha M.</h4>
<p className="text-xs text-neutral-500">Member since 2023</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hidden lg:block">
<div className="flex text-lime-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star-half" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The trainers actually pay attention to your form. Soleus Gym has helped me transform my body in just 6 months. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-medium">A</div>
<div>
<h4 className="text-white text-sm font-medium">Amit K.</h4>
<p className="text-xs text-neutral-500">Member since 2023</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-lime-400/5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight uppercase mb-6">Start Your <span className="text-lime-400">Transformation</span> Today</h2>
<p className="text-lg text-neutral-400 mb-10">Don't wait for the "right time". The iron is waiting. Book your free trial session now.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-lime-400 rounded-full hover:bg-lime-300 transition-all" href="https://wa.me/919007119119">
<iconify-icon className="mr-2" icon="lucide:message-circle" width="20"></iconify-icon> WhatsApp Us
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-neutral-700 bg-black rounded-full hover:bg-neutral-900 transition-all" href="tel:09007119119">
                    Book Free Trial
                </a>
</div>
</div>
</section>

<section className="bg-neutral-950 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
<div className="p-10 flex flex-col justify-center">
<h3 className="text-2xl text-white font-medium uppercase tracking-tight mb-8">Visit Soleus Gym</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Address</p>
<p className="text-neutral-400 text-sm mt-1">BD 203, Kamal Park Rd, Rabindrapally, Kestopur, Kolkata, West Bengal 700101</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Phone</p>
<p className="text-neutral-400 text-sm mt-1">090071 19119</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-lime-400 shrink-0">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Opening Hours</p>
<p className="text-neutral-400 text-sm mt-1">Mon - Sat: 6:00 AM - 10:00 PM<br/>Sun: Closed</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-lime-400 hover:text-lime-300 text-sm font-medium flex items-center gap-2" href="https://goo.gl/maps/generic" target="_blank">
                        Get Directions <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="h-[400px] lg:h-auto w-full bg-neutral-800 relative">
<iframe allowfullscreen="" className="map-filter w-full h-full absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3524276717646!2d88.4239853!3d22.5928136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c047120a17%3A0x6b6771d957134372!2sSoleus%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="mb-6 md:mb-0 text-center md:text-left">
<span className="text-2xl font-bold tracking-tighter text-white">SOLEUS<span className="text-lime-400">GYM</span></span>
<p className="text-neutral-500 text-sm mt-2">Elevate your strength in Kolkata.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2023 Soleus Gym. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
