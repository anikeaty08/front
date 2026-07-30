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



        document.addEventListener('DOMContentLoaded', function() {
            // Create audio context
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            let currentOctave = 4;
            let waveType = 'sine';
            let volume = 0.3;
            let sustain = 0.5;
            let showLabels = true;
            let isRecording = false;
            let recordedNotes = [];
            let recordStartTime = 0;
            
            // Function to play a note
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
            
            // Base note frequencies for octave 4
            const baseNotes = {
                'C': 261.63,
                'C#': 277.18,
                'D': 293.66,
                'D#': 311.13,
                'E': 329.63,
                'F': 349.23,
                'F#': 369.99,
                'G': 392.00,
                'G#': 415.30,
                'A': 440.00,
                'A#': 466.16,
                'B': 493.88
            };
            
            // Calculate frequency for a note in a specific octave
            function getFrequency(note, octave) {
                const baseFreq = baseNotes[note];
                const octaveDiff = octave - 4;
                return baseFreq * Math.pow(2, octaveDiff);
            }
            
            // Generate the piano keys
            function generatePianoKeys() {
                const piano = document.getElementById('piano');
                piano.innerHTML = ''; // Clear existing keys
                
                const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
                const blackNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
                const blackKeyPositions = [45, 111, 243, 309, 375];
                
                // Create white keys
                whiteNotes.forEach((note, index) => {
                    const key = document.createElement('div');
                    key.className = 'white-key';
                    key.setAttribute('data-note', note);
                    if (showLabels) {
                        key.textContent = note + currentOctave;
                    }
                    piano.appendChild(key);
                });
                
                // Add C for the next octave
                const lastKey = document.createElement('div');
                lastKey.className = 'white-key';
                lastKey.setAttribute('data-note', 'C');
                lastKey.setAttribute('data-next-octave', 'true');
                if (showLabels) {
                    lastKey.textContent = 'C' + (currentOctave + 1);
                }
                piano.appendChild(lastKey);
                
                // Create black keys
                blackNotes.forEach((note, index) => {
                    const key = document.createElement('div');
                    key.className = 'black-key';
                    key.setAttribute('data-note', note);
                    key.style.left = blackKeyPositions[index] + 'px';
                    if (showLabels) {
                        key.textContent = note + currentOctave;
                    }
                    piano.appendChild(key);
                });
                
                // Add event listeners to piano keys
                const keys = document.querySelectorAll('.white-key, .black-key');
                keys.forEach(key => {
                    key.addEventListener('mousedown', function() {
                        const note = this.getAttribute('data-note');
                        const isNextOctave = this.getAttribute('data-next-octave') === 'true';
                        const octave = isNextOctave ? currentOctave + 1 : currentOctave;
                        const frequency = getFrequency(note, octave);
                        
                        this.classList.add('active');
                        playNote(frequency, sustain);
                        
                        // Update current note display
                        document.getElementById('current-note-display').textContent = note + octave;
                        
                        // Record note if recording
                        if (isRecording) {
                            const time = (Date.now() - recordStartTime) / 1000;
                            recordedNotes.push({
                                note,
                                octave,
                                time,
                                duration: sustain
                            });
                        }
                    });
                    
                    key.addEventListener('mouseup', function() {
                        this.classList.remove('active');
                    });
                    
                    key.addEventListener('mouseleave', function() {
                        this.classList.remove('active');
                    });
                });
            }
            
            // Initialize the piano
            generatePianoKeys();
            
            // Set up octave selector
            const octaveSelector = document.getElementById('octave-selector');
            const currentOctaveDisplay = document.getElementById('current-octave-display');
            
            octaveSelector.addEventListener('change', function() {
                currentOctave = parseInt(this.value);
                currentOctaveDisplay.textContent = 'Octave ' + currentOctave;
                generatePianoKeys();
            });
            
            // Set up wave type selector
            const waveTypeSelector = document.getElementById('wave-type-selector');
            waveTypeSelector.addEventListener('change', function() {
                waveType = this.value;
            });
            
            // Set up volume slider
            const volumeSlider = document.getElementById('volume-slider');
            const volumeValue = document.getElementById('volume-value');
            
            volumeSlider.addEventListener('input', function() {
                volume = this.value / 100;
                volumeValue.textContent = this.value + '%';
            });
            
            // Set up sustain slider
            const sustainSlider = document.getElementById('sustain-slider');
            const sustainValue = document.getElementById('sustain-value');
            
            sustainSlider.addEventListener('input', function() {
                sustain = this.value / 100;
                sustainValue.textContent = sustain.toFixed(1) + 's';
            });
            
            // Set up note labels toggle
            const showLabelsToggle = document.getElementById('show-labels');
            
            showLabelsToggle.addEventListener('change', function() {
                showLabels = this.checked;
                generatePianoKeys();
            });
            
            // Set up recording functionality
            const recordButton = document.getElementById('record-button');
            const playButton = document.getElementById('play-button');
            
            recordButton.addEventListener('click', function() {
                if (!isRecording) {
                    // Start recording
                    isRecording = true;
                    recordedNotes = [];
                    recordStartTime = Date.now();
                    this.textContent = 'Stop';
                    this.style.backgroundColor = '#e74c3c';
                    playButton.disabled = true;
                } else {
                    // Stop recording
                    isRecording = false;
                    this.textContent = 'Record';
                    this.style.backgroundColor = '#4a90e2';
                    playButton.disabled = false;
                }
            });
            
            playButton.addEventListener('click', function() {
                if (recordedNotes.length === 0) return;
                
                // Disable buttons during playback
                this.disabled = true;
                recordButton.disabled = true;
                
                let lastNoteTime = recordedNotes[recordedNotes.length - 1].time + recordedNotes[recordedNotes.length - 1].duration;
                
                // Play each recorded note at the right time
                recordedNotes.forEach(note => {
                    setTimeout(() => {
                        const frequency = getFrequency(note.note, note.octave);
                        playNote(frequency, note.duration);
                        
                        // Highlight the corresponding key
                        const isNextOctave = note.octave > currentOctave;
                        const keySelector = isNextOctave ? 
                            `.white-key[data-note="${note.note}"][data-next-octave="true"]` : 
                            `.${note.note.includes('#') ? 'black' : 'white'}-key[data-note="${note.note}"]`;
                        
                        const key = document.querySelector(keySelector);
                        if (key) {
                            key.classList.add('active');
                            setTimeout(() => {
                                key.classList.remove('active');
                            }, note.duration * 1000);
                        }
                        
                        // Update current note display
                        document.getElementById('current-note-display').textContent = note.note + note.octave;
                    }, note.time * 1000);
                });
                
                // Re-enable buttons after playback
                setTimeout(() => {
                    this.disabled = false;
                    recordButton.disabled = false;
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
      
<div className="piano-container">
<div className="control-bar">
<div className="control-row">
<div className="control-group">
<span className="control-label">Octave:</span>
<select className="control-selector" id="octave-selector">
<option value="1">Octave 1</option>
<option value="2">Octave 2</option>
<option value="3">Octave 3</option>
<option selected value="4">Octave 4</option>
<option value="5">Octave 5</option>
<option value="6">Octave 6</option>
<option value="7">Octave 7</option>
</select>
</div>
<div className="control-group">
<span className="control-label">Sound Type:</span>
<select className="control-selector" id="wave-type-selector">
<option value="sine">Sine</option>
<option value="square">Square</option>
<option value="sawtooth">Sawtooth</option>
<option value="triangle">Triangle</option>
</select>
</div>
<div className="control-group">
<span className="control-label">Note Labels:</span>
<label className="toggle-switch">
<input checked id="show-labels" type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="control-row">
<div className="control-group">
<span className="control-label">Volume:</span>
<div className="slider-container">
<input className="slider" id="volume-slider" max="100" min="0" type="range" value="30" />
<span className="slider-value" id="volume-value">30%</span>
</div>
</div>
<div className="control-group">
<span className="control-label">Sustain:</span>
<div className="slider-container">
<input className="slider" id="sustain-slider" max="200" min="10" type="range" value="50" />
<span className="slider-value" id="sustain-value">0.5s</span>
</div>
</div>
<div className="control-group">
<button className="button" id="record-button">Record</button>
<button className="button" disabled id="play-button" style={{marginLeft: `10px`}}>Play</button>
</div>
</div>
<div className="control-row">
<div className="status-display" id="current-octave-display">Octave 4</div>
<div className="status-display" id="current-note-display">No Note</div>
</div>
</div>
<div className="piano" id="piano">

</div>
</div>
<div className="instructions">
        Click on the keys to play notes. Customize your piano experience using the control bar.
    </div>


    </>
  );
}
