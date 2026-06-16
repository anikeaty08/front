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
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-60" height="653" id="fluid" width="1536"></canvas>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="" data-icon="lucide:cpu" data-icon-replaced="true" data-icon-set="lucide" data-lucide="aperture" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="text-lg font-semibold tracking-tight font-roboto">Reco Digital Services</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-lime-400" style={{}}>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</nav>
<a className="hidden md:block hover:text-blue-400 transition-colors text-sm font-medium text-white" href="https://brand.recodigitalservices.com/widget/booking/iUb05hnK7I3rSinkXaKg">
                Book a Call →
            </a>

<button className="md:hidden text-lime-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" style={{}}>
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-neutral-900 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden" id="mobile-menu" style={{}}>
<a className="hover:text-white text-lime-400" href="#services" style={{}}>Services</a>
<a className="hover:text-white text-lime-400" href="#process" style={{}}>Process</a>
<a className="hover:text-white text-lime-400" href="#use-cases" style={{}}>Use Cases</a>
<a className="text-blue-400" href="#contact">Book Strategy Call</a>
</div>
</header>
<main className="">

<section className="md:pb-10 md:pt-15 pt-40 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    ACCEPTING NEW CLIENTS FOR 2026 Q1
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">We Build AI Systems That <br/> <span className="text-lime-500">Capture, Call, Chat, and Convert Leads.</span></h1>
<p className="leading-relaxed md:text-xl text-lg text-lime-50 max-w-2xl mr-auto ml-auto">Stop losing leads to slow response times. We design custom AI automations and workflows that replace manual follow-ups and scale your operations instantly.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="shiny-cta group" onclick="window.location.href='#contact'">
<span className="flex items-center gap-2" onclick="window.location.href='https://brand.recodigitalservices.com/widget/booking/iUb05hnK7I3rSinkXaKg'" role="button">
                            Book a Free Strategy Call 
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<a className="px-6 py-3 rounded-full border border-white/10 text-neutral-300 font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#use-cases">
<svg aria-hidden="true" className="" data-icon="lucide:play-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        See Real Use Cases
                    </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 max-w-3xl border-white/5 border-t mt-12 mr-auto ml-auto pt-12 gap-x-8 gap-y-8">
