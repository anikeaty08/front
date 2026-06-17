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
            const ctx = document.getElementById('mainChart').getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
                    datasets: [{
                        label: 'Reports',
                        data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 38, 42, 45],
                        borderColor: '#3b82f6',
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
<div id="stars-small" style={{position: 'absolute', width: '1px', height: '1px', background: 'transparent', animation: '100s linear 0s infinite normal none running animStar', boxShadow: 'rgba(255, 255, 255, 0.3) 839px 1620px, rgba(255, 255, 255, 0.3) 864px 674px, rgba(255, 255, 255, 0.3) 1593px 845px, rgba(255, 255, 255, 0.3) 1555px 452px, rgba(255, 255, 255, 0.3) 1512px 1585px, rgba(255, 255, 255, 0.3) 1145px 1573px, rgba(255, 255, 255, 0.3) 1435px 1826px, rgba(255, 255, 255, 0.3) 330px 1606px, rgba(255, 255, 255, 0.3) 1348px 1407px, rgba(255, 255, 255, 0.3) 119px 473px, rgba(255, 255, 255, 0.3) 164px 812px, rgba(255, 255, 255, 0.3) 1894px 956px, rgba(255, 255, 255, 0.3) 1376px 1452px, rgba(255, 255, 255, 0.3) 300px 801px, rgba(255, 255, 255, 0.3) 1987px 1238px, rgba(255, 255, 255, 0.3) 1574px 1923px, rgba(255, 255, 255, 0.3) 459px 1938px, rgba(255, 255, 255, 0.3) 518px 1403px, rgba(255, 255, 255, 0.3) 1016px 1055px, rgba(255, 255, 255, 0.3) 1102px 1718px, rgba(255, 255, 255, 0.3) 1947px 648px, rgba(255, 255, 255, 0.3) 23px 211px, rgba(255, 255, 255, 0.3) 1690px 883px, rgba(255, 255, 255, 0.3) 79px 1406px, rgba(255, 255, 255, 0.3) 1091px 1489px, rgba(255, 255, 255, 0.3) 363px 860px, rgba(255, 255, 255, 0.3) 1115px 1042px, rgba(255, 255, 255, 0.3) 1742px 1933px, rgba(255, 255, 255, 0.3) 821px 1122px, rgba(255, 255, 255, 0.3) 1931px 1492px, rgba(255, 255, 255, 0.3) 1039px 403px, rgba(255, 255, 255, 0.3) 163px 172px, rgba(255, 255, 255, 0.3) 255px 1273px, rgba(255, 255, 255, 0.3) 1898px 719px, rgba(255, 255, 255, 0.3) 1589px 1869px, rgba(255, 255, 255, 0.3) 1041px 761px, rgba(255, 255, 255, 0.3) 136px 154px, rgba(255, 255, 255, 0.3) 1038px 1151px, rgba(255, 255, 255, 0.3) 1978px 429px, rgba(255, 255, 255, 0.3) 1300px 555px, rgba(255, 255, 255, 0.3) 45px 586px, rgba(255, 255, 255, 0.3) 168px 1189px, rgba(255, 255, 255, 0.3) 461px 174px, rgba(255, 255, 255, 0.3) 385px 325px, rgba(255, 255, 255, 0.3) 1807px 450px, rgba(255, 255, 255, 0.3) 657px 1068px, rgba(255, 255, 255, 0.3) 1315px 1347px, rgba(255, 255, 255, 0.3) 1565px 310px, rgba(255, 255, 255, 0.3) 1250px 1962px, rgba(255, 255, 255, 0.3) 1781px 250px, rgba(255, 255, 255, 0.3) 1286px 711px, rgba(255, 255, 255, 0.3) 1722px 588px, rgba(255, 255, 255, 0.3) 1533px 364px, rgba(255, 255, 255, 0.3) 968px 1873px, rgba(255, 255, 255, 0.3) 248px 1408px, rgba(255, 255, 255, 0.3) 205px 1664px, rgba(255, 255, 255, 0.3) 58px 467px, rgba(255, 255, 255, 0.3) 1948px 1669px, rgba(255, 255, 255, 0.3) 52px 1946px, rgba(255, 255, 255, 0.3) 1832px 54px, rgba(255, 255, 255, 0.3) 1437px 749px, rgba(255, 255, 255, 0.3) 1072px 1033px, rgba(255, 255, 255, 0.3) 705px 1361px, rgba(255, 255, 255, 0.3) 1743px 1776px, rgba(255, 255, 255, 0.3) 338px 841px, rgba(255, 255, 255, 0.3) 281px 221px, rgba(255, 255, 255, 0.3) 1398px 1767px, rgba(255, 255, 255, 0.3) 362px 657px, rgba(255, 255, 255, 0.3) 946px 996px, rgba(255, 255, 255, 0.3) 101px 403px, rgba(255, 255, 255, 0.3) 1189px 604px, rgba(255, 255, 255, 0.3) 1700px 1171px, rgba(255, 255, 255, 0.3) 623px 1505px, rgba(255, 255, 255, 0.3) 946px 1410px, rgba(255, 255, 255, 0.3) 1005px 1599px, rgba(255, 255, 255, 0.3) 2px 496px, rgba(255, 255, 255, 0.3) 1239px 438px, rgba(255, 255, 255, 0.3) 765px 1505px, rgba(255, 255, 255, 0.3) 92px 1600px, rgba(255, 255, 255, 0.3) 420px 6px, rgba(255, 255, 255, 0.3) 582px 247px, rgba(255, 255, 255, 0.3) 957px 33px, rgba(255, 255, 255, 0.3) 266px 1325px, rgba(255, 255, 255, 0.3) 1771px 1845px, rgba(255, 255, 255, 0.3) 1724px 526px, rgba(255, 255, 255, 0.3) 1219px 550px, rgba(255, 255, 255, 0.3) 1376px 632px, rgba(255, 255, 255, 0.3) 1498px 1839px, rgba(255, 255, 255, 0.3) 33px 655px, rgba(255, 255, 255, 0.3) 1639px 1361px, rgba(255, 255, 255, 0.3) 1080px 1111px, rgba(255, 255, 255, 0.3) 1208px 1619px, rgba(255, 255, 255, 0.3) 560px 1119px, rgba(255, 255, 255, 0.3) 292px 1358px, rgba(255, 255, 255, 0.3) 679px 1095px, rgba(255, 255, 255, 0.3) 852px 1050px, rgba(255, 255, 255, 0.3) 1486px 264px, rgba(255, 255, 255, 0.3) 1382px 1988px, rgba(255, 255, 255, 0.3) 896px 668px, rgba(255, 255, 255, 0.3) 1257px 851px, rgba(255, 255, 255, 0.3) 384px 513px, rgba(255, 255, 255, 0.3) 646px 701px, rgba(255, 255, 255, 0.3) 1070px 627px, rgba(255, 255, 255, 0.3) 1227px 547px, rgba(255, 255, 255, 0.3) 1927px 390px, rgba(255, 255, 255, 0.3) 1957px 1125px, rgba(255, 255, 255, 0.3) 362px 1800px, rgba(255, 255, 255, 0.3) 1957px 1294px, rgba(255, 255, 255, 0.3) 1890px 1150px, rgba(255, 255, 255, 0.3) 1670px 1697px, rgba(255, 255, 255, 0.3) 1186px 1861px, rgba(255, 255, 255, 0.3) 1843px 1044px, rgba(255, 255, 255, 0.3) 799px 1560px, rgba(255, 255, 255, 0.3) 1864px 1795px, rgba(255, 255, 255, 0.3) 1858px 1803px, rgba(255, 255, 255, 0.3) 1496px 1310px, rgba(255, 255, 255, 0.3) 1565px 431px, rgba(255, 255, 255, 0.3) 1233px 631px, rgba(255, 255, 255, 0.3) 1727px 149px, rgba(255, 255, 255, 0.3) 1271px 1586px, rgba(255, 255, 255, 0.3) 1725px 565px, rgba(255, 255, 255, 0.3) 392px 353px, rgba(255, 255, 255, 0.3) 200px 354px, rgba(255, 255, 255, 0.3) 1321px 809px, rgba(255, 255, 255, 0.3) 1482px 1360px, rgba(255, 255, 255, 0.3) 978px 549px, rgba(255, 255, 255, 0.3) 684px 1761px, rgba(255, 255, 255, 0.3) 1961px 1909px, rgba(255, 255, 255, 0.3) 224px 785px, rgba(255, 255, 255, 0.3) 48px 582px, rgba(255, 255, 255, 0.3) 905px 1187px, rgba(255, 255, 255, 0.3) 638px 85px, rgba(255, 255, 255, 0.3) 1683px 1965px, rgba(255, 255, 255, 0.3) 422px 1884px, rgba(255, 255, 255, 0.3) 1118px 1535px, rgba(255, 255, 255, 0.3) 911px 1976px, rgba(255, 255, 255, 0.3) 1457px 559px, rgba(255, 255, 255, 0.3) 616px 911px, rgba(255, 255, 255, 0.3) 1279px 584px, rgba(255, 255, 255, 0.3) 677px 771px, rgba(255, 255, 255, 0.3) 231px 193px, rgba(255, 255, 255, 0.3) 970px 996px, rgba(255, 255, 255, 0.3) 667px 344px, rgba(255, 255, 255, 0.3) 967px 863px, rgba(255, 255, 255, 0.3) 1061px 1799px, rgba(255, 255, 255, 0.3) 998px 501px, rgba(255, 255, 255, 0.3) 515px 859px, rgba(255, 255, 255, 0.3) 135px 1918px, rgba(255, 255, 255, 0.3) 98px 211px, rgba(255, 255, 255, 0.3) 1089px 186px, rgba(255, 255, 255, 0.3) 630px 133px, rgba(255, 255, 255, 0.3) 1936px 620px, rgba(255, 255, 255, 0.3) 305px 1431px, rgba(255, 255, 255, 0.3) 1164px 101px, rgba(255, 255, 255, 0.3) 101px 6px, rgba(255, 255, 255, 0.3) 1180px 1440px, rgba(255, 255, 255, 0.3) 163px 1020px, rgba(255, 255, 255, 0.3) 490px 689px, rgba(255, 255, 255, 0.3) 853px 308px, rgba(255, 255, 255, 0.3) 1926px 559px, rgba(255, 255, 255, 0.3) 1275px 1240px, rgba(255, 255, 255, 0.3) 1597px 1371px, rgba(255, 255, 255, 0.3) 1217px 285px, rgba(255, 255, 255, 0.3) 867px 228px, rgba(255, 255, 255, 0.3) 1234px 809px, rgba(255, 255, 255, 0.3) 347px 1700px, rgba(255, 255, 255, 0.3) 1787px 1360px, rgba(255, 255, 255, 0.3) 926px 831px, rgba(255, 255, 255, 0.3) 136px 902px, rgba(255, 255, 255, 0.3) 603px 219px, rgba(255, 255, 255, 0.3) 1822px 835px, rgba(255, 255, 255, 0.3) 1936px 1925px, rgba(255, 255, 255, 0.3) 40px 862px, rgba(255, 255, 255, 0.3) 1329px 897px, rgba(255, 255, 255, 0.3) 1334px 597px, rgba(255, 255, 255, 0.3) 835px 1413px, rgba(255, 255, 255, 0.3) 1568px 56px, rgba(255, 255, 255, 0.3) 927px 760px, rgba(255, 255, 255, 0.3) 1045px 473px, rgba(255, 255, 255, 0.3) 1877px 1400px, rgba(255, 255, 255, 0.3) 1810px 59px, rgba(255, 255, 255, 0.3) 798px 288px, rgba(255, 255, 255, 0.3) 1535px 45px, rgba(255, 255, 255, 0.3) 224px 555px, rgba(255, 255, 255, 0.3) 1946px 852px, rgba(255, 255, 255, 0.3) 76px 600px, rgba(255, 255, 255, 0.3) 1101px 616px, rgba(255, 255, 255, 0.3) 277px 1168px, rgba(255, 255, 255, 0.3) 1043px 429px, rgba(255, 255, 255, 0.3) 1461px 85px, rgba(255, 255, 255, 0.3) 242px 844px, rgba(255, 255, 255, 0.3) 781px 257px, rgba(255, 255, 255, 0.3) 859px 1389px, rgba(255, 255, 255, 0.3) 624px 164px, rgba(255, 255, 255, 0.3) 1774px 626px, rgba(255, 255, 255, 0.3) 1207px 985px, rgba(255, 255, 255, 0.3) 27px 1917px, rgba(255, 255, 255, 0.3) 799px 78px, rgba(255, 255, 255, 0.3) 1445px 1857px, rgba(255, 255, 255, 0.3) 664px 944px'}}></div>
</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020204]/80 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030508]/60 backdrop-blur-xl">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<span className="text-sm font-medium text-white tracking-tighter">
              CYBERNUT
            </span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#features">
              Features
            </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#faq">
              FAQ
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]" href="#contacto">
            Book a Demo
          </a>
