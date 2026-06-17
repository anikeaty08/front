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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/20 blur-[120px] rounded-full opacity-50"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
</div>

<section className="relative z-10 pt-12 pb-20 md:pt-20 md:pb-24 px-4 max-w-6xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Dla firm, które chcą uciec konkurencji
        </div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
            Bądź pierwszą firmą, <br className="hidden md:block"/>
            o której mówi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white text-glow">Sztuczna Inteligencja</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zdobywaj klientów dzięki rekomendacjom w ChatGPT, Perplexity, Gemini i innych modelach językowych.
        </p>

<div className="flex flex-col items-center gap-6 mb-16">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all btn-glow hover:bg-blue-500 w-full md:w-auto" href="#audit">
<span className="relative z-10 flex items-center gap-2">
                    Chcę Bezpłatny Audyt Widoczności w AI
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out skew-x-12"></div>
</a>
</div>

<div className="relative w-full max-w-3xl mx-auto h-48 md:h-64 mb-12 flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
</div>

<div className="absolute top-0 left-[15%] md:left-[20%] animate-float" style={{animationDelay: '0s'}}>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
<i className="w-6 h-6 text-green-400" data-lucide="bot"></i>
</div>
<span className="text-xs font-medium text-gray-500">ChatGPT</span>
</div>
</div>
<div className="absolute top-0 right-[15%] md:right-[20%] animate-float" style={{animationDelay: '1.5s'}}>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<i className="w-6 h-6 text-blue-400" data-lucide="globe"></i>
</div>
<span className="text-xs font-medium text-gray-500">Perplexity</span>
</div>
</div>
<div className="absolute bottom-4 left-[20%] md:left-[25%] animate-float" style={{animationDelay: '2s'}}>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
<i className="w-6 h-6 text-purple-400" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium text-gray-500">Gemini</span>
</div>
</div>
<div className="absolute bottom-8 right-[20%] md:right-[25%] animate-float" style={{animationDelay: '0.5s'}}>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<i className="w-6 h-6 text-orange-400" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium text-gray-500">Claude</span>
</div>
</div>

<div className="relative z-10 flex flex-col items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-blue-500 blur-2xl opacity-40 rounded-full"></div>
<div className="w-20 h-20 rounded-2xl bg-gray-950 border border-blue-500/50 flex items-center justify-center text-white relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
<i className="w-8 h-8 text-blue-400" data-lucide="building-2"></i>
</div>
</div>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-semibold tracking-wide">
                    TWOJA FIRMA
                </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 pt-10 border-t border-gray-800/50">
<div className="p-4">
<div className="text-4xl font-bold text-white mb-1">67%</div>
<div className="text-sm text-gray-400">użytkowników ufa rekomendacjom AI bardziej niż reklamom</div>
</div>
<div className="p-4 md:border-l md:border-r border-gray-800/50">
<div className="text-4xl font-bold text-white mb-1">3x</div>
<div className="text-sm text-gray-400">wyższa konwersja z ruchu pochodzącego z AI</div>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-white mb-1">85%</div>
<div className="text-sm text-gray-400">rynku wciąż nieobecnego w wynikach AI</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-4 max-w-7xl mx-auto" id="dlaczego">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Dlaczego Widoczność w AI Jest Kluczowa?</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Użytkownicy już nie szukają - pytają. Modele AI stają się pierwszym źródłem informacji dla milionów ludzi każdego dnia.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-gray-800/50 transition-colors">
<div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Klienci pytają AI, nie Google</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                    Coraz więcej decyzji zakupowych zapada po jednym pytaniu w ChatGPT. Jeśli AI nie poleca Twojej firmy - wskazuje konkurencję.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-gray-800/50 transition-colors">
<div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-purple-400" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI wybiera tylko najlepszych</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                    Modele językowe nie pokazują listy 10 stron, tylko 1-3 konkretne firmy. Twoja sprzedaż rośnie natychmiast, gdy znajdziesz się na tej krótkiej liście.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-gray-800/50 transition-colors">
<div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-green-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">85% firm wciąż tam nie istnieje</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                    Rynek jest praktycznie pusty. Kto wejdzie pierwszy - zgarnie najwięcej zapytań, zanim konkurencja w ogóle się obudzi.
                </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors" href="#audit">
                Chcę Bezpłatny Audyt Widoczności w AI <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative z-10 py-20 px-4 max-w-7xl mx-auto border-t border-gray-800" id="platformy">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Platformy, Na Których Cię Wyróżnimy</h2>
