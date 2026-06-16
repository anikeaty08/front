import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.parseCurrencyGlobal = (text) => {
const match = text.match(/[£$€]?\s*([\d,]+)(k|m)?/i);
if (!match) return 0;
let val = parseFloat(match[1].replace(/,/g, ''));
if (match[2]) {
if (match[2].toLowerCase() === 'k') val *= 1000;
if (match[2].toLowerCase() === 'm') val *= 1000000;
}
return val;
};
const formatCurrencyGlobal = (num) => {
return '£' + num.toLocaleString('en-GB');
};
window.openWonDrawer = function(card) {
const nameEl = card.querySelector('.company-name') || card.querySelector('h4');
let companyName = nameEl.textContent.trim();
const valText = card.querySelector('.mt-auto > div:first-child').textContent;
const val = parseCurrencyGlobal(valText);
const nameInput = document.getElementById('won-drawer-name');
if(nameInput) nameInput.value = companyName + ' - Project';
const valInput = document.getElementById('won-drawer-val');
if(valInput) valInput.value = val;
const badgeEl = card.querySelector('[data-comm-badge]');
let tier = 'P1', rate = 10;
if (badgeEl) {
const text = badgeEl.textContent;
if (text.includes('P1')) { tier = 'P1'; rate = 10; }
else if (text.includes('P2')) { tier = 'P2'; rate = 5; }
else if (text.includes('P3')) { tier = 'P3'; rate = 5; }
else { tier = 'P4+'; rate = 0; }
}
const elTier = document.getElementById('drawer-comm-tier');
if(elTier) elTier.textContent = tier;
const elRate = document.getElementById('drawer-comm-rate');
if(elRate) elRate.textContent = rate + '%';
const elAmount = document.getElementById('drawer-comm-amount');
if(elAmount) elAmount.textContent = formatCurrencyGlobal(val * (rate/100));
const elGross = document.getElementById('drawer-gross-profit');
if(elGross) elGross.textContent = formatCurrencyGlobal(val - (val * (rate/100)));
document.getElementById('won-drawer-toggle').checked = true;
};
document.addEventListener('DOMContentLoaded', () => {
function calculateSummaries() {
const getColumnTotal = (theme) => {
const col = document.querySelector(`.flex-1[data-theme="${theme}"]`);
if (!col) return 0;
const cards = col.querySelectorAll('.cursor-grab:not(.sortable-ghost)');
let total = 0;
cards.forEach(card => {
const valEl = card.querySelector('.mt-auto > div:first-child');
if (valEl) total += window.parseCurrencyGlobal(valEl.textContent);
});
return total;
};
const active = getColumnTotal('fuchsia') + getColumnTotal('amber') + getColumnTotal('cyan');
const won = getColumnTotal('emerald');
const invoiced = getColumnTotal('blue');
const elActive = document.getElementById('summary-active');
const elWon = document.getElementById('summary-won');
const elInvoiced = document.getElementById('summary-invoiced');
if (elActive) elActive.textContent = formatCurrencyGlobal(active);
if (elWon) elWon.textContent = formatCurrencyGlobal(won);
if (elInvoiced) elInvoiced.textContent = formatCurrencyGlobal(invoiced);
const clientCounts = {};
let totalEarned = 0;
const allCards = document.querySelectorAll('.cursor-grab:not(.sortable-ghost)');
allCards.forEach(card => {
if (!card.hasAttribute('onclick')) {
card.setAttribute('onclick', 'openWonDrawer(this)');
const h4 = card.querySelector('h4');
if (h4 && !h4.querySelector('.company-name')) {
const text = h4.textContent.trim();
h4.innerHTML = '';
h4.classList.add('flex', 'items-center', 'justify-between', 'gap-2');
const span = document.createElement('span');
span.className = 'company-name truncate';
span.textContent = text;
h4.appendChild(span);
}
}
const nameEl = card.querySelector('.company-name');
if (!nameEl) return;
const companyName = nameEl.textContent.trim();
clientCounts[companyName] = (clientCounts[companyName] || 0) + 1;
const projNum = clientCounts[companyName];
let rate = 0;
let badgeText = '';
if (projNum === 1) { rate = 0.10; badgeText = 'P1 — 10%'; }
else if (projNum === 2) { rate = 0.05; badgeText = 'P2 — 5%'; }
else if (projNum === 3) { rate = 0.05; badgeText = 'P3 — 5%'; }
else { rate = 0; badgeText = 'P4+ — 0%'; }
const h4 = card.querySelector('h4');
let badgeEl = card.querySelector('[data-comm-badge]');
if (!badgeEl) {
badgeEl = document.createElement('span');
badgeEl.setAttribute('data-comm-badge', '');
h4.appendChild(badgeEl);
}
badgeEl.className = 'hidden';
badgeEl.textContent = badgeText;
const theme = card.closest('[data-theme]')?.getAttribute('data-theme');
if (theme === 'emerald' || theme === 'blue') {
const valEl = card.querySelector('.mt-auto > div:first-child');
if (valEl) {
totalEarned += window.parseCurrencyGlobal(valEl.textContent) * rate;
}
}
});
}
calculateSummaries();
let timeout;
const observer = new MutationObserver(() => {
clearTimeout(timeout);
timeout = setTimeout(calculateSummaries, 50);
});
const pipelineView = document.getElementById('pipeline-view');
if (pipelineView) {
observer.observe(pipelineView, {
childList: true,
subtree: true,
characterData: true
});
}
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', function () {
        if (typeof Sortable === 'undefined') return;
        const columns = document.querySelectorAll('#pipeline-view .overflow-y-auto.flex-1');
        const themes = ['fuchsia', 'amber', 'cyan', 'emerald', 'blue', 'red'];

        function updateCardTheme(card, newTheme) {
          if (!newTheme) return;
          const elements = [card, ...card.querySelectorAll('*')];
          elements.forEach(el => {
            themes.forEach(theme => {
              if (theme === newTheme) return;
              const themeSearch = `-${theme}-`;
              const themeReplace = `-${newTheme}-`;
              Array.from(el.classList).forEach(cls => {
                if (cls.includes(themeSearch)) {
                  const newCls = cls.replace(themeSearch, themeReplace);
                  el.classList.remove(cls);
                  el.classList.add(newCls);
                }
              });
            });
          });
        }

        function updateState(evt) {
          columns.forEach(col => {
            const placeholder = col.querySelector('.border-dashed');
            if (placeholder) {
              const hasItems = Array.from(col.children).some(c => c !== placeholder && !c.classList.contains('sortable-ghost') && !c.classList.contains('sortable-drag'));
              placeholder.style.display = hasItems ? 'none' : 'flex';
            }
            const header = col.previousElementSibling;
            if (header) {
              const countSpan = header.querySelector('span.rounded-full');
              if (countSpan) {
                const itemCount = Array.from(col.children).filter(c => c.classList.contains('cursor-grab') && !c.classList.contains('sortable-ghost')).length;
                countSpan.textContent = itemCount;
              }
            }
          });

          if (evt && evt.item && evt.to) {
            const newTheme = evt.to.getAttribute('data-theme');
            if (newTheme) {
              updateCardTheme(evt.item, newTheme);
              if (newTheme === 'red') {
                evt.item.classList.add('opacity-80', 'hover:opacity-100');
              } else {
                evt.item.classList.remove('opacity-80', 'hover:opacity-100');
              }
              if (newTheme === 'emerald' && evt.from !== evt.to) {
                if (typeof window.openWonDrawer === 'function') {
                  window.openWonDrawer(evt.item);
                } else {
                  const wonToggle = document.getElementById('won-drawer-toggle');
                  if (wonToggle) wonToggle.checked = true;
                }
              }
            }
          }
        }

        columns.forEach(col => {
          new Sortable(col, {
            group: 'kanban',
            animation: 150,
            ghostClass: 'opacity-50',
            filter: '.border-dashed',
            onEnd: updateState,
            onAdd: updateState,
            onRemove: updateState
          });
        });
      });
    


      (function() {
        function initAiFlow() {
          const acceptBtn = document.getElementById('btn-accept-lead');
          const overlay = document.getElementById('ai-modal-overlay');
          const promptModal = document.getElementById('ai-prompt-modal');
          const resultModal = document.getElementById('ai-result-modal');
          const btnNoAi = document.getElementById('btn-no-ai');
          const btnYesAi = document.getElementById('btn-yes-ai');
          const btnCloseResult = document.getElementById('btn-close-result');
          const btnSendPlatform = document.getElementById('btn-send-platform');
          const btnCopyMessage = document.getElementById('btn-copy-message');
          const toast = document.getElementById('accept-toast');
          const generatedMessage = document.getElementById('generated-message');
          if(!acceptBtn) return;
          function showOverlay() {
            overlay.classList.remove('pointer-events-none', 'opacity-0');
            overlay.classList.add('opacity-100', 'pointer-events-auto');
          }
          function hideOverlay() {
            overlay.classList.add('pointer-events-none', 'opacity-0');
            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            const leadToggle = document.getElementById('lead-panel-toggle');
            if (leadToggle) leadToggle.checked = false;
          }
          function showToast() {
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
              toast.classList.add('translate-y-20', 'opacity-0');
            }, 4000);
          }
          acceptBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showOverlay();
            promptModal.classList.remove('hidden');
            setTimeout(() => {
              promptModal.classList.remove('scale-95', 'opacity-0');
              promptModal.classList.add('scale-100', 'opacity-100');
            }, 10);
          });
          btnNoAi.addEventListener('click', () => {
            promptModal.classList.remove('scale-100', 'opacity-100');
            promptModal.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
              promptModal.classList.add('hidden');
              hideOverlay();
              showToast();
            }, 300);
          });
          btnYesAi.addEventListener('click', () => {
            const originalText = btnYesAi.innerHTML;
            btnYesAi.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="16"></iconify-icon> Generating...';
            setTimeout(() => {
              btnYesAi.innerHTML = originalText;
              promptModal.classList.remove('scale-100', 'opacity-100');
              promptModal.classList.add('scale-95', 'opacity-0');
              setTimeout(() => {
                promptModal.classList.add('hidden');
                resultModal.classList.remove('hidden');
                setTimeout(() => {
                  resultModal.classList.remove('scale-95', 'opacity-0');
                  resultModal.classList.add('scale-100', 'opacity-100');
                }, 10);
              }, 300);
            }, 1200);
          });
          const finishFlow = () => {
            resultModal.classList.remove('scale-100', 'opacity-100');
            resultModal.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
              resultModal.classList.add('hidden');
              hideOverlay();
              showToast();
            }, 300);
          };
          btnCloseResult.addEventListener('click', finishFlow);
          btnSendPlatform.addEventListener('click', () => {
            const originalText = btnSendPlatform.innerHTML;
            btnSendPlatform.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-white" width="18"></iconify-icon> Sent!';
            setTimeout(() => {
              btnSendPlatform.innerHTML = originalText;
              finishFlow();
            }, 1500);
          });
          btnCopyMessage.addEventListener('click', () => {
            navigator.clipboard.writeText(generatedMessage.innerText);
            const originalText = btnCopyMessage.innerHTML;
            btnCopyMessage.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-zinc-900" width="18"></iconify-icon> Copied!';
            setTimeout(() => {
              btnCopyMessage.innerHTML = originalText;
            }, 2000);
          });
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initAiFlow);
        } else {
          initAiFlow();
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<input checked="" className="hidden" id="view-all-leads" name="main-view" type="radio"/>
<input className="hidden" id="view-pipeline" name="main-view" type="radio"/>

<input className="hidden peer/sidebar" id="sidebar-toggle" type="checkbox"/>

<input className="hidden peer/lead" id="lead-panel-toggle" type="checkbox"/>

<label className="fixed inset-0 bg-zinc-900/10 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked/lead:opacity-100 peer-checked/lead:pointer-events-auto cursor-default" htmlFor="lead-panel-toggle"></label>

<aside className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white shadow-2xl border-l border-zinc-200 transform translate-x-full transition-transform duration-300 peer-checked/lead:translate-x-0 flex flex-col pointer-events-none peer-checked/lead:pointer-events-auto">

<header className="flex items-center justify-between px-6 py-5 border-b border-zinc-200 bg-white z-10 flex-shrink-0">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lg font-medium text-zinc-700 font-geist">
            AF
          </div>
<div>
<h2 className="text-xl tracking-tight text-zinc-900 font-semibold font-geist">
              Aether Films
            </h2>
<p className="text-xs text-zinc-500 mt-0.5 font-geist">
              Commercial Production • Los Angeles, CA
            </p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            Score: 94
          </span>
<label className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer" htmlFor="lead-panel-toggle">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</label>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-10">

<section>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight font-geist">
              At a glance
            </h3>
<div className="flex gap-2">
<span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-sm font-geist">
                #UnrealEngine
              </span>
<span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-sm font-geist">
                #Automotive
              </span>
</div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-4 font-geist">
            Award-winning commercial production company specializing in high-end
            product visuals and automotive spots. They are rapidly scaling their
            virtual production pipeline and frequently integrate real-time
            rendering into traditional workflows.
          </p>
<div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 flex justify-between items-center mb-4">
<div>
<p className="text-xs text-zinc-500 mb-0.5 font-geist">
                Direct Contact
              </p>
<p className="text-sm font-medium text-zinc-900 font-geist">
                hello@aetherfilms.com
              </p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 mb-0.5 font-geist">Phone</p>
<p className="text-sm font-medium text-zinc-900 font-geist">
                +1 (310) 555-0192
              </p>
</div>
</div>
<div className="space-y-3">
<div className="p-3.5 rounded-lg border border-indigo-100 bg-indigo-50/40 relative overflow-hidden">
<div className="flex items-center gap-1.5 mb-1.5 text-indigo-700">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-xs font-semibold font-geist tracking-tight">
                  Unique Context
                </p>
</div>
<p className="text-sm text-indigo-950 font-geist leading-relaxed">
                Scaling up post-production for new Apple campaign. They recently
                hired 3 new Unreal Engine artists to support the expanded
                pipeline.
              </p>
</div>
<div className="p-3.5 rounded-lg border border-emerald-100 bg-emerald-50/40 relative overflow-hidden">
<div className="flex items-center gap-1.5 mb-1.5 text-emerald-700">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-xs font-semibold font-geist tracking-tight">
                  Suggested Angle
                </p>
</div>
<p className="text-sm text-emerald-950 font-geist leading-relaxed">
                Pitch seamless UE5 integration for their upcoming Q3 product
                shots.
              </p>
</div>
</div>
</section>

<div className="grid grid-cols-2 gap-8">

<section>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4 font-geist">
              Key Network
            </h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs text-zinc-600 font-medium font-geist">
                  DC
                </div>
<div>
<div className="text-sm text-zinc-900 font-medium font-geist">
                    David Chen
                  </div>
<div className="text-xs text-zinc-500 font-geist">
                    Executive Producer
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs text-zinc-600 font-medium font-geist">
                  SJ
                </div>
<div>
<div className="text-sm text-zinc-900 font-medium font-geist">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-zinc-500 font-geist">Head of 3D</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4 font-geist">
              Recent Customers
            </h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:apple-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-900 font-medium font-geist">
                    Apple
                  </div>
<div className="text-xs text-zinc-500 font-geist">
                    iPhone 15 Pro Macro
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:steering-wheel-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-900 font-medium font-geist">
                    Porsche
                  </div>
<div className="text-xs text-zinc-500 font-geist">
                    Taycan Electric Spot
                  </div>
</div>
</div>
</div>
</section>
</div>

<section>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-5 font-geist">
            Combined Activity Timeline
          </h3>
<div className="relative pl-4 border-l border-zinc-200 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-zinc-300"></div>
<p className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5 font-geist">
<iconify-icon icon="solar:gallery-linear" width="14"></iconify-icon>
                Oct 12 • Instagram
              </p>
<p className="text-sm text-zinc-800 bg-zinc-50 border border-zinc-100 p-3 rounded-md font-geist">
                "Behind the scenes on our latest virtual production shoot.
                Incredible what UE5 can do in real-time. 🎬✨"
              </p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-zinc-300"></div>
<p className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5 font-geist">
<iconify-icon icon="solar:briefcase-linear" width="14"></iconify-icon>
                Oct 08 • LinkedIn
              </p>
<p className="text-sm text-zinc-800 bg-zinc-50 border border-zinc-100 p-3 rounded-md font-geist">
                "We're growing! Aether Films is looking for senior Nuke
                compositors for an upcoming automotive campaign. Link in
                comments."
              </p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-zinc-300"></div>
<p className="text-xs text-zinc-500 mb-1 flex items-center gap-1.5 font-geist">
<iconify-icon icon="solar:play-circle-linear" width="14"></iconify-icon>
                Sep 28 • YouTube
              </p>
<div className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 p-2 rounded-md">
<div className="w-16 h-10 bg-zinc-200 rounded flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-800 font-medium font-geist">
                  Aether Showreel 2024
                </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 text-white rounded-xl p-6 relative overflow-hidden shadow-sm mt-4">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:radar-linear"></iconify-icon>
<h3 className="text-sm font-medium tracking-tight text-zinc-100 font-geist">
                Six Degrees of Separation
              </h3>
</div>
<p className="text-xs text-zinc-400 mb-6 max-w-sm font-geist">
              You have an outlier connection advantage. You are only 2
              connections away from a warm introduction to Aether Films' core
              team.
            </p>
<div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide w-full">
<div className="flex flex-col items-center gap-1.5 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white text-xs font-medium font-geist">
                  You
                </div>
</div>
<div className="flex-shrink-0 text-zinc-600 flex flex-col items-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1.5 flex-shrink-0 group relative">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 text-xs font-medium hover:border-zinc-500 transition-colors cursor-pointer font-geist">
                  MS
                </div>
<span className="text-[10px] text-zinc-400 uppercase tracking-wider font-geist">
                  Marcus S.
                </span>
</div>
<div className="flex-shrink-0 text-zinc-600 flex flex-col items-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
<span className="text-[9px] text-zinc-500 mt-1 whitespace-nowrap font-geist">
                  Worked with
                </span>
</div>
<div className="flex flex-col items-center gap-1.5 flex-shrink-0 group relative">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 text-xs font-medium hover:border-zinc-500 transition-colors cursor-pointer font-geist">
                  ER
                </div>
<span className="text-[10px] text-zinc-400 uppercase tracking-wider font-geist">
                  Elena R.
                </span>
</div>
<div className="flex-shrink-0 text-zinc-600 flex flex-col items-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
<span className="text-[9px] text-emerald-500/80 mt-1 whitespace-nowrap font-geist">
                  Introduced by
                </span>
</div>
<div className="flex flex-col items-center gap-1.5 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-emerald-500 border border-emerald-400 flex items-center justify-center text-white text-xs font-medium shadow-[0_0_15px_rgba(16,185,129,0.3)] font-geist">
                  DC
                </div>
<span className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium font-geist">
                  David C.
                </span>
</div>
</div>
</div>
</section>
</div>

<div className="border-t border-zinc-200 bg-white z-20 flex-shrink-0 w-full relative">
<input className="hidden" id="reject-toggle" type="checkbox"/>

<div className="p-5 flex gap-3 default-actions">
<label className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors cursor-pointer font-geist" htmlFor="reject-toggle">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="18"></iconify-icon>
            Reject Lead
          </label>
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 border border-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm font-geist" id="btn-accept-lead">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
            Accept Lead
          </button>
</div>

<div className="grid reject-panel bg-zinc-50/50">
<div className="overflow-hidden">
<div className="p-5">
<label className="block text-sm font-medium text-zinc-900 mb-1 tracking-tight font-geist">
                Reason for rejection
              </label>
<p className="text-xs text-zinc-500 mb-3 font-geist">
                Leave a brief note to help us tune your future recommendations.
              </p>
<textarea className="w-full resize-none p-3 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-400 mb-4" placeholder="e.g., Budget too low, irrelevant industry..." rows="3"></textarea>
<div className="flex items-center justify-end gap-2">
<label className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-lg transition-colors cursor-pointer font-geist" htmlFor="reject-toggle">
                  Cancel
                </label>
<button className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 font-geist">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                  Confirm Rejection
                </button>
</div>
</div>
</div>
</div>
</div>
</aside>


<input className="hidden peer/won" id="won-drawer-toggle" type="checkbox"/>

<label className="fixed inset-0 bg-zinc-900/10 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked/won:opacity-100 peer-checked/won:pointer-events-auto cursor-default" htmlFor="won-drawer-toggle"></label>

<aside className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-zinc-200 transform translate-x-full transition-transform duration-300 peer-checked/won:translate-x-0 flex flex-col pointer-events-none peer-checked/won:pointer-events-auto">
<header className="flex items-center justify-between px-6 py-5 border-b border-zinc-200 bg-white z-10 flex-shrink-0">
<div>
<h2 className="text-xl tracking-tight text-zinc-900 font-semibold font-geist">
            Project Won! 🎉
          </h2>
<p className="text-sm text-zinc-500 mt-0.5 font-geist">
            Enter final details to lock in the project.
          </p>
</div>
<label className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer" htmlFor="won-drawer-toggle">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</label>
</header>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
            Project name
          </label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 placeholder:text-zinc-400 font-geist" id="won-drawer-name" placeholder="e.g. Apple Fall Campaign" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
            Project value / budget
          </label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-geist text-sm">
              £
            </span>
<input className="w-full pl-7 pr-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 placeholder:text-zinc-400 font-geist" id="won-drawer-val" placeholder="Final invoice amount" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
            Project owner
          </label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 placeholder:text-zinc-400 font-geist" placeholder="e.g. David Chen (EP)" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
              Start date
            </label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 font-geist text-zinc-500" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
              End date
            </label>
<input className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 font-geist text-zinc-500" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
            Project type
          </label>
<select className="w-full px-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 font-geist">
<option disabled="" selected="" value="">Select a type...</option>
<option>Full Spot</option>
<option>CG Job</option>
<option>Comp Job</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5 font-geist">
            Notes
          </label>
<textarea className="w-full resize-none p-3 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-zinc-900 placeholder:text-zinc-400 font-geist" placeholder="Any context about the deal..." rows="4"></textarea>
</div>
<div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-3 mt-6 shadow-sm">
<h3 className="text-sm font-semibold text-emerald-900 font-geist flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:wad-of-money-bold"></iconify-icon>
            Lead cost summary
          </h3>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Tier</span>
<span className="font-medium text-zinc-900 font-geist" id="drawer-comm-tier">
              P1
            </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Rate</span>
<span className="font-medium text-zinc-900 font-geist" id="drawer-comm-rate">
              10%
            </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Amount</span>
<span className="font-semibold text-emerald-600 font-geist" id="drawer-comm-amount">
              £0
            </span>
</div>
<div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between text-sm">
<span className="text-zinc-700 font-medium font-geist flex items-center gap-1.5 group/tooltip relative cursor-help">
              Gross Profit
              <iconify-icon className="text-zinc-400" icon="solar:info-circle-linear" width="15"></iconify-icon>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[240px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none font-normal leading-relaxed text-left tracking-normal">
                This figure is the project budget minus the commission amount.
              </div>
</span>
<span className="font-bold text-emerald-700 font-geist tracking-tight" id="drawer-gross-profit">
              £0
            </span>
</div>
</div>
</div>
<div className="border-t border-zinc-200 bg-zinc-50/50 p-5 flex justify-end gap-3 flex-shrink-0 z-20">
<label className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-lg transition-colors cursor-pointer font-geist" htmlFor="won-drawer-toggle">
          Cancel
        </label>
<label className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-sm cursor-pointer font-geist" htmlFor="won-drawer-toggle">
          Save Project
        </label>
</div>
</aside>
<input className="hidden peer/wondetail" id="won-detail-toggle" type="checkbox"/>
<label className="fixed inset-0 bg-zinc-900/10 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked/wondetail:opacity-100 peer-checked/wondetail:pointer-events-auto cursor-default" htmlFor="won-detail-toggle"></label>
<aside className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white shadow-2xl border-l border-zinc-200 transform translate-x-full transition-transform duration-300 peer-checked/wondetail:translate-x-0 flex flex-col pointer-events-none peer-checked/wondetail:pointer-events-auto">
<header className="flex items-center justify-between px-6 py-5 border-b border-zinc-200 bg-white z-10 flex-shrink-0">
<div>
<h2 className="text-xl tracking-tight text-zinc-900 font-semibold font-geist">
            Kinetics
          </h2>
<p className="text-sm text-zinc-500 mt-0.5 font-geist">
            Nuke Compositing Project
          </p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-geist">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
            Won
          </span>
<label className="p-1.5 rounded-md hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer" htmlFor="won-detail-toggle">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</label>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<section>
<h3 className="text-sm font-semibold text-zinc-900 mb-5 tracking-tight font-geist">
            Journey to Won
          </h3>
<div className="relative flex items-start justify-between w-full before:absolute before:top-4 before:-translate-y-1/2 before:left-8 before:right-8 before:h-px before:bg-zinc-200 z-0">
<div className="flex flex-col items-center gap-2 bg-white px-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="text-center">
<p className="text-[10px] font-semibold text-zinc-700 uppercase tracking-widest font-geist mb-0.5">
                  Lead
                </p>
<p className="text-[10px] text-zinc-400 font-geist">2 days</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-fuchsia-100 border border-fuchsia-200 flex items-center justify-center text-fuchsia-600 shadow-sm">
<iconify-icon icon="solar:inbox-in-linear" width="16"></iconify-icon>
</div>
<div className="text-center">
<p className="text-[10px] font-semibold text-zinc-700 uppercase tracking-widest font-geist mb-0.5">
                  Accepted
                </p>
<p className="text-[10px] text-zinc-400 font-geist">4 days</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div className="text-center">
<p className="text-[10px] font-semibold text-zinc-700 uppercase tracking-widest font-geist mb-0.5">
                  Meeting
                </p>
<p className="text-[10px] text-zinc-400 font-geist">1 day</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600 shadow-sm">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div className="text-center">
<p className="text-[10px] font-semibold text-zinc-700 uppercase tracking-widest font-geist mb-0.5">
                  Quoted
                </p>
<p className="text-[10px] text-zinc-400 font-geist">5 days</p>
</div>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm shadow-emerald-500/20">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="text-center">
<p className="text-[10px] font-semibold text-emerald-700 uppercase tracking-widest font-geist mb-0.5">
                  Won
                </p>
<p className="text-[10px] text-zinc-500 font-geist">12 days</p>
</div>
</div>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-900 tracking-tight font-geist">
              Scope &amp; Budget
            </h3>
<div className="flex gap-2">
<button className="px-2.5 py-1.5 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 flex items-center gap-1.5 transition-colors shadow-sm font-geist">
<iconify-icon className="text-zinc-400" icon="solar:minus-circle-linear" width="14"></iconify-icon>
                Reduce Scope
              </button>
<button className="px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-900 rounded-md text-xs font-medium text-white flex items-center gap-1.5 transition-colors shadow-sm font-geist">
<iconify-icon className="text-zinc-400" icon="solar:add-circle-linear" width="14"></iconify-icon>
                Add Scope
              </button>
</div>
</div>
<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-5 mb-6 shadow-sm flex items-center justify-between">
<div>
<p className="text-[11px] text-zinc-500 font-geist mb-1 uppercase tracking-wider font-semibold">
                Current Value
              </p>
<div className="flex items-center gap-3">
<p className="text-3xl font-semibold text-zinc-900 tracking-tight font-geist">
                  £50,000
                </p>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-geist shadow-sm">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
                  £2,000
                </span>
</div>
</div>
<div className="text-right">
<p className="text-[11px] text-zinc-500 font-geist mb-1 uppercase tracking-wider font-semibold">
                Gross Profit
              </p>
<p className="text-xl font-semibold text-emerald-700 tracking-tight font-geist">
                £45,000
              </p>
</div>
</div>
<div className="space-y-5 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-zinc-200 pl-2">
<div className="relative flex gap-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-white mt-1.5 relative z-10 shrink-0 shadow-sm"></div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-sm font-medium text-zinc-900 font-geist">
                    + £4,000
                  </span>
<span className="text-xs text-zinc-400 font-geist">Nov 12</span>
</div>
<p className="text-xs text-zinc-600 font-geist">
                  Added 2 extra compositors for the weekend rush. Client
                  requested expedited delivery.
                </p>
</div>
</div>
<div className="relative flex gap-4">
<div className="w-2 h-2 rounded-full bg-red-500 ring-4 ring-white mt-1.5 relative z-10 shrink-0 shadow-sm"></div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-sm font-medium text-zinc-900 font-geist">
                    - £2,000
                  </span>
<span className="text-xs text-zinc-400 font-geist">Nov 05</span>
</div>
<p className="text-xs text-zinc-600 font-geist">
                  Removed 3D tracking from scope as client provided assets
                  internally.
                </p>
</div>
</div>
<div className="relative flex gap-4">
<div className="w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-white mt-1.5 relative z-10 shrink-0 shadow-sm"></div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-sm font-medium text-zinc-900 font-geist">
                    £48,000
                  </span>
<span className="text-xs text-zinc-400 font-geist">Oct 28</span>
</div>
<p className="text-xs text-zinc-600 font-geist">
                  Initial project lock and signed SOW.
                </p>
</div>
</div>
</div>
</section>
<section>
<h3 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight font-geist">
            Project Details
          </h3>
<div className="grid grid-cols-2 gap-y-5 gap-x-6 bg-white border border-zinc-200 p-5 rounded-xl shadow-sm">
<div>
<p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1 font-geist">
                Project Owner
              </p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[10px] text-zinc-700 font-medium font-geist">
                  SJ
                </div>
<p className="text-sm font-medium text-zinc-900 font-geist">
                  Sarah Jenkins
                </p>
</div>
</div>
<div>
<p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1 font-geist">
                Project Type
              </p>
<p className="text-sm font-medium text-zinc-900 font-geist">
                Fixed Project
              </p>
</div>
<div>
<p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1 font-geist">
                Start Date
              </p>
<p className="text-sm font-medium text-zinc-900 font-geist">
                Oct 30, 2024
              </p>
</div>
<div>
<p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1 font-geist">
                End Date
              </p>
<p className="text-sm font-medium text-zinc-900 font-geist">
                Dec 15, 2024
              </p>
</div>
</div>
</section>
<section>
<h3 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight font-geist">
            Lead cost summary
          </h3>
<div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-3 shadow-sm">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Tier</span>
<span className="font-medium text-zinc-900 font-geist">P1</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Rate</span>
<span className="font-medium text-zinc-900 font-geist">10%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-500 font-geist">Commission Amount</span>
<span className="font-semibold text-emerald-600 font-geist">
                £5,000
              </span>
</div>
<div className="pt-3 border-t border-emerald-200/60 flex items-center justify-between text-sm">
<span className="text-zinc-700 font-medium font-geist flex items-center gap-1.5 group/tooltip relative cursor-help">
                Gross Profit
                <iconify-icon className="text-zinc-400" icon="solar:info-circle-linear" width="15"></iconify-icon>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[240px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none font-normal leading-relaxed text-left tracking-normal">
                  This figure is the project budget minus the commission amount.
                </div>
</span>
<span className="font-bold text-emerald-700 font-geist tracking-tight">
                £45,000
              </span>
</div>
</div>
</section>
</div>
</aside>
<aside className="w-64 max-w-[16rem] h-full border-r border-zinc-200 bg-zinc-50/50 flex flex-col transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap opacity-100 flex-shrink-0">

<div className="h-14 flex items-center px-5 border-b border-transparent">
<span className="tracking-tighter font-medium text-base text-zinc-900 font-geist">
          PIPELINE
        </span>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<div className="">
<p className="px-2 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-widest font-geist">
            Discovery
          </p>
<nav className="space-y-0.5">
<label className="nav-all-leads flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 font-medium text-sm transition-colors font-geist cursor-pointer hover:bg-zinc-100" htmlFor="view-all-leads">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
              All Leads
              <span className="ml-auto bg-white border border-zinc-200/60 shadow-sm text-zinc-800 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                84
              </span>
</label>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:user-plus-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Fresh Leads
              <div className="ml-auto flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="bg-zinc-200/70 text-zinc-700 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                  8
                </span>
</div>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="18"></iconify-icon>
              High Intent
              <span className="ml-auto bg-zinc-200/70 text-zinc-700 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                12
              </span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Directors
              <span className="ml-auto bg-zinc-200/70 text-zinc-700 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                24
              </span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="18"></iconify-icon>
              EPs &amp; Producers
              <span className="ml-auto bg-zinc-200/70 text-zinc-700 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                31
              </span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
              AI-Friendly
              <span className="ml-auto bg-zinc-200/70 text-zinc-700 text-xs px-1.5 py-0.5 rounded-sm font-geist">
                19
              </span>
</a>
</nav>
</div>

<div className="">
<p className="px-2 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-widest font-geist">
            Pipeline
          </p>
<nav className="space-y-0.5">
<label className="nav-pipeline flex items-center gap-3 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-pointer text-sm font-medium text-zinc-600 font-geist rounded-md pt-1.5 pr-2 pb-1.5 pl-2" htmlFor="view-pipeline">
              Afterworld Pipeline
              <iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="18"></iconify-icon>
</label>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Financials
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
              Analytics
            </a>
</nav>
</div>
</div>

<div className="p-3 mt-auto border-t border-zinc-200/60">
<a className="flex items-center gap-3 px-2 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors font-geist" href="#">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-700 font-geist">
            V
          </div>
          VFX Studio Pro
          <iconify-icon className="ml-auto opacity-50" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white h-full relative z-0">

<header className="h-14 border-b border-zinc-200 flex items-center justify-between px-4 lg:px-8 bg-white/80 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-4">

<label className="cursor-pointer text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center p-1 -ml-1 rounded-md hover:bg-zinc-100" htmlFor="sidebar-toggle">
<iconify-icon className="" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</label>
<div className="flex items-center gap-3">
<h1 className="title-all-leads text-xl tracking-tight text-zinc-900 font-semibold font-geist">
              All Leads
            </h1>
<span className="title-all-leads bg-zinc-100 text-zinc-600 text-xs px-2 py-0.5 rounded-full border border-zinc-200 font-medium font-geist">
              84 Ranked
            </span>
<h1 className="title-pipeline hidden text-xl tracking-tight text-zinc-900 font-semibold font-geist">
              Afterworld Pipeline
            </h1>
<span className="title-pipeline hidden bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full border border-indigo-200 font-medium font-geist">
              6 Active Opportunities
            </span>
</div>
</div>

<div className="flex items-center gap-3">

<div className="relative hidden sm:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-sm bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all w-64 text-zinc-700 placeholder:text-zinc-400" placeholder="Search leads..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="hidden sm:inline font-geist">Export</span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto" id="all-leads-view">
<div className="min-w-max inline-block w-full align-middle">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-50/50 sticky top-0 z-20 border-b border-zinc-200 shadow-sm">
<tr className="">
<th className="py-3 px-4 lg:px-8 text-xs font-medium text-zinc-500 whitespace-nowrap w-10">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 cursor-pointer accent-zinc-900" type="checkbox"/>
</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 whitespace-nowrap font-geist">
                  Lead Name
                </th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 whitespace-nowrap font-geist">
                  Score
                </th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 whitespace-nowrap font-geist">
                  Contact Info
                </th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 whitespace-nowrap font-geist">
                  Social Presence
                </th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 whitespace-nowrap w-64 font-geist">
                  Unique Context
                </th>
<th className="py-3 px-4 lg:px-8 text-xs font-medium text-zinc-500 whitespace-nowrap w-64 font-geist">
                  Suggested Angle
                </th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 relative">

<tr className="hover:bg-zinc-50/80 transition-colors group relative cursor-pointer">
<td className="py-3 px-4 lg:px-8 border-b border-transparent relative z-10">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 cursor-pointer accent-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<label className="cursor-pointer z-0 absolute top-0 right-0 bottom-0 left-0" htmlFor="lead-panel-toggle"></label>
<div className="font-medium text-sm text-zinc-900 flex items-center gap-2 font-geist">
                    Aether Films
                    <iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<div className="text-xs text-zinc-500 mt-0.5 relative z-10 font-geist">
                    Commercial Production
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    94
                  </span>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="text-sm text-zinc-700 font-geist">
                    hello@aetherfilms.com
                  </div>
<div className="text-xs text-zinc-400 mt-0.5 font-geist">
                    +1 (310) 555-0192
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="flex items-center gap-2.5 text-zinc-400">
<a className="group/social relative hover:text-zinc-900 transition-colors z-20" href="https://instagram.com" target="_blank">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/social:opacity-100 transition-opacity bg-zinc-800 text-zinc-50 text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none shadow-sm font-geist">
                        Insta: 10k
                      </span>
</a>
<a className="group/social relative hover:text-zinc-900 transition-colors z-20" href="https://youtube.com" target="_blank">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/social:opacity-100 transition-opacity bg-zinc-800 text-zinc-50 text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none shadow-sm font-geist">
                        YouTube: 8k
                      </span>
</a>
<a className="group/social relative hover:text-zinc-900 transition-colors z-20" href="https://linkedin.com" target="_blank">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/social:opacity-100 transition-opacity bg-zinc-800 text-zinc-50 text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none shadow-sm font-geist">
                        LinkedIn: 6k
                      </span>
</a>
<span className="text-xs ml-0.5 font-medium text-zinc-500 font-geist">
                      24k
                    </span>
</div>
</td>
<td className="py-3 px-4 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-600 truncate font-geist pointer-events-auto cursor-help w-full">
                      Scaling up post-production for new Apple campaign.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Scaling up post-production for new Apple campaign.
                    </div>
</div>
</td>
<td className="py-3 px-4 lg:px-8 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-800 truncate font-geist pointer-events-auto cursor-help w-full">
                      Pitch seamless Unreal Engine integration for their
                      upcoming product shots.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Pitch seamless Unreal Engine integration for their
                      upcoming product shots.
                    </div>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/80 transition-colors group relative cursor-pointer">
<td className="py-3 px-4 lg:px-8 border-b border-transparent relative z-10">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 cursor-pointer accent-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="font-medium text-sm text-zinc-900 font-geist relative z-10">
                    Neon Horizon
                  </div>
<div className="text-xs text-zinc-500 mt-0.5 font-geist relative z-10">
                    Music Videos
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    88
                  </span>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="text-sm text-zinc-700 font-geist">
                    marc@neonhorizon.tv
                  </div>
<div className="text-xs text-zinc-400 mt-0.5 font-geist">
                    +44 20 7123 4567
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="flex items-center gap-2.5 text-zinc-400">
<a className="group/social relative hover:text-zinc-900 transition-colors" href="https://instagram.com" target="_blank">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="group/social relative hover:text-zinc-900 transition-colors" href="https://youtube.com" target="_blank">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<span className="text-xs ml-0.5 font-medium text-zinc-500 font-geist">
                      112k
                    </span>
</div>
</td>
<td className="py-3 px-4 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-600 truncate font-geist pointer-events-auto cursor-help w-full">
                      Director tweeted about needing faster render times for 3D
                      assets.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Director tweeted about needing faster render times for 3D
                      assets.
                    </div>
</div>
</td>
<td className="py-3 px-4 lg:px-8 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-800 truncate font-geist pointer-events-auto cursor-help w-full">
                      Highlight our distributed cloud rendering pipeline
                      capabilities.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Highlight our distributed cloud rendering pipeline
                      capabilities.
                    </div>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/80 transition-colors group relative cursor-pointer">
<td className="py-3 px-4 lg:px-8 border-b border-transparent relative z-10">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 cursor-pointer accent-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="font-medium text-sm text-zinc-900 font-geist relative z-10">
                    Void Creative
                  </div>
<div className="text-xs text-zinc-500 mt-0.5 font-geist relative z-10">
                    Indie Games &amp; Trailers
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    91
                  </span>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="text-sm text-zinc-700 font-geist">
                    contact@void.net
                  </div>
<div className="text-xs text-zinc-400 mt-0.5 font-geist">
                    via LinkedIn InMail
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="flex items-center gap-2.5 text-zinc-400">
<a className="group/social relative hover:text-zinc-900 transition-colors" href="https://linkedin.com" target="_blank">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<span className="text-xs ml-0.5 font-medium text-zinc-500 font-geist">
                      4k
                    </span>
</div>
</td>
<td className="py-3 px-4 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-600 truncate font-geist pointer-events-auto cursor-help w-full">
                      Recently secured Series A funding; expanding their VFX
                      team.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Recently secured Series A funding; expanding their VFX
                      team.
                    </div>
</div>
</td>
<td className="py-3 px-4 lg:px-8 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-800 truncate font-geist pointer-events-auto cursor-help w-full">
                      Position as an alternative to hiring full-time in-house
                      generalists.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Position as an alternative to hiring full-time in-house
                      generalists.
                    </div>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50/80 transition-colors group relative cursor-pointer">
<td className="py-3 px-4 lg:px-8 border-b border-transparent relative z-10">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 cursor-pointer accent-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="py-3 px-4 whitespace-nowrap">
<div className="font-medium text-sm text-zinc-900 font-geist relative z-10">
                    Kinetics
                  </div>
<div className="text-xs text-zinc-500 mt-0.5 font-geist relative z-10">
                    Automotive Viz
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200 font-geist">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                    72
                  </span>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="text-sm text-zinc-700 font-geist">
                    sarah.j@kinetics.co
                  </div>
<div className="text-xs text-zinc-400 mt-0.5 font-geist">
                    +1 (415) 555-8822
                  </div>
</td>
<td className="py-3 px-4 whitespace-nowrap relative z-10">
<div className="flex items-center gap-2.5 text-zinc-400">
<a className="group/social relative hover:text-zinc-900 transition-colors" href="https://instagram.com" target="_blank">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="group/social relative hover:text-zinc-900 transition-colors" href="https://linkedin.com" target="_blank">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<span className="text-xs ml-0.5 font-medium text-zinc-500 font-geist">
                      18k
                    </span>
</div>
</td>
<td className="py-3 px-4 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-600 truncate font-geist pointer-events-auto cursor-help w-full">
                      Consistent output, but pipeline looks manual based on job
                      postings.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Consistent output, but pipeline looks manual based on job
                      postings.
                    </div>
</div>
</td>
<td className="py-3 px-4 lg:px-8 relative">
<div className="group/tooltip relative z-10 flex w-64 items-center">
<p className="text-sm text-zinc-800 truncate font-geist pointer-events-auto cursor-help w-full">
                      Focus on automation and standardizing their Nuke
                      workflows.
                    </p>
<div className="absolute bottom-full left-0 mb-2 w-max max-w-[280px] bg-zinc-800 text-zinc-50 text-xs px-3 py-2 rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-[100] whitespace-normal font-geist border border-zinc-700 pointer-events-none">
                      Focus on automation and standardizing their Nuke
                      workflows.
                    </div>
</div>
</td>
</tr>

<tr className=""><td className="py-6" colspan="7"></td></tr>
<tr className=""><td className="py-6" colspan="7"></td></tr>
<tr className=""><td className="py-6" colspan="7"></td></tr>
<tr className=""><td className="pt-6 pb-6" colspan="7"></td></tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white border-b border-zinc-200 px-4 lg:px-8 py-4 items-center gap-8 shrink-0 w-full z-10 shadow-sm" id="pipeline-summary">
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-geist mb-1">
            Active Pipeline
          </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight font-geist" id="summary-active">
            £142,000
          </span>
</div>
<div className="w-px h-10 bg-zinc-200"></div>
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-geist mb-1">
            Won (Pending Invoice)
          </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight font-geist" id="summary-won">
            £144,000
          </span>
</div>
<div className="w-px h-10 bg-zinc-200"></div>
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-geist mb-1">
            Invoiced (Locked)
          </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight font-geist" id="summary-invoiced">
            £15,000
          </span>
</div>
</div>
<div className="flex-1 overflow-x-auto overflow-y-hidden bg-[#fafafa] p-6 gap-6 w-full items-start flex-nowrap" id="pipeline-view">
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Accepted
              </h3>
</div>
<span className="text-xs font-medium text-fuchsia-700 bg-fuchsia-100 border border-fuchsia-200 px-2 py-0.5 rounded-full font-geist">
              3
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="fuchsia">
<div className="bg-white p-4 rounded-xl border border-fuchsia-200 shadow-sm cursor-grab hover:border-fuchsia-300 transition-colors relative overflow-hidden group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Automotive
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-fuchsia-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Aether Films</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                UE5 Product Shots
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-fuchsia-600 font-geist">
                  £45k
                </div>
<div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-[10px] text-indigo-600 font-medium font-geist border border-indigo-100">
                  AF
                </div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-fuchsia-200 shadow-sm cursor-grab hover:border-fuchsia-300 transition-colors relative overflow-hidden group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Music Video
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-fuchsia-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Neon Horizon</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Cloud Rendering Pipeline
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-fuchsia-600 font-geist">
                  £12k
                </div>
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-[10px] text-teal-600 font-medium font-geist border border-teal-100">
                  NH
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Meeting booked
              </h3>
</div>
<span className="text-xs font-medium text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full font-geist">
              1
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="amber">
<div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm cursor-grab hover:border-amber-300 transition-colors relative overflow-hidden group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Gaming
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-amber-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Void Creative</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Trailer VFX Outsource
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-amber-600 font-geist">
                  £85k
                </div>
<div className="flex items-center gap-1 text-[10px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-geist">
<iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon>
                  Oct 24
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Quoted
              </h3>
</div>
<span className="text-xs font-medium text-cyan-700 bg-cyan-100 border border-cyan-200 px-2 py-0.5 rounded-full font-geist">
              0
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="cyan">
<div className="h-32 rounded-xl border-2 border-dashed border-zinc-200/60 bg-zinc-50/50 flex flex-col items-center justify-center gap-2 text-zinc-400">
<iconify-icon icon="solar:archive-down-minimlistic-linear" width="24"></iconify-icon>
<span className="text-xs font-medium font-geist">
                Drop leads here
              </span>
</div>
</div>
</div>
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Won
              </h3>
</div>
<span className="text-xs font-medium text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full font-geist">
              2
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="emerald">
<div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm cursor-grab hover:border-emerald-300 transition-colors relative overflow-hidden group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Film
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Horizon Studios</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Environment Cleanup
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-emerald-600 font-geist">
                  £120k
                </div>
<div className="flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-geist">
<iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon>
                  Closed
                </div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm cursor-grab hover:border-emerald-300 transition-colors relative overflow-hidden group" onclick="document.getElementById('won-detail-toggle').checked = true;">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Automotive
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Kinetics</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Nuke Compositing Project
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-emerald-600 font-geist">
                  £50k
                </div>
<div className="flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-geist">
<iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon>
                  Closed
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Invoiced
              </h3>
</div>
<span className="text-xs font-medium text-blue-700 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full font-geist">
              1
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="blue">
<div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm cursor-grab hover:border-blue-300 transition-colors relative overflow-hidden group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Commercial
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-blue-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Starlight VFX</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Comp Work Final
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-blue-600 font-geist">
                  £15k
                </div>
<div className="flex items-center gap-1 text-[10px] font-medium text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-geist">
<iconify-icon icon="solar:bill-check-bold" width="12"></iconify-icon>
                  Sent
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-80 shrink-0 h-full">
<div className="flex items-center justify-between mb-4 px-1 shrink-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
<h3 className="text-sm font-medium text-zinc-900 font-geist tracking-tight">
                Lost
              </h3>
</div>
<span className="text-xs font-medium text-red-700 bg-red-100 border border-red-200 px-2 py-0.5 rounded-full font-geist">
              1
            </span>
</div>
<div className="flex flex-col gap-3 overflow-y-auto pb-4 scrollbar-hide flex-1" data-theme="red">
<div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm cursor-grab hover:border-red-300 transition-colors relative overflow-hidden opacity-80 hover:opacity-100 group" onclick="openWonDrawer(this)">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 text-zinc-600 font-geist">
                  Commercial
                </span>
<iconify-icon className="text-zinc-400 group-hover:text-red-500 transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900 font-geist flex items-center justify-between gap-2">
<span className="company-name truncate">Nexus Media</span>
<span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tracking-tight whitespace-nowrap border border-zinc-200 shadow-sm shrink-0" data-comm-badge="">
                  P1 — 10%
                </span>
</h4>
<p className="text-xs text-zinc-500 mt-1 mb-3 font-geist">
                Budget constraints
              </p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
<div className="text-xs font-medium text-red-600 font-geist">
                  £30k
                </div>
<div className="flex items-center gap-1 text-[10px] font-medium text-red-700 bg-red-50 px-1.5 py-0.5 rounded font-geist">
<iconify-icon icon="solar:close-circle-bold" width="12"></iconify-icon>
                  Lost
                </div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-300 translate-y-20 opacity-0 z-[100] font-geist" id="accept-toast">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium">Lead Accepted</p>
<p className="text-xs text-zinc-400">
          Aether Films added to your pipeline.
        </p>
</div>
</div>
<div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4" id="ai-modal-overlay">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform scale-95 opacity-0 transition-all duration-300 flex flex-col hidden" id="ai-prompt-modal">
<div className="p-6">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 font-geist mb-2 tracking-tight">
            Generate Outreach Message?
          </h3>
<p className="text-sm text-zinc-600 font-geist mb-6 leading-relaxed">
            Would you like AI to generate a highly personalized outreach message
            using the combined insights for Aether Films?
          </p>
<div className="flex items-center gap-3 justify-end">
<button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors font-geist" id="btn-no-ai">
              No, just accept
            </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm flex items-center gap-2 font-geist" id="btn-yes-ai">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
              Generate Message
            </button>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform scale-95 opacity-0 transition-all duration-300 flex flex-col hidden" id="ai-result-modal">
<header className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/50">
<div className="flex items-center gap-2 text-indigo-700">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold font-geist tracking-tight text-indigo-900">
              AI Generated Draft
            </h3>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors" id="btn-close-result">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</header>
<div className="p-6">
<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-5 text-sm text-zinc-800 font-geist leading-relaxed whitespace-pre-wrap outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all" contenteditable="true" id="generated-message">
            Hi David, Saw your recent behind-the-scenes post on
            Instagram—incredible what your team is doing with UE5 in real-time!
            Noticed you’re scaling up for the upcoming Apple campaign and
            recently brought on some new Unreal Engine artists. If you're
            looking for seamless UE5 integration or additional rendering power
            to support your Q3 product shots, our pipeline could be a perfect
            fit. Would love to chat briefly next week about how we can support
            the expanded post-production workflow. Best, [Your Name]
          </div>
<div className="flex flex-col gap-3">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-sm font-geist" id="btn-send-platform">
<iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
              Send via Platform
            </button>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-lg transition-colors font-geist" id="btn-copy-message">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
              Copy to Clipboard
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
