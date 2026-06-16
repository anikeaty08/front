import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
nunito: ['Nunito', 'sans-serif'],
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex flex-col min-h-screen z-10 relative">

<nav className="md:px-12 flex animate-fade-in w-full max-w-7xl mx-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-black">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-xl font-medium tracking-tight font-nunito text-slate-900">AfterWordsAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-700">
<a className="transition-colors hover:text-black" href="#features">Features</a>
<a className="transition-colors hover:text-black" href="#reports">Reports</a>
<a className="transition-colors hover:text-black" href="#emails">Emails</a>
<a className="transition-colors hover:text-black" href="#integrations">Integrations</a>
</div>
<button className="bg-[#1A1A1A] text-base font-normal px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white hover:bg-black">
        Try AfterWordsAI
      </button>
</nav>

<main className="flex-grow flex flex-col lg:flex-row w-full max-w-7xl mx-auto pt-10 px-6 md:px-12 pb-12 items-center gap-12">

<div className="animate-slide-up text-center lg:text-left w-full lg:w-1/2 lg:pr-6" style={{animationDelay: '0.1s'}}>
<p className="text-[11px] font-bold tracking-[0.26em] uppercase aw-blue mb-5">
          Automation Engine
        </p>
<h1 className="md:text-6xl lg:text-6xl leading-[1.05] text-5xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6">
          When your meeting ends, the work is already done
        </h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-600 font-sans max-w-xl mx-auto lg:mx-0 mb-8">
          AfterWordsAI is an AI meeting assistant that automatically turns meetings into executive reports,
          structured minutes, assigned action items, follow-up email drafts, and workflow-ready tasks.
        </p>
<div className="mt-6 flex justify-center lg:justify-start">
<div className="flex flex-col xl:flex-row items-center gap-1 xl:gap-4 lg:-ml-2 py-2">
<span className="text-base font-normal text-slate-700">No prompts</span>
<span className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-base font-normal text-slate-700">No formatting</span>
<span className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-base font-normal text-slate-700">Just click and Send</span>
</div>
</div>
</div>

<div className="animate-slide-up w-full lg:w-1/2 flex flex-col gap-4 relative" style={{animationDelay: '0.2s'}}>
<div className="bg-[#1A1A1A] rounded-[24px] shadow-xl relative overflow-hidden w-full h-[260px] md:h-[280px] shrink-0 border border-slate-800/60">

<div className="absolute inset-0 transition-all duration-[800ms] ease-out opacity-100 translate-x-0 z-10" id="user-slide-0">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Executive in office" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Executives
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    CEOs, Founders, and VPs get high-level summaries and immediate executive briefs without digging through raw notes.
                  </p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 transition-all duration-[800ms] ease-out opacity-0 translate-x-16 z-0 pointer-events-none" id="user-slide-1">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Managers collaborating" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Managers
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    Directors and Team Leads instantly track project milestones, extract decisions, and monitor blockers with zero manual effort.
                  </p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 transition-all duration-[800ms] ease-out opacity-0 translate-x-16 z-0 pointer-events-none" id="user-slide-2">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Associates working" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:circle-user" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Associates
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    Specialists and Coordinators get action items pushed into workflow tools, ready to execute instantly.
                  </p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
<button className="w-6 h-1 rounded-full transition-all bg-white cursor-default" id="user-dot-0"></button>
<button className="w-2 h-1 rounded-full transition-all bg-white/40 cursor-default" id="user-dot-1"></button>
<button className="w-2 h-1 rounded-full transition-all bg-white/40 cursor-default" id="user-dot-2"></button>
</div>
</div>
</div>
</main>

