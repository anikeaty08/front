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



        // Initialize Icons
        lucide.createIcons();

        // Elements
        const toggle = document.getElementById('camera-toggle');
        const videos = [
            document.getElementById('video-feed-1'),
            document.getElementById('video-feed-2')
        ];
        
        let stream = null;

        // Camera Logic
        async function startCamera() {
            try {
                // Constraints per TDD (Low res for performance/blur)
                const constraints = {
                    video: {
                        facingMode: 'environment',
                        width: { ideal: 320 },
                        height: { ideal: 240 },
                        frameRate: { ideal: 15 } 
                    }
                };

                stream = await navigator.mediaDevices.getUserMedia(constraints);
                
                videos.forEach(video => {
                    video.srcObject = stream;
                    video.onloadedmetadata = () => {
                        video.play();
                        // Fade in video, hide fallback visually by overlaying
                        video.classList.remove('opacity-0');
                        video.classList.add('opacity-40'); // Keep it subtle
                    };
                });

            } catch (err) {
                console.error("Camera access denied or error:", err);
                toggle.checked = false;
                alert("Camera access is required for the liquid refraction effect. Please allow access or enjoy the generative fallback.");
            }
        }

        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
            videos.forEach(video => {
                video.srcObject = null;
                video.classList.remove('opacity-40');
                video.classList.add('opacity-0');
            });
        }

        // Toggle Handler
        toggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                startCamera();
            } else {
                stopCamera();
            }
        });

        // Mouse Movement Parallax (Subtle environmental motion)
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            videos.forEach(video => {
                // Slight opposite movement to create depth
                video.style.transform = `scale(1.5) translate(${x}px, ${y}px)`;
            });
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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40">
<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
</div>

<header className="text-center mb-16 space-y-4 max-w-md mx-auto z-10">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm border border-neutral-200 mb-4">
<svg className="lucide lucide-component text-neutral-600 w-5 h-5" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Liquid Glass Primitive
        </h1>
<p className="text-neutral-500 text-sm leading-relaxed">
            A camera-refractive interface element. Uses device video feed (if permitted) or generative gradients to create a living material surface.
        </p>
</header>

<main className="z-10 flex flex-col gap-12 relative gap-x-12 gap-y-12 items-center">

<div className="group relative w-full">

<div className="-inset-1 group-hover:opacity-40 transition duration-1000 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 rounded-full absolute blur"></div>
<button className="relative overflow-hidden w-full h-14 rounded-full transition-all duration-300 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400" id="btn-liquid-1" style="
                    box-shadow: 
                        0 20px 40px -10px rgba(0,0,0,0.1),
                        0 0 0 1px rgba(255,255,255,0.4),
                        inset 0 1px 1px rgba(255,255,255,0.9),
                        inset 0 -2px 10px rgba(0,0,0,0.02);
                ">

<div className="liquid-fallback absolute inset-[-50%] bg-neutral-100 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] liquid-layer">
<div className="blob absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/20 via-purple-100/30 to-transparent rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="blob absolute top-10 left-10 w-full h-full bg-gradient-to-tl from-pink-100/30 via-transparent to-blue-100/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>


<video autoplay="" className="camera-feed absolute inset-0 w-full h-full object-cover z-0 opacity-0 pointer-events-none" id="video-feed-1" muted="" playsinline="" style={{filter: 'blur(12px) contrast(1.2) brightness(1.1) saturate(1.2)', transform: 'scale(1.5) translate(0.49px, 7.11px)'}}></video>

<div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-sm mix-blend-overlay"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-white/30 to-transparent opacity-80"></div>

<span className="relative z-20 flex items-center justify-center gap-2.5 text-sm font-medium text-neutral-700 tracking-wide">
<svg className="lucide lucide-sparkles w-4 h-4 text-neutral-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Generate</span>
</span>
</button>
</div>

<div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md">
<div className="flex items-center gap-2">
<input className="peer appearance-none w-9 h-5 bg-neutral-200 rounded-full checked:bg-neutral-800 cursor-pointer transition-colors relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all checked:after:translate-x-4 shadow-inner" id="camera-toggle" type="checkbox"/>
<label className="text-xs font-medium text-neutral-500 select-none cursor-pointer" htmlFor="camera-toggle">Enable Camera Refraction</label>
</div>
</div>
<div className="max-w-xs text-center">
<p className="text-[10px] text-neutral-400 mt-2 font-medium tracking-tight uppercase">
                Privacy Note: Video is processed locally via CSS filters.
            </p>
</div>
</main>


    </>
  );
}
