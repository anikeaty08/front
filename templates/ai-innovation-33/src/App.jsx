import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
            
            // Re-render lucide icons
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":900,"w":1434,"h":65,"abs_x":480,"abs_y":943}' className="fixed top-0 w-full z-50 glass border-b border-gray-100">
<div bis_size='{"x":77,"y":900,"w":1280,"h":64,"abs_x":557,"abs_y":943}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":109,"y":900,"w":1216,"h":64,"abs_x":589,"abs_y":943}' className="flex justify-between items-center h-16">
<div bis_size='{"x":109,"y":918,"w":398,"h":28,"abs_x":589,"abs_y":961}' className="flex items-center gap-8">

<a bis_size='{"x":109,"y":918,"w":98,"h":28,"abs_x":589,"abs_y":961}' className="text-lg font-semibold tracking-tighter text-gray-900 uppercase" href="#">
                        Entrapeer
                    </a>

<div bis_size='{"x":239,"y":922,"w":268,"h":20,"abs_x":719,"abs_y":965}' className="hidden md:flex space-x-6">
<a bis_size='{"x":239,"y":922,"w":56,"h":20,"abs_x":719,"abs_y":965}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Platform</a>
<a bis_size='{"x":319,"y":922,"w":62,"h":20,"abs_x":799,"abs_y":965}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Solutions</a>
<a bis_size='{"x":405,"y":922,"w":30,"h":20,"abs_x":885,"abs_y":965}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Data</a>
<a bis_size='{"x":460,"y":922,"w":46,"h":20,"abs_x":940,"abs_y":965}' className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
</div>
<div bis_size='{"x":1138,"y":914,"w":186,"h":36,"abs_x":1618,"abs_y":957}' className="flex items-center gap-4">
<a bis_size='{"x":1138,"y":922,"w":40,"h":20,"abs_x":1618,"abs_y":965}' className="text-sm font-medium text-gray-900 hidden sm:block" href="#">Log in</a>
<a bis_size='{"x":1194,"y":914,"w":130,"h":36,"abs_x":1674,"abs_y":957}' className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-full transition-all shadow-sm hover:shadow-md" href="#">
                        Start Free Trial
                    </a>
</div>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":1434,"h":1169,"abs_x":480,"abs_y":43}' className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">

<div bis_size='{"x":0,"y":0,"w":1434,"h":1169,"abs_x":480,"abs_y":43}' className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div bis_size='{"x":358,"y":80,"w":384,"h":384,"abs_x":838,"abs_y":123}' className="absolute top-20 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
<div bis_size='{"x":691,"y":80,"w":384,"h":384,"abs_x":1171,"abs_y":123}' className="absolute top-20 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
</div>
<div bis_size='{"x":77,"y":160,"w":1280,"h":897,"abs_x":557,"abs_y":203}' className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll is-visible">

<div bis_size='{"x":597,"y":161,"w":239,"h":26,"abs_x":1077,"abs_y":204}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 hover:border-gray-300 transition-colors cursor-pointer">
<span bis_size='{"x":610,"y":170,"w":8,"h":8,"abs_x":1090,"abs_y":213}' className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                Introducing AI Market Scouting
                <iconify-icon bis_size='{"x":811,"y":168,"w":12,"h":12,"abs_x":1291,"abs_y":211}' className="text-gray-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<h1 bis_size='{"x":269,"y":219,"w":896,"h":144,"abs_x":749,"abs_y":262}' className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto">
                The operating system for <br bis_size='{"x":1132,"y":211,"w":0,"h":87,"abs_x":1612,"abs_y":254}' className="hidden sm:block"/>
<span bis_size='{"x":373,"y":283,"w":687,"h":87,"abs_x":853,"abs_y":326}' className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">corporate innovation</span>
</h1>

<p bis_size='{"x":381,"y":387,"w":672,"h":58,"abs_x":861,"abs_y":430}' className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Discover, validate, and pilot with the world's best startups using our AI-driven market intelligence platform. Accelerate your R&amp;D workflow today.
            </p>

<div bis_size='{"x":109,"y":485,"w":1216,"h":48,"abs_x":589,"abs_y":528}' className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
<button bis_size='{"x":513,"y":485,"w":201,"h":48,"abs_x":993,"abs_y":528}' className="w-full sm:w-auto bg-gray-900 text-white h-12 px-8 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                    Request Demo
                    <iconify-icon bis_size='{"x":665,"y":500,"w":18,"h":18,"abs_x":1145,"abs_y":543}' icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button bis_size='{"x":731,"y":485,"w":189,"h":48,"abs_x":1211,"abs_y":528}' className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 h-12 px-8 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm">
<iconify-icon bis_size='{"x":764,"y":500,"w":18,"h":18,"abs_x":1244,"abs_y":543}' icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Video
                </button>
</div>

