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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          document.addEventListener('DOMContentLoaded', () => {
              lucide.createIcons();

              const ctx = document.getElementById('mainChart').getContext('2d');
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
              gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');

              new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
                      datasets: [{
                          label: 'Amenazas',
                          data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 38, 42, 45],
                          borderColor: '#ef4444',
                          backgroundColor: gradient,
                          borderWidth: 2,
                          tension: 0.4,
                          fill: true,
                          pointRadius: 0,
                          pointHoverRadius: 4
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: {
                          x: { display: false },
                          y: { display: false }
                      },
                      animation: { duration: 2000 }
                  }
              });
          });
        


      lucide.createIcons({
          attrs: {
              'stroke-width': 2
          }
      });
    


      (function() {
        function generateBoxShadows(n, color) {
          let value = '';
          for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            value += x + 'px ' + y + 'px ' + color;
            if (i < n - 1) value += ', ';
          }
          return value;
        }
        const smallStars = document.getElementById('stars-small');
        const medStars = document.getElementById('stars-medium');
        const bigStars = document.getElementById('stars-big');
        if (smallStars) smallStars.style.boxShadow = generateBoxShadows(200, 'rgba(255, 255, 255, 0.3)');
        if (medStars) medStars.style.boxShadow = generateBoxShadows(60, 'rgba(255, 255, 255, 0.4)');
        if (bigStars) bigStars.style.boxShadow = generateBoxShadows(25, 'rgba(255, 255, 255, 0.5)');
      })();
    
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
      
