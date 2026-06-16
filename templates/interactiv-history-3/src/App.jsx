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



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="w-full py-16 md:py-24 overflow-hidden" x-data="{
                cards: [
                    {
                        id: 1,
                        tag: 'Flashback 1994',
                        title: 'VOM MODEM ZUR KI.',
                        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop',
                        shortText: 'Viele Marketing-Experten kennen das Internet nur aus Seminaren. Ich kenne es, seit es Geräusche machte.',
                        longText: 'Mein Weg begann nicht in einer Marketing-Vorlesung, sondern im Kinderzimmer zwischen Kabelsalat und piependem Modem. Ich gehöre zu der Generation, die das Internet noch gehört hat. Für die meisten war das nur Lärm, für mich war es das Tor zur Welt. Ab 18 Uhr dauerte eine Telefoneinheit 12 Minuten und kostete 23 Pfennig.'
                    },
                    {
                        id: 2,
                        tag: 'Der Beginn 1998',
                        title: 'ERSTE WEBSEITE',
                        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=2070&amp;auto=format&amp;fit=crop',
                        shortText: 'Während Google gerade erst gegründet wurde, realisierte ich die ersten Webseiten, für die es Geld gab.',
                        longText: 'HTML war damals noch Handarbeit. Keine Frameworks, keine KI, nur Notepad und der Wille, etwas zu erschaffen, das auf der anderen Seite der Welt gesehen werden kann. Diese Pionierzeit hat mich gelehrt, dass Technologie nur das Werkzeug ist – die Idee ist der Treibstoff.'
                    },
                    {
                        id: 3,
                        tag: 'Selbstständigkeit 2017',
                        title: 'STRATEGISCHER PARTNER',
                        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop',
                        shortText: 'Vom operativen Umsetzer zum strategischen Partner für digitale Transformation.',
                        longText: 'Nach Jahren in Agenturen und Konzernen war der Schritt in die Selbstständigkeit logisch. Nicht mehr nur ausführen, sondern gestalten. Heute helfe ich Unternehmen dabei, nicht nur online zu sein, sondern digital zu leben und zu wachsen.'
                    },
                    {
                        id: 4,
                        tag: 'Zukunft 2024+',
                        title: 'NEXT LEVEL AI',
                        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2070&amp;auto=format&amp;fit=crop',
                        shortText: 'Die nächste Revolution ist nicht nur smart, sie ist generativ. Wir stehen am Anfang.',
                        longText: 'Künstliche Intelligenz verändert alles, was wir über Arbeit und Kreativität wissen. Ich nutze diese Technologien nicht nur, ich integriere sie tief in Prozesse, um Effizienz und Innovation auf ein völlig neues Level zu heben.'
                    }
                ]
             }">

<div className="px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
<h2 className="text-3xl md:text-5xl font-condensed font-medium tracking-tight uppercase text-black">
                Mein Weg
            </h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 px-6 md:px-12 lg:px-20 pb-12 scrollbar-hide">
<template :key="card.id" x-htmlFor="card in cards">

<div @click="flipped = !flipped" className="relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] xl:w-[28vw] aspect-[445/640] snap-center group cursor-pointer perspective-1000" x-data="{ flipped: false }">

<div :className="flipped ? 'rotate-y-180' : ''" className="relative w-full h-full duration-700 transform-style-3d transition-all ease-in-out shadow-sm group-hover:shadow-md rounded-none">

<div className="absolute inset-0 w-full h-full bg-[#F6F7FE] backface-hidden overflow-hidden border border-slate-100 flex flex-col">

<div className="relative w-full h-[65%] overflow-hidden">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>

<div className="relative flex flex-col justify-between flex-grow p-6 md:p-8">

<div className="absolute -top-6 left-6 md:-top-7 md:left-8 bg-white text-black px-6 py-2.5 rounded-full shadow-sm border border-slate-100 z-10">
<span className="font-condensed font-medium text-lg tracking-wide uppercase" x-text="card.tag"></span>
</div>

<div className="mt-8">
<h3 className="font-condensed font-bold text-4xl md:text-5xl text-[#043AC4] leading-[0.9] tracking-tight mb-4 uppercase" x-text="card.title"></h3>
<p className="font-condensed font-bold text-xl md:text-2xl text-[#043AC4] leading-tight opacity-90 line-clamp-3" x-text="card.shortText"></p>
</div>

<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-black transition-colors duration-300 group-hover:bg-[#043AC4] group-hover:text-white group-hover:border-[#043AC4]">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full bg-[#F6F7FE] rotate-y-180 backface-hidden border border-slate-200 overflow-hidden flex flex-col p-8 md:p-10">

<div className="flex flex-col h-full">

<div className="self-start bg-black text-white px-6 py-2 rounded-full mb-8">
<span className="font-condensed font-medium text-lg tracking-wide uppercase" x-text="card.tag"></span>
</div>

<h3 className="font-condensed font-bold text-4xl text-[#043AC4] leading-[0.9] tracking-tight mb-8 uppercase" x-text="card.title"></h3>

<div className="flex-grow overflow-y-auto scrollbar-hide">
<p className="font-sans font-light text-lg md:text-xl leading-relaxed text-slate-800" x-text="card.longText"></p>
</div>

<div className="mt-6 flex items-center gap-3 text-slate-400 group-hover:text-[#043AC4] transition-colors">
<div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
<i className="w-5 h-5" data-lucide="rotate-ccw" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-semibold tracking-widest uppercase">Zurück</span>
</div>
</div>
</div>
</div>
</div>
</template>

<div className="w-[5vw] shrink-0"></div>
</div>
</section>


    </>
  );
}
