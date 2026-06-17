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
      
<div className="" id="root"><div className="relative min-h-screen w-full overflow-hidden"><div className="absolute inset-0"><div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgb(0, 0, 0)', overflow: 'hidden'}}><canvas height="948" style={{display: 'block', width: '1440px', height: '948px'}} width="1440"></canvas><div style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 100%)'}}></div><div style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%)'}}></div></div></div><div className="z-10 min-h-screen flex pr-4 pl-4 relative items-center justify-center"><div className="bg-black/5 backdrop-blur-md brightness-150 border border-white/5 rounded-[36px] p-8 w-full max-w-lg mx-auto text-center"><div className="" style={{position: 'relative', height: '120px'}}><div className="text-pressure-container" style={{position: 'relative', width: '100%', height: '100%', background: 'transparent'}}><style>
        /* Font face if needed */
        @font-face {
          font-family: 'Compressa VF';
          src: url('https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2');
          font-style: normal;
        }

        /* If flex=true => space out each character span - scoped to this component */
        .text-pressure-container .flex {
          display: flex;
          justify-content: space-between;
        }

        /* Stroke class toggles "stroke" effect on each character - scoped to this component */
        .text-pressure-container .stroke span {
          position: relative;
          color: #ffffff; /* normal text color */
        }
        /* The stroke layer sits behind with text-stroke - scoped to this component */
        .text-pressure-container .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          /* If you'd like to shift the stroke up/down, you can add transform here */
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: #ff0000;
        }

        /* If stroke=false => no stroke class => normal text color */
        .text-pressure-title {
          color: #ffffff;
        }
      </style><h1 className="text-pressure-title flex" style={{fontFamily: '"Compressa VF"', textTransform: 'uppercase', fontSize: '99.1111px', lineHeight: '1', transformOrigin: 'center top', margin: '0px', textAlign: 'center', userSelect: 'none', whiteSpace: 'nowrap', fontWeight: '100', width: '100%'}}><span data-char="4" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>4</span><span data-char="0" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>0</span><span data-char="4" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>4</span><span data-char=" " style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}> </span><span data-char="E" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>E</span><span data-char="r" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>r</span><span className="" data-char="r" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>r</span><span data-char="o" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>o</span><span className="" data-char="r" style={{display: 'inline-block', color: 'rgb(255, 255, 255)', fontVariationSettings: '"wght" 100, "wdth" 5, "ital" 0'}}>r</span></h1></div></div><p className="text-2xl font-light text-white/70 mb-8 leading-relaxed">The page you're looking for has been lost in the digital void.</p><a className="button-primary text-md rounded-xl pt-2 pr-4 pb-2 pl-4" href="/">Return to Home</a><div className="bg-black/50 rounded-xl p-6 border border-white/5 mt-8" style={{textAlign: 'left'}}><h3 className="text-white/30 font-light uppercase text-xs mb-4" style={{textAlign: 'left'}}>Troubleshooting Tips:</h3><ul className="text-neutral-400 space-y-3 text-sm" style={{textAlign: 'left', listStyle: 'none', padding: '0px', margin: '0px'}}><li className="flex items-start gap-3 opacity-50" style={{textAlign: 'left'}}><span className="text-white/30 mt-0.5">•</span><span>Check the URL for typos or spelling errors</span></li><li className="flex items-start gap-3 opacity-70" style={{textAlign: 'left'}}><span className="text-white/30 mt-0.5">•</span><span>Your payment may have succeeded, please refresh.</span></li><li className="flex items-start gap-3" style={{textAlign: 'left'}}><span className="text-white/30 mt-0.5">•</span><span>Try refreshing the page or clearing your browser cache</span></li><li className="flex items-start gap-3 opacity-70" style={{textAlign: 'left'}}><span className="text-white/30 mt-0.5">•</span><span className="">Try another browser to see if the issue persists.</span></li><li className="flex items-start gap-3 opacity-50" style={{textAlign: 'left'}}><span className="text-white/30 mt-0.5">•</span><span className="">Contact <a className="underline text-white/50 hover:text-white/70" href="mailto:meng@designcode.io">support</a> if you believe this is an error</span></li></ul></div></div></div><style>
        .glitch-text {
          animation: glitch-animation 2s infinite;
        }
        
        @keyframes glitch-animation {
          0% { transform: translate(0px, 0px); }
          10% { transform: translate(-2px, -2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, 2px); }
          80% { transform: translate(2px, 2px); }
          90% { transform: translate(-2px, -2px); }
          100% { transform: translate(0px, 0px); }
        }
      </style></div><div aria-label="Notifications (F8)" role="region" style={{pointerEvents: 'none'}} tabindex="-1"><ol className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex max-h-screen flex-col-reverse p-4 max-w-[420px]" tabindex="-1"></ol></div></div><iframe height="0" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="0"></iframe>

    </>
  );
}
