import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
    // Card Stack Interactions
    const cardsContainer = document.getElementById('cards-container');
    const dots = [
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3'),
      document.getElementById('dot-4')
    ];
    let currentCard = 1;
    let isAnimating = false;
    function updateDots() {
      dots.forEach((dot, idx) => {
        if (idx === currentCard - 1)
          dot.className = "w-2 h-2 rounded-full bg-blue-400 transition scale-125";
        else
          dot.className = "w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition";
      });
    }
    function setActiveCard(cardNumber) {
      if (isAnimating || cardNumber === currentCard) return;
      isAnimating = true;
      cardsContainer.className = `card-${cardNumber}-active`;
      currentCard = cardNumber;
      updateDots();
      setTimeout(() => { isAnimating = false; }, 400);
    }
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => setActiveCard(idx + 1));
    });
    // Auto-rotate
    setInterval(() => {
      if (!isAnimating) {
        setActiveCard(currentCard === 4 ? 1 : currentCard + 1);
      }
    }, 6000);
    updateDots();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/iphone14wallpaper9copy-d98969f84b43360bb0c164413b743e10" width="100%"></iframe></div>
<nav className="w-full fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
<div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-6">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-5 h-5 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Workspace Hub</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm">
<a className="text-white/60 hover:text-white transition" href="#">My Workspaces</a>
<a className="text-white/60 hover:text-white transition" href="#">Activity</a>
<a className="text-white/60 hover:text-white transition" href="#">Profile</a>
</div>
<button className="md:hidden p-2 rounded hover:bg-white/10">
<svg className="lucide lucide-menu w-5 h-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
<main className="flex-1 flex pt-24 pr-4 pl-4 items-center justify-center">
<div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row gap-16 items-center">

<div className="flex-1 max-w-md space-y-8 animate-fade-in" style={{animationDelay: '.12s', animationFillMode: 'forwards'}}>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-2">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Your Shared Spaces</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold mt-1">
            All Team Work, One Place
          </span>
</h1>
<p className="text-lg text-white/70 mb-6">
          Collaborate with your team in real time. Switch between workspaces, check live activity, and access everything you need at a glance.
        </p>
<div className="divide-y divide-white/10">
<div className="flex items-center space-x-3 py-2">
<svg className="lucide lucide-users w-5 h-5 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-base text-white/80">Instant workspace switching</span>
</div>
<div className="flex items-center space-x-3 py-2">
<svg className="lucide lucide-message-square w-5 h-5 text-purple-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-base text-white/80">Live messaging and comments</span>
</div>
<div className="flex items-center space-x-3 py-2">
<svg className="lucide lucide-folder-open w-5 h-5 text-pink-400" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
<span className="text-base text-white/80">Shared files &amp; docs</span>
</div>
<div className="flex items-center space-x-3 py-2">
<svg className="lucide lucide-activity w-5 h-5 text-green-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-base text-white/80">See who's active now</span>
</div>
</div>
<div className="flex gap-4 justify-center">
<button className="hover:from-blue-600 hover:to-purple-700 transition font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg space-x-6">Create  Workspace</button><button className="glass hover:bg-white/10 transition font-medium text-white rounded-xl pt-3 pr-6 pb-3 pl-6">Browse Templates</button>
</div>
</div>

<div className="flex flex-col items-center gap-6">
<section className="card-1-active" id="cards-container">

<article className="glass rounded-2xl shadow-2xl h-[29rem] flex flex-col">
<div className="flex items-center justify-between pt-8 px-8 pb-2">
<div className="flex items-center space-x-2">
<span className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow">
<svg className="lucide lucide-box w-6 h-6 text-white" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Product Team</span>
</div>
<span className="flex items-center gap-1 text-xs text-green-400">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Active
              </span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center">
<div className="mb-5">
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white/60">Recent activity</span>
<span className="text-xs bg-blue-500/10 text-blue-400 rounded px-2 py-0.5">3 online</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-edit-3 w-4 h-4 text-blue-400" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
<span className="text-sm text-white/80">Updated PRD: "Mobile Redesign"</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-user-plus w-4 h-4 text-purple-400" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span className="text-sm text-white/80">Elena joined workspace</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm text-white/80">Sprint Review completed</span>
</div>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-file-text w-4 h-4 text-pink-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm text-white/80">Files: <span className="text-white/60">Roadmap.pdf, v2 Specs.docx</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/65.jpg"/>
</span>
<span className="text-xs text-white/60 ml-2">+6 members</span>
</div>
</div>
</div>
<div className="border-t border-white/10 px-8 py-4">
<button className="block w-full py-2.5 font-medium rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition text-white shadow">Join Workspace</button>
</div>
</article>

