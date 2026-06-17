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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-zinc-950">
<iconify-icon icon="solar:shield-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
                    YUNDUN
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">核心技术</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">企业方案</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">威胁情报</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">控制台登录</a>
<button className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition-colors">
                    免费下载
                </button>
</div>
</div>
</nav>

<main className="relative overflow-hidden">

<div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center relative z-10">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur text-xs font-medium text-zinc-300 mb-8 hover:bg-zinc-800 transition-colors" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                引擎 v3.0 量子防御架构已上线 <span className="text-zinc-600">→</span>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 leading-tight">
                静默守护边界，<br/>毫秒级威胁响应。
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                彻底摒弃臃肿的传统病毒库，依托自研云端行为预测算法，在完全不干扰系统性能的极限状态下，提供企业级全天候无感安全防护。
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    获取个人免费版
                </button>
<button className="w-full sm:w-auto bg-zinc-900/50 backdrop-blur border border-zinc-800 text-zinc-300 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 hover:text-white transition-colors">
                    查看企业部署方案
                </button>
</div>
</section>

<section className="px-6 pb-32 max-w-5xl mx-auto relative z-10">
<div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/30">
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50"></div>
<div className="flex-1 text-center text-xs font-medium text-zinc-500 tracking-tighter">YUNDUN 工作站版</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

<div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 relative overflow-hidden group">

<div className="relative w-36 h-36 flex items-center justify-center mb-6">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="#27272a" strokeWidth="2"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="none" r="46" stroke="#10b981" stroke-dasharray="289" stroke-dashoffset="0" strokeWidth="2"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-5xl font-semibold tracking-tighter text-emerald-400 mb-1">100</span>
<span className="text-xs text-zinc-500 font-medium">系统安全分</span>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-xl text-emerald-500" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold tracking-tighter text-zinc-100">引擎全面守护中</h3>
</div>
<p className="text-xs text-zinc-500 font-medium mb-6">病毒库与云端规则已是最新</p>
<button className="w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-lg transition-colors border border-emerald-500/20 flex items-center justify-center gap-2">
<iconify-icon icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            深度扫描
                        </button>
</div>

<div className="md:col-span-8 flex flex-col gap-6">

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col justify-between h-28 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center gap-2 text-zinc-400 mb-2">
<iconify-icon icon="solar:document-medicine-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium">今日扫描文件</span>
</div>
<div className="text-3xl font-semibold tracking-tighter text-zinc-100">842,105</div>
</div>
<div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col justify-between h-28 hover:bg-zinc-900/50 transition-colors">
<div className="flex items-center gap-2 text-rose-400 mb-2">
<iconify-icon icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-400">成功拦截威胁</span>
</div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tighter text-rose-400">14</div>
<div className="text-xs font-medium text-zinc-500 mb-1.5">次</div>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50 flex-1">
<div className="flex items-center justify-between mb-5">
<h4 className="text-sm font-semibold tracking-tighter text-zinc-200">实时防护模块</h4>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300" href="#">高级设置</a>
</div>
<div className="flex flex-col gap-4">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="solar:cloud-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tighter text-zinc-200">云端主动防御引擎</div>
<div className="text-xs font-medium text-zinc-500">基于 AI 的未知行为拦截</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 border border-zinc-700"></div>
</label>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tighter text-zinc-200">防勒索诱捕系统</div>
<div className="text-xs font-medium text-zinc-500">保护核心文档免受加密篡改</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 border border-zinc-700"></div>
</label>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon icon="solar:eye-closed-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tighter text-zinc-400">硬件隐私保护 (暂停)</div>
<div className="text-xs font-medium text-zinc-600">麦克风与摄像头拦截</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-zinc-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 border border-zinc-700"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900/50">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-zinc-100">重塑终端安全边界。</h2>
<p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">不再依赖滞后的特征码更新，从底层架构出发，以前所未有的轻量级形态，阻击各类变种与未知威胁。</p>
</div>
<button className="text-sm font-medium text-zinc-100 hover:text-zinc-300 transition-colors flex items-center gap-2 self-start md:self-auto">
                了解技术细节 <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-8 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3 text-zinc-100">10MB 微内核架构</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-medium">极致的底层优化，冷启动内存占用低至个位数。完全静默运行，杜绝一切弹窗打扰，为大型软件与游戏让出每一滴性能。</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-8 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3 text-zinc-100">零信任云沙箱</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-medium">对于可疑文件，毫秒级隐蔽上传至云端沙盒进行多维行为模拟，确保只有绝对安全的指令能在您的物理机上执行。</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-8 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
<iconify-icon className="text-2xl" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3 text-zinc-100">无边界网络防御</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-medium">集成新一代防火墙模块，智能分析网络流量特征，从源头阻断钓鱼网站、恶意挖矿脚本及后台隐蔽的数传行为。</p>
</div>
</div>
</section>

<footer className="border-t border-zinc-900/50 py-12 px-6 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xs" icon="solar:shield-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter text-zinc-300">YUNDUN</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">隐私政策</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">服务条款</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">安全漏洞报告</a>
</div>
<div className="text-xs text-zinc-600 font-medium">
                © 2024 YunDun Security Technology Co., Ltd.
            </div>
</div>
</footer>

    </>
  );
}
