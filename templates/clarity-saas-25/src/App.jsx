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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // ============================================================
  //  Interactivity
  // ============================================================

  const gb = document.getElementById('gb');
  const power = document.getElementById('power');

  // Initial: powered on so the user sees the LCD glow
  gb.classList.add('on');

  // ---- Power toggle ----------------------------------------------------
  power.addEventListener('click', (e) => {
    e.stopPropagation();
    gb.classList.toggle('on');
  });

  // ---- D-pad press feel -------------------------------------------------
  const dpadCross = document.getElementById('dpadCross');
  const dpadBtns = document.querySelectorAll('.dpad__btn');

  dpadBtns.forEach((btn) => {
    const dir = btn.dataset.dir;
    const cls = `press-${dir}`;

    const press = () => dpadCross.classList.add(cls);
    const release = () => dpadCross.classList.remove(cls);

    btn.addEventListener('mousedown', press);
    btn.addEventListener('touchstart', press, { passive: true });
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);
    btn.addEventListener('touchend', release);
    btn.addEventListener('touchcancel', release);
  });

  // ---- A / B / SELECT / START feedback ---------------------------------
  // CSS :active already handles visual; add keyboard support for fun.
  const keyMap = {
    'KeyZ': 'abB', 'KeyX': 'abA',
    'Enter': 'ssStart', 'ShiftRight': 'ssSelect', 'ShiftLeft': 'ssSelect',
    'ArrowUp': null, 'ArrowDown': null, 'ArrowLeft': null, 'ArrowRight': null,
  };

  const dpadKeyMap = {
    'ArrowUp': 'up', 'ArrowDown': 'down', 'ArrowLeft': 'left', 'ArrowRight': 'right',
  };

  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (dpadKeyMap[e.code]) {
      dpadCross.classList.add(`press-${dpadKeyMap[e.code]}`);
      e.preventDefault();
      return;
    }
    if (keyMap[e.code]) {
      const el = document.getElementById(keyMap[e.code]);
      if (el) el.classList.add('pressed');
      e.preventDefault();
    }
    // Spacebar toggles power
    if (e.code === 'Space') {
      gb.classList.toggle('on');
      e.preventDefault();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (dpadKeyMap[e.code]) {
      dpadCross.classList.remove(`press-${dpadKeyMap[e.code]}`);
      return;
    }
    if (keyMap[e.code]) {
      const el = document.getElementById(keyMap[e.code]);
      if (el) el.classList.remove('pressed');
    }
  });

  // ---- Wheels: drag and scroll to rotate -------------------------------
  document.querySelectorAll('.wheel').forEach((wheel) => {
    const ribs = wheel.querySelector('.wheel__ribs');
    let offset = 0;
    let dragging = false;
    let lastY = 0;

    const apply = () => {
      // Limit so the rib pattern visually rotates but the offset wraps
      ribs.style.transform = `translateY(${(offset % 4) - 2}px)`;
    };

    wheel.addEventListener('wheel', (e) => {
      e.preventDefault();
      offset += e.deltaY * 0.4;
      apply();
    }, { passive: false });

    wheel.addEventListener('mousedown', (e) => {
      dragging = true;
      lastY = e.clientY;
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const dy = e.clientY - lastY;
      lastY = e.clientY;
      offset += dy;
      apply();
    });

    document.addEventListener('mouseup', () => { dragging = false; });

    // Touch support
    wheel.addEventListener('touchstart', (e) => {
      dragging = true;
      lastY = e.touches[0].clientY;
    }, { passive: true });

    wheel.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      const dy = e.touches[0].clientY - lastY;
      lastY = e.touches[0].clientY;
      offset += dy;
      apply();
    }, { passive: true });

    wheel.addEventListener('touchend', () => { dragging = false; });
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
      
<div className="stage">
<div className="gameboy" id="gb">

<div className="power" id="power">
<span className="power__label">OFF</span>
<span className="power__label">ON</span>
<div className="power__slot"></div>
<div className="power__knob" id="powerKnob"></div>
</div>

