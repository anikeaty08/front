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



    // Initialize WebGL
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');
    
    if (!gl) {
        alert('WebGL not supported in your browser');
    }
    
    // Vertex shader program
    const vsSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    `;
    
    // Fragment shader program (from your provided shader code)
    const fsSource = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        
        const float overallSpeed = 0.2;
        const float gridSmoothWidth = 0.015;
        const float axisWidth = 0.05;
        const float majorLineWidth = 0.025;
        const float minorLineWidth = 0.0125;
        const float majorLineFrequency = 5.0;
        const float minorLineFrequency = 1.0;
        const vec4 gridColor = vec4(0.5);
        const float scale = 5.0;
        // Modified color to purple/blue
        const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
        // Lines are thinner now
        const float minLineWidth = 0.01;
        const float maxLineWidth = 0.2;
        const float lineSpeed = 1.0 * overallSpeed;
        const float lineAmplitude = 1.0;
        const float lineFrequency = 0.2;
        const float warpSpeed = 0.2 * overallSpeed;
        const float warpFrequency = 0.5;
        const float warpAmplitude = 1.0;
        const float offsetFrequency = 0.5;
        const float offsetSpeed = 1.33 * overallSpeed;
        const float minOffsetSpread = 0.6;
        const float maxOffsetSpread = 2.0;
        const int linesPerGroup = 16;
        
        #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
        #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
        #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
        #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))
        
        float drawGridLines(float axis) {
            return drawCrispLine(0.0, axisWidth, axis)
                  + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
                  + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
        }
        
        float drawGrid(vec2 space) {
            return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
        }
        
        float random(float t) {
            return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;   
        }
        
        float getPlasmaY(float x, float horizontalFade, float offset) {
            return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
        }
        
        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec4 fragColor;
            
            vec2 uv = fragCoord.xy / iResolution.xy;
            vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
            
            float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
            float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
        
            // Wind/turbulence effect
            space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
            space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
            
            vec4 lines = vec4(0.0);
            // Updated background colors to blue/purple gradient
            vec4 bgColor1 = vec4(0.1, 0.1, 0.3, 1.0);
            vec4 bgColor2 = vec4(0.3, 0.1, 0.5, 1.0);
            
            for(int l = 0; l < linesPerGroup; l++) {
                float normalizedLineIndex = float(l) / float(linesPerGroup);
                float offsetTime = iTime * offsetSpeed;
                float offsetPosition = float(l) + space.x * offsetFrequency;
                float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
                float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
                float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
                float linePosition = getPlasmaY(space.x, horizontalFade, offset);
                float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);
                
                float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
                vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
                float circle = drawCircle(circlePosition, 0.01, space) * 4.0;
                
                line = line + circle;
                lines += line * lineColor * rand;
            }
            
            fragColor = mix(bgColor1, bgColor2, uv.x);
            fragColor *= verticalFade;
            fragColor.a = 1.0;
            // Debug grid:
            // fragColor = mix(fragColor, gridColor, drawGrid(space));
            fragColor += lines;
            
            gl_FragColor = fragColor;
        }
    `;
    
    // Initialize shaders
    function initShaderProgram(gl, vsSource, fsSource) {
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
        
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }
        
        return shaderProgram;
    }
    
    function loadShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        
        return shader;
    }
    
    // Create shader program
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    
    // Setup geometry (a quad that fills the screen)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, -1.0,
          1.0, -1.0,
        -1.0,  1.0,
          1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
    // Setup attributes and uniforms
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
            time: gl.getUniformLocation(shaderProgram, 'iTime'),
        },
    };
    
    // Resize canvas to match window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Animation loop
    let startTime = Date.now();
    function render() {
        const currentTime = (Date.now() - startTime) / 1000; // time in seconds
        
        // Clear the canvas
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        // Use the shader program
        gl.useProgram(programInfo.program);
        
        // Set uniforms
        gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
        gl.uniform1f(programInfo.uniformLocations.time, currentTime);
        
        // Set vertex attributes
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            2,         // 2 components per vertex
            gl.FLOAT,  // the data is 32bit floats
            false,     // don't normalize
            0,         // stride
            0          // offset
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        
        // Draw the quad
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
        requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);
  


        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute w-full h-full top-0 left-0 -z-10" height="885" id="canvas" width="1158">

