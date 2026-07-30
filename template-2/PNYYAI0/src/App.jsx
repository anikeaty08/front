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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons({ strokeWidth: 1.5 });

        class EnhancedPiano {
            constructor() {
                this.audioContext = null;
                this.volume = 0.5;
                this.reverb = 0.3;
                this.octaveOffset = 0;
                this.currentOctave = 4;
                this.sustainedNotes = new Set();
                this.activeKeys = new Set();
                this.pianoContainer = document.querySelector('.piano-container');
                this.initAudio();
                this.bindEvents();
                this.setupControls();
            }

            async initAudio() {
                try {
                    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    await this.createReverb();
                } catch (error) {
                    console.log('Web Audio API not supported');
                }
            }

            async createReverb() {
                const convolver = this.audioContext.createConvolver();
                const reverbTime = 2;
                const sampleRate = this.audioContext.sampleRate;
                const length = sampleRate * reverbTime;
                const impulse = this.audioContext.createBuffer(2, length, sampleRate);

                for (let channel = 0; channel < 2; channel++) {
                    const channelData = impulse.getChannelData(channel);
                    for (let i = 0; i < length; i++) {
                        channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
                    }
                }

                convolver.buffer = impulse;
                this.convolver = convolver;
            }

            getFrequency(note) {
                const notes = {
                    'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13, 'E': 329.63,
                    'F': 349.23, 'F#': 369.99, 'G': 392.00, 'G#': 415.30, 'A': 440.00,
                    'A#': 466.16, 'B': 493.88
                };
                
                const noteName = note.replace(/\d/, '');
                let octave = parseInt(note.match(/\d/)[0]) + this.octaveOffset;
                
                const baseFreq = notes[noteName];
                return baseFreq * Math.pow(2, octave - 4);
            }

            createGlowEffect(key) {
                // Add glow class to key
                key.classList.add('glowing');
                
                // Trigger piano container glow
                this.pianoContainer.classList.add('active');
                
                // Create particle effects for intense moments
                if (this.activeKeys.size > 2) {
                    this.createParticleEffect(key);
                }

                // Remove glow after animation
                setTimeout(() => {
                    key.classList.remove('glowing');
                }, 600);

                setTimeout(() => {
                    this.pianoContainer.classList.remove('active');
                }, 800);
            }

            createParticleEffect(key) {
                const rect = key.getBoundingClientRect();
                const containerRect = this.pianoContainer.getBoundingClientRect();
                
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.style.left = `${rect.left - containerRect.left + rect.width/2}px`;
                        particle.style.top = `${rect.top - containerRect.top}px`;
                        
                        // Random horizontal offset
                        particle.style.transform = `translateX(${(Math.random() - 0.5) * 60}px)`;
                        
                        this.pianoContainer.appendChild(particle);
                        
                        // Remove particle after animation
                        setTimeout(() => {
                            if (particle.parentNode) {
                                particle.parentNode.removeChild(particle);
                            }
                        }, 1500);
                    }, i * 100);
                }
            }

            playNote(note) {
                if (!this.audioContext) return;

                if (this.audioContext.state === 'suspended') {
                    this.audioContext.resume();
                }

                // Add to active keys
                this.activeKeys.add(note);

                // Create oscillators for richer sound
                const oscillators = [];
                const gainNodes = [];
                
                // Main tone
                const mainOsc = this.audioContext.createOscillator();
                const mainGain = this.audioContext.createGain();
                
                // Harmonic overtones
                const harmonic1 = this.audioContext.createOscillator();
                const harmonic1Gain = this.audioContext.createGain();
                
                const harmonic2 = this.audioContext.createOscillator();
                const harmonic2Gain = this.audioContext.createGain();

                const masterGain = this.audioContext.createGain();
                const dryGain = this.audioContext.createGain();
                const wetGain = this.audioContext.createGain();

                const freq = this.getFrequency(note);

                // Configure main oscillator
                mainOsc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                mainOsc.type = 'sine';
                
                // Configure harmonics
                harmonic1.frequency.setValueAtTime(freq * 2, this.audioContext.currentTime);
                harmonic1.type = 'sine';
                
                harmonic2.frequency.setValueAtTime(freq * 3, this.audioContext.currentTime);
                harmonic2.type = 'triangle';

                // Connect audio graph
                mainOsc.connect(mainGain);
                harmonic1.connect(harmonic1Gain);
                harmonic2.connect(harmonic2Gain);
                
                mainGain.connect(masterGain);
                harmonic1Gain.connect(masterGain);
                harmonic2Gain.connect(masterGain);

                masterGain.connect(dryGain);
                masterGain.connect(this.convolver);
                this.convolver.connect(wetGain);

                dryGain.connect(this.audioContext.destination);
                wetGain.connect(this.audioContext.destination);

                // Set volumes
                const now = this.audioContext.currentTime;
                const attackTime = 0.02;
                const decayTime = 0.3;
                const sustainLevel = 0.4;
                const releaseTime = 2;

                mainGain.gain.setValueAtTime(0, now);
                mainGain.gain.linearRampToValueAtTime(this.volume * 0.8, now + attackTime);
                mainGain.gain.exponentialRampToValueAtTime(this.volume * sustainLevel, now + attackTime + decayTime);
                
                harmonic1Gain.gain.setValueAtTime(0, now);
                harmonic1Gain.gain.linearRampToValueAtTime(this.volume * 0.2, now + attackTime);
                harmonic1Gain.gain.exponentialRampToValueAtTime(this.volume * 0.1, now + attackTime + decayTime);
                
                harmonic2Gain.gain.setValueAtTime(0, now);
                harmonic2Gain.gain.linearRampToValueAtTime(this.volume * 0.1, now + attackTime);
                harmonic2Gain.gain.exponentialRampToValueAtTime(this.volume * 0.05, now + attackTime + decayTime);

                // Reverb mix
                dryGain.gain.setValueAtTime(1 - this.reverb, now);
                wetGain.gain.setValueAtTime(this.reverb, now);

                // Start oscillators
                mainOsc.start(now);
                harmonic1.start(now);
                harmonic2.start(now);

                // Stop oscillators
                const stopTime = now + releaseTime;
                mainGain.gain.exponentialRampToValueAtTime(0.001, stopTime);
                harmonic1Gain.gain.exponentialRampToValueAtTime(0.001, stopTime);
                harmonic2Gain.gain.exponentialRampToValueAtTime(0.001, stopTime);
                
                mainOsc.stop(stopTime);
                harmonic1.stop(stopTime);
                harmonic2.stop(stopTime);

                // Visual feedback and note display
                this.displayNote(note);
                const key = document.querySelector(`[data-note="${note}"]`);
                if (key) {
                    key.classList.add('pressed');
                    this.createGlowEffect(key);
                    
                    setTimeout(() => {
                        key.classList.remove('pressed');
                        this.activeKeys.delete(note);
                    }, 200);
                }
            }

            displayNote(note) {
                const display = document.getElementById('noteDisplay');
                display.textContent = note;
                display.classList.add('glowing');
                
                setTimeout(() => {
                    display.classList.remove('glowing');
                }, 600);
            }

            bindEvents() {
                // Click events
                document.querySelectorAll('.piano-key').forEach(key => {
                    key.addEventListener('click', () => {
                        const note = key.getAttribute('data-note');
                        this.playNote(note);
                    });
                });

                // Keyboard events
                document.addEventListener('keydown', (e) => {
                    if (e.repeat) return;
                    
                    const key = document.querySelector(`[data-key="${e.code}"]`);
                    if (key) {
                        const note = key.getAttribute('data-note');
                        this.playNote(note);
                    }
                });

                // Touch events
                document.querySelectorAll('.piano-key').forEach(key => {
                    key.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        const note = key.getAttribute('data-note');
                        this.playNote(note);
                    });
                });
            }

            setupControls() {
                // Volume control
                const volumeSlider = document.getElementById('volumeSlider');
                const volumeDisplay = document.getElementById('volumeDisplay');

                volumeSlider.addEventListener('input', (e) => {
                    this.volume = e.target.value / 100;
                    volumeDisplay.textContent = e.target.value;
                    e.target.style.setProperty('--value', e.target.value + '%');
                });

                // Reverb control
                const reverbSlider = document.getElementById('reverbSlider');
                reverbSlider.addEventListener('input', (e) => {
                    this.reverb = e.target.value / 100;
                    e.target.style.setProperty('--value', e.target.value + '%');
                });

                // Octave controls
                const octaveUp = document.getElementById('octaveUp');
                const octaveDown = document.getElementById('octaveDown');
                const octaveDisplay = document.getElementById('octaveDisplay');

                octaveUp.addEventListener('click', () => {
                    if (this.currentOctave < 7) {
                        this.octaveOffset += 1;
                        this.currentOctave += 1;
                        octaveDisplay.textContent = this.currentOctave;
                    }
                });

                octaveDown.addEventListener('click', () => {
                    if (this.currentOctave > 1) {
                        this.octaveOffset -= 1;
                        this.currentOctave -= 1;
                        octaveDisplay.textContent = this.currentOctave;
                    }
                });
            }
        }

        // Initialize piano when page loads
        document.addEventListener('DOMContentLoaded', () => {
            window.piano = new EnhancedPiano();
        });

        // Handle user interaction for audio context
        document.addEventListener('click', () => {
            if (window.piano && window.piano.audioContext && window.piano.audioContext.state === 'suspended') {
                window.piano.audioContext.resume();
            }
        }, { once: true });
    
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
      
