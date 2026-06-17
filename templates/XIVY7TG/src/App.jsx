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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            const solutionCards = document.querySelectorAll('[data-card]');
            let spotlightColor = 'rgba(145, 64, 115, 0.30)';
            function hexToRgba(hex, alpha = 0.30) {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
            function updateSpotlightColor(hex) {
                spotlightColor = hexToRgba(hex, 0.30);
                solutionCards.forEach(card => {
                    card.style.setProperty('--spotlight-color', spotlightColor);
                });
            }
            solutionCards.forEach(card => {
                card.style.setProperty('--spotlight-color', spotlightColor);
            });
            const handleMouseMove = (e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
            solutionCards.forEach(card => {
                card.addEventListener('mousemove', handleMouseMove);
                card.addEventListener('focus', (e) => {
                    card.style.setProperty('--mouse-x', `50%`);
                    card.style.setProperty('--mouse-y', `30%`);
                });
            });
        });
    
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
      
<section className="py-24 font-inter relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" style={{zIndex: '2'}}></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8">
<div className="text-center mb-20 fade-in" style={{opacity: '1'}}>
<h2 className="md:text-4xl text-xl font-light bg-clip-text text-transparent tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                    Our Solutions
                </h2>
<p className="max-w-2xl text-lg text-gray-400 mx-auto leading-relaxed">
                    Comprehensive digital solutions designed to elevate your business and drive measurable results.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group fade-in fade-in-delay-1" style={{opacity: '1'}}>
<div aria-label="Websites Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="websites" style={{'--spotlight-color': 'rgba(145, 64, 115, 0.30)'}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="monitor-smartphone"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                    Websites
                                </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Conversion focused</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                                Custom, responsive websites built to convert visitors into customers and elevate your brand.
                            </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Blazing fast load times</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Accessible for all users</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Seamless mobile experience</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">SEO &amp; analytics ready</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Avg. project time</span>
<span className="text-white/90 font-medium">2–4 weeks</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Integrations</span>
<span className="text-white/90 font-medium">CMS, Forms, CRM</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Websites" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-2" style={{opacity: '1'}}>
<div aria-label="SEO Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="seo" style={{'--spotlight-color': 'rgba(145, 64, 115, 0.30)'}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                    SEO
                                </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Organic growth</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                                Proven strategies to improve your search rankings and drive sustained organic traffic.
                            </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">In-depth keyword research</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">On-page &amp; technical SEO</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Content &amp; link strategy</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Ongoing reporting</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Audit &amp; setup</span>
<span className="text-white/90 font-medium">1–2 weeks</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Monthly plans</span>
<span className="text-white/90 font-medium">Yes</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about SEO" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-3" style={{opacity: '1'}}>
<div aria-label="Google Ads Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="ads" style={{'--spotlight-color': 'rgba(145, 64, 115, 0.30)'}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="dollar-sign"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                    Google Ads
                                </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Performance marketing</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                                Impactful paid campaigns that maximize ROI and deliver measurable results fast.
                            </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Targeted ad groups</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Conversion tracking</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Budget optimization</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Weekly reporting</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Campaign setup</span>
<span className="text-white/90 font-medium">~3 days</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Ad spend min.</span>
<span className="text-white/90 font-medium">$500/mo</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Google Ads" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-4" style={{opacity: '1'}}>
<div aria-label="Social Media Solution Card" className="rounded-2xl p-0 border border-gray-800/60 bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-800/20 transition-all duration-500 h-full flex flex-col relative overflow-hidden solution-card-spotlight" data-card="social" style={{'--spotlight-color': 'rgba(145, 64, 115, 0.30)'}} tabindex="0">
<div className="flex items-center gap-3 px-8 pt-8 pb-4 relative z-10">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
<i className="w-6 h-6 text-purple-400" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight font-geist">
                                    Social Media
                                </h3>
<span className="text-xs text-gray-400 font-normal tracking-tight">Brand engagement</span>
</div>
</div>
<div className="px-8 pb-6 pt-2 relative z-10">
<p className="text-white/80 text-base font-normal leading-relaxed mb-3">
                                Authentic content and campaigns to grow your audience and boost engagement.
                            </p>
<ul className="flex flex-col gap-2.5 mt-4 mb-0 pl-0 list-animated">
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Original content calendars</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Community management</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Influencer partnerships</span>
</li>
<li className="flex items-center gap-3 px-2 py-2" tabindex="0">
<span className="feature-line"></span>
<span className="text-white/90 text-sm">Paid campaign strategy</span>
</li>
</ul>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Channels</span>
<span className="text-white/90 font-medium">IG, FB, Twitter, TikTok</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400">Frequency</span>
<span className="text-white/90 font-medium">3–5 posts/week</span>
</div>
</div>
<div className="border-t border-white/5 mx-8 relative z-10"></div>
<div className="px-8 py-6 relative z-10">
<button aria-label="Learn more about Social Media" className="glass-surface glass-hover px-6 py-3 text-white rounded-xl font-medium text-sm w-full pulse-glow" style={{backgroundColor: '#181025'}}>
                                Learn More
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
