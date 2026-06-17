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



      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 300
            }
          },
          "color": {
            "value": ["#ffdb3b", "#fe53bb", "#8f51ea", "#fff", "#ffdb3b99"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000"
            }
          },
          "opacity": {
            "value": 0.85,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 0.41,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 0.7,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            },
            "resize": true
          }
        },
        "retina_detect": true
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
      
<div className="w-full max-w-md flex flex-col gap-6 relative border-white/10 border rounded-3xl px-8 py-8">
<div className="flex flex-col items-center gap-2">
<h2 className="text-white text-2xl font-semibold tracking-tight text-center">Welcome Back</h2>
<p className="text-white/60 text-sm text-center -mt-1">Sign in to continue to your dashboard</p>
</div>
<div className="border-b border-white/10"></div>
<form className="flex flex-col gap-5 z-10">
<div>
<label className="block text-sm font-medium text-white tracking-wide mb-1" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full rounded-lg bg-[#232329bb] border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#fe53bb] transition" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-white tracking-wide mb-1" htmlFor="password">Password</label>
<input autocomplete="current-password" className="w-full rounded-lg bg-[#232329bb] border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#8f51ea] transition" id="password" name="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Remember me</span>
<a className="text-[#ffdb3b] hover:text-[#fe53bb] underline underline-offset-2 transition" href="#">Forgot Password?</a>
</div>
<button className="btn mx-auto mt-2 relative" type="submit">
<span id="container-stars">
<div id="particles-js"></div>
</span>
<span id="glow">
<span className="circle"></span>
<span className="circle"></span>
</span>
<strong className="">LOG IN</strong>
</button>
</form>
<div className="border-b border-white/10"></div>
<div className="flex flex-col gap-2">
<button className="social-btn flex items-center gap-2 justify-center py-2 rounded-md font-semibold text-white w-full transition">
<img alt="" className="w-5 h-5 grayscale" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"/> Sign in with Google
        </button>
<button className="social-btn flex items-center gap-2 justify-center py-2 rounded-md font-semibold text-white w-full transition">
<img alt="" className="w-5 h-5 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/> Sign in with GitHub
        </button>
</div>
<div className="text-center mt-4">
<span className="text-white/60 text-xs">Don't have an account?
          <a className="text-[#ffdb3b] underline underline-offset-2 hover:text-[#fe53bb] transition" href="#">Sign up</a>
</span>
</div>
<p className="text-center text-white/20 text-xs mt-4 select-none">© 2024 Nebula UI Technologies</p>
</div>


    </>
  );
}
