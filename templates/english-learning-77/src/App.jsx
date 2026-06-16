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
      

<aside className="w-64 bg-white border-r border-indigo-200 flex-col hidden lg:flex z-10">

<div className="h-16 flex items-center px-6 border-b border-indigo-100">
<span className="font-semibold text-xl tracking-tighter text-blue-600">ENGLA</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<div className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3 px-3">Learning Path</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:text-indigo-900 hover:bg-indigo-50 transition-colors text-blue-600" href="#">
<iconify-icon className="text-lg text-indigo-400" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-blue-700 bg-blue-50 transition-colors relative" href="#">
<iconify-icon className="text-lg text-blue-600" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
                Grammar Rules
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 rounded-r-full"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:text-indigo-900 hover:bg-indigo-50 transition-colors text-blue-600" href="#">
<iconify-icon className="text-lg text-indigo-400" icon="solar:cards-linear" strokeWidth="1.5"></iconify-icon>
                Vocabulary
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:text-indigo-900 hover:bg-indigo-50 transition-colors justify-between text-blue-600" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-indigo-400" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
                    Assessments
                </div>
<span className="bg-green-100 text-green-600 py-0.5 px-2 rounded-md text-xs font-medium">2 Pending</span>
</a>
<div className="text-xs font-medium text-indigo-400 uppercase tracking-widest mt-8 mb-3 px-3">Account</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:text-indigo-900 hover:bg-indigo-50 transition-colors text-blue-600" href="#">
<iconify-icon className="text-lg text-indigo-400" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                Progress Tracker
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:text-indigo-900 hover:bg-indigo-50 transition-colors text-blue-600" href="#">
<iconify-icon className="text-lg text-indigo-400" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
</nav>

<div className="p-4 border-t border-indigo-100">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-medium">
                    JS
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-indigo-900 truncate">Jane Smith</p>
<p className="text-xs text-indigo-500 truncate">B2 Intermediate</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-indigo-50">

<header className="h-16 bg-white border-b border-indigo-200 flex items-center justify-between px-6 sticky top-0 z-20">
<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden text-indigo-400 hover:text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="hidden md:flex items-center max-w-md w-full bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-sm ml-2 text-indigo-700 placeholder:text-indigo-400" placeholder="Search lessons, vocabulary..." type="text"/>
<div className="flex items-center gap-1">
<kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs text-indigo-400 border border-indigo-200 rounded bg-white font-sans">⌘</kbd>
<kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs text-indigo-400 border border-indigo-200 rounded bg-white font-sans">K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-indigo-400 hover:text-indigo-600 relative p-1">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
</button>
<div className="hidden sm:flex items-center gap-2 border-l border-indigo-200 pl-4 ml-2">
<div className="flex items-center gap-1 text-green-500">
<iconify-icon className="text-lg" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">12 Day Streak</span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="">
<nav aria-label="Breadcrumb" className="flex text-xs text-indigo-500 mb-3">
<ol className="inline-flex items-center space-x-1 md:space-x-2">
<li className="inline-flex items-center">
<a className="hover:text-indigo-900 transition-colors" href="#">Courses</a>
</li>
<li>
<div className="flex items-center">
<iconify-icon className="text-indigo-400 mx-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-indigo-900 transition-colors" href="#">Intermediate Grammar</a>
</div>
</li>
<li>
<div className="flex items-center">
<iconify-icon className="text-indigo-400 mx-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-indigo-900 font-medium">Module 4</span>
</div>
</li>
</ol>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div className="">
<h1 className="text-3xl font-medium tracking-tight text-indigo-900 mb-2">Present Perfect vs. Past Simple</h1>
<p className="text-sm text-indigo-500 max-w-2xl">Learn how to distinguish between actions completed at a specific time in the past and actions that connect the past to the present.</p>
</div>

<div className="w-full md:w-48 bg-white p-3 rounded-lg border border-indigo-200 shadow-sm flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-indigo-700">Lesson Progress</span>
<span className="text-blue-600 font-medium">65%</span>
</div>
<div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<section className="bg-white rounded-xl border border-indigo-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-indigo-100 flex items-center gap-3">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight text-indigo-900">Grammar Explanation</h2>
</div>
<div className="p-6">
<p className="text-sm mb-6 leading-relaxed text-blue-600">
                                    Use the <strong>Present Perfect</strong> (<span className="text-blue-600 font-medium bg-blue-50 px-1 rounded">has/have + past participle</span>) for actions that happened at an unspecified time before now, or actions that started in the past and continue to the present.
                                </p>

