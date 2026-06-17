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
      

<aside className="w-[260px] bg-[#FAFAFA] border-r border-gray-200 flex flex-col shrink-0 z-30 hidden md:flex">

<div className="h-14 flex items-center px-5 border-b border-gray-200 shrink-0">
<span className="font-semibold text-lg tracking-tight text-gray-900">D次方</span>
</div>

<div className="p-3 space-y-1 shrink-0">

<button className="w-full bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow transition-all text-gray-900 px-3 py-2 rounded-lg flex items-center justify-between font-medium text-sm mb-3">
<div className="flex items-center space-x-2">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<span>新建对话</span>
</div>
</button>

<button className="w-full hover:bg-gray-200/50 text-gray-600 hover:text-gray-900 px-3 py-2.5 rounded-lg transition-colors font-medium flex items-center text-sm">
<iconify-icon className="text-lg mr-2.5" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span>我的订单</span>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-3 py-2 flex flex-col">
<h3 className="text-xs font-medium text-gray-400 px-3 mb-2 tracking-tight">历史对话记录</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full bg-gray-200/50 text-gray-900 px-3 py-2 rounded-lg transition-colors font-medium flex items-center text-sm truncate">
                        不干胶标签定制
                    </button>
</li>
<li>
<button className="w-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors font-medium flex items-center text-sm truncate">
                        企业画册印刷 (200本)
                    </button>
</li>
<li>
<button className="w-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors font-medium flex items-center text-sm truncate">
                        烫金名片设计需求
                    </button>
</li>
<li>
<button className="w-full hover:bg-gray-200/50 text-gray-500 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors font-medium flex items-center text-sm truncate">
                        包装盒打样确认
                    </button>
</li>
</ul>
</div>

<div className="p-3 border-t border-gray-200 shrink-0">
<button className="w-full flex items-center space-x-3 hover:bg-gray-200/50 p-2 rounded-lg transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium text-sm shrink-0">
                    Z
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate group-hover:text-black">张小明</p>
<p className="text-xs text-gray-500 truncate">专业版会员</p>
</div>
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 h-full">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 z-20">
<button className="flex items-center text-gray-500 hover:text-gray-900 transition-colors group md:hidden">
<iconify-icon className="text-lg mr-1.5" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex items-center space-x-2 flex-1 md:flex-none justify-center md:justify-start">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-base font-semibold text-gray-900 tracking-tight">不干胶标签定制</span>
</div>
<div className="w-24 flex justify-end">

<button className="text-gray-400 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<section className="flex-[3] flex flex-col bg-white border-r border-gray-200 relative min-w-[320px]">

<div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 no-scrollbar pb-32">

<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] inline-block">
<p className="">想要打印1000个不干胶标签，尺寸是50mm*30mm；双色印刷；用铜版纸打印；</p>
</div>
<span className="text-xs text-gray-400 mr-1">10:42 AM</span>
</div>
<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%]">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm space-y-3 w-full">
<p className="font-medium text-gray-900">已确认您的初步需求如下：</p>
<div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
<ul className="space-y-1.5 text-xs">
<li className="flex"><span className="w-20 text-gray-500">标签类型</span><span className="font-medium">不干胶</span></li>
<li className="flex"><span className="w-20 text-gray-500">标签尺寸</span><span className="font-medium">50mm * 30mm</span></li>
<li className="flex"><span className="w-20 text-gray-500">印刷颜色</span><span className="font-medium">双色印刷</span></li>
<li className="flex"><span className="w-20 text-gray-500">印刷材质</span><span className="font-medium">铜版纸</span></li>
</ul>
</div>
<p className="">请完善更多信息为您创建订单：<span className="font-medium text-gray-900">印刷工艺、收货人、收货地址、联系方式</span>。</p>
</div>
</div>
</div>

<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] inline-block">
<p className="">收货人张三、15665566666、青岛市城阳区长城路102号、材质要烫红；</p>
</div>
</div>
<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%]">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm space-y-3 w-full">
<div className="flex items-start space-x-2 text-amber-600 bg-amber-50 p-2.5 rounded-md border border-amber-100">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs font-medium leading-relaxed">抱歉，印刷工艺目前仅支持：<br/>覆膜(光膜/哑膜)、烫金/银、模切、UV。暂不支持“烫红”。</p>
</div>
<p className="text-gray-500 text-xs">请重新选择工艺，或输入“覆哑膜”继续。</p>
</div>
</div>
</div>
<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] inline-block">
<p className="">那就改成覆哑膜吧</p>
</div>
</div>

