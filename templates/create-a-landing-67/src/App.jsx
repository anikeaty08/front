import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data for Neighborhoods
        const cityData = {
            vancouver: {
                title: "Vancouver",
                subtitle: "The Cultural Core",
                pro: "Proximity to everything. You are never more than 10 minutes from a beach, a forest, or a five-star meal.",
                con: "High entry price. You pay a premium for the 'Vancouver' postal code and smaller square footage."
            },
            richmond: {
                title: "Richmond",
                subtitle: "The Family Hub",
                pro: "Incredibly walkable and family-oriented. Steveston Village offers a unique 'small-town' charm by the water. Best Asian cuisine in NA.",
                con: "Limited basements due to the high water table; mostly crawl spaces or two-story builds."
            },
            burnaby: {
                title: "Burnaby",
                subtitle: "The High-Rise Heart",
                pro: "Unbeatable transit. You are 15 minutes away from almost every other city in the region via SkyTrain. Modern, vertical living.",
                con: "Construction fatigue. It is a city in transition, meaning lots of cranes and noise in the major hubs."
            },
            surrey: {
                title: "Surrey",
                subtitle: "The Growth Engine",
                pro: "The 'Best Value per Square Foot.' You can still find a yard here without winning the lottery. Modern infrastructure.",
                con: "Traffic congestion. The infrastructure is racing to keep up with the population boom."
            },
            northvan: {
                title: "North Vancouver",
                subtitle: "Nature Lover’s Den",
                pro: "Unrivaled access to the outdoors. If you ski, hike, or bike, this is your paradise. Mountains in your backyard.",
                con: "The Bridges. Traffic on the Lions Gate or Ironworkers can be unpredictable and frustrating."
            },
            coquitlam: {
                title: "Coquitlam",
                subtitle: "The Suburban Sweet Spot",
                pro: "The Evergreen Extension. Easy SkyTrain access while maintaining a quiet, safe suburban feel for kids.",
                con: "It’s the 'Rain Capital.' Being nestled against the mountains means a few more grey days than Richmond."
            },
            langley: {
                title: "Langley",
                subtitle: "The New Frontier",
                pro: "Future-proofing. With the SkyTrain expansion coming, property values here have massive upside potential.",
                con: "It’s a 'Driving City.' While improving, you’ll still rely heavily on your car for most errands."
            },
            delta: {
                title: "Delta",
                subtitle: "The Sunny Escape",
                pro: "Community feel. People know their neighbors here, and the pace of life is much more relaxed. Sunny!",
                con: "The George Massey Tunnel. Commuting during rush hour remains the biggest hurdle for Delta residents."
            }
        };

        // Zone Modal Logic
        function showZone(city) {
            const data = cityData[city];
            if(!data) return;

            document.getElementById('zone-tag').innerText = city.toUpperCase();
            document.getElementById('zone-title').innerText = data.title;
            document.getElementById('zone-subtitle').innerText = data.subtitle;
            document.getElementById('zone-pro').innerText = data.pro;
            document.getElementById('zone-con').innerText = data.con;

            document.getElementById('zone-modal').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('zone-modal').classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeZone() {
            document.getElementById('zone-modal').classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                document.getElementById('zone-modal').classList.add('hidden');
            }, 300);
        }

        // 2022 vs 2026 Toggle Logic
        const comparisonData = {
            2022: {
                negotiation: { label: "Sellers held leverage", text: "Properties sold over asking price within days. Buyers faced a 'take it or leave it' ultimatum." },
                safety: { label: "Subject-Free Offers", text: "Buyers were forced to skip inspections and financing conditions. High risk of financial ruin." },
                inventory: { label: "Record Lows", text: "Panic buying. Forced to settle for homes that didn't meet needs or were in bad areas." },
                price: { label: "Artificial Scarcity", text: "FOMO driven pricing. Aggregate prices peaked at unsustainable levels ($1.75M avg)." }
            },
            2026: {
                negotiation: { label: "You have leverage", text: "Sellers are motivated. You can successfully negotiate for price reductions and repair credits." },
                safety: { label: "7–14 Days Subjects", text: "Safety first. Time for inspections and financing. Plus, the BC Rescission Period safety net." },
                inventory: { label: "Decade High Inventory", text: "Plenty of options. Wait for the right layout and school catchment without fear of FOMO." },
                price: { label: "Rational Pricing", text: "Buying at a data-supported price point rather than a speculative peak. Healthy correction." }
            }
        };

        function setYear(year) {
            const data = comparisonData[year];
            
            // Buttons
            const btn2022 = document.getElementById('btn-2022');
            const btn2026 = document.getElementById('btn-2026');
            
            if (year === 2022) {
                btn2022.className = "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-[#BC4749] text-white shadow-md";
                btn2026.className = "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-stone-400 hover:text-stone-600";
                
                // Card Styling for 2022 (More Danger/Urgency look)
                document.querySelectorAll('#comparison-grid .w-10').forEach(el => {
                    el.classList.remove('bg-[#E8EDDF]', 'text-[#344E41]');
                    el.classList.add('bg-[#fee2e2]', 'text-[#BC4749]');
                });
                document.querySelectorAll('#comparison-grid p.uppercase').forEach(el => {
                    el.classList.remove('text-[#344E41]');
                    el.classList.add('text-[#BC4749]');
                });

            } else {
                btn2026.className = "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-[#344E41] text-white shadow-md";
                btn2022.className = "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-stone-400 hover:text-stone-600";

                 // Card Styling for 2026 (Calm/Safe look)
                 document.querySelectorAll('#comparison-grid .w-10').forEach(el => {
                    el.classList.add('bg-[#E8EDDF]', 'text-[#344E41]');
                    el.classList.remove('bg-[#fee2e2]', 'text-[#BC4749]');
                });
                document.querySelectorAll('#comparison-grid p.uppercase').forEach(el => {
                    el.classList.add('text-[#344E41]');
                    el.classList.remove('text-[#BC4749]');
                });
            }

            // Update Text
            updateCard('card-negotiation', data.negotiation);
            updateCard('card-safety', data.safety);
            updateCard('card-inventory', data.inventory);
            updateCard('card-price', data.price);
        }

        function updateCard(id, data) {
            const container = document.getElementById(id);
            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = `
                    <p class="text-xs font-bold uppercase tracking-wide mb-2 ${document.getElementById('btn-2022').classList.contains('bg-[#BC4749]') ? 'text-[#BC4749]' : 'text-[#344E41]'}">${data.label}</p>
                    <p class="text-sm text-stone-600 leading-relaxed">${data.text}</p>
                `;
                container.style.opacity = '1';
            }, 200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#344E41] text-[#DAD7CD] overflow-hidden py-3 relative z-50 border-b border-[#DAD7CD]/10">
