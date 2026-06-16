import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
display: ['"Montserrat Alternates"', 'sans-serif'],
},
colors: {
navy: {
900: '#020617', // Deepest Navy
800: '#0f172a',
},
teal: {
400: '#2dd4bf',
500: '#14b8a6',
900: '#042f2e',
}
},
fontSize: {
'body': '1.125rem', // Larger body text
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
  


        // Initialize Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15 brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute w-full h-full top-0 left-0 -z-10" height="845" id="canvas" width="1366">

</canvas></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-20 pl-8 items-center justify-between">
<div className="flex items-center gap-2">

<div className="flex bg-gradient-to-br from-teal-400 to-navy-900 w-8 h-8 rounded-full items-center justify-center">
<div className="w-3 h-3 rounded-full"></div>
</div>
<span className="font-display font-black text-2xl text-white tracking-tight">AgeWell</span>
</div>
<div className="">
<div className="flex items-center gap-6">
<a =className="hover:text-teal-400 transition-colors" href=" #must">You-Must</a>
<a className="hover:text-teal-400 transition-colors" href="#mission">The Hard Truth</a>
<a className="hover:text-teal-400 transition-colors" href="#agents">AI Agents</a>
<a className="hover:text-teal-400 transition-colors" href="#tools">Tools</a>
<a className="hover:text-teal-400 transition-colors" href="#community">Community</a>
<div className="flex gap-x-4 gap-y-8 items-center">
<button className="hidden md:block text-slate-300 hover:text-white transition-colors text-body font-medium">Log in</button>
<button className="bg-teal-500 hover:bg-teal-400 text-navy-900 px-6 py-2.5 rounded-full font-medium transition-all text-body hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                    Get Early Access
                </button>
</div>
</div></div></div></nav>

<header className="min-h-screen flex overflow-hidden opacity-100 pt-20 relative items-center" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><canvas className="absolute w-full h-full top-0 left-0 -z-10" id="canvas">

</canvas></div><canvas className="absolute w-full h-full top-0 left-0 -z-10" id="canvas">

</canvas></div>

<div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-teal-900/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="flex flex-col gap-8 font-montserrat gap-x-8 gap-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/10 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-sm font-medium text-teal-400 tracking-wide uppercase">Evidence-based Disruption</span>
</div>
<h1 className="leading-[0.9] lg:text-7xl text-6xl font-extrabold text-white tracking-tight font-montserrat mix-blend-normal shadow-md grayscale-0 hue-rotate-0 brightness-100">
                    Diabetes is a <br/>
<span className="bg-clip-text text-glow text-transparent bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#79afaf] to-red-600">Silent Killer.</span>
</h1>
<p className="leading-relaxed text-[#FFfff] lg:text-3xl text-xl font-black text-[#FFffff] tracking-normal font-mhttps://agewell-diabetes-11.aura.build/ max-w-xl pr-0 pl-0">ACT NOW. Before It Does!</p><p className="leading-relaxed text-[#FFfff] lg:text-xl text-xl text-[#FFffff] font-mhttps://agewell-diabetes-11.aura.build/ max-w-xl">Bust the myths of pharmaceutical dependency. Reclaim your metabolic health with evidence-based natural science, dynamic nutrition, and AI-driven intelligence.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="group flex gap-3 text-navy-900 hover:bg-slate-100 transition-all text-lg font-medium bg-white rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center justify-center">Start Your Reversal<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(2, 6, 23)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
<button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-medium border border-slate-700 hover:border-teal-500/50 hover:bg-teal-900/10 hover:text-teal-400 transition-all">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Watch the Manifesto
                    </button>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="relative w-full h-full glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Abstract Glucose Data" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c867c896-5431-47d1-b22b-b6863f44d7d0_1600w.png"/><div className="bg-center z-10 font-montserrat opacity-60 mix-blend-plus-lighter bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4df4b00f-4f7b-49db-9e66-fb98f10582a5_1600w.png?w=800&amp;q=80)] bg-cover border-teal-600 border ring-neutral-50 absolute top-0 right-0 bottom-0 left-0 shadow-md blur-none brightness-100 scale-100" style={{maskImage: 'linear-gradient(290deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(290deg, transparent, black 0%, black 100%, transparent)'}}></div>

