import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      (function() {
        const container = document.getElementById('hero-gallery-container');
        const track = document.getElementById('hero-gallery-track');
        const prevBtn = document.getElementById('hero-gallery-prev');
        const nextBtn = document.getElementById('hero-gallery-next');
        const indicator = document.getElementById('hero-gallery-indicator');
        let index = 0;
        const total = 3;

        function updateSlider() {
            // Slide transition
            track.style.transform = `translateX(-${index * 100}%)`;
            // Update indicator text
            indicator.textContent = String(index + 1).padStart(2, '0');
        }

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            index = (index - 1 + total) % total;
            updateSlider();
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            index = (index + 1) % total;
            updateSlider();
        });

        // Keyboard navigation support within component
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
        });
      })();
    


          (function() {
            const projects = [
              {
                title: "Civic",
                subtitle: "The Innovation Hub",
                description: "Phasellus nibh eros, pellentesque et velit ut, tincidunt sagittis ante. Mauris dictum dolor eu elit mattis facilisis. Redefining urban spaces for the modern collective.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed23e0cc-96ba-4b91-91e4-10e9c468c87d_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0df3856-8c00-497c-a749-6e0d6ecb27d9_1600w.webp"
              },
              {
                title: "Aurora",
                subtitle: "Cultural Center",
                description: "A symphony of light and form, Aurora reimagines the traditional museum experience through dynamic spatial narratives and sustainable design principles.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12ae025d-aa07-4566-8c33-f8793b0c6952_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70c7044-8476-4d86-b5d5-fe5bd8d8d8aa_1600w.webp"
              },
              {
                title: "Nexus",
                subtitle: "Mixed-Use Tower",
                description: "Rising 52 stories above the urban landscape, Nexus integrates residential, commercial, and public spaces within a singular sculptural vision.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp"
              },
              {
                title: "Solace",
                subtitle: "Private Residence",
                description: "Nestled within a forest clearing, Solace embraces biophilic design to create a sanctuary that breathes with its natural surroundings.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137c11b4-cb83-47e7-a67b-0fbc4bc7c94c_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg"
              },
              {
                title: "Vertex",
                subtitle: "Corporate Campus",
                description: "A groundbreaking workspace that prioritizes employee wellbeing through expansive gardens, natural ventilation, and collaborative zones.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d877b5a4-960a-4412-9cd7-c43751737003_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73a79fb6-16cb-49f6-83d5-b92cfed45baa_1600w.jpg"
              },
              {
                title: "Prism",
                subtitle: "Art Gallery",
                description: "Light becomes the medium as Prism's faceted glass facade creates ever-changing interior environments throughout the day.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/583b7438-312a-4a71-a636-cc8c7cb78548_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244e8be6-ef9c-4c85-9b84-8cf62a7080a3_1600w.webp"
              },
              {
                title: "Haven",
                subtitle: "Wellness Retreat",
                description: "An architectural meditation on tranquility, Haven combines minimalist aesthetics with ancient healing traditions.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0df3856-8c00-497c-a749-6e0d6ecb27d9_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12ae025d-aa07-4566-8c33-f8793b0c6952_1600w.webp"
              },
              {
                title: "Forge",
                subtitle: "Industrial Lofts",
                description: "Transforming a historic steel mill into contemporary living spaces while preserving the raw industrial character.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed23e0cc-96ba-4b91-91e4-10e9c468c87d_1600w.webp"
              },
              {
                title: "Cascade",
                subtitle: "Waterfront Hotel",
                description: "Terraced gardens spill down toward the harbor, creating a vertical landscape that blurs the line between architecture and nature.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_1600w.jpg"
              },
              {
                title: "Ember",
                subtitle: "Restaurant Complex",
                description: "Fire and earth inspire this culinary destination, featuring open kitchens, clay finishes, and warm ambient lighting.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73a79fb6-16cb-49f6-83d5-b92cfed45baa_1600w.jpg",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d877b5a4-960a-4412-9cd7-c43751737003_1600w.webp"
              },
              {
                title: "Zephyr",
                subtitle: "Transit Hub",
                description: "Movement choreographed through space, Zephyr streamlines the commuter experience with intuitive wayfinding and soaring canopies.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70c7044-8476-4d86-b5d5-fe5bd8d8d8aa_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/583b7438-312a-4a71-a636-cc8c7cb78548_1600w.jpg"
              },
              {
                title: "Apex",
                subtitle: "Observatory Tower",
                description: "Reaching toward the cosmos, Apex houses state-of-the-art astronomical equipment within a sculptural silhouette.",
                img1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244e8be6-ef9c-4c85-9b84-8cf62a7080a3_1600w.webp",
                img2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137c11b4-cb83-47e7-a67b-0fbc4bc7c94c_1600w.jpg"
              }
            ];

            let currentIndex = 0;
            const totalSlides = projects.length;

            function updateSlide() {
              const project = projects[currentIndex];
              document.getElementById('project-title').textContent = project.title;
              document.getElementById('project-subtitle').textContent = project.subtitle;
              document.getElementById('project-description').textContent = project.description;
              document.getElementById('gallery-img-1').src = project.img1;
              document.getElementById('gallery-img-2').src = project.img2;
              document.getElementById('current-slide').textContent = String(currentIndex + 1).padStart(2, '0');
              document.getElementById('total-slides').textContent = totalSlides;
            }

            document.getElementById('next-btn').addEventListener('click', function() {
              currentIndex = (currentIndex + 1) % totalSlides;
              updateSlide();
            });

            document.getElementById('prev-btn').addEventListener('click', function() {
              currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
              updateSlide();
            });
          })();
        


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed grid-lines pointer-events-none z-0 top-0 right-0 bottom-0 left-0 overflow-hidden" style={{}}>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">
<defs>
</defs>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="25%" y2="25%">
<animate attributename="x1" dur="8s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="x2" dur="8s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="50%" y2="50%">
<animate attributename="x1" dur="10s" repeatcount="indefinite" values="100%;-200"></animate>
<animate attributename="x2" dur="10s" repeatcount="indefinite" values="120%;0"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient1)" strokeWidth="2" x1="-200" x2="0" y1="75%" y2="75%">
<animate attributename="x1" dur="12s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="x2" dur="12s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="25%" x2="25%" y1="-200" y2="0">
<animate attributename="y1" dur="9s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="9s" repeatcount="indefinite" values="0;120%"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="50%" x2="50%" y1="-200" y2="0">
<animate attributename="y1" dur="11s" repeatcount="indefinite" values="100%;-200"></animate>
<animate attributename="y2" dur="11s" repeatcount="indefinite" values="120%;0"></animate>
</line>