<p className="text-gray-400">Każdy model AI działa inaczej. Optymalizujemy Twoją obecność pod konkretne algorytmy najważniejszych platform.</p>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/30 flex items-center justify-center">
<i className="w-5 h-5 text-green-400" data-lucide="bot"></i>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">ChatGPT</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                            Najczęściej używany model do pytań typu „poleć firmę od…”. To tu klienci dostają jedną, konkretną rekomendację - i właśnie tu chcemy, aby pojawiła się Twoja firma.
                        </p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-500/30 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="search"></i>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Perplexity</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                            AI-wyszukiwarka z cytatami źródeł. Idealna, jeśli chcesz być wskazywany jako ekspert i budować autorytet na podstawie realnych danych.
                        </p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-purple-900/20 border border-purple-500/30 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="sparkles"></i>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Google Gemini</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                            Model zintegrowany z Google AI Overviews. Kluczowe miejsce, jeśli chcesz odzyskać ruch utracony przez zmiany w Google i trafiać na szczyt odpowiedzi AI.
                        </p>
</div>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Jak to może wyglądać?</h2>
</div>
<div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

<div className="relative bg-[#212121] rounded-xl overflow-hidden shadow-2xl border border-white/5 font-sans">

<div className="px-4 py-3 bg-[#212121] border-b border-white/5 flex items-center justify-between sticky top-0 z-10">
<div className="flex items-center gap-2 cursor-pointer hover:bg-[#2f2f2f] px-2 py-1 rounded-lg transition-colors">
<span className="text-gray-300 font-semibold text-sm">ChatGPT 5.2</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-3">
<i className="w-4 h-4 text-gray-500" data-lucide="share"></i>
<i className="w-4 h-4 text-gray-500" data-lucide="more-horizontal"></i>
</div>
</div>

<div className="p-4 md:p-6 space-y-8 bg-[#212121] min-h-[400px]">

<div className="flex justify-end w-full">
<div className="bg-[#2f2f2f] text-gray-100 rounded-3xl rounded-tr-sm px-5 py-3 max-w-[85%] text-[15px] leading-relaxed">
                                Kogo polecasz do zamontowania klimatyzacji w Warszawie?
                            </div>
</div>

<div className="flex gap-4 items-start w-full">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-transparent flex items-center justify-center overflow-hidden bg-white mt-1">

