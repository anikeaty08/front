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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-blue-50/80 backdrop-blur-md border-b border-orange-400">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-2xl font-bold tracking-tighter uppercase text-zinc-950" href="#">SIGNAL MEDIA CO.</a>
<div className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-zinc-900 transition-colors" href="#newsletter">Newsletter</a>
</div>
<a className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors" href="#newsletter">Get a Free Review</a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full text-xs font-medium text-orange-800 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span>Accepting new clients for review</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight mb-6">
                Maximize Your Market Value. <br className="hidden md:block"/> <span className="text-orange-600">Elevate Your Career.</span>
</h1>
<p className="text-base md:text-xl text-zinc-500 mb-10 max-w-2xl leading-relaxed">
                Expert resume optimization and career positioning for ambitious professionals, creators, and business owners. Stop leaving money on the table.
            </p>
<div className="flex flex-col sm:flex-row items-center w-full justify-center">
<a className="w-full sm:w-auto bg-orange-600 text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm" href="#newsletter">
                    Get a Free Resume Review When You Sign Up
                </a>
</div>
</div>
</section>

<section className="py-20 bg-blue-100 border-y border-orange-400">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950 mb-4">The game is rigged if you don't know the rules.</h2>
<p className="text-base text-zinc-500">Most professionals lose their leverage before they even sit at the table.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl bg-white border border-zinc-100 hover:border-orange-200 transition-colors">
<iconify-icon className="text-2xl text-orange-500 mb-4" icon="solar:ghost-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">The Silent Rejection</h3>
<p className="text-sm text-zinc-500">Applying to dozens of roles with zero response. Your resume isn't telling the right story to capture the attention of the human recruiters actually reviewing it.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-zinc-100 hover:border-orange-200 transition-colors">
<iconify-icon className="text-2xl text-orange-500 mb-4" icon="solar:question-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">The Missing Feedback</h3>
<p className="text-sm text-zinc-500">Making it to final rounds but never getting the offer, without ever knowing exactly where your interview strategy fell apart.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-zinc-100 hover:border-orange-200 transition-colors">
<iconify-icon className="text-2xl text-orange-500 mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Undervaluing Output</h3>
<p className="text-sm text-zinc-500">Accepting the first number thrown at you. Leaving thousands of dollars and critical benefits on the table due to fear of negotiation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-white px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Level the <span className="text-orange-500">playing field.</span></h2>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-10">
                Signal Media Co. translates your experience into leverage. Whether you need to position yourself as the top candidate for a high-paying role, or refine your professional pitch, we provide the strategic insight to ensure you win the negotiation.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-300 font-medium border-t border-orange-500 pt-10">
<div className="flex flex-col items-center justify-center p-4">
<span className="text-2xl font-semibold text-white mb-1 tracking-tight">Focus</span>
                    Career Positioning
                </div>
<div className="flex flex-col items-center justify-center p-4">
<span className="text-2xl font-semibold text-white mb-1 tracking-tight">Clarity</span>
                    Resume Optimization
                </div>
<div className="flex flex-col items-center justify-center p-4">
<span className="text-2xl font-semibold text-white mb-1 tracking-tight">Tactics</span>
                    Interview Strategy
                </div>
</div>
</div>
</section>

<section className="bg-blue-50 pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Targeted Advisory Services</h2>
<p className="text-base text-zinc-500 max-w-2xl">High-impact reviews and strategy sessions designed to deliver immediate ROI.</p>
</div>
<div className="space-y-8">

<div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-orange-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-orange-600" icon="solar:file-check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<h3 className="text-xl font-semibold tracking-tight text-zinc-950">Resume &amp; Profile Review</h3>
<span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-md font-medium tracking-tight">Free with Newsletter</span>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                            Stop getting lost in the pile. A comprehensive teardown of your resume and LinkedIn profile to align with exactly what hiring managers and recruiters are searching for.
                        </p>
<ul className="space-y-2 text-sm text-zinc-600 mb-6">
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Recruiter-focused optimization &amp; formatting overhaul</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Reframing duties into quantifiable achievements</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Ideal for active job seekers needing immediate traction</li>
</ul>
<a className="inline-flex items-center bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors" href="#newsletter">
                            Claim Your Free Review <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-orange-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-orange-600" icon="solar:target-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3">Personal Branding &amp; Career Tactics</h3>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                            Position yourself as the prize. We break down the narrative you bring to interviews, refine your personal pitch, and provide inside perspective on how hiring decisions are actually made.
                        </p>