<div id="galaxy-starfield" style={{position: 'fixed', inset: '0', zIndex: '-2', pointerEvents: 'none', overflow: 'hidden', background: 'transparent'}}>
<div id="stars-small" style={{position: 'absolute', width: '1px', height: '1px', background: 'transparent', animation: '100s linear 0s infinite normal none running animStar', boxShadow: 'rgba(255, 255, 255, 0.3) 1834px 1761px, rgba(255, 255, 255, 0.3) 835px 373px, rgba(255, 255, 255, 0.3) 486px 1316px, rgba(255, 255, 255, 0.3) 369px 1164px, rgba(255, 255, 255, 0.3) 1054px 908px, rgba(255, 255, 255, 0.3) 826px 103px, rgba(255, 255, 255, 0.3) 1035px 1554px, rgba(255, 255, 255, 0.3) 1405px 788px, rgba(255, 255, 255, 0.3) 958px 443px, rgba(255, 255, 255, 0.3) 1497px 449px, rgba(255, 255, 255, 0.3) 290px 954px, rgba(255, 255, 255, 0.3) 956px 1769px, rgba(255, 255, 255, 0.3) 1019px 1257px, rgba(255, 255, 255, 0.3) 1411px 1296px, rgba(255, 255, 255, 0.3) 1843px 1807px, rgba(255, 255, 255, 0.3) 1595px 271px, rgba(255, 255, 255, 0.3) 1983px 1587px, rgba(255, 255, 255, 0.3) 1319px 1784px, rgba(255, 255, 255, 0.3) 202px 77px, rgba(255, 255, 255, 0.3) 1480px 1652px, rgba(255, 255, 255, 0.3) 210px 190px, rgba(255, 255, 255, 0.3) 490px 785px, rgba(255, 255, 255, 0.3) 585px 937px, rgba(255, 255, 255, 0.3) 1471px 128px, rgba(255, 255, 255, 0.3) 903px 108px, rgba(255, 255, 255, 0.3) 572px 646px, rgba(255, 255, 255, 0.3) 1443px 1908px, rgba(255, 255, 255, 0.3) 568px 17px, rgba(255, 255, 255, 0.3) 1221px 986px, rgba(255, 255, 255, 0.3) 1904px 182px, rgba(255, 255, 255, 0.3) 331px 1661px, rgba(255, 255, 255, 0.3) 138px 1061px, rgba(255, 255, 255, 0.3) 1924px 1254px, rgba(255, 255, 255, 0.3) 1140px 1224px, rgba(255, 255, 255, 0.3) 897px 624px, rgba(255, 255, 255, 0.3) 125px 1680px, rgba(255, 255, 255, 0.3) 262px 845px, rgba(255, 255, 255, 0.3) 1624px 1398px, rgba(255, 255, 255, 0.3) 1308px 1004px, rgba(255, 255, 255, 0.3) 414px 1784px, rgba(255, 255, 255, 0.3) 1847px 317px, rgba(255, 255, 255, 0.3) 1293px 363px, rgba(255, 255, 255, 0.3) 391px 35px, rgba(255, 255, 255, 0.3) 161px 1468px, rgba(255, 255, 255, 0.3) 374px 1729px, rgba(255, 255, 255, 0.3) 357px 13px, rgba(255, 255, 255, 0.3) 1443px 927px, rgba(255, 255, 255, 0.3) 1483px 676px, rgba(255, 255, 255, 0.3) 1503px 532px, rgba(255, 255, 255, 0.3) 1283px 1984px, rgba(255, 255, 255, 0.3) 894px 508px, rgba(255, 255, 255, 0.3) 323px 328px, rgba(255, 255, 255, 0.3) 685px 767px, rgba(255, 255, 255, 0.3) 1776px 1959px, rgba(255, 255, 255, 0.3) 171px 235px, rgba(255, 255, 255, 0.3) 1309px 1152px, rgba(255, 255, 255, 0.3) 1749px 201px, rgba(255, 255, 255, 0.3) 592px 1067px, rgba(255, 255, 255, 0.3) 805px 1139px, rgba(255, 255, 255, 0.3) 663px 1663px, rgba(255, 255, 255, 0.3) 263px 1351px, rgba(255, 255, 255, 0.3) 175px 1242px, rgba(255, 255, 255, 0.3) 1630px 1417px, rgba(255, 255, 255, 0.3) 1491px 983px, rgba(255, 255, 255, 0.3) 379px 1110px, rgba(255, 255, 255, 0.3) 714px 513px, rgba(255, 255, 255, 0.3) 310px 89px, rgba(255, 255, 255, 0.3) 577px 1586px, rgba(255, 255, 255, 0.3) 70px 1270px, rgba(255, 255, 255, 0.3) 1758px 1078px, rgba(255, 255, 255, 0.3) 1615px 903px, rgba(255, 255, 255, 0.3) 1381px 626px, rgba(255, 255, 255, 0.3) 122px 202px, rgba(255, 255, 255, 0.3) 284px 682px, rgba(255, 255, 255, 0.3) 1965px 395px, rgba(255, 255, 255, 0.3) 1592px 437px, rgba(255, 255, 255, 0.3) 722px 471px, rgba(255, 255, 255, 0.3) 702px 914px, rgba(255, 255, 255, 0.3) 758px 1283px, rgba(255, 255, 255, 0.3) 1656px 719px, rgba(255, 255, 255, 0.3) 33px 1300px, rgba(255, 255, 255, 0.3) 528px 1574px, rgba(255, 255, 255, 0.3) 261px 21px, rgba(255, 255, 255, 0.3) 993px 1581px, rgba(255, 255, 255, 0.3) 1037px 1546px, rgba(255, 255, 255, 0.3) 741px 382px, rgba(255, 255, 255, 0.3) 406px 1527px, rgba(255, 255, 255, 0.3) 862px 1809px, rgba(255, 255, 255, 0.3) 643px 93px, rgba(255, 255, 255, 0.3) 79px 948px, rgba(255, 255, 255, 0.3) 579px 488px, rgba(255, 255, 255, 0.3) 982px 1467px, rgba(255, 255, 255, 0.3) 1640px 1398px, rgba(255, 255, 255, 0.3) 829px 1337px, rgba(255, 255, 255, 0.3) 297px 1868px, rgba(255, 255, 255, 0.3) 804px 786px, rgba(255, 255, 255, 0.3) 399px 1752px, rgba(255, 255, 255, 0.3) 110px 205px, rgba(255, 255, 255, 0.3) 926px 1391px, rgba(255, 255, 255, 0.3) 146px 218px, rgba(255, 255, 255, 0.3) 1075px 1440px, rgba(255, 255, 255, 0.3) 770px 1620px, rgba(255, 255, 255, 0.3) 1696px 1980px, rgba(255, 255, 255, 0.3) 1959px 1063px, rgba(255, 255, 255, 0.3) 756px 493px, rgba(255, 255, 255, 0.3) 1028px 504px, rgba(255, 255, 255, 0.3) 1491px 343px, rgba(255, 255, 255, 0.3) 224px 1984px, rgba(255, 255, 255, 0.3) 1886px 1357px, rgba(255, 255, 255, 0.3) 500px 1208px, rgba(255, 255, 255, 0.3) 550px 320px, rgba(255, 255, 255, 0.3) 816px 1175px, rgba(255, 255, 255, 0.3) 1274px 88px, rgba(255, 255, 255, 0.3) 576px 801px, rgba(255, 255, 255, 0.3) 1346px 1600px, rgba(255, 255, 255, 0.3) 1566px 1409px, rgba(255, 255, 255, 0.3) 756px 1655px, rgba(255, 255, 255, 0.3) 1032px 1652px, rgba(255, 255, 255, 0.3) 332px 1105px, rgba(255, 255, 255, 0.3) 1051px 1591px, rgba(255, 255, 255, 0.3) 1734px 473px, rgba(255, 255, 255, 0.3) 11px 1793px, rgba(255, 255, 255, 0.3) 1953px 1139px, rgba(255, 255, 255, 0.3) 835px 1631px, rgba(255, 255, 255, 0.3) 369px 81px, rgba(255, 255, 255, 0.3) 1019px 1026px, rgba(255, 255, 255, 0.3) 1612px 1937px, rgba(255, 255, 255, 0.3) 544px 1623px, rgba(255, 255, 255, 0.3) 1234px 1334px, rgba(255, 255, 255, 0.3) 605px 1310px, rgba(255, 255, 255, 0.3) 432px 1056px, rgba(255, 255, 255, 0.3) 917px 382px, rgba(255, 255, 255, 0.3) 834px 1082px, rgba(255, 255, 255, 0.3) 1860px 1440px, rgba(255, 255, 255, 0.3) 1174px 1914px, rgba(255, 255, 255, 0.3) 1380px 483px, rgba(255, 255, 255, 0.3) 1554px 1747px, rgba(255, 255, 255, 0.3) 1366px 796px, rgba(255, 255, 255, 0.3) 579px 646px, rgba(255, 255, 255, 0.3) 695px 1589px, rgba(255, 255, 255, 0.3) 1746px 877px, rgba(255, 255, 255, 0.3) 1656px 1677px, rgba(255, 255, 255, 0.3) 868px 1415px, rgba(255, 255, 255, 0.3) 289px 1041px, rgba(255, 255, 255, 0.3) 1454px 1168px, rgba(255, 255, 255, 0.3) 1621px 1194px, rgba(255, 255, 255, 0.3) 1844px 295px, rgba(255, 255, 255, 0.3) 1050px 692px, rgba(255, 255, 255, 0.3) 1944px 1754px, rgba(255, 255, 255, 0.3) 1481px 622px, rgba(255, 255, 255, 0.3) 461px 1493px, rgba(255, 255, 255, 0.3) 295px 589px, rgba(255, 255, 255, 0.3) 55px 1354px, rgba(255, 255, 255, 0.3) 1162px 141px, rgba(255, 255, 255, 0.3) 1475px 947px, rgba(255, 255, 255, 0.3) 1165px 1520px, rgba(255, 255, 255, 0.3) 576px 845px, rgba(255, 255, 255, 0.3) 157px 193px, rgba(255, 255, 255, 0.3) 662px 1323px, rgba(255, 255, 255, 0.3) 1924px 1003px, rgba(255, 255, 255, 0.3) 239px 1069px, rgba(255, 255, 255, 0.3) 1134px 1829px, rgba(255, 255, 255, 0.3) 1431px 1254px, rgba(255, 255, 255, 0.3) 851px 861px, rgba(255, 255, 255, 0.3) 1084px 335px, rgba(255, 255, 255, 0.3) 1857px 405px, rgba(255, 255, 255, 0.3) 1910px 894px, rgba(255, 255, 255, 0.3) 368px 1223px, rgba(255, 255, 255, 0.3) 611px 159px, rgba(255, 255, 255, 0.3) 953px 1611px, rgba(255, 255, 255, 0.3) 954px 309px, rgba(255, 255, 255, 0.3) 962px 1396px, rgba(255, 255, 255, 0.3) 416px 608px, rgba(255, 255, 255, 0.3) 732px 801px, rgba(255, 255, 255, 0.3) 858px 499px, rgba(255, 255, 255, 0.3) 1264px 1669px, rgba(255, 255, 255, 0.3) 190px 1848px, rgba(255, 255, 255, 0.3) 1066px 1930px, rgba(255, 255, 255, 0.3) 34px 1825px, rgba(255, 255, 255, 0.3) 434px 211px, rgba(255, 255, 255, 0.3) 1553px 458px, rgba(255, 255, 255, 0.3) 106px 437px, rgba(255, 255, 255, 0.3) 428px 1881px, rgba(255, 255, 255, 0.3) 1946px 321px, rgba(255, 255, 255, 0.3) 277px 986px, rgba(255, 255, 255, 0.3) 790px 214px, rgba(255, 255, 255, 0.3) 556px 897px, rgba(255, 255, 255, 0.3) 272px 1772px, rgba(255, 255, 255, 0.3) 397px 949px, rgba(255, 255, 255, 0.3) 1522px 754px, rgba(255, 255, 255, 0.3) 407px 1989px, rgba(255, 255, 255, 0.3) 1229px 327px, rgba(255, 255, 255, 0.3) 1691px 962px, rgba(255, 255, 255, 0.3) 14px 1567px, rgba(255, 255, 255, 0.3) 1534px 634px, rgba(255, 255, 255, 0.3) 142px 1437px, rgba(255, 255, 255, 0.3) 416px 1408px, rgba(255, 255, 255, 0.3) 1857px 641px, rgba(255, 255, 255, 0.3) 1704px 606px, rgba(255, 255, 255, 0.3) 119px 1804px'}}></div>
<div id="stars-medium" style={{position: 'absolute', width: '2px', height: '2px', background: 'transparent', animation: '150s linear 0s infinite normal none running animStar', boxShadow: 'rgba(255, 255, 255, 0.4) 262px 338px, rgba(255, 255, 255, 0.4) 781px 1411px, rgba(255, 255, 255, 0.4) 308px 1502px, rgba(255, 255, 255, 0.4) 1436px 1816px, rgba(255, 255, 255, 0.4) 1694px 1125px, rgba(255, 255, 255, 0.4) 1096px 784px, rgba(255, 255, 255, 0.4) 791px 1413px, rgba(255, 255, 255, 0.4) 1851px 101px, rgba(255, 255, 255, 0.4) 1189px 1202px, rgba(255, 255, 255, 0.4) 1529px 1423px, rgba(255, 255, 255, 0.4) 929px 1440px, rgba(255, 255, 255, 0.4) 1889px 12px, rgba(255, 255, 255, 0.4) 1070px 1361px, rgba(255, 255, 255, 0.4) 1873px 629px, rgba(255, 255, 255, 0.4) 610px 1037px, rgba(255, 255, 255, 0.4) 1657px 1300px, rgba(255, 255, 255, 0.4) 1412px 1046px, rgba(255, 255, 255, 0.4) 1405px 1390px, rgba(255, 255, 255, 0.4) 1556px 734px, rgba(255, 255, 255, 0.4) 627px 29px, rgba(255, 255, 255, 0.4) 230px 850px, rgba(255, 255, 255, 0.4) 169px 1090px, rgba(255, 255, 255, 0.4) 1611px 1853px, rgba(255, 255, 255, 0.4) 1567px 416px, rgba(255, 255, 255, 0.4) 1883px 1786px, rgba(255, 255, 255, 0.4) 1943px 318px, rgba(255, 255, 255, 0.4) 746px 1737px, rgba(255, 255, 255, 0.4) 1451px 540px, rgba(255, 255, 255, 0.4) 981px 1962px, rgba(255, 255, 255, 0.4) 1030px 966px, rgba(255, 255, 255, 0.4) 826px 1788px, rgba(255, 255, 255, 0.4) 220px 1558px, rgba(255, 255, 255, 0.4) 452px 1001px, rgba(255, 255, 255, 0.4) 1908px 1736px, rgba(255, 255, 255, 0.4) 818px 1375px, rgba(255, 255, 255, 0.4) 441px 152px, rgba(255, 255, 255, 0.4) 465px 57px, rgba(255, 255, 255, 0.4) 17px 339px, rgba(255, 255, 255, 0.4) 881px 1096px, rgba(255, 255, 255, 0.4) 754px 727px, rgba(255, 255, 255, 0.4) 565px 310px, rgba(255, 255, 255, 0.4) 1642px 1627px, rgba(255, 255, 255, 0.4) 276px 259px, rgba(255, 255, 255, 0.4) 1783px 1581px, rgba(255, 255, 255, 0.4) 1946px 1779px, rgba(255, 255, 255, 0.4) 1581px 21px, rgba(255, 255, 255, 0.4) 4px 1895px, rgba(255, 255, 255, 0.4) 791px 1792px, rgba(255, 255, 255, 0.4) 1449px 859px, rgba(255, 255, 255, 0.4) 882px 1840px, rgba(255, 255, 255, 0.4) 1627px 1348px, rgba(255, 255, 255, 0.4) 1511px 1854px, rgba(255, 255, 255, 0.4) 1030px 420px, rgba(255, 255, 255, 0.4) 1065px 1269px, rgba(255, 255, 255, 0.4) 1384px 102px, rgba(255, 255, 255, 0.4) 19px 259px, rgba(255, 255, 255, 0.4) 1695px 473px, rgba(255, 255, 255, 0.4) 208px 1292px, rgba(255, 255, 255, 0.4) 554px 1454px, rgba(255, 255, 255, 0.4) 131px 169px'}}></div>
<div id="stars-big" style={{position: 'absolute', width: '3px', height: '3px', background: 'transparent', animation: '200s linear 0s infinite normal none running animStar', boxShadow: 'rgba(255, 255, 255, 0.5) 638px 295px, rgba(255, 255, 255, 0.5) 218px 1888px, rgba(255, 255, 255, 0.5) 1053px 1127px, rgba(255, 255, 255, 0.5) 1219px 390px, rgba(255, 255, 255, 0.5) 402px 675px, rgba(255, 255, 255, 0.5) 934px 96px, rgba(255, 255, 255, 0.5) 1339px 1307px, rgba(255, 255, 255, 0.5) 731px 1312px, rgba(255, 255, 255, 0.5) 1475px 828px, rgba(255, 255, 255, 0.5) 1538px 238px, rgba(255, 255, 255, 0.5) 576px 903px, rgba(255, 255, 255, 0.5) 997px 1859px, rgba(255, 255, 255, 0.5) 1436px 1590px, rgba(255, 255, 255, 0.5) 1847px 833px, rgba(255, 255, 255, 0.5) 532px 1933px, rgba(255, 255, 255, 0.5) 1934px 339px, rgba(255, 255, 255, 0.5) 814px 1919px, rgba(255, 255, 255, 0.5) 1778px 1774px, rgba(255, 255, 255, 0.5) 1207px 580px, rgba(255, 255, 255, 0.5) 345px 24px, rgba(255, 255, 255, 0.5) 1734px 1880px, rgba(255, 255, 255, 0.5) 1943px 13px, rgba(255, 255, 255, 0.5) 722px 917px, rgba(255, 255, 255, 0.5) 1437px 1985px, rgba(255, 255, 255, 0.5) 1784px 1145px'}}></div>
</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#020204]/80 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030508]/60 backdrop-blur-xl">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<div className="flex text-xs font-bold text-white bg-gradient-to-br from-red-600 to-red-800 w-8 h-8 rounded items-center justify-center">
<svg className="lucide lucide-shield-alert" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<span className="text-sm font-semibold text-white tracking-tight">
              AISTUDIO
            </span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#servicios">
              Features
            </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#sectores">
              Pricing
            </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#filosofia">
              FAQ
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="group inline-flex items-center justify-center gap-2 overflow-hidden transition-all hover:bg-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] text-xs font-semibold text-white bg-gradient-to-br from-[#f41010] to-[#570505] rounded-lg px-4 py-2 relative shadow-[0_0_25px_rgba(239,68,68,0.5)]" href="#contacto">
            Book a Demo
          </a>
