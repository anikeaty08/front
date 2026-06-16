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
      
<section className="max-w-5xl mx-auto text-center">
<div className="mb-10">
<span className="inline-block mb-6 rounded-lg px-3 py-2 border border-white/10">
<span className="uppercase tracking-widest text-xs font-bold text-blue-400">How It Works</span>
</span>
<h2 className="headline text-white text-4xl sm:text-5xl font-normal mb-4">
        From Idea to <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent">Prototype</span> in Minutes
      </h2>
<p className="text-gray-200 text-lg mb-4">
        Transform your vision into a working demo, guided by smart AI every step of the way.
      </p>
</div>
<div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-stretch">

<div className="flex-1 flex flex-col items-center text-center px-2">
<div className="mb-4">
<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-pink-400 to-orange-400 shadow-lg border-4 border-black text-white text-3xl font-bold">1</span>
</div>
<h3 className="text-white text-xl font-semibold mb-2">Describe Your Idea</h3>
<p className="text-gray-300">
          Share your product vision in plain language—no technical jargon required.
        </p>
</div>

<div className="flex-1 flex flex-col items-center text-center px-2 md:border-l md:border-r border-gray-800">
<div className="mb-4">
<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-400 via-pink-300 to-orange-300 shadow-lg border-4 border-black text-white text-3xl font-bold">2</span>
</div>
<h3 className="text-white text-xl font-semibold mb-2">Let AI Build For You</h3>
<p className="text-gray-300">
          Our engine instantly generates interactive prototypes based on your idea and goals.
        </p>
</div>

<div className="flex-1 flex flex-col items-center text-center px-2">
<div className="mb-4">
<span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-300 via-pink-200 to-orange-300 shadow-lg border-4 border-black text-white text-3xl font-bold">3</span>
</div>
<h3 className="text-white text-xl font-semibold mb-2">Review &amp; Iterate</h3>
<p className="text-gray-300">
          Preview, tweak, and fine-tune your prototype until it matches your vision—then share or launch.
        </p>
</div>
</div>
<div className="mt-12">
<a className="inline-block rounded-lg px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 transition hover:brightness-110 text-black font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200 text-base" href="/signup">
        Start Your Journey
      </a>
</div>
</section>

    </>
  );
}