<div className="absolute bottom-12 left-6 right-6 z-20">
<div className="border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl hue-rotate-15 brightness-150">
<div className="flex gap-4 mb-4 gap-x-4 gap-y-4 items-start">
<div className="bg-teal-500/20 p-2 rounded-lg text-teal-400">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white font-display">Agewell Agent Analysis</h3>
<p className="text-slate-400 text-base mt-1">Analyzing breakfast contents...</p>
</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[85%]"></div>
</div>
<div className="flex justify-between text-sm">
<span className="text-red-400 font-medium">Glycemic Spike Risk: High</span>
<span className="text-slate-500">85%</span>
</div>
<div className="p-3 bg-navy-900 rounded-lg border border-white/5 mt-2">
<p className="text-sm italic text-slate-300">"That 'healthy' pumpkin cereal bar has more sugar than a soda. Switch to rolled oats with cinnamon to stabilize insulin response."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="pt-32 pb-32 relative right-30" id="must">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row gap-16 mb-16 gap-x-8 gap-y-8 items-end justify-between">
<div className="max-w-2xl">
<h2 className="lg:text-5xl text-4xl font-bold text-white tracking-tight font-display max-w-5xl mr-30 ml-30 pt-30 pb-30">The Must-Prerogative: You Must Age Well!</h2>
<p className="text-xl font-light text-neutral-100">
<br/>
                        Become the architect of your own vitality, a system, a team, a mindset that treats your health not as an option, but as the priority.
                    </p>
</div>
<div className="flex gap-4">
<div className="h-px w-32 bg-slate-700 my-auto"></div>
<span className="uppercase text-sm text-teal-500 tracking-widest font-display">Discover Truths</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<div className="group-hover:bg-black/20 transition-all bg-center z-10 bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d34f3a6-09eb-4909-a5ff-0a659e097a0b_800w.png)] bg-cover border-teal-400 border rounded-none absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Unhealthy processed food" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent">
<svg className="lucide lucide-chef-hat lucide-skull mb-4 w-[32px] h-[32px] text-yellow-500" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chef-hat" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
<h3 className="text-2xl text-white font-display font-medium mb-2">5 Surprising Truths</h3>
<p className="leading-snug group-hover:text-white transition-colors text-lg text-slate-400">Transform foundational recipes into dishes worthy of a Michelin-star .</p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-teal-900/30">
<div className="group-hover:bg-black/20 transition-all bg-center bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dbe8b37-3859-435a-b3bc-78db8ed4c614_800w.png)] bg-cover z-10 border-teal-400 border absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Pills and Pharma" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="z-20 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<svg className="lucide lucide-tree-palm mb-4" data-icon-replaced="true" data-icon-set="lucide" data-lucide="tree-palm" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(45, 212, 191)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
<h3 className="text-2xl text-white font-display font-medium mb-2">'Secret Sauce' of Strength</h3>
<p className="Nutritional science is proving that fighting back doesn't require complex supplementstext-lg leading-snug group-hover:text-white transition-colors text-slate-400 ring-green-200 shadow-lg">Science is proving fighting back doesn't require complex supplements.</p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<div className="group-hover:bg-black/20 transition-all bg-center z-10 bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1aa5b3-235a-4d7e-889c-ad31819ee3ee_800w.png)] bg-cover border-teal-400 border absolute top-0 right-0 bottom-0 left-0 shadow-md grayscale-0"></div>
<img alt="Stress and Anxiety" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent">
<svg className="lucide lucide-activity mb-4 w-[32px] h-[32px] text-red-500" data-icon-replaced="true" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-2xl font-medium text-white font-display mb-2">Metabolism Myths</h3>
<p className="leading-snug group-hover:text-white transition-colors text-lg text-slate-400" style={{}}>While some natural compounds show remarkable efficacy, scientific consensus is clear.</p>
</div>
</div>
</div>
</div>
</section><section className="pt-32 pb-32 relative" id="mission">
<div className="max-w-7xl border-pink-500 border-0 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row gap-8 mb-16 gap-x-8 gap-y-8 items-end justify-between">
<div className="max-w-2xl">
<h2 className="lg:text-5xl text-4xl font-bold text-white tracking-tight font-display mb-6" style={{}}>The Institutional Blindfold.</h2>
<p className="text-xl font-light text-neutral-50">
                        The medical industry manages your decline. We engineer your reversal. 
                        Ignore the bland, clinical advice designed for the masses.
                    </p>