</div>
</div>
</nav>
<main className="relative">

<section className="overflow-hidden min-h-[1100px] pt-32 pb-44 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full"></div>
<div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-b from-red-300 via-red-500 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_rgba(239,68,68,1)]"></div>
</div>
<div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-red-500/10 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] rounded-full border border-red-500/10 opacity-60"></div>
<svg className="absolute w-[80%] h-[80%] animate-[spin-reverse-slow_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="49" stroke="rgba(239,68,68,0.1)" stroke-dasharray="20 40" strokeWidth="0.2"></circle>
</svg>
<div className="absolute w-[72%] h-[72%] rounded-full border border-red-500/5"></div>
<div className="absolute w-full h-full opacity-10">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-400"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-red-400"></div>
<div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-red-400 rounded-full"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full animate-pulse"></div>
<div className="w-[60%] h-[60%] border border-red-400/30 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-red-300 rounded-full shadow-[0_0_10px_#ef4444]"></div>
</div>
</div>
<div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-red-500/50 text-[10px] font-mono animate-pulse">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              THREAT_DETECTED
            </div>
<div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-red-500/50 text-[10px] font-mono animate-pulse delay-700">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              ANALYZING...
            </div>
</div>
</div>

<div className="flex flex-col max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="text-center max-w-4xl mx-auto mb-16 pt-10">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/20 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)]">
<div className="h-1.5 w-1.5 animate-pulse bg-red-400 rounded-full"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-red-300">
                CONFIDENTIAL COMPUTING • CPU-LEVEL AI SECURITY
              </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Secure the
              <span className="text-gradient-wolf inline-block bg-gradient-to-br from-[#ff0505] to-[#570505] relative">Unsecurable AI.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              AIStudio protects your AI/ML models and sensitive data at the CPU
              level hidden from hackers, insiders, malware, and even your cloud
              provider. Confidential computing, made effortless.
            </p>
