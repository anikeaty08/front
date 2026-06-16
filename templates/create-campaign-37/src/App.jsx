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
      

<aside className="w-64 fixed inset-y-0 left-0 bg-white border-r border-gray-200 flex flex-col z-10 hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="text-lg font-semibold tracking-tighter text-black flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">MC</span>
</div>
                MAILCOMP
            </div>
</div>
<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="1.2em" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md transition-colors" href="#">
<iconify-icon height="1.2em" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Campaigns
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="1.2em" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Audience
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="1.2em" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                Analytics
            </a>
<div className="pt-6 mt-6 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="1.2em" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
                    Settings
                </a>
</div>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
<p className="text-xs text-gray-500 truncate">john@example.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:pl-64 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" width="1.5em"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Campaigns</a>
<iconify-icon height="1em" icon="solar:alt-arrow-right-linear" width="1em"></iconify-icon>
<span className="text-gray-900 truncate max-w-[200px]">Create New</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 transition-all">
                    Discard
                </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 transition-all">
                    Save Draft
                </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 transition-all flex items-center gap-2">
<iconify-icon height="1.2em" icon="solar:plain-linear" width="1.2em"></iconify-icon>
                    Review &amp; Send
                </button>
</div>
</header>

<div className="flex-1 p-4 sm:p-8 overflow-y-auto">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Create Campaign</h1>
<p className="mt-1 text-sm text-gray-500">Draft a new email and configure your sending preferences.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4">
<h2 className="text-sm font-semibold text-gray-900">Basic Information</h2>
</div>
<div className="p-6 space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="campaign_name">Campaign Name</label>
<input className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="campaign_name" placeholder="e.g. Spring Sale Announcement" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="sender_name">Sender Name</label>
<input className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="sender_name" type="text" value="John Doe"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="sender_email">Sender Email</label>
<div className="relative">
<select className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors cursor-pointer" id="sender_email">
<option>john@example.com</option>
<option>hello@example.com</option>
<option>support@example.com</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4 flex justify-between items-center">
<h2 className="text-sm font-semibold text-gray-900">Email Content</h2>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
<iconify-icon height="1.2em" icon="solar:code-linear" width="1.2em"></iconify-icon>
                                    HTML Editor
                                </button>
</div>
<div className="p-6 space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="subject">Subject Line</label>
<input className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="subject" placeholder="What's this email about?" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5 flex justify-between items-center" htmlFor="preview_text">
                                        Preview Text
                                        <span className="text-xs font-normal text-gray-500">Optional</span>
</label>
<input className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors" id="preview_text" placeholder="Appears in the inbox after the subject line" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Message Body</label>
<div className="border border-gray-300 rounded-md overflow-hidden bg-white focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all shadow-sm">

<div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-1 overflow-x-auto">
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="Bold" type="button">
<iconify-icon height="1.2em" icon="solar:text-bold-linear" width="1.2em"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="Italic" type="button">
<iconify-icon height="1.2em" icon="solar:text-italic-linear" width="1.2em"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="Underline" type="button">
<iconify-icon height="1.2em" icon="solar:text-underline-linear" width="1.2em"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-300 mx-1"></div>
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="List" type="button">
<iconify-icon height="1.2em" icon="solar:list-linear" width="1.2em"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="Link" type="button">
<iconify-icon height="1.2em" icon="solar:link-minimalistic-linear" width="1.2em"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors" title="Image" type="button">
<iconify-icon height="1.2em" icon="solar:gallery-linear" width="1.2em"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="text-xs font-medium text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-1 border border-transparent hover:border-gray-300" type="button">
<iconify-icon height="1em" icon="solar:magic-stick-3-linear" width="1em"></iconify-icon>
                                                Personalize
                                            </button>
</div>
<textarea className="block w-full border-0 bg-transparent py-4 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 resize-y font-sans leading-relaxed" placeholder="Start typing your email here..." rows="12"></textarea>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
<div className="border-b border-gray-200 bg-gray-50/50 px-5 py-4">
<h2 className="text-sm font-semibold text-gray-900">Audience</h2>
</div>
<div className="p-5 space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Recipient List</label>
<div className="relative">
<select className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors cursor-pointer">
<option disabled="" selected="" value="">Select an audience...</option>
<option value="all">All Subscribers (12,405)</option>
<option value="active">Active Customers (8,192)</option>
<option value="newsletter">Newsletter Only (4,213)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                                        Exclude Tags
                                    </label>
<div className="relative">
<div className="min-h-[38px] w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 shadow-sm focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-colors cursor-text flex flex-wrap gap-2 items-center">
<span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                                                Bounced
                                                <button className="text-gray-400 hover:text-gray-900" type="button">
<iconify-icon height="1em" icon="solar:close-circle-linear" width="1em"></iconify-icon>
</button>
</span>
<input className="flex-1 border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 focus:ring-0 min-w-[80px]" placeholder="Add tags..." type="text"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
<div className="border-b border-gray-200 bg-gray-50/50 px-5 py-4">
<h2 className="text-sm font-semibold text-gray-900">Delivery</h2>
</div>
<div className="p-5 space-y-4">
<div className="space-y-3">
<label className="relative flex cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50 transition-colors radio-wrapper">
<input checked="" className="sr-only" name="delivery_method" type="radio" value="now"/>
<div className="flex w-full items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-gray-500">
<iconify-icon height="1.2em" icon="solar:plain-linear" width="1.2em"></iconify-icon>
</div>
<div className="text-sm font-medium text-gray-900">Send Immediately</div>
</div>
<div className="h-4 w-4 rounded-full border border-gray-300 bg-white radio-indicator transition-all"></div>
</div>
</label>
<label className="relative flex cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50 transition-colors radio-wrapper">
<input className="sr-only" name="delivery_method" type="radio" value="schedule"/>
<div className="flex w-full items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-gray-500">
<iconify-icon height="1.2em" icon="solar:calendar-linear" width="1.2em"></iconify-icon>
</div>
<div className="text-sm font-medium text-gray-900">Schedule for later</div>
</div>
<div className="h-4 w-4 rounded-full border border-gray-300 bg-white radio-indicator transition-all"></div>
</div>
</label>
</div>

<div className="pt-2 border-t border-gray-100">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="schedule_time">Date &amp; Time</label>
<input className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors text-gray-500" disabled="" id="schedule_time" type="datetime-local" />
</input></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
