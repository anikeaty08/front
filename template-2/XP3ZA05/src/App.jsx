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



        // Initialize canvas and WebGL
        const canvas = document.getElementById('shader');
        const gl = canvas.getContext('webgl');
        
        if (!gl) {
            alert('WebGL not supported');
            throw new Error('WebGL not supported');
        }
        
        // Resize canvas to fill window
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        
        window.addEventListener('resize', resize);
        resize();
        
        // Vertex shader program
        const vsSource = `
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }
        `;
        
        // Fragment shader program with the provided shader code
        const fsSource = `
            precision highp float;
            uniform vec2 iResolution;
            uniform float iTime;
            
            float x(float t) {
                t = mod(t, 4.0);
                return abs(t) - abs(t-1.0) - abs(t-2.0) + abs(t-3.0) - 1.0;
            }
            
            void main() {
                vec2 fragCoord = gl_FragCoord.xy;
                vec2 uv = -0.5 + fragCoord / iResolution.xy;
                uv.x *= iResolution.x / iResolution.y;
                vec2 p = abs(mod(uv*30.0, 1.0));
                vec2 cell = floor(uv*30.0);
                float t = iTime*2.0+atan(cell.y+0.01,cell.x)/1.57*4.0+length(cell)/3.0;
                vec2 s = vec2(x(t), x(t-1.0))*0.35+0.5;
                float d = max(abs(p.x-s.x), abs(p.y-s.y));
                gl_FragColor = vec4(vec3(0.4, 0.6, 1.0) * smoothstep(0.15, 0.1, d), 1.0);
            }
        `;
        
        // Initialize shader program
        function initShaderProgram(gl, vsSource, fsSource) {
            const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
            
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                alert('Unable to initialize shader program: ' + gl.getProgramInfoLog(program));
                return null;
            }
            
            return program;
        }
        
        // Create shader
        function loadShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            
            return shader;
        }
        
        // Initialize shader program
        const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
        
        // Collect info needed for rendering
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
        
        // Initialize vertex buffer
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        
        // Create a square (2 triangles) that covers the entire canvas
        const positions = [
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
             1.0,  1.0,
        ];
        
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        
        // Render function
        function render(time) {
            time *= 0.001; // Convert to seconds
            
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            
            gl.useProgram(programInfo.program);
            
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                2,          // 2 components per vertex
                gl.FLOAT,   // Type
                false,      // Not normalized
                0,          // Stride
                0           // Offset
            );
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
            
            // Set uniforms
            gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
            gl.uniform1f(programInfo.uniformLocations.time, time);
            
            // Draw
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            
            // Request next frame
            requestAnimationFrame(render);
        }
        
        // Start the animation
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
      
<canvas className="w-full h-screen fixed top-0 left-0" id="shader"></canvas>


    </>
  );
}
