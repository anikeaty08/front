import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
green: '#66c61c',
black: '#050505', // Slightly off-black for better pattern visibility
dark: '#1a1a1a',
light: '#f8f9fa',
gray: '#666666'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'card': '0 5px 25px rgba(0, 0, 0, 0.08)',
'glow': '0 0 20px rgba(102, 198, 28, 0.3)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // FAQ Accordion Logic (Fixed)
        function toggleFaq(header) {
            const currentItem = header.parentElement;
            const content = currentItem.querySelector('.faq-content');
            const icon = currentItem.querySelector('.faq-icon');
            const isAlreadyActive = currentItem.classList.contains('active');

            // 1. Close ALL FAQ items first
            document.querySelectorAll('.faq-item').forEach(item => {
                // Remove active class
                item.classList.remove('active');
                
                // Reset Icon Rotation
                const itemIcon = item.querySelector('.faq-icon');
                if(itemIcon) itemIcon.style.transform = 'rotate(0deg)';
                
                // Collapse Content
                const itemContent = item.querySelector('.faq-content');
                if(itemContent) {
                    itemContent.style.maxHeight = '0px';
                    itemContent.style.opacity = '0';
                }
            });

            // 2. If the clicked item wasn't already active, open it
            if (!isAlreadyActive) {
                currentItem.classList.add('active');
                
                // Rotate Icon
                if(icon) icon.style.transform = 'rotate(45deg)';
                
                // Expand Content
                if(content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.opacity = '1';
                }
            }
        }

        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => {
                observer.observe(el);
            });
        });

        // Initialize Lucide Icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 glass-badge bg-black/80 w-full border-white/5 border-b top-0 backdrop-blur-md py-2">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center pt-3">
<img alt="The Daily Mastermind" className="w-[200px] sm:w-[250px] h-auto object-contain" src="https://storage.googleapis.com/msgsndr/Vc8L4W3QjMgzc8HL6F7q/media/6858734efcdab6ed5ceb98be.png"/>
</div>
<a className="hidden sm:block bg-brand-green hover:bg-[#5bb319] text-white text-sm font-bold py-2 px-6 transition-all hover:shadow-glow rounded-none" href="#packages">
                Apply Now
            </a>
</div>
</nav>

<section className="min-h-screen flex flex-col hero-gradient overflow-hidden pt-20 pr-6 pb-32 pl-6 relative items-center justify-center">

<div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-30 pointer-events-none z-0"></div>
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
</div>
<div className="z-10 flex flex-col reveal active text-center max-w-5xl mr-auto ml-auto relative space-y-8 items-center">

<div className="glass-badge px-4 py-1.5 flex items-center gap-2 animate-fade-in rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="sm:text-sm text-xs font-medium text-white/90 tracking-wide">1,200+ Episodes | Featured on Apple, Spotify, Youtube</span>
</div>

<h1 className="sm:text-5xl md:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight">Get Featured on <br className="hidden md:block"/> The Daily Mastermind &amp; <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Build Massive Authority</span></h1>

<p className="sm:text-xl leading-relaxed text-lg font-light text-gray-400 max-w-3xl">Join hundreds of entrepreneurs and CEOs who've transformed their credibility, expanded their reach, and positioned themselves as industry leaders through our proven Authority Media Program.</p>

<div className="pt-4">
<a className="group relative inline-flex items-center gap-2 bg-brand-green hover:bg-[#5bb319] text-white text-lg font-bold py-4 px-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow rounded-none border border-transparent hover:border-white/20" href="#packages">
<span className="">Apply to Be Featured</span>
<svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="text-xs text-gray-500 tracking-widest font-mono mt-4">LIMITED INTERVIEW SPOTS: Q1 2026</p>
</div>
</section>

<section className="relative z-20 px-4 sm:px-6">
<div className="max-w-7xl mx-auto -mt-20">
<div className="bg-white shadow-xl border border-gray-100 p-8 sm:p-10 reveal rounded-none relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-full"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 relative z-10">

<div className="text-center pt-4 sm:pt-0">
<div className="text-4xl sm:text-5xl font-bold text-brand-green tracking-tight mb-2">1,200+</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider font-mono">Episodes</div>
</div>

