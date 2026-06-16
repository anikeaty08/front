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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
},
},
},
},
};



      // Scroll Reveal Script
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed glass-nav transition-all duration-300 w-full top-0">
<div className="flex h-24 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="InfoApp Logo" className="h-20 w-auto object-contain" src="https://infoapp.com/assets/img/logo/post_logo.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="https://infoapp-documents.s3.amazonaws.com/1435_11716.pdf">
            Why InfoApp
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#features">
            Features
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="/pricing">
            Pricing
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block hover:text-black transition-colors text-sm font-medium text-gray-600" href="/login">
            Login
          </a>
<a className="px-4 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-sm hover:ring-4 hover:ring-gray-100" href="/get-started">
            Sign Up
          </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" onclick="window.location.href='/pricing'" role="button">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b to-transparent rounded-full blur-3xl opacity-60 -z-10 from-green-50/50"></div>
<div className="max-w-4xl mx-auto text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-8 transition-transform hover:scale-105 cursor-default bg-green-50/50 border-green-200/60">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-gray-600 tracking-wide uppercase">
            AI-Powered Productivity
          </span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-gray-900 tracking-tight mb-8">
          Accelerate your daily tasks with
          <span className="ai-gradient">AI</span>
          .
        </h1>
<p className="text-xl md:text-2xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
          Use AI to minimize the effort of writing emails, updating the CRM, and
          finding the right content.
          <span className="text-gray-900 font-medium">
            Save up to 2 hours of work each day.
          </span>
</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="sm:w-auto hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 flex gap-2 group text-sm font-medium text-white bg-black w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
<a className="" href="/pricing">Start Free Trial</a>
<iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto relative reveal active">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 aspect-video group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity" frameborder="0" src="https://www.youtube.com/embed/du9GO9tN5iE?si=Hq6sZ7_g8l4_g7u_" title="InfoApp Demo"></iframe>
</div>

<div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-2xl opacity-20 -z-10 pointer-events-none"></div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-gray-100" id="features">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm group reveal">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100/50">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              AI Writer
            </h3>
<p className="text-gray-500 leading-relaxed text-base">
              Streamline information capture and enable effective communication.
              Summarize and organize thoughts instantly.
            </p>
</div>

<div className="p-8 rounded-3xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm group reveal">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 border border-green-100/50">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              CRM Updater
            </h3>
<p className="text-gray-500 leading-relaxed text-base">
              Seamlessly integrate with Salesforce or HubSpot. Update
              interactions, opportunities, and accounts automatically.
            </p>
</div>

<div className="p-8 rounded-3xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm group reveal">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100/50">
<iconify-icon className="text-2xl" icon="solar:share-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              Content Share
            </h3>
<p className="text-gray-500 leading-relaxed text-base">
              Manage the message. Content follows you across the web, ready to
              be shared with customers at any moment.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto space-y-40">

<div className="grid md:grid-cols-2 gap-20 items-center reveal">
<div className="order-2 md:order-1 relative group">
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
<img alt="Communication" className="w-full h-auto rounded-lg shadow-sm transition-all duration-500 shadow-md transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1632&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-blue-100/50 rounded-3xl blur-3xl -z-10 transform translate-y-4 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              Keep communication open after the meeting.
            </h2>
<p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Don't let the conversation die. Engage the customer with updated
              content or other information of interest immediately following
              your interaction.
            </p>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-green-500 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-600">
                  Instant follow-up protocols
                </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-green-500 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-600">
                  Track engagement automatically
                </span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-20 items-center reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              It takes minutes to set up.
            </h2>
<p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Simply link your Content URLs to an InfoApp and send specific
              content that fits your customer’s need. No complex integrations
              required.
            </p>
<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-gray-900">
                    Brand Customization
                  </h4>
<p className="text-base text-gray-500">
                    Match your company's look and feel.
                  </p>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:bell-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-gray-900">
                    Smart Alerts
                  </h4>
