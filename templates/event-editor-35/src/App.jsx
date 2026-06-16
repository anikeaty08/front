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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 h-[60px] flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-6">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">EV</span>
</div>
</div>
<div className="h-4 w-px bg-gray-200 hidden sm:block"></div>

<div className="hidden sm:flex items-center gap-3">
<span className="text-sm font-medium text-gray-900 hover:text-black cursor-pointer border-b border-dashed border-gray-300 pb-0.5">Neon Nights Festival 2024</span>
<span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">Draft</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-1.5 text-gray-500">
<iconify-icon className="text-sm" icon="solar:cloud-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Saved just now</span>
</div>

<div className="hidden lg:flex items-center bg-gray-100 p-0.5 rounded-lg border border-gray-200/50">
<button className="px-2.5 py-1 rounded-md bg-white shadow-sm text-gray-900 flex items-center justify-center">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-2.5 py-1 rounded-md text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:block px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
                    Discard
                </button>
<button className="px-4 py-1.5 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Publish Event
                </button>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-[1440px] mx-auto flex gap-8 px-6 lg:px-8 py-8 items-start">

<div className="flex-1 min-w-0 flex flex-col gap-8 pb-20">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Event Setup</h1>
<p className="text-sm text-gray-500 mt-1">Configure your event details, tickets, and policies.</p>
</div>

<div className="flex flex-col gap-2 w-full sm:w-48 shrink-0">
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-gray-900">Setup Progress</span>
<span className="text-gray-500">6/9</span>
</div>
<div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-black rounded-full" style={{width: '66%'}}></div>
</div>
</div>
</div>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="basics">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-gray-900">Event Basics</h2>
<p className="text-sm text-gray-500 mt-0.5">Core information for public discovery.</p>
</div>
</div>
<div className="p-6 flex flex-col gap-6">

<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1.5">Event Name</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-ring sm:text-sm transition-all" placeholder="e.g. Summer Music Festival" type="text" value="Neon Nights Festival 2024"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Short Description</label>
<textarea className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-ring sm:text-sm transition-all resize-none" rows="2">An immersive electronic music experience featuring top global artists.</textarea>
<div className="mt-1.5 flex justify-between items-center text-xs text-gray-500">
<span>Appears on search and social previews.</span>
<span className="font-medium">68 / 140</span>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
<div className="relative">
<button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-ring sm:text-sm" type="button">
<span className="block truncate">Music Festival</span>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="datetime">
<div className="px-6 py-5 border-b border-gray-100">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Date &amp; Time</h2>
</div>
<div className="p-6 flex flex-col gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Starts</label>
<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-black">
<div className="relative flex flex-grow items-stretch focus-within:z-10">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<input className="block w-full rounded-none rounded-l-md border-0 py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" type="text" value="Aug 12, 2024"/>
</div>
<input className="relative -ml-px block w-24 rounded-none rounded-r-md border-0 border-l border-gray-300 py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm text-center" type="text" value="20:00"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Ends</label>
<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-black">
<div className="relative flex flex-grow items-stretch focus-within:z-10">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<input className="block w-full rounded-none rounded-l-md border-0 py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" type="text" value="Aug 13, 2024"/>
</div>
<input className="relative -ml-px block w-24 rounded-none rounded-r-md border-0 border-l border-gray-300 py-2 px-3 text-gray-900 focus:ring-0 sm:text-sm text-center" type="text" value="04:00"/>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Timezone</label>
<div className="relative w-full md:w-1/2">
<button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-ring sm:text-sm" type="button">
<span className="block truncate">Europe/Berlin (GMT+2)</span>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</button>
</div>
<p className="mt-2 text-xs text-gray-500">Auto-detected based on venue location. <span className="text-gray-900 font-medium border-b border-gray-300 border-dashed cursor-pointer">Change</span></p>
</div>

<div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded shadow-sm flex flex-col items-center justify-center border border-gray-200">
<span className="text-[10px] font-semibold text-red-500 uppercase leading-none">Aug</span>
<span className="text-sm font-semibold text-gray-900 leading-tight">12</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Sat, Aug 12 • 20:00 — Sun, Aug 13 • 04:00</p>
<p className="text-xs text-gray-500">Doors open at 19:00</p>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="tickets">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-gray-900">Tickets</h2>
<p className="text-sm text-gray-500 mt-0.5">Manage pricing and availability.</p>
</div>
</div>
<div className="p-6 flex flex-col gap-4">

