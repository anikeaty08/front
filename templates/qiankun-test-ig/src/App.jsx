import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Flashlight Effect
        document.querySelectorAll('.flashlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Carousel Logic
        const cards = document.querySelectorAll('.rotator-card');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let activeIndex = 0;

        function updateCarousel() {
            cards.forEach((card, index) => {
                card.className = 'rotator-card rounded-2xl p-8 flex flex-col justify-center items-center text-center'; 
                
                if (index === activeIndex) {
                    card.classList.add('active');
                } else if (index === (activeIndex + 1) % 3) {
                    card.classList.add('next');
                } else {
                    card.classList.add('prev');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % 3;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + 3) % 3;
            updateCarousel();
        });

        setInterval(() => {
            activeIndex = (activeIndex + 1) % 3;
            updateCarousel();
        }, 6000);

        // Intersection Observer for Animations
        const observerOptions = {
            root: document.querySelector('.snap-container'),
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = entry.target.getAttribute('data-index');
                    
                    // Pagination Update
                    document.querySelectorAll('.pag-dot').forEach((el, i) => {
                        if(i == idx) {
                            el.classList.add('pag-active');
                            el.classList.remove('pag-inactive');
                        } else {
                            el.classList.remove('pag-active');
                            el.classList.add('pag-inactive');
                        }
                    });

                    // Re-trigger Animations
                    const items = entry.target.querySelectorAll('.animate-item, .reveal-text');
                    items.forEach(el => {
                        el.style.animationName = 'none';
                        el.offsetHeight; /* trigger reflow */
                        if (el.classList.contains('reveal-text')) {
                           // Handled by split logic below, but we reset char animations
                           const chars = el.querySelectorAll('.text-reveal-char');
                           chars.forEach(c => {
                               c.style.animationName = 'none';
                               c.offsetHeight;
                               c.style.animationName = 'revealChar';
                           });
                        } else {
                           el.style.animationName = 'enter';
                        }
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Split Text Logic
        document.querySelectorAll('.reveal-text').forEach(textEl => {
            if (textEl.getAttribute('data-split') === 'true') {
                const text = textEl.innerText;
                textEl.innerHTML = '';
                [...text].forEach((char, i) => {
                    const mask = document.createElement('span');
                    mask.className = 'text-reveal-mask';
                    const inner = document.createElement('span');
                    inner.className = 'text-reveal-char';
                    // Stagger calculation
                    inner.style.animationDelay = `${i * 0.05}s`;
                    inner.textContent = char;
                    mask.appendChild(inner);
                    textEl.appendChild(mask);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 grid-lines w-full h-full opacity-50"></div>
<div className="fixed inset-0 pointer-events-none z-0 border-r border-l border-white/[0.03] max-w-6xl mx-auto"></div>

<div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center w-4">
<div className="w-1.5 rounded-full pag-dot" id="pag-0"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-1"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-2"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-3"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-4"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-5"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-6"></div>
<div className="w-1.5 rounded-full pag-dot" id="pag-7"></div>
</div>
<main className="snap-container overflow-y-scroll w-full h-screen relative z-10">

<section className="snap-start flex w-full h-screen pt-4 pr-4 pb-4 pl-4 relative items-center justify-center" data-index="0">
<div className="flashlight-card aspect-[3/4] flex flex-col bg-center w-full h-[75vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9618b4fb-da53-4f38-8482-f3d452a1ad2f_1600w.jpg)] max-w-md max-h-[800px] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl justify-between" style={{-MouseX: '70px', -MouseY: '409px'}}>
<div className="flex justify-between items-start animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display tracking-[0.2em] uppercase font-semibold text-cyan-400 font-space-mono" style={{}}>Hexagram 64</span>
<div className="p-1.5 rounded-full border border-white/10 bg-white/5" style={{}}>
<svg className="text-orange-500" data-icon-set="solar" data-solar="fire-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" fill="currentColor" opacity=".5"></path><path d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445" fill="currentColor"></path></svg>
</div>
</div>
<div className="bg-center z-20 bg-gray-900/75 rounded-2xl space-y-8">
<div className="flex animate-item animate-delayed-1 w-16 h-16 border rounded-2xl shadow-lg items-center justify-center text-slate-50 bg-orange-300/40 border-white/10" style={{animationName: 'enter'}}>
<span className="text-2xl font-bold text-white/90 font-space-mono" style={{}}>64</span>
</div>
<div className="">
<h1 className="serif-cn reveal-text text-7xl font-medium tracking-tight mb-4 text-slate-50" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>未</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>濟</span></span></h1>
<p className="animate-item animate-delayed-2 text-xl blur-md text-zinc-300 font-space-mono" style={{animationName: 'enter'}}>Before Completion</p>
</div>
<div className="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent animate-item animate-delayed-3" style={{animationName: 'enter'}}></div>
<p className="leading-relaxed text-balance animate-item animate-delayed-4 text-sm text-zinc-300 font-space-mono text-center" style={{animationName: 'enter'}}>秩序從混沌中誕生，最終又消散。永恆的更新循環等著你踏出第一步。</p>
</div>
<div className="flex items-center gap-3 text-xs animate-item animate-delayed-5 text-white/30" style={{animationName: 'enter'}}>
<span className="uppercase font-medium tracking-widest font-display text-stone-300 font-space-mono" style={{}}>Scroll</span>
<svg className="animate-bounce text-cyan-400" data-icon-set="solar" data-solar="arrow-down-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v9.25h-1.5V4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M6 13.25a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28z" fill="currentColor"></path></svg>
</div>
</div>
</section>

<section className="snap-start flex w-full h-screen pt-4 pr-4 pb-4 pl-4 relative items-center justify-center" data-index="1">
<div className="flashlight-card aspect-[3/4] flex flex-col bg-center w-full h-[75vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8edbed16-c8b6-4d36-95ff-0b09bc381517_1600w.jpg)] max-w-md max-h-[800px] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl" style={{-MouseX: '317px', -MouseY: '122px'}}>
<div className="flex justify-between items-center mb-12 animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display font-bold tracking-widest font-space-mono" style={{}}>01 / ELEMENTS</span>
<svg className="text-cyan-400" data-icon-set="solar" data-solar="water-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.582 6.01c.69-1.015 2.133-.977 2.862-.1C8.426 7.091 9.81 8.25 12 8.25c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 8.565 14.74 9.75 12 9.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 1 1-.324-1.464C3.25 7.74 3.926 6.974 4.582 6.01m0 10c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 18.566 14.74 19.75 12 19.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" fill="currentColor" fill-rule="evenodd"></path><path d="M4.582 11.01c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 13.566 14.74 14.75 12 14.75c-2.823 0-4.59-1.533-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="flex-1 flex flex-col rounded-2xl relative space-y-10 items-center justify-center bg-zinc-950/80" style={{}}>

<div className="flex flex-col gap-1.5 animate-item animate-delayed-1 w-36 border rounded-xl p-6 bg-white/[0.02] border-white/5" style={{animationName: 'enter'}}>

<div className="space-y-1.5">
<div className="h-2 w-full rounded-full bg-orange-500/90 shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{}}></div>
<div className="flex gap-1.5">
<div className="h-2 w-1/2 rounded-full bg-orange-500/90 shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{}}></div>
<div className="h-2 w-1/2 rounded-full bg-orange-500/90 shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{}}></div>
</div>
<div className="h-2 w-full rounded-full bg-orange-500/90 shadow-[0_0_10px_rgba(249,115,22,0.3)]" style={{}}></div>
</div>
<div className="h-4"></div>

<div className="space-y-1.5">
<div className="flex gap-1.5">
<div className="h-2 w-1/2 bg-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{}}></div>
<div className="h-2 w-1/2 bg-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{}}></div>
</div>
<div className="h-2 w-full bg-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{}}></div>
<div className="flex gap-1.5">
<div className="h-2 w-1/2 bg-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{}}></div>
<div className="h-2 w-1/2 bg-indigo-500/90 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{}}></div>
</div>
</div>
</div>
<div className="text-center space-y-3 z-20">
<h2 className="text-4xl serif-cn font-medium reveal-text text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>火</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>水</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.2s', animationName: 'revealChar'}}>未</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.25s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.3s', animationName: 'revealChar'}}>濟</span></span></h2>
<p className="text-sm font-heading italic animate-item animate-delayed-2 text-white/50 font-space-mono" style={{animationName: 'enter'}}>Fire over Water</p>
</div>
</div>
<div className="leading-relaxed text-balance animate-item animate-delayed-3 bg-center text-xs text-slate-200 font-space-mono border-white/5 border-t mt-auto pt-6" style={{animationName: 'enter'}}>火向上燃燒，水向下流動。這種發散的力在最終匯合之前會形成短暫的懸停。</div>
</div>
</section>

<section className="snap-start flex w-full h-screen p-4 relative items-center justify-center bg-orange-950/20" data-index="2" style={{}}>
<div className="flashlight-card aspect-[3/4] flex flex-col w-full max-w-md h-[75vh] max-h-[800px] rounded-3xl p-10 relative shadow-2xl overflow-hidden" style={{background: 'linear-gradient(to right bottom, rgba(234, 88, 12, 0.1), rgba(0, 0, 0, 0))', -MouseX: '309px', -MouseY: '133px'}}>
<div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" style={{}}></div>
<div className="flex mb-8 items-center justify-between animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display font-bold tracking-widest font-space-mono" style={{}}>02 / METAPHOR</span>
<svg className="text-orange-400" data-icon-set="solar" data-solar="info-circle-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" fill="currentColor"></path></svg>
</div>
<div className="flex-1 flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7639343-f5b1-47fa-b170-515478cb8a15_800w.jpg)] bg-cover rounded-2xl justify-center">
<h2 className="text-5xl serif-cn mb-4 reveal-text text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>小</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>狐</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.2s', animationName: 'revealChar'}}>狸</span></span></h2>
<p className="text-xl font-heading font-light mb-8 animate-item animate-delayed-2 text-white/80 font-space-mono" style={{animationName: 'enter'}}>
                        "The little fox."
                    </p>
<div className="pl-4 border-l-2 border-orange-500/30 animate-item animate-delayed-3" style={{animationName: 'enter'}}>
<p className="leading-relaxed text-sm text-amber-50/90 font-space-mono bg-amber-900/50 translate-y-16">春天過冰封的河面。冰層很薄。每一步都需要全神貫注。操之過急只會失敗。</p>
</div>
</div>
</div>
</section>

<section className="snap-start h-screen w-full flex items-center justify-center relative p-4" data-index="3">
<div className="flashlight-card aspect-[3/4] overflow-hidden flex flex-col bg-center w-full h-[75vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/453c76dc-bde3-4911-9fb6-505a9b2f34d5_800w.webp)] max-w-md max-h-[800px] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl" style={{-MouseX: '180px', -MouseY: '139px'}}>
<div className="flex justify-between items-center mb-8 animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display font-bold tracking-widest font-space-mono" style={{}}>03 / ACTION</span>
<svg className="text-cyan-400" data-icon-set="solar" data-solar="arrow-right-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</div>
<div className="flex-1 flex flex-col rounded-2xl relative items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
<svg fill="none" height="400" viewbox="0 0 200 400" width="200">
<path className="opacity-50" d="M100 0C100 0 160 100 40 200C-60 300 100 400 100 400" stroke="white" stroke-dasharray="4 4" strokeWidth="1">
<animate attributename="stroke-dashoffset" dur="10s" from="100" repeatcount="indefinite" to="0"></animate>
</path>
</svg>
</div>
<h2 className="text-5xl serif-cn mb-4 z-10 reveal-text text-center text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>渡</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>河</span></span></h2>
<p className="text-[10px] uppercase z-10 animate-item animate-delayed-1 tracking-[0.3em] font-display mb-10 text-sky-900 font-space-mono" style={{animationName: 'enter'}}>Crossing the River</p>
<div className="animate-item animate-delayed-2 z-10 w-full border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md text-slate-200 bg-slate-700/50 border-white/10" style={{animationName: 'enter'}}>
<p className="text-base italic text-slate-50/80 font-heading text-center">事情尚未成功，需要耐心等待，切勿急躁。</p>
</div>
</div>
</div>
</section>

<section className="snap-start flex w-full h-screen pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm items-center justify-center" data-index="4">
<div className="flashlight-card aspect-[3/4] overflow-hidden flex flex-col bg-center font-space-mono bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 to-blue-500/0 w-full h-[75vh] max-w-md max-h-[800px] rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl" style={{-MouseX: '272px', -MouseY: '23px'}}>
<div className="flex justify-between items-center mb-8 animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-bold tracking-widest font-display font-space-mono" style={{}}>04 / CONFLICT</span>
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(248, 113, 113)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex-1 flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/178c4590-8e19-4d3c-8a5f-cf65875882a9_800w.png)] bg-cover rounded-3xl pb-8 relative justify-end">
<div className="blur-[50px] animate-pulse -translate-y-16 font-quicksand bg-indigo-500/10 h-32 absolute top-1/4 right-0 left-0" style={{}}></div>
<h2 className="serif-cn reveal-text text-4xl font-medium mb-4 translate-x-6 translate-y-16 text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>尾</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>巴</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.2s', animationName: 'revealChar'}}>濕</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.25s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.3s', animationName: 'revealChar'}}>了</span></span></h2>
<p className="animate-item animate-delayed-1 text-lg font-light font-nunito mb-8 backdrop-blur-md translate-x-6 text-white/90" style={{animationName: 'enter'}}></p>
<div className="animate-item animate-delayed-2 space-y-4" style={{animationName: 'enter'}}>
<div className="flex gap-4 group transition-colors border-transparent border rounded-lg pt-3 pr-3 pb-3 pl-3 translate-y-8 gap-x-4 gap-y-4 items-center hover:bg-white/5 hover:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_orange]" style={{}}></div>
<p className="bg-center text-2xl font-bold text-white/60 border-stone-50 font-space-mono" style={{}}>火水未濟</p>
</div>
<div className="flex gap-4 group transition-colors border-transparent border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-4 gap-y-4 items-center hover:bg-white/5 hover:border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_orange]" style={{}}></div>
<p className="text-sm font-medium text-white/60 border-orange-50 font-space-mono" style={{}}>小狐狸渡河，尾巴濕了，還沒到岸</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-start h-screen w-full flex items-center justify-center relative p-4" data-index="5">
<div className="flashlight-card aspect-[3/4] overflow-hidden flex flex-col bg-center w-full h-[75vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67074ffa-9a9e-41a5-a1ee-6a015a9c82c9_800w.webp)] max-w-md max-h-[800px] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl" style={{-MouseX: '180px', -MouseY: '137px'}}>
<div className="flex justify-between items-center mb-8 animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display font-bold tracking-widest font-space-mono" style={{}}>05 / STATE</span>
<svg className="text-white/40" data-icon-set="solar" data-solar="forbidden-circle-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" fill="currentColor" opacity=".5"></path><path d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06" fill="currentColor"></path></svg>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<h2 className="text-5xl serif-cn mb-6 reveal-text text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>還</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>沒</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.2s', animationName: 'revealChar'}}>到</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.25s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.3s', animationName: 'revealChar'}}>岸</span></span></h2>
<p className="leading-relaxed animate-item animate-delayed-2 text-sm italic font-heading pr-8 pl-8 text-slate-100 font-space-mono" style={{animationName: 'enter'}}>
    "影片匯出後，就成了定局。"
</p>
<div className="text-[11px] animate-item animate-delayed-3 font-medium tracking-wide border rounded-lg mt-8 pt-4 pr-4 pb-4 pl-4 text-stone-200 bg-neutral-800/80 border-white/10 font-space-mono" style={{animationName: 'enter'}}>
  但在渲染完成前，所有的像素都處於量子疊加態。妳覺得混亂的『毛片』，其實蘊含著無限種剪輯版本的可能性。.
</div>
</div>
</div>
</section>

<section className="snap-start h-screen w-full flex items-center justify-center relative p-4" data-index="6">
<div className="flashlight-card aspect-[3/4] overflow-hidden flex flex-col bg-center w-full h-[75vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54c651a3-7b21-4e16-b9b8-6143771d0f77_800w.png)] max-w-md max-h-[800px] bg-cover rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-2xl" style={{-MouseX: '4px', -MouseY: '194px'}}>
<div className="flex justify-between items-center mb-4 animate-item text-white/50" style={{animationName: 'enter'}}>
<span className="text-[10px] font-display font-bold tracking-widest font-space-mono" style={{}}>06 / WISDOM</span>
</div>

<div className="flex-1 relative card-stack my-4 group animate-item animate-delayed-1" style={{animationName: 'enter'}}>

<div className="rotator-card rounded-2xl p-8 flex flex-col justify-center items-center text-center" id="card-1">
<h3 className="text-xl font-medium text-white font-display mb-3">妳就是妳</h3>
<p className="leading-relaxed text-xs text-slate-200 font-space-mono">妳不是失敗的成片，妳是正在生成的藝術.</p>
</div>


</div>
<div className="flex justify-center gap-6 items-center mt-6 animate-item animate-delayed-2" style={{animationName: 'enter'}}>
<button className="p-2 transition-colors hover:text-white text-white/30" id="prev-btn">
<svg className="" data-icon-set="solar" data-solar="arrow-left-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z" fill="currentColor"></path></svg>
</button>
<button className="p-2 transition-colors hover:text-white text-white/30" id="next-btn">
<svg className="" data-icon-set="solar" data-solar="arrow-right-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>
</div>
</section>

<section className="snap-start h-screen w-full flex items-center justify-center relative p-4" data-index="7">
<div className="flashlight-card aspect-[3/4] h-[75vh] max-h-[800px] w-full max-w-md rounded-3xl overflow-hidden flex flex-col border shadow-2xl relative border-white/10" style={{-MouseX: '360px', -MouseY: '224px'}}>
<div className="flex-1 flex flex-col justify-center items-center p-8 text-center z-10">
<h2 className="text-4xl font-heading font-medium tracking-tight mb-4 reveal-text text-white" data-split="true" style={{animationName: 'none'}}><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0s', animationName: 'revealChar'}}>E</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.1s', animationName: 'revealChar'}}>m</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.2s', animationName: 'revealChar'}}>b</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.25s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.3s', animationName: 'revealChar'}}>r</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.35s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.4s', animationName: 'revealChar'}}>a</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.45s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.5s', animationName: 'revealChar'}}>c</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.55s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.6s', animationName: 'revealChar'}}>e</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.65s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.7s', animationName: 'revealChar'}}>t</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.75s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.8s', animationName: 'revealChar'}}>h</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.85s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.9s', animationName: 'revealChar'}}>e</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '0.95s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1s', animationName: 'revealChar'}}>F</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.05s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.1s', animationName: 'revealChar'}}>l</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.15s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.2s', animationName: 'revealChar'}}>u</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.25s', animationName: 'revealChar'}}>
</span></span><span className="text-reveal-mask"><span className="text-reveal-char" style={{animationDelay: '1.3s', animationName: 'revealChar'}}>x</span></span></h2>
<p className="animate-item animate-delayed-1 leading-relaxed text-xs text-white/50 font-space-mono max-w-[200px] mb-10" style={{animationName: 'enter'}}>旅程即是目的地。開啟你的新篇章。</p>
<button className="btn-glow relative inline-flex items-center justify-center px-8 py-3.5 rounded-full group animate-item animate-delayed-2" style={{animationName: 'enter'}}>
<span className="flex items-center gap-2 text-xs font-medium text-white tracking-wide font-space-mono z-10 relative">抽一卦 <svg className="transition-transform group-hover:translate-x-1 text-cyan-400" data-icon-set="solar" data-solar="arrow-right-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg></span>
</button>
<div className="mt-12 text-[10px] font-mono uppercase tracking-[0.2em] animate-item animate-delayed-3 text-white/20 font-space-mono" style={{animationName: 'enter'}}>
                        Qian Kun · Heaven Earth
                    </div>
</div>

<div className="relative w-full py-6 border-t overflow-hidden marquee-container z-10 backdrop-blur-md border-white/5 bg-black/20">
<div className="flex gap-12 whitespace-nowrap marquee-track items-center">

<div className="flex gap-12 items-center opacity-40 grayscale">
<iconify-icon className="text-white" icon="simple-icons:vercel" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" style={{}} width="50"></iconify-icon>
<iconify-icon className="text-white" icon="cib:linear" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:notion" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:loom" style={{}} width="24"></iconify-icon>
</div>

<div className="flex gap-12 items-center opacity-40 grayscale">
<iconify-icon className="text-white" icon="simple-icons:vercel" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" style={{}} width="50"></iconify-icon>
<iconify-icon className="text-white" icon="cib:linear" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:notion" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:loom" style={{}} width="24"></iconify-icon>
</div>

<div className="flex gap-12 items-center opacity-40 grayscale">
<iconify-icon className="text-white" icon="simple-icons:vercel" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" style={{}} width="50"></iconify-icon>
<iconify-icon className="text-white" icon="cib:linear" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" style={{}} width="22"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:notion" style={{}} width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:loom" style={{}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
