import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 z-20 hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight">FormCraft DS</span>
</div>
<span className="ml-auto text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">v2.4</span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
<div>
<h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Foundations</h3>
<ul className="space-y-0.5">
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-900 bg-slate-100 rounded-md" href="#colors"><i className="w-4 h-4 text-slate-500" data-lucide="palette"></i> Colors</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#typography"><i className="w-4 h-4 text-slate-400" data-lucide="type"></i> Typography</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#shadows"><i className="w-4 h-4 text-slate-400" data-lucide="box-select"></i> Shadows &amp; Radius</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#icons"><i className="w-4 h-4 text-slate-400" data-lucide="feather"></i> Iconography</a></li>
</ul>
</div>
<div>
<h3 className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Components</h3>
<ul className="space-y-0.5">
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#buttons"><i className="w-4 h-4 text-slate-400" data-lucide="mouse-pointer-2"></i> Buttons</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#inputs"><i className="w-4 h-4 text-slate-400" data-lucide="text-cursor-input"></i> Inputs</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#toggles"><i className="w-4 h-4 text-slate-400" data-lucide="toggle-left"></i> Toggles &amp; Checks</a></li>
<li><a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#cards"><i className="w-4 h-4 text-slate-400" data-lucide="layout"></i> Cards</a></li>
</ul>
</div>
</nav>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Design Team</p>
<p className="text-xs text-slate-400">View source</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto scroll-smooth">

<header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span>Design System</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
<span className="font-medium text-slate-900">Overview</span>
</div>
<div className="flex gap-3">
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><i className="w-5 h-5" data-lucide="moon"></i></button>
</div>
</header>
<div className="max-w-5xl mx-auto p-8 pb-32 space-y-16">

<div className="space-y-4">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900">Design System</h1>
<p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                    A collection of fundamental UI elements, design patterns, and guidelines used to build the FormCraft interface. Built with utility-first principles.
                </p>
</div>
<hr className="border-slate-200"/>