</div>
</div>
</nav>
<main className="relative">



<section className="relative pt-32 pb-24 overflow-hidden" id="hero">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 text-left space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-widest uppercase text-blue-300 font-mono">
                The #1 K-12 Security Awareness Platform
              </span>
</div>
<h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              The phishing attack starts at school.
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                We stop it there.
              </span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              CyberNut turns students, teachers, and staff into a human
              firewall. Train your district automatically, detect live threats
              in seconds, and stay compliant without exhausting your IT team.
            </p>
<div className="relative w-full max-w-xl aspect-video rounded-xl border border-white/10 bg-slate-950/40 overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
<span>Watch CyberNut in Action (2:14)</span>
<span className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Demo Video
                </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]" href="#contacto">
                Book a Demo
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10" href="#contacto">
                Request a Free Assessment
              </a>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                FERPA &amp; COPPA compliant
              </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-blue-400 text-lg" icon="solar:user-check-linear"></iconify-icon>
                400,000+ protected users
              </span>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 blur-xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-6 shadow-2xl space-y-6">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-700"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-500/10">
                  District Console
                </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
<p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Threat reports
                  </p>
<p className="text-2xl font-bold text-white mt-1">2,741</p>
<span className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
                    +18% this month
                  </span>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
<p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Average Click Rate
                  </p>