<div className="text-center">
<p className="text-2xl font-bold text-white">100k+</p>
<p className="uppercase text-xs text-green-400 tracking-wide mt-1">Leads captured by AI</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">24/7</p>
<p className="uppercase text-xs text-green-400 tracking-wide mt-1">Uptime Support</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">80%</p>
<p className="uppercase text-xs text-green-400 tracking-wide mt-1">Conv. Increase</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-white">50+</p>
<p className="uppercase text-xs text-green-400 tracking-wide mt-1">Systems Built</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-green-500 mb-8">POWERING AUTOMATION FOR AGENCIES &amp; SMAs USING</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" data-icon="simple-icons:n8n" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg> n8n</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" className="" data-icon="simple-icons:openai" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg> OpenAI</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" className="" data-icon="simple-icons:twilio" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12c6.64 0 12-5.36 12-12c0-6.641-5.36-12-12-12m0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12a8.777 8.777 0 0 1 8.75-8.801H12a8.776 8.776 0 0 1 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801zm5.44-11.76a2.49 2.49 0 0 1-2.481 2.479a2.49 2.49 0 0 1-2.479-2.479a2.49 2.49 0 0 1 2.479-2.481a2.493 2.493 0 0 1 2.481 2.481m0 5.919c0 1.36-1.12 2.48-2.481 2.48a2.49 2.49 0 0 1-2.479-2.48a2.49 2.49 0 0 1 2.479-2.479a2.49 2.49 0 0 1 2.481 2.479m-5.919 0c0 1.36-1.12 2.48-2.479 2.48a2.49 2.49 0 0 1-2.481-2.48a2.49 2.49 0 0 1 2.481-2.479a2.49 2.49 0 0 1 2.479 2.479m0-5.919a2.49 2.49 0 0 1-2.479 2.479a2.49 2.49 0 0 1-2.481-2.479A2.493 2.493 0 0 1 9.042 6.56a2.493 2.493 0 0 1 2.479 2.481" fill="currentColor"></path></svg> Twilio</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Vapi</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" data-icon="simple-icons:airtable" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.27 3.27 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.3 3.3 0 0 0-1.272-.257M23.4 8.056a.6.6 0 0 0-.222.045l-10.012 3.877a.61.61 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.58.58 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.64.64 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006l.307-.147l2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.6.6 0 0 0-.207-.044z" fill="currentColor"></path></svg> Airtable</div>
<div className="flex items-center gap-2 text-xl font-semibold text-white"><svg aria-hidden="true" data-icon="simple-icons:googlecloud" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0c-3.875 2.551-3.922 8.11-.247 10.941l.006-.007l-.007.03a6.7 6.7 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.37 9.37 0 0 0-2.821-4.552l-.043.043l.006-.05A9.34 9.34 0 0 0 12.19 2.38m-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.19 5.19 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.6 2.6 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.75 6.75 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.2 5.2 0 0 1 3.67-1.69z" fill="currentColor"></path></svg> Google</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6" id="services">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Core Automation Services</h2>
<p className="text-green-400 max-w-xl">I don't just "use AI". I architect robust infrastructure that handles communication and data processing for you.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="glass-card hover:border-blue-500/30 transition-colors group rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-lime-300" data-icon="lucide:mic" data-icon-replaced="true" data-icon-set="lucide" data-lucide="screen-share" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"></path><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="m17 8 5-5"></path><path d="M17 3h5v5"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">AI Web Designing</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">We build high-converting websites using AI to generate for your brand and goals.</p><ul className="text-xs text-neutral-500 space-y-2">
<li className="flex gap-x-2 gap-y-2 items-center">Smart layout suggestions based on your niche and offer.</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Instant A/B test variants for sections, headlines, and CTAs</li>
</ul>
</div><div className="glass-card hover:border-blue-500/30 transition-colors group rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="" data-icon="lucide:mic" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge-check" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">AI Social Media</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">We automate your social media posting, engagement, and growth across LinkedIn, Instagram, and X with AI-generated content.</p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex gap-x-2 gap-y-2 items-center" style={{}}>Daily/Hourly posts generated and posted</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Audience engagement and DM automation.</li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:border-green-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">AI Organic Outreach</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">Your entire lead flow from LinkedIn or emails. Capture to follow-up automated across forms, email, and social channels.</p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Lead scoring and qualification</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Multi-step follow-up sequences </li>
</ul>
</div>

<div className="glass-card hover:border-purple-500/30 transition-colors group rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="w-[16px] h-[16px] text-sky-400" data-icon="lucide:workflow" data-icon-replaced="true" data-icon-set="lucide" data-lucide="facebook" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">Meta/Google Ads By AI</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">We create and optimize ROI-focused Meta/Google campaigns that turn cold audiences into paying clients.</p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">AI-tested creatives and hooks </li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Automated budget and bid adjustments</li>
</ul>
</div><div className="glass-card hover:border-purple-500/30 transition-colors group rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:workflow" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-xl font-medium mb-3">CRM &amp; n8n Workflows</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">
                        The glue that holds it all together. I build complex n8n workflows that connect your forms, spreadsheets, and AI agents into one seamless machine.
                    </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Error-free data entry</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Automated reporting</li>
</ul>
</div><div className="glass-card hover:border-blue-500/30 transition-colors group rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="" data-icon="lucide:mic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect className="" height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<h3 className="text-xl font-medium mb-3">AI Voice Agents</h3>
<p className="leading-relaxed text-sm text-green-400 mb-4">
                        Inbound and outbound calling agents that sound human. They handle qualifying leads, booking appointments, and customer support inquiries 24/7.
                    </p><ul className="text-xs text-neutral-500 space-y-2">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><svg aria-hidden="true" className="" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Sub-1s latency</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom knowledge base</li>
