import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cardBg: "#171923",
            cardBorder: "#23262C",
            cardAccent: "#38bdf8"
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
      
<div className="max-w-sm w-full rounded-2xl bg-cardBg border border-cardBorder shadow-lg p-6 transition-transform duration-300 hover:scale-105">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cardAccent/10">
<svg className="h-6 w-6 text-cardAccent" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<div>
<h2 className="text-base font-semibold text-white">Elegant Project Card</h2>
<span className="text-xs text-gray-400 tracking-wide">UI/UX Design</span>
</div>
</div>
<p className="text-gray-300 mb-6 text-[15px] leading-relaxed">
      Delivering clarity and creativity for your team with a focus on aesthetics and usability. Designed for productivity and inspiration.
    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-cardBorder shadow-sm" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<span className="text-xs text-gray-400">Jordan Lee</span>
</div>
<button className="px-4 py-1.5 rounded-lg bg-white/5 border border-cardBorder text-cardAccent text-xs font-medium hover:bg-cardAccent/10 transition">
        Learn More
      </button>
</div>
</div>

    </>
  );
}
