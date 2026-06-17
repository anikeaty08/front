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
        const $ = (sel, root=document) => root.querySelector(sel)
        const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel))

        // State
        const state = {
          view: 'all',          // 'all' | 'weight' | 'internet' | 'money'
          range: '30',          // '7','30','90','180','365','all'
          settings: {
            weightUnit: 'kg',
            currency: '$'
          },
          metrics: {
            weight: { name: 'Weight', color: '#34d399', id: 'weight', unitBase: 'kg', data: [] },      // emerald-400
            internet: { name: 'Internet', color: '#38bdf8', id: 'internet', unitBase: 'h', data: [] },  // sky-400
            money: { name: 'Money', color: '#f59e0b', id: 'money', unitBase: '$', data: [] }            // amber-400
          }
        }

        const STORAGE_KEY = 'stuch_data_v1'

        // Initialize
        function load() {
          try {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (raw) {
              const obj = JSON.parse(raw)
              if (obj.metrics) {
                for (const k of Object.keys(state.metrics)) {
                  state.metrics[k].data = (obj.metrics[k]?.data || []).map(d => ({...d}))
                }
              }
              if (obj.settings) Object.assign(state.settings, obj.settings)
            } else {
              seedDemo()
            }
          } catch(e) {
            console.warn('Load failed', e)
            seedDemo()
          }
        }

        function seedDemo() {
          // Generate the past 60 days demo data
          const today = new Date()
          const days = 60
          const rnd = (a,b)=>Math.random()*(b-a)+a
          const clamp = (v,a,b)=>Math.min(Math.max(v,a),b)

          let w = 78
          let h = 3.5
          let m = 35

          for (let i=days; i>=0; i--) {
            const d = new Date(today)
            d.setDate(d.getDate() - i)
            const date = d.toISOString().slice(0,10)
            // weight slight noise
            w = clamp(w + rnd(-0.25,0.25), 70, 85)
            state.metrics.weight.data.push({ date, value: +w.toFixed(1) })
            // internet usage varies on weekends
            const dow = d.getDay()
            const base = (dow===0||dow===6)? rnd(4,7) : rnd(2,4.5)
            h = clamp(base + rnd(-0.6,0.6), 0.3, 8)
            state.metrics.internet.data.push({ date, value: +h.toFixed(2) })
            // money daily spend
            m = clamp(rnd(10,60) + (dow===6? rnd(20,40):0), 0, 150)
            state.metrics.money.data.push({ date, value: +m.toFixed(2) })
          }
        }

        function save() {
          const obj = {
            settings: state.settings,
            metrics: {
              weight: { data: state.metrics.weight.data },
              internet: { data: state.metrics.internet.data },
              money: { data: state.metrics.money.data }
            }
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
        }

        // Helpers
        const parseISO = s => new Date(s + 'T00:00:00')
        const formatShort = d => d.toLocaleDateString(undefined, { month:'short', day:'numeric' })
        const formatFull = d => d.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric', weekday:'short' })
        const fmt = {
          weight: v => state.settings.weightUnit === 'lb' ? `${(v*2.20462).toFixed(1)} lb` : `${v.toFixed(1)} kg`,
          internet: v => `${v.toFixed(2)} h`,
          money: v => `${state.settings.currency}${v.toFixed(2)}`
        }

        // UI Elements
        const chartSvg = $('#chartSvg')
        const tooltip = $('#tooltip')
        const tooltipDate = $('#tooltipDate')
        const tooltipItems = $('#tooltipItems')
        const legend = $('#legend')
        const chartTitle = $('#chartTitle')
        const statWeight = $('#statWeight')
        const statInternet = $('#statInternet')
        const statMoney = $('#statMoney')
        const entryForm = $('#entryForm')
        const metricInput = $('#metricInput')
        const dateInput = $('#dateInput')
        const valueInput = $('#valueInput')
        const noteInput = $('#noteInput')
        const recentList = $('#recentList')
        const formUnitHint = $('#formUnitHint')
        const currencyInput = $('#currencyInput')

        // Controls
        $$('.view-btn').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            state.view = btn.getAttribute('data-view')
            highlightView()
            renderAll()
          })
        })
        function highlightView() {
          $$('.view-btn').forEach(b=>{
            if (b.getAttribute('data-view') === state.view) {
              b.classList.add('bg-neutral-800','text-white','border-neutral-700')
            } else {
              b.classList.remove('bg-neutral-800','text-white','border-neutral-700')
            }
          })
        }
        $$('.range-btn').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            state.range = btn.getAttribute('data-range')
            highlightRange()
            renderChart()
          })
        })
        function highlightRange() {
          $$('.range-btn').forEach(b=>{
            if (b.getAttribute('data-range') === state.range) {
              b.classList.add('bg-neutral-800','text-white','border','border-neutral-700')
            } else {
              b.classList.remove('bg-neutral-800','text-white','border','border-neutral-700')
            }
          })
        }

        // Settings bindings
        $$('.unit-btn').forEach(b=>{
          b.addEventListener('click', ()=>{
            const unit = b.getAttribute('data-weight-unit')
            state.settings.weightUnit = unit
            highlightUnits()
            save()
            renderAll()
          })
        })
        function highlightUnits() {
          $$('.unit-btn').forEach(b=>{
            if (b.getAttribute('data-weight-unit') === state.settings.weightUnit) {
              b.classList.add('bg-neutral-800','text-white','border-neutral-700')
            } else {
              b.classList.remove('bg-neutral-800','text-white','border-neutral-700')
            }
          })
        }

        currencyInput.addEventListener('input', ()=>{
          const val = currencyInput.value.trim().slice(0,3)
          state.settings.currency = val || '$'
          save()
          renderAll()
        })

        // Form
        entryForm.addEventListener('submit', (e)=>{
          e.preventDefault()
          const metric = metricInput.value
          const date = dateInput.value || new Date().toISOString().slice(0,10)
          let value = parseFloat(valueInput.value)
          if (isNaN(value)) return
          // Store base units; for weight convert from selected display unit to kg if needed
          if (metric === 'weight' && state.settings.weightUnit === 'lb') {
            value = value / 2.20462
          }
          const note = noteInput.value.trim()
          upsertEntry(metric, { date, value, note })
          valueInput.value = ''
          noteInput.value = ''
          renderAll()
          save()
        })

        function upsertEntry(metric, {date, value, note}) {
          const arr = state.metrics[metric].data
          const idx = arr.findIndex(d => d.date === date)
          if (idx >= 0) arr[idx] = { date, value, note }
          else arr.push({ date, value, note })
          arr.sort((a,b)=> a.date.localeCompare(b.date))
        }

        // Recent list
        function renderRecent() {
          const rows = []
          const merged = []
          for (const id of Object.keys(state.metrics)) {
            for (const d of state.metrics[id].data) {
              merged.push({ metric:id, ...d })
            }
          }
          merged.sort((a,b)=> b.date.localeCompare(a.date))
          const slice = merged.slice(0, 25)
          if (slice.length === 0) {
            recentList.innerHTML = `<div class="px-4 py-6 text-sm text-neutral-500">No entries yet. Add your first on the left.</div>`
            return
          }
          for (const item of slice) {
            const color = state.metrics[item.metric].color
            const label = state.metrics[item.metric].name
            const valueText =
              item.metric === 'weight' ? fmt.weight(item.value) :
              item.metric === 'internet' ? fmt.internet(item.value) :
              fmt.money(item.value)
            rows.push(`
              <div class="px-4 sm:px-5 py-3 flex items-center justify-between gap-4 hover:bg-neutral-900/30">
                <div class="min-w-0 flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full" style="background:${color}"></span>
                  <div class="min-w-0">
                    <div class="text-sm font-medium">${label} • ${valueText}</div>
                    <div class="text-xs text-neutral-500 truncate">${formatFull(parseISO(item.date))}${item.note? ' • ' + escapeHtml(item.note): ''}</div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button data-action="delete" data-metric="${item.metric}" data-date="${item.date}" class="rounded-md p-1.5 text-neutral-400 hover:text-red-400 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" title="Delete">
                    <!-- trash-2 -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                  </button>
                </div>
              </div>
            `)
          }
          recentList.innerHTML = rows.join('')
          $$('#recentList [data-action="delete"]').forEach(btn=>{
            btn.addEventListener('click', ()=>{
              const metric = btn.getAttribute('data-metric')
              const date = btn.getAttribute('data-date')
              const arr = state.metrics[metric].data
              const idx = arr.findIndex(d=>d.date===date)
              if (idx>=0) arr.splice(idx,1)
              save()
              renderAll()
            })
          })
        }

        // Stats
        function renderStats() {
          const today = new Date().toISOString().slice(0,10)
          const tw = state.metrics.weight.data.find(d=>d.date===today)
          const ti = state.metrics.internet.data.find(d=>d.date===today)
          const tm = state.metrics.money.data.find(d=>d.date===today)
          statWeight.textContent = tw? fmt.weight(tw.value) : '—'
          statInternet.textContent = ti? fmt.internet(ti.value) : '—'
          statMoney.textContent = tm? fmt.money(tm.value) : '—'
        }

        // Chart rendering
        function getRangeDates() {
          const allDates = []
          for (const id of Object.keys(state.metrics)) {
            for (const d of state.metrics[id].data) allDates.push(d.date)
          }
          const minAll = allDates.length ? allDates.reduce((a,b)=> a<b?a:b) : new Date().toISOString().slice(0,10)
          const maxAll = allDates.length ? allDates.reduce((a,b)=> a>b?a:b) : new Date().toISOString().slice(0,10)
          if (state.range === 'all') return [parseISO(minAll), parseISO(maxAll)]
          const days = parseInt(state.range,10)
          const end = parseISO(maxAll)
          const start = new Date(end)
          start.setDate(start.getDate() - (days-1))
          return [start, end]
        }

        function getDataInRange(metricId, start, end) {
          const arr = state.metrics[metricId].data
          return arr.filter(d=>{
            const t = +parseISO(d.date)
            return t >= +start && t <= +end
          })
        }

        function renderChart() {
          const [start, end] = getRangeDates()
          const W = chartSvg.clientWidth || chartSvg.parentElement.clientWidth
          const H = chartSvg.clientHeight || 380
          const pad = { t: 20, r: 16, b: 28, l: 36 }
          const width = Math.max(W, 320)
          const height = Math.max(H, 240)
          const xMin = pad.l, xMax = width - pad.r
          const yMin = pad.t, yMax = height - pad.b
          chartSvg.setAttribute('viewBox', `0 0 ${width} ${height}`)
          chartSvg.innerHTML = ''

          // X ticks (weekly)
          const daysSpan = Math.max(1, Math.round((+end - +start)/86400000))
          const x = time => xMin + ( (time - +start) / (+end - +start || 1) ) * (xMax - xMin)
          const yScale = (v, min, max) => yMax - ((v - min) / ((max - min) || 1)) * (yMax - yMin)

          // Build series
          let seriesDefs = []
          if (state.view === 'all') {
            for (const id of Object.keys(state.metrics)) {
              const data = getDataInRange(id, start, end)
              if (data.length === 0) continue
              const values = data.map(d=>d.value)
              const min = Math.min(...values)
              const max = Math.max(...values)
              const points = data.map(d=>{
                const t = +parseISO(d.date)
                const norm = (d.value - min) / ((max - min) || 1)
                return [ x(t), yMin + (1 - norm) * (yMax - yMin) ]
              })
              seriesDefs.push({ id, points, color: state.metrics[id].color, data, min, max, normalized: true })
            }
            chartTitle.textContent = 'All Metrics'
            legend.classList.remove('hidden')
          } else {
            const id = state.view
            const data = getDataInRange(id, start, end)
            const values = data.length? data.map(d=>d.value) : [0]
            const min = Math.min(...values)
            const max = Math.max(...values)
            const niceMin = min - (max-min)*0.1
            const niceMax = max + (max-min)*0.1
            const points = data.map(d=>{
              const t = +parseISO(d.date)
              return [ x(t), yScale(d.value, niceMin, niceMax) ]
            })
            seriesDefs = [{ id, points, color: state.metrics[id].color, data, min:niceMin, max:niceMax, normalized: false }]
            chartTitle.textContent = state.metrics[id].name
            legend.classList.add('hidden')
          }

          // Draw axes lines
          const axis = document.createElementNS('http://www.w3.org/2000/svg','g')
          axis.innerHTML = `
            <line x1="${xMin}" y1="${yMax}" x2="${xMax}" y2="${yMax}" stroke="#262626" stroke-width="1"/>
            <line x1="${xMin}" y1="${yMin}" x2="${xMin}" y2="${yMax}" stroke="#262626" stroke-width="1"/>
          `
          chartSvg.appendChild(axis)

          // X tick labels
          const ticks = Math.min(8, Math.max(2, Math.round(daysSpan/7)))
          for (let i=0;i<=ticks;i++){
            const t = +start + ( (+end - +start) * (i/ticks) )
            const d = new Date(t)
            const lx = x(t)
            const label = formatShort(d)
            const text = document.createElementNS('http://www.w3.org/2000/svg','text')
            text.setAttribute('x', lx)
            text.setAttribute('y', yMax + 18)
            text.setAttribute('fill', '#a3a3a3')
            text.setAttribute('font-size', '10')
            text.setAttribute('text-anchor', 'middle')
            text.textContent = label
            chartSvg.appendChild(text)
          }

          // Y tick labels (single metric only)
          if (state.view !== 'all') {
            const s = seriesDefs[0]
            const steps = 4
            for (let i=0;i<=steps;i++){
              const v = s.min + (s.max - s.min) * (i/steps)
              const ly = yScale(v, s.min, s.max)
              const text = document.createElementNS('http://www.w3.org/2000/svg','text')
              text.setAttribute('x', xMin - 6)
              text.setAttribute('y', ly + 3)
              text.setAttribute('fill', '#a3a3a3')
              text.setAttribute('font-size', '10')
              text.setAttribute('text-anchor', 'end')
              let label = ''
              if (state.view === 'weight') label = fmt.weight(v).replace(/[^\d\.\-].*$/,'')
              if (state.view === 'internet') label = fmt.internet(v)
              if (state.view === 'money') label = fmt.money(v)
              text.textContent = label
              chartSvg.appendChild(text)
            }
          }

          // Draw series
          const ns = 'http://www.w3.org/2000/svg'
          seriesDefs.forEach(s=>{
            if (s.points.length === 0) return
            const path = document.createElementNS(ns, 'path')
            const d = s.points.map((p,i)=> (i===0? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`)).join(' ')
            path.setAttribute('d', d)
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', s.color)
            path.setAttribute('stroke-width', '2')
            path.setAttribute('vector-effect','non-scaling-stroke')
            path.setAttribute('opacity','0.95')
            chartSvg.appendChild(path)

            // Points (for hover)
            s.points.forEach((p, i)=>{
              const c = document.createElementNS(ns,'circle')
              c.setAttribute('cx', p[0])
              c.setAttribute('cy', p[1])
              c.setAttribute('r', '3')
              c.setAttribute('fill', '#111827')
              c.setAttribute('stroke', s.color)
              c.setAttribute('stroke-width', '1.5')
              c.classList.add('data-point')
              c.dataset.metric = s.id
              c.dataset.index = i
              c.style.cursor = 'crosshair'
              chartSvg.appendChild(c)
            })
          })

          // Hover logic
          const rect = document.createElementNS('http://www.w3.org/2000/svg','rect')
          rect.setAttribute('x', xMin)
          rect.setAttribute('y', yMin)
          rect.setAttribute('width', xMax-xMin)
          rect.setAttribute('height', yMax-yMin)
          rect.setAttribute('fill', 'transparent')
          chartSvg.appendChild(rect)

          const vline = document.createElementNS(ns, 'line')
          vline.setAttribute('x1', xMin)
          vline.setAttribute('x2', xMin)
          vline.setAttribute('y1', yMin)
          vline.setAttribute('y2', yMax)
          vline.setAttribute('stroke', '#404040')
          vline.setAttribute('stroke-width', '1')
          vline.setAttribute('opacity', '0')
          chartSvg.appendChild(vline)

          function showTooltipAt(clientX) {
            const pt = chartSvg.createSVGPoint()
            pt.x = clientX
            const svgP = pt.matrixTransform(chartSvg.getScreenCTM().inverse())
            const xPos = Math.min(xMax, Math.max(xMin, svgP.x))
            vline.setAttribute('x1', xPos)
            vline.setAttribute('x2', xPos)
            vline.setAttribute('opacity', '1')

            // Find nearest date to xPos
            const totalMs = (+end - +start) || 1
            const ratio = (xPos - xMin) / (xMax - xMin)
            const tGuess = +start + ratio * totalMs
            const dateGuess = new Date(tGuess)
            const dStr = dateGuess.toISOString().slice(0,10)
            tooltipDate.textContent = formatFull(parseISO(dStr))
            tooltipItems.innerHTML = ''

            const items = []
            if (state.view === 'all') {
              for (const id of Object.keys(state.metrics)) {
                const data = getDataInRange(id, start, end)
                if (data.length === 0) continue
                // nearest point by date
                let nearest = data.reduce((best, cur)=>{
                  const diff = Math.abs(+parseISO(cur.date) - tGuess)
                  return diff < best.diff ? { item: cur, diff } : best
                }, { item: data[0], diff: Math.abs(+parseISO(data[0].date)-tGuess) }).item
                items.push({ id, label: state.metrics[id].name, color: state.metrics[id].color, value: nearest.value })
              }
            } else {
              const id = state.view
              const data = getDataInRange(id, start, end)
              if (data.length) {
                let nearest = data.reduce((best, cur)=>{
                  const diff = Math.abs(+parseISO(cur.date) - tGuess)
                  return diff < best.diff ? { item: cur, diff } : best
                }, { item: data[0], diff: Math.abs(+parseISO(data[0].date)-tGuess) }).item
                items.push({ id, label: state.metrics[id].name, color: state.metrics[id].color, value: nearest.value })
              }
            }
            for (const it of items) {
              const text =
                it.id === 'weight' ? fmt.weight(it.value) :
                it.id === 'internet' ? fmt.internet(it.value) :
                fmt.money(it.value)
              const row = document.createElement('div')
              row.className = 'flex items-center gap-2'
              row.innerHTML = `<span class="w-2 h-2 rounded-full" style="background:${it.color}"></span><span>${it.label}</span><span class="ml-auto font-medium">${text}</span>`
              tooltipItems.appendChild(row)
            }

            tooltip.style.left = Math.min(window.innerWidth-200, Math.max(12, chartSvg.getBoundingClientRect().left + (xPos - xMin) - 80)) + 'px'
            tooltip.style.top = (chartSvg.getBoundingClientRect().top + 12) + 'px'
            tooltip.classList.remove('hidden')
          }

          rect.addEventListener('mousemove', (e)=> showTooltipAt(e.clientX))
          rect.addEventListener('mouseenter', ()=> { vline.setAttribute('opacity','1'); tooltip.classList.remove('hidden') })
          rect.addEventListener('mouseleave', ()=> { vline.setAttribute('opacity','0'); tooltip.classList.add('hidden') })
          window.addEventListener('scroll', ()=> tooltip.classList.add('hidden'), { passive:true })
        }

        // Export/Import/Reset
        $('#exportBtn').addEventListener('click', ()=>{
          const blob = new Blob([ localStorage.getItem(STORAGE_KEY) || '{}' ], { type: 'application/json' })
          const a = document.createElement('a')
          a.href = URL.createObjectURL(blob)
          a.download = `stuch-export-${new Date().toISOString().slice(0,10)}.json`
          document.body.appendChild(a)
          a.click()
          a.remove()
        })
        $('#importInput').addEventListener('change', async (e)=>{
          const file = e.target.files?.[0]
          if (!file) return
          try {
            const text = await file.text()
            const obj = JSON.parse(text)
            if (!obj || !obj.metrics) throw new Error('Invalid file')
            localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
            load()
            renderAll()
          } catch(err) {
            alert('Import failed. Please select a valid export file.')
          } finally {
            e.target.value = ''
          }
        })

        $('#resetBtn').addEventListener('click', ()=>{
          if (!confirm('This will clear all data. Continue?')) return
          localStorage.removeItem(STORAGE_KEY)
          location.reload()
        })

        $('#clearRecentBtn').addEventListener('click', ()=>{
          if (!confirm('Clear all entries across all metrics?')) return
          for (const k of Object.keys(state.metrics)) state.metrics[k].data = []
          save()
          renderAll()
        })

        // Download chart as PNG (basic rasterization)
        $('#downloadPngBtn').addEventListener('click', ()=>{
          const serializer = new XMLSerializer()
          const svgStr = serializer.serializeToString(chartSvg)
          const canvas = document.createElement('canvas')
          canvas.width = chartSvg.clientWidth * 2
          canvas.height = chartSvg.clientHeight * 2
          const ctx = canvas.getContext('2d')
          const img = new Image()
          const blob = new Blob([svgStr], {type:'image/svg+xml;charset=utf-8'})
          const url = URL.createObjectURL(blob)
          img.onload = () => {
            ctx.fillStyle = '#0a0a0a'
            ctx.fillRect(0,0,canvas.width,canvas.height)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            URL.revokeObjectURL(url)
            canvas.toBlob((pngBlob)=>{
              const a = document.createElement('a')
              a.href = URL.createObjectURL(pngBlob)
              a.download = `stuch-chart-${Date.now()}.png`
              document.body.appendChild(a)
              a.click()
              a.remove()
            })
          }
          img.src = url
        })

        // Misc
        function escapeHtml(s='') {
          return s.replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]))
        }

        function renderAll() {
          highlightView()
          highlightRange()
          highlightUnits()
          currencyInput.value = state.settings.currency
          updateFormHint()
          renderChart()
          renderRecent()
          renderStats()
        }

        function updateFormHint() {
          const cur = metricInput.value
          let hint = ''
          if (cur === 'weight') hint = `Unit: ${state.settings.weightUnit}`
          if (cur === 'internet') hint = 'Unit: hours'
          if (cur === 'money') hint = `Unit: ${state.settings.currency}`
          formUnitHint.textContent = hint
        }
        metricInput.addEventListener('change', updateFormHint)

        // Initialize defaults
        load()
        // Pre-fill date
        dateInput.value = new Date().toISOString().slice(0,10)
        updateFormHint()
        renderAll()

        // Responsive
        window.addEventListener('resize', debounce(()=> renderChart(), 150))
        function debounce(fn, ms) {
          let t
          return (...args) => { clearTimeout(t); t=setTimeout(()=>fn(...args), ms) }
        }
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
      
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

<header className="flex items-center justify-between gap-4 pb-6 border-b border-neutral-900">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800">
<span className="text-xs font-semibold tracking-tight">ST</span>
</div>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Stuch</h1>
<p className="text-sm text-neutral-400">Track weight, internet time, and daily spending</p>
</div>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900/60 p-1">
<button className="range-btn px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="7">7D</button>
<button className="range-btn px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="30">30D</button>
<button className="range-btn px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="90">90D</button>
<button className="range-btn hidden sm:inline-flex px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="180">180D</button>
<button className="range-btn px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="365">1Y</button>
<button className="range-btn px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-range="all">ALL</button>
</div>

<button className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="exportBtn">
<svg className="-ml-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            Export
          </button>

<label className="relative cursor-pointer flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-700">
<input accept="application/json" className="sr-only" id="importInput" type="file"/>
<svg className="-ml-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            Import
          </label>
</div>
</header>
<main className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 space-y-6">

<section className="rounded-xl border border-neutral-900 bg-neutral-950/40">
<div className="px-4 py-3 border-b border-neutral-900">
<h2 className="text-base font-semibold tracking-tight">View</h2>
</div>
<div className="p-2 grid grid-cols-2 gap-2">
<button className="view-btn group flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 col-span-2" data-view="all">
<span className="inline-flex w-5 h-5 items-center justify-center rounded-sm bg-neutral-900 ring-1 ring-inset ring-neutral-800">

<svg className="text-neutral-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-3 3"></path></svg>
</span>
                All Metrics (normalized)
              </button>
<button className="view-btn group flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-view="weight">
<span className="w-2 h-2 rounded-full bg-emerald-400/90 ring-2 ring-emerald-400/20"></span>
                Weight
              </button>
<button className="view-btn group flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-view="internet">
<span className="w-2 h-2 rounded-full bg-sky-400/90 ring-2 ring-sky-400/20"></span>
                Internet
              </button>
<button className="view-btn group flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 col-span-2" data-view="money">
<span className="w-2 h-2 rounded-full bg-amber-400/90 ring-2 ring-amber-400/20"></span>
                Money
              </button>
</div>
</section>

<section className="rounded-xl border border-neutral-900 bg-neutral-950/40">
<div className="px-4 py-3 border-b border-neutral-900">
<h2 className="text-base font-semibold tracking-tight">Today</h2>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-sm text-neutral-400">Weight</span>
</div>
<div className="text-sm font-medium" id="statWeight">—</div>
</div>
<div className="h-px bg-neutral-900"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
<span className="text-sm text-neutral-400">Internet</span>
</div>
<div className="text-sm font-medium" id="statInternet">—</div>
</div>
<div className="h-px bg-neutral-900"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<span className="text-sm text-neutral-400">Money</span>
</div>
<div className="text-sm font-medium" id="statMoney">—</div>
</div>
</div>
</section>

<section className="rounded-xl border border-neutral-900 bg-neutral-950/40">
<div className="px-4 py-3 border-b border-neutral-900 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight">Settings</h2>
<button className="text-xs text-neutral-400 hover:text-red-400 hover:underline decoration-neutral-800 hover:decoration-red-500 focus:outline-none" id="resetBtn">Reset all</button>
</div>
<div className="p-4 space-y-4">
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Weight unit</label>
<div className="grid grid-cols-2 gap-2">
<button className="unit-btn w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-weight-unit="kg">kg</button>
<button className="unit-btn w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" data-weight-unit="lb">lb</button>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Currency</label>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700" id="currencyInput" maxlength="3" placeholder="$" type="text" />
</input></div>
</div>
</section>
</aside>

<section className="lg:col-span-9 space-y-6">

<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 overflow-hidden">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-900">
<div className="flex items-center gap-2">
<span className="inline-flex w-7 h-7 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-inset ring-neutral-800">

<svg className="text-neutral-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</span>
<div className="text-sm sm:text-base font-semibold tracking-tight" id="chartTitle">All Metrics</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-3 text-xs text-neutral-400" id="legend">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Weight</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-400"></span>Internet</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Money</div>
</div>
<button className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700" id="downloadPngBtn">

<svg className="inline-block -mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 pointer-events-none">
<div className="h-full w-full opacity-[0.35]" style={{backgroundImage: 'linear-gradient(to bottom, rgba(38,38,38,.35) 1px, transparent 1px), linear-gradient(to right, rgba(38,38,38,.35) 1px, transparent 1px)', backgroundSize: '100% 40px, 56px 100%'}}></div>
</div>
<div className="relative">
<svg className="w-full h-[320px] sm:h-[380px] md:h-[420px]" id="chartSvg"></svg>

<div className="hidden absolute rounded-lg border border-neutral-800 bg-neutral-900/95 px-3 py-2 text-xs shadow-sm" id="tooltip">
<div className="text-neutral-400 mb-1" id="tooltipDate"></div>
<div className="space-y-0.5" id="tooltipItems"></div>
</div>
</div>
</div>
<div className="px-4 sm:px-5 py-3 border-t border-neutral-900 text-xs text-neutral-500">
              Tip: In “All Metrics” view, lines are normalized to show trend shape together. Switch to a single metric for exact scale.
            </div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-1 rounded-2xl border border-neutral-900 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-900">
<h3 className="text-base font-semibold tracking-tight">Add entry</h3>
</div>
<form className="p-4 space-y-4" id="entryForm">
<div className="grid grid-cols-2 gap-3">
<div className="col-span-2">
<label className="block text-xs text-neutral-400 mb-1.5">Metric</label>
<select className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-700" id="metricInput">
<option value="weight">Weight</option>
<option value="internet">Internet</option>
<option value="money">Money</option>
</select>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Date</label>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-700" id="dateInput" type="date"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Value</label>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700" id="valueInput" placeholder="0" step="0.01" type="number"/>
</div>
<div className="col-span-2">
<label className="block text-xs text-neutral-400 mb-1.5">Note (optional)</label>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700" id="noteInput" maxlength="80" placeholder="Morning weigh-in, evening screen time, etc." type="text"/>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="text-xs text-neutral-500" id="formUnitHint">Unit: kg / h / $</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700">

<svg className="-ml-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
                    Add
                  </button>
</div>
</form>
</div>

<div className="xl:col-span-2 rounded-2xl border border-neutral-900 bg-neutral-950/60 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-900 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Recent entries</h3>
<button className="text-xs text-neutral-400 hover:text-red-400 hover:underline focus:outline-none" id="clearRecentBtn">Clear all</button>
</div>
<div className="divide-y divide-neutral-900" id="recentList">

</div>
<div className="px-4 py-3 text-xs text-neutral-500 border-t border-neutral-900">
                Entries are stored locally in your browser.
              </div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
