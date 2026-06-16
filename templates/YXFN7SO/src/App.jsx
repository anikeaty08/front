import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex" id="app">

<aside className="hidden md:flex flex-col w-72 shrink-0 border-r border-white/5 bg-[#0d1014]/80 backdrop-blur-xl" id="sidebar">

<div className="flex items-center justify-between px-4 h-16 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center font-semibold tracking-tight">TM</div>
<span className="text-zinc-100 text-lg font-semibold tracking-tight">Task Magics</span>
</div>
<button className="p-2 rounded-md hover:bg-white/5 border border-white/5 transition" id="collapseBtn" title="Collapse">
<i className="w-4 h-4 text-zinc-400" data-lucide="panel-left-close"></i>
</button>
</div>

<nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 px-2 py-4 space-y-6">

<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Main</div>
<div className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="my-task">
<i className="w-4 h-4 text-zinc-400" data-lucide="check-square"></i>
<span className="text-sm text-zinc-200">My Task</span>
<span className="ml-auto text-[10px] rounded-full px-1.5 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/20">12</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="activities">
<i className="w-4 h-4 text-zinc-400" data-lucide="activity"></i>
<span className="text-sm text-zinc-200">Activities</span>
<span className="ml-auto h-2 w-2 rounded-full bg-emerald-500/80"></span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="dashboard">
<i className="w-4 h-4 text-zinc-400" data-lucide="layout-dashboard"></i>
<span className="text-sm text-zinc-200">Dashboard</span>
</a>
</div>
</div>

<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Actionables</div>
<div className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="projects">
<i className="w-4 h-4 text-zinc-400" data-lucide="kanban-square"></i>
<span className="text-sm text-zinc-200">My Projects</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="checklist">
<i className="w-4 h-4 text-zinc-400" data-lucide="list-checks"></i>
<span className="text-sm text-zinc-200">Checklist</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="timeline">
<i className="w-4 h-4 text-zinc-400" data-lucide="timeline"></i>
<span className="text-sm text-zinc-200">Timeline</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="reports">
<i className="w-4 h-4 text-zinc-400" data-lucide="bar-chart-3"></i>
<span className="text-sm text-zinc-200">Reports</span>
</a>
</div>
</div>

<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Logs</div>
<div className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="timesheet">
<i className="w-4 h-4 text-zinc-400" data-lucide="clock-3"></i>
<span className="text-sm text-zinc-200">Timesheet</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="location">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin"></i>
<span className="text-sm text-zinc-200">Location</span>
</a>
</div>
</div>

<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Comms</div>
<div className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="conversation">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square"></i>
<span className="text-sm text-zinc-200">My Conversation</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="teams">
<i className="w-4 h-4 text-zinc-400" data-lucide="users"></i>
<span className="text-sm text-zinc-200">Teams</span>
</a>
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="visitors">
<i className="w-4 h-4 text-zinc-400" data-lucide="radar"></i>
<span className="text-sm text-zinc-200">Visitors Online</span>
<span className="ml-auto text-[10px] rounded-full px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">8</span>
</a>
</div>
</div>

<div>
<div className="px-2 mb-2 text-[11px] uppercase tracking-widest text-zinc-500">Settings</div>
<div className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" data-route="settings">
<i className="w-4 h-4 text-zinc-400" data-lucide="settings"></i>
<span className="text-sm text-zinc-200">Settings</span>
</a>
<button className="group flex w-full items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition cursor-pointer" id="helpBtn">
<i className="w-4 h-4 text-zinc-400" data-lucide="life-buoy"></i>
<span className="text-sm text-zinc-200">Help / Docs</span>
</button>
</div>
</div>
</nav>

