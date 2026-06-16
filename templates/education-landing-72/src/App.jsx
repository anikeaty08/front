import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#FFFFFF',
foreground: '#262730',
accent: {
DEFAULT: '#4A90E2',
hover: '#357ABD',
light: '#EBF3FB'
},
muted: '#F4F5F7',
border: '#EAEAEA'
},
boxShadow: {
'soft': '0 4px 24px -6px rgba(0, 0, 0, 0.05)',
'float': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.to('.fade-in-up', {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "all"
          });

          const revealElements = document.querySelectorAll('.gsap-reveal');
          revealElements.forEach(el => {
              gsap.fromTo(el,
                  { y: 30, opacity: 0 },
                  {
                      y: 0, opacity: 1,
                      duration: 0.8,
                      ease: "power2.out",
                      scrollTrigger: {
                          trigger: el,
                          start: "top 85%",
                          toggleActions: "play none none reverse"
                      }
                  }
              );
          });

          const header = document.getElementById('header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  header.classList.add('shadow-soft');
                  header.classList.replace('bg-white/80', 'bg-white/95');
              } else {
                  header.classList.remove('shadow-soft');
                  header.classList.replace('bg-white/95', 'bg-white/80');
              }
          });

          const mythToggles = document.querySelectorAll('.myth-toggle');
          mythToggles.forEach(toggle => {
              toggle.addEventListener('click', () => {
                  const content = toggle.nextElementSibling;
                  const icon = toggle.querySelector('.icon-wrapper');
                  const isOpen = content.style.height && content.style.height !== '0px';

                  document.querySelectorAll('.myth-content').forEach(c => c.style.height = '0px');
                  document.querySelectorAll('.myth-toggle .icon-wrapper').forEach(i => i.style.transform = 'rotate(0deg)');

                  if (!isOpen) {
                      content.style.height = content.scrollHeight + 'px';
                      icon.style.transform = 'rotate(45deg)';
                  }
              });
          });

          const track = (eventName, payload = {}) => {
              try {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: eventName, ...payload });
              } catch (e) {}
          };

          const STORAGE_KEY = 'tryYourselfProgressV1';
          const defaultProgress = {
              task_01: { status: 'active', attempts: 0, completed: false },
              task_02: { status: 'locked', attempts: 0, completed: false },
              task_03: { status: 'locked', attempts: 0, completed: false },
              allComplete: false
          };

          const loadProgress = () => {
              try {
                  const raw = localStorage.getItem(STORAGE_KEY);
                  if (!raw) return structuredClone(defaultProgress);
                  const parsed = JSON.parse(raw);
                  return {
                      ...structuredClone(defaultProgress),
                      ...parsed,
                      task_01: { ...structuredClone(defaultProgress.task_01), ...(parsed.task_01 || {}) },
                      task_02: { ...structuredClone(defaultProgress.task_02), ...(parsed.task_02 || {}) },
                      task_03: { ...structuredClone(defaultProgress.task_03), ...(parsed.task_03 || {}) }
                  };
              } catch (e) {
                  return structuredClone(defaultProgress);
              }
          };

          const saveProgress = () => {
              try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
          };

          let state = loadProgress();

          const tasksProgressText = document.getElementById('tasks-progress-text');
          const tasksReward = document.getElementById('tasks-reward');
          const tasksFinalCta = document.getElementById('tasks-final-cta');
          const tasksApplyBtn = document.getElementById('tasks-apply-btn');
          const tasksRestartBtn = document.getElementById('tasks-restart');

          const statusLabel = (status) => {
              if (status === 'done') return 'Выполнено';
              if (status === 'active' || status === 'processing') return 'В процессе';
              return '';
          };

          const setProgressItem = (taskId, status) => {
              const li = document.querySelector(`#tasks-progress [data-task="${taskId}"]`);
              if (!li) return;
              li.setAttribute('data-status', status);

              li.classList.remove('bg-muted/40', 'bg-white', 'opacity-60', 'border-accent');
              li.classList.add('border', 'border-border');

              const badge = li.querySelector('[data-status-badge]');
              const iconWrap = li.querySelector('span.w-8');
              if (badge) badge.textContent = statusLabel(status);

              if (status === 'done') {
                  li.classList.add('bg-white');
                  li.classList.remove('opacity-60');
                  if (iconWrap) {
                      iconWrap.className = 'w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center';
                      iconWrap.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>';
                  }
              } else if (status === 'active' || status === 'processing') {
                  li.classList.add('bg-muted/40', 'border-accent');
                  li.classList.remove('opacity-60');
                  if (iconWrap) {
                      iconWrap.className = 'w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center';
                      iconWrap.innerHTML = '<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>';
                  }
              } else {
                  li.classList.add('bg-white', 'opacity-60');
                  if (iconWrap) {
                      iconWrap.className = 'w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center';
                      iconWrap.innerHTML = '<iconify-icon icon="solar:lock-keyhole-linear" width="18"></iconify-icon>';
                  }
              }
          };

          const setTaskCardStatus = (taskId, status) => {
              const cardById = document.getElementById(taskId === 'task_01' ? 'task-01' : (taskId === 'task_02' ? 'task-02' : 'task-03'));
              const el = cardById;
              if (!el) return;

              el.setAttribute('data-status', status);

              if (status === 'locked') {
                  el.classList.add('opacity-60');
                  el.setAttribute('aria-disabled', 'true');
              } else {
                  el.classList.remove('opacity-60');
                  el.removeAttribute('aria-disabled');
              }
          };

          const completedCount = () => ['task_01','task_02','task_03'].filter(t => state[t]?.completed).length;

          const updateRewards = () => {
              const count = completedCount();
              if (tasksProgressText) tasksProgressText.textContent = `${count}/3 выполнено`;

              if (tasksReward) {
                  if (count === 0) {
                      tasksReward.classList.add('hidden');
                      tasksReward.innerHTML = '';
                  } else {
                      tasksReward.classList.remove('hidden');
                      if (count === 1) tasksReward.innerHTML = '<span class="inline-flex items-center gap-2"><iconify-icon icon="solar:star-linear" class="text-accent"></iconify-icon> Вы начали путь математика!</span>';
                      if (count === 2) tasksReward.innerHTML = '<span class="inline-flex items-center gap-2"><iconify-icon icon="solar:stars-linear" class="text-accent"></iconify-icon> У вас аналитический склад ума!</span>';
                      if (count === 3) tasksReward.innerHTML = '<span class="inline-flex items-center gap-2"><iconify-icon icon="solar:medal-ribbon-star-linear" class="text-accent"></iconify-icon> Вы готовы к мехмату!</span>';
                  }
              }

              if (tasksFinalCta) {
                  if (count === 3) {
                      tasksFinalCta.classList.remove('hidden');
                      state.allComplete = true;
                      saveProgress();
                      track('all_tasks_complete', { block: 'try-yourself' });
                  } else {
                      tasksFinalCta.classList.add('hidden');
                      state.allComplete = false;
                      saveProgress();
                  }
              }
          };

          const unlockNext = () => {
              if (state.task_01.completed && state.task_02.status === 'locked') state.task_02.status = 'active';
              if (state.task_02.completed && state.task_03.status === 'locked') state.task_03.status = 'active';
          };

          const syncUI = () => {
              unlockNext();

              ['task_01','task_02','task_03'].forEach(t => {
                  const status = state[t].completed ? 'done' : state[t].status;
                  setProgressItem(t, status);
                  setTaskCardStatus(t, state[t].status);
              });

              const graphReset = document.getElementById('graph-reset');
              const optStart = document.getElementById('opt-start');
              const optRandom = document.getElementById('opt-random');
              const optReset = document.getElementById('opt-reset');

              if (graphReset) graphReset.disabled = state.task_02.status === 'locked';
              if (optStart) optStart.disabled = state.task_03.status === 'locked';
              if (optRandom) optRandom.disabled = state.task_03.status === 'locked';
              if (optReset) optReset.disabled = state.task_03.status === 'locked';

              updateRewards();
          };

          const resetTask01UI = () => {
              bayesStarted = false;
              if (bayesFeedback) bayesFeedback.innerHTML = '';
              if (bayesExplain) { bayesExplain.innerHTML = ''; bayesExplain.classList.add('hidden'); }
              bayesOptions.forEach(b => b.classList.remove('border-accent','bg-accent-light','border-red-400','bg-red-50'));
              const nextWrap = document.getElementById('task-01-next');
              if (nextWrap) nextWrap.classList.add('hidden');
          };

          const resetTask02UI = () => {
              graphPath = [];
              graphStarted = false;
              if (graphStatus) graphStatus.textContent = 'idle';
              if (graphFeedback) graphFeedback.innerHTML = '';
              if (graphReset) graphReset.disabled = state.task_02.status === 'locked';
              const nextWrap = document.getElementById('task-02-next');
              if (nextWrap) nextWrap.classList.add('hidden');
              renderGraph();
          };

          const resetTask03UI = (keepNewStart = true) => {
              opt.started = false;
              opt.moves = 0;
              opt.x = opt.startX;
              opt.y = opt.startY;
              if (optStatus) optStatus.textContent = 'idle';
              if (optFeedback) optFeedback.innerHTML = '';
              drawOpt();
              enableOptControls(false);
              enableAlways();
          };

          const fullRestart = (scrollToFirst = true) => {
              state = structuredClone(defaultProgress);
              saveProgress();

              resetTask01UI();
              resetTask02UI();
              resetTask03UI();

              syncUI();

              if (scrollToFirst) {
                  const el = document.getElementById('task-01');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          };

          if (tasksRestartBtn) {
              tasksRestartBtn.addEventListener('click', () => {
                  fullRestart(true);
                  track('tasks_restart');
              });
          }

          if (tasksApplyBtn) {
              tasksApplyBtn.addEventListener('click', () => track('apply_click', { source: 'try-yourself' }));
          }

          const errorMessage = (attempts, baseHint1, baseHint2, solutionHtml) => {
              if (attempts <= 1) return `<span class="text-gray-500">Подумайте ещё раз.</span>`;
              if (attempts === 2) return `<span class="text-gray-500">${baseHint1}</span>`;
              return `<span class="text-gray-500">${baseHint2} <button type="button" class="ml-2 inline-flex items-center gap-1 text-accent hover:underline" data-show-solution="true"><iconify-icon icon="solar:question-circle-linear"></iconify-icon> Показать решение</button></span><div class="hidden mt-3 rounded-2xl border border-border bg-muted/40 p-4" data-solution>${solutionHtml}</div>`;
          };

          const bayesOptions = document.querySelectorAll('#bayes-options button');
          const bayesFeedback = document.getElementById('bayes-feedback');
          const bayesExplain = document.getElementById('bayes-explain');

          const bayesSolutionHtml = `
            <div class="text-sm font-light text-gray-700">
              <div class="font-medium tracking-tight mb-2">Почему ответ ≈ 2% (теорема Байеса)</div>
              <p class="text-sm font-light text-gray-600">Из 1000 человек болен примерно 1. Тест с точностью 95% даст около 0.95 истинно положительных для больного. Но для 999 здоровых при 5% ложноположительных получим ≈ 49.95 ложноположительных. Среди всех положительных (≈ 50.9) доля реально больных: 0.95 / 50.9 ≈ 1.9%.</p>
            </div>`;

          const completeTask1 = () => {
              if (state.task_01.completed) return;
              state.task_01.completed = true;
              state.task_01.status = 'done';
              unlockNext();
              saveProgress();
              track('task_bayes_complete', { correct: true });
              syncUI();

              const nextWrap = document.getElementById('task-01-next');
              if (nextWrap) nextWrap.classList.remove('hidden');
          };

          let bayesStarted = false;

          bayesOptions.forEach(btn => {
              btn.addEventListener('click', () => {
                  if (state.task_01.status === 'locked' || state.task_01.completed) return;

                  if (!bayesStarted) {
                      bayesStarted = true;
                      track('task_bayes_start');
                      state.task_01.status = 'processing';
                      syncUI();
                  }

                  const isCorrect = btn.getAttribute('data-correct') === 'true';
                  bayesOptions.forEach(b => b.classList.remove('border-accent','bg-accent-light','border-red-400','bg-red-50'));

                  if (bayesExplain) bayesExplain.classList.add('hidden');

                  if (isCorrect) {
                      btn.classList.add('border-accent','bg-accent-light');
                      if (bayesFeedback) bayesFeedback.innerHTML = '<span class="text-accent inline-flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Верно! Это эффект базовой частоты — работает теорема Байеса.</span>';
                      if (bayesExplain) {
                          bayesExplain.innerHTML = bayesSolutionHtml;
                          bayesExplain.classList.remove('hidden');
                      }

                      setTimeout(() => {
                          completeTask1();
                          track('task_bayes_correct');
                      }, 250);
                  } else {
                      state.task_01.attempts += 1;
                      saveProgress();

                      btn.classList.add('border-red-400','bg-red-50');
                      const attempts = state.task_01.attempts;
                      const msg = errorMessage(
                          attempts,
                          'Обратите внимание на редкость болезни: 1 из 1000 — это очень мало.',
                          'Посчитайте среди всех «плюсов»: сколько истинных и сколько ложных?',
                          bayesSolutionHtml
                      );

                      if (bayesFeedback) bayesFeedback.innerHTML = msg;

                      const solBtn = bayesFeedback?.querySelector('[data-show-solution="true"]');
                      if (solBtn) {
                          solBtn.addEventListener('click', () => {
                              const sol = bayesFeedback.querySelector('[data-solution]');
                              if (sol) sol.classList.toggle('hidden');
                              if (bayesExplain) {
                                  bayesExplain.innerHTML = bayesSolutionHtml;
                                  bayesExplain.classList.remove('hidden');
                              }
                          }, { once: true });
                      }
                  }
              });
          });

          const graphSvg = document.getElementById('graph-svg');
          const graphStatus = document.getElementById('graph-status');
          const graphFeedback = document.getElementById('graph-feedback');
          const graphReset = document.getElementById('graph-reset');

          const graph = {
              nodes: {
                  A: { x: 70, y: 170 },
                  C: { x: 210, y: 90 },
                  D: { x: 220, y: 250 },
                  E: { x: 390, y: 170 },
                  B: { x: 540, y: 170 },
              },
              edges: [
                  { from: 'A', to: 'C', w: 7 },
                  { from: 'A', to: 'D', w: 4 },
                  { from: 'C', to: 'E', w: 4 },
                  { from: 'D', to: 'E', w: 9 },
                  { from: 'E', to: 'B', w: 3 },
                  { from: 'C', to: 'B', w: 12 },
                  { from: 'D', to: 'B', w: 11 },
              ]
          };

          const edgeKey = (u, v) => (u < v ? `${u}-${v}` : `${v}-${u}`);
          const edgeMap = new Map();
          graph.edges.forEach(e => edgeMap.set(edgeKey(e.from, e.to), e.w));

          const neighbors = (u) => {
              const n = [];
              graph.edges.forEach(e => {
                  if (e.from === u) n.push({ v: e.to, w: e.w });
                  else if (e.to === u) n.push({ v: e.from, w: e.w });
              });
              return n;
          };

          const dijkstra = (start) => {
              const dist = {};
              const prev = {};
              const Q = new Set(Object.keys(graph.nodes));
              Object.keys(graph.nodes).forEach(n => dist[n] = Infinity);
              dist[start] = 0;

              while (Q.size) {
                  let u = null;
                  let best = Infinity;
                  Q.forEach(n => { if (dist[n] < best) { best = dist[n]; u = n; } });
                  if (u === null) break;
                  Q.delete(u);

                  neighbors(u).forEach(({v, w}) => {
                      if (!Q.has(v)) return;
                      const alt = dist[u] + w;
                      if (alt < dist[v]) {
                          dist[v] = alt;
                          prev[v] = u;
                      }
                  });
              }
              return { dist, prev };
          };

          const bestPath = (() => {
              const { dist, prev } = dijkstra('A');
              const path = [];
              let cur = 'B';
              while (cur) {
                  path.push(cur);
                  cur = prev[cur];
              }
              path.reverse();
              return { path, time: dist['B'] };
          })();

          let graphPath = [];
          let graphStarted = false;

          const renderGraph = () => {
              if (!graphSvg) return;
              const active = state.task_02.status === 'active' || state.task_02.status === 'processing' || state.task_02.completed;

              const selectedEdges = new Set();
              for (let i = 0; i < graphPath.length - 1; i++) {
                  selectedEdges.add(edgeKey(graphPath[i], graphPath[i+1]));
              }

              let html = '';
              graph.edges.forEach(e => {
                  const p1 = graph.nodes[e.from];
                  const p2 = graph.nodes[e.to];
                  const key = edgeKey(e.from, e.to);
                  const isSelected = selectedEdges.has(key);
                  const isBest = (() => {
                      for (let i=0;i<bestPath.path.length-1;i++) {
                          if (edgeKey(bestPath.path[i], bestPath.path[i+1]) === key) return true;
                      }
                      return false;
                  })();

                  const stroke = isSelected ? '#262730' : '#EAEAEA';
                  const strokeW = isSelected ? 5 : 3;
                  const isOptimal = graphPath.join(',') === bestPath.path.join(',');
                  const bestOverlay = (isOptimal && isBest)
                    ? `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#22C55E" stroke-width="6" stroke-linecap="round" opacity="0.85"></line>`
                    : '';

                  html += `
                    <g>
                      <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#EAEAEA" stroke-width="8" stroke-linecap="round" opacity="0.55"></line>
                      ${bestOverlay}
                      <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${stroke}" stroke-width="${strokeW}" stroke-linecap="round" data-edge="${key}" />
                      <text x="${(p1.x+p2.x)/2}" y="${(p1.y+p2.y)/2 - 8}" font-size="12" fill="#6B7280" font-family="JetBrains Mono, monospace">${e.w} мин</text>
                    </g>
                  `;
              });

              Object.entries(graph.nodes).forEach(([id, p]) => {
                  const isInPath = graphPath.includes(id);
                  const isCurrent = graphPath.length && graphPath[graphPath.length - 1] === id;
                  const fill = isCurrent ? '#4A90E2' : (isInPath ? '#262730' : '#FFFFFF');
                  const stroke = isCurrent ? '#4A90E2' : '#EAEAEA';
                  const textFill = isCurrent || isInPath ? '#FFFFFF' : '#262730';

                  const tabIndex = active ? 0 : -1;
                  html += `
                    <g>
                      <circle cx="${p.x}" cy="${p.y}" r="20" fill="${fill}" stroke="${stroke}" stroke-width="2" data-node="${id}" tabindex="${tabIndex}" role="button" aria-label="Узел ${id}"></circle>
                      <text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-size="14" fill="${textFill}" font-family="Manrope, sans-serif" font-weight="600">${id}</text>
                    </g>
                  `;
              });

              graphSvg.innerHTML = html;

              graphSvg.querySelectorAll('[data-node]').forEach(nodeEl => {
                  nodeEl.style.cursor = active ? 'pointer' : 'not-allowed';

                  nodeEl.addEventListener('click', () => {
                      if (state.task_02.status === 'locked') return;

                      const node = nodeEl.getAttribute('data-node');
                      if (!graphStarted) {
                          graphStarted = true;
                          track('task_graph_start');
                          state.task_02.status = 'processing';
                          saveProgress();
                          syncUI();
                      }

                      if (graphPath.length === 0) {
                          if (node !== 'A') {
                              if (graphFeedback) graphFeedback.innerHTML = '<span class="text-gray-500">Начните с точки A.</span>';
                              return;
                          }
                          graphPath = ['A'];
                          if (graphStatus) graphStatus.textContent = 'selecting';
                          if (graphReset) graphReset.disabled = false;
                          renderGraph();
                          return;
                      }

                      const last = graphPath[graphPath.length - 1];
                      if (node === last) return;

                      if (graphPath.length > 1 && node === graphPath[graphPath.length - 2]) {
                          graphPath.pop();
                          renderGraph();
                          return;
                      }

                      const w = edgeMap.get(edgeKey(last, node));
                      if (typeof w !== 'number') {
                          if (graphFeedback) graphFeedback.innerHTML = '<span class="text-gray-500">Такой дороги нет — выберите соседний узел.</span>';
                          return;
                      }

                      graphPath.push(node);
                      renderGraph();

                      if (node === 'B') {
                          if (graphStatus) graphStatus.textContent = 'validating';
                          let time = 0;
                          for (let i=0;i<graphPath.length-1;i++) time += edgeMap.get(edgeKey(graphPath[i], graphPath[i+1]));

                          const optimal = time === bestPath.time;
                          if (optimal) {
                              state.task_02.completed = true;
                              state.task_02.status = 'done';
                              saveProgress();
                              if (graphFeedback) graphFeedback.innerHTML = '<span class="text-accent inline-flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Идеально! Так работают алгоритмы навигаторов.</span>';
                              if (graphStatus) graphStatus.textContent = 'success';

                              const nextWrap = document.getElementById('task-02-next');
                              if (nextWrap) nextWrap.classList.remove('hidden');

                              unlockNext();
                              saveProgress();
                              syncUI();
                              renderGraph();
                              track('task_graph_complete', { correct: true });
                          } else {
                              state.task_02.attempts += 1;
                              saveProgress();

                              const diff = time - bestPath.time;
                              const attempts = state.task_02.attempts;

                              const solutionHtml = `<div class="text-sm font-light text-gray-700"><div class="font-medium tracking-tight mb-2">Оптимальный маршрут</div><div class="text-sm font-light text-gray-600">${bestPath.path.join(' → ')} (время: ${bestPath.time} мин). Это проверяется алгоритмом Дейкстры.</div></div>`;

                              if (attempts < 3) {
                                  if (graphFeedback) graphFeedback.innerHTML = `<span class="text-gray-500">Маршрут работает, но вы потеряли ${diff} минут${diff === 1 ? 'у' : ''}!</span>`;
                              } else {
                                  if (graphFeedback) graphFeedback.innerHTML = errorMessage(
                                      attempts,
                                      'Обратите внимание на суммы весов на рёбрах: иногда два коротких ребра лучше одного длинного.',
                                      'Сравните ваш путь с кратчайшим.',
                                      solutionHtml
                                  );
                                  const solBtn = graphFeedback?.querySelector('[data-show-solution="true"]');
                                  if (solBtn) {
                                      solBtn.addEventListener('click', () => {
                                          const sol = graphFeedback.querySelector('[data-solution]');
                                          if (sol) sol.classList.toggle('hidden');
                                      }, { once: true });
                                  }
                              }

                              if (graphStatus) graphStatus.textContent = 'error';
                          }
                      }
                  });

                  nodeEl.addEventListener('keydown', (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          nodeEl.click();
                      }
                  });
              });

              graphSvg.querySelectorAll('[data-edge]').forEach(edgeEl => {
                  edgeEl.addEventListener('mouseenter', () => {
                      if (state.task_02.status === 'locked') return;
                      edgeEl.setAttribute('stroke', '#4A90E2');
                      edgeEl.setAttribute('stroke-width', '5');
                  });
                  edgeEl.addEventListener('mouseleave', () => {
                      renderGraph();
                  });
              });
          };

          if (graphReset) {
              graphReset.addEventListener('click', () => {
                  if (state.task_02.status === 'locked') return;
                  graphPath = [];
                  graphStarted = false;
                  if (graphStatus) graphStatus.textContent = 'idle';
                  if (graphFeedback) graphFeedback.innerHTML = '';
                  graphReset.disabled = state.task_02.status === 'locked';
                  renderGraph();
              });
          }

          renderGraph();

          const optCanvas = document.getElementById('opt-canvas');
          const optStart = document.getElementById('opt-start');
          const optReset = document.getElementById('opt-reset');
          const optFeedback = document.getElementById('opt-feedback');
          const optStatus = document.getElementById('opt-status');

          const optButtons = {
              up: document.getElementById('opt-up'),
              down: document.getElementById('opt-down'),
              left: document.getElementById('opt-left'),
              right: document.getElementById('opt-right'),
          };

          const opt = {
              maxMoves: 10,
              started: false,
              moves: 0,
              x: 3,
              y: 3,
              startX: 3,
              startY: 3,
              targetX: 0,
              targetY: 0,
              bestSteps: 6
          };

          const enableOptControls = (enabled) => {
              Object.values(optButtons).forEach(b => { if (b) b.disabled = !enabled; });
          };

          const enableAlways = () => {
              if (optReset) optReset.disabled = state.task_03.status === 'locked';
              const optRandom = document.getElementById('opt-random');
              if (optRandom) optRandom.disabled = state.task_03.status === 'locked';
          };

          const drawOpt = () => {
              if (!optCanvas) return;
              const ctx = optCanvas.getContext('2d');
              const W = optCanvas.width;
              const H = optCanvas.height;
              ctx.clearRect(0,0,W,H);

              ctx.fillStyle = '#F4F5F7';
              ctx.fillRect(0,0,W,H);

              const toPx = (x, y) => {
                  const px = ((x + 4) / 8) * W;
                  const py = ((4 - y) / 8) * H;
                  return { px, py };
              };

              const cellW = W / 8;
              const cellH = H / 8;

              ctx.strokeStyle = '#EAEAEA';
              ctx.lineWidth = 1;
              for(let i=0; i<=8; i++) {
                  ctx.beginPath();
                  ctx.moveTo(i*cellW, 0);
                  ctx.lineTo(i*cellW, H);
                  ctx.stroke();

                  ctx.beginPath();
                  ctx.moveTo(0, i*cellH);
                  ctx.lineTo(W, i*cellH);
                  ctx.stroke();
              }

              const tPos = toPx(opt.targetX, opt.targetY);
              ctx.fillStyle = 'rgba(74, 144, 226, 0.15)';
              ctx.fillRect(tPos.px - cellW/2, tPos.py - cellH/2, cellW, cellH);

              ctx.beginPath();
              ctx.arc(tPos.px, tPos.py, 10, 0, Math.PI*2);
              ctx.strokeStyle = '#4A90E2';
              ctx.lineWidth = 3;
              ctx.stroke();

              const bPos = toPx(opt.x, opt.y);
              ctx.beginPath();
              ctx.arc(bPos.px, bPos.py, 10, 0, Math.PI*2);
              ctx.fillStyle = '#262730';
              ctx.fill();
              ctx.strokeStyle = '#FFFFFF';
              ctx.lineWidth = 2;
              ctx.stroke();

              const optAria = document.getElementById('opt-aria');
              if (optAria) {
                  optAria.textContent = `Стартовая точка: x=${opt.startX}, y=${opt.startY}. Текущая: x=${opt.x}, y=${opt.y}`;
              }
          };

          const optFinish = (success) => {
              enableOptControls(false);
              if (optStatus) optStatus.textContent = success ? 'success' : 'retry';

              if (success) {
                  if (optFeedback) optFeedback.innerHTML = '<span class="text-accent inline-flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Отлично! Вы нашли глобальный минимум! Это и есть градиентный спуск.</span>';
              } else {
                  state.task_03.attempts += 1;
                  saveProgress();

                  const attempts = state.task_03.attempts;
                  const solutionHtml = `<div class="text-sm font-light text-gray-700"><div class="font-medium tracking-tight mb-2">Идея решения</div><div class="text-sm font-light text-gray-600">Двигайтесь туда, где значение функции уменьшается быстрее. В терминах ИИ это «идти по уклону» (градиентный спуск).</div></div>`;

                  if (attempts < 3) {
                      if (optFeedback) optFeedback.innerHTML = '<span class="text-gray-500">Попробуйте другой путь.</span>';
                  } else {
                      if (optFeedback) optFeedback.innerHTML = errorMessage(
                          attempts,
                          'Обратите внимание: к цели (0,0) обычно ведёт движение к уменьшению |x| и |y|.',
                          'Сфокусируйтесь на направлении, где «высота» уменьшается.',
                          solutionHtml
                      );
                      const solBtn = optFeedback?.querySelector('[data-show-solution="true"]');
                      if (solBtn) {
                          solBtn.addEventListener('click', () => {
                              const sol = optFeedback.querySelector('[data-solution]');
                              if (sol) sol.classList.toggle('hidden');
                          }, { once: true });
                      }
                  }
              }
          };

          const optMaybeComplete = () => {
              if (opt.x === opt.targetX && opt.y === opt.targetY) {
                  optFinish(true);
                  if (!state.task_03.completed) {
                      state.task_03.completed = true;
                      state.task_03.status = 'done';
                      saveProgress();
                      syncUI();
                      track('task_optimization_complete', { success: true, moves: opt.moves });
                  }
                  return true;
              }
              if (opt.moves >= opt.maxMoves) {
                  optFinish(false);
                  track('task_optimization_complete', { success: false, moves: opt.moves });
                  return true;
              }
              return false;
          };

          const optMove = (dir) => {
              if (state.task_03.status === 'locked') return;
              if (!opt.started) return;

              const prev = { x: opt.x, y: opt.y };
              if (dir === 'up') opt.y += 1;
              if (dir === 'down') opt.y -= 1;
              if (dir === 'left') opt.x -= 1;
              if (dir === 'right') opt.x += 1;

              opt.x = Math.max(-4, Math.min(4, opt.x));
              opt.y = Math.max(-4, Math.min(4, opt.y));

              if (opt.x === prev.x && opt.y === prev.y) return;

              opt.moves += 1;
              if (optStatus) optStatus.textContent = 'moving';
              if (optFeedback) optFeedback.innerHTML = '';

              drawOpt();
              track('task_optimization_moves', { moves: opt.moves, x: opt.x, y: opt.y });
              optMaybeComplete();
          };

          const optRandom = document.getElementById('opt-random');

          if (optStart) {
              optStart.addEventListener('click', () => {
                  if (state.task_03.status === 'locked') return;
                  opt.started = true;
                  opt.moves = 0;
                  opt.x = opt.startX;
                  opt.y = opt.startY;
                  if (optStatus) optStatus.textContent = 'idle';
                  enableOptControls(true);
                  enableAlways();
                  drawOpt();
                  track('task_optimization_start');
                  state.task_03.status = 'processing';
                  saveProgress();
                  syncUI();
              });
          }

          if (optReset) {
              optReset.addEventListener('click', () => {
                  if (state.task_03.status === 'locked') return;
                  opt.x = opt.startX;
                  opt.y = opt.startY;
                  opt.moves = 0;
                  if (optFeedback) optFeedback.innerHTML = '';
                  if (optStatus) optStatus.textContent = 'idle';
                  if (opt.started) enableOptControls(true);
                  else enableOptControls(false);
                  enableAlways();
                  drawOpt();
              });
          }

          if (optRandom) {
              optRandom.addEventListener('click', () => {
                  if (state.task_03.status === 'locked') return;
                  let rx, ry;
                  do {
                      rx = Math.floor(Math.random() * 9) - 4;
                      ry = Math.floor(Math.random() * 9) - 4;
                  } while (rx === 0 && ry === 0);
                  opt.startX = rx;
                  opt.startY = ry;
                  opt.x = rx;
                  opt.y = ry;
                  opt.moves = 0;
                  opt.bestSteps = Math.abs(rx) + Math.abs(ry);
                  opt.maxMoves = opt.bestSteps + 4;
                  opt.started = false;
                  enableOptControls(false);
                  enableAlways();
                  if (optStatus) optStatus.textContent = 'idle';
                  if (optFeedback) optFeedback.innerHTML = '';
                  drawOpt();
              });
          }

          Object.entries(optButtons).forEach(([dir, btn]) => {
              if (!btn) return;
              btn.addEventListener('click', () => optMove(dir));
          });

          document.addEventListener('keydown', (e) => {
              if (state.task_03.status === 'locked') return;
              if (!opt.started) return;
              if (e.key === 'ArrowUp') optMove('up');
              if (e.key === 'ArrowDown') optMove('down');
              if (e.key === 'ArrowLeft') optMove('left');
              if (e.key === 'ArrowRight') optMove('right');
          });

          drawOpt();
          enableOptControls(false);
          enableAlways();

          const task01Next = document.getElementById('task-01-next-btn');
          const task02Next = document.getElementById('task-02-next-btn');

          if (task01Next) {
              task01Next.addEventListener('click', () => {
                  if (state.task_02.status === 'locked') return;
                  const el = document.getElementById('task-02');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
          }

          if (task02Next) {
              task02Next.addEventListener('click', () => {
                  if (state.task_03.status === 'locked') return;
                  const el = document.getElementById('task-03');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              });
          }

          const swiper = new Swiper('.stories-swiper', {
              slidesPerView: 'auto',
              spaceBetween: 24,
              grabCursor: true,
              navigation: {
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
              },
              breakpoints: {
                  320: { spaceBetween: 16 },
                  768: { spaceBetween: 24 }
              }
          });

          const form = document.getElementById('lead-form');
          const btnLoader = document.getElementById('btn-loader');
          const successState = document.getElementById('success-state');

          const phoneInput = document.getElementById('phone');
          phoneInput.addEventListener('input', function (e) {
              let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
              if (!x[1]) return;
              let isRussian = x[1] === '7' || x[1] === '8';
              if(isRussian) {
                  e.target.value = '+7' + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
              }
          });

          form.addEventListener('submit', (e) => {
              e.preventDefault();
              btnLoader.classList.remove('hidden');

              const formData = {
                  name: document.getElementById('name').value,
                  phone: document.getElementById('phone').value,
                  email: document.getElementById('email').value,
                  consent: document.getElementById('consent').checked
              };

              setTimeout(() => {
                  btnLoader.classList.add('hidden');

                  if(Math.random() < 0.1) {
                      alert('Ошибка сети. Данные сохранены локально, попробуйте позже.');
                      localStorage.setItem('pendingLead', JSON.stringify(formData));
                      return;
                  }

                  form.classList.add('hidden');
                  successState.classList.remove('hidden');
                  gsap.fromTo(successState, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.5});

              }, 1500);
          });

          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenuBtn && mobileMenu) {
              mobileMenuBtn.addEventListener('click', () => {
                  const isOpen = !mobileMenu.classList.contains('hidden');
                  mobileMenu.classList.toggle('hidden');
                  mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
              });
              mobileMenu.querySelectorAll('a[href^="#"]').forEach(a => {
                  a.addEventListener('click', () => {
                      mobileMenu.classList.add('hidden');
                      mobileMenuBtn.setAttribute('aria-expanded', 'false');
                  });
              });
          }

          const a11yToggle = document.getElementById('a11y-toggle');
          const a11yToggleDesktop = document.getElementById('a11y-toggle-desktop');
          const bindA11yToggle = (btn) => {
              if (!btn) return;
              const applyA11y = (on) => {
                  document.body.classList.toggle('a11y-vision', on);
                  btn.setAttribute('aria-pressed', String(on));
                  if (a11yToggle && a11yToggle !== btn) a11yToggle.setAttribute('aria-pressed', String(on));
                  if (a11yToggleDesktop && a11yToggleDesktop !== btn) a11yToggleDesktop.setAttribute('aria-pressed', String(on));
                  try { localStorage.setItem('a11yVision', on ? '1' : '0'); } catch(e) {}
              };
              btn.addEventListener('click', () => {
                  const on = !document.body.classList.contains('a11y-vision');
                  applyA11y(on);
                  track('a11y_toggle', { on });
              });
              return applyA11y;
          };

          const applyFromAny = (on) => {
              document.body.classList.toggle('a11y-vision', on);
              if (a11yToggle) a11yToggle.setAttribute('aria-pressed', String(on));
              if (a11yToggleDesktop) a11yToggleDesktop.setAttribute('aria-pressed', String(on));
              try { localStorage.setItem('a11yVision', on ? '1' : '0'); } catch(e) {}
          };

          if (a11yToggle || a11yToggleDesktop) {
              bindA11yToggle(a11yToggle);
              bindA11yToggle(a11yToggleDesktop);
              let initial = false;
              try { initial = localStorage.getItem('a11yVision') === '1'; } catch(e) {}
              applyFromAny(initial);
          }

          syncUI();
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        if (window.particlesJS) {
          particlesJS('particles-js', {
            "particles": {
              "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
              "color": { "value": "#4A90E2" },
              "shape": { "type": "circle" },
              "opacity": { "value": 0.85, "random": false },
              "size": { "value": 4, "random": true },
              "line_linked": { "enable": true, "distance": 150, "color": "#4A90E2", "opacity": 0.6, "width": 1.5 },
              "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
            },
            "retina_detect": true
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-border transition-all duration-300" id="header">
<div className="md:px-16 flex h-16 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group hover:opacity-80 transition-opacity" href="#">
<div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full overflow-hidden bg-white">
<img alt="Логотип" className="w-full h-full max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4afb87c3-37b2-4115-aefd-f1f5563cbc8b_320w.jpg"/>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-foreground transition-colors" href="#myths">
            Мифы
          </a>
<a className="hover:text-foreground transition-colors" href="#try-yourself">
            Интерактив
          </a>
<a className="hover:text-foreground transition-colors" href="#stories">
            Истории
          </a>
<a className="hover:text-foreground transition-colors" href="#career">
            Карьера
          </a>
</nav>
<button aria-expanded="false" aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white hover:bg-muted transition-colors" id="mobile-menu-btn" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
<div className="md:hidden hidden absolute left-0 right-0 top-16 bg-white/95 backdrop-blur-md border-b border-border p-4" id="mobile-menu">
<button aria-pressed="false" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white hover:bg-muted transition-colors font-mono text-sm font-medium text-foreground" id="a11y-toggle" title="Версия для слабовидящих" type="button">
            A+
          </button>
<div className="px-6 py-4 flex flex-col gap-2 text-sm font-medium text-gray-600">
<a className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors" href="#myths">
              Мифы
            </a>
<a className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors" href="#try-yourself">
              Интерактив
            </a>
<a className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors" href="#stories">
              Истории
            </a>
<a className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors" href="#career">
              Карьера
            </a>
</div>
</div>
<div className="hidden md:flex items-center gap-2 md:gap-3 shrink-0">
<button aria-pressed="false" className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white hover:bg-muted transition-colors font-mono text-sm font-medium text-foreground" id="a11y-toggle-desktop" title="Версия для слабовидящих" type="button">
<span className="font-mono">A+</span>
</button>
<a className="hidden md:inline-flex items-center justify-center px-3 md:px-3.5 py-2 text-sm font-medium text-foreground bg-muted border border-border rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap leading-tight text-center" href="https://www.sgu.ru/struktura/mechmath" target="_blank">
            Сайт СГУ
          </a>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0077FF] rounded-full hover:bg-[#0066CC] transition-colors whitespace-nowrap leading-tight text-center gap-1.5" href="#apply">
<iconify-icon icon="mdi:vk" width="18"></iconify-icon>
            ВКонтакте
          </a>
</div>
</div>
</header>
<main className="overflow-hidden">
<section className="min-h-[100svh] flex md:px-16 pt-16 pr-6 pl-6 relative items-center justify-center">
<div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none z-0" id="hero-grid"></div>
<div className="absolute inset-0 z-0 pointer-events-none opacity-100" id="particles-js">
<canvas className="particles-js-canvas-el" height="862" style={{width: '100%', height: '100%'}} width="1341"></canvas>
</div>
<div className="z-10 flex flex-col text-center max-w-4xl mr-auto ml-auto relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-muted border border-border text-xs font-mono font-medium text-gray-600 uppercase tracking-tight fade-in-up">
<iconify-icon className="text-accent" icon="solar:bolt-linear"></iconify-icon>
            Приёмная кампания 2026
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-6 fade-in-up" style={{animationDelay: '0.1s'}}>
            Математика —
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
              твоя суперсила
            </span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light mb-10 fade-in-up" style={{animationDelay: '0.2s'}}>
            Забудь про зубрежку формул. Здесь мы учим видеть закономерности,
            управлять данными и создавать технологии будущего. Попробуй сам, это
            не так страшно, как кажется.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-soft hover:shadow-float flex items-center justify-center gap-2 group" href="#try-yourself">
              Попробовать
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-full hover:bg-muted transition-colors flex items-center justify-center" href="#myths">
              Развеять мифы
            </a>
</div>
</div>
<div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
<iconify-icon height="24" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>
<section className="md:px-16 pt-24 pr-6 pb-24 pl-6" id="myths">
<div className="max-w-[1440px] mx-auto">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Сломаем стереотипы
              </h2>
<div className="lg:block p-6 bg-white border border-border rounded-2xl shadow-soft">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight">62%</div>
<div className="text-xs text-gray-500 font-mono">
                      Данные ВЦИОМ, 2025
                    </div>
</div>
</div>
<p className="text-sm font-light">
                  Считают математику сложной до того, как пробуют её применять
                  на реальных задачах.
                </p>
</div>
</div>
<div className="space-y-4" id="accordion">
<div className="myth-card bg-white border border-border rounded-2xl overflow-hidden gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none myth-toggle">
<span className="text-base font-medium tracking-tight">
                    Математика только для гениев
                  </span>
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-400 transition-transform duration-300 icon-wrapper">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="myth-content h-0 overflow-hidden transition-all duration-300">
<div className="px-6 pb-6 pt-0 text-sm font-light text-gray-500 border-t border-transparent">
                    Это миф. Успех на мехмате на 80% зависит от
                    последовательности и умения задавать вопросы, а не от
                    врождённого таланта. Программа построена так, чтобы
                    постепенно вводить в сложные темы.
                  </div>
</div>
</div>
<div className="myth-card bg-white border border-border rounded-2xl overflow-hidden gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none myth-toggle">
<span className="text-base font-medium tracking-tight">
                    Это сплошная зубрежка формул
                  </span>
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-gray-400 transition-transform duration-300 icon-wrapper">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="myth-content h-0 overflow-hidden transition-all duration-300">
<div className="px-6 pb-6 pt-0 text-sm font-light text-gray-500 border-t border-transparent">
                    В отличие от школы, здесь не нужно заучивать. Важно понимать
                    логику.
                  </div>
</div>
</div>
<div className="myth-card border-border overflow-hidden gsap-reveal bg-white border rounded-2xl" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none myth-toggle">
<span className="text-base font-medium tracking-tight">
                    После выпуска стану только учителем
                  </span>
<div className="border-border flex transition-transform duration-300 icon-wrapper text-gray-400 w-8 h-8 border rounded-full items-center justify-center">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="myth-content h-0 overflow-hidden transition-all duration-300">
<div className="px-6 pb-6 pt-0 text-sm font-light text-gray-500 border-t border-transparent">
                    Наши выпускники работают Data Scientist'ами, аналитиками, а
                    также разработчиками, специалистами по компьютерной
                    безопасности и т.д. Математика — это язык алгоритмов.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-16 bg-white border-b border-border" id="try-yourself">
<div className="max-w-[1440px] mx-auto text-center mb-16 gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Попробуй решить за 2 минуты
          </h2>
<p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
            Три короткие задачи — и ты почувствуешь, как работает математика в
            медицине, навигации и ИИ. Прогресс сохраняется, можно вернуться
            позже.
          </p>
</div>
<div aria-label="Интерактивные задачи" className="max-w-4xl mx-auto space-y-8" id="tasks-container">

<div aria-label="Прогресс" className="bg-white border border-border p-5 md:p-6 rounded-3xl shadow-soft" style={{position: 'relative', top: 'auto', zIndex: '10', backdropFilter: 'none', backgroundColor: '#ffffff'}}>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-medium tracking-tight">Прогресс</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-foreground bg-white border border-border rounded-full hover:bg-muted transition-colors focus:outline-none" id="tasks-restart" type="button">
<iconify-icon icon="solar:restart-linear"></iconify-icon>
                    Начать заново
                  </button>
<div className="text-xs font-mono text-gray-400" id="tasks-progress-text">
                    3/3 выполнено
                  </div>
</div>
</div>
<ol className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="tasks-progress" role="list">
<li className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border bg-white" data-status="done" data-task="task_01">
<div className="flex items-center gap-3">
<span aria-hidden="true" className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight">
                        Задача 1
                      </div>
<div className="text-[11px] font-mono text-gray-400">
                        Байес
                      </div>
</div>
</div>
<span className="text-xs font-mono text-gray-400" data-status-badge="">
                    Выполнено
                  </span>
</li>
<li aria-disabled="true" className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border bg-white" data-status="done" data-task="task_02">
<div className="flex items-center gap-3">
<span aria-hidden="true" className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight">
                        Задача 2
                      </div>
<div className="text-[11px] font-mono text-gray-400">
                        Графы
                      </div>
</div>
</div>
<span className="text-xs font-mono text-gray-400" data-status-badge="">
                    Выполнено
                  </span>
</li>
<li aria-disabled="true" className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border bg-white" data-status="done" data-task="task_03">
<div className="flex items-center gap-3">
<span aria-hidden="true" className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium tracking-tight">
                        Задача 3
                      </div>
<div className="text-[11px] font-mono text-gray-400">
                        Оптимизация
                      </div>
</div>
</div>
<span className="text-xs font-mono text-gray-400" data-status-badge="">
                    Выполнено
                  </span>
</li>
</ol>
<div className="mt-1 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-light text-gray-600" id="tasks-reward">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:medal-ribbon-star-linear"></iconify-icon>
                  Вы готовы к мехмату!
                </span>
</div>
</div>
</div>

<div className="bg-white border border-border p-6 md:p-10 rounded-3xl shadow-soft gsap-reveal relative overflow-hidden" data-status="done" data-task="task_01" id="task-01" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity">
<iconify-icon icon="solar:heart-pulse-2-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-mono font-medium text-accent bg-accent-light px-2 py-1 rounded">
                  Задача 01
                </span>
<span className="text-sm text-gray-400">
                  Парадокс медицинского теста
                </span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">
                Вы — главный врач
              </h3>
<p className="text-sm font-light text-gray-500 mb-6 max-w-2xl">
                Появился новый тест на редкое заболевание.
              </p>
<div className="grid md:grid-cols-3 gap-3 mb-6">
<div className="rounded-2xl border border-border bg-muted/40 p-4">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                    Распространённость
                  </div>
<div className="text-sm font-medium tracking-tight">
                    1 из 1000 (0.1%)
                  </div>
</div>
<div className="rounded-2xl border border-border bg-muted/40 p-4">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                    Точность теста
                  </div>
<div className="text-sm font-medium tracking-tight">95%</div>
</div>
<div className="rounded-2xl border border-border bg-muted/40 p-4">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                    Результат
                  </div>
<div className="text-sm font-medium tracking-tight">
                    Положительный (+)
                  </div>
</div>
</div>
<div className="rounded-2xl border border-border bg-white p-4 md:p-5 mb-6">
<div className="text-sm font-medium tracking-tight mb-2">
                  Вопрос
                </div>
<p className="text-sm font-light text-gray-600">
                  Какова вероятность, что пациент действительно болен?
                </p>
</div>
<div aria-label="Варианты ответа" className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="bayes-options" role="group">
<button className="px-5 py-4 border border-border rounded-2xl text-left hover:border-accent hover:bg-accent-light transition-all focus:outline-none" data-choice="A" data-correct="false">
<div className="text-sm font-medium tracking-tight">A) ~95%</div>
<div className="text-xs text-gray-400 font-light">
                    Интуитивно: тест же точный
                  </div>
</button>
<button className="px-5 py-4 border border-border rounded-2xl text-left hover:border-accent hover:bg-accent-light transition-all focus:outline-none" data-choice="B" data-correct="false">
<div className="text-sm font-medium tracking-tight">Б) ~50%</div>
<div className="text-xs text-gray-400 font-light">
                    Кажется «пополам»
                  </div>
</button>
<button className="px-5 py-4 border border-border rounded-2xl text-left hover:border-accent hover:bg-accent-light transition-all focus:outline-none" data-choice="C" data-correct="true">
<div className="text-sm font-medium tracking-tight">В) ~2%</div>
<div className="text-xs text-gray-400 font-light">
                    Редкая болезнь ломает интуицию
                  </div>
