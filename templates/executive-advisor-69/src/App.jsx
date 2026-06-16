import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function setLang(lang) {
            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.dataset.lang === lang) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
            
            const btnEn = document.getElementById('btn-en');
            const btnDe = document.getElementById('btn-de');
            
            if (lang === 'en') {
                btnEn.className = "px-3 py-1 text-xs font-medium rounded-full bg-white text-gray-900 shadow-sm transition-all";
                btnDe.className = "px-3 py-1 text-xs font-medium rounded-full text-gray-500 hover:text-gray-900 transition-all";
            } else {
                btnDe.className = "px-3 py-1 text-xs font-medium rounded-full bg-white text-gray-900 shadow-sm transition-all";
                btnEn.className = "px-3 py-1 text-xs font-medium rounded-full text-gray-500 hover:text-gray-900 transition-all";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 bg-white pointer-events-none">
<div className="absolute inset-0 bg-cover bg-[position:65%_top] md:bg-right-top transition-all duration-1000 ease-in-out" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3daec474-551c-4396-a507-36bef3c53914_3840w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/60 to-transparent"></div>
</div>

<header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium text-gray-900 tracking-tighter" href="#">/JW</a>
<div className="flex items-center gap-4 md:gap-8">
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#home">
<span data-lang="en">Home</span><span className="hidden" data-lang="de">Startseite</span>
</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#about">
<span data-lang="en">About me</span><span className="hidden" data-lang="de">Über mich</span>
</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#books">
<span data-lang="en">Books</span><span className="hidden" data-lang="de">Bücher</span>
</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#podcast">
<span data-lang="en">Podcast</span><span className="hidden" data-lang="de">Podcast</span>
</a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#engagements">
<span data-lang="en">Engagements</span><span className="hidden" data-lang="de">Engagements</span>
</a>
</nav>

<div className="flex items-center bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-full p-1">
<button className="px-3 py-1 text-xs font-medium rounded-full bg-white text-gray-900 shadow-sm transition-all" id="btn-en" onclick="setLang('en')">EN</button>
<button className="px-3 py-1 text-xs font-medium rounded-full text-gray-500 hover:text-gray-900 transition-all" id="btn-de" onclick="setLang('de')">DE</button>
</div>
<button className="md:hidden text-gray-500 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]" id="home">
<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 lg:w-1/2 transition-all duration-1000 ease-in-out">
<div className="absolute w-[150%] h-[160%] bg-white/70 blur-3xl -z-10 rounded-full pointer-events-none md:-left-1/4"></div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                Professor Jürgen Weigand
            </h1>
<p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide drop-shadow-sm">
<span data-lang="en">Author – Founder – Advisor – Speaker</span>
<span className="hidden" data-lang="de">Autor – Gründer – Berater – Speaker</span>
</p>
</div>
</section>

<section className="bg-white/95 max-w-6xl border-gray-100 rounded-t-[3rem] border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] backdrop-blur-sm" id="about">
<div className="grid md:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-start">
<div className="md:col-span-5">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">
<span data-lang="en">About me.</span>
<span className="hidden" data-lang="de">Über mich.</span>
</h2>
<div className="bg-gray-50 border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-6">
<span data-lang="en">Co-founder of</span>
<span className="hidden" data-lang="de">Mitgründer von</span>
</p>
<div className="flex flex-col">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="text-lg font-medium text-gray-900 tracking-tighter"></span>
</div>
<div className="flex items-center gap-3"></div>
<img alt="Venture overview" className="transition-transform duration-1000 ease-out group-hover:scale-105 h-300px w-full object-contain cursor-pointer" onclick="window.location.href='https://www.strategyframe.ai/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23de108d-4192-4549-9ffe-6fefda394835_800w.jpg?w=800&amp;q=80"/>
<img alt="Venture overview" className="transition-transform duration-1000 ease-out group-hover:scale-105 h-400px w-full object-contain translate-y-4 cursor-pointer" onclick="window.location.href='https://www.xinblue.de/de'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/021f4862-a4ce-4945-aea6-5c66784f3063_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl pointer-events-none"></div>
</div>
</div>
</div>
<div className="md:col-span-7 pt-2">
<p className="text-base md:text-lg text-gray-500 leading-relaxed font-normal mb-8">
<span data-lang="en">Chair Professor of Microeconomics and Industrial Organization at the WHU Otto Beisheim School of Management in Vallendar and Düsseldorf.</span>
<span className="hidden" data-lang="de">Inhaber des Lehrstuhls für Mikroökonomie und Industrieökonomik an der WHU Otto Beisheim School of Management in Vallendar und Düsseldorf.</span>
</p>
<div className="w-full h-64 md:h-80 rounded-[2rem] overflow-hidden mb-8 bg-gray-50 border border-gray-100 shadow-sm relative group">
<img alt="Professional workspace" className="transition-transform duration-1000 ease-out group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12003d02-b7b3-45c5-b126-e4b64c79ffb7_1600w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-gray-900/5 rounded-[2rem] pointer-events-none"></div>
</div>
<p className="text-base md:text-lg text-gray-500 leading-relaxed font-normal mb-12">
<span data-lang="en">I have worked with companies of various sizes across industries and geographies on business strategy and related themes.</span>
<span className="hidden" data-lang="de">Ich habe mit Unternehmen verschiedener Größen über Branchen und Regionen hinweg an Unternehmensstrategien und verwandten Themen gearbeitet.</span>
</p>
<div className="">
<h3 className="text-sm font-medium text-gray-900 mb-4">
<span data-lang="en">Areas of expertise</span>
<span className="hidden" data-lang="de">Fachgebiete</span>
</h3>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white">
<span data-lang="en">Strategy &amp; leadership</span><span className="hidden" data-lang="de">Strategie &amp; Führung</span>
</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white">
<span data-lang="en">Industrial Organization</span><span className="hidden" data-lang="de">Industrieökonomik</span>
</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white">
<span data-lang="en">Competition Policy</span><span className="hidden" data-lang="de">Wettbewerbspolitik</span>
</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white">
<span data-lang="en">Corporate Governance</span><span className="hidden" data-lang="de">Corporate Governance</span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50/95 z-10 border-gray-100 border-t pt-24 pr-6 pb-24 pl-6 relative backdrop-blur-md" id="books">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium text-gray-900 tracking-tight mb-12">
<span data-lang="en">Books</span>
<span className="hidden" data-lang="de">Bücher</span>
</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="md:p-12 flex flex-col hover:border-gray-300 transition-colors duration-300 bg-white h-full border-gray-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex md:h-80 bg-center bg-gray-50 w-full h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f0b97b0-c2fe-4fcd-b124-5389fcfb305a_320w.png?w=800&amp;q=80)] bg-contain bg-no-repeat border-gray-100 border rounded-2xl mb-8 items-center justify-center">
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-3">
<span data-lang="en">Hope is not a strategy</span>
<span className="hidden" data-lang="de">Hoffnung ist keine Strategie</span>
</h3>
<p className="text-sm font-medium italic text-gray-900 mb-8">
<span data-lang="en">“Think and act strategically.”</span>
<span className="hidden" data-lang="de">„Strategisch denken und handeln.“</span>
</p>
<div className="flex-grow">
<blockquote className="text-sm text-gray-500 leading-relaxed font-normal mb-8">
<span data-lang="en">“This book is a gem. It not only provides a sound foundation for thinking strategically, but offers powerful tools for translating these ideas into practice in a rapidly changing environment. A valuable field guide for creating winning strategies, applicable to managers at every level.”</span>
<span className="hidden" data-lang="de">„Dieses Buch ist ein Juwel. Es bietet nicht nur eine solide Grundlage für strategisches Denken, sondern auch leistungsstarke Werkzeuge, um diese Ideen in einem sich schnell verändernden Umfeld in die Praxis umzusetzen. Ein wertvoller Praxisleitfaden für die Entwicklung erfolgreicher Strategien, anwendbar für Manager auf allen Ebenen.“</span>
</blockquote>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<p className="text-xs font-medium text-gray-900">
                            William G. Pietersen<br/>
<span className="text-gray-400 font-normal">
<span data-lang="en">Professor, The Practice of Management, Columbia Business School</span>
<span className="hidden" data-lang="de">Professor für Managementpraxis, Columbia Business School</span>
</span>
</p>
</div>
</div>

<div className="md:p-12 flex flex-col hover:border-gray-300 transition-colors duration-300 bg-white h-full border-gray-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex md:h-80 bg-center bg-gray-50 w-full h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a3244ba-5cb1-46bf-ac09-f6b0a3b3eb9f_320w.png?w=800&amp;q=80)] bg-auto border-gray-100 border rounded-2xl mb-8 items-center justify-center">
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">The International Handbook of Competition</h3>
<p className="text-sm text-gray-400 font-normal mb-8">
<span data-lang="en">Second Edition</span>
<span className="hidden" data-lang="de">Zweite Auflage</span>
</p>
<div className="flex-grow">
<blockquote className="text-sm text-gray-500 leading-relaxed font-normal mb-8">
<span data-lang="en">"This comprehensive Handbook demonstrates that academic thinking, new and old, has a role to play in shaping modern competition policy."</span>
<span className="hidden" data-lang="de">„Dieses umfassende Handbuch zeigt, dass akademisches Denken, neu und alt, eine Rolle bei der Gestaltung moderner Wettbewerbspolitik spielt.“</span>
</blockquote>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<p className="text-xs font-medium text-gray-900">
                            – Gunnar Niels<br/>
<span className="text-gray-400 font-normal">Oxera</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-white max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="podcast">
<div className="bg-gray-950 rounded-[2.5rem] p-10 md:p-24 text-center text-white overflow-hidden relative shadow-2xl shadow-gray-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none"></div>
<div className="z-10 relative">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-10 backdrop-blur-sm">
<iconify-icon className="text-gray-300" height="32" icon="solar:microphone-3-linear" strokeWidth="1.5" style={{color: 'rgb(209, 213, 219)'}} width="32"></iconify-icon>
</div>
<div className="md:h-56 flex bg-white/5 w-full h-90 max-w-2xl max-h-96 border-white/10 border rounded-2xl mr-auto mb-8 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm items-center justify-center">
<img alt="Book Feature" className="w-full h-full object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/145ce48a-2f39-4712-aa91-140b14630b0a_800w.png?w=800&amp;q=80"/>
</div>
<h2 className="md:text-5xl text-3xl font-medium tracking-tight mb-8">
<span data-lang="en">Does this sound familiar?</span>
<span className="hidden" data-lang="de">Kommt Ihnen das bekannt vor?</span>
</h2>
<div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-base leading-relaxed text-left md:text-center font-normal">
<p className="">
<span data-lang="en">Your competitors are galloping away in terms of profitability, market share, digital transformation and sustainability. Your company is running reams of „strategic projects“, but no one knows how they really contribute to making the company stay relevant.</span>
<span className="hidden" data-lang="de">Ihre Wettbewerber eilen Ihnen in Sachen Profitabilität, Marktanteil, digitaler Transformation und Nachhaltigkeit davon. Ihr Unternehmen führt unzählige „strategische Projekte“ durch, aber niemand weiß, wie diese wirklich dazu beitragen, dass das Unternehmen relevant bleibt.</span>
</p>
<p className="">
<span data-lang="en">A clearly articulated and embracing strategy is missing. The different parts of the organization are pursuing what they think is best for them. Constrained by the daily operational business, there are insufficient resources and routines dedicated to properly taking care of the necessary strategic work and alignment.</span>
<span className="hidden" data-lang="de">Es fehlt eine klar formulierte und umfassende Strategie. Die verschiedenen Teile der Organisation verfolgen das, was sie für sich am besten halten. Eingeschränkt durch das tägliche operative Geschäft gibt es unzureichende Ressourcen und Routinen, um sich angemessen um die notwendige Strategiearbeit und Ausrichtung zu kümmern.</span>
</p>
</div>
<div className="mt-16 pt-16 border-t border-white/10">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-white">
<span data-lang="en">Then you are exactly right here</span>
<span className="hidden" data-lang="de">Dann sind Sie hier genau richtig</span>
</h3>
<p className="max-w-3xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed mb-12 text-left md:text-center font-normal">
<span data-lang="en">In our podcast episodes, Christian Underwood and I seek to debunk the myths surrounding strategy making as an elite discipline and as the never-ending search for the holy grail. Success is no coincidence. With our podcast guests from across industries, we investigate what strategy needs to be, how pragmatic strategy work can help us succeed in challenging times, and what works, and what doesn‘t.</span>
<span className="hidden" data-lang="de">In unseren Podcast-Folgen versuchen Christian Underwood und ich, die Mythen rund um die Strategieentwicklung als Elitedisziplin und als nie endende Suche nach dem Heiligen Gral zu entlarven. Erfolg ist kein Zufall. Mit unseren Podcast-Gästen aus verschiedenen Branchen untersuchen wir, wie eine Strategie aussehen muss, wie pragmatische Strategiearbeit uns in herausfordernden Zeiten zum Erfolg verhelfen kann und was funktioniert und was nicht.</span>
</p>
<a className="inline-flex items-center gap-2 bg-white text-gray-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors" href="#">
<iconify-icon height="20" icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span data-lang="en">Be invited to listen in</span>
<span className="hidden" data-lang="de">Hören Sie gerne rein</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-gray-100 relative z-10 bg-white" id="engagements">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-3">
<span data-lang="en">Engagements</span>
<span className="hidden" data-lang="de">Engagements</span>
</h2>
<p className="text-sm text-gray-500 font-normal">
<span data-lang="en">Expertise delivered through various formats.</span>
<span className="hidden" data-lang="de">Expertise, die in verschiedenen Formaten vermittelt wird.</span>
</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:border-gray-900 transition-colors duration-300 relative overflow-hidden">
<div className="w-full h-32 md:h-40 rounded-2xl bg-gray-50 border border-gray-100 p-4 mb-6 flex items-center justify-center group-hover:bg-gray-100/50 transition-colors duration-300">
<img alt="Book Feature" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26645a5b-9094-4e7a-b363-85138e8886b8_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
<span data-lang="en">Public speaking</span>
<span className="hidden" data-lang="de">Vorträge</span>
</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">
<span data-lang="en">I share my expertise and professional experience in business strategy, strategic leadership, and competition policy in keynote speeches, panel discussions, or fireside chats.</span>
<span className="hidden" data-lang="de">Ich teile mein Fachwissen und meine Berufserfahrung in den Bereichen Unternehmensstrategie, strategische Führung und Wettbewerbspolitik in Keynotes, Podiumsdiskussionen oder Kamingesprächen.</span>
</p>
</div>

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:border-gray-900 transition-colors duration-300 relative overflow-hidden">
<div className="w-full h-32 md:h-40 rounded-2xl bg-gray-50 border border-gray-100 p-4 mb-6 flex items-center justify-center group-hover:bg-gray-100/50 transition-colors duration-300">
<img alt="Book Feature" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0b10369-1e85-41e0-84a9-a62f8d0e25f4_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
<span data-lang="en">Advisory</span>
<span className="hidden" data-lang="de">Beratung</span>
</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">
<span data-lang="en">I act as a sounding board to executive boards, steering committees as well as individual executives to challenge their thinking and provide critical review of strategy initiatives.</span>
<span className="hidden" data-lang="de">Ich fungiere als Impulsgeber für Vorstände, Lenkungsausschüsse sowie einzelne Führungskräfte, um deren Denken zu hinterfragen und strategische Initiativen kritisch zu prüfen.</span>
</p>
</div>

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:border-gray-900 transition-colors duration-300 relative overflow-hidden">
<div className="w-full h-32 md:h-40 rounded-2xl bg-gray-50 border border-gray-100 p-4 mb-6 flex items-center justify-center group-hover:bg-gray-100/50 transition-colors duration-300">
<img alt="Book Feature" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b40382d8-7052-4a3c-9433-440d4fb73120_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
<span data-lang="en">Personal growth &amp; leadership coaching</span>
<span className="hidden" data-lang="de">Persönlichkeitsentwicklung &amp; Führungskräfte-Coaching</span>
</h3>
<p className="text-xs text-gray-900 font-medium italic mb-4">
<span data-lang="en">“Everyone deserves to be led well.“</span>
<span className="hidden" data-lang="de">„Jeder hat es verdient, gut geführt zu werden.“</span>
<span className="font-normal text-gray-400">(John C. Maxwell)</span>
</p>
<p className="text-sm text-gray-500 leading-relaxed font-normal">
<span data-lang="en">I help executives master professional and personal challenges, (re-)set direction, and keep balance.</span>
<span className="hidden" data-lang="de">Ich unterstütze Führungskräfte dabei, berufliche und persönliche Herausforderungen zu meistern, die Richtung (neu) zu bestimmen und die Balance zu halten.</span>
</p>
</div>
</div>
</section>

<footer className="z-10 bg-white border-gray-100 border-t mt-12 pt-12 pr-6 pb-12 pl-6 relative">
<div className="flex flex-col md:flex-row gap-4 max-w-6xl mr-auto ml-auto gap-x-4 gap-y-4 items-center justify-between">
<span className="text-lg font-medium text-gray-900 tracking-tighter">/JW</span>
<p className="text-xs font-normal text-gray-400">© 2026 Professor Jürgen Weigand. 
                <span data-lang="en">All rights reserved.</span>
<span className="hidden" data-lang="de">Alle Rechte vorbehalten.</span>
</p>
</div>
</footer>



    </>
  );
}
