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
      
<div className="max-w-lg mx-auto min-h-screen">

<div className="bg-white border-b border-slate-100 px-6 py-8">
<div className="text-center">
<h1 className="text-2xl font-bold text-slate-800 mb-2">予約確定アンケート</h1>
<p className="text-slate-500 text-sm">ご予約ありがとうございます</p>
</div>
</div>
<div className="px-6 py-8 space-y-8">
<form className="space-y-8">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50">
<div className="flex items-center mb-4">
<div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
<label className="text-slate-800 font-semibold">生年月日</label>
<span className="text-rose-500 ml-1">*</span>
</div>
<div className="grid grid-cols-3 gap-3">
<select className="w-full px-4 py-3 bg-slate-50 border-0 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200" required="">
<option value="">年</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
</select>
<select className="w-full px-4 py-3 bg-slate-50 border-0 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200" required="">
<option value="">月</option>
<option value="01">1月</option>
<option value="02">2月</option>
<option value="03">3月</option>
<option value="04">4月</option>
<option value="05">5月</option>
<option value="06">6月</option>
<option value="07">7月</option>
<option value="08">8月</option>
<option value="09">9月</option>
<option value="10">10月</option>
<option value="11">11月</option>
<option value="12">12月</option>
</select>
<select className="w-full px-4 py-3 bg-slate-50 border-0 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200" required="">
<option value="">日</option>
<option value="01">1日</option>
<option value="02">2日</option>
<option value="03">3日</option>
<option value="04">4日</option>
<option value="05">5日</option>
<option value="06">6日</option>
<option value="07">7日</option>
<option value="08">8日</option>
<option value="09">9日</option>
<option value="10">10日</option>
<option value="15">15日</option>
<option value="20">20日</option>
<option value="25">25日</option>
<option value="30">30日</option>
<option value="31">31日</option>
</select>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50">
<div className="flex items-center mb-5">
<div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
<label className="text-slate-800 font-semibold">ご職業</label>
<span className="text-rose-500 ml-1">*</span>
</div>
<div className="space-y-3">
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="会社員"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">会社員</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="自営業"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">自営業</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="会社役員・経営者"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">会社役員・経営者</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="専門職"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">専門職（医師、弁護士など）</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="公務員"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">公務員</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="学生"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">学生</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="主婦・主夫"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">主婦・主夫</span>
</label>
<label className="flex items-center p-4 bg-slate-50 hover:bg-blue-50 rounded-xl cursor-pointer transition-all duration-200 group">
<input className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0" name="occupation" required="" type="radio" value="その他"/>
<span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">その他</span>
</label>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50">
<div className="flex items-center mb-4">
<div className="w-2 h-6 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full mr-3"></div>
<label className="text-slate-800 font-semibold">お勤め先の業種</label>
<span className="text-slate-400 text-sm ml-2">(任意)</span>
</div>
<select className="w-full px-4 py-4 bg-slate-50 border-0 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200">
<option value="">選択してください</option>
<option value="製造業">製造業</option>
<option value="建設業">建設業</option>
<option value="情報通信業">情報通信業</option>
<option value="運輸業">運輸業</option>
<option value="卸売・小売業">卸売・小売業</option>
<option value="金融・保険業">金融・保険業</option>
<option value="不動産業">不動産業</option>
<option value="飲食・宿泊業">飲食・宿泊業</option>
<option value="医療・福祉">医療・福祉</option>
<option value="教育">教育</option>
<option value="サービス業">サービス業</option>
<option value="その他">その他</option>
</select>
</div>

<div className="pt-4">
<button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" type="submit">
                        送信する
                    </button>
</div>
</form>
</div>
</div>

    </>
  );
}
