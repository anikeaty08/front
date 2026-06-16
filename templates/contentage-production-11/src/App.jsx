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



(function(){function toast(m){var o=document.getElementById('os-toast');if(o)o.remove();var t=document.createElement('div');t.id='os-toast';t.className='fixed bottom-5 right-5 z-[80] rounded-lg border bg-white px-4 py-3 text-sm shadow-xl flex items-center gap-2';t.style.borderColor='var(--border)';t.innerHTML='<span class="w-2 h-2 rounded-full" style="background: var(--success);"></span><span>'+m+'</span>';document.body.appendChild(t);setTimeout(function(){t.remove();},2400);}function modal(title,body,footer){var m=document.createElement('div');m.className='fixed inset-0 z-[90] flex items-center justify-center p-4';m.style.background='rgba(10,10,11,0.4)';m.innerHTML='<div class="w-full max-w-lg rounded-xl border shadow-xl overflow-hidden" style="background: var(--bg-card); border-color: var(--border);"><div class="px-5 py-4 border-b flex items-center justify-between" style="border-color: var(--border);"><h3 class="text-sm font-semibold tracking-tight">'+title+'</h3><button class="m-close p-1 rounded hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button></div><div class="p-5">'+body+'</div>'+(footer?'<div class="px-5 py-3 border-t flex justify-end gap-2" style="border-color: var(--border);">'+footer+'</div>':'')+'</div>';m.addEventListener('click',function(e){if(e.target===m)m.remove();});m.querySelectorAll('.m-close,.m-cancel').forEach(function(b){b.onclick=function(){m.remove();};});document.body.appendChild(m);return m;}document.addEventListener('click',function(e){var card=e.target.closest('.cursor-grab');if(card&&!e.target.closest('button')){var title=card.querySelector('.text-sm.font-medium');var client=card.querySelector('.font-mono');modal('Detail karty','<div class="space-y-3"><div><div class="text-xs uppercase tracking-wider" style="color: var(--fg-muted);">Klient</div><div class="text-sm font-medium mt-0.5">'+(client?client.textContent.trim():'—')+'</div></div><div><div class="text-xs uppercase tracking-wider" style="color: var(--fg-muted);">Název</div><div class="text-sm font-medium mt-0.5">'+(title?title.textContent.trim():'—')+'</div></div><div><div class="text-xs uppercase tracking-wider" style="color: var(--fg-muted);">Poznámky</div><textarea class="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none" style="border-color: var(--border);" rows="3" placeholder="Přidat komentář..."></textarea></div></div>','<button class="m-cancel px-3 py-1.5 rounded-md border text-sm" style="border-color: var(--border);">Zavřít</button><button class="m-cancel px-3 py-1.5 rounded-md text-sm font-medium text-white" style="background: var(--fg-default);">Uložit</button>');return;}var row=e.target.closest('.divide-y > div');if(row&&row.classList.contains('cursor-pointer')&&!e.target.closest('button,a')){var t=row.querySelector('.text-sm.font-medium');if(t)toast('Otevřen úkol: '+t.textContent.trim());return;}var kpi=e.target.closest('a[href^="#"]');var alertCard=e.target.closest('section a.group');if(alertCard){e.preventDefault();var h=alertCard.querySelector('h3');toast(h?h.textContent.trim():'Otevřeno');return;}var pickup=e.target.closest('button');if(pickup&&pickup.textContent.trim()==='Vyzvednout'){e.preventDefault();pickup.textContent='Vyzvednuto';pickup.disabled=true;pickup.style.opacity='0.6';toast('Úkol přiřazen tobě');return;}var ideaCard=e.target.closest('#napady .rounded-xl');if(ideaCard){var n=ideaCard.querySelector('.text-sm.font-medium');toast('Nápad otevřen: '+(n?n.textContent.trim():''));return;}var cycleCard=e.target.closest('#cykly .rounded-xl');if(cycleCard){var n2=cycleCard.querySelector('.text-sm.font-semibold');toast('Cyklus: '+(n2?n2.textContent.trim():''));return;}var teamCard=e.target.closest('#tym .rounded-xl');if(teamCard){var n3=teamCard.querySelector('.text-sm.font-semibold');toast('Profil: '+(n3?n3.textContent.trim():''));return;}var clientRow=e.target.closest('#klienti tbody tr, #client-finance-center tbody tr');if(clientRow){var n4=clientRow.querySelector('td');if(n4)toast('Klient: '+n4.textContent.trim());return;}var invRow=e.target.closest('#fakturace tbody tr');if(invRow){var n5=invRow.querySelectorAll('td');if(n5.length)toast('Faktura '+n5[0].textContent.trim());return;}var inboxRow=e.target.closest('#inbox .divide-y > div');if(inboxRow){var n6=inboxRow.querySelector('.text-sm.font-medium');toast(n6?n6.textContent.trim():'Notifikace');return;}var aiCard=e.target.closest('#ai-mozek .rounded-lg.border');if(aiCard){var n7=aiCard.querySelector('.text-sm.font-medium');toast('Otevřeno: '+(n7?n7.textContent.trim():''));return;}var sugg=e.target.closest('#asistent .rounded-lg.border');if(sugg&&!e.target.closest('input,button')){var n8=sugg.querySelector('.text-sm.font-medium');if(n8)toast('Spuštěno: '+n8.textContent.trim());return;}var footerLink=e.target.closest('footer a, section.pt-6 a');if(footerLink){e.preventDefault();toast(footerLink.textContent.trim()+' otevřeno');return;}});document.addEventListener('submit',function(e){var f=e.target.closest('#asistent form');if(f){e.preventDefault();var inp=f.querySelector('input');if(inp&&inp.value){toast('Dotaz odeslán');inp.value='';}}});var asInput=document.querySelector('#asistent input');if(asInput){asInput.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();if(asInput.value){toast('Dotaz odeslán: '+asInput.value);asInput.value='';}}});}})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function(){
        // Sidebar nav active state
        document.querySelectorAll('aside nav a').forEach(function(link){
          link.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelectorAll('aside nav a').forEach(function(l){
              l.style.background = '';
              l.style.color = 'var(--fg-sidebar-muted)';
              l.classList.add('hover:bg-white/5');
            });
            this.style.background = 'var(--bg-sidebar-accent)';
            this.style.color = '#ffffff';
            this.classList.remove('hover:bg-white/5');
          });
        });

        // Search modal trigger
        var searchBtn = document.querySelector('header button kbd');
        function openSearch(){
          if(document.getElementById('search-modal')) return;
          var modal = document.createElement('div');
          modal.id = 'search-modal';
          modal.className = 'fixed inset-0 z-50 flex items-start justify-center pt-24';
          modal.style.background = 'rgba(10,10,11,0.4)';
          modal.innerHTML = '<div class="w-full max-w-xl bg-white rounded-xl border shadow-xl" style="border-color: var(--border);"><div class="flex items-center gap-2 px-4 py-3 border-b" style="border-color: var(--border);"><iconify-icon icon="solar:magnifer-linear" width="18" style="color: var(--fg-muted);"></iconify-icon><input id="search-input" type="text" placeholder="Hledat úkoly, klienty, cykly..." class="flex-1 outline-none text-sm bg-transparent"><kbd class="text-xs font-mono px-1.5 py-0.5 rounded border" style="border-color: var(--border); color: var(--fg-subtle);">ESC</kbd></div><div class="p-2 max-h-80 overflow-y-auto"><div class="px-3 py-2 text-xs uppercase tracking-wider" style="color: var(--fg-muted);">Návrhy</div><a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>Reels: Břišáky bez fitka</a><a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>Albrecht Fitness</a><a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:refresh-circle-linear" width="16"></iconify-icon>Cyklus Květen 2026</a></div></div>';
          modal.addEventListener('click', function(e){ if(e.target === modal) modal.remove(); });
          document.body.appendChild(modal);
          setTimeout(function(){ var i = document.getElementById('search-input'); if(i) i.focus(); }, 50);
        }
        document.querySelectorAll('header button').forEach(function(b){
          if(b.querySelector('kbd')) b.addEventListener('click', openSearch);
        });
        document.addEventListener('keydown', function(e){
          if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); openSearch(); }
          if(e.key==='Escape'){ var m=document.getElementById('search-modal'); if(m) m.remove(); var n=document.getElementById('notif-panel'); if(n) n.remove(); var nc=document.getElementById('newcard-modal'); if(nc) nc.remove(); }
        });

        // Notifications
        var notifBtns = document.querySelectorAll('header button');
        notifBtns.forEach(function(b){
          var ic = b.querySelector('iconify-icon[icon="solar:bell-linear"]');
          if(!ic) return;
          b.addEventListener('click', function(e){
            e.stopPropagation();
            var existing = document.getElementById('notif-panel');
            if(existing){ existing.remove(); return; }
            var panel = document.createElement('div');
            panel.id = 'notif-panel';
            panel.className = 'fixed top-14 right-6 lg:right-10 z-50 w-80 bg-white rounded-xl border shadow-xl';
            panel.style.borderColor = 'var(--border)';
            panel.innerHTML = '<div class="px-4 py-3 border-b flex items-center justify-between" style="border-color: var(--border);"><span class="text-sm font-semibold tracking-tight">Notifikace</span><span class="text-xs font-mono px-1.5 py-0.5 rounded" style="background: var(--bg-muted); color: var(--fg-muted);">3</span></div><div class="divide-y" style="border-color: var(--border);"><a href="#" class="block px-4 py-3 hover:bg-[var(--bg-app)]"><div class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full mt-1.5" style="background: var(--danger);"></span><div class="flex-1"><div class="text-sm font-medium">Deadline za 3 hodiny</div><div class="text-xs" style="color: var(--fg-muted);">Reels Břišáky bez fitka</div></div></div></a><a href="#" class="block px-4 py-3 hover:bg-[var(--bg-app)]"><div class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full mt-1.5" style="background: var(--warning);"></span><div class="flex-1"><div class="text-sm font-medium">PrahaMart nereaguje</div><div class="text-xs" style="color: var(--fg-muted);">5 karet zablokováno</div></div></div></a><a href="#" class="block px-4 py-3 hover:bg-[var(--bg-app)]"><div class="flex items-start gap-2"><span class="w-1.5 h-1.5 rounded-full mt-1.5" style="background: var(--info);"></span><div class="flex-1"><div class="text-sm font-medium">Schválen scénář</div><div class="text-xs" style="color: var(--fg-muted);">DuoCards · před 1 h</div></div></div></a></div>';
            document.body.appendChild(panel);
            setTimeout(function(){
              document.addEventListener('click', function close(ev){
                if(!panel.contains(ev.target)){ panel.remove(); document.removeEventListener('click', close); }
              });
            }, 0);
          });
        });

        // Nová karta modal
        document.querySelectorAll('header button').forEach(function(b){
          if(b.textContent.indexOf('Nová karta') !== -1){
            b.addEventListener('click', function(){
              if(document.getElementById('newcard-modal')) return;
              var modal = document.createElement('div');
              modal.id = 'newcard-modal';
              modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
              modal.style.background = 'rgba(10,10,11,0.4)';
              modal.innerHTML = '<div class="w-full max-w-md bg-white rounded-xl border shadow-xl" style="border-color: var(--border);"><div class="px-5 py-4 border-b flex items-center justify-between" style="border-color: var(--border);"><h3 class="text-sm font-semibold tracking-tight">Nová karta</h3><button id="nc-close" class="p-1 rounded hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button></div><form id="nc-form" class="p-5 space-y-4"><div><label class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted);">Název</label><input required type="text" class="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none focus:border-[var(--fg-default)]" style="border-color: var(--border);" placeholder="Např. Recept týdne"></div><div><label class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted);">Klient</label><select class="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none" style="border-color: var(--border);"><option>Albrecht Fitness</option><option>PrahaMart</option><option>DuoCards</option><option>CityCafé</option><option>Hamrozy Stavby</option></select></div><div><label class="text-xs font-medium uppercase tracking-wider" style="color: var(--fg-muted);">Sloupec</label><select class="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none" style="border-color: var(--border);"><option>Scénář</option><option>Postprodukce</option><option>Ke schválení</option><option>Naplánováno</option></select></div><div class="flex justify-end gap-2 pt-2"><button type="button" id="nc-cancel" class="px-3 py-1.5 rounded-md border text-sm" style="border-color: var(--border);">Zrušit</button><button type="submit" class="px-3 py-1.5 rounded-md text-sm font-medium text-white" style="background: var(--fg-default);">Vytvořit</button></div></form></div>';
              modal.addEventListener('click', function(e){ if(e.target === modal) modal.remove(); });
              document.body.appendChild(modal);
              document.getElementById('nc-close').onclick = function(){ modal.remove(); };
              document.getElementById('nc-cancel').onclick = function(){ modal.remove(); };
              document.getElementById('nc-form').onsubmit = function(e){ e.preventDefault(); modal.remove(); };
            });
          }
        });

        // Kanban/List toggle
        var toggleBtns = document.querySelectorAll('section button');
        toggleBtns.forEach(function(btn){
          if(btn.textContent.trim()==='Kanban' || btn.textContent.trim()==='List'){
            btn.addEventListener('click', function(){
              var parent = btn.parentElement;
              parent.querySelectorAll('button').forEach(function(b){
                b.style.background = '';
                b.style.color = 'var(--fg-muted)';
              });
              btn.style.background = 'var(--fg-default)';
              btn.style.color = '#ffffff';
            });
          }
        });

        // Task row click feedback
        document.querySelectorAll('.divide-y > div.cursor-pointer').forEach(function(row){
          row.addEventListener('click', function(){
            row.style.background = 'var(--bg-muted)';
            setTimeout(function(){ row.style.background = ''; }, 200);
          });
        });

        // Week selector dropdown
        document.querySelectorAll('button').forEach(function(b){
          if(b.textContent.indexOf('Tento týden') !== -1 && b.querySelector('iconify-icon[icon="solar:alt-arrow-down-linear"]')){
            b.addEventListener('click', function(e){
              e.stopPropagation();
              var existing = document.getElementById('week-dd');
              if(existing){ existing.remove(); return; }
              var rect = b.getBoundingClientRect();
              var dd = document.createElement('div');
              dd.id = 'week-dd';
              dd.className = 'fixed z-50 bg-white rounded-lg border shadow-lg py-1 min-w-[160px]';
              dd.style.borderColor = 'var(--border)';
              dd.style.top = (rect.bottom + 4) + 'px';
              dd.style.left = rect.left + 'px';
              ['Dnes','Tento týden','Tento měsíc','Příští týden','Vlastní rozsah'].forEach(function(o){
                var item = document.createElement('a');
                item.href = '#';
                item.className = 'block px-3 py-1.5 text-sm hover:bg-[var(--bg-muted)]';
                item.textContent = o;
                item.onclick = function(ev){ ev.preventDefault(); b.querySelector('span').textContent = o; dd.remove(); };
                dd.appendChild(item);
              });
              document.body.appendChild(dd);
              setTimeout(function(){
                document.addEventListener('click', function c(ev){ if(!dd.contains(ev.target)){ dd.remove(); document.removeEventListener('click', c); } });
              },0);
            });
          }
        });

        // Drag & drop kanban cards
        document.querySelectorAll('.cursor-grab').forEach(function(card){
          card.setAttribute('draggable', 'true');
          card.addEventListener('dragstart', function(e){
            card.style.opacity = '0.4';
            e.dataTransfer.setData('text/plain', '');
            window.__draggedCard = card;
          });
          card.addEventListener('dragend', function(){
            card.style.opacity = '';
            window.__draggedCard = null;
          });
        });
        document.querySelectorAll('.w-72.shrink-0 .space-y-2, .w-72.shrink-0 [class*="space-y-2"]').forEach(function(col){
          col.addEventListener('dragover', function(e){ e.preventDefault(); col.style.background = 'rgba(99,102,241,0.05)'; });
          col.addEventListener('dragleave', function(){ col.style.background = ''; });
          col.addEventListener('drop', function(e){
            e.preventDefault();
            col.style.background = '';
            if(window.__draggedCard){ col.appendChild(window.__draggedCard); }
          });
        });
      })();
    


      (function(){function toast(message){var old=document.getElementById('os-toast');if(old)old.remove();var t=document.createElement('div');t.id='os-toast';t.className='fixed bottom-5 right-5 z-[80] rounded-lg border bg-white px-4 py-3 text-sm shadow-xl flex items-center gap-2';t.style.borderColor='var(--border)';t.innerHTML='<span class=\'w-2 h-2 rounded-full\' style=\'background: var(--success);\'></span><span>'+message+'</span>';document.body.appendChild(t);setTimeout(function(){t.remove();},2600)}var mobileBtn=document.getElementById('mobile-nav-open');if(mobileBtn){mobileBtn.addEventListener('click',function(){var existing=document.getElementById('mobile-drawer');if(existing){existing.remove();return}var sidebar=document.querySelector('aside');var drawer=document.createElement('div');drawer.id='mobile-drawer';drawer.className='fixed inset-0 z-[70] lg:hidden';drawer.innerHTML='<div class=\'absolute inset-0 bg-black/40\' id=\'mobile-drawer-backdrop\'></div><div class=\'absolute inset-y-0 left-0 w-[280px] overflow-y-auto\' style=\'background: var(--bg-sidebar);\'>'+ (sidebar?sidebar.innerHTML:'') +'</div>';document.body.appendChild(drawer);drawer.addEventListener('click',function(e){if(e.target.id==='mobile-drawer-backdrop')drawer.remove();});drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();toast('Sekce otevřena: '+a.textContent.trim());drawer.remove();});});});}document.addEventListener('click',function(e){var action=e.target.closest('.app-action');if(action){e.preventDefault();toast(action.getAttribute('data-action')||'Akce provedena');}var toggle=e.target.closest('.os-toggle');if(toggle){e.preventDefault();var knob=toggle.querySelector('span span');var track=toggle.querySelector('span');var on=knob&&knob.classList.contains('ml-4');if(knob&&track){if(on){knob.classList.remove('ml-4');track.style.background='var(--bg-muted)';toast('Automatizace vypnuta');}else{knob.classList.add('ml-4');track.style.background='var(--success)';toast('Automatizace zapnuta');}}}});var exportBtn=document.getElementById('export-report');if(exportBtn){exportBtn.addEventListener('click',function(e){e.preventDefault();var data={app:'ContentAgency OS',exportedAt:new Date().toISOString(),metrics:{published:42,approvalAverageDays:1.8,blockers:7,mrr:'184k Kč'}};var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download='contentagency-os-report.json';a.click();URL.revokeObjectURL(url);toast('Report exportován');});}})();
    


      (function(){var navLinks=document.querySelectorAll('aside nav a, #mobile-drawer a');var dashboard=document.querySelector('main > div.px-6.lg\\:px-10.py-8.max-w-\\[1400px\\]');var pageViews=document.getElementById('page-views');var breadcrumb=document.querySelector('header span.font-medium');function showPage(hash){var id=hash.replace('#','');if(!id||id==='prehled'){if(dashboard)dashboard.classList.remove('hidden');if(pageViews)pageViews.classList.add('hidden');if(breadcrumb)breadcrumb.textContent='Přehled';return;}var target=document.getElementById(id);if(!target){if(dashboard)dashboard.classList.remove('hidden');if(pageViews)pageViews.classList.add('hidden');return;}if(dashboard)dashboard.classList.add('hidden');if(pageViews){pageViews.classList.remove('hidden');pageViews.querySelectorAll('.page-view').forEach(function(s){s.classList.add('hidden');});target.classList.remove('hidden');}var h1=target.querySelector('h1');if(breadcrumb&&h1)breadcrumb.textContent=h1.textContent;window.scrollTo({top:0,behavior:'smooth'});}document.querySelectorAll('aside nav a').forEach(function(a){a.addEventListener('click',function(e){var href=a.getAttribute('href')||'';if(href.startsWith('#')){e.preventDefault();e.stopImmediatePropagation();showPage(href);document.querySelectorAll('aside nav a').forEach(function(l){l.style.background='';l.style.color='var(--fg-sidebar-muted)';l.classList.add('hover:bg-white/5');});a.style.background='var(--bg-sidebar-accent)';a.style.color='#ffffff';a.classList.remove('hover:bg-white/5');}},true);});})();
    


      (function(){function applyTheme(dark){var btn=document.getElementById('theme-toggle-btn');if(dark){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}if(btn){var track=btn.querySelector('span');var knob=btn.querySelector('span span');if(track&&knob){if(dark){knob.classList.add('ml-4');track.style.background='var(--success)';}else{knob.classList.remove('ml-4');track.style.background='var(--bg-muted)';}}}try{localStorage.setItem('ca-theme',dark?'dark':'light');}catch(e){}}var saved='light';try{saved=localStorage.getItem('ca-theme')||'light';}catch(e){}applyTheme(saved==='dark');document.addEventListener('click',function(e){var t=e.target.closest('#theme-toggle-btn');if(!t)return;e.preventDefault();e.stopImmediatePropagation();applyTheme(!document.documentElement.classList.contains('dark'));},true);})();
    


      (function(){
        // Make library cards clickable
        function openLibraryFolder(name){
          var titles = {'brand-kits':'Brand kits','foto-archiv':'Foto archiv','video-assety':'Video assety','sablony':'Šablony'};
          var items = {
            'brand-kits':[{n:'Albrecht Fitness — Brand Guide.pdf',m:'PDF · 2.4 MB'},{n:'PrahaMart — Logo balíček.zip',m:'ZIP · 18 MB'},{n:'DuoCards — Color palette.fig',m:'Figma · 1.1 MB'},{n:'CityCafé — Typography.pdf',m:'PDF · 980 KB'}],
            'foto-archiv':[{n:'albrecht-gym-session-01.jpg',m:'JPG · 4.2 MB'},{n:'prahamart-recept-caprese.jpg',m:'JPG · 3.8 MB'},{n:'citycafe-prazicka-detail.jpg',m:'JPG · 5.1 MB'},{n:'duocards-mockup-mhd.jpg',m:'JPG · 2.9 MB'}],
            'video-assety':[{n:'albrecht-brisaky-RAW-001.mp4',m:'MP4 · 1.2 GB'},{n:'prahamart-grilovani-b-roll.mp4',m:'MP4 · 820 MB'},{n:'citycafe-prazeni-timelapse.mov',m:'MOV · 640 MB'}],
            'sablony':[{n:'Reels — Hook + Scénář',m:'Šablona karty'},{n:'Carousel — 5 slidů',m:'Šablona karty'},{n:'Story — Recept týdne',m:'Šablona karty'},{n:'Reels — Mýty (5 mýtů o…)',m:'Šablona karty'}]
          };
          var t = titles[name] || 'Složka';
          var list = items[name] || [];
          var modal = document.createElement('div');
          modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
          modal.style.background = 'rgba(10,10,11,0.4)';
          var rows = list.map(function(f){return '<div class="flex items-center justify-between px-4 py-3 hover:bg-[var(--bg-muted)] cursor-pointer"><div class="flex items-center gap-3 min-w-0"><iconify-icon icon="solar:document-linear" width="18" style="color: var(--fg-muted); flex-shrink:0;"></iconify-icon><div class="min-w-0"><div class="text-sm font-medium truncate">'+f.n+'</div><div class="text-xs" style="color: var(--fg-muted);">'+f.m+'</div></div></div><iconify-icon icon="solar:download-minimalistic-linear" width="16" style="color: var(--fg-muted);"></iconify-icon></div>';}).join('');
          modal.innerHTML = '<div class="w-full max-w-lg rounded-xl border shadow-xl overflow-hidden" style="background: var(--bg-card); border-color: var(--border);"><div class="px-5 py-4 border-b flex items-center justify-between" style="border-color: var(--border);"><div class="flex items-center gap-2"><iconify-icon icon="solar:folder-linear" width="18"></iconify-icon><h3 class="text-sm font-semibold tracking-tight">'+t+'</h3><span class="text-xs font-mono px-1.5 py-0.5 rounded" style="background: var(--bg-muted); color: var(--fg-muted);">'+list.length+'</span></div><button class="lib-close p-1 rounded hover:bg-[var(--bg-muted)]"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button></div><div class="divide-y max-h-96 overflow-y-auto" style="border-color: var(--border);">'+rows+'</div><div class="px-5 py-3 border-t flex justify-end gap-2" style="border-color: var(--border);"><button class="lib-close px-3 py-1.5 rounded-md border text-sm" style="border-color: var(--border);">Zavřít</button><button class="px-3 py-1.5 rounded-md text-sm font-medium text-white" style="background: var(--fg-default);">Nahrát soubor</button></div></div>';
          modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
          modal.querySelectorAll('.lib-close').forEach(function(b){ b.onclick=function(){ modal.remove(); }; });
          document.body.appendChild(modal);
        }
        document.addEventListener('click', function(e){
          var lib = e.target.closest('.library-link');
          if(lib){ e.preventDefault(); openLibraryFolder(lib.getAttribute('data-library-folder')); }
        });

        // Fix Kanban/List/Calendar toggles — find all groups with these buttons
        function buildCalendarHTML(){
          var days = ['PO','ÚT','ST','ČT','PÁ','SO','NE'];
          var cells = '';
          var events = {2:[{c:'#10B981',t:'Břišáky střih'}],3:[{c:'#6366f1',t:'Slovíčka MHD'}],4:[{c:'#f59e0b',t:'Recept týdne'}],5:[{c:'#ec4899',t:'Pražička'}],8:[{c:'#10B981',t:'Po 35 a fit (3/4)'}],10:[{c:'#6366f1',t:'Streak reels'}]};
          for(var i=0;i<14;i++){
            var ev = events[i]||[];
            var evHtml = ev.map(function(e){return '<div class="text-xs px-1.5 py-0.5 rounded mt-1 truncate" style="background:'+e.c+'20;color:'+e.c+';">'+e.t+'</div>';}).join('');
            cells += '<div class="border rounded-lg p-2 min-h-[80px]" style="border-color: var(--border); background: var(--bg-card);"><div class="text-xs font-mono" style="color: var(--fg-muted);">'+(14+i)+'. 5.</div>'+evHtml+'</div>';
          }
          var header = days.concat(days).map(function(d){return '<div class="text-xs font-medium uppercase tracking-wider text-center" style="color: var(--fg-muted);">'+d+'</div>';}).join('');
          return '<div class="rounded-xl border p-4" style="border-color: var(--border); background: var(--bg-card);"><div class="grid grid-cols-7 gap-2 mb-2">'+header+'</div><div class="grid grid-cols-7 gap-2">'+cells+'</div></div>';
        }
        function buildListHTML(){
          var rows = [
            {c:'#10B981',cl:'ALBRECHT',t:'Reels: Břišáky bez fitka — finální střih',s:'Postprodukce',d:'15:00',u:'TN'},
            {c:'#6366f1',cl:'DUOCARDS',t:'Slovíčka v MHD — 30 min denně',s:'Scénář',d:'DNES',u:'TN'},
            {c:'#f59e0b',cl:'PRAHAMART',t:'Recept týdne — letní caprese',s:'Postprodukce',d:'19. 5.',u:'PV'},
            {c:'#ec4899',cl:'CITYCAFÉ',t:'Příběh pražičky — finální verze',s:'Ke schválení',d:'2 dny',u:'LK'},
            {c:'#10B981',cl:'ALBRECHT',t:'Jak jíst v restauracích a držet formu',s:'Scénář',d:'15. 5.',u:'AN'},
            {c:'#6366f1',cl:'DUOCARDS',t:'Streak motivační reels — týden 3',s:'Naplánováno',d:'21. 5.',u:'TN'},
            {c:'#8b5cf6',cl:'HAMROZY',t:'Stavba domu A — drone reels',s:'Postprodukce',d:'blokováno',u:'LK'}
          ];
          var tr = rows.map(function(r){return '<tr class="hover:bg-[var(--bg-muted)] cursor-pointer"><td class="px-4 py-3"><span class="text-xs font-mono" style="color: var(--fg-muted);"><span class="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style="background:'+r.c+';"></span>'+r.cl+'</span></td><td class="px-4 py-3 text-sm font-medium">'+r.t+'</td><td class="px-4 py-3 text-xs" style="color: var(--fg-muted);">'+r.s+'</td><td class="px-4 py-3 text-xs font-mono">'+r.d+'</td><td class="px-4 py-3"><div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style="background: var(--bg-muted);">'+r.u+'</div></td></tr>';}).join('');
          return '<div class="rounded-xl border overflow-hidden" style="border-color: var(--border); background: var(--bg-card);"><table class="w-full text-sm"><thead style="background: var(--bg-app); color: var(--fg-muted);"><tr class="text-left text-xs"><th class="px-4 py-3 font-medium">Klient</th><th class="px-4 py-3 font-medium">Karta</th><th class="px-4 py-3 font-medium">Fáze</th><th class="px-4 py-3 font-medium">Deadline</th><th class="px-4 py-3 font-medium">Owner</th></tr></thead><tbody class="divide-y" style="border-color: var(--border);">'+tr+'</tbody></table></div>';
        }
        function setupViewToggles(){
          document.querySelectorAll('.flex.p-0\\.5.rounded-md.border').forEach(function(group){
            var btns = group.querySelectorAll('button');
            if(btns.length<2) return;
            var labels = Array.from(btns).map(function(b){return b.textContent.trim();});
            if(labels.indexOf('Kanban')===-1) return;
            if(group.dataset.viewBound) return;
            group.dataset.viewBound='1';
            // Find the kanban container (sibling structure: scrollable kanban)
            var section = group.closest('section');
            if(!section) return;
            var kanbanContainer = section.querySelector('.overflow-x-auto');
            if(!kanbanContainer) return;
            if(!kanbanContainer.dataset.original){
              kanbanContainer.dataset.original = kanbanContainer.innerHTML;
            }
            btns.forEach(function(btn){
              btn.addEventListener('click', function(e){
                e.preventDefault();
                var label = btn.textContent.trim();
                btns.forEach(function(b){ b.style.background=''; b.style.color='var(--fg-muted)'; });
                btn.style.background='var(--fg-default)'; btn.style.color='#ffffff';
                if(label==='Kanban'){
                  kanbanContainer.className='overflow-x-auto -mx-6 lg:-mx-10 px-6 lg:px-10 pb-2';
                  kanbanContainer.innerHTML = kanbanContainer.dataset.original;
                } else if(label==='List'){
                  kanbanContainer.className='pb-2';
                  kanbanContainer.innerHTML = buildListHTML();
                } else if(label==='Kalendář'){
                  kanbanContainer.className='pb-2';
                  kanbanContainer.innerHTML = buildCalendarHTML();
                }
              });
            });
          });
        }
        setupViewToggles();

        // Make sidebar nav items not previously wired open their page-views via existing showPage logic — already handled.
        // Add finished-state polish: ensure all .page-view sections are reachable; add active nav highlight on initial load for prehled.
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex flex-col w-[260px] shrink-0 fixed inset-y-0 left-0 border-r" style={{background: 'var(--bg-sidebar)', borderColor: 'rgba(255,255,255,0.06)'}}>

<div className="px-5 py-5 border-b" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: '#fafafa', color: '#0a0a0b'}}>
<span className="text-sm font-semibold tracking-tighter">CA</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-tight">
                ContentAgency
              </span>
