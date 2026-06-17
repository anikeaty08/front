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
                BACK_COLOR: { r: 9, g: 9, b: 11 },
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
                const rg = gl.RG || gl.RGBA; 
                const r = gl.RED || gl.RGBA; 
                
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
                splat(e.clientX, e.clientY, e.movementX * 10, -e.movementY * 10, { r:0.2, g:0.8, b:0.4 }); // Emerald/Green splat
            });
            window.addEventListener('touchmove', e => {
                const t = e.touches[0];
                splat(t.clientX, t.clientY, 10, 10, { r:0.2, g:0.8, b:0.4 });
            });
            // Initial Splat
            splat(window.innerWidth / 2, window.innerHeight / 2, 0, -20, { r:0.2, g:0.6, b:0.4 });
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
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 mix-blend-screen" height="852" id="fluid" width="393"></canvas>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">

<span className="text-lg font-semibold text-white tracking-tight text-justify -translate-x-1 translate-y-2 scale-95">IAutomatics</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</nav>
<a className="hidden md:block hover:text-emerald-400 transition-colors text-base font-medium text-white" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">
                Book a Call →
            </a>

<button className="md:hidden text-zinc-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden" id="mobile-menu">
<a className="text-lg text-zinc-400 hover:text-white" href="#services">Services</a>
<a className="text-lg text-zinc-400 hover:text-white" href="#process">Process</a>
<a className="text-lg text-zinc-400 hover:text-white" href="#insights">Insights</a>
<a className="text-lg text-emerald-400" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">Book Strategy Call</a>
</div>
</header>
<main className="gap-x-3 gap-y-3">

<section className="overflow-hidden md:pt-52 md:pb-36 pt-40 pr-6 pb-24 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 blur-[120px] -z-10 rounded-full"></div>
<div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
<div className="inline-flex gap-2 text-sm font-medium text-emerald-200 tracking-wide bg-emerald-500/10 border-emerald-500/30 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center">Estamos aceptando nuevos clientes</div>
<h1 className="md:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight">Creamos sistemas inteligentes que <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-500">Hablan, Chatean, y Convierten.</span></h1>
<p className="md:text-2xl leading-relaxed text-xl text-zinc-400 max-w-3xl mr-auto ml-auto">Deja de perder Leads por enfocarte en los procesos manuales y tiempos de respuesta lentos. Utilice sistemas autónomos con IA y flujos de automatización que organicen su información, eliminen el reproceso, escalen su operación y gestione un control eficiente. Bienvenido al 2026</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
<a className="shiny-cta group" href="https://calendar.app.google/vBsqxab81Y1Suxtz5" target="_blank">
<span className="flex items-center gap-2">Agende una llamada</span>
</a>
<a className="hover:bg-zinc-800 transition-colors flex items-center gap-3 text-lg font-medium text-zinc-200 border-zinc-700 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#insights">Revise nuestros Insigth</a>
</div>

<div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 mt-16 max-w-4xl mx-auto">
<div className="text-center">
<p className="text-3xl font-bold text-white">+50</p>
<p className="uppercase text-sm text-zinc-500 tracking-wide mt-2">Exogenas generadas</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">24/7</p>
<p className="uppercase text-sm text-zinc-500 tracking-wide mt-2">soporte</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">40%</p>
<p className="uppercase text-sm text-zinc-500 tracking-wide mt-2">Incremento de leads</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">+5</p>
<p className="uppercase text-sm text-zinc-500 tracking-wide mt-2">sistemas construidos</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-900/30 border-white/5 pt-10 pb-10 gap-x-3 gap-y-3">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-3 gap-y-3">
<p className="uppercase text-base text-zinc-500 tracking-widest mb-10">Potenciando la automatización para Independientes y PYMES mediante</p>
<div className="flex flex-wrap gap-10 md:gap-20 hover:grayscale-0 transition-all duration-500 opacity-70 grayscale gap-x-3 gap-y-3 justify-center">

<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="simple-icons:n8n" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg> n8n
                    </div>
<div className="flex gap-3 hover:text-white transition-colors text-2xl font-semibold text-zinc-300 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="" data-icon="simple-icons:openai" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg> OpenAI
                    </div>

<div className="flex hover:text-white transition-colors text-2xl font-semibold text-zinc-300 gap-x-3 gap-y-3 items-center">Gemini</div>
<div className="flex gap-3 hover:text-white transition-colors text-2xl font-semibold text-zinc-300 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="" data-icon="simple-icons:airtable" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.27 3.27 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.3 3.3 0 0 0-1.272-.257M23.4 8.056a.6.6 0 0 0-.222.045l-10.012 3.877a.61.61 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.58.58 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.64.64 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006l.307-.147l2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.6.6 0 0 0-.207-.044z" fill="currentColor"></path></svg> Airtable
                    </div>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-20">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">
Servicios principales de automatización</h2>
<p className="text-xl text-zinc-400 max-w-2xl">No solo usamos IA. Diseñamos una infraestructura robusta que gestiona la comunicación y el procesamiento de datos por usted.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-2xl hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon height="1.5em" icon="solar:microphone-3-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="z-10 text-2xl font-medium text-white mb-4 relative">Agentes IA de Voz</h3>
<p className="leading-relaxed text-base text-zinc-400 z-10 mb-6 relative">Agentes de llamadas entrantes y salientes con tecnología de Retell AI. Gestionan la calificación de clientes potenciales, la reserva de citas y las consultas de atención al cliente 24/7.</p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center"><iconify-icon className="text-emerald-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Latencia inferior a 800 ms</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center"><iconify-icon className="text-emerald-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Integracion a Base de datos</li>
</ul>
</div>

