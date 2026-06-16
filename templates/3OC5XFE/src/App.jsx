import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const screens   = { 1: screen1, 2: screen2, 3: screen3 };
    const startBtn  = document.getElementById('startBtn');
    const scanBtn   = document.getElementById('scanBtn');
    const finishBtn = document.getElementById('finishBtn');
    const backBtn   = document.getElementById('backToStart');
    const counterEl = document.getElementById('counter');
    const form      = document.getElementById('dynamicForm');
    const modal     = document.getElementById('confirmModal');
    const cancelBtn = document.getElementById('cancelConfirm');
    const yesBtn    = document.getElementById('confirmYes');

    const API_HEADERS = {
      "WarehousesApiAuthToken": "djmki3490de990w2q9g99dcjmgiwwi0002q",
      "Authorization": "Basic Og=="
    };

    let fieldMeta = {};
    let formState = {};
    let scannedSet = new Set();

    function showScreen(n) {
      Object.entries(screens).forEach(([i, el]) => {
        (+i === n) ? el.classList.remove('hidden') : el.classList.add('hidden');
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function loadFormAndShow() {
      try {
        const res = await fetch("https://service.hvalwaters.ru/api/warehouses/get_fields", { headers: API_HEADERS });
        const { data } = await res.json();
        fieldMeta = data;
        renderDynamicForm(data);
        showScreen(2);
      } catch {
        alert('Не удалось загрузить форму');
      }
    }

    function renderDynamicForm(meta) {
      form.innerHTML = '';
      Object.values(meta).forEach(f => {
        const wrap = document.createElement('div');
        wrap.className = 'flex flex-col gap-2';

        const label = document.createElement('label');
        label.textContent = f.label + (f.required ? ' *' : '');
        label.className = 'text-base font-medium';
        label.setAttribute('for', f.name);
        wrap.appendChild(label);

        let el;
        if (f.type === 'select') {
          el = document.createElement('select');
          el.innerHTML = '<option value="">Выбрать…</option>' + f.data.map(o => `<option value="${o.value}">${o.text}</option>`).join('');
        } else {
          el = document.createElement('input');
          el.type = 'text';
          el.placeholder = f.placeholder || '';
        }

        el.id = f.name;
        el.dataset.name = f.name;
        if (f.required) el.required = true;

        el.className = 'bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-4 focus:outline-none';
        el.addEventListener('input', updateState);
        el.addEventListener('change', updateState);

        wrap.appendChild(el);
        form.appendChild(wrap);
      });

      updateState();
    }

    function updateState() {
      formState = {};
      let valid = true;

      form.querySelectorAll('[data-name]').forEach(el => {
        const name = el.dataset.name;
        const value = el.value.trim();
        formState[name] = value;
        if (fieldMeta[name]?.required && !value) valid = false;
      });

      scanBtn.disabled = !valid;
      scanBtn.setAttribute('aria-disabled', !valid);
    }

    function simulateScan() {
      const fakeCodes = ['ABC123', 'DEF456', 'GHI789', 'JKL012', 'MNO345'];
      fakeCodes.forEach((code, idx) => {
        setTimeout(() => {
          if (!scannedSet.has(code)) {
            scannedSet.add(code);
            counterEl.textContent = scannedSet.size;
          }
        }, (idx + 1) * 800);
      });
    }

    async function submitSession() {
      yesBtn.disabled = true;
      try {
        await fetch("https://service.hvalwaters.ru/api/warehouses/codes/create", {
          method: 'POST',
          headers: { ...API_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formState, codes: [...scannedSet] })
        });
        resetAll();
      } catch {
        alert('Ошибка отправки');
      }
      yesBtn.disabled = false;
      modal.classList.add('hidden');
    }

    function resetAll() {
      form.reset?.();
      scanBtn.disabled = true;
      scanBtn.setAttribute('aria-disabled', 'true');
      scannedSet.clear();
      counterEl.textContent = '0';
      showScreen(1);
    }

    startBtn.addEventListener('click', loadFormAndShow);
    backBtn.addEventListener('click', () => { form.reset?.(); updateState(); showScreen(1); });
    scanBtn.addEventListener('click', () => { if (scanBtn.disabled) return; scannedSet.clear(); counterEl.textContent = '0'; showScreen(3); simulateScan(); });
    finishBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));
    yesBtn.addEventListener('click', submitSession);

    lu.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen grid place-items-center pr-6 pl-6" id="screen1">
