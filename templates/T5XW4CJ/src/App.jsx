import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    const progressBar = document.getElementById('progressBar');
    const steps = [
      { el: document.getElementById('step1'), threshold: 34 },
      { el: document.getElementById('step2'), threshold: 67 },
      { el: document.getElementById('step3'), threshold: 100 }
    ];

    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;                 // 1 % every 100 ms → 10 s total
      progressBar.style.width = progress + '%';

      steps.forEach(step => {
        if (progress >= step.threshold && step.el.classList.contains('opacity-0')) {
          step.el.classList.remove('opacity-0', 'translate-y-2');
          step.el.classList.add('opacity-100', 'translate-y-0');
        }
      });

      if (progress >= 100) clearInterval(interval);
    }, 100);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 flex flex-col items-center gap-6">

<div className="w-14 h-14 bg-[#1888FF]/10 flex items-center justify-center rounded-full">
<i aria-hidden="true" className="w-7 h-7 text-[#1888FF]" data-lucide="shield-check"></i>
</div>

<h1 className="text-2xl tracking-tight font-semibold text-center">
      Processing your request
    </h1>

<p className="text-sm leading-relaxed text-center max-w-xs">
      We’re running a few checks to personalize your offer. This will only take a moment—please keep this window open.
    </p>

<div aria-hidden="true" className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-[#1888FF] transition-all duration-100 ease-linear" id="progressBar" style={{width: '0%'}}></div>
</div>

<div className="w-full flex items-start justify-between pt-2">

<div className="flex flex-col items-center gap-2 opacity-0 translate-y-2 transform-gpu transition-all duration-500 ease-out" id="step1">
<div className="w-10 h-10 bg-[#1888FF]/10 flex items-center justify-center rounded-full">
<i aria-label="Verifying data" className="w-5 h-5 text-[#1888FF]" data-lucide="file-text"></i>
</div>
<span className="text-xs font-medium text-center w-20 leading-tight">Verifying data</span>
</div>

<div className="flex flex-col items-center gap-2 opacity-0 translate-y-2 transform-gpu transition-all duration-500 ease-out" id="step2">
<div className="w-10 h-10 bg-[#1888FF]/10 flex items-center justify-center rounded-full">
<i aria-label="Finding best option" className="w-5 h-5 text-[#1888FF]" data-lucide="search"></i>
</div>
<span className="text-xs font-medium text-center w-20 leading-tight">Finding best option</span>
</div>

<div className="flex flex-col items-center gap-2 opacity-0 translate-y-2 transform-gpu transition-all duration-500 ease-out" id="step3">
<div className="w-10 h-10 bg-[#1888FF]/10 flex items-center justify-center rounded-full">
<i aria-label="Generating offer" className="w-5 h-5 text-[#1888FF]" data-lucide="check-circle"></i>
</div>
<span className="text-xs font-medium text-center w-20 leading-tight">Generating offer</span>
</div>
</div>

<hr className="w-full border-gray-200"/>

<p className="text-xs text-gray-500 text-center max-w-xs">
      Please don’t refresh or close this tab—your personalized options will appear automatically.
    </p>
</div>


    </>
  );
}
