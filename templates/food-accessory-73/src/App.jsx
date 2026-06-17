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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="bg-noise"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[10%] left-[5%] text-[#FF6B4A] animate-spin-slow opacity-60">
<iconify-icon icon="solar:star-fall-linear" width="80"></iconify-icon>
</div>
<div className="absolute top-[70%] right-[8%] text-[#C9E265] animate-float opacity-60 rotate-12">
<iconify-icon icon="solar:leaf-linear" width="100"></iconify-icon>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-[#F2EFE9]/95 backdrop-blur-md hard-shadow rounded-full px-2 py-2 flex items-center gap-2 max-w-4xl w-full justify-between transition-all">
<a className="flex items-center gap-3 bg-[#1A261D] text-[#F2EFE9] px-5 py-2 rounded-full hover:bg-[#FF6B4A] transition-colors group" href="#">
<span className="font-sans font-semibold tracking-tighter text-base uppercase">K-Studio</span>
</a>
<div className="hidden md:flex gap-2 items-center">
<a className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#C9E265] hover:text-[#1A261D] transition-colors" href="#how-it-works">How it works</a>
<a className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#9D8BB5] hover:text-[#1A261D] transition-colors" href="#features">Features</a>
<a className="px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF6B4A] hover:text-[#1A261D] transition-colors" href="#pricing">Pricing</a>
</div>
<button className="bg-[#C9E265] hover:bg-[#b5d145] text-[#1A261D] px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2">
                Order Now <iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
<div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
<div className="animate-float mb-8">
<div className="bg-[#1A261D] text-[#F2EFE9] px-5 py-2 rounded-full border-2 border-[#1A261D] shadow-[4px_4px_0px_0px_#9D8BB5] font-medium text-xs md:text-sm transform rotate-1 inline-flex items-center gap-3 max-w-md text-center">
<iconify-icon className="text-[#FF6B4A] text-lg flex-shrink-0" icon="solar:bell-bing-linear"></iconify-icon>
                    Tired of compromising on taste when eating out? Stop settling for bland meals.
                </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1A261D] leading-[0.95] mb-6 relative z-10">
                Your Unique Flavor,
                <br/>
<span className="font-serif italic text-[#3D6B4F] relative inline-block pr-8 mt-2">
                    Clipped On.
                    <iconify-icon className="absolute -top-4 -right-4 text-[#FF6B4A] text-5xl md:text-6xl -z-10 rotate-12" icon="solar:magic-stick-3-linear" width="1em"></iconify-icon>
</span>
</h1>
<p className="text-lg md:text-xl font-normal tracking-tight text-[#1A261D]/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                Wear it like a fashion accessory and add your signature taste to any meal, anytime, anywhere.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#FF6B4A] text-[#1A261D] px-8 py-4 rounded-full text-base md:text-lg font-semibold hard-shadow hard-shadow-hover transition-all flex items-center justify-center gap-3 group">
                    Get 50% Off 
                    <span className="text-xs bg-[#F2EFE9] px-2 py-1 rounded border border-[#1A261D] font-medium">First 100 Only</span>
</button>
<button className="w-full sm:w-auto bg-[#F2EFE9] text-[#1A261D] px-8 py-4 rounded-full text-base md:text-lg font-semibold hard-shadow hard-shadow-hover transition-all flex items-center justify-center gap-3">
                    Discover Style <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-10 left-4 md:left-16 animate-float hidden lg:block z-0">
<div className="bg-white p-2 pb-5 rounded-lg hard-shadow-sm rotate-[-4deg] w-48">
<div className="bg-[#C9E265] h-40 rounded mb-2 overflow-hidden border border-[#1A261D]">
<img alt="Bland food" className="w-full h-full object-cover grayscale-[30%] mix-blend-multiply" src="https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-serif italic text-center text-xs font-semibold">Transform standard takeout</div>
</div>
</div>
<div className="absolute top-32 right-4 md:right-16 animate-float-delayed hidden lg:block z-0">
<div className="bg-white p-2 pb-5 rounded-lg hard-shadow-sm rotate-[8deg] w-44">
<div className="bg-[#9D8BB5] h-32 rounded mb-2 overflow-hidden border border-[#1A261D]">
<img alt="Spices" className="w-full h-full object-cover grayscale-[30%] mix-blend-multiply" src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-serif italic text-center text-xs font-semibold">Always with you</div>
</div>
</div>
</header>

<div className="relative py-8 bg-[#3D6B4F] -rotate-1 scale-105 border-y-2 border-[#1A261D] z-20 overflow-hidden shadow-lg">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="flex animate-marquee whitespace-nowrap">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F2EFE9] px-6 uppercase flex items-center gap-6">
                Never Eat Bland Again <iconify-icon className="text-[#C9E265]" icon="solar:star-linear"></iconify-icon> 
                Discreetly Stylish <iconify-icon className="text-[#FF6B4A]" icon="solar:star-linear"></iconify-icon>
                Instant Flavor Boost <iconify-icon className="text-[#9D8BB5]" icon="solar:star-linear"></iconify-icon>