<div className="text-center pt-4 sm:pt-0">
<div className="text-4xl sm:text-5xl font-bold text-brand-green tracking-tight mb-2">100K+</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider font-mono">Listeners</div>
</div>

<div className="text-center pt-4 sm:pt-0">
<div className="text-4xl sm:text-5xl font-bold text-brand-green tracking-tight mb-2">5K+</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider font-mono">Guests</div>
</div>

<div className="text-center pt-4 sm:pt-0">
<div className="text-4xl sm:text-5xl font-bold text-brand-green tracking-tight mb-2">15+</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider font-mono">Platforms</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative">
<div className="max-w-7xl mx-auto relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">Why Be Featured on The Daily Mastermind?</h2>
<p className="text-lg text-brand-gray leading-relaxed">
                    This isn't just another podcast interview—it's your gateway to building lasting authority, credibility, and omnipresence in your industry.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal rounded-none relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
<svg className="text-brand-green" fill="none" height="60" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="60"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
</div>
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-rocket w-6 h-6 text-brand-green" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Global Exposure</h3>
<p className="text-brand-gray leading-relaxed text-sm">Reach a rapidly growing audience of entrepreneurs, CEOs, investors, and decision-makers across all major podcast platforms and YouTube.</p>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal rounded-none relative overflow-hidden">
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-star w-6 h-6 text-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Authority Positioning</h3>
<p className="text-brand-gray leading-relaxed text-sm">Position yourself as an expert through professionally hosted conversations that highlight your story, expertise, and unique value proposition.</p>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal rounded-none relative overflow-hidden">
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-smartphone w-6 h-6 text-brand-green" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Professional Media Assets</h3>
<p className="text-brand-gray leading-relaxed text-sm">Receive branded video clips, quote cards, social media content, and promotional materials you can leverage across all your marketing channels.</p>
</div>

<div className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal bg-white border-gray-100 border rounded-none pt-8 pr-8 pb-8 pl-8 shadow-soft relative overflow-hidden">
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-target w-6 h-6 text-brand-green" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Extended Network Reach</h3>
<p className="text-brand-gray leading-relaxed text-sm">Get featured across the entire Authority Media Network, including Valiant CEO Magazine and partner platforms for maximum visibility.</p>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal rounded-none relative overflow-hidden">
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-briefcase w-6 h-6 text-brand-green" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Legacy Content</h3>
<p className="text-brand-gray leading-relaxed text-sm">Create evergreen content assets for your press kits, media pages, and future promotions that build credibility for years to come.</p>
</div>

<div className="group bg-white p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal rounded-none relative overflow-hidden">
<div className="w-12 h-12 bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors rounded-none">
<svg className="lucide lucide-flame w-6 h-6 text-brand-green" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3">Competitive Advantage</h3>
<p className="text-brand-gray leading-relaxed text-sm">Stand out from competitors who lack media validation and third-party credibility in their marketing and sales efforts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-100 relative">
<div className="max-w-7xl mx-auto">

<div className="text-center max-w-4xl mx-auto mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">The Ultimate Authority Program</h2>
<p className="text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto">
                    Done for You Strategy, Assets &amp; Distribution to Increase Your Authority &amp; Results
                </p>
</div>
<div className="space-y-8">

<div className="reveal bg-white p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="text-white w-9 h-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M8 15h8"></path></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Strategy &amp; Featured Interview</h3>
<div className="text-xl font-bold text-brand-green mb-6">Instant Credibility &amp; Authority Branding</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">This is the fastest, most effective way to gain trusted media validation. Your featured interview is designed to highlight your story, achievements, and expertise—instantly building credibility and authority with your audience.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Perfect Interview:</span> Participate in a strategically crafted interview designed to put you in the spotlight. Each question is tailored to position your brand, product, and expertise for maximum impact and engagement.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">SEO Optimized Content:</span> Our editorial team will optimize your article using targeted keywords, include your name in the title for better search visibility, and provide a high-authority backlink to strengthen your online credibility.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Priority Publishing:</span> Your article will be published within 48 hours of completion and includes professional graphics, links, and assets ready to share across your website, social media, and marketing channels.</div>
</li>
</ul>
</div>

