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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



        // --- Tab Switching Logic ---
        function switchTab(tabName) {
            console.log('Switching to:', tabName);
            const tabs = ['chat', 'graph', 'kb'];
            
            tabs.forEach(name => {
                const view = document.getElementById('view-' + name);
                const nav = document.getElementById('nav-' + name);
                
                if (name === tabName) {
                    view.classList.remove('hidden');
                    if(nav) {
                        nav.classList.remove('text-gray-500');
                        nav.classList.add('bg-gray-100', 'text-gray-900');
                    }
                    // Update header breadcrumb
                    const titles = {
                        'chat': 'Workspace / Chat',
                        'graph': 'Workspace / Knowledge Graph',
                        'kb': 'Database / Management'
                    };
                    document.getElementById('header-breadcrumbs').innerText = titles[name];
                } else {
                    view.classList.add('hidden');
                    if(nav) {
                        nav.classList.add('text-gray-500');
                        nav.classList.remove('bg-gray-100', 'text-gray-900');
                    }
                }
            });
            
            // Special reset for graph when switched to
            if (tabName === 'graph') {
                resetGraph();
            }
        }

        // --- Accordion Logic ---
        function toggleThinking(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.chevron-icon');
            
            content.classList.toggle('collapsed');
            if (content.classList.contains('collapsed')) {
                icon.classList.add('collapsed');
            } else {
                icon.classList.remove('collapsed');
            }
        }

        // --- Toast Notification Logic ---
        function showToast(message) {
            const container = document.getElementById('toast-container');
            
            // Create toast element
            const toast = document.createElement('div');
            toast.className = 'bg-gray-900 text-white px-4 py-2.5 rounded-lg shadow-floating flex items-center gap-2 text-xs font-medium toast-enter pointer-events-auto';
            toast.innerHTML = `
                <span class="iconify text-emerald-400" data-icon="lucide:check-circle" data-width="14"></span>
                ${message}
            `;
            
            container.appendChild(toast);
            
            // Animate in
            requestAnimationFrame(() => {
                toast.classList.add('toast-enter-active');
                toast.classList.remove('toast-enter');
            });
            
            // Remove after delay
            setTimeout(() => {
                toast.classList.add('toast-exit');
                toast.addEventListener('transitionend', () => {
                    toast.remove();
                });
            }, 2500);
        }

        // --- Graph Draggable Logic ---
        let isDragging = false;
        let startX, startY;
        let translateX = 0, translateY = 0;
        let scale = 1;

        const graphWrapper = document.getElementById('graph-wrapper');
        const graphContent = document.getElementById('graph-content');

        if (graphWrapper) {
            graphWrapper.addEventListener('mousedown', (e) => {
                // Ignore clicks on interactive nodes (allow them to fire their own events)
                if (e.target.closest('.pointer-events-auto')) return;

                isDragging = true;
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
                graphWrapper.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                translateX = e.clientX - startX;
                translateY = e.clientY - startY;
                updateTransform();
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                if (graphWrapper) graphWrapper.style.cursor = 'grab';
            });
        }

        function zoomGraph(factor) {
            scale *= factor;
            // Clamp scale
            scale = Math.min(Math.max(0.5, scale), 2); 
            updateTransform();
        }

        function resetGraph() {
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
        }

        function updateTransform() {
            if (graphContent) {
                graphContent.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            switchTab('chat');
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
      

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<aside className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 z-40 relative">
<div className="flex flex-col h-full">

<div className="h-14 flex items-center px-4 md:px-6 border-b border-gray-100 flex-shrink-0">
<div className="flex items-center gap-2.5 text-gray-900 cursor-pointer" onclick="switchTab('chat')">
<div className="w-7 h-7 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-subtle group">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="hidden md:block font-semibold tracking-tight text-sm">NEXUS AI</span>
</div>
</div>

<div className="md:p-3 overflow-y-auto flex-1 pt-2 pr-2 pb-2 pl-2 space-y-1">
<div className="mb-6">
<p className="hidden md:block px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Platform</p>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900 group transition-all" id="nav-chat" onclick="switchTab('chat')">
<svg aria-hidden="true" className="iconify text-gray-500 group-hover:text-gray-900 iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="hidden md:block">智能对话 &amp; RAG</span>
<span className="hidden md:flex ml-auto text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">Cmd+K</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 group transition-all" id="nav-graph" onclick="switchTab('graph')">
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-gray-900 iconify--lucide" data-icon="lucide:network" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
<span className="hidden md:block">全息图谱</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 group transition-all" id="nav-kb" onclick="switchTab('kb')">
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-gray-900 iconify--lucide" data-icon="lucide:database" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
<span className="hidden md:block">知识库管理</span>
</button>
</div>

<div className="hidden md:block">
<p className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex justify-between items-center">
                        Recent Chats
                        <button className="hover:bg-gray-100 rounded p-0.5 transition-colors" onclick="showToast('Created new chat')">
<svg aria-hidden="true" className="iconify text-gray-400 hover:text-gray-900 iconify--lucide" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</p>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 rounded-md truncate text-left transition-colors" onclick="showToast('加载历史会话...')">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
<span className="truncate">新能源电池技术突破分析</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-50 rounded-md truncate text-left transition-colors" onclick="showToast('加载历史会话...')">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
<span className="truncate">Q3 财务报表关键数据提取</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-50 rounded-md truncate text-left transition-colors" onclick="showToast('加载历史会话...')">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
<span className="truncate">Transformer 架构演进史</span>
</button>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-100 flex-shrink-0 bg-white">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50" onclick="showToast('Opening Settings...')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="hidden md:block">系统配置</span>
</button>
<div className="mt-2 flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors" onclick="showToast('User Profile')">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-semibold text-white ring-2 ring-white shadow-sm">AU</div>
<div className="hidden md:block overflow-hidden">
<p className="text-xs font-medium text-gray-900 truncate">Admin User</p>
<p className="text-[10px] text-gray-400 truncate">Enterprise Plan</p>
</div>
<svg aria-hidden="true" className="hidden md:block iconify ml-auto text-gray-400 iconify--lucide" data-icon="lucide:more-vertical" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></g></svg>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-white">

<header className="h-14 bg-white/95 backdrop-blur border-b border-gray-200 flex items-center justify-between px-6 z-20 flex-shrink-0">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider" id="header-breadcrumbs">Workspace / Chat</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 cursor-help" title="Model Status">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-gray-600">Model: GPT-4o-Search</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<button className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-md hover:bg-gray-100 relative">
<span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<div className="flex-1 flex flex-col h-full overflow-hidden" id="view-chat">

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-10 scroll-smooth" id="chat-container">

<div className="flex justify-end group">
<div className="flex gap-3 max-w-2xl items-start flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 border border-gray-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="bg-gray-50 text-gray-900 px-5 py-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed border border-gray-100 shadow-sm">
                            分析一下目前新能源汽车电池技术的最新突破，特别是固态电池在商业化方面的进展。
                        </div>
</div>
</div>

<div className="flex gap-4 max-w-4xl mx-auto md:mx-0">
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="flex-1 min-w-0">

<div className="mb-5">
<div className="inline-block border border-gray-200 rounded-lg bg-gray-50 overflow-hidden max-w-md w-full transition-shadow hover:shadow-subtle">
<div className="px-3 py-2 bg-gray-100/50 border-b border-gray-200 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors select-none" onclick="toggleThinking(this)">
<div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
<svg aria-hidden="true" className="iconify animate-spin text-purple-600 iconify--lucide" data-icon="lucide:loader-2" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        深度研究进行中...
                                    </div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-gray-400 font-mono">1.2s</span>
<svg aria-hidden="true" className="iconify text-gray-400 chevron-icon iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="p-3 space-y-2.5 thinking-content">
<div className="flex items-start gap-2.5">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<div className="flex-1 space-y-1">
<p className="text-[11px] text-gray-900 font-medium">意图识别 &amp; 关键词提取</p>
<p className="text-[10px] text-gray-500">Extracted: "固态电池", "商业化", "技术突破"</p>
</div>
</div>
<div className="flex items-start gap-2.5">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<div className="flex-1 space-y-1">
<p className="text-[11px] text-gray-900 font-medium">多路召回 (Hybrid Search)</p>
<div className="flex gap-1.5">
<span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] text-gray-600 font-mono">Vector: 12</span>
<span className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] text-gray-600 font-mono">BM25: 8</span>
</div>
</div>
</div>
<div className="flex items-start gap-2.5">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse"></div>
<div className="flex-1">
<p className="text-[11px] text-gray-500">正在综合并生成回答...</p>
</div>
</div>
</div>
</div>
</div>

