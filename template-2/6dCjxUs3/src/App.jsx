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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        first: "moveVertical 30s ease infinite",
                        second: "moveInCircle 20s reverse infinite",
                        third: "moveInCircle 40s linear infinite",
                        fourth: "moveHorizontal 40s ease infinite",
                        fifth: "moveInCircle 20s ease infinite",
                    },
                    keyframes: {
                        moveHorizontal: {
                            "0%": { transform: "translateX(-50%) translateY(-10%)" },
                            "50%": { transform: "translateX(50%) translateY(10%)" },
                            "100%": { transform: "translateX(-50%) translateY(-10%)" }
                        },
                        moveInCircle: {
                            "0%": { transform: "rotate(0deg)" },
                            "50%": { transform: "rotate(180deg)" },
                            "100%": { transform: "rotate(360deg)" }
                        },
                        moveVertical: {
                            "0%": { transform: "translateY(-50%)" },
                            "50%": { transform: "translateY(50%)" },
                            "100%": { transform: "translateY(-50%)" }
                        }
                    }
                }
            }
        };
    
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
      
<div className="h-screen w-screen relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]">

<div className="gradients-container absolute inset-0 blur-xl">
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),0.8)_0,_rgba(var(--first-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div>
</div>

<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
<div className="w-full max-w-md bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
<div className="mb-8 text-center">
<h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
<p className="text-blue-100/80">Join our community today</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-blue-100 mb-1.5" htmlFor="fullName">Full Name</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" id="fullName" name="fullName" placeholder="Enter your full name" required type="text" />
</div>
<div>
<label className="block text-sm font-medium text-blue-100 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" id="email" name="email" placeholder="you@example.com" required type="email" />
</div>
<div>
<label className="block text-sm font-medium text-blue-100 mb-1.5" htmlFor="password">Password</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" id="password" name="password" placeholder="Create a password" required type="password" />
</div>
<div>
<label className="block text-sm font-medium text-blue-100 mb-1.5" htmlFor="confirmPassword">Confirm Password</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required type="password" />
</div>
<div className="pt-2">
<button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all shadow-lg hover:shadow-xl" type="submit">
                            Sign Up
                        </button>
</div>
</form>
<div className="mt-8 text-center">
<p className="text-blue-100/70">
                        Already have an account? 
                        <a className="text-white font-medium hover:text-purple-300 transition-colors" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>

    </>
  );
}