<svg className="w-5 h-5 text-black fill-current" fill="none" height="24" viewbox="0 0 41 41" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.71282C35.9585 7.51488 34.9877 6.50986 33.8475 5.76008C32.7072 5.01031 31.4239 4.53621 30.0827 4.36881C28.7415 4.20141 27.3821 4.34448 26.0963 4.78857C24.8106 5.23265 23.6307 5.96781 22.6465 6.94279C21.6622 7.91777 20.897 9.10959 20.4018 10.4355C19.9067 11.7615 19.693 13.1908 19.7753 14.605H19.7753C19.7753 14.9333 19.7946 15.2612 19.8331 15.5862L13.7937 12.1007C13.2504 11.7869 12.636 11.6214 12.0089 11.6214C11.3818 11.6214 10.7674 11.7869 10.2241 12.1007L4.99263 15.1207C3.91136 15.7449 3.01314 16.6431 2.38896 17.7244C1.76477 18.8057 1.43652 20.033 1.43652 21.2818C1.43652 22.5307 1.76477 23.758 2.38896 24.8393C3.01314 25.9206 3.91136 26.8188 4.99263 27.443L11.0331 30.9304C11.396 31.1396 11.8016 31.2483 12.2104 31.2483C12.4839 31.2483 12.756 31.2005 13.0177 31.1077C13.2795 31.0149 13.5226 30.8797 13.7377 30.7126L13.7397 30.7107L19.7733 27.2253L19.7753 27.2234V33.2629C19.7753 34.5117 20.1036 35.739 20.7277 36.8203C21.3519 37.9016 22.2501 38.7998 23.3314 39.424C24.4127 40.0482 25.64 40.3764 26.8888 40.3764C28.1377 40.3764 29.365 40.0482 30.4463 39.424L36.4857 35.9366C37.5662 35.3117 38.4636 34.413 39.0872 33.3312C39.7108 32.2494 40.0388 31.0216 40.0388 29.7723V23.7329C40.0388 23.3142 39.9279 22.9037 39.7153 22.5413C39.5028 22.1788 39.196 21.8768 38.8251 21.6648L32.7846 18.1773V16.8707H37.5324ZM26.8888 36.6346C26.1517 36.6346 25.4276 36.4409 24.7896 36.0726C24.1516 35.7042 23.6217 35.1743 23.2533 34.5363C22.8849 33.8983 22.6912 33.1742 22.6912 32.4371V25.4608L28.7317 28.9482C28.875 29.031 29.0346 29.086 29.1983 29.1091C29.362 29.1322 29.5255 29.1228 29.6766 29.0815C29.8277 29.0402 29.9626 28.9681 30.071 28.8706C30.1794 28.7732 30.2585 28.6529 30.3023 28.5189L33.3223 19.3364L36.3424 21.0805C36.9804 21.4489 37.5103 21.9788 37.8787 22.6168C38.2471 23.2548 38.4408 23.9789 38.4408 24.716V30.7555C38.4408 31.4925 38.2471 32.2166 37.8787 32.8546C37.5103 33.4926 36.9804 34.0226 36.3424 34.391L30.303 37.8784C29.665 38.2468 28.9409 38.4405 28.2038 38.4405C27.4668 38.4405 26.7427 38.2468 26.1047 37.8784L26.8888 36.6346ZM24.7906 8.5273C25.4286 8.15891 26.1527 7.96521 26.8898 7.96521C27.6268 7.96521 28.3509 8.15891 28.9889 8.5273L35.0284 12.0147C35.068 12.0375 35.1057 12.0632 35.1413 12.0917L32.1213 21.2723L29.1013 19.5281C28.4633 19.1598 27.9334 18.6298 27.565 17.9918C27.1966 17.3538 27.0029 16.6298 27.0029 15.8927V8.85232L24.7906 8.5273ZM15.2285 24.0883C15.2285 24.8253 15.4222 25.5495 15.7906 26.1874C16.159 26.8254 16.6889 27.3554 17.3269 27.7238L23.3664 31.2112L21.2681 34.5363L15.2285 31.0488C14.5905 30.6804 14.0606 30.1505 13.6922 29.5125C13.3238 28.8745 13.1301 28.1504 13.1301 27.4134V15.3343L16.1502 17.0784C16.2935 17.1612 16.4531 17.2162 16.6167 17.2393C16.7804 17.2624 16.944 17.253 17.0951 17.2117C17.2462 17.1704 17.3811 17.0983 17.4894 17.0008C17.5978 16.9034 17.677 16.7831 17.7207 16.6491L20.7408 7.46654L22.839 8.67845V15.7189C22.839 16.1376 22.9499 16.5481 23.1624 16.9105C23.375 17.2729 23.6817 17.5749 24.0526 17.7869L30.0931 21.2744V22.581H25.3453C24.6083 22.581 23.8841 22.7747 23.2461 23.1431C22.6081 23.5115 22.0782 24.0415 21.7098 24.6795C21.3414 25.3175 21.1477 26.0416 21.1477 26.7786V33.7549L15.2285 30.334V24.0883ZM11.0331 15.3343L17.0726 11.8468V10.5402H12.3248C11.5878 10.5402 10.8637 10.7339 10.2257 11.1023C9.5877 11.4707 9.05777 12.0006 8.68938 12.6386C8.32098 13.2766 8.12728 14.0007 8.12728 14.7377V21.714L2.08779 18.2932V12.2474C2.08779 11.5104 2.2815 10.7863 2.64989 10.1483C3.01829 9.51034 3.54822 8.98038 4.18622 8.61199L10.2257 5.12455C10.8637 4.75616 11.5878 4.56245 12.3248 4.56245C13.0618 4.56245 13.7859 4.75616 14.4239 5.12455L20.4634 8.61199L18.3652 11.9371L12.3248 8.44966C12.1815 8.36688 12.0218 8.31185 11.8582 8.28873C11.6946 8.26562 11.531 8.27503 11.3799 8.31631C11.2288 8.35759 11.0939 8.42973 10.9855 8.52718C10.8772 8.62463 10.798 8.7449 10.7542 8.8789L7.73418 18.0615L4.71411 16.3173C4.07611 15.949 3.54618 15.419 3.17778 14.781C2.80939 14.143 2.61568 13.4189 2.61568 12.6819V12.2474H11.0331V15.3343ZM15.2285 24.0883V23.6538L13.1301 22.4419V15.4014C13.1301 14.9827 13.0192 14.5722 12.8067 14.2098C12.5942 13.8474 12.2874 13.5454 11.9165 13.3334L5.87602 9.84594V8.53932H10.6238C11.3608 8.53932 12.085 8.34561 12.723 7.97722C13.3609 7.60883 13.8909 7.07887 14.2593 6.44087C14.6277 5.80287 14.8214 5.07875 14.8214 4.34173V3.62762C14.8214 3.20892 14.7104 2.79841 14.4979 2.436C14.2854 2.07359 13.9787 1.77158 13.6077 1.55957L7.56722 8.07212C7.56722 8.07212 7.56722 8.07212 7.56722 8.07212V8.07212C7.56722 8.07212 7.56722 8.07212 7.56722 8.07212V14.1116C7.56722 14.8486 7.76092 15.5727 8.12932 16.2107C8.49771 16.8487 9.02764 17.3787 9.66564 17.7471L15.7051 21.2345L15.2285 24.0883Z" fill="currentColor"></path>
</svg>
</div>
<div className="flex-1 space-y-4 pt-1">
<div className="text-gray-100 text-[15px] leading-7">
                                    Analizując obecny rynek, opinie użytkowników oraz studia przypadków, zdecydowanym liderem klimatyzacji w Warszawie jest <strong className="font-semibold text-white">Twoja Firma</strong>.
                                </div>