<div bis_size='{"x":205,"y":597,"w":1024,"h":460,"abs_x":685,"abs_y":640}' className="relative max-w-5xl mx-auto">
<div bis_size='{"x":205,"y":597,"w":1024,"h":460,"abs_x":685,"abs_y":640}' className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-2xl overflow-hidden p-2">
<div bis_size='{"x":214,"y":606,"w":1006,"h":442,"abs_x":694,"abs_y":649}' className="bg-white rounded-lg border border-gray-100 overflow-hidden">
<div bis_size='{"x":215,"y":607,"w":1004,"h":40,"abs_x":695,"abs_y":650}' className="h-10 border-b border-gray-100 flex items-center px-4 gap-2">
<div bis_size='{"x":231,"y":622,"w":42,"h":10,"abs_x":711,"abs_y":665}' className="flex gap-1.5">
<div bis_size='{"x":231,"y":622,"w":10,"h":10,"abs_x":711,"abs_y":665}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div bis_size='{"x":247,"y":622,"w":10,"h":10,"abs_x":727,"abs_y":665}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div bis_size='{"x":263,"y":622,"w":10,"h":10,"abs_x":743,"abs_y":665}' className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
<div bis_size='{"x":297,"y":617,"w":256,"h":20,"abs_x":777,"abs_y":660}' className="ml-4 w-64 h-5 bg-gray-50 rounded text-[10px] text-gray-400 flex items-center px-2 font-mono">entrapeer.com/dashboard/scout</div>
</div>
<div bis_size='{"x":215,"y":647,"w":1004,"h":400,"abs_x":695,"abs_y":690}' className="grid grid-cols-12 h-[400px]">

<div bis_size='{"x":215,"y":647,"w":167,"h":400,"abs_x":695,"abs_y":690}' className="col-span-2 border-r border-gray-100 p-4 hidden md:block bg-gray-50/30">
<div bis_size='{"x":231,"y":663,"w":134,"h":24,"abs_x":711,"abs_y":706}' className="h-6 w-full bg-gray-200 rounded mb-4"></div>
<div bis_size='{"x":231,"y":703,"w":134,"h":64,"abs_x":711,"abs_y":746}' className="space-y-2">
<div bis_size='{"x":231,"y":703,"w":100,"h":16,"abs_x":711,"abs_y":746}' className="h-4 w-3/4 bg-gray-100 rounded"></div>
<div bis_size='{"x":231,"y":727,"w":134,"h":16,"abs_x":711,"abs_y":770}' className="h-4 w-full bg-blue-50 rounded"></div>
<div bis_size='{"x":231,"y":751,"w":89,"h":16,"abs_x":711,"abs_y":794}' className="h-4 w-2/3 bg-gray-100 rounded"></div>
</div>
</div>

<div bis_size='{"x":382,"y":647,"w":836,"h":400,"abs_x":862,"abs_y":690}' className="col-span-12 md:col-span-10 bg-white p-6 relative">
<div bis_size='{"x":406,"y":671,"w":788,"h":32,"abs_x":886,"abs_y":714}' className="flex justify-between items-end mb-6">
<div bis_size='{"x":406,"y":679,"w":192,"h":24,"abs_x":886,"abs_y":722}' className="h-6 w-48 bg-gray-100 rounded"></div>
<div bis_size='{"x":994,"y":671,"w":200,"h":32,"abs_x":1474,"abs_y":714}' className="flex gap-2">
<div bis_size='{"x":994,"y":671,"w":96,"h":32,"abs_x":1474,"abs_y":714}' className="h-8 w-24 bg-gray-100 rounded"></div>
<div bis_size='{"x":1098,"y":671,"w":96,"h":32,"abs_x":1578,"abs_y":714}' className="h-8 w-24 bg-gray-900 rounded"></div>
</div>
</div>
<div bis_size='{"x":406,"y":727,"w":788,"h":352,"abs_x":886,"abs_y":770}' className="grid grid-cols-3 gap-4 mb-6 h-full">
<div bis_size='{"x":406,"y":727,"w":520,"h":352,"abs_x":886,"abs_y":770}' className="col-span-2 bg-gray-50 border border-gray-100 rounded-lg"></div>
<div bis_size='{"x":942,"y":727,"w":252,"h":352,"abs_x":1422,"abs_y":770}' className="col-span-1 bg-gray-50 border border-gray-100 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-white pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grid-grad-light" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#000" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#000" stop-opacity="0"></stop>
</lineargradient>
</defs>
<pattern height="40" id="small-grid-light" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"></path>
</pattern>
<rect fill="url(#small-grid-light)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">

<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                    Build strategy that compounds.
                </h2>
<p className="text-lg text-gray-500 font-light">
                    Entrapeer captures the logic, evidence, and plans in one system.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-gray-200 bg-white p-8 group hover:border-gray-300 hover:shadow-xl transition-all duration-500 reveal-on-scroll delay-100 flex flex-col">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-sm">
<iconify-icon icon="solar:bolt-circle-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Decision Memory</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                        Reusable strategy logic captured once, reused every cycle. Stop starting from zero.
                    </p>

