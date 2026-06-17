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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0a0a0a', /* Neutral 950 - Almost Black */
charcoal: '#171717', /* Neutral 900 */
gold: '#d7b679', /* NEW Specific Gold */
goldhover: '#c6a568', /* Slightly darker for hover */
gray: '#f8fafc',
border: '#e2e8f0',
}
},
fontSize: {
xxs: '0.625rem',
}
}
}
}

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
      

<header className="fixed w-full top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white flex items-center justify-center text-brand-dark font-serif rounded-sm">
                    W
                </div>
<span className="font-serif text-xl font-semibold text-white tracking-tight">Wynn Advocacy</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="text-white hover:text-brand-gold transition-colors" href="#">Home</a>
<a className="hover:text-brand-gold transition-colors" href="#about">About</a>
<div className="group relative cursor-pointer py-4">
<span className="flex items-center gap-1 hover:text-brand-gold transition-colors">
                        Services <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>

<div className="absolute top-full left-0 w-48 bg-brand-charcoal border border-neutral-800 shadow-xl rounded-md p-2 hidden group-hover:block">
<a className="block px-4 py-2 hover:bg-neutral-800 text-slate-300 hover:text-white text-sm rounded-sm" href="#services">Consultations</a>
<a className="block px-4 py-2 hover:bg-neutral-800 text-slate-300 hover:text-white text-sm rounded-sm" href="#services">Advocacy</a>
<a className="block px-4 py-2 hover:bg-neutral-800 text-slate-300 hover:text-white text-sm rounded-sm" href="#services">Due Process</a>
</div>
</div>
<a className="hover:text-brand-gold transition-colors" href="#">IEP Coaching</a>
<a className="hover:text-brand-gold transition-colors" href="#">Resources</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<div className="flex flex-col items-end text-xs leading-tight">
<span className="text-slate-400">Questions? Call us</span>
<span className="font-medium text-white">702-555-0123</span>
</div>
<a className="bg-brand-gold hover:bg-brand-goldhover text-brand-dark text-sm font-medium px-5 py-2.5 rounded shadow-sm transition-all transform hover:-translate-y-0.5" href="#consultation">
                    Book Free Consultation
                </a>
</div>

<button className="lg:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50 relative overflow-hidden">

<div className="opacity-[0.03] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[#8c7335] text-xs font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                        Advocates in Nevada &amp; Utah
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-brand-dark tracking-tight leading-tight">
                        Helping Parents Secure the Education Their Child <span className="text-brand-gold italic">Deserves</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                        I'm Stephanie Wynn. For almost two decades, we have helped parents navigate the complex world of IEPs with clarity and confidence. Expertise in Dyslexia, ADHD, and ASD.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
<a className="bg-brand-gold text-brand-dark hover:bg-brand-goldhover px-8 py-3.5 rounded text-sm font-medium shadow-md transition-all flex items-center gap-2" href="#consultation">
                            Book Your Free Consultation
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-600 hover:text-brand-gold font-medium text-sm flex items-center gap-2 px-4 py-3" href="https://www.facebook.com/groups/iephelpforparents" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Join Our Community
                        </a>
</div>
<p className="text-xs text-slate-500 font-medium flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-brand-gold iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                        Serving 856+ families across Nevada, Utah &amp; beyond
                    </p>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-white border border-slate-100 relative">

<div className="absolute inset-0 bg-slate-200">
<img alt="Stephanie Wynn speaking to an audience" className="w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/SSOGNDPWpgkNPEUSH1Uy/media/6962cc23c7683b393377fe92.webp"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-dark py-12 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800/50">
<div className="space-y-1">
<span className="block text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">19+</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Years Advocating</span>
</div>
<div className="space-y-1">
<span className="block text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">856+</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Happy Families</span>
</div>
<div className="space-y-1">
<span className="block text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">850+</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Successful IEPs</span>
</div>
<div className="space-y-1">
<span className="block text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">3k+</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Team Meetings</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-brand-dark tracking-tight mb-4">Feeling Overwhelmed by Your Child's IEP?</h2>
<p className="text-slate-600">Every year your child is moving through grade levels—and it's time to take action before they fall further behind.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-sm mb-6 border border-slate-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:ear-off" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46M6 8.5c0-.75.13-1.47.36-2.14M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"></path><path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18M2 2l20 20"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3">Not Being Heard</h3>
<p className="text-sm text-slate-600 leading-relaxed">The school team isn't listening to your concerns or dismissing your input regarding your child's needs.</p>
</div>

