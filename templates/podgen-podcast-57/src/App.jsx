import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center shadow-lg shadow-slate-900/20">
<iconify-icon className="text-white text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-xl text-slate-900">
            PodGen
          </span>
</div>
<div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#viral-clips">
            Clips
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#trailers">
            Trailers
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#thumbnails">
            Thumbnails
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#captions">
            Captions
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reframe">
            Reframe
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#cleanup">
            Cleanup
          </a>
</div>
<div className="flex items-center">
<button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95">
            Login
          </button>
</div>
</div>
</nav>

<main className="pt-32 pb-12 px-4 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
        Now with Cinematic AI
      </div>
<h1 className="text-5xl md:text-6xl tracking-tight text-slate-900 mb-6 font-bold">
        Turn one video into
        <br/>
<span className="text-gradient">50 new assets</span>
</h1>
<div className="max-w-xl mx-auto mt-8 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="flex bg-white rounded-lg pt-2 pr-2 pb-2 pl-2 relative shadow-xl items-center">
<div className="pl-4 pr-3 text-indigo-500 flex items-center">
<iconify-icon className="" icon="solar:link-circle-bold" width="24"></iconify-icon>
</div>
<input className="border-none focus:ring-0 placeholder-slate-400 outline-none text-lg font-medium text-slate-900 bg-transparent w-full h-12" placeholder="Paste YouTube link to try..." type="text"/>
<button className="h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30 whitespace-nowrap active:scale-95">
            Generate Magic
            <iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<p className="mt-4 text-sm text-slate-500 font-medium">
        Join 10,000+ creators. No credit card required.
      </p>
</main>

<section className="max-w-7xl mx-auto px-4 pb-24">
<div className="flex flex-col gap-24">

<div className="w-full bg-slate-900 rounded-3xl p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden group scroll-mt-24 shadow-2xl shadow-indigo-900/20" id="viral-clips">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/30 transition-all duration-700"></div>
<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
<iconify-icon icon="solar:fire-bold"></iconify-icon>
              Viral Engine
            </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Upload Podcast.
              <br/>
<span className="text-indigo-400">Get 20 Viral Clips.</span>
</h2>
<p className="text-slate-400 font-medium text-lg max-w-md">
              We identify the most engaging moments and reframe them for TikTok,
              Reels, and Shorts instantly.
            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-300 font-medium">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                AI-Curated Hooks
              </li>
<li className="flex items-center gap-3 text-slate-300 font-medium">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                Virality Score Prediction
              </li>
</ul>
<button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition-colors flex items-center gap-2">
              Try with a link
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative h-[450px] w-full flex items-center justify-center perspective-1000">

<div className="relative w-48 aspect-[9/16] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl transform -rotate-12 -translate-x-12 translate-y-4 opacity-60 scale-90">
<img alt="Clip 1" className="w-full h-full object-cover opacity-50 rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative w-48 aspect-[9/16] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl transform -rotate-6 -translate-x-6 translate-y-2 opacity-80 scale-95">
<img alt="Clip 2" className="w-full h-full object-cover opacity-70 rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative w-52 aspect-[9/16] bg-slate-800 rounded-2xl border-2 border-indigo-500 shadow-2xl transform hover:-translate-y-4 transition-transform duration-300 overflow-hidden z-10">
<img alt="Viral Clip" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                98 Score
              </div>
<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<div className="h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl scroll-mt-24" id="trailers">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Instant Trailers
              </h2>
<p className="text-slate-600 text-lg">
                Get 3 distinct cuts for every episode. Perfect for LinkedIn,
                Twitter, and Instagram Stories.
              </p>
</div>
<div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
<iconify-icon icon="solar:videocamera-record-bold"></iconify-icon>
              Auto-Generated
            </div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
<img alt="The Hook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-lg">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  0:30
                </div>
</div>
<h3 className="text-xl font-semibold text-slate-900">The Hook</h3>
<p className="text-slate-500 text-sm mt-1">
                Fast-paced intro to grab attention immediately.
              </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
<img alt="The Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-lg">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  1:00
                </div>
</div>
<h3 className="text-xl font-semibold text-slate-900">The Story</h3>
<p className="text-slate-500 text-sm mt-1">
                Narrative driven segment that builds intrigue.
              </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
