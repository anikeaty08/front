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
      
                  (function () {
                    const root = document.getElementById('aura-emedb0f58');
                    if (!root) return;
                    const menu = root.querySelector('[data-menu]');
                    const label = root.querySelector('[data-label]');
                    const dot = root.querySelector('[data-dot]');
                    const caret = root.querySelector('[data-caret]');
                    const options = menu.querySelectorAll('[data-option]');

                    function openMenu() {
                      menu.classList.remove('hidden');
                      root.setAttribute('aria-expanded', 'true');
                      caret.classList.add('rotate-180');
                    }
                    function closeMenu() {
                      menu.classList.add('hidden');
                      root.setAttribute('aria-expanded', 'false');
                      caret.classList.remove('rotate-180');
                    }
                    function toggleMenu() {
                      if (menu.classList.contains('hidden')) openMenu(); else closeMenu();
                    }
                    function selectOption(el) {
                      options.forEach(o => o.setAttribute('aria-selected', 'false'));
                      el.setAttribute('aria-selected', 'true');
                      label.textContent = el.dataset.label;
                      dot.className = 'w-2 h-2 rounded-full ' + el.dataset.color;
                      closeMenu();
                    }

                    root.addEventListener('click', function (e) {
                      if (menu.contains(e.target)) return;
                      toggleMenu();
                    });

                    root.addEventListener('keydown', function (e) {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleMenu();
                      } else if (e.key === 'Escape') {
                        closeMenu();
                      }
                    });

                    options.forEach(opt => {
                      opt.addEventListener('click', () => selectOption(opt));
                      opt.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          selectOption(opt);
                        }
                      });
                    });

                    document.addEventListener('click', function (e) {
                      if (!root.contains(e.target)) closeMenu();
                    });
                  })();
                


    (function () {
      try {
        const KEY = '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';
        // Persist key for the app
        localStorage.setItem('groq_api_key', KEY);
        // Mirror into the hidden input and disable controls
        const input = document.getElementById('aura-groq-key');
        const saveBtn = document.getElementById('aura-groq-save');
        if (input) {
          input.value = KEY;
          input.setAttribute('disabled', 'true');
        }
        if (saveBtn) {
          saveBtn.setAttribute('disabled', 'true');
          saveBtn.classList.add('opacity-60', 'cursor-not-allowed');
        }
      } catch (e) { /* no-op */ }
    })();
  


              (function () {
                const root = document.getElementById('aura-emedd0p74');
                if (!root) return;

                const textarea = root.querySelector('#task');
                const promptBtn = root.querySelector('#aura-emedd0ek0');

                const panel = root.querySelector('#aura-deepseek-panel');
                const output = root.querySelector('#aura-deepseek-output');
                const indicator = root.querySelector('#aura-deepseek-indicator');

                const keyInput = root.querySelector('#aura-groq-key');
                const saveKeyBtn = root.querySelector('#aura-groq-save');
                const keyRow = root.querySelector('#aura-groq-key-row');

                const attachBtn = root.querySelector('#aura-attach-btn');
                const attachInput = root.querySelector('#aura-attach-input');

                const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
                const MODEL = 'llama-3.1-8b-instant';

                // Attach file
                attachBtn.addEventListener('click', (e) => {
                  e.preventDefault();
                  attachInput.click();
                });
                attachInput.addEventListener('change', () => {
                  if (attachInput.files && attachInput.files[0]) {
                    attachBtn.classList.add('ring-2','ring-emerald-500/50');
                    setTimeout(() => attachBtn.classList.remove('ring-2','ring-emerald-500/50'), 1200);
                  }
                });

                // Auto-resize textarea
                function autoresize() {
                  textarea.style.height = 'auto';
                  textarea.style.height = Math.min(Math.max(textarea.scrollHeight, 64), 240) + 'px';
                }
                textarea.addEventListener('input', autoresize);
                window.addEventListener('load', autoresize);

                function showPanel() {
                  if (panel.classList.contains('hidden')) panel.classList.remove('hidden');
                }

                function setLoading(state) {
                  if (state) {
                    indicator.classList.remove('hidden');
                    promptBtn.setAttribute('aria-busy', 'true');
                    promptBtn.disabled = true;
                    promptBtn.classList.add('opacity-60', 'cursor-not-allowed');
                  } else {
                    indicator.classList.add('hidden');
                    promptBtn.removeAttribute('aria-busy');
                    promptBtn.disabled = false;
                    promptBtn.classList.remove('opacity-60', 'cursor-not-allowed');
                  }
                }

                function highlightKeyRow() {
                  keyRow.classList.add('ring-2', 'ring-violet-500');
                  setTimeout(() => keyRow.classList.remove('ring-2', 'ring-violet-500'), 1500);
                }

                function getApiKey() {
                  return localStorage.getItem('groq_api_key') || '';
                }

                // Prefill key if saved
                try {
                  const saved = getApiKey();
                  if (saved) keyInput.value = saved;
                } catch (_) {}

                saveKeyBtn.addEventListener('click', (e) => {
                  e.preventDefault();
                  const val = (keyInput.value || '').trim();
                  try {
                    if (val) {
                      localStorage.setItem('groq_api_key', val);
                    } else {
                      localStorage.removeItem('groq_api_key');
                    }
                  } catch (_) {}
                  highlightKeyRow();
                });

                async function sendToGroq() {
                  const prompt = (textarea.value || '').trim();
                  showPanel();

                  if (!prompt) {
                    output.textContent = 'Пожалуйста, опишите задачу и нажмите Prompt.';
                    return;
                  }

                  const API_KEY = getApiKey();
                  if (!API_KEY) {
                    output.textContent = 'Добавьте API ключ Groq в поле выше и повторите попытку.';
                    highlightKeyRow();
                    return;
                  }

                  setLoading(true);
                  output.textContent = '';

                  try {
                    const res = await fetch(API_URL, {
                      method: 'POST',
                      headers: {
                        'Authorization': 'Bearer ' + API_KEY,
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        model: MODEL,
                        messages: [
                          { role: 'system', content: 'Ты — полезный, краткий помощник.' },
                          { role: 'user', content: prompt }
                        ],
                        temperature: 0.7
                      })
                    });

                    if (!res.ok) {
                      let msg = 'HTTP ' + res.status;
                      try {
                        const errJson = await res.json();
                        if (errJson && errJson.error && errJson.error.message) {
                          msg += ': ' + errJson.error.message;
                        }
                      } catch (_) {}
                      throw new Error(msg);
                    }

                    const data = await res.json();
                    const text = (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) ? data.choices[0].message.content.trim() : '';
                    output.textContent = text || 'Ответ пуст.';
                  } catch (e) {
                    output.textContent = 'Ошибка при запросе: ' + (e && e.message ? e.message : 'неизвестная ошибка');
                  } finally {
                    setLoading(false);
                  }
                }

                promptBtn.addEventListener('click', (e) => {
                  e.preventDefault();
                  sendToGroq();
                });

                textarea.addEventListener('keydown', (e) => {
                  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    sendToGroq();
                  }
                });
              })();
            


          (function () {
            const root = document.getElementById('aura-emedbgoqe');
            if (!root) return;
            const buttons = Array.from(root.querySelectorAll('button[data-range]'));

            const dataMap = {
              today: {
                line1: [14, 16, 18, 20, 22, 24, 26],
                line2: [210, 220, 230, 240, 255, 270, 285],
                bar1: [
                  [16, 15, 18, 17, 20, 19, 22],
                  [26, 24, 28, 27, 30, 29, 32],
                  [12, 11, 14, 15, 16, 17, 18]
                ],
                radar1: [
                  [820, 700, 630, 500, 560, 400, 760],
                  [600, 880, 720, 660, 540, 300, 820],
                  [200, 480, 540, 620, 350, 420, 300]
                ]
              },
              yesterday: {
                line1: [12, 13, 15, 15, 17, 18, 19],
                line2: [180, 190, 200, 210, 220, 235, 245],
                bar1: [
                  [14, 13, 16, 15, 17, 16, 18],
                  [22, 21, 25, 23, 26, 24, 27],
                  [10, 9, 12, 11, 13, 12, 14]
                ],
                radar1: [
                  [700, 620, 580, 460, 520, 360, 680],
                  [520, 760, 640, 590, 480, 260, 740],
                  [160, 430, 500, 560, 320, 360, 260]
                ]
              },
              week: {
                line1: [10, 12, 14, 16, 18, 20, 22],
                line2: [150, 170, 190, 210, 230, 250, 270],
                bar1: [
                  [12, 14, 16, 18, 20, 21, 23],
                  [20, 22, 24, 26, 28, 29, 31],
                  [8, 10, 12, 14, 16, 17, 19]
                ],
                radar1: [
                  [600, 680, 720, 760, 800, 700, 750],
                  [400, 500, 620, 700, 680, 620, 740],
                  [220, 320, 420, 520, 480, 500, 560]
                ]
              },
              month: {
                line1: [8, 10, 12, 14, 16, 18, 20],
                line2: [120, 140, 160, 180, 200, 220, 240],
                bar1: [
                  [10, 12, 14, 16, 18, 19, 21],
                  [18, 20, 22, 24, 26, 27, 29],
                  [6, 8, 10, 12, 14, 15, 17]
                ],
                radar1: [
                  [520, 560, 600, 640, 680, 620, 700],
                  [360, 420, 520, 600, 560, 500, 660],
                  [180, 260, 360, 460, 420, 380, 480]
                ]
              },
              custom: {
                line1: [18, 17, 19, 21, 23, 22, 24],
                line2: [260, 250, 265, 280, 300, 290, 305],
                bar1: [
                  [18, 16, 20, 19, 22, 21, 24],
                  [28, 26, 30, 29, 32, 31, 34],
                  [14, 12, 16, 15, 18, 17, 20]
                ],
                radar1: [
                  [780, 720, 700, 640, 700, 520, 800],
                  [640, 820, 760, 700, 600, 380, 860],
                  [260, 520, 560, 640, 420, 480, 380]
                ]
              }
            };

            function setActive(activeBtn) {
              buttons.forEach(btn => {
                const isActive = btn === activeBtn;
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                if (isActive) {
                  btn.classList.remove('text-slate-300', 'hover:bg-slate-800/50');
                  btn.classList.add('bg-sky-600', 'text-white', 'font-medium');
                } else {
                  btn.classList.remove('bg-sky-600', 'text-white', 'font-medium');
                  if (!btn.classList.contains('text-slate-300')) btn.classList.add('text-slate-300');
                  if (!btn.classList.contains('hover:bg-slate-800/50')) btn.classList.add('hover:bg-slate-800/50');
                }
              });
            }

            function updateCharts(rangeKey) {
              const payload = dataMap[rangeKey] || dataMap.today;
              try {
                const c1 = Chart.getChart('line1');
                if (c1) { c1.data.datasets[0].data = payload.line1; c1.update(); }

                const c2 = Chart.getChart('line2');
                if (c2) { c2.data.datasets[0].data = payload.line2; c2.update(); }

                const cb = Chart.getChart('bar1');
                if (cb && cb.data.datasets.length >= 3) {
                  cb.data.datasets[0].data = payload.bar1[0];
                  cb.data.datasets[1].data = payload.bar1[1];
                  cb.data.datasets[2].data = payload.bar1[2];
                  cb.update();
                }

                const cr = Chart.getChart('radar1');
                if (cr && cr.data.datasets.length >= 3) {
                  cr.data.datasets[0].data = payload.radar1[0];
                  cr.data.datasets[1].data = payload.radar1[1];
                  cr.data.datasets[2].data = payload.radar1[2];
                  cr.update();
                }
              } catch (e) {
                // no-op
              }
            }

            buttons.forEach(btn => {
              btn.addEventListener('click', () => {
                setActive(btn);
                updateCharts(btn.dataset.range);
              });
            });
          })();
        


    // Render lucide icons with stroke width 1.5
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Common chart options
    const gridColor = 'rgba(100,116,139,0.15)';
    const tickColor = 'rgba(148,163,184,0.7)';

    // Line 1
    const ctx1 = document.getElementById('line1').getContext('2d');
    const grad1 = ctx1.createLinearGradient(0, 0, 0, 180);
    grad1.addColorStop(0, 'rgba(16,185,129,0.35)');
    grad1.addColorStop(1, 'rgba(16,185,129,0.03)');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл'],
        datasets: [{
          label: 'Контракты',
          data: [12, 18, 24, 22, 28, 30, 32],
          tension: 0.35,
          fill: true,
          backgroundColor: grad1,
          borderColor: 'rgb(16,185,129)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: tickColor } },
          y: { grid: { color: gridColor }, ticks: { color: tickColor } }
        }
      }
    });

    // Line 2
    const ctx2 = document.getElementById('line2').getContext('2d');
    const grad2 = ctx2.createLinearGradient(0, 0, 0, 180);
    grad2.addColorStop(0, 'rgba(56,189,248,0.35)');
    grad2.addColorStop(1, 'rgba(56,189,248,0.03)');
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Янв','Фев','Мар','Апр','Май','Июн','Июл'],
        datasets: [{
          label: 'Потенциальные сделки',
          data: [200, 240, 220, 260, 300, 340, 360],
          tension: 0.35,
          fill: true,
          backgroundColor: grad2,
          borderColor: 'rgb(56,189,248)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: tickColor } },
          y: { grid: { color: gridColor }, ticks: { color: tickColor } }
        }
      }
    });

    // Bar
    const ctxBar = document.getElementById('bar1').getContext('2d');
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Янв','Мар','Май','Июл','Сен','Ноя','Дек'],
        datasets: [
          { label: 'Клиенты', data: [18,14,22,19,24,21,26], backgroundColor: 'rgba(56,189,248,0.7)', borderRadius: 6, borderSkipped: false },
          { label: 'Встречи', data: [28,22,30,26,32,29,34], backgroundColor: 'rgba(100,116,139,0.7)', borderRadius: 6, borderSkipped: false },
          { label: 'Сделки', data: [14,10,18,17,20,18,22], backgroundColor: 'rgba(16,185,129,0.75)', borderRadius: 6, borderSkipped: false }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { stacked: false, grid: { display: false }, ticks: { color: tickColor } },
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: tickColor } }
        }
      }
    });

    // Radar
    const ctxRadar = document.getElementById('radar1').getContext('2d');
    new Chart(ctxRadar, {
      type: 'radar',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [
          { label: 'Звонки', data: [820, 700, 630, 500, 560, 400, 760], borderColor: 'rgba(192,132,252,1)', backgroundColor: 'rgba(192,132,252,0.25)', pointRadius: 0, borderWidth: 2 },
          { label: 'Рассылки', data: [600, 880, 720, 660, 540, 300, 820], borderColor: 'rgba(217,70,239,1)', backgroundColor: 'rgba(217,70,239,0.22)', pointRadius: 0, borderWidth: 2 },
          { label: 'Встречи', data: [200, 480, 540, 620, 350, 420, 300], borderColor: 'rgba(34,211,238,1)', backgroundColor: 'rgba(34,211,238,0.20)', pointRadius: 0, borderWidth: 2 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: tickColor, font: { size: 12 } },
            ticks: { display: false }
          }
        }
      }
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
      