<div className="mt-auto px-3 py-3 border-t border-white/5">
<div className="flex items-center gap-3">
<img alt="user" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;h=128&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm text-zinc-100 truncate">Alex Rivera</div>
<div className="text-xs text-zinc-500">Product Lead</div>
</div>
<button className="ml-auto p-2 rounded-md hover:bg-white/5 border border-white/5 transition" title="Sign out">
<i className="w-4 h-4 text-zinc-400" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<div className="md:hidden fixed top-0 inset-x-0 h-14 border-b border-white/5 bg-[#0d1014]/90 backdrop-blur flex items-center px-3 z-40">
<button className="p-2 rounded-md hover:bg-white/5 border border-white/5 transition" id="mobileMenuBtn">
<i className="w-5 h-5 text-zinc-300" data-lucide="panel-left-open"></i>
</button>
<div className="ml-3 flex items-center gap-2">
<div className="h-7 w-7 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center font-semibold">TM</div>
<span className="text-zinc-100 font-medium tracking-tight">Task Magics</span>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="my-task">
<i className="w-5 h-5 text-zinc-300" data-lucide="check-square"></i>
</button>
<button className="p-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="dashboard">
<i className="w-5 h-5 text-zinc-300" data-lucide="layout-dashboard"></i>
</button>
</div>
</div>

<div className="md:hidden fixed inset-0 z-50 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-[#0d1014] border-r border-white/5 overflow-y-auto">
<div className="flex items-center justify-between px-4 h-14 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center font-semibold">TM</div>
<span className="text-zinc-100 font-medium tracking-tight">Task Magics</span>
</div>
<button className="p-2 rounded-md hover:bg-white/5 border border-white/5 transition" id="mobileCloseBtn">
<i className="w-4 h-4 text-zinc-400" data-lucide="x"></i>
</button>
</div>

<div className="p-3 space-y-5">
<div>
<div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Main</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition" data-route="my-task">
<i className="w-4 h-4 text-zinc-400" data-lucide="check-square"></i><span className="text-sm">My Task</span>
</button>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition" data-route="activities">
<i className="w-4 h-4 text-zinc-400" data-lucide="activity"></i><span className="text-sm">Activities</span>
</button>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/5 transition" data-route="dashboard">
<i className="w-4 h-4 text-zinc-400" data-lucide="layout-dashboard"></i><span className="text-sm">Dashboard</span>
</button>
</div>
</div>
<div>
<div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Actionables</div>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="projects">
<i className="w-4 h-4 text-zinc-400" data-lucide="kanban-square"></i><span className="text-sm">Projects</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="checklist">
<i className="w-4 h-4 text-zinc-400" data-lucide="list-checks"></i><span className="text-sm">Checklist</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="timeline">
<i className="w-4 h-4 text-zinc-400" data-lucide="timeline"></i><span className="text-sm">Timeline</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="reports">
<i className="w-4 h-4 text-zinc-400" data-lucide="bar-chart-3"></i><span className="text-sm">Reports</span>
</button>
</div>
</div>
<div>
<div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Logs</div>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="timesheet">
<i className="w-4 h-4 text-zinc-400" data-lucide="clock-3"></i><span className="text-sm">Timesheet</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="location">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin"></i><span className="text-sm">Location</span>
</button>
</div>
</div>
<div>
<div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">Comms</div>
<div className="grid grid-cols-3 gap-2">
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="conversation">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-square"></i><span className="text-sm">DM</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="teams">
<i className="w-4 h-4 text-zinc-400" data-lucide="users"></i><span className="text-sm">Teams</span>
</button>
<button className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="visitors">
<i className="w-4 h-4 text-zinc-400" data-lucide="radar"></i><span className="text-sm">Online</span>
</button>
</div>
</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" data-route="settings">
<i className="w-4 h-4 text-zinc-400" data-lucide="settings"></i><span className="text-sm">Settings</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 border border-white/5 transition" id="helpBtnMobile">
<i className="w-4 h-4 text-zinc-400" data-lucide="life-buoy"></i><span className="text-sm">Help / Docs</span>
</button>
</div>
</div>
</div>
</div>

<main className="flex-1 flex flex-col md:ml-0">

<header className="hidden md:flex sticky top-0 z-30 h-16 items-center gap-3 px-4 bg-[#0b0d0f]/80 backdrop-blur border-b border-white/5">

<div className="min-w-0">
<h1 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-zinc-100" id="pageTitle">My Task</h1>
<p className="text-xs text-zinc-500" id="pageSubtitle">Personalized view of your tasks, filters and sorting.</p>
</div>

