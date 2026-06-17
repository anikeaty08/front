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
colors: {
honey: {
50: '#FFFDF8',
100: '#FDF7E8',
200: '#FAE8B8',
300: '#F6D987',
400: '#F1C956',
500: '#ECAF18', // Primary
600: '#C58D10',
900: '#4F3805',
},
charcoal: {
800: '#2D2D2D',
900: '#1F1F1F',
},
cream: '#FEFCF8',
},
fontFamily: {
nunito: ['Nunito', 'sans-serif'],
hind: ['Hind Siliguri', 'sans-serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
'honey': '0 10px 40px -10px rgba(236,175,24,0.3)',
},
borderRadius: {
'2.5xl': '1.25rem',
'4xl': '2rem',
}
}
}
}



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
      

<nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-honey-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-nunito text-xl font-semibold tracking-tighter text-charcoal-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-xl bg-honey-500 text-white flex items-center justify-center text-lg">
<iconify-icon icon="solar:pen-new-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
                Genius Bee Learner
            </a>

<div className="hidden md:flex items-center gap-8 font-nunito text-sm font-medium text-gray-600">
<a className="hover:text-honey-500 transition-colors" href="#">Home</a>
<a className="text-honey-500 transition-colors" href="#">About Us</a>
<a className="hover:text-honey-500 transition-colors" href="#">Courses</a>
<a className="hover:text-honey-500 transition-colors" href="#">Parents</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block font-nunito text-sm font-medium text-gray-600 hover:text-charcoal-900 transition-colors" href="#">Log in</a>
<a className="bg-honey-500 hover:bg-honey-600 text-white font-nunito text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-sm hover:shadow-honey" href="#">
                    Explore Courses
                </a>
</div>
</div>
</nav>
<main className="overflow-hidden">

<section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

<div className="absolute top-20 left-10 w-72 h-72 bg-honey-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
<div className="flex-1 space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 text-honey-600 font-nunito text-sm font-medium mb-4">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
                    Discover Our Story
                </div>
<h1 className="font-nunito text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-charcoal-900 leading-[1.15]">
                    Our Story Begins With <br className="hidden lg:block"/>
<span className="relative inline-block mt-2 lg:mt-0">
                        Curious Minds
                        
<svg className="absolute w-full h-3 -bottom-1 left-0 text-honey-500" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
<path d="M2.0004 6.82914C45.3337 2.49581 146.6 -3.17086 198.5 6.82914" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</span>
</h1>
<p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                    Helping children learn with joy, confidence, and creativity. We build the foundation for a lifetime of imaginative exploration.
                </p>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto bg-honey-500 text-white font-nunito text-base font-medium py-3.5 px-8 rounded-full shadow-honey hover:-translate-y-0.5 transition-all" href="#">
                        Explore Courses
                    </a>
<a className="w-full sm:w-auto bg-white border border-gray-200 text-charcoal-800 font-nunito text-base font-medium py-3.5 px-8 rounded-full shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl text-honey-500" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Video
                    </a>
</div>
</div>

<div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
<div className="relative aspect-square">
<div className="absolute inset-0 bg-honey-100 rounded-full scale-90 -z-10"></div>
<div className="absolute top-10 right-10 w-2/3 h-2/3 bg-white rounded-3xl shadow-soft border border-gray-50 p-6 rotate-3 flex flex-col justify-between">
<div className="w-12 h-12 bg-honey-50 rounded-xl flex items-center justify-center text-honey-500 text-2xl">
<iconify-icon icon="solar:palette-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-10 left-0 w-3/5 h-1/2 bg-white rounded-3xl shadow-soft border border-gray-50 p-6 -rotate-6 flex flex-col justify-between">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 text-2xl">
<iconify-icon icon="solar:calculator-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-honey-500 rounded-full shadow-honey flex items-center justify-center text-white text-4xl z-10 animate-[bounce_4s_infinite]">
<iconify-icon icon="solar:smile-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-gray-50">
<div className="max-w-7xl mx-auto">
<div className="bg-cream rounded-4xl p-8 md:p-16 border border-honey-100/50 shadow-soft">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative h-64 lg:h-full min-h-[300px] rounded-3xl overflow-hidden bg-honey-50 border border-honey-100 flex items-center justify-center">

<div className="absolute inset-0 bg-honeycomb opacity-50"></div>
<iconify-icon className="text-8xl text-honey-300 relative z-10" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="font-nunito text-3xl md:text-4xl font-semibold tracking-tight text-charcoal-900">
                                About Genius Bee Learner
                            </h2>
<div className="space-y-4 text-gray-600 font-light text-base md:text-lg">
<p>
                                    Genius Bee Learner is a joyful, safe, and innovative online learning platform created especially for children aged 5–12. We believe every child has a natural curiosity to learn — and when learning feels fun, confidence grows naturally.
                                </p>
<p>
                                    Our mission is to make education playful, meaningful, and inspiring while giving parents full confidence and visibility into their child’s progress.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-honey-100 text-honey-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<h2 className="font-nunito text-3xl md:text-4xl font-semibold tracking-tight text-charcoal-900 mb-16">
                Our Story
            </h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-honey-200 to-transparent -translate-y-1/2 -z-10"></div>
