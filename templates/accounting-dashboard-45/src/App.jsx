import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="col-span-1 lg:col-span-4 bg-white rounded-2xl border border-orange-200/60 shadow-sm p-6 sm:p-8">
<div className="mb-8">
<div className="w-10 h-10 bg-orange-900 rounded-lg flex items-center justify-center mb-6">
<span className="text-white text-lg font-semibold tracking-tighter">QB</span>
</div>
<h1 className="text-xl font-semibold tracking-tight">Sign In</h1>
<p className="text-sm text-orange-500 mt-1.5">Access your dashboard.</p>
</div>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-orange-600 uppercase tracking-wider">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-orange-400 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full bg-white border border-orange-200 rounded-xl pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-900 transition-all placeholder-orange-400" placeholder="name@example.com" type="email" value="vasudevnain983@gmail.com"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-orange-600 uppercase tracking-wider">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-orange-400 text-lg" icon="solar:lock-password-linear"></iconify-icon>
</div>
<input className="w-full bg-white border border-orange-200 rounded-xl pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-900 transition-all placeholder-orange-400" placeholder="••••••••" type="password" value="Vasudev@7976"/>
</div>
</div>
<button className="w-full bg-orange-900 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-900 transition-all mt-4" type="button">
                    Login
                </button>
</form>
</div>

<div className="col-span-1 lg:col-span-4 bg-white rounded-2xl border border-orange-200/60 shadow-sm p-6 sm:p-8 flex flex-col h-full min-h-[400px]">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight">Parties</h2>
<button className="p-1.5 text-orange-400 hover:text-orange-900 rounded-lg hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-900/10">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
</div>
<div className="space-y-1.5 flex-1">
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 focus:bg-orange-50 transition-colors border border-transparent focus:border-orange-200 outline-none group text-left">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:text-orange-900 group-hover:bg-white border border-transparent group-hover:border-orange-200 group-focus:border-orange-200 transition-all">
<iconify-icon className="text-lg" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-900">Little Espresso Cafe</span>
</div>
<iconify-icon className="text-orange-300 group-hover:text-orange-900 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 focus:bg-orange-50 transition-colors border border-transparent focus:border-orange-200 outline-none group text-left">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:text-orange-900 group-hover:bg-white border border-transparent group-hover:border-orange-200 group-focus:border-orange-200 transition-all">
<iconify-icon className="text-lg" icon="solar:confetti-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-900">The PartY Room</span>
</div>
<iconify-icon className="text-orange-300 group-hover:text-orange-900 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 focus:bg-orange-50 transition-colors border border-transparent focus:border-orange-200 outline-none group text-left">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:text-orange-900 group-hover:bg-white border border-transparent group-hover:border-orange-200 group-focus:border-orange-200 transition-all">
<iconify-icon className="text-lg" icon="solar:basketball-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-900">SportsCo Melton</span>
</div>
<iconify-icon className="text-orange-300 group-hover:text-orange-900 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-2xl border border-orange-200/60 shadow-sm p-6 sm:p-8">
<div className="flex items-center gap-2 mb-6">
<button className="p-1.5 -ml-1.5 text-orange-400 hover:text-orange-900 rounded-lg hover:bg-orange-50 transition-colors focus:outline-none">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-xl font-semibold tracking-tight truncate">Little Espresso Cafe</h2>
</div>
<div className="border-2 border-dashed border-orange-200 hover:border-orange-300 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-orange-50/50 hover:bg-orange-50 transition-all cursor-pointer group outline-none focus-within:ring-2 focus-within:ring-orange-900/10 focus-within:border-orange-400">
<input className="sr-only" id="file-upload" type="file"/>
<label className="cursor-pointer flex flex-col items-center" htmlFor="file-upload">
<div className="w-12 h-12 rounded-full bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 mb-4 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:upload-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-900 mb-1">Attach PDF / Photo</span>
<span className="text-xs text-orange-500">Supports .pdf, .jpg, .png</span>
</label>
</div>
</div>

<div className="bg-white rounded-2xl border border-orange-200/60 shadow-sm p-6 sm:p-8">
<h2 className="text-xl font-semibold tracking-tight mb-5">Settings</h2>
<div className="space-y-5">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3 text-sm font-medium text-orange-700 group-hover:text-orange-900 transition-colors">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</div>
                            Language Option
                        </div>
<span className="text-xs font-medium text-orange-600 bg-orange-100/80 border border-orange-200/50 px-2.5 py-1 rounded-md">English</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 text-sm font-medium text-orange-700">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:moon-linear"></iconify-icon>
</div>
                            Dark Mode
                        </div>
<label className="relative flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-orange-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-orange-900/10 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-orange-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-900"></div>
</label>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 bg-white border border-orange-200 text-orange-900 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-900/10 transition-all shadow-sm">
<iconify-icon className="text-lg text-orange-500" icon="solar:add-square-linear"></iconify-icon>
                            Add Party
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