<div className="mt-12 max-w-2xl mx-auto aspect-video rounded-xl border border-white/10 bg-slate-950/80 overflow-hidden relative flex flex-col items-center justify-center group cursor-pointer hover:border-red-500/30 transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-red-950/10 via-transparent to-transparent"></div>

<div className="relative z-10 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white transition-all transform group-hover:scale-110 shadow-[0_0_20px_rgba(239,68,68,0.4)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]">
<svg className="lucide lucide-play translate-x-0.5" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>

<span className="relative z-10 mt-4 text-xs font-semibold tracking-widest text-slate-300 uppercase font-mono group-hover:text-white transition-colors">
                Watch Product Overview (1:45)
              </span>

<div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 transition-colors">
<div className="h-full bg-red-600 w-0 group-hover:w-1/3 transition-all duration-1000 ease-out"></div>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 mt-10">
<a className="inline-flex items-center justify-center gap-2 transition-all hover:bg-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] text-sm font-semibold text-white bg-gradient-to-b from-[#f41010] to-[#570505] rounded-lg px-6 py-3 shadow-[0_0_25px_rgba(239,68,68,0.5)]" href="#contacto">
                Book a Demo
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10" href="#contacto">
                Start Free Trial
              </a>
</div>
</div>

<style>
            @keyframes floatGlow {
              0%, 100% {
                transform: translateY(0px);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px 2px rgba(239, 68, 68, 0.15);
              }
              50% {
                transform: translateY(-12px);
                box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.6), 0 0 40px 8px rgba(239, 68, 68, 0.45);
              }
            }
            .animate-float-glow {
              animation: floatGlow 6s ease-in-out infinite;
            }
          </style>