</button>
</div>
<div className="mt-4">
<div className="min-h-6 text-sm font-medium transition-all" id="bayes-feedback"></div>
<div className="hidden mt-3 text-sm font-light text-gray-600 rounded-2xl border border-border bg-muted/40 p-4" id="bayes-explain"></div>
<div className="hidden mt-6" id="task-01-next">
<button className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-accent rounded-2xl hover:bg-accent-hover transition-colors shadow-soft focus:outline-none" id="task-01-next-btn" type="button">
                    Перейти к задаче 2
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="mt-6 rounded-2xl border border-border bg-white p-4 md:p-5">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-2">
                  Связь с учебной программой
                </div>
<p className="text-sm font-light text-gray-600">
                  На 2 курсе вы изучите Теорию вероятностей и матстатистику. Эти
                  знания нужны не только врачам, но и специалистам Data Science
                  для обучения нейросетей.
                </p>
</div>
</div>
</div>

<div className="bg-white border border-border p-6 md:p-10 rounded-3xl shadow-soft gsap-reveal relative overflow-hidden" data-status="done" data-task="task_02" id="task-02" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity">
<iconify-icon icon="solar:map-point-wave-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-mono font-medium text-accent bg-accent-light px-2 py-1 rounded">
                  Задача 02
                </span>
