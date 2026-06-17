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
      
try {
const saved = localStorage.getItem('ok-theme');
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
}
} catch(e){}



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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // 3D Card Interactive Tilt Effect (Mouse Tracking)
    document.addEventListener('mousemove', (e) => {
      document.querySelectorAll('.tilt-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        // Only apply if mouse is over or near the card to save performance
        if(e.clientX > rect.left - 100 && e.clientX < rect.right + 100 && e.clientY > rect.top - 100 && e.clientY < rect.bottom + 100) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -3; // Max 3 deg
          const rotateY = ((x - centerX) / centerX) * 3;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        } else {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }
      });
    });

    // Reset transform on mouse leave window
    document.addEventListener('mouseleave', () => {
      document.querySelectorAll('.tilt-card').forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });

    // Dataset
    const ARTICLES = [
      {
        id: 1, slug: 'quantum-computing', lang: 'EN', title: 'Quantum Computing',
        excerpt: 'Quantum computing harnesses the principles of superposition and entanglement to perform computations exponentially faster than classical computers for specific tasks.',
        updated: '2024-05-11',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200',
        categories: ['Physics', 'Computer Science'],
        references: [
          'Nielsen, M.A.; Chuang, I.L. (2010). Quantum Computation and Quantum Information. Cambridge University Press.',
          'Arute, F. et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature.'
        ],
        infobox: {
          field1: ['Field', 'Quantum information'],
          field2: ['Key properties', 'Superposition, Entanglement'],
          field3: ['Major algorithms', 'Shor\'s, Grover\'s'],
          field4: ['Qubits', 'Superconducting, Trapped ions']
        },
        sections: [
          { h: 'Overview', p: 'Quantum computers use quantum bits or qubits. Unlike classical bits that are either 0 or 1, qubits can exist in superpositions of states. This allows parallelism over an exponentially large state space, yielding dramatic speedups for certain complex problems.' },
          { h: 'Algorithms', p: 'Famous algorithms include Shor’s factoring algorithm, which threatens modern cryptographic systems like RSA by factoring large integers in polynomial time, and Grover’s search algorithm, which provides a quadratic speedup for unstructured search.' },
          { h: 'Hardware Implementations', p: 'Building reliable quantum computers is challenging due to decoherence. Leading approaches involve superconducting circuits maintained at near absolute zero temperatures, trapped ions manipulated by lasers, neutral atoms, and topological qubits.' },
        ]
      },
      {
        id: 2, slug: 'black-hole', lang: 'EN', title: 'Black Hole',
        excerpt: 'A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape its pull.',
        updated: '2023-11-20',
        image: 'https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1200',
        categories: ['Astronomy', 'Physics'],
        references: [
          'Hawking, S. (1976). Black holes and thermodynamics. Physical Review D.',
          'Event Horizon Telescope Collaboration (2019). First M87 black hole image.'
        ],
        infobox: {
          field1: ['Type', 'Astrophysical object'],
          field2: ['Boundary', 'Event horizon'],
          field3: ['Center', 'Gravitational singularity'],
          field4: ['First image', 'M87* (2019)']
        },
        sections: [
          { h: 'Formation', p: 'Stellar-mass black holes form when very massive stars collapse at the end of their life cycle. Supermassive black holes exist at the centers of most galaxies, including our Milky Way.' },
          { h: 'Properties', p: 'Black holes are remarkably simple, characterized entirely by three parameters: mass, electric charge, and angular momentum (spin). Stephen Hawking predicted that they slowly emit radiation (Hawking radiation) and eventually evaporate.' },
          { h: 'Observation', p: 'While black holes themselves are invisible, they are detected via their interaction with surrounding matter, such as accretion disks, relativistic jets, and the gravitational waves emitted when they merge.' },
        ]
      },
      {
        id: 3, slug: 'taj-mahal', lang: 'EN', title: 'Taj Mahal',
        excerpt: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.',
        updated: '2022-09-17',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200',
        categories: ['Architecture', 'History', 'India'],
        references: [
          'UNESCO World Heritage Centre. Taj Mahal.',
          'Koch, E. (2006). The Complete Taj Mahal: And the Riverfront Gardens of Agra.'
        ],
        infobox: {
          field1: ['Location', 'Agra, Uttar Pradesh, India'],
          field2: ['Commissioned', '1631 by Shah Jahan'],
          field3: ['Completed', '1653'],
          field4: ['Style', 'Mughal architecture']
        },
        sections: [
          { h: 'History', p: 'Commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself.' },
          { h: 'Architecture', p: 'The complex combines elements from Persian, Ottoman Turkish, and Indian architectural styles. The centerpiece is the large, white marble dome standing on a square plinth, surrounded by four minarets.' },
          { h: 'Tourism and Conservation', p: 'The Taj Mahal attracts millions of visitors annually. It faces environmental threats from pollution affecting the marble, leading to strict conservation regulations.' },
        ]
      },
      {
        id: 4, slug: 'maharana-pratap', lang: 'HI', title: 'महाराणा प्रताप',
        excerpt: 'महाराणा प्रताप मेवाड़ के प्रसिद्ध राजपूत शासक थे, जो अपनी स्वतंत्रता और मातृभूमि की रक्षा के लिए प्रसिद्ध हैं।',
        updated: '2023-02-10',
        image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1200',
        categories: ['History', 'India'],
        references: [
          'Chandra, Satish. Medieval India: From Sultanat to the Mughals.',
          'Sarkar, Jadunath. A History of Jaipur.'
        ],
        infobox: {
          field1: ['शासन क्षेत्र', 'मेवाड़, राजस्थान'],
          field2: ['राजवंश', 'सिसोदिया राजपूत'],
          field3: ['जन्म', '9 मई 1540'],
          field4: ['प्रसिद्ध युद्ध', 'हल्दीघाटी का युद्ध (1576)']
        },
        sections: [
          { h: 'परिचय', p: 'महाराणा प्रताप अपनी असाधारण वीरता, स्वाभिमान और मुग़ल सम्राट अकबर के सामने कभी न झुकने वाले दृढ़ निश्चय के लिए भारतीय इतिहास में एक अद्वितीय नायक माने जाते हैं।' },
          { h: 'हल्दीघाटी का युद्ध', p: '18 जून 1576 को प्रताप की सेना और मान सिंह के नेतृत्व वाली अकबर की विशाल सेना के बीच हल्दीघाटी का ऐतिहासिक युद्ध हुआ। इस युद्ध में प्रताप के प्रिय घोड़े चेतक ने प्राण न्योछावर किए।' },
          { h: 'विरासत', p: 'प्रताप का जीवन संघर्ष और त्याग का प्रतीक है। आज भी उन्हें भारत में देशभक्ति और अदम्य साहस के सर्वोच्च उदाहरण के रूप में याद किया जाता है।' },
        ]
      },
      {
        id: 5, slug: 'artificial-intelligence', lang: 'EN', title: 'Artificial Intelligence',
        excerpt: 'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.',
        updated: '2025-01-03',
        image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200',
        categories: ['Computer Science', 'Technology'],
        references: [
          'Russell, S.; Norvig, P. (2020). Artificial Intelligence: A Modern Approach.',
          'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning.'
        ],
        infobox: {
          field1: ['Core subfields', 'Machine Learning, NLP'],
          field2: ['Pioneered in', '1956 (Dartmouth)'],
          field3: ['Major approaches', 'Neural networks, Symbolic AI'],
          field4: ['Impact areas', 'Healthcare, Finance, Automation']
        },
        sections: [
          { h: 'Evolution', p: 'From early symbolic logic systems and expert systems, AI has evolved dramatically with the advent of deep learning, enabled by massive computational power and vast datasets.' },
          { h: 'Machine Learning', p: 'A subset of AI where systems learn from data to identify patterns and make decisions with minimal human intervention. Transformer architectures have recently revolutionized Natural Language Processing (NLP).' },
          { h: 'Ethics and Safety', p: 'As AI systems become more capable, challenges such as algorithmic bias, job displacement, data privacy, and the alignment problem (ensuring AI acts in human interest) have become critical research fields.' },
        ]
      }
    ];

    let STATE = {
      scope: 'all', lang: 'EN',
      adv: { articles: true, categories: false, after: 2019, lang: 'EN', cats: [] },
      results: []
    };

    const $ = (s, p=document) => p.querySelector(s);
    const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));
    const show = (el) => el.classList.remove('hidden');
    const hide = (el) => el.classList.add('hidden');
    const formatDate = (d) => new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

    // Theme Toggle
    const themeToggle = $('#themeToggle');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('ok-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light'); } catch(e){}
    });

    // Drawer
    $('#openSidebar')?.addEventListener('click', () => show($('#drawer')));
    $('#closeDrawer')?.addEventListener('click', () => hide($('#drawer')));

    // Views
    function setView(view) {
      ['homeView','resultsView','articleView','categoriesView','recentView','aboutView'].forEach(id => hide($('#' + id)));
      show($('#' + view));
      if (view !== 'homeView') window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    $$('.navBtn, #drawer [data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = btn.dataset.nav;
        if (nav === 'home') setView('homeView');
        if (nav === 'random') openRandom();
        if (nav === 'categories') openCategories();
        if (nav === 'recent') openRecent();
        if (nav === 'about') setView('aboutView');
        hide($('#drawer'));
      });
    });
    $('#goHome').addEventListener('click', (e) => { e.preventDefault(); setView('homeView'); });

    // Language
    function setLang(lang) {
      STATE.lang = lang;
      STATE.adv.lang = lang;
      renderHome();
      if (!$('#articleView').classList.contains('hidden') && window.currentArticle) {
        const alt = ARTICLES.find(a => a.slug === window.currentArticle.slug && a.lang === lang);
        if (alt) openArticle(alt.slug, alt.lang);
      }
    }
    $$('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

    function uniqueCategories() {
      const set = new Set();
      ARTICLES.forEach(a => a.categories.forEach(c => set.add(c)));
      return Array.from(set).sort();
    }

    // Home
    function renderHome() {
      const cats = uniqueCategories();
      const container = $('#categoryPills');
      container.innerHTML = '';
      cats.forEach(c => {
        const b = document.createElement('button');
        b.className = 'px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 text-sm font-medium transition-all shadow-sm flex items-center gap-2 text-slate-700 dark:text-slate-300';
        b.innerHTML = `<iconify-icon icon="solar:folder-with-files-linear" class="text-indigo-500"></iconify-icon> ${c}`;
        b.addEventListener('click', () => { $('#searchInput').value = c; STATE.scope = 'categories'; doSearch(); });
        container.appendChild(b);
      });

      const trend = $('#trendingList');
      trend.innerHTML = '';
      ARTICLES.slice(0, 3).forEach(a => {
        const item = document.createElement('div');
        item.className = 'group flex gap-4 cursor-pointer p-3 -mx-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors';
        item.innerHTML = `
            <div class="h-14 w-14 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-200 dark:border-slate-800">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${a.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="min-w-0 flex-1">
              <div class="truncate text-base font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${a.title}</div>
              <div class="text-sm text-slate-500 line-clamp-1 mt-0.5">${a.excerpt}</div>
            </div>`;
        item.addEventListener('click', () => openArticle(a.slug, a.lang));
        trend.appendChild(item);
      });

      const feat = ARTICLES.find(a => a.slug === 'quantum-computing' && a.lang === 'EN') || ARTICLES[0];
      $('#featuredTitle').textContent = feat.title;
      $('#featuredExcerpt').textContent = feat.excerpt;
      $('#readFeatured').onclick = () => openArticle(feat.slug, feat.lang);
    }
    renderHome();

    // Portals / Categories View
    function openCategories() {
      const container = $('#allCategories');
      container.innerHTML = '';
      uniqueCategories().forEach(c => {
        const box = document.createElement('div');
        box.className = 'tilt-card-smooth rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f] p-6 shadow-sm';
        box.innerHTML = `
          <div class="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
            <div class="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
              <iconify-icon icon="solar:folder-with-files-bold" class="text-xl"></iconify-icon>
            </div>
            <div>
              <div class="font-medium text-lg">${c}</div>
              <div class="text-xs text-slate-500">${ARTICLES.filter(a => a.categories.includes(c)).length} articles</div>
            </div>
          </div>
          <div class="space-y-2"></div>
        `;
        const wrap = box.querySelector('div.space-y-2');
        ARTICLES.filter(a => a.categories.includes(c)).slice(0, 4).forEach(a => {
          const p = document.createElement('button');
          p.className = 'w-full text-left text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 truncate hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors flex items-center gap-2';
          p.innerHTML = `<iconify-icon icon="solar:document-text-linear" class="text-slate-400"></iconify-icon> ${a.title}`;
          p.addEventListener('click', () => openArticle(a.slug, a.lang));
          wrap.appendChild(p);
        });
        container.appendChild(box);
      });
      setView('categoriesView');
    }

    // Recent
    function openRecent() {
      const list = $('#recentList');
      list.innerHTML = '';
      ARTICLES.sort((a,b) => new Date(b.updated) - new Date(a.updated)).forEach(a => {
        const row = document.createElement('div');
        row.className = 'group tilt-card rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] p-5 flex items-center justify-between shadow-sm cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-900';
        row.innerHTML = `
          <div class="min-w-0 flex items-center gap-4">
             <div class="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors shrink-0">
               <iconify-icon icon="solar:document-text-linear" class="text-2xl"></iconify-icon>
             </div>
             <div>
              <div class="text-lg font-medium truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${a.title}</div>
              <div class="text-sm text-slate-500 mt-0.5">Updated ${formatDate(a.updated)} • ${a.categories.join(', ')}</div>
             </div>
          </div>
          <iconify-icon icon="solar:alt-arrow-right-linear" class="text-xl text-slate-300 group-hover:text-indigo-500 transition-colors mr-2"></iconify-icon>
        `;
        row.addEventListener('click', () => openArticle(a.slug, a.lang));
        list.appendChild(row);
      });
      setView('recentView');
    }

    // Search Box
    const input = $('#searchInput');
    const suggestions = $('#suggestions');
    const suggestList = $('#suggestList');
    const clearBtn = $('#clearSearch');
    
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if(q.length > 0) show(clearBtn); else hide(clearBtn);
      if (!q) { hide(suggestions); return; }
      
      const list = ARTICLES.filter(a => a.lang === STATE.lang && (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))).slice(0, 5);
      suggestList.innerHTML = '';
      if (!list.length) {
        suggestList.innerHTML = `<div class="p-4 text-sm text-slate-500 text-center">No exact matches found</div>`;
      } else {
        list.forEach((a, idx) => {
          const btn = document.createElement('button');
          btn.className = 'w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 flex items-center gap-4 transition-colors group';
          btn.innerHTML = `
            <iconify-icon icon="solar:magnifer-linear" class="text-slate-400 group-hover:text-indigo-500 text-lg"></iconify-icon>
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">${a.title}</div>
              <div class="text-xs text-slate-500 truncate mt-0.5">${a.excerpt}</div>
            </div>
          `;
          btn.addEventListener('click', () => { openArticle(a.slug, a.lang); hide(suggestions); });
          suggestList.appendChild(btn);
          if (idx === 0) btn.classList.add('bg-slate-50','dark:bg-slate-900/30');
        });
      }
      show(suggestions);
    });

    clearBtn.addEventListener('click', () => { input.value = ''; hide(clearBtn); hide(suggestions); input.focus(); });
    input.addEventListener('focus', () => { if (input.value.trim()) show(suggestions); });
    document.addEventListener('click', (e) => { if (!suggestions.contains(e.target) && !input.contains(e.target)) hide(suggestions); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { doSearch(); } });

    // Scopes
    $$('.scopeBtn').forEach(b => {
      b.addEventListener('click', () => {
        STATE.scope = b.dataset.scope;
        $$('.scopeBtn').forEach(x => x.className = 'scopeBtn px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors');
        b.className = 'scopeBtn px-4 py-1.5 rounded-full border border-transparent bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium transition-colors';
        doSearch();
      });
    });

    // Advanced Modal
    function openAdvanced() {
      const wrap = $('#advCatList'); wrap.innerHTML = '';
      uniqueCategories().forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'px-3 py-1.5 rounded-md border text-sm transition-colors ' + 
          (STATE.adv.cats.includes(c) ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800');
        btn.textContent = c;
        btn.addEventListener('click', () => {
          const i = STATE.adv.cats.indexOf(c);
          if (i >= 0) STATE.adv.cats.splice(i,1); else STATE.adv.cats.push(c);
          openAdvanced();
        });
        wrap.appendChild(btn);
      });
      $('#advArticles').checked = STATE.adv.articles;
      $('#advCategories').checked = STATE.adv.categories;
      $('#advDate').value = STATE.adv.after;
      $('#advDateLabel').textContent = STATE.adv.after;
      $$('.advLang').forEach(b => {
        b.className = b.dataset.advLang === STATE.adv.lang 
          ? 'advLang px-4 py-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-sm font-medium transition-all'
          : 'advLang px-4 py-1.5 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all';
      });
      show($('#advancedModal'));
      hide(suggestions);
    }
    $('#actionAdvanced').addEventListener('click', openAdvanced);
    $('#openAdvancedInline').addEventListener('click', openAdvanced);
    $('#advDate').addEventListener('input', (e)=> $('#advDateLabel').textContent = e.target.value);
    $('#resetAdvanced').addEventListener('click', () => { STATE.adv = { articles: true, categories: false, after: 2019, lang: STATE.lang, cats: [] }; openAdvanced(); });
    $('#closeAdvanced').addEventListener('click', () => hide($('#advancedModal')));
    $$('.advLang').forEach(b => b.addEventListener('click', () => { STATE.adv.lang = b.dataset.advLang; openAdvanced(); }));
    $('#applyAdvanced').addEventListener('click', () => { hide($('#advancedModal')); STATE.lang = STATE.adv.lang; doSearch(); });

    function doSearch() {
      const q = input.value.trim().toLowerCase();
      if (!q) return;
      let items = ARTICLES.filter(a => a.lang === STATE.adv.lang);
      items = items.filter(a => new Date(a.updated).getFullYear() >= Number(STATE.adv.after));
      if (STATE.adv.cats.length) items = items.filter(a => STATE.adv.cats.some(c => a.categories.includes(c)));
      
      if(STATE.scope === 'categories') {
        items = items.filter(a => a.categories.join(' ').toLowerCase().includes(q));
      } else {
        items = items.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.categories.join(' ').toLowerCase().includes(q));
      }
      
      const wrap = $('#resultsContainer'); wrap.innerHTML = '';
      items.forEach(a => {
        const card = document.createElement('div');
        card.className = 'tilt-card rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group';
        card.innerHTML = `
          <div class="flex gap-6">
            <div class="min-w-0 flex-1">
              <div class="text-xl font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2">${a.title}</div>
              <div class="text-base text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">${a.excerpt}</div>
              <div class="flex items-center gap-3">
                ${a.categories.map(c => `<span class="inline-flex px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-medium">${c}</span>`).join('')}
                <span class="text-xs text-slate-500 ml-auto flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> ${formatDate(a.updated)}</span>
              </div>
            </div>
          </div>
        `;
        card.addEventListener('click', () => openArticle(a.slug, a.lang));
        wrap.appendChild(card);
      });
      $('#resultMeta').textContent = `${items.length} result${items.length!==1?'s':''}`;
      setView('resultsView');
      hide(suggestions);
    }

    function openRandom() {
      const list = ARTICLES.filter(a => a.lang === STATE.lang);
      const pick = list[Math.floor(Math.random() * list.length)];
      openArticle(pick.slug, pick.lang);
    }
    $('#randomHome').addEventListener('click', openRandom);

    // Article Generation
    window.currentArticle = null;
    function openArticle(slug, lang) {
      const a = ARTICLES.find(x => x.slug === slug && x.lang === lang) || ARTICLES.find(x => x.slug === slug);
      if (!a) return;
      window.currentArticle = a;
      $('#articleTitle').textContent = a.title;
      $('#articleMeta').innerHTML = `From OpenWiki, the free encyclopedia &nbsp;•&nbsp; Last modified ${formatDate(a.updated)}`;
      
      const toc = $('#tocList'); toc.innerHTML = '';
      const content = $('#articleContent'); content.innerHTML = '';
      
      // Intro paragraph from excerpt
      content.innerHTML = `<p class="lead text-xl text-slate-600 dark:text-slate-300 mb-8 font-medium">${a.excerpt}</p>`;

      a.sections.forEach((s, idx) => {
        const id = 'sec-' + idx;
        const tbtn = document.createElement('a');
        tbtn.href = '#' + id;
        tbtn.className = 'block px-3 py-1.5 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium';
        tbtn.textContent = s.h;
        toc.appendChild(tbtn);

        const sec = document.createElement('section');
        sec.innerHTML = `
          <h2 id="${id}" class="text-2xl tracking-tight font-medium mt-10 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">${s.h}</h2>
          <p class="text-base leading-relaxed mb-6">${s.p}</p>
        `;
        content.appendChild(sec);
      });

      const refs = $('#refList'); refs.innerHTML = '';
      a.references.forEach(r => {
        const li = document.createElement('li');
        li.className = "pl-2";
        li.textContent = r;
        refs.appendChild(li);
      });

      const info = $('#infoboxBody'); info.innerHTML = `
        <div class="relative w-full h-48 bg-slate-100 dark:bg-slate-800">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
        </div>
        <div class="p-1">
          <div class="text-center font-medium text-lg py-3 border-b border-slate-200/70 dark:border-slate-800/80">${a.title}</div>
          <table class="w-full text-sm text-left">
            <tbody>
              ${Object.entries(a.infobox).map(([k, [label, val]]) => `
                <tr class="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <th class="py-3 px-4 text-slate-500 font-medium bg-slate-50/50 dark:bg-slate-900/20 w-1/3 align-top">${label}</th>
                  <td class="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">${val}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      setView('articleView');
    }

    $$('[data-open-article]').forEach(b => b.addEventListener('click', () => openArticle(b.dataset.openArticle, STATE.lang)));
    
  
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
      