<div className="reveal bg-[#f8f9fa] p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="text-white w-9 h-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line><line x1="8" x2="16" y1="22" y2="22"></line></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Podcast Video Interview</h3>
<div className="text-xl font-bold text-brand-green mb-6">Position Yourself as a Thought Leader</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">A feature podcast interview builds human connection and long-term credibility. Share your insights and story through dynamic conversation and reach new audiences across every major listening platform.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Strategic Video Interview:</span> Enjoy a professionally hosted, long-form video interview designed to highlight your expertise and create an authentic, engaging narrative for your audience.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Full Asset Production:</span> Receive a complete content package including edited video clips, audio reels, and transcripts—ready for posting across all your digital and social platforms.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Destination Syndication:</span> Your episode will be syndicated across a dozen major podcast and streaming platforms to expand visibility, boost brand awareness, and grow your authority audience.</div>
</li>
</ul>
</div>

<div className="reveal bg-white p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="text-white w-9 h-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M18 10h-8"></path><path d="M18 6h-8"></path><path d="M18 18h-8"></path></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Magazine Cover &amp; Feature Profile</h3>
<div className="text-xl font-bold text-brand-green mb-6">The Ultimate Status Symbol &amp; Market Leader Blueprint</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">Stand apart as a recognized leader with an exclusive magazine cover and feature story. This premium placement enhances your authority and provides a timeless credibility asset for investors, clients, and media.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Featured Magazine Cover:</span> Showcase your leadership with a high-resolution, custom-designed magazine cover that instantly elevates your professional image and brand trust.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Exclusive Interview Profile:</span> Your in-depth interview feature will appear inside our online magazine, complementing your cover story with compelling storytelling, visuals, and brand highlights.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Printed Cover PDF Display:</span> Receive a premium digital and printable version of your magazine cover to use in presentations, investor decks, or as a lasting display of your authority.</div>
</li>
</ul>
</div>

<div className="reveal bg-[#f8f9fa] p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="text-white w-9 h-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Video &amp; Social Media Assets</h3>
<div className="text-xl font-bold text-brand-green mb-6">Optimized Content for Market Omnipresence</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">Extend your reach with powerful video and social content that builds consistent brand presence across every platform. Stay visible, relevant, and influential long after your feature launches.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Full Length Youtube Episode:</span> You'll receive an optimized, full-length interview video with professional show notes, timestamps, and keyword-optimized content for maximum discoverability.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Video Highlight Reel &amp; Shorts:</span> Capture attention with short-form clips and highlight reels custom-edited for Reels, TikTok, YouTube Shorts, and LinkedIn.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Social Media Posts &amp; Quotes:</span> Get branded quote graphics and post templates that reinforce your authority and make daily content creation effortless.</div>
</li>
</ul>
</div>

<div className="reveal bg-white p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="text-white w-9 h-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Digital Media Authority Hub</h3>
<div className="text-xl font-bold text-brand-green mb-6">The Ultimate Showcase of Your Media Presence</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">Transform your features into measurable business assets with a dedicated mobile video media hub that captures leads, tracks engagement, and centralizes your entire authority presence.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Mobile Video Landing Page:</span> Showcase your videos, interviews, and magazine features in a sleek, mobile-optimized layout that instantly conveys credibility and professionalism.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Integrated Calendar &amp; Links:</span> Allow prospects to book calls or connect instantly through embedded calendars, contact buttons, and direct links to your offers or funnels.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">NFC &amp; QR Code Sharing:</span> Instantly share your authority hub with tap-to-connect NFC or QR codes—perfect for events, networking, or printed materials.</div>
</li>
</ul>
</div>

<div className="reveal bg-[#f8f9fa] p-8 md:p-12 shadow-card border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-5xl mx-auto rounded-none">

<div className="w-[70px] h-[70px] bg-brand-green rounded-full flex items-center justify-center mb-6">
<svg className="lucide lucide-megaphone text-white w-9 h-9" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>