<p className="text-2xl font-bold text-white mt-1">1.8%</p>
<span className="text-[10px] text-blue-400 flex items-center gap-1 mt-1">
<iconify-icon className="text-sm" icon="solar:arrow-right-down-linear"></iconify-icon>
                    -94% drop
                  </span>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
<div className="flex items-center justify-between mb-4">
<p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Active Campaign Progress
                  </p>
<span className="text-[10px] text-blue-400 font-mono">
                    Running
                  </span>
</div>
<div className="h-40 relative">
<canvas id="mainChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-24 overflow-hidden border-t border-white/5 text-center" id="workflow">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<span className="text-xs font-medium tracking-widest uppercase text-blue-300 font-mono">
              Built for K-12. Loved by IT.
            </span>
</div>
<h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl mb-6">
            From first click to reported threat.
          </h2>
<p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            Turn every staff member and student into a sensor — reporting real
            threats instead of falling for them.
          </p>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '0s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                1
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">Simulate</h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Launch realistic, age-appropriate phishing simulations across
                staff and students.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '1s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                2
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">
                Train &amp; Reinforce
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Adaptive lessons and gamified rewards turn safe behavior into a
                lasting habit.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '2s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                3
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">
                Detect &amp; Respond
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Real reports surface live threats, and Active Threat Manager
                removes them district-wide.
              </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-black/20" id="features">
