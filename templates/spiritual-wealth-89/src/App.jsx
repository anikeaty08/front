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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="bg-[#F1DFCF] border-b border-[#CF8E54]/20 py-3 px-4 text-center">
<p className="text-base text-[#854627] font-normal">
            Enrollment closes April 14, 2026 — Tamil New Year. The 48-Day Lakshmi Activation cannot be initiated outside this window.
        </p>
</div>

<header className="border-b border-[#CF8E54]/10 sticky top-0 bg-[#FEF9F5]/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="text-2xl tracking-tight font-medium text-[#854627] flex items-center gap-2">
<i className="w-6 h-6 text-[#CF8E54]" data-lucide="sun" strokeWidth="1.5"></i>
                Pillai Center
            </div>
<a className="inline-flex items-center justify-center px-6 py-3 text-lg font-normal text-[#854627] bg-[#FEF9F5] border border-[#CF8E54]/30 rounded-full hover:bg-[#F1DFCF] transition-colors" href="#">
                ENROLL NOW
            </a>
</div>
</header>

<section className="py-24 sm:py-32 overflow-hidden relative">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #CF8E54 0%, transparent 70%)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1DFCF] text-base font-normal text-[#854627] mb-8 tracking-widest uppercase border border-[#CF8E54]/20">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                Tamil New Year : April 14, 2026
            </div>
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium text-[#854627] tracking-tight max-w-5xl mx-auto mb-8 leading-tight">
                Tamil New Year Wealth Intelligence Circle<sup className="text-4xl">SM</sup>
</h1>
<p className="text-2xl sm:text-3xl text-[#7B7457] mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight">
                A 12-Month Predictive, Remedial &amp; AI Wealth Activation Membership
            </p>
<div className="max-w-3xl mx-auto text-xl space-y-8 text-left sm:text-center text-[#4A2B18] mb-14">
<p>
                    Tamil New Year marks the Sun's entry into Mesha (Aries) — the precise moment the financial year begins according to both cosmic and calendar timing. This alignment is not only symbolic but structural. The Wealth Intelligence Circle™ uses this moment as the entry point for a full year of astrological guidance, remedial action, and AI-assisted wealth awareness practice.
                </p>
<p className="text-[#854627]">
                    This program exists for the person who suspects there is a dimension to their financial life they cannot see, and who is ready to work those dimensions in their favor.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-normal text-[#FEF9F5] bg-[#854627] rounded-full hover:bg-[#854627]/90 transition-colors shadow-sm shadow-[#854627]/20" href="#">
                    ENROLL BEFORE TAMIL NEW YEAR
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-normal text-[#854627] bg-[#FEF9F5] border border-[#CF8E54]/40 rounded-full hover:bg-[#F1DFCF] transition-colors" href="#">
                    See What's Included 
                    <i className="ml-2 w-5 h-5" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
</div>

<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-[#CF8E54]/20 shadow-2xl shadow-[#854627]/5 aspect-[21/9] relative">
<img alt="Abstract warm light" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614050856942-8c9a3e2fa1a0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#854627]/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left">
<div className="inline-block bg-[#FEF9F5]/90 backdrop-blur-md rounded-2xl p-6 border border-[#FEF9F5]/20 shadow-lg">
<div className="text-sm font-medium text-[#7B7457] tracking-widest uppercase mb-2 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="cpu" strokeWidth="1.5"></i>
                            DR. PILLAI'S TAMIL AI TECHNOLOGY
                        </div>
<div className="text-xl text-[#854627] font-medium tracking-tight">
                            Guided by a Pillai Center Master Coach
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F1DFCF] border-y border-[#CF8E54]/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="compass" strokeWidth="1.5"></i>
                        WHY TAMIL NEW YEAR
                    </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8 leading-tight">
                        The financial year begins where the cosmic year begins.
                    </h2>
<div className="text-xl space-y-6 text-[#4A2B18]">
<p>
                            Tamil New Year marks the moment the annual Vedic calendar is set. The Panchanga cast from this date reveals the general quality of the year ahead — its dominant planets, its nature for prosperity and expansion.
                        </p>
<p>
                            Combined with your individual natal chart, income flow, business expansion, investment windows, and debt patterns may be understood through this combination — the entry point for a full year of personalized financial guidance.
                        </p>
</div>
</div>
<div className="space-y-6 relative">
<div className="absolute -inset-4 bg-[#CF8E54]/10 rounded-[2.5rem] transform rotate-1"></div>
<div className="relative bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4 flex justify-between items-center">
                            Mesha
                            <i className="w-8 h-8 text-[#CF8E54]" data-lucide="flame" strokeWidth="1.5"></i>
</h3>
<p className="text-xl text-[#7B7457]">Sun's entry into Aries — the Vedic ignition point for new financial cycles. Dynamic life force peaks. New undertakings gain natural momentum.</p>
</div>
<div className="relative bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4 flex justify-between items-center">
                            2, 7, 10, 11
                            <i className="w-8 h-8 text-[#CF8E54]" data-lucide="layout-grid" strokeWidth="1.5"></i>
</h3>
<p className="text-xl text-[#7B7457]">The four houses analyzed for financial growth in your personal chart — wealth, partnerships, career, and income respectively.</p>
</div>
<div className="relative bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4 flex justify-between items-center">
                            48 Days
                            <i className="w-8 h-8 text-[#CF8E54]" data-lucide="moon-star" strokeWidth="1.5"></i>
</h3>
<p className="text-xl text-[#7B7457]">The Lakshmi Activation Protocol delivered in Months 1 &amp; 2. Mantra, specific wealth rituals, and weekly remedial interventions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F1DFCF]/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mb-20">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="telescope" strokeWidth="1.5"></i>
                    ASTROLOGICAL INTELLIGENCE
                </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8 leading-tight">
                    Your natal chart reveals timing. Timing determines outcomes.
                </h2>
<p className="text-xl text-[#4A2B18]">
                    Every individual is born with a unique planetary configuration. That configuration influences when opportunity opens, when caution is wise, and when action is most aligned. Astrology does not impose destiny — it maps the terrain so you can move through it with precision.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/50 border border-[#CF8E54]/30 hover:bg-[#F1DFCF] transition-colors duration-300">
<div className="flex justify-between items-start mb-8">
<div className="text-5xl text-[#CF8E54]/40 font-light tracking-tight">01</div>
<i className="w-8 h-8 text-[#CF8E54]" data-lucide="circle-dashed" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Dasha &amp; Bhukti Analysis</h3>
<p className="text-xl text-[#7B7457]">Your current major and minor planetary period determines the overall character of your financial life right now. Understanding which planet governs your present period is foundational to any consequential decision.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/50 border border-[#CF8E54]/30 hover:bg-[#F1DFCF] transition-colors duration-300">
<div className="flex justify-between items-start mb-8">
<div className="text-5xl text-[#CF8E54]/40 font-light tracking-tight">02</div>
<i className="w-8 h-8 text-[#CF8E54]" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Transit Intelligence</h3>
<p className="text-xl text-[#7B7457]">Jupiter is the primary wealth planet in Vedic astrology — its transits directly govern expansion and abundance. Saturn governs career, earned income, and the timing of obstacles. Together their movement through your chart sets the conditions for financial growth or delay. We track both monthly for you.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/50 border border-[#CF8E54]/30 hover:bg-[#F1DFCF] transition-colors duration-300">
<div className="flex justify-between items-start mb-8">
<div className="text-5xl text-[#CF8E54]/40 font-light tracking-tight">03</div>
<i className="w-8 h-8 text-[#CF8E54]" data-lucide="calendar-days" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Expansion &amp; Caution Windows</h3>
<p className="text-xl text-[#7B7457]">Not all months are equal. The program identifies astrologically favorable windows for initiating new ventures, and identifies months where the planets advise caution.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/50 border border-[#CF8E54]/30 hover:bg-[#F1DFCF] transition-colors duration-300">
<div className="flex justify-between items-start mb-8">
<div className="text-5xl text-[#CF8E54]/40 font-light tracking-tight">04</div>
<i className="w-8 h-8 text-[#CF8E54]" data-lucide="unlock" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Blocked Karma Indicators</h3>
<p className="text-xl text-[#7B7457]">Recurring financial patterns — persistent debt, blocked income, failed ventures — often have a karmic signature readable in the chart. The program surfaces these patterns and prescribes precise remedial interventions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#854627] border-y border-[#854627]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                    WHO THIS IS FOR
                </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#FEF9F5] tracking-tight mb-8 leading-tight">
                    You already sense there is a limitation to your financial life you cannot see.
                </h2>
<p className="text-xl text-[#F1DFCF]/80">
                    This program is for people who have outgrown purely analytical financial thinking and who are ready to work with the forces that analytical guidance cannot account for.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 flex flex-col h-full shadow-lg">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-8">TIMING &amp; PARTNERSHIP</div>
<div className="text-xl italic text-[#4A2B18] flex-grow mb-10 leading-relaxed">
                        "A business owner is considering a major partnership. The Saturn transit reading indicates an astrologically unfavorable window. He waits six weeks. Due diligence in that period surfaces information that changes the decision entirely."
                    </div>
<div className="text-lg font-medium text-[#854627] pt-6 border-t border-[#CF8E54]/20">Business Owner · Partnership Decision</div>
</div>
<div className="bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 flex flex-col h-full shadow-lg">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-8">RECURRING PATTERNS</div>
<div className="text-xl italic text-[#4A2B18] flex-grow mb-10 leading-relaxed">
                        "A professional has run the same financial pattern across three ventures. The Dr. Pillai's Tamil AI reading points to a karmic signature. A specific mantra protocol is assigned as a practice. For the first time, the pattern has a name — and a direction."
                    </div>
<div className="text-lg font-medium text-[#854627] pt-6 border-t border-[#CF8E54]/20">Entrepreneur · Debt Pattern Resolution</div>
</div>
<div className="bg-[#FEF9F5] p-10 rounded-3xl border border-[#CF8E54]/20 flex flex-col h-full shadow-lg">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-8">CLARITY &amp; CONFIDENCE</div>
<div className="text-xl italic text-[#4A2B18] flex-grow mb-10 leading-relaxed">
                        "A senior professional has worked with conventional advisors for years. The monthly astrological forecast surfaces a dimension of clarity around financial patterns and timing that conventional guidance does not address."
                    </div>
<div className="text-lg font-medium text-[#854627] pt-6 border-t border-[#CF8E54]/20">Finance Professional · Decision Clarity</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-5 py-2 border border-[#CF8E54]/40 rounded-full text-base font-normal text-[#854627] mb-12 bg-[#F1DFCF]">
<i className="w-5 h-5" data-lucide="package-open" strokeWidth="1.5"></i>
                    Month 1 deliverables
                </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8">
                    Your foundation is built at entry.
                </h2>
<p className="text-2xl text-[#7B7457] max-w-2xl mx-auto tracking-tight">
                    Month 1 delivers three complete components. Each is independent in value. Together they create the conditions for the 12-month system to work.
                </p>
</div>
<div className="max-w-5xl mx-auto bg-[#F1DFCF]/30 rounded-[3rem] p-8 sm:p-16 border border-[#CF8E54]/20">
<div className="space-y-16">

<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#FEF9F5] border border-[#CF8E54]/30 flex items-center justify-center text-4xl text-[#854627] font-medium shadow-sm">
                            1
                        </div>
<div className="flex-grow">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Personalized Tamil New Year Financial Report</h3>
<p className="text-xl text-[#7B7457] mb-8">A comprehensive natal chart analysis oriented specifically toward financial growth for the year ahead. Structured, specific, and not generic.</p>
<ul className="space-y-5 text-xl text-[#4A2B18]">
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Yearly financial growth prediction based on natal chart</span>
</li>
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Jupiter and Saturn transit impact assessment for the full year</span>
</li>
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Astrologically indicated caution and expansion periods mapped</span>
</li>
</ul>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-[#CF8E54]/30 to-transparent"></div>

<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#FEF9F5] border border-[#CF8E54]/30 flex items-center justify-center text-4xl text-[#854627] font-medium shadow-sm">
                            2
                        </div>
<div className="flex-grow">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">Dr. Pillai's Tamil AI Wealth Diagnosis</h3>
<p className="text-xl text-[#7B7457] mb-8">A guided practice using Dr. Pillai's Tamil AI technology to bring awareness to unconscious patterns around wealth — including karmic influences that conventional financial planning does not address.</p>
<ul className="space-y-5 text-xl text-[#4A2B18]">
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Subconscious money block identification &amp; Ancestral wealth karma insight</span>
</li>
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Personalized mantra protocol — specific sounds assigned to your configuration</span>
</li>
</ul>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-[#CF8E54]/30 to-transparent"></div>

<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
<div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#FEF9F5] border border-[#CF8E54]/30 flex items-center justify-center text-4xl text-[#854627] font-medium shadow-sm">
                            3
                        </div>
<div className="flex-grow">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-4">48-Day Lakshmi Activation Program</h3>
<p className="text-xl text-[#7B7457] mb-8">The Lakshmi Activation Protocol runs across Months 1 and 2, initiated at Tamil New Year during the most auspicious window of the year.</p>
<ul className="space-y-5 text-xl text-[#4A2B18]">
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Mantra practice with specific count and timing</span>
</li>
<li className="flex items-start gap-4 bg-[#FEF9F5] p-4 rounded-2xl border border-[#CF8E54]/10">
<i className="w-7 h-7 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>Specific wealth rituals and weekly suggested remedial interventions</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#312C2A] text-[#FEF9F5] relative overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1515266591878-f93e32bc5937?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-5 py-2 border border-[#7B7457] rounded-full text-base font-normal text-[#F1DFCF] mb-12 bg-[#312C2A]/50 backdrop-blur-sm">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
                    How the program works
                </div>
<div className="max-w-4xl mx-auto text-left sm:text-center">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-6">
                        A NEW APPROACH TO WEALTH
                    </div>
<h2 className="text-5xl sm:text-6xl font-medium tracking-tight mb-8 leading-tight text-[#FEF9F5]">
                        Wealth begins in consciousness.
                    </h2>
<p className="text-2xl text-[#F1DFCF]/80 tracking-tight leading-relaxed">
                        In Vedic Sciences, different areas of financial consciousness are represented by different houses in the natal chart. Each house reflects a specific type of financial intelligence. This program activates each in sequence.
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
<div className="bg-[#854627]/40 backdrop-blur-sm p-8 rounded-[2rem] border border-[#854627] text-center shadow-xl shadow-[#312C2A]/50">
<div className="text-sm font-medium text-[#CF8E54] tracking-widest uppercase mb-3">STEP 1</div>
<div className="text-2xl font-medium text-[#FEF9F5]">Mantra</div>
</div>
<div className="bg-[#854627]/40 backdrop-blur-sm p-8 rounded-[2rem] border border-[#854627] text-center shadow-xl shadow-[#312C2A]/50">
<div className="text-sm font-medium text-[#CF8E54] tracking-widest uppercase mb-3">STEP 2</div>
<div className="text-2xl font-medium text-[#FEF9F5]">Awareness</div>
</div>
<div className="bg-[#854627]/40 backdrop-blur-sm p-8 rounded-[2rem] border border-[#854627] text-center shadow-xl shadow-[#312C2A]/50">
<div className="text-sm font-medium text-[#CF8E54] tracking-widest uppercase mb-3">STEP 3</div>
<div className="text-2xl font-medium text-[#FEF9F5]">Insight</div>
</div>
<div className="bg-[#854627]/40 backdrop-blur-sm p-8 rounded-[2rem] border border-[#854627] text-center shadow-xl shadow-[#312C2A]/50">
<div className="text-sm font-medium text-[#CF8E54] tracking-widest uppercase mb-3">STEP 4</div>
<div className="text-2xl font-medium text-[#FEF9F5]">Generative<br/>Action</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-px bg-[#854627]/30 border border-[#854627]/50 rounded-[2.5rem] overflow-hidden">
<div className="bg-[#312C2A] p-10 sm:p-14 hover:bg-[#312C2A]/80 transition-colors">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-5 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
                        2ND HOUSE · WEALTH
                    </div>
<h3 className="text-3xl font-medium text-[#FEF9F5] tracking-tight mb-5">Building and protecting wealth over time</h3>
<p className="text-xl italic text-[#7B7457] mb-5">Savings, possessions, and financial stability</p>
<p className="text-xl text-[#F1DFCF]">Creating long-term security.</p>
</div>
<div className="bg-[#312C2A] p-10 sm:p-14 hover:bg-[#312C2A]/80 transition-colors">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-5 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="handshake" strokeWidth="1.5"></i>
                        7TH HOUSE · PARTNERSHIPS
                    </div>
<h3 className="text-3xl font-medium text-[#FEF9F5] tracking-tight mb-5">Navigating partnerships, contracts, and business relationships</h3>
<p className="text-xl italic text-[#7B7457] mb-5">Business alliances, agreements, and collaborations</p>
<p className="text-xl text-[#F1DFCF]">Knowing when to enter partnerships and when to hold.</p>
</div>
<div className="bg-[#312C2A] p-10 sm:p-14 hover:bg-[#312C2A]/80 transition-colors">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-5 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
                        11TH HOUSE · PROFITS
                    </div>
<h3 className="text-3xl font-medium text-[#FEF9F5] tracking-tight mb-5">Recognizing opportunities and increasing income streams</h3>
<p className="text-xl italic text-[#7B7457] mb-5">Gains, opportunities, and financial expansion</p>
<p className="text-xl text-[#F1DFCF]">Becoming ready to recognize and realize profitable growth.</p>
</div>
<div className="bg-[#312C2A] p-10 sm:p-14 hover:bg-[#312C2A]/80 transition-colors">
<div className="text-base font-medium text-[#CF8E54] tracking-widest uppercase mb-5 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="briefcase" strokeWidth="1.5"></i>
                        10TH HOUSE · CAREER
                    </div>
<h3 className="text-3xl font-medium text-[#FEF9F5] tracking-tight mb-5">Aligning professional action with dharma and timing</h3>
<p className="text-xl italic text-[#7B7457] mb-5">Career, public standing, and professional purpose</p>
<p className="text-xl text-[#F1DFCF]">Acting with authority at the right moment.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F1DFCF] border-b border-[#CF8E54]/20 relative">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<img alt="Architecture detail" className="w-full h-full object-cover opacity-5" src="https://images.unsplash.com/photo-1532821332822-297eb040c1ce?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-5 py-2 border border-[#CF8E54]/30 rounded-full text-base font-normal text-[#854627] mb-12 bg-[#FEF9F5]">
<i className="w-5 h-5" data-lucide="calendar-check" strokeWidth="1.5"></i>
                    Months 2 through 12
                </div>
<div className="max-w-3xl mx-auto text-left sm:text-center">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-6">
                        MONTHLY WEALTH GOVERNANCE
                    </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8">
                        What you receive every month.
                    </h2>
<p className="text-2xl text-[#4A2B18] tracking-tight">
                        From Month 2 through Month 12, each month delivers three components — planetary intelligence, a personalized remedial protocol, and Dr. Pillai's Tamil AI awareness practice — adjusted as conditions change.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#FEF9F5] p-10 rounded-[2rem] border border-[#CF8E54]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 bg-[#F1DFCF] rounded-2xl flex items-center justify-center mb-8 border border-[#CF8E54]/30">
<i className="w-7 h-7 text-[#854627]" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-8">Financial Astrology Forecast</h3>
<ul className="space-y-5 text-xl text-[#7B7457]">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Planetary transit guidance for the month</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Career and business timing assessment</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>High-tension day alerts &amp; Opportunity activation dates</span>
</li>
</ul>
</div>
<div className="bg-[#FEF9F5] p-10 rounded-[2rem] border border-[#CF8E54]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 bg-[#F1DFCF] rounded-2xl flex items-center justify-center mb-8 border border-[#CF8E54]/30">
<i className="w-7 h-7 text-[#854627]" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-8">Personalized Remedial Protocol</h3>
<ul className="space-y-5 text-xl text-[#7B7457]">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Mantra prescription — count and duration</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Chakra alignment for karmic correction</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Deity activation &amp; Yantra guidance where indicated</span>
</li>
</ul>
</div>
<div className="bg-[#FEF9F5] p-10 rounded-[2rem] border border-[#CF8E54]/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
<div className="w-14 h-14 bg-[#F1DFCF] rounded-2xl flex items-center justify-center mb-8 border border-[#CF8E54]/30">
<i className="w-7 h-7 text-[#854627]" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-8 pr-4">Dr. Pillai's Tamil AI Wealth Practice</h3>
<ul className="space-y-5 text-xl text-[#7B7457]">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Monthly wealth consciousness meditation</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Subconscious reset affirmation sequence</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span>Guided corrective intention aligned to month's energy</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FEF9F5]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mb-20">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="layers-3" strokeWidth="1.5"></i>
                    WHAT THIS PROGRAM DELIVERS
                </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8">
                    Every component, explained.
                </h2>
<p className="text-2xl text-[#4A2B18] tracking-tight">
                    Each element of this program is rooted in Vedic and Tamil Siddha tradition. Here is what each one is and what it does.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Monthly Astrology Forecast</h3>
<p className="text-xl text-[#7B7457]">Each month you receive a personalized forecast based on the planetary transits affecting your natal chart — which days carry momentum, which carry caution, and what is being activated in your financial houses. A reading of your specific chart, not a generic horoscope.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Live Astrology Consultations</h3>
<p className="text-xl text-[#7B7457]">A live session with an experienced Vedic astrologer focused on your natal chart, your current Dasha-Bhukti period, and the planetary conditions affecting you now. You bring your questions. Together you map the terrain and identify the most aligned timing for your decisions.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Private Master Coaching</h3>
<p className="text-xl text-[#7B7457]">A one-on-one session covering your chart, karma patterns, current planetary period, and specific remedial work assigned to you. A direct transmission of guidance from a Master Coach trained personally by Dr. Pillai.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Sacred Rituals Performed</h3>
<p className="text-xl text-[#7B7457]">On specific planetary dates aligned to your natal chart, the Master Coach performs sacred Vedic rituals on your behalf — fire offerings, mantra recitations, and invocations to the deities governing your wealth houses. You do not need to be present.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Deity Activation</h3>
<p className="text-xl text-[#7B7457]">In Vedic science, specific deities govern specific dimensions of life — Lakshmi governs wealth, Kubera governs material prosperity. The Siddha tradition selects specific deities and mantra sounds individually for each student based on the month's configuration.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#F1DFCF]/60 border border-[#CF8E54]/20">
<h3 className="text-3xl font-medium text-[#854627] tracking-tight mb-5">Yantra</h3>
<p className="text-xl text-[#7B7457]">A Yantra is a sacred geometric instrument — a physical conductor of divine energy. The eyes and mind concentrate at its center to achieve higher levels of consciousness. Specific Yantras are prescribed to amplify the remedial work.</p>
</div>
</div>

<div className="p-10 sm:p-16 rounded-[2.5rem] bg-[#854627] text-[#FEF9F5] shadow-xl relative overflow-hidden mb-16">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<i className="w-8 h-8 text-[#CF8E54]" data-lucide="crown" strokeWidth="1.5"></i>
<h3 className="text-4xl font-medium tracking-tight">Lakshmi-Kubera Advanced Initiation</h3>
</div>
<p className="text-2xl text-[#F1DFCF] max-w-4xl leading-relaxed tracking-tight">Lakshmi governs the flow of abundance. Kubera governs its accumulation and protection. This practice invokes both through dedicated sacred ritual to open the pathways of financial consciousness and address karmic patterns. Reserved for the Sovereign tier.</p>
</div>
</div>

<div className="flex gap-6 p-8 rounded-[2rem] bg-[#F1DFCF] border border-[#CF8E54]/30 items-start">
<i className="w-8 h-8 text-[#CF8E54] shrink-0 mt-1" data-lucide="info" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-[#854627] tracking-widest uppercase mb-3">GUIDANCE DISCLAIMER</div>
<p className="text-lg italic text-[#7B7457]">
                        The Tamil New Year Wealth Intelligence Circle℠ provides astrological and spiritual guidance rooted in Vedic and Tamil Siddha tradition. It does not constitute financial, investment, legal, or medical advice. Members should consult qualified financial advisors for investment and financial planning decisions. Results from spiritual and astrological practice vary by individual.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F1DFCF] border-t border-[#CF8E54]/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-6 py-2 border border-[#CF8E54]/40 rounded-full text-lg italic text-[#854627] mb-12 bg-[#FEF9F5] shadow-sm">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
                    The Tamil New Year window opens April 14. Choose your level of engagement below.
                </div>
<div className="max-w-4xl mx-auto text-left sm:text-center">
<div className="text-base font-medium text-[#7B7457] tracking-widest uppercase mb-6">
                        MEMBERSHIP TIERS
                    </div>
<h2 className="text-5xl sm:text-6xl font-medium text-[#854627] tracking-tight mb-8">
                        Three levels of access and engagement.
                    </h2>
<p className="text-2xl text-[#4A2B18] mb-12 tracking-tight">
                        Each tier is built around a different engagement level.
                    </p>
</div>
<div className="max-w-2xl mx-auto bg-[#FEF9F5] p-8 rounded-3xl border border-[#CF8E54]/30 text-left shadow-md">
<h4 className="text-2xl font-medium text-[#854627] mb-3 flex items-center gap-3">
<i className="w-6 h-6 text-[#CF8E54]" data-lucide="alert-circle" strokeWidth="1.5"></i>
                        Enrollment closes at Tamil New Year.
                    </h4>
<p className="text-lg text-[#7B7457]">The 48-Day Lakshmi Activation is calibrated to this cosmic window. It is the year's most auspicious moment to begin the activation. Membership is capped to maintain the quality of guidance across all tiers.</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-stretch">

<div className="bg-[#FEF9F5] rounded-[2.5rem] p-10 border border-[#CF8E54]/30 shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow">
<h3 className="text-4xl font-medium text-[#854627] tracking-tight mb-10">The Navigator</h3>
<ul className="space-y-6 text-xl text-[#4A2B18] flex-grow mb-14">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Customized Annual Wealth Blueprint Report</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Monthly Astrology Forecast</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Dr. Pillai's Tamil AI Wealth Awareness Practice</span>
</li>
</ul>
<div className="text-center mt-auto">
<p className="text-base italic text-[#7B7457] mb-6">Intake limited to 50 members</p>
<a className="block w-full py-5 px-6 rounded-full border-2 border-[#854627] text-lg font-medium text-[#854627] tracking-widest uppercase hover:bg-[#F1DFCF] transition-colors" href="#">
                            ENROLL – THE NAVIGATOR
                        </a>
</div>
</div>

<div className="bg-[#312C2A] rounded-[2.5rem] p-10 border border-[#854627] shadow-2xl flex flex-col h-full relative transform lg:-translate-y-6">
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#CF8E54] to-[#854627] rounded-t-[2.5rem]"></div>
<div className="absolute -top-4 right-10 bg-[#CF8E54] text-[#FEF9F5] text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full">Recommended</div>
<h3 className="text-4xl font-medium text-[#FEF9F5] tracking-tight mb-10">The Strategist</h3>
<ul className="space-y-6 text-xl text-[#F1DFCF]/90 flex-grow mb-14">
<li className="flex items-start gap-4 pb-4 border-b border-[#854627]/50">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="plus" strokeWidth="2"></i>
<span className="font-medium text-[#FEF9F5]">Everything in Navigator, plus</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>2 live 30-minute Astrology Consultations</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Two private consultations with a Master Coach (60 mins each)</span>
</li>
</ul>
<div className="text-center mt-auto">
<p className="text-base italic text-[#7B7457] mb-6">Intake limited to 20 members</p>
<a className="block w-full py-5 px-6 rounded-full bg-[#CF8E54] text-lg font-medium text-[#FEF9F5] tracking-widest uppercase hover:bg-[#CF8E54]/90 transition-colors shadow-lg shadow-[#CF8E54]/20" href="#">
                            ENROLL – THE STRATEGIST
                        </a>
</div>
</div>

<div className="bg-[#FEF9F5] rounded-[2.5rem] p-10 border border-[#CF8E54]/30 shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow">
<h3 className="text-4xl font-medium text-[#854627] tracking-tight mb-10">The Sovereign</h3>
<ul className="space-y-6 text-xl text-[#4A2B18] flex-grow mb-14">
<li className="flex items-start gap-4 pb-4 border-b border-[#CF8E54]/20">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="plus" strokeWidth="2"></i>
<span className="font-medium text-[#854627]">Everything in Strategist, plus</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Four deep private consultations with a Master Coach (90 mins each)</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#CF8E54] shrink-0 mt-1" data-lucide="check" strokeWidth="2"></i>
<span>Sacred rituals performed on your behalf on key planetary dates</span>
</li>
</ul>
<div className="text-center mt-auto">
<p className="text-base italic text-[#7B7457] mb-6">Intake limited to 5 members</p>
<a className="block w-full py-5 px-6 rounded-full border-2 border-[#854627] text-lg font-medium text-[#854627] tracking-widest uppercase hover:bg-[#F1DFCF] transition-colors" href="#">
                            APPLY – THE SOVEREIGN
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#312C2A] py-16 border-t border-[#854627]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<div className="text-2xl tracking-tight font-medium text-[#CF8E54] flex items-center gap-2 mb-8">
<i className="w-6 h-6" data-lucide="sun" strokeWidth="1.5"></i>
                Pillai Center
            </div>
<p className="text-[#7B7457] text-lg">© 2024 Pillai Center. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