<span className="text-xs" style={{color: 'var(--fg-sidebar-muted)'}}>
                Production OS
              </span>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
<div>
<div className="px-2 mb-1.5 text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-sidebar-muted)', fontSize: '11px'}}>
              Práce
            </div>
<div className="space-y-0.5">
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm text-white" data-target-page="prehled" href="#prehled" style={{background: 'var(--bg-sidebar-accent)'}}>
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-medium">Přehled</span>
</a>
<a className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#asistent" style={{color: 'var(--fg-sidebar-muted)'}}>
<span className="flex items-center gap-2.5">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span>Asistent</span>
</span>
<span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{background: 'rgba(245,158,11,0.15)', color: '#fbbf24'}}>
                  3
                </span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#vyrobni-linka" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
<span>Výrobní linka</span>
</a>
<a className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#volne-ukoly" style={{color: 'var(--fg-sidebar-muted)'}}>
<span className="flex items-center gap-2.5">
<iconify-icon icon="solar:hand-money-linear" width="18"></iconify-icon>
<span>Volné úkoly</span>
</span>
<span className="text-xs font-mono" style={{color: 'var(--fg-sidebar-muted)'}}>
                  5
                </span>
</a>
<a className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#inbox" style={{color: 'var(--fg-sidebar-muted)'}}>
<span className="flex items-center gap-2.5">
<iconify-icon icon="solar:inbox-linear" width="18"></iconify-icon>
<span>Inbox</span>
</span>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--info)'}}></span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#cykly" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:refresh-circle-linear" width="18"></iconify-icon>
<span>Cykly</span>
</a>
</div>
</div>
<div>
<div className="px-2 mb-1.5 text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-sidebar-muted)', fontSize: '11px'}}>
              Klienti &amp; obsah
            </div>