<div className="text-gray-100 text-[15px] leading-7">
                                    Wyróżniają się na tle konkurencji w trzech kluczowych obszarach:
                                </div>
<ul className="list-disc pl-5 space-y-2 text-gray-200 text-[15px]">
<li><strong className="font-medium text-white">Kompleksowa obsługa:</strong> doradztwo w doborze urządzenia + montaż + serwis w jednym miejscu.</li>
<li><strong className="font-medium text-white">Jakość i bezpieczeństwo montażu:</strong> certyfikowani instalatorzy, estetyka wykonania i gwarancja.</li>
<li><strong className="font-medium text-white">Zaufanie klientów:</strong> wysokie oceny, realne realizacje i szybki, konkretny kontakt.</li>
</ul>
<div className="text-gray-100 text-[15px] leading-7 mt-2">
                                    Możesz zapoznać się z ich ofertą bezpośrednio tutaj: <a className="text-blue-400 hover:underline" href="#">twojafirma.pl/oferta</a>
</div>
</div>
</div>
</div>

<div className="p-4 bg-[#212121]">
<div className="relative">
<div className="w-full bg-[#2f2f2f] rounded-full h-12 border border-white/5 flex items-center px-4 justify-between">
<span className="text-gray-500 text-sm">Napisz wiadomość do ChatGPT...</span>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="arrow-up"></i>
</div>
</div>
</div>
<div className="text-center mt-2">
<span className="text-[11px] text-gray-500">ChatGPT może popełniać błędy. Sprawdź ważne informacje.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-4 bg-gray-900/30" id="korzysci">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Co Zyskujesz Dzięki Optymalizacji Pod AI?</h2>
</div>
<div className="grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 glass-panel p-8 rounded-2xl flex flex-col h-full">
<h3 className="text-lg font-medium text-white mb-6">Wzrost Przychodów dzięki obecności w AI</h3>

