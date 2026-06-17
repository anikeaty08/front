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
            const displayProgram = createProgram(baseVertexShader, displayShaderSource); // Need to attach keywords for shading

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
                
                // For WebGL1 or fallbacks, we might need adjustments, simplified here for space
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
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-60" height="1024" id="fluid" width="1440"></canvas>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg aria-hidden="true" data-icon="lucide:clapperboard" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20.2 6 3 11l-.9-2.4c-.5-1.1.2-2.4 1.3-2.9L16.7 2c1.1-.5 2.4.2 2.9 1.3L20.2 6Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></g></svg>
<span className="font-bold tracking-wide text-lg">TOONLAB</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">خدماتنا</a>
<a className="hover:text-white transition-colors" href="#process">طريقة العمل</a>
<a className="hover:text-white transition-colors" href="#use-cases">أعمالنا</a>
<a className="hover:text-white transition-colors" href="#about">من نحن</a>
</nav>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors" href="https://wa.me/201068120270" target="_blank">
<svg height="1.2em" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766c-.001 1.298.38 2.27 1.019 3.287l-.711 2.592l2.654-.696c1.001.572 1.973.893 3.03.893c3.178 0 5.767-2.587 5.767-5.766c.001-3.187-2.575-5.77-5.991-5.776z" fill="currentColor"></path></svg>
                تواصل معنا
            </a>

<button className="md:hidden text-neutral-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-neutral-900 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden text-right" id="mobile-menu">
<a className="text-neutral-400 hover:text-white" href="#services">خدماتنا</a>
<a className="text-neutral-400 hover:text-white" href="#process">طريقة العمل</a>
<a className="text-neutral-400 hover:text-white" href="#use-cases">أعمالنا</a>
<a className="text-green-400 font-semibold" href="https://wa.me/201068120270" target="_blank">تواصل عبر واتساب</a>
</div>
</header>
<main className="">

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    متاحون لاستقبال مشاريع جديدة
                </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.2]">
                    نحول أفكارك إلى <br/>
<span className="text-neutral-500">قصص متحركة تنبض بالحياة</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    استوديو متخصص في إنتاج فيديوهات الكرتون والموشن جرافيك بجودة 4K. نبتكر شخصيات وعوالم تأسر جمهورك وتوصل رسالتك بوضوح وإبداع.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
<a className="shiny-cta group text-decoration-none" href="https://wa.me/201068120270" target="_blank">
<span className="flex items-center gap-2">
                            احجز استشارتك مجاناً
                            <svg aria-hidden="true" className="rotate-180 rtl:rotate-0" data-icon="lucide:arrow-left" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#use-cases">
<svg aria-hidden="true" data-icon="lucide:play-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        شاهد أعمالنا
                    </a>
</div>

<div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12 max-w-3xl mx-auto" dir="rtl">
<div className="text-center">
<p className="text-2xl font-bold text-white">4K</p>
<p className="text-xs text-neutral-500 font-semibold mt-1">جودة فائقة</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">100%</p>
<p className="text-xs text-neutral-500 font-semibold mt-1">شخصيات حصرية</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">50+</p>
<p className="text-xs text-neutral-500 font-semibold mt-1">مشروع ناجح</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">24/7</p>
<p className="text-xs text-neutral-500 font-semibold mt-1">دعم فني</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-8 font-semibold">نستخدم أحدث أدوات الإنتاج العالمية</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500" dir="ltr">

<div className="flex items-center gap-2 text-xl font-semibold text-white">
<svg height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.46 3H4.54A1.54 1.54 0 0 0 3 4.54v14.92A1.54 1.54 0 0 0 4.54 21h14.92A1.54 1.54 0 0 0 21 19.46V4.54A1.54 1.54 0 0 0 19.46 3m-8.13 14h-2l-.33-1H7.17l-.34 1H5L7.87 7h2.26zm3.51-1h-2v-2.35h-1.68V16h-2v-7.38h2V12h1.68V8.62h2zm3.62 0h-2V13h-1.63v3h-2v-7.38h5.63zm-5.92-5.18h-1.12l-.56 1.76h2.25z" fill="currentColor"></path></svg> 
                        After Effects
                    </div>
<div className="flex items-center gap-2 text-xl font-semibold text-white">
<svg height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.458 3H4.54A1.54 1.54 0 0 0 3 4.542v14.916A1.54 1.54 0 0 0 4.542 21h14.916A1.54 1.54 0 0 0 21 19.458V4.542A1.54 1.54 0 0 0 19.458 3zM10.875 16H8.833l-.333-1.042H6.667L6.333 16H4.5l2.917-9h2.208zm-.75-4.125h-1.125L8.417 10zM17 16h-2v-7.375h2zm-2-8.583a1.208 1.208 0 1 1 1.208-1.209a1.21 1.21 0 0 1-1.208 1.21" fill="currentColor"></path></svg>
                        Illustrator
                    </div>