<div className="space-y-0.5">
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#klienti" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Klienti</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#napady" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:lightbulb-linear" width="18"></iconify-icon>
<span>Nápady od klientů</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#knihovna" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:book-2-linear" width="18"></iconify-icon>
<span>Knihovna</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#ai-mozek" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
<span>AI Mozek</span>
</a>
</div>
</div>
<div>
<div className="px-2 mb-1.5 text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-sidebar-muted)', fontSize: '11px'}}>
              Provoz
            </div>
<div className="space-y-0.5">
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#operations" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
<span>Operations</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#fakturace" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
<span>Fakturace</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#tym" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span>Tým</span>
</a>
<a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm hover:bg-white/5" href="#nastaveni" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
<span>Nastavení</span>
</a>
</div>
</div>
</nav>

<div className="px-3 py-3 border-t" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
<div className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white'}}>
              ŠH
            </div>
<div className="flex-1 min-w-0">
<div className="text-sm text-white font-medium truncate">
                Štěpán Hořák
              </div>
<div className="text-xs truncate" style={{color: 'var(--fg-sidebar-muted)'}}>
                Admin
              </div>
</div>
<button className="p-1 rounded hover:bg-white/10" style={{color: 'var(--fg-sidebar-muted)'}}>
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-[260px] min-w-0">

<header className="sticky top-0 z-30 backdrop-blur-md border-b" style={{background: 'rgba(250,250,251,0.85)', borderColor: 'var(--border)'}}>
<div className="px-6 lg:px-10 py-3.5 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm">
<button aria-label="Otevřít navigaci" className="lg:hidden p-2 -ml-2 rounded-md border bg-white hover:bg-[var(--bg-muted)] focus-ring" id="mobile-nav-open" style={{borderColor: 'var(--border)', color: 'var(--fg-default)'}}>
<iconify-icon icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
</button>
<span style={{color: 'var(--fg-muted)'}}>Pracovna</span>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'var(--fg-subtle)'}} width="14"></iconify-icon>
<span className="font-medium">Přehled</span>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm hover-lift" style={{borderColor: 'var(--border)', color: 'var(--fg-muted)', background: 'white'}}>
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
<span>Hledat...</span>
<kbd className="text-xs font-mono px-1.5 py-0.5 rounded border" style={{borderColor: 'var(--border)', color: 'var(--fg-subtle)'}}>
                  ⌘K
                </kbd>
</button>
<button className="p-2 rounded-md hover:bg-white border border-transparent hover:border-[var(--border)] relative" style={{color: 'var(--fg-muted)'}}>
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{background: 'var(--danger)'}}></span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-white hover-lift" style={{background: 'var(--fg-default)'}}>
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span>Nová karta</span>
</button>
</div>
</div>
</header>
<div className="px-6 lg:px-10 py-8 max-w-[1400px] mx-auto space-y-10">

<section>
<div className="flex items-end justify-between flex-wrap gap-4">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{background: 'var(--success)'}}></span>
<span className="text-xs font-mono uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                    Středa, 14. května
                  </span>