<div className="flex h-screen w-full">

<aside className="hidden md:flex flex-col w-64 border-r border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0a0a0a]/50 backdrop-blur z-20 flex-shrink-0">
<div className="p-6">
<a className="flex items-center gap-3 group" href="#" id="goHome">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 flex items-center justify-center font-medium tracking-tight shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">WK</div>
<div>
<div className="text-xl leading-none font-medium tracking-tight">OpenWiki</div>
<div className="text-xs text-slate-500 mt-1">The Free Encyclopedia</div>
</div>
</a>
</div>
<div className="flex-1 overflow-y-auto px-4 pb-6 space-y-6">

<div>
<nav className="space-y-0.5">
<button className="navBtn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" data-nav="home">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
              Main Page
            </button>
<button className="navBtn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" data-nav="categories">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
              Contents
            </button>
<button className="navBtn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" data-nav="recent">
<iconify-icon className="text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
              Current events
            </button>
<button className="navBtn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" data-nav="random">
<iconify-icon className="text-lg" icon="solar:shuffle-linear" strokeWidth="1.5"></iconify-icon>
              Random article
            </button>
<button className="navBtn w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" data-nav="about">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
              About OpenWiki
            </button>
</nav>
</div>

<div>
<div className="px-3 text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 font-medium">Contribute</div>
<nav className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
              Help
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
              Learn to edit
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
              Community portal
            </button>