<div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-sm mb-6 border border-slate-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-question" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zm6-5h.01"></path><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3">Confusing Process</h3>
<p className="text-sm text-slate-600 leading-relaxed">IEP meetings feel intimidating, the paperwork is complex, and you feel out of your depth legally.</p>
</div>

<div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-sm mb-6 border border-slate-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scale" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-3">Missing Services</h3>
<p className="text-sm text-slate-600 leading-relaxed">You suspect your child isn't getting the services they are legally entitled to, but don't know how to prove it.</p>
</div>
</div>
<div className="text-center mt-12">
<p className="text-brand-dark font-medium mb-2">You don't have to do this alone.</p>
<div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-brand-charcoal/50 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-block px-3 py-1 rounded border border-neutral-700 bg-neutral-800 text-xs tracking-wider uppercase text-slate-300">
                        Our Proven Approach
                    </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white">
                        The Wynn Method of Advocacy™
                    </h2>
<p className="text-slate-400 text-lg font-light leading-relaxed">
                        The Wynn Method combines strategy, compassion, and practical tools to help parents succeed. We empower families to understand the process, communicate effectively, and create legally sound education plans.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded bg-brand-gold flex items-center justify-center text-brand-dark">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clipboard-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Preparation</h4>
<p className="text-sm text-slate-400">Walk into every meeting organized and confident.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded bg-brand-charcoal flex items-center justify-center text-brand-gold border border-neutral-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Knowledge</h4>
<p className="text-sm text-slate-400">Understand your rights and your child's entitlements.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded bg-brand-charcoal flex items-center justify-center text-brand-gold border border-neutral-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:megaphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Advocacy</h4>
<p className="text-sm text-slate-400">Speak effectively to get tangible results.</p>
</div>
</div>
</div>
<a className="inline-flex items-center text-brand-gold hover:text-white transition-colors mt-4 text-sm font-medium" href="#services">
                        See How We Help <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="relative hidden lg:block">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 mt-12">
<div className="bg-brand-charcoal p-6 rounded border border-neutral-700 h-40"></div>
<div className="bg-brand-charcoal p-6 rounded border border-neutral-700 h-56 bg-gradient-to-br from-brand-gold/20 to-neutral-800"></div>
</div>
<div className="space-y-4">
<div className="bg-brand-charcoal p-6 rounded border border-neutral-700 h-56"></div>
<div className="bg-brand-charcoal p-6 rounded border border-neutral-700 h-40"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="consultation">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-brand-dark tracking-tight mb-4">Ready to Take the First Step?</h2>
<p className="text-slate-600">Choose the support option that fits your current needs.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col order-2 lg:order-1">
<div className="mb-4 inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded uppercase tracking-wider w-max">
                        $200 Value
                    </div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Document Review Call</h3>
<div className="text-3xl font-serif font-medium text-brand-dark mb-6">$29</div>
<p className="text-sm text-slate-600 mb-8 flex-grow">
                        30 minutes to review your IEP documents and create a clear action plan. Come prepared with your current IEP.
                    </p>
<a className="w-full block text-center bg-white border border-slate-300 text-slate-700 hover:border-brand-dark hover:text-brand-dark font-medium py-3 rounded transition-all" href="#">
                        Book Now – $29
                    </a>
</div>

<div className="bg-white p-8 rounded-lg shadow-xl border-2 border-brand-gold relative flex flex-col order-1 lg:order-2 transform lg:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                        MOST POPULAR
                    </div>
