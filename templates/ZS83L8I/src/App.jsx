import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({attrs:{class:'stroke-[1.5]'}});
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('practiceModal').classList.add('hidden');
    });

    const pdfWrapper = document.getElementById('pdfWrapper');
    const instructionPanel = document.getElementById('instructionPanel');
    const toggleBtn = document.getElementById('toggleSize');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      if (expanded) {
        pdfWrapper.classList.remove('md:col-span-2');
        pdfWrapper.classList.add('md:col-span-3');
        instructionPanel.classList.add('hidden');
        toggleBtn.querySelector('svg').setAttribute('data-lucide','minimize-2');
      } else {
        pdfWrapper.classList.add('md:col-span-2');
        pdfWrapper.classList.remove('md:col-span-3');
        instructionPanel.classList.remove('hidden');
        toggleBtn.querySelector('svg').setAttribute('data-lucide','maximize-2');
      }
      lucide.createIcons({attrs:{class:'stroke-[1.5]'}});
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn" id="practiceModal">
<div className="w-full h-full overflow-auto bg-white p-5 space-y-5 animate-slideUp" id="practiceCard">

<div className="flex items-center justify-between">
<h2 className="text-lg font-medium">Rehearsal</h2>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<span id="timer">03:01</span>
<button className="text-neutral-400 hover:text-neutral-600" id="closeModal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-3 gap-5 h-[calc(100%-100px)]" id="contentGrid">

<div className="md:col-span-2 h-full" id="pdfWrapper">
<div className="rounded-lg overflow-hidden border border-neutral-200 relative h-full" id="pdfContainer">
<iframe className="w-full h-full" id="pdfViewer" src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0&amp;page=1" title="PDF Preview"></iframe>

<button className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-md bg-white/80 backdrop-blur hover:bg-white shadow border border-neutral-200" id="toggleSize">
<i className="w-4 h-4 text-neutral-700" data-lucide="maximize-2"></i>
</button>
</div>
</div>

<div className="space-y-3 overflow-y-auto" id="instructionPanel">
<p className="text-xs text-neutral-600">Mr. Alvarez created this rehearsal to help you prepare for tomorrow's warm-up discussion.</p>

<div className="bg-[#ff385c]/10 rounded-md px-4 py-3 text-sm text-neutral-800 font-medium italic shadow-sm">
            “Try narrating the warm-up discussion using clear directions and encouraging student thinking.”
          </div>
<ul className="space-y-1 text-xs text-neutral-600">
<li className="flex gap-1"><span className="text-[#FF385C]">•</span> Speak as if students are present</li>
<li className="flex gap-1"><span className="text-[#FF385C]">•</span> Focus on tone and clarity</li>
<li className="flex gap-1"><span className="text-[#FF385C]">•</span> You can redo if needed</li>
</ul>
</div>
</div>

<div className="flex justify-center gap-3 border-t border-neutral-200 pt-3 pb-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm">
<i className="w-4 h-4 text-neutral-700" data-lucide="pause"></i>
</button>
<button className="px-4 py-2 flex items-center gap-1 rounded-md bg-[#FF385C] text-white text-sm hover:bg-[#e03153] shadow">
<i className="w-4 h-4" data-lucide="stop-circle"></i>
          Stop
        </button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm">
<i className="w-4 h-4 text-neutral-700" data-lucide="refresh-ccw"></i>
</button>
</div>
</div>
</div>

<style>
    @keyframes fadeIn {from{opacity:0}to{opacity:1}}
    @keyframes slideUp {from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
    .animate-fadeIn{animation:fadeIn .3s ease-out forwards}
    .animate-slideUp{animation:slideUp .3s .05s ease-out forwards}
  </style>

    </>
  );
}
