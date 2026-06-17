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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00df81]/5 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-[#00df81]/3 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-[#00df81]/5 rounded-full blur-[120px]"></div>
</div>

<div className="w-full max-w-3xl mx-auto pt-8 px-4">
<div className="flex gap-2">
<div className="h-1.5 flex-1 bg-[#00df81] rounded-full shadow-[0_0_10px_rgba(0,223,129,0.5)]"></div>
<div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
<div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
<div className="h-1.5 flex-1 bg-white/10 rounded-full"></div>
</div>
</div>

<section className="max-w-4xl mx-auto px-4 pt-16 pb-24 text-center flex flex-col items-center">
<div className="inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 text-xs font-medium tracking-widest text-gray-400 uppercase backdrop-blur-sm">
            Wyjątkowy warsztat online
        </div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold tracking-tight mb-8">
            Jak tworzyć <span className="text-[#00df81]">wybitne grafiki i<br/> ekscytujące wideo</span> przy użyciu<br/> najnowszych dokonań sztucznej<br/> inteligencji
        </h1>
<p className="md:text-xl leading-relaxed text-lg text-gray-400 max-w-2xl mr-auto mb-12 ml-auto">
            Poznaj 30 nieznanych narzędzi, które praktycy wykorzystują w swojej pracy biznesowej. Zdobądź dochodowo kompetencje generowania wideo AI oraz grafik i spraw, że <strong className="text-gray-200 font-medium">Twoje social media eksplodują w nowych fanów, a firmy zaczną Ci płacić za obniżenie ich kosztów reklamowych.</strong>
</p>

<div className="w-full max-w-3xl aspect-video bg-[#0f1715] border border-white/5 rounded-2xl flex items-center justify-center mb-12 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-[#00df81]/30 transition-colors duration-500">
<div className="bg-gradient-to-tr from-[#00df81]/5 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-[#00df81]/10 transition-all duration-300">
<i className="w-8 h-8 text-white ml-1 stroke-[1.5]" data-lucide="play"></i>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="volume-2"></i>
<div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-[#00df81]"></div></div>
</div>
<div className="flex gap-4">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="settings"></i>
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="maximize"></i>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-8 w-full">
<button className="bg-[#00df81] hover:bg-[#00c974] text-black font-semibold py-4 px-10 rounded-full text-lg transition-all shadow-[0_0_30px_rgba(0,223,129,0.2)] hover:shadow-[0_0_40px_rgba(0,223,129,0.4)] hover:scale-[1.02]">
                Odbierz dostęp za darmo
            </button>
<div className="flex items-center justify-center gap-5 text-base text-gray-400 bg-white/5 border border-white/5 rounded-full px-6 py-3 backdrop-blur-sm">
<div className="flex -space-x-3">
<img alt="Uczestnik" className="w-8 h-8 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Uczestnik" className="w-8 h-8 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Uczestnik" className="w-8 h-8 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div className="text-left flex flex-col justify-center">
<div className="flex text-[#00df81] text-xs mb-0.5">
<i className="w-3.5 h-3.5 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current stroke-[1.5]" data-lucide="star"></i>
<span className="ml-2 text-white font-medium">5/5</span>
</div>
<div className="text-sm">Dołącz do <strong className="text-gray-200 font-medium">grona 10 000 uczestników</strong></div>
</div>
</div>

<div className="mt-4 border border-white/5 rounded-2xl p-6 bg-[#0f1715]/50 backdrop-blur-md w-full max-w-md relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00df81]/30 to-transparent"></div>
<div className="text-sm text-gray-500 mb-5 font-medium uppercase tracking-widest">Warsztaty startują za:</div>
<div className="flex justify-center gap-6">
<div className="flex flex-col items-center"><span className="text-3xl font-semibold tracking-tight text-white">00</span><span className="text-xs text-gray-600 mt-2 font-medium">DNI</span></div>
<div className="text-2xl font-light text-gray-700 mt-1">:</div>
<div className="flex flex-col items-center"><span className="text-3xl font-semibold tracking-tight text-white">00</span><span className="text-xs text-gray-600 mt-2 font-medium">GODZINY</span></div>
<div className="text-2xl font-light text-gray-700 mt-1">:</div>
<div className="flex flex-col items-center"><span className="text-3xl font-semibold tracking-tight text-white">00</span><span className="text-xs text-gray-600 mt-2 font-medium">MINUTY</span></div>
<div className="text-2xl font-light text-gray-700 mt-1">:</div>
<div className="flex flex-col items-center"><span className="text-3xl font-semibold tracking-tight text-[#00df81]">00</span><span className="text-xs text-[#00df81]/50 mt-2 font-medium">SEKUNDY</span></div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-24 border-t border-white/5">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

<div className="flex-1 bg-[#0a0f0d] border border-white/5 rounded-2xl p-10 text-center w-full relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<h3 className="text-2xl font-semibold text-gray-500 tracking-tight mb-5">BEFORE</h3>
<p className="leading-relaxed text-lg text-gray-400">Przestarzałe metody, wysokie koszty agencji marketingowych, brak zaangażowania odbiorców i powolne procesy tworzenia.</p>
</div>

<div className="flex flex-col items-center text-gray-600">
<div className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hidden md:flex">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
<div className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center md:hidden">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-down"></i>
</div>
<span className="mt-6 text-xs uppercase tracking-[0.2em] font-medium text-gray-500">Transformacja AI</span>
</div>

<div className="flex-1 bg-gradient-to-b from-[#0f1715] to-[#00df81]/5 border border-[#00df81]/20 rounded-2xl p-10 text-center w-full relative overflow-hidden shadow-[0_0_40px_rgba(0,223,129,0.03)] hover:shadow-[0_0_50px_rgba(0,223,129,0.08)] transition-all">
<div className="absolute top-0 left-0 w-full h-1 bg-[#00df81] shadow-[0_0_20px_rgba(0,223,129,1)]"></div>
<h3 className="text-2xl font-semibold mb-5 text-[#00df81] tracking-tight">AFTER</h3>
<p className="text-gray-300 text-lg leading-relaxed">Setki angażujących grafik dziennie, virale wideo budujące zasięgi i pełna niezależność twórcza przy zerowych kosztach produkcji.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-24 border-t border-white/5">
<h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 tracking-tight">Czego się dowiesz</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="flex gap-5 group cursor-default">
<div className="mt-1 bg-white/5 border border-white/10 group-hover:border-[#00df81]/30 group-hover:bg-[#00df81]/10 rounded-full p-2 h-fit transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#00df81] stroke-[2] transition-colors" data-lucide="check"></i>
</div>
<div className="">
<h4 className="text-xl font-medium mb-3 text-gray-200 tracking-tight">Sekretne narzędzia AI</h4>
<p className="text-gray-400 text-lg leading-relaxed">Poznasz zestaw darmowych i płatnych narzędzi, o których konkurencja nie ma pojęcia, a które automatyzują 90% pracy.</p>
</div>
</div>
<div className="flex gap-5 group cursor-default">
<div className="mt-1 bg-white/5 border border-white/10 group-hover:border-[#00df81]/30 group-hover:bg-[#00df81]/10 rounded-full p-2 h-fit transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#00df81] stroke-[2] transition-colors" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-3 text-gray-200 tracking-tight">Mistrzostwo Promptingu</h4>
<p className="text-gray-400 text-lg leading-relaxed">Nauczysz się pisać precyzyjne komendy, które generują dokładnie to, co masz w głowie, unikając godzin frustracji.</p>
</div>
</div>
<div className="flex gap-5 group cursor-default">
<div className="mt-1 bg-white/5 border border-white/10 group-hover:border-[#00df81]/30 group-hover:bg-[#00df81]/10 rounded-full p-2 h-fit transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#00df81] stroke-[2] transition-colors" data-lucide="check"></i>
</div>
<div className="">
<h4 className="text-xl font-medium mb-3 text-gray-200 tracking-tight">Automatyzacja Wideo Short</h4>
<p className="text-gray-400 text-lg leading-relaxed">Odkryjesz proces, jak z jednego dłuższego nagrania stworzyć dziesiątki rolek na TikTok i Reels w zaledwie kilka minut.</p>
</div>
</div>
<div className="flex gap-5 group cursor-default">
<div className="mt-1 bg-white/5 border border-white/10 group-hover:border-[#00df81]/30 group-hover:bg-[#00df81]/10 rounded-full p-2 h-fit transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-[#00df81] stroke-[2] transition-colors" data-lucide="check"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-3 text-gray-200 tracking-tight">Klonowanie i Avatary</h4>
<p className="text-gray-400 text-lg leading-relaxed">Pokażemy jak stworzyć cyfrowego bliźniaka i sklonować Twój głos, by tworzyć wideo bez konieczności stawania przed kamerą.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24 border-t border-white/5">
<div className="text-center mb-20">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Odkryj tajemnice</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Co dokładnie w środku?</h3>
</div>
<div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">

<div className="flex-1 space-y-12">
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-white/5 text-gray-400 group-hover:border-[#00df81]/50 group-hover:text-[#00df81] transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="pen-tool"></i>
</div>
<div className="">
<h4 className="text-xl font-medium text-gray-200 tracking-tight mb-3">Tworzenie fotorealistycznych grafik</h4>
<p className="text-gray-400 leading-relaxed text-lg">Nauczysz się generować materiały do social media i reklam. Poznasz proces projektowania wirtualnych modelek AI, tworzenia profesjonalnych sesji zdjęciowych bez aparatu oraz podkręcania jakości do 16k.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-white/5 text-gray-400 group-hover:border-[#00df81]/50 group-hover:text-[#00df81] transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="video"></i>
</div>
<div className="">
<h4 className="text-xl font-medium mb-3 text-gray-200 tracking-tight">Generowanie Video AI najwyższej jakości</h4>
<p className="leading-relaxed text-lg text-gray-400">Poznasz nasz proces budowania angażujących filmów, które świetnie konwertują. Pokażemy Ci jak tworzyć dynamiczne ujęcia z tekstu, wgrywać swoją twarz do innych materiałów i animować statyczne obrazy.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-white/5 text-gray-400 group-hover:border-[#00df81]/50 group-hover:text-[#00df81] transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="volume-2"></i>
</div>
<div className="">
<h4 className="text-xl font-medium text-gray-200 tracking-tight mb-3">Sound Design i efekty specjalne AI</h4>
<p className="text-gray-400 leading-relaxed text-lg">Nauczysz się tworzyć dedykowany podkład audio, komponować piosenki z tekstu oraz dodawać realistyczne efekty dźwiękowe (gwara miejska, szum wiatru) by nadać filmom kinowy charakter.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#00df81]/30 flex items-center justify-center bg-[#00df81]/5 text-[#00df81] shadow-[0_0_15px_rgba(0,223,129,0.1)]">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<div className="">
<h4 className="text-xl font-medium mb-3 text-[#00df81] tracking-tight">Monetyzacja i optymalizacja procesów</h4>
<p className="leading-relaxed text-lg text-gray-400">Poznasz dokładny proces, jak dzięki tym umiejętnościom zarabiać. Powiemy Ci jak wdrażać tę wiedzę w biznesie, by uzyskiwać tańsze leady, wyższą sprzedaż i zaoszczędzić dziesiątki godzin w miesiącu.</p>
</div>
</div>
</div>

<div className="w-full lg:w-[420px] flex-shrink-0">
<div className="bg-[#0f1715] border border-white/10 rounded-[2rem] p-2 flex flex-col items-center shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="bg-[#0a0f0d] border border-white/5 rounded-[1.75rem] p-8 w-full relative z-10">

<div className="w-full h-56 bg-[#1a2421] rounded-2xl mb-8 overflow-hidden relative group">
<img alt="Specjaliści" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00df81] animate-pulse"></div>
<span className="text-xs font-medium tracking-wider text-white uppercase">Na żywo</span>
</div>
</div>
<h4 className="leading-relaxed text-xl font-medium text-gray-100 tracking-tight text-center mb-8">Dołącz do elitarnego grona<br/>używających AI w pracy</h4>
<button className="w-full bg-[#00df81] hover:bg-[#00c974] text-black font-semibold py-4 px-6 rounded-full transition-all text-lg shadow-[0_0_20px_rgba(0,223,129,0.15)] hover:shadow-[0_0_30px_rgba(0,223,129,0.25)]">
                            Odbierz dostęp teraz
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-24 border-t border-white/5">
<div className="text-center mb-12">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">Bezpieczeństwo</h2>
</div>
<div className="md:p-20 overflow-hidden group hover:border-white/20 transition-colors duration-500 text-center bg-gradient-to-b from-[#0f1715] to-[#060a0a] border-white/10 border rounded-[2.5rem] pt-12 pr-12 pb-12 pl-12 relative">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00df81]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none group-hover:bg-[#00df81]/10 transition-colors duration-700"></div>
<div className="w-24 h-24 mx-auto bg-[#00df81]/10 border border-[#00df81]/20 rounded-2xl flex items-center justify-center mb-10 relative z-10 rotate-3 group-hover:-rotate-3 transition-transform duration-500">
<i className="w-12 h-12 text-[#00df81] stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight relative z-10 text-white">100% Gwarancja Satysfakcji</h3>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed relative z-10">
                Jesteśmy tak pewni wartości, którą dostarczamy, że bierzemy całe ryzyko na siebie. Jeśli po ukończeniu warsztatów i wdrożeniu wiedzy uznasz, że nie przyniosły one obiecanych rezultatów – zwrócimy Ci 100% zainwestowanej kwoty. Masz na to 30 dni.
            </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24 border-t border-white/5 overflow-hidden">
<div className="text-center mb-20">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Sukcesy kursantów</h2>
<h3 className="md:text-4xl text-3xl font-semibold tracking-tight">Opinie absolwentów</h3>
</div>
<div className="flex items-center justify-center gap-6 md:gap-10">

<button className="hidden lg:flex w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-gray-400 hover:text-white transition-all flex-shrink-0 hover:scale-105">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 w-full max-w-6xl">
<div className="hover:border-white/10 flex flex-col transition-colors bg-[#0f1715] border-white/5 border rounded-3xl pt-10 pr-10 pb-10 pl-10">
<div className="flex text-[#00df81] mb-6 gap-1">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-gray-300 mb-10 flex-1 leading-relaxed text-lg">"Zupełnie zmieniło to moje podejście do marketingu. Narzędzia AI pokazane na warsztatach oszczędzają mi kilkanaście godzin tygodniowo. Czas produkcji rolek skrócił się z 2 dni do 40 minut."</p>
<div className="flex items-center gap-5 pt-6 border-t border-white/5">
<img alt="Anna" className="w-12 h-12 object-cover rounded-full" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="font-medium text-white text-lg">Anna Kowalska</div>
<div className="text-sm text-gray-500">Dyrektor Marketingu</div>
</div>
</div>
</div>
<div className="bg-gradient-to-b from-[#0f1715] to-[#0a0f0d] border border-white/10 rounded-3xl p-10 flex flex-col relative transform lg:-translate-y-4 shadow-2xl">
<div className="absolute top-0 right-10 w-20 h-px bg-gradient-to-r from-transparent via-[#00df81] to-transparent"></div>
<div className="flex text-[#00df81] mb-6 gap-1">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-gray-200 mb-10 flex-1 leading-relaxed text-lg font-medium">"Byłem sceptyczny, ale ilość wiedzy powala. Konkretne prompty, jasne instrukcje. Teraz sam tworzę spoty wideo, za które wcześniej płaciłem agencjom grube tysiące. Zwrot z inwestycji w pierwszym miesiącu."</p>
<div className="flex items-center gap-5 pt-6 border-t border-white/10">
<img alt="Michał" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
<div>
<div className="font-medium text-white text-lg">Michał Nowak</div>
<div className="text-sm text-[#00df81]/70">Właściciel E-commerce</div>
</div>
</div>
</div>
<div className="bg-[#0f1715] border border-white/5 hover:border-white/10 rounded-3xl p-10 flex flex-col transition-colors hidden md:flex">
<div className="flex text-[#00df81] mb-6 gap-1">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
</div>
<p className="text-gray-300 mb-10 flex-1 leading-relaxed text-lg">"Jako freelancer, to szkolenie dało mi niesamowitą przewagę. Mogę teraz oferować zlecenia na generowanie grafik AI, o których moi klienci nawet nie śnili, w czasie ułamka tego co tradycyjnie."</p>
<div className="flex items-center gap-5 pt-6 border-t border-white/5">
<img alt="Piotr" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=13"/>
<div>
<div className="font-medium text-white text-lg">Piotr Wiśniewski</div>
<div className="text-sm text-gray-500">Freelancer Creator</div>
</div>
</div>
</div>
</div>

<button className="hidden lg:flex w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 items-center justify-center text-gray-400 hover:text-white transition-all flex-shrink-0 hover:scale-105">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>

<div className="flex justify-center gap-3 mt-12 lg:hidden">
<div className="w-2.5 h-2.5 rounded-full bg-[#00df81]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-24 border-t border-white/5">
<div className="text-center mb-16">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Potwierdzenie umiejętności</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Certyfikat ukończenia</h3>
<p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">Po zakończeniu i zaliczeniu zadań praktycznych otrzymasz imienny certyfikat, który znacząco podniesie Twoją wartość na rynku pracy.</p>
</div>
<div className="relative w-full aspect-auto md:aspect-[1.5] max-w-4xl mx-auto bg-[#0a0f0d] border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center group hover:border-white/20 transition-colors">

<div className="absolute inset-0 border-[12px] border-double border-white/5 m-6 rounded-2xl pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#00df81]/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>
<div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10">
<i className="w-10 h-10 text-[#00df81] stroke-[1.5]" data-lucide="award"></i>
</div>
<div className="text-xs font-medium uppercase tracking-[0.4em] text-gray-400 mb-4 relative z-10">Certyfikat Eksperta AI</div>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-10 border-b border-white/10 pb-6 w-4/5 md:w-3/5 mx-auto relative z-10">Imię i Nazwisko</div>
<p className="text-gray-400 max-w-lg text-lg leading-relaxed relative z-10 mb-12 md:mb-0">Za z wynikiem pozytywnym ukończenie zaawansowanego programu certyfikacyjnego z zakresu tworzenia grafik i wideo przy użyciu generatywnej sztucznej inteligencji.</p>
<div className="md:absolute bottom-16 right-16 text-center md:text-left relative z-10 mt-8 md:mt-0">
<div className="w-32 h-px bg-white/20 mb-3 mx-auto md:mx-0"></div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Podpis instruktora</div>
</div>
<div className="md:absolute bottom-16 left-16 text-center md:text-left relative z-10 mt-8 md:mt-0 hidden md:block">
<div className="w-32 h-px bg-white/20 mb-3"></div>
<div className="text-xs text-gray-500 uppercase tracking-widest">Data wystawienia</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-24 border-t border-white/5">
<div className="text-center mb-20">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Inwestycja w rozwój</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Wybierz pakiet dla siebie</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

<div className="bg-[#0a0f0d] border border-white/10 hover:border-white/20 rounded-[2.5rem] p-10 lg:p-12 flex flex-col transition-colors">
<h4 className="text-2xl font-semibold text-white mb-3 tracking-tight">Standard</h4>
<p className="text-gray-400 text-lg mb-8">Niezbędna wiedza do startu.</p>
<div className="mb-10 flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tight text-white">497</span>
<span className="text-xl text-gray-500 font-medium">zł</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-start gap-4 text-gray-300 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Pełny dostęp do 4h nagrań VOD</span>
</li>
<li className="flex items-start gap-4 text-gray-300 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Baza 30 narzędzi AI</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-lg">
<i className="w-6 h-6 flex-shrink-0 stroke-[2]" data-lucide="minus"></i>
<span>Aktualizacje materiałów</span>
</li>
<li className="flex items-start gap-4 text-gray-600 text-lg">
<i className="w-6 h-6 flex-shrink-0 stroke-[2]" data-lucide="minus"></i>
<span>Społeczność i wsparcie na Discord</span>
</li>
</ul>
<button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold py-4 px-6 rounded-full transition-all text-lg">
                    Wybieram Standard
                </button>
</div>

<div className="bg-gradient-to-b from-[#0f1715] to-[#00df81]/5 border border-[#00df81]/30 rounded-[2.5rem] p-10 lg:p-12 flex flex-col relative shadow-[0_0_50px_rgba(0,223,129,0.05)] transform md:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00df81] text-black text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(0,223,129,0.3)]">
                    Rekomendowany
                </div>
<h4 className="text-2xl font-semibold text-white mb-3 tracking-tight">Pro Masterclass</h4>
<p className="text-[#00df81] text-lg mb-8 font-medium">Wszystko dla pełnej dominacji.</p>
<div className="mb-10 flex flex-col">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tight text-white">997</span>
<span className="text-xl text-gray-400 font-medium">zł</span>
</div>
<span className="text-gray-500 line-through text-base mt-1">Zamiast 1497 zł</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-start gap-4 text-gray-200 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Pełny dostęp do 4h nagrań VOD</span>
</li>
<li className="flex items-start gap-4 text-gray-200 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Baza 30 narzędzi + Dożywotnie Aktualizacje</span>
</li>
<li className="flex items-start gap-4 text-gray-200 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Dostęp do elitarnej grupy Discord</span>
</li>
<li className="flex items-start gap-4 text-gray-200 text-lg">
<i className="w-6 h-6 text-[#00df81] flex-shrink-0 stroke-[2]" data-lucide="check"></i>
<span>Sesje Q&amp;A na żywo (raz w miesiącu)</span>
</li>
</ul>
<button className="w-full bg-[#00df81] hover:bg-[#00c974] text-black font-semibold py-4 px-6 rounded-full transition-all text-lg shadow-[0_0_20px_rgba(0,223,129,0.2)] hover:shadow-[0_0_30px_rgba(0,223,129,0.4)]">
                    Dołączam do PRO
                </button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24 border-t border-white/5">
<div className="flex flex-col md:flex-row gap-16 items-center">

<div className="w-full md:w-5/12 relative">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 relative z-10 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-[#060a0a] via-transparent to-transparent z-10 opacity-60"></div>
<img alt="Instruktor" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_2px,transparent_2px)] bg-[length:24px_24px] z-0 rounded-full"></div>
</div>

<div className="w-full md:w-7/12">
<h2 className="text-xs font-medium tracking-[0.2em] text-[#00df81] uppercase mb-4">Twój Instruktor</h2>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-white">Cześć, jestem Marek</h3>
<div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed">
<p>
                        Od ponad dekady pomagam markom komunikować się ze światem poprzez wideo i grafikę. Gdy tylko zadebiutowały pierwsze generatory AI, wiedziałem, że zasady gry właśnie się zmieniły.
                    </p>
<p>
                        Zamiast walczyć ze zmianą, spędziłem setki godzin testując, psując i optymalizując procesy generowania contentu. Zbudowałem systemy, które dziś pozwalają moim klientom ciąć koszty o 80%, zachowując kinową jakość.
                    </p>
<p>
                        Na tych warsztatach nie dostaniesz suchej teorii. Dzielę się wyłącznie wyciągiem z wiedzy z "linii frontu" – gotowymi schematami, które realnie działają i przynoszą zyski w biznesie tu i teraz.
                    </p>
</div>
<div className="mt-12 flex flex-wrap gap-10 border-t border-white/5 pt-10">
<div className="flex flex-col gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">10k+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Przeszkolonych</span>
</div>
<div className="w-px bg-white/10 hidden sm:block"></div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">250+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Wdrożeń w firmach</span>
</div>
<div className="w-px bg-white/10 hidden sm:block"></div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">5 lat</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Doświadczenia w AI</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 py-24 border-t border-white/5">
<div className="text-center mb-16">
<h2 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Masz pytania?</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Często zadawane pytania</h3>
</div>
<div className="space-y-4">

<div className="bg-[#0f1715] border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-white/15 hover:bg-white/5 transition-all group">
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-xl font-medium text-gray-200 tracking-tight">Czy muszę potrafić programować by korzystać z tych narzędzi?</h4>
<i className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors stroke-[1.5] flex-shrink-0" data-lucide="plus"></i>
</div>
</div>

<div className="bg-[#0a0f0d] border border-white/20 rounded-2xl p-6 md:p-8 cursor-pointer transition-all">
<div className="flex justify-between items-center gap-4 mb-4">
<h4 className="text-lg md:text-xl font-medium text-white tracking-tight">Jakiego sprzętu potrzebuję do tego kursu?</h4>
<i className="w-6 h-6 text-[#00df81] stroke-[1.5] flex-shrink-0" data-lucide="minus"></i>
</div>
<p className="text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-4">Większość narzędzi, które omawiamy, działa w chmurze (przez przeglądarkę). Oznacza to, że wystarczy Ci standardowy laptop z dostępem do internetu. Nie potrzebujesz potężnej karty graficznej ani drogiego komputera stacjonarnego.</p>
</div>

<div className="bg-[#0f1715] border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-white/15 hover:bg-white/5 transition-all group">
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-xl font-medium text-gray-200 tracking-tight">Czy te narzędzia AI są darmowe czy płatne?</h4>
<i className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors stroke-[1.5] flex-shrink-0" data-lucide="plus"></i>
</div>
</div>

<div className="bg-[#0f1715] border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer hover:border-white/15 hover:bg-white/5 transition-all group">
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-xl font-medium text-gray-200 tracking-tight">Czy dostanę fakturę VAT za zakup?</h4>
<i className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors stroke-[1.5] flex-shrink-0" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-24 border-t border-white/5 text-center flex flex-col items-center pb-32 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-[#00df81]/5 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10 leading-tight relative z-10">
            Czas ucieka! Dołącz do warsztatów<br/>
            i dowiedz się, <span className="text-[#00df81]">jak zarabiać więcej</span> dzięki<br/>
            AI i najnowszym technologiom
        </h2>
<button className="bg-[#00df81] hover:bg-[#00c974] text-black font-semibold py-4 px-10 rounded-full text-lg transition-all shadow-[0_0_30px_rgba(0,223,129,0.2)] hover:shadow-[0_0_40px_rgba(0,223,129,0.4)] hover:scale-[1.02] mb-10 relative z-10">
            Odbierz dostęp za darmo
        </button>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-base text-gray-400 mb-12 relative z-10">
<div className="flex -space-x-3">
<img alt="Uczestnik" className="w-10 h-10 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Uczestnik" className="w-10 h-10 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Uczestnik" className="w-10 h-10 rounded-full border-2 border-[#060a0a]" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div className="text-center sm:text-left">
<div className="flex justify-center sm:justify-start text-[#00df81] text-xs mb-1">
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<i className="w-4 h-4 fill-current stroke-[1.5]" data-lucide="star"></i>
<span className="ml-2 text-white font-medium text-sm">5/5</span>
</div>
<div className="text-sm">Dołącz do <strong className="text-white font-medium">grona 10 000 uczestników</strong> szkoleń.</div>
</div>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-[#0a0f0d] w-full max-w-md relative overflow-hidden z-10 shadow-2xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00df81]/50 to-transparent"></div>
<div className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">Warsztaty startują za:</div>
<div className="flex justify-center gap-6">
<div className="flex flex-col items-center"><span className="text-4xl font-semibold tracking-tight">00</span><span className="text-[10px] text-gray-500 mt-2 tracking-widest font-medium uppercase">Dni</span></div>
<div className="text-3xl font-light text-gray-700 mt-0.5">:</div>
<div className="flex flex-col items-center"><span className="text-4xl font-semibold tracking-tight">00</span><span className="text-[10px] text-gray-500 mt-2 tracking-widest font-medium uppercase">Godziny</span></div>
<div className="text-3xl font-light text-gray-700 mt-0.5">:</div>
<div className="flex flex-col items-center"><span className="text-4xl font-semibold tracking-tight text-[#00df81]">00</span><span className="text-[10px] text-[#00df81]/60 mt-2 tracking-widest font-medium uppercase">Minuty</span></div>
</div>
</div>
</section>


    </>
  );
}
