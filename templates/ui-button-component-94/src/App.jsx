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
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex flex-col w-64 border-r border-zinc-200 h-screen sticky top-0 overflow-y-auto bg-zinc-50/30 backdrop-blur-xl z-20">
<div className="p-6 border-b border-zinc-100">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white rounded flex items-center justify-center text-xs font-semibold tracking-tighter group-hover:bg-blue-600 transition-colors">DS</div>
<span className="font-medium text-sm tracking-tight text-zinc-900">Design System</span>
</a>
</div>
<nav className="flex-1 p-4 space-y-8">
<div>
<h3 className="px-2 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Примитивы</h3>
<ul className="space-y-0.5">
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Color</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Typography</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Iconography</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Layout</a></li>
</ul>
</div>
<div>
<h3 className="px-2 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Компоненты</h3>
<ul className="space-y-0.5">
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Avatar</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Badge</a></li>
<li>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-blue-600 bg-blue-50/50 rounded-md" href="#">
<span>Button</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Checkbox</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Input</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Modal</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Select</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Switch</a></li>
<li><a className="block px-2 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">Table</a></li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 w-full min-w-0">

<header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer transition-colors">Components</span>
<span className="iconify text-zinc-300" data-icon="lucide:slash" data-width="12"></span>
<span className="font-medium text-zinc-900">Button</span>
</div>
<div className="flex gap-2">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors p-2 rounded-md hover:bg-zinc-100">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors p-2 rounded-md hover:bg-zinc-100">
<span className="iconify" data-icon="lucide:share" data-width="18"></span>
</button>
</div>
</div>

<div className="max-w-5xl mx-auto px-6">
<div className="flex gap-6 -mb-px">
<a className="border-b-2 border-blue-600 text-blue-600 pb-3 text-sm font-medium" href="#">Examples</a>
<a className="border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 pb-3 text-sm font-medium transition-colors" href="#">Code</a>
<a className="border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 pb-3 text-sm font-medium transition-colors" href="#">Props</a>
<a className="border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 pb-3 text-sm font-medium transition-colors" href="#">Accessibility</a>
</div>
</div>
</header>
<div className="max-w-5xl mx-auto px-6 py-12">

<div className="mb-12">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Button</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
                        Кнопка запускает событие или действие. Они позволяют пользователям знать, что произойдет дальше.
                    </p>
</div>

<div className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm mb-16">
<div className="flex flex-col md:flex-row min-h-[400px]">

<div className="flex-1 bg-grid-pattern border-b md:border-b-0 md:border-r border-zinc-200 p-12 flex items-center justify-center relative">

<div className="absolute top-4 left-4">
<span className="text-xs font-mono text-zinc-400">Preview</span>
</div>

<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 transition-all active:scale-[0.98]">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                                Create Project
                            </button>
</div>

<div className="w-full md:w-80 bg-white p-6 flex flex-col gap-8">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Appearance</h4>
<div className="space-y-3">
<label className="flex items-center justify-between group cursor-pointer">
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Type</span>
<div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-200 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
<span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"></span>
</div>
</label>
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-600">Variant</span>
<select className="bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5 pl-3 pr-8 w-32 appearance-none cursor-pointer outline-none">
<option>Primary</option>
<option>Secondary</option>
<option>Ghost</option>
<option>Destructive</option>
</select>
</div>
<div className="flex items-center justify-between pt-2">
<span className="text-sm text-zinc-600">Size</span>
<div className="flex bg-zinc-100 p-0.5 rounded-lg">
<button className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-500 hover:text-zinc-900">S</button>
<button className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-zinc-900 shadow-sm border border-black/5">M</button>
<button className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-500 hover:text-zinc-900">L</button>
</div>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-6">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">State</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white group-hover:border-blue-500 flex items-center justify-center transition-colors">

</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 select-none">Disabled</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-300 bg-white group-hover:border-blue-500 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 select-none">Loading</span>
</label>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 p-4 flex items-center justify-between border-t border-zinc-800">
<code className="text-sm font-mono text-blue-300">
<span className="text-purple-400">import</span> { Button } <span className="text-purple-400">from</span> <span className="text-green-400">'@design/ui'</span>
</code>
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
</div>

