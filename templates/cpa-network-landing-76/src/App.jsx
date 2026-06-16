import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // SPA Navigation Logic
        function navigateTo(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target page
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Original Auth Toggle Logic
        function toggleAuthView(viewName) {
            const loginView = document.getElementById('login-view');
            const registerView = document.getElementById('register-view');
            
            loginView.classList.remove('auth-view');
            registerView.classList.remove('auth-view');
            
            void loginView.offsetWidth;
            void registerView.offsetWidth;

            if(viewName === 'register') {
                loginView.classList.add('hidden');
                loginView.classList.remove('block');
                
                registerView.classList.remove('hidden');
                registerView.classList.add('block');
                registerView.classList.add('auth-view');
            } else {
                registerView.classList.add('hidden');
                registerView.classList.remove('block');
                
                loginView.classList.remove('hidden');
                loginView.classList.add('block');
                loginView.classList.add('auth-view');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-glow"></div>
<div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7B3FE4]/20 to-transparent z-50"></div>

<nav className="fixed top-0 inset-x-0 z-40 glass-nav border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="flex items-center gap-3 group" onclick="navigateTo('home')">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7B3FE4] via-[#A855F7] to-[#C084FC] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform">
<iconify-icon className="text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter text-slate-900 uppercase">NEXUS</span>
</button>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('home')">Home</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('about')">About Us</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('contact')">Help &amp; Contact</button>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-5 py-2 rounded-lg transition-all shadow-sm flex items-center gap-2" onclick="navigateTo('auth')">
                Sign In
                <iconify-icon icon="solar:user-rounded-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 flex-grow pt-24 pb-16 px-6 max-w-6xl mx-auto w-full">

<section className="page-view active" id="page-home">

<div className="text-center py-16 md:py-24 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#7B3FE4] text-xs font-medium mb-8">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                    The Future of Performance Marketing
                </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                    Scale Your Revenue with <br/>Next-Gen CPA Infrastructure.
                </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Nexus connects premium advertisers with elite publishers through AI-driven matching, ensuring the highest conversion rates and fastest global payouts in the industry.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#7B3FE4] to-[#A855F7] hover:from-[#6B2BD6] hover:to-[#9642E5] text-white font-medium text-sm rounded-xl transition-all shadow-[0_4px_14px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2" onclick="navigateTo('auth')">
                        Start Earning Today
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-all shadow-sm" onclick="navigateTo('about')">
                        Learn More
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
<div className="glass-card border border-slate-200/60 rounded-2xl p-6 text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">$50M+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Paid to Affiliates</div>
</div>
<div className="glass-card border border-slate-200/60 rounded-2xl p-6 text-center">
<div className="text-3xl font-semibold tracking-tighter text-[#7B3FE4] mb-1">99.9%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tracking Accuracy</div>
</div>
<div className="glass-card border border-slate-200/60 rounded-2xl p-6 text-center">
<div className="text-3xl font-semibold tracking-tighter text-slate-900 mb-1">10k+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Active Offers</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Why Choose Nexus?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card border border-slate-200/60 rounded-3xl p-8 hover:border-[#7B3FE4]/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Real-Time Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Monitor your campaigns with millisecond precision. Our infrastructure processes millions of clicks flawlessly.</p>
</div>

<div className="glass-card border border-slate-200/60 rounded-3xl p-8 hover:border-[#7B3FE4]/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#7B3FE4] mb-6">
<iconify-icon className="text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">AI Smart Routing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Machine learning algorithms automatically route your traffic to the highest yielding offers globally.</p>
</div>

<div className="glass-card border border-slate-200/60 rounded-3xl p-8 hover:border-[#7B3FE4]/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Accelerated Payouts</h3>
<p className="text-sm text-slate-500 leading-relaxed">Get paid weekly or even daily. We support wire, crypto, and local bank transfers in 150+ countries.</p>
</div>
</div>
</div>
</section>

<section className="page-view max-w-3xl mx-auto py-12" id="page-about">
<h1 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-6 text-center">About Nexus</h1>
<p className="text-base text-slate-500 text-center mb-12">Pioneering the future of performance marketing through technology.</p>
<div className="glass-card border border-slate-200/60 rounded-3xl p-8 md:p-12 space-y-8">
<div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">Our Mission</h2>
<p className="text-sm text-slate-600 leading-relaxed">
                        Founded in 2024, Nexus was built with a singular vision: to eliminate the friction in affiliate marketing. We realized that traditional CPA networks were bogged down by outdated technology, delayed reporting, and opaque payment structures. Our mission is to provide a transparent, lightning-fast platform that empowers marketers to scale without limits.
                    </p>
</div>
<div className="h-px bg-slate-200/60 w-full"></div>
<div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">The Nexus Advantage</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
<iconify-icon className="text-[#7B3FE4] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Exclusive Direct Offers:</strong> We bypass the middlemen. Over 80% of our offers are exclusive direct-to-advertiser deals, ensuring the highest payouts in the market.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
<iconify-icon className="text-[#7B3FE4] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Proprietary Tracking:</strong> No third-party tracking delays. Our in-house built, server-to-server tracking engine operates with sub-10ms latency.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
<iconify-icon className="text-[#7B3FE4] text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong>Dedicated Success Managers:</strong> Every approved affiliate is paired with a seasoned industry veteran to assist with campaign optimization.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="page-view max-w-xl mx-auto py-12" id="page-contact">
<div className="text-center mb-10">
<h1 className="text-3xl font-semibold tracking-tighter text-slate-900 mb-4">How can we help?</h1>
<p className="text-sm text-slate-500">Reach out to our support team. We typically respond within 2 hours.</p>
</div>
<div className="glass-card border border-slate-200/60 rounded-3xl p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">First Name</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Last Name</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="hello@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Subject</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm cursor-pointer">
<option>General Inquiry</option>
<option>Account Support</option>
<option>Payment Issue</option>
<option>Partnership</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Message</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm resize-none" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-2" type="submit">
                        Send Message
                        <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
<div className="flex items-center justify-center gap-6 mt-8">
<a className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="mailto:support@nexus.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    support@nexus.com
                </a>
</div>
</section>

<section className="page-view max-w-3xl mx-auto py-12" id="page-terms">
<div className="glass-card border border-slate-200/60 rounded-3xl p-8 md:p-12">
<h1 className="text-2xl font-semibold tracking-tighter text-slate-900 mb-2">Terms &amp; Conditions</h1>
<p className="text-xs text-slate-400 mb-8 pb-8 border-b border-slate-200/60">Last updated: October 24, 2024</p>
<div className="space-y-6 text-sm text-slate-600 leading-relaxed">
<h3 className="text-base font-medium text-slate-900 tracking-tight">1. Acceptance of Terms</h3>
<p>By registering for and using the Nexus CPA Network, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.</p>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">2. Affiliate Requirements</h3>
<p>Affiliates must provide accurate and complete information during registration. You must be at least 18 years old. We reserve the right to deny or revoke access to any affiliate whose promotional methods are deemed inappropriate or violate advertiser guidelines.</p>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">3. Traffic Quality &amp; Fraud</h3>
<p>Nexus maintains a zero-tolerance policy against fraud. Any attempts to generate artificial clicks, leads, or conversions using bots, proxies, or deceptive practices will result in immediate termination of your account and forfeiture of all pending commissions.</p>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">4. Payments</h3>
<p>Payments are processed automatically according to your selected tier (Net-30, Net-15, or Weekly). Minimum payout threshold is $100. Affiliates are responsible for providing correct payment details and handling applicable taxes in their jurisdiction.</p>
</div>
</div>
</section>

<section className="page-view max-w-3xl mx-auto py-12" id="page-privacy">
<div className="glass-card border border-slate-200/60 rounded-3xl p-8 md:p-12">
<h1 className="text-2xl font-semibold tracking-tighter text-slate-900 mb-2">Privacy Policy</h1>
<p className="text-xs text-slate-400 mb-8 pb-8 border-b border-slate-200/60">Last updated: October 24, 2024</p>
<div className="space-y-6 text-sm text-slate-600 leading-relaxed">
<h3 className="text-base font-medium text-slate-900 tracking-tight">Introduction</h3>
<p>At Nexus, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our platform.</p>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">Information We Collect</h3>
<p>We collect information you provide directly to us (such as name, email, payment details) and information we gather automatically when you use our services (such as IP addresses, browser types, and performance data of your tracking links).</p>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">How We Use Your Information</h3>
<ul className="list-disc pl-5 space-y-2">
<li>To provide, maintain, and improve our services</li>
<li>To process your commissions and payouts</li>
<li>To detect, investigate, and prevent fraudulent transactions</li>
<li>To communicate with you regarding offers, updates, and support</li>
</ul>
<h3 className="text-base font-medium text-slate-900 tracking-tight mt-6">Data Security</h3>
<p>We implement industry-standard security measures, including encryption and strict access controls, to protect your data. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
</div>
</div>
</section>

<section className="page-view py-12" id="page-auth">
<div className="flex items-center justify-center">
<div className="w-full max-w-[400px] perspective-1000">

<div className="glass-card border border-slate-200/60 rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] p-8 relative overflow-hidden">

<div className="block auth-view" id="login-view">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Welcome back</h2>
<p className="text-sm text-slate-500">Enter your credentials to access your dashboard.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email address</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#7B3FE4] transition-colors" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="hello@example.com" required="" type="email"/>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between ml-1">
<label className="text-xs font-medium text-slate-700">Password</label>
<a className="text-xs font-medium text-[#7B3FE4] hover:text-purple-700 transition-colors" href="#">Forgot password?</a>
</div>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#7B3FE4] transition-colors" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors flex items-center" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>

<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-xl transition-all shadow-md mt-6 flex items-center justify-center gap-2 group" type="submit">
                                    Sign In
                                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>

<div className="mt-8 mb-6 flex items-center text-xs text-slate-400 before:flex-1 before:border-t before:border-slate-200 before:mr-4 after:flex-1 after:border-t after:border-slate-200 after:ml-4 uppercase tracking-widest font-medium">
                                Or continue with
                            </div>

<div className="grid grid-cols-2 gap-3 mb-6">
<button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<iconify-icon className="text-lg" icon="solar:globus-linear"></iconify-icon>
                                    Google
                                </button>
<button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
                                    Github
                                </button>
</div>
<p className="text-center text-sm text-slate-500">
                                Don't have an account? 
                                <button className="font-medium text-[#7B3FE4] hover:text-purple-700 transition-colors" onclick="toggleAuthView('register')">Sign up</button>
</p>
</div>

<div className="hidden auth-view" id="register-view">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Create an account</h2>
<p className="text-sm text-slate-500">Join the futuristic CPA network today.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Full Name</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#7B3FE4] transition-colors" icon="solar:user-rounded-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="Alex Mercer" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email address</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#7B3FE4] transition-colors" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="hello@example.com" required="" type="email"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Password</label>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-[#7B3FE4] transition-colors" icon="solar:lock-password-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#9B6DFF]/10 focus:border-[#7B3FE4] transition-all shadow-sm" placeholder="Create a strong password" required="" type="password"/>
</div>
</div>

<div className="flex items-start gap-2.5 mt-2">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3FE4]/30 checked:bg-[#7B3FE4] checked:border-[#7B3FE4] transition-colors cursor-pointer" id="terms" required="" type="checkbox"/>
<iconify-icon className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-slate-500 cursor-pointer select-none leading-relaxed" htmlFor="terms">
                                        I agree to the <button className="text-[#7B3FE4] hover:underline" onclick="navigateTo('terms')" type="button">Terms</button> and <button className="text-[#7B3FE4] hover:underline" onclick="navigateTo('privacy')" type="button">Privacy</button>.
                                    </label>
</div>

<button className="w-full bg-gradient-to-r from-[#7B3FE4] to-[#A855F7] hover:from-[#6B2BD6] hover:to-[#9642E5] text-white font-medium text-sm py-3 rounded-xl transition-all shadow-[0_4px_14px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_20px_rgba(168,85,247,0.4)] mt-6 flex items-center justify-center gap-2 group" type="submit">
                                    Create Account
                                    <iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:user-plus-linear"></iconify-icon>
</button>
</form>
<p className="text-center text-sm text-slate-500 mt-6">
                                Already have an account? 
                                <button className="font-medium text-[#7B3FE4] hover:text-purple-700 transition-colors" onclick="toggleAuthView('login')">Sign in</button>
</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-auto border-t border-slate-200/60 bg-transparent py-8 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">© 2024 Nexus CPA</p>
<div className="flex items-center gap-6 text-sm text-slate-500">
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('terms')">Terms</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('privacy')">Privacy</button>
<button className="hover:text-slate-900 transition-colors" onclick="navigateTo('contact')">Contact</button>
</div>
</div>
</footer>


    </>
  );
}
