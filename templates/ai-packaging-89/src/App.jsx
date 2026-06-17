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



        lucide.createIcons();
    
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
      

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 flex-shrink-0 z-30">

<div className="flex items-center gap-6">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-7 h-7 bg-yellow-400 rounded-md flex items-center justify-center text-slate-900 font-bold text-base">印</div>
<div className="flex flex-col">
<h1 className="font-bold text-slate-900 text-sm leading-none tracking-tight">印工社</h1>
<span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider leading-none mt-0.5">Printer Cybertech</span>
</div>
</div>
<div className="h-4 w-px bg-slate-200"></div>

<div className="flex items-center gap-4 text-slate-500">
<button className="flex items-center gap-1 hover:text-slate-800 text-xs font-medium">
                    文件 <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1.5 hover:text-slate-800 text-xs font-medium group">
<i className="w-3.5 h-3.5 group-hover:text-slate-800" data-lucide="file-plus"></i> 新建
                </button>
<button className="flex items-center gap-1.5 hover:text-slate-800 text-xs font-medium group">
<i className="w-3.5 h-3.5 group-hover:text-slate-800" data-lucide="save"></i> 保存
                </button>
<div className="flex items-center gap-1 ml-2">
<button className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
<i className="w-4 h-4" data-lucide="undo-2"></i>
</button>
<button className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
<i className="w-4 h-4" data-lucide="redo-2"></i>
</button>
</div>
</div>
</div>

<div className="bg-slate-100 p-1 rounded-lg flex items-center">
<button className="px-4 py-1.5 bg-yellow-400 text-slate-900 text-xs font-semibold rounded shadow-sm">
                2D设计
            </button>
<button className="px-4 py-1.5 text-slate-500 hover:text-slate-700 text-xs font-medium">
                3D预览
            </button>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> 报价下单
            </button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded hover:bg-slate-50 hover:border-slate-300 shadow-sm">
                分享
            </button>
<button className="px-4 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-xs font-semibold rounded shadow-sm transition-colors">
                导出
            </button>
<div className="h-4 w-px bg-slate-200 ml-1"></div>
<div className="flex items-center gap-2 cursor-pointer pl-1">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-xs text-slate-600 font-medium">用户名123456</span>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-14 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-6 z-20 flex-shrink-0">
<button className="p-2 rounded-lg text-yellow-600 bg-yellow-50 relative group">
<i className="w-5 h-5" data-lucide="clock"></i>
<span className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">最近使用</span>
</button>
<button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 group relative">
<i className="w-5 h-5" data-lucide="layers"></i>
<span className="text-[9px] mt-1 hidden">图层</span>
</button>
<button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 group relative">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
</button>
<button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 group relative">
<i className="w-5 h-5" data-lucide="type"></i>
</button>
<button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 group relative">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</button>
<button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 group relative">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</button>
</aside>

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col z-10 flex-shrink-0">

<div className="p-3 border-b border-slate-50">
<div className="relative">
<i className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all" placeholder="输入素材关键字" type="text"/>
</div>
</div>

<div className="flex items-center px-1 border-b border-slate-100">
<button className="flex-1 py-3 text-xs font-semibold text-yellow-600 border-b-2 border-yellow-400">全部</button>
<button className="flex-1 py-3 text-xs font-medium text-slate-500 hover:text-slate-700">形状</button>
<button className="flex-1 py-3 text-xs font-medium text-slate-500 hover:text-slate-700">图标</button>
<button className="flex-1 py-3 text-xs font-medium text-slate-500 hover:text-slate-700">插画</button>
</div>

<div className="flex-1 overflow-y-auto p-3">
<div className="grid grid-cols-3 gap-2">

<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700 group-hover:text-slate-900" data-lucide="recycle"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700 group-hover:text-slate-900" data-lucide="trash-2"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700 group-hover:text-slate-900" data-lucide="refresh-cw"></i>
</div>

<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-8 h-8 rounded-full border-2 border-slate-700 flex items-center justify-center text-[8px] font-bold text-slate-700">ISO</div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700" data-lucide="award"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700" data-lucide="globe"></i>
</div>

<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700" data-lucide="wine"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700" data-lucide="arrow-up"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-700" data-lucide="umbrella"></i>
</div>

<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-slate-900"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-6 h-6 bg-slate-900 rounded-full"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-900 fill-slate-900" data-lucide="star"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-900 fill-slate-900" data-lucide="hexagon"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<i className="w-6 h-6 text-slate-900 fill-slate-900" data-lucide="octagon"></i>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-6 h-6 border-2 border-slate-900"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-slate-900 bg-transparent"></div>
</div>
<div className="aspect-square bg-slate-50 rounded border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50/10 flex items-center justify-center cursor-pointer group transition-colors">
<div className="w-6 h-6 border-2 border-slate-900 rounded-full"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-checkerboard relative overflow-hidden flex items-center justify-center">

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-12 bg-white shadow-md border border-slate-200 rounded-r-lg flex items-center justify-center text-slate-400 hover:text-slate-600 z-20">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>

