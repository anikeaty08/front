import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
    
    // Restart animations on click
    document.addEventListener('click', () => {
      document.querySelectorAll('.wave-path').forEach(path => {
        path.style.animation = 'none';
        path.offsetHeight; // Trigger reflow
        path.style.animation = null;
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full text-slate-800 dark:text-slate-200" fill="none" viewbox="0 0 800 600">
<path className="wave-path" d="M-100 250C50 200 150 350 300 300C450 250 550 400 700 350" stroke="currentColor" stroke-opacity="0.1" strokeWidth="2" style={{animationDelay: '0.1s'}}></path>
<path className="wave-path" d="M-100 270C50 220 150 370 300 320C450 270 550 420 700 370" stroke="currentColor" stroke-opacity="0.15" strokeWidth="2.5" style={{animationDelay: '0.3s'}}></path>
<path className="wave-path" d="M-100 290C50 240 150 390 300 340C450 290 550 440 700 390" stroke="currentColor" stroke-opacity="0.2" strokeWidth="3" style={{animationDelay: '0.5s'}}></path>
<path className="wave-path" d="M-100 310C50 260 150 410 300 360C450 310 550 460 700 410" stroke="currentColor" stroke-opacity="0.25" strokeWidth="3.5" style={{animationDelay: '0.7s'}}></path>
<path className="wave-path" d="M-100 330C50 280 150 430 300 380C450 330 550 480 700 430" stroke="currentColor" stroke-opacity="0.3" strokeWidth="4" style={{animationDelay: '0.9s'}}></path>
</svg>
</div>

<div className="relative z-10 container mx-auto px-6 text-center">
<h1 className="fade-in text-5xl sm:text-7xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white" style={{animationDelay: '1.2s'}}>
        Flowing <span className="text-blue-600 dark:text-blue-400">Waves</span>
</h1>
<p className="fade-in max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 mb-10" style={{animationDelay: '1.5s'}}>
        Experience the smooth animation of waves flowing from start to finish, creating an elegant visual rhythm.
      </p>
<button className="fade-in group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-full overflow-hidden shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300" style={{animationDelay: '1.8s'}}>
<span className="relative z-10">Get Started</span>
<span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
</button>
</div>

<button className="fixed top-4 right-4 z-50 p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors" id="themeToggle">
<svg className="h-6 w-6 block dark:hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-6 w-6 hidden dark:block" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>


    </>
  );
}