</span>
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F2EFE9] px-6 uppercase flex items-center gap-6">
                Never Eat Bland Again <iconify-icon className="text-[#C9E265]" icon="solar:star-linear"></iconify-icon> 
                Discreetly Stylish <iconify-icon className="text-[#FF6B4A]" icon="solar:star-linear"></iconify-icon>
                Instant Flavor Boost <iconify-icon className="text-[#9D8BB5]" icon="solar:star-linear"></iconify-icon>
</span>
</div>
</div>

<section className="py-24 px-6 relative max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A261D] mb-6 leading-tight">
                Ever felt something was <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] to-[#9D8BB5] italic font-serif pr-2">missing</span> from your meal?
            </h2>
<p className="text-lg text-[#1A261D]/70 font-sans">
                The most stylish way to customize your meal—your personal flavor keychain.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F2EFE9] p-8 rounded-2xl border-2 border-[#1A261D] hard-shadow relative group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-[#C9E265] rounded-full border border-[#1A261D] flex items-center justify-center mb-6 text-xl text-[#1A261D]">
<iconify-icon icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight mb-3">The Foodie Dilemma</h3>
<p className="text-sm font-sans text-[#1A261D]/80 mb-4 italic">"Restaurant food is always a bit too bland for me."</p>
<p className="text-sm font-sans text-[#1A261D]">Adjust your seasoning instantly without awkwardly flagging down the waiter. Zero hassle, maximum taste.</p>
</div>

<div className="bg-[#F2EFE9] p-8 rounded-2xl border-2 border-[#1A261D] hard-shadow relative group hover:-translate-y-2 transition-transform duration-300 transform md:translate-y-4">
<div className="w-12 h-12 bg-[#FF6B4A] rounded-full border border-[#1A261D] flex items-center justify-center mb-6 text-xl text-[#1A261D]">
<iconify-icon icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight mb-3">The Spice Lover</h3>
<p className="text-sm font-sans text-[#1A261D]/80 mb-4 italic">"I love hot sauce, but carrying a bottle is embarrassing."</p>
<p className="text-sm font-sans text-[#1A261D]">A discreet, fashionable accessory that holds your favorite kick. Smaller than a lipstick, big on heat.</p>
</div>

<div className="bg-[#F2EFE9] p-8 rounded-2xl border-2 border-[#1A261D] hard-shadow relative group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 bg-[#9D8BB5] rounded-full border border-[#1A261D] flex items-center justify-center mb-6 text-xl text-[#1A261D]">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight mb-3">The Trendsetter</h3>
<p className="text-sm font-sans text-[#1A261D]/80 mb-4 italic">"I want my accessories to be as unique as my taste."</p>
<p className="text-sm font-sans text-[#1A261D]">Ditch standard options and express your palate. A functional fashion item that starts conversations.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#1A261D] text-[#F2EFE9] border-y-2 border-[#F2EFE9]" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F2EFE9]/30 bg-[#F2EFE9]/10 text-xs font-medium mb-6 uppercase tracking-widest">
                    Process
                </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">3 Steps to Your Perfect Bite</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#F2EFE9]/30 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#C9E265] text-[#1A261D] rounded-2xl rotate-3 border-2 border-[#F2EFE9] flex items-center justify-center mb-8 hard-shadow-sm group-hover:rotate-0 transition-all duration-300 z-10">
<span className="text-4xl font-serif italic font-semibold">1</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-[#C9E265]">Clip</h3>
<p className="text-sm text-[#F2EFE9]/70 font-sans max-w-xs">Attach the sleek flavor keychain to your bag, belt loop, or keys to match your OOTD.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#FF6B4A] text-[#1A261D] rounded-2xl -rotate-3 border-2 border-[#F2EFE9] flex items-center justify-center mb-8 hard-shadow-sm group-hover:rotate-0 transition-all duration-300 z-10">
<span className="text-4xl font-serif italic font-semibold">2</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-[#FF6B4A]">Squeeze &amp; Sprinkle</h3>
<p className="text-sm text-[#F2EFE9]/70 font-sans max-w-xs">Open it up and add your signature flavor to your food effortlessly and discreetly.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#9D8BB5] text-[#1A261D] rounded-2xl rotate-6 border-2 border-[#F2EFE9] flex items-center justify-center mb-8 hard-shadow-sm group-hover:rotate-0 transition-all duration-300 z-10">
<span className="text-4xl font-serif italic font-semibold">3</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-[#9D8BB5]">Savor</h3>
<p className="text-sm text-[#F2EFE9]/70 font-sans max-w-xs">Enjoy a meal customized perfectly to your liking, anywhere you happen to be.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative max-w-6xl mx-auto overflow-hidden" id="features">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
<div className="order-2 lg:order-1 relative">
<div className="bg-white p-3 pb-8 rounded-xl border-2 border-[#1A261D] hard-shadow -rotate-2 w-full max-w-md mx-auto">
<div className="aspect-square bg-[#E8E4DB] rounded-lg border border-[#1A261D] overflow-hidden">
<img alt="Chic accessory" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="mt-4 text-center font-serif italic text-sm text-[#1A261D]/70">Blends right in</p>
</div>
<div className="absolute -bottom-6 -right-6 text-[#FF6B4A] animate-spin-slow">
<iconify-icon icon="solar:sticker-smile-circle-linear" width="80"></iconify-icon>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block bg-[#3D6B4F] text-[#F2EFE9] font-medium text-xs px-3 py-1 rounded-full mb-6 tracking-wide">
                    Aesthetics First
                </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A261D] mb-6">Trendy Expression</h2>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed mb-6">
                    Show off your unique style with a wearable flavor statement. Stop hiding bulky sauce packets or mini bottles in your pockets.
                </p>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed">
                    Designed to look like a high-end fashion accessory, this keychain seamlessly blends into your daily look. It’s not just about making your food taste better—it’s about looking great while doing it.
                </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
<div className="order-1 lg:order-1">
<div className="inline-block bg-[#C9E265] text-[#1A261D] font-medium text-xs px-3 py-1 rounded-full mb-6 tracking-wide border border-[#1A261D]">
                    Form Factor
                </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A261D] mb-6">Ultra-Portable</h2>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed mb-6">
                    So light and compact, you'll forget it's there until you need it. Smaller than a lipstick and as easy to carry as your house keys.
                </p>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed">
                    You don't need an extra bag or pouch; simply clip it onto what you're already carrying. Whether it's a spontaneous lunch date or a late-night snack run, your favorite flavor is always within reach.
                </p>
</div>
<div className="order-2 lg:order-2 relative flex justify-center lg:justify-end">
<div className="bg-white p-3 pb-8 rounded-xl border-2 border-[#1A261D] hard-shadow rotate-3 w-full max-w-md">
<div className="aspect-square bg-[#E8E4DB] rounded-lg border border-[#1A261D] overflow-hidden">
<img alt="Keys and daily carry" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="mt-4 text-center font-serif italic text-sm text-[#1A261D]/70">Always at hand</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative">
<div className="bg-white p-3 pb-8 rounded-xl border-2 border-[#1A261D] hard-shadow -rotate-1 w-full max-w-md mx-auto">
<div className="aspect-video bg-[#E8E4DB] rounded-lg border border-[#1A261D] overflow-hidden">
<img alt="Delicious customized food" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="mt-4 text-center font-serif italic text-sm text-[#1A261D]/70">The perfect bite</p>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block bg-[#9D8BB5] text-[#F2EFE9] font-medium text-xs px-3 py-1 rounded-full mb-6 tracking-wide">
                    Performance
                </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A261D] mb-6">Instant Flavor Boost</h2>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed mb-6">
                    Upgrade your meal in seconds with zero waiting. Don't settle for "just okay" food.
                </p>
<p className="text-base text-[#1A261D]/80 font-sans leading-relaxed">
                    The moment you feel your meal is missing that special something, you can fix it instantly. Transform ordinary dishes into your personalized culinary experience in the blink of an eye.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-[#1A261D] overflow-hidden relative border-y-2 border-[#F2EFE9]">
<div className="flex justify-between items-end px-6 md:px-12 max-w-7xl mx-auto mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F2EFE9]">How Meals Will Change</h2>
<p className="text-[#C9E265] mt-2 font-serif italic text-lg">Heard from our community</p>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x no-scrollbar">

<div className="flex-shrink-0 snap-center relative group">
<div className="w-[300px] bg-[#F2EFE9] p-6 rounded-xl border-2 border-[#1A261D] rotate-2 hard-shadow transition-transform duration-300 hover:rotate-0">
<div className="flex text-[#FF6B4A] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-sans text-sm text-[#1A261D] leading-relaxed mb-6">"Finally, I can eat my bland office lunches exactly how I want them—just by unclipping my bag accessory!"</p>
<div className="flex items-center gap-3 border-t border-[#1A261D]/20 pt-4">
<div className="w-8 h-8 rounded-full bg-[#9D8BB5] border border-[#1A261D]"></div>
<span className="font-semibold text-xs tracking-tight">Sarah J.</span>
</div>
</div>
</div>

<div className="flex-shrink-0 snap-center relative group mt-8">
<div className="w-[300px] bg-[#C9E265] p-6 rounded-xl border-2 border-[#1A261D] -rotate-2 hard-shadow transition-transform duration-300 hover:rotate-0">
<div className="flex text-[#1A261D] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-sans text-sm text-[#1A261D] leading-relaxed mb-6">"People always ask me where I got this keychain, and they're blown away when I use it to add hot sauce to my pizza."</p>
<div className="flex items-center gap-3 border-t border-[#1A261D]/20 pt-4">
<div className="w-8 h-8 rounded-full bg-[#F2EFE9] border border-[#1A261D]"></div>
<span className="font-semibold text-xs tracking-tight">Marcus T.</span>
</div>
</div>
</div>

<div className="flex-shrink-0 snap-center relative group">
<div className="w-[300px] bg-[#F2EFE9] p-6 rounded-xl border-2 border-[#1A261D] rotate-1 hard-shadow transition-transform duration-300 hover:rotate-0">
<div className="flex text-[#FF6B4A] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-sans text-sm text-[#1A261D] leading-relaxed mb-6">"No more awkwardly asking the waiter for extra seasoning. It's empowering and looks incredibly cool."</p>
<div className="flex items-center gap-3 border-t border-[#1A261D]/20 pt-4">
<div className="w-8 h-8 rounded-full bg-[#3D6B4F] border border-[#1A261D]"></div>
<span className="font-semibold text-xs tracking-tight">Elena R.</span>
</div>
</div>
</div>
<div className="w-8 flex-shrink-0"></div> 
</div>
</section>

<section className="py-24 bg-[#F2EFE9] relative overflow-hidden" id="pricing">
<div className="max-w-5xl mx-auto text-center relative z-10 px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Choose Your Flavor Plan</h2>
<p className="text-base text-[#1A261D]/70 mb-16 font-sans">Secure yours before the first batch is gone.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">

<div className="bg-white rounded-2xl border-2 border-[#1A261D] p-8 hard-shadow hover:-translate-y-1 transition-transform relative flex flex-col">
<div className="absolute -top-4 -right-4 bg-[#FF6B4A] text-[#1A261D] text-xs font-semibold px-3 py-1 rounded-full border border-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] transform rotate-6">
                        First 100 Only
                    </div>
<h3 className="text-2xl font-bold tracking-tight mb-2">Early Bird Starter</h3>
<div className="text-[#3D6B4F] font-semibold text-lg mb-6 flex items-center gap-2">
                        50% Off Retail <iconify-icon icon="solar:tag-price-linear"></iconify-icon>
</div>
<ul className="space-y-4 mb-8 flex-1 font-sans text-sm text-[#1A261D]/80">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9E265] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            1x Flavor Keychain
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9E265] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            1x Refill Pod
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C9E265] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Premium Packaging
                        </li>
</ul>
<button className="w-full bg-[#1A261D] text-[#F2EFE9] py-3 rounded-full font-semibold border-2 border-[#1A261D] hover:bg-[#3D6B4F] transition-colors">
                        Select Starter
                    </button>
</div>

<div className="bg-[#C9E265] rounded-2xl border-2 border-[#1A261D] p-8 hard-shadow hover:-translate-y-1 transition-transform relative flex flex-col">
<h3 className="text-2xl font-bold tracking-tight mb-2 text-[#1A261D]">Duo Style Pack</h3>
<div className="text-[#1A261D]/70 font-semibold text-lg mb-6 flex items-center gap-2">
                        Special Discount <iconify-icon icon="solar:gift-linear"></iconify-icon>
</div>
<ul className="space-y-4 mb-8 flex-1 font-sans text-sm text-[#1A261D]/90">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1A261D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            2x Flavor Keychains (Mix &amp; Match)
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1A261D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            2x Refill Pods
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1A261D] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Free Priority Shipping
                        </li>
