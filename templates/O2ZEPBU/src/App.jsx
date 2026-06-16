import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 via-zinc-900/80 to-blue-900/60 -z-10"></div>
<div className="flex items-center gap-4 mb-6">
<div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-full p-3 shadow-lg">
<svg className="w-10 h-10" fill="none" stroke="white" viewbox="0 0 44 44">
<circle className="opacity-50" cx="22" cy="22" r="20" strokeWidth="3"></circle>
<path d="M16 32V12M22 32V16M28 32V20" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-2xl font-bold tracking-tight">OnStage</span>
</div>
<h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
      Онлайн-платформа<br/>для артистов, клубов и букинг-агентов
    </h1>
<p className="max-w-xl text-center text-zinc-300 mb-8 text-lg">Создай свой музыкальный путь, управляй выступлениями, находи новые возможности и объединяйся с единомышленниками.</p>
<a className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg" href="#register">Попробовать бесплатно</a>
</section>

<section className="py-16 px-4 max-w-5xl mx-auto">
<h2 className="text-2xl font-bold mb-10 text-center">Кому подходит OnStage?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="group bg-zinc-900/80 rounded-xl p-6 flex flex-col items-center border border-zinc-800 hover:border-purple-500 transition-colors">
<svg className="w-9 h-9 mb-3 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 32 32">
<circle cx="16" cy="13" r="7" strokeWidth="2"></circle>
<rect height="6" rx="3" strokeWidth="2" width="18" x="7" y="22"></rect>
</svg>
<span className="font-semibold mb-1">Артистам</span>
<span className="text-sm text-zinc-400 text-center">Профили, букинг, райдеры, промо</span>
</div>
<div className="group bg-zinc-900/80 rounded-xl p-6 flex flex-col items-center border border-zinc-800 hover:border-blue-500 transition-colors">
<svg className="w-9 h-9 mb-3 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 32 32">
<rect height="16" rx="4" strokeWidth="2" width="24" x="4" y="8"></rect>
<rect fill="currentColor" height="4" rx="2" width="4" x="14" y="20"></rect>
</svg>
<span className="font-semibold mb-1">Клубам</span>
<span className="text-sm text-zinc-400 text-center">Витрина, афиша, управление событиями</span>
</div>
<div className="group bg-zinc-900/80 rounded-xl p-6 flex flex-col items-center border border-zinc-800 hover:border-cyan-400 transition-colors">
<svg className="w-9 h-9 mb-3 text-cyan-400" fill="none" stroke="currentColor" viewbox="0 0 32 32">
<path d="M6 26V6h20v20" strokeWidth="2"></path>
<path d="M16 13v6M16 19l-3-3m3 3l3-3" strokeWidth="2"></path>
</svg>
<span className="font-semibold mb-1">Агентам</span>
<span className="text-sm text-zinc-400 text-center">Бронирование, связи, CRM</span>
</div>
<div className="group bg-zinc-900/80 rounded-xl p-6 flex flex-col items-center border border-zinc-800 hover:border-pink-400 transition-colors">
<svg className="w-9 h-9 mb-3 text-pink-400" fill="none" stroke="currentColor" viewbox="0 0 32 32">
<circle cx="16" cy="14" r="7" strokeWidth="2"></circle>
<path d="M8 26c0-4 4-6 8-6s8 2 8 6" strokeWidth="2"></path>
</svg>
<span className="font-semibold mb-1">Пользователям</span>
<span className="text-sm text-zinc-400 text-center">Открывай новых артистов, мероприятия</span>
</div>
</div>
</section>

<section className="py-16 px-4 max-w-6xl mx-auto">
<h2 className="text-2xl font-bold mb-10 text-center">Возможности платформы</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
</div></section>
    </>
  );
}
