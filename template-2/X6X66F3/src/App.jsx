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
      // Audio context setup
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      // Note frequencies for melody maker
      const notes = {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 
        'G4': 392.00, 'A4': 440.00, 'B4': 493.88, 'C5': 523.25
      };

      // Recording functionality
      let isRecording = false;
      let recordedSequence = [];
      let recordingStartTime = 0;

      // Create all drum sounds using oscillators instead of external files
      const playDrum = (type, isPlayback = false) => {
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
        
        // Record the drum hit if we're recording and not in playback mode
        if (isRecording && !isPlayback) {
          const currentTime = Date.now() - recordingStartTime;
          recordedSequence.push({
            type: 'drum',
            sound: type,
            time: currentTime
          });
        }
        
        const gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        
        // Different settings for different drum types
        if (type === 'kick') {
          const osc = audioContext.createOscillator();
          osc.frequency.setValueAtTime(150, audioContext.currentTime);
          osc.frequency.exponentialRampToValueAtTime(20, audioContext.currentTime + 0.3);
          
          gainNode.gain.setValueAtTime(1, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
          
          osc.connect(gainNode);
          osc.start();
          osc.stop(audioContext.currentTime + 0.5);
        } 
        else if (type === 'snare') {
          // Noise for snare
          const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.2, audioContext.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < noiseBuffer.length; i++) {
            output[i] = Math.random() * 2 - 1;
          }
          
          const noise = audioContext.createBufferSource();
          noise.buffer = noiseBuffer;
          
          const noiseFilter = audioContext.createBiquadFilter();
          noiseFilter.type = 'highpass';
          noiseFilter.frequency.value = 1000;
          
          noise.connect(noiseFilter);
          noiseFilter.connect(gainNode);
          
          gainNode.gain.setValueAtTime(0.8, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
          
          noise.start();
          noise.stop(audioContext.currentTime + 0.2);
          
          // Tone for snare
          const osc = audioContext.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(150, audioContext.currentTime);
          
          const oscGain = audioContext.createGain();
          oscGain.gain.setValueAtTime(0.5, audioContext.currentTime);
          oscGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
          
          osc.connect(oscGain);
          oscGain.connect(audioContext.destination);
          
          osc.start();
          osc.stop(audioContext.currentTime + 0.1);
        } 
        else if (type === 'hihat') {
          // Hi-hat using filtered noise
          const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.1, audioContext.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < noiseBuffer.length; i++) {
            output[i] = Math.random() * 2 - 1;
          }
          
          const noise = audioContext.createBufferSource();
          noise.buffer = noiseBuffer;
          
          const hipassFilter = audioContext.createBiquadFilter();
          hipassFilter.type = 'highpass';
          hipassFilter.frequency.value = 8000;
          
          noise.connect(hipassFilter);
          hipassFilter.connect(gainNode);
          
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
          
          noise.start();
          noise.stop(audioContext.currentTime + 0.1);
        } 
        else if (type === 'clap') {
          // Clap with multiple noise bursts
          for (let i = 0; i < 4; i++) {
            const delay = i * 0.01;
            const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.1, audioContext.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let j = 0; j < noiseBuffer.length; j++) {
              output[j] = Math.random() * 2 - 1;
            }
            
            const noise = audioContext.createBufferSource();
            noise.buffer = noiseBuffer;
            
            const noiseFilter = audioContext.createBiquadFilter();
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.value = 2000;
            
            const noiseGain = audioContext.createGain();
            noiseGain.gain.setValueAtTime(0.15, audioContext.currentTime + delay);
            noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.1);
            
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(audioContext.destination);
            
            noise.start(audioContext.currentTime + delay);
            noise.stop(audioContext.currentTime + delay + 0.1);
          }
        }
        
        // Visual feedback
        const drumPad = document.querySelector(`[data-drum="${type}"]`);
        drumPad.classList.add('bg-yellow-500');
        setTimeout(() => {
          drumPad.classList.remove('bg-yellow-500');
        }, 100);
      };

      // Melody player
      const playMelodyNote = (note, isPlayback = false) => {
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
        
        // Record the note if we're recording and not in playback mode
        if (isRecording && !isPlayback) {
          const currentTime = Date.now() - recordingStartTime;
          recordedSequence.push({
            type: 'melody',
            note: note,
            time: currentTime
          });
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(notes[note], audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
        
        // Visual feedback
        const noteButton = document.querySelector(`[data-note="${note}"]`);
        noteButton.classList.add('bg-purple-700');
        setTimeout(() => {
          noteButton.classList.remove('bg-purple-700');
        }, 300);
      };

      // Set up note buttons
      document.querySelectorAll('.note-button').forEach(button => {
        button.addEventListener('click', () => {
          const note = button.getAttribute('data-note');
          playMelodyNote(note);
        });
      });

      // Set up drum pads
      document.querySelectorAll('.drum-pad').forEach(pad => {
        pad.addEventListener('click', () => {
          const type = pad.getAttribute('data-drum');
          playDrum(type);
        });
      });

      // Keyboard shortcuts
      const keyMap = {
        // Melody notes
        'a': 'C4', 's': 'D4', 'd': 'E4', 'f': 'F4', 
        'g': 'G4', 'h': 'A4', 'j': 'B4', 'k': 'C5',
        // Drum pads
        '1': 'kick', '2': 'snare', '3': 'hihat', '4': 'clap'
      };

      document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (keyMap[key]) {
          if (['1', '2', '3', '4'].includes(key)) {
            playDrum(keyMap[key]);
          } else {
            playMelodyNote(keyMap[key]);
          }
        }
      });

      // Record button functionality
      const recordButton = document.getElementById('recordButton');
      recordButton.addEventListener('click', () => {
        if (!isRecording) {
          // Start recording
          isRecording = true;
          recordedSequence = [];
          recordingStartTime = Date.now();
          recordButton.textContent = "Stop Recording";
          recordButton.classList.remove('bg-red-600', 'hover:bg-red-700');
          recordButton.classList.add('bg-gray-600', 'hover:bg-gray-700');
          
          // Show recording indicator
          const recordingIndicator = document.getElementById('recordingIndicator');
          recordingIndicator.classList.remove('hidden');
        } else {
          // Stop recording
          isRecording = false;
          recordButton.textContent = "Record";
          recordButton.classList.remove('bg-gray-600', 'hover:bg-gray-700');
          recordButton.classList.add('bg-red-600', 'hover:bg-red-700');
          
          // Hide recording indicator
          const recordingIndicator = document.getElementById('recordingIndicator');
          recordingIndicator.classList.add('hidden');
          
          // Enable play button if we recorded something
          if (recordedSequence.length > 0) {
            document.getElementById('playButton').disabled = false;
            document.getElementById('playButton').classList.remove('opacity-50', 'cursor-not-allowed');
          }
        }
      });

      // Play button functionality
      const playButton = document.getElementById('playButton');
      playButton.addEventListener('click', () => {
        if (recordedSequence.length === 0) return;
        
        // Disable play button during playback
        playButton.disabled = true;
        playButton.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Show playback indicator
        const playbackIndicator = document.getElementById('playbackIndicator');
        playbackIndicator.classList.remove('hidden');
        
        // Sort sequence by time
        const sortedSequence = [...recordedSequence].sort((a, b) => a.time - b.time);
        
        // Find the total duration of the recording
        const totalDuration = sortedSequence[sortedSequence.length - 1].time + 500; // Add 500ms buffer
        
        // Play each sound at the correct time
        sortedSequence.forEach(item => {
          setTimeout(() => {
            if (item.type === 'melody') {
              playMelodyNote(item.note, true);
            } else if (item.type === 'drum') {
              playDrum(item.sound, true);
            }
          }, item.time);
        });
        
        // Re-enable play button after playback completes
        setTimeout(() => {
          playButton.disabled = false;
          playButton.classList.remove('opacity-50', 'cursor-not-allowed');
          playbackIndicator.classList.add('hidden');
        }, totalDuration);
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
      
<div className="container mx-auto px-4 py-12">
<h1 className="text-4xl font-bold text-center mb-8">Melody & Drum Creator</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-800 p-6 rounded-xl">
<h2 className="text-2xl font-semibold mb-4">Melody Maker</h2>
<p className="text-gray-300 mb-4">Click the notes or press A-K keys to play</p>
<div className="grid grid-cols-4 gap-3">
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="C4">C
            <span className="text-xs block mt-1 text-purple-300">A</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="D4">D
            <span className="text-xs block mt-1 text-purple-300">S</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="E4">E
            <span className="text-xs block mt-1 text-purple-300">D</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="F4">F
            <span className="text-xs block mt-1 text-purple-300">F</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="G4">G
            <span className="text-xs block mt-1 text-purple-300">G</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="A4">A
            <span className="text-xs block mt-1 text-purple-300">H</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="B4">B
            <span className="text-xs block mt-1 text-purple-300">J</span>
</button>
<button className="note-button bg-purple-600 hover:bg-purple-700 transition-colors p-4 rounded-lg text-xl font-bold" data-note="C5">C
            <span className="text-xs block mt-1 text-purple-300">K</span>
</button>
</div>
</div>

<div className="bg-gray-800 p-6 rounded-xl">
<h2 className="text-2xl font-semibold mb-4">Drum Machine</h2>
<p className="text-gray-300 mb-4">Click pads or press 1-4 keys to play</p>
<div className="grid grid-cols-2 gap-4">
<button className="drum-pad bg-yellow-600 hover:bg-yellow-500 transition-colors p-6 rounded-lg text-xl font-bold" data-drum="kick">
            Kick
            <span className="text-xs block mt-1 text-yellow-300">1</span>
</button>
<button className="drum-pad bg-yellow-600 hover:bg-yellow-500 transition-colors p-6 rounded-lg text-xl font-bold" data-drum="snare">
            Snare
            <span className="text-xs block mt-1 text-yellow-300">2</span>
</button>
<button className="drum-pad bg-yellow-600 hover:bg-yellow-500 transition-colors p-6 rounded-lg text-xl font-bold" data-drum="hihat">
            Hi-Hat
            <span className="text-xs block mt-1 text-yellow-300">3</span>
</button>
<button className="drum-pad bg-yellow-600 hover:bg-yellow-500 transition-colors p-6 rounded-lg text-xl font-bold" data-drum="clap">
            Clap
            <span className="text-xs block mt-1 text-yellow-300">4</span>
</button>
</div>
</div>
</div>

<div className="mt-10 bg-gray-800 p-6 rounded-xl">
<h2 className="text-2xl font-semibold mb-4">Record & Playback</h2>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg text-xl font-bold flex items-center" id="recordButton">
<svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" r="6"></circle>
</svg>
          Record
        </button>
<button className="bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-lg text-xl font-bold flex items-center opacity-50 cursor-not-allowed" disabled id="playButton">
<svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon fill="currentColor" points="8,5 19,12 8,19"></polygon>
</svg>
          Play
        </button>
<div className="hidden flex items-center text-red-500 font-semibold" id="recordingIndicator">
<span className="inline-block h-3 w-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Recording in progress...
        </div>
<div className="hidden flex items-center text-green-500 font-semibold" id="playbackIndicator">
<span className="inline-block h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Playing...
        </div>
</div>
<p className="mt-4 text-gray-400">
        Create a beat, record it, and play it back! All sounds will be recorded in sequence.
      </p>
</div>
<div className="mt-8 text-center text-gray-400">
<p>Click any button or use your keyboard to start making music!</p>
<p className="mt-2">All sounds are generated using Web Audio API - no external files needed.</p>
</div>
</div>

    </>
  );
}
