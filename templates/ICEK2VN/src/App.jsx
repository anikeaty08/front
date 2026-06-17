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



    ;(() => {
      const storageKey = 'groceryItems:v1'
      const $ = (sel, parent = document) => parent.querySelector(sel)

      const el = {
        dateLabel: $('#dateLabel'),
        clearBought: $('#clearBought'),
        listToBuy: $('#listToBuy'),
        listBought: $('#listBought'),
        countToBuy: $('#countToBuy'),
        countBought: $('#countBought'),
        statsTotal: $('#statsTotal'),
        statsBought: $('#statsBought'),
        newItemInput: $('#newItemInput'),
        addItemBtn: $('#addItemBtn'),
        sectionBought: $('#sectionBought'),
      }

      const today = new Date()
      const dateFmt = today.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
      el.dateLabel.textContent = dateFmt

      let items = load() || seed()

      function seed() {
        const defaults = [
          { id: iid(), name: 'Milk', done: false },
          { id: iid(), name: 'Eggs', done: false },
          { id: iid(), name: 'Bread', done: true },
          { id: iid(), name: 'Apples', done: false },
          { id: iid(), name: 'Chicken', done: false },
        ]
        save(defaults)
        return defaults
      }

      function iid() {
        return Math.random().toString(36).slice(2) + Date.now().toString(36)
      }

      function save(list) {
        try { localStorage.setItem(storageKey, JSON.stringify(list)) } catch {}
      }

      function load() {
        try { return JSON.parse(localStorage.getItem(storageKey) || 'null') } catch { return null }
      }

      function render() {
        // Partition
        const toBuy = items.filter(i => !i.done)
        const bought = items.filter(i => i.done)

        // Stats
        el.statsTotal.textContent = items.length
        el.statsBought.textContent = bought.length
        el.countToBuy.textContent = toBuy.length
        el.countBought.textContent = bought.length

        // Toggle bought section visibility
        el.sectionBought.style.display = bought.length ? '' : 'none'

        // Render lists
        el.listToBuy.innerHTML = ''
        el.listBought.innerHTML = ''

        toBuy.forEach(item => el.listToBuy.appendChild(renderItem(item)))
        bought.forEach(item => el.listBought.appendChild(renderItem(item)))
      }

      function renderItem(item) {
        const li = document.createElement('li')
        li.className = 'group rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow'

        const left = document.createElement('button')
        left.className = 'flex items-center gap-3 focus:outline-none'
        left.setAttribute('data-action', 'toggle')
        left.setAttribute('data-id', item.id)
        left.setAttribute('aria-pressed', item.done ? 'true' : 'false')

        const check = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        check.setAttribute('width', '22')
        check.setAttribute('height', '22')
        check.setAttribute('viewBox', '0 0 24 24')
        check.setAttribute('fill', 'none')
        check.setAttribute('stroke', 'currentColor')
        check.setAttribute('stroke-width', '1.5')
        check.classList.add('shrink-0', 'rounded-full', 'transition-colors')

        if (item.done) {
          check.classList.add('text-emerald-600')
          check.innerHTML = '<circle cx="12" cy="12" r="9" stroke="currentColor"></circle><path d="M16 10l-4 4-2-2" stroke="currentColor"></path>'
        } else {
          check.classList.add('text-neutral-400')
          check.innerHTML = '<circle cx="12" cy="12" r="9" stroke="currentColor"></circle>'
        }

        const name = document.createElement('div')
        name.className = 'text-[15px] text-neutral-900'
        name.textContent = item.name

        if (item.done) {
          name.classList.remove('text-neutral-900')
          name.classList.add('text-neutral-500', 'line-through')
        }

        left.appendChild(check)
        left.appendChild(name)

        const right = document.createElement('div')
        right.className = 'flex items-center gap-1.5'

        const del = document.createElement('button')
        del.className = 'p-2 rounded-lg text-neutral-500 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300'
        del.setAttribute('data-action', 'delete')
        del.setAttribute('data-id', item.id)
        del.setAttribute('aria-label', 'Delete item')

        const trash = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        trash.setAttribute('width', '18')
        trash.setAttribute('height', '18')
        trash.setAttribute('viewBox', '0 0 24 24')
        trash.setAttribute('fill', 'none')
        trash.setAttribute('stroke', 'currentColor')
        trash.setAttribute('stroke-width', '1.5')
        trash.innerHTML = '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>'
        del.appendChild(trash)

        right.appendChild(del)

        li.appendChild(left)
        li.appendChild(right)

        return li
      }

      function addItem(name) {
        const trimmed = (name || '').trim()
        if (!trimmed) return
        items.unshift({ id: iid(), name: trimmed, done: false })
        save(items)
        render()
      }

      function toggleItem(id) {
        const idx = items.findIndex(i => i.id === id)
        if (idx === -1) return
        items[idx].done = !items[idx].done
        save(items)
        render()
      }

      function deleteItem(id) {
        items = items.filter(i => i.id !== id)
        save(items)
        render()
      }

      // Events
      el.addItemBtn.addEventListener('click', () => {
        addItem(el.newItemInput.value)
        el.newItemInput.value = ''
        el.newItemInput.focus()
      })

      el.newItemInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          addItem(el.newItemInput.value)
          el.newItemInput.value = ''
        }
      })

      // Delegate list interactions
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]')
        if (!btn) return
        const action = btn.getAttribute('data-action')
        const id = btn.getAttribute('data-id')
        if (action === 'toggle') toggleItem(id)
        if (action === 'delete') deleteItem(id)
      })

      el.clearBought.addEventListener('click', () => {
        const hasBought = items.some(i => i.done)
        if (!hasBought) return
        items = items.filter(i => !i.done)
        save(items)
        render()
      })

      // Initial render
      render()
    })()
  
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
      