<div className="min-h-screen flex flex-col items-center justify-center p-4 animate-[fadeIn_1s_ease-out]">

<div className="text-center mb-12 animate-[slideDown_0.8s_ease-out_0.2s_both]">
<div className="flex items-center justify-center mb-4">
<div className="text-white text-2xl font-bold tracking-tight mr-4" style={{fontFamily: `'Playfair Display', serif`}}>STEINWAY</div>
<div className="w-px h-8 bg-gray-600"></div>
<div className="text-gray-400 text-sm ml-4 font-light">EST. 1853</div>
</div>
<h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
                Grand Piano
            </h1>
<p className="text-gray-400 text-lg font-light">
                Experience the rich tones of a concert grand piano
            </p>
</div>

<div className="relative animate-[slideUp_1s_ease-out_0.4s_both] piano-container">

<div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-700 piano-body" style={{backgroundImage: `radial-gradient(ellipse at center, rgba(139,69,19,0.1) 0%, rgba(0,0,0,0.3) 100%)`}}>

<div className="absolute top-4 left-1/2 transform -translate-x-1/2">
<div className="text-gray-300 text-xs font-semibold tracking-wider" style={{fontFamily: `'Playfair Display', serif`}}>
                        STEINWAY & SONS
                    </div>
<div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-1"></div>
</div>