</div>
<div className="flex gap-4">
<div className="h-px w-32 bg-slate-700 my-auto"></div>
<span className="text-teal-500 font-display uppercase tracking-widest text-sm">Disrupt the Norm</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<div className="group-hover:bg-black/20 transition-all bg-center z-10 bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d2c75cc-aaf3-47b0-a275-8e63b1310f30_800w.png)] bg-cover border-pink-500 border absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Unhealthy processed food" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
<svg className="lucide lucide-skull text-red-500 mb-4 w-8 h-8" data-lucide="skull" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></svg>
<h3 className="text-2xl text-white font-display font-medium mb-2">Processed Lies</h3>
<p className="text-slate-400 text-lg leading-snug group-hover:text-white transition-colors">Hidden sugars in "diet" foods are accelerating your pre-diabetes.</p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-teal-900/30">
<div className="group-hover:bg-black/20 transition-all bg-center bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f334511c-b2f8-402b-9e16-b56613e01872_800w.png)] bg-cover z-10 border-pink-500 border absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Pills and Pharma" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="z-20 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<svg className="lucide lucide-pill text-teal-400 mb-4 w-8 h-8" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
<h3 className="text-2xl text-white font-display font-medium mb-2">The Pharma Trap</h3>
<p className="text-slate-400 text-lg leading-snug group-hover:text-white transition-colors">Managing symptoms isn't healing. It's a subscription model for sickness.</p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<div className="group-hover:bg-black/20 transition-all bg-center z-10 bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d056972-d194-4f47-bf33-94ff52eb1f96_800w.webp)] bg-cover border-pink-500 border absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Stress and Anxiety" className="absolute inset-0 w-full h-full object-cover dark-image-filter transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
<svg className="lucide lucide-activity text-orange-400 mb-4 w-8 h-8" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-2xl text-white font-display font-medium mb-2">Silent Signals</h3>
<p className="leading-snug group-hover:text-white transition-colors text-lg text-slate-400" style={{}}>Fatigue, brain fog, and weight gain are screaming at you. Listen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="agents">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-teal-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="lg:text-6xl text-4xl font-bold text-white tracking-tight font-display mb-6" id="agents">Intelligence vs. Insulin</h2>
<p className="text-xl text-neutral-50 max-w-2xl mr-auto ml-auto" id="agents">Access our suite of 5 AI Agents trained on deep metabolic science. Ask questions, scan labels, and get instant, context-aware answers.</p>
</div>

<div className="glass-panel rounded-2xl p-1 border border-teal-500/20 shadow-2xl shadow-teal-900/20">
<div className="bg-navy-900/80 rounded-xl overflow-hidden">

<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-white font-medium">Agewell Nutrition Agent</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">Beta Access</span>
</div>

<div className="p-6 h-[400px] overflow-y-auto flex flex-col gap-6">

<div className="self-end max-w-[80%]">
<div className="bg-teal-900 text-white p-4 rounded-2xl rounded-tr-sm">
<p className="text-lg">I've been told to eat whole grains, but my blood sugar spikes after bread. Why?</p>
</div>
</div>