<line filter="url(#neonGlow)" stroke="url(#neonGradient2)" strokeWidth="2" x1="75%" x2="75%" y1="-200" y2="0">
<animate attributename="y1" dur="7s" repeatcount="indefinite" values="-200;100%"></animate>
<animate attributename="y2" dur="7s" repeatcount="indefinite" values="0;120%"></animate>
</line>
</svg>
</div>

<nav className="flex md:px-12 z-50 border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between" style={{}}>
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[24px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f8505c8-59ed-4f44-a5ac-bb1f54727fdf_320w.png)] bg-cover rounded-full" href="#"></a>
<div className="relative">
<button className="group flex items-center gap-3 px-5 py-2 border border-white/20 hover:bg-white/10 transition duration-300 bg-transparent" onclick="document.getElementById('nav-dropdown').classList.toggle('hidden')" style={{}}>
<svg className="lucide lucide-menu w-5 h-5 text-white stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="text-sm font-medium tracking-wide">Menu</span>
</button>
<div className="hidden absolute right-0 top-full mt-2 w-56 bg-zinc-900 border border-white/10 shadow-2xl py-2 z-50 backdrop-blur-xl" id="nav-dropdown" style={{}}>
<a className="block px-6 py-3 text-sm font-medium text-white/70 hover:bg-white/5 transition-colors tracking-wide border-b border-white/5 hover:text-amber-600" href="#" style={{}}>Projects</a>
<a className="block px-6 py-3 text-sm font-medium text-white/70 hover:bg-white/5 transition-colors tracking-wide border-b border-white/5 hover:text-amber-600" href="#" style={{}}>Workshop</a>
<a className="block px-6 py-3 text-sm font-medium text-white/70 hover:bg-white/5 transition-colors tracking-wide border-b border-white/5 hover:text-amber-600" href="#" style={{}}>Awards</a>
<a className="block px-6 py-3 text-sm font-medium text-white/70 hover:bg-white/5 transition-colors tracking-wide hover:text-amber-600" href="#" style={{}}>Contact</a>
</div>
</div>
</nav>

