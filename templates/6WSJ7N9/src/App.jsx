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
      
<div className="flex flex-col h-screen">

<div className="flex border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between bg-white border-gray-200">
<div className="flex items-center space-x-1">
<button className="transition-colors duration-200 group flex rounded-md pt-2 pr-2 pb-2 pl-2 items-center hover:bg-gray-100" style={{border: '1px solid rgb(209 213 219)'}}>
<svg className="lucide lucide-arrow-left group-hover:text-gray-900 w-[16px] h-[16px]" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="select-none text-sm font-medium ml-1 text-gray-900" style={{fontWeight: '500'}}>back</span>
</button>
<div className="w-px h-6 mx-2 bg-gray-200"></div>
<button className="p-2 rounded-md transition-colors duration-200 group tool-active hover:bg-gray-100" id="selectTool">
<svg className="lucide lucide-mouse-pointer-2 w-4 h-4" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
</button>
<button className="p-2 rounded-md transition-colors duration-200 group hover:bg-gray-100" id="moveTool" title="Grab Tool - Move and reposition elements on the canvas">
<svg className="lucide lucide-hand w-4 h-4 group-hover:text-gray-900 text-gray-600" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</button>
<button className="transition-colors duration-200 group relative rounded-md pt-2 pr-2 pb-2 pl-2 hover:bg-gray-100" id="pathTool" title="Path Highlighter - Draw around objects to mark them for extraction">
<svg className="lucide lucide-highlighter group-hover:text-gray-900 w-[16px] h-[16px] text-gray-600" data-lucide="highlighter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
<div className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-md transition-opacity duration-200 pointer-events-none bg-yellow-50"></div>
</button>
<button className="p-2 rounded-md transition-colors duration-200 group hover:bg-gray-100" id="eraseTool">
<svg className="lucide lucide-eraser w-4 h-4 group-hover:text-gray-900 text-gray-600" data-lucide="eraser" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path><path d="M22 21H7"></path><path d="m5 11 9 9"></path></svg>
</button>
<div className="w-px h-6 mx-2 bg-gray-200"></div>
<label className="transition-colors duration-200 group cursor-pointer rounded-md pt-2 pr-2 pb-2 pl-2 hover:bg-gray-100" htmlFor="uploadInput">
<svg className="lucide lucide-upload w-4 h-4 group-hover:text-gray-900 text-gray-600" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m17 8-5-5-5 5"></path><path d="M12 15V3"></path></svg>
</label>
<input accept="image/*,.pdf,.doc,.docx,.txt" className="hidden" id="uploadInput" type="file"/>
<button className="p-2 rounded-md transition-colors duration-200 group hover:bg-gray-100" id="vectorizeBtn" title="Vectorize Image">
<svg className="w-4 h-4 group-hover:text-gray-900 text-gray-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M3 12 L8 7 L12 11 L21 2"></path>
<path d="M8 7 L8 12 L13 12"></path>
<circle cx="16" cy="8" fill="none" r="2"></circle>
<path d="M2 22 L10 14 L14 18 L22 10" stroke-dasharray="2,2"></path>
<path d="M14 18 L14 22 L18 22"></path>
</svg>
</button>
<button className="p-2 rounded-md transition-colors duration-200 group relative hover:bg-gray-100" id="removeBgBtn" title="Remove Background - Automatically detect subject and remove background">
<svg className="w-4 h-4 group-hover:text-gray-900 text-gray-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<rect fill="none" height="20" opacity="0.3" rx="2" stroke="currentColor" strokeWidth="1.5" width="20" x="2" y="2"></rect>
<circle className="" cx="12" cy="12" fill="none" r="6" stroke="currentColor" strokeWidth="2"></circle>
<path d="M12 8v8M8 12h8" opacity="0.7" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M6 6L2 2M18 6l4-4M6 18l-4 4M18 18l4 4" opacity="0.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="12" cy="12" fill="currentColor" opacity="0.8" r="3"></circle>
</svg>
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-md transition-opacity duration-200 pointer-events-none bg-purple-50"></div>
</button>
<button className="p-2 rounded-md transition-colors duration-200 group relative hover:bg-gray-100" id="extractBtn" title="Element Extraction - Isolate any element with pixel-perfect precision">
<svg className="w-4 h-4 group-hover:text-gray-900 text-gray-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16">
<rect fill="none" height="16" opacity="0.7" stroke="currentColor" stroke-dasharray="3,2" strokeWidth="1.5" width="16" x="4" y="4"></rect>
<rect className="" fill="currentColor" height="3" opacity="0.8" width="3" x="2.5" y="2.5"></rect>
<rect fill="currentColor" height="3" opacity="0.8" width="3" x="18.5" y="2.5"></rect>
<rect fill="currentColor" height="3" opacity="0.8" width="3" x="2.5" y="18.5"></rect>
<rect fill="currentColor" height="3" opacity="0.8" width="3" x="18.5" y="18.5"></rect>
<path d="M12 8 L12 16 M8 12 L16 12" opacity="0.6" stroke="currentColor" strokeWidth="1"></path>
<circle cx="7" cy="7" fill="currentColor" opacity="0.9" r="0.8"></circle>
<circle cx="17" cy="7" fill="currentColor" opacity="0.9" r="0.8"></circle>
<circle cx="12" cy="17" fill="currentColor" opacity="0.9" r="0.8"></circle>
<path d="M6 6 L2.5 2.5 M18 6 L21.5 2.5 M12 18 L12 21.5" opacity="0.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
</svg>
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-md transition-opacity duration-200 pointer-events-none bg-blue-50"></div>
</button>
</div>
<div className="flex items-center space-x-3">
<div className="flex items-center space-x-2 text-sm text-gray-600">
<span>100%</span>
</div>
<div className="w-px h-6 bg-gray-200"></div>
<button className="p-2 rounded-md transition-colors duration-200 group hover:bg-gray-100">
<svg className="lucide lucide-undo w-4 h-4 group-hover:text-gray-900 text-gray-600" data-lucide="undo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>
</button>
<button className="p-2 rounded-md transition-colors duration-200 group hover:bg-gray-100">
<svg className="lucide lucide-redo w-4 h-4 group-hover:text-gray-900 text-gray-600" data-lucide="redo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></svg>
</button>
<div className="w-px h-6 bg-gray-200"></div>
<button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-1.5 bg-gray-600 hover:bg-gray-700 text-white" id="exportBtn">
<svg className="lucide lucide-download w-3.5 h-3.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<span>Export</span>
</button>
<button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-1.5 bg-green-600 hover:bg-green-700 text-white" id="saveBtn">
<svg className="lucide lucide-save w-3.5 h-3.5" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h8"></path></svg>
<span>Save</span>
</button>
<button className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white">
                    Share
                </button>
