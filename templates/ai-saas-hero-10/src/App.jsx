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
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
'marquee': 'marquee 25s linear infinite',
'shimmer': 'shimmer 2s linear infinite',
'spin-slow': 'spin 8s linear infinite',
'border-spin': 'borderSpin 3s linear infinite',
'sphere-float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
'tilt': 'tilt 10s infinite linear',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
shimmer: {
'from': { backgroundPosition: '0 0' },
'to': { backgroundPosition: '-200% 0' },
},
borderSpin: {
'100%': { transform: 'rotate(-360deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
'50%': { opacity: '0.8', transform: 'scale(1.05)' },
},
tilt: {
'0%, 50%, 100%': { transform: 'rotate(0deg)' },
'25%': { transform: 'rotate(1deg)' },
'75%': { transform: 'rotate(-1deg)' },
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute -top-[20%] left-1/4 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col border-x border-white/5">

<div className="absolute inset-y-0 left-1/3 w-px bg-white/5 hidden lg:block pointer-events-none"></div>
<div className="absolute inset-y-0 right-1/3 w-px bg-white/5 hidden lg:block pointer-events-none"></div>

<nav className="flex items-center justify-between px-6 py-6 lg:px-10 border-b border-white/5 relative bg-[#050A14]/80 backdrop-blur-md animate-fade-in-up sweezy-custom-cursor-hover" style={{animationDelay: '0.1s', cursor: 'url("data:image/png'}}>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-lg text-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-500">
<span className="iconify text-xl" data-icon="solar:prism-linear"></span>
</div>
<span className="text-xl font-display font-semibold tracking-tight text-white">Prism</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#">Discover</a>
<a className="hover:text-white transition-colors duration-300" href="#">Library</a>
<a className="hover:text-white transition-colors duration-300" href="#">Artists</a>
<a className="hover:text-white transition-colors duration-300" href="#">Premium</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors px-4 py-2">Sign In</button>
<button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-slate-800 px-6 font-medium text-white transition-all duration-300 hover:bg-slate-700 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900">
<span className="mr-2 text-xs">Get App</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:download-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877"></path><path d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5" strokeLinejoin="round"></path></g></svg>
</button>
</div>
</nav>

<main className="flex flex-col lg:grid lg:grid-cols-2 relative border-b border-white/5">

<div className="flex flex-col justify-center px-6 py-16 lg:px-10 lg:py-24 relative z-20 order-2 lg:order-1">
<div className="mb-8 flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-widest uppercase animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<span className="w-6 h-px bg-cyan-400"></span>
                    01 • Musical Possibilities
                </div>
<h1 className="lg:text-7xl leading-[1.1] animate-fade-in-up sweezy-custom-cursor-hover text-5xl font-medium text-white tracking-tight font-display mb-8" style={{animationDelay: '0.3s', cursor: 'url("data:image/png'}}>
                    Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>endless</span> <br/>
                    sonic landscapes
                </h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    Try Prism and unlock 25 million songs with high-fidelity streaming. Experience music curated by Ivan Volti and the community.
                </p>
<div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<button className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#059669_50%,#10B981_100%)]"></span>
<div className="relative flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-8 py-3.5 text-base font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
<svg aria-hidden="true" className="iconify mr-2 text-emerald-400 text-xl iconify--solar" data-icon="solar:magic-stick-3-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M3.845 7.922a2.883 2.883 0 1 1 4.077-4.077l12.234 12.233a2.884 2.884 0 0 1-4.078 4.078z" strokeWidth="1.5"></path><path d="m6 10l4-4" strokeLinecap="round" strokeWidth="1.5"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z"></path></g></svg>
                            Join Prism Now
                        </div>
</button>
<button className="relative inline-flex h-14 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#394150_50%,#E2E8F0_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#050A14] px-8 py-1 text-base font-medium text-slate-300 backdrop-blur-3xl transition-colors hover:text-white hover:bg-slate-900">
                            Talk to sales
                        </span>
</button>
</div>
<div className="border-t border-white/10 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
<div className="flex items-center gap-12">
<div>
<p className="text-3xl font-display font-bold text-white mb-1">25M+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Songs Available</p>
</div>
<div>
<p className="text-3xl font-display font-bold text-white mb-1">4k</p>
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Dolby Atmos</p>
</div>
<div className="flex -space-x-3 items-center">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050A14]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050A14]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050A14]" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-10 h-10 rounded-full border-2 border-[#050A14] bg-slate-800 flex items-center justify-center text-xs text-white font-medium">+2k</div>
</div>
</div>
</div>
</div>