<section className="relative w-full flex justify-center px-6 md:px-12 py-12 overflow-hidden aw-blue-gradient-dark" id="features">
<div className="w-full max-w-7xl mx-auto">
<style>
          .aw-automation-section {
            max-width: 1080px;
            margin: 0 auto;
          }

          .aw-section-header {
            text-align: center;
            margin-bottom: 30px;
          }

          .aw-section-kicker {
            font-size: 11px;
            font-weight: 800;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.22em;
            margin: 0 0 10px 0;
            text-align: center;
          }

          .aw-section-title {
            font-size: clamp(32px, 4vw, 44px);
            line-height: 1.08;
            font-weight: 760;
            letter-spacing: -0.05em;
            color: #ffffff;
            margin: 0 auto;
            max-width: 880px;
            text-align: center;
          }

          .aw-left-boxes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
            align-items: stretch;
          }

          .stack-card {
            background: #ffffff;
            border-radius: 22px;
            overflow: hidden;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 200px;
            min-height: 165px;
            border: 1px solid rgba(226, 232, 240, 0.9);
            box-shadow: 0 22px 50px rgba(0, 0, 0, 0.30);
          }

          .stack-card-header {
            padding: 22px 22px 22px 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .stack-card h3 {
            font-size: 22px;
            font-weight: 760;
            color: #0f172a;
            margin: 0 0 8px 0;
            letter-spacing: -0.04em;
          }

          .stack-card p {
            font-size: 15px;
            line-height: 1.42;
            color: #334155;
            margin: 0;
          }

          .stack-inner {
            background: #ffffff;
            border-left: 1px solid #f1f5f9;
            padding: 20px 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .stack-inner h4 {
            font-size: 9.5px;
            font-weight: 800;
            color: #2563eb;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            margin: 0 0 12px 0;
          }

          .stack-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 7px;
            margin-bottom: 7px;
            border-bottom: 1px solid #f1f5f9;
          }

          .stack-row:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: 0;
          }

          .stack-row span {
            font-size: 14px;
            font-weight: 650;
            color: #1e293b;
          }

          .toggle-pill {
            width: 27px;
            height: 14px;
            background: #2563eb;
            border-radius: 999px;
            position: relative;
            flex-shrink: 0;
          }

          .toggle-pill::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: #ffffff;
            right: 2px;
            top: 2px;
          }

          @media (max-width: 1024px) {
            .aw-left-boxes {
              grid-template-columns: 1fr;
              max-width: 560px;
              margin: 0 auto;
            }

            .stack-card {
              grid-template-columns: 1fr;
              min-height: auto;
            }

            .stack-inner {
              border-left: 0;
              border-top: 1px solid #f1f5f9;
              padding: 18px;
            }
          }
        </style>
<div className="aw-automation-section">
<div className="aw-section-header">
<p className="aw-section-kicker">Automation Engine</p>
<h2 className="aw-section-title">
              Stop turning meetings into more manual work
            </h2>
</div>
<div className="aw-left-boxes">
<div className="stack-card">
<div className="stack-card-header">
<h3>AfterWordsAI Creates</h3>
<p>
                  AfterWordsAI eliminates post-meeting work by automatically generating executive reports,
                  follow-up drafts, action items, and workflow-ready outputs.
                </p>
</div>
<div className="stack-inner">
<h4>Auto Generation</h4>
<div className="stack-row">
<span>Exec Reports</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Draft Emails</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Jira Tickets</span>
<div className="toggle-pill"></div>
</div>
</div>
</div>
<div className="stack-card">
<div className="stack-card-header">
<h3>AfterWordsAI Solves</h3>
<p>
                  AfterWordsAI understands meeting context, identifies risks, captures decisions,
                  and suggests next steps before the work gets lost.
                </p>
