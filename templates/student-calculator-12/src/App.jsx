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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
dark: '#0A0A0A',
card: '#121212',
btn: '#1A1A1A',
accent: '#3B82F6', // Blue for trustworthy/academic feel
accentHover: '#2563EB',
}
}
}
}



        let expression = '';
        let isStudentMode = false;
        const display = document.getElementById('displayInput');
        const preview = document.getElementById('previewResult');
        const feedback = document.getElementById('smartFeedback');
        
        // Mode Toggle
        function toggleStudentMode() {
            isStudentMode = !isStudentMode;
            const btn = document.getElementById('modeToggle');
            const txt = document.getElementById('modeText');
            const icon = document.getElementById('modeIcon');
            
            if(isStudentMode) {
                btn.classList.replace('bg-neutral-900', 'bg-indigo-900/30');
                btn.classList.replace('border-neutral-800', 'border-indigo-500/30');
                txt.innerText = 'Student Mode';
                txt.classList.replace('text-neutral-400', 'text-indigo-300');
                icon.classList.replace('text-neutral-500', 'text-indigo-400');
                showToast("Teacher Mode ON: Solutions will be explained!");
            } else {
                btn.classList.replace('bg-indigo-900/30', 'bg-neutral-900');
                btn.classList.replace('border-indigo-500/30', 'border-neutral-800');
                txt.innerText = 'Basic';
                txt.classList.replace('text-indigo-300', 'text-neutral-400');
                icon.classList.replace('text-indigo-400', 'text-neutral-500');
            }
        }

        // Input Handling
        function insert(value) {
            // Prevent multiple operators
            if (['+','-','*','/','%'].includes(value) && ['+','-','*','/','%'].includes(expression.slice(-1))) {
                expression = expression.slice(0, -1) + value;
            } else {
                expression += value;
            }
            updateDisplay();
            autoCalculate();
            checkForMistakes();
        }

        function clearDisplay() {
            expression = '';
            display.value = '';
            preview.innerText = '=';
            feedback.classList.add('hidden');
        }

        function updateDisplay() {
            // Replace * with × for display
            let niceExpression = expression.replace(/\*/g, '×').replace(/\//g, '÷');
            display.value = niceExpression;
        }

        // Auto Calc for Preview
        function autoCalculate() {
            if(!expression) return;
            try {
                let res = eval(expression);
                if(Number.isInteger(res)) {
                    preview.innerText = '= ' + res;
                } else {
                    preview.innerText = '= ' + res.toFixed(2);
                }
            } catch (e) {
                preview.innerText = '...';
            }
        }

        // Mistake Detection (Basic Mock)
        function checkForMistakes() {
            // Example: If opening bracket exists but no closing bracket yet
            const open = (expression.match(/\(/g) || []).length;
            const close = (expression.match(/\)/g) || []).length;
            
            if (open > close && expression.length > 5) {
                feedback.innerHTML = `<iconify-icon icon="solar:chat-round-line-linear" class="text-indigo-400 mt-0.5 shrink-0" width="16"></iconify-icon>
                <p class="text-xs text-indigo-300 leading-relaxed font-medium">Lagta hai bracket miss ho gaya 👀 <span class="text-white/80">Check karo</span></p>`;
                feedback.classList.remove('hidden');
            } else {
                feedback.classList.add('hidden');
            }
        }

        // Final Calculation
        function calculate() {
            try {
                if(!expression) return;
                let result = eval(expression);
                
                // Add to history (Mock)
                const histContainer = document.getElementById('historyContainer');
                const newItem = document.createElement('div');
                newItem.className = "text-right p-2 rounded hover:bg-white/5 transition-colors cursor-pointer animate-pulse";
                newItem.innerHTML = `<div class="text-xs text-neutral-500">${display.value}</div><div class="text-lg text-neutral-400 font-light">${result}</div>`;
                histContainer.prepend(newItem);

                if (isStudentMode) {
                    openSolution(display.value, result);
                } else {
                    display.value = result;
                    expression = result.toString();
                    preview.innerText = '=';
                }

            } catch (e) {
                display.value = "Error";
                expression = "";
                setTimeout(() => clearDisplay(), 1000);
            }
        }

        // Solution Modal Logic
        function openSolution(exp, res) {
            const modal = document.getElementById('solutionModal');
            const card = document.getElementById('solutionCard');
            document.getElementById('modalExpression').innerText = `${exp} = ${res}`;
            
            modal.classList.remove('hidden');
            // Trigger reflow
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            card.classList.remove('translate-y-full');
        }

        function closeSolution() {
            const modal = document.getElementById('solutionModal');
            const card = document.getElementById('solutionCard');
            
            modal.classList.add('opacity-0');
            card.classList.add('translate-y-full');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Pro Modal
        function openProModal() {
            const modal = document.getElementById('proModal');
            modal.classList.remove('hidden');
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
        }
        
        function closeProModal() {
            const modal = document.getElementById('proModal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function showToast(msg) {
            // Simple toast logic could go here
            console.log(msg);
        }

        // Backspace logic handled via generic logic for brevity, implementing simple slice
        display.addEventListener('click', () => {
             // allow cursor placement if fully implemented
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
      

<div className="relative w-full max-w-md h-full md:h-[95vh] md:rounded-3xl bg-dark flex flex-col overflow-hidden md:border md:border-neutral-800 shadow-2xl">

<header className="flex justify-between items-center p-5 z-20 bg-gradient-to-b from-dark to-transparent">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-white leading-none">ThinkCalc</h1>
<p className="text-[0.65rem] text-neutral-500 font-medium">Student Edition</p>
</div>
</div>
<div className="flex items-center gap-3">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 transition-colors group" id="modeToggle" onclick="toggleStudentMode()">
<span className="text-xs font-medium text-neutral-400 group-hover:text-white transition-colors" id="modeText">Basic</span>
<iconify-icon className="text-neutral-500 group-hover:text-indigo-400" icon="solar:book-2-linear" id="modeIcon" width="16"></iconify-icon>
</button>

<button className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:bg-neutral-800 transition-colors" onclick="openProModal()">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 flex flex-col justify-end px-6 pb-4 relative z-10">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="history-scroll flex-1 overflow-y-auto flex flex-col justify-end gap-3 mb-4 opacity-60 mask-image-linear-to-t" id="historyContainer">

<div className="text-right p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
<div className="text-xs text-neutral-500">24 × 5</div>
<div className="text-lg text-neutral-400 font-light">120</div>
</div>
</div>

<div className="hidden mb-2 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-start gap-3 animate-pulse" id="smartFeedback">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
<p className="text-xs text-indigo-300 leading-relaxed font-medium">
                    Wait... Brackets pehle solve karo! <span className="text-white/80">BODMAS rule</span> mat bhoolna. 👀
                </p>
</div>

<div className="flex flex-col items-end gap-1">
<input className="w-full bg-transparent text-right text-5xl font-light tracking-tight text-white placeholder-neutral-700 outline-none" id="displayInput" placeholder="0" readonly="" type="text" value=""/>
<div className="h-6 text-neutral-500 text-lg font-light tracking-wide transition-all" id="previewResult">= </div>
</div>
</div>

<div className="glass-panel rounded-t-[2.5rem] p-5 pb-8">

<div className="flex justify-between items-center mb-4 px-2">
<div className="flex gap-4">
<button className="text-neutral-400 hover:text-white transition text-xs flex items-center gap-1" onclick="showHistory()">
<iconify-icon icon="solar:history-linear" width="16"></iconify-icon>
<span className="opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto">History</span>
</button>
<button className="text-neutral-400 hover:text-white transition text-xs flex items-center gap-1" onclick="insert('('); insert(')')">
<iconify-icon icon="solar:code-circle-linear" width="16"></iconify-icon>
<span className="opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto">()</span>
</button>
</div>
<div className="h-1 w-12 bg-neutral-800 rounded-full"></div> 
<button className="text-neutral-400 hover:text-red-400 transition text-xs" onclick="clearDisplay()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-4 gap-3">

<button className="btn-press h-16 rounded-2xl bg-neutral-800/50 text-cyan-400 text-lg font-medium hover:bg-neutral-800 border border-white/5 transition-all" onclick="clearDisplay()">AC</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-neutral-300 text-lg hover:bg-neutral-800 border border-white/5 transition-all" onclick="insert('(')">(</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-neutral-300 text-lg hover:bg-neutral-800 border border-white/5 transition-all" onclick="insert(')')">)</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-indigo-400 text-xl hover:bg-indigo-900/20 border border-white/5 transition-all" onclick="insert('/')">÷</button>

<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('7')">7</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('8')">8</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('9')">9</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-indigo-400 text-xl hover:bg-indigo-900/20 border border-white/5 transition-all" onclick="insert('*')">×</button>

<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('4')">4</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('5')">5</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('6')">6</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-indigo-400 text-xl hover:bg-indigo-900/20 border border-white/5 transition-all" onclick="insert('-')">−</button>

<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('1')">1</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('2')">2</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('3')">3</button>
<button className="btn-press h-16 rounded-2xl bg-neutral-900 text-indigo-400 text-xl hover:bg-indigo-900/20 border border-white/5 transition-all" onclick="insert('+')">+</button>

<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-neutral-400 text-lg font-light transition-all" onclick="insert('%')">%</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('0')">0</button>
<button className="btn-press h-16 rounded-2xl bg-transparent hover:bg-neutral-800 text-white text-2xl font-light transition-all" onclick="insert('.')">.</button>
<button className="btn-press h-16 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-2xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center" onclick="calculate()">
<iconify-icon icon="solar:equals-linear" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex-col justify-end opacity-0 transition-opacity duration-300" id="solutionModal">
<div className="bg-neutral-900 border-t border-neutral-800 rounded-t-[2rem] h-[85%] w-full flex flex-col shadow-2xl transform translate-y-full transition-transform duration-300" id="solutionCard">

<div className="w-full flex justify-center pt-3 pb-1">
<div className="w-12 h-1.5 bg-neutral-800 rounded-full"></div>
</div>

<div className="px-6 py-4 flex justify-between items-center border-b border-neutral-800">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">Step-by-Step Solution</h2>
<p className="text-xs text-indigo-400 mt-1">Teacher Mode Active</p>
</div>
<button className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition" onclick="closeSolution()">
<iconify-icon className="text-white" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto flex-1">

<div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 mb-6 text-center">
<span className="text-neutral-400 text-sm block mb-1">Expression</span>
<span className="text-2xl font-light text-white" id="modalExpression">10 + (2 × 5)</span>
</div>

<div className="space-y-6 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-neutral-800"></div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center shrink-0 z-10">
<span className="text-indigo-300 font-semibold text-sm">1</span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Solve Brackets First (BODMAS)</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Sabse pehle bracket ke andar ka solve karte hain. <br/>
<span className="text-indigo-300 font-mono mt-1 block">2 × 5 = 10</span>
</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 z-10">
<span className="text-neutral-300 font-semibold text-sm">2</span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Addition</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Ab result ko add karo.<br/>
<span className="text-indigo-300 font-mono mt-1 block">10 + 10 = 20</span>
</p>
</div>
</div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-green-400 font-medium mb-1">Final Answer</h3>
<div className="text-3xl font-light text-white">20</div>
</div>
</div>
</div>
</div>

<div className="p-3 bg-neutral-950 border-t border-neutral-800">
<div className="bg-neutral-900 rounded-lg p-3 flex items-center justify-between group cursor-pointer hover:bg-neutral-800 transition">
<div className="flex items-center gap-3">
<div className="bg-indigo-500/20 p-2 rounded-md">
<iconify-icon className="text-indigo-400" icon="solar:star-fall-linear" width="18"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-semibold text-white">Remove Ads &amp; Unlock Exams</p>
<p className="text-[10px] text-neutral-500">Go Pro for distraction-free study</p>
</div>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-[60] bg-black/90 backdrop-blur-md hidden flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="proModal">
<div className="bg-neutral-900 border border-neutral-800 w-full max-w-sm rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden">

<div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full"></div>
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closeProModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-4 inline-flex p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30">
<iconify-icon className="text-amber-400" icon="solar:crown-star-bold" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">ThinkCalc <span className="text-amber-400">Pro</span></h2>
<p className="text-sm text-neutral-400 mb-6 font-light">Become a math genius with unlimited explanations and distraction-free mode.</p>
<ul className="text-left space-y-3 mb-8 px-2">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                        No Ads (Distraction Free)
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                        Unlimited Step-by-Step Solutions
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="18"></iconify-icon>
                        Exam Mode (Offline)
                    </li>
</ul>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-orange-500/20">
                    Upgrade for ₹99
                </button>
</div>
</div>
</div>


    </>
  );
}
