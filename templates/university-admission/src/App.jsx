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
brand: {
dark: '#ffffff',      // Switched to White
panel: '#f8fafc',     // Switched to Slate-50
accent: '#ea580c',    // Switched to slightly darker Orange for contrast on white
cyan: '#0891b2',
red: '#be123c',
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to right bottom, #ffffff, #f1f5f9)",
'stripes': "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 12px)",
'red-texture': "url('https://images.unsplash.com/photo-1605218427306-afa54388cf0f?q=80&w=2574&auto=format&fit=crop')",
}
}
}
}



        (function() {
            const yearImages = {
                '21': 'https://cdn.midjourney.com/f69b70ff-95c9-4871-a1c4-7e23f8500e34/0_0.png',
                '22': 'https://cdn.midjourney.com/ffe408d6-c929-4e0d-baf8-8b781fc08e02/0_0.png',
                '23': 'https://cdn.midjourney.com/3260085a-4252-4cb4-bf90-1c88a0c0e06f/0_0.png',
                '24': 'https://cdn.midjourney.com/f69b70ff-95c9-4871-a1c4-7e23f8500e34/0_0.png',
                '25': 'https://cdn.midjourney.com/b0cb240b-d956-4770-8e88-a552b7cc6e54/0_0.png'
            };

            const yearItems = document.querySelectorAll('.year-item');
            const backgroundEl = document.getElementById('year-background');
            const showreelYear = document.getElementById('showreel-year');

            yearItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const year = this.getAttribute('data-year');

                    if (backgroundEl && yearImages[year]) {
                        backgroundEl.style.opacity = '0';
                        setTimeout(() => {
                            backgroundEl.style.backgroundImage = 'url(' + yearImages[year] + ')';
                            backgroundEl.style.opacity = '0.1';
                        }, 300);
                    }

                    // Highlight logic preserved
                    yearItems.forEach(el => {
                        const indicator = el.querySelector('.indicator');
                        const text = el.querySelector('.year-text');
                        if (indicator) {
                            indicator.classList.remove('opacity-100');
                            indicator.classList.add('opacity-0');
                        }
                        if (text) {
                            text.classList.remove('text-slate-900', 'text-sm');
                            text.classList.add('text-xs', 'text-slate-400');
                        }
                    });

                    const indicator = this.querySelector('.indicator');
                    const text = this.querySelector('.year-text');
                    if (indicator) {
                        indicator.classList.remove('opacity-0');
                        indicator.classList.add('opacity-100');
                    }
                    if (text) {
                        text.classList.remove('text-xs', 'text-slate-400');
                        text.classList.add('text-slate-900', 'text-sm');
                    }
                });
            });
        })();
      


        const serviceData = [
            {
                id: '01',
                name: 'Academics',
                posterTitle: 'HG.1<br>ACADEMIC<br>LIFE',
                posterNum: '+01',
                category: 'Undergraduate',
                suffix: 'LEARNING',
                type: 'Degrees & Programs',
                year: '1905 - Present',
                image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=2160&q=80'
            },
            {
                id: '02',
                name: 'Innovation',
                posterTitle: 'HG.2<br>INNOVATION<br>IMPACT',
                posterNum: '+02',
                category: 'Discovery',
                suffix: 'DISCOVERY',
                type: 'Global Research',
                year: '1905 - Present',
                image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2160&auto=format&fit=crop'
            },
            {
                id: '03',
                name: 'Wellness',
                posterTitle: 'HG.3<br>HEALTH<br>CARE',
                posterNum: '+03',
                category: 'Medicine',
                suffix: 'WELLNESS',
                type: 'Hospitals & Patient Care',
                year: '1905 - Present',
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=2160&q=80'
            },
            {
                id: '04',
                name: 'Community',
                posterTitle: 'HG.4<br>PUBLIC<br>SERVICE',
                posterNum: '+04',
                category: 'Outreach',
                suffix: 'OUTREACH',
                type: 'Programs & Partnerships',
                year: '1905 - Present',
                image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=2160&q=80'
            }
        ];

        function updateService(index) {
            const data = serviceData[index];
            const bg = document.getElementById('service-bg');

            bg.classList.add('opacity-0');
            bg.classList.remove('opacity-40');

            setTimeout(() => {
                bg.style.backgroundImage = `url('${data.image}')`;
                bg.classList.remove('opacity-0');
                bg.classList.add('opacity-40');
            }, 300);

            document.getElementById('service-poster-title').innerHTML = data.posterTitle;
            document.getElementById('service-poster-num').innerText = data.posterNum;
            document.getElementById('service-category').innerText = data.category;
            document.getElementById('service-main-title').innerHTML = `<span class="text-slate-400">HG.</span>${data.suffix}`;
            document.getElementById('service-type').innerText = data.type;
            document.getElementById('service-year').innerText = data.year;
            document.getElementById('current-service-num').innerText = data.id;

            const tabs = document.querySelectorAll('.service-tab');
            tabs.forEach((tab, i) => {
                const num = tab.querySelector('.tab-num');
                const label = tab.querySelector('.tab-label');

                if (i === index) {
                    tab.classList.remove('border-transparent', 'hover:border-slate-300', 'bg-transparent');
                    tab.classList.add('border-brand-accent', 'bg-slate-100');

                    num.classList.remove('text-slate-400');
                    num.classList.add('text-brand-accent');

                    label.classList.remove('font-medium', 'group-hover:text-slate-900', 'text-slate-400');
                    label.classList.add('font-semibold', 'text-slate-900');
                } else {
                    tab.classList.add('border-transparent', 'hover:border-slate-300', 'bg-transparent');
                    tab.classList.remove('border-brand-accent', 'bg-slate-100');

                    num.classList.add('text-slate-400');
                    num.classList.remove('text-brand-accent');

                    label.classList.add('font-medium', 'group-hover:text-slate-900', 'text-slate-400');
                    label.classList.remove('font-semibold', 'text-slate-900');
                }
            });
        }
      


        (function() {
            const creators = [
                {
                    index: "01",
                    name: "Dr. Sarah Jenkins",
                    role: "Dean of Science",
                    title: "LEARN, CREATE & LEAD",
                    titleSpan: "& LEAD",
                    desc: "We are committed to bold research and education that transforms lives and shapes the future of California and the world.",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=2160&q=80"
                },
                {
                    index: "02",
                    name: "Michael Chang",
                    role: "Lead Researcher",
                    title: "FUTURE OF INNOVATION",
                    titleSpan: "& BEYOND",
                    desc: "Developing sustainable energy solutions that will power the next generation of cities and communities across the globe.",
                    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=2160&q=80"
                },
                {
                    index: "03",
                    name: "Emily Davis",
                    role: "Policy Fellow",
                    title: "POLICY FOR CHANGE",
                    titleSpan: "FOR GOOD",
                    desc: "Working at the intersection of law and social justice to create more equitable systems for underserved populations.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=2160&q=80"
                },
                {
                    index: "04",
                    name: "Dr. Robert Cole",
                    role: "Marine Biologist",
                    title: "PROTECTING NATURE",
                    titleSpan: "TOGETHER",
                    desc: "Leading conservation efforts along the California coastline to preserve marine biodiversity for future generations.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2160&q=80"
                }
            ];

            let currentIndex = 0;

            window.changeSlide = function(direction) {
                const content = document.getElementById('slide-content');
                const bg = document.getElementById('carousel-bg');

                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    if (direction === 'next') {
                        currentIndex = (currentIndex + 1) % creators.length;
                    } else {
                        currentIndex = (currentIndex - 1 + creators.length) % creators.length;
                    }

                    const current = creators[currentIndex];
                    const nextIndex = (currentIndex + 1) % creators.length;
                    const next = creators[nextIndex];

                    document.getElementById('current-index').textContent = current.index;
                    document.getElementById('current-name').textContent = current.name;
                    document.getElementById('current-role').textContent = current.role;

                    const titleBase = current.title.replace(current.titleSpan, '').trim();
                    document.getElementById('slide-title').innerHTML = `${titleBase} <span class="text-stroke-bg" style="-webkit-text-stroke: 1px rgba(0,0,0,0.2); color: transparent;">${current.titleSpan}</span>`;
                    document.getElementById('slide-desc').textContent = current.desc;

                    document.getElementById('next-index').textContent = next.index;
                    document.getElementById('next-name').textContent = next.name;

                    const indicator = document.getElementById('mobile-indicator');
                    if(indicator) indicator.textContent = `${current.index} / 04`;

                    bg.style.backgroundImage = `url('${current.image}')`;

                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';

                }, 300);
            };
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0 h-full w-full">
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full hidden md:block"></div>
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full hidden lg:block"></div>
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full hidden md:block"></div>
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full hidden lg:block"></div>
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full hidden md:block"></div>
<div className="border-r border-slate-200 h-full"></div>
<div className="border-r border-slate-200 h-full"></div>
</div>

