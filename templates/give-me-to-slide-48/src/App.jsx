import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[1400px] aspect-video min-h-[800px] md:min-h-0 bg-[#040919] rounded-[2rem] border border-slate-800/60 shadow-2xl relative flex flex-col p-8 md:p-12 lg:p-16 overflow-hidden">

<header className="flex justify-between items-center w-full z-10">
<div className="flex items-center gap-4">

<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
<i className="text-white w-7 h-7" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>

<span className="text-xl font-semibold tracking-tight">CorpTrainer</span>
</div>

<div className="text-slate-500 text-sm font-medium tracking-wide">
                Slide 1 of 2
            </div>
</header>

<main className="flex-1 flex flex-col justify-center py-12 z-10">

<div className="space-y-6 max-w-4xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    The Super-Smart Robot for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500">
                        Your Team’s Training
                    </span>
</h1>
<p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-3xl font-medium">
                    It's an AI school that lives only on your computer. It knows everything your company knows, and it keeps your secrets safe.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-20">

<div className="group bg-[#0B1221] border border-white/5 rounded-2xl p-8 hover:bg-[#0f1729] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-[#152033] flex items-center justify-center mb-6">
<i className="text-sky-400 w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Ask Anything</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        Imagine a teacher who has read every single one of your company's books. Employees get answers in one second.
                    </p>
</div>

<div className="group bg-[#0B1221] border border-white/5 rounded-2xl p-8 hover:bg-[#0f1729] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-[#152033] flex items-center justify-center mb-6">
<i className="text-sky-400 w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Total Privacy</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        Most AIs "gossip" and share your secrets. Ours is locked in a vault. Your data stays inside your walls.
                    </p>
</div>

<div className="group bg-[#0B1221] border border-white/5 rounded-2xl p-8 hover:bg-[#0f1729] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-[#152033] flex items-center justify-center mb-6">
<i className="text-sky-400 w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Easy Learning</h3>
<p className="text-slate-400 text-lg leading-relaxed">
                        It creates fun quizzes and lessons automatically so your team actually learns instead of just clicking through.
                    </p>
</div>
</div>
</main>

<footer className="flex flex-col md:flex-row justify-between items-end md:items-center z-10 pt-4">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-6 md:mb-0">
                Private AI • Enterprise Ready • Zero Data Leakage
            </div>
<button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white pl-6 pr-5 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Next Slide
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</footer>

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
</div>


    </>
  );
}
