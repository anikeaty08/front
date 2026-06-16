import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Tab Logic for "Big Challenges" section
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('[data-tab]');
            const contents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Reset all tabs to inactive styles
                    tabs.forEach(t => {
                        t.className = "px-6 py-3 rounded-full text-[#363E5D] hover:bg-gray-100 text-sm font-medium transition-colors";
                    });
                    
                    // Set active tab styles
                    tab.className = "px-6 py-3 rounded-full bg-[#2463EB] text-white text-sm font-medium transition-colors";

                    // Hide all contents
                    contents.forEach(c => c.classList.remove('active'));

                    // For simplicity in this static demo, we'll just show tab-1 content regardless of which tab is clicked
                    // since the exact content for other tabs wasn't provided in the screenshot. 
                    // In a real app, you'd match the data-tab value to the content ID.
                    document.getElementById('tab-1').classList.add('active');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none bg-grid opacity-60 z-0"></div>

<nav className="relative z-50 w-full border-b border-[#203B3A] bg-[#072524]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<img alt="Topanga Logo" className="h-6 object-contain" src="https://cdn.prod.website-files.com/681852a2f13bab0611d5d62c/681cb6b42f935fef084dedcf_TOPANGA%20Full%20Logo%201.svg"/>
</div>
<div className="hidden lg:flex items-center gap-8 text-base text-[#FCFAF5]/80 font-medium">
<button className="flex items-center gap-1 hover:text-white transition-colors">Solutions <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i></button>
<button className="flex items-center gap-1 hover:text-white transition-colors">Resources <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i></button>
<button className="flex items-center gap-1 hover:text-white transition-colors">Customer Stories <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i></button>
<button className="flex items-center gap-1 hover:text-white transition-colors">Company <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i></button>
</div>
<div className="flex items-center gap-6">
<a className="font-mono text-sm tracking-widest uppercase hover:text-[#E2F89C] transition-colors hidden sm:block text-[#FCFAF5]/80" href="#">Login</a>
<a className="font-mono text-sm tracking-widest uppercase bg-[#E2F89C] text-[#072524] px-6 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2" href="#">
                    Book a demo
                </a>
</div>
</div>
</nav>
<main className="relative z-10 flex-grow">

<section className="pt-32 pb-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-8">
                    Smarter systems for foodservice teams who hate wasting <span className="text-[#E2F89C]">food</span>
</h1>
<p className="text-xl md:text-2xl text-[#FCFAF5]/80 max-w-3xl mb-12 leading-relaxed">
                    We help commercial kitchens track reusable containers, curb overproduction, and optimize operations to waste less and save more.
                </p>
<div className="flex flex-wrap items-center gap-6">
<a className="font-mono text-sm tracking-widest uppercase bg-[#E2F89C] text-[#072524] px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center gap-2" href="#">
                        Book a demo
                    </a>
