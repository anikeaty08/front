import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { 
        sans: ['InterVariable', 'Inter', 'ui-sans-serif', 'system-ui'] 
      },
      colors: {
        canvas: '#f5f5f7',
      },
      borderRadius: { 
        '3xl': '1.5rem',
        '4xl': '2rem',
        '54': '54px'
      }
    }
  }
}

function toggleFilter() {
  const filterInput = document.getElementById('filterInput');
  const isHidden = filterInput.classList.contains('hidden');
  
  if (isHidden) {
    filterInput.classList.remove('hidden');
    filterInput.focus();
  } else {
    filterInput.classList.add('hidden');
    filterInput.value = '';
    filterTopics('');
  }
}

function filterTopics(query) {
  const topics = document.querySelectorAll('.topic-item');
  const lowerQuery = query.toLowerCase();
  
  topics.forEach(topic => {
    const text = topic.textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      topic.style.display = 'flex';
    } else {
      topic.style.display = 'none';
    }
  });
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-canvas w-full max-w-[375px] h-[812px] bg-neutral-950 rounded-[54px] pt-2 pr-2 pb-2 pl-2 shadow-2xl">
<div className="phone-screen">

<div className="safe-area-top bg-neutral-200"></div>

<div className="sticky top-0 z-10 bg-neutral-200 pt-2 pr-6 pb-3 pl-6 backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-[24px] h-[24px] text-neutral-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6" r="3"></circle><path d="M5 9v6"></path><circle cx="5" cy="18" r="3"></circle><path d="M12 3v18"></path><circle cx="19" cy="6" r="3"></circle><path d="M16 15.7A9 9 0 0 0 19 9"></path></svg>
<h1 className="text-2xl font-extrabold text-neutral-900 tracking-tighter">MicroLearn</h1>
</div>
</div>
</div>

<div className="content-area bg-neutral-200 pr-2 pl-2 space-y-4">

<div className="bg-neutral-800 border-0 rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-md">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 flex bg-neutral-700 rounded-full items-center justify-center">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-extrabold text-white tracking-tighter">Continue Learning</h3>
<p className="text-xs font-semibold text-neutral-300">Introduction to Astrophysics</p>
</div>
</div>
<div className="mb-5">
<div className="flex justify-between text-xs text-neutral-300 mb-1">
<span className="">Lesson 7 of 15</span>
<span className="">46%</span>
</div>
<div className="w-full h-2.5 bg-neutral-600 rounded-full overflow-hidden">
<div className="w-[46%] h-full bg-white rounded-full"></div>
</div>
</div>
<button className="w-full flex gap-2 hover:bg-neutral-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-opacity-50 text-xl font-extrabold text-neutral-800 tracking-tighter bg-white rounded-xl pt-3 pr-3 pb-3 pl-3 items-center justify-center">
<div className="w-10 h-10 flex bg-[#34F8BB] text-neutral-700 rounded-full items-center justify-center">
<svg className="w-[32px] h-[32px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
          Resume Learning
        </button>
</div>

<div className="hover:shadow-lg transition-shadow duration-150 cursor-pointer bg-white border-0 rounded-2xl px-3 py-3 shadow-sm">
<a className="flex items-center gap-3" href="#">
<div className="w-10 h-10 flex bg-neutral-700 rounded-full items-center justify-center">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-bold text-neutral-800 tracking-tighter">Start New Topic</h3>
<p className="text-xs font-semibold text-neutral-500">Explore something different</p>
</div>
</a>
</div>

<div className="bg-[#ffffff] border-0 rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="flex mb-2 items-center justify-between">
<h3 className="text-lg font-bold text-neutral-800 tracking-tighter pl-2">Recent Topics</h3>
<button className="hover:bg-neutral-100 transition-colors duration-150 bg-neutral-700 rounded-full pt-2 pr-2 pb-2 pl-2" onclick="toggleFilter()">
<svg className="w-[20px] h-[20px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>

