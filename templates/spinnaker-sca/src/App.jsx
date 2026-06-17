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



      // Floating code lines (adapted for Spinnaker & Supply Chain operations)
      const codeSnippets = [
        'PLAN::RUN::BY_APS',
        'NETWORK_SYNC_OK',
        'ORV::ACCURACY::+24%',
        'SYS::REPLAN_MINUTES',
        'LENS_1::DIAGNOSED',
        'LENS_2::PROCESS_GAP',
        'MANHATTAN_WMS_SYNC',
        'BLUE_YONDER_APS::ACTIVE',
        'KINAXIS_LINK::CONNECTED',
        'SUPPLY_CHAIN_AI_DEPLOY',
        'AUTO_ROUTING_SUCCESS',
        'KPI::INVENTORY_OPTIMIZED',
        'DATA_INGEST::REAL_TIME',
        'STRATEGY::REBUILD_COMPLETE'
      ];

      const codeContainer = document.getElementById('codeFloat');
      function spawnCode() {
        const el = document.createElement('div');
        el.className = 'code-line';
        el.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        el.style.left = (Math.random() * 80 + 10) + '%';
        el.style.bottom = '0px';
        el.style.animationDuration = (6 + Math.random() * 4) + 's';
        codeContainer.appendChild(el);
        setTimeout(() => el.remove(), 10000);
      }
      setInterval(spawnCode, 600);
      for (let i = 0; i < 8; i++) setTimeout(spawnCode, i * 200);

      // Particles
      const particleContainer = document.getElementById('particles');
      function spawnParticle() {
        const el = document.createElement('div');
        el.className = 'particle';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.animationDuration = (10 + Math.random() * 10) + 's';
        el.style.animationDelay = Math.random() * 5 + 's';
        particleContainer.appendChild(el);
        setTimeout(() => el.remove(), 20000);
      }
      for (let i = 0; i < 40; i++) spawnParticle();
      setInterval(spawnParticle, 800);

      // Mouse parallax
      const coreParallax = document.getElementById('coreParallax');
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        if (coreParallax) {
          coreParallax.style.transform = `translate(${x}px, ${y}px)`;
          coreParallax.style.transition = 'transform 0.3s ease-out';
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
      
<div className="relative min-h-screen w-full overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-50"></div>

<div className="absolute inset-0 radial-glow"></div>

<div className="absolute inset-0 pointer-events-none" id="particles">
<div className="particle" style={{left: '75.7816%', top: '33.8344%', animationDuration: '18.6149s', animationDelay: '4.6596s'}}></div>
<div className="particle" style={{left: '21.8797%', top: '65.7736%', animationDuration: '10.8867s', animationDelay: '2.04791s'}}></div>
<div className="particle" style={{left: '33.6728%', top: '62.4954%', animationDuration: '14.1555s', animationDelay: '1.02704s'}}></div>
<div className="particle" style={{left: '1.20683%', top: '70.978%', animationDuration: '19.3546s', animationDelay: '4.19614s'}}></div>
<div className="particle" style={{left: '67.2099%', top: '13.4253%', animationDuration: '19.8894s', animationDelay: '4.89299s'}}></div>
<div className="particle" style={{left: '3.55985%', top: '1.85437%', animationDuration: '11.4466s', animationDelay: '4.89409s'}}></div>
<div className="particle" style={{left: '97.2875%', top: '7.74673%', animationDuration: '12.8247s', animationDelay: '0.46424s'}}></div>
<div className="particle" style={{left: '30.518%', top: '83.9803%', animationDuration: '18.8782s', animationDelay: '0.718015s'}}></div>
<div className="particle" style={{left: '76.1414%', top: '84.2398%', animationDuration: '13.1143s', animationDelay: '1.25275s'}}></div>
<div className="particle" style={{left: '6.5385%', top: '86.3818%', animationDuration: '12.4804s', animationDelay: '0.286313s'}}></div>
<div className="particle" style={{left: '79.7262%', top: '58.339%', animationDuration: '17.5467s', animationDelay: '1.1429s'}}></div>
<div className="particle" style={{left: '80.3371%', top: '62.5501%', animationDuration: '12.0246s', animationDelay: '0.157634s'}}></div>
<div className="particle" style={{left: '52.2346%', top: '74.0595%', animationDuration: '11.6163s', animationDelay: '3.39379s'}}></div>
<div className="particle" style={{left: '23.936%', top: '28.1191%', animationDuration: '10.4328s', animationDelay: '3.76949s'}}></div>
<div className="particle" style={{left: '31.9176%', top: '71.7029%', animationDuration: '15.9176s', animationDelay: '0.249979s'}}></div>
<div className="particle" style={{left: '58.6236%', top: '74.8834%', animationDuration: '16.0826s', animationDelay: '4.72709s'}}></div>
<div className="particle" style={{left: '91.9717%', top: '50.933%', animationDuration: '14.8618s', animationDelay: '3.77837s'}}></div>
<div className="particle" style={{left: '0.851557%', top: '91.1146%', animationDuration: '18.8743s', animationDelay: '3.30085s'}}></div>
<div className="particle" style={{left: '44.4009%', top: '15.0728%', animationDuration: '15.4962s', animationDelay: '4.61271s'}}></div>
<div className="particle" style={{left: '89.0809%', top: '65.6472%', animationDuration: '18.4898s', animationDelay: '1.98206s'}}></div>
<div className="particle" style={{left: '28.0265%', top: '30.9621%', animationDuration: '12.1532s', animationDelay: '2.86966s'}}></div>
<div className="particle" style={{left: '37.2754%', top: '83.0943%', animationDuration: '17.5934s', animationDelay: '1.42076s'}}></div>
<div className="particle" style={{left: '47.751%', top: '10.2692%', animationDuration: '17.1597s', animationDelay: '3.90794s'}}></div>
<div className="particle" style={{left: '67.8829%', top: '3.68715%', animationDuration: '15.279s', animationDelay: '2.51047s'}}></div>
<div className="particle" style={{left: '97.2573%', top: '49.9893%', animationDuration: '17.3204s', animationDelay: '2.30513s'}}></div>
<div className="particle" style={{left: '67.675%', top: '14.0317%', animationDuration: '18.1961s', animationDelay: '3.34761s'}}></div>
<div className="particle" style={{left: '73.0178%', top: '74.2752%', animationDuration: '18.9858s', animationDelay: '2.62434s'}}></div>
<div className="particle" style={{left: '97.8622%', top: '15.2669%', animationDuration: '10.6637s', animationDelay: '1.70347s'}}></div>
<div className="particle" style={{left: '88.9868%', top: '45.2377%', animationDuration: '11.8955s', animationDelay: '0.291118s'}}></div>
<div className="particle" style={{left: '50.0932%', top: '42.5491%', animationDuration: '10.1753s', animationDelay: '2.03011s'}}></div>
<div className="particle" style={{left: '47.8884%', top: '38.8976%', animationDuration: '13.6615s', animationDelay: '0.4184s'}}></div>
<div className="particle" style={{left: '69.6885%', top: '71.0868%', animationDuration: '10.1883s', animationDelay: '3.70167s'}}></div>
<div className="particle" style={{left: '32.6529%', top: '6.73721%', animationDuration: '11.8038s', animationDelay: '4.54937s'}}></div>
<div className="particle" style={{left: '95.0213%', top: '18.5658%', animationDuration: '10.7133s', animationDelay: '0.586948s'}}></div>
<div className="particle" style={{left: '43.6229%', top: '58.614%', animationDuration: '10.5384s', animationDelay: '1.12672s'}}></div>
<div className="particle" style={{left: '99.7381%', top: '37.6844%', animationDuration: '10.5194s', animationDelay: '3.00989s'}}></div>
<div className="particle" style={{left: '40.7193%', top: '19.2664%', animationDuration: '16.5119s', animationDelay: '0.1871s'}}></div>
<div className="particle" style={{left: '11.2201%', top: '82.3634%', animationDuration: '12.1667s', animationDelay: '0.486762s'}}></div>
<div className="particle" style={{left: '11.4612%', top: '41.9092%', animationDuration: '16.6644s', animationDelay: '1.85361s'}}></div>
<div className="particle" style={{left: '31.6488%', top: '92.4837%', animationDuration: '13.2469s', animationDelay: '1.36586s'}}></div>
<div className="particle" style={{left: '59.9618%', top: '40.4006%', animationDuration: '11.4827s', animationDelay: '2.69313s'}}></div>
<div className="particle" style={{left: '11.0449%', top: '12.0866%', animationDuration: '14.8842s', animationDelay: '3.78231s'}}></div>
<div className="particle" style={{left: '25.0087%', top: '27.9905%', animationDuration: '17.5012s', animationDelay: '3.08924s'}}></div>
<div className="particle" style={{left: '79.5559%', top: '14.7175%', animationDuration: '12.2022s', animationDelay: '4.51415s'}}></div>
<div className="particle" style={{left: '48.5871%', top: '32.9685%', animationDuration: '13.2133s', animationDelay: '1.18678s'}}></div>
<div className="particle" style={{left: '17.7902%', top: '87.9148%', animationDuration: '16.0304s', animationDelay: '1.35769s'}}></div>
<div className="particle" style={{left: '65.3209%', top: '98.1653%', animationDuration: '17.5104s', animationDelay: '3.50871s'}}></div>
<div className="particle" style={{left: '10.2305%', top: '54.9555%', animationDuration: '10.8727s', animationDelay: '3.72734s'}}></div>
<div className="particle" style={{left: '66.001%', top: '9.4527%', animationDuration: '14.4324s', animationDelay: '0.633531s'}}></div>
<div className="particle" style={{left: '98.4729%', top: '17.4796%', animationDuration: '17.1837s', animationDelay: '1.60148s'}}></div>
<div className="particle" style={{left: '88.482%', top: '23.2883%', animationDuration: '17.587s', animationDelay: '2.14916s'}}></div>
<div className="particle" style={{left: '81.1273%', top: '68.5057%', animationDuration: '18.1078s', animationDelay: '4.35818s'}}></div>
<div className="particle" style={{left: '22.737%', top: '16.9804%', animationDuration: '13.4171s', animationDelay: '2.58487s'}}></div>
<div className="particle" style={{left: '3.36809%', top: '89.9336%', animationDuration: '12.4896s', animationDelay: '0.840505s'}}></div>
<div className="particle" style={{left: '92.7085%', top: '56.9864%', animationDuration: '15.5865s', animationDelay: '0.0814921s'}}></div>
<div className="particle" style={{left: '4.51257%', top: '71.7869%', animationDuration: '13.4979s', animationDelay: '0.606034s'}}></div>
<div className="particle" style={{left: '86.5594%', top: '73.9503%', animationDuration: '17.3541s', animationDelay: '0.733209s'}}></div>
<div className="particle" style={{left: '74.6527%', top: '9.50723%', animationDuration: '19.7907s', animationDelay: '3.95103s'}}></div>
<div className="particle" style={{left: '26.6109%', top: '87.146%', animationDuration: '16.3075s', animationDelay: '0.189787s'}}></div>
<div className="particle" style={{left: '94.5795%', top: '55.8327%', animationDuration: '13.8269s', animationDelay: '4.72346s'}}></div>
<div className="particle" style={{left: '55.407%', top: '11.5998%', animationDuration: '13.1769s', animationDelay: '2.36958s'}}></div>
<div className="particle" style={{left: '43.5048%', top: '61.5808%', animationDuration: '10.6175s', animationDelay: '3.09153s'}}></div>
<div className="particle" style={{left: '31.8013%', top: '16.5081%', animationDuration: '13.5649s', animationDelay: '3.8864s'}}></div>
<div className="particle" style={{left: '57.9961%', top: '91.5048%', animationDuration: '10.2642s', animationDelay: '1.50773s'}}></div>
<div className="particle" style={{left: '38.4442%', top: '36.3639%', animationDuration: '13.023s', animationDelay: '3.7392s'}}></div>
<div className="particle" style={{left: '71.5579%', top: '11.5164%', animationDuration: '12.9217s', animationDelay: '4.27495s'}}></div>
<div className="particle" style={{left: '50.6819%', top: '51.5956%', animationDuration: '19.524s', animationDelay: '4.57377s'}}></div>
<div className="particle" style={{left: '65.8588%', top: '48.4013%', animationDuration: '18.6801s', animationDelay: '0.925576s'}}></div>
<div className="particle" style={{left: '60.0243%', top: '78.5351%', animationDuration: '17.4649s', animationDelay: '2.18019s'}}></div>
<div className="particle" style={{left: '4.03278%', top: '1.63731%', animationDuration: '11.5373s', animationDelay: '0.125254s'}}></div>
<div className="particle" style={{left: '3.30732%', top: '17.6107%', animationDuration: '12.839s', animationDelay: '0.297648s'}}></div>
<div className="particle" style={{left: '35.3097%', top: '17.4016%', animationDuration: '16.6946s', animationDelay: '3.25522s'}}></div>
<div className="particle" style={{left: '63.2181%', top: '98.5117%', animationDuration: '13.9861s', animationDelay: '4.52466s'}}></div>
<div className="particle" style={{left: '75.373%', top: '0.760089%', animationDuration: '16.6776s', animationDelay: '3.66755s'}}></div>
<div className="particle" style={{left: '49.5325%', top: '41.0921%', animationDuration: '17.7359s', animationDelay: '1.62585s'}}></div>
<div className="particle" style={{left: '36.3596%', top: '96.4251%', animationDuration: '15.1907s', animationDelay: '4.18243s'}}></div>
<div className="particle" style={{left: '16.6475%', top: '29.3657%', animationDuration: '17.0382s', animationDelay: '2.72136s'}}></div>
<div className="particle" style={{left: '66.5315%', top: '14.7313%', animationDuration: '16.7083s', animationDelay: '1.04368s'}}></div>
<div className="particle" style={{left: '7.67031%', top: '94.6558%', animationDuration: '14.1311s', animationDelay: '4.15974s'}}></div>
<div className="particle" style={{left: '27.9863%', top: '40.4954%', animationDuration: '19.8613s', animationDelay: '2.97208s'}}></div>
<div className="particle" style={{left: '56.642%', top: '89.7416%', animationDuration: '11.7287s', animationDelay: '0.474974s'}}></div>
<div className="particle" style={{left: '8.13055%', top: '33.9135%', animationDuration: '12.2873s', animationDelay: '2.02452s'}}></div>
<div className="particle" style={{left: '7.5084%', top: '56.2774%', animationDuration: '16.517s', animationDelay: '4.2432s'}}></div>
<div className="particle" style={{left: '59.7029%', top: '7.76645%', animationDuration: '19.1468s', animationDelay: '4.62439s'}}></div>
<div className="particle" style={{left: '25.4631%', top: '4.53115%', animationDuration: '12.3541s', animationDelay: '4.86158s'}}></div>
<div className="particle" style={{left: '41.1965%', top: '90.6767%', animationDuration: '11.0242s', animationDelay: '0.582383s'}}></div>
<div className="particle" style={{left: '26.3294%', top: '96.005%', animationDuration: '14.6675s', animationDelay: '4.45531s'}}></div>
<div className="particle" style={{left: '23.2091%', top: '95.6432%', animationDuration: '13.7675s', animationDelay: '4.77209s'}}></div>
<div className="particle" style={{left: '4.03565%', top: '63.5474%', animationDuration: '12.9644s', animationDelay: '3.72124s'}}></div>
<div className="particle" style={{left: '68.6083%', top: '41.1837%', animationDuration: '16.3458s', animationDelay: '0.500442s'}}></div>
<div className="particle" style={{left: '12.0397%', top: '45.7903%', animationDuration: '10.9496s', animationDelay: '4.11864s'}}></div>
<div className="particle" style={{left: '17.3636%', top: '5.57336%', animationDuration: '17.5044s', animationDelay: '1.8105s'}}></div>
<div className="particle" style={{left: '20.3237%', top: '17.5399%', animationDuration: '14.2766s', animationDelay: '1.19443s'}}></div>
<div className="particle" style={{left: '37.1026%', top: '62.2563%', animationDuration: '16.3746s', animationDelay: '3.63599s'}}></div>
<div className="particle" style={{left: '97.0269%', top: '87.3488%', animationDuration: '17.8115s', animationDelay: '4.7164s'}}></div>
<div className="particle" style={{left: '71.9772%', top: '60.8402%', animationDuration: '18.9214s', animationDelay: '4.2421s'}}></div>
<div className="particle" style={{left: '1.24921%', top: '33.7948%', animationDuration: '15.4714s', animationDelay: '1.85217s'}}></div>
<div className="particle" style={{left: '99.1294%', top: '9.8537%', animationDuration: '15.3615s', animationDelay: '0.811809s'}}></div>
<div className="particle" style={{left: '87.9919%', top: '11.3768%', animationDuration: '12.9444s', animationDelay: '0.774208s'}}></div>
<div className="particle" style={{left: '65.1718%', top: '75.7422%', animationDuration: '14.0475s', animationDelay: '0.104166s'}}></div>
<div className="particle" style={{left: '93.0756%', top: '44.0595%', animationDuration: '19.3519s', animationDelay: '4.88141s'}}></div>
<div className="particle" style={{left: '15.7727%', top: '49.3078%', animationDuration: '11.3396s', animationDelay: '4.83035s'}}></div>
<div className="particle" style={{left: '78.7126%', top: '99.5943%', animationDuration: '13.3204s', animationDelay: '0.360617s'}}></div>
<div className="particle" style={{left: '68.6874%', top: '2.96095%', animationDuration: '17.9264s', animationDelay: '1.90598s'}}></div>
<div className="particle" style={{left: '59.9729%', top: '51.8188%', animationDuration: '19.0047s', animationDelay: '4.62628s'}}></div>
<div className="particle" style={{left: '52.6401%', top: '3.55988%', animationDuration: '15.559s', animationDelay: '3.45221s'}}></div>
<div className="particle" style={{left: '69.7573%', top: '24.7831%', animationDuration: '12.1055s', animationDelay: '0.978568s'}}></div>
<div className="particle" style={{left: '0.472821%', top: '17.916%', animationDuration: '16.6193s', animationDelay: '3.87216s'}}></div>
<div className="particle" style={{left: '83.8053%', top: '21.7312%', animationDuration: '13.4317s', animationDelay: '0.0135932s'}}></div>
<div className="particle" style={{left: '36.513%', top: '65.9081%', animationDuration: '12.6522s', animationDelay: '0.724679s'}}></div>
<div className="particle" style={{left: '85.6714%', top: '88.4663%', animationDuration: '17.9786s', animationDelay: '2.7167s'}}></div>
<div className="particle" style={{left: '57.7239%', top: '16.0202%', animationDuration: '16.7547s', animationDelay: '2.3021s'}}></div>
<div className="particle" style={{left: '49.8901%', top: '54.4605%', animationDuration: '13.9571s', animationDelay: '2.65519s'}}></div>
<div className="particle" style={{left: '22.6378%', top: '98.0552%', animationDuration: '17.6558s', animationDelay: '1.43362s'}}></div>
<div className="particle" style={{left: '85.4611%', top: '87.6647%', animationDuration: '19.5161s', animationDelay: '4.70064s'}}></div>
<div className="particle" style={{left: '63.2034%', top: '3.17792%', animationDuration: '12.7692s', animationDelay: '2.32478s'}}></div>
<div className="particle" style={{left: '7.83727%', top: '31.5383%', animationDuration: '15.9912s', animationDelay: '3.94005s'}}></div>
<div className="particle" style={{left: '18.8171%', top: '53.115%', animationDuration: '17.547s', animationDelay: '3.80864s'}}></div>
<div className="particle" style={{left: '16.3928%', top: '64.5887%', animationDuration: '14.953s', animationDelay: '2.45388s'}}></div>
<div className="particle" style={{left: '46.9324%', top: '7.83739%', animationDuration: '10.1111s', animationDelay: '1.71258s'}}></div>
<div className="particle" style={{left: '14.4563%', top: '52.8449%', animationDuration: '15.3425s', animationDelay: '2.37101s'}}></div>
<div className="particle" style={{left: '57.4528%', top: '82.4815%', animationDuration: '16.2417s', animationDelay: '4.10513s'}}></div>
<div className="particle" style={{left: '4.09711%', top: '41.9818%', animationDuration: '14.0004s', animationDelay: '2.60604s'}}></div>
<div className="particle" style={{left: '13.708%', top: '37.5559%', animationDuration: '16.6337s', animationDelay: '3.66885s'}}></div>
<div className="particle" style={{left: '65.4013%', top: '27.8611%', animationDuration: '14.249s', animationDelay: '0.456412s'}}></div>
<div className="particle" style={{left: '47.3342%', top: '38.1168%', animationDuration: '11.5532s', animationDelay: '3.93137s'}}></div>
<div className="particle" style={{left: '15.6559%', top: '3.98893%', animationDuration: '18.3736s', animationDelay: '4.59545s'}}></div>
<div className="particle" style={{left: '45.5089%', top: '29.4207%', animationDuration: '16.2249s', animationDelay: '0.585227s'}}></div>
<div className="particle" style={{left: '97.3354%', top: '30.8242%', animationDuration: '13.5283s', animationDelay: '1.85437s'}}></div>
<div className="particle" style={{left: '92.9334%', top: '50.1106%', animationDuration: '17.2213s', animationDelay: '1.38302s'}}></div>
<div className="particle" style={{left: '77.9897%', top: '41.9061%', animationDuration: '15.4582s', animationDelay: '1.87324s'}}></div>
<div className="particle" style={{left: '56.2436%', top: '6.92493%', animationDuration: '17.4306s', animationDelay: '1.54362s'}}></div>
<div className="particle" style={{left: '84.0787%', top: '43.5322%', animationDuration: '10.3385s', animationDelay: '3.75295s'}}></div>
<div className="particle" style={{left: '96.3115%', top: '62.5106%', animationDuration: '17.173s', animationDelay: '3.06938s'}}></div>
<div className="particle" style={{left: '4.69242%', top: '14.9753%', animationDuration: '11.2891s', animationDelay: '4.1285s'}}></div>
<div className="particle" style={{left: '72.1791%', top: '88.6415%', animationDuration: '10.1187s', animationDelay: '3.28045s'}}></div>
<div className="particle" style={{left: '50.7534%', top: '54.7831%', animationDuration: '19.168s', animationDelay: '0.593908s'}}></div>
<div className="particle" style={{left: '76.2198%', top: '60.0278%', animationDuration: '14.0866s', animationDelay: '2.18813s'}}></div>
<div className="particle" style={{left: '12.514%', top: '84.3486%', animationDuration: '10.2366s', animationDelay: '0.903924s'}}></div>
<div className="particle" style={{left: '46.2405%', top: '72.1404%', animationDuration: '19.6732s', animationDelay: '1.53694s'}}></div>
<div className="particle" style={{left: '34.2693%', top: '17.2387%', animationDuration: '11.5218s', animationDelay: '0.74135s'}}></div>
<div className="particle" style={{left: '69.2117%', top: '42.0551%', animationDuration: '19.05s', animationDelay: '3.4219s'}}></div>
<div className="particle" style={{left: '54.0692%', top: '8.16848%', animationDuration: '14.2793s', animationDelay: '1.70683s'}}></div>
<div className="particle" style={{left: '73.3234%', top: '36.5964%', animationDuration: '11.8903s', animationDelay: '2.77399s'}}></div>
<div className="particle" style={{left: '37.512%', top: '9.00564%', animationDuration: '14.6418s', animationDelay: '0.85477s'}}></div>
<div className="particle" style={{left: '23.8144%', top: '67.1057%', animationDuration: '10.5202s', animationDelay: '1.05274s'}}></div>
<div className="particle" style={{left: '96.0859%', top: '43.8839%', animationDuration: '16.7928s', animationDelay: '3.15522s'}}></div>
<div className="particle" style={{left: '79.5171%', top: '34.0775%', animationDuration: '17.6026s', animationDelay: '2.01745s'}}></div>
<div className="particle" style={{left: '47.7928%', top: '6.56263%', animationDuration: '14.2456s', animationDelay: '3.89969s'}}></div>
<div className="particle" style={{left: '44.6073%', top: '63.152%', animationDuration: '13.447s', animationDelay: '2.10823s'}}></div>
<div className="particle" style={{left: '75.7658%', top: '64.3936%', animationDuration: '15.0779s', animationDelay: '3.56224s'}}></div>
<div className="particle" style={{left: '15.495%', top: '99.989%', animationDuration: '17.7427s', animationDelay: '3.95444s'}}></div>
<div className="particle" style={{left: '98.0261%', top: '25.8515%', animationDuration: '10.0168s', animationDelay: '2.14679s'}}></div>
<div className="particle" style={{left: '39.1967%', top: '67.4128%', animationDuration: '16.0532s', animationDelay: '4.12592s'}}></div>
<div className="particle" style={{left: '8.43981%', top: '75.8594%', animationDuration: '16.8597s', animationDelay: '1.42837s'}}></div>
<div className="particle" style={{left: '98.1495%', top: '60.1379%', animationDuration: '10.3054s', animationDelay: '0.00177647s'}}></div>
<div className="particle" style={{left: '32.9811%', top: '94.0426%', animationDuration: '16.9597s', animationDelay: '4.06393s'}}></div>
<div className="particle" style={{left: '95.6203%', top: '85.5102%', animationDuration: '12.6139s', animationDelay: '4.2827s'}}></div>
<div className="particle" style={{left: '88.4057%', top: '35.8785%', animationDuration: '17.1656s', animationDelay: '0.00858391s'}}></div>
<div className="particle" style={{left: '99.7787%', top: '82.2112%', animationDuration: '12.6204s', animationDelay: '3.04074s'}}></div>
<div className="particle" style={{left: '50.8864%', top: '21.1128%', animationDuration: '16.9976s', animationDelay: '4.69802s'}}></div>
<div className="particle" style={{left: '47.8422%', top: '75.6241%', animationDuration: '11.462s', animationDelay: '2.99321s'}}></div>
<div className="particle" style={{left: '54.835%', top: '61.556%', animationDuration: '12.0891s', animationDelay: '3.34786s'}}></div>
<div className="particle" style={{left: '94.4281%', top: '84.9778%', animationDuration: '12.2261s', animationDelay: '0.0938954s'}}></div>
<div className="particle" style={{left: '14.2872%', top: '29.0035%', animationDuration: '16.236s', animationDelay: '3.35854s'}}></div>
<div className="particle" style={{left: '50.2557%', top: '74.7022%', animationDuration: '18.5924s', animationDelay: '0.35855s'}}></div>
<div className="particle" style={{left: '26.0385%', top: '92.1697%', animationDuration: '17.1921s', animationDelay: '1.27039s'}}></div>
<div className="particle" style={{left: '30.7002%', top: '81.8625%', animationDuration: '17.7732s', animationDelay: '4.99616s'}}></div>
<div className="particle" style={{left: '56.4273%', top: '45.4515%', animationDuration: '18.9134s', animationDelay: '3.05409s'}}></div>
<div className="particle" style={{left: '21.0115%', top: '46.4137%', animationDuration: '10.3463s', animationDelay: '4.41309s'}}></div>
<div className="particle" style={{left: '66.4016%', top: '3.03651%', animationDuration: '14.5862s', animationDelay: '0.463831s'}}></div>
<div className="particle" style={{left: '76.3326%', top: '9.0976%', animationDuration: '12.2184s', animationDelay: '1.89663s'}}></div>
<div className="particle" style={{left: '34.4175%', top: '90.4779%', animationDuration: '16.1523s', animationDelay: '1.83184s'}}></div>
<div className="particle" style={{left: '44.2047%', top: '18.2443%', animationDuration: '13.0733s', animationDelay: '0.589577s'}}></div>
<div className="particle" style={{left: '93.6049%', top: '2.78621%', animationDuration: '14.3516s', animationDelay: '2.45889s'}}></div>
<div className="particle" style={{left: '74.1468%', top: '44.3905%', animationDuration: '13.1268s', animationDelay: '3.28347s'}}></div>
<div className="particle" style={{left: '60.2922%', top: '89.325%', animationDuration: '14.1952s', animationDelay: '4.66314s'}}></div>
<div className="particle" style={{left: '90.4051%', top: '18.3377%', animationDuration: '13.8936s', animationDelay: '1.50071s'}}></div>
<div className="particle" style={{left: '74.8931%', top: '89.91%', animationDuration: '13.869s', animationDelay: '4.80115s'}}></div>
<div className="particle" style={{left: '81.2443%', top: '78.2969%', animationDuration: '11.8087s', animationDelay: '4.67786s'}}></div>
<div className="particle" style={{left: '80.6229%', top: '0.769488%', animationDuration: '17.2478s', animationDelay: '1.22354s'}}></div>
<div className="particle" style={{left: '4.35442%', top: '90.8617%', animationDuration: '17.1925s', animationDelay: '2.67115s'}}></div>
<div className="particle" style={{left: '60.6265%', top: '96.9014%', animationDuration: '19.5169s', animationDelay: '0.542362s'}}></div>
<div className="particle" style={{left: '80.6591%', top: '58.6679%', animationDuration: '10.6586s', animationDelay: '1.22334s'}}></div>
<div className="particle" style={{left: '97.1719%', top: '45.6975%', animationDuration: '14.3339s', animationDelay: '4.95916s'}}></div>
<div className="particle" style={{left: '79.5661%', top: '80.8603%', animationDuration: '11.4178s', animationDelay: '2.03155s'}}></div>
<div className="particle" style={{left: '74.3584%', top: '51.9967%', animationDuration: '16.3778s', animationDelay: '0.955024s'}}></div>
<div className="particle" style={{left: '75.5612%', top: '51.6545%', animationDuration: '19.3102s', animationDelay: '0.754174s'}}></div>
<div className="particle" style={{left: '40.0157%', top: '54.9071%', animationDuration: '17.592s', animationDelay: '4.13776s'}}></div>
<div className="particle" style={{left: '11.1595%', top: '77.2091%', animationDuration: '12.6368s', animationDelay: '1.18194s'}}></div>
<div className="particle" style={{left: '94.3695%', top: '58.4766%', animationDuration: '11.7364s', animationDelay: '4.28847s'}}></div>
<div className="particle" style={{left: '31.3229%', top: '3.2345%', animationDuration: '19.1795s', animationDelay: '0.528694s'}}></div>
<div className="particle" style={{left: '98.8813%', top: '59.4156%', animationDuration: '12.9109s', animationDelay: '2.71314s'}}></div>
<div className="particle" style={{left: '50.0157%', top: '22.7645%', animationDuration: '11.5045s', animationDelay: '2.77655s'}}></div>
<div className="particle" style={{left: '13.7128%', top: '41.1054%', animationDuration: '13.9632s', animationDelay: '4.31753s'}}></div>
<div className="particle" style={{left: '33.7297%', top: '97.6378%', animationDuration: '14.3153s', animationDelay: '0.159734s'}}></div>
<div className="particle" style={{left: '81.3007%', top: '25.2574%', animationDuration: '13.2944s', animationDelay: '1.56915s'}}></div>
<div className="particle" style={{left: '54.9906%', top: '66.3805%', animationDuration: '15.6933s', animationDelay: '1.34235s'}}></div>
<div className="particle" style={{left: '43.3199%', top: '9.59722%', animationDuration: '15.3229s', animationDelay: '3.05539s'}}></div>
<div className="particle" style={{left: '81.7369%', top: '55.6642%', animationDuration: '17.9179s', animationDelay: '0.990368s'}}></div>
<div className="particle" style={{left: '50.954%', top: '20.4204%', animationDuration: '11.8574s', animationDelay: '2.96721s'}}></div>
<div className="particle" style={{left: '53.4977%', top: '69.8366%', animationDuration: '17.2962s', animationDelay: '3.2568s'}}></div>
<div className="particle" style={{left: '51.0789%', top: '48.8987%', animationDuration: '14.4627s', animationDelay: '1.99179s'}}></div>
<div className="particle" style={{left: '91.2167%', top: '82.8737%', animationDuration: '14.8421s', animationDelay: '1.09861s'}}></div>
<div className="particle" style={{left: '58.5571%', top: '63.104%', animationDuration: '16.042s', animationDelay: '1.94969s'}}></div>
<div className="particle" style={{left: '62.3078%', top: '20.7795%', animationDuration: '17.7029s', animationDelay: '1.33852s'}}></div>
<div className="particle" style={{left: '22.4646%', top: '97.8131%', animationDuration: '13.4167s', animationDelay: '2.37227s'}}></div>
<div className="particle" style={{left: '49.0682%', top: '21.6382%', animationDuration: '19.1194s', animationDelay: '3.23716s'}}></div>
<div className="particle" style={{left: '22.2244%', top: '19.921%', animationDuration: '11.5756s', animationDelay: '4.76821s'}}></div>
<div className="particle" style={{left: '71.6983%', top: '77.9617%', animationDuration: '17.494s', animationDelay: '1.89119s'}}></div>
<div className="particle" style={{left: '24.6722%', top: '42.1328%', animationDuration: '14.3775s', animationDelay: '4.39068s'}}></div>
<div className="particle" style={{left: '13.2697%', top: '98.6381%', animationDuration: '11.6734s', animationDelay: '2.28066s'}}></div>
<div className="particle" style={{left: '51.466%', top: '96.6964%', animationDuration: '19.9019s', animationDelay: '4.11151s'}}></div>
<div className="particle" style={{left: '44.1067%', top: '16.8356%', animationDuration: '14.5833s', animationDelay: '2.14408s'}}></div>
<div className="particle" style={{left: '74.3589%', top: '70.8379%', animationDuration: '13.7414s', animationDelay: '3.40305s'}}></div>
<div className="particle" style={{left: '35.0293%', top: '40.6091%', animationDuration: '12.1456s', animationDelay: '1.52823s'}}></div>
<div className="particle" style={{left: '53.1451%', top: '44.1152%', animationDuration: '12.1417s', animationDelay: '1.81026s'}}></div>
<div className="particle" style={{left: '94.1946%', top: '40.674%', animationDuration: '18.4573s', animationDelay: '0.916221s'}}></div>
<div className="particle" style={{left: '16.7984%', top: '5.75364%', animationDuration: '19.2582s', animationDelay: '0.644322s'}}></div>
<div className="particle" style={{left: '63.6692%', top: '14.0985%', animationDuration: '19.9103s', animationDelay: '0.16554s'}}></div>
<div className="particle" style={{left: '72.7116%', top: '35.452%', animationDuration: '17.2601s', animationDelay: '0.112307s'}}></div>
<div className="particle" style={{left: '19.2518%', top: '72.7274%', animationDuration: '10.6776s', animationDelay: '3.00924s'}}></div>
<div className="particle" style={{left: '44.4724%', top: '53.13%', animationDuration: '19.0098s', animationDelay: '2.11221s'}}></div>
<div className="particle" style={{left: '75.7516%', top: '29.7553%', animationDuration: '19.1172s', animationDelay: '2.37203s'}}></div>
<div className="particle" style={{left: '35.294%', top: '13.1351%', animationDuration: '10.0974s', animationDelay: '4.24697s'}}></div>
<div className="particle" style={{left: '6.85681%', top: '25.8115%', animationDuration: '13.145s', animationDelay: '1.03338s'}}></div>
<div className="particle" style={{left: '48.7006%', top: '62.7026%', animationDuration: '19.1005s', animationDelay: '0.198914s'}}></div>
<div className="particle" style={{left: '5.02402%', top: '13.3262%', animationDuration: '15.1743s', animationDelay: '1.22301s'}}></div>
<div className="particle" style={{left: '32.4397%', top: '87.9071%', animationDuration: '19.8755s', animationDelay: '3.8414s'}}></div>
<div className="particle" style={{left: '76.4751%', top: '1.91355%', animationDuration: '12.9502s', animationDelay: '3.28954s'}}></div>
<div className="particle" style={{left: '78.6067%', top: '54.5534%', animationDuration: '16.4632s', animationDelay: '4.50772s'}}></div>
<div className="particle" style={{left: '15.4803%', top: '71.4987%', animationDuration: '12.161s', animationDelay: '3.34618s'}}></div>
<div className="particle" style={{left: '72.4497%', top: '75.702%', animationDuration: '12.178s', animationDelay: '0.121671s'}}></div>
<div className="particle" style={{left: '33.7999%', top: '44.1835%', animationDuration: '13.3153s', animationDelay: '2.55363s'}}></div>
<div className="particle" style={{left: '89.8973%', top: '73.5889%', animationDuration: '11.6765s', animationDelay: '4.54596s'}}></div>
<div className="particle" style={{left: '19.1686%', top: '63.3125%', animationDuration: '18.8551s', animationDelay: '2.88499s'}}></div>
<div className="particle" style={{left: '34.0172%', top: '85.1289%', animationDuration: '17.523s', animationDelay: '3.70452s'}}></div>
<div className="particle" style={{left: '0.681532%', top: '91.192%', animationDuration: '14.5121s', animationDelay: '0.365892s'}}></div>
<div className="particle" style={{left: '83.3396%', top: '31.9047%', animationDuration: '15.5846s', animationDelay: '0.715129s'}}></div>
<div className="particle" style={{left: '7.18224%', top: '72.059%', animationDuration: '19.333s', animationDelay: '1.58979s'}}></div>
<div className="particle" style={{left: '47.6111%', top: '72.8049%', animationDuration: '15.8342s', animationDelay: '0.300525s'}}></div>
<div className="particle" style={{left: '18.5372%', top: '99.0891%', animationDuration: '16.7783s', animationDelay: '0.45059s'}}></div>
<div className="particle" style={{left: '94.6801%', top: '67.6006%', animationDuration: '16.1926s', animationDelay: '3.36425s'}}></div>
<div className="particle" style={{left: '94.1388%', top: '3.96619%', animationDuration: '18.6994s', animationDelay: '3.16446s'}}></div>
<div className="particle" style={{left: '88.9621%', top: '72.9968%', animationDuration: '11.6009s', animationDelay: '3.49087s'}}></div>
<div className="particle" style={{left: '5.39555%', top: '94.1666%', animationDuration: '16.1149s', animationDelay: '1.88144s'}}></div>
<div className="particle" style={{left: '71.9973%', top: '52.963%', animationDuration: '12.1724s', animationDelay: '0.657993s'}}></div>
<div className="particle" style={{left: '94.9926%', top: '69.9185%', animationDuration: '17.4233s', animationDelay: '0.322022s'}}></div>
<div className="particle" style={{left: '84.2112%', top: '6.22354%', animationDuration: '16.2571s', animationDelay: '3.22147s'}}></div>
<div className="particle" style={{left: '18.7866%', top: '82.8844%', animationDuration: '16.3084s', animationDelay: '1.72984s'}}></div>
<div className="particle" style={{left: '48.2076%', top: '7.0574%', animationDuration: '13.6169s', animationDelay: '4.4823s'}}></div>
<div className="particle" style={{left: '93.5624%', top: '76.0633%', animationDuration: '18.2061s', animationDelay: '2.6412s'}}></div>
<div className="particle" style={{left: '45.6832%', top: '95.0972%', animationDuration: '17.2133s', animationDelay: '0.30312s'}}></div>
<div className="particle" style={{left: '16.5606%', top: '8.86183%', animationDuration: '14.9184s', animationDelay: '3.16548s'}}></div>
<div className="particle" style={{left: '13.3797%', top: '29.2594%', animationDuration: '11.7298s', animationDelay: '2.23985s'}}></div>
<div className="particle" style={{left: '34.1278%', top: '16.1538%', animationDuration: '15.2037s', animationDelay: '0.752223s'}}></div>
<div className="particle" style={{left: '92.1523%', top: '98.1312%', animationDuration: '16.1821s', animationDelay: '0.0599819s'}}></div>
<div className="particle" style={{left: '42.3898%', top: '92.3418%', animationDuration: '12.3247s', animationDelay: '4.47834s'}}></div>
<div className="particle" style={{left: '28.4411%', top: '0.528048%', animationDuration: '10.1035s', animationDelay: '0.71808s'}}></div>
<div className="particle" style={{left: '12.0867%', top: '35.2351%', animationDuration: '19.5369s', animationDelay: '0.0367657s'}}></div>
<div className="particle" style={{left: '88.9516%', top: '61.7264%', animationDuration: '13.365s', animationDelay: '3.00366s'}}></div>
<div className="particle" style={{left: '81.0655%', top: '7.53807%', animationDuration: '12.6573s', animationDelay: '2.13852s'}}></div>
<div className="particle" style={{left: '47.9112%', top: '36.9503%', animationDuration: '17.183s', animationDelay: '4.21633s'}}></div>
<div className="particle" style={{left: '23.3022%', top: '95.0606%', animationDuration: '13.7235s', animationDelay: '2.05023s'}}></div>
<div className="particle" style={{left: '79.9067%', top: '65.1718%', animationDuration: '11.8414s', animationDelay: '0.558662s'}}></div>
<div className="particle" style={{left: '35.0656%', top: '8.82668%', animationDuration: '14.6748s', animationDelay: '2.1124s'}}></div>
<div className="particle" style={{left: '84.121%', top: '14.5808%', animationDuration: '11.9651s', animationDelay: '0.509464s'}}></div>
<div className="particle" style={{left: '8.19123%', top: '47.079%', animationDuration: '18.3221s', animationDelay: '1.86628s'}}></div>
<div className="particle" style={{left: '61.5778%', top: '55.1087%', animationDuration: '14.6394s', animationDelay: '3.53177s'}}></div>
<div className="particle" style={{left: '76.521%', top: '49.4593%', animationDuration: '18.9217s', animationDelay: '4.60965s'}}></div>
<div className="particle" style={{left: '27.443%', top: '39.1746%', animationDuration: '15.9189s', animationDelay: '4.78103s'}}></div>
<div className="particle" style={{left: '89.5596%', top: '14.5238%', animationDuration: '18.2729s', animationDelay: '0.85283s'}}></div>
<div className="particle" style={{left: '6.18862%', top: '18.6374%', animationDuration: '13.8579s', animationDelay: '4.24881s'}}></div>
<div className="particle" style={{left: '36.2614%', top: '7.35996%', animationDuration: '19.9259s', animationDelay: '4.30395s'}}></div>
<div className="particle" style={{left: '65.8594%', top: '1.27275%', animationDuration: '18.8654s', animationDelay: '1.3006s'}}></div>
<div className="particle" style={{left: '84.9765%', top: '73.6384%', animationDuration: '18.0646s', animationDelay: '2.79503s'}}></div>
<div className="particle" style={{left: '32.2714%', top: '42.273%', animationDuration: '19.4685s', animationDelay: '4.22307s'}}></div>
<div className="particle" style={{left: '64.5769%', top: '93.2828%', animationDuration: '12.5426s', animationDelay: '4.22234s'}}></div>
<div className="particle" style={{left: '53.3324%', top: '48.0693%', animationDuration: '12.34s', animationDelay: '3.25906s'}}></div>
<div className="particle" style={{left: '88.5312%', top: '85.5127%', animationDuration: '15.3771s', animationDelay: '3.01017s'}}></div>
<div className="particle" style={{left: '84.9125%', top: '70.7175%', animationDuration: '11.6061s', animationDelay: '1.91674s'}}></div>
<div className="particle" style={{left: '93.8134%', top: '40.1793%', animationDuration: '16.8257s', animationDelay: '0.0584824s'}}></div>
<div className="particle" style={{left: '0.182036%', top: '99.6273%', animationDuration: '16.6932s', animationDelay: '0.746801s'}}></div>
<div className="particle" style={{left: '90.6222%', top: '21.2752%', animationDuration: '16.7256s', animationDelay: '4.67833s'}}></div>
<div className="particle" style={{left: '77.1898%', top: '81.9933%', animationDuration: '13.5854s', animationDelay: '2.63027s'}}></div>
<div className="particle" style={{left: '52.2363%', top: '38.9697%', animationDuration: '15.3781s', animationDelay: '2.30347s'}}></div>
<div className="particle" style={{left: '82.7614%', top: '89.5152%', animationDuration: '14.3496s', animationDelay: '4.58203s'}}></div>
<div className="particle" style={{left: '14.1124%', top: '28.9078%', animationDuration: '19.4876s', animationDelay: '4.93575s'}}></div>
<div className="particle" style={{left: '23.2492%', top: '33.6594%', animationDuration: '15.7842s', animationDelay: '0.523023s'}}></div>
<div className="particle" style={{left: '33.4651%', top: '69.6244%', animationDuration: '15.2883s', animationDelay: '0.0771223s'}}></div>
<div className="particle" style={{left: '2.94686%', top: '8.36576%', animationDuration: '12.3689s', animationDelay: '3.9729s'}}></div>
<div className="particle" style={{left: '45.6923%', top: '87.0426%', animationDuration: '16.7036s', animationDelay: '2.36089s'}}></div>
<div className="particle" style={{left: '33.3059%', top: '40.362%', animationDuration: '11.8113s', animationDelay: '3.29526s'}}></div>
<div className="particle" style={{left: '22.8837%', top: '41.231%', animationDuration: '10.4761s', animationDelay: '4.15418s'}}></div>
<div className="particle" style={{left: '41.8731%', top: '38.4416%', animationDuration: '11.9032s', animationDelay: '1.56901s'}}></div>
<div className="particle" style={{left: '52.3291%', top: '84.0616%', animationDuration: '19.2683s', animationDelay: '4.5141s'}}></div>
<div className="particle" style={{left: '93.0601%', top: '38.4147%', animationDuration: '12.4979s', animationDelay: '2.58138s'}}></div>
<div className="particle" style={{left: '40.9168%', top: '25.6916%', animationDuration: '16.923s', animationDelay: '4.73638s'}}></div>
<div className="particle" style={{left: '82.4482%', top: '53.5413%', animationDuration: '11.6459s', animationDelay: '1.86786s'}}></div>
<div className="particle" style={{left: '73.9634%', top: '49.8553%', animationDuration: '12.9236s', animationDelay: '0.208007s'}}></div>
<div className="particle" style={{left: '92.4972%', top: '41.5499%', animationDuration: '18.8829s', animationDelay: '4.83675s'}}></div>
<div className="particle" style={{left: '79.6046%', top: '7.93917%', animationDuration: '13.1319s', animationDelay: '1.61072s'}}></div>
<div className="particle" style={{left: '40.3639%', top: '31.558%', animationDuration: '13.492s', animationDelay: '2.67144s'}}></div>
<div className="particle" style={{left: '56.8021%', top: '92.8614%', animationDuration: '12.0465s', animationDelay: '0.355225s'}}></div>
<div className="particle" style={{left: '84.7255%', top: '57.1381%', animationDuration: '12.4136s', animationDelay: '0.039146s'}}></div>
<div className="particle" style={{left: '85.5151%', top: '58.7745%', animationDuration: '12.5601s', animationDelay: '4.24162s'}}></div>
<div className="particle" style={{left: '54.4947%', top: '13.1018%', animationDuration: '13.26s', animationDelay: '2.8261s'}}></div>
<div className="particle" style={{left: '9.28298%', top: '79.8883%', animationDuration: '19.4859s', animationDelay: '2.2097s'}}></div>
<div className="particle" style={{left: '8.95466%', top: '9.54604%', animationDuration: '19.3374s', animationDelay: '1.20449s'}}></div>
<div className="particle" style={{left: '2.91034%', top: '12.709%', animationDuration: '13.742s', animationDelay: '0.370232s'}}></div>
<div className="particle" style={{left: '29.0947%', top: '91.2595%', animationDuration: '11.0355s', animationDelay: '3.03561s'}}></div>
<div className="particle" style={{left: '14.2568%', top: '93.9358%', animationDuration: '19.8859s', animationDelay: '4.07169s'}}></div>
<div className="particle" style={{left: '90.6639%', top: '24.173%', animationDuration: '12.4345s', animationDelay: '4.11209s'}}></div>
<div className="particle" style={{left: '86.8762%', top: '42.6713%', animationDuration: '14.3077s', animationDelay: '2.09294s'}}></div>
<div className="particle" style={{left: '37.0588%', top: '86.3941%', animationDuration: '17.8825s', animationDelay: '4.57552s'}}></div>
<div className="particle" style={{left: '78.08%', top: '69.4573%', animationDuration: '16.9895s', animationDelay: '2.6667s'}}></div>
<div className="particle" style={{left: '88.4872%', top: '65.6081%', animationDuration: '13.2689s', animationDelay: '2.34639s'}}></div>
<div className="particle" style={{left: '28.6278%', top: '14.2694%', animationDuration: '18.695s', animationDelay: '3.64046s'}}></div>
<div className="particle" style={{left: '3.57581%', top: '6.56927%', animationDuration: '12.4622s', animationDelay: '3.45804s'}}></div>
<div className="particle" style={{left: '43.9542%', top: '0.0775308%', animationDuration: '12.3993s', animationDelay: '4.96629s'}}></div>
<div className="particle" style={{left: '63.4342%', top: '55.3444%', animationDuration: '14.9974s', animationDelay: '3.32477s'}}></div><div className="particle" style={{left: '2.83176%', top: '96.8495%', animationDuration: '16.9903s', animationDelay: '2.41786s'}}></div><div className="particle" style={{left: '42.1438%', top: '73.5474%', animationDuration: '17.1783s', animationDelay: '2.06389s'}}></div><div className="particle" style={{left: '9.49575%', top: '36.0683%', animationDuration: '18.7116s', animationDelay: '0.752533s'}}></div><div className="particle" style={{left: '80.8801%', top: '37.8562%', animationDuration: '18.0311s', animationDelay: '0.772884s'}}></div><div className="particle" style={{left: '82.9138%', top: '63.9242%', animationDuration: '19.8819s', animationDelay: '4.86306s'}}></div><div className="particle" style={{left: '29.4715%', top: '93.278%', animationDuration: '11.0805s', animationDelay: '3.13437s'}}></div><div className="particle" style={{left: '9.80241%', top: '59.6737%', animationDuration: '12.7437s', animationDelay: '1.3391s'}}></div><div className="particle" style={{left: '61.3227%', top: '12.0877%', animationDuration: '10.8869s', animationDelay: '1.65117s'}}></div><div className="particle" style={{left: '43.7311%', top: '21.196%', animationDuration: '16.3898s', animationDelay: '1.57167s'}}></div><div className="particle" style={{left: '21.5025%', top: '52.3616%', animationDuration: '12.1713s', animationDelay: '2.12501s'}}></div><div className="particle" style={{left: '18.0996%', top: '96.7755%', animationDuration: '18.9502s', animationDelay: '2.77643s'}}></div><div className="particle" style={{left: '22.3342%', top: '43.3219%', animationDuration: '14.4966s', animationDelay: '0.254052s'}}></div><div className="particle" style={{left: '94.1163%', top: '16.9099%', animationDuration: '17.6864s', animationDelay: '4.16755s'}}></div><div className="particle" style={{left: '43.2284%', top: '75.2327%', animationDuration: '11.1054s', animationDelay: '2.68835s'}}></div><div className="particle" style={{left: '34.5453%', top: '81.9041%', animationDuration: '17.1891s', animationDelay: '2.29843s'}}></div><div className="particle" style={{left: '89.5848%', top: '75.823%', animationDuration: '10.2644s', animationDelay: '3.14982s'}}></div><div className="particle" style={{left: '31.4025%', top: '77.4953%', animationDuration: '14.3063s', animationDelay: '2.82887s'}}></div><div className="particle" style={{left: '46.7746%', top: '39.152%', animationDuration: '18.4072s', animationDelay: '1.94235s'}}></div><div className="particle" style={{left: '80.4508%', top: '63.6799%', animationDuration: '11.7252s', animationDelay: '3.67601s'}}></div><div className="particle" style={{left: '69.1115%', top: '77.4476%', animationDuration: '13.3642s', animationDelay: '1.7739s'}}></div><div className="particle" style={{left: '75.0303%', top: '20.1528%', animationDuration: '13.509s', animationDelay: '1.29528s'}}></div><div className="particle" style={{left: '57.4567%', top: '33.9327%', animationDuration: '17.5439s', animationDelay: '1.55575s'}}></div><div className="particle" style={{left: '24.8623%', top: '49.1445%', animationDuration: '17.8061s', animationDelay: '0.330969s'}}></div><div className="particle" style={{left: '99.9757%', top: '3.54864%', animationDuration: '17.2036s', animationDelay: '4.77842s'}}></div><div className="particle" style={{left: '57.5857%', top: '81.8605%', animationDuration: '11.0829s', animationDelay: '0.892776s'}}></div><div className="particle" style={{left: '34.5466%', top: '80.1031%', animationDuration: '10.624s', animationDelay: '3.4165s'}}></div><div className="particle" style={{left: '80.2907%', top: '7.83476%', animationDuration: '17.9343s', animationDelay: '0.295252s'}}></div><div className="particle" style={{left: '94.8568%', top: '66.347%', animationDuration: '16.461s', animationDelay: '4.2369s'}}></div><div className="particle" style={{left: '18.3771%', top: '36.2542%', animationDuration: '16.2605s', animationDelay: '0.166853s'}}></div><div className="particle" style={{left: '75.5206%', top: '43.5447%', animationDuration: '16.3935s', animationDelay: '3.27408s'}}></div><div className="particle" style={{left: '69.3619%', top: '32.6822%', animationDuration: '13.8312s', animationDelay: '2.52125s'}}></div><div className="particle" style={{left: '21.6732%', top: '80.0073%', animationDuration: '17.8568s', animationDelay: '3.50778s'}}></div><div className="particle" style={{left: '99.3639%', top: '17.0927%', animationDuration: '10.6565s', animationDelay: '4.4695s'}}></div><div className="particle" style={{left: '82.7637%', top: '48.5442%', animationDuration: '14.0742s', animationDelay: '1.51511s'}}></div><div className="particle" style={{left: '94.4506%', top: '62.6753%', animationDuration: '18.6244s', animationDelay: '2.91722s'}}></div><div className="particle" style={{left: '4.57405%', top: '19.5723%', animationDuration: '12.2696s', animationDelay: '2.05412s'}}></div><div className="particle" style={{left: '1.06009%', top: '22.7077%', animationDuration: '11.5544s', animationDelay: '4.73831s'}}></div><div className="particle" style={{left: '32.9525%', top: '58.036%', animationDuration: '19.1271s', animationDelay: '1.55031s'}}></div><div className="particle" style={{left: '13.1961%', top: '95.7123%', animationDuration: '16.3722s', animationDelay: '1.11331s'}}></div><div className="particle" style={{left: '34.272%', top: '28.3524%', animationDuration: '17.4055s', animationDelay: '2.25155s'}}></div><div className="particle" style={{left: '0.784788%', top: '61.7801%', animationDuration: '18.1806s', animationDelay: '1.07722s'}}></div><div className="particle" style={{left: '70.5551%', top: '51.0042%', animationDuration: '14.3173s', animationDelay: '2.3808s'}}></div><div className="particle" style={{left: '67.7687%', top: '49.9752%', animationDuration: '17.5907s', animationDelay: '1.87964s'}}></div><div className="particle" style={{left: '26.0742%', top: '31.7278%', animationDuration: '15.2763s', animationDelay: '3.68301s'}}></div><div className="particle" style={{left: '95.4049%', top: '11.5004%', animationDuration: '11.3338s', animationDelay: '0.440351s'}}></div><div className="particle" style={{left: '30.9456%', top: '79.1763%', animationDuration: '15.2218s', animationDelay: '1.20277s'}}></div><div className="particle" style={{left: '37.1488%', top: '32.6896%', animationDuration: '12.3582s', animationDelay: '0.482772s'}}></div><div className="particle" style={{left: '27.8387%', top: '24.363%', animationDuration: '18.4323s', animationDelay: '3.18845s'}}></div><div className="particle" style={{left: '70.961%', top: '50.0499%', animationDuration: '18.8889s', animationDelay: '1.5792s'}}></div><div className="particle" style={{left: '28.9137%', top: '30.6028%', animationDuration: '18.5895s', animationDelay: '3.41743s'}}></div><div className="particle" style={{left: '14.5153%', top: '73.014%', animationDuration: '10.8693s', animationDelay: '1.40161s'}}></div><div className="particle" style={{left: '12.2377%', top: '65.3682%', animationDuration: '13.277s', animationDelay: '3.18339s'}}></div><div className="particle" style={{left: '69.1137%', top: '11.0716%', animationDuration: '19.3117s', animationDelay: '2.26501s'}}></div><div className="particle" style={{left: '80.7922%', top: '79.3336%', animationDuration: '15.318s', animationDelay: '3.9746s'}}></div><div className="particle" style={{left: '36.9552%', top: '97.6842%', animationDuration: '13.1858s', animationDelay: '4.44813s'}}></div><div className="particle" style={{left: '25.571%', top: '39.7861%', animationDuration: '15.7107s', animationDelay: '1.61182s'}}></div><div className="particle" style={{left: '27.5506%', top: '32.6893%', animationDuration: '19.971s', animationDelay: '3.86218s'}}></div><div className="particle" style={{left: '6.40315%', top: '16.745%', animationDuration: '10.262s', animationDelay: '4.89722s'}}></div><div className="particle" style={{left: '62.0067%', top: '81.0071%', animationDuration: '14.3631s', animationDelay: '4.32792s'}}></div><div className="particle" style={{left: '86.5809%', top: '44.4293%', animationDuration: '11.2528s', animationDelay: '2.22372s'}}></div><div className="particle" style={{left: '67.8082%', top: '86.6518%', animationDuration: '12.8159s', animationDelay: '2.20411s'}}></div><div className="particle" style={{left: '8.63446%', top: '8.22413%', animationDuration: '11.4996s', animationDelay: '4.2332s'}}></div><div className="particle" style={{left: '83.8669%', top: '39.5038%', animationDuration: '17.6561s', animationDelay: '0.636283s'}}></div><div className="particle" style={{left: '63.4256%', top: '39.278%', animationDuration: '19.7287s', animationDelay: '1.3646s'}}></div><div className="particle" style={{left: '45.1871%', top: '53.2961%', animationDuration: '17.0907s', animationDelay: '4.13953s'}}></div><div className="particle" style={{left: '52.0974%', top: '39.1398%', animationDuration: '10.3922s', animationDelay: '2.3991s'}}></div><div className="particle" style={{left: '65.9385%', top: '84.2647%', animationDuration: '18.8841s', animationDelay: '0.52444s'}}></div><div className="particle" style={{left: '6.22589%', top: '64.8988%', animationDuration: '13.5271s', animationDelay: '2.96776s'}}></div><div className="particle" style={{left: '84.735%', top: '94.3255%', animationDuration: '16.8959s', animationDelay: '2.82342s'}}></div><div className="particle" style={{left: '99.7262%', top: '49.5128%', animationDuration: '19.4672s', animationDelay: '4.14204s'}}></div><div className="particle" style={{left: '85.3324%', top: '48.4785%', animationDuration: '12.6077s', animationDelay: '2.2587s'}}></div><div className="particle" style={{left: '31.2248%', top: '1.35383%', animationDuration: '14.6668s', animationDelay: '3.31537s'}}></div><div className="particle" style={{left: '29.4459%', top: '59.271%', animationDuration: '18.9244s', animationDelay: '1.23235s'}}></div><div className="particle" style={{left: '8.43147%', top: '87.0255%', animationDuration: '14.4293s', animationDelay: '2.99754s'}}></div><div className="particle" style={{left: '60.482%', top: '28.1163%', animationDuration: '13.7937s', animationDelay: '0.814171s'}}></div><div className="particle" style={{left: '77.4834%', top: '87.0428%', animationDuration: '13.8694s', animationDelay: '3.82642s'}}></div><div className="particle" style={{left: '94.2435%', top: '71.4185%', animationDuration: '13.6011s', animationDelay: '3.10639s'}}></div><div className="particle" style={{left: '54.5689%', top: '77.6403%', animationDuration: '11.4845s', animationDelay: '0.0982989s'}}></div><div className="particle" style={{left: '85.6238%', top: '9.16512%', animationDuration: '16.2238s', animationDelay: '1.93563s'}}></div></div>

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)'}}></div>

