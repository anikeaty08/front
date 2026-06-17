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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b bg-red-50/80 border-red-200/50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="uppercase text-xl font-semibold tracking-tighter text-red-900">kaido gym</div>
<a className="text-sm font-medium text-white px-4 py-2 rounded-full transition-colors bg-red-900 hover:bg-red-800" href="#register">
                Đăng ký ngay
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 text-white overflow-hidden relative bg-red-900">
<div className="bg-gradient-to-br from-white/10 via-white/0 to-white/10 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-center max-w-3xl mr-auto ml-auto relative gap-x-2 gap-y-2">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-red-800 tracking-wide bg-stone-50 border-red-700/50 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3">Lộ trình giảm ngay 1-2cm vòng bụng trong 6 ngày</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Bạn đang thừa cân, <br className="hidden md:block"/>
<span className="text-red-50">nhưng không biết bắt đầu từ đâu?</span>
</h1>
<div className="md:text-xl leading-relaxed flex flex-col gap-2 text-lg font-normal text-red-400 mb-10 gap-x-2 gap-y-2 items-center">
<span className="">Đã thử ăn kiêng? Đã tập theo YouTube?</span>
<span className="">Đã từng bỏ cuộc giữa chừng?</span>
</div>
<div className="md:p-8 bg-red-800/30 max-w-xl border-red-700/50 border rounded-2xl mr-auto mb-10 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<p className="text-base font-medium text-red-50 mb-4">Tập luyện cùng HLV 1:1 &amp; ăn uống cá nhân hoá Như một học viên chính thức.</p>
<div className="flex flex-col md:flex-row gap-4 text-sm gap-x-4 gap-y-4 items-center justify-center">
<div className="flex gap-2 md:w-auto bg-stone-900 w-full border-red-800 border rounded-xl px-4 py-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-xl text-red-400" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-left">
<span className="block text-sm text-red-500">Đặt cọc</span>
<span className="text-base font-semibold text-white tracking-tight">875.000đ</span>
</div>
</div>
<div className="flex gap-2 md:w-auto bg-stone-900 w-full border-red-800 border rounded-xl pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-xl text-red-400" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-left">
<span className="block text-sm text-red-500">Hoàn lại 100%</span>
<span className="text-sm font-medium text-red-100">Sau khi tập đủ 3 buổi</span>
</div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 transition-all hover:shadow-xl sm:w-auto hover:bg-red-100 text-lg font-medium text-red-900 bg-white w-full rounded-full px-8 py-4 shadow-lg" href="#register">
                Đăng ký trải nghiệm ngay
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="text-sm text-red-100 mt-4">Chỉ nhận 3 người mỗi đợt. Đăng ký sẽ đóng khi đủ số lượng.</p>
</div>
</section>

<section className="max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-zinc-50 tracking-tight mb-4">Có thể bạn đã từng...</h2>
<p className="text-base text-neutral-100">Cảm thấy thất vọng vì mọi nỗ lực đều quay về con số không.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="bg-white p-8 rounded-2xl border shadow-sm flex gap-4 items-start border-red-100">
<div className="p-3 rounded-lg bg-red-100 text-red-600">
<iconify-icon className="text-xl" icon="solar:scale-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-red-950 mb-1">Nhịn ăn rồi tăng cân lại</h3>
<p className="text-sm leading-relaxed text-red-500">Vòng lặp giảm cân ảo, mất nước và cơ, sau đó ăn bù và tăng cân nhanh hơn trước.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border shadow-sm flex gap-4 items-start border-red-100">
<div className="p-3 rounded-lg bg-red-100 text-red-600">
<iconify-icon className="text-xl" icon="solar:running-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-red-950 mb-1">Tập 1–2 tuần rồi bỏ</h3>
<p className="text-sm leading-relaxed text-red-500">Thiếu động lực, đau nhức cơ bắp do tập sai cách và không có người đồng hành.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border shadow-sm flex gap-4 items-start border-red-100">
<div className="p-3 rounded-lg bg-red-100 text-red-600">
<iconify-icon className="text-xl" icon="solar:pill-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-red-950 mb-1">Dùng TPCN vô hiệu</h3>
<p className="text-sm leading-relaxed text-red-500">Tốn tiền vào các loại trà, thuốc giảm cân không rõ nguồn gốc mà không mang lại kết quả thực tế.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border shadow-sm flex gap-4 items-start border-red-100">
<div className="p-3 rounded-lg bg-red-100 text-red-600">
<iconify-icon className="text-xl" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-red-950 mb-1">Quá tải thông tin</h3>
<p className="leading-relaxed text-sm text-red-400">Xem quá nhiều kiến thức trên mạng nhưng không biết áp dụng thế nào cho đúng với cơ thể mình.</p>
</div>
</div>
</div>
<div className="text-center max-w-2xl mx-auto p-6 rounded-2xl bg-red-100">
<p className="text-lg font-medium text-red-700">Vấn đề không phải ở bạn.</p>
<p className="text-sm text-gray-900 mt-1">Vấn đề là bạn chưa có một lộ trình rõ ràng và một người theo sát thực sự.</p>
</div>
</section>

