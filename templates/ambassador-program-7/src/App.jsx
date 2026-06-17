import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<span className="text-xl font-semibold tracking-tight">TESTOMAT</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#why">Why Join</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#roles">Roles</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#benefits">Benefits</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#ambassadors">Ambassadors</a>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">Apply Now</button>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-8">
<span className="text-xs font-medium text-slate-700">Now Accepting Applications</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">Welcome to the Ambassador Program</h1>
<p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Testomat.io community unite QA leaders, TestOps experts, and automation champions dedicated to shaping the future of software testing.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-slate-800 transition-all hover:scale-105">Start Your Application</button>
<button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg text-base font-medium hover:border-slate-400 transition-colors">Learn More</button>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50" id="why">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Why become an Ambassador?</h2>
<p className="text-lg text-slate-600 max-w-3xl mx-auto">As an Ambassador, you'll represent the community, inspire others, and play a key role in spreading knowledge and opportunities, all while expanding your network and growing your influence.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-slate-700" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Make an impact</h3>
<p className="text-slate-600 text-base leading-relaxed">Help shape the future of the software testing community by sharing your knowledge and passion.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-slate-700" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Expand your network</h3>
<p className="text-slate-600 text-base leading-relaxed">Connect with industry leaders, professionals, and like-minded testers from around the world.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-slate-700" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Enhance your skills</h3>
<p className="text-slate-600 text-base leading-relaxed">Gain valuable leadership, communication, and event management experience while representing the community.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-slate-700" icon="solar:rocket-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Career Boost</h3>
<p className="text-slate-600 text-base leading-relaxed">Develop leadership skills that will enhance your testing career.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-slate-700" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Exclusive benefits</h3>
<p className="text-slate-600 text-base leading-relaxed">Enjoy special access to events, resources, and opportunities to grow both personally and professionally. Free subscription and extra discounts.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-center">What are our expectations</h2>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 mt-12">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Ambassadors help expand Testomat.io where it fits, and help others see the value.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Introduce our integrations to new industries or market segments</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Help new customers and companies adopt Testomatio for the first time, possibly in rewards as part of their expertise and consulting services.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Act as a connector between organizations and community resources</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Mentor professionals exploring Testomat in new contexts</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">What we are looking for</h2>
<p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">We're seeking community members who consistently create engaging software testing content and tutorials on social media, in online communities, and on forums, as well as around Testomatio products and features. Share Knowledge Publicly in Testing.</p>
<button className="bg-white text-slate-900 px-8 py-3 rounded-lg text-base font-medium hover:bg-slate-100 transition-all hover:scale-105">Start Your Application</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50" id="roles">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">What role can you play as an Ambassador</h2>
<p className="text-lg text-slate-600 max-w-3xl mx-auto">As extended team members, Ambassadors are integral to our very existence.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Communicator</h3>
<p className="text-sm text-slate-600">Experience delivering talks at conferences, meetups, events, etc.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Tutor</h3>
<p className="text-sm text-slate-600">A passion for educating fellow developers and engineers</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:mortarboard-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Student</h3>
<p className="text-sm text-slate-600">Take our free training courses and certifications, then share your badges on LinkedIn.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Supporter</h3>
<p className="text-sm text-slate-600">Mentor of newcomers who are just discovering Testomat.io test management.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Collaborator</h3>
<p className="text-sm text-slate-600">Liking communication, answering questions, discussions to foster communities</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Problem solver</h3>
<p className="text-sm text-slate-600">Testing and challenges lovers who find our test management as the best solution</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:square-share-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Promoter</h3>
<p className="text-sm text-slate-600">Distribute valuable content with Testomat.io across social media posts.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:clipboard-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold mb-2">Reviewer</h3>
<p className="text-sm text-slate-600">Write reviews and comparisons on well-known testing websites.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Networker</h3>
<p className="text-sm text-slate-600">Create, join, and grow local or online QA communities (Discord, Slack).</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Contributor</h3>
<p className="text-sm text-slate-600">Develop and share open-source assets, examples, reporters, and project templates.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold mb-2">Integrator</h3>
<p className="text-sm text-slate-600">Create plugins and integrations for popular services (Jira, Slack, CI systems) and frameworks.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-1 flex-shrink-0" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-lg font-semibold mb-2">Advisor</h3>
<p className="text-sm text-slate-600">Report issues and propose detailed improvements with context.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-2xl font-medium text-slate-900 mb-3">Ambassadors are the voice of the testing community!</p>
<p className="text-lg text-slate-600 mb-8">Is this something you're passionate about?</p>
<button className="bg-slate-900 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-slate-800 transition-all hover:scale-105">Become an Ambassador</button>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-white" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Equip with support</h2>
<p className="text-base text-slate-600 leading-relaxed">We'll help you with resources so that you can produce technical and thought leadership content. Right from presentation templates to edits and promotion on Testomat.io social media channels &amp; newsletter, we will help you throughout.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50" id="benefits">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Special benefits for Ambassadors</h2>
<p className="text-lg text-slate-600">What are some of the perks of joining?</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">Product Access</h3>
<p className="text-slate-600 text-base leading-relaxed">Free access to the highest-tier Testomat.io plan for your personal and professional use.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:ranking-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">Direct Influence</h3>
<p className="text-slate-600 text-base leading-relaxed">Priority access to the Product team and early beta access to new features before the public launch.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">High Visibility</h3>
<p className="text-slate-600 text-base leading-relaxed">Dedicated feature spots in Testomat.io marketing, social media shout-outs, and a place in our Official Ambassador Directory. Exclusive on-site profile.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:t-shirt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">Exclusive Swag</h3>
<p className="text-slate-600 text-base leading-relaxed">Premium, limited-edition Testomat.io Ambassador gear and gifts.</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:chat-square-like-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">Ambassador Slack Channel</h3>
<p className="text-slate-600 text-base leading-relaxed">Access to exclusive community</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8">
<iconify-icon className="text-2xl text-slate-700 mb-4" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold mb-3">Partnership Perks</h3>
<p className="text-slate-600 text-base leading-relaxed">Opportunities to participate in affiliate/reseller models, earning rewards for qualified leads and referrals.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 pt-20 pr-4 pb-20 pl-4">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 text-center">What are some of the requirements?</h2>
<div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12">
<p className="text-base text-slate-600 mb-6">While there are a variety of things we're looking for in a potential Ambassador, some of the standard qualities include:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Represent Testomat.io positively and professionally</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Live by our values</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Stay active and contribute regularly</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Agree to abide by and follow our branding and NDA guidelines</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-700 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-slate-700">Be compliant with the Testomat.io Program and Policy</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50" id="ambassadors">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Meet the Ambassadors</h2>
<p className="text-lg text-slate-600 max-w-3xl mx-auto">Get to know the people behind the Testomat.io Community. Follow someone from the listing below.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Conference Speaker</span>
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Content Creator</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Open-Source Developer</span>
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Educator</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Customer Advisor</span>
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Community Leader</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Event Speaker</span>
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Mentor</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Content Creator</span>
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Educator</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
<h3 className="text-lg font-semibold mb-2">Ambassador Name</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">Open-Source Contributor</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 text-center">Application Process</h2>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
<p className="text-base text-slate-700 mb-6 font-medium">To join the program, you must meet the following criteria:</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
<p className="text-base text-slate-700 pt-1">Submit your application on our Ambassador Program page</p>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
<p className="text-base text-slate-700 pt-1">Follow Testomatio on social media (X and LinkedIn)</p>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
<p className="text-base text-slate-700 pt-1">Join our Friends of Testomatio Slack workspace and engage with other quality professionals through sharing recommendations and suggestions</p>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
<p className="text-base text-slate-700 pt-1">Find what you can do best</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 text-center">FAQ</h2>
<div className="space-y-4">
<details className="bg-white border border-slate-200 rounded-xl p-6 group">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium text-lg">
<span>Who can apply to the program?</span>
<iconify-icon className="text-xl text-slate-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-base">Anyone passionate about software testing who actively contributes to the QA community through content creation, speaking, mentoring, or open-source contributions is welcome to apply.</p>
</details>
<details className="bg-white border border-slate-200 rounded-xl p-6 group">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium text-lg">
<span>What if I have additional questions?</span>
<iconify-icon className="text-xl text-slate-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-base">Feel free to reach out to our team through email or join our Slack community where we're happy to answer any questions about the program.</p>
</details>
<details className="bg-white border border-slate-200 rounded-xl p-6 group">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium text-lg">
<span>Is this a paid position?</span>
<iconify-icon className="text-xl text-slate-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-base">While this is not a paid position, ambassadors receive numerous benefits including free access to premium features, exclusive swag, direct product influence, and opportunities for affiliate/reseller partnerships.</p>
</details>
<details className="bg-white border border-slate-200 rounded-xl p-6 group">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium text-lg">
<span>How long does the program last?</span>
<iconify-icon className="text-xl text-slate-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-base">The Ambassador Program is an ongoing initiative. Ambassadors can participate as long as they remain active and continue to meet the program requirements.</p>
</details>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Ready to become a Testomat.io Ambassador?</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Join a global community of testing professionals and help shape the future of software quality.</p>
<button className="bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-all hover:scale-105">Join Now</button>
</div>
</section>

<footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Features</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">About</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Blog</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Community</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Terms</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-600">© 2024 Testomat.io. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-600 hover:text-slate-900" href="#">
<iconify-icon className="text-xl" icon="solar:chat-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-600 hover:text-slate-900" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-600 hover:text-slate-900" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
