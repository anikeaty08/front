import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Seed data
    const seed = [
      {id:'g1', name:'Customer Centricity', team:'', owner:'', progress:0, status:'not', parent:null, expanded:true},
      {id:'g1a', name:'Deliver value faster by speeding up our development time', team:'Product', owner:'Vicki Hansen', progress:0.28, status:'off', parent:'g1', expanded:true},
      {id:'g1a1', name:'Decrease review time by 4%', team:'Product', owner:'Nellie Burke', progress:0.22, status:'progressing', parent:'g1a'},
      {id:'g1a2', name:'Reduce the average number of bugs per new feature', team:'Product', owner:'Kristen Dixon', progress:0.40, status:'not', parent:'g1a'},
      {id:'g1b', name:'Improve customer loyalty and retention', team:'Customer Success', owner:'Enrique Hansen', progress:0.61, status:'progressing', parent:'g1'},
      {id:'g1c', name:'Turn our customers into ambassadors', team:'Customer Success', owner:'Enrique Hansen', progress:0.70, status:'on', parent:'g1'},
      {id:'g1d', name:'Improve our product reliability and performance', team:'Product', owner:'Vicki Hansen', progress:0.47, status:'off', parent:'g1'},

      {id:'g2', name:'High-Performance Culture', team:'', owner:'', progress:0, status:'not', parent:null, expanded:true},
      {id:'g2a', name:'Create a great and motivating place to work', team:'Human Resources', owner:'Tobi Bell', progress:0.31, status:'off', parent:'g2'},

      {id:'g3', name:'Operational Excellence', team:'', owner:'', progress:0, status:'not', parent:null, expanded:true},
      {id:'g3a', name:'Ensure compliance with industry standards and regulations', team:'Operations', owner:'Daily Social', progress:0.64, status:'on', parent:'g3'},
      {id:'g3b', name:'Get billing and revenue management to a new level', team:'Operations', owner:'Daily Social', progress:0.47, status:'off', parent:'g3'},
      {id:'g3c', name:'Streamline talent acquisition for a quicker and modern hiring process', team:'Human Resources', owner:'Bryan Bowman', progress:0.64, status:'on', parent:'g3'},

      {id:'g4', name:'Market Expansion & Growth', team:'', owner:'', progress:0, status:'not', parent:null, expanded:true},
      {id:'g4a', name:'Fill the Sales pipeline with tons of qualified organizations', team:'Marketing', owner:'Francis Kim', progress:0.36, status:'off', parent:'g4'},
      {id:'g4b', name:'Build a powerful Outbound engine that drives significant new revenue', team:'Sales', owner:'Amber Bowman', progress:0.69, status:'on', parent:'g4'}
    ];

    const storageKey = 'goal-magics-data-v1';
    let goals = JSON.parse(localStorage.getItem(storageKey) || 'null') || seed;

    let sortState = null;    // 'progress-asc' | 'progress-desc'
    let statusFilter = 'any';
    let searchTerm = '';

    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    function save(){ localStorage.setItem(storageKey, JSON.stringify(goals)); }
    const byId = id => goals.find(g=>g.id===id);
    const childrenOf = id => goals.filter(g=>g.parent===id);
    const roots = _=> goals.filter(g=>!g.parent);
    function levelOf(g){ let lvl=0, p=g; while(p && p.parent){ p=byId(p.parent); lvl++; } return lvl; }
    const pct = n => Math.round(n*100);
    const fuzzy = (t, q) => (t||'').toLowerCase().includes((q||'').toLowerCase());

    function statusLabel(s){
      return s==='on'?'On track': s==='off'?'Off track': s==='progressing'?'Progressing':'Not started';
    }
    function statusPillClasses(s){
      if(s==='on') return 'text-[#1ea887] bg-[#e8faf4]';
      if(s==='off') return 'text-[#c84761] bg-[#ffe8ee]';
      if(s==='progressing') return 'text-[#af7b0b] bg-[#fff5e6]';
      return 'text-[#69707d] bg-[#eef1f5]';
    }
    function progressGradient(s){
      if(s==='on') return 'linear-gradient(90deg,#45c8a3,#2b8d78)';
      if(s==='off') return 'linear-gradient(90deg,#f07c8d,#d85767)';
      if(s==='progressing') return 'linear-gradient(90deg,#f7b84b,#f29b1a)';
      return 'linear-gradient(90deg,#6a62ff,#a27dff)';
    }
    function initials(name){
      const parts = (name||'').trim().split(' ').filter(Boolean);
      return ((parts[0]?.[0]||'?') + (parts[1]?.[0]||'')).toUpperCase();
    }

    // Tabs
    $$('.tab').forEach(t=>{
      t.addEventListener('click',()=>{
        $$('.tab').forEach(x=>{
          x.classList.remove('text-[#0b1320]');
          x.dataset.active = 'false';
          x.classList.remove('after:absolute','after:left-0','after:right-0','after:-bottom-px','after:h-[3px]','after:rounded','after:bg-[#0b1320]');
        });
        t.classList.add('text-[#0b1320]');
        t.dataset.active = 'true';
        t.classList.add('after:absolute','after:left-0','after:right-0','after:-bottom-px','after:h-[3px]','after:rounded','after:bg-[#0b1320]');
        const id = t.dataset.tab;
        $('#view-cascade').classList.toggle('hidden', id!=='cascade');
        $('#view-card').classList.toggle('hidden', id!=='card');
        $('#view-tree').classList.toggle('hidden', id!=='tree');
        if(id==='card') renderCards();
        if(id==='tree') renderTree();
        lucide.createIcons({attrs:{'stroke-width':1.5}});
      });
    });
    $('[data-open-tree]')?.addEventListener('click',()=>{
      document.querySelector('.tab[data-tab="tree"]').click();
    });

    // Search
    $('#searchInput').addEventListener('input', e=>{
      searchTerm = e.target.value.trim();
      renderTable();
    });

    // Expand/collapse all
    $('#btn-expand-all').addEventListener('click',()=>{
      goals.forEach(g=>{ if(childrenOf(g.id).length) g.expanded = true; });
      save(); renderTable();
    });
    $('#btn-collapse-all').addEventListener('click',()=>{
      goals.forEach(g=>{ if(childrenOf(g.id).length) g.expanded = false; });
      save(); renderTable();
    });

    // Sort and filter
    $('#sortProgress').addEventListener('click',()=>{
      sortState = sortState==='progress-desc' ? 'progress-asc' : 'progress-desc';
      renderTable();
    });
    $('#filterStatus').addEventListener('click',()=>{
      const order = ['any','on','progressing','off','not'];
      const next = order[(order.indexOf(statusFilter)+1)%order.length];
      statusFilter = next;
      $('#filterStatus').textContent = 'Filter: ' + (next==='any'?'Any':statusLabel(next));
      renderTable();
    });

    // Table rendering
    function renderTable(){
      const container = $('#tableBody');
      container.innerHTML = '';

      // Build flat list honoring expand/collapse
      function walk(id, arr){
        const kids = childrenOf(id);
        for(const k of kids){
          arr.push(k);
          if(k.expanded!==false) walk(k.id, arr);
        }
      }
      let list = [];
      for(const r of roots()){
        list.push(r);
        if(r.expanded!==false) walk(r.id, list);
      }

      // Search + filter
      if(searchTerm){
        list = list.filter(g => fuzzy(g.name, searchTerm) || fuzzy(g.team, searchTerm) || fuzzy(g.owner, searchTerm));
      }
      if(statusFilter!=='any'){
        list = list.filter(g => g.status===statusFilter);
      }

      // Sorting
      if(sortState){
        const dir = sortState==='progress-desc' ? -1 : 1;
        list.sort((a,b)=> (a.progress - b.progress) * dir);
      }

      for(const g of list){
        const row = document.createElement('div');
        row.className = 'trow grid items-center px-3 min-h-[44px] border-t border-[#f0f2f5] bg-white hover:bg-[#fcfdff] transition';
        row.style.gridTemplateColumns = '1fr 180px 200px 200px 160px';

        // Name cell
        const nameCell = document.createElement('div');
        nameCell.className = 'cell flex items-center gap-2 min-w-0';
        const lvl = levelOf(g);
        const ind = document.createElement('div');
        ind.style.marginLeft = (lvl*16) + 'px';
        ind.className = 'w-4 shrink-0';
        nameCell.appendChild(ind);

        const hasKids = childrenOf(g.id).length>0;
        if(hasKids){
          const btn = document.createElement('button');
          btn.className = 'toggle w-[18px] h-[18px] rounded-md grid place-items-center text-[#5e6a75] hover:bg-[#f0f2f5] transition';
          btn.innerHTML = `<i data-lucide="${g.expanded!==false?'chevron-down':'chevron-right'}" class="w-4 h-4"></i>`;
          btn.title = g.expanded!==false ? 'Collapse' : 'Expand';
          btn.addEventListener('click', (e)=>{ e.stopPropagation(); g.expanded = !(g.expanded!==false); save(); renderTable(); });
          nameCell.appendChild(btn);
        } else {
          const spacer = document.createElement('div'); spacer.style.width='18px'; nameCell.appendChild(spacer);
        }

        const emoji = document.createElement('span');
        emoji.textContent = '🎯';
        emoji.className = 'inline-grid place-items-center w-6 h-6 rounded-md text-[#3b3bd1] bg-[#eef3ff] text-sm';
        nameCell.appendChild(emoji);

        const title = document.createElement('div');
        title.textContent = g.name;
        title.contentEditable = 'true';
        title.className = 'flex-1 truncate px-1 rounded focus:outline-none focus:ring-2 focus:ring-[#e6e9ff] bg-transparent';
        title.addEventListener('blur',()=>{ g.name = title.textContent.trim(); save(); renderEverything(); });
        nameCell.appendChild(title);

        // Team cell
        const teamCell = document.createElement('div');
        teamCell.className = 'cell flex items-center';
        if(g.team){
          const tp = document.createElement('span');
          tp.className = 'inline-flex items-center gap-1.5 text-[#3a414d] bg-[#f5f6f9] border border-[#e8eaee] px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap';
          tp.textContent = g.team;
          teamCell.appendChild(tp);
        } else {
          teamCell.innerHTML = '<span class="text-[#6b7380]">—</span>';
        }

        // Owner cell
        const ownerCell = document.createElement('div');
        ownerCell.className = 'cell flex items-center gap-2 overflow-hidden';
        const av = document.createElement('div');
        av.className = 'avatar w-[26px] h-[26px] rounded-full bg-[#eef1f6] border border-[#e8eaee] grid place-items-center text-[12px] font-bold text-[#4b5563]';
        av.textContent = initials(g.owner||'');
        ownerCell.appendChild(av);
        const ownerName = document.createElement('div');
        ownerName.className = 'truncate px-1 rounded focus:outline-none focus:ring-2 focus:ring-[#e6e9ff] bg-transparent';
        ownerName.contentEditable = 'true';
        ownerName.textContent = g.owner || '—';
        ownerName.addEventListener('blur',()=>{ g.owner = ownerName.textContent.trim()==='—'?'':ownerName.textContent.trim(); av.textContent = initials(g.owner||''); save(); renderCards(); renderTree(); });
        ownerCell.appendChild(ownerName);

        // Progress cell
        const progressCell = document.createElement('div');
        progressCell.className = 'cell flex items-center';
        const wrap = document.createElement('div');
        wrap.className = 'flex items-center gap-2 w-full';
        const bar = document.createElement('div');
        bar.className = 'h-2 w-full rounded-full bg-[#d8dbe2] overflow-hidden cursor-pointer';
        const fill = document.createElement('span');
        fill.className = 'block h-full rounded-full';
        fill.style.width = pct(g.progress)+'%';
        fill.style.background = progressGradient(g.status);
        bar.title = 'Click to adjust';
        bar.addEventListener('click', ()=>{
          const nv = prompt('Set progress %', pct(g.progress));
          if(nv===null) return;
          const v = Math.max(0, Math.min(100, parseInt(nv,10)||0));
          g.progress = v/100; save(); renderEverything();
        });
        bar.appendChild(fill);
        const pctTxt = document.createElement('div');
        pctTxt.className = 'min-w-[38px] text-right text-[#3a414d] font-bold';
        pctTxt.textContent = pct(g.progress)+'%';
        wrap.append(bar, pctTxt);
        progressCell.appendChild(wrap);

        // Status cell
        const statusCell = document.createElement('div');
        statusCell.className = 'cell flex items-center';
        const st = document.createElement('button');
        st.className = `inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-semibold ${statusPillClasses(g.status)} hover:ring-1 hover:ring-[#e8eaee] transition`;
        st.innerHTML = `<span class="w-2 h-2 rounded-full" style="background:currentColor"></span>${statusLabel(g.status)}`;
        st.title = 'Click to cycle status';
        st.addEventListener('click',()=>{
          const order=['on','progressing','off','not'];
          g.status = order[(order.indexOf(g.status)+1)%order.length];
          save(); renderEverything();
        });
        statusCell.appendChild(st);

        row.append(nameCell, teamCell, ownerCell, progressCell, statusCell);
        container.appendChild(row);
      }

      updateOverall();
      lucide.createIcons({attrs:{'stroke-width':1.5}});
    }

    function updateOverall(){
      const leafs = goals.filter(g=>childrenOf(g.id).length===0);
      const avg = leafs.length? leafs.reduce((a,c)=>a+c.progress,0)/leafs.length : 0;
      const v = Math.round(avg*100);
      const meter = $('#overallMeter');
      const pctTxt = $('#overallPct');
      if(meter){ meter.style.width = v+'%'; }
      if(pctTxt){ pctTxt.textContent = v+'%'; }
    }

    // Card view
    function renderCards(){
      const grid = $('#cardGrid'); grid.innerHTML = '';
      // Show second-level under each root if available, else any non-root
      const level1 = goals.filter(g=> g.parent && byId(g.parent)?.parent===null);
      const pick = goals.filter(g=> g.parent);
      const list = (level1.length ? level1 : pick).slice(0, 4);

      list.forEach(g=>{
        const el = document.createElement('div');
        el.className = 'goal-card bg-white border border-[#e8eaee] rounded-2xl shadow-sm p-4 min-h-[140px] flex flex-col gap-2 hover:ring-1 hover:ring-[#e8eaee] transition';
        el.innerHTML = `
          <h4 class="m-0 text-[18px] font-semibold">${g.name}</h4>
          <div class="text-[13px] text-[#6b7380] leading-relaxed">
            <div><b class="font-semibold text-[#3a3f4c]">Owner:</b> ${g.owner || '—'}</div>
            <div><b class="font-semibold text-[#3a3f4c]">Dept:</b> ${g.team || '—'}</div>
            <div><b class="font-semibold text-[#3a3f4c]">Progress:</b> ${pct(g.progress)}%</div>
          </div>
          <div class="h-2 rounded-full bg-[#eef0f8] overflow-hidden">
            <span class="block h-full rounded-full" style="width:${pct(g.progress)}%; background:#5c5ce0"></span>
          </div>
        `;
        grid.appendChild(el);
      });
      updateOverall();
    }

    // Tree view
    function renderTree(){
      const container = $('#tree'); container.innerHTML = '';

      const lvl0 = roots();
      const lvl1 = lvl0.flatMap(r => childrenOf(r.id));
      const lvl2 = lvl1.flatMap(r => childrenOf(r.id));
      const levels = [lvl0, lvl1, lvl2].filter(col=>col.length);

      levels.forEach((col, colIndex)=>{
        const colEl = document.createElement('div');
        colEl.className = 'tree-col min-w-[280px] flex flex-col gap-9 relative pr-6';
        if(colIndex < levels.length-1){
          const divider = document.createElement('div');
          divider.className = 'absolute right-0 top-0 bottom-0 border-r border-dashed border-[#e6e8ee] opacity-80';
          colEl.appendChild(divider);
        }

        col.forEach(node=>{
          const card = document.createElement('div');
          card.className = 't-card relative bg-white border border-[#e8eaee] rounded-xl shadow-sm w-[280px] p-3 hover:ring-1 hover:ring-[#e8eaee] transition';
          const prog = pct(node.progress);
          const lineColor = node.status==='on'?'#1ea887': node.status==='off'?'#d96b78': node.status==='progressing'?'#f0a826':'#6a62ff';
          card.innerHTML = `
            <div class="title font-bold mb-2">${node.name}</div>
            ${node.team ? `<div class="inline-flex items-center gap-1.5 text-[#3a414d] bg-[#f5f6f9] border border-[#e8eaee] px-2 py-1 rounded-lg text-xs font-semibold mb-1.5">${node.team}</div>`:''}
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-[#eef1f6] border border-[#e8eaee] grid place-items-center text-[12px] font-bold text-[#4b5563]">${initials(node.owner||'')}</div>
              <div class="text-[13px]">${node.owner || '—'}</div>
              <div class="ml-auto"></div>
              <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-semibold ${statusPillClasses(node.status)}">
                ${statusLabel(node.status)}
              </span>
            </div>
            <div class="h-2 rounded-full bg-[#eef0f8] overflow-hidden my-2">
              <span class="block h-full rounded-full" style="width:${prog}%; background:${lineColor}"></span>
            </div>
            <div class="text-right text-[12px] font-bold text-[#667084]">${prog}%</div>
          `;
          card.style.cursor='pointer';
          card.title='Click to locate in Cascade';
          card.addEventListener('click',()=>{
            document.querySelector('.tab[data-tab="cascade"]').click();
            renderTable();
            // Try to find row by name and highlight
            const rows = $$('#tableBody .trow');
            const row = rows.find(r => r.querySelector('.cell [contenteditable="true"]')?.textContent.trim() === node.name.trim());
            if(row){
              row.scrollIntoView({behavior:'smooth', block:'center'});
              row.style.boxShadow='inset 0 0 0 2px #cdd5ff';
              setTimeout(()=>{ row.style.boxShadow=''; }, 1500);
            }
          });
          colEl.appendChild(card);
        });

        container.appendChild(colEl);
      });
      lucide.createIcons({attrs:{'stroke-width':1.5}});
    }

    // Modal
    const modal = $('#modal');
    function openModal(){
      const sel = $('#f_parent');
      sel.innerHTML = '<option value="">No parent (top-level)</option>';
      goals.forEach(g=> sel.innerHTML += `<option value="${g.id}">${g.name}</option>`);
      modal.classList.remove('hidden');
      $('#f_name').focus();
    }
    function closeModal(){ modal.classList.add('hidden'); }
    $('#btn-new').addEventListener('click', openModal);
    $('#closeModal').addEventListener('click', closeModal);
    $('#cancelModal').addEventListener('click', closeModal);
    $('#saveModal').addEventListener('click', ()=>{
      const id = 'g' + Math.random().toString(36).slice(2,7);
      const item = {
        id,
        name: $('#f_name').value.trim() || 'Untitled goal',
        team: $('#f_team').value.trim(),
        owner: $('#f_owner').value.trim(),
        parent: $('#f_parent').value || null,
        status: $('#f_status').value,
        progress: Math.min(100, Math.max(0, parseInt($('#f_progress').value||'0',10)))/100,
        expanded:true
      };
      goals.push(item); save(); closeModal(); renderEverything();
      // reset form
      $('#f_name').value=''; $('#f_team').value=''; $('#f_owner').value=''; $('#f_parent').value=''; $('#f_status').value='on'; $('#f_progress').value='0';
    });

    function renderEverything(){
      renderTable();
      if(!$('#view-card').classList.contains('hidden')) renderCards();
      if(!$('#view-tree').classList.contains('hidden')) renderTree();
      // icons
      lucide.createIcons({attrs:{'stroke-width':1.5}});
    }

    // Initial render
    renderEverything();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grid grid-cols-[260px_1fr] min-h-screen">