<main className="z-10 relative">

<section className="md:pt-24 md:pb-32 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-0 border-white/10 border-b pt-16 pr-6 pb-20 pl-6 relative gap-x-0 gap-y-0" style={{}}><video autoplay="" className="z-10 opacity-5 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/6b32f77f-a909-458f-a1b2-5a5c434c4fa0/1.mp4"></video>

<div className="col-span-1 flex flex-col z-20 h-full relative justify-between">
<div className="mb-16">
<p className="text-[10px] uppercase md:text-xs font-semibold text-[#ffffff]/60 tracking-widest mb-2">
              Spotlight: Architectural Sculpture
            </p>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4">
              APEX
              <span className="text-amber-500" style={{}}>+</span>
</h1>
<div className="h-px w-full bg-gradient-to-r from-white/30 to-transparent my-6"></div>
</div>
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="group">
<svg aria-hidden="true" className="iconify text-4xl mb-4 group-hover:text-white transition-colors iconify--solar text-amber-500" data-icon="solar:buildings-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h7a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path>
<path d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h-6V9c0-1.886 0-2.828-.586-3.414C13.842 5.013 12.928 5 11.126 5V3.5c.084-.387.225-.68.46-.914C12.17 2 13.114 2 15 2" fill="currentColor" opacity=".5"></path>
</svg>
<h3 className="text-sm font-semibold leading-tight mb-2">
                Corporate &amp;
                <br/>
                Public
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-amber-300/50" style={{}}></div>
</div>
<div className="group">
<svg aria-hidden="true" className="iconify text-4xl mb-4 group-hover:text-white transition-colors iconify--solar text-amber-500" data-icon="solar:home-angle-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" fill="currentColor" opacity=".5"></path>
<path d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" fill="currentColor"></path>
</svg>
<h3 className="text-sm font-semibold leading-tight mb-2">
                Private &amp;
                <br/>
                Residential
              </h3>
<div className="w-4 h-0.5 group-hover:w-8 transition-all bg-amber-300/50" style={{}}></div>
</div>
</div>
<div className="flex gap-12 mt-auto text-xs font-medium tracking-wide text-amber-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#" style={{}}>
              Portfolio
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#" style={{}}>
              Client List
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex md:py-0 pt-10 pb-10 relative items-center justify-center">

<div className="aspect-[3/4] group overflow-hidden md:aspect-auto md:h-[600px] w-full relative" id="hero-gallery-container" style={{}}>

<div className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-full h-full" id="hero-gallery-track" style={{}}>

<div className="flex-shrink-0 z-10 w-full h-full relative" style={{}}>
<img alt="Abstract Architecture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71fe2f32-4e59-42cb-af7b-2352e74c0f12_3840w.png"/>
<div className="bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2" style={{}}>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border text-[10px] font-mono uppercase backdrop-blur-md border-amber-500/30 bg-amber-500/10 text-amber-500" style={{}}>Concept</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1" style={{}}>Structural Void</h3>
<p className="text-sm text-white/60 line-clamp-1" style={{}}>Exploration of negative space in vertical forms.</p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Modern Apartment House" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/141773e9-8495-40bc-8744-ebde5e48f6c4_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-orange-500/30 bg-orange-500/10 text-[10px] font-mono uppercase text-orange-300 backdrop-blur-md" style={{transition: 'outline 0.1s ease-in-out'}}>Residential</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1" style={{}}>Urban Cutout</h3>
<p className="text-sm text-white/60 line-clamp-1" style={{}}>Modern living spaces integrated with commercial zones.</p>
</div>
</div>

<div className="w-full h-full flex-shrink-0 relative">
<img alt="Architectural Detail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b463b5f-86da-4853-b219-a8395599e55b_3840w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono uppercase text-emerald-300 backdrop-blur-md">Detail</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1" style={{}}>Geometric Flow</h3>
<p className="text-sm text-white/60 line-clamp-1" style={{}}>Interplay of light and shadow on concrete surfaces.</p>
</div>
</div>
</div>