<div className="animate-float-glow w-full max-w-6xl z-20 mt-[30px] relative perspective-1000">
<div className="glass-surface border-x overflow-hidden transition-all duration-500 animate-enter bg-zinc-900/95 border-white/20 rounded-t-2xl border-b relative backdrop-blur-md">
<div className="glass-top-border"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
<div className="z-20 flex bg-black/20 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono text-red-400">
<svg className="lucide lucide-shield-alert" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
<span>AISTUDIO</span>
<span className="text-slate-600">/</span>
<span className="text-slate-300">Security Overview</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-slate-400">
<span className="text-red-400 font-semibold">Overview</span>
<span>·</span>
<span>Models</span>
<span>·</span>
<span>Threats</span>
<span>·</span>
<span>Enclaves</span>
<span>·</span>
<span>Compliance</span>
<span>·</span>
<span>Settings</span>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 border border-red-500/40 text-[10px] font-bold text-red-300">
                    VL
                  </div>
</div>
</div>
<div className="z-20 flex h-[500px] relative">
<div className="flex flex-col gap-6 bg-black/10 w-16 border-white/5 border-r pt-6 pb-6 gap-x-6 gap-y-6 items-center">
<div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<div className="p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<svg className="lucide lucide-server" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<svg className="lucide lucide-eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="mt-auto p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<svg className="lucide lucide-settings-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">
<div className="col-span-12 grid grid-cols-3 gap-6 h-32">
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 flex flex-col justify-between group hover:border-red-500/30 transition-all hover:bg-red-500/[0.05]">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                            Protected Models
                          </p>
<h3 className="text-xl font-bold text-white tracking-tight">
                            156
                          </h3>
</div>
</div>
<div className="text-emerald-400 text-[10px] mt-2 font-mono">
                        ▲ 18% from last month
                      </div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 flex flex-col justify-between group hover:border-red-500/30 transition-all hover:bg-red-500/[0.05]">
<div className="flex justify-between items-start">
<div>
<p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                            Threats Neutralized
                          </p>
<h3 className="text-xl font-bold text-white tracking-tight">
                            99.9%
                          </h3>
