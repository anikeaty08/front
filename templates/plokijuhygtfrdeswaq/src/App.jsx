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
      

<header className="h-14 border-b border-neutral-800/80 flex items-center justify-between px-4 bg-neutral-950 shrink-0 z-10 relative">
<div className="flex items-center gap-4">

<div className="tracking-tighter font-semibold text-lg text-white select-none">HV</div>
<div className="h-4 w-[1px] bg-neutral-800"></div>

<div className="flex items-center gap-2 text-xs text-neutral-400">
<div className="flex items-center gap-1.5 hover:text-neutral-200 transition-colors cursor-pointer">
<iconify-icon className="text-sm" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
<span>Projects</span>
</div>
<span className="text-neutral-600">/</span>
<div className="flex items-center gap-1.5 text-neutral-100 font-medium">
<iconify-icon className="text-sm" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span>index.html</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors px-2.5 py-1.5 rounded-md hover:bg-neutral-900">
<iconify-icon className="text-sm" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon>
        Share
      </button>
<button className="flex items-center gap-1.5 text-xs font-medium bg-white text-neutral-950 hover:bg-neutral-200 transition-colors px-3 py-1.5 rounded-md shadow-sm">
<iconify-icon className="text-sm" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
        Run Code
      </button>
</div>
</header>

<main className="flex-1 flex flex-col lg:flex-row min-h-0 bg-neutral-950">

<section className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-800/80 bg-[#0a0a0a]">

<div className="h-10 border-b border-neutral-800/80 flex items-end bg-neutral-950 shrink-0 px-2 pt-2">
<div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-neutral-800/80 border-b-0 rounded-t-lg text-xs text-neutral-100 font-medium shadow-[inset_0_1px_0_0_#ffffff20] relative z-10 translate-y-[1px]">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
          index.html
        </div>
<div className="flex items-center gap-2 px-4 py-2 text-xs text-neutral-500 font-medium hover:text-neutral-300 transition-colors cursor-pointer border border-transparent">
          styles.css
        </div>
</div>

<div className="flex-1 flex overflow-auto editor-scroll relative">

<div className="w-12 py-4 text-right pr-4 text-xs font-mono text-neutral-600 border-r border-neutral-800/50 shrink-0 select-none leading-6 bg-[#0a0a0a]">
<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
<div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
<div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
</div>

<textarea className="flex-1 bg-transparent py-4 px-5 text-xs font-mono text-neutral-300 outline-none resize-none leading-6 whitespace-pre placeholder-neutral-700" spellcheck="false" style={{minHeight: '800px', minWidth: '600px'}}>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
  &lt;title&gt;HTML Viewer Preview&lt;/title&gt;
&lt;/head&gt;
&lt;body className="bg-[#fafafa] flex items-center justify-center min-h-[calc(100vh-2.5rem)] m-0 font-sans"&gt;
  &lt;div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 text-center max-w-sm w-full"&gt;
    
    &lt;div className="w-12 h-12 bg-neutral-900 rounded-xl mx-auto mb-4 flex items-center justify-center"&gt;
      &lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"&gt;
        &lt;path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" strokeLinecap="round" strokeLinejoin="round"/&gt;
      &lt;/svg&gt;
    &lt;/div&gt;

    &lt;h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2"&gt;HTML Viewer&lt;/h1&gt;
    &lt;p className="text-sm text-neutral-500 mb-6"&gt;Write your markup on the left and see the rendered result instantly on the right.&lt;/p&gt;
    
    &lt;button className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-lg transition-colors"&gt;
      Get Started
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
</div>
</section>

<section className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col bg-neutral-950 relative">

<div className="h-10 border-b border-neutral-800/80 flex items-center justify-between px-4 bg-neutral-950 shrink-0">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
<iconify-icon className="text-sm text-neutral-500" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
          Preview
        </div>

<div className="flex items-center gap-4">

<label className="flex items-center gap-2 cursor-pointer">
<span className="text-xs text-neutral-400 font-medium">Auto Run</span>
<div className="relative inline-block w-7 h-4 rounded-full bg-neutral-200">
<div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-neutral-900 translate-x-3 shadow-sm transition-transform"></div>
</div>
</label>
<div className="w-[1px] h-4 bg-neutral-800"></div>

<div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-md p-0.5">
<button className="p-1 rounded bg-neutral-800 text-neutral-100 shadow-sm transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1 rounded text-neutral-500 hover:text-neutral-300 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:tablet-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1 rounded text-neutral-500 hover:text-neutral-300 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<button className="text-neutral-500 hover:text-neutral-200 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-200 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:maximize-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 p-4 lg:p-8 overflow-auto flex items-center justify-center editor-scroll" style={{backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="w-full h-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-neutral-200/50">

<div className="h-10 bg-white border-b border-neutral-200 flex items-center px-4 gap-4 shrink-0">
<div className="flex gap-1.5 shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
</div>
<div className="flex-1 bg-neutral-50 border border-neutral-200/80 rounded-md h-6 flex items-center justify-center px-3 text-xs text-neutral-400 font-medium max-w-xs mx-auto">
<iconify-icon className="mr-1.5 text-xs" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
              localhost:3000
            </div>
<div className="w-[42px] shrink-0"></div> 
</div>

<div className="flex-1 bg-[#fafafa] flex items-center justify-center p-6 relative overflow-auto">
<div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 text-center max-w-sm w-full">
<div className="w-12 h-12 bg-neutral-900 rounded-xl mx-auto mb-4 flex items-center justify-center">
<svg fill="none" height="24" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">HTML Viewer</h1>
<p className="text-xs text-neutral-500 mb-6">Write your markup on the left and see the rendered result instantly on the right.</p>
<button className="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-lg transition-colors">
                Get Started
              </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="h-7 border-t border-neutral-800/80 bg-neutral-950 flex items-center justify-between px-4 text-xs text-neutral-500 shrink-0 z-10">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>0 Errors</span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hover:text-neutral-300 transition-colors cursor-pointer">Ln 23, Col 7</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">UTF-8</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">HTML</span>
</div>
</footer>

    </>
  );
}