<div className="flex gap-3 z-20 absolute right-8 bottom-8 items-center">

<div className="px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-white/90 mr-2 shadow-lg" style={{}}>
<span id="hero-gallery-indicator">01</span><span className="text-white/30 mx-1">/</span>03
        </div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-lg" id="hero-gallery-prev" style={{}}>
<svg className="lucide lucide-arrow-left group-hover/btn:-translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/btn shadow-lg" id="hero-gallery-next" style={{}}>
<svg className="lucide lucide-arrow-right group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>


</div>
</div>

<div className="col-span-1 flex flex-col md:items-end z-20 md:pt-0 h-full pt-8 relative items-start" style={{}}>
<p className="text-[10px] uppercase font-semibold text-[#ffffff]/60 tracking-widest mb-1">
            Project Year:
          </p>
<span className="text-6xl md:text-8xl font-bold tracking-tighter">
            24
          </span>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 border-white/10 border-b" style={{}}>

<div className="md:p-12 overflow-hidden group border-white/10 border-r pt-6 pr-6 pb-6 pl-6 relative" id="gallery-container">
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-rust-500/10 w-full h-64 md:h-80 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" id="gallery-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed23e0cc-96ba-4b91-91e4-10e9c468c87d_1600w.webp" style={{}}/>
</div>
<div className="w-full h-64 md:h-80 relative overflow-hidden translate-y-8 bg-amber-900/50" style={{}}>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 delay-75" id="gallery-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0df3856-8c00-497c-a749-6e0d6ecb27d9_1600w.webp"/>
</div>
</div>
</div>

<div className="md:p-12 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<h2 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-4" id="project-title">
            Civic
          </h2>
<h3 className="text-xl md:text-2xl font-semibold mb-4" id="project-subtitle">
            The Innovation Hub
          </h3>
<p className="leading-relaxed md:text-base text-sm text-[#ffffff]/60 max-w-md mb-10" id="project-description">
            Phasellus nibh eros, pellentesque et velit ut, tincidunt sagittis
            ante. Mauris dictum dolor eu elit mattis facilisis. Redefining urban
            spaces for the modern collective.
          </p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10" style={{}}>
<div className="flex items-center gap-4">
<span className="text-3xl font-semibold">
<span className="" id="current-slide">01</span>
<span className="text-base text-white/50 align-top ml-1" style={{}}>/ <span className="" id="total-slides">12</span></span>
</span>
<div className="flex gap-2 ml-4">
<button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition hover:text-amber-900" id="prev-btn" style={{}}>
<svg className="lucide lucide-chevron-left w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition hover:text-amber-900" id="next-btn" style={{}}>
<svg className="lucide lucide-chevron-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<a className="px-6 py-3 border border-white/20 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 hover:text-amber-900" href="#" style={{}}>
              Read more
              <svg aria-hidden="true" className="iconify iconify--solar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

</section>

<section className="relative border-b border-white/10" style={{}}>

<div className="absolute top-0 left-0 md:left-1/4 flex z-20">
<button className="text-sm font-semibold bg-white/10 border-white/10 border-r pt-3 pr-8 pb-3 pl-8 backdrop-blur-sm" style={{}}>
            Residential
          </button>
<button className="hover:text-white transition-colors text-sm font-semibold text-white/50 pt-3 pr-8 pb-3 pl-8" style={{}}>
            Commercial
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-6 md:p-12 pt-24 md:pt-32 flex flex-col justify-center border-r border-white/10 relative" style={{}}>
<h2 className="md:text-7xl uppercase text-5xl font-bold tracking-tighter mb-8">
              Villa Nova
            </h2>
<div className="mb-12">
<h4 className="text-xl font-semibold mb-2">Azure Coastline</h4>
<h5 className="text-lg text-white/70 mb-6" style={{}}>Private Retreat Suites</h5>
<p className="leading-relaxed text-sm text-[#ffffff]/60 max-w-sm">
                Nunc venenatis tincidunt feugiat praesent scelerisque, nulla in
                tempor posuere, felis ligula maximus dolor, id laoreet quam nunc
                in risus.
              </p>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10" style={{}}>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-amber-500" style={{}}>
                  Project Year
                </p>