<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg border border-gray-600 shadow-lg">
<div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-lg opacity-50"></div>
</div>

<div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl"></div>

<div className="relative mt-8 keys-container">

<div className="absolute -inset-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-inner"></div>

<div className="absolute -top-8 inset-x-0 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg border border-gray-600 shadow-lg transform -rotate-x-12" style={{transformStyle: `preserve-3d`, transform: `perspective(1000px) rotateX(-15deg)`}}></div>

<div className="flex relative z-20">

<button className="piano-key white-key" data-key="KeyA" data-note="C4">
<span className="key-label">A</span>
<span className="note-label">C4</span>
</button>
<button className="piano-key white-key" data-key="KeyS" data-note="D4">
<span className="key-label">S</span>
<span className="note-label">D4</span>
</button>
<button className="piano-key white-key" data-key="KeyD" data-note="E4">
<span className="key-label">D</span>
<span className="note-label">E4</span>
</button>
<button className="piano-key white-key" data-key="KeyF" data-note="F4">
<span className="key-label">F</span>
<span className="note-label">F4</span>
</button>
<button className="piano-key white-key" data-key="KeyG" data-note="G4">
<span className="key-label">G</span>
<span className="note-label">G4</span>
</button>
<button className="piano-key white-key pressed glowing" data-key="KeyH" data-note="A4">
<span className="key-label">H</span>
<span className="note-label">A4</span>
</button>
<button className="piano-key white-key" data-key="KeyJ" data-note="B4">
<span className="key-label">J</span>
<span className="note-label">B4</span>
</button>

<button className="piano-key white-key" data-key="KeyK" data-note="C5">
<span className="key-label">K</span>
<span className="note-label">C5</span>
</button>
<button className="piano-key white-key" data-key="KeyL" data-note="D5">
<span className="key-label">L</span>
<span className="note-label">D5</span>
</button>
<button className="piano-key white-key" data-key="Semicolon" data-note="E5">
<span className="key-label">;</span>
<span className="note-label">E5</span>
</button>
</div>