</ul>
<button className="w-full bg-[#F2EFE9] text-[#1A261D] py-3 rounded-full font-semibold border-2 border-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] hover:bg-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                        Select Duo Pack
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-bold tracking-tight text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="bg-white border-2 border-[#1A261D] rounded-xl p-6 hard-shadow-sm">
<h4 className="font-semibold text-base mb-2 flex items-center gap-2">
<iconify-icon className="text-[#9D8BB5]" icon="solar:question-circle-linear"></iconify-icon>
                    Will it leak in my bag or on my clothes?
                </h4>
<p className="font-sans text-sm text-[#1A261D]/70">Not at all. It's engineered with a secure, double-sealed leakproof cap to withstand your daily commute and active lifestyle.</p>
</div>

<div className="bg-white border-2 border-[#1A261D] rounded-xl p-6 hard-shadow-sm">
<h4 className="font-semibold text-base mb-2 flex items-center gap-2">
<iconify-icon className="text-[#9D8BB5]" icon="solar:question-circle-linear"></iconify-icon>
                    Is it reusable?
                </h4>
<p className="font-sans text-sm text-[#1A261D]/70">Yes! It's completely refillable. Just wash it out and fill it with your next favorite sauce, oil, or seasoning.</p>
</div>

<div className="bg-white border-2 border-[#1A261D] rounded-xl p-6 hard-shadow-sm">
<h4 className="font-semibold text-base mb-2 flex items-center gap-2">
<iconify-icon className="text-[#9D8BB5]" icon="solar:question-circle-linear"></iconify-icon>
                    Is it easy to clean?
                </h4>
