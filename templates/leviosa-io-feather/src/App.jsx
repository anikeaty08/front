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
obsidian: '#020408',
charcoal: '#0B0F17',
magic: {
500: '#8b5cf6', // Violet
400: '#a78bfa',
300: '#c4b5fd',
600: '#7c3aed',
900: '#4c1d95',
},
electric: {
500: '#3b82f6', // Blue
400: '#60a5fa',
},
emerald: {
400: '#34d399',
500: '#10b981',
900: '#064e3b',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
display: ['Cinzel', 'serif'],
},
animation: {
'float': 'float 15s ease-in-out infinite',
'float-delayed': 'float 18s ease-in-out infinite reverse',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-20px) rotate(5deg)' },
}
}
}
}
}



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
  


        // Icons
        lucide.createIcons();

        // Scroll Progress
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scrollProgress").style.transform = `scaleX(${scrolled / 100})`;
            
            // Sticky CTA Logic
            const stickyCta = document.getElementById('sticky-cta');
            if (winScroll > 600) {
                stickyCta.classList.remove('translate-y-full');
            } else {
                stickyCta.classList.add('translate-y-full');
            }
        });

        // ROI Calculator Logic
        document.addEventListener('DOMContentLoaded', () => {
            const leadsInput = document.getElementById('leadsInput');
            const convInput = document.getElementById('convInput');
            const hoursInput = document.getElementById('hoursInput');
            const dealInput = document.getElementById('dealInput');

            const leadsDisplay = document.getElementById('leadsDisplay');
            const convDisplay = document.getElementById('convDisplay');
            const hoursDisplay = document.getElementById('hoursDisplay');

            const recoveredResult = document.getElementById('recoveredResult');
            const revenueResult = document.getElementById('revenueResult');
            const timeResult = document.getElementById('timeResult');
            const roiResult = document.getElementById('roiResult');
            const annualResult = document.getElementById('annualResult');

            function calculateROI() {
                const leads = parseInt(leadsInput.value);
                const conv = parseInt(convInput.value);
                const hours = parseInt(hoursInput.value);
                const deal = parseInt(dealInput.value) || 0;

                // Update displays
                leadsDisplay.textContent = leads;
                convDisplay.textContent = conv + '%';
                hoursDisplay.textContent = hours;

                // Formulas from user request
                const currentRevenue = leads * (conv / 100) * deal;
                const recoveredLeads = Math.floor(leads * 0.8 * 0.4);
                // The provided code snippet defined AI Revenue as current + recovered
                const aiRevenue = currentRevenue + (recoveredLeads * deal);
                const additionalRevenue = aiRevenue - currentRevenue;
                
                const timeSaved = hours * 0.7;
                const costSavings = timeSaved * 50; // $50/hr
                const investment = 4999; // as per snippet divisor
                const totalROI = ((aiRevenue + costSavings - currentRevenue) / investment) * 100;

                // Update UI
                recoveredResult.innerHTML = `+${recoveredLeads}<span class="text-sm font-normal opacity-70">/mo</span>`;
                revenueResult.textContent = '$' + additionalRevenue.toLocaleString();
                timeResult.innerHTML = `${Math.round(timeSaved)} <span class="text-sm font-normal opacity-70">hrs</span>`;
                roiResult.textContent = Math.round(totalROI) + '%';
                annualResult.textContent = '$' + (additionalRevenue * 12).toLocaleString();
            }

            // Listeners
            [leadsInput, convInput, hoursInput, dealInput].forEach(el => {
                el.addEventListener('input', calculateROI);
            });

            // Init
            calculateROI();
        });

        // Modals
        function openDemoModal() {
            document.getElementById('demo-modal').classList.remove('hidden');
        }
        function closeDemoModal() {
            document.getElementById('demo-modal').classList.add('hidden');
        }
        function openTurnkeyModal() {
            document.getElementById('turnkey-modal').classList.remove('hidden');
        }
        function closeTurnkeyModal() {
            document.getElementById('turnkey-modal').classList.add('hidden');
        }

        // Chat
        function toggleChat() {
            const chat = document.getElementById('chat-window');
            if (chat.classList.contains('hidden')) {
                chat.classList.remove('hidden');
                chat.classList.add('flex');
            } else {
                chat.classList.add('hidden');
                chat.classList.remove('flex');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute w-full h-full top-0 left-0 -z-10" height="843" id="canvas" width="1205">

</canvas></div>

<div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-electric-500 to-magic-500 z-[60] w-full scale-x-0 scroll-progress-bar transition-transform duration-100 ease-out" id="scrollProgress" style={{transform: 'scaleX(0.846132)'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-[80vh] bg-gradient-to-b from-electric-500 via-magic-500 to-transparent opacity-40 blur-[1px]"></div>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40rem] h-[60vh] bg-electric-500/5 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-feather w-5 h-5 text-magic-400 rotate-[-15deg]" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<span className="font-serif font-medium text-lg tracking-tight text-white">Leviosa</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400" style={{}}>
<a className="hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#calculator">ROI</a>
<a className="hover:text-white transition-colors" href="#pricing">Investment</a>
</div>
<button className="px-4 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white transition-all" onclick="openDemoModal()">
                Get Access
            </button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-24 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="max-w-5xl mx-auto px-6 text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-magic-500/30 bg-magic-500/10 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-magic-400 animate-pulse"></span>
<span className="text-xs font-medium text-magic-300 uppercase tracking-widest font-display">Intelligence Deployed</span>
</div>
<h1 className="leading-[1.1] md:text-7xl lg:text-8xl text-5xl text-gray-300 tracking-tight font-serif mb-8 relative">
                Your AI Agents. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500" style={{}}>Your Lead Engine.</span>
</h1>
<p className="leading-relaxed md:text-xl text-lg font-light text-slate-200 max-w-2xl mr-auto mb-10 ml-auto">
                We deploy intelligent neural agents that revive cold leads, qualify prospects, and book meetings—automatically. <span className="text-white">It's not magic, it's Leviosa.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-obsidian rounded text-sm font-medium hover:bg-slate-200 transition-all w-full sm:w-auto overflow-hidden" onclick="openDemoModal()" style={{}}>
<span className="relative z-10 flex items-center justify-center gap-2">
                        Start Demo
                        <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2" onclick="openTurnkeyModal()">
                    Turnkey Solution
                </button>
</div>
</div>
</header>

<section className="relative z-10 py-12 border-y border-white/5 bg-charcoal/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8 font-display" style={{}}>Powering Growth For</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-serif text-xl font-bold tracking-tighter text-white">AcmeCorp</span>
<span className="font-sans text-xl font-bold tracking-tight text-white italic">Stark.ai</span>
<span className="font-serif text-xl font-bold text-white">WAYNE</span>
<span className="font-mono text-lg font-bold text-white">CYBERDYNE</span>
<span className="font-sans text-xl font-black tracking-tighter text-white">MASSIVE</span>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center">
<div className="glass-panel p-8 rounded-lg">
<div className="text-4xl font-serif text-white mb-2 font-medium">3–5×</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" style={{}}>More Booked Calls</div>
</div>
<div className="glass-panel p-8 rounded-lg">
<div className="text-4xl font-serif text-white mb-2 font-medium">40%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" style={{}}>Conversion Lift</div>
</div>
<div className="glass-panel p-8 rounded-lg">
<div className="text-4xl font-serif text-white mb-2 font-medium">24/7</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" style={{}}>Agent Uptime</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-charcoal/50" id="problem">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-xs font-medium text-red-400 uppercase tracking-widest font-display mb-4 block" style={{}}>The Friction</span>
<h3 className="font-serif text-3xl text-white mb-6">The Old Way is Broken</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-red-900/20 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Lead Decay</h4>
<p className="text-sm text-slate-400" style={{}}>Leads go cold within 5 minutes. Humans are too slow.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-red-900/20 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Inconsistent Follow-up</h4>
<p className="text-sm text-slate-400" style={{}}>Sales reps give up after 2 attempts. Revenue is lost.</p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-xl border-magic-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<svg className="lucide lucide-sparkles w-32 h-32 text-magic-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-magic-400 uppercase tracking-widest font-display mb-4 block">The Leviosa Way</span>
<h3 className="font-serif text-3xl text-white mb-6">Instant Omnipresence</h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-3 text-slate-200" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-magic-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Response time under 30 seconds</span>
</li>
<li className="flex items-center gap-3 text-slate-200" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-magic-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Infinite follow-up sequences</span>
</li>
<li className="flex items-center gap-3 text-slate-200" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-magic-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Perfect qualification every time</span>
</li>
</ul>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-electric-400 uppercase tracking-widest font-display mb-2">The Arsenal</span>
<h2 className="font-serif text-4xl text-white">Conversion Tools</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded hover:border-electric-500/50 transition-colors group">
<div className="w-12 h-12 rounded bg-electric-500/10 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
<svg className="lucide lucide-bot w-6 h-6 text-electric-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-lg text-white font-serif mb-2">Neural Chatbot</h3>
<p className="text-sm text-slate-400" style={{}}>Context-aware conversational AI that lives on your site.</p>
</div>
<div className="glass-panel p-6 rounded hover:border-electric-500/50 transition-colors group">
<div className="w-12 h-12 rounded bg-electric-500/10 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
<svg className="lucide lucide-mail w-6 h-6 text-electric-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h3 className="text-lg text-white font-serif mb-2">Email Retargeting</h3>
<p className="text-sm text-slate-400" style={{}}>Automated sequences that reactivate dormant database leads.</p>
</div>
<div className="glass-panel p-6 rounded hover:border-electric-500/50 transition-colors group">
<div className="w-12 h-12 rounded bg-electric-500/10 flex items-center justify-center mb-4 group-hover:bg-electric-500/20 transition-colors">
<svg className="lucide lucide-calendar-days w-6 h-6 text-electric-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-lg text-white font-serif mb-2">Auto-Scheduler</h3>
<p className="text-sm text-slate-400" style={{}}>Seamlessly integrates with Cal.com and Calendly.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-charcoal border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl text-white mb-12 text-center">Evidence of Magic</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-xl">
<img alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="glass-panel relative p-8 h-full flex flex-col justify-end min-h-[300px] border-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent">
<span className="text-xs text-magic-400 mb-2 uppercase tracking-wider">SaaS Enterprise</span>
<h3 className="text-2xl text-white font-serif mb-2">ScaleFlow Inc.</h3>
<p className="text-slate-300 mb-4 text-sm" style={{}}>Automated 4,000+ outbound touches per day, resulting in a 312% increase in qualified demos.</p>
<div className="flex gap-4">
<span className="text-white font-bold text-lg">+312% <span className="text-xs font-normal text-slate-400" style={{}}>Demos</span></span>
<span className="text-white font-bold text-lg">-60% <span className="text-xs font-normal text-slate-400" style={{}}>CAC</span></span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="glass-panel relative p-8 h-full flex flex-col justify-end min-h-[300px] border-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent">
<span className="text-xs text-magic-400 mb-2 uppercase tracking-wider">Agency</span>
<h3 className="text-2xl text-white font-serif mb-2">Vertex Media</h3>
<p className="text-slate-300 mb-4 text-sm" style={{}}>Replaced their entire SDR team with Leviosa Agents, saving $120k/year while doubling volume.</p>
<div className="flex gap-4">
<span className="text-white font-bold text-lg">$120k <span className="text-xs font-normal text-slate-400" style={{}}>Saved</span></span>
<span className="text-white font-bold text-lg">2x <span className="text-xs font-normal text-slate-400" style={{}}>Volume</span></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-gradient-to-b from-charcoal to-obsidian border-b border-white/5" id="calculator">
<div className="max-w-5xl mx-auto px-6">
<div className="glass-panel p-8 md:p-10 rounded-2xl border border-magic-500/20 bg-gradient-to-b from-white/5 to-transparent shadow-2xl">

<div className="flex items-center gap-4 mb-10">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-magic-600 to-magic-900 flex items-center justify-center shadow-lg border border-white/10 shrink-0">
<svg className="lucide lucide-calculator w-7 h-7 text-white" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<div className="">
<h3 className="text-2xl md:text-3xl font-serif text-white mb-1">AI ROI Calculator</h3>
<p className="text-slate-400 text-sm" style={{}}>Calculate your potential returns with intelligent automation.</p>
</div>
</div>
<div className="space-y-8">

<div className="grid md:grid-cols-2 gap-10">

<div className="space-y-8">

<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-white">Monthly Leads</label>
<span className="text-sm font-mono text-magic-400" id="leadsDisplay">100</span>
</div>
<input className="w-full accent-magic-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer" id="leadsInput" max="1000" min="10" step="10" type="range" value="100"/>
</div>

<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-white">Current Conversion Rate</label>
<span className="text-sm font-mono text-magic-400" id="convDisplay">20%</span>
</div>
<input className="w-full accent-magic-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer" id="convInput" max="50" min="5" step="1" type="range" value="20"/>
</div>

<div className="">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-semibold text-white">Hours Spent Follow-up/Mo</label>
<span className="text-sm font-mono text-magic-400" id="hoursDisplay">40</span>
</div>
<input className="w-full accent-magic-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer" id="hoursInput" max="160" min="10" step="5" type="range" value="40"/>
</div>

<div className="">
<label className="text-sm font-semibold text-white mb-4 block">Average Deal Value ($)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" style={{}}>$</span>
<input className="w-full bg-obsidian border border-white/10 rounded-lg py-3 pl-8 pr-4 text-white focus:outline-none focus:border-magic-500 transition-colors" id="dealInput" type="number" value="5000"/>
</div>
</div>
</div>

<div className="space-y-6">
<h4 className="text-lg font-bold text-white border-b border-white/10 pb-4">Your Potential Results:</h4>
<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-magic-900/20 border border-magic-500/20">
<p className="text-xs text-slate-400 mb-1" style={{}}>Leads Recovered</p>
<p className="text-2xl font-bold text-magic-400" id="recoveredResult">+32<span className="text-sm font-normal opacity-70">/mo</span></p>
</div>

<div className="p-4 rounded-lg bg-emerald-900/20 border border-emerald-500/20" style={{}}>
<p className="text-xs text-slate-400 mb-1" style={{}}>Added Monthly Revenue</p>
<p className="text-2xl font-bold text-emerald-400" id="revenueResult" style={{}}>$160,000</p>
</div>

<div className="p-4 rounded-lg bg-electric-900/20 border border-electric-500/20">
<p className="text-xs text-slate-400 mb-1" style={{}}>Time Saved</p>
<p className="text-2xl font-bold text-electric-400" id="timeResult">28 <span className="text-sm font-normal opacity-70">hrs</span></p>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<p className="text-xs text-slate-400 mb-1" style={{}}>Total ROI</p>
<p className="text-2xl font-bold text-white" id="roiResult">3229%</p>
</div>
</div>

<div className="p-8 rounded-xl bg-gradient-to-r from-magic-600 to-magic-900 text-white shadow-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20">
<svg className="lucide lucide-trending-up w-24 h-24" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-sm font-medium opacity-90 mb-2 uppercase tracking-wide">Projected Annual Impact</p>
<p className="text-4xl md:text-5xl font-bold font-serif mb-2" id="annualResult">$1,920,000</p>
<p className="text-sm opacity-80">in additional revenue per year</p>
</div>
<button className="w-full py-4 bg-white text-obsidian font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" onclick="openDemoModal()" style={{}}>
                                Get Your Custom AI Strategy
                                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-charcoal/30" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium text-magic-400 uppercase tracking-widest font-display mb-2">The Ritual</span>
<h2 className="font-serif text-4xl text-white">How It Works</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="relative bg-obsidian md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-white/5">
<div className="w-10 h-10 bg-obsidian border border-magic-500/50 rounded-full flex items-center justify-center text-magic-400 font-serif mb-4 mx-auto relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">I</div>
<h4 className="text-center text-white font-medium mb-2">Integration</h4>
<p className="text-center text-xs text-slate-400" style={{}}>Connect to your CRM and calendar in 2 clicks.</p>
</div>
<div className="relative bg-obsidian md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-white/5">
<div className="w-10 h-10 bg-obsidian border border-magic-500/50 rounded-full flex items-center justify-center text-magic-400 font-serif mb-4 mx-auto relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">II</div>
<h4 className="text-center text-white font-medium mb-2">Training</h4>
<p className="text-center text-xs text-slate-400" style={{}}>AI ingests your best calls and learns your pitch.</p>
</div>
<div className="relative bg-obsidian md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-white/5">
<div className="w-10 h-10 bg-obsidian border border-magic-500/50 rounded-full flex items-center justify-center text-magic-400 font-serif mb-4 mx-auto relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">III</div>
<h4 className="text-center text-white font-medium mb-2">Activation</h4>
<p className="text-center text-xs text-slate-400" style={{}}>Agents begin outreach and handling inbound.</p>
</div>
<div className="relative bg-obsidian md:bg-transparent p-4 md:p-0 rounded border md:border-0 border-white/5">
<div className="w-10 h-10 bg-obsidian border border-magic-500/50 rounded-full flex items-center justify-center text-magic-400 font-serif mb-4 mx-auto relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">IV</div>
<h4 className="text-center text-white font-medium mb-2">Optimization</h4>
<p className="text-center text-xs text-slate-400" style={{}}>Self-improving loops increase conversion daily.</p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-white">Investment</h2>
<p className="text-slate-400 mt-4" style={{}}>Simple pricing for complex intelligence.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="glass-panel hover:border-white/10 transition-all flex flex-col border-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl text-white font-serif mb-2">Premium</h3>
<div className="text-3xl font-bold text-white mb-6">$2499 setup</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> 1 AI Agent (Recovery)
  </li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Weekly reports
</li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Calendar + CRM sync
  </li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Select Plan</button>
</div>

<div className="glass-panel border-magic-500/50 flex flex-col border rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_50px_-10px_rgba(139,92,246,0.15)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-magic-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
    Most Popular</div>
<h3 className="text-xl text-white font-serif mb-2">Ultra</h3>
<div className="text-3xl font-bold text-white mb-6">$5000 setup</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> 2 Agents (Recovery + New leads)
</li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> No-Show redustion flows
</li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Custom Dashboards
</li>
</ul>
<button className="w-full py-3 rounded bg-magic-600 text-white text-sm hover:bg-magic-500 transition-colors font-medium">Get Access</button>
</div>

<div className="glass-panel p-8 rounded-xl border border-white/5 hover:border-white/10 transition-all flex flex-col">
<h3 className="text-xl text-white font-serif mb-2" style={{}}>Enterprise</h3>
<div className="text-3xl font-bold text-white mb-6">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3">
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> 3-5 AI Employees
</li>
<li className="flex gap-3 text-sm text-slate-300" style={{}}>
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> Dedicated Engineer
</li>
<li className="flex gap-3 text-sm text-slate-300" style={{}}>
<svg className="lucide lucide-feather lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="feather" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg> White Labeling
                        </li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest font-display mb-4 block" style={{}}>About Us</span>
<h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Engineers of the Invisible</h2>
<p className="text-slate-400 leading-relaxed mb-8" style={{}}>
                We are a collective of data scientists, behavioral psychologists, and automation experts. We believe the future of sales is not human-led, but human-curated. Our mission is to remove the drudgery of prospecting so you can focus on the art of closing.
            </p>
<div className="w-16 h-1 bg-gradient-to-r from-transparent via-magic-500 to-transparent mx-auto"></div>
</div>
</section>

<section className="relative z-10 py-24 bg-gradient-to-b from-charcoal to-obsidian">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="glass-panel p-10 rounded-2xl border-white/5">
<h3 className="font-serif text-2xl text-white mb-4">Not Ready to Buy?</h3>
<p className="text-slate-400 mb-8" style={{}}>Download our "State of AI Sales 2024" report and learn how your competitors are using automation.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-obsidian border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-magic-500" placeholder="Email Address" type="email"/>
<button className="bg-white text-obsidian px-6 py-3 rounded text-sm font-medium hover:bg-slate-200" style={{}}>Download PDF</button>
</form>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden" id="manifesto">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                "We believe that human creativity is too valuable to be spent on robotic tasks."
            </h2>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl text-white font-serif text-center mb-16">Don't take our word for it</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass-panel p-8 rounded-xl">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 italic mb-6" style={{}}>"I was skeptical about AI handling our premium leads. But the personalization is indistinguishable from my best rep. It's uncanny."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700" style={{}}></div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-xs" style={{}}>CMO, TechFlow</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-xl">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-magic-400 fill-magic-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 italic mb-6" style={{}}>"Setup took 15 minutes. By the next morning, my calendar had 4 qualified meetings booked. ROI was positive in day 2."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700" style={{}}></div>
<div>
<div className="text-white text-sm font-medium">Marcus Chen</div>
<div className="text-slate-500 text-xs" style={{}}>Founder, GrowthLabs</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-serif text-3xl text-white mb-10 text-center">Common Inquiries</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Does it integrate with Salesforce?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed" style={{}}>
                        Yes, we have native 2-way sync with Salesforce, HubSpot, Pipedrive, and Zoho. Custom integrations are available on the Enterprise plan.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Is the AI distinguishable from a human?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed" style={{}}>
                        In blind tests, 94% of prospects believed they were speaking to a human. We use advanced LLMs with latency delays and natural language patterns to ensure authenticity.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Can I customize the agent's personality?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed" style={{}}>
                        Absolutely. You can adjust tone, formality, emoji usage, and specific sales frameworks (like SPIN or Sandler) in the dashboard.
                    </div>
</details>
</div>
</div>
</section>

<section className="z-10 pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-magic-900/10 pointer-events-none"></div>
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight mb-6">
                Summon Your Fleet.
            </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto" style={{}}>
                Stop chasing leads manually. Deploy intelligence today.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-8 text-left">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-mail h-5 w-5 text-slate-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-md bg-white/5 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-magic-500 transition-colors sm:text-sm" placeholder="Enter your work email" style={{}} type="email"/>
</div>
<button className="w-full py-3 px-4 text-sm font-medium rounded-md text-obsidian bg-white hover:bg-slate-200 transition-all" style={{}} type="button">
                    Book Strategy Call
                </button>
</form>
</div>
</section>

<footer className="relative z-10 bg-obsidian border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-feather w-4 h-4 text-slate-600" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<span className="font-serif text-sm text-slate-500" style={{}}>Leviosa © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400 transition-colors" href="#" style={{}}>Privacy</a>
<a className="text-xs text-slate-600 hover:text-slate-400 transition-colors" href="#" style={{}}>Terms</a>
<a className="text-xs text-slate-600 hover:text-slate-400 transition-colors" href="#" style={{}}>Twitter</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-obsidian/90 backdrop-blur border-t border-white/10 p-4 z-40 transition-transform duration-300" id="sticky-cta">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="hidden md:block text-white font-medium">Ready to automate?</div>
<div className="flex gap-4 w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2 bg-magic-600 hover:bg-magic-500 text-white rounded text-sm font-medium transition-colors" onclick="openDemoModal()">
                    Start Free Demo
                </button>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-magic-600 hover:bg-magic-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center text-white transition-all hover:scale-110" onclick="toggleChat()">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<div className="fixed bottom-24 right-6 w-80 h-96 bg-charcoal border border-white/10 rounded-xl shadow-2xl z-50 hidden flex-col" id="chat-window">
<div className="p-4 border-b border-white/10 bg-white/5 rounded-t-xl flex justify-between items-center">
<span className="text-sm font-medium text-white">Leviosa Support</span>
<button className="text-slate-400 hover:text-white" onclick="toggleChat()" style={{}}><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="flex-1 p-4 overflow-y-auto space-y-4">
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-magic-500 flex items-center justify-center text-xs">AI</div>
<div className="bg-white/10 p-3 rounded-lg rounded-tl-none text-xs text-slate-300" style={{}}>
                    Hello! How can I help you automate your leads today?
                </div>
</div>
</div>
<div className="p-3 border-t border-white/10">
<input className="w-full bg-obsidian border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-magic-500" placeholder="Type a message..." type="text"/>
</div>
</div>


<div className="fixed inset-0 z-[100] hidden" id="demo-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeDemoModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-obsidian border border-white/10 p-8 rounded-2xl shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-serif text-white">Schedule Your Demo</h3>
<button className="text-slate-500 hover:text-white" onclick="closeDemoModal()" style={{}}><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" style={{}}>Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-magic-500 focus:outline-none" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" style={{}}>Company Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-magic-500 focus:outline-none" type="email"/>
</div>
<button className="w-full bg-magic-600 hover:bg-magic-500 text-white font-medium py-3 rounded transition-colors" type="button">
                    Confirm Booking
                </button>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="turnkey-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeTurnkeyModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-obsidian border border-magic-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.2)]">
<div className="text-center mb-8">
<span className="text-xs font-medium text-magic-400 uppercase tracking-widest font-display">White Glove Service</span>
<h3 className="text-2xl font-serif text-white mt-2">Turnkey Implementation</h3>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="p-4 bg-white/5 rounded border border-white/10">
<h4 className="text-white font-medium mb-2">We Build It</h4>
<p className="text-xs text-slate-400" style={{}}>Our engineers map your entire sales process and configure the agents for you.</p>
</div>
<div className="p-4 bg-white/5 rounded border border-white/10">
<h4 className="text-white font-medium mb-2">We Manage It</h4>
<p className="text-xs text-slate-400" style={{}}>Monthly optimization meetings and A/B testing managed by our team.</p>
</div>
</div>
<button className="w-full bg-white text-obsidian font-medium py-3 rounded hover:bg-slate-200 transition-colors" onclick="closeTurnkeyModal()" style={{}}>
                Request Consultation
            </button>
</div>
</div>


    </>
  );
}