<div className="screen">
<div className="screen__title">DOT MATRIX WITH STEREO SOUND</div>
<div className="battery">
<div className="battery__led" id="batteryLed"></div>
<div className="battery__label">BATTERY</div>
</div>
<div className="lcd" id="lcd"></div>
</div>

<div aria-label="Nintendo Game Boy" className="wordmark">
<svg version="1.1" viewbox="0 0 446.41919 42.23269" xmlns="http://www.w3.org/2000/svg">
<g transform="translate(-16.7904,-158.88365)">
<g fill="currentColor" fill-rule="nonzero">
<path d="M356.15212,165.42839h-15.41859l-1.58485,11.3121h13.60275l-0.80205,5.72342h-13.60275l-1.66826,11.92807h20.29505l-0.80205,5.717h-26.0698l5.65284,-40.3976h21.19975z"></path>
<path d="M456.05533,159.71137h7.15427l-15.50842,20.66078l-2.75263,19.71116h-5.78117l2.88096,-20.58378l-10.59988,-19.78815h6.49339l7.53926,14.08398z"></path>
<path d="M319.55944,172.88423l-14.85395,28.17438l-7.18636,-29.21383l-9.22677,28.26421h-5.92875l13.17927,-40.3976h5.03687l6.13407,24.94051l13.1536,-24.94051h5.05612l1.59127,40.3976h-5.88383z"></path>
<path d="M431.32656,179.76902c-1.03304,7.37243 -5.63359,21.34733 -19.26842,21.34733c-11.22868,0 -14.44971,-9.9839 -12.85845,-21.34733c1.46294,-10.47797 8.0269,-20.88536 19.21709,-20.88536c5.96724,0 15.09135,5.27428 12.90978,20.88536zM423.46006,167.0774c-1.57843,-1.80942 -3.64451,-2.45748 -5.0497,-2.45748c-8.93162,0 -12.71729,10.02882 -13.545,15.95115c-0.80205,5.74267 -0.077,10.55496 1.94417,12.8777c0.73147,0.83413 2.06608,1.94417 5.24219,1.94417c4.08083,0 7.13502,-1.71317 9.61817,-5.38977c2.8553,-4.2284 3.77284,-9.50268 3.98458,-11.02336c0.73788,-5.29994 -0.01925,-9.41285 -2.1944,-11.9024z"></path>
<path d="M245.82227,196.41955c-1.8415,1.2897 -3.54826,2.25857 -5.15236,2.92588c-2.50881,1.03945 -4.42731,1.19987 -5.70417,1.19987c-0.32082,0 -0.60314,-0.01283 -0.84696,-0.01925c-0.08341,0 -0.20533,-0.00642 -0.24382,-0.00642c-0.00642,0 -0.01925,0 -0.02567,0c-6.70513,0 -10.67688,-2.93871 -12.81995,-5.40902c-3.30444,-3.79209 -4.7353,-9.3166 -3.92042,-15.1491c0.61598,-4.42731 2.1944,-8.28998 4.68397,-11.49176c2.07891,-2.66922 4.76096,-4.83154 7.97558,-6.43564c5.70417,-2.82963 11.51742,-3.04779 13.16002,-3.04779c3.94608,0 6.87837,0.43632 8.03974,0.64164l-0.80205,5.72984c-0.62881,-0.1155 -3.38144,-0.59031 -7.23769,-0.59031c-3.51618,0 -18.03006,1.21911 -20.10256,15.99606c-0.96246,6.87195 2.09174,13.98773 11.04903,13.9749c1.18062,0 2.96437,0.37857 6.66021,-1.77093l0.8213,-5.88383h-6.04424l0.78922,-5.64001h11.82541z"></path>
<path d="M279.48265,200.11539h-5.72342l-1.86717,-11.01052h-11.58801l-5.02403,11.00411h-6.20465l18.45354,-40.3976h5.09461zM270.9296,183.46486l-2.18158,-12.85203l-5.87099,12.85203z"></path>
<path d="M395.0162,188.00126c0,2.84246 -1.09079,5.76834 -2.99004,8.0269c-2.21365,2.63072 -5.36411,4.08083 -8.63646,4.08083v0h-12.47988v0h-2.11099l5.69134,-40.69275h2.24574v0h6.2239c3.83058,0 6.15973,1.46935 7.4366,2.75263c1.28328,1.28328 2.81038,3.62526 2.80396,7.4751c-0.00642,3.21461 -1.23194,6.16615 -3.4456,8.32847c0.33366,0.24382 0.66089,0.5069 0.97529,0.7828c2.77188,2.44465 4.29898,5.72984 4.28615,9.24602zM378.01918,175.50854h3.39427v0c3.34294,0 5.99932,-2.38048 6.00574,-5.87741c0.01283,-3.74717 -2.31632,-4.49148 -4.45939,-4.49148v0h-3.49052zM389.25428,188.0205c0,-4.04232 -3.90758,-6.71155 -6.62172,-6.78213h-5.40902l-1.8415,13.16002h8.02049v0c3.4456,-0.00642 5.85175,-3.42636 5.85175,-6.37789z"></path>
<path d="M16.7904,199.82376l0.00307,-26.79024h8.34722l11.54683,18.68231l-0.00614,-18.68231h8.2828v26.79024h-8.27053l-11.60819,-18.68231v18.68231zM89.99192,199.82376l0.00307,-17.7804h-4.38068v-2.64436l4.38375,-0.00307l-0.00614,-3.60762h8.06192v3.60455h4.36227v2.65049h-4.36227l0.00614,17.7804zM49.57494,199.82376v-17.81721l8.05579,0.00307v17.81415zM49.55654,178.50324v-5.47585h8.07419v5.47585z"></path>
<path d="M176.35508,173.0335v26.78988h-7.96369c0,0 -0.00316,-0.86485 -0.00316,-1.03048c-3.08294,1.93579 -6.56157,1.93245 -9.2703,0.66864c-0.72719,-0.33726 -5.50975,-2.63236 -5.50975,-8.83221c0,-4.70273 4.43611,-9.83762 10.24303,-9.3285c1.91131,0.16863 3.27038,0.86485 4.55867,1.58904c-0.00608,-4.12315 -0.00631,-9.85637 -0.00631,-9.85637zM202.52549,190.79536c0,5.52486 -5.27048,10.00346 -11.77387,10.00346c-6.50038,0 -11.77387,-4.47859 -11.77387,-10.00346c0,-5.52486 5.27025,-10.00391 11.77387,-10.00391c6.50338,0 11.77387,4.47905 11.77387,10.00391zM113.20681,180.88666c6.55259,0 11.88756,4.57695 11.88756,10.10181c0,0.00924 -15.17573,0.00316 -15.17573,0.00316c0,0 -0.00631,2.70246 -0.00631,3.67798c0,3.25781 2.18106,3.98207 3.37118,3.98207c1.19035,0 3.33509,-0.72426 3.33509,-3.98207c0,-1.00001 -0.00633,-1.07966 -0.00633,-1.07966l8.02505,-0.00633c-1.40195,4.20585 -5.9946,7.30768 -11.43052,7.30768c-6.55236,0 -11.8623,-4.47589 -11.8623,-10.00075c0,-5.52486 5.30994,-10.00391 11.8623,-10.00391zM76.49016,181.18442c3.01226,-0.08593 9.12332,1.88666 9.08035,8.93913c-0.00624,1.25156 -0.00316,9.69395 -0.00316,9.69395h-8.0034v-11.70033c0,-1.55233 -1.48478,-3.27914 -3.68114,-3.27914c-2.19336,0 -3.82551,1.72704 -3.82551,3.27914c0,0.76092 0.00903,11.70033 0.00903,11.70033h-7.99753l-0.0027,-17.8142l8.0034,-0.00587c0,0 -0.00924,1.43251 0,1.87418c1.53985,-1.4694 3.75792,-2.61051 6.42067,-2.6872zM141.96019,181.18442c3.01249,-0.08593 9.12332,1.88666 9.08035,8.93913c-0.00624,1.25156 -0.00316,9.69395 -0.00316,9.69395h-8.0034v-11.70033c0,-1.55233 -1.48455,-3.27914 -3.68114,-3.27914c-2.19336,0 -3.82551,1.72704 -3.82551,3.27914c0,0.76092 0.00903,11.70033 0.00903,11.70033h-7.99708l0.00587,-17.8142l7.99482,-0.00587c0,0 -0.00924,1.43251 0,1.87418c1.53986,-1.4694 3.76047,-2.61051 6.42022,-2.6872zM190.69342,183.0004c-1.60454,0 -3.29177,1.16248 -3.29177,3.9911c0,1.0797 -0.00631,3.71452 -0.00631,3.71452c0,0 -0.0027,2.76092 -0.0027,3.84086c0,2.84062 1.68425,4.01275 3.3008,4.01275c1.61354,0 3.29177,-1.17213 3.29177,-4.01275c0,-1.0797 0.0027,-3.77318 0.0027,-3.77318l0.00316,0.00903c-0.00924,-0.71449 -0.00587,-2.71152 -0.00587,-3.79122c0,-2.82861 -1.68447,-3.9911 -3.29177,-3.9911zM113.28531,183.09831c-1.04863,0.00666 -2.20441,0.52831 -2.83293,1.62603c-0.51237,0.88959 -0.54598,1.93256 -0.53374,3.4939l6.72116,0.00316c0.01247,-1.56134 -0.00897,-2.60447 -0.52156,-3.49706c-0.62844,-1.09757 -1.78419,-1.61922 -2.83293,-1.62603zM165.30807,184.18429c-1.28206,0 -3.15958,0.70266 -3.15958,3.45736c0,0.91407 0.00316,3.17492 0.00316,3.17492c0,0 -0.00316,2.22102 -0.00316,3.16905c0,2.75169 1.87759,3.47269 3.15687,3.47269c1.2548,0 3.15958,-0.721 3.15958,-3.47269c0,-1.14438 -0.00316,-3.15958 -0.00316,-3.15958v-3.18439c0,-2.75469 -1.90192,-3.45736 -3.15371,-3.45736z"></path>
</g>
</g>
</svg>
</div>