</nav>
</div>

<div>
<div className="px-3 text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 font-medium">Languages</div>
<div className="grid grid-cols-2 gap-1 px-1 text-sm">
<button className="px-2 py-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-left transition-colors" data-lang="EN">English</button>
<button className="px-2 py-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-left transition-colors" data-lang="HI">हिन्दी</button>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="flex-shrink-0 border-b border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md z-30">
<div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
<div className="flex items-center gap-3 md:hidden">
<button className="p-2 -ml-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" id="openSidebar">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="font-medium tracking-tight text-lg">OpenWiki</div>
</div>

<div className="flex-1 max-w-2xl mx-auto md:ml-0 md:mr-auto">
<div className="group relative perspective-container">
<div className="tilt-card flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 pl-4 pr-2 py-1.5 shadow-sm group-focus-within:border-indigo-500/50 group-focus-within:ring-2 group-focus-within:ring-indigo-500/20 group-focus-within:bg-white dark:group-focus-within:bg-slate-950 transition-all duration-300">
<iconify-icon className="text-lg text-slate-400 group-focus-within:text-indigo-500 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input autocomplete="off" className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400" id="searchInput" placeholder="Search OpenWiki..."/>
<div className="hidden sm:flex items-center gap-1">
<button className="text-xs px-3 py-1.5 rounded-full text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" id="actionAdvanced">Advanced</button>
<div className="flex items-center gap-1 text-xs text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-full bg-white dark:bg-slate-950 shadow-sm">
<iconify-icon icon="solar:keyboard-linear" strokeWidth="1.5"></iconify-icon> /
                  </div>