<span className="text-sm text-gray-400">Кратчайший путь</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">
                Вы — навигатор
              </h3>
<p className="text-sm font-light text-gray-500 mb-6 max-w-2xl">
                Постройте маршрут из A в B с минимальным временем.
              </p>
<div className="rounded-2xl border border-border bg-white p-4 md:p-5 mb-6">
<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="text-sm font-medium tracking-tight">
                    Интерактивная карта
                  </div>
<div className="flex items-center gap-2">
<div className="text-xs text-gray-400 font-mono"></div>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-foreground bg-white border border-border rounded-full hover:bg-muted transition-colors focus:outline-none" id="graph-reset" type="button">
<iconify-icon className="" icon="solar:restart-linear"></iconify-icon>
                      Сбросить
                    </button>
</div>
</div>
<div className="mt-4 rounded-2xl border border-border bg-muted/40 p-3 overflow-hidden">
<svg className="w-full" id="graph-svg" style={{height: '380px'}} viewbox="0 0 600 340">
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="70" x2="210" y1="170" y2="90"></line>
<line data-edge="A-C" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="70" x2="210" y1="170" y2="90"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="140" y="122">
                        7 мин
                      </text>
</g>
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="70" x2="220" y1="170" y2="250"></line>
<line data-edge="A-D" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="70" x2="220" y1="170" y2="250"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="145" y="202">
                        4 мин
                      </text>