<div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Cyber safety,
              <span className="text-gradient-wolf">built for classrooms.</span>
</h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
              Everything a district needs to reduce human risk — staff,
              students, and IT — without overloading the people who run your
              network.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '0.5s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Staff Phishing Simulation
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Real-world simulated attacks with adaptive, behavior-based
                training that targets weak points without overloading IT.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '1.5s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Student Phishing Training
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Age-appropriate, gamified simulations that build cyber awareness
                and media literacy from a young age.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '2.5s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:shield-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Active Threat Manager
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Agentic AI surfaces early risk indicators and lets you delete
                phishing attacks district-wide, instantly.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '3s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Advanced Threat Search
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Search every inbox across the district in seconds to identify,
                investigate, and contain threats.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '3.5s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Compliance &amp; Learning Center
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Align state mandates and policies with real behavior change, all
                in one simple progress view.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '4s'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                Reporting &amp; Analytics
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Turn training data into measurable risk reduction with clear,
                district-wide visibility.
              </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden border-t border-white/5" id="how-it-works">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<span className="text-xs font-medium tracking-widest uppercase text-blue-300 font-mono">
              Built for K-12. Loved by IT.
            </span>
</div>
<h2 className="text-4xl font-normal tracking-tight text-white sm:text-5xl mb-6">
            From first click
            <span className="text-gradient-wolf">to reported threat.</span>
