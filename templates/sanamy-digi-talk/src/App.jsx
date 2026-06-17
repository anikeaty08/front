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



      // Scroll Reveal
      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const targets = entry.target.querySelectorAll('.reveal-on-scroll');
              targets.forEach(t => {
                t.classList.remove('opacity-0-init');
                t.classList.add('animate-fade-up');
              });
            } else {
              // Reset animation if scrolled out, allowing re-trigger
              const targets = entry.target.querySelectorAll('.reveal-on-scroll');
              targets.forEach(t => {
                t.classList.add('opacity-0-init');
                t.classList.remove('animate-fade-up');
              });
            }
          });
        }, { threshold: 0.4 });
        document.querySelectorAll('section').forEach(sec => observer.observe(sec));
      });

      // Chat Animation Logic
      (function() {
        const chatContainer = document.getElementById('hero-chat-interface');
        const rows = [
          document.getElementById('msg-row-1'),
          document.getElementById('msg-row-2'),
          document.getElementById('msg-row-3')
        ];
        const msgs = [
          document.getElementById('msg-1'),
          document.getElementById('msg-2'),
          document.getElementById('msg-3')
        ];
        
        // Exact text requested by user
        const texts = [
          "Hey! Let's talk through photosynthesis. Can you explain what happens during the light-dependent reactions?",
          "Um... the plant absorbs sunlight and... makes glucose?",
          "Good start! But glucose is made later. What do you think happens to the light energy first — before glucose is produced?"
        ];

        function scrollToBottom() {
          if(chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        }

        async function typeWriter(elem, text, speed=35) {
          if(!elem) return;
          for(let i=0; i<text.length; i++) {
            elem.innerHTML = text.substring(0, i+1) + '<span class="inline-block w-1.5 h-3.5 ml-1 bg-white/70 animate-pulse align-middle"></span>';
            scrollToBottom();
            await new Promise(r => setTimeout(r, speed));
          }
          elem.innerHTML = text;
          scrollToBottom();
        }

        async function runSequence() {
          // Reset
          rows.forEach(r => { if(r) r.classList.add('hidden'); });
          msgs.forEach(m => { if(m) m.innerHTML = ''; });

          await new Promise(r => setTimeout(r, 800));

          for(let i=0; i<3; i++) {
            if(!rows[i] || !msgs[i]) continue;
            rows[i].classList.remove('hidden');

            // AI types, Student appears instantly
            if(i === 0 || i === 2) {
              await typeWriter(msgs[i], texts[i], 30);
              await new Promise(r => setTimeout(r, 1000));
            } else {
              msgs[i].innerHTML = texts[i];
              scrollToBottom();
              await new Promise(r => setTimeout(r, 1200));
            }
          }

          // Restart after long pause
          await new Promise(r => setTimeout(r, 6000));
          runSequence();
        }

        setTimeout(runSequence, 200);
      })();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#f4f7f4]/80 backdrop-blur-md border-b border-[#acc7b6]/30 animate-fade-up">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-medium tracking-tighter text-[#0f4c3a]" href="#">
            Digi Talk
          </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#1a4031]/80">
<a className="hover:text-[#0f4c3a] transition-colors" href="#features">Features</a>
<a className="hover:text-[#0f4c3a] transition-colors" href="#data">Impact</a>
<a className="hover:text-[#0f4c3a] transition-colors" href="#feedback">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-[#0f4c3a] hover:text-[#0f4c3a]/70 transition-colors hidden sm:block" href="#">
            Log in
          </a>
<a className="text-sm font-medium bg-[#0f4c3a] text-white px-5 py-2 rounded-full hover:bg-[#0f4c3a]/90 transition-all shadow-sm" href="#">
            Get Started
          </a>
</div>
</div>
</nav>

<section className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden pt-16">
<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[#e4eee7] rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[#dce8a9] rounded-full blur-3xl opacity-30 -translate-x-1/4 translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
<div className="max-w-2xl reveal-on-scroll opacity-0-init">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4eee7] border border-[#acc7b6]/40 mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#0f4c3a]"></span>
<span className="text-xs font-medium text-[#0f4c3a]">Available 24/7</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#0f4c3a] leading-[1.05] mb-6">
            The AI learning buddy
            <br/>
<span className="text-[#acc7b6]">that actually listens.</span>
</h1>
<p className="text-lg sm:text-xl font-light text-[#1a4031]/80 leading-relaxed mb-10 max-w-xl">
            Digi Talk is your personal AI study partner — available 24/7, endlessly patient, and built to help you understand your coursework through real conversation, not passive review.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0f4c3a] text-white px-7 py-4 rounded-xl font-medium text-sm hover:bg-[#0a3327] transition-all hover:shadow-lg hover:shadow-[#0f4c3a]/20 group" href="#cta">
              Meet Your Buddy
              <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto reveal-on-scroll delay-200 opacity-0-init">
<div className="absolute inset-0 bg-[#e4eee7] rounded-3xl rotate-3 scale-105 border border-[#acc7b6]/30 transition-transform hover:rotate-6 duration-700"></div>
<div className="absolute inset-0 bg-white rounded-3xl shadow-2xl shadow-[#0f4c3a]/10 border border-white/50 overflow-hidden flex flex-col animate-float">

<div className="h-14 border-b border-[#f4f7f4] flex items-center px-6 gap-3 bg-white/90 backdrop-blur-sm z-20">
<div className="w-8 h-8 rounded-full bg-[#e4eee7] flex items-center justify-center text-[#0f4c3a]">
<iconify-icon height="18" icon="solar:ghost-smile-linear" width="18"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight text-[#0f4c3a]">Digi Talk</div>
<div className="ml-auto w-2 h-2 rounded-full bg-[#acc7b6] animate-pulse"></div>
</div>

<div className="flex-1 p-5 sm:p-6 flex flex-col gap-5 relative bg-[#f4f7f4]/60 overflow-y-auto overflow-x-hidden z-10 scroll-smooth" id="hero-chat-interface" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>#hero-chat-interface::-webkit-scrollbar { display: none; }</style>

<div className="flex gap-3 items-end self-start max-w-[85%] hidden" id="msg-row-1">
<div className="w-8 h-8 rounded-full bg-[#0f4c3a] flex-shrink-0 flex items-center justify-center text-white shadow-sm mb-1">
<iconify-icon height="16" icon="solar:ghost-smile-linear" width="16"></iconify-icon>
</div>
<div className="bg-[#0f4c3a] p-4 rounded-2xl rounded-bl-sm shadow-md text-white text-sm font-light leading-relaxed" id="msg-1"></div>
</div>

<div className="flex gap-3 items-end self-end max-w-[85%] hidden" id="msg-row-2">
<div className="bg-[#acc7b6] p-4 rounded-2xl rounded-br-sm shadow-sm text-[#0f4c3a] text-sm font-medium leading-relaxed" id="msg-2"></div>
<div className="w-8 h-8 rounded-full bg-white border border-[#acc7b6] flex-shrink-0 flex items-center justify-center text-[#0f4c3a] mb-1">
<iconify-icon height="16" icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex gap-3 items-end self-start max-w-[85%] hidden" id="msg-row-3">
<div className="w-8 h-8 rounded-full bg-[#0f4c3a] flex-shrink-0 flex items-center justify-center text-white shadow-sm mb-1">
<iconify-icon height="16" icon="solar:ghost-smile-linear" width="16"></iconify-icon>
</div>
<div className="bg-[#0f4c3a] p-4 rounded-2xl rounded-bl-sm shadow-md text-white text-sm font-light leading-relaxed" id="msg-3"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden border-t border-[#acc7b6]/20 bg-white" id="features">
<div className="max-w-[90rem] mx-auto px-6 w-full">
<div className="mb-12 max-w-2xl reveal-on-scroll opacity-0-init">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0f4c3a] mb-4">
            Everything your learning needs.<br/>In one buddy.
          </h2>
</div>
<div className="flex flex-col lg:flex-row gap-4 xl:gap-6 group/grid h-[60vh] lg:h-[500px]">

<div className="group/card flex-1 relative bg-[#e4eee7] border border-[#0f4c3a]/5 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#0f4c3a]/15 group-hover/grid:opacity-40 hover:!opacity-100 reveal-on-scroll delay-100 opacity-0-init overflow-hidden rounded-3xl lg:rounded-none lg:rounded-l-[120px] p-8 lg:pl-16 flex flex-col justify-end pb-12">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="liquid-blob w-[160%] h-[160%] -top-[30%] -left-[30%] bg-[#dce8a9]/40" style={{animationDuration: '22s'}}></div>
<div className="liquid-blob w-[140%] h-[140%] top-[10%] left-[10%] bg-[#acc7b6]/30" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
</div>
<div className="bg-grain"></div>
<div className="relative z-10 text-[#0f4c3a] mb-4 bg-white/60 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
<iconify-icon height="24" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="relative z-10 text-xl lg:text-2xl font-medium tracking-tight text-[#0f4c3a]">
              Revision &amp; Study
            </h3>
</div>

<div className="group/card flex-1 relative bg-[#dce8a9] border border-[#0f4c3a]/5 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#0f4c3a]/15 group-hover/grid:opacity-40 hover:!opacity-100 reveal-on-scroll delay-200 opacity-0-init overflow-hidden rounded-3xl lg:rounded-none p-8 flex flex-col justify-end pb-12">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="liquid-blob w-[160%] h-[160%] -top-[30%] -left-[30%] bg-[#e4eee7]/50" style={{animationDuration: '19s'}}></div>
<div className="liquid-blob w-[140%] h-[140%] top-[10%] left-[10%] bg-[#acc7b6]/20" style={{animationDuration: '24s', animationDirection: 'reverse'}}></div>
</div>
<div className="bg-grain"></div>
<div className="relative z-10 text-[#0f4c3a] mb-4 bg-white/60 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
<iconify-icon height="24" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="relative z-10 text-xl lg:text-2xl font-medium tracking-tight text-[#0f4c3a]">
              Assessment
            </h3>
</div>

<div className="group/card flex-1 relative bg-[#acc7b6] border border-[#0f4c3a]/5 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#0f4c3a]/15 group-hover/grid:opacity-40 hover:!opacity-100 reveal-on-scroll delay-300 opacity-0-init overflow-hidden rounded-3xl lg:rounded-none p-8 flex flex-col justify-end pb-12">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="liquid-blob w-[160%] h-[160%] -top-[30%] -left-[30%] bg-[#95b5a1]/40" style={{animationDuration: '25s'}}></div>
<div className="liquid-blob w-[140%] h-[140%] top-[10%] left-[10%] bg-[#e4eee7]/30" style={{animationDuration: '21s', animationDirection: 'reverse'}}></div>
</div>
<div className="bg-grain"></div>
<div className="relative z-10 text-[#0f4c3a] mb-4 bg-white/50 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
<iconify-icon height="24" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="relative z-10 text-xl lg:text-2xl font-medium tracking-tight text-[#0f4c3a]">
              Practice &amp; Readiness
            </h3>
</div>

<div className="group/card flex-1 relative bg-[#0f4c3a] border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#0f4c3a]/30 group-hover/grid:opacity-40 hover:!opacity-100 reveal-on-scroll delay-400 opacity-0-init overflow-hidden rounded-3xl lg:rounded-none lg:rounded-r-[120px] p-8 lg:pr-16 flex flex-col justify-end pb-12">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="liquid-blob w-[160%] h-[160%] -top-[30%] -left-[30%] bg-[#165e49]/60" style={{animationDuration: '23s'}}></div>
<div className="liquid-blob w-[140%] h-[140%] top-[10%] left-[10%] bg-[#0a3327]/60" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
</div>
<div className="bg-grain" style={{mixBlendMode: 'overlay', opacity: '0.35'}}></div>
<div className="relative z-10 text-[#dce8a9] mb-4 bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
<iconify-icon height="24" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="relative z-10 text-xl lg:text-2xl font-medium tracking-tight text-white">
              Platform &amp; Integrations
            </h3>
</div>
</div>
</div>
</section>

<section className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden border-t border-[#acc7b6]/20" id="data">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center -z-20"></div>

<div className="absolute inset-0 bg-[#f4f7f4]/95 backdrop-blur-2xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full py-12">
<div className="text-center mb-16 reveal-on-scroll opacity-0-init">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0f4c3a] mb-4">
            Not another study app. <span className="text-[#acc7b6]">A different kind of learning.</span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="grid grid-cols-2 gap-8 lg:gap-12 reveal-on-scroll delay-100 opacity-0-init">
<div>
<div className="text-6xl sm:text-7xl font-semibold tracking-tighter text-[#0f4c3a] mb-2">90%</div>
<div className="text-sm font-medium uppercase tracking-widest text-[#acc7b6]">Higher Retention</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold tracking-tighter text-[#0f4c3a] mb-2">88%</div>
<div className="text-sm font-medium uppercase tracking-widest text-[#acc7b6]">Better Exam Scores</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold tracking-tighter text-[#0f4c3a] mb-2">2 <span className="text-4xl text-[#acc7b6] tracking-tight font-medium">in</span> 3</div>
<div className="text-sm font-medium uppercase tracking-widest text-[#acc7b6]">Prefer Voice AI</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold tracking-tighter text-[#0f4c3a] mb-2">10 <span className="text-4xl text-[#acc7b6] tracking-tight font-medium">min</span></div>
<div className="text-sm font-medium uppercase tracking-widest text-[#acc7b6]">To Master Concepts</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-[#0f4c3a]/5 border border-[#acc7b6]/20 reveal-on-scroll delay-200 opacity-0-init">
<div className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#f4f7f4]">
<div className="text-sm font-medium text-[#1a4031]/50 uppercase tracking-widest">Without Digi Talk</div>
<div className="text-sm font-medium text-[#0f4c3a] uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-[#acc7b6]" icon="solar:star-fall-linear"></iconify-icon> With Digi Talk
                </div>
</div>
<div className="grid grid-cols-2 gap-4 items-center">
<div className="text-base font-light text-[#1a4031]/60 line-through decoration-[#1a4031]/20">Passive textbook reading</div>
<div className="text-lg font-medium text-[#0f4c3a]">Active, engaging conversations</div>
</div>
<div className="grid grid-cols-2 gap-4 items-center">
<div className="text-base font-light text-[#1a4031]/60 line-through decoration-[#1a4031]/20">Static multiple-choice quizzes</div>
<div className="text-lg font-medium text-[#0f4c3a]">Dynamic Socratic questioning</div>
</div>
<div className="grid grid-cols-2 gap-4 items-center">
<div className="text-base font-light text-[#1a4031]/60 line-through decoration-[#1a4031]/20">Waiting days for grades</div>
<div className="text-lg font-medium text-[#0f4c3a]">Real-time feedback &amp; guidance</div>
</div>
<div className="grid grid-cols-2 gap-4 items-center">
<div className="text-base font-light text-[#1a4031]/60 line-through decoration-[#1a4031]/20">Memorizing raw facts</div>
<div className="text-lg font-medium text-[#0f4c3a]">Deep concept mastery</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden border-t border-[#acc7b6]/20" id="feedback">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center -z-20"></div>

<div className="absolute inset-0 bg-[#0f4c3a]/95 backdrop-blur-2xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="text-center mb-16 reveal-on-scroll opacity-0-init">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
            Before and after <span className="text-[#dce8a9]">Digi Talk</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col rounded-3xl overflow-hidden reveal-on-scroll delay-100 opacity-0-init shadow-2xl shadow-black/20">

<div className="bg-[#e4eee7] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#1a4031]/50">Before</span>
<p className="text-sm font-light text-[#1a4031]/80 leading-relaxed italic mt-4">
                "I'd just stare at my textbook for hours, re-reading the same paragraph and completely zoning out."
              </p>
</div>

<div className="bg-[#dce8a9] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#0f4c3a]/50">With Digi Talk</span>
<p className="text-lg font-medium text-[#0f4c3a] leading-snug mt-4">
                "I actually look forward to studying. It feels like chatting with a smart friend who never judges my mistakes."
              </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-[#0f4c3a] font-medium text-xs">SN</div>
<span className="text-sm font-semibold text-[#0f4c3a]">Sophie N., Student</span>
</div>
</div>
</div>

<div className="flex flex-col rounded-3xl overflow-hidden reveal-on-scroll delay-200 opacity-0-init shadow-2xl shadow-black/20 md:-translate-y-4">

<div className="bg-[#e4eee7] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#1a4031]/50">Before</span>
<p className="text-sm font-light text-[#1a4031]/80 leading-relaxed italic mt-4">
                "Grading oral assessments and trying to gauge true comprehension took weeks out of my semester."
              </p>
</div>

<div className="bg-[#acc7b6] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#0f4c3a]/50">With Digi Talk</span>
<p className="text-lg font-medium text-[#0f4c3a] leading-snug mt-4">
                "I get instant, unbiased insights into every student's comprehension level before they even sit for the exam."
              </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-[#0f4c3a] font-medium text-xs">KT</div>
<span className="text-sm font-semibold text-[#0f4c3a]">Mr. Karim T., Educator</span>
</div>
</div>
</div>

<div className="flex flex-col rounded-3xl overflow-hidden reveal-on-scroll delay-300 opacity-0-init shadow-2xl shadow-black/20">

<div className="bg-[#e4eee7] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#1a4031]/50">Before</span>
<p className="text-sm font-light text-[#1a4031]/80 leading-relaxed italic mt-4">
                "I was way too shy to raise my hand or practice speaking my arguments out loud in class."
              </p>
</div>

<div className="bg-[#dce8a9] p-8 flex-1 flex flex-col justify-center relative">
<span className="absolute top-4 left-6 text-[10px] font-semibold tracking-widest uppercase text-[#0f4c3a]/50">With Digi Talk</span>
<p className="text-lg font-medium text-[#0f4c3a] leading-snug mt-4">
                "I practice my arguments privately with the AI until I'm absolutely confident enough to speak up."
              </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-[#0f4c3a] font-medium text-xs">AR</div>
<span className="text-sm font-semibold text-[#0f4c3a]">Anh R., Student</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen w-full snap-start flex flex-col justify-between bg-[#0f4c3a] px-6 pt-24 pb-8 overflow-hidden" id="cta">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#dce8a9] opacity-[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#acc7b6] opacity-[0.05] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
<div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center reveal-on-scroll opacity-0-init relative z-10">
<h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
          Set up your first AI-powered learning buddy in <span className="text-[#dce8a9]">under 5 minutes.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mt-4">
<a className="w-full sm:w-auto flex items-center justify-center bg-[#dce8a9] text-[#0f4c3a] px-8 py-4 rounded-xl font-medium text-base hover:bg-white transition-all shadow-xl shadow-black/10" href="#">
            Try free as a student
          </a>
<a className="w-full sm:w-auto flex items-center justify-center bg-transparent text-[#acc7b6] border border-[#acc7b6]/50 px-8 py-4 rounded-xl font-medium text-base hover:bg-white/5 hover:text-white hover:border-white transition-all" href="#">
            Book a school demo
          </a>
</div>
</div>

<div className="w-full max-w-7xl mx-auto border-t border-white/10 pt-8 mt-auto relative z-10 reveal-on-scroll delay-200 opacity-0-init">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<a className="text-xl font-medium tracking-tighter text-white" href="#">
              Digi Talk
            </a>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm font-light text-[#acc7b6]">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">For Educators</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="flex items-center gap-4 text-[#acc7b6]">
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>



    </>
  );
}
