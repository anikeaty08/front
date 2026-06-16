import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- State Management ---
        let segments = [
            { id: 1, lang: 'vi-VN', text: '' },
            { id: 2, lang: 'en-US', text: '' }
        ];
        
        const languages = [
            { code: 'vi-VN', label: 'Vietnamese' },
            { code: 'zh-CN', label: 'Chinese' },
            { code: 'en-US', label: 'English' },
            { code: 'de-DE', label: 'German' },
            { code: 'es-ES', label: 'Spanish' },
            { code: 'fr-FR', label: 'French' },
            { code: 'ja-JP', label: 'Japanese' }
        ];

        // --- Audio Recording State ---
        let mediaRecorder;
        let audioChunks = [];
        let capturedAudioBlob = null;
        let capturedAudioUrl = null;
        let activeStream = null;

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            renderInputs();
            
            const speedInput = document.getElementById('speed-control');
            const speedDisplay = document.getElementById('speed-display');
            speedInput.addEventListener('input', (e) => {
                speedDisplay.innerText = `${parseFloat(e.target.value).toFixed(1)}x`;
            });

            // Replay Audio Listener
            const audioEl = document.getElementById('audio-playback');
            audioEl.addEventListener('ended', resetReplayUI);
        });

        // --- UI Rendering ---
        function renderInputs() {
            const container = document.getElementById('input-container');
            container.innerHTML = '';

            segments.forEach((seg, index) => {
                const row = document.createElement('div');
                row.className = "group flex items-center gap-3 bg-white p-2 pr-4 rounded-lg border border-stone-200 shadow-sm focus-within:ring-2 focus-within:ring-stone-100 transition-all duration-200";
                
                const selectWrapper = document.createElement('div');
                selectWrapper.className = "relative shrink-0";
                
                const select = document.createElement('select');
                select.className = "appearance-none bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs font-medium py-2 pl-3 pr-8 rounded-md outline-none cursor-pointer transition-colors border border-transparent focus:border-stone-200";
                select.onchange = (e) => updateSegment(index, 'lang', e.target.value);
                
                languages.forEach(lang => {
                    const opt = document.createElement('option');
                    opt.value = lang.code;
                    opt.text = lang.label;
                    if(lang.code === seg.lang) opt.selected = true;
                    select.appendChild(opt);
                });

                const chevron = document.createElement('iconify-icon');
                chevron.setAttribute('icon', 'solar:alt-arrow-down-linear');
                chevron.setAttribute('class', 'absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none');
                
                selectWrapper.appendChild(select);
                selectWrapper.appendChild(chevron);

                const input = document.createElement('input');
                input.type = "text";
                input.value = seg.text;
                input.placeholder = getPlaceholder(seg.lang);
                input.className = "flex-1 bg-transparent border-none outline-none text-sm text-stone-800 placeholder-stone-300 font-light h-9";
                input.oninput = (e) => updateSegment(index, 'text', e.target.value);

                const delBtn = document.createElement('button');
                delBtn.className = "text-stone-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-1";
                delBtn.onclick = () => removeSegment(index);
                delBtn.innerHTML = '<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>';
                
                if(segments.length <= 1) delBtn.classList.add('hidden');

                row.appendChild(selectWrapper);
                row.appendChild(input);
                row.appendChild(delBtn);
                container.appendChild(row);
            });
        }

        function getPlaceholder(lang) {
            if(lang.includes('vi')) return 'Nhập văn bản...';
            if(lang.includes('zh')) return '在此输入文本...';
            if(lang.includes('de')) return 'Text eingeben...';
            if(lang.includes('es')) return 'Escribe texto...';
            return 'Type text here...';
        }

        function addInputField() {
            const lastLang = segments[segments.length - 1].lang;
            const nextLangIdx = (languages.findIndex(l => l.code === lastLang) + 1) % languages.length;
            segments.push({ id: Date.now(), lang: languages[nextLangIdx].code, text: '' });
            renderInputs();
        }

        function removeSegment(index) {
            if (segments.length > 1) {
                segments.splice(index, 1);
                renderInputs();
            }
        }

        function updateSegment(index, field, value) {
            segments[index][field] = value;
            if(field === 'lang') {
                renderInputs();
                document.querySelectorAll('input')[index].focus();
            }
        }

        // --- Playback & Capture Logic ---
        function normalizeText(text, lang) {
            if (!text) return "";
            let t = text.trim();
            return t.charAt(0).toUpperCase() + t.slice(1);
        }

        function getVoiceForLang(langCode) {
            const voices = window.speechSynthesis.getVoices();
            let voice = voices.find(v => v.lang === langCode);
            if (!voice) {
                const shortCode = langCode.split('-')[0];
                voice = voices.find(v => v.lang.startsWith(shortCode));
            }
            return voice;
        }

        async function processAndPlay() {
            // Cancel any current playback
            stopPlayback();
            
            const activeSegments = segments.filter(s => s.text.trim().length > 0);
            if (activeSegments.length === 0) return;

            // Reset Captured Data
            capturedAudioBlob = null;
            if(capturedAudioUrl) URL.revokeObjectURL(capturedAudioUrl);
            capturedAudioUrl = null;
            
            // Disable Replay/Download initially
            document.getElementById('replay-btn').classList.add('btn-disabled');
            document.getElementById('download-btn').classList.add('btn-disabled');
            resetReplayUI();

            // Setup UI
            const outputArea = document.getElementById('output-area');
            const displayText = document.getElementById('combined-text-display');
            const statusDot = document.getElementById('status-indicator');
            
            const normalizedData = activeSegments.map(s => ({
                text: normalizeText(s.text, s.lang),
                lang: s.lang
            }));

            const combinedString = normalizedData.map(d => d.text).join(" <span class='text-stone-300 mx-2'>–</span> ");
            displayText.innerHTML = combinedString;
            
            outputArea.classList.remove('hidden');
            void outputArea.offsetWidth; // Force reflow
            outputArea.classList.remove('opacity-0', 'translate-y-4');
            
            // --- Capture Stream Setup (getDisplayMedia) ---
            try {
                // Request to share tab audio. Video is required to trigger the prompt, but we ignore it.
                // preferCurrentTab is a hint to browser.
                activeStream = await navigator.mediaDevices.getDisplayMedia({
                    video: { 
                        displaySurface: "browser",
                    },
                    audio: { 
                        echoCancellation: false,
                        noiseSuppression: false,
                        autoGainControl: false,
                        suppressLocalAudioPlayback: false // Critical: let user hear TTS while recording
                    },
                    preferCurrentTab: true,
                    selfBrowserSurface: 'include' 
                });

                // Check if audio track exists (User might check "Share Audio")
                if (activeStream.getAudioTracks().length === 0) {
                    alert("Capture failed: Please ensure you enable 'Share Tab Audio' in the browser dialog.");
                    activeStream.getTracks().forEach(t => t.stop());
                    return;
                }

                // Initialize Recorder
                mediaRecorder = new MediaRecorder(activeStream);
                audioChunks = [];

                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) audioChunks.push(e.data);
                };

                mediaRecorder.onstop = () => {
                    capturedAudioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    capturedAudioUrl = URL.createObjectURL(capturedAudioBlob);
                    
                    // Set up the hidden audio element source
                    const audioEl = document.getElementById('audio-playback');
                    audioEl.src = capturedAudioUrl;
                    
                    // Enable Buttons
                    document.getElementById('replay-btn').classList.remove('btn-disabled');
                    document.getElementById('download-btn').classList.remove('btn-disabled');
                    
                    // Stop the stream tracks to hide the "Sharing this tab" banner
                    if(activeStream) {
                        activeStream.getTracks().forEach(track => track.stop());
                    }
                };

                mediaRecorder.start();
                
                // Visual Indicator
                statusDot.classList.add('bg-emerald-400', 'speaking-active');
                statusDot.classList.remove('bg-stone-300');

                // Begin Synthesis
                playSequence(normalizedData, 0);

            } catch (err) {
                console.log("User cancelled capture or error:", err);
                // Fallback: Just play TTS without recording if permission denied/cancelled
                statusDot.classList.add('bg-emerald-400', 'speaking-active');
                statusDot.classList.remove('bg-stone-300');
                playSequence(normalizedData, 0);
            }
        }

        function playSequence(data, index) {
            if (index >= data.length) {
                // Sequence Complete
                document.getElementById('status-indicator').classList.remove('bg-emerald-400', 'speaking-active');
                document.getElementById('status-indicator').classList.add('bg-stone-300');
                
                // Stop Recorder (Delay slightly to catch tail)
                setTimeout(() => {
                    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                        mediaRecorder.stop();
                    }
                }, 500);
                return;
            }

            const item = data[index];
            const utterance = new SpeechSynthesisUtterance(item.text);
            const voice = getVoiceForLang(item.lang);
            
            if(voice) utterance.voice = voice;
            utterance.lang = item.lang;
            utterance.rate = parseFloat(document.getElementById('speed-control').value);

            utterance.onend = () => {
                // Small pause between segments
                setTimeout(() => {
                    playSequence(data, index + 1);
                }, 400); 
            };
            
            utterance.onerror = (e) => {
                console.error("Speech error", e);
                playSequence(data, index + 1);
            };

            window.speechSynthesis.speak(utterance);
        }

        function stopPlayback() {
            // Stop Synthesis
            window.speechSynthesis.cancel();
            
            // Stop Audio Player
            const audioEl = document.getElementById('audio-playback');
            audioEl.pause();
            audioEl.currentTime = 0;
            resetReplayUI();

            // Stop Recorder if active
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
            }
            
            // Kill Stream
            if(activeStream) {
                activeStream.getTracks().forEach(track => track.stop());
            }
            
            document.getElementById('status-indicator').classList.remove('bg-emerald-400', 'speaking-active');
            document.getElementById('status-indicator').classList.add('bg-stone-300');
        }

        // --- Replay Logic ---
        function toggleReplay() {
            if(!capturedAudioUrl) return;

            const audioEl = document.getElementById('audio-playback');
            const btnText = document.getElementById('replay-text');
            const btnIcon = document.getElementById('replay-icon');

            if (audioEl.paused) {
                audioEl.play().catch(e => console.error("Playback failed", e));
                btnText.innerText = 'Pause';
                btnIcon.setAttribute('icon', 'solar:pause-circle-linear');
            } else {
                audioEl.pause();
                btnText.innerText = 'Replay Capture';
                btnIcon.setAttribute('icon', 'solar:restart-circle-linear');
            }
        }

        function resetReplayUI() {
            const btnText = document.getElementById('replay-text');
            const btnIcon = document.getElementById('replay-icon');
            if(btnText) btnText.innerText = 'Replay Capture';
            if(btnIcon) btnIcon.setAttribute('icon', 'solar:restart-circle-linear');
        }

        // --- Download Logic ---
        function downloadAudio() {
            if (!capturedAudioUrl || !capturedAudioBlob) return;
            
            const link = document.createElement('a');
            link.href = capturedAudioUrl;
            link.download = `polyflow_capture_${Date.now()}.webm`; 
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Initialize voices
        window.speechSynthesis.onvoiceschanged = () => {};
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full max-w-2xl mb-10 text-center sm:text-left">
<div className="inline-flex items-center gap-2 mb-2">
<div className="h-6 w-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-medium tracking-tighter">PF</div>
<span className="text-sm font-medium tracking-tight text-stone-900">POLYFLOW</span>
</div>
<p className="text-stone-500 font-light text-sm max-w-md leading-relaxed">
            Compose a multilingual flow. Share this tab to capture audio.
        </p>
</header>

<main className="w-full max-w-2xl space-y-8">

<div className="space-y-3" id="input-container">

</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-2 border-t border-stone-200/60">
<button className="group flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200" onclick="addInputField()">
<div className="flex items-center justify-center w-6 h-6 rounded-full border border-stone-200 group-hover:border-stone-400 bg-white transition-all">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-normal">Add segment</span>
</button>

<div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-stone-200/60 shadow-sm">
<span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Pace</span>
<input className="w-24" id="speed-control" max="1.5" min="0.75" step="0.25" type="range" value="1"/>
<span className="text-xs font-mono text-stone-600 w-8 text-right" id="speed-display">1.0x</span>
</div>
</div>

<div className="pt-4 space-y-2">
<button className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium py-3 px-6 rounded-lg shadow-lg shadow-stone-200/50 transition-all duration-300 flex items-center justify-center gap-2" id="generate-btn" onclick="processAndPlay()">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Generate Flow</span>
</button>
<p className="text-[10px] text-stone-400 text-center sm:text-left px-1">
                Select <strong>Current Tab</strong> and enable <strong>Share tab audio</strong> when prompted.
            </p>
</div>

<div className="hidden opacity-0 transition-all duration-700 transform translate-y-4" id="output-area">
<div className="bg-white rounded-xl border border-stone-100 shadow-xl shadow-stone-200/40 p-8 relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-stone-100 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-stone-400 tracking-widest uppercase">Generated Flow</span>
<div className="h-2 w-2 rounded-full bg-stone-300 transition-colors duration-300" id="status-indicator"></div>
</div>
<p className="text-lg sm:text-xl font-light leading-relaxed text-stone-800 tracking-tight mb-8" id="combined-text-display">

</p>

<div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-50">

<button className="btn-disabled flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full text-xs font-medium transition-colors" id="replay-btn" onclick="toggleReplay()">
<iconify-icon icon="solar:restart-circle-linear" id="replay-icon" width="16"></iconify-icon>
<span id="replay-text">Replay Capture</span>
</button>

<button className="btn-disabled flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 hover:border-stone-300 text-stone-600 rounded-full text-xs font-medium transition-colors shadow-sm" id="download-btn" onclick="downloadAudio()">
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
<span>Download</span>
</button>
<div className="flex-1"></div>

<button className="text-xs text-stone-400 hover:text-red-500 transition-colors flex items-center gap-1 px-2 py-2" onclick="stopPlayback()">
<iconify-icon icon="solar:stop-circle-linear" width="14"></iconify-icon>
                            Stop
                        </button>
</div>

<audio className="hidden" id="audio-playback"></audio>
</div>
</div>
</div>
</main>



    </>
  );
}