<aside className="bg-white border-r border-[#e8eaee] p-4 sticky top-0 h-screen">
<div className="flex items-center gap-2 px-2 mb-3">
<div className="w-[34px] h-[34px] rounded-[10px] shadow-sm" style={{background: 'linear-gradient(135deg,#6a62ff,#30d0e0)'}}></div>
<h1 className="text-[18px] font-extrabold tracking-tight">Goal Magics</h1>
</div>
<nav className="mt-2">
<div className="text-[12px] uppercase tracking-[.08em] text-[#6b7380] mx-2 mb-2">Main</div>
<a className="flex items-center gap-2 no-underline text-[#1b2430] font-semibold px-3 py-2 rounded-lg mb-1 bg-[#eef0ff] text-[#3b3bd1] hover:bg-[#e6e8ff] transition-all" href="#" id="nav-goals">
<i className="w-[18px] h-[18px]" data-lucide="list-tree"></i>
          Goals &amp; Alignment
        </a>
<a className="flex items-center gap-2 no-underline text-[#1b2430] font-semibold px-3 py-2 rounded-lg mb-1 hover:bg-[#f0f2f5] transition-all" href="#">
<i className="w-[18px] h-[18px]" data-lucide="layout-dashboard"></i>
          Dashboards
        </a>
<a className="flex items-center gap-2 no-underline text-[#1b2430] font-semibold px-3 py-2 rounded-lg mb-1 hover:bg-[#f0f2f5] transition-all" href="#">
<i className="w-[18px] h-[18px]" data-lucide="bar-chart-3"></i>
          Reports
        </a>
