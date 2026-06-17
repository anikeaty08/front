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



        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('fluid');
            
            // Configuration
            let config = {
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 1024,
                CAPTURE_RESOLUTION: 512,
                DENSITY_DISSIPATION: 1,
                VELOCITY_DISSIPATION: 0.2,
                PRESSURE: 0.8,
                PRESSURE_ITERATIONS: 20,
                CURL: 30,
                SPLAT_RADIUS: 0.25,
                SPLAT_FORCE: 6000,
                SHADING: true,
                COLOR_UPDATE_SPEED: 10,
                PAUSED: false,
                BACK_COLOR: { r: 0, g: 0, b: 0 },
                TRANSPARENT: true,
            };

            // WebGL Helper Functions
            function getWebGLContext(canvas) {
                const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
                let gl = canvas.getContext('webgl2', params);
                const isWebGL2 = !!gl;
                if (!isWebGL2) gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
                
                let halfFloat;
                let supportLinearFiltering;
                
                if (isWebGL2) {
                    gl.getExtension('EXT_color_buffer_float');
                    supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
                } else {
                    halfFloat = gl.getExtension('OES_texture_half_float');
                    supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
                }
                
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                
                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : (halfFloat && halfFloat.HALF_FLOAT_OES) || gl.FLOAT;
                
                return { gl, ext: { halfFloatTexType, supportLinearFiltering } };
            }

            const { gl, ext } = getWebGLContext(canvas);

            function createShader(type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);
                return shader;
            }

            function createProgram(vsSource, fsSource) {
                const program = gl.createProgram();
                gl.attachShader(program, createShader(gl.VERTEX_SHADER, vsSource));
                gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fsSource));
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(program);
                return program;
            }

            // Shaders
            const baseVertexShader = `
                precision highp float;
                attribute vec2 aPosition;
                varying vec2 vUv;
                varying vec2 vL;
                varying vec2 vR;
                varying vec2 vT;
                varying vec2 vB;
                uniform vec2 texelSize;
                void main () {
                    vUv = aPosition * 0.5 + 0.5;
                    vL = vUv - vec2(texelSize.x, 0.0);
                    vR = vUv + vec2(texelSize.x, 0.0);
                    vT = vUv + vec2(0.0, texelSize.y);
                    vB = vUv - vec2(0.0, texelSize.y);
                    gl_Position = vec4(aPosition, 0.0, 1.0);
                }
            `;

            const clearShader = `
                precision mediump float;
                precision mediump sampler2D;
                varying highp vec2 vUv;
                uniform sampler2D uTexture;
                uniform float value;
                void main () {
                    gl_FragColor = value * texture2D(uTexture, vUv);
                }
            `;

            const displayShaderSource = `
                precision highp float;
                precision highp sampler2D;
                varying vec2 vUv;
                varying vec2 vL;
                varying vec2 vR;
                varying vec2 vT;
                varying vec2 vB;
                uniform sampler2D uTexture;
                uniform sampler2D uDithering;
                uniform vec2 ditherScale;
                uniform vec2 texelSize;
                void main () {
                    vec3 c = texture2D(uTexture, vUv).rgb;
                    #ifdef SHADING
                        vec3 lc = texture2D(uTexture, vL).rgb;
                        vec3 rc = texture2D(uTexture, vR).rgb;
                        vec3 tc = texture2D(uTexture, vT).rgb;
                        vec3 bc = texture2D(uTexture, vB).rgb;
                        float dx = length(rc) - length(lc);
                        float dy = length(tc) - length(bc);
                        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                        vec3 l = vec3(0.0, 0.0, 1.0);
                        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                        c *= diffuse;
                    #endif
                    float a = max(c.r, max(c.g, c.b));
                    gl_FragColor = vec4(c, a);
                }
            `;

            const splatShader = `
                precision highp float;
                precision highp sampler2D;
                varying vec2 vUv;
                uniform sampler2D uTarget;
                uniform float aspectRatio;
                uniform vec3 color;
                uniform vec2 point;
                uniform float radius;
                void main () {
                    vec2 p = vUv - point.xy;
                    p.x *= aspectRatio;
                    vec3 splat = exp(-dot(p, p) / radius) * color;
                    vec3 base = texture2D(uTarget, vUv).xyz;
                    gl_FragColor = vec4(base + splat, 1.0);
                }
            `;

            const advectionShader = `
                precision highp float;
                precision highp sampler2D;
                varying vec2 vUv;
                uniform sampler2D uVelocity;
                uniform sampler2D uSource;
                uniform vec2 texelSize;
                uniform vec2 dyeTexelSize;
                uniform float dt;
                uniform float dissipation;
                vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
                    vec2 st = uv / tsize - 0.5;
                    vec2 iuv = floor(st);
                    vec2 fuv = fract(st);
                    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
                    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
                    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
                    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
                    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
                }
                void main () {
                    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                    vec4 result = texture2D(uSource, coord);
                    float decay = 1.0 + dissipation * dt;
                    gl_FragColor = result / decay;
                }
            `;

            const divergenceShader = `
                precision mediump float;
                precision mediump sampler2D;
                varying highp vec2 vUv;
                varying highp vec2 vL;
                varying highp vec2 vR;
                varying highp vec2 vT;
                varying highp vec2 vB;
                uniform sampler2D uVelocity;
                void main () {
                    float L = texture2D(uVelocity, vL).x;
                    float R = texture2D(uVelocity, vR).x;
                    float T = texture2D(uVelocity, vT).y;
                    float B = texture2D(uVelocity, vB).y;
                    vec2 C = texture2D(uVelocity, vUv).xy;
                    if (vL.x < 0.0) { L = -C.x; }
                    if (vR.x > 1.0) { R = -C.x; }
                    if (vT.y > 1.0) { T = -C.y; }
                    if (vB.y < 0.0) { B = -C.y; }
                    float div = 0.5 * (R - L + T - B);
                    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
                }
            `;

            const curlShader = `
                precision mediump float;
                precision mediump sampler2D;
                varying highp vec2 vUv;
                varying highp vec2 vL;
                varying highp vec2 vR;
                varying highp vec2 vT;
                varying highp vec2 vB;
                uniform sampler2D uVelocity;
                void main () {
                    float L = texture2D(uVelocity, vL).y;
                    float R = texture2D(uVelocity, vR).y;
                    float T = texture2D(uVelocity, vT).x;
                    float B = texture2D(uVelocity, vB).x;
                    float vorticity = R - L - T + B;
                    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
                }
            `;

            const vorticityShader = `
                precision highp float;
                precision highp sampler2D;
                varying vec2 vUv;
                varying vec2 vL;
                varying vec2 vR;
                varying vec2 vT;
                varying vec2 vB;
                uniform sampler2D uVelocity;
                uniform sampler2D uCurl;
                uniform float curl;
                uniform float dt;
                void main () {
                    float L = texture2D(uCurl, vL).x;
                    float R = texture2D(uCurl, vR).x;
                    float T = texture2D(uCurl, vT).x;
                    float B = texture2D(uCurl, vB).x;
                    float C = texture2D(uCurl, vUv).x;
                    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
                    force /= length(force) + 0.0001;
                    force *= curl * C;
                    force.y *= -1.0;
                    vec2 velocity = texture2D(uVelocity, vUv).xy;
                    velocity += force * dt;
                    velocity = min(max(velocity, -1000.0), 1000.0);
                    gl_FragColor = vec4(velocity, 0.0, 1.0);
                }
            `;

            const pressureShader = `
                precision mediump float;
                precision mediump sampler2D;
                varying highp vec2 vUv;
                varying highp vec2 vL;
                varying highp vec2 vR;
                varying highp vec2 vT;
                varying highp vec2 vB;
                uniform sampler2D uPressure;
                uniform sampler2D uDivergence;
                void main () {
                    float L = texture2D(uPressure, vL).x;
                    float R = texture2D(uPressure, vR).x;
                    float T = texture2D(uPressure, vT).x;
                    float B = texture2D(uPressure, vB).x;
                    float C = texture2D(uPressure, vUv).x;
                    float divergence = texture2D(uDivergence, vUv).x;
                    float pressure = (L + R + B + T - divergence) * 0.25;
                    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
                }
            `;

            const gradientSubtractShader = `
                precision mediump float;
                precision mediump sampler2D;
                varying highp vec2 vUv;
                varying highp vec2 vL;
                varying highp vec2 vR;
                varying highp vec2 vT;
                varying highp vec2 vB;
                uniform sampler2D uPressure;
                uniform sampler2D uVelocity;
                void main () {
                    float L = texture2D(uPressure, vL).x;
                    float R = texture2D(uPressure, vR).x;
                    float T = texture2D(uPressure, vT).x;
                    float B = texture2D(uPressure, vB).x;
                    vec2 velocity = texture2D(uVelocity, vUv).xy;
                    velocity.xy -= vec2(R - L, T - B);
                    gl_FragColor = vec4(velocity, 0.0, 1.0);
                }
            `;

            // Programs
            const splatProgram = createProgram(baseVertexShader, splatShader);
            const curlProgram = createProgram(baseVertexShader, curlShader);
            const vorticityProgram = createProgram(baseVertexShader, vorticityShader);
            const divergenceProgram = createProgram(baseVertexShader, divergenceShader);
            const clearProgram = createProgram(baseVertexShader, clearShader);
            const pressureProgram = createProgram(baseVertexShader, pressureShader);
            const gradientSubtractProgram = createProgram(baseVertexShader, gradientSubtractShader);
            const advectionProgram = createProgram(baseVertexShader, advectionShader);
            const displayProgram = createProgram(baseVertexShader, displayShaderSource);

            // Uniforms
            function getUniforms(program) {
                let uniforms = {};
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }

            const programs = [splatProgram, curlProgram, vorticityProgram, divergenceProgram, clearProgram, pressureProgram, gradientSubtractProgram, advectionProgram, displayProgram];
            programs.forEach(p => p.uniforms = getUniforms(p));

            // FBO Helpers
            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                let texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
                
                let fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);
                
                return { texture, fbo, width: w, height: h, texelSizeX: 1.0 / w, texelSizeY: 1.0 / h, attach: (id) => { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, texture); return id; } };
            }

            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                let fbo2 = createFBO(w, h, internalFormat, format, type, param);
                return {
                    width: w, height: h, texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY,
                    get read() { return fbo1; }, set read(value) { fbo1 = value; },
                    get write() { return fbo2; }, set write(value) { fbo2 = value; },
                    swap() { let temp = fbo1; fbo1 = fbo2; fbo2 = temp; }
                };
            }

            // Init FBOs
            let dye, velocity, divergence, curl, pressure;
            
            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = gl.RGBA;
                const rg = gl.RG || gl.RGBA; // Fallback
                const r = gl.RED || gl.RGBA; // Fallback
                
                const formatRGBA = { internalFormat: gl.RGBA16F || gl.RGBA, format: gl.RGBA };
                const formatRG = { internalFormat: gl.RG16F || gl.RGBA, format: gl.RG || gl.RGBA };
                const formatR = { internalFormat: gl.R16F || gl.RGBA, format: gl.RED || gl.RGBA };

                dye = createDoubleFBO(dyeRes.width, dyeRes.height, formatRGBA.internalFormat, formatRGBA.format, texType, gl.LINEAR);
                velocity = createDoubleFBO(simRes.width, simRes.height, formatRG.internalFormat, formatRG.format, texType, gl.LINEAR);
                divergence = createFBO(simRes.width, simRes.height, formatR.internalFormat, formatR.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, formatR.internalFormat, formatR.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, formatR.internalFormat, formatR.format, texType, gl.NEAREST);
            }

            function getResolution(resolution) {
                let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
                if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
                let min = Math.round(resolution);
                let max = Math.round(resolution * aspectRatio);
                if (gl.drawingBufferWidth > gl.drawingBufferHeight) return { width: max, height: min };
                else return { width: min, height: max };
            }

            function blit(target) {
                if (target == null) {
                    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                } else {
                    gl.viewport(0, 0, target.width, target.height);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                }
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }

            // Quad buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(0);

            function update() {
                resizeCanvas();
                const dt = Math.min((Date.now() - lastUpdateTime) / 1000, 0.016);
                lastUpdateTime = Date.now();
                
                gl.disable(gl.BLEND);
                
                // CURL
                gl.useProgram(curlProgram);
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);

                // VORTICITY
                gl.useProgram(vorticityProgram);
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();

                // DIVERGENCE
                gl.useProgram(divergenceProgram);
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);

                // CLEAR
                gl.useProgram(clearProgram);
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();

                // PRESSURE
                gl.useProgram(pressureProgram);
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }

                // GRADIENT SUBTRACT
                gl.useProgram(gradientSubtractProgram);
                gl.uniform2f(gradientSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();

                // ADVECTION
                gl.useProgram(advectionProgram);
                gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
                let velocityId = velocity.read.attach(0);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                gl.uniform1f(advectionProgram.uniforms.dt, dt);
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                blit(velocity.write);
                velocity.swap();

                gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                blit(dye.write);
                dye.swap();

                // DISPLAY
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.useProgram(displayProgram);
                gl.uniform1i(displayProgram.uniforms.uTexture, dye.read.attach(0));
                if (config.SHADING) {
                     gl.uniform2f(displayProgram.uniforms.texelSize, 1.0 / gl.drawingBufferWidth, 1.0 / gl.drawingBufferHeight);
                }
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

                requestAnimationFrame(update);
            }

            function resizeCanvas() {
                let width = window.innerWidth;
                let height = window.innerHeight;
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    initFramebuffers();
                }
            }

            function splat(x, y, dx, dy, color) {
                gl.useProgram(splatProgram);
                gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
                gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
                gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100.0);
                blit(velocity.write);
                velocity.swap();

                gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                blit(dye.write);
                dye.swap();
            }

            let lastUpdateTime = Date.now();
            initFramebuffers();
            update();

            // Interactions
            window.addEventListener('mousemove', e => {
                splat(e.clientX, e.clientY, e.movementX * 10, -e.movementY * 10, { r:0.2, g:0.4, b:1.0 });
            });
            window.addEventListener('touchmove', e => {
                const t = e.touches[0];
                splat(t.clientX, t.clientY, 10, 10, { r:0.2, g:0.4, b:1.0 });
            });
            // Initial Splat
            splat(window.innerWidth / 2, window.innerHeight / 2, 0, -20, { r:0.5, g:0.5, b:0.5 });
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
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-60" height="962" id="fluid" width="1312"></canvas>