<h3 className="text-xl font-semibold text-brand-dark mb-2 mt-2">15-Minute Consultation</h3>
<div className="text-3xl font-serif font-medium text-brand-dark mb-6">FREE</div>
<p className="text-sm text-slate-600 mb-8 flex-grow">
                        Quick questions? Let's talk. Get pointed in the right direction with a candid conversation about your situation.
                    </p>
<a className="w-full block text-center bg-brand-gold hover:bg-brand-goldhover text-brand-dark font-medium py-3 rounded shadow-md transition-all" href="#">
                        Book Free Call
                    </a>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex flex-col order-3">
<div className="mb-4 inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded uppercase tracking-wider w-max">
                        First-Time Special
                    </div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">IEP Meeting Attendance</h3>
<div className="text-3xl font-serif font-medium text-brand-dark mb-6">$99</div>
<p className="text-sm text-slate-600 mb-8 flex-grow">
                        I'll join your IEP meeting virtually and advocate alongside you. Experience what it's like to have an expert in your corner.
                    </p>
<a className="w-full block text-center bg-white border border-slate-300 text-slate-700 hover:border-brand-dark hover:text-brand-dark font-medium py-3 rounded transition-all" href="#">
                        Request Support
                    </a>
<p className="text-xxs text-slate-400 text-center mt-3">Requires approval • First-time clients only</p>
</div>
</div>
<div className="text-center mt-12">
<a className="text-slate-500 hover:text-brand-gold text-sm font-medium border-b border-slate-300 hover:border-brand-gold pb-0.5 transition-all" href="#services">
                    Need more comprehensive support? View All Services
                </a>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-5/12">
<div className="relative">
<div className="aspect-[3/4] bg-slate-200 rounded-sm overflow-hidden shadow-lg">
<div className="flex text-slate-400 bg-slate-100 w-full h-full items-center justify-center">
  [Stephanie Wynn Headshot]
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-50 p-4 shadow-lg border border-slate-100 hidden md:flex flex-col items-center justify-center text-center">
<span className="font-serif text-brand-gold text-4xl font-semibold italic tracking-tight">25</span>
<span className="text-xxs uppercase tracking-wider mt-1">Years Experience</span>
</div>
</div>
</div>
<div className="lg:w-7/12 space-y-6">
<h2 className="text-3xl font-semibold text-brand-dark tracking-tight">Meet Stephanie Wynn</h2>
<p className="text-lg text-brand-gold font-medium">Dyslexia &amp; IEP Specialist | Creator of The Wynn Method™</p>
<div className="prose prose-slate text-slate-600">
<p>
                            As a mother of four children—three of whom required IEP services—I understand firsthand the challenges parents face. What started as advocating for my eldest daughter 25 years ago has become my life's mission: ensuring every child receives the education they deserve.
                        </p>
</div>
<ul className="space-y-3 pt-4 border-t border-slate-100">
<li className="flex items-center gap-3 text-sm text-slate-700">
<svg aria-hidden="true" className="iconify text-brand-gold iconify--lucide" data-icon="lucide:award" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
                            International Dyslexia Association Certified Facilitator
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<svg aria-hidden="true" className="iconify text-brand-gold iconify--lucide" data-icon="lucide:award" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
                            Nevada Congressional Recognition
                        </li>