<p className="font-sans text-sm text-[#1A261D]/70">Absolutely. All parts can be easily disassembled for quick, hygienic washing under warm water.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#3D6B4F] border-t-2 border-[#1A261D]">
<div className="absolute top-10 left-10 text-[#C9E265] opacity-20 animate-spin-slow">
<iconify-icon icon="solar:pallete-2-linear" width="100"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 rounded-3xl border-2 border-[#1A261D] p-8 md:p-16 bg-[#F2EFE9] hard-shadow shadow-[12px_12px_0px_0px_#1A261D]">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A261D] mb-6 leading-tight">
                Redefining How You <br/>
<span className="text-[#FF6B4A] font-serif italic pr-2">Experience Food.</span>
</h2>
<p className="text-base text-[#1A261D]/80 mb-10 font-sans max-w-2xl mx-auto">
                At K-Studio, we believe you shouldn't have to compromise on your taste or your style just because you are eating out. We designed this to give you the freedom to be yourself, right down to the last bite.
            </p>
<button className="bg-[#1A261D] text-[#F2EFE9] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#FF6B4A] transition-colors shadow-[4px_4px_0px_0px_#9D8BB5] hover:shadow-[2px_2px_0px_0px_#9D8BB5] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none mx-auto block">
                Claim Your Unique Flavor
            </button>
<p className="text-xs font-medium text-[#1A261D]/50 mt-6 tracking-wide">Turn every everyday meal into a personalized masterpiece.</p>
</div>
</section>

<footer className="bg-[#1A261D] text-[#F2EFE9] pt-20 pb-10 px-6 font-sans">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-[#F2EFE9] flex items-center gap-2 mb-4 uppercase w-fit font-grotesk" href="#">
                    K-Studio
                </a>
<p className="text-[#9D8BB5] max-w-sm text-sm font-normal leading-relaxed mb-6">
                    Redefining functional fashion for the modern palate.
                </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-lg bg-[#F2EFE9]/10 border border-[#F2EFE9]/20 flex items-center justify-center hover:bg-[#C9E265] hover:text-[#1A261D] hover:border-[#C9E265] transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg bg-[#F2EFE9]/10 border border-[#F2EFE9]/20 flex items-center justify-center hover:bg-[#C9E265] hover:text-[#1A261D] hover:border-[#C9E265] transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-[#FF6B4A] font-semibold mb-4 uppercase tracking-wider text-xs font-grotesk">Company</h4>
<ul className="space-y-3 text-[#F2EFE9]/70 text-sm">
<li>CEO: [Insert Name]</li>
<li>Address: [Insert Address]</li>
</ul>
</div>
<div>
<h4 className="text-[#FF6B4A] font-semibold mb-4 uppercase tracking-wider text-xs font-grotesk">Contact</h4>
<ul className="space-y-3 text-[#F2EFE9]/70 text-sm">
<li>Email: <a className="hover:text-[#C9E265] transition-colors underline decoration-[#F2EFE9]/30 underline-offset-4" href="#">[Insert Email]</a></li>
<li>Support: [Insert Phone Number]</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#F2EFE9]/10 text-center md:text-left flex flex-col md:flex-row justify-between text-[#9D8BB5] text-xs font-medium">
<p>© 2024 K-Studio. All rights reserved.</p>
<p className="flex items-center gap-1 justify-center md:justify-end mt-4 md:mt-0">
                Designed with <iconify-icon className="text-[#FF6B4A]" icon="solar:heart-angle-linear"></iconify-icon> for flavor
            </p>
</div>
</footer>

    </>
  );
}