<p className="text-base text-gray-500">
                    Get notified upon customer interaction.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative group">
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
<img alt="Setup" className="w-full h-auto rounded-lg shadow-sm grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shadow-md transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-orange-100/50 rounded-3xl blur-3xl -z-10 transform translate-y-4 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-20 items-center reveal">
<div className="order-2 md:order-1 relative group">
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
<img alt="Distribution" className="w-full h-auto rounded-lg shadow-sm grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shadow-md transition-transform group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-purple-100/50 rounded-3xl blur-3xl -z-10 transform translate-y-4 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              Build one for all.
            </h2>
<p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Distribute an InfoApp to your entire team with one click. Review
              interactions in the dashboard and adjust for success with our
              Actionable Analytics.
            </p>
<a className="text-black font-medium text-lg inline-flex items-center gap-2 border-b border-black pb-0.5 hover:gap-4 transition-all hover:text-gray-600 hover:border-gray-600 group" href="mailto:contact@infoapp.com?Subject=Need%20Help">
              Learn about Enterprise
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gray-50 border-y border-gray-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            Claim all these advantages
          </h2>
<p className="text-xl text-gray-500">
            Comprehensive tools designed to drive revenue.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group hover:border-green-200/50">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-green-600 transition-colors text-3xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Increase Revenue
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-blue-600 transition-colors text-3xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              More Selling Time
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-purple-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-purple-600 transition-colors text-3xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Actionable Analytics
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-orange-600 transition-colors text-3xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Central Organization
            </span>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-indigo-600 transition-colors text-3xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Content at Fingertips
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-blue-500 transition-colors text-3xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Customer Customization
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-red-500 transition-colors text-3xl" icon="solar:bell-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Follow-up Alerts
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-slate-200 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-slate-800 transition-colors text-3xl" icon="solar:settings-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Automated Workflow
            </span>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-yellow-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-yellow-500 transition-colors text-3xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Faster Response
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-indigo-500 transition-colors text-3xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">Credibility</span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-teal-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-teal-500 transition-colors text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Sales &amp; Marketing Align
            </span>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all reveal group">
<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-pink-50 transition-colors">
<iconify-icon className="text-gray-600 group-hover:text-pink-500 transition-colors text-3xl" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-gray-800">
              Transfer Traction
            </span>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center bg-black rounded-[3rem] p-12 md:p-24 relative overflow-hidden reveal shadow-2xl">

<div className="absolute top-0 right-0 w-80 h-80 bg-green-500/30 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
            Claim your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
              Free Trial
            </span>
</h2>
<p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Supported on Desktop and Laptop. Experience the future of sales
            productivity today.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-block sm:w-auto hover:bg-gray-100 transition-all transform hover:scale-105 text-sm font-medium text-black text-center bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="/get-started">
              Start Free Now
            </a>
<a className="sm:w-auto hover:bg-white/10 transition-all inline-block text-sm font-medium text-white text-center w-full border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8" href="/pricing">
              View Pricing
            </a>
</div>
<div className="mt-16 pt-10 border-t border-white/10">
<p className="text-sm text-gray-500">Still have questions?</p>
<a className="hover:text-green-400 transition-colors inline-flex items-center gap-1 group text-sm font-medium text-white mt-2" href="mailto:contact@infoapp.com?Subject=Need%20Help">
              Contact Support
              <iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-16 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">

<img alt="InfoApp Logo" className="hover:opacity-100 transition-opacity opacity-50 w-auto h-16 grayscale" src="https://infoapp.com/assets/img/logo/post_logo.png"/>
<span className="text-sm text-gray-400" style={{}}>© 2026 InfoApp</span>
</div>
<div className="flex gap-8">
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">
            Privacy Notice
          </a>
<a className="hover:text-black transition-colors text-sm text-gray-500" href="mailto:contact@infoapp.com?Subject=Need%20Help">
            Contact
          </a>
</div>
</div>
</footer>



    </>
  );
}
