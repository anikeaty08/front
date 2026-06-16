import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentStepId = 0;
        const totalSteps = 5;
        const progressArea = document.getElementById('progress-area');
        const progressFill = document.getElementById('progress-fill');
        const character = document.getElementById('character');
        const bubble = document.getElementById('bubble');
        const bubbleText = document.getElementById('bubble-text');

        const thoughts = [
            "Aha...", 
            "Verstehe...", 
            "Schön!", 
            "Oh...", 
            "Fast da..."
        ];

        function startQuiz() {
            // Background fading logic
            document.getElementById('main-bg').style.opacity = '0.3';
            
            progressArea.classList.remove('hidden');
            setTimeout(() => progressArea.classList.remove('opacity-0'), 50);
            nextStep(1);
        }

        function nextStep(targetStep) {
            const currentEl = document.getElementById(`step-${currentStepId}`);
            currentEl.classList.remove('active-step');
            currentEl.classList.add('exit-step');

            setTimeout(() => {
                currentEl.classList.add('hidden-step');
                currentEl.classList.remove('exit-step');
            }, 600);

            moveCharacter(targetStep);

            setTimeout(() => {
                const nextEl = document.getElementById(`step-${targetStep}`);
                nextEl.classList.remove('hidden-step');
                nextEl.classList.add('active-step');
                currentStepId = targetStep;
                
                character.classList.remove('character-walking');
                character.classList.add('character-waiting');
            }, 700);
        }

        function moveCharacter(step) {
            const percentage = ((step - 1) / totalSteps) * 100;
            
            character.classList.remove('character-waiting');
            character.classList.add('character-walking');
            
            progressFill.style.width = `${percentage}%`;
            character.style.left = `${percentage}%`;

            if (step > 1 && step <= totalSteps + 1) {
                bubbleText.innerText = thoughts[Math.floor(Math.random() * thoughts.length)];
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1) translateX(-50%)'; 
                
                setTimeout(() => {
                    bubble.style.opacity = '0';
                    bubble.style.transform = 'scale(0.9) translateX(-50%)';
                }, 2000);
            }
        }

        function enableNext() {
            setTimeout(() => {
                const btn = document.querySelector(`#step-${currentStepId} button`);
                if(btn) {
                    btn.disabled = false;
                    btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                    
                    const head = character.querySelector('.head');
                    head.style.animation = 'none';
                    setTimeout(() => head.style.animation = '', 10);
                }
            }, 200);
        }

        function finishQuiz() {
            const currentEl = document.getElementById(`step-${currentStepId}`);
            currentEl.classList.remove('active-step');
            currentEl.classList.add('exit-step');

            progressFill.style.width = `100%`;
            character.style.left = `100%`;
            character.classList.remove('character-waiting');
            character.classList.add('character-walking');

            const loading = document.getElementById('loading-state');
            loading.classList.remove('hidden-step');
            loading.classList.add('active-step');
            
            setTimeout(() => {
                progressArea.classList.add('opacity-0');
            }, 1200);

            setTimeout(() => {
                loading.classList.remove('active-step');
                loading.classList.add('hidden-step');
                
                const result = document.getElementById('step-result');
                result.classList.remove('hidden-step');
                result.classList.add('active-step');
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 transition-opacity duration-1000 ease-in-out" data-alpha-mask="80" id="main-bg" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6301f5d4-1d28-4e8b-a38d-2b4c4024132b_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center max-w-5xl mx-auto left-0 right-0">

<div className="flex items-center gap-3 group cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
<svg fill="none" height="40" viewbox="0 0 100 100" width="40" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" fill="none" r="48" stroke="#44403C" strokeWidth="3"></circle>
<path d="M50 25C65 25 70 35 70 50V75M70 75H75M70 75V60C70 45 60 40 50 40C35 40 30 55 30 65C30 75 35 80 50 80C60 80 70 75 70 65" stroke="#44403C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>
<div className="text-[11px] uppercase hidden sm:block font-medium tracking-[0.2em] text-stone-600">Frische Lieblingsbücher</div>
</header>
<main className="flex-grow flex flex-col w-full max-w-3xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative items-center justify-center">

<div className="w-full max-w-xl mb-20 relative h-12 hidden opacity-0 transition-opacity duration-700" id="progress-area">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E7E5E4] rounded-full"></div>
<div className="absolute bottom-0 left-0 h-[1px] bg-[#A8A29E] rounded-full transition-all duration-1000 ease-in-out w-0" id="progress-fill"></div>
<div className="absolute bottom-[-3px] left-0 w-full flex justify-between px-[15px]">
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#E7E5E4] rounded-full"></div>
</div>

<div className="character-wrapper character-waiting absolute bottom-0 -ml-[15px]" id="character" style={{left: '0%'}}>
<div className="head"></div>
<div className="torso"></div>
<div className="backpack"></div>
<div className="leg left"></div>
<div className="leg right"></div>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/90 border border-[#E7E5E4] shadow-sm px-3 py-1.5 rounded-t-xl rounded-br-xl rounded-bl-none whitespace-nowrap opacity-0 transition-all duration-300 transform scale-90 origin-bottom-left" id="bubble">
<span className="text-[11px] font-medium block italic text-stone-600" id="bubble-text">Hmm?</span>
</div>
</div>
</div>
<div className="relative w-full min-h-[450px]">

<div className="step-container active-step text-center max-w-lg mr-auto ml-auto pt-8" id="step-0">
<span className="inline-block text-[10px] tracking-widest font-medium text-stone-500 uppercase mb-8 opacity-60">Arisverlag Buchfinder</span>
<h1 className="text-5xl sm:text-6xl text-[#44403C] mb-8 leading-[1.05] italic">
                    Finde dein nächstes <span className="not-italic text-stone-600/80">Lieblingsbuch.</span>
</h1>
<p className="text-stone-500 font-light mb-12 text-lg leading-relaxed max-w-md mx-auto">
                    Beantworte 5 Fragen. Unser kleiner Wanderer sucht in den Regalen nach einer Geschichte, die dich berührt.
                </p>

<button className="group inline-flex overflow-hidden transition-all duration-500 hover:shadow-lg hover:w-44 font-medium text-[#44403C] bg-white border border-[#E7E5E4] w-40 h-14 rounded-full pr-8 pl-8 relative items-center justify-center hover:bg-[#F5F5F4] hover:border-stone-300 shadow-sm" onclick="startQuiz()">
<span className="tracking-wide mr-1">Los geht's</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 absolute right-5 transition-all duration-500 translate-x-2 group-hover:translate-x-0 text-stone-600" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="step-container hidden-step w-full max-w-2xl mx-auto" id="step-1">
<div className="text-center mb-12">
<span className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded text-stone-600">01 / 05</span>
<h2 className="text-4xl text-[#44403C] mt-2 italic">Welche Stimmung suchst du?</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q1" onchange="enableNext()" type="radio"/>
<div className="p-8 h-full rounded-[2rem] border border-[#E7E5E4] transition-all duration-500 flex flex-col items-center text-center gap-4 group-hover:-translate-y-1 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<iconify-icon className="group-hover:text-stone-500 transition-colors text-stone-600" icon="lucide:cloud-rain" width="24"></iconify-icon>
<span className="font-light text-base text-stone-600">Melancholisch &amp; Tief</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q1" onchange="enableNext()" type="radio"/>
<div className="p-8 h-full rounded-[2rem] border border-[#E7E5E4] transition-all duration-500 flex flex-col items-center text-center gap-4 group-hover:-translate-y-1 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<iconify-icon className="transition-colors text-stone-600 group-hover:text-lime-700/60" icon="lucide:sun" width="24"></iconify-icon>
<span className="font-light text-base text-stone-600">Leicht &amp; Warm</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q1" onchange="enableNext()" type="radio"/>
<div className="p-8 h-full rounded-[2rem] border border-[#E7E5E4] transition-all duration-500 flex flex-col items-center text-center gap-4 group-hover:-translate-y-1 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<iconify-icon className="group-hover:text-purple-900/40 transition-colors text-stone-600" icon="lucide:sparkles" width="24"></iconify-icon>
<span className="font-light text-base text-stone-600">Inspirierend &amp; Klug</span>
</div>
</label>
</div>
<div className="mt-12 flex justify-center">
<button className="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-10 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-md tracking-wide shadow-sm text-stone-700" onclick="nextStep(2)">Weiter</button>
</div>
</div>

<div className="step-container hidden-step w-full max-w-xl mx-auto" id="step-2">
<div className="text-center mb-12">
<span className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded text-stone-600">02 / 05</span>
<h2 className="text-4xl text-[#44403C] mt-2 italic">Dein liebster Leseort?</h2>
</div>
<div className="space-y-4 mx-auto">
<label className="cursor-pointer group block">
<input className="custom-radio sr-only" name="q2" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 flex items-center gap-5 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<div className="w-6 h-6 rounded-full border flex items-center justify-center check-circle transition-colors bg-white border-stone-300">
<iconify-icon className="opacity-0 text-[14px] check-icon transition-opacity text-stone-600" icon="lucide:check"></iconify-icon>
</div>
<span className="text-base font-light text-stone-600">Eingekuschelt im Bett</span>
</div>
</label>
<label className="cursor-pointer group block">
<input className="custom-radio sr-only" name="q2" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 flex items-center gap-5 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<div className="w-6 h-6 rounded-full border flex items-center justify-center check-circle transition-colors bg-white border-stone-300">
<iconify-icon className="opacity-0 text-[14px] check-icon transition-opacity text-stone-600" icon="lucide:check"></iconify-icon>
</div>
<span className="text-base font-light text-stone-600">Unterwegs in der Stadt</span>
</div>
</label>
<label className="cursor-pointer group block">
<input className="custom-radio sr-only" name="q2" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 flex items-center gap-5 bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<div className="w-6 h-6 rounded-full border flex items-center justify-center check-circle transition-colors bg-white border-stone-300">
<iconify-icon className="opacity-0 text-[14px] check-icon transition-opacity text-stone-600" icon="lucide:check"></iconify-icon>
</div>
<span className="text-base font-light text-stone-600">In der Natur &amp; Sonne</span>
</div>
</label>
</div>
<div className="mt-12 flex justify-center">
<button className="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-10 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-md tracking-wide shadow-sm text-stone-700" onclick="nextStep(3)">Weiter</button>
</div>
</div>

<div className="step-container hidden-step w-full max-w-2xl mx-auto" id="step-3">
<div className="text-center mb-12">
<span className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded text-stone-600">03 / 05</span>
<h2 className="text-4xl text-[#44403C] mt-2 italic">Welche Seele fasziniert dich?</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q3" onchange="enableNext()" type="radio"/>
<div className="p-6 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 text-left h-full bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<h3 className="font-serif text-2xl italic text-[#44403C] mb-2">Die Stille</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Beobachtend, sensibel und mit einer reichen Innenwelt, die sich nur langsam öffnet.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q3" onchange="enableNext()" type="radio"/>
<div className="p-6 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 text-left h-full bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<h3 className="font-serif text-2xl italic text-[#44403C] mb-2">Die Mutige</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Geht ihren eigenen Weg, bricht Konventionen und inspiriert durch Taten.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q3" onchange="enableNext()" type="radio"/>
<div className="p-6 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 text-left h-full bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<h3 className="font-serif text-2xl italic text-[#44403C] mb-2">Die Suchende</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Eine ganz normale Frau, die vor einer großen Entscheidung steht.</p>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio sr-only" name="q3" onchange="enableNext()" type="radio"/>
<div className="p-6 rounded-[1.5rem] border border-[#E7E5E4] transition-all duration-300 text-left h-full bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<h3 className="font-serif text-2xl italic text-[#44403C] mb-2">Die Stimme</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">Eine historische Figur, die uns aus der Vergangenheit etwas zu sagen hat.</p>
</div>
</label>
</div>
<div className="mt-12 flex justify-center">
<button className="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-10 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-md tracking-wide shadow-sm text-stone-700" onclick="nextStep(4)">Weiter</button>
</div>
</div>

<div className="step-container hidden-step w-full max-w-xl mx-auto" id="step-4">
<div className="text-center mb-12">
<span className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded text-stone-600">04 / 05</span>
<h2 className="text-4xl text-[#44403C] mt-2 italic">Wohin soll die Reise gehen?</h2>
</div>
<div className="flex flex-col gap-4 max-w-md mx-auto">
<label className="cursor-pointer group relative overflow-hidden rounded-[1.5rem] border border-[#E7E5E4]">
<input className="custom-radio sr-only" name="q4" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 transition-all duration-300 flex items-center justify-between z-10 relative bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<span className="font-light text-stone-600">Vergangenheit / Historisch</span>
<iconify-icon className="text-stone-500" icon="lucide:hourglass"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[#F5F5F4] opacity-0 group-hover:opacity-20 transition-opacity"></div>
</label>
<label className="cursor-pointer group relative overflow-hidden rounded-[1.5rem] border border-[#E7E5E4]">
<input className="custom-radio sr-only" name="q4" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 transition-all duration-300 flex items-center justify-between z-10 relative bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<span className="font-light text-stone-600">Hier &amp; Jetzt</span>
<iconify-icon className="text-stone-500" icon="lucide:map-pin"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group relative overflow-hidden rounded-[1.5rem] border border-[#E7E5E4]">
<input className="custom-radio sr-only" name="q4" onchange="enableNext()" type="radio"/>
<div className="px-6 py-5 transition-all duration-300 flex items-center justify-between z-10 relative bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-md">
<span className="font-light text-stone-600">Zukunft / Utopie</span>
<iconify-icon className="text-stone-500" icon="lucide:stars"></iconify-icon>
</div>
</label>
</div>
<div className="mt-12 flex justify-center">
<button className="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-10 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-md tracking-wide shadow-sm text-stone-700" onclick="nextStep(5)">Weiter</button>
</div>
</div>

<div className="step-container hidden-step w-full max-w-2xl mx-auto" id="step-5">
<div className="text-center mb-12">
<span className="font-sans text-[10px] uppercase tracking-widest px-2 py-1 rounded text-stone-600">Finale</span>
<h2 className="text-4xl text-[#44403C] mt-2 italic">Wie viel Zeit bringst du mit?</h2>
</div>
<div className="flex justify-center gap-6 max-w-xl mx-auto items-end h-48">

<label className="cursor-pointer group flex flex-col items-center gap-4 w-1/3">
<input className="custom-radio sr-only" name="q5" onchange="enableNext()" type="radio"/>
<div className="w-full h-28 rounded-2xl bg-[#FFF] border border-[#E7E5E4] group-hover:border-[#D6D3D1] group-hover:bg-white transition-all duration-500 relative overflow-hidden flex items-end justify-center check-circle shadow-sm hover:shadow-md">
<div className="w-8 h-[60%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm bg-[#F5F5F4]"></div>
<iconify-icon className="check-icon absolute top-3 right-3 opacity-0 transition-all text-stone-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-light text-center text-stone-500">Ein Happen<span className="text-[10px] uppercase tracking-wider text-stone-400 block mt-1">kurz</span></span>
</label>

<label className="cursor-pointer group flex flex-col items-center gap-4 w-1/3">
<input className="custom-radio sr-only" name="q5" onchange="enableNext()" type="radio"/>
<div className="w-full h-36 rounded-2xl bg-[#FFF] border border-[#E7E5E4] group-hover:border-[#D6D3D1] group-hover:bg-white transition-all duration-500 relative overflow-hidden flex items-end justify-center gap-1 check-circle shadow-sm hover:shadow-md">
<div className="w-6 h-[70%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm bg-[#F5F5F4]"></div>
<div className="w-6 h-[80%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm -ml-2 z-10 bg-[#E7E5E4]"></div>
<iconify-icon className="check-icon absolute top-3 right-3 opacity-0 transition-all z-30 text-stone-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-light text-center text-stone-500">Ein Wochenende<span className="text-[10px] uppercase tracking-wider text-stone-400 block mt-1">mittel</span></span>
</label>

<label className="cursor-pointer group flex flex-col items-center gap-4 w-1/3">
<input className="custom-radio sr-only" name="q5" onchange="enableNext()" type="radio"/>
<div className="w-full h-44 rounded-2xl bg-[#FFF] border border-[#E7E5E4] group-hover:border-[#D6D3D1] group-hover:bg-white transition-all duration-500 relative overflow-hidden flex items-end justify-center gap-0.5 check-circle shadow-sm hover:shadow-md">
<div className="w-4 h-[60%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm bg-[#F5F5F4]"></div>
<div className="w-5 h-[85%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm z-10 bg-[#E7E5E4]"></div>
<div className="w-4 h-[75%] border border-[#E7E5E4] rounded-t-[2px] shadow-sm bg-[#F5F5F4]"></div>
<iconify-icon className="check-icon absolute top-3 right-3 opacity-0 transition-all z-30 text-stone-400" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm font-light text-center text-stone-500">Eine Reise<span className="text-[10px] uppercase tracking-wider text-stone-400 block mt-1">lang</span></span>
</label>
</div>
<div className="mt-16 flex justify-center">
<button className="next-btn opacity-0 pointer-events-none translate-y-2 bg-[#F5F5F4] border border-[#E7E5E4] px-12 py-4 rounded-full text-base font-medium transition-all duration-500 hover:bg-white hover:shadow-xl tracking-wide shadow-md text-stone-700" onclick="finishQuiz()">Ergebnis anzeigen</button>
</div>
</div>

<div className="step-container hidden-step w-full text-center pt-12" id="loading-state">
<div className="flex flex-col items-center justify-center">
<p className="text-2xl font-serif italic mb-6 text-stone-400" id="loading-text">Der Wanderer blättert...</p>
<div className="w-48 h-[2px] rounded-full overflow-hidden bg-stone-200">
<div className="h-full animate-[loading_2.5s_ease-in-out_infinite] w-1/3 rounded-full bg-stone-400"></div>
</div>
</div>
<style>
                     @keyframes loading {
                         0% { transform: translateX(-100%); width: 20%; }
                         50% { transform: translateX(150%); width: 50%; }
                         100% { transform: translateX(-100%); width: 20%; }
                     }
                 </style>
</div>

<div className="step-container hidden-step w-full pt-4" id="step-result">
<div className="backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_-10px_rgba(214,192,179,0.3)] border max-w-3xl mx-auto flex flex-col md:flex-row gap-10 bg-white/80 border-[#E7E5E4]">

<div className="w-full md:w-5/12 flex-shrink-0 flex items-center justify-center">
<div className="w-48 md:w-full aspect-[2/3] bg-[#F5F2EF] rounded-r-xl rounded-l-[2px] relative shadow-[10px_10px_30px_rgba(0,0,0,0.05),2px_0_0_rgba(0,0,0,0.05)_inset] border border-[#E7E5E4] overflow-hidden group hover:scale-[1.02] transition-transform duration-700">

<div className="absolute left-0 top-0 bottom-0 w-3 book-spine z-20"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
<div className="w-20 h-20 rounded-full border-[0.5px] flex items-center justify-center mb-8 opacity-70 border-stone-200">
<svg fill="none" height="30" viewbox="0 0 100 100" width="30">
<path d="M50 25C65 25 70 35 70 50V75M70 75H75M70 75V60C70 45 60 40 50 40C35 40 30 55 30 65C30 75 35 80 50 80C60 80 70 75 70 65" stroke="#44403C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>
<h2 className="font-serif text-3xl leading-tight mb-2 italic text-[#44403C]">Echo derGezeiten</h2>
<p className="text-[9px] uppercase tracking-[0.2em] mt-6 text-stone-500">Arisverlag</p>
</div>

<div className="absolute inset-0 opacity-40 mix-blend-multiply z-10 pointer-events-none bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6301f5d4-1d28-4e8b-a38d-2b4c4024132b_1600w.png)]"></div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-5">
<span className="bg-[#F0FDF4] border text-[10px] uppercase font-semibold px-3 py-1.5 rounded-full tracking-wider text-green-700 border-green-200">Perfektes Match</span>
</div>
<h2 className="text-4xl font-serif text-[#44403C] mb-2 italic">Echo der Gezeiten</h2>
<p className="text-sm mb-8 font-light tracking-wide uppercase text-stone-500">Ein Roman von Elena Fischer</p>
<p className="leading-relaxed mb-8 text-base font-light text-stone-600">
                            Eine Geschichte für die <span className="font-normal text-stone-800">stille Beobachterin</span> in dir. Voller Melancholie und doch wärmend wie ein Tee an einem Regentag. Genau das Richtige für dein Wochenende.
                        </p>
<div className="flex flex-wrap gap-2 mb-10">
<span className="px-4 py-1.5 bg-[#F5F5F4] rounded-full text-xs text-stone-600 font-light border border-stone-100">Gegenwart</span>
<span className="px-4 py-1.5 bg-[#F5F5F4] rounded-full text-xs text-stone-600 font-light border border-stone-100">342 Seiten</span>
<span className="px-4 py-1.5 bg-[#F5F5F4] rounded-full text-xs text-stone-600 font-light border border-stone-100">Debüt</span>
</div>
<div className="flex items-center gap-4 mt-auto">
<button className="bg-[#F5F5F4] border border-[#E7E5E4] text-stone-700 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white transition-all hover:shadow-xl w-full sm:w-auto tracking-wide shadow-sm">
                                Zum Buch
                            </button>
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E7E5E4] hover:bg-[#F5F5F4] transition-colors text-stone-600 bg-white shadow-sm" onclick="location.reload()">
<iconify-icon icon="lucide:rotate-cw" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