</ul>
</div>
</div>
</section>

<section className="border-y bg-black/20 border-white/5 pt-10 pb-10" id="process" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">

<div className="md:w-1/3">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-6">How We Build Your System</h2>
<p className="text-green-400 mb-8">A transparent, engineering-focused approach. No magic, just logic.</p>
<button className="hover:bg-neutral-200 transition-colors text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" onclick="window.location.href='https://brand.recodigitalservices.com/widget/booking/iUb05hnK7I3rSinkXaKg'" role="button">
                            Start the Process
                        </button>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="flex text-sm font-bold text-white bg-neutral-800 w-8 h-8 rounded-full items-center justify-center">1</div>
<div className="w-px h-full bg-white/10 my-2" style={{}}></div>
</div>
<div className="pb-5">
<h3 className="text-xl font-medium text-white mb-2">AI Web Designing</h3>
<p className="text-sm text-green-400">Build high-converting landing pages optimized for your offer.
AI-generated layouts, copy, A/B variants, mobile-responsive.
20%+ conversion rate from visitor to lead</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="flex text-sm font-bold text-white bg-neutral-800 w-8 h-8 border-white/10 border rounded-full items-center justify-center">2</div>
<div className="w-px h-full bg-white/10 my-2" style={{}}></div>
</div>
<div className="pb-5">
<h3 className="text-xl font-medium text-white mb-2">AI Social Media Automation</h3>
<p className="text-sm text-green-400">Establish authority and trust through automated posting.
Daily AI content across LinkedIn/Insta/X/FB, engagement automation.
500+ monthly impressions, 50+ profile visits</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">3</div>
<div className="w-px h-full bg-white/10 my-2" style={{}}></div>
</div>
<div className="pb-5">
<h3 className="text-xl font-medium text-white mb-2">AI Organic Lead Generation</h3>
<p className="text-sm text-green-400">Rank for buyer-intent searches to attract warm traffic.
LinkedIn, SEO content, technical fixes, local citations.
100+ organic visitors/month, 5-10 organic leads</p>
</div>
</div>

<div className="flex gap-6 gap-x-6 gap-y-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">4</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">AI Paid Ads - Meta/Google</h3>
<p className="text-sm text-green-400">Scale with targeted Meta/Google campaigns.
Audience testing, creative optimization, retargeting.
50-100 qualified leads/month at $20-50 CPL.</p>
</div>
</div><div className="flex gap-6 gap-x-6 gap-y-6">
<div className="flex flex-col items-center">
<div className="flex text-sm font-bold text-white bg-neutral-800 w-8 h-8 border-white/10 border rounded-full items-center justify-center">5</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">AI Calling</h3>
<p className="text-sm text-green-400">Instantly qualify leads with 24/7 voice conversations.
Outbound calls, appointment booking, objection handling.
20-30% call-to-meeting conversion</p>
</div>
</div><div className="flex gap-6 gap-x-6 gap-y-6">
<div className="flex flex-col items-center">
<div className="flex text-sm font-bold text-white bg-neutral-800 w-8 h-8 border-white/10 border rounded-full items-center justify-center">6</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">AI Lead Nurturing</h3>
<p className="text-sm text-green-400">Multi-channel sequences until they're sales-ready.
Email + SMS + social follow-ups, lead scoring.
40% MQL to SQL conversion.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-10 pl-6" id="use-cases">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-center mb-10">Real World Applications</h2>
<div className="grid md:grid-cols-2 gap-8 gap-x-8 gap-y-8">

