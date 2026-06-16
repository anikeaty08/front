import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function updateProgress() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const total = checkboxes.length;
            const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
            const percentage = Math.round((checked / total) * 100);
            
            // Update Text
            const progressText = document.getElementById('progress-text');
            progressText.innerText = percentage + '%';
            
            // Update Bar
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = percentage + '%';

            // Glow effect on 100%
            if (percentage === 100) {
                progressText.classList.add('text-green-400');
                progressBar.classList.remove('from-neutral-500', 'to-white');
                progressBar.classList.add('from-green-600', 'to-green-400');
            } else {
                progressText.classList.remove('text-green-400');
                progressBar.classList.add('from-neutral-500', 'to-white');
                progressBar.classList.remove('from-green-600', 'to-green-400');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-neutral-925 min-h-screen relative border-x shadow-2xl border-neutral-100 shadow-neutral-50/50">

<header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-925/80 border-b p-6 border-neutral-200">
<div className="flex justify-between items-end mb-4">
<div className="">
<div className="flex items-center gap-2 mb-1">
<div className="h-6 w-6 rounded flex items-center justify-center bg-neutral-200 text-black">
<span className="font-medium text-xs tracking-tighter">DT</span>
</div>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Daily Tracker</span>
</div>
<h1 className="text-xl font-medium tracking-tight text-neutral-900">Daily Routine</h1>
<p className="text-xs text-neutral-500 mt-1 font-light">Stay consistent with your goals.</p>
</div>
<div className="text-right">
<span className="text-2xl font-light tracking-tight text-black" id="progress-text">0%</span>
</div>
</div>

<div className="h-1 w-full rounded-full overflow-hidden bg-neutral-200">
<div className="h-full bg-gradient-to-r from-neutral-500 w-0 transition-all duration-500 ease-out rounded-full to-black" id="progress-bar"></div>
</div>
</header>

<div className="p-4 pb-20 space-y-3">

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">ফজর</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:walking-round-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">প্রাতঃভ্রমণ</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">নামাজের পর ১ ঘন্টা হাঁটা।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">বাসায় ফিরে</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:cup-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">ডিটক্স পানি</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">হালকা কুসুম গরম পানি ও সিয়াসিড।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">৩০ মিনিট পর</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:chef-hat-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">সকালের নাস্তা</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">২টা ডিম (১টা কুসুম ছাড়া), রুটি, সবজি।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">১০:০০ AM</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">হালকা খাবার</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">বাদাম ও পানি।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">১২:০০ PM</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:apple-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">ফল</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">পেয়ারা, আপেল বা আনারস।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">১:০০ - ১:৩০ PM</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:bowl-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">দুপুরের খাবার</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">খাবারের আগে ১ গ্লাস পানি। কাঁচা পেপে (মাঝে মাঝে)।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">খাওয়ার পর</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:sofa-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">বিশ্রাম</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">একটু হেঁটে তারপর রেস্ট।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">৪:০০ PM</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:sun-fog-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">বিকেলের নাস্তা</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">বাদাম, খেজুর, দুই গ্লাস পানি।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">সন্ধ্যা</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:sunset-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">ফল</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">আনারস, পেয়ারা, আপেল বা যে কোন ফল।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">৮:০০ - ৯:০০ PM</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:moon-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">রাতের খাবার</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">২টা ডিম, রুটি, সবজি।</p>
</div>
</label>

<label className="group custom-checkbox relative flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer border-neutral-200 hover:border-neutral-300 bg-neutral-100/40 hover:bg-neutral-100/60">
<input className="peer sr-only" onchange="updateProgress()" type="checkbox"/>
<div className="mt-1 h-5 w-5 rounded border flex items-center justify-center transition-colors shrink-0 bg-transparent border-neutral-400 text-white">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">রাতে</span>
<iconify-icon className="text-neutral-500" height="18" icon="solar:stars-linear" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-sm tracking-tight mb-1 text-neutral-800">যদি ক্ষুধা লাগে</h3>
<p className="text-xs leading-relaxed font-light text-neutral-500">বাদাম বা ফল।</p>
</div>
</label>
</div>

<div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t to-transparent from-white"></div>
</main>


    </>
  );
}
