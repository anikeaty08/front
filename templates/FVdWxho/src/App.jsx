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



    tailwind.config = {
      theme: {
        extend: {
          colors: { bitcoin: '#F7931A', dark: '#171923' },
          fontFamily: { manrope: ['Manrope', 'sans-serif']}
        }
      }
    }
  


      // Animate dots (tick-in)
      window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.dot').forEach((circle, i) => {
          setTimeout(() => {
            circle.classList.add('tick-anim');
            circle.style.opacity = 1;
          }, i*130+150);
        });

        // Animate numbers
        function animateValue(el, to, decimals, prefix = "", suffix = "") {
          let start = 0;
          let duration = 1200;
          let startTime;

          function step(ts) {
            if(!startTime) startTime = ts;
            let progress = Math.min((ts - startTime) / duration, 1);
            let value = start + (to - start) * progress;

            if (decimals === 0)
              value = Math.round(value);
            else
              value = value.toFixed(decimals);

            if(prefix === "$") {
              // format large numbers for $ (K, M, B)
              if(to >= 1e9)
                value = `$${(value/1e9).toFixed(2)}B`;
              else if(to >= 1e6)
                value = `$${(value/1e6).toFixed(1)}M`;
              else if(to >= 1e3)
                value = `$${(value/1e3).toFixed(0)}K`;
              else
                value = `$${value}`;
            } else if(suffix === "%") {
              value = `${value}%`;
            } else if(suffix === " BTC") {
              value = `${value} BTC`;
            }
            el.textContent = value;

            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }

        document.querySelectorAll('.animated-num').forEach((el, i) => {
          let to = parseFloat(el.dataset.target);
          let decimals = 0, prefix = "", suffix = "";
          if(i === 0)
            prefix = "$", decimals = 0;
          else if(i === 1 || i === 2)
            prefix = "$", decimals = 0;
          else if(i === 3)
            decimals = 1, suffix = " BTC";
          else if(i === 4)
            decimals = 1, suffix = "%";
          else
            decimals = 0;
          setTimeout(() => animateValue(el, to, decimals, prefix, suffix), i*150+800);
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
      
<div className="bg-white/10 rounded-2xl shadow-xl border border-white/10 max-w-sm w-full p-6 flex flex-col gap-6 items-center">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-bitcoin rounded-full flex items-center justify-center text-xl font-black">₿</div>
<span className="text-2xl font-semibold">Bitcoin Overview</span>
</div>
<p className="text-sm text-white/70 mb-2">Radar chart: Key Metrics</p>
<div className="w-60 h-60 mx-auto relative">
<svg className="w-full h-full" id="radar-chart" viewbox="0 0 240 240">

<g opacity="0.3" stroke="#fff">
<polygon fill="none" points="120,30 198,75 198,165 120,210 42,165 42,75"></polygon>
<polygon fill="none" points="120,60 174,92.5 174,147.5 120,180 66,147.5 66,92.5"></polygon>
<polygon fill="none" points="120,90 150,110 150,130 120,150 90,130 90,110"></polygon>
<line x1="120" x2="120" y1="30" y2="210"></line>
<line x1="42" x2="198" y1="75" y2="165"></line>
<line x1="198" x2="42" y1="75" y2="165"></line>
</g>

<polyline fill="none" points="120,45 192,90 177,165 120,195 63,150 57,90 120,45" stroke="#F7931A" strokeWidth="2"></polyline>

<circle className="dot" cx="120" cy="45" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>
<circle className="dot" cx="192" cy="90" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>
<circle className="dot" cx="177" cy="165" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>
<circle className="dot" cx="120" cy="195" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>
<circle className="dot" cx="63" cy="150" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>
<circle className="dot" cx="57" cy="90" fill="#F7931A" r="6" style={{opacity: '0'}}></circle>

<text fill="#fff" fontSize="12" text-anchor="middle" x="120" y="22">Price</text>
<text fill="#fff" fontSize="12" text-anchor="start" x="210" y="82">Volume</text>
<text fill="#fff" fontSize="12" text-anchor="end" x="200" y="182">Market Cap</text>
<text fill="#fff" fontSize="12" text-anchor="middle" x="120" y="228">Supply</text>
<text fill="#fff" fontSize="12" text-anchor="start" x="30" y="180">Dominance</text>
<text fill="#fff" fontSize="12" text-anchor="start" x="30" y="70">Tx/24h</text>
</svg>
</div>
<div className="w-full grid grid-cols-3 gap-4 mt-2 text-left">
<div>
<span className="block text-white/70 text-xs">Price</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="36300">$0</span>
</div>
<div>
<span className="block text-white/70 text-xs">Volume</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="29000000000">$0</span>
</div>
<div>
<span className="block text-white/70 text-xs">Market Cap</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="700000000000">$0</span>
</div>
<div>
<span className="block text-white/70 text-xs">Supply</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="19.4">0 BTC</span>
</div>
<div>
<span className="block text-white/70 text-xs">Dominance</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="45.2">0%</span>
</div>
<div>
<span className="block text-white/70 text-xs">Tx/24h</span>
<span className="block font-semibold text-white text-lg animated-num" data-target="320000">0</span>
</div>
</div>

</div>

    </>
  );
}
