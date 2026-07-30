import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function triggerCelebration(type) {
            const overlay = document.getElementById(type + '-overlay');
            
            // Show overlay
            overlay.classList.add('active');
            
            // Add confetti for task-clear
            if (type === 'task-clear') {
                createConfetti();
            }
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                hideCelebration(overlay);
            }, 3000);
        }
        
        function hideCelebration(overlay) {
            overlay.classList.remove('active');
            
            // Clean up confetti
            const confetti = overlay.querySelectorAll('.confetti');
            confetti.forEach(piece => piece.remove());
        }
        
        function createConfetti() {
            const overlay = document.getElementById('task-clear-overlay');
            const colors = ['#00D4FF', '#9C4DFF', '#FF006E', '#00FF88', '#00F0FF'];
            
            for (let i = 0; i < 60; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                // Random shapes
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else {
                    confetti.style.transform = 'rotate(45deg)';
                }
                
                overlay.appendChild(confetti);
            }
        }
        
        // Initialize animations on load
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.slide-up-fade');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const activeOverlay = document.querySelector('.celebration-overlay.active');
                if (activeOverlay) {
                    hideCelebration(activeOverlay);
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="container mx-auto px-6 py-12">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-12 slide-up-fade" style={{animationDelay: `0.1s`}}>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Achievement System
                </h1>
<p className="text-secondary text-base">Trigger spectacular celebrations for your accomplishments</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glassmorphic-card rounded-2xl p-5 slide-up-fade" style={{animationDelay: `0.2s`}}>
<h3 className="text-lg font-medium mb-6 cyan-gradient bg-clip-text text-transparent">Task Management</h3>
<div className="space-y-4">
<button className="w-full glassmorphic rounded-xl p-4 text-left btn-hover glow-pulse" data-sound="quest-complete" onClick={(e) => { triggerCelebration('task-clear') }}>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl cyan-gradient flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="font-medium text-primary text-sm">Quest Complete</div>
<div className="text-xs text-secondary">Confetti celebration</div>
</div>
</div>
</button>
<button className="w-full glassmorphic rounded-xl p-4 text-left btn-hover glow-pulse" data-sound="mind-clear" onClick={(e) => { triggerCelebration('inbox-zero') }}>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl purple-pink-gradient flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="font-medium text-primary text-sm">Mind Clear</div>
<div className="text-xs text-secondary">Aurora effect</div>
</div>
</div>
</button>
</div>
</div>
<div className="glassmorphic-card rounded-2xl p-5 slide-up-fade" style={{animationDelay: `0.3s`}}>
<h3 className="text-lg font-medium mb-6 purple-pink-gradient bg-clip-text text-transparent">Progress Milestones</h3>
<div className="space-y-4">
<button className="w-full glassmorphic rounded-xl p-4 text-left btn-hover glow-pulse" data-sound="level-up" onClick={(e) => { triggerCelebration('level-up') }}>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl purple-pink-gradient flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="font-medium text-primary text-sm">Level Up</div>
<div className="text-xs text-secondary">Screen transition</div>
</div>
</div>
</button>
<button className="w-full glassmorphic rounded-xl p-4 text-left btn-hover glow-pulse" data-sound="fire-streak" onClick={(e) => { triggerCelebration('streak-milestone') }}>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-400 to-green-400 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="font-medium text-primary text-sm">Streak Milestone</div>
<div className="text-xs text-secondary">Fire animation</div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>


<div className="celebration-overlay aurora-bg" id="task-clear-overlay" onClick={(e) => { hideCelebration(e.currentTarget) }}>
<div className="text-center scale-bounce" style={{animationDelay: `0.3s`}}>
<div className="glassmorphic rounded-3xl p-12 max-w-md mx-auto relative overflow-hidden">
<div className="relative z-10">
<div className="w-20 h-20 mx-auto mb-6 rounded-2xl cyan-gradient flex items-center justify-center scale-bounce" style={{animationDelay: `0.5s`}}>
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-primary slide-up-fade" style={{animationDelay: `0.7s`}}>Quest Complete!</h2>
<p className="text-secondary text-sm slide-up-fade" style={{animationDelay: `0.9s`}}>Outstanding work completing that task</p>
</div>
</div>
</div>
</div>

<div className="celebration-overlay aurora-bg" id="inbox-zero-overlay" onClick={(e) => { hideCelebration(e.currentTarget) }}>
<div className="aurora-wave"></div>
<div className="text-center scale-bounce" style={{animationDelay: `0.5s`}}>
<div className="glassmorphic rounded-3xl p-12 max-w-md mx-auto relative">
<div className="w-20 h-20 mx-auto mb-6 rounded-2xl purple-pink-gradient flex items-center justify-center scale-bounce" style={{animationDelay: `0.7s`}}>
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-primary slide-up-fade" style={{animationDelay: `0.9s`}}>Mind Clear</h2>
<p className="text-secondary text-sm slide-up-fade" style={{animationDelay: `1.1s`}}>Perfect! Your inbox is completely organized</p>
</div>
</div>
</div>

<div className="celebration-overlay aurora-bg" id="level-up-overlay" onClick={(e) => { hideCelebration(e.currentTarget) }}>
<div className="level-transition"></div>
<div className="text-center scale-bounce" style={{animationDelay: `0.8s`}}>
<div className="glassmorphic rounded-3xl p-12 max-w-md mx-auto relative z-20">
<div className="w-24 h-24 mx-auto mb-6 rounded-2xl purple-pink-gradient flex items-center justify-center scale-bounce" style={{animationDelay: `1s`}}>
<span className="text-2xl font-bold text-white">↑</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-2 text-primary slide-up-fade" style={{animationDelay: `1.2s`}}>Level Up!</h2>
<p className="text-secondary text-sm slide-up-fade" style={{animationDelay: `1.4s`}}>You've reached a new milestone</p>
<div className="mt-4 slide-up-fade" style={{animationDelay: `1.6s`}}>
<span className="cyan-gradient bg-clip-text text-transparent font-medium text-sm">Level 5 → Level 6</span>
</div>
</div>
</div>
</div>

<div className="celebration-overlay aurora-bg" id="streak-milestone-overlay" onClick={(e) => { hideCelebration(e.currentTarget) }}>
<div className="text-center scale-bounce" style={{animationDelay: `0.3s`}}>
<div className="glassmorphic rounded-3xl p-12 max-w-md mx-auto relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16">
<div className="flame" style={{left: `10px`, animationDelay: `0s`}}></div>
<div className="flame" style={{left: `20px`, animationDelay: `0.1s`, height: `45px`}}></div>
<div className="flame" style={{left: `30px`, animationDelay: `0.2s`, height: `50px`}}></div>
<div className="flame" style={{left: `40px`, animationDelay: `0.1s`, height: `45px`}}></div>
<div className="flame" style={{left: `50px`, animationDelay: `0s`}}></div>
</div>
<div className="relative z-10">
<div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-400 to-green-400 flex items-center justify-center scale-bounce" style={{animationDelay: `0.5s`}}>
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
<path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-primary slide-up-fade" style={{animationDelay: `0.7s`}}>🔥 Fire Streak!</h2>
<p className="text-secondary text-sm slide-up-fade" style={{animationDelay: `0.9s`}}>30 days of consistent progress</p>
</div>
</div>
</div>
</div>


    </>
  );
}