<div className="space-y-16">

<section>
<div className="flex items-center gap-2 mb-6">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Варианты</h2>
<span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs font-medium border border-zinc-200">Styles</span>
</div>
<p className="text-zinc-500 mb-8 max-w-3xl text-sm">
                            Используйте стиль кнопки, который лучше всего соответствует контексту вашего интерфейса. Основная кнопка должна быть одна на экран.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="space-y-3">
<div className="h-32 rounded-lg border border-zinc-200 bg-zinc-50/50 flex items-center justify-center">
<button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Default</button>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-sm font-medium text-zinc-900">Default</span>
<span className="text-xs font-mono text-zinc-400">bg-zinc-900</span>
</div>
</div>

<div className="space-y-3">
<div className="h-32 rounded-lg border border-zinc-200 bg-zinc-50/50 flex items-center justify-center">
<button className="rounded-lg bg-white border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm">Secondary</button>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-sm font-medium text-zinc-900">Secondary</span>
<span className="text-xs font-mono text-zinc-400">bg-white</span>
</div>
</div>

<div className="space-y-3">
<div className="h-32 rounded-lg border border-zinc-200 bg-zinc-50/50 flex items-center justify-center">
<button className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors">Outline</button>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-sm font-medium text-zinc-900">Outline</span>
<span className="text-xs font-mono text-zinc-400">border-zinc-300</span>
</div>
</div>

<div className="space-y-3">
<div className="h-32 rounded-lg border border-zinc-200 bg-zinc-50/50 flex items-center justify-center">
<button className="rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 transition-colors">Ghost</button>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-sm font-medium text-zinc-900">Ghost</span>
<span className="text-xs font-mono text-zinc-400">bg-transparent</span>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-zinc-100"></div>

<section>
<div className="flex items-center gap-2 mb-6">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Семантика</h2>
<span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 text-xs font-medium border border-zinc-200">Colors</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Destructive</h3>
<div className="flex gap-4 items-center flex-wrap">
<button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 shadow-sm transition-colors">Delete Account</button>
<button className="rounded-lg bg-red-50 text-red-600 border border-red-100 px-4 py-2 text-sm font-medium hover:bg-red-100 transition-colors">Remove</button>
<button className="rounded-lg text-red-600 px-4 py-2 text-sm font-medium hover:bg-red-50 transition-colors">Cancel</button>
</div>
</div>

<div className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Functional</h3>
<div className="flex gap-4 items-center flex-wrap">
<button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-colors">Save Changes</button>
<button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 shadow-sm transition-colors">Published</button>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-zinc-100"></div>

<section>
<h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-6">Иконки</h2>
<div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8">
<div className="flex flex-wrap gap-8 items-center justify-center">

<button className="inline-flex items-center gap-2 rounded-lg bg-white border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                                    Email Login
                                </button>

<button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 transition-colors">
                                    Get Started
                                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>

<div className="flex gap-2">
<button className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
<button className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="pb-20">
<h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-6">Свойства</h2>
<div className="border border-zinc-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="px-6 py-3 font-medium text-zinc-500 w-1/4">Prop</th>
<th className="px-6 py-3 font-medium text-zinc-500 w-1/4">Type</th>
<th className="px-6 py-3 font-medium text-zinc-500 w-1/4">Default</th>
<th className="px-6 py-3 font-medium text-zinc-500">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 bg-white">
<tr>
<td className="px-6 py-4 font-mono text-xs text-purple-600">variant</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">"primary" | "secondary" | "ghost"</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">"primary"</td>
<td className="px-6 py-4 text-zinc-600">Визуальный стиль кнопки.</td>
</tr>
<tr>
<td className="px-6 py-4 font-mono text-xs text-purple-600">size</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">"sm" | "md" | "lg"</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">"md"</td>
<td className="px-6 py-4 text-zinc-600">Размер компонента. Влияет на паддинги и шрифт.</td>
</tr>
<tr>
<td className="px-6 py-4 font-mono text-xs text-purple-600">isLoading</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">boolean</td>
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">false</td>
<td className="px-6 py-4 text-zinc-600">Показывает спиннер и блокирует нажатие.</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
</main>
</div>

    </>
  );
}