<div className="flex min-h-screen">

<aside className="hidden md:flex w-20 flex-col items-center gap-6 bg-[#0a0d11] border-r border-slate-800/60 pt-4 pb-6">

<div className="w-12 h-12 rounded-full ring-2 ring-slate-700 overflow-hidden">
<img alt="user" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<nav className="flex-1 flex flex-col items-center gap-5 mt-4">
<button aria-label="Главная" className="p-2 rounded-lg bg-slate-900/60 ring-1 ring-slate-800/80 hover:bg-slate-800/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-home w-5 h-5 text-slate-300" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button aria-label="Отчёты" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-slate-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button aria-label="Входящие" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-inbox w-5 h-5 text-slate-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</button>
<button aria-label="Сообщения" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-message-square w-5 h-5 text-slate-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Сайты" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-globe w-5 h-5 text-slate-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button aria-label="Команда" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-users w-5 h-5 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</nav>
<div className="mt-auto flex flex-col items-center gap-4">
<button aria-label="Помощь" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-help-circle w-5 h-5 text-slate-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<button aria-label="Настройки" className="p-2 rounded-lg hover:bg-slate-800/60 ring-1 ring-transparent hover:ring-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-settings w-5 h-5 text-slate-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</aside>

<main className="flex-1">

<header className="md:px-8 pt-4 pr-4 pl-4">
<div className="w-full rounded-2xl bg-[#0c1016] border border-slate-800/70 h-16 flex items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-3">
<span className="text-[22px] md:text-[24px] tracking-tight font-semibold">
<span className="text-slate-200">ZionCity</span><span className="font-black text-violet-500 border-violet-500 border-0"> CRM</span><span className="text-violet-400">.</span>
</span>
</div>
<button aria-label="Меню" className="h-10 w-10 grid place-items-center rounded-xl bg-slate-900/60 ring-1 ring-slate-800/80 hover:bg-slate-800/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-more-vertical w-5 h-5 text-slate-300" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</header>