<div className="marquee-container group">
<div className="marquee-content text-xs font-medium tracking-wide">
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:trending-down"></iconify-icon> Interest Rates just dropped by 0.25%</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:home"></iconify-icon> New Townhomes in Richmond just hit the market</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:shield-check"></iconify-icon> Subject removal periods are back to 7-14 days (Safety first!)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:calendar"></iconify-icon> Booking coffee chats for Fall 2026 planning</span>

<span className="flex items-center gap-2 ml-12"><iconify-icon className="text-[#A3B18A]" icon="lucide:trending-down"></iconify-icon> Interest Rates just dropped by 0.25%</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:home"></iconify-icon> New Townhomes in Richmond just hit the market</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:shield-check"></iconify-icon> Subject removal periods are back to 7-14 days (Safety first!)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:calendar"></iconify-icon> Booking coffee chats for Fall 2026 planning</span>
</div>
<div aria-hidden="true" className="marquee-content text-xs font-medium tracking-wide">
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:trending-down"></iconify-icon> Interest Rates just dropped by 0.25%</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:home"></iconify-icon> New Townhomes in Richmond just hit the market</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:shield-check"></iconify-icon> Subject removal periods are back to 7-14 days (Safety first!)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:calendar"></iconify-icon> Booking coffee chats for Fall 2026 planning</span>
<span className="flex items-center gap-2 ml-12"><iconify-icon className="text-[#A3B18A]" icon="lucide:trending-down"></iconify-icon> Interest Rates just dropped by 0.25%</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:home"></iconify-icon> New Townhomes in Richmond just hit the market</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:shield-check"></iconify-icon> Subject removal periods are back to 7-14 days (Safety first!)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#A3B18A]" icon="lucide:calendar"></iconify-icon> Booking coffee chats for Fall 2026 planning</span>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-40 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-[#DAD7CD]/30">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#344E41] flex items-center justify-center text-[#FDFCF8] group-hover:scale-110 transition-transform">
<span className="serif italic font-bold text-lg">J</span>
</div>
<span className="serif text-xl font-semibold tracking-tight text-[#344E41]">Jonie Tee</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-[#344E41]" href="#philosophy">My Philosophy</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#344E41]" href="#neighborhoods">Neighborhoods</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#344E41]" href="#roadmap">Process</a>
</div>
<button className="bg-[#344E41] hover:bg-[#3A5A40] text-white text-xs font-semibold py-3 px-6 rounded-full transition-all shadow-lg shadow-[#344E41]/20 flex items-center gap-2">
<iconify-icon icon="lucide:coffee" width="14"></iconify-icon>
<span>Let's Grab Coffee</span>
</button>
</div>
</nav>

<header className="relative pt-6 md:pt-12 pb-20 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

<div className="w-full lg:w-1/2 relative order-1 lg:order-2">
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-2xl shadow-[#344E41]/10 md:rotate-2 hover:rotate-0 transition-all duration-700">
<img alt="Jonie Tee Asian Realtor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#344E41]/40 to-transparent"></div>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg max-w-[220px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-[#E8EDDF] rounded-full flex items-center justify-center text-[#344E41]">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</div>
<span className="text-xs font-bold text-[#344E41] tracking-tight">Average Response</span>
</div>
<div className="text-2xl font-semibold serif text-stone-900 tracking-tight">30 Mins</div>
<div className="text-[10px] text-stone-500 mt-1">Speed wins deals.</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#DAD7CD] rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#A3B18A] rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
</div>

<div className="w-full lg:w-1/2 relative z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8EDDF] text-[#344E41] text-[10px] font-bold tracking-widest uppercase mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#344E41] animate-pulse"></span>
                        Friend First. Realtor Second.
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl text-[#1C1917] mb-8 leading-[1.05] serif tracking-tight">
                        I’m not here to  sell you a house.
                    </h1>
<h2 className="text-2xl md:text-3xl text-[#3A5A40] mb-8 leading-snug serif italic">
                        I’m here to help my friend find a home.
                    </h2>
<p className="text-stone-600 text-base mb-10 leading-relaxed max-w-lg font-light">
                        Most realtors want a commission and a 'Sold' sign. I want to be the person you call when you need a plumber three years from now. I’m Jonie—your real estate partner for life.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#344E41] hover:bg-[#2d4438] text-white py-4 px-8 rounded-full text-sm font-semibold shadow-lg shadow-[#344E41]/20 flex items-center justify-center gap-2 transition-all">
                            Start Your Search
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#E8EDDF]/30" id="philosophy">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#344E41] font-bold tracking-[0.2em] text-[10px] uppercase mb-3 block">The Difference</span>
<h2 className="text-4xl md:text-5xl text-[#1C1917] serif tracking-tight">Jonie vs. "The Other Guys"</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-400">The "Quick Bucks" Agent</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 items-start text-stone-400">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:x" width="16"></iconify-icon>
<p className="text-sm">Disappears the second the keys are handed over.</p>
</li>
<li className="flex gap-4 items-start text-stone-400">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:x" width="16"></iconify-icon>
<p className="text-sm">Pushes you to bid higher so they can close faster.</p>
</li>
<li className="flex gap-4 items-start text-stone-400">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:x" width="16"></iconify-icon>
<p className="text-sm">Takes 24 hours to reply to a text. "Just a transaction."</p>
</li>
</ul>
</div>

<div className="bg-[#344E41] p-10 rounded-[2.5rem] shadow-2xl shadow-[#344E41]/20 text-[#FDFCF8] relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<div className="w-12 h-12 bg-[#588157] rounded-full flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="lucide:heart-handshake" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white serif italic">Jonie Tee: Your Friend</h3>
</div>
<ul className="space-y-6 relative z-10">
<li className="flex gap-4 items-start">
<iconify-icon className="mt-1 text-[#A3B18A] flex-shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<p className="text-sm font-light">Need a handyman, plumber, gardener? I got a vetted list of professionals for your needs!</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-1 text-[#A3B18A] flex-shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<p className="text-sm font-light"> If it's a money pit, I'll tell you—even if it costs me the sale.</p>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-1 text-[#A3B18A] flex-shrink-0" icon="lucide:check-circle" width="16"></iconify-icon>
<p className="text-sm font-light">Replies quickly, feels like seeing a house for sale with a friend, instead of being pressured to purchase.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCF8]" id="neighborhoods">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 text-center">
<span className="text-[#344E41] font-bold tracking-[0.2em] text-[10px] uppercase mb-3 block">Jonie's 2026 Guide</span>
<h2 className="text-4xl text-[#1C1917] serif tracking-tight">Lower Mainland Heat Map</h2>
<p className="text-stone-500 mt-4 text-sm font-light">Click on a zone to get the real scoop. Lifestyle over zip codes.</p>
</div>

<div className="relative w-full max-w-5xl mx-auto bg-[#F0F4EF] rounded-[2rem] p-4 shadow-xl shadow-[#344E41]/5 overflow-hidden border border-[#DAD7CD]/50">
<div className="relative w-full aspect-[16/9] bg-[#E0DBC5] rounded-xl overflow-hidden group">

<img alt="Lower Mainland Map Background" className="w-full h-full object-cover sepia-[.4] contrast-100 opacity-60 mix-blend-multiply pointer-events-none" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#F0F4EF_100%)] opacity-40 pointer-events-none"></div>


<div className="map-hotspot" onclick="showZone('vancouver')" style={{top: '25%', left: '15%', width: '12%', height: '18%'}}>
<span className="hotspot-label">Vancouver</span>
</div>

<div className="map-hotspot" onclick="showZone('richmond')" style={{top: '55%', left: '18%', width: '15%', height: '20%'}}>
<span className="hotspot-label">Richmond</span>
</div>

<div className="map-hotspot" onclick="showZone('burnaby')" style={{top: '30%', left: '35%', width: '10%', height: '15%'}}>
<span className="hotspot-label">Burnaby</span>
</div>

<div className="map-hotspot" onclick="showZone('northvan')" style={{top: '10%', left: '25%', width: '15%', height: '12%'}}>
<span className="hotspot-label">North Van</span>
</div>

<div className="map-hotspot" onclick="showZone('surrey')" style={{top: '50%', left: '50%', width: '18%', height: '22%'}}>
<span className="hotspot-label">Surrey</span>
</div>

<div className="map-hotspot" onclick="showZone('coquitlam')" style={{top: '25%', left: '55%', width: '12%', height: '15%'}}>
<span className="hotspot-label">Coquitlam</span>
</div>

<div className="map-hotspot" onclick="showZone('delta')" style={{top: '70%', left: '30%', width: '12%', height: '15%'}}>
<span className="hotspot-label">Delta</span>
</div>

<div className="map-hotspot" onclick="showZone('langley')" style={{top: '55%', left: '75%', width: '15%', height: '20%'}}>
<span className="hotspot-label">Langley</span>
</div>
</div>

<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col justify-center items-center p-8 md:p-12 text-center transition-all duration-300" id="zone-modal">
<button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 text-stone-500" onclick="closeZone()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="max-w-2xl w-full" id="modal-content">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDDF] text-[#344E41] text-[10px] font-bold tracking-widest uppercase mb-6" id="zone-tag">
                            Overview
                        </div>
<h3 className="text-3xl md:text-4xl serif text-[#1C1917] mb-2" id="zone-title">Select a Zone</h3>
<p className="text-[#344E41] font-serif italic text-lg mb-8" id="zone-subtitle">Explore the map to see details.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="bg-[#FAFAF9] p-6 rounded-2xl border border-stone-100">
<h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#588157] mb-3">
<iconify-icon icon="lucide:thumbs-up"></iconify-icon> The Pro
                                </h4>
<p className="text-sm text-stone-600 leading-relaxed font-light" id="zone-pro">...</p>
</div>
<div className="bg-[#FAFAF9] p-6 rounded-2xl border border-stone-100">
<h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BC4749] mb-3">
<iconify-icon icon="lucide:alert-circle"></iconify-icon> The Con
                                </h4>
<p className="text-sm text-stone-600 leading-relaxed font-light" id="zone-con">...</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F0F4EF] py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<span className="text-[#344E41] font-bold tracking-[0.2em] text-[10px] uppercase mb-3">Market Shift</span>
<h2 className="text-4xl text-[#1C1917] serif mb-8 text-center tracking-tight">Forget the "COVID Craze"</h2>

<div className="relative bg-white rounded-full p-1.5 shadow-sm inline-flex items-center border border-stone-200">
<button className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-stone-400 hover:text-stone-600" id="btn-2022" onclick="setYear(2022)">2022 (Peak)</button>
<button className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all bg-[#344E41] text-white shadow-md" id="btn-2026" onclick="setYear(2026)">2026 (Now)</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="comparison-grid">

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 rounded-full bg-[#E8EDDF] flex items-center justify-center text-[#344E41] mb-6">
<iconify-icon icon="lucide:gavel" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1C1917] mb-4">Negotiation Power</h3>
<div id="card-negotiation">
<p className="text-xs font-bold text-[#344E41] uppercase tracking-wide mb-2">You have leverage</p>
<p className="text-sm text-stone-600 leading-relaxed">Sellers are motivated. You can successfully negotiate for price reductions and repair credits.</p>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 rounded-full bg-[#E8EDDF] flex items-center justify-center text-[#344E41] mb-6">
<iconify-icon icon="lucide:shield-check" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1C1917] mb-4">Safety &amp; Due Diligence</h3>
<div id="card-safety">
<p className="text-xs font-bold text-[#344E41] uppercase tracking-wide mb-2">7–14 Days Subjects</p>
<p className="text-sm text-stone-600 leading-relaxed">Safety first. Time for inspections and financing. Plus, the BC Rescission Period safety net.</p>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 rounded-full bg-[#E8EDDF] flex items-center justify-center text-[#344E41] mb-6">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1C1917] mb-4">Inventory &amp; Choice</h3>
<div id="card-inventory">
<p className="text-xs font-bold text-[#344E41] uppercase tracking-wide mb-2">Decade High Inventory</p>
<p className="text-sm text-stone-600 leading-relaxed">Plenty of options. Wait for the right layout and school catchment without fear of FOMO.</p>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-10 h-10 rounded-full bg-[#E8EDDF] flex items-center justify-center text-[#344E41] mb-6">
<iconify-icon icon="lucide:trending-up" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1C1917] mb-4">Real Value</h3>
<div id="card-price">
<p className="text-xs font-bold text-[#344E41] uppercase tracking-wide mb-2">Rational Pricing</p>
<p className="text-sm text-stone-600 leading-relaxed">Buying at a data-supported price point rather than a speculative peak. Healthy correction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="roadmap">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl text-[#1C1917] serif text-center mb-16 tracking-tight">The Roadmap Home</h2>
<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-px bg-stone-200 md:left-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-20 md:pl-0">
<h3 className="text-xl serif font-semibold text-[#344E41] mb-2">The Coffee Strategy</h3>
<p className="text-sm text-stone-500 leading-relaxed">We don't talk houses; we talk life. Do you need a 10-minute commute? A yard for the dog? We build the "Dream List" over a latte.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 bg-[#FDFCF8] border border-stone-100 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform text-[#344E41]">
<iconify-icon icon="lucide:coffee" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group">
<div className="md:w-1/2 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 bg-[#FDFCF8] border border-stone-100 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform text-[#344E41]">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 pl-20 md:pl-0 order-3 md:order-3">
<h3 className="text-xl serif font-semibold text-[#344E41] mb-2">The "No-Stone-Unturned" Search</h3>
<p className="text-sm text-stone-500 leading-relaxed">I look at "Shadow Inventory" and off-market leads. I check the "bones" so you don't get stuck with a leaky condo.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 pl-20 md:pl-0">
<h3 className="text-xl serif font-semibold text-[#344E41] mb-2">The "I've Got Your Back" Negotiation</h3>
<p className="text-sm text-stone-500 leading-relaxed">I negotiate like it’s my own money. Using data, not emotions, to get the seller to drop the price or fix the floors.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 bg-[#FDFCF8] border border-stone-100 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform text-[#344E41]">
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 order-3 md:order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 bg-[#344E41] text-white rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:party-popper" width="20"></iconify-icon>
</div>
<div className="md:w-1/2 pl-20 md:pl-0 order-3 md:order-3">
<h3 className="text-xl serif font-semibold text-[#344E41] mb-2">The Celebration &amp; Beyond</h3>
<p className="text-sm text-stone-500 leading-relaxed">The deal is done, but I'm not. You get my "Gold List" of vetted plumbers, electricians, and painters for life.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-[#FDFCF8] py-16">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-[#344E41] flex items-center justify-center text-[#FDFCF8]">
<span className="serif italic font-bold text-lg">J</span>
</div>
<span className="serif text-xl font-semibold tracking-tight">Jonie Tee</span>
</div>
<p className="text-stone-400 text-sm max-w-xs">Your friend in Real Estate. Helping you find home in the Lower Mainland.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center hover:bg-[#344E41] transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center hover:bg-[#344E41] transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center hover:bg-[#344E41] transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group" href="#">
<div className="absolute bottom-16 right-0 bg-white p-4 rounded-xl shadow-xl shadow-stone-900/10 w-48 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
<p className="text-xs text-stone-600">Quick question about a listing? Text me!</p>
<div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45"></div>
</div>
<div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
<iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
</div>
</a>


    </>
  );
}