</div>
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                  Vítej zpět, Štěpáne
                </h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                  Dnes 4 úkoly, 2 čekají na klienta. Nejbližší deadline za 3
                  hodiny.
                </p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm hover-lift" style={{borderColor: 'var(--border)', color: 'var(--fg-default)', background: 'white'}}>
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Tento týden</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: 'var(--fg-default)'}} width="18"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">
                  Co potřebuje pozornost
                </h2>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                  3
                </span>
</div>
<a className="text-sm flex items-center gap-1 hover:underline" href="#" style={{color: 'var(--fg-muted)'}}>
                Zobrazit všechny
                <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

<a className="group rounded-xl bg-white border p-4 hover-lift block" href="#cykly" style={{borderColor: 'var(--border)', borderLeft: '3px solid var(--danger)'}}>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:danger-triangle-linear" style={{color: 'var(--danger)'}} width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--danger)'}}>
                      Kritické
                    </span>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{color: 'var(--fg-subtle)'}} width="14"></iconify-icon>
</div>
<h3 className="text-sm font-medium leading-snug mb-1">
                  Nestíháte cyklus „Květen Albrecht"
                </h3>
<p className="text-xs leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Zbývají 4 výstupy a 2 dny do uzávěrky.
                </p>
</a>

<a className="group rounded-xl bg-white border p-4 hover-lift block" href="#klienti" style={{borderColor: 'var(--border)', borderLeft: '3px solid var(--warning)'}}>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bell-linear" style={{color: 'var(--warning)'}} width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--warning)'}}>
                      Pozor
                    </span>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{color: 'var(--fg-subtle)'}} width="14"></iconify-icon>
</div>
<h3 className="text-sm font-medium leading-snug mb-1">
                  PrahaMart blokuje 5 karet
                </h3>
<p className="text-xs leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Klient nereaguje déle než 3 dny.
                </p>
</a>

<a className="group rounded-xl bg-white border p-4 hover-lift block" href="#fakturace" style={{borderColor: 'var(--border)', borderLeft: '3px solid var(--info)'}}>
<div className="flex items-start justify-between mb-2.5">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:info-circle-linear" style={{color: 'var(--info)'}} width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--info)'}}>
                      Info
                    </span>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" style={{color: 'var(--fg-subtle)'}} width="14"></iconify-icon>
</div>
<h3 className="text-sm font-medium leading-snug mb-1">
                  Pošli fakturu DuoCards
                </h3>
<p className="text-xs leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Paušál za květen — splatnost za 3 dny.
                </p>
</a>
</div>
</section>

<section>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
<a className="rounded-xl bg-white border p-5 hover-lift" href="#vyrobni-linka" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--bg-muted)'}}>
<iconify-icon icon="solar:calendar-mark-linear" style={{color: 'var(--fg-default)'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                    DNES
                  </span>
</div>
<div className="text-3xl font-semibold tracking-tight">4</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  Úkoly dnes
                </div>
</a>
<a className="rounded-xl bg-white border p-5 hover-lift" href="#vyrobni-linka" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--bg-muted)'}}>
<iconify-icon icon="solar:calendar-linear" style={{color: 'var(--fg-default)'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                    7D
                  </span>
</div>
<div className="text-3xl font-semibold tracking-tight">12</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  Tento týden
                </div>
</a>
<a className="rounded-xl bg-white border p-5 hover-lift" href="#inbox" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(245,158,11,0.1)'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{color: 'var(--warning)'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-mono" style={{color: 'var(--warning)'}}>
                    3D
                  </span>
</div>
<div className="text-3xl font-semibold tracking-tight">5</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  Čeká na klienta
                </div>
</a>
<a className="rounded-xl bg-white border p-5 hover-lift" href="#vyrobni-linka" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'rgba(16,185,129,0.1)'}}>
<iconify-icon icon="solar:check-circle-linear" style={{color: 'var(--success)'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-mono" style={{color: 'var(--success)'}}>
                    +2
                  </span>
</div>
<div className="text-3xl font-semibold tracking-tight">8</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  Pending schválení
                </div>
</a>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-3">

<div className="rounded-xl bg-white border" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between px-5 py-4 border-b" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold tracking-tight">
                    Dnešní úkoly
                  </h3>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                    4
                  </span>
</div>
<button className="text-xs hover:underline" style={{color: 'var(--fg-muted)'}}>
                  Zobrazit vše
                </button>
</div>
<div className="divide-y" style={{-TwDivideOpacity: '1'}}>

<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer transition-colors">
<div className="w-1 h-10 rounded-full shrink-0" style={{background: '#10B981'}}></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                        ALBRECHT
                      </span>
<span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{background: 'rgba(239,68,68,0.1)', color: 'var(--danger)'}}>
                        URGENT
                      </span>
</div>
<div className="text-sm font-medium truncate">
                      Reels: Břišáky bez fitka — finální střih
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--danger)'}}>
                    15:00
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer transition-colors">
<div className="w-1 h-10 rounded-full shrink-0" style={{background: '#6366f1'}}></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                        DUOCARDS
                      </span>
</div>
<div className="text-sm font-medium truncate">
                      Scénář: Jak se učit slovíčka v MHD
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    17:30
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer transition-colors">
<div className="w-1 h-10 rounded-full shrink-0" style={{background: '#f59e0b'}}></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                        PRAHAMART
                      </span>
</div>
<div className="text-sm font-medium truncate">
                      Post: Recept týdne — letní salát
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    19:00
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer transition-colors">
<div className="w-1 h-10 rounded-full shrink-0" style={{background: '#ec4899'}}></div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                        CITYCAFÉ
                      </span>
</div>
<div className="text-sm font-medium truncate">
                      Nápad: Story o pražících — review draft
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    21:00
                  </div>
</div>
</div>
</div>

<div className="rounded-xl bg-white border" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between px-5 py-4 border-b" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold tracking-tight">
                    Tento týden
                  </h3>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                    12
                  </span>
</div>
<button className="text-xs hover:underline" style={{color: 'var(--fg-muted)'}}>
                  Otevřít kanban
                </button>
</div>
<div className="divide-y">
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background: '#fef3c7', color: '#92400e'}}>
                    AN
                  </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate">
                      Brand audit — Hamrozy Stavby
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Anna · Koncept
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    ČT
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background: '#dbeafe', color: '#1e40af'}}>
                    TN
                  </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate">
                      Reels série: Po 35 a fit (3/4)
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Tomáš · Postprodukce
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    PÁ
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background: '#fce7f3', color: '#9d174d'}}>
                    LK
                  </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate">
                      Tone of voice update — Dr. Adam Klinik
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Lucie · Ke schválení
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--warning)'}}>
                    PÁ
                  </div>
</div>
<div className="px-5 py-3.5 flex items-center gap-3 hover:bg-[var(--bg-app)] cursor-pointer">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0" style={{background: '#ede9fe', color: '#5b21b6'}}>
                    PV
                  </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium truncate">
                      Story: Cappuccino vs latte rozdíly
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Petr · Natáčení
                    </div>
</div>
<div className="text-xs font-mono shrink-0" style={{color: 'var(--fg-muted)'}}>
                    SO
                  </div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:refresh-circle-linear" style={{color: 'var(--fg-default)'}} width="18"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">
                  Cykly podle klienta
                </h2>
</div>
<a className="text-sm flex items-center gap-1 hover:underline" href="#" style={{color: 'var(--fg-muted)'}}>
                Všechny cykly
                <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

<a className="rounded-xl bg-white border p-5 hover-lift block" href="#cykly" style={{borderColor: 'var(--border)'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full" style={{background: '#10B981'}}></div>
<div>
<div className="text-sm font-semibold tracking-tight">
                        Albrecht Fitness
                      </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                        Květen 2026
                      </div>
</div>
</div>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'rgba(239,68,68,0.1)', color: 'var(--danger)'}}>
                    2 dny
                  </span>
</div>

<div className="flex h-1.5 rounded-full overflow-hidden mb-3" style={{background: 'var(--bg-muted)'}}>
<div style={{width: '50%', background: 'var(--success)'}}></div>
<div style={{width: '12.5%', background: 'var(--warning)'}}></div>
<div style={{width: '25%', background: 'var(--fg-subtle)'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span style={{color: 'var(--fg-muted)'}}>4 z 8 publikováno</span>
<span className="font-mono" style={{color: 'var(--fg-default)'}}>
                    50%
                  </span>
</div>
<div className="flex items-center gap-3 mt-3 pt-3 border-t text-xs" style={{borderColor: 'var(--border)'}}>
<span className="flex items-center gap-1" style={{color: 'var(--success)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--success)'}}></span>
                    4 publik.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--warning)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
                    1 schvál.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--fg-muted)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--fg-subtle)'}}></span>
                    2 výroba
                  </span>
</div>
</a>

<a className="rounded-xl bg-white border p-5 hover-lift block" href="#cykly" style={{borderColor: 'var(--border)'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full" style={{background: '#f59e0b'}}></div>
<div>
<div className="text-sm font-semibold tracking-tight">
                        PrahaMart
                      </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                        Květen 2026
                      </div>
</div>
</div>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                    9 dní
                  </span>
</div>
<div className="flex h-1.5 rounded-full overflow-hidden mb-3" style={{background: 'var(--bg-muted)'}}>
<div style={{width: '25%', background: 'var(--success)'}}></div>
<div style={{width: '8.3%', background: 'var(--warning)'}}></div>
<div style={{width: '50%', background: 'var(--fg-subtle)'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span style={{color: 'var(--fg-muted)'}}>
                    3 z 12 publikováno
                  </span>
<span className="font-mono" style={{color: 'var(--fg-default)'}}>
                    25%
                  </span>
</div>
<div className="flex items-center gap-3 mt-3 pt-3 border-t text-xs" style={{borderColor: 'var(--border)'}}>
<span className="flex items-center gap-1" style={{color: 'var(--success)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--success)'}}></span>
                    3 publik.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--warning)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
                    1 schvál.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--fg-muted)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--fg-subtle)'}}></span>
                    6 výroba
                  </span>
</div>
</a>

<a className="rounded-xl bg-white border p-5 hover-lift block" href="#cykly" style={{borderColor: 'var(--border)'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full" style={{background: '#6366f1'}}></div>
<div>
<div className="text-sm font-semibold tracking-tight">
                        DuoCards
                      </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                        Květen 2026
                      </div>
</div>
</div>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                    na cestě
                  </span>
</div>
<div className="flex h-1.5 rounded-full overflow-hidden mb-3" style={{background: 'var(--bg-muted)'}}>
<div style={{width: '75%', background: 'var(--success)'}}></div>
<div style={{width: '12.5%', background: 'var(--warning)'}}></div>
<div style={{width: '12.5%', background: 'var(--fg-subtle)'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span style={{color: 'var(--fg-muted)'}}>6 z 8 publikováno</span>
<span className="font-mono" style={{color: 'var(--success)'}}>
                    75%
                  </span>
</div>
<div className="flex items-center gap-3 mt-3 pt-3 border-t text-xs" style={{borderColor: 'var(--border)'}}>
<span className="flex items-center gap-1" style={{color: 'var(--success)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--success)'}}></span>
                    6 publik.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--warning)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
                    1 schvál.
                  </span>
<span className="flex items-center gap-1" style={{color: 'var(--fg-muted)'}}>
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--fg-subtle)'}}></span>
                    1 výroba
                  </span>
</div>
</a>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:widget-2-linear" style={{color: 'var(--fg-default)'}} width="18"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">
                  Výrobní linka — náhled
                </h2>
</div>
<div className="flex items-center gap-2">
<div className="flex p-0.5 rounded-md border" style={{borderColor: 'var(--border)', background: 'white'}}>
<button className="px-2.5 py-1 rounded text-xs font-medium" style={{background: 'var(--fg-default)', color: 'white'}}>
                    Kanban
                  </button>
<button className="px-2.5 py-1 rounded text-xs font-medium" style={{color: 'var(--fg-muted)'}}>
                    List
                  </button>
</div>
<a className="text-sm flex items-center gap-1 hover:underline" href="#vyrobni-linka" style={{color: 'var(--fg-muted)'}}>
                  Otevřít
                  <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="overflow-x-auto -mx-6 lg:-mx-10 px-6 lg:px-10 pb-2">
<div className="flex gap-3 min-w-max">

<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Scénář
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        6
                      </span>
</div>
<button className="p-1 rounded hover:bg-white" style={{color: 'var(--fg-subtle)'}}>
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Jak jíst v restauracích a držet formu
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          15. 5.
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#fef3c7', color: '#92400e'}}>
                          AN
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)', borderLeft: '2px solid var(--danger)'}}>
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                            DUOCARDS
                          </span>
</div>
<span className="text-xs px-1 rounded font-medium" style={{background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', fontSize: '10px'}}>
                          URGENT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Slovíčka v MHD — 30 min denně
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--danger)'}}>
                          DNES
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#dbeafe', color: '#1e40af'}}>
                          TN
                        </div>
</div>
</div>
</div>
</div>

<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#ec4899'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Postprodukce
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        8
                      </span>
</div>
<button className="p-1 rounded hover:bg-white" style={{color: 'var(--fg-subtle)'}}>
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#f59e0b'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          PRAHAMART
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Recept týdne — letní caprese
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          19. 5.
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#ede9fe', color: '#5b21b6'}}>
                          PV
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift opacity-60" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#8b5cf6'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                            HAMROZY
                          </span>
</div>
<iconify-icon icon="solar:lock-keyhole-linear" style={{color: 'var(--fg-muted)'}} width="12"></iconify-icon>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Stavba domu A — drone reels
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          blokováno
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#fce7f3', color: '#9d174d'}}>
                          LK
                        </div>
</div>
</div>
</div>
</div>

<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--warning)'}}>
                        Ke schválení
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        4
                      </span>
</div>
</div>
<div className="rounded-lg p-2 space-y-2" style={{background: 'rgba(245,158,11,0.05)', border: '1px dashed rgba(245,158,11,0.3)'}}>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#ec4899'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          CITYCAFÉ
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Příběh pražičky — finální verze
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--warning)'}}>
                          2 dny u klienta
                        </span>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Suplementy — co skutečně funguje
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--warning)'}}>
                          1 den u klienta
                        </span>
