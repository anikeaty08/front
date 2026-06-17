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
      
    let webcamStream = null;

    function showPrompt() {
      const name = document.getElementById('nameInput').value.trim();
      if (name === "") {
        alert("Please enter your artist name!");
        return;
      }
      document.getElementById('step1').classList.add('hidden');
      document.getElementById('step2').classList.remove('hidden');
      startWebcam();
      document.getElementById('albumName').textContent = name;
    }

    function startWebcam() {
      const webcam = document.getElementById('webcam');
      const placeholder = document.getElementById('placeholder');
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
          .then(function (stream) {
            webcamStream = stream;
            webcam.srcObject = stream;
            webcam.classList.remove('hidden');
            placeholder.classList.add('hidden');
          })
          .catch(function () {
            webcam.classList.add('hidden');
            placeholder.classList.remove('hidden');
          });
      } else {
        webcam.classList.add('hidden');
        placeholder.classList.remove('hidden');
      }
    }

    function showAlbum() {
      const webcam = document.getElementById('webcam');
      let dataUrl = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";
      if (!webcam.classList.contains('hidden') && webcam.videoWidth > 0 && webcam.videoHeight > 0) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        // Cover mode: center crop
        let ratio = Math.max(canvas.width / webcam.videoWidth, canvas.height / webcam.videoHeight);
        let nw = webcam.videoWidth * ratio;
        let nh = webcam.videoHeight * ratio;
        let nx = (canvas.width - nw) / 2;
        let ny = (canvas.height - nh) / 2;
        ctx.drawImage(webcam, nx, ny, nw, nh);
        dataUrl = canvas.toDataURL('image/png');
        if (webcamStream) {
          webcamStream.getTracks().forEach(track => track.stop());
          webcamStream = null;
        }
      }
      document.getElementById('albumPhoto').src = dataUrl;
      document.getElementById('step2').classList.add('hidden');
      document.getElementById('step3').classList.remove('hidden');
    }

    function restartWebcam() {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
        webcamStream = null;
      }
      startWebcam();
    }

    function restart() {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
        webcamStream = null;
      }
      document.getElementById('albumPhoto').src = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";
      document.getElementById('nameInput').value = '';
      document.getElementById('step3').classList.add('hidden');
      document.getElementById('step1').classList.remove('hidden');
    }
  
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
      

<div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col items-center space-y-6" id="step1">
<h1 className="text-3xl font-extrabold text-pink-700 text-center">Music Album Cover Booth</h1>
<p className="text-gray-700 text-lg text-center">Enter your artist name to get started:</p>
<input className="w-full px-4 py-2 rounded-md border-2 border-pink-300 focus:border-pink-500 outline-none text-xl" id="nameInput" placeholder="Your artist name..." type="text"/>
<button className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-800 transition" onclick="showPrompt()">Next</button>
</div>

<div className="hidden bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col items-center space-y-5" id="step2">
<h2 className="text-2xl font-bold text-purple-700">Strike a Pose!</h2>
<div className="bg-pink-100 border-2 border-pink-400 px-4 py-2 rounded-lg text-lg text-center font-medium">
<span id="posePrompt">Make your most iconic pop star face!</span>
</div>
<div className="w-64 h-64 rounded-2xl bg-gray-200 border-4 border-pink-300 flex items-center justify-center relative overflow-hidden">
<video autoplay="" className="absolute w-full h-full object-cover hidden rounded-2xl" id="webcam" playsinline=""></video>
<img alt="Camera preview" className="w-28 h-28 opacity-40" id="placeholder" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"/>
<div className="absolute bottom-1 right-1 bg-white/80 text-xs text-pink-700 px-2 py-0.5 rounded">Live Preview</div>
</div>
<div className="flex gap-3">
<button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-800 transition" onclick="showAlbum()">Snap Album Cover!</button>
<button className="bg-gray-200 border border-purple-300 text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100" onclick="restartWebcam()">Retake Photo</button>
</div>
</div>

<div className="hidden flex flex-col items-center space-y-8" id="step3">
<h2 className="text-2xl font-extrabold text-blue-700 mb-2">Your Music Album Cover</h2>
<div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">

<div className="album-bg">
<div className="shape1"></div>
<div className="shape2"></div>
<div className="shape3"></div>
</div>

<div className="artist-name" id="albumName"></div>

<div className="album-title">"They Call Me Bossy"</div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<img alt="Your photo" className="w-72 h-72 rounded-full object-cover border-8 border-white shadow-2xl ring-4 ring-pink-400 ring-offset-4 ring-offset-transparent" id="albumPhoto" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" style={{boxShadow: '0 0 60px 0 #a18aff88, 0 0 8px #fff'}}/>
</div>

<div className="curve-text">Y2K Records • 2024</div>

<img alt="Parental Advisory" className="absolute bottom-4 right-4 w-14 opacity-80 z-20" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Parental_Advisory_label.svg"/>
</div>
<button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition" onclick="restart()">Make Another!</button>
</div>


    </>
  );
}