<button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-12 bg-white shadow-md border border-slate-200 rounded-l-lg flex items-center justify-center text-slate-400 hover:text-slate-600 z-20">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>

<div className="relative group">

<div className="flex h-[300px] border border-blue-400/80 bg-white/40 backdrop-blur-[1px] relative">

<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[120px] border-r border-dashed border-blue-300 h-full flex items-center justify-center relative">

<div className="relative w-24 h-24 group-hover:cursor-move">

<div className="absolute inset-0 border border-yellow-400 z-10">

<div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-yellow-400 rounded-full"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-yellow-400 rounded-full"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-yellow-400 rounded-full"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-yellow-400 rounded-full"></div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-yellow-400 rounded-full flex items-center justify-center cursor-grab">
<i className="w-2.5 h-2.5 text-yellow-500" data-lucide="refresh-cw"></i>
</div>
</div>

<i className="w-full h-full text-[#E8D4A2] fill-[#E8D4A2]" data-lucide="star"></i>
</div>
</div>
<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[80px] border-r border-dashed border-blue-300 h-full"></div>
<div className="w-[80px] border-dashed border-blue-300 h-full"></div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
<button className="text-slate-500 hover:text-slate-900"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="text-xs font-medium text-slate-700 w-10 text-center">100%</span>
<button className="text-slate-500 hover:text-slate-900"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
</main>

<aside className="w-72 bg-white border-l border-slate-200 flex flex-col z-10 flex-shrink-0">

<div className="h-40 bg-slate-100 relative border-b border-slate-200 overflow-hidden group">
<img alt="Preview" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1589366020739-c5c2d1b764b8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2">
<button className="p-1 bg-white/80 rounded hover:bg-white text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="maximize-2"></i>
</button>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-24 h-24 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
</div>
</div>

<div className="flex items-center px-4 pt-2 border-b border-slate-100">
<button className="pb-2.5 pt-1 mr-4 text-xs font-medium text-slate-500 hover:text-slate-800">调参参数</button>
<button className="pb-2.5 pt-1 mr-4 text-xs font-semibold text-yellow-600 border-b-2 border-yellow-400">图形信息</button>
<button className="pb-2.5 pt-1 text-xs font-medium text-slate-500 hover:text-slate-800">文字</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="space-y-2">
<h3 className="text-xs font-medium text-slate-500">尺寸</h3>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 focus:outline-none focus:border-yellow-400" type="text" value="111mm"/>
<span className="absolute right-2 top-1.5 text-[10px] text-slate-400">宽</span>
</div>
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="link"></i>
<div className="relative flex-1">
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 focus:outline-none focus:border-yellow-400" type="text" value="111mm"/>
<span className="absolute right-2 top-1.5 text-[10px] text-slate-400">高</span>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-slate-500">透明度</h3>
<span className="text-xs text-slate-600 bg-slate-100 px-1.5 rounded">60%</span>
</div>
<input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-400" max="100" min="0" type="range" value="60"/>
</div>

<div className="space-y-2">
<h3 className="text-xs font-medium text-slate-500">颜色</h3>
<div className="grid grid-cols-4 gap-2">
<div className="h-8 rounded bg-gradient-to-br from-blue-400 via-purple-400 to-red-400 cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-[#B45309] cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-[#52525B] cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-white cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-red-600 cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-black cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
<div className="h-8 rounded bg-yellow-400 cursor-pointer ring-2 ring-blue-500 ring-offset-1"></div>
<div className="h-8 rounded bg-[#FACC15] opacity-50 cursor-pointer ring-1 ring-slate-200 hover:ring-slate-300"></div>
</div>
</div>

<div className="space-y-2">
<h3 className="text-xs font-medium text-slate-500">工艺</h3>
<button className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="plus"></i> 添加工艺
                    </button>
</div>
</div>

<div className="p-3 border-t border-slate-200 grid grid-cols-5 gap-1">
<button className="flex items-center justify-center p-2 rounded hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="align-left"></i>
</button>
<button className="flex items-center justify-center p-2 rounded hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="layers"></i>
</button>
<button className="flex items-center justify-center p-2 rounded hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="copy"></i>
</button>
<button className="flex items-center justify-center p-2 rounded hover:bg-slate-50 text-slate-500">
<i className="w-4 h-4" data-lucide="lock"></i>
</button>
<button className="flex items-center justify-center p-2 rounded hover:bg-red-50 text-slate-500 hover:text-red-500">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</aside>
</div>


    </>
  );
}
