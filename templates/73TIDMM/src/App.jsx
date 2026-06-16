import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Initialize Lucide icons
  lucide.createIcons();

  // Account dropdown functionality
  const accountBtn = document.getElementById('accountBtn');
  const accountMenu = document.getElementById('accountMenu');
  
  if (accountBtn && accountMenu) {
    accountBtn.addEventListener('click', () => {
      accountMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target)) {
        accountMenu.classList.add('hidden');
      }
    });
  }

  // Labels toggle functionality
  const labelsToggle = document.getElementById('labelsToggle');
  const labelsList = document.getElementById('labelsList');
  
  if (labelsToggle && labelsList) {
    labelsToggle.addEventListener('click', () => {
      labelsList.classList.toggle('hidden');
      const chevron = labelsToggle.querySelector('.lucide-chevron-down');
      if (chevron) {
        chevron.style.transform = labelsList.classList.contains('hidden') ? 'rotate(-90deg)' : 'rotate(0deg)';
      }
    });
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="sidebar beautiful-shadow overflow-hidden bg-zinc-900 border-zinc-700 rounded-2xl">

<div className="flex items-center justify-between border-zinc-800 border-b pt-5 pr-5 pb-5 pl-5">
<button className="flex gap-2 beautiful-shadow hover:bg-zinc-800 transition-all text-sm font-medium bg-zinc-800 border-zinc-700 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center" id="accountBtn">
<svg className="lucide lucide-mail w-4 h-4 text-zinc-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-zinc-100">ZincMail</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Avatar" className="w-10 h-10 beautiful-shadow object-cover border-zinc-700 border-2 rounded-xl" src="https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=1080&amp;q=80"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-zinc-900"></div>
</div>
</div>

<div className="mx-5 mt-2 rounded-xl bg-zinc-800 beautiful-shadow border border-zinc-700 p-5 text-sm hidden" id="accountMenu">
<div className="mb-4 pb-4 border-b border-zinc-700">
<p className="font-medium text-zinc-100">Sarah Chen</p>
<p className="text-zinc-400 text-xs mt-1">sarah.chen@company.com</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="text-xs text-zinc-400">Online</span>
</div>
</div>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-mail w-4 h-4 text-zinc-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-medium text-zinc-200">sarah.chen@company.com</span>
<svg className="lucide lucide-check w-4 h-4 ml-auto text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-mail w-4 h-4 text-blue-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-zinc-300">personal@gmail.com</span>
</button>
<hr className="my-4 border-zinc-700"/>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-zinc-700 transition-colors text-zinc-300">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> Settings
    </button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-zinc-700 transition-colors text-red-400">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Sign Out
    </button>
</div>

<div className="px-5 pt-6">
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-zinc-200 to-zinc-100 text-zinc-900 rounded-xl pt-3 pr-4 pb-3 pl-4 font-medium hover:from-zinc-100 hover:to-zinc-50 transition-all beautiful-shadow">
<svg className="lucide lucide-edit w-4 h-4" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
      Compose
    </button>
</div>

<nav className="select-none text-sm pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-gradient-to-r from-zinc-700 to-zinc-800 text-zinc-100 rounded-xl beautiful-shadow" href="#">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="font-medium">Inbox</span>
<span className="ml-auto bg-zinc-600 text-zinc-200 text-xs px-2 py-1 rounded-full font-medium">24</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
      Starred
      <span className="ml-auto text-xs text-zinc-500">8</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
      Sent
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      Drafts
      <span className="ml-auto text-xs text-zinc-500">3</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-trash-2 w-5 h-5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
      Trash
    </a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full text-zinc-500 uppercase text-xs tracking-wider font-medium mb-3" id="labelsToggle">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Labels
        <svg className="lucide lucide-plus w-4 h-4 ml-auto hover:bg-zinc-800 rounded p-0.5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1" id="labelsList">
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span>Work</span>
<span className="ml-auto text-xs text-zinc-500">12</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span>Personal</span>
<span className="ml-auto text-xs text-zinc-500">7</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Important</span>
<span className="ml-auto text-xs text-zinc-500">5</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span>Follow Up</span>
<span className="ml-auto text-xs text-zinc-500">2</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="text-zinc-500 uppercase text-xs tracking-wider font-medium mb-3">Storage</p>
<div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
<div className="flex items-center justify-between mb-2">
<span className="text-zinc-300 text-sm">Used</span>
<span className="text-zinc-300 text-sm">8.2 GB of 15 GB</span>
</div>
<div className="w-full bg-zinc-700 rounded-full h-2">
<div className="bg-gradient-to-r from-zinc-400 to-zinc-300 h-2 rounded-full" style={{width: '55%'}}></div>
</div>
<button className="w-full mt-3 text-xs text-zinc-400 hover:text-zinc-300 transition-colors">
          Manage Storage
        </button>
</div>
</div>
</nav>
</aside>

<aside className="sidebar beautiful-shadow overflow-hidden bg-zinc-100 border-zinc-200 rounded-2xl">

<div className="flex items-center justify-between border-zinc-200 border-b pt-5 pr-5 pb-5 pl-5">
<button className="flex items-center gap-2 beautiful-shadow hover:shadow-md transition-all text-sm font-medium bg-gradient-to-r from-zinc-50 to-white border-zinc-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4">
<svg className="lucide lucide-mail w-4 h-4 text-zinc-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-zinc-800">ZincMail</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Avatar" className="w-10 h-10 beautiful-shadow object-cover border-zinc-200 border-2 rounded-xl" src="https://images.unsplash.com/photo-1510582029005-689cfc56b48c?w=1080&amp;q=80"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-zinc-100"></div>
</div>
</div>

<div className="px-5 pt-6">
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-zinc-800 to-zinc-900 text-zinc-100 rounded-xl pt-3 pr-4 pb-3 pl-4 font-medium hover:from-zinc-900 hover:to-zinc-800 transition-all beautiful-shadow">
<svg className="lucide lucide-edit w-4 h-4" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
      Compose
    </button>
</div>

<nav className="select-none text-sm pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-gradient-to-r from-zinc-200 to-zinc-300 text-zinc-900 rounded-xl beautiful-shadow" href="#">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="font-medium">Inbox</span>
<span className="ml-auto bg-zinc-400 text-zinc-100 text-xs px-2 py-1 rounded-full font-medium">24</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
      Starred
      <span className="ml-auto text-xs text-zinc-500">8</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
      Sent
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
      Drafts
      <span className="ml-auto text-xs text-zinc-500">3</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-trash-2 w-5 h-5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
      Trash
    </a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full text-zinc-500 uppercase text-xs tracking-wider font-medium mb-3">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Labels
        <svg className="lucide lucide-plus w-4 h-4 ml-auto hover:bg-zinc-200 rounded p-0.5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1">
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span>Work</span>
<span className="ml-auto text-xs text-zinc-500">12</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span>Personal</span>
<span className="ml-auto text-xs text-zinc-500">7</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Important</span>
<span className="ml-auto text-xs text-zinc-500">5</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-2.5 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span>Follow Up</span>
<span className="ml-auto text-xs text-zinc-500">2</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="text-zinc-500 uppercase text-xs tracking-wider font-medium mb-3">Storage</p>
<div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
<div className="flex items-center justify-between mb-2">
<span className="text-zinc-700 text-sm">Used</span>
<span className="text-zinc-700 text-sm">8.2 GB of 15 GB</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-2">
<div className="bg-gradient-to-r from-zinc-600 to-zinc-700 h-2 rounded-full" style={{width: '55%'}}></div>
</div>
<button className="w-full mt-3 text-xs text-zinc-600 hover:text-zinc-700 transition-colors">
          Manage Storage
        </button>
</div>
</div>
</nav>
</aside>


    </>
  );
}
