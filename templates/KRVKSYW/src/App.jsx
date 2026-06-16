import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init lucide icons
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Sidebar collapse/expand + tooltips
      (function () {
        const sidebar = document.getElementById('accordionSidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        const main = document.querySelector('main');

        let activeTooltip = null;

        function destroyTooltip() {
          if (activeTooltip) {
            activeTooltip.remove();
            activeTooltip = null;
          }
        }

        function setCollapsed(state) {
          const collapsed = Boolean(state);
          sidebar.setAttribute('data-collapsed', collapsed ? 'true' : 'false');

          // Width classes
          if (collapsed) {
            sidebar.classList.remove('w-72');
            sidebar.classList.add('w-16');
            if (main) main.classList.remove('pl-72'), main.classList.add('pl-16');
          } else {
            sidebar.classList.remove('w-16');
            sidebar.classList.add('w-72');
            if (main) main.classList.remove('pl-16'), main.classList.add('pl-72');
          }

          // Toggle labels visibility
          sidebar.querySelectorAll('.nav-label').forEach((el) => {
            if (collapsed) {
              el.classList.add('hidden');
            } else {
              el.classList.remove('hidden');
            }
          });

          // Ensure any tooltip is removed when expanding
          if (!collapsed) {
            destroyTooltip();
          }
        }

        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            const collapsed = sidebar.getAttribute('data-collapsed') === 'true';
            setCollapsed(!collapsed);
          });
        }

        // Tooltip generation on hover when collapsed
        function showTooltipFor(linkEl) {
          if (sidebar.getAttribute('data-collapsed') !== 'true') return;

          const labelEl = linkEl.querySelector('.nav-label');
          const text = (labelEl ? labelEl.textContent : '').trim();
          if (!text) return;

          destroyTooltip();

          const tip = document.createElement('div');
          tip.className = 'fixed z-50 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-white/95 backdrop-blur shadow-lg text-xs font-medium text-neutral-900 pointer-events-none transition duration-150 ease-out';
          tip.textContent = text;

          document.body.appendChild(tip);

          // Position to the right of the sidebar item
          const rect = linkEl.getBoundingClientRect();
          const tRect = tip.getBoundingClientRect();

          const left = rect.right + 10;
          let top = rect.top + rect.height / 2 - tRect.height / 2;

          // Clamp within viewport
          top = Math.max(8, Math.min(top, window.innerHeight - tRect.height - 8));

          tip.style.left = left + 'px';
          tip.style.top = top + 'px';
          tip.style.opacity = '0';
          tip.style.transform = 'translateX(4px)';

          requestAnimationFrame(() => {
            tip.style.opacity = '1';
            tip.style.transform = 'translateX(0)';
          });

          activeTooltip = tip;
        }

        // Bind hover events to nav links only (keep structure intact)
        const navLinks = sidebar.querySelectorAll('li .group');
        navLinks.forEach((link) => {
          link.addEventListener('mouseenter', () => showTooltipFor(link));
          link.addEventListener('mouseleave', () => destroyTooltip());
          link.addEventListener('click', () => destroyTooltip());
          link.addEventListener('focus', () => showTooltipFor(link));
          link.addEventListener('blur', () => destroyTooltip());
        });

        // Remove tooltip on scroll/resize to avoid misplacement
        sidebar.addEventListener('scroll', destroyTooltip, { passive: true });
        window.addEventListener('resize', destroyTooltip, { passive: true });

        // Optional: start with expanded or collapsed based on current attribute
        setCollapsed(sidebar.getAttribute('data-collapsed') === 'true');
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed inset-y-0 left-0 z-40">
<ul className="h-full w-72 bg-white/95 backdrop-blur border-r border-neutral-200 shadow-sm flex flex-col overflow-y-auto" data-collapsed="false" id="accordionSidebar">

<li className="px-4 pt-4 pb-3">
<a className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 hover:bg-neutral-100 hover:border-neutral-300 transition-colors" href="#" onclick="showDiv('pagina-resumo')">
<div className="flex items-center justify-center">
<picture className="wpr-logo-image block">
<source srcset="https://personalizou.com/oficial/wp-content/uploads/2023/03/android-chrome-256x256branco.png"/>
<img alt="Logo" className="block rounded-lg" src="https://personalizou.com/oficial/wp-content/uploads/2023/03/android-chrome-256x256branco.png" style={{width: '40px', height: '40px'}}/>
</picture>
</div>
<div className="min-w-0">
<div className="text-[15px] font-medium tracking-tight text-neutral-900 leading-none">Personalizou.com<sup></sup></div>
<div className="text-xs text-neutral-500 leading-none mt-1">Painel</div>
</div>
</a>
</li>

<li></li>

<li className="px-2">
<a aria-current="page" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 bg-neutral-100 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 transition-colors" href="#" onclick="showDiv('pagina-resumo')">
<svg className="lucide lucide-layout-dashboard w-4.5 h-4.5 text-neutral-700" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="nav-label truncate">Resumo</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-analise-funil')">
<svg className="lucide lucide-line-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="nav-label truncate">Análise do Funil</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-ticket-geral')">
<svg className="lucide lucide-bar-chart-3 w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="nav-label truncate">Ticket Geral</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-metricas-principais')">
<svg className="lucide lucide-pie-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="nav-label truncate">Métricas Principais</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-analise-grafica')">
<svg className="lucide lucide-area-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="area-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg>
<span className="nav-label truncate">Análise Gráfica</span>
</a>
</li>

<li className="mt-2"><hr className="border-neutral-200 mx-4 my-2"/></li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-resumo-original')">
<svg className="lucide lucide-area-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="area-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></path></svg>
<span className="nav-label truncate">Resumo Original</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-projecao-resultados')">
<svg className="lucide lucide-bar-chart-3 w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="nav-label truncate">Projeção de Resultados</span>
</a>
</li>
<li className="px-2 mt-1.5">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-controle-estatistico')">
<svg className="lucide lucide-pie-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="nav-label truncate">Controle Estatístico</span>
</a>
</li>
<li className="px-2 mt-1.5 mb-2">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-colors" href="#" onclick="showDiv('pagina-meta-ads')">
<svg className="lucide lucide-line-chart w-4.5 h-4.5 text-neutral-600 group-hover:text-neutral-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="nav-label truncate">Meta Ads</span>
</a>
</li>

<li className="mt-auto px-4 py-4 hidden md:block">
<div className="text-center">
<button aria-label="Alternar barra lateral" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition-colors" id="sidebarToggle" type="button">
<svg className="lucide lucide-chevrons-left-right w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevrons-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</button>
</div>
</li>
</ul>
</aside>

<main className="pl-72">
<div className="px-6 py-6">
<div className="rounded-xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Conteúdo</h1>
<p className="text-sm text-neutral-600 mt-2">Selecione uma opção no menu para navegar. (onclick originais preservados)</p>
</div>
</div>
</main>


    </>
  );
}