<div className="absolute top-0 flex z-30">
<button className="piano-key black-key" data-key="KeyW" data-note="C#4" style={{marginLeft: `52px`}}>
<span className="key-label">W</span>
</button>
<button className="piano-key black-key" data-key="KeyE" data-note="D#4" style={{marginLeft: `19px`}}>
<span className="key-label">E</span>
</button>
<div style={{width: `52px`}}></div>
<button className="piano-key black-key" data-key="KeyT" data-note="F#4">
<span className="key-label">T</span>
</button>
<button className="piano-key black-key" data-key="KeyY" data-note="G#4" style={{marginLeft: `19px`}}>
<span className="key-label">Y</span>
</button>
<button className="piano-key black-key" data-key="KeyU" data-note="A#4" style={{marginLeft: `19px`}}>
<span className="key-label">U</span>
</button>
<div className="" style={{width: `52px`}}></div>
<button className="piano-key black-key" data-key="KeyI" data-note="C#5">
<span className="key-label">I</span>
</button>
<button className="piano-key black-key" data-key="KeyO" data-note="D#5" style={{marginLeft: `19px`}}>
<span className="key-label">O</span>
</button>
</div>

<div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="flex justify-center mt-8 space-x-8">
<div className="flex flex-col items-center">
<div className="w-4 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg border border-amber-700"></div>
<div className="text-xs text-gray-400 mt-2">Soft</div>
</div>
<div className="flex flex-col items-center">
<div className="w-4 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg border border-amber-700"></div>
<div className="text-xs text-gray-400 mt-2">Sostenuto</div>
</div>
<div className="flex flex-col items-center">
<div className="w-4 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg border border-amber-700"></div>
<div className="text-xs text-gray-400 mt-2">Sustain</div>
</div>
</div>
</div>

<div className="glow-effects">

<div className="piano-glow absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"></div>

<div className="key-glow-overlay absolute inset-0 pointer-events-none">
<div className="key-glow white-glow opacity-0 transition-all duration-200"></div>
<div className="key-glow black-glow opacity-0 transition-all duration-200"></div>
</div>
</div>
</div>

<div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 animate-[slideUp_0.8s_ease-out_0.6s_both]">
<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">

<div className="flex items-center space-x-4">
<div className="text-gray-400">
<svg className="lucide lucide-volume-2 w-5 h-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</div>
<input className="w-32 h-2 bg-gray-700 rounded-full appearance-none cursor-pointer slider" id="volumeSlider" max="100" min="0" type="range" value="50" />
<span className="text-gray-400 text-sm w-8" id="volumeDisplay">50</span>
</div>

<div className="flex items-center space-x-4">
<div className="text-gray-400">
<svg className="lucide lucide-music w-5 h-5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm transition-colors" id="octaveDown">
                        Oct-
                    </button>
<span className="text-gray-300 text-sm w-8 text-center" id="octaveDisplay">4</span>
<button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm transition-colors" id="octaveUp">
                        Oct+
                    </button>
</div>

<div className="flex items-center space-x-4">
<div className="text-gray-400">
<svg className="lucide lucide-radio w-5 h-5" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<input className="w-24 h-2 bg-gray-700 rounded-full appearance-none cursor-pointer slider" id="reverbSlider" max="100" min="0" type="range" value="30" />
<span className="text-gray-400 text-xs">Reverb</span>
</div>
</div>

<div className="mt-4 text-center">
<div className="text-gray-500 text-xs mb-1">Now Playing</div>
<div className="text-white text-lg font-medium h-6 note-display" id="noteDisplay" style={{color: `rgb(107, 114, 128)`}}>A4</div>
</div>
</div>

<div className="mt-6 text-center animate-[fadeIn_1s_ease-out_1s_both]">
<p className="text-gray-400 text-sm mb-2">
                Use your keyboard keys or click/tap the piano keys to play
            </p>
<div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
<span>A-L, ; = White Keys</span>
<span>•</span>
<span>W, E, T, Y, U, I, O = Black Keys</span>
</div>
</div>
</div>



    </>
  );
}
