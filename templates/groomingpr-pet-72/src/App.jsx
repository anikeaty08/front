import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
rose: '#AA767C',
dark: '#1A1A1A',     /* Gri foarte închis pentru text */
green: '#537A5A',
light: '#FAF6F0',    /* Bej deschis pentru fundal / Hero */
white: '#FFFFFF',    /* Alb pentru carduri */
purple: '#9333EA',   /* Mov vibrant pentru CTA */
footer: '#1D1330',   /* Nuanță mai închisă a culorii de brand pentru footer */
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'blob': 'blob 10s infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
              const container = document.getElementById('gallery-container');
              const cards = container.querySelectorAll('.card-item');
              let activeCard = null;

              cards.forEach((card) => {
                  card.addEventListener('click', function(e) {
                      e.stopPropagation();
                      if (activeCard === card) {
                          resetCards();
                          return;
                      }
                      cards.forEach(c => {
                          c.style.filter = 'blur(4px) grayscale(60%)';
                          c.style.opacity = '0.4';
                          c.style.transform = 'scale(0.95)';
                      });
                      card.style.filter = 'none';
                      card.style.opacity = '1';
                      card.style.transform = 'scale(1.15) translateY(-20px) rotate(0deg)';
                      card.style.zIndex = '50';
                      activeCard = card;
                  });
              });

              document.addEventListener('click', function(e) {
                  if (activeCard && !container.contains(e.target)) {
                      resetCards();
                  }
              });

              function resetCards() {
                  cards.forEach(c => {
                      c.style.filter = '';
                      c.style.opacity = '';
                      c.style.transform = '';
                      c.style.zIndex = '';
                  });
                  activeCard = null;
              }
          })();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-mesh">
<div className="blob-1"></div>
<div className="blob-2"></div>
<div className="blob-3"></div>

<div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')', pointerEvents: 'none'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 bg-gradient-to-tr from-brand-purple to-brand-rose rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-purple/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:paw-print" width="20"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-brand-dark group-hover:text-brand-purple transition-colors">
            GroomingPro
          </span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-brand-dark/70 hover:text-brand-purple transition-colors" href="#servicii">
            Servicii
          </a>
<a className="text-sm font-medium text-brand-dark/70 hover:text-brand-purple transition-colors" href="#galerie">
            Galerie
          </a>
<a className="text-sm font-medium text-brand-dark/70 hover:text-brand-purple transition-colors" href="#preturi">
            Prețuri
          </a>
</div>

<div className="flex items-center gap-4">
<div className="btn-wrapper hidden md:inline-block">
<button aria-label="Programează" className="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper font-sans text-sm font-semibold tracking-wide text-white">
<div className="txt-1">
<span className="btn-letter">P</span>
<span className="btn-letter">r</span>
<span className="btn-letter">o</span>
<span className="btn-letter">g</span>
<span className="btn-letter">r</span>
<span className="btn-letter">a</span>
<span className="btn-letter">m</span>
<span className="btn-letter">e</span>
<span className="btn-letter">a</span>
<span className="btn-letter">z</span>
<span className="btn-letter">ă</span>
</div>
<div className="txt-2">
<span className="btn-letter">S</span>
<span className="btn-letter">e</span>
<span className="btn-letter"> </span>
<span className="btn-letter">î</span>
<span className="btn-letter">n</span>
<span className="btn-letter">c</span>
<span className="btn-letter">a</span>
<span className="btn-letter">r</span>
<span className="btn-letter">c</span>
<span className="btn-letter">ă</span>
</div>
</div>
</button>
</div>
<button className="md:hidden text-brand-dark p-2">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 space-y-8 animate-slide-up text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/20 bg-brand-green/5 backdrop-blur-md mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                Deschis Astăzi
              </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-brand-dark leading-[1.1]">
              Răsfăț total pentru
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-rose">
                prietenul tău.
              </span>
</h1>
<p className="text-lg text-brand-dark/70 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Salon premium de toaletaj. Combinăm stilul modern cu o atmosferă
              relaxantă, folosind produse naturale pentru sănătatea animalului
              tău.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