</div>
</div>

<button className="sidebar-show-btn hidden shadow-lg hover:shadow-xl border rounded-r-lg px-3 py-4 transition-all duration-200 group bg-white hover:bg-gray-50 border-gray-200" id="showSidebarBtn">
<div className="flex flex-col items-center space-y-2">
<svg className="lucide lucide-message-circle w-5 h-5 group-hover:text-blue-600 text-gray-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="text-xs font-medium group-hover:text-blue-600 writing-mode-vertical transform -rotate-90 whitespace-nowrap text-gray-600">AI Assistant</span>
</div>
</button>

<div className="flex flex-1 overflow-hidden" id="aura-emcmc3q4j" style={{backgroundColor: 'white'}}>

<div className="sidebar-transition border-r flex flex-col bg-white border-gray-200" id="leftSidebar" style={{width: '320px'}}>

<div className="border-b pt-4 pr-4 pb-4 pl-4 flex items-center justify-between border-gray-200">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 rounded-lg flex items-center justify-center to-purple-600">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M12 2L2 7v10c0 5.55 3.84 10 9 10 1.77 0 3.41-.41 4.88-1.12"></path>
<path d="M22 12c0-5.56-4.44-10-10-10"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">Mashup AI Assistant</h3>
<p className="text-xs text-gray-500">Your creative partner</p>
</div>
</div>
<button className="p-1.5 rounded-md transition-all duration-200 group hover:bg-gray-100" id="hideSidebar" title="Hide sidebar">
<svg className="lucide lucide-x w-4 h-4 text-gray-500 group-hover:text-gray-700" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-4" id="chatMessages">