<div className="min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center">

<div className="w-full max-w-sm overflow-hidden bg-white border-neutral-200 border rounded-3xl shadow-lg">

<div className="bg-white h-6"></div>

<header className="px-5 pt-2 pb-4 bg-white sticky top-0 z-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
<span className="text-emerald-700 text-sm font-semibold tracking-tight font-sans">GL</span>
</div>
<div className="flex flex-col">
<h1 className="text-[22px] leading-6 tracking-tight font-sans font-semibold">Grocery List</h1>
<span className="text-[12px] text-neutral-500 font-sans" id="dateLabel">Mon, Sep 8</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-[12px] px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-700 hover:text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50/70 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 font-sans" id="clearBought">
              Clear bought
            </button>
</div>
</div>

<div className="mt-3 flex items-center gap-2 text-[12px]">
<div className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200 font-sans">
<span className="font-sans" id="statsTotal">0</span> items
          </div>
<div className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-sans">
<span className="font-sans" id="statsBought">0</span> bought
          </div>
</div>

<div className="mt-4 h-px bg-neutral-200/80"></div>
</header>

<main className="px-5 pb-28 pt-2">

<section className="mb-6" id="sectionToBuy">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<svg className="text-neutral-700" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M6 6h15l-1.5 9h-13z"></path>
<path d="M6 6l-2-2"></path>
<circle cx="9" cy="20" r="1"></circle>
<circle cx="18" cy="20" r="1"></circle>
</svg>
<h2 className="text-[15px] font-semibold tracking-tight text-neutral-800 font-sans">To buy</h2>
</div>
<span className="text-[12px] text-neutral-500 font-sans" id="countToBuy">0</span>
</div>
<ul className="space-y-2" id="listToBuy"></ul>
</section>

<section className="mb-2" id="sectionBought" style={{display: 'none'}}>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<svg className="text-neutral-700" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<h2 className="text-[15px] font-semibold tracking-tight text-neutral-800 font-sans">Bought</h2>
</div>
<span className="text-[12px] text-neutral-500 font-sans" id="countBought">0</span>
</div>
<ul className="space-y-2" id="listBought"></ul>
</section>
</main>

<div className="fixed inset-x-0 bottom-0">
<div className="mx-auto w-full max-w-sm">
<div className="border-t border-neutral-200 bg-white px-4 pt-3 pb-5 shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.15)]">
<div className="flex items-center gap-2">
<div className="flex-1">
<label className="sr-only font-sans" htmlFor="newItemInput">Add a new item</label>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-200 transition">
<svg className="text-neutral-500" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<circle cx="11" cy="11" r="7"></circle>
<path d="M21 21l-3.5-3.5"></path>
</svg>
<input autocomplete="off" className="w-full bg-transparent outline-none text-[15px] placeholder:text-neutral-400 text-neutral-900" id="newItemInput" inputmode="text" placeholder="Add a new item" type="text"/>
</div>
</div>
<button className="shrink-0 h-11 w-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 active:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300" id="addItemBtn">
<svg fill="none" height="22" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="22">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<p className="mt-2 text-[11px] text-neutral-500 font-sans">Press Enter to add quickly. Tap items to mark as bought.</p>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
