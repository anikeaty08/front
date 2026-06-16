import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Rotating profession animation
        const professions = ['Plumber', 'HVAC Tech', 'Restaurant Owner', 'Baker', 'Electrician', 'Contractor'];
        let currentIndex = 0;
        const professionElement = document.getElementById('rotating-profession');

        function rotateProfession() {
            professionElement.style.opacity = '0';
            professionElement.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % professions.length;
                professionElement.textContent = professions[currentIndex];
                professionElement.style.opacity = '1';
                professionElement.style.transform = 'translateY(0)';
            }, 250);
        }

        // Initial display
        professionElement.textContent = professions[0];
        professionElement.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

        // Rotate every 2.5 seconds
        setInterval(rotateProfession, 2500);

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full bg-[#0A1828]/95 backdrop-blur-sm z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<i className="w-5 h-5 text-[#0A1828]" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">AI Sight</span>
</div>
<a className="hidden md:block text-white hover:text-[#FF6B35] transition-colors font-medium tracking-tight" href="tel:+18885551234">
                (888) 555-1234
            </a>
<a className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-2.5 rounded-lg font-medium text-sm tracking-tight transition-all hover:shadow-lg hover:shadow-[#FF6B35]/20" href="#cta">
                Get Started
            </a>
</div>
</header>

<section className="gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="mb-8">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<i className="w-6 h-6 text-[#0A1828]" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-3xl font-bold tracking-tight text-white">AI Sight</span>
</div>
</div>
<div className="mb-6 h-32 sm:h-24 flex flex-col items-center justify-center">
<div className="relative h-16 flex items-center justify-center mb-4">
<span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#FF6B35]" id="rotating-profession"></span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    When customers ask ChatGPT<br className="hidden sm:block"/>
<span className="text-[#E5E5E5]">"Best _____ near me,"</span><br/>
                    does it say your name?
                </h1>
</div>
<p className="text-lg sm:text-xl text-[#E5E5E5] mb-10 max-w-3xl mx-auto leading-relaxed">
                Your customers stopped Googling. They're asking ChatGPT now.<br className="hidden sm:block"/>
                If it doesn't know you, you're invisible.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:scale-105" href="#cta">
                    Show Me What ChatGPT Says About My Business
                </a>
<a className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:bg-white/5" href="#how-it-works">
                    See How It Works
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#F4B740] font-medium tracking-tight">100+ Local Businesses</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#F4B740] font-medium tracking-tight">290% Avg ROI</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="dollar-sign" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#F4B740] font-medium tracking-tight">$2.3M+ Revenue Generated</span>
</div>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-12">
                Your Customers Changed.<br/>Your Marketing Didn't.
            </h2>
<div className="bg-[#0A1828] rounded-2xl p-8 mb-12 max-w-2xl mx-auto border border-[#F4B740]/20">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#F4B740]/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-[#E5E5E5] mb-4 italic">"Find me the best plumber near me"</p>
<div className="bg-[#132035] rounded-lg p-4 border-l-4 border-[#FF6B35]">
<p className="text-white font-medium mb-2">ChatGPT recommends:</p>
<p className="text-[#FF6B35] font-semibold text-lg">Your Competitor's Name Here</p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="bg-[#0A1828] rounded-xl p-6 border-l-4 border-[#FF6B35]">
<div className="w-12 h-12 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#F4B740]" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-medium text-lg leading-relaxed">
                        ChatGPT recommends your competitor, not you
                    </p>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-l-4 border-[#FF6B35]">
<div className="w-12 h-12 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#F4B740]" data-lucide="x-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-medium text-lg leading-relaxed">
                        Your Google Ads? Wasted if AI sends customers elsewhere
                    </p>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-l-4 border-[#FF6B35]">
<div className="w-12 h-12 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-4">
<i className="w-6 h-6 text-[#F4B740]" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-medium text-lg leading-relaxed">
                        Every day you wait = jobs lost to competitors
                    </p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 border-2 border-[#F4B740] max-w-3xl mx-auto">
<div className="flex gap-4">
<i className="w-8 h-8 text-[#F4B740] flex-shrink-0" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-white text-lg mb-4 italic leading-relaxed">
                            "Spent $50K on SEO. Then found out ChatGPT was telling everyone to call my competitor."
                        </p>
<p className="text-[#E5E5E5] font-medium">— Mike T., Plumbing Business</p>
</div>
</div>
</div>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Get Your Name in ChatGPT's Mouth
                </h2>
<p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                    We make ChatGPT recommend YOUR business when people search.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-[#F4B740]" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Own Your Territory</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        ChatGPT says your name for "best HVAC in [your city]"
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-[#F4B740]" data-lucide="phone-call" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Grab Emergency Calls</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        Show up for "emergency plumber near me open now"
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-[#F4B740]" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Your Reviews Work Harder</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        ChatGPT quotes your 5-star reviews as proof
                    </p>
</div>
<div className="bg-[#132035] rounded-xl p-8 border-t-4 border-[#FF6B35]">
<div className="w-14 h-14 rounded-full bg-[#F4B740]/20 flex items-center justify-center mb-6">
<i className="w-7 h-7 text-[#F4B740]" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Protect Your Turf</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                        Stop losing to competitors who got there first
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Dead Simple. We Do Everything.
                </h2>
<p className="text-xl text-[#FF6B35] font-semibold tracking-tight">4 Steps, 60 Days</p>
</div>
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF6B35] hidden md:block"></div>
<div className="space-y-12">
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            1
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Check Where You Stand</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                                Search ChatGPT and 15 other AI tools. Show you what customers see. (Spoiler: usually your competitor)
                            </p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            2
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Build Your Foundation</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                                Set up your presence where AI looks for answers
                            </p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            3
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Make You #1</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                                Get your business recommended for your services
                            </p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 z-10">
                            4
                        </div>
<div className="flex-1 pt-2">
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">We Keep You There</h3>
<p className="text-[#E5E5E5] text-lg leading-relaxed">
                                Monthly reports showing exactly where you show up
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-16 bg-[#0A1828] rounded-2xl p-8 flex items-center justify-center gap-4 border border-[#FF6B35]/30">
<div className="w-20 h-20 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
<i className="w-10 h-10 text-[#FF6B35]" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-white font-semibold text-lg mb-1">Watch How It Works</p>
<p className="text-[#E5E5E5]">1:02 - Real client walkthrough</p>
</div>
</div>
<p className="text-center text-[#E5E5E5] text-lg mt-8">
                Zero tech knowledge needed. We handle it all.
            </p>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Real Businesses, Real Results
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="text-6xl font-bold text-[#FF6B35] mb-2 tracking-tight">428%</div>
<p className="text-xl text-white font-semibold mb-6">more customer calls in 90 days</p>
<div className="flex gap-3 mb-6">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "ChatGPT recommends us now. Booked 3 weeks out. Had to hire 2 more guys."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Anderson's HVAC - Phoenix</p>
</div>
<div className="bg-[#0A1828] p-6">
<div className="h-32 flex items-end gap-2">
<div className="flex-1 bg-[#FF6B35]/30 rounded-t" style={{height: '30%'}}></div>
<div className="flex-1 bg-[#FF6B35] rounded-t" style={{height: '100%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs text-[#E5E5E5]">
<span>Before</span>
<span>After</span>
</div>
</div>
</div>
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="text-6xl font-bold text-[#FF6B35] mb-2 tracking-tight">$47K</div>
<p className="text-xl text-white font-semibold mb-6">in new jobs (first 60 days)</p>
<div className="flex gap-3 mb-6">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "People literally call saying 'ChatGPT sent me.' This is wild."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Riverside Plumbing - Austin</p>
</div>
<div className="bg-[#0A1828] p-6">
<svg className="w-full h-32" viewbox="0 0 200 80">
<polyline fill="none" points="0,60 50,55 100,40 150,25 200,10" stroke="#FF6B35" strokeWidth="3"></polyline>
<polyline fill="url(#gradient)" opacity="0.2" points="0,60 50,55 100,40 150,25 200,10"></polyline>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#FF6B35', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#FF6B35', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="bg-[#132035] rounded-xl overflow-hidden border-t-4 border-[#F4B740]">
<div className="p-8">
<div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-lg font-bold mb-4">#1 Pick</div>
<p className="text-xl text-white font-semibold mb-6">ChatGPT's top recommendation for date night</p>
<div className="flex gap-3 mb-6">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] italic leading-relaxed">
                                "Went from empty tables to fully booked weekends."
                            </p>
</div>
<p className="text-[#F4B740] font-medium">Bella's Bistro - Denver</p>
</div>
<div className="bg-[#0A1828] p-6">
<div className="h-32 flex items-end gap-1">
<div className="flex-1 bg-[#FF6B35]/30 rounded-t" style={{height: '40%'}}></div>
<div className="flex-1 bg-[#FF6B35]/50 rounded-t" style={{height: '60%'}}></div>
<div className="flex-1 bg-[#FF6B35]/70 rounded-t" style={{height: '80%'}}></div>
<div className="flex-1 bg-[#FF6B35] rounded-t" style={{height: '100%'}}></div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-12">
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#F4B740]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35]"></div>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-[#132035] overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-[#FF6B35] to-[#F4B740]"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A1828] pattern-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-12">
                What You're Losing Right Now
            </h2>
<div className="bg-[#132035] rounded-2xl p-8 sm:p-12 border-2 border-[#FF6B35]">
<div className="space-y-6 mb-8">
<div className="flex items-center justify-between pb-4 border-b border-white/10">
<span className="text-[#E5E5E5] text-lg">Your average job:</span>
<span className="text-white text-xl font-semibold">$350-$2,500</span>
</div>
<div className="flex items-center justify-between pb-4 border-b border-white/10">
<span className="text-[#E5E5E5] text-lg">AI searches in your area/month:</span>
<span className="text-white text-xl font-semibold">200-800</span>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center border-2 border-[#FF6B35]">
<p className="text-[#E5E5E5] text-lg mb-4">You're losing</p>
<div className="text-5xl sm:text-6xl font-bold text-[#FF6B35] mb-2 tracking-tight">
                        $70K-$240K
                    </div>
<p className="text-white text-xl">per year</p>
</div>
<div className="mt-8 text-center">
<p className="text-[#FF6B35] text-xl font-semibold">Your competitors aren't waiting.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Why Switch to AI Sight?
            </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-6">
<div className="text-center md:text-left mb-8">
<span className="text-[#E5E5E5] text-2xl font-semibold">Old Way</span>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] text-lg">Google Ads: Pay every click</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] text-lg">SEO: 6-12 months, dying</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border border-white/10">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#E5E5E5] flex-shrink-0" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
<p className="text-[#E5E5E5] text-lg">Facebook Ads: Cold leads</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="text-center md:text-left mb-8">
<span className="text-[#FF6B35] text-2xl font-semibold">AI Sight</span>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<p className="text-white text-lg font-medium">ChatGPT: They call you direct</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<p className="text-white text-lg font-medium">AI Sight: 60 days, future-proof</p>
</div>
</div>
<div className="bg-[#0A1828] rounded-xl p-6 border-2 border-[#FF6B35]">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<p className="text-white text-lg font-medium">Ready-to-buy customers</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Built For
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="flame" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">HVAC &amp; Electrical</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="droplet" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">Plumbers</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="utensils" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">Restaurants &amp; Cafes</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="cookie" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">Bakeries &amp; Food</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="wrench" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">Auto Repair</p>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-4">
<i className="w-10 h-10 text-[#F4B740]" data-lucide="hammer" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-white font-semibold text-lg">Contractors</p>
</div>
</div>
<p className="text-[#E5E5E5] text-xl text-center mt-12 max-w-2xl mx-auto">
                Already doing $500K+? We make sure ChatGPT knows who you are.
            </p>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<div className="inline-block bg-[#F4B740] text-[#0A1828] px-6 py-2 rounded-full font-bold text-sm tracking-tight mb-6">
                    AI SIGHT PLANS
                </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    Straightforward Pricing
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-[#0A1828] rounded-2xl p-8 border-t-4 border-[#FF6B35]">
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Single Location</h3>
<div className="mb-6">
<span className="text-5xl font-bold text-white tracking-tight">$3,497</span>
<span className="text-[#E5E5E5] text-xl">/mo</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">10+ AI platforms</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">Monthly reports</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">All the setup</span>
</div>
</div>
<a className="block w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-center px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30" href="#cta">
                        Get Started
                    </a>
</div>
<div className="bg-[#0A1828] rounded-2xl p-8 border-4 border-[#FF6B35] relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-6 py-2 rounded-full font-bold text-sm tracking-tight whitespace-nowrap">
                        MOST POPULAR
                    </div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Multi-Location</h3>
<div className="mb-6">
<span className="text-5xl font-bold text-white tracking-tight">$5,997</span>
<span className="text-[#E5E5E5] text-xl">/mo</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">20+ AI platforms</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">Weekly updates</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">Dedicated person on your account</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-[#F4B740] flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
<span className="text-[#E5E5E5] text-base">Competitor defense</span>
</div>
</div>
<a className="block w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-center px-8 py-4 rounded-lg font-semibold text-base tracking-tight transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30" href="#cta">
                        Book a Call
                    </a>
</div>
</div>
<div className="mt-12 bg-[#0A1828] rounded-xl p-6 max-w-4xl mx-auto border-2 border-[#F4B740]">
<div className="flex items-start gap-4">
<i className="w-8 h-8 text-[#F4B740] flex-shrink-0" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-white font-semibold text-lg mb-2">60-Day Guarantee</p>
<p className="text-[#E5E5E5]">Show up in 5+ AI platforms or we refund your first month and work free.</p>
</div>
</div>
</div>
</div>
</section>

<section className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                Common Questions
            </h2>
<div className="space-y-4">
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">I rank on Google. Why do I need this?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Google is yesterday's game. Your customers are switching to ChatGPT because it's faster and easier. If ChatGPT doesn't know you, your Google ranking means nothing.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">How fast will I see results?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Most clients show up in 5+ AI platforms within 60 days. You'll get weekly updates so you know exactly what's happening.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">Do I need to know tech stuff?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Zero. We handle everything. You just answer the phone when new customers call.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">What if I don't have many reviews?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">We work with what you've got and help you build more. AI platforms look at more than just reviews.</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">How do I know it's working?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">You get monthly reports showing exactly where you show up and what ChatGPT says about you. Plus, you'll start getting calls from people who say "ChatGPT sent me."</p>
</div>
</details>
<details className="bg-[#132035] rounded-xl overflow-hidden group">
<summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-[#132035]/80 transition-colors">
<span className="text-white font-semibold text-lg pr-4">Can I cancel anytime?</span>
<i className="w-6 h-6 text-[#FF6B35] flex-shrink-0 group-open:rotate-180 transition-transform" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="px-6 pb-6">
<p className="text-[#E5E5E5] leading-relaxed">Yes. Month-to-month. No contracts. But once you see ChatGPT recommending you, you won't want to stop.</p>
</div>
</details>
</div>
</div>
</section>

<section className="bg-[#132035] py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-16">
                What's Included
            </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Complete AI Audit</h3>
<p className="text-[#E5E5E5]">See what customers see across 15+ AI platforms</p>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Monthly Tracking</h3>
<p className="text-[#E5E5E5]">Reports showing exactly where you rank</p>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Content Work</h3>
<p className="text-[#E5E5E5]">We create everything AI needs to recommend you</p>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Review Boosting</h3>
<p className="text-[#E5E5E5]">Make your reviews work harder for you</p>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Watch Your Competitors</h3>
<p className="text-[#E5E5E5]">We monitor what AI says about them too</p>
</div>
<div className="bg-[#0A1828] rounded-xl p-8 text-center">
<div className="w-16 h-16 rounded-full bg-[#F4B740]/20 flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-[#F4B740]" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Direct Phone Line</h3>
<p className="text-[#E5E5E5]">Talk to a real person anytime you need</p>
</div>
</div>
</div>
</section>

<section className="gradient-bg pattern-bg py-20 px-4 sm:px-6 lg:px-8" id="cta">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    See What ChatGPT Says<br/>About You Right Now
                </h2>
<p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                    We'll search 15 AI platforms and show you exactly what your customers see.<br/>
                    Most owners are shocked.
                </p>
</div>
<div className="bg-[#132035] rounded-2xl p-8 sm:p-12 border-2 border-[#FF6B35]">
<form className="space-y-6">
<div>
<label className="block text-white font-medium mb-2 text-sm">Business Name</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="Your Business Name" required="" type="text"/>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">What You Do</label>
<select className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B35] transition-colors" required="">
<option value="">Select Your Industry</option>
<option value="hvac">HVAC</option>
<option value="plumbing">Plumbing</option>
<option value="electrical">Electrical</option>
<option value="restaurant">Restaurant</option>
<option value="cafe">Cafe</option>
<option value="bakery">Bakery</option>
<option value="auto">Auto Repair</option>
<option value="contractor">Contractor</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">City</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="Your City" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-white font-medium mb-2 text-sm">Phone</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div>
<label className="block text-white font-medium mb-2 text-sm">Email</label>
<input className="w-full bg-[#0A1828] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#E5E5E5]/50 focus:outline-none focus:border-[#FF6B35] transition-colors" placeholder="you@business.com" required="" type="email"/>
</div>
</div>
<button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-5 rounded-lg font-bold text-lg tracking-tight transition-all hover:shadow-2xl hover:shadow-[#FF6B35]/40 hover:scale-105" type="submit">
                        Show Me My AI Report
                    </button>
<div className="flex items-center justify-center gap-6 text-sm text-[#E5E5E5]">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span>Free</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<span>Takes 24 hours</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#F4B740]" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
<span>No strings attached</span>
</div>
</div>
</form>
<div className="mt-8 pt-8 border-t border-white/10 text-center">
<p className="text-[#E5E5E5] mb-2">Rather talk?</p>
<a className="text-[#FF6B35] text-2xl font-bold hover:text-[#FF6B35]/90 transition-colors" href="tel:+18885551234">
                        (888) 555-1234
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#0A1828] border-y border-white/10 py-6 overflow-hidden">
<div className="flex whitespace-nowrap scroll-animation">
<div className="flex items-center gap-8 px-4">
<span className="text-white font-medium">Anderson's HVAC</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Riverside Plumbing</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Tony's Kitchen</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Peak Electric</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Sunrise Bakery</span>
<span className="text-[#F4B740]">•</span>
</div>
<div className="flex items-center gap-8 px-4">
<span className="text-white font-medium">Anderson's HVAC</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Riverside Plumbing</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Tony's Kitchen</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Peak Electric</span>
<span className="text-[#F4B740]">•</span>
<span className="text-white font-medium">Sunrise Bakery</span>
<span className="text-[#F4B740]">•</span>
</div>
</div>
</section>

<footer className="bg-[#050A12] py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F4B740] to-[#FF6B35] flex items-center justify-center">
<i className="w-5 h-5 text-[#0A1828]" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">AI Sight</span>
</div>
<p className="text-[#E5E5E5]/60 text-sm">by OmniPresence AEO</p>
</div>
<div>
<h4 className="text-white font-semibold mb-4 tracking-tight">Product</h4>
<ul className="space-y-2">
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#how-it-works">How It Works</a></li>
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#pricing">Pricing</a></li>
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#results">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 tracking-tight">Company</h4>
<ul className="space-y-2">
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#">About</a></li>
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#cta">Contact</a></li>
<li><a className="text-[#E5E5E5]/60 hover:text-[#FF6B35] transition-colors text-sm" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 tracking-tight">Connect</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-[#F4B740]/20 hover:bg-[#FF6B35] flex items-center justify-center transition-colors" href="#">
<i className="w-5 h-5 text-[#F4B740] hover:text-white" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#F4B740]/20 hover:bg-[#FF6B35] flex items-center justify-center transition-colors" href="#">
<i className="w-5 h-5 text-[#F4B740] hover:text-white" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#F4B740]/20 hover:bg-[#FF6B35] flex items-center justify-center transition-colors" href="#">
<i className="w-5 h-5 text-[#F4B740] hover:text-white" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-[#F4B740] text-sm font-medium">Made in Aura</span>
</div>
<div className="flex gap-6 text-sm text-[#E5E5E5]/60">
<a className="hover:text-[#FF6B35] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#FF6B35] transition-colors" href="#">Terms</a>
</div>
<p className="text-[#E5E5E5]/60 text-sm">© 2024 OmniPresence AEO</p>
</div>
</div>
</footer>


    </>
  );
}