<h3 className="text-3xl font-bold text-brand-dark mb-2">Distribution &amp; Promotion Campaign</h3>
<div className="text-xl font-bold text-brand-green mb-6">Boosted &amp; Collaborated Attention for Your Brand</div>
<p className="text-brand-gray text-lg leading-relaxed mb-8">Amplify your exposure through Authority Media Network's global ecosystem. We extend your content across multiple platforms and partner channels to increase reach and recognition.</p>

<ul className="space-y-5">
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Authority Media Distribution:</span> Your content will be published and shared through Valiant CEO Magazine's network, affiliate platforms, and internal partner channels for maximum impact.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Social Media Impressions &amp; Views:</span> Reach thousands of targeted viewers through coordinated cross-platform promotion on podcast, video, and social media networks.</div>
</li>
<li className="flex items-start gap-5">
<svg className="text-brand-green w-5 h-5 mt-1 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div className="text-brand-gray text-base leading-relaxed"><span className="font-bold text-brand-dark">Media Press Release:</span> A professionally written press release will announce your feature to industry-relevant outlets, enhancing your online reputation and expanding visibility.</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-light border-y border-gray-200" id="packages">
<div className="max-w-7xl mr-auto ml-auto">

<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">Choose Your Authority Package</h2>
<p className="text-lg text-brand-gray leading-relaxed">
                    Choose the package that fits your authority-building goals. Each tier builds on the previous, creating a comprehensive media presence that drives real business results.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-start">

<div className="hover:shadow-xl transition-all duration-300 reveal flex flex-col lg:mr-[-1px] bg-white h-full z-0 border-gray-200 border rounded-none pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<h3 className="text-xl font-bold text-brand-dark mb-2">Podcast Interview</h3>
<div className="text-4xl font-bold text-brand-dark tracking-tight mb-4">$997</div>
<p className="text-brand-gray text-sm mb-8">Perfect for entrepreneurs ready to establish credibility through professional podcast exposure.</p>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Strategic Video Interview (30-45 min)</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Full Episode Production &amp; Editing</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Multi-Platform Distribution (Apple, Spotify, etc)</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">3-5 Video Highlight Clips</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Episode Graphics Package</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">SEO Show Notes &amp; Transcript</span>
</li>
</ul>
<a className="block w-full text-center bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold py-3 transition-colors rounded-none" href="#">
                        Get Featured Now
                    </a>
</div>

<div className="bg-white p-8 border-2 border-brand-green shadow-2xl relative z-10 transform lg:scale-105 lg:-translate-y-2 flex flex-col h-full reveal rounded-none">
<div className="absolute top-0 right-0 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-none">MOST POPULAR</div>
<h3 className="text-xl font-bold text-brand-dark mb-2">Podcast + Media Bundle</h3>
<div className="text-4xl font-bold text-brand-dark tracking-tight mb-4">$2,497</div>
<p className="text-sm text-brand-gray mb-8">Build omnipresence with podcast, written features, and professional media assets for maximum authority.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-brand-dark">
<div className="bg-brand-green/10 p-1 rounded-none"><svg className="lucide lucide-check w-3 h-3 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Everything in Podcast Interview</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Featured Article in Authority Media Network</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Valiant CEO Magazine Spotlight Interview</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Mobile Video Landing Page</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>8-10 Clips + Instagram Reels</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Social Media Content Kit (15+ assets)</span>
</li>
</ul>
<a className="block w-full text-center bg-brand-green text-white font-bold py-4 hover:bg-[#5bb319] transition-all shadow-lg hover:shadow-green-500/25 rounded-none" href="#">
                        Get Featured Now
                    </a>
</div>

<div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 reveal flex flex-col h-full lg:ml-[-1px] relative z-0 rounded-none">
<h3 className="text-xl font-bold text-brand-dark mb-2">Complete Authority</h3>
<div className="text-4xl font-bold text-brand-dark tracking-tight mb-4">$4,997</div>
<p className="text-sm text-brand-gray mb-8">The ultimate authority-building solution for serious entrepreneurs ready to dominate their market.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-brand-dark">
<div className="bg-gray-100 p-1 rounded-none"><svg className="lucide lucide-check w-3 h-3 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Everything in Media Bundle</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Magazine Cover Feature + Profile</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Premium Production (B-roll, Graphics)</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Complete Asset Library (20+ Clips)</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Professional Press Release Distribution</span>
</li>
<li className="flex items-start gap-3 text-sm text-brand-dark">
<svg className="lucide lucide-check w-5 h-5 text-brand-green flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Authority Hub + NFC System</span>
</li>
</ul>
<a className="block w-full text-center bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-bold py-3 transition-colors rounded-none" href="#">
                        Get Featured Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-black text-white relative overflow-hidden">

