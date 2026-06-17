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
      

<aside className="w-full md:w-80 h-full border-r border-[#D2CDBE] dark:border-[#2A2A2A] bg-[#E8E4D8] dark:bg-[#1A1A1A] flex flex-col relative shrink-0 z-10">
<div className="texture-overlay"></div>

<div className="h-16 px-4 flex items-center border-b border-[#D2CDBE] dark:border-[#2A2A2A] bg-[#DFDBCF] dark:bg-[#111] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] dark:shadow-[0_1px_0_rgba(255,255,255,0.02)_inset]">
<iconify-icon className="text-xl mr-2 text-[#5E5B54] dark:text-[#888]" icon="solar:safe-square-linear"></iconify-icon>
<div className="flex flex-col">
<span className="font-typewriter text-xs font-bold tracking-widest uppercase text-[#5E5B54] dark:text-[#999]">Registry Central</span>
<span className="text-[0.65rem] uppercase tracking-widest text-[#88857A] dark:text-[#666]">Operative Terminal</span>
</div>
</div>

<div className="flex px-2 pt-3 border-b border-[#D2CDBE] dark:border-[#2A2A2A] bg-[#DFDBCF] dark:bg-[#151515] text-xs font-medium uppercase tracking-widest text-[#5E5B54] dark:text-[#777]">
<button className="px-3 py-1.5 border border-[#D2CDBE] dark:border-[#2A2A2A] border-b-0 bg-[#F4F1E8] dark:bg-[#222] text-[#111] dark:text-[#CCC] translate-y-[1px] relative rounded-t-[2px]">
                Operators
            </button>
<button className="px-3 py-1.5 border border-transparent hover:text-[#111] dark:hover:text-[#CCC] transition-colors">
                Archives
            </button>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-2">

<div className="group relative bg-[#F4F1E8] dark:bg-[#222] border border-[#D2CDBE] dark:border-[#333] p-3 shadow-[2px_2px_0_rgba(0,0,0,0.05)] dark:shadow-[2px_2px_0_rgba(0,0,0,0.4)] cursor-pointer">
<div className="absolute top-0 left-0 w-1 h-full bg-[#8C3A35] dark:bg-[#6A2B27]"></div>
<div className="flex justify-between items-start mb-2">
<span className="font-typewriter text-xs text-[#8C3A35] dark:text-[#A64C47] font-bold">OP-04</span>
<span className="font-typewriter text-[0.65rem] px-1 border border-[#D2CDBE] dark:border-[#444] bg-[#E8E4D8] dark:bg-[#1A1A1A] uppercase">Active</span>
</div>
<h3 className="font-editorial text-sm font-semibold tracking-tight dark:text-[#E0DCD1]">Drafting Office</h3>
<p className="text-xs text-[#6B685F] dark:text-[#888] mt-1 leading-snug">Synthesizes reports, structures directives, refines copy.</p>
<div className="mt-3 flex gap-2">
<span className="flex items-center text-[0.65rem] text-[#6B685F] dark:text-[#777] uppercase tracking-wider"><iconify-icon className="mr-1" icon="solar:paperclip-linear"></iconify-icon> 2 Files</span>
</div>
</div>

<div className="group relative bg-transparent hover:bg-[#F4F1E8] dark:hover:bg-[#1E1E1E] border border-transparent hover:border-[#D2CDBE] dark:hover:border-[#333] p-3 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2 opacity-60 group-hover:opacity-100">
<span className="font-typewriter text-xs text-[#5E5B54] dark:text-[#888] font-bold">OP-01</span>
<span className="font-typewriter text-[0.65rem] px-1 border border-transparent uppercase text-[#88857A]">Standby</span>
</div>
<h3 className="font-editorial text-sm font-semibold tracking-tight text-[#5E5B54] dark:text-[#999] group-hover:text-[#111] dark:group-hover:text-[#E0DCD1]">Research Desk</h3>
<p className="text-xs text-[#88857A] dark:text-[#666] mt-1 leading-snug">Gathers external intelligence, cross-references archives.</p>
</div>

<div className="group relative bg-transparent hover:bg-[#F4F1E8] dark:hover:bg-[#1E1E1E] border border-transparent hover:border-[#D2CDBE] dark:hover:border-[#333] p-3 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2 opacity-60 group-hover:opacity-100">
<span className="font-typewriter text-xs text-[#5E5B54] dark:text-[#888] font-bold">OP-09</span>
<span className="font-typewriter text-[0.65rem] px-1 border border-transparent uppercase text-[#88857A]">Standby</span>
</div>
<h3 className="font-editorial text-sm font-semibold tracking-tight text-[#5E5B54] dark:text-[#999] group-hover:text-[#111] dark:group-hover:text-[#E0DCD1]">Records Clerk</h3>
<p className="text-xs text-[#88857A] dark:text-[#666] mt-1 leading-snug">Logs interactions, maintains state, files completed briefs.</p>
</div>
</div>