<div className="prose prose-sm max-w-none text-gray-800 leading-7">
<p className="mb-3">根据最新的行业研究报告，全固态电池（ASSB）被广泛认为是下一代电池技术的“圣杯”。目前的进展主要集中在以下三个关键方面：</p>
<ul className="list-none pl-0 space-y-4 my-4">
<li className="flex gap-3">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
<div>
<span className="text-gray-600 text-sm">由于全固态量产难度大，蔚来、上汽等车企已开始在高端车型上装车半固态电池（如卫蓝新能源方案），能量密度达到 <span className="bg-gray-100 px-1 rounded font-mono text-xs">360Wh/kg</span>，实现了1000公里续航。</span>
</div>
</li>
<li className="flex gap-3">
<div className="w-6 h-6 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
<div>
<span className="text-gray-600 text-sm">
<span className="font-medium text-gray-800">硫化物：</span>导电率最高，丰田主押，计划2027年量产。
                                            <span className="font-medium text-gray-800">氧化物：</span>稳定性好但界面阻抗大，国内企业多采用此路线。
                                            <span className="font-medium text-gray-800">聚合物：</span>成本低但导电率低，欧美企业偏好。
                                        </span>
</div>
</li>
</ul>
<p className="text-gray-600 text-sm">商业化最大的阻碍仍然是。目前全固态电池的制造成本约为液态电池的4-5倍，主要受限于稀有金属（如锂硫化物）的价格和复杂的生产工艺。</p>
</div>

