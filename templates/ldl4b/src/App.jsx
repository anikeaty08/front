import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Ripple Effect
        function createRipple(e) {
            const btn = e.currentTarget;
            const ripple = document.createElement("span");
            const rect = btn.getBoundingClientRect();
            const dia = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${dia}px`;
            ripple.style.left = `${e.clientX - rect.left - (dia/2)}px`;
            ripple.style.top = `${e.clientY - rect.top - (dia/2)}px`;
            ripple.classList.add("ripple-effect");
            
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }

        // Loading State
        function startLoad(btn) {
            const span = btn.querySelector('span');
            const spinner = btn.querySelector('.spinner');
            
            if(spinner.classList.contains('hidden')) {
                span.classList.add('hidden');
                spinner.classList.remove('hidden');
                btn.disabled = true;
                
                setTimeout(() => {
                    spinner.classList.add('hidden');
                    span.classList.remove('hidden');
                    span.textContent = 'Complete!';
                    btn.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
                    btn.classList.remove('bg-blue-600', 'hover:bg-blue-500');
                    
                    setTimeout(() => {
                        span.textContent = 'Start Process';
                        btn.disabled = false;
                        btn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
                        btn.classList.add('bg-blue-600', 'hover:bg-blue-500');
                    }, 2000);
                }, 2000);
            }
        }

        // Success Feedback
        function save(btn) {
            const originalText = btn.textContent;
            btn.textContent = "Saved!";
            btn.classList.remove('bg-neutral-100', 'hover:bg-white', 'text-black');
            btn.classList.add('bg-emerald-600', 'text-white');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.add('bg-neutral-100', 'hover:bg-white', 'text-black');
                btn.classList.remove('bg-emerald-600', 'text-white');
            }, 1500);
        }

        // Particles
        function particles(btn) {
            for(let i=0; i<8; i++) {
                let p = document.createElement('div');
                p.style.position = 'absolute';
                p.style.left = '50%'; p.style.top = '50%';
                p.style.width = '6px'; p.style.height = '6px';
                p.style.background = `hsl(${Math.random()*360}, 100%, 75%)`;
                p.style.borderRadius = '50%';
                p.style.pointerEvents = 'none';
                btn.appendChild(p);
                
                const x = (Math.random()-0.5)*120;
                const y = (Math.random()-0.5)*120;
                
                p.animate([
                    {transform:'translate(-50%, -50%) scale(1)', opacity:1}, 
                    {transform:`translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`, opacity:0}
                ], {duration: 600, easing: 'cubic-bezier(0, .9, .57, 1)'}).onfinish = () => p.remove();
            }
        }

        // Slider Fill
        function updateFill(el, color) {
            const val = (el.value - el.min) / (el.max - el.min) * 100;
            el.style.background = `linear-gradient(to right, ${color} ${val}%, #404040 ${val}%)`;
            
            // Update value text
            const display = el.previousElementSibling.querySelector('.val');
            if(display) display.textContent = el.value + '%';
        }
        
        // Initialize range sliders background
        document.querySelectorAll('input[type=range]').forEach(input => {
            if(!input.style.background) updateFill(input, '#6366f1');
        });

        // Hue Slider
        function updateHue(el) {
            document.getElementById('hue-preview').style.background = `hsl(${el.value}, 100%, 50%)`;
        }

        // Drag and Drop
        const dragEl = document.getElementById('dragEl');
        const dropArea = document.getElementById('dropArea');
        const dropText = document.getElementById('dropText');
        
        dragEl.addEventListener('dragstart', () => setTimeout(()=>dragEl.classList.add('invisible'), 0));
        dragEl.addEventListener('dragend', () => dragEl.classList.remove('invisible'));
        
        dropArea.addEventListener('dragover', (e) => { 
            e.preventDefault(); 
            dropArea.classList.add('drag-over'); 
        });
        
        dropArea.addEventListener('dragleave', () => dropArea.classList.remove('drag-over'));
        
        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            dropArea.classList.remove('drag-over');
            if(dragEl.parentNode !== dropArea) {
                dropArea.innerHTML = "";
                dropArea.appendChild(dragEl);
                dragEl.classList.remove('invisible');
            }
        });

        // Star Rating
        function rate(n) {
            const stars = document.querySelectorAll('.star-rating iconify-icon');
            stars.forEach((s, i) => {
                if (i < n) {
                    s.classList.add('text-yellow-400');
                    s.classList.remove('text-neutral-700');
                } else {
                    s.classList.remove('text-yellow-400');
                    s.classList.add('text-neutral-700');
                }
            });
        }

        // Counter
        let countVal = 0;
        function count(d) {
            countVal += d;
            document.querySelector('.count-display').textContent = countVal;
        }

        // Stepper
        let currentStep = 1;
        const stepEls = document.querySelectorAll('.step');
        function step(d) {
            currentStep = Math.max(1, Math.min(3, currentStep + d));
            stepEls.forEach((s, i) => {
                // Reset styling
                s.className = 'step w-8 h-8 rounded-full bg-neutral-950 border-2 flex items-center justify-center z-10 text-xs font-bold transition-colors duration-300';
                
                if (i + 1 < currentStep) {
                    // Completed
                    s.classList.add('border-indigo-600', 'bg-indigo-600', 'text-white');
                } else if (i + 1 === currentStep) {
                    // Active
                    s.classList.add('border-indigo-600', 'text-indigo-500');
                } else {
                    // Inactive
                    s.classList.add('border-neutral-700', 'text-neutral-500');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl mx-auto space-y-16">

<header className="text-center space-y-3">
<h1 className="text-4xl font-semibold tracking-tight text-white bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">Interactive UI Elements</h1>
<p className="text-neutral-500 font-medium">Explore satisfying buttons, toggles, sliders, and animations</p>
</header>

<section>
<h2 className="text-lg font-medium text-white mb-6 border-b border-neutral-900 pb-2">Satisfying Buttons</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Gradient Glow</span>
<div className="flex-1 flex items-center justify-center">
<button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all duration-300">
                            Click me
                        </button>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Ripple Effect</span>
<div className="flex-1 flex items-center justify-center">
<button className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium relative overflow-hidden transition-colors" onclick="createRipple(event)">
                            Press &amp; Hold
                        </button>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Morphing</span>
<div className="flex-1 flex items-center justify-center">
<button className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium hover:rounded-[2rem] hover:tracking-widest transition-all duration-300" id="morphBtn">
                            Hover me
                        </button>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Loading State</span>
<div className="flex-1 flex items-center justify-center">
<button className="btn-load w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all flex items-center justify-center min-h-[44px]" onclick="startLoad(this)">
<span>Start Process</span>
<iconify-icon className="spinner hidden" icon="lucide:loader-2" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Success Feedback</span>
<div className="flex-1 flex items-center justify-center">
<button className="w-full py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-black font-medium transition-all duration-300" onclick="save(this)">
                            Save Changes
                        </button>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Particle Effect</span>
<div className="flex-1 flex items-center justify-center">
<button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium relative" onclick="particles(this)">
                            Magic Click
                        </button>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium text-white mb-6 border-b border-neutral-900 pb-2">Interactive Toggles</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Dark Mode</span>
<span className="text-xs text-neutral-500">Smooth toggle</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Notifications</span>
<span className="text-xs text-neutral-500">iOS Style</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Sound</span>
<span className="text-xs text-neutral-500">Icon indicator</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500 peer-checked:after:bg-white"></div>
</label>
</div>

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Theme</span>
<span className="text-xs text-neutral-500">Multi-state</span>
</div>
<div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
<span className="px-3 py-1 bg-neutral-700 rounded text-xs font-medium text-white shadow-sm">Auto</span>
</div>
</div>

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Enable Feature</span>
<span className="text-xs text-neutral-500">Animated check</span>
</div>
<div className="w-6 h-6 rounded border-2 border-neutral-600 cursor-pointer flex items-center justify-center transition-all hover:border-neutral-500" onclick="this.classList.toggle('bg-indigo-600'); this.classList.toggle('border-indigo-600'); this.querySelector('iconify-icon').classList.toggle('scale-0');">
<iconify-icon className="text-white transition-transform duration-200 scale-0" icon="lucide:check" strokeWidth="3" width="16"></iconify-icon>
</div>
</div>

<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Favorite</span>
<span className="text-xs text-neutral-500">Heart reaction</span>
</div>
<div className="cursor-pointer text-neutral-600 transition-all hover:text-neutral-400 active:scale-125" onclick="this.classList.toggle('text-rose-500'); this.classList.toggle('hover:text-rose-600'); this.querySelector('iconify-icon').setAttribute('icon', this.classList.contains('text-rose-500') ? 'lucide:heart' : 'lucide:heart'); if(this.classList.contains('text-rose-500')) this.querySelector('iconify-icon').style.fill = 'currentColor'; else this.querySelector('iconify-icon').style.fill = 'none';">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium text-white mb-6 border-b border-neutral-900 pb-2">Smooth Sliders</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-center gap-4">
<div className="flex justify-between text-sm text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:volume-2"></iconify-icon> Volume</span>
<span className="val font-mono text-white">50%</span>
</div>
<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer" max="100" min="0" oninput="updateFill(this, '#6366f1')" type="range" value="50"/>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-center gap-4">
<div className="flex justify-between text-sm text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:palette"></iconify-icon> Hue</span>
<div className="w-5 h-5 rounded-full bg-cyan-500 shadow-sm border border-neutral-700" id="hue-preview"></div>
</div>
<input className="w-full h-2 rounded-lg appearance-none cursor-pointer" max="360" min="0" oninput="updateHue(this)" style={{background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'}} type="range" value="180"/>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-center gap-4">
<div className="flex justify-between text-sm text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:banknote"></iconify-icon> Budget</span>
<span className="font-mono text-white">$20 - $80</span>
</div>
<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer" type="range" value="40"/>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-center gap-4">
<div className="flex justify-between text-sm text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:sun"></iconify-icon> Level</span>
<span className="val font-mono text-white">75%</span>
</div>
<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer" max="100" min="0" oninput="updateFill(this, '#eab308')" type="range" value="75"/>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col justify-center gap-4">
<div className="flex justify-between text-sm text-neutral-400">
<span className="flex items-center gap-2"><iconify-icon icon="lucide:thermometer"></iconify-icon> Climate</span>
<span className="font-mono text-white">22°C</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer" style={{background: 'linear-gradient(to right, #3b82f6, #ef4444)'}} type="range" value="60"/>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex items-center justify-between">
<span className="text-sm text-neutral-400 flex items-center gap-2"><iconify-icon icon="lucide:pie-chart"></iconify-icon> Progress</span>
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90">
<circle cx="32" cy="32" fill="none" r="28" stroke="#262626" strokeLinecap="round" strokeWidth="6"></circle>
<circle className="circle-fill" cx="32" cy="32" fill="none" r="28" stroke="#6366f1" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">56%</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium text-white mb-6 border-b border-neutral-900 pb-2">Delightful Animations</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer animate-float group hover:border-neutral-700 transition-colors">
<div className="float-target text-4xl p-2 bg-neutral-800 rounded-lg">
<iconify-icon className="text-neutral-200" icon="lucide:ghost"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Hover for float effect</p>
</div>

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer animate-pulse-custom group hover:border-neutral-700 transition-colors">
<div className="pulse-target w-12 h-12 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
<p className="text-xs text-neutral-500">Pulsing status indicator</p>
</div>

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer animate-bounce-custom group hover:border-neutral-700 transition-colors">
<div className="bounce-target text-4xl text-yellow-400">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Click to bounce</p>
</div>

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer animate-shake group hover:border-neutral-700 transition-colors" onclick="this.classList.add('active'); setTimeout(()=&gt;this.classList.remove('active'),500)">
<div className="shake-target text-4xl text-neutral-400">
<iconify-icon icon="lucide:bell"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Click for error shake</p>
</div>

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer group hover:border-neutral-700 transition-colors" onclick="this.querySelector('.flip-container').classList.toggle('flipped')">
<div className="flip-container w-16 h-16">
<div className="flip-inner relative w-full h-full">
<div className="flip-front absolute w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center text-2xl border border-neutral-700">
<iconify-icon className="text-neutral-400" icon="lucide:help-circle"></iconify-icon>
</div>
<div className="flip-back absolute w-full h-full bg-indigo-600 rounded-lg flex items-center justify-center text-2xl text-white border border-indigo-500">
<iconify-icon icon="lucide:sparkles"></iconify-icon>
</div>
</div>
</div>
<p className="text-xs text-neutral-500">Click to flip card</p>
</div>

<div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center gap-4 cursor-pointer morph-container group hover:border-neutral-700 transition-colors" onclick="this.classList.toggle('playing')">
<div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 hover:bg-neutral-700 transition-colors">
<iconify-icon className="text-neutral-200 ml-1 play-icon" icon="lucide:play" width="28"></iconify-icon>
<iconify-icon className="text-neutral-200 pause-icon" icon="lucide:pause" width="28"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Click to toggle state</p>
</div>
</div>
</section>

<section className="pb-20">
<h2 className="text-lg font-medium text-white mb-6 border-b border-neutral-900 pb-2">Interactive Components</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Drag &amp; Drop</span>
<div className="drop-area h-24 border-2 border-dashed border-neutral-700 rounded-lg flex items-center justify-center transition-colors gap-2" id="dropArea">
<div className="draggable w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center cursor-grab active:cursor-grabbing text-white" draggable="true" id="dragEl">
<iconify-icon icon="lucide:grip-vertical" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 pointer-events-none" id="dropText">Drop here</span>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Star Rating</span>
<div className="flex items-center justify-center h-24">
<div className="star-rating flex gap-1 text-2xl text-neutral-700">
<iconify-icon className="cursor-pointer hover:scale-110 transition-transform" fill="currentColor" icon="lucide:star" onclick="rate(1)"></iconify-icon>
<iconify-icon className="cursor-pointer hover:scale-110 transition-transform" fill="currentColor" icon="lucide:star" onclick="rate(2)"></iconify-icon>
<iconify-icon className="cursor-pointer hover:scale-110 transition-transform" fill="currentColor" icon="lucide:star" onclick="rate(3)"></iconify-icon>
<iconify-icon className="cursor-pointer hover:scale-110 transition-transform" fill="currentColor" icon="lucide:star" onclick="rate(4)"></iconify-icon>
<iconify-icon className="cursor-pointer hover:scale-110 transition-transform" fill="currentColor" icon="lucide:star" onclick="rate(5)"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Counter</span>
<div className="flex items-center justify-center h-24">
<div className="flex items-center gap-4 bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">
<button className="w-8 h-8 rounded-full bg-neutral-700 hover:bg-rose-500 hover:text-white text-neutral-300 flex items-center justify-center transition-colors" onclick="count(-1)">
<iconify-icon icon="lucide:minus" width="16"></iconify-icon>
</button>
<span className="count-display font-mono w-8 text-center text-lg text-white">0</span>
<button className="w-8 h-8 rounded-full bg-neutral-700 hover:bg-emerald-500 hover:text-white text-neutral-300 flex items-center justify-center transition-colors" onclick="count(1)">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-3 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-6">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Progress Steps</span>
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between relative px-4">
<div className="absolute left-0 right-0 top-1/2 h-[2px] bg-neutral-800 -z-0"></div>
<div className="step w-8 h-8 rounded-full bg-neutral-950 border-2 border-indigo-600 text-indigo-500 flex items-center justify-center z-10 active text-xs font-bold transition-colors duration-300">1</div>
<div className="step w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 text-neutral-500 flex items-center justify-center z-10 text-xs font-bold transition-colors duration-300">2</div>
<div className="step w-8 h-8 rounded-full bg-neutral-950 border-2 border-neutral-700 text-neutral-500 flex items-center justify-center z-10 text-xs font-bold transition-colors duration-300">3</div>
</div>
<div className="flex justify-end gap-3">
<button className="px-4 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-300 transition-colors border border-neutral-700" onclick="step(-1)">Previous</button>
<button className="px-4 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white transition-colors" onclick="step(1)">Next</button>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