<div className="absolute inset-0 bg-dot-white bg-[size:30px_30px] opacity-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-noise opacity-50 pointer-events-none"></div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none overflow-hidden">
<svg className="w-full h-full text-white" preserveaspectratio="none" viewbox="0 0 1000 200">
<path d="M0,100 Q150,180 300,100 T600,100 T900,100 T1200,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M0,100 Q150,20 300,100 T600,100 T900,100 T1200,100" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative reveal">
<div className="absolute inset-0 bg-brand-green/20 transform translate-x-4 translate-y-4 rounded-none border border-white/10"></div>
<img alt="George Wright III" className="hover:grayscale-0 transition-all duration-700 aspect-[4/5] w-full object-cover rounded-none relative shadow-2xl grayscale border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/707e9e52-64b5-4c84-9853-ac380082d47f_1600w.png"/>
</div>

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-brand-green mb-6">
<svg className="animate-pulse" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                        HOST &amp; FOUNDER
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Meet Your Host: <span className="text-brand-green">George Wright III</span></h2>
<div className="space-y-6 text-gray-400 text-lg leading-relaxed">
<p className="">
                            Founder of Authority Media Network, George Wright III has interviewed over 1,200 entrepreneurs, CEOs, and industry leaders. His mission is simple: help ambitious professionals build the authority and credibility they need to stand out in crowded markets.
                        </p>
<p className="">
                            With deep expertise in media creation, personal branding, and authority positioning, George has helped thousands of guests transform a single interview into a comprehensive authority-building platform that drives real business results.
                        </p>
<p className="">
                            When you're featured on The Daily Mastermind, you're not just getting a podcast interview—you're gaining a strategic partner dedicated to amplifying your message and elevating your market position.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex gap-8">
<div>
<div className="text-2xl font-bold text-white">20+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</div>
</div>
<div>
<div className="text-2xl font-bold text-white">1.2K+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Interviews</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-light border-b border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="md:text-4xl text-brand-dark text-3xl font-semibold tracking-tight mb-4">What Our Featured Guests Say</h2>
<p className="text-brand-gray text-lg">Real results from entrepreneurs and leaders who've built massive authority through our program.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="reveal bg-white border-gray-100 border rounded-none pt-8 pr-8 pb-8 pl-8 shadow-soft">
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-dark italic mb-8 leading-relaxed">"One of the best experiences I've had with media features. The team made the process seamless and the assets I received have been invaluable for my marketing."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 flex-shrink-0 overflow-hidden rounded-none">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-bold text-brand-dark">Kathy Ireland</div>
<div className="text-xs text-brand-gray font-medium">Super Model &amp; Entrepreneur</div>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-soft border border-gray-100 reveal rounded-none">
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-dark italic mb-8 leading-relaxed">"If you're thinking about working with George and The Daily Mastermind team, I highly suggest it. The ROI on authority building is impossible to measure—it opens doors everywhere."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 flex-shrink-0 overflow-hidden rounded-none">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="">
<div className="font-bold text-brand-dark">Brandon T. Adams</div>
<div className="text-xs text-brand-gray font-medium">Emmy Award Winning Producer</div>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-soft border border-gray-100 reveal rounded-none">
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-dark italic mb-8 leading-relaxed">"When I was looking to take my personal brand to the next level, The Daily Mastermind was the perfect solution. The podcast and media package gave me instant credibility."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 flex-shrink-0 overflow-hidden rounded-none">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="font-bold text-brand-dark">Kaycee Field</div>
<div className="text-xs text-brand-gray font-medium">6x Rodeo World Champion</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">Frequently Asked Questions</h2>
<p className="text-lg text-brand-gray">Everything you need to know about getting featured on The Daily Mastermind</p>
</div>
<div className="space-y-4">

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<h3 className="text-brand-dark text-lg font-semibold">Who is the ideal guest for The Daily Mastermind?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">We feature entrepreneurs, CEOs, business owners, authors, speakers, coaches, and industry experts who have a compelling story, proven expertise, and a desire to build their authority. If you're committed to your brand and have valuable insights to share, you're likely a great fit.</p>
</div>
</div>

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h3 className="text-brand-dark text-lg font-semibold">How long does the interview process take?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">The interview itself is typically 30-45 minutes. After booking, we'll schedule your interview within 7-14 days. Your episode will be produced and published within 2-4 weeks, depending on your chosen package. Premium packages include priority publishing within 10 business days.</p>
</div>
</div>

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<h3 className="font-semibold text-lg text-brand-dark">What preparation is required before the interview?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">We handle most of the heavy lifting! You'll complete a brief pre-interview questionnaire to help us craft compelling questions. We'll also send you technical setup instructions to ensure high-quality audio and video. Premium package clients receive a strategic positioning session before recording.</p>
</div>
</div>

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h3 className="font-semibold text-lg text-brand-dark">What assets do I receive after the interview?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">This depends on your package level. At minimum, you'll receive your full video episode, audio files, show notes, and several social media clips. Premium packages include magazine features, professionally designed graphics, a mobile landing page, press releases, and comprehensive content packages with 20+ assets.</p>
</div>
</div>

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h3 className="font-semibold text-lg text-brand-dark">How will this help my business specifically?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">Being featured builds third-party credibility that you can't create yourself. Your media assets become powerful trust-builders in your sales process, website, social media, and marketing. Guests typically see increased inbound inquiries, higher close rates, and premium pricing power due to enhanced perceived authority.</p>
</div>
</div>