<div className="self-start max-w-[90%] flex gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-navy-800 flex items-center justify-center shrink-0">
<svg className="lucide lucide-bot text-white w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="space-y-3">
<div className="bg-navy-800 border border-white/10 p-5 rounded-2xl rounded-tl-sm text-slate-300 text-lg leading-relaxed">
<p>This is a common myth. "Whole grain" bread often has a Glycemic Index similar to white sugar due to how finely the flour is milled.</p>
<p className="mt-2 text-white font-medium">The Agewell Approach:</p>
<ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
<li>Switch to <span className="text-teal-400">sprouted grains</span> or almond flour alternatives.</li>
<li>Pair carbohydrates with healthy fats (avocado, nuts) to blunt the spike.</li>
<li>Go for a 10-minute walk immediately after eating.</li>
</ul>
</div>

<div className="flex gap-2">
<button className="px-4 py-2 rounded-full border border-slate-700 hover:border-teal-500 text-sm text-slate-400 hover:text-teal-400 transition-colors">Show Low-GI Recipes</button>
<button className="px-4 py-2 rounded-full border border-slate-700 hover:border-teal-500 text-sm text-slate-400 hover:text-teal-400 transition-colors">Explain "Sprouted Grains"</button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-navy-900">
<div className="relative">
<input __gchrome_uniqueid="3" className="w-full bg-navy-800 text-white pl-12 pr-12 py-4 rounded-xl border border-slate-700 focus:outline-none focus:border-teal-500 transition-colors placeholder:text-slate-500 text-lg" placeholder="Ask about symptoms, ingredients, or recipes..." type="text"/>
<svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<button className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500 p-2 rounded-lg text-navy-900 hover:bg-teal-400 transition-colors">
<svg className="lucide lucide-arrow-up w-5 h-5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="tools">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="lg:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="">
<div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-400">
<svg className="lucide lucide-scan-barcode w-6 h-6" data-lucide="scan-barcode" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 7v10"></path><path d="M12 7v10"></path><path d="M17 7v10"></path></svg>
</div>
<h3 className="text-3xl font-display font-medium text-white mb-2">The Truth Scanner</h3>
<p className="text-slate-400 text-lg max-w-md">Use your camera to scan ingredient tables. Our AI highlights hidden sugars and harmful additives instantly.</p>
</div>
<div className="mt-8 flex gap-4">

<div className="flex-1 bg-navy-800 rounded-lg p-4 border border-slate-700 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-500">DETECTED</span>
<span className="text-xs text-red-400 font-bold">AVOID</span>
</div>
<div className="text-white font-mono">Maltodextrin</div>
<div className="text-xs text-slate-400 mt-1">Spikes insulin 2x faster than sugar.</div>
</div>
<div className="flex-1 bg-navy-800 rounded-lg p-4 border border-slate-700 opacity-50 group-hover:opacity-80 transition-opacity">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-500">DETECTED</span>
<span className="text-xs text-green-400 font-bold">SAFE</span>
</div>
<div className="text-white font-mono">Stevia Leaf</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-teal-900/40 transition-colors">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Daily Flashcards</h3>
<p className="text-slate-400 text-lg mb-6">Learn the science in bite-sized pieces.</p>
<div className="bg-navy-800 rounded-xl p-6 border border-slate-700 transform group-hover:-rotate-2 transition-transform duration-300">
<p className="text-xs text-teal-500 font-bold mb-2">QUESTION</p>
<p className="text-white text-lg font-medium">"Can Type 2 Diabetes be reversed?"</p>
</div>
<div className="bg-teal-900/80 rounded-xl p-6 border border-teal-700 absolute bottom-8 left-8 right-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-teal-300 font-bold mb-2">ANSWER</p>
<p className="text-white text-lg">Yes. Clinical studies show remission is possible through carb restriction and weight loss.</p>
</div>
</div>

<div className="glass-panel overflow-hidden group rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<img alt="Herbs and Spices" className="absolute inset-0 w-full h-full object-cover opacity-40 dark-image-filter group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/035f3e60-899b-4b27-9041-914a1f967f42_800w.png"/>
<div className="bg-gradient-to-r from-navy-900/10 to-transparent/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center z-10 opacity-100 h-full relative justify-end">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400 backdrop-blur-md">
<svg className="lucide lucide-leaf w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Nature's Pharmacy</h3>
<p className="text-lg text-slate-300">Berberine, Cinnamon, Bitter Melon, Honey. The natural compounds that big pharma ignores.</p>
</div>
</div>

