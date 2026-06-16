import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
kivi: {
blue: '#0B7FD4',
navy: '#0A2540',
body: '#6B7B8D',
green: '#00C26A',
greenHover: '#00A856',
bg: '#F8FAFB',
alt: '#EFF6FB',
darker: '#071A2E',
warn: '#F59E0B'
}
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
boxShadow: {
'cta': '0 2px 8px rgba(0, 194, 106, 0.25)',
'card': '0 4px 16px rgba(10, 37, 64, 0.08)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="font-display font-bold text-2xl text-kivi-navy tracking-tight">Kivi</span>
<span className="w-2 h-2 rounded-full bg-kivi-blue mt-1"></span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-kivi-navy hover:text-kivi-blue relative group transition-colors" href="#">
                    Services
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-kivi-blue transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-kivi-navy hover:text-kivi-blue relative group transition-colors" href="#">
                    Health Plans
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-kivi-blue transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-kivi-navy hover:text-kivi-blue relative group transition-colors" href="#">
                    How It Works
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-kivi-blue transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-kivi-navy hover:text-kivi-blue relative group transition-colors" href="#">
                    Locations
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-kivi-blue transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-kivi-navy hover:text-kivi-blue relative group transition-colors" href="#">
                    About
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-kivi-blue transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden lg:block text-sm font-medium text-kivi-navy hover:text-kivi-blue transition-colors" href="tel:8018007256">(801) 800-7256</a>
<a className="bg-kivi-green hover:bg-kivi-greenHover text-white text-sm font-medium px-6 py-3 rounded-[10px] shadow-cta transition-all hover:scale-[1.02] active:scale-95" href="#book">
                    Book Free Evaluation
                </a>

<label className="lg:hidden cursor-pointer text-kivi-navy p-2" htmlFor="mobile-menu-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</label>
</div>
</div>

<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden" id="mobile-menu">
<div className="flex flex-col p-6 gap-4">
<a className="text-base font-medium text-kivi-navy py-2 border-b border-gray-50" href="#">Services</a>
<a className="text-base font-medium text-kivi-navy py-2 border-b border-gray-50" href="#">Health Plans</a>
<a className="text-base font-medium text-kivi-navy py-2 border-b border-gray-50" href="#">How It Works</a>
<a className="text-base font-medium text-kivi-navy py-2 border-b border-gray-50" href="#">Locations</a>
<a className="text-base font-medium text-kivi-navy py-2 border-b border-gray-50" href="#">About</a>
<a className="text-base font-medium text-kivi-blue py-2" href="tel:8018007256">Call (801) 800-7256</a>
</div>
</div>
</nav>

<section className="relative bg-kivi-bg pt-12 pb-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl animate-fade-in-up">
<span className="inline-block text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-4">Utah's Preprimary Care Clinic</span>
<h1 className="font-display font-bold text-4xl lg:text-6xl text-kivi-navy tracking-tight leading-[1.1] mb-6">
                        Get Out of Pain.<br/>Stay at Your Best.
                    </h1>
<p className="text-lg lg:text-xl text-kivi-body leading-relaxed mb-8 font-normal">
                        Unlimited injury recovery, sports bodywork, and wellness coaching — all for one affordable monthly membership. No referrals. No waiting. Walk in anytime.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center bg-kivi-green hover:bg-kivi-greenHover text-white font-medium text-base px-8 py-4 rounded-[10px] shadow-cta transition-all hover:scale-[1.02]" href="#book">
                            Book Your Free Evaluation
                        </a>
<a className="inline-flex justify-center items-center text-kivi-blue font-medium text-base px-8 py-4 border-2 border-transparent hover:border-kivi-blue rounded-[10px] transition-all group" href="#plans">
                            View Health Plans &amp; Pricing 
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>

<div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-gray-200/60">
<div className="flex items-center gap-2 text-sm font-medium text-kivi-navy">
<iconify-icon className="text-kivi-blue" icon="solar:star-bold"></iconify-icon>
                            4.9 on Google
                        </div>
<div className="hidden sm:block w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-2 text-sm font-medium text-kivi-navy">
<iconify-icon className="text-kivi-blue" icon="solar:users-group-rounded-linear"></iconify-icon>
                            500+ Patients Served
                        </div>
<div className="hidden sm:block w-px h-4 bg-gray-300"></div>
<div className="flex items-center gap-2 text-sm font-medium text-kivi-navy">
<iconify-icon className="text-kivi-blue" icon="solar:door-open-linear"></iconify-icon>
                            Walk-ins Welcome
                        </div>
</div>
</div>

<div className="relative h-full w-full min-h-[400px] lg:min-h-[600px] rounded-[16px] overflow-hidden shadow-card group">
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-kivi-body/50 bg-[url('https://kiviwellness.com/wp-content/uploads/2026/01/20240109_122654-1024x1012.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
<span className="sr-only">Modern wellness clinic interior</span>
</div>

<div className="mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-alt">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">Why Kivi</span>
<h2 className="font-display font-semibold text-3xl lg:text-5xl text-kivi-navy tracking-tight mb-6">Healthcare That Happens Before You Need a Doctor</h2>
<p className="text-lg text-kivi-body leading-relaxed">
                    Most people only see a provider when something goes wrong. Kivi flips that model. We give you unlimited access to injury recovery, bodywork, diagnostics, and coaching — so you stay healthy, recover fast, and avoid costly medical bills. Think of it as a gym membership for your body's maintenance.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-end">

<div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
<div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-400">
<iconify-icon height="28" icon="solar:hospital-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-kivi-navy mb-4">Traditional Healthcare</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            Wait weeks for appointments
                        </li>
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            Insurance complications
                        </li>
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            $200+ per visit
                        </li>
</ul>
</div>

<div className="relative bg-white p-8 rounded-[16px] border-2 border-kivi-blue shadow-card transform md:-translate-y-4 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kivi-green text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Recommended</div>
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 text-kivi-blue">
<iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-display font-semibold text-2xl text-kivi-navy mb-4">Kivi Preprimary Care</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-kivi-navy font-medium">
<iconify-icon className="text-kivi-green mt-0.5 min-w-[20px]" icon="solar:check-circle-bold"></iconify-icon>
                            Walk in anytime
                        </li>
<li className="flex items-start gap-3 text-base text-kivi-navy font-medium">
<iconify-icon className="text-kivi-green mt-0.5 min-w-[20px]" icon="solar:check-circle-bold"></iconify-icon>
                            Unlimited access
                        </li>
<li className="flex items-start gap-3 text-base text-kivi-navy font-medium">
<iconify-icon className="text-kivi-green mt-0.5 min-w-[20px]" icon="solar:check-circle-bold"></iconify-icon>
                            One monthly membership
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
<div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-400">
<iconify-icon height="28" icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-kivi-navy mb-4">Urgent Care / ER</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            Expensive and reactive
                        </li>
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            Treats symptoms only
                        </li>
<li className="flex items-start gap-3 text-sm text-kivi-body">
<iconify-icon className="text-red-400 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
                            No ongoing relationship
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">Our Services</span>
<h2 className="font-display font-semibold text-3xl lg:text-4xl text-kivi-navy tracking-tight">Everything Your Body Needs Under One Roof</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:clipboard-check-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Free Injury Evaluations</h3>
<p className="text-sm text-kivi-body mb-6">Get answers in 1-2 days, not weeks. No cost, no commitment.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:hand-heart-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Sports Massage</h3>
<p className="text-sm text-kivi-body mb-6">Deep tissue, fascia release, and pinpoint therapy to eliminate tension.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:running-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Assisted Stretching</h3>
<p className="text-sm text-kivi-body mb-6">Guided sessions to restore range of motion and prevent injury.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Recovery Therapies</h3>
<p className="text-sm text-kivi-body mb-6">Cupping, compression, muscle stim, contrast therapy, and more.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:monitor-camera-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Ultrasound Diagnostics</h3>
<p className="text-sm text-kivi-body mb-6">On-site imaging to diagnose injuries quickly and affordably.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:phone-calling-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Telemedicine Visits</h3>
<p className="text-sm text-kivi-body mb-6">24/7 access to licensed providers from anywhere.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Health Coaching</h3>
<p className="text-sm text-kivi-body mb-6">Nutrition plans, stability training, and blood analysis.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 rounded-full bg-kivi-alt flex items-center justify-center mb-6 group-hover:bg-kivi-blue transition-colors">
<iconify-icon className="text-kivi-blue group-hover:text-white transition-colors" height="28" icon="solar:stars-linear" width="28"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg text-kivi-navy mb-3">Advanced Treatments</h3>
<p className="text-sm text-kivi-body mb-6">PRP injections, cortisone, photobiomodulation, and red-light.</p>
<a className="text-sm font-medium text-kivi-blue flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span className="text-lg">→</span></a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-alt" id="plans">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">Health Plans</span>
<h2 className="font-display font-semibold text-3xl lg:text-4xl text-kivi-navy tracking-tight mb-4">Simple Monthly Plans. Unlimited Access.</h2>
<p className="text-lg text-kivi-body">No contracts. No insurance needed. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-[16px] shadow-sm border border-gray-100 relative">
<h3 className="font-display font-semibold text-xl text-kivi-navy mb-1">Maintenance</h3>
<p className="text-sm text-kivi-body mb-6">Active recovery &amp; injury prevention</p>
<div className="text-3xl font-bold text-kivi-navy mb-8">$XXX<span className="text-base font-normal text-kivi-body">/mo</span></div>
<a className="block w-full text-center text-kivi-blue font-medium py-3 rounded-[10px] border-2 border-kivi-blue hover:bg-kivi-blue hover:text-white transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Muscle energy adjustments</li>
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Pinpoint release therapy</li>
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Cupping &amp; Compression</li>
</ul>
</div>

<div className="bg-white p-10 rounded-[16px] shadow-card border-2 border-kivi-green/20 relative transform scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kivi-green text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="font-display font-semibold text-2xl text-kivi-navy mb-1">Performance</h3>
<p className="text-sm text-kivi-body mb-6">Injuries &amp; peak performance</p>
<div className="text-4xl font-bold text-kivi-navy mb-8">$XXX<span className="text-lg font-normal text-kivi-body">/mo</span></div>
<a className="block w-full text-center bg-kivi-green hover:bg-kivi-greenHover text-white font-medium py-4 rounded-[10px] shadow-cta transition-transform hover:scale-[1.02] mb-8" href="#book">Start Free Evaluation</a>
<p className="text-xs font-semibold text-kivi-navy uppercase tracking-wide mb-4">Everything in Maintenance, plus:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-kivi-navy"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Sports massage techniques</li>
<li className="flex items-start gap-3 text-base text-kivi-navy"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Fascia stretch &amp; trigger</li>
<li className="flex items-start gap-3 text-base text-kivi-navy"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Assisted stretching &amp; Mobility</li>
</ul>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-sm border border-gray-100 relative">
<h3 className="font-display font-semibold text-xl text-kivi-navy mb-1">Transformation</h3>
<p className="text-sm text-kivi-body mb-6">Total body transformation</p>
<div className="text-3xl font-bold text-kivi-navy mb-8">$XXX<span className="text-base font-normal text-kivi-body">/mo</span></div>
<a className="block w-full text-center text-kivi-blue font-medium py-3 rounded-[10px] border-2 border-kivi-blue hover:bg-kivi-blue hover:text-white transition-colors mb-8" href="#">Get Started</a>
<p className="text-xs font-semibold text-kivi-navy uppercase tracking-wide mb-4">Everything in Performance, plus:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>4 coaching sessions/mo</li>
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Monthly training program</li>
<li className="flex items-start gap-3 text-sm text-kivi-body"><iconify-icon className="text-kivi-green shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>Monthly nutrition plan</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-kivi-body mb-4">Not sure which plan is right for you? Book a free evaluation and we'll recommend the best fit.</p>
<a className="inline-flex justify-center items-center bg-kivi-green hover:bg-kivi-greenHover text-white font-medium text-sm px-6 py-3 rounded-[10px] shadow-cta transition-all hover:scale-[1.02]" href="#book">
                    Book Free Evaluation
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-bg overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">Patient Stories</span>
<h2 className="font-display font-semibold text-3xl lg:text-4xl text-kivi-navy tracking-tight">Real Results from Real People</h2>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 -mx-4 hide-scroll">

<div className="min-w-[85vw] md:min-w-[450px] snap-center bg-white p-8 rounded-[16px] shadow-card border-l-4 border-kivi-blue flex flex-col">
<iconify-icon className="text-kivi-blue/20 mb-4" height="48" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-kivi-navy mb-3">"An amazing asset to my son's recovery"</h3>
<p className="text-kivi-body text-base flex-grow mb-6">"Kivi has been an amazing asset to my son's recovery. He has had multiple injuries in the last few months and they've been attentive to what he needs for each one. The staff is amazing and we highly recommend Kivi."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<span className="font-semibold text-kivi-navy text-sm">Tami D.</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] snap-center bg-white p-8 rounded-[16px] shadow-card border-l-4 border-kivi-blue flex flex-col">
<iconify-icon className="text-kivi-blue/20 mb-4" height="48" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-kivi-navy mb-3">"I was able to run a 5k with my family"</h3>
<p className="text-kivi-body text-base flex-grow mb-6">"After back surgery, I had bouts of instability. Kivi has been able to get me balanced and back to my regular exercise routines! I was able to run a 5k this summer with my family because of the Kivi employees helping to keep my body in alignment!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<span className="font-semibold text-kivi-navy text-sm">Rebecca L.</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] snap-center bg-white p-8 rounded-[16px] shadow-card border-l-4 border-kivi-blue flex flex-col">
<iconify-icon className="text-kivi-blue/20 mb-4" height="48" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-kivi-navy mb-3">"For competitive athletes or everyday fitness"</h3>
<p className="text-kivi-body text-base flex-grow mb-6">"The staff is friendly, professional, and knowledgeable. They always take their time to evaluate you as a person and address your needs. Whether you are a competitive athlete or someone who simply incorporates a fitness routine into your every day life."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<span className="font-semibold text-kivi-navy text-sm">Nicole L.</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] snap-center bg-white p-8 rounded-[16px] shadow-card border-l-4 border-kivi-blue flex flex-col">
<iconify-icon className="text-kivi-blue/20 mb-4" height="48" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-kivi-navy mb-3">"Full mobility after 3 years of frozen shoulder"</h3>
<p className="text-kivi-body text-base flex-grow mb-6">"These guys really know what they are doing. Ian has only worked on my shoulder 3 times and I have almost full mobility after suffering with frozen shoulder for 3 years! I had already tried a number of other places for therapy."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<span className="font-semibold text-kivi-navy text-sm">Jeannine U.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-alt">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">How It Works</span>
<h2 className="font-display font-semibold text-3xl lg:text-4xl text-kivi-navy tracking-tight">Getting Started Takes 5 Minutes</h2>
</div>
<div className="relative grid md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border-2 border-kivi-blue flex items-center justify-center text-2xl font-bold text-kivi-blue shadow-sm mb-6">1</div>
<h3 className="font-display font-medium text-xl text-kivi-navy mb-3">Book Your Free Evaluation</h3>
<p className="text-sm text-kivi-body leading-relaxed max-w-xs">Schedule online or walk in. We'll assess your needs and create a plan at no cost.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border-2 border-kivi-blue flex items-center justify-center text-2xl font-bold text-kivi-blue shadow-sm mb-6">2</div>
<h3 className="font-display font-medium text-xl text-kivi-navy mb-3">Choose Your Plan</h3>
<p className="text-sm text-kivi-body leading-relaxed max-w-xs">We'll recommend the right membership tier based on your goals and condition.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full bg-white border-2 border-kivi-blue flex items-center justify-center text-2xl font-bold text-kivi-blue shadow-sm mb-6">3</div>
<h3 className="font-display font-medium text-xl text-kivi-navy mb-3">Start Healing Immediately</h3>
<p className="text-sm text-kivi-body leading-relaxed max-w-xs">Come in as often as you want. No appointments needed for most services.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center bg-kivi-green hover:bg-kivi-greenHover text-white font-medium text-base px-8 py-4 rounded-[10px] shadow-cta transition-all hover:scale-[1.02]" href="#book">
                    Book Your Free Evaluation
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-kivi-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-kivi-blue tracking-[0.15em] uppercase mb-3 block">Locations</span>
<h2 className="font-display font-semibold text-3xl lg:text-4xl text-kivi-navy tracking-tight">Find a Kivi Near You</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-8">

<div className="bg-white p-8 rounded-[16px] shadow-card border border-gray-50 flex flex-col">
<h3 className="font-display font-semibold text-xl text-kivi-navy mb-2">Athlecare Draper, Utah</h3>
<p className="text-kivi-body mb-8 flex-grow">656 East 11400 South, Suite K<br/>Draper, UT 84020</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex-1 text-center py-3 border-2 border-kivi-blue text-kivi-blue font-medium rounded-[10px] hover:bg-kivi-blue hover:text-white transition-colors" href="#">Get Directions</a>
<a className="flex-1 text-center py-3 bg-kivi-green text-white font-medium rounded-[10px] hover:bg-kivi-greenHover shadow-cta transition-transform hover:scale-[1.02]" href="#">Book Here</a>
</div>
</div>

<div className="bg-white p-8 rounded-[16px] shadow-card border border-gray-50 flex flex-col">
<h3 className="font-display font-semibold text-xl text-kivi-navy mb-2">Athlecare Pleasant Grove, Utah</h3>
<p className="text-kivi-body mb-8 flex-grow">564 West 700 South, Suite 204<br/>Pleasant Grove, UT 84062</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex-1 text-center py-3 border-2 border-kivi-blue text-kivi-blue font-medium rounded-[10px] hover:bg-kivi-blue hover:text-white transition-colors" href="#">Get Directions</a>
<a className="flex-1 text-center py-3 bg-kivi-green text-white font-medium rounded-[10px] hover:bg-kivi-greenHover shadow-cta transition-transform hover:scale-[1.02]" href="#">Book Here</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="border-2 border-dashed border-gray-200 p-8 rounded-[16px] flex items-center justify-center min-h-[160px] bg-gray-50/50">
<span className="text-gray-400 font-medium text-lg">New Location — Coming Soon</span>
</div>

<div className="border-2 border-dashed border-gray-200 p-8 rounded-[16px] flex items-center justify-center min-h-[160px] bg-gray-50/50">
<span className="text-gray-400 font-medium text-lg">New Location — Coming Soon</span>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-kivi-blue font-medium text-sm hover:underline" href="#">Interested in bringing Kivi to your area? Learn about franchise opportunities →</a>
</div>
</div>
</section>

<section className="py-12 bg-kivi-alt border-t border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-kivi-navy/60 mb-8 uppercase tracking-wider">Trusted by Athletes and Organizations Across Utah</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
<div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center text-xs text-white font-bold">Partner Logo</div>
</div>
</div>
</section>

<section className="py-32 bg-kivi-navy" id="book">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight mb-6">Your Body Deserves Better Than Waiting Until It Breaks</h2>
<p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">Book a free injury evaluation today. Walk out with answers and a plan — no commitment, no cost.</p>
<button className="bg-kivi-green hover:bg-kivi-greenHover text-white font-medium text-lg px-10 py-5 rounded-[10px] shadow-cta transition-transform hover:scale-[1.02] mb-6">
                Book Your Free Evaluation
            </button>
<div className="text-white/60 text-sm">Or call us: <a className="hover:text-white underline decoration-1 underline-offset-4 transition-colors" href="tel:8018007256">(801) 800-7256</a></div>
</div>
</section>

<footer className="bg-kivi-darker text-white pt-20 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<a className="flex items-center gap-1 mb-4" href="#">
<span className="font-display font-bold text-2xl text-white tracking-tight">Kivi</span>
<span className="w-2 h-2 rounded-full bg-kivi-blue mt-1"></span>
</a>
<p className="text-white/60 text-sm mb-6">Health. Wellness. Longevity.</p>
<div className="flex flex-col gap-2 text-sm text-white/80">
<a className="hover:text-white transition-colors" href="tel:8018007256">(801) 800-7256</a>
<a className="hover:text-white transition-colors" href="mailto:info@kiviwellness.com">info@kiviwellness.com</a>
</div>
</div>

<div>
<h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Health Plans</a></li>
<li><a className="hover:text-white transition-colors" href="#">How It Works</a></li>
</ul>
</div>

<div>
<h4 className="font-display font-semibold text-white mb-6">Company</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Franchise Opportunities</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-display font-semibold text-white mb-6">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon height="24" icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
</div>
<a className="text-sm text-kivi-blue hover:text-white transition-colors flex items-center gap-2" href="#">
                    Download Our App <span className="text-lg">→</span>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center md:text-left">
<p className="text-xs text-white/40">© 2026 Kivi Wellness. All Rights Reserved.</p>
</div>
</footer>

    </>
  );
}