<a className="group font-mono text-sm tracking-widest uppercase text-white flex items-center gap-2 hover:text-[#E2F89C] transition-colors border-b border-transparent hover:border-[#E2F89C] pb-1" href="#">
                        See Results
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-[#203B3A] bg-[#072524]/50">
<div className="max-w-7xl mx-auto px-6 mb-8">
<h3 className="font-mono text-xs tracking-[0.2em] text-[#E2F89C] uppercase text-center">Partnering with 70+ culinary teams in North America</h3>
</div>
<div className="marquee-container w-full">
<div className="marquee-content flex gap-16 items-center px-8 opacity-60">

<span className="text-3xl font-medium tracking-tight">GRUBHUB</span>
<span className="text-2xl font-medium tracking-tight">VANDERBILT UNIVERSITY</span>
<span className="text-3xl font-medium tracking-tighter italic">Chartwells</span>
<span className="text-3xl font-medium tracking-tight lowercase flex items-center gap-1">aramark <i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="0"></i></span>
<span className="text-2xl font-medium tracking-widest">STARSHIP</span>
<span className="text-2xl font-medium tracking-tight flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle-dot" strokeWidth="1.5"></i> JAMIX</span>

<span className="text-3xl font-medium tracking-tight">GRUBHUB</span>
<span className="text-2xl font-medium tracking-tight">VANDERBILT UNIVERSITY</span>
<span className="text-3xl font-medium tracking-tighter italic">Chartwells</span>
<span className="text-3xl font-medium tracking-tight lowercase flex items-center gap-1">aramark <i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="0"></i></span>
<span className="text-2xl font-medium tracking-widest">STARSHIP</span>
<span className="text-2xl font-medium tracking-tight flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle-dot" strokeWidth="1.5"></i> JAMIX</span>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs tracking-[0.2em] text-[#E2F89C] uppercase mb-4 block">Our Products</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Innovations Across the Service Cycle</h2>
<p className="text-lg md:text-xl text-[#FCFAF5]/80 max-w-3xl mx-auto">
                        Bring your waste reduction efforts under one roof with our two powerful platforms, StreamLine and ReusePass. We support culinary programs at universities, healthcare facilities, corporations, and beyond.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#FCFAF5] p-2 flex flex-col group">
<div className="bg-gray-100 w-full h-[400px] relative overflow-hidden mb-8">
<img alt="StreamLine Scale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/6844e2c8a07325ec6fd0cc7e_w%3D2000.jpeg"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">StreamLine</span>
<h3 className="text-3xl text-[#121C40] font-medium tracking-tight mb-4">Optimize Production</h3>
<p className="text-lg text-[#363E5D] mb-8 leading-relaxed flex-grow">
                                Get accurate service results—10X faster than ever before. Using StreamLine smart scales, record prepared, carryover, and wasted food. AI then gives chefs data-driven guidance to improve forecasts, prevent overproduction, and cut costs.
                            </p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-200">
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2" href="#">
                                    Find out more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<span className="flex items-center gap-2 text-base text-[#363E5D]">
<i className="w-5 h-5 text-[#2463EB]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Cut back-of-house food waste in half
                                </span>
</div>
</div>
</div>

<div className="bg-[#FCFAF5] p-2 flex flex-col group">
<div className="bg-[#E9F3ED] w-full h-[400px] relative overflow-hidden mb-8 flex items-center justify-center">
<img alt="ReusePass App" className="h-[90%] w-auto object-contain transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/681852a2f13bab0611d5d62c/6928b19d15d5a3172b34248a_reuse-p-800.webp"/>
</div>
<div className="p-8 flex-grow flex flex-col">
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">ReusePass</span>
<h3 className="text-3xl text-[#121C40] font-medium tracking-tight mb-4">Track Reusable Containers</h3>
<p className="text-lg text-[#363E5D] mb-8 leading-relaxed flex-grow">
                                Cut single-use packaging from your dining operation with the leading reusables platform. Trusted by 90+ teams, ReusePass makes it easy for diners to take waste-free meals on the go, protecting both the planet and your bottom line.
                            </p>
<div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-200">
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2" href="#">
                                    Find out more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<span className="flex items-center gap-2 text-base text-[#363E5D]">
<i className="w-5 h-5 text-[#2463EB]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Avg. 98%+ container return rate
                                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#203B3A]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs tracking-[0.2em] text-[#E2F89C] uppercase mb-4 block">Big Challenges</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Real Solutions for Rising Pressures</h2>
<p className="text-lg md:text-xl text-[#FCFAF5]/80 max-w-3xl mx-auto">
                        Waste, and the cost of inefficiencies, keeps growing—as do diners' expectations. ReusePass and StreamLine turn these operational challenges into opportunities for real impact.
                    </p>
</div>
<div className="bg-[#FCFAF5] p-2">

<div className="flex flex-wrap items-center justify-center gap-2 p-4 border-b border-gray-200 bg-white">
<button className="px-6 py-3 rounded-full bg-[#2463EB] text-white text-sm font-medium transition-colors" data-tab="tab-1">Optimize Cost per Plate</button>
<button className="px-6 py-3 rounded-full text-[#363E5D] hover:bg-gray-100 text-sm font-medium transition-colors" data-tab="tab-2">Make Production Smoother</button>
<button className="px-6 py-3 rounded-full text-[#363E5D] hover:bg-gray-100 text-sm font-medium transition-colors" data-tab="tab-3">Cut Packaging Costs</button>
<button className="px-6 py-3 rounded-full text-[#363E5D] hover:bg-gray-100 text-sm font-medium transition-colors" data-tab="tab-4">Reuse Without Disruption</button>
</div>

<div className="tab-content active flex-col lg:flex-row bg-white" id="tab-1">
<div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
<h3 className="text-4xl text-[#121C40] font-medium tracking-tight mb-6">Optimize Cost per Plate</h3>
<p className="text-xl text-[#363E5D] mb-12 leading-relaxed">
                                Overproduction is expensive. Our StreamLine system reveals where plans and prep don't match demand—then helps you prep smarter next cycle.
                            </p>
<div className="space-y-8">
<div>
<h4 className="text-lg font-medium text-[#121C40] flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#2463EB]" data-lucide="target" strokeWidth="1.5"></i> Accurate Service Results
                                    </h4>
<p className="text-lg text-[#363E5D] pl-8">
                                        Staff use StreamLine smart scales to capture what's prepared and carried over, not just wasted, to reveal all production nuances and inefficiencies.
                                    </p>
</div>
<div>
<h4 className="text-lg font-medium text-[#121C40] flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#2463EB]" data-lucide="line-chart" strokeWidth="1.5"></i> Clear Production Guidance
                                    </h4>
<p className="text-lg text-[#363E5D] pl-8">
                                        StreamLine's AI turns service data into action and suggests operational tweaks, so Mongolian Rice Noodles aren't tossed every Tuesday.
                                    </p>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-[#E9F8EE] p-12 lg:p-20 flex items-center justify-center relative overflow-hidden">

<div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 border border-gray-100 relative z-10">
<div className="flex justify-between items-center mb-6">
<h5 className="text-xl font-medium text-[#121C40]">Prime Rib</h5>
<span className="flex items-center gap-1 text-xs font-mono tracking-wider text-red-500 bg-red-50 px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="alert-circle" strokeWidth="1.5"></i> HIGH COST
                                    </span>
</div>
<p className="text-sm text-[#363E5D] mb-6">
                                    Last Monday (11/3) you prepared 120 portions but only 60 portions were consumed, resulting in 50% waste rate
                                </p>
<div className="bg-blue-50 text-[#2463EB] p-4 rounded text-sm flex items-center gap-2 font-medium">
<i className="w-4 h-4" data-lucide="trending-down" strokeWidth="1.5"></i> Reduce forecast to 90 portions
                                </div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#2463EB 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-[#203B3A]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="font-mono text-xs tracking-[0.2em] text-[#E2F89C] uppercase mb-4 block">500+ Kitchens Supported</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Customer Testimonials</h2>
<p className="text-lg md:text-xl text-[#FCFAF5]/80 max-w-xl">
                            We help culinary leaders across the United States run kitchens like clockwork.
                        </p>
</div>
<a className="font-mono text-sm tracking-widest uppercase bg-[#E2F89C] text-[#072524] px-6 py-3 rounded-full hover:bg-white transition-colors whitespace-nowrap self-start md:self-auto" href="#">
                        See All Case Studies
                    </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col gap-6">

<div className="border border-[#203B3A] p-8 flex flex-col h-[400px] bg-[#0A2D2C]/40 backdrop-blur-sm">
<img alt="Auburn" className="h-8 object-contain object-left mb-8 opacity-80" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/684fe03f5232f39ce3f96e62_Auburn%20-%20white.svg"/>
<p className="text-lg leading-relaxed flex-grow">
                                "When you're budgeting 60 cents for each to-go box, for each person, and now you don't have to? You can invest those savings back into the quality of the food you serve and provide a better product. At the end of..."
                            </p>
<div className="flex items-center gap-4 mt-6">
<div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden">
<img alt="Jessica" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/>
</div>
<div>
<h4 className="font-medium text-base">Jessica Vines</h4>
<p className="text-sm text-[#FCFAF5]/60">Aramark District Marketing Manager</p>
</div>
</div>
</div>

<div className="border border-[#203B3A] p-8 flex flex-col h-[300px] relative overflow-hidden group cursor-pointer bg-gradient-to-t from-[#072524] to-transparent">
<div className="absolute inset-0 bg-black/40 z-0"></div>
<img alt="Colorado State" className="h-6 object-contain object-left relative z-10 mb-auto opacity-90" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/68d2bd1bd125283b520d32aa_Colorado%20state.svg"/>
<div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-[#E2F89C] group-hover:text-[#072524] transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="play" strokeWidth="0"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight relative z-10 mt-auto w-4/5 leading-tight group-hover:text-[#E2F89C] transition-colors">
                                How Colorado State University Launched and Scaled a Reusable Container Program
                            </h3>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="border border-[#203B3A] p-8 flex flex-col justify-center items-center h-[350px] bg-[#0A2D2C]/40 backdrop-blur-sm relative overflow-hidden group">
<div className="text-[8rem] font-medium tracking-tighter leading-none text-[#E2F89C] mb-2 group-hover:scale-105 transition-transform duration-500">
                                98%
                            </div>
<p className="font-mono text-sm tracking-widest text-[#FCFAF5]/60 uppercase ml-auto">return rate</p>
</div>

<div className="border border-[#203B3A] p-8 flex flex-col justify-center items-center h-[350px] bg-[#0A2D2C]/40 backdrop-blur-sm relative overflow-hidden group">
<div className="text-[7rem] font-medium tracking-tighter leading-none text-[#E2F89C] mb-2 group-hover:scale-105 transition-transform duration-500">
                                $12K
                            </div>
<p className="font-mono text-sm tracking-widest text-[#FCFAF5]/60 uppercase ml-auto">savings</p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="border border-[#203B3A] p-8 flex flex-col h-[300px] relative overflow-hidden group cursor-pointer">
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/68d2bd5f3ef0de405bde7723_Harvest%20table-p-500.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#072524] via-transparent to-[#072524]/50 z-0"></div>
<img alt="Harvest" className="h-6 object-contain object-left relative z-10 mb-auto opacity-90 hidden" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/684fe055a5013c49c6e70569_Cal%20Poly%20-%20white.svg"/>
<span className="text-xl font-medium tracking-tighter italic relative z-10 opacity-90 mb-auto block">HARVEST<br/>TABLE</span>
<div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:bg-[#E2F89C] group-hover:text-[#072524] transition-colors">
<i className="w-4 h-4 fill-current" data-lucide="play" strokeWidth="0"></i>
</div>
<h3 className="text-xl font-medium tracking-tight relative z-10 mt-auto leading-tight group-hover:text-[#E2F89C] transition-colors">
                                How to Have a Stress-Free Reusables Rollout
                            </h3>
</div>

<div className="border border-[#203B3A] p-8 flex flex-col h-[400px] bg-[#0A2D2C]/40 backdrop-blur-sm">
<img alt="Cal Poly" className="h-6 object-contain object-left mb-8 opacity-80" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/684fe055a5013c49c6e70569_Cal%20Poly%20-%20white.svg"/>
<p className="text-lg leading-relaxed flex-grow">
                                "It truly doesn't take a lot of additional work on behalf of our frontline associates to run [ReusePass]... which is key for the sustainability (no pun intended) of a program like this. We don't get a lot of pushback fro..."
                            </p>
<div className="flex items-center gap-4 mt-6">
<div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center overflow-hidden">
<i className="w-5 h-5 text-gray-400" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-medium text-base">Kaitlin Gibbons</h4>
<p className="text-sm text-[#FCFAF5]/60">Dietitian &amp; Sustainability Coordinator</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#203B3A]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs tracking-[0.2em] text-[#E2F89C] uppercase mb-4 block">Our Guarantee</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">A Partner in Smooth Operations</h2>
<p className="text-lg md:text-xl text-[#FCFAF5]/80 max-w-3xl mx-auto">
                        It's easy to build a cutting-edge culinary program with our dedicated success team, on-demand training materials, robust integrations, and user-friendly products.
                    </p>
</div>
<div className="flex flex-col gap-6">

<div className="bg-[#FCFAF5] p-2">
<div className="flex flex-col md:flex-row bg-white border border-gray-100 h-full">
<div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">Client Success</span>
<h3 className="text-4xl text-[#121C40] font-medium tracking-tight mb-6 leading-tight">Get expert guidance</h3>
<p className="text-lg text-[#363E5D] mb-10 leading-relaxed">
                                    Our hands-on Client Success and Implementation team will oversee your program's launch, customized reporting, and continued growth.
                                </p>
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">See our products:</span>
<div className="flex gap-4">
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2" href="#">
                                        StreamLine <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2" href="#">
                                        ReusePass <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="md:w-1/2 p-4">
<div className="w-full h-full min-h-[300px] bg-gray-200 overflow-hidden relative">
<img alt="Kitchen Team" className="absolute inset-0 w-full h-full object-cover" src="https://cdn.prod.website-files.com/68221876a451e35e835cf2ca/6844e2c8d0268170cee3393d_w%3D2000.jpeg"/>
</div>
</div>
</div>
</div>

<div className="bg-[#FCFAF5] p-2">
<div className="flex flex-col md:flex-row bg-white border border-gray-100 h-full">
<div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">Integrations</span>
<h3 className="text-4xl text-[#121C40] font-medium tracking-tight mb-6 leading-tight">Connect your kitchen</h3>
<p className="text-lg text-[#363E5D] mb-10 leading-relaxed">
                                    New tools often create new siloes. ReusePass and StreamLine integrate with existing systems to sync data, save time, and protect what's working.
                                </p>
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 self-start" href="#">
                                    See all integrations <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="md:w-1/2 p-4 flex items-center justify-center bg-gray-50/50">

<div className="relative w-full max-w-sm aspect-square border border-gray-100 bg-white shadow-sm flex items-center justify-center p-8">

<div className="w-20 h-20 bg-[#2463EB] rounded-xl flex items-center justify-center shadow-lg relative z-10">
<i className="w-10 h-10 text-white" data-lucide="cloud" strokeWidth="1.5"></i>
</div>

<div className="absolute top-8 left-8 bg-white border border-gray-200 px-4 py-2 rounded shadow-sm text-sm font-medium z-10 tracking-tight">GRUBHUB</div>
<div className="absolute top-12 right-8 bg-white border border-gray-200 px-4 py-2 rounded shadow-sm text-sm font-medium z-10 tracking-widest">STARSHIP</div>
<div className="absolute bottom-12 left-10 bg-white border border-gray-200 px-4 py-2 rounded shadow-sm text-sm font-medium z-10 flex items-center gap-1"><i className="w-4 h-4" data-lucide="hexagon" strokeWidth="1.5"></i> apex</div>
<div className="absolute bottom-8 right-8 bg-white border border-gray-200 px-4 py-2 rounded shadow-sm text-sm font-medium z-10 flex items-center gap-1"><i className="w-4 h-4" data-lucide="circle-dot" strokeWidth="1.5"></i> JAMIX</div>

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{stroke: '#E5E7EB', strokeWidth: '2', strokeDasharray: '4 4', fill: 'none'}}>
<path d="M 190 190 L 100 80"></path>
<path d="M 190 190 L 280 100"></path>
<path d="M 190 190 L 120 280"></path>
<path d="M 190 190 L 280 280"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-[#FCFAF5] p-2">
<div className="flex flex-col md:flex-row bg-white border border-gray-100 h-full">
<div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
<span className="font-mono text-xs tracking-widest text-[#121C40]/60 uppercase mb-4 block">Onboarding</span>
<h3 className="text-4xl text-[#121C40] font-medium tracking-tight mb-6 leading-tight">Access on-demand training</h3>
<p className="text-lg text-[#363E5D] mb-10 leading-relaxed">
                                    Our library of ReusePass and StreamLine resources and launch materials help you onboard, on your own terms.
                                </p>
<a className="font-mono text-xs tracking-widest uppercase bg-[#2463EB] text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 self-start" href="#">
                                    Explore <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="md:w-1/2 p-4">

<div className="bg-gray-50 border border-gray-200 rounded-lg p-2 h-full flex flex-col">
<div className="flex items-center justify-between px-2 py-2 border-b border-gray-200 mb-4">
<i className="w-5 h-5 text-gray-500" data-lucide="graduation-cap" strokeWidth="1.5"></i>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
<div className="bg-[#E2F89C] rounded p-6 mb-4 relative overflow-hidden">
<span className="font-mono text-[10px] tracking-widest text-[#072524]/60 uppercase block mb-1">Welcome To</span>
<h4 className="text-xl font-medium text-[#072524] tracking-tight mb-2">ReusePass Academy</h4>
<p className="text-sm text-[#072524]/80 mb-4 w-2/3">Here you'll find resources for onboarding and launching a successful ReusePass program on your campus.</p>
<button className="bg-[#072524] text-white px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2">Explore <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i></button>

<svg className="absolute right-0 bottom-0 opacity-10 w-32 h-32 transform translate-x-8 translate-y-8" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="grid grid-cols-3 gap-2 flex-grow">
<div className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between">
<div>
<span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block mb-1">Getting Started</span>
<h5 className="text-sm font-medium text-[#121C40] leading-tight">ReusePass 101</h5>
</div>
<div className="h-12 bg-gray-100 mt-4 rounded w-full"></div>
</div>
<div className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between">
<div>
<span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block mb-1">Tutorials</span>
<h5 className="text-sm font-medium text-[#121C40] leading-tight">Designing your program</h5>
</div>
<div className="h-12 bg-gray-100 mt-4 rounded w-full relative overflow-hidden"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-t-full bg-gray-300"></div></div>
</div>
<div className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between">
<div>
<span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase block mb-1">Resources</span>
<h5 className="text-sm font-medium text-[#121C40] leading-tight">The Onboarding Roadmap</h5>
</div>
<div className="h-12 bg-gray-100 mt-4 rounded w-full flex items-end justify-center"><div className="w-full h-1/2 border-t-2 border-dashed border-gray-300"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#203B3A] pb-32">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

<div className="lg:w-1/2 bg-[#FCFAF5] p-2 flex">
<div className="bg-white p-12 lg:p-16 flex flex-col w-full">
<h2 className="text-4xl lg:text-5xl text-[#121C40] font-medium tracking-tight mb-6 leading-[1.1]">Schedule a demo to see how much you could save</h2>
<p className="text-lg text-[#363E5D] mb-10 leading-relaxed max-w-md">
                            We can cover the full product suite or focus solely on ReusePass or StreamLine, whichever best aligns with your goals.
                        </p>
<a className="font-mono text-sm tracking-widest uppercase bg-[#2463EB] text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors self-start mb-auto" href="#">
                            Request a demo
                        </a>
<div className="mt-16 pt-8 border-t border-gray-200">
<p className="text-base text-[#363E5D] italic mb-6">
                                "It has been great to use data from StreamLine to hone in on how we can reduce costs in our operations. My line cooks actually use the system because it doesn't slow them down."
                            </p>
<div>
<h4 className="font-medium text-[#121C40] text-sm">Grayson Holland</h4>
<p className="text-xs text-[#363E5D]">Former General Manager, Vanderbilt University Dining</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 border border-[#203B3A] bg-[#0A2D2C]/40 backdrop-blur-sm p-12 flex flex-col">
<img alt="Vanderbilt" className="h-10 object-contain object-left mb-16 opacity-90 brightness-0 invert" src="https://cdn.prod.website-files.com/681852a2f13bab0611d5d62c/684697d4f74d3575bbde6def_Vector.svg"/>
<div className="flex gap-4 mb-auto">
<div className="w-1/2 border-r border-[#203B3A]/50 pr-4">
<span className="font-mono text-xs tracking-widest text-[#FCFAF5]/60 uppercase block mb-4">ReusePass</span>
</div>
<div className="w-1/2 pl-4">
<span className="font-mono text-xs tracking-widest text-[#FCFAF5]/60 uppercase block mb-4">StreamLine</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-8 mt-auto pt-16">
<div className="sm:w-1/2">
<div className="text-[5rem] lg:text-[6rem] font-medium tracking-tighter leading-none mb-4 text-[#FCFAF5]">
                                78%
                            </div>
<p className="text-lg text-[#FCFAF5]/80 leading-snug">
                                Decrease in single-use<br/>packaging
                            </p>
</div>
<div className="sm:w-1/2">
<div className="text-[4rem] lg:text-[5rem] font-medium tracking-tighter leading-none mb-4 text-[#FCFAF5]">
                                $150k
                            </div>
<p className="text-lg text-[#FCFAF5]/80 leading-snug">
                                Savings from cutting<br/>overproduction
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 bg-[#0A2D2C] border-t border-[#203B3A] pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-[#203B3A] mb-12 gap-8">
<div className="flex items-center gap-3 border border-[#203B3A] rounded-full px-4 py-2">
<i className="w-4 h-4 text-[#E2F89C]" data-lucide="activity" strokeWidth="1.5"></i>
<span className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/80">All Systems Operational</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
<div className="flex flex-col">
<span className="font-medium text-[#FCFAF5] mb-1">Ready to rethink waste?</span>
<span className="text-xs text-[#FCFAF5]/60">Stay up to date on Topanga product updates, events, and more.</span>
</div>
<form className="flex w-full sm:w-auto bg-[#072524] border border-[#203B3A] rounded-full overflow-hidden focus-within:border-white/30 transition-colors">
<input className="bg-transparent border-none outline-none text-[#FCFAF5] px-6 py-3 w-full sm:w-64 text-sm placeholder:text-[#FCFAF5]/40 font-geist" placeholder="Enter your email" type="email"/>
<button className="bg-[#E2F89C] text-[#072524] px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-white transition-colors m-1 rounded-full whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div>
<h5 className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/40 mb-6 block">Solutions</h5>
<ul className="space-y-4">
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Reusable Container Tracking</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Food Waste Mitigation</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/40 mb-6 block">Company</h5>
<ul className="space-y-4">
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Career</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/40 mb-6 block">Featured Customers</h5>
<ul className="space-y-4">
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Occidental College</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Brandeis University</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Indiana University</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">McMaster University</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Boston University</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Saint Mary's College</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">SUNY New Paltz</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/40 mb-6 block">Pricing</h5>
<ul className="space-y-4">
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Reusable Container Tracking</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Food Waste Mitigation</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs tracking-widest uppercase text-[#FCFAF5]/40 mb-6 block">Resources</h5>
<ul className="space-y-4">
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Release Notes</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Academy</a></li>
<li><a className="text-[#FCFAF5]/80 hover:text-white transition-colors" href="#">Guides</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#203B3A]/50 text-[#FCFAF5]/60 text-xs gap-4">
<div className="flex items-center gap-4 flex-wrap justify-center">
<span>Copyright 2025 by Topanga.io</span>
<a className="hover:text-white transition-colors underline underline-offset-2" href="#">(818)-423-5142</a>
<a className="hover:text-white transition-colors underline underline-offset-2" href="#">hello@topanga.io</a>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors underline underline-offset-2" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors underline underline-offset-2" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors underline underline-offset-2" href="#">ScanApp Privacy Policy</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
