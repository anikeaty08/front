import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    if ('fonts' in document) {
      document.fonts.load('1em Inter');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-gradient-to-tr from-indigo-700/90 to-indigo-400/80 rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden font-sans">

<div className="mb-7">
<h1 className="text-white text-[32px] md:text-[40px] leading-tight font-light tracking-tighter mb-1" style={{fontFamily: '\'Inter\', sans-serif'}}>Sign In</h1>
<div className="text-indigo-100 text-[16px] md:text-[20px] font-light tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Welcome back!</div>
</div>

<div className="flex items-center justify-between mb-9">
<div className="flex items-center gap-3">
<span className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
<svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24">
<circle cx="12" cy="8" r="4" stroke="currentColor"></circle>
<path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="uppercase text-white font-semibold text-[14px]" style={{fontFamily: '\'Inter\', sans-serif'}}>Member</span>
</div>
</div>

<form className="space-y-6">
<div>
<label className="block text-indigo-200 text-xs font-semibold uppercase mb-1 tracking-tight" htmlFor="email" style={{fontFamily: '\'Inter\', sans-serif'}}>Email</label>
<input autocomplete="username" className="w-full px-4 py-3 rounded-lg bg-indigo-900/60 border border-indigo-700 focus:border-indigo-400 text-white placeholder-indigo-300 text-[16px] font-medium outline-none transition" id="email" placeholder="you@email.com" required="" style={{fontFamily: '\'Inter\', sans-serif'}} type="email"/>
</div>
<div>
<label className="block text-indigo-200 text-xs font-semibold uppercase mb-1 tracking-tight" htmlFor="password" style={{fontFamily: '\'Inter\', sans-serif'}}>Password</label>
<input autocomplete="current-password" className="w-full px-4 py-3 rounded-lg bg-indigo-900/60 border border-indigo-700 focus:border-indigo-400 text-white placeholder-indigo-300 text-[16px] font-medium outline-none transition" id="password" placeholder="••••••••" required="" style={{fontFamily: '\'Inter\', sans-serif'}} type="password"/>
</div>
<div className="flex items-center justify-between -mt-2">
<label className="flex items-center text-indigo-200 text-xs font-medium gap-2 select-none cursor-pointer" style={{fontFamily: '\'Inter\', sans-serif'}}>
<input className="accent-indigo-400 rounded focus:ring-transparent" type="checkbox"/>
          Remember me
        </label>
<a className="text-xs text-indigo-200 hover:underline focus:underline transition" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>Forgot password?</a>
</div>
<button className="w-full py-3 rounded-xl font-semibold bg-white/90 hover:bg-white text-indigo-800 hover:shadow-lg transition-all text-[16px] mt-2 shadow" style={{fontFamily: '\'Inter\', sans-serif'}} type="submit">
        Login
      </button>
</form>

<span className="absolute w-36 h-36 left-[-3.5rem] bottom-[-3.5rem] bg-white/10 rounded-full blur-2xl"></span>
<span className="absolute w-20 h-20 right-[-1.5rem] top-[-1.5rem] bg-blue-200/10 rounded-full blur-2xl"></span>
</div>

    </>
  );
}
