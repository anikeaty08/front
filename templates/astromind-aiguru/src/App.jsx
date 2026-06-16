import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  vec3 hash( vec3 p ) {
    p = vec3(
      dot(p,vec3(127.1,311.7, 74.7)),
      dot(p,vec3(269.5,183.3,246.1)),
      dot(p,vec3(113.5,271.9,124.6)));
    return -1.0 + 2.0*fract(sin(p)*43758.5453123);
  }
  float noise( in vec3 p ) {
    vec3 i = floor( p );
    vec3 f = fract( p );
    vec3 u = f*f*(3.0-2.0*f);
    return mix(
      mix(
        mix(dot(hash(i + vec3(0.0,0.0,0.0)), f - vec3(0.0,0.0,0.0)),
            dot(hash(i + vec3(1.0,0.0,0.0)), f - vec3(1.0,0.0,0.0)), u.x),
        mix(dot(hash(i + vec3(0.0,1.0,0.0)), f - vec3(0.0,1.0,0.0)),
            dot(hash(i + vec3(1.0,1.0,0.0)), f - vec3(1.0,1.0,0.0)), u.x), u.y),
      mix(
        mix(dot(hash(i + vec3(0.0,0.0,1.0)), f - vec3(0.0,0.0,1.0)),
            dot(hash(i + vec3(1.0,0.0,1.0)), f - vec3(1.0,0.0,1.0)), u.x),
        mix(dot(hash(i + vec3(0.0,1.0,1.0)), f - vec3(0.0,1.0,1.0)),
            dot(hash(i + vec3(1.0,1.0,1.0)), f - vec3(1.0,1.0,1.0)), u.x), u.y), u.z
    );
  }
  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
    float stars_threshold = 8.0;
    float stars_exposure = 200.0;
    float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
    stars *= mix(0.4, 1.2, noise(stars_direction * 100.0 + vec3(iTime)));
    gl_FragColor = vec4(vec3(stars * 0.7, stars * 0.6, stars),1.0);
  }
  


    const canvas = document.getElementById('shader-canvas');
    const gl = canvas.getContext('webgl');
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    window.addEventListener('resize', resize);
    resize();
    function compileShader(gl, source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader));
      }
      return shader;
    }
    const vertSrc = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;
    const fragSrc = document.getElementById('fragShader').textContent;
    const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
    const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);
    const posLoc = gl.getAttribLocation(program, 'position');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    const iResolution = gl.getUniformLocation(program, 'iResolution');
    const iTime = gl.getUniformLocation(program, 'iTime');
    function render(time) {
      gl.uniform2f(iResolution, canvas.width, canvas.height);
      gl.uniform1f(iTime, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="shader-canvas"></canvas>

<nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
<span className="iconify w-5 h-5 text-white" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xl font-semibold tracking-tight">AstroMind</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Функции</a>
<a className="hover:text-white transition-colors" href="#pricing">Цени</a>
<a className="hover:text-white transition-colors" href="#how">Как работи</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-sm text-slate-300 hover:text-white transition-colors px-4 py-2">
            Вход
          </button>
<button className="text-sm bg-white text-slate-900 font-medium rounded-lg px-4 py-2 hover:bg-slate-100 transition-all">
            Започни безплатно
          </button>
</div>
</div>
</div>
</nav>
<div className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-violet-950/40 via-slate-950 to-slate-950 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-24">
<div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
<span className="iconify w-4 h-4 text-violet-400" data-icon="lucide:zap" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-violet-300">AI-базирана астрология</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Твоят Личен AI Астролог,
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">наличен 24/7</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          Дълбока, терапевтична и практична астрология. Психоанализа и стратегия, базирана на професионални текстове — не просто "днес ти е ден за кафе".
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-xl px-8 py-3.5 hover:opacity-90 transition-all shadow-lg shadow-violet-500/25">
<span className="iconify w-5 h-5" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
            Безплатна натална карта
          </button>
<button className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-300 font-medium rounded-xl px-8 py-3.5 hover:bg-white/5 hover:border-slate-600 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></span>
            Как работи
          </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-emerald-500" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
<span>Сигурни данни</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-violet-400" data-icon="lucide:brain" style={{strokeWidth: '1.5'}}></span>
<span>RAG AI система</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-amber-400" data-icon="lucide:book-open" style={{strokeWidth: '1.5'}}></span>
<span>Професионални текстове</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24" id="features">

<div className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
<span className="iconify w-6 h-6 text-violet-400" data-icon="lucide:sun" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
<span className="iconify w-3 h-3" data-icon="lucide:gift" style={{strokeWidth: '1.5'}}></span>
            Безплатно
          </div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Натална Карта Lite</h3>
<p className="text-slate-400 text-sm font-light mb-4">Визуализация на картата + кратък анализ на Слънце, Луна и Асцендент. Дневен аспект всеки ден.</p>
<div className="pt-4 border-t border-slate-700/50">
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-emerald-500" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                1 анализ на 24 часа
              </li>
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-emerald-500" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                1 запазен профил
              </li>
</ul>
</div>
</div>

<div className="group bg-gradient-to-b from-purple-900/30 to-slate-900/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 ring-1 ring-purple-500/10">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5">
<span className="iconify w-6 h-6 text-purple-400" data-icon="lucide:heart" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="inline-flex items-center gap-1.5 bg-purple-500/10 text-purple-400 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
<span className="iconify w-3 h-3" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
            50 монети
          </div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Синастрия</h3>
<p className="text-slate-400 text-sm font-light mb-4">Пълен анализ на съвместимостта. Как се свързвате, къде има хармония и какви са предизвикателствата.</p>
<div className="pt-4 border-t border-slate-700/50">
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-purple-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                Подробен анализ на връзката
              </li>
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-purple-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                DOCX експорт включен
              </li>
</ul>
</div>
</div>

<div className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
<span className="iconify w-6 h-6 text-indigo-400" data-icon="lucide:calendar" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-medium px-2.5 py-1 rounded-full mb-4">
<span className="iconify w-3 h-3" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
            100 монети
          </div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Годишен Доклад</h3>
<p className="text-slate-400 text-sm font-light mb-4">"Книгата на вашата година" — 12 месеца подробна прогноза с практични съвети и ключови дати.</p>
<div className="pt-4 border-t border-slate-700/50">
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-indigo-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                Месец по месец анализ
              </li>
<li className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-indigo-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                Красив DOCX формат
              </li>
</ul>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 mb-24">
<div className="flex items-center gap-3 mb-6">
<span className="iconify w-6 h-6 text-amber-400" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
<h2 className="text-2xl font-semibold tracking-tight">Всички услуги</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="border-b border-slate-700/50 text-left text-slate-400">
<th className="pb-4 font-medium">Услуга</th>
<th className="pb-4 font-medium text-center">Монети</th>
<th className="pb-4 font-medium hidden sm:table-cell">Описание</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="py-4 font-medium">Конкретен Въпрос</td>
<td className="py-4 text-center">
<span className="inline-flex items-center gap-1 text-amber-400">
<span className="iconify w-4 h-4" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
                    10
                  </span>
</td>
<td className="py-4 text-slate-400 hidden sm:table-cell">"Ще ми се обади ли?", "Да сменя ли работата?"</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="py-4 font-medium">Месечен Анализ</td>
<td className="py-4 text-center">
<span className="inline-flex items-center gap-1 text-amber-400">
<span className="iconify w-4 h-4" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
                    25
                  </span>
</td>
<td className="py-4 text-slate-400 hidden sm:table-cell">Подробен разбор по дни за здраве, кариера или любов</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="py-4 font-medium">Кармичен Анализ</td>
<td className="py-4 text-center">
<span className="inline-flex items-center gap-1 text-amber-400">
<span className="iconify w-4 h-4" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
                    40
                  </span>
</td>
<td className="py-4 text-slate-400 hidden sm:table-cell">Дълбок психо-анализ на кармични теми и родова памет</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="py-4 font-medium">Синастрия</td>
<td className="py-4 text-center">
<span className="inline-flex items-center gap-1 text-amber-400">
<span className="iconify w-4 h-4" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
                    50
                  </span>
</td>
<td className="py-4 text-slate-400 hidden sm:table-cell">Пълен анализ на връзката + прогноза за двойката</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="py-4 font-medium">Годишен Доклад</td>
<td className="py-4 text-center">
<span className="inline-flex items-center gap-1 text-amber-400">
<span className="iconify w-4 h-4" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
                    100
                  </span>
</td>
<td className="py-4 text-slate-400 hidden sm:table-cell">"Книгата на вашата година" — 12 месеца в DOCX</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mb-24" id="pricing">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Зареди AstroCoins</h2>
<p className="text-slate-400 max-w-xl mx-auto">Без абонамент, без обвързване. Купуваш монети и ги използваш когато искаш.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

<div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
<h3 className="text-lg font-medium mb-1">Starter</h3>
<p className="text-slate-500 text-sm mb-4">За да опиташ</p>
<div className="mb-6">
<span className="text-4xl font-semibold">10</span>
<span className="text-slate-400 ml-1">лв.</span>
</div>
<div className="flex items-center gap-2 mb-6 text-slate-300">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">50 монети</span>
</div>
<button className="w-full py-2.5 border border-slate-600 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">
              Купи
            </button>
</div>

<div className="bg-gradient-to-b from-violet-900/30 to-slate-900/50 border-2 border-violet-500/50 rounded-2xl p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-xs font-medium px-3 py-1 rounded-full">
              Популярен
            </div>
<h3 className="text-lg font-medium mb-1">Popular</h3>
<p className="text-slate-500 text-sm mb-4">Най-добра стойност</p>
<div className="mb-6">
<span className="text-4xl font-semibold">25</span>
<span className="text-slate-400 ml-1">лв.</span>
</div>
<div className="flex items-center gap-2 mb-2 text-slate-300">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">150 монети</span>
</div>
<div className="text-sm text-emerald-400 mb-6 flex items-center gap-1">
<span className="iconify w-4 h-4" data-icon="lucide:plus" style={{strokeWidth: '1.5'}}></span>
              +30 бонус монети
            </div>
<button className="w-full py-2.5 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-all">
              Купи
            </button>
</div>

<div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
<h3 className="text-lg font-medium mb-1">Premium</h3>
<p className="text-slate-500 text-sm mb-4">Максимална стойност</p>
<div className="mb-6">
<span className="text-4xl font-semibold">50</span>
<span className="text-slate-400 ml-1">лв.</span>
</div>
<div className="flex items-center gap-2 mb-2 text-slate-300">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:coins" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">400 монети</span>
</div>
<div className="text-sm text-emerald-400 mb-6 flex items-center gap-1">
<span className="iconify w-4 h-4" data-icon="lucide:plus" style={{strokeWidth: '1.5'}}></span>
              +100 бонус монети
            </div>
<button className="w-full py-2.5 border border-slate-600 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">
              Купи
            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
<div className="bg-gradient-to-br from-pink-900/20 to-slate-900/50 border border-pink-800/30 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
<span className="iconify w-5 h-5 text-pink-400" data-icon="lucide:gift" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium">Gift a Reading</h3>
</div>
<p className="text-slate-400 text-sm font-light">Изпрати красив персонализиран DOCX на приятел за рожден ден. Само 10 монети.</p>
</div>
<div className="bg-gradient-to-br from-emerald-900/20 to-slate-900/50 border border-emerald-800/30 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium">Покани приятел</h3>
</div>
<p className="text-slate-400 text-sm font-light">Получаваш 10 безплатни монети, когато приятелят ти се регистрира.</p>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-16"></div>

<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Готов ли си да откриеш
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">своя космически път?</span>
</h2>
<p className="text-slate-400 font-light mb-8">
          Присъедини се към хилядите, които вече получават дълбоки прозрения всеки ден.
        </p>
<button className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-medium rounded-xl px-8 py-4 hover:bg-slate-100 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:rocket" style={{strokeWidth: '1.5'}}></span>
          Започни безплатно сега
        </button>
</div>
</div>
</div>

<footer className="relative z-10 border-t border-slate-800 mt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-medium">AstroMind</span>
</div>
<p className="text-slate-500 text-sm">© 2024 AstroMind. Дълбочина, не забавление.</p>
</div>
</div>
</footer>




    </>
  );
}
