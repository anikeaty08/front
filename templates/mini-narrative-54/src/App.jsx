import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
swiss: {
red: '#FF3000',
black: '#000000',
white: '#FFFFFF',
muted: '#F2F2F2'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
borderWidth: {
'3': '3px',
'4': '4px',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    


        const phoneContent = document.getElementById('phone-content');
        const decodePanel = document.getElementById('decode-panel');
        const decodeText = document.getElementById('decode-text');

        function setScenario(type) {
            // Reset state
            decodePanel.classList.remove('translate-y-0');
            decodePanel.classList.add('translate-y-full');

            setTimeout(() => {
                if (type === 'shame') {
                    // Update Content
                    phoneContent.innerHTML = `
                        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                            <iconify-icon icon="solar:bell-bing-bold" width="24"></iconify-icon>
                        </div>
                        <h3 class="font-bold text-lg mb-2">You missed your streak! 😢</h3>
                        <p class="text-xs text-gray-500 px-4">Don't let your team down. 80% of users have already finished today's lesson.</p>
                        <button class="mt-4 bg-red-600 text-white text-xs font-bold py-2 px-6 rounded-none uppercase tracking-wider">Catch Up Now</button>
                    `;
                    // Update Decode
                    decodeText.innerHTML = `<span class="text-swiss-red font-bold">CRITICAL ERROR:</span> Utilizing social shame and loss aversion triggers anxiety. While this spikes short-term clicks, it degrades self-efficacy and increases long-term churn (avoidance behavior).`;
                } else {
                    // Update Content
                    phoneContent.innerHTML = `
                        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                            <iconify-icon icon="solar:bookmark-circle-bold" width="24"></iconify-icon>
                        </div>
                        <h3 class="font-bold text-lg mb-2">Your spot is saved.</h3>
                        <p class="text-xs text-gray-500 px-4">Life happens. Resume your session or start fresh whenever you are ready.</p>
                        <div class="flex gap-2 justify-center mt-4">
                            <button class="bg-black text-white text-xs font-bold py-2 px-4 rounded-none uppercase tracking-wider">Resume</button>
                            <button class="border border-black text-black text-xs font-bold py-2 px-4 rounded-none uppercase tracking-wider">Start Over</button>
                        </div>
                    `;
                    // Update Decode
                    decodeText.innerHTML = `<span class="text-green-400 font-bold">OPTIMAL ARCHITECTURE:</span> Acknowledges context without judgment. Offers choices (Resume vs. Start Over) to restore agency. This reduces the "Wall of Awful" and encourages return through safety, not fear.`;
                }

                // Show Decode Panel
                decodePanel.classList.remove('translate-y-full');
                decodePanel.classList.add('translate-y-0');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="max-w-screen-2xl mx-auto border-x-4 border-swiss-black relative z-10">

<header className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-swiss-black">

<div className="lg:col-span-1 border-b-4 lg:border-b-0 lg:border-r-4 border-swiss-black p-4 flex items-center justify-center bg-swiss-red text-white">
<iconify-icon icon="solar:structure-linear" width="32"></iconify-icon>
</div>

<div className="lg:col-span-7 border-b-4 lg:border-b-0 lg:border-r-4 border-swiss-black p-8 lg:p-12 bg-swiss-white swiss-grid-pattern relative">
<h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                    Narrative<br/>Architecture
                </h1>
</div>

<div className="lg:col-span-4 lg:p-12 flex flex-col swiss-diagonal pt-8 pr-8 pb-8 pl-8 gap-x-3 gap-y-3 justify-center">
<div className="flex flex-col gap-4 gap-x-3 gap-y-3">
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-xl mt-1" icon="solar:user-id-linear"></iconify-icon>
<div className="">
<span className="block text-xs font-bold uppercase tracking-wider text-gray-500">Role</span>
<span className="text-sm font-bold">Behavioral Architecture Strategist</span>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-xl mt-1" icon="solar:tuning-square-2-linear"></iconify-icon>
<div className="">
<span className="block text-xs font-bold uppercase tracking-wider text-gray-500">Domain</span>
<span className="text-sm font-bold">Ethic Guardrails / AI Literacy</span>
</div>
</div>
</div>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-swiss-black" id="taste-test">

<div className="p-8 lg:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-swiss-black bg-swiss-white">
<h2 className="text-4xl font-black uppercase tracking-tight mb-2">The Taste Test</h2>
<p className="text-base font-medium text-gray-600 mb-10">
                    Scenario: A user abandons a reskilling session after 3 minutes. <br/>
                    Choose the architectural response.
                </p>
<div className="space-y-4">

<button className="w-full text-left group border-2 border-swiss-black p-6 hover:bg-swiss-black hover:text-white swiss-hover focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-offset-2" id="btn-shame" onclick="setScenario('shame')">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-gray-400">Option A // Status Quo</span>
<iconify-icon className="text-xl opacity-0 group-hover:opacity-100" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-bold">"Trigger Urgency (FOMO)"</span>
</button>

<button className="w-full text-left group border-2 border-swiss-black p-6 hover:bg-swiss-red hover:text-white swiss-hover focus:outline-none focus:ring-2 focus:ring-swiss-black focus:ring-offset-2" id="btn-dignity" onclick="setScenario('dignity')">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-white">Option B // Behavioral Arch.</span>
<iconify-icon className="text-xl opacity-0 group-hover:opacity-100" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-bold">"Trigger Agency (Support)"</span>
</button>
</div>
</div>

<div className="bg-swiss-muted relative flex items-center justify-center p-8 lg:p-16 swiss-dots overflow-hidden">

<div className="w-full max-w-xs bg-white border-2 border-swiss-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-20">

<div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-6">
<div className="w-4 h-4 bg-swiss-black rounded-full"></div>
<div className="text-[10px] font-mono">10:42 AM</div>
</div>

<div className="min-h-[200px] flex flex-col justify-center text-center" id="phone-content">
<div className="mb-4 flex justify-center text-gray-300">
<iconify-icon icon="solar:smartphone-rotate-orientation-linear" width="48"></iconify-icon>
</div>
<p className="text-sm text-gray-400">Select an architectural response to see the outcome.</p>
</div>

<div className="mt-6 pt-4 border-t-2 border-gray-100">
<div className="w-full h-10 bg-swiss-black flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
                            Continue
                        </div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-swiss-black text-white p-6 transform translate-y-full transition-transform duration-300 ease-out z-30 border-t-4 border-swiss-red" id="decode-panel">
<div className="flex items-start gap-4">
<div className="text-swiss-red pt-1">
<iconify-icon icon="solar:code-scan-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs font-bold tracking-widest uppercase text-swiss-red mb-1">Behavioral Decode</span>
<p className="text-sm font-medium leading-relaxed" id="decode-text">
                                Analysis pending...
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-swiss-black text-white border-b-4 border-swiss-black">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-white/20 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
<h3 className="text-3xl font-black uppercase tracking-tight text-swiss-red">Protocol<br/>Refusals</h3>
<p className="text-sm text-gray-400 mt-4">We define ourselves by what we refuse to do.</p>
</div>

<div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-white/20 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-3xl text-swiss-red" icon="solar:alarm-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase tracking-wider mb-2">Refuse Urgency</h4>
<p className="text-xs text-gray-400 leading-relaxed">No countdown timers. No "Don't miss out." Anxiety reduces cognitive bandwidth needed for learning.</p>
</div>
</div>

<div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-white/20 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-3xl text-swiss-red" icon="solar:forbidden-circle-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase tracking-wider mb-2">Refuse Shame</h4>
<p className="text-xs text-gray-400 leading-relaxed">No "You're falling behind." Shame triggers avoidance, which breaks the habit loop we are trying to build.</p>
</div>
</div>

<div className="p-8 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-3xl text-swiss-red" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase tracking-wider mb-2">Refuse Hype</h4>
<p className="text-xs text-gray-400 leading-relaxed">No "Transform your life!" We promise practice, not miracles. Trust is built on accurate expectations.</p>
</div>
</div>
</div>
</section>

<section className="border-b-4 border-swiss-black">
<div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

<div className="lg:col-span-3 border-r-4 border-swiss-black p-8 lg:p-12 bg-swiss-muted swiss-diagonal lg:sticky lg:top-0 h-auto">
<span className="block text-xs font-semibold tracking-widest uppercase mb-4 text-swiss-red">The Archive</span>
<h3 className="lg:text-5xl uppercase text-4xl font-extrabold tracking-tight mb-8 leading-[0.9]">Voice<br/>Matrix</h3>
<p className="text-sm font-normal mb-8 leading-relaxed text-swiss-black/80">
                Comparing standard engagement patterns against Dignity-Centered Design. Note the shift from "Correction" to "Information."
            </p>
<div className="hidden lg:block w-12 h-1 bg-swiss-black mb-2"></div>
</div>

<div className="lg:col-span-9 pt-0 pr-0 pb-0 pl-0">

<div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-swiss-black group">
<div className="lg:p-12 md:border-b-0 md:border-r-2 border-swiss-black/20 bg-gray-50 border-b-2 p-8">
<span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3 block">Context: Login Screen</span>
<div className="text-xl font-semibold text-gray-400 line-through decoration-swiss-red/50 decoration-2 tracking-tight">
                        "Welcome back! Ready to crush today's lesson?"
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-swiss-red font-semibold uppercase">
<i data-lucide="x-circle" style={{width: '14px', height: '14px'}}></i>
                        Projection / Prescriptive
                    </div>
</div>
<div className="lg:p-12 group-hover:bg-swiss-red/5 transition-colors bg-white p-8">
<span className="text-[10px] font-semibold tracking-widest uppercase text-swiss-red mb-3 block">Behavioral Architect</span>
<div className="text-2xl font-semibold text-swiss-black tracking-tight">
                        "Welcome back. Practice when you're ready."
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-green-700 font-semibold uppercase">
<i data-lucide="check-circle" style={{width: '14px', height: '14px'}}></i>
                        Neutral / Autonomy Supportive
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-swiss-black group">
<div className="p-8 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-swiss-black/20 bg-gray-50">
<span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3 block">Context: Struggle Detected</span>
<div className="text-xl font-semibold text-gray-400 line-through decoration-swiss-red/50 decoration-2 tracking-tight">
                        "Don't worry, you'll get it! Keep trying!"
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-swiss-red font-semibold uppercase">
<i data-lucide="x-circle" style={{width: '14px', height: '14px'}}></i>
                        Toxic Positivity / Dismissive
                    </div>
</div>
<div className="p-8 lg:p-12 bg-white group-hover:bg-swiss-red/5 transition-colors">
<span className="text-[10px] font-semibold tracking-widest uppercase text-swiss-red mb-3 block">Behavioral Architect</span>
<div className="text-2xl font-semibold text-swiss-black tracking-tight">
                        "This is challenging. That's normal. Want to try a different approach?"
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-green-700 font-semibold uppercase">
<i data-lucide="check-circle" style={{width: '14px', height: '14px'}}></i>
                        Normalizing / Option-Generative
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 group">
<div className="p-8 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-swiss-black/20 bg-gray-50">
<span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-3 block">Context: Program End</span>
<div className="text-xl font-semibold text-gray-400 line-through decoration-swiss-red/50 decoration-2 tracking-tight">
                        "Congrats! You're now a Certified Expert! Share now!"
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-swiss-red font-semibold uppercase">
<i data-lucide="x-circle" style={{width: '14px', height: '14px'}}></i>
                        Extrinsic Reward / Fixed Mindset
                    </div>
</div>
<div className="lg:p-12 group-hover:bg-swiss-red/5 transition-colors bg-white p-8">
<span className="text-[10px] font-semibold tracking-widest uppercase text-swiss-red mb-3 block">Behavioral Architect</span>
<div className="text-swiss-black text-2xl font-semibold tracking-tight">
                        "You practiced for 12 weeks. That's real growth. Where will you take this next?"
                    </div>
<div className="mt-4 flex items-center gap-2 text-xs text-green-700 font-semibold uppercase">
<i data-lucide="check-circle" style={{width: '14px', height: '14px'}}></i>
                        Evidence-Based / Future-Oriented
                    </div>
</div>
</div>
</div>
</div>


</section>

</main>



    </>
  );
}
