import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
950: '#030712',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
normal: '0',
},
boxShadow: {
'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
'glass': '0 0 0 1px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.05)',
},
animation: {
'text-slide': 'text-slide 12s cubic-bezier(0.83, 0, 0.17, 1) infinite',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
'text-slide': {
'0%, 16%': { transform: 'translateY(0%)' },
'20%, 36%': { transform: 'translateY(-16.66%)' },
'40%, 56%': { transform: 'translateY(-33.33%)' },
'60%, 76%': { transform: 'translateY(-50%)' },
'80%, 96%': { transform: 'translateY(-66.66%)' },
'100%': { transform: 'translateY(-83.33%)' },
},
'scroll': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-gray-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:message-circle" width="12"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">eldil</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Method</a>
<a className="hover:text-gray-900 transition-colors" href="#">Voices</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-all shadow-xs border border-transparent hover:shadow-sm" href="#">Sign Up</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-30"></div>
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="fade-in-up mb-8 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs cursor-pointer hover:border-gray-300 transition-colors group">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Engine v2.0 Live</span>
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors group-hover:translate-x-0.5 transform duration-200" icon="lucide:arrow-right" width="10"></iconify-icon>
</div>

<h1 className="fade-in-up delay-100 sm:text-6xl lg:text-7xl leading-[1.1] text-balanced text-5xl font-semibold text-gray-900 tracking-tighter max-w-4xl mr-auto mb-6 ml-auto">
                Fluent conversation with<br/>
<div className="h-[1.1em] overflow-hidden inline-block align-top relative w-full sm:w-auto">
<div className="animate-text-slide flex flex-col items-center">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 pb-1">Claude</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 pb-1">ChatGPT</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 pb-1">Perplexity</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 pb-1">Llama 3</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 pb-1">Gemini</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 pb-1">Claude</span>
</div>
</div>
</h1>

<p className="fade-in-up delay-200 text-base sm:text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed text-balanced font-normal">
                Master any language with a partner that listens, corrects, and adapts to your level using the world's most advanced AI models.
            </p>

<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-16">
<button className="w-full sm:w-auto h-10 px-5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2 group">
                    Start learning
                    <iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="lucide:chevron-right" width="14"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-10 px-5 bg-white text-gray-700 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:play-circle" width="16"></iconify-icon>
                    View demo
                </button>
</div>

<div className="fade-in-up delay-300 overflow-hidden w-full mb-20">
<p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-8">Powering your conversations with leading models</p>
<div className="w-full relative mask-linear-fade max-w-5xl mx-auto">
<div className="flex animate-scroll w-max hover:[animation-play-state:paused]">

<div className="flex items-center gap-16 px-8 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100">

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:meta" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">LLaMA</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Copilot</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon className="stroke-[3px]" icon="lucide:slash" width="20"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">Grok</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="lucide:fish" width="22"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">DeepSeek</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:perplexity" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Perplexity</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:openai" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">ChatGPT</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:anthropic" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Claude</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100">

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:meta" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">LLaMA</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Copilot</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon className="stroke-[3px]" icon="lucide:slash" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Grok</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="lucide:fish" width="22"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">DeepSeek</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:perplexity" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Perplexity</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:openai" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">ChatGPT</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon icon="simple-icons:anthropic" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Claude</span>
</div>
</div>
</div>
</div>
</div>

<div className="fade-in-up delay-500 relative w-full max-w-5xl mx-auto perspective-[2000px]">

<div className="relative bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden aspect-[16/10] md:aspect-[2/1] flex flex-col group transition-transform duration-700 hover:scale-[1.01]">

<div className="h-9 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>
<div className="mx-auto text-[10px] font-medium text-gray-400 tracking-wide">eldil.app</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-56 border-r border-gray-100 bg-gray-50/30 flex flex-col p-3 hidden md:flex">
<div className="flex items-center gap-2 mb-6 px-2">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="h-2 w-20 bg-gray-200 rounded-full"></div>
</div>
<div className="space-y-1">
<div className="h-8 w-full bg-white border border-gray-200 shadow-xs rounded-md flex items-center px-3 gap-2">
<div className="w-3 h-3 bg-blue-100 rounded-sm"></div>
<div className="h-1.5 w-24 bg-gray-200 rounded-full"></div>
</div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-2 opacity-50 hover:bg-gray-100 cursor-pointer">
<div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
<div className="h-1.5 w-16 bg-gray-200 rounded-full"></div>
</div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-2 opacity-50 hover:bg-gray-100 cursor-pointer">
<div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
<div className="h-1.5 w-20 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white relative flex flex-col">
<div className="flex-1 p-8 space-y-6 overflow-hidden">

<div className="flex gap-4 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="text-[11px] font-semibold text-gray-400 pl-1">Eldil AI</div>
<div className="p-3.5 bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm text-[13px] text-gray-700 leading-relaxed shadow-xs">
                                            ¡Hola! Vamos a practicar tu pronunciación. ¿Podrías describir qué ves en tu habitación ahora mismo?
                                        </div>
</div>
</div>

<div className="flex gap-4 max-w-xl ml-auto flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards opacity-0" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
<div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200 text-gray-400">
<iconify-icon icon="lucide:user" width="14"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="p-3.5 bg-white border border-gray-200 rounded-2xl rounded-tr-sm text-[13px] text-gray-800 leading-relaxed shadow-sm">
                                            Veo una mesa blanca y una silla... eh, una silla cómoda.
                                        </div>
<div className="flex justify-end gap-2 pr-1">
<span className="inline-flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> Grammar
                                            </span>
<span className="inline-flex items-center gap-1 text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
<iconify-icon icon="lucide:mic" width="10"></iconify-icon> Pronunciation
                                            </span>
</div>
</div>
</div>
</div>

<div className="p-6 pt-0">
<div className="h-12 border border-gray-200 rounded-xl shadow-sm bg-white flex items-center px-4 justify-between hover:border-gray-300 transition-colors cursor-text">
<div className="flex items-center gap-3 w-full">
<iconify-icon className="text-gray-400" icon="lucide:plus" width="16"></iconify-icon>
<div className="text-[13px] text-gray-400 font-normal">Type a message...</div>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer">
<iconify-icon icon="lucide:mic" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
</div>
</div>
</main>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Engineered for acquisition.</h2>
<p className="text-gray-500">Most apps gamify learning. We focus on acquisition through context, frequency, and active recall.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

<div className="md:col-span-2 relative group overflow-hidden bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<iconify-icon className="text-gray-700" icon="lucide:waves" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold text-gray-900 mb-2">Phonetic Analysis</h3>
<p className="text-sm text-gray-500 max-w-sm">Visual feedback on your pitch, cadence, and tone compared to native speakers.</p>
</div>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.03] bg-[repeating-linear-gradient(45deg,black,black_1px,transparent_1px,transparent_10px)]"></div>
<div className="absolute right-8 bottom-8 flex gap-1 items-end h-32 opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-3 bg-gray-900 rounded-t-sm h-12"></div>
<div className="w-3 bg-gray-900 rounded-t-sm h-20"></div>
<div className="w-3 bg-gray-900 rounded-t-sm h-16"></div>
<div className="w-3 bg-gray-900 rounded-t-sm h-24"></div>
<div className="w-3 bg-gray-900 rounded-t-sm h-10"></div>
<div className="w-3 bg-gray-900 rounded-t-sm h-14"></div>
</div>
</div>

