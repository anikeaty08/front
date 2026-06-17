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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons();

    const canvas = document.getElementById('webgl-lines');
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true });

    if (gl) {
      const vertex = `
        attribute vec2 a_position;
        uniform vec2 u_resolution;
        void main() {
          vec2 zeroToOne = a_position / u_resolution;
          vec2 zeroToTwo = zeroToOne * 2.0;
          vec2 clipSpace = zeroToTwo - 1.0;
          gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
        }
      `;

      const fragment = `
        precision mediump float;
        uniform vec4 u_color;
        void main() {
          gl_FragColor = u_color;
        }
      `;

      function shader(type, source) {
        const s = gl.createShader(type);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        return s;
      }

      const program = gl.createProgram();
      gl.attachShader(program, shader(gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      gl.useProgram(program);

      const positionLocation = gl.getAttribLocation(program, 'a_position');
      const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
      const colorLocation = gl.getUniformLocation(program, 'u_color');
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      function bezier(p0, p1, p2, p3, t) {
        const mt = 1 - t;
        return {
          x: mt*mt*mt*p0.x + 3.0*mt*mt*t*p1.x + 3.0*mt*t*t*p2.x + t*t*t*p3.x,
          y: mt*mt*mt*p0.y + 3.0*mt*mt*t*p1.y + 3.0*mt*t*t*p2.y + t*t*t*p3.y
        };
      }

      function makeCurve(points, width, step) {
        const verts = [];
        for (let i = 0; i < 1; i += step) {
          const p = bezier(points[0], points[1], points[2], points[3], i);
          const p2 = bezier(points[0], points[1], points[2], points[3], i + step);
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const len = Math.max(Math.sqrt(dx*dx + dy*dy), 0.0001);
          const nx = -dy / len * width;
          const ny = dx / len * width;

          verts.push(
            p.x - nx, p.y - ny,
            p.x + nx, p.y + ny,
            p2.x - nx, p2.y - ny,

            p2.x - nx, p2.y - ny,
            p.x + nx, p.y + ny,
            p2.x + nx, p2.y + ny
          );
        }
        return new Float32Array(verts);
      }

      function drawCurve(points, color, width, step) {
        const verts = makeCurve(points, width, step);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STREAM_DRAW);
        gl.uniform4fv(colorLocation, color);
        gl.drawArrays(gl.TRIANGLES, 0, verts.length / 2);
      }

      function render(t) {
        resize();
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        const w = canvas.width;
        const h = canvas.height;
        const time = t * 0.00035;

        drawCurve(
          [
            { x: -0.06 * w, y: 0.82 * h + Math.sin(time * 1.3) * 8.0 },
            { x: 0.23 * w, y: 0.82 * h + Math.cos(time) * 16.0 },
            { x: 0.55 * w, y: 0.64 * h + Math.sin(time * 1.6) * 20.0 },
            { x: 0.92 * w, y: 0.22 * h + Math.cos(time * 1.2) * 14.0 }
          ],
          [0.956, 0.459, 0.129, 0.18],
          2.6,
          0.022
        );

        drawCurve(
          [
            { x: 0.52 * w, y: 0.96 * h + Math.cos(time * 1.4) * 10.0 },
            { x: 0.66 * w, y: 0.76 * h + Math.sin(time * 1.5) * 18.0 },
            { x: 0.82 * w, y: 0.54 * h + Math.cos(time) * 18.0 },
            { x: 1.02 * w, y: 0.12 * h + Math.sin(time * 1.8) * 12.0 }
          ],
          [0.980, 0.639, 0.353, 0.16],
          2.2,
          0.025
        );

        drawCurve(
          [
            { x: -0.02 * w, y: 0.40 * h + Math.sin(time * 0.9) * 8.0 },
            { x: 0.18 * w, y: 0.42 * h + Math.cos(time * 1.1) * 12.0 },
            { x: 0.68 * w, y: 0.44 * h + Math.sin(time * 1.3) * 12.0 },
            { x: 1.02 * w, y: 0.40 * h + Math.cos(time * 1.2) * 8.0 }
          ],
          [0.956, 0.459, 0.129, 0.11],
          1.3,
          0.03
        );

        requestAnimationFrame(render);
      }

      window.addEventListener('resize', resize);
      requestAnimationFrame(render);
    }
  
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
      
<div className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#262931_0%,#151820_34%,#0b0d12_68%)]"></div>
<div className="absolute inset-y-0 left-0 w-[42%] poly-bg"></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[8%] right-[14%] h-72 w-72 rounded-full bg-[#f47521]/[0.12] blur-3xl"></div>
<div className="absolute bottom-[22%] right-[30%] h-64 w-64 rounded-full bg-[#f47521]/[0.08] blur-3xl"></div>
<div className="absolute top-[36%] left-[48%] h-48 w-48 rounded-full bg-[#f47521]/[0.05] blur-3xl"></div>
</div>
<div className="absolute inset-0 pointer-events-none">
<canvas id="webgl-lines"></canvas>
</div>
<header className="relative z-20 border-b border-white/10 bg-white/[0.03] backdrop-blur-sm">
<div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
<div className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#f28a3d] bg-[#231812]/60 shadow-[0_0_0_1px_rgba(244,117,33,0.12)_inset]">
<i className="h-7 w-7 rotate-45 text-[#f28a3d]" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<div className="leading-none">
<div className="text-2xl font-semibold tracking-tight text-[#f28a3d]">MEU</div>
<div className="text-xl font-medium text-[#f28a3d]">PLANEJAMENTO</div>
</div>
</div>
<nav className="hidden items-center gap-10 md:flex">
<a className="text-lg font-medium text-white/70 transition hover:text-white" href="#beneficios">Benefícios</a>
<a className="text-lg font-medium text-white/70 transition hover:text-white" href="#tecnologia">Tecnologia</a>
<a className="text-lg font-medium text-white/70 transition hover:text-white" href="#jornada">Jornada</a>
<a className="text-lg font-medium text-white/70 transition hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden items-center gap-3 rounded-2xl bg-[#eb842d] px-6 py-3 text-lg font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition hover:bg-[#f08c39] sm:inline-flex" href="#">
<i className="h-5 w-5" data-lucide="log-in" strokeWidth="1.5"></i>
            Entrar agora
          </a>
<button className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden">
<i className="h-5 w-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<main className="relative z-10">
<section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-screen-2xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-16">
<div className="lg:col-span-5 lg:pr-6">
<div className="max-w-2xl text-center lg:text-left">
<h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A plataforma que
              <span className="mt-2 block text-[#f28a3d] hero-glow-text">transforma esforço</span>
<span className="mt-2 block">em resultado.</span>
</h1>
<p className="mt-8 max-w-xl text-xl leading-relaxed text-white/80 sm:text-2xl">
              Estude <span className="text-[#f28a3d]">de forma profissional</span> para concursos.
              Tenha clareza sobre o que estudar, quando estudar e como evoluir.
            </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f06f16] to-[#f1a157] px-8 py-4 text-xl font-medium text-white shadow-[0_0_2rem_rgba(244,117,33,0.28),0_1rem_2rem_rgba(244,117,33,0.22)] transition hover:scale-[1.01]" href="#">
                Quero estudar de forma profissional
              </a>
</div>
</div>
</div>
<div className="relative lg:col-span-7">
<div className="relative mx-auto h-[30rem] w-full max-w-5xl sm:h-[35rem] lg:h-[40rem]">
<div className="absolute inset-x-[10%] top-[14%] h-[48%] rounded-full bg-[#f47521]/20 blur-3xl"></div>
<div className="absolute right-[4%] top-[4%] h-[78%] w-[82%] float-a">
<div className="relative h-full w-full rounded-[2rem] bg-[#0e1015] p-2 screen-shell">
<div className="absolute inset-[0.22rem] rounded-[1.8rem] border border-white/10"></div>
<div className="absolute left-1/2 top-2 z-20 h-5 w-40 -translate-x-1/2 rounded-b-2xl bg-black/80"></div>
<div className="relative h-full w-full overflow-hidden rounded-[1.6rem] screen-panel">
<div className="glass-reflection absolute inset-x-0 top-0 h-20"></div>
<div className="flex h-full">
<div className="w-10 border-r border-white/5 bg-[#2a2c33] pt-10">
<div className="flex flex-col items-center gap-5 text-white/40">
<i className="h-4 w-4" data-lucide="house" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="chart-column" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="calendar-days" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="book-open" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="settings" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex-1 p-4 sm:p-5">
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-5 w-5 items-center justify-center rounded bg-[#f28a3d]/20 text-[#f28a3d]">
<i className="h-3.5 w-3.5 rotate-45" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-white/85 sm:text-base">Meu Planejamento</span>
</div>
<div className="flex items-center gap-3 text-white/45">
<i className="h-4 w-4" data-lucide="smartphone" strokeWidth="1.5"></i>
<i className="h-4 w-4" data-lucide="globe" strokeWidth="1.5"></i>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f28a3d] text-white">
<i className="h-3.5 w-3.5" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs uppercase tracking-wide text-white/40">Questões</div>
<div className="mt-2 text-xl font-semibold text-white sm:text-2xl">1380+</div>
<div className="text-xs text-lime-400">Para praticar</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs uppercase tracking-wide text-white/40">Acerto global</div>
<div className="mt-2 text-xl font-semibold text-white sm:text-2xl">85.4%</div>
<div className="text-xs text-white/35">Média da plataforma</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs uppercase tracking-wide text-white/40">Destaque</div>
<div className="mt-2 text-xl font-semibold text-white sm:text-2xl">89%</div>
<div className="text-xs text-white/35">Direito Penal</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs uppercase tracking-wide text-white/40">Foco</div>
<div className="mt-2 text-xl font-semibold text-white sm:text-2xl">58%</div>
<div className="text-xs text-white/35">Contabilidade</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-4">
<div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-4">
<div className="mb-3 text-center text-sm font-medium uppercase tracking-wide text-white/70">
                            Horas de estudo por disciplina
                          </div>
<div className="space-y-2.5">
<div>
<div className="mb-1 flex items-center justify-between text-xs text-white/70"><span>Português</span><span>75h</span></div>
<div className="h-2 rounded-full bg-white/5"><div className="h-2 w-[84%] rounded-full bg-[#f28a3d]"></div></div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-white/70"><span>Matemática</span><span>60h</span></div>
<div className="h-2 rounded-full bg-white/5"><div className="h-2 w-[72%] rounded-full bg-[#f07a2b]"></div></div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-white/70"><span>História</span><span>45h</span></div>
<div className="h-2 rounded-full bg-white/5"><div className="h-2 w-[54%] rounded-full bg-[#e6a73a]"></div></div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-white/70"><span>Direito</span><span>45h</span></div>
<div className="h-2 rounded-full bg-white/5"><div className="h-2 w-[52%] rounded-full bg-[#4098d7]"></div></div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-white/70"><span>Inglês</span><span>42h</span></div>
<div className="h-2 rounded-full bg-white/5"><div className="h-2 w-[47%] rounded-full bg-[#90be6d]"></div></div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
<div className="flex items-center justify-between text-white/75"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#f06f3d]"></span>Português</span><span className="text-lime-400">75%</span></div>
<div className="mt-1 text-white/35">Perguntas precisas.</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
<div className="flex items-center justify-between text-white/75"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#65d6ff]"></span>Raciocínio Lógico</span><span className="text-lime-400">67%</span></div>
<div className="mt-1 text-white/35">Mapa de evolução.</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
<div className="flex items-center justify-between text-white/75"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#e8b13b]"></span>História</span><span className="text-lime-400">48%</span></div>
<div className="mt-1 text-white/35">Reforço de pontos fracos.</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs">
<div className="flex items-center justify-between text-white/75"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#7ee36d]"></span>Direito</span><span className="text-lime-400">88%</span></div>
<div className="mt-1 text-white/35">Desempenho consolidado.</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
<div className="mb-2 flex items-center gap-2 text-sm font-medium text-white/85">
<i className="h-4 w-4 text-[#f28a3d]" data-lucide="sparkles" strokeWidth="1.5"></i>
                            Insights do sistema
                          </div>
<div className="text-xs leading-relaxed text-white/35">
                            Zonas especiais, priorização e consolidação diária.
                          </div>
<div className="mt-4 text-sm font-medium uppercase tracking-wide text-white/70">
                            Progresso total
                          </div>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="flex items-start justify-between text-xs text-white/75">
<span>Direito Constitucional</span>
<span className="rounded bg-[#f06f16]/15 px-1.5 py-0.5 text-[#f28a3d]">76%</span>
</div>
<div className="mt-2 flex justify-between text-xs text-white/35">
<span>321 questões</span><span>25 revisões</span>
</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="flex items-start justify-between text-xs text-white/75">
<span>Contabilidade</span>
<span className="rounded bg-[#f06f16]/15 px-1.5 py-0.5 text-[#f28a3d]">58%</span>
</div>
<div className="mt-2 flex justify-between text-xs text-white/35">
<span>118 questões</span><span>15 revisões</span>
</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="flex items-start justify-between text-xs text-white/75">
<span>Direito Penal</span>
<span className="rounded bg-[#f06f16]/15 px-1.5 py-0.5 text-[#f28a3d]">89%</span>
</div>
<div className="mt-2 flex justify-between text-xs text-white/35">
<span>300 questões</span><span>18 revisões</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-[2%] left-[58%] z-20 h-[47%] w-[47%] float-b">
<div className="relative h-full w-full rounded-[1.8rem] bg-[#0f1116] p-2 screen-shell">
<div className="absolute inset-[0.22rem] rounded-[1.55rem] border border-white/10"></div>
<div className="relative h-full w-full overflow-hidden rounded-[1.45rem] screen-panel">
<div className="glass-reflection absolute inset-x-0 top-0 h-16"></div>
<div className="flex h-full">
<div className="w-8 border-r border-white/5 bg-[#2a2c33] pt-8">
<div className="flex flex-col items-center gap-4 text-white/40">
<i className="h-3 w-3" data-lucide="panel-left" strokeWidth="1.5"></i>
<i className="h-3 w-3" data-lucide="circle-user-round" strokeWidth="1.5"></i>
<i className="h-3 w-3" data-lucide="badge-help" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex-1 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-4 w-4 items-center justify-center rounded bg-[#f28a3d]/20 text-[#f28a3d]">
<i className="h-3 w-3 rotate-45" data-lucide="infinity" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-white/85">Painel rápido</span>
</div>
<div className="flex items-center gap-2 text-white/40">
<i className="h-3 w-3" data-lucide="bell" strokeWidth="1.5"></i>
<i className="h-3 w-3" data-lucide="settings-2" strokeWidth="1.5"></i>
</div>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="rounded-md border border-white/5 bg-white/[0.03] p-2">
<div className="text-xs text-white/35">Questões</div>
<div className="mt-1 text-sm font-semibold text-white">1380</div>
</div>
<div className="rounded-md border border-white/5 bg-white/[0.03] p-2">
<div className="text-xs text-white/35">Revisões</div>
<div className="mt-1 text-sm font-semibold text-white">137</div>
</div>
<div className="rounded-md border border-white/5 bg-white/[0.03] p-2">
<div className="text-xs text-white/35">Horas</div>
<div className="mt-1 text-sm font-semibold text-white">16</div>
</div>
<div className="rounded-md border border-white/5 bg-white/[0.03] p-2">
<div className="text-xs text-white/35">Metas</div>
<div className="mt-1 text-sm font-semibold text-white">4</div>
</div>
</div>
<div className="mt-3 grid grid-cols-4 gap-2">
<div className="rounded-md bg-[#cf4b2f] p-2">
<div className="text-xs text-white/70">Tempo</div>
<div className="mt-1 text-base font-semibold text-white">27:56</div>
</div>
<div className="rounded-md bg-[#e68a22] p-2">
<div className="text-xs text-white/70">Acerto</div>
<div className="mt-1 text-base font-semibold text-white">85.4%</div>
</div>
<div className="rounded-md bg-[#5ca64f] p-2">
<div className="text-xs text-white/70">Conclusão</div>
<div className="mt-1 text-base font-semibold text-white">61.6%</div>
</div>
<div className="rounded-md bg-[#3f7bb7] p-2">
<div className="text-xs text-white/70">Score</div>
<div className="mt-1 text-base font-semibold text-white">60%</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs font-medium uppercase tracking-wide text-white/70">Desempenho simulado</div>
<div className="mt-3 flex h-20 items-end gap-1">
<div className="w-2 rounded-t bg-lime-500/70" style={{height: '12%'}}></div>
<div className="w-2 rounded-t bg-lime-500/70" style={{height: '18%'}}></div>
<div className="w-2 rounded-t bg-sky-500/70" style={{height: '28%'}}></div>
<div className="w-2 rounded-t bg-sky-500/70" style={{height: '36%'}}></div>
<div className="w-2 rounded-t bg-indigo-500/70" style={{height: '44%'}}></div>
<div className="w-2 rounded-t bg-lime-500/70" style={{height: '50%'}}></div>
<div className="w-2 rounded-t bg-lime-500/70" style={{height: '56%'}}></div>
<div className="w-2 rounded-t bg-yellow-500/70" style={{height: '62%'}}></div>
<div className="w-2 rounded-t bg-yellow-500/70" style={{height: '70%'}}></div>
<div className="w-2 rounded-t bg-orange-500/70" style={{height: '76%'}}></div>
<div className="w-2 rounded-t bg-orange-500/70" style={{height: '82%'}}></div>
<div className="w-2 rounded-t bg-red-500/70" style={{height: '90%'}}></div>
</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
<div className="text-xs font-medium uppercase tracking-wide text-white/70">Situação consolidada</div>
<div className="mt-3 space-y-2">
<div>
<div className="mb-1 flex justify-between text-xs text-white/55"><span>Teoria</span><span>72%</span></div>
<div className="h-1.5 rounded-full bg-white/5"><div className="h-1.5 w-[72%] rounded-full bg-[#f28a3d]"></div></div>
</div>
<div>
<div className="mb-1 flex justify-between text-xs text-white/55"><span>Questões</span><span>48%</span></div>
<div className="h-1.5 rounded-full bg-white/5"><div className="h-1.5 w-[48%] rounded-full bg-[#3f7bb7]"></div></div>
</div>
</div>
<div className="mt-4 text-2xl font-semibold text-white">17 itens</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-[-2%] left-[12%] right-[8%] h-6 rounded-full bg-black/35 blur-xl"></div>
<div className="absolute left-[49%] top-[78%] h-5 w-[36%] -translate-x-1/2 rounded-full bg-black/50 blur-md"></div>
<div className="absolute left-[49%] top-[73%] h-4 w-[38%] -translate-x-1/2 rounded-sm bg-gradient-to-b from-[#8e8e92] to-[#45464a]"></div>
<div className="absolute left-[49%] top-[77%] h-8 w-[46%] -translate-x-1/2 rounded-sm bg-gradient-to-b from-[#66686e] to-[#2f3137]"></div>
</div>
</div>
</div>
</section>
<section className="relative py-16 sm:py-20" id="tecnologia">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,117,33,0.08),transparent_42%)]"></div>
<div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-[#f29a4b] sm:text-4xl">
              SEUS NÚMEROS DE SUCESSO
            </div>
</div>
<div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
<div className="rounded-2xl border border-white/10 px-6 py-5 soft-card">
<div className="text-base font-medium text-white/75">TOTAL DE QUESTÕES</div>
<div className="mt-2 text-5xl font-semibold tracking-tight text-[#ffb567] metric-glow">1380+</div>
<div className="mt-1 text-xl text-white/65">Para praticar.</div>
</div>
<div className="rounded-2xl border border-white/10 px-6 py-5 soft-card">
<div className="text-base font-medium text-white/75">ACERTO GLOBAL</div>
<div className="mt-2 text-5xl font-semibold tracking-tight text-[#ffb567] metric-glow">85.4%</div>
<div className="mt-1 text-xl text-white/65">Média da plataforma.</div>
</div>
<div className="rounded-2xl border border-white/10 px-6 py-5 soft-card">
<div className="text-base font-medium text-white/75">Destaque (Direito Penal)</div>
<div className="mt-2 text-5xl font-semibold tracking-tight text-[#ffb567] metric-glow">89%</div>
<div className="mt-1 text-xl text-white/65">Sua melhor matéria.</div>
</div>
<div className="rounded-2xl border border-white/10 px-6 py-5 soft-card">
<div className="text-base font-medium text-white/75">Foco (Contabilidade)</div>
<div className="mt-2 text-5xl font-semibold tracking-tight text-[#ffb567] metric-glow">58%</div>
<div className="mt-1 text-xl text-white/65">Área de atenção.</div>
</div>
</div>
<div className="mt-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              COMO <span className="text-[#f28a3d]">FUNCIONA NOSSA TECNOLOGIA</span>
</h2>
</div>
<div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
<div className="relative rounded-3xl p-[1px] orange-ring">
<div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47521]/20 blur-3xl"></div>
<div className="relative rounded-3xl soft-panel px-6 py-6 sm:px-8 sm:py-8">
<div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
<div className="order-2 md:order-1">
<div className="relative mx-auto w-full max-w-sm">
<div className="rounded-t-2xl bg-black p-2 shadow-[0_1.5rem_3rem_rgba(0,0,0,.4)]">
<div className="overflow-hidden rounded-xl border border-white/5 bg-[#1b1d23]">
<div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-[#f87171]"></div>
<div className="h-2 w-2 rounded-full bg-[#fbbf24]"></div>
<div className="h-2 w-2 rounded-full bg-[#34d399]"></div>
</div>
<div className="text-xs text-white/40">Dashboard</div>
</div>
<div className="p-3">
<div className="rounded-lg bg-white/5 p-2">
<div className="h-3 w-28 rounded bg-white/10"></div>
<div className="mt-2 grid grid-cols-4 gap-2">
<div className="h-8 rounded bg-lime-500/70"></div>
<div className="h-8 rounded bg-yellow-500/70"></div>
<div className="h-8 rounded bg-orange-500/70"></div>
<div className="h-8 rounded bg-slate-600"></div>
</div>
</div>
<div className="mt-3 rounded-lg bg-white/5 p-2">
<div className="mb-2 h-3 w-24 rounded bg-white/10"></div>
<div className="space-y-1.5">
<div className="h-2 rounded bg-white/10"></div>
<div className="h-2 w-[92%] rounded bg-white/10"></div>
<div className="h-2 w-[86%] rounded bg-white/10"></div>
<div className="h-2 w-[78%] rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-auto h-2 w-[92%] rounded-b-2xl bg-gradient-to-b from-[#7b7b7b] to-[#262626]"></div>
<div className="mx-auto h-1.5 w-[28%] rounded-b-full bg-[#4b4b4b]"></div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="text-4xl font-semibold tracking-tight text-[#f29a4b]">MÉTODO:</div>
<div className="mt-1 text-4xl font-semibold tracking-tight text-white">Planejamento Inteligente.</div>
<ul className="mt-6 space-y-2 text-xl leading-relaxed text-white/72">
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Peso de cada disciplina</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Carga horária semanal</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Reforça pontos fracos</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Controlar revisões</span></li>
</ul>
</div>
</div>
</div>
</div>
<div className="relative rounded-3xl p-[1px] orange-ring">
<div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f47521]/20 blur-3xl"></div>
<div className="relative rounded-3xl soft-panel px-6 py-6 sm:px-8 sm:py-8">
<div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
<div>
<div className="text-4xl font-semibold tracking-tight text-[#f29a4b]">SISTEMA:</div>
<div className="mt-1 text-4xl font-semibold tracking-tight text-white">Monitoramento de Desempenho.</div>
<ul className="mt-6 space-y-2 text-xl leading-relaxed text-white/72">
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Onde está errando</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Assuntos priorizados</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Ciclo de estudos</span></li>
<li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f28a3d]"></span><span>Evolução semanal</span></li>
</ul>
</div>
<div>
<div className="relative mx-auto w-full max-w-sm">
<div className="rounded-t-2xl bg-black p-2 shadow-[0_1.5rem_3rem_rgba(0,0,0,.4)]">
<div className="overflow-hidden rounded-xl border border-white/5 bg-[#1b1d23]">
<div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
<div className="text-xs text-white/70">Contabilidade</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-[#f28a3d]"></div>
</div>
</div>
<div className="p-3">
<div className="grid grid-cols-4 gap-2">
<div className="rounded bg-white/5 p-2">
<div className="text-xs text-white/40">1380</div>
</div>
<div className="rounded bg-white/5 p-2">
<div className="text-xs text-white/40">23</div>
</div>
<div className="rounded bg-white/5 p-2">
<div className="text-xs text-white/40">39</div>
</div>
<div className="rounded bg-white/5 p-2">
<div className="text-xs text-white/40">13</div>
</div>
</div>
<div className="mt-3 grid grid-cols-4 gap-2">
<div className="h-10 rounded bg-[#e35b36]"></div>
<div className="h-10 rounded bg-[#f29a2e]"></div>
<div className="h-10 rounded bg-[#7bb34c]"></div>
<div className="h-10 rounded bg-[#356fb0]"></div>
</div>
<div className="mt-3 rounded-lg bg-white/5 p-3">
<div className="flex h-20 items-end gap-1">
<div className="w-3 rounded-t bg-green-500/70" style={{height: '12%'}}></div>
<div className="w-3 rounded-t bg-green-500/70" style={{height: '18%'}}></div>
<div className="w-3 rounded-t bg-lime-500/70" style={{height: '26%'}}></div>
<div className="w-3 rounded-t bg-lime-500/70" style={{height: '34%'}}></div>
<div className="w-3 rounded-t bg-yellow-500/70" style={{height: '42%'}}></div>
<div className="w-3 rounded-t bg-yellow-500/70" style={{height: '50%'}}></div>
<div className="w-3 rounded-t bg-orange-500/70" style={{height: '58%'}}></div>
<div className="w-3 rounded-t bg-orange-500/70" style={{height: '66%'}}></div>
<div className="w-3 rounded-t bg-[#f28a3d]" style={{height: '74%'}}></div>
<div className="w-3 rounded-t bg-[#f28a3d]" style={{height: '84%'}}></div>
</div>
<div className="mt-2 text-center text-xs text-white/55">17 itens</div>
</div>
</div>
</div>
</div>
<div className="mx-auto h-2 w-[92%] rounded-b-2xl bg-gradient-to-b from-[#7b7b7b] to-[#262626]"></div>
<div className="mx-auto h-1.5 w-[28%] rounded-b-full bg-[#4b4b4b]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-16 sm:py-20" id="jornada">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,117,33,0.08),transparent_45%)]"></div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute left-[-10%] bottom-[16%] h-px w-[45%] rotate-[12deg] bg-gradient-to-r from-transparent via-[#f28a3d]/70 to-transparent shadow-[0_0_1.5rem_rgba(244,117,33,.4)]"></div>
<div className="absolute left-[38%] top-[18%] h-px w-[36%] rotate-[-48deg] bg-gradient-to-r from-transparent via-[#f28a3d]/90 to-transparent shadow-[0_0_1.5rem_rgba(244,117,33,.4)]"></div>
<div className="absolute right-[-8%] top-[34%] h-px w-[42%] rotate-[-42deg] bg-gradient-to-r from-transparent via-[#f28a3d]/80 to-transparent shadow-[0_0_1.5rem_rgba(244,117,33,.4)]"></div>
</div>
<div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
<div className="text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              SUA JORNADA <span className="text-[#f28a3d]">PARA A APROVAÇÃO</span>
</h2>
</div>
<div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
<div className="rounded-3xl border border-white/10 px-6 py-6 soft-card">
<div className="text-5xl font-semibold tracking-tight text-[#f29a4b]">1</div>
<div className="mt-3 flex justify-center">
<i className="h-16 w-16 text-[#f29a4b]" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div className="mt-5 text-center text-3xl font-medium tracking-tight text-white">Cronometre</div>
<div className="text-center text-3xl font-medium tracking-tight text-white">Seu Estudo</div>
</div>
<div className="rounded-3xl border border-white/10 px-6 py-6 soft-card">
<div className="text-5xl font-semibold tracking-tight text-[#f29a4b]">2</div>
<div className="mt-3 flex justify-center">
<i className="h-16 w-16 text-[#f29a4b]" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<div className="mt-5 text-center text-3xl font-medium tracking-tight text-white">Controle De</div>
<div className="text-center text-3xl font-medium tracking-tight text-white">Revisões</div>
</div>
<div className="rounded-3xl border border-white/10 px-6 py-6 soft-card">
<div className="text-5xl font-semibold tracking-tight text-[#f29a4b]">3</div>
<div className="mt-3 flex justify-center">
<i className="h-16 w-16 text-[#f29a4b]" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<div className="mt-5 text-center text-3xl font-medium tracking-tight text-white">Ciclo De</div>
<div className="text-center text-3xl font-medium tracking-tight text-white">Estudos</div>
</div>
<div className="rounded-3xl border border-white/10 px-6 py-6 soft-card">
<div className="text-5xl font-semibold tracking-tight text-[#f29a4b]">4</div>
<div className="mt-3 flex justify-center">
<i className="h-16 w-16 text-[#f29a4b]" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div className="mt-5 text-center text-3xl font-medium tracking-tight text-white">Aprovação</div>
</div>
</div>
<div className="relative mx-auto mt-12 max-w-3xl rounded-[2rem] p-[1px] orange-ring orange-glow">
<div className="absolute left-[-2rem] bottom-[1rem] hidden h-28 w-28 rounded-full bg-[#f28a3d]/15 blur-2xl sm:block"></div>
<div className="absolute right-[-2rem] bottom-[1rem] hidden h-28 w-28 rounded-full bg-[#f28a3d]/15 blur-2xl sm:block"></div>
<div className="relative rounded-[2rem] soft-panel px-6 py-7 sm:px-10 sm:py-8">
<div className="pointer-events-none absolute -left-6 bottom-6 hidden sm:block">
<div className="relative">
<div className="absolute left-6 top-5 h-12 w-12 rounded-full bg-[#f7c75e]/20 blur-xl"></div>
<div className="flex items-end gap-1">
<div className="h-10 w-10 rounded-full bg-gradient-to-b from-[#f5d67a] to-[#c9962e] shadow-[inset_0_0_0_1px_rgba(255,255,255,.25)]"></div>
<div className="h-14 w-10 rounded-full bg-gradient-to-b from-[#f5d67a] to-[#c9962e] shadow-[inset_0_0_0_1px_rgba(255,255,255,.25)]"></div>
<div className="h-16 w-10 rounded-full bg-gradient-to-b from-[#f5d67a] to-[#c9962e] shadow-[inset_0_0_0_1px_rgba(255,255,255,.25)]"></div>
<div className="mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#f5d67a] to-[#c9962e] shadow-[inset_0_0_0_1px_rgba(255,255,255,.25)] text-2xl text-[#9d6a10]">$</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-4 bottom-8 hidden rotate-[8deg] sm:block">
<div className="h-20 w-28 rounded-xl bg-gradient-to-br from-[#4b4b4b] to-[#1f1f1f] shadow-[0_1rem_2rem_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.06)]">
<div className="px-4 pt-4">
<div className="h-3 w-5 rounded bg-[#d9b35f]"></div>
<div className="mt-4 flex gap-2">
<div className="h-1.5 w-5 rounded bg-white/35"></div>
<div className="h-1.5 w-5 rounded bg-white/35"></div>
<div className="h-1.5 w-5 rounded bg-white/35"></div>
</div>
<div className="mt-3 flex items-center justify-end gap-1">
<div className="h-3.5 w-3.5 rounded-full bg-[#e85c3a]"></div>
<div className="h-3.5 w-3.5 rounded-full bg-[#f2c24d]"></div>
</div>
</div>
</div>
</div>
<div className="text-center">
<div className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Assine a plataforma <span className="text-[#f28a3d]">MEU Planejamento.</span>
</div>
<div className="mt-5 flex items-center justify-center gap-3">
<div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">12x de R$ 19,96</div>
<i className="h-8 w-8 text-white/80" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div className="mt-3 text-xl text-white/60">Ou R$ 193,00 à vista.</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f06f16] to-[#f1a157] px-8 py-3 text-xl font-medium text-white shadow-[0_0_2rem_rgba(244,117,33,0.25),0_1rem_2rem_rgba(244,117,33,0.18)] transition hover:scale-[1.01]" href="#">
                    Começar Agora
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