<div className="hidden lg:flex ml-6 flex-1 max-w-2xl">
<div className="flex items-center gap-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 focus-within:border-orange-500/40 focus-within:ring-1 focus-within:ring-orange-500/30 transition">
<i className="w-4 h-4 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none text-sm placeholder-zinc-500 text-zinc-200" id="globalSearch" placeholder="Search tasks, projects, messages..."/>
<kbd className="hidden md:block text-[10px] text-zinc-400 border border-white/10 rounded px-1.5 py-0.5">/</kbd>
</div>
</div>

<div className="ml-auto flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500/15 hover:border-orange-500/40 px-3 py-2 text-sm transition" id="addTaskBtn">
<i className="w-4 h-4" data-lucide="plus"></i>Add Task
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm transition" id="createProjectBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="folder-plus"></i>Create Project
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm transition" id="startTimerBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="timer"></i>Start Timer
          </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm transition" id="uploadFileBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="upload"></i>Upload File
            <input className="hidden" id="hiddenFile" type="file"/>
</button>

<button className="relative p-2 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition" id="notifBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500 text-[10px] text-black flex items-center justify-center font-medium">3</span>
</button>
</div>
</header>

<section className="mt-14 md:mt-0 p-4 md:p-6 space-y-6" id="content">

<div className="app-view space-y-5" id="view-my-task">