<header className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:layers" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18l5.86 3.09c.89.46 1.34.7 1.34 1.22c0 .53-.45.76-1.34 1.23l-5.86 3.08c-.46.25-.69.37-1.02.37s-.56-.13-1.02-.37L4.97 7.72c-.89-.47-1.34-.7-1.34-1.23c0-.52.45-.75 1.34-1.22l5.86-3.09c.46-.24.69-.37 1.02-.37s.56.13 1.02.37m-5.86 9.87L2.4 9.61a.8.8 0 0 0-1.13.26a.8.8 0 0 0 .25 1.13l5.06 2.66c.46.24.69.36 1.01.36s.56-.12 1.02-.36l8.83-4.65a.8.8 0 0 0 .26-1.13a.8.8 0 0 0-1.13-.26l-3.37 1.78m-7.23 4.22L2.4 14.97a.8.8 0 0 0-1.13.26a.8.8 0 0 0 .25 1.13l5.06 2.66c.46.24.69.36 1.01.36s.56-.12 1.02-.36l8.83-4.65a.8.8 0 0 0 .26-1.13a.8.8 0 0 0-1.13-.26l-3.37 1.78" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg font-semibold tracking-tight font-sans" style={{}}>Growvo</span>
</div>
<nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-400" style={{}}>
<a className="transition-colors hover:text-white font-sans" href="#about" style={{}}>About</a>
<a className="transition-colors hover:text-white font-sans" href="#services" style={{}}>Services</a>
<a className="transition-colors hover:text-white font-sans" href="#skills" style={{}}>Skills</a>
<a className="transition-colors hover:text-white font-sans" href="#projects" style={{}}>Projects</a>
<a className="transition-colors hover:text-white font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="transition-colors hover:text-white font-sans" href="#career" style={{}}>Career</a>
</nav>
<a className="hidden md:block text-sm font-medium transition-colors text-white hover:text-indigo-400 font-sans" href="#contact" style={{}}>
                Contact Me →
            </a>

