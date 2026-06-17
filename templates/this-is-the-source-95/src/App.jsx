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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
gray: {
850: '#1a1a1a',
900: '#111111',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-178283632-1');

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
      

<div className="fixed inset-0 z-[-2]">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
</div>
<canvas className="snow" id="snow"></canvas>
<div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6" id="app">

<div className="w-full max-w-[420px] animate-slide-up">

<div className="mb-8 text-center">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-3xl font-display font-semibold tracking-tight text-white mb-2">Beenar</h1>
<p className="text-sm text-gray-400 font-medium">Please sign in to continue</p>
</div>

<div className="glass-panel rounded-3xl p-8">
<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ms-1">Email / Username</label>
<div className="input-group flex items-center rounded-xl px-3 py-2.5">
<iconify-icon className="text-gray-500 text-lg ms-1" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm text-white placeholder-gray-600 focus:ring-0 focus:outline-none px-3 font-sans" placeholder="Enter your identifier" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between px-1">
<label className="text-xs font-medium text-gray-400">Password</label>
<a className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors" href="#">Forgot?</a>
</div>
<div className="input-group flex items-center rounded-xl px-3 py-2.5">
<iconify-icon className="text-gray-500 text-lg ms-1" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm text-white placeholder-gray-600 focus:ring-0 focus:outline-none px-3 font-sans" placeholder="••••••••" type="password"/>
<button className="text-gray-500 hover:text-gray-300 transition-colors" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-3 py-1">
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-600 group-hover:border-gray-500 transition-colors flex items-center justify-center">
<iconify-icon className="text-white text-xs opacity-0 group-[.custom-checkbox_input:checked+div]:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ms-2 text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
</label>
</div>

<button className="shimmer relative w-full overflow-hidden rounded-xl bg-white text-black py-2.5 text-sm font-semibold hover:bg-gray-100 transition-all active:scale-[0.98]">
                        Sign In
                    </button>

<div className="relative py-2">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/10"></div>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-[#121212] px-2 text-gray-500">Or continue with</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/5 py-2.5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-base" icon="logos:google-icon"></iconify-icon>
<span className="text-xs font-medium text-gray-300">Google</span>
</button>
<button className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/5 py-2.5 hover:bg-white/10 transition-colors">
<iconify-icon className="text-base" icon="logos:twitter"></iconify-icon>
<span className="text-xs font-medium text-gray-300">Twitter</span>
</button>
</div>
</form>
</div>

<div className="mt-8 text-center">
<p className="text-xs text-gray-500">
                    Don't have an account? 
                    <a className="text-white hover:underline decoration-white/30 underline-offset-4 font-medium" href="#">Create account</a>
</p>
<div className="mt-8 flex justify-center gap-6 text-gray-600">
<a className="text-xs hover:text-gray-400 transition-colors" href="#">Privacy</a>
<a className="text-xs hover:text-gray-400 transition-colors" href="#">Terms</a>
<a className="text-xs hover:text-gray-400 transition-colors" href="#">Contact</a>
</div>
</div>
</div>

</div>

<link as="style" href="http://beenar.net/build/assets/vendor-d65478ea.css" rel="preload"/>
<link as="style" href="http://beenar.net/build/assets/app-404945fc.css" rel="preload"/>
<link href="http://beenar.net/build/assets/app-78e2d5aa.js" rel="modulepreload"/>
<link href="http://beenar.net/build/assets/axios-chunk-c4ee124e.js" rel="modulepreload"/>
<link href="http://beenar.net/build/assets/vendor-0789c9de.js" rel="modulepreload"/>
<link href="http://beenar.net/build/assets/vendor-d65478ea.css" rel="stylesheet"/>
<link href="http://beenar.net/build/assets/app-404945fc.css" rel="stylesheet"/>


    </>
  );
}
