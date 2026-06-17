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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-4 right-4 z-50 bg-white border border-gray-100 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm text-xs font-medium text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors">
<iconify-icon className="text-[#F5A800]" height="16" icon="solar:sun-linear" strokeWidth="1.5" width="16"></iconify-icon>
      Diena
      <iconify-icon className="text-gray-400" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex-shrink-0" href="#">
<img alt="Namulis Logo" className="h-10 w-auto" src="https://namulis.flywheelsites.com/wp-content/themes/namulis-child/assets/images/namulis_logo_sumazintas.png"/>
</a>
<nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wide uppercase" style={{fontFamily: '\'Poppins\', sans-serif'}}>
<a className="text-[#EF5E3A] hover:opacity-70 transition-opacity" href="#">
            Pradžia
          </a>
<a className="text-[#4CA146] hover:opacity-70 transition-opacity" href="#">
            Video
          </a>
<a className="text-[#046BD2] hover:opacity-70 transition-opacity" href="#">
            Rinkiniai
          </a>
<a className="text-[#6C599A] hover:opacity-70 transition-opacity" href="#">
            Knygos
          </a>
<a className="text-[#F5A800] hover:opacity-70 transition-opacity" href="#">
            Žaislai
          </a>
<a className="text-[#4CA146] hover:opacity-70 transition-opacity" href="#">
            Narystė
          </a>
</nav>
<div className="flex items-center gap-6">
<button className="text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon height="22" icon="solar:magnifier-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-gray-600 hover:text-gray-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EF5E3A] rounded-full"></span>
</button>
</div>
</div>
</header>

<section className="relative bg-[#FFF9F6] overflow-hidden border-b border-gray-100">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-center">
<div className="px-6 py-20 lg:pr-20 z-10">
<h1 className="text-5xl md:text-6xl leading-[1.1] font-medium text-gray-900 tracking-tight mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Vieta, kur vakarai
            <br/>
            tampa ramesni
          </h1>
<p className="text-xl text-gray-600 mb-6">
            Istorijos, video, pasakos ir žaidimai vienoje vietoje — kad vaikui
            būtų lengviau nurimti, o jums — būti kartu.
          </p>
<div className="flex items-center gap-3 text-lg text-gray-500 italic mb-10 bg-white/60 p-4 rounded-xl inline-flex shadow-sm border border-orange-500/10">
<iconify-icon className="text-[#6C599A]" height="24" icon="solar:moon-sleep-linear" width="24"></iconify-icon>
            Ne triukšmui. Ne skubėjimui. Tik tiek, kiek reikia nurimti.
          </div>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-[#EF5E3A] hover:bg-[#D94F2E] text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#">
              Žiūrėti video
              <iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
<a className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3.5 rounded-lg font-medium text-lg transition-all shadow-sm hover:border-gray-300" href="#">
              Atrasti daugiau
            </a>
</div>
</div>
<div className="relative h-full w-full min-h-[400px] lg:absolute lg:top-0 lg:right-0 lg:w-1/2">
<img alt="Hero Illustration placeholder" className="object-center opacity-90 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F6] via-transparent to-transparent lg:hidden"></div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
<div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-sm relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EF5E3A]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
<div>
<div className="mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#EF5E3A]"></span>
<span className="text-xs font-semibold text-[#EF5E3A] tracking-widest uppercase">
                Kas yra Namulis
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Jauki erdvė jūsų šeimos vakarams
            </h2>
<p className="text-xl text-gray-600 leading-relaxed">
              Namulis — tai vieta, kur vakaro turinys surinktas į vieną erdvę.
              Čia rasite video, pasakas, daineles, veiklas ir idėjas, kurios
              padeda vakarą pasitikti ramiau — be blaškymosi ir ilgo ieškojimo.
            </p>
</div>
<div className="space-y-4">
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 transform transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#4CA146]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#4CA146]" height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Ramus turinys
                </h3>
<p className="text-gray-500 text-sm">
                  Atrinktos istorijos ir žaidimai, subalansuoti ramiam vaiko
                  poilsiui.
                </p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 transform transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#046BD2]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#046BD2]" height="24" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Viskas vienoje vietoje
                </h3>
