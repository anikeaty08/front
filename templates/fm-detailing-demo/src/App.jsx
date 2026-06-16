import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
          var strip = document.getElementById('portfolio-strip');
          var prevBtn = document.getElementById('portfolio-prev');
          var nextBtn = document.getElementById('portfolio-next');
          var dots = document.querySelectorAll('.portfolio-dot');
          var slides = document.querySelectorAll('.portfolio-slide');
          var currentIndex = 0;
          var totalSlides = slides.length;

          function getSlideWidth() {
            return slides[0] ? slides[0].offsetWidth + 16 : 0;
          }

          function scrollToIndex(index) {
            if (index < 0) index = 0;
            if (index >= totalSlides) index = totalSlides - 1;
            currentIndex = index;
            var slideW = getSlideWidth();
            strip.scrollTo({ left: slideW * currentIndex, behavior: 'smooth' });
            updateDots();
          }

          function updateDots() {
            dots.forEach(function(dot, i) {
              if (i === currentIndex) {
                dot.style.background = '#FFD700';
                dot.style.transform = 'scale(1.2)';
              } else {
                dot.style.background = '#525252';
                dot.style.transform = 'scale(1)';
              }
            });
            slides.forEach(function(slide, i) {
              var inner = slide.querySelector('.slide-inner');
              var img = slide.querySelector('img');
              if (i === currentIndex) {
                inner.style.transform = 'scale(1.15)';
                inner.style.opacity = '1';
                inner.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6)';
                img.style.filter = 'grayscale(0%)';
              } else {
                inner.style.transform = 'scale(0.85)';
                inner.style.opacity = '0.4';
                inner.style.boxShadow = 'none';
                img.style.filter = 'grayscale(100%)';
              }
            });
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', function() {
              scrollToIndex(currentIndex - 1);
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener('click', function() {
              scrollToIndex(currentIndex + 1);
            });
          }

          dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
              scrollToIndex(parseInt(dot.getAttribute('data-index')));
            });
          });

          var scrollTimeout;
          strip.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
              var slideW = getSlideWidth();
              if (slideW > 0) {
                var idx = Math.round(strip.scrollLeft / slideW);
                if (idx !== currentIndex && idx >= 0 && idx < totalSlides) {
                  currentIndex = idx;
                  updateDots();
                }
              }
            }, 50);
          });

          setTimeout(updateDots, 50);
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav-blur fixed top-0 w-full z-50">
<div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">

<div className="flex items-center gap-10">
<a className="font-headline font-bold italic tracking-tighter text-2xl uppercase select-none text-yellow-500" href="#">
            FM
            <span className="text-white">DETAILING</span>
</a>
<div className="hidden md:flex items-center gap-7">
<a className="font-headline font-semibold italic tracking-tight uppercase text-sm primary-underline transition-colors text-yellow-400" href="#services">
              Služby
            </a>
<a className="font-headline font-semibold italic tracking-tight uppercase text-sm text-neutral-400 hover:text-white transition-colors" href="#portfolio">
              Portfolio
            </a>
<a className="font-headline font-semibold italic tracking-tight uppercase text-sm text-neutral-400 hover:text-white transition-colors" href="#about">
              O nás
            </a>
<a className="font-headline font-semibold italic tracking-tight uppercase text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">
              Kontakt
            </a>
</div>
</div>

<div className="flex items-center gap-5">
<div className="hidden lg:flex items-center gap-3"></div>
<a className="hidden sm:block uppercase transition-colors active:scale-95 hover:text-yellow-300 text-sm font-semibold italic text-yellow-400 tracking-tight font-headline" href="/tel:+420602 150 081">
            +420 602 150 081
          </a>

