import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Slider Logic
    const cards = document.querySelectorAll('.slider-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const totalCards = cards.length;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.remove('card-hidden');
                card.classList.add('card-active');
            } else {
                card.classList.remove('card-active');
                card.classList.add('card-hidden');
            }
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }
    function prevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        showCard(currentIndex);
    }

    nextBtn.addEventListener('click', () => { nextCard(); resetInterval(); });
    prevBtn.addEventListener('click', () => { prevCard(); resetInterval(); });

    let autoSlide = setInterval(nextCard, 5000);
    function resetInterval() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextCard, 5000);
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-[500] pt-6 px-6">
<div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-sm">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">SparkAI</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#stats">Results</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-black px-3" href="#">Login</a>
<a className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group shadow-lg shadow-black/10" href="#pricing">
            Start Free
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-50 via-indigo-50/50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 w-fit shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Version 2.0 Now Live</span>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight text-gray-900">
                Generate weeks of content in <br/>
<span className="font-serif italic font-medium text-gray-500">minutes.</span>
</h1>

<p className="animate-enter delay-300 text-lg text-gray-500 leading-relaxed max-w-md">
                Lock in your brand voice and transform product launches into multi-platform campaigns automatically. No more writer's block.
            </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] flex items-center gap-3 shadow-xl shadow-gray-200">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                    Generate Content
                </button>
<div className="flex items-center gap-4 px-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=8"/></div>
</div>
<span className="text-sm font-medium text-gray-500">Trusted by 5,000+ creators</span>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center h-[640px] items-center">

<button className="absolute left-0 md:left-8 z-30 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-105 transition-transform" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="absolute right-0 md:right-8 z-30 w-10 h-10 bg-black text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-105 transition-transform" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>

<div className="relative w-[320px] h-[640px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-50"></div>

<div className="w-full h-full relative bg-gray-50 pt-10" id="sliderContainer">

<div className="slider-card card-active bg-white h-full flex flex-col">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
<span className="text-xs font-bold text-gray-900 uppercase">Twitter Thread</span>
<span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">Draft</span>
</div>
<div className="p-6 flex flex-col gap-4 overflow-hidden">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gray-900 shrink-0"></div>
<div className="flex flex-col gap-2 w-full">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-gray-900">SparkAI</span>
<span className="text-gray-400 text-xs">@sparkai</span>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                                        Marketing isn't about noise, it's about signal. 📡<br/><br/>Here are 5 ways to cut through the algorithm today: 🧵👇
                                    </p>
</div>
</div>

<div className="w-0.5 h-6 bg-gray-200 ml-5"></div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gray-900 shrink-0"></div>
<div className="flex flex-col gap-2 w-full">
<p className="text-sm text-gray-600 leading-relaxed">
                                        1. Authenticity wins.<br/>
                                        Stop trying to be perfect. Start being real. The data shows raw content outperforms studio quality by 34%.
                                    </p>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-black text-white p-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md">
<iconify-icon className="text-yellow-400" icon="solar:stars-minimalistic-bold"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-medium opacity-60">AI Action</span>
<span className="text-sm font-semibold">Generating variation 3...</span>
</div>
</div>
</div>
</div>

<div className="slider-card bg-white h-full flex flex-col">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
<span className="text-xs font-bold text-gray-900 uppercase">Reel Script</span>
<iconify-icon className="text-gray-400" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<div className="p-6 flex flex-col gap-6">
<div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Hook (0-3s)</span>
<p className="text-sm font-medium text-gray-900 mt-1">"Stop scrolling if you want to save 10 hours a week." 🛑</p>
<div className="mt-2 text-xs text-gray-500 flex gap-2">
<span className="bg-white border px-1.5 rounded">Fast paced</span>
<span className="bg-white border px-1.5 rounded">Face to camera</span>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Body (3-15s)</span>
<p className="text-sm font-medium text-gray-900 mt-1">Show screen recording of Batch Generator. Speed up footage 2x. Overlay text: 'One click, 30 days of content.'</p>
</div>
<button className="w-full py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
                                Regenerate Hook
                            </button>
</div>
</div>

<div className="slider-card bg-white h-full flex flex-col">
<div className="h-40 bg-gray-900 w-full relative p-6 flex flex-col justify-end">
<h3 className="text-white font-semibold text-lg">Weekly Growth</h3>
<p className="text-white/60 text-xs">Cross-platform analysis</p>
</div>
<div className="p-6 grid grid-cols-2 gap-4">
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl font-bold text-gray-900">+128%</div>
<div className="text-xs text-gray-500 mt-1">Engagement</div>
</div>
<div className="p-4 rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl font-bold text-gray-900">45k</div>
<div className="text-xs text-gray-500 mt-1">Impressions</div>
</div>
<div className="col-span-2 p-4 rounded-2xl bg-green-50 border border-green-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:graph-up-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-gray-900">ROI Positive</div>
<div className="text-xs text-gray-500">Campaign performing above benchmark</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 lg:mt-32 animate-enter delay-500 border-t border-gray-100 pt-10">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8 text-center">Powering content for</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:notion" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:shopify" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:loom" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:intercom" width="36"></iconify-icon>
</div>
</div>
</main>