<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm space-y-4 w-full">
<div className="flex items-center space-x-2 text-green-600">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-gray-900">您的需求已全部确认</span>
</div>
<div className="grid grid-cols-2 gap-y-2 text-xs bg-gray-50 p-3 rounded-lg border border-gray-100">
<div className="flex flex-col"><span className="text-gray-400 mb-0.5">标签类型</span><span className="font-medium text-gray-900">不干胶</span></div>
<div className="flex flex-col"><span className="text-gray-400 mb-0.5">尺寸与数量</span><span className="font-medium text-gray-900">50x30mm / 1000个</span></div>
<div className="flex flex-col"><span className="text-gray-400 mb-0.5">材质工艺</span><span className="font-medium text-gray-900">铜版纸 / 覆哑膜</span></div>
<div className="flex flex-col"><span className="text-gray-400 mb-0.5">印刷颜色</span><span className="font-medium text-gray-900">双色印刷</span></div>
<div className="col-span-2 pt-2 mt-1 border-t border-gray-100 flex flex-col">
<span className="text-gray-400 mb-0.5">配送信息</span>
<span className="font-medium text-gray-900">张三 15665566666</span>
<span className="text-gray-600 mt-0.5">青岛市城阳区长城路102号</span>
</div>
</div>
<div className="pt-2">
<p className="text-sm mb-3">请上传您的设计文件，系统将自动进行印前预检。</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2 rounded-xl rounded-tr-sm flex items-center space-x-3">
<div className="w-8 h-8 bg-red-100 text-red-600 rounded flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col text-left pr-4">
<span className="font-medium text-xs">design_draft_v1.pdf</span>
<span className="text-[10px] text-gray-400">2.4 MB</span>
</div>
</div>
</div>
<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm space-y-3 w-full">
<div className="flex items-center space-x-2 text-gray-500 text-xs">
<iconify-icon className="animate-pulse" icon="solar:scanner-linear"></iconify-icon>
<span>文件预检完成</span>
</div>
<p className="font-medium">16项预检合格，其中 <span className="text-red-500">2项预检不合格</span>。解读如下：</p>
<ul className="space-y-2 text-xs">
<li className="flex items-start space-x-2 bg-red-50/50 p-2 rounded border border-red-100">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-red-700 block">图片分辨率不足</span>
<span className="text-red-600/80">检测到部分图片低于 300dpi，印刷可能模糊。</span>
</div>
</li>
<li className="flex items-start space-x-2 bg-red-50/50 p-2 rounded border border-red-100">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-red-700 block">文字未设置转曲</span>
<span className="text-red-600/80">包含未转曲字体，可能导致印刷时字体缺失或替换。</span>
</div>
</li>
</ul>
<div className="pt-2 flex items-center justify-between border-t border-gray-100">
<span className="text-xs text-gray-500">您可以修改后重传，或联系客服</span>
<button className="text-xs font-medium text-gray-900 hover:underline flex items-center">
<iconify-icon className="mr-1" icon="solar:chat-round-line-linear"></iconify-icon> 联系客服协助
                                    </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] inline-block">
<p className="">联系客服协助</p>
</div>
</div>
<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%]">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm space-y-3">
<p className="font-medium text-gray-900">请扫码联系专属客服为您协助处理：</p>
<div className="border border-gray-200 p-2 rounded-xl bg-gray-50 inline-block">
<div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border border-gray-100 shadow-sm">
<iconify-icon className="text-[5rem] text-gray-900" icon="solar:qr-code-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-2 items-end">
<div className="bg-gray-50 border border-gray-200 text-gray-900 px-3 py-2 rounded-xl rounded-tr-sm flex items-center space-x-3">
<div className="w-8 h-8 bg-green-100 text-green-600 rounded flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:document-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col text-left pr-4">
<span className="font-medium text-xs">design_draft_v2_fixed.pdf</span>
<span className="text-[10px] text-gray-400">2.6 MB</span>
</div>
</div>
</div>
<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm space-y-4 w-full">
<div className="flex items-center space-x-2 text-green-600">
<iconify-icon className="text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-gray-900">预检合格，已为您生成报价单</span>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden">
<div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">费用明细</span>
</div>
<div className="p-4 space-y-3 text-sm">
<div className="flex justify-between items-center text-gray-600">
<span>标签印刷费</span>
<span className="">¥ 150.00</span>
</div>
<div className="flex justify-between items-center text-gray-600">
<span>材质费 (铜版纸)</span>
<span>¥ 45.00</span>
</div>
<div className="flex justify-between items-center text-gray-600">
<span>工艺费 (覆哑膜)</span>
<span>¥ 30.00</span>
</div>
<div className="flex justify-between items-center text-gray-600">
<span>运费</span>
<span>¥ 12.00</span>
</div>
<div className="flex justify-between items-center text-gray-600">
<span>税率 (3%)</span>
<span>¥ 7.11</span>
</div>
<div className="pt-3 border-t border-gray-100 flex justify-between items-end">
<span className="font-medium text-gray-900">合计总额</span>
<div className="text-right">
<span className="text-xs text-gray-500 mr-1">CNY</span>
<span className="text-xl font-semibold tracking-tight text-gray-900">¥ 244.11</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2">
<span>确认报价单并下单</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex flex-col space-y-6 items-start w-full">

<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-5 py-5 rounded-2xl rounded-tl-sm shadow-sm space-y-4 w-full">
<div className="flex flex-col items-center justify-center space-y-2 py-2">
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-1">
<iconify-icon className="text-2xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-semibold text-base tracking-tight text-gray-900">订单创建成功</h3>
<p className="text-xs text-gray-500">订单号：ORD-20231024-8892</p>
</div>
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium text-gray-900">不干胶标签定制 (1000pcs)</h4>
<p className="text-xs text-gray-500 mt-1">含铜版纸、覆哑膜等</p>
</div>
<span className="font-semibold text-lg tracking-tight text-gray-900">¥ 244.11</span>
</div>
</div>
<button className="w-full bg-[#1677FF] hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors font-medium text-sm flex justify-center items-center shadow-sm">
                                    立即支付 ¥ 244.11
                                </button>