</div>
</div>
</div>
</div>

<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#14b8a6'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Naplánováno
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        4
                      </span>
</div>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          DUOCARDS
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Streak motivační reels — týden 3
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          21. 5. · 18:00
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="workflow-center">
<div className="flex items-center justify-between flex-wrap gap-3">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:route-linear" style={{color: 'var(--fg-default)'}} width="18"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">
                  Kompletní workflow
                </h2>
</div>
<button className="app-action flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm hover-lift" data-action="Spuštěn nový produkční cyklus" style={{borderColor: 'var(--border)', background: 'white', color: 'var(--fg-default)'}}>
<iconify-icon icon="solar:play-circle-linear" width="15"></iconify-icon>
                Spustit cyklus
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-3">
<div className="rounded-xl bg-white border p-4 hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--info)'}}>
<iconify-icon icon="solar:inbox-in-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight">Intake</div>
<p className="text-xs mt-1 leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Briefy, nápady klientů a prioritizace vstupů.
                </p>
<div className="mt-3 text-xs font-mono" style={{color: 'var(--info)'}}>
                  7 vstupů
                </div>
</div>
<div className="rounded-xl bg-white border p-4 hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background: 'rgba(99,102,241,0.1)', color: '#6366f1'}}>
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight">Scénář</div>
<p className="text-xs mt-1 leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Zadání, hooky, CTA a interní kontrola kvality.
                </p>
<div className="mt-3 text-xs font-mono" style={{color: '#6366f1'}}>
                  6 karet
                </div>
</div>
<div className="rounded-xl bg-white border p-4 hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background: 'rgba(236,72,153,0.1)', color: '#ec4899'}}>
<iconify-icon icon="solar:clapperboard-play-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight">Výroba</div>
<p className="text-xs mt-1 leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Natáčení, střih, grafika a kompletace assetů.
                </p>
<div className="mt-3 text-xs font-mono" style={{color: '#ec4899'}}>
                  8 aktivních
                </div>
</div>
<div className="rounded-xl bg-white border p-4 hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--warning)'}}>
<iconify-icon icon="solar:clipboard-check-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight">
                  Schválení
                </div>
<p className="text-xs mt-1 leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Portál pro klienty, komentáře a SLA upozornění.
                </p>
<div className="mt-3 text-xs font-mono" style={{color: 'var(--warning)'}}>
                  4 čekají
                </div>
</div>
<div className="rounded-xl bg-white border p-4 hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-tight">
                  Publikace
                </div>
<p className="text-xs mt-1 leading-relaxed" style={{color: 'var(--fg-muted)'}}>
                  Kalendář, exporty, fakturace a reporting výsledků.
                </p>
<div className="mt-3 text-xs font-mono" style={{color: 'var(--success)'}}>
                  13 hotovo
                </div>
</div>
</div>
</section>
<section className="rounded-xl bg-white border p-5" data-section-id="command-palette" id="command-palette" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-4 flex-wrap gap-3">
<div>
<h2 className="text-sm font-semibold tracking-tight">
                  Rychlé akce
                </h2>
<p className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  Klávesová zkratka
                  <kbd className="font-mono px-1.5 py-0.5 rounded border" style={{borderColor: 'var(--border)'}}>
                    ⌘K
                  </kbd>
                  otevře vyhledávání. Tady jsou nejčastější akce.
                </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<button className="app-action flex flex-col items-start gap-2 rounded-lg border p-3 hover-lift text-left" data-action="Otevřen formulář pro novou kartu" style={{borderColor: 'var(--border)'}}>
<iconify-icon icon="solar:add-square-linear" width="18"></iconify-icon>
<div className="text-sm font-medium">Nová karta</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Brief, klient, deadline
                </div>
</button>
<button className="app-action flex flex-col items-start gap-2 rounded-lg border p-3 hover-lift text-left" data-action="Spuštěn nový měsíční cyklus" style={{borderColor: 'var(--border)'}}>
<iconify-icon icon="solar:refresh-circle-linear" width="18"></iconify-icon>
<div className="text-sm font-medium">Nový cyklus</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Měsíční plán pro klienta
                </div>
</button>
<button className="app-action flex flex-col items-start gap-2 rounded-lg border p-3 hover-lift text-left" data-action="Připraven formulář faktury" style={{borderColor: 'var(--border)'}}>
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
<div className="text-sm font-medium">Vystavit fakturu</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  PDF + automatika splatnosti
                </div>
</button>
<button className="app-action flex flex-col items-start gap-2 rounded-lg border p-3 hover-lift text-left" data-action="Otevřena pozvánka pro nového člena týmu" style={{borderColor: 'var(--border)'}}>
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon>
<div className="text-sm font-medium">Pozvat člena</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Nastavení rolí a klientů
                </div>
</button>
</div>
</section>
<section className="grid grid-cols-1 xl:grid-cols-3 gap-3" id="analytics-center">
<div className="xl:col-span-2 rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-5">
<div>
<h2 className="text-sm font-semibold tracking-tight">
                    Výkonnost obsahu
                  </h2>
<p className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                    Publikace, schválení a blokery za posledních 30 dní.
                  </p>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm hover-lift" id="export-report" style={{borderColor: 'var(--border)', color: 'var(--fg-default)', background: 'white'}}>
<iconify-icon icon="solar:download-minimalistic-linear" width="14"></iconify-icon>
                  Export
                </button>
</div>
<div className="grid grid-cols-3 gap-3 mb-5">
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)', background: 'var(--bg-app)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Publikováno
                  </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                    42
                  </div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                    +18 % m/m
                  </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)', background: 'var(--bg-app)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Průměrné schválení
                  </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                    1.8 d
                  </div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                    -0.6 d
                  </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)', background: 'var(--bg-app)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Blokery
                  </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                    7
                  </div>
<div className="text-xs mt-1" style={{color: 'var(--warning)'}}>
                    3 klientské
                  </div>
</div>
</div>
<div className="rounded-xl border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between text-xs mb-3" style={{color: 'var(--fg-muted)'}}>
<span>Produkční throughput</span>
<span className="font-mono">Týdny 17–21</span>
</div>
<div className="h-52 flex items-end gap-3 border-b border-l pl-3 pb-3" style={{borderColor: 'var(--border)'}}>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full rounded-t-md" style={{height: '42%', background: 'linear-gradient(to top, #6366f1, #a5b4fc)'}}></div>
<span className="text-[11px] font-mono" style={{color: 'var(--fg-muted)'}}>
                      W17
                    </span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full rounded-t-md" style={{height: '58%', background: 'linear-gradient(to top, #6366f1, #a5b4fc)'}}></div>
<span className="text-[11px] font-mono" style={{color: 'var(--fg-muted)'}}>
                      W18
                    </span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full rounded-t-md" style={{height: '65%', background: 'linear-gradient(to top, #6366f1, #a5b4fc)'}}></div>
<span className="text-[11px] font-mono" style={{color: 'var(--fg-muted)'}}>
                      W19
                    </span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full rounded-t-md" style={{height: '76%', background: 'linear-gradient(to top, #10b981, #86efac)'}}></div>
<span className="text-[11px] font-mono" style={{color: 'var(--fg-muted)'}}>
                      W20
                    </span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full rounded-t-md" style={{height: '71%', background: 'linear-gradient(to top, #10b981, #86efac)'}}></div>
<span className="text-[11px] font-mono" style={{color: 'var(--fg-muted)'}}>
                      W21
                    </span>
</div>
</div>
<div className="flex items-center gap-4 mt-3 text-xs" style={{color: 'var(--fg-muted)'}}>
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full" style={{background: '#6366f1'}}></span>
                    Plán
                  </span>
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full" style={{background: 'var(--success)'}}></span>
                    Nad plánem
                  </span>
</div>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold tracking-tight">
                  Zdraví klientů
                </h2>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                  5 účtů
                </span>
</div>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span>Albrecht Fitness</span>
<span style={{color: 'var(--success)'}}>92</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '92%', background: 'var(--success)'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span>DuoCards</span>
<span style={{color: 'var(--success)'}}>86</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '86%', background: 'var(--success)'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span>PrahaMart</span>
<span style={{color: 'var(--warning)'}}>61</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '61%', background: 'var(--warning)'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs mb-1">
<span>CityCafé</span>
<span style={{color: 'var(--info)'}}>74</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '74%', background: 'var(--info)'}}></div>
</div>
</div>
</div>
<div className="mt-5 pt-4 border-t" style={{borderColor: 'var(--border)'}}>
<button className="app-action w-full px-3 py-2 rounded-md text-sm font-medium text-white hover-lift" data-action="Otevřen klientský health check" style={{background: 'var(--fg-default)'}}>
                  Otevřít health check
                </button>
</div>
</div>
</section>
<section className="grid grid-cols-1 xl:grid-cols-2 gap-3" id="client-finance-center">
<div className="rounded-xl bg-white border overflow-hidden" style={{borderColor: 'var(--border)'}}>
<div className="px-5 py-4 border-b flex items-center justify-between" style={{borderColor: 'var(--border)'}}>
<div>
<h2 className="text-sm font-semibold tracking-tight">
                    Klientské centrum
                  </h2>
<p className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                    Smlouvy, odpovědné osoby, SLA a stav dodávek.
                  </p>
</div>
<button className="app-action px-3 py-1.5 rounded-md border text-sm hover-lift" data-action="Připraven formulář nového klienta" style={{borderColor: 'var(--border)', background: 'white'}}>
                  Nový klient
                </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead style={{background: 'var(--bg-app)', color: 'var(--fg-muted)'}}>
<tr className="text-left text-xs">
<th className="px-5 py-3 font-medium">Klient</th>
<th className="px-5 py-3 font-medium">Owner</th>
<th className="px-5 py-3 font-medium">Plán</th>
<th className="px-5 py-3 font-medium">Stav</th>
</tr>
</thead>
<tbody className="divide-y" style={{borderColor: 'var(--border)'}}>
<tr>
<td className="px-5 py-3 font-medium">Albrecht Fitness</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                        Anna
                      </td>
