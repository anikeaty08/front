import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="lf-nav">
<div className="lf-nav-inner">
<a className="lf-logo flex items-center gap-2" href="#top" style={{textDecoration: 'none'}}>
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-[10px] font-bold">LF</div>
        Little Fitzroy
      </a>
<div className="lf-links flex items-center">
<a href="#menu">Menu</a>
<a href="#products">Shop</a>
<a href="#reviews">Reviews</a>
<a className="lf-btn lf-btn--small" href="#visit">Visit Us</a>
</div>
<div className="sm:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</nav>

<header className="lf-hero2">
<div className="lf-hero-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp'}}></div>
<div className="lf-hero-overlay"></div>
<div className="lf-container">
<div className="lf-hero-content">
<h1 className="lf-hero-title">Little Fitzroy Coffee</h1>
<p className="lf-hero-sub">
          Specialty coffee &amp; fresh pastries on Easter Road. Cosy, dog-friendly café with great vegan options.
        </p>
<p style={{opacity: '.7', marginTop: '6px', fontSize: '0.875rem'}}>
          Rated 4.8★ from 458 Google reviews
        </p>
<div className="lf-cta">
<a className="lf-btn" href="#menu">View Menu</a>
<a className="lf-btn lf-btn-outline" href="https://www.google.com/maps/search/?api=1&amp;query=Little+Fitzroy+Coffee+46+Easter+Rd+Edinburgh+EH7+5PJ" rel="noopener" target="_blank">
            Directions
          </a>
</div>
<div className="lf-trust">
<span>★ 4.8</span>
<span>458 reviews</span>
<span>Open until 4pm</span>
<span>Dog friendly</span>
</div>
</div>
</div>
</header>

<section className="lf-white" id="menu">
<div className="lf-container">
<div className="flex items-end justify-between mb-10">
<h2 className="text-3xl font-medium tracking-tight">On the Menu</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-black transition-colors" href="#">Full Menu →</a>
</div>
<div className="lf-instagram-grid">
<div className="lf-card group cursor-pointer">
<img alt="Flat White" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="mt-4 px-2">
<h3 className="font-semibold text-lg">Flat White</h3>
<p className="text-sm text-zinc-500 mt-1">Silky, balanced, and what we do best.</p>
</div>
</div>
<div className="lf-card group cursor-pointer">
<img alt="Pastries" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="mt-4 px-2">
<h3 className="font-semibold text-lg">Fresh Bakes</h3>
<p className="text-sm text-zinc-500 mt-1">Cinnamon buns, vegan pastries daily.</p>
</div>
</div>
<div className="lf-card group cursor-pointer">
<img alt="Matcha" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="mt-4 px-2">
<h3 className="font-semibold text-lg">Matcha</h3>
<p className="text-sm text-zinc-500 mt-1">Premium matcha lattes and specials.</p>
</div>
</div>
</div>
</div>
</section>

<section className="lf-white" id="reviews" style={{paddingTop: '0', borderTop: 'none'}}>
<div className="lf-container">
<h2 className="text-3xl font-medium tracking-tight mb-8">Community Reviews</h2>
<div className="lf-reviews">
<div className="lf-review">
<div className="text-emerald-500 text-xs tracking-widest font-semibold mb-3">GOOGLE REVIEW</div>
<p>"Good vegan options… Dirty chai and a huge iced cinnamon bun – highly recommend."</p>
<div className="mt-4 text-sm font-medium text-zinc-400">— Sarah J.</div>
</div>
<div className="lf-review">
<div className="text-emerald-500 text-xs tracking-widest font-semibold mb-3">GOOGLE REVIEW</div>
<p>"Great service, and their flat white is so tasty and creamy. Best in the area."</p>
<div className="mt-4 text-sm font-medium text-zinc-400">— Mark T.</div>
</div>
<div className="lf-review">
<div className="text-emerald-500 text-xs tracking-widest font-semibold mb-3">GOOGLE REVIEW</div>
<p>"Lovely vegan goodies – buns, cakes and pastries. Dog friendly too!"</p>
<div className="mt-4 text-sm font-medium text-zinc-400">— Emma L.</div>
</div>
<div className="lf-review">
<div className="text-emerald-500 text-xs tracking-widest font-semibold mb-3">GOOGLE REVIEW</div>
<p>"Fantastic artisan coffee… best coffee I've had in Edinburgh so far."</p>
<div className="mt-4 text-sm font-medium text-zinc-400">— James P.</div>
</div>
</div>
</div>
</section>

<section className="lf-dark" id="products">
<div className="lf-container">
<h2 className="text-3xl font-medium tracking-tight mb-10">Take Little Fitzroy Home</h2>
<div className="lf-grid2">
<article className="lf-card">
<img alt="Cups" src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<h3 className="text-xl font-medium mb-2">Reusable Cups</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
            Bring your mug and save on every coffee. First coffee on us when you buy a mug.
          </p>
<a className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-white hover:text-zinc-300" href="#">
            Shop Cups <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
<article className="lf-card">
<img alt="Beans" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<h3 className="text-xl font-medium mb-2">House Coffee Beans</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
            Take home the same beans we serve in-store. Available whole bean or ground.
          </p>
<a className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-white hover:text-zinc-300" href="#">
            Shop Beans <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="lf-white">
<div className="lf-container">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl font-medium tracking-tight">@littlefitzroy</h2>
<a className="text-sm font-medium hover:text-zinc-600" href="https://instagram.com">Follow Us</a>
</div>
<div className="lf-instagram-grid">
<img alt="Cafe" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=400&amp;fit=crop"/>
<img alt="Latte Art" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=400&amp;fit=crop"/>
<img alt="Coffee" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=400&amp;fit=crop"/>
</div>
</div>
</section>

<section className="lf-white" id="visit">
<div className="lf-container">
<div className="lf-grid2">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Visit Us</h2>
<div className="space-y-4 text-zinc-600">
<p className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
              46 Easter Rd, Edinburgh EH7 5PJ
            </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
              Mon-Sun: 8:00am – 4:00pm
            </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:paw-linear"></iconify-icon>
              Dog friendly
            </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:card-linear"></iconify-icon>
              Card payments only
            </p>
</div>
<a className="lf-btn" href="https://www.google.com/maps/search/?api=1&amp;query=Little+Fitzroy+Coffee+46+Easter+Rd+Edinburgh+EH7+5PJ" style={{background: 'black', color: 'white', marginTop: '24px', display: 'inline-flex'}} target="_blank">Open Maps</a>
</div>
<div className="h-[300px] rounded-xl overflow-hidden bg-zinc-100 relative" style={{filter: 'grayscale(20%)'}}>
<iframe className="w-full h-full border-0" loading="lazy" src="https://www.google.com/maps?q=46+Easter+Rd+Edinburgh+EH7+5PJ&amp;output=embed">
</iframe>
</div>
</div>
</div>
</section>
<footer className="bg-[#0b0b0b] text-zinc-500 py-10 border-t border-white/10">
<div className="lf-container text-xs flex justify-between items-center">
<span>© 2024 Little Fitzroy Coffee.</span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://instagram.com">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
