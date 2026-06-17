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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fffbf0',
100: '#fef3d6',
200: '#fce3ad',
300: '#face7d',
400: '#f7b14a',
500: '#f49420',
600: '#e57713',
700: '#be5a12',
800: '#974616',
900: '#7a3b15',
950: '#421c08',
},
base: {
900: '#11100e',
950: '#0a0908',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-6 lg:px-8 overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-base-950 to-base-950"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<span className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-base font-medium text-brand-400">
                    For Arabic speakers who understand English but freeze when it's time to speak
                </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight">
                Stop Translating in Your Head. <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Start Speaking English With Confidence</span>
</h1>
<p className="text-lg sm:text-xl text-stone-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                The Slow English Library is a calm learning experience with <strong className="font-medium text-white">50+ short animated video stories</strong> designed to help you improve listening, vocabulary, and natural speaking—without boring lessons or overwhelming grammar rules.
            </p>

<div className="relative w-full max-w-3xl mx-auto aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 border border-stone-800 mb-12 group">
<div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-transparent z-10 opacity-60"></div>

<img alt="Person relaxing and learning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&amp;w=2098&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-16 h-16 rounded-full bg-brand-500/90 text-base-950 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-brand-500/30 transition-transform hover:scale-110 cursor-pointer">
<i className="w-8 h-8 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-lg font-semibold text-base-950 shadow-lg shadow-brand-500/25 hover:bg-brand-400 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#offer">
                Melt Your Freeze Today
            </a>
</div>

<div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
<div className="bg-base-900/50 border border-stone-800/50 rounded-3xl p-8 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-400" data-lucide="book-x" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Zero Grammar Stress</h3>
<p className="text-lg text-stone-400 leading-relaxed">Forget boring textbooks and tests. Learn naturally by absorbing English through engaging stories.</p>
</div>
<div className="bg-base-900/50 border border-stone-800/50 rounded-3xl p-8 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-400" data-lucide="puzzle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">The 15-Line Method</h3>
<p className="text-lg text-stone-400 leading-relaxed">Say goodbye to overwhelming walls of text. Every story is broken into short lines to make English easier to absorb, understand, and repeat.</p>
</div>
<div className="bg-base-900/50 border border-stone-800/50 rounded-3xl p-8 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-400" data-lucide="clapperboard" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Watch, Relax, Speak</h3>
<p className="text-lg text-stone-400 leading-relaxed">High-quality, relaxing videos that make learning feel like entertainment, not homework.</p>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-base-900/30 border-y border-stone-800/50 px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8 text-center">
                The Real Reason Your English Is Trapped Inside Your Head
            </h2>
<div className="space-y-6 text-lg text-stone-300">
<p className="leading-relaxed">
                    You know the rules. You know the vocabulary. But when it's time to speak, everything changes. Your heart beats faster. Your mind goes blank.
                </p>
<p className="leading-relaxed font-medium text-white">
                    This isn't your fault.
                </p>
<p className="leading-relaxed">
                    Years of school trained you to pass written tests, not to speak. Mistakes were punished, so your brain learned to stay silent to stay safe.
                </p>
<p className="leading-relaxed">
                    And most English videos online are too fast, too difficult, or too boring. Your brain gets overwhelmed, and eventually you give up.
                </p>
</div>
<div className="mt-12 p-8 rounded-3xl bg-base-950 border border-stone-800 relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-brand-500/50"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-4">The Result:</h3>
<p className="text-lg text-stone-300 mb-6 leading-relaxed">
                    You keep translating every word in your head. It's like reading a hundred books about swimming but never actually jumping into the water.
                </p>
<p className="text-xl font-medium text-brand-400">
                    Your English isn't broken. It's just frozen.
                </p>
</div>
<div className="mt-16 space-y-6 text-lg text-stone-300">
<p className="leading-relaxed font-medium text-white text-xl">
                    There is a simpler way.
                </p>
<p className="leading-relaxed">
                    To melt the freeze, you don't need more grammar rules. You need a way to learn English that feels natural, clear, and easy to follow.
                </p>
<p className="leading-relaxed">
                    That's why short, simple stories work so well. They help your brain understand English without getting overwhelmed.
                </p>
</div>
<div className="mt-12">
<h3 className="text-xl font-semibold tracking-tight text-white mb-8">With this approach, you can:</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-brand-400" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<p className="text-lg leading-relaxed"><strong className="font-medium text-white">Train your ear</strong> by listening to English at a slow, natural pace until it starts to feel familiar.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-brand-400" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<p className="text-lg leading-relaxed"><strong className="font-medium text-white">Build vocabulary naturally</strong> through context, the same way you learned your first language.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-brand-400" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<p className="text-lg leading-relaxed"><strong className="font-medium text-white">Create real consistency</strong> with short patterns that are easy to repeat and remember.</p>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-800/50 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-brand-400" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<p className="text-lg leading-relaxed"><strong className="font-medium text-white">Stay relaxed</strong> by focusing on the story instead of getting lost in mistakes.</p>
</li>
</ul>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center rounded-full bg-stone-800 px-8 py-4 text-lg font-semibold text-white border border-stone-700 hover:bg-stone-700 hover:text-white transition-all" href="#offer">
                    Start learning English the easy way
                </a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-10 text-center">
                I Know the "Academic Freeze" Because I Lived It.
            </h2>
<div className="space-y-8 text-lg text-stone-300 leading-relaxed bg-stone-900/20 p-8 sm:p-10 rounded-3xl border border-stone-800/50">
<p>
                    For a long time, my English felt stuck too. I tried memorizing vocabulary and studying complicated rules, but every time I had to speak, the fear came back.
                </p>
<p className="font-medium text-white text-xl">
                    That's when I realized something important:
                </p>
<p className="text-xl italic text-stone-400 border-l-2 border-brand-500/50 pl-6 my-8">
                    Traditional learning was not helping me feel freer. It was making the freeze worse.
                </p>
<p>
                    So I knew there had to be a simpler, less stressful way to learn.
                </p>
<p>
                    I changed how I approached English completely. Instead of pressure and memorization, I focused on absorbing the language naturally through clear, simple input.
                </p>
<p>
                    That shift made a real difference.
                </p>
<div className="mt-8 pt-8 border-t border-stone-800 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-stone-800 border-2 border-base-950"></div>
<div className="w-10 h-10 rounded-full bg-stone-700 border-2 border-base-950"></div>
<div className="w-10 h-10 rounded-full bg-stone-600 border-2 border-base-950"></div>
<div className="w-10 h-10 rounded-full bg-brand-500/20 border-2 border-base-950 flex items-center justify-center text-xs font-medium text-brand-400">+</div>
</div>
<p className="text-base font-medium text-white">
                        Today, more than <span className="text-brand-400">1.1 million</span> people learn with me on social media.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-base-900/30 border-y border-stone-800/50 px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-lg text-stone-300 leading-relaxed mb-6">
                    But short clips on social media alone are not enough to build real fluency. You need a structured, distraction-free environment to truly absorb the language.
                </p>
<p className="text-lg text-stone-300 leading-relaxed">
                    That's why I created <strong className="font-medium text-white">The Slow English Library</strong>—a calm, private space to go deeper with English in a way that feels easy to follow and easy to keep up with.
                </p>
</div>
<div className="bg-base-950 rounded-3xl border border-stone-800 p-8 sm:p-12 mb-20">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-10 text-center">Inside, you won't find heavy textbooks or grammar tests. Instead you get:</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex gap-5">
<div className="mt-1 w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="film" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">50+ Immersive Animated Stories</h4>
<p className="text-lg text-stone-400 leading-relaxed">High-quality video and audio stories that make learning feel like watching a relaxing show, not doing homework.</p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">A short format</h4>
<p className="text-lg text-stone-400 leading-relaxed">Each story follows our stress free 15 line method, so you can finish a lesson in just a few minutes.</p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Diverse Life Topics</h4>
<p className="text-lg text-stone-400 leading-relaxed">Learn vocabulary you actually need for real life, from casual small talk to stressful adult conversations.</p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="captions" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Clear Audio &amp; Subtitles</h4>
<p className="text-lg text-stone-400 leading-relaxed">Listen at a slow pace while following along with English and Arabic subtitles so you understand every word.</p>
</div>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">It's that simple</h3>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-800 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-base-950 bg-stone-800 text-stone-300 font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--tw-shadow-color)] shadow-base-950 z-10">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-base-900 border border-stone-800/50">
<h4 className="text-xl font-medium text-white mb-2">Open the Whop app</h4>
<p className="text-lg text-stone-400">Access your private dashboard directly on your phone or desktop. No clutter, no distractions, just one place to focus.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-base-950 bg-stone-800 text-stone-300 font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--tw-shadow-color)] shadow-base-950 z-10">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-base-900 border border-stone-800/50">
<h4 className="text-xl font-medium text-white mb-2">Watch one story</h4>
<p className="text-lg text-stone-400">Pick one short animated story and follow along with clear double subtitles so the language feels easy to understand.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-base-950 bg-stone-800 text-stone-300 font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--tw-shadow-color)] shadow-base-950 z-10">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-base-900 border border-stone-800/50">
<h4 className="text-xl font-medium text-white mb-2">Absorb naturally</h4>
<p className="text-lg text-stone-400">Because we removed all the pressure, your brain easily absorbs real-life rescue lines and starts using them in your next conversations.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-base-950 bg-stone-800 text-stone-300 font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--tw-shadow-color)] shadow-base-950 z-10">4</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-base-900 border border-stone-800/50">
<h4 className="text-xl font-medium text-white mb-2">Keep coming back</h4>
<p className="text-lg text-stone-400">Because the content stays simple and consistent, learning becomes something you can actually stick with.</p>
</div>
</div>
</div>
<p className="text-center text-lg italic text-stone-400 mt-16 font-medium">
                    "No complicated setup. Just log in and start listening."
                </p>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 lg:px-8 relative overflow-hidden" id="offer">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-sm font-medium text-brand-400 uppercase tracking-wider">Limited Time Offer</span>