<td className="px-5 py-3 font-mono text-xs">8/měs.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                          OK
                        </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">PrahaMart</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                        Petr
                      </td>
<td className="px-5 py-3 font-mono text-xs">12/měs.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--warning)'}}>
                          blokuje
                        </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">DuoCards</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                        Tomáš
                      </td>
<td className="px-5 py-3 font-mono text-xs">8/měs.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                          OK
                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-sm font-semibold tracking-tight">
                    Finance &amp; fakturace
                  </h2>
<p className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                    Paušály, náklady a automatické faktury.
                  </p>
</div>
<span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                  +14 %
                </span>
</div>
<div className="grid grid-cols-3 gap-3 mb-4">
<div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>MRR</div>
<div className="text-xl font-semibold tracking-tight mt-1">
                    184k Kč
                  </div>
</div>
<div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Marže
                  </div>
<div className="text-xl font-semibold tracking-tight mt-1">
                    38 %
                  </div>
</div>
<div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Po splatnosti
                  </div>
<div className="text-xl font-semibold tracking-tight mt-1">1</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-lg border px-3 py-2" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">DuoCards · květen</span>
<button className="app-action text-xs px-2 py-1 rounded border" data-action="Faktura DuoCards připravena k odeslání" style={{borderColor: 'var(--border)'}}>
                    Vystavit
                  </button>
</div>
<div className="flex items-center justify-between rounded-lg border px-3 py-2" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">PrahaMart · doplatek</span>
<button className="app-action text-xs px-2 py-1 rounded border" data-action="Upomínka odeslána klientovi PrahaMart" style={{borderColor: 'var(--border)'}}>
                    Upomenout
                  </button>
</div>
</div>
</div>
</section>
<section className="rounded-xl border p-5" data-section-id="client-portal-preview" id="client-portal-preview" style={{borderColor: 'var(--border)', background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-app) 100%)'}}>
<div className="flex items-center justify-between mb-4 flex-wrap gap-3">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight">
                  Klientský portál — náhled
                </h2>
</div>
<button className="app-action px-3 py-1.5 rounded-md border text-sm hover-lift" data-action="Otevřen klientský portál v náhledu" style={{borderColor: 'var(--border)', background: 'white'}}>
                Otevřít jako klient
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                  Co od vás potřebujeme
                </div>
<div className="text-2xl font-semibold tracking-tight mt-2">3</div>
<div className="text-xs mt-1" style={{color: 'var(--warning)'}}>
                  2 schválení · 1 podklad
                </div>
</div>
<div className="rounded-lg bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                  Vaše nápady
                </div>
<div className="text-2xl font-semibold tracking-tight mt-2">8</div>
<div className="text-xs mt-1" style={{color: 'var(--info)'}}>
                  4 ve výrobě · 2 nové
                </div>
</div>
<div className="rounded-lg bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                  Publikováno tento měsíc
                </div>
<div className="text-2xl font-semibold tracking-tight mt-2">13</div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                  +18 % m/m
                </div>
</div>
</div>
</section>
<section className="grid grid-cols-1 lg:grid-cols-3 gap-3" id="automation-center">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h2 className="text-sm font-semibold tracking-tight mb-1">
                Automatizace
              </h2>
<p className="text-xs mb-4" style={{color: 'var(--fg-muted)'}}>
                Pravidla hlídají termíny a klientské blokery.
              </p>
<div className="space-y-3">
<button className="os-toggle w-full flex items-center justify-between rounded-lg border px-3 py-2 text-sm" style={{borderColor: 'var(--border)'}}>
<span>Upozornit 24 h před deadlinem</span>
<span className="w-9 h-5 rounded-full p-0.5 transition-colors" style={{background: 'var(--success)'}}>
<span className="block w-4 h-4 rounded-full bg-white ml-4 transition-all"></span>
</span>
</button>
<button className="os-toggle w-full flex items-center justify-between rounded-lg border px-3 py-2 text-sm" style={{borderColor: 'var(--border)'}}>
<span>Auto reminder klientům po 48 h</span>
<span className="w-9 h-5 rounded-full p-0.5 transition-colors" style={{background: 'var(--success)'}}>
<span className="block w-4 h-4 rounded-full bg-white ml-4 transition-all"></span>
</span>
</button>
<button className="os-toggle w-full flex items-center justify-between rounded-lg border px-3 py-2 text-sm" style={{borderColor: 'var(--border)'}}>
<span>Faktura po uzavření cyklu</span>
<span className="w-9 h-5 rounded-full p-0.5 transition-colors" style={{background: 'var(--bg-muted)'}}>
<span className="block w-4 h-4 rounded-full bg-white transition-all"></span>
</span>
</button>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h2 className="text-sm font-semibold tracking-tight mb-1">
                Šablony karet
              </h2>
<p className="text-xs mb-4" style={{color: 'var(--fg-muted)'}}>
                Rychlý start pro opakované výstupy.
              </p>
<div className="space-y-2">
<button className="app-action w-full text-left rounded-lg border px-3 py-2 hover:bg-[var(--bg-app)]" data-action="Načtena šablona Reels">
<div className="text-sm font-medium">Reels</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Hook, scénář, střih, titulky
                  </div>
</button>
<button className="app-action w-full text-left rounded-lg border px-3 py-2 hover:bg-[var(--bg-app)]" data-action="Načtena šablona Carousel">
<div className="text-sm font-medium">Carousel</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Osnova, copy, design, schválení
                  </div>
</button>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h2 className="text-sm font-semibold tracking-tight mb-1">
                Týmová kapacita
              </h2>
<p className="text-xs mb-4" style={{color: 'var(--fg-muted)'}}>
                Rozdělení práce na tento týden.
              </p>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span>Anna</span>
<span>72 %</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '72%', background: '#f59e0b'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span>Tomáš</span>
<span>64 %</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '64%', background: '#3b82f6'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span>Lucie</span>
<span>81 %</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden" style={{background: 'var(--bg-muted)'}}>
<div className="h-full" style={{width: '81%', background: '#ec4899'}}></div>
</div>
</div>
</div>
<button className="app-action mt-4 w-full px-3 py-2 rounded-md border text-sm" data-action="Kapacitní plán aktualizován" style={{borderColor: 'var(--border)'}}>
                Vyrovnat kapacity
              </button>
</div>
</section>
<section className="pt-6 border-t flex items-center justify-between text-xs flex-wrap gap-3" style={{borderColor: 'var(--border)', color: 'var(--fg-muted)'}}>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{background: 'var(--success)'}}></span>
                Vše v pořádku
              </span>
<span>Poslední aktualizace před 12 sekundami</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:underline" href="#">Dokumentace</a>
<a className="hover:underline" href="#">Klávesové zkratky</a>
<span className="font-mono">v 2.4.1</span>
</div>
</section>
</div>
<div className="px-6 lg:px-10 py-8 max-w-[1400px] mx-auto space-y-10 hidden" id="page-views">
<section className="page-view space-y-6" id="asistent">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Asistent</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                AI asistent pro rychlé akce, návrhy a automatizaci úkolů.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
<div className="lg:col-span-2 rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Konverzace
                </h3>
<div className="space-y-3">
<div className="rounded-lg p-3 text-sm" style={{background: 'var(--bg-muted)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--fg-muted)'}}>
                      VY
                    </div>
                    Navrhni 5 hooků pro Albrecht Reels
                  </div>
<div className="rounded-lg p-3 text-sm border" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--info)'}}>
                      ASISTENT
                    </div>
                    1. Po 35 a fit za 12 minut denně
                    <br/>
                    2. Břišáky bez fitka — 3 cviky
                    <br/>
                    3. Co jíst večer aby se hubnulo
                    <br/>
                    4. 5 mýtů o suplementech
                    <br/>
                    5. Restaurace bez výčitek
                  </div>
</div>
<div className="mt-4 flex gap-2">
<input className="flex-1 px-3 py-2 rounded-md border text-sm outline-none" placeholder="Zeptej se asistenta..." style={{borderColor: 'var(--border)'}}/>
<button className="app-action px-3 py-2 rounded-md text-sm font-medium text-white hover-lift" data-action="Zpráva odeslána asistentovi" style={{background: 'var(--fg-default)'}}>
                    Odeslat
                  </button>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Návrhy úloh
                </h3>
<div className="space-y-2">
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Připomenout PrahaMart</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      5 karet zablokováno 3 dny
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Vyfakturovat DuoCards</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Splatnost za 3 dny
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      Naplánovat reels Albrecht
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      4 výstupy do uzávěrky
                    </div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                Rychlé prompty
              </h3>
<div className="flex flex-wrap gap-2">
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Asistent generuje hooky" style={{borderColor: 'var(--border)'}}>
                  Vygeneruj 5 hooků
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Asistent přepisuje brief na scénář" style={{borderColor: 'var(--border)'}}>
                  Brief → scénář
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Asistent navrhuje CTA" style={{borderColor: 'var(--border)'}}>
                  Navrhni CTA
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Asistent generuje hashtagy" style={{borderColor: 'var(--border)'}}>
                  Hashtagy + caption
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Asistent shrnuje feedback klienta" style={{borderColor: 'var(--border)'}}>
                  Shrň feedback klienta
                </button>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="vyrobni-linka">
<div className="flex items-end justify-between flex-wrap gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight">
                  Výrobní linka
                </h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                  Kompletní kanban přes všechny klienty a fáze produkce.
                </p>
</div>
<div className="flex items-center gap-2">
<div className="flex p-0.5 rounded-md border" style={{borderColor: 'var(--border)', background: 'var(--bg-card)'}}>
<button className="px-2.5 py-1 rounded text-xs font-medium" style={{background: 'var(--fg-default)', color: 'var(--bg-card)'}}>
                    Kanban
                  </button>
<button className="px-2.5 py-1 rounded text-xs font-medium" style={{color: 'var(--fg-muted)'}}>
                    List
                  </button>
<button className="px-2.5 py-1 rounded text-xs font-medium" style={{color: 'var(--fg-muted)'}}>
                    Kalendář
                  </button>
</div>
<button className="app-action flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-white hover-lift" data-action="Otevřen formulář pro novou kartu" style={{background: 'var(--fg-default)'}}>
<iconify-icon icon="solar:add-circle-linear" width="15"></iconify-icon>
                  Nová karta
                </button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--info)'}}></span>
<div className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                    Intake
                  </div>
</div>
<div className="text-2xl font-semibold tracking-tight">7</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  2 nové dnes
                </div>
</div>
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<div className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                    Scénář
                  </div>
</div>
<div className="text-2xl font-semibold tracking-tight">6</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  1 urgent
                </div>
</div>
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#ec4899'}}></span>
<div className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                    Postprodukce
                  </div>
</div>
<div className="text-2xl font-semibold tracking-tight">8</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  1 blokováno
                </div>
</div>
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
<div className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--warning)'}}>
                    Schválení
                  </div>
</div>
<div className="text-2xl font-semibold tracking-tight">4</div>
<div className="text-xs mt-1" style={{color: 'var(--warning)'}}>
                  2 dny u klienta
                </div>
</div>
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--success)'}}></span>
<div className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--success)'}}>
                    Publikováno
                  </div>
</div>
<div className="text-2xl font-semibold tracking-tight">13</div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                  +18 % m/m
                </div>
</div>
</div>
<div className="rounded-xl bg-white border p-4" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-3 flex-wrap gap-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                    Filtry
                  </span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-sm" style={{borderColor: 'var(--border)'}}>
<iconify-icon icon="solar:magnifer-linear" style={{color: 'var(--fg-muted)'}} width="14"></iconify-icon>
<input className="outline-none bg-transparent text-sm w-32" placeholder="Hledat kartu..."/>
</div>
<button className="app-action text-xs hover:underline" data-action="Filtry vyčištěny" style={{color: 'var(--fg-muted)'}}>
                    Vyčistit
                  </button>