<img alt="The Promo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 sepia-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-lg">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  0:45
                </div>
</div>
<h3 className="text-xl font-semibold text-slate-900">The Promo</h3>
<p className="text-slate-500 text-sm mt-1">
                Balanced mix of highlights and context.
              </p>
</div>
</div>
</div>

<div className="w-full bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl scroll-mt-24 overflow-hidden relative" id="thumbnails">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-4">
<iconify-icon icon="solar:gallery-wide-bold"></iconify-icon>
                  New Feature
                </div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                  Thumbnail Generator
                </h2>
<p className="text-slate-600 text-lg">
                  Generate 10 high-CTR thumbnails in seconds. Train the AI on
                  your brand or mimic the greats.
                </p>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:palette-bold"></iconify-icon>
                  Select a Style
                </h4>
<div className="flex flex-col gap-3">
<label className="flex items-center justify-between p-3 rounded-xl border-2 border-indigo-600 bg-indigo-50 cursor-pointer transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                        DOAC
                      </div>
<span className="font-semibold text-indigo-900">
                        Diary of a CEO
                      </span>
</div>
<iconify-icon className="text-indigo-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</label>
<label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                        MB
                      </div>
<span className="font-semibold text-slate-700">
                        MrBeast Style
                      </span>
</div>
<div className="w-5 h-5 rounded-full border border-slate-300"></div>
</label>
</div>
</div>
</div>
<div className="lg:col-span-7">

<div className="grid grid-cols-2 gap-4">
<div className="aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
<img alt="Thumb 1" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
<h3 className="text-white font-black text-xl uppercase leading-none drop-shadow-md">
                      Secret to
                      <br/>
<span className="text-yellow-400">Success</span>
</h3>
</div>
<div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-1.5 rounded uppercase font-bold">
                    Option 1
                  </div>
</div>
<div className="aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
<img alt="Thumb 2" className="w-full h-full object-cover opacity-80 grayscale group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-red-600 text-white font-black text-lg px-2 py-1 uppercase -rotate-6">
                      Don't Do This
                    </div>
</div>
<div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-1.5 rounded uppercase font-bold">
                    Option 2
                  </div>
</div>
<div className="aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
<img alt="Thumb 3" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-white font-bold text-lg leading-tight">
                      The AI Revolution
                    </h3>
</div>
<div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-1.5 rounded uppercase font-bold">
                    Option 3
                  </div>
</div>
<div className="aspect-video bg-white rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center border-2 border-dashed border-slate-300">
<div className="text-center">
<iconify-icon className="text-3xl text-slate-400 mb-1" icon="solar:add-circle-linear"></iconify-icon>
<div className="text-xs font-semibold text-slate-500">
                      Generate More
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-2 scroll-mt-24" id="captions">
<div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
<div className="inline-block w-fit px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold uppercase tracking-wide mb-6">
              Style Studio
            </div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Cinematic Captions
            </h2>
<p className="text-slate-600 text-lg mb-6">
              Choose your vibe. We auto-animate every word to keep retention
              high. Compare standard vs. cinematic instantly.
            </p>
<div className="flex gap-4">
<div className="text-center">
<div className="text-3xl font-bold text-slate-900">+45%</div>
<div className="text-sm text-slate-500 font-medium">Retention</div>
</div>
<div className="w-px bg-slate-200"></div>
<div className="text-center">
<div className="text-3xl font-bold text-slate-900">0s</div>
<div className="text-sm text-slate-500 font-medium">Effort</div>
</div>
</div>
</div>
<div className="relative min-h-[300px] bg-slate-900 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-indigo-950"></div>

<div className="relative z-10 text-center space-y-2 transform scale-125">
<div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4 opacity-50">
                Preview
              </div>
<p className="text-white text-4xl font-black uppercase tracking-tighter transform -rotate-2 drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
                MAKE IT
                <span className="text-yellow-400">POP!</span>
                💥
              </p>
<div className="flex justify-center mt-4">
<span className="bg-white/10 backdrop-blur px-3 py-1 rounded-lg text-white text-xs font-mono">
                  AI_Motion_Engine: Active
                </span>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl grid lg:grid-cols-2 gap-12 items-center scroll-mt-24" id="reframe">
