import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Fade / slide / blur in sequence
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('[data-animate]');
    items.forEach((el, i) => {
      const delay = +el.dataset.delay || i * 100;
      el.style.transition = 'opacity .8s ease-out, transform .8s ease-out, filter .8s ease-out';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'blur(0)';
      }, delay);
    });
    // Chart.js volume chart
    const ctx = document.getElementById('volumeChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Volume (BTC)',
            data: [42, 56, 32, 88, 65, 73, 91],
            borderColor: '#22d3ee',
            backgroundColor: 'rgba(34,211,238,0.15)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: '#f4f4f5', drawBorder: false } }
          }
        }
      });
    }
    lucide.createIcons();
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b backdrop-blur sticky top-0 z-30 border-stone-800 bg-black/80" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" data-animate="" data-delay="100" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<a className="flex items-center space-x-2 text-2xl font-semibold tracking-tight" href="#">
<span className="inline-block w-2 h-2 rounded-sm bg-orange-600"></span>
<span className="font-semibold font-space-grotesk">Nebula</span>
</a>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="hover:text-orange-500 transition-colors font-geist" href="#">Explore</a>
<a className="hover:text-orange-500 transition-colors font-geist" href="#">Launchpad</a>
<a className="hover:text-orange-500 transition-colors font-geist" href="#">Pricing</a>
<a className="hover:text-orange-500 transition-colors font-geist" href="#">Docs</a>
</nav>
<button className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold transition bg-stone-100 text-black hover:bg-stone-50 font-geist" style={{}}>
<svg className="lucide lucide-wallet w-4 h-4 mr-2" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>Connect
    </button>
</div>
</header>

<section className="bg-[url(https://images.unsplash.com/photo-1655694774003-69c69d7ee5bb?w=3840&amp;q=80)] bg-cover pt-20 pb-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

<div className="" data-animate="" data-delay="200" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold tracking-tight font-space-grotesk">Navigate the universe with<br className="hidden sm:inline"/><span className="font-semibold text-orange-600 font-space-grotesk">NebulaX</span></h1>
<p className="mt-6 text-lg max-w-xl text-stone-400 font-geist" style={{}}>
        Trade, discover, and mint Bitcoin-native artworks in seconds. Zero friction, transparent royalties, and
        community-first tooling built for tomorrow’s creators.
      </p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="inline-flex items-center px-6 py-3 rounded-md font-semibold hover:opacity-90 transition bg-orange-600 text-stone-100 font-geist" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5 mr-2" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>Get started
        </button>
<a className="inline-flex items-center px-6 py-3 rounded-md border font-semibold transition border-stone-700 hover:bg-stone-950 font-geist" href="#trending" style={{}}>
<svg className="lucide lucide-compass w-5 h-5 mr-2" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>Browse drops
        </a>
</div>
</div>

<div className="relative" data-animate="" data-delay="300" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<video autoplay="" className="w-full h-96 object-cover rounded-2xl shadow-2xl" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/ae63399d-8fc5-4c6d-a8bb-839bbe0f4f3d/3.mp4" title="Hero"></video>
</div>
</div>
</section>

<section className="py-16 bg-stone-950" data-animate="" data-delay="400" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
<div className="rounded-xl p-8 shadow-sm text-center bg-black">
<p className="text-3xl sm:text-4xl tracking-tight font-space-grotesk font-semibold">$14.7M+</p>
<p className="mt-2 text-sm font-medium text-stone-400 font-geist" style={{}}>Royalties paid</p>
</div>
<div className="rounded-xl p-8 shadow-sm text-center bg-black">
<p className="text-3xl sm:text-4xl tracking-tight font-space-grotesk font-semibold">375k+</p>
<p className="mt-2 text-sm font-medium text-stone-400 font-geist" style={{}}>Unique collectors</p>
</div>
<div className="rounded-xl p-8 shadow-sm text-center bg-black">
<p className="text-3xl sm:text-4xl tracking-tight font-space-grotesk font-semibold">3.9M+</p>
<p className="mt-2 text-sm font-medium text-stone-400 font-geist" style={{}}>NFTs minted</p>
</div>
</div>
</section>


