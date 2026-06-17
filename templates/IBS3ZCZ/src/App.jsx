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



    // DOM refs
    const create = document.getElementById('tier-create');
    const launch = document.getElementById('tier-launch');
    const indie = document.getElementById('launch-indie');
    const studio = document.getElementById('launch-studio');
    const highlight = document.getElementById('main-highlight');
    const mainStroke = document.getElementById('main-stroke');
    const subHighlight = document.getElementById('sub-highlight');
    const subStroke = document.getElementById('sub-stroke');
    const labelCreate = document.getElementById('label-create');
    const labelLaunch = document.getElementById('label-launch');
    const launchSegments = document.getElementById('launch-segments');
    const labelIndie = document.getElementById('label-indie');
    const labelStudio = document.getElementById('label-studio');

    // Layout constants
    const segPad = 2;
    const mainW = 158;
    const subW = 79;

    function isDark() {
      return true; // Always dark mode
    }

    function setHighlight({ mainLeft, mainWidth, subOpacity, subLeft, subWidth, subStrokeOpacity }) {
      // Main highlight & stroke
      highlight.style.left = mainLeft + 'px';
      highlight.style.width = mainWidth + 'px';
      highlight.style.height = '44px';
      mainStroke.style.left = mainLeft + 'px';
      mainStroke.style.width = mainWidth + 'px';
      mainStroke.style.height = '44px';

      highlight.style.background = 'rgba(255,255,255,0.09)';
      mainStroke.style.border = '2px solid rgba(255,255,255,0.22)';

      // Sub highlight & stroke
      subHighlight.style.opacity = subOpacity;
      subStroke.style.opacity = subStrokeOpacity;
      if (subOpacity > 0) {
        subHighlight.style.left = subLeft + 'px';
        subHighlight.style.width = subWidth + 'px';
        subHighlight.style.height = '44px';
        subStroke.style.left = subLeft + 'px';
        subStroke.style.width = subWidth + 'px';
        subStroke.style.height = '44px';
        subHighlight.style.background = 'rgba(255,255,255,0.18)';
        subStroke.style.border = '2px solid rgba(255,255,255,0.22)';
      }
    }

    function updateLabels({ launchLabelOpacity, subOpacity, subTransform }) {
      labelLaunch.style.opacity = launchLabelOpacity;
      labelLaunch.style.transform = `translateY(${launchLabelOpacity == 0 ? -8 : 0}px)`;
      launchSegments.style.opacity = subOpacity;
      launchSegments.style.pointerEvents = subOpacity > 0 ? "auto" : "none";
      launchSegments.style.transform = `translateY(${subTransform}px)`;
    }

    function highlightActiveSegment() {
      [labelCreate, labelLaunch, labelIndie, labelStudio].forEach(el => {
        el.classList.remove(
          'text-white', 'text-white/60', 'font-bold', 'text-gray-800', 'text-gray-700', 'dark:text-white', 'dark:text-gray-200', 'text-gray-400', 'dark:text-gray-400'
        );
      });

      if (create.checked) {
        labelCreate.classList.add('text-white', 'font-bold');
        labelLaunch.classList.add('text-gray-200');
        labelIndie.classList.add('text-white');
        labelStudio.classList.add('text-white');
      } else {
        labelCreate.classList.add('text-gray-400');
        labelLaunch.classList.add('text-white', 'font-bold');
        if (indie.checked) {
          labelIndie.classList.add('text-white', 'font-bold');
          labelStudio.classList.add('text-gray-400');
        } else {
          labelIndie.classList.add('text-gray-400');
          labelStudio.classList.add('text-white', 'font-bold');
        }
      }
    }

    function updateUI() {
      if (create.checked) {
        setHighlight({
          mainLeft: segPad,
          mainWidth: mainW,
          subOpacity: 0,
          subLeft: segPad + mainW,
          subWidth: subW,
          subStrokeOpacity: 0
        });
        mainStroke.style.opacity = 1;
        updateLabels({
          launchLabelOpacity: 1,
          subOpacity: 0,
          subTransform: 24
        });
      } else {
        setHighlight({
          mainLeft: segPad + mainW,
          mainWidth: mainW,
          subOpacity: 1,
          subLeft: indie.checked
            ? segPad + mainW
            : segPad + mainW + subW,
          subWidth: subW,
          subStrokeOpacity: 1
        });
        mainStroke.style.opacity = 1;
        updateLabels({
          launchLabelOpacity: 0,
          subOpacity: 1,
          subTransform: 0
        });
      }
      if (create.checked) {
        subStroke.style.opacity = 0;
      }
      highlightActiveSegment();
    }

    function handleLaunchSubChange() {
      if (!launch.checked) return;
      subHighlight.style.left = indie.checked
        ? (segPad + mainW) + 'px'
        : (segPad + mainW + subW) + 'px';
      subHighlight.style.width = subW + 'px';
      subHighlight.style.height = '44px';
      subStroke.style.left = subHighlight.style.left;
      subStroke.style.width = subHighlight.style.width;
      subStroke.style.height = '44px';
      subStroke.style.opacity = 1;
      highlightActiveSegment();
    }

    create.addEventListener('change', () => updateUI());
    launch.addEventListener('change', () => updateUI());
    indie.addEventListener('change', handleLaunchSubChange);
    studio.addEventListener('change', handleLaunchSubChange);

    window.addEventListener('DOMContentLoaded', () => {
      updateUI();
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
      
<form className="relative w-[320px] h-12 border border-white/10 rounded-full shadow-lg bg-neutral-800/80 p-0.5 select-none" style={{height: '48px'}}>

<input checked="" className="peer/tier-create sr-only" id="tier-create" name="tier" type="radio"/>
<input className="peer/tier-launch sr-only" id="tier-launch" name="tier" type="radio"/>
<input checked="" className="peer/launch-indie sr-only" id="launch-indie" name="launch" type="radio"/>
<input className="peer/launch-studio sr-only" id="launch-studio" name="launch" type="radio"/>

<div className="main-highlight absolute rounded-full z-0" id="main-highlight" style={{top: '2px', left: '2px', height: '44px', width: '158px'}}>
</div>

<div className="main-stroke absolute rounded-full z-10 pointer-events-none" id="main-stroke" style={{top: '2px', left: '2px', height: '44px', width: '158px'}}>
</div>

<div className="sub-highlight absolute rounded-full z-10 pointer-events-none" id="sub-highlight" style={{top: '2px', opacity: '0', left: '162px', height: '44px', width: '77px'}}>
</div>

<div className="sub-stroke absolute rounded-full z-20 pointer-events-none" id="sub-stroke" style={{top: '2px', opacity: '0', left: '162px', height: '44px', width: '77px'}}>
</div>

<div className="relative z-20 flex h-full select-none">

<label className="flex-1 flex items-center justify-center text-white text-sm font-semibold cursor-pointer fade-slide" htmlFor="tier-create" id="label-create" style={{height: '44px'}}>Create</label>

<div className="flex-1 flex items-center justify-center relative overflow-visible" style={{height: '44px'}}>

<label className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-gray-200 text-sm font-semibold cursor-pointer fade-slide" htmlFor="tier-launch" id="label-launch">Launch</label>

<div className="absolute left-0 top-0 w-full h-full flex items-center justify-center gap-0 fade-slide duration-medium" id="launch-segments" style={{opacity: '0', pointerEvents: 'none', transform: 'translateY(24px)'}}>
<label className="flex-1 flex items-center justify-center cursor-pointer text-white text-sm font-semibold transition-colors h-full" htmlFor="launch-indie" id="label-indie">Indie</label>
<label className="flex-1 flex items-center justify-center cursor-pointer text-white text-sm font-semibold transition-colors h-full" htmlFor="launch-studio" id="label-studio">Studio</label>
</div>
</div>
</div>
</form>


    </>
  );
}