</div>
</div>

<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white border border-gray-200 text-gray-800 px-5 py-5 rounded-2xl rounded-tl-sm shadow-sm space-y-4 w-full">
<div className="flex items-center space-x-3 mb-1">
<div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500 shrink-0">
<iconify-icon className="text-2xl" icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-base">支付成功</h4>
<p className="text-xs text-gray-500 mt-0.5">商家已收到您的货款，安排生产中</p>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
<span className="text-sm font-medium text-gray-600">实付金额</span>
<span className="font-semibold text-xl tracking-tight text-gray-900">¥ 244.11</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col space-y-2 items-start">
<div className="flex items-end space-x-2 max-w-[85%] w-full">
<div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mb-1">
<iconify-icon className="text-white text-sm" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-green-50/50 border border-green-200 text-gray-800 p-4 rounded-2xl rounded-tl-sm w-full flex items-center justify-between cursor-pointer hover:bg-green-50 transition-colors">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-white rounded-lg border border-green-200 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon className="text-xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="flex items-center space-x-2">
<h4 className="font-medium text-gray-900">订单已支付成功</h4>
<span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">待审核</span>
</div>
<p className="text-xs text-gray-500 mt-0.5">点击查看订单详情及生产进度</p>
</div>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="h-4"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
<div className="max-w-3xl mx-auto relative flex items-end bg-gray-50 border border-gray-200 rounded-xl px-2 py-2 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition-all">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:paperclip-linear" strokeWidth="1.5"></iconify-icon>
</button>
<textarea className="w-full bg-transparent border-none focus:ring-0 resize-none py-2 px-2 text-sm max-h-32 text-gray-900 placeholder-gray-400 no-scrollbar" placeholder="输入需求或上传设计文件..." rows="1"></textarea>
<button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors shrink-0 ml-2 shadow-sm">
<iconify-icon className="text-lg rotate-45 transform translate-y-[1px] -translate-x-[1px]" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="text-center mt-2">
<span className="text-[10px] text-gray-400">AI 助手可能产生错误，请仔细核对报价单。</span>
</div>
</div>
</section>

<aside className="flex-[2] hidden lg:flex flex-col bg-[#FAFAFA] min-w-[300px] border-l border-gray-200 z-10">

<div className="flex-1 flex flex-col min-h-0 border-b border-gray-200">
<div className="px-5 py-3 border-b border-gray-200 bg-white sticky top-0 flex justify-between items-center">
<h3 className="font-medium text-gray-900 tracking-tight">对话文件</h3>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">2</span>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pt-4 pr-4 pb-4 pl-4 space-y-3">

<div className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors cursor-pointer shadow-sm">
<div className="flex justify-between items-start">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-gray-400 border border-gray-100">
<iconify-icon className="text-2xl" icon="solar:file-bold-duotone"></iconify-icon>
</div>
<div className="">
<p className="text-xs font-medium text-gray-900 truncate max-w-[140px]" title="design_draft_v1.pdf">design_draft_v1.pdf</p>
<div className="flex items-center space-x-2 mt-1">
<span className="text-[10px] text-gray-500">2.4 MB</span>
<span className="text-[10px] text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">预检不合格</span>
</div>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
<button className="p-1 text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:download-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors cursor-pointer shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
<div className="flex justify-between items-start pl-1">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center text-green-600 border border-green-100">
<iconify-icon className="text-2xl" icon="solar:file-check-bold-duotone"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-900 truncate max-w-[140px]" title="design_draft_v2_fixed.pdf">design_draft_v2_fixed.pdf</p>
<div className="flex items-center space-x-2 mt-1">
<span className="text-[10px] text-gray-500">2.6 MB</span>
<span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">预检合格</span>
</div>
</div>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
<button className="p-1 text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<button className="p-1 text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:download-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-0 bg-gray-50/50">
<div className="px-5 py-3 border-b border-gray-200 bg-white sticky top-0 flex justify-between items-center">
<h3 className="font-medium text-gray-900 tracking-tight">当前订单</h3>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">

<div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
<span className="text-xs text-gray-500 font-mono">ORD-20231024-8892</span>
<span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded text-[10px] font-medium flex items-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1.5"></span>待审核
                                </span>
</div>
<h4 className="font-medium text-gray-900 mb-1">不干胶标签定制</h4>
<p className="text-xs text-gray-500 mb-3 line-clamp-1">铜版纸, 覆哑膜, 双色印刷, 50x30mm, 1000个</p>
<div className="flex justify-between items-end">
<span className="text-xs text-gray-400">10月24日 10:48</span>
<span className="font-semibold text-gray-900 tracking-tight">¥ 244.11</span>
</div>
</div>
</div>
</div>
</aside>
</main>
</div>

    </>
  );
}