<section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10" id="features">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1] mb-4">
                Full-service agency power, <br/>
<span className="font-serif italic font-medium text-gray-500">without</span> the agency.
            </h2>
<p className="text-gray-500 text-lg">Everything you need to scale your content production without scaling your team.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-gray-900 transition-colors shadow-sm" href="#">
            View all capabilities
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Brand Voice Control</h3>
<p className="text-gray-500 leading-relaxed text-sm">Lock in your tone once. AI learns from your best content to ensure every generated post sounds exactly like you.</p>
</div>

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Batch Generation</h3>
<p className="text-gray-500 leading-relaxed text-sm">Create 30 days of content in minutes. Use 10+ creative styles like "Storybook" or "Contrarian" to keep it fresh.</p>
</div>

<div className="group bg-white border border-gray-200 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:repeat-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Repurposing Engine</h3>
<p className="text-gray-500 leading-relaxed text-sm">Turn one blog post into a Twitter thread, a LinkedIn carousel, and an Instagram Reel script instantly.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">

<div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden mb-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="p-10 md:p-16 flex flex-col items-start">
<span className="inline-block bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Efficiency</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1] mb-6">
                    One idea, <br/>
<span className="font-serif italic text-gray-500">infinite</span> formats.
                </h2>
<p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                    Don't let good ideas die after one post. Our Repurposing Engine automatically transforms your core message into platform-native formats optimized for engagement.
                </p>
<ul className="flex flex-col gap-3 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Blog → LinkedIn Carousel
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Video → Twitter Thread
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-gray-700">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> Case Study → Instagram Reel
                    </li>
</ul>
</div>
<div className="h-full min-h-[400px] bg-gray-50 relative p-10 flex items-center justify-center">

<div className="relative w-full max-w-md">

<div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-40 text-center">
<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
<iconify-icon icon="solar:document-text-bold"></iconify-icon>
</div>
<span className="text-xs font-bold text-gray-900">Source Idea</span>
</div>

<div className="absolute top-0 left-0 animate-[float_3s_ease-in-out_infinite] bg-white p-3 rounded-lg shadow-sm border border-gray-100 z-10 flex items-center gap-2">
<iconify-icon icon="logos:twitter" width="16"></iconify-icon>
<span className="text-xs font-medium">Thread</span>
</div>
<div className="absolute bottom-0 right-0 animate-[float_4s_ease-in-out_infinite] bg-white p-3 rounded-lg shadow-sm border border-gray-100 z-10 flex items-center gap-2">
<iconify-icon icon="logos:linkedin-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Post</span>
</div>
<div className="absolute top-10 right-0 animate-[float_5s_ease-in-out_infinite] bg-white p-3 rounded-lg shadow-sm border border-gray-100 z-10 flex items-center gap-2">
<iconify-icon icon="logos:instagram-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Reel</span>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none text-gray-200" style={{zIndex: '1'}}>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="10%" y1="50%" y2="10%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="90%" y1="50%" y2="90%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="90%" y1="50%" y2="20%"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="stats">
<div className="bg-black text-white p-8 rounded-[2rem] flex flex-col justify-between h-64 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 group-hover:opacity-40 transition-opacity"></div>
<iconify-icon className="text-gray-500 text-3xl" icon="solar:clock-circle-bold"></iconify-icon>
<div>
<div className="text-5xl font-semibold tracking-tight mb-2">10h+</div>
<div className="text-sm text-gray-400">Saved per week on <br/>content creation</div>
</div>
</div>
<div className="bg-[#F3F4F6] p-8 rounded-[2rem] flex flex-col justify-between h-64 relative overflow-hidden">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:smile-circle-bold"></iconify-icon>
<div>
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">98%</div>
<div className="text-sm text-gray-500">Customer satisfaction <br/>rating</div>
</div>
</div>
<div className="bg-[#F3F4F6] p-8 rounded-[2rem] flex flex-col justify-between h-64 relative overflow-hidden">
<iconify-icon className="text-gray-400 text-3xl" icon="solar:documents-minimalistic-bold"></iconify-icon>
<div>
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">100k+</div>
<div className="text-sm text-gray-500">Posts generated <br/>by SparkAI</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-200" id="pricing">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Simple, transparent pricing</h2>
<p className="text-gray-500">Start for free, upgrade as you grow. 14-day money-back guarantee on all paid plans.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="font-bold text-gray-900">Basic</h3>
<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Solo</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold tracking-tight">$9</span>
<span className="text-gray-500 text-sm">/mo</span>
<span className="ml-2 text-xs text-red-500 line-through">$20</span>
</div>
<p className="text-sm text-gray-500 mb-8">Perfect for individuals starting their journey.</p>
<button className="w-full py-3 rounded-lg border border-gray-200 font-semibold text-sm hover:bg-gray-50 transition-colors mb-8">Get Started</button>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> 100 AI Posts/mo</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> 5 Social Accounts</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> Brand Voice Setup</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> Basic Templates</li>
</ul>
</div>

