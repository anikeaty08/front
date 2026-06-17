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



    // Particle Background
    particlesJS('particles-js', {
      particles: { number: { value: 60 }, color: { value: "#00ff88" }, size: { value: 2 }, move: { speed: 0.4 } },
      interactivity: { events: { onhover: { enable: false } } }, retina_detect: true
    });

    // Lucide Icons
    lucide.createIcons();

    // Stakeholder Value Ring
    const ctx = document.getElementById('stakeCanvas');
    new Chart(ctx, {
      type: 'doughnut',
      data: { datasets: [{ data: [92, 8], backgroundColor: ['#00ff88', '#1a1a1a'], borderWidth: 0 }] },
      options: { cutout: '70%', responsive: false, plugins: { tooltip: { enabled: false } } }
    });

    // Constitutional Modal
    const aiMonitor = document.getElementById('aiMonitor');
    const modal = document.getElementById('constitutionModal');
    aiMonitor.addEventListener('click', () => modal.classList.remove('opacity-0', 'pointer-events-none'));
    document.getElementById('closeModal').onclick = document.getElementById('dismissModal').onclick = () =>
      modal.classList.add('opacity-0', 'pointer-events-none');

    // Fake Agents
    const agentNames = ['Research', 'Writer', 'Analyst', 'Planner', 'Designer', 'Debugger'];
    const agentBar = document.getElementById('agentBar');
    agentNames.slice(0, 4).forEach((name, i) => {
      const n = agentBar.previousElementSibling.content.cloneNode(true);
      n.querySelector('span').textContent = name;
      setTimeout(() => agentBar.appendChild(n), i * 400);
    });

    // Circadian Indicator
    const circText = document.getElementById('circText');
    const hour = new Date().getHours();
    circText.textContent = hour < 12 ? 'Morning Focus' : hour < 18 ? 'Afternoon Groove' : 'Evening Wind-down';
    lucide.createIcons();

    // Persona Slider
    const slider = document.getElementById('personaSlider');
    slider.oninput = () => showToast(['Explorer Mode', 'Orchestrator Mode', 'Architect Mode'][slider.value - 1]);

    // Universal Input – Suggestions
    const suggestions = ['Summarize latest ML news', 'Draft email to team', 'Generate market report'];
    const sugContainer = document.getElementById('suggestions');
    suggestions.forEach((s, i) => {
      const bubble = document.createElement('div');
      bubble.textContent = s;
      bubble.className = `absolute text-xs bg-white/10 px-2 py-1 rounded-full backdrop-blur-md animate-fadeIn pointer-events-none`;
      const angle = (i / suggestions.length) * Math.PI * 2;
      const radius = 140;
      bubble.style.left = `${120 + Math.cos(angle) * radius}px`;
      bubble.style.top = `${120 + Math.sin(angle) * radius}px`;
      bubble.style.opacity = 0;
      bubble.style.animation = `fadeIn 0.8s ${1 + i * 0.3}s forwards`;
      sugContainer.appendChild(bubble);
    });

    // Modality Switcher
    document.querySelectorAll('#modalitySwitcher [data-mode]').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#modalitySwitcher [data-mode]').forEach(b => b.classList.replace('bg-[#00ff88]/20', 'bg-[#00ff88]/10'));
        btn.classList.replace('bg-[#00ff88]/10', 'bg-[#00ff88]/20');
        document.getElementById('modePreview').textContent = btn.dataset.mode.charAt(0).toUpperCase() + btn.dataset.mode.slice(1) + ' mode active';
      };
    });

    // Semantic Search
    const search = document.getElementById('semanticSearch');
    const results = document.getElementById('searchResults');
    const fakeContexts = ['Data Visualization', 'Code Refactoring', 'User Interviews', 'Growth Analytics'];
    search.oninput = () => {
      const q = search.value.toLowerCase();
      results.innerHTML = '';
      if (!q) { results.classList.add('hidden'); return; }
      fakeContexts.filter(c => c.toLowerCase().includes(q)).forEach(c => {
        const div = document.createElement('div');
        div.className = 'px-4 py-2 hover:bg-white/5 cursor-pointer text-sm';
        div.textContent = c;
        div.onclick = () => { showToast(`Activated "${c}" context`); search.value = ''; results.classList.add('hidden'); };
        results.appendChild(div);
      });
      results.classList.remove('hidden');
    };

    // Toast Helper
    function showToast(text) {
      const t = document.getElementById('toast');
      t.textContent = text;
      t.classList.remove('opacity-0');
      setTimeout(() => t.classList.add('opacity-0'), 2000);
    }

    // Keyframe Injection (inline <style> not allowed) – createStyle util
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn { to { opacity: 1; transform: translateY(-4px); } }
      .animate-fadeIn { animation: fadeIn 0.6s forwards; }
      @keyframes spin-slow { 0% { transform: rotate(0) } 100% { transform: rotate(360deg) } }
      .animate-spin-slow { animation: spin-slow 4s linear infinite; }
    `;
    document.head.appendChild(style);
  
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
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>

<div className="fixed top-4 right-4 w-[280px] h-[140px] bg-black/90 rounded-xl backdrop-blur-md border border-white/10 p-3 flex flex-col justify-between group transition-all duration-200 hover:scale-105 cursor-pointer" id="aiMonitor">
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2">
<span className="w-2.5 h-2.5 bg-[#00ff88] rounded-full animate-ping"></span>
        LLM Reasoning
      </span>
<span className="opacity-0 group-hover:opacity-80 text-xs">AI actively inferring</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00ff88] animate-spin-slow" data-lucide="activity"></i>
        Emergent Structure
      </span>
<span className="opacity-0 group-hover:opacity-80 text-xs">Dynamic knowledge flow</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2">
<canvas height="24" id="stakeCanvas" width="24"></canvas>
        Stakeholder Value
      </span>
<span className="opacity-0 group-hover:opacity-80 text-xs">Impact ≈ 92 %</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00ff88]" data-lucide="share-2"></i>
        Systems Thinking
      </span>
<span className="opacity-0 group-hover:opacity-80 text-xs">Inter-agent balance</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-[#00ff88]" data-lucide="shield-check"></i>
        Bootstrap Sovereignty
      </span>
<span className="opacity-0 group-hover:opacity-80 text-xs">Self-governance intact</span>
</div>
</div>

<div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="constitutionModal">
<div className="bg-[#0d0d0d] w-full max-w-lg rounded-2xl p-8 border border-white/10">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold">Constitutional Framework</h2>
<button className="p-2 rounded hover:bg-white/10" id="closeModal"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<p className="leading-relaxed text-sm opacity-80 mb-6">
        This framework ensures every intelligent action aligns with the five guiding principles...
      </p>
<button className="w-full py-2 bg-[#00ff88]/20 hover:bg-[#00ff88]/30 rounded-lg" id="dismissModal">Understood</button>
</div>
</div>

<div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
<template id="agentTemplate">
<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-inner">
<i className="w-4 h-4 text-[#ffd700] animate-pulse" data-lucide="bot"></i>
<span className="text-sm">Agent</span>
</div>
</template>
<div className="flex items-center gap-2" id="agentBar"></div>
</div>

<div className="fixed bottom-4 left-4 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs flex items-center gap-2" id="circadian">
<i className="w-4 h-4" data-lucide="sun"></i><span id="circText">Morning Focus</span>
</div>

<div className="absolute top-[120px] flex w-full justify-center px-4">
<div className="relative w-full max-w-xl">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" data-lucide="search"></i>
<input className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 focus:ring-2 focus:ring-[#00ff88]/50 outline-none transition shadow-inner" id="semanticSearch" placeholder="Search intelligence contexts…" type="text"/>
<div className="absolute w-full mt-2 rounded-xl bg-black/90 border border-white/10 backdrop-blur-md hidden" id="searchResults"></div>
</div>
</div>

<div className="flex items-center justify-center min-h-screen pointer-events-none">
<div className="relative w-[240px] h-[240px] rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105 pointer-events-auto" id="universalInput">
<input className="bg-transparent text-center w-4/5 text-lg focus:outline-none placeholder-white/40 mb-4" id="nlInput" placeholder="What do you want?" type="text"/>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffd700]/20 hover:bg-[#ffd700]/30 transition" id="voiceBtn">
<i className="w-5 h-5 text-[#ffd700]" data-lucide="mic"></i>
</button>

<div className="absolute inset-0 pointer-events-none" id="suggestions"></div>
</div>
</div>

<div className="fixed md:bottom-4 bottom-20 right-1/2 translate-x-1/2 flex flex-col items-center gap-2">
<input className="w-56 accent-[#00ff88]" id="personaSlider" max="3" min="1" type="range" value="1"/>
<div className="flex gap-3 text-xs">
<span>Explorer</span><span>Orchestrator</span><span>Architect</span>
</div>
</div>

<div className="fixed bottom-4 right-4 w-[280px] h-[200px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-between" id="modalitySwitcher">
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-[#00ff88]/20 hover:bg-[#00ff88]/30 transition" data-mode="text">Text</button>
<button className="flex-1 py-2 rounded-lg bg-[#00ff88]/10 hover:bg-[#00ff88]/20 transition" data-mode="voice">Voice</button>
<button className="flex-1 py-2 rounded-lg bg-[#00ff88]/10 hover:bg-[#00ff88]/20 transition" data-mode="gesture">Gesture</button>
</div>
<div className="flex-1 flex items-center justify-center text-sm opacity-60" id="modePreview">
      Waiting…
    </div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm opacity-0 pointer-events-none transition" id="toast"></div>



    </>
  );
}
