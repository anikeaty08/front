import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
          colors: {
            flux: {
              50:'#faf7ff',
              100:'#f3efff',
              200:'#e9dfff',
              300:'#d6c2ff',
              400:'#b794ff',
              500:'#9567ff',
              600:'#7c3aed',
              700:'#6d28d9',
              800:'#5b21b6'
            }
          }
        }
      }
    }
  


    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden my-4 md:my-8 border border-white">

<header className="flex flex-col md:flex-row items-start md:items-center justify-between md:px-8 border-flux-100 bg-gradient-to-b from-flux-50/30 border-b pt-6 pr-4 pb-6 pl-4">
<div className="flex items-center space-x-3 mb-4 md:mb-0">
<div className="bg-clip-text text-2xl font-medium text-transparent tracking-tighter bg-gradient-to-r from-flux-700 to-flux-500">Mail</div>
</div>
<nav className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium mb-4 md:mb-0">
<a className="flex items-center space-x-1 text-flux-700 font-semibold" href="#">
<svg className="lucide lucide-inbox w-4 h-4" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>Inbox</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Sent</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Starred</span>
</a>
<a className="flex items-center space-x-1 text-gray-600 hover:text-flux-600 transition-colors" href="#">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span>Trash</span>
</a>
</nav>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-lg bg-flux-100 hover:bg-flux-200 transition-colors">
<svg className="lucide lucide-search w-4 h-4 text-flux-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-lg bg-flux-600 text-white hover:bg-flux-700 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<aside className="col-span-1 lg:col-span-4 lg:p-8 lg:border-r lg:border-flux-100 bg-gradient-to-b from-flux-50/30 to-white pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
<div className="flex items-center space-x-2">
<span className="bg-flux-100 text-flux-700 text-xs px-2 py-1 rounded-full font-medium">24 unread</span>
</div>
</div>

<div className="space-y-3">

<div className="p-4 bg-flux-50 border border-flux-200 rounded-lg cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center space-x-2">
<img alt="Sarah Johnson" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&amp;q=80"/>
<div>
<p className="font-semibold text-gray-900 text-sm">Sarah Johnson</p>
<p className="text-xs text-gray-600">sarah@designco.com</p>
</div>
</div>
<span className="text-xs text-gray-500">2m ago</span>
</div>
<h3 className="font-medium text-gray-900 text-sm mb-1">Q4 Design Review Meeting</h3>
<p className="text-gray-600 text-xs line-clamp-2">Hi team, I've scheduled our quarterly design review for next Thursday. Please prepare your...</p>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-paperclip w-3 h-3 text-gray-400" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
<span className="text-xs text-gray-500">2 attachments</span>
</div>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>

<div className="p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center space-x-2">
<img alt="Mike Chen" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&amp;q=80"/>
<div className="">
<p className="font-semibold text-gray-900 text-sm">Mike Chen</p>
<p className="text-xs text-gray-600">mike@techcorp.com</p>
</div>
</div>
<span className="text-xs text-gray-500">1h ago</span>
</div>
<h3 className="font-medium text-gray-900 text-sm mb-1">Project Timeline Update</h3>
<p className="text-gray-600 text-xs line-clamp-2">Quick update on the timeline - we're ahead of schedule and can deliver early...</p>
</div>
<div className="p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-flux-100 flex items-center justify-center">
<span className="text-flux-600 font-semibold text-xs">TR</span>
</div>
<div className="">
<p className="font-semibold text-gray-900 text-sm">Team Retrospective</p>
<p className="text-xs text-gray-600">noreply@company.com</p>
</div>
</div>
<span className="text-xs text-gray-500">3h ago</span>
</div>
<h3 className="font-medium text-gray-900 text-sm mb-1">Monthly Team Feedback</h3>
<p className="text-gray-600 text-xs line-clamp-2">It's time for our monthly retrospective. Please fill out the feedback form...</p>
</div>
<div className="p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center space-x-2">
<img alt="Lisa Park" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;q=80"/>
<div className="">
<p className="font-semibold text-gray-900 text-sm">Lisa Park</p>
<p className="text-xs text-gray-600">lisa@creativestudio.com</p>
</div>
</div>
<span className="text-xs text-gray-500">5h ago</span>
</div>
<h3 className="font-medium text-gray-900 text-sm mb-1">Design System Updates</h3>
<p className="text-gray-600 text-xs line-clamp-2">I've updated our design system with new components. Check out the latest...</p>
</div>
</div>

