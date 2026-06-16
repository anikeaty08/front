import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Render icons
      lucide.createIcons();

      // Toggle export menu
      const toggleBtn = document.getElementById('exportToggle');
      const toggleBtnMobile = document.getElementById('exportToggleMobile');
      const menu = document.getElementById('exportMenu');

      function toggleMenu() {
        menu.classList.toggle('hidden');
      }
      toggleBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });
      toggleBtnMobile?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      // Close on outside click (do not immediately close when pressing toggle)
      document.addEventListener('click', (e) => {
        const target = e.target;
        if (
          !menu.contains(target) &&
          !target.closest('#exportToggle') &&
          !target.closest('#exportToggleMobile')
        ) {
          menu.classList.add('hidden');
        }
      });

      // Custom checkbox behavior (aria-checked toggles)
      document.querySelectorAll('.cbx').forEach((btn) => {
        btn.addEventListener('click', () => {
          const checked = btn.getAttribute('aria-checked') === 'true';
          btn.setAttribute('aria-checked', String(!checked));
          const dot = btn.querySelector('span');
          if (!checked) {
            dot.className = 'block size-4 rounded border border-neutral-300 bg-indigo-600 ring-1 ring-inset ring-indigo-600/20';
          } else {
            dot.className = 'block size-4 rounded border border-neutral-300 bg-white';
          }
        });
      });

      // Export helpers using html-to-image (robust + error handling)
      const artboard = document.getElementById('artboard');

      async function exportSVG() {
        if (!window.htmlToImage) throw new Error('Export module not loaded');
        // Use full scroll size to avoid clipping, skip font embedding for fewer CORS issues
        const dataUrl = await htmlToImage.toSvg(artboard, {
          pixelRatio: 1.5,
          width: artboard.scrollWidth,
          height: artboard.scrollHeight,
          cacheBust: true,
          skipFonts: true,
          backgroundColor: 'white'
        });
        return dataUrl;
      }

      async function exportPNG(scale = 2) {
        if (!window.htmlToImage) throw new Error('Export module not loaded');
        const dataUrl = await htmlToImage.toPng(artboard, {
          pixelRatio: scale,
          width: artboard.scrollWidth,
          height: artboard.scrollHeight,
          cacheBust: true,
          skipFonts: true,
          backgroundColor: 'white'
        });
        return dataUrl;
      }

      function download(dataUrl, name) {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      async function copyDataUrlSvg(dataUrl) {
        const svgText = atob(dataUrl.split(',')[1]);
        // Prefer rich clipboard when available
        if ('ClipboardItem' in window) {
          const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
          try {
            await navigator.clipboard.write([
              new ClipboardItem({
                'image/svg+xml': svgBlob,
                'text/plain': new Blob([svgText], { type: 'text/plain' })
              })
            ]);
            return true;
          } catch (_) {
            // fall through to text-only copy
          }
        }
        await navigator.clipboard.writeText(svgText);
        return true;
      }

      const setCopiedLabel = (el, text = 'Copied SVG') => {
        const label = el?.querySelector('span');
        if (!label) return;
        const prev = label.textContent;
        label.textContent = text;
        setTimeout(() => (label.textContent = prev), 1400);
      };

      document.getElementById('downloadSvgBtn')?.addEventListener('click', async () => {
        try {
          const url = await exportSVG();
          download(url, 'customers-dashboard.svg');
          menu.classList.add('hidden');
        } catch (err) {
          console.error(err);
          alert('Could not generate SVG. Please try again.');
        }
      });

      document.getElementById('downloadPngBtn')?.addEventListener('click', async () => {
        try {
          const url = await exportPNG(2);
          download(url, 'customers-dashboard@2x.png');
          menu.classList.add('hidden');
        } catch (err) {
          console.error(err);
          alert('Could not generate PNG. Please try again.');
        }
      });

      document.getElementById('copySvgBtn')?.addEventListener('click', async () => {
        try {
          const url = await exportSVG();
          await copyDataUrlSvg(url);
          menu.classList.add('hidden');
          setCopiedLabel(toggleBtn || toggleBtnMobile);
        } catch (e) {
          console.error(e);
          // Fallback: download if clipboard fails
          try {
            const url = await exportSVG();
            download(url, 'customers-dashboard.svg');
          } catch (_) {
            alert('Copy failed and fallback download is unavailable.');
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">

</header>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 lg:gap-8 py-6">

<aside className="hidden lg:block">
<div className="mb-6 flex items-center gap-3 px-3 py-2">
<div className="flex size-8 items-center justify-center rounded-md bg-neutral-900 text-white">
<svg className="" data-lucide="sparkles className=" fill="none" height="24" lucide="" lucide-sparkles="" round"="" size-4"="" stroke="currentColor" strokeLinejoin="round" strokeWidth="2 strokeLinecap=" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v5"></path><path className="" d="M12 16v5"></path><path d="M16.2 6.2 13 9.4"></path><path d="M11 14.6 7.8 17.8"></path><path d="M18.4 12H13.5"></path><path d="M10.5 12H5.6"></path><path d="m16.2 17.8-3.2-3.2"></path><path d="M7.8 6.2 11 9.4"></path></svg>
</div>
<div className="min-w-0">
<p className="truncate text-[14px] font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Untitled UI</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>Workspace</p>
</div>
</div>
<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-home size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      Home
    </a>
<a className="group flex items-center gap-3 rounded-md bg-neutral-100 px-3 py-2 text-[13px] font-medium text-neutral-900 font-geist" href="#" style={{}}>
<svg ="24"="" className="lucide lucide-layout-dashboard size-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
      Dashboard
 </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-folder size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
      Projects
    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-check-square size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
      Tasks
      <span className="ml-auto rounded-full bg-neutral-900/5 px-2 py-0.5 text-[11px] text-neutral-700 font-geist" style={{}}>10</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-3 size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
      Reporting
    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-users size-4 text-neutral-500 group-hover:text-neutral-700" data-lide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
      Users
    </a>
</nav>
<div className="mt-8 space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-bell size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
      Notifications
      <span className="ml-auto rounded-full bg-neutral-900/5 px-2 py-0.5 text-[11px] text-neutral-700 font-geist" style={{}}>4</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<i className="size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="lifebuoy"></i>
      Support
    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-settings size-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
      Settings
    </a>
</div>
<div className="mt-8 flex items-center gap-3 rounded-xl border border-neutral-200 p-3">
<img alt="avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>Frankie Sullivan</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>@frankie</p>
</div>
</div>
</aside>

<main className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" id="artboard">

<div className="flex items-center justify-between">
<div className="">
<h1 className="text-[24px] md:text-[28px] font-medium text-neutral-900 tracking-tight font-geist" id="aura-emepml6ea" style={{}}>Customers</h1>
<div className="mt-3 flex items-center gap-4 text-[13px] text-neutral-600">
<button className="rounded-md bg-neutral-900/5 px-3 py-1.5 text-neutral-900 font-geist" style={{}}>Overview</button>
<button className="rounded-md px-3 py-1.5 hover:bg-neutral-50 font-geist" style={{}}>Table</button>
<button className="rounded-md px-3 py-1.5 hover:bg-neutral-50 font-geist" style={{}}>List view</button>
<button className="rounded-md px-3 py-1.5 hover:bg-neutral-50 font-geist" style={{}}>Segment</button>
<button className="rounded-md px-3 py-1.5 hover:bg-neutral-50 font-geist" style={{}}>Custom</button>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-medium text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
<svg className="lucide lucide-upload size-4 text-neutral-600" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                Import
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-[13px] font-medium text-white hover:bg-indigo-600/90 font-geist" style={{}}>
<svg className="lucide lucide-plus size-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add customer
              </button>
</div>
</div>

<section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-[13px] text-neutral-600 font-geist" style={{}}>Total customers</p>
<button aria-label="more" className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-more-horizontal size-4 text-neutral-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-2 flex items-center gap-3">
<p className="text-[28px] tracking-tight font-geist font-medium" style={{}}>2,420</p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700 font-geist" style={{}}>
<svg className="lucide lucide-trending-up size-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 20%
                </span>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-[13px] text-neutral-600 font-geist" style={{}}>Members</p>
<button aria-label="more" className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-more-horizontal size-4 text-neutral-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-2 flex items-center gap-3">
<p className="text-[28px] tracking-tight font-geist font-medium" style={{}}>1,210</p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700 font-geist" style={{}}>
<svg className="lucide lucide-trending-up size-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 15%
                </span>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-[13px] text-neutral-600 font-geist" style={{}}>Active now</p>
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-2 flex items-center gap-3">
<p className="text-[28px] tracking-tight font-geist font-medium" style={{}}>316</p>
</div>
</div>
</section>

<section className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
<div className="flex flex-wrap gap-2 items-center">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[12px] text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
                All time
                <svg className="lucide lucide-x size-3.5 text-neutral-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[12px] text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
                US, AU, +4
                <svg className="lucide lucide-x size-3.5 text-neutral-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[12px] text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
<svg className="lucide lucide-filter size-3.5 text-neutral-600" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                More filters
              </button>
</div>
<div className="relative">
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full md:w-[280px] rounded-lg border border-neutral-200 bg-white px-10 py-2 text-[13px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/5" placeholder="Search"/>
</div>
</section>

<section className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 border-b border-neutral-200 bg-neutral-50 px-3 py-2.5 text-[12px] text-neutral-600">
<div className="flex items-center justify-center">
<button aria-checked="false" className="cbx group">
<span className="sr-only font-geist" style={{}}>Toggle all</span>
<span className="block size-4 rounded border border-neutral-300 bg-white group-aria-checked:bg-indigo-600 group-aria-checked:border-indigo-600"></span>
</button>
</div>
<div className="font-geist" style={{}}>Company</div>
<div className="font-geist" style={{}}>Status</div>
<div className="font-geist" style={{}}>About</div>
<div className="font-geist" style={{}}>Users</div>
<div className="text-right pr-2 font-geist" style={{}}>Actions</div>
</div>
<div className="divide-y divide-neutral-200">

<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 px-3 py-3">

<div className="flex items-center justify-center">
<button aria-checked="true" className="cbx group">
<span className="sr-only font-geist" style={{}}>Select row</span>
<span className="block size-4 rounded border border-neutral-300 bg-indigo-600 ring-1 ring-inset ring-indigo-600/20"></span>
</button>
</div>

<div className="flex items-center gap-3 min-w-0">
<div className="size-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-[12px] font-medium font-geist" style={{}}>C</div>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>Catalog</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>catalog@app.io</p>
</div>
</div>

<div>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[12px] text-emerald-700 font-geist" style={{}}>Customer</span>
</div>

<div className="min-w-0">
<p className="truncate text-[13px] text-neutral-900 font-geist" style={{}}>Content curating app</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>Brings all your news into one place</p>
</div>

<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[12px] text-neutral-600 font-geist" style={{}}>+5</span>
</div>

<div className="flex items-center justify-end gap-2 pr-2">
<div className="relative h-2 w-28 rounded-full bg-neutral-100">
<div className="h-2 w-2/3 rounded-full bg-indigo-600"></div>
</div>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-trash-2 size-4 text-neutral-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-pencil size-4 text-neutral-500" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 px-3 py-3">
<div className="flex items-center justify-center">
<button aria-checked="true" className="cbx group">
<span className="sr-only font-geist" style={{}}>Select row</span>
<span className="block size-4 rounded border border-neutral-300 bg-indigo-600 ring-1 ring-inset ring-indigo-600/20"></span>
</button>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="size-8 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white flex items-center justify-center text-[12px] font-medium font-geist" style={{}}>Ci</div>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>CircooIes</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>getcircooIes.com</p>
</div>
</div>
<div className="">
<span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[12px] text-neutral-700 font-geist" style={{}}>Churned</span>
</div>
<div className="min-w-0">
<p className="truncate text-[13px] text-neutral-900 font-geist" style={{}}>Design software</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>Super lightweight design app</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[12px] text-neutral-600 font-geist" style={{}}>+8</span>
</div>
<div className="flex items-center justify-end gap-2 pr-2">
<div className="relative h-2 w-28 rounded-full bg-neutral-100">
<div className="h-2 w-1/4 rounded-full bg-indigo-600"></div>
</div>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-trash-2 size-4 text-neutral-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-pencil size-4 text-neutral-500" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 px-3 py-3">
<div className="flex items-center justify-center">
<button aria-checked="true" className="cbx group">
<span className="sr-only font-geist" style={{}}>Select row</span>
<span className="block size-4 rounded border border-neutral-300 bg-indigo-600 ring-1 ring-inset ring-indigo-600/20"></span>
</button>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="size-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-[12px] font-medium font-geist" style={{}}>Cmd</div>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>Command+R</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>cmdr.ai</p>
</div>
</div>
<div className="">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[12px] text-emerald-700 font-geist" style={{}}>Customer</span>
</div>
<div className="min-w-0">
<p className="truncate text-[13px] text-neutral-900 font-geist" style={{}}>Data prediction</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>AI and machine learning data</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<span className="text-[12px] text-neutral-600 font-geist" style={{}}>+2</span>
</div>
<div className="flex items-center justify-end gap-2 pr-2">
<div className="relative h-2 w-28 rounded-full bg-neutral-100">
<div className="h-2 w-1/2 rounded-full bg-indigo-600"></div>
</div>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-trash-2 size-4 text-neutral-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-pencil size-4 text-neutral-500" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 px-3 py-3">
<div className="flex items-center justify-center">
<button aria-checked="false" className="cbx group">
<span className="sr-only font-geist" style={{}}>Select row</span>
<span className="block size-4 rounded border border-neutral-300 bg-white"></span>
</button>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="size-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center text-[12px] font-medium font-geist" style={{}}>H</div>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>Hourglass</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>hourglass.app</p>
</div>
</div>
<div className="">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[12px] text-emerald-700 font-geist" style={{}}>Customer</span>
</div>
<div className="min-w-0">
<p className="truncate text-[13px] text-neutral-900 font-geist" style={{}}>Productivity app</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>Time management and productivity</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[12px] text-neutral-600 font-geist" style={{}}>+6</span>
</div>
<div className="flex items-center justify-end gap-2 pr-2">
<div className="relative h-2 w-28 rounded-full bg-neutral-100">
<div className="h-2 w-4/5 rounded-full bg-indigo-600"></div>
</div>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-trash-2 size-4 text-neutral-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-pencil size-4 text-neutral-500" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[32px,1.4fr,0.9fr,1.3fr,1fr,120px] items-center gap-3 px-3 py-3">
<div className="flex items-center justify-center">
<button aria-checked="false" className="cbx group">
<span className="sr-only font-geist" style={{}}>Select row</span>
<span className="block size-4 rounded border border-neutral-300 bg-white"></span>
</button>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="size-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white flex items-center justify-center text-[12px] font-medium font-geist" style={{}}>L</div>
<div className="min-w-0">
<p className="truncate text-[13px] font-medium text-neutral-900 font-geist" style={{}}>Layers</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>getlayers.io</p>
</div>
</div>
<div className="">
<span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[12px] text-neutral-700 font-geist" style={{}}>Churned</span>
</div>
<div className="min-w-0">
<p className="truncate text-[13px] text-neutral-900 font-geist" style={{}}>Web app integrations</p>
<p className="truncate text-[12px] text-neutral-500 font-geist" style={{}}>Connect web apps seamlessly</p>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<img className="size-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[12px] text-neutral-600 font-geist" style={{}}>+1</span>
</div>
<div className="flex items-center justify-end gap-2 pr-2">
<div className="relative h-2 w-28 rounded-full bg-neutral-100">
<div className="h-2 w-1/5 rounded-full bg-indigo-600"></div>
</div>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-trash-2 size-4 text-neutral-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
<button className="rounded-md p-1.5 hover:bg-neutral-50">
<svg className="lucide lucide-pencil size-4 text-neutral-500" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between border-t border-neutral-200 bg-white px-3 py-2.5">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
<svg className="lucide lucide-chevron-left size-4 text-neutral-500" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
                Previous
              </button>
<p className="text-[12px] text-neutral-600 font-geist" style={{}}>Page 1 of 10</p>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-neutral-800 hover:bg-neutral-50 font-geist" style={{}}>
                Next
                <svg className="lucide lucide-chevron-right size-4 text-neutral-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>
</main>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white p-3 md:hidden">
<div className="mx-auto max-w-7xl flex items-center justify-between gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-medium text-neutral-800 shadow-sm font-geist" id="exportToggleMobile" style={{}}>
<svg className="lucide lucide-figma size-4 text-neutral-600" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
          Export
        </button>
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-[13px] font-medium text-white shadow-sm font-geist" style={{}}>
<svg className="lucide lucide-plus size-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          Add customer
        </button>
</div>
</div>


    </>
  );
}