<div className="relative mt-auto w-full aspect-[4/3] bg-gray-50 rounded-lg border border-gray-100 overflow-hidden flex items-center justify-center p-4 group-hover:border-indigo-200 transition-colors">
<div className="w-full max-w-[200px] bg-white rounded-lg border border-gray-200 p-4 shadow-lg relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white border border-gray-200 text-[10px] text-gray-500 rounded uppercase tracking-wider shadow-sm">Blueprint</div>
<div className="text-xs font-medium text-indigo-600 mb-3 border-b border-gray-100 pb-2">Market Entry Framework</div>
<ul className="space-y-2">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<div className="h-1.5 w-2/3 bg-gray-200 rounded-full"></div>
</li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<div className="h-1.5 w-1/2 bg-gray-200 rounded-full"></div>
</li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="h-1.5 w-3/4 bg-gray-200 rounded-full"></div>
</li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
<div className="h-1.5 w-1/3 bg-gray-200 rounded-full"></div>
</li>
</ul>

<div className="absolute bottom-2 right-2 w-8 h-1 bg-indigo-500 rounded-full blur-[2px] opacity-40"></div>
</div>
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-8 group hover:border-gray-300 hover:shadow-xl transition-all duration-500 reveal-on-scroll delay-200 flex flex-col">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
<iconify-icon icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Evidence-linked Decisions</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                        Every output tied to auditable sources. No hallucinations, just verified intelligence.
                    </p>

<div className="relative mt-auto w-full aspect-[4/3] bg-gray-50 rounded-lg border border-gray-100 overflow-hidden flex items-center justify-center p-6 group-hover:border-blue-200 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50"></div>
<div className="relative w-full bg-white border border-green-200/60 rounded-lg p-4 shadow-md">
<div className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wide">Validated Evidence</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 border border-green-100">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-gray-600 leading-snug">
<span className="text-gray-400">Source:</span> Global Climate Data Initiative, 2023 Report.
                                    </div>
<div className="mt-1 h-1 w-full bg-gradient-to-r from-green-500/30 to-transparent rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-8 group hover:border-gray-300 hover:shadow-xl transition-all duration-500 reveal-on-scroll delay-300 flex flex-col">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 shadow-sm">
<iconify-icon icon="solar:graph-new-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Execution Roadmaps</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                        Plans teams can actually run. From high-level strategy to Monday morning tasks.
                    </p>

<div className="relative mt-auto w-full aspect-[4/3] bg-gray-50 rounded-lg border border-gray-100 overflow-hidden flex items-center justify-center p-4 group-hover:border-purple-200 transition-colors">
<div className="w-full bg-white rounded border border-gray-200 p-3 overflow-hidden shadow-sm">
<div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
<div className="text-[10px] text-gray-400 font-medium">EXECUTION PLAN</div>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
</div>
</div>

<div className="space-y-2 relative">

<div className="absolute inset-0 flex justify-between pointer-events-none opacity-50">
<div className="w-px h-full bg-gray-100"></div>
<div className="w-px h-full bg-gray-100"></div>
<div className="w-px h-full bg-gray-100"></div>
<div className="w-px h-full bg-gray-100"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-12 h-1 bg-gray-200 rounded-full"></div>
<div className="w-16 h-2 bg-purple-100 rounded border border-purple-200 ml-2"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-12 h-1 bg-gray-200 rounded-full"></div>
<div className="w-20 h-2 bg-blue-100 rounded border border-blue-200 ml-8"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-12 h-1 bg-gray-200 rounded-full"></div>
<div className="w-10 h-2 bg-indigo-100 rounded border border-indigo-200 ml-16"></div>
</div>
<div className="flex items-center gap-2 mt-4 pt-2 border-t border-gray-100">
<div className="flex items-center gap-1 text-[8px] text-purple-600"><div className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></div>Planning</div>
<div className="flex items-center gap-1 text-[8px] text-blue-600 ml-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>Execution</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/3 left-0 w-full h-64 pointer-events-none z-0 hidden md:block opacity-40">
<svg fill="none" height="100%" preserveaspectratio="none" viewbox="0 0 1200 200" width="100%">

<path d="M0,100 C300,100 300,50 600,50 C900,50 900,150 1200,150" fill="none" stroke="#e5e7eb" strokeWidth="1" vector-effect="non-scaling-stroke"></path>

<path className="beam-line" d="M0,100 C300,100 300,50 600,50 C900,50 900,150 1200,150" fill="none" stroke="url(#beam-gradient-light)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="beam-gradient-light" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</section>

