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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#FDF8F3]/90 backdrop-blur-md border-b border-[#2D2D2D]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#8B2635] text-[#FDF8F3] flex items-center justify-center font-serif text-xl rounded-sm group-hover:bg-[#7A222F] transition-colors">
                    M
                </div>
<span className="font-serif text-xl tracking-tight font-medium text-[#2D2D2D]">Divadlo MATĚŘOV</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-[#2D2D2D]/80">
<a className="hover:text-[#8B2635] transition-colors" href="#repertuar">Repertoár</a>
<a className="hover:text-[#8B2635] transition-colors" href="#kalendar">Kalendář</a>
<a className="hover:text-[#8B2635] transition-colors" href="#historie">Historie</a>
<a className="hover:text-[#8B2635] transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-[#8B2635] transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#2D2D2D] text-[#FDF8F3] text-xs font-medium uppercase tracking-wider hover:bg-[#8B2635] transition-colors duration-300 rounded-sm" href="#pro-poradatele">
<span>Objednat</span>
<iconify-icon icon="solar:ticket-linear" width="16"></iconify-icon>
</a>
<button className="lg:hidden p-2 text-[#2D2D2D]">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Divadelní scéna" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D]/40 via-[#2D2D2D]/20 to-[#FDF8F3]"></div>
</div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-16 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#FDF8F3]/30 bg-[#FDF8F3]/10 backdrop-blur-sm rounded-full text-[#FDF8F3] text-xs uppercase tracking-widest">
<iconify-icon className="text-[#C9A227]" icon="solar:star-linear"></iconify-icon>
<span>Založeno 1921</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                Více než století <br/>
<i className="font-serif font-normal text-[#FDF8F3]/90">příběhů na jevišti</i>
</h1>
<p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Divadlo MATĚŘOV – místo, kde se tradice potkává s moderním ochotnickým divadlem. Hrajeme s radostí, nadhledem a chutí být spolu.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#8B2635] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#75202D] transition-all flex items-center justify-center gap-2 rounded-sm shadow-lg shadow-[#8B2635]/20" href="#kalendar">
                    Kalendář akcí
                    <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/40 text-white text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-[#2D2D2D] transition-all rounded-sm backdrop-blur-sm" href="#repertuar">
                    Náš repertoár
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-[#C9A227]/20 rotate-2 rounded-sm group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Muzikál Kde nebylo nic" className="relative w-full h-[500px] object-cover rounded-sm shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-sm">
<span className="text-[#8B2635] font-serif italic text-lg">Aktuální hit sezóny</span>
</div>
</div>
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-[#8B2635] text-xs font-semibold uppercase tracking-widest">
<div className="w-8 h-[1px] bg-[#8B2635]"></div>
                    Doporučujeme
                </div>
<h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] tracking-tight">
                    Kde nebylo nic
                </h2>
<p className="text-[#2D2D2D]/70 text-lg leading-relaxed font-light">
                    Autorská hořká hudební komedie o ochotnickém divadle, která vás rozesměje i dojme. Nahlédněte pod pokličku vesnického souboru, který se rozhodl dobýt svět velkého umění.
                </p>
<div className="flex items-center gap-6 py-6 border-y border-[#2D2D2D]/10">
<span className="text-xs text-[#2D2D2D]/50 uppercase tracking-wider">Viděli jste v médiích:</span>
<div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">

<div className="h-6 w-16 bg-[#2D2D2D]/10 flex items-center justify-center text-[10px] font-bold">ČT art</div>
<div className="h-6 w-16 bg-[#2D2D2D]/10 flex items-center justify-center text-[10px] font-bold">ČRo</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#2D2D2D] font-medium border-b border-[#2D2D2D]/30 pb-0.5 hover:text-[#8B2635] hover:border-[#8B2635] transition-colors" href="#">
                    Více o muzikálu
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 border-y border-[#2D2D2D]/5" id="kalendar">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] tracking-tight mb-3">Nejbližší představení</h2>
<p className="text-[#2D2D2D]/60 font-light">Přijďte se podívat, hrajeme doma i na cestách.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#8B2635] hover:opacity-80 transition-opacity" href="#">
                    Zobrazit celý kalendář
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group relative bg-[#FDF8F3] p-8 border border-[#2D2D2D]/5 hover:border-[#C9A227]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/5 rounded-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-[#8B2635] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
<div className="flex items-start justify-between mb-6">
<div className="flex flex-col">
<span className="text-4xl font-serif text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors">12</span>
<span className="text-sm uppercase tracking-wider text-[#2D2D2D]/50">Říjen</span>
</div>
<span className="px-3 py-1 bg-white border border-[#2D2D2D]/10 rounded-full text-xs text-[#2D2D2D]/60">19:00</span>
</div>
<h3 className="font-serif text-xl mb-2 text-[#2D2D2D]">Kde nebylo nic</h3>
<div className="flex items-center gap-2 text-sm text-[#2D2D2D]/60 mb-6">
<iconify-icon className="text-[#C9A227]" icon="solar:map-point-linear"></iconify-icon>
                        Obecní dům, Starý Matěřov
                    </div>
<a className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors flex items-center gap-1" href="#">
                        Rezervovat
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</article>

<article className="group relative bg-[#FDF8F3] p-8 border border-[#2D2D2D]/5 hover:border-[#C9A227]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/5 rounded-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-[#2D2D2D] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
<div className="flex items-start justify-between mb-6">
<div className="flex flex-col">
<span className="text-4xl font-serif text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors">24</span>
<span className="text-sm uppercase tracking-wider text-[#2D2D2D]/50">Říjen</span>
</div>
<span className="px-3 py-1 bg-white border border-[#2D2D2D]/10 rounded-full text-xs text-[#2D2D2D]/60">15:00</span>
</div>
<h3 className="font-serif text-xl mb-2 text-[#2D2D2D]">O perníkové chaloupce</h3>
<div className="flex items-center gap-2 text-sm text-[#2D2D2D]/60 mb-6">
<iconify-icon className="text-[#C9A227]" icon="solar:map-point-linear"></iconify-icon>
                        Divadlo Karla Pippicha, Chrudim
                    </div>
<a className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors flex items-center gap-1" href="#">
                        Více info
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</article>

<article className="group relative bg-[#FDF8F3] p-8 border border-[#2D2D2D]/5 hover:border-[#C9A227]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/5 rounded-sm">
<div className="absolute top-0 left-0 w-1 h-full bg-[#8B2635] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
<div className="flex items-start justify-between mb-6">
<div className="flex flex-col">
<span className="text-4xl font-serif text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors">05</span>
<span className="text-sm uppercase tracking-wider text-[#2D2D2D]/50">Listopad</span>
</div>
<span className="px-3 py-1 bg-white border border-[#2D2D2D]/10 rounded-full text-xs text-[#2D2D2D]/60">19:30</span>
</div>
<h3 className="font-serif text-xl mb-2 text-[#2D2D2D]">Naši furianti</h3>
<div className="flex items-center gap-2 text-sm text-[#2D2D2D]/60 mb-6">
<iconify-icon className="text-[#C9A227]" icon="solar:map-point-linear"></iconify-icon>
                        Kulturní dům, Pardubice
                    </div>
<a className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#8B2635] transition-colors flex items-center gap-1" href="#">
                        Rezervovat
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5 space-y-8">
<div className="inline-flex items-center gap-2 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
<iconify-icon icon="solar:masks-linear" width="16"></iconify-icon>
                    Kde nás najdete
                </div>
<h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D] tracking-tight">
                    Domovská scéna <br/>
<span className="italic text-[#8B2635]">U Lípy</span>
</h2>
<p className="text-[#2D2D2D]/70 leading-relaxed font-light">
                    Naše srdce bije v Obecním domě U Lípy ve Starém Matěřově. Zde zkoušíme, tvoříme kulisy a odehráváme premiéry. Rádi ale hostujeme po celém Pardubickém kraji.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8B2635] mt-1" icon="solar:map-point-bold"></iconify-icon>
<span className="text-sm text-[#2D2D2D]/80">Starý Matěřov 24, 530 02 (Obecní dům)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8B2635] mt-1" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-[#2D2D2D]/80">info@divadlomaterov.cz</span>
</li>
</ul>
</div>
<div className="lg:col-span-7 relative h-[400px] bg-[#E5E5E5] rounded-sm overflow-hidden group">

<div className="absolute inset-0 bg-[#2D2D2D] flex items-center justify-center">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.432657388562!2d15.72895237685616!3d50.05943407152011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcb76e0539f3b%3A0x67c2685934988710!2zU3RhcsO9IE1hd9SZb3YsIDUzMCAwMiBTdGFyw70gTWF0xJvFmW92!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>

<div className="absolute inset-0 bg-[#8B2635]/10 pointer-events-none mix-blend-multiply"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#2D2D2D] py-24 px-6 relative overflow-hidden" id="pro-poradatele">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227] opacity-5 blur-[100px] rounded-full"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<iconify-icon className="text-[#C9A227] text-4xl mb-6 opacity-80" icon="solar:curtains-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-5xl text-[#FDF8F3] tracking-tight mb-6">
                Přivezeme divadlo k vám
            </h2>
<p className="text-[#FDF8F3]/60 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-2xl mx-auto">
                Hledáte kulturní program pro vaši obec nebo akci? Disponujeme vlastní technikou a flexibilním repertoárem.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto px-8 py-4 bg-[#C9A227] text-[#2D2D2D] text-sm font-semibold uppercase tracking-wide hover:bg-[#D4B040] transition-colors rounded-sm shadow-lg shadow-[#C9A227]/10" href="#">
                    Objednat představení
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-[#FDF8F3]/20 text-[#FDF8F3] text-sm font-medium uppercase tracking-wide hover:bg-[#FDF8F3]/10 transition-colors rounded-sm" href="#">
                    Technické požadavky
                </a>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="font-serif text-3xl text-[#2D2D2D] tracking-tight">Ze zákulisí</h2>
<a className="text-sm font-medium text-[#2D2D2D]/60 hover:text-[#8B2635] flex items-center gap-1 transition-colors" href="#">
                @divadlomaterov
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer">
<img alt="Zákulisí" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#2D2D2D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</div>

<div className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer md:mt-8">
<img alt="Herci" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#2D2D2D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</div>

<div className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer">
<img alt="Detail kostýmu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-[#2D2D2D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</div>

<div className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer md:mt-8">
<img alt="Světla" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#2D2D2D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-16 text-center">
<blockquote className="font-serif text-xl md:text-2xl italic text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed">
                "Divadlo pro nás není jen vystoupení. Je to setkávání, radost, práce i společný čas strávený na jevišti."
            </blockquote>
</div>
</section>

<footer className="bg-[#2D2D2D] text-[#FDF8F3] pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#8B2635] text-[#FDF8F3] flex items-center justify-center font-serif text-lg rounded-sm">M</div>
<span className="font-serif text-xl tracking-tight font-medium">Divadlo MATĚŘOV</span>
</div>
<p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
                    Ochotnický spolek s tradicí od roku 1921. Přinášíme radost divákům v Pardubickém kraji skrze pohádky, komedie i dramata.
                </p>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-[#8B2635] hover:border-[#8B2635] transition-all text-white/70 hover:text-white" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-[#8B2635] hover:border-[#8B2635] transition-all text-white/70 hover:text-white" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-lg">Menu</h4>
<ul className="space-y-3 text-sm text-white/60 font-light">
<li><a className="hover:text-[#C9A227] transition-colors" href="#repertoar">Repertoár</a></li>
<li><a className="hover:text-[#C9A227] transition-colors" href="#kalendar">Kalendář akcí</a></li>
<li><a className="hover:text-[#C9A227] transition-colors" href="#o-nas">O souboru</a></li>
<li><a className="hover:text-[#C9A227] transition-colors" href="#nabor">Hledáme členy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-lg">Kontakt</h4>
<ul className="space-y-3 text-sm text-white/60 font-light">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-[#C9A227]" icon="solar:user-linear"></iconify-icon>
<span>Jan Novák (Principál)</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-[#C9A227]" icon="solar:phone-linear"></iconify-icon>
<span>+420 123 456 789</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-[#C9A227]" icon="solar:letter-linear"></iconify-icon>
<span>info@divadlomaterov.cz</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
<span>© 2023 Divadlo MATĚŘOV. Všechna práva vyhrazena.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