</div>
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                    The Slow English Library <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Founder's Bundle</span>
</h2>
<p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
                    The library is officially open. To celebrate the launch, I created a special offer that makes getting started as simple as possible.
                </p>
<div className="inline-block bg-base-900 border border-stone-800 rounded-2xl px-8 py-6 mb-12">
<p className="text-lg text-stone-300">For just <strong className="text-3xl text-white font-semibold mx-2">€37</strong> you get lifetime access to the complete animated library.</p>
</div>
<p className="text-lg text-stone-400 font-medium">
                    Join before the timer hits zero and get these <span className="text-white">2 bonus packages</span> for free:
                </p>
</div>

<div className="space-y-6 mb-16">

<div className="bg-gradient-to-br from-base-900 to-base-950 border border-stone-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-400 rounded-full border border-brand-500/20">BONUS 1</span>
<h3 className="text-2xl font-semibold tracking-tight text-white">The "Fluency Action" Toolkit Bundle <span className="text-stone-500 font-normal text-xl">(4-in-1)</span></h3>
</div>
<p className="text-lg text-stone-400 mb-8 italic">Because watching videos is step one. Taking action is step two. I bundled my 4 most useful tracking tools to help you stay consistent and measure your progress.</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<li className="bg-base-950 rounded-2xl p-5 border border-stone-800/50">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-brand-400" data-lucide="clipboard-list" strokeWidth="1.5"></i>
<h4 className="font-medium text-white text-lg">1. "Real-Life Blueprint"</h4>
</div>
<p className="text-base text-stone-400">Pre-plan daily interactions. Know how to open, steer, and close before you speak.</p>
</li>
<li className="bg-base-950 rounded-2xl p-5 border border-stone-800/50">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-brand-400" data-lucide="target" strokeWidth="1.5"></i>
<h4 className="font-medium text-white text-lg">2. "Blind-Spot" Matrix</h4>
</div>
<p className="text-base text-stone-400">Identify your top 3 recurring errors and use proven exercises to fix them.</p>
</li>
<li className="bg-base-950 rounded-2xl p-5 border border-stone-800/50">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-brand-400" data-lucide="headphones" strokeWidth="1.5"></i>
<h4 className="font-medium text-white text-lg">3. "Self-Correction" Sheet</h4>
</div>
<p className="text-base text-stone-400">Evaluate your own voice recordings in 10 mins and see improvements daily.</p>
</li>
<li className="bg-base-950 rounded-2xl p-5 border border-stone-800/50">
<div className="flex items-center gap-3 mb-3">
<i className="w-5 h-5 text-brand-400" data-lucide="trending-up" strokeWidth="1.5"></i>
<h4 className="font-medium text-white text-lg">4. 30-Day Tracker</h4>
</div>
<p className="text-base text-stone-400">A visual roadmap to track performance and build an unbreakable habit.</p>
</li>
</ul>
</div>