<ul className="space-y-2 text-sm text-zinc-600 mb-6">
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Crafting a compelling professional narrative</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Objection handling and interview frameworks</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Ideal for mid-career professionals looking to step up</li>
</ul>
<a className="inline-flex items-center bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors" href="https://tally.so/r/Me5jG8" rel="noopener noreferrer" target="_blank">
                            Book Strategy Session <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-orange-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-orange-600" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-zinc-950 mb-3">Ghostwriting for Personal &amp; Company Brands</h3>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                            Amplify your reach and establish industry authority. We craft high-impact content in your voice, ensuring your personal or company brand stays top-of-mind without demanding your full schedule.
                        </p>
<ul className="space-y-2 text-sm text-zinc-600 mb-6">
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Authentic voice and tone matching</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Consistent thought leadership content generation</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Ideal for founders, executives, and scaling businesses</li>
</ul>
<a className="inline-flex items-center bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors" href="mailto:voicewithin234@gmail.com?subject=Ghostwriting%20Inquiry" rel="noopener noreferrer" target="_blank">
                            Submit Request via Email <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-blue-100 border-orange-400 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-2">Free Frameworks</h2>
<p className="text-sm text-zinc-500">Actionable guides to start improving your positioning today.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between hover:border-orange-300 transition-colors">
<div className="">
<div className="text-xs font-medium text-orange-600 mb-2 uppercase tracking-widest">Guide</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">The High-Signal Resume</h3>
<p className="text-sm text-zinc-600 mb-6">Learn the exact framework to strip out fluff and highlight metrics that make recruiters actually stop scrolling.</p>
</div>
<form className="flex w-full gap-2" onsubmit="event.preventDefault(); alert('Success! Please check your email for the guide.');">
<input className="flex-1 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-orange-600 transition-colors text-sm bg-white border-zinc-200 border rounded-md pt-2 pr-3 pb-2 pl-3" placeholder="Email address" required="" type="email"/>
<button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer" type="submit">Get Guide</button>
</form>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between hover:border-orange-300 transition-colors">
<div className="">
<div className="text-xs font-medium text-orange-600 mb-2 uppercase tracking-widest">Playbook</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">The Interview Pivot</h3>
<p className="text-sm text-zinc-600 mb-6">A 5-step playbook on how to steer interview conversations away from weaknesses and toward your unique value.</p>
</div>
<form className="flex w-full gap-2" onsubmit="event.preventDefault(); alert('Success! Please check your email for the playbook.');">
<input className="flex-1 px-3 py-2 bg-white border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-orange-600 transition-colors" placeholder="Email address" required="" type="email"/>
<button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer" type="submit">Get Playbook</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50 px-6" id="testimonials">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">Results Speak</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">Real outcomes from professionals who stopped guessing and started strategizing. <br/> <a className="text-orange-600 underline underline-offset-4 decoration-orange-300 hover:decoration-orange-600 transition-colors" href="https://topmate.io/dashboard/testimonials/all" rel="noopener noreferrer" target="_blank">Read all reviews on Topmate.</a></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<p className="text-sm text-zinc-600 italic mb-6">"I was applying to senior roles and hearing nothing. Signal Media Co. ripped my resume apart, reframed my experience, and within two weeks I had 4 interviews lined up. Total game changer."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-semibold text-orange-700">MD</div>
<div>
<div className="text-sm font-medium text-zinc-900">Mark D.</div>
<div className="text-xs text-zinc-500">Director of Ops</div>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<p className="text-sm text-zinc-600 italic mb-6">"I've always struggled with negotiating. The strategy session helped me understand my actual market value. I ended up negotiating a 25% higher base than initially offered without feeling aggressive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-semibold text-orange-700">TK</div>
<div>
<div className="text-sm font-medium text-zinc-900">Tom K.</div>
<div className="text-xs text-zinc-500">Product Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-950 text-white px-6">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Expertise backed by data.</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Decisions in hiring are rarely transparent. We bring years of inside Talent Acquisition and operational experience to demystify the process, helping thousands of readers and clients secure better roles and advance their careers. We have reviewed 10k resumes and hired thousands of top talent.
                </p>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 border-t md:border-t-0 md:border-l border-orange-500 pt-8 md:pt-0 md:pl-12 w-full">
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">10+</div>
<div className="text-xs text-orange-500 uppercase tracking-widest font-medium">Years Talent Acquisition</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">5k+</div>
<div className="text-xs text-orange-500 uppercase tracking-widest font-medium">Newsletter Readers</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white mb-1">10k+</div>
<div className="text-xs text-orange-500 uppercase tracking-widest font-medium">Resumes Reviewed</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-100 px-6 border-b border-orange-400">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-zinc-950 mb-16">Simple, High-Speed Process</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-orange-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-sm font-semibold text-zinc-950 mb-4 shadow-sm">1</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Submit Material</h3>
<p className="text-sm text-zinc-500">Upload your resume or job description via our secure portal with your specific context and goals.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-sm font-semibold text-zinc-950 mb-4 shadow-sm">2</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Deep-Dive Review</h3>
<p className="text-sm text-zinc-500">We analyze the document line-by-line, identifying red flags, missing leverage, and areas for optimization.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-sm font-semibold text-white mb-4 shadow-sm ring-4 ring-orange-100">3</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Actionable Feedback</h3>
<p className="text-sm text-zinc-500">Receive a detailed breakdown, redlined document, or strategy call to execute your next move with confidence.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-50 pt-24 pr-6 pb-24 pl-6" id="newsletter">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-3xl text-orange-600" icon="solar:letter-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">The Full Picture Newsletter</h2>
<p className="text-base text-zinc-600 mb-8 leading-relaxed">
                Join thousands of professionals getting weekly, no-fluff insights on career growth and market leverage. <br className="hidden md:block"/> <strong className="text-zinc-900 font-semibold">Sign up today and get a free resume review.</strong>