<section className="px-6 md:px-80 mt-24">
<div className="md:p-4 bg-[#1A1B20] border-slate-800/70 border rounded-2xl pr-4 pb-4 pl-4" id="aura-emeddqwxy">
<div className="bg-[#0C0E11] border-slate-800/80 border rounded-xl pt-4 pr-4 pb-4 pl-4" id="aura-emedd0p74">
<label className="sr-only" htmlFor="task">Опишите вашу задачу</label>
<textarea aria-label="Поле ввода задачи" className="w-full bg-transparent outline-none placeholder:text-slate-500 text-slate-200 resize-none h-16" id="task" placeholder="Опишите вашу задачу…" style={{height: '64px'}}></textarea>
<div className="mt-2 text-[11px] text-slate-500">Совет: используйте Ctrl/⌘ + Enter для отправки</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-slate-900/70 ring-1 ring-slate-800/80 text-slate-300 hover:bg-slate-800/70 hover:ring-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" id="aura-attach-btn">
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
<span className="text-sm font-medium">Прикрепить файл</span>
<input aria-label="Выбор файла" className="hidden" id="aura-attach-input" type="file"/>
</button>
<button className="inline-flex gap-2 h-9 ring-1 ring-slate-800/80 hover:bg-slate-800/70 hover:ring-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 text-slate-300 bg-slate-900/70 rounded-lg pr-3 pl-3 items-center" id="aura-emedd0ek0">
<svg className="lucide lucide-sparkles w-4 h-4 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">Prompt</span>
</button>

