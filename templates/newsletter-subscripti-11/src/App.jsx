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
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center">
<div className="w-full max-w-3xl h-[500px] bg-gradient-to-b from-neutral-200/40 to-transparent blur-3xl opacity-50 rounded-full mt-[-200px]"></div>
</div>

<header className="w-full p-6 sm:p-8 flex justify-center sm:justify-start relative z-10">
<a className="font-semibold tracking-tighter text-base flex items-center gap-2 text-neutral-900 hover:text-neutral-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
            ACME.
        </a>
</header>

<main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-2xl mx-auto relative z-10 mb-12 sm:mb-24 mt-8 sm:mt-12">

<div className="flex flex-col items-center text-center mb-12 w-full animate-fade-in">
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-neutral-200/80 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 to-white"></div>
<iconify-icon className="text-3xl sm:text-4xl text-neutral-700 relative z-10" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                You're on the list
            </h1>
<p className="text-base sm:text-lg text-neutral-500 max-w-md leading-relaxed font-normal">
                Thank you for subscribing. We've sent a welcome email to your inbox. You can expect our best insights every Tuesday morning.
            </p>
</div>
<hr className="w-full border-neutral-200 mb-10"/>

<div className="w-full flex flex-col gap-5">
<h2 className="text-xs font-medium text-neutral-400 uppercase tracking-widest px-1 text-center sm:text-left">
                While you wait
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

<a className="group relative bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full text-left overflow-hidden" href="#">
<div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 mb-5 group-hover:bg-neutral-100 group-hover:border-neutral-200 transition-colors">
<iconify-icon className="text-xl text-neutral-600" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-1.5 tracking-tight">Join the community</h3>
<p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6 font-normal">
                        Connect with over 10,000 members, share ideas, and get exclusive access on our Discord server.
                    </p>
<div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-neutral-800 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        Join Discord <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group relative bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full text-left overflow-hidden" href="#">
<div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 mb-5 group-hover:bg-neutral-100 group-hover:border-neutral-200 transition-colors">
<iconify-icon className="text-xl text-neutral-600" icon="solar:notebook-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-1.5 tracking-tight">Read popular posts</h3>
<p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6 font-normal">
                        Explore our highest-rated articles and guides to get a head start before the next issue arrives.
                    </p>
<div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-neutral-800 translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        Explore articles <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</main>

<footer className="w-full text-center py-8 text-sm text-neutral-400 mt-auto relative z-10">
<a className="inline-flex items-center justify-center gap-1.5 hover:text-neutral-700 transition-colors font-medium" href="#">
<iconify-icon className="text-base" icon="solar:home-2-linear"></iconify-icon> Return to homepage
        </a>
</footer>

    </>
  );
}
