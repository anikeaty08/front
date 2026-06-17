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
      const cameraView = document.getElementById('cameraView');
      const shutterBtn = document.getElementById('shutterBtn');
      const flashOverlay = document.getElementById('flashOverlay');
      const focusPoint = document.getElementById('focusPoint');
      const flipCameraBtn = document.getElementById('flipCameraBtn');
      const lastPhotoThumbnail = document.getElementById('lastPhotoThumbnail');
      const recordingDot = document.getElementById('recordingDot');
      const timeDisplay = document.getElementById('time');
      const modeOptions = document.querySelectorAll('.mode-option');
      const zoomSlider = document.getElementById('zoomSlider');
      const zoomLevel = document.getElementById('zoomLevel');
      const cameraInterface = document.getElementById('cameraInterface');
      const galleryInterface = document.getElementById('galleryInterface');
      const backToCamera = document.getElementById('backToCamera');
      const shareSelectedBtn = document.getElementById('shareSelectedBtn');
      const photoSelectors = document.querySelectorAll('[data-selected]');
      
      let currentMode = 'photo';
      let facingMode = 'environment';
      let isRecording = false;
      let selectedCount = 0;
      
      function updateTime() {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
      }
      updateTime();
      setInterval(updateTime, 60000);
      
      async function initCamera() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {facingMode, zoom: true}, 
            audio: currentMode === 'video'
          });
          cameraView.srcObject = stream;
          cameraView.play();
          cameraView.style.opacity = 1;
        } catch (err) {
          console.log('Camera access error:', err);
        }
      }
      
      // Zoom functionality
      zoomSlider.addEventListener('input', () => {
        const zoomValue = zoomSlider.value / 10;
        zoomLevel.textContent = zoomValue.toFixed(1);
        
        if (cameraView.srcObject) {
          const videoTrack = cameraView.srcObject.getVideoTracks()[0];
          const capabilities = videoTrack.getCapabilities();
          
          if (capabilities.zoom) {
            const zoomRatio = zoomValue;
            videoTrack.applyConstraints({advanced: [{zoom: zoomRatio}]})
              .catch(e => console.log('Zoom not supported', e));
          }
        }
      });
      
      // Gallery functionality
      lastPhotoThumbnail.addEventListener('click', () => {
        cameraInterface.classList.add('hidden');
        galleryInterface.classList.remove('hidden');
      });
      
      backToCamera.addEventListener('click', () => {
        galleryInterface.classList.add('hidden');
        cameraInterface.classList.remove('hidden');
      });
      
      // Photo selection
      photoSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
          const isSelected = selector.dataset.selected === 'true';
          
          if (isSelected) {
            selector.dataset.selected = 'false';
            selector.classList.remove('bg-blue-500');
            selectedCount--;
          } else if (selectedCount < 3) {
            selector.dataset.selected = 'true';
            selector.classList.add('bg-blue-500');
            selectedCount++;
          }
          
          // Update UI
          document.querySelector('#galleryInterface span').textContent = `Select Photos (${selectedCount}/3)`;
          
          if (selectedCount > 0) {
            shareSelectedBtn.classList.remove('opacity-50', 'pointer-events-none');
          } else {
            shareSelectedBtn.classList.add('opacity-50', 'pointer-events-none');
          }
        });
      });
      
      // Initialize camera on button click to avoid autoplay restrictions
      shutterBtn.addEventListener('click', () => {
        if (cameraView.srcObject === null) {
          initCamera();
        }
        
        shutterBtn.classList.add('scale-95');
        setTimeout(() => shutterBtn.classList.remove('scale-95'), 150);
        
        if (currentMode === 'photo') {
          flashOverlay.classList.add('flash');
          setTimeout(() => flashOverlay.classList.remove('flash'), 300);
        } else if (currentMode === 'video') {
          isRecording = !isRecording;
          recordingDot.style.opacity = isRecording ? 1 : 0;
        }
      });
      
      cameraView.parentElement.addEventListener('click', (e) => {
        const rect = cameraView.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        focusPoint.style.left = `${x}px`;
        focusPoint.style.top = `${y}px`;
        focusPoint.style.opacity = '1';
        
        setTimeout(() => {
          focusPoint.style.opacity = '0';
        }, 1000);
      });
      
      flipCameraBtn.addEventListener('click', () => {
        if (cameraView.srcObject) {
          cameraView.srcObject.getTracks().forEach(track => track.stop());
          facingMode = facingMode === 'environment' ? 'user' : 'environment';
          initCamera();
        }
      });
      
      modeOptions.forEach(option => {
        option.addEventListener('click', () => {
          const mode = option.dataset.mode;
          currentMode = mode;
          
          modeOptions.forEach(opt => {
            opt.innerHTML = opt.textContent;
            opt.classList.remove('text-white', 'font-medium');
          });
          
          option.innerHTML = `<span class="text-white font-medium">${option.textContent}</span><div class="h-0.5 bg-white w-full mt-1 rounded-full"></div>`;
        });
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
      
<div className="relative w-[280px] h-[580px] bg-black rounded-[45px] shadow-2xl border border-gray-800 overflow-hidden">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-b-[18px] z-20 flex items-center justify-center">
<div className="w-[10px] h-[10px] bg-gray-700 rounded-full mr-14"></div>
<div className="w-[6px] h-[6px] bg-green-500 rounded-full pulse-subtle opacity-0" id="recordingDot"></div>
</div>

<div className="pt-10 px-6 flex justify-between items-center text-white text-xs z-10">
<span id="time">9:41</span>
<div className="flex space-x-1">
<svg className="h-3 w-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-3 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative h-[350px] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900" id="cameraInterface">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687220063-4742bd7fd538')] bg-cover bg-center opacity-80"></div>
<video className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" id="cameraView"></video>
<div className="absolute inset-0 bg-white opacity-0 z-10" id="flashOverlay"></div>
<div className="absolute w-16 h-16 border-2 border-blue-400 rounded-lg opacity-0 pointer-events-none transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2" id="focusPoint"></div>

<div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-32 w-1 bg-gray-800 rounded-full overflow-hidden">
<div className="w-full h-1/2 bg-white rounded-full absolute bottom-0 transition-all duration-300" id="exposureLevel"></div>
</div>

<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 flex flex-col items-center">
<div className="bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-xs mb-2">
<span id="zoomLevel">1.0</span>x
        </div>
<input className="w-full h-1 bg-white rounded-full appearance-none cursor-pointer" id="zoomSlider" max="50" min="10" type="range" value="10"/>
</div>
</div>

<div className="relative h-[350px] overflow-hidden bg-gray-900 hidden" id="galleryInterface">
<div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center bg-black bg-opacity-50 z-10">
<button className="text-white text-sm" id="backToCamera">&lt; Back</button>
<span className="text-white text-sm">Select Photos (0/3)</span>
</div>
<div className="grid grid-cols-3 gap-1 p-1 h-full overflow-y-auto">
<div className="aspect-square bg-gray-800 relative" id="photo1">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
<div className="aspect-square bg-gray-800 relative" id="photo2">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
<div className="aspect-square bg-gray-800 relative" id="photo3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
<div className="aspect-square bg-gray-800 relative" id="photo4">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
<div className="aspect-square bg-gray-800 relative" id="photo5">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501854140801-50d01698950b"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
<div className="aspect-square bg-gray-800 relative" id="photo6">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"/>
<div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white" data-selected="false"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 flex justify-center bg-black bg-opacity-50">
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg opacity-50 pointer-events-none" id="shareSelectedBtn">Share Selected</button>
</div>
</div>

<div className="h-[170px] bg-black bg-opacity-90 px-6 pt-4 pb-8">

<div className="flex justify-center space-x-6 mb-6 text-xs text-gray-400">
<div className="mode-option slide-up cursor-pointer" data-mode="photo" style={{animationDelay: '0.1s'}}>
<span className="text-white font-medium">PHOTO</span>
<div className="h-0.5 bg-white w-full mt-1 rounded-full"></div>
</div>
<div className="mode-option slide-up cursor-pointer" data-mode="video" style={{animationDelay: '0.2s'}}>VIDEO</div>
<div className="mode-option slide-up cursor-pointer" data-mode="portrait" style={{animationDelay: '0.3s'}}>PORTRAIT</div>
<div className="mode-option slide-up cursor-pointer" data-mode="cinematic" style={{animationDelay: '0.4s'}}>CINEMATIC</div>
</div>

<div className="flex items-center justify-between">

<div className="w-10 h-10 rounded-md bg-gray-700 overflow-hidden slide-up cursor-pointer" id="lastPhotoThumbnail" style={{animationDelay: '0.5s', backgroundImage: 'url(\'https://images.unsplash.com/photo-1682687220063-4742bd7fd538\')', backgroundSize: 'cover'}}></div>

<div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center slide-up cursor-pointer transition-transform duration-150" id="shutterBtn" style={{animationDelay: '0.2s'}}>
<div className="w-14 h-14 rounded-full bg-white"></div>
</div>

<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center slide-up cursor-pointer" id="flipCameraBtn" style={{animationDelay: '0.5s'}}>
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>


    </>
  );
}
