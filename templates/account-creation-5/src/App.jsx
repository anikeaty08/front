import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Initialize Lucide icons
      lucide.createIcons();

      // Password visibility toggle
      const input = document.getElementById('password');
      const toggle = document.getElementById('togglePassword');
      const eyeOpen = document.getElementById('eyeOpen');
      const eyeClosed = document.getElementById('eyeClosed');

      toggle.addEventListener('click', () => {
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        eyeOpen.classList.toggle('hidden', !isHidden);
        eyeClosed.classList.toggle('hidden', isHidden);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>
<div className="min-h-screen flex pt-10 pr-4 pb-10 pl-4 relative items-center justify-center">

<div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="px-6 sm:px-10 md:px-12 py-10 md:py-14">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Create an account</h1>
<form action="#" className="mt-8 space-y-4" method="POST" novalidate="">

<div className="">
<div className="relative">
<input aria-label="Full name" className="w-full h-12 md:h-[52px] rounded-xl border border-neutral-200 bg-neutral-100/70 px-4 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" name="full_name" placeholder="Full name" type="text"/>
<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-focus-within:ring-violet-400/30"></div>
</div>
</div>

<div className="">
<div className="relative">
<input aria-label="Email" className="w-full h-12 md:h-[52px] rounded-xl border border-neutral-200 bg-neutral-100/70 px-4 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" name="email" placeholder="example.email@gmail.com" type="email"/>
</div>
</div>

<div className="">
<div className="relative">
<input aria-label="Password" className="w-full h-12 md:h-[52px] rounded-xl border border-neutral-200 bg-neutral-100/70 px-4 pr-12 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" id="password" name="password" placeholder="Enter at least 8+ characters" type="password"/>
<button aria-label="Toggle password visibility" className="absolute inset-y-0 right-2 my-auto h-9 w-9 grid place-items-center rounded-lg text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/60 transition" id="togglePassword" type="button">
<svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" id="eyeOpen" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-eye-off w-5 h-5 hidden" data-lucide="eye-off" fill="none" height="24" id="eyeClosed" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</button>
</div>
</div>

<div className="pt-2">
<button className="w-full h-12 md:h-[52px] rounded-xl bg-violet-600 text-white font-medium shadow-sm hover:bg-violet-700 transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" type="submit">
                  Sign in
                </button>
</div>

<div className="flex items-center gap-4 pt-2">
<div className="h-px bg-neutral-200 flex-1"></div>
<span className="text-neutral-500 text-sm">Or sign in with</span>
<div className="h-px bg-neutral-200 flex-1"></div>
</div>

<div className="flex items-center gap-3">

<button className="h-10 px-4 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 transition shadow-sm inline-flex items-center gap-2" type="button">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
<svg aria-hidden="true" className="h-3.5 w-3.5" viewbox="0 0 48 48">
<path d="M24 9.5c3.04 0 5.79 1.06 7.94 2.81l5.95-5.95C34.37 2.67 29.5 1 24 1 14.64 1 6.62 6.41 3.05 14.23l7.62 5.91C12.12 14.41 17.56 9.5 24 9.5z" fill="#EA4335"></path>
<path d="M46.5 24c0-1.6-.16-3.14-.45-4.62H24v8.74h12.7c-.55 2.96-2.19 5.47-4.67 7.16l7.1 5.5C43.67 37.25 46.5 31.07 46.5 24z" fill="#4285F4"></path>
<path d="M10.67 20.14l-7.62-5.91C1.76 16.88 1.5 20.38 1.5 24c0 3.56.25 7.03 1.53 10.02l7.64-5.94c-.49-1.5-.77-3.1-.77-4.78 0-1.76.31-3.44.77-5.16z" fill="#FBBC05"></path>
<path d="M24 46.5c5.46 0 10.06-1.8 13.43-4.88l-7.1-5.5c-2 1.35-4.58 2.15-6.33 2.15-6.44 0-11.88-4.9-13.33-11.1l-7.64 5.94C6.62 41.59 14.64 46.5 24 46.5z" fill="#34A853"></path>
<path d="M1.5 1.5h45v45h-45z" fill="none"></path>
</svg>
</span>
<span className="text-sm font-medium">Google</span>
</button>

<button className="h-10 px-4 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 transition shadow-sm inline-flex items-center gap-2" type="button">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2]">
<svg aria-hidden="true" className="h-3.5 w-3.5" viewbox="0 0 24 24">
<path d="M13.4 20.999v-7.196h2.413l.36-2.805H13.4V9.192c0-.811.225-1.364 1.385-1.364h1.48V5.292A19.93 19.93 0 0 0 14.19 5c-2.136 0-3.598 1.304-3.598 3.7v2.056H8v2.805h2.593V21l2.807-.001z" fill="#fff"></path>
</svg>
</span>
<span className="text-sm font-medium">Facebook</span>
</button>

<button className="h-10 px-4 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 transition shadow-sm inline-flex items-center gap-2" type="button">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black">
<svg aria-hidden="true" className="h-3.5 w-3.5" viewbox="0 0 24 24">
<path d="M16.365 12.877c.019 2.063 1.808 2.75 1.827 2.76-.015.049-.286.99-.946 1.963-.571.84-1.167 1.675-2.105 1.691-.92.017-1.214-.548-2.263-.548-1.049 0-1.374.53-2.24.565-.9.035-1.586-.904-2.162-1.741-1.175-1.696-2.071-4.798-.866-6.889.6-1.04 1.671-1.702 2.841-1.72.888-.017 1.726.598 2.263.598.538 0 1.565-.74 2.641-.63.451.019 1.72.184 2.532 1.39-.066.041-1.515.886-1.522 2.561zM14.38 5.61c.485-.587.82-1.407.73-2.229-.706.029-1.554.47-2.061 1.058-.453.503-.848 1.331-.741 2.128.785.06 1.586-.409 2.072-.957z" fill="#fff"></path>
</svg>
</span>
<span className="text-sm font-medium">Apple</span>
</button>
</div>

<div className="pt-5">
<div className="h-px bg-neutral-200 mb-4"></div>
<div className="flex flex-wrap gap-3">

<button className="h-10 px-4 rounded-xl bg-red-600 text-white font-medium shadow-sm hover:bg-red-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500" type="button">
                    Delete project
                  </button>

<button className="h-10 px-4 rounded-xl bg-white text-neutral-800 font-medium shadow-sm ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500" type="button">
                    Stage for publish
                  </button>

<button className="h-10 px-4 rounded-xl bg-violet-600 text-white font-medium shadow-sm hover:bg-violet-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 inline-flex items-center gap-2" type="button">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Publish now</span>
</button>
</div>
</div>
</form>
</div>

<div className="relative bg-violet-600">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,rgba(255,255,255,0.25),transparent_60%)]"></div>

