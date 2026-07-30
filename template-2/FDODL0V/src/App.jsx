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
      
      // Simple helper to connect nodes with SVG elbow paths
      const links = [
        // n0 -> its children
        ['n0', 'n2'], ['n0', 'n3'], ['n0', 'n4'], ['n0', 'n5'],
        // n1 -> its children
        ['n1', 'n6'], ['n1', 'n7'],
        // n2 -> grandchildren
        ['n2', 'n8'], ['n2', 'n9'],
      ];

      const treeArea = document.getElementById('treeArea');
      const canvas = document.getElementById('canvas');
      const svg = document.getElementById('linkLayer');

      function drawConnections() {
        const areaRect = canvas.getBoundingClientRect();
        // Set SVG to match scrollable canvas dimensions
        svg.setAttribute('width', canvas.scrollWidth || canvas.offsetWidth);
        svg.setAttribute('height', canvas.scrollHeight || canvas.offsetHeight);
        svg.setAttribute('viewBox', `0 0 ${canvas.scrollWidth || canvas.offsetWidth} ${canvas.scrollHeight || canvas.offsetHeight}`);
        svg.innerHTML = ''; // clear

        const stroke = '#E5E7EB'; // neutral-200
        const strokeWidth = 1.5;

        for (const [fromId, toId] of links) {
          const fromEl = document.getElementById(fromId);
          const toEl = document.getElementById(toId);
          if (!fromEl || !toEl) continue;

          const a = fromEl.getBoundingClientRect();
          const b = toEl.getBoundingClientRect();

          const x1 = a.left - areaRect.left + a.width / 2 + treeArea.scrollLeft;
          const y1 = a.top - areaRect.top + a.height + treeArea.scrollTop;

          const x2 = b.left - areaRect.left + b.width / 2 + treeArea.scrollLeft;
          const y2 = b.top - areaRect.top + treeArea.scrollTop;

          const midY = (y1 + y2) / 2;

          // Elbow path with rounded corners
          const d = `
            M ${x1} ${y1}
            V ${midY}
            H ${x2}
            V ${y2}
          `;

          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', d);
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', stroke);
          path.setAttribute('stroke-width', strokeWidth);
          path.setAttribute('class', 'connector');
          svg.appendChild(path);

          // small dots at joints
          const dot1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot1.setAttribute('cx', x1);
          dot1.setAttribute('cy', y1);
          dot1.setAttribute('r', 2);
          dot1.setAttribute('fill', '#D1D5DB'); // neutral-300
          svg.appendChild(dot1);

          const dot2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot2.setAttribute('cx', x2);
          dot2.setAttribute('cy', y2);
          dot2.setAttribute('r', 2);
          dot2.setAttribute('fill', '#D1D5DB');
          svg.appendChild(dot2);
        }
      }

      function init() {
        // Render icons
        if (window.lucide?.createIcons) lucide.createIcons();

        // Initial draw and observers
        drawConnections();

        // Redraw on resize and scroll
        const ro = new ResizeObserver(() => drawConnections());
        ro.observe(canvas);

        window.addEventListener('resize', drawConnections);
        treeArea.addEventListener('scroll', () => {
          // Throttle with requestAnimationFrame
          if (init._scrolling) return;
          init._scrolling = true;
          requestAnimationFrame(() => {
            drawConnections();
            init._scrolling = false;
          });
        });

        // Recompute after images load (avatars)
        const imgs = canvas.querySelectorAll('img');
        let pending = imgs.length;
        if (pending === 0) return;
        imgs.forEach(img => {
          if (img.complete) {
            if (--pending === 0) drawConnections();
          } else {
            img.addEventListener('load', () => {
              if (--pending === 0) drawConnections();
            });
          }
        });
      }

      // Ensure init after content paints
      window.addEventListener('load', init);
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) drawConnections();
      });
    
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
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-neutral-200/70 bg-white">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
<div className="flex items-center gap-8">
<h1 className="text-4xl tracking-tight font-semibold text-neutral-900">Explorer</h1>
<nav className="hidden md:flex items-center gap-1">
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
<span>Cascade</span>
</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-900 bg-neutral-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trees"></i>
<span>Tree</span>
</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="list-tree"></i>
<span>List</span>
</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="network"></i>
<span>Network</span>
</button>
<button className="px-2 py-2 rounded-md text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</nav>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="px-3 py-1.5 rounded-md text-sm font-medium text-neutral-800 bg-neutral-100/70">
              2025, Q3 2025
            </div>
<button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<div className="w-px h-6 bg-neutral-200 mx-1"></div>
<button className="hidden md:flex items-center justify-center w-9 h-9 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</button>
<button className="hidden md:flex items-center justify-center w-9 h-9 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="sort-desc"></i>
</button>
<button className="hidden md:flex items-center justify-center w-9 h-9 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
<i className="w-5 h-5" data-lucide="ellipsis"></i>
</button>
<button className="ml-1 inline-flex items-center gap-2 px-3.5 h-9 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900">
<i className="w-4 h-4" data-lucide="plus"></i>
              New
            </button>
</div>
</div>
</header>

<main className="flex-1">
<div className="relative h-full" id="treeWrap">

<div className="relative overflow-auto no-scrollbar h-[calc(100vh-88px)]" id="treeArea">