<div className="controls">
<div className="dpad">
<div className="dpad__cross" id="dpadCross">
<div className="dpad__v"></div>
<div className="dpad__h"></div>
<div className="dpad__center"></div>
</div>
<div className="dpad__btn dpad__btn--up" data-dir="up"></div>
<div className="dpad__btn dpad__btn--down" data-dir="down"></div>
<div className="dpad__btn dpad__btn--left" data-dir="left"></div>
<div className="dpad__btn dpad__btn--right" data-dir="right"></div>
</div>
<div className="ab">
<div className="ab__btn ab__a" id="abA"></div>
<div className="ab__btn ab__b" id="abB"></div>
<span className="ab__label ab__label--a">A</span>
<span className="ab__label ab__label--b">B</span>
</div>
</div>

<div className="ss">
<div className="ss__btn" id="ssSelect">
<span className="ss__label">SELECT</span>
</div>
<div className="ss__btn" id="ssStart">
<span className="ss__label">START</span>
</div>
</div>

<div className="speaker">
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
<span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span><span className="speaker__hole"></span>
</div>

<div className="wheel wheel--vol" data-wheel="vol">
<div className="wheel__ribs"></div>
<span className="wheel__label">VOL</span>
</div>
<div className="wheel wheel--con" data-wheel="con">
<div className="wheel__ribs"></div>
<span className="wheel__label">CONTRAST</span>
</div>

<div className="bottom-meta">
<span>PHONES</span>
<span>DMG-01 · NINTENDO</span>
</div>
</div>
</div>
<div className="caption">
<span className="caption__dot"></span>
    DMG-01 / SKEUOMORPHIC STUDY
  </div>
<div className="caption__right">CLICK POWER TO TOGGLE</div>


    </>
  );
}