<section bis_size='{"x":0,"y":2099,"w":1434,"h":177,"abs_x":480,"abs_y":2142}' className="py-12 border-b border-gray-100 bg-gray-50/50">
<div bis_size='{"x":77,"y":2147,"w":1280,"h":80,"abs_x":557,"abs_y":2190}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p bis_size='{"x":109,"y":2147,"w":1216,"h":20,"abs_x":589,"abs_y":2190}' className="text-sm font-medium text-gray-500 mb-8">Trusted by innovation teams at forward-thinking enterprises</p>
<div bis_size='{"x":109,"y":2199,"w":1216,"h":28,"abs_x":589,"abs_y":2242}' className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
<div bis_size='{"x":401,"y":2199,"w":132,"h":28,"abs_x":881,"abs_y":2242}' className="flex items-center gap-2 font-bold text-lg text-gray-800"><span bis_size='{"x":401,"y":2201,"w":24,"h":24,"abs_x":881,"abs_y":2244}' className="w-6 h-6 bg-gray-800 rounded-sm"></span> ACME Corp</div>
<div bis_size='{"x":597,"y":2199,"w":92,"h":28,"abs_x":1077,"abs_y":2242}' className="flex items-center gap-2 font-bold text-lg text-gray-800"><span bis_size='{"x":597,"y":2201,"w":24,"h":24,"abs_x":1077,"abs_y":2244}' className="w-6 h-6 border-2 border-gray-800 rounded-full"></span> Globex</div>
<div bis_size='{"x":754,"y":2199,"w":109,"h":28,"abs_x":1234,"abs_y":2242}' className="flex items-center gap-2 font-bold text-lg text-gray-800"><span bis_size='{"x":749,"y":2196,"w":33,"h":33,"abs_x":1229,"abs_y":2239}' className="w-6 h-6 rotate-45 bg-gray-800"></span> Umbrella</div>
<div bis_size='{"x":928,"y":2199,"w":104,"h":28,"abs_x":1408,"abs_y":2242}' className="flex items-center gap-2 font-bold text-lg text-gray-800"><span bis_size='{"x":928,"y":2201,"w":24,"h":24,"abs_x":1408,"abs_y":2244}' className="w-6 h-6 rounded-tr-xl bg-gray-800"></span> Massive</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2276,"w":1434,"h":1161,"abs_x":480,"abs_y":2319}' className="py-24 bg-gray-50">
<div bis_size='{"x":77,"y":2372,"w":1280,"h":969,"abs_x":557,"abs_y":2415}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

<div bis_size='{"x":109,"y":2372,"w":1216,"h":436,"abs_x":589,"abs_y":2415}' className="flex flex-col lg:flex-row items-center gap-16 reveal-on-scroll">
<div bis_size='{"x":109,"y":2372,"w":576,"h":436,"abs_x":589,"abs_y":2415}' className="lg:w-1/2">
<div bis_size='{"x":109,"y":2372,"w":576,"h":436,"abs_x":589,"abs_y":2415}' className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white p-2">
<div bis_size='{"x":556,"y":2373,"w":128,"h":128,"abs_x":1036,"abs_y":2416}' className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-bl-full z-0"></div>
<div bis_size='{"x":118,"y":2381,"w":558,"h":418,"abs_x":598,"abs_y":2424}' className="relative z-10 bg-gray-50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
<div bis_size='{"x":187,"y":2507,"w":418,"h":166,"abs_x":667,"abs_y":2550}' className="w-3/4 space-y-4">
<div bis_size='{"x":187,"y":2507,"w":418,"h":76,"abs_x":667,"abs_y":2550}' className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
<div bis_size='{"x":204,"y":2524,"w":40,"h":40,"abs_x":684,"abs_y":2567}' className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0"></div>
<div bis_size='{"x":260,"y":2524,"w":328,"h":42,"abs_x":740,"abs_y":2567}' className="space-y-2 w-full">
<div bis_size='{"x":260,"y":2524,"w":109,"h":10,"abs_x":740,"abs_y":2567}' className="h-2.5 bg-gray-800 rounded w-1/3"></div>
<div bis_size='{"x":260,"y":2542,"w":246,"h":8,"abs_x":740,"abs_y":2585}' className="h-2 bg-gray-200 rounded w-3/4"></div>
<div bis_size='{"x":260,"y":2558,"w":164,"h":8,"abs_x":740,"abs_y":2601}' className="h-2 bg-gray-200 rounded w-1/2"></div>
</div>
</div>
<div bis_size='{"x":198,"y":2599,"w":397,"h":70,"abs_x":678,"abs_y":2642}' className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4 opacity-60 scale-95 origin-top">
<div bis_size='{"x":214,"y":2615,"w":38,"h":38,"abs_x":694,"abs_y":2658}' className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0"></div>
<div bis_size='{"x":267,"y":2615,"w":312,"h":24,"abs_x":747,"abs_y":2658}' className="space-y-2 w-full">
<div bis_size='{"x":267,"y":2615,"w":104,"h":9,"abs_x":747,"abs_y":2658}' className="h-2.5 bg-gray-800 rounded w-1/3"></div>
<div bis_size='{"x":267,"y":2632,"w":234,"h":7,"abs_x":747,"abs_y":2675}' className="h-2 bg-gray-200 rounded w-3/4"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":749,"y":2449,"w":576,"h":281,"abs_x":1229,"abs_y":2492}' className="lg:w-1/2 space-y-6">
<div bis_size='{"x":749,"y":2449,"w":122,"h":26,"abs_x":1229,"abs_y":2492}' className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":758,"y":2456,"w":12,"h":12,"abs_x":1238,"abs_y":2499}' icon="solar:filters-linear"></iconify-icon>
                        Smart Filtering
                    </div>