<div className="glass-card p-10 rounded-2xl hover:border-green-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<svg className="" fill="currentColor" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
</div>
<h3 className="z-10 text-2xl font-medium text-white mb-4 relative">Whatsapp Automatico</h3>
<p className="leading-relaxed text-base text-zinc-400 z-10 mb-6 relative">Integración directa con la API de WhatsApp Business. Responde automáticamente a clientes potenciales, y califica a tus prospectos.</p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center"><iconify-icon className="text-green-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Respuesta instantanea al Lead</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center"><iconify-icon className="text-green-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Contesta varias conversaciones simultaneas</li>
</ul>
</div>

<div className="glass-card p-10 rounded-2xl hover:border-teal-500/50 transition-colors group relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"><div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div><div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div></div>
<div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon height="1.5em" icon="solar:round-transfer-horizontal-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="z-10 text-2xl font-medium text-white mb-4 relative">Flujos Autonomos de Compras y Ventas</h3>
<p className="leading-relaxed z-10 text-base text-zinc-400 mb-6 relative">Enviamos automaticamente ordenes de compra a tus proveedores | Generamos y enviamos cotizaciones de venta automaticas.</p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center"><iconify-icon className="text-teal-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Entrada y salidas de datos sin error</li>
<li className="flex gap-x-3 gap-y-3 items-center"><iconify-icon className="text-teal-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>Ahorro del 90% del tiempo en cotizaciones.</li>
</ul>
</div>
</div>
</section>

<section className="py-28 border-y border-white/5 bg-zinc-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-20">
<div className="md:w-1/3 h-fit">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-8">Como construimos tus sistemas</h2>
<p className="text-xl text-zinc-400 mb-10">Un enfoque transparente y centrado en la ingeniería. Sin trampas, solo lógica y estadistica.</p>
<a className="hover:bg-zinc-200 transition-colors inline-block text-base font-semibold text-zinc-950 bg-zinc-100 rounded-lg pt-3 pr-6 pb-3 pl-6" href="https://calendar.app.google/vBsqxab81Y1Suxtz5" target="_blank">Comienza ahora</a>
</div>
<div className="md:w-2/3 space-y-16">

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20">1</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Auditamos y Diseñamos sus Procesos.</h3>
<p className="text-lg text-zinc-400">Mapeamos sus procesos manuales actuales. Diseñamos el flujo de conversación y la lógica de datos antes de escribir una sola línea de código.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">2</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Creamos la Arquitectura</h3>
<p className="text-lg text-zinc-400">Creamos y conectamos sistemas para luego integrarlos con API's y lenguajes de programacion como python.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">3</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Realizamos Pruebas con datos reales.</h3>
<p className="text-lg text-zinc-400">Pruebas rigurosas para garantizar que la IA gestione correctamente las objeciones, los acentos y los casos extremos. Refinamos la latencia y la calidad de respuesta.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">4</div>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white mb-3">Transferencia &amp; Educación</h3>
<p className="text-lg text-zinc-400">El sistema ya funciona. Proporcionamos documentación y un panel de control para que puedas supervisar llamadas y clientes potenciales sin necesidad de nuestra ayuda. Capacitamos al personal elegido por ustedes.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-gradient-to-b from-zinc-950 to-zinc-900 border-zinc-800 border-t pt-28 pb-28" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-5/12">
<div className="aspect-square overflow-hidden hover:grayscale-0 transition-all duration-700 bg-zinc-800 border-zinc-700 border rounded-2xl relative shadow-2xl grayscale">

<img alt="Elevate Business" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="w-full md:w-7/12 space-y-8">
<h2 className="text-4xl font-semibold text-white tracking-tight">Sobre IAutomatics</h2>
<h3 className="text-2xl font-medium text-emerald-400">
Construimos sistemas autonomos a la medida, NO demos.</h3>
<p className="leading-relaxed text-lg text-zinc-300">El mundo de la IA está lleno de ruido. Todos venden un curso o muestran una demostración llamativa que funciona en producción. Operamos de forma diferente.</p>
<p className="leading-relaxed text-lg text-zinc-300">Somos desarrolladores enfocados en la estabilidad y el retorno de la inversión (ROI). Nuestra experiencia y formacion en ingeniería de la Inteligencia Artificial nos permite construir infraestructuras de automatización que escalan con su negocio, gestionan los errores con eficiencia y realmente ofrecen el ahorro de tiempo prometido.</p>
<div className="pt-6 flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon className="" height="1em" icon="lucide:linkedin" width="1em"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon className="" height="1em" icon="lucide:twitter" width="1em"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon className="" height="1em" icon="lucide:github" width="1em"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-36 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-emerald-900/20 blur-3xl rounded-full -z-10 transform scale-50"></div>
<div className="max-w-3xl mx-auto space-y-10">
<h2 className="md:text-6xl text-5xl font-semibold text-white tracking-tight">
¿Estás listo para automatizar el trabajo pesado?</h2>
<p className="text-xl text-zinc-300">Si el seguimiento manual y las llamadas perdidas ralentizan su negocio, esto lo solucionará. Construyamos su sistema.</p>
<div className="flex justify-center pt-6">
<a className="shiny-cta" href="https://wa.me/573136884079" target="_blank">
<span className="cursor-pointer" onclick="window.location.href='https://calendar.app.google/vBsqxab81Y1Suxtz5'" role="button">Reserve su llamada estratégica</span>
</a>
</div>
<p className="text-sm text-zinc-500 mt-10">Sin compromiso. Charla de descubrimiento de 20 minutos.</p>
</div>
</section>
</main>

<footer className="border-t border-zinc-800 py-16 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-base text-zinc-500">© 2026 IAutomatics. All rights reserved.</div>
<div className="flex gap-10 text-base font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:hello@elevatebusiness.com">Email Us</a>
</div>
</div>
</footer>



    </>
  );
}
