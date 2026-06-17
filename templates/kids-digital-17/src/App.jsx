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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Noto Naskh Arabic"', 'serif'],
english: ['"Fredoka"', 'sans-serif'],
},
colors: {
brand: {
50: '#fff8f1', // Very soft background
100: '#ffend4',
200: '#fed7aa', // Light orange elements
300: '#fdba74',
400: '#fb923c', // Soft Orange Accents
500: '#f97316',
600: '#ea580c',
text: '#334155', // Slate 700
sub: '#64748b',  // Slate 500
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
'fade-up': 'fadeUp 0.6s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Data & State ---
        // Initial generic text generator for demo purposes
        const generateLongText = (title) => {
            const intro = `ایک دفعہ کا ذکر ہے کہ ایک خوبصورت سرسبز جنگل میں جانور ہنسی خوشی رہتے تھے۔ ${title} کی یہ کہانی ہمیں بہت کچھ سکھاتی ہے۔ `;
            const filler = `
            وقت گزرتا گیا اور حالات بدلتے گئے۔ لیکن سچائی اور ایمانی ہمیشہ قائم رہتی ہے۔ بڑوں کا کہنا ہے کہ محنت میں عظمت ہے۔ 
            ہمیں ہمیشہ دوسروں کی مدد کرنی چاہیے۔ جنگل کی فضا بہت خوشگوار تھی، پرندے چہچہا رہے تھے اور ندی کا پانی ٹھنڈا اور میٹھا تھا۔
            اچانک ایک ایسا واقعہ پیش آیا جس نے سب کو حیران کر دیا۔ سب جانور اکھٹے ہوئے اور مشورہ کرنے لگے۔
            عقل مند وہ ہے جو مشکل وقت میں گھبرائے نہیں بلکہ حل تلاش کرے۔ بچوں کو چاہیے کہ وہ اس کہانی سے سبق سیکھیں۔
            سورج غروب ہو رہا تھا اور آسمان پر سنہری رنگ بکھر چکے تھے۔`;
            
            let content = `<p class="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-500 first-letter:float-right first-letter:mr-0 first-letter:ml-2">${intro}</p>`;
            
            // Generate ~5000 words simulation (approx 50 paragraphs)
            for(let i=0; i<40; i++) {
                content += `<p>${filler} ${filler}</p>`;
            }
            return content;
        };

        let stories = [
            {
                id: 1,
                title: "کچھوا اور خرگوش",
                desc: "سست روی اور مستقل مزاجی کی بہترین مثال۔ ایک کلاسک کہانی۔",
                content: generateLongText("کچھوا اور خرگوش"),
                icon: "solar:stopwatch-play-bold-duotone"
            },
            {
                id: 2,
                title: "شیر اور چوہا",
                desc: "جنگل کے بادشاہ اور ننھے چوہے کی دوستی کی داستان۔",
                content: generateLongText("شیر اور چوہا"),
                icon: "solar:cat-bold-duotone"
            },
            {
                id: 3,
                title: "سنہری تاج والا بادشاہ",
                desc: "ایک انصاف پسند بادشاہ جس نے اپنی رعایا کا دل جیت لیا۔",
                content: generateLongText("سنہری تاج والا بادشاہ"),
                icon: "solar:crown-bold-duotone"
            }
        ];

        // --- Icon Logic (Auto-Assigner) ---
        function assignIcon(title) {
            const t = title.toLowerCase();
            if (t.includes('شیر') || t.includes('بلی') || t.includes('lion')) return "solar:cat-bold-duotone";
            if (t.includes('بادشاہ') || t.includes('شہزادہ') || t.includes('king')) return "solar:crown-bold-duotone";
            if (t.includes('ستارہ') || t.includes('پری') || t.includes('magic')) return "solar:magic-stick-3-bold-duotone";
            if (t.includes('چڑیا') || t.includes('کوا') || t.includes('bird')) return "solar:bird-bold-duotone"; // Generic nature icon if bird not found
            if (t.includes('پھول') || t.includes('باغ')) return "solar:leaf-bold-duotone";
            if (t.includes('سکول') || t.includes('کتاب')) return "solar:book-2-bold-duotone";
            if (t.includes('گھر')) return "solar:home-smile-bold-duotone";
            
            // Default random nice icons
            const defaults = [
                "solar:book-bookmark-bold-duotone", 
                "solar:star-bold-duotone", 
                "solar:heart-bold-duotone",
                "solar:smile-circle-bold-duotone"
            ];
            return defaults[Math.floor(Math.random() * defaults.length)];
        }

        // --- Render Grid ---
        function renderStories() {
            const grid = document.getElementById('stories-grid');
            grid.innerHTML = '';

            stories.forEach((story) => {
                const card = document.createElement('div');
                card.className = "bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col h-full card-hover transition-all duration-300 relative group overflow-hidden";
                
                card.innerHTML = `
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                    
                    <div class="relative z-10 flex items-start justify-between mb-6">
                        <div class="w-16 h-16 rounded-2xl bg-white border border-brand-100 text-brand-500 flex items-center justify-center shadow-sm">
                            <iconify-icon icon="${story.icon}" width="32"></iconify-icon>
                        </div>
                        <span class="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-xs font-bold font-english">STORY #${story.id}</span>
                    </div>

                    <h3 class="relative z-10 text-2xl font-bold text-slate-800 mb-3 font-sans leading-snug group-hover:text-brand-600 transition-colors">${story.title}</h3>
                    <p class="relative z-10 text-slate-500 mb-8 font-sans leading-relaxed line-clamp-2">${story.desc}</p>

                    <div class="mt-auto relative z-10">
                        <button onclick="openStory(${story.id})" class="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-brand-500 text-slate-600 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-100 hover:border-brand-500 shadow-sm hover:shadow-lg hover:shadow-brand-200">
                            <span class="font-sans text-base">ابھی پڑھیں</span>
                            <iconify-icon icon="solar:book-2-linear" width="20" class="group-hover/btn:-translate-x-1 transition-transform"></iconify-icon>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // --- Reader Logic ---
        function openStory(id) {
            const story = stories.find(s => s.id === id);
            if (!story) return;

            // Populate Reader
            document.getElementById('reader-main-title').innerText = story.title;
            document.getElementById('sticky-title').innerText = story.title;
            document.getElementById('reader-content').innerHTML = story.content;
            
            // Set Icons
            const iconHtml = `<iconify-icon icon="${story.icon}" width="24"></iconify-icon>`;
            const mainIconHtml = `<iconify-icon icon="${story.icon}" width="48"></iconify-icon>`;
            
            document.getElementById('sticky-icon').innerHTML = iconHtml;
            document.getElementById('main-icon').innerHTML = mainIconHtml;

            // Animate View
            const view = document.getElementById('reader-view');
            view.classList.remove('translate-y-full');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        }

        function closeReader() {
            const view = document.getElementById('reader-view');
            view.classList.add('translate-y-full');
            document.body.style.overflow = 'auto';
        }

        // --- Admin Logic ---
        function openAdmin() {
            const modal = document.getElementById('admin-modal');
            const panel = document.getElementById('admin-panel');
            modal.classList.remove('hidden');
            setTimeout(() => {
                panel.classList.remove('scale-95', 'opacity-0');
                panel.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeAdmin() {
            const modal = document.getElementById('admin-modal');
            const panel = document.getElementById('admin-panel');
            panel.classList.remove('scale-100', 'opacity-100');
            panel.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function publishStory() {
            const titleInput = document.getElementById('story-title-input');
            const descInput = document.getElementById('story-desc-input');
            const contentInput = document.getElementById('story-content-input');

            const title = titleInput.value.trim();
            const desc = descInput.value.trim();
            let rawContent = contentInput.value.trim();

            if (!title) {
                alert('براہ کرم کہانی کا عنوان لکھیں۔');
                return;
            }

            // If user didn't write much content, autofill for demo feel, 
            // otherwise format their paragraphs
            let finalContent = '';
            if (rawContent.length < 50) {
                 finalContent = generateLongText(title); // Use generator if empty/short
            } else {
                // Convert newlines to paragraphs
                finalContent = rawContent.split('\n').map(para => {
                    return para.trim() ? `<p>${para.trim()}</p>` : '';
                }).join('');
            }

            const newStory = {
                id: stories.length + 1,
                title: title,
                desc: desc || "ایک نئی دلچسپ کہانی...",
                content: finalContent,
                icon: assignIcon(title)
            };

            stories.unshift(newStory); // Add to top
            renderStories();

            // Clear & Close
            titleInput.value = '';
            descInput.value = '';
            contentInput.value = '';
            closeAdmin();
        }

        // --- Music Logic ---
        let isMusicPlaying = false;
        function toggleMusic() {
            const audio = document.getElementById('bg-music');
            const btn = document.getElementById('music-btn');
            
            if (isMusicPlaying) {
                audio.pause();
                btn.classList.remove('bg-brand-50', 'text-brand-500', 'border-brand-200');
                btn.classList.add('bg-white', 'text-slate-400');
                btn.innerHTML = '<iconify-icon icon="solar:play-circle-linear" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                audio.play();
                btn.classList.add('bg-brand-50', 'text-brand-500', 'border-brand-200');
                btn.classList.remove('bg-white', 'text-slate-400');
                btn.innerHTML = '<iconify-icon icon="solar:pause-circle-bold-duotone" width="24"></iconify-icon>';
            }
            isMusicPlaying = !isMusicPlaying;
        }

        // Initialize
        renderStories();

    
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
      

<audio className="" id="bg-music" loop="">
<source className="" src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" type="audio/mpeg"/>
</audio>


<main className="sm:px-6 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(248, 113, 113, 1), rgba(220, 38, 38, 1))'}}>

<div className="text-center mb-20 relative">

<div className="absolute top-0 right-[10%] animate-float opacity-60 pointer-events-none text-brand-200">
<iconify-icon icon="solar:sun-2-bold-duotone" width="60"></iconify-icon>
</div>
<div className="absolute bottom-0 left-[10%] animate-float opacity-60 pointer-events-none text-brand-200" style={{animationDelay: '2s'}}>
<iconify-icon icon="solar:cloud-bold-duotone" width="70"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-brand-500 text-sm font-semibold mb-6 shadow-sm font-english animate-fade-up bg-white border-brand-100">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
                The Best Stories for Kids
            </div>
<h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 animate-fade-up text-neutral-800" style={{animationDelay: '0.1s'}}>
                عبد الاحد لائبریری
            </h1>
<h2 className="text-3xl md:text-4xl font-normal font-sans mb-6 animate-fade-up text-brand-400" style={{animationDelay: '0.2s'}}>
                خوش آمدید
            </h2>
<p className="leading-relaxed animate-fade-up text-lg text-neutral-500 max-w-2xl mr-auto ml-auto" style={{animationDelay: '0.3s'}}>
                یہاں آپ کو ملیں گی اخلاقی، مزیدار اور سبق آموز کہانیاں۔ <br/>
                ایک محفوظ اور بہترین ڈیجیٹل لائبریری جو آپ کے بچوں کے لیے بنائی گئی ہے۔
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="stories-grid"><div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col h-full card-hover transition-all duration-300 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
<div className="relative z-10 flex items-start justify-between mb-6">
<div className="w-16 h-16 rounded-2xl bg-white border border-brand-100 text-brand-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:stopwatch-play-bold-duotone" width="32"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-xs font-bold font-english">STORY #1</span>
</div>
<h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 font-sans leading-snug group-hover:text-brand-600 transition-colors">کچھوا اور خرگوش</h3>
<p className="relative z-10 text-slate-500 mb-8 font-sans leading-relaxed line-clamp-2">سست روی اور مستقل مزاجی کی بہترین مثال۔ ایک کلاسک کہانی۔</p>
<div className="mt-auto relative z-10">
<button className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-brand-500 text-slate-600 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-100 hover:border-brand-500 shadow-sm hover:shadow-lg hover:shadow-brand-200" onclick="openStory(1)">
<span className="font-sans text-base">ابھی پڑھیں</span>
<iconify-icon className="group-hover/btn:-translate-x-1 transition-transform" icon="solar:book-2-linear" width="20"></iconify-icon>
</button>
</div>
</div><div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col h-full card-hover transition-all duration-300 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
<div className="relative z-10 flex items-start justify-between mb-6">
<div className="w-16 h-16 rounded-2xl bg-white border border-brand-100 text-brand-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:cat-bold-duotone" width="32"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-xs font-bold font-english">STORY #2</span>
</div>
<h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 font-sans leading-snug group-hover:text-brand-600 transition-colors">شیر اور چوہا</h3>
<p className="relative z-10 text-slate-500 mb-8 font-sans leading-relaxed line-clamp-2">جنگل کے بادشاہ اور ننھے چوہے کی دوستی کی داستان۔</p>
<div className="mt-auto relative z-10">
<button className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-brand-500 text-slate-600 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-100 hover:border-brand-500 shadow-sm hover:shadow-lg hover:shadow-brand-200" onclick="openStory(2)">
<span className="font-sans text-base">ابھی پڑھیں</span>
<iconify-icon className="group-hover/btn:-translate-x-1 transition-transform" icon="solar:book-2-linear" width="20"></iconify-icon>
</button>
</div>
</div><div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col h-full card-hover transition-all duration-300 relative group overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
<div className="relative z-10 flex items-start justify-between mb-6">
<div className="w-16 h-16 rounded-2xl bg-white border border-brand-100 text-brand-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:crown-bold-duotone" width="32"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-xs font-bold font-english">STORY #3</span>
</div>
<h3 className="relative z-10 text-2xl font-bold text-slate-800 mb-3 font-sans leading-snug group-hover:text-brand-600 transition-colors">سنہری تاج والا بادشاہ</h3>
<p className="relative z-10 text-slate-500 mb-8 font-sans leading-relaxed line-clamp-2">ایک انصاف پسند بادشاہ جس نے اپنی رعایا کا دل جیت لیا۔</p>
<div className="mt-auto relative z-10">
<button className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-brand-500 text-slate-600 hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-100 hover:border-brand-500 shadow-sm hover:shadow-lg hover:shadow-brand-200" onclick="openStory(3)">
<span className="font-sans text-base">ابھی پڑھیں</span>
<iconify-icon className="group-hover/btn:-translate-x-1 transition-transform" icon="solar:book-2-linear" width="20"></iconify-icon>
</button>
</div>
</div></div>
</main><nav className="fixed glass-header transition-all duration-300 z-40 w-full h-24 top-0">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<div className="flex items-center gap-4 group cursor-pointer select-none" onclick="window.scrollTo(0,0)">
<div className="flex group-hover:rotate-6 transition-transform duration-300 shadow-brand-200 text-white bg-gradient-to-br to-brand-500 from-brand-300 w-12 h-12 rounded-2xl shadow-lg items-center justify-center">
<iconify-icon className="" icon="solar:library-bold-duotone" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<h1 className="font-sans font-bold text-2xl leading-none tracking-tight text-neutral-800">عبد الاحد لائبریری</h1>
<span className="text-xs text-brand-500 font-semibold mt-1 font-english tracking-wide uppercase">Premium Kids Library</span>
</div>
</div>

<div className="hidden lg:flex flex-1 mx-12 overflow-hidden rounded-full py-2 border bg-brand-50/50 border-brand-100/50">
<div className="whitespace-nowrap animate-marquee flex items-center gap-8 font-medium text-brand-600">
<span className="">عبد الاحد لائبریری میں خوش آمدید</span>
<iconify-icon className="text-brand-300" icon="solar:star-bold" width="10"></iconify-icon>
<span className="">آج ہی نئی کہانی پڑھیں</span>
<iconify-icon className="text-brand-300" icon="solar:star-bold" width="10"></iconify-icon>
<span>بچوں کی پسندیدہ دنیا</span>
<iconify-icon className="text-brand-300" icon="solar:star-bold" width="10"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-3">

<button className="w-11 h-11 rounded-full border hover:text-brand-500 transition-all flex items-center justify-center shadow-sm bg-white border-neutral-100 text-neutral-400 hover:border-brand-200 hover:bg-brand-50" id="music-btn" onclick="toggleMusic()">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<button className="px-5 py-2.5 rounded-full font-english text-sm font-medium hover:bg-brand-500 transition-colors shadow-lg flex items-center gap-2 bg-neutral-800 text-white shadow-neutral-200" onclick="openAdmin()">
<iconify-icon className="" icon="solar:settings-linear" width="18"></iconify-icon>
<span className="">Admin</span>
</button>
</div>
</div>
</nav>

<footer className="border-t backdrop-blur-sm mt-auto border-brand-100 bg-white/50">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center gap-4">
<div className="flex items-center gap-2 text-sm font-english text-neutral-400">
<span>© 2023 Abdul Ahad Library. All rights reserved.</span>
</div>
<div className="flex gap-4 opacity-50">
<iconify-icon icon="solar:cat-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:ufo-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-[#fff8f1] transform translate-y-full transition-transform duration-500 flex flex-col" id="reader-view">

<div className="sticky top-0 z-10 backdrop-blur-md border-b h-20 shadow-sm flex-none bg-white/95 border-brand-100">
<div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full text-neutral-500 flex items-center justify-center transition-colors hover:bg-neutral-100" onclick="closeReader()">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-3 border-r pr-4 mr-2 border-neutral-200">
<div className="w-10 h-10 rounded-full text-brand-500 flex items-center justify-center border bg-brand-50 border-brand-100" id="sticky-icon">

</div>
<div className="hidden sm:block">
<h4 className="font-bold text-lg line-clamp-1 text-neutral-800" id="sticky-title">Story Title</h4>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-1 text-xs font-english px-3 py-1.5 rounded-full text-neutral-400 bg-neutral-50">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>15 Min Read</span>
</div>
<button className="w-10 h-10 rounded-full hover:text-brand-500 transition-colors flex items-center justify-center hover:bg-brand-50 text-neutral-400">
<iconify-icon icon="solar:text-field-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex-grow overflow-y-auto overflow-x-hidden w-full scroll-smooth pb-20">
<div className="max-w-3xl mx-auto px-6 py-12">

<div className="text-center mb-16 border-b pb-12 border-brand-100">
<div className="w-24 h-24 mx-auto rounded-[2rem] bg-gradient-to-tr border flex items-center justify-center text-brand-500 mb-8 shadow-xl from-white to-brand-50 border-brand-100 shadow-brand-100" id="main-icon">

</div>
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans text-neutral-800" id="reader-main-title"></h1>
<p className="text-lg text-neutral-500 font-sans">تحریر: عبد الاحد لائبریری ٹیم</p>
</div>

<div className="story-text font-sans" id="reader-content">

</div>

<div className="mt-20 p-8 rounded-3xl border text-center shadow-sm bg-white border-brand-100">
<iconify-icon className="mb-4 text-brand-400" icon="solar:cup-star-bold-duotone" width="48"></iconify-icon>
<h3 className="text-2xl font-bold mb-2 text-neutral-800">کہانی ختم ہوئی!</h3>
<p className="text-neutral-500 mb-6">امید ہے آپ کو یہ کہانی پسند آئی ہوگی۔</p>
<button className="px-8 py-3 rounded-xl bg-brand-500 font-bold transition-all shadow-lg hover:bg-brand-600 text-white shadow-brand-200" onclick="closeReader()">
                        واپس جائیں
                    </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] backdrop-blur-sm hidden flex items-center justify-center p-4 bg-neutral-900/60" id="admin-modal">
<div className="w-full max-w-2xl rounded-3xl shadow-2xl transform scale-95 opacity-0 transition-all duration-300 flex flex-col max-h-[90vh] bg-white" id="admin-panel">

<div className="p-6 border-b flex justify-between items-center rounded-t-3xl border-neutral-100 bg-neutral-50">
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-500 rounded-lg text-white">
<iconify-icon icon="solar:settings-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold font-sans text-neutral-800">نئی کہانی شامل کریں</h3>
</div>
<button className="hover:text-indigo-500 transition-colors text-neutral-400" onclick="closeAdmin()">
<iconify-icon icon="solar:close-circle-bold" width="28"></iconify-icon>
</button>
</div>

<div className="p-6 overflow-y-auto custom-scrollbar">
<div className="space-y-6">
<div>
<label className="block text-sm font-bold mb-2 font-sans text-neutral-700">کہانی کا عنوان (Title)</label>
<input className="w-full px-5 py-4 rounded-xl border focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all font-sans text-lg bg-neutral-50 border-neutral-200" id="story-title-input" placeholder="مثال: شیر اور چوہا" type="text"/>
</div>
<div>
<label className="block text-sm font-bold mb-2 font-sans text-neutral-700">مختصر تعارف (Description)</label>
<input className="w-full px-5 py-4 rounded-xl border focus:border-brand-500 focus:bg-white outline-none transition-all font-sans bg-neutral-50 border-neutral-200" id="story-desc-input" placeholder="کارڈ پر دکھانے کے لیے ایک لائن..." type="text"/>
</div>
<div>
<label className="block text-sm font-bold mb-2 font-sans text-neutral-700">مکمل کہانی (Content)</label>
<textarea className="w-full px-5 py-4 rounded-xl border focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100 outline-none transition-all font-sans text-lg leading-loose bg-neutral-50 border-neutral-200" id="story-content-input" placeholder="یہاں کہانی لکھیں..." rows="12"></textarea>
<p className="text-xs mt-2 text-left font-english text-neutral-400">Supports long text format.</p>
</div>
</div>
</div>

<div className="p-6 border-t rounded-b-3xl border-neutral-100 bg-neutral-50">
<button className="w-full py-4 rounded-xl bg-brand-500 font-bold font-sans text-lg shadow-xl transition-transform active:scale-95 flex items-center justify-center gap-2 hover:bg-brand-600 text-white shadow-brand-200" onclick="publishStory()">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
                    شائع کریں (Publish)
                </button>
</div>
</div>
</div>


    </>
  );
}