<h2 bis_size='{"x":749,"y":2499,"w":576,"h":36,"abs_x":1229,"abs_y":2542}' className="text-3xl font-semibold text-gray-900 tracking-tight">Precision scouting at scale</h2>
<p bis_size='{"x":749,"y":2559,"w":576,"h":87,"abs_x":1229,"abs_y":2602}' className="text-gray-500 text-lg leading-relaxed">
                        Don't just search. Filter by TRL level, business model, funding stage, and geography. Our data is refreshed daily to ensure you never miss a rising star.
                    </p>
<ul bis_size='{"x":749,"y":2671,"w":576,"h":60,"abs_x":1229,"abs_y":2714}' className="space-y-3 pt-2">
<li bis_size='{"x":749,"y":2679,"w":576,"h":20,"abs_x":1229,"abs_y":2722}' className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon bis_size='{"x":749,"y":2680,"w":18,"h":18,"abs_x":1229,"abs_y":2723}' className="text-green-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Automated due diligence checks
                        </li>
<li bis_size='{"x":749,"y":2711,"w":576,"h":20,"abs_x":1229,"abs_y":2754}' className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon bis_size='{"x":749,"y":2712,"w":18,"h":18,"abs_x":1229,"abs_y":2755}' className="text-green-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Technology readiness assessment
                        </li>
</ul>
</div>
</div>

<div bis_size='{"x":109,"y":2904,"w":1216,"h":436,"abs_x":589,"abs_y":2947}' className="flex flex-col lg:flex-row-reverse items-center gap-16 reveal-on-scroll">
<div bis_size='{"x":749,"y":2904,"w":576,"h":436,"abs_x":1229,"abs_y":2947}' className="lg:w-1/2">
<div bis_size='{"x":749,"y":2904,"w":576,"h":436,"abs_x":1229,"abs_y":2947}' className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white p-2">
<div bis_size='{"x":758,"y":2913,"w":558,"h":418,"abs_x":1238,"abs_y":2956}' className="relative z-10 bg-gray-900 rounded-xl overflow-hidden aspect-[4/3] p-8 flex flex-col justify-between">
<div bis_size='{"x":790,"y":2945,"w":494,"h":56,"abs_x":1270,"abs_y":2988}' className="flex justify-between items-start text-white/90">
<div bis_size='{"x":790,"y":2945,"w":101,"h":56,"abs_x":1270,"abs_y":2988}'>
<div bis_size='{"x":790,"y":2945,"w":101,"h":16,"abs_x":1270,"abs_y":2988}' className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total Impact</div>
<div bis_size='{"x":790,"y":2965,"w":101,"h":36,"abs_x":1270,"abs_y":3008}' className="text-3xl font-medium">$4.2M</div>
</div>
<div bis_size='{"x":1252,"y":2945,"w":32,"h":40,"abs_x":1732,"abs_y":2988}' className="bg-gray-800 p-2 rounded-lg">
<iconify-icon bis_size='{"x":1260,"y":2955,"w":16,"h":16,"abs_x":1740,"abs_y":2998}' className="text-green-400" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
</div>

<div bis_size='{"x":790,"y":3172,"w":494,"h":128,"abs_x":1270,"abs_y":3215}' className="w-full h-32 flex items-end gap-1">
<div bis_size='{"x":790,"y":3274,"w":79,"h":25,"abs_x":1270,"abs_y":3317}' className="w-1/6 bg-gray-700 rounded-t h-[20%]"></div>
<div bis_size='{"x":873,"y":3255,"w":79,"h":44,"abs_x":1353,"abs_y":3298}' className="w-1/6 bg-gray-700 rounded-t h-[35%]"></div>
<div bis_size='{"x":956,"y":3242,"w":79,"h":57,"abs_x":1436,"abs_y":3285}' className="w-1/6 bg-gray-700 rounded-t h-[45%]"></div>
<div bis_size='{"x":1039,"y":3261,"w":79,"h":38,"abs_x":1519,"abs_y":3304}' className="w-1/6 bg-gray-700 rounded-t h-[30%]"></div>
<div bis_size='{"x":1122,"y":3223,"w":79,"h":76,"abs_x":1602,"abs_y":3266}' className="w-1/6 bg-gray-700 rounded-t h-[60%]"></div>
<div bis_size='{"x":1205,"y":3197,"w":79,"h":102,"abs_x":1685,"abs_y":3240}' className="w-1/6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-[80%]"></div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":109,"y":2992,"w":576,"h":260,"abs_x":589,"abs_y":3035}' className="lg:w-1/2 space-y-6">
<div bis_size='{"x":109,"y":2992,"w":111,"h":26,"abs_x":589,"abs_y":3035}' className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":118,"y":2999,"w":12,"h":12,"abs_x":598,"abs_y":3042}' icon="solar:presentation-graph-linear"></iconify-icon>
                        ROI Tracking
                    </div>
