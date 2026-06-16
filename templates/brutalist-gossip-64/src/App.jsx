import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'pitch-black': '#050505',
'acid-green': '#CCFF00',
'hot-pink': '#FF0099',
'electric-blue': '#2E00FF',
},
fontFamily: {
'head': ['Oswald', 'sans-serif'],
'mono': ['Space Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 15s linear infinite',
'marquee-reverse': 'marquee-reverse 15s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
'marquee-reverse': {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(0%)' },
}
}
}
}
}



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor-dot');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursor.style.backgroundColor = '#CCFF00';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });

        // Filter Logic
        function filterNews(category) {
            const cards = document.querySelectorAll('.news-card');
            const buttons = document.querySelectorAll('.filter-btn');

            // Reset buttons
            buttons.forEach(btn => {
                btn.classList.remove('bg-white', 'text-black', 'brutalist-shadow');
                btn.classList.add('text-white');
            });

            // Active button style
            const activeBtn = event.target;
            activeBtn.classList.remove('text-white');
            activeBtn.classList.add('bg-white', 'text-black', 'brutalist-shadow');

            cards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'flex'; // Restore flex display
                    if(card.classList.contains('category-money') && card.classList.contains('flex') && !card.classList.contains('col-span-1')) {
                         card.style.display = 'flex';
                    } else if (card.classList.contains('lg:col-span-2')) {
                        card.style.display = 'block'; // Or whatever native display it had
                    } else {
                        card.style.display = 'block';
                    }
                    
                    // Specific fix for the flex layouts inside grid (quick hack for masonry feel preservation)
                    if(card.classList.contains('flex')) card.style.display = 'flex';
                    else card.style.display = 'block';

                } else {
                    if (card.classList.contains(`category-${category}`)) {
                        if(card.classList.contains('flex')) card.style.display = 'flex';
                        else card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot" style={{left: '156px', top: '0px', transform: 'translate(-50%, -50%) scale(1)', backgroundColor: 'transparent'}}></div>

<div className="bg-acid-green text-pitch-black py-2 border-b-2 border-white overflow-hidden whitespace-nowrap z-50 relative">
<div className="inline-block animate-marquee font-head uppercase font-semibold text-lg tracking-tight">
            🚨 BREAKING TEA • 💀 NO CAP • 💅 READ THE RECEIPTS • 🤡 CLOWNERY DETECTED • 🚨 BREAKING TEA • 💀 NO CAP • 💅 READ THE RECEIPTS • 🤡 CLOWNERY DETECTED • 🚨 BREAKING TEA • 💀 NO CAP • 💅 READ THE RECEIPTS • 🤡 CLOWNERY DETECTED •
        </div>
</div>

<nav className="flex flex-col md:flex-row md:items-center z-40 border-white border-b-2 pt-6 pr-6 pb-6 pl-6 relative gap-x-4 gap-y-4 items-start justify-between">
<div className="flex items-center gap-2 group">
<svg aria-hidden="true" className="iconify text-acid-green text-4xl group-hover:rotate-12 transition-transform iconify--lucide" data-icon="lucide:coffee" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h1 className="font-head text-4xl md:text-5xl uppercase tracking-tighter leading-none glitch-text cursor-pointer select-none">
                SpillTheTea<span className="text-acid-green">.ai</span>
</h1>
</div>
<div className="flex gap-4 font-bold text-xs md:text-sm">
<button className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase">[ Login ]</button>
<button className="px-4 py-2 border-2 border-acid-green text-acid-green hover:bg-acid-green hover:text-black transition-colors uppercase brutalist-shadow-pink">[ Leaks ]</button>
</div>
</nav>

<header className="p-4 md:p-12 border-b-2 border-white bg-repeat bg-[url(https://grainy-gradients.vercel.app/noise.svg?w=800&amp;q=80)] bg-center">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-9xl uppercase leading-[0.85] text-7xl text-white tracking-tighter font-head mix-blend-difference mb-8">The World <br/> Is Burning. <br className=""/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-acid-green to-electric-blue">Here’s The Tea.</span></h2>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between">
<p className="max-w-md text-sm md:text-base text-gray-300 leading-relaxed border-l-2 border-acid-green pl-4">
                    // SYSTEM_STATUS: UNHINGED<br/>
                    // LOADING_PROTOCOL: GOSSIP_V2.0<br/>
<br/>
                    We use AI to scrape the receipts you weren't supposed to see. No corporate BS. Just raw data and bad vibes.
                </p>
<div className="flex gap-2">
<div className="h-4 w-4 bg-acid-green animate-pulse"></div>
<div className="h-4 w-4 bg-hot-pink animate-pulse delay-75"></div>
<div className="h-4 w-4 bg-electric-blue animate-pulse delay-150"></div>
</div>
</div>
</div>
</header>

<div className="sticky top-0 z-30 bg-pitch-black border-b-2 border-white py-4 px-4 md:px-12 flex gap-4 overflow-x-auto no-scrollbar">
<button className="filter-btn active px-6 py-2 border-2 border-white bg-white text-black font-semibold uppercase hover:bg-acid-green hover:border-acid-green transition-none brutalist-shadow whitespace-nowrap text-sm" onclick="filterNews('all')">
            [ ALL ]
        </button>
<button className="filter-btn px-6 py-2 border-2 border-white text-white font-semibold uppercase hover:bg-acid-green hover:text-black hover:border-acid-green transition-none hover:shadow-[4px_4px_0px_0px_#FFFFFF] whitespace-nowrap text-sm" onclick="filterNews('tech')">
            [ 💻 TECH ]
        </button>
<button className="filter-btn px-6 py-2 border-2 border-white text-white font-semibold uppercase hover:bg-acid-green hover:text-black hover:border-acid-green transition-none hover:shadow-[4px_4px_0px_0px_#FFFFFF] whitespace-nowrap text-sm" onclick="filterNews('money')">
            [ 💸 MONEY ]
        </button>
<button className="filter-btn px-6 py-2 border-2 border-white text-white font-semibold uppercase hover:bg-acid-green hover:text-black hover:border-acid-green transition-none hover:shadow-[4px_4px_0px_0px_#FFFFFF] whitespace-nowrap text-sm" onclick="filterNews('celeb')">
            [ 💅 CELEB ]
        </button>
</div>

<main className="max-w-7xl mx-auto p-4 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto" id="feed-grid">

<article className="news-card category-tech card-hover col-span-1 lg:col-span-2 group border-2 border-white bg-pitch-black relative overflow-hidden h-[400px]">
<div className="absolute top-0 right-0 bg-acid-green text-black font-bold text-xs px-2 py-1 border-l-2 border-b-2 border-black z-20">
                    [ ⚠️ TOXIC ]
                </div>
<div className="absolute bottom-4 right-4 z-20 flex gap-1">
<svg aria-hidden="true" className="iconify text-hot-pink iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-hot-pink iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-hot-pink iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-gray-600 iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-1/2 w-full overflow-hidden border-b-2 border-white">
<img alt="Glitch" className="card-img w-full h-full object-cover transition-all duration-100 ease-linear" src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" style={{}}/>
</div>
<div className="p-6 flex flex-col justify-between h-1/2">
<div>
<div className="flex items-center gap-2 mb-2 text-acid-green text-xs font-bold tracking-widest uppercase">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg> TECH • 12m ago
                        </div>
<h3 className="font-head text-3xl md:text-5xl uppercase leading-none mb-2 group-hover:text-acid-green transition-colors">
                            Elon Musk Ruined My Twitter Feed Again
                        </h3>
</div>
<p className="text-xs text-gray-400 font-mono line-clamp-2">
                        &gt; executing script: cry_about_it.exe 
                        The algo is cooked. We have the internal memos proving it was just a vibe check gone wrong.
                    </p>
</div>
</article>

<article className="news-card category-money card-hover col-span-1 row-span-2 border-2 border-white bg-pitch-black relative overflow-hidden h-full min-h-[400px]">
<div className="absolute top-0 right-0 bg-electric-blue text-white font-bold text-xs px-2 py-1 border-l-2 border-b-2 border-black z-20">
                    [ 📉 DOWN BAD ]
                </div>
<div className="absolute bottom-4 right-4 z-20 flex gap-1">
<svg aria-hidden="true" className="iconify text-acid-green iconify--lucide" data-icon="lucide:radiation" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01M14 15.464a4 4 0 0 1-4 0l-2.472 4.282a1 1 0 0 0 .465 1.416a10 10 0 0 0 8.014 0a1 1 0 0 0 .465-1.416zM16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305a10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12zm-8 0a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305a10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-acid-green iconify--lucide" data-icon="lucide:radiation" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01M14 15.464a4 4 0 0 1-4 0l-2.472 4.282a1 1 0 0 0 .465 1.416a10 10 0 0 0 8.014 0a1 1 0 0 0 .465-1.416zM16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305a10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12zm-8 0a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305a10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-acid-green iconify--lucide" data-icon="lucide:radiation" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01M14 15.464a4 4 0 0 1-4 0l-2.472 4.282a1 1 0 0 0 .465 1.416a10 10 0 0 0 8.014 0a1 1 0 0 0 .465-1.416zM16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305a10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12zm-8 0a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305a10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-2/3 w-full overflow-hidden border-b-2 border-white">
<img alt="Crypto" className="card-img w-full h-full object-cover transition-all duration-100 ease-linear" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="p-6 h-1/3">
<div className="flex items-center gap-2 mb-2 text-electric-blue text-xs font-bold tracking-widest uppercase">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:banknote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg> MONEY • 42m ago
                    </div>
<h3 className="font-head text-3xl uppercase leading-tight mb-2 group-hover:text-electric-blue transition-colors">
                        Your Crypto Portfolio is Cooked, Bestie
                    </h3>
<p className="text-xs text-gray-400 font-mono">
                        Rug pull imminent. Don't say we didn't warn you.
                    </p>
</div>
</article>

<article className="news-card category-celeb card-hover col-span-1 border-2 border-white bg-pitch-black relative overflow-hidden h-[350px]">
<div className="absolute top-0 right-0 bg-hot-pink text-white font-bold text-xs px-2 py-1 border-l-2 border-b-2 border-black z-20">
                    [ 💅 SLAY ]
                </div>
<div className="h-1/2 w-full overflow-hidden border-b-2 border-white">
<img alt="Celeb" className="card-img w-full h-full object-cover transition-all duration-100 ease-linear grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
<div className="p-5 h-1/2">
<div className="flex items-center gap-2 mb-2 text-hot-pink text-xs font-bold tracking-widest uppercase">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> CELEB • 1h ago
                    </div>
<h3 className="font-head text-2xl uppercase leading-none mb-2">
                        Did She Just Wear That to the Met Gala?
                    </h3>
<p className="text-xs text-gray-400 font-mono">
                        Fashion police dispatched to location.
                    </p>
</div>
</article>

<article className="news-card category-tech card-hover col-span-1 border-2 border-white bg-pitch-black relative overflow-hidden h-[350px]">
<div className="absolute top-0 right-0 bg-gray-600 text-white font-bold text-xs px-2 py-1 border-l-2 border-b-2 border-black z-20">
                    [ 🤖 AI ]
                </div>
<div className="h-1/2 w-full overflow-hidden border-b-2 border-white">
<img alt="AI" className="card-img w-full h-full object-cover transition-all duration-100 ease-linear" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{}}/>
</div>
<div className="p-5 h-1/2">
<div className="flex items-center gap-2 mb-2 text-acid-green text-xs font-bold tracking-widest uppercase">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:terminal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> TECH • 2h ago
                    </div>
<h3 className="font-head text-2xl uppercase leading-none mb-2">
                        GPT-5 Just Leaked Its Own Source Code
                    </h3>
<p className="text-xs text-gray-400 font-mono">
                        Sam Altman is typing...
                    </p>
</div>
</article>

<article className="news-card category-money card-hover col-span-1 md:col-span-2 lg:col-span-2 border-2 border-white bg-pitch-black relative overflow-hidden h-[300px] flex">
<div className="absolute top-0 right-0 bg-white text-black font-bold text-xs px-2 py-1 border-l-2 border-b-2 border-black z-20">
                    [ 💸 RICH PPL ]
                </div>
<div className="w-1/3 h-full overflow-hidden border-r-2 border-white">
<img alt="Money" className="card-img w-full h-full object-cover transition-all duration-100 ease-linear" src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-2/3 p-6 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-3 text-electric-blue text-xs font-bold tracking-widest uppercase">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dollar-sign" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> MONEY • 3h ago
                    </div>
<h3 className="font-head text-3xl md:text-5xl uppercase leading-[0.9] mb-4">
                        Billionaire Bunker Coordinates Leaked
                    </h3>
<p className="text-xs md:text-sm text-gray-400 font-mono">
                        // LOCATION_DATA: FOUND 
                        They think they can hide from the climate crisis in New Zealand. We found the map.
                    </p>
<div className="mt-4 flex gap-2">
<span className="text-xs border border-white px-2 py-1 uppercase hover:bg-white hover:text-black cursor-pointer">#EATTHERICH</span>
<span className="text-xs border border-white px-2 py-1 uppercase hover:bg-white hover:text-black cursor-pointer">#DOOMSDAY</span>
</div>
</div>
</article>
</div>
</main>

<section className="border-y-2 border-white bg-acid-green text-black py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
<h2 className="font-head text-6xl md:text-8xl uppercase tracking-tighter mb-4">
                DON'T BE A NPC.
            </h2>
<p className="font-mono text-sm md:text-base max-w-xl mx-auto mb-8 font-bold">
                Subscribe to the chaos. We send tea directly to your inbox before it hits the mainstream media.
            </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-0 max-w-lg mx-auto">
<input className="w-full bg-black text-white p-4 border-2 border-black focus:outline-none focus:bg-white focus:text-black font-mono placeholder:text-gray-500 uppercase text-sm" placeholder="YOUR_EMAIL@DISPOSABLE.COM" type="email"/>
<button className="w-full md:w-auto px-8 py-4 bg-hot-pink border-2 border-black border-t-0 md:border-t-2 md:border-l-0 text-white font-head uppercase text-xl tracking-wide hover:bg-white hover:text-black transition-colors brutalist-shadow">
                    [ SEND IT ]
                </button>
</div>
</div>
</section>

<div className="bg-pitch-black text-white py-2 border-b-2 border-white overflow-hidden whitespace-nowrap z-50">
<div className="inline-block animate-marquee-reverse font-mono text-xs uppercase tracking-widest text-acid-green">
            +++ STOCK MARKET CRASHING +++ CELEB BREAKUP CONFIRMED +++ AI TAKEOVER IN PROGRESS +++ DRINK WATER +++ TOUCH GRASS +++ STOCK MARKET CRASHING +++ CELEB BREAKUP CONFIRMED +++ AI TAKEOVER IN PROGRESS +++
        </div>
</div>

<footer className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono border-t-2 border-white bg-pitch-black">
<div className="col-span-1 md:col-span-2">
<h4 className="font-head text-2xl uppercase mb-4">SpillTheTea.ai</h4>
<p className="text-gray-500 max-w-xs">
                Not responsible for emotional damage caused by reading the truth. <br/>
                © 2024 Chaos Media Group.
            </p>
</div>
<div>
<h5 className="text-acid-green uppercase mb-4 font-bold border-b border-gray-800 pb-2 inline-block">Directory</h5>
<ul className="space-y-2 text-gray-400">
<li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">&gt; About Us</li>
<li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">&gt; Manifesto</li>
<li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">&gt; Submit a Leak</li>
</ul>
</div>
<div>
<h5 className="text-electric-blue uppercase mb-4 font-bold border-b border-gray-800 pb-2 inline-block">Socials</h5>
<div className="flex gap-4">
<svg aria-hidden="true" className="iconify text-2xl hover:text-acid-green cursor-pointer iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-2xl hover:text-hot-pink cursor-pointer iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<svg aria-hidden="true" className="iconify text-2xl hover:text-electric-blue cursor-pointer iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</footer>


    </>
  );
}