<div className="p-3 border-t border-[#D2CDBE] dark:border-[#2A2A2A] bg-[#DFDBCF] dark:bg-[#111]">
<button className="w-full py-2 border border-[#B5B0A1] dark:border-[#444] bg-[#E8E4D8] dark:bg-[#1E1E1E] hover:bg-[#D2CDBE] dark:hover:bg-[#333] font-typewriter text-xs uppercase tracking-widest font-bold shadow-[1px_1px_0_rgba(0,0,0,0.1)] dark:shadow-[1px_1px_0_rgba(0,0,0,0.5)] active:translate-y-[1px] active:shadow-none transition-all">
                Summon Operator
            </button>
</div>
</aside>

<main className="flex-1 h-full relative overflow-y-auto flex flex-col items-center p-4 md:p-8 bg-[#EAE7DF] dark:bg-[#151515]">
<div className="texture-overlay"></div>

<article className="w-full max-w-3xl bg-[#FCFAF5] dark:bg-[#1E1E1E] border border-[#D2CDBE] dark:border-[#222] shadow-[4px_4px_0_rgba(0,0,0,0.04)] dark:shadow-[4px_4px_0_rgba(0,0,0,0.3)] relative z-20 mb-8 shrink-0 flex flex-col min-h-[70vh]">

<div className="absolute top-12 right-12 z-30 pointer-events-none rotate-[-4deg] opacity-80 mix-blend-multiply dark:mix-blend-screen">
<div className="border-2 border-[#8C3A35] dark:border-[#A64C47] text-[#8C3A35] dark:text-[#A64C47] font-typewriter text-lg font-bold tracking-[0.2em] px-3 py-1 uppercase rounded-sm inline-block">
                    Routed
                </div>
</div>