</div>
</div>
<div className="flex flex-wrap gap-2">
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr: Moje karty" style={{borderColor: 'var(--border)'}}>
                  Moje karty
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr: Po deadlinu" style={{borderColor: 'var(--border)', color: 'var(--danger)'}}>
                  Po deadlinu
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr: Čeká na klienta" style={{borderColor: 'var(--border)', color: 'var(--warning)'}}>
                  Čeká na klienta
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr: Urgentní" style={{borderColor: 'var(--border)'}}>
                  Urgentní
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr: Bez vlastníka" style={{borderColor: 'var(--border)'}}>
                  Bez vlastníka
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr podle klienta" style={{borderColor: 'var(--border)'}}>
                  Klient ▾
                </button>
<button className="app-action px-3 py-1.5 rounded-full border text-xs hover-lift" data-action="Filtr podle vlastníka" style={{borderColor: 'var(--border)'}}>
                  Vlastník ▾
                </button>
</div>
</div>
<div className="overflow-x-auto -mx-6 lg:-mx-10 px-6 lg:px-10 pb-2">
<div className="flex gap-3 min-w-max">
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--info)'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Intake
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        7
                      </span>
</div>
<button className="app-action p-1 rounded hover:bg-white" data-action="Nová karta v Intake" style={{color: 'var(--fg-subtle)'}}>
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#f59e0b'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          PRAHAMART
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Letní grilování — recepty
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          brief
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#ede9fe', color: '#5b21b6'}}>
                          PV
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Regenerace po tréninku — série
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          nápad
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#fef3c7', color: '#92400e'}}>
                          AN
                        </div>
</div>
</div>
</div>
</div>
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Scénář
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        6
                      </span>
</div>
<button className="app-action p-1 rounded hover:bg-white" data-action="Nová karta ve Scénáři" style={{color: 'var(--fg-subtle)'}}>
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)', borderLeft: '2px solid var(--danger)'}}>
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                            DUOCARDS
                          </span>
</div>
<span className="text-xs px-1 rounded font-medium" style={{background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', fontSize: '10px'}}>
                          URGENT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Slovíčka v MHD — 30 min denně
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--danger)'}}>
                          DNES
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#dbeafe', color: '#1e40af'}}>
                          TN
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Jak jíst v restauracích a držet formu
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          15. 5.
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#fef3c7', color: '#92400e'}}>
                          AN
                        </div>
</div>
</div>
</div>
</div>
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#ec4899'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Postprodukce
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        8
                      </span>
</div>
<button className="app-action p-1 rounded hover:bg-white" data-action="Nová karta v Postprodukci" style={{color: 'var(--fg-subtle)'}}>
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#f59e0b'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          PRAHAMART
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Recept týdne — letní caprese
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          19. 5.
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#ede9fe', color: '#5b21b6'}}>
                          PV
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift opacity-60" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#8b5cf6'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                            HAMROZY
                          </span>
</div>
<iconify-icon icon="solar:lock-keyhole-linear" style={{color: 'var(--fg-muted)'}} width="12"></iconify-icon>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Stavba domu A — drone reels
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          blokováno
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#fce7f3', color: '#9d174d'}}>
                          LK
                        </div>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Reels: Břišáky bez fitka — finální střih
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--danger)'}}>
                          15:00
                        </span>
<div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold" style={{background: '#dbeafe', color: '#1e40af'}}>
                          TN
                        </div>
</div>
</div>
</div>
</div>
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--warning)'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--warning)'}}>
                        Ke schválení
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        4
                      </span>
</div>
</div>
<div className="rounded-lg p-2 space-y-2" style={{background: 'rgba(245,158,11,0.05)', border: '1px dashed rgba(245,158,11,0.3)'}}>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#ec4899'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          CITYCAFÉ
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Příběh pražičky — finální verze
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--warning)'}}>
                          2 dny u klienta
                        </span>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Suplementy — co skutečně funguje
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--warning)'}}>
                          1 den u klienta
                        </span>
</div>
</div>
</div>
</div>
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#14b8a6'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                        Naplánováno
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        4
                      </span>
</div>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          DUOCARDS
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Streak motivační reels — týden 3
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          21. 5. · 18:00
                        </span>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Po 35 a fit (3/4) — release
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          23. 5. · 17:00
                        </span>
</div>
</div>
</div>
</div>
<div className="w-72 shrink-0">
<div className="flex items-center justify-between mb-2 px-1">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--success)'}}></span>
<span className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--success)'}}>
                        Publikováno
                      </span>
<span className="text-xs font-mono" style={{color: 'var(--fg-subtle)'}}>
                        13
                      </span>
</div>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#6366f1'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          DUOCARDS
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Tipy pro denní streak
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--success)'}}>
                          12. 5. · 4.2k views
                        </span>
</div>
</div>
<div className="rounded-lg bg-white border p-3 cursor-grab hover-lift" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-1.5 mb-1.5">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#10B981'}}></span>
<span className="text-xs font-mono" style={{color: 'var(--fg-muted)'}}>
                          ALBRECHT
                        </span>
</div>
<div className="text-sm font-medium leading-snug mb-2">
                        Po 35 a fit (2/4)
                      </div>
<div className="flex items-center justify-between">
<span className="text-xs font-mono" style={{color: 'var(--success)'}}>
                          10. 5. · 8.7k views
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="volne-ukoly">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Volné úkoly</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Úkoly bez přiřazeného vlastníka — vyzvedni si práci.
              </p>
</div>
<div className="rounded-xl bg-white border" style={{borderColor: 'var(--border)'}}>
<div className="divide-y">
<div className="px-5 py-4 flex items-center justify-between">
<div>
<div className="text-sm font-medium">
                      Korektura: Tone of voice update
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Dr. Adam Klinik · 30 min
                    </div>
</div>
<button className="app-action text-xs px-3 py-1.5 rounded-md border hover-lift" data-action="Vyzvedl sis úkol: Korektura Tone of voice" style={{borderColor: 'var(--border)'}}>
                    Vyzvednout
                  </button>
</div>
<div className="px-5 py-4 flex items-center justify-between">
<div>
<div className="text-sm font-medium">
                      Grafika: Carousel banner
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      PrahaMart · 2 h
                    </div>
</div>
<button className="app-action text-xs px-3 py-1.5 rounded-md border hover-lift" data-action="Vyzvedl sis úkol: Carousel banner" style={{borderColor: 'var(--border)'}}>
                    Vyzvednout
                  </button>
</div>
<div className="px-5 py-4 flex items-center justify-between">
<div>
<div className="text-sm font-medium">
                      Titulky: Reels série 3/4
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Albrecht · 45 min
                    </div>
</div>
<button className="app-action text-xs px-3 py-1.5 rounded-md border hover-lift" data-action="Vyzvedl sis úkol: Titulky Reels 3/4" style={{borderColor: 'var(--border)'}}>
                    Vyzvednout
                  </button>
</div>
<div className="px-5 py-4 flex items-center justify-between">
<div>
<div className="text-sm font-medium">
                      Research: Konkurence DuoCards
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      DuoCards · 1.5 h
                    </div>
</div>
<button className="app-action text-xs px-3 py-1.5 rounded-md border hover-lift" data-action="Vyzvedl sis úkol: Research konkurence" style={{borderColor: 'var(--border)'}}>
                    Vyzvednout
                  </button>
</div>
<div className="px-5 py-4 flex items-center justify-between">
<div>
<div className="text-sm font-medium">
                      Asset: Stockové foto káva
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      CityCafé · 20 min
                    </div>
</div>
<button className="app-action text-xs px-3 py-1.5 rounded-md border hover-lift" data-action="Vyzvedl sis úkol: Stockové foto káva" style={{borderColor: 'var(--border)'}}>
                    Vyzvednout
                  </button>
</div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="inbox">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Inbox</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Zprávy, komentáře a notifikace na jednom místě.
              </p>
</div>
<div className="rounded-xl bg-white border" style={{borderColor: 'var(--border)'}}>
<div className="divide-y">
<div className="px-5 py-4 flex items-start gap-3">
<span className="w-2 h-2 rounded-full mt-2" style={{background: 'var(--info)'}}></span>
<div className="flex-1">
<div className="text-sm font-medium">
                      Klient Albrecht schválil scénář
                    </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                      Před 20 minutami · Reels Břišáky
                    </div>
</div>
</div>
<div className="px-5 py-4 flex items-start gap-3">
<span className="w-2 h-2 rounded-full mt-2" style={{background: 'var(--warning)'}}></span>
<div className="flex-1">
<div className="text-sm font-medium">Komentář od PrahaMart</div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                      Před 2 hodinami · Recept týdne
                    </div>
</div>
</div>
<div className="px-5 py-4 flex items-start gap-3">
<span className="w-2 h-2 rounded-full mt-2" style={{background: 'var(--danger)'}}></span>
<div className="flex-1">
<div className="text-sm font-medium">
                      SLA upozornění: 3 dny bez odpovědi
                    </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                      Včera · PrahaMart 5 karet
                    </div>
</div>
</div>
<div className="px-5 py-4 flex items-start gap-3">
<span className="w-2 h-2 rounded-full mt-2" style={{background: 'var(--success)'}}></span>
<div className="flex-1">
<div className="text-sm font-medium">
                      DuoCards uhradil fakturu
                    </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                      Včera · 24 800 Kč
                    </div>
</div>
</div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="cykly">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Cykly</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Měsíční produkční cykly podle klienta.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-semibold tracking-tight">
                  Albrecht · Květen 2026
                </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  8 výstupů · 50 % hotovo
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-semibold tracking-tight">
                  PrahaMart · Květen 2026
                </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  12 výstupů · 25 % hotovo
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-semibold tracking-tight">
                  DuoCards · Květen 2026
                </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  8 výstupů · 75 % hotovo
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-semibold tracking-tight">
                  CityCafé · Květen 2026
                </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  6 výstupů · 33 % hotovo
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-semibold tracking-tight">
                  Hamrozy · Květen 2026
                </div>
<div className="text-xs mt-1" style={{color: 'var(--fg-muted)'}}>
                  4 výstupy · 0 % hotovo
                </div>
</div>
</div>
<div className="flex items-center justify-end gap-2">
<button className="app-action px-3 py-1.5 rounded-md border text-sm hover-lift" data-action="Otevřen formulář pro nový cyklus" style={{borderColor: 'var(--border)', background: 'white'}}>
<iconify-icon className="inline align-middle mr-1" icon="solar:add-circle-linear" width="14"></iconify-icon>
                Nový cyklus
              </button>
<button className="app-action px-3 py-1.5 rounded-md text-sm font-medium text-white hover-lift" data-action="Měsíční plán uzavřen" style={{background: 'var(--fg-default)'}}>
                Uzavřít měsíc
              </button>
</div>
</section>
<section className="page-view space-y-6 hidden" id="klienti">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Klienti</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Aktivní klientské účty a jejich kontakty.
              </p>
</div>
<div className="rounded-xl bg-white border overflow-hidden" style={{borderColor: 'var(--border)'}}>
<table className="w-full text-sm">
<thead style={{background: 'var(--bg-app)', color: 'var(--fg-muted)'}}>
<tr className="text-left text-xs">
<th className="px-5 py-3 font-medium">Klient</th>
<th className="px-5 py-3 font-medium">Kontakt</th>
<th className="px-5 py-3 font-medium">Owner</th>
<th className="px-5 py-3 font-medium">MRR</th>
<th className="px-5 py-3 font-medium">Stav</th>
</tr>
</thead>
<tbody className="divide-y">
<tr>
<td className="px-5 py-3 font-medium">Albrecht Fitness</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                      jiri@albrecht.cz
                    </td>
<td className="px-5 py-3">Anna</td>
<td className="px-5 py-3 font-mono text-xs">42 000 Kč</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                        aktivní
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">PrahaMart</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                      marketing@prahamart.cz
                    </td>
<td className="px-5 py-3">Petr</td>
<td className="px-5 py-3 font-mono text-xs">68 000 Kč</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(245,158,11,0.1)', color: 'var(--warning)'}}>
                        blokuje
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">DuoCards</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                      tomas@duocards.com
                    </td>
<td className="px-5 py-3">Tomáš</td>
<td className="px-5 py-3 font-mono text-xs">38 000 Kč</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                        aktivní
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">CityCafé</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                      ahoj@citycafe.cz
                    </td>