<div className="mt-8 space-y-3">
<button className="w-full flex items-center space-x-2 px-4 py-2 bg-flux-600 text-white rounded-lg hover:bg-flux-700 transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="font-medium">Compose New</span>
</button>
<div className="flex space-x-2">
<button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-flux-200 text-flux-700 rounded-lg hover:bg-flux-50 transition-colors">
<svg className="lucide lucide-archive w-4 h-4" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
<span className="text-sm">Archive</span>
</button>
<button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-flux-200 text-flux-700 rounded-lg hover:bg-flux-50 transition-colors">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span className="text-sm">Delete</span>
</button>
</div>
</div>
</aside>

<article className="col-span-1 lg:col-span-8 lg:p-12 space-y-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<img alt="Sarah Johnson" className="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1495476479092-6ece1898a101?w=1080&amp;q=80"/>
<div className="">
<h1 className="text-2xl font-semibold text-gray-900">Q4 Design Review Meeting</h1>
<div className="flex items-center space-x-2 text-sm text-gray-600">
<span>Sarah Johnson</span>
<span>•</span>
<span className="">sarah@designco.com</span>
<span>•</span>
<span className="">2 minutes ago</span>
</div>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-reply w-5 h-5 text-gray-600" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-forward w-5 h-5 text-gray-600" data-lucide="forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 17 5-5-5-5"></path><path d="M4 18v-2a4 4 0 0 1 4-4h12"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="prose prose-lg max-w-none">
<div className="bg-flux-50/50 rounded-lg p-6 mb-6">
<div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>To: design-team@company.com, stakeholders@company.com</span>
</div>
<div className="flex items-center space-x-2 text-sm text-gray-600">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<span>CC: management@company.com</span>
</div>
</div>
<div className="space-y-4 text-gray-700 leading-relaxed">
<p className="">Hi everyone,</p>
<p>I hope this email finds you well. I'm writing to inform you about our upcoming Q4 Design Review Meeting, which has been scheduled for .</p>
<p>During this meeting, we'll be covering:</p>
<ul className="space-y-2">
<li>• Review of completed design projects from Q4</li>
<li>• Analysis of user feedback and design metrics</li>
<li className="">• Discussion of design system improvements</li>
<li className="">• Planning for Q1 2024 design initiatives</li>
</ul>
<p className="">Please come prepared with:</p>
<ol className="space-y-2">
<li className="">1. Your project portfolios and case studies</li>
<li className="">2. User research insights and data</li>
<li className="">3. Any design challenges you'd like to discuss</li>
<li className="">4. Ideas for next quarter's focus areas</li>
</ol>
<p className="">I've attached the meeting agenda and the design metrics dashboard for your review. Please take a moment to familiarize yourself with the content before our session.</p>
<p className="">Looking forward to seeing everyone there and celebrating the fantastic work we've accomplished this quarter!</p>
<p className="">Best regards,Sarah JohnsonSenior Design Manager</p>
</div>

<div className="border-t border-gray-200 pt-6 mt-8">
<h3 className="text-sm font-medium text-gray-900 mb-4">Attachments (2)</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
<div className="w-10 h-10 bg-flux-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-flux-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-gray-900 text-sm">Q4-Design-Review-Agenda.pdf</p>
<p className="text-gray-500 text-xs">124 KB</p>
</div>
<button className="text-flux-600 hover:text-flux-700">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
<div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
<div className="w-10 h-10 bg-flux-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-flux-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-gray-900 text-sm">Design-Metrics-Dashboard.xlsx</p>
<p className="text-gray-500 text-xs">89 KB</p>
</div>
<button className="text-flux-600 hover:text-flux-700">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
</div>

<div className="border-t border-gray-200 pt-6 mt-8">
<div className="flex space-x-3">
<button className="flex items-center space-x-2 px-4 py-2 bg-flux-600 text-white rounded-lg hover:bg-flux-700 transition-colors">
<svg className="lucide lucide-reply w-4 h-4" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg>
<span>Reply</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Reply All</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-forward w-4 h-4" data-lucide="forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 17 5-5-5-5"></path><path d="M4 18v-2a4 4 0 0 1 4-4h12"></path></svg>
<span>Forward</span>
</button>
</div>
</div>
</div>
</article>
</section>
</div>


    </>
  );
}
