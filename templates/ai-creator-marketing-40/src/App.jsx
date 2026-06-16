import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();

        // Handle expanding feature cards securely without re-rendering HTML
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.feature-card');
            
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    this.classList.toggle('feature-expanded');
                    const desc = this.querySelector('.feature-description');
                    if (desc.classList.contains('hidden')) {
                        desc.classList.remove('hidden');
                    } else {
                        desc.classList.add('hidden');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden -z-10 pointer-events-none flex justify-center">
<div className="w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/60 via-amber-50/20 to-transparent blur-3xl opacity-70 translate-y-[-20%]"></div>
</div>

<header className="w-full">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center">
<div className="border-[1.5px] border-zinc-900 rounded-full px-5 py-1.5 flex items-center justify-center">
<span className="text-base font-medium tracking-tight mt-[1px]">archive</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-10">
<a className="text-base font-medium text-zinc-900 flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">
                    Product <i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="text-base font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Customer Stories</a>
<a className="text-base font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Pricing</a>
</nav>

<div className="flex items-center gap-8">
<a className="hidden md:block text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                    Login
                </a>
<a className="h-11 px-6 bg-[#18181B] text-white rounded-lg font-medium flex items-center justify-center hover:bg-black transition-colors text-base" href="https://github.com/archive-dot-com/creator-marketing-skills" rel="noopener noreferrer" target="_blank">
                    Book a Demo
                </a>
</div>
</div>
</header>
<main className="">

<section className="md:pt-32 md:pb-28 z-10 text-center max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative">
<h1 className="md:text-7xl leading-[1.1] text-5xl text-zinc-900 tracking-tight font-serif mb-6"><span className="text-zinc-500">Free</span> AI-Powered Skills for Creator Marketing</h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-zinc-600 max-w-2xl mr-auto mb-10 ml-auto">Directly download &amp; install Claude Code skills that automate the repetitive, manual work in creator marketing.  Each skill encodes real creator marketing expertise so the output is ready to use, not just a starting point.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center justify-center hover:bg-black transition-colors sm:w-auto text-lg font-medium text-white bg-[#18181B] w-full h-12 rounded-lg pr-7 pl-7 shadow-sm" href="https://github.com/archive-dot-com/creator-marketing-skills" rel="noopener noreferrer" target="_blank">Try Now</a>
</div>
</section>

<section className="z-10 pt-16 pr-6 pb-32 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<p className="text-base font-medium text-zinc-500 mb-10">AI Skills Made For Every Part of your Creator Program</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="features-grid">

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Discovery &amp; Vetting
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Automatically search platforms based on complex criteria and vet profiles against brand safety guidelines and engagement benchmarks.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Outreach &amp; Negotiation
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Draft hyper-personalized initial outreach messages and handle multi-step rate negotiation based on historical pricing data.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Campaign Setup &amp; Briefing
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Generate comprehensive creative briefs, talking points, and setup UTM tracking parameters for entire rosters in seconds.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Content Review
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Scan submitted content against your specific brand guidelines, FTC requirements, and required deliverables list before approval.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Metrics &amp; Monitoring
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Track real-time engagement, audience sentiment, and comment themes during active campaign flights without manual scrolling.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Reporting &amp; ROI
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Instantly compile post-campaign performance data across platforms to calculate CPE, CPA, and overall return on investment.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Trend Analysis
                            </h3>
<div className="flex shrink-0 group-hover:border-zinc-300 transition-colors w-6 h-6 border-zinc-200 border rounded-full mt-0.5 items-center justify-center">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Monitor specific social platforms and niches for emerging audio, visual, and conceptual trends relevant to your brand identity.
                            </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group feature-card shadow-sm">
<div className="flex items-start justify-between gap-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 leading-tight select-none">
                                Influencer CRM
                            </h3>
<div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 group-hover:border-zinc-300 transition-colors mt-0.5">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 feature-icon-transition" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
<div className="feature-description hidden mt-4 pt-4 border-t border-zinc-100">
<p className="text-lg text-zinc-600 leading-relaxed select-none">
                                Automatically parse email threads to update your database with latest shipping addresses, content rates, and relationship status.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl text-zinc-900 tracking-tight font-serif mb-4">Install once. Start automating immediately.</h2>
<p className="text-lg font-medium text-zinc-500"></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-zinc-100 -z-10"></div>
<div className="flex flex-col items-center text-center relative bg-white px-4">
<div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 shadow-sm">
<i className="w-6 h-6 text-zinc-900" data-lucide="download" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">1. Clone Repo</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Clone or download the skills repository from GitHub to your local machine.</p>
</div>
<div className="flex flex-col items-center text-center relative bg-white px-4">
<div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 shadow-sm">
<i className="w-6 h-6 text-zinc-900" data-lucide="terminal" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">2. Point Claude</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Navigate to the directory in your terminal and point Claude to the skills folder.</p>
</div>
<div className="flex flex-col items-center text-center relative bg-white px-4">
<div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 shadow-sm">
<i className="w-6 h-6 text-zinc-900" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">3. Automate</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Begin chatting with Claude and ask it to execute the specific creator marketing workflows.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center gap-2 text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="https://github.com/archive-dot-com/creator-marketing-skills/tree/main#readme" rel="noopener noreferrer" target="_blank">
                        Read the full documentation
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200 bg-[#FAFAFA]">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl text-zinc-900 tracking-tight font-serif mb-8 text-center md:text-left">
                    We're building tools to automate Creator Marketing. <span className="text-zinc-500">This is part of it.</span>
</h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-medium">
<p>Archive is an AI-powered social listening + creator discovery platform that captures everything your community posts, sources on-brand creators, and automates the manual workflows of creator marketing like reporting, gifting, and usage rights.</p>
<p>We built these skills because the best creator marketing teams aren't the ones with the biggest budgets, they're the ones who use AI to automate the manual work, so they can focus on the relationships, creative direction, and strategic calls that actually move programs forward.</p>
<p>These skills are free because the more creator marketers who use AI well, the better the whole industry gets. And honestly, we think you should have better tools regardless of whether you use Archive.</p>
</div>
</div>
</section>
</main>

<footer className="py-12 border-t border-zinc-200 bg-white px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<div className="border-[1.5px] border-zinc-900 rounded-full px-4 py-1 flex items-center justify-center">
<span className="text-sm font-medium tracking-tight mt-[1px]">archive</span>
</div>
</div>
<p className="text-base text-zinc-500 font-medium text-center md:text-left">
                The AI social listening + creator discovery platform.
            </p>
<div className="flex items-center gap-6">
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="https://archive.com" rel="noopener noreferrer" target="_blank">
                    archive.com
                </a>
</div>
</div>
</footer>


    </>
  );
}