</div>
<button aria-label="Clear" className="hidden p-1.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-400 transition-colors" id="clearSearch">
<iconify-icon className="text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden absolute left-0 right-0 mt-2 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden z-50 transform origin-top transition-all duration-200" id="suggestions">
<div className="p-2">
<div className="space-y-0.5" id="suggestList"></div>
<div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between text-xs text-slate-500 px-2 pb-1">
<span>Press <kbd className="px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">↑</kbd> <kbd className="px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">↓</kbd> to navigate</span>
<button className="flex items-center gap-1 hover:text-slate-800 dark:hover:text-slate-200 transition-colors" id="openAdvancedInline">
                      Detailed search <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-3 text-sm">
<button className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium">Create account</button>
<button className="px-4 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20 font-medium">Log in</button>
<div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1"></div>
<button className="p-2 rounded-full text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" id="themeToggle">
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-linear" id="sunIcon" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl dark:hidden" icon="solar:moon-linear" id="moonIcon" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto w-full relative scroll-smooth">

<div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900/20 dark:to-transparent pointer-events-none -z-10"></div>
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative min-h-full flex flex-col">

<section className="space-y-8 animate-fade-in perspective-container" id="homeView">

<div className="tilt-card-smooth relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#0f0f0f] shadow-xl p-8 md:p-12 z-10">
<div className="absolute top-0 right-0 p-12 opacity-10 dark:opacity-5 pointer-events-none rotate-12 scale-150">
<iconify-icon className="text-9xl" icon="solar:global-linear"></iconify-icon>
</div>
<div className="relative z-10 max-w-2xl">
<h1 className="text-3xl md:text-5xl tracking-tight font-medium mb-4 text-slate-900 dark:text-white">Welcome to <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-gradient">OpenWiki</span></h1>
<p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">The free encyclopedia that anyone can edit. Explore millions of articles curated by a global community of knowledge seekers.</p>
<div className="flex flex-wrap items-center gap-4">
<button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:scale-105 transition-transform shadow-lg shadow-slate-900/20 dark:shadow-white/10" id="randomHome">
<iconify-icon className="text-lg" icon="solar:shuffle-linear" strokeWidth="1.5"></iconify-icon>
                    Read a Random Article
                  </button>
