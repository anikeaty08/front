import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // State
      let currentScreen = 'home';
      const contentContainer = document.getElementById('main-content');
      const navItems = document.querySelectorAll('.nav-item');
      const headerTitle = document.getElementById('header-title');

      // Initial Load
      document.addEventListener('DOMContentLoaded', () => {
          loadScreen('home');
          lucide.createIcons();
      });

      // Navigation Logic
      function navigateTo(screenName) {
          if (currentScreen === screenName && screenName !== 'article') return;
          loadScreen(screenName);
      }

      function loadScreen(screenName) {
          currentScreen = screenName;

          // Header Title Logic
          let titleText = 'Discover';
          if(screenName === 'home') titleText = 'Discover';
          if(screenName === 'missions') titleText = 'Mission Hub';
          if(screenName === 'profile') titleText = 'My Profile';
          if(screenName === 'rewards') titleText = 'Rewards';
          if(screenName === 'read') titleText = 'Library';
          if(screenName === 'article') titleText = ''; // Hidden

          // Update Header
          if (screenName === 'article') {
              document.getElementById('main-header').classList.add('hidden');
              document.getElementById('bottom-nav').classList.add('hidden');
          } else {
              document.getElementById('main-header').classList.remove('hidden');
              document.getElementById('bottom-nav').classList.remove('hidden');
              headerTitle.innerText = titleText;
          }

          // Highlight Nav
          navItems.forEach(item => {
              const target = item.dataset.target;
              // Reset standard items
              if (target !== 'read') {
                  if(target === screenName) {
                      item.classList.add('text-emerald-400');
                      item.classList.remove('text-slate-500');
                  } else {
                      item.classList.remove('text-emerald-400');
                      item.classList.add('text-slate-500');
                  }
              }
          });

          // Get Template
          const template = document.getElementById(`screen-${screenName}`);
          if(!template) return;

          // Clear and Inject
          contentContainer.innerHTML = '';
          const clone = template.content.cloneNode(true);
          contentContainer.appendChild(clone);

          // Bind Claim Button in Article
          if(screenName === 'article') {
              const claimBtn = contentContainer.querySelector('.bottom-0 button');
              if(claimBtn) {
                  claimBtn.onclick = showClaimModal;
              }
          }

          // Re-init Icons
          lucide.createIcons();
      }

      // Modal Logic
      function showClaimModal() {
          const modal = document.getElementById('claim-modal');
          if(modal) {
              modal.classList.remove('hidden');
              lucide.createIcons(); // Ensure icons in modal render if not already
          }
      }

      function closeClaimModal() {
          const modal = document.getElementById('claim-modal');
          if(modal) modal.classList.add('hidden');
          navigateTo('missions');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full h-full max-w-[430px] bg-slate-950 relative flex flex-col shadow-2xl overflow-hidden border-x border-slate-800/50" id="app-container">

<header className="flex items-center justify-between px-6 pt-12 pb-4 z-20 bg-slate-950/90 backdrop-blur-sm sticky top-0 border-b border-transparent transition-all duration-300" id="main-header">
<div className="flex items-center">
<h1 className="text-xl font-semibold tracking-tight text-white" id="header-title">
            Discover
          </h1>
<button className="ml-3 flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full hover:bg-orange-500/20 transition-colors cursor-pointer" onclick="navigateTo('missions')">
<i className="w-3.5 h-3.5 text-orange-500 fill-orange-500" data-lucide="flame"></i>
<span className="text-xs font-bold text-orange-500">12 Days</span>
</button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-slate-900 border border-slate-800 pl-3 pr-4 py-1.5 rounded-full shadow-lg shadow-black/20">
<div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
<i className="text-yellow-500 w-4 h-4 fill-yellow-500" data-lucide="coins"></i>
</div>
<span className="text-sm font-bold text-white tracking-wide">
              1,240
            </span>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative scroll-smooth pb-28" id="main-content">

</main>

<nav className="glass-nav absolute bottom-0 w-full px-6 py-3 pb-8 z-30" id="bottom-nav">
<div className="flex justify-between items-end relative">
<button className="nav-item group flex flex-col items-center gap-1.5 w-12 text-emerald-400" data-target="home" onclick="navigateTo('home')">
<i className="w-6 h-6 transition-transform group-active:scale-90" data-lucide="compass"></i>
<span className="text-[10px] font-medium">Discover</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1.5 w-12 text-slate-500 hover:text-slate-300 transition-colors" data-target="missions" onclick="navigateTo('missions')">
<i className="w-6 h-6 transition-transform group-active:scale-90" data-lucide="target"></i>
<span className="text-[10px] font-medium">Missions</span>
</button>

<button className="nav-item group relative w-12 flex flex-col items-center justify-end" data-target="read" onclick="navigateTo('read')">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 transition-transform group-hover:-translate-y-1 group-active:scale-95">
<div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25 border-4 border-slate-950 group-hover:bg-emerald-400 transition-colors">
<i className="w-7 h-7 text-slate-950 fill-slate-950/20" data-lucide="book-open"></i>
</div>
</div>

<div className="h-6 w-full"></div>

<span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors mt-1.5">
              Read
            </span>
</button>
<button className="nav-item group flex flex-col items-center gap-1.5 w-12 text-slate-500 hover:text-slate-300 transition-colors" data-target="profile" onclick="navigateTo('profile')">
<i className="w-6 h-6 transition-transform group-active:scale-90" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1.5 w-12 text-slate-500 hover:text-slate-300 transition-colors" data-target="rewards" onclick="navigateTo('rewards')">
<i className="w-6 h-6 transition-transform group-active:scale-90" data-lucide="gift"></i>
<span className="text-[10px] font-medium">Rewards</span>
</button>
</div>
</nav>
<div className="hidden absolute inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md fade-in" id="claim-modal">
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-[85%] max-w-[320px] shadow-2xl relative overflow-hidden text-center">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
<i className="w-8 h-8 text-slate-950 stroke-[3]" data-lucide="check"></i>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">
              Claim Successful!
            </h2>
<p className="text-xs text-slate-400 mb-6 px-2">
              You've earned rewards for completing your daily reading goal.
            </p>
<div className="flex gap-3 w-full mb-6">
<div className="flex-1 bg-slate-950/50 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1">
<span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">
                  Earned
                </span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-yellow-500 fill-yellow-500" data-lucide="coins"></i>
<span className="text-lg font-bold text-white">50</span>
</div>
</div>
<div className="flex-1 bg-slate-950/50 border border-slate-800 rounded-xl p-3 flex flex-col items-center gap-1">
<span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">
                  Streak
                </span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="flame"></i>
<span className="text-lg font-bold text-white">13</span>
</div>
</div>
</div>
<button className="w-full bg-white text-slate-950 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors shadow-lg active:scale-95" onclick="closeClaimModal()">
              Awesome
            </button>
</div>
</div>
</div>
</div>


<template id="screen-home">
<div className="px-6 space-y-8 fade-in pt-2">

<div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer border border-slate-800" onclick="navigateTo('article')">
<img alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md px-2.5 py-1 rounded-full mb-3">
<i className="w-3 h-3 text-emerald-400" data-lucide="trending-up"></i>
<span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                Trending
              </span>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight leading-tight mb-2">
              The Future of Decentralized Finance
            </h2>
<div className="flex items-center gap-3 text-slate-300 text-xs">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                5 min read
              </span>
<span className="flex items-center gap-1 text-emerald-400 font-medium">
<i className="w-3 h-3" data-lucide="plus-circle"></i>
                Earn 100 Coins
              </span>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-4">
            Recommended for you
          </h3>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
<button className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-white whitespace-nowrap">
              All
            </button>
<button className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 whitespace-nowrap hover:bg-slate-800 transition-colors">
              Trending
            </button>
<button className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 whitespace-nowrap hover:bg-slate-800 transition-colors">
              Tech
            </button>
<button className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 whitespace-nowrap hover:bg-slate-800 transition-colors">
              Finance
            </button>
<button className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 whitespace-nowrap hover:bg-slate-800 transition-colors">
              Wellness
            </button>
</div>
<div className="grid gap-4">

<div className="glass-panel p-3 rounded-xl border border-slate-800 flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group" onclick="navigateTo('article')">
<div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-center py-1">
<h4 className="text-sm font-medium text-slate-100 mb-1 leading-snug">
                  The Psychology of Money
                </h4>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  Timeless lessons on wealth, greed, and happiness doing well
                  with money.
                </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      + 50 Coins
                    </span>
<span className="text-[10px] text-slate-500">Finance</span>
</div>
<span className="flex items-center gap-1 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="clock"></i>
                    8 min
                  </span>
</div>
</div>
</div>

<div className="glass-panel p-3 rounded-xl border border-slate-800 flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group" onclick="navigateTo('article')">
<div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="flex-1 flex flex-col justify-center py-1">
<h4 className="text-sm font-medium text-slate-100 mb-1 leading-snug">
                  Cybersecurity 101
                </h4>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  Understanding the basics of digital protection in the modern
                  era.
                </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      + 30 Coins
                    </span>
<span className="text-[10px] text-slate-500">Tech</span>
</div>
<span className="flex items-center gap-1 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="clock"></i>
                    6 min
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<template id="screen-missions">
<div className="px-6 space-y-6 fade-in pt-2">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
<div className="flex justify-between items-center mb-6">
<div className="text-left">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                Current Streak
              </p>
<h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                12
                <span className="text-lg font-medium text-slate-500">Days</span>
</h2>
</div>
<div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20">
<i className="w-6 h-6 text-white fill-white" data-lucide="flame"></i>
</div>
</div>

<div className="flex justify-between items-center relative">
<div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 -mt-2"></div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-500 font-medium">M</span>
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-slate-900 z-10">
<i className="w-4 h-4 text-slate-950 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-500 font-medium">T</span>
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-slate-900 z-10">
<i className="w-4 h-4 text-slate-950 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-500 font-medium">W</span>
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-slate-900 z-10">
<i className="w-4 h-4 text-slate-950 stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-emerald-400 font-bold">Th</span>
<div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center z-10 text-emerald-500 relative">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-600 font-medium">F</span>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900 z-10 text-slate-600"></div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-600 font-medium">S</span>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900 z-10 text-slate-600"></div>
</div>
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-slate-600 font-medium">S</span>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900 z-10 text-slate-600"></div>
</div>
</div>
</div>

<div className="p-1 bg-slate-900 rounded-xl border border-slate-800 flex relative">
<button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-white shadow-sm transition-all border border-slate-700">
            Daily
          </button>
<button className="flex-1 py-2 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-300 transition-all">
            Weekly
          </button>
<button className="flex-1 py-2 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-300 transition-all">
            Badges
          </button>
</div>

<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            Daily Tasks
          </h4>

<div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-500" data-lucide="book-open"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Read for 15 minutes</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-[10px] text-slate-500">10/15 min</span>
</div>
</div>
<div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-xs text-white border border-slate-700">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="coins"></i>
<span>50</span>
</div>
</div>

<div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700"></div>
<div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<i className="w-4 h-4 text-slate-400" data-lucide="share-2"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Share an article</p>
<p className="text-[10px] text-slate-500 mt-0.5">
                Share knowledge with friends
              </p>
</div>
<div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-xs text-white border border-slate-700">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="coins"></i>
<span>20</span>
</div>
</div>
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1 pt-2">
            Weekly Goals
          </h4>

<div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-500" data-lucide="calendar"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">
                Read 3 Different Categories
              </p>
<div className="flex items-center gap-2 mt-1">
<div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
</div>
<span className="text-[10px] text-slate-500">1/3</span>
</div>
</div>
<div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-xs text-white border border-slate-700">
<i className="w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="coins"></i>
<span>150</span>
</div>
</div>
</div>
</div>
</template>

<template id="screen-read">
<div className="px-6 space-y-6 fade-in pt-2">

<div className="flex gap-3">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 placeholder:text-slate-600" placeholder="Search readings..." type="text"/>
</div>
<button className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</button>
</div>

<div className="flex border-b border-slate-800">
<button className="px-4 py-2 text-sm font-medium text-emerald-400 border-b-2 border-emerald-400 transition-colors">
            Explore
          </button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">
            Continue Reading
          </button>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            New Arrivals
          </h3>

<div className="glass-panel p-3 rounded-xl border border-slate-800 flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group" onclick="navigateTo('article')">
<div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="flex-1 flex flex-col justify-center py-1">
<h4 className="text-sm font-medium text-slate-100 mb-1 leading-snug">
                The Metaverse Era
              </h4>
<p className="text-xs text-slate-500 line-clamp-1 mb-2">
                Virtual worlds and real economy.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    + 40
                  </span>
<span className="text-[10px] text-slate-500">Tech</span>
</div>
<span className="flex items-center gap-1 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="clock"></i>
                  8 min
                </span>
</div>
</div>
</div>

<div className="glass-panel p-3 rounded-xl border border-slate-800 flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group" onclick="navigateTo('article')">
<div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="flex-1 flex flex-col justify-center py-1">
<h4 className="text-sm font-medium text-slate-100 mb-1 leading-snug">
                Mindful Living
              </h4>
<p className="text-xs text-slate-500 line-clamp-1 mb-2">
                Finding peace in a chaotic world.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    + 30
                  </span>
<span className="text-[10px] text-slate-500">Wellness</span>
</div>
<span className="flex items-center gap-1 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="clock"></i>
                  6 min
                </span>
</div>
</div>
</div>

<div className="glass-panel p-3 rounded-xl border border-slate-800 flex gap-4 hover:border-slate-700 transition-colors cursor-pointer group" onclick="navigateTo('article')">
<div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="flex-1 flex flex-col justify-center py-1">
<h4 className="text-sm font-medium text-slate-100 mb-1 leading-snug">
                History of Gold
              </h4>
<p className="text-xs text-slate-500 line-clamp-1 mb-2">
                Why we value this precious metal.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    + 35
                  </span>
<span className="text-[10px] text-slate-500">Finance</span>
</div>
<span className="flex items-center gap-1 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="clock"></i>
                  10 min
                </span>
</div>
</div>
</div>
</div>
</div>
</template>
<template id="screen-article">
<div className="fade-in h-full flex flex-col bg-slate-950 absolute inset-0 z-40">

<div className="px-6 py-4 flex items-center justify-between border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-sm sticky top-0 z-50">
<button className="text-slate-400 hover:text-white p-2 -ml-2" onclick="navigateTo('home')">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Earning Active
            </span>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-8 pb-32" id="reading-container">
<img className="w-full h-48 object-cover rounded-xl mb-6 shadow-2xl opacity-80" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<p className="text-xs font-bold text-indigo-400 tracking-wider uppercase mb-3">
            Finance • 5 min read
          </p>
<h1 className="text-2xl font-bold text-slate-100 tracking-tight mb-6 leading-tight">
            The Future of Decentralized Finance
          </h1>
<div className="prose prose-invert prose-p:text-slate-300 prose-p:leading-7 prose-p:font-light prose-headings:text-slate-100 prose-headings:font-semibold">
<p className="mb-4 first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-500 first-letter:mr-1 first-letter:float-left">
              In the grand tapestry of human history, the shift from physical
              currency to digital assets represents a fundamental transformation
              in how we perceive value. It is not merely a technological
              upgrade, but a philosophical shift.
            </p>
<p className="mb-4">
              As we delve deeper into the mechanics of decentralized finance, we
              begin to understand that money is, at its core, a language. It
              communicates trust, effort, and scarcity across time and space
              without the need for intermediaries.
            </p>
<div className="my-8 p-6 border-l-2 border-emerald-500 bg-slate-900 rounded-r-xl">
<p className="italic text-emerald-100 text-lg font-medium leading-relaxed mb-2">
                "The future belongs to those who learn more skills and combine
                them in creative ways."
              </p>
<p className="text-emerald-500/60 text-xs uppercase font-bold tracking-widest">
                — Robert Greene
              </p>
</div>
<p className="mb-4">
              However, this transition is fraught with challenges. Regulatory
              hurdles, technological scalability, and user adoption remain
              significant barriers. Yet, the trajectory is clear: the
              digitization of value is inevitable.
            </p>
<p className="mb-4">
              Imagine a world where reading this very sentence generates value.
              Not just intellectual value, but tangible, tradable value. That is
              the promise of the read-to-earn model.
            </p>
<p className="mb-4 text-slate-400">
              Blockchain technology ensures that your attention is verified and
              rewarded securely. Unlike traditional ad-models where you are the
              product, here you are the participant.
            </p>
<p className="mb-4">
              The infrastructure required to support this new economy is being
              built as we speak. Layer 2 solutions are reducing costs, while
              user interfaces are becoming increasingly intuitive.
            </p>
<p className="mb-4">
              Consider the implications for education. If students were rewarded
              for their reading comprehension and time spent learning,
              motivation structures would fundamentally shift.
            </p>
<p className="h-12"></p>

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center mt-8">
<i className="w-10 h-10 text-slate-600 mx-auto mb-3" data-lucide="check-circle"></i>
<h3 className="text-white font-medium mb-1">Article Finished</h3>
<p className="text-xs text-slate-500 mb-4">
                You've completed the reading requirements.
              </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent pt-12">
<div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-2xl flex items-center justify-between pl-4 shadow-2xl">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                Reward
              </span>
<span className="text-lg font-bold text-white flex items-center gap-1">
                50
                <span className="text-sm font-normal text-slate-500">Coins</span>
</span>
</div>
<button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-emerald-500/20">
              Claim
              <i className="w-4 h-4 fill-slate-950/20" data-lucide="sparkles"></i>
</button>
</div>
</div>
</div>
</template>

<template id="screen-profile">
<div className="px-6 space-y-6 fade-in pt-2">

<div className="flex items-center gap-5 mt-2">
<div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center relative overflow-hidden">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div>
<h2 className="text-xl font-bold text-white">Alex Doe</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Level 5 Reader
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">
              Total Earnings
            </p>
<p className="text-lg font-bold text-white mt-0.5">
              1,240
              <span className="text-emerald-500 text-xs">RC</span>
</p>
</div>
<div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">
              Read Time
            </p>
<p className="text-lg font-bold text-white mt-0.5">
              42h
              <span className="text-slate-500 text-xs">10m</span>
</p>
</div>
</div>

<div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="settings"></i>
</div>
<span className="text-sm font-medium text-white">
                Account Settings
              </span>
</div>
<i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="bell"></i>
</div>
<span className="text-sm font-medium text-white">Notifications</span>
</div>
<i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</button>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-3">Reward History</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/30 border border-slate-800/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-500" data-lucide="gift"></i>
</div>
<div>
<p className="text-xs font-semibold text-white">
                    Amazon Gift Card
                  </p>
<p className="text-[10px] text-slate-500">2 days ago</p>
</div>
</div>
<span className="text-xs font-bold text-red-400">-10k RC</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/30 border border-slate-800/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5 text-blue-500" data-lucide="book-open"></i>
</div>
<div>
<p className="text-xs font-semibold text-white">Read Bonus</p>
<p className="text-[10px] text-slate-500">5 days ago</p>
</div>
</div>
<span className="text-xs font-bold text-emerald-400">+500 RC</span>
</div>
</div>
</div>
</div>
</template>

<template id="screen-rewards">
<div className="px-6 space-y-6 fade-in pt-2">

<div className="bg-indigo-600 rounded-2xl p-6 relative overflow-hidden shadow-2xl shadow-indigo-900/50">
<div className="relative z-10 flex flex-col items-start gap-4">
<div>
<span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded backdrop-blur-md border border-white/20">
                Featured
              </span>
<h2 className="text-xl font-bold text-white mt-2">
                Get €10 PayPal Credit
              </h2>
<p className="text-indigo-200 text-xs mt-1">
                Instant transfer to your account
              </p>
</div>
<button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
              Redeem for 10,000 RC
            </button>
</div>
<i className="absolute -bottom-4 -right-4 w-32 h-32 text-indigo-500/50 rotate-12" data-lucide="gift"></i>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-white">All Rewards</h3>
<button className="text-xs text-emerald-400 font-medium">
              History
            </button>
</div>
<div className="space-y-3">

<div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800">

<div className="flex flex-col items-center">
<span className="text-xs font-bold text-white leading-none">
                      ama
                    </span>
<div className="w-6 h-1 rounded-full border-b-2 border-yellow-500 mt-[-2px]"></div>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100">
                    Amazon Gift Card
                  </h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold mt-0.5">
                    €10.00 Value
                  </p>
</div>
</div>
<button className="bg-slate-800 border border-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-950 transition-colors">
                10k RC
              </button>
</div>

<div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center border border-blue-500/20">
<span className="text-lg font-bold italic text-blue-500">P</span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100">
                    PayPal Cash
                  </h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold mt-0.5">
                    €20.00 Value
                  </p>
</div>
</div>
<button className="bg-slate-800 border border-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-950 transition-colors">
                20k RC
              </button>
</div>

<div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center border border-rose-500/20">
<i className="w-6 h-6 text-rose-500" data-lucide="heart-handshake"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-100">
                    Donate to Charity
                  </h4>
<p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold mt-0.5">
                    Support Literacy
                  </p>
</div>
</div>
<button className="bg-slate-800 border border-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-950 transition-colors">
                500 RC
              </button>
</div>
</div>
</div>
</div>
</template>


    </>
  );
}
