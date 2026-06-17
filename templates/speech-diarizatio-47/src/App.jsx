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



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Generate waveform
        const waveform = document.getElementById('waveform');
        const width = 2000;
        const height = 128;
        let path = `M 0 ${height/2}`;
        
        for (let i = 0; i < width; i += 2) {
            const amplitude = Math.random() * 40 + 10;
            const y1 = height/2 - amplitude;
            const y2 = height/2 + amplitude;
            path += ` L ${i} ${y1} L ${i+1} ${y2}`;
        }
        
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', path);
        pathElement.setAttribute('stroke', 'url(#waveGradient)');
        pathElement.setAttribute('stroke-width', '1');
        pathElement.setAttribute('fill', 'none');
        waveform.appendChild(pathElement);

        // Play button toggle
        let isPlaying = false;
        const playBtn = document.getElementById('playBtn');
        const playIcon = document.getElementById('playIcon');
        
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            playIcon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });

        // Segment selection
        const segments = document.querySelectorAll('.segment');
        const segmentInfo = document.getElementById('segmentInfo');
        
        segments.forEach(segment => {
            segment.addEventListener('click', (e) => {
                e.stopPropagation();
                segments.forEach(s => {
                    s.classList.remove('selected-segment');
                    const border = s.querySelector('.border-white\\/50');
                    if (border) border.remove();
                });
                segment.classList.add('selected-segment');
                const highlight = document.createElement('div');
                highlight.className = 'absolute inset-0 border-2 border-white/50 rounded pointer-events-none';
                segment.appendChild(highlight);
                
                const start = segment.dataset.start;
                const end = segment.dataset.end;
                segmentInfo.innerHTML = `
                    <div class="space-y-3">
                        <div>
                            <label class="text-xs text-stone-500 block mb-1">Start Time</label>
                            <div class="text-sm text-stone-200 font-mono">${start}</div>
                        </div>
                        <div>
                            <label class="text-xs text-stone-500 block mb-1">End Time</label>
                            <div class="text-sm text-stone-200 font-mono">${end}</div>
                        </div>
                        <div>
                            <label class="text-xs text-stone-500 block mb-1">Duration</label>
                            <div class="text-sm text-stone-200 font-mono">0:18</div>
                        </div>
                        <div class="pt-2 border-t border-stone-800">
                            <label class="text-xs text-stone-500 block mb-2">Assign to Speaker</label>
                            <div class="flex gap-2">
                                <button class="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-offset-stone-900 ring-blue-500"></button>
                                <button class="w-6 h-6 rounded-full bg-green-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-stone-900 hover:ring-green-500"></button>
                                <button class="w-6 h-6 rounded-full bg-amber-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-stone-900 hover:ring-amber-500"></button>
                            </div>
                        </div>
                    </div>
                `;
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                playBtn.click();
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
      

<div className="min-h-screen flex flex-col">

<div className="bg-stone-900 border-b border-stone-800 px-4 py-3 flex items-center justify-between" style={{boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)'}}>
<div className="flex items-center gap-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
<div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-stone-400">Diarize</span>
</div>
<div className="w-14"></div>
</div>

<div className="bg-stone-900 border-b border-stone-800 px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-1">
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Import Audio">
<i className="w-4 h-4 text-stone-400" data-lucide="folder-open"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Save Project">
<i className="w-4 h-4 text-stone-400" data-lucide="save"></i>
</button>
<div className="w-px h-5 bg-stone-800 mx-2"></div>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Undo">
<i className="w-4 h-4 text-stone-400" data-lucide="undo-2"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Redo">
<i className="w-4 h-4 text-stone-400" data-lucide="redo-2"></i>
</button>
</div>
<div className="flex items-center gap-1">
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Zoom Out">
<i className="w-4 h-4 text-stone-400" data-lucide="zoom-out"></i>
</button>
<span className="text-xs text-stone-500 w-12 text-center">100%</span>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Zoom In">
<i className="w-4 h-4 text-stone-400" data-lucide="zoom-in"></i>
</button>
</div>
<div className="flex items-center gap-1">
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Export">
<i className="w-4 h-4 text-stone-400" data-lucide="download"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Settings">
<i className="w-4 h-4 text-stone-400" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 bg-stone-900 border-r border-stone-800 flex flex-col">
<div className="p-4 border-b border-stone-800">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold text-stone-200">Speakers</h2>
<button className="p-1 rounded hover:bg-stone-800 transition-colors" id="addSpeaker">
<i className="w-4 h-4 text-stone-400" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2" id="speakerList">
<div className="flex items-center gap-3 p-2 rounded-lg bg-stone-800/50 cursor-pointer hover:bg-stone-800 transition-colors speaker-item" data-color="#3b82f6" data-speaker="1">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-sm text-stone-200 flex-1">Speaker 1</span>
<span className="text-xs text-stone-500">4 segments</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-stone-800 transition-colors speaker-item" data-color="#22c55e" data-speaker="2">
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-sm text-stone-200 flex-1">Speaker 2</span>
<span className="text-xs text-stone-500">3 segments</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-stone-800 transition-colors speaker-item" data-color="#f59e0b" data-speaker="3">
<div className="w-3 h-3 rounded-full bg-amber-500"></div>
<span className="text-sm text-stone-200 flex-1">Speaker 3</span>
<span className="text-xs text-stone-500">2 segments</span>
</div>
</div>
</div>

<div className="p-4 flex-1 overflow-auto">
<h2 className="text-sm font-semibold text-stone-200 mb-3">Selected Segment</h2>
<div className="space-y-3" id="segmentInfo">
<div className="text-xs text-stone-500">No segment selected</div>
</div>
</div>

<div className="p-4 border-t border-stone-800">
<h2 className="text-sm font-semibold text-stone-200 mb-3">Quick Actions</h2>
<div className="space-y-2">
<button className="w-full flex items-center gap-2 p-2 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors text-sm">
<i className="w-4 h-4 text-blue-500" data-lucide="scissors"></i>
<span>Split at Playhead</span>
<span className="ml-auto text-xs text-stone-500">S</span>
</button>
<button className="w-full flex items-center gap-2 p-2 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors text-sm">
<i className="w-4 h-4 text-blue-500" data-lucide="merge"></i>
<span>Merge Selected</span>
<span className="ml-auto text-xs text-stone-500">M</span>
</button>
<button className="w-full flex items-center gap-2 p-2 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors text-sm">
<i className="w-4 h-4 text-red-400" data-lucide="trash-2"></i>
<span>Delete Segment</span>
<span className="ml-auto text-xs text-stone-500">⌫</span>
</button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-stone-950">

<div className="flex-1 p-4 overflow-hidden">
<div className="h-full bg-stone-900 rounded-xl border border-stone-800 overflow-hidden" style={{boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)'}}>

<div className="h-6 bg-stone-900 border-b border-stone-800 flex items-end px-2 text-xs text-stone-500">
<div className="flex-1 flex justify-between">
<span>0:00</span>
<span>0:30</span>
<span>1:00</span>
<span>1:30</span>
<span>2:00</span>
<span>2:30</span>
<span>3:00</span>
</div>
</div>

<div className="relative h-32 bg-stone-950 overflow-hidden" id="waveformContainer">

<svg className="w-full h-full" id="waveform" preserveaspectratio="none">
<defs>
<lineargradient id="waveGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0.8'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0.8'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-0 bottom-0 w-0.5 bg-blue-500 z-20" id="playhead" style={{left: '25%'}}>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-sm rotate-45"></div>
</div>
</div>

<div className="border-t border-stone-800">
<div className="p-2 text-xs text-stone-500 bg-stone-900 border-b border-stone-800">Speaker Segments</div>
<div className="relative h-48 bg-stone-950 overflow-x-auto" id="segmentTimeline">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-stone-900 border-r border-stone-800 z-10">
<div className="h-12 flex items-center px-3 border-b border-stone-800">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs text-stone-300">Speaker 1</span>
</div>
</div>
<div className="h-12 flex items-center px-3 border-b border-stone-800">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-stone-300">Speaker 2</span>
</div>
</div>
<div className="h-12 flex items-center px-3 border-b border-stone-800">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-xs text-stone-300">Speaker 3</span>
</div>
</div>
<div className="h-12 flex items-center px-3">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-stone-600"></div>
<span className="text-xs text-stone-500">Unassigned</span>
</div>
</div>
</div>

<div className="ml-24 relative h-full">

<div className="h-12 border-b border-stone-800 relative">
<div className="absolute top-1 bottom-1 rounded bg-blue-500/30 border border-blue-500/50 cursor-pointer hover:bg-blue-500/40 transition-colors segment" data-end="0:27" data-start="0:09" style={{left: '5%', width: '15%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r cursor-ew-resize"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-blue-500/30 border border-blue-500/50 cursor-pointer hover:bg-blue-500/40 transition-colors segment" data-end="1:25" data-start="1:03" style={{left: '35%', width: '12%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r cursor-ew-resize"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-blue-500/30 border border-blue-500/50 cursor-pointer hover:bg-blue-500/40 transition-colors segment selected-segment" data-end="2:20" data-start="1:48" style={{left: '60%', width: '18%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r cursor-ew-resize"></div>
<div className="absolute inset-0 border-2 border-white/50 rounded pointer-events-none"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-blue-500/30 border border-blue-500/50 cursor-pointer hover:bg-blue-500/40 transition-colors segment" data-end="2:52" data-start="2:38" style={{left: '88%', width: '8%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r cursor-ew-resize"></div>
</div>
</div>

<div className="h-12 border-b border-stone-800 relative">
<div className="absolute top-1 bottom-1 rounded bg-green-500/30 border border-green-500/50 cursor-pointer hover:bg-green-500/40 transition-colors segment" data-end="1:01" data-start="0:38" style={{left: '21%', width: '13%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500 rounded-r cursor-ew-resize"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-green-500/30 border border-green-500/50 cursor-pointer hover:bg-green-500/40 transition-colors segment" data-end="1:44" data-start="1:26" style={{left: '48%', width: '10%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500 rounded-r cursor-ew-resize"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-green-500/30 border border-green-500/50 cursor-pointer hover:bg-green-500/40 transition-colors segment" data-end="2:36" data-start="2:22" style={{left: '79%', width: '8%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500 rounded-r cursor-ew-resize"></div>
</div>
</div>

<div className="h-12 border-b border-stone-800 relative">
<div className="absolute top-1 bottom-1 rounded bg-amber-500/30 border border-amber-500/50 cursor-pointer hover:bg-amber-500/40 transition-colors segment" data-end="0:07" data-start="0:00" style={{left: '0%', width: '4%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-amber-500 rounded-r cursor-ew-resize"></div>
</div>
<div className="absolute top-1 bottom-1 rounded bg-amber-500/30 border border-amber-500/50 cursor-pointer hover:bg-amber-500/40 transition-colors segment" data-end="3:00" data-start="2:53" style={{left: '96%', width: '4%'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l cursor-ew-resize"></div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-amber-500 rounded-r cursor-ew-resize"></div>
</div>
</div>

<div className="h-12 relative">
</div>

<div className="absolute top-0 bottom-0 w-0.5 bg-blue-500/50 pointer-events-none" style={{left: '25%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-900 border-t border-stone-800 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-sm font-mono text-stone-200">
<span id="currentTime">0:45.12</span>
<span className="text-stone-500"> / </span>
<span className="text-stone-400">3:00.00</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Previous Segment">
<i className="w-5 h-5 text-stone-400" data-lucide="skip-back"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Step Back">
<i className="w-5 h-5 text-stone-400" data-lucide="rewind"></i>
</button>
<button className="p-3 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors" id="playBtn" title="Play/Pause">
<i className="w-5 h-5 text-white" data-lucide="play" id="playIcon"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Step Forward">
<i className="w-5 h-5 text-stone-400" data-lucide="fast-forward"></i>
</button>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors" title="Next Segment">
<i className="w-5 h-5 text-stone-400" data-lucide="skip-forward"></i>
</button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-stone-500" data-lucide="volume-2"></i>
<div className="w-20 h-1 bg-stone-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-stone-800 transition-colors bg-stone-800" title="Loop Selection">
<i className="w-4 h-4 text-blue-500" data-lucide="repeat"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