<div className="flex items-center gap-2 text-xl font-semibold text-white">
<svg height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 12.1L8.2 8.7c-2-1.3-3.6-2.5-1.9-4.8c1.3-1.7 5.1-.3 8 1.5c2.9 1.9 4.3 4.7 3.3 6.6c-1.3 2.5-4.3 2.7-8.2 2.7c-4 0-7.8-1.5-8.5-4.2c-.7-2.6 1.7-5.1 4.7-5c-2.4 1.6-4.1 4.2-2.1 6.8c1.3 1.7 4.2 1 7-1.1s5-4.7 3.7-6.5c-.8-1-2.9-1.2-5.4-1c4.5-.4 6.9 3.5 4.6 6.8z" fill="currentColor"></path></svg> 
                        Blender
                    </div>
<div className="flex items-center gap-2 text-xl font-semibold text-white">
<svg height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3v18l9-9z" fill="currentColor"></path></svg>
                        Davinci
                    </div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16 text-right">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">خدمات الإنتاج الإبداعي</h2>
<p className="text-neutral-400 max-w-xl">نحن لا ننتج مجرد فيديوهات، بل نصمم تجارب بصرية متكاملة تخدم أهدافك التسويقية.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl hover:border-blue-500/30 transition-colors group text-right">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:film" height="1.5em" role="img" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><path d="M7 3v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 7.5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 12h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M3 16.5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M17 3v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M17 7.5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M17 16.5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">أفلام الكرتون</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        ننتج مسلسلات وأفلام كرتونية قصيرة بشخصيات فريدة وسيناريو مشوق يناسب جميع المنصات الاجتماعية.
                    </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> رسم شخصيات حصري</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> تمثيل صوتي احترافي</li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:border-green-500/30 transition-colors group text-right">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:monitor-play" height="1.5em" role="img" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 17h6v-2h-6zm-9-4H3V3h12v4M3 13v6h6v-6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">موشن جرافيك</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        فيديوهات موشن جرافيك توضيحية لتبسيط خدماتك ومنتجاتك المعقدة بأسلوب بصري سلس وجذاب.
                    </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> تحريك سلس وعصري</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> تعليق صوتي متعدد اللغات</li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:border-purple-500/30 transition-colors group text-right">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:pencil-ruler" height="1.5em" role="img" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 8.7L15.3 2.7a2.121 2.121 0 0 0-3 0L2.7 12.3a2.121 2.121 0 0 0 0 3L8.7 21.3a2.121 2.121 0 0 0 3 0L21.3 11.7a2.121 2.121 0 0 0 0-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m10 8 4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m14 12-1.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m12.5 13.5-1.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m11 15-1.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m9.5 16.5-1.5 1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">تصميم الهوية والشخصيات</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        نبتكر التمائم (Mascots) والهويات البصرية التي تعبر عن علامتك التجارية وتلتصق بذاكرة الجمهور.
                    </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> اسكتشات فنية أولية</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ملفات جاهزة للطباعة والتحريك</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3 sticky top-32 h-fit text-right">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">رحلة إنتاج الفيديو</h2>
<p className="text-neutral-400 mb-8">خطوات مدروسة تضمن لك نتيجة إبداعية عالية الجودة في الوقت المحدد.</p>
<a className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors inline-block" href="https://wa.me/201068120270" target="_blank">
                            ابدأ مشروعك الآن
                        </a>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6 flex-row-reverse md:flex-row">
<div className="pb-8 text-right flex-1">
<h3 className="text-xl font-semibold text-white mb-2">كتابة السيناريو (Script)</h3>
<p className="text-neutral-400 text-sm">نحول أفكارك إلى نص مكتوب باحترافية، يحدد الحوار والأحداث والرسالة التسويقية بدقة.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
</div>

<div className="flex gap-6 flex-row-reverse md:flex-row">
<div className="pb-8 text-right flex-1">
<h3 className="text-xl font-semibold text-white mb-2">الرسم والستوري بورد</h3>
<p className="text-neutral-400 text-sm">نرسم المشاهد والشخصيات يدوياً لتتخيل شكل الفيديو النهائي قبل البدء في التحريك.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
</div>

<div className="flex gap-6 flex-row-reverse md:flex-row">
<div className="pb-8 text-right flex-1">
<h3 className="text-xl font-semibold text-white mb-2">التحريك والمؤثرات</h3>
<p className="text-neutral-400 text-sm">مرحلة السحر! نبث الحياة في الرسومات ونضيف المؤثرات الصوتية والموسيقى الخلفية.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">3</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
</div>

