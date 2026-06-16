import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-ktc-red flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">KTC</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-950 transition-colors" href="#">Services</a>
<a className="hover:text-stone-950 transition-colors" href="#">Programs</a>
<a className="hover:text-stone-950 transition-colors" href="#">About</a>
<a className="text-stone-950" href="#">Contact</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden sm:block text-stone-600 hover:text-stone-950" href="#">Sign In</a>
<a className="bg-ktc-red text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" href="#">Enquire Now</a>
</div>
</div>
</nav>

<header className="relative bg-stone-950 py-24 md:py-32 overflow-hidden">
<div className="absolute inset-0 grain-bg pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<nav className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest mb-8">
<span>Home</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-stone-200">Contact</span>
</nav>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl leading-tight">
                Let's Build Something Together
            </h1>
<p className="text-stone-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
                Whether it's a corporate wellness program, a school fitness initiative, or your next big event — we'd love to hear from you.
            </p>
<div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-stone-300 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-ktc-red" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Johannesburg / Pretoria, SA</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-ktc-red" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Responds Within 24 Hours</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-ktc-red" icon="solar:verified-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>10+ Years of Programs</span>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-16">
<span className="text-xs font-semibold tracking-widest text-ktc-red uppercase">Get In Touch</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">

<div className="lg:col-span-6">
<div className="mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-3">Send Us a Message</h2>
<p className="text-stone-500 font-light">Fill in the form below and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-stone-900">Full Name *</label>
<input className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-stone-900 transition-colors text-stone-900 placeholder:text-stone-300" placeholder="John Doe" type="text"/>
</div>
<div className="group relative">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-stone-900">Email Address *</label>
<input className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-stone-900 transition-colors text-stone-900 placeholder:text-stone-300" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-stone-900">Phone / WhatsApp Number</label>
<input className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-stone-900 transition-colors text-stone-900 placeholder:text-stone-300" placeholder="+27" type="tel"/>
</div>
<div className="group relative">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-stone-900">Service Type *</label>
<select className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-stone-900 transition-colors text-stone-900 appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select a Service</option>
<option>Corporate Wellness &amp; Team Building</option>
<option>School Fitness Program (Gr 11-12)</option>
<option>Personal Training</option>
<option>Online Fitness Challenge</option>
<option>Event Registration</option>
<option>General Inquiry</option>
</select>
<iconify-icon className="absolute right-0 bottom-4 pointer-events-none text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="group relative">
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-stone-900">Your Message *</label>
<textarea className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-stone-900 transition-colors text-stone-900 placeholder:text-stone-300 resize-none" placeholder="Tell us about your goals or event needs..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="relative flex items-center h-5">
<input className="w-4 h-4 rounded border-stone-300 text-ktc-red focus:ring-ktc-red cursor-pointer" id="consent" type="checkbox"/>
</div>
<label className="text-sm text-stone-500 font-light leading-tight select-none cursor-pointer" htmlFor="consent">
                            I agree to be contacted by KTC Events regarding my inquiry.
                        </label>
</div>
<button className="bg-ktc-red text-white px-8 py-4 rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-red-900/10 transition-all group">
<span className="font-medium">Send Message</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
<p className="mt-8 flex items-center gap-2 text-xs text-stone-400 font-light">
<iconify-icon icon="solar:lock-password-linear" width="14"></iconify-icon>
                    Your information is safe with us. We never share your details with third parties.
                </p>
</div>

<div className="lg:col-span-4 space-y-6">
<h3 className="text-xl font-semibold text-stone-900 mb-6">Prefer to Reach Out Directly?</h3>

<div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm shadow-stone-200/50 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-900">WhatsApp</h4>
<p className="text-xs text-emerald-600 font-medium">The fastest way to reach us</p>
</div>
</div>
<p className="text-xl font-medium text-stone-800 mb-6">+27 81 578 4590</p>
<a className="flex items-center justify-center gap-2 w-full border border-emerald-600/30 text-emerald-700 py-3 rounded-2xl hover:bg-emerald-50 transition-colors text-sm font-medium" href="https://wa.me/27815784590">
                        Message on WhatsApp
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm shadow-stone-200/50 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-stone-900">Email</h4>
<p className="text-xs text-stone-500">For formal inquiries &amp; proposals</p>
</div>
</div>
<p className="text-lg font-medium text-stone-800 mb-6">hello@ktcevents.co</p>
<a className="flex items-center justify-center gap-2 w-full border border-stone-200 text-stone-700 py-3 rounded-2xl hover:bg-stone-50 transition-colors text-sm font-medium" href="mailto:hello@ktcevents.co">
                        Send Email
                        <iconify-icon icon="solar:letter-opened-linear" width="16"></iconify-icon>