<button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
                    Start Contributing
                  </button>
</div>
</div>

<div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex gap-8 text-sm">
<div><span className="font-medium text-slate-900 dark:text-white text-lg">6,723,109</span> <span className="text-slate-500">articles in English</span></div>
<div><span className="font-medium text-slate-900 dark:text-white text-lg">115,204</span> <span className="text-slate-500">active editors</span></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 perspective-container">

<div className="col-span-1 lg:col-span-7 space-y-8">

<div className="tilt-card-smooth rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] overflow-hidden shadow-sm">
<div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-3 border-b border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
<h2 className="font-medium text-lg flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:star-fall-linear"></iconify-icon>
                      Today's featured article
                    </h2>
</div>
<div className="p-6">
<div className="float-right ml-6 mb-4 w-1/3 max-w-[200px] tilt-card">
<img alt="Featured" className="w-full h-auto rounded-lg shadow-md border border-slate-200 dark:border-slate-800" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl tracking-tight font-medium mb-3" id="featuredTitle">Quantum Computing</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4" id="featuredExcerpt">Quantum computing harnesses quantum mechanics to solve certain problems much faster than classical computers.</p>
<div className="clear-both pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-medium">Physics</span>
</div>
<button className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors" id="readFeatured">
                        Read full article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="tilt-card-smooth rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="font-medium text-lg flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                      Browse Portals
                    </h2>