</g>
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="210" x2="390" y1="90" y2="170"></line>
<line data-edge="C-E" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="210" x2="390" y1="90" y2="170"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="300" y="122">
                        4 мин
                      </text>
</g>
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="220" x2="390" y1="250" y2="170"></line>
<line data-edge="D-E" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="220" x2="390" y1="250" y2="170"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="305" y="202">
                        9 мин
                      </text>
</g>
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="390" x2="540" y1="170" y2="170"></line>
<line data-edge="B-E" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="390" x2="540" y1="170" y2="170"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="465" y="162">
                        3 мин
                      </text>
</g>
<g>
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="210" x2="540" y1="90" y2="170"></line>
<line data-edge="B-C" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="210" x2="540" y1="90" y2="170"></line>
<text fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="375" y="122">
                        12 мин
                      </text>
</g>
<g className="">
<line opacity="0.55" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="8" x1="220" x2="540" y1="250" y2="170"></line>
<line data-edge="B-D" stroke="#EAEAEA" strokeLinecap="round" strokeWidth="3" x1="220" x2="540" y1="250" y2="170"></line>
<text className="" fill="#6B7280" fontFamily="JetBrains Mono, monospace" fontSize="12" x="380" y="202">
                        11 мин
                      </text>
</g>
<g>
<circle aria-label="Узел A" cx="70" cy="170" data-node="A" fill="#FFFFFF" r="20" role="button" stroke="#EAEAEA" strokeWidth="2" style={{cursor: 'pointer'}} tabindex="0"></circle>
<text fill="#262730" fontFamily="Manrope, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="70" y="175">
                        A
                      </text>
