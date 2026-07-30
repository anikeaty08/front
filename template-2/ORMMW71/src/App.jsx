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
      
    lucide.createIcons();

    particlesJS('particles-js',{
      particles:{number:{value:60},color:{value:'#00ffff'},shape:{type:'circle'},opacity:{value:.12,random:true},size:{value:3,random:true},move:{enable:true,speed:1}},
      interactivity:{events:{onhover:{enable:true,mode:'repulse'}},modes:{repulse:{distance:80,duration:.4}}},
      retina_detect:true
    });

    const score=78;
    const ctxRing=document.getElementById('healthRing');
    const gradRing=ctxRing.getContext('2d').createLinearGradient(0,0,0,400);
    gradRing.addColorStop(0,'#00ffff');gradRing.addColorStop(1,'#007bff');
    new Chart(ctxRing,{type:'doughnut',data:{datasets:[{data:[score,100-score],backgroundColor:[gradRing,'#13232f'],borderWidth:0}]},options:{cutout:'78%',plugins:{tooltip:{enabled:false}},responsive:true}});
    document.getElementById('scoreText').textContent=score;

    const wearCtx=document.getElementById('wearChart').getContext('2d');
    const wearGrad=wearCtx.createLinearGradient(0,0,0,320);
    wearGrad.addColorStop(0,'rgba(0,255,255,0.5)');wearGrad.addColorStop(1,'rgba(0,123,255,0.0)');
    new Chart(wearCtx,{type:'line',data:{labels:['Outdoors','Indoors','Workout','Sleep'],datasets:[{label:'Stress (%)',data:[75,30,55,15],tension:.4,fill:true,backgroundColor:wearGrad,borderColor:'#00ffff',pointBackgroundColor:'#00ffff',pointBorderWidth:0,pointRadius:4}]},options:{plugins:{legend:{display:false},tooltip:{backgroundColor:'#13232f',borderColor:'#00ffff',borderWidth:1}},scales:{y:{beginAtZero:true,ticks:{color:'#94a3b8'},grid:{color:'#1e293b'}},x:{ticks:{color:'#94a3b8'},grid:{display:false}}},responsive:true}});

    const phSlider=document.getElementById('phSlider'),phFill=document.getElementById('phFill'),phValue=document.getElementById('phValue');
    function updatePh(){const v=parseFloat(phSlider.value);phFill.style.width=(v/14*100)+'%';phValue.textContent=v.toFixed(1);}
    phSlider.addEventListener('input',updatePh);updatePh();

    const voiceBtn=document.getElementById('voiceBtn'),voicePulse=document.getElementById('voicePulse'),voiceLog=document.getElementById('voiceLog'),voiceStatus=document.getElementById('voiceStatus');
    let recognition,listening=false;
    if('webkitSpeechRecognition'in window||'SpeechRecognition'in window){
      const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
      recognition=new SR();recognition.continuous=true;recognition.interimResults=false;recognition.lang='en-US';
      recognition.onstart=()=>{listening=true;voiceStatus.textContent='Listening… tap to stop';voicePulse.classList.remove('opacity-0');};
      recognition.onend=()=>{listening=false;voiceStatus.textContent='Tap to start speaking';voicePulse.classList.add('opacity-0');};
      recognition.onresult=e=>{for(let i=e.resultIndex;i<e.results.length;++i)if(e.results[i].isFinal){const t=e.results[i][0].transcript.trim();const p=document.createElement('p');p.textContent=t;voiceLog.appendChild(p);voiceLog.scrollTop=voiceLog.scrollHeight;}};
      voiceBtn.addEventListener('click',()=>{listening?recognition.stop():recognition.start();});
    }else{voiceStatus.textContent='Voice recognition not supported in this browser';voiceBtn.disabled=true;voiceBtn.classList.add('opacity-40','cursor-not-allowed');}

    window.addEventListener('load',()=>['greeting','ring-section','metrics','wear-tear','skin-ph','voice-section'].forEach((id,i)=>setTimeout(()=>{const el=document.getElementById(id);el.classList.remove('opacity-0','translate-y-4');},i*200)));
  
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
      

<div className="absolute inset-0 -z-10" id="particles-js"></div>