<button aria-label="Menu" className="md:hidden flex flex-col gap-1.5 p-1">
<span className="block w-5 h-0.5 bg-yellow-500"></span>
<span className="block w-5 h-0.5 bg-yellow-500"></span>
<span className="block w-3 h-0.5 bg-yellow-500"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-end justify-start overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="High-performance red sports car front" className="object-center w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW2EzgKebrbimeOzBd5X2kgFXUSHs-OsZns2RepCzUmzEV_5aLiJnBjtcy4Rw8PzIZq7IOgQfkououlHhFkFPKcsX611ScwFbw5zmlXfzUoxWpB5THK7r46Z33zeKvKL8ghlzl3tQvPEfIbIWFx9W58YDcZAw1pvxI4zc5B2r2e7Ev5nuirBrijgY6eMwHbiVzGiKij1eFT05Z45OyfzEKC7qQZIHPk2EN3o5wxBjDQe1jE6Q1VMFdOY3faugZNzQTbEqXdrH3yw" style={{filter: 'brightness(0.7) saturate(1.1)'}}/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none" style={{background: 'radial-gradient(ellipse at 20% 100%, rgba(234,179,8,0.15) 0%, transparent 70%)'}}></div>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
<div className="w-px h-16 bg-yellow-700/40"></div>
<span className="font-headline font-semibold italic text-xs tracking-[0.35em] text-neutral-500 uppercase" style={{writingMode: 'vertical-rl'}}>
          FM DETAILING
        </span>
<div className="w-px h-16 bg-yellow-700/40"></div>
</div>

<div className="md:px-12 lg:px-16 max-w-5xl z-10 pt-36 pr-6 pb-20 pl-6 relative md:translate-x-16 md:-translate-y-1 md:scale-110">

<div className="fade-up inline-flex bg-yellow-950/30 border-yellow-700/30 border rounded-sm mb-6 pt-1 pr-3 pb-1 pl-3 md:translate-x-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-yellow-500"></span>
<span className="uppercase text-xs text-yellow-400 tracking-[0.3em] font-label">
            Bělá pod Bezdězem
          </span>
</div>
<h1 className="fade-up-2 uppercase leading-none font-bold italic text-white tracking-tighter font-headline mb-8" style={{fontSize: 'clamp(2.8rem, 8vw, 6rem)'}}>
          Váš vůz si
          <br/>
<span className="" style={{color: '#eab308'}}>zaslouží</span>
<br/>
          to nejlepší
        </h1>
<p className="fade-up-3 text-neutral-400 font-body text-sm md:text-base max-w-md leading-relaxed mb-10">
          Profesionální čištění a detailing automobilů v Bělé pod Bezdězem.
        </p>
<div className="fade-up-3 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
<button className="px-10 py-4 text-white font-headline font-semibold italic uppercase tracking-widest text-sm transition-all duration-200 active:scale-95 rounded-sm bg-yellow-600 hover:bg-yellow-500">
            Chci Rezervovat
          </button>
<button className="px-10 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-headline font-semibold italic uppercase tracking-widest text-sm transition-all duration-200 rounded-sm">
            Naše Služby
          </button>
</div>

<div className="flex flex-wrap md:-translate-x-12 mt-16 gap-x-10 gap-y-10">
<div className="">
<div className="text-3xl font-bold italic text-white tracking-tighter font-headline">
              50 +
            </div>
<div className="font-label text-xs tracking-widest uppercase text-neutral-500 mt-1">
              spokojených klientů
            </div>
</div>
<div className="">
<div className="text-3xl font-bold italic text-white tracking-tighter font-headline">
              5 +
            </div>
<div className="font-label text-xs tracking-widest uppercase text-neutral-500 mt-1">
              let zkušeností
            </div>