<div className="glass-card flex flex-col rounded-xl pt-3 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="lucide:building" data-icon-replaced="true" data-icon-set="lucide" data-lucide="briefcase-medical" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 11v4"></path><path d="M14 13h-4"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M18 6v14"></path><path d="M6 6v14"></path><rect className="" height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-sm font-semibold text-neutral-300 tracking-wide">Doctors / Dentist</span>
</div>
<h3 className="text-2xl font-medium mb-4">Patient Lead Capture</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}><strong className="">Problem:</strong> New patient inquiries go unanswered after
  hours or get lost in staff inboxes.<br/><br/> <strong className="">Solution:</strong> AI automation captures inquiries
  instantly, qualifies urgency, books appointments, and syncs to your practice management software.</p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span> ""Hi Dr. Smith, I need a dermatology consult. When's your next opening?"
</div><div className="flex text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Perfect, I have Thursday 2PM. Would that work?"
</div>
</div>
</div><div className="glass-card flex flex-col rounded-xl pt-3 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="" data-icon="lucide:building" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></g></svg>
<span className="text-sm font-semibold tracking-wide text-neutral-300">REAL ESTATE</span>
</div>
<h3 className="text-2xl font-medium mb-4">Speed-to-Lead Caller</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}>
<strong className="">Problem:</strong> Leads turn cold if not called within 5 minutes. Agents sleep or get busy.<br/><br/>
<strong className="">Solution:</strong> An AI agent that triggers instantly when a form is submitted, qualifies the buyer, and books a viewing on the agent's calendar.
                        </p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span> "Hi, I saw you were interested in the downtown property. Are you looking to
  move in the next 30 days?"
</div><div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Yes, I need more details"
</div>
</div>
</div><div className="glass-card flex flex-col rounded-xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="" data-icon="lucide:building" data-icon-replaced="true" data-icon-set="lucide" data-lucide="book-key" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 3 1 1"></path><path d="m20 2-4.5 4.5"></path><path d="M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"></path><circle cx="14" cy="8" r="2"></circle></svg>
<span className="text-sm font-semibold text-neutral-300 tracking-wide">Coaches and Consultants</span>
</div>
<h3 className="text-2xl font-medium mb-4">Client Qualification Flow</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}><strong className="">Problem:</strong> Tire kickers waste your discovery calls instead of serious clients.<br/><br className=""/> <strong>Solution:</strong> AI workflow qualifies leads through forms, messaging, and short calls before booking your calendar.</p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span> "Hi, I saw you were interested in the downtown property. Are you looking to
  move in the next 30 days?"
</div><div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Yes, I need more details"
</div>
</div>
</div><div className="glass-card flex flex-col rounded-xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="" data-icon="lucide:building" data-icon-replaced="true" data-icon-set="lucide" data-lucide="code-xml" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-sm font-semibold text-neutral-300 tracking-wide">SaaS Founders</span>
</div>
<h3 className="text-2xl font-medium mb-4">Trial User Activation</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}><strong className="">Problem:</strong> Tire kickers waste your discovery calls instead of serious clients.<br/><br className=""/> <strong className="">Solution:</strong> AI workflow qualifies leads through forms, messaging, and short calls before booking your calendar.</p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span> "Welcome to SaaSPlatform! Need you need help connecting your first data source?"
</div><div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Yes,How much time it will take?"
</div>
</div>
</div><div className="glass-card flex flex-col rounded-xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="" data-icon="lucide:building" data-icon-replaced="true" data-icon-set="lucide" data-lucide="shopping-cart" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="text-sm font-semibold text-neutral-300 tracking-wide">E-Commerce</span>
</div>
<h3 className="text-2xl font-medium mb-4">Cart Recovery Automation</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}><strong className="">Problem:</strong>  70%+ of carts get abandoned, manual follow-up can't scale across SKUs and customer segments.<br/><br className=""/> <strong className="">Solution:</strong> AI instantly triggers personalized recovery across SMS/email/call with dynamic offers and inventory checks.</p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span> "Hi Alex, your $147 cart is waiting! Free shipping expires in 2hrs."
"Added your size 10 sneakers back. Complete checkout?"
</div><div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Yes, Add to my cart"
</div>
</div>
</div>