<div className="btn-wrapper inline-flex">
<button aria-label="Programează" className="btn px-4 py-3 md:px-6 md:py-3 focus:outline-none w-full" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper font-sans text-base font-medium tracking-wide text-white">
<div className="txt-1">
<span className="btn-letter">P</span>
<span className="btn-letter">r</span>
<span className="btn-letter">o</span>
<span className="btn-letter">g</span>
<span className="btn-letter">r</span>
<span className="btn-letter">a</span>
<span className="btn-letter">m</span>
<span className="btn-letter">e</span>
<span className="btn-letter">a</span>
<span className="btn-letter">z</span>
<span className="btn-letter">ă</span>
</div>
<div className="txt-2">
<span className="btn-letter">S</span>
<span className="btn-letter">e</span>
<span className="btn-letter"> </span>
<span className="btn-letter">î</span>
<span className="btn-letter">n</span>
<span className="btn-letter">c</span>
<span className="btn-letter">a</span>
<span className="btn-letter">r</span>
<span className="btn-letter">c</span>
<span className="btn-letter">ă</span>
</div>
</div>
</button>
</div>
<button className="px-8 py-4 bg-transparent border border-brand-dark/20 text-brand-dark font-medium rounded-full text-base hover:bg-brand-dark/5 transition-colors">
                Vezi Portofoliu
              </button>
</div>
</div>

<div className="flex-1 w-full relative animate-fade-in lg:mt-0 mt-10" style={{animationDelay: '0.2s'}}>
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border border-white/50 group bg-white">
<img alt="Dog Grooming" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent opacity-80"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-brand-dark/5 shadow-xl">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=100"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-brand-purple text-white flex items-center justify-center text-xs font-bold">
                    +500
                  </div>
</div>
<div className="text-sm">
<p className="text-brand-dark font-medium">Clienți Mulțumiți</p>
<div className="flex text-brand-purple text-xs gap-0.5">
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-rose/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="w-full border-y border-brand-dark/5 bg-white/30 py-10 mb-24 overflow-hidden relative backdrop-blur-sm">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-light to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-light to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee gap-24 items-center opacity-40 hover:opacity-80 transition-opacity duration-500">
<span className="text-xl font-bold tracking-tight text-brand-dark">
            ARTERO
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            BIO-GROOM
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            HYDRA
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            IV SAN BERNARD
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            CHRIS CHRISTENSEN
          </span>

<span className="text-xl font-bold tracking-tight text-brand-dark">
            ARTERO
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            BIO-GROOM
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            HYDRA
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            IV SAN BERNARD
          </span>
<span className="text-xl font-bold tracking-tight text-brand-dark">
            CHRIS CHRISTENSEN
          </span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="servicii">
<div className="mb-12 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">
            Servicii Premium
          </h2>
<p className="text-brand-dark/60 max-w-2xl">
            Abordare holistică a toaletajului. Fiecare sesiune este adaptată
            temperamentului și nevoilor specifice ale blănosului tău.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-[2rem] flex flex-col h-full group">
<div className="w-14 h-14 rounded-2xl bg-brand-rose/10 border border-brand-rose/20 flex items-center justify-center text-brand-rose mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">
              Tuns &amp; Styling
            </h3>
<p className="text-sm text-brand-dark/60 mb-8 leading-relaxed flex-grow">
              Tunsori standard de rasă sau stiluri creative asiatice. Atenție
              maximă la detalii și finisaje.
            </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-semibold text-brand-rose uppercase tracking-wider bg-brand-rose/10 px-3 py-1 rounded-full">
                De la 100 RON
              </span>
</div>
</div>

<div className="glass-card p-8 rounded-[2rem] flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-brand-purple/5 blur-2xl rounded-full"></div>
<div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">
              Spălat &amp; Spa
            </h3>
<p className="text-sm text-brand-dark/60 mb-8 leading-relaxed flex-grow">
              Hidromasaj, ozonoterapie și măști hidratante. Folosim șampoane
              naturale fără parabeni.
            </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-semibold text-brand-purple uppercase tracking-wider bg-brand-purple/10 px-3 py-1 rounded-full">
                De la 80 RON
              </span>
</div>
</div>

<div className="glass-card p-8 rounded-[2rem] flex flex-col h-full group">
<div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:cat" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-brand-dark mb-3">
              Grooming Feline
            </h3>
<p className="text-sm text-brand-dark/60 mb-8 leading-relaxed flex-grow">
              Toaletaj specializat pentru pisici, fără sedare. Mediu calm și
              silențios pentru reducerea stresului.
            </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-semibold text-brand-green uppercase tracking-wider bg-brand-green/10 px-3 py-1 rounded-full">
                De la 120 RON
              </span>
</div>
</div>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-6 mb-32 pt-12" id="galerie">
<div className="relative">

<div className="mx-auto max-w-3xl text-center mb-16 animate-slide-up">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-brand-dark mb-6">
              Transformări
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-rose">
                Spectaculoase.
              </span>
</h2>
<p className="text-lg text-brand-dark/60 max-w-xl mx-auto leading-relaxed">
              Galerie interactivă. Fiecare sesiune de grooming este o operă de
              artă adaptată personalității prietenului tău.
            </p>
