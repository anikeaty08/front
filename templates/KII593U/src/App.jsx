import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // OCR
    const ocrImageInput = document.getElementById('ocrImageInput');
    const ocrImagePreview = document.getElementById('ocrImagePreview');
    const ocrScanBtn = document.getElementById('ocrScanBtn');
    const ocrStatus = document.getElementById('ocrStatus');
    const ocrTextElem = document.getElementById('ocrText');
    const ocrTextContainer = document.getElementById('ocrTextContainer');
    let recognizedText = "";

    ocrImageInput.onchange = e => {
      if (!e.target.files[0]) return;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        ocrImagePreview.src = ev.target.result;
        ocrImagePreview.classList.remove('hidden');
        ocrScanBtn.disabled = false;
      };
      reader.readAsDataURL(file);
    };

    ocrScanBtn.onclick = async () => {
      ocrScanBtn.disabled = true;
      ocrStatus.textContent = "Scanning...";
      ocrTextElem.textContent = "";
      recognizedText = "";
      const imgSrc = ocrImagePreview.src;
      if (!imgSrc) return;
      const { data: { text } } = await Tesseract.recognize(imgSrc, 'eng', {
        logger: m => { if (m.progress) ocrStatus.textContent = `Scanning... ${(m.progress*100).toFixed(0)}%`; }
      });
      recognizedText = text.trim().replace(/\s+/g, ' ');
      ocrTextElem.textContent = recognizedText || "No text detected.";
      ocrStatus.textContent = "";
      ocrScanBtn.disabled = false;
      // Ready for playback
      textToSpeak = recognizedText;
      splitSentences = splitToSentences(textToSpeak);
      renderSeekBar();
    };

    // Text to speech
    let utterance = null;
    let textToSpeak = "";
    let playing = false;
    let speechIndex = 0; // sentence index
    let splitSentences = [];
    let sentenceTimes = []; // timestamps of sentences
    let startTime = 0;
    let audioTimer = null;
    let speed = 1;
    const popup = document.getElementById("popupRunningText");
    const playPauseBtn = document.getElementById("playPause");
    const backwardBtn = document.getElementById("backward");
    const forwardBtn = document.getElementById("forward");
    const backward10Btn = document.getElementById("backward10");
    const forward10Btn = document.getElementById("forward10");
    const speedSelect = document.getElementById('speedSelect');
    const seekBar = document.getElementById('seekBar');
    const audioTime = document.getElementById('audioTime');

    // Find best "human" voice
    let bestVoice = null;
    function pickBestVoice() {
      let voices = window.speechSynthesis.getVoices();
      // Try to find a "human-like" voice (Google, Apple, etc.)
      let prefer = voices.filter(v => /google|apple|natural/i.test(v.name) && v.lang.startsWith('en'));
      bestVoice = prefer[0] || voices.find(v => v.lang.startsWith('en')) || voices[0];
    }
    window.speechSynthesis.onvoiceschanged = pickBestVoice;
    pickBestVoice();

    // Split text to sentences for seeking
    function splitToSentences(text) {
      if (!text) return [];
      return text.match(/[^\.!\?]+[\.!\?]+|[^\.!\?]+$/g) || [text];
    }

    // Play a sentence by index
    function playSentence(idx) {
      if (!splitSentences.length || idx < 0 || idx >= splitSentences.length) return;
      if (utterance) window.speechSynthesis.cancel();
      let s = splitSentences[idx].trim();
      if(!s) return;
      utterance = new SpeechSynthesisUtterance(s);
      utterance.rate = speed;
      if (bestVoice) utterance.voice = bestVoice;
      playing = true;
      playPauseBtn.textContent = "⏸";
      showPopup(s);

      utterance.onend = () => {
        hidePopup();
        if (playing && idx < splitSentences.length - 1) {
          speechIndex = idx + 1;
          renderSeekBar();
          playSentence(speechIndex);
        } else {
          playing = false;
          playPauseBtn.textContent = "▶";
          renderSeekBar();
        }
      };
      utterance.onerror = () => {
        hidePopup();
        playing = false;
        playPauseBtn.textContent = "▶";
      };
      window.speechSynthesis.speak(utterance);
      renderSeekBar();
    }

    function showPopup(s) {
      popup.textContent = s;
      popup.classList.remove('hidden');
    }
    function hidePopup() {
      popup.classList.add('hidden');
    }

    // Controls
    playPauseBtn.onclick = () => {
      if (!splitSentences.length) return;
      if (!playing) {
        playSentence(speechIndex);
      } else {
        playing = false;
        playPauseBtn.textContent = "▶";
        window.speechSynthesis.cancel();
        hidePopup();
      }
    };

    forwardBtn.onclick = () => {
      if (speechIndex < splitSentences.length - 1) {
        speechIndex += 1;
        renderSeekBar();
        if (playing) playSentence(speechIndex);
      }
    };
    backwardBtn.onclick = () => {
      if (speechIndex > 0) {
        speechIndex -= 1;
        renderSeekBar();
        if (playing) playSentence(speechIndex);
      }
    };
    forward10Btn.onclick = () => {
      if (!splitSentences.length) return;
      speechIndex = Math.min(splitSentences.length - 1, speechIndex + 2);
      renderSeekBar();
      if (playing) playSentence(speechIndex);
    };
    backward10Btn.onclick = () => {
      if (!splitSentences.length) return;
      speechIndex = Math.max(0, speechIndex - 2);
      renderSeekBar();
      if (playing) playSentence(speechIndex);
    };

    speedSelect.onchange = () => {
      speed = parseFloat(speedSelect.value);
      if (playing) {
        window.speechSynthesis.cancel();
        playSentence(speechIndex);
      }
    };

    function renderSeekBar() {
      seekBar.max = splitSentences.length ? splitSentences.length-1 : 1;
      seekBar.value = speechIndex;
      audioTime.textContent = `${speechIndex+1}/${splitSentences.length||1}`;
    }
    seekBar.oninput = function() {
      speechIndex = parseInt(seekBar.value, 10);
      renderSeekBar();
      if (playing) playSentence(speechIndex);
    };

    // When new text is recognized, reset state
    function resetAudio() {
      playing = false;
      playPauseBtn.textContent = "▶";
      speechIndex = 0;
      splitSentences = splitToSentences(textToSpeak);
      renderSeekBar();
      window.speechSynthesis.cancel();
      hidePopup();
    }

    // When OCR result changed, reset player
    Object.defineProperty(window, 'textToSpeak', {
      set: function(val) {
        this._textToSpeak = val;
        resetAudio();
      },
      get: function() { return this._textToSpeak; }
    });

    // Modal mock
    document.getElementById('signInBtn').onclick = () => {
      alert('Sign in is not implemented in this demo.');
    };

    // Prevent scrolling (no overflow)
    window.addEventListener('touchmove', e=>e.preventDefault(), {passive:false});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full flex items-center justify-between px-4 py-3 bg-blue-600 text-white" style={{height: '48px'}}>