</ul>
<div className="pt-6">
<a className="text-brand-dark font-medium border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors" href="#">Read Full Story</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-3xl font-semibold text-brand-dark tracking-tight">Areas of Expertise</h2>
<div className="h-px bg-slate-200 flex-grow ml-8 hidden md:block"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded border-t-4 border-brand-gold shadow-sm group hover:shadow-md transition-all">
<div className="mb-4 text-brand-dark group-hover:text-brand-gold transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-2">Dyslexia Advocacy</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our primary specialty. We understand the specific accommodations and interventions that actually work for reading challenges.</p>
</div>
<div className="bg-white p-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm group hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand-dark transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-2">ADHD Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Helping families secure appropriate services and behavioral accommodations for attention challenges.</p>
</div>
<div className="bg-white p-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm group hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand-dark transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:puzzle" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-2">Autism Spectrum</h3>
<p className="text-sm text-slate-500 leading-relaxed">Navigating IEPs for students on the spectrum with legal expertise and deep compassion.</p>
</div>
<div className="bg-white p-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm group hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand-dark transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-brand-dark mb-2">Learning Disabilities</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert guidance for all special learning disabilities, 504 plans, and educational accommodations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Hear What Our Clients Are Saying</h2>
<p className="text-slate-400">Families in Nevada, Utah &amp; across the country</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-brand-charcoal p-8 rounded-lg border border-neutral-800 relative">
<div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-30">“</div>
<p className="text-slate-300 italic mb-6 relative z-10 pl-4">
                        Stephanie Wynn is hands down our hero. She literally saved our son from being swallowed up... She helped us understand our rights, our child's rights and the laws/regulations. Our son is now flourishing.
                    </p>
<div className="flex items-center gap-3 pl-4 border-l-2 border-brand-gold">
<div>
<p className="font-medium text-white text-sm">AW</p>
<p className="text-xs text-slate-500">Las Vegas, NV</p>
</div>
</div>
</div>

<div className="bg-brand-charcoal p-8 rounded-lg border border-neutral-800 relative">
<div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-30">“</div>
<p className="text-slate-300 italic mb-6 relative z-10 pl-4">
                        We have filed due process and won with no contest! Thank You Stephanie! She taught me so much and opened my eyes to how much I didn't know about the IEP process.
                    </p>
<div className="flex items-center gap-3 pl-4 border-l-2 border-brand-gold">
<div>
<p className="font-medium text-white text-sm">J.H.</p>
<p className="text-xs text-slate-500">Nevada</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<div className="w-2 h-2 rounded-full bg-neutral-800"></div>
<div className="w-2 h-2 rounded-full bg-neutral-800"></div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-brand-dark tracking-tight text-center mb-16">How Wynn Advocacy Works</h2>
<div className="relative">

<div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="relative z-10 bg-white pt-4 lg:pt-0">
<div className="w-16 h-16 bg-white border-2 border-brand-gold text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm font-serif font-bold text-xl">1</div>
<h3 className="text-lg font-semibold text-brand-dark text-center mb-3">Review</h3>
<p className="text-sm text-slate-600 text-center">We professionally review your records to understand strengths, needs, and learning profile.</p>
</div>

<div className="relative z-10 bg-white pt-4 lg:pt-0">
<div className="w-16 h-16 bg-white border border-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm font-serif font-bold text-xl">2</div>
<h3 className="text-lg font-semibold text-brand-dark text-center mb-3">Strategize</h3>
<p className="text-sm text-slate-600 text-center">We develop a comprehensive plan that meets your child's unique needs and legal rights.</p>
</div>

<div className="relative z-10 bg-white pt-4 lg:pt-0">
<div className="w-16 h-16 bg-white border border-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm font-serif font-bold text-xl">3</div>
<h3 className="text-lg font-semibold text-brand-dark text-center mb-3">Advocate</h3>
<p className="text-sm text-slate-600 text-center">We attend meetings, guide conversations, and ensure your voice is heard.</p>
</div>