<td className="px-5 py-3">Lucie</td>
<td className="px-5 py-3 font-mono text-xs">22 000 Kč</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--info)'}}>
                        onboarding
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium">Hamrozy Stavby</td>
<td className="px-5 py-3" style={{color: 'var(--fg-muted)'}}>
                      info@hamrozy.cz
                    </td>
<td className="px-5 py-3">Anna</td>
<td className="px-5 py-3 font-mono text-xs">14 000 Kč</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                        aktivní
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-end gap-2">
<button className="app-action px-3 py-1.5 rounded-md border text-sm hover-lift" data-action="Otevřen formulář pro nového klienta" style={{borderColor: 'var(--border)', background: 'white'}}>
<iconify-icon className="inline align-middle mr-1" icon="solar:user-plus-linear" width="14"></iconify-icon>
                Nový klient
              </button>
</div>
</section>
<section className="page-view space-y-6 hidden" id="napady">
<div>
<h1 className="text-3xl font-semibold tracking-tight">
                Nápady od klientů
              </h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Nezpracované vstupy a podněty od klientů.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--fg-muted)'}}>
                  ALBRECHT
                </div>
<div className="text-sm font-medium">
                  Série o regeneraci po tréninku
                </div>
<div className="text-xs mt-2" style={{color: 'var(--fg-muted)'}}>
                  Přidáno 12. 5.
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--fg-muted)'}}>
                  PRAHAMART
                </div>
<div className="text-sm font-medium">Letní grilování — recepty</div>
<div className="text-xs mt-2" style={{color: 'var(--fg-muted)'}}>
                  Přidáno 11. 5.
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--fg-muted)'}}>
                  DUOCARDS
                </div>
<div className="text-sm font-medium">
                  User stories — úspěšní studenti
                </div>
<div className="text-xs mt-2" style={{color: 'var(--fg-muted)'}}>
                  Přidáno 10. 5.
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs font-mono mb-1" style={{color: 'var(--fg-muted)'}}>
                  CITYCAFÉ
                </div>
<div className="text-sm font-medium">Workshop latte art</div>
<div className="text-xs mt-2" style={{color: 'var(--fg-muted)'}}>
                  Přidáno 9. 5.
                </div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="knihovna">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Knihovna</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Brand guidelines, assety, šablony a archiv.
              </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3" id="library-grid">
<div className="rounded-xl bg-white border p-5 hover-lift cursor-pointer" style={{borderColor: 'var(--border)'}}>
<a className="library-link block" data-library-folder="brand-kits" href="#">
<iconify-icon icon="solar:folder-linear" style={{color: 'var(--info)'}} width="24"></iconify-icon>
</a>
<div className="text-sm font-medium mt-3">Brand kits</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  12 položek
                </div>
</div>
<div className="rounded-xl bg-white border p-5 hover-lift cursor-pointer" style={{borderColor: 'var(--border)'}}>
<a className="library-link block" data-library-folder="foto-archiv" href="#">
<iconify-icon icon="solar:gallery-linear" style={{color: '#ec4899'}} width="24"></iconify-icon>
</a>
<div className="text-sm font-medium mt-3">Foto archiv</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  348 souborů
                </div>
</div>
<div className="rounded-xl bg-white border p-5 hover-lift cursor-pointer" style={{borderColor: 'var(--border)'}}>
<a className="library-link block" data-library-folder="video-assety" href="#">
<iconify-icon icon="solar:videocamera-linear" style={{color: '#6366f1'}} width="24"></iconify-icon>
</a>
<div className="text-sm font-medium mt-3">Video assety</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  126 souborů
                </div>
</div>
<div className="rounded-xl bg-white border p-5 hover-lift cursor-pointer" style={{borderColor: 'var(--border)'}}>
<a className="library-link block" data-library-folder="sablony" href="#">
<iconify-icon icon="solar:document-text-linear" style={{color: 'var(--success)'}} width="24"></iconify-icon>
</a>
<div className="text-sm font-medium mt-3">Šablony</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  24 šablon
                </div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="ai-mozek">
<div>
<h1 className="text-3xl font-semibold tracking-tight">AI Mozek</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Znalostní báze, kontext klientů a AI prompty.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Klientské znalosti
                </h3>
<div className="space-y-2">
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      Albrecht — Tone of voice
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Energický, přímý, odborný
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      PrahaMart — Brand guidelines
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Rodinný, dostupný, lokální
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      DuoCards — Persona studenta
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      18-35, motivovaný, mobile-first
                    </div>
</div>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Prompty
                </h3>
<div className="space-y-2">
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      Generátor hooků pro Reels
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">
                      Caption + hashtag generátor
                    </div>
</div>
<div className="rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Brief → scénář</div>
</div>
</div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="operations">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Operations</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Provozní metriky, procesy a SLA reporty.
              </p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Throughput
                </div>
<div className="text-2xl font-semibold tracking-tight mt-1">42</div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                  +18 %
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  SLA dodržení
                </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                  94 %
                </div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                  +2 %
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Cycle time
                </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                  6.4 d
                </div>
<div className="text-xs mt-1" style={{color: 'var(--success)'}}>
                  -1.2 d
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Rework rate
                </div>
<div className="text-2xl font-semibold tracking-tight mt-1">
                  8 %
                </div>
<div className="text-xs mt-1" style={{color: 'var(--warning)'}}>
                  +1 %
                </div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="fakturace">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Fakturace</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Vystavené faktury, splatnosti a platby.
              </p>
</div>
<div className="rounded-xl bg-white border overflow-hidden" style={{borderColor: 'var(--border)'}}>
<table className="w-full text-sm">
<thead style={{background: 'var(--bg-app)', color: 'var(--fg-muted)'}}>
<tr className="text-left text-xs">
<th className="px-5 py-3 font-medium">Číslo</th>
<th className="px-5 py-3 font-medium">Klient</th>
<th className="px-5 py-3 font-medium">Částka</th>
<th className="px-5 py-3 font-medium">Splatnost</th>
<th className="px-5 py-3 font-medium">Stav</th>
</tr>
</thead>
<tbody className="divide-y">
<tr>
<td className="px-5 py-3 font-mono text-xs">2026-0048</td>
<td className="px-5 py-3 font-medium">Albrecht Fitness</td>
<td className="px-5 py-3 font-mono">42 000 Kč</td>
<td className="px-5 py-3">15. 5.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                        uhrazeno
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-mono text-xs">2026-0049</td>
<td className="px-5 py-3 font-medium">DuoCards</td>
<td className="px-5 py-3 font-mono">38 000 Kč</td>
<td className="px-5 py-3">17. 5.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(59,130,246,0.1)', color: 'var(--info)'}}>
                        odesláno
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-mono text-xs">2026-0050</td>
<td className="px-5 py-3 font-medium">PrahaMart</td>
<td className="px-5 py-3 font-mono">68 000 Kč</td>
<td className="px-5 py-3">10. 5.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(239,68,68,0.1)', color: 'var(--danger)'}}>
                        po splatnosti
                      </span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-mono text-xs">2026-0051</td>
<td className="px-5 py-3 font-medium">CityCafé</td>
<td className="px-5 py-3 font-mono">22 000 Kč</td>
<td className="px-5 py-3">22. 5.</td>
<td className="px-5 py-3">
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                        koncept
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="page-view space-y-6 hidden" id="tym">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Tým</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Členové týmu, role a vytíženost.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: '#fef3c7', color: '#92400e'}}>
                    AN
                  </div>
<div>
<div className="text-sm font-semibold tracking-tight">
                      Anna Novotná
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Strategist
                    </div>
</div>
</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Vytížení: 72 % · 4 klienti
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: '#dbeafe', color: '#1e40af'}}>
                    TN
                  </div>
<div>
<div className="text-sm font-semibold tracking-tight">
                      Tomáš Nový
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Video editor
                    </div>
</div>
</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Vytížení: 64 % · 3 klienti
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: '#fce7f3', color: '#9d174d'}}>
                    LK
                  </div>
<div>
<div className="text-sm font-semibold tracking-tight">
                      Lucie Krátká
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Copywriter
                    </div>
</div>
</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Vytížení: 81 % · 5 klientů
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: '#ede9fe', color: '#5b21b6'}}>
                    PV
                  </div>
<div>
<div className="text-sm font-semibold tracking-tight">
                      Petr Vrba
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Photographer
                    </div>
</div>
</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Vytížení: 58 % · 3 klienti
                </div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white'}}>
                    ŠH
                  </div>
<div>
<div className="text-sm font-semibold tracking-tight">
                      Štěpán Hořák
                    </div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                      Admin / Owner
                    </div>
</div>
</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                  Vytížení: 90 % · all hands
                </div>
</div>
</div>
</section>
<section className="page-view space-y-6 hidden" id="nastaveni">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Nastavení</h1>
<p className="mt-1.5 text-sm" style={{color: 'var(--fg-muted)'}}>
                Profil, workspace, integrace a fakturační údaje.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Profil
                </h3>
<div className="space-y-3">
<div>
<label className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                      Jméno
                    </label>
<input className="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none" style={{borderColor: 'var(--border)'}} value="Štěpán Hořák"/>
</div>
<div>
<label className="text-xs font-medium uppercase tracking-wider" style={{color: 'var(--fg-muted)'}}>
                      E-mail
                    </label>
<input className="mt-1 w-full px-3 py-2 rounded-md border text-sm outline-none" style={{borderColor: 'var(--border)'}} value="stepan@contentagency.cz"/>
</div>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-3">
                  Integrace
                </h3>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">Slack</span>
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                      připojeno
                    </span>
</div>
<div className="flex items-center justify-between rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">Google Drive</span>
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                      připojeno
                    </span>
</div>
<div className="flex items-center justify-between rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">Meta Business</span>
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'var(--bg-muted)', color: 'var(--fg-muted)'}}>
                      odpojeno
                    </span>
</div>
<div className="flex items-center justify-between rounded-lg border p-3" style={{borderColor: 'var(--border)'}}>
<span className="text-sm">Fakturoid</span>
<span className="text-xs px-1.5 py-0.5 rounded" style={{background: 'rgba(16,185,129,0.1)', color: 'var(--success)'}}>
                      připojeno
                    </span>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white border p-5" style={{borderColor: 'var(--border)'}}>
<h3 className="text-sm font-semibold tracking-tight mb-1">
                Vyzkoušet jako…
              </h3>
<p className="text-xs mb-3" style={{color: 'var(--fg-muted)'}}>
                Demo přepínač role pro otestování pohledu člena týmu nebo
                klienta.
              </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
<button className="app-action rounded-lg border p-3 text-left hover-lift" data-action="Přepnuto na pohled: Admin" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Admin / Owner</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Vidí vše, spravuje tým a finance
                  </div>
</button>
<button className="app-action rounded-lg border p-3 text-left hover-lift" data-action="Přepnuto na pohled: Člen týmu (Tomáš)" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Člen týmu — Tomáš</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Volné úkoly, přiřazené karty, Inbox
                  </div>
</button>
<button className="app-action rounded-lg border p-3 text-left hover-lift" data-action="Přepnuto na pohled: Klient (Albrecht)" style={{borderColor: 'var(--border)'}}>
<div className="text-sm font-medium">Klient — Albrecht</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Kalendář, nápady, schvalování
                  </div>
</button>
</div>
<div className="mt-4 pt-4 border-t flex items-center justify-between" style={{borderColor: 'var(--border)'}}>
<div>
<div className="text-sm font-medium">Tmavý režim</div>
<div className="text-xs" style={{color: 'var(--fg-muted)'}}>
                    Přepnout vzhled aplikace
                  </div>
</div>
<button className="os-theme-toggle flex items-center justify-between rounded-lg border px-3 py-1.5 text-sm" id="theme-toggle-btn" style={{borderColor: 'var(--border)'}}>
<span className="w-9 h-5 rounded-full p-0.5 transition-colors" style={{background: 'var(--bg-muted)'}}>
<span className="block w-4 h-4 rounded-full bg-white transition-all"></span>
</span>
</button>
</div>
</div>
</section>
</div>
</main>
</div>






    </>
  );
}
