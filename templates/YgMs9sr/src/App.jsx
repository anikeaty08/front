import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const logoText = document.getElementById('logo-text');
    const homeText = document.getElementById('home-text');
    const projectsText = document.getElementById('projects-text');
    const issuesText = document.getElementById('issues-text');
    const teamText = document.getElementById('team-text');
    const userText = document.getElementById('user-text');
    
    let sidebarExpanded = false;
    
    toggleBtn.addEventListener('click', () => {
      sidebarExpanded = !sidebarExpanded;
      
      if (sidebarExpanded) {
        sidebar.classList.remove('w-12');
        sidebar.classList.add('w-44');
        toggleBtn.classList.remove('left-12');
        toggleBtn.classList.add('left-44');
        toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>';
        
        // Show text
        logoText.classList.remove('hidden');
        homeText.classList.remove('hidden');
        projectsText.classList.remove('hidden');
        issuesText.classList.remove('hidden');
        teamText.classList.remove('hidden');
        userText.classList.remove('hidden');
      } else {
        sidebar.classList.remove('w-44');
        sidebar.classList.add('w-12');
        toggleBtn.classList.remove('left-44');
        toggleBtn.classList.add('left-12');
        toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>';
        
        // Hide text
        logoText.classList.add('hidden');
        homeText.classList.add('hidden');
        projectsText.classList.add('hidden');
        issuesText.classList.add('hidden');
        teamText.classList.add('hidden');
        userText.classList.add('hidden');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="p-[60px]">
<div className="w-[480px] h-[320px] bg-white rounded-lg shadow-lg overflow-hidden flex relative">

<div className="sidebar-transition w-12 h-full bg-gray-50 border-r border-gray-200 flex flex-col" id="sidebar">

<div className="p-3 border-b border-gray-200">
<div className="flex items-center">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">A</div>
<span className="ml-2 text-sm font-medium text-gray-800 hidden" id="logo-text">Aura</span>
</div>
</div>

<nav className="flex-1 pt-2 overflow-y-auto">
<ul className="px-2">
<li className="px-2 py-1.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium flex items-center">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
<span className="ml-2 text-xs hidden" id="home-text">Home</span>
</li>
<li className="px-2 py-1.5 mt-1 rounded-md text-gray-600 hover:bg-gray-100 text-xs flex items-center">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
</svg>
<span className="ml-2 text-xs hidden" id="projects-text">Projects</span>
</li>
<li className="px-2 py-1.5 mt-1 rounded-md text-gray-600 hover:bg-gray-100 text-xs flex items-center">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" fill-rule="evenodd"></path>
</svg>
<span className="ml-2 text-xs hidden" id="issues-text">Issues</span>
</li>
<li className="px-2 py-1.5 mt-1 rounded-md text-gray-600 hover:bg-gray-100 text-xs flex items-center">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20">
<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
</svg>
<span className="ml-2 text-xs hidden" id="team-text">Team</span>
</li>
</ul>
</nav>

<div className="p-3 border-t border-gray-200">
<div className="flex items-center">
<div className="w-6 h-6 rounded-full bg-gray-300"></div>
<span className="ml-2 text-xs font-medium text-gray-700 hidden" id="user-text">Your Name</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="h-10 border-b border-gray-200 flex items-center px-4">
<h1 className="text-sm font-medium text-gray-800">Dashboard</h1>
</div>

<div className="flex-1 p-3 bg-gray-50 overflow-y-auto">
<div className="bg-white p-3 rounded-lg shadow-sm mb-3">
<h3 className="text-xs font-medium text-gray-800 mb-2">Recent Activity</h3>
<p className="text-xs text-gray-600">No recent activity</p>
</div>
<div className="bg-white p-3 rounded-lg shadow-sm">
<h3 className="text-xs font-medium text-gray-800 mb-2">My Tasks</h3>
<div className="flex items-center py-1.5 border-b border-gray-100">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<p className="text-xs text-gray-700">Design new dashboard</p>
</div>
<div className="flex items-center py-1.5">
<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
<p className="text-xs text-gray-700">Update sidebar component</p>
</div>
</div>
</div>
</div>

<button className="absolute left-12 top-3 bg-gray-100 hover:bg-gray-200 rounded-r-md h-6 w-4 flex items-center justify-center shadow-sm" id="toggle-btn">
<svg className="w-3 h-3 text-gray-500" fill="none" id="toggle-icon" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>


    </>
  );
}
