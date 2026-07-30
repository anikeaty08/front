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
      
      // Icons
      function paintIcons(root = document) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }, node: root });
      }

      // Reveal animations
      function reveal() {
        document.querySelectorAll('[data-animate]').forEach((el, idx) => {
          requestAnimationFrame(() => {
            el.classList.remove('opacity-0', 'translate-y-2');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        });
      }

      // Utility: relative time
      function relativeTime(ts) {
        const now = Date.now();
        const diff = Math.max(0, now - ts);
        const sec = Math.round(diff / 1000);
        const min = Math.round(sec / 60);
        const hr = Math.round(min / 60);
        const day = Math.round(hr / 24);
        const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' });
        if (sec < 45) return rtf.format(-sec, 'seconds');
        if (min < 45) return rtf.format(-min, 'minutes');
        if (hr < 24) return rtf.format(-hr, 'hours');
        if (day <= 7) return rtf.format(-day, 'days');
        const d = new Date(ts);
        const opts = { month: 'short', day: 'numeric' };
        if (d.getFullYear() !== new Date().getFullYear()) opts['year'] = 'numeric';
        return d.toLocaleDateString(undefined, opts);
      }

      // State
      const state = {
        search: '',
        filter: 'all', // all | unread | starred | archived
        category: 'all', // all | doctors | staff | alerts
        unreadOnTop: true,
        selectionMode: false,
        selected: new Set(),
        conversations: [
          {
            id: '1',
            name: 'Dr. Sarah Khan',
            specialty: 'Dermatologist',
            avatar: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'Please continue the ointment for 7 days and avoid direct sun exposure.',
            ts: Date.now() - 1000 * 60 * 60 * 2, // 2h ago
            unread: 2,
            pinned: true,
            starred: true,
            type: 'doctors',
            archived: false,
            receipt: 'read' // sent | delivered | read
          },
          {
            id: '2',
            name: 'Clinic Front Desk',
            specialty: 'Reception',
            avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'Your lab reports are ready for download. Let us know if you have questions.',
            ts: Date.now() - 1000 * 60 * 50, // 50m ago
            unread: 0,
            pinned: false,
            starred: false,
            type: 'staff',
            archived: false,
            receipt: 'delivered'
          },
          {
            id: '3',
            name: 'Dr. Meera Kapoor',
            specialty: 'Cardiologist',
            avatar: 'https://images.unsplash.com/photo-1550534791-2677533605a1?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'How are you feeling after the new dosage? Any dizziness or fatigue?',
            ts: Date.now() - 1000 * 60 * 60 * 26, // ~1d ago
            unread: 1,
            pinned: false,
            starred: false,
            type: 'doctors',
            archived: false,
            receipt: 'sent'
          },
          {
            id: '4',
            name: 'Health System',
            specialty: 'System Alert',
            avatar: 'https://images.unsplash.com/photo-1611162618071-b39a2ec1f9ff?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'Your appointment with Dr. Rao has been confirmed for Sep 12, 10:30 AM.',
            ts: Date.now() - 1000 * 60 * 60 * 50,
            unread: 0,
            pinned: false,
            starred: false,
            type: 'alerts',
            archived: false,
            receipt: 'delivered'
          },
          {
            id: '5',
            name: 'Dr. Luis Ortega',
            specialty: 'Orthopedic Surgeon',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'X-ray looks good. Start light mobility exercises—sharing a guide shortly.',
            ts: Date.now() - 1000 * 60 * 5, // 5m
            unread: 0,
            pinned: false,
            starred: true,
            type: 'doctors',
            archived: false,
            receipt: 'read'
          },
          {
            id: '6',
            name: 'Nursing Team',
            specialty: 'Care Coordination',
            avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'Checking in about your home BP readings this week.',
            ts: Date.now() - 1000 * 60 * 60 * 5,
            unread: 3,
            pinned: false,
            starred: false,
            type: 'staff',
            archived: false,
            receipt: 'delivered'
          },
          {
            id: '7',
            name: 'Dr. Aisha Noor',
            specialty: 'Pediatrician',
            avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
            lastMessage: 'Happy to hear the fever resolved. Keep monitoring fluids.',
            ts: Date.now() - 1000 * 60 * 60 * 72,
            unread: 0,
            pinned: false,
            starred: false,
            type: 'doctors',
            archived: true,
            receipt: 'read'
          }
        ]
      };

      // DOM refs
      const convList = document.getElementById('convList');
      const emptyState = document.getElementById('emptyState');
      const filterBtn = document.getElementById('filterBtn');
      const filterMenu = document.getElementById('filterMenu');
      const filterLabel = document.getElementById('filterLabel');
      const searchInput = document.getElementById('searchInput');
      const searchIconBtn = document.getElementById('searchIconBtn');
      const clearSearch = document.getElementById('clearSearch');
      const notifDot = document.getElementById('notifDot');

      const bulkBar = document.getElementById('bulkBar');
      const selectedCount = document.getElementById('selectedCount');
      const bulkCancel = document.getElementById('bulkCancel');
      const bulkArchive = document.getElementById('bulkArchive');
      const bulkDelete = document.getElementById('bulkDelete');
      const bulkRead = document.getElementById('bulkRead');

      const fabWrap = document.getElementById('fabWrap');
      const newMsgBtn = document.getElementById('newMsgBtn');
      const emptyNewMsg = document.getElementById('emptyNewMsg');

      // Categories
      const catButtons = Array.from(document.querySelectorAll('[data-cat]'));

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        paintIcons(document);
        reveal();
        initFilters();
        render();
        updateNotifDot();
        // Focus search from top icon
        searchIconBtn.addEventListener('click', () => searchInput.focus());
      });

      function updateNotifDot() {
        const hasUnread = state.conversations.some(c => !c.archived && c.unread > 0);
        notifDot.classList.toggle('hidden', !hasUnread);
      }

      // Filter dropdown
      function initFilters() {
        filterBtn.addEventListener('click', () => {
          const expanded = filterBtn.getAttribute('aria-expanded') === 'true';
          filterBtn.setAttribute('aria-expanded', String(!expanded));
          filterMenu.classList.toggle('hidden', expanded);
        });
        document.addEventListener('click', (e) => {
          if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            filterBtn.setAttribute('aria-expanded', 'false');
           Menu.classList.add('hidden');
          }
        });
        filterMenu.querySelectorAll('button[data-filter]').forEach(btn => {
          btn.addEventListener('click', () => {
            state.filter = btn.dataset.filter;
            filterLabel.textContent = btn.textContent.trim();
            filterBtn.setAttribute('aria-expanded', 'false');
            filterMenu.classList.add('hidden');
            render();
          });
        });
        // Unread on top toggle
        filterMenu.querySelector('[data-unread-top]').addEventListener('click', () => {
          state.unreadOnTop = !state.unreadOnTop;
          const knob = document.getElementById('unreadToggleKnob');
          knob.style.left = state.unreadOnTop ? '1.25rem' : '0.125rem';
          render();
        });

        // Categories
        catButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            state.category = btn.dataset.cat;
            catButtons.forEach(b => b.classList.remove('bg-blue-50','dark:bg-slate-800/60','text-blue-700','dark:text-blue-400','ring-blue-200','dark:ring-slate-700'));
            btn.classList.add('bg-blue-50','dark:bg-slate-800/60','text-blue-700','dark:text-blue-400','ring-blue-200','dark:ring-slate-700');
            render();
          });
        });
        // Set default selected style
        const defaultCat = catButtons.find(b => b.dataset.cat === 'all');
        if (defaultCat) defaultCat.click();
      }

      // Search
      searchInput.addEventListener('input', () => {
        state.search = searchInput.value;
        clearSearch.classList.toggle('hidden', !state.search);
        render();
      });
      clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        state.search = '';
        clearSearch.classList.add('hidden');
        render();
        searchInput.focus();
      });

      // FAB and empty state button
      function startNewMessage() {
        alert('Open doctor search to start a secure conversation.');
      }
      newMsgBtn.addEventListener('click', startNewMessage);
      emptyNewMsg.addEventListener('click', startNewMessage);

      // Selection mode controls
      function enterSelection(id) {
        state.selectionMode = true;
        state.selected.add(id);
        bulkBar.classList.remove('hidden');
        fabWrap.classList.add('hidden');
        updateSelectedCount();
        render(); // re-render to show checkboxes
      }
      function exitSelection() {
        state.selectionMode = false;
        state.selected.clear();
        bulkBar.classList.add('hidden');
        fabWrap.classList.remove('hidden');
        updateSelectedCount();
        render();
      }
      function updateSelectedCount() {
        selectedCount.textContent = `${state.selected.size} selected`;
      }
      bulkCancel.addEventListener('click', exitSelection);
      bulkArchive.addEventListener('click', () => {
        state.conversations.forEach(c => {
          if (state.selected.has(c.id)) c.archived = true;
        });
        exitSelection();
      });
      bulkDelete.addEventListener('click', () => {
        if (!confirm('Delete selected conversations? This cannot be undone.')) return;
        state.conversations = state.conversations.filter(c => !state.selected.has(c.id));
        exitSelection();
      });
      bulkRead.addEventListener('click', () => {
        state.conversations.forEach(c => {
          if (state.selected.has(c.id)) c.unread = 0;
        });
        exitSelection();
      });

      // Render list
      function visibleConversations() {
        const q = state.search.trim().toLowerCase();
        return state.conversations
          .filter(c => {
            if (state.category !== 'all' && c.type !== state.category) return false;
            if (state.filter === 'unread' && c.unread === 0) return false;
            if (state.filter === 'starred' && !c.starred) return false;
            if (state.filter === 'archived' && !c.archived) return false;
            if (state.filter !== 'archived' && c.archived) return false;
            if (q && !(c.name.toLowerCase().includes(q) || c.specialty.toLowerCase().includes(q))) return false;
            return true;
          })
          .sort((a, b) => {
            // Pinned first
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            // Optional: unread on top
            if (state.unreadOnTop) {
              if (a.unread > 0 && b.unread === 0) return -1;
              if (a.unread === 0 && b.unread > 0) return 1;
            }
            // Newest first
            return b.ts - a.ts;
          });
      }

      function render() {
        const items = visibleConversations();
        convList.innerHTML = '';
        if (items.length === 0) {
          emptyState.classList.remove('hidden');
          return;
        }
        emptyState.classList.add('hidden');

        items.forEach((c, idx) => {
          const li = document.createElement('li');
          li.setAttribute('role', 'listitem');
          li.className = 'relative';
          li.dataset.id = c.id;

          // Swipe backgrounds
          const bg = document.createElement('div');
          bg.className = 'absolute inset-0 rounded-xl mx-1 my-1 overflow-hidden';
          bg.innerHTML = `
            <div class="absolute inset-0 flex items-center justify-between px-4">
              <div class="flex items-center gap-2 text-emerald-50">
                <div class="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm"><i data-lucide="mail-check" class="h-5 w-5 text-white"></i></div>
                <span class="text-sm text-emerald-700/90 dark:text-emerald-300/90">Mark ${c.unread > 0 ? 'read' : 'unread'}</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-9 w-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-sm"><i data-lucide="archive" class="h-5 w-5 text-white"></i></div>
                <div class="h-9 w-9 rounded-lg bg-rose-600 flex items-center justify-center shadow-sm"><i data-lucide="trash-2" class="h-5 w-5 text-white"></i></div>
              </div>
            </div>
          `;

          // Foreground card (draggable)
          const row = document.createElement('div');
          row.className = 'relative mx-1 my-1 bg-white dark:bg-slate-900 rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 p-3 flex items-start gap-3 transition transform will-change-transform select-none';
          row.tabIndex = 0;

          // Selection checkbox (custom)
          const selWrap = document.createElement('button');
          selWrap.className = 'shrink-0 mt-0.5 h-9 w-9 rounded-lg ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900 hidden items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          selWrap.innerHTML = '<i data-lucide="check" class="h-5 w-5 text-white hidden"></i>';
          selWrap.setAttribute('aria-pressed', 'false');

          // Avatar
          const avatar = document.createElement('img');
          avatar.src = c.avatar;
          avatar.alt = `${c.name} avatar`;
          avatar.className = 'h-11 w-11 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-800';

          // Content
          const content = document.createElement('div');
          content.className = 'min-w-0 flex-1';
          const nameRow = document.createElement('div');
          nameRow.className = 'flex items-center gap-2';
          const name = document.createElement('div');
          name.className = 'truncate text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white';
          name.textContent = c.name;
          const dot = document.createElement('span');
          dot.className = 'h-1.5 w-1.5 rounded-full bg-slate-400';
          const spec = document.createElement('div');
          spec.className = 'truncate text-sm text-slate-600 dark:text-slate-400';
          spec.textContent = c.specialty;
          const rightCol = document.createElement('div');
          rightCol.className = 'shrink-0 ml-auto flex items-center gap-2';
          const ts = document.createElement('time');
          ts.className = 'text-xs text-slate-500';
          ts.dateTime = new Date(c.ts).toISOString();
          ts.textContent = relativeTime(c.ts);

          // Unread badge / count
          const unreadBadge = document.createElement('div');
          if (c.unread > 0) {
            unreadBadge.className = 'h-5 min-w-[1.25rem] px-1 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center';
            unreadBadge.textContent = c.unread > 9 ? '9+' : String(c.unread);
          } else {
            unreadBadge.className = 'h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700';
          }

          // Pin / Star
          const pinBtn = document.createElement('button');
          pinBtn.className = 'h-8 w-8 rounded-lg ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          pinBtn.title = c.pinned ? 'Unpin' : 'Pin';
          pinBtn.innerHTML = `<i data-lucide="pin" class="h-4 w-4 ${c.pinned ? 'text-blue-600' : 'text-slate-600'}"></i>`;

          const starBtn = document.createElement('button');
          starBtn.className = 'h-8 w-8 rounded-lg ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';
          starBtn.title = c.starred ? 'Unstar' : 'Star';
          starBtn.innerHTML = `<i data-lucide="star" class="h-4 w-4 ${c.starred ? 'text-amber-500' : 'text-slate-600'}"></i>`;

          // Message preview + receipts
          const msgRow = document.createElement('div');
          msgRow.className = 'mt-1 flex items-center gap-2';
          const preview = document.createElement('p');
          preview.className = `truncate text-[13.5px] ${c.unread ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`;
          preview.textContent = c.lastMessage;
          const receipt = document.createElement('div');
          receipt.className = 'shrink-0';
          let receiptIcon = 'check';
          let receiptColor = 'text-slate-500';
          if (c.receipt === 'delivered') { receiptIcon = 'check-check'; receiptColor = 'text-slate-500'; }
          if (c.receipt === 'read') { receiptIcon = 'check-check'; receiptColor = 'text-blue-600'; }
          receipt.innerHTML = `<i data-lucide="${receiptIcon}" class="h-4 w-4 ${receiptColor}"></i>`;

          // Assemble name row
          nameRow.appendChild(name);
          nameRow.appendChild(dot);
          nameRow.appendChild(spec);
          rightCol.appendChild(ts);
          rightCol.appendChild(unreadBadge);
          rightCol.appendChild(pinBtn);
          rightCol.appendChild(starBtn);
          nameRow.appendChild(rightCol);

          // Assemble content
          msgRow.appendChild(receipt);
          msgRow.appendChild(preview);
          content.appendChild(nameRow);
          content.appendChild(msgRow);

          // Accessiblity label
          const sr = document.createElement('span');
          sr.className = 'sr-only';
          sr.textContent = `${c.unread > 0 ? 'Unread' : 'Read'} message from ${c.name}, ${relativeTime(c.ts)}. ${c.lastMessage}`;

          // Append children
          row.appendChild(sr);
          row.appendChild(selWrap);
          row.appendChild(avatar);
          row.appendChild(content);

          // Swipe handling
          let startX = 0;
          let currentX = 0;
          let dragging = false;
          let locked = false;

          function onStart(clientX) {
            dragging = true;
            startX = clientX;
            currentX = startX;
            row.style.transition = 'none';
          }
          function onMove(clientX) {
            if (!dragging) return;
            currentX = clientX;
            const dx = currentX - startX;
            if (!locked) {
              // small threshold to start
              if (Math.abs(dx) > 4) locked = true;
            }
            if (!locked) return;
            // limit swipe distance
            const translate = Math.max(Math.min(dx, 96), -128);
            row.style.transform = `translateX(${translate}px)`;
          }
          function onEnd() {
            if (!dragging) return;
            dragging = false;
            locked = false;
            const dx = currentX - startX;
            row.style.transition = 'transform 200ms ease';
            // Commit thresholds
            if (dx > 80) {
              // mark read/unread toggle
              c.unread = c.unread > 0 ? 0 : 1;
              updateNotifDot();
              render();
              return;
            }
            if (dx < -100) {
              // Archive by default on strong left swipe
              c.archived = true;
              render();
              return;
            }
            if (dx < -60) {
              // Softer left -> confirm action
              const action = confirm('Archive this conversation?\nPress Cancel to Delete instead.');
              if (action) c.archived = true;
              else {
                if (confirm('Delete this conversation permanently?')) {
                  state.conversations = state.conversations.filter(x => x.id !== c.id);
                }
              }
              render();
              return;
            }
            row.style.transform = 'translateX(0px)';
          }

          // Mouse + touch bindings
          row.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
          row.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
          row.addEventListener('touchend', onEnd);
          row.addEventListener('mousedown', (e) => onStart(e.clientX));
          window.addEventListener('mousemove', (e) => onMove(e.clientX));
          window.addEventListener('mouseup', onEnd);

          // Tap open
          row.addEventListener('click', (e) => {
            // If click on a control, don't open
            const control = e.target.closest('button');
            if (control) return;
            if (state.selectionMode) {
              toggleSelect(c.id, selWrap);
            } else {
              openThread(c);
            }
          });

          // Long press for selection mode
          let lpTimer = null;
          row.addEventListener('pointerdown', () => {
            lpTimer = setTimeout(() => {
              enterSelection(c.id);
            }, 450);
          });
          row.addEventListener('pointerup', () => clearTimeout(lpTimer));
          row.addEventListener('pointerleave', () => clearTimeout(lpTimer));

          // Selection checkbox behavior
          function toggleSelect(id, el) {
            if (!state.selectionMode) return;
            if (state.selected.has(id)) state.selected.delete(id);
            else state.selected.add(id);
            updateSelectedCount();
            // Visual state
            const icon = el.querySelector('[data-lucide="check"]');
            const active = state.selected.has(id);
            el.setAttribute('aria-pressed', String(active));
            if (active) {
              el.classList.add('bg-blue-600','ring-blue-600');
              if (icon) icon.classList.remove('hidden');
            } else {
              el.classList.remove('bg-blue-600','ring-blue-600');
              if (icon) icon.classList.add('hidden');
            }
          }
          selWrap.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSelect(c.id, selWrap);
          });

          // Pin & Star toggles
          pinBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            c.pinned = !c.pinned;
            render();
          });
          starBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            c.starred = !c.starred;
            render();
          });

          // Show selection UI if in selection mode
          if (state.selectionMode) {
            selWrap.classList.remove('hidden');
            // Update selected visuals
            if (state.selected.has(c.id)) {
              selWrap.classList.add('bg-blue-600','ring-blue-600');
              const icon = selWrap.querySelector('[data-lucide="check"]');
              icon && icon.classList.remove('hidden');
            }
          } else {
            selWrap.classList.add('hidden');
          }

          // ARIA label
          row.setAttribute('aria-label', `${c.unread > 0 ? 'Unread' : 'Read'} message from ${c.name}, ${relativeTime(c.ts)}`);

          li.appendChild(bg);
          li.appendChild(row);
          convList.appendChild(li);

          // Animate in with small stagger
          row.classList.add('opacity-0', 'translate-y-1');
          setTimeout(() => {
            row.classList.add('transition', 'duration-500');
            row.classList.remove('opacity-0', 'translate-y-1');
            row.classList.add('opacity-100', 'translate-y-0');
          }, 40 * idx);

          paintIcons(li);
        });
      }

      function openThread(conv) {
        // Mark as read upon open
        if (conv.unread > 0) {
          conv.unread = 0;
          updateNotifDot();
          render();
        }
        alert(`Open secure chat with ${conv.name}.`);
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
      
<div className="pointer-events-none fixed inset-0 opacity-[0.6]">
<div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_-100px,rgba(30,64,175,0.05),transparent)] dark:bg-[radial-gradient(900px_300px_at_50%_-100px,rgba(148,163,184,0.08),transparent)]"></div>
</div>
<div className="min-h-dvh flex items-start justify-center">
<main className="w-full max-w-md mx-auto px-4 pt-6 pb-28 sm:pt-8">