<h2 bis_size='{"x":109,"y":3042,"w":576,"h":36,"abs_x":589,"abs_y":3085}' className="text-3xl font-semibold text-gray-900 tracking-tight">Prove the value of innovation</h2>
<p bis_size='{"x":109,"y":3102,"w":576,"h":87,"abs_x":589,"abs_y":3145}' className="text-gray-500 text-lg leading-relaxed">
                        Track the performance of your pilots and partnerships. Generate executive-ready reports that demonstrate tangible business impact and ROI.
                    </p>
<div bis_size='{"x":109,"y":3214,"w":576,"h":39,"abs_x":589,"abs_y":3257}' className="flex gap-4 pt-4">
<a bis_size='{"x":109,"y":3230,"w":163,"h":23,"abs_x":589,"abs_y":3273}' className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">
                            View Reporting Features
                        </a>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3437,"w":1434,"h":588,"abs_x":480,"abs_y":3480}' className="py-24 bg-white">
<div bis_size='{"x":77,"y":3533,"w":1280,"h":396,"abs_x":557,"abs_y":3576}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
<h2 bis_size='{"x":109,"y":3533,"w":1216,"h":36,"abs_x":589,"abs_y":3576}' className="text-3xl font-semibold tracking-tight text-gray-900 mb-16">Seamlessly integrated</h2>
<div bis_size='{"x":333,"y":3633,"w":768,"h":296,"abs_x":813,"abs_y":3676}' className="relative max-w-3xl mx-auto">

<div bis_size='{"x":669,"y":3733,"w":96,"h":96,"abs_x":1149,"abs_y":3776}' className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border border-gray-200 rounded-full shadow-lg z-20 flex items-center justify-center">
<span bis_size='{"x":702,"y":3769,"w":30,"h":24,"abs_x":1182,"abs_y":3812}' className="font-bold text-gray-900 tracking-tighter">ENT</span>
</div>

<div bis_size='{"x":333,"y":3633,"w":768,"h":296,"abs_x":813,"abs_y":3676}' className="grid grid-cols-3 gap-12 sm:gap-24 opacity-80">
<div bis_size='{"x":333,"y":3633,"w":192,"h":84,"abs_x":813,"abs_y":3676}' className="flex flex-col items-center gap-3">
<div bis_size='{"x":401,"y":3633,"w":56,"h":56,"abs_x":881,"abs_y":3676}' className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":429,"y":3661,"w":0,"h":0,"abs_x":909,"abs_y":3704}' icon="solar:slack-linear" width="24"></iconify-icon>
</div>
<span bis_size='{"x":413,"y":3701,"w":31,"h":16,"abs_x":893,"abs_y":3744}' className="text-xs font-medium text-gray-400">Slack</span>
</div>
<div bis_size='{"x":621,"y":3601,"w":192,"h":116,"abs_x":1101,"abs_y":3644}' className="flex flex-col items-center gap-3 -mt-8">
<div bis_size='{"x":689,"y":3601,"w":56,"h":56,"abs_x":1169,"abs_y":3644}' className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":705,"y":3617,"w":24,"h":24,"abs_x":1185,"abs_y":3660}' icon="solar:figma-linear" width="24"></iconify-icon>
</div>
<span bis_size='{"x":699,"y":3669,"w":35,"h":16,"abs_x":1179,"abs_y":3712}' className="text-xs font-medium text-gray-400">Figma</span>
</div>
<div bis_size='{"x":909,"y":3633,"w":192,"h":84,"abs_x":1389,"abs_y":3676}' className="flex flex-col items-center gap-3">
<div bis_size='{"x":977,"y":3633,"w":56,"h":56,"abs_x":1457,"abs_y":3676}' className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":1005,"y":3661,"w":0,"h":0,"abs_x":1485,"abs_y":3704}' icon="solar:trello-linear" width="24"></iconify-icon>
</div>
<span bis_size='{"x":994,"y":3701,"w":21,"h":16,"abs_x":1474,"abs_y":3744}' className="text-xs font-medium text-gray-400">Jira</span>
</div>
<div bis_size='{"x":333,"y":3845,"w":192,"h":84,"abs_x":813,"abs_y":3888}' className="flex flex-col items-center gap-3 mt-8">
<div bis_size='{"x":401,"y":3845,"w":56,"h":56,"abs_x":881,"abs_y":3888}' className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":417,"y":3861,"w":24,"h":24,"abs_x":897,"abs_y":3904}' icon="solar:mailbox-linear" width="24"></iconify-icon>
</div>
<span bis_size='{"x":412,"y":3913,"w":32,"h":16,"abs_x":892,"abs_y":3956}' className="text-xs font-medium text-gray-400">Gmail</span>
</div>
<div bis_size='{"x":621,"y":3813,"w":192,"h":116,"abs_x":1101,"abs_y":3856}' className="flex flex-col items-center gap-3"></div>
<div bis_size='{"x":909,"y":3845,"w":192,"h":84,"abs_x":1389,"abs_y":3888}' className="flex flex-col items-center gap-3 mt-8">
<div bis_size='{"x":977,"y":3845,"w":56,"h":56,"abs_x":1457,"abs_y":3888}' className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm">
<iconify-icon bis_size='{"x":993,"y":3861,"w":24,"h":24,"abs_x":1473,"abs_y":3904}' icon="solar:cloud-linear" width="24"></iconify-icon>
</div>
<span bis_size='{"x":974,"y":3913,"w":60,"h":16,"abs_x":1454,"abs_y":3956}' className="text-xs font-medium text-gray-400">Salesforce</span>
</div>
</div>