<p className="text-2xl font-bold">2023</p>
</div>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-amber-500" style={{}}>
                  Area
                </p>
<p className="text-2xl font-bold">340 m²</p>
</div>
<div className="">
<p className="text-[10px] font-bold uppercase mb-1 text-amber-500" style={{}}>
                  Owner
                </p>
<p className="text-2xl font-bold">LXC Corp</p>
</div>
</div>
</div>

<div className="relative h-[500px] md:h-auto overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a4f4ae5-d069-4a6e-866b-e0ccc11b6b1f_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-amber-900/50" style={{}}></div>
</div>
</div>
</section><section className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-zinc-900 relative group" style={{}}>

<div className="relative min-h-[500px] lg:min-h-[700px] border-r border-white/10 overflow-hidden" style={{}}>
<img alt="Architectural Detail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e425be-9296-43e6-8254-cf1f86528235_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl bg-white/5 border border-white/10 p-6 z-10 hover:bg-white/10 transition-colors duration-300" style={{}}>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10" style={{}}>
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500" style={{}}>Phase 03</span>
<svg className="lucide lucide-activity text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div className="space-y-1">
<p className="text-xs text-white/50 uppercase tracking-wider font-semibold" style={{}}>Current Status</p>
<p className="text-lg font-medium tracking-tight">Structural Realization</p>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
<div className="absolute top-0 right-0 p-6 opacity-20">
<svg className="lucide lucide-hexagon w-[120px] h-[120px]" data-icon-replaced="true" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{color: 'rgb(254, 243, 199)', width: '120px', height: '120px'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3 text-amber-500" style={{}}>
<span className="w-2 h-2 rounded-full bg-amber-400" style={{}}></span>
        Methodology
      </p>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-white" style={{}}>
        Sculpting the 
        <span className="text-white/40" style={{}}>Void</span>
</h2>
<p className="leading-relaxed max-w-md text-sm md:text-base text-[#bdb8a3]/60" style={{}}>
        Our process is an excavation of potential. We strip away the superfluous to reveal the essential structure of space, light, and human interaction.
      </p>
</div>

<div className="border-t border-white/10 divide-y divide-white/10 bg-black/20" style={{}}>

<a className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400" style={{}}>01</span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors" style={{}}>Parametric Analysis</h3>
<span className="text-xs text-white/40 mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0" style={{}}>Data-driven spatial optimization</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-amber-400/50 group-hover:bg-amber-400/10" style={{}}>
<svg className="lucide lucide-arrow-up-right text-white/50 group-hover:text-amber-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400" style={{}}>02</span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors" style={{}}>Sustainable Materiality</h3>
<span className="text-xs text-white/40 mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0" style={{}}>Carbon-negative construction methods</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-amber-400/50 group-hover:bg-amber-400/10" style={{}}>
<svg className="lucide lucide-arrow-up-right text-white/50 group-hover:text-amber-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group block p-6 md:px-12 md:py-8 hover:bg-white/5 transition-colors duration-300" href="#" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="font-mono text-xs transition-colors text-amber-500/50 group-hover:text-amber-400" style={{}}>03</span>
<div className="flex flex-col">
<h3 className="text-lg font-medium tracking-tight group-hover:text-white text-white/90 transition-colors" style={{}}>Contextual Integration</h3>
<span className="text-xs text-white/40 mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0" style={{}}>Seamless blending of urban and natural</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-amber-400/50 group-hover:bg-amber-400/10" style={{}}>
<svg className="lucide lucide-arrow-up-right text-white/50 group-hover:text-amber-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="border-b border-white/10" style={{}}>
<div className="px-6 md:px-12 py-16 flex items-end justify-between border-b border-white/10" style={{}}>
<h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase">
            Honors
          </h2>
<a className="px-6 py-3 border border-white/20 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 mb-2 hover:text-amber-900" href="#" style={{}}>
            Full Archive
            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10" style={{}}>

<div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer" style={{}}>
<div className="flex h-40 border-white/10 border-b mb-6 items-center justify-center">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 iconify--solar text-gray-50 text-6xl w-[60px] h-[60px]" data-icon="solar:cup-star-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '60px', height: '60px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.05-1.266-.076-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2c1.783 0 3.253.157 4.377.347c1.138.192 1.708.288 2.183.874c.476.586.451 1.219.4 2.485C18.78 10.259 17.76 16 12 16" fill="currentColor" opacity=".5"></path>
<path className="" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62" fill="currentColor"></path>
<path clip-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path>
<path d="M15.458 21.25H8.543l.297-1.75a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .981.804z" fill="currentColor" opacity=".5"></path>
<path d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16m-.854-9.977C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" fill="currentColor"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 text-amber-500" style={{}}>
              National Award
            </p>
<h3 className="leading-tight transition-colors group-hover:text-amber-100 text-xl font-semibold mb-6">
              Best Sustainable Homes of 2023
            </h3>
<div className="flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors" style={{}}>
              Read more
              <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer" style={{}}>
<div className="h-40 flex items-center justify-center border-b border-white/10 mb-6" style={{}}>
<svg aria-hidden="true" className="iconify text-6xl text-white group-hover:scale-110 transition-transform duration-300 iconify--solar" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" fill="currentColor"></path>
<path className="" clip-rule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path d="M14 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 text-amber-500" style={{}}>
              Arch Film Festival
            </p>
<h3 className="leading-tight transition-colors group-hover:text-amber-100 text-xl font-semibold mb-6">
              The Golden Age of Aura Agency
            </h3>
<div className="flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors" style={{}}>
              Watch now
              <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer" style={{}}>
<div className="h-40 flex items-center justify-center border-b border-white/10 mb-6" style={{}}>
<svg aria-hidden="true" className="iconify text-6xl text-white group-hover:scale-110 transition-transform duration-300 iconify--solar" data-icon="solar:notebook-minimalistic-bold-duotone" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.413c1.05.276 2.296.866 3.282 1.388A3.5 3.5 0 0 0 12 5.275v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.532-2.29-1.15-3.372-1.435c-.877-.232-2.016-.35-2.985-.411C2.906 18.153 2 17.255 2 16.143" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
<path className="" d="M22 16.144V4.934c0-1.073-.846-1.953-1.918-1.916c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315A3.5 3.5 0 0 1 12 5.275v15.2c.56 0 1.121-.136 1.628-.406c1-.532 2.29-1.15 3.372-1.435c.877-.232 2.016-.35 2.985-.411c1.109-.07 2.015-.968 2.015-2.08" fill="currentColor"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 text-amber-500" style={{}}>
              Design Magazine
            </p>
<h3 className="leading-tight transition-colors group-hover:text-amber-100 text-xl font-semibold mb-6">
              Material &amp; Space Poetry
            </h3>
<div className="flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors" style={{}}>
              Read more
              <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="p-8 group hover:bg-white/5 transition-colors cursor-pointer" style={{}}>
<div className="h-40 flex items-center justify-center border-b border-white/10 mb-6" style={{}}>
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 iconify--solar text-gray-50 text-6xl w-[60px] h-[60px]" data-icon="solar:ruler-pen-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '60px', height: '60px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 22c-1.886 0-2.828 0-3.414-.586c-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z" fill="currentColor" opacity=".5"></path>
<path className="" d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5m-1-3h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5m0 6h-2v1.5h2a.75.75 0 0 0 0-1.5m1 3h-3v1.5h3a.75.75 0 0 0 0-1.5m-1 3h-2l.002 1.5H14a.75.75 0 0 0 0-1.5m-6-2.27V7a7.9 7.9 0 0 1-3 .59A7.9 7.9 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98" fill="currentColor"></path>
<path d="M5 2a3 3 0 0 1 3 3v2a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7V5a3 3 0 0 1 3-3" fill="currentColor" opacity=".5"></path>
</svg>
</div>
<p className="text-[10px] font-bold uppercase mb-2 text-amber-500" style={{}}>
              Honorable Mention
            </p>
<h3 className="leading-tight transition-colors group-hover:text-amber-100 text-xl font-semibold mb-6">
              Smart Home Tech Integration
            </h3>
<div className="flex items-center text-xs font-medium text-white/50 group-hover:text-white transition-colors" style={{}}>
              Case study
              <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</section><section className="border-b border-white/10 bg-zinc-900" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10" style={{}}>

<div className="group relative min-h-[600px] flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-pointer">

<img alt="Abstract Architecture" className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/159dbf09-d52b-44ef-80a8-9fc177272472_1600w.webp"/>
<div className="bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="px-3 py-1 border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border-amber-500/30 bg-amber-500/10 text-amber-500" style={{}}>Featured Insight</span>
<span className="text-xs text-white/50 font-mono tracking-tight" style={{}}>OCT 24, 2024</span>
</div>
<h3 className="md:text-7xl uppercase text-5xl font-bold tracking-tighter mb-8">
          The Algorithmic Nature 
          <span className="font-normal text-white/40" style={{}}>of Organic Forms</span>
</h3>
<p className="leading-relaxed line-clamp-2 md:text-lg text-[#ffffff]/60 max-w-md mb-8">
          Exploring how generative design mimics nature's efficiency in structural integrity and material usage for the next generation of skyscrapers.
        </p>
<div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:text-amber-300" style={{}}>
          Read Full Article
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:text-zinc-900 transition-all duration-300 group-hover:bg-amber-300 group-hover:border-amber-300" style={{}}>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full">

<div className="p-8 md:p-12 border-b border-white/10 flex items-center justify-between bg-white/[0.02]" style={{}}>
<div className="">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">Journal</h2>
<p className="text-xs text-white/40 uppercase tracking-widest" style={{}}>Thought Leadership &amp; News</p>
</div>
<a className="px-5 py-2.5 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-zinc-900 transition-all duration-300 flex items-center gap-2" href="#" style={{}}>
          View Archive
          <svg className="lucide lucide-archive" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
</a>
</div>

<div className="flex-1 divide-y divide-white/10" style={{}}>

<a className="group block p-8 md:px-12 hover:bg-white/5 transition-colors relative overflow-hidden" href="#" style={{}}>
<div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-amber-500" style={{}}></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500" style={{}}>Exhibition</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="text-[10px] text-white/40 uppercase tracking-widest" style={{}}>New York</span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white text-white/90 transition-colors" style={{}}>Shadows &amp; Concrete: The Retrospective</h4>
<p className="text-sm text-white/40 group-hover:text-white/60 transition-colors" style={{}}>A curated walk through our brutalist origins.</p>
</div>
<div className="flex hidden md:flex transition-colors bg-white/5 w-20 h-20 border-white/10 border items-center justify-center group-hover:bg-amber-900/20 text-amber-500" style={{}}>
<svg className="lucide lucide-flower w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="solar" data-solar="fire-minimalistic-bold-duotone" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{color: 'rgb(245, 158, 11)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21" fill="#f59e0b" opacity=".5"></path><path d="M4.477 16.059A8.99 8.99 0 0 1 12 12a8.99 8.99 0 0 1 7.523 4.059A7.1 7.1 0 0 0 20 13.504c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504c0 .897.168 1.757.477 2.555" fill="#f59e0b"></path></svg>
</div>
</div>
</a>

<a className="group block md:px-12 hover:bg-white/5 transition-colors overflow-hidden pt-8 pr-8 pb-8 pl-8 relative" href="#">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-rust-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold text-rust-400 uppercase tracking-widest">Sustainability</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="text-[10px] text-white/40 uppercase tracking-widest" style={{}}>Research</span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white text-white/90 transition-colors" style={{}}>Net Zero: Beyond the Buzzword</h4>
<p className="text-sm text-white/40 group-hover:text-white/60 transition-colors" style={{}}>Analyzing the carbon footprint of modern glass facades.</p>
</div>
<div className="flex hidden md:flex transition-colors bg-white/5 w-20 h-20 border-white/10 border items-center justify-center group-hover:bg-amber-900/20 text-amber-500" style={{}}>
<svg className="lucide lucide-flower w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="solar" data-solar="leaf-bold-duotone" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{color: 'rgb(245, 158, 11)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2z" fill="#f59e0b" fill-rule="evenodd"></path><path d="M13.463 2.326A3.45 3.45 0 0 0 12 2v7l4.432-4.432c-.863-.947-1.86-1.724-2.97-2.242" fill="#f59e0b" opacity=".3"></path><path d="M12 9v5.5l6.614-6.614c-.572-1.22-1.308-2.357-2.182-3.318z" fill="#f59e0b" opacity=".4"></path><path d="m12 19.5l7.811-7.811a15 15 0 0 0-1.197-3.803L12 14.5z" fill="#f59e0b" opacity=".6"></path><path d="M19.811 11.689L12 19.5V22c4.418 0 8-3.646 8-8.143c0-.71-.064-1.438-.189-2.168" fill="#f59e0b" opacity=".7"></path></svg>
</div>
</div>
</a>

<a className="group block p-8 md:px-12 hover:bg-white/5 transition-colors relative overflow-hidden" href="#" style={{}}>
<div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-amber-500" style={{}}></div>
<div className="flex justify-between items-start gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-amber-500" style={{}}>Studio</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span className="text-[10px] text-white/40 uppercase tracking-widest" style={{}}>Team</span>
</div>
<h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white text-white/90 transition-colors" style={{}}>Welcoming Dr. Aris Thorne</h4>
<p className="text-sm text-white/40 group-hover:text-white/60 transition-colors" style={{}}>New Head of Experimental Materials joins the board.</p>
</div>
<div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center hidden md:flex transition-colors group-hover:bg-amber-900/20 text-amber-500" style={{}}>
<svg className="lucide lucide-users w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="solar" data-solar="users-group-rounded-bold-duotone" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{color: 'rgb(245, 158, 11)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="6" fill="#f59e0b" opacity=".4" r="3"></circle><ellipse cx="16" cy="17" fill="#f59e0b" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="#f59e0b" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="#f59e0b" rx="7" ry="4"></ellipse></svg>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-12 relative">


<div className="md:px-12 flex flex-col md:flex-row z-10 mb-16 pr-6 pl-6 relative gap-x-12 gap-y-12 items-end justify-between">
<div className="flex items-center gap-8">
<div className="w-12 h-12 rounded-full border flex items-center justify-center border-amber-400" style={{}}>
<span className="iconify text-2xl text-amber-400" data-icon="solar:letter-a-bold-duotone" style={{}}></span>
</div>
<div className="flex gap-4 text-xs font-semibold tracking-widest uppercase opacity-80">
<span className="">A</span>
<span>U</span>
<span className="">R</span>
<span>A</span>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold mb-4">
              Follow us in social networks:
            </p>
<div className="flex gap-4 justify-end">
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-white flex items-center justify-center transition-colors hover:text-amber-900" href="#" style={{}}>
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>

<div className="md:px-12 bg-zinc-800/90 border-white/10 border-t pt-16 pr-6 pb-8 pl-6 backdrop-blur-md" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">

<div className="space-y-6">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[24px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f8505c8-59ed-4f44-a5ac-bb1f54727fdf_320w.png)] bg-cover rounded-full" href="#"></a>
<p className="text-sm leading-relaxed max-w-xs text-[#bdb8a3]/60" style={{}}>
        Redefining the skyline with sustainable, algorithmic, and human-centric architecture for the next century.
      </p>