<div className="mb-4 hidden" id="filterInput">
<input className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm border-neutral-200 border rounded-lg pt-2 pr-2 pb-2 pl-2" onkeyup="filterTopics(this.value)" placeholder="Filter topics..." type="text"/>
</div>
<div className="bg-[#C7C2BE] border-neutral-300 border rounded-xl py-2">
<a className="topic-item flex items-center gap-3 hover:bg-neutral-50 transition-colors duration-150 rounded-xl mr-2 mb-1 ml-2 pt-1 pr-2 pb-1 pl-2" href="#" style={{display: 'flex'}}>
<div className="progress-circle progress-circle-100"></div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-bold text-neutral-800 tracking-tight">Quantum Mechanics</p>
<p className="text-xs font-semibold text-neutral-500/60 tracking-tighter">2 hours ago</p>
</div>
</a>
<a className="topic-item flex items-center gap-3 hover:bg-neutral-50 transition-colors duration-150 rounded-xl mr-2 mb-1 ml-2 pt-1 pr-2 pb-1 pl-2" href="#" style={{display: 'flex'}}>
<div className="progress-circle progress-circle-100"></div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-bold text-neutral-800 tracking-tight">Machine Learning Basics</p>
<p className="text-xs font-semibold text-neutral-500/50 tracking-tighter">1 day ago</p>
</div>
</a>
<a className="topic-item flex items-center gap-3 hover:bg-neutral-50 transition-colors duration-150 rounded-xl mr-2 mb-1 ml-2 pt-1 pr-2 pb-1 pl-2" href="#" style={{display: 'flex'}}>
<div className="progress-circle progress-circle-90"></div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-bold text-neutral-800 tracking-tight">Computer Science Fundamentals</p>
<p className="text-xs font-semibold text-neutral-500/50 tracking-tighter">2 days ago</p>
</div>
</a>
<a className="topic-item flex items-center gap-3 hover:bg-neutral-50 transition-colors duration-150 rounded-xl mr-2 mb-1 ml-2 pt-1 pr-2 pb-1 pl-2" href="#" style={{display: 'flex'}}>
<div className="progress-circle progress-circle-64"></div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-bold text-neutral-800 tracking-tight">Philosophy &amp; Ethics</p>
<p className="text-xs font-semibold text-neutral-500/50 tracking-tighter">3 days ago</p>
</div>
</a>
<a className="topic-item flex items-center gap-3 hover:bg-neutral-50 transition-colors duration-150 rounded-xl mx-2 pt-1 pr-2 pb-1 pl-2" href="#" style={{display: 'flex'}}>
<div className="progress-circle progress-circle-12"></div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-bold text-neutral-800 tracking-tight">Organic Chemistry</p>
<p className="text-xs font-semibold text-neutral-500/50 tracking-tighter">1 week ago</p>
</div>
</a>
</div>
</div>
</div>

<div className="sticky bottom-0 left-0 right-0 shadow-[0_-2px_10px_-3px_rgba(0,0,0,0.05)] bg-neutral-200 border-0 border-t pt-2 pr-2 pb-2 pl-2 backdrop-blur-md">
<nav className="flex items-center justify-around">
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-800 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline className="" points="9 22 9 12 15 12 15 22"></polyline></svg>
<span className="text-xs font-medium text-neutral-950">Home</span>
</a>
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-500 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path><path d="M6 8h2"></path><path d="M6 12h2"></path><path d="M16 8h2"></path><path d="M16 12h2"></path></svg>
<span className="text-xs font-bold text-neutral-400">Topics</span>
</a>
<a className="flex flex-col items-center hover:text-blue-600 transition-colors w-1/4 text-neutral-500 rounded-lg pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="mb-0.5 w-[24px] h-[24px] text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-bold text-neutral-400">Profile</span>
</a>
</nav>
</div>

<div className="safe-area-bottom bg-neutral-200"></div>
</div>
</div>

    </>
  );
}