<div className="relative z-10 bg-white pt-4 lg:pt-0">
<div className="w-16 h-16 bg-white border border-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm font-serif font-bold text-xl">4</div>
<h3 className="text-lg font-semibold text-brand-dark text-center mb-3">Empower</h3>
<p className="text-sm text-slate-600 text-center">We teach you to monitor implementation and advocate confidently in the future.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-brand-dark tracking-tight mb-12">Serving Families in Nevada, Utah &amp; Beyond</h2>
<div className="grid md:grid-cols-3 gap-6">
<a className="group block bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-semibold text-brand-dark">Nevada</h3>
<svg aria-hidden="true" className="iconify text-slate-300 group-hover:text-brand-gold transition-colors iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<p className="text-sm text-slate-600 mb-6">Las Vegas, Henderson, Clark County, and all Nevada school districts.</p>
<span className="text-xs font-medium text-brand-gold uppercase tracking-wide group-hover:underline">Nevada Advocacy →</span>
</a>
<a className="group block bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-semibold text-brand-dark">Utah</h3>
<svg aria-hidden="true" className="iconify text-slate-300 group-hover:text-brand-gold transition-colors iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<p className="text-sm text-slate-600 mb-6">Salt Lake City, Provo, and Utah school districts.</p>
<span className="text-xs font-medium text-brand-gold uppercase tracking-wide group-hover:underline">Utah Advocacy →</span>
</a>
<a className="group block bg-white p-8 rounded border border-slate-200 hover:border-brand-gold/50 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-semibold text-brand-dark">Virtual Services</h3>
<svg aria-hidden="true" className="iconify text-slate-300 group-hover:text-brand-gold transition-colors iconify--lucide" data-icon="lucide:monitor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<p className="text-sm text-slate-600 mb-6">Consultations available for families in NY, Florida, California, and nationwide.</p>
<span className="text-xs font-medium text-brand-gold uppercase tracking-wide group-hover:underline">Book Virtual →</span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-brand-dark relative overflow-hidden">
<div className="absolute inset-0 bg-blue-900/10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-2xl font-semibold text-white mb-4">Join Our Free Parent Community</h2>
<p className="text-slate-300 mb-8 max-w-2xl mx-auto">Connect with other IEP parents, get answers to your questions, and access ongoing support in our private Facebook group.</p>
<a className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-6 py-3 rounded font-medium transition-colors" href="https://www.facebook.com/groups/iephelpforparents" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Join Facebook Group
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-5xl font-semibold text-brand-dark tracking-tight mb-8 font-serif leading-tight">
                Because When It Comes to Your Child's Education, There's No Room for Uncertainty
            </h2>
<div className="flex flex-col items-center gap-6">
<a className="bg-brand-gold hover:bg-brand-goldhover text-brand-dark text-lg font-medium px-10 py-4 rounded shadow-lg transition-all transform hover:-translate-y-1" href="#consultation">
                    Book Your Free Consultation
                </a>
<div className="text-sm text-slate-500">
<p>Or call us: <span className="text-brand-dark font-semibold">702-555-0123</span></p>
<p className="mt-1">Info@wynnadvocacy.com</p>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-neutral-800 pt-16 pb-8 text-sm text-slate-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-2 md:col-span-1 space-y-4">
<div className="font-serif text-xl font-bold text-white tracking-tight">Wynn Advocacy</div>
<p className="text-slate-400 leading-relaxed">Expert IEP Advocacy for Nevada &amp; Utah Families. Navigating the system so your child can thrive.</p>
<div className="space-y-1 text-slate-500 pt-2">
<p>Las Vegas, Nevada</p>
<p>Salt Lake City, Utah</p>
</div>
</div>

<div className="space-y-4">
<h4 className="font-semibold text-white">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-brand-gold transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#about">About</a></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="font-semibold text-white">Services</h4>
<ul className="space-y-2">
<li><a className="hover:text-brand-gold transition-colors" href="#">Free Consultation</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Document Review</a></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="font-semibold text-white">Connect</h4>
<ul className="space-y-2">
<li><a className="hover:text-brand-gold transition-colors" href="https://www.facebook.com/groups/iephelpforparents">Facebook Community</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="mailto:info@wynnadvocacy.com">info@wynnadvocacy.com</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-xs">© 2025 Wynn Advocacy, All Rights Reserved</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
<div className="mt-8 p-4 bg-brand-charcoal rounded text-xxs text-slate-500 leading-relaxed text-center border border-neutral-800">
                Wynn Advocacy and Stephanie Wynn do not provide legal advice. The information and resources available on this website are provided for educational and informational purposes only and should not be relied upon as legal guidance. Every situation is unique, and you should consult with a licensed attorney regarding your specific circumstances.
            </div>
</div>
</footer>

    </>
  );
}
