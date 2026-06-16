import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize icons with 1.5 stroke width
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Sidebar toggle
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const openBtn = document.getElementById('openSidebar');
      const closeBtn = document.getElementById('closeSidebar');

      function openSidebarFn() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      }
      function closeSidebarFn() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }

      // Initialize mobile hidden state
      if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
      }

      if (openBtn) openBtn.addEventListener('click', openSidebarFn);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebarFn);
      if (overlay) overlay.addEventListener('click', closeSidebarFn);

      // Copy markup
      const copyBtn = document.getElementById('copyHtml');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          try {
            const docType = '<!DOCTYPE html>\n';
            const html = document.documentElement.outerHTML;
            await navigator.clipboard.writeText(docType + html);
            copyBtn.classList.add('ring-2','ring-emerald-400');
            setTimeout(() => copyBtn.classList.remove('ring-2','ring-emerald-400'), 900);
          } catch (e) {}
        });
      }

      // Responsive: close sidebar on resize to mobile / open on desktop
      let prev = window.innerWidth;
      window.addEventListener('resize', () => {
        const now = window.innerWidth;
        if (prev >= 1024 && now < 1024) {
          sidebar.classList.add('-translate-x-full');
        }
        if (prev < 1024 && now >= 1024) {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.add('hidden');
        }
        prev = now;
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex">

<aside className="fixed inset-y-0 left-0 z-40 w-80 translate-x-0 bg-white/90 backdrop-blur supports-backdrop-blur:bg-white/70 border-r border-zinc-200 shadow-sm lg:static lg:translate-x-0 transition-transform duration-300 ease-out" id="sidebar">

<div className="h-16 hidden lg:flex items-center justify-between px-4">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm text-zinc-700">
<i className="h-4 w-4" data-lucide="menu"></i>
<span className="font-medium">Workspace</span>
</button>
<div className="inline-flex items-center gap-1.5">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<i className="h-4 w-4" data-lucide="plus"></i>
            New
          </button>
<button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition">
<i className="h-4 w-4" data-lucide="search"></i>
</button>
</div>
</div>

<div className="lg:hidden flex items-center justify-between px-4 h-14 border-b border-zinc-200">
<button className="inline-flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100" id="closeSidebar">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
<div className="text-sm text-zinc-700">Workspace</div>
<button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4" data-lucide="search"></i>
</button>
</div>
<div className="p-4 space-y-6">

<div className="rounded-2xl border border-zinc-200 bg-white p-3">
<button className="w-full flex items-center justify-between px-3 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<div className="text-left">
<p className="text-xs text-zinc-500">Team</p>
<p className="text-sm font-medium leading-tight">Marketing</p>
</div>
</div>
<i className="h-4 w-4 text-zinc-500" data-lucide="chevron-down"></i>
</button>
<div className="mt-3 space-y-2">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<i className="h-4 w-4" data-lucide="star"></i>
</span>
<span className="text-sm">Marketing</span>
</div>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
<i className="h-4 w-4" data-lucide="star"></i>
</span>
<span className="text-sm">Personal</span>
</div>
<span className="inline-flex items-center gap-1 text-xs text-zinc-500 border border-zinc-200 rounded-lg px-1.5 py-0.5">
<i className="h-3 w-3" data-lucide="command"></i>
<span>2</span>
</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl border border-dashed border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
<span className="text-sm">Add new team</span>
</button>
</div>
</div>

<nav className="space-y-5">
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="message-square"></i>
              Notes
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="mail"></i>
              Email
            </a>
</div>
<div className="px-3 text-xs font-medium text-zinc-500">Records</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="building-2"></i>
              Companies
            </a>
<a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm bg-zinc-900 text-white shadow-sm" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
              People
            </a>
</div>
<div className="px-3 text-xs font-medium text-zinc-500">Collections</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="badge-dollar-sign"></i>
              VC Deal Flow
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100" href="#">
<i className="h-4 w-4 text-zinc-500" data-lucide="folder"></i>
              Projects
            </a>
</div>
</nav>

<div className="border-t border-zinc-200"></div>

<div className="px-2">
<div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-zinc-50 transition">
<img alt="" className="h-8 w-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;h=80&amp;fit=crop&amp;auto=format"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">alex.morgan@workspace.com</p>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-zinc-200 hover:bg-zinc-50">
<i className="h-4 w-4" data-lucide="settings"></i>
</button>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<i className="h-4 w-4" data-lucide="user-plus"></i>
              Invite
            </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 hidden lg:hidden" id="overlay"></div>

<main className="flex-1 lg:ml-0 ml-0 lg:pl-0 lg:pr-0">

<div className="lg:hidden sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-zinc-200">
<div className="h-14 px-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100" id="openSidebar">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="text-sm text-zinc-600">Workspace</div>
<div></div>
</div>
</div>
<section className="max-w-6xl mx-auto px-4 lg:px-10 py-10">
<div className="flex items-center justify-between">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none">Sidebar preview</h1>
<p className="mt-3 text-sm text-zinc-600">Responsive, accessible, and consistent with the system UI.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-sm">
<i className="h-4 w-4" data-lucide="wand-2"></i>
              Customize
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition" id="copyHtml">
<i className="h-4 w-4" data-lucide="copy"></i>
              Copy markup
            </button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<div className="flex items-center gap-2 text-zinc-700 text-sm">
<i className="h-4 w-4 text-zinc-500" data-lucide="info"></i>
              How it works
            </div>
<ul className="mt-3 space-y-2 text-sm text-zinc-600">
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">1</span>
                Semantic structure with clear groups, labels, and active states.
              </li>
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">2</span>
                Custom controls: checkmarks, badges, and hover outlines.
              </li>
<li className="flex items-start gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200 text-xs">3</span>
                Mobile overlay with smooth slide-in interactions.
              </li>
</ul>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<div className="flex items-center gap-2 text-zinc-700 text-sm">
<i className="h-4 w-4 text-zinc-500" data-lucide="ruler"></i>
              Design tokens
            </div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Typography</div>
<div className="mt-1 font-medium">Inter</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Radius</div>
<div className="mt-1 font-medium">xl / 2xl</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Stroke</div>
<div className="mt-1 font-medium">1.5</div>
</div>
<div className="rounded-xl border border-zinc-200 p-3">
<div className="text-xs text-zinc-500">Surface</div>
<div className="mt-1 font-medium">White / 50 + blur</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