</a>
</div>

<div className="p-8 bg-stone-900 rounded-3xl text-white">
<div className="flex items-center gap-4 mb-6">
<iconify-icon className="text-stone-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<h4 className="font-medium text-stone-200">Response Time</h4>
</div>
<div className="space-y-4 text-sm">
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-stone-400">WhatsApp</span>
<span className="text-white">Within a few hours</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-stone-400">Email/Form</span>
<span className="text-white">Within 24 hours</span>
</div>
<div className="flex justify-between items-center">
<span className="text-stone-400">Corporate</span>
<span className="text-white">1 business day</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-100/50 py-24">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Follow the Journey</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mt-4 mb-3">Stay Connected With KTC Events</h2>
<p className="text-stone-500 font-light max-w-xl mx-auto mb-16">Follow along for event updates, fitness tips, coaching content and community highlights.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<a className="group p-6 bg-white rounded-3xl border border-stone-200/60 hover:border-stone-900 transition-all" href="#">
<iconify-icon className="text-stone-900 mb-4" icon="solar:camera-linear" width="28"></iconify-icon>
<h4 className="font-semibold text-sm mb-1">Instagram</h4>
<p className="text-xs text-stone-400 mb-4">@kgwahla_the_coach</p>
<span className="text-xs font-medium text-ktc-red flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Follow <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 bg-white rounded-3xl border border-stone-200/60 hover:border-stone-900 transition-all" href="#">
<iconify-icon className="text-stone-900 mb-4" icon="solar:play-circle-linear" width="28"></iconify-icon>
<h4 className="font-semibold text-sm mb-1">TikTok</h4>
<p className="text-xs text-stone-400 mb-4">@KgwahlaTheCoach</p>
<span className="text-xs font-medium text-ktc-red flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Follow <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 bg-white rounded-3xl border border-stone-200/60 hover:border-stone-900 transition-all" href="#">
<iconify-icon className="text-ktc-red mb-4" icon="solar:videocamera-record-linear" width="28"></iconify-icon>
<h4 className="font-semibold text-sm mb-1">YouTube</h4>
<p className="text-xs text-stone-400 mb-4">@KgwahlaTheCoach</p>
<span className="text-xs font-medium text-ktc-red flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Subscribe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 bg-white rounded-3xl border border-stone-200/60 hover:border-stone-900 transition-all" href="#">
<iconify-icon className="text-stone-900 mb-4" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h4 className="font-semibold text-sm mb-1">Facebook</h4>
<p className="text-xs text-stone-400 mb-4">KTC Masipa</p>
<span className="text-xs font-medium text-ktc-red flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Follow <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-6 bg-white rounded-3xl border border-stone-200/60 hover:border-stone-900 transition-all" href="#">
<iconify-icon className="text-stone-900 mb-4" icon="solar:case-linear" width="28"></iconify-icon>
<h4 className="font-semibold text-sm mb-1">LinkedIn</h4>
<p className="text-xs text-stone-400 mb-4">Kgwahla Masipa</p>
<span className="text-xs font-medium text-ktc-red flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Connect <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
<p className="mt-12 text-sm text-stone-400 font-light">All platforms: Search "Kgwahla The Coach" to find us everywhere.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-16">
<span className="text-xs font-semibold tracking-widest text-ktc-red uppercase">Where We Operate</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mt-4 mb-3">Based in Pretoria &amp; Johannesburg</h2>
<p className="text-stone-500 font-light max-w-2xl">KTC Events operates across Gauteng, with corporate and school programs available throughout South Africa.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
<div className="space-y-4">

<div className="p-8 border border-stone-200 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-stone-200/40 transition-all group">
<div className="flex items-start gap-5">
<iconify-icon className="text-stone-300 group-hover:text-ktc-red" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-stone-900 mb-2">Primary Location</h4>
<p className="text-stone-800 text-sm">Pretoria East (Hazeldean), Gauteng</p>
<p className="text-stone-500 text-xs mt-3 leading-relaxed">Virgin Active — Main Training Base. Where it all started in 2009.</p>
</div>
</div>
</div>

<div className="p-8 border border-stone-200 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-stone-200/40 transition-all group">
<div className="flex items-start gap-5">
<iconify-icon className="text-stone-300 group-hover:text-ktc-red" icon="solar:ranking-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-stone-900 mb-2">Event Venues</h4>
<p className="text-stone-800 text-sm">Johannesburg &amp; Pretoria</p>
<p className="text-stone-500 text-xs mt-3 leading-relaxed">Events hosted at premium venues across Gauteng — location confirmed per event.</p>
</div>
</div>
</div>