</div>

<div className="relative max-w-5xl mx-auto mb-20">

<div className="absolute -top-8 left-[8%] z-20 hidden md:block animate-blob">
<div className="relative">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-semibold shadow-lg shadow-brand-purple/20 border border-white/10 backdrop-blur-md">
<iconify-icon icon="lucide:scissors" width="14"></iconify-icon>
                  Master Stylist
                </span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-brand-purple"></span>
</div>
</div>
<div className="absolute -top-12 right-[12%] z-20 hidden md:block animate-blob" style={{animationDelay: '2s'}}>
<div className="relative">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose text-white text-xs font-semibold shadow-lg shadow-brand-rose/20 border border-white/10 backdrop-blur-md">
<iconify-icon icon="lucide:heart" width="14"></iconify-icon>
                  Clienți Fericiți
                </span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-brand-rose"></span>
</div>
</div>

<div className="flex justify-center" id="gallery-container">
<div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 w-full">

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:-rotate-12 translate-y-4 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:-rotate-6 translate-y-8 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:rotate-0 translate-y-0 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:rotate-6 translate-y-4 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:rotate-12 translate-y-10 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="card-item col-span-1 md:col-span-1 md:self-end transform md:rotate-3 translate-y-2 cursor-pointer transition-all duration-700 ease-out hover:z-30">
<div className="aspect-[3/4] rounded-2xl overflow-hidden border border-brand-dark/5 shadow-xl relative group bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3.5 bg-brand-purple hover:bg-brand-purple/90 text-white font-medium rounded-full transition-all shadow-[0_4px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_6px_25px_rgba(147,51,234,0.4)] flex items-center gap-2 hover:-translate-y-0.5">
<iconify-icon icon="lucide:camera" width="18"></iconify-icon>
              Vezi Tot Portofoliul
            </button>
<a className="px-8 py-3.5 bg-white border border-brand-dark/10 text-brand-dark font-medium rounded-full transition-all flex items-center gap-2 hover:bg-brand-dark/5 hover:-translate-y-0.5 shadow-sm" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
              Urmărește-ne
            </a>
</div>
</div>

</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="preturi">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight mb-4">
              Planuri Simple
            </h2>
<p className="text-brand-dark/60">
              Investiție în sănătatea și fericirea prietenului tău.
            </p>
</div>

<div className="inline-flex bg-white p-1 rounded-xl border border-brand-dark/10 shadow-sm">
<button className="px-6 py-2 rounded-lg bg-brand-purple text-white shadow-sm text-sm font-medium transition-all">
              Câini
            </button>
<button className="px-6 py-2 rounded-lg text-brand-dark/60 hover:text-brand-dark transition-colors text-sm font-medium">
              Pisici
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-3xl flex flex-col hover:bg-white">
<h3 className="text-lg font-medium text-brand-dark mb-1">Talie Mică</h3>
<p className="text-xs text-brand-dark/40 mb-6 uppercase tracking-wider">
              Sub 10kg
            </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-brand-dark tracking-tight">
                150
              </span>
<span className="text-sm text-brand-dark/60">RON</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Spălat &amp; Uscat profesional
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Tuns din foarfecă/mașină
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Tăiat unghii
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-brand-dark/20 text-brand-dark text-sm font-medium hover:bg-brand-dark hover:text-white transition-all">
              Alege Pachet
            </button>
</div>

<div className="relative p-8 rounded-3xl border border-brand-purple/30 bg-white shadow-2xl z-10 md:-translate-y-4 shadow-brand-purple/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-purple text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand-purple/40">
              Recomandat
            </div>
<h3 className="text-lg font-medium text-brand-dark mb-1">
              Talie Medie
            </h3>
<p className="text-xs text-brand-purple/80 mb-6 uppercase tracking-wider">
              10 - 25kg
            </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold text-brand-dark tracking-tight">
                200
              </span>
<span className="text-sm text-brand-dark/60">RON</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-brand-dark/90">
<iconify-icon className="text-brand-purple" icon="lucide:check-circle-2" width="18"></iconify-icon>
                Tot ce include Pachetul Mic
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/90">
<iconify-icon className="text-brand-purple" icon="lucide:check-circle-2" width="18"></iconify-icon>
                Deslânat (dacă e necesar)
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/90">
<iconify-icon className="text-brand-purple" icon="lucide:check-circle-2" width="18"></iconify-icon>
                Parfumare premium
              </li>
