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
      

<div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fadeIn" id="practiceModal">
<div className="w-full h-full overflow-auto bg-white rounded-t-xl md:rounded-xl p-6 md:max-w-5xl md:mx-auto md:my-10 space-y-6 shadow-xl animate-slideUp" id="practiceCard">

<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Rehearsal</h2>
<button className="p-1.5 rounded-full hover:bg-neutral-100 transition" id="closeModal">
<i className="w-5 h-5 text-neutral-600" data-lucide="x"></i>
</button>
</div>

<div className="flex flex-col md:grid md:grid-cols-3 gap-6 h-[calc(100%-120px)]" id="contentGrid">

<div className="md:col-span-2 h-full" id="pdfWrapper">
<div className="rounded-lg overflow-hidden border border-neutral-200 relative h-full" id="pdfContainer">
<iframe className="w-full h-full" id="pdfViewer" src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0&amp;page=1" title="PDF Preview"></iframe>

<button className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur hover:bg-white transition border border-neutral-200 shadow-sm" id="toggleSize">
<i className="w-4 h-4 text-neutral-700" data-lucide="maximize-2"></i>
</button>
</div>
</div>

<div className="space-y-4 overflow-y-auto" id="instructionPanel">
<p className="text-xs text-neutral-600">Mr. Alvarez created this rehearsal to help you prepare for tomorrow's warm-up discussion.</p>

<div className="bg-[#ff424d]/10 rounded-md px-4 py-3 text-sm text-neutral-800 font-medium italic">
            “Try narrating the warm-up discussion using clear directions and encouraging student thinking.”
          </div>
<ul className="space-y-1 text-xs text-neutral-600">
<li className="flex gap-1"><span className="text-[#ff424d]">•</span> Speak as if students are present</li>
<li className="flex gap-1"><span className="text-[#ff424d]">•</span> Focus on tone and clarity</li>
<li className="flex gap-1"><span className="text-[#ff424d]">•</span> You can redo if needed</li>
</ul>
</div>
</div>

<div className="flex justify-center items-center gap-4 border-t border-neutral-200 pt-4">
<span className="text-xs text-neutral-500" id="timer">03:01</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 transition shadow-sm">
<i className="w-4 h-4 text-neutral-700" data-lucide="pause"></i>
</button>
<button className="px-5 py-2.5 flex items-center gap-1 rounded-md bg-[#ff424d] text-white text-sm font-medium hover:bg-[#e93a46] transition shadow">
<i className="w-4 h-4" data-lucide="stop-circle"></i>
          Stop
        </button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 transition shadow-sm">
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