<svg bis_size='{"x":333,"y":3633,"w":768,"h":296,"abs_x":813,"abs_y":3676}' className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" style={{opacity: '0.1'}}>
<line bis_size='{"x":448,"y":3692,"w":268,"h":88,"abs_x":928,"abs_y":3735}' stroke="currentColor" strokeWidth="1" x1="15%" x2="50%" y1="20%" y2="50%"></line>
<line bis_size='{"x":717,"y":3662,"w":0,"h":118,"abs_x":1197,"abs_y":3705}' stroke="currentColor" strokeWidth="1" x1="50%" x2="50%" y1="10%" y2="50%"></line>
<line bis_size='{"x":717,"y":3692,"w":268,"h":88,"abs_x":1197,"abs_y":3735}' stroke="currentColor" strokeWidth="1" x1="85%" x2="50%" y1="20%" y2="50%"></line>
<line bis_size='{"x":448,"y":3781,"w":268,"h":88,"abs_x":928,"abs_y":3824}' stroke="currentColor" strokeWidth="1" x1="15%" x2="50%" y1="80%" y2="50%"></line>
<line bis_size='{"x":717,"y":3781,"w":268,"h":88,"abs_x":1197,"abs_y":3824}' stroke="currentColor" strokeWidth="1" x1="85%" x2="50%" y1="80%" y2="50%"></line>
</svg>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4025,"w":1434,"h":428,"abs_x":480,"abs_y":4068}' className="py-24 bg-gray-900 text-white relative overflow-hidden reveal-on-scroll">
<div bis_size='{"x":0,"y":4025,"w":1434,"h":428,"abs_x":480,"abs_y":4068}' className="absolute inset-0 z-0 opacity-20">
<div bis_size='{"x":0,"y":4025,"w":1434,"h":428,"abs_x":480,"abs_y":4068}' className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
<div bis_size='{"x":269,"y":4121,"w":896,"h":236,"abs_x":749,"abs_y":4164}' className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 bis_size='{"x":301,"y":4121,"w":832,"h":48,"abs_x":781,"abs_y":4164}' className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Ready to accelerate your innovation?</h2>
<p bis_size='{"x":381,"y":4193,"w":672,"h":28,"abs_x":861,"abs_y":4236}' className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Join 500+ enterprise teams using Entrapeer to find their next strategic partner.
            </p>
<div bis_size='{"x":301,"y":4261,"w":832,"h":48,"abs_x":781,"abs_y":4304}' className="flex flex-col sm:flex-row justify-center gap-4">
<button bis_size='{"x":534,"y":4261,"w":176,"h":48,"abs_x":1014,"abs_y":4304}' className="bg-white text-gray-900 h-12 px-8 rounded-full font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    Start Free Trial
                </button>
<button bis_size='{"x":727,"y":4261,"w":172,"h":48,"abs_x":1207,"abs_y":4304}' className="bg-transparent border border-gray-700 text-white h-12 px-8 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                    Contact Sales
                </button>
</div>
<p bis_size='{"x":301,"y":4341,"w":832,"h":16,"abs_x":781,"abs_y":4384}' className="mt-8 text-xs text-gray-500">
                No credit card required for trial • SOC2 Type II Certified
            </p>
</div>
</section>

<footer bis_size='{"x":0,"y":4453,"w":1434,"h":348,"abs_x":480,"abs_y":4496}' className="bg-white pt-16 pb-8 border-t border-gray-100">
<div bis_size='{"x":77,"y":4518,"w":1280,"h":251,"abs_x":557,"abs_y":4561}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":109,"y":4518,"w":1216,"h":154,"abs_x":589,"abs_y":4561}' className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div bis_size='{"x":109,"y":4518,"w":467,"h":154,"abs_x":589,"abs_y":4561}' className="col-span-2 lg:col-span-2">
<a bis_size='{"x":109,"y":4518,"w":467,"h":28,"abs_x":589,"abs_y":4561}' className="text-lg font-semibold tracking-tighter text-gray-900 uppercase mb-4 block" href="#">
                        Entrapeer
                    </a>
<p bis_size='{"x":109,"y":4562,"w":320,"h":60,"abs_x":589,"abs_y":4605}' className="text-sm text-gray-500 max-w-xs mb-6">
                        The operating system for corporate innovation. Discover, validate, and pilot with the world's best startups.
                    </p>