<header className="relative flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 px-4 py-3 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out" data-animate="">
<button aria-label="Go to Home" className="h-9 w-9 flex items-center justify-center rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-slate-300 dark:hover:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="logoBtn" title="Home">
<div className="h-6 w-6 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-[11px] tracking-tight">
              HC
            </div>
</button>
<div className="text-center">
<h1 className="text-[18px] tracking-tight font-semibold text-slate-900 dark:text-white">Inbox</h1>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Search" className="h-9 w-9 flex items-center justify-center rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-slate-300 dark:hover:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="searchIconBtn" title="Search">
<i className="h-5 w-5 text-slate-700 dark:text-slate-200" data-lucide="search"></i>
</button>
<button aria-label="Notifications" className="relative h-9 w-9 flex items-center justify-center rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-slate-300 dark:hover:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="notifBtn" title="Notifications">
<i className="h-5 w-5 text-slate-700 dark:text-slate-200" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900 hidden" id="notifDot"></span>
</button>
</div>
</header>

<section aria-labelledby="search-title" className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 p-4 mb-5 opacity-0 translate-y-2 transition duration-700 ease-out delay-100" data-animate="">
<h2 className="sr-only" id="search-title">Search and filters</h2>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" data-lucide="search"></i>
<input aria-label="Search conversations by doctor's name or specialty" className="w-full h-11 pl-10 pr-10 rounded-xl border-0 ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-blue-600 bg-white dark:bg-slate-900 text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 transition" id="searchInput" placeholder="Search by doctor’s name or specialty" type="search" />
<button aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg hidden items-center justify-center ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="clearSearch">
<i className="h-4 w-4 text-slate-600" data-lucide="x"></i>
</button>
</div>
<div className="relative">
<button aria-controls="filterMenu" aria-expanded="false" aria-haspopup="menu" className="h-11 px-3 rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="filterBtn" title="Filters">
<i className="h-4.5 w-4.5" data-lucide="filter"></i>
<span id="filterLabel">All</span>
</button>
<div aria-label="Filter conversations" className="hidden absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 p-2 z-20" id="filterMenu" role="menu">
<button className="w-full h-10 px-3 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between" data-filter="all">
<span>All</span>
<i className="h-4 w-4 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full h-10 px-3 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between" data-filter="unread">
<span>Unread</span>
<i className="h-4 w-4 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full h-10 px-3 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between" data-filter="starred">
<span>Starred</span>
<i className="h-4 w-4 opacity-0" data-lucide="check"></i>
</button>
<button className="w-full h-10 px-3 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between" data-filter="archived">
<span>Archived</span>
<i className="h-4 w-4 opacity-0" data-lucide="check"></i>
</button>
<div className="my-2 h-px bg-slate-100 dark:bg-slate-800"></div>
<button className="w-full h-10 px-3 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between" data-unread-top="">
<span>Unread on top</span>
<span className="inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-800 relative">
<span className="h-4 w-4 rounded-full bg-white dark:bg-slate-700 shadow absolute left-0.5 transition-all" id="unreadToggleKnob"></span>
</span>
</button>
</div>
</div>
</div>

