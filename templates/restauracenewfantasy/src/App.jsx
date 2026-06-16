import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data for all pages
        const pages = {
            home: `
                <!-- Hero -->
                <section class="relative min-h-[85vh] flex items-center overflow-hidden">
                    <div class="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover opacity-90" alt="Restaurant Interior">
                        <div class="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent lg:w-3/4"></div>
                    </div>
                    
                    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10">
                        <div class="max-w-2xl fade-enter-active">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 border border-orange-200 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
                                <span class="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></span>
                                Dnes otevřeno do 22:00
                            </div>
                            <h1 class="text-6xl lg:text-8xl font-medium tracking-tight text-stone-900 leading-[0.9] mb-8">
                                Chuť tradice <br>
                                <span class="font-serif italic text-stone-500 pl-2">v moderním</span> pojetí.
                            </h1>
                            <p class="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-light">
                                Poctivá česká kuchyně, mezinárodní speciality a rodinná atmosféra v srdci Libuše. Místo, kde se jídlo stává zážitkem.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <button onclick="navigate('lunch')" class="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all hover:scale-105 shadow-xl shadow-stone-900/20 flex items-center gap-2">
                                    <span>Denní menu</span>
                                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                                </button>
                                <button onclick="navigate('menu')" class="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-all hover:scale-105 flex items-center gap-2">
                                    <span>Stálý lístek</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features -->
                <section class="py-24 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid md:grid-cols-3 gap-8">
                            <div onclick="navigate('lunch')" class="group cursor-pointer p-8 rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-2xl hover:shadow-stone-900/5 transition-all duration-300">
                                <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:chef-hat-heart-linear" width="28"></iconify-icon>
                                </div>
                                <h3 class="text-xl font-semibold mb-3">Polední menu</h3>
                                <p class="text-stone-500 text-sm leading-relaxed mb-6">Každý všední den připravujeme čerstvé menu za zvýhodněnou cenu. Kvalitní oběd bez čekání.</p>
                                <span class="text-sm font-medium text-stone-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Zobrazit nabídku <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                                </span>
                            </div>

                            <div onclick="navigate('events')" class="group cursor-pointer p-8 rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-2xl hover:shadow-stone-900/5 transition-all duration-300">
                                <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:wine-glass-linear" width="28"></iconify-icon>
                                </div>
                                <h3 class="text-xl font-semibold mb-3">Svatby a oslavy</h3>
                                <p class="text-stone-500 text-sm leading-relaxed mb-6">Salónek pro 40 osob i velký sál pro 50 hostů. Zajistíme catering, výzdobu i hudbu na klíč.</p>
                                <span class="text-sm font-medium text-stone-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Zjistit více <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                                </span>
                            </div>

                            <div onclick="navigate('about')" class="group cursor-pointer p-8 rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-2xl hover:shadow-stone-900/5 transition-all duration-300">
                                <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <iconify-icon icon="solar:armchair-2-linear" width="28"></iconify-icon>
                                </div>
                                <h3 class="text-xl font-semibold mb-3">Zahradní terasa</h3>
                                <p class="text-stone-500 text-sm leading-relaxed mb-6">Užijte si klidné posezení v naší středomořské zahradě. Oáza klidu uprostřed Prahy.</p>
                                <span class="text-sm font-medium text-stone-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Prohlédnout galerii <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            `,

            lunch: `
                <div class="pt-10 pb-20 fade-enter-active">
                    <div class="bg-stone-900 text-white py-24 mb-12">
                        <div class="max-w-7xl mx-auto px-6 text-center">
                            <span class="text-orange-400 font-bold tracking-widest text-xs uppercase mb-4 block">Pondělí — Pátek (11:00 — 14:00)</span>
                            <h1 class="text-5xl md:text-6xl font-medium mb-6">Polední Menu</h1>
                            <p class="text-stone-400 max-w-lg mx-auto text-lg font-light">Čerstvé suroviny, rychlý servis a skvělá cena. <br>Přijďte si vychutnat pauzu na oběd.</p>
                        </div>
                    </div>

                    <div class="max-w-3xl mx-auto px-6 -mt-24 relative z-10">
                        <div class="bg-white rounded-[2rem] shadow-2xl shadow-stone-900/10 border border-stone-100 overflow-hidden">
                            <!-- Date Header -->
                            <div class="bg-orange-50/50 border-b border-orange-100 p-6 text-center">
                                <h3 class="text-orange-900 font-serif italic text-2xl">Dnešní nabídka</h3>
                                <p class="text-orange-800/60 text-xs font-bold uppercase tracking-widest mt-2">12. Října 2023</p>
                            </div>

                            <div class="p-8 md:p-12 space-y-12">
                                <!-- Soup Section -->
                                <div>
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="h-[1px] bg-stone-200 flex-1"></div>
                                        <span class="text-xs font-bold text-stone-400 uppercase tracking-widest">Polévka</span>
                                        <div class="h-[1px] bg-stone-200 flex-1"></div>
                                    </div>
                                    <div class="flex items-baseline justify-between group">
                                        <div>
                                            <h4 class="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Kulajda s hříbky</h4>
                                            <p class="text-stone-500 text-sm mt-1">se zastřeným vejcem a čerstvým koprem</p>
                                        </div>
                                        <div class="dots-leader hidden sm:block"></div>
                                        <span class="text-lg font-bold text-stone-900 tabular-nums">45,-</span>
                                    </div>
                                </div>

                                <!-- Main Course Section -->
                                <div>
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="h-[1px] bg-stone-200 flex-1"></div>
                                        <span class="text-xs font-bold text-stone-400 uppercase tracking-widest">Hlavní chody</span>
                                        <div class="h-[1px] bg-stone-200 flex-1"></div>
                                    </div>
                                    
                                    <div class="space-y-8">
                                        <div class="flex items-baseline justify-between group">
                                            <div class="max-w-[80%]">
                                                <h4 class="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Svíčková na smetaně</h4>
                                                <p class="text-stone-500 text-sm mt-1">hovězí zadní špikované, domácí houskový knedlík, brusinky</p>
                                            </div>
                                            <div class="dots-leader hidden sm:block"></div>
                                            <span class="text-lg font-bold text-stone-900 tabular-nums">165,-</span>
                                        </div>

                                        <div class="flex items-baseline justify-between group">
                                            <div class="max-w-[80%]">
                                                <h4 class="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Vepřový řízek z krkovice</h4>
                                                <p class="text-stone-500 text-sm mt-1">smažený na sádle, lehký bramborový salát s cibulkou</p>
                                            </div>
                                            <div class="dots-leader hidden sm:block"></div>
                                            <span class="text-lg font-bold text-stone-900 tabular-nums">155,-</span>
                                        </div>

                                        <div class="flex items-baseline justify-between group">
                                            <div class="max-w-[80%]">
                                                <h4 class="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Caesar salát s kuřecím masem</h4>
                                                <p class="text-stone-500 text-sm mt-1">římský salát, ančovičkový dresink, krutony, parmazán, slanina</p>
                                            </div>
                                            <div class="dots-leader hidden sm:block"></div>
                                            <span class="text-lg font-bold text-stone-900 tabular-nums">145,-</span>
                                        </div>

                                        <div class="flex items-baseline justify-between group">
                                            <div class="max-w-[80%]">
                                                <h4 class="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Indické Butter Chicken</h4>
                                                <p class="text-stone-500 text-sm mt-1">jemná máslová omáčka, kuřecí kousky, rýže basmati, koriandr</p>
                                            </div>
                                            <div class="dots-leader hidden sm:block"></div>
                                            <span class="text-lg font-bold text-stone-900 tabular-nums">159,-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-stone-50 p-6 text-center border-t border-stone-100">
                                <button class="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
                                    <iconify-icon icon="solar:download-minimalistic-linear" class="mr-2 text-base"></iconify-icon>
                                    Stáhnout menu v PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,

            menu: `
                <div class="bg-white min-h-screen pt-12 pb-24 fade-enter-active">
                    <div class="max-w-7xl mx-auto px-6">
                        <!-- Header -->
                        <div class="text-center max-w-2xl mx-auto mb-16 pt-12">
                            <span class="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3 block">A la carte</span>
                            <h1 class="text-5xl font-medium text-stone-900 mb-6">Stálý lístek</h1>
                            <p class="text-stone-500 text-lg font-light">Výběr toho nejlepšího z naší kuchyně. Od tradičních českých pokrmů přes šťavnaté steaky až po mexické speciality.</p>
                        </div>

                        <!-- Sticky Categories -->
                        <div class="sticky top-20 z-40 bg-white/95 backdrop-blur py-4 mb-12 border-b border-stone-100 overflow-x-auto no-scrollbar">
                            <div class="flex justify-center min-w-max gap-2 px-6">
                                <a href="#starters" class="px-5 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">Předkrmy</a>
                                <a href="#soups" class="px-5 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">Polévky</a>
                                <a href="#czech" class="px-5 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">Česká klasika</a>
                                <a href="#mexico" class="px-5 py-2 rounded-full bg-orange-50 text-orange-800 border border-orange-100 text-sm font-medium hover:bg-orange-600 hover:text-white transition-colors">Mexiko</a>
                                <a href="#steaks" class="px-5 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">Steaky & Burgery</a>
                                <a href="#salads" class="px-5 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">Saláty</a>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-2 gap-x-20 gap-y-20">
                            <!-- Section: Starters -->
                            <div id="starters" class="scroll-mt-40">
                                <h3 class="text-3xl font-serif italic text-stone-900 mb-8 flex items-center">
                                    <span class="w-8 h-[1px] bg-orange-400 mr-4"></span> Předkrmy
                                </h3>
                                <div class="space-y-8">
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Hovězí Carpaccio</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">245 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Tenké plátky svíčkové, bazalkové pesto, parmazánové hobliny, rukola, opečená bagetka</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Tatarák z lososa</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">225 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Jemně sekaný čerstvý losos, kopr, šalotka, citron, opečený toast</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Nachos s Cheddarem</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">165 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Zapečené kukuřičné lupínky, jalapeños, salsa roja, zakysaná smetana, koriandr</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Section: Soups -->
                            <div id="soups" class="scroll-mt-40">
                                <h3 class="text-3xl font-serif italic text-stone-900 mb-8 flex items-center">
                                    <span class="w-8 h-[1px] bg-orange-400 mr-4"></span> Polévky
                                </h3>
                                <div class="space-y-8">
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Silný hovězí vývar</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">85 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">S játrovými knedlíčky, kořenovou zeleninou a domácími nudlemi</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Mexická fazolová</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">95 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Pikantní hustá polévka s klobásou, kukuřicí, zakysanou smetanou a nachos</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Section: Czech -->
                            <div id="czech" class="scroll-mt-40">
                                <h3 class="text-3xl font-serif italic text-stone-900 mb-8 flex items-center">
                                    <span class="w-8 h-[1px] bg-orange-400 mr-4"></span> Česká klasika
                                </h3>
                                <div class="space-y-8">
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Svíčková na smetaně</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">265 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Hovězí zadní špikované, smetanová omáčka, karlovarský knedlík, brusinkový terč</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Konfitované kachní stehno</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">295 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Červené zelí s jablky na víně, bramborový a houskový knedlík, smažená cibulka</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Smažený telecí řízek</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">285 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">XXL řízek smažený na přepuštěném másle, lehký vídeňský bramborový salát, citron</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Section: Mexico -->
                            <div id="mexico" class="scroll-mt-40 p-8 bg-orange-50/50 rounded-[2rem] border border-orange-100">
                                <h3 class="text-3xl font-serif italic text-orange-900 mb-8 flex items-center">
                                    <span class="w-8 h-[1px] bg-orange-500 mr-4"></span> Mexiko Speciality
                                </h3>
                                <div class="space-y-8">
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Fajitas de Pollo</span>
                                            <div class="dots-leader border-orange-200"></div>
                                            <span class="text-lg font-bold text-stone-900">275 Kč</span>
                                        </div>
                                        <p class="text-stone-600 text-sm leading-relaxed">Grilované kuřecí kousky, paprika, cibule, podávané na horké pánvi. 3ks pšeničné tortilly, salsa, guacamole, zakysaná smetana.</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Quesadilla Grande</span>
                                            <div class="dots-leader border-orange-200"></div>
                                            <span class="text-lg font-bold text-stone-900">245 Kč</span>
                                        </div>
                                        <p class="text-stone-600 text-sm leading-relaxed">Velká grilovaná tortilla plněná trhaným vepřovým masem, cheddarem, fazolemi a kukuřicí. Podávaná se salátkem.</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Burrito Bowl</span>
                                            <div class="dots-leader border-orange-200"></div>
                                            <span class="text-lg font-bold text-stone-900">235 Kč</span>
                                        </div>
                                        <p class="text-stone-600 text-sm leading-relaxed">Miska plná rýže, černé fazole, hovězí maso, kukuřice, avokádo, pico de gallo, limetka.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Section: Steaks -->
                            <div id="steaks" class="scroll-mt-40">
                                <h3 class="text-3xl font-serif italic text-stone-900 mb-8 flex items-center">
                                    <span class="w-8 h-[1px] bg-orange-400 mr-4"></span> Steaky & Burgery
                                </h3>
                                <div class="space-y-8">
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">New Fantasy Burger</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">285 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">200g hovězí maso, cheddar, slanina, karamelizovaná cibulka, naše majonéza, hranolky, coleslaw</p>
                                    </div>
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-2">
                                            <span class="text-lg font-medium text-stone-900">Rump Steak (250g)</span>
                                            <div class="dots-leader"></div>
                                            <span class="text-lg font-bold text-stone-900">395 Kč</span>
                                        </div>
                                        <p class="text-stone-500 text-sm leading-relaxed">Šťavnatý steak z jihoamerického hovězího, pepřová omáčka, grilovaná zelenina</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,

            drinks: `
                <div class="bg-stone-50 min-h-screen pt-12 pb-24 fade-enter-active">
                    <div class="max-w-4xl mx-auto px-6">
                        <div class="text-center mb-16 pt-12">
                            <span class="text-stone-500 font-bold tracking-widest text-xs uppercase mb-3 block">Bar</span>
                            <h1 class="text-5xl font-medium text-stone-900 mb-4">Nápojový lístek</h1>
                            <p class="text-stone-500 font-light">Vybraná vína, prémiové destiláty a dokonale načepované pivo.</p>
                        </div>

                        <div class="bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-stone-900/5 border border-stone-200">
                            <div class="grid md:grid-cols-2 gap-x-16 gap-y-12">
                                
                                <!-- Beer -->
                                <div>
                                    <h3 class="text-lg font-bold uppercase tracking-widest text-orange-900 mb-6 pb-2 border-b border-orange-100">Pivo & Cider</h3>
                                    <ul class="space-y-4">
                                        <li class="flex justify-between items-center">
                                            <span>Pilsner Urquell <span class="text-stone-400 text-xs ml-1">0.5l</span></span>
                                            <span class="font-bold tabular-nums">65 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Pilsner Urquell <span class="text-stone-400 text-xs ml-1">0.3l</span></span>
                                            <span class="font-bold tabular-nums">45 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Kozel Černý <span class="text-stone-400 text-xs ml-1">0.5l</span></span>
                                            <span class="font-bold tabular-nums">55 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Birell Pomelo <span class="text-stone-400 text-xs ml-1">0.5l</span></span>
                                            <span class="font-bold tabular-nums">55 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Kingswood Cider <span class="text-stone-400 text-xs ml-1">0.4l</span></span>
                                            <span class="font-bold tabular-nums">65 Kč</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Wine -->
                                <div>
                                    <h3 class="text-lg font-bold uppercase tracking-widest text-orange-900 mb-6 pb-2 border-b border-orange-100">Vína (0.15l)</h3>
                                    <ul class="space-y-4">
                                        <li class="flex justify-between items-center">
                                            <span>Rulandské šedé <span class="text-stone-400 text-xs ml-1">Morava</span></span>
                                            <span class="font-bold tabular-nums">85 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Chardonnay <span class="text-stone-400 text-xs ml-1">Francie</span></span>
                                            <span class="font-bold tabular-nums">95 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Primitivo <span class="text-stone-400 text-xs ml-1">Itálie</span></span>
                                            <span class="font-bold tabular-nums">95 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Prosecco DOC <span class="text-stone-400 text-xs ml-1">0.1l</span></span>
                                            <span class="font-bold tabular-nums">85 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span class="text-orange-700 text-sm cursor-pointer hover:underline">Zobrazit vinnou kartu →</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Coffee -->
                                <div>
                                    <h3 class="text-lg font-bold uppercase tracking-widest text-orange-900 mb-6 pb-2 border-b border-orange-100">Káva & Čaj</h3>
                                    <ul class="space-y-4">
                                        <li class="flex justify-between items-center">
                                            <span>Espresso / Ristretto</span>
                                            <span class="font-bold tabular-nums">55 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Espresso Lungo</span>
                                            <span class="font-bold tabular-nums">55 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Cappuccino</span>
                                            <span class="font-bold tabular-nums">65 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Caffé Latte</span>
                                            <span class="font-bold tabular-nums">75 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Čaj z čerstvé máty/zázvoru</span>
                                            <span class="font-bold tabular-nums">65 Kč</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Spirits -->
                                <div>
                                    <h3 class="text-lg font-bold uppercase tracking-widest text-orange-900 mb-6 pb-2 border-b border-orange-100">Destiláty (0.04l)</h3>
                                    <ul class="space-y-4">
                                        <li class="flex justify-between items-center">
                                            <span>Becherovka</span>
                                            <span class="font-bold tabular-nums">55 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Slivovice Žufánek</span>
                                            <span class="font-bold tabular-nums">85 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Hendrick's Gin</span>
                                            <span class="font-bold tabular-nums">115 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Diplomatico Reserva</span>
                                            <span class="font-bold tabular-nums">135 Kč</span>
                                        </li>
                                        <li class="flex justify-between items-center">
                                            <span>Jack Daniel's</span>
                                            <span class="font-bold tabular-nums">85 Kč</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-12 text-center">
                            <h3 class="text-xl font-serif italic mb-6">Domácí limonády</h3>
                            <div class="flex flex-wrap justify-center gap-4">
                                <span class="px-6 py-2 bg-white rounded-full border border-stone-200 text-stone-600">Malinová</span>
                                <span class="px-6 py-2 bg-white rounded-full border border-stone-200 text-stone-600">Okurková</span>
                                <span class="px-6 py-2 bg-white rounded-full border border-stone-200 text-stone-600">Zázvorová</span>
                                <span class="px-6 py-2 bg-white rounded-full border border-stone-200 text-stone-600">Bezinková</span>
                            </div>
                        </div>
                    </div>
                </div>
            `,

            events: `
                <!-- Hero Event -->
                <section class="relative h-[60vh] flex items-center justify-center overflow-hidden fade-enter-active">
                    <div class="absolute inset-0">
                        <div class="absolute inset-0 bg-stone-900/60 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" class="w-full h-full object-cover" alt="Wedding">
                    </div>
                    <div class="relative z-20 text-center px-6 max-w-4xl">
                        <span class="text-orange-200 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">Svatby • Oslavy • Firemní akce</span>
                        <h1 class="text-5xl lg:text-7xl font-serif italic text-white mb-8">Nezapomenutelné momenty</h1>
                        <p class="text-lg text-stone-200 leading-relaxed font-light">Prožijte svůj velký den v elegantním prostředí s prvotřídní gastronomií a servisem, na který se můžete spolehnout.</p>
                    </div>
                </section>

                <section class="py-24 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
                            <div class="space-y-8">
                                <h2 class="text-4xl font-medium text-stone-900">Prostory pro každou příležitost</h2>
                                <p class="text-stone-600 text-lg leading-relaxed font-light">
                                    Disponujeme variabilními prostory, které přizpůsobíme velikosti vaší akce. Od komorních rodinných obědů v salónku až po velké svatební hostiny v hlavním sále s tanečním parketem.
                                </p>
                                
                                <div class="grid sm:grid-cols-2 gap-6 pt-4">
                                    <div class="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                                        <iconify-icon icon="solar:users-group-two-rounded-bold" class="text-orange-600 text-3xl mb-3"></iconify-icon>
                                        <h3 class="text-lg font-bold text-stone-900 mb-1">Salónek</h3>
                                        <p class="text-sm text-stone-500">Kapacita až 40 osob</p>
                                        <p class="text-xs text-stone-400 mt-2">Soukromí pro rodinné oslavy a školení.</p>
                                    </div>
                                    <div class="p-6 rounded-2xl bg-stone-50 border border-stone-100">
                                        <iconify-icon icon="solar:music-notes-bold" class="text-orange-600 text-3xl mb-3"></iconify-icon>
                                        <h3 class="text-lg font-bold text-stone-900 mb-1">Hlavní sál</h3>
                                        <p class="text-sm text-stone-500">Kapacita až 60 osob</p>
                                        <p class="text-xs text-stone-400 mt-2">Prostor pro tanec a zábavu.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" class="rounded-2xl object-cover h-64 w-full shadow-lg" alt="Event setup">
                                <img src="https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=2070&auto=format&fit=crop" class="rounded-2xl object-cover h-64 w-full shadow-lg mt-8" alt="Party details">
                            </div>
                        </div>

                        <!-- Inquiry Form Section -->
                        <div class="bg-stone-900 rounded-[2.5rem] p-8 lg:p-16 text-center">
                            <h2 class="text-3xl lg:text-4xl font-medium text-white mb-6">Naplánujte si akci u nás</h2>
                            <p class="text-stone-400 mb-10 max-w-xl mx-auto">Napište nám svou představu nebo nám rovnou zavolejte. Rádi se s vámi potkáme osobně a připravíme nabídku na míru.</p>
                            
                            <div class="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="tel:+420727973354" class="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-500 transition-colors">
                                    <iconify-icon icon="solar:phone-calling-linear" class="mr-2 text-xl"></iconify-icon>
                                    +420 727 973 354
                                </a>
                                <a href="mailto:info@newfantasy.cz" class="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-stone-100 transition-colors">
                                    <iconify-icon icon="solar:letter-linear" class="mr-2 text-xl"></iconify-icon>
                                    info@newfantasy.cz
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            `,

            about: `
                <section class="pt-24 pb-20 fade-enter-active">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid lg:grid-cols-2 gap-16 mb-24">
                            <div class="pt-10">
                                <span class="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">Náš příběh</span>
                                <h1 class="text-5xl font-medium text-stone-900 mb-8 leading-tight">Tradice v srdci Libuše <br> <span class="font-serif italic text-stone-500">již od roku 2010</span></h1>
                                <div class="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                                    <p>
                                        Restaurace New Fantasy vznikla s jednoduchou vizí: vytvořit v Praze 4 místo, kde se lidé budou cítit jako doma, ale nají se jako v centru metropole.
                                    </p>
                                    <p>
                                        Původní objekt "U Pejřárny" má dlouhou historii pohostinství. My jsme na ni navázali, ale prostor jsme kompletně zmodernizovali. Interiér kombinuje teplé dřevo, čisté linie a útulné osvětlení.
                                    </p>
                                    <p>
                                        Naší filozofií je poctivost. Nepoužíváme polotovary, ctíme klasické postupy u české kuchyně, ale nebojíme se experimentovat s chutěmi Mexika či moderními burgery.
                                    </p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -top-4 -left-4 w-full h-full border-2 border-orange-200 rounded-3xl z-0"></div>
                                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" class="w-full h-[600px] object-cover rounded-3xl relative z-10 shadow-2xl" alt="Interior Vertical">
                            </div>
                        </div>

                        <!-- Stats/Features -->
                        <div class="grid md:grid-cols-4 gap-8 border-y border-stone-200 py-12">
                            <div class="text-center">
                                <span class="block text-4xl font-serif italic text-orange-600 mb-2">13+</span>
                                <span class="text-sm font-bold uppercase tracking-widest text-stone-500">Let tradice</span>
                            </div>
                            <div class="text-center">
                                <span class="block text-4xl font-serif italic text-orange-600 mb-2">60</span>
                                <span class="text-sm font-bold uppercase tracking-widest text-stone-500">Míst v restauraci</span>
                            </div>
                            <div class="text-center">
                                <span class="block text-4xl font-serif italic text-orange-600 mb-2">40</span>
                                <span class="text-sm font-bold uppercase tracking-widest text-stone-500">Míst na terase</span>
                            </div>
                            <div class="text-center">
                                <span class="block text-4xl font-serif italic text-orange-600 mb-2">100%</span>
                                <span class="text-sm font-bold uppercase tracking-widest text-stone-500">Čerstvost</span>
                            </div>
                        </div>

                        <!-- Gallery Strip -->
                        <div class="pt-24">
                            <h2 class="text-3xl font-medium text-stone-900 mb-10 text-center">Nahlédněte k nám</h2>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <img src="https://images.unsplash.com/photo-1550966871-3ed3c6227685?q=80&w=2070&auto=format&fit=crop" class="rounded-2xl h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Jídlo">
                                <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop" class="rounded-2xl h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Steak">
                                <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1974&auto=format&fit=crop" class="rounded-2xl h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Interiér">
                                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" class="rounded-2xl h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" alt="Káva">
                            </div>
                        </div>
                    </div>
                </section>
            `,

            contact: `
                <div class="min-h-screen pt-24 pb-12 fade-enter-active">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-16 pt-8">
                            <h1 class="text-5xl font-medium text-stone-900 mb-6">Kontaktujte nás</h1>
                            <p class="text-stone-500 text-lg">Těšíme se na vaši návštěvu. Rezervujte si stůl online nebo telefonicky.</p>
                        </div>

                        <div class="grid lg:grid-cols-3 gap-8">
                            <!-- Left Column: Info Cards -->
                            <div class="space-y-6 flex flex-col">
                                <!-- Address Card -->
                                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex-1">
                                    <div class="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-6">
                                        <iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
                                    </div>
                                    <h3 class="text-xl font-bold text-stone-900 mb-2">Adresa</h3>
                                    <p class="text-stone-600 mb-4 leading-relaxed">
                                        U Pejřárny 1044/1a<br>
                                        142 00 Praha 4 – Libuš
                                    </p>
                                    <a href="https://maps.google.com/?q=New+Fantasy+Praha+Libuš" target="_blank" class="text-orange-600 font-medium text-sm hover:underline inline-flex items-center">
                                        Navigovat na místo <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
                                    </a>
                                </div>

                                <!-- Contact Card -->
                                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex-1">
                                    <div class="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-6">
                                        <iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                                    </div>
                                    <h3 class="text-xl font-bold text-stone-900 mb-2">Rezervace</h3>
                                    <p class="text-stone-500 text-sm mb-4">Pro rezervace prosím volejte v otevírací době.</p>
                                    <a href="tel:+420727973354" class="text-2xl font-serif italic text-stone-900 hover:text-orange-600 transition-colors block mb-2">+420 727 973 354</a>
                                    <a href="mailto:info@newfantasy.cz" class="text-stone-600 hover:text-orange-600 transition-colors">info@newfantasy.cz</a>
                                </div>

                                <!-- Hours Card -->
                                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex-1">
                                    <div class="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-6">
                                        <iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
                                    </div>
                                    <h3 class="text-xl font-bold text-stone-900 mb-4">Otevírací doba</h3>
                                    <ul class="space-y-3">
                                        <li class="flex justify-between text-stone-600 border-b border-stone-50 pb-2">
                                            <span>Pondělí – Sobota</span>
                                            <span class="font-medium text-stone-900">11:00 – 22:00</span>
                                        </li>
                                        <li class="flex justify-between text-stone-600">
                                            <span>Neděle</span>
                                            <span class="font-medium text-orange-600">Zavřeno</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Right Column: Map -->
                            <div class="lg:col-span-2 min-h-[500px] h-full">
                                <div class="w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-900/5 border border-stone-200 relative bg-stone-100">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.3804297686566!2d14.4638!3d50.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b910000000001%3A0x0!2sU%20Pej%C5%99%C3%A1rny%201044%2F1a%2C%20142%2000%20Praha-Libu%C5%A1!5e0!3m2!1scs!2scz!4v1620000000000!5m2!1scs!2scz" width="100%" height="100%" style="border:0; position: absolute; inset: 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="grayscale hover:grayscale-0 transition-all duration-700"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        };

        const app = document.getElementById('app');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileToggle = document.getElementById('mobile-toggle');
        const header = document.querySelector('header');

        // Router
        function navigate(pageId) {
            // Default to home if not found
            const content = pages[pageId] || pages['home'];
            
            // Render
            app.innerHTML = content;
            
            // Scroll top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update URL hash without scroll jump
            history.pushState(null, null, `#${pageId}`);
            
            // Active State in Nav
            document.querySelectorAll('.nav-item').forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('text-stone-900', 'bg-stone-50');
                    btn.classList.remove('text-stone-600');
                } else {
                    btn.classList.remove('text-stone-900', 'bg-stone-50');
                    btn.classList.add('text-stone-600');
                }
            });

            // Close Mobile Menu
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }

        // Event Listeners
        mobileToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if(isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });

        // Handle Back Button
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '');
            navigate(hash || 'home');
        });

        // Initial Load
        document.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash.replace('#', '');
            navigate(hash || 'home');
        });

        // Sticky Header Effect
        window.addEventListener('scroll', () => {
            if(window.scrollY > 20) {
                header.classList.add('shadow-sm', 'bg-white/95');
                header.classList.remove('bg-white/80');
            } else {
                header.classList.remove('shadow-sm', 'bg-white/95');
                header.classList.add('bg-white/80');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group cursor-pointer" href="#home" onclick="navigate('home')">
<div className="w-10 h-10 bg-stone-900 text-white flex items-center justify-center rounded-full font-serif text-xl italic group-hover:bg-orange-600 transition-colors duration-300">F</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-widest uppercase text-stone-900 leading-none">New Fantasy</span>
<span className="text-[10px] text-stone-500 uppercase tracking-widest leading-none mt-1 group-hover:text-orange-600 transition-colors">Restaurant</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1">
<button className="nav-item px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all" data-target="home" onclick="navigate('home')">Domů</button>
<button className="nav-item hover:text-stone-900 hover:bg-stone-50 transition-all text-sm font-medium text-stone-600 rounded-full pt-2 pr-4 pb-2 pl-4" data-target="lunch" onclick="navigate('lunch')">Polední menu</button>
<button className="nav-item px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all" data-target="menu" onclick="navigate('menu')">Stálý lístek</button>
<button className="nav-item px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all" data-target="drinks" onclick="navigate('drinks')">Nápoje</button>
<button className="nav-item hover:text-stone-900 hover:bg-stone-50 transition-all text-sm font-medium text-stone-600 rounded-full pt-2 pr-4 pb-2 pl-4" data-target="events" onclick="navigate('events')">Služby
</button>
<button className="nav-item px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all" data-target="about" onclick="navigate('about')">O nás</button>
<button className="nav-item px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-full transition-all" data-target="contact" onclick="navigate('contact')">Kontakt</button>
</nav>

<button className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-orange-700 transition-all hover:shadow-lg shadow-stone-900/20 active:scale-95" href="tel:+420727973354">
<iconify-icon className="" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="">Rezervovat</span>
</a>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl lg:hidden flex-col p-4" id="mobile-menu">
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('home')">Domů</button>
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('lunch')">Polední menu</button>
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('menu')">Stálý lístek</button>
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('drinks')">Nápoje</button>
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('events')">Svatby a akce</button>
<button className="w-full text-left p-3 text-stone-900 font-medium hover:bg-stone-50 rounded-lg" onclick="navigate('about')">O nás</button>
<button className="w-full text-left p-3 text-orange-700 font-medium hover:bg-orange-50 rounded-lg" onclick="navigate('contact')">Kontakt</button>
</div>
</header>

<main className="flex-grow pt-20 min-h-screen" id="app">
<div className="fade-enter-active pt-10 pb-20">
<div className="bg-stone-900 text-white py-24 mb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-orange-400 font-bold tracking-widest text-xs uppercase mb-4 block">Pondělí — Pátek (11:00 — 14:00)</span>
<h1 className="text-5xl md:text-6xl font-medium mb-6">Polední Menu</h1>
<p className="text-stone-400 max-w-lg mx-auto text-lg font-light">Čerstvé suroviny, rychlý servis a skvělá cena. <br/>Přijďte si vychutnat pauzu na oběd.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 -mt-24 relative z-10">
<div className="bg-white rounded-[2rem] shadow-2xl shadow-stone-900/10 border border-stone-100 overflow-hidden">

<div className="bg-orange-50/50 border-b border-orange-100 p-6 text-center">
<h3 className="text-2xl italic text-orange-900 font-serif">Dnešní nabídka</h3>
<p className="text-orange-800/60 text-xs font-bold uppercase tracking-widest mt-2">12. Října 2023</p>
</div>
<div className="md:p-12 pt-8 pr-8 pb-8 pl-8 space-y-12">

<div>
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] bg-stone-200 flex-1"></div>
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Polévka</span>
<div className="h-[1px] bg-stone-200 flex-1"></div>
</div>
<div className="flex items-baseline justify-between group">
<div>
<h4 className="group-hover:text-orange-700 transition-colors text-lg font-medium text-stone-900" data-cms-collection="poledn-menu" data-cms-field="n-zev" data-cms-item-slug="1" data-cms-type="text">Žampionový krém</h4>
<p className="text-sm text-stone-500 mt-1" data-cms-collection="poledn-menu" data-cms-field="popis" data-cms-item-slug="1" data-cms-type="text">idk polivka</p>
</div>
<div className="dots-leader hidden sm:block"></div>
<span className="tabular-nums text-lg font-bold text-stone-900" data-cms-collection="poledn-menu" data-cms-field="cena" data-cms-item-slug="1" data-cms-type="number">45</span>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] bg-stone-200 flex-1"></div>
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Hlavní chody</span>
<div className="h-[1px] bg-stone-200 flex-1"></div>
</div>
<div className="space-y-8">
<div className="flex items-baseline justify-between group">
<div className="max-w-[80%]">
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Svíčková na smetaně</h4>
<p className="text-stone-500 text-sm mt-1">hovězí zadní špikované, domácí houskový knedlík, brusinky</p>
</div>
<div className="dots-leader hidden sm:block"></div>
<span className="text-lg font-bold text-stone-900 tabular-nums">165,-</span>
</div>
<div className="flex items-baseline justify-between group">
<div className="max-w-[80%]">
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Vepřový řízek z krkovice</h4>
<p className="text-stone-500 text-sm mt-1">smažený na sádle, lehký bramborový salát s cibulkou</p>
</div>
<div className="dots-leader hidden sm:block"></div>
<span className="text-lg font-bold text-stone-900 tabular-nums">155,-</span>
</div>
<div className="flex items-baseline justify-between group">
<div className="max-w-[80%]">
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Caesar salát s kuřecím masem</h4>
<p className="text-stone-500 text-sm mt-1">římský salát, ančovičkový dresink, krutony, parmazán, slanina</p>
</div>
<div className="dots-leader hidden sm:block"></div>
<span className="text-lg font-bold text-stone-900 tabular-nums">145,-</span>
</div>
<div className="flex items-baseline justify-between group">
<div className="max-w-[80%]">
<h4 className="text-lg font-medium text-stone-900 group-hover:text-orange-700 transition-colors">Indické Butter Chicken</h4>
<p className="text-stone-500 text-sm mt-1">jemná máslová omáčka, kuřecí kousky, rýže basmati, koriandr</p>
</div>
<div className="dots-leader hidden sm:block"></div>
<span className="text-lg font-bold text-stone-900 tabular-nums">159,-</span>
</div>
</div>
</div>
</div>
<div className="bg-stone-50 p-6 text-center border-t border-stone-100">
<button className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon className="mr-2 text-base" icon="solar:download-minimalistic-linear"></iconify-icon>
                                    Stáhnout menu v PDF
                                </button>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<div className="flex items-center gap-2 text-white mb-2">
<span className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center font-serif italic">F</span>
<span className="font-serif text-xl italic">New Fantasy</span>
</div>
<p className="text-sm leading-relaxed text-stone-500">
                        Moderní česká gastronomie v srdci Libuše. Tradice, kvalita a rodinná atmosféra od roku 2010.
                    </p>
<div className="flex gap-4 pt-2">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Navigace</h4>
<ul className="space-y-2 text-sm">
<li className=""><button className="hover:text-orange-400 transition-colors" onclick="navigate('lunch')">Polední menu</button></li>
<li className=""><button className="hover:text-orange-400 transition-colors" onclick="navigate('menu')">Stálý lístek</button></li>
<li className=""><button className="hover:text-orange-400 transition-colors" onclick="navigate('events')">Svatby a oslavy</button></li>
<li><button className="hover:text-orange-400 transition-colors" onclick="navigate('contact')">Rezervace</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-stone-500" icon="solar:map-point-linear"></iconify-icon>
<span>U Pejřárny 1044/1a<br/>142 00 Praha 4 – Libuš</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white" href="tel:+420727973354">+420 727 973 354</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white" href="mailto:info@newfantasy.cz">info@newfantasy.cz</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Otevírací doba</h4>
<ul className="space-y-2 text-sm border-l border-stone-800 pl-4">
<li className="flex justify-between">
<span>Po – So</span>
<span className="text-white">11:00 – 22:00</span>
</li>
<li className="flex justify-between">
<span>Neděle</span>
<span className="text-orange-500">Zavřeno</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center text-stone-600">
<p>© 2023 New Fantasy Restaurant. Všechna práva vyhrazena.</p>
<div className="mt-2 md:mt-0 flex gap-4">
<a className="hover:text-stone-400" href="#">Ochrana údajů</a>
<a className="hover:text-stone-400" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