<div className="bg-black text-white rounded-2xl p-8 relative shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
<span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
</div>
<div className="flex items-center justify-between mb-4 mt-2">
<h3 className="font-bold">Professional</h3>
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$19</span>
<span className="text-gray-400 text-sm">/mo</span>
<span className="ml-2 text-xs text-gray-500 line-through">$50</span>
</div>
<p className="text-sm text-gray-400 mb-8">For serious creators scaling up.</p>
<button className="w-full py-3 rounded-lg bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors mb-8">Start Free Trial</button>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited AI Posts</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> 15 Social Accounts</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Repurposing Engine</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Advanced Analytics</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Trending Topics</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-4">
<h3 className="font-bold text-gray-900">Premium</h3>
<span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Agency</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold tracking-tight">$49</span>
<span className="text-gray-500 text-sm">/mo</span>
<span className="ml-2 text-xs text-red-500 line-through">$100</span>
</div>
<p className="text-sm text-gray-500 mb-8">For teams and agencies.</p>
<button className="w-full py-3 rounded-lg border border-gray-200 font-semibold text-sm hover:bg-gray-50 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Everything</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> Team Collaboration</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex gap-3"><iconify-icon className="text-gray-900" icon="solar:check-circle-linear"></iconify-icon> White-label Reports</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
<div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-200">
<h2 className="text-2xl font-semibold text-center mb-12">Why creators switch to SparkAI</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-gray-400 font-semibold mb-6 flex items-center gap-2"><iconify-icon icon="solar:close-circle-bold"></iconify-icon> Generic AI Tools</h3>
<ul className="space-y-4">
<li className="text-gray-500 text-sm">Robotic, repetitive tone</li>
<li className="text-gray-500 text-sm">One format fits all (badly)</li>
<li className="text-gray-500 text-sm">Requires heavy editing</li>
<li className="text-gray-500 text-sm">No knowledge of your products</li>
</ul>
</div>
<div>
<h3 className="text-gray-900 font-bold mb-6 flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon> SparkAI</h3>
<ul className="space-y-4">
<li className="text-gray-900 font-medium text-sm">Trained on your specific brand voice</li>
<li className="text-gray-900 font-medium text-sm">Platform-optimized (Threads, Reels, etc)</li>
<li className="text-gray-900 font-medium text-sm">Ready to publish in one click</li>
<li className="text-gray-900 font-medium text-sm">Analyzes performance to improve</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 border-t border-gray-100 mt-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">SparkAI</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 leading-[1] mb-6 max-w-sm">
                Ready to stop <span className="font-serif italic text-gray-400">writing</span> and start growing?
            </h2>
<div className="flex gap-4">
<button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">Start 14-Day Free Trial</button>
<button className="px-6 py-3 rounded-full text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors">View Demo</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
<div className="flex flex-col gap-4">
<span className="font-bold text-gray-900">Product</span>
<a className="text-gray-500 hover:text-black" href="#">Features</a>
<a className="text-gray-500 hover:text-black" href="#">Pricing</a>
<a className="text-gray-500 hover:text-black" href="#">Showcase</a>
<a className="text-gray-500 hover:text-black" href="#">API</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-gray-900">Resources</span>
<a className="text-gray-500 hover:text-black" href="#">Blog</a>
<a className="text-gray-500 hover:text-black" href="#">Community</a>
<a className="text-gray-500 hover:text-black" href="#">Help Center</a>
<a className="text-gray-500 hover:text-black" href="#">Prompt Library</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-gray-900">Company</span>
<a className="text-gray-500 hover:text-black" href="#">About</a>
<a className="text-gray-500 hover:text-black" href="#">Careers</a>
<a className="text-gray-500 hover:text-black" href="#">Legal</a>
<a className="text-gray-500 hover:text-black" href="#">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-8">
<span>© 2025 SparkAI Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-black" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="hover:text-black" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
<a className="hover:text-black" href="#"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
