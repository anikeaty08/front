import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-[400px] bg-white min-h-screen sm:min-h-[812px] sm:h-auto sm:rounded-[40px] shadow-2xl shadow-gray-200/60 flex flex-col relative overflow-hidden sm:ring-8 sm:ring-gray-100/50">

<header className="flex items-center justify-between p-6 pb-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="font-outfit text-xl font-medium tracking-tighter text-gray-900 uppercase">
                Koli
            </div>
<div className="w-10 h-10"></div> 
</header>

<section className="px-6 pt-6 pb-6 flex-grow flex flex-col">

<div className="mb-8">
<h1 className="font-outfit text-3xl font-semibold tracking-tight text-gray-900 mb-2">
                    Set Password
                </h1>
<p className="text-sm text-gray-500 font-normal">
                    Create a strong and secure password to protect your account.
                </p>
</div>

<div className="flex flex-col gap-4 mb-6">

<div className="login-input-wrapper relative flex items-center h-[64px] bg-[#f8f9fa] border border-gray-100 rounded-[24px] px-4 group focus-within:bg-white focus-within:border-purple-300">
<iconify-icon className="text-gray-400 text-xl group-focus-within:text-purple-500 transition-colors" icon="solar:lock-password-linear"></iconify-icon>
<input aria-label="New Password" className="w-full h-full bg-transparent border-none focus:outline-none text-base text-gray-900 placeholder:text-gray-400 ml-3 font-medium" placeholder="New Password" type="password" value="••••••••"/>
<button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors ml-1">
<iconify-icon className="text-xl" icon="solar:eye-linear"></iconify-icon>
</button>
</div>

<div className="login-input-wrapper relative flex items-center h-[64px] bg-[#f8f9fa] border border-gray-100 rounded-[24px] px-4 group focus-within:bg-white focus-within:border-purple-300">
<iconify-icon className="text-gray-400 text-xl group-focus-within:text-purple-500 transition-colors" icon="solar:lock-password-linear"></iconify-icon>
<input aria-label="Confirm Password" className="w-full h-full bg-transparent border-none focus:outline-none text-base text-gray-900 placeholder:text-gray-400 ml-3 font-medium" placeholder="Confirm Password" type="password"/>
<button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors ml-1">
<iconify-icon className="text-xl" icon="solar:eye-closed-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 px-2 mb-10">
<div className="flex items-center gap-2.5 text-sm text-gray-700">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium text-gray-900">At least 8 characters</span>
</div>
<div className="flex items-center gap-2.5 text-sm text-gray-500">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Contains a number or symbol</span>
</div>
<div className="flex items-center gap-2.5 text-sm text-gray-400">
<div className="w-[18px] h-[18px] rounded-full border border-gray-300 flex items-center justify-center"></div>
<span>Contains an uppercase letter</span>
</div>
</div>

<div className="mt-auto px-2 flex items-center justify-between py-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm text-gray-900">Enable Biometrics</h3>
<p className="text-xs text-gray-500 mt-0.5">Quick login with Face ID</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" type="checkbox" value=""/>
<div className="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-100 transition-colors duration-300 toggle-label after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-300 after:shadow-sm"></div>
</label>
</div>
</section>

<footer className="p-6 pt-2 pb-8 sm:pb-10 w-full">

<button className="w-full relative group overflow-hidden rounded-[24px] bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium text-base py-5 shadow-[0_8px_30px_rgb(147,51,234,0.25)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.25)] transition-all duration-300 active:scale-[0.98]">

<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center justify-center gap-2">
                    Save Password
                    <iconify-icon className="text-xl opacity-90 group-hover:translate-x-1 transition-transform duration-300 ease-out" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</footer>
</main>

    </>
  );
}
