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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900">STUDENT<span className="text-indigo-600">HUB</span></span>
</a>

<div className="hidden md:flex items-center relative">
<iconify-icon className="absolute left-3 text-slate-400" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="h-9 w-64 rounded-md border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-400" placeholder="Szukaj pytań, projektów..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden text-sm font-medium text-slate-500 hover:text-slate-900 sm:block">Zaloguj się</button>
<button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                    Dołącz
                </button>
</div>
</div>
</header>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

<aside className="hidden lg:col-span-2 lg:block">
<nav className="sticky top-24 space-y-1">
<a className="group flex items-center gap-3 rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900" href="#">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="18"></iconify-icon>
                        Główna
                    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900" href="#">
<iconify-icon icon="lucide:help-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Pytania
                    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                        Projekty
                    </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900" href="#">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="18"></iconify-icon>
                        Korki
                    </a>
<div className="pt-4">
<h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Tagi</h3>
<div className="mt-2 space-y-1">
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">
<span>#matematyka</span>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">
<span>#informatyka</span>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">
<span>#prawo</span>
</a>
</div>
</div>
</nav>
</aside>

<main className="lg:col-span-7">

<div className="mb-6 rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="border-b border-slate-100 px-4 py-3">
<div className="flex gap-4">
<button className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 pb-2.5 -mb-3.5">Pytanie</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-2.5 -mb-3.5">Szukam ekipy</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-2.5 -mb-3.5">Oferuję korki</button>
</div>
</div>
<div className="p-4">
<input className="mb-2 w-full text-base font-medium placeholder:text-slate-400 focus:outline-none" placeholder="Tytuł twojego posta..." type="text"/>
<textarea className="w-full resize-none text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none" placeholder="Opisz swój problem, projekt lub ofertę..." rows="2"></textarea>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">

<label className="flex cursor-pointer items-center gap-2">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="h-5 w-9 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-focus:ring-2 peer-focus:ring-indigo-500 peer-focus:ring-offset-1"></div>
</div>
<span className="text-xs font-medium text-slate-500">Anonimowo</span>
</label>
</div>
<button className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="14"></iconify-icon>
                                Opublikuj
                            </button>
</div>
</div>
</div>

<div className="mb-4 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Najnowsze wpisy</h2>
<div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white p-1">
<button className="rounded px-2 py-1 text-xs font-medium text-slate-900 bg-slate-100">Nowe</button>
<button className="rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50">Top</button>
<button className="rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50">Gorące</button>
</div>
</div>

<div className="space-y-4">

<article className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">

<div className="flex flex-col items-center gap-1 pt-1 text-slate-500">
<button className="rounded hover:bg-slate-100 hover:text-indigo-600 p-0.5">
<iconify-icon icon="lucide:chevron-up" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">14</span>
<button className="rounded hover:bg-slate-100 hover:text-red-600 p-0.5">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1">
<div className="mb-1 flex items-center gap-2">
<span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-indigo-700">Pytanie</span>
<span className="text-xs text-slate-400">2 godz. temu</span>
</div>
<h3 className="mb-1 text-base font-medium text-slate-900">Problem z implementacją algorytmu Dijkstry w C++</h3>
<p className="mb-3 text-sm leading-relaxed text-slate-500 line-clamp-2">Mam problem ze zrozumieniem jak poprawnie zaimplementować kolejkę priorytetową dla tego algorytmu. Mój kod wyrzuca błąd segmentacji przy większych grafach...</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">cpp</span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">algorytmy</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="h-5 w-5 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400"></div>
<span>michal_dev</span>
</div>
<div className="flex items-center gap-1 text-xs text-slate-500">
<iconify-icon icon="lucide:message-square" strokeWidth="1.5" width="14"></iconify-icon>
<span>3 odp.</span>
</div>
</div>
</div>
</div>
</article>

<article className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
<div className="flex flex-col items-center gap-1 pt-1 text-slate-500">
<button className="rounded hover:bg-slate-100 hover:text-indigo-600 p-0.5">
<iconify-icon icon="lucide:chevron-up" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">5</span>
<button className="rounded hover:bg-slate-100 hover:text-red-600 p-0.5">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1">
<div className="mb-1 flex items-center gap-2">
<span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700">Projekt</span>
<span className="text-xs text-slate-400">4 godz. temu</span>
</div>
<h3 className="mb-1 text-base font-medium text-slate-900">Szukam 2 osób do projektu Hackathon (Frontend + Design)</h3>
<p className="mb-3 text-sm leading-relaxed text-slate-500 line-clamp-2">Hej, startujemy w przyszłym tygodniu w hackathonie "Code for Earth". Mamy już Backendowca i Data Scientistę. Potrzebujemy kogoś kto ogarnia Reacta oraz kogoś od UI/UX w Figmie.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">współpraca</span>
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">hackathon</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="lucide:user" width="12"></iconify-icon>
</div>
<span className="italic">Anonim</span>
</div>
<div className="flex items-center gap-1 text-xs text-slate-500">
<iconify-icon icon="lucide:message-square" strokeWidth="1.5" width="14"></iconify-icon>
<span>8 zgłoszeń</span>
</div>
</div>
</div>
</div>
</article>