</div>
</div>
<div className="text-emerald-400 text-[10px] mt-2 font-mono">
                        ▲ 2.1% from last month
                      </div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 flex flex-col justify-between group hover:border-red-500/30 transition-all hover:bg-red-500/[0.05]">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                            Avg. Response Time
                          </p>
<h3 className="text-xl font-bold text-white tracking-tight">
                            0.4ms
                          </h3>
</div>
</div>
<div className="text-emerald-400 text-[10px] mt-2 font-mono">
                        ▼ 8% from last month
                      </div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 flex flex-col justify-between group hover:border-red-500/30 transition-all hover:bg-red-500/[0.05]">
<div className="flex justify-between items-start">
<div>
<p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                            Active Enclaves
                          </p>
<h3 className="text-xl font-bold text-white tracking-tight">
                            24
                          </h3>
</div>
</div>
<div className="text-emerald-400 text-[10px] mt-2 font-mono">
                        ▲ 12% from last month
                      </div>
</div>
</div>
<div className="col-span-8 bg-white/[0.02] border border-white/5 rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-semibold text-white">
                        Threat Activity
                      </h4>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">
                          1H
                        </button>
<button className="text-[10px] px-2 py-0.5 rounded text-slate-500 hover:text-white transition-colors">
                          24H
                        </button>
</div>
</div>
<div className="relative w-full h-[200px]">
<canvas className="" height="225" id="mainChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '634.4px'}} width="713"></canvas>
</div>
</div>
<div className="col-span-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h4 className="text-xs font-semibold text-white">
                        Recent Alerts
                      </h4>
<span className="text-[9px] font-mono text-red-400 bg-red-950/40 border border-red-500/20 px-2 py-0.5 rounded">
                        enclave.config.ts
                      </span>
</div>
<div className="flex-1 overflow-y-hidden p-3 space-y-2 font-mono text-[10px]">
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">14:23:41</span>
<span className="text-red-400 font-bold">BLOCKED</span>
<span className="group-hover:text-white transition-colors">
                          model-exfil-blocked
                        </span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">14:23:35</span>
<span className="text-emerald-400 font-bold">SHIELDED</span>
<span className="group-hover:text-white transition-colors">
                          tls-key-shielded
                        </span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">14:23:28</span>
<span className="text-yellow-400 font-bold">FLAGGED</span>
<span className="group-hover:text-white transition-colors">
                          anomaly-flagged
                        </span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">14:23:15</span>
<span className="text-emerald-400 font-bold">VERIFIED</span>
<span className="group-hover:text-white transition-colors">
                          enclave-verified
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-10 left-0 right-0 h-20 bg-red-500/10 blur-[50px] pointer-events-none z-0"></div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-black/70 to-black z-[15]"></div>


</section>

<section className="relative py-24 overflow-hidden border-t border-white/5" id="workflow">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-950/20 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)]">
<span className="text-[10px] font-semibold tracking-widest uppercase text-red-300 font-mono">
              Built for security. Designed for scale.
            </span>
</div>
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">
            Confidential computing, deployed in minutes.
          </h2>
<p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            Go from exposed to fully protected without re-architecting secure
            your models and data where they already run.
          </p>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-red-500/20 transition-all card-animate-glow" style={{animationDelay: '0s'}}>
<div className="-top-4 flex text-xs font-bold text-white font-mono bg-red-700 w-8 h-8 rounded-full absolute left-6 shadow-[0_0_15px_rgba(239,68,68,0.4)] items-center justify-center">
                1
              </div>
<h3 className="text-lg font-semibold text-white mt-4 mb-2">
                Deploy in an Enclave
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Move your AI workloads into hardware-secured enclaves — no code
                rewrite required.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-red-500/20 transition-all card-animate-glow" style={{animationDelay: '1s'}}>
<div className="-top-4 flex text-xs font-bold text-white font-mono bg-red-700 w-8 h-8 rounded-full absolute left-6 shadow-[0_0_15px_rgba(239,68,68,0.4)] items-center justify-center">
                2
              </div>
<h3 className="text-lg font-semibold text-white mt-4 mb-2">
                Shield Data &amp; Models
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Encrypt data in use and lock model IP at the CPU level, sealed
                from every outside party.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-red-500/20 transition-all card-animate-glow" style={{animationDelay: '2s'}}>
<div className="-top-4 flex text-xs font-bold text-white font-mono bg-red-700 w-8 h-8 rounded-full absolute left-6 shadow-[0_0_15px_rgba(239,68,68,0.4)] items-center justify-center">
                3
              </div>
<h3 className="text-lg font-semibold text-white mt-4 mb-2">
                Detect &amp; Defend
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Monitor for threats in real time and neutralize them before they
                ever reach your data.
              </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-black/20" id="features">
<div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Security
              <span className="text-gradient-wolf text-[#ff0000] bg-[#ff0000]">without compromise.</span>