</canvas></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-purple-900/40 rounded-full blur-[128px]"></div>
<div className="absolute top-[30%] right-[0%] w-[30rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[96px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-fuchsia-900/20 rounded-full blur-[128px]"></div>
</div>

<header className="fixed z-50 flex w-full pt-0 top-0 left-0 justify-center">

<div className="bg-[#0f081e]/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-purple-900/20 px-12 pb-4 pt-6 rounded-b-[2rem] flex items-center gap-12 sm:gap-24 transition-all duration-300">
<nav className="flex gap-8 sm:gap-12 text-xs sm:text-sm font-medium tracking-wide text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#">HOME</a>
<a className="hover:text-white transition-colors duration-300" href="#about">ABOUT</a>
</nav>

<div className="hidden sm:flex h-1.5 w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full mb-2"></div>
<nav className="flex gap-8 sm:gap-12 text-xs sm:text-sm font-medium tracking-wide text-gray-400">
<a className="hover:text-white transition-colors duration-300" href="#work">WORK</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">CONTACT</a>
</nav>
</div>
</header>

<main className="relative z-10">

<section className="min-h-screen flex md:pt-20 pt-32 pb-20 relative items-center">
<div className="container mx-auto px-6 md:px-12">
<div className="grid gap-y-12 items-center gap-x-0 lg:grid-cols-2">

<div className="order-2 lg:order-1 flex flex-col space-y-8 items-start">
<div className="space-y-4">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">Hi, I’m Wojtek<br/> <span className="bg-clip-text animate-gradient-x text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-fuchsia-300">Web Designer.</span></h1>
<p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
                                A creative web designer with over 5 years of crafting immersive digital experiences. I merge artistic vision with technical precision to build user-centric interfaces.
                            </p>
</div>
<div className="flex flex-wrap items-center gap-6 pt-4">

<div className="btn-wrapper">
<a aria-label="Contact" className="btn px-6 py-3.5 md:px-8 md:py-3.5" href="#contact">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">

<div className="txt-1">
<span className="btn-letter">C</span>
<span className="btn-letter">o</span>
<span className="btn-letter">n</span>
<span className="btn-letter">t</span>
<span className="btn-letter">a</span>
<span className="btn-letter">c</span>
<span className="btn-letter">t</span>
</div>

<div className="txt-2">
<span className="btn-letter">M</span>
<span className="btn-letter">e</span>
<span className="btn-letter">s</span>
<span className="btn-letter">s</span>
<span className="btn-letter">a</span>
<span className="btn-letter">g</span>
<span className="btn-letter">e</span>
</div>
</div>
</a>
</div>
</div>

<div className="pt-8 flex gap-6 text-gray-500/60">
<svg className="lucide lucide-figma w-7 h-7 hover:text-white transition-colors duration-300" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-code-2 w-7 h-7 hover:text-white transition-colors duration-300" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<svg className="lucide lucide-palette w-7 h-7 hover:text-white transition-colors duration-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>

<div className="order-1 lg:order-2 flex lg:justify-end relative justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-500/20 blur-[80px] rounded-full scale-90"></div>
<div className="relative w-full max-w-md aspect-[4/5] md:aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm group shadow-2xl shadow-black/50">

<img alt="Profile of Elena" className="object-center group-hover:scale-110 transition-transform duration-700 contrast-125 w-full h-full object-cover saturate-110 brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1155ed39-476c-476b-9805-6bc791a43b9b_1600w.png"/>
<div className="bg-gradient-to-t from-[#050505] to-transparent w-full h-1/2 absolute bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-32 pb-16 overflow-hidden bg-[#050505]" id="about">
<div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="container z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Ab<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">out</span>
</h2>
<div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
<p className="md:text-2xl leading-relaxed text-xl font-light text-gray-300">Hi! My name is Wojtek and I’m a beginner web designer with a creative mind and a passion for building. Ever since I discovered the world of design and code, I knew this was something I wanted to do every day. I specialize in designing modern, functional, and responsive websites that not only look great — they work. Even though I’m just starting out, I’m constantly learning, exploring new tools, and pushing myself to get better — because I truly believe passion is the best fuel for growth. I focus on clarity, usability, and clean design. Every project is a new opportunity to learn, grow, and give it 110%. If you’re looking for someone who designs with heart, a fresh perspective, and full dedication — you just found me.</p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-8 w-full border-t border-white/5 mt-8">
<div className="flex flex-col gap-1">
<span className="md:text-4xl text-3xl font-semibold text-white">1+</span>
<span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Years Exp.</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl md:text-4xl font-semibold text-white">50+</span>
<span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Projects</span>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col gap-1">
<span className="text-3xl md:text-4xl font-semibold text-white">100%</span>
<span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Satisfaction</span>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto mt-32 mb-0 h-[500px] flex flex-col items-center justify-center overflow-visible pointer-events-none select-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full"></div>

