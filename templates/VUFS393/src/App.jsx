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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.DOTS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8a5cf7,
        color2: 0x14b8a6,
        backgroundColor: 0xf3f4f6,
        size: 2.8,
        spacing: 22,
        showLines: true,
        points: 13,
        maxDistance: 22
      });

      // Modal logic
      const demoBtn = document.getElementById('demoBtn');
      const demoModal = document.getElementById('demoModal');
      const closeModal = document.getElementById('closeModal');
      const generateBtn = document.getElementById('generateBtn');
      const aiOutput = document.getElementById('aiOutput');
      const promptInput = document.getElementById('prompt');

      demoBtn.addEventListener('click', () => {
        demoModal.classList.remove('hidden');
        setTimeout(() => {
          promptInput.focus();
        }, 100);
      });

      closeModal.addEventListener('click', () => {
        demoModal.classList.add('hidden');
        aiOutput.innerHTML = '<span class="text-neutral-400 italic">AI output will appear here.</span>';
        promptInput.value = '';
      });

      // Close modal when clicking outside content
      demoModal.addEventListener('mousedown', (e) => {
        if (e.target === demoModal) {
          demoModal.classList.add('hidden');
          aiOutput.innerHTML = '<span class="text-neutral-400 italic">AI output will appear here.</span>';
          promptInput.value = '';
        }
      });

      // Demo AI output
      generateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const prompt = promptInput.value.trim();
        if (!prompt) {
          aiOutput.innerHTML = '<span class="text-red-400">Please enter a prompt.</span>';
          return;
        }
        aiOutput.innerHTML = '<span class="text-neutral-400 italic">Generating...</span>';
        setTimeout(() => {
          aiOutput.innerHTML = `
            <strong>Prompt:</strong> ${prompt}<br>
            <strong>AI Response:</strong> <span class="text-neutral-800">
            ${getSampleResponse(prompt)}
            </span>
          `;
        }, 800);
      });

      function getSampleResponse(prompt) {
        // Basic mockup for demonstration
        if (/trend|latest|news/i.test(prompt)) {
          return "The latest AI trends include generative models, edge computing, explainable AI, and rapid advancements in multimodal understanding.";
        } else if (/summarize|summary/i.test(prompt)) {
          return "Sure! Artificial intelligence is evolving rapidly, impacting industries with automation, language models, and intelligent perception.";
        } else if (/vision|image/i.test(prompt)) {
          return "Vision-Edge nodes enable real-time image analysis at the edge, enhancing privacy and reducing latency for vision applications.";
        } else {
          return "Here's an example response from the AI network. For more advanced capabilities, integrate with the full API.";
        }
      }
    });
  
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
      
<div className="absolute inset-0" id="vanta-bg"></div>
<main className="relative z-10 flex w-full h-screen items-center justify-center">
<div className="max-w-2xl mx-auto w-full px-6">
<div className="relative rounded-3xl border border-neutral-200 bg-white/60 backdrop-blur-xl shadow-xl py-16 px-8 flex flex-col items-center text-center space-y-8">

<div>
<h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 drop-shadow-sm">
            AI Network
          </h1>
<p className="mt-4 text-lg text-neutral-600 font-medium">
            Interactive 3D visualization of distributed artificial intelligence
          </p>
</div>

<div className="flex justify-center gap-6">
<div className="flex items-center text-sm text-neutral-700">
<span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
            Core Model
          </div>
<div className="flex items-center text-sm text-neutral-700">
<span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
            Edge Node
          </div>
</div>

<div className="flex justify-center gap-12 mt-2">
<div>
<p className="text-base font-semibold text-neutral-900">LLM-01</p>
<p className="text-xs text-neutral-500">Central AI Core</p>
</div>
<div>
<p className="text-base font-semibold text-neutral-900">Vision-Edge</p>
<p className="text-xs text-neutral-500">Perception Node</p>
</div>
</div>

<p className="text-neutral-600 text-base max-w-lg">
          Our AI network connects powerful core models with distributed edge intelligence, enabling real-time data processing, adaptive learning, and seamless collaboration across industries.
        </p>

<div className="flex gap-4 mt-2">
<button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition focus:outline-none" id="demoBtn">Try AI Demo</button>
<a className="px-6 py-3 bg-white/70 border border-neutral-200 text-neutral-800 font-semibold rounded-xl shadow hover:bg-neutral-200 transition" href="#">Learn More</a>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm hidden" id="demoModal">

<div className="relative max-w-xl w-full mx-4 bg-white/80 border border-neutral-200 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center space-y-8 backdrop-blur-2xl">

<button aria-label="Back" className="absolute top-5 left-5 text-neutral-700 hover:bg-neutral-200 rounded-full p-2 transition" id="closeModal">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<h2 className="text-3xl font-bold text-neutral-900">AI Demo</h2>
<p className="text-neutral-600 mb-2 text-center max-w-lg">
        Experience the AI network in action. Submit a prompt and see a sample response generated by the distributed intelligence system.
      </p>

<form className="w-full flex flex-col items-center space-y-4" onsubmit="return false;">
<label className="text-sm font-medium text-neutral-700 self-start mb-1" htmlFor="prompt">Your Prompt</label>
<input autocomplete="off" className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/80 text-neutral-900 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow transition text-base" id="prompt" placeholder="e.g. Summarize the latest AI trends" type="text"/>
<button className="w-full mt-2 px-4 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition focus:outline-none" id="generateBtn" type="submit">
          Generate
        </button>
</form>

<div className="w-full mt-2 bg-white/70 border border-neutral-200 rounded-xl px-4 py-4 text-neutral-800 shadow-inner text-base min-h-[56px] transition" id="aiOutput">
<span className="text-neutral-400 italic">AI output will appear here.</span>
</div>

<div className="mt-2 text-xs text-neutral-400 text-center">
        Powered by LLM-01 (Core) &amp; Vision-Edge nodes. Response time: &lt;1s.
      </div>
</div>
</div>


    </>
  );
}
