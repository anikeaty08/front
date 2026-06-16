import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Canvas Logic
        function initCanvas(canvasId) {
            const canvas = document.getElementById(canvasId);
            if(!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            let painting = false;

            function startPosition(e) {
                painting = true;
                draw(e);
            }
            function endPosition() {
                painting = false;
                ctx.beginPath();
            }
            function draw(e) {
                if (!painting) return;
                const rect = canvas.getBoundingClientRect();
                const x = (e.clientX || e.touches[0].clientX) - rect.left;
                const y = (e.clientY || e.touches[0].clientY) - rect.top;

                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = canvasId === 'name-canvas' ? '#ffffff' : '#6366f1'; 
                ctx.shadowBlur = canvasId === 'name-canvas' ? 2 : 0;
                ctx.shadowColor = '#fff';
                
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            }

            canvas.addEventListener('mousedown', startPosition);
            canvas.addEventListener('touchstart', startPosition);
            canvas.addEventListener('mouseup', endPosition);
            canvas.addEventListener('touchend', endPosition);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('touchmove', draw);
        }

        // Nav Logic
        function nextScreen(screenId) {
            const current = document.querySelector('.animate-pop:not(.hidden)'); 
            if(current) {
                current.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
                current.classList.remove('animate-pop');
                current.classList.add('hidden');
            }

            const next = document.getElementById(`screen-${screenId}`);
            next.classList.remove('hidden');
            next.classList.remove('opacity-0');
            next.classList.add('animate-pop');
            
            if(screenId === 2) {
                document.getElementById('progress-container').classList.remove('hidden');
                updateDots(0);
                setTimeout(() => initCanvas('name-canvas'), 100);
            }
            if(screenId === 3) updateDots(1);
        }

        function updateDots(index) {
            const dots = document.querySelectorAll('.dot-step');
            dots.forEach((d, i) => {
                d.classList.remove('bg-slate-900', 'scale-125');
                if(i <= index) {
                    d.classList.remove('bg-slate-100');
                    d.classList.add('bg-slate-900');
                }
                if(i === index) d.classList.add('scale-125');
            });
        }

        function toggleInput(mode) {
            const write = document.getElementById('input-write');
            const type = document.getElementById('input-type');
            const bWrite = document.getElementById('btn-write');
            const bType = document.getElementById('btn-type');

            if(mode === 'write') {
                write.classList.remove('hidden');
                type.classList.add('hidden');
                type.classList.remove('flex');
                bWrite.classList.add('bg-white', 'shadow-sm', 'text-slate-800');
                bWrite.classList.remove('text-slate-500');
                bType.classList.remove('bg-white', 'shadow-sm', 'text-slate-800');
                bType.classList.add('text-slate-500');
                setTimeout(() => initCanvas('name-canvas'), 50);
            } else {
                write.classList.add('hidden');
                type.classList.remove('hidden');
                type.classList.add('flex');
                bType.classList.add('bg-white', 'shadow-sm', 'text-slate-800');
                bType.classList.remove('text-slate-500');
                bWrite.classList.remove('bg-white', 'shadow-sm', 'text-slate-800');
                bWrite.classList.add('text-slate-500');
            }
        }

        function selectAge(btn) {
             document.querySelectorAll('.age-btn').forEach(b => {
                 b.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50');
                 b.querySelector('.rounded-full').classList.remove('bg-indigo-500', 'border-indigo-500');
             });
             btn.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50');
             btn.querySelector('.rounded-full').classList.add('bg-indigo-500', 'border-indigo-500');
        }

        function launchApp() {
            const screen3 = document.getElementById('screen-3');
            const dash = document.getElementById('app-dashboard');
            const prog = document.getElementById('progress-container');

            screen3.classList.add('hidden');
            prog.classList.add('hidden');
            dash.classList.remove('hidden');
            dash.classList.remove('opacity-0');
            dash.classList.add('animate-pop');
            
            setTimeout(() => initCanvas('main-canvas'), 100);
        }

        function switchTab(tab) {
            const vCanvas = document.getElementById('view-canvas');
            const vBook = document.getElementById('view-storybook');
            const tCanvas = document.getElementById('tab-canvas');
            const tBook = document.getElementById('tab-book');

            if(tab === 'canvas') {
                vBook.classList.add('hidden');
                vCanvas.classList.remove('hidden');
                
                tCanvas.classList.add('bg-slate-900', 'text-white', 'shadow-md');
                tCanvas.classList.remove('text-slate-400', 'hover:bg-slate-50');
                
                tBook.classList.remove('bg-slate-900', 'text-white', 'shadow-md');
                tBook.classList.add('text-slate-400', 'hover:bg-slate-50');
            } else {
                vCanvas.classList.add('hidden');
                vBook.classList.remove('hidden');
                vBook.classList.add('flex'); // ensure flex for layout

                tBook.classList.add('bg-slate-900', 'text-white', 'shadow-md');
                tBook.classList.remove('text-slate-400', 'hover:bg-slate-50');
                
                tCanvas.classList.remove('bg-slate-900', 'text-white', 'shadow-md');
                tCanvas.classList.add('text-slate-400', 'hover:bg-slate-50');
            }
        }

        function triggerAI() {
            const overlay = document.getElementById('ai-overlay');
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[400px] h-full sm:h-[850px] bg-white sm:rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col">

<div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-white via-white/95 to-transparent">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-indigo-200">S</div>
<span className="font-semibold tracking-tight text-lg text-slate-800">ScribbleStep</span>
</div>

<div className="hidden flex gap-2" id="progress-container">
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-colors duration-300 dot-step"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-colors duration-300 dot-step"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-colors duration-300 dot-step"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 transition-colors duration-300 dot-step"></div>
</div>
</div>

<div className="flex-1 relative overflow-y-auto hide-scrollbar bg-slate-50/30" id="main-content">

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 animate-pop bg-white z-40" id="screen-1">
<div className="flex-1 flex flex-col items-center justify-center w-full">

<div className="relative w-44 h-44 mb-12 animate-float">
<div className="lumi-body w-full h-full rounded-full flex items-center justify-center relative z-10 border border-white/50">
<div className="flex gap-5 mt-1">
<div className="w-3.5 h-3.5 bg-slate-800 rounded-full"></div>
<div className="w-3.5 h-3.5 bg-slate-800 rounded-full"></div>
</div>

<div className="absolute mt-8 w-5 h-2.5 border-b-3 border-slate-800 rounded-full"></div>
</div>

<div className="absolute -inset-6 bg-gradient-to-tr from-indigo-100/60 to-rose-100/60 blur-3xl rounded-full -z-10"></div>

<i className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" data-lucide="sparkles"></i>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-center mb-4 text-slate-900">Lumi's Storybook</h1>
<p className="text-slate-500 text-center leading-relaxed max-w-[260px] font-medium">
                        Turn scribbles into stories. Lumi watches, learns, and builds a book of their growth.
                    </p>
<div className="flex items-center justify-center gap-6 mt-14 w-full px-4">
<div className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-[1.2rem] bg-white border border-slate-100 flex items-center justify-center text-indigo-400 shadow-lg shadow-slate-100 group-hover:-translate-y-1 transition-transform">
<i className="w-6 h-6" data-lucide="pencil"></i>
</div>
<span className="text-xs font-semibold text-slate-400">Draw</span>
</div>
<div className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-[1.2rem] bg-white border border-slate-100 flex items-center justify-center text-rose-400 shadow-lg shadow-slate-100 group-hover:-translate-y-1 transition-transform">
<i className="w-6 h-6" data-lucide="wand-2"></i>
</div>
<span className="text-xs font-semibold text-slate-400">Magify</span>
</div>
<div className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-[1.2rem] bg-white border border-slate-100 flex items-center justify-center text-amber-400 shadow-lg shadow-slate-100 group-hover:-translate-y-1 transition-transform">
<i className="w-6 h-6" data-lucide="book-heart"></i>
</div>
<span className="text-xs font-semibold text-slate-400">Keep</span>
</div>
</div>
</div>
<button className="btn-press w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2" onclick="nextScreen(2)">
                    Start Creating <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="absolute inset-0 flex flex-col p-6 pt-24 hidden opacity-0 bg-white z-30" id="screen-2">
<div className="text-center mb-8">
<h2 className="text-2xl font-bold tracking-tight mb-2 text-slate-800">Who is the artist?</h2>
<p className="text-slate-500 text-sm font-medium">Lumi will personalize the book.</p>
</div>
<div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6 self-center shadow-inner">
<button className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white shadow-sm text-slate-800 transition-all" id="btn-write" onclick="toggleInput('write')">Trace It</button>
<button className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-700 transition-all" id="btn-type" onclick="toggleInput('type')">Type It</button>
</div>
<div className="flex-1 relative w-full aspect-square chalkboard rounded-[2rem] overflow-hidden shadow-inner border-4 border-slate-200/50 mb-6 touch-none group cursor-crosshair" id="input-write">
<canvas className="w-full h-full z-10" id="name-canvas"></canvas>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
<span className="text-slate-400 text-xs font-medium tracking-widest uppercase">Write Here</span>
</div>

<div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-20 rotate-[-10deg] border-4 border-slate-100">
<div className="w-2.5 h-2.5 bg-slate-800 rounded-full mr-1.5"></div>
<div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
</div>
</div>
<div className="flex-1 hidden flex-col items-center justify-center mb-6" id="input-type">
<div className="w-full max-w-xs bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
<input className="w-full text-center text-3xl font-bold text-slate-800 bg-transparent outline-none placeholder:text-slate-300" placeholder="Name..." type="text"/>
</div>
</div>
<button className="btn-press w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-sm mt-auto" onclick="nextScreen(3)">Continue</button>
</div>

<div className="absolute inset-0 flex flex-col p-6 pt-24 hidden opacity-0 bg-white z-30" id="screen-3">
<div className="text-center mb-10">
<h2 className="text-2xl font-bold tracking-tight mb-2 text-slate-800">How old are they?</h2>
<p className="text-slate-500 text-sm font-medium">This adjusts the AI difficulty.</p>
</div>
<div className="flex-1 flex flex-col items-center gap-4">
<button className="age-btn btn-press w-full p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group flex items-center gap-4" onclick="selectAge(this)">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">2</div>
<div className="text-left">
<p className="font-bold text-slate-800">Toddler</p>
<p className="text-xs text-slate-400">Scribbles &amp; Colors</p>
</div>
<div className="ml-auto w-6 h-6 rounded-full border-2 border-slate-100 group-hover:border-indigo-500"></div>
</button>
<button className="age-btn btn-press w-full p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-rose-200 transition-all group flex items-center gap-4" onclick="selectAge(this)">
<div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">4</div>
<div className="text-left">
<p className="font-bold text-slate-800">Preschool</p>
<p className="text-xs text-slate-400">Shapes &amp; Letters</p>
</div>
<div className="ml-auto w-6 h-6 rounded-full border-2 border-slate-100 group-hover:border-rose-500"></div>
</button>
</div>
<button className="btn-press w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-sm mt-auto" onclick="launchApp()">Create Storybook</button>
</div>

<div className="absolute inset-0 flex flex-col hidden opacity-0 bg-slate-50/50 z-20" id="app-dashboard">

<div className="pt-6 px-6 pb-2 bg-white flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center relative">

<div className="flex gap-1">
<div className="w-1 h-1 bg-indigo-900 rounded-full"></div>
<div className="w-1 h-1 bg-indigo-900 rounded-full"></div>
</div>

<div className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-white rounded-full animate-bounce"></div>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Current Phase</p>
<p className="text-sm font-bold text-slate-800">Circle Mastery</p>
</div>
</div>
<button className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="flex-1 relative m-4 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden" id="view-canvas">

<div className="absolute inset-0 bg-indigo-900/5 z-30 hidden pointer-events-none flex items-center justify-center" id="ai-overlay">
<div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pop">
<i className="w-4 h-4 text-indigo-500 animate-spin" data-lucide="sparkles"></i>
<span className="text-xs font-bold text-indigo-900">Lumi sees a Circle!</span>
</div>
</div>

<div className="absolute left-4 top-4 bottom-4 w-14 bg-slate-50/80 backdrop-blur-sm rounded-[1.2rem] border border-white/50 flex flex-col items-center py-4 gap-5 z-20 shadow-sm">
<button className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-lg shadow-slate-300 scale-110 transition-transform hover:scale-125">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-rose-400 flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="eraser"></i>
</button>
<button className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-sky-400 flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="palette"></i>
</button>

<button className="mt-auto w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 animate-pulse hover:animate-none hover:scale-110 transition-all" onclick="triggerAI()">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</button>
</div>
<canvas className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/snow.png')] bg-slate-50/30" id="main-canvas"></canvas>

<div className="absolute top-6 right-6 max-w-[160px] bg-white/95 backdrop-blur p-3.5 rounded-2xl rounded-tr-sm border border-slate-100 shadow-lg shadow-slate-200/50 flex gap-3 animate-pop">
<div className="w-1.5 h-full bg-amber-400 rounded-full"></div>
<div>
<p className="text-xs font-bold text-slate-800">Try drawing a BIG ball!</p>
<p className="text-[10px] text-slate-500 mt-0.5">I'll help you fix the lines.</p>
</div>
</div>
</div>

<div className="flex-1 relative m-4 mt-0 rounded-3xl overflow-hidden hidden flex-col" id="view-storybook">

<div className="mb-4 p-4 bg-gradient-to-r from-indigo-50 to-white rounded-2xl border border-indigo-100 flex items-center justify-between">
<div>
<h2 className="text-lg font-bold text-slate-800">The Scribble That Could</h2>
<p className="text-xs text-slate-500">Based on 12 interactions</p>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar space-y-4 pb-20">

<div className="soft-card p-5 rounded-3xl">
<div className="flex justify-between items-start mb-3">
<span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide">Milestone</span>
<span className="text-xs text-slate-400 font-medium">Oct 12</span>
</div>
<h3 className="text-base font-bold text-slate-800 mb-2">The First Circle</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Today, the scribbles connected! A perfect loop was formed. Lumi cheered as the shape came to life.
                            </p>
<div className="w-full h-32 bg-slate-100 rounded-xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
<i className="w-16 h-16 text-indigo-400 opacity-80 stroke-[3px]" data-lucide="circle"></i>
<div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-md shadow-sm text-[10px] font-bold text-slate-600">Original</div>
</div>
</div>

<div className="soft-card p-5 rounded-3xl">
<div className="flex justify-between items-start mb-3">
<span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide">New Letter</span>
<span className="text-xs text-slate-400 font-medium">Yesterday</span>
</div>
<h3 className="text-base font-bold text-slate-800 mb-2">Tracing the 'A'</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                                Mountains go up and down. We learned that 'A' stands for Apple, and for Amazing!
                            </p>
<div className="w-full h-32 bg-slate-100 rounded-xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
<span className="text-6xl font-bold text-rose-300 opacity-50">A</span>
<div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-md shadow-sm text-[10px] font-bold text-slate-600">Traced</div>
</div>
</div>

<div className="p-2">
<button className="w-full bg-slate-800 text-white py-3.5 rounded-xl font-semibold text-xs mb-3 flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
<i className="w-4 h-4" data-lucide="download"></i> Export PDF Storybook
                            </button>
<button className="w-full bg-white border border-slate-200 text-slate-500 py-3.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
<i className="w-4 h-4" data-lucide="shopping-bag"></i> Order Hardcover (Soon)
                            </button>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md rounded-[1.5rem] p-1.5 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex">
<button className="flex-1 py-3 rounded-2xl bg-slate-900 text-white shadow-md flex items-center justify-center gap-2 transition-all transform" id="tab-canvas" onclick="switchTab('canvas')">
<i className="w-4 h-4" data-lucide="pencil"></i>
<span className="text-xs font-bold">Canvas</span>
</button>
<button className="flex-1 py-3 rounded-2xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 flex items-center justify-center gap-2 transition-all transform" id="tab-book" onclick="switchTab('book')">
<i className="w-4 h-4" data-lucide="book"></i>
<span className="text-xs font-bold">Storybook</span>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