<div className="relative flex items-center justify-center min-h-[400px] lg:min-h-auto overflow-hidden order-1 lg:order-2 animate-fade-in-up sweezy-custom-cursor-hover" style={{animationDelay: '0.4s', cursor: 'url("data:image/png'}}>
<div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] flex items-center justify-center animate-sphere-float">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[60px] animate-pulse-glow"></div>
<div className="relative w-[90%] h-[90%] bg-black rounded-full shadow-2xl flex items-center justify-center overflow-hidden border border-white/10 z-10">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 opacity-90"></div>
<div className="absolute inset-0 dot-pattern opacity-40 sphere-mask animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-500/10 via-transparent to-purple-600/10 rounded-full mix-blend-overlay"></div>
</div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-[1.15] animate-[spin_20s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 rounded-full border border-dashed border-white/5 scale-[1.35] animate-[spin_40s_linear_infinite] sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}></div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-20 sweezy-custom-cursor-hover" style={{cursor: 'url("data:image/png'}}>
<div className="absolute top-[20%] right-[10%] glass text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 transform translate-y-4 animate-[bounce_6s_infinite] border-white/10 w-auto max-w-[220px]">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-spin-slow">
<svg aria-hidden="true" className="iconify text-white text-[10px] iconify--solar" data-icon="solar:vinyl-record-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142M17.126 6.873a.75.75 0 1 0-1.06 1.061a5.75 5.75 0 0 1 0 8.132a.75.75 0 1 0 1.06 1.06a7.25 7.25 0 0 0 0-10.253M9.349 9.348a3.75 3.75 0 1 1 5.304 5.304a3.75 3.75 0 0 1-5.304-5.304m1.061 1.061a2.25 2.25 0 1 1 3.182 3.182a2.25 2.25 0 0 1-3.182-3.182M7.934 7.934a.75.75 0 0 0-1.06-1.06a7.25 7.25 0 0 0 0 10.253a.75.75 0 0 0 1.06-1.061a5.75 5.75 0 0 1 0-8.132" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="flex flex-col overflow-hidden">
<span className="text-xs font-semibold truncate">Midnight City</span>
<span className="text-[10px] text-slate-400 truncate">M83 • Now Playing</span>
</div>
<div className="flex gap-0.5 items-end h-3 ml-2">
<div className="w-0.5 bg-emerald-400 h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-emerald-400 h-3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-emerald-400 h-1.5 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-32 text-slate-700 font-mono text-xs z-0">
<span className="text-cyan-400/50">01</span>
<span>02</span>
<span>03</span>
</div>
</main>

<section className="border-b border-white/5 py-10 bg-[#050A14] overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050A14] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050A14] to-transparent z-10"></div>
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest font-display">Powered by Industry Leaders</p>
<div className="flex w-full overflow-hidden">
<div className="flex animate-marquee min-w-full items-center gap-16 px-8">
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:spotify" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:soundcloud" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.75.75 0 0 1 .452-.724s.75-.513 2.333-.513a5.36 5.36 0 0 1 2.763.755a5.43 5.43 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12c.884 0 1.73.358 2.347.992s.948 1.49.922 2.373M10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0M9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0m-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0m-1.647.77a26 26 0 0 1-.008 7.147a.272.272 0 0 1-.542 0a28 28 0 0 1 0-7.147a.275.275 0 0 1 .55 0m-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412c-.026.28-.514.283-.54 0c-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0m-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:applemusic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.994 6.124a9.2 9.2 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5 5 0 0 0-1.877-.726a10.5 10.5 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986q-.227.014-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a11 11 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223l.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a13 13 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.05 5.05 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14q-.524.15-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a1 1 0 0 0 .02-.193q0-2.723-.002-5.443a.7.7 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066q-1.14.226-2.28.456l-2.325.47l-1.374.278l-.048.013c-.277.077-.377.203-.39.49q-.002.063 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233q-.526.152-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177q.574-.126.6-.714v-.15l.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165q1.1-.224 2.2-.444l2.27-.46l2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482q.012.11.012.223q.003 2.866 0 5.732z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:tidal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 3.992L8.008 7.996L4.004 3.992L0 7.996L4.004 12l4.004-4.004L12.012 12l-4.004 4.004l4.004 4.004l4.004-4.004L12.012 12l4.004-4.004zm4.03 4.004l3.979-3.979L24 7.996l-3.979 3.979z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:bandcamp" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m0 18.75l7.437-13.5H24l-7.438 13.5z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:dolby" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564z" fill="currentColor"></path></svg>

