import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            geist: ['Geist', 'Inter', 'sans-serif'],
            manrope: ['Manrope', 'sans-serif'],
          },
          letterSpacing: {
            'tighter': '-0.05em',
          },
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
<h1 className="font-manrope text-[24rem] font-light tracking-tighter bg-gradient-text opacity-40">Wave</h1>
</div>

<div className="max-w-[300px] border border-blue-500/10 bg-gradient-to-t from-[#0f172a] to-[#172554]/50 shadow-lg shadow-black/50 rounded-xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-[1.015] hover:brightness-125 z-10 card-glow">
<div className="flex flex-col w-full p-4">

<img alt="Wave Chat" className="rounded-lg max-w-full h-[200px] object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1074&amp;q=80"/>

<div className="w-full flex items-center my-3">
<div className="flex-grow h-px bg-blue-700/20"></div>
<div className="flex items-center justify-center">
<span className="inline-block w-1.5 h-1.5 bg-blue-500/40 rounded-full mx-2"></span>
</div>
<div className="flex-grow h-px bg-blue-700/20"></div>
</div>

<h2 className="font-geist text-xl font-light tracking-tighter mb-2 text-blue-100">Wave Chat</h2>

<p className="my-2 text-sm text-blue-200/80 leading-snug">Secure messaging with end-to-end encryption. Connect with friends across any device, anywhere.</p>

<div className="flex justify-between items-center my-3">
<div className="flex items-center text-blue-300 font-medium">
<span className="mr-2 text-base">✓</span>
<p className="text-sm">Free to use</p>
</div>
<div className="flex items-center text-blue-300/70">
<span className="mx-2 mb-1 text-sm">↓</span>
<p className="text-xs">5M+ downloads</p>
</div>
</div>

<div className="w-full flex items-center my-2">
<div className="flex-grow h-px bg-blue-700/20"></div>
<div className="flex items-center justify-center">
<span className="inline-block w-1.5 h-1.5 bg-blue-500/40 rounded-full mx-2"></span>
</div>
<div className="flex-grow h-px bg-blue-700/20"></div>
</div>

<div className="flex justify-between items-center my-2">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-blue-400/80"></span>
<p className="text-xs text-blue-200/80">Groups</p>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-blue-400/80"></span>
<p className="text-xs text-blue-200/80">Video calls</p>
</div>
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-blue-400/80"></span>
<p className="text-xs text-blue-200/80">Encryption</p>
</div>
</div>

</div>
</div>

    </>
  );
}
