import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter Tight"', 'sans-serif'],
},
colors: {
dark: {
900: '#0B0F19',
800: '#131926',
700: '#1F2937',
}
}
}
}
}



        lucide.createIcons();

        // Form Submission Handler - Opens email client
        document.getElementById('leadForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const companyName = document.getElementById('companyName').value.trim();
            const state = document.getElementById('state').value;
            
            // Validation
            if (!fullName || !email || !state) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Prepare email content
            const subject = encodeURIComponent('U.S. Entity Review - GPT Assistant Access Request');
            const body = encodeURIComponent(
`Hello,

I am requesting access to the U.S. Entity Review GPT assistant.

My Information:
- Full Name: ${fullName}
- Email: ${email}
- Company Name: ${companyName || 'Not specified'}
- State of Formation: ${state}

Please send me the access link.

Thank you.`
            );
            
            // Open email client
            window.location.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-gray-900 transition-colors" href="#form-section">Get Started</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="mailto:info@example.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                    Contact
                </a>
<a className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10" href="#form-section">
                    Start Analysis
                </a>
</div>
</div>
</nav>
<main className="pt-24">

<section className="relative pt-12 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto text-center px-6 relative z-10">
<div className="flex items-center justify-center gap-2 mb-8">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Powered by</span>
<div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
<i className="w-3 h-3 text-amber-500" data-lucide="sparkles"></i>
                        Artificial Intelligence
                    </div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                    Is Your U.S. Company<br/>
<span className="text-gray-400">At Legal Risk?</span>
</h1>
<p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Check your company documents and legal obligations in seconds with our AI-powered assistant. Identify risks and get actionable solutions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/10 transition-all w-full sm:w-auto" href="#form-section">
                        Start Free Analysis
                    </a>
<a className="px-8 py-3.5 rounded-full bg-white text-gray-900 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center gap-2 justify-center" href="#how-it-works">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        How It Works
                    </a>
</div>

<div className="relative mx-auto max-w-5xl">
<div className="absolute -inset-10 bg-gradient-to-tr from-gray-200 via-gray-100 to-white rounded-[3rem] -z-10 grain-overlay opacity-80"></div>
<div className="rounded-xl bg-dark-900 p-2 shadow-2xl border border-white/10 ring-1 ring-gray-900/5">
<div className="rounded-lg bg-dark-800 border border-white/5 overflow-hidden relative aspect-[16/9] flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-dark-900/50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="lock"></i>
                                        entity-review.ai
                                    </div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">U</div>
</div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
<div className="space-y-1">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Menu</div>
<div className="flex items-center gap-2 text-sm text-white bg-white/5 px-3 py-2 rounded-md"><i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview</div>
<div className="flex items-center gap-2 text-sm text-gray-400 px-3 py-2 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="file-text"></i> Documents</div>
<div className="flex items-center gap-2 text-sm text-gray-400 px-3 py-2 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="alert-triangle"></i> Risks</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-xl font-medium text-white">Company Analysis</h3>
<p className="text-sm text-gray-500">Delaware LLC - Compliance Status</p>
</div>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-gray-100">+ New Analysis</button>
</div>

<div className="grid grid-cols-4 gap-4 mb-6">
<div className="bg-white/5 border border-white/5 p-4 rounded-lg">
<div className="text-xs text-gray-400 mb-1">Compliance</div>
<div className="text-2xl font-medium text-white">92%</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="trending-up"></i> Good</div>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg">
<div className="text-xs text-gray-400 mb-1">Documents</div>
<div className="text-2xl font-medium text-white">8/10</div>
<div className="text-[10px] text-amber-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="alert-circle"></i> 2 missing</div>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg">
<div className="text-xs text-gray-400 mb-1">Last Check</div>
<div className="text-2xl font-medium text-white">Today</div>
<div className="text-[10px] text-gray-500 mt-1">14:32</div>
</div>
<div className="bg-white/5 border border-white/5 p-4 rounded-lg">
<div className="text-xs text-gray-400 mb-1">State</div>
<div className="text-2xl font-medium text-white">DE</div>
<div className="text-[10px] text-gray-500 mt-1">Delaware</div>
</div>
</div>

<div className="border border-white/5 rounded-lg overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-3 bg-white/5 text-xs font-medium text-gray-400 border-b border-white/5">
<div className="col-span-5">Check Item</div>
<div className="col-span-3">Status</div>
<div className="col-span-4 text-right">Last Update</div>
</div>
<div className="grid grid-cols-12 gap-4 p-3 text-xs text-gray-300 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
<div className="col-span-5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                Annual Report
                                            </div>
<div className="col-span-3"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Completed</span></div>
<div className="col-span-4 text-right text-gray-500">2 days ago</div>
</div>
<div className="grid grid-cols-12 gap-4 p-3 text-xs text-gray-300 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
<div className="col-span-5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                                Franchise Tax
                                            </div>
<div className="col-span-3"><span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">Pending</span></div>
<div className="col-span-4 text-right text-gray-500">Due: March 1</div>
</div>
<div className="grid grid-cols-12 gap-4 p-3 text-xs text-gray-300 items-center hover:bg-white/5 transition-colors">
<div className="col-span-5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                Registered Agent
                                            </div>
<div className="col-span-3"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Active</span></div>
<div className="col-span-4 text-right text-gray-500">Current</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield-check"></i>
<span className="text-sm">Secure &amp; Private</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="zap"></i>
<span className="text-sm">Instant Results</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-500" data-lucide="globe"></i>
<span className="text-sm">50 State Coverage</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-purple-500" data-lucide="clock"></i>
<span className="text-sm">24/7 Access</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Features</span>
<h2 className="text-3xl sm:text-4xl font-medium text-gray-900 tracking-tight mt-4 mb-4">Why U.S. Entity Review?</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Designed to protect your U.S. business from legal risks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-between h-[400px] border border-gray-100 group hover:shadow-lg transition-all duration-300">
<div>
<div className="text-sm font-medium text-blue-600 mb-2">24/7 Document Review</div>
<h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">Check your company documents anytime.</h3>
<p className="text-gray-500 leading-relaxed">Our AI assistant is always by your side, ready to answer your questions. Day or night.</p>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative mt-8">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Annual Report Check</div>
<div className="text-xs text-gray-500 mt-1">
                                        Delaware - Compliant ✓
                                    </div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-between h-[400px] border border-gray-100 group hover:shadow-lg transition-all duration-300">
<div>
<div className="text-sm font-medium text-amber-600 mb-2">State-Specific Analysis</div>
<h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">Every state has different legal requirements.</h3>
<p className="text-gray-500 leading-relaxed">From Delaware to Florida, Wyoming to California - custom analysis and alert system for all states.</p>
</div>
<div className="flex items-center justify-center gap-4 mt-8">
<div className="bg-white rounded-lg px-4 py-2 border border-gray-100 text-sm font-medium text-gray-700">Delaware</div>
<div className="bg-white rounded-lg px-4 py-2 border border-gray-100 text-sm font-medium text-gray-700">Wyoming</div>
<div className="bg-white rounded-lg px-4 py-2 border border-gray-100 text-sm font-medium text-gray-700">Florida</div>
<div className="bg-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-500">+47</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 text-white relative overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">How It Works</span>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mt-4 mb-4">Get Started in 3 Simple Steps</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Finding out your company's legal compliance status has never been easier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
<span className="font-semibold text-gray-400 text-xl">1</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Fill Out the Form</h3>
<p className="text-sm text-gray-400 leading-relaxed">Enter your name, email, and company details. Takes less than 30 seconds.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
<span className="font-semibold text-gray-400 text-xl">2</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Submit Your Request</h3>
<p className="text-sm text-gray-400 leading-relaxed">Send us your request via email. It will be processed as soon as possible.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
<span className="font-semibold text-gray-400 text-xl">3</span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Access the GPT Assistant</h3>
<p className="text-sm text-gray-400 leading-relaxed">Your personalized GPT assistant link will be sent via email. Start using it right away.</p>
</div>
</div>
<div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
<div>
<div className="text-4xl font-semibold text-white mb-1">500+</div>
<div className="text-sm text-gray-400">Companies Analyzed</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-1">50</div>
<div className="text-sm text-gray-400">States Covered</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-1">98%</div>
<div className="text-sm text-gray-400">Satisfaction Rate</div>
</div>
<div>
<div className="text-4xl font-semibold text-white mb-1">24/7</div>
<div className="text-sm text-gray-400">Availability</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="form-section">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900 mb-6 shadow-lg shadow-gray-900/20">
<i className="w-7 h-7 text-white" data-lucide="scan-search"></i>
</div>
<h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-4">Start Your Analysis</h2>
<p className="text-gray-500">Enter your information and receive access to our AI assistant via email</p>
</div>

<form className="space-y-5 bg-gray-50 rounded-3xl p-8 border border-gray-100" id="leadForm">

<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="fullName">
                                Full Name <span className="text-red-500">*</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="user"></i>
</div>
<input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all text-gray-900 placeholder:text-gray-400 text-sm" id="fullName" name="fullName" placeholder="Your full name" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                Email Address <span className="text-red-500">*</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="mail"></i>
</div>
<input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all text-gray-900 placeholder:text-gray-400 text-sm" id="email" name="email" placeholder="example@company.com" required="" type="email"/>
</div>
<p className="mt-1.5 text-xs text-gray-500">GPT assistant link will be sent to this address</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="companyName">
                                Company Name <span className="text-gray-400 font-normal">(Optional)</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="building-2"></i>
</div>
<input className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all text-gray-900 placeholder:text-gray-400 text-sm" id="companyName" name="companyName" placeholder="ABC Corporation LLC" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="state">
                                State of Formation <span className="text-red-500">*</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="map-pin"></i>
</div>
<select className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all text-gray-900 appearance-none cursor-pointer text-sm" id="state" name="state" required="">
<option disabled="" selected="" value="">Select a state</option>
<option value="Delaware">Delaware</option>
<option value="Wyoming">Wyoming</option>
<option value="Florida">Florida</option>
<option value="Texas">Texas</option>
<option value="California">California</option>
<option value="New York">New York</option>
<option value="Nevada">Nevada</option>
<option value="Other">Other</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<button className="w-full mt-4 py-4 px-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20 transition-all flex items-center justify-center gap-3" id="submitBtn" type="submit">
<span>Submit Request</span>
<i className="w-5 h-5" data-lucide="send"></i>
</button>

<p className="text-center text-xs text-gray-500 mt-4">
<i className="w-3 h-3 inline-block mr-1" data-lucide="lock"></i>
                            Your information is securely stored and never shared with third parties.
                        </p>
</form>
</div>
</div>
</section>

<section className="py-10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col relative overflow-hidden border border-gray-100">
<div className="text-sm font-medium text-gray-400 mb-2">Instant Action Items</div>
<h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Actionable steps for every risk.</h3>
<div className="absolute bottom-8 left-8 right-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-gray-900 font-medium">Annual Report - File Now</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-gray-900 font-medium">Franchise Tax - Make Payment</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-gray-900 font-medium">EIN Verification - Completed</span>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col relative overflow-hidden border border-gray-100">
<div className="text-sm font-medium text-gray-400 mb-2">Need Help?</div>
<h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Join Our Community</h3>
<div className="absolute bottom-8 left-8 right-8">
<a className="flex items-center gap-3 bg-emerald-500 text-white p-4 rounded-xl hover:bg-emerald-600 transition-colors" href="#" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle"></i>
<div>
<div className="font-medium text-sm">U.S. Business Owners</div>
<div className="text-xs text-emerald-100">Join the Group →</div>
</div>
</a>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col justify-end relative overflow-hidden border border-gray-100">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
<h3 className="text-5xl font-semibold text-gray-900 mb-2 tracking-tight text-center relative z-10">92%</h3>
<p className="text-gray-500 text-sm text-center relative z-10">of business owners are unaware<br/>of their legal obligations.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto bg-dark-900 rounded-[2.5rem] p-16 text-center relative overflow-hidden grain-overlay">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
<i className="w-6 h-6 text-black" data-lucide="rocket"></i>
</div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-2">Start Protecting Your Company</h2>
<p className="text-gray-400 mb-8 max-w-lg mx-auto">Identify legal risks and get actionable solutions. Apply now for a free analysis.</p>
<div className="mt-8 flex justify-center">
<a className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform inline-flex items-center gap-3" href="#form-section">
                            Start Free Analysis
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-dark-900 text-gray-400 py-16 text-sm border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<p className="text-gray-500 text-xs leading-relaxed mb-6">Analyze your U.S. company's legal compliance with our AI-powered system.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Services</div>
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors" href="#">Company Formation</a>
<a className="hover:text-white transition-colors" href="#">Annual Report</a>
<a className="hover:text-white transition-colors" href="#">Registered Agent</a>
<a className="hover:text-white transition-colors" href="#">EIN Application</a>
</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Resources</div>
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">State Guides</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
</div>
<div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Contact</div>
<div className="flex flex-col gap-3">
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:info@example.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                            info@example.com
                        </a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
<div className="text-xs text-gray-600">
                    © 2025 All rights reserved.
                </div>
<div className="flex items-center gap-6 text-xs">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