</div>
<div className=""></div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] px-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-3">
<div className="mt-10">
<img alt="Detailer polishing black hood" className="w-full aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSJqXEuG7WQr1uLcIWdI13Lw21qP1yeeBqSVCduNAcdVPOQ1Ych9o6QapgoELXolvxJ-Bww3FkiAZfzGdwTvr5TE1DTxW39CKpVePyttmveLIg_Uw6ovPTPZNKc_ZBJNnfi71k-2Y2mZWr4UEGTnq2Mdfv6XJWSRuMFrSUpa8HYyyxzG2Vzmj4uSnJ1xeVeSmiOo5wzEvNSQiPzbkEmryddiTUctKU88JVlpXXZpcaOsH8_G4rzz_Mf6BVa7hXRamIfo1Kn3wfxQ" style={{boxShadow: '0 8px 40px rgba(0,0,0,0.5)'}}/>
</div>
<div className="">
<img alt="High pressure foam wash" className="w-full aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOsW-YjldBOrDzorw-XftUdPScJBiq6Con2UBhTgSTqRIVx_5yd86Ea5BA10NecRuuSLN_yFfLQJyGqv0ovPEEe3CF2oy38zSQQspdt8etDazvN6S-ZR8HW6zrzqIepvHqA5r1UudGE7Vyt2CsmUhnpIjtfLEklm6XoZafWzLalqIkUFLkGNyzSY5Fc5Q8XlcytNlDm3HKVUmGmoCE2O2pCX5_kx366ZKbocmxx4N4W-7uNdRP04jPwIC3D1LoMNQxB7qa6Q7MLg" style={{boxShadow: '0 8px 40px rgba(0,0,0,0.5)'}}/>
</div>
</div>

<div className="space-y-8">
<div className="inline-block px-4 py-1 border rounded-sm border-yellow-700/25 bg-yellow-950/20">
<span className="font-label text-xs tracking-[0.3em] uppercase text-yellow-400">
              Exkluzivní Péče
            </span>
</div>
<h2 className="font-headline font-bold italic tracking-tighter uppercase leading-none text-white" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
            Proč
            <span style={{color: '#eab308'}}>my?</span>
</h2>
<div className="mt-6 mb-8">
<p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-4">
              FM je profesionální detailing studio vedené s vášní pro
              dokonalost. Každý vůz ošetřujeme osobně a používáme výhradně
              prémiové produkty značek Herrenfahrt, Polish Angel a Rupes.
            </p>
<blockquote className="border-l-2 border-yellow-500 pl-4 italic text-neutral-300">
              "Miluji svoji práci a vždy se snažím udělat pro své zákazníky
              maximum."
            </blockquote>
</div>
<ul className="space-y-7">
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0">
<iconify-icon height="22" icon="solar:check-circle-bold" style={{color: '#eab308'}} width="22"></iconify-icon>
</div>
<div className="">
<h4 className="font-headline font-semibold italic text-lg uppercase tracking-tight text-white">
                  Přistavení a vyzvednutí auta
                </h4>
<p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  7 dní v týdnu, 24/7. Šetříme váš drahocenný čas — přijedeme za
                  vámi.
                </p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0">
