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



(() => {
lucide.createIcons();
const moneyEl = document.querySelector('[data-stat="money"]');
const goalEl = document.querySelector('[data-stat="goal"]');
const timeEl = document.querySelector('[data-stat="time"]');
const levelEl = document.querySelector('[data-stat="level"]');
const totalEl = document.querySelector('[data-stat="items"]');
const progressTextEl = document.querySelector('[data-progress-text="true"]');
const progressFillEl = document.querySelector('[data-progress-fill="true"]');
const gameArea = document.querySelector('[data-game-area="gold-miner"]');
const underground = gameArea?.querySelector('.dirt-pattern');
const claw = document.querySelector('[data-claw="swing"]');
const rope = document.querySelector('[data-rope="true"]');
const dropButton = document.querySelector('[data-action="drop-claw"]');
if (!moneyEl || !goalEl || !timeEl || !levelEl || !gameArea || !underground || !claw || !rope || !dropButton) return;
const parseMoney = (value) => Number(String(value).replace(/[^0-9.-]/g, '')) || 0;
const formatMoney = (value) => `$${Math.max(0, Math.round(value)).toLocaleString()}`;
const counts = {};
document.querySelectorAll('[data-count]').forEach((el) => {
counts[el.dataset.count] = Number(el.textContent.trim()) || 0;
});
let money = parseMoney(moneyEl.textContent);
let goal = parseMoney(goalEl.textContent);
let level = Number(levelEl.textContent.trim()) || 1;
let timeLeft = 58;
let busy = false;
let running = true;
const rewards = {
coal: 15,
gold: 80,
oil: 55,
stocks: 70,
diamond: 230,
mystery: 100,
skull: -50
};
const labels = {
coal: 'Coal +15',
gold: 'Gold +80',
oil: 'Oil +55',
stocks: 'Stocks +70',
diamond: 'Diamond +230',
mystery: 'Mystery +100',
skull: 'Skull -50'
};
function syncHud() {
moneyEl.textContent = formatMoney(money);
goalEl.textContent = formatMoney(goal);
levelEl.textContent = level;
if (progressTextEl) progressTextEl.textContent = `${formatMoney(money)} / ${formatMoney(goal)}`;
if (progressFillEl) progressFillEl.style.width = `${Math.min(100, Math.max(0, (money / goal) * 100))}%`;
Object.entries(counts).forEach(([type, value]) => {
const el = document.querySelector(`[data-count="${type}"]`);
if (el) el.textContent = value;
});
if (totalEl) totalEl.textContent = `${Object.values(counts).reduce((sum, value) => sum + value, 0)} items`;
}
function syncTime() {
const minutes = Math.floor(timeLeft / 60);
const seconds = String(timeLeft % 60).padStart(2, '0');
timeEl.textContent = `${minutes}:${seconds}`;
}
function itemType(item) {
const classes = item.className || '';
if (classes.includes('gold-nugget') || classes.includes('item-gold-nugget')) return 'gold';
if (classes.includes('coal-shape') || classes.includes('item-coal-shape')) return 'coal';
if (classes.includes('oil-shape') || classes.includes('item-oil-shape')) return 'oil';
if (classes.includes('stock-shape')) return 'stocks';
if (classes.includes('diamond-shape')) return 'diamond';
if (item.textContent.includes('?')) return 'mystery';
return 'skull';
}
function visibleItems() {
return Array.from(underground.children).filter((item) => !item.matches('[data-claw]') && !item.dataset.collected);
}
function swingAngle() {
const progress = (performance.now() % 2400) / 2400;
return -60 + 120 * (0.5 - 0.5 * Math.cos(progress * Math.PI * 2));
}
function chooseTarget() {
const areaRect = underground.getBoundingClientRect();
const origin = { x: areaRect.width / 2, y: 0 };
const angle = swingAngle() * Math.PI / 180;
const direction = { x: Math.sin(angle), y: Math.cos(angle) };
let best = null;
let bestScore = Infinity;
visibleItems().forEach((item) => {
const rect = item.getBoundingClientRect();
const cx = rect.left - areaRect.left + rect.width / 2;
const cy = rect.top - areaRect.top + rect.height / 2;
const dx = cx - origin.x;
const dy = cy - origin.y;
const projection = dx * direction.x + dy * direction.y;
if (projection < 20) return;
const distanceFromLine = Math.abs(dx * direction.y - dy * direction.x);
const hitRadius = Math.max(48, Math.min(rect.width, rect.height) * 1.8);
const score = distanceFromLine + projection * 0.015;
if (distanceFromLine <= hitRadius && score < bestScore) {
best = item;
bestScore = score;
}
});
return best;
}
function showToast(message, positive = true) {
const toast = document.createElement('div');
toast.className = `absolute left-1/2 top-1/3 -translate-x-1/2 px-3 py-1.5 rounded-md text-xs font-medium shadow-lg border ${positive ? 'bg-green-500/90 border-green-300/40 text-white' : 'bg-red-500/90 border-red-300/40 text-white'}`;
toast.textContent = message;
gameArea.appendChild(toast);
setTimeout(() => toast.remove(), 900);
}
function collect(item) {
let type = itemType(item);
if (type === 'mystery') {
const pool = ['coal', 'gold', 'oil', 'stocks', 'diamond'];
type = pool[Math.floor(Math.random() * pool.length)];
}
money = Math.max(0, money + rewards[type]);
if (counts[type] !== undefined) counts[type] += 1;
item.dataset.collected = 'true';
item.style.transition = 'opacity 250ms ease, transform 250ms ease';
item.style.opacity = '0';
item.style.transform = 'scale(0.2)';
item.style.pointerEvents = 'none';
while (money >= goal) {
level += 1;
goal += 250 + level * 75;
showToast(`Level ${level}!`, true);
}
showToast(labels[type], type !== 'skull');
syncHud();
}
function dropClaw() {
if (busy || !running) return;
const target = chooseTarget();
const areaRect = underground.getBoundingClientRect();
const targetRect = target?.getBoundingClientRect();
const depth = targetRect ? Math.min(targetRect.top - areaRect.top + targetRect.height / 2 + 12, areaRect.height - 18) : Math.min(areaRect.height * 0.72, 280);
busy = true;
dropButton.disabled = true;
dropButton.classList.add('opacity-60');
rope.style.transition = 'height 500ms ease-in-out';
rope.style.height = `${depth}px`;
setTimeout(() => {
if (target) collect(target);
else showToast('Missed!', false);
setTimeout(() => {
rope.style.height = '';
setTimeout(() => {
busy = false;
dropButton.disabled = false;
dropButton.classList.remove('opacity-60');
}, 500);
}, 150);
}, 500);
}
dropButton.addEventListener('click', dropClaw);
document.addEventListener('keydown', (event) => {
if (event.code === 'Space' && !event.repeat && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
event.preventDefault();
dropClaw();
}
});
syncHud();
syncTime();
setInterval(() => {
if (!running) return;
timeLeft -= 1;
syncTime();
if (timeLeft <= 0) {
running = false;
dropButton.disabled = true;
dropButton.classList.add('opacity-60');
showToast('Round complete', true);
}
}, 1000);
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (() => {
        lucide.createIcons();

        const moneyEl = document.querySelector('[data-stat="money"]');
        const goalEl = document.querySelector('[data-stat="goal"]');
        const timeEl = document.querySelector('[data-stat="time"]');
        const levelEl = document.querySelector('[data-stat="level"]');
        const totalEl = document.querySelector('[data-stat="items"]');
        const progressTextEl = document.querySelector('[data-progress-text="true"]');
        const progressFillEl = document.querySelector('[data-progress-fill="true"]');
        const gameArea = document.querySelector('[data-game-area="gold-miner"]');
        const underground = gameArea?.querySelector('.dirt-pattern');
        const claw = document.querySelector('[data-claw="swing"]');
        const rope = document.querySelector('[data-rope="true"]');
        const dropButton = document.querySelector('[data-action="drop-claw"]');

        if (!moneyEl || !goalEl || !timeEl || !levelEl || !gameArea || !underground || !claw || !rope || !dropButton) return;

        const parseMoney = (value) => Number(String(value).replace(/[^0-9.-]/g, '')) || 0;
        const formatMoney = (value) => `$${Math.max(0, Math.round(value)).toLocaleString()}`;
        const counts = {};
        document.querySelectorAll('[data-count]').forEach((el) => {
          counts[el.dataset.count] = Number(el.textContent.trim()) || 0;
        });

        let money = parseMoney(moneyEl.textContent);
        let goal = parseMoney(goalEl.textContent);
        let level = Number(levelEl.textContent.trim()) || 1;
        let timeLeft = 58;
        let busy = false;
        let running = true;

        const rewards = {
          coal: 15,
          gold: 80,
          oil: 55,
          stocks: 70,
          diamond: 230,
          mystery: 100,
          skull: -50
        };

        const labels = {
          coal: 'Coal +15',
          gold: 'Gold +80',
          oil: 'Oil +55',
          stocks: 'Stocks +70',
          diamond: 'Diamond +230',
          mystery: 'Mystery +100',
          skull: 'Skull -50'
        };

        function syncHud() {
          moneyEl.textContent = formatMoney(money);
          goalEl.textContent = formatMoney(goal);
          levelEl.textContent = level;
          if (progressTextEl) progressTextEl.textContent = `${formatMoney(money)} / ${formatMoney(goal)}`;
          if (progressFillEl) progressFillEl.style.width = `${Math.min(100, Math.max(0, (money / goal) * 100))}%`;
          Object.entries(counts).forEach(([type, value]) => {
            const el = document.querySelector(`[data-count="${type}"]`);
            if (el) el.textContent = value;
          });
          if (totalEl) totalEl.textContent = `${Object.values(counts).reduce((sum, value) => sum + value, 0)} items`;
        }

        function syncTime() {
          const minutes = Math.floor(timeLeft / 60);
          const seconds = String(timeLeft % 60).padStart(2, '0');
          timeEl.textContent = `${minutes}:${seconds}`;
        }

        function itemType(item) {
          const classes = item.className || '';
          if (classes.includes('gold-nugget')) return 'gold';
          if (classes.includes('coal-shape')) return 'coal';
          if (classes.includes('oil-shape')) return 'oil';
          if (classes.includes('stock-shape')) return 'stocks';
          if (classes.includes('diamond-shape')) return 'diamond';
          if (item.textContent.includes('?')) return 'mystery';
          return 'skull';
        }

        function visibleItems() {
          return Array.from(underground.children).filter((item) => !item.matches('[data-claw]') && !item.dataset.collected);
        }

        function swingAngle() {
          const progress = (performance.now() % 2000) / 2000;
          return -25 + 50 * (0.5 - 0.5 * Math.cos(progress * Math.PI * 2));
        }

        function chooseTarget() {
          const areaRect = underground.getBoundingClientRect();
          const origin = { x: areaRect.width / 2, y: 0 };
          const angle = swingAngle() * Math.PI / 180;
          const direction = { x: Math.sin(angle), y: Math.cos(angle) };
          let best = null;
          let bestScore = Infinity;

          visibleItems().forEach((item) => {
            const rect = item.getBoundingClientRect();
            const cx = rect.left - areaRect.left + rect.width / 2;
            const cy = rect.top - areaRect.top + rect.height / 2;
            const dx = cx - origin.x;
            const dy = cy - origin.y;
            const projection = dx * direction.x + dy * direction.y;
            if (projection < 20) return;
            const distanceFromLine = Math.abs(dx * direction.y - dy * direction.x);
            const hitRadius = Math.max(36, Math.min(rect.width, rect.height) * 1.5);
            const score = distanceFromLine + projection * 0.015;
            if (distanceFromLine <= hitRadius && score < bestScore) {
              best = item;
              bestScore = score;
            }
          });

          return best;
        }

        function showToast(message, positive = true) {
          const toast = document.createElement('div');
          toast.className = `absolute left-1/2 top-1/3 -translate-x-1/2 px-3 py-1.5 rounded-md text-xs font-medium shadow-lg border ${positive ? 'bg-green-500/90 border-green-300/40 text-white' : 'bg-red-500/90 border-red-300/40 text-white'}`;
          toast.textContent = message;
          gameArea.appendChild(toast);
          setTimeout(() => toast.remove(), 900);
        }

        function collect(item) {
          let type = itemType(item);
          if (type === 'mystery') {
            const pool = ['coal', 'gold', 'oil', 'stocks', 'diamond'];
            type = pool[Math.floor(Math.random() * pool.length)];
          }

          money = Math.max(0, money + rewards[type]);
          if (counts[type] !== undefined) counts[type] += 1;

          item.dataset.collected = 'true';
          item.style.transition = 'opacity 250ms ease, transform 250ms ease';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.2)';
          item.style.pointerEvents = 'none';

          while (money >= goal) {
            level += 1;
            goal += 250 + level * 75;
            showToast(`Level ${level}!`, true);
          }

          showToast(labels[type], type !== 'skull');
          syncHud();
        }

        function dropClaw() {
          if (busy || !running) return;
          const target = chooseTarget();
          const areaRect = underground.getBoundingClientRect();
          const targetRect = target?.getBoundingClientRect();
          const depth = targetRect ? Math.min(targetRect.top - areaRect.top + targetRect.height / 2 + 12, areaRect.height - 18) : Math.min(areaRect.height * 0.72, 280);

          busy = true;
          dropButton.disabled = true;
          dropButton.classList.add('opacity-60');
          rope.style.transition = 'height 500ms ease-in-out';
          rope.style.height = `${depth}px`;

          setTimeout(() => {
            if (target) collect(target);
            else showToast('Missed!', false);

            setTimeout(() => {
              rope.style.height = '';
              setTimeout(() => {
                busy = false;
                dropButton.disabled = false;
                dropButton.classList.remove('opacity-60');
              }, 500);
            }, 150);
          }, 500);
        }

        dropButton.addEventListener('click', dropClaw);
        document.addEventListener('keydown', (event) => {
          if (event.code === 'Space' && !event.repeat && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
            event.preventDefault();
            dropClaw();
          }
        });

        syncHud();
        syncTime();
        setInterval(() => {
          if (!running) return;
          timeLeft -= 1;
          syncTime();
          if (timeLeft <= 0) {
            running = false;
            dropButton.disabled = true;
            dropButton.classList.add('opacity-60');
            showToast('Round complete', true);
          }
        }, 1000);
      })();
    


      (() => {
        const modal = document.getElementById('prize-modal');
        const messageEl = document.getElementById('prize-modal-message');
        const closeBtn = document.getElementById('prize-modal-close');
        const gameArea = document.querySelector('[data-game-area="gold-miner"]');
        if (!modal || !messageEl || !closeBtn || !gameArea) return;

        const prizeNames = {
          Coal: '煤炭',
          Gold: '黃金',
          Oil: '石油',
          Stocks: '股票',
          Diamond: '鑽石',
          Mystery: '神秘獎品'
        };
        let hideTimer;

        function hidePrizeModal() {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }

        function showPrizeModal(text) {
          const match = text.match(/^(Coal|Gold|Oil|Stocks|Diamond|Mystery)\s(\+\d+)/);
          if (!match) return;
          messageEl.textContent = `獲得獎品：${prizeNames[match[1]]} ${match[2]}`;
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          clearTimeout(hideTimer);
          hideTimer = setTimeout(hidePrizeModal, 2600);
          if (window.lucide) window.lucide.createIcons();
        }

        closeBtn.addEventListener('click', hidePrizeModal);
        modal.addEventListener('click', (event) => {
          if (event.target === modal) hidePrizeModal();
        });

        new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType !== Node.ELEMENT_NODE) return;
              showPrizeModal(node.textContent.trim());
            });
          });
        }).observe(gameArea, { childList: true });
      })();
    


      (() => {
        const startButton = document.getElementById('start-mining-button');
        const dropButton = document.querySelector('[data-action="drop-claw"]');
        const gameArea = document.querySelector('[data-game-area="gold-miner"]');
        if (!startButton || !dropButton || !gameArea) return;

        const originalText = startButton.textContent.trim();
        let feedbackTimer;

        startButton.addEventListener('click', () => {
          gameArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
          dropButton.click();

          clearTimeout(feedbackTimer);
          startButton.textContent = 'Mining...';
          startButton.classList.add('scale-[0.99]', 'shadow-amber-400/20');

          feedbackTimer = setTimeout(() => {
            startButton.textContent = originalText;
            startButton.classList.remove('scale-[0.99]', 'shadow-amber-400/20');
          }, 900);
        });
      })();
    


      (()=>{const connectBtn=document.querySelector('button.flex.items-center.gap-2.px-3.py-1\\.5.rounded-lg.bg-gradient-to-b');const avatarWrap=document.getElementById('miner-avatar');const avatarImg=document.getElementById('miner-avatar-img');if(!connectBtn||!avatarWrap||!avatarImg)return;connectBtn.addEventListener('click',()=>{const seed=Math.random().toString(36).slice(2,10);avatarImg.src=`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;avatarImg.classList.remove('hidden');const icon=avatarWrap.querySelector('i');if(icon)icon.classList.add('hidden');});})();
    
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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="text-center mb-8">
<h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-3xl mx-auto">
          Trade Perps on BloFin Wallet. Every trade is a chance to mine real
          rewards.
        </h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">

<div className="grid grid-cols-4 gap-3">
<div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-900/60 border border-neutral-800 p-3 shadow-md shadow-black/30 ring-1 ring-white/5">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-1">
<i className="w-3.5 h-3.5" data-lucide="coins" strokeWidth="1.5"></i>
<span>Attempts Left</span>
</div>
<div className="text-lg font-semibold" data-stat="money">12</div>
</div>
<div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-900/60 border border-neutral-800 p-3 shadow-md shadow-black/30 ring-1 ring-white/5">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-1">
<i className="w-3.5 h-3.5" data-lucide="target" strokeWidth="1.5"></i>
<span>Total Mined</span>
</div>
<div className="text-lg font-semibold" data-stat="goal">5</div>
</div>
<div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-900/60 border border-neutral-800 p-3 shadow-md shadow-black/30 ring-1 ring-white/5">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-1">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i>
<span>Total Won</span>
</div>
<div className="text-lg font-semibold text-amber-400" data-stat="time">
                23U
              </div>
</div>
<div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-900/60 border border-neutral-800 p-3 shadow-md shadow-black/30 ring-1 ring-white/5">
<div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-1">
<i className="w-3.5 h-3.5" data-lucide="layers" strokeWidth="1.5"></i>
<span>Boost</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<div className="text-sm font-semibold text-orange-400">
                  x
                  <span data-stat="level">1.5</span>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20" title="Today's boosted reward category">
                  Gold · 1.5
                </span>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden border border-amber-900/40 aspect-[16/10] game-bg shadow-2xl shadow-black/50 ring-1 ring-amber-400/10" data-game-area="gold-miner">

<div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-amber-400 to-amber-500">

<div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center miner-character">
<div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300/70 shadow-lg shadow-black/40 ring-2 ring-amber-500/30 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center" id="miner-avatar">
<i className="w-7 h-7 text-neutral-200" data-lucide="user" strokeWidth="1.5"></i>
<img alt="User avatar" className="hidden absolute inset-0 w-full h-full object-cover" id="miner-avatar-img"/>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-3/4 dirt-pattern">

<div className="absolute top-0 left-1/2 -translate-x-1/2 claw-swing" data-claw="swing">
<div className="rope w-1 h-40 mx-auto" data-rope="true"></div>
<div className="flex gap-0.5 justify-center -mt-1" data-claw-head="true">
<div className="w-1 h-4 bg-neutral-700 rounded-b transform -rotate-12"></div>
<div className="w-1 h-4 bg-neutral-700 rounded-b transform rotate-12"></div>
</div>
</div>

<img alt="Coal" className="item-coal-shape absolute top-[20%] left-[10%] w-12 h-12 rotate-[-8deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<img alt="Coal" className="item-coal-shape absolute top-[35%] left-[42%] w-14 h-14 rotate-[12deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<img alt="Coal" className="item-coal-shape absolute top-[55%] left-[60%] w-12 h-12 rotate-[-15deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<img alt="Coal" className="item-coal-shape absolute top-[75%] left-[20%] w-14 h-14 rotate-[20deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<img alt="Coal" className="item-coal-shape absolute top-[80%] left-[85%] w-12 h-12 rotate-[-5deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<img alt="Coal" className="item-coal-shape absolute top-[25%] left-[72%] w-12 h-12 rotate-[8deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>

<img alt="Gold" className="item-gold-nugget absolute top-[45%] left-[25%] w-14 h-14 rotate-[-10deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5938700d-b088-41bb-8ea4-a6d764675a56_320w.png"/>
<img alt="Gold" className="item-gold-nugget absolute top-[65%] left-[45%] w-14 h-14 rotate-[15deg] object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5938700d-b088-41bb-8ea4-a6d764675a56_320w.png"/>

<img alt="Oil" className="item-oil-shape absolute top-[50%] left-[80%] w-14 h-14 object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7715d6-fc24-4d2e-927e-3367dd3fdbe6_320w.png"/>
<img alt="Oil" className="item-oil-shape absolute top-[72%] left-[8%] w-14 h-14 object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7715d6-fc24-4d2e-927e-3367dd3fdbe6_320w.png"/>

<img alt="Stocks" className="absolute top-[40%] left-[55%] w-12 h-12 object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbe3b1b7-bf8c-461d-b8c8-c9d09d52f2e5_320w.png"/>

<img alt="Diamond" className="absolute top-[60%] left-[90%] w-12 h-12 object-contain drop-shadow-xl hover:scale-110 hover:brightness-110 transition-all duration-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77ece1a4-d34f-4db6-9ad4-8aeef6824138_320w.png"/>
</div>

<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="px-3 py-1.5 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-xs">
                Press
                <kbd className="px-1.5 py-0.5 bg-white/20 rounded mx-1">SPACE</kbd>
                or click ↓ to drop
              </div>
<button className="w-10 h-10 rounded-md bg-green-600 hover:bg-green-500 transition flex items-center justify-center shadow-lg" data-action="drop-claw">
<i className="w-5 h-5 text-white" data-lucide="arrow-down" strokeWidth="2"></i>
</button>
</div>
</div>

<div className="rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 backdrop-blur-md border border-neutral-800 p-3 shadow-lg shadow-black/40 ring-1 ring-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5">
<div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-0.5 sm:min-w-[130px] shrink-0">
<div className="text-xl font-bold text-orange-400 tracking-tight">
                12
                <span className="text-sm text-neutral-500 font-medium ml-1">
                  / 250
                </span>
</div>
<div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                Attempts Remaining
              </div>
</div>
<div className="hidden sm:block w-px h-10 bg-neutral-800"></div>
<div className="block sm:hidden w-full h-px bg-neutral-800/50"></div>
<div className="flex-1 min-w-0 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<div className="text-[11px] font-semibold tracking-wide text-neutral-300 uppercase">
                  This Round
                </div>
<div className="text-[10px] text-neutral-500 bg-neutral-800/60 px-1.5 py-0.5 rounded border border-neutral-700/50" data-stat="items">
                  8 items
                </div>
</div>
<div className="flex items-center gap-1.5 overflow-x-auto flex-nowrap [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-1 sm:pb-0">
<div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-neutral-800/50 border border-neutral-700/50 shrink-0">
<img alt="Gold" className="w-3.5 h-3.5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5938700d-b088-41bb-8ea4-a6d764675a56_320w.png"/>
<span className="text-[11px] font-medium text-neutral-300">
                    Gold
                    <span className="text-neutral-500 mx-0.5">x</span>
<span className="text-amber-400" data-count="gold">3</span>
</span>
</div>
<div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-neutral-800/50 border border-neutral-700/50 shrink-0">
<img alt="Coal" className="w-3.5 h-3.5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
<span className="text-[11px] font-medium text-neutral-300">
                    Coal
                    <span className="text-neutral-500 mx-0.5">x</span>
<span className="text-neutral-300" data-count="coal">2</span>
</span>
</div>
<div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-neutral-800/50 border border-neutral-700/50 shrink-0">
<img alt="Oil" className="w-3.5 h-3.5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7715d6-fc24-4d2e-927e-3367dd3fdbe6_320w.png"/>
<span className="text-[11px] font-medium text-neutral-300">
                    Oil
                    <span className="text-neutral-500 mx-0.5">x</span>
<span className="text-neutral-300" data-count="oil">1</span>
</span>
</div>
<div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-neutral-800/50 border border-neutral-700/50 shrink-0">
<img alt="Stocks" className="w-3.5 h-3.5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbe3b1b7-bf8c-461d-b8c8-c9d09d52f2e5_320w.png"/>
<span className="text-[11px] font-medium text-neutral-300">
                    Stocks
                    <span className="text-neutral-500 mx-0.5">x</span>
<span className="text-emerald-400" data-count="stocks">2</span>
</span>
</div>
<div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-neutral-800/50 border border-neutral-700/50 shrink-0">
<img alt="Diamond" className="w-3.5 h-3.5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77ece1a4-d34f-4db6-9ad4-8aeef6824138_320w.png"/>
<span className="text-[11px] font-medium text-neutral-300">
                    Diamond
                    <span className="text-neutral-500 mx-0.5">x</span>
<span className="text-sky-400" data-count="diamond">0</span>
</span>
</div>
</div>
</div>
</div>
<button className="w-full rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-medium text-base py-3.5 transition shadow-lg shadow-orange-500/30" id="start-mining-button">
            Register &amp; Start Mining
          </button>
</div>

<div className="space-y-4">
<div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-900/70 border border-neutral-800 overflow-hidden shadow-xl shadow-black/40 ring-1 ring-white/5">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight">
                  Reward Schedule
                </h2>
<p className="text-xs text-neutral-400 mt-0.5">
                  Every trade is a chance to mine real rewards
                </p>
</div>
<i className="w-5 h-5 text-amber-400" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-3 p-4">
<div className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-3 hover:bg-neutral-800/80 transition flex items-center gap-3 shadow-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800/80 border border-neutral-700 shadow-inner">
<img alt="Coal" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c48a815a-7744-402e-b5b2-50246ce2aa85_320w.png"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2 mb-0.5">
<h3 className="font-medium text-sm text-neutral-200">Coal</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700 shrink-0">
                      Common
                    </span>
</div>
<div className="text-[11px] text-neutral-400 font-medium leading-tight mb-1">
                    Futures Bonus
                  </div>
<div className="flex flex-wrap gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      1 USDT
                    </span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      3 USDT
                    </span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      5 USDT
                    </span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      10 USDT
                    </span>
</div>
</div>
</div>
<div className="rounded-xl bg-gradient-to-b from-amber-900/10 to-neutral-900/60 border border-amber-900/30 p-3 hover:bg-amber-900/20 transition flex items-center gap-3 shadow-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-900/20 border border-amber-700/30 shadow-inner">
<img alt="Gold" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5938700d-b088-41bb-8ea4-a6d764675a56_320w.png"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2 mb-0.5">
<h3 className="font-medium text-sm text-amber-200">Gold</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                      Rare
                    </span>
</div>
<div className="text-[11px] text-neutral-400 font-medium leading-tight mb-1">
                    GOLD/USDC Positions
                  </div>
<div className="flex flex-wrap gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      20 USDT
                    </span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      50 USDT
                    </span>
</div>
</div>
</div>
<div className="rounded-xl bg-gradient-to-b from-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 p-3 hover:bg-neutral-800/80 transition flex items-center gap-3 shadow-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800 border border-neutral-700 shadow-inner">
<img alt="Oil" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd7715d6-fc24-4d2e-927e-3367dd3fdbe6_320w.png"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2 mb-0.5">
<h3 className="font-medium text-sm text-neutral-200">Oil</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                      Rare
                    </span>
</div>
<div className="text-[11px] text-neutral-400 font-medium leading-tight mb-1">
                    CL/USDC Positions
                  </div>
<div className="flex flex-wrap gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      20 USDT
                    </span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      50 USDT
                    </span>
</div>
</div>
</div>
<div className="rounded-xl bg-gradient-to-b from-emerald-900/10 to-neutral-900/60 border border-emerald-900/30 p-3 hover:bg-emerald-900/20 transition flex items-center gap-3 shadow-md">
<div className="w-10 h-10 rounded-lg flex items-center justify-center">
<img alt="Stocks" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbe3b1b7-bf8c-461d-b8c8-c9d09d52f2e5_320w.png"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2 mb-0.5">
<h3 className="font-medium text-sm text-emerald-200">Stocks</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                      Epic
                    </span>
</div>
<div className="text-[11px] text-neutral-400 font-medium leading-tight mb-1">
                    GOQon · NVDAon · SPYon · TSLAon
                  </div>
<div className="flex flex-wrap gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      30 USDT
                    </span>
</div>
</div>
</div>
<div className="rounded-xl bg-gradient-to-br from-sky-900/40 via-sky-900/10 to-neutral-900 border border-sky-500/30 p-3 hover:from-sky-900/50 transition flex items-center gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(14,165,233,0.1)] ring-1 ring-sky-400/10">
<div className="absolute inset-0 bg-sky-400/5 blur-xl"></div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center relative z-10 flex-shrink-0">
<img alt="Diamond" className="w-9 h-9 object-contain drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77ece1a4-d34f-4db6-9ad4-8aeef6824138_320w.png"/>
</div>
<div className="relative z-10 flex-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-semibold text-base text-sky-200">
                      Diamond
                    </h3>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      Legendary
                    </span>
</div>
<div className="text-[11px] text-amber-400/80 font-medium leading-tight">
                    1000 USDT Bonus
                  </div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>


<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 backdrop-blur-sm px-4" id="prize-modal">
<div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-amber-500/20 shadow-2xl shadow-amber-500/10 overflow-hidden ring-1 ring-white/5">
<div className="p-5 text-center">
<div className="mx-auto mb-3 w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
<i className="w-6 h-6 text-amber-400" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Congratulations!</h3>
<p className="mt-2 text-sm text-neutral-300" id="prize-modal-message">
            You won a prize
          </p>
<button className="mt-5 w-full rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm py-2.5 transition" id="prize-modal-close">
            Got it
          </button>
</div>
</div>
</div>




    </>
  );
}