<a className="flex items-center gap-2 no-underline text-[#1b2430] font-semibold px-3 py-2 rounded-lg mb-1 hover:bg-[#f0f2f5] transition-all" href="#">
<i className="w-[18px] h-[18px]" data-lucide="settings"></i>
          Settings
        </a>
</nav>
</aside>

<main className="flex flex-col min-w-0">

<div className="bg-white border-b border-[#e8eaee] flex items-center gap-3 py-2.5 px-4">
<div className="flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-2.5 py-1.5 text-sm font-semibold text-[#3a3f4c]">2025, Q3</div>
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" id="btn-expand-all">Expand all</button>
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" id="btn-collapse-all">Collapse all</button>
</div>
<div className="ml-auto"></div>
<div className="flex items-center gap-2 bg-[#f3f4f7] border border-[#e8eaee] rounded-lg px-3 py-2 w-[280px]">
<i className="w-[18px] h-[18px] text-[#778]" data-lucide="search"></i>
<input className="bg-transparent outline-none text-[14px] w-full placeholder:text-[#778]" id="searchInput" placeholder="Search goals..."/>
</div>
<button className="h-9 inline-flex items-center gap-2 rounded-md bg-[#0b1320] text-white px-3 text-sm font-semibold hover:opacity-90 active:translate-y-px transition" id="btn-new">
<i className="w-[18px] h-[18px] text-white" data-lucide="plus"></i>
          New
        </button>