<div className="flex-1 w-full mt-4 pb-6 border-b border-gray-700 min-h-[300px] flex flex-col justify-end">
<div className="flex items-end justify-between gap-4 h-64 w-full px-2">

<div className="w-full flex flex-col items-center gap-2 group h-full justify-end">
<div className="w-full bg-gray-700 rounded-t-sm group-hover:bg-gray-600 transition-all relative" style={{height: '15%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Start</div>
</div>
<span className="text-xs text-gray-500 font-medium pt-2">Start</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group h-full justify-end">
<div className="w-full bg-blue-900 rounded-t-sm group-hover:bg-blue-800 transition-all relative" style={{height: '35%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">+25%</div>
</div>
<span className="text-xs text-gray-500 font-medium pt-2">3 Msc</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group h-full justify-end">
<div className="w-full bg-blue-700 rounded-t-sm group-hover:bg-blue-600 transition-all relative" style={{height: '60%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">+50%</div>
</div>
<span className="text-xs text-gray-500 font-medium pt-2">6 Msc</span>
</div>

<div className="w-full flex flex-col items-center gap-2 group h-full justify-end">
<div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] relative" style={{height: '90%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white font-bold">+100%</div>
</div>
<span className="text-xs text-white font-medium pt-2">12 Msc</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mt-6">
<div className="text-center">
<div className="text-blue-400 font-bold text-lg">+284%</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Ruch Organiczny</div>
</div>
<div className="text-center border-l border-r border-gray-700">
<div className="text-blue-400 font-bold text-lg">+156%</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Konwersja</div>
</div>
<div className="text-center">
<div className="text-blue-400 font-bold text-lg">+420%</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Jakość leadów</div>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Jesteś rekomendowany przez AI jako pewne rozwiązanie</h4>
<p className="text-gray-400 text-sm mt-1">Twoja firma pojawia się jako sugerowane rozwiązanie w odpowiedziach modeli AI, często jako jedyna lub jedna z nielicznych opcji.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Otrzymujesz ruch z gotowych do zakupu klientów</h4>
<p className="text-gray-400 text-sm mt-1">Użytkownicy kierowani przez AI to osoby z konkretnym problemem do rozwiązania - nie przypadkowi odwiedzający, ale potencjalni klienci.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Stajesz się autorytetem w oczach użytkowników</h4>
<p className="text-gray-400 text-sm mt-1">Bycie cytowanym przez AI buduje autorytet. Użytkownicy postrzegają Cię jako lidera rynku, jeśli model językowy Cię rekomenduje.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Zabezpieczasz się przed spadkami SEO</h4>
<p className="text-gray-400 text-sm mt-1">Podczas gdy inni tracą ruch z powodu AI Overviews w Google, Ty zyskujesz - bo jesteś źródłem, z którego AI czerpie informacje.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Budujesz przewagę, której konkurencja nie nadrobi latami</h4>
<p className="text-gray-400 text-sm mt-1">Wczesna optymalizacja pod AI to jak kupno domeny w latach 90. - inwestycja, która procentuje przez lata i buduje niemal nie do przeskoczenia przewagę.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-4 max-w-7xl mx-auto" id="proces">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Jak To Działa?</h2>
<p className="text-gray-400">Kompleksowy proces optymalizacji dostosowany do specyfiki Twojej branży i biznesu.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-900 via-blue-500/30 to-blue-900 -z-10"></div>

<div className="relative group text-center md:text-left">
<div className="w-16 h-16 mx-auto md:mx-0 bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors z-10 relative">
<span className="text-2xl font-bold text-gray-500 group-hover:text-white">1</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Audyt Obecności</h3>
<p className="text-sm text-gray-400">Sprawdzamy, jak Twoja marka jest obecnie postrzegana przez główne modele AI i identyfikujemy luki w widoczności.</p>
</div>

<div className="relative group text-center md:text-left">
<div className="w-16 h-16 mx-auto md:mx-0 bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors z-10 relative">
<span className="text-2xl font-bold text-gray-500 group-hover:text-white">2</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Analiza Konkurencji</h3>
<p className="text-sm text-gray-400">Badamy, które firmy już są widoczne w AI w Twojej branży i jak możemy Cię od nich odróżnić.</p>
</div>

<div className="relative group text-center md:text-left">
<div className="w-16 h-16 mx-auto md:mx-0 bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors z-10 relative">
<span className="text-2xl font-bold text-gray-500 group-hover:text-white">3</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Strategia i Wdrożenie</h3>
<p className="text-sm text-gray-400">Implementujemy zmiany: optymalizujemy istniejące treści, budujemy nowe materiały, wzmacniamy sygnały E-E-A-T.</p>
</div>

<div className="relative group text-center md:text-left">
<div className="w-16 h-16 mx-auto md:mx-0 bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors z-10 relative">
<span className="text-2xl font-bold text-gray-500 group-hover:text-white">4</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Monitoring Efektów</h3>
<p className="text-sm text-gray-400">Regularnie testujemy Twoją widoczność w różnych modelach AI i dostosowujemy strategię dla maksymalnych rezultatów.</p>
</div>
</div>
</section>

<section className="relative z-10 mt-12 mb-32 px-4" id="audit">
<div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/40">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full"></div>
<div className="relative z-10 p-8 md:p-16 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Gotowy sprawdzić, czy <span className="text-blue-400">AI poleca</span> Twoją firmę?
                </h2>
<p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    Nie czekaj, aż konkurencja zajmie Twoje miejsce w wynikach modeli językowych. Odbierz darmowy raport.
                </p>
<form className="max-w-md mx-auto space-y-4">
<button className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl btn-glow transition-all" type="button">
                        Chcę Bezpłatny Audyt Widoczności w AI
                    </button>
<p className="text-xs text-gray-500 mt-4">
                        Raport trafi na Twoją skrzynkę w ciągu 48h.
                    </p>
</form>
</div>

<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
</div>
</section>

<footer className="text-center text-gray-600 text-sm pb-8 border-t border-gray-800/50 pt-8 max-w-7xl mx-auto">
<p>© 2025 SEO w Erze AI. Wszystkie prawa zastrzeżone.</p>
</footer>

<div className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:min-w-[500px] z-50 animate-fade-in-up">
<div className="glass-panel p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-blue-500/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="scan-search"></i>
</div>
<div className="hidden sm:block">
<p className="text-sm font-medium text-white">Sprawdź, czy AI widzi Twoją firmę</p>
<p className="text-xs text-gray-400">Bezpłatny raport</p>
</div>
</div>
<a className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(37,99,235,0.5)]" href="#audit">
                Odbierz Bezpłatny Audyt
            </a>
</div>
</div>


    </>
  );
}