<button aria-expanded="false" aria-haspopup="listbox" aria-label="Выбор модели ИИ" className="inline-flex gap-2 h-9 ring-1 ring-slate-800/80 hover:bg-slate-800/70 hover:ring-slate-700 transition relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 text-slate-300 bg-slate-900/70 rounded-lg pr-3 pl-3 items-center" id="aura-emedb0f58" type="button">
<span className="w-2 h-2 rounded-full bg-emerald-400" data-dot=""></span>
<span className="text-sm font-medium" data-label="">Llama 3.1 8B (Groq)</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 transition-transform" data-caret="" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<div className="absolute top-full right-0 mt-2 w-64 rounded-xl bg-[#0c1016] ring-1 ring-slate-800/80 shadow-lg z-50 p-1.5 hidden" data-menu="">
<div aria-label="Модели ИИ" className="max-h-80 overflow-auto" role="listbox">
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-sky-400" data-label="GPT-5" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
<span className="text-sm font-medium">GPT-5</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-cyan-400" data-label="Veo 3" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
<span className="text-sm font-medium">Veo 3</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-purple-400" data-label="Claude 3.5 Sonnet" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
<span className="text-sm font-medium">Claude 3.5 Sonnet</span>
</div>
<div aria-selected="true" className="flex gap-2 hover:bg-slate-800/60 cursor-pointer text-slate-200 rounded-lg pt-2 pr-2.5 pb-2 pl-2.5 items-center" data-color="bg-emerald-400" data-label="Llama 3.1 8B (Groq)" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
<span className="text-sm font-medium">Llama 3.1 8B (Groq)</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-slate-500" data-label="Llama 4" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
<span className="text-sm font-medium">Llama 4</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-sky-400" data-label="Mistral Large" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
<span className="text-sm font-medium">Mistral Large</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-cyan-400" data-label="Mixtral 8x22B" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
<span className="text-sm font-medium">Mixtral 8x22B</span>
</div>
<div aria-selected="false" className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200 cursor-pointer" data-color="bg-emerald-400" data-label="YandexGPT" data-option="" role="option" tabindex="0">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
<span className="text-sm font-medium">YandexGPT</span>
</div>
</div>
</div>

</button>
</div>

<div className="flex gap-2 mt-3 items-center hidden" id="aura-groq-key-row" style={{display: 'none'}}>
<div className="flex-1 h-9 ring-1 ring-slate-800/80 inline-flex gap-2 bg-slate-900/70 rounded-lg pr-3 pl-3 items-center" id="aura-emedf3b0h">
<svg className="lucide lucide-key-round w-4 h-4 text-slate-400" data-lucide="key-round" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<input aria-label="API ключ Groq" className="w-full bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-500" id="aura-groq-key" placeholder="Вставьте API ключ Groq…" type="password"/>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-slate-900/70 ring-1 ring-slate-800/80 text-slate-300 hover:bg-slate-800/70 hover:ring-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" id="aura-groq-save">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
<span className="text-sm font-medium">Сохранить</span>
</button>

</div>

<div aria-live="polite" className="mt-4 rounded-xl bg-slate-900/60 ring-1 ring-slate-800/80 p-3 hidden" id="aura-deepseek-panel">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bot w-4 h-4 text-slate-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<h4 className="text-[18px] tracking-tight font-semibold text-slate-200">Ответ</h4>
</div>
<div className="hidden items-center gap-2 text-slate-400 text-sm" id="aura-deepseek-indicator">
<svg className="lucide lucide-loader-2 w-4 h-4 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                  Генерация…
                </div>
</div>
<div className="mt-3 text-sm text-slate-200 whitespace-pre-wrap" id="aura-deepseek-output"></div>
</div>

</div>
</div>
</section>

<section className="md:px-8 text-center mt-24 pr-4 pl-4">
<div className="inline-flex rounded-xl overflow-hidden ring-1 ring-slate-800/80 bg-[#0c1016]" id="aura-emedbgoqe">
<button aria-pressed="true" className="px-4 md:px-5 h-10 bg-sky-600 text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40" data-range="today">Сегодня</button>
<button aria-pressed="false" className="px-4 md:px-5 h-10 text-slate-300 hover:bg-slate-800/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-range="yesterday">Вчера</button>
<button aria-pressed="false" className="px-4 md:px-5 h-10 text-slate-300 hover:bg-slate-800/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-range="week">Неделя</button>
<button aria-pressed="false" className="px-4 md:px-5 h-10 text-slate-300 hover:bg-slate-800/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-range="month">Месяц</button>
<button aria-pressed="false" className="px-4 md:px-5 h-10 text-slate-300 hover:bg-slate-800/50 text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40" data-range="custom">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Период
          </button>
</div>

</section>

<section className="px-4 md:px-56 mt-6 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="rounded-2xl bg-[#0c1016] border border-slate-800/80 p-4 md:p-5 hover:-translate-y-0.5 transition-transform">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-200">Сумма контрактов</h3>
</div>
<button aria-label="Ещё" className="p-1.5 rounded-lg hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-[28px] md:text-[32px] tracking-tight font-semibold text-slate-50">10.8 млн. ₽</span>
<span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 100%
                </span>
</div>
<div className="mt-4 relative h-36">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas height="129" id="line1" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '311px'}} width="280"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-[#0c1016] border border-slate-800/80 p-4 md:p-5 hover:-translate-y-0.5 transition-transform">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[18px] tracking-tight font-semibold text-slate-200">Количество потенциальных сделок</h3>
</div>
<button aria-label="Ещё" className="p-1.5 rounded-lg hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-[28px] md:text-[32px] tracking-tight font-semibold text-slate-50">360.9 млн. ₽</span>
<span className="inline-flex items-center gap-1 text-sky-400 text-sm font-medium">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 360%
                </span>
</div>
<div className="mt-4 relative h-36">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas height="129" id="line2" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '311px'}} width="280"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-[#0c1016] border border-slate-800/80 p-4 md:p-5 hover:-translate-y-0.5 transition-transform">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-[18px] tracking-tight font-semibold">Эффективность</h3>
<p className="text-sm text-slate-400 mt-1">за год</p>
</div>
<button aria-label="Ещё" className="p-1.5 rounded-lg hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<div className="inline-flex rounded-lg overflow-hidden ring-1 ring-slate-800/80">
<button className="px-3 h-8 text-sm bg-slate-900/70 text-slate-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">12м</button>
<button className="px-3 h-8 text-sm text-slate-300 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">30д</button>
<button className="px-3 h-8 text-sm text-slate-300 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">7д</button>
</div>
<button className="px-3 h-8 rounded-lg bg-slate-900/70 ring-1 ring-slate-800/80 text-slate-200 text-sm font-medium hover:bg-slate-800/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">Подробнее</button>
</div>
<div className="mt-4 flex items-center gap-4 text-sm">
<div className="flex items-center gap-2 text-slate-300">
<span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Клиенты
              </div>
<div className="flex items-center gap-2 text-slate-300">
<span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span> Встречи
              </div>
<div className="flex items-center gap-2 text-slate-300">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Сделки
              </div>
</div>
<div className="mt-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas height="230" id="bar1" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '311px'}} width="280"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-[#0c1016] border border-slate-800/80 p-4 md:p-5 hover:-translate-y-0.5 transition-transform">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-[18px] tracking-tight font-semibold">Действия</h3>
<p className="text-sm text-slate-400 mt-1">за неделю</p>
</div>
<button aria-label="Ещё" className="p-1.5 rounded-lg hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40">
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
<div className="mt-4">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<canvas height="230" id="radar1" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '311px'}} width="280"></canvas>
</div>
</div>
</div>
</div>
<div className="flex gap-6 text-sm mt-5 items-center justify-center">
<div className="flex items-center gap-2 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Звонки</div>
<div className="flex items-center gap-2 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400"></span> Рассылки</div>
<div className="flex items-center gap-2 text-slate-300"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Встречи</div>
</div>
</div>
</div>
</div>
</div></section>
</main>
</div>


    </>
  );
}