<header className="border-b-2 border-[#D2CDBE] dark:border-[#333] p-6 lg:p-8 bg-[#F8F5EE] dark:bg-[#1A1A1A]">
<div className="flex justify-between items-start mb-6">
<h1 className="font-editorial text-2xl tracking-tight font-semibold text-[#111] dark:text-[#E0DCD1]">Bureau of Intelligence</h1>
<div className="text-right flex flex-col items-end">
<span className="font-typewriter text-xs uppercase tracking-widest text-[#5E5B54] dark:text-[#777]">Document ID</span>
<span className="font-typewriter text-sm font-bold mt-1 text-[#222] dark:text-[#AAA]">REF-XJ-992</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-[#D2CDBE] dark:border-[#333]">
<div className="border-r border-b border-[#D2CDBE] dark:border-[#333] p-2 flex flex-col">
<span className="font-typewriter text-[0.65rem] uppercase text-[#88857A] dark:text-[#666]">Date Filed</span>
<span className="font-typewriter text-xs font-bold mt-1 text-[#222] dark:text-[#CCC]">10-NOV-24</span>
</div>
<div className="border-r border-b border-[#D2CDBE] dark:border-[#333] p-2 flex flex-col">
<span className="font-typewriter text-[0.65rem] uppercase text-[#88857A] dark:text-[#666]">Origin</span>
<span className="font-typewriter text-xs font-bold mt-1 text-[#222] dark:text-[#CCC]">OP-04 (Drafting)</span>
</div>
<div className="border-r border-b border-[#D2CDBE] dark:border-[#333] p-2 flex flex-col col-span-2 md:col-span-2">
<span className="font-typewriter text-[0.65rem] uppercase text-[#88857A] dark:text-[#666]">Subject</span>
<span className="font-typewriter text-xs font-bold mt-1 text-[#222] dark:text-[#CCC]">Q4 Interface Strategy Memo</span>
</div>
</div>
</header>

<div className="p-6 lg:p-10 font-editorial text-base leading-relaxed text-[#2D2B28] dark:text-[#C4C0B5] flex-1">
<p className="mb-5 indent-8">
                    Pursuant to directive <span className="font-typewriter text-sm bg-[#F0EBE0] dark:bg-[#2A2A2A] px-1 border border-[#E0DAC7] dark:border-[#444]">REQ-33A</span>, this memorandum outlines the structural framework for the proposed non-linear interface environment. The consensus from the Research Desk indicates a high friction point with current conversational models (colloquially termed "chatbots").
                </p>
<p className="mb-5 indent-8">
                    We propose shifting to an artifact-centric model. Interactions should no longer be perceived as ephemeral dialogue, but rather as the active generation of filed records, blueprints, and routing slips.
                </p>
<hr className="my-8 border-t border-dashed border-[#D2CDBE] dark:border-[#444]"/>
<h2 className="font-typewriter text-sm font-bold uppercase tracking-widest text-[#111] dark:text-[#E0DCD1] mb-4">Key Directives</h2>
<ol className="list-decimal list-outside ml-5 space-y-4 font-editorial">
<li className="pl-2">
<strong className="font-semibold text-[#111] dark:text-[#E0DCD1]">Spatial Placement:</strong> Operators shall deposit output directly onto designated surface areas (sheets) rather than appending to an infinite scroll column.
                    </li>
<li className="pl-2">
<strong className="font-semibold text-[#111] dark:text-[#E0DCD1]">Physical Tooling Metaphors:</strong> System capabilities (search, execution, retrieval) will be visually encoded as mechanical attachments or stamps.
                        <div className="mt-3 flex items-center gap-3 p-3 bg-[#F4F1E8] dark:bg-[#1A1A1A] border border-[#D2CDBE] dark:border-[#333] font-typewriter text-xs">
<iconify-icon className="text-lg text-[#5E5B54] dark:text-[#888]" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-[#5E5B54] dark:text-[#888]">Attachment:</span>
<span className="font-bold underline decoration-[#D2CDBE] dark:decoration-[#444] underline-offset-4 cursor-pointer hover:text-[#111] dark:hover:text-[#FFF]">Archived_User_Studies_1955.idx</span>
</div>
</li>
</ol>
<p className="mt-8 indent-8">
                    Awaiting authorization to proceed with prototyping. If revisions are required, please append directives below and return to OP-04.
                </p>
</div>

<footer className="p-6 border-t border-[#D2CDBE] dark:border-[#333] bg-[#F8F5EE] dark:bg-[#1A1A1A] flex justify-between items-end">
<div className="flex flex-col">
<span className="font-typewriter text-[0.65rem] uppercase text-[#88857A] dark:text-[#666] mb-2">Sign-off</span>
<div className="font-editorial italic text-xl text-[#5E5B54] dark:text-[#888] border-b border-[#D2CDBE] dark:border-[#444] w-32">Drafting Desk</div>
</div>
<div className="flex gap-2">
<button className="p-2 border border-[#D2CDBE] dark:border-[#444] hover:bg-[#E8E4D8] dark:hover:bg-[#222] transition-colors text-[#5E5B54] dark:text-[#888] group">
<iconify-icon className="text-lg group-hover:text-[#111] dark:group-hover:text-[#CCC]" icon="solar:archive-linear"></iconify-icon>
</button>
<button className="px-4 py-2 border border-[#8C3A35] dark:border-[#A64C47] bg-transparent text-[#8C3A35] dark:text-[#A64C47] font-typewriter text-xs uppercase font-bold hover:bg-[#8C3A35] hover:text-[#FFF] dark:hover:bg-[#A64C47] dark:hover:text-[#FFF] transition-colors">
                        Approve &amp; File
                    </button>
</div>
</footer>
</article>

<div className="w-full max-w-3xl sticky bottom-4 z-30">
<div className="bg-[#DFDBCF] dark:bg-[#111] border border-[#B5B0A1] dark:border-[#333] shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-1">
<div className="bg-[#F4F1E8] dark:bg-[#1E1E1E] border border-[#B5B0A1] dark:border-[#222] p-3 flex flex-col gap-2 relative">
<div className="flex justify-between items-center mb-1 px-1">
<span className="font-typewriter text-[0.65rem] uppercase tracking-widest text-[#88857A] dark:text-[#666]">Append Directive to OP-04</span>
<div className="flex items-center gap-1.5 text-[0.65rem] text-[#88857A] dark:text-[#666] font-typewriter uppercase">
<span className="w-2 h-2 rounded-full bg-[#A63C31] animate-pulse"></span>
                            Awaiting Input
                        </div>
</div>
<div className="flex items-end gap-3">
<textarea className="w-full bg-transparent border-b border-dashed border-[#B5B0A1] dark:border-[#555] focus:border-solid focus:border-[#5E5B54] dark:focus:border-[#AAA] outline-none font-typewriter text-sm text-[#222] dark:text-[#E0DCD1] placeholder:text-[#A39E8F] dark:placeholder:text-[#666] resize-none py-1 px-1 overflow-hidden" placeholder="Type instructions, corrections, or dispatch commands..." rows="1"></textarea>
<button className="shrink-0 h-8 px-4 bg-[#2B2A27] dark:bg-[#D4D0C5] text-[#F4F1E8] dark:text-[#111] font-typewriter text-xs uppercase tracking-widest font-bold shadow-[2px_2px_0_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0_rgba(0,0,0,0.8)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all flex items-center gap-2">
                            Dispatch <iconify-icon className="text-sm" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