<p className="text-gray-500 text-sm">
                  Pamirškite ilgą paiešką internete. Viskas paruošta jūsų
                  šeimai.
                </p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 transform transition-transform hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-[#F5A800]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#F5A800]" height="24" icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Dalis prieinama nemokamai
                </h3>
<p className="text-gray-500 text-sm">
                  Išbandykite ir atraskite mėgstamiausius vaikų ritualus.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-12 md:py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<div className="mb-4 flex items-center gap-2">
<span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Pradėkite čia
            </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Pirmam vakarui
          </h2>
<p className="text-gray-600 text-xl">
            Kai nesinori ilgai galvoti, nuo ko pradėti, kartais užtenka vieno
            ramaus video.
          </p>
</div>
<a className="inline-flex items-center gap-2 text-[#EF5E3A] font-medium hover:opacity-80 transition-opacity whitespace-nowrap bg-[#EF5E3A]/10 px-5 py-2.5 rounded-full" href="#">
          Visi video
          <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-purple-50 mb-5 border border-gray-100 shadow-sm">
<img alt="Video thumbnail" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-[#6C599A] text-white text-xs font-medium px-2.5 py-1 rounded-md" style={{fontFamily: '\'Baloo 2\', cursive'}}>
              Žaidžiu
            </div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#4CA146] text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
              Nemokamas
            </div>
<div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon height="12" icon="solar:clock-circle-linear" width="12"></iconify-icon>
              1:39
            </div>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1 group-hover:text-[#EF5E3A] transition-colors" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            U raidė
          </h3>
<p className="text-sm text-gray-500">Vakaro video</p>
</div>

<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-blue-50 mb-5 border border-gray-100 shadow-sm">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-[#046BD2] text-white text-xs font-medium px-2.5 py-1 rounded-md" style={{fontFamily: '\'Baloo 2\', cursive'}}>
              Klausau
            </div>
<div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon height="12" icon="solar:clock-circle-linear" width="12"></iconify-icon>
              2:15
            </div>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1 group-hover:text-[#046BD2] transition-colors" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Miego pasaka
          </h3>
<p className="text-sm text-gray-500">Sapnų istorijos</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-orange-50 mb-5 border border-gray-100 shadow-sm">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-[#EF5E3A] text-white text-xs font-medium px-2.5 py-1 rounded-md" style={{fontFamily: '\'Baloo 2\', cursive'}}>
              Mokausi
            </div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#4CA146] text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
              Nemokamas
            </div>
<div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon height="12" icon="solar:clock-circle-linear" width="12"></iconify-icon>
              3:05
            </div>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1 group-hover:text-[#EF5E3A] transition-colors" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Spalvos
          </h3>
<p className="text-sm text-gray-500">Edukacija</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-green-50 mb-5 border border-gray-100 shadow-sm">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-[#4CA146] text-white text-xs font-medium px-2.5 py-1 rounded-md" style={{fontFamily: '\'Baloo 2\', cursive'}}>
              Kuriu
            </div>
<div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon height="12" icon="solar:clock-circle-linear" width="12"></iconify-icon>
              1:29
            </div>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1 group-hover:text-[#4CA146] transition-colors" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            L raidė
          </h3>
<p className="text-sm text-gray-500">Vakaro video</p>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 md:py-32 border-y border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
          Kai norisi visko vienoje vietoje
        </h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Narystė suteikia prieigą prie visos premium video bibliotekos. Tai
          paprastas būdas turėti vakaro turinį po ranka, be ieškojimo.
        </p>
</div>
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer text-center">
<div className="w-16 h-16 mx-auto bg-[#EF5E3A]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#EF5E3A]" height="32" icon="solar:play-stream-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Visi video vienoje vietoje
          </h3>
<p className="text-gray-500 text-sm mb-6">
            Prieiga prie visų esamų istorijų, dainelių ir edukacinių klipų be
            jokių apribojimų.
          </p>
<span className="text-[#EF5E3A] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Žiūrėti biblioteką
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer text-center">
<div className="w-16 h-16 mx-auto bg-[#4CA146]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#4CA146]" height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Vienkartinis mokėjimas
          </h3>
<p className="text-gray-500 text-sm mb-6">
            Jokių paslėptų mokesčių ar kasmėnesinių prenumeratų. Įsigijate kartą
            — naudojatės ilgai.
          </p>
<span className="text-[#4CA146] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Kainodara
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer text-center">
<div className="w-16 h-16 mx-auto bg-[#046BD2]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#046BD2]" height="32" icon="solar:refresh-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-3" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Planai su atnaujinimais
          </h3>
<p className="text-gray-500 text-sm mb-6">
            Galimybė rinktis planą, kuris automatiškai pasipildys visais naujais
            kūriniais ateityje.
          </p>
<span className="text-[#046BD2] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Palyginti planus
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
          Ne tik ekranui — rankoms ir kūrybai
        </h2>
<p className="text-xl text-gray-600">
          Be video bibliotekos Namulyje rasite knygas, žaislus ir rinkinius,
          kurie pratęsia magišką pasaulį už ekrano ribų.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-[#6C599A]/5 rounded-3xl p-8 md:p-12 border border-[#6C599A]/10 relative overflow-hidden group">
<iconify-icon className="absolute -bottom-10 -right-10 text-[#6C599A]/10 group-hover:scale-110 transition-transform duration-700" height="120" icon="solar:book-bookmark-linear" width="120"></iconify-icon>
<div className="relative z-10 max-w-md">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-[#6C599A]" height="28" icon="solar:book-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-gray-900 tracking-tight mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
              Knygos
            </h3>
<p className="text-lg text-gray-600 mb-8">
              Kai video tampa pažįstamas, vaikas nori daugiau. Tada atsiranda
              knyga, kurią galima liesti, versti ir tyrinėti savo tempu.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-[#6C599A] font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow transition-shadow" href="#">
              Peržiūrėti knygas
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-6 flex flex-col">
<div className="flex-1 bg-[#F5A800]/5 rounded-3xl p-8 border border-[#F5A800]/10 group relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
<iconify-icon className="text-[#F5A800]" height="24" icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<a className="text-[#F5A800] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                Žaislai
              </h3>
<p className="text-sm text-gray-600">
                Kai istorijos išeina iš ekrano, jos tampa žaidimu rankose.
              </p>
</div>
</div>
<div className="flex-1 bg-[#046BD2]/5 rounded-3xl p-8 border border-[#046BD2]/10 group relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
<iconify-icon className="text-[#046BD2]" height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<a className="text-[#046BD2] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                Rinkiniai
              </h3>
<p className="text-sm text-gray-600">
                Kortelės ir PDF rinkiniai, kurie lengvai įsilieja į vaikų dieną.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#594F74] text-white py-32 lg:py-48 my-12 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl"></div>
<div className="absolute bottom-[10%] right-[5%] w-[40%] h-[80%] rounded-full bg-gradient-to-tl from-[#F5A800]/20 to-transparent blur-3xl"></div>
</div>
<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-white/40 mb-10 mx-auto" height="48" icon="solar:stars-linear" width="48"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 leading-tight" style={{fontFamily: '\'Poppins\', sans-serif'}}>
          Kai vaikai užmiega,
          <br/>
          namuose atsiranda tyla.
        </h2>
<div className="space-y-6 text-xl text-white/80 font-light leading-relaxed">
<p>Ir joje — vieta jums.</p>
<p>
            Kartais užtenka visai nedaug. Trumpo pokalbio. Švelnaus
            prisilietimo. Buvimo kartu.
          </p>
<p>Nes ryte vaikas mato ne tik jus.</p>
<p className="font-medium text-white text-2xl pt-6">
            Jis mato, kaip jūs žiūrite vienas į kitą.
          </p>
<p className="text-lg text-white/70 italic mt-4">
            Nes tai, ką vaikas mato tarp jūsų, tampa tuo, ką jis išsineša į savo
            pasaulį.
          </p>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#EF5E3A]/10 to-transparent rounded-[2.5rem] transform -rotate-3 scale-105"></div>
<img alt="Creator holding a plush toy" className="relative w-full h-[600px] object-cover object-top rounded-[2.5rem] shadow-sm" src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="order-1 lg:order-2">
<div className="mb-4 flex items-center gap-2">
<span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Namulį kuria
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Ilona Bakšė
          </h2>
<p className="text-xl text-gray-600 mb-12">
            Ilona — mama, kūrėja ir vizionierė, tikinti, kad vaikystė turi būti
            lėta ir magiška.
          </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#EF5E3A]/10 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-[#EF5E3A]" height="24" icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Edukacinė vertė
                </h3>
<p className="text-gray-600 leading-relaxed">
                  Kiekvienas video kurtas tariantis su vaikų raidos
                  specialistais, atsižvelgiant į kognityvinę raidą.
                </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#4CA146]/10 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-[#4CA146]" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Saugus turinys
                </h3>
<p className="text-gray-600 leading-relaxed">
                  Jokių iššokančių reklamų, staigaus triukšmo ar netinkamų
                  vaizdų jautriai vaiko psichikai.
                </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#F5A800]/10 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-[#F5A800]" height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                  Sukurta su meile
                </h3>
<p className="text-gray-600 leading-relaxed">
                  Nuo pirmos natos iki paskutinio kadro — viskas išglostyta su
                  mamos rūpesčiu ir atidumu.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] border-y border-gray-100 py-24 md:py-32">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-4" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Ką sako šeimos
          </h2>
<p className="text-xl text-gray-600">
            Tikros istorijos iš namų, kur vakarai tapo ramesni.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-gray-100 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#F5A800]">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
              "Vakarai pasikeitė nuo pirmo video. Dukra pati prašo — mama,
              paleisk tą su mėnuliu. Ir aš žinau, kad po 5 minučių ji bus rami."
            </blockquote>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                J
              </div>
<div>
<p className="text-sm font-semibold text-gray-900">Jurgita</p>
<p className="text-xs text-gray-500">Mama, dukrai 3 m.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-gray-100 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#F5A800]">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
              "Pagaliau turinys, kuris neskatina bėgioti po kambarį. Sūnus žiūri
              ramiai, o mes turime 15 minučių sau. Tai daugiau nei bet koks
              žaislas."
            </blockquote>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                T
              </div>
<div>
<p className="text-sm font-semibold text-gray-900">Tomas</p>
<p className="text-xs text-gray-500">Tėtis, sūnui 5 m.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-gray-100 absolute top-6 right-6" height="40" icon="solar:quote-right-bold" width="40"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#F5A800]">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<blockquote className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
              "Naudoju kaip vakaro ritualą darželyje. Vaikai nurimsta per kelias
              minutes. Rekomenduoju visoms kolegėms ir tėvams namuose."
            </blockquote>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold" style={{fontFamily: '\'Poppins\', sans-serif'}}>
                R
              </div>
<div>
<p className="text-sm font-semibold text-gray-900">Rasa</p>
<p className="text-xs text-gray-500">Mokytoja</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#594F74] text-white pt-24 pb-12 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
<div className="lg:col-span-1">
<div className="flex items-center gap-1 mb-6">
<div className="flex gap-1 items-center">
<div className="w-8 h-8 rounded-full bg-[#EF5E3A] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                N
              </div>
<div className="w-8 h-8 rounded-full bg-[#4CA146] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                A
              </div>
<div className="w-8 h-8 rounded-full bg-[#046BD2] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                M
              </div>
<div className="w-8 h-8 rounded-full bg-[#F5A800] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                U
              </div>
<div className="w-8 h-8 rounded-full bg-[#6C599A] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                L
              </div>
<div className="w-8 h-8 rounded-full bg-[#4CA146] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                I
              </div>
<div className="w-8 h-8 rounded-full bg-[#F5A800] flex items-center justify-center text-white font-bold text-sm" style={{fontFamily: '\'Baloo 2\', cursive'}}>
                S
              </div>
</div>
</div>
<p className="text-sm text-white/70 leading-relaxed">
            Smagūs video, knygos ir žaislai mažiesiems — ramiems vakarams ir
            kokybiškam laikui kartu.
          </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Nuorodos
          </h4>
<ul className="space-y-3 text-sm text-white/80">
<li>
<a className="hover:text-white transition-colors" href="#">Pradžia</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Video</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Narystė</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Apie</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">DUK</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Katalogas
          </h4>
<ul className="space-y-3 text-sm text-white/80">
<li>
<a className="hover:text-white transition-colors" href="#">Mokymai</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Veiklos</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Metodikos
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Parduotuvė
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Video biblioteka
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Paskyra
          </h4>
<ul className="space-y-3 text-sm text-white/80">
<li>
<a className="hover:text-white transition-colors" href="#">
                Prisijungti
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Mano biblioteka
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Nustatymai
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Pagalba</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-wider uppercase mb-6" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Naujienlaiškis
          </h4>
<p className="text-sm text-white/80 mb-4">
            Gaukite patarimus ramiems vakarams ir naujienas apie turinį.
          </p>
<form className="flex w-full max-w-xs">
<input className="w-full bg-white/10 text-white px-4 py-3 rounded-l-xl text-sm outline-none focus:ring-2 focus:ring-[#EF5E3A] border-none placeholder:text-white/40" placeholder="El. paštas" type="email"/>
<button className="bg-[#EF5E3A] hover:bg-[#D94F2E] text-white px-4 py-3 rounded-r-xl text-sm font-medium transition-colors flex items-center justify-center" type="submit">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
<p>© 2024 Namulis.lt — Visos teisės saugomos</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Privatumo politika
          </a>
<a className="hover:text-white transition-colors" href="#">Taisyklės</a>
</div>
</div>
</footer>

    </>
  );
}