<article className="glass rounded-2xl shadow-2xl h-[29rem] flex flex-col">
<div className="flex items-center justify-between pt-8 px-8 pb-2">
<div className="flex items-center space-x-2">
<span className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow">
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Design Studio</span>
</div>
<span className="flex items-center gap-1 text-xs text-green-400"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Active</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center">
<div className="mb-5">
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white/60">Recent activity</span>
<span className="text-xs bg-pink-400/10 text-pink-400 rounded px-2 py-0.5">2 online</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-image w-4 h-4 text-pink-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-sm text-white/80">Uploaded: HomePage_v3.png</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-message-square w-4 h-4 text-purple-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-sm text-white/80">Feedback: "Try new color palette"</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-user-check w-4 h-4 text-green-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-white/80">Anna approved mockups</span>
</div>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-file w-4 h-4 text-pink-400" data-lucide="file" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
<span className="text-sm text-white/80">Files: <span className="text-white/60">Moodboard.pdf, UI Kit.fig</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-pink-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/82.jpg"/>
</span>
<span className="text-xs text-white/60 ml-2">+4 members</span>
</div>
</div>
</div>
<div className="border-white/10 border-t pt-4 pr-8 pb-4 pl-8">
<button className="block w-full py-2.5 font-medium rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 transition text-white shadow">Join Workspace</button>
</div>
</article>

<article className="glass rounded-2xl shadow-2xl h-[29rem] flex flex-col">
<div className="flex items-center justify-between pt-8 px-8 pb-2">
<div className="flex items-center space-x-2">
<span className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow">
<svg className="lucide lucide-code w-6 h-6 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Engineering</span>
</div>
<span className="flex items-center gap-1 text-xs text-yellow-400"><span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span> Idle</span>
</div>
<div className="flex-1 px-8 flex flex-col justify-center">
<div className="mb-5">
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white/60">Recent activity</span>
<span className="text-xs bg-green-400/10 text-green-400 rounded px-2 py-0.5">1 online</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-git-branch w-4 h-4 text-green-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="text-sm text-white/80">Merged: auth-refactor branch</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-terminal w-4 h-4 text-teal-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<span className="text-sm text-white/80">Deployed to staging</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-bug w-4 h-4 text-yellow-400" data-lucide="bug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg>
<span className="text-sm text-white/80">2 bugs resolved</span>
</div>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-file-code w-4 h-4 text-green-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
<span className="text-sm text-white/80">Files: <span className="text-white/60">README.md, api.js</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-green-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/23.jpg"/>
</span>
<span className="text-xs text-white/60 ml-2">+5 members</span>
</div>
</div>
</div>
<div className="border-t border-white/10 px-8 py-4">
<button className="block w-full py-2.5 font-medium rounded-xl bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 transition text-white shadow">Join Workspace</button>
</div>
</article>

<article className="glass h-[29rem] flex flex-col rounded-2xl mx-60 shadow-2xl">
<div className="flex items-center justify-between pt-8 px-8 pb-2">
<div className="flex items-center space-x-2">
<span className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center shadow">
<svg className="lucide lucide-megaphone w-6 h-6 text-white" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Marketing</span>
</div>
<span className="flex items-center gap-1 text-xs text-gray-400"><span className="w-2 h-2 bg-gray-400 rounded-full"></span> Offline</span>
</div>
<div className="flex-1 flex flex-col pr-8 pl-8 justify-center">
<div className="mb-5">
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-white/60">Recent activity</span>
<span className="text-xs bg-yellow-400/10 text-yellow-400 rounded px-2 py-0.5">0 online</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-calendar w-4 h-4 text-yellow-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm text-white/80">Scheduled: Q2 Campaign Launch</span>
</div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-file-bar-chart w-4 h-4 text-pink-400" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<span className="text-sm text-white/80">Uploaded: Analytics_Report.xlsx</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/80">No recent messages</span>
</div>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-file-text w-4 h-4 text-yellow-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm text-white/80">Files: <span className="text-white/60">Q2 Brief.pdf, Budget.xlsx</span></span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-yellow-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/41.jpg"/>
</span>
<span className="text-xs text-white/60 ml-2">+3 members</span>
</div>
</div>
</div>
<div className="border-t border-white/10 px-8 py-4">
<button className="block w-full py-2.5 font-medium rounded-xl bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 transition text-white shadow">Join Workspace</button>
</div>
</article>
</section>

<div className="flex gap-3 mt-2">
<button className="w-2 h-2 rounded-full bg-blue-400 transition scale-125" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition" id="dot-3"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition" id="dot-4"></button>
</div>
</div>
</div>
</main>
<footer className="w-full border-t border-white/10 py-8 px-6 mt-12">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-white font-medium">Workspace Hub</span>
</div>
<div className="text-sm text-white/50 text-center md:text-right">
        © 2024 Workspace Hub. Collaboration made simple.
      </div>
<div className="flex gap-6 text-sm text-white/60">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