<div className="overflow-x-auto rounded-lg border border-indigo-200 mb-6">
<table className="w-full text-sm text-left border-collapse">
<thead className="bg-indigo-50 text-indigo-500 border-b border-indigo-200">
<tr>
<th className="px-4 py-3 font-medium w-1/3 border-r border-indigo-200">Form</th>
<th className="px-4 py-3 font-medium border-r border-indigo-200">Structure</th>
<th className="px-4 py-3 font-medium">Example</th>
</tr>
</thead>
<tbody className="divide-y divide-indigo-100 text-indigo-700">
<tr className="hover:bg-indigo-50/50 transition-colors">
<td className="px-4 py-3 border-r border-indigo-200 font-medium text-indigo-800">Affirmative</td>
<td className="px-4 py-3 border-r border-indigo-200 font-mono text-xs text-indigo-500">Subject + have/has + V3</td>
<td className="px-4 py-3">She <span className="text-blue-600 font-medium">has visited</span> Paris.</td>
</tr>
<tr className="hover:bg-indigo-50/50 transition-colors">
<td className="px-4 py-3 border-r border-indigo-200 font-medium text-indigo-800">Negative</td>
<td className="px-4 py-3 border-r border-indigo-200 font-mono text-xs text-indigo-500">Subject + haven't/hasn't + V3</td>
<td className="px-4 py-3">They <span className="text-blue-600 font-medium">haven't seen</span> the movie.</td>
</tr>
<tr className="hover:bg-indigo-50/50 transition-colors">
<td className="px-4 py-3 border-r border-indigo-200 font-medium text-indigo-800">Question</td>
<td className="px-4 py-3 border-r border-indigo-200 font-mono text-xs text-indigo-500">Have/Has + Subject + V3?</td>
<td className="px-4 py-3"><span className="text-blue-600 font-medium">Have</span> you <span className="text-blue-600 font-medium">finished</span> yet?</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-indigo-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-indigo-50 rounded-md text-blue-600">
<iconify-icon className="text-lg" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight text-indigo-900">Knowledge Check</h2>
</div>
<span className="text-xs font-medium text-indigo-500 bg-indigo-100 px-2.5 py-1 rounded-full">Question 1 of 5</span>
</div>
<div className="p-6 space-y-8">

<div className="">
<div className="mb-4">
<span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-500 mb-2">Multiple Choice</span>
<p className="text-base text-indigo-800 font-medium">Which sentence is grammatically correct?</p>
</div>
<div className="space-y-3">

<label className="flex items-center p-4 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors opacity-60">
<div className="w-4 h-4 rounded-full border border-indigo-300 flex items-center justify-center mr-3 shrink-0"></div>
<span className="text-sm text-indigo-700">I have seen that movie yesterday.</span>
</label>

<label className="flex items-center p-4 border border-cyan-500 bg-cyan-50/50 rounded-lg cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
<div className="w-4 h-4 rounded-full border-2 border-cyan-600 flex items-center justify-center mr-3 shrink-0">
<div className="w-2 h-2 rounded-full bg-cyan-600"></div>
</div>
<span className="text-sm text-cyan-900 font-medium">I saw that movie yesterday.</span>
<iconify-icon className="ml-auto text-cyan-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</label>

<label className="flex items-center p-4 border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors opacity-60">
<div className="w-4 h-4 rounded-full border border-indigo-300 flex items-center justify-center mr-3 shrink-0"></div>
<span className="text-sm text-indigo-700">I seen that movie yesterday.</span>
</label>
</div>

<div className="mt-4 flex gap-3 p-3 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-100 items-start text-sm">
<iconify-icon className="text-lg shrink-0 mt-0.5 text-cyan-600" icon="solar:info-circle-linear"></iconify-icon>
<div>
<p className="font-medium">Correct!</p>
<p className="text-cyan-700/80 mt-0.5">We use the Past Simple ("saw") because "yesterday" specifies a definite time in the past.</p>
</div>
</div>
</div>
<div className="w-full h-px bg-indigo-100"></div>

<div>
<div className="mb-4">
<span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-500 mb-2">Fill in the Blanks</span>
<p className="text-base text-indigo-800 font-medium">Complete the sentence with the correct form of the verb.</p>
</div>
<div className="p-5 border border-indigo-200 rounded-lg bg-indigo-50/50 flex flex-wrap items-center gap-2 text-sm text-indigo-700">
<span>She</span>

