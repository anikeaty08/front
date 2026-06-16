import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          /* COOKIE LOGIC */
          const banner = document.getElementById('cookie-consent');
          const acceptBtn = document.getElementById('accept-cookies');

          // FORCE SHOW FOR DEV: Logic check commented out so it always shows
          if (!localStorage.getItem('cookiesAccepted')) {
              setTimeout(() => {
                  banner.classList.remove('translate-y-48', 'opacity-0');
              }, 1000); // 1s delay
           }

          // Handle Accept
          acceptBtn.addEventListener('click', () => {
              localStorage.setItem('cookiesAccepted', 'true');
              banner.classList.add('translate-y-48', 'opacity-0');
              setTimeout(() => {
                  banner.classList.add('hidden');
              }, 700);
          });


          /* FLUID SIMULATION */
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
              splat(e.clientX, e.clientY, e.movementX * 10, -e.movementY * 10, { r:0.2, g:0.4, b:1.0 });
          });
          window.addEventListener('touchmove', e => {
              const t = e.touches[0];
              splat(t.clientX, t.clientY, 10, 10, { r:0.2, g:0.4, b:1.0 });
          });
          splat(window.innerWidth / 2, window.innerHeight / 2, 0, -20, { r:0.5, g:0.5, b:0.5 });
      });
    


  document.addEventListener('DOMContentLoaded', () => {
    const modalBtn = document.getElementById('audit-btn');
    const modal = document.getElementById('audit-modal');
    const form = document.getElementById('audit-form');

    if (modalBtn && modal) {
      modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
      });
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            form.reset();
            modal.classList.add('hidden');
            alert('Děkuji! Vaše poptávka byla úspěšně odeslána.');
          } else {
            alert('Odeslání se nezdařilo. Zkuste to prosím znovu.');
          }
        } catch (error) {
          alert('Chyba připojení. Zkuste to později.');
        }
      });
    }
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-60" height="876" id="fluid" width="1440"></canvas>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<span className="text-sm font-semibold tracking-tight">GDPR AUDIT</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">
            Služby
          </a>
<a className="hover:text-white transition-colors" href="#process">
            Proces
          </a>
<a className="hover:text-white transition-colors" href="#about">O mně</a>
</nav>
<a className="hidden md:block hover:text-blue-400 transition-colors text-sm font-medium text-white" href="#contact">
          Nezávazná analýza zdarma
        </a>

<button className="md:hidden text-neutral-400" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-neutral-900 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-neutral-400 hover:text-white text-sm" href="#services">
          Služby
        </a>
<a className="text-neutral-400 hover:text-white text-sm" href="#process">
          Proces
        </a>
<a className="text-neutral-400 hover:text-white text-sm" href="#about">
          O mně
        </a>
<a className="text-blue-400 text-sm font-medium" href="#contact">
          Nezávazná analýza zdarma
        </a>
</div>
</header>
<main className="">

<section className="md:pt-48 md:pb-32 pt-40 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto space-y-8">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">
            GDPR audit
            <br/>
<span className="text-neutral-500">vašeho webu</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-neutral-400 max-w-2xl mr-auto ml-auto">
            Pomohu vám zjistit, zda váš web skutečně splňuje GDPR a cookie
            legislativu. Praktický audit, jasné výstupy a konkrétní kroky.
          </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="shiny-cta group cursor-pointer" id="ass" onclick="window.location.href='#contact'" role="button">
<span className="flex items-center gap-2">Zkontrolovat můj web</span>
</button>
</div>

<div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 mt-12 max-w-3xl mx-auto">
<div className="text-center">
<p className="text-2xl font-semibold text-white tracking-tight">
                20 mil. € / 4 %
              </p>
<p className="uppercase text-xs text-neutral-500 tracking-wide mt-1">
                zákonný rámec GDPR
              </p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold text-white tracking-tight">
                ePrivacy + GDPR
              </p>
<p className="uppercase text-xs text-neutral-500 tracking-wide mt-1">
                cookies pod dvojí regulací
              </p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold text-white tracking-tight">
                Povinnost doložit souhlas
              </p>
<p className="uppercase text-xs text-neutral-500 tracking-wide mt-1">
                nejen ho mít
              </p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold text-white tracking-tight">
                Odpovědnost provozovatele
              </p>
<p className="uppercase text-xs text-neutral-500 tracking-wide mt-1">
                ne dodavatele webu
              </p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="uppercase text-xs text-neutral-500 tracking-widest mb-8">
      Provádím audit na těchto stránkách
    </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<a className="flex items-center gap-3 text-lg font-medium text-white hover:opacity-100 transition" href="https://thelandforstudents.cz/" rel="noopener noreferrer" target="_blank">