</h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
              Run your models and manage your data securely protected at the
              hardware level, without slowing anything down or rewriting your
              stack.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '0.5s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Confidential Computing
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Operate applications and data inside hardware-secured enclaves —
                invisible to hackers, insiders, and cloud providers.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '1.5s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                CPU-Level AI Security
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Quantum Armor embeds defenses at the CPU level, shielding your
                AI and ML models from evolving threats.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '2.5s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Proactive Threat Detection
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Detect and neutralize cyber threats in real time, keeping
                systems secure and data intact.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '3s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Secure Collaboration
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Multiple organizations even competitors share insights and train
                together while keeping every dataset private.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '3.5s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Safeguard AI/ML Models
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Protect model IP and trade secrets from exposure, preserving
                brand reputation and compliance.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all hover:bg-red-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '4s'}}>
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Built-In Privacy &amp; Compliance
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Ship products with security and privacy designed in, meeting
                strict regulations from day one.
              </p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-32 bg-[#030508]/40 relative" id="pricing">
<style>
          @keyframes pricing-card-rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }
        </style>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">
              Protection that
              <span className="text-gradient-wolf">scales.</span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
              Start with a free trial. Scale to enterprise when you're ready.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mr-auto ml-auto gap-x-8 gap-y-8">
<div className="relative group rounded-3xl p-[1px] transition-all duration-300 hover:bg-white/[0.04]">
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-white/5">
<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'left', width: '200%', height: '16rem', backgroundImage: 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(0, 95%, 25%) 40%, hsl(0, 95%, 25%) 60%, hsla(0, 0%, 40%, 0) 100%)', animation: 'pricing-card-rotate 8s linear infinite'}}></div>
</div>
<div className="relative z-10 flex h-full flex-col justify-between rounded-[calc(1.5rem-1px)] p-8" style={{backgroundColor: 'hsla(240, 15%, 9%, 1)', backgroundImage: 'radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(0, 84%, 18%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(355, 96%, 20%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(348, 100%, 18%, 1) 0px, transparent 85%)', boxShadow: '0px -16px 24px 0px rgba(239, 68, 68, 0.06) inset'}}>
<div className="">
<h3 className="text-lg font-semibold text-slate-400 mb-2">
                    Starter
                  </h3>
<p className="text-sm text-slate-500 mb-6 font-light">
                    For teams securing their first AI workloads.
                  </p>
<div className="text-4xl font-bold text-white mb-8 tracking-tight">
                    Free
                    <span className="text-lg font-normal text-slate-500">
                      /trial
                    </span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      One protected enclave
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Real-time threat detection
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Model security basics
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Community support
                    </li>
</ul>
</div>
<a className="block hover:bg-white/10 transition-colors font-semibold text-white text-center bg-gradient-to-b from-[#f41010] to-[#570505] w-full rounded-xl px-4 py-3" href="#contacto">
                  Start Free Trial
                </a>
</div>
</div>
<div className="relative group rounded-3xl p-[1px] transition-all duration-300 hover:bg-white/[0.04] shadow-[0_0_30px_rgba(239,68,68,0.08)]">
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl bg-gradient-to-b from-red-950/40 to-white/5">
<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', transformOrigin: 'left', width: '200%', height: '16rem', backgroundImage: 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(0, 95%, 25%) 40%, hsl(0, 95%, 25%) 60%, hsla(0, 0%, 40%, 0) 100%)', animation: 'pricing-card-rotate 8s linear infinite'}}></div>
</div>
<div className="relative z-10 flex h-full flex-col justify-between rounded-[calc(1.5rem-1px)] p-8" style={{backgroundColor: 'hsla(240, 15%, 9%, 1)', backgroundImage: 'radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsla(0, 84%, 18%, 1) 0px, transparent 85%), radial-gradient(at 41% 94%, hsla(355, 96%, 20%, 1) 0px, transparent 85%), radial-gradient(at 100% 99%, hsla(348, 100%, 18%, 1) 0px, transparent 85%)', boxShadow: '0px -16px 24px 0px rgba(239, 68, 68, 0.08) inset'}}>
<div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-red-600 text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                  Recommended
                </div>
<div className="">
<h3 className="text-lg font-semibold text-red-400 mb-2">
                    Enterprise
                  </h3>
<p className="text-sm text-slate-500 mb-6 font-light">
                    For mission-critical AI in regulated industries.
                  </p>
<div className="text-4xl font-bold text-white mb-8 tracking-tight">
                    Custom
                    <span className="text-lg font-normal text-slate-500">
                      /tailored
                    </span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Unlimited enclaves
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      CPU-level model protection
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Secure multi-party collaboration
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Compliance &amp; audit reporting
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Dedicated security support
                    </li>
</ul>
</div>
<a className="block hover:bg-red-500 transition-colors hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] font-semibold text-white text-center bg-gradient-to-b from-[#f41010] to-[#570505] w-full rounded-xl px-4 py-3 shadow-[0_0_25px_rgba(239,68,68,0.5)]" href="#contacto">
                  Book a Demo
                </a>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative" id="testimonials">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                Trusted to
                <span className="text-gradient-wolf block">protect</span>
                sensitive
                <span className="text-gradient">data.</span>
</h2>
<p className="text-slate-400 font-light mb-8">
                See how teams secure their AI and data with AIStudio without
                slowing down.
              </p>
<div className="space-y-6 border-t border-white/5 pt-8">
<div>
<div className="text-3xl font-bold text-white mb-1">Multiple</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold font-mono">
                    Breaches Prevented
                  </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">0</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold font-mono">
                    Resource Drain
                  </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-semibold font-mono">
                    Continuous Protection
                  </div>