</h2>
<p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            Turn every staff member and student into a sensor — reporting real
            threats instead of falling for them.
          </p>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '0s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                1
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">Simulate</h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Launch realistic, age-appropriate phishing simulations across
                staff and students.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '1s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                2
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">
                Train &amp; Reinforce
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Adaptive lessons and gamified rewards turn safe behavior into a
                lasting habit.
              </p>
</div>
<div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all card-animate-glow" style={{animationDelay: '2s'}}>
<div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                3
              </div>
<h3 className="text-lg font-medium text-white mt-4 mb-2">
                Detect &amp; Respond
              </h3>
<p className="text-slate-400 text-xs leading-relaxed">
                Real reports surface live threats, and Active Threat Manager
                removes them district-wide.
              </p>
</div>
</div>
</div>
</section>
<section className="relative py-32 overflow-hidden border-t border-white/5 bg-black/20" id="pricing">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Pricing built
              <span className="text-gradient-wolf">for districts.</span>
</h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
              Affordable, K-12-friendly, and built to scale across your whole
              district.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] flex flex-col card-animate-glow" style={{animationDelay: '0.5s'}}>
<div>
<p className="text-xs font-medium tracking-widest uppercase text-slate-500 font-mono mb-3">
                  Single School
                </p>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                  For individual schools starting their cyber-awareness program.
                </h3>
<div className="my-8">
<span className="text-4xl font-normal tracking-tight text-white">
                    Custom
                  </span>
<span className="block text-xs font-mono text-slate-500 mt-2">
                    / per school
                  </span>
</div>
<ul className="space-y-3 text-xs text-slate-400 leading-relaxed mb-8">
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Staff + student phishing simulation</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Gamified training</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Compliance &amp; learning center</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Reporting dashboard</span>
</li>
</ul>
</div>
<a className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]" href="#contacto">
                Book a Demo
              </a>
</div>
<div className="relative p-8 rounded-2xl border border-blue-500/30 bg-blue-950/[0.04] hover:border-blue-500/50 transition-all hover:bg-blue-500/[0.04] flex flex-col card-animate-glow" style={{animationDelay: '1.5s'}}>
<div className="absolute -top-4 left-6 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono">
                Recommended
              </div>