<section className="scroll-mt-24 space-y-6" id="colors">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Colors</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1"><i className="w-3 h-3" data-lucide="code"></i> Copy Token</button>
</div>
<p className="text-sm text-slate-500">Our neutral palette relies heavily on Slate for a crisp, technical feel. Pure black (#0f172a) is used for high contrast.</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="space-y-3">
<div className="h-24 rounded-lg bg-slate-50 border border-slate-200 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Slate 50</p>
<p className="text-xs text-slate-400">Backgrounds</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-lg bg-slate-200 border border-slate-300 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Slate 200</p>
<p className="text-xs text-slate-400">Borders</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-lg bg-slate-400 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Slate 400</p>
<p className="text-xs text-slate-400">Icons / Passive</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-lg bg-slate-500 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Slate 500</p>
<p className="text-xs text-slate-400">Secondary Text</p>
</div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-lg bg-slate-900 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Slate 900</p>
<p className="text-xs text-slate-400">Primary / Brand</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-600 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Action Blue</p>
<p className="text-xs text-slate-400">Links, Primary Actions</p>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-red-500 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Error Red</p>
<p className="text-xs text-slate-400">Destructive, Errors</p>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-green-500 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Success Green</p>
<p className="text-xs text-slate-400">Confirmations</p>
</div>
</div>
</div>
</section>
<hr className="border-slate-200"/>

<section className="scroll-mt-24 space-y-6" id="typography">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Typography</h2>
<p className="text-sm text-slate-500">Inter is our primary typeface. We use tighter tracking on larger headings to maintain a modern, engineered look.</p>
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-[200px_1fr] divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="p-6 bg-slate-50/50">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Scale</span>
</div>
<div className="p-6 space-y-8">
<div>
<p className="text-4xl font-semibold tracking-tight text-slate-900">Display 4xl</p>
<p className="text-xs font-mono text-slate-400 mt-1">36px - Tracking Tight - Semibold</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">Heading 2xl</p>
<p className="text-xs font-mono text-slate-400 mt-1">24px - Tracking Tight - Semibold</p>
</div>
<div>
<p className="text-lg font-medium text-slate-900">Subtitle lg</p>
<p className="text-xs font-mono text-slate-400 mt-1">18px - Medium</p>
</div>
<div>
<p className="text-base text-slate-900">Body Base</p>
<p className="text-xs font-mono text-slate-400 mt-1">16px - Regular - Leading Relaxed</p>
</div>
<div>
<p className="text-sm text-slate-500">Caption sm</p>
<p className="text-xs font-mono text-slate-400 mt-1">14px - Regular - Text Slate 500</p>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-wider text-slate-500">Label xs</p>
<p className="text-xs font-mono text-slate-400 mt-1">12px - Medium - Tracking Wider</p>
</div>
</div>
</div>
</div>
</section>
<hr className="border-slate-200"/>

<section className="scroll-mt-24 space-y-6" id="buttons">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Buttons</h2>
<div className="p-8 border border-slate-200 rounded-xl bg-white bg-grid-pattern">
<div className="flex flex-wrap items-center gap-6">

<div className="flex flex-col items-center gap-3">
<button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2">
                                Primary Action
                            </button>
<span className="text-xs font-mono text-slate-400">bg-slate-900</span>
</div>

<div className="flex flex-col items-center gap-3">
<button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter"></i>
                                Secondary
                            </button>
<span className="text-xs font-mono text-slate-400">border-slate-200</span>
</div>

<div className="flex flex-col items-center gap-3">
<button className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium rounded-md transition-all">
                                Ghost Button
                            </button>
<span className="text-xs font-mono text-slate-400">hover:bg-slate-100</span>
</div>

<div className="flex flex-col items-center gap-3">
<button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
<span className="text-xs font-mono text-slate-400">p-2</span>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 space-y-6" id="inputs">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Form Inputs</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-6 border border-slate-200 rounded-xl bg-white space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Default Input</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10 transition-all" placeholder="type something..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Active / Focus</label>
<input className="w-full px-3 py-2 bg-white border border-slate-400 ring-2 ring-slate-900/10 rounded-md text-sm shadow-sm text-slate-900 focus:outline-none" type="text" value="FormCraft"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Disabled</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-400 cursor-not-allowed" disabled="" type="text" value="Cannot edit this"/>
</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-white space-y-6">
<div>
<span className="block text-sm font-medium text-slate-700 mb-3">Custom Toggle</span>
<div className="flex gap-4">

<button className="w-10 h-6 bg-slate-900 rounded-full relative transition-colors cursor-pointer ring-offset-2 focus:ring-2 focus:ring-slate-900/20">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
</button>

<button className="w-10 h-6 bg-slate-200 rounded-full relative transition-colors cursor-pointer hover:bg-slate-300">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
</button>
</div>
</div>
<div>
<span className="block text-sm font-medium text-slate-700 mb-3">Custom Checkbox</span>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center group-hover:border-slate-400 transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600">Unchecked State</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<div className="w-5 h-5 rounded border border-slate-900 bg-slate-900 flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-900 font-medium">Checked State</span>
</label>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 space-y-6" id="cards">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Cards &amp; Containers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-b from-slate-200 to-slate-100 rounded-2xl opacity-50"></div>
<div className="relative h-40 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="box"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Base Card</p>
<p className="text-xs text-slate-400">rounded-xl • shadow-sm</p>
</div>
</div>
</div>
<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-b from-blue-100 to-slate-100 rounded-2xl opacity-50"></div>
<div className="relative h-40 bg-white rounded-xl border border-blue-200 p-6 shadow-md shadow-blue-900/5 flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="activity"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Active State</p>
<p className="text-xs text-slate-400">border-blue-200 • shadow-md</p>
</div>
</div>
</div>
<div className="relative h-40 bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between text-white">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
<i className="w-5 h-5 text-slate-300" data-lucide="terminal"></i>
</div>
<div>
<p className="text-sm font-medium">Dark Surface</p>
<p className="text-xs text-slate-400">bg-slate-900</p>
</div>
</div>
</div>
</section>
<hr className="border-slate-200"/>

<section className="scroll-mt-24 space-y-6" id="icons">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Iconography</h2>
<div className="flex items-start gap-8">
<div className="flex-1">
<p className="text-sm text-slate-500 mb-6">We use Lucide Icons with a consistent stroke width of 1.5px to maintain elegance and clarity at small sizes. Icons should generally be sized to 16px (w-4) or 20px (w-5).</p>
<div className="flex flex-wrap gap-4">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="home"></i>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="settings"></i>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="user"></i>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="bell"></i>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="calendar"></i>
</div>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="mail"></i>
</div>
</div>
</div>
<div className="w-64 p-4 bg-slate-50 rounded-lg border border-slate-200">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Usage Rules</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> Stroke width: 1.5px</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> Default Size: 16px (w-4)</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-green-500" data-lucide="check-circle"></i> Color: slate-400 / slate-900</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-red-500" data-lucide="x-circle"></i> No filled icons (mostly)</li>
</ul>
</div>
</div>
</section>
</div>

<footer className="border-t border-slate-200 py-12 bg-white">
<div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">FormCraft DS</span>
</div>
<p className="text-xs text-slate-400">© 2024 Design Systems Inc. Internal use only.</p>
</div>
</footer>
</main>


    </>
  );
}