<article className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
<div className="flex flex-col items-center gap-1 pt-1 text-slate-500">
<button className="rounded hover:bg-slate-100 hover:text-indigo-600 p-0.5">
<iconify-icon icon="lucide:chevron-up" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="text-sm font-semibold text-slate-900">2</span>
<button className="rounded hover:bg-slate-100 hover:text-red-600 p-0.5">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-700">Korki</span>
<span className="text-xs text-slate-400">wczoraj</span>
</div>
<span className="text-sm font-semibold text-emerald-600">50 zł / h</span>
</div>
<h3 className="mb-1 text-base font-medium text-slate-900">Korepetycje z Analizy Matematycznej i Algebry</h3>
<p className="mb-3 text-sm leading-relaxed text-slate-500 line-clamp-2">Jestem studentem 3 roku matematyki. Pomogę z całkami, pochodnymi, macierzami. Pierwsza lekcja próbna (30 min) za darmo. Online lub stacjonarnie.</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">matematyka</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="h-5 w-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">K</div>
<span>Kasia_Math</span>
</div>
<button className="rounded-md bg-white border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                                        Napisz
                                    </button>
</div>
</div>
</div>
</article>
</div>
</main>

<aside className="hidden lg:col-span-3 lg:flex lg:flex-col lg:gap-6">

<div className="flex h-[500px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="border-b border-slate-100 bg-slate-50 px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="relative">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
<h3 className="text-sm font-semibold text-slate-900">Open Chat</h3>
</div>
<span className="text-[10px] font-medium text-slate-400">23 online</span>
</div>
<div className="chat-scroll flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">

<div className="flex gap-2">
<div className="h-6 w-6 flex-shrink-0 rounded-full bg-blue-100 text-[10px] flex items-center justify-center text-blue-700 font-bold">A</div>
<div className="flex flex-col">
<div className="rounded-2xl rounded-tl-none bg-white border border-slate-200 px-3 py-2 shadow-sm">
<p className="text-xs text-slate-600">Ktoś wie kiedy są wyniki z egzaminu?</p>
</div>
<span className="ml-1 mt-1 text-[10px] text-slate-400">10:02</span>
</div>
</div>

<div className="flex flex-row-reverse gap-2">
<div className="flex flex-col items-end">
<div className="rounded-2xl rounded-tr-none bg-indigo-600 px-3 py-2 shadow-sm">
<p className="text-xs text-white">Podobno jutro wieczorem.</p>
</div>
<span className="mr-1 mt-1 text-[10px] text-slate-400">10:05</span>
</div>
</div>

<div className="flex gap-2">
<div className="h-6 w-6 flex-shrink-0 rounded-full bg-orange-100 text-[10px] flex items-center justify-center text-orange-700 font-bold">M</div>
<div className="flex flex-col">
<div className="rounded-2xl rounded-tl-none bg-white border border-slate-200 px-3 py-2 shadow-sm">
<p className="text-xs text-slate-600">Dzięki!</p>
</div>
<span className="ml-1 mt-1 text-[10px] text-slate-400">10:06</span>
</div>
</div>
</div>
<div className="border-t border-slate-100 p-3">
<form className="relative flex items-center">
<input className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-3 pr-10 text-xs focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Napisz wiadomość..." type="text"/>
<button className="absolute right-1 rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-700" type="submit">
<iconify-icon icon="lucide:arrow-up" strokeWidth="2" width="14"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-white shadow-md">
<h3 className="mb-1 text-sm font-semibold">Premium Student</h3>
<p className="mb-4 text-xs text-indigo-100 opacity-90">Zyskaj wyróżnione ogłoszenia i dostęp do prywatnych grup studyjnych.</p>
<button className="w-full rounded bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20">
                        Sprawdź korzyści
                    </button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-400">© 2023 StudentHub. All rights reserved.</p>
</div>
</aside>
</div>
</div>

    </>
  );
}
