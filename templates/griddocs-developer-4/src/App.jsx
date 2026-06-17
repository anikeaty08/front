import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-200 bg-gray-100 z-10 sticky top-0">
<div className="tracking-tighter text-xl text-gray-900" style={{fontFamily: '\'Source Code Pro\', monospace'}}>
            GRID.DOCS
        </div>
<button className="text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>

<aside className="hidden md:flex flex-col w-64 lg:w-72 border-r border-zinc-200 bg-gray-100 sticky top-0 h-screen overflow-y-auto px-6 py-8 z-10">
<div className="tracking-tighter text-2xl text-gray-900 mb-10" style={{fontFamily: '\'Source Code Pro\', monospace'}}>
            GRID.DOCS
        </div>
<nav className="flex flex-col gap-8">
<div className="animate-seq-1">
<h3 className="text-xs font-normal text-gray-400 uppercase tracking-normal mb-3" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Getting Started</h3>
<ul className="flex flex-col gap-2">
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> Introduction</a></li>
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon> Installation</a></li>
</ul>
</div>
<div className="animate-seq-2">
<h3 className="text-xs font-normal text-gray-400 uppercase tracking-normal mb-3" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Components</h3>
<ul className="flex flex-col gap-2">
<li><a className="text-sm text-indigo-500 font-medium flex items-center gap-2 py-1 bg-indigo-50/50 -mx-2 px-2 rounded" href="#"><iconify-icon icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon> Data Table</a></li>
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:slider-horizontal-linear" strokeWidth="1.5"></iconify-icon> Pagination</a></li>
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon> Filters</a></li>
</ul>
</div>
<div className="animate-seq-3">
<h3 className="text-xs font-normal text-gray-400 uppercase tracking-normal mb-3" style={{fontFamily: '\'Source Code Pro\', monospace'}}>API Reference</h3>
<ul className="flex flex-col gap-2">
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon> Columns</a></li>
<li><a className="text-sm text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2 py-1" href="#"><iconify-icon icon="solar:database-linear" strokeWidth="1.5"></iconify-icon> DataSource</a></li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16 overflow-x-hidden">

<div className="mb-14">
<div className="flex items-center gap-2 text-indigo-500 mb-4 animate-seq-1">
<iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Components / Core</span>
</div>
<h1 className="text-4xl font-normal tracking-normal text-gray-900 mb-5 animate-seq-2" style={{fontFamily: '\'Source Code Pro\', monospace'}}>
                Data Table Configuration
            </h1>
<p className="text-base text-gray-600 leading-relaxed max-w-3xl animate-seq-3">
                The Data Table component is a robust solution designed to organize and present complex datasets in a highly structured grid. It supports advanced features such as dynamic sorting, pagination, and inline editing while maintaining a flat, lightweight footprint.
            </p>
</div>

<div className="mt-8">
<div className="flex items-end justify-between mb-6 animate-seq-4">
<h2 className="text-2xl font-normal tracking-normal text-gray-900" style={{fontFamily: '\'Source Code Pro\', monospace'}}>
                    Grid Properties
                </h2>
<div className="hidden sm:flex border border-zinc-200 rounded px-2 py-1 bg-gray-50 text-xs text-gray-500" style={{fontFamily: '\'Source Code Pro\', monospace'}}>
                    v2.4.0
                </div>
</div>
<div className="border border-zinc-200 shadow-sm bg-gray-100 rounded-lg overflow-hidden animate-seq-5 w-full">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-zinc-200 bg-gray-50/80">
<th className="px-5 py-4 text-xs font-normal text-gray-500 uppercase tracking-normal w-1/4" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Property</th>
<th className="px-5 py-4 text-xs font-normal text-gray-500 uppercase tracking-normal w-1/6" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Type</th>
<th className="px-5 py-4 text-xs font-normal text-gray-500 uppercase tracking-normal w-1/6" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Default</th>
<th className="px-5 py-4 text-xs font-normal text-gray-500 uppercase tracking-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Description</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200 text-sm">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-4 text-indigo-500 font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>columns</td>
<td className="px-5 py-4 text-gray-600" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Array&lt;ColumnDef&gt;</td>
<td className="px-5 py-4 text-gray-400" style={{fontFamily: '\'Source Code Pro\', monospace'}}>[]</td>
<td className="px-5 py-4 text-gray-600 leading-relaxed">
                                    Defines the structure of the grid. Each object within the array specifies the header title, accessor key for the data, and rendering logic.
                                </td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-4 text-indigo-500 font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>dataSource</td>
<td className="px-5 py-4 text-gray-600" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Array&lt;Object&gt;</td>
<td className="px-5 py-4 text-gray-400" style={{fontFamily: '\'Source Code Pro\', monospace'}}>[]</td>
<td className="px-5 py-4 text-gray-600 leading-relaxed">
                                    The primary dataset to be rendered. Must be an array of objects where keys match the accessors defined in the columns property.
                                </td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-4 text-indigo-500 font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>isPaginated</td>
<td className="px-5 py-4 text-gray-600" style={{fontFamily: '\'Source Code Pro\', monospace'}}>boolean</td>
<td className="px-5 py-4 text-gray-800" style={{fontFamily: '\'Source Code Pro\', monospace'}}>false</td>
<td className="px-5 py-4 text-gray-600 leading-relaxed">
                                    Enables client-side pagination. When set to true, a pagination footer will appear beneath the table structure.
                                </td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-4 text-indigo-500 font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>pageSize</td>
<td className="px-5 py-4 text-gray-600" style={{fontFamily: '\'Source Code Pro\', monospace'}}>number</td>
<td className="px-5 py-4 text-gray-800" style={{fontFamily: '\'Source Code Pro\', monospace'}}>10</td>
<td className="px-5 py-4 text-gray-600 leading-relaxed">
                                    Determines the number of rows displayed per page. This property is only active if <code className="text-xs bg-gray-200/50 px-1 py-0.5 rounded text-gray-700" style={{fontFamily: '\'Source Code Pro\', monospace'}}>isPaginated</code> is enabled.
                                </td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-4 text-indigo-500 font-normal" style={{fontFamily: '\'Source Code Pro\', monospace'}}>onRowClick</td>
<td className="px-5 py-4 text-gray-600" style={{fontFamily: '\'Source Code Pro\', monospace'}}>Function</td>
<td className="px-5 py-4 text-gray-400" style={{fontFamily: '\'Source Code Pro\', monospace'}}>undefined</td>
<td className="px-5 py-4 text-gray-600 leading-relaxed">
                                    Callback fired when a user clicks on a specific row. Returns the row record data and index as arguments.
                                </td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="text-sm text-gray-500 mt-6 animate-seq-5 text-right">
                Need more customization? Review the <a className="text-indigo-500 hover:underline" href="#">advanced renderers documentation</a>.
            </p>
</div>
</main>

    </>
  );
}