<div className="pt-2">
<p className="text-xs font-semibold text-white mb-2" style={{}}>Subscribe to our newsletter</p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:bg-white/10 w-full transition-all focus:border-amber-400/50" placeholder="Email address" style={{}} type="email"/>
<button className="text-black font-semibold text-xs px-4 py-2 rounded transition-colors bg-amber-500 hover:bg-amber-600" style={{}} type="submit">
            Join
          </button>
</form>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>Projects</h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Residential</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Commercial</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Cultural</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Urban Planning</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Experimental</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>Studio</h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>About Us</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Our Team</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Careers</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Awards &amp; Honors</a></li>
<li className=""><a className="transition-colors block hover:text-amber-600" href="#" style={{}}>Press Kit</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-6 tracking-wide" style={{}}>Connect</h4>
<ul className="space-y-3 text-sm text-[#bdb8a3]/60" style={{}}>
<li><a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          Instagram
        </a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-twitter" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          Twitter
        </a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a></li>
<li><a className="transition-colors flex items-center gap-2 hover:text-amber-600" href="#" style={{}}>
<svg className="lucide lucide-mail" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
          Contact Us
        </a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto" style={{}}>
<p className="text-xs text-amber-100/40" style={{}}>
      © 2024 Arca Architecture Inc. All rights reserved.
    </p>
<div className="flex items-center gap-6 text-xs text-amber-100/40" style={{}}>
<a className="hover:text-white transition-colors" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>Cookies Settings</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
