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
slate: {
850: '#1f2937', // Custom dark
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-slate-900">SENTRY</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Monitoring</a>
<a className="hover:text-slate-900 transition-colors" href="#">Locations</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors flex items-center gap-2" href="tel:+18005550123">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
<span>800-555-0123</span>
</a>
</div>
</div>
</nav>

<main className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col gap-8">

<div className="inline-flex items-center gap-2 self-start bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium">
<iconify-icon icon="solar:sale-linear" width="14"></iconify-icon>
<span>Spring Offer: 50% off installation this week</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Professional security for modern living.
                </h1>
<p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                    24/7 professional monitoring, smart home integration, and instant mobile alerts. Protect your home with the system trusted by over 100,000 families.
                </p>
<div className="flex flex-col sm:flex-row gap-6 mt-4">
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm text-indigo-600">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">HD Video</h3>
<p className="text-sm text-slate-500">Crystal clear 24/7 recording</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm text-indigo-600">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">App Control</h3>
<p className="text-sm text-slate-500">Arm/disarm from anywhere</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-slate-500 mt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-50"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-50"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-50"></div>
</div>
<span className="ml-2">Rated 4.9/5 by 10k+ homeowners</span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-100 to-slate-50 rounded-2xl blur-sm opacity-50 -z-10"></div>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
<div className="mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">Get your free quote</h2>
<p className="text-sm text-slate-500 mt-1">Fill out the form below to lock in your 50% discount.</p>
</div>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="firstname">First Name</label>
<input className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="firstname" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="lastname">Last Name</label>
<input className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="lastname" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
<input className="w-full h-10 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="phone">Telephone</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:phone-linear" width="18"></iconify-icon>
<input className="w-full h-10 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="pt-2">
<button className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 transition-all active:scale-[0.98]" type="button">
<span>Secure My Home</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-slate-400 text-center leading-tight">
                            By clicking the button, you agree to our Terms of Service. Your information is secure and encrypted.
                        </p>
</form>
</div>
</div>
</div>
</main>

<section className="py-20 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Trusted by neighbors</h2>
<p className="text-slate-500 mt-2">See what homeowners in your area are saying about Sentry.</p>
</div>
<div className="flex items-center gap-1 text-yellow-500 text-sm font-medium bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="ml-1 text-yellow-700">4.9/5 Average</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-slate-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "The installation was incredibly fast. The technician arrived on time, walked me through the app, and everything just works. The 50% off deal made it a no-brainer."
                    </p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">MS</div>
<div className="text-xs">
<p className="font-medium text-slate-900">Michael S.</p>
<p className="text-slate-400">San Francisco, CA</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-slate-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "I feel so much safer knowing Sentry is monitoring my home. The app is beautifully designed and very responsive. Highly recommend to anyone looking for peace of mind."
                    </p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">JL</div>
<div className="text-xs">
<p className="font-medium text-slate-900">Jennifer L.</p>
<p className="text-slate-400">Austin, TX</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-slate-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Great customer support. I had a question about the motion sensors and they answered immediately. The equipment looks sleek and modern unlike my old system."
                    </p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">DR</div>
<div className="text-xs">
<p className="font-medium text-slate-900">David R.</p>
<p className="text-slate-400">Seattle, WA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2 text-white mb-2">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-lg font-medium tracking-tighter">SENTRY</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
                    Advanced security solutions engineered for reliability and ease of use. Protecting homes since 2010.
                </p>
<div className="flex gap-4 mt-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Coverage Area</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Nationwide Installation</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:buildings-linear" width="16"></iconify-icon>
<span>HQ: 100 Security Way,<br/>San Francisco, CA 94103</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:global-linear" width="16"></iconify-icon>
<span>24/7 Monitoring Centers:<br/><span className="text-slate-500">Phoenix • Atlanta • Chicago</span></span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Support</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">System Status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Legal</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Licensing</a></li>
</ul>
<div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500">
                    © 2023 Sentry Security Inc.
                </div>
</div>
</div>
</footer>

    </>
  );
}