<nav className="relative z-30 flex items-center justify-between px-6 lg:px-10 py-5 mx-6 lg:mx-10 rounded-lg border border-cyan-500/10 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.05))', border: '1px solid rgba(34, 211, 238, 0.4)', boxShadow: '0 0 15px rgba(34,211,238,0.3)'}}>
<iconify-icon icon="solar:globus-linear" style={{fontSize: '1.25rem', color: '#22D3EE'}}></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-wider font-mono">
            SPINNAKER SCA
          </span>
</div>
<div className="hidden lg:flex gap-8 text-base text-zinc-400 tracking-widest font-mono gap-x-8 gap-y-8 items-center">
<a className="hover:text-cyan-400 transition" href="#solutions">
            SOLUTIONS
          </a>
<a className="hover:text-cyan-400 transition" href="#lenses">FRAMEWORK</a>
<a className="hover:text-cyan-400 transition" href="#case-story">
            CASE STORY
          </a>
<a className="hover:text-cyan-400 transition" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="glow-btn text-base font-bold text-black tracking-widest font-mono rounded-md px-4 py-2.5" href="#calendly">
            BOOK YOUR CALL
          </a>
</div>
</nav>

<div className="relative z-20 flex flex-col items-center text-center px-6 mt-12 lg:mt-16">
<span className="text-sm text-cyan-400 tracking-widest font-mono mb-6">
          FIVE LENSES FRAMEWORK
        </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-tight">
          Powering the future
          <br/>
          with
          <span className="cyan-glow italic">agile</span>
          supply chains
        </h1>