<button className="lg:hidden text-neutral-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" style={{}}>
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full border-b p-4 flex flex-col gap-4 lg:hidden bg-neutral-900 border-white/10" id="mobile-menu" style={{}}>
<a className="text-neutral-400 hover:text-white font-sans" href="#about" style={{}}>About</a>
<a className="text-neutral-400 hover:text-white font-sans" href="#services" style={{}}>Services</a>
<a className="text-neutral-400 hover:text-white font-sans" href="#skills" style={{}}>Skills</a>
<a className="text-neutral-400 hover:text-white font-sans" href="#projects" style={{}}>Projects</a>
<a className="text-neutral-400 hover:text-white font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="text-indigo-400 font-sans" href="#contact" style={{}}>Get Started</a>
</div>
</header>
<main className="">

<section className="md:pt-48 md:pb-32 pt-40 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-5xl mr-auto ml-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium tracking-wide text-indigo-400 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" style={{}}></span>
</span>
                    ACCEPTING NEW PROJECTS
                </div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1] text-white font-google-sans-flex font-normal" style={{}}>
                    Smart &amp; Affordable Solutions <br/>
<span className="text-neutral-500 font-google-sans-flex font-normal" style={{}}>for Web, Apps, AI, and Careers.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-neutral-400 font-sans" style={{}}>
                    Choose from small, medium, and large project packages or request a custom solution. Professional development and career services tailored to your needs.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="shiny-cta group" onclick="window.location.href='#services'">