<div className="group relative flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors">
<div className="mt-2 cursor-grab text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-xs font-medium text-gray-500 mb-1">Ticket Name</label>
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus-ring sm:text-sm" type="text" value="Early Bird General Admission"/>
</div>
<div className="md:col-span-3">
<label className="block text-xs font-medium text-gray-500 mb-1">Price</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span className="text-gray-500 sm:text-sm">€</span>
</div>
<input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus-ring sm:text-sm text-right" type="text" value="45.00"/>
</div>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-gray-500 mb-1">Qty</label>
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus-ring sm:text-sm text-right" type="number" value="500"/>
</div>
<div className="md:col-span-2 flex flex-col justify-end">

<div className="py-1.5 flex items-center justify-end">
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">On Sale</span>
</div>
</div>
</div>
<button className="mt-2 text-gray-400 hover:text-red-500 transition-colors flex items-center justify-center p-1 rounded-md hover:bg-red-50">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<button className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" type="button">
<div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-900">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add Ticket Tier
                        </div>
</button>
</div>
</section>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="lineup">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-gray-900">Lineup &amp; Artists</h2>
</div>
</div>
<div className="p-8 flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 ring-1 ring-gray-200">
<iconify-icon className="text-xl text-gray-400" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">No lineup added yet</h3>
<p className="text-sm text-gray-500 mb-4 max-w-sm">Add headliners and supporting acts to display on the event page.</p>
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon icon="solar:plus-linear"></iconify-icon>
                        Add Artist
                    </button>
</div>
</section>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="accessibility">
<div className="px-6 py-5 border-b border-gray-100">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Accessibility Settings</h2>
</div>
<div className="p-6 flex flex-col gap-5">

<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Wheelchair Accessible Venue</p>
<p className="text-xs text-gray-500 mt-0.5">Indicates step-free access and accessible facilities.</p>
</div>

<button aria-checked="true" className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-black transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" role="switch" type="button">
<span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<div className="h-px bg-gray-100 w-full"></div>

<div className="space-y-4">
<div className="flex items-start">
<div className="flex h-5 items-center">
<input checked="" className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" id="acc-seating" type="checkbox"/>
</div>
<div className="ml-3 text-sm leading-5">
<label className="font-medium text-gray-900" htmlFor="acc-seating">Dedicated Accessible Seating</label>
<p className="text-gray-500 text-xs mt-0.5">Specific zones reserved for attendees requiring assistance.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" id="sign-lang" type="checkbox"/>
</div>
<div className="ml-3 text-sm leading-5">
<label className="font-medium text-gray-900" htmlFor="sign-lang">Sign Language Interpretation</label>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden" id="media">
<div className="px-6 py-5 border-b border-gray-100">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Media</h2>
</div>
<div className="p-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Hero Image</label>
<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="text-center">
<iconify-icon className="mx-auto text-3xl text-gray-300 group-hover:text-gray-400 transition-colors" icon="solar:gallery-add-linear" strokeWidth="1"></iconify-icon>
<div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
<label className="relative cursor-pointer rounded-md bg-transparent font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-gray-700">
<span>Upload a file</span>
<input className="sr-only" type="file"/>
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs leading-5 text-gray-500">PNG, JPG, GIF up to 10MB</p>
</div>
</div>
</div>
</section>
</div>

<aside className="w-[280px] shrink-0 sticky top-[92px] h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar hidden xl:flex flex-col gap-6 pl-4 border-l border-gray-100">
<div>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Event Health</h3>
<ul className="space-y-3">

<li className="flex items-start gap-2.5 p-3 rounded-lg bg-red-50/50 border border-red-100">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-red-800">Venue is required</p>
<p className="text-xs text-red-600/80 mt-0.5">Cannot publish without location.</p>
</div>
</li>

<li className="flex items-start gap-2.5 p-3 rounded-lg bg-yellow-50/50 border border-yellow-100">
<iconify-icon className="text-yellow-600 mt-0.5 shrink-0" icon="solar:warning-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-yellow-800">No cover image</p>
<p className="text-xs text-yellow-700/80 mt-0.5">Events with images sell 40% more.</p>
</div>
</li>

<li className="flex items-start gap-2.5 p-3">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-600 line-through decoration-gray-300">Basic details added</p>
</div>
</li>
</ul>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
<p className="text-xs font-medium text-gray-900 mb-1">Smart Defaults Active</p>
<p className="text-xs text-gray-500">Timezone and currency are auto-configured based on your profile.</p>
</div>
</div>
</aside>
</main>

    </>
  );
}