</div>
</div>
</div>
<div className="md:col-span-7 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative card-animate-glow" style={{animationDelay: '1.8s'}}>
<div className="flex gap-1 mb-6 text-yellow-500">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path className="" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<blockquote className="text-lg text-slate-300 font-light italic leading-relaxed mb-6">
                "The proactive threat detection has saved us from multiple
                potential breaches. It runs smoothly without draining system
                resources we trust AIStudio to keep our sensitive data secure,
                and the peace of mind is invaluable."
              </blockquote>
<div className="flex items-center justify-between">
<div className="">
<div className="font-semibold text-white">Abdu Teseer</div>
<div className="text-xs text-slate-500">Verified Customer</div>
</div>
<span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5 font-mono">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  Verified Review
                </span>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left">
<a className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4 font-mono" href="#">
                  See all 120 reviews (4.9★)
                </a>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 border-t border-white/5 relative" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">
              Security,
              <span className="text-gradient-wolf">clarified.</span>
</h2>
<p className="text-lg text-slate-400 font-light">
              What you need to know about confidential computing with AIStudio.
            </p>
</div>
<div className="space-y-6">
<div className="border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 card-animate-glow" style={{animationDelay: '0.2s'}}>
<h3 className="text-base font-semibold text-white mb-2">
                What is confidential computing, exactly?
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                It runs your data and code inside hardware-secured enclaves, so
                information stays encrypted even while in use invisible to
                hackers, insiders, and the cloud provider itself.
              </p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] card-animate-glow" style={{animationDelay: '1.2s'}}>
<h3 className="text-base font-semibold text-white mb-2">
                Do I have to rewrite my AI stack?
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                No. AIStudio secures the models and data where they already run,
                so you get protection without re-architecting your applications.
              </p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] card-animate-glow" style={{animationDelay: '2.2s'}}>
<h3 className="text-base font-semibold text-white mb-2">
                How are my models protected from theft?
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                Quantum Armor embeds defenses at the CPU level, locking model IP
                and trade secrets against exfiltration and evolving attacks.
              </p>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] card-animate-glow" style={{animationDelay: '3.2s'}}>
<h3 className="text-base font-semibold text-white mb-2">
                Can separate organizations collaborate safely?
              </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                Yes. Multiple parties even competitors can train and share
                insights together while each dataset stays completely private.
              </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-32" id="contacto">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight text-white sm:text-5xl font-medium mb-6">
            Ready to
            <span className="text-gradient-wolf">secure</span>
            your
            <span className="text-gradient">AI?</span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Protect your models, your data, and your reputation with AI-powered
            confidential computing built in at the hardware level.
          </p>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-16">
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center gap-2 overflow-hidden transition-all hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.7)] text-sm font-semibold text-white bg-gradient-to-b from-[#f41010] to-[#570505] rounded-xl px-8 py-4 relative shadow-[0_0_30px_rgba(239,68,68,0.5)]" href="mailto:Team@honeypotz.net?subject=Book%20a%20Demo">
              Book a Demo
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10" href="mailto:Team@honeypotz.net?subject=Start%20Free%20Trial">
              Start Free Trial
            </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500 font-mono">
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              Hidden from cloud providers
            </span>
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              No stack rewrite
            </span>
<span className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
              Real-time protection
            </span>
</div>
</div>
<div className="text-center pt-8 border-t border-white/5">
<p className="text-slate-500 text-sm">
            Need immediate assistance? Reach out to
            <a className="text-red-400 hover:text-red-300 transition-colors" href="mailto:Team@honeypotz.net">
              Team@honeypotz.net
            </a>
</p>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-[#010203] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-1 md:col-span-2 lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="flex text-xs font-bold text-white bg-gradient-to-b from-[#f41010] to-[#570505] w-8 h-8 rounded items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<span className="text-xl font-bold text-white tracking-tight">
                AISTUDIO
              </span>
</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A new era of digital security where cutting-edge AI meets
              effortless protection. Developed by Honeypotz Inc., founded 2016.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                Secure globally
              </span>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 font-mono">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                  All systems operational
                </span>
</div>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 text-sm">Solutions</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  AIOps
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Confidential Computing
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  DeepBeat ID
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Quantum Armor
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  About
                </a>
</li>
<li className="">
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Investors
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li className="">
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Whitepaper
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Docs
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Community
                </a>
</li>
<li className="">
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Case Studies
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Terms &amp; Conditions
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-red-400 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
<div className="col-span-1 md:col-span-2 lg:col-span-6 border-t border-white/5 pt-10 mt-6">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6">
<h4 className="font-semibold text-white mb-2 text-sm">
                  Investor &amp; security updates
                </h4>
<p className="text-xs text-slate-500">
                  Stay informed on the latest updates, results, and
                  announcements.
                </p>
</div>
<div className="lg:col-span-6 flex gap-3 max-w-md w-full ml-auto">
<input className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:border-red-500/50" placeholder="Enter your email" type="email"/>
<button className="hover:bg-red-500 transition-colors shrink-0 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] text-sm font-semibold text-white bg-gradient-to-b from-[#f41010] to-[#570505] rounded-lg px-6 py-2.5 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                  Subscribe
                </button>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
<span>© 2026 AIStudio / Honeypotz Inc. All rights reserved.</span>
<span className="hidden md:inline">|</span>
<span>
              8 The Green STE R, Dover, DE 19901 · +1 305 390 0563 ·
              Team@honeypotz.net
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
