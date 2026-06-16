import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-4xl bg-indigo-900/30 border border-indigo-800/70 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

<div className="md:w-1/2 w-full bg-indigo-950/60 px-8 py-10 flex flex-col justify-center">
<div className="flex items-center mb-8">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold text-xl">N</span>
</div>
<span className="ml-3 text-white text-2xl font-bold">Nebula</span>
</div>
<h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
<p className="text-gray-400 mb-7">Welcome back! Please login to your account.</p>
<form className="space-y-5">
<input autocomplete="username" className="glow px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 w-full focus:outline-none focus:border-purple-500 transition" placeholder="Email" required="" type="email"/>
<input autocomplete="current-password" className="glow px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 w-full focus:outline-none focus:border-purple-500 transition" placeholder="Password" required="" type="password"/>
<div className="flex items-center justify-between text-sm mb-2">
<label className="flex items-center gap-2 text-gray-400">
<input className="form-checkbox text-purple-500 accent-purple-600 rounded" type="checkbox"/> Remember me
          </label>
<a className="text-purple-400 hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition" type="submit">
          Log In
        </button>
</form>
<div className="text-center mt-7 text-gray-400 text-sm">
        Don't have an account?
        <a className="text-purple-400 hover:underline ml-1" href="#">Sign up</a>
</div>
</div>

<div className="md:w-1/2 w-full nebula-bg flex flex-col items-center justify-center p-10 relative">
<div className="absolute inset-0 z-0 pointer-events-none">
<svg className="opacity-40 absolute inset-0" fill="none" height="100%" viewbox="0 0 480 480" width="100%">
<circle cx="340" cy="120" fill="#a78bfa" fillOpacity="0.13" r="130"></circle>
<circle cx="250" cy="390" fill="#7c3aed" fillOpacity="0.17" r="140"></circle>
<circle cx="120" cy="240" fill="#818cf8" fillOpacity="0.13" r="54"></circle>
</svg>
</div>
<div className="z-10 flex flex-col items-center">
<div className="w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center shadow-xl">
<svg fill="none" height="44" viewbox="0 0 48 48" width="44">
<circle cx="24" cy="24" r="21" stroke="#a78bfa" strokeWidth="4"></circle>
<circle cx="24" cy="24" r="14" stroke="#c4b5fd" strokeWidth="2"></circle>
<circle cx="24" cy="24" fill="#a78bfa" r="6"></circle>
</svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Welcome to Nebula</h3>
<p className="text-purple-100 max-w-xs mb-8">Your gateway to modern, seamless, secure digital banking. Trusted, instant, universal.</p>
</div>
</div>
</div>

    </>
  );
}
