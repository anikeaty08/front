import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-2xl mx-auto pt-6 sm:pt-8 px-4 sm:px-6">

<header className="flex flex-wrap sm:mb-8 mb-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl sm:text-2xl text-[#2E86C1]" icon="solar:medical-kit-linear"></iconify-icon>
<span className="text-lg sm:text-xl font-semibold tracking-tighter text-[#1B4F72]">MEDAI</span>
</div>
<div className="relative w-full sm:w-auto">
<select className="w-full sm:w-auto appearance-none bg-white/50 border border-slate-200/50 text-slate-600 text-sm rounded-full py-2 sm:py-1.5 pl-4 sm:pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20 transition-all font-medium backdrop-blur-sm cursor-pointer hover:bg-white">
<option value="en">English</option>
<option value="hi">हिन्दी (Hindi)</option>
<option value="gu">ગુજરાતી (Gujarati)</option>
</select>
<iconify-icon className="absolute right-3.5 sm:right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</header>

<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-5 sm:p-8 mb-6">
<div className="mb-5 sm:mb-6">
<h1 className="text-base sm:text-lg font-semibold tracking-tight text-[#1B4F72] mb-1">Check your symptoms</h1>
<p className="text-xs sm:text-sm text-slate-500">Provide details below for general guidance and safe home remedies.</p>
</div>
<form className="space-y-4 sm:space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Age <span className="text-rose-400">*</span></label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 sm:py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20 focus:border-[#2E86C1] focus:bg-white transition-all" placeholder="e.g. 34" required="" type="number"/>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender (Optional)</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20 focus:border-[#2E86C1] focus:bg-white transition-all cursor-pointer">
<option disabled="" selected="" value="">Select</option>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Symptoms <span className="text-rose-400">*</span></label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20 focus:border-[#2E86C1] focus:bg-white transition-all resize-none" placeholder="Describe how you are feeling (e.g., mild headache, slight runny nose)..." required="" rows="3"></textarea>
</div>

<div className="space-y-1.5">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration (Optional)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20 focus:border-[#2E86C1] focus:bg-white transition-all" placeholder="e.g. 2 days" type="text"/>
</div>
<button className="w-full bg-[#1B4F72] text-white font-medium text-sm py-3 rounded-xl hover:bg-[#123955] hover:shadow-md transition-all flex items-center justify-center gap-2 mt-4 sm:mt-2" type="button">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                    Analyze Symptoms
                </button>
</form>
</div>

<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">

<div className="bg-slate-50/80 border-b border-slate-100 px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#2E86C1] text-lg" icon="solar:pulse-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Analysis Result</span>
</div>
<div className="flex items-center self-start sm:self-auto gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Mild Severity
                </div>
</div>
<div className="p-5 sm:p-8 space-y-6 sm:space-y-8">

<section>
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-[#1B4F72] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#2E86C1]" icon="solar:document-text-linear"></iconify-icon>
                        Possible Causes
                    </h2>
<p className="text-xs sm:text-sm text-slate-600 mb-3">Based on your age and symptoms, this could be related to:</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span><strong>Viral upper respiratory infection</strong> (Common cold)</span>
</li>
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span><strong>Seasonal allergies</strong> possibly causing nasal congestion and mild head discomfort.</span>
</li>
</ul>
</section>

<section>
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-[#1B4F72] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#2E86C1]" icon="solar:pill-linear"></iconify-icon>
                        Suggested OTC Medicines
                    </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
<h3 className="text-sm font-medium text-slate-800 mb-1">Paracetamol (Acetaminophen)</h3>
<p className="text-xs text-slate-500 mb-2">For mild headache and comfort.</p>
<span className="inline-block bg-white border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-md">As per package instructions</span>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
<h3 className="text-sm font-medium text-slate-800 mb-1">Saline Nasal Drops</h3>
<p className="text-xs text-slate-500 mb-2">To clear a slight runny nose safely.</p>
<span className="inline-block bg-white border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-md">1-2 drops as needed</span>
</div>
</div>
</section>

<section>
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-[#1B4F72] mb-3 flex items-center gap-2">
<iconify-icon className="text-[#2E86C1]" icon="solar:tea-cup-linear"></iconify-icon>
                        Home Remedies
                    </h2>
<ul className="space-y-4">
<li className="flex gap-3">
<div className="mt-0.5 bg-blue-50 p-1.5 rounded-lg text-[#2E86C1] shrink-0 self-start">
<iconify-icon icon="solar:droplets-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs sm:text-sm font-medium text-slate-800">Steam Inhalation</h4>
<p className="text-xs sm:text-sm text-slate-600 mt-0.5">Inhale steam from warm water (not boiling) for 5-10 minutes. This may help relieve nasal congestion and soothe the nasal passage.</p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-0.5 bg-blue-50 p-1.5 rounded-lg text-[#2E86C1] shrink-0 self-start">
<iconify-icon icon="solar:glass-water-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xs sm:text-sm font-medium text-slate-800">Warm Ginger Tea</h4>
<p className="text-xs sm:text-sm text-slate-600 mt-0.5">Drink warm fluids like ginger tea. It keeps you hydrated and the warmth can provide comfort to the throat and head.</p>
</div>
</li>
</ul>
</section>
<hr className="border-slate-100"/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
<section>
<h2 className="text-xs sm:text-sm font-semibold tracking-tight text-[#1B4F72] mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:shield-warning-linear"></iconify-icon>
                            Precautions
                        </h2>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<span className="text-slate-400 mt-0.5 shrink-0">•</span>
<span>Avoid cold beverages and drafts.</span>
</li>
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<span className="text-slate-400 mt-0.5 shrink-0">•</span>
<span>Wash hands frequently to prevent spread.</span>
</li>
</ul>
</section>
<section>
<h2 className="text-xs sm:text-sm font-semibold tracking-tight text-[#1B4F72] mb-2 flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:stethoscope-linear"></iconify-icon>
                            When to See a Doctor
                        </h2>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<span className="text-slate-400 mt-0.5 shrink-0">•</span>
<span>If symptoms persist for more than 3 days.</span>
</li>
<li className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
<span className="text-slate-400 mt-0.5 shrink-0">•</span>
<span>If you develop a high fever, severe pain, or difficulty breathing.</span>
</li>
</ul>
</section>
</div>

<div className="mt-6 sm:mt-8 bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex gap-3">
<iconify-icon className="text-slate-400 text-base sm:text-lg shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-slate-500 leading-relaxed">
<strong className="font-medium text-slate-700">Disclaimer:</strong> This AI provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for confirmed diagnoses and prescription medications.
                    </p>
</div>
</div>
</div>
</div>

    </>
  );
}
