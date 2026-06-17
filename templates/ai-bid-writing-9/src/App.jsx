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
      

<div className="ambient-glow"></div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2.5">

<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg shadow-indigo-500/20">
<iconify-icon height="20" icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">巧文书AI</span>
</div>
<div className="flex items-center gap-4">
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-rose-400 to-orange-500 p-[1px] text-sm font-medium text-white shadow-sm hover:from-rose-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 transition-all">
<span className="relative flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-slate-900 transition-all group-hover:bg-opacity-0 group-hover:text-white">
<iconify-icon className="text-rose-500 group-hover:text-white" height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">限时免费套餐</span>
</span>
</button>
<button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-md shadow-slate-900/10 transition-transform hover:scale-105 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                    登录
                </button>
</div>
</div>
</nav>

<main className="relative isolate pt-14 lg:pt-24 pb-20 flex-grow">

<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl drop-shadow-sm">
                写标书，就用<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">巧文书AI</span>
</h1>

<div className="mt-10 flex justify-center">
<div className="glass-panel inline-flex items-center rounded-full p-1.5 shadow-sm ring-1 ring-slate-200/50">
<button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all">
                        标书智写
                    </button>
<button className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-all">
                        标书查重
                    </button>
<button className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-all">
                        废标项检查
                    </button>
<button className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-all">
                        标书解读
                    </button>
<button className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-all">
                        标讯查询
                    </button>
</div>
</div>

<div className="mx-auto mt-12 max-w-4xl">
<div className="group relative flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 ring-4 ring-blue-50 shadow-sm transition-transform group-hover:scale-110">
<iconify-icon height="32" icon="solar:cloud-upload-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">
                        将招标文件拖在此处，或<span className="cursor-pointer text-blue-600 underline decoration-2 underline-offset-2 hover:text-blue-700">点击上传</span>
</h3>
<p className="mt-2 text-sm text-slate-500">
                        支持文件格式: PDF、DOC、DOCX，单个文件不超过50MB，最多可上传5个
                    </p>
</div>

<div className="mt-6 flex flex-wrap justify-center gap-3">
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear" width="16"></iconify-icon>
                        标书页数: 500页
                    </div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:shield-warning-linear" width="16"></iconify-icon>
                        暗标屏蔽词: 无
                    </div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:palette-linear" width="16"></iconify-icon>
                        标书风格: 通用
                    </div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:ruler-angular-linear" width="16"></iconify-icon>
                        表格数量: 适量
                    </div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:gallery-wide-linear" width="16"></iconify-icon>
                        智能配图: 适量
                    </div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-400" icon="solar:list-check-linear" width="16"></iconify-icon>
                        排版样式: 无表格
                    </div>
</div>

<div className="mt-10">
<button className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm hover:border-blue-200 hover:bg-slate-50 hover:shadow-md transition-all">
                        前往智写
                        <iconify-icon className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mx-auto mt-24 max-w-6xl px-6 lg:px-8">
<div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/80 lg:grid lg:grid-cols-2">

<div className="relative flex flex-col justify-center overflow-hidden p-10 lg:p-16">

<div className="mesh-gradient absolute inset-0 opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                            企业级私有化部署方案
                        </h2>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">专职部署负责人</span>
</li>
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">全面实施支持</span>
</li>
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">量身定制的培训</span>
</li>
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">专属客服支持</span>
</li>
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">人工智能战略与咨询</span>
</li>
<li className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm backdrop-blur-md border border-white/20">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-800">社区、活动和资源</span>
</li>
</ul>
</div>
</div>

<div className="bg-white/95 p-10 lg:p-16 backdrop-blur-xl">
<h3 className="text-xl font-semibold text-slate-900">联系我们</h3>
<form className="mt-8 space-y-5">
<div className="space-y-1.5">
<label className="block text-sm font-medium leading-6 text-slate-600" htmlFor="name">您的称呼</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow bg-slate-50" id="name" name="name" placeholder="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium leading-6 text-slate-600" htmlFor="phone">手机号码</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow bg-slate-50" id="phone" name="phone" placeholder="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium leading-6 text-slate-600" htmlFor="company">公司名称</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow bg-slate-50" id="company" name="company" placeholder="" type="text"/>
</div>
<div className="pt-2">
<button className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors" type="button">
                                提交
                            </button>
</div>
<p className="text-xs text-slate-400 text-center">
                            点击“提交”即表示同意与巧文书AI共享所提供的信息
                        </p>
</form>
</div>
</div>
</div>
</main>

<footer className="bg-slate-950 py-12 text-sm text-slate-400 sm:py-16 border-t border-slate-800">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

<div className="space-y-4 lg:col-span-1">
<div className="flex items-center gap-2 text-white">
<iconify-icon height="24" icon="solar:notebook-linear" width="24"></iconify-icon>
<span className="text-lg font-bold">巧文书AI</span>
</div>
<p className="text-slate-400 leading-relaxed">
                        用人工智能重新定义投标，革新工作方式
                    </p>
</div>

<div>
<h3 className="font-semibold text-white">产品功能</h3>
<ul className="mt-4 space-y-3">
<li><a className="hover:text-white transition-colors" href="#">标书写作</a></li>
<li><a className="hover:text-white transition-colors" href="#">废标项检查</a></li>
<li><a className="hover:text-white transition-colors" href="#">标书查重</a></li>
<li><a className="hover:text-white transition-colors" href="#">招标解析</a></li>
<li><a className="hover:text-white transition-colors" href="#">图表生成</a></li>
<li><a className="hover:text-white transition-colors" href="#">企业知识库</a></li>
<li><a className="hover:text-white transition-colors" href="#">标讯查询</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-white">产品</h3>
<ul className="mt-4 space-y-3">
<li><a className="hover:text-white transition-colors" href="#">解决方案</a></li>
<li><a className="hover:text-white transition-colors" href="#">价格方案</a></li>
<li><a className="hover:text-white transition-colors" href="#">渠道合作</a></li>
<li><a className="hover:text-white transition-colors" href="#">关于巧文书</a></li>
</ul>
</div>

<div className="space-y-8">
<div>
<h3 className="font-semibold text-white">联系我们</h3>
<ul className="mt-4 space-y-3 text-xs leading-relaxed">
<li>企业邮箱：qiaowenshu@tianhecloud.com</li>
<li>总部地址：湖南省长沙市长沙县天华中路明城商务广场33楼</li>
</ul>
</div>
<div>
<h3 className="font-semibold text-white">服务热线</h3>
<p className="mt-2 text-2xl font-semibold text-white tracking-tight">0731-89821852</p>
<p className="mt-1 text-xs">工作时间（周一至周五 09:00-18:00）</p>
</div>
</div>
</div>
<div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                Copyright©2015-2026 湖南天河国云科技有限公司版权所有
            </div>
</div>
</footer>

    </>
  );
}