<div className="flex justify-between w-full max-w-xl px-4 mb-24 relative z-20">

<div className="relative group animate-[bounce_3s_infinite] delay-0">
<div className="absolute inset-0 bg-purple-500/30 blur-md rounded-full opacity-50"></div>
<div className="relative p-3 rounded-2xl bg-[#0a0514] border border-white/10 text-gray-400 shadow-lg shadow-purple-900/20">
<svg className="lucide lucide-figma w-6 h-6" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
</div>

<div className="relative group animate-[bounce_3.5s_infinite] delay-75">
<div className="absolute inset-0 bg-cyan-500/30 blur-md rounded-full opacity-50"></div>
<div className="relative p-3 rounded-2xl bg-[#0a0514] border border-white/10 text-gray-400 shadow-lg shadow-cyan-900/20">
<svg className="lucide lucide-atom w-6 h-6" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
</div>

<div className="relative group animate-[bounce_4s_infinite] delay-100">
<div className="absolute inset-0 bg-green-500/30 blur-md rounded-full opacity-50"></div>
<div className="relative p-3 rounded-2xl bg-[#0a0514] border border-white/10 text-gray-400 shadow-lg shadow-green-900/20">
<svg className="lucide lucide-server w-6 h-6" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
</div>

<div className="relative group animate-[bounce_3.2s_infinite] delay-150">
<div className="absolute inset-0 bg-yellow-500/30 blur-md rounded-full opacity-50"></div>
<div className="relative p-3 rounded-2xl bg-[#0a0514] border border-white/10 text-gray-400 shadow-lg shadow-yellow-900/20">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>

<div className="relative group animate-[bounce_3.8s_infinite] delay-200">
<div className="absolute inset-0 bg-pink-500/30 blur-md rounded-full opacity-50"></div>
<div className="relative p-3 rounded-2xl bg-[#0a0514] border border-white/10 text-gray-400 shadow-lg shadow-pink-900/20">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>
</div>

<svg className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] h-[220px] z-10 opacity-40 overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="streamGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: '0'}}></stop>
<stop offset="40%" style={{stopColor: '#a855f7', stopOpacity: '0.6'}}></stop>
<stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>

<path className="animate-pulse" d="M5% 0 C 5% 60, 50% 60, 50% 100" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5"></path>
<path className="animate-pulse" d="M28% 0 C 28% 60, 50% 60, 50% 100" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" style={{animationDelay: '0.5s'}}></path>
<path className="animate-pulse" d="M50% 0 L 50% 100" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" style={{animationDelay: '1s'}}></path>
<path className="animate-pulse" d="M72% 0 C 72% 60, 50% 60, 50% 100" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" style={{animationDelay: '1.5s'}}></path>
<path className="animate-pulse" d="M95% 0 C 95% 60, 50% 60, 50% 100" fill="none" stroke="url(#streamGrad)" strokeWidth="1.5" style={{animationDelay: '2s'}}></path>
</svg>

<div className="relative z-30 mt-4">

<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>

<div className="relative w-28 h-28 bg-[#0a0514] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] z-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>

<svg className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M18 7L6 7L12 12L6 17L18 17"></path>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 w-[550px] h-[180px] border border-purple-500/20 rounded-[50%] animate-spin-slow z-10">

