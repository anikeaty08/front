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
serif: ['Lora', 'serif'],
},
colors: {
coffee: {
50: '#F9F8F6',
100: '#F3F1ED',
200: '#EBE9E4',
300: '#D6D3D1',
800: '#4A3B32', // Dark text
900: '#2C2420', // Almost black
},
rust: {
500: '#A85D45', // Accent color
600: '#8B4A36',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

              const nav = document.querySelector('nav');
              const aboutSection = document.getElementById('about');

              function updateNav() {
                  if (!aboutSection) return;
                  if (window.scrollY >= (aboutSection.offsetTop - 80)) {
                      nav.classList.remove('bg-transparent');
                      nav.classList.add('bg-coffee-50', 'shadow-sm');
                  } else {
                      nav.classList.add('bg-transparent');
                      nav.classList.remove('bg-coffee-50', 'shadow-sm');
                  }
              }

              window.addEventListener('scroll', updateNav);
              updateNav();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-coffee-200/50 transition-all duration-300 bg-transparent">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-xl tracking-tight font-serif text-coffee-900" href="#">
          Shape Your Better Self
        </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-coffee-800/80">
<a className="hover:text-rust-500 transition-colors" href="#about">
            O mnie
          </a>
<a className="hover:text-rust-500 transition-colors" href="#program">
            Program
          </a>
<a className="hover:text-rust-500 transition-colors" href="#contact">
            Kontakt
          </a>
<a className="px-5 py-2.5 bg-coffee-800 text-white hover:bg-coffee-900 transition-colors text-xs uppercase tracking-wide font-semibold rounded-sm" href="#join">
            Rozpocznij praktykę
          </a>
</div>

<button className="md:hidden text-coffee-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Nature Background" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-coffee-50/20 via-coffee-50/40 to-coffee-50"></div>
<div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-[-5vh]">
<div className="mb-6 flex justify-center">
<span className="inline-block text-[10px] uppercase tracking-[0.2em] text-coffee-800/70 font-medium">
            Piotr Bernaś · RYT-300
          </span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-coffee-900 tracking-tight leading-[1.05] mb-8">
          Shape Your
          <br/>
<span className="text-rust-500 italic">Better Self</span>
</h1>
<p className="text-lg md:text-xl text-coffee-800/70 font-light max-w-lg mx-auto leading-relaxed mb-10">
          Odkryj naturalne narzędzia do samoregulacji i odzyskaj wewnętrzną
          siłę. Bez zbędnej teorii, 90% praktyki.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-coffee-800 text-white text-sm font-medium hover:bg-coffee-900 transition-colors rounded-sm shadow-lg shadow-coffee-900/10" href="#join">
            Rozpocznij praktykę
          </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-coffee-800/20 text-coffee-900 text-sm font-medium hover:border-coffee-800 transition-colors rounded-sm backdrop-blur-sm" href="#about">
            Dowiedz się więcej
          </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-coffee-50 relative" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl shadow-coffee-900/10 grayscale-[10%] contrast-[1.05]">

<img alt="Piotr Bernaś" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863b48d6-7b5b-4a0f-b5a4-4473adfc6518_1600w.jpg"/>
</div>
</div>

<div className="lg:pl-8">
<span className="block text-xs font-semibold tracking-widest text-rust-500 uppercase mb-4">
              O mnie
            </span>
<h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-8 tracking-tight leading-tight">
              Od fotografii wojennej do wewnętrznego spokoju
            </h2>
<div className="space-y-6 text-coffee-800/70 font-light text-lg leading-relaxed">
<p>
                Przez 20 lat dokumentowałem konflikty zbrojne na całym świecie
                jako fotoreporter. Byłem świadkiem rzeczy, które zmieniają
                człowieka na zawsze. W pewnym momencie zrozumiałem, że
                potrzebuję narzędzi, żeby wrócić do siebie.
              </p>
<p>
                Joga i medytacja nie były moim pierwszym wyborem — były ostatnią
                deską ratunku. Dziś, po dekadzie codziennej praktyki i
                certyfikacji RYT-300, prowadzę innych przez ten sam proces
                transformacji.
              </p>
<p className="font-medium text-coffee-900">
                Nie jestem guru. Nie sprzedaję marzeń. Oferuję konkretne,
                sprawdzone narzędzia dla tych, którzy są gotowi na prawdziwą
                pracę nad sobą.
              </p>
</div>

<div className="h-px w-24 bg-rust-500/30 my-10"></div>

<div className="grid grid-cols-3 gap-8">
<div>
<span className="block text-3xl font-serif text-coffee-900">
                  20+
                </span>
<span className="text-xs text-coffee-500 uppercase tracking-wide mt-1 block">
                  lat praktyki
                </span>
</div>
<div>
<span className="block text-3xl font-serif text-coffee-900">
                  RYT-300
                </span>
<span className="text-xs text-coffee-500 uppercase tracking-wide mt-1 block">
                  certyfikacja
                </span>
</div>
<div>
<span className="block text-3xl font-serif text-coffee-900">
                  500+
                </span>
<span className="text-xs text-coffee-500 uppercase tracking-wide mt-1 block">
                  uczestników
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] border-t border-coffee-200/40" id="program">
<div className="max-w-7xl mx-auto px-6 md:px-12">

<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs font-semibold tracking-widest text-rust-500 uppercase mb-4 block">
            Program Transformacji
          </span>
<h2 className="text-4xl md:text-5xl font-serif text-coffee-900 tracking-tight leading-tight mb-6">
            21 dni, które zmienią Twoje życie
          </h2>
<p className="text-coffee-600 font-light text-lg">
            Kompleksowy program łączący jogę, workout, techniki oddechowe,
            morsowanie i regenerację. Bez zbędnej teorii — 90% praktyki.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 bg-coffee-50 rounded-sm border border-transparent hover:border-coffee-200 hover:shadow-lg transition-all duration-300 group">
<div className="text-rust-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-serif text-coffee-900 mb-3">
              Joga &amp; Workout
            </h3>
<p className="text-sm text-coffee-600 font-light leading-relaxed">
              Praktyka dostosowana do Twojego ciała i poziomu zaawansowania.
              Budowanie siły funkcjonalnej.
            </p>
</div>

<div className="p-8 bg-coffee-50 rounded-sm border border-transparent hover:border-coffee-200 hover:shadow-lg transition-all duration-300 group">
<div className="text-rust-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-serif text-coffee-900 mb-3">Pranayama</h3>
<p className="text-sm text-coffee-600 font-light leading-relaxed">
              Techniki oddechowe regulujące układ nerwowy. Odzyskaj kontrolę nad
              stresem w kilka minut.
            </p>
</div>

<div className="p-8 bg-coffee-50 rounded-sm border border-transparent hover:border-coffee-200 hover:shadow-lg transition-all duration-300 group">
<div className="text-rust-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-serif text-coffee-900 mb-3">Morsowanie</h3>
<p className="text-sm text-coffee-600 font-light leading-relaxed">
              Ekspozycja na zimno jako narzędzie do budowania odporności i
              przełamywania barier mentalnych.
            </p>
</div>

<div className="p-8 bg-coffee-50 rounded-sm border border-transparent hover:border-coffee-200 hover:shadow-lg transition-all duration-300 group">
<div className="text-rust-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="moon" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-serif text-coffee-900 mb-3">Regeneracja</h3>
<p className="text-sm text-coffee-600 font-light leading-relaxed">
              Yoga Nidra i techniki głębokiego odpoczynku. Nauka efektywnego snu
              i regeneracji.
            </p>
</div>
</div>

<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-coffee-800 text-white text-sm font-medium hover:bg-coffee-900 transition-colors rounded-sm shadow-lg shadow-coffee-900/10" href="#join">
            Dołącz do programu
          </a>
</div>
</div>
</section>

<section className="py-16 bg-coffee-200">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-6">
<div className="p-4 bg-coffee-100/50 rounded-full text-rust-600 shrink-0">
<i className="w-8 h-8" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-serif text-coffee-900 mb-2">
                Yoga Retreats
              </h3>
<p className="text-coffee-700 font-light max-w-md">
                Wielodniowe wyjazdy łączące praktykę z odkrywaniem nowych
                miejsc. Góry, morze, natura.
              </p>
</div>
</div>
<div className="shrink-0 w-full md:w-auto">
<a className="w-full md:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-coffee-800/30 text-coffee-900 text-sm font-medium hover:border-coffee-800 hover:bg-white/30 transition-all rounded-sm" href="#">
              Zobacz nadchodzące wyjazdy
            </a>
</div>
</div>
</div>
</section>

<footer className="bg-[#2C2420] text-coffee-200/60 py-16 md:py-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<h5 className="text-white text-xl font-serif tracking-tight mb-6">
              Shape Your Better Self
            </h5>
<p className="font-light text-coffee-300 max-w-sm mb-8 leading-relaxed text-sm">
              Profesjonalne podejście do jogi i samoregulacji.
              <br/>
              Piotr Bernaś.
            </p>
<div className="flex gap-4">
<a className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h6 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">
              Oferta
            </h6>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Program 21 Dni
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Retreats
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Sesje 1:1
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Dla firm
                </a>
</li>
</ul>
</div>
<div>
<h6 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">
              Kontakt
            </h6>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2">
<a className="hover:text-white transition-colors" href="mailto:kontakt@piotrbernas.pl">
                  kontakt@piotrbernas.pl
                </a>
</li>
<li className="flex items-center gap-2">
<span className="hover:text-white cursor-pointer transition-colors">
                  +48 000 000 000
                </span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-coffee-400">
<p>© 2024 Piotr Bernaś. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Polityka Prywatności
            </a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