</div>
<div className="stack-inner">
<h4>Intelligence</h4>
<div className="stack-row">
<span>Risk Detection</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Decision Capture</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Next Steps</span>
<div className="toggle-pill"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full flex justify-center px-6 md:px-12 py-14 overflow-hidden bg-white">
<div className="w-full max-w-7xl mx-auto">
<style>
          .aw-intelligence-section {
            max-width: 1160px;
            margin: 0 auto;
          }

          .aw-word-header {
            text-align: center;
            margin-bottom: 36px;
          }

          .aw-word-kicker {
            font-size: 11px;
            font-weight: 800;
            color: #2563eb;
            text-transform: uppercase;
            letter-spacing: 0.22em;
            margin: 0;
            text-align: center;
          }

          .aw-word-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 38px 74px;
            align-items: start;
            justify-content: center;
          }

          .aw-copy-line {
            border-left: 3px solid #2563eb;
            padding-left: 24px;
          }

          .aw-copy-line h3 {
            font-size: 31px;
            line-height: 1.08;
            font-weight: 760;
            letter-spacing: -0.045em;
            color: #0f172a;
            margin: 0 0 10px 0;
          }

          .aw-copy-line p {
            font-size: 17px;
            line-height: 1.46;
            color: #334155;
            margin: 0;
          }

          .aw-copy-line strong {
            color: #0f172a;
            font-weight: 750;
          }

          @media (max-width: 1024px) {
            .aw-word-grid {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .aw-copy-line h3 {
              font-size: 26px;
            }

            .aw-copy-line p {
              font-size: 16px;
            }
          }
        </style>
<div className="aw-intelligence-section">
<div className="aw-word-header">
<p className="aw-word-kicker">Meeting Intelligence</p>
</div>
<div className="aw-word-grid">
<div className="aw-copy-line">
<h3>Capture without a bot</h3>
<p>
                AfterWordsAI processes meeting recordings, transcripts, audio, video, and documents after the meeting,
                so it never needs to enter the live call as a visible meeting bot.
              </p>
</div>
<div className="aw-copy-line">
<h3>No prompts needed</h3>
<p>
                The AI meeting assistant understands meeting context automatically and turns the conversation into
                <strong>decisions, owners, deadlines, risks, action items, and follow-up drafts</strong>
                without detailed instructions.
              </p>
</div>
<div className="aw-copy-line">
<h3>Teach your AI</h3>
<p>
                AfterWordsAI includes a built-in dictionary where teams can define acronyms, internal language,
                client names, project terms, and business-specific wording so the AI understands what matters.
              </p>
</div>
<div className="aw-copy-line">
<h3>Built for after-meeting execution</h3>
<p>
                Instead of stopping at basic meeting summaries, AfterWordsAI generates structured executive reports,
                meeting minutes, assigned action items, project updates, Jira-ready tasks, and ready-to-send
                follow-up emails.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 z-10 w-full max-w-7xl mx-auto pt-16 pr-4 pb-16 pl-4 relative" id="reports">
<div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-28">

<div className="w-full lg:w-[40%]">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block font-sans aw-blue">
            Professional Reports
          </span>
<h2 className="lg:text-5xl text-4xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6 leading-tight">
            Auto-generated reports
          </h2>
<p className="text-lg font-normal mb-8 leading-relaxed font-sans text-slate-600">
            AfterWordsAI, the AI meeting assistant, analyzes meeting context and automatically turns conversations into
            executive reports, meeting minutes, action reports, incident reports, and project summary reports. Each output
            is built to capture what happened, what was decided, who owns the next step, and what needs to happen next.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
                It identifies:
              </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Key discussion themes
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Decisions made
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Owners, risks, and next steps
                </li>
</ul>
</div>
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
                It generates:
              </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Executive reports
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Meeting minutes
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Action and project reports
                </li>
</ul>
</div>
</div>
</div>

<div className="w-full lg:w-[60%]">
<style>
            .aw-report-stage {
              width: 100%;
              min-height: 430px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: visible;
            }

            .aw-report-fan {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 18px;
              width: 100%;
            }

            .aw-report-shell {
              position: relative;
              width: 205px;
              height: 380px;
              flex: 0 0 205px;
              border-radius: 32px;
              padding: 15px;
              background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 52%, #ffffff 100%);
              box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
              transition: transform 500ms ease, box-shadow 500ms ease;
            }

            .aw-report-shell:hover {
              transform: translateY(-8px);
              box-shadow: 0 32px 76px rgba(15, 23, 42, 0.22);
            }

            .aw-report-card {
              height: 100%;
              border-radius: 24px;
              background: #ffffff;
              border: 1px solid rgba(255, 255, 255, 0.72);
              box-shadow: 0 18px 38px rgba(15, 23, 42, 0.15);
              padding: 17px;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            }

            .aw-report-head {
              display: grid;
              grid-template-columns: 1fr;
              gap: 10px;
              padding-bottom: 15px;
              margin-bottom: 15px;
              border-bottom: 1px solid #f1f5f9;
            }

            .aw-report-title-wrap {
              display: flex;
              align-items: flex-start;
              gap: 10px;
              min-width: 0;
            }

            .aw-report-icon {
              width: 32px;
              height: 32px;
              border-radius: 11px;
              background: #eff6ff;
              color: #2563eb;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .aw-report-card h3 {
              font-size: 16px;
              line-height: 1.12;
              font-weight: 700;
              color: #0f172a;
              margin: 0 0 5px 0;
              letter-spacing: -0.03em;
            }

            .aw-report-card p {
              font-size: 12px;
              line-height: 1.35;
              color: #94a3b8;
              margin: 0;
            }

            .aw-status-pill {
              font-size: 9.5px;
              font-weight: 650;
              color: #15803d;
              background: #f0fdf4;
              border-radius: 999px;
              padding: 5px 8px;
              width: fit-content;
              white-space: nowrap;
              margin-left: 42px;
            }

            .aw-report-lines {
              display: flex;
              flex-direction: column;
              gap: 8px;
              margin-top: 4px;
            }

            .aw-line {
              height: 8px;
              border-radius: 999px;
              background: #f1f5f9;
            }

            .aw-line.dark {
              background: #e2e8f0;
            }

            .aw-report-bullets {
              margin-top: auto;
              display: flex;
              flex-direction: column;
              gap: 9px;
            }

            .aw-bullet-row {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .aw-dot {
              width: 7px;
              height: 7px;
              border-radius: 999px;
              background: #2563eb;
              flex-shrink: 0;
            }

            .aw-dot.green {
              background: #4ade80;
            }

            @media (max-width: 1024px) {
              .aw-report-stage {
                min-height: auto;
                overflow-x: auto;
                justify-content: flex-start;
                padding: 10px 0 20px;
              }

              .aw-report-fan {
                justify-content: flex-start;
                width: max-content;
                padding: 0 20px;
              }

              .aw-report-shell {
                margin-right: 12px;
              }
            }
          </style>
<div className="aw-report-stage">
<div className="aw-report-fan">
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:file-text" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Executive Report</h3>
<p>Leadership-ready summary</p>
</div>
</div>
<div className="aw-status-pill">Ready</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '42%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '86%'}}></div>
<div className="aw-line" style={{width: '70%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '82%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '62%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:list-checks" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Meeting Minutes</h3>
<p>Decisions and discussion</p>
</div>
</div>
<div className="aw-status-pill">Auto</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '48%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '90%'}}></div>
<div className="aw-line" style={{width: '74%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '78%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:clipboard-check" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Action Report</h3>
<p>Owners and next steps</p>
</div>
</div>
<div className="aw-status-pill">Assigned</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '38%'}}></div>
<div className="aw-line" style={{width: '86%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '64%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot green"></div>
<div className="aw-line" style={{width: '82%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot green"></div>
<div className="aw-line" style={{width: '66%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:alert-triangle" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Incident Report</h3>
<p>Risks and root causes</p>
</div>
</div>
<div className="aw-status-pill">Drafted</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '44%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '82%'}}></div>
<div className="aw-line" style={{width: '70%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '78%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '56%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 w-full max-w-7xl z-10 mx-auto pt-16 pr-4 pb-16 pl-4 relative" id="emails">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="w-full lg:w-[55%]">
<style>
            .aw-email-stack {
              display: flex;
              flex-direction: column;
              gap: 16px;
              width: 100%;
            }

            .aw-email-shell {
              width: 100%;
              border-radius: 30px;
              padding: 14px;
              background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 52%, #ffffff 100%);
              box-shadow: 0 22px 54px rgba(15, 23, 42, 0.14);
            }

            .aw-email-card {
              background: #ffffff;
              border: 1px solid rgba(255, 255, 255, 0.72);
              border-radius: 22px;
              box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
              padding: 18px 22px;
              display: grid;
              grid-template-columns: 210px 1fr;
              gap: 24px;
              align-items: center;
              min-height: 128px;
            }

            .aw-email-head {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              min-width: 0;
            }

            .aw-email-icon {
              width: 36px;
              height: 36px;
              border-radius: 12px;
              background: #eff6ff;
              color: #2563eb;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .aw-email-card h3 {
              font-size: 19px;
              line-height: 1.12;
              font-weight: 650;
              color: #0f172a;
              margin: 0 0 5px 0;
              letter-spacing: -0.03em;
            }

            .aw-email-card p {
              font-size: 13px;
              line-height: 1.3;
              color: #94a3b8;
              margin: 0;
            }

            .aw-email-status {
              font-size: 10px;
              font-weight: 650;
              color: #15803d;
              background: #f0fdf4;
              border-radius: 999px;
              padding: 5px 9px;
              width: fit-content;
              margin-top: 8px;
            }

            .aw-email-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 18px;
              align-items: center;
            }

            .aw-email-lines {
              display: flex;
              flex-direction: column;
              gap: 7px;
            }

            .aw-email-line {
              height: 8px;
              border-radius: 999px;
              background: #f1f5f9;
            }

            .aw-email-line.dark {
              background: #e2e8f0;
            }

            .aw-email-bullets {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            .aw-email-bullet-row {
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .aw-email-dot {
              width: 7px;
              height: 7px;
              border-radius: 999px;
              background: #2563eb;
              flex-shrink: 0;
            }

            .aw-email-dot.green {
              background: #4ade80;
            }

            @media (max-width: 768px) {
              .aw-email-card {
                grid-template-columns: 1fr;
                gap: 14px;
              }

              .aw-email-content {
                grid-template-columns: 1fr;
              }
            }
          </style>
<div className="aw-email-stack">
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:mail-check" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Follow-Up Email</h3>
<p>Summary and next steps</p>
<div className="aw-email-status">Ready</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '42%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '86%'}}></div>
<div className="aw-email-line" style={{width: '70%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '62%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:list-todo" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Action Item Email</h3>
<p>Owners and deadlines</p>
<div className="aw-email-status">Assigned</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '48%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '90%'}}></div>
<div className="aw-email-line" style={{width: '74%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot green"></div>
<div className="aw-email-line" style={{width: '78%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot green"></div>
<div className="aw-email-line" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:briefcase-business" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Client Recap Email</h3>
<p>Decisions and alignment</p>
<div className="aw-email-status">Drafted</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '38%'}}></div>
<div className="aw-email-line" style={{width: '86%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '64%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '66%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:circle-alert" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Escalation Email</h3>
<p>Risks and decisions needed</p>
<div className="aw-email-status">Priority</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '44%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
<div className="aw-email-line" style={{width: '70%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '78%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '56%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[45%]">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block font-sans aw-blue">
            Automated Workflows
          </span>
<h2 className="lg:text-5xl text-4xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6 leading-tight">
            Auto-generated emails
          </h2>
<p className="leading-relaxed text-xl font-normal text-slate-600 font-sans mb-8">
            AfterWordsAI, the AI meeting assistant, automatically drafts professional follow-up emails from meeting context.
            It captures key decisions, owners, deadlines, risks, and next steps, then turns them into ready-to-send corporate
            email drafts.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
                It identifies:
              </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Key decisions
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Action owners
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Risks and next steps
                </li>
</ul>
</div>
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
                It generates:
              </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Follow-up emails
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Action item emails
                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                  Escalation emails
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative pb-20 pt-14 z-10 overflow-hidden bg-white" id="integrations">
<style>
    :root {
      --aw-blue: #2563eb;
      --aw-blue-soft: #dbeafe;
      --aw-blue-soft-2: #eff6ff;
    }

    @keyframes awContinuousMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @keyframes awSoftFloat {
      0%, 100% {
        transform: translateY(0) rotate(var(--start-rotate));
      }
      50% {
        transform: translateY(-10px) rotate(var(--end-rotate));
      }
    }

    .aw-integrations-section-title {
      color: var(--aw-blue);
    }

    .aw-integrations-marquee {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: 56px 0;
      mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    }

    .aw-integrations-track {
      display: flex;
      width: max-content;
      animation: awContinuousMarquee 28s linear infinite;
      will-change: transform;
    }

    .aw-integrations-marquee:hover .aw-integrations-track {
      animation-play-state: paused;
    }

    .aw-integrations-group {
      display: flex;
      align-items: center;
      gap: 28px;
      padding-right: 28px;
      flex-shrink: 0;
    }

    .aw-integration-card {
      --start-rotate: 2deg;
      --end-rotate: -2deg;
      position: relative;
      width: 240px;
      height: 280px;
      flex: 0 0 240px;
      animation: awSoftFloat 6s ease-in-out infinite;
      transform-origin: center center;
      will-change: transform;
      transition: transform 450ms ease, filter 450ms ease;
    }

    .aw-integration-card:nth-child(2n) {
      --start-rotate: -2deg;
      --end-rotate: 2deg;
      animation-delay: -1.2s;
    }

    .aw-integration-card:nth-child(3n) {
      --start-rotate: 3deg;
      --end-rotate: -1deg;
      animation-delay: -2.4s;
    }

    .aw-integration-card:nth-child(4n) {
      --start-rotate: -3deg;
      --end-rotate: 1deg;
      animation-delay: -3.2s;
    }

    .aw-integration-card:hover {
      animation-play-state: paused;
      transform: translateY(-14px) rotate(0deg) scale(1.03) !important;
      z-index: 20;
    }

    .aw-integration-outer {
      position: absolute;
      inset: 0;
      border-radius: 40px;
      background: linear-gradient(135deg, var(--aw-blue-soft) 0%, var(--aw-blue-soft-2) 52%, #ffffff 100%);
      box-shadow: 0 22px 56px -18px rgba(37, 99, 235, 0.45);
    }

    .aw-integration-inner {
      position: absolute;
      inset: 0;
      border-radius: 32px;
      padding: 16px;
      background: linear-gradient(135deg, var(--aw-blue-soft) 0%, var(--aw-blue-soft-2) 52%, #ffffff 100%);
      box-shadow: 0 24px 54px -16px rgba(15, 23, 42, 0.16);
    }

    .aw-integration-card-body {
      width: 100%;
      height: 100%;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.72);
      border-radius: 24px;
      box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 24px;
    }

    .aw-integration-pill {
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff;
      border: 1px solid #f1f5f9;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
      border-radius: 999px;
      padding: 7px 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      z-index: 10;
    }

    .aw-integration-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--aw-blue);
    }

    .aw-integration-pill span {
      font-size: 12px;
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-family: Inter, sans-serif;
    }

    .aw-integration-logo {
      width: 96px;
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
    }

    .aw-integration-name {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: #0f172a;
      font-family: Nunito, sans-serif;
      text-align: center;
    }

    @media (max-width: 768px) {
      .aw-integration-card {
        width: 210px;
        height: 250px;
        flex-basis: 210px;
      }

      .aw-integrations-group {
        gap: 22px;
        padding-right: 22px;
      }

      .aw-integration-logo {
        width: 82px;
        height: 82px;
      }
    }
  </style>
<div className="text-center mb-10 max-w-3xl mx-auto px-6">
<p className="text-[11px] font-bold tracking-[0.26em] uppercase aw-integrations-section-title mb-4">
      Workflow Integrations
    </p>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 font-nunito mb-4">
      Integrations that move with your workflow
    </h3>
<p className="text-lg text-slate-600 font-normal">
      Connect meeting intelligence to the tools your team already uses.
    </p>
</div>
<div className="aw-integrations-marquee">
<div className="aw-integrations-track">

<div className="aw-integrations-group">
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:zoom-icon" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Zoom</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:microsoft-teams" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Teams</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:google-meet" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Google Meet</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Tasks</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:jira" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Jira</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Email</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:google-gmail" width="72"></iconify-icon>
</div>
<div className="aw-integration-name">Gmail</div>
</div>
</div>
</div>
</div>

<div className="aw-integrations-group">
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:zoom-icon" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Zoom</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:microsoft-teams" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Teams</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Video</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:google-meet" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Google Meet</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Tasks</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:jira" width="68"></iconify-icon>
</div>
<div className="aw-integration-name">Jira</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill">
<div className="aw-integration-dot"></div>
<span>Email</span>
</div>
<div className="aw-integration-logo">
<iconify-icon icon="logos:google-gmail" width="72"></iconify-icon>
</div>
<div className="aw-integration-name">Gmail</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section></div>
    </>
  );
}