<div className="bg-gradient-to-br from-base-900 to-base-950 border border-stone-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-400 rounded-full border border-brand-500/20">BONUS 2</span>
<h3 className="text-2xl font-semibold tracking-tight text-white">The "Deep Immersion" Extra Story Collection</h3>
</div>
<p className="text-lg text-stone-400 mb-8">Want more? Get a full extra hour of premium Slow English Stories with 9 brand-new situations designed to help you go deeper into the language.</p>
<div className="bg-base-950 rounded-2xl p-6 border border-stone-800/50">
<p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">Includes exclusive stories like:</p>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-brand-400 mt-1 shrink-0" data-lucide="plane" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-white text-lg">"The Airport Flight Change"</h4>
<p className="text-base text-stone-400 italic">Learn rescue lines to handle fast-speaking staff under pressure.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-brand-400 mt-1 shrink-0" data-lucide="coffee" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-white text-lg">"The Small Talk Survival Guide"</h4>
<p className="text-base text-stone-400">Learn natural "bridge sentences" to survive the first 5 mins of any meeting.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<i className="w-5 h-5 text-brand-400 mt-1 shrink-0" data-lucide="sunrise" strokeWidth="1.5"></i>
<div>
<h4 className="font-medium text-white text-lg">"The Morning I Almost Quit"</h4>
<p className="text-base text-stone-400 italic">What to say and think when you feel too exhausted to practice.</p>
</div>
</li>
</ul>
<p className="text-base text-brand-400/80 mt-4 font-medium pl-9">...and 6 more premium stories!</p>
</div>
</div>
</div>