</ul>
<div className="btn-wrapper w-full flex justify-center mt-auto">
<button aria-label="Programează" className="btn px-4 py-3 md:px-6 md:py-3 focus:outline-none w-full" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper font-sans text-sm font-semibold tracking-wide text-white">
<div className="txt-1">
<span className="btn-letter">P</span>
<span className="btn-letter">r</span>
<span className="btn-letter">o</span>
<span className="btn-letter">g</span>
<span className="btn-letter">r</span>
<span className="btn-letter">a</span>
<span className="btn-letter">m</span>
<span className="btn-letter">e</span>
<span className="btn-letter">a</span>
<span className="btn-letter">z</span>
<span className="btn-letter">ă</span>
</div>
<div className="txt-2">
<span className="btn-letter">S</span>
<span className="btn-letter">e</span>
<span className="btn-letter"> </span>
<span className="btn-letter">î</span>
<span className="btn-letter">n</span>
<span className="btn-letter">c</span>
<span className="btn-letter">a</span>
<span className="btn-letter">r</span>
<span className="btn-letter">c</span>
<span className="btn-letter">ă</span>
</div>
</div>
</button>
</div>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col hover:bg-white">
<h3 className="text-lg font-medium text-brand-dark mb-1">Talie Mare</h3>
<p className="text-xs text-brand-dark/40 mb-6 uppercase tracking-wider">
              Peste 25kg
            </p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-brand-dark tracking-tight">
                300
              </span>
<span className="text-sm text-brand-dark/60">RON</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Include pachetele anterioare
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Asistență suplimentară
              </li>
<li className="flex items-center gap-3 text-sm text-brand-dark/80">
<iconify-icon className="text-brand-green" icon="lucide:check-circle" width="16"></iconify-icon>
                Tratament blană dublă
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-brand-dark/20 text-brand-dark text-sm font-medium hover:bg-brand-dark hover:text-white transition-all">
              Alege Pachet
            </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="relative rounded-[3rem] overflow-hidden border border-brand-dark/5 p-8 md:p-24 text-center group bg-white shadow-xl shadow-brand-dark/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-gradient-to-r from-brand-purple/10 to-brand-rose/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-brand-dark tracking-tight">
              Ești gata pentru o schimbare de look?
            </h2>
<p className="text-brand-dark/70 text-lg">
              Locurile se ocupă rapid. Rezervă un loc pentru prietenul tău
              blănos astăzi și oferă-i tratamentul pe care îl merită.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
                0722 123 456
              </button>
<button className="px-8 py-4 bg-white border border-brand-dark/20 text-brand-dark font-medium rounded-full hover:bg-brand-dark/5 transition-colors shadow-sm">
                Programare Online
              </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-brand-footer pt-20 pb-10 mt-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-rose rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:paw-print" width="16"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight text-lg">
                GroomingPro
              </span>
</div>
<p className="text-sm text-white/50 leading-relaxed">
              Pasiune, răbdare și profesionalism pentru animalele de companie
              din București. Experiență de peste 5 ani.
            </p>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-white font-medium">Navigare</h4>
<a className="text-sm text-white/50 hover:text-brand-purple transition-colors" href="#">
              Acasă
            </a>
<a className="text-sm text-white/50 hover:text-brand-purple transition-colors" href="#">
              Servicii
            </a>
<a className="text-sm text-white/50 hover:text-brand-purple transition-colors" href="#">
              Prețuri
            </a>
<a className="text-sm text-white/50 hover:text-brand-purple transition-colors" href="#">
              Galerie
            </a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-white font-medium">Servicii</h4>
<a className="text-sm text-white/50 hover:text-brand-rose transition-colors" href="#">
              Tuns Câini
            </a>
<a className="text-sm text-white/50 hover:text-brand-rose transition-colors" href="#">
              Spălat &amp; Spa
            </a>
<a className="text-sm text-white/50 hover:text-brand-rose transition-colors" href="#">
              Toaletaj Pisici
            </a>
<a className="text-sm text-white/50 hover:text-brand-rose transition-colors" href="#">
              Ozonoterapie
            </a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-white font-medium">Legal</h4>
<a className="text-sm text-white/50 hover:text-brand-green transition-colors" href="#">
              Termeni &amp; Condiții
            </a>
<a className="text-sm text-white/50 hover:text-brand-green transition-colors" href="#">
              GDPR
            </a>
<a className="text-sm text-white/50 hover:text-brand-green transition-colors" href="#">
              ANPC
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
<p className="text-xs text-white/30">
            © 2024 GroomingPro SRL. Toate drepturile rezervate.
          </p>
<div className="flex gap-6">
<a className="text-white/40 hover:text-brand-purple transition-colors transform hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-brand-purple transition-colors transform hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-brand-purple transition-colors transform hover:-translate-y-1" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
