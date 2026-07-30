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
      // Elements
      const cameraView = document.getElementById('cameraView');
      const shutterBtn = document.getElementById('shutterBtn');
      const flashOverlay = document.getElementById('flashOverlay');
      const focusPoint = document.getElementById('focusPoint');
      const flipCameraBtn = document.getElementById('flipCameraBtn');
      const lastPhotoThumbnail = document.getElementById('lastPhotoThumbnail');
      const exposureLevel = document.getElementById('exposureLevel');
      const recordingDot = document.getElementById('recordingDot');
      const zoomLevel = document.getElementById('zoomLevel');
      const timeDisplay = document.getElementById('time');
      const modeOptions = document.querySelectorAll('.mode-option');
      
      // Variables
      let currentZoom = 1.0;
      let currentMode = 'photo';
      let facingMode = 'environment'; // back camera
      let stream = null;
      let isRecording = false;
      let mediaRecorder = null;
      let recordedChunks = [];
      
      // Update time
      function updateTime() {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      }
      updateTime();
      setInterval(updateTime, 60000);
      
      // Initialize camera
      async function initCamera() {
        try {
          if (stream) {
            stream.getTracks().forEach(track => track.stop());
          }
          
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: facingMode },
            audio: currentMode === 'video'
          });
          
          cameraView.srcObject = stream;
          cameraView.play();
          cameraView.style.opacity = 1;
        } catch (err) {
          console.error('Error accessing camera:', err);
        }
      }
      
      // Initialize app
      initCamera();
      
      // Handle focus
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
      
      // Handle exposure adjustment
      cameraView.parentElement.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
          const rect = exposureLevel.parentElement.getBoundingClientRect();
          const touchY = e.touches[0].clientY;
          const height = rect.height;
          const relativeY = touchY - rect.top;
          const percentage = 100 - (relativeY / height * 100);
          
          exposureLevel.style.height = `${Math.max(0, Math.min(100, percentage))}%`;
        }
      });
      
      // Handle pinch to zoom
      let initialDistance = 0;
      cameraView.parentElement.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
          initialDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
        }
      });
      
      cameraView.parentElement.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
          const currentDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          
          if (initialDistance > 0) {
            const delta = currentDistance / initialDistance;
            currentZoom = Math.max(1, Math.min(5, currentZoom * delta));
            zoomLevel.textContent = currentZoom.toFixed(1);
            initialDistance = currentDistance;
          }
        }
      });
      
      // Handle shutter button
      shutterBtn.addEventListener('click', () => {
        shutterBtn.classList.add('scale-95');
        setTimeout(() => shutterBtn.classList.remove('scale-95'), 150);
        
        if (currentMode === 'photo') {
          // Take photo
          flashOverlay.classList.add('flash');
          setTimeout(() => flashOverlay.classList.remove('flash'), 300);
          
          const canvas = document.createElement('canvas');
          canvas.width = cameraView.videoWidth;
          canvas.height = cameraView.videoHeight;
          canvas.getContext('2d').drawImage(cameraView, 0, 0);
          
          const imgUrl = canvas.toDataURL('image/png');
          lastPhotoThumbnail.style.backgroundImage = `url(${imgUrl})`;
          lastPhotoThumbnail.style.backgroundSize = 'cover';
          lastPhotoThumbnail.style.backgroundPosition = 'center';
        } else if (currentMode === 'video') {
          // Toggle video recording
          if (!isRecording) {
            // Start recording
            mediaRecorder = new MediaRecorder(stream);
            recordedChunks = [];
            
            mediaRecorder.ondataavailable = (e) => {
              if (e.data.size > 0) {
                recordedChunks.push(e.data);
              }
            };
            
            mediaRecorder.onstop = () => {
              const blob = new Blob(recordedChunks, { type: 'video/webm' });
              const videoUrl = URL.createObjectURL(blob);
              
              // Create thumbnail from video
              const tempVideo = document.createElement('video');
              tempVideo.src = videoUrl;
              tempVideo.onloadeddata = () => {
                tempVideo.currentTime = 0;
                setTimeout(() => {
                  const canvas = document.createElement('canvas');
                  canvas.width = tempVideo.videoWidth;
                  canvas.height = tempVideo.videoHeight;
                  canvas.getContext('2d').drawImage(tempVideo, 0, 0);
                  
                  const imgUrl = canvas.toDataURL('image/png');
                  lastPhotoThumbnail.style.backgroundImage = `url(${imgUrl})`;
                  lastPhotoThumbnail.style.backgroundSize = 'cover';
                  lastPhotoThumbnail.style.backgroundPosition = 'center';
                }, 100);
              };
            };
            
            mediaRecorder.start();
            isRecording = true;
            recordingDot.style.opacity = 1;
            shutterBtn.classList.add('bg-red-500');
          } else {
            // Stop recording
            mediaRecorder.stop();
            isRecording = false;
            recordingDot.style.opacity = 0;
            shutterBtn.classList.remove('bg-red-500');
          }
        }
      });
      
      // Handle camera flip
      flipCameraBtn.addEventListener('click', () => {
        facingMode = facingMode === 'environment' ? 'user' : 'environment';
        initCamera();
      });
      
      // Handle mode selection
      modeOptions.forEach(option => {
        option.addEventListener('click', () => {
          const mode = option.dataset.mode;
          currentMode = mode;
          
          // Update UI
          modeOptions.forEach(opt => {
            opt.innerHTML = opt.textContent;
            opt.classList.remove('text-white', 'font-medium');
          });
          
          option.innerHTML = `<span class="text-white font-medium">${option.textContent}</span><div class="h-0.5 bg-white w-full mt-1 rounded-full"></div>`;
          
          // If switching to/from video mode, reinitialize camera
          if (mode === 'video' || currentMode === 'video') {
            initCamera();
          }
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
<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-3 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative h-[350px] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
<video className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" id="cameraView"></video>
<div className="absolute inset-0 bg-white opacity-0 z-10" id="flashOverlay"></div>
<div className="absolute w-16 h-16 border-2 border-blue-400 rounded-lg opacity-0 pointer-events-none transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2" id="focusPoint"></div>

<div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-32 w-1 bg-gray-800 rounded-full overflow-hidden">
<div className="w-full h-1/2 bg-white rounded-full absolute bottom-0 transition-all duration-300" id="exposureLevel"></div>
</div>

<div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-xs">
<span id="zoomLevel">1.0</span>x
      </div>
</div>

<div className="h-[170px] bg-black bg-opacity-90 px-6 pt-4 pb-8">

<div className="flex justify-center space-x-6 mb-6 text-xs text-gray-400">
<div className="mode-option slide-up cursor-pointer" data-mode="photo" style={{animationDelay: `0.1s`}}>
<span className="text-white font-medium">PHOTO</span>
<div className="h-0.5 bg-white w-full mt-1 rounded-full"></div>
</div>
<div className="mode-option slide-up cursor-pointer" data-mode="video" style={{animationDelay: `0.2s`}}>VIDEO</div>
<div className="mode-option slide-up cursor-pointer" data-mode="portrait" style={{animationDelay: `0.3s`}}>PORTRAIT</div>
<div className="mode-option slide-up cursor-pointer" data-mode="cinematic" style={{animationDelay: `0.4s`}}>CINEMATIC</div>
</div>

<div className="flex items-center justify-between">

<div className="w-10 h-10 rounded-md bg-gray-700 overflow-hidden slide-up cursor-pointer" id="lastPhotoThumbnail" style={{animationDelay: `0.5s`}}></div>

<div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center slide-up cursor-pointer transition-transform duration-150" id="shutterBtn" style={{animationDelay: `0.2s`}}>
<div className="w-14 h-14 rounded-full bg-white"></div>
</div>

<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center slide-up cursor-pointer" id="flipCameraBtn" style={{animationDelay: `0.5s`}}>
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>


    </>
  );
}