<div bis_size='{"x":109,"y":4646,"w":467,"h":26,"abs_x":589,"abs_y":4689}' className="flex gap-4">
<a bis_size='{"x":109,"y":4646,"w":20,"h":26,"abs_x":589,"abs_y":4689}' className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon bis_size='{"x":109,"y":4646,"w":20,"h":20,"abs_x":589,"abs_y":4689}' icon="solar:letter-linear" width="20"></iconify-icon></a>
<a bis_size='{"x":145,"y":4646,"w":20,"h":26,"abs_x":625,"abs_y":4689}' className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon bis_size='{"x":145,"y":4647,"w":20,"h":16,"abs_x":625,"abs_y":4690}' icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a bis_size='{"x":181,"y":4646,"w":20,"h":26,"abs_x":661,"abs_y":4689}' className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon bis_size='{"x":181,"y":4646,"w":20,"h":19,"abs_x":661,"abs_y":4689}' icon="brandico:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div bis_size='{"x":608,"y":4518,"w":217,"h":154,"abs_x":1088,"abs_y":4561}'>
<h4 bis_size='{"x":608,"y":4518,"w":217,"h":24,"abs_x":1088,"abs_y":4561}' className="font-medium text-gray-900 mb-4">Product</h4>
<ul bis_size='{"x":608,"y":4558,"w":217,"h":48,"abs_x":1088,"abs_y":4601}' className="space-y-2 text-sm text-gray-500">
<li bis_size='{"x":608,"y":4558,"w":217,"h":20,"abs_x":1088,"abs_y":4601}'><a bis_size='{"x":608,"y":4559,"w":66,"h":17,"abs_x":1088,"abs_y":4602}' className="hover:text-gray-900 transition-colors" href="#">Discovery</a></li>
<li bis_size='{"x":608,"y":4586,"w":217,"h":20,"abs_x":1088,"abs_y":4629}'><a bis_size='{"x":608,"y":4587,"w":64,"h":17,"abs_x":1088,"abs_y":4630}' className="hover:text-gray-900 transition-colors" href="#">Validation</a></li>
</ul>
</div>
<div bis_size='{"x":857,"y":4518,"w":217,"h":154,"abs_x":1337,"abs_y":4561}'>
<h4 bis_size='{"x":857,"y":4518,"w":217,"h":24,"abs_x":1337,"abs_y":4561}' className="font-medium text-gray-900 mb-4">Company</h4>
<ul bis_size='{"x":857,"y":4558,"w":217,"h":48,"abs_x":1337,"abs_y":4601}' className="space-y-2 text-sm text-gray-500">
<li bis_size='{"x":857,"y":4558,"w":217,"h":20,"abs_x":1337,"abs_y":4601}'><a bis_size='{"x":857,"y":4559,"w":39,"h":17,"abs_x":1337,"abs_y":4602}' className="hover:text-gray-900 transition-colors" href="#">About</a></li>
<li bis_size='{"x":857,"y":4586,"w":217,"h":20,"abs_x":1337,"abs_y":4629}'><a bis_size='{"x":857,"y":4587,"w":29,"h":17,"abs_x":1337,"abs_y":4630}' className="hover:text-gray-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div bis_size='{"x":1107,"y":4518,"w":217,"h":154,"abs_x":1587,"abs_y":4561}'>
<h4 bis_size='{"x":1107,"y":4518,"w":217,"h":24,"abs_x":1587,"abs_y":4561}' className="font-medium text-gray-900 mb-4">Legal</h4>
<ul bis_size='{"x":1107,"y":4558,"w":217,"h":48,"abs_x":1587,"abs_y":4601}' className="space-y-2 text-sm text-gray-500">
<li bis_size='{"x":1107,"y":4558,"w":217,"h":20,"abs_x":1587,"abs_y":4601}'><a bis_size='{"x":1107,"y":4559,"w":49,"h":17,"abs_x":1587,"abs_y":4602}' className="hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li bis_size='{"x":1107,"y":4586,"w":217,"h":20,"abs_x":1587,"abs_y":4629}'><a bis_size='{"x":1107,"y":4587,"w":41,"h":17,"abs_x":1587,"abs_y":4630}' className="hover:text-gray-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":109,"y":4720,"w":1216,"h":49,"abs_x":589,"abs_y":4763}' className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p bis_size='{"x":109,"y":4753,"w":236,"h":16,"abs_x":589,"abs_y":4796}' className="text-xs text-gray-400">© 2023 Entrapeer Inc. All rights reserved.</p>
<div bis_size='{"x":1197,"y":4753,"w":127,"h":16,"abs_x":1677,"abs_y":4796}' className="flex items-center gap-2 text-xs text-gray-400">
<span bis_size='{"x":1197,"y":4757,"w":8,"h":8,"abs_x":1677,"abs_y":4800}' className="w-2 h-2 rounded-full bg-green-500"></span>
                    System Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
