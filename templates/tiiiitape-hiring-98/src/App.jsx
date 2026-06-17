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
      

<header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="bg-indigo-600 text-white rounded-lg p-1 flex items-center justify-center">
<iconify-icon icon="solar:ghost-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                TIIIITAPE
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-indigo-600 transition-colors" href="#about">Về team</a>
<a className="hover:text-indigo-600 transition-colors" href="#product">Sản phẩm</a>
<a className="hover:text-indigo-600 transition-colors" href="#culture">Văn hoá</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                    Nghiêm túc
                    <div className="w-8 h-4 bg-amber-400 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
                    Tấu hài
                </div>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#apply">
                    Ứng tuyển
                </a>
</div>
</div>
</header>

<main className="flex-grow">
<section className="relative pt-24 pb-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    We're hiring! Tìm kiếm đồng bọn
                </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Làm sếp thì khó, làm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">đồng bọn</span> thì dễ! 🐒
                </h1>
<p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    TIIIITAPE đang tìm kiếm những bộ óc sáng tạo, hơi "điên" một chút để cùng quậy tung thị trường. Ở đây không có nhân viên, chỉ có anh em cùng chung chí hướng.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm" href="#apply">
                        Nhập hội ngay
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm" href="#culture">
                        Xem tụi mình có gì vui
                    </a>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="bg-slate-900 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-xl">

<div className="absolute -right-10 -top-10 text-slate-800 opacity-20">
<iconify-icon className="text-9xl" icon="solar:asterisk-circle-linear"></iconify-icon>
</div>
<div className="absolute -left-10 -bottom-10 text-slate-800 opacity-20">
<iconify-icon className="text-9xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 relative z-10">
                    "Làm hết sức, chơi hết hồn"
                </h2>
<p className="text-slate-400 text-sm sm:text-base font-medium uppercase tracking-widest relative z-10">
                    — Slogan bất diệt của TwinApe
                </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-24" id="product">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Tụi mình đang xây cái quái gì?</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto">Không làm những thứ nhàm chán. Chúng mình tạo ra những sản phẩm khiến người dùng toàn cầu phải thốt lên "Wow, ảo thật đấy!".</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:planet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Thị trường Global</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Ao làng là chưa đủ, TIIIITAPE nhắm tới đại dương xanh. Sản phẩm của tụi mình phục vụ hàng triệu người dùng trên toàn thế giới, tha hồ mà "flex" với bạn bè nhé.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Sản phẩm Sáng tạo</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                        Từ những ý tưởng điên rồ nhất trên bàn nhậu đến những dòng code tinh tế. Mọi ý kiến đều được lắng nghe, miễn là nó thú vị và mang lại giá trị thực sự.
                    </p>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-24" id="culture">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 sticky top-24">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Văn hoá "khum" giống ai</h2>
<p className="text-base text-slate-600 mb-6">
                            Ở TwinApe, không khí làm việc luôn rộn ràng tiếng cười. Chúng ta là đồng nghiệp, là anh em, và đôi khi là những "danh hài" nghiệp dư.
                        </p>
<a className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:text-indigo-700" href="#apply">
                            Trải nghiệm thực tế ngay <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mb-4" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-semibold text-slate-900 mb-2">Meme-driven Development</h4>
<p className="text-xs text-slate-600">Code có thể bug, nhưng meme trên Slack thì không bao giờ được nhạt. Động lực làm việc đến từ những nụ cười.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mb-4" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-semibold text-slate-900 mb-2">Giải trí tẹt ga</h4>
<p className="text-xs text-slate-600">Bi lắc, PS5 hay boardgame? Cứ mệt là đứng lên chơi một ván rồi vào chiến tiếp, không ai cấm.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mb-4" icon="solar:sleeping-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-semibold text-slate-900 mb-2">Giờ giấc linh hoạt</h4>
<p className="text-xs text-slate-600">Ngủ nướng một chút xíu buổi sáng cũng không sao, miễn là bạn giữ lời hứa với deadline của chính mình.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-xl text-slate-400 mb-4" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-semibold text-slate-900 mb-2">Nói không với Drama</h4>
<p className="text-xs text-slate-600">Môi trường trong suốt, ý kiến thẳng thắn. Có gì nói nấy, xong việc anh em lại khoác vai đi nhậu.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="apply">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 md:p-16 text-center border border-indigo-100 shadow-sm">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Sẵn sàng thành "Khỉ Đôi" chưa?</h2>
<p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
                        Đừng ngần ngại, cứ gửi CV hoặc portfolio của bạn cho tụi mình. Dù bạn là Dev, Design, hay Marketing, tụi mình luôn có chỗ cho những người thú vị.
                    </p>
<form className="max-w-md mx-auto flex flex-col gap-3">
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" placeholder="Email của bạn..." type="email"/>
<button className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Gửi cho sếp lớn
                        </button>
<p className="text-xs text-slate-500 mt-2">Phản hồi siêu tốc trong vòng 24h (nếu sếp không đi vắng).</p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white py-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-lg font-semibold tracking-tighter text-slate-900">
                TIIIITAPE
            </div>
<p className="text-xs text-slate-500 font-medium">
                © 2023 TwinApe Team. Cười nhiều sống lâu.
            </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:earth-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