<span className="flex items-center gap-2 font-sans" style={{}}>
                            View Services
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<a className="px-6 py-3 rounded-full border font-medium transition-colors flex items-center gap-2 border-white/10 text-neutral-300 hover:bg-white/5 font-sans" href="#contact" style={{}}>
                        Contact Me
                    </a>
</div>

<div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t mt-12 max-w-4xl mx-auto border-white/5">
<div className="text-center">
<p className="text-2xl text-white font-google-sans-flex font-normal" style={{}}>10+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-sans" style={{}}>Projects Completed</p>
</div>
<div className="text-center">
<p className="text-2xl text-white font-google-sans-flex font-normal" style={{}}>2+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-sans" style={{}}>Years Experience</p>
</div>
<div className="text-center">
<p className="text-2xl text-white font-google-sans-flex font-normal" style={{}}>100%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-sans" style={{}}>Client Satisfaction</p>
</div>
<div className="text-center">
<p className="text-2xl text-white font-google-sans-flex font-normal" style={{}}>24h</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1 font-sans" style={{}}>Response Time</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-black/40" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-10">
<div className="md:w-1/3">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded flex items-center justify-center text-indigo-500 bg-indigo-600/20" style={{}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h2 className="text-2xl text-white font-google-sans-flex font-normal" style={{}}>Stalight Technology</h2>
</div>
<p className="text-sm font-medium uppercase tracking-wider mb-2 text-indigo-400 font-sans" style={{}}>Innovating the Future</p>
</div>
<div className="md:w-2/3 space-y-4">
<p className="leading-relaxed text-neutral-300 font-sans" style={{}}>
                            We are a dynamic tech company specializing in cutting-edge web development, mobile applications, and AI/ML solutions. Our passionate team of innovators is dedicated to creating scalable, user-centric digital experiences that drive real-world impact across education, healthcare, and enterprise sectors.
                        </p>
