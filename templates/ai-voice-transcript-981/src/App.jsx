import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
setTimeout(function(){ if(window.lucide) window.lucide.createIcons(); }, 100);



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl z-50 shrink-0">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center shadow-sm">
<i className="w-5 h-5" data-lucide="audio-lines"></i>
</div>
<div className="">
<h1 className="text-[15px] font-semibold tracking-tight text-zinc-100">
            Speech to Text
          </h1>
<p className="text-[12px] text-zinc-500 font-medium mt-0.5">
            Studio-grade transcription
          </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-lg transition-all border border-transparent hover:border-white/10">
<i className="w-4 h-4" data-lucide="copy"></i>
          Copy
        </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-lg transition-all border border-transparent hover:border-white/10">
<i className="w-4 h-4" data-lucide="download"></i>
          Download
        </button>
</div>
</header>
<main className="flex-1 relative flex flex-col w-full overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex-1 overflow-y-auto px-8 py-16 md:py-24 flex flex-col relative z-10">
<div className="max-w-4xl mx-auto w-full flex flex-col h-full justify-center">
<div className="w-full max-w-2xl mx-auto border-2 border-dashed border-white/10 rounded-[32px] py-16 sm:py-24 px-8 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 cursor-pointer group">
<div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/40 ring-1 ring-white/10">
<svg className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
<h3 className="text-[19px] sm:text-[21px] font-medium text-zinc-100 mb-2 tracking-tight">
              Upload audio or video
            </h3>
<p className="text-[13px] sm:text-[14px] text-zinc-500 text-center max-w-sm leading-relaxed">
              Drag and drop your files here, or click to browse. Supports MP3,
              WAV, M4A, and MP4.
            </p>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[560px] px-6 z-50">
<div className="border-white/[0.08] flex bg-[#111111]/85 border rounded-full pt-2 pr-2 pb-2 pl-2 relative shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl items-center">

<div className="flex-1 flex items-center gap-3 sm:gap-5 pl-3 sm:pl-5">
<div className="flex items-center gap-2 text-white cursor-default">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
<span className="text-[13px] font-medium hidden sm:block">
                Upload
              </span>
</div>
<div className="w-px h-3 bg-white/10 hidden sm:block"></div>
<button className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group">
<span className="relative flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-600 group-hover:bg-zinc-500 transition-colors"></span>
</span>
<span className="text-[13px] font-medium hidden sm:block">Live</span>
</button>
</div>

<div className="shrink-0 px-4">
<button className="bg-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-zinc-100 hover:scale-105 hover:shadow-[0_4px_24px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center relative z-10 group">
<svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</button>
</div>

<div className="flex-1 flex items-center justify-end gap-3 sm:gap-5 pr-3 sm:pr-5">
<span className="text-zinc-500 text-[13px] font-medium tracking-wide">
              Max 2GB
            </span>
<div className="w-px h-3 bg-white/10 hidden sm:block"></div>
<button className="text-zinc-400 hover:text-white transition-colors" title="Settings">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17H5"></path>
<path d="M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
