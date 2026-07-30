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



    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');
    
    if (!gl) {
        console.error('WebGL not supported in your browser');
    }
    
    const vsSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    `;
    
    const fsSource = `
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;
        
        const float overallSpeed = 0.2;
        const float gridSmoothWidth = 0.015;
        const float scale = 5.0;
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
        
        float random(float t) {
            return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;   
        }
        
        float getPlasmaY(float x, float horizontalFade, float offset) {
            return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
        }
        
        vec3 rainbow(float t) {
            return 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67)));
        }
        
        vec3 colorPalette(float t) {
            vec3 a = vec3(0.5, 0.5, 0.5);
            vec3 b = vec3(0.5, 0.5, 0.5);
            vec3 c = vec3(1.0, 1.0, 1.0);
            vec3 d = vec3(0.3, 0.2, 0.2);
            return a + b * cos(6.28318 * (c * t + d));
        }
        
        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec4 fragColor;
            
            vec2 uv = fragCoord.xy / iResolution.xy;
            vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
            
            float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
            float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
        
            space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
            space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
            
            vec4 lines = vec4(0.0);
            vec3 bgColor1 = colorPalette(iTime * 0.05);
            vec3 bgColor2 = colorPalette(iTime * 0.05 + 0.33);
            
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
                vec3 lineColorRGB = rainbow(normalizedLineIndex + iTime * 0.1);
                vec4 lineColor = vec4(lineColorRGB, 1.0);
                
                lines += line * lineColor * rand;
            }
            
            fragColor = vec4(mix(bgColor1, bgColor2, uv.x), 1.0);
            fragColor.rgb *= 0.3 + 0.7 * verticalFade;
            fragColor.a = 1.0;
            fragColor += lines;
            
            gl_FragColor = fragColor;
        }
    `;
    
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
    
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
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
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    let startTime = Date.now();
    function render() {
        const currentTime = (Date.now() - startTime) / 1000;
        
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        gl.useProgram(programInfo.program);
        
        gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
        gl.uniform1f(programInfo.uniformLocations.time, currentTime);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
        requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);
  
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
      
<canvas id="canvas"></canvas>
<div className="relative z-10 w-full min-h-screen">

<div className="w-full max-w-6xl mx-auto text-center py-16 px-4">
<h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-[200] leading-tight tracking-[-0.03em] gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
        Flexible AI Solutions
      </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
        Choose the plan that works for your workflow. All plans include core features with flexible scaling options.
      </p>
</div>

<div className="w-full max-w-7xl mx-auto px-4 pb-24">

<div className="flex flex-col md:flex-row gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect bg-white/10 rounded-2xl p-8 border border-white/10">
<div className="icon-circle mb-4">
<i className="fas fa-brain text-blue-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Advanced AI Models</h3>
<p className="text-white/70">Access state-of-the-art language models trained on diverse datasets for optimal performance.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Multi-modal Capabilities</h3>
<p className="text-white/70">Process and generate content across text, images, and structured data with a single unified API.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Natural language processing</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Image generation and analysis</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Structured data extraction</span>
</li>
</ul>
</div>
<div className="w-full md:w-64 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
<i className="fas fa-diagram-project text-5xl text-white/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-6 mb-6">

<div className="w-full md:w-1/3 glass-effect bg-white/10 rounded-2xl p-8 border border-white/10">
<div className="icon-circle mb-4">
<i className="fas fa-shield-alt text-indigo-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Enterprise Security</h3>
<p className="text-white/70">End-to-end encryption, compliance certifications, and secure data handling for sensitive applications.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center">
<div className="flex-1 mb-6 md:mb-0 md:mr-6">
<h3 className="text-2xl text-white mb-3">Customizable Training</h3>
<p className="text-white/70">Fine-tune models on your proprietary data to create domain-specific AI solutions that match your exact needs.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">10x</div>
<div className="text-xs text-white/60 mt-1">Performance</div>
</div>
<div className="bg-white/5 rounded-lg p-3 text-center">
<div className="text-xl font-[300] text-white">95%</div>
<div className="text-xs text-white/60 mt-1">Accuracy</div>
</div>
</div>
</div>
<div className="w-full md:w-64 h-48 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
<i className="fas fa-sliders text-5xl text-white/40"></i>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6">

<div className="w-full md:w-1/3 glass-effect bg-white/10 rounded-2xl p-8 border border-white/10">
<div className="icon-circle mb-4">
<i className="fas fa-bolt text-blue-400"></i>
</div>
<h3 className="text-2xl text-white mb-3">Lightning Fast</h3>
<p className="text-white/70">High-performance infrastructure with global edge deployment for minimal latency responses.</p>
</div>

<div className="w-full md:w-2/3 glass-effect bg-white/5 rounded-2xl p-8 border border-white/10">
<h3 className="text-2xl text-white mb-3">Seamless Integration</h3>
<p className="text-white/70 mb-6">Connect with your existing tools and workflows through our comprehensive API and SDK ecosystem.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-python text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-white/60">Python</span>
</div>
<div className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-js text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-white/60">JavaScript</span>
</div>
<div className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center">
<i className="fab fa-java text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-white/60">Java</span>
</div>
<div className="p-4 bg-white/5 rounded-lg flex flex-col items-center justify-center">
<i className="fas fa-code text-2xl text-white/70 mb-2"></i>
<span className="text-sm text-white/60">REST API</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 pb-24">
<h2 className="text-3xl md:text-4xl text-white text-center mb-12">Choose Your Plan</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-rocket text-blue-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Starter</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$19</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">Perfect for individuals and small projects</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>1 million tokens/month</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>5 custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Basic API access</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Email support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
              Start Free Trial
            </button>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/15 to-white/5 border border-blue-500/30 rounded-2xl shadow-xl p-6 flex flex-col h-full relative z-10 transform scale-105">

<div className="pricing-badge">MOST POPULAR</div>

<div className="flex items-center mb-4">
<div className="icon-circle bg-blue-500/20 border-blue-400/30">
<i className="fas fa-bolt text-blue-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Professional</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$49</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">For teams with advanced AI needs</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>10 million tokens/month</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>20 custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Advanced API access</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Priority support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200">
              Get Started
            </button>
</div>
</div>

<div className="glass-effect bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col h-full relative">

<div className="flex items-center mb-4">
<div className="icon-circle">
<i className="fas fa-building text-indigo-400 text-xs"></i>
</div>
<h3 className="ml-3 text-xl text-white">Enterprise</h3>
</div>

<div className="mt-2 mb-6">
<div className="flex items-baseline">
<span className="text-4xl font-[200] text-white">$199</span>
<span className="text-sm text-white/60 ml-2">/month</span>
</div>
<p className="text-white/60 text-sm mt-1">For organizations with advanced requirements</p>
</div>
<div className="card-divider w-full mb-6"></div>

<ul className="space-y-3 mb-8">
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Unlimited tokens</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Unlimited custom AI models</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>Full API ecosystem</span>
</li>
<li className="flex items-center text-white/80 text-sm">
<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
<span>24/7 dedicated support</span>
</li>
</ul>

<div className="mt-auto pt-4">
<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
              Contact Sales
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
