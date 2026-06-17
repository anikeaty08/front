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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
    


    (function() {
        const vsSource = `
            attribute vec2 aPosition;
            varying vec2 vUv;
            void main() {
                vUv = aPosition * 0.5 + 0.5;
                gl_Position = vec4(aPosition, 0.0, 1.0);
            }
        `;

        const fsSource = `
            precision highp float;
            varying vec2 vUv;
            uniform sampler2D uImage;
            uniform float uProgress;

            void main() {
                // 4 Column logic
                float cols = 4.0;
                float colIndex = floor(vUv.x * cols);
                
                // Stagger animation timing per column
                float stagger = 0.15;
                float delay = colIndex * stagger;
                
                // Map global progress (0 -> 1) to localized column progress
                float localProgress = clamp((uProgress * (1.0 + 3.0 * stagger) - delay), 0.0, 1.0);
                
                // Cubic Out Easing
                float f = localProgress - 1.0;
                float ease = f * f * f + 1.0;

                // Reveal Mask
                if (vUv.y < 1.0 - ease) {
                    discard;
                }

                gl_FragColor = texture2D(uImage, vUv);
            }
        `;

        function initWebGLImage(originalImg) {
            if (originalImg.dataset.webglInit) return;
            originalImg.dataset.webglInit = "true";

            const img = new Image();
            img.crossOrigin = "anonymous";
            
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                
                canvas.className = originalImg.className;
                canvas.style.cssText = originalImg.style.cssText;
                
                originalImg.parentNode.insertBefore(canvas, originalImg);
                originalImg.style.display = 'none'; 

                const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
                if (!gl) return;

                const compileShader = (type, source) => {
                    const shader = gl.createShader(type);
                    gl.shaderSource(shader, source);
                    gl.compileShader(shader);
                    return shader;
                };

                const program = gl.createProgram();
                gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
                gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
                gl.linkProgram(program);
                gl.useProgram(program);

                const positionBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1, -1,  1, -1, -1,  1,
                    -1,  1,  1, -1,  1,  1
                ]), gl.STATIC_DRAW);

                const positionLocation = gl.getAttribLocation(program, "aPosition");
                gl.enableVertexAttribArray(positionLocation);
                gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

                const uProgressLoc = gl.getUniformLocation(program, "uProgress");

                let startTime = null;
                const duration = 1200; 
                let animating = false;

                const render = (time) => {
                    if (!startTime) startTime = time;
                    let progress = (time - startTime) / duration;
                    if (progress > 1.0) progress = 1.0;
                    
                    gl.viewport(0, 0, canvas.width, canvas.height);
                    gl.clearColor(0, 0, 0, 0);
                    gl.clear(gl.COLOR_BUFFER_BIT);

                    gl.uniform1f(uProgressLoc, progress);
                    gl.drawArrays(gl.TRIANGLES, 0, 6);

                    if (progress < 1.0) {
                        requestAnimationFrame(render);
                    } else {
                        animating = false;
                    }
                };

                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (!animating) {
                                animating = true;
                                startTime = null; 
                                requestAnimationFrame(render);
                            }
                            observer.unobserve(canvas);
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(canvas);
            };
            
            img.src = originalImg.src;
        }

        const images = document.querySelectorAll('img');
        images.forEach(initWebGLImage);
    })();

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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JxWpqc8BCimZ8u7Rswg3"></div>

</div>

<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
<div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div className="w-px h-full bg-current"></div>
<div className="w-px h-full bg-current hidden md:block"></div>
<div className="w-px h-full bg-current hidden lg:block"></div>
<div className="w-px h-full bg-current"></div>
</div>
</div>

<nav className="absolute top-0 w-full z-40 py-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-3xl transition-transform group-hover:scale-110" icon="solar:layers-linear"></iconify-icon>
<span className="text-xl tracking-tighter uppercase font-jakarta font-light">NexPay</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Products</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Solutions</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Developers</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Pricing</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:block text-sm font-medium opacity-70 hover:opacity-100 transition-opacity font-geist uppercase" href="#">Sign In</a>
<button className="opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl md:hidden" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 min-h-[90vh] flex flex-col justify-between overflow-hidden section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium opacity-60 mb-8 font-geist uppercase tracking-wider">
<span>API Platform</span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span>V. 3.0</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-6">

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.1s'}}>G</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.15s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.2s'}}>o</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.25s'}}>b</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.3s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.35s'}}>l</span></span>
</span>

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.4s'}}>E</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.45s'}}>n</span></span>
<span className="clip-text-container"><span className="animate-letter font-light font-jakarta pb-5" style={{animationDelay: '0.5s'}}>g</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.55s'}}>i</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.6s'}}>n</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.65s'}}>e</span></span>
</span>

<span className="flex text-black/30">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.7s'}}>f</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.75s'}}>o</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.8s'}}>r</span></span>
</span>

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.85s'}}>S</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.9s'}}>c</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.95s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '1.0s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '1.05s'}}>e</span></span>
</span>
</h1>
<div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-40 mt-20 hidden md:flex pointer-events-none">

<canvas className="w-full max-w-5xl object-cover h-[60vh] mix-blend-multiply grayscale" height="1520" style={{maskImage: 'linear-gradient(black 40%, transparent 100%)'}} width="2000"></canvas>
<img alt="Abstract Tech" className="w-full max-w-5xl object-cover h-[60vh] mix-blend-multiply grayscale" data-webgl-init="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/00b123a6-cd00-4859-b106-c3c10f888c8e/3840w.jpg" style={{maskImage: 'linear-gradient(black 40%, transparent 100%)', display: 'none'}}/>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
<div className="max-w-xs flex items-start gap-3">
<div className="relative mt-1 text-[#C48C56]">
<iconify-icon className="text-xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<div className="sonar-ring"></div>
</div>
<p className="text-base opacity-70 font-normal leading-relaxed font-geist">
                    Process transactions, integrate financial tools, and launch tailored revenue strategies.
                </p>
</div>
<div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
<p className="text-base opacity-70 font-normal leading-relaxed font-geist">
                    Powering your journey from early-stage startup to enterprise scale architecture.
                </p>
<div className="flex items-center gap-4">
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105" href="#">
<span className="font-geist uppercase">Start Building</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity font-geist uppercase border-b border-black/20 pb-1" href="#">Contact Sales</a>
</div>
</div>
</div>
</div>
<div className="w-full border-t border-black/10 mt-16 pt-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs tracking-widest font-medium opacity-50 uppercase">
<div className="flex items-center gap-3 font-geist"><span>01</span> GLOBAL PAYMENTS</div>
<div className="flex items-center gap-3 md:justify-center font-geist"><span>02</span> EMBEDDED FINANCE</div>
<div className="flex items-center gap-3 md:justify-end font-geist"><span>03</span> COMPLIANCE ENGINE</div>
</div>
</div>
</section>



    </>
  );
}