</g>
<g>
<circle aria-label="Узел C" cx="210" cy="90" data-node="C" fill="#FFFFFF" r="20" role="button" stroke="#EAEAEA" strokeWidth="2" style={{cursor: 'pointer'}} tabindex="0"></circle>
<text fill="#262730" fontFamily="Manrope, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="210" y="95">
                        C
                      </text>
</g>
<g>
<circle aria-label="Узел D" cx="220" cy="250" data-node="D" fill="#FFFFFF" r="20" role="button" stroke="#EAEAEA" strokeWidth="2" style={{cursor: 'pointer'}} tabindex="0"></circle>
<text fill="#262730" fontFamily="Manrope, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="220" y="255">
                        D
                      </text>
</g>
<g className="">
<circle aria-label="Узел E" className="" cx="390" cy="170" data-node="E" fill="#FFFFFF" r="20" role="button" stroke="#EAEAEA" strokeWidth="2" style={{cursor: 'pointer'}} tabindex="0"></circle>
<text fill="#262730" fontFamily="Manrope, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="390" y="175">
                        E
                      </text>
</g>
<g>
<circle aria-label="Узел B" cx="540" cy="170" data-node="B" fill="#FFFFFF" r="20" role="button" stroke="#EAEAEA" strokeWidth="2" style={{cursor: 'pointer'}} tabindex="0"></circle>
<text fill="#262730" fontFamily="Manrope, sans-serif" fontSize="14" font-weight="600" text-anchor="middle" x="540" y="175">
                        B
                      </text>