<p className="text-sm text-neutral-400 font-sans" style={{}}>
                            Founded with a vision to bridge the gap between technology and human needs, we combine technical expertise with creative problem-solving. This platform serves as a freelancing hub where we connect talented developers with exciting projects, much like a modern freelancing website, enabling seamless collaboration and innovation.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-google-sans-flex font-normal" style={{}}>Professional Services</h2>
<p className="max-w-xl text-neutral-400 font-sans" style={{}}>From web development to career services, I provide comprehensive solutions to help you achieve your goals with quality and expertise.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-colors group flex flex-col" style={{}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-400" style={{}}>
<svg aria-hidden="true" data-icon="lucide:code" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-sans" style={{}}>Web Development</h3>
<p className="text-xs leading-relaxed mb-4 flex-grow text-neutral-400 font-sans" style={{}}>
                        Full-stack web applications with modern technologies like React, Django, and Node.js.
                    </p>
<div className="text-xl font-bold mb-4 text-white font-sans" style={{}}>₹3,500 <span className="text-xs font-normal text-neutral-500 font-sans" style={{}}>starting</span></div>
<ul className="text-xs text-neutral-500 space-y-2 mb-4" style={{}}>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Responsive design</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> API &amp; DB integration</li>
</ul>
<a className="text-xs font-medium transition-colors text-indigo-400 hover:text-white font-sans" href="#contact" style={{}}>Get Started →</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-pink-500/30 transition-colors group flex flex-col" style={{}}>
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-pink-400" style={{}}>
<svg aria-hidden="true" data-icon="lucide:smartphone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-sans" style={{}}>Mobile Apps</h3>
<p className="text-xs leading-relaxed mb-4 flex-grow text-neutral-400 font-sans" style={{}}>
                        Cross-platform mobile applications with React Native and Flutter.
                    </p>