<div className="bg-base-900 border border-brand-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_50px_-12px_rgba(245,158,11,0.1)]">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Learn without pressure... just listen and enjoy.</h3>

<div className="flex justify-center gap-4 my-8">
<div className="flex flex-col items-center">
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-base-950 border border-stone-800 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-semibold text-brand-400 font-mono shadow-inner shadow-black/50">06</div>
<span className="text-xs text-stone-500 mt-2 uppercase tracking-widest">Days</span>
</div>
<div className="text-3xl text-stone-700 font-mono mt-4 sm:mt-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-base-950 border border-stone-800 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-semibold text-brand-400 font-mono shadow-inner shadow-black/50">23</div>
<span className="text-xs text-stone-500 mt-2 uppercase tracking-widest">Hours</span>
</div>
<div className="text-3xl text-stone-700 font-mono mt-4 sm:mt-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 sm:w-20 sm:h-20 bg-base-950 border border-stone-800 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-semibold text-brand-400 font-mono shadow-inner shadow-black/50">59</div>
<span className="text-xs text-stone-500 mt-2 uppercase tracking-widest">Mins</span>
</div>
</div>
<div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4 inline-flex items-start gap-3 text-left max-w-xl mx-auto mb-10">
<i className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" data-lucide="triangle-alert" strokeWidth="1.5"></i>
<div>
<strong className="text-white text-base block mb-1">Attention:</strong>
<p className="text-base text-stone-300">The Founder's Bundle disappears when the timer hits zero. After these 7 days, these <strong className="text-white">two bonus packages</strong> will be removed and sold separately.</p>
</div>
</div>
<p className="text-xl font-medium text-white mb-6">Stop studying. Start experiencing.</p>
<button className="w-full sm:w-auto flex flex-col items-center justify-center rounded-full bg-brand-500 px-8 py-5 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)] hover:bg-brand-400 transition-all hover:scale-[1.02] active:scale-[0.98] group mx-auto">
<span className="text-xl font-semibold text-base-950 mb-1 group-hover:text-black">Get Instant Access for €37</span>
<span className="text-sm font-medium text-base-900/80">(Includes All Bonuses)</span>
</button>
<div className="mt-6 flex items-center justify-center gap-2 text-sm text-stone-400">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span>100% Secure Checkout via Whop.</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-base-900/30 border-t border-stone-800/50 px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<p className="text-xl text-stone-300 mb-10">
                If you've enjoyed the videos on social media, you'll likely enjoy The Slow English Library.
            </p>
