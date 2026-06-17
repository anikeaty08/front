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
        
        // Add smooth hover animations
        document.querySelectorAll('.group').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-1px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
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
      
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]" style={{animationFillMode: 'forwards'}}>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">カスタム項目設定</h1>
<p className="text-gray-600">各項目タイプにアイコンを設定して、視覚的に区別しやすくします</p>
</div>
<div className="grid gap-6">

<div className="bg-white rounded-lg border border-gray-200 p-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]" style={{animationFillMode: 'forwards'}}>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-700" data-lucide="type"></i>
                    基本入力項目
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="type"></i>
</div>
<span className="font-medium text-gray-900">テキスト</span>
</div>
<p className="text-sm text-gray-500">単行のテキスト入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="align-left"></i>
</div>
<span className="font-medium text-gray-900">テキストエリア</span>
</div>
<p className="text-sm text-gray-500">複数行のテキスト入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="hash"></i>
</div>
<span className="font-medium text-gray-900">整数</span>
</div>
<p className="text-sm text-gray-500">整数値の入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="calculator"></i>
</div>
<span className="font-medium text-gray-900">小数</span>
</div>
<p className="text-sm text-gray-500">小数値の入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="calendar-clock"></i>
</div>
<span className="font-medium text-gray-900">日時</span>
</div>
<p className="text-sm text-gray-500">日付と時刻の入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="calendar"></i>
</div>
<span className="font-medium text-gray-900">日付</span>
</div>
<p className="text-sm text-gray-500">日付の入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="link"></i>
</div>
<span className="font-medium text-gray-900">URL</span>
</div>
<p className="text-sm text-gray-500">URLの入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="languages"></i>
</div>
<span className="font-medium text-gray-900">カナ</span>
</div>
<p className="text-sm text-gray-500">カタカナの入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="flag"></i>
</div>
<span className="font-medium text-gray-900">フラグ</span>
</div>
<p className="text-sm text-gray-500">真偽値の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="mail"></i>
</div>
<span className="font-medium text-gray-900">メールアドレス</span>
</div>
<p className="text-sm text-gray-500">メールアドレスの入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="phone"></i>
</div>
<span className="font-medium text-gray-900">電話番号</span>
</div>
<p className="text-sm text-gray-500">電話番号の入力</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="map-pin"></i>
</div>
<span className="font-medium text-gray-900">郵便番号</span>
</div>
<p className="text-sm text-gray-500">郵便番号の入力</p>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]" style={{animationFillMode: 'forwards'}}>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-700" data-lucide="circle-dot"></i>
                    単一選択項目
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="circle-dot"></i>
</div>
<span className="font-medium text-gray-900">単一選択</span>
</div>
<p className="text-sm text-gray-500">一つの選択肢を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="building"></i>
</div>
<span className="font-medium text-gray-900">取引先</span>
</div>
<p className="text-sm text-gray-500">取引先の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="user-check"></i>
</div>
<span className="font-medium text-gray-900">取引先担当者</span>
</div>
<p className="text-sm text-gray-500">取引先担当者の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="user"></i>
</div>
<span className="font-medium text-gray-900">担当者</span>
</div>
<p className="text-sm text-gray-500">担当者の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="briefcase"></i>
</div>
<span className="font-medium text-gray-900">案件</span>
</div>
<p className="text-sm text-gray-500">案件の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="activity"></i>
</div>
<span className="font-medium text-gray-900">営業活動種類</span>
</div>
<p className="text-sm text-gray-500">営業活動種類の選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="trending-up"></i>
</div>
<span className="font-medium text-gray-900">営業活動ステータス</span>
</div>
<p className="text-sm text-gray-500">営業活動ステータスの選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="map"></i>
</div>
<span className="font-medium text-gray-900">都道府県</span>
</div>
<p className="text-sm text-gray-500">都道府県の選択</p>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]" style={{animationFillMode: 'forwards'}}>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-700" data-lucide="check-square"></i>
                    複数選択項目
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="check-square"></i>
</div>
<span className="font-medium text-gray-900">複数選択</span>
</div>
<p className="text-sm text-gray-500">複数の選択肢を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="users"></i>
</div>
<span className="font-medium text-gray-900">取引先担当者</span>
</div>
<p className="text-sm text-gray-500">複数の取引先担当者を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="user-plus"></i>
</div>
<span className="font-medium text-gray-900">担当者</span>
</div>
<p className="text-sm text-gray-500">複数の担当者を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="tags"></i>
</div>
<span className="font-medium text-gray-900">ラベル</span>
</div>
<p className="text-sm text-gray-500">複数のラベルを選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="package"></i>
</div>
<span className="font-medium text-gray-900">商品</span>
</div>
<p className="text-sm text-gray-500">複数の商品を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="network"></i>
</div>
<span className="font-medium text-gray-900">組織</span>
</div>
<p className="text-sm text-gray-500">複数の組織を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="building-2"></i>
</div>
<span className="font-medium text-gray-900">取引先</span>
</div>
<p className="text-sm text-gray-500">複数の取引先を選択</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="folder-open"></i>
</div>
<span className="font-medium text-gray-900">案件</span>
</div>
<p className="text-sm text-gray-500">複数の案件を選択</p>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.5s_forwards]" style={{animationFillMode: 'forwards'}}>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-700" data-lucide="function-square"></i>
                    数式項目
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="function-square"></i>
</div>
<span className="font-medium text-gray-900">数式（数値）</span>
</div>
<p className="text-sm text-gray-500">数値を返す数式</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="calendar-days"></i>
</div>
<span className="font-medium text-gray-900">数式（日付）</span>
</div>
<p className="text-sm text-gray-500">日付を返す数式</p>
</div>
<div className="group p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
<i className="w-4 h-4 text-gray-700" data-lucide="text-cursor-input"></i>
</div>
<span className="font-medium text-gray-900">数式（文字列）</span>
</div>
<p className="text-sm text-gray-500">文字列を返す数式</p>
</div>
</div>
</div>
</div>
</div>

<style>
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .group {
            transition: all 0.2s ease-out;
        }
    </style>

    </>
  );
}
