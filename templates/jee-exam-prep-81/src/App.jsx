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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Countdown Logic
        function initCountdowns() {
            const navTimer = document.getElementById('nav-timer');
            const stickyTimer = document.getElementById('sticky-timer');

            // Fixed 24 days logic for nav as requested in prompt structure
            let examDate = new Date();
            examDate.setDate(examDate.getDate() + 24);
            examDate.setHours(0,0,0,0);

            // 6 hours rolling countdown for sticky bar
            let nextMockDate = new Date();
            nextMockDate.setHours(nextMockDate.getHours() + 6);

            setInterval(() => {
                const now = new Date().getTime();

                // Nav Timer
                if(navTimer) {
                    const distanceExam = examDate.getTime() - now;
                    if(distanceExam > 0) {
                        const d = Math.floor(distanceExam / (1000 * 60 * 60 * 24));
                        const h = Math.floor((distanceExam % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const m = Math.floor((distanceExam % (1000 * 60 * 60)) / (1000 * 60));
                        const s = Math.floor((distanceExam % (1000 * 60)) / 1000);
                        navTimer.innerText = `${d}d ${h}h ${m}m ${s}s`;
                    }
                }

                // Sticky Timer
                if(stickyTimer) {
                    const distanceMock = nextMockDate.getTime() - now;
                    if(distanceMock > 0) {
                        const h2 = Math.floor((distanceMock % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const m2 = Math.floor((distanceMock % (1000 * 60 * 60)) / (1000 * 60));
                        const s2 = Math.floor((distanceMock % (1000 * 60)) / 1000);
                        
                        const fh = h2 < 10 ? '0'+h2 : h2;
                        const fm = m2 < 10 ? '0'+m2 : m2;
                        const fs = s2 < 10 ? '0'+s2 : s2;
                        
                        stickyTimer.innerText = `${fh}h ${fm}m ${fs}s`;
                    } else {
                        // Reset for demo purposes
                        nextMockDate = new Date();
                        nextMockDate.setHours(nextMockDate.getHours() + 6);
                    }
                }
            }, 1000);
        }

        initCountdowns();
    
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
      

<div className="fixed inset-0 z-[-1] bg-grid-dots pointer-events-none opacity-60"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200 px-6 py-5 md:px-12 flex justify-between items-center transition-all">
<a className="text-xl font-normal tracking-tight text-black lowercase" href="#home">
            jee mock
        </a>
<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-2 text-base font-medium text-neutral-800 bg-neutral-100 px-4 py-2 rounded-full">
<i className="w-4 h-4 text-neutral-600" data-lucide="hourglass" strokeWidth="1.5"></i>
<span>JEE April Attempt:</span>
<span className="tabular-nums text-black" id="nav-timer">--d --h --m --s</span>
</div>
<div className="flex gap-8 text-base font-light text-neutral-600">
<a className="hover:text-black transition-colors" href="#features">Tests</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-black transition-colors" href="#footer">Contact</a>
</div>
</div>
<a className="bg-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-neutral-800 transition-colors hidden sm:block" href="#pricing">
            Start Mock
        </a>
</nav>

<header className="min-h-[95vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative max-w-[1400px] mx-auto w-full" id="home">
<div className="flex flex-col items-end text-right w-full mt-auto mb-16">
<h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-normal leading-[0.85] tracking-tight text-black mb-12 lowercase max-w-5xl">
                presenting<br/>jee mock.
            </h1>
<div className="max-w-2xl flex flex-col items-end">
<h2 className="text-2xl md:text-3xl font-normal text-black tracking-tight mb-6">
                    Most students solve thousands of random questions and still walk into JEE underprepared.
                </h2>
<p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 mb-6">
                    This is not another question bank. It's a curated mock test series built around high-probability JEE concepts for the April 2026 attempt.
                </p>
<p className="text-base text-neutral-500 font-light mb-12 flex items-center justify-end gap-2">
<i className="w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
                    Designed for serious aspirants who want focused revision.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-end w-full sm:w-auto">
<a className="bg-black text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2" href="#pricing">
                        Take Your First Mock – ₹149
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-white text-black border border-neutral-300 px-8 py-5 rounded-full text-lg font-medium hover:bg-neutral-50 transition-colors text-center" href="#pricing">
                        Get Full Test Series – ₹499
                    </a>
</div>
<div className="mt-6 text-sm font-medium text-amber-600 flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                    New tests released daily until your exam
                </div>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 border-t border-neutral-200 bg-white/50 backdrop-blur-sm" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-6">Why Students Use This</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 text-black border border-neutral-200">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-black mb-4 tracking-tight">Highly Probable Questions</h3>
<p className="text-lg text-neutral-600 font-light leading-relaxed">Focused exclusively on concepts and patterns that repeat frequently in actual JEE papers.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 text-black border border-neutral-200">
<i className="w-6 h-6" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-black mb-4 tracking-tight">Real Exam Simulation</h3>
<p className="text-lg text-neutral-600 font-light leading-relaxed">Timed, distraction-free test environments that mirror the exact pressure of the NTA interface.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 text-black border border-neutral-200">
<i className="w-6 h-6" data-lucide="calendar-days" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-black mb-4 tracking-tight">Daily Practice</h3>
<p className="text-lg text-neutral-600 font-light leading-relaxed">Stay relentlessly disciplined with consistent mock tests delivered daily until your exam day.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-neutral-200">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-12">Most students make this mistake before JEE</h2>
<p className="text-2xl font-light text-neutral-600 mb-12 leading-relaxed">
                They keep solving random PDFs, endless modules, and bloated question banks.
            </p>
<p className="text-xl font-medium text-black mb-8 tracking-tight">But JEE rewards students who:</p>
<ul className="text-lg text-neutral-600 font-light text-left max-w-md mx-auto space-y-6 mb-16">
<li className="flex items-center gap-4 border-b border-neutral-100 pb-4">
<div className="bg-black/5 p-2 rounded-full text-black"><i className="w-5 h-5" data-lucide="check" strokeWidth="1.5"></i></div>
                    Revise the right concepts
                </li>
<li className="flex items-center gap-4 border-b border-neutral-100 pb-4">
<div className="bg-black/5 p-2 rounded-full text-black"><i className="w-5 h-5" data-lucide="check" strokeWidth="1.5"></i></div>
                    Practice under exam pressure
                </li>
<li className="flex items-center gap-4 border-b border-neutral-100 pb-4">
<div className="bg-black/5 p-2 rounded-full text-black"><i className="w-5 h-5" data-lucide="check" strokeWidth="1.5"></i></div>
                    Identify weak areas quickly
                </li>
</ul>
<p className="text-2xl font-medium text-black tracking-tight">That’s exactly what these mocks are designed for.</p>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-neutral-200 bg-neutral-50/50" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="bg-white p-10 md:p-12 border border-neutral-200 rounded-3xl flex flex-col h-full">
<h3 className="text-2xl font-medium text-black mb-2 tracking-tight">Single Mock</h3>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-6xl font-normal tracking-tight text-black lowercase">₹149</span>
</div>
<ul className="text-lg font-light text-neutral-600 space-y-5 mb-12 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-black shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Full JEE pattern mock</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-black shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Detailed solutions</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-black shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Performance analysis</span>
</li>
</ul>
<button className="w-full py-5 rounded-full text-lg font-medium border border-neutral-300 text-black hover:bg-neutral-50 transition-colors">
                        Take This Test
                    </button>
</div>

<div className="bg-black text-white p-10 md:p-12 rounded-3xl flex flex-col h-full relative shadow-2xl shadow-black/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-6 py-2 rounded-full font-medium tracking-tight border border-neutral-200">
                        Most Popular
                    </div>
<h3 className="text-2xl font-medium mb-2 tracking-tight flex items-center gap-2">
                        Full Test Series
                        <i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</h3>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-6xl font-normal tracking-tight lowercase">₹499</span>
</div>
<ul className="text-lg font-light text-neutral-300 space-y-5 mb-12 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-medium">Daily mocks until your exam</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Curated high-probability questions</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-1 text-white shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Structured revision practice</span>
</li>
</ul>
<div className="text-sm font-light text-neutral-400 mb-6 text-center">
                        Less than the cost of one coaching worksheet.
                    </div>
<button className="w-full bg-white text-black py-5 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors">
                        Get Full Series
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-neutral-200">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-16 text-center">What Students Said</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-10 border border-neutral-200 rounded-2xl bg-white">
<div className="flex gap-1 mb-6 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-light text-neutral-800 mb-8 leading-relaxed italic">"The questions felt extremely relevant to actual JEE level."</p>
<div className="text-base font-medium text-black tracking-tight">— Aarav, Dropper</div>
</div>
<div className="p-10 border border-neutral-200 rounded-2xl bg-white">
<div className="flex gap-1 mb-6 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-light text-neutral-800 mb-8 leading-relaxed italic">"Much better than solving random PDFs."</p>
<div className="text-base font-medium text-black tracking-tight">— Riya, Class 12</div>
</div>
<div className="p-10 border border-neutral-200 rounded-2xl bg-white">
<div className="flex gap-1 mb-6 text-black">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-light text-neutral-800 mb-8 leading-relaxed italic">"Daily mock keeps me consistent."</p>
<div className="text-base font-medium text-black tracking-tight">— Kunal, JEE Aspirant</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-neutral-200 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-sm font-medium text-neutral-400 tracking-widest uppercase mb-12">Why this exists</h2>
<div className="space-y-8 text-2xl font-light text-black leading-relaxed tracking-tight">
<p>Most mock platforms overwhelm students with thousands of questions.</p>
<p>This platform focuses on quality over quantity.</p>
<p>Every test is designed to help you revise the most important JEE concepts before the April attempt.</p>
</div>
<div className="mt-16 text-xl font-medium text-black tracking-tight flex flex-col gap-2">
<span>Simple.</span>
<span>Focused.</span>
<span>Effective.</span>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 border-t border-neutral-200 text-center relative overflow-hidden">
<div className="max-w-4xl mx-auto relative z-10">
<h2 className="text-5xl md:text-7xl font-normal text-black tracking-tight mb-8 lowercase">
                your jee attempt is getting closer.
            </h2>
<p className="text-2xl font-light text-neutral-600 mb-16">
                Practice the questions that actually matter.
            </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
<button className="w-full sm:w-auto bg-white text-black border border-neutral-300 px-10 py-5 rounded-full text-lg font-medium hover:bg-neutral-50 transition-colors">
                    Take One Mock – ₹149
                </button>
<button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors">
                    Get Full Series – ₹499
                </button>
</div>
<div className="text-base font-medium text-neutral-500 flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="hourglass" strokeWidth="1.5"></i>
                Only <span className="text-black">24 days</span> left for JEE April Attempt
            </div>
</div>
</section>

<footer className="border-t border-neutral-200 py-16 px-6 md:px-12 pb-32" id="footer">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="text-xl font-normal tracking-tight text-black lowercase">
                jee mock
            </div>
<div className="flex flex-col md:flex-row gap-8 text-base font-light text-neutral-500">
<a className="hover:text-black transition-colors" href="mailto:contact@jeemock.com">contact@jeemock.com</a>
<a className="hover:text-black transition-colors" href="#">Contact</a>
<span>© 2026 JEE Mock</span>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-black text-white py-4 px-6 md:px-12 z-50 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
<div className="flex items-center gap-3 text-base font-light">
<i className="w-5 h-5 text-amber-400" data-lucide="zap" strokeWidth="1.5"></i>
<span>Next mock releasing in <span className="font-medium tabular-nums ml-1" id="sticky-timer">05h 59m 59s</span></span>
</div>
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap w-full sm:w-auto text-center" href="#pricing">
            Reserve Access – ₹149
        </a>
</div>



    </>
  );
}