<div className="p-8 border border-stone-200 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-stone-200/40 transition-all group">
<div className="flex items-start gap-5">
<iconify-icon className="text-stone-300 group-hover:text-ktc-red" icon="solar:city-linear" width="24"></iconify-icon>
<div>
<h4 className="font-semibold text-stone-900 mb-2">Corporate &amp; School Reach</h4>
<p className="text-stone-800 text-sm">Available across South Africa</p>
<p className="text-stone-500 text-xs mt-3 leading-relaxed">We travel to your location for corporate team building and school programs nationwide.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-stone-200 rounded-3xl overflow-hidden min-h-[25rem] border border-stone-200">
<div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100">
<div className="relative mb-4">
<div className="w-16 h-16 bg-ktc-red/10 rounded-full animate-ping absolute inset-0"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative shadow-lg">
<iconify-icon className="text-ktc-red" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
</div>
<span className="text-stone-900 font-semibold tracking-tight">KTC Events — Gauteng, SA</span>
<p className="text-stone-400 text-xs mt-2 uppercase tracking-widest">[ Google Maps Embed Placeholder ]</p>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white flex flex-col gap-1">
<p className="text-[0.65rem] text-stone-500 uppercase font-bold tracking-widest">Client Service Note</p>
<p className="text-xs text-stone-700">Corporate clients: We come to you. Venues confirmed per event.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-y border-stone-200/60 py-24">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Quick Answers</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mt-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-stone-200/60 overflow-hidden" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h4 className="text-sm font-medium text-stone-900">How do I register for an event?</h4>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                        Fill out the registration form above or message us directly on WhatsApp. We'll confirm your spot and provide banking details for payment within 24 hours.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-stone-200/60 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h4 className="text-sm font-medium text-stone-900">Do you offer corporate programs outside Gauteng?</h4>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                        Yes. We travel to client locations for corporate wellness and team building programs across South Africa. Travel and logistics will be included in the proposal.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-stone-200/60 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h4 className="text-sm font-medium text-stone-900">How far in advance should we book a corporate session?</h4>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                        We recommend at least 4–6 weeks in advance to allow for proper program customization, site visits, and logistical planning.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-stone-200/60 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h4 className="text-sm font-medium text-stone-900">Can schools apply for the Grade 11 &amp; 12 fitness program?</h4>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-stone-500 font-light leading-relaxed">
                        Yes. Schools, PTAs, or teachers can contact us via the form or WhatsApp to discuss how to enrol your school in the program for the 2025/2026 academic year.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative bg-stone-950 py-24 text-center overflow-hidden">
<div className="absolute inset-0 grain-bg pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Ready to Take the First Step?</h2>
<p className="text-stone-400 text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
                One message. One call. That's all it takes to get started.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-ktc-red text-white px-10 py-4 rounded-full font-medium hover:opacity-90 transition-opacity" href="#">
                    Send Us a Message
                </a>
<a className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-full font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                    WhatsApp Us Now
                </a>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2">
<div className="w-10 h-10 rounded-full bg-ktc-red flex items-center justify-center mb-6">
<span className="text-white text-xs font-semibold tracking-tighter">KTC</span>
</div>
<p className="text-stone-500 text-sm font-light max-w-xs leading-relaxed">
                        Professional fitness coaching, corporate wellness events, and structured performance programs since 2009.
                    </p>
</div>
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Programs</h5>
<ul className="space-y-4 text-sm text-stone-500 font-light">
<li><a className="hover:text-ktc-red transition-colors" href="#">Corporate Wellness</a></li>
<li><a className="hover:text-ktc-red transition-colors" href="#">School Fitness 11-12</a></li>
<li><a className="hover:text-ktc-red transition-colors" href="#">Performance Coaching</a></li>
<li><a className="hover:text-ktc-red transition-colors" href="#">Communities</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Connect</h5>
<div className="flex flex-wrap gap-4 text-stone-400">
<a className="hover:text-stone-900" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon icon="solar:case-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200/60 gap-4">
<p className="text-xs text-stone-400 font-light italic">© 2025 KTC Events | Kgwahla Masipa</p>
<p className="text-[0.65rem] uppercase tracking-widest text-stone-400 font-medium">Designed by Creative Studio</p>
</div>
</div>
</footer>

    </>
  );
}
