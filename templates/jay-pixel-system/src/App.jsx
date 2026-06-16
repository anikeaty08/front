import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50 backdrop-blur-sm fixed lg:sticky top-0 z-40 h-auto lg:h-screen flex flex-col shrink-0">
<div className="p-6 border-b border-slate-200/50 flex items-center gap-3">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-semibold text-xs tracking-tighter">N</div>
<span className="font-semibold text-sm tracking-tight">Nexus DS</span>
<span className="ml-auto text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-medium">v2.0</span>
</div>
<nav className="flex-1 overflow-y-auto p-4 space-y-8 hidden lg:block">

<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3 px-2">Foundations</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#tokens">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:palette-2-linear"></iconify-icon>
                            Colors
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#typography">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:text-field-linear"></iconify-icon>
                            Typography
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#spacing">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:ruler-linear"></iconify-icon>
                            Spacing &amp; Radius
                        </a>
</li>
</ul>
</div>

<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3 px-2">Components</h3>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-900 bg-white shadow-sm border border-slate-200 rounded-md" href="#buttons">
<iconify-icon className="text-indigo-600" icon="solar:cursor-square-linear"></iconify-icon>
                            Buttons
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#inputs">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:pen-new-square-linear"></iconify-icon>
                            Input Fields
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#cards">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:card-2-linear"></iconify-icon>
                            Cards &amp; Modals
                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors group" href="#toggles">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:settings-linear"></iconify-icon>
                            Selection Controls
                        </a>
</li>
</ul>
</div>
</nav>

<div className="lg:hidden p-4 overflow-x-auto whitespace-nowrap border-b border-slate-100 flex gap-4">
<a className="text-sm font-medium text-slate-600" href="#tokens">Tokens</a>
<a className="text-sm font-medium text-slate-900" href="#buttons">Components</a>
<a className="text-sm font-medium text-slate-600" href="#cards">Layouts</a>
</div>
</aside>

<main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 lg:px-12 lg:py-16">

<header className="mb-16">
<div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
<span>Documentation</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-900 font-medium">Overview</span>
</div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Design System</h1>
<p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                A unified language for building consistent, accessible, and performant interfaces. 
                Built with React, TypeScript, and Tailwind CSS.
            </p>
<div className="mt-8 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                    WCAG 2.1 AA
                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    TypeScript Strict
                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                    v2.0.4
                </span>
</div>
</header>
<hr className="border-slate-200 mb-16"/>

<section className="mb-20 scroll-mt-24" id="tokens">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
<iconify-icon icon="solar:palette-2-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Color Palette</h2>
</div>
<p className="text-slate-500 mb-8 max-w-3xl">
                Semantic color tokens designed for logical application across UI elements.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="space-y-3">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-900">Slate (Neutral)</span>
<span className="text-xs text-slate-400 font-mono">text-slate-*</span>
</div>
<div className="space-y-1">
<div className="h-10 w-full rounded bg-slate-50 border border-slate-100 flex items-center px-3 justify-between text-xs text-slate-500"><span>50</span><span className="font-mono opacity-50">#F8FAFC</span></div>
<div className="h-10 w-full rounded bg-slate-100 flex items-center px-3 justify-between text-xs text-slate-600"><span>100</span><span className="font-mono opacity-50">#F1F5F9</span></div>
<div className="h-10 w-full rounded bg-slate-200 flex items-center px-3 justify-between text-xs text-slate-700"><span>200</span><span className="font-mono opacity-50">#E2E8F0</span></div>
<div className="h-10 w-full rounded bg-slate-500 flex items-center px-3 justify-between text-xs text-white"><span>500</span><span className="font-mono opacity-70">#64748B</span></div>
<div className="h-10 w-full rounded bg-slate-900 flex items-center px-3 justify-between text-xs text-white"><span>900</span><span className="font-mono opacity-70">#0F172A</span></div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-900">Indigo (Brand)</span>
<span className="text-xs text-slate-400 font-mono">text-indigo-*</span>
</div>
<div className="space-y-1">
<div className="h-10 w-full rounded bg-indigo-50 border border-indigo-100 flex items-center px-3 justify-between text-xs text-indigo-600"><span>50</span><span className="font-mono opacity-50">#EEF2FF</span></div>
<div className="h-10 w-full rounded bg-indigo-100 flex items-center px-3 justify-between text-xs text-indigo-700"><span>100</span><span className="font-mono opacity-50">#E0E7FF</span></div>
<div className="h-10 w-full rounded bg-indigo-500 flex items-center px-3 justify-between text-xs text-white"><span>500</span><span className="font-mono opacity-70">#6366F1</span></div>
<div className="h-10 w-full rounded bg-indigo-600 flex items-center px-3 justify-between text-xs text-white"><span>600</span><span className="font-mono opacity-70">#4F46E5</span></div>
<div className="h-10 w-full rounded bg-indigo-900 flex items-center px-3 justify-between text-xs text-white"><span>900</span><span className="font-mono opacity-70">#312E81</span></div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-slate-900">Functional</span>
</div>
<div className="space-y-1">
<div className="h-10 w-full rounded bg-red-500 flex items-center px-3 justify-between text-xs text-white"><span>Error</span><span className="font-mono opacity-70">red-500</span></div>
<div className="h-10 w-full rounded bg-emerald-500 flex items-center px-3 justify-between text-xs text-white"><span>Success</span><span className="font-mono opacity-70">emerald-500</span></div>
<div className="h-10 w-full rounded bg-amber-400 flex items-center px-3 justify-between text-xs text-amber-900"><span>Warning</span><span className="font-mono opacity-70">amber-400</span></div>
</div>
</div>
</div>
</section>