</g>
</svg>
</div>
<div className="mt-4">
<div className="min-h-6 text-sm font-medium transition-all" id="graph-feedback"></div>
<div className="hidden mt-6" id="task-02-next">
<button className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-accent rounded-2xl hover:bg-accent-hover transition-colors shadow-soft focus:outline-none" id="task-02-next-btn" type="button">
                      Перейти к задаче 3
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-border bg-white p-4 md:p-5">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-2">
                  Связь с учебной программой
                </div>
<p className="text-sm font-light text-gray-600">
                  На мехмате вы изучите алгоритмы и структуры данных. Кратчайшие
                  пути — основа навигации, логистики и сетевых технологий.
                </p>
</div>
</div>
</div>

<div className="bg-white border border-border p-6 md:p-10 rounded-3xl shadow-soft gsap-reveal relative overflow-hidden" data-status="processing" data-task="task_03" id="task-03" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity">
<iconify-icon icon="solar:widget-2-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-mono font-medium text-accent bg-accent-light px-2 py-1 rounded">
                  Задача 03
                </span>
<span className="text-sm text-gray-400">Оптимизация</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">
                Вы — обучаете модель
              </h3>
<p className="text-sm font-light text-gray-500 mb-6 max-w-2xl">
                Доведите шарик до цели (0,0) за ограниченное число ходов.
              </p>
