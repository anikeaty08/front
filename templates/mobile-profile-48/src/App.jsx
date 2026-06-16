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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<img alt="Originals Background" className="w-full h-full object-cover blur-[2px] opacity-80 scale-105" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020] via-60% to-transparent"></div>

<div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#00215F]/60 to-transparent blur-3xl"></div>
</div>

<div className="relative z-10 flex flex-col h-screen max-w-md mx-auto px-8 pt-8 pb-10">

<button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<header className="flex flex-col items-center mt-6 mb-8">

<div className="text-2xl font-bold tracking-tighter text-white mb-8">SNÄXX</div>

<h1 className="text-3xl font-semibold text-center text-white tracking-tight leading-tight">
                Unlock Unlimited<br/>Stories
            </h1>

<p className="mt-3 text-sm font-light text-center text-white/50 tracking-wide">
                Experience premium micro-dramas without limits.
            </p>
</header>

<main className="flex-1 flex flex-col justify-center items-center w-full">

<div className="flex items-baseline gap-1 mb-12">
<span className="text-5xl font-medium tracking-tight">€9.99</span>
<span className="text-lg font-light text-white/60">/ month</span>
</div>

<ul className="w-full space-y-5 pl-4">
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#FF8D00] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-light tracking-wide text-white/90">No Ads. Ever.</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#FF8D00] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-light tracking-wide text-white/90">Access to all Episodes</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#FF8D00] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-light tracking-wide text-white/90">Exclusive Originals</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#FF8D00] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-light tracking-wide text-white/90">Cancel anytime</span>
</li>
</ul>
</main>

<footer className="flex flex-col items-center gap-6 mt-8 w-full">


<button className="w-full py-4 rounded-full border border-white/80 text-white font-semibold text-lg tracking-wide transition-all duration-200 active:bg-gradient-to-r active:from-[#FF5700] active:to-[#FFC400] active:border-transparent active:scale-[0.98] group relative overflow-hidden">
<span className="relative z-10">Subscribe Now</span>
</button>

<div className="flex flex-col items-center gap-3">
<button className="text-sm font-light text-white/50 hover:text-white transition-colors">
                    Restore Purchases
                </button>
<p className="text-[10px] font-light text-white/30 text-center leading-relaxed px-4">
                    By subscribing, you agree to our <a className="underline hover:text-white/50" href="#">Terms</a> and <a className="underline hover:text-white/50" href="#">Privacy Policy</a>.
                </p>
</div>
</footer>
</div>

    </>
  );
}
