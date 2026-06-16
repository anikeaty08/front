import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  


        // Toggle Functionality
        function toggleView(view) {
            const loginView = document.getElementById('login-view');
            const registerView = document.getElementById('register-view');

            if (view === 'register') {
                loginView.classList.remove('fade-enter');
                loginView.style.display = 'none';
                
                registerView.style.display = 'block';
                registerView.classList.add('fade-enter');
            } else {
                registerView.classList.remove('fade-enter');
                registerView.style.display = 'none';
                
                loginView.style.display = 'block';
                loginView.classList.add('fade-enter');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute w-full h-full top-0 left-0 -z-10" height="725" id="canvas" width="926">

</canvas></div>

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-full h-full opacity-20 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2b94ae-4a0b-458d-b838-58b0fb5fadfd_1600w.webp)] mix-blend-overlay"></div>
</div>

<div className="flex min-h-screen flex-col sm:p-12 z-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="w-full max-w-[420px] rounded-3xl border border-white/5 bg-black/10 backdrop-blur-md shadow-2xl shadow-black ring-1 ring-white/5 overflow-hidden transition-all duration-500 ease-in-out">

<div className="flex flex-col pt-10 pr-8 pb-2 pl-8 items-center">

<div className="relative mb-6 group cursor-default">
<img alt="Tungster Logo" className="transition-opacity duration-300 group-hover:opacity-100 opacity-90 mix-blend-screen w-auto h-16 object-contain" src="https://i.imgur.com/kS9T0q2.png"/>

<div className="absolute inset-0 bg-[#C5A059] blur-[40px] opacity-20 rounded-full z-[-1]"></div>
</div>
</div>

<div className="fade-enter w-full pr-10 pb-10 pl-10" id="login-view">
<div className="mb-8 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white">Welcome back</h2>
<p className="text-base font-light text-indigo-300/80 mt-2">Enter your credentials to access your wardrobe.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="group relative">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2 ml-1" htmlFor="email">Email</label>
<div className="relative">
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pl-11 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" id="email" placeholder="name@tungster.com" type="email"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-neutral-500 transition-colors group-focus-within:text-[#C5A059]" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
<div className="group relative">
<div className="flex items-center justify-between mb-2 ml-1">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider" htmlFor="password">Password</label>
<a className="text-xs font-normal text-indigo-400/80 hover:text-[#C5A059] transition-colors" href="#">Forgot password?</a>
</div>
<div className="relative">
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pl-11 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" id="password" placeholder="••••••••" type="password"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-neutral-500 transition-colors group-focus-within:text-[#C5A059]" height="20" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex items-center ml-1">
<label className="flex items-center cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-indigo-600/50 bg-white/5 transition-all peer-checked:border-[#C5A059] peer-checked:bg-[#C5A059]"></div>
<svg className="absolute left-[2px] top-[2px] h-3 w-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="ml-3 text-sm text-indigo-300/80 font-light select-none">Remember for 30 days</span>
</label>
</div>
<button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#E5C570] to-[#B89238] p-[1px] shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 active:scale-[0.98]" type="button">
<div className="relative flex items-center justify-center rounded-[11px] bg-black/20 backdrop-blur-sm px-4 py-3.5 transition-all group-hover:bg-transparent">
<span className="text-base font-medium text-black/90 tracking-wide group-hover:text-black">Sign In</span>
<iconify-icon className="ml-2 text-black/90 transition-transform group-hover:translate-x-1 group-hover:text-black" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</button>
</form>
<div className="mt-8 text-center">
<p className="text-sm text-indigo-300/70 font-light">
                        Don't have an account? 
                        <button className="font-normal text-[#C5A059] hover:text-[#dcc072] transition-colors ml-1" onclick="toggleView('register')">Create account</button>
</p>
</div>
</div>

<div className="hidden px-10 pb-10 w-full" id="register-view">
<div className="mb-8 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white">Join Tungster</h2>
<p className="mt-2 text-base text-indigo-300/80 font-light">Experience luxury. Create your profile below.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="flex gap-4">
<div className="group relative w-1/2">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2 ml-1">First Name</label>
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" placeholder="John" type="text"/>
</div>
<div className="group relative w-1/2">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2 ml-1">Last Name</label>
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" placeholder="Doe" type="text"/>
</div>
</div>
<div className="group relative">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2 ml-1">Email</label>
<div className="relative">
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pl-11 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" placeholder="name@tungster.com" type="email"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-neutral-500 transition-colors group-focus-within:text-[#C5A059]" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
<div className="group relative">
<label className="block text-xs font-medium text-indigo-400/80 uppercase tracking-wider mb-2 ml-1">Password</label>
<div className="relative">
<input className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pl-11 text-base text-white placeholder-indigo-400/50 focus:border-[#C5A059]/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/50 transition-all duration-200" placeholder="Create password" type="password"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-neutral-500 transition-colors group-focus-within:text-[#C5A059]" height="20" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
</div>
<div className="pt-2">
<button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#E5C570] to-[#B89238] p-[1px] shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-300 active:scale-[0.98]" type="button">
<div className="relative flex items-center justify-center rounded-[11px] bg-black/20 backdrop-blur-sm px-4 py-3.5 transition-all group-hover:bg-transparent">
<span className="text-base font-medium text-black/90 tracking-wide group-hover:text-black">Create Account</span>
<iconify-icon className="ml-2 text-black/90 transition-transform group-hover:translate-x-1 group-hover:text-black" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</button>
</div>
</form>
<div className="mt-8 text-center">
<p className="text-sm text-indigo-300/70 font-light">
                        Already have an account? 
                        <button className="font-normal text-[#C5A059] hover:text-[#dcc072] transition-colors ml-1" onclick="toggleView('login')">Sign in</button>
</p>
</div>
</div>
</div>

<div className="mt-10 flex gap-6 text-xs text-indigo-400/60 font-light mix-blend-plus-lighter">
<a className="hover:text-indigo-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Terms</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Contact</a>
</div>
</div>


    </>
  );
}