<div className="relative min-w-[1200px] min-h-[900px] px-8 pt-12 pb-24" id="canvas">

<svg className="pointer-events-none absolute left-0 top-0" height="0" id="linkLayer" width="0"></svg>

<div className="relative flex justify-center gap-56">

<div className="node-card" id="n0">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[260px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="badge-check"></i>
<span className="text-xs">Objective</span>
</div>
<button className="text-neutral-400 hover:text-neutral-700">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<h3 className="mt-2 text-[17px] leading-snug font-semibold tracking-tight text-neutral-900">
                        Customer Centricity
                      </h3>
<p className="mt-1.5 text-sm text-neutral-500">tes</p>
<div className="mt-3 text-xs text-neutral-500 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i>
<span>A · 4</span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n1">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[260px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="trophy"></i>
<span className="text-xs">Objective</span>
</div>
<button className="text-neutral-400 hover:text-neutral-700">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<h3 className="mt-2 text-[17px] leading-snug font-semibold tracking-tight text-neutral-900">
                        High-Performance Culture
                      </h3>
<p className="mt-1.5 text-sm text-neutral-500">tes</p>
<div className="mt-3 text-xs text-neutral-500 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i>
<span>A · 1</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-28 flex justify-between px-8 max-w-[1100px] mx-auto">

<div className="node-card" id="n2">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">28%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Deliver value faster to our customers by speeding up our development time
                      </h3>

<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[28%] rounded-full bg-amber-400"></div>
</div>
</div>

<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                            Product
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Vicki Hansen</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-rose-50 text-rose-700 text-xs">
<i className="w-3.5 h-3.5" data-lucide="alert-octagon"></i>
                            Off track
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i> 2
                        </span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> A · 2
                        </span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n3">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">61%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Improve customer loyalty and retention
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[61%] rounded-full bg-emerald-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                            Customer Success
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Enrique Hansen</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-amber-50 text-amber-800 text-xs">
<i className="w-3.5 h-3.5" data-lucide="loader"></i>
                            Progressing
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span></span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> ∨ 2
                        </span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n4">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">70%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Turn our customers into ambassadors
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[70%] rounded-full bg-cyan-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                            Customer Success
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Enrique Hansen</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-emerald-50 text-emerald-700 text-xs">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                            On track
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span></span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> ∨ 3
                        </span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n5">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">47%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Improve our product reliability and performance
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[47%] rounded-full bg-neutral-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                            Product
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005316-04ce1f0df97f?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Vicki Hansen</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-rose-50 text-rose-700 text-xs">
<i className="w-3.5 h-3.5" data-lucide="alert-octagon"></i>
                            Off track
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span></span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> ∨ 3
                        </span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n6">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">31%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Create a great and motivating place to work
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[31%] rounded-full bg-rose-300"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="briefcase"></i>
                            Human Resources
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Tobi Bell</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-rose-50 text-rose-700 text-xs">
<i className="w-3.5 h-3.5" data-lucide="alert-octagon"></i>
                            Off track
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span></span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> ∨ 5
                        </span>
</div>
</div>
</div>
</div>

<div className="node-card" id="n7">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[280px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="target"></i>
<span className="text-xs">KR</span>
</div>
<span className="text-xs text-neutral-500">64%</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Ensure compliance with industry standards and regulations
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[64%] rounded-full bg-teal-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="package"></i>
                            Operations
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Daisy Social</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-emerald-50 text-emerald-700 text-xs">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                            On track
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center justify-between">
<span></span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="chevrons-down-up"></i> ∨ 3
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center gap-14">
<div className="node-card" id="n8">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[260px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="square-pen"></i>
<span className="text-xs">Task</span>
</div>
<span className="text-xs text-neutral-500">2.2</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Decrease review time by 4%
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[22%] rounded-full bg-amber-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                            Product
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Nellie Burke</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-amber-50 text-amber-800 text-xs">
<i className="w-3.5 h-3.5" data-lucide="loader"></i>
                            Progressing
                          </span>
</div>
</div>
<div className="mt-3 text-xs text-neutral-500 flex items-center gap-3">
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="heart"></i> 1
                        </span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i> 1
                        </span>
</div>
</div>
</div>
</div>
<div className="node-card" id="n9">
<div className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow w-[260px]">
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-4 h-4" data-lucide="square-pen"></i>
<span className="text-xs">Task</span>
</div>
<span className="text-xs text-neutral-500">4</span>
</div>
<h3 className="mt-2 text-[16px] leading-snug font-semibold tracking-tight">
                        Reduce the average number of bugs per new feature from 4 to 2.5
                      </h3>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-[40%] rounded-full bg-neutral-400"></div>
</div>
</div>
<div className="mt-3 space-y-1.5">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-100 text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                            Product
                          </span>
<span className="inline-flex items-center gap-1.5">
<img alt="" className="w-5 h-5 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<span className="text-xs text-neutral-500">Kristen Dixon</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 h-6 rounded-full bg-neutral-50 text-neutral-500 text-xs">
<i className="w-3.5 h-3.5" data-lucide="circle-dashed"></i>
                            Not started
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white border border-neutral-200 shadow-md rounded-full w-11 h-11 flex items-center justify-center hover:shadow-lg">
<i className="w-5 h-5 text-neutral-700" data-lucide="hand"></i>
</button>
</div>
</div>
</div>
</main>
</div>




    </>
  );
}