<div className="inline-block bg-base-950 border border-stone-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
<div className="w-16 h-16 mx-auto rounded-full bg-stone-900 flex items-center justify-center mb-6 border border-stone-800">
<i className="w-8 h-8 text-brand-400" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">My 3-Day "Watch &amp; Feel" Guarantee</h3>
<p className="text-lg text-stone-400 leading-relaxed mb-8">
                    Watch the first stories for 3 full days. If the style isn't for you, just send us a message within the first 3 days and we'll refund your payment.
                </p>
<a className="inline-flex items-center justify-center rounded-full bg-stone-800 px-6 py-3 text-base font-medium text-white border border-stone-700 hover:bg-stone-700 transition-colors" href="#offer">
                    Start now 100% Risk free
                </a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 lg:px-8">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-16 text-center">
                Questions You Might Have
            </h2>
<div className="space-y-8">
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">What is The Slow English Library?</h3>
<p className="text-lg text-stone-400 leading-relaxed">It's a calm, animated learning experience with <strong className="text-stone-300">50+ immersive stories</strong> designed to help you improve listening, vocabulary, and natural speaking. No boring lessons, no overwhelming grammar—just <strong className="text-stone-300">pure immersion</strong> that fits into your daily routine.</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">Do I need to know English well to start?</h3>
<p className="text-lg text-stone-400 leading-relaxed">No. The library is designed for people who want to improve their English in a simple, low-pressure way, even if speaking still feels difficult.</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">Is this a monthly subscription?</h3>
<p className="text-lg text-stone-400 leading-relaxed">No. It's a <strong className="text-stone-300">one-time payment of €37</strong> for lifetime access. No hidden fees, no recurring charges.</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">How do I get access?</h3>
<p className="text-lg text-stone-400 leading-relaxed">Immediately after purchase, you'll get instant access to your private dashboard. You can use it in your browser or download the <strong className="text-stone-300">Whop app</strong> to learn on the go (iOS &amp; Android).</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">Can I get a refund if I'm not satisfied?</h3>
<p className="text-lg text-stone-400 leading-relaxed">Yes. I offer a <strong className="text-stone-300">3-Day "Watch &amp; Feel" Guarantee.</strong> Explore the stories for three days. If you feel the method isn't the right fit for you, just send us a message and we'll refund your payment—no questions asked.</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">How long do I have access?</h3>
<p className="text-lg text-stone-400 leading-relaxed">You pay once and get <strong className="text-stone-300">Lifetime Access</strong> to all the stories and bonuses included in your bundle. They are yours to keep forever.</p>
</div>
<div className="border-b border-stone-800 pb-8">
<h3 className="text-xl font-semibold text-white mb-3">What happens after the 7-day timer hits zero?</h3>
<p className="text-lg text-stone-400 leading-relaxed">The library will still be available for €37, but the <strong className="text-stone-300">"Fluency Action" Toolkit</strong> and the <strong className="text-stone-300">9 Extra Stories</strong> will be removed and sold separately. This bundle is my special "thank you" for those joining during the launch.</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-base-900 border-t border-stone-800 px-6 lg:px-8 text-center">
<div className="max-w-2xl mx-auto">
<div className="space-y-4 mb-12">
<p className="text-2xl text-stone-400 font-medium tracking-tight">You do not need to start perfectly.</p>
<p className="text-2xl text-stone-400 font-medium tracking-tight">You do not need to push yourself.</p>
<p className="text-3xl text-white font-semibold tracking-tight">Stop studying. Start experiencing.</p>
<p className="text-2xl text-stone-400 font-medium tracking-tight">And let the language enter your life naturally.</p>
</div>
<button className="w-full sm:w-auto flex flex-col items-center justify-center rounded-full bg-brand-500 px-10 py-5 shadow-lg shadow-brand-500/20 hover:bg-brand-400 transition-all hover:scale-[1.02] active:scale-[0.98] group mx-auto mb-6">
<span className="text-xl font-semibold text-base-950 mb-1">Get Instant Access for €37</span>
<span className="text-sm font-medium text-base-900/80">(Includes All Bonuses)</span>
</button>
<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-stone-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span>100% Secure Checkout via Whop.</span>
</div>
<span className="hidden sm:inline text-stone-700">•</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
<span>3-Day Money-Back Guarantee.</span>
</div>
</div>
</div>
</section>


    </>
  );
}
