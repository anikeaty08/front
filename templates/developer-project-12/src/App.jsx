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
      

<nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white">
<span className="font-semibold text-xs tracking-tighter">NX</span>
</div>
<span className="font-semibold tracking-tight text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Nexus</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Dashboard</a>
<a className="text-gray-900" href="#">Import</a>
<a className="hover:text-gray-900 transition-colors" href="#">Usage</a>
<a className="hover:text-gray-900 transition-colors" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 border border-white shadow-sm overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-start pt-16 pb-20 px-6">
<div className="max-w-3xl w-full space-y-12">

<div className="text-center space-y-3">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Let's deploy your project</h1>
<p className="text-base text-gray-500 max-w-lg mx-auto">
                    Import your existing code from a Git provider, upload a local folder, or use the command line interface.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="col-span-1 md:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700">
<iconify-icon icon="lucide:git-branch" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm text-gray-900">Import from Git</h3>
<p className="text-xs text-gray-500 mt-0.5">Connect a repository for continuous deployment.</p>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Recommended</span>
</div>
<div className="p-6 grid gap-3">
<button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Continue with GitHub</span>
</div>
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="group flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-left shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:gitlab" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Continue with GitLab</span>
</div>
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" directory="" multiple="" type="file" webkitdirectory=""/>
<div className="flex flex-col items-center gap-4 py-6">
<div className="rounded-full bg-gray-100 p-4 ring-8 ring-gray-50 group-hover:ring-white group-hover:bg-white group-hover:shadow-md transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="lucide:upload-cloud" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-gray-900">Upload Local Folder</p>
<p className="text-xs text-gray-500">Drag &amp; drop your project folder here</p>
</div>
</div>
<div className="w-full pt-4 border-t border-gray-100 mt-2">
<button className="w-full rounded-md bg-white border border-gray-200 py-1.5 text-xs font-medium text-gray-700 shadow-sm group-hover:border-gray-300 transition-colors">
                            Select Directory
                        </button>
</div>
</div>

<div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
<h3 className="font-medium text-sm text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="lucide:terminal" strokeWidth="1.5" width="16"></iconify-icon>
                            Command Line
                        </h3>
</div>
<div className="flex-grow p-5 flex flex-col justify-center bg-gray-950">
<div className="code-scroll overflow-x-auto">
<code className="text-xs font-mono text-gray-300 leading-relaxed block">
<span className="text-gray-500 select-none">$</span> npm i -g nexus-cli<br/>
<span className="text-gray-500 select-none">$</span> cd my-project<br/>
<span className="text-gray-500 select-none">$</span> nexus deploy
                            </code>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="lucide:copy" strokeWidth="1.5" width="12"></iconify-icon> Copy
                            </button>
<span className="text-gray-700">|</span>
<a className="text-xs text-blue-400 hover:text-blue-300 transition-colors" href="#">Read documentation →</a>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Clone a Template</h2>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1" href="#">
                        View all <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
<iconify-icon icon="lucide:triangle" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Next.js</p>
<p className="text-xs text-gray-500">App Router</p>
</div>
</div>
<p className="text-xs text-gray-500 line-clamp-2">
                            A minimal Next.js starter with App Router, Tailwind CSS, and TypeScript.
                        </p>
</div>

<div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Vue 3</p>
<p className="text-xs text-gray-500">Vite + Pinia</p>
</div>
</div>
<p className="text-xs text-gray-500 line-clamp-2">
                            The progressive JavaScript framework for building modern interfaces.
                        </p>
</div>

<div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
<iconify-icon icon="lucide:atom" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">React</p>
<p className="text-xs text-gray-500">Vite</p>
</div>
</div>
<p className="text-xs text-gray-500 line-clamp-2">
                            A fast, light-weight React starter powered by Vite bundler.
                        </p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-gray-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">
                © 2024 Nexus Inc. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Status</a>
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms</a>
<div className="h-3 w-px bg-gray-300"></div>
<div className="flex gap-3">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
