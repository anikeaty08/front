import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentStep = 1;
        const totalSteps = 5;

        function nextStep() {
            const currentEl = document.getElementById(`step-${currentStep}`);
            if(currentEl) currentEl.classList.add('hidden');
            
            currentStep++;
            
            if (currentStep <= totalSteps) {
                const nextEl = document.getElementById(`step-${currentStep}`);
                if(nextEl) nextEl.classList.remove('hidden');
                document.getElementById('quiz-progress').style.width = `${(currentStep/totalSteps)*100}%`;
            }
        }

        function showResult() {
            document.getElementById(`step-${totalSteps}`).classList.add('hidden');
            document.getElementById('quiz-progress-container').classList.add('hidden');
            document.getElementById('quiz-result').classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="sm:px-6 flex h-16 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">
                Bowtrol
            </div>
<a className="hidden sm:inline-flex items-center justify-center transition-all duration-300 hover:bg-emerald-100 hover:shadow-sm text-sm font-medium text-emerald-700 bg-emerald-50 border-emerald-200 border rounded-full pt-2 pr-5 pb-2 pl-5" href="https://healthbuy.com/products/bowtrolprobiotic">View Official Offer</a>
</div>
</nav>

<section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-slate-50 -z-10"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<iconify-icon height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
                        Daily Gut Support
                    </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">Still dealing with bloating, irregularity, or a gut that never feels quite right?</h1>
<p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-8">
                        Bowtrol Probiotics is designed to support digestive balance, everyday comfort, and a more consistent routine—without the overhyped promises.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-emerald-700 rounded-full hover:bg-emerald-800 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgb(4,120,87,0.2)]" href="https://healthbuy.com/products/bowtrolprobiotic">
                            See Today’s Offer
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-sm" href="https://healthbuy.com/products/bowtrolprobiotic">
                            View Packages
                        </a>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-md mx-auto perspective-1000">
<a className="block group relative transition-transform duration-500 hover:scale-[1.02]" href="https://healthbuy.com/products/bowtrolprobiotic">

