import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



      function handleSpotlight(e) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }
    


      (function(){
        const slider = document.getElementById('testimonial-rail');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        if (slider && prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => slider.scrollBy({ left: -470, behavior: 'smooth' }));
            nextBtn.addEventListener('click', () => slider.scrollBy({ left: 470, behavior: 'smooth' }));
        }
      })();
    


      (function(){
        document.body.addEventListener('click', function(e) {
          const button = e.target.closest('[data-accordion="faq"]');
          if (!button) return;
          const item = button.closest('[data-accordion-item]');
          if (!item) return;

          const isOpen = item.getAttribute('data-open') === 'true';
          const answer = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');

          if (!isOpen) {
             // Open
             item.setAttribute('data-open', 'true');
             answer.classList.remove('hidden');
             if(plus) plus.classList.add('hidden');
             if(minus) minus.classList.remove('hidden');
          } else {
             // Close
             item.setAttribute('data-open', 'false');
             answer.classList.add('hidden');
             if(plus) plus.classList.remove('hidden');
             if(minus) minus.classList.add('hidden');
          }
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex" href="#">
<div className="w-8 h-8 bg-black rounded-lg text-white flex items-center justify-center">
<iconify-icon icon="lucide:pen-tool" width="16"></iconify-icon>
</div>
          Meet
          <span className="transition-colors text-stone-500">Book</span>
</a>
<nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#how-it-works">
            How it works
          </a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#customers">
            Customers
          </a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#pricing">
            Pricing
          </a>
</nav>
<div className="flex gap-x-8 items-center">
<a className="text-sm font-medium text-stone-600 hover:text-black hidden sm:block" href="#login">
            Log in
          </a>
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
            Sign Up Free
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-6" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
              Auto-Note Taking is Live
            </div>

<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
              The AI Notetaker
              <span className="text-slate-950 font-google-sans-flex relative inline-block">
                that writes
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
              for you.
            </h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
              Stop typing during calls. MeetBook connects to your calendar,
              records the meeting, and emails you the summary.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
                  Start Recording
                </span>
<div className="button-shine"></div>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors">
                See how it works
              </button>
</div>
<style>
              @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
              @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
              .glass-button {
                  background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                  box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                  backdrop-filter: blur(4px);
                  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
              }
              .glass-button:hover { transform: scale(0.98); }
              .button-shine {
                  position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                  background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                  mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                  transition: background-position 500ms, --angle-2 500ms;
              }
              .glass-button:hover .button-shine { background-position: 25% 50%; }
            </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 bg-blue-50 text-blue-600 border-blue-100 relative">
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">
                      Project Kickoff
                    </p>
<span className="text-[10px] text-stone-400">10:00 AM</span>
</div>
<p className="text-xs text-stone-500 truncate">
                    MeetBook joining automatically...
                  </p>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
<iconify-icon icon="lucide:pen-line" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">
                      Notes Ready
                    </p>
<span className="text-[10px] text-stone-400">Just now</span>
</div>
<p className="text-xs text-stone-500 truncate">
                    Summary: Budget approved for Q3.
                  </p>
</div>
<span className="bg-neutral-100 text-[10px] px-2 py-0.5 rounded border border-neutral-200 font-medium text-stone-600">
                  View
                </span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-stone-500 flex items-center justify-center border shrink-0 bg-white border-stone-200">
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">
                      Sent to Team
                    </p>
<span className="text-[10px] text-stone-400">
                      Slack &amp; Email
                    </span>
</div>
<p className="text-xs text-stone-500 truncate">
                    Recap shared with 5 people.
                  </p>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-sm font-medium text-stone-400 uppercase tracking-widest mb-6">
              Works with your tools
            </p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Zoom
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Google Meet
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Teams
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:slack"></iconify-icon>
                    Slack
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:mail"></iconify-icon>
                    Gmail
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:calendar"></iconify-icon>
                    Outlook
                  </div>
</div>
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 ml-12 lg:ml-24">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Zoom
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Google Meet
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:video"></iconify-icon>
                    Teams
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:slack"></iconify-icon>
                    Slack
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:mail"></iconify-icon>
                    Gmail
                  </div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-bold font-sans">
<iconify-icon icon="lucide:calendar"></iconify-icon>
                    Outlook
                  </div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat">
                Focus on the conversation.
                
                <span className="text-stone-400">We'll handle the notes.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:help-circle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">
                  Forgot details?
                </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                  It's hard to listen and type at the same time. You miss
                  things. We catch everything.
                </p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="" icon="lucide:list-x" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">
                  Messy Notes?
                </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                  Stop taking photos of whiteboards or writing chicken scratch.
                  Get clean, typed summaries.
                </p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:user-x" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">
                  Absent Team?
                </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                  Someone couldn't make the meeting? Just forward them the
                  automatic recap.
                </p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" id="how-it-works">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-10 lg:mb-12">
              How it works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-montserrat mb-3">
                    Your AI Notetaker
                  </h3>
<p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                    It joins the call, listens, and types out the notes. You get
                    a perfect summary instantly.
                  </p>
<a className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link" href="#">
                    View Sample Note
                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-900 w-full max-w-[280px] z-10 rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-2xl border border-stone-800">
<div className="flex gap-2 border-stone-800 border-b mb-4 pb-3 gap-x-2 gap-y-2 items-center">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
</div>
<div className="space-y-3 font-mono text-[10px] text-stone-400">
<div className="flex gap-2 items-start">
<span className="text-blue-400 w-8 shrink-0">Alex:</span>
<span className="text-stone-300">
                          Let's launch the website on Friday.
                        </span>
</div>
<div className="flex gap-2 items-start">
<span className="text-purple-400 w-8 shrink-0">Sarah:</span>
<span className="text-stone-300">
                          I'll prepare the graphics.
                        </span>
</div>
<div className="my-2 border-t border-stone-800"></div>
<div className="flex gap-2 items-start">
<span className="text-[#c1ff72] w-8 shrink-0">AI:</span>
<span className="text-[#c1ff72]">
                          Key Decision: Launch Date Set.
                        </span>
</div>
<div className="flex gap-3 bg-stone-800 border-stone-700 border rounded-lg mt-4 pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<div className="h-6 w-6 rounded bg-lime-900/50 text-lime-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
</div>
<div className="flex-1 text-[9px] text-stone-300">
                          Action: Sarah to do graphics
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:calendar-check" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-montserrat mb-3">
                      Syncs with Calendar
                    </h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                      No buttons to press. Connect your calendar, and MeetBook
                      automatically joins your Zoom or Teams calls to record
                      them.
                    </p>
</div>
<div className="flex items-center gap-2 text-stone-900 text-sm font-semibold">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<span>Google &amp; Outlook supported</span>
</div>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4 w-full max-w-md">

<div className="flex justify-between items-center mb-4 border-b pb-2 border-stone-100">
<span className="font-bold text-stone-800">Today</span>
<span className="text-xs text-stone-400">Wed, Oct 24</span>
</div>

<div className="space-y-3">

<div className="flex gap-3 opacity-50">
<div className="text-xs text-stone-400 w-12 pt-1">
                            9:00 AM
                          </div>
<div className="flex-1 bg-stone-50 p-3 rounded-lg border border-stone-100">
<div className="text-xs font-bold text-stone-700 line-through">
                              Daily Standup
                            </div>
</div>
</div>

<div className="flex gap-3 relative">
<div className="text-xs text-stone-900 font-bold w-12 pt-1">
                            10:00 AM
                          </div>
<div className="flex-1 bg-white p-3 rounded-lg border border-lime-500 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500"></div>
<div className="flex justify-between items-start">
<div className="text-sm font-bold text-stone-900">
                                Product Review
                              </div>
<span className="bg-red-50 text-red-600 border border-red-100 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                REC
                              </span>
</div>
<div className="mt-2 flex items-center gap-2">
<div className="flex -space-x-1">
<div className="w-5 h-5 rounded-full bg-blue-100 border border-white"></div>
<div className="w-5 h-5 rounded-full bg-purple-100 border border-white"></div>
</div>
<span className="text-[10px] text-stone-500">
                                + MeetBook joined
                              </span>
</div>
</div>
</div>

<div className="flex gap-3">
<div className="text-xs text-stone-400 w-12 pt-1">
                            2:00 PM
                          </div>
<div className="flex-1 bg-stone-50 p-3 rounded-lg border border-stone-100 flex justify-between items-center">
<div className="text-xs font-bold text-stone-600">
                              Client Call
                            </div>
<div className="w-8 h-4 bg-lime-200 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">
<div className="relative w-full h-32 mb-4">
<div className="absolute right-0 top-0 space-y-3 w-full max-w-[240px]">
<div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75 border border-stone-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="lucide:search"></iconify-icon>
                        "What was the budget?"
                      </div>
</div>
<div className="bg-[#002f43] p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon>
                        $45,000 approved.
                      </div>
</div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:search-code" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">
                    Ask Questions
                  </h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">
                    Don't read the whole transcript. Just ask "What did we
                    decide?" and get the answer.
                  </p>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">

<div className="flex w-full h-32 relative justify-center items-center">
<div className="relative w-full max-w-[200px] bg-white rounded-xl shadow-lg border border-sky-100 p-3 transform rotate-2 group-hover:rotate-0 transition-all duration-300">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-bold text-stone-400">
                        Share with
                      </span>
<iconify-icon className="text-stone-300" icon="lucide:x" width="12"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-2 p-1.5 hover:bg-stone-50 rounded cursor-pointer">
<div className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-stone-500">
<iconify-icon icon="lucide:slack" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-700">
                        #marketing-team
                      </span>
</div>
<div className="flex items-center gap-2 p-1.5 hover:bg-stone-50 rounded cursor-pointer">
<div className="w-6 h-6 rounded bg-stone-200 flex items-center justify-center text-stone-500">
<iconify-icon icon="lucide:mail" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-700">
                        Email Attendees
                      </span>
</div>
<div className="absolute -right-2 -bottom-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer hover:bg-sky-600 transition-colors">
<iconify-icon icon="lucide:send" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">
                    Share with Team
                  </h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">
                    Keep everyone in the loop. Automatically email the summary
                    to attendees or send to Slack.
                  </p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-4xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-montserrat leading-tight">
                Simple for you.
                
                <span className="text-stone-400">Powerful for business.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:mic" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">
                    Records Everything
                  </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                    Video or audio. In-person or online. We capture every word
                    accurately.
                  </p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:lock" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">
                    Private &amp; Secure
                  </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                    Your conversations are private. We don't train our AI on
                    your specific data without permission.
                  </p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">
                    Instant Summary
                  </h3>
<p className="text-stone-600 text-sm leading-relaxed">
                    Get the recap in your inbox 2 minutes after the call ends.
                    Like magic.
                  </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20" id="customers">
<div className="bg-stone-900 border border-stone-800 rounded-[32px] p-8 sm:p-12 lg:p-16 relative shadow-2xl overflow-hidden group">

<div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-12 lg:mb-16 relative z-10">
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
<span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">
                      Testimonials
                    </span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight font-montserrat leading-[0.95]">
                    Loved by teams
                    
                    everywhere.
                  </h2>
</div>
<p className="text-stone-400 text-sm sm:text-base max-w-sm leading-relaxed mb-1">
                  Join thousands of professionals who have stopped taking notes
                  and started listening.
                </p>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory scroll-smooth items-stretch" id="testimonial-rail">

<article className="min-w-[300px] sm:min-w-[440px] bg-stone-800/50 border border-stone-700/50 rounded-3xl p-8 backdrop-blur-sm snap-center select-none flex flex-col hover:bg-stone-800 transition-colors duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-stone-200 font-medium mb-8 leading-relaxed flex-1">
                      "The summaries are shockingly accurate. I don't even take
                      a notebook to meetings anymore. It captures details I
                      usually miss."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-700/50 pt-6">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-300 font-bold shrink-0">
                        FC
                      </div>
<div>
<div className="text-white font-medium text-sm">
                          Felix Chen
                        </div>
<div className="text-stone-500 text-xs">Product Lead</div>
</div>
</div>
</article>

<article className="min-w-[300px] sm:min-w-[440px] bg-stone-800/50 border border-stone-700/50 rounded-3xl p-8 backdrop-blur-sm snap-center select-none flex flex-col hover:bg-stone-800 transition-colors duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-stone-200 font-medium mb-8 leading-relaxed flex-1">
                      "Shared the recap with my boss and she was impressed.
                      Saved me 30 mins of writing after our weekly sync."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-700/50 pt-6">
<img alt="Sarah" className="w-10 h-10 rounded-full bg-stone-700 shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<div className="text-white font-medium text-sm">
                          Sarah Miller
                        </div>
<div className="text-stone-500 text-xs">
                          Marketing Director
                        </div>
</div>
</div>
</article>

<article className="min-w-[300px] sm:min-w-[440px] bg-stone-800/50 border border-stone-700/50 rounded-3xl p-8 backdrop-blur-sm snap-center select-none flex flex-col hover:bg-stone-800 transition-colors duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-stone-200 font-medium mb-8 leading-relaxed flex-1">
                      "Being able to search 'what was the deadline' and get an
                      answer instantly is magic. It's like having a second
                      brain."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-700/50 pt-6">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-300 font-bold shrink-0">
                        MJ
                      </div>
<div>
<div className="text-white font-medium text-sm">
                          Marcus Johnson
                        </div>
<div className="text-stone-500 text-xs">Tech Lead</div>
</div>
</div>
</article>

<article className="min-w-[300px] sm:min-w-[440px] bg-stone-800/50 border border-stone-700/50 rounded-3xl p-8 backdrop-blur-sm snap-center select-none flex flex-col hover:bg-stone-800 transition-colors duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-stone-200 font-medium mb-8 leading-relaxed flex-1">
                      "Setup took literally 30 seconds. It just works with my
                      Google Calendar. No complicated onboarding."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-700/50 pt-6">
<img alt="Jessica" className="w-10 h-10 rounded-full bg-stone-700 shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"/>
<div>
<div className="text-white font-medium text-sm">
                          Jessica Lee
                        </div>
<div className="text-stone-500 text-xs">Freelancer</div>
</div>
</div>
</article>

<article className="min-w-[300px] sm:min-w-[440px] bg-stone-800/50 border border-stone-700/50 rounded-3xl p-8 backdrop-blur-sm snap-center select-none flex flex-col hover:bg-stone-800 transition-colors duration-300">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-[#c1ff72]" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg sm:text-xl text-stone-200 font-medium mb-8 leading-relaxed flex-1">
                      "Finally, an AI tool that actually saves time instead of
                      adding more work. It's become essential for our
                      operations."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-700/50 pt-6">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-300 font-bold shrink-0">
                        DR
                      </div>
<div>
<div className="text-white font-medium text-sm">
                          David Ross
                        </div>
<div className="text-stone-500 text-xs">Operations</div>
</div>
</div>
</article>
</div>

<div className="absolute bottom-0 right-0 z-20 flex items-center gap-3">
<button aria-label="Previous" className="w-12 h-12 rounded-full border border-stone-700 bg-stone-800/80 backdrop-blur text-white hover:bg-stone-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group/btn" id="testimonial-prev">
<iconify-icon className="group-hover/btn:-translate-x-0.5 transition-transform" icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button aria-label="Next" className="w-12 h-12 rounded-full bg-[#c1ff72] text-stone-900 hover:bg-[#b0ef60] transition-colors flex items-center justify-center shadow-[0_0_20px_rgba(193,255,114,0.3)] group/btn" id="testimonial-next">
<iconify-icon className="group-hover/btn:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-24" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-4">
                Simple, transparent pricing
              </h2>
<p className="text-stone-500 text-lg">
                Choose the plan that fits your team.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
<div className="p-8 rounded-3xl border border-stone-200 bg-white hover:shadow-lg transition-shadow flex flex-col">
<h3 className="text-xl font-bold text-stone-900 mb-2">Starter</h3>
<div className="text-4xl font-bold text-stone-900 mb-2">
                  $0
                  <span className="text-base font-normal text-stone-500">/mo</span>
</div>
<p className="text-sm text-stone-500 mb-8">
                  For individuals getting started.
                </p>
<ul className="space-y-4 mb-8 text-sm text-stone-600 flex-1">
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    300 transcription mins/mo
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    Basic meeting summaries
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    Google Calendar Sync
                  </li>
</ul>
<button className="w-full py-4 rounded-xl border border-stone-200 text-stone-900 font-bold hover:bg-stone-50 transition-colors">
                  Get Started Free
                </button>
<p className="text-center text-[10px] text-stone-400 mt-4">
                  No credit card required
                </p>
</div>
<div className="p-8 rounded-3xl border-2 border-[#c1ff72] bg-stone-900 relative flex flex-col transform md:-translate-y-4 shadow-xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c1ff72] text-stone-900 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
<h3 className="text-xl font-bold text-white mb-2">Pro</h3>
<div className="text-4xl font-bold text-white mb-2">
                  $19
                  <span className="text-base font-normal text-stone-400">/mo</span>
</div>
<p className="text-sm text-stone-400 mb-8">
                  For power users and professionals.
                </p>
<ul className="space-y-4 mb-8 text-sm text-stone-300 flex-1">
<li className="flex gap-3">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon>
                    Unlimited transcription
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon>
                    Advanced AI Insights
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon>
                    Ask Questions to your notes
                  </li>
</ul>
<button className="w-full py-4 rounded-xl bg-[#c1ff72] text-stone-900 font-bold hover:bg-[#b0ef60] transition-colors shadow-[0_0_20px_rgba(193,255,114,0.3)]">
                  Start Free Trial
                </button>
<p className="text-center text-[10px] text-stone-500 mt-4">
                  7-day free trial, cancel anytime
                </p>
</div>
<div className="p-8 rounded-3xl border border-stone-200 bg-white hover:shadow-lg transition-shadow flex flex-col">
<h3 className="text-xl font-bold text-stone-900 mb-2">Team</h3>
<div className="text-4xl font-bold text-stone-900 mb-2">
                  $49
                  <span className="text-base font-normal text-stone-500">/mo</span>
</div>
<p className="text-sm text-stone-500 mb-8">
                  For small teams and startups.
                </p>
<ul className="space-y-4 mb-8 text-sm text-stone-600 flex-1">
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    Everything in Pro
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    Team Workspace
                  </li>
<li className="flex gap-3">
<iconify-icon className="text-stone-900" icon="lucide:check"></iconify-icon>
                    Centralized Billing
                  </li>
</ul>
<button className="w-full py-4 rounded-xl border border-stone-200 text-stone-900 font-bold hover:bg-stone-50 transition-colors">
                  Contact Sales
                </button>
<p className="text-center text-[10px] text-stone-400 mt-4">
                  Volume discounts available
                </p>
</div>
</div>
</section>
<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20 lg:mb-32" id="faq">
<div className="relative overflow-hidden rounded-[40px] bg-white border border-stone-200 shadow-xl shadow-stone-200/50">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f4_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f4_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none"></div>
<div className="relative p-8 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-24 pt-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-semibold uppercase tracking-wider mb-6">
<iconify-icon icon="lucide:help-circle" width="14"></iconify-icon>
            Support
          </div>
<h2 className="text-4xl lg:text-6xl font-medium text-stone-900 tracking-tighter font-montserrat mb-6">
            Common Questions
          </h2>
<p className="text-stone-500 text-lg leading-relaxed mb- we handle your data. &lt;/p&gt; &lt;div class=" flex="" flex-col="" gap-6"="">
<a className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-[#c1ff72] font-semibold hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group" href="#contact">
              Contact Support
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:message-circle" width="18"></iconify-icon>
</a>
</p><div className="flex items-center gap-4 text-sm text-stone-500">
<div className="flex -space-x-3">
<img alt="Support" className="w-10 h-10 rounded-full border-[3px] border-white bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="Support" className="w-10 h-10 rounded-full border-[3px] border-white bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<img alt="Support" className="w-10 h-10 rounded-full border-[3px] border-white bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"/>
</div>
<p>Replies in <span className="font-semibold text-stone-900">~5 mins</span></p>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-3">

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="true">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Does MeetBook automatically join my meetings?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon className="hidden" data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed" data-qa="a">
              Yes. Once you connect your calendar, MeetBook automatically joins scheduled meetings that you choose. You can enable or disable it per meeting.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Will other participants know the meeting is being recorded?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Yes. MeetBook joins as a visible participant and clearly indicates that the meeting is being recorded, following standard meeting platform guidelines.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Is it legal to record meetings with MeetBook?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              MeetBook follows platform rules and best practices, but recording laws depend on your country or state. You are responsible for complying with local consent laws. We recommend informing participants before recording.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Do I need to install anything?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              No. There’s nothing to install. MeetBook works entirely through calendar and meeting integrations.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                What happens after the meeting ends?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Once the meeting ends:
              <ul className="list-disc pl-5 mt-2 space-y-1 marker:text-stone-400">
<li>The recording is processed automatically</li>
<li>A summary and key action items are generated</li>
<li>You receive the recap via email</li>
</ul>
</div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">-6 text-left focus:outline-none" data-accordion="faq"&gt;
              <span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                How accurate are the summaries?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Summaries are generated using advanced AI models trained for meetings and discussions. Accuracy is highest for clear audio and structured conversations, and you can always view the full transcript if needed.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Can I search or ask questions from past meetings?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button> data-qa="a"&gt;
              Yes. You can search across all your meetings or ask natural-language questions like “What did we decide about pricing?” and get instant answers.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Where is my data stored?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Your data is securely stored using industry-standard encryption. We do not train our AI on your private meetings without explicit permission.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
hover:text-blue-600 transition-colors"&gt;
                Can I delete my recordings and data?
              
              <span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Yes. You have full control. You can delete individual meetings or your entire account and data at any time.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Does MeetBook work with Zoom, Google Meet, and Teams?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
-qa="a"&gt;
              Yes. MeetBook supports major platforms including Zoom, Google Meet, and Microsoft Teams.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors" type="button">
                Can I share meeting summaries with my team?
              
              <span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Absolutely. You can automatically share summaries via email or send them to tools like Slack.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                What if I don’t want MeetBook to join a specific meeting?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              You can easily exclude meetings by calendar rules or turn off recording for individual events.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Is there a free plan?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Yes. You can start for free with no credit card required. Paid plans are available if you need more usage or team features.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                How long does setup take?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Most users are set up in under 30 seconds. Just sign up and connect your calendar.
            </div>
</div>

<div className="group rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all duration-200 hover:shadow-sm" data-accordion-item="" data-open="false">
<button className="w-full flex items-start justify-between gap-4 p-6 text-left focus:outline-none" data-accordion="faq" type="button">
<span className="text-lg font-semibold text-stone-900 font-montserrat group-hover:text-blue-600 transition-colors">
                Can I cancel anytime?
              </span>
<span className="shrink-0 text-stone-400 mt-1">
<iconify-icon data-icon="plus" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden" data-icon="minus" icon="lucide:minus" width="20"></iconify-icon>
</span>
</button>
<div className="px-6 pb-6 text-stone-600 leading-relaxed hidden" data-qa="a">
              Yes. You can cancel or change your plan anytime. There are no long-term commitments.
            </div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">
                  Never write meeting notes again.
                </h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                    Get My Free Notetaker
                  </button>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-google-sans-flex">
                      Meet
                      <span className="text-lime-500">Book</span>
</span>
</div>
<p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                    The smartest way to record, transcribe, and search your
                    meetings.
                  </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                      Product
                    </h3>
<ul className="space-y-3 text-stone-600">
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                          How it works
                        </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                          Download
                        </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                          Pricing
                        </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">
                      Help
                    </h3>
<ul className="space-y-3 text-stone-600">
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                          Support Center
                        </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                          Contact Us
                        </a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2024 MeetBook. All rights reserved.</p>
</div>
</div>
</footer>
</div>
</main>
</div>




    </>
  );
}
