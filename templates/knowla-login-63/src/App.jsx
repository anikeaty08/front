import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex w-full min-h-screen">

<div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-zinc-200 dark:border-zinc-900 transition-colors duration-300">

<div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 bg-grain z-0 transition-colors duration-300"></div>

<div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-zinc-200/50 dark:bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-300/30 dark:bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>


<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, transparent, 10%, black, 90%, transparent)'}}>

<div className="w-full h-full text-black dark:text-white" style={{backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)'}}></div>
</div>

<div className="relative z-10">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tighter text-black dark:text-white transition-colors">KNOWLA</span>
</div>
</div>

<div className="relative z-10 max-w-lg">
<span className="iconify text-zinc-400 dark:text-zinc-600 mb-6 transition-colors" data-height="24" data-icon="lucide:quote" data-width="24"></span>
<p className="text-xl font-light leading-relaxed text-zinc-800 dark:text-zinc-300 tracking-tight transition-colors">
                    "Design is not just what it looks like and feels like. Design is how it works. Knowla provides the infrastructure that powers our financial future."
                </p>
<div className="mt-8 flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xs text-zinc-500 dark:text-zinc-400 font-medium transition-colors">JD</div>
<div>
<p className="text-sm font-medium text-black dark:text-white transition-colors">Julian Davis</p>
<p className="text-xs text-zinc-500">CTO, Archetype Inc.</p>
</div>
</div>
</div>

<div className="relative z-10 flex justify-between items-end text-xs text-zinc-500 dark:text-zinc-600 font-medium uppercase tracking-widest transition-colors">
<span>System Status: Optimal</span>
<span>© 2024 Knowla Corp</span>
</div>
</div>

<div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-black relative z-20 transition-colors duration-300">

<div className="absolute top-8 left-8 lg:hidden">
<span className="text-lg font-medium tracking-tighter text-black dark:text-white">KNOWLA</span>
</div>

<div className="absolute top-8 right-8">
<button className="relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 dark:bg-zinc-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 focus:ring-offset-2 dark:focus:ring-offset-black" onclick="document.documentElement.classList.toggle('dark')">
<span className="sr-only">Toggle Theme</span>
<span className="pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out translate-x-0 dark:translate-x-5 flex items-center justify-center">

<span className="iconify absolute text-amber-500 opacity-100 dark:opacity-0 transition-opacity duration-200" data-icon="lucide:sun" data-width="14"></span>

<span className="iconify absolute text-zinc-200 opacity-0 dark:opacity-100 transition-opacity duration-200" data-icon="lucide:moon" data-width="14"></span>
</span>
</button>
</div>
<div className="w-full max-w-[380px] space-y-8">

<div className="text-center space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white transition-colors">Welcome back</h1>
<p className="text-sm text-zinc-500 font-normal">Enter your credentials to access the workspace.</p>
</div>

<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 block ml-1 transition-colors" htmlFor="email">Email address</label>
<div className="relative group">
<input autocomplete="email" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all placeholder-zinc-400 dark:placeholder-zinc-700 shadow-sm" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 block ml-1 transition-colors" htmlFor="password">Password</label>
<div className="relative group">
<input autocomplete="current-password" className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-all placeholder-zinc-400 dark:placeholder-zinc-700 shadow-sm" id="password" placeholder="••••••••" type="password"/>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center">
<label className="relative flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 peer-checked:bg-zinc-900 dark:peer-checked:bg-white peer-checked:border-zinc-900 dark:peer-checked:border-white transition-all duration-200"></div>
<span className="iconify text-white dark:text-black absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
<span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors select-none">Remember me</span>
</label>
</div>
<a className="text-xs font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors" href="#">Forgot password?</a>
</div>

<button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" type="submit">
                        Sign in
                    </button>
</form>

<p className="text-center text-xs text-zinc-500 pt-4">
                    Don't have an account? 
                    <a className="font-medium text-zinc-900 dark:text-white hover:underline decoration-zinc-300 dark:decoration-zinc-500 underline-offset-4 transition-all" href="#">Request access</a>
</p>
</div>

<div className="absolute bottom-8 right-8">
<a className="flex items-center gap-2 text-zinc-500 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors" href="#">
<span className="text-xs font-medium">Help &amp; Support</span>
<span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>

    </>
  );
}