<header className="lg:px-12 flex sticky transition-all duration-300 group/header bg-white/90 w-full z-50 border-slate-200/60 border-b pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex z-20 gap-x-12 gap-y-12 items-center">

<a className="flex items-center gap-3 group z-20" href="/home">
<div className="flex transition-transform duration-300 group-hover:scale-105 text-sm font-semibold text-white tracking-tighter bg-slate-900 w-10 h-10 shadow-sm items-center justify-center font-sans">
            HG
          </div>
<div className="flex flex-col">
<span className="leading-none group-hover:text-brand-accent transition-colors duration-300 text-sm font-semibold text-slate-900 tracking-tight font-sans">
              Horizon Global
            </span>
<span className="text-[10px] uppercase leading-none group-hover:text-slate-900 transition-colors duration-300 font-medium text-slate-400 tracking-widest font-sans mt-1">
              University
            </span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="uppercase hover:text-slate-900 transition-colors duration-200 text-xs font-medium text-slate-500 tracking-widest font-sans pt-2 pb-2" href="/academics">
            Academics
          </a>
<a className="uppercase hover:text-slate-900 transition-colors duration-200 text-xs font-medium text-slate-500 tracking-widest pt-2 pb-2 font-sans" href="/admissions">
            Admissions
          </a>