<div className="mt-3 flex items-center gap-1.5">
<button className="h-8 px-3 rounded-full text-xs ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-cat="all">All</button>
<button className="h-8 px-3 rounded-full text-xs ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-cat="doctors">Doctors</button>
<button className="h-8 px-3 rounded-full text-xs ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-cat="staff">Staff</button>
<button className="h-8 px-3 rounded-full text-xs ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" data-cat="alerts">System Alerts</button>
</div>
</section>

<section aria-labelledby="conv-title" className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 p-1 mb-6 opacity-0 translate-y-2 transition duration-700 ease-out delay-150" data-animate="">
<h2 className="sr-only" id="conv-title">Conversations</h2>
<div className="hidden p-6 text-center" id="emptyState">
<img alt="" className="mx-auto h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-200 dark:ring-slate-800 mb-3 opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900 dark:text-white">No messages yet</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Your conversations will appear here after you connect with a doctor.</p>
<div className="mt-4">
<button className="h-11 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium tracking-tight hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="emptyNewMsg">
                Start a new message
              </button>
</div>
</div>
<ul className="divide-y divide-slate-100 dark:divide-slate-800" id="convList" role="list">

</ul>
</section>

<div className="hidden sticky bottom-4" id="bulkBar">
<div className="mx-auto w-full max-w-md">
<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 p-2 flex items-center justify-between">
<div className="flex items-center gap-2 pl-1">
<span className="text-sm text-slate-700 dark:text-slate-200" id="selectedCount">0 selected</span>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-3 rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="bulkRead">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail-open"></i>Mark read</span>
</button>
<button className="h-10 px-3 rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="bulkArchive">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="archive"></i>Archive</span>
</button>
<button className="h-10 px-3 rounded-xl bg-rose-600 text-white text-sm font-medium tracking-tight hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400" id="bulkDelete">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="trash-2"></i>Delete</span>
</button>
<button className="h-10 px-3 rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 text-slate-700 dark:text-slate-200 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" id="bulkCancel">
                  Cancel
                </button>
</div>
</div>
</div>
</div>

<div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6" id="fabWrap">
<button aria-label="New message" className="h-12 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium tracking-tight shadow-lg hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 inline-flex items-center gap-2" id="newMsgBtn" title="New Message">
<i className="h-5 w-5" data-lucide="message-square-plus"></i>
            New Message
          </button>
</div>

<div className="h-4"></div>
</main>
</div>



    </>
  );
}