<button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline" data-nav="categories">View all</button>
</div>
<div className="flex flex-wrap gap-2" id="categoryPills"></div>
</div>
</div>

<div className="col-span-1 lg:col-span-5 space-y-8">

<div className="tilt-card-smooth rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] overflow-hidden shadow-sm">
<div className="bg-slate-50 dark:bg-slate-900/50 px-6 py-3 border-b border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
<h2 className="font-medium text-lg flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:global-linear"></iconify-icon>
                      In the news
                    </h2>
</div>
<div className="p-6">
<div className="space-y-4" id="trendingList"></div>
<div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 text-right">
<a className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Recent deaths</a> • 
                      <a className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Current events</a>
</div>
</div>
</div>

<div className="tilt-card-smooth rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#0f0f0f] overflow-hidden shadow-sm relative group">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
<img alt="Spotlight" className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
<div className="text-xs uppercase tracking-widest text-slate-300 font-medium mb-1">Spotlight</div>
<h3 className="text-xl font-medium mb-2">The Taj Mahal</h3>
<p className="text-sm text-slate-200 line-clamp-2">Explore the wonders of the ivory-white marble mausoleum on the right bank of the river Yamuna.</p>
<button className="mt-4 flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors" data-open-article="taj-mahal">
                      Read article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden max-w-4xl mx-auto w-full" id="resultsView">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
