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
                    colors: {
                        cyber: {
                            bg: '#0a0c12',
                            component: '#181c27',
                            input: 'rgba(30, 35, 50, 0.6)',
                            accent: '#00f0c0',
                            accentHover: '#00ffde',
                            text: '#e0e7ff',
                            secondary: '#a0aed0',
                            muted: '#707a95',
                            border: '#3a3f5e'
                        }
                    },
                    fontFamily: {
                        mono: ['Fira Code', 'monospace']
                    },
                    boxShadow: {
                        'glow': '0 0 18px rgba(0, 240, 192, 0.4)',
                        'glow-hover': '0 0 35px rgba(0, 240, 192, 0.6)'
                    }
                }
            }
        }
    
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
      
<div className="flex rounded-lg overflow-hidden shadow-glow border border-cyber-border w-full max-w-5xl">

<div className="flex-1 relative bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjBkYXJrJTIwbmVvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80')`}}>

<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0"></div>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-10">
<h3 className="text-2xl font-semibold text-white mb-4">Unlock The Future</h3>
<p className="text-gray-100">Experience seamless access to next-generation tools and insights.</p>
</div>
</div>

<div className="flex-[1.2] bg-cyber-component p-10">
<h3 className="text-2xl font-semibold text-white text-center mb-6">Access Your Portal</h3>
<form action="#" method="POST" onSubmit={(e) => { return false; }}>
<div className="mb-5">
<label className="block text-cyber-secondary font-medium mb-2" htmlFor="email">Operator ID</label>
<input className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent focus:ring-2 focus:ring-cyber-accent/30" id="email" name="email" placeholder="Enter your Operator ID" required type="email" />
</div>
<div className="mb-5">
<label className="block text-cyber-secondary font-medium mb-2" htmlFor="password">Auth Key</label>
<input className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent focus:ring-2 focus:ring-cyber-accent/30" id="password" name="password" placeholder="Enter your Auth Key" required type="password" />
</div>
<div className="flex justify-between items-center mb-6 text-sm">
<label className="flex items-center text-cyber-secondary cursor-pointer">
<input className="mr-2 appearance-none w-4 h-4 border border-cyber-border rounded bg-cyber-input checked:bg-cyber-accent relative" name="remember" type="checkbox" />
<span>Secure session</span>
</label>
<a className="text-cyber-accent hover:text-cyber-accentHover" href="#">Auth Issues?</a>
</div>
<button className="w-full bg-cyber-accent text-cyber-bg py-3 rounded-md font-medium shadow-glow hover:bg-cyber-accentHover hover:shadow-glow-hover transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5" type="submit">
                    Connect
                </button>
<p className="text-center mt-6 text-sm text-cyber-secondary">
                    Need clearance? <a className="text-cyber-accent hover:text-cyber-accentHover" href="#">Request Access</a>
</p>
</form>
</div>
</div>

    </>
  );
}