<div>
<p className="text-xs font-medium tracking-widest uppercase text-blue-300 font-mono mb-3">
                  District
                </p>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                  For districts protecting every staff member and student.
                </h3>
<div className="my-8">
<span className="text-4xl font-normal tracking-tight text-white">
                    Custom
                  </span>
<span className="block text-xs font-mono text-blue-300 mt-2">
                    / district-wide
                  </span>
</div>
<ul className="space-y-3 text-xs text-slate-400 leading-relaxed mb-8">
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Everything in Single School</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Active Threat Manager</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Advanced Threat Search</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>State-compliance alignment</span>
</li>
<li className="flex gap-3">
<span className="text-blue-400">·</span>
<span>Dedicated district support</span>
</li>
</ul>
</div>
<a className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]" href="#contacto">
                Request a Free Assessment
              </a>
</div>
</div>
</div>
</section>
<section className="relative py-32 overflow-hidden border-t border-white/5" id="testimonials">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/10 blur-[120px] rounded-full"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Trusted by
              <span className="text-gradient-wolf">400+</span>
              school districts.
            </h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
              See how districts cut phishing risk and built lasting cyber habits
              with CyberNut.
            </p>
</div>
<div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:border-blue-500/30 transition-all">
<p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8">
              "The drop in risky email interactions has been dramatic. Staff
              actually report suspicious emails now instead of clicking —
              CyberNut turned cyber awareness into a habit across our whole
              district."
              <span className="text-slate-500 text-sm">
                (placeholder — confirm exact wording with the customer before
                publishing)
              </span>
</p>
<div className="h-1.5 w-1.5 bg-blue-400 rounded-full">
<div>
<h3 className="text-sm font-medium text-white">Mark Washington</h3>
<p className="text-xs text-slate-400 mt-1">
                  Zeeland Public Schools
                </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-4 py-1.5 backdrop-blur-md">
<span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span>
<span className="text-xs font-medium tracking-widest uppercase text-blue-300 font-mono">
                  Verified Review
                </span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">
                94%
              </div>
<p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Drop in Risky Clicks
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">
                27K+
              </div>
<p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Real Threats Reported
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] text-center">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-3">
                600+
              </div>
<p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Suspicious Emails Flagged
              </p>
</div>
</div>
<div className="text-center mt-10">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
              View case studies
            </a>
</div>
</div>
</section>
<section className="relative py-32 overflow-hidden border-t border-white/5 bg-black/20" id="faq">
<div className="relative z-10 max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
              Questions
              <span className="text-gradient-wolf">from IT.</span>
</h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light">
              What district tech leaders ask before rolling out CyberNut.
            </p>
</div>
<div className="space-y-4">
<details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-blue-500/30 transition-all">
<summary className="text-blue-400 group-open:rotate-45 transition-transform">
                Is this actually built for K-12, or repurposed corporate
                training?
                <span className="text-blue-400 group-open:rotate-45 transition-transform">
                  +
                </span>
</summary>
<p className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                Built for K-12 from the ground up — age-appropriate for
                students, light on IT, and the alternative to corporate tools
                like KnowBe4 and InfoSec.
              </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-blue-500/30 transition-all">
<summary className="text-blue-400 group-open:rotate-45 transition-transform">
                Will this overload my IT team?
                <span className="text-blue-400 group-open:rotate-45 transition-transform">
                  +
                </span>
</summary>
<p className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                No. The adaptive engine targets weak points automatically and
                Active Threat Manager handles district-wide removal, so it runs
                without adding to your team's load.
              </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-blue-500/30 transition-all">
<summary className="text-blue-400 group-open:rotate-45 transition-transform">
                Does it meet our compliance and privacy requirements?
                <span className="text-blue-400 group-open:rotate-45 transition-transform">
                  +
                </span>
</summary>
<p className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                Yes — FERPA, COPPA, GDPR, and state-certified, with a Compliance
                &amp; Learning Center that maps training to mandates.
              </p>
