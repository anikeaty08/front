import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Demo loading state for the login button
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault();
      const btn = document.getElementById('loginBtn');
      btn.classList.add('loading');
      setTimeout(() => btn.classList.remove('loading'), 2000);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full flex items-center justify-center min-h-screen">
<section className="bg-white border border-transparent rounded-2xl p-8 sm:p-10 w-full max-w-md custom-shadow flex flex-col items-center">

<h1 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">Sign in to your account</h1>
<p className="text-gray-500 text-sm mb-8 text-center">Please enter your credentials to continue</p>

<form autocomplete="off" className="w-full flex flex-col gap-4 mb-4">
<div>
<label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-2 rounded-lg border border-stone-200 bg-stone-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" id="email" placeholder="you@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="password">Password</label>
<input className="w-full px-4 py-2 rounded-lg border border-stone-200 bg-stone-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<button className="relative flex items-center justify-center w-full rounded-lg border border-transparent min-h-[48px] px-4 py-2 font-extrabold text-lg transition-transform duration-200 bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-200" id="loginBtn" type="submit">
<span className="absolute inset-0 flex items-center justify-center pointer-events-none">
<svg className="button-loader fill-white" height="28" viewbox="0 0 24 24" width="28">
<circle className="opacity-40" cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" stroke-dasharray="20" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</span>
<span className="button-content w-full flex items-center justify-center">Sign in</span>
</button>
</form>
<div className="w-full flex justify-between text-sm text-gray-400 mt-2">
<a className="hover:underline" href="#">Forgot password?</a>
<a className="hover:underline" href="#">Create account</a>
</div>
</section>
</main>


    </>
  );
}