<div className="mt-6">
<h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                参考来源
                            </h4>
<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
<div className="flex-shrink-0 w-48 p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-subtle transition-all cursor-pointer group" onclick="showToast('打开 PDF 文档...')">
<div className="flex items-center gap-2 mb-1.5">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span className="text-[10px] font-medium text-gray-900 truncate flex-1">固态电池产业白皮书.pdf</span>
</div>
<div className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                                        ...卫蓝新能源的半固态电池已经在蔚来ET7上完成实测...
                                    </div>
</div>
<div className="flex-shrink-0 w-48 p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-subtle transition-all cursor-pointer group" onclick="showToast('打开 Word 文档...')">
<div className="flex items-center gap-2 mb-1.5">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:file-bar-chart" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 18v-2m4 2v-4m4 4v-6"></path></g></svg>
<span className="text-[10px] font-medium text-gray-900 truncate flex-1">Toyota_Strategy_2027.docx</span>
</div>
<div className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                                        ...breakthrough in sulfide solid electrolytes aiming for 2027...
                                    </div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 transition-colors text-left flex items-center gap-2 group" onclick="showToast('Adding to queue...')">
<span>固态电池与三元锂电池的成本对比如何？</span>
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 transition-colors text-left flex items-center gap-2 group" onclick="showToast('Adding to queue...')">
<span>哪家中国企业在硫化物路线领先？</span>
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex gap-1 mt-4 border-t border-gray-50 pt-2">
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors" onclick="showToast('Copied to clipboard')" title="Copy"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:copy" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg></button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors" onclick="showToast('Regenerating...')" title="Regenerate"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rotate-cw" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></g></svg></button>
<button className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors" onclick="showToast('Feedback sent')" title="Bad Response"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thumbs-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88M17 14V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-full p-4 md:p-6 bg-white border-t border-gray-100 z-10">
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden ring-1 ring-gray-900/5 focus-within:ring-2 focus-within:ring-gray-900/10 transition-all">

<div className="flex items-center gap-2 px-3 py-2 border-b border-gray-50 bg-gray-50/30">
<button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-medium bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50 active:scale-95 transition-transform">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                                深度研究
                            </button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-medium hover:bg-gray-100 text-gray-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
                                联网搜索
                            </button>