<div className="flex gap-6 flex-row-reverse md:flex-row">
<div className="pb-8 text-right flex-1">
<h3 className="text-xl font-semibold text-white mb-2">التسليم بجودة 4K</h3>
<p className="text-neutral-400 text-sm">نسلمك الفيديو النهائي بأعلى جودة جاهز للنشر على يوتيوب ومنصات التواصل.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">4</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="use-cases">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">استخدامات الفيديو</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-xl flex flex-col justify-between text-right">
<div className="">
<div className="flex items-center gap-3 mb-4 justify-end">
<span className="text-sm font-semibold tracking-wide text-neutral-300">التجارة الإلكترونية</span>
<svg aria-hidden="true" data-icon="lucide:shopping-bag" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold mb-4">إعلانات ترويجية</h3>
<p className="text-neutral-400 text-sm mb-6">
<strong>التحدي:</strong> صعوبة جذب انتباه العميل في الثواني الأولى.<br/><br/>
<strong>الحل:</strong> فيديو موشن جرافيك قصير وسريع الإيقاع يعرض مميزات المنتج بشكل جذاب يزيد من معدلات التحويل.
                        </p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5">
<div className="flex items-center gap-3 text-xs text-neutral-400 font-mono justify-end">
                            "عرضنا المنتج بطريقة ممتعة زادت المبيعات بنسبة 40%"
                            <span className="text-green-400">:عميل</span>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col justify-between text-right">
<div>
<div className="flex items-center gap-3 mb-4 justify-end">
<span className="text-sm font-semibold tracking-wide text-neutral-300">الشركات والشركات الناشئة</span>
<svg aria-hidden="true" data-icon="lucide:building" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></g></svg>
</div>
<h3 className="text-2xl font-semibold mb-4">فيديوهات شرح الخدمة</h3>
<p className="text-neutral-400 text-sm mb-6">
<strong>التحدي:</strong> العملاء لا يفهمون كيفية عمل تطبيقك أو خدمتك المعقدة.<br/><br/>
<strong>الحل:</strong> فيديو "Explain Video" بأسلوب كرتوني يبسط الفكرة في دقيقة واحدة ويجعلها مفهومة للجميع.
                        </p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5">
<div className="flex items-center gap-3 text-xs text-neutral-400 font-mono justify-end">
                             "الفيديو وفر علينا ساعات من شرح الخدمة للعملاء"
                             <span className="text-green-400">:عميل</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-24 pb-24" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-x-12 gap-y-12 items-center">
<div className="w-full md:w-1/3 flex justify-center items-center">
<div className="relative group">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 opacity-20 blur-2xl rounded-full animate-pulse transition-opacity group-hover:opacity-30"></div>

</div>
</div>
<div className="w-full md:w-2/3 space-y-6 text-right">
<h2 className="text-3xl font-bold tracking-tight">فريق ToonLab</h2>
<h3 className="text-xl text-neutral-400 font-medium">نصنع الإبداع، لا نقلد.</h3>
<p className="text-neutral-400 leading-relaxed">
                            في عالم مليء بالمحتوى المكرر، نؤمن بقوة القصة الأصلية. نحن لسنا مجرد رسامين، نحن فريق متكامل من الفنانين، كتاب السيناريو، ومحركي الجرافيك.
                        </p>
<p className="text-neutral-400 leading-relaxed">
                            مهمتنا هي مساعدة العلامات التجارية وصناع المحتوى على التميز من خلال فيديوهات احترافية تترك أثراً، وتلتزم بأعلى معايير الجودة الفنية.
                        </p>
<div className="pt-4 flex gap-4 justify-end">

<a className="text-neutral-400 hover:text-white" href="https://www.instagram.com/toonlab.eg/" target="_blank"><svg aria-hidden="true" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" rx="5" ry="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-400 hover:text-white" href="https://www.facebook.com/profile.php?id=61585850278883" target="_blank"><svg className="lucide lucide-facebook" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 transform scale-50"></div>
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    جاهز لتحويل فكرتك إلى فيديو؟
                </h2>
<p className="text-lg text-neutral-400">
                    لا تضيع وقتك في البحث. تواصل معنا الآن لنناقش مشروعك ونبدأ في التنفيذ فوراً.
                </p>
<div className="flex justify-center pt-4">
<a className="shiny-cta text-decoration-none" href="https://wa.me/201068120270" target="_blank">
<span>تواصل معنا عبر واتساب</span>
</a>
</div>
<p className="text-xs text-neutral-600 mt-8">رد سريع خلال ساعات العمل.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6" dir="rtl">
<div className="text-sm text-neutral-500">
                © 2024 ToonLab. جميع الحقوق محفوظة.
            </div>
<div className="flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white" href="#">سياسة الخصوصية</a>
<a className="hover:text-white" href="#">الشروط والأحكام</a>
<a className="hover:text-white" href="mailto:hello@toonlab.com">البريد الإلكتروني</a>
</div>
</div>
</footer>



    </>
  );
}