<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:spotify" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:soundcloud" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.75.75 0 0 1 .452-.724s.75-.513 2.333-.513a5.36 5.36 0 0 1 2.763.755a5.43 5.43 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12c.884 0 1.73.358 2.347.992s.948 1.49.922 2.373M10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0M9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0m-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0m-1.647.77a26 26 0 0 1-.008 7.147a.272.272 0 0 1-.542 0a28 28 0 0 1 0-7.147a.275.275 0 0 1 .55 0m-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412c-.026.28-.514.283-.54 0c-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0m-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:applemusic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.994 6.124a9.2 9.2 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5 5 0 0 0-1.877-.726a10.5 10.5 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986q-.227.014-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a11 11 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223l.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a13 13 0 0 0 1.57-.1c.822-.106 1.596-.35 2.295-.81a5.05 5.05 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324c.113-.675.138-1.358.137-2.04c-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206c-.29.59-.76.962-1.388 1.14q-.524.15-1.07.173c-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.038-2.022c.323-.16.67-.25 1.018-.324c.378-.082.758-.153 1.134-.24c.274-.063.457-.23.51-.516a1 1 0 0 0 .02-.193q0-2.723-.002-5.443a.7.7 0 0 0-.026-.185c-.04-.15-.15-.243-.304-.234c-.16.01-.318.035-.475.066q-1.14.226-2.28.456l-2.325.47l-1.374.278l-.048.013c-.277.077-.377.203-.39.49q-.002.063 0 .13c-.002 2.602 0 5.204-.003 7.805c0 .42-.047.836-.215 1.227c-.278.64-.77 1.04-1.434 1.233q-.526.152-1.075.172c-.96.036-1.755-.6-1.92-1.544c-.14-.812.23-1.685 1.154-2.075c.357-.15.73-.232 1.108-.31c.287-.06.575-.116.86-.177q.574-.126.6-.714v-.15l.002-8.882c0-.123.013-.25.042-.37c.07-.285.273-.448.546-.518c.255-.066.515-.112.774-.165q1.1-.224 2.2-.444l2.27-.46l2.01-.403c.22-.043.442-.088.663-.106c.31-.025.523.17.554.482q.012.11.012.223q.003 2.866 0 5.732z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:tidal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.012 3.992L8.008 7.996L4.004 3.992L0 7.996L4.004 12l4.004-4.004L12.012 12l-4.004 4.004l4.004 4.004l4.004-4.004L12.012 12l4.004-4.004zm4.03 4.004l3.979-3.979L24 7.996l-3.979 3.979z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:bandcamp" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m0 18.75l7.437-13.5H24l-7.438 13.5z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify w-28 h-8 text-slate-600 hover:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:dolby" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564z" fill="currentColor"></path></svg>
</div>
</div>
</section>

<section className="relative py-24 px-6 lg:px-10 bg-[#050A14] overflow-hidden">
<div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6 relative z-10">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div className="w-6 h-6 rounded-full bg-yellow-500"></div>
<div className="w-6 h-6 rounded-full bg-pink-500"></div>
</div>
<span className="text-sm font-semibold text-slate-300">bentogrids</span>
</div>
<h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
                        Designed for <br/> Audio Immersion
                    </h2>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 border border-white/5">
<img alt="Ivan Volti" className="w-10 h-10 rounded-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-300" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Ivan Volti</span>
<span className="text-xs text-slate-400">Head of Design</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min lg:h-[800px]">

<div className="flex flex-col gap-6 h-full">

<div className="group relative h-[280px] bg-[#0A0F1C] border border-white/5 rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/10 transition-colors duration-300">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
<div className="relative z-10">
<h3 className="text-3xl font-display font-medium text-white leading-none">Space<br/>Grotesk</h3>
</div>
<div className="relative flex gap-2 z-10">
<div className="w-12 h-12 rounded-full bg-orange-500/80 blur-md group-hover:blur-sm transition-all duration-500"></div>
</div></div></div></div></section></div>
    </>
  );
}