<img alt="Vapi" className="h-16 w-auto object-contain" src="https://thelandforstudents.cz/kopie_souboru_logo_app-removebg-preview/"/>
</a>
<a className="flex items-center gap-3 text-lg font-medium text-white hover:opacity-100 transition" href="https://lapitea.cz" rel="noopener noreferrer" target="_blank">
<img alt="Lapitea" className="h-16 w-auto object-contain" src="https://thelandforstudents.cz/wp-content/uploads/2024/11/lapitea-medena.png"/>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">
            Služby GDPR auditu pro weby
          </h2>
<p className="leading-relaxed text-sm text-neutral-400 max-w-xl">
            Zaměřuji se na to, co je skutečně důležité. Neprodávám šablony, ale
            konkrétní kontrolu vašeho webu.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="solar:diploma-outline" strokeWidth="1.5" style={{color: 'rgb(96, 165, 250)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Jednorázový GDPR audit webu
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">
              Komplexní kontrola webu z pohledu GDPR a ochrany osobních údajů.
              Zjistíte, co je v pořádku, co je rizikové a co je potřeba upravit.
            </p>
<div className="text-2xl font-semibold text-white mb-6">1 499 Kč</div>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Kontrola formulářů a sběru dat
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Právní základy zpracování
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Povinné informace na webu
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                Přehledné shrnutí rizik
              </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:border-green-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="solar:file-check-outline" strokeWidth="1.5" style={{color: 'rgb(74, 222, 128)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Audit cookie lišty a cookies
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">
              Ověřím, zda vaše cookie lišta skutečně splňuje GDPR a ePrivacy.
              Nejen „že tam je“, ale že funguje správně.
            </p>
<div className="text-2xl font-semibold text-white mb-6">1 000 Kč</div>
<ul className="text-xs text-neutral-500 space-y-2 gap-x-2 gap-y-2">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-green-500" height="12" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="12"></iconify-icon>
    Správné kategorie cookies
  </li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-green-500" height="12" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="12"></iconify-icon>
    Texty souhlasů
  </li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl hover:border-purple-500/30 transition-colors group">
<div className="flex group-hover:scale-110 transition-transform text-purple-400 bg-purple-500/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<iconify-icon height="24" icon="solar:sitemap-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="" height="24" icon="solar:repeat-outline" strokeWidth="1.5" style={{color: 'rgb(168, 85, 247)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Dlouhodobý GDPR dohled
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">GDPR a cookies nejsou jednorázovou záležitostí. Pohlídám změny na webu i legislativě.</p>
<div className="text-2xl font-semibold text-white mb-6">170 Kč měsíčně</div>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-500" height="12" icon="solar:check-circle-linear" style={{color: 'rgb(168, 85, 247)'}} width="12"></iconify-icon>
                Roční mini-audit
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-500" height="12" icon="solar:check-circle-linear" style={{color: 'rgb(168, 85, 247)'}} width="12"></iconify-icon>
                Konzultace změn na webu
              </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3 sticky top-32 h-fit">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">
                Jak audit probíhá
              </h2>
<p className="leading-relaxed text-sm text-neutral-400 mb-8">
                Jednoduchý, srozumitelný proces bez zbytečné administrativy.
              </p>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    1
                  </div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-semibold text-white mb-2">
                    Analýza webu
                  </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                    Projdu váš web, formuláře, cookies a technické nástroje.
                  </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    2
                  </div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-semibold text-white mb-2">
                    Vyhodnocení rizik
                  </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                    Jasně označím problémová místa a jejich závažnost.
                  </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    3
                  </div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-semibold text-white mb-2">
                    Výstup a doporučení
                  </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                    Dostanete konkrétní seznam kroků, co upravit a proč.
                  </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    4
                  </div>
</div>
<div className="">
<h3 className="text-lg font-semibold text-white mb-2">
                    Konzultace
                  </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                    Projdeme výsledky a odpovím na otázky.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-gradient-to-b from-black to-neutral-900/50 border-white/5 border-t pt-24 pb-24" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">

<img alt="Milan" className="w-full h-full object-contain bg-neutral-900" src="https://thelandforstudents.cz/wp-content/uploads/2026/02/IMG_6703-scaled.jpg"/>
</div>
</div>
<div className="w-full md:w-2/3 space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">
                Pomáhám webům dávat GDPR smysl
              </h2>
<p className="leading-relaxed text-sm text-neutral-400">
                GDPR se často řeší buď přehnaně, nebo vůbec. Mojí rolí je najít
                rozumnou rovnováhu.
              </p>
<p className="leading-relaxed text-sm text-neutral-400">
                Vysvětluji rizika lidsky a navrhuji řešení, která dávají smysl
                pro váš web.
              </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-center pt-32 pr-6 pb-32 pl-6 relative" id="contact">
<div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 transform scale-50"></div>
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight">
            Nejste si jistí, jestli je váš web v pořádku?
          </h2>
<p className="text-lg text-neutral-400">
            Rád se na něj podívám a řeknu vám, jak na tom skutečně jste.
          </p>
<div className="flex justify-center pt-4">
<button className="shiny-cta" id="audit-btn">
<span className="">Nezávazná analýza zdarma</span>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="https://thelandforstudents.cz/gdpr/">
            Ochrana osobních údajů
          </a>
</div>
</div>
</footer>

<div className="fixed bottom-6 inset-x-6 z-50 md:max-w-xl md:mx-auto transform transition-all duration-700 ease-out" id="cookie-consent">
<div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5">
<div className="flex items-start gap-3">
<p className="leading-relaxed text-xs text-neutral-400">
            Web používá pouze technické cookies nezbytné pro jeho fungování.
          </p>
</div>
<div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
<button className="hover:bg-neutral-200 transition-colors sm:w-auto text-xs font-medium text-black text-center bg-white w-full rounded-lg pt-2 pr-4 pb-2 pl-4" id="accept-cookies">
            Rozumím
          </button>
</div>
</div>
</div>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100]" id="audit-modal" role="dialog">

<div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onclick="document.getElementById('audit-modal').classList.add('hidden')"></div>

<div className="fixed z-10 overflow-y-auto top-0 right-0 bottom-0 left-0" style={{}}>
<div className="flex min-h-full sm:p-0 text-center pt-4 pr-4 pb-4 pl-4 items-center justify-center" style={{}}>
<div className="relative transform overflow-hidden rounded-3xl bg-[#050505] border border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">

<button className="absolute top-5 right-5 text-neutral-500 hover:text-white z-20 transition-colors" onclick="document.getElementById('audit-modal').classList.add('hidden')">
<iconify-icon className="" height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

<div className="lg:col-span-5 bg-neutral-900/40 p-8 sm:p-12 border-r border-white/5">
<div className="mb-8">
<p className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider mb-2 font-sans">
                    GDPR Audit
                  </p>
<h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    Poptávka auditu
                  </h3>
</div>
<form action="https://formspree.io/f/xgozgqob" className="space-y-5" id="audit-form" method="POST">
<input name="_subject" type="hidden" value="Nová poptávka GDPR auditu"/>
<input name="_template" type="hidden" value="table"/>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Jméno
                      <span className="text-blue-500">*</span>
</label>
<input className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" name="name" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Email
                      <span className="text-blue-500">*</span>
</label>
<input className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" name="email" placeholder="jan@firma.cz" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Webové stránky
                      <span className="text-neutral-600 font-normal">
                        (nepovinné)
                      </span>
</label>
<input className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" name="website" placeholder="https://" type="url"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Zpráva
                    </label>
<textarea className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" name="message" placeholder="Co potřebujete zkontrolovat?" rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20" type="submit">
<span>Odeslat nezávazně</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="mt-3 text-xs text-neutral-500">
  Odesláním formuláře berete na vědomí, že vaše osobní údaje budou zpracovány
  za účelem vyřízení vaší poptávky dle
  <a className="underline underline-offset-2 hover:text-neutral-700" href="https://thelandforstudents.cz/gdpr/" rel="noopener" target="_blank">
    Zásad ochrany osobních údajů
  </a>.
</p>
</form>
</div>

<div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-blue-900/5"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 space-y-10">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                      Zjistěte, jak na tom váš web je.
                    </h2>
<p className="text-neutral-400 text-base leading-relaxed max-w-lg">
                      Po odeslání formuláře se podívám na váš web a připravím
                      stručný přehled rizik. Vše diskrétně a bez závazků.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-1">
                          Právní jistota
                        </h4>
<p className="text-neutral-500 text-xs leading-relaxed">
                          Odhalíme skrytá rizika, která automatické scannery
                          nevidí.
                        </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">
                          Rychlý výstup
                        </h4>
<p className="text-neutral-500 text-xs leading-relaxed">
                          Základní zjištění obdržíte obvykle do 24 hodin.
                        </p>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<div className="inline-flex gap-3 items-center rounded-2xl bg-white/5 p-2 pr-4 ring-1 ring-white/10">
<div className="w-10 h-10 rounded-xl bg-neutral-800 overflow-hidden">
<img alt="Milan" className="w-full h-full object-cover opacity-80" src="https://thelandforstudents.cz/wp-content/uploads/2026/02/IMG_6703-scaled.jpg"/>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                          Auditor
                        </p>
<p className="text-sm text-white font-medium">
                          Bc. Milan Novák
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