<section className="pt-24 pb-24" id="trending">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-10" data-animate="" data-delay="650" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<h2 className="text-3xl sm:text-4xl tracking-tight font-space-grotesk font-semibold">Trending collections</h2>
<a className="text-sm font-medium hover:text-orange-500 transition font-geist" href="#">View all</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group rounded-2xl shadow-md overflow-hidden flex flex-col bg-black" data-animate="" data-delay="700" href="#" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="relative">
<img alt="Collection" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1643780668909-580822430155?w=800&amp;q=80" style={{}}/>
<div className="absolute -top-2 -left-2 w-4 h-4 rounded-sm bg-orange-600"></div>
</div>
<div className="p-6 grow flex flex-col">
<h3 className="text-lg font-semibold mb-2 font-geist">Galactic Relics</h3>
<p className="text-sm mb-6 line-clamp-3 text-stone-400 font-geist" style={{}}>
            Volume 0.038 BTC • Floor 252 • 4 200 supply
          </p>
<div className="mt-auto">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-stone-100 font-geist" style={{}}>
              #1 this week
            </span>
</div>
</div>
</a>
<a className="group rounded-2xl shadow-md overflow-hidden flex flex-col bg-black" data-animate="" data-delay="750" href="#" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="relative">
<img alt="Collection" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1655509206649-a63396bed840?w=800&amp;q=80"/>
<div className="absolute -top-2 -left-2 w-4 h-4 rounded-sm bg-orange-600"></div>
</div>
<div className="p-6 grow flex flex-col">
<h3 className="text-lg font-semibold mb-2 font-geist">Byte-Benders</h3>
<p className="text-sm mb-6 line-clamp-3 text-stone-400 font-geist" style={{}}>
            Volume 0.021 BTC • Floor 147 • 2 500 supply
          </p>
<div className="mt-auto">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-stone-100 font-geist" style={{}}>
              #2 this week
            </span>
</div>
</div>
</a>
<a className="group rounded-2xl shadow-md overflow-hidden flex flex-col bg-black" data-animate="" data-delay="800" href="#" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="relative">
<img alt="Collection" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?w=800&amp;q=80"/>
<div className="absolute -top-2 -left-2 w-4 h-4 rounded-sm bg-orange-600"></div>
</div>
<div className="p-6 grow flex flex-col">
<h3 className="text-lg font-semibold mb-2 font-geist">Synth-Safari</h3>
<p className="text-sm mb-6 line-clamp-3 text-stone-400 font-geist" style={{}}>
            Volume 0.017 BTC • Floor 94 • 1 100 supply
          </p>
<div className="mt-auto">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-stone-100 font-geist" style={{}}>
              #3 this week
            </span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1700450733618-3eb9aac61d93?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/60" style={{}}></div>
</div>
<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-black" data-animate="" data-delay="900" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<h2 className="sm:text-4xl text-3xl font-semibold text-stone-50 tracking-tight font-space-grotesk mb-4" style={{}}>
      Build, trade &amp; thrive in one cosmic hub
    </h2>
<p className="max-w-2xl text-lg text-stone-300 font-geist mr-auto mb-8 ml-auto" style={{}}>
      Join a collective of visionaries shaping the future of decentralized culture.
    </p>
<button className="inline-flex items-center px-6 py-3 rounded-md font-semibold hover:opacity-90 transition bg-orange-600 text-stone-100 font-geist" style={{}}>
<svg className="lucide lucide-send w-5 h-5 mr-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Launch your first drop
    </button>
</div>
</section>

<footer className="pt-24 pb-12 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-center text-2xl mb-12 font-space-grotesk font-semibold">NebulaX – Bitcoin NFT marketplace</h3>
<div className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-b py-8 border-stone-800" style={{}}>
<div className="flex space-x-8 justify-center md:justify-start mb-8 md:mb-0 text-sm font-medium">
<a className="hover:text-orange-500 transition font-geist" href="#">Explore</a>
<a className="hover:text-orange-500 transition font-geist" href="#">Launchpad</a>
</div>
<div className="flex justify-center space-x-6 mb-8 md:mb-0">
<a href="#"><svg className="lucide lucide-twitter w-5 h-5 hover:text-cyan-500 transition" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a href="#"><svg className="lucide lucide-instagram w-5 h-5 hover:text-cyan-500 transition" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a href="#"><svg className="lucide lucide-github w-5 h-5 hover:text-cyan-500 transition" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a href="#"><svg className="lucide lucide-linkedin w-5 h-5 hover:text-cyan-500 transition" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
<div className="flex space-x-8 justify-center md:justify-end text-sm font-medium">
<a className="hover:text-orange-500 transition font-geist" href="#">Pricing</a>
<a className="hover:text-orange-500 transition font-geist" href="#">Docs</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500" style={{}}>
<div className="flex space-x-4 mb-4 sm:mb-0">
<a className="hover:text-orange-500 transition font-geist" href="#">Privacy</a>
<a className="hover:text-orange-500 transition font-geist" href="#">Terms</a>
</div>
<p className="font-geist">© 2024 NebulaX. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
