import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 mix-blend-screen" id="fluid"></canvas>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">

<svg className="text-white" fill="none" height="24" viewbox="0 0 48 28" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M8 28L14 18L20 28H8Z" fill="currentColor"></path>
<path d="M18 28L28 12L38 28H18Z" fill="currentColor"></path>
<path d="M30 28L42 4L54 28H30Z" fill="currentColor"></path>
</svg>
<span className="font-semibold tracking-tight text-lg text-white">Elevate Business</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</nav>
<a className="hidden md:block text-base font-medium text-white hover:text-emerald-400 transition-colors" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">
                Book a Call →
            </a>

<button className="md:hidden text-zinc-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" width="1.5em"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden" id="mobile-menu">
<a className="text-lg text-zinc-400 hover:text-white" href="#services">Services</a>
<a className="text-lg text-zinc-400 hover:text-white" href="#process">Process</a>
<a className="text-lg text-zinc-400 hover:text-white" href="#insights">Insights</a>
<a className="text-lg text-emerald-400" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">Book Strategy Call</a>
</div>
</header>
<main className="">

<section className="relative pt-44 pb-24 md:pt-52 md:pb-36 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 blur-[120px] -z-10 rounded-full"></div>
<div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 text-sm font-medium tracking-wide">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
                    ACCEPTING NEW CLIENTS
                </div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white leading-[1.05]">
                    We Build AI Systems That <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-500">Call, Chat, and Convert.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                    Stop losing leads to slow response times. We design custom AI voice agents and automation workflows that replace manual follow-ups and scale your operations instantly.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
<a className="shiny-cta group" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">
<span className="flex items-center gap-2">
                            Book a Free Strategy Call 
                            <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-800 transition-colors flex items-center gap-3 text-lg" href="#insights">
<iconify-icon height="1.2em" icon="solar:book-linear" width="1.2em"></iconify-icon>
                        Read Our Insights
                    </a>
</div>

<div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 mt-16 max-w-4xl mx-auto">
<div className="text-center">
<p className="text-3xl font-bold text-white">100k+</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide mt-2">AI Calls Made</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">24/7</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide mt-2">Uptime Support</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">30%</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide mt-2">Conv. Increase</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-white">40+</p>
<p className="text-sm text-zinc-500 uppercase tracking-wide mt-2">Systems Built</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-base text-zinc-500 mb-10 tracking-widest uppercase">Powering Automation for Agencies &amp; SMAs using</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="simple-icons:n8n" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg> n8n
                    </div>
<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="simple-icons:openai" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg> OpenAI
                    </div>
<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="simple-icons:twilio" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12c6.64 0 12-5.36 12-12c0-6.641-5.36-12-12-12m0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12a8.777 8.777 0 0 1 8.75-8.801H12a8.776 8.776 0 0 1 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801zm5.44-11.76a2.49 2.49 0 0 1-2.481 2.479a2.49 2.49 0 0 1-2.479-2.479a2.49 2.49 0 0 1 2.479-2.481a2.493 2.493 0 0 1 2.481 2.481m0 5.919c0 1.36-1.12 2.48-2.481 2.48a2.49 2.49 0 0 1-2.479-2.48a2.49 2.49 0 0 1 2.479-2.479a2.49 2.49 0 0 1 2.481 2.479m-5.919 0c0 1.36-1.12 2.48-2.479 2.48a2.49 2.49 0 0 1-2.481-2.48a2.49 2.49 0 0 1 2.481-2.479a2.49 2.49 0 0 1 2.479 2.479m0-5.919a2.49 2.49 0 0 1-2.479 2.479a2.49 2.49 0 0 1-2.481-2.479A2.493 2.493 0 0 1 9.042 6.56a2.493 2.493 0 0 1 2.479 2.481" fill="currentColor"></path></svg> Twilio
                    </div>

<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg fill="currentColor" height="1.2em" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg">

