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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



         const sidebar = document.getElementById('sidebar');
         const collapseBtn = document.getElementById('collapseBtn');
         const splitBtn = document.getElementById('splitBtn');
         const normalView = document.getElementById('normalView');
         const splitView = document.getElementById('splitView');
         const exitSplitBtn = document.getElementById('exitSplitBtn');
         const commandOverlay = document.getElementById('commandOverlay');
         const commandModal = document.getElementById('commandModal');
         const globalSearch = document.getElementById('globalSearch');
         const timerBtn = document.getElementById('timerBtn');
         const timerWidget = document.getElementById('timerWidget');
         const notificationBtn = document.getElementById('notificationBtn');
         const notificationDrawer = document.getElementById('notificationDrawer');
         const closeDrawerBtn = document.getElementById('closeDrawerBtn');
         const quickEntryBtn = document.getElementById('quickEntryBtn');
         const quickEntryModal = document.getElementById('quickEntryModal');
         const quickEntryCard = document.getElementById('quickEntryCard');
         const closeQuickEntryBtn = document.getElementById('closeQuickEntryBtn');
         const cancelQuickEntryBtn = document.getElementById('cancelQuickEntryBtn');
         const workspaceBtn = document.getElementById('workspaceBtn');
         const workspaceMenu = document.getElementById('workspaceMenu');
         const newMenuBtn = document.getElementById('newMenuBtn');
         const newMenu = document.getElementById('newMenu');
         const actionsBtn = document.getElementById('actionsBtn');
         const actionsMenu = document.getElementById('actionsMenu');

         function toggleMenu(menu) {
           menu.classList.toggle('pointer-events-none');
           menu.classList.toggle('opacity-0');
           menu.classList.toggle('translate-y-1');
         }

         workspaceBtn.addEventListener('click', () => toggleMenu(workspaceMenu));
         newMenuBtn.addEventListener('click', () => toggleMenu(newMenu));
         actionsBtn.addEventListener('click', () => toggleMenu(actionsMenu));

         function setCollapsed(value) {
           sidebar.classList.toggle('is-collapsed', value);
           sidebar.classList.toggle('w-[56px]', value);
           sidebar.classList.toggle('w-[240px]', !value);
           collapseBtn.querySelector('iconify-icon').style.transform = value ? 'rotate(180deg)' : 'rotate(0deg)';
         }

         collapseBtn.addEventListener('click', () => setCollapsed(!sidebar.classList.contains('is-collapsed')));

         function setSplit(value) {
           normalView.classList.toggle('hidden', value);
           splitView.classList.toggle('hidden', !value);
           splitView.classList.toggle('grid', value);
         }

         splitBtn.addEventListener('click', () => setSplit(true));
         exitSplitBtn.addEventListener('click', () => setSplit(false));

         function openCommand() {
           commandOverlay.classList.remove('hidden');
           commandOverlay.classList.add('flex');
           setTimeout(() => {
             commandModal.classList.remove('scale-95', 'opacity-0');
             commandModal.classList.add('scale-100', 'opacity-100');
           }, 10);
         }

         function closeCommand() {
           commandModal.classList.add('scale-95', 'opacity-0');
           commandModal.classList.remove('scale-100', 'opacity-100');
           setTimeout(() => {
             commandOverlay.classList.add('hidden');
             commandOverlay.classList.remove('flex');
           }, 120);
         }

         globalSearch.addEventListener('focus', openCommand);
         commandOverlay.addEventListener('click', (e) => {
           if (e.target === commandOverlay) closeCommand();
         });

         document.addEventListener('keydown', (e) => {
           if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
             e.preventDefault();
             openCommand();
           }
           if (e.key === 'Escape') {
             closeCommand();
             quickEntryModal.classList.add('hidden');
           }
         });

         timerBtn.addEventListener('click', () => timerWidget.classList.toggle('hidden'));

         notificationBtn.addEventListener('click', () => notificationDrawer.classList.remove('translate-x-full'));
         closeDrawerBtn.addEventListener('click', () => notificationDrawer.classList.add('translate-x-full'));

         function openQuickEntry() {
           quickEntryModal.classList.remove('hidden');
           quickEntryModal.classList.add('flex');
           setTimeout(() => {
             quickEntryCard.classList.remove('scale-95', 'opacity-0');
             quickEntryCard.classList.add('scale-100', 'opacity-100');
           }, 10);
         }

         function closeQuickEntry() {
           quickEntryCard.classList.add('scale-95', 'opacity-0');
           quickEntryCard.classList.remove('scale-100', 'opacity-100');
           setTimeout(() => {
             quickEntryModal.classList.add('hidden');
             quickEntryModal.classList.remove('flex');
           }, 120);
         }

         quickEntryBtn.addEventListener('click', openQuickEntry);
         closeQuickEntryBtn.addEventListener('click', closeQuickEntry);
         cancelQuickEntryBtn.addEventListener('click', closeQuickEntry);

         document.querySelectorAll('.section-toggle').forEach((btn) => {
           btn.addEventListener('click', () => {
             const body = btn.parentElement.querySelector('.section-body');
             const icon = btn.querySelector('iconify-icon');
             body.classList.toggle('max-h-0');
             body.classList.toggle('opacity-40');
             icon.style.transform = body.classList.contains('max-h-0') ? 'rotate(180deg)' : 'rotate(0deg)';
           });
         });

         function resetPreviewButtons(activeId) {
           ['screenMain','screenSplit','screenCollapsed','screenCommand'].forEach(id => {
             const button = document.getElementById(id);
             button.className = id === activeId
               ? 'rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-medium text-[#2563EB]'
               : 'rounded-full px-3 py-1.5 text-xs font-medium text-[#6B7280] hover:bg-[#F8FAFC]';
           });
         }

         document.getElementById('screenMain').addEventListener('click', () => {
           setCollapsed(false);
           setSplit(false);
           closeCommand();
           resetPreviewButtons('screenMain');
         });

         document.getElementById('screenSplit').addEventListener('click', () => {
           setCollapsed(false);
           setSplit(true);
           closeCommand();
           resetPreviewButtons('screenSplit');
         });

         document.getElementById('screenCollapsed').addEventListener('click', () => {
           setSplit(false);
           setCollapsed(true);
           closeCommand();
           resetPreviewButtons('screenCollapsed');
         });

         document.getElementById('screenCommand').addEventListener('click', () => {
           setSplit(false      setCollapsed(false);
           openCommand();
           resetPreviewButtons('screenCommand');
         });

         // Improve modal and keyboard focus.
         const commandInput = commandOverlay.querySelector('input');
         const mobileMenuBtn document.getElementById('MenuBtn');
      const calendarBtn = documentElementId('calendarBtn');
      const userMenu = document.getElementById('MenuBtn');
         const divider =SplitBtn.parentElement;

         function openDropdown(menu) {
           menu.class.removepointer-events-none 'opacity-', 'translate-');
         }

         function closeDropdown(menu)      menu.classList.addpointer-events-none', '-0', 'translate-y-1');
         }

      function closeAlls() {
           closeDropdown(workspaceMenu);
          Dropdown(newMenu      closeDropdown(actionsMenu);
         }

         originalOpenCommand = openCommand;
      openCommand = function() {
           originalOpenCommand();
           set(() => commandInput?.(), 80    };

         document.addListenerclick () {
           const clickedWorkspace = workspaceBtn.contains(e.target) ||Menu.contains(e.target);
           constNew = newMenuBtn.contains(e) newMenu.contains(e.target      const clickedActions = actions.contains.target) || actionsMenu.contains(e);

           if (!clickedWorkspace && !clickedNew && !clickedActions)        closeAllDropdowns();
           }
         });

         quickEntryModal.addEventListener('click', () => {
           ife.target === quickEntryModal)QuickEntry();
         });

         mobileMenuBtn.addEvent('click', () =>      setCollapsed(!sidebar.classList('is-collapsed'));
         });

        Btn?.addEventListenerclick', () => {
           openCommand();
           commandInput.value = 'calendar';
         });

         userBtn?.addEventListener('click', () => {
           openQuickEntry();
           quickEntryCard.querySelector('input')?.focus();
         });

         // Make the split divider actionable despite being primarily a drag affordance.
         exitBtn.classList.remove('-events-none');
         divider.addEvent('click () => {
           setSplit(false);
           resetPreview('screenMain');
         });

         // Lightweight drag feedback for tabs.
         document.queryAll('[draggable="true"]').forEachtab) => {
           tab.addEventListener('drag', => {
            .classList.add('opacity-60', '-[.98]');
      });

           tab.addEventListener('dragend', () => {
             tab.classList.remove('opacity-60', 'scale-[0.98]');
           });
         });

         // Clickable demo tabs for visual active-state switching    document.querySelectorAll('.group\\/tab').forEach((tab => {
           tab.addEventListener('click', () => {
      document.querySelector('.group\\/').Each((item =>          item.class.remove('border-b-2', 'border-[#2563EB]', 'bg-white', 'font-semibold', 'text-[#1E40AF]', 'shadow-[0_-px_8px_rgba(0,0,,0.04');
      item.classList.add('-medium 'text-[#6B0]', 'hover:bgF1F5F9]');
             });

      tab.classList('border-b-2 'border-[#2563]', 'bg-white', '-semibold 'text-[#1E40AF]', '-[0_-2px_8px_rgba(0,0,0,0.04)]');
             tabList.remove('font-medium 'text-[#B7280]', ':bg-[#FF5F9]');
           });
      });

         // Small live enhancement.
         let elapsedSeconds = 42 * 60 + 18;
         const timerDisplay =Widget.querySelector('.fontono');

        Interval(() => {
           (!Widget.classList('')) {
             elapsedSeconds 1;
      const =(Math.floor(elSeconds / 3600)).pad(2,0');
             minutes = String(Math.floor((elapsedSeconds %360) 60)).padStart2, '0');
             const seconds = String(elapsedSeconds % 60).padStart(2, '');
             timerDisplay.text = `${hoursminutes}:${seconds}`;
           }
         }, 0    // Add ARIA metadata for interactive demo controls.
         [
           [collapseBtn, 'Toggle sidebar'],
           [mobileMenuBtn, 'Toggle'],
           [splitBtn, ' split view'],
           [Btn, 'Open notifications'],
          timerBtn, 'Toggle timer'],
      [quickEntry,Open quick entry'],
           [newMenuBtn, ' create menu'],
           [Btn, 'Open matter actions']
         ].forEach(([button, label => {
           button?.setAttribute('type', 'button');
           button?.setAttribute('aria-label', label);
            workspaceBtn.setAttribute('aria-haspopup', 'menu');
         newMenu.setAttribute('aria-haspopup', '');
         actionsBtn.setAttribute('aria-haspopup', '');
         command.setAttribute('aria-modal 'true');
         quickEntryModal.setAttribute('aria-modal', 'true
    


         (() => {
           $ = () => documentElementId(id);

      const sidebar = $('sidebar');
           const collapseBtn = $('collapseBtn');
           constBtn $('splitBtn      normalView = $('normal');
           constView = $('splitView');
           const exitBtn = $('exitSplit');
           constOverlay = $('commandOverlay      commandModal = $('commandModal');
           const commandInput = commandOverlay?.querySelector('input');
           globalSearch = $('globalSearch');
      constBtn = $('timerBtn');
           const timerWidget = $('timerWidget');
           const timerDisplay = timerWidgetquerySelector('.-mono');
           const notificationBtn = $('notificationBtn');
           const notification = $('notificationDrawer');
           const closeDrawerBtn = $('closeDrawerBtn');
           const quickEntryBtn = $('quickEntryBtn');
           constEntryModal =quickEntryModal');
           quickEntryCard = $('quickEntryCard');
           const closeQuickEntryBtn = $('closeQuickEntryBtn      const cancelQuickEntryBtn =cancelQuickEntryBtn');
           const workspaceBtn = $('workspaceBtn');
           const workspaceMenu =workspaceMenu');
           const newMenuBtn = $('newMenuBtn      const newMenu = $('newMenu');
      const actionsBtn = $('actionsBtn');
           actions = $('actionsMenu');
      const mobileMenuBtn =mobileMenuBtn');
           const calendar = $('calendarBtn');
      constMenuBtn = $('userMenuBtn');

           previewButtonIds = ['screenMain', 'screenSplit', 'screenCollapsed', 'Command'];

           function openDropdown(menu) {
      menu?.classList.removepointer-events-none', '-0', 'translate-y-1');
           }

           function closeDropdown(menu) {
             menu?.classList.add('pointer-events-none', 'opacity-0', 'translate-y-1      }

           function toggleDropdown(menu) {
             if (!menu) return;
             isClosed =.classList.contains('opacity-0');
             closeAllDropdowns();
             if (isClosed) open(menu);
                function closeAllDropdowns()       DropdownspaceMenu);
             closeDropdown(newMenu);
             closeDropdown(actionsMenu);
           }

      functionCollapsed(value) {
             if (!sidebar) return;
             sidebar.classList.toggle('is-capsed', value        sidebar.classList.toggle('w-[56]', value);
             sidebar.classList.toggle('-[px]', !value);

             const icon = collapseBtnquery('iconify');
             if (icon) icon.style.transform value ? 'rotate(180deg : 'rotate0deg)';
             collapseBtn?.Attribute('aria', String(!value));
           }

           function setSplit(value) {
            View?.classList.toggle('hidden', value);
             splitView?.classList.togglehidden', !value);
             splitView?.List('grid', value);
             splitBtn?.setAttributearia-pressed', String(value));
           }

      function openCommand(seed = '') {
             ifcommandOverlay || !commandModal) return;
             commandOverlay.classList.remove('hidden       OverlayList.add('flex');

             windowTimeout(() => {
               commandModalList('scale-95', 'opacity-0');
               commandModalList.add('scale-100', 'opacity-100          if (Input) {
                 commandInput.value = seed            commandInput.focus();
                 commandInput.setSelectionRange(commandInput.value.length, commandInput.value.length);
               }
      }, 10);
           }

           function closeCommand() {
             if (!commandOverlay !Modal) return;
             commandModal.classList('scale-', 'opacity-0');
             commandModalList.remove('scale-', 'opacity-100');

             window.setTimeout(() => {
      command.classList.add('hidden');
               commandOverlay.classList.remove('flex');
             }, 140);
                function openEntry {
             ifquickEntryModal || !quickEntryCard);
      quickEntryModal.classList.remove('hidden');
             quickModal.classList.add('');

      window.setTimeout(() => {
               quickEntryCard.classList.remove('scale95', 'opacity-0');
               quickEntryCardList.add('scale-', 'opacity100');
               quickEntry.querySelector('input')?.focus();
             }, 10);
      }

           function closeQuick()        if (!quickEntryModal || !quickEntryCard return;
             quickEntry.classList.add('scale-95', 'opacity-0');
      quickEntryCard.classList('-100', 'opacity100');

             window.setTimeout(() {
               quickEntryModalList.add('hidden');
               quickModal.classList.remove('flex');
      }, 140);
           }

           function resetPreviewButtons(activeId) {
             previewIdsEach((id) => {
               const button = $(id);
               (!button);

      button.className = id active
                 ? 'rounded-full bgEFFFF] px-3-1.5 text-xs font-medium text-[#256EB]'
                 'rounded-full px-3 py-1.5-xs font-medium text-[#B7280] hover-[#F8FAFC';
             });
           }

           collapseBtn?.addEventListener('click', () => {
             setCollapsed(!sidebar?.classList.contains('isoll'));
      });

           mobileMenuBtn?.addListener('click', () {
      set(!sidebar?.classList.contains('-collapsed'));
           });

           workspaceBtn?.addEventListener('click', (event) => {
             event.stopPropagation();
             toggleDropdownspaceMenu);
           });

           newBtn?.addEventListener('click', (event) => {
             event.stopPropagation();
             toggleDropdown(newMenu);
               Btn?.addEventListener('click', (event) => {
             event.stopPropagation();
             toggleDropdownMenu);
           });

           [workspaceMenu, newMenu, actionsMenu].forEach((menu =>        menu?.addEventListener('', (event) => event.stopPropagation());
           });

      documentEventListener('click', closeAlls);

           splitBtnaddListener('click', () => {
             setSplit(true);
             resetPreviewButtons('Split      });

           exitSplitBtn?.classList('pointer-events-none');
           exitSplitBtn?.addEventListener('click', (event) => {
             event.stopPropagation();
             setSplit);
             resetButtonsscreenMain');
           });

      exitBtn?.parentElement?.Event('click', () => {
             setSplit(false);
             resetPreviewButtons('screenMain');
      });

           globalSearch?.EventListener('focus', () => openCommand      commandOverlayaddEventListener('click', (event) => {
             ifevent.target === commandOverlay closeCommand();
      });

           timerBtn?.addEventListener('click', () => {
             timerWidget?.classList.toggle('hidden');
           });

           notificationBtnaddEventListener('click () => {
             notificationDrawer?.classList('translate-x-full');
             notificationBtn.setAttribute('aria-expanded 'true');
           });

           closeDrawerBtn?.addEventListenerclick', () => {
             notificationDrawer?.classList.add('translate-x-full');
             notificationBtn?.setAttribute('aria-expanded', 'false');
           });

           quickEntryBtn?.addEventListener('click', openQuickEntry);
           closeEntry?.addEventListener('click', closeQuickEntry);
           cancelQuickEntryBtn?.addEvent('click', closeQuickEntry);

           quickEntryModal?.addEventListener('click', (event) => {
             if (event.target === quickEntryModal) closeQuickEntry();
           });

           calendarBtnaddListener('click', () open(''));
           userMenuBtn?.addListener('click', openQuickEntry);

          .addEventListenerkeydown (event) {
             if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')          event.preventDefault();
               openCommand();
      }

             if (event.key === 'Escape') {
      close();
               closeQuickEntry();
              AllDropdowns();
               notificationDrawer?.classList.add('translate-full');
             }
           });

           document.querySelectorAll('.section-toggle').Each((button) => {
            .setAttribute('type', 'button');
             button.set('aria-expanded 'true');

             button.addListener('click', () {
               const body = button.parentElement?.querySelector('.section');
               const icon = button.querySelector('iconify-icon');
               const collapsed = body?.classList.toggle('max-h-0');

               body?.classList.toggle('opacity-', collapsed);
      button.setAttributearia-expanded', String(!collapsed));
               if (icon icon.style.transform = collapsed 'rotate(180deg)' :rotate(0deg)';
             });
           });

           $('screenMain')?.EventListener('click', () => {
             setCollapsed(false);
      setSplit(false        closeCommand();
            PreviewButtons('screenMain');
           });

           $('screenSplit')?.addListener('click', () {
             setCollapsed(false);
            Split(true);
      closeCommand();
      resetPreviewButtons('screenSplit');
      });

           $('Collapsed')?.addEventListener('', () => {
             setSplit(false);
             setCollapsed(true);
             closeCommand();
             resetPreviewButtons('screen');
           });

           $('screenCommand')?.addEventListener('', => {
             setSplit(false);
            Collapsed(false);
      openCommand();
      resetPreviewButtons('screenCommand');
           });

           document.querySelector('[draggable="true"]').for(() => {
             tabEventListener('dragstart () => {
               tab.classList.add('opacity-', 'scale-[0.98]');
             });

             tab.addEventListener('drag', () => {
               tab.classList.remove('opacity-60', '-[0.98]');
             });
           });

           document.querySelectorAll('.\\/tabforEach((tab) => {
             tab.addEventListener('', => {
              .querySelectorAll('.grouptab').forEach((item) => {
      item.classList.remove(
                   'border-b-2',
                   'border-[#2563EB              'bg-white',
                   'font-semibold',
                   'text140AF]',
                   'shadow-[0_-px_8px_rgba0,00,0.04)]'
      );
                 item.classList.add('-medium', 'text-[#6B7280 'hover:bg-[#FF5F9]');
      });

               tabList.add(
                 'border-b-2            'border256EB]',
                 'bg-white',
                 'font-semibold',
                 'text-[#1E40AF]',
      'shadow-[0_-px_8px_rgba(0,0,0,0.04)]'
               );
               tab.classList.removefont-medium', 'text-[#6B7280]', 'hover:bg-[#F1F5F9]');
             });
           });

           let elapsedSeconds = 42 * 60 + 18      window.setInterval(() {
             if (!timer ||timerDisplay || timerWidgetList('hidden')) return;

      elapsedSeconds +=1;
             const hours = String(Math.floor(elapsedSeconds / 3600)).Start(2, '');
             const minutes = String(Math((Seconds % 0) / 60)).padStart(2, '0');
             seconds String(elapsedSeconds % 60padStart(2, '0');
             timerDisplayContent = `${hours}:${minutes}:${seconds}`;
           }, 100);

      [
             [collapseBtn, 'Toggle sidebar'],
             [mobileMenuBtn, ' sidebar'],
             [splitBtn, 'Open split view'],
             [notificationBtn, 'Open notifications'],
             [timerBtn 'Toggle timer'],
             [quickEntryBtn, 'Open quick entry'],
             [newMenuBtn, 'Open create menu'],
             [actions, 'Open actions        [calendar,Open calendar command'],
             [userMenuBtn, 'Open user quick entry']
           ].forEach(([button, label]) => {
      button?.set('type', 'button');
            ?.setAttribute('aria', label);
           });

           document.querySelectorAll('').Each((button) => {
             if (!button.has('type')) button.setAttribute('type', 'button');
           });

          Btn?.setAttribute('-haspopup', 'menu');
           newMenuBtn?.setAttribute('-haspopup', '');
           actionsBtn?.setAttribute('aria-haspopup',menu');
           commandModal?.setAttribute('role', 'dialog');
          Modal?.setAttribute('-modal', 'true');
           quickCard?.setAttribute('role',dialog     EntryCard?.setAttribute('aria-modal', 'true');
           notificationDrawersetAttribute('-label', 'Notifications drawer');

           setCollapsed(false);
           setSplit(false);
         })();
    
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
      
<div className="flex h-screen w-screen overflow-hidden bg-[#F8FAFC]" id="app">
<aside className="group/sidebar relative z-40 flex h-full w-[240px] shrink-0 flex-col bg-[#111827] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:w-[240px] max-lg:w-[56px]" id="sidebar">
<button aria-expanded="true" aria-label="Collapse sidebar" className="absolute -right-3 top-5 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#182235] text-[#CBD5E1] shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#1E3A5F] hover:text-white" id="collapseBtn" onclick="const sidebar=document.getElementById('sidebar');if(sidebar){const collapsed=sidebar.classList.toggle('is-collapsed');sidebar.classList.toggle('w-[240px]',!collapsed);sidebar.classList.toggle('lg:w-[240px]',!collapsed);sidebar.classList.toggle('w-[56px]',collapsed);sidebar.classList.toggle('lg:w-[56px]',collapsed);this.setAttribute('aria-expanded',String(!collapsed));this.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');const icon=this.querySelector('svg');if(icon){icon.classList.toggle('rotate-180',collapsed);}}" type="button">
<svg aria-hidden="true" className="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="border-b border-white/[0.07] px-3 py-3">
<div className="flex h-12 items-center gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2563EB] text-base font-semibold tracking-tight text-white">
              LA
            </div>
<div className="min-w-0 flex-1 overflow-hidden transition-opacity duration-200 group-[.is-collapsed]/sidebar:opacity-0 max-lg:opacity-0">
<div className="truncate text-sm font-semibold tracking-tight text-white">
                LawAccounting
              </div>
<button aria-controls="workspaceMenu" aria-expanded="false" aria-haspopup="menu" className="flex transition hover:bg-white/[0.08] cursor-pointer text-xs text-[#CBD5E1] max-w-full z-10 pointer-events-auto border-white/10 border rounded-full mt-1 pt-1 pr-2 pb-1 pl-2 relative gap-x-1 gap-y-1 items-center" id="workspaceBtn" onclick="event.preventDefault(); event.stopPropagation(); const controlledId=this.getAttribute('aria-controls'); const menu=(controlledId&amp;&amp;document.getElementById(controlledId))||this.nextElementSibling||this.parentElement?.querySelector('[role=menu]'); if(menu){ const isHidden=menu.classList.contains('hidden')||window.getComputedStyle(menu).display==='none'||window.getComputedStyle(menu).visibility==='hidden'; if(isHidden){ menu.classList.remove('hidden'); menu.style.display=''; menu.style.visibility='visible'; menu.style.opacity='1'; menu.style.pointerEvents='auto'; }else{ menu.classList.add('hidden'); menu.style.display='none'; menu.style.visibility=''; menu.style.opacity=''; menu.style.pointerEvents=''; } this.setAttribute('aria-expanded', String(isHidden)); const icon=this.querySelector('svg'); if(icon){ icon.style.transform=isHidden?'rotate(180deg)':'rotate(0deg)'; } }" type="button">
<span className="truncate">Insurance Defense</span>
<svg aria-hidden="true" className="shrink-0 transition-transform duration-200 w-[12px] h-[12px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '12px', height: '12px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="pointer-events-none absolute left-3 top-[72px] z-50 w-[216px] translate-y-1 rounded-lg border border-white/10 bg-[#182235] p-1 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.28)] transition" id="workspaceMenu">
<button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs text-white hover:bg-white/[0.06]">
<span>Insurance Defense</span>
<iconify-icon className="text-[#2563EB]" icon="solar:check-circle-linear"></iconify-icon>
</button>
<button className="flex w-full items-center rounded-md px-3 py-2 text-left text-xs text-[#CBD5E1] hover:bg-white/[0.06]">
              Family Law
            </button>
<button className="flex w-full items-center rounded-md px-3 py-2 text-left text-xs text-[#CBD5E1] hover:bg-white/[0.06]">
              Corporate Counsel
            </button>
<button className="flex w-full items-center rounded-md px-3 py-2 text-left text-xs text-[#CBD5E1] hover:bg-white/[0.06]"><a className="" href="/layout-1">Layout 1- Left Side Navigation</a>
</button>
<button className="flex w-full items-center rounded-md px-3 py-2 text-left text-xs text-[#CBD5E1] hover:bg-white/[0.06]"><a className="" href="/layout-2">Layout 2- Top Navigation</a>
</button>
</div>
</div>
<nav className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.34)_transparent] [&amp;::-webkit-scrollbar]:w-1.5 [&amp;::-webkit-scrollbar-track]:bg-transparent [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:bg-white/15 hover:[&amp;::-webkit-scrollbar-thumb]:bg-white/25 group-[.is-collapsed]/sidebar:px-2 max-lg:px-2" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(148,163,184,0.34) transparent', scrollbarGutter: 'stable', overscrollBehavior: 'contain'}}>
<div className="space-y-4 group-[.is-collapsed]/sidebar:space-y-2 max-lg:space-y-2">
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Home
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item relative flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7"></path>
<path d="M9 22V12h6v10"></path>
<path d="M21 22V9"></path>
<path d="M3 9v13"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Dashboard
          </span>
</a>
<a className="nav-item relative flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 18H3"></path>
<path d="m15 18 2 2 4-4"></path>
<path d="M16 12H3"></path>
<path d="M16 6H3"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            My Tasks
          </span>
</a>
<a className="nav-item relative flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Calendar
          </span>
</a>
<a className="nav-item relative flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Notifications
          </span>
</a>
</div>
</section>
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Intake Management
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            New Intake
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h.01"></path>
<path d="M3 18h.01"></path>
<path d="M3 6h.01"></path>
<path d="M8 12h13"></path>
<path d="M8 18h13"></path>
<path d="M8 6h13"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Intake List
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Conflicts Check
          </span>
</a>
</div>
</section>
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Matter Management
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item active relative flex h-9 items-center gap-2 rounded-md bg-[#1E3A5F] px-3 text-[0.8125rem] font-medium text-[#EFF6FF] transition before:absolute before:left-0 before:top-1.5 before:h-6 before:w-[3px] before:rounded-r before:bg-[#2563EB] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 group-[.is-collapsed]/sidebar:before:hidden max-lg:justify-center max-lg:gap-0 max-lg:px-0 max-lg:before:hidden" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Matters
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="13" r="8"></circle>
<path d="M12 9v4l2 2"></path>
<path d="M5 3 2 6"></path>
<path d="m22 6-3-3"></path>
<path d="M6.38 18.7 4 21"></path>
<path d="M17.64 18.67 20 21"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Deadlines
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Tasks
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6h4"></path>
<path d="M2 10h4"></path>
<path d="M2 14h4"></path>
<path d="M2 18h4"></path>
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<path d="M16 2v20"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Notes
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Trial Calendar
          </span>
</a>
</div>
</section>
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Documents
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
<path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path>
<path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            All Documents
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Initiate E-Signature
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="20" x="2" y="3"></rect>
<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
<path d="m9 15 2 2 4-4"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            E-Signature Requests
          </span>
</a>
</div>
</section>
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Time &amp; Billing
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Time Entries
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Invoices
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5"></path>
<path d="M18 12h.01"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            WIP
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M8 11h8"></path>
<path d="M8 16h5"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Pre-Bills
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
<circle cx="12" cy="16.5" r="1"></circle>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Trust Accounting
          </span>
</a>
</div>
</section>
<section className="nav-section">
<button className="section-toggle flex w-full items-center justify-between px-2 pb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#4B5563] group-[.is-collapsed]/sidebar:hidden max-lg:hidden" type="button">
<span className="truncate">
          Reports
        </span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
<div className="section-body space-y-1 overflow-hidden transition-all duration-200">
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Financial Reports
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Matter Reports
          </span>
</a>
<a className="nav-item flex h-9 items-center gap-2 rounded-md px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-[#E2E8F0] group-[.is-collapsed]/sidebar:justify-center group-[.is-collapsed]/sidebar:gap-0 group-[.is-collapsed]/sidebar:px-0 max-lg:justify-center max-lg:gap-0 max-lg:px-0" href="#">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 1 0-8.953 10.953c.55.055.998-.398.998-.95V13a1 1 0 0 1 1-1Z"></path>
<path d="M21.21 15.89A10 10 0 0 1 15 21.21"></path>
</svg>
<span className="truncate group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
            Billing Summary
          </span>
</a>
</div>
</section>
</div>
</nav>
<div className="border-t border-white/[0.07] p-2">
<button className="flex h-9 w-full items-center justify-center gap-2 rounded-md border border-dashed border-white/[0.15] text-[0.8125rem] font-medium text-[#94A3B8] transition hover:border-solid hover:bg-white/[0.07] hover:text-white" id="quickEntryBtn">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
<span className="transition-opacity group-[.is-collapsed]/sidebar:opacity-0 max-lg:hidden">
              Quick Entry
            </span>
</button>
</div>
<div className="group/user flex shrink-0 gap-3 border-white/[0.07] transition hover:bg-white/[0.05] h-14 border-t pr-3 pl-3 relative gap-x-3 gap-y-3 items-center">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-xs font-medium text-white">
    UU
  </div>
<div className="min-w-0 flex-1 transition-opacity group-[.is-collapsed]/sidebar:opacity-0 max-lg:opacity-0">
<div className="truncate text-[0.8125rem] font-medium text-white">
      Uma Underwood
    </div>
<div className="truncate text-[0.6875rem] text-[#6B7280]">
      Northstar Legal
    </div>
</div>
<div className="group/settings relative group-[.is-collapsed]/sidebar:hidden max-lg:hidden">
<button aria-label="Settings" className="flex h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-1 focus:ring-white/20" onclick="const menu=this.nextElementSibling;if(menu){menu.innerHTML='&lt;div class=&quot;px-3 pb-2&quot;&gt;&lt;div class=&quot;flex items-center text-[#64748B]&quot; aria-label=&quot;Change Layout&quot; title=&quot;Change Layout&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;h-4 w-4&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; aria-hidden=&quot;true&quot;&gt;&lt;rect width=&quot;7&quot; height=&quot;9&quot; x=&quot;3&quot; y=&quot;3&quot; rx=&quot;1&quot;&gt;&lt;/rect&gt;&lt;rect width=&quot;7&quot; height=&quot;5&quot; x=&quot;14&quot; y=&quot;3&quot; rx=&quot;1&quot;&gt;&lt;/rect&gt;&lt;rect width=&quot;7&quot; height=&quot;9&quot; x=&quot;14&quot; y=&quot;12&quot; rx=&quot;1&quot;&gt;&lt;/rect&gt;&lt;rect width=&quot;7&quot; height=&quot;5&quot; x=&quot;3&quot; y=&quot;16&quot; rx=&quot;1&quot;&gt;&lt;/rect&gt;&lt;/svg&gt;&lt;/div&gt;&lt;/div&gt;&lt;a href=&quot;https://aura.build/settings/layout?layout=sidebar-panel&quot; class=&quot;flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-white&quot;&gt;&lt;span class=&quot;flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]&quot;&gt;1&lt;/span&gt;&lt;span class=&quot;truncate&quot;&gt;Layout 1- Sidebar Panel&lt;/span&gt;&lt;/a&gt;&lt;a href=&quot;/layout-1&quot; class=&quot;flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-white&quot;&gt;&lt;span class=&quot;flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]&quot;&gt;2&lt;/span&gt;&lt;span class=&quot;truncate&quot;&gt;Layout 2- Top Panel&lt;/span&gt;&lt;/a&gt;&lt;div class=&quot;flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#94A3B8]&quot;&gt;&lt;span class=&quot;flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]&quot;&gt;3&lt;/span&gt;&lt;span class=&quot;truncate&quot;&gt;Layout 3- In progress&lt;/span&gt;&lt;/div&gt;';}" onfocus="this.onclick()" onmouseenter="this.onclick()" type="button">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<div className="invisible absolute bottom-10 right-0 z-50 w-56 translate-y-1 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0F172A] py-2 opacity-0 shadow-[0_18px_48px_rgba(0,0,0,0.38)] transition group-hover/settings:visible group-hover/settings:translate-y-0 group-hover/settings:opacity-100 group-focus-within/settings:visible group-focus-within/settings:translate-y-0 group-focus-within/settings:opacity-100"><div className="px-3 pb-2"><div aria-label="Change Layout" className="flex items-center text-[#64748B]" title="Change Layout"><svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg></div></div><a className="flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-white" href="/layout-1"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]">1</span><span className="truncate">Layout 1- Sidebar Panel</span></a><a className="flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#CBD5E1] transition hover:bg-white/[0.06] hover:text-white" href="/layout-1"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]">2</span><span className="truncate">Layout 2- Top Panel</span></a><div className="flex h-9 items-center gap-2 px-3 text-[0.8125rem] font-medium text-[#94A3B8]"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[0.6875rem] text-[#94A3B8]">3</span><span className="truncate">Layout 3- In progress</span></div></div>
</div>
</div>
<div className="pointer-events-none absolute left-[62px] top-[246px] z-50 rounded-md bg-[#0F172A] px-2 py-1 text-xs text-white opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.22)] transition group-[.is-collapsed]/sidebar:opacity-100 max-lg:opacity-100" id="collapsedTooltip">
          Matters
        </div>
</aside>
<main className="flex min-w-0 flex-1 flex-col">
<header className="flex h-14 shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] max-md:px-3">
<div className="flex min-w-0 items-center gap-3">
<button className="flex h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition hover:bg-[#F1F5F9] hover:text-[#0F172A]" id="mobileMenuBtn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="hidden h-8 items-center gap-2 rounded-full bg-[#F1F5F9] px-3 text-[#94A3B8] transition focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(37,99,235,0.25)] focus-within:ring-1 focus-within:ring-[#2563EB] sm:flex sm:w-[360px]">
<iconify-icon className="text-base" icon="solar:magnifer-linear"></iconify-icon>
<input className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#374151] outline-none placeholder:text-[#9CA3AF]" id="globalSearch" placeholder="Search matters, clients, documents..."/>
<kbd className="rounded border border-[#D1D5DB] bg-white px-1.5 py-0.5 text-[0.6875rem] text-[#6B7280] shadow-sm">
                ⌘K
              </kbd>
</div>
</div>
<div className="flex items-center gap-2 max-md:gap-1">
<button aria-label="Start timer" className="flex h-8 items-center gap-1.5 rounded-full border border-transparent px-2.5 text-[0.8125rem] font-medium text-[#374151] transition hover:bg-[#EFF6FF] hover:text-[#2563EB] max-sm:w-8 max-sm:justify-center max-sm:px-0" id="timerBtn" onclick='if(!this.dataset.running){this.dataset.running="true";this.dataset.start=Date.now();this.setAttribute("aria-label","Timer running");this.classList.add("border-[#BFDBFE]","bg-[#EFF6FF]","text-[#2563EB]","shadow-sm","max-sm:w-[5.75rem]","max-sm:px-2.5");const label=this.querySelector("[data-timer-label]");if(label){label.textContent="00:00";label.classList.remove("max-sm:hidden");}this._timer=setInterval(()=&gt;{const total=Math.floor((Date.now()-Number(this.dataset.start))/1000);const h=Math.floor(total/3600);const m=Math.floor((total%3600)/60);const s=total%60;const time=(h&gt;0?String(h).padStart(2,"0")+":":"")+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");const label=this.querySelector("[data-timer-label]");if(label)label.textContent=time;},1000);}' type="button">
<svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="max-sm:hidden tabular-nums" data-timer-label="">Timer</span>
</button>
<button className="hidden h-8 items-center gap-1.5 rounded-md border border-[#D1D5DB] px-2.5 text-[0.8125rem] font-medium text-[#374151] transition hover:border-[#2563EB] hover:text-[#2563EB] sm:flex">
<iconify-icon className="text-base" icon="solar:check-square-linear"></iconify-icon>
              Add Task
            </button>
<button className="hidden h-8 items-center gap-1.5 rounded-md border border-[#D1D5DB] px-2.5 text-[0.8125rem] font-medium text-[#374151] transition hover:border-[#2563EB] hover:text-[#2563EB] lg:flex">
<iconify-icon className="text-base" icon="solar:user-plus-linear"></iconify-icon>
              New Intake
            </button>
<div className="relative">
<button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D1D5DB] text-[#374151] transition hover:border-[#2563EB] hover:text-[#2563EB]" id="newMenuBtn">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="pointer-events-none absolute right-0 top-10 z-50 w-44 translate-y-1 rounded-lg border border-[#E2E8F0] bg-white p-1 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition" id="newMenu">
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:case-round-linear"></iconify-icon>
                  New Matter
                </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:bill-list-linear"></iconify-icon>
                  New Invoice
                </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
                  New Document
                </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
                  New Expense
                </button>
</div>
</div>
<button className="relative flex h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition hover:bg-[#F1F5F9] hover:text-[#0F172A]" id="notificationBtn">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#DC2626] ring-2 ring-white"></span>
</button>
<button className="hidden h-8 w-8 items-center justify-center rounded-md text-[#6B7280] transition hover:bg-[#F1F5F9] hover:text-[#0F172A] sm:flex" id="calendarBtn">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-xs font-semibold text-white shadow-sm" id="userMenuBtn">
              UU
            </button>
</div>
</header>
<div className="flex h-10 shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC]">
<div className="flex min-w-0 flex-1 overflow-x-auto">
<div className="group/tab flex h-10 min-w-[160px] max-w-[200px] cursor-grab items-center gap-2 border-r border-[#E2E8F0] border-b-2 border-[#2563EB] bg-white px-3 text-[0.8125rem] font-semibold text-[#1E40AF] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] transition active:scale-[1.01] active:shadow-md" draggable="true">
<iconify-icon className="text-xs text-[#2563EB]" icon="solar:pin-linear"></iconify-icon>
<iconify-icon className="text-sm text-[#2563EB]" icon="solar:case-round-linear"></iconify-icon>
<span className="truncate">Jagdish Testing Matter</span>
<button className="ml-auto opacity-0 transition group-hover/tab:opacity-100">
<iconify-icon className="text-sm text-[#9CA3AF]" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="group/tab flex h-10 min-w-[148px] max-w-[200px] cursor-grab items-center gap-2 border-r border-[#E2E8F0] px-3 text-[0.8125rem] font-medium text-[#6B7280] transition hover:bg-[#F1F5F9] active:scale-[1.01] active:shadow-md" draggable="true">
<iconify-icon className="text-sm text-[#16A34A]" icon="solar:bill-list-linear"></iconify-icon>
<span className="truncate">Invoice INV-1042</span>
<button className="ml-auto opacity-0 transition group-hover/tab:opacity-100">
<iconify-icon className="text-sm text-[#9CA3AF]" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="group/tab flex h-10 min-w-[156px] max-w-[200px] cursor-grab items-center gap-2 border-r border-[#E2E8F0] px-3 text-[0.8125rem] font-medium text-[#6B7280] transition hover:bg-[#F1F5F9] active:scale-[1.01] active:shadow-md" draggable="true">
<iconify-icon className="text-sm text-purple-600" icon="solar:document-text-linear"></iconify-icon>
<span className="truncate">Custody Exhibit.pdf</span>
<button className="ml-auto opacity-0 transition group-hover/tab:opacity-100">
<iconify-icon className="text-sm text-[#9CA3AF]" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
<button className="flex h-10 shrink-0 items-center gap-1.5 border-l border-[#E2E8F0] px-3 text-[0.8125rem] font-medium text-[#6B7280] transition hover:bg-white hover:text-[#2563EB]" id="splitBtn">
<iconify-icon className="text-base" icon="solar:split-minimalistic-linear"></iconify-icon>
<span className="hidden sm:inline">Split View</span>
</button>
</div>
<section className="relative min-h-0 flex-1 overflow-hidden bg-[#F8FAFC]" id="canvas">
<div className="h-full overflow-y-auto" id="normalView">
<div className="mx-auto pb-8">
<div className="sticky max-sm:px-4 bg-white z-20 border-[#E2E8F0] border-b px-3 py-2 top-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between gap-x-3 gap-y-2 max-lg:flex-col max-lg:items-start">
<div className="flex min-w-0 flex-1 flex-col items-start gap-y-2 text-[0.8125rem] text-[#6B7280]">
<div className="flex w-full min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
<div className="flex shrink-0 items-center text-xs text-[#6B7280]">
<a className="hover:underline" href="#">Matter</a>
<span className="mx-1 text-[#CBD5E1]">›</span>
</div>
<h1 className="min-w-0 max-w-full truncate text-lg font-medium text-[#0F172A]">
      Jagdish Testing Matter
    </h1>
<span aria-expanded="false" aria-haspopup="listbox" className="group relative inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-[#86EFAC] bg-[#F0FDF4] px-2.5 py-1 text-xs font-normal text-[#15803D] shadow-sm transition-all duration-200 hover:border-[#4ADE80] hover:bg-[#DCFCE7] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#86EFAC]/60" role="button" tabindex="0">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-40"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#16A34A]"></span>
</span>
<span className="font-normal leading-none">Open</span>
<svg aria-hidden="true" className="h-3.5 w-3.5 text-[#16A34A] transition-transform duration-200 group-hover:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<span aria-label="Change status" className="pointer-events-none absolute left-0 top-full z-50 mt-2 hidden w-44 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-1.5 text-[#334155] shadow-lg group-hover:block group-focus-within:block" role="listbox">
<span className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-normal text-[#15803D]">
<span className="h-2 w-2 rounded-full bg-[#16A34A]"></span>
          Open
          <svg aria-hidden="true" className="ml-auto h-3.5 w-3.5 text-[#16A34A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-normal text-[#475569] hover:bg-[#F8FAFC]" role="option">
<span className="h-2 w-2 rounded-full bg-[#F59E0B]"></span>
          In Progress
        </span>
<span className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-normal text-[#475569] hover:bg-[#F8FAFC]" role="option">
<span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
          Review
        </span>
<span className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-normal text-[#475569] hover:bg-[#F8FAFC]" role="option">
<span className="h-2 w-2 rounded-full bg-[#64748B]"></span>
          Closed
        </span>
</span>
</span>
</div>
<div className="flex w-full min-w-0 flex-wrap items-center gap-1.5 text-[0.8125rem] text-[#64748B]">
<span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-normal text-[#475569] shadow-sm">
<svg aria-hidden="true" className="h-3.5 w-3.5 flex-none text-[#94A3B8]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="M5 8h14"></path>
<path d="M5 16h14"></path>
</svg>
<span className="text-[#94A3B8]">Case Type</span>
<span className="truncate text-[#334155]">Child Custody</span>
</span>
<span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-normal text-[#475569] shadow-sm">
<svg aria-hidden="true" className="h-3.5 w-3.5 flex-none text-[#94A3B8]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="11" r="4"></circle>
<path d="M12 3a2 2 0 0 1 2 2v1h-4V5a2 2 0 0 1 2-2Z"></path>
</svg>
<span className="text-[#94A3B8]">Client</span>
<span className="truncate text-[#334155]">Sample Account</span>
</span>
<span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-normal text-[#475569] shadow-sm">
<svg aria-hidden="true" className="h-3.5 w-3.5 flex-none text-[#94A3B8]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-8 0v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="text-[#94A3B8]">Assigned to</span>
<span className="truncate text-[#334155]">Jagdish</span>
</span>
</div>
</div>
<div className="flex shrink-0 flex-wrap items-center gap-2">
<button className="flex h-8 items-center gap-1.5 rounded-md bg-[#2563EB] px-3 text-[0.8125rem] font-medium text-white shadow-sm transition hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.97]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .505-.853z"></path>
</svg>
        Edit
      </button>
<div className="flex h-8 overflow-hidden rounded-md border border-[#E2E8F0] bg-white">
<button className="flex w-8 items-center justify-center border-r border-[#E2E8F0] text-[#6B7280] transition hover:bg-[#FEF2F2] hover:text-[#DC2626]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
<path d="M10 11v6"></path>
<path d="M14 11v6"></path>
</svg>
</button>
<button className="flex w-8 items-center justify-center border-r border-[#E2E8F0] text-[#6B7280] transition hover:bg-[#EFF6FF] hover:text-[#2563EB]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</button>
<button className="flex w-8 items-center justify-center text-[#6B7280] transition hover:bg-[#EFF6FF] hover:text-[#2563EB]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</button>
</div>
<div className="relative">
<button className="flex h-8 items-center gap-1.5 rounded-md border border-[#D1D5DB] bg-white px-3 text-[0.8125rem] font-normal text-[#374151] transition hover:border-[#2563EB] hover:text-[#2563EB]" id="actionsBtn">
          Actions
          <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="pointer-events-none absolute right-0 top-10 z-50 w-48 translate-y-1 rounded-lg border border-[#E2E8F0] bg-white p-1 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition" id="actionsMenu">
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
            Convert to Invoice
          </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="20" x="2" y="3"></rect>
<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
<path d="M10 12h4"></path>
</svg>
            Move to Archive
          </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
            Generate Report
          </button>
<button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs text-[#374151] hover:bg-[#F8FAFC]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
            Export PDF
          </button>
</div>
</div>
<button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D1D5DB] text-[#6B7280] transition hover:border-[#2563EB] hover:text-[#2563EB]">
<svg aria-hidden="true" className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<p className="mt-1 text-[0.8125rem] text-[#6B7280] md:hidden">
    Case Type: Child Custody · Client: Sample Account · Assigned to: Jagdish
  </p>
</div>
<div className="border-b border-[#F1F5F9] bg-white px-5 py-2 max-sm:px-4" style={{display: 'none'}}>
<div className="flex items-center gap-3 max-lg:flex-col max-lg:items-stretch">
<div className="grid flex-1 grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center gap-1 max-md:grid-cols-1">
<div className="group/stage flex flex-col items-center gap-1 rounded-lg p-1 transition hover:bg-[#F8FAFC]">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A] text-white">
<iconify-icon className="text-base" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-[#16A34A]">
                        Open
                      </span>
</div>
<div className="h-0.5 rounded-full bg-[#16A34A] max-md:hidden"></div>
<div className="absolute top-1 h-6 w-6 animate-ping rounded-full bg-[#2563EB]/20">
<span className="absolute top-2 h-7 w-7 animate-ping rounded-full bg-[#2563EB]/20"></span>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white">
<iconify-icon className="text-base" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-[#2563EB]">
                        In Progress
                      </span>
</div>
<div className="h-0 border-t border-dashed border-[#E2E8F0] max-md:hidden"></div>
<div className="flex flex-col items-center gap-1 rounded-lg p-1">
<div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D1D5DB] bg-white"></div>
<span className="text-xs text-[#9CA3AF]">Under Review</span>
</div>
<div className="h-0 border-t border-dashed border-[#E2E8F0] max-md:hidden"></div>
<div className="flex flex-col items-center gap-1 rounded-lg p-1">
<div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D1D5DB] bg-white"></div>
<span className="text-xs text-[#9CA3AF]">Closed</span>
</div>
</div>
<button className="group flex h-7 shrink-0 items-center justify-center gap-1.5 rounded-md bg-[#2563EB] px-3 text-xs font-semibold text-white transition hover:bg-[#1D4ED8] active:scale-[0.97]">
                    Advance to Next Stage
                    <iconify-icon className="transition group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="max-sm:px-3 bg-white border-[#F1F5F9] border-b pt-1 pr-3 pb-1 pl-3 gap-x-1 gap-y-1">
<div className="grid grid-cols-8 divide-x divide-[#F1F5F9] overflow-hidden max-xl:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:divide-x-0 max-sm:divide-y border-[#F1F5F9] border rounded-md gap-x-1 gap-y-1">
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Matter Name</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Jagdish Testing...</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Client</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Sample Account</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Case Type</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Child Custody</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Status</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Open</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Principal Attorney</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Jagdish</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Open Date</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">May 09, 2025</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Practice Area</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Family Law</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<div className="group/field min-w-0 cursor-pointer px-1.5 py-1 transition hover:bg-[#EFF6FF]">
<div className="text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-[#94A3B8]">Office</div>
<div className="mt-0.5 flex items-center gap-1.5">
<span className="truncate text-[0.8125rem] font-medium text-[#0F172A]">Austin</span>
<iconify-icon className="ml-auto text-xs opacity-0 transition group-hover/field:opacity-100" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="float-left clear-left z-10 flex min-h-[640px] w-44 flex-col border-y border-l border-[#E2E8F0] bg-white md:ml-3 md:mt-3 md:mr-4 md:mb-3 max-md:float-none max-md:clear-both max-md:mx-3 max-md:mt-3 max-md:mb-0 max-md:min-h-0 max-md:w-auto max-md:flex-row max-md:overflow-x-auto max-md:rounded-t-lg max-md:rounded-b-none max-md:border max-md:border-b-0 max-md:px-3 max-md:py-2 max-md:shadow-none rounded-l-lg mt-3 mr-4 mb-3 ml-3 pt-3 pr-2 pb-3 pl-2 relative shadow-[0_1px_3px_rgba(0,0,0,0.07)] gap-x-1 gap-y-1">
<div className="pointer-events-none absolute bottom-0 right-0 top-0 w-px bg-[#E2E8F0] max-md:left-0 max-md:top-auto max-md:h-px max-md:w-full"></div>
<div className="mb-2 flex items-center justify-between px-2 max-md:hidden">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span><span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#94A3B8]">Matter Menu</span>
</div>
<div className="flex w-full max-w-full flex-col items-stretch gap-1 overflow-x-visible max-md:flex-row max-md:items-center max-md:overflow-x-auto">
<button className="group relative flex h-8 shrink-0 items-center gap-2 rounded-md border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 text-left text-[0.75rem] font-medium text-[#1D4ED8] shadow-[0_1px_2px_rgba(37,99,235,0.10)] max-md:h-7 max-md:justify-center max-md:text-center">
<span className="absolute -right-2 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-[#2563EB] max-md:hidden"></span>
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 13h8V3H3z"></path>
<path d="M13 21h8v-8h-8z"></path>
<path d="M13 3h8v6h-8z"></path>
<path d="M3 21h8v-4H3z"></path>
</svg>
<span className="truncate">Overview</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="truncate">Parties</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
<span className="truncate">Workflow</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="truncate">Finance</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
<path d="M14 2v6h6"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
<span className="truncate">Docs</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="truncate">Sign</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 11l3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
<span className="truncate">Tasks</span>
</button>
<button className="group flex h-8 shrink-0 items-center gap-2 rounded-md px-2.5 text-left text-[0.75rem] font-normal text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB] max-md:h-7 max-md:justify-center max-md:text-center">
<svg aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition group-hover:text-[#2563EB]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
<span className="truncate">Activity</span>
</button>
</div>
<div className="mt-3 border-t border-[#F1F5F9] pt-2 text-[0.6875rem] text-[#94A3B8] max-md:hidden">
<div className="mb-1 px-2 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[#CBD5E1]">Work in Progress</div>
<div className="flex flex-col gap-0.5">
<a className="flex items-center justify-between rounded-md bg-[#F8FAFC] px-2 py-1 text-[#2563EB] transition hover:bg-[#EFF6FF]" href="#">
<span className="">WIP</span>
<span className="rounded-full bg-[#EEF2FF] px-1.5 text-[0.625rem] text-[#2563EB]">1</span>
</a>
<a className="flex items-center justify-between rounded-md px-2 py-1 text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB]" href="#">
<span>Pre-Bills</span>
<span className="rounded-full bg-[#F8FAFC] px-1.5 text-[0.625rem] text-[#94A3B8]">0</span>
</a>
<a className="flex items-center justify-between rounded-md px-2 py-1 text-[#64748B] transition hover:bg-[#F8FAFC] hover:text-[#2563EB]" href="#">
<span>Bills</span>
<span className="rounded-full bg-[#F8FAFC] px-1.5 text-[0.625rem] text-[#94A3B8]">0</span>
</a>
</div>
</div>
</div>
<div className="flow-root min-w-0 max-sm:m-3 max-md:clear-both md:clear-none md:overflow-hidden -multi bg-white border-[#E2E8F0] border rounded-lg mt-3 mr-3 mb-3 ml-3 shadow-[0_1px_3px_rgba(0,0,0,0.07)] gap-x-3 gap-y-3" style={{marginLeft: '12px'}}>
<div className="flex max-lg:flex-col max-lg:items-start border-[#F1F5F9] border-b pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-[#0F172A]">
      Work in Progress
    </h2>
<div className="flex overflow-hidden rounded-md border border-[#D1D5DB] bg-white">
<button className="flex h-7 items-center gap-1.5 border-r border-[#D1D5DB] px-2.5 text-[0.8125rem] text-[#374151] transition hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:maximize-square-linear"></iconify-icon>
        Expand All
      </button>
<button className="hidden h-7 items-center gap-1.5 border-r border-[#D1D5DB] px-2.5 text-[0.8125rem] text-[#374151] transition hover:bg-[#F8FAFC] sm:flex">
<iconify-icon icon="solar:minimize-square-linear"></iconify-icon>
        Collapse All
      </button>
<button className="flex h-7 items-center gap-1.5 border-r border-[#D1D5DB] px-2.5 text-[0.8125rem] text-[#374151] transition hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
        Refresh
      </button>
<button className="flex h-7 items-center gap-1.5 px-2.5 text-[0.8125rem] text-[#374151] transition hover:bg-[#F8FAFC]">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
        Filter
      </button>
</div>
</div>
<div className="grid grid-cols-6 gap-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3">
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Total from Time
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $72.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#16A34A]">
        ↑ 12% vs last month
      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Selected Time
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $72.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#16A34A]">
        ↑ Ready to bill
      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Total Expense
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $18.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#DC2626]">
        ↓ 4% vs last month
      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Selected Expense
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $18.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#D97706]">
        Pending review
      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Total Billable
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $90.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#16A34A]">
        ↑ 9% utilization
      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] bg-white p-3 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
<div className="text-[0.6875rem] text-[#6B7280]">
        Selected Billable
      </div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
        $90.00
      </div>
<div className="mt-1 text-[0.6875rem] text-[#16A34A]">
        Selected for pre-bill
      </div>
</div>
</div>
<div className="px-4 pb-4">
<div className="overflow-hidden rounded-lg border border-[#E2E8F0]">
<div className="flex items-center gap-3 border-l-[3px] border-[#2563EB] bg-[#F8FAFC] px-3 py-3">
<iconify-icon className="rotate-90 text-base text-[#6B7280] transition" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="text-sm font-semibold text-[#2563EB] hover:underline" href="#">
          Sample Account
        </a>
<div className="ml-auto text-sm font-semibold text-[#0F172A]">
          $90.00
        </div>
</div>
<div className="border-t border-[#E2E8F0] bg-white">
<div className="flex items-center gap-3 px-4 py-3">
<button className="flex h-4 w-4 items-center justify-center rounded border border-[#2563EB] bg-[#2563EB] text-white shadow-sm">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</button>
<a className="text-sm font-medium text-[#2563EB] hover:underline" href="#">
            Jagdish Testing Matter
          </a>
<span className="text-xs text-[#DC2626]">
            -$0.00 adjustment
          </span>
<div className="ml-auto text-sm font-semibold text-[#0F172A]">
            $90.00
          </div>
</div>
<div className="border-t border-[#F1F5F9] px-4">
<div className="flex h-10 items-end gap-5">
<button className="border-b-2 border-[#2563EB] pb-2 text-[0.8125rem] font-medium text-[#2563EB]">
              Time
              <span className="rounded-full bg-[#EFF6FF] px-1.5 py-0.5 text-[0.6875rem] text-[#2563EB]">
                1
              </span>
</button>
<button className="pb-2 text-[0.8125rem] font-medium text-[#6B7280] hover:text-[#2563EB]">
              Expense
              <span className="rounded-full bg-[#F1F5F9] px-1.5 py-0.5 text-[0.6875rem]">
                1
              </span>
</button>
<button className="pb-2 text-[0.8125rem] font-medium text-[#6B7280] hover:text-[#2563EB]">
              Fee
              <span className="rounded-full bg-[#F1F5F9] px-1.5 py-0.5 text-[0.6875rem]">
                1
              </span>
</button>
</div>
</div>
<div className="relative overflow-x-auto">
<table className="w-full min-w-[840px] border-t border-[#F1F5F9] text-left">
<thead className="bg-[#F8FAFC]">
<tr className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
<th className="w-10 px-3 py-2">
<button className="h-4 w-4 rounded border border-[#D1D5DB] bg-white"></button>
</th>
<th className="px-3 py-2">
                  ID
                  <iconify-icon className="align-middle opacity-0 transition group-hover:opacity-100" icon="solar:sort-linear"></iconify-icon>
</th>
<th className="px-3 py-2">Date</th>
<th className="px-3 py-2">Timekeeper</th>
<th className="px-3 py-2">Description</th>
<th className="px-3 py-2 text-center">Billable</th>
<th className="px-3 py-2 text-right">Hours</th>
<th className="px-3 py-2 text-right">Amount</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="h-10 border-b border-[#F1F5F9] transition hover:bg-[#F8FAFC]">
<td className="px-3 py-2">
<button className="flex h-4 w-4 items-center justify-center rounded border border-[#2563EB] bg-[#2563EB] text-white">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</button>
</td>
<td className="px-3 py-2">
<a className="font-mono text-xs text-[#2563EB] hover:underline" href="#" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    TE-000418
                  </a>
</td>
<td className="px-3 py-2 text-[#6B7280]">
                  May 12, 2025
                </td>
<td className="px-3 py-2">Jagdish</td>
<td className="px-3 py-2 text-[#6B7280]">
                  Reviewed custody filings and prepared hearing
                  timeline.
                </td>
<td className="px-3 py-2 text-center">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
</td>
<td className="px-3 py-2 text-right font-medium">
                  0.40
                </td>
<td className="px-3 py-2 text-right font-semibold text-[#0F172A]">
                  $72.00
                </td>
</tr>
<tr className="h-10 border-b border-[#F1F5F9] transition hover:bg-[#F8FAFC]">
<td className="px-3 py-2">
<button className="h-4 w-4 rounded border border-[#D1D5DB] bg-white"></button>
</td>
<td className="px-3 py-2">
<a className="font-mono text-xs text-[#2563EB] hover:underline" href="#" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    EX-000231
                  </a>
</td>
<td className="px-3 py-2 text-[#6B7280]">
                  May 13, 2025
                </td>
<td className="px-3 py-2">Uma</td>
<td className="px-3 py-2 text-[#6B7280]">
                  Certified mail and courthouse copy charges.
                </td>
<td className="px-3 py-2 text-center">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</span>
</td>
<td className="px-3 py-2 text-right font-medium">
                  —
                </td>
<td className="px-3 py-2 text-right font-semibold text-[#0F172A]">
                  $18.00
                </td>
</tr>
</tbody>
</table>
<button className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition hover:scale-105 hover:shadow-xl active:scale-[0.97]">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden h-full grid-cols-[1fr_6px_1fr]" id="splitView">
<div className="min-w-0 overflow-y-auto">
<div className="sticky top-0 z-10 border-b border-[#E2E8F0] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<div className="text-xs text-[#6B7280]">
                    Matter › Financial Summary
                  </div>
<button className="h-8 rounded-md bg-[#2563EB] px-3 text-[0.8125rem] font-semibold text-white">
                    Edit
                  </button>
</div>
<div className="mt-3 flex items-center gap-2">
<h2 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                    Jagdish Testing Matter
                  </h2>
<span className="rounded-full bg-[#DCFCE7] px-2 py-1 text-xs font-semibold text-[#16A34A]">
                    Open
                  </span>
</div>
<p className="mt-1 text-[0.8125rem] text-[#6B7280]">
                  Financial Summary · Sample Account · Jagdish
                </p>
</div>
<div className="p-5">
<div className="rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                      Financial Summary
                    </h3>
<button className="text-[0.8125rem] text-[#2563EB]">
                      Refresh
                    </button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-md border border-[#E2E8F0] p-3">
<div className="text-xs text-[#6B7280]">WIP Balance</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
                        $90.00
                      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] p-3">
<div className="text-xs text-[#6B7280]">Trust Balance</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
                        $4,200.00
                      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] p-3">
<div className="text-xs text-[#6B7280]">Outstanding AR</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
                        $1,640.00
                      </div>
</div>
<div className="rounded-md border border-[#E2E8F0] p-3">
<div className="text-xs text-[#6B7280]">Unbilled Hours</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-[#0F172A]">
                        0.40
                      </div>
</div>
</div>
<div className="mt-4 rounded-lg border border-[#E2E8F0]">
<div className="border-b border-[#F1F5F9] px-4 py-3 text-sm font-semibold text-[#0F172A]">
                      Recent Billing Activity
                    </div>
<div className="divide-y divide-[#F1F5F9]">
<div className="flex items-center justify-between px-4 py-3 text-sm">
<span>Time entry approved</span>
<span className="font-semibold">$72.00</span>
</div>
<div className="flex items-center justify-between px-4 py-3 text-sm">
<span>Expense captured</span>
<span className="font-semibold">$18.00</span>
</div>
<div className="flex items-center justify-between px-4 py-3 text-sm">
<span>Pre-bill generated</span>
<span className="font-semibold text-[#D97706]">
                          Pending
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group/divider relative cursor-col-resize bg-[#D1D5DB] transition hover:bg-[#2563EB]">
<button className="pointer-events-none absolute left-1/2 top-4 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0F172A] px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition group-hover/divider:block group-hover/divider:opacity-100" id="exitSplitBtn">
                Exit Split View
              </button>
</div>
<div className="min-w-0 overflow-y-auto">
<div className="sticky top-0 z-10 border-b border-[#E2E8F0] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<div className="text-xs text-[#6B7280]">Matter › Documents</div>
<button className="h-8 rounded-md border border-[#D1D5DB] px-3 text-[0.8125rem] font-medium text-[#374151]">
                    Actions
                  </button>
</div>
<div className="mt-3 flex items-center gap-2">
<h2 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                    Rivera v. Northline
                  </h2>
<span className="rounded-full bg-[#FEF3C7] px-2 py-1 text-xs font-semibold text-[#D97706]">
                    Under Review
                  </span>
</div>
<p className="mt-1 text-[0.8125rem] text-[#6B7280]">
                  Documents · Client: Rivera Holdings · Assigned to: Lin Chen
                </p>
</div>
<div className="p-5">
<div className="rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                      Documents
                    </h3>
<button className="h-8 rounded-md bg-[#2563EB] px-3 text-[0.8125rem] font-semibold text-white">
                      Upload
                    </button>
</div>
<div className="mt-4 grid gap-3">
<div className="flex items-center gap-3 rounded-md border border-[#E2E8F0] p-3 transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-xl text-purple-600" icon="solar:document-text-linear"></iconify-icon>
<div className="min-w-0 flex-1">
<div className="truncate text-sm font-medium text-[#0F172A]">
                          Motion to Compel Draft.docx
                        </div>
<div className="text-xs text-[#6B7280]">
                          Updated today · Lin Chen
                        </div>
</div>
<span className="rounded-full bg-[#EFF6FF] px-2 py-1 text-xs text-[#2563EB]">
                        Draft
                      </span>
</div>
<div className="flex items-center gap-3 rounded-md border border-[#E2E8F0] p-3 transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-xl text-purple-600" icon="solar:document-text-linear"></iconify-icon>
<div className="min-w-0 flex-1">
<div className="truncate text-sm font-medium text-[#0F172A]">
                          Signed Engagement Letter.pdf
                        </div>
<div className="text-xs text-[#6B7280]">
                          May 02, 2025 · Uma Underwood
                        </div>
</div>
<span className="rounded-full bg-[#DCFCE7] px-2 py-1 text-xs text-[#16A34A]">
                        Signed
                      </span>
</div>
<div className="flex items-center gap-3 rounded-md border border-[#E2E8F0] p-3 transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-xl text-[#2563EB]" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="min-w-0 flex-1">
<div className="truncate text-sm font-medium text-[#0F172A]">
                          Discovery Production
                        </div>
<div className="text-xs text-[#6B7280]">
                          18 files · Indexed
                        </div>
</div>
<span className="rounded-full bg-[#F1F5F9] px-2 py-1 text-xs text-[#6B7280]">
                        Folder
                      </span>
</div>
</div>
<div className="mt-5 rounded-lg border border-dashed border-[#BFDBFE] bg-[#EFF6FF] p-6 text-center text-sm font-medium text-[#2563EB]">
                    Drop another matter or document tab here
                  </div>
</div>
</div>
</div>
</div>
<div className="hidden fixed bottom-5 right-5 z-50 w-60 rounded-lg bg-[#1E3A5F] p-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.14)]" id="timerWidget">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
<span className="h-2 w-2 animate-pulse rounded-full bg-[#16A34A]"></span>
                Recording
              </div>
<div className="flex gap-2">
<button>
<iconify-icon icon="solar:pause-circle-linear"></iconify-icon>
</button>
<button>
<iconify-icon icon="solar:stop-circle-linear"></iconify-icon>
</button>
</div>
</div>
<div className="mt-2 font-mono text-2xl font-semibold tracking-tight" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              00:42:18
            </div>
<div className="mt-1 truncate text-xs text-[#CBD5E1]">
              Jagdish Testing Matter
            </div>
</div>
</section>
</main>
<aside className="fixed right-0 top-0 z-50 h-full w-[400px] translate-x-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition duration-300 max-sm:w-full" id="notificationDrawer">
<div className="flex h-14 items-center justify-between border-b border-[#E2E8F0] px-5">
<h2 className="text-lg font-semibold tracking-tight text-[#0F172A]">
            Notifications
          </h2>
<button className="text-xs font-medium text-[#2563EB]" id="closeDrawerBtn">
            Mark all read
          </button>
</div>
<div className="p-5">
<div className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
            Today
          </div>
<div className="mt-3 space-y-2">
<div className="group flex gap-3 rounded-lg border border-[#E2E8F0] p-3 transition hover:bg-[#F8FAFC]">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-semibold text-[#2563EB]">
                JC
              </div>
<div className="min-w-0 flex-1">
<p className="text-sm text-[#374151]">
<span className="font-medium text-[#0F172A]">Jagdish</span>
                  approved one WIP time entry.
                </p>
<p className="mt-1 text-xs text-[#6B7280]">8 minutes ago</p>
</div>
<span className="mt-1 h-2 w-2 rounded-full bg-[#2563EB]"></span>
</div>
<div className="group flex gap-3 rounded-lg border border-[#E2E8F0] p-3 transition hover:bg-[#F8FAFC]">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF3C7] text-xs font-semibold text-[#D97706]">
                AR
              </div>
<div className="min-w-0 flex-1">
<p className="text-sm text-[#374151]">
                  Invoice
                  <span className="font-mono text-xs text-[#2563EB]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    INV-1042
                  </span>
                  is pending client review.
                </p>
<p className="mt-1 text-xs text-[#6B7280]">34 minutes ago</p>
</div>
</div>
</div>
<div className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
            Yesterday
          </div>
<div className="mt-3 rounded-lg border border-[#E2E8F0] p-3 text-sm text-[#374151]">
            Court deadline synced to trial calendar.
          </div>
</div>
</aside>
<div className="fixed inset-0 z-[70] hidden items-start justify-center bg-black/40 pt-[12vh]" id="commandOverlay">
<div className="w-[560px] max-w-[calc(100vw-2rem)] scale-95 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition duration-150" id="commandModal">
<div className="flex h-14 items-center gap-3 border-b border-[#E2E8F0] px-4">
<span className="text-lg text-[#94A3B8]">/</span>
<input autofocus="" className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#0F172A] outline-none placeholder:text-[#9CA3AF]" placeholder="Search or jump to..."/>
<kbd className="rounded border border-[#D1D5DB] bg-[#F8FAFC] px-1.5 py-0.5 text-[0.6875rem] text-[#6B7280]">
              Esc
            </kbd>
</div>
<div className="max-h-[520px] overflow-y-auto p-2">
<div className="px-2 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Recent
            </div>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#2563EB]" icon="solar:case-round-linear"></iconify-icon>
<div className="min-w-0 flex-1">
<div className="truncate text-sm font-medium text-[#0F172A]">
                  Jagdish Testing Matter
                </div>
<div className="text-xs text-[#6B7280]">
                  Matter · Sample Account
                </div>
</div>
<span className="font-mono text-xs text-[#94A3B8]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                MT-2048
              </span>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#16A34A]" icon="solar:bill-list-linear"></iconify-icon>
<div className="min-w-0 flex-1">
<div className="truncate text-sm font-medium text-[#0F172A]">
                  Invoice INV-1042
                </div>
<div className="text-xs text-[#6B7280]">Pending · $1,640.00</div>
</div>
</button>
<div className="px-2 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Actions
            </div>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#2563EB]" icon="solar:add-circle-linear"></iconify-icon>
<div className="text-sm font-medium text-[#0F172A]">
                Create new matter
              </div>
<kbd className="ml-auto rounded border border-[#D1D5DB] px-1.5 py-0.5 text-[0.6875rem] text-[#6B7280]">
                M
              </kbd>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#2563EB]" icon="solar:stopwatch-linear"></iconify-icon>
<div className="text-sm font-medium text-[#0F172A]">Start timer</div>
<kbd className="ml-auto rounded border border-[#D1D5DB] px-1.5 py-0.5 text-[0.6875rem] text-[#6B7280]">
                T
              </kbd>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-purple-600" icon="solar:document-add-linear"></iconify-icon>
<div className="text-sm font-medium text-[#0F172A]">
                Upload document
              </div>
<kbd className="ml-auto rounded border border-[#D1D5DB] px-1.5 py-0.5 text-[0.6875rem] text-[#6B7280]">
                D
              </kbd>
</button>
<div className="px-2 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
              Navigation
            </div>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#D97706]" icon="solar:calendar-linear"></iconify-icon>
<div className="text-sm font-medium text-[#0F172A]">
                Open trial calendar
              </div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-[#F8FAFC]">
<iconify-icon className="text-lg text-[#2563EB]" icon="solar:chart-square-linear"></iconify-icon>
<div className="text-sm font-medium text-[#0F172A]">
                Open financial reports
              </div>
</button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[80] hidden items-center justify-center bg-black/40 p-4" id="quickEntryModal">
<div className="w-[480px] max-w-full scale-95 rounded-xl border border-[#E2E8F0] bg-white p-5 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.14)] transition" id="quickEntryCard">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-[#0F172A]">
              Quick Entry
            </h2>
<button className="text-[#6B7280]" id="closeQuickEntryBtn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="mt-4 grid grid-cols-4 gap-2">
<button className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] py-1.5 text-xs font-medium text-[#2563EB]">
              Task
            </button>
<button className="rounded-full border border-[#E2E8F0] py-1.5 text-xs font-medium text-[#6B7280]">
              Note
            </button>
<button className="rounded-full border border-[#E2E8F0] py-1.5 text-xs font-medium text-[#6B7280]">
              Time Entry
            </button>
<button className="rounded-full border border-[#E2E8F0] py-1.5 text-xs font-medium text-[#6B7280]">
              Expense
            </button>
</div>
<div className="mt-4 space-y-3">
<label className="block">
<span className="text-xs font-medium text-[#374151]">Title</span>
<input className="mt-1 h-9 w-full rounded border border-[#D1D5DB] px-3 text-sm outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" placeholder="Follow up with client"/>
</label>
<label className="block">
<span className="text-xs font-medium text-[#374151]">Matter</span>
<input className="mt-1 h-9 w-full rounded border border-[#D1D5DB] px-3 text-sm outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" placeholder="Jagdish Testing Matter"/>
</label>
<label className="block">
<span className="text-xs font-medium text-[#374151]">Due date</span>
<input className="mt-1 h-9 w-full rounded border border-[#D1D5DB] px-3 text-sm outline-none transition focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" placeholder="Tomorrow"/>
</label>
</div>
<div className="mt-5 flex justify-end gap-2">
<button className="h-8 rounded-md border border-[#D1D5DB] px-3 text-[0.8125rem] font-medium text-[#374151]" id="cancelQuickEntryBtn">
              Cancel
            </button>
<button className="h-8 rounded-md bg-[#2563EB] px-3 text-[0.8125rem] font-semibold text-white">
              Save
            </button>
</div>
</div>
</div>
<div className="fixed bottom-4 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-1 rounded-full border border-[#E2E8F0] bg-white/95 p-1 shadow-[0_8px_32px_rgba(0,0,0,0.14)] backdrop-blur max-sm:hidden">
<button className="rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-medium text-[#2563EB]" id="screenMain">
          Main
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-[#6B7280] hover:bg-[#F8FAFC]" id="screenSplit">
          Split
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-[#6B7280] hover:bg-[#F8FAFC]" id="screenCollapsed">
          Collapsed
        </button>
<button className="rounded-full px-3 py-1.5 text-xs font-medium text-[#6B7280] hover:bg-[#F8FAFC]" id="screenCommand">
          Cmd+K
        </button>
</div>
</div>



    </>
  );
}