<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative aspect-[3/4] bg-white rounded-3xl border border-slate-200/60 shadow-[0_20px_40px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-slate-50">


<div className="overflow-hidden flex flex-col bg-emerald-700 w-48 h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2c3d39-240d-463d-9976-74a31b013f7e_800w.png)] bg-cover bg-center rounded-2xl pt-8 relative shadow-inner scale-150 items-center">
<div className="bg-center bg-gradient-to-b from-white/20 to-transparent h-32 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2c3d39-240d-463d-9976-74a31b013f7e_800w.png?w=800&amp;q=80)] bg-repeat absolute top-0 right-0 left-0 translate-y-12 scale-100" style={{maskImage: 'linear-gradient(180deg, transparent, black 100%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 100%, black 100%, transparent)'}}></div>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    See if this sounds like you
                </h2>
<p className="text-slate-500 font-medium">Take 30 seconds to evaluate your current routine.</p>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300" id="quiz-container">

<div className="w-full bg-slate-200 rounded-full h-1.5 mb-8" id="quiz-progress-container">
<div className="bg-emerald-600 h-1.5 rounded-full transition-all duration-500 ease-out" id="quiz-progress" style={{width: '20%'}}></div>
</div>

<div className="" id="quiz-questions">

<div className="quiz-step" id="step-1">
<h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-8 text-center leading-snug">
                            Do you feel bloated or uncomfortable after meals more often than you’d like?
                        </h3>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200" onclick="nextStep()">Yes</button>
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-all duration-200" onclick="nextStep()">No</button>
</div>
</div>

<div className="quiz-step hidden" id="step-2">
<h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-8 text-center leading-snug">
                            Has your bathroom routine been unpredictable lately?
                        </h3>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200" onclick="nextStep()">Yes</button>
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-all duration-200" onclick="nextStep()">No</button>
</div>
</div>

<div className="quiz-step hidden" id="step-3">
<h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-8 text-center leading-snug">
                            Do digestive issues make you feel sluggish, distracted, or off during the day?
                        </h3>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200" onclick="nextStep()">Yes</button>
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-all duration-200" onclick="nextStep()">No</button>
</div>
</div>

<div className="quiz-step hidden" id="step-4">
<h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-8 text-center leading-snug">
                            Have you taken antibiotics recently, or do you use medication on a regular basis?
                        </h3>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200" onclick="nextStep()">Yes</button>
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-all duration-200" onclick="nextStep()">No</button>
</div>
</div>

<div className="quiz-step hidden" id="step-5">
<h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-8 text-center leading-snug">
                            Would you rather try a simple daily probiotic than keep changing your routine every week?
                        </h3>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-200" onclick="showResult()">Yes</button>
<button className="flex-1 py-4 px-6 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-all duration-200" onclick="showResult()">No</button>
</div>
</div>
</div>

<div className="hidden text-center animate-[fadeIn_0.5s_ease-out]" id="quiz-result">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
<iconify-icon height="32" icon="solar:info-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">You’re not alone.</h3>
<p className="text-lg text-slate-600 mb-8">
                        A lot of people start looking for support when their digestion feels out of sync.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-base font-medium text-white transition-all duration-300 bg-emerald-700 rounded-full hover:bg-emerald-800 shadow-[0_4px_14px_0_rgb(4,120,87,0.39)] hover:shadow-[0_6px_20px_rgb(4,120,87,0.23)] hover:-translate-y-0.5" href="https://healthbuy.com/products/bowtrolprobiotic">
                        Continue to Official Offer
                    </a>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-6 max-w-xl mx-auto">
                If you take medication or have a health condition, check with a qualified healthcare professional before using any supplement.
            </p>
</div>
</section>

<section className="py-20 bg-slate-50 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full blur-3xl opacity-50"></div>
<a className="block relative bg-white border border-slate-200/60 p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 group" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f65bf5c-8cd4-4ccd-a254-6b00c1822890_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 scale-110"></div>
<iconify-icon className="text-emerald-700/20 group-hover:scale-110 transition-transform duration-700" height="120" icon="solar:droplet-minimalistic-linear" width="120"></iconify-icon>
</div>
</a>
</div>

<div className="order-1 md:order-2">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        What is Bowtrol Probiotics?
                    </h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                        Bowtrol Probiotics is a daily digestive support supplement created for people who want a more consistent gut-health routine. It’s about simple support you can actually work into your day.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-slate-700 font-medium">
<iconify-icon className="text-emerald-600 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            Daily probiotic support
                        </li>
<li className="flex items-start gap-3 text-slate-700 font-medium">
<iconify-icon className="text-emerald-600 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            Routine-friendly formula
                        </li>
<li className="flex items-start gap-3 text-slate-700 font-medium">
<iconify-icon className="text-emerald-600 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                            Designed for digestive balance
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 group" href="https://healthbuy.com/products/bowtrolprobiotic">
                        Check the Official Product Page
                        <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                    Why people look for probiotic support
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 sm:gap-8">

<a className="block group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-emerald-600 transition-all duration-300">
<iconify-icon height="24" icon="solar:cup-first-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">More daily comfort</h3>
<p className="text-slate-600 leading-relaxed">
                        When your digestion feels more settled, your day usually feels easier too.
                    </p>
</a>

<a className="block group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="flex group-hover:scale-110 group-hover:text-emerald-600 transition-all duration-300 text-slate-700 bg-white w-12 h-12 border-slate-200 border rounded-2xl mb-6 items-center justify-center">
<iconify-icon height="24" icon="solar:calendar-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Better consistency</h3>
<p className="text-slate-600 leading-relaxed">
                        Simple daily habits tend to work better than extreme, hard-to-follow fixes.
                    </p>
</a>

<a className="block group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:scale-110 group-hover:text-emerald-600 transition-all duration-300">
<iconify-icon height="24" icon="solar:lightbulb-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Smarter support</h3>
<p className="text-slate-600 leading-relaxed">
                        A probiotic can be part of a practical wellness routine, not a magic solution.
                    </p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/50">
<div className="sm:px-6 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    What customers want from a product like this
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="block hover:shadow-md hover:-translate-y-1 transition-all duration-300 group bg-white border-slate-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 text-left mb-6 scale-100">"I never believed in herbal medicine until I met a friend of mine who was also cured with herbal medicine, I decided to give it a try by contacting and ordering herbs from Dr Eboseremen , and behold within 14 days of usage I was cured my HSV2 AND I thank you so much Doc Eboseremen He also cured the following illness. 1) diabetes 2) hepatitis 3) Asthma 4) Epilepsy 5) ringing 6) pregnancy herbs 7) fibroids 8) arthritis 9) cancer 10) gout 11) kidney stone* Email:Dreboseremen311@ Gmail.com WhatsApp:+2349134221450" 
Cooper


</p>
<div className="group-hover:text-emerald-700 transition-colors text-sm font-semibold text-slate-900">Verified Customer</div>
</a>

<a className="block hover:shadow-md hover:-translate-y-1 transition-all duration-300 group bg-white border-slate-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 mb-6">"I just want to say a heartfelt thank you to Dr. Aboda for his incredible herbal remedies that helped me recover from breast cancer. What felt impossible became possible through his healing hands and natural medicine. I am healed, restored, and full of life again! My family and I are forever grateful — words cannot truly express how thankful we are. Thank you, Dr. Aboda, for being a blessing in our lives. 💖🌿 FOR MORE INFO dr-aboda-solution-home.jimdosite.com/ THANK YOU, DOCTOR.."
JASON OKSIES</p>
<div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Verified Customer</div>
</a>

<a className="block p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group" href="https://healthbuy.com/products/bowtrolprobiotic">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="leading-relaxed font-medium text-slate-700 mb-6">"A straightforward option for digestive support."
Amin</p>
<div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Verified Customer</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to check the official offer?
            </h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                See current pricing, package options, and product details on the official page.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 transition-all duration-300 bg-white rounded-full hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.15)]" href="https://healthbuy.com/products/bowtrolprobiotic">
                    View Official Offer
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:-translate-y-1 backdrop-blur-sm" href="https://healthbuy.com/products/bowtrolprobiotic">
                    Check Availability
                </a>
</div>
</div>
</section>

<footer className="py-12 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
<p className="text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Results vary by individual. This product is a dietary supplement, not a drug. Consult a qualified healthcare professional before use if you are pregnant, nursing, taking medication, or managing a medical condition.
            </p>
<div className="mt-8 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                BOWTROL
            </div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden z-50">
<a className="flex items-center justify-center w-full px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 bg-emerald-700 rounded-xl shadow-lg active:scale-95" href="https://healthbuy.com/products/bowtrolprobiotic">
            View Official Offer
        </a>
</div>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