<section className="mb-20 scroll-mt-24" id="typography">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:text-field-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Typography Scale</h2>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex justify-between items-center">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Preview</span>
<span className="text-xs text-slate-400 font-mono">Font: Inter</span>
</div>
<div className="p-8 space-y-8 bg-white">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
<span className="text-xs text-slate-400 font-mono col-span-1">text-5xl / bold</span>
<h1 className="text-5xl font-bold tracking-tight text-slate-900 col-span-3">Design Systems</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
<span className="text-xs text-slate-400 font-mono col-span-1">text-3xl / semi</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 col-span-3">Component Library</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
<span className="text-xs text-slate-400 font-mono col-span-1">text-xl / medium</span>
<h3 className="text-xl font-medium tracking-tight text-slate-900 col-span-3">The quick brown fox jumps over</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
<span className="text-xs text-slate-400 font-mono col-span-1">text-base / regular</span>
<p className="text-base text-slate-600 leading-relaxed col-span-3">
                            Typography tokens ensure consistency across the application. 
                            We use a fluid scale that adapts to viewport size, maintaining vertical rhythm and readability.
                        </p>
</div>
</div>
</div>
</section>

<section className="mb-20 scroll-mt-24" id="buttons">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:cursor-square-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Button Component</h2>
</div>
<div className="hidden sm:flex gap-2 text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
<span>Button.tsx</span>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden mb-6">
<div className="p-10 flex flex-col items-center justify-center gap-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-50">

<div className="flex flex-wrap items-center justify-center gap-4">
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none">
                            Primary Action
                        </button>
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm shadow-indigo-200 active:scale-95">
<iconify-icon className="mr-2 text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Create New
                        </button>
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-md opacity-50 cursor-not-allowed" disabled="">
                            Disabled
                        </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-4">
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-1 active:bg-slate-100">
                            Secondary
                        </button>
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-md hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-100">
<iconify-icon className="mr-2" icon="solar:upload-linear"></iconify-icon>
                            Upload
                        </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-4">
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-slate-600 transition-colors rounded-md hover:bg-slate-100 hover:text-slate-900">
                            Ghost Button
                        </button>
<button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-red-600 transition-colors rounded-md hover:bg-red-50 hover:text-red-700">
<iconify-icon className="mr-2" icon="solar:trash-bin-linear"></iconify-icon>
                            Delete
                        </button>
</div>
</div>

<div className="bg-[#282c34] p-4 overflow-x-auto border-t border-slate-200">
<pre className="text-sm font-mono leading-relaxed"><code className="language-tsx"><span className="code-syntax-keyword">import</span> { Button } <span className="code-syntax-keyword">from</span> <span className="code-syntax-string">'@nexus/ui'</span>;

<span className="code-syntax-keyword">export const</span> <span className="code-syntax-func">ActionGroup</span> = () =&gt; (
  <span className="code-syntax-tag">&lt;div</span> <span className="code-syntax-attr">className</span>=<span className="code-syntax-string">"flex gap-4"</span><span className="code-syntax-tag">&gt;</span>
    <span className="code-syntax-tag">&lt;Button</span> <span className="code-syntax-attr">variant</span>=<span className="code-syntax-string">"primary"</span><span className="code-syntax-tag">&gt;</span>Save Changes<span className="code-syntax-tag">&lt;/Button&gt;</span>
    <span className="code-syntax-tag">&lt;Button</span> <span className="code-syntax-attr">variant</span>=<span className="code-syntax-string">"secondary"</span> <span className="code-syntax-attr">icon</span>=<span className="code-syntax-string">"upload"</span><span className="code-syntax-tag">&gt;</span>Export<span className="code-syntax-tag">&lt;/Button&gt;</span>
  <span className="code-syntax-tag">&lt;/div&gt;</span>
);</code></pre>
</div>
</div>