<div className="text-xl font-bold mb-4 text-white font-sans" style={{}}>₹5,000 <span className="text-xs font-normal text-neutral-500 font-sans" style={{}}>starting</span></div>
<ul className="text-xs text-neutral-500 space-y-2 mb-4" style={{}}>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> iOS &amp; Android</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Native performance</li>
</ul>
<a className="text-xs font-medium transition-colors text-indigo-400 hover:text-white font-sans" href="#contact" style={{}}>Get Started →</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-yellow-500/30 transition-colors group flex flex-col" style={{}}>
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-yellow-400" style={{}}>
<svg aria-hidden="true" data-icon="lucide:brain" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-sans" style={{}}>AI/ML Solutions</h3>
<p className="text-xs leading-relaxed mb-4 flex-grow text-neutral-400 font-sans" style={{}}>
                        Intelligent applications with machine learning and automation solutions.
                    </p>
<div className="text-xl font-bold mb-4 text-white font-sans" style={{}}>₹7,000 <span className="text-xs font-normal text-neutral-500 font-sans" style={{}}>starting</span></div>
<ul className="text-xs text-neutral-500 space-y-2 mb-4" style={{}}>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom AI models</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Data automation</li>
</ul>
<a className="text-xs font-medium transition-colors text-indigo-400 hover:text-white font-sans" href="#contact" style={{}}>Get Started →</a>
</div>

<div className="glass-card p-6 rounded-xl hover:border-indigo-500/30 transition-colors group flex flex-col" style={{}}>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-400" style={{}}>
<svg aria-hidden="true" data-icon="lucide:briefcase" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 font-sans" style={{}}>Career Services</h3>
<p className="text-xs leading-relaxed mb-4 flex-grow text-neutral-400 font-sans" style={{}}>
                        Professional career development and placement assistance.
                    </p>
<div className="text-xl font-bold mb-4 text-white font-sans" style={{}}>₹2,000 <span className="text-xs font-normal text-neutral-500 font-sans" style={{}}>starting</span></div>
<ul className="text-xs text-neutral-500 space-y-2 mb-4" style={{}}>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Resume design</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Interview coaching</li>
</ul>
<a className="text-xs font-medium transition-colors text-indigo-400 hover:text-white font-sans" href="#contact" style={{}}>Get Started →</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/20" id="skills">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3 sticky top-32 h-fit">
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 font-google-sans-flex font-normal" style={{}}>Technical Skills</h2>
<p className="mb-8 text-neutral-400 font-sans" style={{}}>Comprehensive expertise across modern technologies and frameworks.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1 text-neutral-400" style={{}}><span className="font-sans" style={{}}>Backend Development</span><span className="font-sans" style={{}}>75%</span></div>
<div className="w-full rounded-full h-1.5 bg-neutral-800" style={{}}><div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '75%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 text-neutral-400" style={{}}><span className="font-sans" style={{}}>Frontend Development</span><span className="font-sans" style={{}}>65%</span></div>
<div className="w-full rounded-full h-1.5 bg-neutral-800" style={{}}><div className="bg-pink-500 h-1.5 rounded-full" style={{width: '65%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 text-neutral-400" style={{}}><span className="font-sans" style={{}}>DevOps &amp; Deployment</span><span className="font-sans" style={{}}>60%</span></div>
<div className="w-full rounded-full h-1.5 bg-neutral-800" style={{}}><div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '60%'}}></div></div>
</div>
</div>
</div>
<div className="lg:w-2/3 grid md:grid-cols-2 gap-8">

<div className="glass-card p-6 rounded-lg">
<h3 className="text-lg font-medium mb-4 border-b pb-2 text-white border-white/5 font-sans" style={{}}>Languages &amp; Frameworks</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Python</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>JavaScript</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>TypeScript</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Django</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>FastAPI</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Node.js</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Next.js</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Vue.js</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>TensorFlow</span>
</div>
</div>

<div className="glass-card p-6 rounded-lg">
<h3 className="text-lg font-medium mb-4 border-b pb-2 text-white border-white/5 font-sans" style={{}}>Frontend</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>React.js</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Redux</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Tailwind</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Material-UI</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Framer Motion</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Three.js</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Vite</span>
</div>
</div>

<div className="glass-card p-6 rounded-lg">
<h3 className="text-lg font-medium mb-4 border-b pb-2 text-white border-white/5 font-sans" style={{}}>Databases &amp; DevOps</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>PostgreSQL</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>MySQL</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>MongoDB</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Redis</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Docker</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Kubernetes</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Jenkins</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>AWS</span>
</div>
</div>