<svg className="absolute inset-0 w-full h-full opacity-90" fill="none" stroke="white" strokeWidth="3" viewbox="0 0 800 600">
<path d="M120,520 C240,440 140,360 220,300 S420,300 460,240 520,120 640,160" stroke-opacity="0.7"></path>
<path d="M140,120 Q200,160 220,220 T300,320" stroke-opacity="0.7"></path>
<path d="M680,440 q-60,-60 -120,0 t-120,0" stroke-opacity="0.7"></path>
<circle cx="240" cy="260" fill="white" r="16"></circle>
<circle cx="560" cy="200" fill="white" opacity="0.85" r="12"></circle>
<g strokeLinecap="round">
<path d="M540 110 l18 0"></path>
<path d="M560 110 l18 0"></path>
<path d="M580 110 l18 0"></path>
</g>
<g strokeLinecap="round">
<path d="M320 460 l0 18"></path>
<path d="M320 480 l0 18"></path>
</g>
<path d="M520,300 c-10,40 30,60 60,40 25,-16 30,-56 0,-70 -30,-14 -50,0 -60,30z" fill="#22D3EE" opacity="0.9" stroke="none"></path>
<path d="M430,370 l40,70 30,-18 -40,-70 z" fill="#8B5CF6" opacity="0.9" stroke="none"></path>
<path d="M470,330 l50,0 -25,45 z" fill="white" opacity="0.95" stroke="none"></path>
<path d="M600,520 c-120,-40 -140,-120 -260,-80" stroke-opacity="0.8"></path>
<path d="M700,100 q-12,20 -30,28" stroke-opacity="0.8"></path>
<path d="M140,400 q20,-12 28,-30" stroke-opacity="0.8"></path>
<path d="M720,300 l10 -18"></path>
<path d="M740,320 l10 -18"></path>
<path d="M760,340 l10 -18"></path>
</svg>
</div>
<div className="relative h-full w-full aspect-[5/4] md:aspect-auto md:h-full">

<img alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="absolute left-4 bottom-4 flex items-center gap-2 text-neutral-500">
<span className="text-sm">Made with</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white shadow ring-1 ring-black/5">
<span className="bg-gradient-to-br from-violet-500 to-indigo-500 w-4 h-4 rounded-full"></span>
<span className="text-xs font-medium text-neutral-700">v0</span>
</span>
</div>
</div>




    </>
  );
}