</details>
<details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-blue-500/30 transition-all">
<summary className="text-blue-400 group-open:rotate-45 transition-transform">
                How do you keep students and staff engaged?
                <span className="text-blue-400 group-open:rotate-45 transition-transform">
                  +
                </span>
</summary>
<p className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                Gamification: acorns, achievements, and leaderboards turn safe
                behavior into a habit, not a one-time checkbox.
              </p>
</details>
</div>
</div>
</section>
<section className="relative py-32 overflow-hidden border-t border-white/5" id="contacto">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020204]/80 to-transparent blur-[80px]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
            Protect your
            <span className="text-gradient-wolf">district</span>
            before the
            <span className="text-gradient-wolf">next click.</span>
</h2>
<p className="text-slate-400 text-lg max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Join 400+ districts and over 400,000 teachers, admins, and students
            building real cyber resilience with CyberNut.
          </p>
<div className="flex flex-wrap items-center justify-center gap-4 mb-10">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]" href="#contacto">
              Book a Demo
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10" href="#contacto">
              Request a Free Assessment
            </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              FERPA &amp; COPPA certified
            </span>
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              Built for K-12
            </span>
<span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              Loved by IT teams
            </span>
</div>
</div>
</section>
</main>
<footer className="relative border-t border-white/5 bg-[#020204] py-16 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
<div className="lg:col-span-4">
<h2 className="text-sm font-medium text-white tracking-tighter mb-4">
              CYBERNUT
            </h2>
<p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
              The #1 human-risk and security-awareness platform built for K-12 —
              protecting students and staff from phishing.
            </p>
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-3 py-1 text-xs font-mono text-blue-300">
<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/20 px-3 py-1 text-xs font-mono text-blue-300">
                Protecting 400+ districts
              </span>
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-3 py-1 text-xs font-mono text-emerald-300">
<span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span>
                All systems operational
              </span>
</div>
</div>
<div className="lg:col-span-5 grid sm:grid-cols-4 gap-8">
<div>
<h3 className="text-xs font-medium tracking-widest uppercase text-white mb-4 font-mono">
                Platform
              </h3>
<ul className="space-y-3 text-xs text-slate-400">
<li>Active Threat Manager</li>
<li>Phishing Simulator</li>
<li>Advanced Threat Search</li>
<li>Compliance</li>
<li>Reporting</li>
<li>Gamification</li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium tracking-widest uppercase text-white mb-4 font-mono">
                Resources
              </h3>
<ul className="space-y-3 text-xs text-slate-400">
<li>White Paper</li>
<li>Case Studies</li>
<li>Phishing Audit</li>
<li>Blog</li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium tracking-widest uppercase text-white mb-4 font-mono">
                Company
              </h3>
<ul className="space-y-3 text-xs text-slate-400">
<li>About Us</li>
<li>News &amp; Press</li>
<li>Partners</li>
<li>Careers</li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium tracking-widest uppercase text-white mb-4 font-mono">
                Legal
              </h3>
<ul className="space-y-3 text-xs text-slate-400">
<li>Privacy Policy</li>
<li>Terms of Service</li>
<li>Data Processing</li>
<li>AI Data Policy</li>
</ul>
</div>
</div>
<div className="lg:col-span-3">
<h3 className="text-xs font-medium tracking-widest uppercase text-white mb-4 font-mono">
              K-12 cyber updates
            </h3>
<p className="text-slate-400 text-xs leading-relaxed mb-4">
              Stay on top of K-12-relevant cyber headlines and CyberNut news.
            </p>
<a className="text-xs text-blue-300 hover:text-blue-200 transition-colors" href="mailto:hello@cybernut.com">
              hello@cybernut.com
            </a>
</div>
</div>
<div className="pt-8 text-xs text-slate-500 font-mono">
          © 2026 CyberNut. All rights reserved.
        </div>
</div>
</footer>

    </>
  );
}