<header className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-center backdrop-blur-md bg-[#010409]/70 border-b border-cyan-400/10">
<img alt="Brand Logo" className="h-8 lg:h-9 pointer-events-none select-none" src="logo.png" />
</header>
<main className="max-w-4xl mx-auto px-6 pt-28 pb-44 space-y-14">

<h1 className="text-3xl lg:text-4xl tracking-tight font-semibold opacity-0 translate-y-4 transition-all duration-700 delay-100" id="greeting">
      Hello Catherine<span className="text-cyan-400">,</span> how’s your skin doing today?
    </h1>

<section className="flex flex-col items-center space-y-8 opacity-0 translate-y-4 transition-all duration-700 delay-200" id="ring-section">
<div className="relative w-64 h-64">
<canvas id="healthRing"></canvas>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-[13px] uppercase text-cyan-500 tracking-widest mb-1">Skin Score</p>
<p className="text-5xl font-semibold text-cyan-200" id="scoreText">--</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-4 transition-all duration-700 delay-300" id="metrics">

<a className="group relative block overflow-hidden rounded-xl bg-[#08121c]/60 backdrop-blur-lg p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:shadow-lg active:scale-[.98]" href="sun-exposure-dashboard.html">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium tracking-tight">Sun Exposure</h3>
<i className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="sun"></i>
</div>
<p className="text-3xl font-semibold text-cyan-200">12 %</p>
<span className="absolute inset-0 pointer-events-none bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>

<a className="group relative block overflow-hidden rounded-xl bg-[#08121c]/60 backdrop-blur-lg p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:shadow-lg active:scale-[.98]" href="moisture.html">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium tracking-tight">Moisture</h3>
<i className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="droplet"></i>
</div>
<p className="text-3xl font-semibold text-cyan-200">64 %</p>
<span className="absolute inset-0 pointer-events-none bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>

<a className="group relative block overflow-hidden rounded-xl bg-[#08121c]/60 backdrop-blur-lg p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:shadow-lg active:scale-[.98]" href="pore-clarity.html">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium tracking-tight">Pore Clarity</h3>
<i className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="aperture"></i>
</div>
<p className="text-3xl font-semibold text-cyan-200">8 /10</p>
<span className="absolute inset-0 pointer-events-none bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>

<a className="group relative block overflow-hidden rounded-xl bg-[#08121c]/60 backdrop-blur-lg p-5 border border-cyan-400/20 hover:border-cyan-400/60 transition-all hover:shadow-lg active:scale-[.98]" href="anti-aging.html">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium tracking-tight">Anti-Aging</h3>
<i className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="hourglass"></i>
</div>
<p className="text-3xl font-semibold text-cyan-200">Low</p>
<span className="absolute inset-0 pointer-events-none bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
</section>

<section className="opacity-0 translate-y-4 transition-all duration-700 delay-[450ms]" id="wear-tear">
<div className="relative overflow-hidden rounded-2xl bg-[#08121c]/60 backdrop-blur-lg border border-cyan-400/20 p-6">
<div className="flex items-center mb-6">
<h2 className="text-lg font-semibold tracking-tight flex-1">Wear & Tear</h2>
<i className="w-5 h-5 text-cyan-400" data-lucide="activity"></i>
</div>
<p className="text-sm text-cyan-300 mb-4">Daily stress levels your skin experiences from common activities.</p>

<div className="relative w-full">
<canvas id="wearChart"></canvas>
</div>
</div>
</section>

<section className="opacity-0 translate-y-4 transition-all duration-700 delay-[600ms]" id="skin-ph">
<div className="relative overflow-hidden rounded-2xl bg-[#08121c]/60 backdrop-blur-lg border border-cyan-400/20 p-6">
<div className="flex items-center mb-6">
<h2 className="text-lg font-semibold tracking-tight flex-1">Skin pH Level</h2>
<i className="w-5 h-5 text-cyan-400" data-lucide="test-tube"></i>
</div>
<div className="flex items-center space-x-4 mb-6">
<p className="text-sm text-cyan-300">Neutral (7)</p>
<div className="flex-1 h-px bg-cyan-400/10"></div>
<p className="text-sm text-cyan-300">Acidic (0)</p>
</div>

<div className="space-y-4">
<div className="relative w-full">

<div className="h-2 rounded-full bg-[#13232f]">
<div className="h-2 rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-lime-300" id="phFill" style={{width: `39%`}}></div>
</div>

<input className="absolute inset-0 w-full opacity-0 cursor-pointer" id="phSlider" max="14" min="0" step="0.1" type="range" value="5.5" />
</div>
<div className="flex items-center justify-between text-sm">
<p className="text-cyan-300">0</p>
<p className="font-semibold text-cyan-200" id="phValue">5.5</p>
<p className="text-cyan-300">14</p>
</div>
</div>
</div>
</section>

<section className="opacity-0 translate-y-4 transition-all duration-700 delay-[750ms]" id="voice-section">
<div className="relative overflow-hidden rounded-2xl bg-[#08121c]/60 backdrop-blur-lg border border-cyan-400/20 p-6 space-y-6">
<div className="flex items-center mb-2">
<h2 className="text-lg font-semibold tracking-tight flex-1">what are you focused on for your skin today?</h2>
<i className="w-5 h-5 text-cyan-400" data-lucide="mic"></i>
</div>

<div className="min-h-[120px] max-h-40 overflow-y-auto rounded-lg bg-[#0d1721] p-4 text-sm text-cyan-200 space-y-3" id="voiceLog">
<p className="text-cyan-500 italic">Speak your thoughts and they’ll appear here…</p>
</div>

<div className="flex justify-center">
<button className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 transition-colors" id="voiceBtn">
<i className="w-7 h-7 text-cyan-300 group-hover:scale-110 transition-transform" data-lucide="mic"></i>
<span className="absolute inset-0 rounded-full bg-cyan-400/10 animate-ping opacity-0" id="voicePulse"></span>
</button>
</div>
<p className="text-center text-xs text-cyan-400" id="voiceStatus">Tap to start speaking</p>
</div>
</section>
</main>

<nav className="fixed bottom-0 inset-x-0 z-50 bg-[#08121c]/80 backdrop-blur-lg border-t border-cyan-400/10">
<div className="max-w-4xl mx-auto px-6">
<ul className="flex justify-between">
<li className="flex-1">
<a className="flex flex-col items-center py-4 group" href="analytics.html">
<i className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="droplet"></i>
<span className="mt-1 text-xs font-medium tracking-tight">Analytics</span>
</a>
</li>
<li className="flex-1">
<a className="flex flex-col items-center py-4 group" href="vitals.html">
<i className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="flask-conical"></i>
<span className="mt-1 text-xs font-medium tracking-tight">Vitals</span>
</a>
</li>
<li className="flex-1">
<a className="flex flex-col items-center py-4 group" href="shop.html">
<i className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" data-lucide="shopping-cart"></i>
<span className="mt-1 text-xs font-medium tracking-tight">Shop</span>
</a>
</li>
</ul>
</div>
</nav>



    </>
  );
}