</p>
<div className="bg-white p-2 rounded-lg border border-zinc-200 shadow-sm max-w-md mx-auto flex items-center focus-within:ring-1 focus-within:ring-orange-600 focus-within:border-orange-600 transition-all">
<input className="flex-1 px-4 py-2 bg-transparent text-sm focus:outline-none placeholder:text-zinc-400" placeholder="Your best email" type="email"/>
<a className="bg-orange-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer" href="https://thefullpicturenewsletter.substack.com/subscribe" rel="noopener noreferrer" target="_blank">
                    Join The Newsletter
                </a>
</div>
<p className="text-xs text-zinc-400 mt-4">Join over 5,000+ ambitious readers. Unsubscribe anytime.</p>
</div>
</section>

<section className="bg-blue-100 border-orange-400 border-t pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-950 mb-6">Stop leaving money and <span className="text-orange-600">opportunity</span> on the table.</h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
                Whether you need to overhaul your resume or perfect your pitch, get the expert eyes you need to make your next move your best move.
            </p>
<a className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20" href="#newsletter">
                Get Your Free Resume Review
            </a>
</div>
</section>

<footer className="bg-blue-50 border-t border-orange-400 py-12 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
<div className="text-2xl font-bold tracking-tighter uppercase text-zinc-950">SIGNAL MEDIA CO.</div>
<div className="flex flex-col items-center md:items-end gap-3">
<div className="flex space-x-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-orange-600 transition-colors" href="https://thefullpicturenewsletter.substack.com/subscribe" rel="noopener noreferrer" target="_blank">Newsletter</a>
<a className="hover:text-orange-600 transition-colors" href="https://topmate.io/dashboard/testimonials/all" rel="noopener noreferrer" target="_blank">Testimonials</a>
<a className="hover:text-orange-600 transition-colors" href="mailto:hello@signalmediaco.com" rel="noopener noreferrer" target="_blank">Contact</a>
</div>
<div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm text-zinc-500 font-medium">
<a className="hover:text-orange-600 transition-colors" href="https://www.linkedin.com/in/kgrunewald/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
<a className="hover:text-orange-600 transition-colors" href="https://www.instagram.com/kevtherecruiter/" rel="noopener noreferrer" target="_blank">Instagram</a>
<a className="hover:text-orange-600 transition-colors" href="https://www.threads.com/@kevtherecruiter?xmt=AQF0jUl6YSbjg6_B-IDyD2RjUzGiF1oVIEZlZhhm7MghLr8" rel="noopener noreferrer" target="_blank">Threads</a>
<a className="hover:text-orange-600 transition-colors" href="https://youtube.com/@career-signal?si=3Gx5ARXzQ_k_q9r-" rel="noopener noreferrer" target="_blank">YouTube</a>
</div>
</div>
</div>
<div className="border-t border-orange-400 pt-8 mt-8">
<h4 className="text-xs font-semibold text-zinc-900 mb-2 uppercase tracking-widest">Important Disclaimer</h4>
<p className="text-xs text-zinc-500 leading-relaxed text-justify md:text-left">
                    Signal Media Co. is an advisory and consulting service. The information provided on this website, in our newsletter, or during review sessions does not constitute legal, financial, or tax advice. Any strategy provided is for educational and informational purposes only to help you understand career strategy and positioning.
                </p>
<p className="text-xs text-zinc-400 mt-6 text-center md:text-left">
                    © 2024 Signal Media Co. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
