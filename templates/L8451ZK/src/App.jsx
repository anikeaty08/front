import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let isPlaying = false;
        let audioContext;
        const activeSlots = {};
        let beatCount = 0;
        let mainLoop;

        // Musical scales and patterns
        const scales = {
            cMajor: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25],
            cMinor: [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16, 523.25]
        };

        const melodyPatterns = {
            melody1: [0, 2, 4, 2, 0, 2, 4, 7], // Piano melody
            melody2: [4, 5, 7, 5, 4, 2, 0, 2], // Lead melody
            bass: [0, 0, 3, 3, 4, 4, 3, 3],     // Bass line
            arp: [0, 2, 4, 7, 4, 2, 0, 2],     // Arpeggio
        };

        const drumPatterns = {
            kick: [1, 0, 0, 0, 1, 0, 0, 0],
            snare: [0, 0, 1, 0, 0, 0, 1, 0],
            hihat: [1, 1, 1, 1, 1, 1, 1, 1]
        };

        function initAudio() {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        function createDrumSound(type) {
            if (!audioContext) initAudio();
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            switch(type) {
                case 'kick':
                    oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.5);
                    gainNode.gain.setValueAtTime(0.8, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                    break;
                case 'snare':
                    oscillator.type = 'triangle';
                    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                    filter.type = 'highpass';
                    filter.frequency.setValueAtTime(1000, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    break;
                case 'hihat':
                    oscillator.type = 'square';
                    oscillator.frequency.setValueAtTime(8000, audioContext.currentTime);
                    filter.type = 'highpass';
                    filter.frequency.setValueAtTime(7000, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    break;
            }
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.6);
        }

        function createMelodyNote(frequency, duration = 0.5, type = 'sine') {
            if (!audioContext) initAudio();
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(2000, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        }

        function playMelody(instrumentType, beatIndex) {
            const pattern = melodyPatterns[instrumentType];
            if (!pattern) return;
            
            const noteIndex = pattern[beatIndex % pattern.length];
            const frequency = scales.cMajor[noteIndex];
            
            switch(instrumentType) {
                case 'melody1':
                    createMelodyNote(frequency, 0.4, 'triangle');
                    break;
                case 'melody2':
                    createMelodyNote(frequency * 2, 0.3, 'sawtooth');
                    break;
                case 'bass':
                    createMelodyNote(frequency * 0.5, 0.6, 'sawtooth');
                    break;
                case 'arp':
                    createMelodyNote(frequency * 2, 0.2, 'square');
                    break;
                case 'pad':
                    createMelodyNote(frequency, 1.0, 'sine');
                    createMelodyNote(frequency * 1.5, 1.0, 'sine');
                    break;
            }
        }

        function playBeat() {
            const beatIndicator = document.getElementById('beatIndicator');
            beatIndicator.classList.add('beat-active');
            setTimeout(() => beatIndicator.classList.remove('beat-active'), 100);

            Object.entries(activeSlots).forEach(([slot, sound]) => {
                if (drumPatterns[sound]) {
                    const pattern = drumPatterns[sound];
                    if (pattern[beatCount % pattern.length]) {
                        createDrumSound(sound);
                    }
                } else {
                    playMelody(sound, beatCount);
                }
                
                // Visual feedback
                const slotElement = document.querySelector(`[data-slot="${slot}"] .character`);
                if (slotElement) {
                    slotElement.classList.add('playing');
                    setTimeout(() => {
                        slotElement.classList.remove('playing');
                    }, 200);
                }
            });
            
            beatCount++;
        }

        // Drag and drop functionality
        document.querySelectorAll('.character').forEach(char => {
            char.addEventListener('click', () => {
                const sound = char.dataset.sound;
                if (drumPatterns[sound]) {
                    createDrumSound(sound);
                } else {
                    playMelody(sound, 0);
                }
                char.style.transform = 'scale(1.2)';
                setTimeout(() => char.style.transform = 'scale(1)', 200);
            });

            char.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', char.dataset.sound);
                e.dataTransfer.setData('html', char.outerHTML);
            });
        });

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('bg-white/10');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('bg-white/10');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('bg-white/10');
                
                const sound = e.dataTransfer.getData('text/plain');
                const html = e.dataTransfer.getData('html');
                
                zone.innerHTML = html;
                zone.classList.add('active-slot');
                const newChar = zone.firstElementChild;
                newChar.addEventListener('click', () => {
                    if (drumPatterns[sound]) {
                        createDrumSound(sound);
                    } else {
                        playMelody(sound, 0);
                    }
                });
                
                activeSlots[zone.dataset.slot] = sound;
                
                // Play sound when dropped
                if (drumPatterns[sound]) {
                    createDrumSound(sound);
                } else {
                    playMelody(sound, 0);
                }
            });
        });

        // Control buttons
        document.getElementById('playBtn').addEventListener('click', () => {
            if (!audioContext) initAudio();
            
            if (!isPlaying) {
                isPlaying = true;
                beatCount = 0;
                mainLoop = setInterval(playBeat, 500); // 120 BPM
            }
        });

        document.getElementById('stopBtn').addEventListener('click', () => {
            isPlaying = false;
            clearInterval(mainLoop);
            document.querySelectorAll('.playing').forEach(el => {
                el.classList.remove('playing');
            });
        });

        document.getElementById('clearBtn').addEventListener('click', () => {
            document.querySelectorAll('.drop-zone').forEach(zone => {
                zone.innerHTML = '<span class="text-white/50">Drop Here</span>';
                zone.classList.remove('active-slot');
            });
            Object.keys(activeSlots).forEach(key => delete activeSlots[key]);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container mx-auto p-4">

<div className="text-center mb-8">
<h1 className="text-6xl font-bold text-white mb-2 drop-shadow-lg">TOTOMUSIC</h1>
<p className="text-xl text-purple-200">Create Your Beat</p>
<div className="mt-4">
<span className="text-white text-lg">BPM: 120</span>
<div className="beat-indicator inline-block ml-4" id="beatIndicator"></div>
</div>
</div>

<div className="bg-black/30 rounded-3xl p-6 mb-8 backdrop-blur-sm">
<h2 className="text-2xl font-bold text-white mb-4 text-center">Choose Your Characters</h2>
<div className="grid grid-cols-4 md:grid-cols-8 gap-4">
<div className="character bg-red-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="kick" draggable="true">
<span className="text-2xl">🥁</span>
<div className="absolute -bottom-6 text-xs text-white">Kick</div>
</div>
<div className="character bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="snare" draggable="true">
<span className="text-2xl">🥁</span>
<div className="absolute -bottom-6 text-xs text-white">Snare</div>
</div>
<div className="character bg-green-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="hihat" draggable="true">
<span className="text-2xl">🔔</span>
<div className="absolute -bottom-6 text-xs text-white">Hi-Hat</div>
</div>
<div className="character bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="bass" draggable="true">
<span className="text-2xl">🎵</span>
<div className="absolute -bottom-6 text-xs text-white">Bass</div>
</div>
<div className="character bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="melody1" draggable="true">
<span className="text-2xl">🎹</span>
<div className="absolute -bottom-6 text-xs text-white">Piano</div>
</div>
<div className="character bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="melody2" draggable="true">
<span className="text-2xl">🎸</span>
<div className="absolute -bottom-6 text-xs text-white">Lead</div>
</div>
<div className="character bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="arp" draggable="true">
<span className="text-2xl">✨</span>
<div className="absolute -bottom-6 text-xs text-white">Arp</div>
</div>
<div className="character bg-teal-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:shadow-lg relative" data-sound="pad" draggable="true">
<span className="text-2xl">🌊</span>
<div className="absolute -bottom-6 text-xs text-white">Pad</div>
</div>
</div>
</div>

<div className="bg-black/50 rounded-3xl p-8 mb-8 backdrop-blur-sm min-h-64">
<h2 className="text-2xl font-bold text-white mb-6 text-center">Drop Characters Here to Create Music</h2>
<div className="grid grid-cols-4 md:grid-cols-8 gap-6 min-h-48" id="stage">
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="0">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="1">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="2">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="3">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="4">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="5">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="6">
<span className="text-white/50">Drop Here</span>
</div>
<div className="drop-zone border-2 border-dashed border-white/30 rounded-xl flex items-center justify-center h-20 transition-colors hover:border-white/60 relative" data-slot="7">
<span className="text-white/50">Drop Here</span>
</div>
</div>
</div>

<div className="text-center">
<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl mr-4 transition-colors" id="playBtn">
                ▶️ PLAY
            </button>
<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl mr-4 transition-colors" id="stopBtn">
                ⏹️ STOP
            </button>
<button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors" id="clearBtn">
                🗑️ CLEAR
            </button>
</div>
</div>


    </>
  );
}
