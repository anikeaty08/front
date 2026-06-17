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



    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');
    const paragraphCount = document.getElementById('paragraph-count');
    const sentenceCount = document.getElementById('sentence-count');
    const readTime = document.getElementById('read-time');
    const charProgress = document.getElementById('char-progress');
    const wordProgress = document.getElementById('word-progress');
    const charLimitDisplay = document.getElementById('char-limit');
    const wordLimitDisplay = document.getElementById('word-limit');
    const charLimitInput = document.getElementById('char-limit-input');
    const wordLimitInput = document.getElementById('word-limit-input');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    function updateCounts() {
      const text = textInput.value;
      const chars = text.length;
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const paragraphs = text.trim() === '' ? 0 : text.trim().split(/
+/).filter(p => p.trim() !== '').length;
      const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim() !== '').length;
      const minutes = Math.ceil(words / 200); // Average reading speed
      
      const charLimit = parseInt(charLimitDisplay.textContent);
      const wordLimit = parseInt(wordLimitDisplay.textContent);
      
      charCount.textContent = chars;
      wordCount.textContent = words;
      paragraphCount.textContent = paragraphs;
      sentenceCount.textContent = sentences;
      readTime.textContent = minutes < 1 ? `${Math.ceil(words / (200/60))} sec` : `${minutes} min`;
      
      // Update progress bars
      const charPercentage = Math.min(100, (chars / charLimit) * 100);
      const wordPercentage = Math.min(100, (words / wordLimit) * 100);
      
      charProgress.style.width = `${charPercentage}%`;
      wordProgress.style.width = `${wordPercentage}%`;
      
      // Change color when approaching limit
      if (charPercentage >= 90) {
        charProgress.classList.remove('bg-indigo-500');
        charProgress.classList.add('bg-amber-500');
      } else {
        charProgress.classList.remove('bg-amber-500');
        charProgress.classList.add('bg-indigo-500');
      }
      
      if (wordPercentage >= 90) {
        wordProgress.classList.remove('bg-indigo-500');
        wordProgress.classList.add('bg-amber-500');
      } else {
        wordProgress.classList.remove('bg-amber-500');
        wordProgress.classList.add('bg-indigo-500');
      }
      
      // Change to red when exceeding limit
      if (chars > charLimit || words > wordLimit) {
        if (chars > charLimit) {
          charProgress.classList.remove('bg-amber-500', 'bg-indigo-500');
          charProgress.classList.add('bg-red-500');
        }
        
        if (words > wordLimit) {
          wordProgress.classList.remove('bg-amber-500', 'bg-indigo-500');
          wordProgress.classList.add('bg-red-500');
        }
      }
    }
    
    textInput.addEventListener('input', updateCounts);
    
    charLimitInput.addEventListener('change', function() {
      charLimitDisplay.textContent = this.value;
      updateCounts();
    });
    
    wordLimitInput.addEventListener('change', function() {
      wordLimitDisplay.textContent = this.value;
      updateCounts();
    });
    
    clearBtn.addEventListener('click', function() {
      textInput.value = '';
      updateCounts();
    });
    
    copyBtn.addEventListener('click', function() {
      textInput.select();
      document.execCommand('copy');
      
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.textContent = 'Copy Text';
      }, 2000);
    });
    
    // Initialize
    updateCounts();
  
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
      
<div className="w-80 bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium">Character Counter</h3>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-4">
<div className="mb-3">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="text-input">Enter your text</label>
<textarea className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="text-input" placeholder="Start typing here..." rows="5"></textarea>
</div>

<div className="grid grid-cols-2 gap-2 mb-4">
<div className="bg-zinc-800/50 p-3 rounded-md">
<div className="text-[10px] text-zinc-400 mb-1">Characters</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium" id="char-count">0</span>
<span className="text-xs text-zinc-500">/ <span id="char-limit">280</span></span>
</div>
<div className="mt-2 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" id="char-progress" style={{width: '0%'}}></div>
</div>
</div>
<div className="bg-zinc-800/50 p-3 rounded-md">
<div className="text-[10px] text-zinc-400 mb-1">Words</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium" id="word-count">0</span>
<span className="text-xs text-zinc-500">/ <span id="word-limit">50</span></span>
</div>
<div className="mt-2 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" id="word-progress" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-4">
<div className="bg-zinc-800/30 p-2 rounded-md">
<div className="text-[10px] text-zinc-400 mb-1">Paragraphs</div>
<div className="text-xs font-medium" id="paragraph-count">0</div>
</div>
<div className="bg-zinc-800/30 p-2 rounded-md">
<div className="text-[10px] text-zinc-400 mb-1">Sentences</div>
<div className="text-xs font-medium" id="sentence-count">0</div>
</div>
<div className="bg-zinc-800/30 p-2 rounded-md">
<div className="text-[10px] text-zinc-400 mb-1">Read time</div>
<div className="text-xs font-medium" id="read-time">0 sec</div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<label className="text-xs text-zinc-400">Character limit</label>
<input className="w-16 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="char-limit-input" type="number" value="280"/>
</div>
<div className="flex justify-between items-center">
<label className="text-xs text-zinc-400">Word limit</label>
<input className="w-16 bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="word-limit-input" type="number" value="50"/>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors" id="copy-btn">Copy Text</button>
</div>

<div className="p-3 border-t border-zinc-800 flex justify-between items-center">
<button className="text-xs text-zinc-400 hover:text-zinc-300" id="clear-btn">Clear</button>
<button className="text-xs text-indigo-400 hover:text-indigo-300" id="save-btn">Save as Draft</button>
</div>
</div>


    </>
  );
}
