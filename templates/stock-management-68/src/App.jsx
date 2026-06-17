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



      // Fonts baseline
      document.body.style.fontFamily = "Inter, 'Plus Jakarta Sans', ui-sans-serif, system-ui";

      // Sample Data
      const categories = ["Apparel", "Gadgets", "Home", "Beauty", "Outdoors", "Office"];
      let products = [
        { id: 1,  name: "EcoFlex Water Bottle", sku: "WB-1001", category: "Outdoors", stock: 156, img: "https://images.unsplash.com/photo-1532635224-4787c24b3b57?q=80&w=800&auto=format&fit=crop", desc: "BPA-free, reusable bottle with temperature retention. Perfect for workouts and travel." },
        { id: 2,  name: "SoftKnit Hoodie", sku: "HD-4402", category: "Apparel", stock: 8,   img: "https://images.unsplash.com/photo-1548883354-7622d3fd3e4f?q=80&w=800&auto=format&fit=crop", desc: "Ultra-soft cotton blend hoodie with relaxed fit and reinforced seams for durability." },
        { id: 3,  name: "Aero Wireless Mouse", sku: "MS-2210", category: "Office", stock: 0,   img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop", desc: "Ergonomic wireless mouse with low-latency and silent clicks for productive work." },
        { id: 4,  name: "Lumi Desk Lamp", sku: "LM-3901", category: "Home", stock: 34,  img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop", desc: "Adjustable LED desk lamp with soft glow and touch controls to reduce eye strain." },
        { id: 5,  name: "Velour Throw Pillow", sku: "PL-1180", category: "Home", stock: 12,  img: "https://images.unsplash.com/photo-1582582429416-c690de1eea2f?q=80&w=800&auto=format&fit=crop", desc: "Plush velour pillow with removable cover; elevates any living space with comfort." },
        { id: 6,  name: "Zen Garden Kit", sku: "ZG-3012", category: "Home", stock: 3,   img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop", desc: "Mini Zen garden with polished stones, rake, and white sand to calm your mind." },
        { id: 7,  name: "Aurora Face Serum", sku: "BS-5110", category: "Beauty", stock: 67,  img: "https://images.unsplash.com/photo-1616394584738-fc6e612e67c3?q=80&w=800&auto=format&fit=crop", desc: "Vitamin-C infused serum that brightens and hydrates for a natural, healthy glow." },
        { id: 8,  name: "Trailblaze Backpack", sku: "BP-7702", category: "Outdoors", stock: 5,   img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop", desc: "Weather-resistant backpack with ventilated back panel and multiple compartments." },
        { id: 9,  name: "Nimbus Earbuds", sku: "EB-6210", category: "Gadgets", stock: 220, img: "https://images.unsplash.com/photo-1518443875478-8fbcd101ebb9?q=80&w=800&auto=format&fit=crop", desc: "True wireless earbuds with ANC, long battery life, and crystal-clear audio." },
        { id: 10, name: "Canvas Sneakers", sku: "SH-1502", category: "Apparel", stock: 2,   img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop", desc: "Classic low-top sneakers with breathable canvas and durable rubber outsole." },
        { id: 11, name: "Glide Mechanical Keyboard", sku: "KB-4321", category: "Office", stock: 18,  img: "https://images.unsplash.com/photo-1595224527159-cb1d7f1af01a?q=80&w=800&auto=format&fit=crop", desc: "Hotswap mechanical keyboard with RGB underglow and premium PBT keycaps." },
        { id: 12, name: "Solar Trail Lantern", sku: "LT-8421", category: "Outdoors", stock: 0,   img: "https://images.unsplash.com/photo-1508602631958-00f7c21759a8?q=80&w=800&auto=format&fit=crop", desc: "Compact lantern that charges via solar power, ideal for camping and emergencies." },
        { id: 13, name: "Foam Yoga Mat", sku: "YM-2219", category: "Outdoors", stock: 44,  img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", desc: "Non-slip yoga mat with excellent cushioning for studio and at-home practice." },
        { id: 14, name: "Silk Scrunchies", sku: "AC-3108", category: "Beauty", stock: 9,   img: "https://images.unsplash.com/photo-1581636629552-5ce0bbe3a3a6?q=80&w=800&auto=format&fit=crop", desc: "Gentle, snag-free scrunchies that protect hair and reduce creasing." },
      ];

      // State
      let state = {
        view: 'table',
        search: '',
        status: 'all',
        categories: new Set(),
        sort: { key: 'name', dir: 'asc' },
        page: 1,
        pageSizeTable: 8,
        pageCards: 1,
        pageSizeCards: 8,
        selectedId: null,
        editingId: null,
        deletingId: null
      };

      // Elements
      const tableBody = document.getElementById('tableBody');
      const searchInput = document.getElementById('searchInput');
      const filterBtn = document.getElementById('filterBtn');
      const filterMenu = document.getElementById('filterMenu');
      const activeFilterPill = document.getElementById('activeFilterPill');
      const clearFilters = document.getElementById('clearFilters');
      const applyFilters = document.getElementById('applyFilters');
      const categoryChips = document.getElementById('categoryChips');
      const sortName = document.getElementById('sortName');
      const sortStock = document.getElementById('sortStock');
      const pagination = document.getElementById('pagination');
      const resultCount = document.getElementById('resultCount');
      const prevPage = document.getElementById('prevPage');
      const nextPage = document.getElementById('nextPage');
      const tableViewEl = document.getElementById('tableView');
      const cardViewEl = document.getElementById('cardView');
      const tableViewBtn = document.getElementById('tableViewBtn');
      const cardViewBtn = document.getElementById('cardViewBtn');
      const cardGrid = document.getElementById('cardGrid');
      const paginationCards = document.getElementById('paginationCards');
      const resultCountCards = document.getElementById('resultCountCards');
      const prevPageCards = document.getElementById('prevPageCards');
      const nextPageCards = document.getElementById('nextPageCards');

      // Modals/Panels
      const quickView = document.getElementById('quickView');
      const qvClose = document.getElementById('qvClose');
      const qvImage = document.getElementById('qvImage');
      const qvName = document.getElementById('qvName');
      const qvSku = document.getElementById('qvSku');
      const qvDesc = document.getElementById('qvDesc');
      const qvStatus = document.getElementById('qvStatus');
      const qvStock = document.getElementById('qvStock');
      const qvRestock = document.getElementById('qvRestock');
      const qvEdit = document.getElementById('qvEdit');
      const qvDelete = document.getElementById('qvDelete');
      const qvPreviewBtn = document.getElementById('qvPreviewBtn');

      const imagePreview = document.getElementById('imagePreview');
      const previewImg = document.getElementById('previewImg');
      const previewClose = document.getElementById('previewClose');

      const editModal = document.getElementById('editModal');
      const editClose = document.getElementById('editClose');
      const editCancel = document.getElementById('editCancel');
      const editSave = document.getElementById('editSave');
      const editName = document.getElementById('editName');
      const editSku = document.getElementById('editSku');
      const editDesc = document.getElementById('editDesc');
      const editCategory = document.getElementById('editCategory');
      const editImage = document.getElementById('editImage');

      const deleteConfirm = document.getElementById('deleteConfirm');
      const delCancel = document.getElementById('delCancel');
      const delConfirm = document.getElementById('delConfirm');
      const delName = document.getElementById('delName');

      const restockPanel = document.getElementById('restockPanel');
      const restockClose = document.getElementById('restockClose');
      const rsSku = document.getElementById('rsSku');
      const rsName = document.getElementById('rsName');
      const rsCurrent = document.getElementById('rsCurrent');
      const rsAdd = document.getElementById('rsAdd');
      const rsNotes = document.getElementById('rsNotes');
      const rsCancel = document.getElementById('rsCancel');
      const rsUpdate = document.getElementById('rsUpdate');

      const toastHost = document.getElementById('toastHost');

      // Helpers
      function computeStatus(stock) {
        if (stock <= 0) return 'out';
        if (stock < 10) return 'low';
        return 'in';
      }

      function statusBadgeEl(status) {
        const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs border font-medium";
        if (status === 'in') return { text: 'In Stock', cls: base + " bg-emerald-50 border-emerald-100 text-emerald-700" };
        if (status === 'low') return { text: 'Low Stock', cls: base + " bg-amber-50 border-amber-100 text-amber-700" };
        return { text: 'Out of Stock', cls: base + " bg-rose-50 border-rose-100 text-rose-700" };
      }

      function stockText(stock) {
        const s = computeStatus(stock);
        let color = "text-slate-800";
        if (s === 'low') color = "text-amber-600";
        if (s === 'out') color = "text-rose-600";
        return { text: `${stock} in stock`, color };
      }

      function showToast(msg) {
        const div = document.createElement('div');
        div.className = "pointer-events-auto rounded-xl border border-emerald-200 bg-white shadow-md px-3.5 py-2.5 flex items-center gap-2";
        div.innerHTML = `
          <div class="h-7 w-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 stroke-emerald-700" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <div class="text-sm text-slate-800">${msg}</div>
        `;
        toastHost.appendChild(div);
        setTimeout(() => {
          div.classList.add('opacity-0', 'translate-y-1');
          div.style.transition = 'opacity 200ms ease, transform 200ms ease';
          setTimeout(() => div.remove(), 220);
        }, 1600);
      }

      function openLayer(root) {
        root.classList.remove('hidden');
        const overlay = root.querySelector('.absolute.inset-0.bg-slate-900\\/40, .absolute.inset-0.bg-slate-900\\/50');
        const panel = root.querySelector('.translate-y-6, .translate-y-3, .translate-x-full, .scale-95');
        requestAnimationFrame(() => {
          const ov = root.querySelector('.absolute.inset-0');
          if (ov) ov.classList.remove('opacity-0');
          if (panel) {
            panel.classList.remove('translate-y-6','translate-y-3','translate-x-full','scale-95','opacity-0');
            panel.classList.add('opacity-100');
          }
        });
      }

      function closeLayer(root) {
        const overlay = root.querySelector('.absolute.inset-0');
        const panel = root.querySelector('.translate-y-0, .opacity-100, .translate-x-0');
        if (overlay) overlay.classList.add('opacity-0');
        const transitionEl = root.querySelector('.transition');
        root.querySelectorAll('.opacity-100').forEach(el => el.classList.remove('opacity-100'));
        root.querySelectorAll('.translate-y-0').forEach(el => el.classList.add('translate-y-6'));
        const slide = root.querySelector('.absolute.inset-y-0.right-0');
        if (slide) slide.classList.add('translate-x-full');
        setTimeout(() => root.classList.add('hidden'), 180);
      }

      // Filter menu logic
      function toggleFilterMenu(show) {
        if (show === undefined) show = filterMenu.classList.contains('hidden');
        if (show) {
          filterMenu.classList.remove('hidden');
        } else {
          filterMenu.classList.add('hidden');
        }
      }

      // Populate category chips
      function renderCategoryChips() {
        categoryChips.innerHTML = '';
        categories.forEach(cat => {
          const active = state.categories.has(cat);
          const btn = document.createElement('button');
          btn.className = `rounded-full px-2.5 py-1 text-xs border transition ${active ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`;
          btn.textContent = cat;
          btn.addEventListener('click', () => {
            if (state.categories.has(cat)) state.categories.delete(cat);
            else state.categories.add(cat);
            renderCategoryChips();
          });
          categoryChips.appendChild(btn);
        });
      }

      function filteredProducts() {
        const q = state.search.trim().toLowerCase();
        let res = [...products].filter(p => {
          const matchesQ = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
          const st = computeStatus(p.stock);
          const matchesStatus = state.status === 'all' || st === state.status;
          const matchesCat = state.categories.size === 0 || state.categories.has(p.category);
          return matchesQ && matchesStatus && matchesCat;
        });
        // sort
        res.sort((a,b) => {
          const {key, dir} = state.sort;
          let vA = key === 'name' ? a.name.toLowerCase() : a.stock;
          let vB = key === 'name' ? b.name.toLowerCase() : b.stock;
          if (vA < vB) return dir === 'asc' ? -1 : 1;
          if (vA > vB) return dir === 'asc' ? 1 : -1;
          return 0;
        });
        return res;
      }

      // Pagination helpers
      function paginate(items, page, size) {
        const total = items.length;
        const pages = Math.max(1, Math.ceil(total / size));
        const p = Math.min(Math.max(1, page), pages);
        const start = (p - 1) * size;
        const end = start + size;
        return { items: items.slice(start, end), page: p, pages, total };
      }

      // Render Table
      function renderTable() {
        const data = filteredProducts();
        const {items, page, pages, total} = paginate(data, state.page, state.pageSizeTable);
        state.page = page;
        tableBody.innerHTML = '';
        const tpl = document.getElementById('rowTemplate');
        items.forEach(p => {
          const tr = tpl.content.firstElementChild.cloneNode(true);
          tr.addEventListener('click', (e) => {
            if (e.defaultPrevented) return;
            openQuickView(p.id);
          });

          // Image
          const imgBtn = tr.querySelector('.thumbBtn');
          const img = imgBtn.querySelector('img');
          img.src = p.img;
          img.alt = p.name;
          imgBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            openImagePreview(p.img);
          });

          // Name + sku
          const a = tr.querySelector('.nameLink');
          a.textContent = p.name;
          a.href = 'javascript:void(0)';
          a.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            // Simulate navigate to detail/edit
            openEdit(p.id);
          });
          tr.querySelector('.sku').textContent = p.sku;

          // Desc with tooltip-ish via title
          const d = tr.querySelector('.desc');
          d.textContent = p.desc;
          d.title = p.desc;

          // Stock
          const s = tr.querySelector('.stockText');
          const st = stockText(p.stock);
          s.textContent = st.text;
          tr.querySelector('.stockBtn').classList.remove('text-slate-800');
          tr.querySelector('.stockBtn').addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            openRestock(p.id);
          });
          s.parentElement.classList.remove('text-slate-800','text-amber-600','text-rose-600');
          s.parentElement.classList.add(st.color);

          // Status
          const badge = tr.querySelector('.statusBadge');
          const sb = statusBadgeEl(computeStatus(p.stock));
          badge.className = sb.cls;
          badge.textContent = sb.text;

          // Restock
          tr.querySelector('.restockBtn').addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            openRestock(p.id);
          });

          // Edit
          tr.querySelector('.editBtn').addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            openEdit(p.id);
          });

          // Delete
          tr.querySelector('.deleteBtn').addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            openDelete(p.id);
          });

          tableBody.appendChild(tr);
        });

        // Result count
        resultCount.textContent = `${total} item${total!==1?'s':''} • Page ${page} of ${pages}`;

        // Pagination controls
        renderPagination(pagination, page, pages, (pNew)=>{ state.page=pNew; renderTable(); smoothScrollTop(tableViewEl); });
        prevPage.onclick = () => { if (state.page>1) { state.page--; renderTable(); smoothScrollTop(tableViewEl);} };
        nextPage.onclick = () => { if (page<pages) { state.page++; renderTable(); smoothScrollTop(tableViewEl);} };
      }

      // Render Cards
      function renderCards() {
        const data = filteredProducts();
        const {items, page, pages, total} = paginate(data, state.pageCards, state.pageSizeCards);
        state.pageCards = page;

        cardGrid.innerHTML = '';
        const tpl = document.getElementById('cardTemplate');
        items.forEach(p => {
          const card = tpl.content.firstElementChild.cloneNode(true);

          const imgBtn = card.querySelector('.cardImageBtn');
          const img = card.querySelector('img');
          img.src = p.img;
          img.alt = p.name;
          imgBtn.addEventListener('click', () => openQuickView(p.id));

          card.querySelector('div.text-\\[16px\\]').textContent = p.name;
          card.querySelector('.sku').textContent = p.sku;
          const desc = card.querySelector('.desc');
          desc.textContent = p.desc;
          desc.title = p.desc;

          const st = stockText(p.stock);
          const stockEl = card.querySelector('.stockText');
          stockEl.textContent = st.text;
          stockEl.classList.remove('text-slate-800','text-amber-600','text-rose-600');
          stockEl.classList.add(st.color);

          const badge = card.querySelector('.statusBadge');
          const sb = statusBadgeEl(computeStatus(p.stock));
          badge.className = sb.cls;
          badge.textContent = sb.text;

          card.querySelector('.restockBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            openRestock(p.id);
          });

          cardGrid.appendChild(card);
        });

        resultCountCards.textContent = `${total} item${total!==1?'s':''} • Page ${page} of ${pages}`;
        renderPagination(paginationCards, page, pages, (pNew)=>{ state.pageCards=pNew; renderCards(); smoothScrollTop(cardViewEl); });
        prevPageCards.onclick = () => { if (state.pageCards>1) { state.pageCards--; renderCards(); smoothScrollTop(cardViewEl);} };
        nextPageCards.onclick = () => { if (page<pages) { state.pageCards++; renderCards(); smoothScrollTop(cardViewEl);} };
      }

      function renderPagination(container, page, pages, onGo) {
        container.innerHTML = '';
        for (let i=1;i<=pages;i++){
          const btn = document.createElement('button');
          const active = i===page;
          btn.className = `rounded-lg px-3 py-2 text-sm border transition ${active?'bg-[#036510] text-white border-emerald-600 shadow':'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800'}`;
          btn.textContent = i;
          btn.onclick = ()=> onGo(i);
          container.appendChild(btn);
        }
      }

      // Sorting controls
      function toggleSort(key) {
        if (state.sort.key === key) {
          state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
        } else {
          state.sort.key = key;
          state.sort.dir = 'asc';
        }
        renderAll();
      }

      sortName.addEventListener('click', () => toggleSort('name'));
      sortStock.addEventListener('click', () => toggleSort('stock'));

      // View toggle
      function setView(view) {
        state.view = view;
        if (view === 'table') {
          tableViewEl.classList.remove('hidden');
          cardViewEl.classList.add('hidden');
          tableViewBtn.classList.add('bg-emerald-50','text-slate-900','border','border-emerald-100');
          cardViewBtn.classList.remove('bg-emerald-50','text-slate-900','border','border-emerald-100');
        } else {
          tableViewEl.classList.add('hidden');
          cardViewEl.classList.remove('hidden');
          cardViewBtn.classList.add('bg-emerald-50','text-slate-900','border','border-emerald-100');
          tableViewBtn.classList.remove('bg-emerald-50','text-slate-900','border','border-emerald-100');
        }
        renderAll();
      }
      tableViewBtn.addEventListener('click', () => setView('table'));
      cardViewBtn.addEventListener('click', () => setView('cards'));

      // Search
      searchInput.addEventListener('input', (e) => {
        state.search = e.target.value;
        state.page = 1;
        state.pageCards = 1;
        renderAllShallow();
      });

      // Filter menu behavior
      filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFilterMenu();
      });
      document.addEventListener('click', (e) => {
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
          toggleFilterMenu(false);
        }
      });
      document.querySelectorAll('.status-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.status-chip').forEach(b => b.classList.remove('ring-2','ring-emerald-200'));
          btn.classList.add('ring-2','ring-emerald-200');
          state.status = btn.getAttribute('data-status');
        });
      });
      clearFilters.addEventListener('click', () => {
        state.status = 'all';
        state.categories.clear();
        document.querySelectorAll('.status-chip').forEach(b => b.classList.remove('ring-2','ring-emerald-200'));
        renderCategoryChips();
      });
      applyFilters.addEventListener('click', () => {
        toggleFilterMenu(false);
        state.page = 1; state.pageCards = 1;
        activeFilterPill.textContent = state.status === 'all' ? 'All' :
          state.status === 'in' ? 'In Stock' :
          state.status === 'low' ? 'Low Stock' : 'Out of Stock';
        activeFilterPill.classList.remove('hidden');
        renderAll();
      });

      // Quick View
      function openQuickView(id) {
        state.selectedId = id;
        const p = products.find(x=>x.id===id);
        if (!p) return;
        qvImage.src = p.img;
        qvName.textContent = p.name;
        qvSku.textContent = p.sku + " • " + p.category;
        qvDesc.textContent = p.desc;
        const sb = statusBadgeEl(computeStatus(p.stock));
        qvStatus.className = sb.cls;
        qvStatus.textContent = sb.text;
        qvStock.textContent = p.stock;
        openLayer(quickView);
      }
      qvClose.addEventListener('click', ()=>closeLayer(quickView));
      quickView.addEventListener('click', (e)=>{ if (e.target===quickView) closeLayer(quickView); });
      qvRestock.addEventListener('click', ()=>{ closeLayer(quickView); openRestock(state.selectedId); });
      qvEdit.addEventListener('click', ()=>{ closeLayer(quickView); openEdit(state.selectedId); });
      qvDelete.addEventListener('click', ()=>{ closeLayer(quickView); openDelete(state.selectedId); });
      qvPreviewBtn.addEventListener('click', ()=> { const p = products.find(x=>x.id===state.selectedId); if (p) openImagePreview(p.img); });

      // Image Preview
      function openImagePreview(url) {
        previewImg.src = url;
        openLayer(imagePreview);
      }
      imagePreview.addEventListener('click', (e)=>{ if (e.target===imagePreview) closeLayer(imagePreview); });
      previewClose.addEventListener('click', ()=>closeLayer(imagePreview));

      // Edit
      function openEdit(id) {
        const p = products.find(x=>x.id===id);
        if (!p) return;
        state.editingId = id;
        editSku.textContent = p.sku;
        editName.value = p.name;
        editCategory.value = p.category;
        editImage.value = p.img;
        editDesc.value = p.desc;
        openLayer(editModal);
      }
      function closeEdit(){ closeLayer(editModal); }
      editClose.addEventListener('click', closeEdit);
      editCancel.addEventListener('click', closeEdit);
      editModal.addEventListener('click', (e)=>{ if (e.target===editModal) closeEdit(); });
      editSave.addEventListener('click', () => {
        const p = products.find(x=>x.id===state.editingId);
        if (!p) return;
        p.name = editName.value.trim() || p.name;
        p.category = editCategory.value.trim() || p.category;
        p.img = editImage.value.trim() || p.img;
        p.desc = editDesc.value.trim() || p.desc;
        closeEdit();
        renderAll();
        showToast('Product updated successfully.');
      });

      // Delete
      function openDelete(id) {
        const p = products.find(x=>x.id===id);
        if (!p) return;
        state.deletingId = id;
        delName.innerHTML = `Delete <span class="font-medium">${p.name}</span>? This action can’t be undone.`;
        openLayer(deleteConfirm);
      }
      delCancel.addEventListener('click', ()=>closeLayer(deleteConfirm));
      deleteConfirm.addEventListener('click', (e)=>{ if (e.target===deleteConfirm) closeLayer(deleteConfirm); });
      delConfirm.addEventListener('click', ()=> {
        products = products.filter(p=>p.id!==state.deletingId);
        closeLayer(deleteConfirm);
        renderAll();
        showToast('Product deleted.');
      });

      // Restock Slide-over
      function openRestock(id) {
        const p = products.find(x=>x.id===id);
        if (!p) return;
        state.selectedId = id;
        rsSku.textContent = p.sku + " • " + p.category;
        rsName.value = p.name;
        rsCurrent.value = p.stock;
        rsAdd.value = '';
        rsNotes.value = '';
        openLayer(restockPanel);
        setTimeout(()=>rsAdd.focus(), 160);
      }
      function closeRestock(){ closeLayer(restockPanel); }
      restockClose.addEventListener('click', closeRestock);
      rsCancel.addEventListener('click', closeRestock);
      restockPanel.addEventListener('click', (e)=>{ if (e.target===restockPanel) closeRestock(); });
      rsUpdate.addEventListener('click', () => {
        const p = products.find(x=>x.id===state.selectedId);
        const add = parseInt(rsAdd.value || '0', 10);
        if (!p || isNaN(add) || add < 0) return;
        const start = p.stock;
        const target = start + add;
        p.stock = target;
        closeRestock();
        animateStockChange(state.selectedId, start, target);
        renderAll();
        showToast('Stock updated successfully.');
      });

      function animateStockChange(id, from, to) {
        // flip-like increment animation
        const duration = 600;
        const steps = Math.min(24, Math.abs(to-from));
        let current = from;
        const delta = (to - from) / (steps || 1);
        const tStart = performance.now();
        function step(now) {
          const t = Math.min(1, (now - tStart)/duration);
          const val = Math.round(from + delta * steps * t);
          current = (from<to) ? Math.min(val, to) : Math.max(val, to);
          // Update any visible stock text occurrences
          document.querySelectorAll('.stockText').forEach(el => {
            const row = el.closest('tr, .group');
            if (!row) return;
            // find via sku text inside same row/card
            const skuEl = row.querySelector('.sku');
            if (!skuEl) return;
            const skuTxt = skuEl.textContent.trim();
            const p = products.find(pp=>pp.sku===skuTxt);
            if (!p) return;
            if (p.id === id) {
              el.textContent = `${current} in stock`;
              // flip effect
              el.parentElement.classList.add('scale-y-90');
              el.parentElement.style.transition = 'transform 120ms ease';
              setTimeout(()=> el.parentElement.classList.remove('scale-y-90'), 120);
            }
          });
          if (current !== to) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      // Smooth scroll helper
      function smoothScrollTop(el){
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }

      // Render all
      function renderAll() {
        if (state.view === 'table') renderTable();
        else renderCards();
      }
      function renderAllShallow() {
        // optimized: rerender current view only
        renderAll();
      }

      //      // Keyboard shortcuts, help, and init
      const helpBtn = document.getElementById('helpBtn');

      // Build Help Sheet dynamically
      const helpSheet = document.createElement('div');
      helpSheet.id = 'helpSheet';
      helpSheet.className = 'fixed inset-0 z-50 hidden';
      helpSheet.setAttribute('role', 'dialog');
      helpSheet.setAttribute('aria-modal', 'true');
      helpSheet.innerHTML = `
        <div class="absolute inset-0 bg-slate-900/40 opacity-0 transition-opacity"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div class="w-full max-w-md translate-y-3 opacity-0 transition rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div class="p-5">
              <div class="flex items-start justify-between">
                <div class="text-[18px] tracking-tight" style="font-family: 'Plus Jakarta Sans', Inter; font-weight: 600;">Quick Shortcuts</div>
                <button id="helpClose" class="rounded-lg p-2 hover:bg-slate-100 transition" aria-label="Close help">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-slate-700" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div class="mt-4 space-y-2 text-sm text-slate-700">
                <div class="flex items-center justify-between">
                  <span>Focus search</span>
                  <span class="text-[11px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">⌘K</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Toggle filters</span>
                  <span class="text-[11px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">F</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Switch to cards</span>
                  <span class="text-[11px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">C</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Switch to table</span>
                  <span class="text-[11px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">T</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Close modals/menus</span>
                  <span class="text-[11px] text-slate-600 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">Esc</span>
                </div>
              </div>
              <div class="mt-5 flex items-center justify-end">
                <button id="helpGotIt" class="rounded-xl bg-[#036510] text-white px-3.5 py-2.5 text-sm shadow hover:shadow-md transition">Got it</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(helpSheet);
      const helpClose = helpSheet.querySelector('#helpClose');
      const helpGotIt = helpSheet.querySelector('#helpGotIt');
      function openHelp(){ openLayer(helpSheet); }
      function closeHelp(){ closeLayer(helpSheet); }
      helpBtn?.addEventListener('click', (e)=>{ e.preventDefault(); openHelp(); });
      helpClose.addEventListener('click', closeHelp);
      helpGotIt.addEventListener('click', closeHelp);
      helpSheet.addEventListener('click', (e)=>{ if (e.target===helpSheet) closeHelp(); });

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K -> focus search
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
        // F -> toggle filters (when not typing)
        const typingInInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
        if (!typingInInput && e.key.toLowerCase() === 'f') {
          e.preventDefault();
          toggleFilterMenu();
        }
        // C -> cards, T -> table
        if (!typingInInput && e.key.toLowerCase() === 'c') {
          e.preventDefault();
          setView('cards');
        }
        if (!typingInInput && e.key.toLowerCase() === 't') {
          e.preventDefault();
          setView('table');
        }
        // Esc -> close open layers/menus
        if (e.key === 'Escape') {
          toggleFilterMenu(false);
          [quickView, imagePreview, editModal, deleteConfirm, restockPanel, helpSheet].forEach(layer => {
            if (layer && !layer.classList.contains('hidden')) closeLayer(layer);
          });
        }
      });

      // Init
      function init() {
        renderCategoryChips();
        renderAll();
      }
      document.addEventListener('DOMContentLoaded', init);
    
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
      

<div className="min-h-screen">

<header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-[#036510] text-white flex items-center justify-center text-sm font-semibold tracking-tight">SM</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80"></span>
<span>Inventory Console</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition" id="helpBtn">
<svg className="h-4.5 w-4.5 stroke-slate-600 group-hover:stroke-slate-800 transition" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17h.01M12 13a4 4 0 1 0-4-4"></path>
<path d="M12 13v1.5"></path>
<circle cx="12" cy="12" r="9"></circle>
</svg>
              Help
            </button>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-8m-2 0H4m16 5h-8m-2 0H4m16 5h-8m-2 0H4"></path>
</svg>
              Docs
            </button>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<div className="flex flex-col gap-4">
<div>
<h1 className="text-[28px] sm:text-[30px] tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif, system-ui', fontWeight: '600'}}>
              Stock Management
            </h1>
<p className="text-slate-600 mt-1" style={{fontFamily: 'Inter, \'Plus Jakarta Sans\', ui-sans-serif, system-ui', fontWeight: '400'}}>
              Monitor and manage product inventory across categories.
            </p>
</div>
<div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">

<div className="flex-1">
<div className="relative">
<svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 stroke-slate-500" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="M21 21l-4.3-4.3"></path>
</svg>
<input className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-[15px] text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="searchInput" placeholder="Search product or SKU…" type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md bg-slate-50 hidden sm:block">⌘K</div>
</div>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[15px] text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition" id="filterBtn">
<svg className="h-5 w-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M6 12h12m-9 6h6"></path>
</svg>
                Filters
                <span className="hidden ml-2 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 border border-emerald-100" id="activeFilterPill">All</span>
<svg className="ml-1 h-4 w-4 stroke-slate-500" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
<div className="z-20 hidden absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-lg" id="filterMenu">
<div className="px-4 py-3 border-b border-slate-200">
<div className="text-sm text-slate-500">Filter by</div>
</div>
<div className="p-3">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Status</div>
<div className="grid grid-cols-2 gap-2">
<button className="status-chip inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-100" data-status="all">All</button>
<button className="status-chip inline-flex items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 px-2.5 py-2 text-sm text-emerald-700 hover:bg-emerald-100" data-status="in">In Stock</button>
<button className="status-chip inline-flex items-center justify-center rounded-lg border border-amber-100 bg-amber-50 px-2.5 py-2 text-sm text-amber-700 hover:bg-amber-100" data-status="low">Low</button>
<button className="status-chip inline-flex items-center justify-center rounded-lg border border-rose-100 bg-rose-50 px-2.5 py-2 text-sm text-rose-700 hover:bg-rose-100" data-status="out">Out</button>
</div>
</div>
<div className="px-4 py-3 border-t border-slate-200">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Categories</div>
<div className="flex flex-wrap gap-2" id="categoryChips">

</div>
</div>
<div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
<button className="text-sm text-slate-600 hover:text-slate-800 hover:underline" id="clearFilters">Clear</button>
<button className="rounded-xl bg-[#036510] text-white px-3 py-2 text-sm shadow hover:shadow-md transition" id="applyFilters">Apply</button>
</div>
</div>
</div>

<div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
<button className="view-btn active inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 transition" id="tableViewBtn">
<svg className="h-4.5 w-4.5 stroke-slate-800" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
</svg>
                Table
              </button>
<button className="view-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition" id="cardViewBtn">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="2" width="7" x="3" y="3"></rect>
<rect height="7" rx="2" width="7" x="14" y="3"></rect>
<rect height="7" rx="2" width="7" x="3" y="14"></rect>
<rect height="7" rx="2" width="7" x="14" y="14"></rect>
</svg>
                Cards
              </button>
</div>
</div>
</div>

<section className="mt-6">

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" id="tableView">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50/80 border-b border-slate-200">
<tr>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600">Product</th>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600">
<button className="group inline-flex items-center gap-1 text-slate-700 hover:text-slate-900" id="sortName">
                        Product Name
                        <svg className="h-4 w-4 stroke-slate-400 group-hover:stroke-slate-700 transition" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9l4-4 4 4M16 15l-4 4-4-4"></path>
</svg>
</button>
</th>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600">Description</th>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600">
<button className="group inline-flex items-center gap-1 text-slate-700 hover:text-slate-900" id="sortStock">
                        Stock Count
                        <svg className="h-4 w-4 stroke-slate-400 group-hover:stroke-slate-700 transition" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9l4-4 4 4M16 15l-4 4-4-4"></path>
</svg>
</button>
</th>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600">Status</th>
<th className="px-4 sm:px-6 py-3.5 text-xs font-medium text-slate-600 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="tableBody">

</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-50/60 border-t border-slate-200">
<div className="text-sm text-slate-600" id="resultCount"></div>
<div className="inline-flex items-center gap-1">
<button className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition" id="prevPage">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-1" id="pagination">

</div>
<button className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition" id="nextPage">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden" id="cardView">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="cardGrid">

</div>

<div className="mt-4 flex items-center justify-between px-1">
<div className="text-sm text-slate-600" id="resultCountCards"></div>
<div className="inline-flex items-center gap-1">
<button className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition" id="prevPageCards">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-1" id="paginationCards"></div>
<button className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition" id="nextPageCards">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-40 hidden" id="quickView">
<div className="absolute inset-0 bg-slate-900/40 opacity-0 transition-opacity"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-2xl translate-y-6 sm:translate-y-0 scale-95 opacity-0 transition rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
<div className="flex flex-col sm:flex-row">
<div className="sm:w-1/2 relative">
<img alt="Preview" className="h-48 sm:h-full w-full object-cover" id="qvImage" src=""/>
<button className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-white transition" id="qvPreviewBtn">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Preview
              </button>
</div>
<div className="sm:w-1/2 p-4 sm:p-6">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-[20px] tracking-tight" id="qvName" style={{fontFamily: '\'Plus Jakarta Sans\', Inter', fontWeight: '600'}}></div>
<div className="text-xs text-slate-500 mt-0.5" id="qvSku"></div>
</div>
<button className="rounded-lg p-2 hover:bg-slate-100 transition" id="qvClose">
<svg className="h-5 w-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<p className="mt-3 text-sm text-slate-700 line-clamp-4" id="qvDesc"></p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs border" id="qvStatus"></span>
<span className="text-sm text-slate-600"><span className="font-medium" id="qvStock"></span> in stock</span>
</div>
<div className="mt-5 flex items-center gap-2">
<button className="rounded-xl bg-[#036510] text-white px-3.5 py-2.5 text-sm shadow hover:shadow-md transition" id="qvRestock">Restock</button>
<button className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 hover:bg-slate-50 transition inline-flex items-center gap-2" id="qvEdit">
<svg className="h-4.5 w-4.5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h6M18.37 2.63a2.12 2.12 0 1 1 3 3L7.5 19.5 3 21l1.5-4.5Z"></path></svg>
                  Edit
                </button>
<button className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-sm text-rose-700 hover:bg-rose-100 transition inline-flex items-center gap-2" id="qvDelete">
<svg className="h-4.5 w-4.5 stroke-rose-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M9 10v7m6-7v7"></path></svg>
                  Delete
                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="imagePreview">
<div className="absolute inset-0 bg-slate-900/50 opacity-0 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="max-w-3xl w-full translate-y-3 opacity-0 transition rounded-2xl overflow-hidden bg-white shadow-2xl">
<div className="relative">
<img alt="Product Preview" className="w-full max-h-[70vh] object-contain" id="previewImg" src=""/>
<button className="absolute top-3 right-3 rounded-lg bg-white/90 border border-slate-200 p-2 hover:bg-white transition" id="previewClose">
<svg className="h-5 w-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="editModal">
<div className="absolute inset-0 bg-slate-900/40 opacity-0 transition-opacity"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-lg translate-y-6 sm:translate-y-0 scale-95 opacity-0 transition rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
<div className="p-5 sm:p-6">
<div className="flex items-start justify-between">
<div>
<div className="text-[20px] tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter', fontWeight: '600'}}>Edit Product</div>
<div className="text-xs text-slate-500 mt-0.5" id="editSku"></div>
</div>
<button className="rounded-lg p-2 hover:bg-slate-100 transition" id="editClose">
<svg className="h-5 w-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">Product Name</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="editName"/>
</div>
<div>
<label className="text-xs text-slate-600">Category</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="editCategory"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-slate-600">Image URL</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="editImage"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-slate-600">Description</label>
<textarea className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="editDesc" rows="3"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 hover:bg-slate-50 transition" id="editCancel">Cancel</button>
<button className="rounded-xl bg-[#036510] text-white px-3.5 py-2.5 text-sm shadow hover:shadow-md transition" id="editSave">Save Changes</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="deleteConfirm">
<div className="absolute inset-0 bg-slate-900/50 opacity-0 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-sm translate-y-3 opacity-0 transition rounded-2xl border border-slate-200 bg-white shadow-xl p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
<svg className="h-5 w-5 stroke-rose-600" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4m0 4h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>
</div>
<div>
<div className="text-[18px] tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter', fontWeight: '600'}}>Delete product?</div>
<div className="text-sm text-slate-600" id="delName">This action can’t be undone.</div>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 transition" id="delCancel">Cancel</button>
<button className="rounded-xl bg-rose-600 text-white px-3 py-2 text-sm shadow hover:shadow-md transition" id="delConfirm">Delete</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="restockPanel">
<div className="absolute inset-0 bg-slate-900/40 opacity-0 transition-opacity"></div>
<div className="absolute inset-y-0 right-0 w-full sm:max-w-md translate-x-full transition">
<div className="h-full flex flex-col bg-white border-l border-slate-200 shadow-xl">
<div className="p-5 border-b border-slate-200 flex items-start justify-between">
<div>
<div className="text-[20px] tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter', fontWeight: '600'}}>Restock Product</div>
<div className="text-xs text-slate-500 mt-0.5" id="rsSku"></div>
</div>
<button className="rounded-lg p-2 hover:bg-slate-100 transition" id="restockClose">
<svg className="h-5 w-5 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-xs text-slate-600">Product Name</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700" id="rsName" readonly=""/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600">Current Stock</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700" id="rsCurrent" readonly=""/>
</div>
<div>
<label className="text-xs text-slate-600">Add Quantity</label>
<input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="rsAdd" min="0" placeholder="e.g., 25" type="number"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Notes (optional)</label>
<textarea className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 transition" id="rsNotes" placeholder="Supplier, batch, etc." rows="3"></textarea>
</div>
</div>
<div className="mt-auto p-5 border-t border-slate-200 flex items-center justify-end gap-2">
<button className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 hover:bg-slate-50 transition" id="rsCancel">Cancel</button>
<button className="rounded-xl bg-[#036510] text-white px-3.5 py-2.5 text-sm shadow hover:shadow-md transition" id="rsUpdate">Update Stock</button>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toastHost"></div>

<template id="rowTemplate">
<tr className="group hover:bg-emerald-50/40 transition cursor-pointer">
<td className="px-4 sm:px-6 py-3.5">
<div className="flex items-center gap-3">
<button className="thumbBtn relative shrink-0 h-10 w-10 rounded-md overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-sm transition">
<img className="h-full w-full object-cover" />
</img></button>
</div>
</td>
<td className="px-4 sm:px-6 py-3.5">
<a className="nameLink text-[15px] text-slate-900 hover:underline hover:decoration-2 hover:decoration-[#036510] hover:underline-offset-2" style={{fontWeight: '600'}}></a>
<div className="text-xs text-slate-500 mt-0.5 sku"></div>
</td>
<td className="px-4 sm:px-6 py-3.5">
<div className="text-sm text-slate-700 line-clamp-2 desc"></div>
</td>
<td className="px-4 sm:px-6 py-3.5">
<button className="stockBtn inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition">
<svg className="h-4 w-4 stroke-slate-700" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></path></svg>
<span className="stockText"></span>
</button>
</td>
<td className="px-4 sm:px-6 py-3.5">
<span className="statusBadge inline-flex items-center rounded-full px-2.5 py-1 text-xs border font-medium"></span>
</td>
<td className="px-4 sm:px-6 py-3.5">
<div className="flex items-center justify-end gap-2">
<button className="restockBtn group inline-flex items-center gap-1.5 rounded-xl bg-[#036510] text-white px-3 py-2 text-xs shadow hover:shadow-md transition">
              Restock
              <svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9"></path><path d="M21 3v9h-9"></path></svg>
</button>
<button className="editBtn group relative rounded-lg p-2 hover:bg-slate-100 transition">
<svg className="h-4.5 w-4.5 stroke-slate-700 group-hover:stroke-slate-900 transition" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h6M18.37 2.63a2.12 2.12 0 1 1 3 3L7.5 19.5 3 21l1.5-4.5Z"></path></svg>
<span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-slate-900 text-white text-[11px] px-2 py-1 rounded-md shadow">Edit</span>
</button>
<button className="deleteBtn group relative rounded-lg p-2 hover:bg-rose-50 transition">
<svg className="h-4.5 w-4.5 stroke-rose-600 group-hover:stroke-rose-700 transition" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M9 10v7m6-7v7"></path></svg>
<span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-slate-900 text-white text-[11px] px-2 py-1 rounded-md shadow">Delete</span>
</button>
</div>
</td>
</tr>
</template>
<template id="cardTemplate">
<div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden hover:-translate-y-0.5">
<button className="cardImageBtn relative block aspect-[4/3] w-full overflow-hidden">
<img className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
</img></button>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<div className="text-[16px] tracking-tight text-slate-900" style={{fontWeight: '600'}}></div>
<div className="text-xs text-slate-500 mt-0.5 sku"></div>
</div>
<span className="statusBadge inline-flex items-center rounded-full px-2.5 py-1 text-xs border font-medium shrink-0"></span>
</div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2 desc"></p>
<div className="mt-3 flex items-center justify-between">
<div className="text-sm">
<span className="stockText font-medium"></span>
</div>
<button className="restockBtn rounded-xl bg-[#036510] text-white px-3 py-2 text-xs shadow hover:shadow-md transition">Restock</button>
</div>
</div>
</div>
</template>



    </>
  );
}
