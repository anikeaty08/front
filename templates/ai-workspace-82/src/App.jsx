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



    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
    });
  
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
      

<div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-[#EFF1F5] absolute top-0 w-full z-50">
<div className="flex items-center gap-2">
<div className="w-[34px] h-[22px] bg-[#4559E0] rounded-full relative flex items-center justify-center">
<div className="absolute w-1 h-1 bg-[#8BA3F5] rounded-full left-1.5"></div>
<div className="absolute w-1 h-1 bg-[#8BA3F5] rounded-full left-3.5"></div>
<div className="absolute w-1.5 h-1.5 bg-[#8BA3F5] rounded-sm right-1.5 transform rotate-45"></div>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#111322]">Wonderchat</span>
<span className="text-lg font-light text-[#8BA3F5] relative -top-1">✦</span>
</div>
<button className="text-[#7D89B0]"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
<div className="flex flex-1 overflow-hidden h-full pt-[60px] lg:pt-0">

<aside className="hidden lg:flex w-[263px] flex-shrink-0 flex-col p-4 pb-6 gap-8 overflow-y-auto h-full">

<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-[34px] h-[22px] bg-[#4559E0] rounded-full relative flex items-center justify-center">
<div className="absolute w-1 h-1 bg-[#8BA3F5] rounded-full left-1.5"></div>
<div className="absolute w-1 h-1 bg-[#8BA3F5] rounded-full left-3.5"></div>
<div className="absolute w-1.5 h-1.5 bg-[#8BA3F5] rounded-sm right-1.5 transform rotate-45"></div>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#111322]">Wonderchat</span>
<span className="text-lg font-light text-[#8BA3F5] relative -top-1">✦</span>
</div>
<button className="text-[#B9C0D4] hover:text-[#7D89B0] transition-colors"><i className="w-6 h-6" data-lucide="layout-panel-left"></i></button>
</div>

<div className="flex items-center w-full p-0.5 bg-[#EFF1F5] rounded-xl relative">
<button className="flex-1 text-center py-2 text-base font-normal text-[#7D89B0]">Agents</button>
<button className="flex-1 text-center py-2 bg-white shadow-sm rounded-lg text-base font-normal text-[#404968]">Workspace</button>
<span className="absolute -top-1.5 -right-1.5 bg-[#F04438] text-white text-xs px-2 py-0.5 rounded-full z-10 leading-none shadow-sm">New</span>
</div>

<nav className="flex flex-col w-full gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<i className="w-5 h-5 text-[#3658D8]" data-lucide="plus-circle"></i>
<span className="text-base font-normal text-[#3658D8]">New chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<i className="w-5 h-5 text-[#404968]" data-lucide="search"></i>
<span className="text-base font-normal text-[#404968]">Search Chat</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<i className="w-5 h-5 text-[#404968]" data-lucide="book-open"></i>
<span className="text-base font-normal text-[#404968]">Knowledge library</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<i className="w-5 h-5 text-[#404968]" data-lucide="bot"></i>
<span className="text-base font-normal text-[#404968]">Agents</span>
</a>
</nav>

<div className="flex flex-col flex-1 overflow-hidden -mx-2 px-2">
<div className="flex items-center gap-3 mt-2 mb-2 px-2">
<div className="h-px bg-[#DCDFEA] flex-1"></div>
<span className="text-base font-normal text-[#B9C0D4]">Recents</span>
<div className="h-px bg-[#DCDFEA] flex-1"></div>
</div>
<div className="flex flex-col gap-1 w-full overflow-y-auto">
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#F77D37] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Parental leave policy test</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#D836B5] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Diversity and inclusion in...</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#F77D37] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Work-life balance strate...</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#3791F7] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Team building activities...</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#F7373A] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Remote work flexibility g...</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#F77D37] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Employee wellness prog...</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-[#F77D37] flex items-center justify-center shadow-[inset_0px_-2.46px_4.92px_rgba(255,255,255,0.33)] flex-shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968] truncate">Performance review pro...</span>
</a>
</div>
</div>

<div className="mt-auto flex items-center justify-between pt-2">
<button className="w-9 h-9 border-[1.5px] border-[#4A5578] rounded-full flex items-center justify-center text-[#4A5578] hover:bg-gray-100 transition-colors"></button>
<button className="w-9 h-9 border-[1.5px] border-[#4A5578] rounded-full flex items-center justify-center text-[#4A5578] hover:bg-gray-100 transition-colors"></button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-white border border-[#EFF1F5] shadow-sm rounded-2xl m-0 lg:m-2 lg:ml-0 overflow-hidden h-full lg:h-[calc(100vh-16px)]">

<header className="h-[68px] flex items-center justify-between px-6 border-b border-[#EFF1F5] flex-shrink-0">
<h1 className="text-xl font-normal tracking-tight text-[#111322]">Dashboard</h1>
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 bg-[#EBE9FE] text-[#6938EF] rounded-lg text-base font-normal">Turbo</div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-[#B9C0D4] rounded-xl cursor-pointer hover:bg-gray-50 shadow-sm transition-colors">
<img alt="Yassir UX" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<span className="text-lg font-light text-[#7D89B0]">Yassir UX</span>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<section className="flex-1 flex flex-col relative h-full">

<div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(36.56%_100%_at_50%_0%,rgba(216,55,181,0.1)_0%,rgba(235,238,251,0)_100%)] pointer-events-none"></div>

<div className="flex-1 overflow-y-auto flex flex-col items-center px-6 lg:px-10 w-full z-10 pt-12 pb-8">

<div className="flex flex-col items-center gap-4 text-center max-w-2xl w-full mb-10">
<div className="w-14 h-14 rounded-full bg-[#D836B5] flex items-center justify-center shadow-[inset_0px_-7px_14px_rgba(255,255,255,0.33)]">
<i className="w-7 h-7 text-white" data-lucide="users"></i>
</div>
<h2 className="text-xl font-normal tracking-tight text-[#111322]">HR Onboarding Agent</h2>
<p className="text-lg font-light text-[#7D89B0] max-w-md">A HR onboarding expert trained on your employee onboarding documentation sso that new employee onboar...</p>
</div>

<div className="flex items-center gap-4 w-full max-w-[770px] mb-8">
<div className="flex-1 border-t border-[#EFF1F5]"></div>
<span className="text-sm font-light text-[#7D89B0]">Created Mar 18</span>
<div className="flex-1 border-t border-[#EFF1F5]"></div>
</div>

<div className="w-full max-w-[770px] flex flex-col gap-8 pb-40">

<div className="flex flex-col items-start gap-2 w-full">
<p className="text-lg font-light text-[#4A5578]">How can I help you today?</p>
<div className="flex items-center gap-1.5 text-[#4A5578] mt-1">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="thumbs-up"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="thumbs-down"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="refresh-cw"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="copy"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
</div>

<div className="flex flex-col items-end w-full">
<div className="bg-[#EFF1F5] px-5 py-3 rounded-2xl rounded-tr-sm max-w-xl text-center">
<p className="text-lg font-light text-[#4A5578]">What are the key steps in the onboarding process?</p>
</div>
</div>

<div className="flex flex-col items-start gap-3 w-full">
<p className="text-lg font-light text-[#4A5578] max-w-2xl leading-relaxed">
                  Onboarding at StellarTech involves several key steps: pre-hire paperwork completion, a warm first-day welcome, comprehensive team introductions, in-depth role training, regular performance check-ins, constructive ongoing feedback, and enrollment in the 'Launchpad' mentorship program.
                </p>
<div className="flex items-center gap-2 mt-1">
<div className="bg-[#F9F9FB] rounded-full flex items-center pr-3 p-1.5 gap-2 cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-[#EFF1F5]">
<span className="w-6 h-6 rounded-full bg-[#EFF1F5] flex items-center justify-center text-sm font-normal text-[#5D6B98]">2</span>
<span className="text-sm font-normal text-[#7D89B0]">Source</span>
<i className="w-4 h-4 text-[#7D89B0]" data-lucide="chevron-right"></i>
</div>
</div>
<div className="flex items-center gap-1.5 text-[#4A5578]">
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="thumbs-up"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="thumbs-down"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="refresh-cw"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="copy"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="more-vertical"></i></button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[770px] px-4 z-20">
<div className="bg-[rgba(48,55,79,0.02)] rounded-[20px] p-2 w-full">
<div className="bg-white border border-[#EFF1F5] rounded-2xl overflow-hidden shadow-[0px_1px_2px_rgba(10,13,18,0.05)] flex flex-col">

<div className="px-3 pt-3 pb-1 flex items-center">
<div className="flex items-center gap-2 border border-[#EFF1F5] bg-white rounded-xl px-2.5 py-1.5 shadow-sm w-max">
<div className="w-6 h-6 bg-[#EFF1F5] rounded flex items-center justify-center">
<i className="w-4 h-4 text-[#155EEF]" data-lucide="file-spreadsheet"></i>
</div>
<span className="text-base font-normal text-black">spreadsheet.xlsx</span>
<button className="text-[#7D89B0] hover:text-black ml-1 p-0.5 transition-colors"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<textarea className="w-full resize-none bg-transparent px-4 py-2 text-lg font-light text-[#5D6B98] placeholder-[#5D6B98] focus:outline-none" placeholder="Ask anything" rows="1"></textarea>

<div className="flex items-center justify-between px-3 py-2">
<button className="w-10 h-10 flex items-center justify-center text-[#7D89B0] hover:bg-gray-100 rounded-xl transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="flex items-center gap-3 pr-1 text-[#4A5578]">
<span className="text-base font-normal">Auto</span>
<button className="w-9 h-9 bg-[#3658D8] text-white flex items-center justify-center rounded-xl shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] hover:bg-[#2A47B2] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="hidden xl:flex w-[341px] flex-shrink-0 border-l border-[#EFF1F5] bg-white flex-col p-4 gap-8 overflow-y-auto h-full">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between px-1">
<h3 className="text-base font-normal text-[#404968]">Agent Knowledge</h3>
<button className="text-[#4A5578] hover:bg-gray-100 p-1.5 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="bg-[#F9F9FB] rounded-2xl p-2 flex flex-col gap-2">
<button className="flex items-center gap-3 p-1.5 hover:bg-gray-50 rounded-xl w-full text-left transition-colors">
<div className="w-10 h-10 bg-[#EFF1F5] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#B9C0D4]" data-lucide="plus"></i>
</div>
<span className="text-base font-normal text-black">Add a file</span>
</button>
<div className="bg-white border border-[#EFF1F5] rounded-xl p-1.5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#F9F9FB] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#155EEF]" data-lucide="file-spreadsheet"></i>
</div>
<span className="text-base font-normal text-black">spreadsheet.xlsx</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-50 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
<div className="bg-white border border-[#EFF1F5] rounded-xl p-1.5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#F9F9FB] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#155EEF]" data-lucide="presentation"></i>
</div>
<span className="text-base font-normal text-black">presentation.pptx</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-50 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
<div className="bg-white border border-[#EFF1F5] rounded-xl p-1.5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#F9F9FB] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#155EEF]" data-lucide="file-text"></i>
</div>
<span className="text-base font-normal text-black">report.docx</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-50 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
<div className="bg-white border border-[#EFF1F5] rounded-xl p-1.5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#F9F9FB] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#155EEF]" data-lucide="database"></i>
</div>
<span className="text-base font-normal text-black">database.db</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-50 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<h3 className="text-base font-normal text-[#404968] px-1">Members</h3>
<div className="bg-[#F9F9FB] rounded-2xl p-2 flex flex-col gap-2">
<button className="flex items-center gap-3 p-1.5 hover:bg-gray-50 rounded-xl w-full text-left transition-colors">
<div className="w-8 h-8 bg-[#EFF1F5] rounded-full flex items-center justify-center border border-[#B9C0D4]">
<i className="w-4 h-4 text-[#7D89B0]" data-lucide="plus"></i>
</div>
<span className="text-base font-normal text-[#404968]">Add Members</span>
</button>
<div className="flex items-center justify-between p-1.5">
<div className="flex items-center gap-3">
<img alt="Yassir UX" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<span className="text-base font-normal text-[#404968]">Yassir UX</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
<div className="flex items-center justify-between p-1.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#EFF1F5] rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-[#7D89B0]" data-lucide="user"></i>
</div>
<span className="text-base font-normal text-[#404968]">Name</span>
</div>
<button className="text-[#7D89B0] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>



    </>
  );
}