<div className="absolute top-[10%] left-[20%] w-8 h-8 bg-[#0a0514] border border-purple-500/30 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)] animate-spin-slow-reverse">
<svg className="lucide lucide-braces w-4 h-4 text-purple-300" data-lucide="braces" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
</div>
<div className="absolute bottom-[10%] right-[20%] w-6 h-6 bg-[#0a0514] border border-purple-500/30 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)] animate-spin-slow-reverse">
<div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[400px] h-[120px] border border-cyan-500/20 rounded-[50%] animate-spin-slow-reverse z-10">
<div className="absolute bottom-[5%] left-[30%] w-8 h-8 bg-[#0a0514] border border-cyan-500/30 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.4)] animate-spin-slow">
<svg className="lucide lucide-database w-4 h-4 text-cyan-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-[#050505] pt-24 pb-24 relative" id="work">
<div className="container mx-auto px-6 md:px-12 relative z-10">

<div className="text-center mb-24 space-y-4">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
                        Recent <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">Work</span>
</h2>
<p className="text-gray-400 text-lg md:text-xl font-light">A collection of projects I've worked on.</p>
</div>
<div className="flex flex-col gap-32">

<div className="group grid lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-6 lg:order-1 order-2 relative z-10">
<span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">Featured Project</span>
<h3 className="md:text-4xl text-3xl font-bold text-white tracking-tight mb-6">Wedding's</h3>

<div className="bg-[#100b1d]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl shadow-purple-900/10 mb-6 lg:-mr-16 hover:border-purple-500/30 transition-colors duration-300">
<p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                                </p>
</div>

<div className="flex items-center gap-6 text-gray-400 pl-2">
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-github w-6 h-6" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-external-link w-6 h-6" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-6 lg:order-2 order-1">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl h-[300px] md:h-[400px] group-hover:border-purple-500/20 transition-all duration-500">
<div className="z-10 bg-indigo-500/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://karlhussey-elite-showcase.lovable.app'" role="button"></div>

<img alt="Project 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23e8ee5e-8f16-413a-85a3-9aebbc20cc47_1600w.png"/>
</div>
</div>
</div>

<div className="group grid lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-6 lg:order-1 order-1">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl h-[300px] md:h-[400px] group-hover:border-purple-500/20 transition-all duration-500">
<div className="z-10 bg-indigo-500/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://ak-beauty-sport-pulse.lovable.app'" role="button"></div>

<img alt="Project 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba5a4504-e6ae-4e67-b2a6-c00272b198d2_1600w.png"/>
</div>
</div>

<div className="lg:col-span-6 lg:order-2 order-2 relative z-10 lg:text-right flex flex-col lg:items-end">
<span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">Featured Project</span>
<h3 className="md:text-4xl text-3xl font-bold text-white tracking-tight mb-6">Limited Editions</h3>

<div className="bg-[#100b1d]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl shadow-purple-900/10 mb-6 lg:-ml-16 lg:text-left hover:border-purple-500/30 transition-colors duration-300">
<p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    A comprehensive data visualization platform for enterprise teams. Features real-time collaborative editing, dark mode support, and exportable reports. Built with React and D3.js for seamless performance.
                                </p>
</div>

<div className="flex items-center gap-6 text-gray-400 pr-2">
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-github w-6 h-6" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-linkedin w-6 h-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-external-link w-6 h-6" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0514]" id="contact">
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center space-y-12">
<div className="space-y-4">
<span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">What's Next?</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
                            Get In <span className="text-purple-400">Touch</span>
</h2>
<p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
                            I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                        </p>
</div>
<div className="flex justify-center">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#e0e0e0] hover:w-64 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] font-medium text-black bg-gradient-to-br from-gray-400 to-gray-600 w-48 h-14 rounded-full pr-8 pl-8 relative" href="mailto:wojciech.zmuda9@gmail.com">
<span className="cursor-pointer mr-2" onclick="window.location.href='/wojciech.zmuda9@gmail.com';window.location.href='/wojciech.zmuda9@gmail.com';window.location.href='/mailto:wojciech.zmuda9@gmail.com'" role="button">Say Hello</span>
<svg className="lucide lucide-mail transition-transform group-hover:translate-x-1 duration-300 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 bg-[#020202] text-sm relative z-10">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-gray-600">© 2024 Elena Vance. Designed with Tailwind.</span>
<div className="flex gap-8">
<a className="text-gray-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