<h1 className="text-lg font-bold tracking-tight">Museum Audio Reader</h1>
<button className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold" id="signInBtn">Sign In</button>
</header>

<main className="flex flex-col items-center justify-center flex-1 w-full max-w-lg mx-auto px-3" style={{height: 'calc(100vh-48px-90px)', minHeight: '0'}}>

<div className="w-full flex flex-col items-center gap-2 mt-4">
<label className="block text-gray-700 font-semibold text-center">Scan label or text</label>
<input accept="image/*" capture="environment" className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" id="ocrImageInput" type="file"/>
<img alt="Preview" className="rounded shadow mt-2 mb-1 hidden border max-h-28" id="ocrImagePreview"/>
<button className="bg-blue-500 text-white rounded px-4 py-1 mt-1 font-medium hover:bg-blue-600 disabled:opacity-50" disabled="" id="ocrScanBtn">Scan Image</button>
<div className="text-sm text-blue-700 mt-1" id="ocrStatus"></div>
</div>

<div className="w-full mt-2 p-3 bg-white rounded shadow text-gray-700 overflow-hidden text-center text-base min-h-[50px] max-h-[60px] flex items-center justify-center" id="ocrTextContainer">
<span className="truncate" id="ocrText"></span>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_#0002] px-3 py-2 flex flex-col items-center z-40" style={{height: '90px'}}>

<div className="flex items-center w-full max-w-lg mx-auto mb-3">
<input className="flex-1 accent-blue-500 h-1" id="seekBar" max="100" min="0" step="1" type="range" value="0"/>
<span className="ml-3 text-xs text-gray-500 w-12 text-right" id="audioTime">0:00</span>
</div>

<div className="flex items-center gap-4 justify-center">
<button className="p-2 rounded-full hover:bg-blue-50" id="backward10" title="Back 10s">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 17V7m0 0L9 11m4-4l4 4"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle></svg>
</button>
<button className="p-2 rounded-full hover:bg-blue-50" id="backward" title="Back sentence">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
</button>
<button className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl hover:bg-blue-700 shadow active:scale-95" id="playPause">
        ▶
      </button>
<button className="p-2 rounded-full hover:bg-blue-50" id="forward" title="Next sentence">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
</button>
<button className="p-2 rounded-full hover:bg-blue-50" id="forward10" title="Forward 10s">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M11 7v10m0 0l4-4m-4 4l-4-4"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle></svg>
</button>

<select className="ml-4 px-2 py-1 rounded border text-sm bg-blue-50 text-blue-700 font-semibold focus:outline-none" id="speedSelect">
<option value="1">1x</option>
<option value="1.25">1.25x</option>
<option value="1.5">1.5x</option>
<option value="2">2x</option>
</select>
</div>
</div>

<div className="hidden fixed left-1/2 top-1/2 z-50 w-4/6 max-w-lg h-1/3 min-h-[120px] -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white text-lg font-semibold flex items-center justify-center px-6 rounded-2xl transition-all shadow-2xl pointer-events-none select-none text-center" id="popupRunningText"></div>


    </>
  );
}