<div className="lg:col-span-2 glass-panel flex flex-col md:flex-row gap-8 group rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8 items-center">
<div className="flex-1">
<h3 className="text-3xl font-display font-medium text-white mb-4">Not A Care Home. A Revolution.</h3>
<p className="text-slate-400 text-lg mb-6">
                            Join a community of 35-50 year olds taking control. Share recipes, workout data, and success stories. No "institutional" vibes allowed.
                        </p>
<div className="flex -space-x-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-teal-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-teal-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-teal-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-2 border-navy-900 bg-teal-600 flex items-center justify-center text-white font-bold text-sm">+2k</div>
</div>
</div>
<div className="flex-1 w-full relative h-64 bg-navy-800 rounded-2xl border border-slate-700 p-6 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-indigo-500"></div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-600"></div>
<div className="bg-navy-700 p-3 rounded-tr-xl rounded-b-xl text-slate-300 text-sm w-3/4">
                                    Just hit my A1C goal of 5.4! No meds for 3 months. The fasting protocol works.
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-teal-600"></div>
<div className="bg-teal-900/50 p-3 rounded-tl-xl rounded-b-xl text-white text-sm w-3/4 border border-teal-800">
                                    That's huge! Did you stick to the Agewell meal plan #4?
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="community">
<section className="py-32 relative">
<div className="bg-gradient-to-b from-navy-900 to-teal-900/50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl font-extrabold text-white tracking-tight font-display mb-8 lg:text-7xl">
                Don't Wait for the  Diagnosis to Get Dark.
            </h2>
<p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join the Agewell waitlist today. Get the eBook "5 Natural Disruptors" free instantly.
            </p>
<form __gchrome_uniqueid="1" className="max-w-md mx-auto flex gap-2">
<input __gchrome_uniqueid="2" className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:border-teal-500 placeholder:text-slate-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold px-8 py-4 rounded-full transition-all hover:scale-105" type="button">
                    Act Now
                </button>
</form>
</div>
</section>

<footer className="bg-navy-800 border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<span className="font-display font-medium text-3xl text-white tracking-tight">Agewell</span>
<p className="text-slate-500 mt-4 max-w-xs">
                        Disrupting diabetes management with science, nature, and technology. 
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-teal-400" href="#">The App</a></li>
<li><a className="hover:text-teal-400" href="#">AI Agents</a></li>
<li><a className="hover:text-teal-400" href="#">Scanner</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Learn</h4>
<ul className="space-y-3 text-slate-400">
<li className=""><a className="hover:text-teal-400" href="#">Manifesto</a></li>
<li><a className="hover:text-teal-400" href="#">Ingredients</a></li>
<li><a className="hover:text-teal-400" href="#">Science</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-teal-400" href="#">About</a></li>
<li><a className="hover:text-teal-400" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-slate-400">
<li><a className="hover:text-teal-400" href="#">Privacy</a></li>
<li><a className="hover:text-teal-400" href="#">Medical Disclaimer</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-slate-600 text-sm">© 2024 Agewell. Not medical advice. Consult your physician.</p>
<div className="flex gap-6">
<svg className="lucide lucide-twitter w-5 h-5 text-slate-500 hover:text-white cursor-pointer" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-instagram w-5 h-5 text-slate-500 hover:text-white cursor-pointer" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-slate-500 hover:text-white cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>

<textarea __gchrome_uniqueid="4" className="-edit" style={{fontSize: '48px', fontWeight: '700', fontFamily: '"Montserrat Alternates", sans-serif', color: 'rgb(255, 255, 255)', lineHeight: '48px', textAlign: 'start', textTransform: 'none', letterSpacing: '-1.2px', position: 'absolute', left: '67px', top: '1805px', width: '672px', height: '48px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'medium', background: 'none', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>/br</section>    
&gt;
&gt;,/. &gt;&lt;/a&gt;
    </>
  );
}
