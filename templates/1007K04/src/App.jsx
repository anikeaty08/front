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



document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  /* Drawer */
  const drawer      = document.getElementById('drawer');
  const menuBtn     = document.getElementById('menuBtn');
  const closeDrawer = document.getElementById('closeDrawer');
  const toggleDrawer = (show) => drawer.style.transform = show ? 'translateX(0)' : 'translateX(-100%)';
  menuBtn.onclick       = () => toggleDrawer(true);
  closeDrawer.onclick   = () => toggleDrawer(false);
  drawer.addEventListener('click', e => e.target===drawer && toggleDrawer(false));

  /* DOM refs */
  const piano     = document.getElementById('piano');
  const octaveSel = document.getElementById('octave');
  const waveSel   = document.getElementById('wave');
  const volRange  = document.getElementById('vol');
  const susRange  = document.getElementById('sus');
  const toggleLbl = document.getElementById('toggleLabels');
  const recordBtn = document.getElementById('record');
  const playBtn   = document.getElementById('play');
  const octDisp   = document.getElementById('octDisp');
  const noteDisp  = document.getElementById('noteDisp');
  const volVal    = document.getElementById('volVal');
  const susVal    = document.getElementById('susVal');

  /* Audio */
  const ctx = new (window.AudioContext||window.webkitAudioContext)();
  let octave = 4, wave = 'sine', volume = 0.3, sustain = 0.5, showLabels = true;

  /* Recording */
  let isRec=false, recStart=0, recNotes=[];

  /* Frequencies */
  const base = {C:261.63,'C#':277.18,D:293.66,'D#':311.13,E:329.63,F:349.23,'F#':369.99,G:392,'G#':415.3,A:440,'A#':466.16,B:493.88};
  const whites=['C','D','E','F','G','A','B'], blacks=['C#','D#','F#','G#','A#'], blackPos=[3,5,10,12,14];

  const freq=(n,o)=>base[n]*2**(o-4);

  /* Build Keys */
  const build=()=>{
    piano.innerHTML='';
    whites.forEach((n,i)=>{
      const key=document.createElement('div');
      key.className='white relative w-16 xs:w-14 sm:w-20 h-44 sm:h-56 bg-white border border-neutral-300 mr-0.5 flex items-end justify-center text-neutral-500 select-none active:bg-neutral-200';
      key.dataset.note=n;
      if(showLabels) key.textContent=n+octave;
      piano.appendChild(key);
    });
    const extra=document.createElement('div');
    extra.className='white relative w-16 xs:w-14 sm:w-20 h-44 sm:h-56 bg-white border border-neutral-300 mr-0.5 flex items-end justify-center text-neutral-500 select-none active:bg-neutral-200';
    extra.dataset.note='C'; extra.dataset.next='1';
    if(showLabels) extra.textContent='C'+(octave+1);
    piano.appendChild(extra);

    /* Black Keys */
    blacks.forEach((n,i)=>{
      const key=document.createElement('div');
      key.className='black absolute top-0 w-10 xs:w-8 sm:w-12 h-28 sm:h-40 bg-neutral-800 rounded-b-lg -translate-x-1/2 flex items-end justify-center text-xs text-neutral-300 select-none active:bg-neutral-700';
      key.style.left=`${blackPos[i]*4}%`;
      key.dataset.note=n;
      if(showLabels) key.textContent=n+octave;
      piano.appendChild(key);
    });

    /* Events */
    [...piano.querySelectorAll('.white,.black')].forEach(k=>{
      const play=(e)=>{
        e.preventDefault();
        const n=k.dataset.note, next=k.dataset.next; 
        const o=next?octave+1:octave;
        const f=freq(n,o);
        k.classList.add('ring-2','ring-indigo-500');
        playTone(f,sustain);
        noteDisp.textContent=n+o;
        if(isRec){
          recNotes.push({n,o,t:(Date.now()-recStart)/1000,d:sustain});
        }
      };
      const end=()=>k.classList.remove('ring-2','ring-indigo-500');
      k.onmousedown=play; k.ontouchstart=play;
      k.onmouseup=end; k.onmouseleave=end; k.ontouchend=end;
    });
  };

  /* Play Tone */
  const playTone=(f,d)=>{
    const osc=ctx.createOscillator(), gain=ctx.createGain();
    osc.type=wave; osc.frequency.value=f;
    gain.gain.setValueAtTime(volume,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+d);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime+d);
  };

  /* Controls */
  octaveSel.onchange=e=>{octave=+e.target.value;octDisp.textContent='Octave '+octave;build();};
  waveSel.onchange=e=>wave=e.target.value;
  volRange.oninput=e=>{volume=e.target.value/100;volVal.textContent=e.target.value+'%';};
  susRange.oninput=e=>{sustain=e.target.value/100;susVal.textContent=sustain.toFixed(1)+'s';};
  toggleLbl.onchange=e=>{showLabels=e.target.checked;build();};

  /* Record */
  recordBtn.onclick=()=>{
    if(!isRec){
      isRec=true; recNotes=[]; recStart=Date.now();
      recordBtn.textContent='Stop'; recordBtn.classList.replace('bg-indigo-600','bg-red-600');
      playBtn.disabled=true;
    }else{
      isRec=false; recordBtn.textContent='Record';
      recordBtn.classList.replace('bg-red-600','bg-indigo-600');
      playBtn.disabled=false;
    }
  };

  /* Playback */
  playBtn.onclick=()=>{
    if(!recNotes.length) return;
    playBtn.disabled=true; recordBtn.disabled=true;
    recNotes.forEach(r=>{
      setTimeout(()=>{
        const f=freq(r.n,r.o); playTone(f,r.d);
        const selector=r.o>octave?'.white[data-note="C"][data-next="1"]':`[data-note="${r.n}"]`;
        const key=piano.querySelector(selector);
        if(key){ key.classList.add('ring-2','ring-indigo-500');
          setTimeout(()=>key.classList.remove('ring-2','ring-indigo-500'),r.d*1000);}
        noteDisp.textContent=r.n+r.o;
      },r.t*1000);
    });
    const total=recNotes[recNotes.length-1].t+recNotes[recNotes.length-1].d;
    setTimeout(()=>{playBtn.disabled=false;recordBtn.disabled=false;noteDisp.textContent='—';},total*1000+100);
  };

  build();
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
      