<circle cx="4" cy="4" r="1.5"></circle>
<circle cx="10" cy="4" r="1.5"></circle>
<circle cx="16" cy="4" r="1.5"></circle>
<circle cx="22" cy="4" r="1.5"></circle>
<circle cx="4" cy="10" r="1.5"></circle>
<circle cx="22" cy="10" r="1.5"></circle>
<circle cx="4" cy="16" r="1.5"></circle>
<circle cx="22" cy="16" r="1.5"></circle>
<circle cx="4" cy="22" r="1.5"></circle>
<circle cx="10" cy="22" r="1.5"></circle>
<circle cx="16" cy="22" r="1.5"></circle>
<circle cx="22" cy="22" r="1.5"></circle>

<circle cx="10" cy="10" r="3"></circle>
<circle cx="16" cy="10" r="3"></circle>
<circle cx="10" cy="16" r="3"></circle>
<circle cx="16" cy="16" r="3"></circle>
</svg>
                        Retell AI
                    </div>
<div className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="simple-icons:airtable" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.27 3.27 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.3 3.3 0 0 0-1.272-.257M23.4 8.056a.6.6 0 0 0-.222.045l-10.012 3.877a.61.61 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.58.58 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.64.64 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006l.307-.147l2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.6.6 0 0 0-.207-.044z" fill="currentColor"></path></svg> Airtable
                    </div>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Core Automation Services</h2>
<p className="text-xl text-zinc-400 max-w-2xl">We don't just "use AI". We architect robust infrastructure that handles communication and data processing for you.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-2xl hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon height="1.5em" icon="solar:microphone-3-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-4 relative z-10 text-white">AI Voice Agents</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 relative z-10">
                        Inbound and outbound calling agents powered by Retell AI. They handle qualifying leads, booking appointments, and customer support inquiries 24/7.
                    </p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Sub-800ms latency</li>
<li className="flex items-center gap-3"><iconify-icon className="text-emerald-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Custom knowledge base</li>
</ul>
</div>

<div className="glass-card p-10 rounded-2xl hover:border-green-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<svg fill="currentColor" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
</div>
<h3 className="text-2xl font-medium mb-4 relative z-10 text-white">WhatsApp Automation</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 relative z-10">
                        Direct integration with WhatsApp Business API. Auto-reply to leads, nurture prospects, and sync conversations directly to your CRM.
                    </p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Instant lead response</li>
<li className="flex items-center gap-3"><iconify-icon className="text-green-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Multi-step flows</li>
</ul>
</div>

<div className="glass-card p-10 rounded-2xl hover:border-teal-500/50 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-110 transition-transform relative z-10">
<iconify-icon height="1.5em" icon="solar:round-transfer-horizontal-linear" width="1.5em"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-4 relative z-10 text-white">CRM &amp; n8n Workflows</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 relative z-10">
                        The glue that holds it all together. We build complex n8n workflows that connect your forms, spreadsheets, and AI agents into one seamless machine.
                    </p>
<ul className="text-sm text-zinc-500 space-y-3 relative z-10">
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Error-free data entry</li>
<li className="flex items-center gap-3"><iconify-icon className="text-teal-500" height="1.2em" icon="solar:check-circle-linear" width="1.2em"></iconify-icon> Automated reporting</li>
</ul>
</div>
</div>
</section>

<section className="py-28 border-y border-white/5 bg-zinc-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-20">
<div className="md:w-1/3 sticky top-32 h-fit">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-white">How We Build Your System</h2>
<p className="text-xl text-zinc-400 mb-10">A transparent, engineering-focused approach. No magic, just logic.</p>
<a className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-base hover:bg-zinc-200 transition-colors inline-block" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">
                            Start the Process
                        </a>
</div>
<div className="md:w-2/3 space-y-16">

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20">1</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Audit &amp; Logic Design</h3>
<p className="text-zinc-400 text-lg">We map out your current manual processes. We design the conversation flow and data logic before writing a single line of code.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">2</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Build &amp; Integration</h3>
<p className="text-zinc-400 text-lg">Connecting Retell AI/Twilio with your CRM via n8n. We configure the LLM prompts to match your brand voice and sales objectives.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">3</div>
<div className="w-px h-full bg-zinc-800 my-4"></div>
</div>
<div className="pb-6">
<h3 className="text-2xl font-medium text-white mb-3">Testing with Real Data</h3>
<p className="text-zinc-400 text-lg">Rigorous testing to ensure the AI handles objections, accents, and edge cases correctly. We refine latency and response quality.</p>
</div>
</div>