<p className="leading-relaxed text-lg text-zinc-400 max-w-xl mt-6">
          We build, implement, and run resilient supply chains for demanding
          brands, planning in minutes, not days.
        </p>

<div className="mt-8 w-full max-w-3xl mx-auto border border-cyan-500/20 rounded-lg overflow-hidden bg-zinc-950/50 backdrop-blur-md">
<div className="relative w-full" style={{paddingTop: '56.25%'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-base text-zinc-500 tracking-widest">
<iconify-icon className="mb-2 opacity-80" icon="solar:play-circle-linear" style={{fontSize: '3rem', color: '#22d3ee'}}></iconify-icon>
<span className="font-mono text-xs text-zinc-500 tracking-widest">
                [ VSL VIDEO PLACEHOLDER - INSERT LATER ]
              </span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-8 mb-16">
<a className="glow-btn flex items-center gap-2 text-lg font-semibold text-black tracking-wide font-mono rounded-md px-6 py-3.5" href="#calendly">
            BOOK A CALL
            <iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{fontSize: '1rem', color: 'rgb(0, 0, 0)'}} width="16"></iconify-icon>
</a>
<a className="outline-btn flex items-center gap-2 text-lg text-cyan-300 tracking-widest font-mono rounded-md px-6 py-3.5" href="#case-story">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1rem'}}></iconify-icon>
            SEE CLIENT RESULTS
          </a>
</div>
</div>

<div className="relative z-10 mt-24 mb-24 lg:mt-32 lg:mb-32 px-8 sm:px-16 lg:px-24 flex items-center justify-center" id="coreVisual">

<svg className="absolute inset-0 w-full h-full pointer-events-none animate-pulse" preserveaspectratio="xMidYMid meet" viewbox="0 0 1400 700">

<path className="conn-line" d="M 200,180 L 500,330"></path>
<path className="conn-line" d="M 200,340 L 500,360"></path>
<path className="conn-line" d="M 200,500 L 500,400"></path>

<path className="conn-line" d="M 1200,180 L 900,330"></path>
<path className="conn-line" d="M 1200,500 L 900,400"></path>

<circle fill="#22d3ee" filter="drop-shadow(0 0 4px #22d3ee)" r="3">
<animatemotion dur="3s" path="M 200,180 L 500,330" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#22d3ee" filter="drop-shadow(0 0 4px #22d3ee)" r="3">
<animatemotion begin="0.5s" dur="3s" path="M 200,340 L 500,360" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#22d3ee" filter="drop-shadow(0 0 4px #22d3ee)" r="3">
<animatemotion begin="1s" dur="3s" path="M 200,500 L 500,400" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#22d3ee" filter="drop-shadow(0 0 4px #22d3ee)" r="3">
<animatemotion begin="0.3s" dur="3s" path="M 1200,180 L 900,330" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#22d3ee" filter="drop-shadow(0 0 4px #22d3ee)" r="3">
<animatemotion begin="1.3s" dur="3s" path="M 1200,500 L 900,400" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="absolute left-2 lg:left-12 top-0 hidden md:flex flex-col gap-12 z-20">
<div className="float-node flex items-center gap-4 cursor-pointer max-w-[320px]">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:route-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="">
<div className="font-mono text-xl tracking-widest text-cyan-400">
                PEOPLE
              </div>
<div className="text-lg text-zinc-400 mt-1 leading-relaxed">
                The right team, roles, and training
              </div>
</div>
</div>
<div className="float-node flex items-center gap-4 cursor-pointer max-w-[320px]">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:calendar-date-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div>
<div className="font-mono text-xl tracking-widest text-cyan-400">
                PROCESS
              </div>
<div className="text-lg text-zinc-400 mt-1 leading-relaxed">
                Architected, aligned, root issues fixed
              </div>
</div>
</div>
<div className="float-node flex items-center gap-4 cursor-pointer max-w-[320px]">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:box-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="">
<div className="font-mono text-xl tracking-widest text-cyan-400">
                TECHNOLOGY
              </div>
<div className="text-lg text-zinc-400 mt-1 leading-relaxed">
                Right tools, standardized data
              </div>
</div>
</div>
</div>

<div className="absolute right-2 lg:right-12 top-0 hidden md:flex flex-col gap-12 z-20 items-end">
<div className="float-node flex items-center gap-4 cursor-pointer max-w-[320px] flex-row-reverse">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:delivery-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-right">
<div className="font-mono text-xl tracking-widest text-cyan-400">
                POLICIES
              </div>
<div className="text-lg text-zinc-400 mt-1 leading-relaxed">
                Rules that match your objectives
              </div>
</div>
</div>
<div className="float-node flex items-center gap-4 cursor-default max-w-[220px] flex-row-reverse opacity-0 pointer-events-none">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-right">
<div className="font-mono text-base tracking-widest text-cyan-400">
                SUPPLY CHAIN AI
              </div>
<div className="text-base text-zinc-400 mt-1 leading-relaxed">
                Decisions powered by real data
              </div>
</div>
</div>
<div className="float-node flex items-center gap-4 cursor-pointer max-w-[320px] flex-row-reverse">
<div className="node-icon w-12 h-12 flex items-center justify-center rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(34,211,238,0.05)'}}>
<iconify-icon icon="solar:map-arrow-square-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-right">
<div className="font-mono text-xl tracking-widest text-cyan-400">
                METRICS
              </div>
<div className="text-lg text-zinc-400 mt-1 leading-relaxed">
                KPIs that define real success
              </div>
</div>
</div>
</div>

<div className="relative h-[620px] flex flex-col items-center justify-center" id="coreParallax" style={{transition: 'transform 0.3s ease-out'}}>

<div className="absolute inset-0 pointer-events-none" id="codeFloat">
<div className="code-line" style={{left: '19.3621%', bottom: '0px', animationDuration: '9.2129s'}}>
              PLAN::RUN::BY_APS
            </div>
<div className="code-line" style={{left: '51.1503%', bottom: '0px', animationDuration: '7.11035s'}}>
              MANHATTAN_WMS_SYNC
            </div>
<div className="code-line" style={{left: '65.5869%', bottom: '0px', animationDuration: '8.01148s'}}>
              MANHATTAN_WMS_SYNC
            </div>
<div className="code-line" style={{left: '32.6334%', bottom: '0px', animationDuration: '8.41982s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '74.2151%', bottom: '0px', animationDuration: '8.46026s'}}>
              ORV::ACCURACY::+24%
            </div>
<div className="code-line" style={{left: '89.0129%', bottom: '0px', animationDuration: '6.51515s'}}>
              DATA_INGEST::REAL_TIME
            </div>
<div className="code-line" style={{left: '34.3374%', bottom: '0px', animationDuration: '6.10615s'}}>
              AUTO_ROUTING_SUCCESS
            </div>
<div className="code-line" style={{left: '48.5742%', bottom: '0px', animationDuration: '7.00931s'}}>
              NETWORK_SYNC_OK
            </div>
<div className="code-line" style={{left: '39.8577%', bottom: '0px', animationDuration: '7.94206s'}}>
              LENS_2::PROCESS_GAP
            </div>
<div className="code-line" style={{left: '63.3138%', bottom: '0px', animationDuration: '9.18038s'}}>
              LENS_2::PROCESS_GAP
            </div>
<div className="code-line" style={{left: '74.3184%', bottom: '0px', animationDuration: '7.30939s'}}>
              BLUE_YONDER_APS::ACTIVE
            </div>
<div className="code-line" style={{left: '87.8537%', bottom: '0px', animationDuration: '8.47577s'}}>
              DATA_INGEST::REAL_TIME
            </div>
<div className="code-line" style={{left: '43.7322%', bottom: '0px', animationDuration: '9.09879s'}}>
              DATA_INGEST::REAL_TIME
            </div>
<div className="code-line" style={{left: '45.1869%', bottom: '0px', animationDuration: '7.31186s'}}>
              LENS_2::PROCESS_GAP
            </div>
<div className="code-line" style={{left: '10.0078%', bottom: '0px', animationDuration: '7.3519s'}}>
              NETWORK_SYNC_OK
            </div>
<div className="code-line" style={{left: '76.1949%', bottom: '0px', animationDuration: '8.8723s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '56.9264%', bottom: '0px', animationDuration: '7.72734s'}}>
              KPI::INVENTORY_OPTIMIZED
            </div>
<div className="code-line" style={{left: '27.8184%', bottom: '0px', animationDuration: '8.06789s'}}>
              SUPPLY_CHAIN_AI_DEPLOY
            </div>
<div className="code-line" style={{left: '78.7482%', bottom: '0px', animationDuration: '9.66369s'}}>
              SUPPLY_CHAIN_AI_DEPLOY
            </div>
<div className="code-line" style={{left: '57.8893%', bottom: '0px', animationDuration: '9.1556s'}}>
              SYS::REPLAN_MINUTES
            </div>
<div className="code-line" style={{left: '68.8212%', bottom: '0px', animationDuration: '8.07961s'}}>
              AUTO_ROUTING_SUCCESS
            </div>
<div className="code-line" style={{left: '41.9081%', bottom: '0px', animationDuration: '6.17664s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '40.8084%', bottom: '0px', animationDuration: '9.68382s'}}>
              LENS_1::DIAGNOSED
            </div>
<div className="code-line" style={{left: '20.3607%', bottom: '0px', animationDuration: '9.16644s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '79.2677%', bottom: '0px', animationDuration: '6.46436s'}}>
              LENS_1::DIAGNOSED
            </div>
<div className="code-line" style={{left: '47.6501%', bottom: '0px', animationDuration: '9.93127s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '70.0727%', bottom: '0px', animationDuration: '9.82592s'}}>
              DATA_INGEST::REAL_TIME
            </div>
<div className="code-line" style={{left: '12.5274%', bottom: '0px', animationDuration: '6.22013s'}}>
              BLUE_YONDER_APS::ACTIVE
            </div>
<div className="code-line" style={{left: '64.5494%', bottom: '0px', animationDuration: '8.35405s'}}>
              SYS::REPLAN_MINUTES
            </div>
<div className="code-line" style={{left: '82.6551%', bottom: '0px', animationDuration: '7.41936s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '25.2001%', bottom: '0px', animationDuration: '7.48122s'}}>
              KINAXIS_LINK::CONNECTED
            </div>
<div className="code-line" style={{left: '34.8166%', bottom: '0px', animationDuration: '8.98979s'}}>
              LENS_2::PROCESS_GAP
            </div>
<div className="code-line" style={{left: '63.9653%', bottom: '0px', animationDuration: '9.78414s'}}>
              KPI::INVENTORY_OPTIMIZED
            </div>
<div className="code-line" style={{left: '18.2659%', bottom: '0px', animationDuration: '6.84428s'}}>
              SUPPLY_CHAIN_AI_DEPLOY
            </div>
<div className="code-line" style={{left: '49.7129%', bottom: '0px', animationDuration: '8.3163s'}}>
              DATA_INGEST::REAL_TIME
            </div>
<div className="code-line" style={{left: '72.5596%', bottom: '0px', animationDuration: '7.05547s'}}>DATA_INGEST::REAL_TIME</div><div className="code-line" style={{left: '25.8956%', bottom: '0px', animationDuration: '9.52218s'}}>AUTO_ROUTING_SUCCESS</div></div>

<div className="absolute top-12 z-30 px-4 py-2 rounded-md" style={{border: '1px solid rgba(34, 211, 238, 0.4)', background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)'}}>
<div className="text-xl text-cyan-400 tracking-widest font-mono">
              FIVE LENSES FRAMEWORK
            </div>
<div className="text-lg text-zinc-500 font-mono text-center mt-0.5">
              SPINNAKER METHODOLOGY
            </div>
</div>

<div className="cube-container relative" style={{marginTop: '20px'}}>
<div className="cube">
<div className="cube-face front"></div>
<div className="cube-face back"></div>
<div className="cube-face right"></div>
<div className="cube-face left"></div>
<div className="cube-face top"></div>
<div className="cube-face bottom"></div>
</div>
<div className="energy-core">
<div className="energy-pulse"></div>
</div>

<div className="orbit-ring" style={{width: '440px', height: '440px', left: '-150px', top: '-150px'}}></div>
<div className="orbit-ring-2" style={{width: '520px', height: '520px', left: '-190px', top: '-190px'}}></div>
</div>

<div className="relative -mt-8 flex flex-col items-center">
<div className="platform-layer rounded-md" style={{width: '320px', height: '18px'}}></div>
<div className="platform-layer rounded-md mt-1" style={{width: '380px', height: '22px', background: 'linear-gradient(180deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))'}}></div>
<div className="platform-layer rounded-md mt-1" style={{width: '460px', height: '26px'}}></div>
</div>

<div className="absolute left-8 top-32 w-8 h-8 platform-layer rounded animate-pulse"></div>
<div className="absolute right-8 top-32 w-8 h-8 platform-layer rounded animate-pulse"></div>
<div className="absolute left-16 bottom-24 w-6 h-6 platform-layer rounded animate-pulse"></div>
<div className="absolute right-16 bottom-24 w-6 h-6 platform-layer rounded animate-pulse"></div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 mt-16 mb-24 py-8 border-y border-cyan-500/10 bg-zinc-950/20 backdrop-blur-sm">
<div className="font-mono text-base tracking-widest text-zinc-500">
<span className="block text-center mb-10 text-zinc-500 tracking-widest font-mono">
            TRUSTED CONSULTING PARTNERS
          </span>
<div className="flex flex-wrap text-sm font-semibold text-zinc-300 tracking-wide font-mono gap-x-12 gap-y-6 items-center justify-center">
<span className="hover:text-cyan-400 transition">PUBLICIS SAPIENT</span>
<span className="text-zinc-700">•</span>
<span className="hover:text-cyan-400 transition">
              SUPPLYCHAINBRAIN TOP PARTNER
            </span>
<span className="text-zinc-700">•</span>
<span className="hover:text-cyan-400 transition">
              THE CONSULTING REPORT TOP 25
            </span>
<span className="text-zinc-700">•</span>
<span className="hover:text-cyan-400 transition">VAULT TOP 50</span>
<span className="text-zinc-700">•</span>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lg text-cyan-400 tracking-widest font-mono">
            OPERATIONAL REALITY
          </span>
<h2 className="text-3xl font-semibold tracking-tight mt-3 md:text-5xl">
            Why your operations lag
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-lg border border-cyan-500/10 bg-zinc-950/40 hover:border-cyan-500/30 transition">
<iconify-icon className="mb-4" icon="solar:clock-circle-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="uppercase text-xl text-cyan-400 tracking-widest font-mono mb-2">
              Planning takes days
            </h3>
<p className="leading-relaxed text-base text-zinc-400">
              Planners stuck in spreadsheets while the market moves in hours.
            </p>
</div>
<div className="p-6 rounded-lg border border-cyan-500/10 bg-zinc-950/40 hover:border-cyan-500/30 transition">
<iconify-icon className="mb-4" icon="solar:database-fail-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="uppercase text-xl text-cyan-400 tracking-widest font-mono mb-2">
              Stale data
            </h3>
<p className="leading-relaxed text-base text-zinc-400">
              Forecasting tomorrow with last quarter's stagnant numbers.
            </p>
</div>
<div className="p-6 rounded-lg border border-cyan-500/10 bg-zinc-950/40 hover:border-cyan-500/30 transition">
<iconify-icon className="mb-4" icon="solar:shield-warning-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="uppercase text-xl text-cyan-400 tracking-widest font-mono mb-2">
              Tariff exposure
            </h3>
<p className="leading-relaxed text-base text-zinc-400">
              One policy shift shatters your entire cost model.
            </p>
</div>
<div className="p-6 rounded-lg border border-cyan-500/10 bg-zinc-950/40 hover:border-cyan-500/30 transition">
<iconify-icon className="mb-4" icon="solar:box-minimalistic-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="uppercase text-xl text-cyan-400 tracking-widest font-mono mb-2">
              Inventory chaos
            </h3>
<p className="leading-relaxed text-base text-zinc-400">
              Overstocked on slow-moving goods, understocked on high-demand
              items.
            </p>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 py-16 rounded-xl border border-cyan-500/10 bg-zinc-950/30 backdrop-blur-md max-w-7xl lg:mx-auto px-6" id="lenses">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-base text-cyan-400 tracking-widest font-mono">
            SCIENTIFIC DIAGNOSIS
          </span>
<h2 className="text-3xl font-semibold tracking-tight mt-3 md:text-4xl">
            Diagnose any supply chain breakdown
          </h2>
<p className="leading-relaxed text-base text-zinc-400 mt-4">
            We isolate exact failures and their structural costs before
            designing the solution.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
<div className="text-base text-zinc-400 leading-relaxed">
<span className="font-mono text-3xl font-light text-cyan-400/20 absolute right-4 top-4">
              01
            </span>
<h3 className="font-mono tracking-widest text-cyan-400 mb-4 uppercase text-base">
              Lens One
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Process alignment and planning gaps.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<span className="font-mono text-3xl font-light text-cyan-400/20 absolute right-4 top-4">
              02
            </span>
<h3 className="font-mono tracking-widest text-cyan-400 mb-4 uppercase text-base">
              Lens Two
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Technology integration and utilization.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<span className="font-mono text-3xl font-light text-cyan-400/20 absolute right-4 top-4">
              03
            </span>
<h3 className="font-mono tracking-widest text-cyan-400 mb-4 uppercase text-base">
              Lens Three
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Data accuracy and pipeline latency.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<span className="font-mono text-3xl font-light text-cyan-400/20 absolute right-4 top-4">
              04
            </span>
<h3 className="font-mono tracking-widest text-cyan-400 mb-4 uppercase text-base">
              Lens Four
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Organizational readiness and skill design.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<span className="font-mono text-3xl font-light text-cyan-400/20 absolute right-4 top-4">
              05
            </span>
<h3 className="font-mono tracking-widest text-cyan-400 mb-4 uppercase text-base">
              Lens Five
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Metrics, KPI accuracy, and execution visibility.
            </p>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto" id="results">
<div className="rounded-md grid grid-cols-1 md:grid-cols-3 border border-cyan-500/20 bg-zinc-950/50 backdrop-blur-md">
<div className="p-8 border-b md:border-b-0 md:border-r border-cyan-500/10 flex items-start gap-4">
<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded border border-cyan-500/30">
<iconify-icon icon="solar:graph-up-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-base text-zinc-500 mt-1">
<div className="text-4xl font-semibold cyan-glow tracking-tight">
                24%
              </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
                FORECAST ACCURACY GAIN
              </div>
<p className="text-zinc-500 mt-1 text-base">Polaris ORV Division</p>
</div>
</div>
<div className="p-8 border-b md:border-b-0 md:border-r border-cyan-500/10 flex items-start gap-4">
<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded border border-cyan-500/30">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-base text-zinc-500 mt-1">
<div className="text-4xl font-semibold cyan-glow tracking-tight">
                Minutes
              </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
                TO REPLAN THE NETWORK
              </div>
<p className="text-zinc-500 mt-1 text-base">
                Replaced days of manual effort
              </p>
</div>
</div>
<div className="p-8 flex items-start gap-4">
<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded border border-cyan-500/30">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="text-base text-zinc-500 mt-1">
<div className="text-4xl font-semibold cyan-glow tracking-tight">
                1
              </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
                SOURCE OF TRUTH
              </div>
<p className="text-zinc-500 mt-1 text-base">
                Unified across business units
              </p>
</div>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lg text-cyan-400 tracking-widest font-mono">
            IMPLEMENTATION ROUTE
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            From blueprint to go-live
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
<div className="text-base text-zinc-400 leading-relaxed">
<div className="flex items-center gap-3 mb-4">
<span className="font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-base">
                01
              </span>
<span className="font-mono tracking-widest text-zinc-300 text-base">
                DISCOVERY
              </span>
</div>
<p className="text-zinc-400 leading-relaxed text-base">
              Assess real, ground-level operations.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<div className="flex items-center gap-3 mb-4">
<span className="font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-base">
                02
              </span>
<span className="font-mono tracking-widest text-zinc-300 text-base">
                DIAGNOSE
              </span>
</div>
<p className="text-zinc-400 leading-relaxed text-base">
              Isolate structural issues and hidden costs.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<div className="flex items-center gap-3 mb-4">
<span className="font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-base">
                03
              </span>
<span className="font-mono tracking-widest text-zinc-300 text-base">
                DESIGN
              </span>
</div>
<p className="text-zinc-400 leading-relaxed text-base">
              Tailor a lean plan for your operations.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<div className="flex items-center gap-3 mb-4">
<span className="font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-base">
                04
              </span>
<span className="font-mono tracking-widest text-zinc-300 text-base">
                BUILD
              </span>
</div>
<p className="text-zinc-400 leading-relaxed text-base">
              Deploy system architectures and train teams.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<div className="flex items-center gap-3 mb-4">
<span className="font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-base">
                05
              </span>
<span className="font-mono tracking-widest text-zinc-300 text-base">
                RUN
              </span>
</div>
<p className="text-zinc-400 leading-relaxed text-base">
              Ensure reliable, long-term performance.
            </p>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto px-6" id="solutions">
<div className="text-center mb-16">
<span className="text-lg text-cyan-400 tracking-widest font-mono">
            CORE CAPABILITIES
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Comprehensive system transformation
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:route-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Strategy &amp; Transformation
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Strategic roadmaps designed for real execution.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:calendar-date-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Connected Planning &amp; Fulfillment
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Demand-driven operational connectivity.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:checklist-minimalistic-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Order Promising &amp; Delivery
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Reliable promise dates and logistics.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:box-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Warehouse Operations &amp; Automation
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Fulfillment backed by modern integrations.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:delivery-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Transportation Optimization
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Logistics control and real-time visibility.
            </p>
</div>
<div className="text-base text-zinc-400 leading-relaxed">
<iconify-icon className="mb-4" icon="solar:cpu-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<h3 className="font-mono text-sm tracking-wide text-white mb-2">
              Supply Chain AI &amp; Data
            </h3>
<p className="text-zinc-400 leading-relaxed text-base">
              Automated decisions via modern data engines.
            </p>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto">
<div className="rounded-md grid grid-cols-2 lg:grid-cols-4 border border-cyan-500/20 bg-zinc-950/50 backdrop-blur-md text-center py-6">
<div className="p-4 border-r border-cyan-500/10">
<div className="text-3xl font-semibold cyan-glow tracking-tight">
              20+
            </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
              YEARS IN SUPPLY CHAIN
            </div>
</div>
<div className="p-4 md:border-r border-cyan-500/10">
<div className="text-3xl font-semibold cyan-glow tracking-tight">
              2,500+
            </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
              CONSULTING ENGAGEMENTS
            </div>
</div>
<div className="p-4 border-r border-cyan-500/10">
<div className="text-3xl font-semibold cyan-glow tracking-tight">
              25+
            </div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
              SC PROS TO KNOW
            </div>
</div>
<div className="p-4">
<div className="text-3xl font-semibold cyan-glow tracking-tight">6</div>
<div className="font-mono text-base tracking-widest text-zinc-400 mt-2">
              INDUSTRIES SERVED
            </div>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto px-6">
<div className="text-center mb-16">
<span className="text-lg text-cyan-400 tracking-widest font-mono">
            VERTICAL EXPERTISE
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Engineered for your industry dynamics
          </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:tag-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Consumer Products
            </div>
</div>
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:shop-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Retail
            </div>
</div>
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:heart-pulse-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Health
            </div>
</div>
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:fire-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Energy &amp; Commodities
            </div>
</div>
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:devices-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Tech &amp; Telecom
            </div>
</div>
<div className="p-4 rounded-lg bg-zinc-950/40 border border-cyan-500/10 text-center hover:border-cyan-500/30 transition">
<iconify-icon className="mb-2" icon="solar:delivery-linear" style={{fontSize: '1.5rem', color: '#22d3ee'}}></iconify-icon>
<div className="font-mono text-base tracking-wider text-zinc-300">
              Transportation
            </div>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-7xl lg:mx-auto px-6 font-montserrat font-semibold text-base text-cyan-400" id="case-story">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<span className="font-montserrat tracking-widest text-cyan-400 uppercase text-base font-semibold">CLIENT STORY - POLARIS</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-6 text-white">
              Polaris was stuck in Excel despite a multi-million-dollar
              platform.
            </h2>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed font-normal">
              Post-COVID demand broke their planning system. Planners reverted
              to manual workarounds, losing agility.
            </p>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed font-normal">
              We rebuilt the planning engine for their Off-Road Vehicles
              division. Polaris now replans in minutes with 24% higher forecast
              accuracy.
            </p>
<a className="font-montserrat font-semibold text-base text-cyan-400 flex items-center gap-2 hover:underline" href="#calendly">
              Book a Call to see what this looks like for you
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1rem'}}></iconify-icon>
</a>
</div>
<div className="overflow-hidden bg-black/60 border-cyan-500/20 border rounded-lg mx-5 px-8 py-8 relative">
<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent"></div>
<div className="font-montserrat font-semibold text-base text-zinc-500 flex items-center gap-2 mb-4">
<div className="status-dot"></div>
<span className="font-montserrat font-semibold text-zinc-500 uppercase tracking-wider text-xs">
                Live Infrastructure Case Log
              </span>
</div>
<div className="space-y-4 font-montserrat font-semibold text-base">
<div className="flex border-zinc-800 border-b pb-2 justify-between">
<span className="text-zinc-500 font-normal">Industry:</span>
<span className="text-zinc-300">Transportation &amp; Mobility</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span className="text-zinc-500 font-normal">Engine Rebuilt:</span>
<span className="text-zinc-300">Blue Yonder APS</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span className="text-zinc-500 font-normal">Legacy Latency:</span>
<span className="text-zinc-300">Days to Replan Grid</span>
</div>
<div className="flex justify-between pb-2">
<span className="text-zinc-500 font-normal">Optimized State:</span>
<span className="text-cyan-400 font-semibold">
                  Minutes to Replan Network
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-3xl lg:mx-auto px-6" id="faq">
<div className="font-mono text-base tracking-widest text-cyan-400">
<span className="text-lg text-cyan-400 tracking-widest font-mono">
            OBJECTION REMOVAL
          </span>
<h2 className="md:text-4xl text-3xl italic tracking-tight font-gfs-didot mt-3 mb-10">
            Answering key structural concerns
          </h2>
</div>
<div className="mt-4 text-base text-zinc-400 leading-relaxed">
<details className="group rounded-lg border border-cyan-500/10 bg-zinc-950/40 p-6 transition [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-white">
<h3 className="uppercase text-sm text-zinc-200 tracking-wider font-sora">
                How big does our company need to be to work with you?
              </h3>
<span className="ml-1.5 flex-shrink-0 rounded-full bg-cyan-500/10 p-1.5 text-cyan-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-zinc-400 leading-relaxed text-base">
              We scope to your complexity, not a revenue minimum. Book a call to
              find out if we fit.
            </p>
</details>
<details className="group rounded-lg border border-cyan-500/10 bg-zinc-950/40 p-6 transition [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-white">
<h3 className="uppercase text-sm text-zinc-200 tracking-wider font-sora">
                How long does a transformation actually take?
              </h3>
<span className="ml-1.5 flex-shrink-0 rounded-full bg-cyan-500/10 p-1.5 text-cyan-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-zinc-400 leading-relaxed text-base">
              We phase our work to deliver value in weeks, prioritizing
              highest-impact areas first.
            </p>
</details>
<details className="group rounded-lg border border-cyan-500/10 bg-zinc-950/40 p-6 transition [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-white">
<h3 className="uppercase text-sm text-zinc-200 tracking-wider font-sora">
                We already have supply chain software. Do we need consultants
                too?
              </h3>
<span className="ml-1.5 flex-shrink-0 rounded-full bg-cyan-500/10 p-1.5 text-cyan-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-zinc-400 leading-relaxed text-base">
              Software rarely fails; configuration does. We optimize your
              existing platform.
            </p>
</details>
<details className="group rounded-lg border border-cyan-500/10 bg-zinc-950/40 p-6 transition [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-white">
<h3 className="uppercase text-sm text-zinc-200 tracking-wider font-sora">
                How are you different from the big consulting firms?
              </h3>
<span className="ml-1.5 flex-shrink-0 rounded-full bg-cyan-500/10 p-1.5 text-cyan-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-zinc-400 leading-relaxed text-base">
              We don't just advise; we build, implement, and support. Our
              guidance is fully technology-agnostic.
            </p>
</details>
<details className="group rounded-lg border border-cyan-500/10 bg-zinc-950/40 p-6 transition [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-white">
<h3 className="uppercase text-sm text-zinc-200 tracking-wider font-sora">
                Do you know our industry?
              </h3>
<span className="ml-1.5 flex-shrink-0 rounded-full bg-cyan-500/10 p-1.5 text-cyan-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-zinc-400 leading-relaxed text-base">
              Our team brings years of direct experience across our six key
              industries.
            </p>
</details>
</div>
</div>

<div className="relative z-20 mx-6 lg:mx-10 my-24 max-w-4xl lg:mx-auto px-6 py-16 rounded-xl border border-cyan-500/20 bg-zinc-950/40 backdrop-blur-md" id="calendly">
<div className="font-mono text-base tracking-widest text-cyan-400 uppercase">
<span className="uppercase text-base text-cyan-400 tracking-widest font-mono h-10 my-10">
            WORK WITH JOHN SHARKEY
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
            Fix your supply chain now
          </h2>
<p className="leading-relaxed text-sm text-zinc-400 max-w-none">
            Identify where your operations are bleeding time and capital in one
            quick call.
          </p>
</div>

<div className="overflow-hidden text-lg bg-black/80 border-zinc-800 border rounded-lg mt-12 shadow-2xl">
<div className="flex bg-zinc-950/40 border-zinc-800 border-b mb-10 px-6 py-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
<iconify-icon className="" icon="solar:calendar-minimalistic-linear" style={{fontSize: '1.1rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="">
<div className="font-mono text-base text-white">
                  Spinnaker SCA Strategy Session
                </div>
<div className="text-[10px] text-zinc-500">
                  30 Min Consultation • John Sharkey (CEO)
                </div>
</div>
</div>
<div className="flex items-center gap-1.5">
<div className="status-dot"></div>
<span className="font-mono text-[10px] text-cyan-400 uppercase">
                Available Slots
              </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="border border-zinc-800 rounded-md p-4 bg-zinc-950/20">
<div className="font-mono text-base text-white">
<span className="font-mono text-white">Select Date</span>
<iconify-icon icon="solar:calendar-search-linear" style={{fontSize: '1rem', color: '#22d3ee'}}></iconify-icon>
</div>
<div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-mono">
<span className="text-zinc-600">S</span>
<span className="text-zinc-600">M</span>
<span className="text-zinc-600">T</span>
<span className="text-zinc-600">W</span>
<span className="text-zinc-600">T</span>
<span className="text-zinc-600">F</span>
<span className="text-zinc-600">S</span>
<span className="text-zinc-800">28</span>
<span className="text-zinc-800">29</span>
<span className="text-zinc-800">30</span>
<span className="text-zinc-300">1</span>
<span className="text-zinc-300">2</span>
<span className="text-cyan-400 font-bold bg-cyan-500/10 rounded">
                  3
                </span>
<span className="text-zinc-300">4</span>
<span className="text-zinc-300">5</span>
<span className="text-zinc-300">6</span>
<span className="text-cyan-400 font-bold bg-cyan-500/10 rounded">
                  7
                </span>
<span className="text-zinc-300">8</span>
<span className="text-zinc-300">9</span>
<span className="text-cyan-400 font-bold bg-cyan-500/10 rounded">
                  10
                </span>
<span className="text-zinc-300">11</span>
</div>
</div>

<div className="flex flex-col justify-between">
<div className="font-mono text-base text-white block mb-4">
<span className="font-mono text-white block mb-4">
                  Select Local Time
                </span>
<button className="w-full py-2.5 rounded border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition text-cyan-400 font-mono text-base">
                  09:00 AM — EST
                </button>
<button className="w-full py-2.5 rounded border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition text-zinc-300 font-mono text-base">
                  11:30 AM — EST
                </button>
<button className="w-full py-2.5 rounded border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition text-zinc-300 font-mono text-base">
                  02:00 PM — EST
                </button>
</div>
<button className="glow-btn font-mono text-base tracking-widest w-full py-3 rounded-md text-black font-semibold mt-4">
                CONFIRM BOOKING
              </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