<section className="border-y bg-white pt-24 pr-6 pb-24 pl-6 border-red-100">
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold text-neutral-800 tracking-tight mb-6">Giải pháp lúc này: KaiDo Gym sẽ đồng hành 6 ngày cùng bạn</h2>
<li className="flex pt-3 pb-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl mt-0.5 text-red-900" height="20" icon="solar:close-square-outline" style={{strokeWidth: '1.5', color: 'rgb(24, 24, 27)'}} width="20"></iconify-icon>
<span className="text-base text-red-700">Không ăn đồ luộc</span>
</li><li className="flex pt-3 pb-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl text-red-900 mt-0.5" height="20" icon="solar:close-square-outline" style={{strokeWidth: '1.5', color: 'rgb(24, 24, 27)'}} width="20"></iconify-icon>
<span className="text-base text-red-700">Không nhịn ăn</span>
</li><li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl mt-0.5 text-red-900" height="20" icon="solar:close-square-outline" style={{strokeWidth: '1.5', color: 'rgb(24, 24, 27)'}} width="20"></iconify-icon>
<span className="text-base pb-3 text-red-700">Không dùng thực phẩm chức năng</span>
</li><li className="flex py-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl mt-0.5 text-red-900" height="20" icon="solar:close-square-outline" style={{strokeWidth: '1.5', color: 'rgb(24, 24, 27)'}} width="20"></iconify-icon>
<span className="text-base text-red-700">Không tập quá sức</span>
</li><li className="flex py-3 gap-x-3 gap-y-1 items-start">
<iconify-icon className="shrink-0 text-xl mt-0.5 text-red-900" height="20" icon="solar:close-square-outline" style={{strokeWidth: '1.5', color: 'rgb(24, 24, 27)'}} width="20"></iconify-icon>
<span className="text-base text-red-700">Không dùng thực đơn ép buộc</span>
</li><p className="leading-relaxed text-base text-gray-600 max-w-md pt-8 pb-8">Thay vì yêu cầu bạn mua gói dài hạn ngay lập tức, chúng tôi cho bạn trải nghiệm trước để cảm nhận chất lượng thực sự.</p>
<ul className="space-y-4">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl text-red-900 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', color: 'rgb(34, 197, 94)'}} width="20"></iconify-icon>
<span className="text-sm text-red-700">Đo thông số cơ thể &amp; phân tích tình trạng chi tiết.</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="shrink-0 text-xl text-red-900 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', color: 'rgb(34, 197, 94)'}} width="20"></iconify-icon>
<span className="text-sm text-red-700">Xác định mục tiêu thực tế và có thể đạt được.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-xl text-red-900 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', color: 'rgb(34, 197, 94)'}} width="20"></iconify-icon>
<span className="text-sm text-red-700">Thiết kế bài tập phù hợp với thể trạng hiện tại của bạn.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 text-xl text-red-900 mt-0.5" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', color: 'rgb(74, 222, 128)'}} width="20"></iconify-icon>
<span className="text-sm text-red-700">Hướng dẫn ăn uống cá nhân hoá, không nhịn đói.</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-red-100">
<p className="font-medium text-base text-red-900">Bạn không cần biết bắt đầu từ đâu.</p>
<p className="text-sm text-red-500">Chúng tôi sẽ chỉ cho bạn.</p>
</div>
</div>
<div className="lg:w-1/2 w-full rounded-3xl p-8 border shadow-sm relative overflow-hidden bg-red-50 border-red-200">
<div className="absolute -right-10 -top-10 text-red-100">
<iconify-icon className="" icon="solar:shield-check-linear" style={{fontSize: '12rem', strokeWidth: '1'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="uppercase text-sm font-medium text-red-500 tracking-widest mb-2">Cơ chế</h3>
<h4 className="text-2xl font-semibold text-red-900 tracking-tight mb-6">Đặt cọc &amp; Hoàn tiền</h4>
<p className="text-sm mb-6 text-red-600">Bạn đặt cọc <strong className="text-base font-semibold text-red-900">875.000đ</strong> chỉ để đảm bảo bạn thật sự nghiêm túc với bản thân.</p>
<div className="bg-white p-5 rounded-xl border mb-6 border-red-100">
<p className="text-xs uppercase tracking-wide font-medium mb-3 text-red-500">Sau khi hoàn thành 3 buổi:</p>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-red-400" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium text-red-900">Nhận lại 100% số tiền mặt.</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs italic text-red-400">Hoặc</span>
</div>
<div className="flex items-center gap-3 mt-3">
<iconify-icon className="text-red-400" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium text-red-900">Trừ trực tiếp vào lộ trình chính thức.</span>
</div>
</div>
<div className="space-y-2 text-xs flex flex-col gap-1 text-red-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Không điều kiện ẩn.
                        </div>
<div className="flex items-center gap-2 font-medium mt-2 text-red-900">
<iconify-icon className="text-sm" icon="solar:shield-keyhole-linear"></iconify-icon> Bạn hoàn toàn không rủi ro.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-gray-50 tracking-tight mb-4">Sau 3 buổi, điều gì xảy ra?</h2>
<p className="text-base text-neutral-200">Bạn sẽ hiểu rõ cơ thể mình, biết chính xác cần làm gì, có kế hoạch rõ ràng và cảm nhận sự thay đổi ban đầu.</p>
</div>
<div className="rounded-3xl p-1 text-white shadow-xl mb-12 bg-red-900">
<div className="md:p-12 flex flex-col md:flex-row bg-red-900 border-red-800 border rounded-[22px] pt-8 pr-8 pb-8 pl-8 gap-x-10 gap-y-10 items-center justify-between">
<div className="md:w-1/2">
<h3 className="text-xl font-semibold tracking-tight mb-4">Lúc đó, bạn có thể tiếp tục:</h3>
<p className="text-sm text-red-200 mb-6">Số tiền cọc trải nghiệm sẽ được trừ trực tiếp vào các gói lộ trình dưới đây nếu bạn muốn đi tiếp.</p>
<div className="space-y-4">
<div className="flex bg-red-800/50 border-stone-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<span className="block text-sm font-medium text-red-300">Lộ trình mục tiêu</span>
<span className="text-lg font-semibold tracking-tight">Giảm 2kg</span>
</div>
<div className="text-right">
<span className="text-lg font-semibold tracking-tight">3.500.000đ</span>
</div>
</div>
<div className="flex bg-red-800/50 border-stone-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="">
<span className="block text-sm font-medium text-red-300">Lộ trình mục tiêu</span>
<span className="text-lg font-semibold tracking-tight">Giảm 4kg</span>
</div>
<div className="text-right">
<span className="text-lg font-semibold tracking-tight">5.200.000đ</span>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 flex flex-col items-center text-center p-6 bg-black/40 rounded-2xl border border-red-800/50">
<iconify-icon className="text-4xl mb-4 text-red-500" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-base font-medium mb-2">Nếu chưa sẵn sàng?</p>
<p className="text-sm text-red-200">Bạn nhận lại 100% tiền mặt mà không phải chịu bất kỳ áp lực nào.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-red-100">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-red-900">Ai phù hợp với chương trình này?</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white border-red-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2 text-red-900">
<iconify-icon className="text-xl" icon="solar:user-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Chương trình dành cho:
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-700">Người đang thừa cân, bế tắc với vóc dáng.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-700">Người đã thử nhiều cách giảm cân nhưng thất bại.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-700">Người muốn làm đúng phương pháp khoa học ngay từ đầu.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-700">Người sẵn sàng dành 3 buổi tập nghiêm túc cho bản thân.</span>
</li>
</ul>
</div>

<div className="bg-neutral-50 border-red-200 border rounded-2xl px-8 py-8">
<h3 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2 text-red-500">
<iconify-icon className="text-xl" icon="solar:user-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        KHÔNG dành cho:
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 opacity-75">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-red-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-600">Người tìm giải pháp "nhanh – dễ – không cần cố gắng".</span>
</li>
<li className="flex items-start gap-3 opacity-75">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-red-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-600">Người lười biếng, muốn uống thuốc giảm cân thay vì tập luyện.</span>
</li>
<li className="flex items-start gap-3 opacity-75">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-red-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-red-600">Người không thể cam kết thời gian cho đủ 3 buổi tập.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6 relative" id="register">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">

<div className="md:w-1/2 flex flex-col justify-center">
<div className="inline-flex uppercase text-xs font-medium text-red-500 tracking-wide bg-slate-300 w-fit border-yellow-100 border rounded-full mb-6 px-3 py-1 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Giới hạn số lượng
                </div>
<h2 className="text-3xl font-semibold text-red-900 tracking-tight mb-6">Mỗi đợt chỉ nhận 3 người.</h2>
<p className="leading-relaxed text-base text-red-600 mb-6">
                    Vì chúng tôi muốn HLV theo sát từng học viên để đảm bảo chất lượng. Khi đủ chỗ, form đăng ký sẽ đóng lại.
                </p>
<div className="h-px w-12 mb-6 bg-red-200"></div>
<p className="text-base font-medium mb-2 text-red-900">Nếu bạn đã từng thất bại, đừng tự trách mình.</p>
<p className="text-sm text-red-500 mb-8">Có thể bạn chỉ thiếu một hệ thống đúng. Hãy dành 3 buổi tập để trải nghiệm và tự cảm nhận sự khác biệt.</p>
<div className="p-5 rounded-xl border inline-block bg-red-50 border-red-200">
<p className="text-sm mb-1 text-red-700">Cọc giữ chỗ: <strong className="text-red-900">875.000đ</strong></p>
<p className="text-xs text-red-500">Hoàn lại 100% sau khi hoàn thành 3 buổi.</p>
</div>
</div>

<div className="md:w-1/2">
<div className="min-h-[500px] bg-white h-full border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl border-red-200">
<h3 className="text-xl font-semibold tracking-tight mb-6 text-red-900">Đăng ký trải nghiệm</h3>
<div className="ep-iFrameContainer" id="inline-aXfZMFdQwzQjbfjzRozh-div" style={{borderRadius: '4px', display: 'block'}}><div className="ep-wrapper" id="inline-aXfZMFdQwzQjbfjzRozh-wrapper" style={{borderRadius: '4px'}}><iframe className="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="aXfZMFdQwzQjbfjzRozh" data-form-name="Form Thử Thách 3 Buổi" data-height="908" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-aXfZMFdQwzQjbfjzRozh" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-aXfZMFdQwzQjbfjzRozh" scrolling="yes" src="https://link.funnel.vn/widget/form/aXfZMFdQwzQjbfjzRozh" style={{width: '100%', height: '100%', border: 'none', borderRadius: '4px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Form Thử Thách 3 Buổi">
</iframe></div></div>

</div>
</div>
</div>
</section>

<footer className="text-xs text-center border-t pt-8 pb-8 text-red-500 bg-red-50 border-red-200">
<div className="uppercase text-lg font-semibold tracking-tighter mb-2 text-red-900">kaido private training</div>
<p className="">Địa chỉ: 85 Dốc Mọc, Cao Dương, Thanh Oai, HN</p>
</footer>

    </>
  );
}
