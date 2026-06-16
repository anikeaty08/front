import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // UI Elements
            const stateInitial = document.getElementById('state-initial');
            const stateSuccess = document.getElementById('state-success');
            const stateFailure = document.getElementById('state-failure');
            const stateError = document.getElementById('state-error');
            const errorMessage = document.getElementById('error-message');

            const btnStart = document.getElementById('btn-start');
            const btnStop = document.getElementById('btn-stop');
            const btnRetry = document.getElementById('btn-retry');
            const recordingDot = document.getElementById('recording-dot');

            // Speech Variables
            let recognition = null;
            let capturedText = "";
            let isListening = false;
            const MAGIC_PHRASE = "I LOVE ATOM";
            const MAGIC_PHRASE_ALT = "I LOVE ADAM"; // Common speech-to-text transcription

            // State Management Helper
            const showState = (targetStateId) => {
                const states = ['state-initial', 'state-success', 'state-failure', 'state-error'];
                
                states.forEach(id => {
                    const el = document.getElementById(id);
                    if (id === targetStateId) {
                        el.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
                        el.classList.add('opacity-100', 'z-10');
                    } else {
                        el.classList.remove('opacity-100', 'z-10');
                        el.classList.add('opacity-0', 'pointer-events-none', 'z-0');
                    }
                });
            };

            const displayError = (msg) => {
                errorMessage.textContent = msg;
                showState('state-error');
            };

            const resetUI = () => {
                capturedText = "";
                btnStart.disabled = false;
                btnStart.classList.remove('opacity-0');
                
                btnStop.disabled = true;
                btnStop.classList.remove('text-white', 'border-neutral-700', 'bg-neutral-900/50');
                btnStop.classList.add('text-neutral-600', 'border-transparent');
                
                recordingDot.classList.remove('opacity-100', 'animate-pulse');
                recordingDot.classList.add('opacity-0');
            };

            // Initialize Web Speech API
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                displayError("Voice recognition is not supported in this browser");
                return;
            }

            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            // Speech Event Handlers
            recognition.onstart = () => {
                isListening = true;
                
                // Style START button (hide gracefully)
                btnStart.disabled = true;
                btnStart.classList.add('opacity-0');
                
                // Style STOP button (active)
                btnStop.disabled = false;
                btnStop.classList.remove('text-neutral-600', 'border-transparent');
                btnStop.classList.add('text-white', 'border-neutral-700', 'bg-neutral-900/50', 'hover:border-neutral-500');
                
                // Recording indicator
                recordingDot.classList.remove('opacity-0');
                recordingDot.classList.add('opacity-100', 'animate-pulse');
            };

            recognition.onresult = (event) => {
                let currentTranscript = "";
                for (let i = 0; i < event.results.length; i++) {
                    currentTranscript += event.results[i][0].transcript;
                }
                capturedText = currentTranscript;
            };

            recognition.onerror = (event) => {
                isListening = false;
                if (event.error === 'not-allowed') {
                    displayError("Microphone access is required");
                } else if (event.error !== 'no-speech') {
                    resetUI();
                }
            };

            recognition.onend = () => {
                // If it ends automatically (e.g., silence), process what we have.
                if (isListening) {
                    isListening = false;
                    evaluateSpeech();
                }
            };

            // Evaluation Logic
            const evaluateSpeech = () => {
                // Strip punctuation and extra spaces for a cleaner match
                const normalizedText = capturedText
                    .toUpperCase()
                    .replace(/[.,!?]/g, '')
                    .replace(/\s+/g, ' ')
                    .trim();
                
                // Use includes to be more forgiving, and check for the "Adam" homophone
                if (normalizedText.includes(MAGIC_PHRASE) || normalizedText.includes(MAGIC_PHRASE_ALT)) {
                    showState('state-success');
                } else {
                    showState('state-failure');
                }
                
                // Keep buttons in reset visual state in the background
                setTimeout(resetUI, 500); 
            };

            // Interactions
            btnStart.addEventListener('click', () => {
                capturedText = "";
                try {
                    recognition.start();
                } catch (e) {
                    // Prevent crash if already started
                }
            });

            btnStop.addEventListener('click', () => {
                if (isListening) {
                    isListening = false;
                    recognition.stop();
                    evaluateSpeech();
                }
            });

            btnRetry.addEventListener('click', () => {
                resetUI();
                showState('state-initial');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-2xl px-6 relative h-screen flex flex-col items-center justify-center">

<div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out opacity-100 z-10" id="state-initial">
<div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12">
<p className="text-xs text-neutral-400 tracking-wide font-medium">Make sure you’re in a quiet area</p>
<h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-100">Tell me those 3 magical words</h1>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="group relative px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase border border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-700 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none flex items-center gap-2" id="btn-start">
<iconify-icon className="text-base" icon="solar:mic-linear"></iconify-icon>
                    Start
                </button>
<button className="group relative px-6 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase border border-transparent text-neutral-600 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2" disabled="" id="btn-stop">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-0 transition-opacity duration-300" id="recording-dot"></div>
                    Stop / Submit
                </button>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out opacity-0 pointer-events-none z-0" id="state-success">
<div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-8 sm:mb-10 rounded-2xl bg-neutral-900 overflow-hidden border border-neutral-800 flex items-center justify-center shadow-2xl">
<img alt="Atom" className="absolute inset-0 w-full h-full object-cover z-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c4f0f65-083f-4410-9978-f6e1e109cf00_800w.png"/>

<div aria-hidden="true" className="absolute inset-0 z-30 pointer-events-none">
<iconify-icon className="heart text-sm" icon="solar:heart-bold" style={{left: '15%', -Scale: '0.8', -Duration: '4.5s', -Delay: '0s', -Drift: '15px', -Rotation: '10deg'}}></iconify-icon>
<iconify-icon className="heart text-base" icon="solar:heart-bold" style={{left: '35%', -Scale: '1.1', -Duration: '5.2s', -Delay: '1.2s', -Drift: '-10px', -Rotation: '-15deg'}}></iconify-icon>
<iconify-icon className="heart text-xs" icon="solar:heart-bold" style={{left: '55%', -Scale: '0.9', -Duration: '3.8s', -Delay: '2.5s', -Drift: '20px', -Rotation: '5deg'}}></iconify-icon>
<iconify-icon className="heart text-sm" icon="solar:heart-bold" style={{left: '75%', -Scale: '1.2', -Duration: '4.8s', -Delay: '0.5s', -Drift: '-15px', -Rotation: '-5deg'}}></iconify-icon>
<iconify-icon className="heart text-xs" icon="solar:heart-bold" style={{left: '25%', -Scale: '0.7', -Duration: '5.5s', -Delay: '3s', -Drift: '5px', -Rotation: '12deg'}}></iconify-icon>
<iconify-icon className="heart text-sm" icon="solar:heart-bold" style={{left: '85%', -Scale: '1', -Duration: '4.2s', -Delay: '1.8s', -Drift: '-8px', -Rotation: '-10deg'}}></iconify-icon>
<iconify-icon className="heart text-base" icon="solar:heart-bold" style={{left: '45%', -Scale: '0.8', -Duration: '6s', -Delay: '0.2s', -Drift: '12px', -Rotation: '8deg'}}></iconify-icon>
<iconify-icon className="heart text-xs" icon="solar:heart-bold" style={{left: '65%', -Scale: '1.1', -Duration: '5.8s', -Delay: '3.5s', -Drift: '-12px', -Rotation: '15deg'}}></iconify-icon>
</div>
</div>
<h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">ATOM LOVES YOU TOO</h2>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out opacity-0 pointer-events-none z-0" id="state-failure">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8 sm:mb-10">YOU’RE NOT ATOM</h2>
<button className="px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase border border-neutral-800 bg-transparent text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-600 transition-all duration-300" id="btn-retry">
                Try Again
            </button>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out opacity-0 pointer-events-none z-0" id="state-error">
<p className="text-sm sm:text-base text-neutral-400 font-medium tracking-wide text-center px-6" id="error-message"></p>
</div>
</main>


    </>
  );
}
