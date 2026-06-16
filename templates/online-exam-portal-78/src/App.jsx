import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                        // Quick inline script to generate remaining buttons for the mock visual
                        for(let i=9; i<=20; i++) {
                            document.write(`<button class="w-full aspect-square rounded-lg bg-white border border-neutral-200 text-neutral-600 font-medium hover:border-neutral-400 transition-colors flex items-center justify-center text-sm">${i}</button>`);
                        }
                    


        // Simple Countdown Timer Script
        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                // Add pulse effect when time is low (< 5 mins)
                if (timer < 300) {
                    display.classList.add('animate-pulse');
                }

                if (--timer < 0) {
                    timer = 0;
                    display.textContent = "00:00";
                    // Handle exam auto-submit logic here
                }
            }, 1000);
        }

        window.onload = function () {
            let oneHour = 60 * 60;
            let display = document.querySelector('#timer');
            startTimer(oneHour, display);
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
<div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-semibold tracking-tight">
                    GD
                </div>
<span className="text-base font-semibold tracking-tight hidden sm:block">EXAM PORTAL</span>
</div>

<div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg text-neutral-800">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-neutral-500 leading-none mb-0.5">Time Left</span>
<span className="font-semibold leading-none text-base tracking-tight text-red-600" id="timer">60:00</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-right mr-4">
<div className="flex flex-col">
<span className="font-medium">Candidate Name</span>
<span className="text-xs text-neutral-500">Roll: 2024987654</span>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-500">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<button className="px-5 py-2.5 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 outline-none">
                    Submit Test
                </button>
</div>
</div>
</header>

<div className="bg-white border-b border-neutral-200">
<div className="max-w-[1400px] mx-auto px-4 lg:px-6">
<nav className="flex overflow-x-auto hide-scrollbar">
<button className="whitespace-nowrap px-1 py-4 text-sm font-medium border-b-2 border-neutral-900 text-neutral-900 mr-8">
                    Part A: Intelligence &amp; Reasoning
                </button>
<button className="whitespace-nowrap px-1 py-4 text-sm font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 mr-8 transition-colors">
                    Part B: General Knowledge
                </button>
<button className="whitespace-nowrap px-1 py-4 text-sm font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 mr-8 transition-colors">
                    Part C: Elementary Math
                </button>
<button className="whitespace-nowrap px-1 py-4 text-sm font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 transition-colors">
                    Part D: English / Hindi
                </button>
</nav>
</div>
</div>

<main className="flex-1 max-w-[1400px] w-full mx-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-6 h-[calc(100vh-120px)] overflow-hidden">

<div className="flex-1 flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">

<div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<h2 className="text-lg font-semibold tracking-tight text-neutral-800">Question 2</h2>
<div className="flex items-center gap-3 text-xs font-medium">
<span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> +2.0
                    </span>
<span className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> -0.50
                    </span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6">

<div className="prose prose-sm max-w-none text-neutral-700 mb-8">
<p className="text-base leading-relaxed mb-4">Select the option that is related to the third term in the same way as the second term is related to the first term.</p>
<div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 font-medium text-base text-center tracking-wide">
                        BLOCK : LOBKC :: MARGIN : ?
                    </div>
</div>

<div className="grid gap-4 max-w-2xl">

<label className="group relative flex items-start gap-4 p-4 rounded-xl border border-neutral-200 cursor-pointer hover:border-neutral-300 bg-white transition-all">
<input className="peer sr-only" name="answer" type="radio"/>
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-blue-600 peer-checked:border-[6px] bg-white transition-all"></div>
<span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium">NGRAMI</span>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-blue-600 pointer-events-none transition-colors"></div>
</label>

<label className="group relative flex items-start gap-4 p-4 rounded-xl border border-neutral-200 cursor-pointer hover:border-neutral-300 bg-white transition-all">
<input checked="" className="peer sr-only" name="answer" type="radio"/>
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-blue-600 peer-checked:border-[6px] bg-white transition-all"></div>
<span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium">NIGRAM</span>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-blue-600 pointer-events-none transition-colors"></div>
</label>

<label className="group relative flex items-start gap-4 p-4 rounded-xl border border-neutral-200 cursor-pointer hover:border-neutral-300 bg-white transition-all">
<input className="peer sr-only" name="answer" type="radio"/>
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-blue-600 peer-checked:border-[6px] bg-white transition-all"></div>
<span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium">GMIRNA</span>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-blue-600 pointer-events-none transition-colors"></div>
</label>

<label className="group relative flex items-start gap-4 p-4 rounded-xl border border-neutral-200 cursor-pointer hover:border-neutral-300 bg-white transition-all">
<input className="peer sr-only" name="answer" type="radio"/>
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-blue-600 peer-checked:border-[6px] bg-white transition-all"></div>
<span className="text-sm text-neutral-700 group-hover:text-neutral-900 font-medium">AMRIGN</span>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-blue-600 pointer-events-none transition-colors"></div>
</label>
</div>
</div>

<div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-4 mt-auto">
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200 outline-none flex items-center gap-2">
<iconify-icon icon="solar:flag-linear"></iconify-icon> Mark for Review
                    </button>
<button className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors focus:outline-none underline decoration-transparent hover:decoration-neutral-300 underline-offset-4">
                        Clear Response
                    </button>
</div>
<div className="flex items-center gap-3">
<button className="px-5 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200 outline-none hidden sm:block">
                        Previous
                    </button>
<button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 outline-none flex items-center gap-2 shadow-sm">
                        Save &amp; Next <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:w-80 flex flex-col gap-4 overflow-y-auto lg:overflow-visible">

<div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm">
<h3 className="text-sm font-medium text-neutral-900 mb-4 tracking-tight">Status Overview</h3>
<div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-neutral-600">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-green-100 border border-green-200 text-green-700 flex items-center justify-center font-medium">1</div>
<span>Answered</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-medium">2</div>
<span>Not Answered</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white border border-neutral-300 text-neutral-500 flex items-center justify-center font-medium">15</div>
<span>Not Visited</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center font-medium">2</div>
<span>Marked</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200 p-5 flex-1 overflow-y-auto shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-neutral-900 tracking-tight">Intelligence &amp; Reasoning</h3>
<span className="text-xs bg-neutral-100 px-2 py-1 rounded text-neutral-600">20 Qs</span>
</div>

<div className="grid grid-cols-5 gap-2.5">

<button className="w-full aspect-square rounded-lg bg-green-100 border border-green-200 text-green-700 font-medium hover:bg-green-200 transition-colors flex items-center justify-center text-sm">1</button>

<button className="w-full aspect-square rounded-lg bg-blue-50 border-2 border-blue-600 text-blue-700 font-medium flex items-center justify-center text-sm ring-2 ring-blue-100 ring-offset-1">2</button>

<button className="w-full aspect-square rounded-lg bg-red-50 border border-red-200 text-red-600 font-medium hover:bg-red-100 transition-colors flex items-center justify-center text-sm">3</button>

<button className="w-full aspect-square rounded-lg bg-purple-50 border border-purple-200 text-purple-700 font-medium hover:bg-purple-100 transition-colors flex items-center justify-center text-sm relative">
                        4
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-600"></div>
</button>

<button className="w-full aspect-square rounded-lg bg-white border border-neutral-200 text-neutral-600 font-medium hover:border-neutral-400 transition-colors flex items-center justify-center text-sm">5</button>
<button className="w-full aspect-square rounded-lg bg-white border border-neutral-200 text-neutral-600 font-medium hover:border-neutral-400 transition-colors flex items-center justify-center text-sm">6</button>
<button className="w-full aspect-square rounded-lg bg-white border border-neutral-200 text-neutral-600 font-medium hover:border-neutral-400 transition-colors flex items-center justify-center text-sm">7</button>

<button className="w-full aspect-square rounded-lg bg-purple-50 border border-purple-200 text-purple-700 font-medium hover:bg-purple-100 transition-colors flex items-center justify-center text-sm relative">
                        8
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500"></div>
</button>


</div>
</div>
</div>
</main>


    </>
  );
}