<div className="relative group overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
<div className="p-8 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center mb-auto">
<iconify-icon className="text-gray-700" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Feedback</h3>
<p className="text-sm text-gray-500">Latency so low it feels like a real conversation. Under 200ms response times.</p>
</div>
</div>

<div className="relative group overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
<div className="p-8 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center mb-auto">
<iconify-icon className="text-gray-700" icon="lucide:library" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Curriculum</h3>
<p className="text-sm text-gray-500">The AI builds a knowledge graph of your vocabulary and grammar gaps.</p>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 text-white">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="lucide:globe" width="20"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-lg font-semibold text-white mb-2">Global Context</h3>
<p className="text-sm text-gray-400 max-w-sm">Learn cultural nuances, idioms, and slang specific to regions, not just textbooks.</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all cursor-pointer">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-gray-50/50 border-t border-gray-200">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-gray-900">Let's Talk GEO</h2>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200 flex flex-col md:flex-row overflow-hidden">

<div className="w-full md:w-[320px] p-8 border-b md:border-b-0 md:border-r border-gray-100 bg-white flex flex-col gap-6">

<div className="flex flex-col gap-4">
<img alt="Shawn" className="w-12 h-12 rounded-full border border-gray-200 shadow-sm" src="https://i.pravatar.cc/150?u=shawn"/>
<div>
<p className="text-xs font-medium text-gray-500 mb-1">Shawn Schneider</p>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug">Quick demo with the Eldil team.</h3>
</div>
<p className="text-sm text-gray-500 leading-relaxed">Demo of our GEO/AEO platform to see how we can help you scale.</p>
</div>

