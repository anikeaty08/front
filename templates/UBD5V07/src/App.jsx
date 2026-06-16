import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          500:'#06b6d4',
          600:'#0891b2',
          700:'#0e7490'
        }
      },
      boxShadow:{
        'inner-strong':'inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 2px rgba(255,255,255,0.05)'
      }
    }
  }
}



lucide.createIcons();

// Billing toggle functionality
const billingToggle = document.getElementById('billingToggle');
const billingSlider = document.getElementById('billingSlider');
let isAnnual = false;

billingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  
  if (isAnnual) {
    billingSlider.style.transform = 'translateX(24px)';
    billingToggle.classList.add('bg-primary-600');
    billingToggle.classList.remove('bg-white/20');
  } else {
    billingSlider.style.transform = 'translateX(0)';
    billingToggle.classList.remove('bg-primary-600');
    billingToggle.classList.add('bg-white/20');
  }
  
  // Update pricing
  document.querySelectorAll('[data-monthly]').forEach(el => {
    const monthly = el.getAttribute('data-monthly');
    const annual = el.getAttribute('data-annual');
    el.textContent = isAnnual ? annual : monthly;
  });
});

// FAQ toggle functionality
document.querySelectorAll('.faq-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector('[data-lucide="chevron-down"]');
    
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    } else {
      content.classList.add('hidden');
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-8 pt-12 pb-20 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-cyan-900/20 to-transparent"></div>
<div className="relative max-w-6xl mx-auto">

<nav className="flex items-center justify-between mb-16">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-display font-medium text-lg">CloudFlow API</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="hover:text-primary-500 transition-colors" href="#">Documentation</a>
<a className="hover:text-primary-500 transition-colors" href="#">Examples</a>
<a className="text-primary-500" href="#">Pricing</a>
<button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors">Get Started</button>
</div>
</nav>

<div className="text-center max-w-4xl mx-auto">
<h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight font-medium mb-6">Simple, Transparent Pricing</h1>
<p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">Choose the plan that fits your needs. Scale up or down anytime with no hidden fees or long-term commitments.</p>

<div className="flex items-center justify-center gap-4 mb-12">
<span className="text-sm">Monthly</span>
<button className="relative w-12 h-6 bg-white/20 rounded-full transition-colors" id="billingToggle">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform" id="billingSlider"></div>
</button>
<span className="text-sm">Annual <span className="text-xs bg-primary-600 px-2 py-1 rounded-full ml-2">Save 20%</span></span>
</div>
</div>
</div>
</header>

<section className="px-8 pb-20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<div className="mb-6">
<h3 className="font-display text-xl font-medium mb-2">Starter</h3>
<p className="text-sm text-white/60 mb-4">Perfect for small projects and testing</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-display font-medium" data-annual="$0" data-monthly="$0">$0</span>
<span className="text-sm text-white/60">/month</span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>10K API requests/month</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>1GB data transfer</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Basic documentation</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Community support</span>
</li>
</ul>
<button className="w-full border border-white/20 hover:border-primary-500 hover:bg-primary-500/10 rounded-md py-2 text-sm transition-colors">Get Started Free</button>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-primary-600 text-xs px-3 py-1 rounded-full">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="font-display text-xl font-medium mb-2">Pro</h3>
<p className="text-sm text-white/60 mb-4">Great for growing applications</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-display font-medium" data-annual="$23" data-monthly="$29">$29</span>
<span className="text-sm text-white/60">/month</span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>500K API requests/month</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>50GB data transfer</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Advanced analytics</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Email support</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Custom rate limits</span>
</li>
</ul>
<button className="w-full bg-primary-600 hover:bg-primary-700 rounded-md py-2 text-sm transition-colors">Start Pro Trial</button>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<div className="mb-6">
<h3 className="font-display text-xl font-medium mb-2">Business</h3>
<p className="text-sm text-white/60 mb-4">For teams and production apps</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-display font-medium" data-annual="$79" data-monthly="$99">$99</span>
<span className="text-sm text-white/60">/month</span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>2M API requests/month</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>200GB data transfer</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Priority support</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>SLA guarantee</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Team collaboration</span>
</li>
</ul>
<button className="w-full border border-white/20 hover:border-primary-500 hover:bg-primary-500/10 rounded-md py-2 text-sm transition-colors">Contact Sales</button>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<div className="mb-6">
<h3 className="font-display text-xl font-medium mb-2">Enterprise</h3>
<p className="text-sm text-white/60 mb-4">Custom solutions for large scale</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-display font-medium">Custom</span>
</div>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Unlimited requests</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Dedicated infrastructure</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>24/7 phone support</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>Custom integrations</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-primary-500" data-lucide="check"></i>
<span>On-premise options</span>
</li>
</ul>
<button className="w-full border border-white/20 hover:border-primary-500 hover:bg-primary-500/10 rounded-md py-2 text-sm transition-colors">Talk to Sales</button>
</div>
</div>
</div>
</section>

<section className="px-8 pb-20">
<div className="max-w-6xl mx-auto">
<h2 className="font-display text-2xl font-medium text-center mb-12">Compare All Features</h2>
<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="border-b border-white/10">
<tr>
<th className="text-left p-4">Features</th>
<th className="text-center p-4">Starter</th>
<th className="text-center p-4">Pro</th>
<th className="text-center p-4">Business</th>
<th className="text-center p-4">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr>
<td className="p-4 font-medium">API Requests/month</td>
<td className="p-4 text-center text-white/60">10K</td>
<td className="p-4 text-center">500K</td>
<td className="p-4 text-center">2M</td>
<td className="p-4 text-center">Unlimited</td>
</tr>
<tr>
<td className="p-4 font-medium">Data Transfer</td>
<td className="p-4 text-center text-white/60">1GB</td>
<td className="p-4 text-center">50GB</td>
<td className="p-4 text-center">200GB</td>
<td className="p-4 text-center">Unlimited</td>
</tr>
<tr>
<td className="p-4 font-medium">Support Response</td>
<td className="p-4 text-center text-white/60">Community</td>
<td className="p-4 text-center">24hrs</td>
<td className="p-4 text-center">4hrs</td>
<td className="p-4 text-center">1hr</td>
</tr>
<tr>
<td className="p-4 font-medium">Rate Limits</td>
<td className="p-4 text-center text-white/60">Standard</td>
<td className="p-4 text-center">Custom</td>
<td className="p-4 text-center">Custom</td>
<td className="p-4 text-center">No limits</td>
</tr>
<tr>
<td className="p-4 font-medium">Analytics Dashboard</td>
<td className="p-4 text-center"><i className="w-4 h-4 mx-auto text-white/40" data-lucide="x"></i></td>
<td className="p-4 text-center"><i className="w-4 h-4 mx-auto text-primary-500" data-lucide="check"></i></td>
<td className="p-4 text-center"><i className="w-4 h-4 mx-auto text-primary-500" data-lucide="check"></i></td>
<td className="p-4 text-center"><i className="w-4 h-4 mx-auto text-primary-500" data-lucide="check"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="px-8 pb-20">
<div className="max-w-4xl mx-auto">
<h2 className="font-display text-2xl font-medium text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="font-medium">How does billing work?</span>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden mt-3 text-sm text-white/70">
<p>We bill monthly based on your actual usage. You're only charged for what you use, and you can upgrade or downgrade your plan at any time.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="font-medium">What happens if I exceed my plan limits?</span>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden mt-3 text-sm text-white/70">
<p>We'll notify you when you're approaching your limits. You can either upgrade your plan or pay for additional usage at standard rates.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-xl shadow-inner-strong ring-1 ring-white/10 p-6">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="font-medium">Can I cancel anytime?</span>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden mt-3 text-sm text-white/70">
<p>Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-auto bg-[#0f172a] pt-16 pb-20 px-8">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-medium">CloudFlow API</span>
</div>
<nav className="flex flex-wrap gap-6 text-sm text-white/70">
<a className="hover:text-white" href="#">Documentation</a>
<a className="hover:text-white" href="#">Updates</a>
<a className="hover:text-white" href="#">Examples</a>
<a className="hover:text-white" href="#">Pricing</a>
<a className="hover:text-white" href="#">Contact</a>
</nav>
</div>
</footer>


    </>
  );
}