<div className="order-2 lg:order-1 relative">
<div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">
<img alt="Wide Video" className="w-full h-full object-cover blur-sm opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-[20%] left-[15%] w-[15%] h-[25%] border-2 border-green-400 rounded-lg flex items-center justify-center bg-green-400/10 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
<span className="text-[10px] font-bold text-white bg-green-500 px-1.5 py-0.5 rounded shadow-sm">
                  Speaker 1
                </span>
</div>
<div className="absolute top-[35%] right-[20%] w-[15%] h-[25%] border-2 border-blue-400 rounded-lg flex items-center justify-center bg-blue-400/10 shadow-[0_0_20px_rgba(96,165,250,0.2)]">
<span className="text-[10px] font-bold text-white bg-blue-500 px-1.5 py-0.5 rounded shadow-sm">
                  Speaker 2
                </span>
</div>

<div className="absolute inset-y-6 inset-x-0 mx-auto w-[160px] border-[6px] border-slate-900 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col z-20 ring-1 ring-white/20">

<div className="h-1/2 relative overflow-hidden border-b-2 border-white">
<img alt="Speaker 1" className="absolute w-[350%] max-w-none left-[-50%] top-[-20%] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="h-1/2 relative overflow-hidden">
<img alt="Speaker 2" className="absolute w-[350%] max-w-none right-[-60%] top-[-40%] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute bottom-3 right-3 flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:heart-bold"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:chat-round-dots-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:crop-minimalistic-bold"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Smart Reframe
            </h2>
<p className="text-slate-600 text-lg mb-6">
              Automatically crop landscape video to vertical. Our Face-Tracking
              AI ensures speakers are always centered, even when moving.
            </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:users-group-rounded-bold"></iconify-icon>
                Multi-Speaker Support
              </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:face-scan-square-bold"></iconify-icon>
                Active Speaker Detection
              </div>
</div>
</div>
</div>

<div className="w-full bg-slate-900 rounded-3xl p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 border border-slate-800 shadow-2xl" id="cleanup">
<div className="space-y-6">
<div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 border border-teal-500/20">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Video Cleanup
            </h2>
<p className="text-slate-400 text-lg">
              A light, automatic cleanup pass. We level volume, remove
              background noise, and trim dead space without affecting the
              creative flow.
            </p>
<div className="flex gap-4">
<span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-teal-400">
                Auto-Leveling
              </span>
<span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-teal-400">
                Silence Removal
              </span>
</div>
</div>
<div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
<div className="mb-8">
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Audio Cleanup
                </span>
<span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  Processing Complete
                </span>
</div>
<div className="flex items-center justify-between gap-1 h-20 bg-slate-900/50 rounded-xl p-4 border border-slate-800">
<div className="w-1.5 h-6 bg-teal-500 rounded-full animate-pulse"></div>
<div className="w-1.5 h-10 bg-teal-500 rounded-full"></div>
<div className="w-1.5 h-14 bg-teal-500 rounded-full"></div>
<div className="w-1.5 h-8 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '100ms'}}></div>
<div className="w-1.5 h-12 bg-teal-500 rounded-full"></div>
<div className="w-1.5 h-7 bg-teal-500 rounded-full"></div>
<div className="w-1.5 h-16 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
<div className="w-1.5 h-10 bg-teal-500 rounded-full"></div>
<div className="w-1.5 h-5 bg-teal-500 rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-teal-500/5 blur-xl"></div>
<div className="relative w-16 h-16 mb-2 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-indigo-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175.9" stroke-dashoffset="17.6" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="absolute text-sm font-bold text-white">90%</span>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Noise Removed
                </span>
</div>
<div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-purple-500/5 blur-xl"></div>
<div className="flex items-end gap-1 h-16 mb-2">
<div className="w-2 h-8 bg-slate-700 rounded-sm"></div>
<div className="w-2 h-12 bg-purple-500 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-pulse"></div>
<div className="w-2 h-10 bg-purple-500 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-pulse" style={{animationDelay: '75ms'}}></div>
<div className="w-2 h-6 bg-slate-700 rounded-sm"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                  Voice Iso
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 font-medium">
          © 2024 PodGen AI. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
