import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Surprises Data
        const surprises = [
            "20% off Luxe Lipsticks",
            "Free Sheet Mask with Order",
            "Buy 1 Get 1 on Nail Enamels",
            "Exclusive: Kay Beauty Preview",
            "500 Bonus Reward Points"
        ];

        // Functions to handle view switching
        function openDay(dayNumber) {
            const calendarView = document.getElementById('calendar-view');
            const revealView = document.getElementById('reveal-view');
            
            // Format Number
            const dayString = dayNumber.toString().padStart(2, '0');
            document.getElementById('digit-1').textContent = dayString[0];
            document.getElementById('digit-2').textContent = dayString[1];
            
            // Randomize text for demo
            const randomText = surprises[Math.floor(Math.random() * surprises.length)];
            document.getElementById('surprise-text').textContent = `Day ${dayNumber} Surprise: ${randomText}. Valid for 24 hours only on the Nykaa App.`;

            // Animation
            revealView.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-full');
            revealView.classList.add('opacity-100', 'translate-y-0');
        }

        function closeDay() {
            const revealView = document.getElementById('reveal-view');
            
            // Animation reverse
            revealView.classList.remove('opacity-100', 'translate-y-0');
            revealView.classList.add('pointer-events-none', 'opacity-0', 'translate-y-full');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[400px] h-[850px] bg-sky-50 rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-stone-800 ring-1 ring-stone-900/5 flex flex-col">

<div className="h-14 w-full flex items-center justify-between px-6 pt-4 shrink-0 z-20">
<span className="text-sm font-medium text-stone-600">9:41</span>
<div className="h-7 w-28 bg-stone-900 rounded-full absolute left-1/2 -translate-x-1/2 top-4"></div>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-full border border-stone-400"></div>
<div className="w-4 h-4 rounded-full border border-stone-400 bg-stone-400"></div>
</div>
</div>

<div className="flex-1 flex flex-col relative overflow-y-auto hide-scrollbar transition-opacity duration-300" id="calendar-view">

<div className="text-center pt-2 pb-6 z-10">
<h1 className="leading-tight serif-font text-3xl font-medium text-emerald-900 tracking-tight">
                    Nykaa Holiday<br/><span className="italic text-rose-600">Advent Calendar</span>
</h1>
<p className="text-emerald-800/60 mt-2 text-sm">Discover a beauty surprise daily</p>
</div>

<div className="absolute top-0 left-0 w-full h-40 pointer-events-none opacity-50">
<div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full blur-[1px]"></div>
<div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full blur-[1px]"></div>
<div className="absolute top-5 right-10 w-1.5 h-1.5 bg-white rounded-full blur-[1px]"></div>
</div>

<div className="flex-1 flex flex-col items-center justify-end w-full relative px-4">

<div className="w-full relative z-10 mb-[-1px]">

<div className="absolute inset-0 flex justify-center items-end">
<div className="w-full h-48 bg-rose-200/50 backdrop-blur-sm rounded-t-full scale-110"></div>
</div>

<div className="relative z-20 flex flex-col items-center gap-4 pb-4">

<div className="flex justify-center">
<button className="group relative w-14 h-14 bg-amber-50 rounded-full border border-amber-200 shadow-sm flex items-center justify-center hover:scale-105 transition-transform" onclick="openDay(5)">
<span className="serif-font text-xl text-emerald-900 font-semibold group-hover:text-rose-600">05</span>
<div className="absolute -bottom-1 w-full h-1 bg-emerald-700/20 rounded-full blur-sm"></div>
</button>
</div>

<div className="flex justify-center gap-10">
<button className="snow-top relative w-12 h-12 bg-amber-50 rounded-full border border-amber-200 shadow-sm flex items-center justify-center hover:scale-105 transition-transform" onclick="openDay(1)">
<span className="serif-font text-lg text-emerald-900 font-semibold">01</span>
</button>
<button className="snow-top relative w-12 h-12 bg-amber-50 rounded-full border border-amber-200 shadow-sm flex items-center justify-center hover:scale-105 transition-transform" onclick="openDay(2)">
<span className="serif-font text-lg text-emerald-900 font-semibold">02</span>
</button>
</div>

<div className="flex justify-between w-full px-4">
<button className="relative w-12 h-12 bg-amber-50 rounded-full border border-amber-200 shadow-sm flex items-center justify-center hover:scale-105 transition-transform" onclick="openDay(3)">
<span className="serif-font text-lg text-emerald-900 font-semibold">03</span>
</button>
<button className="relative w-12 h-12 bg-amber-50 rounded-full border border-amber-200 shadow-sm flex items-center justify-center hover:scale-105 transition-transform" onclick="openDay(4)">
<span className="serif-font text-lg text-emerald-900 font-semibold">04</span>
</button>
</div>
</div>

<div className="h-4 w-[104%] -ml-[2%] bg-emerald-800 rounded-full relative overflow-hidden flex items-center justify-around">
<div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-150"></div>
<div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
</div>
</div>

<div className="w-full bg-rose-700 house-texture relative pt-6 px-4 pb-24 shadow-2xl rounded-t-sm z-0">

<div className="grid grid-cols-3 gap-y-6 gap-x-4">

<button className="col-span-1 snow-top relative h-16 bg-amber-50 rounded-sm border-2 border-rose-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors" onclick="openDay(6)">
<span className="serif-font text-xl text-emerald-900 font-semibold border-b border-emerald-900/30">06</span>
</button>
<button className="col-span-2 snow-top relative h-16 bg-amber-50 rounded-sm border-2 border-rose-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors" onclick="openDay(7)">
<span className="serif-font text-xl text-emerald-900 font-semibold border-b border-emerald-900/30">07</span>
</button>

<button className="relative h-16 bg-amber-50 rounded-t-full border-2 border-rose-800 shadow-lg flex items-end pb-2 justify-center hover:-translate-y-1 transition-transform" onclick="openDay(8)">
<span className="serif-font text-xl text-emerald-900 font-semibold">08</span>
</button>
<button className="relative h-16 bg-amber-50 rounded-t-full border-2 border-rose-800 shadow-lg flex items-end pb-2 justify-center hover:-translate-y-1 transition-transform" onclick="openDay(9)">
<span className="serif-font text-xl text-emerald-900 font-semibold">09</span>
</button>
<button className="relative h-16 bg-amber-50 rounded-t-full border-2 border-rose-800 shadow-lg flex items-end pb-2 justify-center hover:-translate-y-1 transition-transform" onclick="openDay(10)">
<span className="serif-font text-xl text-emerald-900 font-semibold">10</span>
</button>

<button className="snow-top relative h-16 bg-amber-50 rounded-t-xl border-2 border-rose-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors" onclick="openDay(11)">
<span className="serif-font text-xl text-emerald-900 font-semibold">11</span>
</button>
<button className="snow-top relative h-16 bg-amber-50 rounded-t-xl border-2 border-rose-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors" onclick="openDay(12)">
<span className="serif-font text-xl text-emerald-900 font-semibold">12</span>
</button>
<button className="snow-top relative h-16 bg-amber-50 rounded-t-xl border-2 border-rose-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors" onclick="openDay(13)">
<span className="serif-font text-xl text-emerald-900 font-semibold">13</span>
</button>

<button className="relative h-16 w-16 mx-auto bg-amber-50 rounded-full border-2 border-rose-800 shadow-lg flex items-center justify-center hover:rotate-12 transition-transform" onclick="openDay(14)">
<span className="serif-font text-xl text-emerald-900 font-semibold">14</span>
</button>
<button className="relative h-16 w-16 mx-auto bg-amber-50 rounded-full border-2 border-rose-800 shadow-lg flex items-center justify-center hover:rotate-12 transition-transform" onclick="openDay(15)">
<span className="serif-font text-xl text-emerald-900 font-semibold">15</span>
</button>
<button className="relative h-16 w-16 mx-auto bg-amber-50 rounded-full border-2 border-rose-800 shadow-lg flex items-center justify-center hover:rotate-12 transition-transform" onclick="openDay(16)">
<span className="serif-font text-xl text-emerald-900 font-semibold">16</span>
</button>

<div className="col-span-3 flex items-end justify-between mt-4">
<div className="flex flex-col gap-3">
<button className="w-10 h-10 bg-amber-50 border border-rose-800 flex items-center justify-center text-emerald-900 font-medium serif-font hover:bg-white" onclick="openDay(17)">17</button>
<button className="w-10 h-10 bg-amber-50 border border-rose-800 flex items-center justify-center text-emerald-900 font-medium serif-font hover:bg-white" onclick="openDay(19)">19</button>
</div>

<button className="relative w-24 h-32 bg-amber-700/90 border-4 border-amber-800 rounded-t-lg flex flex-col items-center justify-center shadow-inner hover:bg-amber-700 transition-colors group" onclick="openDay(25)">
<div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-emerald-900 text-white shadow-lg group-hover:scale-110 transition-transform">
<span className="serif-font text-xl">25</span>
</div>

<div className="absolute w-16 h-16 rounded-full border-2 border-dashed border-emerald-500 opacity-50 pointer-events-none"></div>
</button>
<div className="flex flex-col gap-3">
<button className="w-10 h-10 bg-amber-50 border border-rose-800 flex items-center justify-center text-emerald-900 font-medium serif-font hover:bg-white" onclick="openDay(21)">21</button>
<button className="w-10 h-10 bg-amber-50 border border-rose-800 flex items-center justify-center text-emerald-900 font-medium serif-font hover:bg-white" onclick="openDay(23)">23</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 z-20 flex items-end overflow-hidden">

<svg className="absolute bottom-6 left-[-20px] text-emerald-800 w-24 h-32 drop-shadow-lg" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L90 80 H10 L50 0 Z"></path>
</svg>

<svg className="absolute bottom-6 right-[-20px] text-emerald-800 w-24 h-32 drop-shadow-lg" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L90 80 H10 L50 0 Z"></path>
</svg>

<div className="w-full flex items-end justify-between px-2 gap-1 mb-[-5px]">
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-full h-3 bg-white absolute bottom-3 left-0"></div> 
<div className="w-full h-3 bg-white absolute bottom-8 left-0"></div> 
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
<div className="w-3 h-12 bg-white rounded-t-lg"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-rose-700 flex flex-col items-center opacity-0 pointer-events-none transition-all duration-500 translate-y-full" id="reveal-view">

<div className="w-full h-20 relative overflow-hidden">
<div className="absolute top-[-10px] left-0 w-[120%] ml-[-10%] h-10 border-b-2 border-stone-900/30 rounded-full"></div>
<div className="flex justify-around pt-6 w-full px-4">
<div className="w-3 h-4 bg-yellow-300 rounded-full animate-pulse shadow-[0_0_15px_rgba(253,224,71,0.8)]"></div>
<div className="w-3 h-4 bg-emerald-400 rounded-full animate-pulse delay-75 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<div className="w-3 h-4 bg-blue-400 rounded-full animate-pulse delay-150 shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
<div className="w-3 h-4 bg-rose-400 rounded-full animate-pulse delay-300 shadow-[0_0_15px_rgba(251,113,133,0.8)]"></div>
</div>
</div>
<div className="flex-1 w-full flex flex-col items-center justify-center px-8 text-center relative">

<div className="flex gap-4 mb-12">
<div className="bg-amber-50 w-24 h-32 rounded-xl shadow-2xl flex items-center justify-center border-b-4 border-amber-200 transform -rotate-6">
<span className="serif-font text-6xl text-emerald-900 font-medium" id="digit-1">0</span>
</div>
<div className="bg-amber-50 w-24 h-32 rounded-xl shadow-2xl flex items-center justify-center border-b-4 border-amber-200 transform rotate-6">
<span className="serif-font text-6xl text-emerald-900 font-medium" id="digit-2">1</span>
</div>
</div>

<h2 className="serif-font text-3xl text-amber-50 mb-4 tracking-tight">
                    Your Beauty Surprise
                </h2>
<p className="text-rose-100 text-lg leading-relaxed font-light mb-8 max-w-[280px]" id="surprise-text">
                    Get ready for a glow up! Unlock an exclusive 20% discount on all Luxe Lipsticks today.
                </p>

<div className="absolute bottom-24 left-[-40px] opacity-20 rotate-12">
<svg className="text-emerald-900 w-48 h-64" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 0 L90 80 H10 L50 0 Z"></path>
</svg>
</div>

<div className="absolute top-1/4 right-8 text-white/30">
<svg className="lucide lucide-snowflake w-6 h-6" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<div className="absolute bottom-1/3 left-8 text-white/20">
<svg className="lucide lucide-snowflake w-8 h-8" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>

<button className="relative z-10 flex items-center gap-2 bg-amber-50 text-rose-700 px-6 py-3 rounded-full shadow-lg font-medium hover:scale-105 active:scale-95 transition-all" onclick="closeDay()">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                    Back to Calendar
                </button>
</div>
</div>
</div>


    </>
  );
}
