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
      

<aside className="w-64 border-r border-zinc-200 bg-zinc-50/50 flex flex-col flex-shrink-0">

<div className="h-16 flex items-center px-6 border-b border-zinc-200">
<span className="text-xl tracking-tight font-semibold uppercase">NEXUS</span>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-900 bg-white border border-zinc-200 shadow-sm" href="#">
<iconify-icon className="text-lg text-zinc-500" icon="solar:feed-linear" strokeWidth="1.5"></iconify-icon>
                    Q&amp;A Feed
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-500" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
                    Company Pages
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors" href="#">
<iconify-icon className="text-lg text-zinc-500" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
                    Notifications
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">3</span>
</a>
</nav>

<div>
<div className="flex items-center justify-between px-3 mb-2">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Direct Messages</h3>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100/80 transition-colors group">
<div className="relative">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-medium border border-indigo-200 tracking-tighter">ER</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-zinc-50"></div>
</div>
<span className="text-sm text-zinc-600 font-medium group-hover:text-zinc-900">Elena Rostova</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100/80 transition-colors group">
<div className="relative">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-medium border border-emerald-200 opacity-80 grayscale tracking-tighter">MC</div>
</div>
<span className="text-sm text-zinc-500 font-medium group-hover:text-zinc-900">Marcus Chen</span>
</button>
</div>

<div className="px-2 mt-2">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg border border-dashed border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-white transition-all group">
<div className="w-6 h-6 flex items-center justify-center">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">Add friend</span>
</button>
</div>
</div>

<div>
<div className="flex items-center justify-between px-3 mb-2">
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Group Chats</h3>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-100/80 transition-colors">
<div className="w-6 h-6 rounded-md bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-xs" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-zinc-900 font-medium">Engineering Team</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100/80 transition-colors group">
<div className="w-6 h-6 rounded-md bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-white">
<iconify-icon className="text-xs" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 font-medium group-hover:text-zinc-900">Project Alpha</span>
</button>
</div>

<div className="px-2 mt-2">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg border border-dashed border-zinc-300 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:bg-white transition-all group">
<div className="w-6 h-6 flex items-center justify-center">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">Create group</span>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-200">
<button className="w-full flex items-center gap-3 hover:opacity-80 transition-opacity text-left">
<div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-medium shadow-sm flex-shrink-0">DM</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">David Miller</p>
<p className="text-xs text-zinc-500 truncate">Frontend Developer</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 flex items-center justify-between px-8 border-b border-zinc-200">
<h1 className="text-xl tracking-tight font-semibold text-zinc-900">Global Q&amp;A Feed</h1>
<div className="flex items-center gap-4">
<div className="relative w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all" placeholder="Search questions..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
                    Ask Question
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-3xl mx-auto space-y-6">

<div className="flex items-center gap-2 border-b border-zinc-100 pb-4">
<button className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-medium">All Topics</button>
<button className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium hover:bg-zinc-100">Engineering</button>
<button className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium hover:bg-zinc-100">Design</button>
<button className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium hover:bg-zinc-100">Announcements</button>
</div>

<article className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-medium border border-rose-200">SJ</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">2 hours ago</p>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<h2 className="text-lg tracking-tight font-semibold text-zinc-900 mb-2">What is the optimal way to structure a large React application?</h2>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        I'm starting a new monolithic React project and looking into feature-based vs file-type-based architectures. What patterns have scaled best for your teams?
                    </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">React</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">Architecture</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">142</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">24 Answers</span>
</button>
</div>
</div>
</article>

<article className="p-5 rounded-xl border border-blue-100 bg-blue-50/30 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-bl-lg">
                        Company Update
                    </div>
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-semibold text-sm">
                                AC
                            </div>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium text-zinc-900">Acme Corp</p>
<iconify-icon className="text-blue-600 text-xs" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Posted by Admin • 4 hours ago</p>
</div>
</div>
</div>
<h2 className="text-lg tracking-tight font-semibold text-zinc-900 mb-2">We are launching our new Developer API v2.0!</h2>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        After months of beta testing, our new API is now publicly available. It features improved real-time webhook delivery, higher rate limits, and simplified authentication. Check out the documentation.
                    </p>