<div className="space-y-3 mt-auto md:mt-0">
<div className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400" icon="lucide:clock" width="16"></iconify-icon>
<span className="font-medium">15m</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon icon="logos:google-meet" width="16"></iconify-icon>
<span className="font-medium">Google Meet</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
<iconify-icon className="text-gray-400" icon="lucide:globe" width="16"></iconify-icon>
<span className="font-medium">America/Los Angeles</span>
<iconify-icon className="text-gray-400 ml-auto" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-100 min-w-[300px]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-gray-900">January 2026</h3>
<div className="flex gap-2">
<button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-7 mb-2">
<div className="text-[11px] font-medium text-gray-400 text-center py-2">SUN</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">MON</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">TUE</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">WED</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">THU</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">FRI</div>
<div className="text-[11px] font-medium text-gray-400 text-center py-2">SAT</div>
</div>
<div className="grid grid-cols-7 gap-1">

<div className="aspect-square"></div>
<div className="aspect-square"></div>
<div className="aspect-square"></div>
<div className="aspect-square"></div>


<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">1</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">2</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">3</button>

<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">4</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">5</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">6</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">7</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">8</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">9</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">10</button>

<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">11</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">12</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">13</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">14</button>

<button className="aspect-square flex items-center justify-center text-sm text-white font-medium bg-[#c084fc] shadow-sm rounded-md transition-colors">15</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">16</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">17</button>

<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">18</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">19</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">20</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">21</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">22</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">23</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">24</button>

<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">25</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">26</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">27</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">28</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">29</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-900 font-medium bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">30</button>
<button className="aspect-square flex items-center justify-center text-sm text-gray-300 font-medium rounded-md cursor-default">31</button>
</div>
</div>

<div className="w-full md:w-[280px] p-6 bg-white overflow-hidden flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-gray-500">Thu 15</span>

<div className="bg-gray-100 p-0.5 rounded-lg flex text-[10px] font-medium text-gray-500">
<button className="px-2 py-1 bg-white shadow-sm rounded-md text-gray-900">12h</button>
<button className="px-2 py-1 hover:text-gray-900">24h</button>
</div>
</div>
<div className="space-y-2.5 overflow-y-auto pr-2 custom-scrollbar max-h-[400px]">
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">9:00am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">9:30am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">10:00am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">10:30am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">11:00am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">11:30am</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">1:00pm</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">1:30pm</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">2:00pm</button>
<button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all">2:30pm</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-gray-100 border-t pt-16 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row gap-12 mb-12 gap-x-12 gap-y-12 items-start justify-between">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-gray-900 rounded-md flex items-center justify-center text-white">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="align-end-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="6" x="4" y="2"></rect><rect height="9" rx="2" width="6" x="14" y="9"></rect><path d="M22 22H2"></path></svg>
</div>
<span className="text-sm font-semibold text-gray-900 tracking-tight">arkhitek</span>
</a>
<p className="text-sm text-gray-500">Building the most advanced conversational AI for language learners.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto">
<div className="">
</div>
<div className="">
<ul className="space-y-3 text-sm text-gray-500">
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<ul className="space-y-3 text-sm text-gray-500">
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
<p className="text-xs text-gray-400">© 2024 Eldil Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon className="" icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
