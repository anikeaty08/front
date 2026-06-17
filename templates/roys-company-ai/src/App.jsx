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
            
            let config = {
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 1024,
                CAPTURE_RESOLUTION: 512,
                DENSITY_DISSIPATION: 1.2, // Faster fade for cleaner look
                VELOCITY_DISSIPATION: 0.3,
                PRESSURE: 0.8,
                PRESSURE_ITERATIONS: 20,
                CURL: 25,
                SPLAT_RADIUS: 0.2,
                SPLAT_FORCE: 6000,
                SHADING: true,
                COLOR_UPDATE_SPEED: 10,
                PAUSED: false,
                BACK_COLOR: { r: 5, g: 5, b: 5 }, // Matches bg-[#050505] roughly
                TRANSPARENT: true,
            };

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

            const splatProgram = createProgram(baseVertexShader, splatShader);
            const curlProgram = createProgram(baseVertexShader, curlShader);
            const vorticityProgram = createProgram(baseVertexShader, vorticityShader);
            const divergenceProgram = createProgram(baseVertexShader, divergenceShader);
            const clearProgram = createProgram(baseVertexShader, clearShader);
            const pressureProgram = createProgram(baseVertexShader, pressureShader);
            const gradientSubtractProgram = createProgram(baseVertexShader, gradientSubtractShader);
            const advectionProgram = createProgram(baseVertexShader, advectionShader);
            const displayProgram = createProgram(baseVertexShader, displayShaderSource);

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

            let dye, velocity, divergence, curl, pressure;
            
            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                
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
                return gl.drawingBufferWidth > gl.drawingBufferHeight ? { width: max, height: min } : { width: min, height: max };
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

            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(0);

            function update() {
                resizeCanvas();
                const dt = Math.min((Date.now() - lastUpdateTime) / 1000, 0.016);
                lastUpdateTime = Date.now();
                
                gl.disable(gl.BLEND);
                
                gl.useProgram(curlProgram);
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);

                gl.useProgram(vorticityProgram);
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();

                gl.useProgram(divergenceProgram);
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);

                gl.useProgram(clearProgram);
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();

                gl.useProgram(pressureProgram);
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }

                gl.useProgram(gradientSubtractProgram);
                gl.uniform2f(gradientSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();

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

            window.addEventListener('mousemove', e => {
                splat(e.clientX, e.clientY, e.movementX * 10, -e.movementY * 10, { r:0.0, g:0.2, b:0.5 });
            });
            window.addEventListener('touchmove', e => {
                const t = e.touches[0];
                splat(t.clientX, t.clientY, 10, 10, { r:0.0, g:0.2, b:0.5 });
            });
            
            // Initial burst
            setTimeout(() => {
                splat(window.innerWidth / 2, window.innerHeight / 2, 0, -50, { r:0.1, g:0.2, b:0.8 });
            }, 500);
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
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40" id="fluid"></canvas>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="p-1 rounded bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="iconify text-neutral-300" data-icon="lucide:cpu" data-width="16"></span>
</div>
<span className="font-medium tracking-tight text-sm text-neutral-200">ANKUSH MEHRA</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors" href="#contact">
                    Book Strategy Call <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-neutral-400 p-1" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>

<div className="hidden absolute top-14 left-0 w-full bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-neutral-400 hover:text-white text-sm" href="#services">Services</a>
<a className="text-neutral-400 hover:text-white text-sm" href="#process">Methodology</a>
<a className="text-neutral-400 hover:text-white text-sm" href="#use-cases">Use Cases</a>
<a className="text-blue-400 text-sm font-medium" href="#contact">Book Strategy Call</a>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">

<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-[11px] font-medium tracking-wide uppercase">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                    Accepting New Clients for Q4
                </div>

<h1 className="fade-in-up delay-100 text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    I Build AI Systems That <br className="hidden md:block"/>
<span className="text-neutral-500">Call, Chat, and Convert.</span>
</h1>

<p className="fade-in-up delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Stop losing leads to slow response times. I architect custom voice agents and n8n workflows that replace manual follow-ups instantly.
                </p>

<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="shiny-cta group" onclick="window.location.href='#contact'">
<span className="flex items-center gap-2">
                            Book Free Strategy Call 
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
<a className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all flex items-center gap-2" href="#use-cases">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        View Live Demos
                    </a>
</div>

<div className="fade-in-up delay-300 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-16 max-w-3xl mx-auto">
<div>
<p className="text-2xl font-semibold text-white tracking-tight">100k+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">AI Calls Processed</p>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tight">24/7</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Active Availability</p>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tight">30%</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Avg. Conv. Lift</p>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tight">40+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Deployments</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase mb-8">Powering Automation Infrastructure With</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="simple-icons:n8n"></span> n8n</div>
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="simple-icons:openai"></span> OpenAI</div>
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="simple-icons:twilio"></span> Twilio</div>
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="lucide:phone"></span> Vapi</div>
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="simple-icons:airtable"></span> Airtable</div>
<div className="flex items-center gap-2 text-sm font-medium text-white"><span className="iconify text-xl" data-icon="simple-icons:googlecloud"></span> Google</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Core Automation Services</h2>
<p className="text-neutral-400 max-w-xl text-sm leading-relaxed">I don't just "wrap API calls". I architect robust, error-tolerant infrastructure that handles real-world business communication.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors mt-4 md:mt-0" href="#contact">
                    Get a quote <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">AI Voice Agents</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Human-like inbound and outbound calling agents. They qualify leads, book appointments on Cal.com, and handle support 24/7 without fatigue.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-blue-500/60" data-icon="lucide:check" data-width="12"></span> Sub-800ms Latency
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-blue-500/60" data-icon="lucide:check" data-width="12"></span> Custom Knowledge Base
                        </li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">WhatsApp &amp; SMS Bots</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Direct integration with WhatsApp Business API. Auto-reply to leads instantly, nurture prospects through sequences, and sync all chats to CRM.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-emerald-500/60" data-icon="lucide:check" data-width="12"></span> Instant Lead Response
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-emerald-500/60" data-icon="lucide:check" data-width="12"></span> Multi-step Flows
                        </li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">CRM &amp; n8n Workflows</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        The central nervous system of your business. I build complex n8n workflows that connect forms, spreadsheets, and agents into one seamless loop.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-purple-500/60" data-icon="lucide:check" data-width="12"></span> Error-free Data Entry
                        </li>
<li className="flex items-center gap-3 text-xs text-neutral-500">
<span className="iconify text-purple-500/60" data-icon="lucide:check" data-width="12"></span> Automated Reporting
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-20">

<div className="lg:w-1/3">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Engineering, <br/> <span className="text-neutral-500">Not Magic.</span></h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                                A transparent, logic-first approach to building your system. I don't rely on black boxes; I build auditable, scalable code.
                            </p>
<button className="px-5 py-2 rounded-lg bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition-colors" onclick="window.location.href='#contact'">
                                Start the Process
                            </button>
</div>
</div>

<div className="lg:w-2/3 space-y-12">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all">1</div>
<div className="w-px h-full bg-white/5 my-2 group-hover:bg-blue-500/20 transition-colors"></div>
</div>
<div className="pb-10">
<h3 className="text-lg font-medium text-white mb-2">Audit &amp; Logic Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed">We map out your manual processes. I design the conversation state machine and database schema before writing a single line of code.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 text-neutral-400 flex items-center justify-center text-xs font-semibold group-hover:border-neutral-600 group-hover:text-white transition-all">2</div>
<div className="w-px h-full bg-white/5 my-2"></div>
</div>
<div className="pb-10">
<h3 className="text-lg font-medium text-white mb-2">Build &amp; Integration</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Connecting Vapi/Twilio with your CRM via n8n. Configuring the LLM system prompts to strictly adhere to your brand voice and sales objectives.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 text-neutral-400 flex items-center justify-center text-xs font-semibold group-hover:border-neutral-600 group-hover:text-white transition-all">3</div>
<div className="w-px h-full bg-white/5 my-2"></div>
</div>
<div className="pb-10">
<h3 className="text-lg font-medium text-white mb-2">Testing with Real Data</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Rigorous adversarial testing. We ensure the AI handles objections, heavy accents, and edge cases gracefully. Latency optimization happens here.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 text-neutral-400 flex items-center justify-center text-xs font-semibold group-hover:border-neutral-600 group-hover:text-white transition-all">4</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Deployment &amp; Handoff</h3>
<p className="text-neutral-400 text-sm leading-relaxed">The system goes live. You receive a custom dashboard to monitor calls/leads and documentation so you own your infrastructure.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="use-cases">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-16">Deployed Solutions</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-blue-500/20 transition-all">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-semibold tracking-wide text-neutral-300">REAL ESTATE</span>
</div>
<h3 className="text-xl font-medium mb-3">Speed-to-Lead Caller</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
<strong className="text-neutral-200">Problem:</strong> Leads go cold if not called within 5 minutes. Agents are busy or asleep.<br/>
<strong className="text-neutral-200">Solution:</strong> An AI agent triggers immediately upon form submission, qualifies the buyer against criteria, and syncs to calendar.
                        </p>
</div>

<div className="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 font-mono text-xs space-y-3">
<div className="flex gap-3">
<div className="w-1 h-full bg-blue-500 rounded-full"></div>
<div className="text-neutral-500">AI AGENT</div>
</div>
<p className="text-neutral-300 pl-4">"Hi, I saw you were interested in the downtown property. Are you looking to move in the next 30 days?"</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-semibold tracking-wide text-neutral-300">E-COMMERCE</span>
</div>
<h3 className="text-xl font-medium mb-3">Order Recovery Bot</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
<strong className="text-neutral-200">Problem:</strong> High cart abandonment rate and support tickets for order status.<br/>
<strong className="text-neutral-200">Solution:</strong> A dual WhatsApp/Voice bot that answers "Where is my order?" queries and offers timed discounts for abandoned carts.
                        </p>
</div>

<div className="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 font-mono text-xs space-y-3">
<div className="flex gap-3">
<div className="w-1 h-full bg-emerald-500 rounded-full"></div>
<div className="text-neutral-500">AI AGENT</div>
</div>
<p className="text-neutral-300 pl-4">"Your package #492 is out for delivery today. Would you like to add specific delivery instructions?"</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 bg-neutral-900">

<img alt="Ankush Mehra" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1215c84-a614-448d-9358-8d4515451e7d_800w.png"/>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6">
<h2 className="text-3xl font-medium tracking-tight">I'm Ankush Mehra.</h2>
<h3 className="text-lg text-neutral-400 font-medium">I build systems, not demos.</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                            The AI space is noisy. Everyone is selling a course or showing off a flashy demo that breaks in production. I operate differently.
                        </p>
<p className="text-neutral-400 leading-relaxed text-sm">
                            I am a developer focused on <span className="text-white font-medium">reliability</span> and <span className="text-white font-medium">ROI</span>. My background in software engineering means I build automation infrastructures that scale with your business, handle errors gracefully, and actually deliver the time-savings promised.
                        </p>
<div className="pt-4 flex gap-5">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                    Ready to automate the busy work?
                </h2>
<p className="text-neutral-400 text-lg font-light">
                    If manual follow-ups and missed calls are slowing your business down, let's fix it. No commitment required.
                </p>
<div className="flex flex-col items-center pt-6">
<button className="shiny-cta">
<span className="px-8">Book Strategy Call</span>
</button>
<p className="text-[10px] text-neutral-600 mt-6 uppercase tracking-widest">15-Minute Discovery Chat</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                © 2024 Ankush Mehra. All rights reserved.
            </div>
<div className="flex gap-8 text-xs font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:hello@ankushmehra.com">Email</a>
</div>
</div>
</footer>



    </>
  );
}