<div className="flex gap-8">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-lg">4</div>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">Deployment &amp; Handoff</h3>
<p className="text-zinc-400 text-lg">The system goes live. We provide documentation and a dashboard so you can monitor calls and leads without needing us.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-7xl mx-auto" id="insights">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-6 text-white">Insights</h2>
<p className="text-xl text-zinc-400 text-center mb-20 max-w-2xl mx-auto">Deep dives into AI voice technology, automation strategy, and the future of work.</p>
<div className="grid md:grid-cols-3 gap-8">

<a className="glass-card p-0 rounded-2xl flex flex-col overflow-hidden group hover:border-emerald-500/30 transition-all duration-300" href="#">
<div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>

<div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-zinc-900 to-zinc-950 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-sm text-emerald-400 font-medium mb-3">
<span>Strategy</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="text-zinc-500">Oct 12, 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">The End of Cold Calling?</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 line-clamp-2">
                            How AI voice agents are outperforming human SDRs in qualification and booking rates by 30%.
                        </p>
<div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                            Read Article <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</div>
</div>
</a>

<a className="glass-card p-0 rounded-2xl flex flex-col overflow-hidden group hover:border-emerald-500/30 transition-all duration-300" href="#">
<div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-900/40 via-zinc-900 to-zinc-950 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-sm text-emerald-400 font-medium mb-3">
<span>Tech</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="text-zinc-500">Oct 08, 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Reducing Voice Latency</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 line-clamp-2">
                            Technical breakdown of how we achieved sub-800ms response times using Retell AI and edge computing.
                        </p>
<div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                            Read Article <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</div>
</div>
</a>

<a className="glass-card p-0 rounded-2xl flex flex-col overflow-hidden group hover:border-emerald-500/30 transition-all duration-300" href="#">
<div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/40 via-zinc-900 to-zinc-950 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-sm text-emerald-400 font-medium mb-3">
<span>Tutorial</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="text-zinc-500">Sep 28, 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-emerald-400 transition-colors">Scaling Agency Ops with n8n</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 line-clamp-2">
                            Why we switched from Zapier to self-hosted n8n for heavy-duty automation workflows.
                        </p>
<div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                            Read Article <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="bg-gradient-to-b from-zinc-950 to-zinc-900 border-zinc-800 border-t pt-28 pb-28" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-5/12">
<div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">

<img alt="Elevate Business" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="w-full md:w-7/12 space-y-8">
<h2 className="text-4xl font-semibold tracking-tight text-white">About Elevate Business.</h2>
<h3 className="text-2xl text-emerald-400 font-medium">We build systems, not demos.</h3>
<p className="text-zinc-300 text-lg leading-relaxed">
                            The AI space is full of noise. Everyone is selling a course or showing off a flashy demo that breaks in production. We operate differently.
                        </p>
<p className="text-zinc-300 text-lg leading-relaxed">
                            We are developers focused on stability and ROI. Our background in software engineering means we build automation infrastructures that scale with your business, handle errors gracefully, and actually deliver the time-savings promised.
                        </p>
<div className="pt-6 flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon height="1em" icon="lucide:linkedin" width="1em"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon height="1em" icon="lucide:twitter" width="1em"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors text-2xl" href="#"><iconify-icon height="1em" icon="lucide:github" width="1em"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-36 px-6 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-emerald-900/20 blur-3xl rounded-full -z-10 transform scale-50"></div>
<div className="max-w-3xl mx-auto space-y-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
                    Ready to automate the busy work?
                </h2>
<p className="text-xl text-zinc-300">
                    If manual follow-ups and missed calls are slowing your business down, this will fix it. Let's build your system.
                </p>
<div className="flex justify-center pt-6">
<a className="shiny-cta" href="https://api.leadconnectorhq.com/widget/booking/okwvmY2zrf7b7FccMC0w" target="_blank">
<span>Book Your Strategy Call</span>
</a>
</div>
<p className="text-sm text-zinc-500 mt-10">No commitment required. 15-minute discovery chat.</p>
</div>
</section>
</main>

<footer className="border-t border-zinc-800 py-16 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-base text-zinc-500">
                © 2024 Elevate Business. All rights reserved.
            </div>
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
