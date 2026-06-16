import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 shrink-0 gap-4">

<div className="flex items-center gap-4 text-zinc-400">
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="settings"></i></button>
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="scan-barcode"></i></button>
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="hash"></i></button>
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="tag"></i></button>
</div>

<div className="flex items-center flex-1 ml-4 relative">
<i className="w-5 h-5 text-zinc-500 absolute left-0" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-lg text-white placeholder-zinc-600 w-full pl-8 h-full focus:ring-0" placeholder="Search services, rooms, or items by name" type="text"/>
</div>

<div className="flex items-center gap-4 text-zinc-500">
<i className="w-4 h-4" data-lucide="minus"></i>
<i className="w-4 h-4" data-lucide="square"></i>
<i className="w-4 h-4 hover:text-red-500 cursor-pointer" data-lucide="x"></i>
</div>
</header>

<main className="flex flex-1 overflow-hidden">

<section className="flex flex-col flex-1 relative border-r border-zinc-800">

<div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-cyan-600 bg-zinc-900/50 text-base font-medium text-white">
<div className="col-span-6">Product / Service name</div>
<div className="col-span-2 text-right">Quantity</div>
<div className="col-span-2 text-right">Price</div>
<div className="col-span-2 text-right">Amount</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center text-zinc-500 gap-3">
<div className="opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] flex flex-col items-center">
<h2 className="text-2xl text-zinc-400 font-semibold tracking-tight mb-2">No items</h2>
<p className="text-lg text-zinc-600 text-center max-w-md">
                        Add accommodation charges, minibar items, or services to receipt using barcode, code or search by pressing F3 button
                    </p>
</div>
</div>

<div className="mt-auto bg-zinc-900 border-t border-zinc-800 p-6">
<div className="flex flex-col gap-2 max-w-md ml-auto">
<div className="flex justify-between text-lg text-zinc-400">
<span>Subtotal</span>
<span className="font-medium">0.00</span>
</div>
<div className="flex justify-between text-lg text-zinc-400">
<span>Tax</span>
<span className="font-medium">0.00</span>
</div>
<div className="border-t border-zinc-700 my-2"></div>
<div className="flex justify-between items-end text-white">
<span className="text-xl font-medium">Total</span>
<span className="text-3xl font-semibold tracking-tight">0.00</span>
</div>
</div>
</div>
</section>

<section className="w-[420px] bg-zinc-925 flex flex-col border-l border-zinc-800 shrink-0">

<div className="grid grid-cols-4 h-24 border-b border-zinc-800">
<button className="flex flex-col items-center justify-center gap-1 hover:bg-zinc-800 transition-colors border-r border-zinc-800 group">
<i className="w-8 h-8 text-zinc-500 group-hover:text-red-400 font-light" data-lucide="x"></i>
<span className="text-sm text-zinc-500">Delete</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 hover:bg-zinc-800 transition-colors border-r border-zinc-800 relative">
<span className="absolute top-1 left-2 text-xs text-zinc-500 font-mono">F3</span>
<i className="w-7 h-7 text-white" data-lucide="search"></i>
<span className="text-sm text-white">Search</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 hover:bg-zinc-800 transition-colors border-r border-zinc-800 relative">
<span className="absolute top-1 left-2 text-xs text-zinc-500 font-mono">F4</span>
<i className="w-7 h-7 text-white" data-lucide="shopping-basket"></i>
<span className="text-sm text-white">Quantity</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 hover:bg-zinc-800 transition-colors relative">
<span className="absolute top-1 left-2 text-xs text-zinc-500 font-mono">F8</span>
<i className="w-8 h-8 text-white" data-lucide="plus"></i>
<span className="text-sm text-white">New sale</span>
</button>
</div>

<div className="grid grid-cols-3 h-16 border-b border-zinc-800">
<button className="flex flex-col items-center justify-center relative hover:bg-zinc-800 transition-colors border-r border-zinc-800 border-b-2 border-b-green-600">
<span className="absolute top-1 left-1 text-xs text-zinc-500 font-mono">F12</span>
<span className="text-base text-white font-medium">Cash</span>
</button>
<button className="flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors border-r border-zinc-800 border-b-2 border-b-cyan-600">
<span className="text-base text-white font-medium">Card</span>
</button>
<button className="flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors border-b-2 border-b-cyan-600">
<span className="text-base text-white font-medium">Check</span>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">

<div className="flex flex-col items-center">
<i className="w-32 h-32 stroke-1" data-lucide="hexagon"></i>
<span className="text-4xl font-semibold tracking-tight mt-4">aronium</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 grid-rows-4 h-[380px] border-t border-zinc-800">

<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="archive"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Cash drawer</span>
</button>
<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group relative">

<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="concierge-bell"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Room Svc</span>
</button>
<div className="col-span-2 border-b border-zinc-800 bg-zinc-900/50"></div> 

<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group relative">
<span className="absolute top-1 left-1 text-[10px] text-zinc-600 font-mono">F2</span>
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="percent"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Discount</span>
</button>
<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="message-square"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Comment</span>
</button>
<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="user"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Guest</span>
</button>
<button className="border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="more-horizontal"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">...</span>
</button>

<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<span className="text-xl font-semibold text-white mb-0 leading-none">F9</span>
<span className="text-xs text-zinc-300 font-medium">Save sale</span>
</button>
<button className="border-r border-b border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="rotate-ccw"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Refund</span>
</button>

<button className="col-span-2 row-span-1 border-b border-zinc-800 bg-emerald-700 hover:bg-emerald-600 flex flex-col items-center justify-center gap-0 transition-colors">
<span className="text-2xl font-bold text-white tracking-tight">F10</span>
<span className="text-sm text-emerald-100 font-medium">Payment</span>
</button>

<button className="border-r border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="lock"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Lock</span>
</button>
<button className="border-r border-zinc-800 hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group relative">
<span className="absolute top-1 left-1 text-[10px] text-zinc-600 font-mono">F7</span>
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="arrow-right-left"></i>
<span className="text-xs text-zinc-400 group-hover:text-white">Transfer</span>
</button>
<button className="border-r border-zinc-800 bg-red-700 hover:bg-red-600 flex flex-col items-center justify-center gap-1 group transition-colors">
<i className="w-6 h-6 text-white" data-lucide="trash-2"></i>
<span className="text-xs text-white font-medium">Void order</span>
</button>
<button className="hover:bg-zinc-800 flex flex-col items-center justify-center gap-1 group">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white" data-lucide="more-horizontal"></i>
</button>
</div>
</section>
</main>


    </>
  );
}
