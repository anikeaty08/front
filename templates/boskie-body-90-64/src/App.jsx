import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
50: '#FAFAFA',
100: '#F5F5F5',
200: '#E5E5E5',
300: '#D4D4D4',
400: '#A3A3A3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0A0A0A',
},
danger: {
500: '#EF4444',
600: '#DC2626',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Pain Meter Logic ---
        function togglePain(element) {
            // Toggle visual state
            element.classList.toggle('selected');
            const checkIcon = element.querySelector('.check-circle iconify-icon');
            const checkCircle = element.querySelector('.check-circle');
            
            if (element.classList.contains('selected')) {
                checkIcon.classList.remove('opacity-0');
                checkCircle.classList.add('bg-neutral-900', 'border-neutral-900');
            } else {
                checkIcon.classList.add('opacity-0');
                checkCircle.classList.remove('bg-neutral-900', 'border-neutral-900');
            }

            // Calculate progress
            const totalCards = 6;
            const selectedCards = document.querySelectorAll('.pain-card.selected').length;
            const percentage = (selectedCards / totalCards) * 100;
            
            // Update UI
            document.getElementById('pain-counter').innerText = `${selectedCards}/${totalCards}`;
            document.getElementById('pain-progress-fill').style.width = `${percentage}%`;
            
            // Dynamic Comments
            const comments = [
                "Zaznacz powyższe kafelki, aby sprawdzić diagnozę.", // 0
                "To dopiero wierzchołek góry lodowej. Co jeszcze Cię męczy?", // 1
                "Widzę, że walka trwa od dłuższego czasu.", // 2
                "Połowa problemów? Twój organizm woła o pomoc.", // 3
                "To brzmi jak poważne wyczerpanie systemu. Potrzebujesz zmiany.", // 4
                "Jest bardzo źle. Ale dobrze, że tu jesteś.", // 5
                "Twój obecny system nie działa. To stan krytyczny dla Twojego komfortu życia." // 6
            ];
            
            const commentElement = document.getElementById('pain-comment');
            commentElement.style.opacity = '0';
            setTimeout(() => {
                commentElement.innerText = comments[selectedCards];
                commentElement.style.opacity = '1';
                
                // Change color based on severity
                if(selectedCards > 3) {
                    commentElement.classList.add('text-danger-600');
                    commentElement.classList.remove('text-neutral-900');
                } else {
                    commentElement.classList.remove('text-danger-600');
                    commentElement.classList.add('text-neutral-900');
                }
            }, 300);
        }

        // --- Pillar Accordion Logic ---
        function togglePillar(element) {
            const isActive = element.classList.contains('active');
            
            // Close others 
            const allPillars = document.querySelectorAll('.pillar-card');
            allPillars.forEach(p => p.classList.remove('active'));

            if (!isActive) {
                element.classList.add('active');
            } 
        }

        // --- FAQ Accordion Logic ---
        function toggleFaq(element) {
            const isActive = element.classList.contains('active');
            
            // Close others 
            const allFaqs = document.querySelectorAll('.faq-card');
            allFaqs.forEach(f => f.classList.remove('active'));

            if (!isActive) {
                element.classList.add('active');
            }
        }

        // --- Scroll Reveal Animation ---
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-sm font-bold tracking-tighter uppercase text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:activity"></iconify-icon>
                BOSKIE BODY
            </div>
<a className="text-xs font-semibold bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-700 hover:shadow-lg hover:shadow-neutral-500/20 transition-all duration-300 transform hover:-translate-y-0.5" href="#start">
                Dołącz Teraz
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">

<div className="absolute inset-0 z-0">
<img alt="Active Lifestyle" className="w-full h-full object-cover opacity-[0.08] saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-b from-transparent via-white/40 to-white absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 reveal active text-center max-w-5xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 bg-white/60 backdrop-blur-sm mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="uppercase text-xs font-semibold text-neutral-600 tracking-wide" style={{}}>System BOSKIE BODY</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
                Poczuj się <br/> <span className="text-neutral-400">DOSKONALE.</span>
</h1>
<div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-12">
<p className="">
                    Wyobraź sobie, że w końcu czujesz się <span className="font-medium text-neutral-900">DOSKONALE</span> w swoim ciele.
                    Nie z musu. Nie z presji. Z pokoju, siły i zdrowia.
                </p>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
                    Bez głodówek • Bez biegania • Bez męczarni
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center hover:bg-black transition-all duration-300 shadow-neutral-200 text-sm font-semibold text-white tracking-tight bg-neutral-900 h-14 rounded-full pr-8 pl-8 shadow-xl" href="#start">Rozpocznij Swoją Przemianę</a>
<a className="inline-flex items-center justify-center hover:bg-neutral-50 transition-colors text-sm font-medium text-neutral-900 bg-white h-14 border-neutral-200 border rounded-full pr-8 pl-8" href="#story">Poznaj Moją Historię</a>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative z-10 reveal">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50 aspect-[21/9] bg-neutral-100 relative group">
<img alt="Healthy Run" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon fill="currentColor" icon="lucide:play" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="bg-neutral-50 border-neutral-100 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="max-w-3xl mx-auto text-center mb-16 reveal">
<h2 className="md:text-5xl text-3xl font-semibold text-neutral-900 tracking-tight mb-6">Czy to brzmi znajomo?</h2>
<p className="text-neutral-500 text-lg">
                    Zaznacz te problemy, które brzmią znajomo. Bądź ze sobą szczery.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal" id="pain-grid">

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:utensils-crossed" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Ciągłe diety</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Próbujesz kolejnych cudownych głodówek i detoksów. Efekt? Jo-jo, frustracja i ciągłe myślenie o jedzeniu.
                    </p>
</div>

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:heart-pulse" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Męczące Cardio</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Zmuszasz się do biegania czy HIIT. Nienawidzisz tego, a waga ani drgnie lub wraca po tygodniu przerwy.
                    </p>
</div>

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:battery-warning" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Brak Energii</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Budzisz się zmęczony. Kawa nie pomaga. Brakuje Ci siły na zabawę z dziećmi czy pasje po pracy.
                    </p>
</div>

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:dumbbell" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Bezowocny Trening</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Spędzasz godziny ćwicząc, ale w lustrze nie widać różnicy. Karnet na siłownię odchudza tylko portfel.
                    </p>
</div>

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:flame" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Słomiany Zapał</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Zaczynasz z "wysokiego C", ale po 3 tygodniach motywacja znika i wracasz do starych nawyków.
                    </p>
</div>

<div className="pain-card glass-card p-8 rounded-2xl border-2 border-transparent" onclick="togglePain(this)">
<div className="icon-bg w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 transition-colors duration-300">
<iconify-icon className="text-neutral-900" icon="lucide:eye-off" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Wstyd</h3>
<div className="check-circle w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Unikasz plaży, zdjęć i lustra. Ukrywasz ciało pod luźnymi ubraniami. Czujesz się nieswojo.
                    </p>
</div>
</div>

<div className="max-w-2xl mx-auto glass-card p-6 rounded-xl border border-neutral-200 shadow-xl reveal">
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Poziom Frustracji</span>
<span className="text-3xl font-bold text-danger-600 tracking-tighter" id="pain-counter">0/6</span>
</div>

<div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden">

<div className="h-full bg-gradient-to-r from-danger-500 to-danger-600 w-0" id="pain-progress-fill"></div>
</div>

<div className="mt-4 text-center min-h-[3rem] flex items-center justify-center">
<p className="text-neutral-900 font-medium transition-all duration-300 opacity-100" id="pain-comment">
                        Zaznacz powyższe kafelki, aby sprawdzić diagnozę.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pr-6 pb-24 pl-6" id="story">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="reveal">
<h2 className="md:text-5xl leading-tight text-3xl font-semibold text-neutral-900 tracking-tight mb-8">
                        Historia, w której <br/>odnajdziesz siebie
                    </h2>
<div className="prose prose-neutral prose-lg text-neutral-600 font-light leading-relaxed space-y-6">
<p className="border-l-2 border-neutral-900 pl-6 italic text-neutral-800 font-normal">
                            "Byłem dokładnie tam, gdzie Ty. Patrzyłem w lustro i nie poznawałem osoby po drugiej stronie."
                        </p>
<p className="">
                            Czułem się pozbawiony energii i sfrustrowany kolejnymi nieudanymi próbami zmiany. Przetestowałem chyba każdą możliwą dietę. Wszystko albo działało tylko na chwilę - albo wcale.
                        </p>
<p className="">
                            Zrozumiałem wtedy, że problemem nie jest brak mojej motywacji, ale , który skupia się tylko na powierzchownych zmianach.
                        </p>
<p className="">
                            Tak narodziło się <span className="font-bold text-neutral-900">BOSKIE BODY</span>. Poświęciłem lata na naukę i testy. Stworzyłem to najpierw dla siebie – by sprawdzić, czy człowiek zapracowany, z rodziną i obowiązkami może wyglądać i czuć się jak ktoś stworzony przez samego Boga.
                        </p>
<div className="pt-4">
<span className="block signature text-2xl text-neutral-900 font-handwriting">Darek Mietlicki, certyfikowany Dietetyk Sportowy MEN</span>
</div>
</div>
</div>

<div className="relative reveal delay-200">
<div className="absolute -inset-4 bg-neutral-100 rounded-[2rem] -rotate-3 z-0"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200 z-10 aspect-[4/5]">
<img alt="Transformation Story" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-900 italic">
                                    "Nie jest za późno. I nie Ty jesteś problemem. To system wymagał zmiany."
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-xs font-bold text-neutral-500 uppercase tracking-widest block mb-3">Metodologia</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">5 Filarów Sukcesu</h2>
<p className="mt-4 text-neutral-500">Kliknij na każdy filar, aby poznać szczegóły.</p>
</div>
<div className="flex flex-col space-y-4">

<div className="pillar-card bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 reveal" onclick="togglePillar(this)">
<div className="flex items-center justify-between p-6 md:p-8">
<div className="flex items-center gap-6">
<div className="pillar-icon w-14 h-14 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="lucide:apple" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Boskie PALIWO <span className="text-neutral-400 font-normal ml-1 text-base hidden sm:inline">(jedzenie, które syci i spala tłuszcz)</span></h3>
</div>
<iconify-icon className="chevron-icon text-neutral-400 transition-transform duration-300" icon="lucide:chevron-down" width="28"></iconify-icon>
</div>

<div className="px-8 pb-4 sm:hidden text-sm text-neutral-500 mt-[-1rem]">jedzenie, które syci i spala tłuszcz</div>
<div className="pillar-content bg-neutral-50/50" style={{maxHeight: '0px'}}>
<div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
<div className="grid md:grid-cols-2 gap-8 mt-6">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:star"></iconify-icon> Kluczowe Korzyści
                                    </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Uczucie sytości bez podjadania</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Stabilny poziom energii przez cały dzień</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Koniec z "wilczym głodem" wieczorem</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:microscope"></iconify-icon> Podstawy Naukowe
                                    </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Opieramy się na gęstości odżywczej i niskim ładunku glikemicznym. Dzięki temu normalizujemy poziom insuliny i leptyny, zmuszając organizm do czerpania energii z zapasów tkanki tłuszczowej, a nie z mięśni.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="pillar-card bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 reveal delay-100" onclick="togglePillar(this)">
<div className="flex items-center justify-between p-6 md:p-8">
<div className="flex items-center gap-6">
<div className="pillar-icon w-14 h-14 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="lucide:footprints" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Boskie KROKI <span className="text-neutral-400 font-normal ml-1 text-base hidden sm:inline">(najzdrowsze cardio świata)</span></h3>
</div>
<iconify-icon className="chevron-icon text-neutral-400 transition-transform duration-300" icon="lucide:chevron-down" width="28"></iconify-icon>
</div>
<div className="px-8 pb-4 sm:hidden text-sm text-neutral-500 mt-[-1rem]">najzdrowsze cardio świata</div>
<div className="pillar-content bg-neutral-50/50" style={{maxHeight: '0px'}}>
<div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
<div className="grid md:grid-cols-2 gap-8 mt-6">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:star"></iconify-icon> Kluczowe Korzyści
                                    </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Bezbolesne spalanie tłuszczu</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Redukcja stresu i kortyzolu</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Ochrona stawów przed przeciążeniem</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:microscope"></iconify-icon> Podstawy Naukowe
                                    </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Wykorzystujemy efekt NEAT (Non-Exercise Activity Thermogenesis). Spontaniczna aktywność fizyczna spala więcej kalorii w skali tygodnia niż intensywne treningi, nie obciążając przy tym układu nerwowego.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="pillar-card bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 reveal delay-200" onclick="togglePillar(this)">
<div className="flex items-center justify-between p-6 md:p-8">
<div className="flex items-center gap-6">
<div className="pillar-icon w-14 h-14 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Boska MOC <span className="text-neutral-400 font-normal ml-1 text-base hidden sm:inline">(źródło energii i młodzieńczego wyglądu)</span></h3>
</div>
<iconify-icon className="chevron-icon text-neutral-400 transition-transform duration-300" icon="lucide:chevron-down" width="28"></iconify-icon>
</div>
<div className="px-8 pb-4 sm:hidden text-sm text-neutral-500 mt-[-1rem]">źródło energii i młodzieńczego wyglądu</div>
<div className="pillar-content bg-neutral-50/50" style={{maxHeight: '0px'}}>
<div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
<div className="grid md:grid-cols-2 gap-8 mt-6">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:star"></iconify-icon> Kluczowe Korzyści
                                    </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Uzupełnienie ukrytych niedoborów</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Lepsza praca mózgu i koncentracja</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Szybsza regeneracja po wysiłku</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:microscope"></iconify-icon> Podstawy Naukowe
                                    </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Współczesna żywność jest uboższa w mikroskładniki. Precyzyjna suplementacja (wit. D3, Omega-3, magnez) optymalizuje szlaki metaboliczne i przywraca równowagę biochemiczną organizmu.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="pillar-card bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 reveal delay-300" onclick="togglePillar(this)">
<div className="flex items-center justify-between p-6 md:p-8">
<div className="flex items-center gap-6">
<div className="pillar-icon w-14 h-14 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="lucide:moon" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Boski RESET <span className="text-neutral-400 font-normal ml-1 text-base hidden sm:inline">(doskonały sen i regeneracja)</span></h3>
</div>
<iconify-icon className="chevron-icon text-neutral-400 transition-transform duration-300" icon="lucide:chevron-down" width="28"></iconify-icon>
</div>
<div className="px-8 pb-4 sm:hidden text-sm text-neutral-500 mt-[-1rem]">doskonały sen i regeneracja</div>
<div className="pillar-content bg-neutral-50/50" style={{maxHeight: '0px'}}>
<div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
<div className="grid md:grid-cols-2 gap-8 mt-6">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:star"></iconify-icon> Kluczowe Korzyści
                                    </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Głęboki, regenerujący sen</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Naturalna regulacja apetytu</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Młodszy wygląd skóry</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:microscope"></iconify-icon> Podstawy Naukowe
                                    </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Podczas snu wydzielany jest Hormon Wzrostu (HGH), kluczowy dla spalania tłuszczu. Reset rytmu dobowego reguluje grelinę (hormon głodu) i leptynę (hormon sytości).
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="pillar-card bg-white border border-neutral-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 reveal delay-400" onclick="togglePillar(this)">
<div className="flex items-center justify-between p-6 md:p-8">
<div className="flex items-center gap-6">
<div className="pillar-icon w-14 h-14 bg-neutral-100 text-neutral-900 rounded-2xl flex items-center justify-center transition-colors duration-300">
<iconify-icon icon="lucide:biceps-flexed" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Boska SIŁA <span className="text-neutral-400 font-normal ml-1 text-base hidden sm:inline">(prosty trening, który rzeźbi ciało)</span></h3>
</div>
<iconify-icon className="chevron-icon text-neutral-400 transition-transform duration-300" icon="lucide:chevron-down" width="28"></iconify-icon>
</div>
<div className="px-8 pb-4 sm:hidden text-sm text-neutral-500 mt-[-1rem]">prosty trening, który rzeźbi ciało</div>
<div className="pillar-content bg-neutral-50/50" style={{maxHeight: '0px'}}>
<div className="p-6 md:p-8 pt-0 border-t border-neutral-100">
<div className="grid md:grid-cols-2 gap-8 mt-6">
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:star"></iconify-icon> Kluczowe Korzyści
                                    </h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Jędrne, wyrzeźbione ciało</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Przyspieszony metabolizm spoczynkowy</li>
<li className="flex items-start gap-2"><span className="text-neutral-400">•</span> Długowieczność i sprawność</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:microscope"></iconify-icon> Podstawy Naukowe
                                    </h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Mięśnie to nie tylko wygląd. To aktywny organ endokrynny. Trening oporowy zwiększa wrażliwość na insulinę i pozwala "bezkarnie" jeść więcej, kierując składniki odżywcze do mięśni, a nie w boczki.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="md:text-5xl reveal text-3xl font-semibold text-neutral-900 tracking-tight text-center mb-16">Twój plan na 90 DNI</h2>
<div className="md:ml-12 border-neutral-200 border-l ml-4 relative space-y-16">

<div className="relative pl-8 md:pl-16 reveal">
<div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-900 shadow-lg"></div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-2">Etap 1 <span className="text-neutral-400 font-normal ml-2 text-lg">(1–2 tydzień)</span></h3>
<p className="text-sm font-bold text-neutral-500 mb-4 tracking-wide uppercase flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="lucide:rocket"></iconify-icon>
                        Boski Start
                    </p>
<p className="text-base text-neutral-600 leading-relaxed bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm">
                        Profesjonalna  Twojego składu ciała i nawyków. Wprowadzamy 3 proste kroki, które z lekkością ruszą Cię do działania. Poczujesz pierwszą falę energii.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 reveal">
<div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-300"></div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-2">Etap 2 <span className="text-neutral-400 font-normal ml-2 text-lg">(3–6 tydzień)</span></h3>
<p className="text-base text-neutral-600 leading-relaxed bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm">
                        Twój osobisty  prowadzi Cię za rękę. Wdrażamy zamienniki posiłków i mądrą suplementację. Tłuszcz zaczyna znikać, hormony się stabilizują. Dodajemy proste treningi.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 reveal">
<div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-300"></div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-2">Etap 3 <span className="text-neutral-400 font-normal ml-2 text-lg">(7–12 tydzień)</span></h3>
<p className="text-base text-neutral-600 leading-relaxed bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm">
                        System działa w pełni. Wyrzeźbiona sylwetka wyłania się na dobre. Masz nawyki, które zostaną z Tobą na .
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white relative overflow-hidden" id="start">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-900"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                    Wybierz swoją ścieżkę
                </h2>
<p className="text-neutral-400 text-lg">Inwestycja w zdrowie zwraca się każdego dnia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

<div className="bg-neutral-800/50 backdrop-blur-md p-10 rounded-3xl border border-neutral-700 flex flex-col hover:border-neutral-500 transition-all duration-300 reveal">
<div className="mb-8">
<div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">Start</div>
<h3 className="text-3xl font-bold text-white mb-2">BODY CHECK</h3>
<p className="text-neutral-400 mb-6">Pierwsze 14 dni transformacji</p>
<div className="text-4xl font-semibold text-white tracking-tight">490 PLN</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-neutral-300">
<iconify-icon className="text-white mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>Szczegółowa analiza składu ciała</span>
</li>
<li className="flex items-start gap-3 text-neutral-300">
<iconify-icon className="text-white mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>Konsultacja z ekspertem (60 min)</span>
</li>
<li className="flex items-start gap-3 text-neutral-300">
<iconify-icon className="text-white mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>Spersonalizowany plan żywieniowy</span>
</li>
<li className="flex items-start gap-3 text-neutral-300">
<iconify-icon className="text-white mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>Plan działania na pierwsze 14 dni</span>
</li>
<li className="flex items-start gap-3 text-neutral-300">
<iconify-icon className="text-white mt-1 shrink-0" icon="lucide:check-circle"></iconify-icon>
<span>Dostęp do grupy wsparcia</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
                        Umów się na konsultację
                    </button>
</div>

<div className="bg-white text-neutral-900 p-10 rounded-3xl border border-white flex flex-col relative shadow-2xl shadow-black/20 reveal delay-100">
<div className="mb-8">
<div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Pełna Transformacja</div>
<h3 className="text-3xl font-bold text-neutral-900 mb-2">BOSKIE BODY</h3>
<p className="text-neutral-500 mb-6">Kompletny system 90 dni</p>
<div className="text-4xl font-semibold text-neutral-900 tracking-tight">1490 PLN</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Wszystko z Body Check</span>
</li>
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Przepisy, treningi, tracking</span>
</li>
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>AI Agent - 24/7 wsparcie dietetyczne, treningowe i coachingowe</span>
</li>
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Personalizowane porady</span>
</li>
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>Baza najlepszych przepisów na spalanie tłuszczu i budowę wyrzeźbionego ciała</span>
</li>
<li className="flex items-start gap-3 text-neutral-700 font-medium">
<iconify-icon className="text-neutral-900 mt-1 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
<span>3 checkpointy (spotkania na Zoom) z ekspertem</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-700 transition-colors shadow-lg shadow-neutral-900/20">
                        Dołącz do Pełnego Programu
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100">
<div className="max-w-3xl mx-auto">
<h2 className="md:text-4xl text-2xl font-semibold text-neutral-900 tracking-tight text-center mb-16 reveal">Najczęściej Zadawane Pytania</h2>
<div className="space-y-4">

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Czy muszę chodzić na siłownię?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Nie, system jest zaprojektowany tak, aby działał również z treningiem w domu. Siłownia przyspieszy efekty, ale nie jest wymagana. Kluczem są spacery i proste ćwiczenia oporowe.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal delay-100 hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Czy dieta jest droga?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Nie, bazujemy na ogólnodostępnych, sezonowych produktach. Często okazuje się, że nasi podopieczni wydają mniej na jedzenie, bo przestają kupować zbędne przekąski i przetworzoną żywność.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Ile czasu zajmuje przygotowanie posiłków?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Szanujemy Twój czas. Przepisy są proste i szybkie – większość obiadów zrobisz w 15-20 minut. Uczymy też, jak gotować na 2 dni, by oszczędzać czas w kuchni.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Co jeśli mam kontuzję lub problemy zdrowotne?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            W pakiecie BODY CHECK oraz BOSKIE BODY przeprowadzamy dokładny wywiad. Treningi i dieta są dostosowywane do Twoich możliwości. W razie wątpliwości zawsze konsultujemy się z lekarzem.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Czy ten program jest dla wegan/wegetarian?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Tak, posiadamy pełne plany żywieniowe w wersjach roślinnych. Bilansujemy białko i mikroskładniki tak, abyś miał mnóstwo energii bez mięsa.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Co dzieje się po 90 dniach?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Celem programu jest nauczenie Cię nawyków na całe życie. Po 90 dniach będziesz wiedzieć dokładnie, co robić, by utrzymać formę bez naszej pomocy. Nie zostawiamy Cię z efektem jojo.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">Czy jest gwarancja satysfakcji?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Tak. Jeśli będziesz stosować się do zaleceń i wypełniać raporty, a nie zobaczysz efektów, przeanalizujemy sytuację i przedłużymy opiekę gratis, aż osiągniesz cel.
                        </div>
</div>
</div>

<div className="faq-card bg-neutral-50 rounded-xl cursor-pointer reveal hover:bg-neutral-100 transition-colors" onclick="toggleFaq(this)">
<div className="flex items-center justify-between p-6">
<h3 className="text-base font-semibold text-neutral-900">W jakim wieku można zacząć?</h3>
<div className="plus-icon transition-transform duration-300 text-neutral-400">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
</div>
<div className="faq-content" style={{maxHeight: '0px'}}>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Wiek to tylko liczba. Mamy podopiecznych od 20 do 70 roku życia. Intensywność programu jest zawsze dopasowana do Twojego aktualnego stanu i wieku metabolicznego.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4">Nie Znalazłeś Odpowiedzi?</h2>
<p className="text-neutral-500 mb-10">Skontaktuj się ze mną bezpośrednio. Chętnie rozwieję Twoje wątpliwości.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#25D366]/20" href="#">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
                    WhatsApp
                </a>
<a className="w-full md:w-auto flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-neutral-900/20" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
                    Email
                </a>
<a className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#0084FF] hover:bg-[#006bcf] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#0084FF]/20" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
                    Messenger
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-100">
<div className="max-w-3xl mx-auto text-center reveal">
<iconify-icon className="text-neutral-200 mb-8" icon="lucide:quote" width="40"></iconify-icon>
<div className="text-2xl md:text-3xl font-light text-neutral-600 space-y-4 leading-relaxed tracking-tight">
<p>Twoje ciało jest świątynią.</p>
<p>Twoje zdrowie jest darem.</p>
</div>
<p className="mt-12 text-neutral-900 font-semibold text-xl">
                Zrób to dla siebie. Zrób to dla Tego, który Cię stworzył.
            </p>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-neutral-200 text-center">
<div className="max-w-xl mx-auto">
<div className="flex items-center justify-center gap-2 mb-8 font-bold text-neutral-900 tracking-tighter">
<iconify-icon icon="lucide:activity"></iconify-icon>
                BOSKIE BODY
            </div>
<p className="text-sm text-neutral-400 mb-8">
                © 2024 Wszystkie prawa zastrzeżone.
            </p>
</div>
</footer>



    </>
  );
}