<h2 className="text-2xl tracking-tight font-medium">Search Results</h2>
<div className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full" id="resultMeta"></div>
</div>
<div className="mb-6 flex items-center gap-2 text-sm overflow-x-auto pb-2">
<button className="scopeBtn px-4 py-1.5 rounded-full border border-transparent bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium transition-colors" data-scope="all">All</button>
<button className="scopeBtn px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" data-scope="articles">Articles</button>
<button className="scopeBtn px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" data-scope="categories">Categories</button>
</div>
<div className="space-y-4" id="resultsContainer"></div>
</section>

<section className="hidden w-full max-w-6xl mx-auto pb-12" id="articleView">

<div className="flex flex-wrap items-end justify-between border-b border-slate-200 dark:border-slate-800 mb-6 gap-4">
<div className="flex gap-1 text-sm font-medium">
<button className="px-4 py-2 border-b-2 border-indigo-600 text-slate-900 dark:text-white">Article</button>
<button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Talk</button>
</div>
<div className="flex gap-1 text-sm font-medium">
<button className="px-4 py-2 border-b-2 border-indigo-600 text-slate-900 dark:text-white">Read</button>
<button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Edit</button>
<button className="px-4 py-2 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">View history</button>
<button className="ml-2 px-2 py-2 text-slate-500 hover:text-indigo-600 transition-colors" id="bookmarkBtn" title="Bookmark">
<iconify-icon className="text-lg" icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="px-2 py-2 text-slate-500 hover:text-indigo-600 transition-colors" id="exportBtn" title="Export">
<iconify-icon className="text-lg" icon="solar:download-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 relative">

<article className="xl:col-span-8 2xl:col-span-9 min-w-0 bg-white dark:bg-[#0f0f0f] rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/60 dark:border-slate-800/60">
<h1 className="text-4xl sm:text-5xl tracking-tight font-medium pb-4 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white mb-2" id="articleTitle"></h1>
<div className="text-sm text-slate-500 mb-8" id="articleMeta"></div>
<div className="flex flex-col md:flex-row gap-8 items-start">

<div className="flex-1 order-2 md:order-1">
<div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-700 dark:text-slate-300 prose-headings:font-medium prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500" id="articleContent">

</div>

<div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800" id="references">
<h2 className="text-2xl tracking-tight font-medium mb-4">References</h2>
<ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 bg-slate-50 dark:bg-slate-900/30 p-6 rounded-xl border border-slate-100 dark:border-slate-800/50" id="refList"></ol>
</div>
</div>

<div className="w-full md:w-64 shrink-0 order-1 md:order-2 md:sticky md:top-6">
<div className="rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden shadow-sm" id="toc">
<div className="px-4 py-3 text-xs uppercase tracking-widest text-slate-500 font-medium border-b border-slate-200/70 dark:border-slate-800/80 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:list-linear"></iconify-icon> Contents
                      </div>
<div className="p-2 space-y-0.5 max-h-[60vh] overflow-y-auto" id="tocList"></div>
</div>
</div>
</div>
</article>

<aside className="xl:col-span-4 2xl:col-span-3">
<div className="tilt-card rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#121212] overflow-hidden shadow-sm" id="infobox">
<div className="px-5 py-3 text-sm font-medium text-center border-b border-slate-200/70 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50">Quick Facts</div>
<div className="p-0" id="infoboxBody">

</div>
</div>
</aside>
</div>
</section>

<section className="hidden" id="categoriesView">
<h2 className="text-3xl tracking-tight font-medium mb-6">Contents / Portals</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container" id="allCategories"></div>
</section>

