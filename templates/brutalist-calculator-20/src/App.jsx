import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const display = document.getElementById('display');
        const prevDisplay = document.getElementById('prev-display');
        const soundToggle = document.getElementById('sound-toggle');
        
        let currentInput = '0';
        let previousInput = '';
        let operator = null;
        let shouldResetDisplay = false;

        // Simple Beep using Web Audio API for a more robotic sound
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        function playSound(type = 'click') {
            if (!soundToggle.checked) return;
            
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            if (type === 'click') {
                oscillator.type = 'square'; // Brutal 8-bit sound
                oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
                gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.05);
            } else if (type === 'clear') {
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
                oscillator.frequency.linearRampToValueAtTime(50, audioCtx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.1);
            }
        }

        // Handle Number and Operator Input
        function handleInput(val) {
            playSound('click');

            if (['+', '-', '*', '/'].includes(val)) {
                if (operator !== null && !shouldResetDisplay) {
                    calculate(true); // Intermediate calculation
                }
                operator = val;
                previousInput = currentInput;
                shouldResetDisplay = true;
                prevDisplay.innerText = `${previousInput} ${operator}`;
            } else {
                if (currentInput === '0' || shouldResetDisplay) {
                    if (val === '.') {
                        currentInput = '0.';
                    } else {
                        currentInput = val;
                    }
                    shouldResetDisplay = false;
                } else {
                    if (val === '.' && currentInput.includes('.')) return;
                    currentInput += val;
                }
                display.value = currentInput;
            }
        }

        // Handle Actions (AC, DEL)
        function handleAction(action) {
            if (action === 'AC') {
                playSound('clear');
                currentInput = '0';
                previousInput = '';
                operator = null;
                shouldResetDisplay = false;
                prevDisplay.innerText = '';
                display.value = currentInput;
            } else if (action === 'DEL') {
                playSound('click');
                if (shouldResetDisplay) return;
                currentInput = currentInput.slice(0, -1);
                if (currentInput === '') currentInput = '0';
                display.value = currentInput;
            }
        }

        // Calculate Result
        function calculate(intermediate = false) {
            if (operator === null || shouldResetDisplay) return;

            playSound('click');
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            switch (operator) {
                case '+': result = prev + current; break;
                case '-': result = prev - current; break;
                case '*': result = prev * current; break;
                case '/': result = current === 0 ? 'Error' : prev / current; break;
                default: return;
            }

            // Handle float precision issues
            if (typeof result === 'number') {
                result = Math.round(result * 100000000) / 100000000;
            }

            currentInput = result.toString();
            operator = null;
            shouldResetDisplay = true;
            display.value = currentInput;
            
            if (!intermediate) {
                prevDisplay.innerText = `${prev} ${previousInput ? (display.value === 'Error' ? '' :  operator || '') : ''} =`; // Clear top display or show partial
                prevDisplay.innerText = ''; // Or just clear it for cleaner look
            }
        }

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9') handleInput(e.key);
            if (e.key === '.') handleInput('.');
            if (['+', '-', '*', '/'].includes(e.key)) handleInput(e.key);
            if (e.key === 'Enter' || e.key === '=') calculate();
            if (e.key === 'Backspace') handleAction('DEL');
            if (e.key === 'Escape') handleAction('AC');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-sm bg-[#fff] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">

<div className="bg-[#ffde59] border-b-[3px] border-black p-3 flex justify-between items-center select-none">
<div className="flex items-center gap-2">
<span className="iconify text-xl" data-icon="lucide:calculator" data-strokeWidth="1.5"></span>
<h1 className="text-lg font-bold tracking-tight uppercase">CALC_OS</h1>
</div>

<div className="flex items-center gap-2">
<label className="text-xs font-mono font-bold uppercase tracking-wide cursor-pointer" htmlFor="sound-toggle">SFX</label>
<input checked="" className="check-brutal shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" id="sound-toggle" type="checkbox"/>
</div>
</div>

<div className="bg-white p-6 border-b-[3px] border-black relative overflow-hidden">

<div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
<div className="absolute top-0 right-0 w-4 h-4 bg-white border-l-[3px] border-b-[3px] border-black"></div>

<div className="font-mono text-sm text-neutral-500 h-6 flex items-center justify-end overflow-hidden whitespace-nowrap" id="prev-display"></div>

<div className="flex justify-end items-end overflow-hidden">
<input className="w-full text-right text-5xl font-mono font-bold bg-transparent outline-none cursor-default placeholder-black tracking-tighter" id="display" placeholder="0" readonly="" type="text" value="0"/>
</div>
</div>

<div className="p-4 bg-[#e6e6e6]">
<div className="grid grid-cols-4 gap-3">

<button className="btn-brutal col-span-2 bg-[#ff6b6b] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#ff5252]" onclick="handleAction('AC')">
<span className="font-mono text-lg font-bold tracking-tight">RESET</span>
</button>
<button className="btn-brutal bg-[#a5f3fc] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#67e8f9]" onclick="handleAction('DEL')">
<span className="iconify text-xl" data-icon="lucide:delete" data-strokeWidth="1.5"></span>
</button>
<button className="btn-brutal bg-[#c4b5fd] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#a78bfa] group" onclick="handleInput('/')">
<span className="iconify text-xl group-hover:scale-110 transition-transform" data-icon="lucide:divide" data-strokeWidth="1.5"></span>
</button>

<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('7')">
<span className="font-mono text-xl font-bold">7</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('8')">
<span className="font-mono text-xl font-bold">8</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('9')">
<span className="font-mono text-xl font-bold">9</span>
</button>
<button className="btn-brutal bg-[#c4b5fd] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#a78bfa] group" onclick="handleInput('*')">
<span className="iconify text-xl group-hover:scale-110 transition-transform" data-icon="lucide:x" data-strokeWidth="1.5"></span>
</button>

<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('4')">
<span className="font-mono text-xl font-bold">4</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('5')">
<span className="font-mono text-xl font-bold">5</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('6')">
<span className="font-mono text-xl font-bold">6</span>
</button>
<button className="btn-brutal bg-[#c4b5fd] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#a78bfa] group" onclick="handleInput('-')">
<span className="iconify text-xl group-hover:scale-110 transition-transform" data-icon="lucide:minus" data-strokeWidth="1.5"></span>
</button>

<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('1')">
<span className="font-mono text-xl font-bold">1</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('2')">
<span className="font-mono text-xl font-bold">2</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('3')">
<span className="font-mono text-xl font-bold">3</span>
</button>
<button className="btn-brutal bg-[#c4b5fd] h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-[#a78bfa] group" onclick="handleInput('+')">
<span className="iconify text-xl group-hover:scale-110 transition-transform" data-icon="lucide:plus" data-strokeWidth="1.5"></span>
</button>

<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100 group" onclick="handleInput('.')">
<span className="text-2xl font-bold mb-3 group-hover:text-neutral-600">.</span>
</button>
<button className="btn-brutal bg-white h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-100" onclick="handleInput('0')">
<span className="font-mono text-xl font-bold">0</span>
</button>
<button className="btn-brutal col-span-2 bg-black h-16 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neutral-900" onclick="calculate()">
<span className="font-mono text-xl font-bold text-white tracking-widest">=</span>
</button>
</div>
</div>

<div className="bg-black text-white p-2 text-center border-t-[3px] border-black">
<span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-80">System Ready // v.1.0</span>
</div>
</div>

<audio id="click-sound" src="data:audio/wav;base64,UklGRiIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA="></audio>


    </>
  );
}
