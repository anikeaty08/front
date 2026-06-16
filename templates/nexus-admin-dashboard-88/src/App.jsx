import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



let isYouTubeConnected = false;
function toggleYouTube() {
const btn = document.getElementById('yt-connect-btn');
const container = document.getElementById('yt-container');
const icon = document.getElementById('yt-icon-status');
const statusText = document.getElementById('yt-status-text');
if (!isYouTubeConnected) {
// Connect state
isYouTubeConnected = true;
container.classList.remove('bg-white', 'border-stone-200');
container.classList.add('bg-orange-50/50', 'border-orange-200');
btn.innerHTML = '<span class="text-xs font-semibold">Disconnect</span>';
btn.classList.remove('bg-zinc-900', 'text-white', 'hover:bg-zinc-800');
btn.classList.add('bg-white', 'text-zinc-600', 'border', 'border-stone-200', 'hover:bg-stone-50');
icon.setAttribute('icon', 'lucide:check-circle-2');
icon.classList.remove('text-zinc-400');
icon.classList.add('text-green-600');
statusText.textContent = "Connected: @artie_creator";
statusText.classList.remove('text-zinc-500');
statusText.classList.add('text-zinc-900', 'font-medium');
} else {
// Disconnect state
isYouTubeConnected = false;
container.classList.add('bg-white', 'border-stone-200');
container.classList.remove('bg-orange-50/50', 'border-orange-200');
btn.innerHTML = 'Connect YouTube channel';
btn.classList.add('bg-zinc-900', 'text-white', 'hover:bg-zinc-800');
btn.classList.remove('bg-white', 'text-zinc-600', 'border', 'border-stone-200', 'hover:bg-stone-50');
icon.setAttribute('icon', 'lucide:youtube');
icon.classList.add('text-zinc-400');
icon.classList.remove('text-green-600');
statusText.textContent = "Required to generate your Artie Score.";
statusText.classList.add('text-zinc-500');
statusText.classList.remove('text-zinc-900', 'font-medium');
}
checkForm();
}
function checkForm() {
const btn = document.getElementById('continue-btn');
if (isYouTubeConnected) {
btn.disabled = false;
btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-stone-200', 'text-zinc-400');
btn.classList.add('bg-orange-600', 'text-white', 'hover:bg-orange-500', 'shadow-md', 'shadow-orange-900/5');
} else {
btn.disabled = true;
btn.classList.add('opacity-50', 'cursor-not-allowed', 'bg-stone-200', 'text-zinc-400');
btn.classList.remove('bg-orange-600', 'text-white', 'hover:bg-orange-500', 'shadow-md', 'shadow-orange-900/5');
}
}
function triggerUpload() {
// Just a visual simulation
const zone = document.getElementById('upload-zone');
zone.classList.add('border-orange-500', 'bg-orange-50/30');
setTimeout(() => {
zone.classList.remove('border-orange-500', 'bg-orange-50/30');
}, 300);
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[640px] flex flex-col gap-6 relative z-10">

<div className="flex flex-col gap-3 px-1">
<div className="flex justify-between items-end">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-orange-600 uppercase tracking-widest">
              Step 2 of 3
            </span>
<iconify-icon className="text-zinc-300" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-xs font-semibold text-zinc-900">
              Upload &amp; Signals
            </span>
</div>
<span className="text-xs font-medium text-zinc-400">
            Next: Review &amp; Analyze
          </span>
</div>
<div className="w-full h-[2px] bg-stone-200 rounded-full overflow-hidden flex">

<div className="w-2/3 h-full bg-orange-600 rounded-full"></div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-2xl shadow-[0_4px_24px_-12px_rgba(0,0,0,0.05)] overflow-hidden">

<div className="px-8 pt-8 pb-6 border-b border-stone-100/50">
<h1 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
            Add your content &amp; signals
          </h1>
<p className="text-[15px] text-zinc-500 leading-relaxed font-normal max-w-lg">
            These inputs help Artie understand your audience, reach, and
            production readiness.
            <span className="text-zinc-400">
              You can update or replace these later.
            </span>
</p>
</div>

<div className="px-8 py-8 space-y-10">

<div className="space-y-4">
<div className="flex justify-between items-baseline">
<label className="text-sm font-semibold text-zinc-900">
                Script &amp; Content
              </label>
<button className="text-[13px] font-medium text-orange-600 hover:text-orange-700">
                Paste script text
              </button>
</div>
<div className="upload-zone group relative w-full h-40 border-[1.5px] border-dashed border-stone-300 rounded-xl bg-stone-50/30 flex flex-col items-center justify-center gap-3 cursor-pointer" id="upload-zone" onclick="triggerUpload()">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
<iconify-icon className="text-zinc-500 group-hover:text-orange-600 transition-colors" icon="lucide:upload-cloud" width="18"></iconify-icon>
</div>
<div className="text-center space-y-1">
<p className="text-sm font-medium text-zinc-900">
                  Upload your script or content
                </p>
<p className="text-xs text-zinc-400 uppercase tracking-wide">
                  PDF, DOC, DOCX, TXT
                </p>
</div>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-zinc-400 mt-0.5 shrink-0" icon="lucide:info" width="14"></iconify-icon>
<p className="text-[13px] text-zinc-400 leading-snug">
                One script = one project. You can analyze multiple projects
                separately.
              </p>
</div>
</div>

<div className="h-px w-full bg-stone-100"></div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-semibold text-zinc-900">
                Channels
              </label>
<span className="text-[11px] font-semibold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                Required
              </span>
</div>
<div className="p-4 rounded-xl border border-stone-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors" id="yt-container">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-stone-100 shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="lucide:youtube" id="yt-icon-status" width="20"></iconify-icon>
</div>
<div className="space-y-0.5">
<h3 className="text-sm font-medium text-zinc-900">
                    Connect your YouTube channel
                  </h3>
<p className="text-[13px] text-zinc-500" id="yt-status-text">
                    Required to generate your Artie Score.
                  </p>
</div>
</div>
<button className="shrink-0 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-[13px] font-medium rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-1 focus:ring-zinc-900" id="yt-connect-btn" onclick="toggleYouTube()">
                Connect YouTube channel
              </button>
</div>
<p className="text-[13px] text-zinc-400 pl-1">
              This allows us to understand your audience size and engagement. We
              never post or access private data.
            </p>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<label className="text-sm font-semibold text-zinc-900">
                  Additional Signals
                </label>
<span className="text-[11px] font-medium text-zinc-400 bg-stone-100 px-2 py-0.5 rounded-md">
                  Optional
                </span>
</div>
<button className="text-[12px] font-medium text-zinc-400 hover:text-zinc-600 flex items-center gap-1 group">
<iconify-icon icon="lucide:help-circle" width="14"></iconify-icon>
<span className="group-hover:underline">How do I upload this?</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center justify-between group hover:border-stone-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-50 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:instagram" width="16"></iconify-icon>
</div>
<span className="text-[13px] font-medium text-zinc-700">
                    Instagram
                  </span>
</div>
<button className="text-[12px] font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded transition-colors">
                  Upload
                </button>
</div>

<div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center justify-between group hover:border-stone-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-50 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:video" width="16"></iconify-icon>

</div>
<span className="text-[13px] font-medium text-zinc-700">
                    TikTok
                  </span>
</div>
<button className="text-[12px] font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded transition-colors">
                  Upload
                </button>
</div>

<div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center justify-between group hover:border-stone-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-50 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:music" width="16"></iconify-icon>
</div>
<span className="text-[13px] font-medium text-zinc-700">
                    Spotify
                  </span>
</div>
<button className="text-[12px] font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded transition-colors">
                  Upload
                </button>
</div>

<div className="p-3 rounded-lg border border-stone-200 bg-white flex items-center justify-between group hover:border-stone-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-50 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:mic-2" width="16"></iconify-icon>
</div>
<span className="text-[13px] font-medium text-zinc-700">
                    Apple Podcasts
                  </span>
</div>
<button className="text-[12px] font-medium text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded transition-colors">
                  Upload
                </button>
</div>
</div>
<p className="text-[13px] text-zinc-400 pl-1">
              Screenshots help improve accuracy but are optional.
            </p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-semibold text-zinc-900">
                Primary Goal
              </label>
<span className="text-[11px] font-semibold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                Required
              </span>
</div>
<div className="relative group">
<select className="w-full h-11 pl-4 pr-10 bg-white border border-stone-200 rounded-xl text-[14px] font-medium text-zinc-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-500 hover:border-stone-300 transition-all cursor-pointer shadow-sm">
<option disabled="" selected="" value="">
                  Select a goal for this project
                </option>
<option value="growth">Maximize Reach &amp; Views</option>
<option value="retention">Improve Audience Retention</option>
<option value="revenue">Increase Revenue / ROI</option>
<option value="engagement">Boost Engagement</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<p className="text-[13px] text-zinc-400 pl-1">
              Artie will prioritize signals relevant to this goal.
            </p>
</div>
</div>

<div className="p-8 border-t border-stone-100 bg-stone-50/50 flex flex-col gap-4">
<button className="w-full h-11 rounded-xl font-semibold text-[14px] transition-all flex items-center justify-center gap-2 bg-stone-200 text-zinc-400 opacity-50 cursor-not-allowed" disabled="" id="continue-btn">
            Continue
            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<div className="text-center">
<a className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Back to Project Basics
            </a>
</div>
</div>
</div>
</div>

    </>
  );
}