<div className="flex flex-col md:flex-row md:items-center gap-2">
<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-sm transition" id="statusFilterBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="filter"></i>Status: All
                  <i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-2 w-44 rounded-md border border-white/10 bg-[#0d1014] shadow-lg z-20" id="statusFilterMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-status="all">All</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-status="open">Open</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-status="in-progress">In Progress</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-status="blocked">Blocked</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-status="done">Done</button>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-sm transition" id="sortBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="arrow-up-down"></i>Sort
                  <i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-2 w-48 rounded-md border border-white/10 bg-[#0d1014] shadow-lg z-20" id="sortMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="priority">Priority</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="due">Due Date</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-white/5" data-sort="status">Status</button>
</div>
</div>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-sm transition" id="viewListBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="list"></i>List
              </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-sm transition" id="viewBoardBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="layout-grid"></i>Board
              </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4" id="taskListView">

<div className="group rounded-lg border border-white/10 bg-[#0e1116] hover:bg-[#10141a] transition p-4">
<div className="flex items-start gap-3">
<button aria-label="toggle" className="custom-checkbox h-5 w-5 rounded-md border border-white/15 bg-white/0 flex items-center justify-center hover:border-orange-500/40 transition">
<i className="w-3.5 h-3.5 text-black hidden pointer-events-none" data-lucide="check"></i>
</button>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-medium tracking-tight truncate">Design landing page hero</span>
<span className="ml-auto text-[11px] rounded-md px-1.5 py-0.5 border border-orange-500/20 bg-orange-500/10 text-orange-400">High</span>
</div>
<div className="mt-1 text-xs text-zinc-500 flex items-center gap-2">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>In Progress
                    </span>
<span className="text-zinc-600">•</span>
<span>Due in 2 days</span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1531123414780-f742cb95a8f2?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="Comment">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-circle"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="Attach">
<i className="w-4 h-4 text-zinc-400" data-lucide="paperclip"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="More">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-2/3"></div>
</div>
</div>

<div className="group rounded-lg border border-white/10 bg-[#0e1116] hover:bg-[#10141a] transition p-4">
<div className="flex items-start gap-3">
<button aria-label="toggle" className="custom-checkbox h-5 w-5 rounded-md border border-white/15 bg-white/0 flex items-center justify-center hover:border-orange-500/40 transition">
<i className="w-3.5 h-3.5 text-black hidden pointer-events-none" data-lucide="check"></i>
</button>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-medium tracking-tight truncate">Integrate payment gateway</span>
<span className="ml-auto text-[11px] rounded-md px-1.5 py-0.5 border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">Medium</span>
</div>
<div className="mt-1 text-xs text-zinc-500 flex items-center gap-2">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Open
                    </span>
<span className="text-zinc-600">•</span>
<span>Due in 5 days</span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="Comment">
<i className="w-4 h-4 text-zinc-400" data-lucide="message-circle"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="Attach">
<i className="w-4 h-4 text-zinc-400" data-lucide="paperclip"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="More">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-1/3"></div>
</div>
</div>

<div className="group rounded-lg border border-white/10 bg-[#0e1116] hover:bg-[#10141a] transition p-4">
<div className="flex items-start gap-3">
<button className="custom-checkbox h-5 w-5 rounded-md border border-white/15 bg-white/0 flex items-center justify-center hover:border-orange-500/40 transition">
<i className="w-3.5 h-3.5 text-black hidden pointer-events-none" data-lucide="check"></i>
</button>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-medium tracking-tight truncate">Fix onboarding bugs</span>
<span className="ml-auto text-[11px] rounded-md px-1.5 py-0.5 border border-red-500/20 bg-red-500/10 text-red-400">Urgent</span>
</div>
<div className="mt-1 text-xs text-zinc-500 flex items-center gap-2">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>Blocked
                    </span>
<span className="text-zinc-600">•</span>
<span>Due today</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-1/5"></div>
</div>
</div>
<div className="group rounded-lg border border-white/10 bg-[#0e1116] hover:bg-[#10141a] transition p-4">
<div className="flex items-start gap-3">
<button className="custom-checkbox h-5 w-5 rounded-md border border-white/15 bg-white/0 flex items-center justify-center hover:border-orange-500/40 transition">
<i className="w-3.5 h-3.5 text-black hidden pointer-events-none" data-lucide="check"></i>
</button>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-medium tracking-tight truncate">Write release notes</span>
<span className="ml-auto text-[11px] rounded-md px-1.5 py-0.5 border border-sky-500/20 bg-sky-500/10 text-sky-400">Low</span>
</div>
<div className="mt-1 text-xs text-zinc-500 flex items-center gap-2">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Open
                    </span>
<span className="text-zinc-600">•</span>
<span>No due date</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-[10%]"></div>
</div>
</div>
</div>

<div className="hidden grid grid-cols-1 md:grid-cols-3 gap-4" id="taskBoardView">

<div className="rounded-lg border border-white/10 bg-[#0e1116] p-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Open</h3>
<span className="text-xs text-zinc-500">4</span>
</div>
<div className="mt-3 space-y-2 min-h-[200px]" id="col-open">
<div className="dnd-card rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-3 text-sm" draggable="true">Set up analytics</div>
<div className="dnd-card rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-3 text-sm" draggable="true">Wireframe mobile nav</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">In Progress</h3>
<span className="text-xs text-zinc-500">3</span>
</div>
<div className="mt-3 space-y-2 min-h-[200px]" id="col-inprogress">
<div className="dnd-card rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-3 text-sm" draggable="true">Update components</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Done</h3>
<span className="text-xs text-zinc-500">10</span>
</div>
<div className="mt-3 space-y-2 min-h-[200px]" id="col-done">
<div className="dnd-card rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-3 text-sm line-through text-zinc-500" draggable="true">Legal review</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-activities">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Live feed
            </span>
<button className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-1.5 text-xs transition" id="muteLiveBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="bell-off"></i>Mute
            </button>
</div>
<div className="space-y-3" id="activityFeed">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4 flex items-start gap-3">
<img className="h-8 w-8 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm"><span className="text-zinc-100 font-medium">Priya</span> moved task <span className="text-zinc-100">“Design landing page hero”</span> to In Progress.</div>
<div className="text-xs text-zinc-500 mt-1">Just now</div>
</div>
<button className="ml-auto p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition"><i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i></button>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-dashboard">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="text-xs text-zinc-500">Open Tasks</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">32</div>
<div className="mt-2 text-[11px] text-emerald-400">+12% this week</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="text-xs text-zinc-500">Completed</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">128</div>
<div className="mt-2 text-[11px] text-emerald-400">+6 this week</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="text-xs text-zinc-500">Overdue</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">5</div>
<div className="mt-2 text-[11px] text-red-400">-2 vs last week</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="text-xs text-zinc-500">On-time rate</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">91%</div>
<div className="mt-2 text-[11px] text-zinc-400">SLA 85%</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Tasks per week</h3>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">This quarter</button>
</div>
<div className="mt-3 rounded-md border border-white/5 bg-[#0c0f13] p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full"><canvas id="chartTasks"></canvas></div>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Status distribution</h3>
<div className="mt-3 rounded-md border border-white/5 bg-[#0c0f13] p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full"><canvas id="chartStatus"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-projects">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="folder"></i>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-zinc-100 font-medium tracking-tight truncate">Website Redesign</h3>
<span className="ml-auto text-[11px] rounded px-1.5 py-0.5 border border-emerald-500/20 text-emerald-400 bg-emerald-500/10">Healthy</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">New brand identity, responsive layout, performance</p>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-[62%]"></div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Open</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Add Task</button>
<button className="ml-auto p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="More">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="folder"></i>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-zinc-100 font-medium tracking-tight truncate">Mobile App</h3>
<span className="ml-auto text-[11px] rounded px-1.5 py-0.5 border border-amber-500/20 text-amber-400 bg-amber-500/10">At risk</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Notifications, offline mode, accessibility</p>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-[38%]"></div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Open</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Add Task</button>
<button className="ml-auto p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="More">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="folder"></i>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h3 className="text-zinc-100 font-medium tracking-tight truncate">Data Platform</h3>
<span className="ml-auto text-[11px] rounded px-1.5 py-0.5 border border-red-500/20 text-red-400 bg-red-500/10">Critical</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Pipelines, observability, governance</p>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-orange-500/80 w-[20%]"></div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Open</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Add Task</button>
<button className="ml-auto p-1.5 rounded-md hover:bg-white/5 border border-white/10 transition" title="More">
<i className="w-4 h-4 text-zinc-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-checklist">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Templates</h3>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">New Template</button>
</div>
<div className="mt-3 space-y-2">
<div className="rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3 text-sm">Bug triage checklist</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3 text-sm">Release checklist</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3 text-sm">Onboarding checklist</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Ongoing</h3>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition" id="addChecklistItemBtn">Add Item</button>
<span className="text-xs text-zinc-500">Drag to reorder</span>
</div>
</div>
<div className="mt-3 space-y-2" id="checklist">
<div className="checklist-item flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3" draggable="true">
<button className="custom-checkbox h-4 w-4 rounded border border-white/15 flex items-center justify-center">
<i className="w-3 h-3 text-black hidden" data-lucide="check"></i>
</button>
<span className="text-sm">Verify error logs</span>
</div>
<div className="checklist-item flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3" draggable="true">
<button className="custom-checkbox h-4 w-4 rounded border border-white/15 flex items-center justify-center">
<i className="w-3 h-3 text-black hidden" data-lucide="check"></i>
</button>
<span className="text-sm">Update documentation</span>
</div>
<div className="checklist-item flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-3" draggable="true">
<button className="custom-checkbox h-4 w-4 rounded border border-white/15 flex items-center justify-center">
<i className="w-3 h-3 text-black hidden" data-lucide="check"></i>
</button>
<span className="text-sm">QA smoke tests</span>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-timeline">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Gantt-style timeline</h3>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Week</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Month</button>
</div>
</div>
<div className="mt-4 grid grid-cols-5 gap-4">
<div className="col-span-2 space-y-3">
<div className="text-xs text-zinc-500">Tasks</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm">Design</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm">API</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm">QA</div>
</div>
<div className="col-span-3">
<div className="text-xs text-zinc-500">Timeline</div>
<div className="relative rounded-md border border-white/10 bg-white/[0.02] h-40 overflow-hidden">

<div className="absolute inset-0 grid grid-cols-12">
<div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div>
<div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div>
<div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div>
<div className="border-r border-white/[0.06]"></div><div className="border-r border-white/[0.06]"></div><div></div>
</div>

<div className="absolute top-3 left-[8%] w-[30%] h-7 rounded-md bg-orange-500/30 border border-orange-500/50 gantt-bar cursor-grab active:cursor-grabbing" data-row="0"></div>
<div className="absolute top-[44%] left-[22%] w-[40%] h-7 rounded-md bg-emerald-500/25 border border-emerald-500/50 gantt-bar cursor-grab active:cursor-grabbing" data-row="1"></div>
<div className="absolute bottom-3 left-[60%] w-[25%] h-7 rounded-md bg-sky-500/25 border border-sky-500/50 gantt-bar cursor-grab active:cursor-grabbing" data-row="2"></div>
</div>
<div className="mt-2 text-[11px] text-zinc-500">Drag bars to adjust schedule. Dependencies and milestones can be toggled in advanced mode.</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-reports">
<div className="flex items-center gap-2">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Analytics &amp; Reports</h3>
<button className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-1.5 text-xs transition" id="exportBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="download"></i>Export CSV
            </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-zinc-500">Velocity</div>
<div className="text-xl font-semibold tracking-tight text-zinc-100">Tasks completed</div>
</div>
</div>
<div className="mt-3 rounded-md border border-white/5 bg-[#0c0f13] p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full"><canvas id="chartVelocity"></canvas></div>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="text-xs text-zinc-500">Team efficiency</div>
<div className="text-xl font-semibold tracking-tight text-zinc-100">Cycle time</div>
<div className="mt-3 rounded-md border border-white/5 bg-[#0c0f13] p-3">
<div className="relative h-64">
<div className="absolute inset-0">
<div className="h-full"><canvas id="chartCycle"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-timesheet">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Timers</h3>
<button className="text-xs px-2 py-1 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500/15 hover:border-orange-500/40 transition" id="newTimerBtn">New Timer</button>
</div>
<div className="mt-3 space-y-2" id="timersList">
<div className="timer-row flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] p-3">
<i className="w-4 h-4 text-zinc-400" data-lucide="clock-3"></i>
<input className="bg-transparent text-sm flex-1 outline-none" value="Design landing page"/>
<span className="timer-display text-sm font-medium tabular-nums">00:00:00</span>
<button className="timer-toggle text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 transition">Start</button>
<button className="timer-reset text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 transition">Reset</button>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Manual entry</h3>
<div className="mt-3 space-y-2">
<input className="w-full bg-white/[0.02] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/30" id="manualTask" placeholder="Task name"/>
<div className="grid grid-cols-2 gap-2">
<input className="w-full bg-white/[0.02] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/30" id="manualHours" placeholder="Hours"/>
<input className="w-full bg-white/[0.02] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/30" id="manualDate" type="date"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm transition" id="addManualBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="plus"></i>Add Entry
                </button>
</div>
<div className="mt-3 space-y-2" id="manualList"></div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-location">
<div <div="" className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Current location</h3>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.] transition inline-flex items-center gap-1" id="useLocationBtn">
<i className="w-4 h-4 text-zinc-300" data-lucide="locate"></i>Use my location
                </button>
<button className="text-xs px-2 py-1 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500/15 hover:border-orange-500/40 transition inline-flex items-center gap-1" idcheckinbtn"="">
<i ="w-4="" data-lucide="check-in" h4"=""></i>Check
                </button>
</div>
</div>
<div className="mt3 relative rounded-md border border-white/10 bg-gradient-to-b from-[#0cf13] to-[#0a0c10] h-64 overflow-hidden">

<div className="absolute inset-0 grid grid-cols-8">
<div className="-r border-white/[0.04]"></div><div className="border-r border-white/[0.04]"></div><div="border-r [0.04]"="" border-white=""></div="border-r></div>
<div="border-r [0.04]"="" border-white=""></div="border-r></div><div className="border-r border-white/[0.04]"></div><div className="border-r border-white/[0.04]"></div>
<div className="border-r border-white/[0.04]"></div><div></div>
</div>
<div className="absolute inset-0">
<svg aria-hidden="true" className="w-full h-full opacity-10" preserveaspectratio="none" viewbox="0 0 800 256">
<path 250,220="" 400,170="" 650,200="" 800,140"="" <="" c150,150="" c550,120="" dm0,200="" fill="none" stroke="white" stroke-opacity="0.15" strokeWidth="2" svg="">
</path></svg></div>

<div className="absolute left-[20%]-[40%]">
<span 40="" bg-orange-500="" block"="" border="" border-orange-300="" className="absolute -inset-2 rounded-full bg-orange-500/20 animate-pingspan&gt; &lt;span class=" h-3="" relative="" rounded-full="" w-3=""></span>
</div>
<div className="absolute left-[62%] top-[55%]">
<span bg-emerald-400="" block"="" border="" border-emerald-300="" className="absolute -inset-2 rounded-full bg-emerald-400/20 animate-pingspan&gt; &lt;span class=" h-3="" relative="" rounded-full="" w-3=""></span>
</div>
<div className="hidden absolute" id="myLocationDot">
<span className="absolute -inset-2 rounded-full bg-s-400/20 animate-ping"></span>
<span className="relative h-3 w-3 rounded-full bg-sky-400 border border-sky300/40"></span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-500">
<spanapproximate map="" preview<="" span="">
<span id="locationStatus">Lat —, Lng —</span>
</spanapproximate></div>
</div>
</section></main></div>
<div className="rounded-lg border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Check-ins</h3>
<span className="text-xs text-zinc-500">Latest 5</span>
</div>
<div className="mt-3 space-y-2" id="checkinList">
<div className="rounded-md border border-white/10 bg-white/[0.03]-3 text-sm flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" dataucide="map-pin"></i>
<span className="truncate">HQ Lobby — 09:00 AM</span>
<span className="ml-auto text-[11px] text-zinc-500">Today</span>
</div>
</div>
</div>


<div className="app-view hidden space-y-5" id="view-conversation">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="message-square"></i>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-100">Direct Messages</h3>
              &lt; className="ml-auto flex items-center gap-2"&gt;
                <button className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition"> chat</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition">Search</button>
</div>
</div>
<div className="mt-3 grid grid-cols-1 lg:grid-cols-4 gap3">
<div className="space-y-2 lg:col-span-1">
<input="w-full 10="" 30"="Search people" 40="" [0.02]="" bg-white="" border="" border-white="" focus:border-orange-="" focus:ring-1="" focus:ring-orange-500="" outline-none="" px-3="" py-2="" rounded-md="" text-sm="" /></input="w-full>
<div -full="" 10="" [0.03]="" [0.06]="" bg-white="" border="" border-white="" className="space-y-1 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 &lt;button class=" flex="" gap-2"="" hover:bg-white="" items-center="" p-2="" rounded-md="" text-left="" text-sm="" transition="">
<img className="h-6 w-6 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
 &lt;&gt;Priya
<span className="ml-auto h-2 w-2 rounded-full bg-emerald-500"></span>

<button className="w-full text-left rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-2 text-sm flex items-center gap-2">
<img className="h-6 w-6 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1545260-76bcadfb4f2c?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<span>Alex</span>
</button>
<button className="w-full text-left rounded-md border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-2 text-sm flex items-center gap-2">
<img 10"="" ="h-6="" ring="" ring-1="" rounded-full="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;h=64&amp;fit=crop" w-6=""/>
<span>M</span>
</button>
</div>
<div className="lg:col-span-3 flex flex-col rounded-md border border-white/10 bg/[0.02] h-[480px]">
<div className="px-3 py-2 border-b border-white/10 text-sm text-zinc-300 flex items-center gap-2">
<img className="h-6 w-6 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<span className="font-medium text-zinc-100">Priya</span>
<span className="ml text-[11px] text-zinc-500">Typing…</span>
</div>
<div className="flex items-start gap-2">
<img className="h-6 w-6 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1529663569-6d01ceaf7b6?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<div className="max-w-[75%] rounded-md bg-white/[0.05] border border-white/10 px-3 py2 text-sm">Hey! Can you review the hero copy?</div>
<div className="flex items-start gap-2 justify-end">
<div className="-w-[75%] rounded-md bg-orange-500/10 border border-orange-500/30 px-3-2 text-sm">Sure, pushing edits in 10 mins.</div>
</div>
</div>
<form chatinput"="" className="flex-1 bg-white/[003] border border-white/10 rounded-md px-3 py-2 text-sm-none focus:border-orange-500/40 focus:ring-1 focus:ring-orange-500/30" id="chatForm" placeholder="Type a message..."></form>
<button className="inline-flex items-center gap-2-md border border-orange-500/30 bg-orange-500/10 text-400 hover:bg-orange-500/15 hover:border-orange-500/40 px-3 py-2 text-sm transition">
<i className="w-4 h-4" data-lucide="send"></i>Send
                  
                
</button></div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-teams">
<div className="rounded-lg border border-white/10 bg-[#0e1116] p-4">
            &lt; className="flex items-center justify-between"&gt;
              <h3 className="text-sm font-medium tracking-tight text-zinc-100">Teams</h3>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition">Create Team</button>
</div>
<div className="mt- grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2">
<i className="w-4-4 text-zinc-400" data-lucide="users"></i>
<div className="text-sm font-medium text-zinc-100">Design</div>
<span className="ml text-[11px] rounded px-1.5 py-0.5 border border-white/10 text-zinc-400">6</span>
</div>
<div className="mt-3 flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<img="https: className="h-7 w-7 rounded-full ring-1 ring-white/10" images.unsplash.com="" photo-1531123414780-f742cb958f2?q='80&amp;w=64&amp;h64&amp;fit=crop"' /></img="https:>
<img className="h- w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">View</button>
<button className="text-xs px-2 py1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Invite</button>
</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-z-400" data-lucide="users"></i>
<div className="text-sm font-medium text-zinc-100">Engineering</div>
<span className="ml-auto text-[11px] rounded px-1.5 py-0.5 border border-white/10 text-zinc-400">10</span>
</div>
<div className="mt-3 flex -space-x-2">
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=&amp;h=64&amp;fit=crop"/>
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e?q=80&amp;w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">View</button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Invite</button>
</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="users"></i>
<div className="text font-medium text-zinc-100">Support</div>
<span className="ml-auto text-[11px] rounded px-1.5 py-0.5 border border-white/10 text-zinc-400">4span&gt;
                </span></div>
<div className="mt-3 flexspace-x-2">
<img className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;h=&amp;fit=crop"/>
<img className="h-7 w7 rounded-full ring-1 ring-white/10" images.unsplash.com="" photo-1531123414780-f742cb95a8f2?q='80&amp;w=64&amp;h=64&amp;fit=crop"' srchttps:=""/>
<img className="h-7 w- rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;h=64fit=crop"/>
</div>
<div="mt-3 flex="" gap-2"="" items-center="">
<button className="text-xs px-2-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06]">View</button>
 &lt; className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg/[0.03] hover:bg-white/[0.06] transition"&gt;Invite
</div="mt-3></div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-visitors">
<div className="-lg border border-white/10 bg-[#0e1116] p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-tight text-zinc-100">Visitors online</h3>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition inline-flex items-center gap-1" id="refreshVisitors">
<i className="w-4 h4-zinc-300" data-lucide="refresh-ccw"></i>Refresh
                </button>
<button className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition">Export</button>
</div>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead="text-[11px] text-zinc-500"="" tracking-wider="" uppercase="">
<tr className="text-left">
<th className="py- px-3">Visitor</th>
<th className="py- px-3">Page</th>
<th className="py-2 px-3">Duration</th>
<th className="py-2 px-3">Region</th>
<th className="py-2 px-3 text-right">Action</th>

<tbody className="divide-y divide-white/5" id="visitorsBody">
<tr className="hover:bg-white/[0.03]">
<td className="-2 px3">Guest-1823</td>
<td className="py-2 px-">/pricing</td>
<td className="py-2 px-3">03:21</td>
<td className="py-2 px-3">US</td>
<td className="py-2 px-3-right">
<button className="text-xs- py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Ping</button>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 px-3">Guest-9874td&gt;
                    <td className="py-2 px-3">/blog/ui-trends</td>
<td className="py-2 px-3">00:54</td>
<td className="py-2 px-3">DE</td>
<td className="py-2 px-3 text-right">
<button className="-xs px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition">Ping</button>
</td>
</td></tr>
</tbody>
</tr></thead="text-[11px]></table>
</div>
</div>

</div>
    </>
  );
}