<div className="flex items-start space-x-3">
<div className="w-7 h-7 bg-gradient-to-br from-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 to-purple-600">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="12">
<path d="M12 2L2 7v10c0 5.55 3.84 10 9 10 1.77 0 3.41-.41 4.88-1.12"></path>
<path d="M22 12c0-5.56-4.44-10-10-10"></path>
</svg>
</div>
<div className="ai-bubble chat-bubble rounded-2xl rounded-tl-md px-4 py-3" style={{backgroundColor: '#f8fafc', borderColor: '#e2e8f0'}}>
<p className="text-sm leading-relaxed text-gray-100">Hi! I'm your AI assistant. I can help you with:</p>
<ul className="mt-2 text-sm space-y-1" style={{color: '#4b5563'}}>
<li className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
<span className="">Image editing and background removal</span>
</li>
<li className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
<span className="">Moving and repositioning elements</span>
</li>
<li className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
<span className="">Path highlighting for precise object selection</span>
</li>
<li className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
<span className="">Creative suggestions and ideas</span>
</li>
<li className="flex items-center space-x-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
<span>Questions about your canvas</span>
</li>
</ul>
<p className="text-xs mt-3" style={{color: '#6b7280'}}>What would you like to work on today?</p>
</div>
</div>

<div className="flex items-start space-x-3 justify-end">
<div className="user-bubble chat-bubble rounded-2xl rounded-tr-md px-4 py-3 text-white" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
<p className="text-sm leading-relaxed">How do I use the grab tool to move elements?</p>
</div>
<div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-300">
<svg className="w-3 h-3 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>

<div className="flex items-start space-x-3">
<div className="w-7 h-7 bg-gradient-to-br from-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 to-purple-600">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="12">
<path d="M12 2L2 7v10c0 5.55 3.84 10 9 10 1.77 0 3.41-.41 4.88-1.12"></path>
<path d="M22 12c0-5.56-4.44-10-10-10"></path>
</svg>
</div>
<div className="ai-bubble chat-bubble rounded-2xl rounded-tl-md px-4 py-3" style={{backgroundColor: '#f8fafc', borderColor: '#e2e8f0'}}>
<p className="text-sm leading-relaxed text-gray-100">Perfect! The grab tool (hand icon) is great for repositioning elements:</p>
<div className="mt-3 space-y-2" style={{color: '#6b7280'}}>
<div className="flex items-center space-x-2 text-sm">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium bg-orange-100 text-orange-700">1</span>
<span>Click the hand/grab tool in the toolbar</span>
</div>
<div className="flex items-center space-x-2 text-sm">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium bg-orange-100 text-orange-700">2</span>
<span>Click and drag any element to move it around</span>
</div>
<div className="flex items-center space-x-2 text-sm">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium bg-orange-100 text-orange-700">3</span>
<span>Release to place the element in its new position</span>
</div>
</div>
<div className="mt-3 p-2 rounded-lg border" style={{backgroundColor: '#7c2d12', borderColor: '#9a3412'}}>
<p className="text-xs" style={{color: '#fed7aa'}}>🖐️ Tip: Hold Shift while dragging to constrain movement to horizontal or vertical!</p>
</div>
</div>
</div>
</div>

<div className="border-t p-4 border-gray-200">
<div className="flex space-x-3">
<input className="flex-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 outline-none resize-none focus:bg-white text-sm border rounded-xl pt-3 pr-4 pb-3 pl-4 bg-gray-50 border-gray-300" placeholder="Ask me anything about your canvas..." type="text"/>
<button className="px-4 py-3 bg-gradient-to-r from-blue-500 rounded-xl transition-all duration-200 flex items-center justify-center group shadow-sm hover:shadow-md to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" id="sendBtn">
<svg className="lucide lucide-send w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg></button></div></div></div></div></div>
    </>
  );
}