</div>
<textarea className="w-full resize-none border-none focus:ring-0 p-3 text-sm max-h-40 bg-transparent placeholder-gray-400 leading-relaxed outline-none" placeholder="输入您的问题... (支持 @ 引用知识库)" rows="1"></textarea>
<div className="flex items-center justify-between px-2 py-2">
<div className="flex items-center gap-1">
<button className="p-2 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:paperclip" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 text-gray-400 hover:text-gray-700 rounded hover:bg-gray-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</button>
</div>
<button className="bg-gray-900 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all shadow-sm active:scale-95">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="text-center mt-2">
<span className="text-[10px] text-gray-400">NEXUS AI generated content may be inaccurate.</span>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 h-full relative overflow-hidden bg-dot-pattern flex flex-col" id="view-graph">

<div className="absolute top-16 left-6 z-10 flex flex-col gap-3 pointer-events-none">
<div className="pointer-events-auto bg-white/90 backdrop-blur border border-gray-200 rounded-lg shadow-sm p-1 flex items-center gap-1">
<div className="relative group">
<svg aria-hidden="true" className="iconify absolute left-2.5 top-2 text-gray-400 group-focus-within:text-gray-900 iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="pl-8 pr-3 py-1.5 text-xs bg-transparent border-none focus:ring-0 w-48 text-gray-700 placeholder-gray-400 outline-none" placeholder="Search entity..." type="text"/>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 z-10 pointer-events-auto bg-white border border-gray-200 p-1.5 rounded-lg shadow-card flex flex-col gap-1">
<button className="p-1.5 rounded hover:bg-gray-100 text-gray-600 transition-colors" onclick="zoomGraph(1.1)"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<button className="p-1.5 rounded hover:bg-gray-100 text-gray-600 transition-colors" onclick="zoomGraph(0.9)"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<button className="p-1.5 rounded hover:bg-gray-100 text-gray-600 transition-colors" onclick="resetGraph()"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:maximize" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>

<div className="flex-1 w-full h-full overflow-hidden relative select-none" id="graph-wrapper" style={{cursor: 'grab'}}>
<div className="absolute top-0 left-0 w-full h-full origin-center transform-gpu transition-transform duration-75" id="graph-content">
<svg className="w-full h-full text-gray-300 pointer-events-none" height="2000" viewbox="0 0 1000 800" width="2000">
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="22" refy="3.5">
<polygon fill="#9CA3AF" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>

<g opacity="0.6" stroke="#D1D5DB" strokeWidth="1.5">
<line x1="500" x2="350" y1="400" y2="300"></line>
<line x1="500" x2="650" y1="400" y2="300"></line>
<line x1="500" x2="500" y1="400" y2="550"></line>
<line x1="350" x2="280" y1="300" y2="200"></line>
<line x1="350" x2="400" y1="300" y2="200"></line>
<line x1="650" x2="700" y1="300" y2="200"></line>
<line x1="650" x2="600" y1="300" y2="200"></line>

<line stroke-dasharray="4" x1="400" x2="600" y1="200" y2="200"></line>
</g>


<g className="pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity" onclick="showToast('Selected: Solid-State Battery')">
<circle className="animate-pulse-node shadow-lg" cx="500" cy="400" fill="#111827" r="35"></circle>
<circle cx="500" cy="400" fill="none" r="35" stroke="white" stroke-opacity="0.2" strokeWidth="2"></circle>
<text fill="white" fontSize="11" font-weight="600" text-anchor="middle" x="500" y="405">Solid-State</text>
</g>

<g className="pointer-events-auto cursor-pointer" onclick="showToast('Selected: Material Science')">
<circle cx="350" cy="300" fill="#ffffff" r="20" stroke="#3B82F6" strokeWidth="2"></circle>
<text fill="#1F2937" fontSize="10" font-weight="500" text-anchor="middle" x="350" y="304">Material</text>
</g>
<g className="pointer-events-auto cursor-pointer" onclick="showToast('Selected: Cost Analysis')">
<circle cx="650" cy="300" fill="#ffffff" r="20" stroke="#F97316" strokeWidth="2"></circle>
<text fill="#1F2937" fontSize="10" font-weight="500" text-anchor="middle" x="650" y="304">Cost</text>
</g>
<g className="pointer-events-auto cursor-pointer" onclick="showToast('Selected: Range Performance')">
<circle cx="500" cy="550" fill="#ffffff" r="20" stroke="#10B981" strokeWidth="2"></circle>
<text fill="#1F2937" fontSize="10" font-weight="500" text-anchor="middle" x="500" y="554">Range</text>
</g>