<div className="rounded-2xl border border-border bg-white p-4 md:p-5 mb-6">
<div className="flex items-center justify-between gap-4 flex-wrap">
<div className="text-sm font-medium tracking-tight">
                    Поле оптимизации
                  </div>
<div className="flex items-center gap-2 flex-wrap">
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors focus:outline-none" id="opt-start" type="button">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                      Старт
                    </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-foreground bg-white border border-border rounded-full hover:bg-muted transition-colors focus:outline-none" id="opt-reset" type="button">
<iconify-icon icon="solar:restart-linear"></iconify-icon>
                      Сбросить
                    </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-foreground bg-white border border-border rounded-full hover:bg-muted transition-colors focus:outline-none" id="opt-random" type="button">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
                      Обновить
                    </button>
</div>
</div>
<div className="mt-4 rounded-2xl border border-border bg-muted/40 p-3 overflow-hidden">
<canvas className="w-full" height="380" id="opt-canvas" style={{height: '380px'}} width="600"></canvas>
</div>
<div aria-live="polite" className="sr-only" id="opt-aria">
                  Стартовая точка: x=3, y=3. Текущая: x=3, y=3
                </div>
<div className="mt-4 grid grid-cols-3 gap-2 max-w-[220px]">
<div></div>
<button aria-label="Вверх" className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-2xl hover:bg-muted transition-colors focus:outline-none" disabled="" id="opt-up" type="button">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
<div></div>
<button aria-label="Влево" className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-2xl hover:bg-muted transition-colors focus:outline-none" disabled="" id="opt-left" type="button">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-label="Вниз" className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-2xl hover:bg-muted transition-colors focus:outline-none" disabled="" id="opt-down" type="button">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button aria-label="Вправо" className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-foreground bg-white border border-border rounded-2xl hover:bg-muted transition-colors focus:outline-none" disabled="" id="opt-right" type="button">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-4">
<div className="min-h-6 text-sm font-medium transition-all" id="opt-feedback"></div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-border bg-white p-4 md:p-5">
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-2">
                  Связь с учебной программой
                </div>
<p className="text-sm font-light text-gray-600">
                  Это модель того, как оптимизация работает в машинном обучении:
                  вы двигаетесь к минимуму, улучшая результат шаг за шагом.
                </p>
</div>
</div>
</div>

<div className="bg-foreground text-white rounded-3xl p-6 md:p-8 shadow-soft" id="tasks-final-cta">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="">
<div className="text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                  Финал
                </div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Вы готовы к мехмату!
                </h3>
<p className="text-sm font-light text-white/70 mt-2 max-w-xl">
                  Вы прошли все 3 задачи. Если хотите, закрепим успех — оставьте
                  заявку, и мы пришлём материалы и пригласим на День открытых
                  дверей.
                </p>
</div>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-foreground bg-white rounded-2xl hover:bg-gray-100 transition-colors" href="#apply" id="tasks-apply-btn">
                Подать документы
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="md:px-16 overflow-hidden pt-24 pr-6 pb-24 pl-6" id="stories">
<div className="max-w-[1440px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Нашли своё место
              </h2>
<p className="text-base text-gray-500 font-light max-w-md">
                Реальные истории тех, кто боялся не сдать первую сессию, а
                теперь создаёт алгоритмы для ведущих IT-компаний.
              </p>
</div>
<div className="flex gap-2 mt-6 md:mt-0">
<button aria-controls="swiper-wrapper-46d10dcb1010d1bf38a" aria-disabled="true" aria-label="Previous slide" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white transition-colors swiper-button-prev-custom swiper-button-disabled" disabled="" tabindex="-1">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button aria-controls="swiper-wrapper-46d10dcb1010d1bf38a" aria-disabled="false" aria-label="Next slide" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white transition-colors swiper-button-next-custom" tabindex="0">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="swiper stories-swiper !overflow-visible gsap-reveal swiper-initialized swiper-horizontal swiper-backface-hidden" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div aria-live="polite" className="swiper-wrapper" id="swiper-wrapper-46d10dcb1010d1bf38a" style={{cursor: 'grab'}}>
<div aria-label="1 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto swiper-slide-active" role="group" style={{marginRight: '24px'}}>
<div className="bg-white rounded-2xl p-6 border border-border flex flex-col h-full group">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center">
<img alt="Роман" className="w-full h-full max-h-max object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/846a0f1b-378a-41bf-8692-ed1198fd8374_800w.png"/>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Роман, 4 курс
                    </div>
<div className="overflow-y-auto flex-1 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full text-sm font-light text-gray-500 max-h-[220px] mt-3 pr-3">
                      «Я работаю системным аналитиком в «Совкомбанк Технологии».
                      В моём отделе мы занимаемся развитием front-систем, с
                      которыми, непосредственно работают люди. Мои основные
                      задачи, как системного аналитика - это написание
                      технического задания для разработчика и тестировщика,
                      коммуникация с другими системами, бизнес заказчиками и
                      решения того, как будет выглядеть техническая часть нашего
                      продукта, по итогу его реализации.»
                    </div>
</div>
</div>
</div>
<div aria-label="2 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto swiper-slide-next" role="group" style={{marginRight: '24px'}}>
<div className="border-border flex flex-col group bg-white h-full border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center border border-dashed border-gray-300">
<iconify-icon className="text-gray-400" icon="solar:user-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Денис, выпускник
                    </div>
<div className="overflow-y-auto flex-1 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full text-sm font-light text-gray-500 max-h-[220px] mt-3 pr-3">
                      «Работаю в «Сервисном центре Транстелематика» группы
                      компаний «ИТЭЛМА», интегрирую системы мониторинга
                      состояния транспортных средств и пассажиров. Если быть
                      точнее, это состояние транспортных систем, количество
                      вошедших/вышедших, состояние водителя, логика и интерфейс
                      взаимодействия депо с данными (возможность видеть
                      транспортные средства на карте, данные по ним в том числе
                      архивные), обработка транспортных протоколов.»
                    </div>
</div>
</div>
</div>
<div aria-label="3 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto" role="group" style={{marginRight: '24px'}}>
<div className="bg-white rounded-2xl p-6 border border-border flex flex-col h-full group">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center">
<img alt="Елена" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d67f9906-8ce9-471d-8f5b-1acb5252e736_800w.png"/>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Елена, 4 курс
                    </div>
<div className="overflow-y-auto pr-3 flex-1 text-sm text-gray-500 font-light mt-3 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full max-h-[220px]">
                      «После 3 курса устроилась в крупную IT-компанию
                      «Сибинтек-Софт». Занимаюсь сбором и анализом проблем
                      пользователей для последующей передачи разработчикам.»
                    </div>
</div>
</div>
</div>
<div aria-label="4 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto" role="group" style={{marginRight: '24px'}}>
<div className="bg-white rounded-2xl p-6 border border-border flex flex-col h-full group">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center border border-dashed border-gray-300">
<iconify-icon className="text-gray-400" icon="solar:user-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Илья, выпускник
                    </div>
<div className="overflow-y-auto pr-3 flex-1 text-sm text-gray-500 font-light mt-3 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full max-h-[220px]">
                      «На данный момент работаю в ІТ-компании уже больше
                      полугода. Занимаюсь написанием автотестов, созданием
                      веб-приложений. Математическое мышление пригодилось для
                      разработки.»
                    </div>
</div>
</div>
</div>
<div aria-label="5 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto" role="group" style={{marginRight: '24px'}}>
<div className="bg-white rounded-2xl p-6 border border-border flex flex-col h-full group">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center">
<img alt="Никита" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddf22f19-11ea-4564-8f7e-9bd1bd3aed82_800w.png"/>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Никита, 4 курс
                    </div>
<div className="overflow-y-auto pr-3 flex-1 text-sm text-gray-500 font-light mt-3 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full max-h-[220px]">
                      Работаю в компании Neoflex над проектами в области
                      искусственного интеллекта. Участвую в разработке
                      AI-ассистентов и интеллектуальных систем для поиска и
                      обработки информации в корпоративных документах. Занимаюсь
                      созданием прототипов решений на базе современных языковых
                      моделей и технологий генеративного AI. Также работаю над
                      инструментами, которые помогают интегрировать AI в
                      реальные бизнес-процессы и повседневную работу
                      сотрудников. Интересуюсь развитием локальных AI-сystems и
                      практическим применением современных нейросетевых
                      технологий.
                    </div>
</div>
</div>
</div>
<div aria-label="6 / 6" className="swiper-slide w-[300px] md:w-[400px] !h-auto" role="group" style={{marginRight: '24px'}}>
<div className="bg-white rounded-2xl p-6 border border-border flex flex-col h-full group">
<div className="relative h-48 md:h-56 bg-muted rounded-xl overflow-hidden mb-5 shrink-0 flex items-center justify-center border border-dashed border-gray-300">
<iconify-icon className="text-gray-400" icon="solar:user-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 flex flex-col overflow-hidden">
<div className="text-base font-semibold tracking-tight mb-1 text-accent">
                      Данила, 4 курс
                    </div>