<div className="glass-card p-6 rounded-lg">
<h3 className="text-lg font-medium mb-4 border-b pb-2 text-white border-white/5 font-sans" style={{}}>Tools &amp; Soft Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>VS Code</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Figma</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Git/GitHub</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Leadership</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Communication</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Agile</span>
<span className="px-2 py-1 rounded text-xs bg-white/5 text-neutral-300 font-sans" style={{}}>Problem Solving</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
<h2 className="text-3xl md:text-4xl tracking-tight text-center mb-16 font-google-sans-flex font-normal" style={{}}>Featured Projects</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>E-COMMERCE</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>E-commerce Platform</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            Full-stack solution with Realtime Chat and Payment Gateway Integration.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>React</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>Node.js</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>MongoDB</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18"></path><path d="M5 21V7l8-4 8 4v14"></path><path d="M17 21v-8H7v8"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>REAL ESTATE</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Real Estate Platform</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            Property listing and management platform with advanced search and virtual tours.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>Next.js</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>PostgreSQL</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>MOBILE APP</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Safe Space</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            Mobile app with location tracking, panic button, and emergency alerts.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>React.js</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>Django</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>AI / ML</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>GitSolveAI</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            AI-powered platform for automated GitHub issue resolution and CI/CD.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>React</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>Node.js</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>GitHub API</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>AI / DATABASE</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Chat2DB</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            Natural language database chat for querying databases in plain English.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>React</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>NLP</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>SQL</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-3">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
<span className="text-xs font-semibold tracking-wide text-neutral-300 font-sans" style={{}}>AR / IOT</span>
</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>AR Technical Support</h3>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>
                            Augmented reality platform for remote technical support in manufacturing.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>React Native</span>
<span className="text-[10px] px-2 py-0.5 rounded border bg-indigo-900/30 text-indigo-300 border-indigo-800/30 font-sans" style={{}}>AR/VR</span>
</div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors border-white/10 hover:bg-white/5 font-sans" style={{}}>Request Demo</button>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/40" id="career">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-google-sans-flex font-normal" style={{}}>Career Services</h2>
<p className="max-w-xl mx-auto text-neutral-400 font-sans" style={{}}>Professional development to help you stand out in the competitive job market.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-neutral-800 text-white" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white font-sans" style={{}}>Resume Design</h3>
<button className="text-xs text-indigo-400 hover:text-white font-sans" style={{}}>Create My Resume →</button>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-neutral-800 text-white" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white font-sans" style={{}}>LinkedIn Optimization</h3>
<button className="text-xs text-indigo-400 hover:text-white font-sans" style={{}}>Optimize Profile →</button>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-neutral-800 text-white" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white font-sans" style={{}}>Interview Coaching</h3>
<button className="text-xs text-indigo-400 hover:text-white font-sans" style={{}}>Start Coaching →</button>
</div>
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-neutral-800 text-white" style={{}}>
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white font-sans" style={{}}>Portfolio Website</h3>
<button className="text-xs text-indigo-400 hover:text-white font-sans" style={{}}>Build Portfolio →</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<h2 className="text-3xl md:text-4xl tracking-tight text-center mb-16 font-google-sans-flex font-normal" style={{}}>Pricing Plans</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-xl flex flex-col">
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Small</h3>
<p className="text-sm mb-6 text-neutral-400 font-sans" style={{}}>Perfect for startups</p>
<div className="text-3xl mb-6 text-white font-google-sans-flex font-normal" style={{}}>₹7,000</div>
<ul className="text-sm space-y-3 mb-8 flex-grow text-neutral-400" style={{}}>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Delivery: 2-3 weeks</li>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi page application</li>
</ul>
<button className="w-full py-3 rounded-full border transition-all text-sm font-medium border-white/20 hover:bg-white hover:text-black font-sans" style={{}}>Get Started</button>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col border-indigo-500/50 bg-indigo-500/5 relative" style={{}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white font-sans" style={{}}>Most Popular</div>
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Medium</h3>
<p className="text-sm mb-6 text-neutral-400 font-sans" style={{}}>Comprehensive solution</p>
<div className="text-3xl mb-6 text-white font-google-sans-flex font-normal" style={{}}>₹12,000</div>
<ul className="text-sm space-y-3 mb-8 flex-grow text-neutral-400" style={{}}>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Delivery: 4-6 weeks</li>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Admin Panel &amp; DB</li>
</ul>
<button className="w-full py-3 rounded-full hover:bg-indigo-500 transition-all text-sm font-medium bg-indigo-600 text-white font-sans" style={{}}>Get Started</button>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col">
<h3 className="text-xl font-medium mb-2 font-sans" style={{}}>Large</h3>
<p className="text-sm mb-6 text-neutral-400 font-sans" style={{}}>Enterprise solution</p>
<div className="text-3xl mb-6 text-white font-google-sans-flex font-normal" style={{}}>₹17,000</div>
<ul className="text-sm space-y-3 mb-8 flex-grow text-neutral-400" style={{}}>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Delivery: 8-12 weeks</li>
<li className="flex gap-2 font-sans" style={{}}><svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom CMS/Dashboard</li>
</ul>
<button className="w-full py-3 rounded-full border transition-all text-sm font-medium border-white/20 hover:bg-white hover:text-black font-sans" style={{}}>Get Started</button>
</div>
</div>
<div className="text-center mt-12">
<a className="text-sm text-neutral-400 hover:text-white font-sans" href="#contact" style={{}}>Need something custom? Let's discuss your unique requirements →</a>
</div>
</section>