<a className="uppercase hover:text-slate-900 transition-colors duration-200 text-xs font-medium text-slate-500 tracking-widest pt-2 pb-2 font-sans" href="/research">
            Research
          </a>
<a className="uppercase hover:text-slate-900 transition-colors duration-200 text-xs font-medium text-slate-500 tracking-widest pt-2 pb-2 font-sans" href="/campuslife">
            Campus Life
          </a>
<a className="uppercase hover:text-brand-accent transition-colors duration-200 text-xs font-medium text-slate-500 tracking-widest pt-2 pb-2 font-sans" href="/news">
            News
          </a>
</nav>
</div>

<div className="flex gap-5 items-center z-20">
<button aria-label="Search" className="hover:text-slate-900 transition-colors text-slate-400 pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</button>
<div className="w-px hidden md:block bg-slate-200 h-4"></div>
<a className="hidden md:flex items-center gap-1 uppercase hover:text-slate-900 transition-colors text-xs font-semibold text-slate-500 tracking-widest" href="#">
<span className="font-sans">Portal</span>
</a>
<a className="hidden items-center justify-center text-[10px] uppercase hover:bg-slate-900 transition-all duration-300 hover:shadow-md md:flex font-bold text-white tracking-widest bg-orange-600 h-9 pr-5 pl-5 shadow-sm font-sans" href="/applynow">
          Apply Now
        </a>

<button aria-label="Menu" className="lg:hidden text-slate-900 p-1 hover:text-brand-accent transition-colors relative z-50" onclick="const menu = document.getElementById('mobile-menu'); const icon = this.querySelector('svg'); menu.classList.toggle('hidden'); if(menu.classList.contains('hidden')) { icon.innerHTML = '&lt;line x1=\'4\' x2=\'20\' y1=\'12\' y2=\'12\'/&gt;&lt;line x1=\'4\' x2=\'20\' y1=\'6\' y2=\'6\'/&gt;&lt;line x1=\'4\' x2=\'20\' y1=\'18\' y2=\'18\'/&gt;'; } else { icon.innerHTML = '&lt;path d=\'M18 6 6 18\'/&gt;&lt;path d=\'m6 6 12 12\'/&gt;'; }">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 lg:hidden shadow-xl transition-all duration-300 origin-top animate-in slide-in-from-top-5" id="mobile-menu">
<div className="flex flex-col p-6 gap-6">
<nav className="flex flex-col gap-4">
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:pl-2 transition-all duration-200 uppercase tracking-widest border-b border-slate-100 pb-3 font-sans" href="/academics">
              Academics
            </a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:pl-2 transition-all duration-200 uppercase tracking-widest border-b border-slate-100 pb-3 font-sans" href="/admissions">
              Admissions
            </a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:pl-2 transition-all duration-200 uppercase tracking-widest border-b border-slate-100 pb-3 font-sans" href="/research">
              Research
            </a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:pl-2 transition-all duration-200 uppercase tracking-widest border-b border-slate-100 pb-3 font-sans" href="/campuslife">
              Campus Life
            </a>
<a className="text-sm font-semibold text-brand-accent hover:text-orange-700 hover:pl-2 transition-all duration-200 uppercase tracking-widest border-b border-slate-100 pb-3 font-sans" href="/news">
              News
            </a>
</nav>
<div className="flex flex-col gap-4 mt-2">
<a className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors" href="#">
<span className="font-sans">Student Portal</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="flex items-center justify-center text-xs font-bold text-white uppercase tracking-widest bg-slate-900 h-12 w-full shadow-sm hover:bg-orange-600 transition-colors duration-300 font-sans" href="/applynow">
              Apply Now
            </a>
</div>
</div>
</div>
</header>

<section className="min-h-[90vh] flex flex-col lg:px-12 w-full pt-20 pr-6 pl-6 relative justify-center">