<div className="overflow-y-auto pr-3 flex-1 text-sm text-gray-500 font-light mt-3 [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:bg-gray-200 [&amp;::-webkit-scrollbar-thumb]:rounded-full max-h-[220px]">
                      «Начиная с 3 курса работаю в IT-компании , занимаюсь
                      тестированием и последующей поставкой программного
                      обеспечения ДБО (Дистанционное Банковское Обеспечение), а
                      также АБС (Автоматизированная Банковская система) в
                      различные банки России.»
                    </div>
</div>
</div>
</div>
</div>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-16 bg-white border-b border-border" id="career">
<div className="max-w-[1440px] mx-auto">
<div className="text-center mb-16 gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Куда идут выпускники
            </h2>
<p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
              Математика — это фундамент. С ним ты можешь выбирать любую
              высокотехнологичную сферу.
            </p>
</div>
<div className="grid gap-6 mb-12 gsap-reveal md:grid-cols-2 lg:grid-cols-4" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="p-6 bg-muted/40 border border-border rounded-2xl">
<div className="flex flex-col h-full w-full">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 text-foreground shrink-0">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight mb-2">
                  Data Science / Analytics
                </h3>
<p className="text-xs text-gray-500 font-light mb-4">
                  Анализ данных, машинное обучение, AI-модели
                </p>
<div className="pt-4 border-t border-border mt-auto space-y-3">
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Зарплата Junior
                    </div>
<div className="text-sm font-mono font-medium">
                      60 000 – 85 000 ₽
                    </div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Популярность
                    </div>
<div className="text-xs text-gray-500 font-light">
                      35% выпускников выбирают это направление
                    </div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-muted/40 border border-border rounded-2xl">
<div className="flex flex-col h-full w-full">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 text-foreground shrink-0">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight mb-2">
                  Software Development
                </h3>
<p className="text-xs text-gray-500 font-light mb-4">
                  Веб-разработка, мобильные приложения, backend
                </p>
<div className="pt-4 border-t border-border mt-auto space-y-3">
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Зарплата Junior
                    </div>
<div className="text-sm font-mono font-medium">
                      50 000 – 90 000 ₽
                    </div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Популярность
                    </div>
<div className="text-xs text-gray-500 font-light">
                      28% выпускников
                    </div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-muted/40 border border-border rounded-2xl">
<div className="flex flex-col h-full w-full">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 text-foreground shrink-0">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight mb-2">
                  Business Intelligence
                </h3>
<p className="text-xs text-gray-500 font-light mb-4">
                  Бизнес-аналитика, визуализация данных, отчетность
                </p>
<div className="pt-4 border-t border-border mt-auto space-y-3">
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Зарплата Junior
                    </div>
<div className="text-sm font-mono font-medium">
                      60 000 – 95 000 ₽
                    </div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Популярность
                    </div>
<div className="text-xs text-gray-500 font-light">
                      18% выпускников
                    </div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-muted/40 border border-border rounded-2xl">
<div className="flex flex-col h-full w-full">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 text-foreground shrink-0">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight mb-2">
                  Cybersecurity
                </h3>
<p className="text-xs text-gray-500 font-light mb-4">
                  Информационная безопасность, защита данных, pentesting
                </p>
<div className="pt-4 border-t border-border mt-auto space-y-3">
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Зарплата Junior
                    </div>
<div className="text-sm font-mono font-medium">
                      65 000 – 100 000 ₽
                    </div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono mb-1">
                      Популярность
                    </div>
<div className="text-xs text-gray-500 font-light">
                      Одно из самых востребованных направлений
                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 bg-white border border-border rounded-2xl p-6 md:p-8 shadow-soft gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<h3 className="text-lg font-semibold tracking-tight mb-6">
              Карьерный рост в регионах:
            </h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">
<iconify-icon icon="solar:round-alt-arrow-up-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight mb-1">
                    Junior → Middle
                    <span className="text-gray-400 font-light">(2-3 года)</span>
</div>
<div className="text-accent font-semibold">
                    +40-60% к зарплате
                  </div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">
<iconify-icon icon="solar:double-alt-arrow-up-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight mb-1">
                    Middle → Senior
                    <span className="text-gray-400 font-light">(3-5 лет)</span>
</div>
<div className="text-accent font-semibold">
                    +70-100% к зарплате
                  </div>
</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
</div>
</section>
<section className="py-24 px-6 md:px-16 bg-foreground text-white relative overflow-hidden" id="apply">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 gsap-reveal" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'translate(0px, 30px)'}}>
<div className="text-center mb-10">
            Подписывайся на нашу группу ВКонтакте, чтобы не пропустить дни
            открытых дверей и полезные материалы для подготовки к поступлению.
          </div>
<div className="grid md:grid-cols-2 gap-8 items-start bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm text-left">
<div className="flex flex-col items-center justify-center text-center h-full">
<div className="bg-white p-4 rounded-2xl mb-4 shadow-soft">
<img alt="QR VK" className="w-48 h-48" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&amp;data=https://vk.com/sgu_mm"/>
</div>
<p className="text-lg font-medium tracking-tight">
                Подписывайся на нас в ВК
              </p>
<a className="text-accent hover:text-accent-hover transition-colors text-sm mt-2" href="https://vk.com/sgu_mm" target="_blank">
                vk.com/sgu_mm
              </a>
</div>
<div className="flex flex-col">
<h3 className="text-xl font-medium tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:calendar-linear"></iconify-icon>
                Дни открытых дверей
              </h3>
<div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
<table className="w-full text-sm text-left">
<thead className="text-xs uppercase bg-white/10 text-gray-300">
<tr>
<th className="px-6 py-4 font-medium" scope="col">
                        Дата и время
                      </th>
<th className="px-6 py-4 font-medium" scope="col">Формат</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10 text-gray-300">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
                        15 мая 2026, 10:00
                      </td>
<td className="px-6 py-4">Очно (Ауд. 401)</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
                        22 мая 2026, 12:00
                      </td>
<td className="px-6 py-4">Онлайн-трансляция</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
                        5 июня 2026, 10:00
                      </td>
<td className="px-6 py-4">Очно (Ауд. 401)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-border pt-16 pb-8 px-6 md:px-16 text-sm">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity" href="#">
<div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full overflow-hidden bg-white">
<img alt="Логотип" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4afb87c3-37b2-4115-aefd-f1f5563cbc8b_320w.jpg"/>
</div>
</a>
<p className="text-gray-500 font-light max-w-sm mb-6">
            Факультет для тех, кто хочет понимать, как устроен мир, и создавать
            технологии, меняющие будущее.
          </p>
<div className="space-y-3 mb-6 text-sm text-gray-600 font-light">
<div className="flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:phone-linear" width="20"></iconify-icon>
<a className="hover:text-accent transition-colors" href="tel:+78452519236">
                +7 (8452) 51-92-36
              </a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-accent transition-colors" href="mailto:mechmath@sgu.ru">
                mechmath@sgu.ru
              </a>
</div>
<a className="hover:text-accent transition-colors" href="https://yandex.ru/maps/?text=Саратов%2C%20ул.%20Астраханская%2C%2083" rel="noopener noreferrer" target="_blank">
              Саратов, ул. Астраханская, 83
            </a>
<span className="text-gray-300">·</span>
<a className="hover:text-accent transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=Саратов%2C%20ул.%20Астраханская%2C%2083" rel="noopener noreferrer" target="_blank">
              Google Maps
            </a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-foreground hover:border-foreground transition-all" href="mailto:mechmath@sgu.ru" title="Написать на почту">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-foreground hover:border-foreground transition-all" href="tel:+78452519236" title="Позвонить">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all" href="https://vk.ru/sgu_mm" target="_blank" title="Мы ВКонтакте">
<iconify-icon icon="mdi:vk" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium tracking-tight mb-4">Навигация</h4>
<ul className="space-y-3 text-gray-500 font-light">
<li>
<a className="hover:text-foreground transition-colors" href="#myths">
                Мифы о математике
              </a>
</li>
<li>
<a className="hover:text-foreground transition-colors" href="#try-yourself">
                Интерактивные задачи
              </a>
</li>
<li>
<a className="hover:text-foreground transition-colors" href="#stories">
                Истории выпускников
              </a>
</li>
<li>
<a className="hover:text-foreground transition-colors" href="#career">
                Карьерные треки
              </a>
</li>
<li>
<a className="hover:text-accent transition-colors" href="https://www.sgu.ru/struktura/mechmath" target="_blank">
                Сайт факультета
              </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium tracking-tight mb-4">Документы</h4>
<ul className="space-y-3 text-gray-500 font-light">
<li>
<a className="hover:text-foreground transition-colors" href="https://www.sgu.ru/politika-obrabotki-personalnykh-dannykh-v-fgbou-vo-sgu-imeni-n-g-chernyshevskogo">
                Согласие на обработку ПДн
              </a>
</li>
<li>
<a className="hover:text-foreground transition-colors" href="https://www.sgu.ru/sveden">
                Сведения об образовательной организации
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1440px] mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
<div>© 2026 Механико-математический факультет.</div>
</div>
</footer>






    </>
  );
}
