import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();

        // Handle button state logic
        function updateButtonState() {
            const radios = document.getElementsByName('mode_selection');
            const btn = document.getElementById('continue-btn');
            let isChecked = false;
            
            for (const radio of radios) {
                if (radio.checked) {
                    isChecked = true;
                    break;
                }
            }
            
            if (isChecked) {
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'true');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-4xl w-full flex flex-col">

<header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-medium text-gray-900 tracking-tight mb-1.5">New Blog Post</h1>
<p className="text-sm text-gray-500">Choose how you want to create your content.</p>
</div>
<div className="flex items-center gap-2.5 sm:mt-1">
<span className="inline-flex items-center px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-500">
                    4/10 Plans
                </span>
<span className="inline-flex items-center px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-500">
                    21/100 Credits
                </span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

<div className="relative">
<input className="peer sr-only" id="mode-guided" name="mode_selection" onchange="updateButtonState()" type="radio" value="guided"/>
<label className="relative flex flex-col h-full bg-white border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-purple-300 peer-checked:border-purple-600 peer-checked:ring-1 peer-checked:ring-purple-600 peer-checked:bg-neutral-50 p-6 group" htmlFor="mode-guided">

<div className="absolute top-6 right-6 w-4 h-4 rounded-full border border-gray-300 bg-white transition-all duration-200 peer-checked:border-[5px] peer-checked:border-purple-600 group-hover:border-purple-300"></div>

<div className="mb-5">
<span className="inline-flex items-center px-2 py-0.5 bg-purple-100 text-purple-600 text-xs font-medium uppercase tracking-wide rounded-full">
                            Recommended
                        </span>
</div>

<div className="flex items-start gap-4 mb-5">
<div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
<i className="w-5 h-5" data-lucide="list-checks" strokeWidth="1.5"></i>
</div>
<div className="pr-8">
<h3 className="text-lg font-medium text-gray-900 mb-0.5">Guided Workflow</h3>
<p className="text-sm text-gray-500 leading-relaxed">Step-by-step control over every part of your post</p>
</div>
</div>

<div className="w-full h-px bg-gray-100 mb-5"></div>

<ul className="flex flex-col gap-2.5 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Review SERP data and competitor insights</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Customize title, outline and sections</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Regenerate any section individually</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Best for in-depth, SEO-focused content</span>
</li>
</ul>

<div className="mt-auto w-full bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 text-xs text-gray-400 border border-transparent peer-checked:bg-white peer-checked:border-gray-100 transition-colors">
<i className="w-4 h-4 shrink-0" data-lucide="clock" strokeWidth="1.5"></i>
<span>Avg. 8–12 min to complete</span>
</div>
</label>
</div>

<div className="relative">
<input className="peer sr-only" id="mode-quick" name="mode_selection" onchange="updateButtonState()" type="radio" value="quick"/>
<label className="relative flex flex-col h-full bg-white border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-purple-300 peer-checked:border-purple-600 peer-checked:ring-1 peer-checked:ring-purple-600 peer-checked:bg-neutral-50 p-6 group" htmlFor="mode-quick">

<div className="absolute top-6 right-6 w-4 h-4 rounded-full border border-gray-300 bg-white transition-all duration-200 peer-checked:border-[5px] peer-checked:border-purple-600 group-hover:border-purple-300"></div>

<div className="flex items-start gap-4 mb-6 mt-1">
<div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="pr-8">
<h3 className="text-lg font-medium text-gray-900 mb-0.5">One Click Blog</h3>
<p className="text-sm text-gray-500 leading-relaxed">Enter a topic and get a full draft instantly</p>
</div>
</div>

<ul className="flex flex-col gap-2.5 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>AI generates title, headings and content</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Complete draft ready in under a minute</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Edit or improve the draft anytime</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span>Best for quick drafts and content ideas</span>
</li>
</ul>

<div className="mt-auto w-full bg-gray-50 rounded-lg p-2.5 flex items-center gap-2 text-xs text-gray-400 border border-transparent peer-checked:bg-white peer-checked:border-gray-100 transition-colors">
<i className="w-4 h-4 shrink-0" data-lucide="clock" strokeWidth="1.5"></i>
<span>Avg. under 1 minute</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
<p className="text-xs text-gray-400 italic text-center sm:text-left">
                Not sure which to pick? Guided Workflow gives you more control.
            </p>
<button className="h-11 w-full sm:w-[140px] rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 shrink-0 transition-all duration-200 bg-gray-100 text-gray-400 cursor-not-allowed border border-transparent enabled:bg-purple-600 enabled:text-white enabled:cursor-pointer enabled:hover:bg-purple-700 enabled:active:bg-purple-800" disabled="" id="continue-btn">
                Continue <span className="text-lg leading-none mt-[-1px]">→</span>
</button>
</div>
</div>


    </>
  );
}