<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 flex flex-col items-center">
<div className="w-14 h-14 rounded-2xl bg-honey-50 text-honey-500 flex items-center justify-center text-2xl mb-6 shadow-sm">
<iconify-icon icon="solar:confetti-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-3 tracking-tight">No More Boring</h3>
<p className="text-sm text-gray-500 font-light">We started with a simple idea: learning should be as engaging as playtime.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 flex flex-col items-center relative md:-translate-y-4">
<div className="w-14 h-14 rounded-2xl bg-honey-500 text-white flex items-center justify-center text-2xl mb-6 shadow-honey">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-3 tracking-tight">Structured Joy</h3>
<p className="text-sm text-gray-500 font-light">We combined expert educational frameworks with child-centered joy.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 flex flex-col items-center">
<div className="w-14 h-14 rounded-2xl bg-honey-50 text-honey-500 flex items-center justify-center text-2xl mb-6 shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-3 tracking-tight">Confident Families</h3>
<p className="text-sm text-gray-500 font-light">Today, we build step-by-step skill growth for excited kids and confident parents.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-honeycomb border-y border-honey-100/50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-nunito text-3xl md:text-4xl font-semibold tracking-tight text-charcoal-900 mb-4">
                        What Makes Us Different
                    </h2>
<p className="text-gray-600 font-light">Features designed with both the child's happiness and the parent's peace of mind.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-full bg-honey-100 text-honey-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:face-smile-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-lg font-medium text-charcoal-900 mb-2">Kid-Friendly Learning</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Interactive lessons that feel like play, keeping little minds engaged.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-full bg-honey-100 text-honey-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-lg font-medium text-charcoal-900 mb-2">Real Progress Tracking</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Transparent dashboards so parents can celebrate every milestone.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-full bg-honey-100 text-honey-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hands-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-lg font-medium text-charcoal-900 mb-2">Caring Teachers</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Qualified educators who nurture and guide with patience and expertise.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-full bg-honey-100 text-honey-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-lg font-medium text-charcoal-900 mb-2">Safe Environment</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">A secure, ad-free platform where children can explore safely.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="bg-honey-50 rounded-4xl p-10 md:p-20 text-center relative overflow-hidden border border-honey-100">

<div className="absolute top-0 right-0 w-64 h-64 bg-honeycomb opacity-30 mask-image:linear-gradient(to_bottom_left,black,transparent)"></div>
<iconify-icon className="text-4xl text-honey-300 mb-6" icon="solar:eye-linear"></iconify-icon>
<h2 className="font-nunito text-sm font-medium tracking-widest text-honey-600 uppercase mb-4">Our Vision</h2>
<p className="font-nunito text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-charcoal-900 leading-tight max-w-3xl mx-auto">
                    "At Genius Bee Learner, we imagine a world where education is joyful, creative, and confidence-building for every child."
                </p>
</div>
</section>

<section className="py-16 px-6 max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-nunito text-2xl md:text-3xl font-semibold tracking-tight text-charcoal-900">
                    Our Core Values
                </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-3xl text-honey-500 mb-3" icon="solar:lightbulb-linear"></iconify-icon>
<span className="font-nunito text-sm font-medium text-charcoal-800">Creativity</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-3xl text-honey-500 mb-3" icon="solar:star-linear"></iconify-icon>
<span className="font-nunito text-sm font-medium text-charcoal-800">Confidence</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-3xl text-honey-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<span className="font-nunito text-sm font-medium text-charcoal-800">Curiosity</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
<iconify-icon className="text-3xl text-honey-500 mb-3" icon="solar:heart-linear"></iconify-icon>
<span className="font-nunito text-sm font-medium text-charcoal-800">Compassion</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm col-span-2 md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-auto">
<iconify-icon className="text-3xl text-honey-500 mb-3" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="font-nunito text-sm font-medium text-charcoal-800">Safety</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-50">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-nunito text-3xl md:text-4xl font-semibold tracking-tight text-charcoal-900">
                        Who We Serve
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8 first:pt-0">
<div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-honey-500 text-3xl mb-6">
<iconify-icon icon="solar:user-rounded-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-2">Kids (Ages 5–12)</h3>
<p className="text-sm text-gray-500 font-light">Providing a fun, engaging space to explore, create, and build foundational skills.</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8">
<div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-honey-500 text-3xl mb-6">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-2">Parents</h3>
<p className="text-sm text-gray-500 font-light">Offering peace of mind, transparent progress, and tools to support their child's journey.</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-8">
<div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-honey-500 text-3xl mb-6">
<iconify-icon icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="font-nunito text-xl font-medium text-charcoal-900 mb-2">Educators</h3>
<p className="text-sm text-gray-500 font-light">Empowering teachers with interactive resources to make learning impactful.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-honey-500 rounded-4xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-honey-500/20">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-5xl text-white/90 mb-6" icon="solar:rocket-linear"></iconify-icon>
<h2 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                        Let’s Make Learning Fun — Together
                    </h2>
<p className="text-honey-50 font-light text-lg mb-10 max-w-xl">
                        Join the Genius Bee Learner family today and unlock a world of joyful education for your child.
                    </p>
<a className="bg-white text-honey-600 font-nunito text-base font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" href="#">
                        Create Your Account
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 py-12 text-center text-sm text-gray-400 font-light">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
<div className="font-nunito text-lg font-medium tracking-tighter text-gray-300">
                Genius Bee Learner
            </div>
<p>© 2023 Genius Bee Learner. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