<circle className="pointer-events-auto hover:fill-gray-700 transition-colors" cx="280" cy="200" fill="#9CA3AF" r="8"></circle>
<circle className="pointer-events-auto hover:fill-gray-700 transition-colors" cx="400" cy="200" fill="#9CA3AF" r="8"></circle>
<circle className="pointer-events-auto hover:fill-gray-700 transition-colors" cx="700" cy="200" fill="#9CA3AF" r="8"></circle>
<circle className="pointer-events-auto hover:fill-gray-700 transition-colors" cx="600" cy="200" fill="#9CA3AF" r="8"></circle>
</svg>
</div>
</div>

<div className="absolute top-14 right-0 bottom-0 w-80 bg-white/95 backdrop-blur border-l border-gray-200 flex flex-col z-20 shadow-xl transition-transform duration-300">
<div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 bg-gray-50/50">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Entity Details</span>
<button className="text-gray-400 hover:text-gray-900" onclick="showToast('Panel closed (demo)')"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
<div className="flex-1 overflow-y-auto p-5">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">SS</div>
<div>
<h2 className="text-sm font-bold text-gray-900">Solid-State Battery</h2>
<p className="text-xs text-gray-500">Core Concept</p>
</div>
</div>

<div className="space-y-4">
<div>
<label className="text-[10px] font-semibold text-gray-400 uppercase mb-1 block">Definition</label>
<p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100">
                                A battery technology that uses solid electrodes and a solid electrolyte, instead of the liquid or polymer gel electrolytes used in lithium-ion batteries.
                            </p>
</div>
<div>
<label className="text-[10px] font-semibold text-gray-400 uppercase mb-2 block">Relationships</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded border border-gray-100 bg-white hover:border-gray-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs text-gray-700">Has Component</span>
</div>
<span className="text-[10px] text-gray-400 group-hover:text-gray-900">Electrolyte</span>
</div>
<div className="flex items-center justify-between p-2 rounded border border-gray-100 bg-white hover:border-gray-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-xs text-gray-700">Constrained By</span>
</div>
<span className="text-[10px] text-gray-400 group-hover:text-gray-900">Cost</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full pt-14 bg-white" id="view-kb">
<div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">

<div className="flex-1 flex flex-col min-w-0">

<div className="px-8 py-6 pb-0">
<div className="flex items-end justify-between mb-6">
<div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">知识库中心</h1>
<p className="text-sm text-gray-500 mt-1">管理您的文档资产与向量索引状态。</p>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm active:scale-95" onclick="showToast('Create KB Dialog')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                新建知识库
                            </button>
</div>

<div className="border-2 border-dashed border-gray-200 rounded-xl p-6 mb-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group" onclick="showToast('Open File Dialog')">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:bg-white transition-colors mb-3 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:upload-cloud" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
</div>
<h3 className="text-sm font-medium text-gray-900">点击或拖拽文件上传</h3>
<p className="text-xs text-gray-500 mt-1">支持 PDF, Markdown, DOCX (Max 25MB)</p>
</div>

<div className="flex items-center gap-3 border-b border-gray-100 pb-4">
<button className="text-xs font-medium text-gray-900 border-b-2 border-gray-900 pb-4 -mb-4 px-1">全部文件</button>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 pb-4 -mb-4 px-1 transition-colors">正在处理 (2)</button>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 pb-4 -mb-4 px-1 transition-colors">处理失败</button>
<div className="ml-auto relative group">
<svg aria-hidden="true" className="iconify absolute left-2.5 top-2 text-gray-400 group-focus-within:text-gray-900 iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-md focus:ring-1 focus:ring-gray-300 w-56 outline-none transition-all focus:bg-white" placeholder="Filter by name..." type="text"/>
</div>
</div>
</div>