<div className="w-full h-48 bg-zinc-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-zinc-200">
<img alt="Code" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=400"/>
</div>
<div className="flex items-center gap-4 border-t border-zinc-200/60 pt-3">
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-red-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">356</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Share</span>
</button>
</div>
</article>

<article className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-zinc-300 transition-colors group">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-medium border border-violet-200">MC</div>
<div>
<p className="text-sm font-medium text-zinc-900">Michael Chang</p>
<p className="text-xs text-zinc-500">Yesterday</p>
</div>
</div>
</div>
<h2 className="text-lg tracking-tight font-semibold text-zinc-900 mb-2">How to handle database migrations in a CI/CD pipeline without downtime?</h2>
<p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        We are currently experiencing brief lock periods when running heavy schema changes. Is the expand-and-contract pattern the only way?
                    </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">Database</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">DevOps</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">89</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-blue-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">12 Answers</span>
</button>
</div>
</div>
</article>
</div>
</div>
</main>

<aside className="w-80 border-l border-zinc-200 bg-white flex flex-col flex-shrink-0 hidden lg:flex">

<div className="h-16 flex items-center justify-between px-5 border-b border-zinc-200 bg-white">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="text-sm tracking-tight font-semibold text-zinc-900">Engineering Team</h2>
<p className="text-xs text-green-600 font-medium">4 online</p>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-5 bg-zinc-50/30">

<div className="flex items-center justify-center">
<span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">Today</span>
</div>

<div className="flex gap-2.5 max-w-[90%]">
<div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-medium border border-amber-200 mt-1 flex-shrink-0 tracking-tighter">AL</div>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-zinc-900">Alex</span>
<span className="text-xs text-zinc-400">10:42 AM</span>
</div>
<div className="bg-zinc-100 text-zinc-800 rounded-2xl rounded-tl-sm px-3.5 py-2 text-sm border border-zinc-200/60 shadow-sm">
                        Just pushed the new auth changes to staging. Can someone review the realtime hooks?
                    </div>
</div>
</div>

<div className="flex gap-2.5 max-w-[90%]">
<div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-medium border border-indigo-200 mt-1 flex-shrink-0 tracking-tighter">ER</div>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-zinc-900">Elena</span>
<span className="text-xs text-zinc-400">10:45 AM</span>
</div>
<div className="bg-zinc-100 text-zinc-800 rounded-2xl rounded-tl-sm px-3.5 py-2 text-sm border border-zinc-200/60 shadow-sm">
                        Looking at it now. The subscription logic looks much cleaner!
                    </div>
</div>
</div>

<div className="flex gap-2.5 max-w-[90%] self-end ml-auto justify-end">
<div className="flex flex-col gap-1 items-end">
<div className="flex items-baseline gap-2">
<span className="text-xs text-zinc-400">10:48 AM</span>
</div>
<div className="bg-zinc-900 text-white rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm shadow-sm">
                        Awesome, I'll merge it if the CI pipeline passes.
                    </div>
</div>
</div>

<div className="flex items-center gap-2 text-xs text-zinc-500 pt-2">
<div className="flex space-x-1">
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
<span>Alex is typing...</span>
</div>
</div>

<div className="p-4 border-t border-zinc-200 bg-white">
<div className="flex items-end gap-2 bg-zinc-50 border border-zinc-200 rounded-xl p-1 shadow-sm focus-within:ring-1 focus-within:ring-zinc-900 focus-within:border-zinc-900 transition-all">
<button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:gallery-add-linear" strokeWidth="1.5"></iconify-icon>
</button>
<textarea className="w-full bg-transparent text-sm py-2.5 focus:outline-none resize-none max-h-32 text-zinc-900 placeholder-zinc-400" placeholder="Message group..." rows="1"></textarea>
<button className="p-2 text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors flex-shrink-0 mb-0.5 mr-0.5">
<iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</aside>

    </>
  );
}