</div>
<div className="p-6 min-w-0">
<h2 className="text-[32px] font-extrabold tracking-tight mb-4">Explorer</h2>

<div className="flex items-center gap-4 border-b border-[#e8eaee] pl-1">
<button className="tab active relative px-3 py-2 text-[#3a414d] font-semibold rounded-md hover:bg-[#f2f4f8] data-[active=true]:text-[#0b1320]" data-active="true" data-tab="cascade">Cascade</button>
<button className="tab relative px-3 py-2 text-[#3a414d] font-semibold rounded-md hover:bg-[#f2f4f8]" data-tab="card">Card</button>
<button className="tab relative px-3 py-2 text-[#3a414d] font-semibold rounded-md hover:bg-[#f2f4f8]" data-tab="tree">Tree</button>
<div className="ml-auto"></div>
<div className="flex items-center gap-2 py-2">
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" id="sortProgress">Sort by Progress</button>
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" id="filterStatus">Filter: Any</button>
</div>
</div>

<section className="mt-5" id="view-cascade">
<div className="bg-white border border-[#e8eaee] rounded-xl shadow-sm overflow-hidden">
<div className="grid items-center px-3 min-h-[44px] text-[13px] font-bold text-[#3a414d] bg-[#fafbfc]" style={{gridTemplateColumns: '1fr 180px 200px 200px 160px'}}>
<div className="flex items-center">Name</div>
<div className="flex items-center">Team</div>
<div className="flex items-center">Owner</div>
<div className="flex items-center">Progress</div>
<div className="flex items-center">Status</div>
</div>
<div id="tableBody"></div>
</div>
</section>