<div className="faq-item border border-gray-200 bg-white overflow-hidden reveal cursor-pointer hover:border-brand-green/50 transition-colors rounded-none">
<div className="flex justify-between items-center p-6" onclick="toggleFaq(this)">
<h3 className="font-semibold text-lg text-brand-dark">Can I upgrade my package later?</h3>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-brand-green" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="faq-content bg-gray-50 px-6">
<p className="text-brand-gray pb-6 leading-relaxed">Absolutely! Many guests start with the Podcast Interview package and upgrade to include magazine features or the complete authority package as they see results. We'll credit your initial investment toward any upgrade within 90 days.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-br from-[#66c61c] to-[#4da315] text-center relative overflow-hidden">

<div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>
<div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto reveal relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to Build Massive Authority?</h2>
<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Apply now to be featured on The Daily Mastermind and start your authority-building journey today.</p>
<a className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-gray-50 hover:scale-105 text-lg font-bold py-4 px-12 shadow-2xl transition-all duration-300 rounded-none" href="#packages">
                Apply to Be Featured <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="bg-black text-white/70 py-12 px-6 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<img alt="The Daily Mastermind" className="w-48 mb-6 opacity-90 h-auto" src="https://storage.googleapis.com/msgsndr/Vc8L4W3QjMgzc8HL6F7q/media/6858734efcdab6ed5ceb98be.png"/>
<p className="text-sm leading-relaxed max-w-sm mb-6 text-gray-400">
                        The Daily Mastermind is a top-rated podcast and media network dedicated to helping entrepreneurs, business owners, and leaders grow their influence, authority, and income through strategic media exposure.
                    </p>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300 text-gray-400" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300 text-gray-400" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300 text-gray-400" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300 text-gray-400" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-green transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-brand-green rounded-full"></span> Home</a></li>
<li><a className="hover:text-brand-green transition-colors flex items-center gap-2" href="#packages"><span className="w-1 h-1 bg-brand-green rounded-full"></span> Apply to Feature</a></li>
<li><a className="hover:text-brand-green transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-brand-green rounded-full"></span> About George</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6 text-lg">Legal &amp; Contact</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-green transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-green transition-colors" href="mailto:support@dailymastermind.com">Contact Support</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 The Daily Mastermind. All rights reserved.</p>
<div className="mt-4 md:mt-0 flex gap-6">
<span>Designed for Authority</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