<div className="overflow-x-auto border border-slate-200 rounded-lg">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
<tr>
<th className="px-6 py-3 font-medium">Prop</th>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium">Default</th>
<th className="px-6 py-3 font-medium">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 font-mono text-indigo-600">variant</td>
<td className="px-6 py-4 font-mono text-slate-500">'primary' | 'secondary' | 'ghost'</td>
<td className="px-6 py-4 font-mono text-slate-400">'primary'</td>
<td className="px-6 py-4 text-slate-600">Visual style of the button</td>
</tr>
<tr>
<td className="px-6 py-4 font-mono text-indigo-600">size</td>
<td className="px-6 py-4 font-mono text-slate-500">'sm' | 'md' | 'lg'</td>
<td className="px-6 py-4 font-mono text-slate-400">'md'</td>
<td className="px-6 py-4 text-slate-600">Controls padding and font size</td>
</tr>
<tr>
<td className="px-6 py-4 font-mono text-indigo-600">isLoading</td>
<td className="px-6 py-4 font-mono text-slate-500">boolean</td>
<td className="px-6 py-4 font-mono text-slate-400">false</td>
<td className="px-6 py-4 text-slate-600">Shows loading spinner and disables interaction</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-20 scroll-mt-24" id="inputs">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:pen-new-square-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Input Fields</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm" placeholder="name@company.com" type="email"/>
</div>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="block text-sm font-medium text-slate-700">Password</label>
<a className="text-xs text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-10 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm" type="password" value="SuperSecret123"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Invalid State</label>
<div className="relative">
<input className="block w-full px-3 py-2 border border-red-300 rounded-lg text-sm text-red-900 placeholder:text-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-sm bg-red-50/20" type="text" value="invalid-email"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-red-500">
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
</div>
<p className="mt-1.5 text-xs text-red-500">Please enter a valid email address.</p>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-1.5">Disabled State</label>
<input className="block w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-500 bg-slate-100 cursor-not-allowed select-none" disabled="" type="text" value="License Key: XC9-221"/>
</div>
</div>
</div>
</section>

<section className="mb-20 scroll-mt-24" id="cards">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:card-2-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Container Primitives</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 bg-white">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Integration Card</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        A standard container used to group related content. Features hover states, padding tokens, and border radii.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2m ago
                        </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 users
                        </span>
</div>
</div>

<div className="relative border border-slate-200 rounded-xl bg-slate-50 p-6 flex items-center justify-center min-h-[240px] overflow-hidden">
<div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px]"></div>
<div className="relative bg-white rounded-lg shadow-xl border border-slate-200 w-full max-w-sm p-6 transform transition-transform scale-100">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Delete Project?</h3>
<p className="text-sm text-slate-500 mt-1">This action cannot be undone. This will permanently delete the project and remove all collaborator access.</p>
</div>
<div className="flex justify-end gap-3">
<button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">Cancel</button>
<button className="px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md shadow-sm transition-colors">Confirm Delete</button>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="toggles">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:settings-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Selection Controls</h2>
</div>
<div className="border border-slate-200 rounded-xl p-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Checkbox</h4>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 checked:bg-indigo-600 checked:border-indigo-600 transition-all" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0 text-base" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Selected Option</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 checked:bg-indigo-600 checked:border-indigo-600 transition-all hover:border-indigo-400" type="checkbox"/>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Unselected Option</span>
</label>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Toggle Switch</h4>
<label className="flex items-center gap-3 cursor-pointer">
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</div>
<span className="text-sm text-slate-700">Notifications</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</div>
<span className="text-sm text-slate-700">Dark Mode</span>
</label>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Range Slider</h4>
<div className="w-full">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-slate-500">Opacity</span>
<span className="text-xs font-mono text-slate-500">75%</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="75"/>
</div>
</div>
</div>
</section>
</main>

<footer className="lg:hidden border-t border-slate-200 p-6 text-center text-xs text-slate-400">
        © 2023 Nexus Design System
    </footer>

    </>
  );
}