<section className="mt-5 hidden" id="view-card">
<div className="bg-white border border-[#e8eaee] rounded-xl shadow-sm p-5">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="m-0 text-[22px] font-semibold tracking-tight">Goal Alignment Across the Organization</h3>
<p className="text-[#6b7380] mt-1.5 mb-4">See how individual, team, and company goals connect to drive strategic outcomes.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-3 font-semibold text-[#3a3f4c]">
<div>Total Progress</div>
<div className="h-2 w-[220px] rounded-full bg-[#eceef5] overflow-hidden">
<span className="block h-full rounded-full" id="overallMeter" style={{background: '#5c5ce0', width: '68%'}}></span>
</div>
<div id="overallPct">68%</div>
</div>
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" data-open-tree="">
                  View Full Map
                </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" id="cardGrid"></div>
</div>
</section>

<section className="mt-5 hidden" id="view-tree">
<div className="bg-white border border-[#e8eaee] rounded-xl shadow-sm p-6 overflow-auto h-[70vh]">
<div className="flex gap-6 items-start whitespace-nowrap" id="tree"></div>
</div>
</section>
</div>
</main>
</div>

<div className="fixed inset-0 hidden place-items-center bg-[rgba(15,18,23,.3)] z-50" id="modal">
<div className="w-[560px] bg-white rounded-2xl border border-[#e8eaee] shadow-sm p-5">
<div className="flex items-center">
<h3 className="text-lg font-semibold tracking-tight">Create Goal</h3>
<button className="ml-auto text-[18px] px-2 py-1 rounded-md hover:bg-[#f6f7f9]" id="closeModal">✕</button>
</div>
<div className="flex gap-3 my-2.5">
<div className="flex-1">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Name</div>
<input className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_name" placeholder="e.g., Decrease review time by 4%" type="text"/>
</div>
</div>
<div className="flex gap-3 my-2.5">
<div className="flex-1">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Team</div>
<input className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_team" placeholder="e.g., Product" type="text"/>
</div>
<div className="flex-1">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Owner (name)</div>
<input className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_owner" placeholder="e.g., Nellie Burke" type="text"/>
</div>
</div>
<div className="flex gap-3 my-2.5">
<div className="flex-1">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Parent goal</div>
<select className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_parent"></select>
</div>
<div className="flex-1">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Status</div>
<select className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_status">
<option value="on">On track</option>
<option value="progressing">Progressing</option>
<option value="off">Off track</option>
<option value="not">Not started</option>
</select>
</div>
<div className="w-[160px]">
<div className="text-[12px] font-semibold text-[#6b7380] mb-1.5">Progress (%)</div>
<input className="w-full border border-[#e8eaee] rounded-lg px-3 py-2.5 text-[14px] bg-[#fafbfc] outline-none focus:ring-2 focus:ring-[#e6e9ff]" id="f_progress" max="100" min="0" type="number" value="0"/>
</div>
</div>
<div className="flex gap-2 justify-end mt-3">
<button className="h-9 inline-flex items-center gap-2 rounded-md border border-[#e8eaee] bg-white px-3 text-sm font-semibold text-[#0b1320] hover:bg-[#f6f7f9] hover:ring-1 hover:ring-[#e8eaee] transition" id="cancelModal">Cancel</button>
<button className="h-9 inline-flex items-center gap-2 rounded-md bg-[#0b1320] text-white px-3 text-sm font-semibold hover:opacity-90 active:translate-y-px transition" id="saveModal">Create</button>
</div>
</div>
</div>


    </>
  );
}
