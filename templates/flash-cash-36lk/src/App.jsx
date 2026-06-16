import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-md mx-auto w-full relative z-10 flex flex-col min-h-screen p-6">

<header className="flex justify-between items-center w-full pt-2">
<i className="w-7 h-7 text-amber-500" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-base font-semibold text-white tracking-wide">EN</span>
</header>

<main className="flex-1 flex flex-col justify-center pb-12">

<h1 className="text-5xl font-semibold tracking-tight text-center text-amber-500 mb-14">
                DX Wallet
            </h1>

<form className="space-y-5">

<div className="flex items-center gap-4 bg-[#0f0f11]/80 border border-zinc-800/80 rounded-2xl px-5 h-16 focus-within:border-amber-500/50 focus-within:bg-[#151518] transition-all backdrop-blur-md shadow-sm shadow-black/50">
<span className="text-amber-500 text-base font-normal">+91</span>
<input className="bg-transparent border-none outline-none w-full text-base text-white placeholder:text-zinc-600 h-full" placeholder="Phone number" type="tel"/>
</div>

<div className="flex items-center gap-4 bg-[#0f0f11]/80 border border-zinc-800/80 rounded-2xl px-5 h-16 focus-within:border-amber-500/50 focus-within:bg-[#151518] transition-all backdrop-blur-md shadow-sm shadow-black/50">
<i className="w-[22px] h-[22px] text-amber-500" data-lucide="lock" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none w-full text-base text-white placeholder:text-zinc-600 h-full" placeholder="Password" type="password"/>
</div>

<div className="flex items-center gap-4 bg-[#0f0f11]/80 border border-zinc-800/80 rounded-2xl px-5 h-16 focus-within:border-amber-500/50 focus-within:bg-[#151518] transition-all backdrop-blur-md shadow-sm shadow-black/50">
<i className="w-[22px] h-[22px] text-amber-500" data-lucide="lock" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none w-full text-base text-white placeholder:text-zinc-600 h-full" placeholder="Confirm Password" type="password"/>
</div>

<div className="flex items-center gap-4 bg-[#0f0f11]/80 border border-zinc-800/80 rounded-2xl px-5 h-16 focus-within:border-amber-500/50 focus-within:bg-[#151518] transition-all backdrop-blur-md shadow-sm shadow-black/50">
<i className="w-[22px] h-[22px] text-amber-500" data-lucide="key" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none w-full text-base text-white placeholder:text-zinc-600 h-full" placeholder="Invite Code (optional)" type="text"/>
</div>

<button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-2xl text-lg transition-colors mt-8 active:scale-[0.98] shadow-lg shadow-amber-500/10" type="submit">
                    Sign Up
                </button>
</form>

<div className="text-center mt-8">
<span className="text-zinc-400 text-base font-normal">Already have an account? </span>
<a className="text-amber-500 font-normal text-base hover:text-amber-400 transition-colors" href="#">Sign In</a>
</div>
</main>
</div>


    </>
  );
}