<iconify-icon height="22" icon="solar:check-circle-bold" style={{color: '#eab308'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="font-headline font-semibold italic text-lg uppercase tracking-tight text-white">
                  Mytí na počkání
                </h4>
<p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  Služby mytí na počkání s příjemným posezením u dobré kávy.
                </p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0">
<iconify-icon height="22" icon="solar:check-circle-bold" style={{color: '#eab308'}} width="22"></iconify-icon>
</div>
<div className="">
<h4 className="font-headline font-semibold italic text-lg uppercase tracking-tight text-white">
                  Moderní centrum
                </h4>
<p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  Špičkové zázemí na ploše přes 200 m² vybavené nejnovější
                  technologií.
                </p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0">
<iconify-icon height="22" icon="solar:check-circle-bold" style={{color: '#eab308'}} width="22"></iconify-icon>
</div>
<div className="">
<h4 className="font-headline font-semibold italic text-lg uppercase tracking-tight text-white">
                  Certifikovaní odborníci
                </h4>
<p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  Tým proškolených detailerů s mezinárodními certifikacemi.
                </p>
</div>
</li>
</ul>
<button className="mt-2 px-9 py-3.5 text-white font-headline font-semibold italic uppercase tracking-widest text-sm transition-all duration-200 active:scale-95 rounded-sm bg-yellow-600 hover:bg-yellow-500">
            Zjistit více
          </button>
</div>
</div>
</section>


<section className="py-24 bg-[#111111]" id="services">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
<div className="">
<div className="inline-block px-4 py-1 border rounded-sm mb-5 border-yellow-700/25 bg-yellow-950/20">
<span className="font-label text-xs tracking-[0.3em] uppercase text-yellow-400">
                Co nabízíme
              </span>
</div>
<h2 className="font-headline font-bold italic tracking-tighter uppercase leading-none text-white" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
              Naše
              <span className="" style={{color: '#eab308'}}>Služby</span>
</h2>
<div className="h-0.5 w-16 mt-4" style={{background: '#eab308'}}></div>
</div>
<button className="hidden md:block px-8 py-3 border font-headline font-semibold italic uppercase tracking-wider text-sm transition-all duration-200 rounded-sm border-yellow-700/40 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300">
            Ceník služeb →
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800/30">

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="Ruční mytí" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD36XDrAEyZk4VgwLNO7VByuPfSQo7wCU7RQOgK5OIGp5HvqN8NuT8RpLbJQqpbkbMj5rm7WWBIXhavbg47aP8T5ZeCHX7iJ9TxCWIgInI2Btny5tsKqaSdQHUDe1SfPbY7VCkzS59oqVU-Ra1Th-2iWAwY19yb0X7790_22wZ-FI63NL8-8FB97Exou8AamLGvn7CdQs28g_a6-J4YFbCyhc-mhgjcecxM8-xqGqRkdAvPUqQCZHJX_HIaoW3hWxFj8ue9LYnqQg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Mytí &amp; Údržba
              </div>
<h3 className="uppercase text-xl font-semibold italic text-white tracking-tight font-headline">
                Detailní ruční mytí
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="Renovace laku" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolHuhVyJLzH5rrTeCRZ80zPJ3ZmBKVaF_A0RF4esdiWKdFfqpksEM9U7eQM5-NMKWqxVogcixQqufoKFDdMaOmDmnxOMr2iTtTy3hWeOIQqWweS-TdU0pAl-qhsB9hJmjrUbupkFx9FF-YrUmiW5F42MIFtJ66pCLrnxtl_FgwZp7ZAD8B0fePagKP1CK9Bg9LigbDYdDCIhWRiD9J1QY2g9p-IIEN_HlYwI4c89KADmxYFhdxCukjoeNuWktI_Hur15REHDL2Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Korekce laku
              </div>
<h3 className="uppercase text-xl font-semibold italic text-white tracking-tight font-headline">
                Renovace laku
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="Keramická ochrana" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgmRInWiw-oYVmZieBYjOhrMWWP2th-FAdTm2O4XSp4ClPNdqHEshjHtfBSqF8QAhJmFuFWNZ3XG-QmnHDJnuqIqmWloGjRWSLvRbLEKM3fPFQbRpgQn9xXi5XDruGthA8XHy6m_vpoGHnhldJFjaYaa1PvMZ5laDvJYbGkolWfQ_cySwD7LBfOYwlqwgVX1a72GeMs9Dxc310--xESsS2HxzRMEL7PkOtlTnc7Hks5nsWij7nZyOTIHycsC_o24ZZOiQO1WtpEA"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Nanotechnologie
              </div>
<h3 className="uppercase text-xl font-semibold italic text-white tracking-tight font-headline">
                Keramická ochrana
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon className="" height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="PPF fólie" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgndxsLjIITI_6sSy82-Ot2MWFlLQtMIqJciXsYqIN86bsT_f-o_z95hiK2qZoFuzGYjrRNK4H8BxUaFusW0UhiZHQ5FbNurWNK4L4mmP1FWbf4NKJyh-UU3P3U4oBig_hlKS3O3yYFkzqydVqzRL8GGi-Q9Cb-NctYpeiU7IySXuoPLkBYgdyqlXH0p6NLBGkh54-K5Va21xhnkhI-hFd6zIegjy3CGqRsn58jIi-C2V7wvi25crMsgw_6LBxmBLoYNw511jTQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Neviditelná ochrana
              </div>
<h3 className="text-xl font-headline font-semibold italic uppercase tracking-tight text-white">
                PPF fólie
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="Barevné fólie" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsSJ6CE8Wme9aDRxenYcLRWOOjXzYx5Ska48oXME9TpijcywQqT6EdAzYcoVSS5pIjVIT_KdxonRmiiWwW1Noit-lUvNd9NCum-WK_TnltekuPISb17iKyysuH8mXAnZqOnNCB1gox860_S68FCo8S0kVh9wtwbwqXvv_2tzNcS71w8l-pQprvX1EyjUTPU0Jin59Wyob3MQu5IhBB4L6NGD8v8OXJF31EPh7vcgvRvhc4hB_lTz9xsx-GslNDRr-vMZQylOJffQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Design &amp; Style
              </div>
<h3 className="uppercase text-xl font-semibold italic text-white tracking-tight font-headline">
                Barevné fólie (wrap)
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#111111] card-glow cursor-pointer">
<img alt="Renovace kůže" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_zILuJvUpDjK4hwgg5PwOkzPwst54f1FoYBFyDknEw16kdoeiISVFR-_PrUOkn2vYv0IUhnhTV7ac-yz534wsnpnlznfv5xLJbj1tPlfdz5PPQYMK_BJx9f8vApa8xO9vG3mecPpOJ_debsrKFMtopcz0I8q_aZI4CUg0coVQtGNdKbtFgh1cpKjzlGKqvnwO71uk0lTMmBwrfvtYZmKNbah9YfpU9_9WYTt87_x2U92A-9GqMDyw3PbXx0-8K0G1gPpxsPWj2A"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-7">
<div className="text-xs font-label mb-1.5 tracking-[0.25em] uppercase text-yellow-400">
                Interiér
              </div>
<h3 className="text-xl font-headline font-semibold italic uppercase tracking-tight text-white">
                Renovace kůže
              </h3>
<div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-px flex-1 bg-yellow-600/50"></div>
<span className="font-label text-xs tracking-widest uppercase text-yellow-400">
                  Zjistit více
                </span>
<iconify-icon height="14" icon="solar:arrow-right-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-8 md:hidden">
<button className="w-full px-8 py-4 text-white font-headline font-semibold italic uppercase tracking-wider text-sm transition-all duration-200 rounded-sm bg-yellow-600 hover:bg-yellow-500">
            Ceník Služeb
          </button>
</div>
</div>
</section>

<section className="bg-[#0d0d0d] pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-12">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="">
<div className="inline-block px-4 py-1 border rounded-sm mb-5 border-yellow-700/25 bg-yellow-950/20">
<span className="font-label text-xs tracking-[0.3em] uppercase text-yellow-400">
                Naše práce
              </span>
</div>
<h2 className="uppercase leading-none font-bold italic text-white tracking-tighter font-headline" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
              Galerie
            </h2>
<div className="h-0.5 w-16 mt-4" style={{background: '#eab308'}}></div>
</div>
</div>
</div>

<div className="relative">

<button aria-label="Previous" className="hidden md:flex md:left-6 -translate-y-1/2 z-10 hover:text-white transition-all duration-200 cursor-pointer hover:bg-yellow-500 text-yellow-500 bg-neutral-900/80 w-12 h-12 border-yellow-500 border-2 rounded-full absolute top-1/2 left-2 backdrop-blur-sm items-center justify-center" id="portfolio-prev">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="15 18 9 12 15 6"></polyline>
</svg>
</button>

<div className="flex overflow-x-auto gap-4 no-scrollbar py-12 items-center" id="portfolio-strip" style={{scrollBehavior: 'smooth', scrollSnapType: 'x mandatory'}}>
<div className="flex-none w-[calc(50%-160px)] md:w-[calc(50%-226px)] shrink-0"></div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Porsche 911" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac19f8dd-0eea-4c54-94ff-724c99e643d3_1600w.webp?w=800&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Yellow supercar" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a84cc76-9878-4d86-9f10-873a16343300_1600w.webp" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Red luxury coupe" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a62aac2-ec6f-4c6a-9842-fbb91478754c_1600w.jpg?w=800&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Matte black sedan" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f1a8c60-8978-4d4a-aa43-f5c8597bbf84_1600w.webp" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Sports car detail" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06c141f5-a8fa-4dac-9e92-1b2b46b94723_1600w.webp" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Detailing wheel" className="transition-all duration-500 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1563edad-27a0-45fd-9ccd-81c006706a92_1600w.jpg?w=800&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Car washing" className="transition-all duration-500 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91474150-054b-49a9-8e58-272dad00e2d3_1600w.jpg" style={{filter: 'grayscale(0%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Car dashboard" className="transition-all duration-500 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'none'}}>
<img alt="Car polishing" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="portfolio-slide flex-none w-72 md:w-[420px] h-56 md:h-72" style={{scrollSnapAlign: 'center'}}>
<div className="slide-inner w-full h-full rounded-sm overflow-hidden bg-neutral-900 transition-all duration-500 transform scale-75 opacity-40" style={{boxShadow: 'rgba(0, 0, 0, 0.6) 0px 20px 40px'}}>
<img alt="Car exterior" className="w-full h-full object-cover transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{filter: 'grayscale(100%)'}}/>
</div>
</div>
<div className="flex-none w-[calc(50%-160px)] md:w-[calc(50%-226px)] shrink-0"></div>
</div>

<button aria-label="Next" className="hidden md:flex md:right-6 -translate-y-1/2 z-10 hover:text-white transition-all duration-200 cursor-pointer hover:bg-yellow-500 text-yellow-500 bg-neutral-900/80 w-12 h-12 border-yellow-500 border-2 rounded-full absolute top-1/2 right-2 backdrop-blur-sm items-center justify-center" id="portfolio-next">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>

<div className="flex items-center justify-center gap-2 mt-6 px-6 flex-wrap" id="portfolio-dots">
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300" data-index="0" style={{background: '#eab308'}}></button>
<button className="portfolio-dot transition-all duration-300 bg-neutral-600 w-2 h-2 rounded-full" data-index="1" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="2" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="3" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="4" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot transition-all duration-300 bg-neutral-600 w-2 h-2 rounded-full" data-index="5" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="6" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="7" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot w-2 h-2 rounded-full transition-all duration-300 bg-neutral-600" data-index="8" style={{background: 'rgb(82, 82, 82)'}}></button>
<button className="portfolio-dot transition-all duration-300 bg-neutral-600 w-2 h-2 rounded-full" data-index="9" style={{background: 'rgb(82, 82, 82)'}}></button>
</div>

</section>

<section className="pt-20 pr-6 pb-20 pl-6" style={{background: 'linear-gradient(135deg, #1f1700 0%, #0d0d0d 50%, #1f1700 100%)'}}>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-block px-4 py-1 border rounded-sm mb-7 border-yellow-700/25 bg-yellow-950/20">
<span className="font-label text-xs tracking-[0.3em] uppercase text-yellow-400">
            Rezervujte nyní
          </span>
</div>
<h2 className="font-headline font-bold italic tracking-tighter uppercase text-white mb-6 leading-none" style={{fontSize: 'clamp(2rem, 6vw, 4rem)'}}>
          Váš vůz si zaslouží
          <br/>
<span className="" style={{color: '#eab308'}}>dokonalou péči</span>
</h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg mx-auto mb-10">
          Kontaktujte nás ještě dnes a domluvte si termín. Naši specialisté jsou
          připraveni postarat se o váš vůz s absolutní precizností.
        </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
<button className="px-12 py-4 text-white font-headline font-semibold italic uppercase tracking-widest text-sm transition-all duration-200 active:scale-95 rounded-sm bg-yellow-600 hover:bg-yellow-500">
            Objednat se
          </button>
<a className="flex items-center justify-center gap-2 uppercase transition-all duration-200 hover:border-yellow-700 hover:text-yellow-400 text-sm font-semibold italic text-neutral-400 tracking-widest font-headline border-neutral-700 border rounded-sm pt-4 pr-10 pb-4 pl-10" href="/tel:+420602150081">
            +420 602 150 081
          </a>
</div>
</div>
</section>

<footer className="bg-[#080808] border-t border-neutral-800/30" id="contact">
<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 gap-x-10 gap-y-10">

<div className="space-y-5">
<div className="font-headline font-bold italic tracking-tighter text-2xl text-white uppercase">
            FM
            <span className="text-yellow-500">DETAILING</span>
</div>
<p className="font-label text-xs tracking-wide uppercase leading-relaxed text-neutral-600">
            FM – Čištění a detailing vozů.
            <br/>
            Vaše auto, naše vášeň pro detail.
          </p>
<div className="flex items-center gap-4 pt-1">
<a aria-label="Instagram" className="text-neutral-500 hover:text-yellow-500 transition-colors" href="#">
<iconify-icon height="24" icon="lucide:instagram" width="24"></iconify-icon>
</a>
<a aria-label="Facebook" className="text-neutral-500 hover:text-yellow-500 transition-colors" href="#">
<iconify-icon height="24" icon="lucide:facebook" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="font-label text-xs tracking-[0.3em] uppercase font-semibold mb-7 text-yellow-500">
            Kontakty
          </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 group">
<iconify-icon className="flex-shrink-0" height="15" icon="solar:phone-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="15"></iconify-icon>
<a className="uppercase transition-colors group-hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="/tel:+420602150081">
                +420 602 150 081
              </a>
</li>
<li className="flex items-center gap-3 group">
<iconify-icon className="flex-shrink-0" height="15" icon="solar:letter-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="15"></iconify-icon>
<a className="uppercase transition-colors group-hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="mailto:info@washwrap.cz">
                filipekbmw@seznam.cz
              </a>
</li>
<li className="flex gap-x-3 gap-y-3 items-start">
<iconify-icon className="flex-shrink-0 mt-0.5" height="15" icon="solar:map-point-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="15"></iconify-icon>
<span className="font-label text-xs uppercase text-neutral-500 tracking-wider leading-relaxed">
                Bělá pod Bezdězem, CZ
              </span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0" height="15" icon="solar:clock-circle-linear" style={{color: '#eab308', strokeWidth: '1.5'}} width="15"></iconify-icon>
<span className="font-label text-xs uppercase text-neutral-500 tracking-wider">
                Po–Ne: 7:00 – 20:00
              </span>
</li>
</ul>
</div>

<div className="">
<h3 className="font-label text-xs tracking-[0.3em] uppercase font-semibold mb-7 text-yellow-500">
            Služby
          </h3>
<ul className="space-y-3">
<li className="">
<a className="uppercase hover:translate-x-1 transition-all duration-200 block hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="#">
                Detailní ruční mytí
              </a>
</li>
<li className="">
<a className="uppercase hover:translate-x-1 transition-all duration-200 block hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="#">
                Renovace laku
              </a>
</li>
<li className="">
<a className="uppercase hover:translate-x-1 transition-all duration-200 block hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="#">
                Keramická ochrana
              </a>
</li>
<li className="">
<a className="uppercase hover:translate-x-1 transition-all duration-200 block hover:text-yellow-400 text-xs text-neutral-500 tracking-wider font-label" href="#">
                Barevné fólie (wrap)
              </a>
</li>
</ul>
</div>
</div>

<div className="border-t border-neutral-900 py-6 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
<p className="uppercase text-xs text-neutral-700 tracking-[0.3em] font-label">
            © 2026 FM - Čištění a detailing vozů.
          </p>
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full animate-pulse bg-yellow-600"></div>
<span className="font-label text-xs tracking-widest uppercase text-neutral-700 ml-1.5">
              Otevřeno dnes
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