<div className="flex flex-col items-center gap-16 animate-fade-in">
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-center">Сканер склада</h1>
<button aria-label="Начать сессию" className="w-full max-w-xs px-10 py-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition flex items-center justify-center gap-3 text-xl font-medium shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" id="startBtn">
<i className="w-[24px] h-[24px]" data-lucide="play" strokeWidth="2"></i><span>Начать</span>
</button>
</div>
</section>

<section className="hidden min-h-screen px-6 pb-10 flex flex-col animate-fade-in" id="screen2">
<header className="py-8 flex items-center relative">
<button aria-label="Назад" className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-neutral-900 hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition active:scale-95" id="backToStart">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h2 className="mx-auto text-4xl font-semibold tracking-tight text-center">Детали сессии</h2>
</header>
<form aria-live="polite" className="flex-1 flex flex-col gap-8 overflow-y-auto pb-4" id="dynamicForm">

</form>
<div className="pt-6">
<button aria-disabled="true" aria-label="Перейти к сканеру" className="w-full max-w-xs mx-auto px-10 py-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none active:scale-95 transition font-medium flex items-center justify-center gap-3 shadow-lg" disabled="" id="scanBtn">
<i className="w-6 h-6" data-lucide="scan-barcode"></i><span>Сканировать</span>
</button>
</div>
</section>

<section className="hidden min-h-screen px-6 pb-10 flex flex-col animate-fade-in" id="screen3">
<header className="py-8">
<h2 className="text-4xl font-semibold tracking-tight text-center">Сканирование</h2>
</header>
<div className="flex-1 rounded-xl border border-neutral-700 w-full grid place-items-center bg-neutral-800 text-neutral-400 text-center text-lg px-8" id="placeholder">
<p>Имитируется сканирование…</p>
</div>
<p aria-live="polite" className="pt-6 text-center text-7xl font-semibold tracking-tight" id="counter">0</p>
<div className="pt-8">
<button aria-label="Завершить сессию" className="w-full max-w-xs mx-auto px-10 py-5 rounded-xl bg-rose-600 hover:bg-rose-500 active:scale-95 transition font-medium flex items-center justify-center gap-3 shadow-lg" id="finishBtn">
<i className="w-6 h-6" data-lucide="check-circle"></i><span>Завершить</span>
</button>
</div>
</section>

<div aria-modal="true" className="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/60 backdrop-blur-sm" id="confirmModal" role="dialog">
<div className="bg-neutral-800 rounded-2xl p-8 w-[90%] max-w-sm flex flex-col gap-6 shadow-xl animate-slide-in">
<h3 className="text-2xl font-semibold tracking-tight">Завершить сессию?</h3>
<p className="text-neutral-400 text-base leading-relaxed">Все отсканированные данные будут отправлены, и сессия будет сброшена.</p>
<div className="flex flex-col sm:flex-row sm:justify-end gap-4 pt-2">
<button className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-neutral-600 hover:bg-neutral-700 active:scale-95 transition font-medium" id="cancelConfirm">Нет</button>
<button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition font-medium" id="confirmYes">Да</button>
</div>
</div>
</div>


<style>
    @keyframes fade-in { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }
    @keyframes slide-in { from { opacity: 0; transform: scale(.95) } to { opacity: 1; transform: none } }
    .animate-fade-in { animation: fade-in .6s both }
    .animate-slide-in { animation: slide-in .35s both }
  </style>

    </>
  );
}
