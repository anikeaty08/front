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
      
        // Initialize Lucide icons
        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', function() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            let currentOctave = 4;
            let waveType = 'sine';
            let volume = 0.3;
            let sustain = 0.5;
            let showLabels = true;
            let isRecording = false;
            let recordedNotes = [];
            let recordStartTime = 0;
            
            function playNote(frequency, duration) {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.type = waveType;
                oscillator.frequency.value = frequency;
                
                gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + duration);
                
                return { oscillator, gainNode };
            }
            
            const baseNotes = {
                'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
                'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
                'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
            };
            
            function getFrequency(note, octave) {
                const baseFreq = baseNotes[note];
                const octaveDiff = octave - 4;
                return baseFreq * Math.pow(2, octaveDiff);
            }
            
            function generatePianoKeys() {
                const piano = document.getElementById('piano');
                piano.innerHTML = '';
                
                const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
                const blackNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
                const blackKeyPositions = [32, 80, 176, 224, 272];
                
                const keysContainer = document.createElement('div');
                keysContainer.className = 'relative flex';
                
                // Create white keys
                whiteNotes.forEach((note, index) => {
                    const key = document.createElement('div');
                    key.className = 'w-12 h-40 bg-white border border-gray-300 rounded-b-lg cursor-pointer transition-all duration-75 hover:bg-gray-50 flex items-end justify-center pb-3 text-xs text-gray-600 font-medium shadow-sm';
                    key.setAttribute('data-note', note);
                    if (showLabels) key.textContent = note + currentOctave;
                    keysContainer.appendChild(key);
                });
                
                // Add C for next octave
                const lastKey = document.createElement('div');
                lastKey.className = 'w-12 h-40 bg-white border border-gray-300 rounded-b-lg cursor-pointer transition-all duration-75 hover:bg-gray-50 flex items-end justify-center pb-3 text-xs text-gray-600 font-medium shadow-sm';
                lastKey.setAttribute('data-note', 'C');
                lastKey.setAttribute('data-next-octave', 'true');
                if (showLabels) lastKey.textContent = 'C' + (currentOctave + 1);
                keysContainer.appendChild(lastKey);
                
                // Create black keys
                blackNotes.forEach((note, index) => {
                    const key = document.createElement('div');
                    key.className = 'absolute w-8 h-24 bg-gray-900 rounded-b-lg cursor-pointer transition-all duration-75 hover:bg-gray-800 flex items-end justify-center pb-2 text-xs text-gray-300 font-medium shadow-lg z-10';
                    key.setAttribute('data-note', note);
                    key.style.left = blackKeyPositions[index] + 'px';
                    if (showLabels) key.textContent = note + currentOctave;
                    keysContainer.appendChild(key);
                });
                
                piano.appendChild(keysContainer);
                
                // Add event listeners
                const keys = keysContainer.querySelectorAll('[data-note]');
                keys.forEach(key => {
                    key.addEventListener('mousedown', function(e) {
                        e.preventDefault();
                        const note = this.getAttribute('data-note');
                        const isNextOctave = this.getAttribute('data-next-octave') === 'true';
                        const octave = isNextOctave ? currentOctave + 1 : currentOctave;
                        const frequency = getFrequency(note, octave);
                        
                        this.classList.add('piano-key-pressed');
                        if (this.classList.contains('bg-white')) {
                            this.classList.add('bg-gray-100');
                        } else {
                            this.classList.add('bg-gray-700');
                        }
                        
                        playNote(frequency, sustain);
                        document.getElementById('current-note-display').textContent = note + octave;
                        
                        if (isRecording) {
                            const time = (Date.now() - recordStartTime) / 1000;
                            recordedNotes.push({ note, octave, time, duration: sustain });
                        }
                    });
                    
                    key.addEventListener('mouseup', function() {
                        this.classList.remove('piano-key-pressed');
                        this.classList.remove('bg-gray-100', 'bg-gray-700');
                    });
                    
                    key.addEventListener('mouseleave', function() {
                        this.classList.remove('piano-key-pressed');
                        this.classList.remove('bg-gray-100', 'bg-gray-700');
                    });
                });
            }
            
            generatePianoKeys();
            
            // Event listeners for controls
            document.getElementById('octave-selector').addEventListener('change', function() {
                currentOctave = parseInt(this.value);
                document.getElementById('current-octave-display').textContent = 'Octave ' + currentOctave;
                generatePianoKeys();
            });
            
            document.getElementById('wave-type-selector').addEventListener('change', function() {
                waveType = this.value;
            });
            
            document.getElementById('volume-slider').addEventListener('input', function() {
                volume = this.value / 100;
                document.getElementById('volume-value').textContent = this.value + '%';
            });
            
            document.getElementById('sustain-slider').addEventListener('input', function() {
                sustain = this.value / 100;
                document.getElementById('sustain-value').textContent = sustain.toFixed(1) + 's';
            });
            
            document.getElementById('show-labels').addEventListener('click', function() {
                showLabels = !showLabels;
                if (showLabels) {
                    this.classList.add('bg-blue-600');
                    this.classList.remove('bg-gray-200');
                    this.children[0].classList.add('translate-x-6');
                    this.children[0].classList.remove('translate-x-1');
                } else {
                    this.classList.remove('bg-blue-600');
                    this.classList.add('bg-gray-200');
                    this.children[0].classList.remove('translate-x-6');
                    this.children[0].classList.add('translate-x-1');
                }
                generatePianoKeys();
            });
            
            document.getElementById('record-button').addEventListener('click', function() {
                if (!isRecording) {
                    isRecording = true;
                    recordedNotes = [];
                    recordStartTime = Date.now();
                    this.innerHTML = '<i data-lucide="square" class="w-4 h-4"></i><span>Stop</span>';
                    this.classList.remove('bg-red-600', 'hover:bg-red-700');
                    this.classList.add('bg-red-700', 'hover:bg-red-800');
                    document.getElementById('recording-status').classList.remove('hidden');
                    document.getElementById('play-button').disabled = true;
                } else {
                    isRecording = false;
                    this.innerHTML = '<i data-lucide="circle" class="w-4 h-4"></i><span>Record</span>';
                    this.classList.add('bg-red-600', 'hover:bg-red-700');
                    this.classList.remove('bg-red-700', 'hover:bg-red-800');
                    document.getElementById('recording-status').classList.add('hidden');
                    document.getElementById('play-button').disabled = false;
                }
                lucide.createIcons();
            });
            
            document.getElementById('play-button').addEventListener('click', function() {
                if (recordedNotes.length === 0) return;
                
                this.disabled = true;
                document.getElementById('record-button').disabled = true;
                
                let lastNoteTime = recordedNotes[recordedNotes.length - 1].time + recordedNotes[recordedNotes.length - 1].duration;
                
                recordedNotes.forEach(note => {
                    setTimeout(() => {
                        const frequency = getFrequency(note.note, note.octave);
                        playNote(frequency, note.duration);
                        document.getElementById('current-note-display').textContent = note.note + note.octave;
                    }, note.time * 1000);
                });
                
                setTimeout(() => {
                    this.disabled = false;
                    document.getElementById('record-button').disabled = false;
                    document.getElementById('current-note-display').textContent = 'No Note';
                }, lastNoteTime * 1000 + 100);
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
      
<div className="max-w-6xl mx-auto px-4 py-8">

<div className="text-center mb-8">
<h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">Piano Studio</h1>
<p className="text-gray-600">Create beautiful music with our interactive piano keyboard</p>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Octave</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="octave-selector">
<option value="1">Octave 1</option>
<option value="2">Octave 2</option>
<option value="3">Octave 3</option>
<option selected value="4">Octave 4</option>
<option value="5">Octave 5</option>
<option value="6">Octave 6</option>
<option value="7">Octave 7</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Waveform</label>
<select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="wave-type-selector">
<option value="sine">Sine Wave</option>
<option value="square">Square Wave</option>
<option value="sawtooth">Sawtooth Wave</option>
<option value="triangle">Triangle Wave</option>
</select>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Volume</label>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-gray-500" data-lucide="volume-2"></i>
<input className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="volume-slider" max="100" min="0" type="range" value="30" />
<span className="text-sm text-gray-600 w-10" id="volume-value">30%</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Sustain</label>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-gray-500" data-lucide="clock"></i>
<input className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="sustain-slider" max="200" min="10" type="range" value="50" />
<span className="text-sm text-gray-600 w-10" id="sustain-value">0.5s</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-gray-700">Show Labels</label>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors duration-200" id="show-labels">
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 translate-x-6"></span>
</button>
</div>
<div className="flex space-x-2">
<button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors" id="record-button">
<i className="w-4 h-4" data-lucide="circle"></i>
<span>Record</span>
</button>
<button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled id="play-button">
<i className="w-4 h-4" data-lucide="play"></i>
<span>Play</span>
</button>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-gray-200">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-500" data-lucide="music"></i>
<span className="text-sm text-gray-600">Current:</span>
<span className="text-sm font-medium text-gray-900" id="current-note-display">No Note</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-500" data-lucide="layers"></i>
<span className="text-sm font-medium text-gray-900" id="current-octave-display">Octave 4</span>
</div>
</div>
<div className="hidden flex items-center space-x-2 text-red-600" id="recording-status">
<div className="w-2 h-2 bg-red-600 rounded-full recording-pulse"></div>
<span className="text-sm font-medium">Recording...</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 mb-6">
<div className="flex justify-center relative overflow-x-auto" id="piano">

</div>
</div>

<div className="text-center text-gray-600">
<p className="text-sm">Click on the piano keys to play notes. Use the controls above to customize your sound and record your compositions.</p>
</div>
</div>


    </>
  );
}
