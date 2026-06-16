import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute w-full h-full top-0 left-0 -z-10" height="598" id="canvas" width="926">

</canvas></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-4 w-1/3">
<button className="text-gray-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="w-1/3 flex justify-center">
<a className="uppercase text-lg font-medium tracking-widest font-sans" href="#" style={{}}>TUNGSTER</a>
</div>

<div className="flex items-center justify-end gap-6 w-1/3">
<a className="text-gray-400 hover:text-white transition-colors text-xs font-medium hidden sm:block font-sans" href="#">Account</a>
<button className="flex items-center gap-2 group">
<span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors font-sans">Cart (0)</span>
<iconify-icon className="text-white" height="20" icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-end pb-12 sm:pb-24 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover object-center opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2b94ae-4a0b-458d-b838-58b0fb5fadfd_3840w.webp" style={{}}/>
<div className="default absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-screen-2xl mr-auto ml-auto relative">
<span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-medium text-gray-200 mb-6 font-sans">
                Autumn / Winter 2024
            </span>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl text-white tracking-tighter max-w-4xl font-oswald font-normal" style={{}}>WELCOME TO <br/> <span className="text-gray-400 font-oswald font-normal" style={{}}>TUNSTER.</span></h1>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-12 gap-8 border-t border-white/10 pt-8">
<p className="max-w-md text-gray-400 text-sm leading-relaxed font-sans">
                    A curated collection of technical apparel designed for the modern minimalist. 
                    Breathable fabrics meeting architectural silhouettes.
                </p>
<div className="flex gap-4">
<a className="group relative px-6 py-3 bg-white text-black text-xs font-medium rounded overflow-hidden" href="#">
<span className="relative z-10 group-hover:text-white transition-colors duration-300 font-sans">Shop Collection</span>
<div className="absolute inset-0 bg-gray-800 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
<a className="px-6 py-3 border border-white/20 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors font-sans" href="#">
                        View Lookbook
                    </a>
</div>
</div>
</div>
</header>

<section className="border-b border-white/10 bg-gray-950">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<a className="group relative h-96 overflow-hidden" href="#">
<img alt="Outerwear" className="group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a850054-a822-4f7d-987f-3836edb03373_800w.png" style={{}}/>
<div className="flex opacity-0 absolute top-0 right-0 bottom-0 left-0 rotate-x-10 items-center justify-center">
<h3 className="text-2xl tracking-tight font-oswald font-normal">Outerwear</h3>
</div>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon className="" height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</a>

<a className="group relative h-96 overflow-hidden" href="#">
<img alt="Tops" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-2xl tracking-tight font-oswald font-normal">Essentials</h3>
</div>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</a>

<a className="group relative h-96 overflow-hidden" href="#">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-2xl tracking-tight font-oswald font-normal">Accessories</h3>
</div>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<iconify-icon height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="py-24 px-6 max-w-screen-2xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl tracking-tight mb-2 font-oswald font-normal">Latest Drop</h2>
<p className="text-sm text-gray-400 font-sans">Limited quantities available.</p>
</div>

<div className="hidden sm:flex items-center gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
<button className="px-4 py-1.5 roundedmd text-xs font-medium bg-white text-black shadow-sm font-sans">All</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Tees</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Pants</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-gray-400 hover:text-white transition-colors font-sans">Jackets</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm mb-4">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider font-sans">New</span>
</div>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 default">
<button className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors font-sans">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors font-sans">Oversized Heavy Tee</h3>
<p className="text-xs text-gray-500 mt-1 font-sans">Slate Grey</p>
</div>
<span className="text-sm font-medium font-sans">$45</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm mb-4">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 default">
<button className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors font-sans">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors font-sans">Core Logo Tee</h3>
<p className="text-xs text-gray-500 mt-1 font-sans">Black</p>
</div>
<span className="text-sm font-medium font-sans">$40</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm mb-4">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 default">
<button className="w-full py-2 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors font-sans">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors font-sans">Technical Jacket</h3>
<p className="text-xs text-gray-500 mt-1 font-sans">Olive</p>
</div>
<span className="text-sm font-medium font-sans">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm mb-4">
<img alt="Product" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<span className="bg-gray-800 text-white border border-white/10 text-[10px] font-bold px-2 py-1 uppercase tracking-wider font-sans">Sold Out</span>
</div>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors font-sans">Cropped Hoodie</h3>
<p className="text-xs text-gray-500 mt-1 font-sans">Black</p>
</div>
<span className="text-sm font-medium font-sans">$85</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/10 overflow-hidden bg-white text-black">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-4xl md:text-6xl tracking-tighter mx-8 font-oswald font-normal">MODERN ESSENTIALS</span>
<iconify-icon className="text-black" height="48" icon="solar:star-fall-linear" width="48"></iconify-icon>
<span className="text-4xl md:text-6xl tracking-tighter mx-8 font-oswald font-normal">DESIGNED IN NEW YORK</span>
<iconify-icon className="text-black" height="48" icon="solar:star-fall-linear" width="48"></iconify-icon>
<span className="text-4xl md:text-6xl tracking-tighter mx-8 font-oswald font-normal">ETHICALLY SOURCED</span>
<iconify-icon className="text-black" height="48" icon="solar:star-fall-linear" width="48"></iconify-icon>
<span className="text-4xl md:text-6xl tracking-tighter mx-8 font-oswald font-normal">MODERN ESSENTIALS</span>
<iconify-icon className="text-black" height="48" icon="solar:star-fall-linear" width="48"></iconify-icon>
</div>
</section>

<footer className="pt-24 pb-12 px-6 max-w-screen-2xl mx-auto border-t border-white/5">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12">
<div className="max-w-md">
<h4 className="text-lg font-medium mb-4 font-sans">Join the list</h4>
<p className="text-gray-400 text-sm mb-6 font-sans">Receive early access to new drops and exclusive editorial content.</p>
<form className="flex w-full max-w-sm border-b border-white/20 pb-2 focus-within:border-white transition-colors">
<input className="bg-transparent w-full outline-none text-sm placeholder-gray-600" placeholder="Email address" type="email"/>
<button className="text-gray-400 hover:text-white transition-colors" type="button">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 text-sm">
<div className="flex flex-col gap-3">
<span className="text-gray-500 mb-1 font-sans">Shop</span>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">All Products</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">New Arrivals</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">Accessories</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-gray-500 mb-1 font-sans">Company</span>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">About</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">Sustainability</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">Terms</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-gray-500 mb-1 font-sans">Social</span>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">Instagram</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">Twitter</a>
<a className="hover:text-gray-300 transition-colors font-sans" href="#">TikTok</a>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-24 pt-8 border-t border-white/5 text-xs text-gray-600">
<span className="font-sans">© 2024 Nomad Studios.</span>
<div className="flex gap-4">
<span className="font-sans">Privacy</span>
<span className="font-sans">Terms</span>
</div>
</div>
</footer>

    </>
  );
}