<div className="relative inline-block">
<input className="w-32 bg-white border border-indigo-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 outline-none text-blue-700 font-medium text-center shadow-sm transition-all" placeholder="type here" type="text"/>
</div>
<span>(already / finish) her assignment before the deadline.</span>
</div>
</div>
<div className="flex justify-end pt-2">
<button className="hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-blue-600 text-sm font-medium text-white bg-blue-600 rounded-lg pt-2 pr-6 pb-2 pl-6 shadow-sm">
                                        Check Answer
                                    </button>
</div>
</div>
</section>
</div>

<div className="xl:col-span-1 space-y-6">

<div className="bg-white border border-indigo-200 rounded-xl shadow-sm flex flex-col overflow-hidden relative">

<div className="absolute top-0 right-0">
<span className="bg-green-100 text-green-700 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-bl-lg">Time Expressions</span>
</div>
<div className="px-6 py-5 border-b border-indigo-100 flex items-center justify-between bg-indigo-50/50">
<h2 className="text-sm font-medium tracking-tight text-indigo-800 uppercase tracking-wider">Vocabulary Builder</h2>
<button className="text-indigo-400 hover:text-blue-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:flip-horizontal-linear"></iconify-icon>
</button>
</div>
<div className="p-8 flex flex-col items-center text-center">
<h3 className="text-3xl font-medium tracking-tight text-indigo-900 mb-2">Recently</h3>
<div className="flex items-center gap-2 text-indigo-500 text-sm mb-6">
<span className="font-mono bg-indigo-100 px-2 py-0.5 rounded text-xs">/ˈriː.sənt.li/</span>
<button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-blue-50 text-indigo-400 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100">
<iconify-icon className="text-base" icon="solar:volume-loud-linear"></iconify-icon>
</button>
</div>
<div className="w-12 h-0.5 bg-blue-100 mb-6"></div>
<p className="text-sm mb-6 text-blue-600">Not long ago, or at a time that started not long ago.</p>
<div className="w-full text-left bg-blue-50/50 p-4 rounded-lg border border-blue-100 mb-6 relative">
<iconify-icon className="absolute top-2 left-2 text-blue-200 text-xl" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-indigo-700 italic relative z-10 pl-4">"Have you seen any good films <span className="text-blue-600 font-medium border-b border-blue-200">recently</span>?"</p>
</div>
<div className="flex flex-wrap justify-center gap-2 w-full">
<span className="px-2.5 py-1 bg-indigo-100 border border-indigo-200 text-xs rounded-md text-blue-600">Adverb</span>
<span className="px-2.5 py-1 bg-indigo-100 border border-indigo-200 text-xs rounded-md text-blue-600">B1 Level</span>
<span className="px-2.5 py-1 bg-indigo-100 border border-indigo-200 text-xs rounded-md flex items-center gap-1 text-blue-600">
<iconify-icon icon="solar:star-linear"></iconify-icon> Save
                                    </span>
</div>
</div>
<div className="p-4 border-t border-indigo-100 bg-indigo-50 flex justify-between items-center text-xs text-indigo-500">
<button className="hover:text-indigo-800 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Prev Word
                                </button>
<span>Word 4 of 12</span>
<button className="hover:text-indigo-800 flex items-center gap-1 transition-colors">
                                    Next Word <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-indigo-200 rounded-xl shadow-sm p-6">
<h3 className="text-sm font-medium text-indigo-900 mb-4">Lesson Preferences</h3>
<div className="space-y-4">

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:volume-cross-linear"></iconify-icon>
<span className="text-sm group-hover:text-indigo-900 transition-colors text-blue-600">Auto-play audio</span>
</div>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-indigo-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-indigo-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 transition-colors"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:translation-linear"></iconify-icon>
<span className="text-sm group-hover:text-indigo-900 transition-colors text-blue-600">Show native translations</span>
</div>
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-indigo-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
<iconify-icon className="text-white text-sm opacity-0 peer-checked:opacity-100 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</label>
<div className="pt-2 border-t border-indigo-100 mt-2">
<p className="text-xs text-indigo-500 mb-3">Daily Goal (Minutes)</p>

<div className="relative w-full h-1.5 bg-indigo-200 rounded-full flex items-center">
<div className="absolute h-full bg-blue-500 rounded-full w-1/2"></div>
<div className="absolute w-4 h-4 bg-white border border-indigo-300 rounded-full shadow-sm left-1/2 -translate-x-1/2 cursor-grab hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-indigo-400 font-medium mt-2">
<span>10m</span>
<span>30m</span>
<span>60m</span>
</div>
</div>
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