<div className="mask-image-gradient bg-center transition-all duration-700 opacity-10 mix-blend-multiply w-full h-3/4 bg-cover absolute top-0 right-0" id="year-background" style={{backgroundImage: 'url("https://cdn.midjourney.com/f69b70ff-95c9-4871-a1c4-7e23f8500e34/0_0.png")'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
<div className="lg:col-span-8 relative gap-x-6 gap-y-6">

<h1 className="text-[12rem] leading-none bg-clip-text select-none md:text-[18rem] lg:text-[22rem] text-transparent tracking-tighter bg-gradient-to-r from-orange-400 to-orange-600 opacity-90 pb-10 drop-shadow-sm font-sans font-semibold">
            HG
          </h1>
<div className="md:left-12 lg:left-24 transform -translate-y-1/2 opacity-30 mix-blend-multiply absolute top-1/2 left-4 gap-x-6 gap-y-6 pointer-events-none">
<h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] leading-none tracking-tighter text-slate-200 blur-sm font-sans font-semibold">
              V8
            </h1>
</div>
<div className="-mt-10 md:-mt-20 lg:-mt-32 md:pl-4 pl-2 relative gap-x-6 gap-y-6">
<h2 className="text-3xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight uppercase leading-tight font-sans font-semibold">
              Horizon Global
              <span className="text-slate-400 font-sans font-semibold">
                University
              </span>
</h2>
<div className="w-24 h-1 bg-slate-900 mt-8"></div>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col gap-6 font-medium text-slate-400 pr-12 gap-x-6 gap-y-6 items-end justify-center">

<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="21">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator font-sans">
              Environment
            </div>
<span className="text-xs hover:text-slate-900 transition-colors year-text font-medium font-sans">
              '21
            </span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="22">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-slate-900 transition-colors year-text font-medium font-sans">
              '22
            </span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="23">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-slate-900 transition-colors year-text font-medium font-sans">
              '23
            </span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="24">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-100 transition-opacity duration-300 indicator"></div>
<span className="text-sm text-slate-900 transition-colors year-text font-medium font-sans">
              '24
            </span>
</div>
<div className="relative group cursor-pointer year-item w-full flex justify-end" data-year="25">
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-0 transition-opacity duration-300 indicator"></div>
<span className="text-xs hover:text-slate-900 transition-colors year-text font-medium font-sans">
              '25
            </span>
</div>

<div className="glass group cursor-pointer hover:border-brand-accent/50 transition-all text-right max-w-xs rounded-sm mt-12 pt-6 pr-6 pb-6 pl-6 gap-x-6-y-6 shadow-sm">
<div className="flex text-brand-accent mb-2 gap-x-6 gap-y-6 justify-end">
<iconify-icon icon="solar:play-circle-bold-duotone" width="32"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-wide font-sans">
              CAMPUS TOUR
            </p>
<p className="text-xs text-slate-500 mt-1 font-sans" id="showreel-year">
              Explore our campus
            </p>
</div>
</div>
</div>

</section>

<section className="z-20 lg:px-12 border-slate-200 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="mb-16">
<span className="text-brand-accent text-xs font-bold tracking-widest uppercase font-sans">
          OUR MISSION
        </span>
<h3 className="text-slate-900 text-4xl md:text-5xl mt-4 tracking-tight font-sans font-semibold">
          Strategic Pillars
        </h3>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200">

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-300 cursor-pointer transition-colors group bg-transparent" onclick="updateService(0)">
<span className="tab-num text-xs text-slate-400 block mb-2 transition-colors font-sans">
            01.
          </span>
<span className="tab-label text-lg font-medium group-hover:text-slate-900 text-slate-400 transition-colors font-sans">
            Academics
          </span>
</div>

<div className="service-tab p-6 border-t-2 border-brand-accent cursor-pointer bg-slate-100 transition-colors group" onclick="updateService(1)">
<span className="tab-num text-xs text-brand-accent block mb-2 transition-colors font-sans">
            02.
          </span>
<span className="tab-label text-lg font-semibold text-slate-900 transition-colors font-sans">
            Research
          </span>
</div>

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-300 cursor-pointer transition-colors group bg-transparent" onclick="updateService(2)">
<span className="tab-num text-xs text-slate-400 block mb-2 transition-colors font-sans">
            03.
          </span>
<span className="tab-label text-lg font-medium group-hover:text-slate-900 text-slate-400 transition-colors font-sans">
            Wellness
          </span>
</div>

<div className="service-tab p-6 border-t-2 border-transparent hover:border-slate-300 cursor-pointer transition-colors group bg-transparent" onclick="updateService(3)">
<span className="tab-num text-xs text-slate-400 block mb-2 transition-colors font-sans">
            04.
          </span>
<span className="tab-label text-lg font-medium group-hover:text-slate-900 text-slate-400 transition-colors font-sans">
            Community
          </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-x border-b border-slate-200">

<div className="relative bg-black p-8 flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-all duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e689a72-748a-4afb-94ec-f307548db3b8_1600w.webp)]" id="service-bg"></div>
<div className="absolute inset-0 mix-blend-overlay bg-amber-900/30"></div>

<div className="relative z-10 border border-white/20 p-8 w-full max-w-md h-[450px] flex flex-col justify-between backdrop-blur-sm bg-white/5">
<div className="flex justify-between items-start">
<h4 className="text-5xl leading-none tracking-tighter text-amber-400 font-sans font-semibold" id="service-poster-title">
                HG.2
                <br/>
                INNOVATION
                <br/>
                IMPACT
              </h4>
<span className="text-white text-xl font-sans font-semibold" id="service-poster-num">
                +02
              </span>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center gap-4">
<div className="w-12 h-12 border flex items-center justify-center hover:text-black transition-colors cursor-pointer border-amber-400 text-amber-400 hover:bg-amber-400">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
<div className="text-xs font-mono uppercase text-white leading-tight font-sans">
                  WatchShowcase00:45
                </div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 mb-1 font-sans">
                  CATEGORY
                </div>
<div className="text-white font-bold text-sm uppercase font-sans" id="service-category">
                  Innovation
                </div>
</div>
</div>
</div>
</div>

<div className="bg-brand-panel p-12 lg:p-20 flex flex-col justify-center relative border-l border-slate-200">
<h3 className="text-4xl lg:text-5xl text-slate-900 tracking-tight mb-8 font-sans font-semibold" id="service-main-title">
            DISCOVERY LAB
          </h3>
<div className="w-12 h-0.5 bg-slate-300 mb-8"></div>
<div className="space-y-8">
<div className="">
<p className="text-xs font-bold text-slate-400 uppercase mb-2 font-sans">
                Project Type
              </p>
<p className="text-slate-900 text-lg font-sans" id="service-type">
                Global Research
              </p>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase mb-2 font-sans">
                Year
              </p>
<p className="text-slate-900 text-lg font-sans" id="service-year">
                1905 - Present
              </p>
</div>
<a className="inline-flex items-center gap-3 text-sm font-semibold text-white bg-slate-900 py-4 px-8 mt-4 hover:bg-slate-800 transition-colors w-max shadow-lg shadow-slate-200 font-sans" href="#">
              EXPLORE RESEARCH
              <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
</a>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full border-l border-slate-200 hidden xl:flex flex-col">
<button className="h-1/2 flex items-center justify-center hover:bg-black/5 transition-colors text-slate-400 hover:text-slate-900 font-sans">
              Learn More
            </button>
<button className="h-1/2 flex items-center justify-center border-t border-slate-200 hover:bg-black/5 transition-colors text-slate-400 hover:text-slate-900">
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex border-x bg-white h-16 border-slate-200 border-b items-center">
<div className="h-full w-32 flex items-center justify-center text-white font-bold text-sm bg-brand-accent font-sans" id="current-service-num">
          02
        </div>
<div className="flex-1 flex text-xs text-slate-400 font-mono justify-around">
<span className="py-6 border-t-2 border-transparent font-sans">03</span>
<span className="py-6 border-t-2 border-transparent font-sans">02</span>
<span className="py-6 border-t-2 border-transparent font-sans">01</span>
<span className="py-6 border-t-2 border-transparent font-sans">00</span>
</div>
<div className="w-32 h-full border-l border-slate-200 flex items-center justify-center text-xs text-slate-400 font-sans">
          TOTAL: 24
        </div>
</div>

</section>
<section className="z-20 group/section border-slate-200 border-b relative">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">

<div className="lg:col-span-3 lg:p-10 flex flex-col z-10 lg:pl-12 bg-white border-slate-200 border-r pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.5)]"></span>
<span className="text-xs font-bold text-slate-400 tracking-widest uppercase font-mono font-sans">
                LATEST NEWS
              </span>
</div>
<h3 className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none mb-6 font-sans font-semibold">
              Global
              <span className="text-slate-400 font-sans font-semibold">Reach</span>
</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium max-w-xs font-sans">
              Leading stories from our academic community.
            </p>

<div className="grid grid-cols-2 gap-4 py-8 border-t border-slate-100">
<div className="">
<span className="block text-2xl text-slate-900 tracking-tight font-sans font-semibold">
                  3
                </span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold font-mono mt-1 font-sans">
                  Campuses
                </span>
</div>
<div className="">
<span className="block text-2xl text-slate-900 tracking-tight font-sans font-semibold">
                  300k+
                </span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold font-mono mt-1 font-sans">
                  Alumni
                </span>
</div>
</div>
</div>
<div className="pt-8">
<a className="group inline-flex items-center justify-between w-full p-4 border border-slate-200 hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300 bg-slate-50" href="#">
<span className="text-xs font-bold text-slate-900 tracking-widest uppercase group-hover:text-brand-accent transition-colors font-mono font-sans">
                View Archive
              </span>
<iconify-icon className="text-slate-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:pr-12 bg-slate-50">

<div className="group aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer border-slate-200 border-r border-b relative">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url("https://cdn.midjourney.com/86b1b178-90ed-400f-bcb7-38d2cd3151b2/0_0.png")'}}></div>
<div className="group-hover:bg-slate-900/40 transition-colors duration-500 bg-slate-900/60 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/60 border border-white/20 px-2 py-1 backdrop-blur-sm font-sans">
              01
            </span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-slate-900 tracking-widest uppercase bg-brand-accent px-2 py-1 rounded-sm shadow-lg shadow-black/20 font-sans">
                    Economy
                  </span>
</div>
<h4 className="text-3xl text-white tracking-tight mb-1 font-sans font-semibold">
                  Eco Lab
                </h4>
<p className="text-slate-200 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed translate-y-2 group-hover:translate-y-0 transform font-sans">
                  Developing sustainable solutions for a changing planet.
                </p>
</div>
</div>
</div>

<div className="group relative border-b border-slate-200 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url("https://cdn.midjourney.com/db93e083-28eb-42c6-bc46-69238e744c29/0_0.png")'}}></div>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500"></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/60 border border-white/20 px-2 py-1 backdrop-blur-sm font-sans">
              02
            </span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-white tracking-widest uppercase bg-brand-cyan px-2 py-1 rounded-sm shadow-lg shadow-black/20 font-sans">
                    Medicine
                  </span>
</div>
<h4 className="text-3xl text-white tracking-tight mb-1 font-sans font-semibold">
                  DNA Mapping
                </h4>
<p className="text-slate-200 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed translate-y-2 group-hover:translate-y-0 transform font-sans">
                  Mapping the future of personalized medicine and genetic
                  research.
                </p>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-r border-slate-200 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out" style={{backgroundImage: 'url("https://cdn.midjourney.com/f69b70ff-95c9-4871-a1c4-7e23f8500e34/0_0.png")'}}></div>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500"></div>
<span className="absolute top-6 right-6 text-xs font-mono text-white/60 border border-white/20 px-2 py-1 backdrop-blur-sm font-sans">
              03
            </span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="overflow-hidden mb-2">
<span className="inline-block text-[10px] font-bold text-white tracking-widest uppercase px-2 py-1 rounded-sm shadow-lg shadow-black/20 bg-brand-slate font-sans">
                    Culture
                  </span>
</div>
<h4 className="text-3xl text-white tracking-tight mb-1 font-sans font-semibold">
                  New Media
                </h4>
<p className="group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed group-hover:translate-y-0 transform text-sm text-slate-200 opacity-0 max-w-sm translate-y-2 font-sans">
                  Preserving cultural heritage through advanced digital
                  archiving.
                </p>
</div>
</div>
</div>

<div className="group relative border-slate-200 aspect-[4/3] md:aspect-auto overflow-hidden cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors duration-500">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<span className="absolute top-6 right-6 text-xs font-mono text-slate-400 border border-slate-300 px-2 py-1 font-sans">
              04
            </span>
<div className="absolute inset-0 flex items-center justify-center p-12">
<div className="text-center">
<div className="w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center mx-auto mb-6 text-slate-500 group-hover:text-white group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300 scale-100 group-hover:scale-110">
<iconify-icon className="" icon="lucide:plus" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-slate-900 tracking-tight mb-2 group-hover:text-brand-accent transition-colors font-sans font-semibold">
                  View All
                </h4>
<p className="text-xs text-slate-500 uppercase tracking-widest font-mono font-sans">
                  Read All Stories
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 lg:py-48 px-6 lg:px-12 overflow-hidden bg-brand-dark transition-colors duration-700">

<div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 transition-all duration-700 ease-in-out scale-105" id="carousel-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp'}}></div>
<div className="absolute inset-0 bg-white/60 z-0"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
<div className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full border-[40px] border-slate-200"></div>
<div className="absolute w-[60vw] h-[60vw] md:w-[450px] md:h-[450px] rounded-full border-[2px] border-slate-300"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center min-h-[500px]">

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-r border-slate-200 pr-8 min-h-[400px]">
<div className="transition-opacity duration-300" id="left-info">
<span className="text-brand-accent text-3xl block mb-1 font-sans font-semibold" id="current-index">
              01
            </span>
<p className="text-xs text-slate-900 font-medium uppercase tracking-widest font-sans" id="current-name">
              Dr. Sarah Jenkins
            </p>
<p className="text-xs text-slate-500 font-medium mt-1 font-sans" id="current-role">
              Dean of Science
            </p>
</div>
<button className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all group rounded-full hover:bg-brand-accent hover:border-brand-accent hover:text-white" onclick="changeSlide('prev')">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
</div>

<div className="lg:col-span-8 flex flex-col justify-center items-center text-center">
<div className="transition-all duration-500 ease-out transform opacity-100 translate-y-0" id="slide-content">
<h2 className="text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tighter leading-none mb-12 drop-shadow-sm font-sans font-semibold" id="slide-title">
              LEARN, CREATE
              <span className="text-stroke-bg font-sans font-semibold" style={{WebkitTextStroke: '1px rgba(0,0,0,0.2)', color: 'transparent'}}>
                &amp; LEAD
              </span>
</h2>
<div className="max-w-xl mx-auto">
<p className="text-base md:text-lg text-slate-500 leading-relaxed font-normal font-sans" id="slide-desc">
                We are committed to bold research and education that transforms
                lives and shapes the future of California and the world.
              </p>
<div className="w-16 h-1 mx-auto mt-10 transition-all duration-500 hover:w-24 bg-brand-accent"></div>
</div>
</div>
</div>

<div className="lg:col-span-2 hidden lg:flex flex-col justify-between h-full py-12 border-l border-slate-200 pl-8 text-right min-h-[400px]">
<div className="transition-opacity duration-300" id="right-info">
<span className="text-slate-400 text-xs font-bold block mb-2 uppercase tracking-widest font-sans">
              Next Up
            </span>
<span className="text-slate-300 text-xl block mb-1 font-sans font-semibold" id="next-index">
              02
            </span>
<p className="text-xs text-slate-500 font-medium uppercase tracking-widest font-sans" id="next-name">
              James Chen
            </p>
</div>
<div className="flex justify-end">
<button className="w-12 h-12 bg-transparent border border-slate-200 flex items-center justify-center text-slate-600 transition-all group rounded-full hover:border-brand-accent hover:bg-brand-accent hover:text-white" onclick="changeSlide('next')">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden col-span-1 flex justify-between items-center w-full px-4 border-t border-slate-200 pt-8">
<button className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-slate-900 rounded-full" onclick="changeSlide('prev')">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<span className="text-brand-accent font-mono text-sm font-sans" id="mobile-indicator">
            01 / 04
          </span>
<button className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-slate-900 rounded-full" onclick="changeSlide('next')">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

</section>

<section className="z-20 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 pr-6 pb-24 pl-6 relative gap-x-0 gap-y-0">

<div className="overflow-hidden group md:p-16 bg-gradient-to-r from-zinc-400 to-zinc-600 px-12 py-12 relative">
<div className="bg-center opacity-20 mix-blend-overlay bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a64fc58-a191-4e40-9069-9b653cda52dc_800w.webp)]"></div>
<div className="z-10 flex flex-col min-h-[400px] h-full relative justify-between">
<div className="border-t border-white/30 pt-4 inline-block w-full">
<span className="text-xs font-bold text-white/80 uppercase tracking-wider font-sans">
              09.15.2025
            </span>
</div>
<div className="mt-8">
<h3 className="md:text-5xl leading-tight text-4xl text-white tracking-tight mb-2 font-sans font-semibold">
              ENROLLMENT OPEN
            </h3>
<h4 className="text-xl md:text-2xl text-white/90 font-sans font-semibold">
              SPRING 2025 COHORT
            </h4>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<span className="bg-black/20 text-white text-[10px] font-bold uppercase px-3 py-2 tracking-wider font-sans">
              Undergraduate
            </span>
<span className="bg-black/20 text-white text-[10px] font-bold uppercase px-3 py-2 tracking-wider font-sans">
              Graduate
            </span>
</div>
<div className="mt-12">
<button className="uppercase hover:bg-slate-100 transition-colors text-brand-amber text-xs font-bold tracking-widest font-sans bg-white pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/applynow'" role="button">
              Apply Now
            </button>
</div>
</div>
</div>

<div className="md:p-16 border-slate-200 border-t border-r border-b pt-12 pr-12 pb-12 pl-12 relative">
<div className="h-full flex flex-col justify-between min-h-[400px]">
<div className="border-t border-slate-300 pt-4 inline-block w-full">
<span className="text-xs font-bold text-brand-accent uppercase tracking-wider font-sans">
              08.20.2025
            </span>
</div>
<div className="mt-8">
<h3 className="text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-2 font-sans font-semibold">
              PRECISION IN RESEARCH
            </h3>
<p className="text-slate-500 mt-4 max-w-md text-sm leading-relaxed font-sans">
              Explore our new facility dedicated to interdisciplinary research
              and student entrepreneurship.
            </p>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<span className="bg-slate-200 text-slate-600 text-[10px] font-bold uppercase px-3 py-2 tracking-wider font-sans">
              Animation
            </span>
<span className="bg-slate-200 text-slate-600 text-[10px] font-bold uppercase px-3 py-2 tracking-wider font-sans">
              Particle Insights
            </span>
</div>
<div className="mt-12">
<button className="bg-brand-accent text-white text-xs font-bold uppercase px-8 py-4 tracking-widest transition-colors hover:bg-amber-600 font-sans">
              Watch Demo
            </button>
</div>
</div>
</div>
</section>
<section className="z-20 relative bg-white border-t border-slate-200 lg:px-12 px-6 py-24 group/events">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">

<div className="absolute left-1/3 top-0 bottom-0 w-px bg-slate-200/50 hidden lg:block"></div>
<div className="absolute right-1/4 top-0 bottom-0 w-px bg-slate-200/50 hidden lg:block"></div>

<div className="lg:col-span-4 lg:sticky lg:top-32 relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-brand-accent"></div>
<span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-sans">
              Happenings
            </span>
</div>
<h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-6 font-sans font-semibold">
            Public
            <br/>
            Symposiums
          </h2>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-10 font-normal font-sans">
            Join our community of scholars for open discussions on the future of
            technology, society, and the arts. Open to the public.
          </p>
<a className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-900 hover:text-brand-accent transition-colors group/link" href="#">
<span className="font-sans">View Full Calendar</span>
<iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="lg:col-span-8 flex flex-col border-t border-slate-200 relative z-10">

<div className="group relative border-b border-slate-200 py-10 transition-colors hover:bg-slate-50/80 -mx-6 px-6 lg:mx-0 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">

<div className="flex flex-col md:w-32 shrink-0 border-l-2 border-transparent group-hover:border-brand-accent pl-0 group-hover:pl-4 transition-all duration-300">
<span className="text-4xl text-slate-300 group-hover:text-slate-900 transition-colors font-sans font-semibold">
                  12
                </span>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1 font-sans">
                  October
                </span>
</div>

<div className="grow">
<div className="flex flex-wrap gap-3 mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent border border-brand-accent/20 px-2 py-1 rounded-sm bg-brand-accent/5 font-sans">
                    Innovation
                  </span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 border border-slate-200 px-2 py-1 rounded-sm font-sans">
                    14:00 PM
                  </span>
</div>
<h3 className="text-xl md:text-2xl text-slate-900 tracking-tight group-hover:text-brand-accent transition-colors mb-2 font-sans font-semibold">
                  Quantum Supremacy: Myths &amp; Reality
                </h3>
<p className="text-sm text-slate-500 font-normal max-w-lg leading-relaxed font-sans">
                  Dr. Eleanor Vance discusses the practical timeline for quantum
                  adoption in finance and security systems.
                </p>
</div>

<div className="shrink-0 md:pl-4 flex items-center justify-end">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300 scale-90 group-hover:scale-100 shadow-sm">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="lg:px-12 bg-brand-panel border-slate-200 border-t pt-20 pr-6 pb-20 pl-6 z-20 relative">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 pb-16 border-b border-slate-200">
<div className="max-w-4xl">
<h2 className="text-6xl md:text-8xl lg:text-9xl text-slate-900 tracking-tighter leading-none mb-6 font-sans font-semibold">
            DEFINE YOUR
            <br/>
<span className="text-slate-400 font-sans font-semibold">FUTURE.</span>
</h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6 min-w-max">
<p className="text-slate-500 font-medium text-sm max-w-xs md:text-right leading-relaxed font-sans">
            Join a community of innovators shaping the world. Applications for
            Spring 2025 are now open.
          </p>
<a className="inline-flex items-center justify-center hover:bg-brand-accent uppercase transition-colors duration-300 text-xs font-semibold text-white tracking-widest font-sans bg-slate-900 h-14 pr-8 pl-8" href="/applynow">
            Apply Now
          </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-16">

<div className="col-span-2 lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-12">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 border border-slate-900 flex items-center justify-center font-semibold text-slate-900 text-lg tracking-tighter hover:bg-slate-900 hover:text-white transition-colors duration-300 cursor-pointer font-sans">
                HG
              </div>
<div>
<p className="text-sm font-semibold text-slate-900 uppercase tracking-wide font-sans">
                  Horizon Global University
                </p>
<p className="text-xs text-slate-400 font-medium mt-0.5 font-sans">
                  Est. 1905
                </p>
</div>
</div>
<div className="space-y-2 text-sm font-medium">
<a className="block text-slate-900 hover:text-brand-accent transition-colors font-sans" href="tel:+6565166666">
                +65 6516 6666
              </a>
<a className="block text-slate-900 hover:text-brand-accent transition-colors font-sans" href="mailto:info@hgu.edu.sg">
                info@hgu.edu.sg
              </a>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-8 font-sans">
            Academics
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Undergraduate
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Graduate Programs
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Professional Ed
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Summer Sessions
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Libraries
              </a>
</li>
</ul>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-8 font-sans">
            Admissions
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="">
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                How to Apply
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Tuition &amp; Fees
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Financial Aid
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Campus Tours
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                International
              </a>
</li>
</ul>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-8 font-sans">
            Campus
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Arts &amp; Culture
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Athletics
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Housing &amp; Dining
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Health &amp; Wellness
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Safety
              </a>
</li>
</ul>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-8 font-sans">
            Resources
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="">
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Directory
              </a>
</li>
<li className="">
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Maps
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Employment
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                News
              </a>
</li>
<li>
<a className="hover:text-brand-accent transition-colors font-sans" href="#">
                Giving
              </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 mt-20 border-t border-slate-200">
<p className="text-xs font-medium text-slate-400 font-sans">
          © 2025 Horizon Global University. All rights reserved.
        </p>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#">
            Privacy Policy
          </a>
<a className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#">
            Terms of Use
          </a>
<a className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#">
            Accessibility
          </a>
<a className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#">
            Sitemap
          </a>
</div>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