<section className="bg-gradient-to-b border-t pt-24 pb-24 from-black to-neutral-900/50 border-white/5" id="team" style={{}}>
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="relative aspect-square rounded-2xl overflow-hidden border flex items-center justify-center border-white/10 bg-neutral-900" style={{}}>

<svg className="text-neutral-600" fill="none" height="64" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6">
<h2 className="text-3xl tracking-tight font-google-sans-flex font-normal" style={{}}>Join Our Team</h2>
<h3 className="text-xl font-medium text-neutral-400 font-sans" style={{}}>Build amazing solutions together.</h3>
<p className="leading-relaxed text-neutral-400 font-sans" style={{}}>
                            Ready to work on exciting client projects? Join our talented team. We bridge the gap between technology and human needs, creating scalable digital experiences.
                        </p>
<p className="leading-relaxed text-neutral-400 font-sans" style={{}}>
                            Whether you are a developer, designer, or AI specialist, we offer a collaborative environment to grow your skills and career.
                        </p>
<div className="pt-4">
<button className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors bg-white text-black hover:bg-neutral-200 font-sans" onclick="window.location.href='#contact'" style={{}}>
                                Apply Now
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 blur-3xl rounded-full -z-10 transform scale-50 bg-indigo-900/10" style={{}}></div>
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-google-sans-flex font-normal" style={{}}>
                    Get In Touch
                </h2>
<p className="text-lg text-neutral-400 font-sans" style={{}}>
                    Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
                </p>
<div className="flex flex-wrap justify-center gap-4 pt-4">
<a className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-colors hover:bg-white/5 font-sans" href="mailto:riteshnvisonex@gmail.com" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        Email
                    </a>
<a className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-colors hover:bg-white/5 font-sans" href="#" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16.9 12.3c-.3-2.6-2.6-2.6-2.6-2.6.4-1 .3-1.6.3-1.6-1.5-.7-2.6.6-2.6.6-.7-.2-1.8-.2-2.5 0 0 0-1.1-1.3-2.6-.6 0 0-.1.6.3 1.6 0 0-2.3 0-2.6 2.6 0 2.2 1.6 4.1 3.5 4.3-.3.4-.4 1-.4 1.4 0 0-.7.3-1.2 0-.6-.3-.9-1.2-1.1-1.4-.2-.2-.5-.2-.5 0 0 .2.2.4.4.7.2.3.6.8 1.4 1 1.5.3 1.7 1.7 1.7 1.7V20c0 .2.1.4.4.3 2.9-.9 5-3.6 5-6.8"></path></svg>
                        GitHub
                    </a>
<a className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-colors hover:bg-white/5 font-sans" href="#" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
<a className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 text-sm transition-colors hover:bg-white/5 font-sans" href="#" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
                        WhatsApp
                    </a>
</div>
<div className="text-sm text-neutral-500 mt-8 font-sans" style={{}}>
                    riteshnvisonex@gmail.com | +91 8660144040
                </div>
</div>
</section>
</main>

<footer className="border-t py-12 border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-neutral-500 font-sans" style={{}}>
                © 2025 Growvo. All rights reserved. <br/> Crafted with ❤️ in India.
            </div>
<div className="flex gap-8 text-sm font-medium text-neutral-400" style={{}}>
<a className="hover:text-white font-sans" href="#services" style={{}}>Services</a>
<a className="hover:text-white font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="hover:text-white font-sans" href="mailto:riteshnvisonex@gmail.com" style={{}}>Email</a>
</div>
</div>
</footer>



    </>
  );
}