<div className="flex-1 overflow-auto px-8">
<table className="w-full text-left border-collapse mt-2">
<thead className="sticky top-0 bg-white z-10">
<tr className="text-xs font-medium text-gray-500 uppercase tracking-wider">
<th className="py-3 pl-2 w-1/2">Name</th>
<th className="py-3">Vector Status</th>
<th className="py-3">Chunks</th>
<th className="py-3">Date</th>
<th className="py-3 text-right pr-2">Action</th>
</tr>
</thead>
<tbody className="text-sm text-gray-600 divide-y divide-gray-50">

<tr className="hover:bg-gray-50 group transition-colors cursor-pointer">
<td className="py-3 pl-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<div className="font-medium text-gray-900">EV_Battery_Market_2024.pdf</div>
<div className="text-[10px] text-gray-400">4.2 MB • PDF</div>
</div>
</div>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<div className="flex-1 w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-[10px] font-medium text-emerald-600">Ready</span>
</div>
</td>
<td className="py-3 font-mono text-xs">342</td>
<td className="py-3 text-xs">2 hours ago</td>
<td className="py-3 text-right pr-2">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-200 transition-colors" onclick="event.stopPropagation(); showToast('Menu clicked')"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</td>
</tr>

<tr className="hover:bg-gray-50 group transition-colors cursor-pointer">
<td className="py-3 pl-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-type-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M2 13v-1h6v1m-3-1v6m-1 0h2"></path></g></svg>
</div>
<div>
<div className="font-medium text-gray-900">Technical_Specs_V3.docx</div>
<div className="text-[10px] text-gray-400">1.8 MB • Word</div>
</div>
</div>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<div className="flex-1 w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full relative overflow-hidden" style={{width: '60%'}}>
<div className="absolute inset-0 bg-white/20 w-full h-full animate-shimmer"></div>
</div>
</div>
<span className="text-[10px] font-medium text-blue-600">Indexing...</span>
</div>
</td>
<td className="py-3 font-mono text-xs">-</td>
<td className="py-3 text-xs">Just now</td>
<td className="py-3 text-right pr-2">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-200 transition-colors"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:loader" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="w-full md:w-72 bg-gray-50 border-l border-gray-200 flex flex-col h-full overflow-y-auto">
<div className="p-5 border-b border-gray-200">
<h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Storage Usage</h2>

<div className="relative w-32 h-32 mx-auto mb-4">
<svg className="w-full h-full transform -rotate-90">
<circle cx="64" cy="64" fill="none" r="56" stroke="#E5E7EB" strokeWidth="12"></circle>
<circle cx="64" cy="64" fill="none" r="56" stroke="#111827" stroke-dasharray="351.8" stroke-dashoffset="100" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-bold text-gray-900">72%</span>
<span className="text-[10px] text-gray-500">Used</span>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="flex justify-between">
<span className="text-gray-500">Total Vectors</span>
<span className="font-mono font-medium text-gray-900">1,240,592</span>
</div>
<div className="flex justify-between">
<span className="text-gray-500">Storage Size</span>
<span className="font-mono font-medium text-gray-900">4.8 GB</span>
</div>
</div>
</div>
<div className="p-5">
<h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Indexing Config</h2>
<div className="space-y-4">
<div>
<label className="text-[10px] font-medium text-gray-500 mb-1 block">Chunk Size</label>
<select className="w-full bg-white border border-gray-200 rounded text-xs py-1.5 px-2 focus:ring-1 focus:ring-gray-900 outline-none">
<option>512 tokens</option>
<option selected="">1024 tokens</option>
<option>2048 tokens</option>
</select>
</div>
<div>
<label className="text-[10px] font-medium text-gray-500 mb-1 block">Overlap</label>
<div className="flex items-center gap-2">
<input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900" type="range"/>
<span className="text-[10px] font-mono w-6 text-right">10%</span>
</div>
</div>
<div className="pt-2">
<button className="w-full py-1.5 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium hover:bg-gray-50 transition-colors shadow-sm active:bg-gray-100" onclick="showToast('Settings saved')">Update Settings</button>
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