<div className="glass-card p-8 rounded-xl flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="" data-icon="lucide:shopping-bag" data-icon-replaced="true" data-icon-set="lucide" data-lucide="hammer" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<span className="text-sm font-semibold text-neutral-300 tracking-wide">SERVICE PROVIDERS</span>
</div>
<h3 className="text-2xl font-medium mb-4">Service Request Automation</h3>
<p className="text-sm text-lime-200 mb-6" style={{}}><strong className="">Problem:</strong> Service requests (HVAC, plumbing, etc.) get delayed responses, losing jobs to competitors.<br/><br/> <strong className="">Solution:</strong> AI handles instant quoting, scheduling, and follow-up across phone/text/email 24/7.</p>
</div>
<div className="bg-black/50 p-4 rounded-lg border border-white/5" style={{}}>
<div className="flex text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">AI:</span>
    "Hi Mike, your AC unit needs service.
    Can we schedule for tomorrow 10AM?"
    "Estimate: $450. Confirm to book?"</div><div className="flex gap-3 text-xs font-mono gap-x-3 gap-y-3 items-center text-lime-400" style={{}}>
<span className="text-green-400">Human:</span> "Yes, Please go ahead"
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-5 pb-1" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 gap-x-12 gap-y-12 items-center">
<div className="w-full md:w-1/3">
<div className="aspect-square overflow-hidden hover:grayscale-0 transition-all duration-700 border-white/10 border rounded-2xl relative grayscale">

<img alt="Ankush Mehra" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8435238e-dc4e-4337-8aec-683e9209fa4c_800w.png"/>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">We are Reco Digital Services LLC </h2>
<h3 className="text-xl font-medium text-emerald-500">We build systems, not demos.</h3>
<p className="leading-relaxed text-lime-400" style={{}}>Your 24/7 AI Automation Army
</p>
<p className="leading-relaxed text-green-400">Tired of leads going cold, carts abandoned, and manual work killing your growth?

We deploy custom AI automations that instantly.

From Doctors to Ecommerce to B2B SaaS – our AI agents work 24/7 so you don't have to.

Web design → Social proof → Organic/Paid traffic → AI calling → Nurture → Close.
100-200 qualified leads → 20-40 booked appointments → Predictable revenue.

Stop losing money to slow systems. Deploy your AI army today.</p>
<div className="pt-4 flex gap-4">
<a className="hover:text-white text-lime-400" href="#" style={{}}></a>
<a className="hover:text-white text-lime-400" href="#" style={{}}></a>
<a className="hover:text-white text-lime-400" href="#" style={{}}></a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-center pt-5 pr-6 pb-5 pl-6 relative" id="contact">
<div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 transform scale-50"></div>
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
      Ready to automate the busy work?
    </h2>
<p className="text-lg text-green-400">If manual work and missed leads are slowing your business down, this will fix it. Let's build your system.</p>
<div className="flex justify-center pt-4">
<button className="shiny-cta" onclick="window.location.href='https://brand.recodigitalservices.com/widget/booking/iUb05hnK7I3rSinkXaKg'" role="button">
<span className="">Book Your Strategy Call</span>
</button>
</div>
<p className="text-xs text-green-400 mt-8">No commitment required. 30-minute discovery call to know your business.</p>
</div>
</section>
</main>

<footer className="bg-black border-white/5 border-t pt-2 pb-2">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-sm text-orange-400">© 2026 Reco Digital Services | USA UK INDIA. All rights reserved.</div>
<div className="flex gap-8 text-sm font-medium text-lime-400" style={{}}>
<a className="hover:text-white text-orange-300" href="/mailto:support@voicexagency.com">Email Us</a>
</div>
</div>
</footer>



    </>
  );
}