<section className="hidden max-w-4xl mx-auto w-full" id="recentView">
<h2 className="text-3xl tracking-tight font-medium mb-6">Current Events</h2>
<div className="space-y-4" id="recentList"></div>
</section>

<section className="hidden max-w-3xl mx-auto w-full" id="aboutView">
<div className="tilt-card-smooth rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f] p-8 md:p-12 shadow-xl">
<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center font-medium tracking-tight text-2xl shadow-lg shadow-indigo-500/30 mb-8">WK</div>
<h2 className="text-4xl tracking-tight font-medium mb-4">About OpenWiki</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">OpenWiki is a modern, high-performance community encyclopedia template. It fuses the dense, information-rich architecture of traditional wikis with the premium UI/UX design language of modern web platforms.</p>
<div className="grid sm:grid-cols-2 gap-6 mt-12">
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-3xl text-indigo-500 mb-4" icon="solar:bolt-linear"></iconify-icon>
<h3 className="font-medium text-lg mb-2">Blazing Fast</h3>
<p className="text-sm text-slate-500">Client-side routing and instant search provide a seamless reading experience.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
<iconify-icon className="text-3xl text-indigo-500 mb-4" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="font-medium text-lg mb-2">3D Interactions</h3>
<p className="text-sm text-slate-500">Subtle perspective transforms and fluid hover states elevate the content.</p>
</div>
</div>
</div>
</section>

<div className="mt-auto pt-24 pb-8 text-center text-sm text-slate-500">
<p>Content is available under CC BY-SA 4.0 unless otherwise noted.</p>
<div className="flex items-center justify-center gap-4 mt-2">
<a className="hover:underline" href="#">Privacy policy</a>
<a className="hover:underline" href="#">About</a>
<a className="hover:underline" href="#">Disclaimers</a>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="advancedModal">
<div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm"></div>
<div className="relative w-full max-w-2xl rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl shadow-2xl transform transition-all">
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/70 dark:border-slate-800/80">
<div className="text-lg font-medium flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:filters-linear"></iconify-icon> Advanced Search
        </div>
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors" id="closeAdvanced">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 grid sm:grid-cols-2 gap-8">
<div className="space-y-6">
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-3">Content Types</div>
<div className="flex flex-col gap-3 text-sm">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" id="advArticles" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 relative transition-colors"></div>
<span className="group-hover:text-indigo-600 transition-colors">Articles</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" id="advCategories" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 relative transition-colors"></div>
<span className="group-hover:text-indigo-600 transition-colors">Categories</span>
</label>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-3">Timeline</div>
<div className="space-y-3">
<input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" id="advDate" max="2025" min="2010" type="range" value="2019"/>
<div className="text-sm text-slate-600 dark:text-slate-400 flex justify-between">
<span>Updated after:</span>
<span className="font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded" id="advDateLabel">2019</span>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-3">Filter by Portal</div>
<div className="flex flex-wrap gap-2" id="advCatList"></div>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-3">Language</div>
<div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
<button className="advLang px-4 py-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-sm font-medium transition-all" data-adv-lang="EN">English</button>
<button className="advLang px-4 py-1.5 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all" data-adv-lang="HI">हिन्दी</button>
</div>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-end gap-3 rounded-b-3xl">
<button className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors" id="resetAdvanced">Reset Defaults</button>
<button className="px-6 py-2 rounded-full text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform shadow-lg shadow-slate-900/20 dark:shadow-white/10" id="applyAdvanced">Apply Filters</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50" id="drawer">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
<div className="absolute left-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-[#0a0a0a] border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-2xl">
<div className="flex items-center justify-between mb-8">
<div className="text-xl font-medium tracking-tight">OpenWiki</div>
<button className="p-2 -mr-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" id="closeDrawer">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="space-y-2 flex-1">
<button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-base font-medium flex items-center gap-3" data-nav="home"><iconify-icon className="text-xl text-slate-400" icon="solar:home-2-linear"></iconify-icon> Main Page</button>
<button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-base font-medium flex items-center gap-3" data-nav="categories"><iconify-icon className="text-xl text-slate-400" icon="solar:folder-with-files-linear"></iconify-icon> Contents</button>
<button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-base font-medium flex items-center gap-3" data-nav="recent"><iconify-icon className="text-xl text-slate-400" icon="solar:history-linear"></iconify-icon> Current events</button>
<button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-base font-medium flex items-center gap-3" data-nav="random"><iconify-icon className="text-xl text-slate-400" icon="solar:shuffle-linear"></iconify-icon> Random Article</button>
<button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-base font-medium flex items-center gap-3" data-nav="about"><iconify-icon className="text-xl text-slate-400" icon="solar:info-circle-linear"></iconify-icon> About</button>
</nav>
<div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
<button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md">Log in</button>
</div>
</div>
</div>


    </>
  );
}