<button className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur shadow border border-neutral-200 rounded-md p-2" id="menuBtn">
<i className="w-6 h-6 text-neutral-700" data-lucide="menu"></i>
</button>

<aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl border-r border-neutral-200 transform -translate-x-full transition-transform duration-300 z-40 overflow-y-auto" id="drawer">
<div className="px-6 py-5 flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Settings</h2>
<button className="text-neutral-500 hover:text-neutral-800" id="closeDrawer">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<hr className="border-neutral-200"/>
<form className="px-6 py-4 space-y-6">

<div>
<label className="block text-sm font-medium mb-1" htmlFor="octave">Octave</label>
<select className="w-full rounded-md border-neutral-300 bg-neutral-50 p-2 focus:border-indigo-500 focus:ring-0" id="octave">
<option>1</option><option>2</option><option>3</option>
<option selected="">4</option><option>5</option><option>6</option><option>7</option>
</select>
</div>

<div>
<label className="block text-sm font-medium mb-1" htmlFor="wave">Waveform</label>
<select className="w-full rounded-md border-neutral-300 bg-neutral-50 p-2 focus:border-indigo-500 focus:ring-0" id="wave">
<option>sine</option><option>square</option><option>sawtooth</option><option>triangle</option>
</select>
</div>

<div className="flex items-center justify-between">
<span className="text-sm font-medium">Note Labels</span>
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="toggleLabels" type="checkbox"/>
<span className="w-10 h-5 bg-neutral-300 rounded-full peer-checked:bg-indigo-600 relative transition">
<span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-5"></span>
</span>
</label>
</div>

<div>
<label className="block text-sm font-medium mb-1">Volume <span className="font-semibold" id="volVal">30%</span></label>
<input className="w-full accent-indigo-600" id="vol" max="100" min="0" type="range" value="30"/>
</div>

<div>
<label className="block text-sm font-medium mb-1">Sustain <span className="font-semibold" id="susVal">0.5s</span></label>
<input className="w-full accent-indigo-600" id="sus" max="200" min="10" type="range" value="50"/>
</div>

<div className="flex gap-2 pt-2">
<button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 text-sm font-semibold" id="record" type="button">Record</button>
<button className="flex-1 bg-neutral-300 text-neutral-600 rounded-md py-2 text-sm font-semibold" disabled="" id="play" type="button">Play</button>
</div>
</form>
</aside>

<div className="flex items-center gap-3 mb-4 mt-16 sm:mt-4">
<span className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm font-semibold" id="octDisp">Octave 4</span>
<span className="px-3 py-1 bg-neutral-800 text-white rounded-md text-sm font-semibold" id="noteDisp">—</span>
</div>

<div className="relative flex bg-neutral-900 rounded-b-lg shadow-xl px-1 py-3 overflow-x-auto" id="piano"></div>

<p className="mt-6 text-xs text-neutral-500">Rotate your phone to landscape for the best experience.</p>


    </>
  );
}
